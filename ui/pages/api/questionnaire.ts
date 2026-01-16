import type { NextApiRequest, NextApiResponse } from "next";

interface QuestionnairePayload {
  answers?: Record<string, string>;
  questionOrder?: string[];
  submittedAt?: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { answers, questionOrder, submittedAt }: QuestionnairePayload = req.body || {};

  if (!answers || typeof answers !== "object") {
    return res.status(400).json({ message: "Invalid payload" });
  }

  console.log("Questionnaire submission", {
    answers,
    questionOrder,
    submittedAt,
    receivedAt: new Date().toISOString(),
  });

  return res.status(200).json({ success: true });
}
