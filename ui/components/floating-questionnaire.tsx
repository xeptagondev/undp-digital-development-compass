import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useMemo, useState } from "react";
import { FiMessageCircle, FiChevronLeft } from "react-icons/fi";
import { prefix } from "lib/prefix";

export interface FloatingQuestion {
  id: string;
  label: string;
  placeholder?: string;
  optional?: boolean;
  defaultValue?: string;
  helperText?: string;
  type?: "text" | "info" | "scale10";
}

interface FloatingQuestionnaireProps {
  questions?: FloatingQuestion[];
  endpoint: string;
  title?: string;
  buttonLabel?: string;
  buttonClassName?: string;
  panelClassName?: string;
}

interface AnswerState {
  [key: string]: string;
}

const defaultQuestions: FloatingQuestion[] = [
  {
    id: "intro",
    type: "info",
    label:
      "UNDP is constantly improving the Digital Development Compass and would like your help.",
    optional: true,
  },
  {
    id: "concerns",
    label: "Do you have any questions or concerns you would like to share with us?",
    placeholder: "Your questions or concerns",
  },
  {
    id: "dataset",
    label: "Is there a digital development data set we should add?",
    placeholder: "Paste the link and explain why we should add it.",
    helperText:
      "Please share the link and why we should add it to our analysis.",
  },
  {
    id: "contact",
    label:
      "If you would like us to reach out to you about these concerns, please share your contact information.",
    placeholder: "Email or phone number (optional)",
    optional: true,
  },
  {
    id: "nps",
    label:
      "How likely are you to recommend us to a friend or colleague? (1-10)",
    type: "scale10",
    optional: false,
    helperText: "0 — Not likely at all; 10 — Extremely likely",
  },
];

