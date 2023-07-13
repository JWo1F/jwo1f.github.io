var te=Object.create;var vr=Object.defineProperty;var oe=Object.getOwnPropertyDescriptor;var ne=Object.getOwnPropertyNames;var ie=Object.getPrototypeOf,ae=Object.prototype.hasOwnProperty;var V=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var se=(r,e,t,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of ne(e))!ae.call(r,n)&&n!==t&&vr(r,n,{get:()=>e[n],enumerable:!(o=oe(e,n))||o.enumerable});return r};var U=(r,e,t)=>(t=r!=null?te(ie(r)):{},se(e||!r||!r.__esModule?vr(t,"default",{value:r,enumerable:!0}):t,r));var Yr=V(u=>{"use strict";var j=Symbol.for("react.element"),we=Symbol.for("react.portal"),Ce=Symbol.for("react.fragment"),Se=Symbol.for("react.strict_mode"),ke=Symbol.for("react.profiler"),_e=Symbol.for("react.provider"),Me=Symbol.for("react.context"),Re=Symbol.for("react.forward_ref"),Ee=Symbol.for("react.suspense"),Pe=Symbol.for("react.memo"),Ae=Symbol.for("react.lazy"),Lr=Symbol.iterator;function Ie(r){return r===null||typeof r!="object"?null:(r=Lr&&r[Lr]||r["@@iterator"],typeof r=="function"?r:null)}var Wr={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qr=Object.assign,Br={};function I(r,e,t){this.props=r,this.context=e,this.refs=Br,this.updater=t||Wr}I.prototype.isReactComponent={};I.prototype.setState=function(r,e){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,e,"setState")};I.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function Fr(){}Fr.prototype=I.prototype;function tr(r,e,t){this.props=r,this.context=e,this.refs=Br,this.updater=t||Wr}var or=tr.prototype=new Fr;or.constructor=tr;qr(or,I.prototype);or.isPureReactComponent=!0;var Vr=Array.isArray,Dr=Object.prototype.hasOwnProperty,nr={current:null},Jr={key:!0,ref:!0,__self:!0,__source:!0};function Hr(r,e,t){var o,n={},s=null,i=null;if(e!=null)for(o in e.ref!==void 0&&(i=e.ref),e.key!==void 0&&(s=""+e.key),e)Dr.call(e,o)&&!Jr.hasOwnProperty(o)&&(n[o]=e[o]);var a=arguments.length-2;if(a===1)n.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];n.children=l}if(r&&r.defaultProps)for(o in a=r.defaultProps,a)n[o]===void 0&&(n[o]=a[o]);return{$$typeof:j,type:r,key:s,ref:i,props:n,_owner:nr.current}}function ze(r,e){return{$$typeof:j,type:r.type,key:e,ref:r.ref,props:r.props,_owner:r._owner}}function ir(r){return typeof r=="object"&&r!==null&&r.$$typeof===j}function Te(r){var e={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(t){return e[t]})}var Ur=/\/+/g;function er(r,e){return typeof r=="object"&&r!==null&&r.key!=null?Te(""+r.key):e.toString(36)}function q(r,e,t,o,n){var s=typeof r;(s==="undefined"||s==="boolean")&&(r=null);var i=!1;if(r===null)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(r.$$typeof){case j:case we:i=!0}}if(i)return i=r,n=n(i),r=o===""?"."+er(i,0):o,Vr(n)?(t="",r!=null&&(t=r.replace(Ur,"$&/")+"/"),q(n,e,t,"",function(c){return c})):n!=null&&(ir(n)&&(n=ze(n,t+(!n.key||i&&i.key===n.key?"":(""+n.key).replace(Ur,"$&/")+"/")+r)),e.push(n)),1;if(i=0,o=o===""?".":o+":",Vr(r))for(var a=0;a<r.length;a++){s=r[a];var l=o+er(s,a);i+=q(s,e,t,l,n)}else if(l=Ie(r),typeof l=="function")for(r=l.call(r),a=0;!(s=r.next()).done;)s=s.value,l=o+er(s,a++),i+=q(s,e,t,l,n);else if(s==="object")throw e=String(r),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return i}function W(r,e,t){if(r==null)return r;var o=[],n=0;return q(r,o,"","",function(s){return e.call(t,s,n++)}),o}function Ge(r){if(r._status===-1){var e=r._result;e=e(),e.then(function(t){(r._status===0||r._status===-1)&&(r._status=1,r._result=t)},function(t){(r._status===0||r._status===-1)&&(r._status=2,r._result=t)}),r._status===-1&&(r._status=0,r._result=e)}if(r._status===1)return r._result.default;throw r._result}var g={current:null},B={transition:null},je={ReactCurrentDispatcher:g,ReactCurrentBatchConfig:B,ReactCurrentOwner:nr};u.Children={map:W,forEach:function(r,e,t){W(r,function(){e.apply(this,arguments)},t)},count:function(r){var e=0;return W(r,function(){e++}),e},toArray:function(r){return W(r,function(e){return e})||[]},only:function(r){if(!ir(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};u.Component=I;u.Fragment=Ce;u.Profiler=ke;u.PureComponent=tr;u.StrictMode=Se;u.Suspense=Ee;u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=je;u.cloneElement=function(r,e,t){if(r==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+r+".");var o=qr({},r.props),n=r.key,s=r.ref,i=r._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,i=nr.current),e.key!==void 0&&(n=""+e.key),r.type&&r.type.defaultProps)var a=r.type.defaultProps;for(l in e)Dr.call(e,l)&&!Jr.hasOwnProperty(l)&&(o[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)o.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];o.children=a}return{$$typeof:j,type:r.type,key:n,ref:s,props:o,_owner:i}};u.createContext=function(r){return r={$$typeof:Me,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},r.Provider={$$typeof:_e,_context:r},r.Consumer=r};u.createElement=Hr;u.createFactory=function(r){var e=Hr.bind(null,r);return e.type=r,e};u.createRef=function(){return{current:null}};u.forwardRef=function(r){return{$$typeof:Re,render:r}};u.isValidElement=ir;u.lazy=function(r){return{$$typeof:Ae,_payload:{_status:-1,_result:r},_init:Ge}};u.memo=function(r,e){return{$$typeof:Pe,type:r,compare:e===void 0?null:e}};u.startTransition=function(r){var e=B.transition;B.transition={};try{r()}finally{B.transition=e}};u.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};u.useCallback=function(r,e){return g.current.useCallback(r,e)};u.useContext=function(r){return g.current.useContext(r)};u.useDebugValue=function(){};u.useDeferredValue=function(r){return g.current.useDeferredValue(r)};u.useEffect=function(r,e){return g.current.useEffect(r,e)};u.useId=function(){return g.current.useId()};u.useImperativeHandle=function(r,e,t){return g.current.useImperativeHandle(r,e,t)};u.useInsertionEffect=function(r,e){return g.current.useInsertionEffect(r,e)};u.useLayoutEffect=function(r,e){return g.current.useLayoutEffect(r,e)};u.useMemo=function(r,e){return g.current.useMemo(r,e)};u.useReducer=function(r,e,t){return g.current.useReducer(r,e,t)};u.useRef=function(r){return g.current.useRef(r)};u.useState=function(r){return g.current.useState(r)};u.useSyncExternalStore=function(r,e,t){return g.current.useSyncExternalStore(r,e,t)};u.useTransition=function(){return g.current.useTransition()};u.version="18.2.0"});var Kr=V((mt,Zr)=>{"use strict";Zr.exports=Yr()});var Xr=V(F=>{"use strict";var Ne=Kr(),Oe=Symbol.for("react.element"),$e=Symbol.for("react.fragment"),Le=Object.prototype.hasOwnProperty,Ve=Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ue={key:!0,ref:!0,__self:!0,__source:!0};function Qr(r,e,t){var o,n={},s=null,i=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(i=e.ref);for(o in e)Le.call(e,o)&&!Ue.hasOwnProperty(o)&&(n[o]=e[o]);if(r&&r.defaultProps)for(o in e=r.defaultProps,e)n[o]===void 0&&(n[o]=e[o]);return{$$typeof:Oe,type:r,key:s,ref:i,props:n,_owner:Ve.current}}F.Fragment=$e;F.jsx=Qr;F.jsxs=Qr});var N=V((vt,re)=>{"use strict";re.exports=Xr()});function yr(){for(var r=0,e,t,o="";r<arguments.length;)(e=arguments[r++])&&(t=hr(e))&&(o&&(o+=" "),o+=t);return o}function hr(r){if(typeof r=="string")return r;for(var e,t="",o=0;o<r.length;o++)r[o]&&(e=hr(r[o]))&&(t&&(t+=" "),t+=e);return t}var Q="-";function Cr(r){var e=ce(r),t=r.conflictingClassGroups,o=r.conflictingClassGroupModifiers,n=o===void 0?{}:o;function s(a){var l=a.split(Q);return l[0]===""&&l.length!==1&&l.shift(),Sr(l,e)||le(a)}function i(a,l){var c=t[a]||[];return l&&n[a]?[].concat(c,n[a]):c}return{getClassGroupId:s,getConflictingClassGroupIds:i}}function Sr(r,e){if(r.length===0)return e.classGroupId;var t=r[0],o=e.nextPart.get(t),n=o?Sr(r.slice(1),o):void 0;if(n)return n;if(e.validators.length!==0){var s=r.join(Q);return e.validators.find(function(i){var a=i.validator;return a(s)})?.classGroupId}}var xr=/^\[(.+)\]$/;function le(r){if(xr.test(r)){var e=xr.exec(r)[1],t=e?.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}}function ce(r){var e=r.theme,t=r.prefix,o={nextPart:new Map,validators:[]},n=de(Object.entries(r.classGroups),t);return n.forEach(function(s){var i=s[0],a=s[1];K(a,o,i,e)}),o}function K(r,e,t,o){r.forEach(function(n){if(typeof n=="string"){var s=n===""?e:wr(e,n);s.classGroupId=t;return}if(typeof n=="function"){if(ue(n)){K(n(o),e,t,o);return}e.validators.push({validator:n,classGroupId:t});return}Object.entries(n).forEach(function(i){var a=i[0],l=i[1];K(l,wr(e,a),t,o)})})}function wr(r,e){var t=r;return e.split(Q).forEach(function(o){t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t}function ue(r){return r.isThemeGetter}function de(r,e){return e?r.map(function(t){var o=t[0],n=t[1],s=n.map(function(i){return typeof i=="string"?e+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(function(a){var l=a[0],c=a[1];return[e+l,c]})):i});return[o,s]}):r}function kr(r){if(r<1)return{get:function(){},set:function(){}};var e=0,t=new Map,o=new Map;function n(s,i){t.set(s,i),e++,e>r&&(e=0,o=t,t=new Map)}return{get:function(i){var a=t.get(i);if(a!==void 0)return a;if((a=o.get(i))!==void 0)return n(i,a),a},set:function(i,a){t.has(i)?t.set(i,a):n(i,a)}}}var X="!";function _r(r){var e=r.separator||":",t=e.length===1,o=e[0],n=e.length;return function(i){for(var a=[],l=0,c=0,b,f=0;f<i.length;f++){var m=i[f];if(l===0){if(m===o&&(t||i.slice(f,f+n)===e)){a.push(i.slice(c,f)),c=f+n;continue}if(m==="/"){b=f;continue}}m==="["?l++:m==="]"&&l--}var y=a.length===0?i:i.substring(c),w=y.startsWith(X),v=w?y.substring(1):y,C=b&&b>c?b-c:void 0;return{modifiers:a,hasImportantModifier:w,baseClassName:v,maybePostfixModifierPosition:C}}}function Mr(r){if(r.length<=1)return r;var e=[],t=[];return r.forEach(function(o){var n=o[0]==="[";n?(e.push.apply(e,t.sort().concat([o])),t=[]):t.push(o)}),e.push.apply(e,t.sort()),e}function Rr(r){return{cache:kr(r.cacheSize),splitModifiers:_r(r),...Cr(r)}}var fe=/\s+/;function Er(r,e){var t=e.splitModifiers,o=e.getClassGroupId,n=e.getConflictingClassGroupIds,s=new Set;return r.trim().split(fe).map(function(i){var a=t(i),l=a.modifiers,c=a.hasImportantModifier,b=a.baseClassName,f=a.maybePostfixModifierPosition,m=o(f?b.substring(0,f):b),y=!!f;if(!m){if(!f)return{isTailwindClass:!1,originalClassName:i};if(m=o(b),!m)return{isTailwindClass:!1,originalClassName:i};y=!1}var w=Mr(l).join(":"),v=c?w+X:w;return{isTailwindClass:!0,modifierId:v,classGroupId:m,originalClassName:i,hasPostfixModifier:y}}).reverse().filter(function(i){if(!i.isTailwindClass)return!0;var a=i.modifierId,l=i.classGroupId,c=i.hasPostfixModifier,b=a+l;return s.has(b)?!1:(s.add(b),n(l,c).forEach(function(f){return s.add(a+f)}),!0)}).reverse().map(function(i){return i.originalClassName}).join(" ")}function Pr(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];var o,n,s,i=a;function a(c){var b=e[0],f=e.slice(1),m=f.reduce(function(y,w){return w(y)},b());return o=Rr(m),n=o.cache.get,s=o.cache.set,i=l,l(c)}function l(c){var b=n(c);if(b)return b;var f=Er(c,o);return s(c,f),f}return function(){return i(yr.apply(null,arguments))}}function d(r){var e=function(o){return o[r]||[]};return e.isThemeGetter=!0,e}var Ir=/^\[(?:([a-z-]+):)?(.+)\]$/i,pe=/^\d+\/\d+$/,be=new Set(["px","full","screen"]),me=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,ge=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|^0$/,ve=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function x(r){return R(r)||be.has(r)||pe.test(r)||k(r)}function k(r){return E(r,"length",ye)}function zr(r){return E(r,"size",Or)}function Tr(r){return E(r,"position",Or)}function Gr(r){return E(r,"url",he)}function G(r){return E(r,"number",R)}function R(r){return!Number.isNaN(Number(r))}function jr(r){return r.endsWith("%")&&R(r.slice(0,-1))}function P(r){return Ar(r)||E(r,"number",Ar)}function p(r){return Ir.test(r)}function A(){return!0}function _(r){return me.test(r)}function Nr(r){return E(r,"",xe)}function E(r,e,t){var o=Ir.exec(r);return o?o[1]?o[1]===e:t(o[2]):!1}function ye(r){return ge.test(r)}function Or(){return!1}function he(r){return r.startsWith("url(")}function Ar(r){return Number.isInteger(Number(r))}function xe(r){return ve.test(r)}function $r(){var r=d("colors"),e=d("spacing"),t=d("blur"),o=d("brightness"),n=d("borderColor"),s=d("borderRadius"),i=d("borderSpacing"),a=d("borderWidth"),l=d("contrast"),c=d("grayscale"),b=d("hueRotate"),f=d("invert"),m=d("gap"),y=d("gradientColorStops"),w=d("gradientColorStopPositions"),v=d("inset"),C=d("margin"),M=d("opacity"),S=d("padding"),lr=d("saturate"),D=d("scale"),cr=d("sepia"),ur=d("skew"),dr=d("space"),fr=d("translate"),J=function(){return["auto","contain","none"]},H=function(){return["auto","hidden","clip","visible","scroll"]},Y=function(){return["auto",e]},pr=function(){return["",x]},O=function(){return["auto",R,p]},br=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},$=function(){return["solid","dashed","dotted","double","none"]},mr=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},Z=function(){return["start","end","center","between","around","evenly","stretch"]},z=function(){return["","0",p]},gr=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},T=function(){return[R,G]},L=function(){return[R,p]};return{cacheSize:500,theme:{colors:[A],spacing:[x],blur:["none","",_,k],brightness:T(),borderColor:[r],borderRadius:["none","","full",_,k],borderSpacing:[e],borderWidth:pr(),contrast:T(),grayscale:z(),hueRotate:L(),invert:z(),gap:[e],gradientColorStops:[r],gradientColorStopPositions:[jr,k],inset:Y(),margin:Y(),opacity:T(),padding:[e],saturate:T(),scale:T(),sepia:z(),skew:L(),space:[e],translate:[e]},classGroups:{aspect:[{aspect:["auto","square","video",p]}],container:["container"],columns:[{columns:[_]}],"break-after":[{"break-after":gr()}],"break-before":[{"break-before":gr()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(br(),[p])}],overflow:[{overflow:H()}],"overflow-x":[{"overflow-x":H()}],"overflow-y":[{"overflow-y":H()}],overscroll:[{overscroll:J()}],"overscroll-x":[{"overscroll-x":J()}],"overscroll-y":[{"overscroll-y":J()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[v]}],"inset-x":[{"inset-x":[v]}],"inset-y":[{"inset-y":[v]}],start:[{start:[v]}],end:[{end:[v]}],top:[{top:[v]}],right:[{right:[v]}],bottom:[{bottom:[v]}],left:[{left:[v]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",P]}],basis:[{basis:Y()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",p]}],grow:[{grow:z()}],shrink:[{shrink:z()}],order:[{order:["first","last","none",P]}],"grid-cols":[{"grid-cols":[A]}],"col-start-end":[{col:["auto",{span:[P]},p]}],"col-start":[{"col-start":O()}],"col-end":[{"col-end":O()}],"grid-rows":[{"grid-rows":[A]}],"row-start-end":[{row:["auto",{span:[P]},p]}],"row-start":[{"row-start":O()}],"row-end":[{"row-end":O()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",p]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",p]}],gap:[{gap:[m]}],"gap-x":[{"gap-x":[m]}],"gap-y":[{"gap-y":[m]}],"justify-content":[{justify:["normal"].concat(Z())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(Z(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(Z(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[S]}],px:[{px:[S]}],py:[{py:[S]}],ps:[{ps:[S]}],pe:[{pe:[S]}],pt:[{pt:[S]}],pr:[{pr:[S]}],pb:[{pb:[S]}],pl:[{pl:[S]}],m:[{m:[C]}],mx:[{mx:[C]}],my:[{my:[C]}],ms:[{ms:[C]}],me:[{me:[C]}],mt:[{mt:[C]}],mr:[{mr:[C]}],mb:[{mb:[C]}],ml:[{ml:[C]}],"space-x":[{"space-x":[dr]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[dr]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",e]}],"min-w":[{"min-w":["min","max","fit",x]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[_]},_,k]}],h:[{h:[e,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",x]}],"max-h":[{"max-h":[e,"min","max","fit"]}],"font-size":[{text:["base",_,k]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",G]}],"font-family":[{font:[A]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",k]}],"line-clamp":[{"line-clamp":["none",R,G]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",x]}],"list-image":[{"list-image":["none",p]}],"list-style-type":[{list:["none","disc","decimal",p]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[r]}],"placeholder-opacity":[{"placeholder-opacity":[M]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[r]}],"text-opacity":[{"text-opacity":[M]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat($(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",x]}],"underline-offset":[{"underline-offset":["auto",x]}],"text-decoration-color":[{decoration:[r]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:[e]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",k]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",p]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[M]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(br(),[Tr])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",zr]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Gr]}],"bg-color":[{bg:[r]}],"gradient-from-pos":[{from:[w]}],"gradient-via-pos":[{via:[w]}],"gradient-to-pos":[{to:[w]}],"gradient-from":[{from:[y]}],"gradient-via":[{via:[y]}],"gradient-to":[{to:[y]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[M]}],"border-style":[{border:[].concat($(),["hidden"])}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[M]}],"divide-style":[{divide:$()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:[""].concat($())}],"outline-offset":[{"outline-offset":[x]}],"outline-w":[{outline:[x]}],"outline-color":[{outline:[r]}],"ring-w":[{ring:pr()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[r]}],"ring-opacity":[{"ring-opacity":[M]}],"ring-offset-w":[{"ring-offset":[x]}],"ring-offset-color":[{"ring-offset":[r]}],shadow:[{shadow:["","inner","none",_,Nr]}],"shadow-color":[{shadow:[A]}],opacity:[{opacity:[M]}],"mix-blend":[{"mix-blend":mr()}],"bg-blend":[{"bg-blend":mr()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",_,p]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[b]}],invert:[{invert:[f]}],saturate:[{saturate:[lr]}],sepia:[{sepia:[cr]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[b]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[M]}],"backdrop-saturate":[{"backdrop-saturate":[lr]}],"backdrop-sepia":[{"backdrop-sepia":[cr]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",p]}],duration:[{duration:L()}],ease:[{ease:["linear","in","out","in-out",p]}],delay:[{delay:L()}],animate:[{animate:["none","spin","ping","pulse","bounce",p]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[D]}],"scale-x":[{"scale-x":[D]}],"scale-y":[{"scale-y":[D]}],rotate:[{rotate:[P,p]}],"translate-x":[{"translate-x":[fr]}],"translate-y":[{"translate-y":[fr]}],"skew-x":[{"skew-x":[ur]}],"skew-y":[{"skew-y":[ur]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",p]}],accent:[{accent:["auto",r]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",p]}],"caret-color":[{caret:[r]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":[e]}],"scroll-mx":[{"scroll-mx":[e]}],"scroll-my":[{"scroll-my":[e]}],"scroll-ms":[{"scroll-ms":[e]}],"scroll-me":[{"scroll-me":[e]}],"scroll-mt":[{"scroll-mt":[e]}],"scroll-mr":[{"scroll-mr":[e]}],"scroll-mb":[{"scroll-mb":[e]}],"scroll-ml":[{"scroll-ml":[e]}],"scroll-p":[{"scroll-p":[e]}],"scroll-px":[{"scroll-px":[e]}],"scroll-py":[{"scroll-py":[e]}],"scroll-ps":[{"scroll-ps":[e]}],"scroll-pe":[{"scroll-pe":[e]}],"scroll-pt":[{"scroll-pt":[e]}],"scroll-pr":[{"scroll-pr":[e]}],"scroll-pb":[{"scroll-pb":[e]}],"scroll-pl":[{"scroll-pl":[e]}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",p]}],fill:[{fill:[r,"none"]}],"stroke-w":[{stroke:[x,G]}],stroke:[{stroke:[r,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var rr=Pr($r);var ar=U(N(),1);var ee=r=>(0,ar.jsx)("div",{className:rr("button w-fit cursor-pointer whitespace-nowrap rounded-full border border-solid px-6 py-3 text-center transition-colors",We(r.theme,{0:"border-bg-white text-text-contrast hover:bg-bg-blue-hovered hover:text-accent-hovered active:bg-bg-blue-light",1:"border-transparent bg-text-contrast text-accent hover:bg-bg-blue-hovered hover:text-accent-hovered active:bg-bg-blue-light",2:"border-transparent bg-accent text-text-contrast hover:bg-accent-hovered active:bg-accent-pressed",3:"border-accent text-accent hover:bg-accent-hovered hover:text-text-contrast active:bg-accent-pressed"}),r.className),children:(0,ar.jsx)("span",{children:r.children})});function We(r,e){return e[r]}var sr=U(N(),1),Ct=(0,sr.jsx)("div",{className:"bg-amber-300 h-screen p-10",children:(0,sr.jsx)(ee,{theme:1,children:"Super Button"})});export{Ct as default};
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
