"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[975],{6975:function(e,t,n){n.d(t,{Eh:function(){return xe},VY:function(){return Ce},fC:function(){return ye},xz:function(){return be}});var o=n(7294),r=n.t(o,2);const i=Boolean(null===globalThis||void 0===globalThis?void 0:globalThis.document)?o.useLayoutEffect:()=>{},c=r["useId".toString()]||(()=>{});let l=0;function s(e){const[t,n]=o.useState(c());return i((()=>{e||n((e=>null!=e?e:String(l++)))}),[e]),e||(t?`radix-${t}`:"")}function u(...e){return t=>e.forEach((e=>function(e,t){"function"==typeof e?e(t):null!=e&&(e.current=t)}(e,t)))}var a=n(7462);const d=o.forwardRef(((e,t)=>{const{children:n,...r}=e;return o.Children.toArray(n).some(m)?o.createElement(o.Fragment,null,o.Children.map(n,(e=>m(e)?o.createElement(f,(0,a.Z)({},r,{ref:t}),e.props.children):e))):o.createElement(f,(0,a.Z)({},r,{ref:t}),n)}));d.displayName="Slot";const f=o.forwardRef(((e,t)=>{const{children:n,...r}=e;return o.isValidElement(n)?o.cloneElement(n,{...h(r,n.props),ref:u(t,n.ref)}):o.Children.count(n)>1?o.Children.only(null):null}));f.displayName="SlotClone";const p=({children:e})=>o.createElement(o.Fragment,null,e);function m(e){return o.isValidElement(e)&&e.type===p}function h(e,t){const n={...t};for(const o in t){const r=e[o],i=t[o];/^on[A-Z]/.test(o)?n[o]=(...e)=>{null==i||i(...e),null==r||r(...e)}:"style"===o?n[o]={...r,...i}:"className"===o&&(n[o]=[r,i].filter(Boolean).join(" "))}return{...e,...n}}const g=["a","button","div","h2","h3","img","li","nav","p","span","svg","ul"].reduce(((e,t)=>({...e,[t]:o.forwardRef(((e,n)=>{const{asChild:r,...i}=e,c=r?d:t;return o.useEffect((()=>{window[Symbol.for("radix-ui")]=!0}),[]),e.as&&console.error(v),o.createElement(c,(0,a.Z)({},i,{ref:n}))}))})),{}),v="Warning: The `as` prop has been removed in favour of `asChild`. For details, see https://radix-ui.com/docs/primitives/overview/styling#changing-the-rendered-element",w=o.forwardRef(((e,t)=>o.createElement(g.span,(0,a.Z)({},e,{ref:t,style:{...e.style,position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}})))),E=w;var y=n(3935);const b=o.forwardRef(((e,t)=>{var n,r;const{containerRef:c,style:l,...s}=e,u=null!==(n=null==c?void 0:c.current)&&void 0!==n?n:null===globalThis||void 0===globalThis||null===(r=globalThis.document)||void 0===r?void 0:r.body,[,d]=o.useState({});return i((()=>{d({})}),[]),u?y.createPortal(o.createElement(g.div,(0,a.Z)({"data-radix-portal":""},s,{ref:t,style:u===document.body?{position:"absolute",top:0,left:0,zIndex:2147483647,...l}:void 0})),u):null})),C=o.forwardRef(((e,t)=>{const{children:n,width:r=10,height:i=5,...c}=e;return o.createElement(g.svg,(0,a.Z)({},c,{ref:t,width:r,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),e.asChild?n:o.createElement("polygon",{points:"0,0 30,0 15,10"}))})),x=C;function S(e){const[t,n]=o.useState(void 0);return o.useEffect((()=>{if(e){const t=new ResizeObserver((t=>{if(!Array.isArray(t))return;if(!t.length)return;const o=t[0];let r,i;if("borderBoxSize"in o){const e=o.borderBoxSize,t=Array.isArray(e)?e[0]:e;r=t.inlineSize,i=t.blockSize}else{const t=e.getBoundingClientRect();r=t.width,i=t.height}n({width:r,height:i})}));return t.observe(e,{box:"border-box"}),()=>{n(void 0),t.unobserve(e)}}}),[e]),t}function T(e,t){const n=O.get(e);return void 0===n?(O.set(e,{rect:{},callbacks:[t]}),1===O.size&&(R=requestAnimationFrame(_))):(n.callbacks.push(t),t(e.getBoundingClientRect())),()=>{const n=O.get(e);if(void 0===n)return;const o=n.callbacks.indexOf(t);o>-1&&n.callbacks.splice(o,1),0===n.callbacks.length&&(O.delete(e),0===O.size&&cancelAnimationFrame(R))}}let R;const O=new Map;function _(){const e=[];O.forEach(((t,n)=>{const o=n.getBoundingClientRect();var r,i;i=o,((r=t.rect).width!==i.width||r.height!==i.height||r.top!==i.top||r.right!==i.right||r.bottom!==i.bottom||r.left!==i.left)&&(t.rect=o,e.push(t))})),e.forEach((e=>{e.callbacks.forEach((t=>t(e.rect)))})),R=requestAnimationFrame(_)}function A(e){const[t,n]=o.useState();return o.useEffect((()=>{if(e){const t=T(e,n);return()=>{n(void 0),t()}}}),[e]),t}function N(e,t=[]){let n=[];const r=()=>{const t=n.map((e=>o.createContext(e)));return function(n){const r=(null==n?void 0:n[e])||t;return o.useMemo((()=>({[`__scope${e}`]:{...n,[e]:r}})),[n,r])}};return r.scopeName=e,[function(t,r){const i=o.createContext(r),c=n.length;function l(t){const{scope:n,children:r,...l}=t,s=(null==n?void 0:n[e][c])||i,u=o.useMemo((()=>l),Object.values(l));return o.createElement(s.Provider,{value:u},r)}return n=[...n,r],l.displayName=t+"Provider",[l,function(n,l){const s=(null==l?void 0:l[e][c])||i,u=o.useContext(s);if(u)return u;if(void 0!==r)return r;throw new Error(`\`${n}\` must be used within \`${t}\``)}]},M(r,...t)]}function M(...e){const t=e[0];if(1===e.length)return t;const n=()=>{const n=e.map((e=>({useScope:e(),scopeName:e.scopeName})));return function(e){const r=n.reduce(((t,{useScope:n,scopeName:o})=>({...t,...n(e)[`__scope${o}`]})),{});return o.useMemo((()=>({[`__scope${t.scopeName}`]:r})),[r])}};return n.scopeName=t.scopeName,n}function k(...e){return o.useCallback(function(...e){return t=>e.forEach((e=>function(e,t){"function"==typeof e?e(t):null!=e&&(e.current=t)}(e,t)))}(...e),e)}function P(e,t,n){const o=e["x"===n?"left":"top"],r="x"===n?"width":"height",i=e[r],c=t[r];return{before:o-c,start:o,center:o+(i-c)/2,end:o+i-c,after:o+i}}function $(e){return{position:"absolute",top:0,left:0,minWidth:"max-content",willChange:"transform",transform:`translate3d(${Math.round(e.x+window.scrollX)}px, ${Math.round(e.y+window.scrollY)}px, 0)`}}function z(e,t,n,o,r){const i="top"===t||"bottom"===t,c=r?r.width:0,l=r?r.height:0,s=c/2+o;let u="",a="";return i?(u={start:`${s}px`,center:"center",end:e.width-s+"px"}[n],a="top"===t?`${e.height+l}px`:-l+"px"):(u="left"===t?`${e.width+l}px`:-l+"px",a={start:`${s}px`,center:"center",end:e.height-s+"px"}[n]),`${u} ${a}`}const L={position:"fixed",top:0,left:0,opacity:0,transform:"translate3d(0, -200%, 0)"},D={position:"absolute",opacity:0};function Z({popperSize:e,arrowSize:t,arrowOffset:n,side:o,align:r}){const i=(e.width-t.width)/2,c=(e.height-t.width)/2,l={top:0,right:90,bottom:180,left:-90}[o],s=Math.max(t.width,t.height),u={width:`${s}px`,height:`${s}px`,transform:`rotate(${l}deg)`,willChange:"transform",position:"absolute",[o]:"100%",direction:I(o,r)};return"top"!==o&&"bottom"!==o||("start"===r&&(u.left=`${n}px`),"center"===r&&(u.left=`${i}px`),"end"===r&&(u.right=`${n}px`)),"left"!==o&&"right"!==o||("start"===r&&(u.top=`${n}px`),"center"===r&&(u.top=`${c}px`),"end"===r&&(u.bottom=`${n}px`)),u}function I(e,t){return("top"!==e&&"right"!==e||"end"!==t)&&("bottom"!==e&&"left"!==e||"end"===t)?"ltr":"rtl"}function B(e){return{top:"bottom",right:"left",bottom:"top",left:"right"}[e]}function U(e,t){return{top:e.top<t.top,right:e.right>t.right,bottom:e.bottom>t.bottom,left:e.left<t.left}}const[F,W]=N("Popper"),[V,j]=F("Popper"),q=o.forwardRef(((e,t)=>{const{__scopePopper:n,virtualRef:r,...i}=e,c=j("PopperAnchor",n),l=o.useRef(null),s=k(t,l);return o.useEffect((()=>{c.onAnchorChange((null==r?void 0:r.current)||l.current)})),r?null:o.createElement(g.div,(0,a.Z)({},i,{ref:s}))})),[Y,H]=F("PopperContent"),X=o.forwardRef(((e,t)=>{const{__scopePopper:n,side:r="bottom",sideOffset:i,align:c="center",alignOffset:l,collisionTolerance:s,avoidCollisions:u=!0,...d}=e,f=j("PopperContent",n),[p,m]=o.useState(),h=A(f.anchor),[v,w]=o.useState(null),E=S(v),[y,b]=o.useState(null),C=S(y),x=k(t,(e=>w(e))),T=function(){const[e,t]=o.useState(void 0);return o.useEffect((()=>{let e;function n(){t({width:window.innerWidth,height:window.innerHeight})}function o(){window.clearTimeout(e),e=window.setTimeout(n,100)}return n(),window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)}),[]),e}(),R=T?DOMRect.fromRect({...T,x:0,y:0}):void 0,{popperStyles:O,arrowStyles:_,placedSide:N,placedAlign:M}=function({anchorRect:e,popperSize:t,arrowSize:n,arrowOffset:o=0,side:r,sideOffset:i=0,align:c,alignOffset:l=0,shouldAvoidCollisions:s=!0,collisionBoundariesRect:u,collisionTolerance:a=0}){if(!e||!t||!u)return{popperStyles:L,arrowStyles:D};const d=function(e,t,n=0,o=0,r){const i=r?r.height:0,c=P(t,e,"x"),l=P(t,e,"y"),s=l.before-n-i,u=l.after+n+i,a=c.before-n-i,d=c.after+n+i;return{top:{start:{x:c.start+o,y:s},center:{x:c.center,y:s},end:{x:c.end-o,y:s}},right:{start:{x:d,y:l.start+o},center:{x:d,y:l.center},end:{x:d,y:l.end-o}},bottom:{start:{x:c.start+o,y:u},center:{x:c.center,y:u},end:{x:c.end-o,y:u}},left:{start:{x:a,y:l.start+o},center:{x:a,y:l.center},end:{x:a,y:l.end-o}}}}(t,e,i,l,n),f=d[r][c];if(!1===s){const e=$(f);let i=D;return n&&(i=Z({popperSize:t,arrowSize:n,arrowOffset:o,side:r,align:c})),{popperStyles:{...e,"--radix-popper-transform-origin":z(t,r,c,o,n)},arrowStyles:i,placedSide:r,placedAlign:c}}const p=DOMRect.fromRect({...t,...f}),m=(h=u,g=a,DOMRect.fromRect({width:h.width-2*g,height:h.height-2*g,x:h.left+g,y:h.top+g}));var h,g;const v=U(p,m),w=d[B(r)][c],E=function(e,t,n){const o=B(e);return t[e]&&!n[o]?o:e}(r,v,U(DOMRect.fromRect({...t,...w}),m)),y=function(e,t,n,o,r){const i="top"===n||"bottom"===n,c=i?"left":"top",l=i?"right":"bottom",s=i?"width":"height",u=t[s]>e[s];return"start"!==o&&"center"!==o||!(r[c]&&u||r[l]&&!u)?"end"!==o&&"center"!==o||!(r[l]&&u||r[c]&&!u)?o:"start":"end"}(t,e,r,c,v),b=$(d[E][y]);let C=D;return n&&(C=Z({popperSize:t,arrowSize:n,arrowOffset:o,side:E,align:y})),{popperStyles:{...b,"--radix-popper-transform-origin":z(t,E,y,o,n)},arrowStyles:C,placedSide:E,placedAlign:y}}({anchorRect:h,popperSize:E,arrowSize:C,arrowOffset:p,side:r,sideOffset:i,align:c,alignOffset:l,shouldAvoidCollisions:u,collisionBoundariesRect:R,collisionTolerance:s}),I=void 0!==N;return o.createElement("div",{style:O,"data-radix-popper-content-wrapper":""},o.createElement(Y,{scope:n,arrowStyles:_,onArrowChange:b,onArrowOffsetChange:m},o.createElement(g.div,(0,a.Z)({"data-side":N,"data-align":M},d,{style:{...d.style,animation:I?void 0:"none"},ref:x}))))})),G=o.forwardRef((function(e,t){const{__scopePopper:n,offset:r,...i}=e,c=H("PopperArrow",n),{onArrowOffsetChange:l}=c;return o.useEffect((()=>l(r)),[l,r]),o.createElement("span",{style:{...c.arrowStyles,pointerEvents:"none"}},o.createElement("span",{ref:c.onArrowChange,style:{display:"inline-block",verticalAlign:"top",pointerEvents:"auto"}},o.createElement(x,(0,a.Z)({},i,{ref:t,style:{...i.style,display:"block"}}))))})),J=e=>{const{__scopePopper:t,children:n}=e,[r,i]=o.useState(null);return o.createElement(V,{scope:t,anchor:r,onAnchorChange:i},n)},K=q,Q=X,ee=G;const te=e=>{const{present:t,children:n}=e,r=function(e){const[t,n]=o.useState(),r=o.useRef({}),c=o.useRef(e),l=o.useRef("none"),s=e?"mounted":"unmounted",[u,a]=function(e,t){return o.useReducer(((e,n)=>{const o=t[e][n];return null!=o?o:e}),e)}(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return o.useEffect((()=>{const e=ne(r.current);l.current="mounted"===u?e:"none"}),[u]),i((()=>{const t=r.current,n=c.current;if(n!==e){const o=l.current,r=ne(t);if(e)a("MOUNT");else if("none"===r||"none"===(null==t?void 0:t.display))a("UNMOUNT");else{const e=o!==r;a(n&&e?"ANIMATION_OUT":"UNMOUNT")}c.current=e}}),[e,a]),i((()=>{if(t){const e=e=>{const n=ne(r.current).includes(e.animationName);e.target===t&&n&&a("ANIMATION_END")},n=e=>{e.target===t&&(l.current=ne(r.current))};return t.addEventListener("animationstart",n),t.addEventListener("animationcancel",e),t.addEventListener("animationend",e),()=>{t.removeEventListener("animationstart",n),t.removeEventListener("animationcancel",e),t.removeEventListener("animationend",e)}}}),[t,a]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:o.useCallback((e=>{e&&(r.current=getComputedStyle(e)),n(e)}),[])}}(t),c="function"==typeof n?n({present:r.isPresent}):o.Children.only(n),l=function(...e){return o.useCallback(function(...e){return t=>e.forEach((e=>function(e,t){"function"==typeof e?e(t):null!=e&&(e.current=t)}(e,t)))}(...e),e)}(r.ref,c.ref);return"function"==typeof n||r.isPresent?o.cloneElement(c,{ref:l}):null};function ne(e){return(null==e?void 0:e.animationName)||"none"}function oe(e){const t=o.useRef(e);return o.useEffect((()=>{t.current=e}),[e]),t.current}function re(e){const t=function(e){const t=o.useRef(e);return o.useEffect((()=>{t.current=e})),o.useMemo((()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)}),[])}(e);o.useEffect((()=>{const e=e=>{"Escape"===e.key&&t(e)};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)}),[t])}function ie(e){const t=o.useRef(e);return o.useEffect((()=>{t.current=e})),o.useMemo((()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)}),[])}function ce(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(null==e||e(o),!1===n||!o.defaultPrevented)return null==t?void 0:t(o)}}te.displayName="Presence";const[le,se]=N("Tooltip",[W]),ue=W(),ae=700,[de,fe]=le("TooltipProvider",{isOpenDelayed:!0,delayDuration:ae,onOpen:()=>{},onClose:()=>{}}),[pe,me]=le("Tooltip"),he=o.forwardRef(((e,t)=>{const{__scopeTooltip:n,...r}=e,i=me("TooltipTrigger",n),c=ue(n),l=function(...e){return o.useCallback(function(...e){return t=>e.forEach((e=>function(e,t){"function"==typeof e?e(t):null!=e&&(e.current=t)}(e,t)))}(...e),e)}(t,i.onTriggerChange),s=o.useRef(!1),u=o.useCallback((()=>s.current=!1),[]);return o.useEffect((()=>()=>document.removeEventListener("mouseup",u)),[u]),o.createElement(K,(0,a.Z)({asChild:!0},c),o.createElement(g.button,(0,a.Z)({"aria-describedby":i.open?i.contentId:void 0,"data-state":i.stateAttribute},r,{ref:l,onMouseEnter:ce(e.onMouseEnter,i.onTriggerEnter),onMouseLeave:ce(e.onMouseLeave,i.onClose),onMouseDown:ce(e.onMouseDown,(()=>{i.onClose(),s.current=!0,document.addEventListener("mouseup",u,{once:!0})})),onFocus:ce(e.onFocus,(()=>{s.current||i.onOpen()})),onBlur:ce(e.onBlur,i.onClose),onClick:ce(e.onClick,i.onClose)})))})),ge=o.forwardRef(((e,t)=>{const{forceMount:n,...r}=e,i=me("TooltipContent",e.__scopeTooltip);return o.createElement(te,{present:n||i.open},o.createElement(ve,(0,a.Z)({ref:t},r)))})),ve=o.forwardRef(((e,t)=>{const{__scopeTooltip:n,children:r,"aria-label":i,portalled:c=!0,...l}=e,s=me("TooltipContent",n),u=ue(n),d=c?b:o.Fragment,{onClose:f}=s;return re((()=>f())),o.useEffect((()=>(document.addEventListener("tooltip.open",f),()=>document.removeEventListener("tooltip.open",f))),[f]),o.createElement(d,null,o.createElement(Ee,{__scopeTooltip:n}),o.createElement(Q,(0,a.Z)({"data-state":s.stateAttribute},u,l,{ref:t,style:{...l.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)"}}),o.createElement(p,null,r),o.createElement(E,{id:s.contentId,role:"tooltip"},i||r)))})),we=o.forwardRef(((e,t)=>{const{__scopeTooltip:n,...r}=e,i=ue(n);return o.createElement(ee,(0,a.Z)({},i,r,{ref:t}))}));function Ee(e){const{__scopeTooltip:t}=e,n=me("CheckTriggerMoved",t),r=A(n.trigger),i=null==r?void 0:r.left,c=oe(i),l=null==r?void 0:r.top,s=oe(l),u=n.onClose;return o.useEffect((()=>{(void 0!==c&&c!==i||void 0!==s&&s!==l)&&u()}),[u,c,s,i,l]),null}const ye=e=>{const{__scopeTooltip:t,children:n,open:r,defaultOpen:i=!1,onOpenChange:c,delayDuration:l}=e,u=fe("Tooltip",t),a=ue(t),[d,f]=o.useState(null),p=s(),m=o.useRef(0),h=null!=l?l:u.delayDuration,g=o.useRef(!1),{onOpen:v,onClose:w}=u,[E=!1,y]=function({prop:e,defaultProp:t,onChange:n=(()=>{})}){const[r,i]=function({defaultProp:e,onChange:t}){const n=o.useState(e),[r]=n,i=o.useRef(r),c=ie(t);return o.useEffect((()=>{i.current!==r&&(c(r),i.current=r)}),[r,i,c]),n}({defaultProp:t,onChange:n}),c=void 0!==e,l=c?e:r,s=ie(n);return[l,o.useCallback((t=>{if(c){const n=t,o="function"==typeof t?n(e):t;o!==e&&s(o)}else i(t)}),[c,e,i,s])]}({prop:r,defaultProp:i,onChange:e=>{e&&(document.dispatchEvent(new CustomEvent("tooltip.open")),v()),null==c||c(e)}}),b=o.useMemo((()=>E?g.current?"delayed-open":"instant-open":"closed"),[E]),C=o.useCallback((()=>{window.clearTimeout(m.current),g.current=!1,y(!0)}),[y]),x=o.useCallback((()=>{window.clearTimeout(m.current),m.current=window.setTimeout((()=>{g.current=!0,y(!0)}),h)}),[h,y]);return o.useEffect((()=>()=>window.clearTimeout(m.current)),[]),o.createElement(J,a,o.createElement(pe,{scope:t,contentId:p,open:E,stateAttribute:b,trigger:d,onTriggerChange:f,onTriggerEnter:o.useCallback((()=>{u.isOpenDelayed?x():C()}),[u.isOpenDelayed,x,C]),onOpen:o.useCallback(C,[C]),onClose:o.useCallback((()=>{window.clearTimeout(m.current),y(!1),w()}),[y,w])},n))},be=he,Ce=ge,xe=we}}]);