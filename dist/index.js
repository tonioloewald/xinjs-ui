var j2=Object.defineProperty;var W2=(t,i)=>{for(var e in i)j2(t,e,{get:i[e],enumerable:!0,configurable:!0,set:(s)=>i[e]=()=>s})};function L(t,i,e,s){Object.defineProperty(t,i,{get:e,set:s,enumerable:!0,configurable:!0})}var b3=globalThis,Q1={},T1={},x=b3.parcelRequire94c2;if(x==null)x=function(t){if(t in Q1)return Q1[t].exports;if(t in T1){var i=T1[t];delete T1[t];var e={id:t,exports:{}};return Q1[t]=e,i.call(e.exports,e,e.exports),e.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s},x.register=function t(i,e){T1[i]=e},b3.parcelRequire94c2=x;var j=x.register;j("3x0mh",function(module,exports){L(module.exports,"Blueprint",()=>Blueprint),L(module.exports,"blueprint",()=>blueprint),L(module.exports,"BlueprintLoader",()=>BlueprintLoader),L(module.exports,"blueprintLoader",()=>blueprintLoader);var $aVpVG=x("aVpVG"),$lGBgM=x("lGBgM");class Blueprint extends $aVpVG.Component{async packaged(){if(!this.loaded){let{tag,src}=this,imported=await eval(`import('${src}')`),blueprint=imported[this.property];this.loaded=$lGBgM.makeComponent(tag,blueprint)}return this.loaded}constructor(){super(),this.tag="anon-elt",this.src="",this.property="default",this.initAttributes("tag","src","property")}}let blueprint=Blueprint.elementCreator({tag:"xin-blueprint",styleSpec:{":host":{display:"none"}}});class BlueprintLoader extends $aVpVG.Component{constructor(){super()}async load(){let i=[...this.querySelectorAll(Blueprint.tagName)].filter((e)=>e.src).map((e)=>e.packaged());await Promise.all(i)}connectedCallback(){super.connectedCallback(),this.load()}}let blueprintLoader=BlueprintLoader.elementCreator({tag:"xin-loader",styleSpec:{":host":{display:"none"}}})});j("aVpVG",function(t,i){L(t.exports,"Component",()=>C);var e=x("2okor"),s=x("19FSF"),n=x("gbrAN"),o=x("9sLMf"),a=x("5JLBr");let l=0;function c(){return`custom-elt${(l++).toString(36)}`}let h=0,d={};function p(r,f){let v=d[r],u=e.css(f).replace(/:host\b/g,r);d[r]=v?v+`
`+u:u}function g(r){if(d[r])document.head.append(o.elements.style({id:r+"-component"},d[r]));delete d[r]}class C extends HTMLElement{static{this.elements=o.elements}static{this._tagName=null}static get tagName(){return this._tagName}static StyleNode(r){return console.warn("StyleNode is deprecated, just assign static styleSpec: XinStyleSheet to the class directly"),o.elements.style(e.css(r))}static elementCreator(r={}){if(this._elementCreator==null){let{tag:f,styleSpec:v}=r,u=r!=null?f:null;if(u==null)if(typeof this.name==="string"&&this.name!==""){if(u=a.camelToKabob(this.name),u.startsWith("-"))u=u.slice(1)}else u=c();if(customElements.get(u)!=null)console.warn(`${u} is already defined`);if(u.match(/\w+(-\w+)+/)==null)console.warn(`${u} is not a legal tag for a custom-element`),u=c();while(customElements.get(u)!==void 0)u=c();if(this._tagName=u,v!==void 0)p(u,v);window.customElements.define(u,this,r),this._elementCreator=o.elements[u]}return this._elementCreator}initAttributes(...r){let f={},v={};new MutationObserver((b)=>{let M=!1;if(b.forEach((y)=>{M=!!(y.attributeName&&r.includes(a.kabobToCamel(y.attributeName)))}),M&&this.queueRender!==void 0)this.queueRender(!1)}).observe(this,{attributes:!0}),r.forEach((b)=>{f[b]=s.deepClone(this[b]);let M=a.camelToKabob(b);Object.defineProperty(this,b,{enumerable:!1,get(){if(typeof f[b]==="boolean")return this.hasAttribute(M);else if(this.hasAttribute(M))return typeof f[b]==="number"?parseFloat(this.getAttribute(M)):this.getAttribute(M);else if(v[b]!==void 0)return v[b];else return f[b]},set(y){if(typeof f[b]==="boolean"){if(y!==this[b]){if(y)this.setAttribute(M,"");else this.removeAttribute(M);this.queueRender()}}else if(typeof f[b]==="number"){if(y!==parseFloat(this[b]))this.setAttribute(M,y),this.queueRender()}else if(typeof y==="object"||`${y}`!==`${this[b]}`){if(y===null||y===void 0||typeof y==="object")this.removeAttribute(M);else this.setAttribute(M,y);this.queueRender(),v[b]=y}}})})}initValue(){let r=Object.getOwnPropertyDescriptor(this,"value");if(r===void 0||r.get!==void 0||r.set!==void 0)return;let f=this.hasAttribute("value")?this.getAttribute("value"):s.deepClone(this.value);delete this.value,Object.defineProperty(this,"value",{enumerable:!1,get(){return f},set(v){if(f!==v)f=v,this.queueRender(!0)}})}get parts(){let r=this.shadowRoot!=null?this.shadowRoot:this;if(this._parts==null)this._parts=new Proxy({},{get(f,v){if(f[v]===void 0){let u=r.querySelector(`[part="${v}"]`);if(u==null)u=r.querySelector(v);if(u==null)throw new Error(`elementRef "${v}" does not exist!`);u.removeAttribute("data-ref"),f[v]=u}return f[v]}});return this._parts}constructor(){super(),this.content=o.elements.slot(),this._changeQueued=!1,this._renderQueued=!1,this._hydrated=!1,h+=1,this.initAttributes("hidden"),this.instanceId=`${this.tagName.toLocaleLowerCase()}-${h}`,this._value=s.deepClone(this.defaultValue)}connectedCallback(){if(g(this.constructor.tagName),this.hydrate(),this.role!=null)this.setAttribute("role",this.role);if(this.onResize!==void 0){if(n.resizeObserver.observe(this),this._onResize==null)this._onResize=this.onResize.bind(this);this.addEventListener("resize",this._onResize)}if(this.value!=null&&this.getAttribute("value")!=null)this._value=this.getAttribute("value");this.queueRender()}disconnectedCallback(){n.resizeObserver.unobserve(this)}queueRender(r=!1){if(!this._hydrated)return;if(!this._changeQueued)this._changeQueued=r;if(!this._renderQueued)this._renderQueued=!0,requestAnimationFrame(()=>{if(this._changeQueued)n.dispatch(this,"change");this._changeQueued=!1,this._renderQueued=!1,this.render()})}hydrate(){if(!this._hydrated){this.initValue();let r=typeof this.content!=="function",f=typeof this.content==="function"?this.content():this.content,{styleSpec:v}=this.constructor,{styleNode:u}=this.constructor;if(v)u=this.constructor.styleNode=o.elements.style(e.css(v)),delete this.constructor.styleNode;if(this.styleNode)console.warn(this,"styleNode is deprecrated, use static styleNode or statc styleSpec instead"),u=this.styleNode;if(u){let b=this.attachShadow({mode:"open"});b.appendChild(u.cloneNode(!0)),n.appendContentToElement(b,f,r)}else if(f!==null){let b=[...this.childNodes];n.appendContentToElement(this,f,r),this.isSlotted=this.querySelector("slot,xin-slot")!==void 0;let M=[...this.querySelectorAll("slot")];if(M.length>0)M.forEach(z.replaceSlot);if(b.length>0){let y={"":this};[...this.querySelectorAll("xin-slot")].forEach((E)=>{y[E.name]=E}),b.forEach((E)=>{let w=y[""],P=E instanceof Element?y[E.slot]:w;(P!==void 0?P:w).append(E)})}}this._hydrated=!0}}render(){}}class z extends C{static replaceSlot(r){let f=document.createElement("xin-slot");if(r.name!=="")f.setAttribute("name",r.name);r.replaceWith(f)}constructor(){super(),this.name="",this.content=null,this.initAttributes("name")}}let S=z.elementCreator({tag:"xin-slot"})});j("2okor",function(t,i){L(t.exports,"StyleSheet",()=>o),L(t.exports,"css",()=>d),L(t.exports,"processProp",()=>l),L(t.exports,"initVars",()=>p),L(t.exports,"darkMode",()=>g),L(t.exports,"invertLuminance",()=>C),L(t.exports,"vars",()=>z),L(t.exports,"varDefault",()=>S);var e=x("6Jaab"),s=x("9sLMf"),n=x("5JLBr");function o(r,f){let v=s.elements.style(d(f));v.id=r,document.head.append(v)}let a=["animation-iteration-count","flex","flex-base","flex-grow","flex-shrink","opacity","order","tab-size","widows","z-index","zoom"],l=(r,f)=>{if(typeof f==="number"&&!a.includes(r))f=`${f}px`;if(r.startsWith("_"))if(r.startsWith("__"))r="--"+r.substring(2),f=`var(${r}-default, ${f})`;else r="--"+r.substring(1);return{prop:r,value:String(f)}},c=(r,f,v)=>{if(v===void 0)return"";if(v instanceof e.Color)v=v.html;let u=l(f,v);return`${r}  ${u.prop}: ${u.value};`},h=(r,f,v="")=>{let u=n.camelToKabob(r);if(typeof f==="object"&&!(f instanceof e.Color)){let b=Object.keys(f).map((M)=>h(M,f[M],`${v}  `)).join(`
`);return`${v}  ${r} {
${b}
${v}  }`}else return c(v,u,f)},d=(r,f="")=>{return Object.keys(r).map((u)=>{let b=r[u];if(typeof b==="string"){if(u==="@import")return`@import url('${b}');`;throw new Error("top-level string value only allowed for `@import`")}let M=Object.keys(b).map((y)=>h(y,b[y])).join(`
`);return`${f}${u} {
${M}
}`}).join(`

`)},p=(r)=>{console.warn("initVars is deprecated. Just use _ and __ prefixes instead.");let f={};for(let v of Object.keys(r)){let u=r[v],b=n.camelToKabob(v);f[`--${b}`]=typeof u==="number"&&u!==0?String(u)+"px":u}return f},g=(r)=>{console.warn("darkMode is deprecated. Use inverseLuminance instead.");let f={};for(let v of Object.keys(r)){let u=r[v];if(typeof u==="string"&&u.match(/^(#|rgb[a]?\(|hsl[a]?\()/)!=null)u=e.Color.fromCss(u).inverseLuminance.html,f[`--${n.camelToKabob(v)}`]=u}return f},C=(r)=>{let f={};for(let v of Object.keys(r)){let u=r[v];if(u instanceof e.Color)f[v]=u.inverseLuminance;else if(typeof u==="string"&&u.match(/^(#[0-9a-fA-F]{3}|rgba?\(|hsla?\()/))f[v]=e.Color.fromCss(u).inverseLuminance}return f},z=new Proxy({},{get(r,f){if(r[f]==null){f=f.replace(/[A-Z]/g,(E)=>`-${E.toLocaleLowerCase()}`);let[,v,,u,b,M]=f.match(/^([^\d_]*)((_)?(\d+)(\w*))?$/),y=`--${v}`;if(b!=null){let E=u==null?Number(b)/100:-Number(b)/100;switch(M){case"b":{let w=getComputedStyle(document.body).getPropertyValue(y);r[f]=E>0?e.Color.fromCss(w).brighten(E).rgba:e.Color.fromCss(w).darken(-E).rgba}break;case"s":{let w=getComputedStyle(document.body).getPropertyValue(y);r[f]=E>0?e.Color.fromCss(w).saturate(E).rgba:e.Color.fromCss(w).desaturate(-E).rgba}break;case"h":{let w=getComputedStyle(document.body).getPropertyValue(y);r[f]=e.Color.fromCss(w).rotate(E*100).rgba,console.log(e.Color.fromCss(w).hsla,e.Color.fromCss(w).rotate(E).hsla)}break;case"o":{let w=getComputedStyle(document.body).getPropertyValue(y);r[f]=e.Color.fromCss(w).opacity(E).rgba}break;case"":r[f]=`calc(var(${y}) * ${E})`;break;default:throw console.error(M),new Error(`Unrecognized method ${M} for css variable ${y}`)}}else r[f]=`var(${y})`}return r[f]}}),S=new Proxy({},{get(r,f){if(r[f]===void 0){let v=`--${f.replace(/[A-Z]/g,(u)=>`-${u.toLocaleLowerCase()}`)}`;r[f]=(u)=>`var(${v}, ${u})`}return r[f]}})});j("6Jaab",function(t,i){L(t.exports,"Color",()=>l);var e=x("drWRQ");let s=(c,h,d)=>{return(0.299*c+0.587*h+0.114*d)/255},n=(c)=>("00"+Math.round(Number(c)).toString(16)).slice(-2);class o{constructor(c,h,d){c/=255,h/=255,d/=255;let p=Math.max(c,h,d),g=p-Math.min(c,h,d),C=g!==0?p===c?(h-d)/g:p===h?2+(d-c)/g:4+(c-h)/g:0;this.h=60*C<0?60*C+360:60*C,this.s=g!==0?p<=0.5?g/(2*p-g):g/(2-(2*p-g)):0,this.l=(2*p-g)/2}}let a=globalThis.document!==void 0?globalThis.document.createElement("span"):void 0;class l{static fromCss(c){let h=c;if(a instanceof HTMLSpanElement)a.style.color=c,document.body.appendChild(a),h=getComputedStyle(a).color,a.remove();let[d,p,g,C]=h.match(/[\d.]+/g);return new l(Number(d),Number(p),Number(g),C==null?1:Number(C))}static fromHsl(c,h,d,p=1){return l.fromCss(`hsla(${c.toFixed(0)}, ${(h*100).toFixed(0)}%, ${(d*100).toFixed(0)}%, ${p.toFixed(2)})`)}constructor(c,h,d,p=1){this.r=e.clamp(0,c,255),this.g=e.clamp(0,h,255),this.b=e.clamp(0,d,255),this.a=p!==void 0?e.clamp(0,p,1):p=1}get inverse(){return new l(255-this.r,255-this.g,255-this.b,this.a)}get inverseLuminance(){let{h:c,s:h,l:d}=this._hsl;return l.fromHsl(c,h,1-d,this.a)}get rgb(){let{r:c,g:h,b:d}=this;return`rgb(${c.toFixed(0)},${h.toFixed(0)},${d.toFixed(0)})`}get rgba(){let{r:c,g:h,b:d,a:p}=this;return`rgba(${c.toFixed(0)},${h.toFixed(0)},${d.toFixed(0)},${p.toFixed(2)})`}get RGBA(){return[this.r/255,this.g/255,this.b/255,this.a]}get ARGB(){return[this.a,this.r/255,this.g/255,this.b/255]}get _hsl(){if(this.hslCached==null)this.hslCached=new o(this.r,this.g,this.b);return this.hslCached}get hsl(){let{h:c,s:h,l:d}=this._hsl;return`hsl(${c.toFixed(0)}, ${(h*100).toFixed(0)}%, ${(d*100).toFixed(0)}%)`}get hsla(){let{h:c,s:h,l:d}=this._hsl;return`hsla(${c.toFixed(0)}, ${(h*100).toFixed(0)}%, ${(d*100).toFixed(0)}%, ${this.a.toFixed(2)})`}get mono(){let c=this.brightness*255;return new l(c,c,c)}get brightness(){return s(this.r,this.g,this.b)}get html(){return this.toString()}toString(){return this.a===1?"#"+n(this.r)+n(this.g)+n(this.b):"#"+n(this.r)+n(this.g)+n(this.b)+n(Math.floor(255*this.a))}brighten(c){let{h,s:d,l:p}=this._hsl,g=e.clamp(0,p+c*(1-p),1);return l.fromHsl(h,d,g,this.a)}darken(c){let{h,s:d,l:p}=this._hsl,g=e.clamp(0,p*(1-c),1);return l.fromHsl(h,d,g,this.a)}saturate(c){let{h,s:d,l:p}=this._hsl,g=e.clamp(0,d+c*(1-d),1);return l.fromHsl(h,g,p,this.a)}desaturate(c){let{h,s:d,l:p}=this._hsl,g=e.clamp(0,d*(1-c),1);return l.fromHsl(h,g,p,this.a)}rotate(c){let{h,s:d,l:p}=this._hsl,g=(h+360+c)%360;return l.fromHsl(g,d,p,this.a)}opacity(c){let{h,s:d,l:p}=this._hsl;return l.fromHsl(h,d,p,c)}swatch(){let{r:c,g:h,b:d,a:p}=this;return console.log(`%c      %c ${this.html}, rgba(${c}, ${h}, ${d}, ${p}), ${this.hsla}`,`background-color: rgba(${c}, ${h}, ${d}, ${p})`,"background-color: transparent"),this}blend(c,h){return new l(e.lerp(this.r,c.r,h),e.lerp(this.g,c.g,h),e.lerp(this.b,c.b,h),e.lerp(this.a,c.a,h))}mix(c,h){let d=this._hsl,p=c._hsl;return l.fromHsl(e.lerp(d.h,p.h,h),e.lerp(d.s,p.s,h),e.lerp(d.l,p.l,h),e.lerp(this.a,c.a,h))}}});j("drWRQ",function(t,i){L(t.exports,"clamp",()=>n),L(t.exports,"lerp",()=>o),L(t.exports,"MoreMath",()=>a);let e=180/Math.PI,s=Math.PI/180;function n(l,c,h){return c<l?l:c>h?h:c}function o(l,c,h){return h=n(0,h,1),h*(c-l)+l}let a={clamp:n,lerp:o}});j("9sLMf",function(t,i){L(t.exports,"elements",()=>p),L(t.exports,"svgElements",()=>g),L(t.exports,"mathML",()=>C);var e=x("kCu8Y"),s=x("buKmK"),n=x("5JLBr"),o=x("2okor");let a="http://www.w3.org/1998/Math/MathML",l="http://www.w3.org/2000/svg",c={},h=(z,...S)=>{if(c[z]===void 0){let[v,u]=z.split("|");if(u===void 0)c[z]=globalThis.document.createElement(v);else c[z]=globalThis.document.createElementNS(u,v)}let r=c[z].cloneNode(),f={};for(let v of S)if(v instanceof Element||v instanceof DocumentFragment||typeof v==="string"||typeof v==="number")if(r instanceof HTMLTemplateElement)r.content.append(v);else r.append(v);else Object.assign(f,v);for(let v of Object.keys(f)){let u=f[v];if(v==="apply")u(r);else if(v==="style")if(typeof u==="object")for(let b of Object.keys(u)){let M=o.processProp(n.camelToKabob(b),u[b]);if(M.prop.startsWith("--"))r.style.setProperty(M.prop,M.value);else r.style[b]=M.value}else r.setAttribute("style",u);else if(v.match(/^on[A-Z]/)!=null){let b=v.substring(2).toLowerCase();e.on(r,b,u)}else if(v==="bind")if((typeof u.binding==="string"?s.bindings[u.binding]:u.binding)!==void 0&&u.value!==void 0)e.bind(r,u.value,u.binding instanceof Function?{toDOM:u.binding}:u.binding);else throw new Error("bad binding");else if(v.match(/^bind[A-Z]/)!=null){let b=v.substring(4,5).toLowerCase()+v.substring(5),M=s.bindings[b];if(M!==void 0)e.bind(r,u,M);else throw new Error(`${v} is not allowed, bindings.${b} is not defined`)}else if(r[v]!==void 0){let{MathMLElement:b}=globalThis;if(r instanceof SVGElement||b!==void 0&&r instanceof b)r.setAttribute(v,u);else r[v]=u}else{let b=n.camelToKabob(v);if(b==="class")u.split(" ").forEach((M)=>{r.classList.add(M)});else if(r[b]!==void 0)r[b]=u;else if(typeof u==="boolean")u?r.setAttribute(b,""):r.removeAttribute(b);else r.setAttribute(b,u)}}return r},d=(...z)=>{let S=globalThis.document.createDocumentFragment();for(let r of z)S.append(r);return S},p=new Proxy({fragment:d},{get(z,S){if(S=S.replace(/[A-Z]/g,(r)=>`-${r.toLocaleLowerCase()}`),z[S]===void 0)z[S]=(...r)=>h(S,...r);return z[S]},set(){throw new Error("You may not add new properties to elements")}}),g=new Proxy({fragment:d},{get(z,S){if(z[S]===void 0)z[S]=(...r)=>h(`${S}|${l}`,...r);return z[S]},set(){throw new Error("You may not add new properties to elements")}}),C=new Proxy({fragment:d},{get(z,S){if(z[S]===void 0)z[S]=(...r)=>h(`${S}|${a}`,...r);return z[S]},set(){throw new Error("You may not add new properties to elements")}})});j("kCu8Y",function(t,i){L(t.exports,"bind",()=>h),L(t.exports,"on",()=>g);var e=x("eppu5"),s=x("5lOGz"),n=x("5hOlm");let{document:o,MutationObserver:a}=globalThis,l=(C,z)=>{let S=n.elementToBindings.get(C);if(S==null)return;for(let r of S){let{binding:f,options:v}=r,{path:u}=r,{toDOM:b}=f;if(b!=null){if(u.startsWith("^")){let M=n.getListItem(C);if(M!=null&&M[n.XIN_PATH]!=null)u=r.path=`${M[n.XIN_PATH]}${u.substring(1)}`;else throw console.error(`Cannot resolve relative binding ${u}`,C,"is not part of a list"),new Error(`Cannot resolve relative binding ${u}`)}if(z==null||u.startsWith(z))b(C,e.xin[u],v)}}};if(a!=null)new a((z)=>{z.forEach((S)=>{[...S.addedNodes].forEach((r)=>{if(r instanceof Element)[...r.querySelectorAll(n.BOUND_SELECTOR)].forEach((f)=>l(f))})})}).observe(o.body,{subtree:!0,childList:!0});e.observe(()=>!0,(C)=>{let z=o.querySelectorAll(n.BOUND_SELECTOR);for(let S of z)l(S,C)});let c=(C)=>{let z=C.target.closest(n.BOUND_SELECTOR);while(z!=null){let S=n.elementToBindings.get(z);for(let r of S){let{binding:f,path:v}=r,{fromDOM:u}=f;if(u!=null){let b;try{b=u(z,r.options)}catch(M){throw console.error("Cannot get value from",z,"via",r),new Error("Cannot obtain value fromDOM")}if(b!=null){let M=e.xin[v];if(M==null)e.xin[v]=b;else{let y=M[n.XIN_PATH]!=null?M[n.XIN_VALUE]:M,E=b[n.XIN_PATH]!=null?b[n.XIN_VALUE]:b;if(y!==E)e.xin[v]=E}}}}z=z.parentElement.closest(n.BOUND_SELECTOR)}};if(globalThis.document!=null)o.body.addEventListener("change",c,!0),o.body.addEventListener("input",c,!0);function h(C,z,S,r){if(C instanceof DocumentFragment)throw new Error("bind cannot bind to a DocumentFragment");let f;if(typeof z==="object"&&z[n.XIN_PATH]===void 0&&r===void 0){let{value:b}=z;f=typeof b==="string"?b:b[n.XIN_PATH],r=z,delete r.value}else f=typeof z==="string"?z:z[n.XIN_PATH];if(f==null)throw new Error("bind requires a path or object with xin Proxy");let{toDOM:v}=S;C.classList?.add(n.BOUND_CLASS);let u=n.elementToBindings.get(C);if(u==null)u=[],n.elementToBindings.set(C,u);if(u.push({path:f,binding:S,options:r}),v!=null&&!f.startsWith("^"))s.touch(f);return C}let d=new Set,p=(C)=>{let z=C?.target.closest(n.EVENT_SELECTOR),S=!1,r=new Proxy(C,{get(f,v){if(v==="stopPropagation")return()=>{C.stopPropagation(),S=!0};else{let u=f[v];return typeof u==="function"?u.bind(f):u}}});while(!S&&z!=null){let v=n.elementToHandlers.get(z)[C.type]||[];for(let u of v){if(typeof u==="function")u(r);else{let b=e.xin[u];if(typeof b==="function")b(r);else throw new Error(`no event handler found at path ${u}`)}if(S)continue}z=z.parentElement!=null?z.parentElement.closest(n.EVENT_SELECTOR):null}},g=(C,z,S)=>{let r=n.elementToHandlers.get(C);if(C.classList.add(n.EVENT_CLASS),r==null)r={},n.elementToHandlers.set(C,r);if(!r[z])r[z]=[];if(!r[z].includes(S))r[z].push(S);if(!d.has(z))d.add(z),o.body.addEventListener(z,p,!0)}});j("eppu5",function(t,i){L(t.exports,"xin",()=>r),L(t.exports,"observe",()=>S),L(t.exports,"boxed",()=>f),L(t.exports,"updates",()=>x("5lOGz").updates),L(t.exports,"touch",()=>x("5lOGz").touch),L(t.exports,"unobserve",()=>x("5lOGz").unobserve),L(t.exports,"observerShouldBeRemoved",()=>x("5lOGz").observerShouldBeRemoved);var e=x("hv4Z8"),s=x("5lOGz"),n=x("aMI8M"),o=x("5hOlm");let a=["sort","splice","copyWithin","fill","pop","push","reverse","shift","unshift"],l={},c=!0,h=/^\.?([^.[\](),])+(\.[^.[\](),]+|\[\d+\]|\[[^=[\](),]*=[^[\]()]+\])*$/,d=(v)=>h.test(v),p=(v="",u="")=>{if(v==="")return u;else if(u.match(/^\d+$/)!==null||u.includes("="))return`${v}[${u}]`;else return`${v}.${u}`},g={string(v){return new String(v)},boolean(v){return new Boolean(v)},bigint(v){return v},symbol(v){return v},number(v){return new Number(v)}};function C(v,u){let b=typeof v;if(v===void 0||b==="object"||b==="function")return v;else return new Proxy(g[typeof v](v),z(u,!0))}let z=(v,u)=>({get(b,M){switch(M){case o.XIN_PATH:return v;case o.XIN_VALUE:return o.xinValue(b)}if(typeof M==="symbol")return b[M];let y=M,E=y.match(/^([^.[]+)\.(.+)$/)??y.match(/^([^\]]+)(\[.+)/)??y.match(/^(\[[^\]]+\])\.(.+)$/)??y.match(/^(\[[^\]]+\])\[(.+)$/);if(E!==null){let[,w,P]=E,_=p(v,w),D=n.getByPath(b,w);return D!==null&&typeof D==="object"?new Proxy(D,z(_,u))[P]:D}if(y.startsWith("[")&&y.endsWith("]"))y=y.substring(1,y.length-1);if(!Array.isArray(b)&&b[y]!==void 0||Array.isArray(b)&&y.includes("=")){let w;if(y.includes("=")){let[P,_]=y.split("=");w=b.find((D)=>`${n.getByPath(D,P)}`===_)}else w=b[y];if(w!==null&&typeof w==="object"){let P=p(v,y);return new Proxy(w,z(P,u))}else if(typeof w==="function")return w.bind(b);else return u?C(w,p(v,y)):w}else if(Array.isArray(b)){let w=b[y];return typeof w==="function"?(...P)=>{let _=Array.prototype[y].apply(b,P);if(a.includes(y))s.touch(v);return _}:typeof w==="object"?new Proxy(w,z(p(v,y),u)):u?C(w,p(v,y)):w}else return u?C(b[y],p(v,y)):b[y]},set(b,M,y){y=o.xinValue(y);let E=M!==o.XIN_VALUE?p(v,M):v;if(c&&!d(E))throw new Error(`setting invalid path ${E}`);if(o.xinValue(r[E])!==y&&n.setByPath(l,E,y))s.touch(E);return!0}}),S=(v,u)=>{let b=typeof u==="function"?u:r[u];if(typeof b!=="function")throw new Error(`observe expects a function or path to a function, ${u} is neither`);return s.observe(v,b)},r=new Proxy(l,z("",!1)),f=new Proxy(l,z("",!0))});j("hv4Z8",function(t,i){L(t.exports,"settings",()=>e);let e={debug:!1,perf:!1}});j("5lOGz",function(t,i){L(t.exports,"observerShouldBeRemoved",()=>n),L(t.exports,"updates",()=>p),L(t.exports,"unobserve",()=>S),L(t.exports,"touch",()=>C),L(t.exports,"observe",()=>z);var e=x("5hOlm"),s=x("hv4Z8");let n=Symbol("observer should be removed"),o=[],a=[],l=!1,c,h;class d{constructor(r,f){let v=typeof f==="string"?`"${f}"`:`function ${f.name}`,u;if(typeof r==="string")this.test=(b)=>typeof b==="string"&&b!==""&&(r.startsWith(b)||b.startsWith(r)),u=`test = "${r}"`;else if(r instanceof RegExp)this.test=r.test.bind(r),u=`test = "${r.toString()}"`;else if(r instanceof Function)this.test=r,u=`test = function ${r.name}`;else throw new Error("expect listener test to be a string, RegExp, or test function");if(this.description=`${u}, ${v}`,typeof f==="function")this.callback=f;else throw new Error("expect callback to be a path or function");o.push(this)}}let p=async()=>{if(c===void 0)return;await c},g=()=>{if(s.settings.perf)console.time("xin async update");let r=[...a];for(let f of r)o.filter((v)=>{let u;try{u=v.test(f)}catch(b){throw new Error(`Listener ${v.description} threw "${b}" at "${f}"`)}if(u===n)return S(v),!1;return u}).forEach((v)=>{let u;try{u=v.callback(f)}catch(b){console.error(`Listener ${v.description} threw "${b}" handling "${f}"`)}if(u===n)S(v)});if(a.splice(0),l=!1,typeof h==="function")h();if(s.settings.perf)console.timeEnd("xin async update")},C=(r)=>{let f=typeof r==="string"?r:e.xinPath(r);if(f===void 0)throw console.error("touch was called on an invalid target",r),new Error("touch was called on an invalid target");if(l===!1)c=new Promise((v)=>{h=v}),l=setTimeout(g);if(a.find((v)=>f.startsWith(v))==null)a.push(f)},z=(r,f)=>{return new d(r,f)},S=(r)=>{let f=o.indexOf(r);if(f>-1)o.splice(f,1);else throw new Error("unobserve failed, listener not found")}});j("5hOlm",function(t,i){L(t.exports,"BOUND_CLASS",()=>s),L(t.exports,"BOUND_SELECTOR",()=>n),L(t.exports,"EVENT_CLASS",()=>o),L(t.exports,"EVENT_SELECTOR",()=>a),L(t.exports,"XIN_PATH",()=>l),L(t.exports,"XIN_VALUE",()=>c),L(t.exports,"xinPath",()=>h),L(t.exports,"xinValue",()=>d),L(t.exports,"elementToHandlers",()=>p),L(t.exports,"elementToBindings",()=>g),L(t.exports,"cloneWithBindings",()=>z),L(t.exports,"elementToItem",()=>S),L(t.exports,"getListItem",()=>r);var e=x("19FSF");let s="-xin-data",n=`.${s}`,o="-xin-event",a=`.${o}`,l="xinPath",c="xinValue",h=(f)=>{return f[l]};function d(f){return typeof f==="object"&&f!==null?f[c]||f:f}let p=new WeakMap,g=new WeakMap,C=(f)=>{return{eventBindings:p.get(f),dataBindings:g.get(f)}},z=(f)=>{let v=f.cloneNode();if(v instanceof Element){let u=g.get(f),b=p.get(f);if(u!=null)g.set(v,e.deepClone(u));if(b!=null)p.set(v,e.deepClone(b))}for(let u of f instanceof HTMLTemplateElement?f.content.childNodes:f.childNodes)if(u instanceof Element||u instanceof DocumentFragment)v.appendChild(z(u));else v.appendChild(u.cloneNode());return v},S=new WeakMap,r=(f)=>{let v=document.body.parentElement;while(f.parentElement!=null&&f.parentElement!==v){let u=S.get(f);if(u!=null)return u;f=f.parentElement}return!1}});j("19FSF",function(t,i){L(t.exports,"deepClone",()=>e);function e(s){if(s==null||typeof s!=="object")return s;if(Array.isArray(s))return s.map(e);let n={};for(let o in s){let a=s[o];if(s!=null&&typeof s==="object")n[o]=e(a);else n[o]=a}return n}});j("aMI8M",function(t,i){L(t.exports,"getByPath",()=>v),L(t.exports,"setByPath",()=>u);var e=x("5lDHe");let s=()=>new Date(parseInt("1000000000",36)+Date.now()).valueOf().toString(36).slice(1),n=0,o=()=>(parseInt("10000",36)+ ++n).toString(36).slice(-5),a=()=>s()+o(),l={},c={};function h(M){if(M==="")return[];if(Array.isArray(M))return M;else{let y=[];while(M.length>0){let E=M.search(/\[[^\]]+\]/);if(E===-1){y.push(M.split("."));break}else{let w=M.slice(0,E);if(M=M.slice(E),w!=="")y.push(w.split("."));if(E=M.indexOf("]")+1,y.push(M.slice(1,E-1)),M.slice(E,E+1)===".")E+=1;M=M.slice(E)}}return y}}let d=new WeakMap;function p(M,y){if(d.get(M)===void 0)d.set(M,{});if(d.get(M)[y]===void 0)d.get(M)[y]={};let E=d.get(M)[y];if(y==="_auto_")M.forEach((w,P)=>{if(w._auto_===void 0)w._auto_=a();E[w._auto_+""]=P});else M.forEach((w,P)=>{E[v(w,y)+""]=P});return E}function g(M,y){if(d.get(M)===void 0||d.get(M)[y]===void 0)return p(M,y);else return d.get(M)[y]}function C(M,y,E){E=E+"";let w=g(M,y)[E];if(w===void 0||v(M[w],y)+""!==E)w=p(M,y)[E];return w}function z(M,y,E){if(M[y]===void 0&&E!==void 0)M[y]=E;return M[y]}function S(M,y,E,w){let P=y!==""?C(M,y,E):E;if(w===l)return M.splice(P,1),d.delete(M),Symbol("deleted");else if(w===c){if(y===""&&M[P]===void 0)M[P]={}}else if(w!==void 0)if(P!==void 0)M[P]=w;else if(y!==""&&v(w,y)+""===E+"")M.push(w),P=M.length-1;else throw new Error(`byIdPath insert failed at [${y}=${E}]`);return M[P]}function r(M){if(!Array.isArray(M))throw e.makeError("setByPath failed: expected array, found",M)}function f(M){if(M==null||!(M instanceof Object))throw e.makeError("setByPath failed: expected Object, found",M)}function v(M,y){let E=h(y),w=M,P,_,D,N;for(P=0,_=E.length;w!==void 0&&P<_;P++){let V=E[P];if(Array.isArray(V))for(D=0,N=V.length;w!==void 0&&D<N;D++){let U=V[D];w=w[U]}else if(w.length===0){if(w=w[V.slice(1)],V[0]!=="=")return}else if(V.includes("=")){let[U,...J]=V.split("=");w=S(w,U,J.join("="))}else D=parseInt(V,10),w=w[D]}return w}function u(M,y,E){let w=M,P=h(y);while(w!=null&&P.length>0){let _=P.shift();if(typeof _==="string"){let D=_.indexOf("=");if(D>-1){if(D===0)f(w);else r(w);let N=_.slice(0,D),V=_.slice(D+1);if(w=S(w,N,V,P.length>0?c:E),P.length===0)return!0}else{r(w);let N=parseInt(_,10);if(P.length>0)w=w[N];else{if(E!==l){if(w[N]===E)return!1;w[N]=E}else w.splice(N,1);return!0}}}else if(Array.isArray(_)&&_.length>0){f(w);while(_.length>0){let D=_.shift();if(_.length>0||P.length>0)w=z(w,D,_.length>0?{}:[]);else{if(E!==l){if(w[D]===E)return!1;w[D]=E}else{if(!Object.prototype.hasOwnProperty.call(w,D))return!1;delete w[D]}return!0}}}else throw new Error(`setByPath failed, bad path ${y}`)}throw new Error(`setByPath(${M}, ${y}, ${E}) failed`)}function b(M,y){if(v(M,y)!==null)u(M,y,l)}});j("5lDHe",function(t,i){L(t.exports,"makeError",()=>s);let e=(n)=>{try{return JSON.stringify(n)}catch(o){return"{has circular references}"}},s=(...n)=>new Error(n.map(e).join(" "))});j("buKmK",function(t,i){L(t.exports,"bindings",()=>n);var e=x("2dgdI"),s=x("gbrAN");let n={value:{toDOM:s.setValue,fromDOM(o){return s.getValue(o)}},set:{toDOM:s.setValue},text:{toDOM(o,a){o.textContent=a}},enabled:{toDOM(o,a){o.disabled=!a}},disabled:{toDOM(o,a){o.disabled=Boolean(a)}},style:{toDOM(o,a){if(typeof a==="object")for(let l of Object.keys(a))o.style[l]=a[l];else if(typeof a==="string")o.setAttribute("style",a);else throw new Error("style binding expects either a string or object")}},list:{toDOM(o,a,l){e.getListBinding(o,l).update(a)}}}});j("2dgdI",function(t,i){L(t.exports,"getListBinding",()=>p);var e=x("hv4Z8"),s=x("gbrAN"),n=x("9nL7f"),o=x("eppu5"),a=x("5hOlm");let l=Symbol("list-binding"),c=16;function h(g,C){let z=[...g.querySelectorAll(a.BOUND_SELECTOR)];if(g.matches(a.BOUND_SELECTOR))z.unshift(g);for(let S of z){let r=a.elementToBindings.get(S);for(let f of r){if(f.path.startsWith("^"))f.path=`${C}${f.path.substring(1)}`;if(f.binding.toDOM!=null)f.binding.toDOM(S,o.xin[f.path])}}}class d{constructor(g,C={}){if(this._array=[],this.boundElement=g,this.itemToElement=new WeakMap,g.children.length!==1)throw new Error("ListBinding expects an element with exactly one child element");if(g.children[0]instanceof HTMLTemplateElement){let z=g.children[0];if(z.content.children.length!==1)throw new Error("ListBinding expects a template with exactly one child element");this.template=a.cloneWithBindings(z.content.children[0])}else this.template=g.children[0],this.template.remove();if(this.listTop=document.createElement("div"),this.listBottom=document.createElement("div"),this.boundElement.append(this.listTop),this.boundElement.append(this.listBottom),this.options=C,C.virtual!=null)s.resizeObserver.observe(this.boundElement),this._update=n.throttle(()=>{this.update(this._array,!0)},c),this.boundElement.addEventListener("scroll",this._update),this.boundElement.addEventListener("resize",this._update)}visibleSlice(){let{virtual:g,hiddenProp:C,visibleProp:z}=this.options,S=this._array;if(C!==void 0)S=S.filter((b)=>b[C]!==!0);if(z!==void 0)S=S.filter((b)=>b[z]===!0);let r=0,f=S.length-1,v=0,u=0;if(g!=null&&this.boundElement instanceof HTMLElement){let b=this.boundElement.offsetWidth,M=this.boundElement.offsetHeight,y=g.width!=null?Math.max(1,Math.floor(b/g.width)):1,E=Math.ceil(M/g.height)+1,w=Math.ceil(S.length/y),P=y*E,_=Math.floor(this.boundElement.scrollTop/g.height);if(_>w-E+1)_=Math.max(0,w-E+1);r=_*y,f=r+P-1,v=_*g.height,u=Math.max(w*g.height-M-v,0)}return{items:S,firstItem:r,lastItem:f,topBuffer:v,bottomBuffer:u}}update(g,C){if(g==null)g=[];this._array=g;let{hiddenProp:z,visibleProp:S}=this.options,r=a.xinPath(g),f=this.visibleSlice();this.boundElement.classList.toggle("-xin-empty-list",f.items.length===0);let v=this._previousSlice,{firstItem:u,lastItem:b,topBuffer:M,bottomBuffer:y}=f;if(z===void 0&&S===void 0&&C===!0&&v!=null&&u===v.firstItem&&b===v.lastItem)return;this._previousSlice=f;let E=0,w=0,P=0;for(let V of[...this.boundElement.children]){if(V===this.listTop||V===this.listBottom)continue;let U=a.elementToItem.get(V);if(U==null)V.remove();else{let J=f.items.indexOf(U);if(J<u||J>b)V.remove(),this.itemToElement.delete(U),a.elementToItem.delete(V),E++}}this.listTop.style.height=String(M)+"px",this.listBottom.style.height=String(y)+"px";let _=[],{idPath:D}=this.options;for(let V=u;V<=b;V++){let U=f.items[V];if(U===void 0)continue;let J=this.itemToElement.get(a.xinValue(U));if(J==null){if(P++,J=a.cloneWithBindings(this.template),typeof U==="object")this.itemToElement.set(a.xinValue(U),J),a.elementToItem.set(J,a.xinValue(U));if(this.boundElement.insertBefore(J,this.listBottom),D!=null){let J1=U[D],V2=`${r}[${D}=${J1}]`;h(J,V2)}else{let J1=`${r}[${V}]`;h(J,J1)}}_.push(J)}let N=null;for(let V of _){if(V.previousElementSibling!==N)if(w++,N?.nextElementSibling!=null)this.boundElement.insertBefore(V,N.nextElementSibling);else this.boundElement.insertBefore(V,this.listBottom);N=V}if(e.settings.perf)console.log(r,"updated",{removed:E,created:P,moved:w})}}let p=(g,C)=>{let z=g[l];if(z===void 0)z=new d(g,C),g[l]=z;return z}});j("gbrAN",function(t,i){L(t.exports,"dispatch",()=>s),L(t.exports,"setValue",()=>o),L(t.exports,"getValue",()=>a),L(t.exports,"resizeObserver",()=>c),L(t.exports,"appendContentToElement",()=>h);var e=x("5hOlm");let s=(d,p)=>{let g=new Event(p);d.dispatchEvent(g)},n=(d)=>{if(d instanceof HTMLInputElement)return d.type;else if(d instanceof HTMLSelectElement&&d.hasAttribute("multiple"))return"multi-select";else return"other"},o=(d,p)=>{switch(n(d)){case"radio":d.checked=d.value===p;break;case"checkbox":d.checked=!!p;break;case"date":d.valueAsDate=new Date(p);break;case"multi-select":for(let g of[...d.querySelectorAll("option")])g.selected=p[g.value];break;default:d.value=p}},a=(d)=>{switch(n(d)){case"radio":{let p=d.parentElement?.querySelector(`[name="${d.name}"]:checked`);return p!=null?p.value:null}case"checkbox":return d.checked;case"date":return d.valueAsDate?.toISOString();case"multi-select":return[...d.querySelectorAll("option")].reduce((p,g)=>{return p[g.value]=g.selected,p},{});default:return d.value}},{ResizeObserver:l}=globalThis,c=l!=null?new l((d)=>{for(let p of d){let g=p.target;s(g,"resize")}}):{observe(){},unobserve(){}},h=(d,p,g=!0)=>{if(d!=null&&p!=null)if(typeof p==="string")d.textContent=p;else if(Array.isArray(p))p.forEach((C)=>{d.append(C instanceof Node&&g?e.cloneWithBindings(C):C)});else if(p instanceof Node)d.append(g?e.cloneWithBindings(p):p);else throw new Error("expect text content or document node")}});j("9nL7f",function(t,i){L(t.exports,"debounce",()=>e),L(t.exports,"throttle",()=>s);let e=(n,o=250)=>{let a;return(...l)=>{if(a!==void 0)clearTimeout(a);a=setTimeout(()=>{n(...l)},o)}},s=(n,o=250)=>{let a,l=Date.now()-o,c=!1;return(...h)=>{if(clearTimeout(a),a=setTimeout(async()=>{n(...h),l=Date.now()},o),!c&&Date.now()-l>=o){c=!0;try{n(...h),l=Date.now()}finally{c=!1}}}}});j("5JLBr",function(t,i){L(t.exports,"camelToKabob",()=>e),L(t.exports,"kabobToCamel",()=>s);function e(n){return n.replace(/[A-Z]/g,(o)=>{return`-${o.toLocaleLowerCase()}`})}function s(n){return n.replace(/-([a-z])/g,(o,a)=>{return a.toLocaleUpperCase()})}});j("lGBgM",function(t,i){L(t.exports,"makeComponent",()=>c);var e=x("6Jaab"),s=x("aVpVG"),n=x("2okor"),o=x("9sLMf"),a=x("aNHSH");let l={};function c(h,d){let{type:p,styleSpec:g}=d(h,{Color:e.Color,Component:s.Component,elements:o.elements,svgElements:o.svgElements,mathML:o.mathML,varDefault:n.varDefault,vars:n.vars,xinProxy:a.xinProxy}),C={type:p,creator:p.elementCreator({tag:h,styleSpec:g})};return l[h]=C,C}});j("aNHSH",function(t,i){L(t.exports,"boxedProxy",()=>s),L(t.exports,"xinProxy",()=>o);var e=x("eppu5");function s(a){return Object.assign(e.boxed,a),e.boxed}let n=!1;function o(a,l=!1){if(l){if(!n)console.warn("xinProxy(..., true) is deprecated; use boxedProxy(...) instead"),n=!0;return s(a)}return Object.keys(a).forEach((c)=>{e.xin[c]=a[c]}),e.xin}});var p4=x("kCu8Y"),f4=x("buKmK"),v4=x("2okor"),g4=x("6Jaab"),m4=x("aVpVG"),b4=x("9sLMf"),d1=x("eppu5"),M3=x("5hOlm"),y3=x("9nL7f"),M4=(t=()=>!0)=>{let i=localStorage.getItem("xin-state");if(i!=null){let s=JSON.parse(i);for(let n of Object.keys(s).filter(t))if(d1.xin[n]!==void 0)Object.assign(d1.xin[n],s[n]);else d1.xin[n]=s[n]}let e=y3.debounce(()=>{let s={},n=M3.xinValue(d1.xin);for(let o of Object.keys(n).filter(t))s[o]=n[o];localStorage.setItem("xin-state",JSON.stringify(s)),console.log("xin state saved to localStorage")},500);d1.observe(t,e)},M3=x("5hOlm"),y4=x("lGBgM"),z4=x("drWRQ"),x4=x("hv4Z8"),y3=x("9nL7f"),d1=x("eppu5"),w4=x("5lOGz");x("3x0mh");var C4={},E4=x("aNHSH"),S4=x("kCu8Y").bind,T4=x("kCu8Y").on,z3=x("buKmK").bindings,A4=x("2okor").css,L4=x("2okor").invertLuminance,O4=x("2okor").darkMode,F4=x("2okor").initVars,m=x("2okor").vars,O=x("2okor").varDefault,x3=x("2okor").StyleSheet,s1=x("6Jaab").Color,F=x("aVpVG").Component,I=x("9sLMf").elements,K1=x("9sLMf").svgElements,H4=x("9sLMf").mathML,w3=x("5hOlm").getListItem,I4=x("5hOlm").xinPath,u1=x("5hOlm").xinValue,P4=x("lGBgM").makeComponent,q4=x("drWRQ").MoreMath,$4=x("hv4Z8").settings,C3=x("9nL7f").throttle,_4=x("9nL7f").debounce,X1=x("eppu5").xin,D4=x("eppu5").boxed,V4=x("eppu5").observe,j4=x("5lOGz").unobserve,W4=x("5lOGz").touch,G4=x("5lOGz").observerShouldBeRemoved,N4=x("5lOGz").updates,A1=x("aNHSH").xinProxy,E3=x("aNHSH").boxedProxy,U4=x("3x0mh").Blueprint,J4=x("3x0mh").blueprint,Q4=x("3x0mh").BlueprintLoader,K4=x("3x0mh").blueprintLoader,X4=x("3x0mh")["*"];/*!
# ab-test

`<xin-ab>` provides a simple method for implementing A|B-testing.

```js
const { AbTest } = xinjsui

function randomize() {
  const conditions = {
    testA: Math.random() < 0.5,
    testB: Math.random() < 0.5,
    testC: Math.random() < 0.5
  }

  AbTest.conditions = conditions

  preview.querySelector('pre').innerText = JSON.stringify(conditions, null, 2)
}

preview.querySelector('.randomize-conditions').addEventListener('click', randomize)

randomize()
```
```html
<xin-ab class="a" condition="testA">
  <p>testA</p>
</xin-ab>
<xin-ab class="not-a" not condition="testA">
  <p>not testA</p>
</xin-ab>
<xin-ab class="b" condition="testB">
  <p>testB</p>
</xin-ab>
<xin-ab class="not-b" not condition="testB">
  <p>not testB</p>
</xin-ab>
<xin-ab class="c" condition="testC">
  <p>testC</p>
</xin-ab>
<xin-ab class="not-c" not condition="testC">
  <p>not testC</p>
</xin-ab>
<pre>
</pre>
<button class="randomize-conditions">Randomize</button>
```
```css
.preview {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
}
.preview p {
  background: #44c;
  color: white;
  display: block;
  border-radius: 99px;
  padding: 4px 10px;
  margin: 0;
}

.preview xin-ab[not] p {
  background: red;
}
```

- Set `AbTest.conditions` to anything you like.
- Use `<xin-ab>` elements to display conditional content.
- `condition` attribute determines which value in `AbTest.conditions` controls the element
- `not` reverses the condition (so `<xin-ab not condition="foo">` will be visible if `conditions.foo` is `false`)
*/var{abTestConditions:Z1}=A1({abTestConditions:{}});class M1 extends F{static set conditions(t){Object.assign(Z1,t);for(let i of[...M1.instances])i.queueRender()}condition="";not=!1;static instances=new Set;constructor(){super();this.initAttributes("condition","not")}connectedCallback(){super.connectedCallback(),M1.instances.add(this)}disconnectedCallback(){super.disconnectedCallback(),M1.instances.delete(this)}render(){if(this.condition!==""&&(this.not?Z1[this.condition]!==!0:Z1[this.condition]===!0))this.toggleAttribute("hidden",!1);else this.toggleAttribute("hidden",!0)}}var Y4=M1.elementCreator({tag:"xin-ab"});/*!
# scriptTag & styleSheet

## scriptTag

If you need to load an old school (cjs) javascript or css library via cdn then use these two functions.

`xinjs-ui` uses this library to implement the `<xin-code>`, `<xin-lottie>`, and `<xin-map>`
elements.

`scriptTag()` and `styleSheet()` return promises that resolve `globalThis` when the module in question
has loaded and otherwise behave as much like `import()` as possible.

This example uses `scriptTag` and `styleSheet` to load [quilljs](https://quilljs.com) on-the-fly.

```js
const { elements } = xinjs
const { scriptTag, styleSheet } = xinjsui

const toolbarOptions = [
  [{ header: [1, 2, 3, 4, false] }],
  ['blockquote', 'code-block'],
  [{ 'align': [] }],
  ['bold', 'italic', 'strike'],
  ['link', 'image', 'video'],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
  [{ 'indent': '-1'}, { 'indent': '+1' }],
  ['clean']
]

;(async () => {
  await Promise.all([
    styleSheet('https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.core.css'),
    styleSheet('https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.snow.css'),
  ])

  const container = elements.div()
  const { Quill } = await scriptTag('https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.js')
  preview.append(container)

  const quill = new Quill(container, {
    debug: 'info',
    modules: {
      toolbar: toolbarOptions,
    },
    theme: 'snow',
  })
})()
```

Note that `scriptTag` will resolve `globalThis` so it behaves as much like async `import()`
as possible.

As an aside:

`<xin-lottie>` is implemented in such a way that if you've preloaded the module
(e.g. via a script tag or packaging) it won't load it again, which affords offline
use.

There's no point for `<xin-map>` since it won't work without connectivity anyway.

## styleSheet

styleSheet creates a `<link>` tag for a specified css file.

Using `styleSheet`:

    styleSheet('../path/to/style.css')

This is awaitable, if you care. The stylesheet `<link>` will only be inserted _once_.
*/var L1={};function K(t,i){if(L1[t]===void 0){if(i!==void 0){let s=globalThis[i];L1[t]=Promise.resolve({[i]:s})}let e=I.script({src:t});document.head.append(e),L1[t]=new Promise((s)=>{e.onload=()=>s(globalThis)})}return L1[t]}var R1={};function Y1(t){if(R1[t]===void 0){let i=I.link({rel:"stylesheet",type:"text/css",href:t});document.head.append(i),R1[t]=new Promise((e)=>{i.onload=e})}return R1[t]}var y1={xinjsUiColor:{p:["M976 0c4 0 8 2 11 5 4 4 7 7 11 11 0 0 21 21 21 21 3 3 5 7 5 11 0 0 0 928 0 928 0 4-2 8-5 11-4 4-7 7-11 11-5 5-9 9-14 14 0 0-7 7-7 7-3 3-7 5-11 5 0 0-928 0-928 0-4 0-8-2-11-5-4-4-7-7-11-11 0 0-21-21-21-21-3-3-5-7-5-11 0 0 0-928 0-928 0-4 2-8 5-11 4-4 7-7 11-11 5-5 9-9 14-14 0 0 7-7 7-7 3-3 7-5 11-5 0 0 928 0 928 0z","M182 131c13 5 8 2 16 9 0 0 102 102 102 102s91-91 91-91c9-9 9-9 11-11 8-7 13-8 23-9 0 0 4 0 4 0 13 5 8 2 16 9 12 12 12 32 0 44-2 2-2 2-11 11 0 0-91 91-91 91s102 102 102 102c12 12 12 32 0 44-12 12-32 12-44 0 0 0-102-102-102-102s-48 48-48 48c0 0-44 44-44 44-9 9-9 9-11 11-12 12-32 12-44 0-12-12-12-32 0-44 2-2 2-2 11-11 0 0 91-91 91-91s-102-102-102-102c-12-12-12-32 0-44 8-7 13-8 23-9 0 0 4 0 4 0z","M516 131c17 0 31 14 31 31 0 0 0 248 0 248 0 17-14 31-31 31-17 0-31-14-31-31 0 0 0-248 0-248 0-17 14-31 31-31z","M611 131c0 0 4 0 4 0 13 5 8 2 16 9 2 2 2 2 11 11 0 0 226 226 226 226 9 9 9 9 11 11 12 12 12 32 0 44-12 12-32 12-44 0 0 0-248-248-248-248-12-12-12-32 0-44 8-7 13-8 23-9z","M516 131c17 0 31 14 31 31 0 247 0 164 0 248 0 17-14 31-31 31-17 0-31-14-31-31 0 0 0-248 0-248 0-17 14-31 31-31z","M611 131c0 0 4 0 4 0 13 5 8 2 16 9 2 2 2 2 11 11 0 0 226 226 226 226 9 9 9 9 11 11 12 12 12 32 0 44-12 12-32 12-44 0 0 0-248-248-248-248-12-12-12-32 0-44 8-7 13-8 23-9z","M653 498c0 0 0 146 0 146 0 140-114 254-254 254-140 0-254-114-254-254 0 0 0-146 0-146s127 0 127 0c0 0 0 146 0 146 0 70 57 127 127 127 70 0 127-57 127-127 0 0 0-146 0-146s127 0 127 0z","M765 881c0 0 0-384 0-384s127 0 127 0c0 0 0 384 0 384s-127 0-127 0z","M720 995c-24-48-47-96-71-145-27 26-55 53-82 79 0-118 0-237 0-355 93 71 185 142 278 213-37 7-74 13-111 20 24 48 47 96 71 145-28 14-57 29-85 43 0 0 0 0 0 0z","M657 807c25 51 50 102 75 153 13-7 26-13 38-20-25-51-50-102-75-153 29-5 58-10 86-15-63-48-126-96-188-144 0 80 0 160 0 240 21-20 42-41 64-61 0 0 0 0 0 0z"],c:["rgb(64, 64, 64)","rgb(255, 28, 36)","rgb(8, 131, 87)","rgb(8, 131, 87)","rgb(140, 198, 63)","rgb(61, 168, 244)","rgb(255, 147, 29)","rgb(251, 237, 33)","rgb(255, 255, 255)","rgb(0, 0, 0)"]},xinjsUi:{p:["M976 0c4 0 8 2 11 5 4 4 7 7 11 11 0 0 21 21 21 21 3 3 5 7 5 11 0 0 0 928 0 928 0 4-2 8-5 11-4 4-7 7-11 11-5 5-9 9-14 14 0 0-7 7-7 7-3 3-7 5-11 5 0 0-928 0-928 0-4 0-8-2-11-5-4-4-7-7-11-11 0 0-21-21-21-21-3-3-5-7-5-11 0 0 0-928 0-928 0-4 2-8 5-11 4-4 7-7 11-11 5-5 9-9 14-14 0 0 7-7 7-7 3-3 7-5 11-5 0 0 928 0 928 0z","M182 131c13 5 8 2 16 9 0 0 102 102 102 102s91-91 91-91c9-9 9-9 11-11 8-7 13-8 23-9 0 0 4 0 4 0 13 5 8 2 16 9 12 12 12 32 0 44-2 2-2 2-11 11 0 0-91 91-91 91s102 102 102 102c12 12 12 32 0 44-12 12-32 12-44 0 0 0-102-102-102-102s-48 48-48 48c0 0-44 44-44 44-9 9-9 9-11 11-12 12-32 12-44 0-12-12-12-32 0-44 2-2 2-2 11-11 0 0 91-91 91-91s-102-102-102-102c-12-12-12-32 0-44 8-7 13-8 23-9 0 0 4 0 4 0z","M516 131c17 0 31 14 31 31 0 0 0 248 0 248 0 17-14 31-31 31-17 0-31-14-31-31 0 0 0-248 0-248 0-17 14-31 31-31z","M516 131c17 0 31 14 31 31 0 247 0 164 0 248 0 17-14 31-31 31-17 0-31-14-31-31 0 0 0-248 0-248 0-17 14-31 31-31z","M611 131c0 0 4 0 4 0 13 5 8 2 16 9 2 2 2 2 11 11 0 0 226 226 226 226 9 9 9 9 11 11 12 12 12 32 0 44-12 12-32 12-44 0 0 0-248-248-248-248-12-12-12-32 0-44 8-7 13-8 23-9z","M182 131c13 5 8 2 16 9 0 0 102 102 102 102s91-91 91-91c9-9 9-9 11-11 8-7 13-8 23-9 0 0 4 0 4 0 13 5 8 2 16 9 12 12 12 32 0 44-2 2-2 2-11 11 0 0-91 91-91 91s102 102 102 102c12 12 12 32 0 44-12 12-32 12-44 0 0 0-102-102-102-102s-48 48-48 48c0 0-44 44-44 44-9 9-9 9-11 11-12 12-32 12-44 0-12-12-12-32 0-44 2-2 2-2 11-11 0 0 91-91 91-91s-102-102-102-102c-12-12-12-32 0-44 8-7 13-8 23-9 0 0 4 0 4 0zM516 131c17 0 31 14 31 31 0 0 0 248 0 248 0 17-14 31-31 31-17 0-31-14-31-31 0 0 0-248 0-248 0-17 14-31 31-31zM611 131c0 0 4 0 4 0 13 5 8 2 16 9 2 2 2 2 11 11 0 0 226 226 226 226 9 9 9 9 11 11 12 12 12 32 0 44-12 12-32 12-44 0 0 0-248-248-248-248-12-12-12-32 0-44 8-7 13-8 23-9zM516 131c17 0 31 14 31 31 0 247 0 164 0 248 0 17-14 31-31 31-17 0-31-14-31-31 0 0 0-248 0-248 0-17 14-31 31-31zM611 131c0 0 4 0 4 0 13 5 8 2 16 9 2 2 2 2 11 11 0 0 226 226 226 226 9 9 9 9 11 11 12 12 12 32 0 44-12 12-32 12-44 0 0 0-248-248-248-248-12-12-12-32 0-44 8-7 13-8 23-9z","M653 498c0 0 0 146 0 146 0 140-114 254-254 254-140 0-254-114-254-254 0 0 0-146 0-146s127 0 127 0c0 0 0 146 0 146 0 70 57 127 127 127 70 0 127-57 127-127 0 0 0-146 0-146s127 0 127 0z","M765 881c0 0 0-384 0-384s127 0 127 0c0 0 0 384 0 384s-127 0-127 0z","M720 995c-24-48-47-96-71-145-27 26-55 53-82 79 0-118 0-237 0-355 93 71 185 142 278 213-37 7-74 13-111 20 24 48 47 96 71 145-28 14-57 29-85 43 0 0 0 0 0 0z","M657 807c25 51 50 102 75 153 13-7 26-13 38-20-25-51-50-102-75-153 29-5 58-10 86-15-63-48-126-96-188-144 0 80 0 160 0 240 21-20 42-41 64-61 0 0 0 0 0 0z"],c:["rgb(237, 242, 221)","rgb(8, 131, 87)","rgb(8, 131, 87)","rgb(8, 131, 87)","rgb(8, 131, 87)","rgb(8, 131, 87)","rgb(8, 131, 87)","rgb(8, 131, 87)","rgb(236, 243, 221)","rgb(8, 131, 87)"]},cmy:{p:["M302 442c-11-27-17-56-17-86 0-126 103-229 229-229s229 103 229 229c0 31-6 60-17 87-12-2-24-3-37-3-72 0-136 33-178 85-42-52-106-85-178-85-11 0-21 1-32 2z","M478 582c-80-13-146-67-175-140 10-1 21-2 32-2 72 0 136 33 178 85-14 17-26 37-34 58z","M512 813c-42 52-106 85-178 85-126 0-229-103-229-229 0-116 86-211 197-227 30 73 96 127 175 140-11 27-17 56-17 87 0 55 19 105 51 144z","M547 582c-10 1-21 2-32 2-13 0-25-1-37-3 9-21 20-40 34-58 14 18 26 37 35 58 0 0 0 0 0 0z","M478 582c-11 27-17 56-17 87 0 55 19 105 51 144 32-39 51-90 51-144 0-30-6-59-17-86-10 1-21 2-32 2-13 0-25-1-37-3z","M547 582c82-11 150-66 180-140-12-2-24-3-37-3-72 0-136 33-178 85 14 18 26 37 35 58 0 0 0 0 0 0z","M512 813c42 52 106 85 178 85 126 0 229-103 229-229 0-114-83-208-192-226-30 74-98 129-180 140 11 27 17 56 17 86 0 55-19 105-51 144 0 0 0 0 0 0z"],c:["rgb(86, 206, 255)","rgb(20, 248, 0)","rgb(249, 255, 44)","rgb(0, 0, 0)","rgb(252, 0, 0)","rgb(1, 6, 255)","rgb(241, 76, 255)"]},rgb:{p:["M302 442c-11-27-17-56-17-86 0-126 103-229 229-229s229 103 229 229c0 31-6 60-17 87-12-2-24-3-37-3-72 0-136 33-178 85-42-52-106-85-178-85-11 0-21 1-32 2z","M478 582c-80-13-146-67-175-140 10-1 21-2 32-2 72 0 136 33 178 85-14 17-26 37-34 58z","M512 813c-42 52-106 85-178 85-126 0-229-103-229-229 0-116 86-211 197-227 30 73 96 127 175 140-11 27-17 56-17 87 0 55 19 105 51 144z","M547 582c-10 1-21 2-32 2-13 0-25-1-37-3 9-21 20-40 34-58 14 18 26 37 35 58 0 0 0 0 0 0z","M478 582c-11 27-17 56-17 87 0 55 19 105 51 144 32-39 51-90 51-144 0-30-6-59-17-86-10 1-21 2-32 2-13 0-25-1-37-3z","M547 582c82-11 150-66 180-140-12-2-24-3-37-3-72 0-136 33-178 85 14 18 26 37 35 58 0 0 0 0 0 0z","M512 813c42 52 106 85 178 85 126 0 229-103 229-229 0-114-83-208-192-226-30 74-98 129-180 140 11 27 17 56 17 86 0 55-19 105-51 144 0 0 0 0 0 0z"],c:["rgb(248, 14, 0)","rgb(253, 0, 255)","rgb(44, 131, 255)","rgb(255, 255, 255)","rgb(0, 219, 255)","rgb(250, 255, 0)","rgb(0, 204, 3)"]},xinjsColor:{p:["M976 0c4 0 8 2 11 5 4 4 7 7 11 11 0 0 21 21 21 21 3 3 5 7 5 11 0 0 0 928 0 928 0 4-2 8-5 11-4 4-7 7-11 11-5 5-9 9-14 14 0 0-7 7-7 7-3 3-7 5-11 5 0 0-928 0-928 0-4 0-8-2-11-5-4-4-7-7-11-11 0 0-21-21-21-21-3-3-5-7-5-11 0 0 0-928 0-928 0-4 2-8 5-11 4-4 7-7 11-11 5-5 9-9 14-14 0 0 7-7 7-7 3-3 7-5 11-5 0 0 928 0 928 0z","M125 308c8 3 5 1 10 5 0 0 65 65 65 65s58-58 58-58c6-6 6-6 7-7 5-5 8-5 15-5 0 0 3 0 3 0 8 3 5 1 10 5 8 8 8 20 0 28-1 1-1 1-7 7 0 0-58 58-58 58s65 65 65 65c8 8 8 20 0 28-8 8-20 8-28 0 0 0-65-65-65-65s-30 30-30 30c0 0-28 28-28 28-6 6-6 6-7 7-8 8-20 8-28 0-8-8-8-20 0-28 1-1 1-1 7-7 0 0 58-58 58-58s-65-65-65-65c-8-8-8-20 0-28 5-5 8-5 15-5 0 0 3 0 3 0z","M337 307c11 0 20 9 20 20 0 0 0 157 0 157 0 11-9 20-20 20-11 0-20-9-20-20 0 0 0-157 0-157 0-11 9-20 20-20z","M337 307c11 0 20 9 20 20 0 156 0 104 0 157 0 11-9 20-20 20-11 0-20-9-20-20 0 0 0-157 0-157 0-11 9-20 20-20z","M660 464c11 0 20 9 20 20 0 0 0 216 0 216 0 11-9 20-20 20s-20-9-20-20c0 0 0-216 0-216 0-11 9-20 20-20z","M396 308c0 0 3 0 3 0 8 3 5 1 10 5 1 1 1 1 7 7 0 0 143 143 143 143 6 6 6 6 7 7 8 8 8 20 0 28-8 8-20 8-28 0 0 0-157-157-157-157-8-8-8-20 0-28 5-5 8-5 15-5z","M279 523c0 0 3 0 3 0 8 3 5 1 10 5 8 8 8 20 0 28-1 1-2 2-3 3 0 0-38 38-38 38s-1 1-1 1c0 0-21 21-21 21s-2 2-2 2c0 0 65 65 65 65 8 8 8 20 0 28-8 8-20 8-28 0-1-1-1-1-7-7 0 0-58-58-58-58s-26 26-26 26c-3 3-7 7-10 10 0 0-28 28-28 28-8 8-20 8-28 0-8-8-8-20 0-28 0 0 65-65 65-65s-58-58-58-58c-2-2-4-4-6-6 0 0-0-0-0-0-8-8-8-20 0-28 5-5 8-5 15-5 0 0 3 0 3 0 8 3 5 1 10 5 0 0 65 65 65 65 22-22 43-43 65-65 5-5 8-5 15-5z","M337 523c11 0 20 9 20 20 0 0 0 157 0 157 0 11-9 20-20 20-11 0-20-9-20-20 0 0 0-157 0-157 0-11 9-20 20-20z","M553 523c0 0 3 0 3 0 8 3 5 1 10 5 8 8 8 20 0 28-1 1-1 1-7 7-50 50-100 100-150 150-8 8-20 8-28 0-8-8-8-20 0-28 1-1 2-2 3-3 51-52 103-103 154-154 5-5 8-5 15-5z","M337 523c11 0 20 9 20 20 0 0 0 157 0 157 0 11-9 20-20 20-11 0-20-9-20-20 0 0 0-157 0-157 0-11 9-20 20-20z","M553 523c0 0 3 0 3 0 8 3 5 1 10 5 8 8 8 20 0 28-1 1-1 1-7 7-50 50-100 100-150 150-8 8-20 8-28 0-8-8-8-20 0-28 1-1 2-2 3-3 51-52 103-103 154-154 5-5 8-5 15-5z","M689 307c11 0 20 9 20 20 0 0 0 137 0 137 0 5-2 10-6 14 0 0-20 20-20 20-4 4-9 6-14 6 0 0-59 0-59 0-11 0-20-9-20-20 0-11 9-20 20-20 0 0 51 0 51 0s8-8 8-8c0 0 0-129 0-129 0-11 9-20 20-20z","M905 464c11 0 20 9 20 20 0 11-9 20-20 20 0 0-157 0-157 0-11 0-20-9-20-20 0-11 9-20 20-20 0 0 157 0 157 0z","M905 533c11 0 20 9 20 20 0 11-9 20-20 20 0 0-157 0-157 0-11 0-20-9-20-20 0-11 9-20 20-20 0 0 157 0 157 0z","M905 395c11 0 20 9 20 20 0 11-9 20-20 20 0 0-157 0-157 0-11 0-20-9-20-20 0-11 9-20 20-20 0 0 157 0 157 0z","M906 308c0 0 3 0 3 0 8 3 5 1 10 5 8 8 8 20 0 28 0 0-20 20-20 20-4 4-9 6-14 6 0 0-137 0-137 0-11 0-20-9-20-20s9-20 20-20c0 0 129 0 129 0s14-14 14-14c5-5 8-5 15-5z","M905 601c11 0 20 9 20 20 0 0 0 59 0 59 0 5-2 10-6 14 0 0-20 20-20 20-4 4-9 6-14 6 0 0-137 0-137 0-11 0-20-9-20-20 0 0 0-78 0-78 0-11 9-20 20-20 0 0 157 0 157 0zM885 640c0 0-118 0-118 0s0 39 0 39c0 0 109 0 109 0s8-8 8-8c0 0 0-31 0-31z"],c:["rgb(237, 243, 221)","rgb(8, 131, 88)","rgb(8, 131, 88)","rgb(8, 131, 88)","rgb(155, 205, 188)","rgb(8, 131, 88)","rgb(155, 205, 188)","rgb(8, 131, 88)","rgb(8, 131, 88)","rgb(155, 205, 188)","rgb(155, 205, 188)","rgb(8, 131, 88)","rgb(8, 131, 88)","rgb(155, 205, 188)","rgb(8, 131, 88)","rgb(8, 131, 88)","rgb(155, 205, 188)"]},xinColor:{p:["M976 0c4 0 8 2 11 5 4 4 7 7 11 11l21 21c3 3 5 7 5 11v928c0 4-2 8-5 11-4 4-7 7-11 11-5 5-9 9-14 14l-7 7c-3 3-7 5-11 5h-928c-4 0-8-2-11-5-4-4-7-7-11-11l-21-21c-3-3-5-7-5-11v-928c0-4 2-8 5-11 4-4 7-7 11-11 5-5 9-9 14-14l7-7c3-3 7-5 11-5h928z","M589 862c13 13 34 13 48 0l104-104 141-141 17-17 7-7c13-13 13-34-0-48-13-13-34-13-48-0l-269 269c-13 13-13 34 0 48zM600 851c-7-7-7-18-0-25l0-0 269-269c7-7 18-7 25 0 7 7 7 18 0 25l-0 0-11 11-19 19-162 162-53 53-24 24c-7 7-18 7-25-0z","M512 871c19 0 34-15 34-34v-270c0-19-15-34-34-34-19 0-34 15-34 34v270c0 19 15 34 34 34zM512 855c-10 0-17-8-18-17l-0-1v-270c0-10 8-18 18-18 10 0 17 8 18 17l0 1 0 37-0 121-0 111c0 10-8 18-18 18z","M436 862c13-13 13-34 0-48l-112-112 112-112c13-13 13-34 0-48-13-13-34-13-48 0l-112 112-110-110c-13-13-34-13-48 0-13 13-13 34-1 47l1 1 110 110-110 110c-13 13-13 34 0 48 13 13 34 13 48 0l110-110 112 112c13 13 34 13 48 0zM425 851c-7 7-18 7-25 0l-0-0-123-123-121 121c-7 7-18 7-25-0-7-7-7-18-0-25l0-0 121-121-121-121c-7-7-7-18 0-25 7-7 18-7 25-0l0 0 121 121 123-123c7-7 18-7 25 0 7 7 7 18 0 25l-0 0-123 123 123 123c7 7 7 18 0 25l-0 0z","M589 170c13-13 34-13 48-0 190 190 205 205 269 269 13 13 13 34-0 48-13 13-34 13-48 0l-269-269c-13-13-13-34 0-48z","M512 158c19 0 34 15 34 34 0 269 0 179 0 270 0 19-15 34-34 34-19 0-34-15-34-34v-270c0-19 15-34 34-34z","M388 168c13-13 34-13 48 0 13 13 13 34 0 48l-112 112 112 112c13 13 13 34 0 48-13 13-34 13-48 0l-112-112-110 110c-13 13-34 13-48-0-13-13-13-34-1-47l1-1 110-110-110-110c-13-13-13-34 0-48 13-13 34-13 48-0l110 110 112-112z"],c:["rgb(9, 131, 88)","rgb(237, 243, 221)","rgb(237, 243, 221)","rgb(237, 243, 221)","rgb(237, 243, 221)","rgb(237, 243, 221)","rgb(237, 243, 221)"]},sortDescending:"M723 469c-256 0-179 0-435 0-24 0-43 19-43 43s19 43 43 43c256 0 179 0 435 0 24 0 43-19 43-43s-19-43-43-43zM603 725c-256 0 61 0-195 0-24 0-43 19-43 43s19 43 43 43c256 0-61 0 195 0 24 0 43-19 43-43s-19-43-43-43zM856 213c-256 0-432 0-688 0-24 0-43 19-43 43s19 43 43 43c256 0 432 0 688 0 24 0 43-19 43-43s-19-43-43-43z",sortAscending:"M301 555c256 0 179 0 435 0 24 0 43-19 43-43s-19-43-43-43c-256 0-179 0-435 0-24 0-43 19-43 43s19 43 43 43zM421 299c256 0-61 0 195 0 24 0 43-19 43-43s-19-43-43-43c-256 0 61 0-195 0-24 0-43 19-43 43s19 43 43 43zM168 811c256 0 432 0 688 0 24 0 43-19 43-43s-19-43-43-43c-256 0-432 0-688 0-24 0-43 19-43 43s19 43 43 43z",sidebar:"M213 85c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-597c0-35-14-67-38-90s-55-38-90-38zM427 853v-683h384c12 0 22 5 30 13s13 18 13 30v597c0 12-5 22-13 30s-18 13-30 13zM341 171v683h-128c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13z",calendar:"M299 85v43h-85c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-597c0-35-14-67-38-90s-55-38-90-38h-85v-43c0-24-19-43-43-43s-43 19-43 43v43h-256v-43c0-24-19-43-43-43s-43 19-43 43zM853 384h-683v-128c0-12 5-22 13-30s18-13 30-13h85v43c0 24 19 43 43 43s43-19 43-43v-43h256v43c0 24 19 43 43 43s43-19 43-43v-43h85c12 0 22 5 30 13s13 18 13 30zM171 469h683v384c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30z",editDoc:"M469 128h-299c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-299c0-24-19-43-43-43s-43 19-43 43v299c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h299c24 0 43-19 43-43s-19-43-43-43zM759 77l-405 405c-5 5-9 12-11 20l-43 171c-2 6-2 14 0 21 6 23 29 37 52 31l171-43c7-2 14-6 20-11l405-405c26-26 39-60 39-94s-13-68-39-94-60-39-94-39-68 13-94 39zM819 137c9-9 22-14 34-14s24 5 34 14 14 22 14 34-5 24-14 34l-397 397-90 23 23-90z",edit:"M695 98l-576 576c-5 5-9 11-11 19l-64 235c-2 7-2 15 0 22 6 23 30 36 52 30l235-64c7-2 13-6 19-11l576-576c32-32 48-74 48-115s-16-84-48-115-74-48-115-48-84 16-115 48zM755 158c15-15 35-23 55-23s40 8 55 23 23 35 23 55-8 40-23 55l-568 568-152 41 41-152z",web:"M723 469c-9-115-47-228-114-329 67 17 127 53 174 100 60 60 100 140 110 229zM609 884c63-95 104-207 114-329h171c-10 89-50 169-110 229-47 47-107 83-174 100zM301 555c9 115 47 228 114 329-67-17-127-53-174-100-60-60-100-140-110-229zM415 140c-63 95-104 207-114 329h-171c10-89 50-169 110-229 48-47 107-83 174-100zM512 43c0 0 0 0 0 0-130 0-247 53-332 137-85 85-137 202-137 332s53 247 137 332c85 85 202 137 332 137 0 0 0 0 0 0 130-0 247-53 332-137 85-85 137-202 137-332s-53-247-137-332c-85-85-202-137-332-137zM638 555c-11 119-56 229-126 318-74-95-115-206-126-318zM512 151c74 95 115 206 126 318h-251c11-119 56-229 126-318z",info:"M981 512c0-130-53-247-137-332s-202-137-332-137-247 53-332 137-137 202-137 332 53 247 137 332 202 137 332 137 247-53 332-137 137-202 137-332zM896 512c0 106-43 202-112 272s-165 112-272 112-202-43-272-112-112-165-112-272 43-202 112-272 165-112 272-112 202 43 272 112 112 165 112 272zM555 683v-171c0-24-19-43-43-43s-43 19-43 43v171c0 24 19 43 43 43s43-19 43-43zM512 384c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43z",loading:"M469 85v171c0 24 19 43 43 43s43-19 43-43v-171c0-24-19-43-43-43s-43 19-43 43zM469 768v171c0 24 19 43 43 43s43-19 43-43v-171c0-24-19-43-43-43s-43 19-43 43zM180 241l121 121c17 17 44 17 60 0s17-44 0-60l-121-121c-17-17-44-17-60 0s-17 44 0 60zM663 723l121 121c17 17 44 17 60 0s17-44 0-60l-121-121c-17-17-44-17-60 0s-17 44 0 60zM85 555h171c24 0 43-19 43-43s-19-43-43-43h-171c-24 0-43 19-43 43s19 43 43 43zM768 555h171c24 0 43-19 43-43s-19-43-43-43h-171c-24 0-43 19-43 43s19 43 43 43zM241 844l121-121c17-17 17-44 0-60s-44-17-60 0l-121 121c-17 17-17 44 0 60s44 17 60 0zM723 361l121-121c17-17 17-44 0-60s-44-17-60 0l-121 121c-17 17-17 44 0 60s44 17 60 0z",mail:"M128 338l360 252c15 10 34 10 49 0l360-252v430c0 12-5 22-13 30s-18 13-30 13h-683c-12 0-22-5-30-13s-13-18-13-30zM43 255c0 0 0 1 0 1v511c0 35 15 67 38 90s55 38 90 38h683c35 0 67-15 90-38s38-55 38-90v-511c0-0 0-1 0-1-0-35-15-67-38-90-23-23-55-38-90-38h-683c-35 0-67 15-90 38-23 23-37 55-38 90zM891 237l-379 266-379-266c2-4 5-8 8-11 8-8 19-13 30-13h683c12 0 22 5 30 13 3 3 6 7 8 11z",resize:"M175 102l271 271c20 20 20 52 0 72s-52 20-72 0l-271-271v184c0 28-23 51-51 51s-51-23-51-51v-307c0-7 1-14 4-20s6-12 11-17c0-0 0-0 0-0 5-5 10-8 17-11 6-3 13-4 20-4h307c28 0 51 23 51 51s-23 51-51 51h-184zM849 922l-271-271c-20-20-20-52 0-72s52-20 72 0l271 271v-184c0-28 23-51 51-51s51 23 51 51v307c0 28-23 51-51 51h-307c-28 0-51-23-51-51s23-51 51-51h184z",menu:"M128 555h768c24 0 43-19 43-43s-19-43-43-43h-768c-24 0-43 19-43 43s19 43 43 43zM128 299h768c24 0 43-19 43-43s-19-43-43-43h-768c-24 0-43 19-43 43s19 43 43 43zM128 811h768c24 0 43-19 43-43s-19-43-43-43h-768c-24 0-43 19-43 43s19 43 43 43z",message:"M939 640v-427c0-35-14-67-38-90s-55-38-90-38h-597c-35 0-67 14-90 38s-38 55-38 90v683c0 11 4 22 13 30 17 17 44 17 60 0l158-158h494c35 0 67-14 90-38s38-55 38-90zM853 640c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22 5-30 13l-98 98v-580c0-12 5-22 13-30s18-13 30-13h597c12 0 22 5 30 13s13 18 13 30z",blog:{p:["M848 517c0-23 19-42 42-43l1-0c23 0 42 19 43 42l0 1v128c0 35-14 67-37 90l-1 1c-23 23-55 37-89 38l-1 0h-494l-158 158c-17 17-44 17-60 0-8-8-12-19-12-29l-0-1v-683c0-35 14-67 38-90 23-23 55-37 89-38l1-0h299c24 0 43 19 43 43 0 23-19 42-42 43l-1 0h-299c-12 0-22 5-30 12l-0 0c-8 8-12 18-12 29l-0 1v580l98-98c8-8 18-12 29-12l1-0h512c12 0 22-5 30-13 8-8 12-18 12-29l0-1v-128zM797 39l-352 352c-5 5-9 12-11 20l-43 171c-2 6-2 14 0 21 6 23 29 37 52 31l171-43c7-2 14-6 20-11l352-352c26-26 39-60 39-94s-13-68-39-94c-26-26-60-39-94-39s-68 13-94 39zM857 99c9-9 22-14 34-14s24 5 34 14c9 9 14 22 14 34s-5 24-14 34l-344 344-90 23 23-90 344-344z","M292 251h163c24 0 43 19 43 43s-19 43-43 43h-163c-24 0-43-19-43-43s19-43 43-43z","M292 407h67c24 0 43 19 43 43s-19 43-43 43h-67c-24 0-43-19-43-43s19-43 43-43z"]},phone:"M981 722c1-30-10-60-29-83-20-24-48-41-82-46-34-4-72-13-110-28-18-7-38-9-57-7-28 3-56 15-78 36l-31 31c-76-48-143-114-196-196l31-31c14-14 24-31 30-49 9-27 9-57-2-86-12-32-22-70-27-111-4-30-19-57-41-77-23-21-54-33-86-33h-128c-4 0-8 0-12 1-35 3-66 20-87 45s-32 58-29 94c13 131 58 266 137 388 64 103 156 197 269 269 110 72 243 122 388 138 4 0 8 1 12 1 35-0 67-15 90-38s37-55 37-90zM896 722v128c0 12-5 23-12 30s-18 13-30 13c-134-14-254-59-353-124-104-66-186-151-243-243-72-112-113-234-125-351-1-11 3-22 10-31s17-14 29-15l132-0c12-0 22 4 29 11 7 7 12 16 14 26 6 46 17 90 32 129 3 9 3 19 0 28-2 6-6 12-10 17l-54 54c-14 14-16 35-7 51 68 119 164 211 272 272 17 9 38 6 51-7l54-54c7-7 16-11 26-12 6-1 13 0 20 3 44 16 88 27 129 32 10 1 20 7 26 15 6 8 10 18 10 29z",pieChart:"M866 661c-41 98-118 169-209 206s-196 39-294-2-169-118-206-209-39-196 2-294c40-94 113-165 200-202 22-9 31-35 22-56s-35-31-56-22c-106 46-196 132-245 247-50 119-48 248-3 359s133 205 252 256 248 48 359 3 205-133 256-252c9-22-1-47-23-56s-47 1-56 23zM894 469h-339v-339c89 10 169 50 229 110s100 140 110 229zM981 512c0-130-53-247-137-332s-202-137-332-137c-24 0-43 19-43 43v427c0 24 19 43 43 43h427c24 0 43-19 43-43z",search:"M684 677c-1 1-3 2-4 4s-3 3-4 4c-54 52-127 84-207 84-82 0-157-33-211-87s-87-129-87-211 33-157 87-211 129-87 211-87 157 33 211 87 87 129 87 211c0 80-32 153-84 207zM926 866l-157-157c53-66 84-149 84-240 0-106-43-202-112-272s-166-112-272-112-202 43-272 112-112 166-112 272 43 202 112 272 166 112 272 112c91 0 174-31 240-84l157 157c17 17 44 17 60 0s17-44 0-60z",send:"M980 97c2-6 2-13 1-20-1-5-3-10-6-14-3-4-6-8-10-11-5-4-11-6-16-8s-12-1-18-0c-2 0-4 1-5 1l-1 0-852 298c-11 4-20 12-25 23-10 22 0 47 22 56l369 164 164 369c5 10 13 19 25 23 22 8 47-4 54-26l298-852c0-1 1-2 1-3zM460 504l-259-115 575-201zM837 248l-201 575-115-259z",server:"M171 43c-35 0-67 14-90 38s-38 55-38 90v171c0 35 14 67 38 90s55 38 90 38h683c35 0 67-14 90-38s38-55 38-90v-171c0-35-14-67-38-90s-55-38-90-38zM171 128h683c12 0 22 5 30 13s13 18 13 30v171c0 12-5 22-13 30s-18 13-30 13h-683c-12 0-22-5-30-13s-13-18-13-30v-171c0-12 5-22 13-30s18-13 30-13zM171 555c-35 0-67 14-90 38s-38 55-38 90v171c0 35 14 67 38 90s55 38 90 38h683c35 0 67-14 90-38s38-55 38-90v-171c0-35-14-67-38-90s-55-38-90-38zM171 640h683c12 0 22 5 30 13s13 18 13 30v171c0 12-5 22-13 30s-18 13-30 13h-683c-12 0-22-5-30-13s-13-18-13-30v-171c0-12 5-22 13-30s18-13 30-13zM256 299c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43zM256 811c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43z",graphUp:"M725 299h153l-302 302-183-183c-17-17-44-17-60 0l-320 320c-17 17-17 44 0 60s44 17 60 0l290-290 183 183c17 17 44 17 60 0l333-333v153c0 24 19 43 43 43s43-19 43-43v-256c0-6-1-11-3-16s-5-10-9-14c-0-0-0-0-0-0-4-4-9-7-14-9-5-2-11-3-16-3h-256c-24 0-43 19-43 43s19 43 43 43z",copy:"M469 341c-35 0-67 14-90 38s-38 55-38 90v384c0 35 14 67 38 90s55 38 90 38h384c35 0 67-14 90-38s38-55 38-90v-384c0-35-14-67-38-90s-55-38-90-38zM469 427h384c12 0 22 5 30 13s13 18 13 30v384c0 12-5 22-13 30s-18 13-30 13h-384c-12 0-22-5-30-13s-13-18-13-30v-384c0-12 5-22 13-30s18-13 30-13zM213 597h-43c-12 0-22-5-30-13s-13-18-13-30v-384c0-12 5-22 13-30s18-13 30-13h384c12 0 22 5 30 13s13 18 13 30v43c0 24 19 43 43 43s43-19 43-43v-43c0-35-14-67-38-90s-55-38-90-38h-384c-35 0-67 14-90 38s-38 55-38 90v384c0 35 14 67 38 90s55 38 90 38h43c24 0 43-19 43-43s-19-43-43-43z",alignCenter:"M128 128h768v86h-768v-86zM298 298h428v86h-428v-86zM128 554v-84h768v84h-768zM128 896v-86h768v86h-768zM298 640h428v86h-428v-86z",alignLeft:"M128 128h768v86h-768v-86zM128 896v-86h768v86h-768zM128 554v-84h768v84h-768zM640 298v86h-512v-86h512zM640 640v86h-512v-86h512z",alignRight:"M128 128h768v86h-768v-86zM384 384v-86h512v86h-512zM128 554v-84h768v84h-768zM384 726v-86h512v86h-512zM128 896v-86h768v86h-768z",fontBold:"M576 662q28 0 46-19t18-45-18-45-46-19h-150v128h150zM426 278v128h128q26 0 45-19t19-45-19-45-45-19h-128zM666 460q92 42 92 146 0 68-45 115t-113 47h-302v-598h268q72 0 121 50t49 122-70 118z",blockOutdent:"M470 554v-84h426v84h-426zM470 384v-86h426v86h-426zM128 128h768v86h-768v-86zM128 896v-86h768v86h-768zM128 512l170-170v340zM470 726v-86h426v86h-426z",blockIndent:"M470 554v-84h426v84h-426zM470 384v-86h426v86h-426zM128 128h768v86h-768v-86zM470 726v-86h426v86h-426zM128 342l170 170-170 170v-340zM128 896v-86h768v86h-768z",fontItalic:"M426 170h342v128h-120l-144 342h94v128h-342v-128h120l144-342h-94v-128z",listBullet:"M298 214h598v84h-598v-84zM298 554v-84h598v84h-598zM298 810v-84h598v84h-598zM170 704q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zM170 192q26 0 45 18t19 46-19 46-45 18-45-18-19-46 19-46 45-18zM170 448q26 0 45 18t19 46-19 46-45 18-45-18-19-46 19-46 45-18z",listNumber:"M298 554v-84h598v84h-598zM298 810v-84h598v84h-598zM298 214h598v84h-598v-84zM86 470v-44h128v40l-78 88h78v44h-128v-40l76-88h-76zM128 342v-128h-42v-44h84v172h-42zM86 726v-44h128v172h-128v-44h84v-20h-42v-44h42v-20h-84z",fontUnderline:"M214 810h596v86h-596v-86zM512 726q-106 0-181-75t-75-181v-342h106v342q0 62 44 105t106 43 106-43 44-105v-342h106v342q0 106-75 181t-181 75z",airplay:"M213 683h-43c-12 0-22-5-30-13s-13-18-13-30v-427c0-12 5-22 13-30s18-13 30-13h683c12 0 22 5 30 13s13 18 13 30v427c0 12-5 22-13 30s-18 13-30 13h-43c-24 0-43 19-43 43s19 43 43 43h43c35 0 67-14 90-38s38-55 38-90v-427c0-35-14-67-38-90s-55-38-90-38h-683c-35 0-67 14-90 38s-38 55-38 90v427c0 35 14 67 38 90s55 38 90 38h43c24 0 43-19 43-43s-19-43-43-43zM545 613c-1-2-3-4-5-5-18-15-45-13-60 5l-213 256c-6 7-10 17-10 27 0 24 19 43 43 43h427c10 0 19-3 27-10 18-15 21-42 5-60zM512 707l122 147h-244z",bell:"M725 341c0 171 40 278 79 341h-585c39-63 79-170 79-341 0-59 24-112 62-151s92-62 151-62 112 24 151 62 62 92 62 151zM811 341c0-82-33-157-87-211s-129-87-211-87-157 33-211 87-87 129-87 211c0 261-102 343-109 349-19 13-24 39-11 59 8 12 22 19 35 19h768c24 0 43-19 43-43 0-14-7-27-18-35-8-6-110-87-110-349zM549 875c-6 10-15 17-26 20s-22 2-32-4c-7-4-12-9-15-15-12-20-38-28-58-16s-28 38-16 58c11 19 27 35 47 47 31 18 65 21 97 13s60-29 78-59c12-20 5-47-15-58s-47-5-58 15z",bellOff:"M549 875c-6 10-15 17-26 20s-22 2-32-4c-7-4-12-9-15-15-12-20-38-28-58-16s-28 38-16 58c11 19 27 35 47 47 31 18 65 21 97 13s60-29 78-59c12-20 5-47-15-58s-47-5-58 15zM811 340c-0-82-33-156-87-210-54-54-129-88-211-88-62-0-119 19-166 50-19 13-25 40-11 59s40 25 59 11c33-22 73-35 116-36 62 0 115 24 153 63 38 39 62 92 62 150-2 71 7 148 28 225 6 23 30 36 52 30s36-30 30-52c-19-69-27-139-25-201 0-0 0-0 0-1 0-0 0-0 0-0zM298 359l324 324h-403c37-61 76-163 79-324zM13 73l207 207c-5 21-7 42-6 62 0 261-102 343-109 348-19 13-24 39-11 59 8 12 22 19 35 19h580l243 243c17 17 44 17 60 0s17-44 0-60l-939-939c-17-17-44-17-60 0s-17 44 0 60z",bookmark:"M786 931c7 5 15 8 25 8 24 0 43-19 43-43v-683c0-35-14-67-38-90s-55-38-90-38h-427c-35 0-67 14-90 38s-38 55-38 90v683c-0 8 3 17 8 25 14 19 40 24 60 10l274-196zM768 813l-231-165c-15-11-35-10-50 0l-231 165v-600c0-12 5-22 13-30s18-13 30-13h427c12 0 22 5 30 13s13 18 13 30z",camera:"M1024 811v-469c0-35-14-67-38-90s-55-38-90-38h-148l-73-109c-8-12-21-19-35-19h-256c-14 0-27 7-35 19l-73 109h-148c-35 0-67 14-90 38s-38 55-38 90v469c0 35 14 67 38 90s55 38 90 38h768c35 0 67-14 90-38s38-55 38-90zM939 811c0 12-5 22-13 30s-18 13-30 13h-768c-12 0-22-5-30-13s-13-18-13-30v-469c0-12 5-22 13-30s18-13 30-13h171c15 0 28-7 35-19l73-109h210l73 109c8 12 22 19 35 19h171c12 0 22 5 30 13s13 18 13 30zM725 555c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM640 555c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90z",check:"M823 226l-439 439-183-183c-17-17-44-17-60 0s-17 44 0 60l213 213c17 17 44 17 60 0l469-469c17-17 17-44 0-60s-44-17-60 0z",chevronDown:"M226 414l256 256c17 17 44 17 60 0l256-256c17-17 17-44 0-60s-44-17-60 0l-226 226-226-226c-17-17-44-17-60 0s-17 44 0 60z",chevronLeft:"M670 738l-226-226 226-226c17-17 17-44 0-60s-44-17-60 0l-256 256c-17 17-17 44 0 60l256 256c17 17 44 17 60 0s17-44 0-60z",chevronRight:"M414 798l256-256c17-17 17-44 0-60l-256-256c-17-17-44-17-60 0s-17 44 0 60l226 226-226 226c-17 17-17 44 0 60s44 17 60 0z",chevronUp:"M798 610l-256-256c-17-17-44-17-60 0l-256 256c-17 17-17 44 0 60s44 17 60 0l226-226 226 226c17 17 44 17 60 0s17-44 0-60z",code:"M713 798l256-256c17-17 17-44 0-60l-256-256c-17-17-44-17-60 0s-17 44 0 60l226 226-226 226c-17 17-17 44 0 60s44 17 60 0zM311 226l-256 256c-17 17-17 44 0 60l256 256c17 17 44 17 60 0s17-44 0-60l-226-226 226-226c17-17 17-44 0-60s-44-17-60 0z",undo:"M896 853v-299c0-59-24-112-62-151s-92-62-151-62h-409l141-141c17-17 17-44 0-60s-44-17-60 0l-213 213c-4 4-7 9-9 14s-3 11-3 16 1 11 3 16c2 5 5 10 9 14l213 213c17 17 44 17 60 0s17-44 0-60l-141-141h409c35 0 67 14 90 38s38 55 38 90v299c0 24 19 43 43 43s43-19 43-43z",redo:"M213 853v-299c0-35 14-67 38-90s55-38 90-38h409l-141 141c-17 17-17 44 0 60s44 17 60 0l213-213c4-4 7-9 9-14 4-10 4-22 0-33-2-5-5-10-9-14l-213-213c-17-17-44-17-60 0s-17 44 0 60l141 141h-409c-59 0-112 24-151 62s-62 92-62 151v299c0 24 19 43 43 43s43-19 43-43z",crop:"M302 302l381-3c11 0 22 5 30 13s13 18 13 30v384h-384c-12 0-22-5-30-13s-13-18-13-30zM43 304l174-1-3 380c0 36 14 68 38 91s55 38 90 38h384v171c0 24 19 43 43 43s43-19 43-43v-171h171c24 0 43-19 43-43s-19-43-43-43h-171v-384c0-35-14-67-38-90s-55-38-91-38l-380 3 1-174c0-24-19-43-42-43s-43 19-43 42l-2 175-175 2c-24 0-42 19-42 43s19 42 43 42z",database:"M171 213c0 0 0-4 9-12 10-10 29-21 56-31 64-25 163-42 277-42s213 17 277 42c27 11 45 22 56 31 9 8 9 12 9 12 0 0-0 4-9 12-10 10-29 21-56 31-64 25-163 42-277 42s-213-17-277-42c-27-11-45-22-56-31-9-8-9-12-9-12zM853 620v191c-2 4-4 8-9 12-10 10-29 21-56 31-64 25-163 42-276 42s-213-17-276-42c-27-10-45-21-56-31-5-5-8-8-8-10l-0-193c11 5 22 10 33 15 77 30 187 48 307 48s231-18 307-48c12-5 23-10 34-15zM853 321v190c0 0 0 0 0 1-2 4-4 8-9 12-10 10-29 21-56 31-64 25-163 42-276 42s-213-17-276-42c-27-10-45-21-56-31-5-5-8-8-8-10-0-2-0-3-0-5l-0-188c11 5 22 10 34 15 77 30 187 48 308 48s231-18 308-48c12-5 23-10 34-15zM85 213v597c0 2 0 5 0 7 2 28 18 51 37 68 21 19 50 35 82 48 77 30 187 48 307 48s231-18 307-48c32-13 61-28 82-48 18-17 34-40 37-68 0-2 0-5 0-7v-597c0-2-0-5-0-7-2-28-18-51-36-68-21-20-50-35-82-48-77-30-187-48-308-48s-231 18-308 48c-32 13-61 28-82 48-18 17-34 40-36 68-0 2-0 5-0 7z",download:"M853 640v171c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-171c0-24-19-43-43-43s-43 19-43 43v171c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-171c0-24-19-43-43-43s-43 19-43 43zM555 537v-409c0-24-19-43-43-43s-43 19-43 43v409l-141-141c-17-17-44-17-60 0s-17 44 0 60l213 213c4 4 9 7 14 9s11 3 16 3c11 0 22-4 30-13l213-213c17-17 17-44 0-60s-44-17-60 0z",downloadCloud:"M469 512v281l-98-98c-17-17-44-17-60 0s-17 44 0 60l171 171c4 4 9 7 14 9 10 4 22 4 33 0 5-2 10-5 14-9l171-171c17-17 17-44 0-60s-44-17-60 0l-98 98v-281c0-24-19-43-43-43s-43 19-43 43zM915 807c58-41 94-101 105-165s-2-133-43-191c-35-50-85-84-140-99-22-6-46-10-69-10h-22c-31-88-91-158-167-203-85-50-188-68-291-41s-185 92-235 176-68 188-41 291c16 62 46 116 85 159 16 17 43 19 60 3s19-43 3-60c-30-33-53-75-65-123-21-80-7-160 32-226s103-117 183-137 160-7 226 32 117 103 137 183c5 19 22 32 41 32h54c16 0 31 2 47 6 37 10 70 33 93 66 27 39 36 84 29 127s-31 83-70 110c-19 14-24 40-10 59s40 24 59 10z",externalLink:"M725 555v256c0 12-5 22-13 30s-18 13-30 13h-469c-12 0-22-5-30-13s-13-18-13-30v-469c0-12 5-22 13-30s18-13 30-13h256c24 0 43-19 43-43s-19-43-43-43h-256c-35 0-67 14-90 38s-38 55-38 90v469c0 35 14 67 38 90s55 38 90 38h469c35 0 67-14 90-38s38-55 38-90v-256c0-24-19-43-43-43s-43 19-43 43zM457 627l397-397v153c0 24 19 43 43 43s43-19 43-43v-256c0-6-1-11-3-16s-5-10-9-14c-0-0-0-0-0-0-4-4-9-7-14-9-5-2-11-3-16-3h-256c-24 0-43 19-43 43s19 43 43 43h153l-397 397c-17 17-17 44 0 60s44 17 60 0z",eye:"M5 493c-6 12-6 26 0 38 0 0 17 34 48 79 19 28 44 61 75 95 38 42 86 85 142 119 68 42 150 72 243 72s175-30 243-72c56-35 103-78 142-119 31-34 56-67 75-95 31-45 48-79 48-79 6-12 6-26 0-38 0 0-17-34-48-79-19-28-44-61-75-95-38-42-86-85-142-119-68-42-150-72-243-72s-175 30-243 72c-56 35-103 78-142 119-31 34-56 67-75 95-31 45-48 79-48 79zM91 512c7-12 17-29 31-49 17-25 40-55 68-85 34-38 76-75 123-104 58-36 124-59 198-59s141 24 198 59c48 30 89 67 123 104 27 30 50 60 68 85 14 20 24 37 31 49-7 12-17 29-31 49-17 25-40 55-68 85-34 38-76 75-123 104-58 36-124 59-198 59s-141-24-198-59c-48-30-89-67-123-104-27-30-50-60-68-85-14-20-24-37-31-49zM683 512c0-47-19-90-50-121s-74-50-121-50-90 19-121 50-50 74-50 121 19 90 50 121 74 50 121 50 90-19 121-50 50-74 50-121zM597 512c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60 10-45 25-60 37-25 60-25 45 10 60 25 25 37 25 60z",eyeOff:"M432 222c28-6 55-9 79-9 75 0 141 24 199 59 48 30 89 67 123 104 27 30 50 60 68 85 14 20 24 37 31 49-23 41-49 78-76 108-15 18-13 45 5 60s45 13 60-5c35-41 69-90 97-144 6-12 7-26 1-39 0 0-17-34-48-79-19-28-44-61-75-95-38-42-86-85-142-119-68-42-150-72-243-72-31-0-66 3-100 11-23 5-37 28-32 51s28 37 51 32zM428 488l108 108c-8 3-16 4-24 4-22 1-44-7-61-23s-26-38-27-59c-0-10 1-20 4-30zM255 316l109 109c-19 29-27 63-26 97 2 44 20 87 54 119s79 47 122 46c30-1 59-10 85-26l99 99c-59 34-124 51-187 52-74 0-140-24-198-59-48-30-89-67-123-104-27-30-50-60-68-85-14-20-24-37-31-49 45-78 101-144 164-197zM13 73l182 182c-74 63-139 143-190 237-6 12-7 26-1 39 0 0 17 34 48 79 19 28 44 61 75 95 38 42 86 85 142 119 68 42 150 72 244 72 85-1 171-26 248-75l191 191c17 17 44 17 60 0s17-44 0-60l-379-379c-0-0-0-0-0-0l-180-180c-0-0-1-1-1-1l-379-379c-17-17-44-17-60 0s-17 44 0 60z",fastForward:"M597 723v-423l272 211zM128 723v-423l272 211zM112 844l384-299c11-8 16-21 16-33v298c0 24 19 43 43 43 10 0 19-3 26-9l384-299c19-14 22-41 7-60-2-3-5-6-7-7l-384-299c-19-14-45-11-60 7-6 8-9 17-9 26v298c-0-9-3-18-9-26-2-3-5-6-7-7l-384-299c-19-14-45-11-60 7-6 8-9 17-9 26v597c0 24 19 43 43 43 10 0 19-3 26-9z",file:"M750 341h-153v-153zM883 354l-299-299c-4-4-9-7-14-9s-11-3-16-3h-299c-35 0-67 14-90 38s-38 55-38 90v683c0 35 14 67 38 90s55 38 90 38h512c35 0 67-14 90-38s38-55 38-90v-469c0-12-5-22-13-30zM512 128v256c0 24 19 43 43 43h256v427c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22-5-30-13s-13-18-13-30v-683c0-12 5-22 13-30s18-13 30-13z",fileMinus:"M750 299h-110v-110zM883 311l-256-256c-4-4-9-7-14-9s-11-3-16-3h-341c-35 0-67 14-90 38s-38 55-38 90v683c0 35 14 67 38 90s55 38 90 38h512c35 0 67-14 90-38s38-55 38-90v-512c0-12-5-22-13-30zM555 128v213c0 24 19 43 43 43h213v469c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22-5-30-13s-13-18-13-30v-683c0-12 5-22 13-30s18-13 30-13zM384 683h256c24 0 43-19 43-43s-19-43-43-43h-256c-24 0-43 19-43 43s19 43 43 43z",filePlus:"M750 299h-110v-110zM883 311l-256-256c-4-4-9-7-14-9s-11-3-16-3h-341c-35 0-67 14-90 38s-38 55-38 90v683c0 35 14 67 38 90s55 38 90 38h512c35 0 67-14 90-38s38-55 38-90v-512c0-12-5-22-13-30zM555 128v213c0 24 19 43 43 43h213v469c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22-5-30-13s-13-18-13-30v-683c0-12 5-22 13-30s18-13 30-13zM384 683h85v85c0 24 19 43 43 43s43-19 43-43v-85h85c24 0 43-19 43-43s-19-43-43-43h-85v-85c0-24-19-43-43-43s-43 19-43 43v85h-85c-24 0-43 19-43 43s19 43 43 43z",fileText:"M750 299h-110v-110zM883 311l-256-256c-4-4-9-7-14-9s-11-3-16-3h-341c-35 0-67 14-90 38s-38 55-38 90v683c0 35 14 67 38 90s55 38 90 38h512c35 0 67-14 90-38s38-55 38-90v-512c0-12-5-22-13-30zM555 128v213c0 24 19 43 43 43h213v469c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22-5-30-13s-13-18-13-30v-683c0-12 5-22 13-30s18-13 30-13zM683 512h-341c-24 0-43 19-43 43s19 43 43 43h341c24 0 43-19 43-43s-19-43-43-43zM683 683h-341c-24 0-43 19-43 43s19 43 43 43h341c24 0 43-19 43-43s-19-43-43-43zM427 341h-85c-24 0-43 19-43 43s19 43 43 43h85c24 0 43-19 43-43s-19-43-43-43z",filter:"M847 171l-282 333c-6 7-10 17-10 28v295l-85-43v-253c0-10-3-19-10-28l-282-333zM939 85h-853c-24 0-43 19-43 43 0 11 4 20 10 28l331 392v263c0 17 9 31 24 38l171 85c21 11 47 2 57-19 3-6 5-13 4-19v-349l331-392c15-18 13-45-5-60-8-7-18-10-28-10z",flag:"M213 572v-421c19-9 58-23 128-23 55 0 101 18 155 40 53 21 113 46 186 46 55 0 97-7 128-17v421c-19 9-58 23-128 23-55 0-101-18-155-40-53-21-113-46-186-46-55 0-97 7-128 17zM213 939v-276c19-9 58-23 128-23 55 0 101 18 155 40 53 21 113 46 186 46 139 0 192-47 201-55 8-8 13-19 13-30v-512c0-24-19-43-43-43-11 0-22 4-29 12-4 3-42 31-141 31-55 0-101-18-155-40-53-21-113-46-186-46-139 0-192 47-201 55-8 8-13 19-13 30v811c0 24 19 43 43 43s43-19 43-43z",folder:"M981 811v-469c0-35-14-67-38-90s-55-38-90-38h-361l-73-109c-8-12-21-19-35-19h-213c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h683c35 0 67-14 90-38s38-55 38-90zM896 811c0 12-5 22-13 30s-18 13-30 13h-683c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h191l73 109c8 12 22 19 35 19h384c12 0 22 5 30 13s13 18 13 30z",folderMinus:"M981 811v-469c0-35-14-67-38-90s-55-38-90-38h-361l-73-109c-8-12-21-19-35-19h-213c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h683c35 0 67-14 90-38s38-55 38-90zM896 811c0 12-5 22-13 30s-18 13-30 13h-683c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h191l73 109c8 12 22 19 35 19h384c12 0 22 5 30 13s13 18 13 30zM384 640h256c24 0 43-19 43-43s-19-43-43-43h-256c-24 0-43 19-43 43s19 43 43 43z",folderPlus:"M981 811v-469c0-35-14-67-38-90s-55-38-90-38h-361l-73-109c-8-12-21-19-35-19h-213c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h683c35 0 67-14 90-38s38-55 38-90zM896 811c0 12-5 22-13 30s-18 13-30 13h-683c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h191l73 109c8 12 22 19 35 19h384c12 0 22 5 30 13s13 18 13 30zM384 640h85v85c0 24 19 43 43 43s43-19 43-43v-85h85c24 0 43-19 43-43s-19-43-43-43h-85v-85c0-24-19-43-43-43s-43 19-43 43v85h-85c-24 0-43 19-43 43s19 43 43 43z",help:"M981 512c0-130-53-247-137-332s-202-137-332-137-247 53-332 137-137 202-137 332 53 247 137 332 202 137 332 137 247-53 332-137 137-202 137-332zM896 512c0 106-43 202-112 272s-165 112-272 112-202-43-272-112-112-165-112-272 43-202 112-272 165-112 272-112 202 43 272 112 112 165 112 272zM428 398c8-22 24-39 44-49s43-11 65-4c20 7 35 20 45 37 8 13 12 28 12 44 0 7-2 13-5 20-3 7-9 14-16 21-30 30-78 47-78 47-22 7-34 32-27 54s32 34 54 27c0 0 66-22 111-67 12-12 23-26 32-43 9-17 14-37 14-58-0-31-9-61-24-87-20-33-51-60-90-74-44-16-91-12-130 7s-72 53-87 97c-8 22 4 47 26 54s47-4 54-26zM512 768c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43z",home:"M102 350c-10 8-16 20-16 34v469c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-469c-0-13-6-25-16-34l-384-299c-15-12-37-12-52 0zM683 896v-384c0-24-19-43-43-43h-256c-24 0-43 19-43 43v384h-128c-12 0-22-5-30-13s-13-18-13-30v-448l341-265 341 265v448c0 12-5 22-13 30s-18 13-30 13zM427 896v-341h171v341z",image:"M213 85c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-597c0-35-14-67-38-90s-55-38-90-38zM469 363c0-29-12-56-31-75s-46-31-75-31-56 12-75 31-31 46-31 75 12 56 31 75 46 31 75 31 56-12 75-31 31-46 31-75zM384 363c0 6-2 11-6 15s-9 6-15 6-11-2-15-6-6-9-6-15 2-11 6-15 9-6 15-6 11 2 15 6 6 9 6 15zM316 853l366-366 171 171v153c0 12-5 22-13 30s-18 13-30 13zM853 537l-141-141c-17-17-44-17-60 0l-454 454c-6-2-11-6-15-10-8-8-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h597c12 0 22 5 30 13s13 18 13 30z",layers:"M512 133l331 166-331 166-331-166zM493 47l-427 213c-21 11-30 36-19 57 4 9 11 15 19 19l427 213c12 6 26 6 38 0l427-213c21-11 30-36 19-57-4-9-11-15-19-19l-427-213c-12-6-26-6-38 0zM66 763l427 213c12 6 26 6 38 0l427-213c21-11 30-36 19-57s-36-30-57-19l-408 204-408-204c-21-11-47-2-57 19s-2 47 19 57zM66 550l427 213c12 6 26 6 38 0l427-213c21-11 30-36 19-57s-36-30-57-19l-408 204-408-204c-21-11-47-2-57 19s-2 47 19 57z",link:"M392 580c42 57 104 91 168 100s133-6 190-48c10-8 20-16 28-24l128-128c50-51 73-117 72-183s-27-131-78-180c-50-48-115-72-179-72-64 0-127 24-177 72l-74 73c-17 17-17 44-0 60s44 17 60 0l73-72c33-32 75-48 118-48 43-0 86 16 119 48 34 33 51 76 52 120s-15 88-47 121l-128 128c-5 5-11 11-18 16-38 28-83 38-127 32s-84-29-112-67c-14-19-41-23-60-9s-23 41-9 60zM632 444c-42-57-104-91-168-100s-133 6-190 48c-10 8-20 16-28 24l-128 128c-50 51-73 117-72 183s27 131 78 180c50 48 115 72 179 72 64-0 127-24 177-72l74-74c17-17 17-44 0-60s-44-17-60 0l-72 72c-33 32-75 48-118 48-43 0-86-16-119-48-34-33-51-76-52-120s15-88 47-121l128-128c5-5 11-11 18-16 38-28 83-38 127-32s84 29 112 67c14 19 41 23 60 9s23-41 9-60z",lock:"M213 512h597c12 0 22 5 30 13s13 18 13 30v299c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-299c0-12 5-22 13-30s18-13 30-13zM768 427v-128c0-71-29-135-75-181s-110-75-181-75-135 29-181 75-75 110-75 181v128h-43c-35 0-67 14-90 38s-38 55-38 90v299c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-299c0-35-14-67-38-90s-55-38-90-38zM341 427v-128c0-47 19-90 50-121s74-50 121-50 90 19 121 50 50 74 50 121v128z",logIn:"M640 171h171c12 0 22 5 30 13s13 18 13 30v597c0 12-5 22-13 30s-18 13-30 13h-171c-24 0-43 19-43 43s19 43 43 43h171c35 0 67-14 90-38s38-55 38-90v-597c0-35-14-67-38-90s-55-38-90-38h-171c-24 0-43 19-43 43s19 43 43 43zM537 469h-409c-24 0-43 19-43 43s19 43 43 43h409l-141 141c-17 17-17 44 0 60s44 17 60 0l213-213c4-4 7-9 9-14s3-11 3-16c0-6-1-11-3-16-2-5-5-10-9-14l-213-213c-17-17-44-17-60 0s-17 44 0 60z",logOut:"M384 853h-171c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h171c24 0 43-19 43-43s-19-43-43-43h-171c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h171c24 0 43-19 43-43s-19-43-43-43zM793 469h-409c-24 0-43 19-43 43s19 43 43 43h409l-141 141c-17 17-17 44 0 60s44 17 60 0l213-213c4-4 7-9 9-14 6-15 3-34-9-47l-213-213c-17-17-44-17-60 0s-17 44 0 60z",map:"M299 159v584l-213 122v-584zM725 865v-584l213-122v584zM663 976c3 2 7 3 11 4 1 0 3 1 4 1s3 0 4 0c-0 0-0 0-0 0s0 0 0 0c7 0 15-2 21-6l1-0 298-170c14-8 21-22 21-37v-683c0-24-19-43-43-43-8 0-15 2-21 6l-279 159-320-160c-4-2-7-3-11-4-1-0-3-1-4-1s-3-0-4-0c0 0 0 0 0 0s0 0-0 0c-7 0-15 2-21 6l-1 0-298 170c-14 8-21 22-22 37v683c0 24 19 43 43 43 8 0 15-2 21-6l279-159zM640 282v587l-256-128v-587z",mapPin:"M939 427c0-118-48-225-125-302s-184-125-302-125-225 48-302 125-125 184-125 302c0 24 2 48 6 72 12 66 38 128 72 184 117 196 325 334 325 334 14 9 33 10 47 0 0 0 208-138 325-334 33-56 60-118 72-184 4-23 6-47 6-72zM853 427c0 19-2 38-5 57-9 53-31 106-61 156-82 137-215 245-272 288-60-39-196-148-279-288-30-50-52-102-61-156-3-19-5-38-5-57 0-94 38-180 100-241s147-100 241-100 180 38 241 100 100 147 100 241zM683 427c0-47-19-90-50-121s-74-50-121-50-90 19-121 50-50 74-50 121 19 90 50 121 74 50 121 50 90-19 121-50 50-74 50-121zM597 427c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60 10-45 25-60 37-25 60-25 45 10 60 25 25 37 25 60z",maximize:"M341 85h-128c-35 0-67 14-90 38s-38 55-38 90v128c0 24 19 43 43 43s43-19 43-43v-128c0-12 5-22 13-30s18-13 30-13h128c24 0 43-19 43-43s-19-43-43-43zM939 341v-128c0-35-14-67-38-90s-55-38-90-38h-128c-24 0-43 19-43 43s19 43 43 43h128c12 0 22 5 30 13s13 18 13 30v128c0 24 19 43 43 43s43-19 43-43zM683 939h128c35 0 67-14 90-38s38-55 38-90v-128c0-24-19-43-43-43s-43 19-43 43v128c0 12-5 22-13 30s-18 13-30 13h-128c-24 0-43 19-43 43s19 43 43 43zM85 683v128c0 35 14 67 38 90s55 38 90 38h128c24 0 43-19 43-43s-19-43-43-43h-128c-12 0-22-5-30-13s-13-18-13-30v-128c0-24-19-43-43-43s-43 19-43 43z",messageCircle:"M939 491v-21c0-1-0-2-0-2-6-100-47-190-113-258-68-71-163-117-269-123-1-0-2-0-2-0h-21c-60-1-123 13-182 43-52 26-98 63-134 108-56 70-90 158-90 254-1 54 11 111 35 165l-76 227c-3 8-3 18 0 27 7 22 32 34 54 27l227-76c49 22 106 35 165 35 59-0 116-13 168-37 82-37 151-101 194-187 27-53 43-116 43-182zM853 491c0 52-12 101-34 142-34 68-89 119-153 148-41 19-87 29-133 29-52 0-101-12-142-34-11-6-23-6-33-3l-162 54 54-162c4-11 3-23-2-33-24-47-34-96-34-142 0-76 26-146 71-201 29-35 65-65 106-86 47-24 96-34 142-34h19c84 5 158 41 212 97 51 53 84 124 89 203z",mic:"M512 85c24 0 45 10 60 25s25 37 25 60v341c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60v-341c0-24 10-45 25-60s37-25 60-25zM512 0c-47 0-90 19-121 50s-50 74-50 121v341c0 47 19 90 50 121s74 50 121 50 90-19 121-50 50-74 50-121v-341c0-47-19-90-50-121s-74-50-121-50zM341 1024h341c24 0 43-19 43-43s-19-43-43-43h-128v-88c77-10 146-45 199-97 62-62 100-147 100-241v-85c0-24-19-43-43-43s-43 19-43 43v85c0 71-29 135-75 181s-110 75-181 75-135-29-181-75-75-110-75-181v-85c0-24-19-43-43-43s-43 19-43 43v85c0 94 38 180 100 241 52 52 121 88 199 97v88h-128c-24 0-43 19-43 43s19 43 43 43z",micOff:"M534 594c-7 2-14 3-22 3-24-0-45-10-60-25-15-15-25-37-25-60v-25zM683 399v-228c0-47-19-90-50-121s-74-50-121-50c-43-0-83 16-113 43-27 24-47 57-54 94-5 23 10 46 33 50s46-10 50-33c4-19 14-35 27-47 15-13 34-21 56-21 24 0 45 10 61 25 15 16 25 37 25 60v228c0 24 19 43 43 43s43-19 43-43zM768 427v85c0 16-1 32-4 45-4 23 11 45 34 50s45-11 50-34c3-19 5-39 5-60v-85c0-24-19-43-43-43s-43 19-43 43zM341 1024h341c24 0 43-19 43-43s-19-43-43-43h-128v-86c62-8 119-31 168-69l229 229c17 17 44 17 60 0s17-44 0-60l-249-249c-2-3-4-7-7-9-3-3-6-5-9-7l-674-674c-17-17-44-17-60 0s-17 44 0 60l329 329v110c0 47 19 90 50 121s74 50 121 50c32-0 61-9 86-24l63 63c-41 30-89 46-137 48-4-1-8-2-13-2-4 0-9 1-13 2-60-3-120-27-167-73-49-48-75-111-77-175-0-5-0-10-0-10v-86c0-24-19-43-43-43s-43 19-43 43v85c0 6 0 13 0 13 3 85 37 169 102 234 55 54 125 86 196 95v86h-128c-24 0-43 19-43 43s19 43 43 43z",minimize:"M299 128v128c0 12-5 22-13 30s-18 13-30 13h-128c-24 0-43 19-43 43s19 43 43 43h128c35 0 67-14 90-38s38-55 38-90v-128c0-24-19-43-43-43s-43 19-43 43zM896 299h-128c-12 0-22-5-30-13s-13-18-13-30v-128c0-24-19-43-43-43s-43 19-43 43v128c0 35 14 67 38 90s55 38 90 38h128c24 0 43-19 43-43s-19-43-43-43zM725 896v-128c0-12 5-22 13-30s18-13 30-13h128c24 0 43-19 43-43s-19-43-43-43h-128c-35 0-67 14-90 38s-38 55-38 90v128c0 24 19 43 43 43s43-19 43-43zM128 725h128c12 0 22 5 30 13s13 18 13 30v128c0 24 19 43 43 43s43-19 43-43v-128c0-35-14-67-38-90s-55-38-90-38h-128c-24 0-43 19-43 43s19 43 43 43z",minus:"M213 555h597c24 0 43-19 43-43s-19-43-43-43h-597c-24 0-43 19-43 43s19 43 43 43z",moon:"M938 550c1-10-2-20-8-29-14-19-41-23-60-9-41 30-88 46-136 50-58 4-118-12-169-49-57-42-91-103-101-168s5-133 47-190c6-8 9-19 8-29-2-23-23-41-47-38-96 9-184 50-252 113-74 69-124 164-134 272-11 117 27 228 97 312s172 141 289 152 228-27 312-97 141-172 152-289zM835 626c-21 58-57 109-103 147-67 56-156 86-250 77s-175-55-231-122-86-156-77-250c8-87 48-163 107-218 33-31 73-55 117-71-19 54-25 111-16 166 13 86 59 168 135 224 67 50 147 71 225 66 32-2 64-9 94-20z",more:"M597 512c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60zM896 512c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60zM299 512c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60z",moreVertical:"M597 512c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60zM597 213c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60zM597 811c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60z",mousePointer:"M207 207l524 218-208 71c-12 4-22 14-27 27l-71 208zM555 615l225 225c17 17 44 17 60 0s17-44 0-60l-225-225 250-85c22-8 34-32 27-54-4-12-13-21-24-26l-724-302c-22-9-47 1-56 23-5 11-4 23 0 33l302 724c9 22 34 32 56 23 12-5 20-14 24-26z",move:"M469 188v281h-281l55-55c17-17 17-44 0-60s-44-17-60 0l-128 128c-8 8-13 18-13 30 0 6 1 11 3 16s5 10 9 14l128 128c17 17 44 17 60 0s17-44 0-60l-55-55h281v281l-55-55c-17-17-44-17-60 0s-17 44 0 60l128 128c4 4 9 7 14 9s11 3 16 3c6 0 11-1 16-3 5-2 10-5 14-9l128-128c17-17 17-44 0-60s-44-17-60 0l-55 55v-281h281l-55 55c-17 17-17 44 0 60s44 17 60 0l128-128c4-4 7-9 9-14 6-15 3-34-9-47l-128-128c-17-17-44-17-60 0s-17 44 0 60l55 55h-281v-281l55 55c17 17 44 17 60 0s17-44 0-60l-128-128c-4-4-9-7-14-9-10-4-22-4-33 0-5 2-10 5-14 9l-128 128c-17 17-17 44 0 60s44 17 60 0z",music:"M341 768c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60 10-45 25-60 37-25 60-25 45 10 60 25 25 37 25 60zM939 683v-555c0-2-0-5-1-7-4-23-26-39-49-35l-512 85c-20 3-36 21-36 42v407c-25-15-54-23-85-23-47 0-90 19-121 50s-50 74-50 121 19 90 50 121 74 50 121 50 90-19 121-50 50-74 50-121v-519l427-71v356c-25-15-54-23-85-23-47 0-90 19-121 50s-50 74-50 121 19 90 50 121 74 50 121 50 90-19 121-50 50-74 50-121zM853 683c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60 10-45 25-60 37-25 60-25 45 10 60 25 25 37 25 60z",paperclip:"M885 441l-392 392c-42 42-96 63-151 63s-109-21-151-63-63-96-63-151 21-109 63-151l392-392c25-25 58-38 91-38s66 13 91 38 38 58 38 91-13 66-38 91l-393 392c-8 8-19 13-30 13s-22-4-30-13-13-19-13-30 4-22 13-30l362-362c17-17 17-44 0-60s-44-17-60-0l-362 362c-25 25-38 58-38 91s13 66 38 91 58 38 91 38 66-13 91-38l393-392c42-42 63-96 63-151s-21-109-63-151-96-63-151-63-109 21-151 63l-392 392c-58 58-88 135-88 211s29 153 88 211 135 88 211 88 153-29 211-88l392-392c17-17 17-44 0-60s-44-17-60 0z",pause:"M256 128c-24 0-43 19-43 43v683c0 24 19 43 43 43h171c24 0 43-19 43-43v-683c0-24-19-43-43-43zM299 213h85v597h-85zM597 128c-24 0-43 19-43 43v683c0 24 19 43 43 43h171c24 0 43-19 43-43v-683c0-24-19-43-43-43zM640 213h85v597h-85z",play:"M236 92c-7-4-15-7-23-7-24 0-43 19-43 43v768c-0 8 2 16 7 23 13 20 39 26 59 13l597-384c5-3 9-7 13-13 13-20 7-46-13-59zM256 206l476 306-476 306z",plus:"M213 555h256v256c0 24 19 43 43 43s43-19 43-43v-256h256c24 0 43-19 43-43s-19-43-43-43h-256v-256c0-24-19-43-43-43s-43 19-43 43v256h-256c-24 0-43 19-43 43s19 43 43 43z",refresh:"M190 398c31-89 96-157 175-194s172-45 261-14c51 18 94 46 127 80l121 113h-148c-24 0-43 19-43 43s19 43 43 43h256c0 0 0 0 1 0 6-0 11-1 16-3 5-2 10-5 14-10 1-1 1-1 2-2 3-4 6-8 7-12s3-9 3-14c0-1 0-1 0-2v-256c0-24-19-43-43-43s-43 19-43 43v157l-125-117c-42-43-97-79-160-101-111-39-228-30-326 17s-179 132-218 243c-8 22 4 47 26 54s47-4 54-26zM85 696l126 118c82 82 192 124 301 124s218-42 302-125c47-47 81-103 101-160 8-22-4-47-26-54s-47 4-54 26c-15 45-42 89-80 127-67 67-154 100-241 100s-175-33-242-101l-119-112h148c24 0 43-19 43-43s-19-43-43-43h-256c-0 0-0 0-1 0-6 0-11 1-16 3-5 2-10 5-14 10-1 1-1 1-2 2-3 4-6 8-7 12s-3 9-3 14c-0 1-0 1-0 2v256c0 24 19 43 43 43s43-19 43-43z",rewind:"M427 723l-272-211 272-211zM912 844c7 6 16 9 26 9 24 0 43-19 43-43v-597c0-9-3-18-9-26-14-19-41-22-60-7l-384 299c-3 2-5 5-7 7-6 8-9 17-9 26v-298c0-9-3-18-9-26-14-19-41-22-60-7l-384 299c-3 2-5 5-7 7-14 19-11 45 7 60l384 299c7 6 16 9 26 9 24 0 43-19 43-43v-298c0 13 6 25 16 33zM896 723l-272-211 272-211z",settings:"M683 512c0-47-19-90-50-121s-74-50-121-50-90 19-121 50-50 74-50 121 19 90 50 121 74 50 121 50 90-19 121-50 50-74 50-121zM597 512c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60 10-45 25-60 37-25 60-25 45 10 60 25 25 37 25 60zM867 657c2-4 5-8 8-11 5-4 11-6 17-6h4c35 0 67-14 90-38s38-55 38-90-14-67-38-90-55-38-90-38h-7c-5-0-9-1-13-3-5-3-10-7-12-13-0-1-0-3-0-4-1-2-2-5-2-7 1-14 3-19 7-23l3-3c25-25 37-58 37-91s-13-66-38-91c-25-25-58-37-91-37s-66 13-90 38l-2 2c-4 3-8 6-12 7-6 2-12 1-19-1-4-2-8-5-11-8-4-5-6-11-6-17v-4c0-35-14-67-38-90s-55-38-90-38-67 14-90 38-38 55-38 90v7c-0 5-1 9-3 13-3 5-7 10-13 12-1 0-3 0-4 0-2 1-5 2-7 2-14-1-19-3-23-7l-3-3c-25-25-58-37-91-37s-65 13-91 38c-25 25-37 58-37 91s13 66 38 90l2 2c3 4 6 8 7 12 2 6 1 12-1 19-0 1-1 1-1 2-2 5-5 9-8 12-5 4-11 7-16 7h-4c-35 0-67 14-90 38s-38 55-38 91 14 67 38 90 55 38 90 38h7c5 0 9 1 13 3 5 3 10 7 13 14 1 2 2 5 2 7-1 14-3 19-7 23l-3 3c-25 25-37 58-37 91s13 66 38 91c25 25 58 37 91 37s66-13 90-38l2-2c4-3 8-6 12-7 6-2 12-1 19 1 1 0 1 1 2 1 5 2 9 5 12 8 4 5 7 11 7 16v4c0 35 14 67 38 90s55 38 90 38 67-14 90-38 38-55 38-90v-7c0-5 1-9 3-13 3-5 7-10 14-13 2-1 5-2 7-2 14 1 19 3 23 7l3 3c25 25 58 37 91 37s66-13 91-38c25-25 37-58 37-91s-13-66-38-90l-2-2c-3-4-6-8-7-12-2-6-1-12 1-19zM785 397c-1-9-2-13-3-16v3c0 2 0 4 0 5 1 3 2 5 3 8 0 4 0 4 0 4 11 25 29 44 52 56 16 8 33 13 52 13h8c12 0 22 5 30 13s13 18 13 30-5 22-13 30-18 13-30 13h-4c-27 0-52 10-71 26-14 11-25 26-32 42-11 25-12 52-5 76 5 18 15 35 28 48l3 3c8 8 13 19 13 30s-4 22-12 30c-8 8-19 13-30 13s-22-4-30-12l-3-3c-20-19-44-30-70-32-19-2-38 1-55 9-25 11-44 29-55 51-8 16-13 33-13 52v8c0 12-5 22-13 30s-18 12-30 12-22-5-30-13-13-18-13-30v-4c-1-28-11-53-27-72-12-14-28-25-45-32-25-11-51-12-75-5-18 5-35 15-48 28l-3 3c-8 8-19 13-30 13s-22-4-30-12c-8-8-13-19-13-30s4-22 12-30l3-3c19-20 30-44 32-70 2-19-1-38-9-55-11-25-29-44-51-55-16-8-33-13-52-13l-8 0c-12 0-22-5-30-13s-13-18-13-30 5-22 13-30 18-13 30-13h4c28-1 53-11 72-27 14-12 25-28 32-45 11-25 12-51 5-75-5-18-15-35-28-48l-3-3c-8-8-13-19-13-30s4-22 12-30c8-8 19-13 30-13s22 4 30 12l3 3c20 19 44 30 70 32 16 1 32-1 47-6 4-1 8-2 11-3-1 0-3 0-4 0-9 1-13 2-16 3h3c2 0 4-0 5-0 3-1 5-2 8-3 4-0 4-0 4-0 25-11 44-29 56-52 8-16 13-33 13-52v-8c0-12 5-22 13-30s18-13 30-13 22 5 30 13 13 18 13 30v4c0 27 10 52 26 71 11 14 26 25 42 32 25 11 51 12 76 5 18-5 35-15 48-28l3-3c8-8 19-13 30-13s22 4 30 12c8 8 13 19 13 30s-4 22-12 30l-3 3c-19 20-30 44-32 70-1 16 1 32 6 47 1 4 2 8 3 11-0-1-0-3-0-4z",share:"M128 512v341c0 35 14 67 38 90s55 38 90 38h512c35 0 67-14 90-38s38-55 38-90v-341c0-24-19-43-43-43s-43 19-43 43v341c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22-5-30-13s-13-18-13-30v-341c0-24-19-43-43-43s-43 19-43 43zM469 188v452c0 24 19 43 43 43s43-19 43-43v-452l98 98c17 17 44 17 60 0s17-44 0-60l-171-171c-4-4-9-7-14-9-10-4-22-4-33 0-5 2-10 5-14 9l-171 171c-17 17-17 44 0 60s44 17 60 0z",start:"M784 887c7 6 17 9 27 9 24 0 43-19 43-43v-683c0-9-3-19-9-27-15-18-42-21-60-7l-427 341c-2 2-5 4-7 7-15 18-12 45 7 60zM768 765l-316-253 316-253zM256 811v-597c0-24-19-43-43-43s-43 19-43 43v597c0 24 19 43 43 43s43-19 43-43z",end:"M240 137c-7-6-17-9-27-9-24 0-43 19-43 43v683c-0 9 3 19 9 27 15 18 42 21 60 7l427-341c2-2 5-4 7-7 15-18 12-45-7-60zM256 259l316 253-316 253zM768 213v597c0 24 19 43 43 43s43-19 43-43v-597c0-24-19-43-43-43s-43 19-43 43z",forbidden:"M981 512c0-130-53-247-137-332s-202-137-332-137-247 53-332 137-137 202-137 332 53 247 137 332 202 137 332 137 247-53 332-137 137-202 137-332zM812 752l-540-540c66-53 149-84 240-84 106 0 202 43 272 112s112 165 112 272c0 91-31 174-84 240zM212 272l540 540c-66 53-149 84-240 84-106 0-202-43-272-112s-112-165-112-272c0-91 31-174 84-240z",square:"M213 85c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-597c0-35-14-67-38-90s-55-38-90-38zM213 171h597c12 0 22 5 30 13s13 18 13 30v597c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13z",star:"M550 66c-4-8-11-15-19-19-21-10-47-2-57 19l-122 247-273 40c-9 1-18 5-24 12-16 17-16 44 1 60l197 192-47 271c-2 9-0 18 4 27 11 21 37 29 58 18l244-128 244 128c8 4 17 6 27 4 23-4 39-26 35-49l-47-271 197-192c6-6 11-15 12-24 3-23-13-45-36-48l-273-40-122-247z",sun:"M768 512c0-71-29-135-75-181s-110-75-181-75-135 29-181 75-75 110-75 181 29 135 75 181 110 75 181 75 135-29 181-75 75-110 75-181zM683 512c0 47-19 90-50 121s-74 50-121 50-90-19-121-50-50-74-50-121 19-90 50-121 74-50 121-50 90 19 121 50 50 74 50 121zM469 43v85c0 24 19 43 43 43s43-19 43-43v-85c0-24-19-43-43-43s-43 19-43 43zM469 896v85c0 24 19 43 43 43s43-19 43-43v-85c0-24-19-43-43-43s-43 19-43 43zM150 210l61 61c17 17 44 17 60 0s17-44 0-60l-61-61c-17-17-44-17-60 0s-17 44 0 60zM753 814l61 61c17 17 44 17 60 0s17-44 0-60l-61-61c-17-17-44-17-60 0s-17 44 0 60zM43 555h85c24 0 43-19 43-43s-19-43-43-43h-85c-24 0-43 19-43 43s19 43 43 43zM896 555h85c24 0 43-19 43-43s-19-43-43-43h-85c-24 0-43 19-43 43s19 43 43 43zM210 874l61-61c17-17 17-44 0-60s-44-17-60 0l-61 61c-17 17-17 44 0 60s44 17 60 0zM814 271l61-61c17-17 17-44 0-60s-44-17-60 0l-61 61c-17 17-17 44 0 60s44 17 60 0z",tag:"M909 602c25-25 37-58 37-90 0-33-12-65-37-90l-367-367c-8-8-18-12-30-12h-427c-24 0-43 19-43 43v427c0 11 4 22 13 30l367 366c25 25 58 37 91 37s66-13 90-38zM848 542l-306 306c-8 8-19 13-30 13s-22-4-30-12l-354-354v-366h366l354 354c8 8 12 19 12 30 0 11-4 22-12 30zM299 341c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43z",terminal:"M201 755l256-256c17-17 17-44 0-60l-256-256c-17-17-44-17-60 0s-17 44 0 60l226 226-226 226c-17 17-17 44 0 60s44 17 60 0zM512 853h341c24 0 43-19 43-43s-19-43-43-43h-341c-24 0-43 19-43 43s19 43 43 43z",thumbsDown:"M469 640c0-24-19-43-43-43h-242c-3-0-7-0-7-0-12-2-21-8-28-17s-10-20-8-32l59-384c2-10 7-19 14-26 8-7 18-11 29-11h439v418l-154 346c-13-4-25-11-34-21-15-15-25-37-25-60zM384 683v128c0 47 19 90 50 121s74 50 121 50c17 0 32-10 39-25l171-384c3-6 4-12 4-17v-469c0-24-19-43-43-43h-481c-33-0-63 12-86 33-22 19-37 46-41 76l-59 384c-5 35 4 69 23 95s49 45 84 51c7 1 14 2 21 1zM725 128h114c15-0 29 5 39 14 9 8 16 19 18 32v290c-2 15-9 27-19 36-10 8-23 13-37 13l-115 0c-24 0-43 19-43 43s19 43 43 43h113c35 1 67-12 92-32 27-22 45-53 50-90 0-2 0-4 0-6v-299c0-2-0-4-0-6-5-34-22-64-46-86-26-23-60-37-96-36h-114c-24 0-43 19-43 43s19 43 43 43z",thumbsUp:"M555 384c0 24 19 43 43 43h242c3 0 7 0 7 0 12 2 21 8 28 17s10 20 8 32l-59 384c-2 10-7 19-14 26-8 7-18 11-29 11h-439v-418l154-346c13 4 25 11 34 21 15 15 25 37 25 60zM640 341v-128c0-47-19-90-50-121s-74-50-121-50c-17 0-32 10-39 25l-171 384c-3 6-4 12-4 17v469c0 24 19 43 43 43h481c33 0 63-12 86-33 22-19 37-46 41-76l59-384c5-35-4-69-23-95s-49-45-84-51c-7-1-14-2-21-1zM299 896h-128c-12 0-22-5-30-13s-13-18-13-30v-299c0-12 5-22 13-30s18-13 30-13h128c24 0 43-19 43-43s-19-43-43-43h-128c-35 0-67 14-90 38s-38 55-38 90v299c0 35 14 67 38 90s55 38 90 38h128c24 0 43-19 43-43s-19-43-43-43z",trash:"M768 299v555c0 12-5 22-13 30s-18 13-30 13h-427c-12 0-22-5-30-13s-13-18-13-30v-555zM725 213v-43c0-35-14-67-38-90s-55-38-90-38h-171c-35 0-67 14-90 38s-38 55-38 90v43h-171c-24 0-43 19-43 43s19 43 43 43h43v555c0 35 14 67 38 90s55 38 90 38h427c35 0 67-14 90-38s38-55 38-90v-555h43c24 0 43-19 43-43s-19-43-43-43zM384 213v-43c0-12 5-22 13-30s18-13 30-13h171c12 0 22 5 30 13s13 18 13 30v43z",unlock:"M213 512h597c12 0 22 5 30 13s13 18 13 30v299c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-299c0-12 5-22 13-30s18-13 30-13zM341 427v-128c-0-47 19-90 50-121 31-31 73-50 120-50 44 0 83 16 113 43 27 24 47 57 55 94 5 23 27 38 50 33s38-27 33-50c-12-56-41-105-82-141-45-40-105-64-170-64-71 0-135 29-181 75s-75 110-75 181v128h-43c-35 0-67 14-90 38s-38 55-38 90v299c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-299c0-35-14-67-38-90s-55-38-90-38z",upload:"M853 640v171c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-171c0-24-19-43-43-43s-43 19-43 43v171c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-171c0-24-19-43-43-43s-43 19-43 43zM469 231v409c0 24 19 43 43 43s43-19 43-43v-409l141 141c17 17 44 17 60 0s17-44 0-60l-213-213c-4-4-9-7-14-9-10-4-22-4-33 0-5 2-10 5-14 9l-213 213c-17 17-17 44 0 60s44 17 60 0z",uploadCloud:"M469 615v281c0 24 19 43 43 43s43-19 43-43v-281l98 98c17 17 44 17 60 0s17-44 0-60l-171-171c-4-4-9-7-14-9s-11-3-16-3c-11 0-22 4-30 13l-171 171c-17 17-17 44 0 60s44 17 60 0zM890 822c62-34 105-90 123-152s13-133-21-195c-29-53-74-92-126-114-31-13-64-20-98-20h-22c-31-88-91-158-167-203-85-50-188-67-291-41s-185 92-235 177-67 188-41 291c16 61 46 116 84 158 16 18 43 19 60 3s19-43 3-60c-29-33-53-75-65-123-21-80-7-160 32-226s103-117 183-138 160-7 226 32 117 103 138 183c5 19 22 32 41 32h53c23 0 45 5 66 13 35 14 65 40 84 76 23 41 26 88 14 130s-41 79-82 102c-21 11-28 37-17 58s37 28 58 17z",user:"M896 896v-85c0-59-24-112-62-151s-92-62-151-62h-341c-59 0-112 24-151 62s-62 92-62 151v85c0 24 19 43 43 43s43-19 43-43v-85c0-35 14-67 38-90s55-38 90-38h341c35 0 67 14 90 38s38 55 38 90v85c0 24 19 43 43 43s43-19 43-43zM725 299c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM640 299c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90z",userMinus:"M725 896v-85c0-59-24-112-62-151s-92-62-151-62h-299c-59 0-112 24-151 62s-62 92-62 151v85c0 24 19 43 43 43s43-19 43-43v-85c0-35 14-67 38-90s55-38 90-38h299c35 0 67 14 90 38s38 55 38 90v85c0 24 19 43 43 43s43-19 43-43zM576 299c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM491 299c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90zM981 427h-256c-24 0-43 19-43 43s19 43 43 43h256c24 0 43-19 43-43s-19-43-43-43z",userPlus:"M725 896v-85c0-59-24-112-62-151s-92-62-151-62h-299c-59 0-112 24-151 62s-62 92-62 151v85c0 24 19 43 43 43s43-19 43-43v-85c0-35 14-67 38-90s55-38 90-38h299c35 0 67 14 90 38s38 55 38 90v85c0 24 19 43 43 43s43-19 43-43zM576 299c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM491 299c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90zM981 427h-85v-85c0-24-19-43-43-43s-43 19-43 43v85h-85c-24 0-43 19-43 43s19 43 43 43h85v85c0 24 19 43 43 43s43-19 43-43v-85h85c24 0 43-19 43-43s-19-43-43-43z",userX:"M725 896v-85c0-59-24-112-62-151s-92-62-151-62h-299c-59 0-112 24-151 62s-62 92-62 151v85c0 24 19 43 43 43s43-19 43-43v-85c0-35 14-67 38-90s55-38 90-38h299c35 0 67 14 90 38s38 55 38 90v85c0 24 19 43 43 43s43-19 43-43zM576 299c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM491 299c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90zM951 311l-77 77-77-77c-17-17-44-17-60 0s-17 44 0 60l77 77-77 77c-17 17-17 44 0 60s44 17 60 0l77-77 77 77c17 17 44 17 60 0s17-44 0-60l-77-77 77-77c17-17 17-44 0-60s-44-17-60 0z",users:"M768 896v-85c0-59-24-112-62-151s-92-62-151-62h-341c-59 0-112 24-151 62s-62 92-62 151v85c0 24 19 43 43 43s43-19 43-43v-85c0-35 14-67 38-90s55-38 90-38h341c35 0 67 14 90 38s38 55 38 90v85c0 24 19 43 43 43s43-19 43-43zM597 299c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM512 299c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90zM1024 896v-85c-0-53-19-102-52-139-28-32-65-56-108-67-23-6-46 8-52 30s8 46 30 52c26 7 48 21 65 41 19 22 31 51 31 83v85c0 24 19 43 43 43s43-19 43-43zM672 175c34 9 62 31 78 59s23 63 14 97c-8 29-25 54-47 70-13 10-29 17-45 22-23 6-36 29-30 52s29 36 52 30c27-7 53-19 75-36 38-28 66-69 79-118 15-57 5-115-23-162s-74-83-131-98c-23-6-46 8-52 31s8 46 31 52z",video:"M939 382v261l-183-130zM128 171c-35 0-67 14-90 38s-38 55-38 90v427c0 35 14 67 38 90s55 38 90 38h469c35 0 67-14 90-38s38-55 38-90v-130l231 165c19 14 46 9 60-10 5-8 8-16 8-25v-427c0-24-19-43-43-43-9 0-18 3-25 8l-231 165v-130c0-35-14-67-38-90s-55-38-90-38zM128 256h469c12 0 22 5 30 13s13 18 13 30v427c0 12-5 22-13 30s-18 13-30 13h-469c-12 0-22-5-30-13s-13-18-13-30v-427c0-12 5-22 13-30s18-13 30-13z",videoOff:"M455 256h143c12 0 22 5 30 13s13 18 13 30v143c0 12 5 22 13 30l43 43c15 15 38 17 55 4l188-136v343c0 24 19 43 43 43s43-19 43-43v-427c0-9-3-17-8-25-14-19-40-23-60-10l-227 164-4-4v-125c0-35-14-67-38-90s-55-38-90-38h-143c-24 0-43 19-43 43s19 43 43 43zM196 256l444 444v25c0 12-5 22-13 30s-18 13-30 13h-469c-12 0-22-5-30-13s-13-18-13-30v-427c0-12 5-22 13-30s18-13 30-13zM13 73l99 99c-29 4-54 17-74 36-23 23-38 55-38 90v427c0 35 14 67 38 90s55 38 90 38h469c35 0 67-14 90-38 11-11 21-25 27-40l236 236c17 17 44 17 60 0s17-44 0-60l-939-939c-17-17-44-17-60 0s-17 44 0 60z",volume:"M427 302v420l-144-115c-7-6-17-9-27-9h-128v-171h128c9 0 19-3 27-9zM443 180l-202 161h-156c-24 0-43 19-43 43v256c0 24 19 43 43 43h156l202 161c18 15 45 12 60-7 6-8 9-17 9-27v-597c0-24-19-43-43-43-10 0-19 4-27 9z",volumeLow:"M427 302v420l-144-115c-7-6-17-9-27-9h-128v-171h128c9 0 19-3 27-9zM443 180l-202 161h-156c-24 0-43 19-43 43v256c0 24 19 43 43 43h156l202 161c18 15 45 12 60-7 6-8 9-17 9-27v-597c0-24-19-43-43-43-10 0-19 4-27 9zM633 391c33 33 50 77 50 121s-17 87-50 121c-17 17-17 44 0 60s44 17 60 0c50-50 75-116 75-181s-25-131-75-181c-17-17-44-17-60 0s-17 44 0 60z",volumeHigh:"M427 302v420l-144-115c-7-6-17-9-27-9h-128v-171h128c9 0 19-3 27-9zM443 180l-202 161h-156c-24 0-43 19-43 43v256c0 24 19 43 43 43h156l202 161c18 15 45 12 60-7 6-8 9-17 9-27v-597c0-24-19-43-43-43-10 0-19 4-27 9zM783 241c75 75 112 173 112 272 0 98-37 196-112 271-17 17-17 44 0 60s44 17 60 0c92-92 137-212 137-332 0-120-46-240-137-332-17-17-44-17-60 0s-17 44 0 60zM633 391c33 33 50 77 50 121s-17 87-50 121c-17 17-17 44 0 60s44 17 60 0c50-50 75-116 75-181s-25-131-75-181c-17-17-44-17-60 0s-17 44 0 60z",volumeOff:"M427 302v420l-144-115c-7-6-17-9-27-9h-128v-171h128c9 0 19-3 27-9zM443 180l-202 161h-156c-24 0-43 19-43 43v256c0 24 19 43 43 43h156l202 161c18 15 45 12 60-7 6-8 9-17 9-27v-597c0-24-19-43-43-43-10 0-19 4-27 9zM695 414l98 98-98 98c-17 17-17 44 0 60s44 17 60 0l98-98 98 98c17 17 44 17 60 0s17-44 0-60l-98-98 98-98c17-17 17-44 0-60s-44-17-60 0l-98 98-98-98c-17-17-44-17-60 0s-17 44 0 60z",wifi:"M241 568c84-70 186-102 287-98 92 3 184 36 259 98 18 15 45 12 60-6s12-45-6-60c-90-74-199-114-310-118-121-4-245 34-345 118-18 15-21 42-5 60s42 21 60 5zM89 416c125-110 282-163 437-159 147 3 293 57 410 160 18 16 45 14 60-4s14-45-4-60c-133-116-298-177-464-181-176-4-353 56-495 181-18 16-19 43-4 60s43 19 60 4zM389 722c42-30 92-42 140-39 38 3 75 16 108 39 19 14 46 9 59-10s9-46-10-59c-45-31-97-50-150-54-67-5-137 12-196 54-19 14-24 40-10 59s40 24 59 10zM512 896c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43z",wifiOff:"M695 510c34 16 64 37 88 57 18 15 45 13 60-4s13-45-4-60c-30-26-67-50-106-70-21-10-47-2-57 20s-2 47 20 57zM460 258c172-14 333 41 456 142 6 5 12 10 18 16 18 16 45 14 60-4s14-45-4-60c-7-6-14-12-21-18-140-114-323-177-517-161-23 2-41 22-39 46s22 41 46 39zM389 722c42-30 92-42 140-39 38 3 75 16 108 39 10 7 22 9 33 7l282 282c17 17 44 17 60 0s17-44 0-60l-544-544c-2-3-5-5-7-7l-387-387c-17-17-44-17-60 0s-17 44 0 60l174 174c-54 27-106 62-155 105-18 16-19 43-4 60s43 19 60 4c51-45 107-80 162-105l99 99c-58 19-114 50-164 92-18 15-20 42-5 60s42 20 60 5c54-45 116-75 179-88l119 119c-1-0-2-0-3-0-67-5-137 12-196 54-19 14-24 40-10 59s40 24 59 10zM512 896c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43z",x:"M226 286l226 226-226 226c-17 17-17 44 0 60s44 17 60 0l226-226 226 226c17 17 44 17 60 0s17-44 0-60l-226-226 226-226c17-17 17-44 0-60s-44-17-60 0l-226 226-226-226c-17-17-44-17-60 0s-17 44 0 60z",zoomIn:"M684 677c-1 1-3 2-4 4s-3 3-4 4c-54 52-127 84-207 84-82 0-157-33-211-87s-87-129-87-211 33-157 87-211 129-87 211-87 157 33 211 87 87 129 87 211c0 80-32 153-84 207zM926 866l-157-157c53-66 84-149 84-240 0-106-43-202-112-272s-166-112-272-112-202 43-272 112-112 166-112 272 43 202 112 272 166 112 272 112c91 0 174-31 240-84l157 157c17 17 44 17 60 0s17-44 0-60zM341 512h85v85c0 24 19 43 43 43s43-19 43-43v-85h85c24 0 43-19 43-43s-19-43-43-43h-85v-85c0-24-19-43-43-43s-43 19-43 43v85h-85c-24 0-43 19-43 43s19 43 43 43z",zoomOut:"M684 677c-1 1-3 2-4 4s-3 3-4 4c-54 52-127 84-207 84-82 0-157-33-211-87s-87-129-87-211 33-157 87-211 129-87 211-87 157 33 211 87 87 129 87 211c0 80-32 153-84 207zM926 866l-157-157c53-66 84-149 84-240 0-106-43-202-112-272s-166-112-272-112-202 43-272 112-112 166-112 272 43 202 112 272 166 112 272 112c91 0 174-31 240-84l157 157c17 17 44 17 60 0s17-44 0-60zM341 512h256c24 0 43-19 43-43s-19-43-43-43h-256c-24 0-43 19-43 43s19 43 43 43z",discord:{p:["M1145 86c-81-38-174-68-272-85l-7-1c-11 19-23 43-34 68l-2 5c-46-7-100-12-155-12s-108 4-160 12l6-1c-13-29-25-53-38-76l2 4c-105 18-198 48-286 89l7-3c-176 261-224 516-200 766v0c98 73 211 131 334 169l8 2c26-34 50-73 71-113l2-5c-45-17-83-35-119-57l3 2c10-7 19-14 28-21 100 48 218 76 342 76s242-28 347-78l-5 2c9 8 19 15 28 21-33 20-71 38-111 53l-5 2c23 45 47 84 75 120l-2-2c131-40 244-99 345-174l-3 2c28-291-48-543-201-767zM451 698c-67 0-122-60-122-135s53-135 121-135 123 61 122 135-54 135-122 135zM900 698c-67 0-122-60-122-135s53-135 122-135 123 61 121 135-54 135-121 135z"],w:1351},tiktok:"M535 1c56-1 111-0 167-1 3 65 27 132 75 178 48 47 115 69 181 76v172c-61-2-123-15-179-41-24-11-47-25-69-40-0 125 0 249-1 373-3 60-23 119-58 168-56 82-153 135-252 137-61 3-122-13-174-44-86-51-147-144-156-244-1-21-1-43-0-64 8-81 48-159 110-212 71-61 170-91 262-73 1 63-2 126-2 189-42-14-92-10-129 16-27 17-47 44-58 75-9 22-6 46-6 69 10 70 78 129 149 122 48-0 93-28 118-69 8-14 17-29 17-45 4-76 3-152 3-229 0-172-0-343 1-515z",instagram:{p:["M512 92c137 0 153 1 207 3 50 2 77 11 95 18 24 9 41 20 59 38 18 18 29 35 38 59 7 18 15 45 18 95 2 54 3 70 3 207s-1 153-3 207c-2 50-11 77-18 95-9 24-20 41-38 59-18 18-35 29-59 38-18 7-45 15-95 18-54 2-70 3-207 3s-153-1-207-3c-50-2-77-11-95-18-24-9-41-20-59-38-18-18-29-35-38-59-7-18-15-45-18-95-2-54-3-70-3-207s1-153 3-207c2-50 11-77 18-95 9-24 20-41 38-59 18-18 35-29 59-38 18-7 45-15 95-18 54-2 70-3 207-3zM512 0c-139 0-156 1-211 3-54 2-92 11-124 24-34 13-62 31-91 59-29 28-46 57-59 91-13 33-21 70-24 124-2 55-3 72-3 211s1 156 3 211c2 54 11 92 24 124 13 34 31 62 59 91 28 28 57 46 91 59 33 13 70 21 124 24 55 2 72 3 211 3s156-1 211-3c54-2 92-11 124-24 34-13 62-31 91-59s46-57 59-91c13-33 21-70 24-124 2-55 3-72 3-211s-1-156-3-211c-2-54-11-92-24-124-13-34-30-63-59-91-28-28-57-46-91-59-33-13-70-21-124-24-55-3-72-3-211-3v0z","M512 249c-145 0-263 118-263 263s118 263 263 263 263-118 263-263c0-145-118-263-263-263zM512 683c-94 0-171-76-171-171s76-171 171-171c94 0 171 76 171 171s-76 171-171 171z","M847 239c0 34-27 61-61 61s-61-27-61-61c0-34 27-61 61-61s61 27 61 61z"]},linkedin:"M928 0h-832c-53 0-96 43-96 96v832c0 53 43 96 96 96h832c53 0 96-43 96-96v-832c0-53-43-96-96-96zM384 832h-128v-448h128v448zM320 320c-35 0-64-29-64-64s29-64 64-64c35 0 64 29 64 64s-29 64-64 64zM832 832h-128v-256c0-35-29-64-64-64s-64 29-64 64v256h-128v-448h128v79c26-36 67-79 112-79 80 0 144 72 144 160v288z",eyedropper:"M987 37c-50-50-131-50-181 0l-172 172-121-121-136 136 106 106-472 472c-8 8-11 19-10 29h-0v160c0 18 14 32 32 32h160c0 0 3 0 4 0 9 0 18-4 25-11l472-472 106 106 136-136-121-121 172-172c50-50 50-131 0-181zM173 960h-109v-109l470-470 109 109-470 470z",heart:{p:["M1088 358c0 86-37 164-96 218h0l-320 320c-32 32-64 64-96 64s-64-32-96-64l-320-320c-59-54-96-131-96-218 0-162 132-294 294-294 86 0 164 37 218 96 54-59 131-96 218-96 162 0 294 132 294 294z"],w:1152},facebook:"M928 0h-832c-53 0-96 43-96 96v832c0 53 43 96 96 96h416v-448h-128v-128h128v-64c0-106 86-192 192-192h128v128h-128c-35 0-64 29-64 64v64h192l-32 128h-160v448h288c53 0 96-43 96-96v-832c0-53-43-96-96-96z",twitter:"M1024 226c-38 17-78 28-121 33 43-26 77-67 92-116-41 24-86 42-133 51-38-41-93-66-153-66-116 0-210 94-210 210 0 16 2 32 5 48-175-9-329-92-433-220-18 31-28 67-28 106 0 73 37 137 93 175-34-1-67-11-95-26 0 1 0 2 0 3 0 102 72 187 169 206-18 5-36 7-55 7-14 0-27-1-40-4 27 83 104 144 196 146-72 56-162 90-261 90-17 0-34-1-50-3 93 60 204 94 322 94 386 0 598-320 598-598 0-9-0-18-1-27 41-29 77-66 105-109z",youtube:"M1014 307c0 0-10-71-41-102-39-41-83-41-103-43-143-10-358-10-358-10h-0c0 0-215 0-358 10-20 2-64 3-103 43-31 31-41 102-41 102s-10 83-10 166v78c0 83 10 166 10 166s10 71 41 102c39 41 90 39 113 44 82 8 348 10 348 10s215-0 358-11c20-2 64-3 103-43 31-31 41-102 41-102s10-83 10-166v-78c-0-83-10-166-10-166zM406 645v-288l277 144-277 143z",game:{p:["M1056 194v-2h-672c-177 0-320 143-320 320s143 320 320 320c105 0 198-50 256-128h128c58 78 151 128 256 128 177 0 320-143 320-320 0-166-126-302-288-318zM576 576h-128v128h-128v-128h-128v-128h128v-128h128v128h128v128zM960 576c-35 0-64-29-64-64s29-64 64-64 64 29 64 64-29 64-64 64zM1152 576c-35 0-64-29-64-64 0-35 29-64 64-64s64 29 64 64c0 35-29 64-64 64z"],w:1408},google:"M512 0c-283 0-512 229-512 512s229 512 512 512 512-229 512-512-229-512-512-512zM520 896c-212 0-384-172-384-384s172-384 384-384c104 0 190 38 257 100l-104 100c-29-27-78-59-153-59-131 0-238 109-238 242s107 242 238 242c152 0 209-109 218-166h-218v-132h363c3 19 6 38 6 64 0 219-147 375-369 375z",github:"M512 13c-283 0-512 229-512 512 0 226 147 418 350 486 26 5 35-11 35-25 0-12-0-53-1-95-142 31-173-60-173-60-23-59-57-75-57-75-46-32 4-31 4-31 51 4 78 53 78 53 46 78 120 56 149 43 5-33 18-56 33-68-114-13-233-57-233-253 0-56 20-102 53-137-5-13-23-65 5-136 0 0 43-14 141 52 41-11 85-17 128-17 44 0 87 6 128 17 98-66 141-52 141-52 28 71 10 123 5 136 33 36 53 82 53 137 0 197-120 240-234 253 18 16 35 47 35 95 0 69-1 124-1 141 0 14 9 30 35 25 203-68 350-260 350-486 0-283-229-512-512-512z",npm:"M0 0v1024h1024v-1024h-1024zM832 832h-128v-512h-192v512h-320v-640h640v640z",xr:{p:["M801 116c465 0 735 49 735 396 0 279-197 396-342 396-218 0-307-165-393-165-110 0-175 165-393 165-145 0-342-117-342-396 0-347 270-396 735-396zM949 285c-16-16-41-16-57 0-16 16-16 41-0 57v0l322 322c16 16 41 16 57 0 16-16 16-41 0-57-9-9-18-18-26-26l-4-4c-5-5-9-9-14-14l-4-4c-32-32-65-64-132-131l-8-8c-1-1-3-3-4-4l-18-18c-31-31-68-68-113-113zM801 272c-22 0-40 18-40 40v0 322c0 22 18 40 40 40 22 0 40-18 40-40 0-1 0-2 0-3l0-6c0-3 0-6 0-8l0-5c0-1 0-2 0-2l0-6c0-1 0-1 0-2l0-7c0-1 0-1 0-2l0-8c0-0 0-1 0-1l-0-20c-0-0-0-1-0-1l-0-12c-0-1-0-1-0-2l-0-15c-0-1-0-2-0-2l-0-14c-0-1-0-2-0-3l-0-22c-0-1-0-3-0-4l-0-28c-0-2-0-4-0-5l-0-50c-0-2-0-5-0-7l-0-84c0-22-18-40-40-40zM710 282c-16-16-41-16-57 0v0l-134 134-131-131c-16-16-41-16-57 0-16 16-16 41-0 57v0l131 131-132 132c-15 16-15 41 1 56 16 16 41 16 57 0v0l131-131 134 134c16 16 41 16 57 0 16-16 16-41 0-57v0l-134-133 134-133c16-16 16-41 0-57z"],w:1600},xinjs:{p:["M937 548c14 14 14 37 0 51l-113 113-178 178c-14 14-37 14-51-0-14-14-14-37 0-51l290-291c14-14 37-14 51 0zM924 560c-7-7-19-7-27-0l-0 0-290 291c-7 7-7 20 0 27 7 7 19 7 27 0l0-0 12-12 21-21 231-232 26-26c7-7 7-20-0-27z","M512 900c20 0 36-16 36-36v-291c0-20-16-36-36-36-20 0-36 16-36 36v291c0 20 16 36 36 36zM511 882c-10 0-19-8-19-19l-0-1v-292c0-11 9-19 19-19 10 0 19 8 19 19l0 1 0 40-0 131-0 121c0 11-9 19-19 19z","M429 889c14-14 14-37 0-52l-121-121 121-121c14-14 14-37 0-52-14-14-37-14-51 0l-121 121-119-119c-14-14-37-14-51 0-14 14-14 37-1 51l1 1 119 119-119 119c-14 14-14 37 0 52 14 14 37 14 51 0l119-119 121 121c14 14 37 14 51 0zM418 876c-7 7-19 7-27 0l-0-0-133-133-131 130c-7 7-20 7-27-0-7-7-7-19-0-27l0-0 131-130-131-131c-7-7-7-19 0-27 7-7 19-7 27-0l0 0 131 130 133-133c7-7 20-7 27 0 7 7 7 19 0 27l-0 0-134 132 134 132c7 7 7 19 0 27l-0 0z","M594 142c14-14 37-14 51-0 205 205 222 221 291 290 14 14 14 37 0 51-14 14-37 14-51 0l-291-290c-14-14-14-37 0-51z","M511 130c20 0 36 16 36 36 0 290 0 193 0 291 0 20-16 36-36 36-20 0-36-16-36-36v-291c0-20 16-36 36-36z","M378 140c14-14 37-14 51 0 14 14 14 37 0 51l-121 120 121 120c14 14 14 37 0 51-14 14-37 14-51 0l-121-121-119 118c-14 14-37 14-51-0-14-14-14-37-1-51l1-1 119-118-119-118c-14-14-14-37 0-51 14-14 37-14 51-0l119 118 121-121z"]},xinie:"M668 46c10 0 20 4 29 8 23 12 36 33 29 46v0l-25 60c3 8 5 17 6 25 6 41-8 83-32 117-14 19-32 36-53 47 23 16 42 37 57 60 51 23 98 75 99 133 0 16-3 30-9 45-14 33-38 58-72 71-8 19-4 10-13 27-42 78-166 124-167 205-0 66 36 122 105 134-24 0-40 0-53 0l-3 0c-0 0-1 0-1 0l-7 0c-1 0-2 0-2-0l-8-0c-0-0-1-0-1-0l-4-0c-0-0-1-0-1-0l-2-0c-0-0-1-0-1-0l-3-0c-0-0-1-0-1-0l-3-0c-0-0-1-0-1-0l-4-0c-0-0-1-0-1-0l-14 0c-0 0-1 0-1 0l-3 0c-0 0-1 0-2 0l-3 0c-8 0-17 0-28 0-71-21-128-71-169-131-77-115-98-252-62-384-35-38-39-85-17-131 7-13 16-26 27-36 36-35 96-50 143-29 7-4 15-6 23-8 6-2 13-3 20-4-9-22-6-46 1-68 13-37 62-57 62-57 0 0 5-27 32-56 19-19 55-29 82-24v0l27-39c6-9 15-10 25-11zM453 563l0 0c7 11 51 80 131 110 101 39 109-12 109-13-168 9-232-86-239-97zM553 504c-48-2-85 16-152 44-53 22-144-28-144-28s66 46 154 44c20-0 32-3 42-6 7-2 20-32 96-34 6-0 13-0 21-0l3 0c5 0 10 0 14 0l3 0 3 0c38 1 75 3 75 3s-69-20-115-22zM400 320c0 0 0 0 0 1l0 0c2 7 9 35 2 51-9 23-23 36-25 37l-0 0 0 0c4 0 95 8 138 22 52 17 98 51 99 52l0 0c0 0-53-50-98-68-38-15-109-18-109-18s22-26 9-48c-12-22-19-30-19-30zM633 102l0 0c2 1 12 4 36 20 24 17 31 34 31 34 1-2 1-3 2-5l1-1 0-1c0-0 0-1 1-1l0-1c3-8 6-15-4-24-12-11-60-20-66-21l-0-0z",html5:"M61 0l82 922 369 102 370-103 82-921h-903zM785 301h-433l10 116h412l-31 347-232 64-232-64-16-178h113l8 90 126 34 0-0 126-34 13-147h-392l-30-342h566l-10 113z",bug:{p:["M933 549c0 20-17 37-37 37h-128c0 71-15 125-38 166l119 119c14 14 14 37 0 51-7 7-17 11-26 11s-19-3-26-11l-113-113s-75 69-172 69v-512h-73v512c-103 0-179-75-179-75l-105 118c-7 8-17 12-27 12-9 0-17-3-25-9-15-14-16-37-3-52l115-130c-20-39-33-90-33-157h-128c-20 0-37-17-37-37s17-37 37-37h128v-168l-99-99c-14-14-14-37 0-51s37-14 51 0l99 99h482l99-99c14-14 37-14 51 0s14 37 0 51l-99 99v168h128c20 0 37 17 37 37zM658 219h-366c0-101 82-183 183-183s183 82 183 183z"],w:951}};/*!
# icons

<center>
  <xin-icon icon="settings" style="--font-size: 128px"></xin-icon>
  <xin-icon icon="xr" style="--font-size: 96px"></xin-icon>
  <xin-icon icon="rgb" style="--font-size: 128px"></xin-icon>
</center>

A library that provides `ElementCreator` functions that produce SVG icons. It leverages `xinjs`'s
`svgElements` proxy and is intended to address all the key use-cases for SVG icons in web
applications along with being very easy to extend and maintain.

> ### Supported Use Cases
> - inline SVGs that can be styled by CSS (for buttons, etc.)
> - No build process magic needed (it's "just javascript")
> - icons can be rendered  as data urls, e.g. to insert into CSS
> - highly optimized and compressible
> - support for color icons (still allowing with CSS styling)

## icons

`icons` is a proxy that generates an `ElementCreator` for a given icon on demand,
e.g. `icons.chevronDown()` produces an `<svg>` element containing a downward-pointing chevron
icon with the class `icon-chevron-down`.

```js
const { icons, svgIcon } = xinjsui
const { div } = xinjs.elements

preview.append(...Object.keys(icons).sort().map(iconName => div(
  { class: 'tile' },
  svgIcon({icon: iconName, size: 16}),
  div(iconName)
)))
```
```css
.preview {
  display: flex;
  flex-wrap: wrap;
  padding: var(--spacing);
  gap: var(--spacing);
  overflow: hidden scroll !important;
}

.preview svg {
  fill: var(--text-color);
}

.preview .tile {
  display: inline-block;
  width: 160px;
  text-align: center;
  cursor: pointer;
  background: #fff8;
  padding: 10px;
  border-radius: 5px;
}

.preview .tile:hover {
  --text-color: var(--brand-color);
}

.preview .tile > div {
  font-family: Menlo, Monaco, monospace;
  whitespace: no-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: 1.5;
}
```

These icons are completely unstyled and can be colored using the css `fill` property. This will
probably be broken out as a standalone library to allow the use of whatever icons you like
(its source data is currently generated from an [icomoon](https://icomoon.com/app)
`selection.json` file, but could just as easily be generated from a directory full of SVGs).

## Adding and redefining icons

`defineIcon(name: string, icon: IconSpec | string)` adds or replaces your own icons

```
interface IconSpec {
  p: string[]  // paths
  c?: string[] // colors of the paths in p
  w: number    // width of icon
  h: number    // height of icon
}
```

The simplest option is simply to pass the `path` attribute (if the icon has a single path) while more
complex icons can be provide an `IconSpec` structure, specifying multiple paths (and colors if so
desired).

This utility loads SVG files (they should only contain paths with no strokes, transforms, or nesting)
and generates an `IconSpec`. It renders the original icon side-by-side with the `<xin-icon>` version.
**If the icon on the right appears garbled, it probably needs to be simplified**.

```js
const { defineIcon, xinIcon } = xinjsui

const fileInput = preview.querySelector('input')
const icon = preview.querySelector('.icon')
const svgContainer = preview.querySelector('.svg')
const iconSpec = preview.querySelector('textarea')
const simplify = preview.querySelector('.simplify')

function jsObject(o) {
  let json = JSON.stringify(o, null, 2)
  return json.replace(/"(\w+)":/g, '$1:')
}

fileInput.addEventListener('change', () => {
  if (fileInput.files.length) {
    const reader = new FileReader();
    reader.onload = function(e) {
      svgContainer.innerHTML = e.target.result
      const svg = svgContainer.querySelector('svg')
      const paths = Array.from(svg.querySelectorAll('path')).map(path => ({
        p: path.getAttribute('d'),
        c: path.style.fill
      }))
      const isMulticolor = [...new Set(paths.map(path => path.c))].length > 1
      let { width, height } = svg.viewBox.baseVal

      if (simplify.checked) {
        const scale = 1024 / height
        height = 1024
        width = width * scale

        paths.forEach(path => {
          path.p = path.p.replace(/\d+\.\d+/g, x => (Number(x) * scale).toFixed(0))
        })
      }

      if (width === 1024 && height === 1024 && paths.length === 1) {
        iconSpec.value = jsObject(paths[0])
      } else {
        const spec = {
          p: paths.map(path => path.p),
          w: width,
          h: height
        }
        if (isMulticolor) {
          spec.c = paths.map(path => path.c)
        }
        iconSpec.value = jsObject(spec)
        defineIcon('svgLoader', spec)
        icon.setAttribute('icon', 'svgLoader')
        fileInput.value = ''
      }
    };
    reader.readAsText(fileInput.files[0]);
  }
})
```
```html
<div class="svg-loader">
  <label>
    <span>Load an SVG file</span>
    <input accept="image/svg+xml" type="file">
  </label>
  <label style="flex-direction: row">
    <input type="checkbox" class="simplify" checked>
    <span>Scale to 1024 high and round floats?</span>
  </label>
  <div class="side-by-side">
    <label>
      <span>IconSpec</span>
      <textarea></textarea>
    </label>
    <label>
      <span>Icons</span>
      <div class="side-by-side">
        <div class="svg"></div>
        <xin-icon class="icon"></xin-icon>
      </div>
    </label>
  </div>
</div>
```
```css
.preview .svg-loader,
.preview .svg-loader label {
  display: flex;
  width: 100%;
  align-items: stretch;
  flex-direction: column;
}

.preview .svg-loader {
  gap: 10px;
  height: 100%;
}

.preview .svg-loader textarea {
  flex: 1;
  resize: none;
  font-family: Monaco, monospace;
  font-size: 12px;
  line-height: 15px;
}

.preview .side-by-side {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.preview .svg-loader .icon {
  position: relative;
}

.preview .svg-loader svg {
  height: 128px;
  width: 128px;
}

.preview xin-icon:not([icon]) {
  display: none;
}

.preview .svg-loader xin-icon {
  --font-size: 128px;
}
```

## `<xin-icon>`

`<xin-icon>` is a simple component that lets you embed icons as HTML. Check the CSS tab to see
how it's styled.

`<xin-icon>` supports four attributes:

- `size` (defaults to 0) if non-zero sets the height of the icon in pixels
- `icon` is the name of the icon
- `color` is the fill color (if you don't want to style it using CSS)
- `stroke` is the stroke color
- `stroke-width` (defaults to 1) is the width of the stroke assuming the icon's viewBox is 1024 units tall but the
  icon is rendered at 32px (so it's multiplied by 32).

> **Aside**: the tool used to build the icon library scales up the viewBox to 1024 tall and then rounds
> all coordinates to nearest integer on the assumption that this is plenty precise enough for icons and
> makes everything smaller and easier to compress.

```html
<xin-icon size="64" icon="game" color="var(--brand-color)"></xin-icon>
<xin-icon size="96" icon="game" color="yellow" stroke="black"></xin-icon>
<xin-icon size="64" icon="star"
 color="linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"
></xin-icon>
<xin-icon size="64" icon="star"
 color="linear-gradient(345deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"
></xin-icon>
<xin-icon size="64" icon="star"
 color="linear-gradient(180deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"
></xin-icon>
<xin-icon size="64" icon="star"
 color="linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"
></xin-icon>
```
```css
xin-icon.demo-2 > svg {
  height: 96px;
}
```

**CSS-to-SVG Gradient** support is work-in-progress and experimental (there seem to be
…issues… with how SVG  gradients behave). The goal is to be able to use CSS gradients
to generate SVG gradients (which are kind of a pain) on-the-fly. Use at your own risk.

## SVGs as data-urls

```js
const { elements } = xinjs
const { icons, svg2DataUrl } = xinjsui

preview.append(
  elements.span({
    style: {
      display: 'inline-block',
      width: '120px',
      height: '24px',
      content: '" "',
      background: svg2DataUrl(icons.star(), 'none', '#bbb', 3)
    }
  }),
  elements.span({
    style: {
      display: 'inline-block',
      width: '120px',
      height: '24px',
      content: '" "',
      background: svg2DataUrl(icons.star(), 'gold', 'orange', 2)
    }
  }),
)
```

`svg2DataUrl(svg: SVGElement, fill?: string, stroke?: string): string` is provided as a
utility for converting SVG elements into data-urls (e.g. for incorporation into
CSS properties. (It's used by the `<xin-3d>` component to render the XR widget.)

If you're using `SVGElement`s created using the `icons` proxy, you'll want to provide `fill` and/or
`stroke` values, because images loaded via css properties cannot be styled.

## Color Icons

```html
<xin-icon icon="xinjsColor" class="demo-icon"></xin-icon>
<xin-icon icon="xinjsColor" class="demo-icon recolored"></xin-icon>
```
```css
.demo-icon {
  --font-size: 160px
}

.recolored {
  --icon-fill-0: blue;
  --icon-fill-1: white;
  --icon-fill-2: red;
}
```

Each path inside an icon can be individually colored. When the icon is hydrated,
the colors will be assigned to a (minimal) set of CSS-variables (`--icon-fill-0`, etc.)
and these can be overridden in the usual way.

## Missing Icons

If you ask for an icon that isn't defined, the `icons` proxy will print a warning to console
and render a `square` (in fact, `icons.square()`) as a fallback.

## Why?

The motivation behind this is to avoid dealing with tooling issues that inevitably result from
integrating custom icon fonts or stylesheets needed by code libraries (and an icon-font also needs
a style-sheet. Importing code is simply easier (and as a bonus, more compact and flexible, and there's
no question as to when the stuff is available).

Until I wrote this library, I had settled on icomoon.io's system for generating and maintaining
custom icon fonts for managing icons within a project, but this makes exporting UI elements
with icons in them fiddly, and I looked at other UI libraries and found similar issues.

Even when just using this approach for projects over which I had full control, there were issues
with syncing icons with CSS (e.g. if you want to attach an element to a pseudo-element). `icons`
in combination with `svg2DataUrl` solves all these problems.

Basically, I wanted an icon solution that "just works" and this is it.

Internally, icons are stored as javascript path data.

These icons are mainly sourced from [feather](https://github.com/feathericons/feather), but
all the icons have been processed to have integer coordinates in a `viewBox` typically scaled to 1024  &times; 1024.
*/var{svg:G2,path:S3}=K1;function N2(t){let i=y1[t];if(i===void 0)console.warn(`icon ${t} not found`),i=y1.square;return typeof i!=="string"?i:{w:1024,h:1024,p:[i]}}var lt=(t,i)=>{y1[t]=i},T3=(t,i,e,s=1)=>{if(i!==void 0){for(let o of[...t.querySelectorAll("path")])if(o.setAttribute("fill",i),e!==void 0)o.setAttribute("stroke",e),o.setAttribute("stroke-width",String(Number(s)*32))}return t.setAttribute("xmlns","http://www.w3.org/2000/svg"),`url(data:image/svg+xml;charset=UTF-8,${encodeURIComponent(t.outerHTML)})`},T=new Proxy(y1,{get(t,i){let e=N2(i);return e===void 0?void 0:(...s)=>{let{w:n,h:o}=Object.assign({w:1024,h:1024},e);return G2({viewBox:`0 0 ${n} ${o}`,class:"icon-"+i.replace(/([a-z])([A-Z])/g,(a,l,c)=>l+"-"+c.toLocaleLowerCase())},...s,...e.p.map((a,l)=>{let c=Array.from(new Set(e.c));return e.c?S3({d:a,style:{fill:`var(--icon-fill-${c.indexOf(e.c[l])}, ${e.c[l]})`}}):S3({d:a})}))}}});class A3 extends F{icon="";size=0;color="";stroke="";strokeWidth=1;constructor(){super();this.initAttributes("icon","size","color","stroke","strokeWidth")}render(){this.textContent="";let t={};if(this.size)t.height=this.size;if(this.stroke)t.stroke=this.stroke,t.strokeWidth=this.strokeWidth*32;if(this.color.match(/linear-gradient/)){let i=this.color.split("-")[0],[,e]=this.color.match(/[a-z-]+\((.*)\)/)||[],[,s]=e.match(/(\d+)deg/)||[],o=(e.match(/(#|rgb|hsl).*?%/g)||[]).map((h)=>{let[,d,p]=h.match(/^(.*)\s(\d+%)$/)||["black","100%"];return`<stop offset="${p}" stop-color="${s1.fromCss(d).html}" ></stop>`}).join(""),a="";if(s)a=` gradientTransform="rotate(${parseFloat(s).toFixed(0)})"`;let l=K1.defs(),c="g-"+Math.floor(Math.random()*Number.MAX_SAFE_INTEGER);l.innerHTML=`<${i}Gradient id="${c}" ${a}>${o}</${i}Gradient>`,t.fill=`url(#${c})`,this.append(T[this.icon]({style:t},l))}else t.fill=this.color,this.append(T[this.icon]({style:t}))}}var ct=A3.elementCreator({tag:"xin-icon",styleSpec:{":host":{verticalAlign:"text-bottom"}}});/*!
# 3d

A [babylonjs](https://www.babylonjs.com/) wrapper.

A `<xin-3d>` element is initialized with an `engine`, `canvas`, `scene`, and an update-loop.

If you view this example with an XR-enabled device, such as the
[Meta Quest 3](https://www.meta.com/quest/quest-3/), then you should be able to view this
as an AR scene.

```js
const { b3d, gamepadText, xrControllers, xrControllersText } = xinjsui

preview.append(b3d({
  async sceneCreated(element, BABYLON) {
    const camera = new BABYLON.FreeCamera(
      'camera',
      new BABYLON.Vector3(0, 1, -4),
      element.scene
    )
    camera.attachControl(element.parts.canvas, true)

    new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0.25, 1, -0.5))

    this.loadScene('/', 'xin3d.glb')

    const size = 1024
    const textTexture = new BABYLON.DynamicTexture('Text', size, element.scene)
    const textContext = textTexture.getContext()
    textTexture.update()

    const textMaterial = new BABYLON.StandardMaterial('Text', element.scene)
    textMaterial.diffuseTexture = textTexture
    textMaterial.emissiveTexture = textTexture
    textMaterial.backfaceCulling = false

    const plaque = BABYLON.MeshBuilder.CreatePlane('Plaque', {size: 1}, element.scene)
    plaque.position.x = 0
    plaque.position.y = 2
    plaque.billboardMode = BABYLON.Mesh.BILLBOARDMODE_ALL
    plaque.material = textMaterial

    let controllers
    if (navigator.xr) {
      const xrHelper = await element.scene.createDefaultXRExperienceAsync({
        uiOptions: {
          sessionMode: 'immersive-ar'
        }
      })
      controllers = xrControllers(xrHelper)
    }

    const interval = setInterval(() => {
      if (document.body.contains(element)) {
        textContext.fillStyle = '#204020'
        textContext.fillRect(0, 0, size, size)
        const text = gamepadText() + '\n' + xrControllersText(controllers)
        const lines = text.split('\n')
        textContext.fillStyle = '#afa'
        textContext.font = '32px monospace'
        for(let i = 0; i < lines.length; i++) {
          const line = lines[i]
          textContext.fillText(line, 40, 70 + i * 40)
        }
        textContext.fillStyle = '#bbb'
        textContext.fillText('xinjs-xr — debug info', 40, 984)
        textTexture.update()
      } else {
        clearInterval(interval)
      }
    }, 100)
  },
}))
```
```css
.preview xin-3d {
  width: 100%;
  height: 100%;
}
```

You can access the `scene` and `engine` properties. You can also assign `sceneCreated`
and `update` callbacks that will be executed when the scene is first initialized and
before each update, respectively. (See the example, it does both.)

Both `sceneCreated` and `update` may be `async`. The component will `await` `sceneCreated`
before starting the renderLoop, but `update` is simply passed to babylon, so be careful.

By default, this component loads `babylon.js` from the [babylonjs CDN](https://doc.babylonjs.com/setup/frameworkPackages/CDN),
but if `BABYLON` is already defined (e.g. if you've bundled it) then it will use that instead.

If you need additional libraries, e.g. `https://cdn.babylonjs.com/loaders/babylonjs.loaders.min.js` for loading models such as `gltf` and `glb` files, you should load those in `sceneCreated`.

Here's a simple example of a terrain mesh comprising 125k triangles, 50% of which is being scaled using a `profileScale` function that
takes an array of numbers that use a linear profile to change the landform.

```js
const { b3d } = xinjsui
const { MoreMath } = xinjs

const debugCutoff = 0.5
const defaultProfile = [0, 1, 5, 8, 10].map(x => x/10)

const { clamp } = MoreMath
function profileScale(t = 0, bypass = false, profile = defaultProfile) {
  if (bypass) {
    return t
  }
  const count = profile.length - 1
  if (count < 1) {
    throw new Error('profile must be of length ≥ 2')
  }

  const s = clamp(0, (t + 1) / 2, 1)
  const index = Math.floor(s * count)
  const dt = (s - index / count) * count
  const min = profile[index]
  const max = profile[index + 1]
  const p = dt * (max - min) + min
  return 2 * p - 1
}

preview.append(b3d({
  async sceneCreated(element, BABYLON) {
    const { scene } = element
    const { createNoise2D } = await import('https://cdn.jsdelivr.net/npm/simplex-noise@4.0.1/+esm')

    new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0.25, 1, 2))

    const terrain = new BABYLON.Mesh('terrain', scene)
    const vertexData = new BABYLON.VertexData()

    const noise2D = createNoise2D()
    const positions = []
    const indices = []
    const gridSize = 100
    const gridResolution = 250
    const gridPoints = gridResolution + 1
    const noiseScale = 0.03
    const heightScale = 4.5
    terrain.position.y = -5
    const scale = t => t * gridSize / gridResolution - gridSize * 0.5
    for(let x = 0; x <= gridResolution; x++) {
      for(let z = 0; z <= gridResolution; z++) {
        const y =  profileScale(noise2D(scale(x) * noiseScale, scale(z) * noiseScale), x < gridResolution * debugCutoff)
        positions.push(scale(x), y * heightScale, scale(z))
        if (x > 0 && z > 0) {
          const i = x * gridPoints + z
          indices.push(
            i, i - gridPoints - 1, i - 1,
            i, i - gridPoints, i - gridPoints - 1,
          )
        }
      }
    }
    const normals = []
    BABYLON.VertexData.ComputeNormals(positions, indices, normals);

    vertexData.positions = positions
    vertexData.indices = indices
    vertexData.normals = normals
    vertexData.applyToMesh(terrain)
  },
}))
```

## loadScene

`<xin-3d>.loadScene(path: string, file: string, callBack(meshes: any[]): void)` can
be used to load `.glb` files.

## loadUI

`<xin-3d>.loadUI(options: B3dUIOptions)` loads babylonjs guis, which you can create programmatically or using the [babylonjs gui tool](https://gui.babylonjs.com/).
*/var L3=()=>{};class O3 extends F{babylonReady;BABYLON;static styleSpec={":host":{display:"block",position:"relative"},":host canvas":{width:"100%",height:"100%"},":host .babylonVRicon":{height:50,width:80,backgroundColor:"transparent",filter:"drop-shadow(0 0 4px #000c)",backgroundImage:T3(T.xr(),"#fffd"),backgroundPosition:"center",backgroundRepeat:"no-repeat",border:"none",borderRadius:5,borderStyle:"none",outline:"none",transition:"transform 0.125s ease-out"},":host .babylonVRicon:hover":{transform:"scale(1.1)"}};content=I.canvas({part:"canvas"});constructor(){super();this.babylonReady=(async()=>{let{BABYLON:t}=await K("https://cdn.babylonjs.com/babylon.js","BABYLON");return t})()}scene;engine;sceneCreated=L3;update=L3;_update=()=>{if(this.scene){if(this.update!==void 0)this.update(this,this.BABYLON);if(this.scene.activeCamera!==void 0)this.scene.render()}};onResize(){if(this.engine)this.engine.resize()}loadScene=async(t,i,e)=>{let{BABYLON:s}=await K("https://cdn.babylonjs.com/loaders/babylonjs.loaders.min.js","BABYLON");s.SceneLoader.Append(t,i,this.scene,e)};loadUI=async(t)=>{let{BABYLON:i}=await K("https://cdn.babylonjs.com/gui/babylon.gui.min.js","BABYLON"),e=i.GUI.AdvancedDynamicTexture.CreateFullscreenUI("GUI",!0,this.scene),{snippetId:s,jsonUrl:n,data:o,size:a}=t;if(a)e.idealWidth=a,e.renderAtIdealSize=!0;let l;if(s)l=await e.parseFromSnippetAsync(s);else if(n)l=await e.parseFromURLAsync(n);else if(o)l=e.parseContent(o);else return null;let c=e.getChildren()[0],h=c.children.reduce((d,p)=>{return d[p.name]=p,d},{});return{advancedTexture:e,gui:l,root:c,widgets:h}};connectedCallback(){super.connectedCallback();let{canvas:t}=this.parts;this.babylonReady.then(async(i)=>{if(this.BABYLON=i,this.engine=new i.Engine(t,!0),this.scene=new i.Scene(this.engine),this.sceneCreated)await this.sceneCreated(this,i);if(this.scene.activeCamera===void 0)new i.ArcRotateCamera("default-camera",-Math.PI/2,Math.PI/2.5,3,new i.Vector3(0,0,0)).attachControl(this.parts.canvas,!0);this.engine.runRenderLoop(this._update)})}}var ft=O3.elementCreator({tag:"xin-3d"});/*!
# blueprint loading

`<xin-loader>` and `<xin-blueprint>` are simple elements provided by `xinjs` for the dynamic loading
of component **blueprints**.

```html
<xin-loader>
  <xin-blueprint tag="swiss-clock" src=" https://tonioloewald.github.io/xin-clock/dist/blueprint.js"></xin-blueprint>
</xin-loader>
<swiss-clock></swiss-clock>
```

## Attributes

- `blueprint` is the url of the `blueprint` javascript module (required)
- `tag` is the tagName you wish to use. If the name of the blueprint is
  hyphenated, then that will be used by default
- `property` if the blueprint module exports the blueprint function as
  a property, you can specify the property here.
*//*!
# lottie / bodymovin

A [lottie](https://airbnb.io/lottie/#/web) (a.k.a. **bodymovin**) player.

It's designed to work like an `<img>` element (just set its `src` attribute).

```js
const { xinProxy } = xinjs
const { icons, popFloat } = xinjsui
const { div, label, input, select, option, span } = xinjs.elements

const rocket = preview.querySelector('xin-lottie')
setTimeout(
  () => {
 preview.append(
   popFloat({
     content: [
       { class: 'panel', drag: true },
       div({ class: 'panel-header' }, 'Player Controls' ),
       label(
         { class: 'no-drag' },
         'speed',
         input({ type: 'range', min: -1, max: 1, step: 0.1, value: 0, onInput(event) {
           const speed = Math.pow(5, Number(event.target.value))
           rocket.animation.setSpeed(speed)
           event.target.nextSibling.textContent = (speed * 100).toFixed(0) + '%'
         } }),
         span('100%', {style: { textAlign: 'right', width: '40px'}})
       ),
       label(
         { class: 'no-drag' },
         'direction',
         select(
           option('Forwards', {value: 1, selected: true}),
           option('Backwards', {value: -1}),
           {
             onChange(event) {
               rocket.animation.setDirection(event.target.value)
             }
           }
         ),
         icons.chevronDown(),
       )
     ],
     target: rocket,
     position: 's'
   })
 )
  },
  500
)
```
```html
<xin-lottie
  style="height: 100%; max-width: 100%"
  src="88140-rocket-livetrade.json"
></xin-lottie>
<div class="caption">
  Animation by <a target="_blank" href="https://lottiefiles.com/dvskjbicfc">chiến lê hồng</a>
</div>
```
```css
.preview {
  padding: var(--spacing);
  text-align: center;
}

.preview .panel {
  padding: 10px;
  border-radius: 5px;
  gap: 5px;
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.preview .caption {
  position: absolute;
  right: 5px;
  bottom: 5px;
}

.preview .panel-header {
  margin: 0;
  text-align: center;
  font-weight: bold;
  background: var(--brand-color);
  color: white;
  padding: 5px;
  margin: -10px -10px 0 -10px;
  cursor: move;
}
```

You can also directly set its `json` property to the content of a `lottie.json` file.

And of course just access the element's `animation` property to [use the bodymovin API](https://airbnb.io/lottie/#/web).

Also see the [documentation for advanced interactions](https://lottiefiles.github.io/lottie-docs/advanced_interactions/)
*/class z1 extends F{content=null;src="";json="";config={renderer:"svg",loop:!0,autoplay:!0};static bodymovinAvailable;animation;static styleSpec={":host":{width:400,height:400,display:"inline-block"}};_loading=!1;get loading(){return this._loading}constructor(){super();if(this.initAttributes("src","json"),z1.bodymovinAvailable===void 0)z1.bodymovinAvailable=K("https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js","bodymovin")}doneLoading=()=>{this._loading=!1};load=({bodymovin:t})=>{if(this._loading=!0,this.config.container=this.shadowRoot!==null?this.shadowRoot:void 0,this.json!=="")this.config.animationData=this.json,delete this.config.path;else if(this.src!=="")delete this.config.animationData,this.config.path=this.src;else console.log("%c<xin-lottie>%c expected either %cjson%c (animation data) or %csrc% c(url) but found neither.","color: #44f; background: #fff; padding: 0 5px","color: default","color: #44f; background: #fff; padding: 0 5px","color: default","color: #44f; background: #fff; padding: 0 5px","color: default");if(this.animation){this.animation.destroy();let i=this.shadowRoot;if(i!==null)i.querySelector("svg")?.remove()}this.animation=t.loadAnimation(this.config),this.animation.addEventListener("DOMLoaded",this.doneLoading)};render(){super.render(),z1.bodymovinAvailable.then(this.load).catch((t)=>{console.error(t)})}}var Mt=z1.elementCreator({tag:"xin-lottie"});/*!
# carousel

```html
<xin-carousel arrows dots max-visible-items=2 auto=2 loop>
  <div class="thing pink">item 1</div>
  <div class="thing green">item 2</div>
  <div class="thing blue">item 3</div>
  <div class="thing yellow">item 4</div>
  <div class="thing pink">item 5</div>
  <div class="thing green">item 6</div>
  <div class="thing blue">item 7</div>
</xin-carousel>
```
```css
.thing {
  width: 200px;
  height: 200px;
  line-height: 200px;
  text-align: center;
  font-size: 32px;
}

.pink {
  background: #fdd;
}

.green {
  background: #dfd;
}

.blue {
  background: #ddf;
}

.yellow {
  background: #ffd;
}
```

This is a minimalist carousel component that supports the usual stuff.

## Attributes

- `arrows` (boolean, false by default) shows/hides the arrow paging controls
- `dots` (boolean, false by default) shows/hides the dot progress indicators
- `max-visible-items` (number, 1 by default) determines how many items are shown at once.
- `snap-duration` (number, 0.25 [seconds] by default) determines the time taken to scroll / snap scroll.
- `snap-delay` (number, 0.1 [seconds] by default)
- `loop` (boolean, false by default) causes next/previous buttons to loop
- `auto` (number, 0 [seconds] by default) if > 0, automatically advances after that many seconds (always loops!)

<xin-css-var-editor element-selector="xin-carousel"></xin-css-var-editor>
*/var{button:B1,slot:U2,div:O1}=I;class F3 extends F{arrows=!1;dots=!1;loop=!1;maxVisibleItems=1;snapDelay=0.1;snapDuration=0.25;auto=0;timeout;autoAdvance=()=>{if(clearTimeout(this.timeout),this.auto>0)this.timeout=setTimeout(this.forward,this.auto*1000)};_page=0;get page(){return this._page}set page(t){let{scroller:i,back:e,forward:s}=this.parts;if(this.lastPage<=0)s.disabled=e.disabled=!0,t=0;else t=Math.max(0,Math.min(this.lastPage,t)),t=isNaN(t)?0:t;if(this._page!==t)this._page=isNaN(t)?0:t,this.animateScroll(this._page*i.offsetWidth),e.disabled=this.page<=0&&!this.loop,s.disabled=this.page>=this.lastPage&&!this.loop}get visibleItems(){return[...this.children].filter((t)=>getComputedStyle(t).display!=="none")}get lastPage(){return Math.max(Math.ceil(this.visibleItems.length/(this.maxVisibleItems||1))-1,0)}static styleSpec={":host":{display:"flex",flexDirection:"column",position:"relative"},":host svg":{height:m.carouselIconSize},":host button":{outline:"none",border:"none",boxShadow:"none",background:"transparent",fill:m.carouselButtonColor,padding:0},":host::part(back), :host::part(forward)":{position:"absolute",top:0,bottom:0,width:m.carouseButtonWidth,zIndex:2},":host::part(back)":{left:0},":host::part(forward)":{right:0},":host button:disabled":{opacity:0.5,pointerEvents:"none"},":host button:hover":{fill:m.carouselButtonHoverColor},":host button:active":{fill:m.carouselButtonActiveColor},":host::part(pager)":{position:"relative"},":host::part(scroller)":{overflow:"auto hidden",position:"relative"},":host::part(grid)":{display:"grid",justifyItems:"center"},":host *::-webkit-scrollbar, *::-webkit-scrollbar-thumb":{display:"none"},":host .dot":{background:m.carouselButtonColor,borderRadius:m.carouselDotSize,height:m.carouselDotSize,width:m.carouselDotSize,transition:m.carouselDotTransition},":host .dot:not(.current):hover":{background:m.carouselButtonHoverColor,height:m.carouselDotSize150,width:m.carouselDotSize150,margin:m.carouselDotSize_25},":host .dot:not(.current):active":{background:m.carouselButtonActiveColor},":host .dot.current":{background:m.carouselDotCurrentColor},":host::part(progress)":{display:"flex",gap:m.carouselDotSpacing,justifyContent:"center",padding:m.carouselProgressPadding}};easing=(t)=>{return Math.sin(t*Math.PI*0.5)};indicateCurrent=()=>{let{scroller:t,progress:i}=this.parts,e=t.scrollLeft/t.offsetWidth;[...i.children].forEach((s,n)=>{s.classList.toggle("current",Math.floor(n/this.maxVisibleItems-e)===0)}),clearTimeout(this.snapTimer),this.snapTimer=setTimeout(this.snapPosition,this.snapDelay*1000)};snapPosition=()=>{let{scroller:t}=this.parts,i=t.scrollLeft/t.offsetWidth;if(i!==this.page)this.page=i>this.page?Math.ceil(i):Math.floor(i);this.autoAdvance()};back=()=>{this.page=this.page>0?this.page-1:this.lastPage};forward=()=>{this.page=this.page<this.lastPage?this.page+1:0};handleDotClick=(t)=>{let{progress:i}=this.parts,e=[...i.children].indexOf(t.target);if(e>-1)this.page=Math.floor(e/this.maxVisibleItems)};snapTimer;animationFrame;animateScroll(t,i=-1,e=0){cancelAnimationFrame(this.animationFrame);let{scroller:s}=this.parts;if(i===-1){i=s.scrollLeft,e=Date.now(),this.animationFrame=requestAnimationFrame(()=>{this.animateScroll(t,i,e)});return}let n=(Date.now()-e)/1000;if(n>=this.snapDuration||Math.abs(s.scrollLeft-t)<2)s.scrollLeft=t,this.animationFrame=null;else s.scrollLeft=i+this.easing(n/this.snapDuration)*(t-i),this.animationFrame=requestAnimationFrame(()=>{this.animateScroll(t,i,e)})}content=()=>[O1({part:"pager"},B1({title:"previous slide",part:"back"},T.chevronLeft()),O1({title:"slides",role:"group",part:"scroller"},O1({part:"grid"},U2())),B1({title:"next slide",part:"forward"},T.chevronRight())),O1({title:"choose slide to display",role:"group",part:"progress"})];constructor(){super();this.initAttributes("dots","arrows","maxVisibleItems","snapDuration","loop","auto")}connectedCallback(){super.connectedCallback(),this.ariaRoleDescription="carousel",this.ariaOrientation="horizontal",this.ariaReadOnly="true";let{back:t,forward:i,scroller:e,progress:s}=this.parts;t.addEventListener("click",this.back),i.addEventListener("click",this.forward),e.addEventListener("scroll",this.indicateCurrent),s.addEventListener("click",this.handleDotClick),this.autoAdvance()}disconnectedCallback(){clearTimeout(this.timeout)}render(){super.render();let{dots:t,arrows:i,visibleItems:e,lastPage:s}=this,{progress:n,back:o,forward:a,grid:l}=this.parts;e.forEach((c)=>{c.role="group"}),l.style.gridTemplateColumns=`${100/this.maxVisibleItems/(1+this.lastPage)}% `.repeat(e.length).trim(),l.style.width=(1+this.lastPage)*100+"%",n.textContent="",n.append(...e.map((c,h)=>B1({title:`item ${h+1}`,class:"dot"}))),this.indicateCurrent(),n.style.display=t&&s>0?"":"none",o.hidden=a.hidden=!(i&&s>0)}}var Ct=F3.elementCreator({tag:"xin-carousel",styleSpec:{":host":{_carouselIconSize:24,_carouselButtonColor:"#0004",_carouselButtonHoverColor:"#0006",_carouselButtonActiveColor:"#000c",_carouseButtonWidth:48,_carouselDotCurrentColor:"#0008",_carouselDotSize:8,_carouselDotSpacing:m.carouselDotSize,_carouselProgressPadding:12,_carouselDotTransition:"0.125s ease-in-out"},":host:focus":{outline:"none",boxShadow:"none"}}});/*!
# code

An [ACE Editor](https://ace.c9.io/) wrapper.

Sometimes, it's nice to be able to just toss a code-editor in a web-page.

`<xin-code>`'s `value` is the code it contains. Its `mode` attribute sets the language, and you can further configure
the ACE editor instance via its `options` property.

```html
<xin-code style="width: 100%; height: 100%" mode="css">
body {
  box-sizing: border-box;
}
</xin-code>
```
*/var H3="https://cdnjs.cloudflare.com/ajax/libs/ace/1.23.2/",I3="ace/theme/tomorrow",J2=async(t,i="html",e={},s=I3)=>{let{ace:n}=await K(`${H3}ace.min.js`);n.config.set("basePath",H3);let o=n.edit(t,{mode:`ace/mode/${i}`,tabSize:2,useSoftTabs:!0,useWorker:!1,...e});return o.setTheme(s),o};class p1 extends F{source="";get value(){return this.editor===void 0?this.source:this.editor.getValue()}set value(t){if(this.editor===void 0)this.source=t;else this.editor.setValue(t),this.editor.clearSelection(),this.editor.session.getUndoManager().reset()}mode="javascript";disabled=!1;role="code editor";get editor(){return this._editor}_editor;_editorPromise;options={};theme=I3;static styleSpec={":host":{display:"block",position:"relative",width:"100%",height:"100%"}};constructor(){super();this.initAttributes("mode","theme","disabled")}onResize(){if(this.editor!==void 0)this.editor.resize(!0)}connectedCallback(){if(super.connectedCallback(),this.source==="")this.value=this.textContent!==null?this.textContent.trim():"";if(this._editorPromise===void 0)this._editorPromise=J2(this,this.mode,this.options,this.theme),this._editorPromise.then((t)=>{this._editor=t,t.setValue(this.source,1),t.clearSelection(),t.session.getUndoManager().reset()})}render(){if(super.render(),this._editorPromise!==void 0)this._editorPromise.then((t)=>t.setReadOnly(this.disabled))}}var F1=p1.elementCreator({tag:"xin-code"});/*!

# color input field

This is a color input field that supports opacity

```js
const colorInput = preview.querySelector('xin-color')
const circle = preview.querySelector('div')

colorInput.addEventListener('change', () => {
  console.log(colorInput.value)
  circle.style.background = colorInput.value
})
```
```html
<xin-color value="red"></xin-color>
<div
  style="
    width: 200px;
    height: 200px;
    background: red;
    border-radius: 100px;
  "
></div>
```


<xin-css-var-editor element-selector="xin-color"></xin-css-var-editor>
*/var{input:k1}=I,P3=s1.fromCss("#8888");class q3 extends F{value=P3.rgba;color=P3;static styleSpec={":host":{_gap:8,_swatchSize:32,_cssWidth:72,_alphaWidth:72,display:"inline-flex",gap:m.gap,alignItems:"center"},':host input[type="color"]':{border:0,width:m.swatchSize,height:m.swatchSize},":host::part(alpha)":{width:m.alphaWidth},":host::part(css)":{width:m.cssWidth,fontFamily:"monospace"}};content=[k1({title:"base color",type:"color",part:"rgb"}),k1({type:"range",title:"opacity",part:"alpha",min:0,max:1,step:0.05}),k1({title:"css color spec",part:"css"})];valueChanged=!1;update=(t)=>{let{rgb:i,alpha:e,css:s}=this.parts;if(t.type==="input")this.color=s1.fromCss(i.value),this.color.a=Number(e.value),s.value=this.color.html;else this.color=s1.fromCss(s.value),i.value=this.color.html.substring(0,7),e.value=String(this.color.a);i.style.opacity=String(this.color.a),this.value=this.color.rgba,this.valueChanged=!0};connectedCallback(){super.connectedCallback();let{rgb:t,alpha:i,css:e}=this.parts;t.addEventListener("input",this.update),i.addEventListener("input",this.update),e.addEventListener("change",this.update)}render(){if(this.valueChanged){this.valueChanted=!1;return}let{rgb:t,alpha:i,css:e}=this.parts;this.color=s1.fromCss(this.value),t.value=this.color.html.substring(0,7),t.style.opacity=String(this.color.a),i.value=String(this.color.a),e.value=this.color.html}}var $3=q3.elementCreator({tag:"xin-color"});/*!
# trackDrag

Sometimes you want to track a mouse-drag or touch-drag operation without messing around.
This is how the resizeable columns in `<xin-table>` work.

Just call `trackDrag(event, (dx, dy, event) => { ... })` and you'll get updates on corresponding events until
you return `true` from the event-handler (or, in the case of `touch` events, the last `touch` ends).
For mouse events, a "tracker" element is thrown up in front of everything for the event.

```html
<p>
  Try dragging the squares…<br>
  (You can drag them separately with multi-touch!)
</p>
<div class="draggable" style="top: 20px; left: 40px; background: #f008"></div>
<div class="draggable" style="left: 40%; bottom: 30%; background: #0f08"></div>
<div class="draggable" style="bottom: 30px; right: 10px; background: #00f8"></div>
```
```css
.preview {
  touch-action: none;
}

.draggable {
  content: ' ';
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: move;
}

.preview p {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
```
```js
const { trackDrag } = xinjsui

function dragItem(event) {
  const draggable = event.target
  if (draggable.classList.contains('draggable')) {
    const x = draggable.offsetLeft
    const y = draggable.offsetTop
    trackDrag(event, (dx, dy, event) => {
      draggable.style.left = (x + dx) + 'px'
      draggable.style.top = (y + dy) + 'px'
      draggable.style.bottom = 'auto'
      draggable.style.right = 'auto'
      return event.type === 'mouseup'
    })
  }
}

preview.addEventListener('mousedown', dragItem )
preview.addEventListener('touchstart', dragItem, { passive: true } )
```

For `touch` events, `dx` and `dy` are based on tracking `event.changedTouches[0]` which
is almost certainly what you want.

To handle multi-touch gestures you will need to track the touches yourself.

## bringToFront

`bringToFront(element: HTMLElement, selector = 'body *')`  gives the element the highest
`z-index` of any element matching the selector (which is passed to findHighestZ).

## findHighestZ

`findHighestZ(selector = 'body *'): number` returns the the highest `z-index` of any element
matching `selector`.
*/var t1=I.div({style:{content:" ",position:"fixed",top:0,left:0,right:0,bottom:0}}),H1={passive:!0},Q=(t,i,e="move")=>{if(!t.type.startsWith("touch")){let{clientX:n,clientY:o}=t;t1.style.cursor=e,n1(t1),document.body.append(t1);let a=(l)=>{let c=l.clientX-n,h=l.clientY-o;if(i(c,h,l)===!0)t1.removeEventListener("mousemove",a),t1.removeEventListener("mouseup",a),t1.remove()};t1.addEventListener("mousemove",a,H1),t1.addEventListener("mouseup",a,H1)}else if(t instanceof TouchEvent){let n=t.changedTouches[0],o=n.identifier,a=n.clientX,l=n.clientY,c=t.target,h=0,d=0,p=(g)=>{let C=[...g.touches].find((z)=>z.identifier===o);if(C!==void 0)h=C.clientX-a,d=C.clientY-l;if(g.type==="touchmove")g.stopPropagation(),g.preventDefault();if(i(h,d,g)===!0||C===void 0)c.removeEventListener("touchmove",p),c.removeEventListener("touchend",p),c.removeEventListener("touchcancel",p)};c.addEventListener("touchmove",p),c.addEventListener("touchend",p,H1),c.addEventListener("touchcancel",p,H1)}},I1=(t="body *")=>[...document.querySelectorAll(t)].map((i)=>parseFloat(getComputedStyle(i).zIndex)).reduce((i,e)=>isNaN(i)||Number(i)<e?e:Number(i),0),n1=(t,i="body *")=>{t.style.zIndex=String(I1(i)+1)};/*!
# float

A floating, potentially draggable user interface element.

```html
<xin-float class="float" remain-on-resize="remain" remain-on-scroll="remain" drag>
  <h4>Drag Me</h4>
  <div class="no-drag balloon">🎈</div>
  <div class="behavior">I ignore resizing and scrolling</div>
  <footer style="font-size: 75%">neunundneunzig pixel-ballon</footer>
</xin-float>

<xin-float class="float" remain-on-scroll="remain" style="top: 50px; right: 20px;" drag>
  <h4>Drag Me</h4>
  <div class="no-drag balloon">🎈</div>
  <div class="behavior">I disappear on resize</div>
  <footer style="font-size: 75%">neunundneunzig pixel-ballon</footer>
</xin-float>

<xin-float class="float" remain-on-resize="remain" remain-on-scroll="remove" style="bottom: 20px; left: 50px;" drag>
  <h4>Drag Me</h4>
  <div class="no-drag balloon">🎈</div>
  <div class="behavior">I disappear on scroll</div>
  <footer style="font-size: 75%">neunundneunzig pixel-ballon</footer>
</xin-float>
```
```css
.preview .float {
  width: 220px;
  height: 180px;
  padding: 0;
  gap: 5px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background: #fff8;
  box-shadow: 2px 10px 20px #0004;
  overflow: hidden;
  cursor: move;
}

.preview h4 {
  margin: 0;
  padding: 5px 10px;
  color: white;
  background: red;
}

.preview .balloon {
  cursor: default;
  flex: 1 1 auto;
  font-size: 99px;
  line-height: 120px;
  text-align: center;
  height: auto;
  overflow: hidden;
}

.preview .behavior {
  position: absolute;
  bottom: 16px;
  left: 8px;
  right: 8px;
  background: #fffc;
}

.preview footer {
  text-align: center;
  background: #f008;
  color: white;
```

## Styling

Note that the `<xin-float>` element has absolutely minimal styling. It's up to you to provide a drop
shadow and background and so on.

## Attributes

- `drag` false | true — to make a `<xin-float>` element draggable, simply set its `drag` attribute.
- `remain-on-resize` 'remove' | 'hide' | 'remain' — by default, floats will hide if the window is resized
- `remain-on-scroll` 'remain' | 'remove' | 'hide' — by default, floats will remain if the document is scrolled

Note that `remain-on-scroll` behavior applies to any scrolling in the document (including within the float) so
if you want finer-grained disappearing behavior triggered by scrolling, you might want to implement it yourself.

To prevent dragging for an interior element (e.g. if you want a floating palette with buttons or input fields)
just add the `no-drag` class to an element or its container.
*/var{slot:Q2}=I;class o1 extends F{static floats=new Set;drag=!1;remainOnResize="remove";remainOnScroll="remain";content=Q2();static styleSpec={":host":{position:"fixed"}};constructor(){super();this.initAttributes("drag","remainOnResize","remainOnScroll")}reposition=(t)=>{if(t.target?.closest(".no-drag"))return;if(this.drag){n1(this);let e=this.offsetLeft,s=this.offsetTop;Q(t,(n,o,a)=>{if(this.style.left=`${e+n}px`,this.style.top=`${s+o}px`,this.style.right="auto",this.style.bottom="auto",a.type==="mouseup")return!0})}};connectedCallback(){super.connectedCallback(),o1.floats.add(this);let t={passive:!0};this.addEventListener("touchstart",this.reposition,t),this.addEventListener("mousedown",this.reposition,t),n1(this)}disconnectedCallback(){super.disconnectedCallback(),o1.floats.delete(this)}}var t3=o1.elementCreator({tag:"xin-float"});window.addEventListener("resize",()=>{[...o1.floats].forEach((t)=>{if(t.remainOnResize==="hide")t.hidden=!0;else if(t.remainOnResize==="remove")t.remove()})},{passive:!0});document.addEventListener("scroll",(t)=>{if(t.target instanceof HTMLElement&&t.target.closest(o1.tagName))return;[...o1.floats].forEach((i)=>{if(i.remainOnScroll==="hide")i.hidden=!0;else if(i.remainOnScroll==="remove")i.remove()})},{passive:!0,capture:!0});/*!
# popFloat

There are so many cases in user-interfaces where it's useful to pop-up a floating
user interface element that a simple and reliable way of doing this seems like
a good idea.

The problem with many such approaches is that they assume a highly specific
use-case (e.g. popup menu or combo box) and while meeting the creator's intended
purpose admirably, turn out to have some annoying limitation that prevents them
handling the specific case at hand.

```js
const { popFloat, positionFloat } = xinjsui
const { button } = xinjs.elements
const grid = preview.querySelector('.grid')

grid.addEventListener('click', (event) => {
  const { target } = event
  if (!target.closest('button')) {
    return
  }
  const float = preview.querySelector('xin-float')
  if (float === null) {
    // create and position a float
    preview.append(
      popFloat({
        content: [
          'hello, I am a float',
          button('close me', {
            onClick(event){
              event.target.closest('xin-float').remove()
            }
          })
        ],
        target,
        position: target.dataset.float
      })
    )
  } else {
    // position an existing float
    positionFloat(float, target, target.dataset.float)
  }
})
```
```html
<h2>Pop Float Demo</h2>
<div class="grid">
  <button data-float="nw">nw</button>
  <button data-float="n">n</button>
  <button data-float="ne">ne</button>
  <button data-float="wn">wn</button>
  <span>&nbsp;</span>
  <button data-float="en">en</button>
  <button data-float="w">w</button>
  <button data-float="auto">auto</button>
  <button data-float="e">e</button>
  <button data-float="ws">ws</button>
  <button data-float="side">side</button>
  <button data-float="es">es</button>
  <button data-float="sw">sw</button>
  <button data-float="s">s</button>
  <button data-float="se">se</button>
</div>
```
```css
.preview .grid {
  display: grid;
  grid-template-columns: 80px 80px 80px;
}

.preview xin-float {
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 10px;
  background: white;
  box-shadow: 2px 10px 5px #0004;
}
```

## popFloat

```
export interface PopFloatOptions {
  content: HTMLElement | ElementPart[]
  target: HTMLElement
  position?: FloatPosition
}

export const popFloat = (options: PopFloatOptions): XinFloat
```

Create a `<xin-float>` with the content provided, positioned as specified (or automatically).

## positionFloat

```
export const positionFloat = (
  element: HTMLElement,
  target: HTMLElement,
  position?: FloatPosition
  remainOnScroll?: 'hide' | 'remove' | boolean // default is 'remove'
  remainOnResize?: 'hide' | 'remove' | boolean // default is 'remove'
): void
```

This allows you to, for example, provide a global menu that can be used on any element
instead of needing to have a whole instance of the menu wrapped around every instance
of the thing you want the menu to affect (a common anti-pattern of front-end frameworks).

### Handling Overflow

`positionFloat` automatically sets two css-variables `--max-height` and `--max-width` on
the floating element to help you deal with overflow (e.g. in menus). E.g. if the float
is positioned with `top: 125px` then it will set `--max-height: calc(100vh - 125px)`.

## FloatPosition

```
export type FloatPosition =
| 'n'
| 's'
| 'e'
| 'w'
| 'ne'
| 'nw'
| 'se'
| 'sw'
| 'en'
| 'wn'
| 'es'
| 'ws'
| 'side'
| 'auto'
```

*/var _3=(t)=>{let{content:i,target:e,position:s}=t,n=Array.isArray(i)?t3(...i):t3(i);return K2(n,e,s),document.body.append(n),n},K2=(t,i,e)=>{{let{position:p}=getComputedStyle(t);if(p!=="fixed")t.style.position="fixed";n1(t)}let{left:s,top:n,width:o,height:a}=i.getBoundingClientRect(),l=s+o*0.5,c=n+a*0.5,h=window.innerWidth,d=window.innerHeight;if(e==="side")e=(l<h*0.5?"e":"w")+(c<d*0.5?"s":"n");else if(e==="auto"||e===void 0)e=(c<d*0.5?"s":"n")+(l<h*0.5?"e":"w");if(t.style.top=t.style.left=t.style.right=t.style.bottom=t.style.transform="",e.length===2){let[p,g]=e;switch(p){case"n":t.style.bottom=(d-n).toFixed(2)+"px";break;case"e":t.style.left=(s+o).toFixed(2)+"px";break;case"s":t.style.top=(n+a).toFixed(2)+"px";break;case"w":t.style.right=(h-s).toFixed(2)+"px";break}switch(g){case"n":t.style.bottom=(d-n-a).toFixed(2)+"px";break;case"e":t.style.left=s.toFixed(2)+"px";break;case"s":t.style.top=n.toFixed(2)+"px";break;case"w":t.style.right=(h-s-o).toFixed(2)+"px";break}t.style.transform=""}else if(e==="n")t.style.bottom=(d-n).toFixed(2)+"px",t.style.left=l.toFixed(2)+"px",t.style.transform="translateX(-50%)";else if(e==="s")t.style.top=(n+a).toFixed(2)+"px",t.style.left=l.toFixed(2)+"px",t.style.transform="translateX(-50%)";else if(e==="e")t.style.left=(s+o).toFixed(2)+"px",t.style.top=c.toFixed(2)+"px",t.style.transform="translateY(-50%)";else if(e==="w")t.style.right=(h-s).toFixed(2)+"px",t.style.top=c.toFixed(2)+"px",t.style.transform="translateY(-50%)";t.style.setProperty("--max-height",`calc(100vh - ${t.style.top||t.style.bottom})`),t.style.setProperty("--max-width",`calc(100vw - ${t.style.left||t.style.right})`)};/*!
# menu

Being able to pop a menu up anywhere is just so nice, and `xinjs-ui` allows menus
to be generated on-the-fly, and even supports hierarchical menus.

```js
const { popMenu } = xinjsui
const { elements } = xinjs

let picked = ''
let testingEnabled = false

preview.addEventListener('click', (event) => {
  if (!event.target.closest('button')) {
    return
  }
  popMenu({
    target: event.target,
    menuItems: [
      {
        icon: 'thumbsUp',
        caption: 'Like',
        shortcut: '^L',
        action() {
          window.alert('I like it!')
        }
      },
      null, // separator
      {
        icon: 'thumbsDown',
        caption: 'dislike',
        shortcut: '⌘D',
        action() {
          window.alert('Awwwww!')
        }
      },
      {
        icon: elements.span('🥹'),
        caption: 'Also see…',
        menuItems: [
          {
            icon: elements.span('😳'),
            caption: 'And that’s not all…',
            menuItems: [
              {
                icon: 'externalLink',
                caption: 'timezones',
                action: 'https://timezones.xinjs.net/'
              },
              {
                icon: 'externalLink',
                caption: 'b8rjs',
                action: 'https://b8rjs.com'
              },
            ]
          },
          {
            icon: 'xinjs',
            caption: 'xinjs',
            action: 'https://xinjs.net'
          },
          {
            icon: 'xinie',
            caption: 'xinie',
            action: 'https://xinie.net'
          },
        ]
      },
      {
        icon: testingEnabled ? 'check' : '',
        caption: 'Testing Enabled',
        action() {
          testingEnabled = !testingEnabled
        }
      },
      {
        caption: 'Testing…',
        enabled() {
          return testingEnabled
        },
        menuItems: [
          {
            caption: 'one',
            checked: () => picked === 'one',
            action () {
              picked = 'one'
            }
          },
          {
            caption: 'two',
            checked: () => picked === 'two',
            action () {
              picked = 'two'
            }
          },
          {
            caption: 'three',
            checked: () => picked === 'three',
            action () {
              picked = 'three'
            }
          }
        ]
      }
    ]
  })
})
```
```html
<button title="menu test">
  <xin-icon icon="moreVertical"></xin-icon>
</button>
<button title="menu test from bottom-right" style="position: absolute; bottom: 0; right: 0">
  <xin-icon icon="moreVertical"></xin-icon>
</button>
```

## Overflow test

```js
const { popMenu, icons } = xinjsui
const { elements } = xinjs

preview.querySelector('button').addEventListener('click', (event) => {
  popMenu({
    target: event.target,
    menuItems:  Object.keys(icons).map(icon => ({
      icon,
      caption: icon,
      action() {
        console.log(caption)
      }
    }))
  })
})
```
```html
<button title="big menu test" style="position: absolute; top: 0; left: 0">
  Big Menu Test
</button>
```

## popMenu({target, width, menuItems…})

`popMenu` will spawn a menu on a target element. A menu is just a `MenuItem[]`.

## MenuItem

A `MenuItem` can be one of three things:

- `null` denotes a separator
- `MenuAction` denotes a labeled button or `<a>` tag based on whether the `action` provided
  is a url (string) or an event handler (function).
- `SubMenu` is a submenu.

### MenuAction

Note that popMenu does not implement shortcuts for you (yet!).

```
interface MenuAction {
  caption: string
  shortcut?: string
  checked?: () => boolean
  enabled?: () => boolean
  action: ActionCallback | string
  icon?: string | Element
}
```

### SubMenu

```
interface SubMenu {
  caption: string
  enabled?: () => boolean
  menuItems: MenuItem[]
  icon?: string | Element
}
```

## Why another menu library?!

Support for menus is sadly lacking in HTML, and unfortunately there's a huge conceptual problem
with menus implemented the way React and React-influenced libraries work, i.e. you need
to have an instance of a menu "wrapped around" the DOM element that triggers it, whereas
a better approach (and one dating back at least as far as the original Mac UI) is to treat
a menu as a separate resource that can be instantiated on demand.

A simple example where this becomes really obvious is if you want to associate a "more options"
menu with every row of a large table. Either you end up having an enormous DOM (virtual or otherwise)
or you have to painfully swap out components on-the-fly.

And, finally, submenus are darn useful for any serious app.

For this reason, `xinjs-ui` has its own menu implementation.
*/var{div:D3,button:V3,span:e1,a:X2}=I;x3("xin-menu-helper",{".xin-menu":{overflow:"hidden auto",maxHeight:`calc(${m.maxHeight} - ${O.menuInset("8px")})`,borderRadius:m.spacing50,background:O.menuBg("#fafafa"),boxShadow:`${m.spacing13} ${m.spacing50} ${m.spacing} ${m.shadowColor}`},".xin-menu > div":{width:O.menuWidth("auto")},".xin-menu-trigger":{paddingLeft:0,paddingRight:0,minWidth:O.touchSize("48px")},".xin-menu-separator":{display:"inline-block",content:" ",height:"1px",width:"100%",background:O.menuItemColor("#222"),opacity:0.25,margin:O.menuSeparatorMargin("8px 0")},".xin-menu-item":{boxShadow:"none",border:"none !important",display:"grid",alignItems:"center",justifyContent:"flex-start",textDecoration:"none",gridTemplateColumns:"0px 1fr 30px",width:"100%",gap:0,background:"transparent",padding:O.menuItemPadding("0 16px"),height:O.menuItemHeight("48px"),lineHeight:O.menuItemHeight("48px"),textAlign:"left"},".xin-menu-item, .xin-menu-item > span":{color:O.menuItemColor("#222")},".xin-menu-with-icons .xin-menu-item":{gridTemplateColumns:"30px 1fr 30px"},".xin-menu-item svg":{fill:O.menuItemIconColor("#222")},".xin-menu-item.xin-menu-item-checked":{background:O.menuItemHoverBg("#eee")},".xin-menu-item > span:nth-child(2)":{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textAlign:"left"},".xin-menu-item:hover":{boxShadow:"none !important",background:O.menuItemHoverBg("#eee")},".xin-menu-item:active":{boxShadow:"none !important",background:O.menuItemActiveBg("#aaa"),color:O.menuItemActiveColor("#000")},".xin-menu-item:active svg":{fill:O.menuItemIconActiveColor("#000")}});var Z2=(t)=>{let i=t.checked&&t.checked()&&"check"||!1,e=t?.icon||i||e1(" ");if(typeof e==="string")e=T[e]();let s;if(typeof t?.action==="string")s=X2({class:"xin-menu-item",href:t.action},e,e1(t.caption),e1(t.shortcut||" "));else s=V3({class:"xin-menu-item",onClick:t.action},e,e1(t.caption),e1(t.shortcut||" "));if(s.classList.toggle("xin-menu-item-checked",i!==!1),t?.enabled&&!t.enabled())s.setAttribute("disabled","");return s},R2=(t,i)=>{let e=t.checked&&t.checked()&&"check"||!1,s=t?.icon||e||e1(" ");if(typeof s==="string")s=T[s]();let n=V3({class:"xin-menu-item",disabled:!(!t.enabled||t.enabled()),onClick(o){k(Object.assign({},i,{menuItems:t.menuItems,target:n,submenuDepth:(i.submenuDepth||0)+1,position:"side"})),o.stopPropagation(),o.preventDefault()}},s,e1(t.caption),T.chevronRight({style:{justifySelf:"flex-end"}}));return n},Y2=(t,i)=>{if(t===null)return e1({class:"xin-menu-separator"});else if(t?.action)return Z2(t);else return R2(t,i)},B2=(t)=>{let{target:i,width:e,menuItems:s}=t,n=s.find((o)=>o?.icon||o?.checked);return D3({class:n?"xin-menu xin-menu-with-icons":"xin-menu",onClick(){a1(0)}},D3({style:{minWidth:i.offsetWidth+"px",width:typeof e==="number"?`${e}px`:e},onMousedown(o){o.preventDefault(),o.stopPropagation()}},...s.map((o)=>Y2(o,t))))},f1,P1=[],a1=(t=0)=>{let i=P1.splice(t);for(let e of i)e.menu.remove();return f1=i[0],t>0?P1[t-1]:void 0};document.body.addEventListener("mousedown",(t)=>{if(t.target&&!P1.find((i)=>i.target.contains(t.target)))a1(0)});document.body.addEventListener("keydown",(t)=>{if(t.key==="Escape")a1(0)});var k=(t)=>{t=Object.assign({submenuDepth:0},t);let{target:i,position:e,submenuDepth:s}=t;if(f1&&!document.body.contains(f1?.menu))f1=void 0;if(s===0&&f1?.target===i)return;let n=a1(s);if(f1?.target===i)return;if(n&&n.target===i){a1();return}let o=B2(t),a=_3({content:o,target:i,position:e});a.remainOnScroll="remove",P1.push({target:i,menu:a})};var s3={};W2(s3,{init:()=>i3,draggedElement:()=>s0});/*!
# drag & drop

> **Note** this library is a modernized version of the [b8rjs](https://b8rjs.com) drag-and-drop.js library.
> It removes all usage of b8rjs and has no dependencies.

A lightweight library building on top of HTML5 drag and drop behavior.

To use it, simply call `dragAndDrop.init()` (it only needs to be called once,
but calling it again is harmless).

```
import { dragAndDrop } from 'xinjs-ui'

dragAndDrop.init()
```

The library just sets up some event listeners.

You can use `dragAndDrop.draggedElement()` to get the element being dragged (if it's
actually from the page you're in).

> ### Important Note
>
> The nice thing about HTML5 drag-and-drop is that it leverages the OS's drag and
> drop support. This means you can drag from one window to another, from the desktop
> to your app and vice versa. It's all a matter of configuring the DOM elements.

This module sets up some global event handlers and *just works*&trade; (arguably, it merely does things
that the browser should do, such as add a CSS selector for drop zones that are compatible
with what's being dragged).

This module uses but *does not define* the following class selectors:

- `.drag-source` an element being dragged
- `.drag-target` an element on which the dragged object may be dropped
- `.drag-over` a `.drag-target` which the object is currently over

You may also wish to create style rules for:

- `[draggable="true"]` anything other than a `<a>` (and perhaps an `<img>`) that can be dragged
- `[data-drag]` indicates *types* of draggable things that can be dropped on them.
- `[data-drop]` indicates potential *drop zones*.

> **Note** `draggable` is has to be set to "true", [see documentation on draggable](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/draggable).

## Draggable Objects

To create a draggable element, add `draggable="true"`.

    <div draggable="true">Drag Me</div>

To specify the type(s) of content that will be dragged, use the `data-drag` attribute:

    <div draggable="true" data-drag="text/plain">Drag Me</div>

To specify the content dragged, use a `data-drag-content` attribute.

    <div
      draggable="true"
      data-drag="text/plain"
      data-drag-content="Surprise!"
    >Drag Me</div>

## Drop Zones

To create a drop zone, use the data-drop attribute set to a semicolon-delimited list
of mime types:

    <div data-drop="text/plain">
      Drop plain text here
    </div>
    <div data-drop="text/plain;text/html">
      Drop html or plain text here
    </div>

Finally, you can override default drop behavior (which is to copy the dragged node into
the drop zone node) simply using data-event="drop:path.to.drop_handler" as usual.

    <div
      data-drop="custom"
      data-event="drop:path.to.drop_handler"
    >
      Drop some custom thing here
    </div>

### Typed Drop Zones Example

```html
<div style="display: grid; grid-template-columns: 50% 50%">
  <div>
    <h4>Draggable</h4>
    <a class="drag" href="javascript: alert('I don't do anything)">Links are draggable by default</a>
    <p draggable="true">
      Just adding the <code>draggable="true"</code>
      makes this paragraph draggable (as text/html by default)
    </p>
    <p draggable="true" data-drag="text/html">
      Draggable as <i>text/html</i>
    </p>
    <p draggable="true" data-drag="text/plain" data-drag-content="Surprise!">
      Draggable as <i>text/plain</i>, with <b>custom content</b>
    </p>
    <p draggable="true" data-drag="text/html;text/plain">
      Draggable as <i>text/html</i> or <i>text/plain</i>
    </p>
    <p draggable="true" data-drag="text/plain">
      Draggable as <i>text/plain</i>
    </p>
  </div>
  <div>
    <h4>Drop Targets</h4>
    <div data-drop="text/html">
      You can drop stuff here
    </div>
    <div data-drop="text/html">
      You can drop HTML here
    </div>
    <div data-drop="text/*">
      You can drop any text
    </div>
    <div data-drop="text/html;url">
      You can drop HTML or urls here
    </div>
    <div
      data-drop="special/any"
      data-event="drop:_component_.drop"
    >
      I accept anything and have special drop handling
    </div>
  </div>
</div>
```
```css
.drag-source {
  box-shadow: 0 0 2px 2px orange;
  opacity: 0.5;
}
.drag-target {
  min-height: 10px;
  background: rgba(0,0,255,0.25);
}
.drag-target.drag-over {
  background: rgba(0,0,255,0.5);
}
:not([data-drop]) > .drag,
[draggable="true"] {
  border: 1px solid rgba(255,192,0,0.5);
  cursor: pointer;
  display: block;
}

:not([data-drop]) > .drag,
[data-drop],
[draggable="true"] {
  padding: 4px;
  margin: 4px;
  border-radius: 5px;
}
```
```js
const { dragAndDrop } = xinjsui

dragAndDrop.init()
```

> Note that you can drag between two browser tabs containing this
> example (or between two different browsers) and it will work.

### Reorderable List Example

```js
const { elements, xinProxy, getListItem } = xinjs
const { dragAndDrop } = xinjsui

dragAndDrop.init()

const shuffle = (deck) => {
  var shuffled = [];
  for( const card of deck ){
    shuffled.splice( Math.floor( Math.random() * (1 + shuffled.length) ), 0, card );
  }
  return shuffled;
}

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
]
const { spectrum } = xinProxy({
  spectrum: shuffle(colors).map(color => ({color}))
}, true)

const { div, template } = elements

let dragged = null

const dropColor = (event) => {
  const dropped = getListItem(event.target)
  const draggedIndex = spectrum.indexOf(dragged)
  const droppedIndex = spectrum.indexOf(dropped)
  spectrum.splice(draggedIndex, 1)
  spectrum.splice(droppedIndex, 0, dragged)

  console.log({dragged, draggedIndex, dropped, droppedIndex})

  event.preventDefault()
  event.stopPropagation()
}

const dragId = 'spectrum/' + Math.floor(Math.random() * 1e9)

preview.append(
  div(
    {
      bindList: { value: spectrum, idPath: 'color' }
    },
    template(
      div({
        class: 'spectrum',
        bindText: '^.color',
        draggable: 'true',
        dataDrag: dragId,
        dataDrop: dragId,
        onDrop: dropColor,
        bind: {
          value: '^.color',
          binding(element, value) {
            element.style.backgroundColor = value
          }
        },
        onDragstart(event) {
          dragged = getListItem(event.target)
        }
      })
    )
  ),
)
```
```css
.spectrum {
  height: 36px;
  color: white;
  font-weight: 700;
  text-shadow: 1px 2px 0 black;
  padding-left: 10px;
}

.spectrum.drag-over {
  box-shadow: 0 0 0 4px blue;
}
```

> To prevent this example from allowing drags between windows (which
> wouldn't make sense) a random dragId is assigned to `data-drag` and
> `data-drop` in this example.
)
*/var k2=()=>!!document.querySelector(".drag-source"),G3=(t,i)=>{if(!t)return!1;for(let e of t)if(e==="special/any")return!0;else if(e.indexOf("*")>-1){let[s,n]=e.split("/"),[o,a]=i.split("/");if((s==="*"||s===o)&&(n==="*"||n===a))return!0}else if(e===i)return!0},q1=(t)=>{for(let i of[...document.querySelectorAll(`.${t}`)])i.classList.remove(t)},N3=()=>{q1("drag-over"),q1("drag-source"),q1("drag-target")},e3=(t,i=";")=>{return(t||"").split(i).map((e)=>e.trim()).filter((e)=>e!=="")},U3=(t)=>{if(!t)t=[];let i=[...document.querySelectorAll("[data-drop]")];for(let e of i){let s=e3(e.dataset.drop);if(t.find((n)=>G3(s,n)))e.classList.add("drag-target");else e.classList.remove("drag-target")}};function t0(t){let i=t.target?.closest('[draggable="true"],a[href]');if(!i)return;i.classList.add("drag-source");let e=i.matches('[draggable="true"]')?e3(i.dataset.drag||"text/html"):e3(i.dataset.drag||"url");for(let s of e){let n=i.dataset.dragContent||(s==="text/html"?i.innerHTML:i.textContent);t.dataTransfer?.setData(s,n||"")}U3(t.dataTransfer?.types),t.stopPropagation()}function j3(t){if(!k2())U3(t.dataTransfer?.types);let i=t.target.closest(".drag-target");if(i&&t.dataTransfer)i.classList.add("drag-over"),t.dataTransfer.dropEffect="copy";else t.preventDefault(),t.stopPropagation()}function e0(){q1("drag-over")}function i0(t){let i=t.target.closest(".drag-target");if(i){let e=(i.dataset?.drop||"").split(";");for(let s of e)if(G3(t.dataTransfer?.types,s))if(s==="text/html")i.innerHTML=t.dataTransfer?.getData(s)||"";else i.textContent=t.dataTransfer?.getData(s)||""}N3()}var s0=()=>document.querySelector(".drag-source"),W3=!1,i3=()=>{if(W3)return;document.body.addEventListener("dragstart",t0),document.body.addEventListener("dragenter",j3),document.body.addEventListener("dragover",j3),document.body.addEventListener("drop",i0),document.body.addEventListener("dragleave",e0),document.body.addEventListener("dragend",N3),window.addEventListener("dragover",(t)=>t.preventDefault()),window.addEventListener("drop",(t)=>t.preventDefault()),W3=!0};/*!
# table

A virtual data-table, configurable via a `columns` array (which will automatically be generated if not provided),
that displays gigantic tables with fixed headers (and live column-resizing) using a minimum of resources and cpu.

```js
const { dataTable } = xinjsui
const { input } = xinjs.elements

const emojiRequest = await fetch('https://raw.githubusercontent.com/tonioloewald/emoji-metadata/master/emoji-metadata.json')
const emojiData = await emojiRequest.json()

const columns = [
  {
    name: "emoji",
    prop: "chars",
    align: "center",
    width: 80,
    sort: false,
    visible: true
  },
  {
    prop: "name",
    width: 300,
    // custom cell using xinjs bindings to make the field editable
    dataCell() {
      return input({
        class: 'td',
        bindValue: '^.name',
        title: 'name',
        onMouseup: (event) => { event.stopPropagation() },
        onTouchend: (event) => { event.stopPropagation() },
      })
    },
  },
  {
    prop: "category",
    sort: "ascending",
    width: 150
  },
  {
    prop: "subcategory",
    width: 150
  },
]

preview.append(dataTable({
  multiple: true,
  array: emojiData,
  columns,
  rowHeight: 40,
  pinnedBottom: 2
}))
```
```css
.preview input.td {
  margin: 0;
  border-radius: 0;
  box-shadow: none !important;
  background: #fff4;
}

.preview xin-table {
  height: 100%;
}

.preview xin-table [part="pinnedTopRows"],
.preview xin-table [part="pinnedBottomRows"] {
  background: #ddd;
}
```

> In the preceding example, the `name` column is *editable* (and *bound*, try editing something and scrolling
> it out of view and back) and `multiple` select is enabled. In the console, you can try `$('xin-table').visibleRows`
> and $('xin-table').selectedRows`.

You can set the `<xin-table>`'s `array`, `columns`, and `filter` properties directly, or set its `value` to:

```
{
  array: any[],
  columns: ColumnOptions[] | null,
  filter?: ArrayFilter
}
```

## `ColumnOptions`

You can configure the table's columns by providing it an array of `ColumnOptions`:

```
export interface ColumnOptions {
  name?: string
  prop: string
  width: number
  visible?: boolean
  align?: string
  sort?: false | 'ascending' | 'descending'
  headerCell?: (options: ColumnOptions) => HTMLElement
  dataCell?: (options: ColumnOptions) => HTMLElement
}
```

## Selection

`<xin-table>` supports `select` and `multiple` boolean properties allowing rows to be selectable. Selected rows will
be given the `[aria-selected]` attribute, so style them as you wish.

`multiple` select supports shift-clicking and command/meta-clicking.

`<xin-table>` provides an `selectionChanged(visibleSelectedRows: any[]): void` callback property allowing you to respond to changes
in the selection, and also `selectedRows` and `visibleSelectedRows` properties.

The following methods are also provided:

- `<xin-table>.selectRow(row: any, select = true)` (de)selects specified row
- `<xin-table>.selectRows(rows?: any[], select = true)` (de)selects specified rows
- `<xin-table>.deSelect(rows?: any[])` deselects all or specified rows.

These are rather fine-grained but they're used internally by the selection code so they may as well be documented.

## Sorting

By default, the user can sort the table by any column which doesn't have a `sort === false`.

You can set the initial sort by setting the `sort` value of a specific column to `ascending`
or `descending`.

You can override this by setting the table's sort function (it's an `Array.sort()` callback)
to whatever you like, and you can replace the `headerCell` or set the `sort` of each column
to `false` if you have some specific sorting in mind.

You can disable sorting controls by adding the `nosort` attribute to the `<xin-table>`.

## Hiding (and Showing) Columns

By default, the user can show / hide columns by clicking via the column header menu.
You can remove this option by adding the `nohide` attribute to the `<xin-table>`

## Reordering Columns

By default, the user can reorder columns by dragging them around. You can disable this
by adding the `noreorder` attribute to the `<xin-table>`.

## Row Height

If you set the `<xin-table>`'s `rowHeight` to `0` it will render all its elements (i.e. not be virtual). This is
useful for smaller tables, or tables with variable row-heights.

## Styling

Aside from row height (see previous) the component doesn't use the shadowDOM, so it's easy to override
its styles.

## Pinned Rows

The table supports two attributes, `pinnedTop` and `pinnedBottom` that let you pin the specified number
of top and bottom rows.
*/function n0(t,i,e){let s=t.find((n)=>n[i]!==void 0&&n[i]!==null);if(s!==void 0){let n=s[i];switch(typeof n){case"string":if(n.match(/^\d+(\.\d+)?$/))return 6*e;else if(n.includes(" "))return 20*e;else return 12*e;case"number":return 6*e;case"boolean":return 5*e;case"object":return!1;default:return 8*e}}return!1}var{div:v1,span:$1,button:o0,template:a0}=I,J3=(t)=>t;class Q3 extends F{select=!1;multiple=!1;nosort=!1;nohide=!1;noreorder=!1;selectionChanged=()=>{};selectedKey=Symbol("selected");selectBinding=(t,i)=>{t.toggleAttribute("aria-selected",i[this.selectedKey]===!0)};pinnedTop=0;pinnedBottom=0;maxVisibleRows=1e4;get value(){return{array:this.array,filter:this.filter,columns:this.columns}}set value(t){let{array:i,columns:e,filter:s}=u1(t);if(this._array!==i||this._columns!==e||this._filter!==s)this.queueRender();this._array=i||[],this._columns=e||null,this._filter=s||J3}rowData={visible:[],pinnedTop:[],pinnedBottom:[]};_array=[];_columns=null;_filter=J3;charWidth=15;rowHeight=30;minColumnWidth=30;get virtual(){return this.rowHeight>0?{height:this.rowHeight}:void 0}constructor(){super();this.rowData=A1({[this.instanceId]:this.rowData},!0)[this.instanceId],this.initAttributes("rowHeight","charWidth","minColumnWidth","select","multiple","pinnedTop","pinnedBottom","nosort","nohide","noreorder")}get array(){return this._array}set array(t){this._array=u1(t),this.queueRender()}get filter(){return this._filter}set filter(t){if(this._filter!==t)this._filter=t,this.queueRender()}get sort(){if(this._sort)return this._sort;let t=this._columns?.find((e)=>e.sort==="ascending"||e.sort==="descending");if(!t)return;let{prop:i}=t;return t.sort==="ascending"?(e,s)=>e[i]>s[i]?1:-1:(e,s)=>e[i]>s[i]?-1:1}set sort(t){if(this._sort!==t)this._sort=t,this.queueRender()}get columns(){if(!Array.isArray(this._columns)){let{_array:t}=this;this._columns=Object.keys(t[0]||{}).map((i)=>{let e=n0(t,i,this.charWidth);return{name:i.replace(/([a-z])([A-Z])/g,"$1 $2").toLocaleLowerCase(),prop:i,align:typeof t[0][i]==="number"||t[0][i]!==""&&!isNaN(t[0][i])?"right":"left",visible:e!==!1,width:e?e:0}})}return this._columns}set columns(t){this._columns=t,this.queueRender()}get visibleColumns(){return this.columns.filter((t)=>t.visible!==!1)}content=null;getColumn(t){let i=(t.touches!==void 0?t.touches[0].clientX:t.clientX)-this.getBoundingClientRect().x,e=t.touches!==void 0?20:5,s=0,n=[];return this.visibleColumns.find((a)=>{if(a.visible!==!1)return s+=a.width,n.push(s),Math.abs(i-s)<e})}setCursor=(t)=>{if(this.getColumn(t)!==void 0)this.style.cursor="col-resize";else this.style.cursor=""};resizeColumn=(t)=>{let i=this.getColumn(t);if(i!==void 0){let e=Number(i.width),s=t.touches!==void 0,n=s?t.touches[0].identifier:void 0;Q(t,(o,a,l)=>{if((s?[...l.touches].find((d)=>d.identifier===n):!0)===void 0)return!0;let h=e+o;if(i.width=h>this.minColumnWidth?h:this.minColumnWidth,this.setColumnWidths(),l.type==="mouseup")return!0},"col-resize")}};selectRow(t,i=!0){if(i)t[this.selectedKey]=!0;else delete t[this.selectedKey]}selectRows(t,i=!0){for(let e of t||this.array)this.selectRow(e,i)}deSelect(t){this.selectRows(t,!1)}rangeStart;updateSelection=(t)=>{if(!this.select&&!this.multiple)return;let{target:i}=t;if(!(i instanceof HTMLElement))return;let e=i.closest(".tr");if(!(e instanceof HTMLElement))return;let s=w3(e);if(s===!1)return;let n=t,o=window.getSelection();if(o!==null)o.removeAllRanges();let a=this.visibleRows;if(this.multiple&&n.shiftKey&&a.length>0&&this.rangeStart!==s){let l=this.rangeStart===void 0||this.rangeStart[this.selectedKey]===!0,[c,h]=[this.rangeStart!==void 0?a.indexOf(this.rangeStart):0,a.indexOf(s)].sort((d,p)=>d-p);if(c>-1)for(let d=c;d<=h;d++){let p=a[d];this.selectRow(p,l)}}else if(this.multiple&&n.metaKey){this.selectRow(s,!s[this.selectedKey]);let l=a.indexOf(s),c=a[l+1],h=l>0?a[l-1]:void 0;if(c!==void 0&&c[this.selectedKey]===!0)this.rangeStart=c;else if(h!==void 0&&h[this.selectedKey]===!0)this.rangeStart=h;else this.rangeStart=void 0}else this.rangeStart=s,this.deSelect(),s[this.selectedKey]=!0;this.selectionChanged(this.visibleSelectedRows)};connectedCallback(){super.connectedCallback(),this.addEventListener("mousemove",this.setCursor),this.addEventListener("mousedown",this.resizeColumn),this.addEventListener("touchstart",this.resizeColumn,{passive:!0}),this.addEventListener("mouseup",this.updateSelection),this.addEventListener("touchend",this.updateSelection)}setColumnWidths(){this.style.setProperty("--grid-columns",this.visibleColumns.map((t)=>t.width+"px").join(" ")),this.style.setProperty("--grid-row-width",this.visibleColumns.reduce((t,i)=>t+i.width,0)+"px")}sortByColumn=(t,i="auto")=>{for(let e of this.columns.filter((s)=>u1(s.sort)!==!1))if(u1(e)===t){if(i==="auto")e.sort=e.sort==="ascending"?"descending":"ascending";else e.sort=i;this.queueRender()}else delete e.sort};popColumnMenu=(t,i)=>{let{sortByColumn:e}=this,s=this.columns.filter((a)=>a.visible===!1),n=this.queueRender.bind(this),o=[];if(!this.nosort&&i.sort!==!1)o.push({caption:"Sort Ascending",icon:"sortAscending",action(){e(i)}},{caption:"Sort Descending",icon:"sortDescending",action(){e(i,"descending")}});if(!this.nohide){if(o.length)o.push(null);o.push({caption:"Hide Column",icon:"eyeOff",enabled:()=>i.visible!==!0,action(){i.visible=!1,n()}},{caption:"Show Column",icon:"eye",enabled:()=>s.length>0,menuItems:s.map((a)=>{return{caption:a.name||a.prop,action(){delete a.visible,n()}}})})}k({target:t,menuItems:o})};headerCell=(t)=>{let{popColumnMenu:i}=this,e="none",s;switch(t.sort){case"ascending":s=T.sortAscending(),e="descending";break;case!1:break;default:break;case"descending":e="ascending",s=T.sortDescending()}let n=!(this.nosort&&this.nohide)?o0({class:"menu-trigger",onClick(o){i(o.target,t),o.stopPropagation()}},s||T.moreVertical()):{};return t.headerCell!==void 0?t.headerCell(t):$1({class:"th",role:"columnheader",ariaSort:e,style:{...this.cellStyle,textAlign:t.align||"left"}},$1(typeof t.name==="string"?t.name:t.prop),$1({style:{flex:"1"}}),n)};dataCell=(t)=>{if(t.dataCell!==void 0)return t.dataCell(t);return $1({class:"td",role:"cell",style:{...this.cellStyle,textAlign:t.align||"left"},bindText:`^.${t.prop}`})};get visibleRows(){return u1(this.rowData.visible)}get visibleSelectedRows(){return this.visibleRows.filter((t)=>t[this.selectedKey])}get selectedRows(){return this.array.filter((t)=>t[this.selectedKey])}rowTemplate(t){return a0(v1({class:"tr",role:"row",bind:{value:"^",binding:{toDOM:this.selectBinding}}},...t.map(this.dataCell)))}draggedColumn;dropColumn=(t)=>{let i=t.target.closest(".drag-over"),e=Array.from(i.parentElement.children).indexOf(i),s=this.visibleColumns[e],n=this.columns.indexOf(this.draggedColumn),o=this.columns.indexOf(s);this.columns.splice(n,1),this.columns.splice(o,0,this.draggedColumn),console.log({event:t,target:i,targetIndex:e,draggedIndex:n,droppedIndex:o}),this.queueRender(),t.preventDefault(),t.stopPropagation()};render(){super.render(),this.rowData.pinnedTop=this.pinnedTop>0?this._array.slice(0,this.pinnedTop):[],this.rowData.pinnedBottom=this.pinnedBottom>0?this._array.slice(this._array.length-this.pinnedBottom):[],this.rowData.visible=this.filter(this._array.slice(this.pinnedTop,Math.min(this.maxVisibleRows,this._array.length-this.pinnedTop-this.pinnedBottom)));let{sort:t}=this;if(t)this.rowData.visible.sort(t);this.textContent="",this.style.display="flex",this.style.flexDirection="column";let{visibleColumns:i}=this;if(this.style.setProperty("--row-height",`${this.rowHeight}px`),this.setColumnWidths(),!this.noreorder)i3();let e=this.instanceId+"-column-header",s=i.map((n)=>{let o=this.headerCell(n);if(!this.noreorder)o.setAttribute("draggable","true"),o.dataset.drag=e,o.dataset.drop=e,o.addEventListener("dragstart",()=>{this.draggedColumn=n}),o.addEventListener("drop",this.dropColumn);return o});if(this.append(v1({class:"thead",role:"rowgroup",style:{touchAction:"none"}},v1({class:"tr",role:"row"},...s))),this.pinnedTop>0)this.append(v1({part:"pinnedTopRows",class:"tbody",role:"rowgroup",style:{flex:"0 0 auto",overflow:"hidden",height:`${this.rowHeight*this.pinnedTop}px`},bindList:{value:this.rowData.pinnedTop,virtual:this.virtual}},this.rowTemplate(i)));if(this.append(v1({part:"visibleRows",class:"tbody",role:"rowgroup",style:{content:" ",minHeight:"100px",flex:"1 1 100px",overflow:"hidden auto"},bindList:{value:this.rowData.visible,virtual:this.virtual}},this.rowTemplate(i))),this.pinnedBottom>0)this.append(v1({part:"pinnedBottomRows",class:"tbody",role:"rowgroup",style:{flex:"0 0 auto",overflow:"hidden",height:`${this.rowHeight*this.pinnedBottom}px`},bindList:{value:this.rowData.pinnedBottom,virtual:this.virtual}},this.rowTemplate(i)))}}var ee=Q3.elementCreator({tag:"xin-table",styleSpec:{":host":{overflow:"auto hidden"},":host .thead, :host .tbody":{width:m.gridRowWidth},":host .tr":{display:"grid",gridTemplateColumns:m.gridColumns,height:m.rowHeight,lineHeight:m.rowHeight},":host .td, :host .th":{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",display:"flex",alignItems:"center"},":host .th .menu-trigger":{color:"currentColor",background:"none",padding:0,lineHeight:m.touchSize,height:m.touchSize,width:m.touchSize},':host [draggable="true"]':{cursor:"ew-resize"},':host [draggable="true"]:active':{background:O.draggedHeaderBg("#0004"),color:O.draggedHeaderColor("#fff")},":host .drag-over":{background:O.dropHeaderBg("#fff4")}}});/*!
# editable-rect

`<xin-editable>` (`editableRect` is the `ElementCreator` and `EditableRect` is the class) is an element
for allowing the adjustment of another element's position and size. Simply insert it in a `position: absolute`
or `position: fixed` element and you can directly adjust its CSS positioning, including rotation.

Click on an element to adjust its position, dimensions, and rotation.

```js
const { editableRect, icons } = xinjsui
const { elements } = xinjs
const { button } = elements

function showTools(event) {
  event.stopPropagation()
  event.preventDefault()
}

const editable = editableRect(button({class: 'more-popup', onClick: showTools}, icons.moreVertical()))
preview.addEventListener('click', (event) => {
  const target = event.target
  if (['absolute', 'fixed'].includes(getComputedStyle(target).position)) {
    target.append(editable)
  } else {
    editable.remove()
  }
})
preview.addEventListener('change', event => console.log(event))
```
```html
<div class="editable" style="top: 20px; left: 20px; width: auto; height: auto; right: 20px; bottom: 20px;">
  <div class="editable" style="top: 20px; left: 20px; width: 200px; height: 150px;">
  </div>
  <div class="editable" style="bottom: 20px; top: 20px; width: 300px; height: auto; right: 20px;">
  </div>
</div>
```
```css
.preview .editable {
  position: absolute;
  box-shadow: inset 0 0 0 1px #0ccc;
  background: #0cc1;
}

.preview button.more-popup {
  position: absolute;
  width: 44px;
  height: 44px;
  top: 2px;
  right: 2px;
  --text-color: black;
  background: transparent;
  box-shadow: none;
}

.previw button
```

## Snapping

When `EditableRect.snapToGrid === true` or the shift-key is depresseed, position will snap to `EditableRect.gridSize` pixels (default = 8).

Similarly `EditableRect.snapAngle === true` or the shift-key will snap rotation to increments of `EditableRect.angleSize` degrees (default = 15).

## Events

After an element's position, size, or rotation are adjusted a `change` event is triggered on the element.
*/var{div:X,slot:l0}=I;class Z extends F{static angleSize=15;static gridSize=8;static snapAngle=!1;static snapToGrid=!1;static styleSpec={":host":{"--handle-bg":"#fff4","--handle-color":"#2228","--handle-hover-bg":"#8ff8","--handle-hover-color":"#222","--handle-size":"20px","--handle-padding":"2px"},":host ::slotted(*)":{position:"absolute"},":host > :not(style,slot)":{boxSizing:"border-box",content:'" "',position:"absolute",display:"flex",height:m.handleSize,width:m.handleSize,padding:m.handlePadding,"--text-color":m.handleColor,background:m.handleBg},":host > .drag-size":{top:0,bottom:0,left:0,right:0,height:"auto",width:"auto",background:"transparent",cursor:"ew-resize"},':host > [part="rotate"]':{transform:`translateY(${m.handleSize_50})`},":host > [locked] > svg:first-child, :host > :not([locked]) > svg+svg":{display:"none"},":host .icon-unlock":{opacity:0.5},":host svg":{pointerEvents:"none"},":host > *:hover":{"--text-color":m.handleHoverColor,background:m.handleHoverBg}};static snappedCoords(t,i){let{gridSize:e}=Z;return Z.snapToGrid||t.shiftKey?i.map((s)=>Math.round(s/e)*e):i}static snappedAngle(t,i){let{angleSize:e}=Z;return Z.snapAngle||t.shiftKey?Math.round(i/e)*e:i}get locked(){let t=this.parentElement;if(t.style.inset)return{left:!0,top:!0,bottom:!0,right:!0};let i=t.style.right.match(/\d/)!==null,e=!i||t.style.left.match(/\d/)!==null,s=t.style.bottom.match(/\d/)!==null,n=!s||t.style.top.match(/\d/)!==null;return{left:e,top:n,bottom:s,right:i}}set locked(t){let{bottom:i,right:e}=t,{left:s,top:n}=t,o=this.parentElement,a=o.offsetLeft,l=o.offsetTop,c=o.offsetWidth,h=o.offsetHeight,d=o.offsetParent.offsetWidth-a-c,p=o.offsetParent.offsetHeight-l-h;if(Object.assign(o.style,{left:"",right:"",top:"",bottom:"",width:"",height:""}),!e)s=!0;if(!i)n=!0;if(s)o.style.left=a+"px";if(e)o.style.right=d+"px";if(s&&e)o.style.width="auto";else o.style.width=c+"px";if(n)o.style.top=l+"px";if(i)o.style.bottom=p+"px";if(n&&i)o.style.height="auto";else o.style.height=h+"px";this.queueRender()}get coords(){let{top:t,left:i,right:e,bottom:s}=this.parentElement.style;return{top:parseFloat(t),left:parseFloat(i),right:parseFloat(e),bottom:parseFloat(s)}}get left(){return this.parentElement.offsetLeft}get width(){return this.parentElement.offsetWidth}get right(){return this.parentElement.offsetParent.offsetWidth-(this.left+this.width)}get top(){return this.parentElement.offsetTop}get height(){return this.parentElement.offsetHeight}get bottom(){return this.parentElement.offsetParent.offsetHeight-(this.top+this.height)}triggerChange=()=>{this.parentElement.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))};adjustPosition=(t)=>{let{locked:i}=this;this.locked=i;let e=this.parentElement,{top:s,left:n,bottom:o,right:a}=this.coords;Q(t,(l,c,h)=>{if([l,c]=Z.snappedCoords(h,[l,c]),!isNaN(s))e.style.top=s+c+"px";if(!isNaN(o))e.style.bottom=o-c+"px";if(!isNaN(n))e.style.left=n+l+"px";if(!isNaN(a))e.style.right=a-l+"px";if(h.type==="mouseup")return this.triggerChange(),!0})};resize=(t)=>{let i=this.parentElement,{locked:e}=this;this.locked=Object.assign({left:!0,top:!0,right:!0,bottom:!0});let[s,n]=[this.right,this.bottom];Q(t,(o,a,l)=>{let c=s-o,h=n-a;if([c,h]=Z.snappedCoords(l,[c,h]),i.style.right=c+"px",i.style.bottom=h+"px",l.type==="mouseup")return this.locked=e,this.triggerChange(),!0})};adjustSize=(t)=>{let i=this.parentElement,{locked:e}=this,s=t.target.getAttribute("part");this.locked=Object.assign({left:!0,right:!0,top:!0,bottom:!0});let n=this[s];Q(t,(o,a,l)=>{let[c]=Z.snappedCoords(l,[n+(["left","right"].includes(s)?o:a)*(["right","bottom"].includes(s)?-1:1)]);if(i.style[s]=c+"px",l.type==="mouseup")return this.locked=e,this.triggerChange(),!0})};get rect(){return this.parentElement.getBoundingClientRect()}get center(){let t=this.parentElement.getBoundingClientRect();return{x:t.x+t.width*0.5,y:t.y+t.height*0.5}}get element(){return this.parentElement}adjustRotation=(t)=>{let{center:i}=this,{transformOrigin:e}=this.element.style;if(!e)this.element.style.transformOrigin="50% 50%";Q(t,(s,n,o)=>{let{clientX:a,clientY:l}=o,c=a-i.x,h=l-i.y,d=h>0?90:-90;if(c!==0)d=Math.atan2(h,c)*180/Math.PI;if(d=Z.snappedAngle(o,d),d===0)this.element.style.transformOrigin="",this.element.style.transform="";else this.element.style.transform=`rotate(${d}deg)`;return this.triggerChange(),o.type==="mouseup"})};toggleLock=(t)=>{let{locked:i}=this,e=t.target.title.split(" ")[1];i[e]=!i[e],this.locked=i,this.queueRender(),t.stopPropagation(),t.preventDefault()};content=()=>[X({part:"move",style:{top:"50%",left:"50%",transform:"translate(-50%,-50%)"}},T.move()),X({part:"left",title:"resize left",class:"drag-size",style:{left:"-6px",width:"8px"}}),X({part:"right",title:"resize right",class:"drag-size",style:{left:"calc(100% - 2px)",width:"8px"}}),X({part:"top",title:"resize top",class:"drag-size",style:{top:"-6px",height:"8px",cursor:"ns-resize"}}),X({part:"bottom",title:"resize bottom",class:"drag-size",style:{top:"calc(100% - 2px)",height:"8px",cursor:"ns-resize"}}),X({part:"resize",style:{top:"100%",left:"100%"}},T.resize()),X({part:"rotate",style:{top:"50%",right:"0"}},T.refresh()),X({part:"lockLeft",title:"lock left",style:{top:"50%",left:0,transform:"translate(-100%, -50%)"}},T.unlock(),T.lock()),X({part:"lockRight",title:"lock right",style:{top:"50%",left:"100%",transform:"translate(0%, -50%)"}},T.unlock(),T.lock()),X({part:"lockTop",title:"lock top",style:{top:0,left:"50%",transform:"translate(-50%, -100%)"}},T.unlock(),T.lock()),X({part:"lockBottom",title:"lock bottom",style:{top:"100%",left:"50%",transform:"translate(-50%, 0%)"}},T.unlock(),T.lock()),l0()];constructor(){super();this.initAttributes("rotationSnap","positionSnap")}connectedCallback(){super.connectedCallback();let{left:t,right:i,top:e,bottom:s,lockLeft:n,lockRight:o,lockTop:a,lockBottom:l,move:c,resize:h,rotate:d}=this.parts,p={passive:!0};[t,i,e,s].forEach((g)=>{g.addEventListener("mousedown",this.adjustSize,p),g.addEventListener("touchstart",this.adjustSize,p)}),[n,o,a,l].forEach((g)=>{g.addEventListener("click",this.toggleLock)}),h.addEventListener("mousedown",this.resize,p),c.addEventListener("mousedown",this.adjustPosition,p),d.addEventListener("mousedown",this.adjustRotation,p),h.addEventListener("touchstart",this.resize,p),c.addEventListener("touchstart",this.adjustPosition,p),d.addEventListener("touchstart",this.adjustRotation,p)}render(){if(super.render(),!this.parentElement)return;let{lockLeft:t,lockRight:i,lockTop:e,lockBottom:s}=this.parts,{left:n,right:o,top:a,bottom:l}=this.locked;t.toggleAttribute("locked",n),i.toggleAttribute("locked",o),e.toggleAttribute("locked",a),s.toggleAttribute("locked",l)}}var ae=Z.elementCreator({tag:"xin-editable"});/*!
# filter

Automatically creates `ArrayFilter` functions `(a: any[]) => any[]` based on the query you build using its
macOS Finder-inspired interface, using an easily customizable / extensible collection of `Filter` objects.

```js
const { elements } = xinjs
const { dataTable, filterBuilder, availableFilters } = xinjsui

const sourceWords = ['acorn', 'bubblegum', 'copper', 'daisy', 'ellipse', 'fabulous', 'gerund', 'hopscotch', 'idiom', 'joke']
function randomWords () {
  let numWords = Math.random() * 4
  const words = []
  while (numWords > 0) {
    numWords -= 1
    words.push(sourceWords[Math.floor(Math.random() * 10)])
  }
  return [...new Set(words)]
}

const array = []
for(let i = 0; i < 1000; i++) {
  array.push({
    date: new Date(Math.random() * Date.now()).toISOString().split('T')[0],
    isLucky: Math.random() < 0.1,
    number: Math.floor(Math.random() * 200 - 100),
    string: randomWords().join(' '),
    tags: randomWords()
  })
}

const { span } = elements
const tagsBinding = {
  value: '^.tags',
  binding: {
    toDOM(element, value) {
      element.classList.add('tag-list')
      element.textContent = ''
      element.append(...value.map(tag => span(tag, {class: 'tag'})))
    }
  }
}

const columns = [
  {
    prop: 'date',
    width: 120
  },
  {
    prop: 'isLucky',
    type: 'boolean',
    width: 90
  },
  {
    prop: 'number',
    align: 'right',
    width: 90
  },
  {
    prop: 'string',
    width: 200
  },
  {
    prop: 'tags',
    width: 200,
    dataCell() {
      return elements.div({ bind: tagsBinding })
    }
  },
]

const table = dataTable({ array, columns })
const filter = filterBuilder({
  fields: columns,
  onChange(event) {
    table.filter = filter.filter
  }
})
preview.append(filter, table)
```
```css
.preview {
  display: flex;
  flex-direction: column;
}

.preview xin-table {
  flex: 1 1 auto;
}

.preview .tag-list {
  display: flex;
  font-size: 80%;
  align-items: center;
  gap: 2px;
}

.preview .tag {
  display: inline-block;
  border-radius: 4px;
  padding: 0 5px;
  line-height: 20px;
  height: 20px;
  color: var(--brand-text-color);
  background: var(--brand-color);
}
```

## serialization

The current state of a `<xin-filter>` can be serialized as, and restored from, a Javascript object (which itself
can easily be converted into JSON or a URL component) via its `state` property. Obviously, a `<xin-filter>` can
only restore state if it has the necessary constituent `filters`.

## availableFilters

`<xin-filter>` has a default set of `FilterMaker` objects which it uses to construct filter function.
In the example above, the default collection of filters is reduced to `contains`, `equals`, `after`, and `isTrue`.

The full collection includes:

- **contains** * looks for fields containing a string (ignoring case)
- **equals** * looks for fields containing equivalent values (ignoring case)
- **after** * looks for fields with a date after a provided value
- **greaterThan** * looks for fields with a value greater than a provided value
- **truthy** * looks for fields that are true / non-zero / non-empty
- **true** looks for fields that are `true`
- **false** looks for fields that are `false`
- **hasTags** looks for fields that are arrays containing all the (space/comma) delimited strings
- **doesNotHaveTags** looks for fields that are arrays containing *none* of the strings

**Note**: the filters marked with an * have negative version (e.g. does not contain).

```
type ObjectTest (obj: any) => boolean

interface FilterMaker {
  caption: string                                 // describes the test condition
  negative?: string                               // describes the negative test condition
  needsValue?: boolean                            // if false, the filterMaker doesn't need a needle value
  filterMaker(needle: any) => ObjectTest          // builds an ObjectTest
}
```
*/var{div:c0,input:r0,select:K3,option:x1,button:o3,span:h0}=I,X3=(t)=>t,Z3="null filter, everything matches",Y3={contains:{caption:"contains",negative:"does not contain",makeTest:(t)=>{return t=t.toLocaleLowerCase(),(i)=>String(i).toLocaleLowerCase().includes(t)}},hasTags:{caption:"has tags",makeTest:(t)=>{let i=t.split(/[\s,]/).map((e)=>e.trim().toLocaleLowerCase()).filter((e)=>e!=="");return console.log(i),(e)=>Array.isArray(e)&&i.find((s)=>!e.includes(s))===void 0}},doesNotHaveTags:{caption:"does not have tags",makeTest:(t)=>{let i=t.split(/[\s,]/).map((e)=>e.trim().toLocaleLowerCase()).filter((e)=>e!=="");return console.log(i),(e)=>Array.isArray(e)&&i.find((s)=>e.includes(s))===void 0}},equals:{caption:"=",negative:"≠",makeTest:(t)=>{if(isNaN(Number(t)))return t=String(t).toLocaleLowerCase(),(e)=>String(e).toLocaleLowerCase()===t;let i=Number(t);return(e)=>Number(e)===i}},after:{caption:"is after",negative:"is before",makeTest:(t)=>{let i=new Date(t);return(e)=>new Date(e)>i}},greaterThan:{caption:">",negative:"≤",makeTest:(t)=>{if(!isNaN(Number(t))){let i=Number(t);return(e)=>Number(e)>i}return t=t.toLocaleLowerCase(),(i)=>String(i).toLocaleLowerCase()>t}},truthy:{caption:"is true/non-empty/non-zero",negative:"is false/empty/zero",needsValue:!1,makeTest:()=>(t)=>!!t},isTrue:{caption:"= true",needsValue:!1,makeTest:()=>(t)=>t===!0},isFalse:{caption:"= false",needsValue:!1,makeTest:()=>(t)=>t===!1}},d0={description:"anything",test:()=>!0};function R3(t){return t.options[t.selectedIndex].text}class B3 extends F{fields=[];filters=Y3;haystack="*";condition="";needle="";content=()=>[K3({part:"haystack"}),T.chevronDown(),K3({part:"condition"}),T.chevronDown(),r0({part:"needle",type:"search"}),h0({part:"padding"}),o3({part:"remove",title:"delete"},T.trash())];filter=d0;constructor(){super();this.initAttributes("haystack","condition","needle")}get state(){let{haystack:t,needle:i,condition:e}=this.parts;return{haystack:t.value,needle:i.value,condition:e.value}}set state(t){Object.assign(this,t)}buildFilter=()=>{let{haystack:t,condition:i,needle:e}=this.parts,s=i.value.startsWith("~"),n=s?i.value.slice(1):i.value,o=this.filters[n];e.hidden=o.needsValue===!1;let a=o.needsValue===!1?o.makeTest(void 0):o.makeTest(e.value),l=t.value,c;if(l!=="*")c=s?(p)=>!a(p[l]):(p)=>a(p[l]);else c=s?(p)=>Object.values(p).find((g)=>!a(g))!==void 0:(p)=>Object.values(p).find((g)=>a(g))!==void 0;let h=o.needsValue!==!1?` "${e.value}"`:"",d=`${R3(t)} ${R3(i)}${h}`;this.filter={description:d,test:c},this.parentElement?.dispatchEvent(new Event("change"))};connectedCallback(){super.connectedCallback();let{haystack:t,condition:i,needle:e,remove:s}=this.parts;t.addEventListener("change",this.buildFilter),i.addEventListener("change",this.buildFilter),e.addEventListener("input",this.buildFilter),t.value=this.haystack,i.value=this.condition,e.value=this.needle,s.addEventListener("click",()=>{let{parentElement:n}=this;this.remove(),n?.dispatchEvent(new Event("change"))})}render(){super.render();let{haystack:t,condition:i,needle:e}=this.parts;t.textContent="",t.append(x1("any field",{value:"*"}),...this.fields.map((n)=>{let o=n.name||n.prop;return x1(`${o}`,{value:n.prop})})),i.textContent="";let s=Object.keys(this.filters).map((n)=>{let o=this.filters[n];return o.negative!==void 0?[x1(o.caption,{value:n}),x1(o.negative,{value:"~"+n})]:x1(o.caption,{value:n})}).flat();if(i.append(...s),this.haystack!=="")t.value=this.haystack;if(this.condition!=="")i.value=this.condition;if(this.needle!=="")e.value=this.needle;this.buildFilter()}}var n3=B3.elementCreator({tag:"xin-filter-part",styleSpec:{":host":{display:"flex"},':host svg[class^="icon-"]:':{height:"var(--font-size, 16px)",verticalAlign:"middle",fill:"var(--text-color)",pointerEvents:"none"},':host [part="haystack"], :host [part="condition"]':{flex:"1"},':host [part="needle"]':{flex:2},':host [hidden]+[part="padding"]':{display:"block",content:" ",flex:"1 1 auto"}}});class k3 extends F{_fields=[];get fields(){return this._fields}set fields(t){this._fields=t,this.queueRender()}get state(){let{filterContainer:t}=this.parts;return[...t.children].map((i)=>i.state)}set state(t){let{fields:i,filters:e}=this,{filterContainer:s}=this.parts;s.textContent="";for(let n of t)s.append(n3({fields:i,filters:e,...n}))}filter=X3;description=Z3;addFilter=()=>{let{fields:t,filters:i}=this,{filterContainer:e}=this.parts;e.append(n3({fields:t,filters:i}))};content=()=>[o3({part:"add",title:"add filter condition",onClick:this.addFilter,class:"round"},T.plus()),c0({part:"filterContainer"}),o3({part:"reset",title:"reset filter",onClick:this.reset},T.x())];filters=Y3;reset=()=>{let{fields:t,filters:i}=this,{filterContainer:e}=this.parts;this.description=Z3,this.filter=X3,e.textContent="",e.append(n3({fields:t,filters:i})),this.dispatchEvent(new Event("change"))};buildFilter=()=>{let{filterContainer:t}=this.parts;if(t.children.length===0){this.reset();return}let i=[...t.children].map((s)=>s.filter),e=i.map((s)=>s.test);this.description=i.map((s)=>s.description).join(", "),this.filter=(s)=>s.filter((n)=>e.find((o)=>o(n)===!1)===void 0),this.dispatchEvent(new Event("change"))};connectedCallback(){super.connectedCallback();let{filterContainer:t}=this.parts;t.addEventListener("change",this.buildFilter),this.reset()}render(){super.render()}}var de=k3.elementCreator({tag:"xin-filter",styleSpec:{":host":{height:"auto",display:"grid",gridTemplateColumns:"32px calc(100% - 64px) 32px",alignItems:"center"},':host [part="filterContainer"]':{display:"flex",flexDirection:"column",alignItems:"stretch",flex:"1 1 auto"},':host [part="add"], :host [part="reset"]':{"--button-size":"var(--touch-size, 32px)",borderRadius:"999px",height:"var(--button-size)",lineHeight:"var(--button-size)",margin:"0",padding:"0",textAlign:"center",width:"var(--button-size)",flex:"0 0 var(--button-size)"}}});/*!
# forms

`<xin-form>` and `<xin-field>` can be used to quickly create forms complete with
[client-side validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#built-in_form_validation_examples).

```js
const form = preview.querySelector('xin-form')
preview.querySelector('.submit').addEventListener('click', form.submit)
```
```html
<xin-form value='{"formInitializer": "initial value from form"}'>
  <h3 slot="header">Example Form Header</h3>
  <xin-field caption="Required field" key="required"></xin-field>
  <xin-field optional key="optional"><i>Optional</i> Field</xin-field>
  <xin-field key="text" type="text" placeholder="type it in here">Tell us a long story</xin-field>
  <xin-field caption="Zip Code" placeholder="12345 or 12345-6789" key="zipcode" pattern="\d{5}(-\d{4})?"></xin-field>
  <xin-field caption="Date" key="date" type="date"></xin-field>
  <xin-field caption="Number" key="number" type="number"></xin-field>
  <xin-field caption="Range" key="range" type="range" min="0" max="10"></xin-field>
  <xin-field key="boolean" type="checkbox">😃 <b>Agreed?!</b></xin-field>
  <xin-field key="color" type="color" value="pink">
    favorite color
  </xin-field>
  <xin-field key="select">
    Custom Field
    <select slot="input">
      <option>This</option>
      <option>That</option>
      <option>The Other</option>
    </select>
  </xin-field>
  <xin-field key="tags">
    Tag List
    <xin-tag-list editable slot="input" available-tags="pick me,no pick me"></xin-tag-list>
  </xin-field>
  <xin-field key="rating">
    Rate this form!
    <xin-rating slot="input"></xin-rating>
  </xin-field>
  <xin-field key="like">
    Do you like it?
    <xin-segmented
      choices="yes=Yes:thumbsUp,no=No:thumbsDown"
      slot="input"
    ></xin-segmented>
  </xin-field>
  <xin-field key="relationship">
    Relationship Status
    <xin-segmented
      style="--segmented-direction: column; --segmented-align-items: stretch"
      choices="couple=In a relationship,single=Single"
      other="It's complicated…"
      slot="input"
    ></xin-segmented>
  </xin-field>
  <xin-field key="amount" fixed-precision="2" type="number" prefix="$" suffix="(USD)">
    What's it worth?
  </xin-field>
  <xin-field key="valueInitializer" value="initial value from field">
    Initialized by field
  </xin-field>
  <xin-field key="formInitializer">
    Initialized by form
  </xin-field>
  <button slot="footer" class="submit">Submit</button>
</xin-form>
```
```css
.preview xin-form {
  height: 100%;
}

.preview ::part(header), .preview ::part(footer) {
  background: #ddd;
  justify-content: center;
  padding: calc(var(--spacing) * 0.5) var(--spacing);
}

.preview h3, .preview h4 {
  margin: 0;
  padding: 0;
}

.preview ::part(content) {
  padding: var(--spacing);
  gap: var(--spacing);
  background: #e8e8e8;
}

.preview label {
  display: grid;
  grid-template-columns: 180px auto 100px;
  gap: var(--spacing);
}

.preview label [part="caption"] {
  text-align: right;
}

.preview label:has(:invalid:required)::after {
  content: '* required'
}

@media (max-width: 500px) {
  .preview label [part="caption"] {
    text-align: center;
  }

  .preview label {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: stretch;
    gap: calc(var(--spacing) * 0.5);
  }

  .preview label:has(:invalid:required)::after {
    position: absolute;
    top: 0;
    right: 0;
    content: '*'
  }

  .preview xin-field [part="field"],
  .preview xin-field [part="input"] > * {
    display: flex;
    justify-content: center;
  }
}

.preview :invalid {
  box-shadow: inset 0 0 2px red;
}
```

## `<xin-form>`

`<xin-form>` prevents the default form behavior when a `submit` event is triggered and instead validates the
form contents (generating feedback if desired) and calls its `submitCallback(value: {[key: string]: any}, isValid: boolean): void`
method.

`<xin-form>` offers a `fields` proxy that allows values stored in the form to be updated. Any changes will trigger a `change`
event on the `<xin-form>` (in addition to any events fired by form fields).

`<xin-form>` instances have `value` and `isValid` properties you can access any time. Note that `isValid` is computed
and triggers form validation.

`<xin-form>` has `header` and `footer` `<slot>`s in addition to default `<slot>`, which is tucked inside a `<form>` element.

## `<xin-field>`

`<xin-field>` is a simple web-component with no shadowDOM that combines an `<input>` field wrapped with a `<label>`. Any
content of the custom-element will become the `caption` or you can simply set the `caption` attribute.

You can replace the default `<input>` field by adding an element to the slot `input` (it's a `xinSlot`) whereupon
the `value` of that element will be used instead of the built-in `<input>`. (The `<input>` is retained and
is used to drive form-validation.)

`<xin-field>` supports the following attributes:

- `caption` labels the field
- `key` determines the form property the field will populate
- `type` determines the data-type: '' | 'checkbox' | 'number' | 'range' | 'date' | 'text' | 'color'
- `optional` turns off the `required` attribute (fields are required by default)
- `pattern` is an (optional) regex pattern
- `placeholder` is an (optional) placeholder

The `text` type populates the `input` slot with a `<textarea>` element.

The `color` type populates the `input` slot with a `<xin-color>` element (and thus supports colors with alpha values).

<xin-css-var-editor element-selector="xin-field" target-selector=".preview"></xin-css-var-editor>
*/var{form:u0,slot:a3,xinSlot:t2,label:p0,input:f0,span:v0}=I;function l1(t,i,e){if(e!==""&&e!==!1)t.setAttribute(i,e);else t.removeAttribute(i)}function g0(t){switch(t.type){case"checkbox":return t.checked;case"radio":{let i=t.parentElement?.querySelector(`input[type="radio"][name="${t.name}"]:checked`);return i?i.value:null}case"range":case"number":return Number(t.value);default:return Array.isArray(t.value)&&t.value.length===0?null:t.value}}function e2(t,i){if(!(t instanceof HTMLElement));else if(t instanceof HTMLInputElement)switch(t.type){case"checkbox":t.checked=i;break;case"radio":t.checked=i===t.value;break;default:t.value=String(i||"")}else if(i!=null||t.value!=null)t.value=String(i||"")}class l3 extends F{caption="";key="";type="";optional=!1;pattern="";placeholder="";min="";max="";step="";fixedPrecision=-1;value=null;content=p0(t2({part:"caption"}),v0({part:"field"},t2({part:"input",name:"input"}),f0({part:"valueHolder"})));constructor(){super();this.initAttributes("caption","key","type","optional","pattern","placeholder","min","max","step","fixedPrecision","prefix","suffix")}valueChanged=!1;handleChange=()=>{let{input:t,valueHolder:i}=this.parts,e=t.children[0]||i;if(e!==i)i.value=e.value;this.value=g0(e),this.valueChanged=!0;let s=this.closest("xin-form");if(s&&this.key!=="")switch(this.type){case"checkbox":s.fields[this.key]=e.checked;break;case"number":case"range":if(this.fixedPrecision>-1)e.value=Number(e.value).toFixed(this.fixedPrecision),s.fields[this.key]=Number(e.value);else s.fields[this.key]=Number(e.value);break;default:s.fields[this.key]=e.value}};initialize(t){let i=t.fields[this.key]!==void 0?t.fields[this.key]:this.value;if(i!=null&&i!==""){if(t.fields[this.key]==null)t.fields[this.key]=i;this.value=i}}connectedCallback(){super.connectedCallback();let{input:t,valueHolder:i}=this.parts,e=this.closest(_1.tagName);if(e instanceof _1)this.initialize(e);i.addEventListener("change",this.handleChange),t.addEventListener("change",this.handleChange,!0)}render(){if(this.valueChanged){this.valueChanged=!1;return}let{input:t,caption:i,valueHolder:e,field:s}=this.parts;if(i.textContent?.trim()==="")i.append(this.caption!==""?this.caption:this.key);if(this.type==="text"){t.textContent="";let n=I.textarea({value:this.value});if(this.placeholder)n.setAttribute("placeholder",this.placeholder);t.append(n)}else if(this.type==="color")t.textContent="",t.append($3({value:this.value}));else if(t.children.length===0)l1(e,"placeholder",this.placeholder),l1(e,"type",this.type),l1(e,"pattern",this.pattern),l1(e,"min",this.min),l1(e,"max",this.max),l1(e,"step",this.step);if(e2(e,this.value),e2(t.children[0],this.value),this.prefix?s.setAttribute("prefix",this.prefix):s.removeAttribute("prefix"),this.suffix?s.setAttribute("suffix",this.suffix):s.removeAttribute("suffix"),e.classList.toggle("hidden",t.children.length>0),t.children.length>0)e.setAttribute("tabindex","-1");else e.removeAttribute("tabindex");t.style.display=t.children.length===0?"none":"",l1(e,"required",!this.optional)}}class _1 extends F{context={};value={};get isValid(){return[...this.querySelectorAll("*")].filter((i)=>i.required!==void 0).find((i)=>!i.reportValidity())===void 0}static styleSpec={":host":{display:"flex",flexDirection:"column"},":host::part(header), :host::part(footer)":{display:"flex"},":host::part(content)":{display:"flex",flexDirection:"column",overflow:"hidden auto",height:"100%",width:"100%",position:"relative",boxSizing:"border-box"},":host form":{display:"flex",flex:"1 1 auto",position:"relative",overflow:"hidden"}};content=[a3({part:"header",name:"header"}),u0({part:"form"},a3({part:"content"})),a3({part:"footer",name:"footer"})];getField=(t)=>{return this.querySelector(`xin-field[key="${t}"]`)};get fields(){if(typeof this.value==="string")try{this.value=JSON.parse(this.value)}catch(e){console.log("<xin-form> could not use its value, expects valid JSON"),this.value={}}let{getField:t}=this,i=this.dispatchEvent.bind(this);return new Proxy(this.value,{get(e,s){return e[s]},set(e,s,n){if(e[s]!==n){e[s]=n;let o=t(s);if(o)o.value=n;i(new Event("change"))}return!0}})}set fields(t){let i=[...this.querySelectorAll(l3.tagName)];for(let e of i)e.value=t[e.key]}submit=()=>{this.parts.form.dispatchEvent(new Event("submit"))};handleSubmit=(t)=>{t.preventDefault(),t.stopPropagation(),this.submitCallback(this.value,this.isValid)};submitCallback=(t,i)=>{console.log("override submitCallback to handle this data",{value:t,isValid:i})};connectedCallback(){super.connectedCallback();let{form:t}=this.parts;t.addEventListener("submit",this.handleSubmit)}}var ge=l3.elementCreator({tag:"xin-field",styleSpec:{':host [part="field"]':{position:"relative",display:"flex",alignItems:"center",gap:O.prefixSuffixGap("8px")},':host [part="field"][prefix]::before':{content:"attr(prefix)"},':host [part="field"][suffix]::after':{content:"attr(suffix)"},':host [part="field"] > *, :host [part="input"] > *':{width:"100%"},":host textarea":{resize:"none"},':host input[type="checkbox"]':{width:"fit-content"},":host .hidden":{position:"absolute",pointerEvents:"none",opacity:0}}}),me=_1.elementCreator({tag:"xin-form"});/*!
# gamepads

A couple of utility functions for dealing with gamepads and XRInputs.

`gamepadState()` gives you a condensed version of active gamepad state

`gamepadText()` provides the above in minimal text form for debugging

```js
const { elements } = xinjs
const { gamepadText } = xinjsui

const pre = elements.pre()
preview.append(pre)

const interval = setInterval(() => {
  if (!pre.closest('body')) {
    clearInterval(interval)
  } else {
    pre.textContent = gamepadText()
  }
}, 100)
```

## XRInput Devices

> This is experimental, the API is changing and stuff doesn't work. Hopefully it
> will become a lot more generally useful once Apple's VisionPro comes out.

`xrControllers(babylonjsXRHelper)` returns an `XinXRControllerMap` structure that tries to
conveniently render the current state of XR controls. (The babylonjs API for this is horrific!)

`xrControllerText(controllerMap)` renders the map output by the above in a compact form
which is useful when debugging.
*/function m0(){return navigator.getGamepads().filter((i)=>i!==null).map((i)=>{let{id:e,axes:s,buttons:n}=i;return{id:e,axes:s,buttons:n.map((o,a)=>{let{pressed:l,value:c}=o;return{index:a,pressed:l,value:c}}).filter((o)=>o.pressed||o.value!==0).reduce((o,a)=>{return o[a.index]=a.value,o},{})}})}function Me(){let t=m0();return t.length===0?"no active gamepads":t.map(({id:i,axes:e,buttons:s})=>{let n=e.map((a)=>a.toFixed(2)).join(" "),o=Object.keys(s).map((a)=>`[${a}](${s[Number(a)].toFixed(2)})`).join(" ");return`${i}
${n}
${o}`}).join(`
`)}function ye(t){let i={};return t.input.onControllerAddedObservable.add((e)=>{e.onMotionControllerInitObservable.add((s)=>{let n={};s.getComponentIds().forEach((a)=>{let l=s.getComponent(a);if(n[a]={pressed:l.pressed},l.onButtonStateChangedObservable.add(()=>{n[a].pressed=l.pressed}),l.onAxisValueChangedObservable)n[a].axes=[],l.onAxisValueChangedObservable.add((c)=>{n[a].axes=c})}),i[s.handedness]=n})}),i}function ze(t){if(t===void 0||Object.keys(t).length===0)return"no xr inputs";return Object.keys(t).map((i)=>{let e=t[i],s=Object.keys(e).filter((n)=>e[n].pressed).join(" ");return`${i}
${s}`}).join(`
`)}/*!
# tabs

`<xin-tabs>` creates a `tabpanel` for its children, creating a `tab` for each based on its
`name` attribute.

```js
[...preview.querySelectorAll('div[name]')].forEach(div => {
  div.style.color = `hsl(${(Math.random() * 360).toFixed(0)} 50% 50%)`
})

const { div, button } = xinjs.elements
const tabSelector = preview.querySelector('xin-tabs')

tabSelector.onCloseTab = body => {
  if (!confirm(`Are you sure you want to close the ${body.getAttribute('name')} tab?`)) {
    return false
  }
}

let bodycount = 0
preview.querySelector('.add').addEventListener('click', () => {
  const name = `new tab ${++bodycount}`
  const body = div(
    {name, dataClose: true},
    name,
  )
  tabSelector.addTabBody(body, true)
})
```
```html
<xin-tabs>
  <div name="first">first body</div>
  <div name="second" data-close>
    <template role="tab">
      <xin-icon
        style="
          display: inline-block;
          width: 16px;
          height: 16px;
          transform: translateY(2px);
          margin-right: 4px;
          fill: var(--brand-color);
        "
        icon="eye"
      ></xin-icon>
      <span>Ooooh!!!</span>
    </template>
    look at the html…
  </div>
  <div name="third">third body</div>
  <button class="add" slot="after-tabs">
    <xin-icon icon="plus"></xin-icon>
  </button>
</xin-tabs>
```
```css
  .preview xin-tabs {
    height: 100%;
  }

  .preview div[name] {
    padding: 20px;
    text-align: center;
    height: 100%;
    font-size: 200%;
  }

  .preview .add {
    width: 38px;
    line-height: 38px;
    height: 38px;
    padding: 0;
  }
```

The `<xin-tabs>`s `value` is the index of its active body.

A `<xin-tabs>` has `addTabBody(body: HTMLElement, select?: boolean)` and
`removeTabBody(body: number | HTMLElement)` methods for updating its content.

You can also just insert or remove tab bodies directly and call `setupTabs()`.

## Closeable Tabs

Adding the `data-close` attribute to a tab will make it closeable.

When a tab is closed, the `<xin-tabs>` element's `onCloseTab: (tabBody: Element) => boolean | undefined | void`
will be called. If you override this method and return `false`, the tab will
not be closed (e.g. if you want to implement save/cancel behavior).

## Custom Tab Content

You can specify the exact content of the tab for a given body by
adding a `<template role="tab">` to that body. The contents of that
template will be cloned into the tab.
*/var{div:c1,slot:i2,span:b0,button:M0}=I;class c3 extends F{value=0;static makeTab(t,i,e){let s=i.querySelector('template[role="tab"]')?.content.cloneNode(!0)||b0(i.getAttribute("name"));return c1(s,{part:"tab",tabindex:0,role:"tab",ariaControls:e},i.hasAttribute("data-close")?M0({title:"close",class:"close"},T.x()):{})}static styleSpec={":host":{display:"flex",flexDirection:"column",position:"relative",overflow:"hidden",boxShadow:"none !important"},slot:{position:"relative",display:"block",flex:"1",overflow:"hidden",overflowY:"auto"},'slot[name="after-tabs"]':{flex:"0 0 auto"},"::slotted([hidden])":{display:"none !important"},":host::part(tabpanel)":{display:"flex",flexDirection:"column",overflowX:"auto"},":host::part(tabrow)":{display:"flex"},":host .tabs":{display:"flex",userSelect:"none",whiteSpace:"nowrap"},":host .tabs > div":{padding:`${m.spacing50} ${m.spacing}`,cursor:"default",display:"flex",alignItems:"baseline"},':host .tabs > [aria-selected="true"]':{"--text-color":m.xinTabsSelectedColor,color:m.textColor},":host .elastic":{flex:"1"},":host .border":{background:"var(--xin-tabs-bar-color, #ccc)"},":host .border > .selected":{content:" ",width:0,height:"var(--xin-tabs-bar-height, 2px)",background:m.xinTabsSelectedColor,transition:"ease-out 0.2s"},":host button.close":{fill:m.textColor,border:0,background:"transparent",textAlign:"center",marginLeft:m.spacing50,padding:0},":host button.close > svg":{height:"12px"}};onCloseTab=null;content=[c1({role:"tabpanel",part:"tabpanel"},c1({part:"tabrow"},c1({class:"tabs",part:"tabs"}),c1({class:"elastic"}),i2({name:"after-tabs"})),c1({class:"border"},c1({class:"selected",part:"selected"}))),i2()];constructor(){super();this.initAttributes("anne","example")}addTabBody(t,i=!1){if(!t.hasAttribute("name"))throw console.error("element has no name attribute",t),new Error("element has no name attribute");if(this.append(t),this.setupTabs(),i)this.value=this.bodies.length-1;this.queueRender()}removeTabBody(t){t.remove(),this.setupTabs(),this.queueRender()}keyTab=(t)=>{let{tabs:i}=this.parts,e=[...i.children].indexOf(t.target);switch(t.key){case"ArrowLeft":this.value=(e+Number(i.children.length)-1)%i.children.length,i.children[this.value].focus(),t.preventDefault();break;case"ArrowRight":this.value=(e+1)%i.children.length,i.children[this.value].focus(),t.preventDefault();break;case" ":this.pickTab(t),t.preventDefault();break;default:}};get bodies(){return[...this.children].filter((t)=>t.hasAttribute("name"))}pickTab=(t)=>{let{tabs:i}=this.parts,e=t.target,s=e.closest("button.close")!==null,n=e.closest(".tabs > div"),o=[...i.children].indexOf(n);if(s){let a=this.bodies[o];if(!this.onCloseTab||this.onCloseTab(a)!==!1)this.removeTabBody(this.bodies[o])}else if(o>-1)this.value=o};setupTabs=()=>{let{tabs:t}=this.parts,i=[...this.children].filter((e)=>!e.hasAttribute("slot")&&e.hasAttribute("name"));if(t.textContent="",this.value>=i.length)this.value=i.length-1;for(let e in i){let s=i[e],n=`${this.instanceId}-${e}`;s.id=n;let o=c3.makeTab(this,s,n);t.append(o)}};connectedCallback(){super.connectedCallback();let{tabs:t}=this.parts;t.addEventListener("click",this.pickTab),t.addEventListener("keydown",this.keyTab),this.setupTabs()}onResize(){this.queueRender()}render(){let{tabs:t,selected:i}=this.parts,e=this.bodies;for(let s=0;s<e.length;s++){let n=e[s],o=t.children[s];if(this.value===Number(s))o.setAttribute("aria-selected","true"),i.style.marginLeft=`${o.offsetLeft-t.offsetLeft}px`,i.style.width=`${o.offsetWidth}px`,n.toggleAttribute("hidden",!1);else o.toggleAttribute("aria-selected",!1),n.toggleAttribute("hidden",!0)}}}var s2=c3.elementCreator({tag:"xin-tabs"});/*!
# example

`<xin-example>` makes it easy to insert interactive code examples in a web page. It
started life as a super lightweight, easier-to-embed implementation of
[b8rjs's fiddle component](https://b8rjs.com)—which I dearly missed—but now the student
is, by far, the master. And it's still super lightweight.

*You're probably looking at it right now.*

```js
// this code executes in an async function body
// it has xinjs, xinjsui, and preview (the preview div) available as local variables
const { div } = xinjs.elements
preview.append(div({class: 'example'}, 'fiddle de dee!'))
preview.append('Try editing some code and hitting refresh…')
```
```html
<h2>Example</h2>
```
```css
.preview {
  padding: 0 var(--spacing);
}

.example {
  animation: throb ease-in-out 1s infinite alternate;
}

@keyframes throb {
  from { color: blue }
  to { color: red }
}
```

You can also create a live-example from HTML. And if you add the `persist-to-dom`
attribute, it will persist your code to the DOM.

<xin-example persist-to-dom>
  <pre class="language-html">
    <h1 class="make-it-red">Pure HTML!</h1>
    <button>Click Me!</button>
  </pre>
  <pre class="language-js">
    preview.querySelector('button').addEventListener('click', () => {
      alert('you clicked?')
    })
  </pre>
  <pre class="language-css">
    .make-it-red {
      color: red;
    }
  </pre>
</xin-example>

You can simply wrap it around a sequence of code blocks in the DOM with the
languages (js, html, css) as annotations or you can directly set the `js`, `html`,
and `css` properties.

## Code-Editor

The **code-editor** is actually the same component spawned in a new window using
a couple of clever tricks, the most important of which is leveraging
[StorageEvent](https://developer.mozilla.org/en-US/docs/Web/API/StorageEvent).

This functionality was originally added to make working in XR easier, but it turned
out that it's just better than the earlier way of doing things.

It actually uses just one `localStorage` item to handle any number of code-editors,
and cleans up after itself when you close the example (including closing stray
windows.

> **To Do** a little refactoring and tweaking to split the the editor off as a
completely separate component that can be used for other things, and make the
example itself lighter-weight.

## context

A `<xin-example>` can be given a `context` object {[key: string]: any}, which is the
set of values available in the javascript's execution context (it is wrapped in an
async function and passed those values). By default, that context comprises `preview`
(the `<div>` in which the example is rendered), `xinjs` (`* from xinjs`),
and `xinjsui` (`* from xinjsui`).

The `LiveExample` class provides the static `insertExamples(element: HTMLElement)`
function that will replace any sequence of
`pre code[class="language-html"],pre code[class="language-js"],pre code[class="language-css"]`
elements with a `<xin-example>` instance.
*/var{div:D1,xinSlot:y0,style:z0,button:r1,h4:x0,pre:w0}=I,C0=(async()=>{}).constructor;class r3 extends F{persistToDom=!1;prettier=!1;prefix="lx";storageKey="live-example-payload";context={};uuid=crypto.randomUUID();remoteId="";lastUpdate=0;interval;static insertExamples(t,i={}){let e=[...t.querySelectorAll(".language-html,.language-js,.language-css")].filter((s)=>!s.closest(r3.tagName)).map((s)=>({block:s.parentElement,language:s.classList[0].split("-").pop(),code:s.innerText}));for(let s=0;s<e.length;s+=1){let n=[e[s]];while(s<e.length-1&&e[s].block.nextElementSibling===e[s+1].block)n.push(e[s+1]),s+=1;let o=h3({context:i});n[0].block.parentElement.insertBefore(o,n[0].block),n.forEach((a)=>{switch(a.language){case"js":o.js=a.code;break;case"html":o.html=a.code;break;case"css":o.css=a.code;break}a.block.remove()}),o.showDefaultTab()}}constructor(){super();this.initAttributes("persistToDom","prettier")}get activeTab(){let{editors:t}=this.parts;return[...t.children].find((i)=>i.getAttribute("hidden")===null)}getEditorValue(t){return this.parts[t].value}setEditorValue(t,i){let e=this.parts[t];e.value=i}get css(){return this.getEditorValue("css")}set css(t){this.setEditorValue("css",t)}get html(){return this.getEditorValue("html")}set html(t){this.setEditorValue("html",t)}get js(){return this.getEditorValue("js")}set js(t){this.setEditorValue("js",t)}updateUndo=()=>{let{activeTab:t}=this,{undo:i,redo:e}=this.parts;if(t instanceof p1&&t.editor!==void 0){let s=t.editor.session.getUndoManager();i.disabled=!s.hasUndo(),e.disabled=!s.hasRedo()}else i.disabled=!0,e.disabled=!0};undo=()=>{let{activeTab:t}=this;if(t instanceof p1)t.editor.undo()};redo=()=>{let{activeTab:t}=this;if(t instanceof p1)t.editor.redo()};get isMaximized(){return this.classList.contains("-maximize")}flipLayout=()=>{this.classList.toggle("-vertical")};exampleMenu=()=>{k({target:this.parts.exampleWidgets,width:"auto",menuItems:[{icon:"edit",caption:"view/edit code",action:this.showCode},{icon:"editDoc",caption:"view/edit code in a new window",action:this.openEditorWindow},null,{icon:this.isMaximized?"minimize":"maximize",caption:this.isMaximized?"restore preview":"maximize preview",action:this.toggleMaximize}]})};content=()=>[D1({part:"example"},z0({part:"style"}),r1({title:"example menu",part:"exampleWidgets",onClick:this.exampleMenu},T.code())),D1({class:"code-editors",part:"codeEditors",hidden:!0},x0("Code"),r1({title:"close code",class:"transparent close-button",onClick:this.closeCode},T.x()),s2({part:"editors",onChange:this.updateUndo},F1({name:"js",mode:"javascript",part:"js"}),F1({name:"html",mode:"html",part:"html"}),F1({name:"css",mode:"css",part:"css"}),D1({slot:"after-tabs",class:"row"},r1({title:"undo",part:"undo",class:"transparent",onClick:this.undo},T.undo()),r1({title:"redo",part:"redo",class:"transparent",onClick:this.redo},T.redo()),r1({title:"flip direction",class:"transparent",onClick:this.flipLayout},T.sidebar()),r1({title:"copy as markdown",class:"transparent",onClick:this.copy},T.copy()),r1({title:"reload",class:"transparent",onClick:this.refreshRemote},T.refresh())))),y0({part:"sources",hidden:!0})];connectedCallback(){super.connectedCallback();let{sources:t}=this.parts;this.initFromElements([...t.children]),addEventListener("storage",this.remoteChange),this.interval=setInterval(this.remoteChange,500),this.undoInterval=setInterval(this.updateUndo,250)}disconnectedCallback(){super.disconnectedCallback();let{storageKey:t,remoteKey:i}=this;clearInterval(this.interval),clearInterval(this.undoInterval),localStorage.setItem(t,JSON.stringify({remoteKey:i,sentAt:Date.now(),close:!0}))}copy=()=>{let t=this.js!==""?"```js\n"+this.js.trim()+"\n```\n":"",i=this.html!==""?"```html\n"+this.html.trim()+"\n```\n":"",e=this.css!==""?"```css\n"+this.css.trim()+"\n```\n":"";navigator.clipboard.writeText(t+i+e)};toggleMaximize=()=>{this.classList.toggle("-maximize")};get remoteKey(){return this.remoteId!==""?this.prefix+"-"+this.remoteId:this.prefix+"-"+this.uuid}remoteChange=(t)=>{let i=localStorage.getItem(this.storageKey);if(t instanceof StorageEvent&&t.key!==this.storageKey)return;if(i===null)return;let{remoteKey:e,sentAt:s,css:n,html:o,js:a,close:l}=JSON.parse(i);if(s<=this.lastUpdate)return;if(e!==this.remoteKey)return;if(l===!0)window.close();console.log("received new code",s,this.lastUpdate),this.lastUpdate=s,this.css=n,this.html=o,this.js=a,this.refresh()};showCode=()=>{this.classList.add("-maximize"),this.classList.toggle("-vertical",this.offsetHeight>this.offsetWidth),this.parts.codeEditors.hidden=!1};closeCode=()=>{if(this.remoteId!=="")window.close();else this.classList.remove("-maximize"),this.parts.codeEditors.hidden=!0};openEditorWindow=()=>{let{storageKey:t,remoteKey:i,css:e,html:s,js:n,uuid:o,prefix:a}=this,l=location.href.split("?")[0]+`?${a}=${o}`;localStorage.setItem(t,JSON.stringify({remoteKey:i,sentAt:Date.now(),css:e,html:s,js:n})),window.open(l)};refreshRemote=()=>{let{remoteKey:t,css:i,html:e,js:s}=this;localStorage.setItem(this.storageKey,JSON.stringify({remoteKey:t,sentAt:Date.now(),css:i,html:e,js:s}))};updateSources=()=>{if(this.persistToDom){let{sources:t}=this.parts;t.innerText="";for(let i of["js","css","html"])if(this[i])t.append(w0({class:`language-${i}`,innerHTML:this[i]}))}};refresh=()=>{if(this.remoteId!=="")return;let{example:t,style:i}=this.parts,e=D1({class:"preview"});e.innerHTML=this.html,i.innerText=this.css;let s=t.querySelector(".preview");if(s)s.replaceWith(e);else t.insertBefore(e,this.parts.exampleWidgets);let n={preview:e,...this.context};try{if(new C0(...Object.keys(n),this.js)(...Object.values(n)).catch((a)=>console.error(a)),this.persistToDom)this.updateSources()}catch(o){console.error(o),window.alert(`Error: ${o}, the console may have more information…`)}};initFromElements(t){for(let i of t){i.hidden=!0;let[e,...s]=i.innerHTML.split(`
`);if(["js","html","css"].includes(e)){let n=s.filter((a)=>a.trim()!=="").map((a)=>a.match(/^\s*/)[0].length).sort()[0],o=(n>0?s.map((a)=>a.substring(n)):s).join(`
`);this.parts[e].value=o}else{let n=["js","html","css"].find((o)=>i.matches(`.language-${o}`));if(n)this.parts[n].value=n==="html"?i.innerHTML:i.innerText}}}showDefaultTab(){let{editors:t}=this.parts;if(this.js!=="")t.value=0;else if(this.html!=="")t.value=1;else if(this.css!=="")t.value=2}render(){if(super.render(),this.remoteId!==""){let t=localStorage.getItem(this.storageKey);if(t!==null){let{remoteKey:i,sentAt:e,css:s,html:n,js:o}=JSON.parse(t);if(this.remoteKey!==i)return;this.lastUpdate=e,this.css=s,this.html=n,this.js=o,this.parts.example.hidden=!0,this.parts.codeEditors.hidden=!1,this.classList.add("-maximize"),this.updateUndo()}}else this.refresh()}}var h3=r3.elementCreator({tag:"xin-example",styleSpec:{":host":{"--xin-example-height":"320px","--code-editors-bar-bg":"#777","--code-editors-bar-color":"#fff","--widget-bg":"#fff8","--widget-color":"#000",position:"relative",display:"flex",height:"var(--xin-example-height)",background:"var(--background)",boxSizing:"border-box"},":host.-maximize":{position:"fixed",left:"0",top:"0",height:"100vh",width:"100vw",margin:"0 !important"},".-maximize":{zIndex:101},":host.-vertical":{flexDirection:"column"},":host .icon-sidebar":{transform:"rotateZ(180deg)"},":host.-vertical .icon-sidebar":{transform:"rotateZ(270deg)"},":host.-maximize .hide-if-maximized, :host:not(.-maximize) .show-if-maximized":{display:"none"},':host [part="example"]':{flex:"1 1 50%",height:"100%",position:"relative",overflowX:"auto"},":host .preview":{height:"100%",position:"relative",overflow:"hidden",background:`#f7f7f7 url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 8 8" fill-opacity=".02" ><rect x="4" width="4" height="4" /><rect y="4" width="4" height="4" /></svg>')`},':host [part="editors"]':{flex:"1 1 200px",height:"100%",position:"relative"},':host [part="exampleWidgets"]':{position:"absolute",left:"2px",bottom:"2px","--widget-color":"var(--brand-color)",background:"var(--widget-bg)",borderRadius:"5px",width:"44px",height:"44px",lineHeight:"44px",zIndex:"100"},':host [part="exampleWidgets"] svg':{fill:"var(--widget-color)"},":host .code-editors":{overflow:"hidden",background:"white",position:"relative",top:"0",right:"0",flex:"1 1 50%",height:"100%",flexDirection:"column",zIndex:"10"},":host .code-editors:not([hidden])":{display:"flex"},":host .code-editors > h4":{padding:"5px",margin:"0",textAlign:"center",background:"var(--code-editors-bar-bg)",color:"var(--code-editors-bar-color)",cursor:"move"},":host .close-button":{position:"absolute",top:"0",right:"0",color:"var(--code-editors-bar-color)"},":host button.transparent, :host .sizer":{width:"32px",height:"32px",lineHeight:"32px",textAlign:"center",padding:"0",margin:"0"},":host .sizer":{cursor:"nwse-resize"}}});function qe(t){let i=[...t.querySelectorAll("pre")].filter((e)=>["js","html","css","json"].includes(e.innerText.split(`
`)[0]));for(let e=0;e<i.length;e++){let s=[i[e]];while(i[e].nextElementSibling===i[e+1])s.push(i[e+1]),e+=1;let n=h3();t.insertBefore(n,s[0]),n.initFromElements(s)}}var E0=new URL(window.location.href).searchParams,n2=E0.get("lx");if(n2)document.title+=" [code editor]",document.body.textContent="",document.body.append(h3({remoteId:n2}));/*!
# makeSorter

I'm always confusing myself when writing sort functions, so I wrote `makeSorter()`. It's
insanely simple and just works™. It makes writing an array sort callback for anything
other than an array of numbers or strings easier.

```js
const { select, option, div, span, ul, li } = xinjs.elements
const { icons, makeSorter } = xinjsui

const people = [
  { first: 'Frasier', last: 'Crane', age: 38 },
  { first: 'Lilith', last: 'Crane', age: 37 },
  { first: 'Rebecca', last: 'Howe', age: 35 },
  { first: 'Woody', last: 'Boyd', age: 25 },
  { first: 'Sam', last: 'Malone', age: 40 },
  { first: 'Norm', last: 'Peterson', age: 38 },
]

const sorters = {
  firstSort: makeSorter(person => [person.first]),
  firstDescSort: makeSorter(person => [person.first], false),
  nameSort: makeSorter(person => [person.last, person.first]),
  ageFirst: makeSorter(person => [-person.age, person.last]),
  ageLast: makeSorter(person => [person.age, person.first], [true, false]),
}

function person({first, last, age}) {
  return li(`${first} ${last}, ${age}`)
}

const list = ul()
sortPicker = select(
  option('Sort by first', {value: 'firstSort'}),
  option('Sort by first (desc)', {value: 'firstDescSort'}),
  option('Sort by last, first', {value: 'nameSort'}),
  option('Sort by age (desc), first', {value: 'ageFirst'}),
  option('Sort by age, last (desc)', {value: 'ageLast'}),
  {
    onChange: render,
    value: 'nameSort'
  },
)

function render () {
  list.textContent = ''
  list.append(...people.sort(sorters[sortPicker.value]).map(person))
}

preview.append(
  div(
    sortPicker,
    icons.chevronDown()
  ),
  list
)

render()
```
```css
.preview {
  padding: var(--spacing);
}

.preview div {
  position: absolute;
  top: var(--spacing);
  right: var(--spacing);
}
```

## Details

To create a sort callback that sorts by propA then propB (if propA is tied):

```
const sorter = makeSorter(
  obj => [obj.propA, obj.propB]
)
```

As above, but sort descending:
```
const sorter = makeSorter(
  obj => [obj.propA, obj.propB],
  false
)
```

As above but propA is sorted ascending, propB descending
```
const sorter = makeSorter(
  obj => [obj.propA, obj.propB],
  [true, false]
)
```
*/function d3(t,i=!0){return(e,s)=>{let n=t(e),o=t(s);for(let a in n)if(n[a]!==o[a])return(Array.isArray(i)?i[a]!==!1:i)?n[a]>o[a]?1:-1:n[a]>o[a]?-1:1;return 0}}/*!
# select

`<xin-select>` (`xinSelect` is the `ElementCreator`) is a replacement for the lamentable
built in `<select>` element that addresses its various shortcomings.

- since `<xin-select>` is powered by `popMenu`, and supports separators and submenus.
- options can have icons.
- `<xin-select>` will retain and display a value even if the matching option is missing.
- its displayed value can be made `editable`, allowing use as a "combo box".
- options can have `async` callbacks that return a value.
- picking an item triggers an `action` event even if the value hasn't changed.
- available options are set via the `options` attribute or the element's `options` property (not `<option>` elements)

```html
<xin-select
  title="simple select"
  options="this,that,,the other"
  value="not an option!"
></xin-select><br>
<xin-select
  show-icon
  title="has captions"
  class="captions"
  value="image"
></xin-select><br>
<xin-select
  show-icon
  title="combo select with icons"
  class="icons"
  editable
  placeholder="pick an icon"
></xin-select><br>
<xin-select
  show-icon
  hide-caption
  title="icons only"
  class="icons-only"
  placeholder="pick an icon"
></xin-select>
<pre contenteditable>Select some text in here…
…to check for focus stealing</pre>
```
```js
const { icons } = xinjsui

const captions = preview.querySelector('.captions')

captions.options = [
  {
    caption: 'a heading',
    value: 'heading'
  },
  {
    caption: 'a paragraph',
    value: 'paragraph'
  },
  null,
  {
    caption: 'choose some other',
    options: [
      {
        icon: 'image',
        caption: 'an image',
        value: 'image'
      },
      {
        icon: 'fileText',
        caption: 'a text file',
        value: 'text',
      },
      {
        icon: 'video',
        caption: 'a video',
        value: 'video'
      },
      null,
      {
        caption: 'anything goes…',
        value: () => prompt('Enter your other', 'other') || undefined
      },
      {
        caption: 'brother… (after 1s delay)',
        value: async () => new Promise(resolve => {
          setTimeout(() => resolve('brother'), 1000)
        })
      }
    ]
  }
]

const iconsSelect = preview.querySelector('.icons')
const iconsOnly = preview.querySelector('.icons-only')

iconsSelect.options = iconsOnly.options = Object.keys(icons).sort().map(icon =>({
  icon,
  caption: icon,
  value: icon
}))

preview.addEventListener('action', (event) => {
  console.log(event.target.title, 'user picked', event.target.value)
}, true)

preview.addEventListener('change', (event) => {
  console.log(event.target.title, 'changed to', event.target.value)
}, true)
```
<xin-css-var-editor element-selector="xin-select"></xin-css-var-editor>

## `options`

    type OptionRequest = () => Promise<string | undefined>

    export interface SelectOption {
      icon?: string | HTMLElement
      caption: string
      value: string | OptionRequest
    }

    export interface SelectOptionSubmenu {
      icon?: string | HTMLElement
      caption: string
      options: SelectOptions
    }

    export type SelectOptions = Array<string | null | SelectOption | SelectOptionSubmenu>

A `<xin-select>` can be assigned `options` as a string of comma-delimited choices,
or be provided a `SelectOptions` array (which allows for submenus, separators, etc.).

## Attributes

`<xin-select>` supports several attributes:

- `editable` lets the user directly edit the value (like a "combo box").
- `show-icon` displays the icon corresponding to the currently selected value.
- `hide-caption` hides the caption.
- `placeholder` allows you to set a placeholder.
- `options` allows you to assign options as a comma-delimited string attribute.

## Events

Picking an option triggers an `action` event (whether or not this changes the value).

Changing the value, either by typing in an editable `<xin-select>` or picking a new
value triggers a `change` event.

You can look at the console to see the events triggered by the second example.
*/var{button:S0,span:o2,input:T0}=I,a2=(t,i)=>{return!!t.find((e)=>{if(e===null||i==null)return!1;else if(Array.isArray(e))return a2(e,i);else if(e.value===i||e===i)return!0})};class g1 extends F{editable=!1;showIcon=!1;hideCaption=!1;options="";value="";placeholder="";setValue=(t,i=!1)=>{if(this.value!==t)this.value=t,this.queueRender(!0);if(i)this.dispatchEvent(new Event("action"))};getValue=()=>this.value;get selectOptions(){return typeof this.options==="string"?this.options.split(",").map((t)=>t.trim()||null):this.options}buildOptionMenuItem=(t)=>{if(t===null)return null;let{setValue:i,getValue:e}=this,s,n,o;if(typeof t==="string")n=o=t;else({icon:s,caption:n,value:o}=t);let{options:a}=t;if(a)return{icon:s,caption:n,checked:()=>a2(a,e()),menuItems:a.map(this.buildOptionMenuItem)};return{icon:s,caption:n,checked:()=>e()===o,action:typeof o==="function"?async()=>{let l=await o();if(l!==void 0)i(l,!0)}:()=>{if(typeof o==="string")i(o,!0)}}};get optionsMenu(){let t=this.selectOptions.map(this.buildOptionMenuItem);if(this.filter==="")return t;let i=(e)=>{if(e===null)return!0;else if(e.menuItems)return e.menuItems=e.menuItems.filter(i),e.menuItems.length>0;else return e.caption.toLocaleLowerCase().includes(this.filter)};return t.filter(i)}handleChange=(t)=>{let{value:i}=this.parts,e=i.value||"";if(this.value!==String(e))this.value=e,this.dispatchEvent(new Event("change"));this.filter="",t.stopPropagation(),t.preventDefault()};handleKey=(t)=>{if(t.key==="Enter")t.preventDefault()};filterMenu=C3(()=>{this.filter=this.parts.value.value.toLocaleLowerCase(),a1(0),this.popOptions()});popOptions=(t)=>{if(t&&t.type==="click")this.filter="";this.poppedOptions=this.optionsMenu,k({target:this,menuItems:this.poppedOptions})};content=()=>[S0({onClick:this.popOptions},o2(),T0({part:"value",value:this.value,tabindex:0,onKeydown:this.handleKey,onInput:this.filterMenu,onChange:this.handleChange}),T.chevronDown())];constructor(){super();this.initAttributes("options","editable","placeholder","showIcon","hideCaption")}get allOptions(){let t=[];function i(e){for(let s of e)if(typeof s==="string")t.push({caption:s,value:s});else if(s?.value)t.push(s);else if(s?.options)i(s.options)}return i(this.selectOptions),t}findOption(){return this.allOptions.find((i)=>i.value===this.value)||{caption:this.value,value:this.value}}render(){super.render();let{value:t}=this.parts,i=t.previousElementSibling,e=this.findOption(),s=o2();if(t.value=e.caption,e.icon)if(e.icon instanceof HTMLElement)s=e.icon.cloneNode(!0);else s=T[e.icon]();i.replaceWith(s),t.setAttribute("placeholder",this.placeholder),t.style.pointerEvents=this.editable?"":"none",t.readOnly=!this.editable}}var V1=g1.elementCreator({tag:"xin-select",styleSpec:{":host":{"--gap":"8px","--touch-size":"44px","--padding":"0 8px","--value-padding":"0 8px","--icon-width":"24px","--fieldWidth":"140px",display:"inline-block",position:"relative"},":host button":{display:"grid",alignItems:"center",gap:m.gap,textAlign:"left",height:m.touchSize,padding:m.padding,gridTemplateColumns:`auto ${m.iconWidth}`,position:"relative"},":host[show-icon] button":{gridTemplateColumns:`${m.iconWidth} auto ${m.iconWidth}`},":host[hide-caption] button":{gridTemplateColumns:`${m.iconWidth} ${m.iconWidth}`},":host:not([show-icon]) button > :first-child":{display:"none"},":host[hide-caption] button > :nth-child(2)":{display:"none"},':host [part="value"]':{width:m.fieldWidth,padding:m.valuePadding,height:m.touchSize,lineHeight:m.touchSize,boxShadow:"none",whiteSpace:"nowrap",outline:"none",background:"transparent"},':host [part="value"]:not(:focus)':{overflow:"hidden",textOverflow:"ellipsis",background:"transparent"}}});/*!
# localize

`xinjs-ui` provides support for localization via the `localize` method and the `<xin-locale-picker>`
and `<xin-localized>` custom-elements.

> ### Important Note
> This module deals with the **language** used in the user interface. "locale" is
> *not the same thing*. The (usually) two-letter codes used designate **language**
> and **not locale**.
>
> E.g. the US *locale* includes things like measurement systems
> and date format. Most European locales use commas where we use decimal points in the US.
>
> Similarly, `ja` is the code for the Japanese **language** while `jp` is the **locale**.

## `initLocalization(localizationData: string)`

Enables localization from TSV data.

## XinLocalePicker

A selector that lets the user pick from among supported languages.

```html
<h3>Locale Picker</h3>
<xin-locale-picker></xin-locale-picker>

<h3>Locale Picker with <code>hide-captions</code></h3>
<xin-locale-picker hide-caption></xin-locale-picker>
```

## XinLocalized

A span-replacement that automatically localizes its text content.
By default the case in the localized data is preserved unless the
reference text is all lowercase, in which case the localized text
is also lowercased.

While viewing this documentation, all `<xin-localized>` elements should display a **red
underline**.

```html
<h3>Localized Widgets</h3>
<button><xin-localized>Yes</xin-localized></button>
<button><xin-localized>No</xin-localized></button>

<h3>Lowercase is preserved</h3>
<button><xin-localized>yes</xin-localized></button>
<button><xin-localized>no</xin-localized></button>
```
```css
xin-localized {
  border-bottom: 2px solid red;
}
```

## `i18n`

All of the data can be bound in the `i18n` proxy (`xin.i18n`), including the currently selected
locale (which will default to `navigator.language`).

You can take a look at `xin.i18n` in the console (and use it to set locale directly).

```
i18n.locale = 'fr' // set localization to French (if available)
```

## Creating Localized String Data

`localized.tsv` provides data for localizing strings. It can be created automatically
using something like my [localized](https://docs.google.com/spreadsheets/d/1L0_4g_dDhVCwVVxLzYbMj_H86xSp9lsRCKj7IS9psso/edit?usp=sharing)
Google Sheet which leverages `googletranslate` to automatically translate reference strings
(and which you can manually override as you like).

E.g. in this demo I've replaced the incorrect translation of "Finnish"
(`googletranslate` used the word for Finnish nationality rather than the language).

The format of the input data is a table in TSV format, that looks like this:

en-US | fr | fi | sv | zh
------|----|----|----|----
English (US) | French | Finnish | Swedish | Chinese (Mandarin)
English (US) | Français | suomi | svenska | 中文（普通话）
🇺🇸 | 🇫🇷 | 🇫🇮 | 🇸🇪 | 🇨🇳
Icon | Icône | Kuvake | Ikon | 图标
Ok | D'accord | Ok | Ok | 好的
Cancel | Annuler | Peruuttaa | Avboka | 取消

- Column 1 is your reference language.
- Row 1 is [language code](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes).
- Row 2 is the name of the language in your reference language.
- Row 3 is the name of the language in itself (because it's silly to expect people
  to know the name of their language in a language they don't know)
- Row 4 is the flag emoji for that language (yes, that's problematic, but languages
  do not have flags, per se)
- Rows 5 and on are user interface strings you want to localize

In the spreadsheet provided, each cell contains a formula that translates the term
in the left-most column from the language in that column to the language in the
destination column. Once you have an automatic translation, you can hand off the
sheet to language experts to vet the translations.

Finally, create a `tsv` file and then turn that into a Typescript file by wrapping
the content thus:

```
export default `( content of tsv file )`
```

## To Do

- support for automated localization of attributes such as `title`
- `data-xin-i18n` attribute to allow this (if present, text content localized
   actual value of attribute can specify attributes needing localization)
- DOM watcher looks for insertion of marked elements and localizes them
)
*/var{span:l2}=I,{i18n:W}=E3({i18n:{locale:window.navigator.language,locales:[window.navigator.language],languages:[window.navigator.language],emoji:[""],stringMap:{},localeOptions:[{icon:l2(),caption:window.navigator.language,value:window.navigator.language}]}});z3.localeOptions={toDOM(t,i){if(t instanceof g1)t.options=i}};var c2=()=>{let t=[...document.querySelectorAll(u3.tagName)];for(let i of t)i.render()},A0=d3((t)=>[t.caption.toLocaleLowerCase()]);function Xe(t){let[i,,e,s,...n]=t.split(`
`).map((o)=>o.split("\t"));if(i&&e&&s&&n){if(W.locales=i,W.languages=e,W.emoji=s,W.stringMap=n.reduce((o,a)=>{return o[a[0].toLocaleLowerCase()]=a,o},{}),W.localeOptions=i.map((o,a)=>({icon:l2({title:i[a]},s[a]),caption:e[a],value:o})).sort(A0),!W.locales.includes(W.locale.valueOf())){let o=W.locale.substring(0,2);W.locale=W.locales.find((a)=>a.substring(0,2)===o)||W.locales[0]}c2()}}function r2(t){let i=W.locales.indexOf(W.locale.valueOf());if(i>-1){let e=W.stringMap[t.toLocaleLowerCase()],s=e&&e[i];if(s)t=t.toLocaleLowerCase()===t?s.toLocaleLowerCase():s}return t}class h2 extends F{hideCaption=!1;content=()=>{return V1({part:"select",showIcon:!0,title:r2("Language"),bindValue:W.locale,bindLocaleOptions:W.localeOptions})};constructor(){super();this.initAttributes("hideCaption")}connectedCallback(){super.connectedCallback(),this.parts.select.value=W.locale,this.parts.select.addEventListener("change",c2)}render(){super.render(),this.parts.select.toggleAttribute("hide-caption",this.hideCaption)}}var Ze=h2.elementCreator({tag:"xin-locale-picker"});class u3 extends F{contents=()=>I.xinSlot();refString="";render(){if(super.render(),!this.refString)this.refString=this.textContent||"";this.textContent=r2(this.refString)}}var Re=u3.elementCreator({tag:"xin-localized",styleSpec:{":host":{pointerEvents:"none"}}});/*!
# map

A [mapboxgl](https://docs.mapbox.com/mapbox-gl-js/api/) wrapper.

```html
<!-- please don't abuse my mapbox token -->
<xin-map
  style="width: 100%; height: 100%"
  coords="14.0093606,120.995083,17"
  token="pk.eyJ1IjoicG9kcGVyc29uIiwiYSI6ImNqc2JlbWU0bjA1ZmY0YW5ycHZod3VhbWcifQ.arvqfpOqMgFYkKgQ35UScA"
  map-style="mapbox://styles/mapbox/satellite-v9"
></xin-map>
```

There's no need to learn new APIs or write wrappers, just access the element's `map` property
and [use the standard mapbox APIs directly](https://docs.mapbox.com/).
*/var L0=[{name:"streets",url:"mapbox://styles/mapbox/streets-v10"},{name:"outdoors",url:"mapbox://styles/mapbox/outdoors-v10"},{name:"light",url:"mapbox://styles/mapbox/light-v9"},{name:"dark",url:"mapbox://styles/mapbox/dark-v9"},{name:"satellite",url:"mapbox://styles/mapbox/satellite-v9"},{name:"sateliite + streets",url:"mapbox://styles/mapbox/satellite-streets-v10"},{name:"preview day",url:"mapbox://styles/mapbox/navigation-preview-day-v2"},{name:"preview night",url:"mapbox://styles/mapbox/navigation-preview-night-v2"},{name:"guidance day",url:"mapbox://styles/mapbox/navigation-guidance-day-v2"},{name:"guidance night",url:"mapbox://styles/mapbox/navigation-guidance-night-v2"}],{div:O0}=I;class m1 extends F{coords="65.01715565258993,25.48081004203459,12";content=O0({style:{width:"100%",height:"100%"}});get map(){return this._map}mapStyle=L0[0].url;token="";static mapboxCSSAvailable;static mapboxAvailable;_map;static styleSpec={":host":{display:"inline-block",position:"relative",width:"400px",height:"400px",textAlign:"left"}};constructor(){super();if(this.initAttributes("coords","token","mapStyle"),m1.mapboxCSSAvailable===void 0)m1.mapboxCSSAvailable=Y1("https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css").catch((t)=>{console.error("failed to load mapbox-gl.css",t)}),m1.mapboxAvailable=K("https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.js").catch((t)=>{console.error("failed to load mapbox-gl.js",t)})}connectedCallback(){if(super.connectedCallback(),!this.token)console.error("mapbox requires an access token which you can provide via the token attribute")}render(){if(super.render(),!this.token)return;let{div:t}=this.parts,[i,e,s]=this.coords.split(",").map((n)=>Number(n));if(this.map)this.map.remove();m1.mapboxAvailable.then(({mapboxgl:n})=>{console.log("%cmapbox may complain about missing css -- don't panic!","background: orange; color: black; padding: 0 5px;"),n.accessToken=this.token,this._map=new n.Map({container:t,style:this.mapStyle,zoom:s,center:[e,i]}),this._map.on("render",()=>this._map.resize())})}}var ei=m1.elementCreator({tag:"xin-map"});function p3(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}var i1=p3();function g2(t){i1=t}var m2=/[&<>"']/,F0=new RegExp(m2.source,"g"),b2=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,H0=new RegExp(b2.source,"g"),I0={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},d2=(t)=>I0[t];function G(t,i){if(i){if(m2.test(t))return t.replace(F0,d2)}else if(b2.test(t))return t.replace(H0,d2);return t}var P0=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function M2(t){return t.replace(P0,(i,e)=>{if(e=e.toLowerCase(),e==="colon")return":";if(e.charAt(0)==="#")return e.charAt(1)==="x"?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1));return""})}var q0=/(^|[^\[])\^/g;function $(t,i){t=typeof t==="string"?t:t.source,i=i||"";let e={replace:(s,n)=>{return n=n.source||n,n=n.replace(q0,"$1"),t=t.replace(s,n),e},getRegex:()=>{return new RegExp(t,i)}};return e}var $0=/[^\w:]/g,_0=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function u2(t,i,e){if(t){let s;try{s=decodeURIComponent(M2(e)).replace($0,"").toLowerCase()}catch(n){return null}if(s.indexOf("javascript:")===0||s.indexOf("vbscript:")===0||s.indexOf("data:")===0)return null}if(i&&!_0.test(e))e=W0(i,e);try{e=encodeURI(e).replace(/%25/g,"%")}catch(s){return null}return e}var j1={},D0=/^[^:]+:\/*[^/]*$/,V0=/^([^:]+:)[\s\S]*$/,j0=/^([^:]+:\/*[^/]*)[\s\S]*$/;function W0(t,i){if(!j1[" "+t])if(D0.test(t))j1[" "+t]=t+"/";else j1[" "+t]=W1(t,"/",!0);t=j1[" "+t];let e=t.indexOf(":")===-1;if(i.substring(0,2)==="//"){if(e)return i;return t.replace(V0,"$1")+i}else if(i.charAt(0)==="/"){if(e)return i;return t.replace(j0,"$1")+i}else return t+i}var G1={exec:function t(){}};function p2(t,i){let e=t.replace(/\|/g,(o,a,l)=>{let c=!1,h=a;while(--h>=0&&l[h]==="\\")c=!c;if(c)return"|";else return" |"}),s=e.split(/ \|/),n=0;if(!s[0].trim())s.shift();if(s.length>0&&!s[s.length-1].trim())s.pop();if(s.length>i)s.splice(i);else while(s.length<i)s.push("");for(;n<s.length;n++)s[n]=s[n].trim().replace(/\\\|/g,"|");return s}function W1(t,i,e){let s=t.length;if(s===0)return"";let n=0;while(n<s){let o=t.charAt(s-n-1);if(o===i&&!e)n++;else if(o!==i&&e)n++;else break}return t.slice(0,s-n)}function G0(t,i){if(t.indexOf(i[1])===-1)return-1;let e=t.length,s=0,n=0;for(;n<e;n++)if(t[n]==="\\")n++;else if(t[n]===i[0])s++;else if(t[n]===i[1]){if(s--,s<0)return n}return-1}function N0(t,i){if(!t||t.silent)return;if(i)console.warn("marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async");if(t.sanitize||t.sanitizer)console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");if(t.highlight||t.langPrefix!=="language-")console.warn("marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight.");if(t.mangle)console.warn("marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`.");if(t.baseUrl)console.warn("marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url.");if(t.smartypants)console.warn("marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants.");if(t.xhtml)console.warn("marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml.");if(t.headerIds||t.headerPrefix)console.warn("marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`.")}function f2(t,i,e,s){let n=i.href,o=i.title?G(i.title):null,a=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){s.state.inLink=!0;let l={type:"link",raw:e,href:n,title:o,text:a,tokens:s.inlineTokens(a)};return s.state.inLink=!1,l}return{type:"image",raw:e,href:n,title:o,text:G(a)}}function U0(t,i){let e=t.match(/^(\s+)(?:```)/);if(e===null)return i;let s=e[1];return i.split(`
`).map((n)=>{let o=n.match(/^\s+/);if(o===null)return n;let[a]=o;if(a.length>=s.length)return n.slice(s.length);return n}).join(`
`)}class C1{constructor(t){this.options=t||i1}space(t){let i=this.rules.block.newline.exec(t);if(i&&i[0].length>0)return{type:"space",raw:i[0]}}code(t){let i=this.rules.block.code.exec(t);if(i){let e=i[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:i[0],codeBlockStyle:"indented",text:!this.options.pedantic?W1(e,`
`):e}}}fences(t){let i=this.rules.block.fences.exec(t);if(i){let e=i[0],s=U0(e,i[3]||"");return{type:"code",raw:e,lang:i[2]?i[2].trim().replace(this.rules.inline._escapes,"$1"):i[2],text:s}}}heading(t){let i=this.rules.block.heading.exec(t);if(i){let e=i[2].trim();if(/#$/.test(e)){let s=W1(e,"#");if(this.options.pedantic)e=s.trim();else if(!s||/ $/.test(s))e=s.trim()}return{type:"heading",raw:i[0],depth:i[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(t){let i=this.rules.block.hr.exec(t);if(i)return{type:"hr",raw:i[0]}}blockquote(t){let i=this.rules.block.blockquote.exec(t);if(i){let e=i[0].replace(/^ *>[ \t]?/gm,""),s=this.lexer.state.top;this.lexer.state.top=!0;let n=this.lexer.blockTokens(e);return this.lexer.state.top=s,{type:"blockquote",raw:i[0],tokens:n,text:e}}}list(t){let i=this.rules.block.list.exec(t);if(i){let e,s,n,o,a,l,c,h,d,p,g,C,z=i[1].trim(),S=z.length>1,r={type:"list",raw:"",ordered:S,start:S?+z.slice(0,-1):"",loose:!1,items:[]};if(z=S?`\\d{1,9}\\${z.slice(-1)}`:`\\${z}`,this.options.pedantic)z=S?z:"[*+-]";let f=new RegExp(`^( {0,3}${z})((?:[	 ][^\\n]*)?(?:\\n|$))`);while(t){if(C=!1,!(i=f.exec(t)))break;if(this.rules.block.hr.test(t))break;if(e=i[0],t=t.substring(e.length),h=i[2].split(`
`,1)[0].replace(/^\t+/,(u)=>" ".repeat(3*u.length)),d=t.split(`
`,1)[0],this.options.pedantic)o=2,g=h.trimLeft();else o=i[2].search(/[^ ]/),o=o>4?1:o,g=h.slice(o),o+=i[1].length;if(l=!1,!h&&/^ *$/.test(d))e+=d+`
`,t=t.substring(d.length+1),C=!0;if(!C){let u=new RegExp(`^ {0,${Math.min(3,o-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),b=new RegExp(`^ {0,${Math.min(3,o-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),M=new RegExp(`^ {0,${Math.min(3,o-1)}}(?:\`\`\`|~~~)`),y=new RegExp(`^ {0,${Math.min(3,o-1)}}#`);while(t){if(p=t.split(`
`,1)[0],d=p,this.options.pedantic)d=d.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ");if(M.test(d))break;if(y.test(d))break;if(u.test(d))break;if(b.test(t))break;if(d.search(/[^ ]/)>=o||!d.trim())g+=`
`+d.slice(o);else{if(l)break;if(h.search(/[^ ]/)>=4)break;if(M.test(h))break;if(y.test(h))break;if(b.test(h))break;g+=`
`+d}if(!l&&!d.trim())l=!0;e+=p+`
`,t=t.substring(p.length+1),h=d.slice(o)}}if(!r.loose){if(c)r.loose=!0;else if(/\n *\n *$/.test(e))c=!0}if(this.options.gfm){if(s=/^\[[ xX]\] /.exec(g),s)n=s[0]!=="[ ] ",g=g.replace(/^\[[ xX]\] +/,"")}r.items.push({type:"list_item",raw:e,task:!!s,checked:n,loose:!1,text:g}),r.raw+=e}r.items[r.items.length-1].raw=e.trimRight(),r.items[r.items.length-1].text=g.trimRight(),r.raw=r.raw.trimRight();let v=r.items.length;for(a=0;a<v;a++)if(this.lexer.state.top=!1,r.items[a].tokens=this.lexer.blockTokens(r.items[a].text,[]),!r.loose){let u=r.items[a].tokens.filter((M)=>M.type==="space"),b=u.length>0&&u.some((M)=>/\n.*\n/.test(M.raw));r.loose=b}if(r.loose)for(a=0;a<v;a++)r.items[a].loose=!0;return r}}html(t){let i=this.rules.block.html.exec(t);if(i){let e={type:"html",block:!0,raw:i[0],pre:!this.options.sanitizer&&(i[1]==="pre"||i[1]==="script"||i[1]==="style"),text:i[0]};if(this.options.sanitize){let s=this.options.sanitizer?this.options.sanitizer(i[0]):G(i[0]);e.type="paragraph",e.text=s,e.tokens=this.lexer.inline(s)}return e}}def(t){let i=this.rules.block.def.exec(t);if(i){let e=i[1].toLowerCase().replace(/\s+/g," "),s=i[2]?i[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",n=i[3]?i[3].substring(1,i[3].length-1).replace(this.rules.inline._escapes,"$1"):i[3];return{type:"def",tag:e,raw:i[0],href:s,title:n}}}table(t){let i=this.rules.block.table.exec(t);if(i){let e={type:"table",header:p2(i[1]).map((s)=>{return{text:s}}),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:i[3]&&i[3].trim()?i[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(e.header.length===e.align.length){e.raw=i[0];let s=e.align.length,n,o,a,l;for(n=0;n<s;n++)if(/^ *-+: *$/.test(e.align[n]))e.align[n]="right";else if(/^ *:-+: *$/.test(e.align[n]))e.align[n]="center";else if(/^ *:-+ *$/.test(e.align[n]))e.align[n]="left";else e.align[n]=null;s=e.rows.length;for(n=0;n<s;n++)e.rows[n]=p2(e.rows[n],e.header.length).map((c)=>{return{text:c}});s=e.header.length;for(o=0;o<s;o++)e.header[o].tokens=this.lexer.inline(e.header[o].text);s=e.rows.length;for(o=0;o<s;o++){l=e.rows[o];for(a=0;a<l.length;a++)l[a].tokens=this.lexer.inline(l[a].text)}return e}}}lheading(t){let i=this.rules.block.lheading.exec(t);if(i)return{type:"heading",raw:i[0],depth:i[2].charAt(0)==="="?1:2,text:i[1],tokens:this.lexer.inline(i[1])}}paragraph(t){let i=this.rules.block.paragraph.exec(t);if(i){let e=i[1].charAt(i[1].length-1)===`
`?i[1].slice(0,-1):i[1];return{type:"paragraph",raw:i[0],text:e,tokens:this.lexer.inline(e)}}}text(t){let i=this.rules.block.text.exec(t);if(i)return{type:"text",raw:i[0],text:i[0],tokens:this.lexer.inline(i[0])}}escape(t){let i=this.rules.inline.escape.exec(t);if(i)return{type:"escape",raw:i[0],text:G(i[1])}}tag(t){let i=this.rules.inline.tag.exec(t);if(i){if(!this.lexer.state.inLink&&/^<a /i.test(i[0]))this.lexer.state.inLink=!0;else if(this.lexer.state.inLink&&/^<\/a>/i.test(i[0]))this.lexer.state.inLink=!1;if(!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(i[0]))this.lexer.state.inRawBlock=!0;else if(this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(i[0]))this.lexer.state.inRawBlock=!1;return{type:this.options.sanitize?"text":"html",raw:i[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):G(i[0]):i[0]}}}link(t){let i=this.rules.inline.link.exec(t);if(i){let e=i[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;let o=W1(e.slice(0,-1),"\\");if((e.length-o.length)%2===0)return}else{let o=G0(i[2],"()");if(o>-1){let l=(i[0].indexOf("!")===0?5:4)+i[1].length+o;i[2]=i[2].substring(0,o),i[0]=i[0].substring(0,l).trim(),i[3]=""}}let s=i[2],n="";if(this.options.pedantic){let o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);if(o)s=o[1],n=o[3]}else n=i[3]?i[3].slice(1,-1):"";if(s=s.trim(),/^</.test(s))if(this.options.pedantic&&!/>$/.test(e))s=s.slice(1);else s=s.slice(1,-1);return f2(i,{href:s?s.replace(this.rules.inline._escapes,"$1"):s,title:n?n.replace(this.rules.inline._escapes,"$1"):n},i[0],this.lexer)}}reflink(t,i){let e;if((e=this.rules.inline.reflink.exec(t))||(e=this.rules.inline.nolink.exec(t))){let s=(e[2]||e[1]).replace(/\s+/g," ");if(s=i[s.toLowerCase()],!s){let n=e[0].charAt(0);return{type:"text",raw:n,text:n}}return f2(e,s,e[0],this.lexer)}}emStrong(t,i,e=""){let s=this.rules.inline.emStrong.lDelim.exec(t);if(!s)return;if(s[3]&&e.match(/[\p{L}\p{N}]/u))return;if(!(s[1]||s[2])||!e||this.rules.inline.punctuation.exec(e)){let o=s[0].length-1,a,l,c=o,h=0,d=s[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;d.lastIndex=0,i=i.slice(-1*t.length+o);while((s=d.exec(i))!=null){if(a=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!a)continue;if(l=a.length,s[3]||s[4]){c+=l;continue}else if(s[5]||s[6]){if(o%3&&!((o+l)%3)){h+=l;continue}}if(c-=l,c>0)continue;l=Math.min(l,l+c+h);let p=t.slice(0,o+s.index+l+1);if(Math.min(o,l)%2){let C=p.slice(1,-1);return{type:"em",raw:p,text:C,tokens:this.lexer.inlineTokens(C)}}let g=p.slice(2,-2);return{type:"strong",raw:p,text:g,tokens:this.lexer.inlineTokens(g)}}}}codespan(t){let i=this.rules.inline.code.exec(t);if(i){let e=i[2].replace(/\n/g," "),s=/[^ ]/.test(e),n=/^ /.test(e)&&/ $/.test(e);if(s&&n)e=e.substring(1,e.length-1);return e=G(e,!0),{type:"codespan",raw:i[0],text:e}}}br(t){let i=this.rules.inline.br.exec(t);if(i)return{type:"br",raw:i[0]}}del(t){let i=this.rules.inline.del.exec(t);if(i)return{type:"del",raw:i[0],text:i[2],tokens:this.lexer.inlineTokens(i[2])}}autolink(t,i){let e=this.rules.inline.autolink.exec(t);if(e){let s,n;if(e[2]==="@")s=G(this.options.mangle?i(e[1]):e[1]),n="mailto:"+s;else s=G(e[1]),n=s;return{type:"link",raw:e[0],text:s,href:n,tokens:[{type:"text",raw:s,text:s}]}}}url(t,i){let e;if(e=this.rules.inline.url.exec(t)){let s,n;if(e[2]==="@")s=G(this.options.mangle?i(e[0]):e[0]),n="mailto:"+s;else{let o;do o=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])[0];while(o!==e[0]);if(s=G(e[0]),e[1]==="www.")n="http://"+e[0];else n=e[0]}return{type:"link",raw:e[0],text:s,href:n,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(t,i){let e=this.rules.inline.text.exec(t);if(e){let s;if(this.lexer.state.inRawBlock)s=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):G(e[0]):e[0];else s=G(this.options.smartypants?i(e[0]):e[0]);return{type:"text",raw:e[0],text:s}}}}var H={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:G1,lheading:/^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};H._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;H._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;H.def=$(H.def).replace("label",H._label).replace("title",H._title).getRegex();H.bullet=/(?:[*+-]|\d{1,9}[.)])/;H.listItemStart=$(/^( *)(bull) */).replace("bull",H.bullet).getRegex();H.list=$(H.list).replace(/bull/g,H.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+H.def.source+")").getRegex();H._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";H._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;H.html=$(H.html,"i").replace("comment",H._comment).replace("tag",H._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();H.lheading=$(H.lheading).replace(/bull/g,H.bullet).getRegex();H.paragraph=$(H._paragraph).replace("hr",H.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",H._tag).getRegex();H.blockquote=$(H.blockquote).replace("paragraph",H.paragraph).getRegex();H.normal={...H};H.gfm={...H.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};H.gfm.table=$(H.gfm.table).replace("hr",H.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",H._tag).getRegex();H.gfm.paragraph=$(H._paragraph).replace("hr",H.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",H.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",H._tag).getRegex();H.pedantic={...H.normal,html:$(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",H._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:G1,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:$(H.normal._paragraph).replace("hr",H.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",H.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};var A={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:G1,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,rDelimAst:/^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:G1,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^((?![*_])[\spunctuation])/};A._punctuation="\\p{P}$+<=>`^|~";A.punctuation=$(A.punctuation,"u").replace(/punctuation/g,A._punctuation).getRegex();A.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;A.anyPunctuation=/\\[punct]/g;A._escapes=/\\([punct])/g;A._comment=$(H._comment).replace("(?:-->|$)","-->").getRegex();A.emStrong.lDelim=$(A.emStrong.lDelim,"u").replace(/punct/g,A._punctuation).getRegex();A.emStrong.rDelimAst=$(A.emStrong.rDelimAst,"gu").replace(/punct/g,A._punctuation).getRegex();A.emStrong.rDelimUnd=$(A.emStrong.rDelimUnd,"gu").replace(/punct/g,A._punctuation).getRegex();A.anyPunctuation=$(A.anyPunctuation,"gu").replace(/punct/g,A._punctuation).getRegex();A._escapes=$(A._escapes,"gu").replace(/punct/g,A._punctuation).getRegex();A._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;A._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;A.autolink=$(A.autolink).replace("scheme",A._scheme).replace("email",A._email).getRegex();A._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;A.tag=$(A.tag).replace("comment",A._comment).replace("attribute",A._attribute).getRegex();A._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;A._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;A._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;A.link=$(A.link).replace("label",A._label).replace("href",A._href).replace("title",A._title).getRegex();A.reflink=$(A.reflink).replace("label",A._label).replace("ref",H._label).getRegex();A.nolink=$(A.nolink).replace("ref",H._label).getRegex();A.reflinkSearch=$(A.reflinkSearch,"g").replace("reflink",A.reflink).replace("nolink",A.nolink).getRegex();A.normal={...A};A.pedantic={...A.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:$(/^!?\[(label)\]\((.*?)\)/).replace("label",A._label).getRegex(),reflink:$(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",A._label).getRegex()};A.gfm={...A.normal,escape:$(A.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};A.gfm.url=$(A.gfm.url,"i").replace("email",A.gfm._extended_email).getRegex();A.breaks={...A.gfm,br:$(A.br).replace("{2,}","*").getRegex(),text:$(A.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};function J0(t){return t.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function v2(t){let i="",e,s,n=t.length;for(e=0;e<n;e++){if(s=t.charCodeAt(e),Math.random()>0.5)s="x"+s.toString(16);i+="&#"+s+";"}return i}class R{constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||i1,this.options.tokenizer=this.options.tokenizer||new C1,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let i={block:H.normal,inline:A.normal};if(this.options.pedantic)i.block=H.pedantic,i.inline=A.pedantic;else if(this.options.gfm)if(i.block=H.gfm,this.options.breaks)i.inline=A.breaks;else i.inline=A.gfm;this.tokenizer.rules=i}static get rules(){return{block:H,inline:A}}static lex(t,i){return new R(i).lex(t)}static lexInline(t,i){return new R(i).inlineTokens(t)}lex(t){t=t.replace(/\r\n|\r/g,`
`),this.blockTokens(t,this.tokens);let i;while(i=this.inlineQueue.shift())this.inlineTokens(i.src,i.tokens);return this.tokens}blockTokens(t,i=[]){if(this.options.pedantic)t=t.replace(/\t/g,"    ").replace(/^ +$/gm,"");else t=t.replace(/^( *)(\t+)/gm,(a,l,c)=>{return l+"    ".repeat(c.length)});let e,s,n,o;while(t){if(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((a)=>{if(e=a.call({lexer:this},t,i))return t=t.substring(e.raw.length),i.push(e),!0;return!1}))continue;if(e=this.tokenizer.space(t)){if(t=t.substring(e.raw.length),e.raw.length===1&&i.length>0)i[i.length-1].raw+=`
`;else i.push(e);continue}if(e=this.tokenizer.code(t)){if(t=t.substring(e.raw.length),s=i[i.length-1],s&&(s.type==="paragraph"||s.type==="text"))s.raw+=`
`+e.raw,s.text+=`
`+e.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text;else i.push(e);continue}if(e=this.tokenizer.fences(t)){t=t.substring(e.raw.length),i.push(e);continue}if(e=this.tokenizer.heading(t)){t=t.substring(e.raw.length),i.push(e);continue}if(e=this.tokenizer.hr(t)){t=t.substring(e.raw.length),i.push(e);continue}if(e=this.tokenizer.blockquote(t)){t=t.substring(e.raw.length),i.push(e);continue}if(e=this.tokenizer.list(t)){t=t.substring(e.raw.length),i.push(e);continue}if(e=this.tokenizer.html(t)){t=t.substring(e.raw.length),i.push(e);continue}if(e=this.tokenizer.def(t)){if(t=t.substring(e.raw.length),s=i[i.length-1],s&&(s.type==="paragraph"||s.type==="text"))s.raw+=`
`+e.raw,s.text+=`
`+e.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text;else if(!this.tokens.links[e.tag])this.tokens.links[e.tag]={href:e.href,title:e.title};continue}if(e=this.tokenizer.table(t)){t=t.substring(e.raw.length),i.push(e);continue}if(e=this.tokenizer.lheading(t)){t=t.substring(e.raw.length),i.push(e);continue}if(n=t,this.options.extensions&&this.options.extensions.startBlock){let a=1/0,l=t.slice(1),c;if(this.options.extensions.startBlock.forEach(function(h){if(c=h.call({lexer:this},l),typeof c==="number"&&c>=0)a=Math.min(a,c)}),a<1/0&&a>=0)n=t.substring(0,a+1)}if(this.state.top&&(e=this.tokenizer.paragraph(n))){if(s=i[i.length-1],o&&s.type==="paragraph")s.raw+=`
`+e.raw,s.text+=`
`+e.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text;else i.push(e);o=n.length!==t.length,t=t.substring(e.raw.length);continue}if(e=this.tokenizer.text(t)){if(t=t.substring(e.raw.length),s=i[i.length-1],s&&s.type==="text")s.raw+=`
`+e.raw,s.text+=`
`+e.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text;else i.push(e);continue}if(t){let a="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,i}inline(t,i=[]){return this.inlineQueue.push({src:t,tokens:i}),i}inlineTokens(t,i=[]){let e,s,n,o=t,a,l,c;if(this.tokens.links){let h=Object.keys(this.tokens.links);if(h.length>0){while((a=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null)if(h.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1)))o=o.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex)}}while((a=this.tokenizer.rules.inline.blockSkip.exec(o))!=null)o=o.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);while((a=this.tokenizer.rules.inline.anyPunctuation.exec(o))!=null)o=o.slice(0,a.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);while(t){if(!l)c="";if(l=!1,this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((h)=>{if(e=h.call({lexer:this},t,i))return t=t.substring(e.raw.length),i.push(e),!0;return!1}))continue;if(e=this.tokenizer.escape(t)){t=t.substring(e.raw.length),i.push(e);continue}if(e=this.tokenizer.tag(t)){if(t=t.substring(e.raw.length),s=i[i.length-1],s&&e.type==="text"&&s.type==="text")s.raw+=e.raw,s.text+=e.text;else i.push(e);continue}if(e=this.tokenizer.link(t)){t=t.substring(e.raw.length),i.push(e);continue}if(e=this.tokenizer.reflink(t,this.tokens.links)){if(t=t.substring(e.raw.length),s=i[i.length-1],s&&e.type==="text"&&s.type==="text")s.raw+=e.raw,s.text+=e.text;else i.push(e);continue}if(e=this.tokenizer.emStrong(t,o,c)){t=t.substring(e.raw.length),i.push(e);continue}if(e=this.tokenizer.codespan(t)){t=t.substring(e.raw.length),i.push(e);continue}if(e=this.tokenizer.br(t)){t=t.substring(e.raw.length),i.push(e);continue}if(e=this.tokenizer.del(t)){t=t.substring(e.raw.length),i.push(e);continue}if(e=this.tokenizer.autolink(t,v2)){t=t.substring(e.raw.length),i.push(e);continue}if(!this.state.inLink&&(e=this.tokenizer.url(t,v2))){t=t.substring(e.raw.length),i.push(e);continue}if(n=t,this.options.extensions&&this.options.extensions.startInline){let h=1/0,d=t.slice(1),p;if(this.options.extensions.startInline.forEach(function(g){if(p=g.call({lexer:this},d),typeof p==="number"&&p>=0)h=Math.min(h,p)}),h<1/0&&h>=0)n=t.substring(0,h+1)}if(e=this.tokenizer.inlineText(n,J0)){if(t=t.substring(e.raw.length),e.raw.slice(-1)!=="_")c=e.raw.slice(-1);if(l=!0,s=i[i.length-1],s&&s.type==="text")s.raw+=e.raw,s.text+=e.text;else i.push(e);continue}if(t){let h="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(h);break}else throw new Error(h)}}return i}}class E1{constructor(t){this.options=t||i1}code(t,i,e){let s=(i||"").match(/\S*/)[0];if(this.options.highlight){let n=this.options.highlight(t,s);if(n!=null&&n!==t)e=!0,t=n}if(t=t.replace(/\n$/,"")+`
`,!s)return"<pre><code>"+(e?t:G(t,!0))+`</code></pre>
`;return'<pre><code class="'+this.options.langPrefix+G(s)+'">'+(e?t:G(t,!0))+`</code></pre>
`}blockquote(t){return`<blockquote>
${t}</blockquote>
`}html(t,i){return t}heading(t,i,e,s){if(this.options.headerIds){let n=this.options.headerPrefix+s.slug(e);return`<h${i} id="${n}">${t}</h${i}>
`}return`<h${i}>${t}</h${i}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(t,i,e){let s=i?"ol":"ul",n=i&&e!==1?' start="'+e+'"':"";return"<"+s+n+`>
`+t+"</"+s+`>
`}listitem(t){return`<li>${t}</li>
`}checkbox(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(t){return`<p>${t}</p>
`}table(t,i){if(i)i=`<tbody>${i}</tbody>`;return`<table>
<thead>
`+t+`</thead>
`+i+`</table>
`}tablerow(t){return`<tr>
${t}</tr>
`}tablecell(t,i){let e=i.header?"th":"td";return(i.align?`<${e} align="${i.align}">`:`<${e}>`)+t+`</${e}>
`}strong(t){return`<strong>${t}</strong>`}em(t){return`<em>${t}</em>`}codespan(t){return`<code>${t}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(t){return`<del>${t}</del>`}link(t,i,e){if(t=u2(this.options.sanitize,this.options.baseUrl,t),t===null)return e;let s='<a href="'+t+'"';if(i)s+=' title="'+i+'"';return s+=">"+e+"</a>",s}image(t,i,e){if(t=u2(this.options.sanitize,this.options.baseUrl,t),t===null)return e;let s=`<img src="${t}" alt="${e}"`;if(i)s+=` title="${i}"`;return s+=this.options.xhtml?"/>":">",s}text(t){return t}}class N1{strong(t){return t}em(t){return t}codespan(t){return t}del(t){return t}html(t){return t}text(t){return t}link(t,i,e){return""+e}image(t,i,e){return""+e}br(){return""}}class U1{constructor(){this.seen={}}serialize(t){return t.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(t,i){let e=t,s=0;if(this.seen.hasOwnProperty(e)){s=this.seen[t];do s++,e=t+"-"+s;while(this.seen.hasOwnProperty(e))}if(!i)this.seen[t]=s,this.seen[e]=0;return e}slug(t,i={}){let e=this.serialize(t);return this.getNextSafeSlug(e,i.dryrun)}}class Y{constructor(t){this.options=t||i1,this.options.renderer=this.options.renderer||new E1,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new N1,this.slugger=new U1}static parse(t,i){return new Y(i).parse(t)}static parseInline(t,i){return new Y(i).parseInline(t)}parse(t,i=!0){let e="",s,n,o,a,l,c,h,d,p,g,C,z,S,r,f,v,u,b,M,y=t.length;for(s=0;s<y;s++){if(g=t[s],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[g.type]){if(M=this.options.extensions.renderers[g.type].call({parser:this},g),M!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(g.type)){e+=M||"";continue}}switch(g.type){case"space":continue;case"hr":{e+=this.renderer.hr();continue}case"heading":{e+=this.renderer.heading(this.parseInline(g.tokens),g.depth,M2(this.parseInline(g.tokens,this.textRenderer)),this.slugger);continue}case"code":{e+=this.renderer.code(g.text,g.lang,g.escaped);continue}case"table":{d="",h="",a=g.header.length;for(n=0;n<a;n++)h+=this.renderer.tablecell(this.parseInline(g.header[n].tokens),{header:!0,align:g.align[n]});d+=this.renderer.tablerow(h),p="",a=g.rows.length;for(n=0;n<a;n++){c=g.rows[n],h="",l=c.length;for(o=0;o<l;o++)h+=this.renderer.tablecell(this.parseInline(c[o].tokens),{header:!1,align:g.align[o]});p+=this.renderer.tablerow(h)}e+=this.renderer.table(d,p);continue}case"blockquote":{p=this.parse(g.tokens),e+=this.renderer.blockquote(p);continue}case"list":{C=g.ordered,z=g.start,S=g.loose,a=g.items.length,p="";for(n=0;n<a;n++){if(f=g.items[n],v=f.checked,u=f.task,r="",f.task)if(b=this.renderer.checkbox(v),S)if(f.tokens.length>0&&f.tokens[0].type==="paragraph"){if(f.tokens[0].text=b+" "+f.tokens[0].text,f.tokens[0].tokens&&f.tokens[0].tokens.length>0&&f.tokens[0].tokens[0].type==="text")f.tokens[0].tokens[0].text=b+" "+f.tokens[0].tokens[0].text}else f.tokens.unshift({type:"text",text:b});else r+=b;r+=this.parse(f.tokens,S),p+=this.renderer.listitem(r,u,v)}e+=this.renderer.list(p,C,z);continue}case"html":{e+=this.renderer.html(g.text,g.block);continue}case"paragraph":{e+=this.renderer.paragraph(this.parseInline(g.tokens));continue}case"text":{p=g.tokens?this.parseInline(g.tokens):g.text;while(s+1<y&&t[s+1].type==="text")g=t[++s],p+=`
`+(g.tokens?this.parseInline(g.tokens):g.text);e+=i?this.renderer.paragraph(p):p;continue}default:{let E='Token with "'+g.type+'" type was not found.';if(this.options.silent){console.error(E);return}else throw new Error(E)}}}return e}parseInline(t,i){i=i||this.renderer;let e="",s,n,o,a=t.length;for(s=0;s<a;s++){if(n=t[s],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[n.type]){if(o=this.options.extensions.renderers[n.type].call({parser:this},n),o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(n.type)){e+=o||"";continue}}switch(n.type){case"escape":{e+=i.text(n.text);break}case"html":{e+=i.html(n.text);break}case"link":{e+=i.link(n.href,n.title,this.parseInline(n.tokens,i));break}case"image":{e+=i.image(n.href,n.title,n.text);break}case"strong":{e+=i.strong(this.parseInline(n.tokens,i));break}case"em":{e+=i.em(this.parseInline(n.tokens,i));break}case"codespan":{e+=i.codespan(n.text);break}case"br":{e+=i.br();break}case"del":{e+=i.del(this.parseInline(n.tokens,i));break}case"text":{e+=i.text(n.text);break}default:{let l='Token with "'+n.type+'" type was not found.';if(this.options.silent){console.error(l);return}else throw new Error(l)}}}return e}}class w1{constructor(t){this.options=t||i1}static passThroughHooks=new Set(["preprocess","postprocess"]);preprocess(t){return t}postprocess(t){return t}}class y2{defaults=p3();options=this.setOptions;parse=this.#t(R.lex,Y.parse);parseInline=this.#t(R.lexInline,Y.parseInline);Parser=Y;parser=Y.parse;Renderer=E1;TextRenderer=N1;Lexer=R;lexer=R.lex;Tokenizer=C1;Slugger=U1;Hooks=w1;constructor(...t){this.use(...t)}walkTokens(t,i){let e=[];for(let s of t)switch(e=e.concat(i.call(this,s)),s.type){case"table":{for(let n of s.header)e=e.concat(this.walkTokens(n.tokens,i));for(let n of s.rows)for(let o of n)e=e.concat(this.walkTokens(o.tokens,i));break}case"list":{e=e.concat(this.walkTokens(s.items,i));break}default:if(this.defaults.extensions&&this.defaults.extensions.childTokens&&this.defaults.extensions.childTokens[s.type])this.defaults.extensions.childTokens[s.type].forEach((n)=>{e=e.concat(this.walkTokens(s[n],i))});else if(s.tokens)e=e.concat(this.walkTokens(s.tokens,i))}return e}use(...t){let i=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach((e)=>{let s={...e};if(s.async=this.defaults.async||s.async||!1,e.extensions)e.extensions.forEach((n)=>{if(!n.name)throw new Error("extension name required");if(n.renderer){let o=i.renderers[n.name];if(o)i.renderers[n.name]=function(...a){let l=n.renderer.apply(this,a);if(l===!1)l=o.apply(this,a);return l};else i.renderers[n.name]=n.renderer}if(n.tokenizer){if(!n.level||n.level!=="block"&&n.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");if(i[n.level])i[n.level].unshift(n.tokenizer);else i[n.level]=[n.tokenizer];if(n.start){if(n.level==="block")if(i.startBlock)i.startBlock.push(n.start);else i.startBlock=[n.start];else if(n.level==="inline")if(i.startInline)i.startInline.push(n.start);else i.startInline=[n.start]}}if(n.childTokens)i.childTokens[n.name]=n.childTokens}),s.extensions=i;if(e.renderer){let n=this.defaults.renderer||new E1(this.defaults);for(let o in e.renderer){let a=n[o];n[o]=(...l)=>{let c=e.renderer[o].apply(n,l);if(c===!1)c=a.apply(n,l);return c}}s.renderer=n}if(e.tokenizer){let n=this.defaults.tokenizer||new C1(this.defaults);for(let o in e.tokenizer){let a=n[o];n[o]=(...l)=>{let c=e.tokenizer[o].apply(n,l);if(c===!1)c=a.apply(n,l);return c}}s.tokenizer=n}if(e.hooks){let n=this.defaults.hooks||new w1;for(let o in e.hooks){let a=n[o];if(w1.passThroughHooks.has(o))n[o]=(l)=>{if(this.defaults.async)return Promise.resolve(e.hooks[o].call(n,l)).then((h)=>{return a.call(n,h)});let c=e.hooks[o].call(n,l);return a.call(n,c)};else n[o]=(...l)=>{let c=e.hooks[o].apply(n,l);if(c===!1)c=a.apply(n,l);return c}}s.hooks=n}if(e.walkTokens){let n=this.defaults.walkTokens;s.walkTokens=function(o){let a=[];if(a.push(e.walkTokens.call(this,o)),n)a=a.concat(n.call(this,o));return a}}this.defaults={...this.defaults,...s}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}#t(t,i){return(e,s,n)=>{if(typeof s==="function")n=s,s=null;let o={...s};s={...this.defaults,...o};let a=this.#e(s.silent,s.async,n);if(typeof e==="undefined"||e===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof e!=="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(N0(s,n),s.hooks)s.hooks.options=s;if(n){let l=s.highlight,c;try{if(s.hooks)e=s.hooks.preprocess(e);c=t(e,s)}catch(p){return a(p)}let h=(p)=>{let g;if(!p)try{if(s.walkTokens)this.walkTokens(c,s.walkTokens);if(g=i(c,s),s.hooks)g=s.hooks.postprocess(g)}catch(C){p=C}return s.highlight=l,p?a(p):n(null,g)};if(!l||l.length<3)return h();if(delete s.highlight,!c.length)return h();let d=0;if(this.walkTokens(c,(p)=>{if(p.type==="code")d++,setTimeout(()=>{l(p.text,p.lang,(g,C)=>{if(g)return h(g);if(C!=null&&C!==p.text)p.text=C,p.escaped=!0;if(d--,d===0)h()})},0)}),d===0)h();return}if(s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(e):e).then((l)=>t(l,s)).then((l)=>s.walkTokens?Promise.all(this.walkTokens(l,s.walkTokens)).then(()=>l):l).then((l)=>i(l,s)).then((l)=>s.hooks?s.hooks.postprocess(l):l).catch(a);try{if(s.hooks)e=s.hooks.preprocess(e);let l=t(e,s);if(s.walkTokens)this.walkTokens(l,s.walkTokens);let c=i(l,s);if(s.hooks)c=s.hooks.postprocess(c);return c}catch(l){return a(l)}}}#e(t,i,e){return(s)=>{if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,t){let n="<p>An error occurred:</p><pre>"+G(s.message+"",!0)+"</pre>";if(i)return Promise.resolve(n);if(e){e(null,n);return}return n}if(i)return Promise.reject(s);if(e){e(s);return}throw s}}}var h1=new y2(i1);function q(t,i,e){return h1.parse(t,i,e)}q.options=q.setOptions=function(t){return h1.setOptions(t),q.defaults=h1.defaults,g2(q.defaults),q};q.getDefaults=p3;q.defaults=i1;q.use=function(...t){return h1.use(...t),q.defaults=h1.defaults,g2(q.defaults),q};q.walkTokens=function(t,i){return h1.walkTokens(t,i)};q.parseInline=h1.parseInline;q.Parser=Y;q.parser=Y.parse;q.Renderer=E1;q.TextRenderer=N1;q.Lexer=R;q.lexer=R.lex;q.Tokenizer=C1;q.Slugger=U1;q.Hooks=w1;q.parse=q;var{options:si,setOptions:ni,use:oi,walkTokens:ai,parseInline:li}=q;var ci=Y.parse,ri=R.lex;/*!
# markdown

`<xin-md>` renders markdown using [marked](https://www.npmjs.com/package/marked).

`<xin-md>` renders [markdown](https://www.markdownguide.org/) anywhere, either using the
`src` attribute to load the file asynchronously, or rendering the text inside it.

```html
<xin-md>
## hello
world
</xin-md>
```
```css
xin-md {
  display: block;
  padding: var(--spacing);
}
```

Note that, by default, `<xin-md>` will use its `textContent` (not its `innerHTML`) as its source.

## rendering markdown from a url

Again, like an `<img>` tag, you can simply set a `<xin-md>`'s `src` attribute to a URL pointing
to markdown source and it will load it asynchronously and render it.

```
<xin-md src="/path/to/file.md">
```

## setting its `value`

Or, just set the element's `value` and it will render it for you. You can try
this in the console, e.g.

```
$('.preview xin-md').value = 'testing\n\n## this is a test'
```

## elements

`<xin-md>` also (optionally) allows the embedding of inline HTML elements without blocking markdown
rendering, so that you can embed specific elements while retaining markdown. You need to explicitly set
the `elements` property, and for markdown rendering not to be blocked, the html elements need to
start on a new line and not be indented. E.g.

```html
<xin-md elements>
<form>
### this is a form
<label>
fill in this field.
**It's important!**
<input>
</label>
</form>
</xin-md>
```

In this case `<xin-md>` uses its `innerHTML` and not its `textContent`.

## context and template variables

`<xin-md>` also supports **template** values. You need to provide data to the element in the form
of `context` (an arbitrary object, or a JSON string), and then embed the template text using
handlebars-style doubled curly braces, e.g. `{{path.to.value}}`.

If no value is found, the original text is passed through.

Finally, note that template substitution occurs *before* markdown transformation, which means you can
pass context data through to HTML elements.

```html
<xin-md
  elements
  context='{"title": "template example", "foo": {"bar": 17}, "nested": "*work*: {{foo.bar}}"}'
>
## {{title}}

The magic number is <input type="number" value={{foo.bar}}>

Oh, and nested templates {{nested}}.
</xin-md>
```
*/function z2(t,i){if(i==null)i="";else if(typeof i!=="string")i=String(i);return i.replace(/\{\{([^}]+)\}\}/g,(e,s)=>{let n=X1[`${t}${s.startsWith("[")?s:"."+s}`];return n===void 0?e:z2(t,String(n))})}class x2 extends F{src="";value="";content=null;elements=!1;context={};constructor(){super();this.initAttributes("src","elements","context")}connectedCallback(){if(super.connectedCallback(),this.src!=="")(async()=>{let t=await fetch(this.src);this.value=await t.text()})();else if(this.value==="")if(this.elements)this.value=this.innerHTML;else this.value=this.textContent!=null?this.textContent:""}didRender=()=>{};render(){super.render(),X1[this.instanceId]=typeof this.context==="string"?JSON.parse(this.context):this.context;let t=z2(this.instanceId,this.value);if(this.elements){let i=t.split(`
`).reduce((e,s)=>{if(s.startsWith("<")||e.length===0)e.push(s);else{let n=e[e.length-1];if(!n.startsWith("<")||!n.endsWith(">"))e[e.length-1]+=`
`+s;else e.push(s)}return e},[]);this.innerHTML=i.map((e)=>e.startsWith("<")&&e.endsWith(">")?e:q(e,{mangle:!1,headerIds:!1})).join("")}else this.innerHTML=q(t,{mangle:!1,headerIds:!1});this.didRender()}}var fi=x2.elementCreator({tag:"xin-md"});/*!

# notifications

`XinNotification` provides a singleton custom `<xin-notification>` element that manages
a list of notifications.

The notifications are displayed most-recent first. If the notifications would take more than
half the height of the display, they are scrolled.

You can post a notification simply with `XinNotification.post()` or `postNotification()`.

```
interface NotificationSpec {
  message: string
  type?: 'success' | 'info' | 'log' | 'warn' | 'error' | 'progress' // default 'info'
  icon?: SVGElement | string // defaults to an info icon
  duration?: number
  progress?: () => number // return percentage completion
  close?: () => void
}
```

If you provide a `progress` callback (which is assumed to return a number from `0-100`, with
100+ indicating completion) then `XinNotification` will poll it every second until the
task completes or the notification is closed. Returning 100 or more will automatically close
the notification.

If you configure a notification's `type = "progress"` but don't provide a `progress` callback
then an indefinite `<progress>` element will be displayed.

If you provide a `close` callback, it will be fired if the user closes the notification.

`postNotification` returns a callback function that closes the note programmatically (e.g.
when an operation completes). This will *also* call any `close` callback function you
provided. (The progress demos in the example exercise this functionality.)

```js
const { postNotification, icons } = xinjsui

const form = preview.querySelector('xin-form')
const submit = preview.querySelector('.submit')
const closeButton = preview.querySelector('.close')

let close

form.submitCallback = (value, isValid) => {
  if (!isValid) return
  if (value.type.startsWith('progress')) {
    startTime = Date.now()
    const { message, duration, icon } = value
    close = postNotification({
      message,
      type: 'progress',
      icon,
      progress: value.type === 'progress' ? () => (Date.now() - startTime) / (10 * duration) : undefined,
      close: () => { postNotification(`${value.message} cancelled`) },
    })
  } else {
    close = postNotification(value)
  }
  console.log(close)
  closeButton.disabled = false
}

submit.addEventListener('click', form.submit)
closeButton.addEventListener('click', () => {
  if (close) {
    close()
  }
})

postNotification({
  message: 'Welcome to xinjs-ui notifications, this message will disappear in 2s',
  duration: 2
})
```
```html
<xin-form>
  <h3 slot="header">Notification Test</h3>
  <xin-field caption="Message" key="message" type="string" value="This is a test…"></xin-field>
  <xin-field caption="Type" key="type" value="info">
    <xin-select slot="input"
      options="error,warn,info,success,log,,progress,progress (indefinite)"
    ></xin-select>
  </xin-field>
  <xin-field caption="Icon" key="icon" value="info">
    <xin-select slot="input"
      options="info,bug,thumbsUp,thumbsDown,message"
    ></xin-select>
  </xin-field>
  <xin-field caption="Duration" key="duration" type="number" value="2"></xin-field>
  <button slot="footer" class="close" disabled>Close Last Notification</button>
  <span slot="footer" class="elastic"></span>
  <button slot="footer" class="submit">Post Notification</button>
</xin-form>
```
```css
xin-form {
  height: 100%;
}

xin-form::part(content) {
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  background: var(--background);
}

xin-form::part(header),
xin-form::part(footer) {
  background: #eee;
  justify-content: center;
  padding: 10px;
}

xin-form h3 {
  margin: 0;
}

xin-form label {
  display: grid;
  grid-template-columns: 120px 1fr;
}
```

## `postNotification(spec: NotificationSpec | string)`

This is simply a wrapper for `XinNotification.post()`.
*/var{div:f3,button:Q0}=I,K0={error:"red",warn:"orange",info:"royalblue",log:"gray",success:"green",progress:"royalblue"};class b1 extends F{static singleton;static styleSpec={":host":{_notificationSpacing:8,_notificationWidth:360,_notificationPadding:`${m.notificationSpacing} ${m.notificationSpacing50} ${m.notificationSpacing} ${m.notificationSpacing200}`,_notificationBg:"#fafafa",_notificationAccentColor:"#aaa",_notificationTextColor:"#444",_notificationIconSize:m.notificationSpacing300,_notificationButtonSize:48,_notificationBorderWidth:"3px 0 0",_notificationBorderRadius:m.notificationSpacing50,position:"fixed",left:0,right:0,bottom:0,paddingBottom:m.notificationSpacing,width:m.notificationWidth,display:"flex",flexDirection:"column-reverse",margin:"0 auto",gap:m.notificationSpacing,maxHeight:"50vh",overflow:"hidden auto",boxShadow:"none !important"},":host *":{color:m.notificationTextColor},":host .note":{display:"grid",background:m.notificationBg,padding:m.notificationPadding,gridTemplateColumns:`${m.notificationIconSize} 1fr ${m.notificationButtonSize}`,gap:m.notificationSpacing,alignItems:"center",borderRadius:m.notificationBorderRadius,boxShadow:`0 2px 8px #0006, inset 0 0 0 2px ${m.notificationAccentColor}`,borderColor:m.notificationAccentColor,borderWidth:m.notificationBorderWidth,borderStyle:"solid",transition:"0.5s ease-in",transitionProperty:"margin, opacity",zIndex:1},":host .note .icon":{fill:m.notificationAccentColor},":host .note button":{display:"flex",lineHeight:m.notificationButtonSize,padding:0,margin:0,height:m.notificationButtonSize,width:m.notificationButtonSize,background:"transparent",alignItems:"center",justifyContent:"center",boxShadow:"none",border:"none",position:"relative"},":host .note button:hover svg":{fill:m.notificationAccentColor},":host .note button:active svg":{borderRadius:99,fill:m.notificationBg,background:m.notificationAccentColor,padding:m.spacing50},":host .note svg":{height:m.notificationIconSize,width:m.notificationIconSize,pointerEvents:"none"},":host .message":{display:"flex",flexDirection:"column",alignItems:"center",gap:m.notificationSpacing},":host .note.closing":{opacity:0,zIndex:0}};static removeNote(t){t.classList.add("closing"),t.style.marginBottom=-t.offsetHeight+"px";let i=()=>{t.remove()};t.addEventListener("transitionend",i),setTimeout(i,1000)}static post(t){let{message:i,duration:e,type:s,close:n,progress:o,icon:a}=Object.assign({type:"info",duration:-1},typeof t==="string"?{message:t}:t);if(!this.singleton)this.singleton=X0();let l=this.singleton;document.body.append(l),l.style.zIndex=String(I1()+1);let c=K0[s],h=o||s==="progress"?I.progress():{},d=()=>{if(n)n();b1.removeNote(g)},p=a instanceof SVGElement?a:a?T[a]({class:"icon"}):T.info({class:"icon"}),g=f3({class:`note ${s}`,style:{_notificationAccentColor:c}},p,f3({class:"message"},f3(i),h),Q0({class:"close",title:"close",apply(C){C.addEventListener("click",d)}},T.x()));if(l.shadowRoot.append(g),h instanceof HTMLProgressElement&&o instanceof Function){h.setAttribute("max",String(100)),h.value=o();let C=setInterval(()=>{if(!l.shadowRoot.contains(g)){clearInterval(C);return}let z=o();if(h.value=z,z>=100)b1.removeNote(g)},1000)}if(e>0)setTimeout(()=>{b1.removeNote(g)},e*1000);return g.scrollIntoView(),d}content=null}var X0=b1.elementCreator({tag:"xin-notification"});function yi(t){return b1.post(t)}/*!
# password strength

Just wrap it a `<xin-password-strength>` element around an `<input>`
and it will gauge its content strength as a password. It will also
let you **securely verify** that the password hasn't been breached.

```js
const toggle = preview.querySelector('.toggle')
const icon = preview.querySelector('xin-icon')
const input = preview.querySelector('input')
const breach = preview.querySelector('.breach')
const output = preview.querySelector('.output')

toggle.addEventListener('click', () => {
  if (icon.icon === 'eye') {
    input.type = 'text'
    icon.icon = 'eyeOff'
  } else {
    input.type = 'password'
    icon.icon = 'eye'
  }
})

breach.addEventListener('click', async () => {
  preview.querySelector('xin-password-strength').isBreached().then(isBreached => {
    output.textContent =
      isBreached
      ? 'This password has been breached, look at console for details'
      : 'Seems OK'
    output.classList.toggle('breached', isBreached)
  })
})
```
```html
<xin-password-strength>
  <input class="password" type="password">
  <button class="toggle">
    <xin-icon icon="eye"></xin-icon>
  </button>
</xin-password-strength>

<br><br>
<button class="breach">Check if breached</button>
<div class="output"></div>
```
```css
input.password {
  box-shadow: inset 0 0 0 2px var(--indicator-color);
}

.breached {
  color: white;
  background: red;
}
```

## Algorithm

The password is assessed to have a strength based on:

- **length** one point for at least `goodLength` characters long.
- **[a-z]** one point for containing a lowercase letter
- **[A-Z]** one point for containing an uppercase letter
- **[0-9]** one point for containing a numeric character
- **^[a-zA-Z0-9]]** one point for containing some other kind of character

A password smaller than `minLength` is an automatic `0`.

## Attributes

- `minLength` defaults to `8`
- `goodLength` defaults to `12`
- `indicatorColors` six HTML colors, separated by commas, defaults to `'#f00,#f40,#f80,#ef0,#8f0,#0d4'`
- `descriptionColors` six HTML colors, sepeated by commans, defaults to `'#000,#000,#000,#000,#000,#fff'`

## Properties

- `value`, `strength` is a number from 0 to 5
- `issues` is a structure which you can use to generate feedback

```
<xin-password-strength>.issues = {
  tooShort: boolean,
  short: boolean,
  noUpper: boolean,
  noLower: boolean,
  noNumber: boolean,
  noSpecial: boolean,
}
```

## `isBreached()`

`<xin-password-meter>` also provides an `isBreached(): Promise<boolean>` method
which uses [weakpass.com's API](https://weakpass.com/) to tell you if the password has been
breached.

> Note that `isBreached` does not send the plain-text password anywhere. It uses **SHA-1**
to hash the password and then sends that for lookup.

## Utility Functions

Two functions used internally for querying [Weakpass,com](https://weakpass.com/) are
provided in case they're useful on their own.

`isBreached(password: striing): Promise<boolean>` will return `true` if the password is
found in Weakpass's database (and spit out extra info to the console).

`digest(s: string, method="sha-1"): Promise<string>` is just a nice wrapper for `crypto.digest`.
*/var Z0=async(t,i="SHA-1")=>{let s=new TextEncoder().encode(t),n=await crypto.subtle.digest(i,s);return Array.from(new Uint8Array(n)).map((l)=>l.toString(16).padStart(2,"0")).join("")},R0=async(t)=>{let i=await Z0(t),e=await fetch(`https://weakpass.com/api/v1/search/${i}`);if(e.ok){let s=await e.json();console.log("password found in weakpass database",s)}return e.status!==404},{span:v3,xinSlot:Y0}=I;class w2 extends F{minLength=8;goodLength=12;indicatorColors="#f00,#f40,#f80,#ef0,#8f0,#0a2";descriptionColors="#000,#000,#000,#000,#000,#fff";issues={tooShort:!0,short:!0,noUpper:!0,noLower:!0,noNumber:!0,noSpecial:!0};issueDescriptions={tooShort:"too short",short:"short",noUpper:"no upper case",noLower:"no lower case",noNumber:"no digits",noSpecial:"no unusual characters"};value=0;strengthDescriptions=["unacceptable","very weak","weak","moderate","strong","very strong"];constructor(){super();this.initAttributes("minLength","goodLength","indicatorColors")}strength(t){return this.issues={tooShort:t.length<this.minLength,short:t.length<this.goodLength,noUpper:!t.match(/[A-Z]/),noLower:!t.match(/[a-z]/),noNumber:!t.match(/[0-9]/),noSpecial:!t.match(/[^a-zA-Z0-9]/)},this.issues.tooShort?0:Object.values(this.issues).filter((i)=>!i).length-1}async isBreached(){let t=this.querySelector("input")?.value;if(!t||typeof t!=="string")return!0;return await R0(t)}updateIndicator=(t)=>{let{level:i,description:e}=this.parts,s=this.indicatorColors.split(","),n=this.descriptionColors.split(","),o=this.strength(t);if(this.value!==o)this.value=o,this.dispatchEvent(new Event("change"));i.style.width=`${(o+1)*16.67}%`,this.style.setProperty("--indicator-color",s[o]),this.style.setProperty("--description-color",n[o]),e.textContent=this.strengthDescriptions[o]};update=(t)=>{let i=t.target.closest("input");this.updateIndicator(i?.value||"")};content=()=>[Y0({onInput:this.update}),v3({part:"meter"},v3({part:"level"}),v3({part:"description"}))];render(){super.render();let t=this.querySelector("input");this.updateIndicator(t?.value)}}var wi=w2.elementCreator({tag:"xin-password-strength",styleSpec:{":host":{display:"inline-flex",flexDirection:"column",gap:m.spacing50,position:"relative"},":host xin-slot":{display:"flex"},':host [part="meter"]':{display:"block",position:"relative",height:O.meterHeight("24px"),background:O.indicatorBg("white"),borderRadius:O.meterRadius("4px"),boxShadow:O.meterShadow(`inset 0 0 0 2px ${m.indicatorColor}`)},':host [part="level"]':{height:O.levelHeight("20px"),content:'" "',display:"inline-block",width:0,transition:"0.15s ease-out",background:m.indicatorColor,margin:O.levelMargin("2px"),borderRadius:O.levelRadius("2px")},':host [part="description"]':{position:"absolute",inset:"0",color:m.descriptionColor,height:O.meterHeight("24px"),lineHeight:O.meterHeight("24px"),textAlign:"center"}}});/*!
# rating

`XinRating` / `<xin-rating>` provides a drop-in replacement for an `<input>`
that renders a rating using <xin-icon icon="star" color="red"></xin-icon>s.

```html
<xin-rating value=3.4></xin-rating>
<xin-rating min=0 value=3.4 step=0.5 hollow></xin-rating>
<xin-rating value=3.4 color="deepskyblue"></xin-rating>
<xin-rating value=3.1 max=10 color="hotpink" icon="heart" icon-size=32></xin-rating>
```
```css
.preview {
  display: flex;
  flex-direction: column;
}
```

## Attributes

- `icon-size` (24 by default) determines the height of the control and along with `max` its width
- `max` maximum rating
- `min` (1 by default) can be 0 or 1 (allowing ratings of 0 to max or 1 to max)
- `step` (0.5 by default) granularity of rating
- `icon` ('star' by default) determines the icon used
- `fill` (#f91 by default) is the color of rating icons
- `empty-color` (#ccc by default) is the color of background icons
- `readonly` (false by default) prevents the user from changing the rating
- `hollow` (false by default) makes the empty rating icons hollow.

## Keyboard

`<xin-rating>` should be fully keyboard navigable (and, I hope, accessible).

The up key increases the rating, down descreases it. This is the same
as the behavior of `<input type="number">`, [Shoelace's rating widget](https://shoelace.style/components/rating/),
and (in my opinion) common sense, but  not like [MUI's rating widget](https://mui.com/material-ui/react-rating/).
*/var{span:g3}=I;class C2 extends F{iconSize=24;min=1;max=5;step=1;value=null;icon="star";color="#f91";emptyColor="#8888";emptyStrokeWidth=2;readonly=!1;hollow=!1;static styleSpec={":host":{display:"inline-block",position:"relative",width:"fit-content"},":host::part(container)":{position:"relative",display:"inline-block"},":host::part(empty), :host::part(filled)":{height:"100%",whiteSpace:"nowrap",overflow:"hidden"},":host::part(empty)":{pointerEvents:"none",_textColor:"transparent"},':host [part="empty"]:not(.hollow)':{fill:m.ratingEmptyColor},":host .hollow":{fill:"none",stroke:m.ratingEmptyColor,strokeWidth:m.ratingEmptyStrokeWidth},":host::part(filled)":{position:"absolute",left:0,fill:m.ratingColor,stroke:m.ratingColor,strokeWidth:m.ratingEmptyStrokeWidth},":host svg":{transform:"scale(0.7)",pointerEvents:"all !important",transition:"0.25s ease-in-out"},":host svg:hover":{transform:"scale(0.9)"},":host svg:active":{transform:"scale(1)"}};constructor(){super();this.initAttributes("max","min","icon","step","color","emptyColor","readonly","iconSize","hollow")}content=()=>g3({part:"container"},g3({part:"empty"}),g3({part:"filled"}));displayValue(t){let{empty:i,filled:e}=this.parts,s=Math.round((t||0)/this.step)*this.step;e.style.width=s/this.max*i.offsetWidth+"px"}update=(t)=>{if(this.readonly)return;let{empty:i}=this.parts,e=t instanceof MouseEvent?t.pageX-i.getBoundingClientRect().x:0,s=Math.min(Math.max(this.min,Math.round(e/i.offsetWidth*this.max/this.step+this.step*0.5)*this.step),this.max);if(t.type==="click")this.value=s;else if(t.type==="mousemove")this.displayValue(s);else this.displayValue(this.value||0)};handleKey=(t)=>{let i=Number(this.value);if(i==null)i=Math.round((this.min+this.max)*0.5*this.step)*this.step;let e=!1;switch(t.key){case"ArrowUp":case"ArrowRight":i+=this.step,e=!0;break;case"ArrowDown":case"ArrowLeft":i-=this.step,e=!0;break}if(this.value=Math.max(Math.min(i,this.max),this.min),e)t.stopPropagation(),t.preventDefault()};connectedCallback(){super.connectedCallback();let{container:t}=this.parts;t.tabIndex=0,t.addEventListener("mousemove",this.update,!0),t.addEventListener("mouseleave",this.update),t.addEventListener("blur",this.update),t.addEventListener("click",this.update),t.addEventListener("keydown",this.handleKey)}_renderedIcon="";render(){if(super.render(),this.style.setProperty("--rating-color",this.color),this.style.setProperty("--rating-empty-color",this.emptyColor),this.style.setProperty("--rating-empty-stroke-width",String(this.emptyStrokeWidth*32)),this.readonly)this.role="image";else this.role="slider";this.ariaLabel=`rating ${this.value} out of ${this.max}`,this.ariaValueMax=String(this.max),this.ariaValueMin=String(this.min),this.ariaValueNow=this.value===null?String(-1):String(this.value);let{empty:t,filled:i}=this.parts,e=this.iconSize+"px";if(t.classList.toggle("hollow",this.hollow),this._renderedIcon!==this.icon){this._renderedIcon=this.icon;for(let s=0;s<this.max;s++)t.append(T[this.icon]({height:e})),i.append(T[this.icon]({height:e}))}this.style.height=e,this.displayValue(this.value)}}var Li=C2.elementCreator({tag:"xin-rating"});/*!
# word (rich text editor)

`<xin-word>` is a simple and easily extensible `document.execCommand` WYSIWYG editor with some conveniences.

```html
<xin-word widgets="minimal">
<h3>Heading</h3>
<p>And some <b>text</b></p>
</xin-word>
```
```css
xin-word {
  background: white;
}

xin-word [part="toolbar"] {
  background: #f8f8f8;
}

xin-word [part="doc"] {
  padding: 20px;
}
```

By default, `<xin-word>` treats its initial contents as its document, but you can also set (and get)
its `value`.

## toolbar

`<xin-word>` elements have a `toolbar` slot (actually a xin-slot because it doesn't use
the shadowDOM).

If you set the `widgets` attribute to `default` or `minimal` you will get a toolbar
for free. Or you can add your own custom widgets.

## helper functions

A number of helper functions are available, including:

- `commandButton(title: string, command: string, iconClass: string)`
- `blockStyle(options: Array<{caption: string, tagType: string}>)`
- `spacer(width = '10px')`
- `elastic(width = '10px')`

These each create a toolbar widget. A `blockStyle`-generated `<select>` element will
automatically have its value changed based on the current selection.

## properties

A `<xin-word>` element also has `selectedText` and `selectedBlocks` properties, allowing
you to easily perform operations on text selections, and a `selectionChange` callback (which
simply passes through document `selectionchange` events, but also passes a reference to
the `<xin-word>` component).
*/var{xinSlot:E2,div:B0,button:k0,span:S2}=I,t4=[{caption:"Title",tagType:"H1"},{caption:"Heading",tagType:"H2"},{caption:"Subheading",tagType:"H3"},{caption:"Minor heading",tagType:"H4"},{caption:"Body",tagType:"P"},{caption:"Code Block",tagType:"PRE"}];function T2(t=t4){return V1({title:"paragraph style",slot:"toolbar",class:"block-style",options:t.map(({caption:i,tagType:e})=>({caption:i,value:`formatBlock,${e}`}))})}function S1(t="10px"){return S2({slot:"toolbar",style:{flex:`0 0 ${t}`,content:" "}})}function qi(t="10px"){return S2({slot:"toolbar",style:{flex:`0 0 ${t}`,content:" "}})}function B(t,i,e){return k0({slot:"toolbar",dataCommand:i,title:t},e)}var e4=()=>[B("left-justify","justifyLeft",T.alignLeft()),B("center","justifyCenter",T.alignCenter()),B("right-justify","justifyRight",T.alignRight()),S1(),B("bullet list","insertUnorderedList",T.listBullet()),B("numbered list","insertOrderedList",T.listNumber()),S1(),B("indent","indent",T.blockIndent()),B("indent","outdent",T.blockOutdent())],A2=()=>[B("bold","bold",T.fontBold()),B("italic","italic",T.fontItalic()),B("underline","underline",T.fontUnderline())],i4=()=>[T2(),S1(),...A2()],s4=()=>[T2(),S1(),...e4(),S1(),...A2()];class L2 extends F{widgets="default";isInitialized=!1;get value(){return this.isInitialized?this.parts.doc.innerHTML:this.savedValue||this.innerHTML}set value(t){if(this.isInitialized)this.parts.doc.innerHTML=t;else this.innerHTML=t}blockElement(t){let{doc:i}=this.parts;while(t.parentElement!==null&&t.parentElement!==i)t=t.parentElement;return t.parentElement===i?t:void 0}get selectedBlocks(){let{doc:t}=this.parts,i=window.getSelection();if(i===null)return[];let e=[];for(let s=0;s<i.rangeCount;s++){let n=i.getRangeAt(s);if(!t.contains(n.commonAncestorContainer))continue;let o=this.blockElement(n.startContainer),a=this.blockElement(n.endContainer);e.push(o);while(o!==a&&o!==null)o=o.nextElementSibling,e.push(o)}return e}get selectedText(){let t=window.getSelection();if(t===null)return"";return this.selectedBlocks.length?t.toString():""}selectionChange=()=>{};handleSelectChange=(t)=>{let i=t.target.closest(g1.tagName);if(i==null)return;this.doCommand(i.value)};handleButtonClick=(t)=>{let i=t.target.closest("button");if(i==null)return;this.doCommand(i.dataset.command)};content=[E2({name:"toolbar",part:"toolbar",onClick:this.handleButtonClick,onChange:this.handleSelectChange}),B0({part:"doc",contenteditable:!0,style:{flex:"1 1 auto",outline:"none"}}),E2({part:"content"})];constructor(){super();this.initAttributes("widgets")}doCommand(t){if(t===void 0)return;let i=t.split(",");console.log("execCommand",i[0],!1,...i.slice(1)),document.execCommand(i[0],!1,...i.slice(1))}updateBlockStyle(){let t=this.parts.toolbar.querySelector(".block-style");if(t===null)return;let i=this.selectedBlocks.map((e)=>e.tagName);i=[...new Set(i)],t.value=i.length===1?`formatBlock,${i[0]}`:""}connectedCallback(){super.connectedCallback();let{doc:t,content:i}=this.parts;if(i.innerHTML!==""&&t.innerHTML==="")t.innerHTML=i.innerHTML,i.innerHTML="";this.isInitialized=!0,i.style.display="none",document.addEventListener("selectionchange",(e)=>{this.updateBlockStyle(),this.selectionChange(e,this)})}render(){let{toolbar:t}=this.parts;if(super.render(),t.children.length===0)switch(this.widgets){case"minimal":t.append(...i4());break;case"default":t.append(...s4());break}}}var $i=L2.elementCreator({tag:"xin-word",styleSpec:{":host":{display:"flex",flexDirection:"column",height:"100%"},':host [part="toolbar"]':{padding:"4px",display:"flex",gap:"0px",flex:"0 0 auto",flexWrap:"wrap"}}});/*!
# segmented select

This is a fairly general-purpose segmented select control.

```html
<blockquote>
Check the console to see the values being set.
</blockquote>

<div class="grid">
<xin-segmented value="yes" choices="yes, no, don't care">
  Should we?
</xin-segmented>

<xin-segmented title="do you like?" choices="yes=Yes:thumbsUp, no=No:thumbsDown"></xin-segmented>

<xin-segmented
  style="--segmented-direction: column; --segmented-align-items: stretch" 
  choices="in a relationship, single" other="it's complicated…" 
  placeholder="oooh… please elaborate"
  value="separated"
>
  Relationship Status
</xin-segmented>

<xin-segmented 
  multiple 
  style="
    --segmented-direction: column; 
    --segmented-align-items: start; 
    --segmented-option-grid-columns: 24px 24px 100px;
    --segmented-input-visibility: visible;
  " 
  choices="star=Star:star, game=Game:game, bug=Bug:bug, camera=Camera:camera"
  value="star,bug"
>
  Pick all that apply
</xin-segmented>
</div>
```
```css
.preview .grid {
  --segmented-option-current-background: var(--brand-color);
  --segmented-option-current-color: var(--brand-text-color);
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
```
```js
function logEvent(event) {
  const { target } = event
  if (target.tagName === 'XIN-SEGMENTED') {
    console.log((target.textContent || target.title).trim(), target.value)
  }
}
preview.addEventListener('change', logEvent, true)
```

## Properties

- `values` is an array of values (only really useful if `multiple` is set to true)

You can set `choices` programmatically to an array of `Choice` objects:

    interface Choice {
      icon?: string | SVGElement
      value: string
      caption: string
    }

## Attributes

- `choices` is a string of comma-delimited options of the form `value=caption:icon`, 
  where caption and icon are optional
- `multiple` allows multiple selection
- `name` allows you to set the name of the `<input>` elements to a specific value, it will default 
  to the component's `instanceId`
- `other` (default '', meaning other is not allowed) is the caption for other options, allowing 
  the user to input their choice. It will be reset to '' if `multiple` is set.
- `placeholder` is the placeholder displayed in the `<input>` field for **other** responses

## Styling

The following CSS variables can be used to control customize the `<xin-segmented>` component.

    --segmented-align-items
    --segmented-direction
    --segmented-option-color
    --segmented-option-current-background
    --segmented-option-current-color
    --segmented-option-font
    --segmented-option-gap
    --segmented-option-grid-columns
    --segmented-option-icon-color
    --segmented-option-padding
    --segmented-options-background
    --segmented-options-border-radius
    --segmented-placeholder-opacity
*/var{div:n4,slot:o4,label:a4,span:l4,input:O2}=I;class F2 extends F{choices="";other="";multiple=!1;name="";placeholder="Please specify…";value=null;get values(){return(this.value||"").split(",").map((t)=>t.trim()).filter((t)=>t!=="")}content=()=>[o4(),n4({part:"options"},O2({part:"custom",hidden:!0}))];static styleSpec={":host":{display:"inline-flex",gap:O.segmentedOptionGap("8px")},":host, :host::part(options)":{flexDirection:O.segmentedDirection("row"),alignItems:O.segmentedAlignItems("center")},":host label":{display:"inline-grid",alignItems:"center",gap:O.segmentedOptionGap("8px"),gridTemplateColumns:O.segmentedOptionGridColumns("0px 24px 1fr"),padding:O.segmentedOptionPadding("4px 12px"),font:O.segmentedOptionFont("16px")},":host label:has(:checked)":{color:O.segmentedOptionCurrentColor("#eee"),background:O.segmentedOptionCurrentBackground("#44a")},":host svg":{height:O.segmentOptionIconSize("16px"),fill:O.segmentedOptionIconColor("currentColor")},":host label.no-icon":{gap:0,gridTemplateColumns:O.segmentedOptionGridColumns("0px 1fr")},':host input[type="radio"], :host input[type="checkbox"]':{visibility:O.segmentedInputVisibility("hidden")},":host::part(options)":{display:"flex",borderRadius:O.segmentedOptionsBorderRadius("8px"),background:O.segmentedOptionsBackground("#fff"),color:O.segmentedOptionColor("#222"),overflow:"hidden"},":host::part(custom)":{padding:O.segmentedOptionPadding("4px 12px"),color:O.segmentedOptionCurrentColor("#eee"),background:O.segmentedOptionCurrentBackground("#44a"),font:O.segmentedOptionFont("16px"),border:"0",outline:"none"},":host::part(custom)::placeholder":{color:O.segmentedOptionCurrentColor("#eee"),opacity:O.segmentedPlaceholderOpacity(0.75)}};constructor(){super();this.initAttributes("direction","choices","other","multiple","name","placeholder")}valueChanged=!1;handleChange=()=>{let{options:t,custom:i}=this.parts;if(this.multiple){let e=[...t.querySelectorAll("input:checked")];this.value=e.map((s)=>s.value).join(",")}else{let e=t.querySelector("input:checked");if(!e)this.value=null;else if(e.value)i.setAttribute("hidden",""),this.value=e.value;else i.removeAttribute("hidden"),i.focus(),i.select(),this.value=i.value}this.valueChanged=!0};handleKey=(t)=>{switch(t.code){case"Space":t.target.click();break}};connectedCallback(){super.connectedCallback();let{options:t}=this.parts;if(this.name==="")this.name=this.instanceId;if(t.addEventListener("change",this.handleChange),t.addEventListener("keydown",this.handleKey),this.other&&this.multiple)console.warn(this,"is set to [other] and [multiple]; [other] will be ignored"),this.other=""}get _choices(){let t=Array.isArray(this.choices)?this.choices:this.choices.split(",").filter((i)=>i.trim()!=="").map((i)=>{let[e,s]=i.split("=").map((c)=>c.trim()),[n,o]=(s||e).split(":").map((c)=>c.trim()),a=o?T[o]():"";return{value:e,icon:a,caption:n}});if(this.other&&!this.multiple){let[i,e]=this.other.split(":");t.push({value:"",caption:i,icon:e})}return t}get isOtherValue(){return Boolean(this.value===""||this.value&&!this._choices.find((t)=>t.value===this.value))}render(){if(super.render(),this.valueChanged){this.valueChanged=!1;return}let{options:t,custom:i}=this.parts;t.textContent="";let e=this.multiple?"checkbox":"radio",{values:s,isOtherValue:n}=this;if(t.append(...this._choices.map((o)=>{return a4({tabindex:0},O2({type:e,name:this.name,value:o.value,checked:s.includes(o.value)||o.value===""&&n,tabIndex:-1}),o.icon||{class:"no-icon"},l4(o.caption))})),this.other&&!this.multiple)i.hidden=!n,i.value=n?this.value:"",i.placeholder=this.placeholder,t.append(i)}}var Wi=F2.elementCreator({tag:"xin-segmented"});/*!
# sidebar

The default layout for iOS / iPadOS apps is to hide the sidebar when displaying content on small
screens, and display the sidebar when space is available (with the user able to explicitly hide
the sidebar if so desired). `<xin-sidenav>` provides this functionality.

`<xin-sidenav>` is used to handle the layout of the documentation tab panel.

`<xin-sidenav>`'s behavior is controlled by two attributes, `minSize` is the point at which it will toggle between showing the navigation
sidebar and content, while `navSize` is the width of the sidebar. You can interrogate its `compact` property to find out if it's
currently in `compact` form.
*/var{slot:H2}=I;class I2 extends F{minSize=800;navSize=200;compact=!1;content=[H2({name:"nav"}),H2({part:"content"})];_contentVisible=!1;get contentVisible(){return this._contentVisible}set contentVisible(t){this._contentVisible=t,this.queueRender()}static styleSpec={":host":{display:"grid",gridTemplateColumns:`${O.navWidth("50%")} ${O.contentWidth("50%")}`,gridTemplateRows:"100%",position:"relative",margin:O.margin("0 0 0 -100%"),transition:O.sideNavTransition("0.25s ease-out")},":host slot":{position:"relative"},":host slot:not([name])":{display:"block"},':host slot[name="nav"]':{display:"block"}};onResize=()=>{let{content:t}=this.parts,i=this.offsetParent;if(i===null)return;if(this.compact=i.offsetWidth<this.minSize,[...this.childNodes].find((s)=>s instanceof Element?s.getAttribute("slot")!=="nav":!0)===void 0){this.style.setProperty("--nav-width","100%"),this.style.setProperty("--content-width","0%");return}if(!this.compact)t.classList.add("-xin-sidenav-visible"),this.style.setProperty("--nav-width",`${this.navSize}px`),this.style.setProperty("--content-width",`calc(100% - ${this.navSize}px)`),this.style.setProperty("--margin","0");else if(t.classList.remove("-xin-sidenav-visible"),this.style.setProperty("--nav-width","50%"),this.style.setProperty("--content-width","50%"),this.contentVisible)this.style.setProperty("--margin","0 0 0 -100%");else this.style.setProperty("--margin","0 -100% 0 0")};observer;connectedCallback(){super.connectedCallback(),this.contentVisible=this.parts.content.childNodes.length===0,globalThis.addEventListener("resize",this.onResize),this.observer=new MutationObserver(this.onResize),this.observer.observe(this,{childList:!0}),this.style.setProperty("--side-nav-transition","0s"),setTimeout(()=>{this.style.removeProperty("--side-nav-transition")},250)}disconnectedCallback(){super.disconnectedCallback(),this.observer.disconnect()}constructor(){super();this.initAttributes("minSize","navSize","compact")}render(){super.render(),this.onResize()}}var Ji=I2.elementCreator({tag:"xin-sidenav"});var{slot:P2}=I;/*!
# size-break

While we wait for enough browsers to implement [container-queries](https://www.w3.org/TR/css-contain-3/),
and in any event when you simply want to do different things at different sizes (e.g. in the project I'm
working on right now, a row of buttons turns into a menu at narrow widths) there's `<xin-sizebreak>`.

Note that the sizes referred to are of the `<xin-sizebreak>`'s `.offsetParent`, and it watches for
the window's `resize` events and its own (via `ResizeObserver`).

```html
<div class="container">
  <xin-sizebreak min-width="300" min-height="150">
    <h1>BIG!</h1>
    <i slot="small">little</i>
  </xin-sizebreak>
  <xin-sizer></xin-sizer>
</div>
```
```css
.preview {
  touch-action: none;
}

.preview xin-sizebreak {
  width: 100%;
  height: 100%;
  background: #fff8;
  border: 1px solid #aaa;
}

.preview xin-sizebreak * {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.preview .container {
  position: relative;
  min-width: 100px;
  min-height: 40px;
  max-height: 100%;
  width: 400px;
  height: 100px;
}

.preview .sizer {
  position: absolute;
  width: 24px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  background: #0002;
  bottom: 0;
  right: 0;
  cursor: nwse-resize;
  opacity: 0.5;
}

.preview .sizer:hover {
  opacity: 1.0;
}
```

`<xin-sizebreak>` supports both `min-width` and/or `min-height`, and you can of course target only one
of the slots if you like. The demo site uses them to hide the [bundlejs](https://bundlejs.com/) badge when
space is tight.
*/class q2 extends F{minWidth=0;minHeight=0;value="normal";content=[P2({part:"normal"}),P2({part:"small",name:"small"})];static styleSpec={":host":{display:"inline-block",position:"relative"}};constructor(){super();this.initAttributes("minWidth","minHeight")}onResize=()=>{let{normal:t,small:i}=this.parts,e=this.offsetParent;if(!(e instanceof HTMLElement))return;else if(e.offsetWidth<this.minWidth||e.offsetHeight<this.minHeight)t.hidden=!0,i.hidden=!1,this.value="small";else t.hidden=!1,i.hidden=!0,this.value="normal"};connectedCallback(){super.connectedCallback(),globalThis.addEventListener("resize",this.onResize)}disconnectedCallback(){super.disconnectedCallback(),globalThis.removeEventListener("resize",this.onResize)}}var Zi=q2.elementCreator({tag:"xin-sizebreak"});/*!
# sizer

This is a super-simple component that you can put in a fixed size element allowing it to be resized
from the bottom-right.

```html
<div>
  <xin-sizer></xin-sizer>
</div>
```
```css
.preview div {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 200px;
  height: 100px;
  background: #ff02;
  border: 1px solid #555;
}
```

<xin-css-var-editor element-selector="xin-sizer"></xin-css-var-editor>
*/class $2 extends F{target=null;static styleSpec={":host":{_resizeIconFill:"#222",display:"block",position:"absolute",bottom:-7,right:-7,padding:14,width:44,height:44,opacity:0.25,transition:"opacity 0.25s ease-out"},":host(:hover)":{opacity:0.5},":host svg":{width:16,height:16,fill:m.resizeIconFill}};content=T.resize();get minSize(){let{minWidth:t,minHeight:i}=getComputedStyle(this.target);return{width:parseFloat(t)||32,height:parseFloat(i)||32}}resizeTarget=(t)=>{let{target:i}=this;if(!i)return;let{offsetWidth:e,offsetHeight:s}=i;i.style.left=i.offsetLeft+"px",i.style.top=i.offsetTop+"px",i.style.bottom="",i.style.right="";let{minSize:n}=this;Q(t,(o,a,l)=>{if(i.style.width=Math.max(n.width,e+o)+"px",i.style.height=Math.max(n.height,s+a)+"px",l.type==="mouseup")return!0},"nwse-resize")};connectedCallback(){if(super.connectedCallback(),!this.target)this.target=this.parentElement;let t={passive:!0};this.addEventListener("mousedown",this.resizeTarget,t),this.addEventListener("touchstart",this.resizeTarget,t)}}var es=$2.elementCreator({tag:"xin-sizer"});/*!
# tag-list

Building a tag-list from standard HTML elements is a bit of a nightmare.

`<xin-tag-list>` allows you to display an editable or read-only tag list (represented either
as a comma-delimited string or an array of strings).

```html
<label>
  <b>Display Only</b>
  <xin-tag-list
    value="this,that,,the-other"
  ></xin-tag-list>
</label>
<xin-tag-list
  class="compact"
  value="this,that,,the-other"
></xin-tag-list>
<br>
<label>
  <b>Editable</b>
  <xin-tag-list
    class="editable-tag-list"
    value="belongs,also belongs,custom"
    editable
    available-tags="belongs,also belongs,not initially chosen"
  ></xin-tag-list>
</label>

<br>
<b>Text-Entry</b>
<xin-tag-list
  value="this,that,the-other,not,enough,space"
  editable
  text-entry
  available-tags="tomasina,dick,,harriet"
></xin-tag-list>
```
```css
.preview .compact {
  --spacing: 8px;
  --font-size: 12px;
  --line-height: 18px;
}
.preview label {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
```
```js
preview.addEventListener('change', (event) => {
  console.log(event.target, event.target.value)
}, true)
```

## Properties

### `value`: string | string[]

A list of tags

### `tags`: string[]

## `popSelectMenu`: () => void

This is the method called when the user clicks the menu button. By default is displays a
pick list of tags, but if you wish to customize the behavior, just replace this method.

A read-only property giving the value as an array.

### `available-tags`: string | string[]

A list of tags that will be displayed in the popup menu by default. The popup menu
will always display custom tags (allowing their removal).

### `editable`: boolean

Allows the tag list to be modified via menu and removing tags.

### `text-entry`: boolean

If `editable`, an input field is provided for entering tags directly.

### `placeholder`: string = 'enter tags'

Placeholder shown on input field.
*/var{div:c4,input:r4,span:h4,button:_2}=I;class m3 extends F{caption="";removeable=!1;removeCallback=()=>{this.remove()};content=()=>[h4({part:"caption"},this.caption),_2(T.x(),{part:"remove",hidden:!this.removeable,onClick:this.removeCallback})];constructor(){super();this.initAttributes("caption","removeable")}}var d4=m3.elementCreator({tag:"xin-tag",styleSpec:{":host":{"--tag-close-button-color":"#000c","--tag-close-button-bg":"#fffc","--tag-close-button-border-radius":"99px","--tag-button-opacity":"0.5","--tag-button-hover-opacity":"0.75","--tag-bg":O.brandColor("blue"),"--tag-text-color":O.brandTextColor("white"),display:"inline-flex",borderRadius:m.spacing50,color:m.tagTextColor,background:m.tagBg,padding:`0 ${m.spacing75} 0 ${m.spacing75}`,height:`calc(${m.lineHeight} + ${m.spacing50})`,lineHeight:`calc(${m.lineHeight} + ${m.spacing50})`},':host > [part="caption"]':{position:"relative",whiteSpace:"nowrap",overflow:"hidden",flex:"1 1 auto",fontSize:O.fontSize("16px"),color:m.tagTextColor,textOverflow:"ellipsis"},':host [part="remove"]':{boxShadow:"none",margin:`0 ${m.spacing_50} 0 ${m.spacing25}`,padding:0,display:"inline-flex",alignItems:"center",alignSelf:"center",justifyContent:"center",height:m.spacing150,width:m.spacing150,"--text-color":m.tagCloseButtonColor,background:m.tagCloseButtonBg,borderRadius:m.tagCloseButtonBorderRadius,opacity:m.tagButtonOpacity},':host [part="remove"]:hover':{background:m.tagCloseButtonBg,opacity:m.tagButtonHoverOpacity}}});class D2 extends F{name="";availableTags=[];value=[];textEntry=!1;editable=!1;placeholder="enter tags";get tags(){return typeof this.value==="string"?this.value.split(",").map((t)=>t.trim()).filter((t)=>t!==""):this.value}constructor(){super();this.initAttributes("name","value","textEntry","availableTags","editable","placeholder")}addTag=(t)=>{if(t.trim()==="")return;let{tags:i}=this;if(!i.includes(t))i.push(t);this.value=i,this.queueRender(!0)};toggleTag=(t)=>{if(this.tags.includes(t))this.value=this.tags.filter((i)=>i!==t);else this.addTag(t);this.queueRender(!0)};enterTag=(t)=>{let{tagInput:i}=this.parts;switch(t.key){case",":{let e=i.value.split(",")[0];this.addTag(e)}break;case"Enter":{let e=i.value.split(",")[0];this.addTag(e)}t.stopPropagation(),t.preventDefault();break;default:}};popSelectMenu=()=>{let{toggleTag:t}=this,{tagMenu:i}=this.parts,e=typeof this.availableTags==="string"?this.availableTags.split(","):this.availableTags,s=this.tags.filter((o)=>!e.includes(o));if(s.length)e.push(null,...s);let n=e.map((o)=>{if(o===""||o===null)return null;else if(typeof o==="object")return{icon:this.tags.includes(o.value)?T.minus():T.plus(),caption:o.caption,action(){t(o.value)}};else return{icon:this.tags.includes(o)?T.minus():T.plus(),caption:o,action(){t(o)}}});k({target:i,width:"auto",menuItems:n})};content=()=>[c4({part:"tagContainer",class:"row",onClick(t){t.stopPropagation(),t.preventDefault()}}),r4({part:"tagInput",class:"elastic",onKeydown:this.enterTag}),_2({title:"add tag",part:"tagMenu",onClick:this.popSelectMenu},T.chevronDown())];removeTag=(t)=>{if(this.editable){let i=t.target.closest(m3.tagName);this.value=this.tags.filter((e)=>e!==i.caption),i.remove(),this.queueRender(!0)}t.stopPropagation(),t.preventDefault()};render(){super.render();let{tagContainer:t,tagMenu:i,tagInput:e}=this.parts;if(e.value="",e.setAttribute("placeholder",this.placeholder),this.editable)i.toggleAttribute("hidden",!1),e.toggleAttribute("hidden",!this.textEntry);else i.toggleAttribute("hidden",!0),e.toggleAttribute("hidden",!0);t.textContent="";let{tags:s}=this;for(let n of s)t.append(d4({caption:n,removeable:this.editable,removeCallback:this.removeTag}))}}var cs=D2.elementCreator({tag:"xin-tag-list",styleSpec:{":host":{"--tag-list-bg":"#f8f8f8","--touch-size":"44px","--spacing":"16px",display:"grid",gridTemplateColumns:"auto",alignItems:"center",background:m.tagListBg,gap:m.spacing25},":host[editable]":{gridTemplateColumns:`auto ${m.touchSize}`},":host[editable][text-entry]":{gridTemplateColumns:`2fr 1fr ${m.touchSize}`},':host [part="tagContainer"]':{display:"flex",content:'" "',alignItems:"center",background:m.inputBg,borderRadius:m.roundedRadius,boxShadow:m.borderShadow,flexWrap:"nowrap",overflow:"auto hidden",gap:m.spacing25,minHeight:`calc(${m.lineHeight} + ${m.spacing})`,padding:m.spacing25},':host [part="tagMenu"]':{width:m.touchSize,height:m.touchSize,lineHeight:m.touchSize,textAlign:"center",padding:0,margin:0},":host [hidden]":{display:"none !important"}}});export{ze as xrControllersText,ye as xrControllers,cs as xinTagList,d4 as xinTag,es as xinSizer,V1 as xinSelect,Wi as xinSegmented,Li as xinRating,wi as xinPasswordStrength,X0 as xinNotification,Re as xinLocalized,me as xinForm,t3 as xinFloat,ge as xinField,Ct as xinCarousel,c2 as updateLocalized,Q as trackDrag,s2 as tabSelector,ct as svgIcon,T3 as svg2DataUrl,Y1 as styleSheet,S1 as spacer,Zi as sizeBreak,Ji as sideNav,K as scriptTag,s4 as richTextWidgets,$i as richText,a1 as removeLastMenu,yi as postNotification,K2 as positionFloat,k as popMenu,_3 as popFloat,B2 as menu,fi as markdownViewer,ei as mapBox,d3 as makeSorter,qe as makeExamplesLive,r2 as localize,Ze as localePicker,h3 as liveExample,R0 as isBreached,Xe as initLocalization,T as icons,W as i18n,Me as gamepadText,m0 as gamepadState,I1 as findHighestZ,n3 as filterPart,de as filterBuilder,qi as elastic,ae as editableRect,s3 as dragAndDrop,Z0 as digest,lt as defineIcon,ee as dataTable,R2 as createSubMenu,Y2 as createMenuItem,Z2 as createMenuAction,B as commandButton,$3 as colorInput,F1 as codeEditor,n1 as bringToFront,Mt as bodymovinPlayer,T2 as blockStyle,ft as b3d,Y3 as availableFilters,Y4 as abTest,D2 as XinTagList,m3 as XinTag,$2 as XinSizer,g1 as XinSelect,C2 as XinRating,w2 as XinPasswordStrength,b1 as XinNotification,u3 as XinLocalized,_1 as XinForm,o1 as XinFloat,l3 as XinField,F3 as XinCarousel,c3 as TabSelector,A3 as SvgIcon,q2 as SizeBreak,I2 as SideNav,L2 as RichText,x2 as MarkdownViewer,m1 as MapBox,L0 as MAPSTYLES,h2 as LocalePicker,r3 as LiveExample,B3 as FilterPart,k3 as FilterBuilder,Z as EditableRect,Q3 as DataTable,p1 as CodeEditor,z1 as BodymovinPlayer,O3 as B3d,M1 as AbTest};

//# debugId=2DE786D39AD61B5D64756E2164756E21
//# sourceMappingURL=index.js.map