export default function FloatingQuestionnaire(
  props: FloatingQuestionnaireProps
) {
  const {
    questions = defaultQuestions,
    endpoint,
    title = "Share your thoughts",
    buttonLabel = "Feedback",
    buttonClassName = "",
    panelClassName = "",
  } = props;

  const initialAnswers = useMemo(() => {
    const base: AnswerState = {};
    questions.forEach((question) => {
      base[question.id] = question.defaultValue || "";
    });
    return base;
  }, [questions]);

  const [open, setOpen] = useState(false);
  const [answers, setAnswers] = useState<AnswerState>(initialAnswers);
  const [activeStep, setActiveStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [shareUrl, setShareUrl] = useState("https://digital-development-compass.undp.org");

  useEffect(() => {
    setAnswers(initialAnswers);
    setActiveStep(0);
    setSubmitted(false);
    setError(null);
  }, [initialAnswers]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location?.href) {
      setShareUrl(window.location.href);
    }
  }, []);

  const currentQuestion = questions[activeStep];
  const isLastStep = activeStep === questions.length - 1;

  const handleOpen = () => {
    if (submitted) {
      setSubmitted(false);
      setActiveStep(0);
      setAnswers(initialAnswers);
      setError(null);
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAnswerChange = (value: string) => {
    if (!currentQuestion) return;
    setError(null);
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }));
  };

  const handleNext = () => {
    if (!currentQuestion) return;
    if (
      currentQuestion.type !== "info" &&
      !currentQuestion.optional &&
      !answers[currentQuestion.id]?.trim()
    ) {
      setError("Please enter an answer before continuing.");
      return;
    }

    setActiveStep((prev) => Math.min(prev + 1, questions.length - 1));
  };

  const handlePrevious = () => {
    setError(null);
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = async () => {
    if (!currentQuestion) return;
    if (
      currentQuestion.type !== "info" &&
      !currentQuestion.optional &&
      !answers[currentQuestion.id]?.trim()
    ) {
      setError("Please enter an answer before submitting.");
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          answers,
          questionOrder: questions.map((q) => q.id),
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to submit right now.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  const restart = () => {
    setAnswers(initialAnswers);
    setActiveStep(0);
    setSubmitted(false);
    setError(null);
  };

  const renderForm = () => {
    if (!currentQuestion) return null;

    const renderInput = () => {
      if (currentQuestion.type === "info") {
        return null;
      }

      if (currentQuestion.type === "scale10") {
        return (
          <div className="flex flex-wrap gap-2" role="group" aria-label="Scale 1 to 10">
            {Array.from({ length: 10 }, (_, idx) => `${idx + 1}`).map((value) => {
              const selected = answers[currentQuestion.id] === value;
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => handleAnswerChange(value)}
                  className={`h-10 w-10 rounded-full border text-sm font-semibold transition shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-dark focus:ring-offset-1 ${
                    selected
                      ? "bg-brand-blue-dark text-white border-brand-blue-dark"
                      : "bg-white text-gray-800 border-gray-300 hover:bg-gray-50"
                  }`}
                  aria-pressed={selected}
                >
                  {value}
                </button>
              );
            })}
          </div>
        );
      }

      return (
        <textarea
          value={answers[currentQuestion.id]}
          onChange={(event) => handleAnswerChange(event.target.value)}
          className="mt-1 w-full rounded-md border border-gray-300 shadow-sm focus:border-brand-blue focus:ring-brand-blue text-base p-3"
          rows={4}
          placeholder={currentQuestion.placeholder}
        />
      );
    };

    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Dialog.Title className="text-base font-semibold text-gray-900">
              {title}
            </Dialog.Title>
            <span className="text-xs text-gray-500">
              Step {activeStep + 1} of {questions.length}
            </span>
          </div>
          <div>
            <p className="text-lg md:text-xl font-semibold text-gray-900 leading-snug">
              {currentQuestion.label}
            </p>
            {currentQuestion.helperText && (
              <p className="text-sm text-gray-600 mt-1">
                {currentQuestion.helperText}
              </p>
            )}
          </div>
          {renderInput()}
          {error && (
            <p className="text-sm text-red-600" role="alert">
              {error}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {activeStep > 0 && (
              <button
                type="button"
                onClick={handlePrevious}
                className="inline-flex items-center space-x-2 rounded-full border border-brand-blue-dark px-6 py-3 text-base font-semibold text-brand-blue-dark bg-white shadow-sm hover:bg-brand-blue/10 focus:outline-none focus:ring-2 focus:ring-brand-blue-dark focus:ring-offset-1"
              >
                <FiChevronLeft className="h-5 w-5" />
                <span>Previous</span>
              </button>
            )}
          </div>
          <div className="space-x-2">
            {!isLastStep && (
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center justify-center rounded-full bg-brand-blue-dark px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue-dark focus:ring-offset-1"
              >
                Continue
              </button>
            )}
            {isLastStep && (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={submitting}
                className="inline-flex items-center justify-center rounded-full bg-brand-blue-dark px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue-dark focus:ring-offset-1 disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderSuccess = () => {
    return (
      <div className="space-y-4">
        <Dialog.Title className="text-base font-semibold text-gray-900">
          Thanks for sharing!
        </Dialog.Title>
        <div className="space-y-3">
          <p className="text-lg font-semibold text-gray-900">
            Thank you so much for your feedback
            <span className="inline-block align-middle ml-1 min-w-[80px] border-b border-gray-300" aria-hidden="true"></span>
          </p>
          
          <div className="flex flex-wrap gap-3">
            <a
              aria-label="Share on Facebook"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-blue-dark focus:ring-offset-1"
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noreferrer"
            >
              <img src={`${prefix}/facebook.svg`} alt="Facebook" className="h-5 w-5" />
            </a>
            <a
              aria-label="Share on X"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-blue-dark focus:ring-offset-1"
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent("Check out the Digital Development Compass")}`}
              target="_blank"
              rel="noreferrer"
            >
              <img src={`${prefix}/x-twitter-brands-solid.svg`} alt="X" className="h-5 w-5" />
            </a>
            <a
              aria-label="Share on LinkedIn"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-blue-dark focus:ring-offset-1"
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noreferrer"
            >
              <img src={`${prefix}/linkedin.svg`} alt="LinkedIn" className="h-5 w-5" />
            </a>
          </div>
          <div className="pt-4">
            <a
              href="https://www.undp.org/digital"
              target="_blank"
              rel="noreferrer"
              className="block w-full text-center rounded-full bg-brand-blue-dark px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue-dark focus:ring-offset-1"
            >
              Visit UNDP.org
            </a>
          </div>
        </div>
        
      </div>
    );
  };

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        className={`fixed right-6 bottom-6 z-40 flex items-center space-x-2 rounded-full bg-brand-blue-dark px-4 py-3 text-white shadow-lg hover:bg-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 ${buttonClassName}`}
        aria-label={buttonLabel}
      >
        <FiMessageCircle className="h-5 w-5" />
        <span className="text-sm font-semibold hidden sm:inline">{buttonLabel}</span>
      </button>

      <Transition show={open} as={Fragment}>
        <Dialog onClose={handleClose} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/20" aria-hidden="true" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-end justify-end">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 translate-y-4"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-4"
            >
              <div className="pointer-events-none relative w-full">
                <Dialog.Panel
                  className={`pointer-events-auto fixed bottom-24 right-6 w-[360px] max-w-full rounded-xl bg-white p-5 shadow-2xl ring-1 ring-black/5 ${panelClassName}`}
                >
                  {/* {!submitted ? renderForm() : renderSuccess()} */}
                  { renderSuccess()}
                </Dialog.Panel>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
