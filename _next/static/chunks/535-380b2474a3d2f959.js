"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[535],{4729:function(e,t,n){n.d(t,{R:function(){return G}});var r,o,i=n(7294),a=n(4192),u=n(9946),l=n(6723),s=n(1646),c=n(3784),d=n(5748),f=n(2984),p=n(9362),v=n(1363),b=n(1497),h=n(4103),g=n(4575),y=n(6567),R=n(4157),x=n(292),m=n(6045),O=n(5985),w=n(5466),S=n(3781),T=((o=T||{})[o.Open=0]="Open",o[o.Closed=1]="Closed",o),E=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(E||{}),k=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(k||{}),I=((r=I||{})[r.OpenListbox=0]="OpenListbox",r[r.CloseListbox=1]="CloseListbox",r[r.SetDisabled=2]="SetDisabled",r[r.SetOrientation=3]="SetOrientation",r[r.GoToOption=4]="GoToOption",r[r.Search=5]="Search",r[r.ClearSearch=6]="ClearSearch",r[r.RegisterOption=7]="RegisterOption",r[r.UnregisterOption=8]="UnregisterOption",r);function P(e,t=(e=>e)){let n=null!==e.activeOptionIndex?e.options[e.activeOptionIndex]:null,r=(0,g.z2)(t(e.options.slice()),(e=>e.dataRef.current.domRef.current)),o=n?r.indexOf(n):null;return-1===o&&(o=null),{options:r,activeOptionIndex:o}}let C={1:e=>e.disabled||1===e.listboxState?e:{...e,activeOptionIndex:null,listboxState:1},0(e){if(e.disabled||0===e.listboxState)return e;let t=e.activeOptionIndex,{value:n,mode:r,compare:o}=e.propsRef.current,i=e.options.findIndex((e=>{let t=e.dataRef.current.value;return(0,f.E)(r,{1:()=>n.some((e=>o(e,t))),0:()=>o(n,t)})}));return-1!==i&&(t=i),{...e,listboxState:0,activeOptionIndex:t}},2:(e,t)=>e.disabled===t.disabled?e:{...e,disabled:t.disabled},3:(e,t)=>e.orientation===t.orientation?e:{...e,orientation:t.orientation},4(e,t){var n;if(e.disabled||1===e.listboxState)return e;let r=P(e),o=(0,b.d)(t,{resolveItems:()=>r.options,resolveActiveIndex:()=>r.activeOptionIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeOptionIndex:o,activationTrigger:null!=(n=t.trigger)?n:1}},5:(e,t)=>{if(e.disabled||1===e.listboxState)return e;let n=""!==e.searchQuery?0:1,r=e.searchQuery+t.value.toLowerCase(),o=(null!==e.activeOptionIndex?e.options.slice(e.activeOptionIndex+n).concat(e.options.slice(0,e.activeOptionIndex+n)):e.options).find((e=>{var t;return!e.dataRef.current.disabled&&(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(r))})),i=o?e.options.indexOf(o):-1;return-1===i||i===e.activeOptionIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeOptionIndex:i,activationTrigger:1}},6:e=>e.disabled||1===e.listboxState||""===e.searchQuery?e:{...e,searchQuery:""},7:(e,t)=>{let n={id:t.id,dataRef:t.dataRef},r=P(e,(e=>[...e,n]));if(null===e.activeOptionIndex){let{value:o,mode:i,compare:a}=e.propsRef.current,u=t.dataRef.current.value;(0,f.E)(i,{1:()=>o.some((e=>a(e,u))),0:()=>a(o,u)})&&(r.activeOptionIndex=r.options.indexOf(n))}return{...e,...r}},8:(e,t)=>{let n=P(e,(e=>{let n=e.findIndex((e=>e.id===t.id));return-1!==n&&e.splice(n,1),e}));return{...e,...n,activationTrigger:1}}},L=(0,i.createContext)(null);function D(e){let t=(0,i.useContext)(L);if(null===t){let t=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,D),t}return t}function M(e,t){return(0,f.E)(t.type,C,e,t)}L.displayName="ListboxContext";let V=i.Fragment,A=(0,d.yV)((function(e,t){let{value:n,name:r,onChange:o,disabled:a=!1,horizontal:u=!1,multiple:s=!1,...p}=e;const v=u?"horizontal":"vertical";let b=(0,c.T)(t),h=(0,i.useReducer)(M,{listboxState:1,propsRef:{current:{value:n,onChange:o,mode:s?1:0,compare:(0,S.z)(((e,t)=>e===t))}},labelRef:(0,i.createRef)(),buttonRef:(0,i.createRef)(),optionsRef:(0,i.createRef)(),disabled:a,orientation:v,options:[],searchQuery:"",activeOptionIndex:null,activationTrigger:1}),[{listboxState:R,propsRef:w,optionsRef:T,buttonRef:E},k]=h;w.current.value=n,w.current.mode=s?1:0,(0,l.e)((()=>{w.current.onChange=e=>(0,f.E)(w.current.mode,{0:()=>o(e),1(){let t=w.current.value.slice(),n=t.indexOf(e);return-1===n?t.push(e):t.splice(n,1),o(t)}})}),[o,w]),(0,l.e)((()=>k({type:2,disabled:a})),[a]),(0,l.e)((()=>k({type:3,orientation:v})),[v]),(0,x.O)([E,T],((e,t)=>{var n;k({type:1}),(0,g.sP)(t,g.tJ.Loose)||(e.preventDefault(),null==(n=E.current)||n.focus())}),0===R);let I=(0,i.useMemo)((()=>({open:0===R,disabled:a})),[R,a]),P={ref:b};return i.createElement(L.Provider,{value:h},i.createElement(y.up,{value:(0,f.E)(R,{0:y.ZM.Open,1:y.ZM.Closed})},null!=r&&null!=n&&(0,O.t)({[r]:n}).map((([e,t])=>i.createElement(m._,{features:m.A.Hidden,...(0,d.oA)({key:e,as:"input",type:"hidden",hidden:!0,readOnly:!0,name:e,value:t})}))),(0,d.sY)({ourProps:P,theirProps:p,slot:I,defaultTag:V,name:"Listbox"})))})),F=(0,d.yV)((function(e,t){var n;let[r,o]=D("Listbox.Button"),l=(0,c.T)(r.buttonRef,t),f=`headlessui-listbox-button-${(0,u.M)()}`,p=(0,a.G)(),g=(0,S.z)((e=>{switch(e.key){case v.R.Space:case v.R.Enter:case v.R.ArrowDown:e.preventDefault(),o({type:0}),p.nextFrame((()=>{r.propsRef.current.value||o({type:4,focus:b.T.First})}));break;case v.R.ArrowUp:e.preventDefault(),o({type:0}),p.nextFrame((()=>{r.propsRef.current.value||o({type:4,focus:b.T.Last})}))}})),y=(0,S.z)((e=>{if(e.key===v.R.Space)e.preventDefault()})),x=(0,S.z)((e=>{if((0,h.P)(e.currentTarget))return e.preventDefault();0===r.listboxState?(o({type:1}),p.nextFrame((()=>{var e;return null==(e=r.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))):(e.preventDefault(),o({type:0}))})),m=(0,s.v)((()=>{if(r.labelRef.current)return[r.labelRef.current.id,f].join(" ")}),[r.labelRef.current,f]),O=(0,i.useMemo)((()=>({open:0===r.listboxState,disabled:r.disabled})),[r]),w=e,T={ref:l,id:f,type:(0,R.f)(e,r.buttonRef),"aria-haspopup":!0,"aria-controls":null==(n=r.optionsRef.current)?void 0:n.id,"aria-expanded":r.disabled?void 0:0===r.listboxState,"aria-labelledby":m,disabled:r.disabled,onKeyDown:g,onKeyUp:y,onClick:x};return(0,d.sY)({ourProps:T,theirProps:w,slot:O,defaultTag:"button",name:"Listbox.Button"})})),z=(0,d.yV)((function(e,t){let[n]=D("Listbox.Label"),r=`headlessui-listbox-label-${(0,u.M)()}`,o=(0,c.T)(n.labelRef,t),a=(0,S.z)((()=>{var e;return null==(e=n.buttonRef.current)?void 0:e.focus({preventScroll:!0})})),l=(0,i.useMemo)((()=>({open:0===n.listboxState,disabled:n.disabled})),[n]);return(0,d.sY)({ourProps:{ref:o,id:r,onClick:a},theirProps:e,slot:l,defaultTag:"label",name:"Listbox.Label"})})),N=d.AN.RenderStrategy|d.AN.Static,Q=(0,d.yV)((function(e,t){var n;let[r,o]=D("Listbox.Options"),l=(0,c.T)(r.optionsRef,t),h=`headlessui-listbox-options-${(0,u.M)()}`,g=(0,a.G)(),R=(0,a.G)(),x=(0,y.oJ)(),m=null!==x?x===y.ZM.Open:0===r.listboxState;(0,i.useEffect)((()=>{var e;let t=r.optionsRef.current;!t||0===r.listboxState&&t!==(null==(e=(0,w.r)(t))?void 0:e.activeElement)&&t.focus({preventScroll:!0})}),[r.listboxState,r.optionsRef]);let O=(0,S.z)((e=>{switch(R.dispose(),e.key){case v.R.Space:if(""!==r.searchQuery)return e.preventDefault(),e.stopPropagation(),o({type:5,value:e.key});case v.R.Enter:if(e.preventDefault(),e.stopPropagation(),null!==r.activeOptionIndex){let{dataRef:e}=r.options[r.activeOptionIndex];r.propsRef.current.onChange(e.current.value)}0===r.propsRef.current.mode&&(o({type:1}),(0,p.k)().nextFrame((()=>{var e;return null==(e=r.buttonRef.current)?void 0:e.focus({preventScroll:!0})})));break;case(0,f.E)(r.orientation,{vertical:v.R.ArrowDown,horizontal:v.R.ArrowRight}):return e.preventDefault(),e.stopPropagation(),o({type:4,focus:b.T.Next});case(0,f.E)(r.orientation,{vertical:v.R.ArrowUp,horizontal:v.R.ArrowLeft}):return e.preventDefault(),e.stopPropagation(),o({type:4,focus:b.T.Previous});case v.R.Home:case v.R.PageUp:return e.preventDefault(),e.stopPropagation(),o({type:4,focus:b.T.First});case v.R.End:case v.R.PageDown:return e.preventDefault(),e.stopPropagation(),o({type:4,focus:b.T.Last});case v.R.Escape:return e.preventDefault(),e.stopPropagation(),o({type:1}),g.nextFrame((()=>{var e;return null==(e=r.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));case v.R.Tab:e.preventDefault(),e.stopPropagation();break;default:1===e.key.length&&(o({type:5,value:e.key}),R.setTimeout((()=>o({type:6})),350))}})),T=(0,s.v)((()=>{var e,t,n;return null!=(n=null==(e=r.labelRef.current)?void 0:e.id)?n:null==(t=r.buttonRef.current)?void 0:t.id}),[r.labelRef.current,r.buttonRef.current]),E=(0,i.useMemo)((()=>({open:0===r.listboxState})),[r]),k=e,I={"aria-activedescendant":null===r.activeOptionIndex||null==(n=r.options[r.activeOptionIndex])?void 0:n.id,"aria-multiselectable":1===r.propsRef.current.mode||void 0,"aria-labelledby":T,"aria-orientation":r.orientation,id:h,onKeyDown:O,role:"listbox",tabIndex:0,ref:l};return(0,d.sY)({ourProps:I,theirProps:k,slot:E,defaultTag:"ul",features:N,visible:m,name:"Listbox.Options"})})),$=(0,d.yV)((function(e,t){let{disabled:n=!1,value:r,...o}=e,[a,s]=D("Listbox.Option"),v=`headlessui-listbox-option-${(0,u.M)()}`,h=null!==a.activeOptionIndex&&a.options[a.activeOptionIndex].id===v,{value:g,compare:y}=a.propsRef.current,R=(0,f.E)(a.propsRef.current.mode,{1:()=>g.some((e=>y(e,r))),0:()=>y(g,r)}),x=(0,i.useRef)(null),m=(0,c.T)(t,x);(0,l.e)((()=>{if(0!==a.listboxState||!h||0===a.activationTrigger)return;let e=(0,p.k)();return e.requestAnimationFrame((()=>{var e,t;null==(t=null==(e=x.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})})),e.dispose}),[x,h,a.listboxState,a.activationTrigger,a.activeOptionIndex]);let O=(0,i.useRef)({disabled:n,value:r,domRef:x});(0,l.e)((()=>{O.current.disabled=n}),[O,n]),(0,l.e)((()=>{O.current.value=r}),[O,r]),(0,l.e)((()=>{var e,t;O.current.textValue=null==(t=null==(e=x.current)?void 0:e.textContent)?void 0:t.toLowerCase()}),[O,x]);let w=(0,S.z)((()=>a.propsRef.current.onChange(r)));(0,l.e)((()=>(s({type:7,id:v,dataRef:O}),()=>s({type:8,id:v}))),[O,v]);let T=(0,S.z)((e=>{if(n)return e.preventDefault();w(),0===a.propsRef.current.mode&&(s({type:1}),(0,p.k)().nextFrame((()=>{var e;return null==(e=a.buttonRef.current)?void 0:e.focus({preventScroll:!0})})))})),E=(0,S.z)((()=>{if(n)return s({type:4,focus:b.T.Nothing});s({type:4,focus:b.T.Specific,id:v})})),k=(0,S.z)((()=>{n||h||s({type:4,focus:b.T.Specific,id:v,trigger:0})})),I=(0,S.z)((()=>{n||!h||s({type:4,focus:b.T.Nothing})})),P=(0,i.useMemo)((()=>({active:h,selected:R,disabled:n})),[h,R,n]);return(0,d.sY)({ourProps:{id:v,ref:m,role:"option",tabIndex:!0===n?void 0:-1,"aria-disabled":!0===n||void 0,"aria-selected":!0===R||void 0,disabled:void 0,onClick:T,onFocus:E,onPointerMove:k,onMouseMove:k,onPointerLeave:I,onMouseLeave:I},theirProps:o,slot:P,defaultTag:"li",name:"Listbox.Option"})})),G=Object.assign(A,{Button:F,Label:z,Options:Q,Option:$})},7568:function(e,t,n){function r(e,t,n,r,o,i,a){try{var u=e[i](a),l=u.value}catch(s){return void n(s)}u.done?t(l):Promise.resolve(l).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n);function u(e){r(a,o,i,u,l,"next",e)}function l(e){r(a,o,i,u,l,"throw",e)}u(void 0)}))}}n.d(t,{Z:function(){return o}})},8100:function(e,t,n){n.d(t,{ZP:function(){return B}});var r=n(7294);function o(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(t){i(t)}}function u(e){try{l(r.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}l((r=r.apply(e,t||[])).next())}))}function i(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(u){i=[6,u],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}var a,u=function(){},l=u(),s=Object,c=function(e){return e===l},d=function(e){return"function"==typeof e},f=function(e,t){return s.assign({},e,t)},p="undefined",v=function(){return typeof window!=p},b=new WeakMap,h=0,g=function(e){var t,n,r=typeof e,o=e&&e.constructor,i=o==Date;if(s(e)!==e||i||o==RegExp)t=i?e.toJSON():"symbol"==r?e.toString():"string"==r?JSON.stringify(e):""+e;else{if(t=b.get(e))return t;if(t=++h+"~",b.set(e,t),o==Array){for(t="@",n=0;n<e.length;n++)t+=g(e[n])+",";b.set(e,t)}if(o==s){t="#";for(var a=s.keys(e).sort();!c(n=a.pop());)c(e[n])||(t+=n+":"+g(e[n])+",");b.set(e,t)}}return t},y=!0,R=v(),x=typeof document!=p,m=R&&window.addEventListener?window.addEventListener.bind(window):u,O=x?document.addEventListener.bind(document):u,w=R&&window.removeEventListener?window.removeEventListener.bind(window):u,S=x?document.removeEventListener.bind(document):u,T={isOnline:function(){return y},isVisible:function(){var e=x&&document.visibilityState;return c(e)||"hidden"!==e}},E={initFocus:function(e){return O("visibilitychange",e),m("focus",e),function(){S("visibilitychange",e),w("focus",e)}},initReconnect:function(e){var t=function(){y=!0,e()},n=function(){y=!1};return m("online",t),m("offline",n),function(){w("online",t),w("offline",n)}}},k=!v()||"Deno"in window,I=function(e){return v()&&typeof window.requestAnimationFrame!=p?window.requestAnimationFrame(e):setTimeout(e,1)},P=k?r.useEffect:r.useLayoutEffect,C="undefined"!==typeof navigator&&navigator.connection,L=!k&&C&&(["slow-2g","2g"].includes(C.effectiveType)||C.saveData),D=function(e){if(d(e))try{e=e()}catch(n){e=""}var t=[].concat(e);return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?g(e):"",t,e?"$swr$"+e:""]},M=new WeakMap,V=function(e,t,n,r,o,i,a){void 0===a&&(a=!0);var u=M.get(e),l=u[0],s=u[1],c=u[3],d=l[t],f=s[t];if(a&&f)for(var p=0;p<f.length;++p)f[p](n,r,o);return i&&(delete c[t],d&&d[0])?d[0](2).then((function(){return e.get(t)})):e.get(t)},A=0,F=function(){return++A},z=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return o(void 0,void 0,void 0,(function(){var t,n,r,o,a,u,s,p,v,b,h,g,y,R,x,m,O,w,S,T;return i(this,(function(i){switch(i.label){case 0:if(t=e[0],n=e[1],r=e[2],o=e[3],u=!!c((a="boolean"===typeof o?{revalidate:o}:o||{}).populateCache)||a.populateCache,s=!1!==a.revalidate,p=!1!==a.rollbackOnError,v=a.optimisticData,b=D(n),h=b[0],g=b[2],!h)return[2];if(y=M.get(t),R=y[2],e.length<3)return[2,V(t,h,t.get(h),l,l,s,!0)];if(x=r,O=F(),R[h]=[O,0],w=!c(v),S=t.get(h),w&&(t.set(h,v),V(t,h,v)),d(x))try{x=x(t.get(h))}catch(E){m=E}return x&&d(x.then)?[4,x.catch((function(e){m=e}))]:[3,2];case 1:if(x=i.sent(),O!==R[h][0]){if(m)throw m;return[2,x]}m&&w&&p&&(u=!0,x=S,t.set(h,S)),i.label=2;case 2:return u&&(m||(d(u)&&(x=u(x,S)),t.set(h,x)),t.set(g,f(t.get(g),{error:m}))),R[h][1]=F(),[4,V(t,h,x,m,l,s,!!u)];case 3:if(T=i.sent(),m)throw m;return[2,u?T:x]}}))}))},N=function(e,t){for(var n in e)e[n][0]&&e[n][0](t)},Q=function(e,t){if(!M.has(e)){var n=f(E,t),r={},o=z.bind(l,e),i=u;if(M.set(e,[r,{},{},{},o]),!k){var a=n.initFocus(setTimeout.bind(l,N.bind(l,r,0))),s=n.initReconnect(setTimeout.bind(l,N.bind(l,r,1)));i=function(){a&&a(),s&&s(),M.delete(e)}}return[e,o,i]}return[e,M.get(e)[4]]},$=Q(new Map),G=$[0],U=$[1],W=f({onLoadingSlow:u,onSuccess:u,onError:u,onErrorRetry:function(e,t,n,r,o){var i=n.errorRetryCount,a=o.retryCount,u=~~((Math.random()+.5)*(1<<(a<8?a:8)))*n.errorRetryInterval;!c(i)&&a>i||setTimeout(r,u,o)},onDiscarded:u,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:L?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:L?5e3:3e3,compare:function(e,t){return g(e)==g(t)},isPaused:function(){return!1},cache:G,mutate:U,fallback:{}},T),Y=function(e,t){var n=f(e,t);if(t){var r=e.use,o=e.fallback,i=t.use,a=t.fallback;r&&i&&(n.use=r.concat(i)),o&&a&&(n.fallback=f(o,a))}return n},Z=(0,r.createContext)({}),_=function(e){return d(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}]},J=function(){return f(W,(0,r.useContext)(Z))},j=function(e,t,n){var r=t[e]||(t[e]=[]);return r.push(n),function(){var e=r.indexOf(n);e>=0&&(r[e]=r[r.length-1],r.pop())}},q={dedupe:!0},B=(s.defineProperty((function(e){var t=e.value,n=Y((0,r.useContext)(Z),t),o=t&&t.provider,i=(0,r.useState)((function(){return o?Q(o(n.cache||G),t):l}))[0];return i&&(n.cache=i[0],n.mutate=i[1]),P((function(){return i?i[2]:l}),[]),(0,r.createElement)(Z.Provider,f(e,{value:n}))}),"default",{value:W}),a=function(e,t,n){var a=n.cache,u=n.compare,s=n.fallbackData,p=n.suspense,v=n.revalidateOnMount,b=n.refreshInterval,h=n.refreshWhenHidden,g=n.refreshWhenOffline,y=M.get(a),R=y[0],x=y[1],m=y[2],O=y[3],w=D(e),S=w[0],T=w[1],E=w[2],C=(0,r.useRef)(!1),L=(0,r.useRef)(!1),A=(0,r.useRef)(S),N=(0,r.useRef)(t),Q=(0,r.useRef)(n),$=function(){return Q.current},G=function(){return $().isVisible()&&$().isOnline()},U=function(e){return a.set(E,f(a.get(E),e))},W=a.get(S),Y=c(s)?n.fallback[S]:s,Z=c(W)?Y:W,_=a.get(E)||{},J=_.error,B=!C.current,H=function(){return B&&!c(v)?v:!$().isPaused()&&(p?!c(Z):c(Z)||n.revalidateIfStale)},K=!(!S||!t)&&(!!_.isValidating||B&&H()),X=function(e,t){var n=(0,r.useState)({})[1],o=(0,r.useRef)(e),i=(0,r.useRef)({data:!1,error:!1,isValidating:!1}),a=(0,r.useCallback)((function(e){var r=!1,a=o.current;for(var u in e){var l=u;a[l]!==e[l]&&(a[l]=e[l],i.current[l]&&(r=!0))}r&&!t.current&&n({})}),[]);return P((function(){o.current=e})),[o,i.current,a]}({data:Z,error:J,isValidating:K},L),ee=X[0],te=X[1],ne=X[2],re=(0,r.useCallback)((function(e){return o(void 0,void 0,void 0,(function(){var t,r,o,s,f,p,v,b,h,g,y,R,x;return i(this,(function(i){switch(i.label){case 0:if(t=N.current,!S||!t||L.current||$().isPaused())return[2,!1];s=!0,f=e||{},p=!O[S]||!f.dedupe,v=function(){return!L.current&&S===A.current&&C.current},b=function(){var e=O[S];e&&e[1]===o&&delete O[S]},h={isValidating:!1},g=function(){U({isValidating:!1}),v()&&ne(h)},U({isValidating:!0}),ne({isValidating:!0}),i.label=1;case 1:return i.trys.push([1,3,,4]),p&&(V(a,S,ee.current.data,ee.current.error,!0),n.loadingTimeout&&!a.get(S)&&setTimeout((function(){s&&v()&&$().onLoadingSlow(S,n)}),n.loadingTimeout),O[S]=[t.apply(void 0,T),F()]),x=O[S],r=x[0],o=x[1],[4,r];case 2:return r=i.sent(),p&&setTimeout(b,n.dedupingInterval),O[S]&&O[S][1]===o?(U({error:l}),h.error=l,y=m[S],!c(y)&&(o<=y[0]||o<=y[1]||0===y[1])?(g(),p&&v()&&$().onDiscarded(S),[2,!1]):(u(ee.current.data,r)?h.data=ee.current.data:h.data=r,u(a.get(S),r)||a.set(S,r),p&&v()&&$().onSuccess(r,S,n),[3,4])):(p&&v()&&$().onDiscarded(S),[2,!1]);case 3:return R=i.sent(),b(),$().isPaused()||(U({error:R}),h.error=R,p&&v()&&($().onError(R,S,n),("boolean"===typeof n.shouldRetryOnError&&n.shouldRetryOnError||d(n.shouldRetryOnError)&&n.shouldRetryOnError(R))&&G()&&$().onErrorRetry(R,S,n,re,{retryCount:(f.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return s=!1,g(),v()&&p&&V(a,S,h.data,h.error,!1),[2,!0]}}))}))}),[S]),oe=(0,r.useCallback)(z.bind(l,a,(function(){return A.current})),[]);if(P((function(){N.current=t,Q.current=n})),P((function(){if(S){var e=S!==A.current,t=re.bind(l,q),n=0,r=j(S,x,(function(e,t,n){ne(f({error:t,isValidating:n},u(ee.current.data,e)?l:{data:e}))})),o=j(S,R,(function(e){if(0==e){var r=Date.now();$().revalidateOnFocus&&r>n&&G()&&(n=r+$().focusThrottleInterval,t())}else if(1==e)$().revalidateOnReconnect&&G()&&t();else if(2==e)return re()}));return L.current=!1,A.current=S,C.current=!0,e&&ne({data:Z,error:J,isValidating:K}),H()&&(c(Z)||k?t():I(t)),function(){L.current=!0,r(),o()}}}),[S,re]),P((function(){var e;function t(){var t=d(b)?b(Z):b;t&&-1!==e&&(e=setTimeout(n,t))}function n(){ee.current.error||!h&&!$().isVisible()||!g&&!$().isOnline()?t():re(q).then(t)}return t(),function(){e&&(clearTimeout(e),e=-1)}}),[b,h,g,re]),(0,r.useDebugValue)(Z),p&&c(Z)&&S)throw N.current=t,Q.current=n,L.current=!1,c(J)?re(q):J;return{mutate:oe,get data(){return te.data=!0,Z},get error(){return te.error=!0,J},get isValidating(){return te.isValidating=!0,K}}},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=J(),r=_(e),o=r[0],i=r[1],u=r[2],l=Y(n,u),s=a,c=l.use;if(c)for(var d=c.length;d-- >0;)s=c[d](s);return s(o,i||l.fetcher,l)})}}]);