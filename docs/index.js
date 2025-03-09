var ba=Object.defineProperty;var St=(e,t)=>{for(var n in t)ba(e,n,{get:t[n],enumerable:!0,configurable:!0,set:(i)=>t[n]=()=>i})};var Et={};St(Et,{xinValue:()=>Fe,xinProxy:()=>Oe,xinPath:()=>Ta,xin:()=>Je,vars:()=>y,varDefault:()=>D,updates:()=>Da,unobserve:()=>Fa,touch:()=>jt,throttle:()=>Tt,svgElements:()=>Dn,settings:()=>Ea,on:()=>ya,observerShouldBeRemoved:()=>Oa,observe:()=>ka,mathML:()=>Ca,makeComponent:()=>ja,invertLuminance:()=>Ma,initVars:()=>Sa,hotReload:()=>va,getListItem:()=>pn,elements:()=>P,default:()=>Ba,debounce:()=>Aa,darkMode:()=>za,css:()=>wa,boxedProxy:()=>It,boxed:()=>La,blueprintLoader:()=>_a,blueprint:()=>Ha,bindings:()=>ke,bind:()=>xa,StyleSheet:()=>hn,MoreMath:()=>Ia,Component:()=>H,Color:()=>ue,BlueprintLoader:()=>Pa,Blueprint:()=>qa});function O(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var ki=globalThis,Ct={},On={},j=ki.parcelRequire94c2;if(j==null)j=function(e){if(e in Ct)return Ct[e].exports;if(e in On){var t=On[e];delete On[e];var n={id:e,exports:{}};return Ct[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i},j.register=function e(t,n){On[t]=n},ki.parcelRequire94c2=j;var ee=j.register;ee("3x0mh",function(module,exports){O(module.exports,"Blueprint",()=>Blueprint),O(module.exports,"blueprint",()=>blueprint),O(module.exports,"BlueprintLoader",()=>BlueprintLoader),O(module.exports,"blueprintLoader",()=>blueprintLoader);var $aVpVG=j("aVpVG"),$lGBgM=j("lGBgM");class Blueprint extends $aVpVG.Component{async packaged(){if(!this.loaded){let{tag,src}=this,imported=await eval(`import('${src}')`),blueprint=imported[this.property];this.loaded=$lGBgM.makeComponent(tag,blueprint)}return this.loaded}constructor(){super(),this.tag="anon-elt",this.src="",this.property="default",this.initAttributes("tag","src","property")}}let blueprint=Blueprint.elementCreator({tag:"xin-blueprint",styleSpec:{":host":{display:"none"}}});class BlueprintLoader extends $aVpVG.Component{constructor(){super()}async load(){let t=[...this.querySelectorAll(Blueprint.tagName)].filter((n)=>n.src).map((n)=>n.packaged());await Promise.all(t)}connectedCallback(){super.connectedCallback(),this.load()}}let blueprintLoader=BlueprintLoader.elementCreator({tag:"xin-loader",styleSpec:{":host":{display:"none"}}})});ee("aVpVG",function(e,t){O(e.exports,"Component",()=>z);var n=j("2okor"),i=j("19FSF"),o=j("gbrAN"),a=j("9sLMf"),s=j("5JLBr");let l=0;function r(){return`custom-elt${(l++).toString(36)}`}let d=0,p={};function g(c,u){let m=p[c],h=n.css(u).replace(/:host\b/g,c);p[c]=m?m+`
`+h:h}function f(c){if(p[c])document.head.append(a.elements.style({id:c+"-component"},p[c]));delete p[c]}class z extends HTMLElement{static{this.elements=a.elements}static{this._tagName=null}static get tagName(){return this._tagName}static StyleNode(c){return console.warn("StyleNode is deprecated, just assign static styleSpec: XinStyleSheet to the class directly"),a.elements.style(n.css(c))}static elementCreator(c={}){if(this._elementCreator==null){let{tag:u,styleSpec:m}=c,h=c!=null?u:null;if(h==null)if(typeof this.name==="string"&&this.name!==""){if(h=s.camelToKabob(this.name),h.startsWith("-"))h=h.slice(1)}else h=r();if(customElements.get(h)!=null)console.warn(`${h} is already defined`);if(h.match(/\w+(-\w+)+/)==null)console.warn(`${h} is not a legal tag for a custom-element`),h=r();while(customElements.get(h)!==void 0)h=r();if(this._tagName=h,m!==void 0)g(h,m);window.customElements.define(h,this,c),this._elementCreator=a.elements[h]}return this._elementCreator}initAttributes(...c){let u={},m={};new MutationObserver((v)=>{let b=!1;if(v.forEach((w)=>{b=!!(w.attributeName&&c.includes(s.kabobToCamel(w.attributeName)))}),b&&this.queueRender!==void 0)this.queueRender(!1)}).observe(this,{attributes:!0}),c.forEach((v)=>{u[v]=i.deepClone(this[v]);let b=s.camelToKabob(v);Object.defineProperty(this,v,{enumerable:!1,get(){if(typeof u[v]==="boolean")return this.hasAttribute(b);else if(this.hasAttribute(b))return typeof u[v]==="number"?parseFloat(this.getAttribute(b)):this.getAttribute(b);else if(m[v]!==void 0)return m[v];else return u[v]},set(w){if(typeof u[v]==="boolean"){if(w!==this[v]){if(w)this.setAttribute(b,"");else this.removeAttribute(b);this.queueRender()}}else if(typeof u[v]==="number"){if(w!==parseFloat(this[v]))this.setAttribute(b,w),this.queueRender()}else if(typeof w==="object"||`${w}`!==`${this[v]}`){if(w===null||w===void 0||typeof w==="object")this.removeAttribute(b);else this.setAttribute(b,w);this.queueRender(),m[v]=w}}})})}initValue(){let c=Object.getOwnPropertyDescriptor(this,"value");if(c===void 0||c.get!==void 0||c.set!==void 0)return;let u=this.hasAttribute("value")?this.getAttribute("value"):i.deepClone(this.value);delete this.value,Object.defineProperty(this,"value",{enumerable:!1,get(){return u},set(m){if(u!==m)u=m,this.queueRender(!0)}})}get parts(){let c=this.shadowRoot!=null?this.shadowRoot:this;if(this._parts==null)this._parts=new Proxy({},{get(u,m){if(u[m]===void 0){let h=c.querySelector(`[part="${m}"]`);if(h==null)h=c.querySelector(m);if(h==null)throw new Error(`elementRef "${m}" does not exist!`);h.removeAttribute("data-ref"),u[m]=h}return u[m]}});return this._parts}constructor(){super(),this.content=a.elements.slot(),this._changeQueued=!1,this._renderQueued=!1,this._hydrated=!1,d+=1,this.initAttributes("hidden"),this.instanceId=`${this.tagName.toLocaleLowerCase()}-${d}`,this._value=i.deepClone(this.defaultValue)}connectedCallback(){if(f(this.constructor.tagName),this.hydrate(),this.role!=null)this.setAttribute("role",this.role);if(this.onResize!==void 0){if(o.resizeObserver.observe(this),this._onResize==null)this._onResize=this.onResize.bind(this);this.addEventListener("resize",this._onResize)}if(this.value!=null&&this.getAttribute("value")!=null)this._value=this.getAttribute("value");this.queueRender()}disconnectedCallback(){o.resizeObserver.unobserve(this)}queueRender(c=!1){if(!this._hydrated)return;if(!this._changeQueued)this._changeQueued=c;if(!this._renderQueued)this._renderQueued=!0,requestAnimationFrame(()=>{if(this._changeQueued)o.dispatch(this,"change");this._changeQueued=!1,this._renderQueued=!1,this.render()})}hydrate(){if(!this._hydrated){this.initValue();let c=typeof this.content!=="function",u=typeof this.content==="function"?this.content():this.content,{styleSpec:m}=this.constructor,{styleNode:h}=this.constructor;if(m)h=this.constructor.styleNode=a.elements.style(n.css(m)),delete this.constructor.styleNode;if(this.styleNode)console.warn(this,"styleNode is deprecrated, use static styleNode or statc styleSpec instead"),h=this.styleNode;if(h){let v=this.attachShadow({mode:"open"});v.appendChild(h.cloneNode(!0)),o.appendContentToElement(v,u,c)}else if(u!==null){let v=[...this.childNodes];o.appendContentToElement(this,u,c),this.isSlotted=this.querySelector("slot,xin-slot")!==void 0;let b=[...this.querySelectorAll("slot")];if(b.length>0)b.forEach(x.replaceSlot);if(v.length>0){let w={"":this};[...this.querySelectorAll("xin-slot")].forEach((S)=>{w[S.name]=S}),v.forEach((S)=>{let M=w[""],E=S instanceof Element?w[S.slot]:M;(E!==void 0?E:M).append(S)})}}this._hydrated=!0}}render(){}}class x extends z{static replaceSlot(c){let u=document.createElement("xin-slot");if(c.name!=="")u.setAttribute("name",c.name);c.replaceWith(u)}constructor(){super(),this.name="",this.content=null,this.initAttributes("name")}}let C=x.elementCreator({tag:"xin-slot"})});ee("2okor",function(e,t){O(e.exports,"StyleSheet",()=>a),O(e.exports,"css",()=>p),O(e.exports,"processProp",()=>l),O(e.exports,"initVars",()=>g),O(e.exports,"darkMode",()=>f),O(e.exports,"invertLuminance",()=>z),O(e.exports,"vars",()=>x),O(e.exports,"varDefault",()=>C);var n=j("6Jaab"),i=j("9sLMf"),o=j("5JLBr");function a(c,u){let m=i.elements.style(p(u));m.id=c,document.head.append(m)}let s=["animation-iteration-count","flex","flex-base","flex-grow","flex-shrink","opacity","order","tab-size","widows","z-index","zoom"],l=(c,u)=>{if(typeof u==="number"&&!s.includes(c))u=`${u}px`;if(c.startsWith("_"))if(c.startsWith("__"))c="--"+c.substring(2),u=`var(${c}-default, ${u})`;else c="--"+c.substring(1);return{prop:c,value:String(u)}},r=(c,u,m)=>{if(m===void 0)return"";if(m instanceof n.Color)m=m.html;let h=l(u,m);return`${c}  ${h.prop}: ${h.value};`},d=(c,u,m="")=>{let h=o.camelToKabob(c);if(typeof u==="object"&&!(u instanceof n.Color)){let v=Object.keys(u).map((b)=>d(b,u[b],`${m}  `)).join(`
`);return`${m}  ${c} {
${v}
${m}  }`}else return r(m,h,u)},p=(c,u="")=>{return Object.keys(c).map((h)=>{let v=c[h];if(typeof v==="string"){if(h==="@import")return`@import url('${v}');`;throw new Error("top-level string value only allowed for `@import`")}let b=Object.keys(v).map((w)=>d(w,v[w])).join(`
`);return`${u}${h} {
${b}
}`}).join(`

`)},g=(c)=>{console.warn("initVars is deprecated. Just use _ and __ prefixes instead.");let u={};for(let m of Object.keys(c)){let h=c[m],v=o.camelToKabob(m);u[`--${v}`]=typeof h==="number"&&h!==0?String(h)+"px":h}return u},f=(c)=>{console.warn("darkMode is deprecated. Use inverseLuminance instead.");let u={};for(let m of Object.keys(c)){let h=c[m];if(typeof h==="string"&&h.match(/^(#|rgb[a]?\(|hsl[a]?\()/)!=null)h=n.Color.fromCss(h).inverseLuminance.html,u[`--${o.camelToKabob(m)}`]=h}return u},z=(c)=>{let u={};for(let m of Object.keys(c)){let h=c[m];if(h instanceof n.Color)u[m]=h.inverseLuminance;else if(typeof h==="string"&&h.match(/^(#[0-9a-fA-F]{3}|rgba?\(|hsla?\()/))u[m]=n.Color.fromCss(h).inverseLuminance}return u},x=new Proxy({},{get(c,u){if(c[u]==null){u=u.replace(/[A-Z]/g,(S)=>`-${S.toLocaleLowerCase()}`);let[,m,,h,v,b]=u.match(/^([^\d_]*)((_)?(\d+)(\w*))?$/),w=`--${m}`;if(v!=null){let S=h==null?Number(v)/100:-Number(v)/100;switch(b){case"b":{let M=getComputedStyle(document.body).getPropertyValue(w);c[u]=S>0?n.Color.fromCss(M).brighten(S).rgba:n.Color.fromCss(M).darken(-S).rgba}break;case"s":{let M=getComputedStyle(document.body).getPropertyValue(w);c[u]=S>0?n.Color.fromCss(M).saturate(S).rgba:n.Color.fromCss(M).desaturate(-S).rgba}break;case"h":{let M=getComputedStyle(document.body).getPropertyValue(w);c[u]=n.Color.fromCss(M).rotate(S*100).rgba,console.log(n.Color.fromCss(M).hsla,n.Color.fromCss(M).rotate(S).hsla)}break;case"o":{let M=getComputedStyle(document.body).getPropertyValue(w);c[u]=n.Color.fromCss(M).opacity(S).rgba}break;case"":c[u]=`calc(var(${w}) * ${S})`;break;default:throw console.error(b),new Error(`Unrecognized method ${b} for css variable ${w}`)}}else c[u]=`var(${w})`}return c[u]}}),C=new Proxy({},{get(c,u){if(c[u]===void 0){let m=`--${u.replace(/[A-Z]/g,(h)=>`-${h.toLocaleLowerCase()}`)}`;c[u]=(h)=>`var(${m}, ${h})`}return c[u]}})});ee("6Jaab",function(e,t){O(e.exports,"Color",()=>l);var n=j("drWRQ");let i=(r,d,p)=>{return(0.299*r+0.587*d+0.114*p)/255},o=(r)=>("00"+Math.round(Number(r)).toString(16)).slice(-2);class a{constructor(r,d,p){r/=255,d/=255,p/=255;let g=Math.max(r,d,p),f=g-Math.min(r,d,p),z=f!==0?g===r?(d-p)/f:g===d?2+(p-r)/f:4+(r-d)/f:0;this.h=60*z<0?60*z+360:60*z,this.s=f!==0?g<=0.5?f/(2*g-f):f/(2-(2*g-f)):0,this.l=(2*g-f)/2}}let s=globalThis.document!==void 0?globalThis.document.createElement("span"):void 0;class l{static fromCss(r){let d=r;if(s instanceof HTMLSpanElement)s.style.color=r,document.body.appendChild(s),d=getComputedStyle(s).color,s.remove();let[p,g,f,z]=d.match(/[\d.]+/g);return new l(Number(p),Number(g),Number(f),z==null?1:Number(z))}static fromHsl(r,d,p,g=1){return l.fromCss(`hsla(${r.toFixed(0)}, ${(d*100).toFixed(0)}%, ${(p*100).toFixed(0)}%, ${g.toFixed(2)})`)}constructor(r,d,p,g=1){this.r=n.clamp(0,r,255),this.g=n.clamp(0,d,255),this.b=n.clamp(0,p,255),this.a=g!==void 0?n.clamp(0,g,1):g=1}get inverse(){return new l(255-this.r,255-this.g,255-this.b,this.a)}get inverseLuminance(){let{h:r,s:d,l:p}=this._hsl;return l.fromHsl(r,d,1-p,this.a)}get rgb(){let{r,g:d,b:p}=this;return`rgb(${r.toFixed(0)},${d.toFixed(0)},${p.toFixed(0)})`}get rgba(){let{r,g:d,b:p,a:g}=this;return`rgba(${r.toFixed(0)},${d.toFixed(0)},${p.toFixed(0)},${g.toFixed(2)})`}get RGBA(){return[this.r/255,this.g/255,this.b/255,this.a]}get ARGB(){return[this.a,this.r/255,this.g/255,this.b/255]}get _hsl(){if(this.hslCached==null)this.hslCached=new a(this.r,this.g,this.b);return this.hslCached}get hsl(){let{h:r,s:d,l:p}=this._hsl;return`hsl(${r.toFixed(0)}, ${(d*100).toFixed(0)}%, ${(p*100).toFixed(0)}%)`}get hsla(){let{h:r,s:d,l:p}=this._hsl;return`hsla(${r.toFixed(0)}, ${(d*100).toFixed(0)}%, ${(p*100).toFixed(0)}%, ${this.a.toFixed(2)})`}get mono(){let r=this.brightness*255;return new l(r,r,r)}get brightness(){return i(this.r,this.g,this.b)}get html(){return this.toString()}toString(){return this.a===1?"#"+o(this.r)+o(this.g)+o(this.b):"#"+o(this.r)+o(this.g)+o(this.b)+o(Math.floor(255*this.a))}brighten(r){let{h:d,s:p,l:g}=this._hsl,f=n.clamp(0,g+r*(1-g),1);return l.fromHsl(d,p,f,this.a)}darken(r){let{h:d,s:p,l:g}=this._hsl,f=n.clamp(0,g*(1-r),1);return l.fromHsl(d,p,f,this.a)}saturate(r){let{h:d,s:p,l:g}=this._hsl,f=n.clamp(0,p+r*(1-p),1);return l.fromHsl(d,f,g,this.a)}desaturate(r){let{h:d,s:p,l:g}=this._hsl,f=n.clamp(0,p*(1-r),1);return l.fromHsl(d,f,g,this.a)}rotate(r){let{h:d,s:p,l:g}=this._hsl,f=(d+360+r)%360;return l.fromHsl(f,p,g,this.a)}opacity(r){let{h:d,s:p,l:g}=this._hsl;return l.fromHsl(d,p,g,r)}swatch(){let{r,g:d,b:p,a:g}=this;return console.log(`%c      %c ${this.html}, rgba(${r}, ${d}, ${p}, ${g}), ${this.hsla}`,`background-color: rgba(${r}, ${d}, ${p}, ${g})`,"background-color: transparent"),this}blend(r,d){return new l(n.lerp(this.r,r.r,d),n.lerp(this.g,r.g,d),n.lerp(this.b,r.b,d),n.lerp(this.a,r.a,d))}mix(r,d){let p=this._hsl,g=r._hsl;return l.fromHsl(n.lerp(p.h,g.h,d),n.lerp(p.s,g.s,d),n.lerp(p.l,g.l,d),n.lerp(this.a,r.a,d))}}});ee("drWRQ",function(e,t){O(e.exports,"clamp",()=>o),O(e.exports,"lerp",()=>a),O(e.exports,"MoreMath",()=>s);let n=180/Math.PI,i=Math.PI/180;function o(l,r,d){return r<l?l:r>d?d:r}function a(l,r,d){return d=o(0,d,1),d*(r-l)+l}let s={clamp:o,lerp:a}});ee("9sLMf",function(e,t){O(e.exports,"elements",()=>g),O(e.exports,"svgElements",()=>f),O(e.exports,"mathML",()=>z);var n=j("kCu8Y"),i=j("buKmK"),o=j("5JLBr"),a=j("2okor");let s="http://www.w3.org/1998/Math/MathML",l="http://www.w3.org/2000/svg",r={},d=(x,...C)=>{if(r[x]===void 0){let[m,h]=x.split("|");if(h===void 0)r[x]=globalThis.document.createElement(m);else r[x]=globalThis.document.createElementNS(h,m)}let c=r[x].cloneNode(),u={};for(let m of C)if(m instanceof Element||m instanceof DocumentFragment||typeof m==="string"||typeof m==="number")if(c instanceof HTMLTemplateElement)c.content.append(m);else c.append(m);else Object.assign(u,m);for(let m of Object.keys(u)){let h=u[m];if(m==="apply")h(c);else if(m==="style")if(typeof h==="object")for(let v of Object.keys(h)){let b=a.processProp(o.camelToKabob(v),h[v]);if(b.prop.startsWith("--"))c.style.setProperty(b.prop,b.value);else c.style[v]=b.value}else c.setAttribute("style",h);else if(m.match(/^on[A-Z]/)!=null){let v=m.substring(2).toLowerCase();n.on(c,v,h)}else if(m==="bind")if((typeof h.binding==="string"?i.bindings[h.binding]:h.binding)!==void 0&&h.value!==void 0)n.bind(c,h.value,h.binding instanceof Function?{toDOM:h.binding}:h.binding);else throw new Error("bad binding");else if(m.match(/^bind[A-Z]/)!=null){let v=m.substring(4,5).toLowerCase()+m.substring(5),b=i.bindings[v];if(b!==void 0)n.bind(c,h,b);else throw new Error(`${m} is not allowed, bindings.${v} is not defined`)}else if(c[m]!==void 0){let{MathMLElement:v}=globalThis;if(c instanceof SVGElement||v!==void 0&&c instanceof v)c.setAttribute(m,h);else c[m]=h}else{let v=o.camelToKabob(m);if(v==="class")h.split(" ").forEach((b)=>{c.classList.add(b)});else if(c[v]!==void 0)c[v]=h;else if(typeof h==="boolean")h?c.setAttribute(v,""):c.removeAttribute(v);else c.setAttribute(v,h)}}return c},p=(...x)=>{let C=globalThis.document.createDocumentFragment();for(let c of x)C.append(c);return C},g=new Proxy({fragment:p},{get(x,C){if(C=C.replace(/[A-Z]/g,(c)=>`-${c.toLocaleLowerCase()}`),x[C]===void 0)x[C]=(...c)=>d(C,...c);return x[C]},set(){throw new Error("You may not add new properties to elements")}}),f=new Proxy({fragment:p},{get(x,C){if(x[C]===void 0)x[C]=(...c)=>d(`${C}|${l}`,...c);return x[C]},set(){throw new Error("You may not add new properties to elements")}}),z=new Proxy({fragment:p},{get(x,C){if(x[C]===void 0)x[C]=(...c)=>d(`${C}|${s}`,...c);return x[C]},set(){throw new Error("You may not add new properties to elements")}})});ee("kCu8Y",function(e,t){O(e.exports,"bind",()=>d),O(e.exports,"on",()=>f);var n=j("eppu5"),i=j("5lOGz"),o=j("5hOlm");let{document:a,MutationObserver:s}=globalThis,l=(z,x)=>{let C=o.elementToBindings.get(z);if(C==null)return;for(let c of C){let{binding:u,options:m}=c,{path:h}=c,{toDOM:v}=u;if(v!=null){if(h.startsWith("^")){let b=o.getListItem(z);if(b!=null&&b[o.XIN_PATH]!=null)h=c.path=`${b[o.XIN_PATH]}${h.substring(1)}`;else throw console.error(`Cannot resolve relative binding ${h}`,z,"is not part of a list"),new Error(`Cannot resolve relative binding ${h}`)}if(x==null||h.startsWith(x))v(z,n.xin[h],m)}}};if(s!=null)new s((x)=>{x.forEach((C)=>{[...C.addedNodes].forEach((c)=>{if(c instanceof Element)[...c.querySelectorAll(o.BOUND_SELECTOR)].forEach((u)=>l(u))})})}).observe(a.body,{subtree:!0,childList:!0});n.observe(()=>!0,(z)=>{let x=a.querySelectorAll(o.BOUND_SELECTOR);for(let C of x)l(C,z)});let r=(z)=>{let x=z.target.closest(o.BOUND_SELECTOR);while(x!=null){let C=o.elementToBindings.get(x);for(let c of C){let{binding:u,path:m}=c,{fromDOM:h}=u;if(h!=null){let v;try{v=h(x,c.options)}catch(b){throw console.error("Cannot get value from",x,"via",c),new Error("Cannot obtain value fromDOM")}if(v!=null){let b=n.xin[m];if(b==null)n.xin[m]=v;else{let w=b[o.XIN_PATH]!=null?b[o.XIN_VALUE]:b,S=v[o.XIN_PATH]!=null?v[o.XIN_VALUE]:v;if(w!==S)n.xin[m]=S}}}}x=x.parentElement.closest(o.BOUND_SELECTOR)}};if(globalThis.document!=null)a.body.addEventListener("change",r,!0),a.body.addEventListener("input",r,!0);function d(z,x,C,c){if(z instanceof DocumentFragment)throw new Error("bind cannot bind to a DocumentFragment");let u;if(typeof x==="object"&&x[o.XIN_PATH]===void 0&&c===void 0){let{value:v}=x;u=typeof v==="string"?v:v[o.XIN_PATH],c=x,delete c.value}else u=typeof x==="string"?x:x[o.XIN_PATH];if(u==null)throw new Error("bind requires a path or object with xin Proxy");let{toDOM:m}=C;z.classList?.add(o.BOUND_CLASS);let h=o.elementToBindings.get(z);if(h==null)h=[],o.elementToBindings.set(z,h);if(h.push({path:u,binding:C,options:c}),m!=null&&!u.startsWith("^"))i.touch(u);return z}let p=new Set,g=(z)=>{let x=z?.target.closest(o.EVENT_SELECTOR),C=!1,c=new Proxy(z,{get(u,m){if(m==="stopPropagation")return()=>{z.stopPropagation(),C=!0};else{let h=u[m];return typeof h==="function"?h.bind(u):h}}});while(!C&&x!=null){let m=o.elementToHandlers.get(x)[z.type]||[];for(let h of m){if(typeof h==="function")h(c);else{let v=n.xin[h];if(typeof v==="function")v(c);else throw new Error(`no event handler found at path ${h}`)}if(C)continue}x=x.parentElement!=null?x.parentElement.closest(o.EVENT_SELECTOR):null}},f=(z,x,C)=>{let c=o.elementToHandlers.get(z);if(z.classList.add(o.EVENT_CLASS),c==null)c={},o.elementToHandlers.set(z,c);if(!c[x])c[x]=[];if(!c[x].includes(C))c[x].push(C);if(!p.has(x))p.add(x),a.body.addEventListener(x,g,!0)}});ee("eppu5",function(e,t){O(e.exports,"xin",()=>c),O(e.exports,"observe",()=>C),O(e.exports,"boxed",()=>u),O(e.exports,"updates",()=>j("5lOGz").updates),O(e.exports,"touch",()=>j("5lOGz").touch),O(e.exports,"unobserve",()=>j("5lOGz").unobserve),O(e.exports,"observerShouldBeRemoved",()=>j("5lOGz").observerShouldBeRemoved);var n=j("hv4Z8"),i=j("5lOGz"),o=j("aMI8M"),a=j("5hOlm");let s=["sort","splice","copyWithin","fill","pop","push","reverse","shift","unshift"],l={},r=!0,d=/^\.?([^.[\](),])+(\.[^.[\](),]+|\[\d+\]|\[[^=[\](),]*=[^[\]()]+\])*$/,p=(m)=>d.test(m),g=(m="",h="")=>{if(m==="")return h;else if(h.match(/^\d+$/)!==null||h.includes("="))return`${m}[${h}]`;else return`${m}.${h}`},f={string(m){return new String(m)},boolean(m){return new Boolean(m)},bigint(m){return m},symbol(m){return m},number(m){return new Number(m)}};function z(m,h){let v=typeof m;if(m===void 0||v==="object"||v==="function")return m;else return new Proxy(f[typeof m](m),x(h,!0))}let x=(m,h)=>({get(v,b){switch(b){case a.XIN_PATH:return m;case a.XIN_VALUE:return a.xinValue(v)}if(typeof b==="symbol")return v[b];let w=b,S=w.match(/^([^.[]+)\.(.+)$/)??w.match(/^([^\]]+)(\[.+)/)??w.match(/^(\[[^\]]+\])\.(.+)$/)??w.match(/^(\[[^\]]+\])\[(.+)$/);if(S!==null){let[,M,E]=S,B=g(m,M),N=o.getByPath(v,M);return N!==null&&typeof N==="object"?new Proxy(N,x(B,h))[E]:N}if(w.startsWith("[")&&w.endsWith("]"))w=w.substring(1,w.length-1);if(!Array.isArray(v)&&v[w]!==void 0||Array.isArray(v)&&w.includes("=")){let M;if(w.includes("=")){let[E,B]=w.split("=");M=v.find((N)=>`${o.getByPath(N,E)}`===B)}else M=v[w];if(M!==null&&typeof M==="object"){let E=g(m,w);return new Proxy(M,x(E,h))}else if(typeof M==="function")return M.bind(v);else return h?z(M,g(m,w)):M}else if(Array.isArray(v)){let M=v[w];return typeof M==="function"?(...E)=>{let B=Array.prototype[w].apply(v,E);if(s.includes(w))i.touch(m);return B}:typeof M==="object"?new Proxy(M,x(g(m,w),h)):h?z(M,g(m,w)):M}else return h?z(v[w],g(m,w)):v[w]},set(v,b,w){w=a.xinValue(w);let S=b!==a.XIN_VALUE?g(m,b):m;if(r&&!p(S))throw new Error(`setting invalid path ${S}`);if(a.xinValue(c[S])!==w&&o.setByPath(l,S,w))i.touch(S);return!0}}),C=(m,h)=>{let v=typeof h==="function"?h:c[h];if(typeof v!=="function")throw new Error(`observe expects a function or path to a function, ${h} is neither`);return i.observe(m,v)},c=new Proxy(l,x("",!1)),u=new Proxy(l,x("",!0))});ee("hv4Z8",function(e,t){O(e.exports,"settings",()=>n);let n={debug:!1,perf:!1}});ee("5lOGz",function(e,t){O(e.exports,"observerShouldBeRemoved",()=>o),O(e.exports,"updates",()=>g),O(e.exports,"unobserve",()=>C),O(e.exports,"touch",()=>z),O(e.exports,"observe",()=>x);var n=j("5hOlm"),i=j("hv4Z8");let o=Symbol("observer should be removed"),a=[],s=[],l=!1,r,d;class p{constructor(c,u){let m=typeof u==="string"?`"${u}"`:`function ${u.name}`,h;if(typeof c==="string")this.test=(v)=>typeof v==="string"&&v!==""&&(c.startsWith(v)||v.startsWith(c)),h=`test = "${c}"`;else if(c instanceof RegExp)this.test=c.test.bind(c),h=`test = "${c.toString()}"`;else if(c instanceof Function)this.test=c,h=`test = function ${c.name}`;else throw new Error("expect listener test to be a string, RegExp, or test function");if(this.description=`${h}, ${m}`,typeof u==="function")this.callback=u;else throw new Error("expect callback to be a path or function");a.push(this)}}let g=async()=>{if(r===void 0)return;await r},f=()=>{if(i.settings.perf)console.time("xin async update");let c=[...s];for(let u of c)a.filter((m)=>{let h;try{h=m.test(u)}catch(v){throw new Error(`Listener ${m.description} threw "${v}" at "${u}"`)}if(h===o)return C(m),!1;return h}).forEach((m)=>{let h;try{h=m.callback(u)}catch(v){console.error(`Listener ${m.description} threw "${v}" handling "${u}"`)}if(h===o)C(m)});if(s.splice(0),l=!1,typeof d==="function")d();if(i.settings.perf)console.timeEnd("xin async update")},z=(c)=>{let u=typeof c==="string"?c:n.xinPath(c);if(u===void 0)throw console.error("touch was called on an invalid target",c),new Error("touch was called on an invalid target");if(l===!1)r=new Promise((m)=>{d=m}),l=setTimeout(f);if(s.find((m)=>u.startsWith(m))==null)s.push(u)},x=(c,u)=>{return new p(c,u)},C=(c)=>{let u=a.indexOf(c);if(u>-1)a.splice(u,1);else throw new Error("unobserve failed, listener not found")}});ee("5hOlm",function(e,t){O(e.exports,"BOUND_CLASS",()=>i),O(e.exports,"BOUND_SELECTOR",()=>o),O(e.exports,"EVENT_CLASS",()=>a),O(e.exports,"EVENT_SELECTOR",()=>s),O(e.exports,"XIN_PATH",()=>l),O(e.exports,"XIN_VALUE",()=>r),O(e.exports,"xinPath",()=>d),O(e.exports,"xinValue",()=>p),O(e.exports,"elementToHandlers",()=>g),O(e.exports,"elementToBindings",()=>f),O(e.exports,"cloneWithBindings",()=>x),O(e.exports,"elementToItem",()=>C),O(e.exports,"getListItem",()=>c);var n=j("19FSF");let i="-xin-data",o=`.${i}`,a="-xin-event",s=`.${a}`,l="xinPath",r="xinValue",d=(u)=>{return u[l]};function p(u){return typeof u==="object"&&u!==null?u[r]||u:u}let g=new WeakMap,f=new WeakMap,z=(u)=>{return{eventBindings:g.get(u),dataBindings:f.get(u)}},x=(u)=>{let m=u.cloneNode();if(m instanceof Element){let h=f.get(u),v=g.get(u);if(h!=null)f.set(m,n.deepClone(h));if(v!=null)g.set(m,n.deepClone(v))}for(let h of u instanceof HTMLTemplateElement?u.content.childNodes:u.childNodes)if(h instanceof Element||h instanceof DocumentFragment)m.appendChild(x(h));else m.appendChild(h.cloneNode());return m},C=new WeakMap,c=(u)=>{let m=document.body.parentElement;while(u.parentElement!=null&&u.parentElement!==m){let h=C.get(u);if(h!=null)return h;u=u.parentElement}return!1}});ee("19FSF",function(e,t){O(e.exports,"deepClone",()=>n);function n(i){if(i==null||typeof i!=="object")return i;if(Array.isArray(i))return i.map(n);let o={};for(let a in i){let s=i[a];if(i!=null&&typeof i==="object")o[a]=n(s);else o[a]=s}return o}});ee("aMI8M",function(e,t){O(e.exports,"getByPath",()=>m),O(e.exports,"setByPath",()=>h);var n=j("5lDHe");let i=()=>new Date(parseInt("1000000000",36)+Date.now()).valueOf().toString(36).slice(1),o=0,a=()=>(parseInt("10000",36)+ ++o).toString(36).slice(-5),s=()=>i()+a(),l={},r={};function d(b){if(b==="")return[];if(Array.isArray(b))return b;else{let w=[];while(b.length>0){let S=b.search(/\[[^\]]+\]/);if(S===-1){w.push(b.split("."));break}else{let M=b.slice(0,S);if(b=b.slice(S),M!=="")w.push(M.split("."));if(S=b.indexOf("]")+1,w.push(b.slice(1,S-1)),b.slice(S,S+1)===".")S+=1;b=b.slice(S)}}return w}}let p=new WeakMap;function g(b,w){if(p.get(b)===void 0)p.set(b,{});if(p.get(b)[w]===void 0)p.get(b)[w]={};let S=p.get(b)[w];if(w==="_auto_")b.forEach((M,E)=>{if(M._auto_===void 0)M._auto_=s();S[M._auto_+""]=E});else b.forEach((M,E)=>{S[m(M,w)+""]=E});return S}function f(b,w){if(p.get(b)===void 0||p.get(b)[w]===void 0)return g(b,w);else return p.get(b)[w]}function z(b,w,S){S=S+"";let M=f(b,w)[S];if(M===void 0||m(b[M],w)+""!==S)M=g(b,w)[S];return M}function x(b,w,S){if(b[w]===void 0&&S!==void 0)b[w]=S;return b[w]}function C(b,w,S,M){let E=w!==""?z(b,w,S):S;if(M===l)return b.splice(E,1),p.delete(b),Symbol("deleted");else if(M===r){if(w===""&&b[E]===void 0)b[E]={}}else if(M!==void 0)if(E!==void 0)b[E]=M;else if(w!==""&&m(M,w)+""===S+"")b.push(M),E=b.length-1;else throw new Error(`byIdPath insert failed at [${w}=${S}]`);return b[E]}function c(b){if(!Array.isArray(b))throw n.makeError("setByPath failed: expected array, found",b)}function u(b){if(b==null||!(b instanceof Object))throw n.makeError("setByPath failed: expected Object, found",b)}function m(b,w){let S=d(w),M=b,E,B,N,K;for(E=0,B=S.length;M!==void 0&&E<B;E++){let V=S[E];if(Array.isArray(V))for(N=0,K=V.length;M!==void 0&&N<K;N++){let X=V[N];M=M[X]}else if(M.length===0){if(M=M[V.slice(1)],V[0]!=="=")return}else if(V.includes("=")){let[X,...Q]=V.split("=");M=C(M,X,Q.join("="))}else N=parseInt(V,10),M=M[N]}return M}function h(b,w,S){let M=b,E=d(w);while(M!=null&&E.length>0){let B=E.shift();if(typeof B==="string"){let N=B.indexOf("=");if(N>-1){if(N===0)u(M);else c(M);let K=B.slice(0,N),V=B.slice(N+1);if(M=C(M,K,V,E.length>0?r:S),E.length===0)return!0}else{c(M);let K=parseInt(B,10);if(E.length>0)M=M[K];else{if(S!==l){if(M[K]===S)return!1;M[K]=S}else M.splice(K,1);return!0}}}else if(Array.isArray(B)&&B.length>0){u(M);while(B.length>0){let N=B.shift();if(B.length>0||E.length>0)M=x(M,N,B.length>0?{}:[]);else{if(S!==l){if(M[N]===S)return!1;M[N]=S}else{if(!Object.prototype.hasOwnProperty.call(M,N))return!1;delete M[N]}return!0}}}else throw new Error(`setByPath failed, bad path ${w}`)}throw new Error(`setByPath(${b}, ${w}, ${S}) failed`)}function v(b,w){if(m(b,w)!==null)h(b,w,l)}});ee("5lDHe",function(e,t){O(e.exports,"makeError",()=>i);let n=(o)=>{try{return JSON.stringify(o)}catch(a){return"{has circular references}"}},i=(...o)=>new Error(o.map(n).join(" "))});ee("buKmK",function(e,t){O(e.exports,"bindings",()=>o);var n=j("2dgdI"),i=j("gbrAN");let o={value:{toDOM:i.setValue,fromDOM(a){return i.getValue(a)}},set:{toDOM:i.setValue},text:{toDOM(a,s){a.textContent=s}},enabled:{toDOM(a,s){a.disabled=!s}},disabled:{toDOM(a,s){a.disabled=Boolean(s)}},style:{toDOM(a,s){if(typeof s==="object")for(let l of Object.keys(s))a.style[l]=s[l];else if(typeof s==="string")a.setAttribute("style",s);else throw new Error("style binding expects either a string or object")}},list:{toDOM(a,s,l){n.getListBinding(a,l).update(s)}}}});ee("2dgdI",function(e,t){O(e.exports,"getListBinding",()=>g);var n=j("hv4Z8"),i=j("gbrAN"),o=j("9nL7f"),a=j("eppu5"),s=j("5hOlm");let l=Symbol("list-binding"),r=16;function d(f,z){let x=[...f.querySelectorAll(s.BOUND_SELECTOR)];if(f.matches(s.BOUND_SELECTOR))x.unshift(f);for(let C of x){let c=s.elementToBindings.get(C);for(let u of c){if(u.path.startsWith("^"))u.path=`${z}${u.path.substring(1)}`;if(u.binding.toDOM!=null)u.binding.toDOM(C,a.xin[u.path])}}}class p{constructor(f,z={}){if(this._array=[],this.boundElement=f,this.itemToElement=new WeakMap,f.children.length!==1)throw new Error("ListBinding expects an element with exactly one child element");if(f.children[0]instanceof HTMLTemplateElement){let x=f.children[0];if(x.content.children.length!==1)throw new Error("ListBinding expects a template with exactly one child element");this.template=s.cloneWithBindings(x.content.children[0])}else this.template=f.children[0],this.template.remove();if(this.listTop=document.createElement("div"),this.listBottom=document.createElement("div"),this.boundElement.append(this.listTop),this.boundElement.append(this.listBottom),this.options=z,z.virtual!=null)i.resizeObserver.observe(this.boundElement),this._update=o.throttle(()=>{this.update(this._array,!0)},r),this.boundElement.addEventListener("scroll",this._update),this.boundElement.addEventListener("resize",this._update)}visibleSlice(){let{virtual:f,hiddenProp:z,visibleProp:x}=this.options,C=this._array;if(z!==void 0)C=C.filter((v)=>v[z]!==!0);if(x!==void 0)C=C.filter((v)=>v[x]===!0);let c=0,u=C.length-1,m=0,h=0;if(f!=null&&this.boundElement instanceof HTMLElement){let v=this.boundElement.offsetWidth,b=this.boundElement.offsetHeight,w=f.width!=null?Math.max(1,Math.floor(v/f.width)):1,S=Math.ceil(b/f.height)+1,M=Math.ceil(C.length/w),E=w*S,B=Math.floor(this.boundElement.scrollTop/f.height);if(B>M-S+1)B=Math.max(0,M-S+1);c=B*w,u=c+E-1,m=B*f.height,h=Math.max(M*f.height-b-m,0)}return{items:C,firstItem:c,lastItem:u,topBuffer:m,bottomBuffer:h}}update(f,z){if(f==null)f=[];this._array=f;let{hiddenProp:x,visibleProp:C}=this.options,c=s.xinPath(f),u=this.visibleSlice();this.boundElement.classList.toggle("-xin-empty-list",u.items.length===0);let m=this._previousSlice,{firstItem:h,lastItem:v,topBuffer:b,bottomBuffer:w}=u;if(x===void 0&&C===void 0&&z===!0&&m!=null&&h===m.firstItem&&v===m.lastItem)return;this._previousSlice=u;let S=0,M=0,E=0;for(let V of[...this.boundElement.children]){if(V===this.listTop||V===this.listBottom)continue;let X=s.elementToItem.get(V);if(X==null)V.remove();else{let Q=u.items.indexOf(X);if(Q<h||Q>v)V.remove(),this.itemToElement.delete(X),s.elementToItem.delete(V),S++}}this.listTop.style.height=String(b)+"px",this.listBottom.style.height=String(w)+"px";let B=[],{idPath:N}=this.options;for(let V=h;V<=v;V++){let X=u.items[V];if(X===void 0)continue;let Q=this.itemToElement.get(s.xinValue(X));if(Q==null){if(E++,Q=s.cloneWithBindings(this.template),typeof X==="object")this.itemToElement.set(s.xinValue(X),Q),s.elementToItem.set(Q,s.xinValue(X));if(this.boundElement.insertBefore(Q,this.listBottom),N!=null){let Le=X[N],zt=`${c}[${N}=${Le}]`;d(Q,zt)}else{let Le=`${c}[${V}]`;d(Q,Le)}}B.push(Q)}let K=null;for(let V of B){if(V.previousElementSibling!==K)if(M++,K?.nextElementSibling!=null)this.boundElement.insertBefore(V,K.nextElementSibling);else this.boundElement.insertBefore(V,this.listBottom);K=V}if(n.settings.perf)console.log(c,"updated",{removed:S,created:E,moved:M})}}let g=(f,z)=>{let x=f[l];if(x===void 0)x=new p(f,z),f[l]=x;return x}});ee("gbrAN",function(e,t){O(e.exports,"dispatch",()=>i),O(e.exports,"setValue",()=>a),O(e.exports,"getValue",()=>s),O(e.exports,"resizeObserver",()=>r),O(e.exports,"appendContentToElement",()=>d);var n=j("5hOlm");let i=(p,g)=>{let f=new Event(g);p.dispatchEvent(f)},o=(p)=>{if(p instanceof HTMLInputElement)return p.type;else if(p instanceof HTMLSelectElement&&p.hasAttribute("multiple"))return"multi-select";else return"other"},a=(p,g)=>{switch(o(p)){case"radio":p.checked=p.value===g;break;case"checkbox":p.checked=!!g;break;case"date":p.valueAsDate=new Date(g);break;case"multi-select":for(let f of[...p.querySelectorAll("option")])f.selected=g[f.value];break;default:p.value=g}},s=(p)=>{switch(o(p)){case"radio":{let g=p.parentElement?.querySelector(`[name="${p.name}"]:checked`);return g!=null?g.value:null}case"checkbox":return p.checked;case"date":return p.valueAsDate?.toISOString();case"multi-select":return[...p.querySelectorAll("option")].reduce((g,f)=>{return g[f.value]=f.selected,g},{});default:return p.value}},{ResizeObserver:l}=globalThis,r=l!=null?new l((p)=>{for(let g of p){let f=g.target;i(f,"resize")}}):{observe(){},unobserve(){}},d=(p,g,f=!0)=>{if(p!=null&&g!=null)if(typeof g==="string")p.textContent=g;else if(Array.isArray(g))g.forEach((z)=>{p.append(z instanceof Node&&f?n.cloneWithBindings(z):z)});else if(g instanceof Node)p.append(f?n.cloneWithBindings(g):g);else throw new Error("expect text content or document node")}});ee("9nL7f",function(e,t){O(e.exports,"debounce",()=>n),O(e.exports,"throttle",()=>i);let n=(o,a=250)=>{let s;return(...l)=>{if(s!==void 0)clearTimeout(s);s=setTimeout(()=>{o(...l)},a)}},i=(o,a=250)=>{let s,l=Date.now()-a,r=!1;return(...d)=>{if(clearTimeout(s),s=setTimeout(async()=>{o(...d),l=Date.now()},a),!r&&Date.now()-l>=a){r=!0;try{o(...d),l=Date.now()}finally{r=!1}}}}});ee("5JLBr",function(e,t){O(e.exports,"camelToKabob",()=>n),O(e.exports,"kabobToCamel",()=>i);function n(o){return o.replace(/[A-Z]/g,(a)=>{return`-${a.toLocaleLowerCase()}`})}function i(o){return o.replace(/-([a-z])/g,(a,s)=>{return s.toLocaleUpperCase()})}});ee("lGBgM",function(e,t){O(e.exports,"makeComponent",()=>r);var n=j("6Jaab"),i=j("aVpVG"),o=j("2okor"),a=j("9sLMf"),s=j("aNHSH");let l={};function r(d,p){let{type:g,styleSpec:f}=p(d,{Color:n.Color,Component:i.Component,elements:a.elements,svgElements:a.svgElements,mathML:a.mathML,varDefault:o.varDefault,vars:o.vars,xinProxy:s.xinProxy}),z={type:g,creator:g.elementCreator({tag:d,styleSpec:f})};return l[d]=z,z}});ee("aNHSH",function(e,t){O(e.exports,"boxedProxy",()=>i),O(e.exports,"xinProxy",()=>a);var n=j("eppu5");function i(s){return Object.assign(n.boxed,s),n.boxed}let o=!1;function a(s,l=!1){if(l){if(!o)console.warn("xinProxy(..., true) is deprecated; use boxedProxy(...) instead"),o=!0;return i(s)}return Object.keys(s).forEach((r)=>{n.xin[r]=s[r]}),n.xin}});var z0=j("kCu8Y"),S0=j("buKmK"),C0=j("2okor"),T0=j("6Jaab"),j0=j("aVpVG"),I0=j("9sLMf"),Xe=j("eppu5"),Fi=j("5hOlm"),Oi=j("9nL7f"),va=(e=()=>!0)=>{let t=localStorage.getItem("xin-state");if(t!=null){let i=JSON.parse(t);for(let o of Object.keys(i).filter(e))if(Xe.xin[o]!==void 0)Object.assign(Xe.xin[o],i[o]);else Xe.xin[o]=i[o]}let n=Oi.debounce(()=>{let i={},o=Fi.xinValue(Xe.xin);for(let a of Object.keys(o).filter(e))i[a]=o[a];localStorage.setItem("xin-state",JSON.stringify(i)),console.log("xin state saved to localStorage")},500);Xe.observe(e,n)},Fi=j("5hOlm"),E0=j("lGBgM"),A0=j("drWRQ"),L0=j("hv4Z8"),Oi=j("9nL7f"),Xe=j("eppu5"),k0=j("5lOGz");j("3x0mh");var F0={},O0=j("aNHSH"),xa=j("kCu8Y").bind,ya=j("kCu8Y").on,ke=j("buKmK").bindings,wa=j("2okor").css,Ma=j("2okor").invertLuminance,za=j("2okor").darkMode,Sa=j("2okor").initVars,y=j("2okor").vars,D=j("2okor").varDefault,hn=j("2okor").StyleSheet,ue=j("6Jaab").Color,H=j("aVpVG").Component,P=j("9sLMf").elements,Dn=j("9sLMf").svgElements,Ca=j("9sLMf").mathML,pn=j("5hOlm").getListItem,Ta=j("5hOlm").xinPath,Fe=j("5hOlm").xinValue,ja=j("lGBgM").makeComponent,Ia=j("drWRQ").MoreMath,Ea=j("hv4Z8").settings,Tt=j("9nL7f").throttle,Aa=j("9nL7f").debounce,Je=j("eppu5").xin,La=j("eppu5").boxed,ka=j("eppu5").observe,Fa=j("5lOGz").unobserve,jt=j("5lOGz").touch,Oa=j("5lOGz").observerShouldBeRemoved,Da=j("5lOGz").updates,Oe=j("aNHSH").xinProxy,It=j("aNHSH").boxedProxy,qa=j("3x0mh").Blueprint,Ha=j("3x0mh").blueprint,Pa=j("3x0mh").BlueprintLoader,_a=j("3x0mh").blueprintLoader,Ba=j("3x0mh")["*"];var Na=Object.defineProperty,Va=(e,t)=>{for(var n in t)Na(e,n,{get:t[n],enumerable:!0,configurable:!0,set:(i)=>t[n]=()=>i})};function q(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var r1=globalThis,At={},qn={},I=r1.parcelRequire94c2;if(I==null)I=function(e){if(e in At)return At[e].exports;if(e in qn){var t=qn[e];delete qn[e];var n={id:e,exports:{}};return At[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i},I.register=function e(t,n){qn[t]=n},r1.parcelRequire94c2=I;var ne=I.register;ne("3x0mh",function(module,exports){q(module.exports,"Blueprint",()=>Blueprint),q(module.exports,"blueprint",()=>blueprint),q(module.exports,"BlueprintLoader",()=>BlueprintLoader),q(module.exports,"blueprintLoader",()=>blueprintLoader);var $aVpVG=I("aVpVG"),$lGBgM=I("lGBgM");class Blueprint extends $aVpVG.Component{async packaged(){if(!this.loaded){let{tag,src}=this,imported=await eval(`import('${src}')`),blueprint=imported[this.property];this.loaded=$lGBgM.makeComponent(tag,blueprint)}return this.loaded}constructor(){super(),this.tag="anon-elt",this.src="",this.property="default",this.initAttributes("tag","src","property")}}let blueprint=Blueprint.elementCreator({tag:"xin-blueprint",styleSpec:{":host":{display:"none"}}});class BlueprintLoader extends $aVpVG.Component{constructor(){super()}async load(){let e=[...this.querySelectorAll(Blueprint.tagName)].filter((t)=>t.src).map((t)=>t.packaged());await Promise.all(e)}connectedCallback(){super.connectedCallback(),this.load()}}let blueprintLoader=BlueprintLoader.elementCreator({tag:"xin-loader",styleSpec:{":host":{display:"none"}}})});ne("aVpVG",function(e,t){q(e.exports,"Component",()=>z);var n=I("2okor"),i=I("19FSF"),o=I("gbrAN"),a=I("9sLMf"),s=I("5JLBr");let l=0;function r(){return`custom-elt${(l++).toString(36)}`}let d=0,p={};function g(c,u){let m=p[c],h=n.css(u).replace(/:host\b/g,c);p[c]=m?m+`
`+h:h}function f(c){if(p[c])document.head.append(a.elements.style({id:c+"-component"},p[c]));delete p[c]}class z extends HTMLElement{static{this.elements=a.elements}static{this._tagName=null}static get tagName(){return this._tagName}static StyleNode(c){return console.warn("StyleNode is deprecated, just assign static styleSpec: XinStyleSheet to the class directly"),a.elements.style(n.css(c))}static elementCreator(c={}){if(this._elementCreator==null){let{tag:u,styleSpec:m}=c,h=c!=null?u:null;if(h==null)if(typeof this.name==="string"&&this.name!==""){if(h=s.camelToKabob(this.name),h.startsWith("-"))h=h.slice(1)}else h=r();if(customElements.get(h)!=null)console.warn(`${h} is already defined`);if(h.match(/\w+(-\w+)+/)==null)console.warn(`${h} is not a legal tag for a custom-element`),h=r();while(customElements.get(h)!==void 0)h=r();if(this._tagName=h,m!==void 0)g(h,m);window.customElements.define(h,this,c),this._elementCreator=a.elements[h]}return this._elementCreator}initAttributes(...c){let u={},m={};new MutationObserver((h)=>{let v=!1;if(h.forEach((b)=>{v=!!(b.attributeName&&c.includes(s.kabobToCamel(b.attributeName)))}),v&&this.queueRender!==void 0)this.queueRender(!1)}).observe(this,{attributes:!0}),c.forEach((h)=>{u[h]=i.deepClone(this[h]);let v=s.camelToKabob(h);Object.defineProperty(this,h,{enumerable:!1,get(){if(typeof u[h]==="boolean")return this.hasAttribute(v);else if(this.hasAttribute(v))return typeof u[h]==="number"?parseFloat(this.getAttribute(v)):this.getAttribute(v);else if(m[h]!==void 0)return m[h];else return u[h]},set(b){if(typeof u[h]==="boolean"){if(b!==this[h]){if(b)this.setAttribute(v,"");else this.removeAttribute(v);this.queueRender()}}else if(typeof u[h]==="number"){if(b!==parseFloat(this[h]))this.setAttribute(v,b),this.queueRender()}else if(typeof b==="object"||`${b}`!==`${this[h]}`){if(b===null||b===void 0||typeof b==="object")this.removeAttribute(v);else this.setAttribute(v,b);this.queueRender(),m[h]=b}}})})}initValue(){let c=Object.getOwnPropertyDescriptor(this,"value");if(c===void 0||c.get!==void 0||c.set!==void 0)return;let u=this.hasAttribute("value")?this.getAttribute("value"):i.deepClone(this.value);delete this.value,Object.defineProperty(this,"value",{enumerable:!1,get(){return u},set(m){if(u!==m)u=m,this.queueRender(!0)}})}get parts(){let c=this.shadowRoot!=null?this.shadowRoot:this;if(this._parts==null)this._parts=new Proxy({},{get(u,m){if(u[m]===void 0){let h=c.querySelector(`[part="${m}"]`);if(h==null)h=c.querySelector(m);if(h==null)throw new Error(`elementRef "${m}" does not exist!`);h.removeAttribute("data-ref"),u[m]=h}return u[m]}});return this._parts}constructor(){super(),this.content=a.elements.slot(),this._changeQueued=!1,this._renderQueued=!1,this._hydrated=!1,d+=1,this.initAttributes("hidden"),this.instanceId=`${this.tagName.toLocaleLowerCase()}-${d}`,this._value=i.deepClone(this.defaultValue)}connectedCallback(){if(f(this.constructor.tagName),this.hydrate(),this.role!=null)this.setAttribute("role",this.role);if(this.onResize!==void 0){if(o.resizeObserver.observe(this),this._onResize==null)this._onResize=this.onResize.bind(this);this.addEventListener("resize",this._onResize)}if(this.value!=null&&this.getAttribute("value")!=null)this._value=this.getAttribute("value");this.queueRender()}disconnectedCallback(){o.resizeObserver.unobserve(this)}queueRender(c=!1){if(!this._hydrated)return;if(!this._changeQueued)this._changeQueued=c;if(!this._renderQueued)this._renderQueued=!0,requestAnimationFrame(()=>{if(this._changeQueued)o.dispatch(this,"change");this._changeQueued=!1,this._renderQueued=!1,this.render()})}hydrate(){if(!this._hydrated){this.initValue();let c=typeof this.content!=="function",u=typeof this.content==="function"?this.content():this.content,{styleSpec:m}=this.constructor,{styleNode:h}=this.constructor;if(m)h=this.constructor.styleNode=a.elements.style(n.css(m)),delete this.constructor.styleNode;if(this.styleNode)console.warn(this,"styleNode is deprecrated, use static styleNode or statc styleSpec instead"),h=this.styleNode;if(h){let v=this.attachShadow({mode:"open"});v.appendChild(h.cloneNode(!0)),o.appendContentToElement(v,u,c)}else if(u!==null){let v=[...this.childNodes];o.appendContentToElement(this,u,c),this.isSlotted=this.querySelector("slot,xin-slot")!==void 0;let b=[...this.querySelectorAll("slot")];if(b.length>0)b.forEach(x.replaceSlot);if(v.length>0){let w={"":this};[...this.querySelectorAll("xin-slot")].forEach((S)=>{w[S.name]=S}),v.forEach((S)=>{let M=w[""],E=S instanceof Element?w[S.slot]:M;(E!==void 0?E:M).append(S)})}}this._hydrated=!0}}render(){}}class x extends z{static replaceSlot(c){let u=document.createElement("xin-slot");if(c.name!=="")u.setAttribute("name",c.name);c.replaceWith(u)}constructor(){super(),this.name="",this.content=null,this.initAttributes("name")}}let C=x.elementCreator({tag:"xin-slot"})});ne("2okor",function(e,t){q(e.exports,"StyleSheet",()=>a),q(e.exports,"css",()=>p),q(e.exports,"processProp",()=>l),q(e.exports,"initVars",()=>g),q(e.exports,"darkMode",()=>f),q(e.exports,"invertLuminance",()=>z),q(e.exports,"vars",()=>x),q(e.exports,"varDefault",()=>C);var n=I("6Jaab"),i=I("9sLMf"),o=I("5JLBr");function a(c,u){let m=i.elements.style(p(u));m.id=c,document.head.append(m)}let s=["animation-iteration-count","flex","flex-base","flex-grow","flex-shrink","opacity","order","tab-size","widows","z-index","zoom"],l=(c,u)=>{if(typeof u==="number"&&!s.includes(c))u=`${u}px`;if(c.startsWith("_"))if(c.startsWith("__"))c="--"+c.substring(2),u=`var(${c}-default, ${u})`;else c="--"+c.substring(1);return{prop:c,value:String(u)}},r=(c,u,m)=>{if(m===void 0)return"";if(m instanceof n.Color)m=m.html;let h=l(u,m);return`${c}  ${h.prop}: ${h.value};`},d=(c,u,m="")=>{let h=o.camelToKabob(c);if(typeof u==="object"&&!(u instanceof n.Color)){let v=Object.keys(u).map((b)=>d(b,u[b],`${m}  `)).join(`
`);return`${m}  ${c} {
${v}
${m}  }`}else return r(m,h,u)},p=(c,u="")=>{return Object.keys(c).map((m)=>{let h=c[m];if(typeof h==="string"){if(m==="@import")return`@import url('${h}');`;throw new Error("top-level string value only allowed for `@import`")}let v=Object.keys(h).map((b)=>d(b,h[b])).join(`
`);return`${u}${m} {
${v}
}`}).join(`

`)},g=(c)=>{console.warn("initVars is deprecated. Just use _ and __ prefixes instead.");let u={};for(let m of Object.keys(c)){let h=c[m],v=o.camelToKabob(m);u[`--${v}`]=typeof h==="number"&&h!==0?String(h)+"px":h}return u},f=(c)=>{console.warn("darkMode is deprecated. Use inverseLuminance instead.");let u={};for(let m of Object.keys(c)){let h=c[m];if(typeof h==="string"&&h.match(/^(#|rgb[a]?\(|hsl[a]?\()/)!=null)h=n.Color.fromCss(h).inverseLuminance.html,u[`--${o.camelToKabob(m)}`]=h}return u},z=(c)=>{let u={};for(let m of Object.keys(c)){let h=c[m];if(h instanceof n.Color)u[m]=h.inverseLuminance;else if(typeof h==="string"&&h.match(/^(#[0-9a-fA-F]{3}|rgba?\(|hsla?\()/))u[m]=n.Color.fromCss(h).inverseLuminance}return u},x=new Proxy({},{get(c,u){if(c[u]==null){u=u.replace(/[A-Z]/g,(S)=>`-${S.toLocaleLowerCase()}`);let[,m,,h,v,b]=u.match(/^([^\d_]*)((_)?(\d+)(\w*))?$/),w=`--${m}`;if(v!=null){let S=h==null?Number(v)/100:-Number(v)/100;switch(b){case"b":{let M=getComputedStyle(document.body).getPropertyValue(w);c[u]=S>0?n.Color.fromCss(M).brighten(S).rgba:n.Color.fromCss(M).darken(-S).rgba}break;case"s":{let M=getComputedStyle(document.body).getPropertyValue(w);c[u]=S>0?n.Color.fromCss(M).saturate(S).rgba:n.Color.fromCss(M).desaturate(-S).rgba}break;case"h":{let M=getComputedStyle(document.body).getPropertyValue(w);c[u]=n.Color.fromCss(M).rotate(S*100).rgba,console.log(n.Color.fromCss(M).hsla,n.Color.fromCss(M).rotate(S).hsla)}break;case"o":{let M=getComputedStyle(document.body).getPropertyValue(w);c[u]=n.Color.fromCss(M).opacity(S).rgba}break;case"":c[u]=`calc(var(${w}) * ${S})`;break;default:throw console.error(b),new Error(`Unrecognized method ${b} for css variable ${w}`)}}else c[u]=`var(${w})`}return c[u]}}),C=new Proxy({},{get(c,u){if(c[u]===void 0){let m=`--${u.replace(/[A-Z]/g,(h)=>`-${h.toLocaleLowerCase()}`)}`;c[u]=(h)=>`var(${m}, ${h})`}return c[u]}})});ne("6Jaab",function(e,t){q(e.exports,"Color",()=>l);var n=I("drWRQ");let i=(r,d,p)=>{return(0.299*r+0.587*d+0.114*p)/255},o=(r)=>("00"+Math.round(Number(r)).toString(16)).slice(-2);class a{constructor(r,d,p){r/=255,d/=255,p/=255;let g=Math.max(r,d,p),f=g-Math.min(r,d,p),z=f!==0?g===r?(d-p)/f:g===d?2+(p-r)/f:4+(r-d)/f:0;this.h=60*z<0?60*z+360:60*z,this.s=f!==0?g<=0.5?f/(2*g-f):f/(2-(2*g-f)):0,this.l=(2*g-f)/2}}let s=globalThis.document!==void 0?globalThis.document.createElement("span"):void 0;class l{static fromCss(r){let d=r;if(s instanceof HTMLSpanElement)s.style.color=r,document.body.appendChild(s),d=getComputedStyle(s).color,s.remove();let[p,g,f,z]=d.match(/[\d.]+/g);return new l(Number(p),Number(g),Number(f),z==null?1:Number(z))}static fromHsl(r,d,p,g=1){return l.fromCss(`hsla(${r.toFixed(0)}, ${(d*100).toFixed(0)}%, ${(p*100).toFixed(0)}%, ${g.toFixed(2)})`)}constructor(r,d,p,g=1){this.r=n.clamp(0,r,255),this.g=n.clamp(0,d,255),this.b=n.clamp(0,p,255),this.a=g!==void 0?n.clamp(0,g,1):g=1}get inverse(){return new l(255-this.r,255-this.g,255-this.b,this.a)}get inverseLuminance(){let{h:r,s:d,l:p}=this._hsl;return l.fromHsl(r,d,1-p,this.a)}get rgb(){let{r,g:d,b:p}=this;return`rgb(${r.toFixed(0)},${d.toFixed(0)},${p.toFixed(0)})`}get rgba(){let{r,g:d,b:p,a:g}=this;return`rgba(${r.toFixed(0)},${d.toFixed(0)},${p.toFixed(0)},${g.toFixed(2)})`}get RGBA(){return[this.r/255,this.g/255,this.b/255,this.a]}get ARGB(){return[this.a,this.r/255,this.g/255,this.b/255]}get _hsl(){if(this.hslCached==null)this.hslCached=new a(this.r,this.g,this.b);return this.hslCached}get hsl(){let{h:r,s:d,l:p}=this._hsl;return`hsl(${r.toFixed(0)}, ${(d*100).toFixed(0)}%, ${(p*100).toFixed(0)}%)`}get hsla(){let{h:r,s:d,l:p}=this._hsl;return`hsla(${r.toFixed(0)}, ${(d*100).toFixed(0)}%, ${(p*100).toFixed(0)}%, ${this.a.toFixed(2)})`}get mono(){let r=this.brightness*255;return new l(r,r,r)}get brightness(){return i(this.r,this.g,this.b)}get html(){return this.toString()}toString(){return this.a===1?"#"+o(this.r)+o(this.g)+o(this.b):"#"+o(this.r)+o(this.g)+o(this.b)+o(Math.floor(255*this.a))}brighten(r){let{h:d,s:p,l:g}=this._hsl,f=n.clamp(0,g+r*(1-g),1);return l.fromHsl(d,p,f,this.a)}darken(r){let{h:d,s:p,l:g}=this._hsl,f=n.clamp(0,g*(1-r),1);return l.fromHsl(d,p,f,this.a)}saturate(r){let{h:d,s:p,l:g}=this._hsl,f=n.clamp(0,p+r*(1-p),1);return l.fromHsl(d,f,g,this.a)}desaturate(r){let{h:d,s:p,l:g}=this._hsl,f=n.clamp(0,p*(1-r),1);return l.fromHsl(d,f,g,this.a)}rotate(r){let{h:d,s:p,l:g}=this._hsl,f=(d+360+r)%360;return l.fromHsl(f,p,g,this.a)}opacity(r){let{h:d,s:p,l:g}=this._hsl;return l.fromHsl(d,p,g,r)}swatch(){let{r,g:d,b:p,a:g}=this;return console.log(`%c      %c ${this.html}, rgba(${r}, ${d}, ${p}, ${g}), ${this.hsla}`,`background-color: rgba(${r}, ${d}, ${p}, ${g})`,"background-color: transparent"),this}blend(r,d){return new l(n.lerp(this.r,r.r,d),n.lerp(this.g,r.g,d),n.lerp(this.b,r.b,d),n.lerp(this.a,r.a,d))}mix(r,d){let p=this._hsl,g=r._hsl;return l.fromHsl(n.lerp(p.h,g.h,d),n.lerp(p.s,g.s,d),n.lerp(p.l,g.l,d),n.lerp(this.a,r.a,d))}}});ne("drWRQ",function(e,t){q(e.exports,"clamp",()=>o),q(e.exports,"lerp",()=>a),q(e.exports,"MoreMath",()=>s);let n=180/Math.PI,i=Math.PI/180;function o(l,r,d){return r<l?l:r>d?d:r}function a(l,r,d){return d=o(0,d,1),d*(r-l)+l}let s={clamp:o,lerp:a}});ne("9sLMf",function(e,t){q(e.exports,"elements",()=>g),q(e.exports,"svgElements",()=>f),q(e.exports,"mathML",()=>z);var n=I("kCu8Y"),i=I("buKmK"),o=I("5JLBr"),a=I("2okor");let s="http://www.w3.org/1998/Math/MathML",l="http://www.w3.org/2000/svg",r={},d=(x,...C)=>{if(r[x]===void 0){let[m,h]=x.split("|");if(h===void 0)r[x]=globalThis.document.createElement(m);else r[x]=globalThis.document.createElementNS(h,m)}let c=r[x].cloneNode(),u={};for(let m of C)if(m instanceof Element||m instanceof DocumentFragment||typeof m==="string"||typeof m==="number")if(c instanceof HTMLTemplateElement)c.content.append(m);else c.append(m);else Object.assign(u,m);for(let m of Object.keys(u)){let h=u[m];if(m==="apply")h(c);else if(m==="style")if(typeof h==="object")for(let v of Object.keys(h)){let b=a.processProp(o.camelToKabob(v),h[v]);if(b.prop.startsWith("--"))c.style.setProperty(b.prop,b.value);else c.style[v]=b.value}else c.setAttribute("style",h);else if(m.match(/^on[A-Z]/)!=null){let v=m.substring(2).toLowerCase();n.on(c,v,h)}else if(m==="bind")if((typeof h.binding==="string"?i.bindings[h.binding]:h.binding)!==void 0&&h.value!==void 0)n.bind(c,h.value,h.binding instanceof Function?{toDOM:h.binding}:h.binding);else throw new Error("bad binding");else if(m.match(/^bind[A-Z]/)!=null){let v=m.substring(4,5).toLowerCase()+m.substring(5),b=i.bindings[v];if(b!==void 0)n.bind(c,h,b);else throw new Error(`${m} is not allowed, bindings.${v} is not defined`)}else if(c[m]!==void 0){let{MathMLElement:v}=globalThis;if(c instanceof SVGElement||v!==void 0&&c instanceof v)c.setAttribute(m,h);else c[m]=h}else{let v=o.camelToKabob(m);if(v==="class")h.split(" ").forEach((b)=>{c.classList.add(b)});else if(c[v]!==void 0)c[v]=h;else if(typeof h==="boolean")h?c.setAttribute(v,""):c.removeAttribute(v);else c.setAttribute(v,h)}}return c},p=(...x)=>{let C=globalThis.document.createDocumentFragment();for(let c of x)C.append(c);return C},g=new Proxy({fragment:p},{get(x,C){if(C=C.replace(/[A-Z]/g,(c)=>`-${c.toLocaleLowerCase()}`),x[C]===void 0)x[C]=(...c)=>d(C,...c);return x[C]},set(){throw new Error("You may not add new properties to elements")}}),f=new Proxy({fragment:p},{get(x,C){if(x[C]===void 0)x[C]=(...c)=>d(`${C}|${l}`,...c);return x[C]},set(){throw new Error("You may not add new properties to elements")}}),z=new Proxy({fragment:p},{get(x,C){if(x[C]===void 0)x[C]=(...c)=>d(`${C}|${s}`,...c);return x[C]},set(){throw new Error("You may not add new properties to elements")}})});ne("kCu8Y",function(e,t){q(e.exports,"bind",()=>d),q(e.exports,"on",()=>f);var n=I("eppu5"),i=I("5lOGz"),o=I("5hOlm");let{document:a,MutationObserver:s}=globalThis,l=(z,x)=>{let C=o.elementToBindings.get(z);if(C==null)return;for(let c of C){let{binding:u,options:m}=c,{path:h}=c,{toDOM:v}=u;if(v!=null){if(h.startsWith("^")){let b=o.getListItem(z);if(b!=null&&b[o.XIN_PATH]!=null)h=c.path=`${b[o.XIN_PATH]}${h.substring(1)}`;else throw console.error(`Cannot resolve relative binding ${h}`,z,"is not part of a list"),new Error(`Cannot resolve relative binding ${h}`)}if(x==null||h.startsWith(x))v(z,n.xin[h],m)}}};if(s!=null)new s((z)=>{z.forEach((x)=>{[...x.addedNodes].forEach((C)=>{if(C instanceof Element)[...C.querySelectorAll(o.BOUND_SELECTOR)].forEach((c)=>l(c))})})}).observe(a.body,{subtree:!0,childList:!0});n.observe(()=>!0,(z)=>{let x=a.querySelectorAll(o.BOUND_SELECTOR);for(let C of x)l(C,z)});let r=(z)=>{let x=z.target.closest(o.BOUND_SELECTOR);while(x!=null){let C=o.elementToBindings.get(x);for(let c of C){let{binding:u,path:m}=c,{fromDOM:h}=u;if(h!=null){let v;try{v=h(x,c.options)}catch(b){throw console.error("Cannot get value from",x,"via",c),new Error("Cannot obtain value fromDOM")}if(v!=null){let b=n.xin[m];if(b==null)n.xin[m]=v;else{let w=b[o.XIN_PATH]!=null?b[o.XIN_VALUE]:b,S=v[o.XIN_PATH]!=null?v[o.XIN_VALUE]:v;if(w!==S)n.xin[m]=S}}}}x=x.parentElement.closest(o.BOUND_SELECTOR)}};if(globalThis.document!=null)a.body.addEventListener("change",r,!0),a.body.addEventListener("input",r,!0);function d(z,x,C,c){if(z instanceof DocumentFragment)throw new Error("bind cannot bind to a DocumentFragment");let u;if(typeof x==="object"&&x[o.XIN_PATH]===void 0&&c===void 0){let{value:v}=x;u=typeof v==="string"?v:v[o.XIN_PATH],c=x,delete c.value}else u=typeof x==="string"?x:x[o.XIN_PATH];if(u==null)throw new Error("bind requires a path or object with xin Proxy");let{toDOM:m}=C;z.classList?.add(o.BOUND_CLASS);let h=o.elementToBindings.get(z);if(h==null)h=[],o.elementToBindings.set(z,h);if(h.push({path:u,binding:C,options:c}),m!=null&&!u.startsWith("^"))i.touch(u);return z}let p=new Set,g=(z)=>{let x=z?.target.closest(o.EVENT_SELECTOR),C=!1,c=new Proxy(z,{get(u,m){if(m==="stopPropagation")return()=>{z.stopPropagation(),C=!0};else{let h=u[m];return typeof h==="function"?h.bind(u):h}}});while(!C&&x!=null){let u=o.elementToHandlers.get(x)[z.type]||[];for(let m of u){if(typeof m==="function")m(c);else{let h=n.xin[m];if(typeof h==="function")h(c);else throw new Error(`no event handler found at path ${m}`)}if(C)continue}x=x.parentElement!=null?x.parentElement.closest(o.EVENT_SELECTOR):null}},f=(z,x,C)=>{let c=o.elementToHandlers.get(z);if(z.classList.add(o.EVENT_CLASS),c==null)c={},o.elementToHandlers.set(z,c);if(!c[x])c[x]=[];if(!c[x].includes(C))c[x].push(C);if(!p.has(x))p.add(x),a.body.addEventListener(x,g,!0)}});ne("eppu5",function(e,t){q(e.exports,"xin",()=>c),q(e.exports,"observe",()=>C),q(e.exports,"boxed",()=>u),q(e.exports,"updates",()=>I("5lOGz").updates),q(e.exports,"touch",()=>I("5lOGz").touch),q(e.exports,"unobserve",()=>I("5lOGz").unobserve),q(e.exports,"observerShouldBeRemoved",()=>I("5lOGz").observerShouldBeRemoved);var n=I("hv4Z8"),i=I("5lOGz"),o=I("aMI8M"),a=I("5hOlm");let s=["sort","splice","copyWithin","fill","pop","push","reverse","shift","unshift"],l={},r=!0,d=/^\.?([^.[\](),])+(\.[^.[\](),]+|\[\d+\]|\[[^=[\](),]*=[^[\]()]+\])*$/,p=(m)=>d.test(m),g=(m="",h="")=>{if(m==="")return h;else if(h.match(/^\d+$/)!==null||h.includes("="))return`${m}[${h}]`;else return`${m}.${h}`},f={string(m){return new String(m)},boolean(m){return new Boolean(m)},bigint(m){return m},symbol(m){return m},number(m){return new Number(m)}};function z(m,h){let v=typeof m;if(m===void 0||v==="object"||v==="function")return m;else return new Proxy(f[typeof m](m),x(h,!0))}let x=(m,h)=>({get(v,b){switch(b){case a.XIN_PATH:return m;case a.XIN_VALUE:return a.xinValue(v)}if(typeof b==="symbol")return v[b];let w=b,S=w.match(/^([^.[]+)\.(.+)$/)??w.match(/^([^\]]+)(\[.+)/)??w.match(/^(\[[^\]]+\])\.(.+)$/)??w.match(/^(\[[^\]]+\])\[(.+)$/);if(S!==null){let[,M,E]=S,B=g(m,M),N=o.getByPath(v,M);return N!==null&&typeof N==="object"?new Proxy(N,x(B,h))[E]:N}if(w.startsWith("[")&&w.endsWith("]"))w=w.substring(1,w.length-1);if(!Array.isArray(v)&&v[w]!==void 0||Array.isArray(v)&&w.includes("=")){let M;if(w.includes("=")){let[E,B]=w.split("=");M=v.find((N)=>`${o.getByPath(N,E)}`===B)}else M=v[w];if(M!==null&&typeof M==="object"){let E=g(m,w);return new Proxy(M,x(E,h))}else if(typeof M==="function")return M.bind(v);else return h?z(M,g(m,w)):M}else if(Array.isArray(v)){let M=v[w];return typeof M==="function"?(...E)=>{let B=Array.prototype[w].apply(v,E);if(s.includes(w))i.touch(m);return B}:typeof M==="object"?new Proxy(M,x(g(m,w),h)):h?z(M,g(m,w)):M}else return h?z(v[w],g(m,w)):v[w]},set(v,b,w){w=a.xinValue(w);let S=b!==a.XIN_VALUE?g(m,b):m;if(r&&!p(S))throw new Error(`setting invalid path ${S}`);if(a.xinValue(c[S])!==w&&o.setByPath(l,S,w))i.touch(S);return!0}}),C=(m,h)=>{let v=typeof h==="function"?h:c[h];if(typeof v!=="function")throw new Error(`observe expects a function or path to a function, ${h} is neither`);return i.observe(m,v)},c=new Proxy(l,x("",!1)),u=new Proxy(l,x("",!0))});ne("hv4Z8",function(e,t){q(e.exports,"settings",()=>n);let n={debug:!1,perf:!1}});ne("5lOGz",function(e,t){q(e.exports,"observerShouldBeRemoved",()=>o),q(e.exports,"updates",()=>g),q(e.exports,"unobserve",()=>C),q(e.exports,"touch",()=>z),q(e.exports,"observe",()=>x);var n=I("5hOlm"),i=I("hv4Z8");let o=Symbol("observer should be removed"),a=[],s=[],l=!1,r,d;class p{constructor(c,u){let m=typeof u==="string"?`"${u}"`:`function ${u.name}`,h;if(typeof c==="string")this.test=(v)=>typeof v==="string"&&v!==""&&(c.startsWith(v)||v.startsWith(c)),h=`test = "${c}"`;else if(c instanceof RegExp)this.test=c.test.bind(c),h=`test = "${c.toString()}"`;else if(c instanceof Function)this.test=c,h=`test = function ${c.name}`;else throw new Error("expect listener test to be a string, RegExp, or test function");if(this.description=`${h}, ${m}`,typeof u==="function")this.callback=u;else throw new Error("expect callback to be a path or function");a.push(this)}}let g=async()=>{if(r===void 0)return;await r},f=()=>{if(i.settings.perf)console.time("xin async update");let c=[...s];for(let u of c)a.filter((m)=>{let h;try{h=m.test(u)}catch(v){throw new Error(`Listener ${m.description} threw "${v}" at "${u}"`)}if(h===o)return C(m),!1;return h}).forEach((m)=>{let h;try{h=m.callback(u)}catch(v){console.error(`Listener ${m.description} threw "${v}" handling "${u}"`)}if(h===o)C(m)});if(s.splice(0),l=!1,typeof d==="function")d();if(i.settings.perf)console.timeEnd("xin async update")},z=(c)=>{let u=typeof c==="string"?c:n.xinPath(c);if(u===void 0)throw console.error("touch was called on an invalid target",c),new Error("touch was called on an invalid target");if(l===!1)r=new Promise((m)=>{d=m}),l=setTimeout(f);if(s.find((m)=>u.startsWith(m))==null)s.push(u)},x=(c,u)=>{return new p(c,u)},C=(c)=>{let u=a.indexOf(c);if(u>-1)a.splice(u,1);else throw new Error("unobserve failed, listener not found")}});ne("5hOlm",function(e,t){q(e.exports,"BOUND_CLASS",()=>i),q(e.exports,"BOUND_SELECTOR",()=>o),q(e.exports,"EVENT_CLASS",()=>a),q(e.exports,"EVENT_SELECTOR",()=>s),q(e.exports,"XIN_PATH",()=>l),q(e.exports,"XIN_VALUE",()=>r),q(e.exports,"xinPath",()=>d),q(e.exports,"xinValue",()=>p),q(e.exports,"elementToHandlers",()=>g),q(e.exports,"elementToBindings",()=>f),q(e.exports,"cloneWithBindings",()=>x),q(e.exports,"elementToItem",()=>C),q(e.exports,"getListItem",()=>c);var n=I("19FSF");let i="-xin-data",o=`.${i}`,a="-xin-event",s=`.${a}`,l="xinPath",r="xinValue",d=(u)=>{return u[l]};function p(u){return typeof u==="object"&&u!==null?u[r]||u:u}let g=new WeakMap,f=new WeakMap,z=(u)=>{return{eventBindings:g.get(u),dataBindings:f.get(u)}},x=(u)=>{let m=u.cloneNode();if(m instanceof Element){let h=f.get(u),v=g.get(u);if(h!=null)f.set(m,n.deepClone(h));if(v!=null)g.set(m,n.deepClone(v))}for(let h of u instanceof HTMLTemplateElement?u.content.childNodes:u.childNodes)if(h instanceof Element||h instanceof DocumentFragment)m.appendChild(x(h));else m.appendChild(h.cloneNode());return m},C=new WeakMap,c=(u)=>{let m=document.body.parentElement;while(u.parentElement!=null&&u.parentElement!==m){let h=C.get(u);if(h!=null)return h;u=u.parentElement}return!1}});ne("19FSF",function(e,t){q(e.exports,"deepClone",()=>n);function n(i){if(i==null||typeof i!=="object")return i;if(Array.isArray(i))return i.map(n);let o={};for(let a in i){let s=i[a];if(i!=null&&typeof i==="object")o[a]=n(s);else o[a]=s}return o}});ne("aMI8M",function(e,t){q(e.exports,"getByPath",()=>m),q(e.exports,"setByPath",()=>h);var n=I("5lDHe");let i=()=>new Date(parseInt("1000000000",36)+Date.now()).valueOf().toString(36).slice(1),o=0,a=()=>(parseInt("10000",36)+ ++o).toString(36).slice(-5),s=()=>i()+a(),l={},r={};function d(b){if(b==="")return[];if(Array.isArray(b))return b;else{let w=[];while(b.length>0){let S=b.search(/\[[^\]]+\]/);if(S===-1){w.push(b.split("."));break}else{let M=b.slice(0,S);if(b=b.slice(S),M!=="")w.push(M.split("."));if(S=b.indexOf("]")+1,w.push(b.slice(1,S-1)),b.slice(S,S+1)===".")S+=1;b=b.slice(S)}}return w}}let p=new WeakMap;function g(b,w){if(p.get(b)===void 0)p.set(b,{});if(p.get(b)[w]===void 0)p.get(b)[w]={};let S=p.get(b)[w];if(w==="_auto_")b.forEach((M,E)=>{if(M._auto_===void 0)M._auto_=s();S[M._auto_+""]=E});else b.forEach((M,E)=>{S[m(M,w)+""]=E});return S}function f(b,w){if(p.get(b)===void 0||p.get(b)[w]===void 0)return g(b,w);else return p.get(b)[w]}function z(b,w,S){S=S+"";let M=f(b,w)[S];if(M===void 0||m(b[M],w)+""!==S)M=g(b,w)[S];return M}function x(b,w,S){if(b[w]===void 0&&S!==void 0)b[w]=S;return b[w]}function C(b,w,S,M){let E=w!==""?z(b,w,S):S;if(M===l)return b.splice(E,1),p.delete(b),Symbol("deleted");else if(M===r){if(w===""&&b[E]===void 0)b[E]={}}else if(M!==void 0)if(E!==void 0)b[E]=M;else if(w!==""&&m(M,w)+""===S+"")b.push(M),E=b.length-1;else throw new Error(`byIdPath insert failed at [${w}=${S}]`);return b[E]}function c(b){if(!Array.isArray(b))throw n.makeError("setByPath failed: expected array, found",b)}function u(b){if(b==null||!(b instanceof Object))throw n.makeError("setByPath failed: expected Object, found",b)}function m(b,w){let S=d(w),M=b,E,B,N,K;for(E=0,B=S.length;M!==void 0&&E<B;E++){let V=S[E];if(Array.isArray(V))for(N=0,K=V.length;M!==void 0&&N<K;N++){let X=V[N];M=M[X]}else if(M.length===0){if(M=M[V.slice(1)],V[0]!=="=")return}else if(V.includes("=")){let[X,...Q]=V.split("=");M=C(M,X,Q.join("="))}else N=parseInt(V,10),M=M[N]}return M}function h(b,w,S){let M=b,E=d(w);while(M!=null&&E.length>0){let B=E.shift();if(typeof B==="string"){let N=B.indexOf("=");if(N>-1){if(N===0)u(M);else c(M);let K=B.slice(0,N),V=B.slice(N+1);if(M=C(M,K,V,E.length>0?r:S),E.length===0)return!0}else{c(M);let K=parseInt(B,10);if(E.length>0)M=M[K];else{if(S!==l){if(M[K]===S)return!1;M[K]=S}else M.splice(K,1);return!0}}}else if(Array.isArray(B)&&B.length>0){u(M);while(B.length>0){let N=B.shift();if(B.length>0||E.length>0)M=x(M,N,B.length>0?{}:[]);else{if(S!==l){if(M[N]===S)return!1;M[N]=S}else{if(!Object.prototype.hasOwnProperty.call(M,N))return!1;delete M[N]}return!0}}}else throw new Error(`setByPath failed, bad path ${w}`)}throw new Error(`setByPath(${b}, ${w}, ${S}) failed`)}function v(b,w){if(m(b,w)!==null)h(b,w,l)}});ne("5lDHe",function(e,t){q(e.exports,"makeError",()=>i);let n=(o)=>{try{return JSON.stringify(o)}catch(a){return"{has circular references}"}},i=(...o)=>new Error(o.map(n).join(" "))});ne("buKmK",function(e,t){q(e.exports,"bindings",()=>o);var n=I("2dgdI"),i=I("gbrAN");let o={value:{toDOM:i.setValue,fromDOM(a){return i.getValue(a)}},set:{toDOM:i.setValue},text:{toDOM(a,s){a.textContent=s}},enabled:{toDOM(a,s){a.disabled=!s}},disabled:{toDOM(a,s){a.disabled=Boolean(s)}},style:{toDOM(a,s){if(typeof s==="object")for(let l of Object.keys(s))a.style[l]=s[l];else if(typeof s==="string")a.setAttribute("style",s);else throw new Error("style binding expects either a string or object")}},list:{toDOM(a,s,l){n.getListBinding(a,l).update(s)}}}});ne("2dgdI",function(e,t){q(e.exports,"getListBinding",()=>g);var n=I("hv4Z8"),i=I("gbrAN"),o=I("9nL7f"),a=I("eppu5"),s=I("5hOlm");let l=Symbol("list-binding"),r=16;function d(f,z){let x=[...f.querySelectorAll(s.BOUND_SELECTOR)];if(f.matches(s.BOUND_SELECTOR))x.unshift(f);for(let C of x){let c=s.elementToBindings.get(C);for(let u of c){if(u.path.startsWith("^"))u.path=`${z}${u.path.substring(1)}`;if(u.binding.toDOM!=null)u.binding.toDOM(C,a.xin[u.path])}}}class p{constructor(f,z={}){if(this._array=[],this.boundElement=f,this.itemToElement=new WeakMap,f.children.length!==1)throw new Error("ListBinding expects an element with exactly one child element");if(f.children[0]instanceof HTMLTemplateElement){let x=f.children[0];if(x.content.children.length!==1)throw new Error("ListBinding expects a template with exactly one child element");this.template=s.cloneWithBindings(x.content.children[0])}else this.template=f.children[0],this.template.remove();if(this.listTop=document.createElement("div"),this.listBottom=document.createElement("div"),this.boundElement.append(this.listTop),this.boundElement.append(this.listBottom),this.options=z,z.virtual!=null)i.resizeObserver.observe(this.boundElement),this._update=o.throttle(()=>{this.update(this._array,!0)},r),this.boundElement.addEventListener("scroll",this._update),this.boundElement.addEventListener("resize",this._update)}visibleSlice(){let{virtual:f,hiddenProp:z,visibleProp:x}=this.options,C=this._array;if(z!==void 0)C=C.filter((v)=>v[z]!==!0);if(x!==void 0)C=C.filter((v)=>v[x]===!0);let c=0,u=C.length-1,m=0,h=0;if(f!=null&&this.boundElement instanceof HTMLElement){let v=this.boundElement.offsetWidth,b=this.boundElement.offsetHeight,w=f.width!=null?Math.max(1,Math.floor(v/f.width)):1,S=Math.ceil(b/f.height)+1,M=Math.ceil(C.length/w),E=w*S,B=Math.floor(this.boundElement.scrollTop/f.height);if(B>M-S+1)B=Math.max(0,M-S+1);c=B*w,u=c+E-1,m=B*f.height,h=Math.max(M*f.height-b-m,0)}return{items:C,firstItem:c,lastItem:u,topBuffer:m,bottomBuffer:h}}update(f,z){if(f==null)f=[];this._array=f;let{hiddenProp:x,visibleProp:C}=this.options,c=s.xinPath(f),u=this.visibleSlice();this.boundElement.classList.toggle("-xin-empty-list",u.items.length===0);let m=this._previousSlice,{firstItem:h,lastItem:v,topBuffer:b,bottomBuffer:w}=u;if(x===void 0&&C===void 0&&z===!0&&m!=null&&h===m.firstItem&&v===m.lastItem)return;this._previousSlice=u;let S=0,M=0,E=0;for(let V of[...this.boundElement.children]){if(V===this.listTop||V===this.listBottom)continue;let X=s.elementToItem.get(V);if(X==null)V.remove();else{let Q=u.items.indexOf(X);if(Q<h||Q>v)V.remove(),this.itemToElement.delete(X),s.elementToItem.delete(V),S++}}this.listTop.style.height=String(b)+"px",this.listBottom.style.height=String(w)+"px";let B=[],{idPath:N}=this.options;for(let V=h;V<=v;V++){let X=u.items[V];if(X===void 0)continue;let Q=this.itemToElement.get(s.xinValue(X));if(Q==null){if(E++,Q=s.cloneWithBindings(this.template),typeof X==="object")this.itemToElement.set(s.xinValue(X),Q),s.elementToItem.set(Q,s.xinValue(X));if(this.boundElement.insertBefore(Q,this.listBottom),N!=null){let Le=X[N],zt=`${c}[${N}=${Le}]`;d(Q,zt)}else{let Le=`${c}[${V}]`;d(Q,Le)}}B.push(Q)}let K=null;for(let V of B){if(V.previousElementSibling!==K)if(M++,K?.nextElementSibling!=null)this.boundElement.insertBefore(V,K.nextElementSibling);else this.boundElement.insertBefore(V,this.listBottom);K=V}if(n.settings.perf)console.log(c,"updated",{removed:S,created:E,moved:M})}}let g=(f,z)=>{let x=f[l];if(x===void 0)x=new p(f,z),f[l]=x;return x}});ne("gbrAN",function(e,t){q(e.exports,"dispatch",()=>i),q(e.exports,"setValue",()=>a),q(e.exports,"getValue",()=>s),q(e.exports,"resizeObserver",()=>r),q(e.exports,"appendContentToElement",()=>d);var n=I("5hOlm");let i=(p,g)=>{let f=new Event(g);p.dispatchEvent(f)},o=(p)=>{if(p instanceof HTMLInputElement)return p.type;else if(p instanceof HTMLSelectElement&&p.hasAttribute("multiple"))return"multi-select";else return"other"},a=(p,g)=>{switch(o(p)){case"radio":p.checked=p.value===g;break;case"checkbox":p.checked=!!g;break;case"date":p.valueAsDate=new Date(g);break;case"multi-select":for(let f of[...p.querySelectorAll("option")])f.selected=g[f.value];break;default:p.value=g}},s=(p)=>{switch(o(p)){case"radio":{let g=p.parentElement?.querySelector(`[name="${p.name}"]:checked`);return g!=null?g.value:null}case"checkbox":return p.checked;case"date":return p.valueAsDate?.toISOString();case"multi-select":return[...p.querySelectorAll("option")].reduce((g,f)=>{return g[f.value]=f.selected,g},{});default:return p.value}},{ResizeObserver:l}=globalThis,r=l!=null?new l((p)=>{for(let g of p){let f=g.target;i(f,"resize")}}):{observe(){},unobserve(){}},d=(p,g,f=!0)=>{if(p!=null&&g!=null)if(typeof g==="string")p.textContent=g;else if(Array.isArray(g))g.forEach((z)=>{p.append(z instanceof Node&&f?n.cloneWithBindings(z):z)});else if(g instanceof Node)p.append(f?n.cloneWithBindings(g):g);else throw new Error("expect text content or document node")}});ne("9nL7f",function(e,t){q(e.exports,"debounce",()=>n),q(e.exports,"throttle",()=>i);let n=(o,a=250)=>{let s;return(...l)=>{if(s!==void 0)clearTimeout(s);s=setTimeout(()=>{o(...l)},a)}},i=(o,a=250)=>{let s,l=Date.now()-a,r=!1;return(...d)=>{if(clearTimeout(s),s=setTimeout(async()=>{o(...d),l=Date.now()},a),!r&&Date.now()-l>=a){r=!0;try{o(...d),l=Date.now()}finally{r=!1}}}}});ne("5JLBr",function(e,t){q(e.exports,"camelToKabob",()=>n),q(e.exports,"kabobToCamel",()=>i);function n(o){return o.replace(/[A-Z]/g,(a)=>{return`-${a.toLocaleLowerCase()}`})}function i(o){return o.replace(/-([a-z])/g,(a,s)=>{return s.toLocaleUpperCase()})}});ne("lGBgM",function(e,t){q(e.exports,"makeComponent",()=>r);var n=I("6Jaab"),i=I("aVpVG"),o=I("2okor"),a=I("9sLMf"),s=I("aNHSH");let l={};function r(d,p){let{type:g,styleSpec:f}=p(d,{Color:n.Color,Component:i.Component,elements:a.elements,svgElements:a.svgElements,mathML:a.mathML,varDefault:o.varDefault,vars:o.vars,xinProxy:s.xinProxy}),z={type:g,creator:g.elementCreator({tag:d,styleSpec:f})};return l[d]=z,z}});ne("aNHSH",function(e,t){q(e.exports,"boxedProxy",()=>i),q(e.exports,"xinProxy",()=>a);var n=I("eppu5");function i(s){return Object.assign(n.boxed,s),n.boxed}let o=!1;function a(s,l=!1){if(l){if(!o)console.warn("xinProxy(..., true) is deprecated; use boxedProxy(...) instead"),o=!0;return i(s)}return Object.keys(s).forEach((r)=>{n.xin[r]=s[r]}),n.xin}});var D0=I("kCu8Y"),q0=I("buKmK"),H0=I("2okor"),P0=I("6Jaab"),_0=I("aVpVG"),B0=I("9sLMf"),Ze=I("eppu5"),c1=I("5hOlm"),d1=I("9nL7f"),N0=(e=()=>!0)=>{let t=localStorage.getItem("xin-state");if(t!=null){let i=JSON.parse(t);for(let o of Object.keys(i).filter(e))if(Ze.xin[o]!==void 0)Object.assign(Ze.xin[o],i[o]);else Ze.xin[o]=i[o]}let n=d1.debounce(()=>{let i={},o=c1.xinValue(Ze.xin);for(let a of Object.keys(o).filter(e))i[a]=o[a];localStorage.setItem("xin-state",JSON.stringify(i)),console.log("xin state saved to localStorage")},500);Ze.observe(e,n)},c1=I("5hOlm"),V0=I("lGBgM"),W0=I("drWRQ"),$0=I("hv4Z8"),d1=I("9nL7f"),Ze=I("eppu5"),R0=I("5lOGz");I("3x0mh");var U0={},G0=I("aNHSH"),Y0=I("kCu8Y").bind,K0=I("kCu8Y").on,Wa=I("buKmK").bindings,X0=I("2okor").css,J0=I("2okor").invertLuminance,Q0=I("2okor").darkMode,Z0=I("2okor").initVars,T=I("2okor").vars,_=I("2okor").varDefault,$a=I("2okor").StyleSheet,mn=I("6Jaab").Color,U=I("aVpVG").Component,J=I("9sLMf").elements,h1=I("9sLMf").svgElements,e3=I("9sLMf").mathML,Ra=I("5hOlm").getListItem,n3=I("5hOlm").xinPath,un=I("5hOlm").xinValue,t3=I("lGBgM").makeComponent,i3=I("drWRQ").MoreMath,o3=I("hv4Z8").settings,Ua=I("9nL7f").throttle,a3=I("9nL7f").debounce,p1=I("eppu5").xin,s3=I("eppu5").boxed,l3=I("eppu5").observe,r3=I("5lOGz").unobserve,c3=I("5lOGz").touch,d3=I("5lOGz").observerShouldBeRemoved,h3=I("5lOGz").updates,u1=I("aNHSH").xinProxy,Ga=I("aNHSH").boxedProxy,p3=I("3x0mh").Blueprint,u3=I("3x0mh").blueprint,g3=I("3x0mh").BlueprintLoader,m3=I("3x0mh").blueprintLoader,f3=I("3x0mh")["*"];/*!
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
*/var{abTestConditions:Lt}=u1({abTestConditions:{}});class fn extends U{static set conditions(e){Object.assign(Lt,e);for(let t of[...fn.instances])t.queueRender()}condition="";not=!1;static instances=new Set;constructor(){super();this.initAttributes("condition","not")}connectedCallback(){super.connectedCallback(),fn.instances.add(this)}disconnectedCallback(){super.disconnectedCallback(),fn.instances.delete(this)}render(){if(this.condition!==""&&(this.not?Lt[this.condition]!==!0:Lt[this.condition]===!0))this.toggleAttribute("hidden",!1);else this.toggleAttribute("hidden",!0)}}var b3=fn.elementCreator({tag:"xin-ab"});/*!
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
*/var Hn={};function tn(e,t){if(Hn[e]===void 0){if(t!==void 0){let i=globalThis[t];Hn[e]=Promise.resolve({[t]:i})}let n=J.script({src:e});document.head.append(n),Hn[e]=new Promise((i)=>{n.onload=()=>i(globalThis)})}return Hn[e]}var kt={};function Ya(e){if(kt[e]===void 0){let t=J.link({rel:"stylesheet",type:"text/css",href:e});document.head.append(t),kt[e]=new Promise((n)=>{t.onload=n})}return kt[e]}var Rn={xinjsUiColor:{p:["M976 0c4 0 8 2 11 5 4 4 7 7 11 11 0 0 21 21 21 21 3 3 5 7 5 11 0 0 0 928 0 928 0 4-2 8-5 11-4 4-7 7-11 11-5 5-9 9-14 14 0 0-7 7-7 7-3 3-7 5-11 5 0 0-928 0-928 0-4 0-8-2-11-5-4-4-7-7-11-11 0 0-21-21-21-21-3-3-5-7-5-11 0 0 0-928 0-928 0-4 2-8 5-11 4-4 7-7 11-11 5-5 9-9 14-14 0 0 7-7 7-7 3-3 7-5 11-5 0 0 928 0 928 0z","M182 131c13 5 8 2 16 9 0 0 102 102 102 102s91-91 91-91c9-9 9-9 11-11 8-7 13-8 23-9 0 0 4 0 4 0 13 5 8 2 16 9 12 12 12 32 0 44-2 2-2 2-11 11 0 0-91 91-91 91s102 102 102 102c12 12 12 32 0 44-12 12-32 12-44 0 0 0-102-102-102-102s-48 48-48 48c0 0-44 44-44 44-9 9-9 9-11 11-12 12-32 12-44 0-12-12-12-32 0-44 2-2 2-2 11-11 0 0 91-91 91-91s-102-102-102-102c-12-12-12-32 0-44 8-7 13-8 23-9 0 0 4 0 4 0z","M516 131c17 0 31 14 31 31 0 0 0 248 0 248 0 17-14 31-31 31-17 0-31-14-31-31 0 0 0-248 0-248 0-17 14-31 31-31z","M611 131c0 0 4 0 4 0 13 5 8 2 16 9 2 2 2 2 11 11 0 0 226 226 226 226 9 9 9 9 11 11 12 12 12 32 0 44-12 12-32 12-44 0 0 0-248-248-248-248-12-12-12-32 0-44 8-7 13-8 23-9z","M516 131c17 0 31 14 31 31 0 247 0 164 0 248 0 17-14 31-31 31-17 0-31-14-31-31 0 0 0-248 0-248 0-17 14-31 31-31z","M611 131c0 0 4 0 4 0 13 5 8 2 16 9 2 2 2 2 11 11 0 0 226 226 226 226 9 9 9 9 11 11 12 12 12 32 0 44-12 12-32 12-44 0 0 0-248-248-248-248-12-12-12-32 0-44 8-7 13-8 23-9z","M653 498c0 0 0 146 0 146 0 140-114 254-254 254-140 0-254-114-254-254 0 0 0-146 0-146s127 0 127 0c0 0 0 146 0 146 0 70 57 127 127 127 70 0 127-57 127-127 0 0 0-146 0-146s127 0 127 0z","M765 881c0 0 0-384 0-384s127 0 127 0c0 0 0 384 0 384s-127 0-127 0z","M720 995c-24-48-47-96-71-145-27 26-55 53-82 79 0-118 0-237 0-355 93 71 185 142 278 213-37 7-74 13-111 20 24 48 47 96 71 145-28 14-57 29-85 43 0 0 0 0 0 0z","M657 807c25 51 50 102 75 153 13-7 26-13 38-20-25-51-50-102-75-153 29-5 58-10 86-15-63-48-126-96-188-144 0 80 0 160 0 240 21-20 42-41 64-61 0 0 0 0 0 0z"],c:["rgb(64, 64, 64)","rgb(255, 28, 36)","rgb(8, 131, 87)","rgb(8, 131, 87)","rgb(140, 198, 63)","rgb(61, 168, 244)","rgb(255, 147, 29)","rgb(251, 237, 33)","rgb(255, 255, 255)","rgb(0, 0, 0)"]},xinjsUi:{p:["M976 0c4 0 8 2 11 5 4 4 7 7 11 11 0 0 21 21 21 21 3 3 5 7 5 11 0 0 0 928 0 928 0 4-2 8-5 11-4 4-7 7-11 11-5 5-9 9-14 14 0 0-7 7-7 7-3 3-7 5-11 5 0 0-928 0-928 0-4 0-8-2-11-5-4-4-7-7-11-11 0 0-21-21-21-21-3-3-5-7-5-11 0 0 0-928 0-928 0-4 2-8 5-11 4-4 7-7 11-11 5-5 9-9 14-14 0 0 7-7 7-7 3-3 7-5 11-5 0 0 928 0 928 0z","M182 131c13 5 8 2 16 9 0 0 102 102 102 102s91-91 91-91c9-9 9-9 11-11 8-7 13-8 23-9 0 0 4 0 4 0 13 5 8 2 16 9 12 12 12 32 0 44-2 2-2 2-11 11 0 0-91 91-91 91s102 102 102 102c12 12 12 32 0 44-12 12-32 12-44 0 0 0-102-102-102-102s-48 48-48 48c0 0-44 44-44 44-9 9-9 9-11 11-12 12-32 12-44 0-12-12-12-32 0-44 2-2 2-2 11-11 0 0 91-91 91-91s-102-102-102-102c-12-12-12-32 0-44 8-7 13-8 23-9 0 0 4 0 4 0z","M516 131c17 0 31 14 31 31 0 0 0 248 0 248 0 17-14 31-31 31-17 0-31-14-31-31 0 0 0-248 0-248 0-17 14-31 31-31z","M516 131c17 0 31 14 31 31 0 247 0 164 0 248 0 17-14 31-31 31-17 0-31-14-31-31 0 0 0-248 0-248 0-17 14-31 31-31z","M611 131c0 0 4 0 4 0 13 5 8 2 16 9 2 2 2 2 11 11 0 0 226 226 226 226 9 9 9 9 11 11 12 12 12 32 0 44-12 12-32 12-44 0 0 0-248-248-248-248-12-12-12-32 0-44 8-7 13-8 23-9z","M182 131c13 5 8 2 16 9 0 0 102 102 102 102s91-91 91-91c9-9 9-9 11-11 8-7 13-8 23-9 0 0 4 0 4 0 13 5 8 2 16 9 12 12 12 32 0 44-2 2-2 2-11 11 0 0-91 91-91 91s102 102 102 102c12 12 12 32 0 44-12 12-32 12-44 0 0 0-102-102-102-102s-48 48-48 48c0 0-44 44-44 44-9 9-9 9-11 11-12 12-32 12-44 0-12-12-12-32 0-44 2-2 2-2 11-11 0 0 91-91 91-91s-102-102-102-102c-12-12-12-32 0-44 8-7 13-8 23-9 0 0 4 0 4 0zM516 131c17 0 31 14 31 31 0 0 0 248 0 248 0 17-14 31-31 31-17 0-31-14-31-31 0 0 0-248 0-248 0-17 14-31 31-31zM611 131c0 0 4 0 4 0 13 5 8 2 16 9 2 2 2 2 11 11 0 0 226 226 226 226 9 9 9 9 11 11 12 12 12 32 0 44-12 12-32 12-44 0 0 0-248-248-248-248-12-12-12-32 0-44 8-7 13-8 23-9zM516 131c17 0 31 14 31 31 0 247 0 164 0 248 0 17-14 31-31 31-17 0-31-14-31-31 0 0 0-248 0-248 0-17 14-31 31-31zM611 131c0 0 4 0 4 0 13 5 8 2 16 9 2 2 2 2 11 11 0 0 226 226 226 226 9 9 9 9 11 11 12 12 12 32 0 44-12 12-32 12-44 0 0 0-248-248-248-248-12-12-12-32 0-44 8-7 13-8 23-9z","M653 498c0 0 0 146 0 146 0 140-114 254-254 254-140 0-254-114-254-254 0 0 0-146 0-146s127 0 127 0c0 0 0 146 0 146 0 70 57 127 127 127 70 0 127-57 127-127 0 0 0-146 0-146s127 0 127 0z","M765 881c0 0 0-384 0-384s127 0 127 0c0 0 0 384 0 384s-127 0-127 0z","M720 995c-24-48-47-96-71-145-27 26-55 53-82 79 0-118 0-237 0-355 93 71 185 142 278 213-37 7-74 13-111 20 24 48 47 96 71 145-28 14-57 29-85 43 0 0 0 0 0 0z","M657 807c25 51 50 102 75 153 13-7 26-13 38-20-25-51-50-102-75-153 29-5 58-10 86-15-63-48-126-96-188-144 0 80 0 160 0 240 21-20 42-41 64-61 0 0 0 0 0 0z"],c:["rgb(237, 242, 221)","rgb(8, 131, 87)","rgb(8, 131, 87)","rgb(8, 131, 87)","rgb(8, 131, 87)","rgb(8, 131, 87)","rgb(8, 131, 87)","rgb(8, 131, 87)","rgb(236, 243, 221)","rgb(8, 131, 87)"]},cmy:{p:["M302 442c-11-27-17-56-17-86 0-126 103-229 229-229s229 103 229 229c0 31-6 60-17 87-12-2-24-3-37-3-72 0-136 33-178 85-42-52-106-85-178-85-11 0-21 1-32 2z","M478 582c-80-13-146-67-175-140 10-1 21-2 32-2 72 0 136 33 178 85-14 17-26 37-34 58z","M512 813c-42 52-106 85-178 85-126 0-229-103-229-229 0-116 86-211 197-227 30 73 96 127 175 140-11 27-17 56-17 87 0 55 19 105 51 144z","M547 582c-10 1-21 2-32 2-13 0-25-1-37-3 9-21 20-40 34-58 14 18 26 37 35 58 0 0 0 0 0 0z","M478 582c-11 27-17 56-17 87 0 55 19 105 51 144 32-39 51-90 51-144 0-30-6-59-17-86-10 1-21 2-32 2-13 0-25-1-37-3z","M547 582c82-11 150-66 180-140-12-2-24-3-37-3-72 0-136 33-178 85 14 18 26 37 35 58 0 0 0 0 0 0z","M512 813c42 52 106 85 178 85 126 0 229-103 229-229 0-114-83-208-192-226-30 74-98 129-180 140 11 27 17 56 17 86 0 55-19 105-51 144 0 0 0 0 0 0z"],c:["rgb(86, 206, 255)","rgb(20, 248, 0)","rgb(249, 255, 44)","rgb(0, 0, 0)","rgb(252, 0, 0)","rgb(1, 6, 255)","rgb(241, 76, 255)"]},rgb:{p:["M302 442c-11-27-17-56-17-86 0-126 103-229 229-229s229 103 229 229c0 31-6 60-17 87-12-2-24-3-37-3-72 0-136 33-178 85-42-52-106-85-178-85-11 0-21 1-32 2z","M478 582c-80-13-146-67-175-140 10-1 21-2 32-2 72 0 136 33 178 85-14 17-26 37-34 58z","M512 813c-42 52-106 85-178 85-126 0-229-103-229-229 0-116 86-211 197-227 30 73 96 127 175 140-11 27-17 56-17 87 0 55 19 105 51 144z","M547 582c-10 1-21 2-32 2-13 0-25-1-37-3 9-21 20-40 34-58 14 18 26 37 35 58 0 0 0 0 0 0z","M478 582c-11 27-17 56-17 87 0 55 19 105 51 144 32-39 51-90 51-144 0-30-6-59-17-86-10 1-21 2-32 2-13 0-25-1-37-3z","M547 582c82-11 150-66 180-140-12-2-24-3-37-3-72 0-136 33-178 85 14 18 26 37 35 58 0 0 0 0 0 0z","M512 813c42 52 106 85 178 85 126 0 229-103 229-229 0-114-83-208-192-226-30 74-98 129-180 140 11 27 17 56 17 86 0 55-19 105-51 144 0 0 0 0 0 0z"],c:["rgb(248, 14, 0)","rgb(253, 0, 255)","rgb(44, 131, 255)","rgb(255, 255, 255)","rgb(0, 219, 255)","rgb(250, 255, 0)","rgb(0, 204, 3)"]},xinjsColor:{p:["M976 0c4 0 8 2 11 5 4 4 7 7 11 11 0 0 21 21 21 21 3 3 5 7 5 11 0 0 0 928 0 928 0 4-2 8-5 11-4 4-7 7-11 11-5 5-9 9-14 14 0 0-7 7-7 7-3 3-7 5-11 5 0 0-928 0-928 0-4 0-8-2-11-5-4-4-7-7-11-11 0 0-21-21-21-21-3-3-5-7-5-11 0 0 0-928 0-928 0-4 2-8 5-11 4-4 7-7 11-11 5-5 9-9 14-14 0 0 7-7 7-7 3-3 7-5 11-5 0 0 928 0 928 0z","M125 308c8 3 5 1 10 5 0 0 65 65 65 65s58-58 58-58c6-6 6-6 7-7 5-5 8-5 15-5 0 0 3 0 3 0 8 3 5 1 10 5 8 8 8 20 0 28-1 1-1 1-7 7 0 0-58 58-58 58s65 65 65 65c8 8 8 20 0 28-8 8-20 8-28 0 0 0-65-65-65-65s-30 30-30 30c0 0-28 28-28 28-6 6-6 6-7 7-8 8-20 8-28 0-8-8-8-20 0-28 1-1 1-1 7-7 0 0 58-58 58-58s-65-65-65-65c-8-8-8-20 0-28 5-5 8-5 15-5 0 0 3 0 3 0z","M337 307c11 0 20 9 20 20 0 0 0 157 0 157 0 11-9 20-20 20-11 0-20-9-20-20 0 0 0-157 0-157 0-11 9-20 20-20z","M337 307c11 0 20 9 20 20 0 156 0 104 0 157 0 11-9 20-20 20-11 0-20-9-20-20 0 0 0-157 0-157 0-11 9-20 20-20z","M660 464c11 0 20 9 20 20 0 0 0 216 0 216 0 11-9 20-20 20s-20-9-20-20c0 0 0-216 0-216 0-11 9-20 20-20z","M396 308c0 0 3 0 3 0 8 3 5 1 10 5 1 1 1 1 7 7 0 0 143 143 143 143 6 6 6 6 7 7 8 8 8 20 0 28-8 8-20 8-28 0 0 0-157-157-157-157-8-8-8-20 0-28 5-5 8-5 15-5z","M279 523c0 0 3 0 3 0 8 3 5 1 10 5 8 8 8 20 0 28-1 1-2 2-3 3 0 0-38 38-38 38s-1 1-1 1c0 0-21 21-21 21s-2 2-2 2c0 0 65 65 65 65 8 8 8 20 0 28-8 8-20 8-28 0-1-1-1-1-7-7 0 0-58-58-58-58s-26 26-26 26c-3 3-7 7-10 10 0 0-28 28-28 28-8 8-20 8-28 0-8-8-8-20 0-28 0 0 65-65 65-65s-58-58-58-58c-2-2-4-4-6-6 0 0-0-0-0-0-8-8-8-20 0-28 5-5 8-5 15-5 0 0 3 0 3 0 8 3 5 1 10 5 0 0 65 65 65 65 22-22 43-43 65-65 5-5 8-5 15-5z","M337 523c11 0 20 9 20 20 0 0 0 157 0 157 0 11-9 20-20 20-11 0-20-9-20-20 0 0 0-157 0-157 0-11 9-20 20-20z","M553 523c0 0 3 0 3 0 8 3 5 1 10 5 8 8 8 20 0 28-1 1-1 1-7 7-50 50-100 100-150 150-8 8-20 8-28 0-8-8-8-20 0-28 1-1 2-2 3-3 51-52 103-103 154-154 5-5 8-5 15-5z","M337 523c11 0 20 9 20 20 0 0 0 157 0 157 0 11-9 20-20 20-11 0-20-9-20-20 0 0 0-157 0-157 0-11 9-20 20-20z","M553 523c0 0 3 0 3 0 8 3 5 1 10 5 8 8 8 20 0 28-1 1-1 1-7 7-50 50-100 100-150 150-8 8-20 8-28 0-8-8-8-20 0-28 1-1 2-2 3-3 51-52 103-103 154-154 5-5 8-5 15-5z","M689 307c11 0 20 9 20 20 0 0 0 137 0 137 0 5-2 10-6 14 0 0-20 20-20 20-4 4-9 6-14 6 0 0-59 0-59 0-11 0-20-9-20-20 0-11 9-20 20-20 0 0 51 0 51 0s8-8 8-8c0 0 0-129 0-129 0-11 9-20 20-20z","M905 464c11 0 20 9 20 20 0 11-9 20-20 20 0 0-157 0-157 0-11 0-20-9-20-20 0-11 9-20 20-20 0 0 157 0 157 0z","M905 533c11 0 20 9 20 20 0 11-9 20-20 20 0 0-157 0-157 0-11 0-20-9-20-20 0-11 9-20 20-20 0 0 157 0 157 0z","M905 395c11 0 20 9 20 20 0 11-9 20-20 20 0 0-157 0-157 0-11 0-20-9-20-20 0-11 9-20 20-20 0 0 157 0 157 0z","M906 308c0 0 3 0 3 0 8 3 5 1 10 5 8 8 8 20 0 28 0 0-20 20-20 20-4 4-9 6-14 6 0 0-137 0-137 0-11 0-20-9-20-20s9-20 20-20c0 0 129 0 129 0s14-14 14-14c5-5 8-5 15-5z","M905 601c11 0 20 9 20 20 0 0 0 59 0 59 0 5-2 10-6 14 0 0-20 20-20 20-4 4-9 6-14 6 0 0-137 0-137 0-11 0-20-9-20-20 0 0 0-78 0-78 0-11 9-20 20-20 0 0 157 0 157 0zM885 640c0 0-118 0-118 0s0 39 0 39c0 0 109 0 109 0s8-8 8-8c0 0 0-31 0-31z"],c:["rgb(237, 243, 221)","rgb(8, 131, 88)","rgb(8, 131, 88)","rgb(8, 131, 88)","rgb(155, 205, 188)","rgb(8, 131, 88)","rgb(155, 205, 188)","rgb(8, 131, 88)","rgb(8, 131, 88)","rgb(155, 205, 188)","rgb(155, 205, 188)","rgb(8, 131, 88)","rgb(8, 131, 88)","rgb(155, 205, 188)","rgb(8, 131, 88)","rgb(8, 131, 88)","rgb(155, 205, 188)"]},xinColor:{p:["M976 0c4 0 8 2 11 5 4 4 7 7 11 11l21 21c3 3 5 7 5 11v928c0 4-2 8-5 11-4 4-7 7-11 11-5 5-9 9-14 14l-7 7c-3 3-7 5-11 5h-928c-4 0-8-2-11-5-4-4-7-7-11-11l-21-21c-3-3-5-7-5-11v-928c0-4 2-8 5-11 4-4 7-7 11-11 5-5 9-9 14-14l7-7c3-3 7-5 11-5h928z","M589 862c13 13 34 13 48 0l104-104 141-141 17-17 7-7c13-13 13-34-0-48-13-13-34-13-48-0l-269 269c-13 13-13 34 0 48zM600 851c-7-7-7-18-0-25l0-0 269-269c7-7 18-7 25 0 7 7 7 18 0 25l-0 0-11 11-19 19-162 162-53 53-24 24c-7 7-18 7-25-0z","M512 871c19 0 34-15 34-34v-270c0-19-15-34-34-34-19 0-34 15-34 34v270c0 19 15 34 34 34zM512 855c-10 0-17-8-18-17l-0-1v-270c0-10 8-18 18-18 10 0 17 8 18 17l0 1 0 37-0 121-0 111c0 10-8 18-18 18z","M436 862c13-13 13-34 0-48l-112-112 112-112c13-13 13-34 0-48-13-13-34-13-48 0l-112 112-110-110c-13-13-34-13-48 0-13 13-13 34-1 47l1 1 110 110-110 110c-13 13-13 34 0 48 13 13 34 13 48 0l110-110 112 112c13 13 34 13 48 0zM425 851c-7 7-18 7-25 0l-0-0-123-123-121 121c-7 7-18 7-25-0-7-7-7-18-0-25l0-0 121-121-121-121c-7-7-7-18 0-25 7-7 18-7 25-0l0 0 121 121 123-123c7-7 18-7 25 0 7 7 7 18 0 25l-0 0-123 123 123 123c7 7 7 18 0 25l-0 0z","M589 170c13-13 34-13 48-0 190 190 205 205 269 269 13 13 13 34-0 48-13 13-34 13-48 0l-269-269c-13-13-13-34 0-48z","M512 158c19 0 34 15 34 34 0 269 0 179 0 270 0 19-15 34-34 34-19 0-34-15-34-34v-270c0-19 15-34 34-34z","M388 168c13-13 34-13 48 0 13 13 13 34 0 48l-112 112 112 112c13 13 13 34 0 48-13 13-34 13-48 0l-112-112-110 110c-13 13-34 13-48-0-13-13-13-34-1-47l1-1 110-110-110-110c-13-13-13-34 0-48 13-13 34-13 48-0l110 110 112-112z"],c:["rgb(9, 131, 88)","rgb(237, 243, 221)","rgb(237, 243, 221)","rgb(237, 243, 221)","rgb(237, 243, 221)","rgb(237, 243, 221)","rgb(237, 243, 221)"]},sortDescending:"M723 469c-256 0-179 0-435 0-24 0-43 19-43 43s19 43 43 43c256 0 179 0 435 0 24 0 43-19 43-43s-19-43-43-43zM603 725c-256 0 61 0-195 0-24 0-43 19-43 43s19 43 43 43c256 0-61 0 195 0 24 0 43-19 43-43s-19-43-43-43zM856 213c-256 0-432 0-688 0-24 0-43 19-43 43s19 43 43 43c256 0 432 0 688 0 24 0 43-19 43-43s-19-43-43-43z",sortAscending:"M301 555c256 0 179 0 435 0 24 0 43-19 43-43s-19-43-43-43c-256 0-179 0-435 0-24 0-43 19-43 43s19 43 43 43zM421 299c256 0-61 0 195 0 24 0 43-19 43-43s-19-43-43-43c-256 0 61 0-195 0-24 0-43 19-43 43s19 43 43 43zM168 811c256 0 432 0 688 0 24 0 43-19 43-43s-19-43-43-43c-256 0-432 0-688 0-24 0-43 19-43 43s19 43 43 43z",sidebar:"M213 85c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-597c0-35-14-67-38-90s-55-38-90-38zM427 853v-683h384c12 0 22 5 30 13s13 18 13 30v597c0 12-5 22-13 30s-18 13-30 13zM341 171v683h-128c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13z",calendar:"M299 85v43h-85c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-597c0-35-14-67-38-90s-55-38-90-38h-85v-43c0-24-19-43-43-43s-43 19-43 43v43h-256v-43c0-24-19-43-43-43s-43 19-43 43zM853 384h-683v-128c0-12 5-22 13-30s18-13 30-13h85v43c0 24 19 43 43 43s43-19 43-43v-43h256v43c0 24 19 43 43 43s43-19 43-43v-43h85c12 0 22 5 30 13s13 18 13 30zM171 469h683v384c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30z",editDoc:"M469 128h-299c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-299c0-24-19-43-43-43s-43 19-43 43v299c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h299c24 0 43-19 43-43s-19-43-43-43zM759 77l-405 405c-5 5-9 12-11 20l-43 171c-2 6-2 14 0 21 6 23 29 37 52 31l171-43c7-2 14-6 20-11l405-405c26-26 39-60 39-94s-13-68-39-94-60-39-94-39-68 13-94 39zM819 137c9-9 22-14 34-14s24 5 34 14 14 22 14 34-5 24-14 34l-397 397-90 23 23-90z",edit:"M695 98l-576 576c-5 5-9 11-11 19l-64 235c-2 7-2 15 0 22 6 23 30 36 52 30l235-64c7-2 13-6 19-11l576-576c32-32 48-74 48-115s-16-84-48-115-74-48-115-48-84 16-115 48zM755 158c15-15 35-23 55-23s40 8 55 23 23 35 23 55-8 40-23 55l-568 568-152 41 41-152z",web:"M723 469c-9-115-47-228-114-329 67 17 127 53 174 100 60 60 100 140 110 229zM609 884c63-95 104-207 114-329h171c-10 89-50 169-110 229-47 47-107 83-174 100zM301 555c9 115 47 228 114 329-67-17-127-53-174-100-60-60-100-140-110-229zM415 140c-63 95-104 207-114 329h-171c10-89 50-169 110-229 48-47 107-83 174-100zM512 43c0 0 0 0 0 0-130 0-247 53-332 137-85 85-137 202-137 332s53 247 137 332c85 85 202 137 332 137 0 0 0 0 0 0 130-0 247-53 332-137 85-85 137-202 137-332s-53-247-137-332c-85-85-202-137-332-137zM638 555c-11 119-56 229-126 318-74-95-115-206-126-318zM512 151c74 95 115 206 126 318h-251c11-119 56-229 126-318z",info:"M981 512c0-130-53-247-137-332s-202-137-332-137-247 53-332 137-137 202-137 332 53 247 137 332 202 137 332 137 247-53 332-137 137-202 137-332zM896 512c0 106-43 202-112 272s-165 112-272 112-202-43-272-112-112-165-112-272 43-202 112-272 165-112 272-112 202 43 272 112 112 165 112 272zM555 683v-171c0-24-19-43-43-43s-43 19-43 43v171c0 24 19 43 43 43s43-19 43-43zM512 384c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43z",loading:"M469 85v171c0 24 19 43 43 43s43-19 43-43v-171c0-24-19-43-43-43s-43 19-43 43zM469 768v171c0 24 19 43 43 43s43-19 43-43v-171c0-24-19-43-43-43s-43 19-43 43zM180 241l121 121c17 17 44 17 60 0s17-44 0-60l-121-121c-17-17-44-17-60 0s-17 44 0 60zM663 723l121 121c17 17 44 17 60 0s17-44 0-60l-121-121c-17-17-44-17-60 0s-17 44 0 60zM85 555h171c24 0 43-19 43-43s-19-43-43-43h-171c-24 0-43 19-43 43s19 43 43 43zM768 555h171c24 0 43-19 43-43s-19-43-43-43h-171c-24 0-43 19-43 43s19 43 43 43zM241 844l121-121c17-17 17-44 0-60s-44-17-60 0l-121 121c-17 17-17 44 0 60s44 17 60 0zM723 361l121-121c17-17 17-44 0-60s-44-17-60 0l-121 121c-17 17-17 44 0 60s44 17 60 0z",mail:"M128 338l360 252c15 10 34 10 49 0l360-252v430c0 12-5 22-13 30s-18 13-30 13h-683c-12 0-22-5-30-13s-13-18-13-30zM43 255c0 0 0 1 0 1v511c0 35 15 67 38 90s55 38 90 38h683c35 0 67-15 90-38s38-55 38-90v-511c0-0 0-1 0-1-0-35-15-67-38-90-23-23-55-38-90-38h-683c-35 0-67 15-90 38-23 23-37 55-38 90zM891 237l-379 266-379-266c2-4 5-8 8-11 8-8 19-13 30-13h683c12 0 22 5 30 13 3 3 6 7 8 11z",resize:"M175 102l271 271c20 20 20 52 0 72s-52 20-72 0l-271-271v184c0 28-23 51-51 51s-51-23-51-51v-307c0-7 1-14 4-20s6-12 11-17c0-0 0-0 0-0 5-5 10-8 17-11 6-3 13-4 20-4h307c28 0 51 23 51 51s-23 51-51 51h-184zM849 922l-271-271c-20-20-20-52 0-72s52-20 72 0l271 271v-184c0-28 23-51 51-51s51 23 51 51v307c0 28-23 51-51 51h-307c-28 0-51-23-51-51s23-51 51-51h184z",menu:"M128 555h768c24 0 43-19 43-43s-19-43-43-43h-768c-24 0-43 19-43 43s19 43 43 43zM128 299h768c24 0 43-19 43-43s-19-43-43-43h-768c-24 0-43 19-43 43s19 43 43 43zM128 811h768c24 0 43-19 43-43s-19-43-43-43h-768c-24 0-43 19-43 43s19 43 43 43z",message:"M939 640v-427c0-35-14-67-38-90s-55-38-90-38h-597c-35 0-67 14-90 38s-38 55-38 90v683c0 11 4 22 13 30 17 17 44 17 60 0l158-158h494c35 0 67-14 90-38s38-55 38-90zM853 640c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22 5-30 13l-98 98v-580c0-12 5-22 13-30s18-13 30-13h597c12 0 22 5 30 13s13 18 13 30z",blog:{p:["M848 517c0-23 19-42 42-43l1-0c23 0 42 19 43 42l0 1v128c0 35-14 67-37 90l-1 1c-23 23-55 37-89 38l-1 0h-494l-158 158c-17 17-44 17-60 0-8-8-12-19-12-29l-0-1v-683c0-35 14-67 38-90 23-23 55-37 89-38l1-0h299c24 0 43 19 43 43 0 23-19 42-42 43l-1 0h-299c-12 0-22 5-30 12l-0 0c-8 8-12 18-12 29l-0 1v580l98-98c8-8 18-12 29-12l1-0h512c12 0 22-5 30-13 8-8 12-18 12-29l0-1v-128zM797 39l-352 352c-5 5-9 12-11 20l-43 171c-2 6-2 14 0 21 6 23 29 37 52 31l171-43c7-2 14-6 20-11l352-352c26-26 39-60 39-94s-13-68-39-94c-26-26-60-39-94-39s-68 13-94 39zM857 99c9-9 22-14 34-14s24 5 34 14c9 9 14 22 14 34s-5 24-14 34l-344 344-90 23 23-90 344-344z","M292 251h163c24 0 43 19 43 43s-19 43-43 43h-163c-24 0-43-19-43-43s19-43 43-43z","M292 407h67c24 0 43 19 43 43s-19 43-43 43h-67c-24 0-43-19-43-43s19-43 43-43z"]},phone:"M981 722c1-30-10-60-29-83-20-24-48-41-82-46-34-4-72-13-110-28-18-7-38-9-57-7-28 3-56 15-78 36l-31 31c-76-48-143-114-196-196l31-31c14-14 24-31 30-49 9-27 9-57-2-86-12-32-22-70-27-111-4-30-19-57-41-77-23-21-54-33-86-33h-128c-4 0-8 0-12 1-35 3-66 20-87 45s-32 58-29 94c13 131 58 266 137 388 64 103 156 197 269 269 110 72 243 122 388 138 4 0 8 1 12 1 35-0 67-15 90-38s37-55 37-90zM896 722v128c0 12-5 23-12 30s-18 13-30 13c-134-14-254-59-353-124-104-66-186-151-243-243-72-112-113-234-125-351-1-11 3-22 10-31s17-14 29-15l132-0c12-0 22 4 29 11 7 7 12 16 14 26 6 46 17 90 32 129 3 9 3 19 0 28-2 6-6 12-10 17l-54 54c-14 14-16 35-7 51 68 119 164 211 272 272 17 9 38 6 51-7l54-54c7-7 16-11 26-12 6-1 13 0 20 3 44 16 88 27 129 32 10 1 20 7 26 15 6 8 10 18 10 29z",pieChart:"M866 661c-41 98-118 169-209 206s-196 39-294-2-169-118-206-209-39-196 2-294c40-94 113-165 200-202 22-9 31-35 22-56s-35-31-56-22c-106 46-196 132-245 247-50 119-48 248-3 359s133 205 252 256 248 48 359 3 205-133 256-252c9-22-1-47-23-56s-47 1-56 23zM894 469h-339v-339c89 10 169 50 229 110s100 140 110 229zM981 512c0-130-53-247-137-332s-202-137-332-137c-24 0-43 19-43 43v427c0 24 19 43 43 43h427c24 0 43-19 43-43z",search:"M684 677c-1 1-3 2-4 4s-3 3-4 4c-54 52-127 84-207 84-82 0-157-33-211-87s-87-129-87-211 33-157 87-211 129-87 211-87 157 33 211 87 87 129 87 211c0 80-32 153-84 207zM926 866l-157-157c53-66 84-149 84-240 0-106-43-202-112-272s-166-112-272-112-202 43-272 112-112 166-112 272 43 202 112 272 166 112 272 112c91 0 174-31 240-84l157 157c17 17 44 17 60 0s17-44 0-60z",send:"M980 97c2-6 2-13 1-20-1-5-3-10-6-14-3-4-6-8-10-11-5-4-11-6-16-8s-12-1-18-0c-2 0-4 1-5 1l-1 0-852 298c-11 4-20 12-25 23-10 22 0 47 22 56l369 164 164 369c5 10 13 19 25 23 22 8 47-4 54-26l298-852c0-1 1-2 1-3zM460 504l-259-115 575-201zM837 248l-201 575-115-259z",server:"M171 43c-35 0-67 14-90 38s-38 55-38 90v171c0 35 14 67 38 90s55 38 90 38h683c35 0 67-14 90-38s38-55 38-90v-171c0-35-14-67-38-90s-55-38-90-38zM171 128h683c12 0 22 5 30 13s13 18 13 30v171c0 12-5 22-13 30s-18 13-30 13h-683c-12 0-22-5-30-13s-13-18-13-30v-171c0-12 5-22 13-30s18-13 30-13zM171 555c-35 0-67 14-90 38s-38 55-38 90v171c0 35 14 67 38 90s55 38 90 38h683c35 0 67-14 90-38s38-55 38-90v-171c0-35-14-67-38-90s-55-38-90-38zM171 640h683c12 0 22 5 30 13s13 18 13 30v171c0 12-5 22-13 30s-18 13-30 13h-683c-12 0-22-5-30-13s-13-18-13-30v-171c0-12 5-22 13-30s18-13 30-13zM256 299c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43zM256 811c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43z",graphUp:"M725 299h153l-302 302-183-183c-17-17-44-17-60 0l-320 320c-17 17-17 44 0 60s44 17 60 0l290-290 183 183c17 17 44 17 60 0l333-333v153c0 24 19 43 43 43s43-19 43-43v-256c0-6-1-11-3-16s-5-10-9-14c-0-0-0-0-0-0-4-4-9-7-14-9-5-2-11-3-16-3h-256c-24 0-43 19-43 43s19 43 43 43z",copy:"M469 341c-35 0-67 14-90 38s-38 55-38 90v384c0 35 14 67 38 90s55 38 90 38h384c35 0 67-14 90-38s38-55 38-90v-384c0-35-14-67-38-90s-55-38-90-38zM469 427h384c12 0 22 5 30 13s13 18 13 30v384c0 12-5 22-13 30s-18 13-30 13h-384c-12 0-22-5-30-13s-13-18-13-30v-384c0-12 5-22 13-30s18-13 30-13zM213 597h-43c-12 0-22-5-30-13s-13-18-13-30v-384c0-12 5-22 13-30s18-13 30-13h384c12 0 22 5 30 13s13 18 13 30v43c0 24 19 43 43 43s43-19 43-43v-43c0-35-14-67-38-90s-55-38-90-38h-384c-35 0-67 14-90 38s-38 55-38 90v384c0 35 14 67 38 90s55 38 90 38h43c24 0 43-19 43-43s-19-43-43-43z",alignCenter:"M128 128h768v86h-768v-86zM298 298h428v86h-428v-86zM128 554v-84h768v84h-768zM128 896v-86h768v86h-768zM298 640h428v86h-428v-86z",alignLeft:"M128 128h768v86h-768v-86zM128 896v-86h768v86h-768zM128 554v-84h768v84h-768zM640 298v86h-512v-86h512zM640 640v86h-512v-86h512z",alignRight:"M128 128h768v86h-768v-86zM384 384v-86h512v86h-512zM128 554v-84h768v84h-768zM384 726v-86h512v86h-512zM128 896v-86h768v86h-768z",fontBold:"M576 662q28 0 46-19t18-45-18-45-46-19h-150v128h150zM426 278v128h128q26 0 45-19t19-45-19-45-45-19h-128zM666 460q92 42 92 146 0 68-45 115t-113 47h-302v-598h268q72 0 121 50t49 122-70 118z",blockOutdent:"M470 554v-84h426v84h-426zM470 384v-86h426v86h-426zM128 128h768v86h-768v-86zM128 896v-86h768v86h-768zM128 512l170-170v340zM470 726v-86h426v86h-426z",blockIndent:"M470 554v-84h426v84h-426zM470 384v-86h426v86h-426zM128 128h768v86h-768v-86zM470 726v-86h426v86h-426zM128 342l170 170-170 170v-340zM128 896v-86h768v86h-768z",fontItalic:"M426 170h342v128h-120l-144 342h94v128h-342v-128h120l144-342h-94v-128z",listBullet:"M298 214h598v84h-598v-84zM298 554v-84h598v84h-598zM298 810v-84h598v84h-598zM170 704q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zM170 192q26 0 45 18t19 46-19 46-45 18-45-18-19-46 19-46 45-18zM170 448q26 0 45 18t19 46-19 46-45 18-45-18-19-46 19-46 45-18z",listNumber:"M298 554v-84h598v84h-598zM298 810v-84h598v84h-598zM298 214h598v84h-598v-84zM86 470v-44h128v40l-78 88h78v44h-128v-40l76-88h-76zM128 342v-128h-42v-44h84v172h-42zM86 726v-44h128v172h-128v-44h84v-20h-42v-44h42v-20h-84z",fontUnderline:"M214 810h596v86h-596v-86zM512 726q-106 0-181-75t-75-181v-342h106v342q0 62 44 105t106 43 106-43 44-105v-342h106v342q0 106-75 181t-181 75z",airplay:"M213 683h-43c-12 0-22-5-30-13s-13-18-13-30v-427c0-12 5-22 13-30s18-13 30-13h683c12 0 22 5 30 13s13 18 13 30v427c0 12-5 22-13 30s-18 13-30 13h-43c-24 0-43 19-43 43s19 43 43 43h43c35 0 67-14 90-38s38-55 38-90v-427c0-35-14-67-38-90s-55-38-90-38h-683c-35 0-67 14-90 38s-38 55-38 90v427c0 35 14 67 38 90s55 38 90 38h43c24 0 43-19 43-43s-19-43-43-43zM545 613c-1-2-3-4-5-5-18-15-45-13-60 5l-213 256c-6 7-10 17-10 27 0 24 19 43 43 43h427c10 0 19-3 27-10 18-15 21-42 5-60zM512 707l122 147h-244z",bell:"M725 341c0 171 40 278 79 341h-585c39-63 79-170 79-341 0-59 24-112 62-151s92-62 151-62 112 24 151 62 62 92 62 151zM811 341c0-82-33-157-87-211s-129-87-211-87-157 33-211 87-87 129-87 211c0 261-102 343-109 349-19 13-24 39-11 59 8 12 22 19 35 19h768c24 0 43-19 43-43 0-14-7-27-18-35-8-6-110-87-110-349zM549 875c-6 10-15 17-26 20s-22 2-32-4c-7-4-12-9-15-15-12-20-38-28-58-16s-28 38-16 58c11 19 27 35 47 47 31 18 65 21 97 13s60-29 78-59c12-20 5-47-15-58s-47-5-58 15z",bellOff:"M549 875c-6 10-15 17-26 20s-22 2-32-4c-7-4-12-9-15-15-12-20-38-28-58-16s-28 38-16 58c11 19 27 35 47 47 31 18 65 21 97 13s60-29 78-59c12-20 5-47-15-58s-47-5-58 15zM811 340c-0-82-33-156-87-210-54-54-129-88-211-88-62-0-119 19-166 50-19 13-25 40-11 59s40 25 59 11c33-22 73-35 116-36 62 0 115 24 153 63 38 39 62 92 62 150-2 71 7 148 28 225 6 23 30 36 52 30s36-30 30-52c-19-69-27-139-25-201 0-0 0-0 0-1 0-0 0-0 0-0zM298 359l324 324h-403c37-61 76-163 79-324zM13 73l207 207c-5 21-7 42-6 62 0 261-102 343-109 348-19 13-24 39-11 59 8 12 22 19 35 19h580l243 243c17 17 44 17 60 0s17-44 0-60l-939-939c-17-17-44-17-60 0s-17 44 0 60z",bookmark:"M786 931c7 5 15 8 25 8 24 0 43-19 43-43v-683c0-35-14-67-38-90s-55-38-90-38h-427c-35 0-67 14-90 38s-38 55-38 90v683c-0 8 3 17 8 25 14 19 40 24 60 10l274-196zM768 813l-231-165c-15-11-35-10-50 0l-231 165v-600c0-12 5-22 13-30s18-13 30-13h427c12 0 22 5 30 13s13 18 13 30z",camera:"M1024 811v-469c0-35-14-67-38-90s-55-38-90-38h-148l-73-109c-8-12-21-19-35-19h-256c-14 0-27 7-35 19l-73 109h-148c-35 0-67 14-90 38s-38 55-38 90v469c0 35 14 67 38 90s55 38 90 38h768c35 0 67-14 90-38s38-55 38-90zM939 811c0 12-5 22-13 30s-18 13-30 13h-768c-12 0-22-5-30-13s-13-18-13-30v-469c0-12 5-22 13-30s18-13 30-13h171c15 0 28-7 35-19l73-109h210l73 109c8 12 22 19 35 19h171c12 0 22 5 30 13s13 18 13 30zM725 555c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM640 555c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90z",check:"M823 226l-439 439-183-183c-17-17-44-17-60 0s-17 44 0 60l213 213c17 17 44 17 60 0l469-469c17-17 17-44 0-60s-44-17-60 0z",chevronDown:"M226 414l256 256c17 17 44 17 60 0l256-256c17-17 17-44 0-60s-44-17-60 0l-226 226-226-226c-17-17-44-17-60 0s-17 44 0 60z",chevronLeft:"M670 738l-226-226 226-226c17-17 17-44 0-60s-44-17-60 0l-256 256c-17 17-17 44 0 60l256 256c17 17 44 17 60 0s17-44 0-60z",chevronRight:"M414 798l256-256c17-17 17-44 0-60l-256-256c-17-17-44-17-60 0s-17 44 0 60l226 226-226 226c-17 17-17 44 0 60s44 17 60 0z",chevronUp:"M798 610l-256-256c-17-17-44-17-60 0l-256 256c-17 17-17 44 0 60s44 17 60 0l226-226 226 226c17 17 44 17 60 0s17-44 0-60z",code:"M713 798l256-256c17-17 17-44 0-60l-256-256c-17-17-44-17-60 0s-17 44 0 60l226 226-226 226c-17 17-17 44 0 60s44 17 60 0zM311 226l-256 256c-17 17-17 44 0 60l256 256c17 17 44 17 60 0s17-44 0-60l-226-226 226-226c17-17 17-44 0-60s-44-17-60 0z",undo:"M896 853v-299c0-59-24-112-62-151s-92-62-151-62h-409l141-141c17-17 17-44 0-60s-44-17-60 0l-213 213c-4 4-7 9-9 14s-3 11-3 16 1 11 3 16c2 5 5 10 9 14l213 213c17 17 44 17 60 0s17-44 0-60l-141-141h409c35 0 67 14 90 38s38 55 38 90v299c0 24 19 43 43 43s43-19 43-43z",redo:"M213 853v-299c0-35 14-67 38-90s55-38 90-38h409l-141 141c-17 17-17 44 0 60s44 17 60 0l213-213c4-4 7-9 9-14 4-10 4-22 0-33-2-5-5-10-9-14l-213-213c-17-17-44-17-60 0s-17 44 0 60l141 141h-409c-59 0-112 24-151 62s-62 92-62 151v299c0 24 19 43 43 43s43-19 43-43z",crop:"M302 302l381-3c11 0 22 5 30 13s13 18 13 30v384h-384c-12 0-22-5-30-13s-13-18-13-30zM43 304l174-1-3 380c0 36 14 68 38 91s55 38 90 38h384v171c0 24 19 43 43 43s43-19 43-43v-171h171c24 0 43-19 43-43s-19-43-43-43h-171v-384c0-35-14-67-38-90s-55-38-91-38l-380 3 1-174c0-24-19-43-42-43s-43 19-43 42l-2 175-175 2c-24 0-42 19-42 43s19 42 43 42z",database:"M171 213c0 0 0-4 9-12 10-10 29-21 56-31 64-25 163-42 277-42s213 17 277 42c27 11 45 22 56 31 9 8 9 12 9 12 0 0-0 4-9 12-10 10-29 21-56 31-64 25-163 42-277 42s-213-17-277-42c-27-11-45-22-56-31-9-8-9-12-9-12zM853 620v191c-2 4-4 8-9 12-10 10-29 21-56 31-64 25-163 42-276 42s-213-17-276-42c-27-10-45-21-56-31-5-5-8-8-8-10l-0-193c11 5 22 10 33 15 77 30 187 48 307 48s231-18 307-48c12-5 23-10 34-15zM853 321v190c0 0 0 0 0 1-2 4-4 8-9 12-10 10-29 21-56 31-64 25-163 42-276 42s-213-17-276-42c-27-10-45-21-56-31-5-5-8-8-8-10-0-2-0-3-0-5l-0-188c11 5 22 10 34 15 77 30 187 48 308 48s231-18 308-48c12-5 23-10 34-15zM85 213v597c0 2 0 5 0 7 2 28 18 51 37 68 21 19 50 35 82 48 77 30 187 48 307 48s231-18 307-48c32-13 61-28 82-48 18-17 34-40 37-68 0-2 0-5 0-7v-597c0-2-0-5-0-7-2-28-18-51-36-68-21-20-50-35-82-48-77-30-187-48-308-48s-231 18-308 48c-32 13-61 28-82 48-18 17-34 40-36 68-0 2-0 5-0 7z",download:"M853 640v171c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-171c0-24-19-43-43-43s-43 19-43 43v171c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-171c0-24-19-43-43-43s-43 19-43 43zM555 537v-409c0-24-19-43-43-43s-43 19-43 43v409l-141-141c-17-17-44-17-60 0s-17 44 0 60l213 213c4 4 9 7 14 9s11 3 16 3c11 0 22-4 30-13l213-213c17-17 17-44 0-60s-44-17-60 0z",downloadCloud:"M469 512v281l-98-98c-17-17-44-17-60 0s-17 44 0 60l171 171c4 4 9 7 14 9 10 4 22 4 33 0 5-2 10-5 14-9l171-171c17-17 17-44 0-60s-44-17-60 0l-98 98v-281c0-24-19-43-43-43s-43 19-43 43zM915 807c58-41 94-101 105-165s-2-133-43-191c-35-50-85-84-140-99-22-6-46-10-69-10h-22c-31-88-91-158-167-203-85-50-188-68-291-41s-185 92-235 176-68 188-41 291c16 62 46 116 85 159 16 17 43 19 60 3s19-43 3-60c-30-33-53-75-65-123-21-80-7-160 32-226s103-117 183-137 160-7 226 32 117 103 137 183c5 19 22 32 41 32h54c16 0 31 2 47 6 37 10 70 33 93 66 27 39 36 84 29 127s-31 83-70 110c-19 14-24 40-10 59s40 24 59 10z",externalLink:"M725 555v256c0 12-5 22-13 30s-18 13-30 13h-469c-12 0-22-5-30-13s-13-18-13-30v-469c0-12 5-22 13-30s18-13 30-13h256c24 0 43-19 43-43s-19-43-43-43h-256c-35 0-67 14-90 38s-38 55-38 90v469c0 35 14 67 38 90s55 38 90 38h469c35 0 67-14 90-38s38-55 38-90v-256c0-24-19-43-43-43s-43 19-43 43zM457 627l397-397v153c0 24 19 43 43 43s43-19 43-43v-256c0-6-1-11-3-16s-5-10-9-14c-0-0-0-0-0-0-4-4-9-7-14-9-5-2-11-3-16-3h-256c-24 0-43 19-43 43s19 43 43 43h153l-397 397c-17 17-17 44 0 60s44 17 60 0z",eye:"M5 493c-6 12-6 26 0 38 0 0 17 34 48 79 19 28 44 61 75 95 38 42 86 85 142 119 68 42 150 72 243 72s175-30 243-72c56-35 103-78 142-119 31-34 56-67 75-95 31-45 48-79 48-79 6-12 6-26 0-38 0 0-17-34-48-79-19-28-44-61-75-95-38-42-86-85-142-119-68-42-150-72-243-72s-175 30-243 72c-56 35-103 78-142 119-31 34-56 67-75 95-31 45-48 79-48 79zM91 512c7-12 17-29 31-49 17-25 40-55 68-85 34-38 76-75 123-104 58-36 124-59 198-59s141 24 198 59c48 30 89 67 123 104 27 30 50 60 68 85 14 20 24 37 31 49-7 12-17 29-31 49-17 25-40 55-68 85-34 38-76 75-123 104-58 36-124 59-198 59s-141-24-198-59c-48-30-89-67-123-104-27-30-50-60-68-85-14-20-24-37-31-49zM683 512c0-47-19-90-50-121s-74-50-121-50-90 19-121 50-50 74-50 121 19 90 50 121 74 50 121 50 90-19 121-50 50-74 50-121zM597 512c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60 10-45 25-60 37-25 60-25 45 10 60 25 25 37 25 60z",eyeOff:"M432 222c28-6 55-9 79-9 75 0 141 24 199 59 48 30 89 67 123 104 27 30 50 60 68 85 14 20 24 37 31 49-23 41-49 78-76 108-15 18-13 45 5 60s45 13 60-5c35-41 69-90 97-144 6-12 7-26 1-39 0 0-17-34-48-79-19-28-44-61-75-95-38-42-86-85-142-119-68-42-150-72-243-72-31-0-66 3-100 11-23 5-37 28-32 51s28 37 51 32zM428 488l108 108c-8 3-16 4-24 4-22 1-44-7-61-23s-26-38-27-59c-0-10 1-20 4-30zM255 316l109 109c-19 29-27 63-26 97 2 44 20 87 54 119s79 47 122 46c30-1 59-10 85-26l99 99c-59 34-124 51-187 52-74 0-140-24-198-59-48-30-89-67-123-104-27-30-50-60-68-85-14-20-24-37-31-49 45-78 101-144 164-197zM13 73l182 182c-74 63-139 143-190 237-6 12-7 26-1 39 0 0 17 34 48 79 19 28 44 61 75 95 38 42 86 85 142 119 68 42 150 72 244 72 85-1 171-26 248-75l191 191c17 17 44 17 60 0s17-44 0-60l-379-379c-0-0-0-0-0-0l-180-180c-0-0-1-1-1-1l-379-379c-17-17-44-17-60 0s-17 44 0 60z",fastForward:"M597 723v-423l272 211zM128 723v-423l272 211zM112 844l384-299c11-8 16-21 16-33v298c0 24 19 43 43 43 10 0 19-3 26-9l384-299c19-14 22-41 7-60-2-3-5-6-7-7l-384-299c-19-14-45-11-60 7-6 8-9 17-9 26v298c-0-9-3-18-9-26-2-3-5-6-7-7l-384-299c-19-14-45-11-60 7-6 8-9 17-9 26v597c0 24 19 43 43 43 10 0 19-3 26-9z",file:"M750 341h-153v-153zM883 354l-299-299c-4-4-9-7-14-9s-11-3-16-3h-299c-35 0-67 14-90 38s-38 55-38 90v683c0 35 14 67 38 90s55 38 90 38h512c35 0 67-14 90-38s38-55 38-90v-469c0-12-5-22-13-30zM512 128v256c0 24 19 43 43 43h256v427c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22-5-30-13s-13-18-13-30v-683c0-12 5-22 13-30s18-13 30-13z",fileMinus:"M750 299h-110v-110zM883 311l-256-256c-4-4-9-7-14-9s-11-3-16-3h-341c-35 0-67 14-90 38s-38 55-38 90v683c0 35 14 67 38 90s55 38 90 38h512c35 0 67-14 90-38s38-55 38-90v-512c0-12-5-22-13-30zM555 128v213c0 24 19 43 43 43h213v469c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22-5-30-13s-13-18-13-30v-683c0-12 5-22 13-30s18-13 30-13zM384 683h256c24 0 43-19 43-43s-19-43-43-43h-256c-24 0-43 19-43 43s19 43 43 43z",filePlus:"M750 299h-110v-110zM883 311l-256-256c-4-4-9-7-14-9s-11-3-16-3h-341c-35 0-67 14-90 38s-38 55-38 90v683c0 35 14 67 38 90s55 38 90 38h512c35 0 67-14 90-38s38-55 38-90v-512c0-12-5-22-13-30zM555 128v213c0 24 19 43 43 43h213v469c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22-5-30-13s-13-18-13-30v-683c0-12 5-22 13-30s18-13 30-13zM384 683h85v85c0 24 19 43 43 43s43-19 43-43v-85h85c24 0 43-19 43-43s-19-43-43-43h-85v-85c0-24-19-43-43-43s-43 19-43 43v85h-85c-24 0-43 19-43 43s19 43 43 43z",fileText:"M750 299h-110v-110zM883 311l-256-256c-4-4-9-7-14-9s-11-3-16-3h-341c-35 0-67 14-90 38s-38 55-38 90v683c0 35 14 67 38 90s55 38 90 38h512c35 0 67-14 90-38s38-55 38-90v-512c0-12-5-22-13-30zM555 128v213c0 24 19 43 43 43h213v469c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22-5-30-13s-13-18-13-30v-683c0-12 5-22 13-30s18-13 30-13zM683 512h-341c-24 0-43 19-43 43s19 43 43 43h341c24 0 43-19 43-43s-19-43-43-43zM683 683h-341c-24 0-43 19-43 43s19 43 43 43h341c24 0 43-19 43-43s-19-43-43-43zM427 341h-85c-24 0-43 19-43 43s19 43 43 43h85c24 0 43-19 43-43s-19-43-43-43z",filter:"M847 171l-282 333c-6 7-10 17-10 28v295l-85-43v-253c0-10-3-19-10-28l-282-333zM939 85h-853c-24 0-43 19-43 43 0 11 4 20 10 28l331 392v263c0 17 9 31 24 38l171 85c21 11 47 2 57-19 3-6 5-13 4-19v-349l331-392c15-18 13-45-5-60-8-7-18-10-28-10z",flag:"M213 572v-421c19-9 58-23 128-23 55 0 101 18 155 40 53 21 113 46 186 46 55 0 97-7 128-17v421c-19 9-58 23-128 23-55 0-101-18-155-40-53-21-113-46-186-46-55 0-97 7-128 17zM213 939v-276c19-9 58-23 128-23 55 0 101 18 155 40 53 21 113 46 186 46 139 0 192-47 201-55 8-8 13-19 13-30v-512c0-24-19-43-43-43-11 0-22 4-29 12-4 3-42 31-141 31-55 0-101-18-155-40-53-21-113-46-186-46-139 0-192 47-201 55-8 8-13 19-13 30v811c0 24 19 43 43 43s43-19 43-43z",folder:"M981 811v-469c0-35-14-67-38-90s-55-38-90-38h-361l-73-109c-8-12-21-19-35-19h-213c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h683c35 0 67-14 90-38s38-55 38-90zM896 811c0 12-5 22-13 30s-18 13-30 13h-683c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h191l73 109c8 12 22 19 35 19h384c12 0 22 5 30 13s13 18 13 30z",folderMinus:"M981 811v-469c0-35-14-67-38-90s-55-38-90-38h-361l-73-109c-8-12-21-19-35-19h-213c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h683c35 0 67-14 90-38s38-55 38-90zM896 811c0 12-5 22-13 30s-18 13-30 13h-683c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h191l73 109c8 12 22 19 35 19h384c12 0 22 5 30 13s13 18 13 30zM384 640h256c24 0 43-19 43-43s-19-43-43-43h-256c-24 0-43 19-43 43s19 43 43 43z",folderPlus:"M981 811v-469c0-35-14-67-38-90s-55-38-90-38h-361l-73-109c-8-12-21-19-35-19h-213c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h683c35 0 67-14 90-38s38-55 38-90zM896 811c0 12-5 22-13 30s-18 13-30 13h-683c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h191l73 109c8 12 22 19 35 19h384c12 0 22 5 30 13s13 18 13 30zM384 640h85v85c0 24 19 43 43 43s43-19 43-43v-85h85c24 0 43-19 43-43s-19-43-43-43h-85v-85c0-24-19-43-43-43s-43 19-43 43v85h-85c-24 0-43 19-43 43s19 43 43 43z",help:"M981 512c0-130-53-247-137-332s-202-137-332-137-247 53-332 137-137 202-137 332 53 247 137 332 202 137 332 137 247-53 332-137 137-202 137-332zM896 512c0 106-43 202-112 272s-165 112-272 112-202-43-272-112-112-165-112-272 43-202 112-272 165-112 272-112 202 43 272 112 112 165 112 272zM428 398c8-22 24-39 44-49s43-11 65-4c20 7 35 20 45 37 8 13 12 28 12 44 0 7-2 13-5 20-3 7-9 14-16 21-30 30-78 47-78 47-22 7-34 32-27 54s32 34 54 27c0 0 66-22 111-67 12-12 23-26 32-43 9-17 14-37 14-58-0-31-9-61-24-87-20-33-51-60-90-74-44-16-91-12-130 7s-72 53-87 97c-8 22 4 47 26 54s47-4 54-26zM512 768c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43z",home:"M102 350c-10 8-16 20-16 34v469c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-469c-0-13-6-25-16-34l-384-299c-15-12-37-12-52 0zM683 896v-384c0-24-19-43-43-43h-256c-24 0-43 19-43 43v384h-128c-12 0-22-5-30-13s-13-18-13-30v-448l341-265 341 265v448c0 12-5 22-13 30s-18 13-30 13zM427 896v-341h171v341z",image:"M213 85c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-597c0-35-14-67-38-90s-55-38-90-38zM469 363c0-29-12-56-31-75s-46-31-75-31-56 12-75 31-31 46-31 75 12 56 31 75 46 31 75 31 56-12 75-31 31-46 31-75zM384 363c0 6-2 11-6 15s-9 6-15 6-11-2-15-6-6-9-6-15 2-11 6-15 9-6 15-6 11 2 15 6 6 9 6 15zM316 853l366-366 171 171v153c0 12-5 22-13 30s-18 13-30 13zM853 537l-141-141c-17-17-44-17-60 0l-454 454c-6-2-11-6-15-10-8-8-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h597c12 0 22 5 30 13s13 18 13 30z",layers:"M512 133l331 166-331 166-331-166zM493 47l-427 213c-21 11-30 36-19 57 4 9 11 15 19 19l427 213c12 6 26 6 38 0l427-213c21-11 30-36 19-57-4-9-11-15-19-19l-427-213c-12-6-26-6-38 0zM66 763l427 213c12 6 26 6 38 0l427-213c21-11 30-36 19-57s-36-30-57-19l-408 204-408-204c-21-11-47-2-57 19s-2 47 19 57zM66 550l427 213c12 6 26 6 38 0l427-213c21-11 30-36 19-57s-36-30-57-19l-408 204-408-204c-21-11-47-2-57 19s-2 47 19 57z",link:"M392 580c42 57 104 91 168 100s133-6 190-48c10-8 20-16 28-24l128-128c50-51 73-117 72-183s-27-131-78-180c-50-48-115-72-179-72-64 0-127 24-177 72l-74 73c-17 17-17 44-0 60s44 17 60 0l73-72c33-32 75-48 118-48 43-0 86 16 119 48 34 33 51 76 52 120s-15 88-47 121l-128 128c-5 5-11 11-18 16-38 28-83 38-127 32s-84-29-112-67c-14-19-41-23-60-9s-23 41-9 60zM632 444c-42-57-104-91-168-100s-133 6-190 48c-10 8-20 16-28 24l-128 128c-50 51-73 117-72 183s27 131 78 180c50 48 115 72 179 72 64-0 127-24 177-72l74-74c17-17 17-44 0-60s-44-17-60 0l-72 72c-33 32-75 48-118 48-43 0-86-16-119-48-34-33-51-76-52-120s15-88 47-121l128-128c5-5 11-11 18-16 38-28 83-38 127-32s84 29 112 67c14 19 41 23 60 9s23-41 9-60z",lock:"M213 512h597c12 0 22 5 30 13s13 18 13 30v299c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-299c0-12 5-22 13-30s18-13 30-13zM768 427v-128c0-71-29-135-75-181s-110-75-181-75-135 29-181 75-75 110-75 181v128h-43c-35 0-67 14-90 38s-38 55-38 90v299c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-299c0-35-14-67-38-90s-55-38-90-38zM341 427v-128c0-47 19-90 50-121s74-50 121-50 90 19 121 50 50 74 50 121v128z",logIn:"M640 171h171c12 0 22 5 30 13s13 18 13 30v597c0 12-5 22-13 30s-18 13-30 13h-171c-24 0-43 19-43 43s19 43 43 43h171c35 0 67-14 90-38s38-55 38-90v-597c0-35-14-67-38-90s-55-38-90-38h-171c-24 0-43 19-43 43s19 43 43 43zM537 469h-409c-24 0-43 19-43 43s19 43 43 43h409l-141 141c-17 17-17 44 0 60s44 17 60 0l213-213c4-4 7-9 9-14s3-11 3-16c0-6-1-11-3-16-2-5-5-10-9-14l-213-213c-17-17-44-17-60 0s-17 44 0 60z",logOut:"M384 853h-171c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h171c24 0 43-19 43-43s-19-43-43-43h-171c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h171c24 0 43-19 43-43s-19-43-43-43zM793 469h-409c-24 0-43 19-43 43s19 43 43 43h409l-141 141c-17 17-17 44 0 60s44 17 60 0l213-213c4-4 7-9 9-14 6-15 3-34-9-47l-213-213c-17-17-44-17-60 0s-17 44 0 60z",map:"M299 159v584l-213 122v-584zM725 865v-584l213-122v584zM663 976c3 2 7 3 11 4 1 0 3 1 4 1s3 0 4 0c-0 0-0 0-0 0s0 0 0 0c7 0 15-2 21-6l1-0 298-170c14-8 21-22 21-37v-683c0-24-19-43-43-43-8 0-15 2-21 6l-279 159-320-160c-4-2-7-3-11-4-1-0-3-1-4-1s-3-0-4-0c0 0 0 0 0 0s0 0-0 0c-7 0-15 2-21 6l-1 0-298 170c-14 8-21 22-22 37v683c0 24 19 43 43 43 8 0 15-2 21-6l279-159zM640 282v587l-256-128v-587z",mapPin:"M939 427c0-118-48-225-125-302s-184-125-302-125-225 48-302 125-125 184-125 302c0 24 2 48 6 72 12 66 38 128 72 184 117 196 325 334 325 334 14 9 33 10 47 0 0 0 208-138 325-334 33-56 60-118 72-184 4-23 6-47 6-72zM853 427c0 19-2 38-5 57-9 53-31 106-61 156-82 137-215 245-272 288-60-39-196-148-279-288-30-50-52-102-61-156-3-19-5-38-5-57 0-94 38-180 100-241s147-100 241-100 180 38 241 100 100 147 100 241zM683 427c0-47-19-90-50-121s-74-50-121-50-90 19-121 50-50 74-50 121 19 90 50 121 74 50 121 50 90-19 121-50 50-74 50-121zM597 427c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60 10-45 25-60 37-25 60-25 45 10 60 25 25 37 25 60z",maximize:"M341 85h-128c-35 0-67 14-90 38s-38 55-38 90v128c0 24 19 43 43 43s43-19 43-43v-128c0-12 5-22 13-30s18-13 30-13h128c24 0 43-19 43-43s-19-43-43-43zM939 341v-128c0-35-14-67-38-90s-55-38-90-38h-128c-24 0-43 19-43 43s19 43 43 43h128c12 0 22 5 30 13s13 18 13 30v128c0 24 19 43 43 43s43-19 43-43zM683 939h128c35 0 67-14 90-38s38-55 38-90v-128c0-24-19-43-43-43s-43 19-43 43v128c0 12-5 22-13 30s-18 13-30 13h-128c-24 0-43 19-43 43s19 43 43 43zM85 683v128c0 35 14 67 38 90s55 38 90 38h128c24 0 43-19 43-43s-19-43-43-43h-128c-12 0-22-5-30-13s-13-18-13-30v-128c0-24-19-43-43-43s-43 19-43 43z",messageCircle:"M939 491v-21c0-1-0-2-0-2-6-100-47-190-113-258-68-71-163-117-269-123-1-0-2-0-2-0h-21c-60-1-123 13-182 43-52 26-98 63-134 108-56 70-90 158-90 254-1 54 11 111 35 165l-76 227c-3 8-3 18 0 27 7 22 32 34 54 27l227-76c49 22 106 35 165 35 59-0 116-13 168-37 82-37 151-101 194-187 27-53 43-116 43-182zM853 491c0 52-12 101-34 142-34 68-89 119-153 148-41 19-87 29-133 29-52 0-101-12-142-34-11-6-23-6-33-3l-162 54 54-162c4-11 3-23-2-33-24-47-34-96-34-142 0-76 26-146 71-201 29-35 65-65 106-86 47-24 96-34 142-34h19c84 5 158 41 212 97 51 53 84 124 89 203z",mic:"M512 85c24 0 45 10 60 25s25 37 25 60v341c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60v-341c0-24 10-45 25-60s37-25 60-25zM512 0c-47 0-90 19-121 50s-50 74-50 121v341c0 47 19 90 50 121s74 50 121 50 90-19 121-50 50-74 50-121v-341c0-47-19-90-50-121s-74-50-121-50zM341 1024h341c24 0 43-19 43-43s-19-43-43-43h-128v-88c77-10 146-45 199-97 62-62 100-147 100-241v-85c0-24-19-43-43-43s-43 19-43 43v85c0 71-29 135-75 181s-110 75-181 75-135-29-181-75-75-110-75-181v-85c0-24-19-43-43-43s-43 19-43 43v85c0 94 38 180 100 241 52 52 121 88 199 97v88h-128c-24 0-43 19-43 43s19 43 43 43z",micOff:"M534 594c-7 2-14 3-22 3-24-0-45-10-60-25-15-15-25-37-25-60v-25zM683 399v-228c0-47-19-90-50-121s-74-50-121-50c-43-0-83 16-113 43-27 24-47 57-54 94-5 23 10 46 33 50s46-10 50-33c4-19 14-35 27-47 15-13 34-21 56-21 24 0 45 10 61 25 15 16 25 37 25 60v228c0 24 19 43 43 43s43-19 43-43zM768 427v85c0 16-1 32-4 45-4 23 11 45 34 50s45-11 50-34c3-19 5-39 5-60v-85c0-24-19-43-43-43s-43 19-43 43zM341 1024h341c24 0 43-19 43-43s-19-43-43-43h-128v-86c62-8 119-31 168-69l229 229c17 17 44 17 60 0s17-44 0-60l-249-249c-2-3-4-7-7-9-3-3-6-5-9-7l-674-674c-17-17-44-17-60 0s-17 44 0 60l329 329v110c0 47 19 90 50 121s74 50 121 50c32-0 61-9 86-24l63 63c-41 30-89 46-137 48-4-1-8-2-13-2-4 0-9 1-13 2-60-3-120-27-167-73-49-48-75-111-77-175-0-5-0-10-0-10v-86c0-24-19-43-43-43s-43 19-43 43v85c0 6 0 13 0 13 3 85 37 169 102 234 55 54 125 86 196 95v86h-128c-24 0-43 19-43 43s19 43 43 43z",minimize:"M299 128v128c0 12-5 22-13 30s-18 13-30 13h-128c-24 0-43 19-43 43s19 43 43 43h128c35 0 67-14 90-38s38-55 38-90v-128c0-24-19-43-43-43s-43 19-43 43zM896 299h-128c-12 0-22-5-30-13s-13-18-13-30v-128c0-24-19-43-43-43s-43 19-43 43v128c0 35 14 67 38 90s55 38 90 38h128c24 0 43-19 43-43s-19-43-43-43zM725 896v-128c0-12 5-22 13-30s18-13 30-13h128c24 0 43-19 43-43s-19-43-43-43h-128c-35 0-67 14-90 38s-38 55-38 90v128c0 24 19 43 43 43s43-19 43-43zM128 725h128c12 0 22 5 30 13s13 18 13 30v128c0 24 19 43 43 43s43-19 43-43v-128c0-35-14-67-38-90s-55-38-90-38h-128c-24 0-43 19-43 43s19 43 43 43z",minus:"M213 555h597c24 0 43-19 43-43s-19-43-43-43h-597c-24 0-43 19-43 43s19 43 43 43z",moon:"M938 550c1-10-2-20-8-29-14-19-41-23-60-9-41 30-88 46-136 50-58 4-118-12-169-49-57-42-91-103-101-168s5-133 47-190c6-8 9-19 8-29-2-23-23-41-47-38-96 9-184 50-252 113-74 69-124 164-134 272-11 117 27 228 97 312s172 141 289 152 228-27 312-97 141-172 152-289zM835 626c-21 58-57 109-103 147-67 56-156 86-250 77s-175-55-231-122-86-156-77-250c8-87 48-163 107-218 33-31 73-55 117-71-19 54-25 111-16 166 13 86 59 168 135 224 67 50 147 71 225 66 32-2 64-9 94-20z",more:"M597 512c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60zM896 512c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60zM299 512c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60z",moreVertical:"M597 512c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60zM597 213c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60zM597 811c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60z",mousePointer:"M207 207l524 218-208 71c-12 4-22 14-27 27l-71 208zM555 615l225 225c17 17 44 17 60 0s17-44 0-60l-225-225 250-85c22-8 34-32 27-54-4-12-13-21-24-26l-724-302c-22-9-47 1-56 23-5 11-4 23 0 33l302 724c9 22 34 32 56 23 12-5 20-14 24-26z",move:"M469 188v281h-281l55-55c17-17 17-44 0-60s-44-17-60 0l-128 128c-8 8-13 18-13 30 0 6 1 11 3 16s5 10 9 14l128 128c17 17 44 17 60 0s17-44 0-60l-55-55h281v281l-55-55c-17-17-44-17-60 0s-17 44 0 60l128 128c4 4 9 7 14 9s11 3 16 3c6 0 11-1 16-3 5-2 10-5 14-9l128-128c17-17 17-44 0-60s-44-17-60 0l-55 55v-281h281l-55 55c-17 17-17 44 0 60s44 17 60 0l128-128c4-4 7-9 9-14 6-15 3-34-9-47l-128-128c-17-17-44-17-60 0s-17 44 0 60l55 55h-281v-281l55 55c17 17 44 17 60 0s17-44 0-60l-128-128c-4-4-9-7-14-9-10-4-22-4-33 0-5 2-10 5-14 9l-128 128c-17 17-17 44 0 60s44 17 60 0z",music:"M341 768c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60 10-45 25-60 37-25 60-25 45 10 60 25 25 37 25 60zM939 683v-555c0-2-0-5-1-7-4-23-26-39-49-35l-512 85c-20 3-36 21-36 42v407c-25-15-54-23-85-23-47 0-90 19-121 50s-50 74-50 121 19 90 50 121 74 50 121 50 90-19 121-50 50-74 50-121v-519l427-71v356c-25-15-54-23-85-23-47 0-90 19-121 50s-50 74-50 121 19 90 50 121 74 50 121 50 90-19 121-50 50-74 50-121zM853 683c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60 10-45 25-60 37-25 60-25 45 10 60 25 25 37 25 60z",paperclip:"M885 441l-392 392c-42 42-96 63-151 63s-109-21-151-63-63-96-63-151 21-109 63-151l392-392c25-25 58-38 91-38s66 13 91 38 38 58 38 91-13 66-38 91l-393 392c-8 8-19 13-30 13s-22-4-30-13-13-19-13-30 4-22 13-30l362-362c17-17 17-44 0-60s-44-17-60-0l-362 362c-25 25-38 58-38 91s13 66 38 91 58 38 91 38 66-13 91-38l393-392c42-42 63-96 63-151s-21-109-63-151-96-63-151-63-109 21-151 63l-392 392c-58 58-88 135-88 211s29 153 88 211 135 88 211 88 153-29 211-88l392-392c17-17 17-44 0-60s-44-17-60 0z",pause:"M256 128c-24 0-43 19-43 43v683c0 24 19 43 43 43h171c24 0 43-19 43-43v-683c0-24-19-43-43-43zM299 213h85v597h-85zM597 128c-24 0-43 19-43 43v683c0 24 19 43 43 43h171c24 0 43-19 43-43v-683c0-24-19-43-43-43zM640 213h85v597h-85z",play:"M236 92c-7-4-15-7-23-7-24 0-43 19-43 43v768c-0 8 2 16 7 23 13 20 39 26 59 13l597-384c5-3 9-7 13-13 13-20 7-46-13-59zM256 206l476 306-476 306z",plus:"M213 555h256v256c0 24 19 43 43 43s43-19 43-43v-256h256c24 0 43-19 43-43s-19-43-43-43h-256v-256c0-24-19-43-43-43s-43 19-43 43v256h-256c-24 0-43 19-43 43s19 43 43 43z",refresh:"M190 398c31-89 96-157 175-194s172-45 261-14c51 18 94 46 127 80l121 113h-148c-24 0-43 19-43 43s19 43 43 43h256c0 0 0 0 1 0 6-0 11-1 16-3 5-2 10-5 14-10 1-1 1-1 2-2 3-4 6-8 7-12s3-9 3-14c0-1 0-1 0-2v-256c0-24-19-43-43-43s-43 19-43 43v157l-125-117c-42-43-97-79-160-101-111-39-228-30-326 17s-179 132-218 243c-8 22 4 47 26 54s47-4 54-26zM85 696l126 118c82 82 192 124 301 124s218-42 302-125c47-47 81-103 101-160 8-22-4-47-26-54s-47 4-54 26c-15 45-42 89-80 127-67 67-154 100-241 100s-175-33-242-101l-119-112h148c24 0 43-19 43-43s-19-43-43-43h-256c-0 0-0 0-1 0-6 0-11 1-16 3-5 2-10 5-14 10-1 1-1 1-2 2-3 4-6 8-7 12s-3 9-3 14c-0 1-0 1-0 2v256c0 24 19 43 43 43s43-19 43-43z",rewind:"M427 723l-272-211 272-211zM912 844c7 6 16 9 26 9 24 0 43-19 43-43v-597c0-9-3-18-9-26-14-19-41-22-60-7l-384 299c-3 2-5 5-7 7-6 8-9 17-9 26v-298c0-9-3-18-9-26-14-19-41-22-60-7l-384 299c-3 2-5 5-7 7-14 19-11 45 7 60l384 299c7 6 16 9 26 9 24 0 43-19 43-43v-298c0 13 6 25 16 33zM896 723l-272-211 272-211z",settings:"M683 512c0-47-19-90-50-121s-74-50-121-50-90 19-121 50-50 74-50 121 19 90 50 121 74 50 121 50 90-19 121-50 50-74 50-121zM597 512c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60 10-45 25-60 37-25 60-25 45 10 60 25 25 37 25 60zM867 657c2-4 5-8 8-11 5-4 11-6 17-6h4c35 0 67-14 90-38s38-55 38-90-14-67-38-90-55-38-90-38h-7c-5-0-9-1-13-3-5-3-10-7-12-13-0-1-0-3-0-4-1-2-2-5-2-7 1-14 3-19 7-23l3-3c25-25 37-58 37-91s-13-66-38-91c-25-25-58-37-91-37s-66 13-90 38l-2 2c-4 3-8 6-12 7-6 2-12 1-19-1-4-2-8-5-11-8-4-5-6-11-6-17v-4c0-35-14-67-38-90s-55-38-90-38-67 14-90 38-38 55-38 90v7c-0 5-1 9-3 13-3 5-7 10-13 12-1 0-3 0-4 0-2 1-5 2-7 2-14-1-19-3-23-7l-3-3c-25-25-58-37-91-37s-65 13-91 38c-25 25-37 58-37 91s13 66 38 90l2 2c3 4 6 8 7 12 2 6 1 12-1 19-0 1-1 1-1 2-2 5-5 9-8 12-5 4-11 7-16 7h-4c-35 0-67 14-90 38s-38 55-38 91 14 67 38 90 55 38 90 38h7c5 0 9 1 13 3 5 3 10 7 13 14 1 2 2 5 2 7-1 14-3 19-7 23l-3 3c-25 25-37 58-37 91s13 66 38 91c25 25 58 37 91 37s66-13 90-38l2-2c4-3 8-6 12-7 6-2 12-1 19 1 1 0 1 1 2 1 5 2 9 5 12 8 4 5 7 11 7 16v4c0 35 14 67 38 90s55 38 90 38 67-14 90-38 38-55 38-90v-7c0-5 1-9 3-13 3-5 7-10 14-13 2-1 5-2 7-2 14 1 19 3 23 7l3 3c25 25 58 37 91 37s66-13 91-38c25-25 37-58 37-91s-13-66-38-90l-2-2c-3-4-6-8-7-12-2-6-1-12 1-19zM785 397c-1-9-2-13-3-16v3c0 2 0 4 0 5 1 3 2 5 3 8 0 4 0 4 0 4 11 25 29 44 52 56 16 8 33 13 52 13h8c12 0 22 5 30 13s13 18 13 30-5 22-13 30-18 13-30 13h-4c-27 0-52 10-71 26-14 11-25 26-32 42-11 25-12 52-5 76 5 18 15 35 28 48l3 3c8 8 13 19 13 30s-4 22-12 30c-8 8-19 13-30 13s-22-4-30-12l-3-3c-20-19-44-30-70-32-19-2-38 1-55 9-25 11-44 29-55 51-8 16-13 33-13 52v8c0 12-5 22-13 30s-18 12-30 12-22-5-30-13-13-18-13-30v-4c-1-28-11-53-27-72-12-14-28-25-45-32-25-11-51-12-75-5-18 5-35 15-48 28l-3 3c-8 8-19 13-30 13s-22-4-30-12c-8-8-13-19-13-30s4-22 12-30l3-3c19-20 30-44 32-70 2-19-1-38-9-55-11-25-29-44-51-55-16-8-33-13-52-13l-8 0c-12 0-22-5-30-13s-13-18-13-30 5-22 13-30 18-13 30-13h4c28-1 53-11 72-27 14-12 25-28 32-45 11-25 12-51 5-75-5-18-15-35-28-48l-3-3c-8-8-13-19-13-30s4-22 12-30c8-8 19-13 30-13s22 4 30 12l3 3c20 19 44 30 70 32 16 1 32-1 47-6 4-1 8-2 11-3-1 0-3 0-4 0-9 1-13 2-16 3h3c2 0 4-0 5-0 3-1 5-2 8-3 4-0 4-0 4-0 25-11 44-29 56-52 8-16 13-33 13-52v-8c0-12 5-22 13-30s18-13 30-13 22 5 30 13 13 18 13 30v4c0 27 10 52 26 71 11 14 26 25 42 32 25 11 51 12 76 5 18-5 35-15 48-28l3-3c8-8 19-13 30-13s22 4 30 12c8 8 13 19 13 30s-4 22-12 30l-3 3c-19 20-30 44-32 70-1 16 1 32 6 47 1 4 2 8 3 11-0-1-0-3-0-4z",share:"M128 512v341c0 35 14 67 38 90s55 38 90 38h512c35 0 67-14 90-38s38-55 38-90v-341c0-24-19-43-43-43s-43 19-43 43v341c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22-5-30-13s-13-18-13-30v-341c0-24-19-43-43-43s-43 19-43 43zM469 188v452c0 24 19 43 43 43s43-19 43-43v-452l98 98c17 17 44 17 60 0s17-44 0-60l-171-171c-4-4-9-7-14-9-10-4-22-4-33 0-5 2-10 5-14 9l-171 171c-17 17-17 44 0 60s44 17 60 0z",start:"M784 887c7 6 17 9 27 9 24 0 43-19 43-43v-683c0-9-3-19-9-27-15-18-42-21-60-7l-427 341c-2 2-5 4-7 7-15 18-12 45 7 60zM768 765l-316-253 316-253zM256 811v-597c0-24-19-43-43-43s-43 19-43 43v597c0 24 19 43 43 43s43-19 43-43z",end:"M240 137c-7-6-17-9-27-9-24 0-43 19-43 43v683c-0 9 3 19 9 27 15 18 42 21 60 7l427-341c2-2 5-4 7-7 15-18 12-45-7-60zM256 259l316 253-316 253zM768 213v597c0 24 19 43 43 43s43-19 43-43v-597c0-24-19-43-43-43s-43 19-43 43z",forbidden:"M981 512c0-130-53-247-137-332s-202-137-332-137-247 53-332 137-137 202-137 332 53 247 137 332 202 137 332 137 247-53 332-137 137-202 137-332zM812 752l-540-540c66-53 149-84 240-84 106 0 202 43 272 112s112 165 112 272c0 91-31 174-84 240zM212 272l540 540c-66 53-149 84-240 84-106 0-202-43-272-112s-112-165-112-272c0-91 31-174 84-240z",square:"M213 85c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-597c0-35-14-67-38-90s-55-38-90-38zM213 171h597c12 0 22 5 30 13s13 18 13 30v597c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13z",star:"M550 66c-4-8-11-15-19-19-21-10-47-2-57 19l-122 247-273 40c-9 1-18 5-24 12-16 17-16 44 1 60l197 192-47 271c-2 9-0 18 4 27 11 21 37 29 58 18l244-128 244 128c8 4 17 6 27 4 23-4 39-26 35-49l-47-271 197-192c6-6 11-15 12-24 3-23-13-45-36-48l-273-40-122-247z",sun:"M768 512c0-71-29-135-75-181s-110-75-181-75-135 29-181 75-75 110-75 181 29 135 75 181 110 75 181 75 135-29 181-75 75-110 75-181zM683 512c0 47-19 90-50 121s-74 50-121 50-90-19-121-50-50-74-50-121 19-90 50-121 74-50 121-50 90 19 121 50 50 74 50 121zM469 43v85c0 24 19 43 43 43s43-19 43-43v-85c0-24-19-43-43-43s-43 19-43 43zM469 896v85c0 24 19 43 43 43s43-19 43-43v-85c0-24-19-43-43-43s-43 19-43 43zM150 210l61 61c17 17 44 17 60 0s17-44 0-60l-61-61c-17-17-44-17-60 0s-17 44 0 60zM753 814l61 61c17 17 44 17 60 0s17-44 0-60l-61-61c-17-17-44-17-60 0s-17 44 0 60zM43 555h85c24 0 43-19 43-43s-19-43-43-43h-85c-24 0-43 19-43 43s19 43 43 43zM896 555h85c24 0 43-19 43-43s-19-43-43-43h-85c-24 0-43 19-43 43s19 43 43 43zM210 874l61-61c17-17 17-44 0-60s-44-17-60 0l-61 61c-17 17-17 44 0 60s44 17 60 0zM814 271l61-61c17-17 17-44 0-60s-44-17-60 0l-61 61c-17 17-17 44 0 60s44 17 60 0z",tag:"M909 602c25-25 37-58 37-90 0-33-12-65-37-90l-367-367c-8-8-18-12-30-12h-427c-24 0-43 19-43 43v427c0 11 4 22 13 30l367 366c25 25 58 37 91 37s66-13 90-38zM848 542l-306 306c-8 8-19 13-30 13s-22-4-30-12l-354-354v-366h366l354 354c8 8 12 19 12 30 0 11-4 22-12 30zM299 341c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43z",terminal:"M201 755l256-256c17-17 17-44 0-60l-256-256c-17-17-44-17-60 0s-17 44 0 60l226 226-226 226c-17 17-17 44 0 60s44 17 60 0zM512 853h341c24 0 43-19 43-43s-19-43-43-43h-341c-24 0-43 19-43 43s19 43 43 43z",thumbsDown:"M469 640c0-24-19-43-43-43h-242c-3-0-7-0-7-0-12-2-21-8-28-17s-10-20-8-32l59-384c2-10 7-19 14-26 8-7 18-11 29-11h439v418l-154 346c-13-4-25-11-34-21-15-15-25-37-25-60zM384 683v128c0 47 19 90 50 121s74 50 121 50c17 0 32-10 39-25l171-384c3-6 4-12 4-17v-469c0-24-19-43-43-43h-481c-33-0-63 12-86 33-22 19-37 46-41 76l-59 384c-5 35 4 69 23 95s49 45 84 51c7 1 14 2 21 1zM725 128h114c15-0 29 5 39 14 9 8 16 19 18 32v290c-2 15-9 27-19 36-10 8-23 13-37 13l-115 0c-24 0-43 19-43 43s19 43 43 43h113c35 1 67-12 92-32 27-22 45-53 50-90 0-2 0-4 0-6v-299c0-2-0-4-0-6-5-34-22-64-46-86-26-23-60-37-96-36h-114c-24 0-43 19-43 43s19 43 43 43z",thumbsUp:"M555 384c0 24 19 43 43 43h242c3 0 7 0 7 0 12 2 21 8 28 17s10 20 8 32l-59 384c-2 10-7 19-14 26-8 7-18 11-29 11h-439v-418l154-346c13 4 25 11 34 21 15 15 25 37 25 60zM640 341v-128c0-47-19-90-50-121s-74-50-121-50c-17 0-32 10-39 25l-171 384c-3 6-4 12-4 17v469c0 24 19 43 43 43h481c33 0 63-12 86-33 22-19 37-46 41-76l59-384c5-35-4-69-23-95s-49-45-84-51c-7-1-14-2-21-1zM299 896h-128c-12 0-22-5-30-13s-13-18-13-30v-299c0-12 5-22 13-30s18-13 30-13h128c24 0 43-19 43-43s-19-43-43-43h-128c-35 0-67 14-90 38s-38 55-38 90v299c0 35 14 67 38 90s55 38 90 38h128c24 0 43-19 43-43s-19-43-43-43z",trash:"M768 299v555c0 12-5 22-13 30s-18 13-30 13h-427c-12 0-22-5-30-13s-13-18-13-30v-555zM725 213v-43c0-35-14-67-38-90s-55-38-90-38h-171c-35 0-67 14-90 38s-38 55-38 90v43h-171c-24 0-43 19-43 43s19 43 43 43h43v555c0 35 14 67 38 90s55 38 90 38h427c35 0 67-14 90-38s38-55 38-90v-555h43c24 0 43-19 43-43s-19-43-43-43zM384 213v-43c0-12 5-22 13-30s18-13 30-13h171c12 0 22 5 30 13s13 18 13 30v43z",unlock:"M213 512h597c12 0 22 5 30 13s13 18 13 30v299c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-299c0-12 5-22 13-30s18-13 30-13zM341 427v-128c-0-47 19-90 50-121 31-31 73-50 120-50 44 0 83 16 113 43 27 24 47 57 55 94 5 23 27 38 50 33s38-27 33-50c-12-56-41-105-82-141-45-40-105-64-170-64-71 0-135 29-181 75s-75 110-75 181v128h-43c-35 0-67 14-90 38s-38 55-38 90v299c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-299c0-35-14-67-38-90s-55-38-90-38z",upload:"M853 640v171c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-171c0-24-19-43-43-43s-43 19-43 43v171c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-171c0-24-19-43-43-43s-43 19-43 43zM469 231v409c0 24 19 43 43 43s43-19 43-43v-409l141 141c17 17 44 17 60 0s17-44 0-60l-213-213c-4-4-9-7-14-9-10-4-22-4-33 0-5 2-10 5-14 9l-213 213c-17 17-17 44 0 60s44 17 60 0z",uploadCloud:"M469 615v281c0 24 19 43 43 43s43-19 43-43v-281l98 98c17 17 44 17 60 0s17-44 0-60l-171-171c-4-4-9-7-14-9s-11-3-16-3c-11 0-22 4-30 13l-171 171c-17 17-17 44 0 60s44 17 60 0zM890 822c62-34 105-90 123-152s13-133-21-195c-29-53-74-92-126-114-31-13-64-20-98-20h-22c-31-88-91-158-167-203-85-50-188-67-291-41s-185 92-235 177-67 188-41 291c16 61 46 116 84 158 16 18 43 19 60 3s19-43 3-60c-29-33-53-75-65-123-21-80-7-160 32-226s103-117 183-138 160-7 226 32 117 103 138 183c5 19 22 32 41 32h53c23 0 45 5 66 13 35 14 65 40 84 76 23 41 26 88 14 130s-41 79-82 102c-21 11-28 37-17 58s37 28 58 17z",user:"M896 896v-85c0-59-24-112-62-151s-92-62-151-62h-341c-59 0-112 24-151 62s-62 92-62 151v85c0 24 19 43 43 43s43-19 43-43v-85c0-35 14-67 38-90s55-38 90-38h341c35 0 67 14 90 38s38 55 38 90v85c0 24 19 43 43 43s43-19 43-43zM725 299c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM640 299c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90z",userMinus:"M725 896v-85c0-59-24-112-62-151s-92-62-151-62h-299c-59 0-112 24-151 62s-62 92-62 151v85c0 24 19 43 43 43s43-19 43-43v-85c0-35 14-67 38-90s55-38 90-38h299c35 0 67 14 90 38s38 55 38 90v85c0 24 19 43 43 43s43-19 43-43zM576 299c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM491 299c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90zM981 427h-256c-24 0-43 19-43 43s19 43 43 43h256c24 0 43-19 43-43s-19-43-43-43z",userPlus:"M725 896v-85c0-59-24-112-62-151s-92-62-151-62h-299c-59 0-112 24-151 62s-62 92-62 151v85c0 24 19 43 43 43s43-19 43-43v-85c0-35 14-67 38-90s55-38 90-38h299c35 0 67 14 90 38s38 55 38 90v85c0 24 19 43 43 43s43-19 43-43zM576 299c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM491 299c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90zM981 427h-85v-85c0-24-19-43-43-43s-43 19-43 43v85h-85c-24 0-43 19-43 43s19 43 43 43h85v85c0 24 19 43 43 43s43-19 43-43v-85h85c24 0 43-19 43-43s-19-43-43-43z",userX:"M725 896v-85c0-59-24-112-62-151s-92-62-151-62h-299c-59 0-112 24-151 62s-62 92-62 151v85c0 24 19 43 43 43s43-19 43-43v-85c0-35 14-67 38-90s55-38 90-38h299c35 0 67 14 90 38s38 55 38 90v85c0 24 19 43 43 43s43-19 43-43zM576 299c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM491 299c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90zM951 311l-77 77-77-77c-17-17-44-17-60 0s-17 44 0 60l77 77-77 77c-17 17-17 44 0 60s44 17 60 0l77-77 77 77c17 17 44 17 60 0s17-44 0-60l-77-77 77-77c17-17 17-44 0-60s-44-17-60 0z",users:"M768 896v-85c0-59-24-112-62-151s-92-62-151-62h-341c-59 0-112 24-151 62s-62 92-62 151v85c0 24 19 43 43 43s43-19 43-43v-85c0-35 14-67 38-90s55-38 90-38h341c35 0 67 14 90 38s38 55 38 90v85c0 24 19 43 43 43s43-19 43-43zM597 299c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM512 299c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90zM1024 896v-85c-0-53-19-102-52-139-28-32-65-56-108-67-23-6-46 8-52 30s8 46 30 52c26 7 48 21 65 41 19 22 31 51 31 83v85c0 24 19 43 43 43s43-19 43-43zM672 175c34 9 62 31 78 59s23 63 14 97c-8 29-25 54-47 70-13 10-29 17-45 22-23 6-36 29-30 52s29 36 52 30c27-7 53-19 75-36 38-28 66-69 79-118 15-57 5-115-23-162s-74-83-131-98c-23-6-46 8-52 31s8 46 31 52z",video:"M939 382v261l-183-130zM128 171c-35 0-67 14-90 38s-38 55-38 90v427c0 35 14 67 38 90s55 38 90 38h469c35 0 67-14 90-38s38-55 38-90v-130l231 165c19 14 46 9 60-10 5-8 8-16 8-25v-427c0-24-19-43-43-43-9 0-18 3-25 8l-231 165v-130c0-35-14-67-38-90s-55-38-90-38zM128 256h469c12 0 22 5 30 13s13 18 13 30v427c0 12-5 22-13 30s-18 13-30 13h-469c-12 0-22-5-30-13s-13-18-13-30v-427c0-12 5-22 13-30s18-13 30-13z",videoOff:"M455 256h143c12 0 22 5 30 13s13 18 13 30v143c0 12 5 22 13 30l43 43c15 15 38 17 55 4l188-136v343c0 24 19 43 43 43s43-19 43-43v-427c0-9-3-17-8-25-14-19-40-23-60-10l-227 164-4-4v-125c0-35-14-67-38-90s-55-38-90-38h-143c-24 0-43 19-43 43s19 43 43 43zM196 256l444 444v25c0 12-5 22-13 30s-18 13-30 13h-469c-12 0-22-5-30-13s-13-18-13-30v-427c0-12 5-22 13-30s18-13 30-13zM13 73l99 99c-29 4-54 17-74 36-23 23-38 55-38 90v427c0 35 14 67 38 90s55 38 90 38h469c35 0 67-14 90-38 11-11 21-25 27-40l236 236c17 17 44 17 60 0s17-44 0-60l-939-939c-17-17-44-17-60 0s-17 44 0 60z",volume:"M427 302v420l-144-115c-7-6-17-9-27-9h-128v-171h128c9 0 19-3 27-9zM443 180l-202 161h-156c-24 0-43 19-43 43v256c0 24 19 43 43 43h156l202 161c18 15 45 12 60-7 6-8 9-17 9-27v-597c0-24-19-43-43-43-10 0-19 4-27 9z",volumeLow:"M427 302v420l-144-115c-7-6-17-9-27-9h-128v-171h128c9 0 19-3 27-9zM443 180l-202 161h-156c-24 0-43 19-43 43v256c0 24 19 43 43 43h156l202 161c18 15 45 12 60-7 6-8 9-17 9-27v-597c0-24-19-43-43-43-10 0-19 4-27 9zM633 391c33 33 50 77 50 121s-17 87-50 121c-17 17-17 44 0 60s44 17 60 0c50-50 75-116 75-181s-25-131-75-181c-17-17-44-17-60 0s-17 44 0 60z",volumeHigh:"M427 302v420l-144-115c-7-6-17-9-27-9h-128v-171h128c9 0 19-3 27-9zM443 180l-202 161h-156c-24 0-43 19-43 43v256c0 24 19 43 43 43h156l202 161c18 15 45 12 60-7 6-8 9-17 9-27v-597c0-24-19-43-43-43-10 0-19 4-27 9zM783 241c75 75 112 173 112 272 0 98-37 196-112 271-17 17-17 44 0 60s44 17 60 0c92-92 137-212 137-332 0-120-46-240-137-332-17-17-44-17-60 0s-17 44 0 60zM633 391c33 33 50 77 50 121s-17 87-50 121c-17 17-17 44 0 60s44 17 60 0c50-50 75-116 75-181s-25-131-75-181c-17-17-44-17-60 0s-17 44 0 60z",volumeOff:"M427 302v420l-144-115c-7-6-17-9-27-9h-128v-171h128c9 0 19-3 27-9zM443 180l-202 161h-156c-24 0-43 19-43 43v256c0 24 19 43 43 43h156l202 161c18 15 45 12 60-7 6-8 9-17 9-27v-597c0-24-19-43-43-43-10 0-19 4-27 9zM695 414l98 98-98 98c-17 17-17 44 0 60s44 17 60 0l98-98 98 98c17 17 44 17 60 0s17-44 0-60l-98-98 98-98c17-17 17-44 0-60s-44-17-60 0l-98 98-98-98c-17-17-44-17-60 0s-17 44 0 60z",wifi:"M241 568c84-70 186-102 287-98 92 3 184 36 259 98 18 15 45 12 60-6s12-45-6-60c-90-74-199-114-310-118-121-4-245 34-345 118-18 15-21 42-5 60s42 21 60 5zM89 416c125-110 282-163 437-159 147 3 293 57 410 160 18 16 45 14 60-4s14-45-4-60c-133-116-298-177-464-181-176-4-353 56-495 181-18 16-19 43-4 60s43 19 60 4zM389 722c42-30 92-42 140-39 38 3 75 16 108 39 19 14 46 9 59-10s9-46-10-59c-45-31-97-50-150-54-67-5-137 12-196 54-19 14-24 40-10 59s40 24 59 10zM512 896c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43z",wifiOff:"M695 510c34 16 64 37 88 57 18 15 45 13 60-4s13-45-4-60c-30-26-67-50-106-70-21-10-47-2-57 20s-2 47 20 57zM460 258c172-14 333 41 456 142 6 5 12 10 18 16 18 16 45 14 60-4s14-45-4-60c-7-6-14-12-21-18-140-114-323-177-517-161-23 2-41 22-39 46s22 41 46 39zM389 722c42-30 92-42 140-39 38 3 75 16 108 39 10 7 22 9 33 7l282 282c17 17 44 17 60 0s17-44 0-60l-544-544c-2-3-5-5-7-7l-387-387c-17-17-44-17-60 0s-17 44 0 60l174 174c-54 27-106 62-155 105-18 16-19 43-4 60s43 19 60 4c51-45 107-80 162-105l99 99c-58 19-114 50-164 92-18 15-20 42-5 60s42 20 60 5c54-45 116-75 179-88l119 119c-1-0-2-0-3-0-67-5-137 12-196 54-19 14-24 40-10 59s40 24 59 10zM512 896c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43z",x:"M226 286l226 226-226 226c-17 17-17 44 0 60s44 17 60 0l226-226 226 226c17 17 44 17 60 0s17-44 0-60l-226-226 226-226c17-17 17-44 0-60s-44-17-60 0l-226 226-226-226c-17-17-44-17-60 0s-17 44 0 60z",zoomIn:"M684 677c-1 1-3 2-4 4s-3 3-4 4c-54 52-127 84-207 84-82 0-157-33-211-87s-87-129-87-211 33-157 87-211 129-87 211-87 157 33 211 87 87 129 87 211c0 80-32 153-84 207zM926 866l-157-157c53-66 84-149 84-240 0-106-43-202-112-272s-166-112-272-112-202 43-272 112-112 166-112 272 43 202 112 272 166 112 272 112c91 0 174-31 240-84l157 157c17 17 44 17 60 0s17-44 0-60zM341 512h85v85c0 24 19 43 43 43s43-19 43-43v-85h85c24 0 43-19 43-43s-19-43-43-43h-85v-85c0-24-19-43-43-43s-43 19-43 43v85h-85c-24 0-43 19-43 43s19 43 43 43z",zoomOut:"M684 677c-1 1-3 2-4 4s-3 3-4 4c-54 52-127 84-207 84-82 0-157-33-211-87s-87-129-87-211 33-157 87-211 129-87 211-87 157 33 211 87 87 129 87 211c0 80-32 153-84 207zM926 866l-157-157c53-66 84-149 84-240 0-106-43-202-112-272s-166-112-272-112-202 43-272 112-112 166-112 272 43 202 112 272 166 112 272 112c91 0 174-31 240-84l157 157c17 17 44 17 60 0s17-44 0-60zM341 512h256c24 0 43-19 43-43s-19-43-43-43h-256c-24 0-43 19-43 43s19 43 43 43z",discord:{p:["M1145 86c-81-38-174-68-272-85l-7-1c-11 19-23 43-34 68l-2 5c-46-7-100-12-155-12s-108 4-160 12l6-1c-13-29-25-53-38-76l2 4c-105 18-198 48-286 89l7-3c-176 261-224 516-200 766v0c98 73 211 131 334 169l8 2c26-34 50-73 71-113l2-5c-45-17-83-35-119-57l3 2c10-7 19-14 28-21 100 48 218 76 342 76s242-28 347-78l-5 2c9 8 19 15 28 21-33 20-71 38-111 53l-5 2c23 45 47 84 75 120l-2-2c131-40 244-99 345-174l-3 2c28-291-48-543-201-767zM451 698c-67 0-122-60-122-135s53-135 121-135 123 61 122 135-54 135-122 135zM900 698c-67 0-122-60-122-135s53-135 122-135 123 61 121 135-54 135-121 135z"],w:1351},tiktok:"M535 1c56-1 111-0 167-1 3 65 27 132 75 178 48 47 115 69 181 76v172c-61-2-123-15-179-41-24-11-47-25-69-40-0 125 0 249-1 373-3 60-23 119-58 168-56 82-153 135-252 137-61 3-122-13-174-44-86-51-147-144-156-244-1-21-1-43-0-64 8-81 48-159 110-212 71-61 170-91 262-73 1 63-2 126-2 189-42-14-92-10-129 16-27 17-47 44-58 75-9 22-6 46-6 69 10 70 78 129 149 122 48-0 93-28 118-69 8-14 17-29 17-45 4-76 3-152 3-229 0-172-0-343 1-515z",instagram:{p:["M512 92c137 0 153 1 207 3 50 2 77 11 95 18 24 9 41 20 59 38 18 18 29 35 38 59 7 18 15 45 18 95 2 54 3 70 3 207s-1 153-3 207c-2 50-11 77-18 95-9 24-20 41-38 59-18 18-35 29-59 38-18 7-45 15-95 18-54 2-70 3-207 3s-153-1-207-3c-50-2-77-11-95-18-24-9-41-20-59-38-18-18-29-35-38-59-7-18-15-45-18-95-2-54-3-70-3-207s1-153 3-207c2-50 11-77 18-95 9-24 20-41 38-59 18-18 35-29 59-38 18-7 45-15 95-18 54-2 70-3 207-3zM512 0c-139 0-156 1-211 3-54 2-92 11-124 24-34 13-62 31-91 59-29 28-46 57-59 91-13 33-21 70-24 124-2 55-3 72-3 211s1 156 3 211c2 54 11 92 24 124 13 34 31 62 59 91 28 28 57 46 91 59 33 13 70 21 124 24 55 2 72 3 211 3s156-1 211-3c54-2 92-11 124-24 34-13 62-31 91-59s46-57 59-91c13-33 21-70 24-124 2-55 3-72 3-211s-1-156-3-211c-2-54-11-92-24-124-13-34-30-63-59-91-28-28-57-46-91-59-33-13-70-21-124-24-55-3-72-3-211-3v0z","M512 249c-145 0-263 118-263 263s118 263 263 263 263-118 263-263c0-145-118-263-263-263zM512 683c-94 0-171-76-171-171s76-171 171-171c94 0 171 76 171 171s-76 171-171 171z","M847 239c0 34-27 61-61 61s-61-27-61-61c0-34 27-61 61-61s61 27 61 61z"]},linkedin:"M928 0h-832c-53 0-96 43-96 96v832c0 53 43 96 96 96h832c53 0 96-43 96-96v-832c0-53-43-96-96-96zM384 832h-128v-448h128v448zM320 320c-35 0-64-29-64-64s29-64 64-64c35 0 64 29 64 64s-29 64-64 64zM832 832h-128v-256c0-35-29-64-64-64s-64 29-64 64v256h-128v-448h128v79c26-36 67-79 112-79 80 0 144 72 144 160v288z",eyedropper:"M987 37c-50-50-131-50-181 0l-172 172-121-121-136 136 106 106-472 472c-8 8-11 19-10 29h-0v160c0 18 14 32 32 32h160c0 0 3 0 4 0 9 0 18-4 25-11l472-472 106 106 136-136-121-121 172-172c50-50 50-131 0-181zM173 960h-109v-109l470-470 109 109-470 470z",heart:{p:["M1088 358c0 86-37 164-96 218h0l-320 320c-32 32-64 64-96 64s-64-32-96-64l-320-320c-59-54-96-131-96-218 0-162 132-294 294-294 86 0 164 37 218 96 54-59 131-96 218-96 162 0 294 132 294 294z"],w:1152},facebook:"M928 0h-832c-53 0-96 43-96 96v832c0 53 43 96 96 96h416v-448h-128v-128h128v-64c0-106 86-192 192-192h128v128h-128c-35 0-64 29-64 64v64h192l-32 128h-160v448h288c53 0 96-43 96-96v-832c0-53-43-96-96-96z",twitter:"M1024 226c-38 17-78 28-121 33 43-26 77-67 92-116-41 24-86 42-133 51-38-41-93-66-153-66-116 0-210 94-210 210 0 16 2 32 5 48-175-9-329-92-433-220-18 31-28 67-28 106 0 73 37 137 93 175-34-1-67-11-95-26 0 1 0 2 0 3 0 102 72 187 169 206-18 5-36 7-55 7-14 0-27-1-40-4 27 83 104 144 196 146-72 56-162 90-261 90-17 0-34-1-50-3 93 60 204 94 322 94 386 0 598-320 598-598 0-9-0-18-1-27 41-29 77-66 105-109z",youtube:"M1014 307c0 0-10-71-41-102-39-41-83-41-103-43-143-10-358-10-358-10h-0c0 0-215 0-358 10-20 2-64 3-103 43-31 31-41 102-41 102s-10 83-10 166v78c0 83 10 166 10 166s10 71 41 102c39 41 90 39 113 44 82 8 348 10 348 10s215-0 358-11c20-2 64-3 103-43 31-31 41-102 41-102s10-83 10-166v-78c-0-83-10-166-10-166zM406 645v-288l277 144-277 143z",game:{p:["M1056 194v-2h-672c-177 0-320 143-320 320s143 320 320 320c105 0 198-50 256-128h128c58 78 151 128 256 128 177 0 320-143 320-320 0-166-126-302-288-318zM576 576h-128v128h-128v-128h-128v-128h128v-128h128v128h128v128zM960 576c-35 0-64-29-64-64s29-64 64-64 64 29 64 64-29 64-64 64zM1152 576c-35 0-64-29-64-64 0-35 29-64 64-64s64 29 64 64c0 35-29 64-64 64z"],w:1408},google:"M512 0c-283 0-512 229-512 512s229 512 512 512 512-229 512-512-229-512-512-512zM520 896c-212 0-384-172-384-384s172-384 384-384c104 0 190 38 257 100l-104 100c-29-27-78-59-153-59-131 0-238 109-238 242s107 242 238 242c152 0 209-109 218-166h-218v-132h363c3 19 6 38 6 64 0 219-147 375-369 375z",github:"M512 13c-283 0-512 229-512 512 0 226 147 418 350 486 26 5 35-11 35-25 0-12-0-53-1-95-142 31-173-60-173-60-23-59-57-75-57-75-46-32 4-31 4-31 51 4 78 53 78 53 46 78 120 56 149 43 5-33 18-56 33-68-114-13-233-57-233-253 0-56 20-102 53-137-5-13-23-65 5-136 0 0 43-14 141 52 41-11 85-17 128-17 44 0 87 6 128 17 98-66 141-52 141-52 28 71 10 123 5 136 33 36 53 82 53 137 0 197-120 240-234 253 18 16 35 47 35 95 0 69-1 124-1 141 0 14 9 30 35 25 203-68 350-260 350-486 0-283-229-512-512-512z",npm:"M0 0v1024h1024v-1024h-1024zM832 832h-128v-512h-192v512h-320v-640h640v640z",xr:{p:["M801 116c465 0 735 49 735 396 0 279-197 396-342 396-218 0-307-165-393-165-110 0-175 165-393 165-145 0-342-117-342-396 0-347 270-396 735-396zM949 285c-16-16-41-16-57 0-16 16-16 41-0 57v0l322 322c16 16 41 16 57 0 16-16 16-41 0-57-9-9-18-18-26-26l-4-4c-5-5-9-9-14-14l-4-4c-32-32-65-64-132-131l-8-8c-1-1-3-3-4-4l-18-18c-31-31-68-68-113-113zM801 272c-22 0-40 18-40 40v0 322c0 22 18 40 40 40 22 0 40-18 40-40 0-1 0-2 0-3l0-6c0-3 0-6 0-8l0-5c0-1 0-2 0-2l0-6c0-1 0-1 0-2l0-7c0-1 0-1 0-2l0-8c0-0 0-1 0-1l-0-20c-0-0-0-1-0-1l-0-12c-0-1-0-1-0-2l-0-15c-0-1-0-2-0-2l-0-14c-0-1-0-2-0-3l-0-22c-0-1-0-3-0-4l-0-28c-0-2-0-4-0-5l-0-50c-0-2-0-5-0-7l-0-84c0-22-18-40-40-40zM710 282c-16-16-41-16-57 0v0l-134 134-131-131c-16-16-41-16-57 0-16 16-16 41-0 57v0l131 131-132 132c-15 16-15 41 1 56 16 16 41 16 57 0v0l131-131 134 134c16 16 41 16 57 0 16-16 16-41 0-57v0l-134-133 134-133c16-16 16-41 0-57z"],w:1600},xinjs:{p:["M937 548c14 14 14 37 0 51l-113 113-178 178c-14 14-37 14-51-0-14-14-14-37 0-51l290-291c14-14 37-14 51 0zM924 560c-7-7-19-7-27-0l-0 0-290 291c-7 7-7 20 0 27 7 7 19 7 27 0l0-0 12-12 21-21 231-232 26-26c7-7 7-20-0-27z","M512 900c20 0 36-16 36-36v-291c0-20-16-36-36-36-20 0-36 16-36 36v291c0 20 16 36 36 36zM511 882c-10 0-19-8-19-19l-0-1v-292c0-11 9-19 19-19 10 0 19 8 19 19l0 1 0 40-0 131-0 121c0 11-9 19-19 19z","M429 889c14-14 14-37 0-52l-121-121 121-121c14-14 14-37 0-52-14-14-37-14-51 0l-121 121-119-119c-14-14-37-14-51 0-14 14-14 37-1 51l1 1 119 119-119 119c-14 14-14 37 0 52 14 14 37 14 51 0l119-119 121 121c14 14 37 14 51 0zM418 876c-7 7-19 7-27 0l-0-0-133-133-131 130c-7 7-20 7-27-0-7-7-7-19-0-27l0-0 131-130-131-131c-7-7-7-19 0-27 7-7 19-7 27-0l0 0 131 130 133-133c7-7 20-7 27 0 7 7 7 19 0 27l-0 0-134 132 134 132c7 7 7 19 0 27l-0 0z","M594 142c14-14 37-14 51-0 205 205 222 221 291 290 14 14 14 37 0 51-14 14-37 14-51 0l-291-290c-14-14-14-37 0-51z","M511 130c20 0 36 16 36 36 0 290 0 193 0 291 0 20-16 36-36 36-20 0-36-16-36-36v-291c0-20 16-36 36-36z","M378 140c14-14 37-14 51 0 14 14 14 37 0 51l-121 120 121 120c14 14 14 37 0 51-14 14-37 14-51 0l-121-121-119 118c-14 14-37 14-51-0-14-14-14-37-1-51l1-1 119-118-119-118c-14-14-14-37 0-51 14-14 37-14 51-0l119 118 121-121z"]},xinie:"M668 46c10 0 20 4 29 8 23 12 36 33 29 46v0l-25 60c3 8 5 17 6 25 6 41-8 83-32 117-14 19-32 36-53 47 23 16 42 37 57 60 51 23 98 75 99 133 0 16-3 30-9 45-14 33-38 58-72 71-8 19-4 10-13 27-42 78-166 124-167 205-0 66 36 122 105 134-24 0-40 0-53 0l-3 0c-0 0-1 0-1 0l-7 0c-1 0-2 0-2-0l-8-0c-0-0-1-0-1-0l-4-0c-0-0-1-0-1-0l-2-0c-0-0-1-0-1-0l-3-0c-0-0-1-0-1-0l-3-0c-0-0-1-0-1-0l-4-0c-0-0-1-0-1-0l-14 0c-0 0-1 0-1 0l-3 0c-0 0-1 0-2 0l-3 0c-8 0-17 0-28 0-71-21-128-71-169-131-77-115-98-252-62-384-35-38-39-85-17-131 7-13 16-26 27-36 36-35 96-50 143-29 7-4 15-6 23-8 6-2 13-3 20-4-9-22-6-46 1-68 13-37 62-57 62-57 0 0 5-27 32-56 19-19 55-29 82-24v0l27-39c6-9 15-10 25-11zM453 563l0 0c7 11 51 80 131 110 101 39 109-12 109-13-168 9-232-86-239-97zM553 504c-48-2-85 16-152 44-53 22-144-28-144-28s66 46 154 44c20-0 32-3 42-6 7-2 20-32 96-34 6-0 13-0 21-0l3 0c5 0 10 0 14 0l3 0 3 0c38 1 75 3 75 3s-69-20-115-22zM400 320c0 0 0 0 0 1l0 0c2 7 9 35 2 51-9 23-23 36-25 37l-0 0 0 0c4 0 95 8 138 22 52 17 98 51 99 52l0 0c0 0-53-50-98-68-38-15-109-18-109-18s22-26 9-48c-12-22-19-30-19-30zM633 102l0 0c2 1 12 4 36 20 24 17 31 34 31 34 1-2 1-3 2-5l1-1 0-1c0-0 0-1 1-1l0-1c3-8 6-15-4-24-12-11-60-20-66-21l-0-0z",html5:"M61 0l82 922 369 102 370-103 82-921h-903zM785 301h-433l10 116h412l-31 347-232 64-232-64-16-178h113l8 90 126 34 0-0 126-34 13-147h-392l-30-342h566l-10 113z",bug:{p:["M933 549c0 20-17 37-37 37h-128c0 71-15 125-38 166l119 119c14 14 14 37 0 51-7 7-17 11-26 11s-19-3-26-11l-113-113s-75 69-172 69v-512h-73v512c-103 0-179-75-179-75l-105 118c-7 8-17 12-27 12-9 0-17-3-25-9-15-14-16-37-3-52l115-130c-20-39-33-90-33-157h-128c-20 0-37-17-37-37s17-37 37-37h128v-168l-99-99c-14-14-14-37 0-51s37-14 51 0l99 99h482l99-99c14-14 37-14 51 0s14 37 0 51l-99 99v168h128c20 0 37 17 37 37zM658 219h-366c0-101 82-183 183-183s183 82 183 183z"],w:951}};/*!
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
*/var{svg:Ka,path:Di}=h1;function Xa(e){let t=Rn[e];if(t===void 0)console.warn(`icon ${e} not found`),t=Rn.square;return typeof t!=="string"?t:{w:1024,h:1024,p:[t]}}var v3=(e,t)=>{Rn[e]=t},Ja=(e,t,n,i=1)=>{if(t!==void 0){for(let o of[...e.querySelectorAll("path")])if(o.setAttribute("fill",t),n!==void 0)o.setAttribute("stroke",n),o.setAttribute("stroke-width",String(Number(i)*32))}return e.setAttribute("xmlns","http://www.w3.org/2000/svg"),`url(data:image/svg+xml;charset=UTF-8,${encodeURIComponent(e.outerHTML)})`},F=new Proxy(Rn,{get(e,t){let n=Xa(t);return n===void 0?void 0:(...i)=>{let{w:o,h:a}=Object.assign({w:1024,h:1024},n);return Ka({viewBox:`0 0 ${o} ${a}`,class:"icon-"+t.replace(/([a-z])([A-Z])/g,(s,l,r)=>l+"-"+r.toLocaleLowerCase())},...i,...n.p.map((s,l)=>{let r=Array.from(new Set(n.c));return n.c?Di({d:s,style:{fill:`var(--icon-fill-${r.indexOf(n.c[l])}, ${n.c[l]})`}}):Di({d:s})}))}}});class g1 extends U{icon="";size=0;color="";stroke="";strokeWidth=1;constructor(){super();this.initAttributes("icon","size","color","stroke","strokeWidth")}render(){this.textContent="";let e={};if(this.size)e.height=this.size;if(this.stroke)e.stroke=this.stroke,e.strokeWidth=this.strokeWidth*32;if(this.color.match(/linear-gradient/)){let t=this.color.split("-")[0],[,n]=this.color.match(/[a-z-]+\((.*)\)/)||[],[,i]=n.match(/(\d+)deg/)||[],o=(n.match(/(#|rgb|hsl).*?%/g)||[]).map((r)=>{let[,d,p]=r.match(/^(.*)\s(\d+%)$/)||["black","100%"];return`<stop offset="${p}" stop-color="${mn.fromCss(d).html}" ></stop>`}).join(""),a="";if(i)a=` gradientTransform="rotate(${parseFloat(i).toFixed(0)})"`;let s=h1.defs(),l="g-"+Math.floor(Math.random()*Number.MAX_SAFE_INTEGER);s.innerHTML=`<${t}Gradient id="${l}" ${a}>${o}</${t}Gradient>`,e.fill=`url(#${l})`,this.append(F[this.icon]({style:e},s))}else e.fill=this.color,this.append(F[this.icon]({style:e}))}}var x3=g1.elementCreator({tag:"xin-icon",styleSpec:{":host":{verticalAlign:"text-bottom"}}});/*!
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
*/var qi=()=>{};class m1 extends U{babylonReady;BABYLON;static styleSpec={":host":{display:"block",position:"relative"},":host canvas":{width:"100%",height:"100%"},":host .babylonVRicon":{height:50,width:80,backgroundColor:"transparent",filter:"drop-shadow(0 0 4px #000c)",backgroundImage:Ja(F.xr(),"#fffd"),backgroundPosition:"center",backgroundRepeat:"no-repeat",border:"none",borderRadius:5,borderStyle:"none",outline:"none",transition:"transform 0.125s ease-out"},":host .babylonVRicon:hover":{transform:"scale(1.1)"}};content=J.canvas({part:"canvas"});constructor(){super();this.babylonReady=(async()=>{let{BABYLON:e}=await tn("https://cdn.babylonjs.com/babylon.js","BABYLON");return e})()}scene;engine;sceneCreated=qi;update=qi;_update=()=>{if(this.scene){if(this.update!==void 0)this.update(this,this.BABYLON);if(this.scene.activeCamera!==void 0)this.scene.render()}};onResize(){if(this.engine)this.engine.resize()}loadScene=async(e,t,n)=>{let{BABYLON:i}=await tn("https://cdn.babylonjs.com/loaders/babylonjs.loaders.min.js","BABYLON");i.SceneLoader.Append(e,t,this.scene,n)};loadUI=async(e)=>{let{BABYLON:t}=await tn("https://cdn.babylonjs.com/gui/babylon.gui.min.js","BABYLON"),n=t.GUI.AdvancedDynamicTexture.CreateFullscreenUI("GUI",!0,this.scene),{snippetId:i,jsonUrl:o,data:a,size:s}=e;if(s)n.idealWidth=s,n.renderAtIdealSize=!0;let l;if(i)l=await n.parseFromSnippetAsync(i);else if(o)l=await n.parseFromURLAsync(o);else if(a)l=n.parseContent(a);else return null;let r=n.getChildren()[0],d=r.children.reduce((p,g)=>{return p[g.name]=g,p},{});return{advancedTexture:n,gui:l,root:r,widgets:d}};connectedCallback(){super.connectedCallback();let{canvas:e}=this.parts;this.babylonReady.then(async(t)=>{if(this.BABYLON=t,this.engine=new t.Engine(e,!0),this.scene=new t.Scene(this.engine),this.sceneCreated)await this.sceneCreated(this,t);if(this.scene.activeCamera===void 0)new t.ArcRotateCamera("default-camera",-Math.PI/2,Math.PI/2.5,3,new t.Vector3(0,0,0)).attachControl(this.parts.canvas,!0);this.engine.runRenderLoop(this._update)})}}var y3=m1.elementCreator({tag:"xin-3d"});/*!
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
*/class bn extends U{content=null;src="";json="";config={renderer:"svg",loop:!0,autoplay:!0};static bodymovinAvailable;animation;static styleSpec={":host":{width:400,height:400,display:"inline-block"}};_loading=!1;get loading(){return this._loading}constructor(){super();if(this.initAttributes("src","json"),bn.bodymovinAvailable===void 0)bn.bodymovinAvailable=tn("https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js","bodymovin")}doneLoading=()=>{this._loading=!1};load=({bodymovin:e})=>{if(this._loading=!0,this.config.container=this.shadowRoot!==null?this.shadowRoot:void 0,this.json!=="")this.config.animationData=this.json,delete this.config.path;else if(this.src!=="")delete this.config.animationData,this.config.path=this.src;else console.log("%c<xin-lottie>%c expected either %cjson%c (animation data) or %csrc% c(url) but found neither.","color: #44f; background: #fff; padding: 0 5px","color: default","color: #44f; background: #fff; padding: 0 5px","color: default","color: #44f; background: #fff; padding: 0 5px","color: default");if(this.animation){this.animation.destroy();let t=this.shadowRoot;if(t!==null)t.querySelector("svg")?.remove()}this.animation=e.loadAnimation(this.config),this.animation.addEventListener("DOMLoaded",this.doneLoading)};render(){super.render(),bn.bodymovinAvailable.then(this.load).catch((e)=>{console.error(e)})}}var w3=bn.elementCreator({tag:"xin-lottie"});/*!
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
*/var{button:Ft,slot:Qa,div:Pn}=J;class f1 extends U{arrows=!1;dots=!1;loop=!1;maxVisibleItems=1;snapDelay=0.1;snapDuration=0.25;auto=0;timeout;autoAdvance=()=>{if(clearTimeout(this.timeout),this.auto>0)this.timeout=setTimeout(this.forward,this.auto*1000)};_page=0;get page(){return this._page}set page(e){let{scroller:t,back:n,forward:i}=this.parts;if(this.lastPage<=0)i.disabled=n.disabled=!0,e=0;else e=Math.max(0,Math.min(this.lastPage,e)),e=isNaN(e)?0:e;if(this._page!==e)this._page=isNaN(e)?0:e,this.animateScroll(this._page*t.offsetWidth),n.disabled=this.page<=0&&!this.loop,i.disabled=this.page>=this.lastPage&&!this.loop}get visibleItems(){return[...this.children].filter((e)=>getComputedStyle(e).display!=="none")}get lastPage(){return Math.max(Math.ceil(this.visibleItems.length/(this.maxVisibleItems||1))-1,0)}static styleSpec={":host":{display:"flex",flexDirection:"column",position:"relative"},":host svg":{height:T.carouselIconSize},":host button":{outline:"none",border:"none",boxShadow:"none",background:"transparent",fill:T.carouselButtonColor,padding:0},":host::part(back), :host::part(forward)":{position:"absolute",top:0,bottom:0,width:T.carouseButtonWidth,zIndex:2},":host::part(back)":{left:0},":host::part(forward)":{right:0},":host button:disabled":{opacity:0.5,pointerEvents:"none"},":host button:hover":{fill:T.carouselButtonHoverColor},":host button:active":{fill:T.carouselButtonActiveColor},":host::part(pager)":{position:"relative"},":host::part(scroller)":{overflow:"auto hidden",position:"relative"},":host::part(grid)":{display:"grid",justifyItems:"center"},":host *::-webkit-scrollbar, *::-webkit-scrollbar-thumb":{display:"none"},":host .dot":{background:T.carouselButtonColor,borderRadius:T.carouselDotSize,height:T.carouselDotSize,width:T.carouselDotSize,transition:T.carouselDotTransition},":host .dot:not(.current):hover":{background:T.carouselButtonHoverColor,height:T.carouselDotSize150,width:T.carouselDotSize150,margin:T.carouselDotSize_25},":host .dot:not(.current):active":{background:T.carouselButtonActiveColor},":host .dot.current":{background:T.carouselDotCurrentColor},":host::part(progress)":{display:"flex",gap:T.carouselDotSpacing,justifyContent:"center",padding:T.carouselProgressPadding}};easing=(e)=>{return Math.sin(e*Math.PI*0.5)};indicateCurrent=()=>{let{scroller:e,progress:t}=this.parts,n=e.scrollLeft/e.offsetWidth;[...t.children].forEach((i,o)=>{i.classList.toggle("current",Math.floor(o/this.maxVisibleItems-n)===0)}),clearTimeout(this.snapTimer),this.snapTimer=setTimeout(this.snapPosition,this.snapDelay*1000)};snapPosition=()=>{let{scroller:e}=this.parts,t=e.scrollLeft/e.offsetWidth;if(t!==this.page)this.page=t>this.page?Math.ceil(t):Math.floor(t);this.autoAdvance()};back=()=>{this.page=this.page>0?this.page-1:this.lastPage};forward=()=>{this.page=this.page<this.lastPage?this.page+1:0};handleDotClick=(e)=>{let{progress:t}=this.parts,n=[...t.children].indexOf(e.target);if(n>-1)this.page=Math.floor(n/this.maxVisibleItems)};snapTimer;animationFrame;animateScroll(e,t=-1,n=0){cancelAnimationFrame(this.animationFrame);let{scroller:i}=this.parts;if(t===-1){t=i.scrollLeft,n=Date.now(),this.animationFrame=requestAnimationFrame(()=>{this.animateScroll(e,t,n)});return}let o=(Date.now()-n)/1000;if(o>=this.snapDuration||Math.abs(i.scrollLeft-e)<2)i.scrollLeft=e,this.animationFrame=null;else i.scrollLeft=t+this.easing(o/this.snapDuration)*(e-t),this.animationFrame=requestAnimationFrame(()=>{this.animateScroll(e,t,n)})}content=()=>[Pn({part:"pager"},Ft({title:"previous slide",part:"back"},F.chevronLeft()),Pn({title:"slides",role:"group",part:"scroller"},Pn({part:"grid"},Qa())),Ft({title:"next slide",part:"forward"},F.chevronRight())),Pn({title:"choose slide to display",role:"group",part:"progress"})];constructor(){super();this.initAttributes("dots","arrows","maxVisibleItems","snapDuration","loop","auto")}connectedCallback(){super.connectedCallback(),this.ariaRoleDescription="carousel",this.ariaOrientation="horizontal",this.ariaReadOnly="true";let{back:e,forward:t,scroller:n,progress:i}=this.parts;e.addEventListener("click",this.back),t.addEventListener("click",this.forward),n.addEventListener("scroll",this.indicateCurrent),i.addEventListener("click",this.handleDotClick),this.autoAdvance()}disconnectedCallback(){clearTimeout(this.timeout)}render(){super.render();let{dots:e,arrows:t,visibleItems:n,lastPage:i}=this,{progress:o,back:a,forward:s,grid:l}=this.parts;n.forEach((r)=>{r.role="group"}),l.style.gridTemplateColumns=`${100/this.maxVisibleItems/(1+this.lastPage)}% `.repeat(n.length).trim(),l.style.width=(1+this.lastPage)*100+"%",o.textContent="",o.append(...n.map((r,d)=>Ft({title:`item ${d+1}`,class:"dot"}))),this.indicateCurrent(),o.style.display=e&&i>0?"":"none",a.hidden=s.hidden=!(t&&i>0)}}var M3=f1.elementCreator({tag:"xin-carousel",styleSpec:{":host":{_carouselIconSize:24,_carouselButtonColor:"#0004",_carouselButtonHoverColor:"#0006",_carouselButtonActiveColor:"#000c",_carouseButtonWidth:48,_carouselDotCurrentColor:"#0008",_carouselDotSize:8,_carouselDotSpacing:T.carouselDotSize,_carouselProgressPadding:12,_carouselDotTransition:"0.125s ease-in-out"},":host:focus":{outline:"none",boxShadow:"none"}}});/*!
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
*/var Hi="https://cdnjs.cloudflare.com/ajax/libs/ace/1.23.2/",b1="ace/theme/tomorrow",Za=async(e,t="html",n={},i=b1)=>{let{ace:o}=await tn(`${Hi}ace.min.js`);o.config.set("basePath",Hi);let a=o.edit(e,{mode:`ace/mode/${t}`,tabSize:2,useSoftTabs:!0,useWorker:!1,...n});return a.setTheme(i),a};class vn extends U{source="";get value(){return this.editor===void 0?this.source:this.editor.getValue()}set value(e){if(this.editor===void 0)this.source=e;else this.editor.setValue(e),this.editor.clearSelection(),this.editor.session.getUndoManager().reset()}mode="javascript";disabled=!1;role="code editor";get editor(){return this._editor}_editor;_editorPromise;options={};theme=b1;static styleSpec={":host":{display:"block",position:"relative",width:"100%",height:"100%"}};constructor(){super();this.initAttributes("mode","theme","disabled")}onResize(){if(this.editor!==void 0)this.editor.resize(!0)}connectedCallback(){if(super.connectedCallback(),this.source==="")this.value=this.textContent!==null?this.textContent.trim():"";if(this._editorPromise===void 0)this._editorPromise=Za(this,this.mode,this.options,this.theme),this._editorPromise.then((e)=>{this._editor=e,e.setValue(this.source,1),e.clearSelection(),e.session.getUndoManager().reset()})}render(){if(super.render(),this._editorPromise!==void 0)this._editorPromise.then((e)=>e.setReadOnly(this.disabled))}}var Ot=vn.elementCreator({tag:"xin-code"});/*!

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
*/var{input:Dt}=J,Pi=mn.fromCss("#8888");class v1 extends U{value=Pi.rgba;color=Pi;static styleSpec={":host":{_gap:8,_swatchSize:32,_cssWidth:72,_alphaWidth:72,display:"inline-flex",gap:T.gap,alignItems:"center"},':host input[type="color"]':{border:0,width:T.swatchSize,height:T.swatchSize},":host::part(alpha)":{width:T.alphaWidth},":host::part(css)":{width:T.cssWidth,fontFamily:"monospace"}};content=[Dt({title:"base color",type:"color",part:"rgb"}),Dt({type:"range",title:"opacity",part:"alpha",min:0,max:1,step:0.05}),Dt({title:"css color spec",part:"css"})];valueChanged=!1;update=(e)=>{let{rgb:t,alpha:n,css:i}=this.parts;if(e.type==="input")this.color=mn.fromCss(t.value),this.color.a=Number(n.value),i.value=this.color.html;else this.color=mn.fromCss(i.value),t.value=this.color.html.substring(0,7),n.value=String(this.color.a);t.style.opacity=String(this.color.a),this.value=this.color.rgba,this.valueChanged=!0};connectedCallback(){super.connectedCallback();let{rgb:e,alpha:t,css:n}=this.parts;e.addEventListener("input",this.update),t.addEventListener("input",this.update),n.addEventListener("change",this.update)}render(){if(this.valueChanged){this.valueChanted=!1;return}let{rgb:e,alpha:t,css:n}=this.parts;this.color=mn.fromCss(this.value),e.value=this.color.html.substring(0,7),e.style.opacity=String(this.color.a),t.value=String(this.color.a),n.value=this.color.html}}var es=v1.elementCreator({tag:"xin-color"});/*!
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
*/var we=J.div({style:{content:" ",position:"fixed",top:0,left:0,right:0,bottom:0}}),_n={passive:!0},Pe=(e,t,n="move")=>{if(!e.type.startsWith("touch")){let{clientX:i,clientY:o}=e;we.style.cursor=n,Un(we),document.body.append(we);let a=(s)=>{let l=s.clientX-i,r=s.clientY-o;if(t(l,r,s)===!0)we.removeEventListener("mousemove",a),we.removeEventListener("mouseup",a),we.remove()};we.addEventListener("mousemove",a,_n),we.addEventListener("mouseup",a,_n)}else if(e instanceof TouchEvent){let i=e.changedTouches[0],o=i.identifier,a=i.clientX,s=i.clientY,l=e.target,r=0,d=0,p=(g)=>{let f=[...g.touches].find((z)=>z.identifier===o);if(f!==void 0)r=f.clientX-a,d=f.clientY-s;if(g.type==="touchmove")g.stopPropagation(),g.preventDefault();if(t(r,d,g)===!0||f===void 0)l.removeEventListener("touchmove",p),l.removeEventListener("touchend",p),l.removeEventListener("touchcancel",p)};l.addEventListener("touchmove",p),l.addEventListener("touchend",p,_n),l.addEventListener("touchcancel",p,_n)}},x1=(e="body *")=>[...document.querySelectorAll(e)].map((t)=>parseFloat(getComputedStyle(t).zIndex)).reduce((t,n)=>isNaN(t)||Number(t)<n?n:Number(t),0),Un=(e,t="body *")=>{e.style.zIndex=String(x1(t)+1)};/*!
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
*/var{slot:ns}=J;class _e extends U{static floats=new Set;drag=!1;remainOnResize="remove";remainOnScroll="remain";content=ns();static styleSpec={":host":{position:"fixed"}};constructor(){super();this.initAttributes("drag","remainOnResize","remainOnScroll")}reposition=(e)=>{if(e.target?.closest(".no-drag"))return;if(this.drag){Un(this);let t=this.offsetLeft,n=this.offsetTop;Pe(e,(i,o,a)=>{if(this.style.left=`${t+i}px`,this.style.top=`${n+o}px`,this.style.right="auto",this.style.bottom="auto",a.type==="mouseup")return!0})}};connectedCallback(){super.connectedCallback(),_e.floats.add(this);let e={passive:!0};this.addEventListener("touchstart",this.reposition,e),this.addEventListener("mousedown",this.reposition,e),Un(this)}disconnectedCallback(){super.disconnectedCallback(),_e.floats.delete(this)}}var _i=_e.elementCreator({tag:"xin-float"});window.addEventListener("resize",()=>{[..._e.floats].forEach((e)=>{if(e.remainOnResize==="hide")e.hidden=!0;else if(e.remainOnResize==="remove")e.remove()})},{passive:!0});document.addEventListener("scroll",(e)=>{if(e.target instanceof HTMLElement&&e.target.closest(_e.tagName))return;[..._e.floats].forEach((t)=>{if(t.remainOnScroll==="hide")t.hidden=!0;else if(t.remainOnScroll==="remove")t.remove()})},{passive:!0,capture:!0});/*!
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

*/var ts=(e)=>{let{content:t,target:n,position:i}=e,o=Array.isArray(t)?_i(...t):_i(t);return is(o,n,i),document.body.append(o),o},is=(e,t,n)=>{{let{position:g}=getComputedStyle(e);if(g!=="fixed")e.style.position="fixed";Un(e)}let{left:i,top:o,width:a,height:s}=t.getBoundingClientRect(),l=i+a*0.5,r=o+s*0.5,d=window.innerWidth,p=window.innerHeight;if(n==="side")n=(l<d*0.5?"e":"w")+(r<p*0.5?"s":"n");else if(n==="auto"||n===void 0)n=(r<p*0.5?"s":"n")+(l<d*0.5?"e":"w");if(e.style.top=e.style.left=e.style.right=e.style.bottom=e.style.transform="",n.length===2){let[g,f]=n;switch(g){case"n":e.style.bottom=(p-o).toFixed(2)+"px";break;case"e":e.style.left=(i+a).toFixed(2)+"px";break;case"s":e.style.top=(o+s).toFixed(2)+"px";break;case"w":e.style.right=(d-i).toFixed(2)+"px";break}switch(f){case"n":e.style.bottom=(p-o-s).toFixed(2)+"px";break;case"e":e.style.left=i.toFixed(2)+"px";break;case"s":e.style.top=o.toFixed(2)+"px";break;case"w":e.style.right=(d-i-a).toFixed(2)+"px";break}e.style.transform=""}else if(n==="n")e.style.bottom=(p-o).toFixed(2)+"px",e.style.left=l.toFixed(2)+"px",e.style.transform="translateX(-50%)";else if(n==="s")e.style.top=(o+s).toFixed(2)+"px",e.style.left=l.toFixed(2)+"px",e.style.transform="translateX(-50%)";else if(n==="e")e.style.left=(i+a).toFixed(2)+"px",e.style.top=r.toFixed(2)+"px",e.style.transform="translateY(-50%)";else if(n==="w")e.style.right=(d-i).toFixed(2)+"px",e.style.top=r.toFixed(2)+"px",e.style.transform="translateY(-50%)";e.style.setProperty("--max-height",`calc(100vh - ${e.style.top||e.style.bottom})`),e.style.setProperty("--max-width",`calc(100vw - ${e.style.left||e.style.right})`)};/*!
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
*/var{div:Bi,button:y1,span:Me,a:os}=J;$a("xin-menu-helper",{".xin-menu":{overflow:"hidden auto",maxHeight:`calc(${T.maxHeight} - ${_.menuInset("8px")})`,borderRadius:T.spacing50,background:_.menuBg("#fafafa"),boxShadow:`${T.spacing13} ${T.spacing50} ${T.spacing} ${T.shadowColor}`},".xin-menu > div":{width:_.menuWidth("auto")},".xin-menu-trigger":{paddingLeft:0,paddingRight:0,minWidth:_.touchSize("48px")},".xin-menu-separator":{display:"inline-block",content:" ",height:"1px",width:"100%",background:_.menuItemColor("#222"),opacity:0.25,margin:_.menuSeparatorMargin("8px 0")},".xin-menu-item":{boxShadow:"none",border:"none !important",display:"grid",alignItems:"center",justifyContent:"flex-start",textDecoration:"none",gridTemplateColumns:"0px 1fr 30px",width:"100%",gap:0,background:"transparent",padding:_.menuItemPadding("0 16px"),height:_.menuItemHeight("48px"),lineHeight:_.menuItemHeight("48px"),textAlign:"left"},".xin-menu-item, .xin-menu-item > span":{color:_.menuItemColor("#222")},".xin-menu-with-icons .xin-menu-item":{gridTemplateColumns:"30px 1fr 30px"},".xin-menu-item svg":{fill:_.menuItemIconColor("#222")},".xin-menu-item.xin-menu-item-checked":{background:_.menuItemHoverBg("#eee")},".xin-menu-item > span:nth-child(2)":{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textAlign:"left"},".xin-menu-item:hover":{boxShadow:"none !important",background:_.menuItemHoverBg("#eee")},".xin-menu-item:active":{boxShadow:"none !important",background:_.menuItemActiveBg("#aaa"),color:_.menuItemActiveColor("#000")},".xin-menu-item:active svg":{fill:_.menuItemIconActiveColor("#000")}});var as=(e)=>{let t=e.checked&&e.checked()&&"check"||!1,n=e?.icon||t||Me(" ");if(typeof n==="string")n=F[n]();let i;if(typeof e?.action==="string")i=os({class:"xin-menu-item",href:e.action},n,Me(e.caption),Me(e.shortcut||" "));else i=y1({class:"xin-menu-item",onClick:e.action},n,Me(e.caption),Me(e.shortcut||" "));if(i.classList.toggle("xin-menu-item-checked",t!==!1),e?.enabled&&!e.enabled())i.setAttribute("disabled","");return i},ss=(e,t)=>{let n=e.checked&&e.checked()&&"check"||!1,i=e?.icon||n||Me(" ");if(typeof i==="string")i=F[i]();let o=y1({class:"xin-menu-item",disabled:!(!e.enabled||e.enabled()),onClick(a){zn(Object.assign({},t,{menuItems:e.menuItems,target:o,submenuDepth:(t.submenuDepth||0)+1,position:"side"})),a.stopPropagation(),a.preventDefault()}},i,Me(e.caption),F.chevronRight({style:{justifySelf:"flex-end"}}));return o},ls=(e,t)=>{if(e===null)return Me({class:"xin-menu-separator"});else if(e?.action)return as(e);else return ss(e,t)},rs=(e)=>{let{target:t,width:n,menuItems:i}=e,o=i.find((a)=>a?.icon||a?.checked);return Bi({class:o?"xin-menu xin-menu-with-icons":"xin-menu",onClick(){an(0)}},Bi({style:{minWidth:t.offsetWidth+"px",width:typeof n==="number"?`${n}px`:n},onMousedown(a){a.preventDefault(),a.stopPropagation()}},...i.map((a)=>ls(a,e))))},en,Gn=[],an=(e=0)=>{let t=Gn.splice(e);for(let n of t)n.menu.remove();return en=t[0],e>0?Gn[e-1]:void 0};document.body.addEventListener("mousedown",(e)=>{if(e.target&&!Gn.find((t)=>t.target.contains(e.target)))an(0)});document.body.addEventListener("keydown",(e)=>{if(e.key==="Escape")an(0)});var zn=(e)=>{e=Object.assign({submenuDepth:0},e);let{target:t,position:n,submenuDepth:i}=e;if(en&&!document.body.contains(en?.menu))en=void 0;if(i===0&&en?.target===t)return;let o=an(i);if(en?.target===t)return;if(o&&o.target===t){an();return}let a=rs(e),s=ts({content:a,target:t,position:n});s.remainOnScroll="remove",Gn.push({target:t,menu:s})},cs={};Va(cs,{init:()=>S1,draggedElement:()=>gs});/*!
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
*/var ds=()=>!!document.querySelector(".drag-source"),w1=(e,t)=>{if(!e)return!1;for(let n of e)if(n==="special/any")return!0;else if(n.indexOf("*")>-1){let[i,o]=n.split("/"),[a,s]=t.split("/");if((i==="*"||i===a)&&(o==="*"||o===s))return!0}else if(n===t)return!0},Wn=(e)=>{for(let t of[...document.querySelectorAll(`.${e}`)])t.classList.remove(e)},M1=()=>{Wn("drag-over"),Wn("drag-source"),Wn("drag-target")},Nt=(e,t=";")=>{return(e||"").split(t).map((n)=>n.trim()).filter((n)=>n!=="")},z1=(e)=>{if(!e)e=[];let t=[...document.querySelectorAll("[data-drop]")];for(let n of t){let i=Nt(n.dataset.drop);if(e.find((o)=>w1(i,o)))n.classList.add("drag-target");else n.classList.remove("drag-target")}};function hs(e){let t=e.target?.closest('[draggable="true"],a[href]');if(!t)return;t.classList.add("drag-source");let n=t.matches('[draggable="true"]')?Nt(t.dataset.drag||"text/html"):Nt(t.dataset.drag||"url");for(let i of n){let o=t.dataset.dragContent||(i==="text/html"?t.innerHTML:t.textContent);e.dataTransfer?.setData(i,o||"")}z1(e.dataTransfer?.types),e.stopPropagation()}function Ni(e){if(!ds())z1(e.dataTransfer?.types);let t=e.target.closest(".drag-target");if(t&&e.dataTransfer)t.classList.add("drag-over"),e.dataTransfer.dropEffect="copy";else e.preventDefault(),e.stopPropagation()}function ps(){Wn("drag-over")}function us(e){let t=e.target.closest(".drag-target");if(t){let n=(t.dataset?.drop||"").split(";");for(let i of n)if(w1(e.dataTransfer?.types,i))if(i==="text/html")t.innerHTML=e.dataTransfer?.getData(i)||"";else t.textContent=e.dataTransfer?.getData(i)||""}M1()}var gs=()=>document.querySelector(".drag-source"),Vi=!1,S1=()=>{if(Vi)return;document.body.addEventListener("dragstart",hs),document.body.addEventListener("dragenter",Ni),document.body.addEventListener("dragover",Ni),document.body.addEventListener("drop",us),document.body.addEventListener("dragleave",ps),document.body.addEventListener("dragend",M1),window.addEventListener("dragover",(e)=>e.preventDefault()),window.addEventListener("drop",(e)=>e.preventDefault()),Vi=!0};/*!
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
*/function ms(e,t,n){let i=e.find((o)=>o[t]!==void 0&&o[t]!==null);if(i!==void 0){let o=i[t];switch(typeof o){case"string":if(o.match(/^\d+(\.\d+)?$/))return 6*n;else if(o.includes(" "))return 20*n;else return 12*n;case"number":return 6*n;case"boolean":return 5*n;case"object":return!1;default:return 8*n}}return!1}var{div:Qe,span:Bn,button:fs,template:bs}=J,Wi=(e)=>e;class C1 extends U{select=!1;multiple=!1;nosort=!1;nohide=!1;noreorder=!1;selectionChanged=()=>{};selectedKey=Symbol("selected");selectBinding=(e,t)=>{e.toggleAttribute("aria-selected",t[this.selectedKey]===!0)};pinnedTop=0;pinnedBottom=0;maxVisibleRows=1e4;get value(){return{array:this.array,filter:this.filter,columns:this.columns}}set value(e){let{array:t,columns:n,filter:i}=un(e);if(this._array!==t||this._columns!==n||this._filter!==i)this.queueRender();this._array=t||[],this._columns=n||null,this._filter=i||Wi}rowData={visible:[],pinnedTop:[],pinnedBottom:[]};_array=[];_columns=null;_filter=Wi;charWidth=15;rowHeight=30;minColumnWidth=30;get virtual(){return this.rowHeight>0?{height:this.rowHeight}:void 0}constructor(){super();this.rowData=u1({[this.instanceId]:this.rowData},!0)[this.instanceId],this.initAttributes("rowHeight","charWidth","minColumnWidth","select","multiple","pinnedTop","pinnedBottom","nosort","nohide","noreorder")}get array(){return this._array}set array(e){this._array=un(e),this.queueRender()}get filter(){return this._filter}set filter(e){if(this._filter!==e)this._filter=e,this.queueRender()}get sort(){if(this._sort)return this._sort;let e=this._columns?.find((n)=>n.sort==="ascending"||n.sort==="descending");if(!e)return;let{prop:t}=e;return e.sort==="ascending"?(n,i)=>n[t]>i[t]?1:-1:(n,i)=>n[t]>i[t]?-1:1}set sort(e){if(this._sort!==e)this._sort=e,this.queueRender()}get columns(){if(!Array.isArray(this._columns)){let{_array:e}=this;this._columns=Object.keys(e[0]||{}).map((t)=>{let n=ms(e,t,this.charWidth);return{name:t.replace(/([a-z])([A-Z])/g,"$1 $2").toLocaleLowerCase(),prop:t,align:typeof e[0][t]==="number"||e[0][t]!==""&&!isNaN(e[0][t])?"right":"left",visible:n!==!1,width:n?n:0}})}return this._columns}set columns(e){this._columns=e,this.queueRender()}get visibleColumns(){return this.columns.filter((e)=>e.visible!==!1)}content=null;getColumn(e){let t=(e.touches!==void 0?e.touches[0].clientX:e.clientX)-this.getBoundingClientRect().x,n=e.touches!==void 0?20:5,i=0,o=[];return this.visibleColumns.find((a)=>{if(a.visible!==!1)return i+=a.width,o.push(i),Math.abs(t-i)<n})}setCursor=(e)=>{if(this.getColumn(e)!==void 0)this.style.cursor="col-resize";else this.style.cursor=""};resizeColumn=(e)=>{let t=this.getColumn(e);if(t!==void 0){let n=Number(t.width),i=e.touches!==void 0,o=i?e.touches[0].identifier:void 0;Pe(e,(a,s,l)=>{if((i?[...l.touches].find((d)=>d.identifier===o):!0)===void 0)return!0;let r=n+a;if(t.width=r>this.minColumnWidth?r:this.minColumnWidth,this.setColumnWidths(),l.type==="mouseup")return!0},"col-resize")}};selectRow(e,t=!0){if(t)e[this.selectedKey]=!0;else delete e[this.selectedKey]}selectRows(e,t=!0){for(let n of e||this.array)this.selectRow(n,t)}deSelect(e){this.selectRows(e,!1)}rangeStart;updateSelection=(e)=>{if(!this.select&&!this.multiple)return;let{target:t}=e;if(!(t instanceof HTMLElement))return;let n=t.closest(".tr");if(!(n instanceof HTMLElement))return;let i=Ra(n);if(i===!1)return;let o=e,a=window.getSelection();if(a!==null)a.removeAllRanges();let s=this.visibleRows;if(this.multiple&&o.shiftKey&&s.length>0&&this.rangeStart!==i){let l=this.rangeStart===void 0||this.rangeStart[this.selectedKey]===!0,[r,d]=[this.rangeStart!==void 0?s.indexOf(this.rangeStart):0,s.indexOf(i)].sort((p,g)=>p-g);if(r>-1)for(let p=r;p<=d;p++){let g=s[p];this.selectRow(g,l)}}else if(this.multiple&&o.metaKey){this.selectRow(i,!i[this.selectedKey]);let l=s.indexOf(i),r=s[l+1],d=l>0?s[l-1]:void 0;if(r!==void 0&&r[this.selectedKey]===!0)this.rangeStart=r;else if(d!==void 0&&d[this.selectedKey]===!0)this.rangeStart=d;else this.rangeStart=void 0}else this.rangeStart=i,this.deSelect(),i[this.selectedKey]=!0;this.selectionChanged(this.visibleSelectedRows)};connectedCallback(){super.connectedCallback(),this.addEventListener("mousemove",this.setCursor),this.addEventListener("mousedown",this.resizeColumn),this.addEventListener("touchstart",this.resizeColumn,{passive:!0}),this.addEventListener("mouseup",this.updateSelection),this.addEventListener("touchend",this.updateSelection)}setColumnWidths(){this.style.setProperty("--grid-columns",this.visibleColumns.map((e)=>e.width+"px").join(" ")),this.style.setProperty("--grid-row-width",this.visibleColumns.reduce((e,t)=>e+t.width,0)+"px")}sortByColumn=(e,t="auto")=>{for(let n of this.columns.filter((i)=>un(i.sort)!==!1))if(un(n)===e){if(t==="auto")n.sort=n.sort==="ascending"?"descending":"ascending";else n.sort=t;this.queueRender()}else delete n.sort};popColumnMenu=(e,t)=>{let{sortByColumn:n}=this,i=this.columns.filter((s)=>s.visible===!1),o=this.queueRender.bind(this),a=[];if(!this.nosort&&t.sort!==!1)a.push({caption:"Sort Ascending",icon:"sortAscending",action(){n(t)}},{caption:"Sort Descending",icon:"sortDescending",action(){n(t,"descending")}});if(!this.nohide){if(a.length)a.push(null);a.push({caption:"Hide Column",icon:"eyeOff",enabled:()=>t.visible!==!0,action(){t.visible=!1,o()}},{caption:"Show Column",icon:"eye",enabled:()=>i.length>0,menuItems:i.map((s)=>{return{caption:s.name||s.prop,action(){delete s.visible,o()}}})})}zn({target:e,menuItems:a})};headerCell=(e)=>{let{popColumnMenu:t}=this,n="none",i;switch(e.sort){case"ascending":i=F.sortAscending(),n="descending";break;case!1:break;default:break;case"descending":n="ascending",i=F.sortDescending()}let o=!(this.nosort&&this.nohide)?fs({class:"menu-trigger",onClick(a){t(a.target,e),a.stopPropagation()}},i||F.moreVertical()):{};return e.headerCell!==void 0?e.headerCell(e):Bn({class:"th",role:"columnheader",ariaSort:n,style:{...this.cellStyle,textAlign:e.align||"left"}},Bn(typeof e.name==="string"?e.name:e.prop),Bn({style:{flex:"1"}}),o)};dataCell=(e)=>{if(e.dataCell!==void 0)return e.dataCell(e);return Bn({class:"td",role:"cell",style:{...this.cellStyle,textAlign:e.align||"left"},bindText:`^.${e.prop}`})};get visibleRows(){return un(this.rowData.visible)}get visibleSelectedRows(){return this.visibleRows.filter((e)=>e[this.selectedKey])}get selectedRows(){return this.array.filter((e)=>e[this.selectedKey])}rowTemplate(e){return bs(Qe({class:"tr",role:"row",bind:{value:"^",binding:{toDOM:this.selectBinding}}},...e.map(this.dataCell)))}draggedColumn;dropColumn=(e)=>{let t=e.target.closest(".drag-over"),n=Array.from(t.parentElement.children).indexOf(t),i=this.visibleColumns[n],o=this.columns.indexOf(this.draggedColumn),a=this.columns.indexOf(i);this.columns.splice(o,1),this.columns.splice(a,0,this.draggedColumn),console.log({event:e,target:t,targetIndex:n,draggedIndex:o,droppedIndex:a}),this.queueRender(),e.preventDefault(),e.stopPropagation()};render(){super.render(),this.rowData.pinnedTop=this.pinnedTop>0?this._array.slice(0,this.pinnedTop):[],this.rowData.pinnedBottom=this.pinnedBottom>0?this._array.slice(this._array.length-this.pinnedBottom):[],this.rowData.visible=this.filter(this._array.slice(this.pinnedTop,Math.min(this.maxVisibleRows,this._array.length-this.pinnedTop-this.pinnedBottom)));let{sort:e}=this;if(e)this.rowData.visible.sort(e);this.textContent="",this.style.display="flex",this.style.flexDirection="column";let{visibleColumns:t}=this;if(this.style.setProperty("--row-height",`${this.rowHeight}px`),this.setColumnWidths(),!this.noreorder)S1();let n=this.instanceId+"-column-header",i=t.map((o)=>{let a=this.headerCell(o);if(!this.noreorder)a.setAttribute("draggable","true"),a.dataset.drag=n,a.dataset.drop=n,a.addEventListener("dragstart",()=>{this.draggedColumn=o}),a.addEventListener("drop",this.dropColumn);return a});if(this.append(Qe({class:"thead",role:"rowgroup",style:{touchAction:"none"}},Qe({class:"tr",role:"row"},...i))),this.pinnedTop>0)this.append(Qe({part:"pinnedTopRows",class:"tbody",role:"rowgroup",style:{flex:"0 0 auto",overflow:"hidden",height:`${this.rowHeight*this.pinnedTop}px`},bindList:{value:this.rowData.pinnedTop,virtual:this.virtual}},this.rowTemplate(t)));if(this.append(Qe({part:"visibleRows",class:"tbody",role:"rowgroup",style:{content:" ",minHeight:"100px",flex:"1 1 100px",overflow:"hidden auto"},bindList:{value:this.rowData.visible,virtual:this.virtual}},this.rowTemplate(t))),this.pinnedBottom>0)this.append(Qe({part:"pinnedBottomRows",class:"tbody",role:"rowgroup",style:{flex:"0 0 auto",overflow:"hidden",height:`${this.rowHeight*this.pinnedBottom}px`},bindList:{value:this.rowData.pinnedBottom,virtual:this.virtual}},this.rowTemplate(t)))}}var z3=C1.elementCreator({tag:"xin-table",styleSpec:{":host":{overflow:"auto hidden"},":host .thead, :host .tbody":{width:T.gridRowWidth},":host .tr":{display:"grid",gridTemplateColumns:T.gridColumns,height:T.rowHeight,lineHeight:T.rowHeight},":host .td, :host .th":{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",display:"flex",alignItems:"center"},":host .th .menu-trigger":{color:"currentColor",background:"none",padding:0,lineHeight:T.touchSize,height:T.touchSize,width:T.touchSize},':host [draggable="true"]':{cursor:"ew-resize"},':host [draggable="true"]:active':{background:_.draggedHeaderBg("#0004"),color:_.draggedHeaderColor("#fff")},":host .drag-over":{background:_.dropHeaderBg("#fff4")}}});/*!
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
*/var{div:ce,slot:vs}=J;class ge extends U{static angleSize=15;static gridSize=8;static snapAngle=!1;static snapToGrid=!1;static styleSpec={":host":{"--handle-bg":"#fff4","--handle-color":"#2228","--handle-hover-bg":"#8ff8","--handle-hover-color":"#222","--handle-size":"20px","--handle-padding":"2px"},":host ::slotted(*)":{position:"absolute"},":host > :not(style,slot)":{boxSizing:"border-box",content:'" "',position:"absolute",display:"flex",height:T.handleSize,width:T.handleSize,padding:T.handlePadding,"--text-color":T.handleColor,background:T.handleBg},":host > .drag-size":{top:0,bottom:0,left:0,right:0,height:"auto",width:"auto",background:"transparent",cursor:"ew-resize"},':host > [part="rotate"]':{transform:`translateY(${T.handleSize_50})`},":host > [locked] > svg:first-child, :host > :not([locked]) > svg+svg":{display:"none"},":host .icon-unlock":{opacity:0.5},":host svg":{pointerEvents:"none"},":host > *:hover":{"--text-color":T.handleHoverColor,background:T.handleHoverBg}};static snappedCoords(e,t){let{gridSize:n}=ge;return ge.snapToGrid||e.shiftKey?t.map((i)=>Math.round(i/n)*n):t}static snappedAngle(e,t){let{angleSize:n}=ge;return ge.snapAngle||e.shiftKey?Math.round(t/n)*n:t}get locked(){let e=this.parentElement;if(e.style.inset)return{left:!0,top:!0,bottom:!0,right:!0};let t=e.style.right.match(/\d/)!==null,n=!t||e.style.left.match(/\d/)!==null,i=e.style.bottom.match(/\d/)!==null,o=!i||e.style.top.match(/\d/)!==null;return{left:n,top:o,bottom:i,right:t}}set locked(e){let{bottom:t,right:n}=e,{left:i,top:o}=e,a=this.parentElement,s=a.offsetLeft,l=a.offsetTop,r=a.offsetWidth,d=a.offsetHeight,p=a.offsetParent.offsetWidth-s-r,g=a.offsetParent.offsetHeight-l-d;if(Object.assign(a.style,{left:"",right:"",top:"",bottom:"",width:"",height:""}),!n)i=!0;if(!t)o=!0;if(i)a.style.left=s+"px";if(n)a.style.right=p+"px";if(i&&n)a.style.width="auto";else a.style.width=r+"px";if(o)a.style.top=l+"px";if(t)a.style.bottom=g+"px";if(o&&t)a.style.height="auto";else a.style.height=d+"px";this.queueRender()}get coords(){let{top:e,left:t,right:n,bottom:i}=this.parentElement.style;return{top:parseFloat(e),left:parseFloat(t),right:parseFloat(n),bottom:parseFloat(i)}}get left(){return this.parentElement.offsetLeft}get width(){return this.parentElement.offsetWidth}get right(){return this.parentElement.offsetParent.offsetWidth-(this.left+this.width)}get top(){return this.parentElement.offsetTop}get height(){return this.parentElement.offsetHeight}get bottom(){return this.parentElement.offsetParent.offsetHeight-(this.top+this.height)}triggerChange=()=>{this.parentElement.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))};adjustPosition=(e)=>{let{locked:t}=this;this.locked=t;let n=this.parentElement,{top:i,left:o,bottom:a,right:s}=this.coords;Pe(e,(l,r,d)=>{if([l,r]=ge.snappedCoords(d,[l,r]),!isNaN(i))n.style.top=i+r+"px";if(!isNaN(a))n.style.bottom=a-r+"px";if(!isNaN(o))n.style.left=o+l+"px";if(!isNaN(s))n.style.right=s-l+"px";if(d.type==="mouseup")return this.triggerChange(),!0})};resize=(e)=>{let t=this.parentElement,{locked:n}=this;this.locked=Object.assign({left:!0,top:!0,right:!0,bottom:!0});let[i,o]=[this.right,this.bottom];Pe(e,(a,s,l)=>{let r=i-a,d=o-s;if([r,d]=ge.snappedCoords(l,[r,d]),t.style.right=r+"px",t.style.bottom=d+"px",l.type==="mouseup")return this.locked=n,this.triggerChange(),!0})};adjustSize=(e)=>{let t=this.parentElement,{locked:n}=this,i=e.target.getAttribute("part");this.locked=Object.assign({left:!0,right:!0,top:!0,bottom:!0});let o=this[i];Pe(e,(a,s,l)=>{let[r]=ge.snappedCoords(l,[o+(["left","right"].includes(i)?a:s)*(["right","bottom"].includes(i)?-1:1)]);if(t.style[i]=r+"px",l.type==="mouseup")return this.locked=n,this.triggerChange(),!0})};get rect(){return this.parentElement.getBoundingClientRect()}get center(){let e=this.parentElement.getBoundingClientRect();return{x:e.x+e.width*0.5,y:e.y+e.height*0.5}}get element(){return this.parentElement}adjustRotation=(e)=>{let{center:t}=this,{transformOrigin:n}=this.element.style;if(!n)this.element.style.transformOrigin="50% 50%";Pe(e,(i,o,a)=>{let{clientX:s,clientY:l}=a,r=s-t.x,d=l-t.y,p=d>0?90:-90;if(r!==0)p=Math.atan2(d,r)*180/Math.PI;if(p=ge.snappedAngle(a,p),p===0)this.element.style.transformOrigin="",this.element.style.transform="";else this.element.style.transform=`rotate(${p}deg)`;return this.triggerChange(),a.type==="mouseup"})};toggleLock=(e)=>{let{locked:t}=this,n=e.target.title.split(" ")[1];t[n]=!t[n],this.locked=t,this.queueRender(),e.stopPropagation(),e.preventDefault()};content=()=>[ce({part:"move",style:{top:"50%",left:"50%",transform:"translate(-50%,-50%)"}},F.move()),ce({part:"left",title:"resize left",class:"drag-size",style:{left:"-6px",width:"8px"}}),ce({part:"right",title:"resize right",class:"drag-size",style:{left:"calc(100% - 2px)",width:"8px"}}),ce({part:"top",title:"resize top",class:"drag-size",style:{top:"-6px",height:"8px",cursor:"ns-resize"}}),ce({part:"bottom",title:"resize bottom",class:"drag-size",style:{top:"calc(100% - 2px)",height:"8px",cursor:"ns-resize"}}),ce({part:"resize",style:{top:"100%",left:"100%"}},F.resize()),ce({part:"rotate",style:{top:"50%",right:"0"}},F.refresh()),ce({part:"lockLeft",title:"lock left",style:{top:"50%",left:0,transform:"translate(-100%, -50%)"}},F.unlock(),F.lock()),ce({part:"lockRight",title:"lock right",style:{top:"50%",left:"100%",transform:"translate(0%, -50%)"}},F.unlock(),F.lock()),ce({part:"lockTop",title:"lock top",style:{top:0,left:"50%",transform:"translate(-50%, -100%)"}},F.unlock(),F.lock()),ce({part:"lockBottom",title:"lock bottom",style:{top:"100%",left:"50%",transform:"translate(-50%, 0%)"}},F.unlock(),F.lock()),vs()];constructor(){super();this.initAttributes("rotationSnap","positionSnap")}connectedCallback(){super.connectedCallback();let{left:e,right:t,top:n,bottom:i,lockLeft:o,lockRight:a,lockTop:s,lockBottom:l,move:r,resize:d,rotate:p}=this.parts,g={passive:!0};[e,t,n,i].forEach((f)=>{f.addEventListener("mousedown",this.adjustSize,g),f.addEventListener("touchstart",this.adjustSize,g)}),[o,a,s,l].forEach((f)=>{f.addEventListener("click",this.toggleLock)}),d.addEventListener("mousedown",this.resize,g),r.addEventListener("mousedown",this.adjustPosition,g),p.addEventListener("mousedown",this.adjustRotation,g),d.addEventListener("touchstart",this.resize,g),r.addEventListener("touchstart",this.adjustPosition,g),p.addEventListener("touchstart",this.adjustRotation,g)}render(){if(super.render(),!this.parentElement)return;let{lockLeft:e,lockRight:t,lockTop:n,lockBottom:i}=this.parts,{left:o,right:a,top:s,bottom:l}=this.locked;e.toggleAttribute("locked",o),t.toggleAttribute("locked",a),n.toggleAttribute("locked",s),i.toggleAttribute("locked",l)}}var S3=ge.elementCreator({tag:"xin-editable"});/*!
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
*/var{div:xs,input:ys,select:$i,option:gn,button:Vt,span:ws}=J,Ri=(e)=>e,Ui="null filter, everything matches",T1={contains:{caption:"contains",negative:"does not contain",makeTest:(e)=>{return e=e.toLocaleLowerCase(),(t)=>String(t).toLocaleLowerCase().includes(e)}},hasTags:{caption:"has tags",makeTest:(e)=>{let t=e.split(/[\s,]/).map((n)=>n.trim().toLocaleLowerCase()).filter((n)=>n!=="");return console.log(t),(n)=>Array.isArray(n)&&t.find((i)=>!n.includes(i))===void 0}},doesNotHaveTags:{caption:"does not have tags",makeTest:(e)=>{let t=e.split(/[\s,]/).map((n)=>n.trim().toLocaleLowerCase()).filter((n)=>n!=="");return console.log(t),(n)=>Array.isArray(n)&&t.find((i)=>n.includes(i))===void 0}},equals:{caption:"=",negative:"≠",makeTest:(e)=>{if(isNaN(Number(e)))return e=String(e).toLocaleLowerCase(),(n)=>String(n).toLocaleLowerCase()===e;let t=Number(e);return(n)=>Number(n)===t}},after:{caption:"is after",negative:"is before",makeTest:(e)=>{let t=new Date(e);return(n)=>new Date(n)>t}},greaterThan:{caption:">",negative:"≤",makeTest:(e)=>{if(!isNaN(Number(e))){let t=Number(e);return(n)=>Number(n)>t}return e=e.toLocaleLowerCase(),(t)=>String(t).toLocaleLowerCase()>e}},truthy:{caption:"is true/non-empty/non-zero",negative:"is false/empty/zero",needsValue:!1,makeTest:()=>(e)=>!!e},isTrue:{caption:"= true",needsValue:!1,makeTest:()=>(e)=>e===!0},isFalse:{caption:"= false",needsValue:!1,makeTest:()=>(e)=>e===!1}},Ms={description:"anything",test:()=>!0};function Gi(e){return e.options[e.selectedIndex].text}class j1 extends U{fields=[];filters=T1;haystack="*";condition="";needle="";content=()=>[$i({part:"haystack"}),F.chevronDown(),$i({part:"condition"}),F.chevronDown(),ys({part:"needle",type:"search"}),ws({part:"padding"}),Vt({part:"remove",title:"delete"},F.trash())];filter=Ms;constructor(){super();this.initAttributes("haystack","condition","needle")}get state(){let{haystack:e,needle:t,condition:n}=this.parts;return{haystack:e.value,needle:t.value,condition:n.value}}set state(e){Object.assign(this,e)}buildFilter=()=>{let{haystack:e,condition:t,needle:n}=this.parts,i=t.value.startsWith("~"),o=i?t.value.slice(1):t.value,a=this.filters[o];n.hidden=a.needsValue===!1;let s=a.needsValue===!1?a.makeTest(void 0):a.makeTest(n.value),l=e.value,r;if(l!=="*")r=i?(g)=>!s(g[l]):(g)=>s(g[l]);else r=i?(g)=>Object.values(g).find((f)=>!s(f))!==void 0:(g)=>Object.values(g).find((f)=>s(f))!==void 0;let d=a.needsValue!==!1?` "${n.value}"`:"",p=`${Gi(e)} ${Gi(t)}${d}`;this.filter={description:p,test:r},this.parentElement?.dispatchEvent(new Event("change"))};connectedCallback(){super.connectedCallback();let{haystack:e,condition:t,needle:n,remove:i}=this.parts;e.addEventListener("change",this.buildFilter),t.addEventListener("change",this.buildFilter),n.addEventListener("input",this.buildFilter),e.value=this.haystack,t.value=this.condition,n.value=this.needle,i.addEventListener("click",()=>{let{parentElement:o}=this;this.remove(),o?.dispatchEvent(new Event("change"))})}render(){super.render();let{haystack:e,condition:t,needle:n}=this.parts;e.textContent="",e.append(gn("any field",{value:"*"}),...this.fields.map((o)=>{let a=o.name||o.prop;return gn(`${a}`,{value:o.prop})})),t.textContent="";let i=Object.keys(this.filters).map((o)=>{let a=this.filters[o];return a.negative!==void 0?[gn(a.caption,{value:o}),gn(a.negative,{value:"~"+o})]:gn(a.caption,{value:o})}).flat();if(t.append(...i),this.haystack!=="")e.value=this.haystack;if(this.condition!=="")t.value=this.condition;if(this.needle!=="")n.value=this.needle;this.buildFilter()}}var qt=j1.elementCreator({tag:"xin-filter-part",styleSpec:{":host":{display:"flex"},':host svg[class^="icon-"]:':{height:"var(--font-size, 16px)",verticalAlign:"middle",fill:"var(--text-color)",pointerEvents:"none"},':host [part="haystack"], :host [part="condition"]':{flex:"1"},':host [part="needle"]':{flex:2},':host [hidden]+[part="padding"]':{display:"block",content:" ",flex:"1 1 auto"}}});class I1 extends U{_fields=[];get fields(){return this._fields}set fields(e){this._fields=e,this.queueRender()}get state(){let{filterContainer:e}=this.parts;return[...e.children].map((t)=>t.state)}set state(e){let{fields:t,filters:n}=this,{filterContainer:i}=this.parts;i.textContent="";for(let o of e)i.append(qt({fields:t,filters:n,...o}))}filter=Ri;description=Ui;addFilter=()=>{let{fields:e,filters:t}=this,{filterContainer:n}=this.parts;n.append(qt({fields:e,filters:t}))};content=()=>[Vt({part:"add",title:"add filter condition",onClick:this.addFilter,class:"round"},F.plus()),xs({part:"filterContainer"}),Vt({part:"reset",title:"reset filter",onClick:this.reset},F.x())];filters=T1;reset=()=>{let{fields:e,filters:t}=this,{filterContainer:n}=this.parts;this.description=Ui,this.filter=Ri,n.textContent="",n.append(qt({fields:e,filters:t})),this.dispatchEvent(new Event("change"))};buildFilter=()=>{let{filterContainer:e}=this.parts;if(e.children.length===0){this.reset();return}let t=[...e.children].map((i)=>i.filter),n=t.map((i)=>i.test);this.description=t.map((i)=>i.description).join(", "),this.filter=(i)=>i.filter((o)=>n.find((a)=>a(o)===!1)===void 0),this.dispatchEvent(new Event("change"))};connectedCallback(){super.connectedCallback();let{filterContainer:e}=this.parts;e.addEventListener("change",this.buildFilter),this.reset()}render(){super.render()}}var C3=I1.elementCreator({tag:"xin-filter",styleSpec:{":host":{height:"auto",display:"grid",gridTemplateColumns:"32px calc(100% - 64px) 32px",alignItems:"center"},':host [part="filterContainer"]':{display:"flex",flexDirection:"column",alignItems:"stretch",flex:"1 1 auto"},':host [part="add"], :host [part="reset"]':{"--button-size":"var(--touch-size, 32px)",borderRadius:"999px",height:"var(--button-size)",lineHeight:"var(--button-size)",margin:"0",padding:"0",textAlign:"center",width:"var(--button-size)",flex:"0 0 var(--button-size)"}}});/*!
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
*/var{form:zs,slot:Ht,xinSlot:Yi,label:Ss,input:Cs,span:Ts}=J;function De(e,t,n){if(n!==""&&n!==!1)e.setAttribute(t,n);else e.removeAttribute(t)}function js(e){switch(e.type){case"checkbox":return e.checked;case"radio":{let t=e.parentElement?.querySelector(`input[type="radio"][name="${e.name}"]:checked`);return t?t.value:null}case"range":case"number":return Number(e.value);default:return Array.isArray(e.value)&&e.value.length===0?null:e.value}}function Ki(e,t){if(!(e instanceof HTMLElement));else if(e instanceof HTMLInputElement)switch(e.type){case"checkbox":e.checked=t;break;case"radio":e.checked=t===e.value;break;default:e.value=String(t||"")}else if(t!=null||e.value!=null)e.value=String(t||"")}class Wt extends U{caption="";key="";type="";optional=!1;pattern="";placeholder="";min="";max="";step="";fixedPrecision=-1;value=null;content=Ss(Yi({part:"caption"}),Ts({part:"field"},Yi({part:"input",name:"input"}),Cs({part:"valueHolder"})));constructor(){super();this.initAttributes("caption","key","type","optional","pattern","placeholder","min","max","step","fixedPrecision","prefix","suffix")}valueChanged=!1;handleChange=()=>{let{input:e,valueHolder:t}=this.parts,n=e.children[0]||t;if(n!==t)t.value=n.value;this.value=js(n),this.valueChanged=!0;let i=this.closest("xin-form");if(i&&this.key!=="")switch(this.type){case"checkbox":i.fields[this.key]=n.checked;break;case"number":case"range":if(this.fixedPrecision>-1)n.value=Number(n.value).toFixed(this.fixedPrecision),i.fields[this.key]=Number(n.value);else i.fields[this.key]=Number(n.value);break;default:i.fields[this.key]=n.value}};initialize(e){let t=e.fields[this.key]!==void 0?e.fields[this.key]:this.value;if(t!=null&&t!==""){if(e.fields[this.key]==null)e.fields[this.key]=t;this.value=t}}connectedCallback(){super.connectedCallback();let{input:e,valueHolder:t}=this.parts,n=this.closest(Yn.tagName);if(n instanceof Yn)this.initialize(n);t.addEventListener("change",this.handleChange),e.addEventListener("change",this.handleChange,!0)}render(){if(this.valueChanged){this.valueChanged=!1;return}let{input:e,caption:t,valueHolder:n,field:i}=this.parts;if(t.textContent?.trim()==="")t.append(this.caption!==""?this.caption:this.key);if(this.type==="text"){e.textContent="";let o=J.textarea({value:this.value});if(this.placeholder)o.setAttribute("placeholder",this.placeholder);e.append(o)}else if(this.type==="color")e.textContent="",e.append(es({value:this.value}));else if(e.children.length===0)De(n,"placeholder",this.placeholder),De(n,"type",this.type),De(n,"pattern",this.pattern),De(n,"min",this.min),De(n,"max",this.max),De(n,"step",this.step);if(Ki(n,this.value),Ki(e.children[0],this.value),this.prefix?i.setAttribute("prefix",this.prefix):i.removeAttribute("prefix"),this.suffix?i.setAttribute("suffix",this.suffix):i.removeAttribute("suffix"),n.classList.toggle("hidden",e.children.length>0),e.children.length>0)n.setAttribute("tabindex","-1");else n.removeAttribute("tabindex");e.style.display=e.children.length===0?"none":"",De(n,"required",!this.optional)}}class Yn extends U{context={};value={};get isValid(){return[...this.querySelectorAll("*")].filter((e)=>e.required!==void 0).find((e)=>!e.reportValidity())===void 0}static styleSpec={":host":{display:"flex",flexDirection:"column"},":host::part(header), :host::part(footer)":{display:"flex"},":host::part(content)":{display:"flex",flexDirection:"column",overflow:"hidden auto",height:"100%",width:"100%",position:"relative",boxSizing:"border-box"},":host form":{display:"flex",flex:"1 1 auto",position:"relative",overflow:"hidden"}};content=[Ht({part:"header",name:"header"}),zs({part:"form"},Ht({part:"content"})),Ht({part:"footer",name:"footer"})];getField=(e)=>{return this.querySelector(`xin-field[key="${e}"]`)};get fields(){if(typeof this.value==="string")try{this.value=JSON.parse(this.value)}catch(n){console.log("<xin-form> could not use its value, expects valid JSON"),this.value={}}let{getField:e}=this,t=this.dispatchEvent.bind(this);return new Proxy(this.value,{get(n,i){return n[i]},set(n,i,o){if(n[i]!==o){n[i]=o;let a=e(i);if(a)a.value=o;t(new Event("change"))}return!0}})}set fields(e){let t=[...this.querySelectorAll(Wt.tagName)];for(let n of t)n.value=e[n.key]}submit=()=>{this.parts.form.dispatchEvent(new Event("submit"))};handleSubmit=(e)=>{e.preventDefault(),e.stopPropagation(),this.submitCallback(this.value,this.isValid)};submitCallback=(e,t)=>{console.log("override submitCallback to handle this data",{value:e,isValid:t})};connectedCallback(){super.connectedCallback();let{form:e}=this.parts;e.addEventListener("submit",this.handleSubmit)}}var E1=Wt.elementCreator({tag:"xin-field",styleSpec:{':host [part="field"]':{position:"relative",display:"flex",alignItems:"center",gap:_.prefixSuffixGap("8px")},':host [part="field"][prefix]::before':{content:"attr(prefix)"},':host [part="field"][suffix]::after':{content:"attr(suffix)"},':host [part="field"] > *, :host [part="input"] > *':{width:"100%"},":host textarea":{resize:"none"},':host input[type="checkbox"]':{width:"fit-content"},":host .hidden":{position:"absolute",pointerEvents:"none",opacity:0}}}),A1=Yn.elementCreator({tag:"xin-form"});/*!
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
*/function Is(){return navigator.getGamepads().filter((e)=>e!==null).map((e)=>{let{id:t,axes:n,buttons:i}=e;return{id:t,axes:n,buttons:i.map((o,a)=>{let{pressed:s,value:l}=o;return{index:a,pressed:s,value:l}}).filter((o)=>o.pressed||o.value!==0).reduce((o,a)=>{return o[a.index]=a.value,o},{})}})}function T3(){let e=Is();return e.length===0?"no active gamepads":e.map(({id:t,axes:n,buttons:i})=>{let o=n.map((s)=>s.toFixed(2)).join(" "),a=Object.keys(i).map((s)=>`[${s}](${i[Number(s)].toFixed(2)})`).join(" ");return`${t}
${o}
${a}`}).join(`
`)}function j3(e){let t={};return e.input.onControllerAddedObservable.add((n)=>{n.onMotionControllerInitObservable.add((i)=>{let o={};i.getComponentIds().forEach((a)=>{let s=i.getComponent(a);if(o[a]={pressed:s.pressed},s.onButtonStateChangedObservable.add(()=>{o[a].pressed=s.pressed}),s.onAxisValueChangedObservable)o[a].axes=[],s.onAxisValueChangedObservable.add((l)=>{o[a].axes=l})}),t[i.handedness]=o})}),t}function I3(e){if(e===void 0||Object.keys(e).length===0)return"no xr inputs";return Object.keys(e).map((t)=>{let n=e[t],i=Object.keys(n).filter((o)=>n[o].pressed).join(" ");return`${t}
${i}`}).join(`
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
*/var{div:qe,slot:Xi,span:Es,button:As}=J;class $t extends U{value=0;static makeTab(e,t,n){let i=t.querySelector('template[role="tab"]')?.content.cloneNode(!0)||Es(t.getAttribute("name"));return qe(i,{part:"tab",tabindex:0,role:"tab",ariaControls:n},t.hasAttribute("data-close")?As({title:"close",class:"close"},F.x()):{})}static styleSpec={":host":{display:"flex",flexDirection:"column",position:"relative",overflow:"hidden",boxShadow:"none !important"},slot:{position:"relative",display:"block",flex:"1",overflow:"hidden",overflowY:"auto"},'slot[name="after-tabs"]':{flex:"0 0 auto"},"::slotted([hidden])":{display:"none !important"},":host::part(tabpanel)":{display:"flex",flexDirection:"column",overflowX:"auto"},":host::part(tabrow)":{display:"flex"},":host .tabs":{display:"flex",userSelect:"none",whiteSpace:"nowrap"},":host .tabs > div":{padding:`${T.spacing50} ${T.spacing}`,cursor:"default",display:"flex",alignItems:"baseline"},':host .tabs > [aria-selected="true"]':{"--text-color":T.xinTabsSelectedColor,color:T.textColor},":host .elastic":{flex:"1"},":host .border":{background:"var(--xin-tabs-bar-color, #ccc)"},":host .border > .selected":{content:" ",width:0,height:"var(--xin-tabs-bar-height, 2px)",background:T.xinTabsSelectedColor,transition:"ease-out 0.2s"},":host button.close":{fill:T.textColor,border:0,background:"transparent",textAlign:"center",marginLeft:T.spacing50,padding:0},":host button.close > svg":{height:"12px"}};onCloseTab=null;content=[qe({role:"tabpanel",part:"tabpanel"},qe({part:"tabrow"},qe({class:"tabs",part:"tabs"}),qe({class:"elastic"}),Xi({name:"after-tabs"})),qe({class:"border"},qe({class:"selected",part:"selected"}))),Xi()];constructor(){super();this.initAttributes("anne","example")}addTabBody(e,t=!1){if(!e.hasAttribute("name"))throw console.error("element has no name attribute",e),new Error("element has no name attribute");if(this.append(e),this.setupTabs(),t)this.value=this.bodies.length-1;this.queueRender()}removeTabBody(e){e.remove(),this.setupTabs(),this.queueRender()}keyTab=(e)=>{let{tabs:t}=this.parts,n=[...t.children].indexOf(e.target);switch(e.key){case"ArrowLeft":this.value=(n+Number(t.children.length)-1)%t.children.length,t.children[this.value].focus(),e.preventDefault();break;case"ArrowRight":this.value=(n+1)%t.children.length,t.children[this.value].focus(),e.preventDefault();break;case" ":this.pickTab(e),e.preventDefault();break;default:}};get bodies(){return[...this.children].filter((e)=>e.hasAttribute("name"))}pickTab=(e)=>{let{tabs:t}=this.parts,n=e.target,i=n.closest("button.close")!==null,o=n.closest(".tabs > div"),a=[...t.children].indexOf(o);if(i){let s=this.bodies[a];if(!this.onCloseTab||this.onCloseTab(s)!==!1)this.removeTabBody(this.bodies[a])}else if(a>-1)this.value=a};setupTabs=()=>{let{tabs:e}=this.parts,t=[...this.children].filter((n)=>!n.hasAttribute("slot")&&n.hasAttribute("name"));if(e.textContent="",this.value>=t.length)this.value=t.length-1;for(let n in t){let i=t[n],o=`${this.instanceId}-${n}`;i.id=o;let a=$t.makeTab(this,i,o);e.append(a)}};connectedCallback(){super.connectedCallback();let{tabs:e}=this.parts;e.addEventListener("click",this.pickTab),e.addEventListener("keydown",this.keyTab),this.setupTabs()}onResize(){this.queueRender()}render(){let{tabs:e,selected:t}=this.parts,n=this.bodies;for(let i=0;i<n.length;i++){let o=n[i],a=e.children[i];if(this.value===Number(i))a.setAttribute("aria-selected","true"),t.style.marginLeft=`${a.offsetLeft-e.offsetLeft}px`,t.style.width=`${a.offsetWidth}px`,o.toggleAttribute("hidden",!1);else a.toggleAttribute("aria-selected",!1),o.toggleAttribute("hidden",!0)}}}var Ls=$t.elementCreator({tag:"xin-tabs"});/*!
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
*/var{div:Nn,xinSlot:ks,style:Fs,button:He,h4:Os,pre:Ds}=J,qs=(async()=>{}).constructor;class Sn extends U{persistToDom=!1;prettier=!1;prefix="lx";storageKey="live-example-payload";context={};uuid=crypto.randomUUID();remoteId="";lastUpdate=0;interval;static insertExamples(e,t={}){let n=[...e.querySelectorAll(".language-html,.language-js,.language-css")].filter((i)=>!i.closest(Sn.tagName)).map((i)=>({block:i.parentElement,language:i.classList[0].split("-").pop(),code:i.innerText}));for(let i=0;i<n.length;i+=1){let o=[n[i]];while(i<n.length-1&&n[i].block.nextElementSibling===n[i+1].block)o.push(n[i+1]),i+=1;let a=Rt({context:t});o[0].block.parentElement.insertBefore(a,o[0].block),o.forEach((s)=>{switch(s.language){case"js":a.js=s.code;break;case"html":a.html=s.code;break;case"css":a.css=s.code;break}s.block.remove()}),a.showDefaultTab()}}constructor(){super();this.initAttributes("persistToDom","prettier")}get activeTab(){let{editors:e}=this.parts;return[...e.children].find((t)=>t.getAttribute("hidden")===null)}getEditorValue(e){return this.parts[e].value}setEditorValue(e,t){let n=this.parts[e];n.value=t}get css(){return this.getEditorValue("css")}set css(e){this.setEditorValue("css",e)}get html(){return this.getEditorValue("html")}set html(e){this.setEditorValue("html",e)}get js(){return this.getEditorValue("js")}set js(e){this.setEditorValue("js",e)}updateUndo=()=>{let{activeTab:e}=this,{undo:t,redo:n}=this.parts;if(e instanceof vn&&e.editor!==void 0){let i=e.editor.session.getUndoManager();t.disabled=!i.hasUndo(),n.disabled=!i.hasRedo()}else t.disabled=!0,n.disabled=!0};undo=()=>{let{activeTab:e}=this;if(e instanceof vn)e.editor.undo()};redo=()=>{let{activeTab:e}=this;if(e instanceof vn)e.editor.redo()};get isMaximized(){return this.classList.contains("-maximize")}flipLayout=()=>{this.classList.toggle("-vertical")};exampleMenu=()=>{zn({target:this.parts.exampleWidgets,width:"auto",menuItems:[{icon:"edit",caption:"view/edit code",action:this.showCode},{icon:"editDoc",caption:"view/edit code in a new window",action:this.openEditorWindow},null,{icon:this.isMaximized?"minimize":"maximize",caption:this.isMaximized?"restore preview":"maximize preview",action:this.toggleMaximize}]})};content=()=>[Nn({part:"example"},Fs({part:"style"}),He({title:"example menu",part:"exampleWidgets",onClick:this.exampleMenu},F.code())),Nn({class:"code-editors",part:"codeEditors",hidden:!0},Os("Code"),He({title:"close code",class:"transparent close-button",onClick:this.closeCode},F.x()),Ls({part:"editors",onChange:this.updateUndo},Ot({name:"js",mode:"javascript",part:"js"}),Ot({name:"html",mode:"html",part:"html"}),Ot({name:"css",mode:"css",part:"css"}),Nn({slot:"after-tabs",class:"row"},He({title:"undo",part:"undo",class:"transparent",onClick:this.undo},F.undo()),He({title:"redo",part:"redo",class:"transparent",onClick:this.redo},F.redo()),He({title:"flip direction",class:"transparent",onClick:this.flipLayout},F.sidebar()),He({title:"copy as markdown",class:"transparent",onClick:this.copy},F.copy()),He({title:"reload",class:"transparent",onClick:this.refreshRemote},F.refresh())))),ks({part:"sources",hidden:!0})];connectedCallback(){super.connectedCallback();let{sources:e}=this.parts;this.initFromElements([...e.children]),addEventListener("storage",this.remoteChange),this.interval=setInterval(this.remoteChange,500),this.undoInterval=setInterval(this.updateUndo,250)}disconnectedCallback(){super.disconnectedCallback();let{storageKey:e,remoteKey:t}=this;clearInterval(this.interval),clearInterval(this.undoInterval),localStorage.setItem(e,JSON.stringify({remoteKey:t,sentAt:Date.now(),close:!0}))}copy=()=>{let e=this.js!==""?"```js\n"+this.js.trim()+"\n```\n":"",t=this.html!==""?"```html\n"+this.html.trim()+"\n```\n":"",n=this.css!==""?"```css\n"+this.css.trim()+"\n```\n":"";navigator.clipboard.writeText(e+t+n)};toggleMaximize=()=>{this.classList.toggle("-maximize")};get remoteKey(){return this.remoteId!==""?this.prefix+"-"+this.remoteId:this.prefix+"-"+this.uuid}remoteChange=(e)=>{let t=localStorage.getItem(this.storageKey);if(e instanceof StorageEvent&&e.key!==this.storageKey)return;if(t===null)return;let{remoteKey:n,sentAt:i,css:o,html:a,js:s,close:l}=JSON.parse(t);if(i<=this.lastUpdate)return;if(n!==this.remoteKey)return;if(l===!0)window.close();console.log("received new code",i,this.lastUpdate),this.lastUpdate=i,this.css=o,this.html=a,this.js=s,this.refresh()};showCode=()=>{this.classList.add("-maximize"),this.classList.toggle("-vertical",this.offsetHeight>this.offsetWidth),this.parts.codeEditors.hidden=!1};closeCode=()=>{if(this.remoteId!=="")window.close();else this.classList.remove("-maximize"),this.parts.codeEditors.hidden=!0};openEditorWindow=()=>{let{storageKey:e,remoteKey:t,css:n,html:i,js:o,uuid:a,prefix:s}=this,l=location.href.split("?")[0]+`?${s}=${a}`;localStorage.setItem(e,JSON.stringify({remoteKey:t,sentAt:Date.now(),css:n,html:i,js:o})),window.open(l)};refreshRemote=()=>{let{remoteKey:e,css:t,html:n,js:i}=this;localStorage.setItem(this.storageKey,JSON.stringify({remoteKey:e,sentAt:Date.now(),css:t,html:n,js:i}))};updateSources=()=>{if(this.persistToDom){let{sources:e}=this.parts;e.innerText="";for(let t of["js","css","html"])if(this[t])e.append(Ds({class:`language-${t}`,innerHTML:this[t]}))}};refresh=()=>{if(this.remoteId!=="")return;let{example:e,style:t}=this.parts,n=Nn({class:"preview"});n.innerHTML=this.html,t.innerText=this.css;let i=e.querySelector(".preview");if(i)i.replaceWith(n);else e.insertBefore(n,this.parts.exampleWidgets);let o={preview:n,...this.context};try{if(new qs(...Object.keys(o),this.js)(...Object.values(o)).catch((a)=>console.error(a)),this.persistToDom)this.updateSources()}catch(a){console.error(a),window.alert(`Error: ${a}, the console may have more information…`)}};initFromElements(e){for(let t of e){t.hidden=!0;let[n,...i]=t.innerHTML.split(`
`);if(["js","html","css"].includes(n)){let o=i.filter((s)=>s.trim()!=="").map((s)=>s.match(/^\s*/)[0].length).sort()[0],a=(o>0?i.map((s)=>s.substring(o)):i).join(`
`);this.parts[n].value=a}else{let o=["js","html","css"].find((a)=>t.matches(`.language-${a}`));if(o)this.parts[o].value=o==="html"?t.innerHTML:t.innerText}}}showDefaultTab(){let{editors:e}=this.parts;if(this.js!=="")e.value=0;else if(this.html!=="")e.value=1;else if(this.css!=="")e.value=2}render(){if(super.render(),this.remoteId!==""){let e=localStorage.getItem(this.storageKey);if(e!==null){let{remoteKey:t,sentAt:n,css:i,html:o,js:a}=JSON.parse(e);if(this.remoteKey!==t)return;this.lastUpdate=n,this.css=i,this.html=o,this.js=a,this.parts.example.hidden=!0,this.parts.codeEditors.hidden=!1,this.classList.add("-maximize"),this.updateUndo()}}else this.refresh()}}var Rt=Sn.elementCreator({tag:"xin-example",styleSpec:{":host":{"--xin-example-height":"320px","--code-editors-bar-bg":"#777","--code-editors-bar-color":"#fff","--widget-bg":"#fff8","--widget-color":"#000",position:"relative",display:"flex",height:"var(--xin-example-height)",background:"var(--background)",boxSizing:"border-box"},":host.-maximize":{position:"fixed",left:"0",top:"0",height:"100vh",width:"100vw",margin:"0 !important"},".-maximize":{zIndex:101},":host.-vertical":{flexDirection:"column"},":host .icon-sidebar":{transform:"rotateZ(180deg)"},":host.-vertical .icon-sidebar":{transform:"rotateZ(270deg)"},":host.-maximize .hide-if-maximized, :host:not(.-maximize) .show-if-maximized":{display:"none"},':host [part="example"]':{flex:"1 1 50%",height:"100%",position:"relative",overflowX:"auto"},":host .preview":{height:"100%",position:"relative",overflow:"hidden",background:`#f7f7f7 url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 8 8" fill-opacity=".02" ><rect x="4" width="4" height="4" /><rect y="4" width="4" height="4" /></svg>')`},':host [part="editors"]':{flex:"1 1 200px",height:"100%",position:"relative"},':host [part="exampleWidgets"]':{position:"absolute",left:"2px",bottom:"2px","--widget-color":"var(--brand-color)",background:"var(--widget-bg)",borderRadius:"5px",width:"44px",height:"44px",lineHeight:"44px",zIndex:"100"},':host [part="exampleWidgets"] svg':{fill:"var(--widget-color)"},":host .code-editors":{overflow:"hidden",background:"white",position:"relative",top:"0",right:"0",flex:"1 1 50%",height:"100%",flexDirection:"column",zIndex:"10"},":host .code-editors:not([hidden])":{display:"flex"},":host .code-editors > h4":{padding:"5px",margin:"0",textAlign:"center",background:"var(--code-editors-bar-bg)",color:"var(--code-editors-bar-color)",cursor:"move"},":host .close-button":{position:"absolute",top:"0",right:"0",color:"var(--code-editors-bar-color)"},":host button.transparent, :host .sizer":{width:"32px",height:"32px",lineHeight:"32px",textAlign:"center",padding:"0",margin:"0"},":host .sizer":{cursor:"nwse-resize"}}});function E3(e){let t=[...e.querySelectorAll("pre")].filter((n)=>["js","html","css","json"].includes(n.innerText.split(`
`)[0]));for(let n=0;n<t.length;n++){let i=[t[n]];while(t[n].nextElementSibling===t[n+1])i.push(t[n+1]),n+=1;let o=Rt();e.insertBefore(o,i[0]),o.initFromElements(i)}}var Hs=new URL(window.location.href).searchParams,Ji=Hs.get("lx");if(Ji)document.title+=" [code editor]",document.body.textContent="",document.body.append(Rt({remoteId:Ji}));/*!
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
*/function Ps(e,t=!0){return(n,i)=>{let o=e(n),a=e(i);for(let s in o)if(o[s]!==a[s])return(Array.isArray(t)?t[s]!==!1:t)?o[s]>a[s]?1:-1:o[s]>a[s]?-1:1;return 0}}/*!
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
*/var{button:_s,span:Qi,input:Bs}=J,L1=(e,t)=>{return!!e.find((n)=>{if(n===null||t==null)return!1;else if(Array.isArray(n))return L1(n,t);else if(n.value===t||n===t)return!0})};class Xn extends U{editable=!1;showIcon=!1;hideCaption=!1;options="";value="";placeholder="";setValue=(e,t=!1)=>{if(this.value!==e)this.value=e,this.queueRender(!0);if(t)this.dispatchEvent(new Event("action"))};getValue=()=>this.value;get selectOptions(){return typeof this.options==="string"?this.options.split(",").map((e)=>e.trim()||null):this.options}buildOptionMenuItem=(e)=>{if(e===null)return null;let{setValue:t,getValue:n}=this,i,o,a;if(typeof e==="string")o=a=e;else({icon:i,caption:o,value:a}=e);let{options:s}=e;if(s)return{icon:i,caption:o,checked:()=>L1(s,n()),menuItems:s.map(this.buildOptionMenuItem)};return{icon:i,caption:o,checked:()=>n()===a,action:typeof a==="function"?async()=>{let l=await a();if(l!==void 0)t(l,!0)}:()=>{if(typeof a==="string")t(a,!0)}}};get optionsMenu(){let e=this.selectOptions.map(this.buildOptionMenuItem);if(this.filter==="")return e;let t=(n)=>{if(n===null)return!0;else if(n.menuItems)return n.menuItems=n.menuItems.filter(t),n.menuItems.length>0;else return n.caption.toLocaleLowerCase().includes(this.filter)};return e.filter(t)}handleChange=(e)=>{let{value:t}=this.parts,n=t.value||"";if(this.value!==String(n))this.value=n,this.dispatchEvent(new Event("change"));this.filter="",e.stopPropagation(),e.preventDefault()};handleKey=(e)=>{if(e.key==="Enter")e.preventDefault()};filterMenu=Ua(()=>{this.filter=this.parts.value.value.toLocaleLowerCase(),an(0),this.popOptions()});popOptions=(e)=>{if(e&&e.type==="click")this.filter="";this.poppedOptions=this.optionsMenu,zn({target:this,menuItems:this.poppedOptions})};content=()=>[_s({onClick:this.popOptions},Qi(),Bs({part:"value",value:this.value,tabindex:0,onKeydown:this.handleKey,onInput:this.filterMenu,onChange:this.handleChange}),F.chevronDown())];constructor(){super();this.initAttributes("options","editable","placeholder","showIcon","hideCaption")}get allOptions(){let e=[];function t(n){for(let i of n)if(typeof i==="string")e.push({caption:i,value:i});else if(i?.value)e.push(i);else if(i?.options)t(i.options)}return t(this.selectOptions),e}findOption(){return this.allOptions.find((e)=>e.value===this.value)||{caption:this.value,value:this.value}}render(){super.render();let{value:e}=this.parts,t=e.previousElementSibling,n=this.findOption(),i=Qi();if(e.value=n.caption,n.icon)if(n.icon instanceof HTMLElement)i=n.icon.cloneNode(!0);else i=F[n.icon]();t.replaceWith(i),e.setAttribute("placeholder",this.placeholder),e.style.pointerEvents=this.editable?"":"none",e.readOnly=!this.editable}}var k1=Xn.elementCreator({tag:"xin-select",styleSpec:{":host":{"--gap":"8px","--touch-size":"44px","--padding":"0 8px","--value-padding":"0 8px","--icon-width":"24px","--fieldWidth":"140px",display:"inline-block",position:"relative"},":host button":{display:"grid",alignItems:"center",gap:T.gap,textAlign:"left",height:T.touchSize,padding:T.padding,gridTemplateColumns:`auto ${T.iconWidth}`,position:"relative"},":host[show-icon] button":{gridTemplateColumns:`${T.iconWidth} auto ${T.iconWidth}`},":host[hide-caption] button":{gridTemplateColumns:`${T.iconWidth} ${T.iconWidth}`},":host:not([show-icon]) button > :first-child":{display:"none"},":host[hide-caption] button > :nth-child(2)":{display:"none"},':host [part="value"]':{width:T.fieldWidth,padding:T.valuePadding,height:T.touchSize,lineHeight:T.touchSize,boxShadow:"none",whiteSpace:"nowrap",outline:"none",background:"transparent"},':host [part="value"]:not(:focus)':{overflow:"hidden",textOverflow:"ellipsis",background:"transparent"}}});/*!
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
*/var{span:F1}=J,{i18n:ie}=Ga({i18n:{locale:window.navigator.language,locales:[window.navigator.language],languages:[window.navigator.language],emoji:[""],stringMap:{},localeOptions:[{icon:F1(),caption:window.navigator.language,value:window.navigator.language}]}});Wa.localeOptions={toDOM(e,t){if(e instanceof Xn)e.options=t}};var O1=()=>{let e=[...document.querySelectorAll(Ut.tagName)];for(let t of e)t.render()},Ns=Ps((e)=>[e.caption.toLocaleLowerCase()]);function D1(e){let[t,,n,i,...o]=e.split(`
`).map((a)=>a.split("\t"));if(t&&n&&i&&o){if(ie.locales=t,ie.languages=n,ie.emoji=i,ie.stringMap=o.reduce((a,s)=>{return a[s[0].toLocaleLowerCase()]=s,a},{}),ie.localeOptions=t.map((a,s)=>({icon:F1({title:t[s]},i[s]),caption:n[s],value:a})).sort(Ns),!ie.locales.includes(ie.locale.valueOf())){let a=ie.locale.substring(0,2);ie.locale=ie.locales.find((s)=>s.substring(0,2)===a)||ie.locales[0]}O1()}}function q1(e){let t=ie.locales.indexOf(ie.locale.valueOf());if(t>-1){let n=ie.stringMap[e.toLocaleLowerCase()],i=n&&n[t];if(i)e=e.toLocaleLowerCase()===e?i.toLocaleLowerCase():i}return e}class H1 extends U{hideCaption=!1;content=()=>{return k1({part:"select",showIcon:!0,title:q1("Language"),bindValue:ie.locale,bindLocaleOptions:ie.localeOptions})};constructor(){super();this.initAttributes("hideCaption")}connectedCallback(){super.connectedCallback(),this.parts.select.value=ie.locale,this.parts.select.addEventListener("change",O1)}render(){super.render(),this.parts.select.toggleAttribute("hide-caption",this.hideCaption)}}var P1=H1.elementCreator({tag:"xin-locale-picker"});class Ut extends U{contents=()=>J.xinSlot();refString="";render(){if(super.render(),!this.refString)this.refString=this.textContent||"";this.textContent=q1(this.refString)}}var _1=Ut.elementCreator({tag:"xin-localized",styleSpec:{":host":{pointerEvents:"none"}}});/*!
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
*/var Vs=[{name:"streets",url:"mapbox://styles/mapbox/streets-v10"},{name:"outdoors",url:"mapbox://styles/mapbox/outdoors-v10"},{name:"light",url:"mapbox://styles/mapbox/light-v9"},{name:"dark",url:"mapbox://styles/mapbox/dark-v9"},{name:"satellite",url:"mapbox://styles/mapbox/satellite-v9"},{name:"sateliite + streets",url:"mapbox://styles/mapbox/satellite-streets-v10"},{name:"preview day",url:"mapbox://styles/mapbox/navigation-preview-day-v2"},{name:"preview night",url:"mapbox://styles/mapbox/navigation-preview-night-v2"},{name:"guidance day",url:"mapbox://styles/mapbox/navigation-guidance-day-v2"},{name:"guidance night",url:"mapbox://styles/mapbox/navigation-guidance-night-v2"}],{div:Ws}=J;class nn extends U{coords="65.01715565258993,25.48081004203459,12";content=Ws({style:{width:"100%",height:"100%"}});get map(){return this._map}mapStyle=Vs[0].url;token="";static mapboxCSSAvailable;static mapboxAvailable;_map;static styleSpec={":host":{display:"inline-block",position:"relative",width:"400px",height:"400px",textAlign:"left"}};constructor(){super();if(this.initAttributes("coords","token","mapStyle"),nn.mapboxCSSAvailable===void 0)nn.mapboxCSSAvailable=Ya("https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css").catch((e)=>{console.error("failed to load mapbox-gl.css",e)}),nn.mapboxAvailable=tn("https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.js").catch((e)=>{console.error("failed to load mapbox-gl.js",e)})}connectedCallback(){if(super.connectedCallback(),!this.token)console.error("mapbox requires an access token which you can provide via the token attribute")}render(){if(super.render(),!this.token)return;let{div:e}=this.parts,[t,n,i]=this.coords.split(",").map((o)=>Number(o));if(this.map)this.map.remove();nn.mapboxAvailable.then(({mapboxgl:o})=>{console.log("%cmapbox may complain about missing css -- don't panic!","background: orange; color: black; padding: 0 5px;"),o.accessToken=this.token,this._map=new o.Map({container:e,style:this.mapStyle,zoom:i,center:[n,t]}),this._map.on("render",()=>this._map.resize())})}}var A3=nn.elementCreator({tag:"xin-map"});function Gt(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}var ze=Gt();function B1(e){ze=e}var N1=/[&<>"']/,$s=new RegExp(N1.source,"g"),V1=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Rs=new RegExp(V1.source,"g"),Us={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Zi=(e)=>Us[e];function oe(e,t){if(t){if(N1.test(e))return e.replace($s,Zi)}else if(V1.test(e))return e.replace(Rs,Zi);return e}var Gs=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function W1(e){return e.replace(Gs,(t,n)=>{if(n=n.toLowerCase(),n==="colon")return":";if(n.charAt(0)==="#")return n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1));return""})}var Ys=/(^|[^\[])\^/g;function G(e,t){e=typeof e==="string"?e:e.source,t=t||"";let n={replace:(i,o)=>{return o=o.source||o,o=o.replace(Ys,"$1"),e=e.replace(i,o),n},getRegex:()=>{return new RegExp(e,t)}};return n}var Ks=/[^\w:]/g,Xs=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function e1(e,t,n){if(e){let i;try{i=decodeURIComponent(W1(n)).replace(Ks,"").toLowerCase()}catch(o){return null}if(i.indexOf("javascript:")===0||i.indexOf("vbscript:")===0||i.indexOf("data:")===0)return null}if(t&&!Xs.test(n))n=el(t,n);try{n=encodeURI(n).replace(/%25/g,"%")}catch(i){return null}return n}var Vn={},Js=/^[^:]+:\/*[^/]*$/,Qs=/^([^:]+:)[\s\S]*$/,Zs=/^([^:]+:\/*[^/]*)[\s\S]*$/;function el(e,t){if(!Vn[" "+e])if(Js.test(e))Vn[" "+e]=e+"/";else Vn[" "+e]=$n(e,"/",!0);e=Vn[" "+e];let n=e.indexOf(":")===-1;if(t.substring(0,2)==="//"){if(n)return t;return e.replace(Qs,"$1")+t}else if(t.charAt(0)==="/"){if(n)return t;return e.replace(Zs,"$1")+t}else return e+t}var Kn={exec:function e(){}};function n1(e,t){let n=e.replace(/\|/g,(a,s,l)=>{let r=!1,d=s;while(--d>=0&&l[d]==="\\")r=!r;if(r)return"|";else return" |"}),i=n.split(/ \|/),o=0;if(!i[0].trim())i.shift();if(i.length>0&&!i[i.length-1].trim())i.pop();if(i.length>t)i.splice(t);else while(i.length<t)i.push("");for(;o<i.length;o++)i[o]=i[o].trim().replace(/\\\|/g,"|");return i}function $n(e,t,n){let i=e.length;if(i===0)return"";let o=0;while(o<i){let a=e.charAt(i-o-1);if(a===t&&!n)o++;else if(a!==t&&n)o++;else break}return e.slice(0,i-o)}function nl(e,t){if(e.indexOf(t[1])===-1)return-1;let n=e.length,i=0,o=0;for(;o<n;o++)if(e[o]==="\\")o++;else if(e[o]===t[0])i++;else if(e[o]===t[1]){if(i--,i<0)return o}return-1}function tl(e,t){if(!e||e.silent)return;if(t)console.warn("marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async");if(e.sanitize||e.sanitizer)console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");if(e.highlight||e.langPrefix!=="language-")console.warn("marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight.");if(e.mangle)console.warn("marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`.");if(e.baseUrl)console.warn("marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url.");if(e.smartypants)console.warn("marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants.");if(e.xhtml)console.warn("marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml.");if(e.headerIds||e.headerPrefix)console.warn("marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`.")}function t1(e,t,n,i){let o=t.href,a=t.title?oe(t.title):null,s=e[1].replace(/\\([\[\]])/g,"$1");if(e[0].charAt(0)!=="!"){i.state.inLink=!0;let l={type:"link",raw:n,href:o,title:a,text:s,tokens:i.inlineTokens(s)};return i.state.inLink=!1,l}return{type:"image",raw:n,href:o,title:a,text:oe(s)}}function il(e,t){let n=e.match(/^(\s+)(?:```)/);if(n===null)return t;let i=n[1];return t.split(`
`).map((o)=>{let a=o.match(/^\s+/);if(a===null)return o;let[s]=a;if(s.length>=i.length)return o.slice(i.length);return o}).join(`
`)}class yn{constructor(e){this.options=e||ze}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:!this.options.pedantic?$n(n,`
`):n}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let n=t[0],i=il(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:i}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){let i=$n(n,"#");if(this.options.pedantic)n=i.trim();else if(!i||/ $/.test(i))n=i.trim()}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let n=t[0].replace(/^ *>[ \t]?/gm,""),i=this.lexer.state.top;this.lexer.state.top=!0;let o=this.lexer.blockTokens(n);return this.lexer.state.top=i,{type:"blockquote",raw:t[0],tokens:o,text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n,i,o,a,s,l,r,d,p,g,f,z,x=t[1].trim(),C=x.length>1,c={type:"list",raw:"",ordered:C,start:C?+x.slice(0,-1):"",loose:!1,items:[]};if(x=C?`\\d{1,9}\\${x.slice(-1)}`:`\\${x}`,this.options.pedantic)x=C?x:"[*+-]";let u=new RegExp(`^( {0,3}${x})((?:[	 ][^\\n]*)?(?:\\n|$))`);while(e){if(z=!1,!(t=u.exec(e)))break;if(this.rules.block.hr.test(e))break;if(n=t[0],e=e.substring(n.length),d=t[2].split(`
`,1)[0].replace(/^\t+/,(h)=>" ".repeat(3*h.length)),p=e.split(`
`,1)[0],this.options.pedantic)a=2,f=d.trimLeft();else a=t[2].search(/[^ ]/),a=a>4?1:a,f=d.slice(a),a+=t[1].length;if(l=!1,!d&&/^ *$/.test(p))n+=p+`
`,e=e.substring(p.length+1),z=!0;if(!z){let h=new RegExp(`^ {0,${Math.min(3,a-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),v=new RegExp(`^ {0,${Math.min(3,a-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),b=new RegExp(`^ {0,${Math.min(3,a-1)}}(?:\`\`\`|~~~)`),w=new RegExp(`^ {0,${Math.min(3,a-1)}}#`);while(e){if(g=e.split(`
`,1)[0],p=g,this.options.pedantic)p=p.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ");if(b.test(p))break;if(w.test(p))break;if(h.test(p))break;if(v.test(e))break;if(p.search(/[^ ]/)>=a||!p.trim())f+=`
`+p.slice(a);else{if(l)break;if(d.search(/[^ ]/)>=4)break;if(b.test(d))break;if(w.test(d))break;if(v.test(d))break;f+=`
`+p}if(!l&&!p.trim())l=!0;n+=g+`
`,e=e.substring(g.length+1),d=p.slice(a)}}if(!c.loose){if(r)c.loose=!0;else if(/\n *\n *$/.test(n))r=!0}if(this.options.gfm){if(i=/^\[[ xX]\] /.exec(f),i)o=i[0]!=="[ ] ",f=f.replace(/^\[[ xX]\] +/,"")}c.items.push({type:"list_item",raw:n,task:!!i,checked:o,loose:!1,text:f}),c.raw+=n}c.items[c.items.length-1].raw=n.trimRight(),c.items[c.items.length-1].text=f.trimRight(),c.raw=c.raw.trimRight();let m=c.items.length;for(s=0;s<m;s++)if(this.lexer.state.top=!1,c.items[s].tokens=this.lexer.blockTokens(c.items[s].text,[]),!c.loose){let h=c.items[s].tokens.filter((b)=>b.type==="space"),v=h.length>0&&h.some((b)=>/\n.*\n/.test(b.raw));c.loose=v}if(c.loose)for(s=0;s<m;s++)c.items[s].loose=!0;return c}}html(e){let t=this.rules.block.html.exec(e);if(t){let n={type:"html",block:!0,raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};if(this.options.sanitize){let i=this.options.sanitizer?this.options.sanitizer(t[0]):oe(t[0]);n.type="paragraph",n.text=i,n.tokens=this.lexer.inline(i)}return n}}def(e){let t=this.rules.block.def.exec(e);if(t){let n=t[1].toLowerCase().replace(/\s+/g," "),i=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",o=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:i,title:o}}}table(e){let t=this.rules.block.table.exec(e);if(t){let n={type:"table",header:n1(t[1]).map((i)=>{return{text:i}}),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(n.header.length===n.align.length){n.raw=t[0];let i=n.align.length,o,a,s,l;for(o=0;o<i;o++)if(/^ *-+: *$/.test(n.align[o]))n.align[o]="right";else if(/^ *:-+: *$/.test(n.align[o]))n.align[o]="center";else if(/^ *:-+ *$/.test(n.align[o]))n.align[o]="left";else n.align[o]=null;i=n.rows.length;for(o=0;o<i;o++)n.rows[o]=n1(n.rows[o],n.header.length).map((r)=>{return{text:r}});i=n.header.length;for(a=0;a<i;a++)n.header[a].tokens=this.lexer.inline(n.header[a].text);i=n.rows.length;for(a=0;a<i;a++){l=n.rows[a];for(s=0;s<l.length;s++)l[s].tokens=this.lexer.inline(l[s].text)}return n}}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:oe(t[1])}}tag(e){let t=this.rules.inline.tag.exec(e);if(t){if(!this.lexer.state.inLink&&/^<a /i.test(t[0]))this.lexer.state.inLink=!0;else if(this.lexer.state.inLink&&/^<\/a>/i.test(t[0]))this.lexer.state.inLink=!1;if(!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0]))this.lexer.state.inRawBlock=!0;else if(this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]))this.lexer.state.inRawBlock=!1;return{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):oe(t[0]):t[0]}}}link(e){let t=this.rules.inline.link.exec(e);if(t){let n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;let a=$n(n.slice(0,-1),"\\");if((n.length-a.length)%2===0)return}else{let a=nl(t[2],"()");if(a>-1){let s=(t[0].indexOf("!")===0?5:4)+t[1].length+a;t[2]=t[2].substring(0,a),t[0]=t[0].substring(0,s).trim(),t[3]=""}}let i=t[2],o="";if(this.options.pedantic){let a=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);if(a)i=a[1],o=a[3]}else o=t[3]?t[3].slice(1,-1):"";if(i=i.trim(),/^</.test(i))if(this.options.pedantic&&!/>$/.test(n))i=i.slice(1);else i=i.slice(1,-1);return t1(t,{href:i?i.replace(this.rules.inline._escapes,"$1"):i,title:o?o.replace(this.rules.inline._escapes,"$1"):o},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let i=(n[2]||n[1]).replace(/\s+/g," ");if(i=t[i.toLowerCase()],!i){let o=n[0].charAt(0);return{type:"text",raw:o,text:o}}return t1(n,i,n[0],this.lexer)}}emStrong(e,t,n=""){let i=this.rules.inline.emStrong.lDelim.exec(e);if(!i)return;if(i[3]&&n.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2])||!n||this.rules.inline.punctuation.exec(n)){let o=i[0].length-1,a,s,l=o,r=0,d=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;d.lastIndex=0,t=t.slice(-1*e.length+o);while((i=d.exec(t))!=null){if(a=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!a)continue;if(s=a.length,i[3]||i[4]){l+=s;continue}else if(i[5]||i[6]){if(o%3&&!((o+s)%3)){r+=s;continue}}if(l-=s,l>0)continue;s=Math.min(s,s+l+r);let p=e.slice(0,o+i.index+s+1);if(Math.min(o,s)%2){let f=p.slice(1,-1);return{type:"em",raw:p,text:f,tokens:this.lexer.inlineTokens(f)}}let g=p.slice(2,-2);return{type:"strong",raw:p,text:g,tokens:this.lexer.inlineTokens(g)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," "),i=/[^ ]/.test(n),o=/^ /.test(n)&&/ $/.test(n);if(i&&o)n=n.substring(1,n.length-1);return n=oe(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e,t){let n=this.rules.inline.autolink.exec(e);if(n){let i,o;if(n[2]==="@")i=oe(this.options.mangle?t(n[1]):n[1]),o="mailto:"+i;else i=oe(n[1]),o=i;return{type:"link",raw:n[0],text:i,href:o,tokens:[{type:"text",raw:i,text:i}]}}}url(e,t){let n;if(n=this.rules.inline.url.exec(e)){let i,o;if(n[2]==="@")i=oe(this.options.mangle?t(n[0]):n[0]),o="mailto:"+i;else{let a;do a=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0];while(a!==n[0]);if(i=oe(n[0]),n[1]==="www.")o="http://"+n[0];else o=n[0]}return{type:"link",raw:n[0],text:i,href:o,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e,t){let n=this.rules.inline.text.exec(e);if(n){let i;if(this.lexer.state.inRawBlock)i=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):oe(n[0]):n[0];else i=oe(this.options.smartypants?t(n[0]):n[0]);return{type:"text",raw:n[0],text:i}}}}var W={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Kn,lheading:/^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};W._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;W._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;W.def=G(W.def).replace("label",W._label).replace("title",W._title).getRegex();W.bullet=/(?:[*+-]|\d{1,9}[.)])/;W.listItemStart=G(/^( *)(bull) */).replace("bull",W.bullet).getRegex();W.list=G(W.list).replace(/bull/g,W.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+W.def.source+")").getRegex();W._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";W._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;W.html=G(W.html,"i").replace("comment",W._comment).replace("tag",W._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();W.lheading=G(W.lheading).replace(/bull/g,W.bullet).getRegex();W.paragraph=G(W._paragraph).replace("hr",W.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",W._tag).getRegex();W.blockquote=G(W.blockquote).replace("paragraph",W.paragraph).getRegex();W.normal={...W};W.gfm={...W.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};W.gfm.table=G(W.gfm.table).replace("hr",W.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",W._tag).getRegex();W.gfm.paragraph=G(W._paragraph).replace("hr",W.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",W.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",W._tag).getRegex();W.pedantic={...W.normal,html:G(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",W._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Kn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:G(W.normal._paragraph).replace("hr",W.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",W.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};var L={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Kn,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,rDelimAst:/^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Kn,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^((?![*_])[\spunctuation])/};L._punctuation="\\p{P}$+<=>`^|~";L.punctuation=G(L.punctuation,"u").replace(/punctuation/g,L._punctuation).getRegex();L.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;L.anyPunctuation=/\\[punct]/g;L._escapes=/\\([punct])/g;L._comment=G(W._comment).replace("(?:-->|$)","-->").getRegex();L.emStrong.lDelim=G(L.emStrong.lDelim,"u").replace(/punct/g,L._punctuation).getRegex();L.emStrong.rDelimAst=G(L.emStrong.rDelimAst,"gu").replace(/punct/g,L._punctuation).getRegex();L.emStrong.rDelimUnd=G(L.emStrong.rDelimUnd,"gu").replace(/punct/g,L._punctuation).getRegex();L.anyPunctuation=G(L.anyPunctuation,"gu").replace(/punct/g,L._punctuation).getRegex();L._escapes=G(L._escapes,"gu").replace(/punct/g,L._punctuation).getRegex();L._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;L._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;L.autolink=G(L.autolink).replace("scheme",L._scheme).replace("email",L._email).getRegex();L._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;L.tag=G(L.tag).replace("comment",L._comment).replace("attribute",L._attribute).getRegex();L._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;L._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;L._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;L.link=G(L.link).replace("label",L._label).replace("href",L._href).replace("title",L._title).getRegex();L.reflink=G(L.reflink).replace("label",L._label).replace("ref",W._label).getRegex();L.nolink=G(L.nolink).replace("ref",W._label).getRegex();L.reflinkSearch=G(L.reflinkSearch,"g").replace("reflink",L.reflink).replace("nolink",L.nolink).getRegex();L.normal={...L};L.pedantic={...L.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:G(/^!?\[(label)\]\((.*?)\)/).replace("label",L._label).getRegex(),reflink:G(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",L._label).getRegex()};L.gfm={...L.normal,escape:G(L.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};L.gfm.url=G(L.gfm.url,"i").replace("email",L.gfm._extended_email).getRegex();L.breaks={...L.gfm,br:G(L.br).replace("{2,}","*").getRegex(),text:G(L.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};function ol(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function i1(e){let t="",n,i,o=e.length;for(n=0;n<o;n++){if(i=e.charCodeAt(n),Math.random()>0.5)i="x"+i.toString(16);t+="&#"+i+";"}return t}class fe{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||ze,this.options.tokenizer=this.options.tokenizer||new yn,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={block:W.normal,inline:L.normal};if(this.options.pedantic)t.block=W.pedantic,t.inline=L.pedantic;else if(this.options.gfm)if(t.block=W.gfm,this.options.breaks)t.inline=L.breaks;else t.inline=L.gfm;this.tokenizer.rules=t}static get rules(){return{block:W,inline:L}}static lex(e,t){return new fe(t).lex(e)}static lexInline(e,t){return new fe(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let t;while(t=this.inlineQueue.shift())this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){if(this.options.pedantic)e=e.replace(/\t/g,"    ").replace(/^ +$/gm,"");else e=e.replace(/^( *)(\t+)/gm,(s,l,r)=>{return l+"    ".repeat(r.length)});let n,i,o,a;while(e){if(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((s)=>{if(n=s.call({lexer:this},e,t))return e=e.substring(n.raw.length),t.push(n),!0;return!1}))continue;if(n=this.tokenizer.space(e)){if(e=e.substring(n.raw.length),n.raw.length===1&&t.length>0)t[t.length-1].raw+=`
`;else t.push(n);continue}if(n=this.tokenizer.code(e)){if(e=e.substring(n.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text"))i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text;else t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){if(e=e.substring(n.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text"))i.raw+=`
`+n.raw,i.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text;else if(!this.tokens.links[n.tag])this.tokens.links[n.tag]={href:n.href,title:n.title};continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(o=e,this.options.extensions&&this.options.extensions.startBlock){let s=1/0,l=e.slice(1),r;if(this.options.extensions.startBlock.forEach(function(d){if(r=d.call({lexer:this},l),typeof r==="number"&&r>=0)s=Math.min(s,r)}),s<1/0&&s>=0)o=e.substring(0,s+1)}if(this.state.top&&(n=this.tokenizer.paragraph(o))){if(i=t[t.length-1],a&&i.type==="paragraph")i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text;else t.push(n);a=o.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){if(e=e.substring(n.raw.length),i=t[t.length-1],i&&i.type==="text")i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text;else t.push(n);continue}if(e){let s="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(s);break}else throw new Error(s)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,i,o,a=e,s,l,r;if(this.tokens.links){let d=Object.keys(this.tokens.links);if(d.length>0){while((s=this.tokenizer.rules.inline.reflinkSearch.exec(a))!=null)if(d.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1)))a=a.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex)}}while((s=this.tokenizer.rules.inline.blockSkip.exec(a))!=null)a=a.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);while((s=this.tokenizer.rules.inline.anyPunctuation.exec(a))!=null)a=a.slice(0,s.index)+"++"+a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);while(e){if(!l)r="";if(l=!1,this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((d)=>{if(n=d.call({lexer:this},e,t))return e=e.substring(n.raw.length),t.push(n),!0;return!1}))continue;if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){if(e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text")i.raw+=n.raw,i.text+=n.text;else t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){if(e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text")i.raw+=n.raw,i.text+=n.text;else t.push(n);continue}if(n=this.tokenizer.emStrong(e,a,r)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e,i1)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e,i1))){e=e.substring(n.raw.length),t.push(n);continue}if(o=e,this.options.extensions&&this.options.extensions.startInline){let d=1/0,p=e.slice(1),g;if(this.options.extensions.startInline.forEach(function(f){if(g=f.call({lexer:this},p),typeof g==="number"&&g>=0)d=Math.min(d,g)}),d<1/0&&d>=0)o=e.substring(0,d+1)}if(n=this.tokenizer.inlineText(o,ol)){if(e=e.substring(n.raw.length),n.raw.slice(-1)!=="_")r=n.raw.slice(-1);if(l=!0,i=t[t.length-1],i&&i.type==="text")i.raw+=n.raw,i.text+=n.text;else t.push(n);continue}if(e){let d="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return t}}class wn{constructor(e){this.options=e||ze}code(e,t,n){let i=(t||"").match(/\S*/)[0];if(this.options.highlight){let o=this.options.highlight(e,i);if(o!=null&&o!==e)n=!0,e=o}if(e=e.replace(/\n$/,"")+`
`,!i)return"<pre><code>"+(n?e:oe(e,!0))+`</code></pre>
`;return'<pre><code class="'+this.options.langPrefix+oe(i)+'">'+(n?e:oe(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,t){return e}heading(e,t,n,i){if(this.options.headerIds){let o=this.options.headerPrefix+i.slug(n);return`<h${t} id="${o}">${e}</h${t}>
`}return`<h${t}>${e}</h${t}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,t,n){let i=t?"ol":"ul",o=t&&n!==1?' start="'+n+'"':"";return"<"+i+o+`>
`+e+"</"+i+`>
`}listitem(e){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,t){if(t)t=`<tbody>${t}</tbody>`;return`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){let n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){if(e=e1(this.options.sanitize,this.options.baseUrl,e),e===null)return n;let i='<a href="'+e+'"';if(t)i+=' title="'+t+'"';return i+=">"+n+"</a>",i}image(e,t,n){if(e=e1(this.options.sanitize,this.options.baseUrl,e),e===null)return n;let i=`<img src="${e}" alt="${n}"`;if(t)i+=` title="${t}"`;return i+=this.options.xhtml?"/>":">",i}text(e){return e}}class Jn{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class Qn{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let n=e,i=0;if(this.seen.hasOwnProperty(n)){i=this.seen[e];do i++,n=e+"-"+i;while(this.seen.hasOwnProperty(n))}if(!t)this.seen[e]=i,this.seen[n]=0;return n}slug(e,t={}){let n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)}}class be{constructor(e){this.options=e||ze,this.options.renderer=this.options.renderer||new wn,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Jn,this.slugger=new Qn}static parse(e,t){return new be(t).parse(e)}static parseInline(e,t){return new be(t).parseInline(e)}parse(e,t=!0){let n="",i,o,a,s,l,r,d,p,g,f,z,x,C,c,u,m,h,v,b,w=e.length;for(i=0;i<w;i++){if(f=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[f.type]){if(b=this.options.extensions.renderers[f.type].call({parser:this},f),b!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(f.type)){n+=b||"";continue}}switch(f.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{n+=this.renderer.heading(this.parseInline(f.tokens),f.depth,W1(this.parseInline(f.tokens,this.textRenderer)),this.slugger);continue}case"code":{n+=this.renderer.code(f.text,f.lang,f.escaped);continue}case"table":{p="",d="",s=f.header.length;for(o=0;o<s;o++)d+=this.renderer.tablecell(this.parseInline(f.header[o].tokens),{header:!0,align:f.align[o]});p+=this.renderer.tablerow(d),g="",s=f.rows.length;for(o=0;o<s;o++){r=f.rows[o],d="",l=r.length;for(a=0;a<l;a++)d+=this.renderer.tablecell(this.parseInline(r[a].tokens),{header:!1,align:f.align[a]});g+=this.renderer.tablerow(d)}n+=this.renderer.table(p,g);continue}case"blockquote":{g=this.parse(f.tokens),n+=this.renderer.blockquote(g);continue}case"list":{z=f.ordered,x=f.start,C=f.loose,s=f.items.length,g="";for(o=0;o<s;o++){if(u=f.items[o],m=u.checked,h=u.task,c="",u.task)if(v=this.renderer.checkbox(m),C)if(u.tokens.length>0&&u.tokens[0].type==="paragraph"){if(u.tokens[0].text=v+" "+u.tokens[0].text,u.tokens[0].tokens&&u.tokens[0].tokens.length>0&&u.tokens[0].tokens[0].type==="text")u.tokens[0].tokens[0].text=v+" "+u.tokens[0].tokens[0].text}else u.tokens.unshift({type:"text",text:v});else c+=v;c+=this.parse(u.tokens,C),g+=this.renderer.listitem(c,h,m)}n+=this.renderer.list(g,z,x);continue}case"html":{n+=this.renderer.html(f.text,f.block);continue}case"paragraph":{n+=this.renderer.paragraph(this.parseInline(f.tokens));continue}case"text":{g=f.tokens?this.parseInline(f.tokens):f.text;while(i+1<w&&e[i+1].type==="text")f=e[++i],g+=`
`+(f.tokens?this.parseInline(f.tokens):f.text);n+=t?this.renderer.paragraph(g):g;continue}default:{let S='Token with "'+f.type+'" type was not found.';if(this.options.silent){console.error(S);return}else throw new Error(S)}}}return n}parseInline(e,t){t=t||this.renderer;let n="",i,o,a,s=e.length;for(i=0;i<s;i++){if(o=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){if(a=this.options.extensions.renderers[o.type].call({parser:this},o),a!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){n+=a||"";continue}}switch(o.type){case"escape":{n+=t.text(o.text);break}case"html":{n+=t.html(o.text);break}case"link":{n+=t.link(o.href,o.title,this.parseInline(o.tokens,t));break}case"image":{n+=t.image(o.href,o.title,o.text);break}case"strong":{n+=t.strong(this.parseInline(o.tokens,t));break}case"em":{n+=t.em(this.parseInline(o.tokens,t));break}case"codespan":{n+=t.codespan(o.text);break}case"br":{n+=t.br();break}case"del":{n+=t.del(this.parseInline(o.tokens,t));break}case"text":{n+=t.text(o.text);break}default:{let l='Token with "'+o.type+'" type was not found.';if(this.options.silent){console.error(l);return}else throw new Error(l)}}}return n}}class xn{constructor(e){this.options=e||ze}static passThroughHooks=new Set(["preprocess","postprocess"]);preprocess(e){return e}postprocess(e){return e}}class $1{defaults=Gt();options=this.setOptions;parse=this.#e(fe.lex,be.parse);parseInline=this.#e(fe.lexInline,be.parseInline);Parser=be;parser=be.parse;Renderer=wn;TextRenderer=Jn;Lexer=fe;lexer=fe.lex;Tokenizer=yn;Slugger=Qn;Hooks=xn;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let i of e)switch(n=n.concat(t.call(this,i)),i.type){case"table":{for(let o of i.header)n=n.concat(this.walkTokens(o.tokens,t));for(let o of i.rows)for(let a of o)n=n.concat(this.walkTokens(a.tokens,t));break}case"list":{n=n.concat(this.walkTokens(i.items,t));break}default:if(this.defaults.extensions&&this.defaults.extensions.childTokens&&this.defaults.extensions.childTokens[i.type])this.defaults.extensions.childTokens[i.type].forEach((o)=>{n=n.concat(this.walkTokens(i[o],t))});else if(i.tokens)n=n.concat(this.walkTokens(i.tokens,t))}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach((n)=>{let i={...n};if(i.async=this.defaults.async||i.async||!1,n.extensions)n.extensions.forEach((o)=>{if(!o.name)throw new Error("extension name required");if(o.renderer){let a=t.renderers[o.name];if(a)t.renderers[o.name]=function(...s){let l=o.renderer.apply(this,s);if(l===!1)l=a.apply(this,s);return l};else t.renderers[o.name]=o.renderer}if(o.tokenizer){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");if(t[o.level])t[o.level].unshift(o.tokenizer);else t[o.level]=[o.tokenizer];if(o.start){if(o.level==="block")if(t.startBlock)t.startBlock.push(o.start);else t.startBlock=[o.start];else if(o.level==="inline")if(t.startInline)t.startInline.push(o.start);else t.startInline=[o.start]}}if(o.childTokens)t.childTokens[o.name]=o.childTokens}),i.extensions=t;if(n.renderer){let o=this.defaults.renderer||new wn(this.defaults);for(let a in n.renderer){let s=o[a];o[a]=(...l)=>{let r=n.renderer[a].apply(o,l);if(r===!1)r=s.apply(o,l);return r}}i.renderer=o}if(n.tokenizer){let o=this.defaults.tokenizer||new yn(this.defaults);for(let a in n.tokenizer){let s=o[a];o[a]=(...l)=>{let r=n.tokenizer[a].apply(o,l);if(r===!1)r=s.apply(o,l);return r}}i.tokenizer=o}if(n.hooks){let o=this.defaults.hooks||new xn;for(let a in n.hooks){let s=o[a];if(xn.passThroughHooks.has(a))o[a]=(l)=>{if(this.defaults.async)return Promise.resolve(n.hooks[a].call(o,l)).then((d)=>{return s.call(o,d)});let r=n.hooks[a].call(o,l);return s.call(o,r)};else o[a]=(...l)=>{let r=n.hooks[a].apply(o,l);if(r===!1)r=s.apply(o,l);return r}}i.hooks=o}if(n.walkTokens){let o=this.defaults.walkTokens;i.walkTokens=function(a){let s=[];if(s.push(n.walkTokens.call(this,a)),o)s=s.concat(o.call(this,a));return s}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}#e(e,t){return(n,i,o)=>{if(typeof i==="function")o=i,i=null;let a={...i};i={...this.defaults,...a};let s=this.#n(i.silent,i.async,o);if(typeof n==="undefined"||n===null)return s(new Error("marked(): input parameter is undefined or null"));if(typeof n!=="string")return s(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(tl(i,o),i.hooks)i.hooks.options=i;if(o){let l=i.highlight,r;try{if(i.hooks)n=i.hooks.preprocess(n);r=e(n,i)}catch(g){return s(g)}let d=(g)=>{let f;if(!g)try{if(i.walkTokens)this.walkTokens(r,i.walkTokens);if(f=t(r,i),i.hooks)f=i.hooks.postprocess(f)}catch(z){g=z}return i.highlight=l,g?s(g):o(null,f)};if(!l||l.length<3)return d();if(delete i.highlight,!r.length)return d();let p=0;if(this.walkTokens(r,(g)=>{if(g.type==="code")p++,setTimeout(()=>{l(g.text,g.lang,(f,z)=>{if(f)return d(f);if(z!=null&&z!==g.text)g.text=z,g.escaped=!0;if(p--,p===0)d()})},0)}),p===0)d();return}if(i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(n):n).then((l)=>e(l,i)).then((l)=>i.walkTokens?Promise.all(this.walkTokens(l,i.walkTokens)).then(()=>l):l).then((l)=>t(l,i)).then((l)=>i.hooks?i.hooks.postprocess(l):l).catch(s);try{if(i.hooks)n=i.hooks.preprocess(n);let l=e(n,i);if(i.walkTokens)this.walkTokens(l,i.walkTokens);let r=t(l,i);if(i.hooks)r=i.hooks.postprocess(r);return r}catch(l){return s(l)}}}#n(e,t,n){return(i)=>{if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let o="<p>An error occurred:</p><pre>"+oe(i.message+"",!0)+"</pre>";if(t)return Promise.resolve(o);if(n){n(null,o);return}return o}if(t)return Promise.reject(i);if(n){n(i);return}throw i}}}var Be=new $1(ze);function Z(e,t,n){return Be.parse(e,t,n)}Z.options=Z.setOptions=function(e){return Be.setOptions(e),Z.defaults=Be.defaults,B1(Z.defaults),Z};Z.getDefaults=Gt;Z.defaults=ze;Z.use=function(...e){return Be.use(...e),Z.defaults=Be.defaults,B1(Z.defaults),Z};Z.walkTokens=function(e,t){return Be.walkTokens(e,t)};Z.parseInline=Be.parseInline;Z.Parser=be;Z.parser=be.parse;Z.Renderer=wn;Z.TextRenderer=Jn;Z.Lexer=fe;Z.lexer=fe.lex;Z.Tokenizer=yn;Z.Slugger=Qn;Z.Hooks=xn;Z.parse=Z;var{options:L3,setOptions:k3,use:F3,walkTokens:O3,parseInline:D3}=Z,q3=be.parse,H3=fe.lex;/*!
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
*/function R1(e,t){if(t==null)t="";else if(typeof t!=="string")t=String(t);return t.replace(/\{\{([^}]+)\}\}/g,(n,i)=>{let o=p1[`${e}${i.startsWith("[")?i:"."+i}`];return o===void 0?n:R1(e,String(o))})}class U1 extends U{src="";value="";content=null;elements=!1;context={};constructor(){super();this.initAttributes("src","elements","context")}connectedCallback(){if(super.connectedCallback(),this.src!=="")(async()=>{let e=await fetch(this.src);this.value=await e.text()})();else if(this.value==="")if(this.elements)this.value=this.innerHTML;else this.value=this.textContent!=null?this.textContent:""}didRender=()=>{};render(){super.render(),p1[this.instanceId]=typeof this.context==="string"?JSON.parse(this.context):this.context;let e=R1(this.instanceId,this.value);if(this.elements){let t=e.split(`
`).reduce((n,i)=>{if(i.startsWith("<")||n.length===0)n.push(i);else{let o=n[n.length-1];if(!o.startsWith("<")||!o.endsWith(">"))n[n.length-1]+=`
`+i;else n.push(i)}return n},[]);this.innerHTML=t.map((n)=>n.startsWith("<")&&n.endsWith(">")?n:Z(n,{mangle:!1,headerIds:!1})).join("")}else this.innerHTML=Z(e,{mangle:!1,headerIds:!1});this.didRender()}}var G1=U1.elementCreator({tag:"xin-md"});/*!

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
*/var{div:Pt,button:al}=J,sl={error:"red",warn:"orange",info:"royalblue",log:"gray",success:"green",progress:"royalblue"};class on extends U{static singleton;static styleSpec={":host":{_notificationSpacing:8,_notificationWidth:360,_notificationPadding:`${T.notificationSpacing} ${T.notificationSpacing50} ${T.notificationSpacing} ${T.notificationSpacing200}`,_notificationBg:"#fafafa",_notificationAccentColor:"#aaa",_notificationTextColor:"#444",_notificationIconSize:T.notificationSpacing300,_notificationButtonSize:48,_notificationBorderWidth:"3px 0 0",_notificationBorderRadius:T.notificationSpacing50,position:"fixed",left:0,right:0,bottom:0,paddingBottom:T.notificationSpacing,width:T.notificationWidth,display:"flex",flexDirection:"column-reverse",margin:"0 auto",gap:T.notificationSpacing,maxHeight:"50vh",overflow:"hidden auto",boxShadow:"none !important"},":host *":{color:T.notificationTextColor},":host .note":{display:"grid",background:T.notificationBg,padding:T.notificationPadding,gridTemplateColumns:`${T.notificationIconSize} 1fr ${T.notificationButtonSize}`,gap:T.notificationSpacing,alignItems:"center",borderRadius:T.notificationBorderRadius,boxShadow:`0 2px 8px #0006, inset 0 0 0 2px ${T.notificationAccentColor}`,borderColor:T.notificationAccentColor,borderWidth:T.notificationBorderWidth,borderStyle:"solid",transition:"0.5s ease-in",transitionProperty:"margin, opacity",zIndex:1},":host .note .icon":{fill:T.notificationAccentColor},":host .note button":{display:"flex",lineHeight:T.notificationButtonSize,padding:0,margin:0,height:T.notificationButtonSize,width:T.notificationButtonSize,background:"transparent",alignItems:"center",justifyContent:"center",boxShadow:"none",border:"none",position:"relative"},":host .note button:hover svg":{fill:T.notificationAccentColor},":host .note button:active svg":{borderRadius:99,fill:T.notificationBg,background:T.notificationAccentColor,padding:T.spacing50},":host .note svg":{height:T.notificationIconSize,width:T.notificationIconSize,pointerEvents:"none"},":host .message":{display:"flex",flexDirection:"column",alignItems:"center",gap:T.notificationSpacing},":host .note.closing":{opacity:0,zIndex:0}};static removeNote(e){e.classList.add("closing"),e.style.marginBottom=-e.offsetHeight+"px";let t=()=>{e.remove()};e.addEventListener("transitionend",t),setTimeout(t,1000)}static post(e){let{message:t,duration:n,type:i,close:o,progress:a,icon:s}=Object.assign({type:"info",duration:-1},typeof e==="string"?{message:e}:e);if(!this.singleton)this.singleton=ll();let l=this.singleton;document.body.append(l),l.style.zIndex=String(x1()+1);let r=sl[i],d=a||i==="progress"?J.progress():{},p=()=>{if(o)o();on.removeNote(f)},g=s instanceof SVGElement?s:s?F[s]({class:"icon"}):F.info({class:"icon"}),f=Pt({class:`note ${i}`,style:{_notificationAccentColor:r}},g,Pt({class:"message"},Pt(t),d),al({class:"close",title:"close",apply(z){z.addEventListener("click",p)}},F.x()));if(l.shadowRoot.append(f),d instanceof HTMLProgressElement&&a instanceof Function){d.setAttribute("max",String(100)),d.value=a();let z=setInterval(()=>{if(!l.shadowRoot.contains(f)){clearInterval(z);return}let x=a();if(d.value=x,x>=100)on.removeNote(f)},1000)}if(n>0)setTimeout(()=>{on.removeNote(f)},n*1000);return f.scrollIntoView(),p}content=null}var ll=on.elementCreator({tag:"xin-notification"});function P3(e){return on.post(e)}/*!
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
*/var rl=async(e,t="SHA-1")=>{let n=new TextEncoder().encode(e),i=await crypto.subtle.digest(t,n);return Array.from(new Uint8Array(i)).map((o)=>o.toString(16).padStart(2,"0")).join("")},cl=async(e)=>{let t=await rl(e),n=await fetch(`https://weakpass.com/api/v1/search/${t}`);if(n.ok){let i=await n.json();console.log("password found in weakpass database",i)}return n.status!==404},{span:_t,xinSlot:dl}=J;class Y1 extends U{minLength=8;goodLength=12;indicatorColors="#f00,#f40,#f80,#ef0,#8f0,#0a2";descriptionColors="#000,#000,#000,#000,#000,#fff";issues={tooShort:!0,short:!0,noUpper:!0,noLower:!0,noNumber:!0,noSpecial:!0};issueDescriptions={tooShort:"too short",short:"short",noUpper:"no upper case",noLower:"no lower case",noNumber:"no digits",noSpecial:"no unusual characters"};value=0;strengthDescriptions=["unacceptable","very weak","weak","moderate","strong","very strong"];constructor(){super();this.initAttributes("minLength","goodLength","indicatorColors")}strength(e){return this.issues={tooShort:e.length<this.minLength,short:e.length<this.goodLength,noUpper:!e.match(/[A-Z]/),noLower:!e.match(/[a-z]/),noNumber:!e.match(/[0-9]/),noSpecial:!e.match(/[^a-zA-Z0-9]/)},this.issues.tooShort?0:Object.values(this.issues).filter((t)=>!t).length-1}async isBreached(){let e=this.querySelector("input")?.value;if(!e||typeof e!=="string")return!0;return await cl(e)}updateIndicator=(e)=>{let{level:t,description:n}=this.parts,i=this.indicatorColors.split(","),o=this.descriptionColors.split(","),a=this.strength(e);if(this.value!==a)this.value=a,this.dispatchEvent(new Event("change"));t.style.width=`${(a+1)*16.67}%`,this.style.setProperty("--indicator-color",i[a]),this.style.setProperty("--description-color",o[a]),n.textContent=this.strengthDescriptions[a]};update=(e)=>{let t=e.target.closest("input");this.updateIndicator(t?.value||"")};content=()=>[dl({onInput:this.update}),_t({part:"meter"},_t({part:"level"}),_t({part:"description"}))];render(){super.render();let e=this.querySelector("input");this.updateIndicator(e?.value)}}var _3=Y1.elementCreator({tag:"xin-password-strength",styleSpec:{":host":{display:"inline-flex",flexDirection:"column",gap:T.spacing50,position:"relative"},":host xin-slot":{display:"flex"},':host [part="meter"]':{display:"block",position:"relative",height:_.meterHeight("24px"),background:_.indicatorBg("white"),borderRadius:_.meterRadius("4px"),boxShadow:_.meterShadow(`inset 0 0 0 2px ${T.indicatorColor}`)},':host [part="level"]':{height:_.levelHeight("20px"),content:'" "',display:"inline-block",width:0,transition:"0.15s ease-out",background:T.indicatorColor,margin:_.levelMargin("2px"),borderRadius:_.levelRadius("2px")},':host [part="description"]':{position:"absolute",inset:"0",color:T.descriptionColor,height:_.meterHeight("24px"),lineHeight:_.meterHeight("24px"),textAlign:"center"}}});/*!
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
*/var{span:Bt}=J;class K1 extends U{iconSize=24;min=1;max=5;step=1;value=null;icon="star";color="#f91";emptyColor="#8888";emptyStrokeWidth=2;readonly=!1;hollow=!1;static styleSpec={":host":{display:"inline-block",position:"relative",width:"fit-content"},":host::part(container)":{position:"relative",display:"inline-block"},":host::part(empty), :host::part(filled)":{height:"100%",whiteSpace:"nowrap",overflow:"hidden"},":host::part(empty)":{pointerEvents:"none",_textColor:"transparent"},':host [part="empty"]:not(.hollow)':{fill:T.ratingEmptyColor},":host .hollow":{fill:"none",stroke:T.ratingEmptyColor,strokeWidth:T.ratingEmptyStrokeWidth},":host::part(filled)":{position:"absolute",left:0,fill:T.ratingColor,stroke:T.ratingColor,strokeWidth:T.ratingEmptyStrokeWidth},":host svg":{transform:"scale(0.7)",pointerEvents:"all !important",transition:"0.25s ease-in-out"},":host svg:hover":{transform:"scale(0.9)"},":host svg:active":{transform:"scale(1)"}};constructor(){super();this.initAttributes("max","min","icon","step","color","emptyColor","readonly","iconSize","hollow")}content=()=>Bt({part:"container"},Bt({part:"empty"}),Bt({part:"filled"}));displayValue(e){let{empty:t,filled:n}=this.parts,i=Math.round((e||0)/this.step)*this.step;n.style.width=i/this.max*t.offsetWidth+"px"}update=(e)=>{if(this.readonly)return;let{empty:t}=this.parts,n=e instanceof MouseEvent?e.pageX-t.getBoundingClientRect().x:0,i=Math.min(Math.max(this.min,Math.round(n/t.offsetWidth*this.max/this.step+this.step*0.5)*this.step),this.max);if(e.type==="click")this.value=i;else if(e.type==="mousemove")this.displayValue(i);else this.displayValue(this.value||0)};handleKey=(e)=>{let t=Number(this.value);if(t==null)t=Math.round((this.min+this.max)*0.5*this.step)*this.step;let n=!1;switch(e.key){case"ArrowUp":case"ArrowRight":t+=this.step,n=!0;break;case"ArrowDown":case"ArrowLeft":t-=this.step,n=!0;break}if(this.value=Math.max(Math.min(t,this.max),this.min),n)e.stopPropagation(),e.preventDefault()};connectedCallback(){super.connectedCallback();let{container:e}=this.parts;e.tabIndex=0,e.addEventListener("mousemove",this.update,!0),e.addEventListener("mouseleave",this.update),e.addEventListener("blur",this.update),e.addEventListener("click",this.update),e.addEventListener("keydown",this.handleKey)}_renderedIcon="";render(){if(super.render(),this.style.setProperty("--rating-color",this.color),this.style.setProperty("--rating-empty-color",this.emptyColor),this.style.setProperty("--rating-empty-stroke-width",String(this.emptyStrokeWidth*32)),this.readonly)this.role="image";else this.role="slider";this.ariaLabel=`rating ${this.value} out of ${this.max}`,this.ariaValueMax=String(this.max),this.ariaValueMin=String(this.min),this.ariaValueNow=this.value===null?String(-1):String(this.value);let{empty:e,filled:t}=this.parts,n=this.iconSize+"px";if(e.classList.toggle("hollow",this.hollow),this._renderedIcon!==this.icon){this._renderedIcon=this.icon;for(let i=0;i<this.max;i++)e.append(F[this.icon]({height:n})),t.append(F[this.icon]({height:n}))}this.style.height=n,this.displayValue(this.value)}}var B3=K1.elementCreator({tag:"xin-rating"});/*!
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
*/var{xinSlot:o1,div:hl,button:pl,span:X1}=J,ul=[{caption:"Title",tagType:"H1"},{caption:"Heading",tagType:"H2"},{caption:"Subheading",tagType:"H3"},{caption:"Minor heading",tagType:"H4"},{caption:"Body",tagType:"P"},{caption:"Code Block",tagType:"PRE"}];function J1(e=ul){return k1({title:"paragraph style",slot:"toolbar",class:"block-style",options:e.map(({caption:t,tagType:n})=>({caption:t,value:`formatBlock,${n}`}))})}function Mn(e="10px"){return X1({slot:"toolbar",style:{flex:`0 0 ${e}`,content:" "}})}function N3(e="10px"){return X1({slot:"toolbar",style:{flex:`0 0 ${e}`,content:" "}})}function me(e,t,n){return pl({slot:"toolbar",dataCommand:t,title:e},n)}var gl=()=>[me("left-justify","justifyLeft",F.alignLeft()),me("center","justifyCenter",F.alignCenter()),me("right-justify","justifyRight",F.alignRight()),Mn(),me("bullet list","insertUnorderedList",F.listBullet()),me("numbered list","insertOrderedList",F.listNumber()),Mn(),me("indent","indent",F.blockIndent()),me("indent","outdent",F.blockOutdent())],Q1=()=>[me("bold","bold",F.fontBold()),me("italic","italic",F.fontItalic()),me("underline","underline",F.fontUnderline())],ml=()=>[J1(),Mn(),...Q1()],fl=()=>[J1(),Mn(),...gl(),Mn(),...Q1()];class Z1 extends U{widgets="default";isInitialized=!1;get value(){return this.isInitialized?this.parts.doc.innerHTML:this.savedValue||this.innerHTML}set value(e){if(this.isInitialized)this.parts.doc.innerHTML=e;else this.innerHTML=e}blockElement(e){let{doc:t}=this.parts;while(e.parentElement!==null&&e.parentElement!==t)e=e.parentElement;return e.parentElement===t?e:void 0}get selectedBlocks(){let{doc:e}=this.parts,t=window.getSelection();if(t===null)return[];let n=[];for(let i=0;i<t.rangeCount;i++){let o=t.getRangeAt(i);if(!e.contains(o.commonAncestorContainer))continue;let a=this.blockElement(o.startContainer),s=this.blockElement(o.endContainer);n.push(a);while(a!==s&&a!==null)a=a.nextElementSibling,n.push(a)}return n}get selectedText(){let e=window.getSelection();if(e===null)return"";return this.selectedBlocks.length?e.toString():""}selectionChange=()=>{};handleSelectChange=(e)=>{let t=e.target.closest(Xn.tagName);if(t==null)return;this.doCommand(t.value)};handleButtonClick=(e)=>{let t=e.target.closest("button");if(t==null)return;this.doCommand(t.dataset.command)};content=[o1({name:"toolbar",part:"toolbar",onClick:this.handleButtonClick,onChange:this.handleSelectChange}),hl({part:"doc",contenteditable:!0,style:{flex:"1 1 auto",outline:"none"}}),o1({part:"content"})];constructor(){super();this.initAttributes("widgets")}doCommand(e){if(e===void 0)return;let t=e.split(",");console.log("execCommand",t[0],!1,...t.slice(1)),document.execCommand(t[0],!1,...t.slice(1))}updateBlockStyle(){let e=this.parts.toolbar.querySelector(".block-style");if(e===null)return;let t=this.selectedBlocks.map((n)=>n.tagName);t=[...new Set(t)],e.value=t.length===1?`formatBlock,${t[0]}`:""}connectedCallback(){super.connectedCallback();let{doc:e,content:t}=this.parts;if(t.innerHTML!==""&&e.innerHTML==="")e.innerHTML=t.innerHTML,t.innerHTML="";this.isInitialized=!0,t.style.display="none",document.addEventListener("selectionchange",(n)=>{this.updateBlockStyle(),this.selectionChange(n,this)})}render(){let{toolbar:e}=this.parts;if(super.render(),e.children.length===0)switch(this.widgets){case"minimal":e.append(...ml());break;case"default":e.append(...fl());break}}}var V3=Z1.elementCreator({tag:"xin-word",styleSpec:{":host":{display:"flex",flexDirection:"column",height:"100%"},':host [part="toolbar"]':{padding:"4px",display:"flex",gap:"0px",flex:"0 0 auto",flexWrap:"wrap"}}});/*!
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
*/var{div:bl,slot:vl,label:xl,span:yl,input:a1}=J;class eo extends U{choices="";other="";multiple=!1;name="";placeholder="Please specify…";value=null;get values(){return(this.value||"").split(",").map((e)=>e.trim()).filter((e)=>e!=="")}content=()=>[vl(),bl({part:"options"},a1({part:"custom",hidden:!0}))];static styleSpec={":host":{display:"inline-flex",gap:_.segmentedOptionGap("8px")},":host, :host::part(options)":{flexDirection:_.segmentedDirection("row"),alignItems:_.segmentedAlignItems("center")},":host label":{display:"inline-grid",alignItems:"center",gap:_.segmentedOptionGap("8px"),gridTemplateColumns:_.segmentedOptionGridColumns("0px 24px 1fr"),padding:_.segmentedOptionPadding("4px 12px"),font:_.segmentedOptionFont("16px")},":host label:has(:checked)":{color:_.segmentedOptionCurrentColor("#eee"),background:_.segmentedOptionCurrentBackground("#44a")},":host svg":{height:_.segmentOptionIconSize("16px"),fill:_.segmentedOptionIconColor("currentColor")},":host label.no-icon":{gap:0,gridTemplateColumns:_.segmentedOptionGridColumns("0px 1fr")},':host input[type="radio"], :host input[type="checkbox"]':{visibility:_.segmentedInputVisibility("hidden")},":host::part(options)":{display:"flex",borderRadius:_.segmentedOptionsBorderRadius("8px"),background:_.segmentedOptionsBackground("#fff"),color:_.segmentedOptionColor("#222"),overflow:"hidden"},":host::part(custom)":{padding:_.segmentedOptionPadding("4px 12px"),color:_.segmentedOptionCurrentColor("#eee"),background:_.segmentedOptionCurrentBackground("#44a"),font:_.segmentedOptionFont("16px"),border:"0",outline:"none"},":host::part(custom)::placeholder":{color:_.segmentedOptionCurrentColor("#eee"),opacity:_.segmentedPlaceholderOpacity(0.75)}};constructor(){super();this.initAttributes("direction","choices","other","multiple","name","placeholder")}valueChanged=!1;handleChange=()=>{let{options:e,custom:t}=this.parts;if(this.multiple){let n=[...e.querySelectorAll("input:checked")];this.value=n.map((i)=>i.value).join(",")}else{let n=e.querySelector("input:checked");if(!n)this.value=null;else if(n.value)t.setAttribute("hidden",""),this.value=n.value;else t.removeAttribute("hidden"),t.focus(),t.select(),this.value=t.value}this.valueChanged=!0};handleKey=(e)=>{switch(e.code){case"Space":e.target.click();break}};connectedCallback(){super.connectedCallback();let{options:e}=this.parts;if(this.name==="")this.name=this.instanceId;if(e.addEventListener("change",this.handleChange),e.addEventListener("keydown",this.handleKey),this.other&&this.multiple)console.warn(this,"is set to [other] and [multiple]; [other] will be ignored"),this.other=""}get _choices(){let e=Array.isArray(this.choices)?this.choices:this.choices.split(",").filter((t)=>t.trim()!=="").map((t)=>{let[n,i]=t.split("=").map((l)=>l.trim()),[o,a]=(i||n).split(":").map((l)=>l.trim()),s=a?F[a]():"";return{value:n,icon:s,caption:o}});if(this.other&&!this.multiple){let[t,n]=this.other.split(":");e.push({value:"",caption:t,icon:n})}return e}get isOtherValue(){return Boolean(this.value===""||this.value&&!this._choices.find((e)=>e.value===this.value))}render(){if(super.render(),this.valueChanged){this.valueChanged=!1;return}let{options:e,custom:t}=this.parts;e.textContent="";let n=this.multiple?"checkbox":"radio",{values:i,isOtherValue:o}=this;if(e.append(...this._choices.map((a)=>{return xl({tabindex:0},a1({type:n,name:this.name,value:a.value,checked:i.includes(a.value)||a.value===""&&o,tabIndex:-1}),a.icon||{class:"no-icon"},yl(a.caption))})),this.other&&!this.multiple)t.hidden=!o,t.value=o?this.value:"",t.placeholder=this.placeholder,e.append(t)}}var W3=eo.elementCreator({tag:"xin-segmented"});/*!
# sidebar

The default layout for iOS / iPadOS apps is to hide the sidebar when displaying content on small
screens, and display the sidebar when space is available (with the user able to explicitly hide
the sidebar if so desired). `<xin-sidenav>` provides this functionality.

`<xin-sidenav>` is used to handle the layout of the documentation tab panel.

`<xin-sidenav>`'s behavior is controlled by two attributes, `minSize` is the point at which it will toggle between showing the navigation
sidebar and content, while `navSize` is the width of the sidebar. You can interrogate its `compact` property to find out if it's
currently in `compact` form.
*/var{slot:s1}=J;class no extends U{minSize=800;navSize=200;compact=!1;content=[s1({name:"nav"}),s1({part:"content"})];_contentVisible=!1;get contentVisible(){return this._contentVisible}set contentVisible(e){this._contentVisible=e,this.queueRender()}static styleSpec={":host":{display:"grid",gridTemplateColumns:`${_.navWidth("50%")} ${_.contentWidth("50%")}`,gridTemplateRows:"100%",position:"relative",margin:_.margin("0 0 0 -100%"),transition:_.sideNavTransition("0.25s ease-out")},":host slot":{position:"relative"},":host slot:not([name])":{display:"block"},':host slot[name="nav"]':{display:"block"}};onResize=()=>{let{content:e}=this.parts,t=this.offsetParent;if(t===null)return;if(this.compact=t.offsetWidth<this.minSize,[...this.childNodes].find((n)=>n instanceof Element?n.getAttribute("slot")!=="nav":!0)===void 0){this.style.setProperty("--nav-width","100%"),this.style.setProperty("--content-width","0%");return}if(!this.compact)e.classList.add("-xin-sidenav-visible"),this.style.setProperty("--nav-width",`${this.navSize}px`),this.style.setProperty("--content-width",`calc(100% - ${this.navSize}px)`),this.style.setProperty("--margin","0");else if(e.classList.remove("-xin-sidenav-visible"),this.style.setProperty("--nav-width","50%"),this.style.setProperty("--content-width","50%"),this.contentVisible)this.style.setProperty("--margin","0 0 0 -100%");else this.style.setProperty("--margin","0 -100% 0 0")};observer;connectedCallback(){super.connectedCallback(),this.contentVisible=this.parts.content.childNodes.length===0,globalThis.addEventListener("resize",this.onResize),this.observer=new MutationObserver(this.onResize),this.observer.observe(this,{childList:!0}),this.style.setProperty("--side-nav-transition","0s"),setTimeout(()=>{this.style.removeProperty("--side-nav-transition")},250)}disconnectedCallback(){super.disconnectedCallback(),this.observer.disconnect()}constructor(){super();this.initAttributes("minSize","navSize","compact")}render(){super.render(),this.onResize()}}var to=no.elementCreator({tag:"xin-sidenav"}),{slot:l1}=J;/*!
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
*/class io extends U{minWidth=0;minHeight=0;value="normal";content=[l1({part:"normal"}),l1({part:"small",name:"small"})];static styleSpec={":host":{display:"inline-block",position:"relative"}};constructor(){super();this.initAttributes("minWidth","minHeight")}onResize=()=>{let{normal:e,small:t}=this.parts,n=this.offsetParent;if(!(n instanceof HTMLElement))return;else if(n.offsetWidth<this.minWidth||n.offsetHeight<this.minHeight)e.hidden=!0,t.hidden=!1,this.value="small";else e.hidden=!1,t.hidden=!0,this.value="normal"};connectedCallback(){super.connectedCallback(),globalThis.addEventListener("resize",this.onResize)}disconnectedCallback(){super.disconnectedCallback(),globalThis.removeEventListener("resize",this.onResize)}}var oo=io.elementCreator({tag:"xin-sizebreak"});/*!
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
*/class ao extends U{target=null;static styleSpec={":host":{_resizeIconFill:"#222",display:"block",position:"absolute",bottom:-7,right:-7,padding:14,width:44,height:44,opacity:0.25,transition:"opacity 0.25s ease-out"},":host(:hover)":{opacity:0.5},":host svg":{width:16,height:16,fill:T.resizeIconFill}};content=F.resize();get minSize(){let{minWidth:e,minHeight:t}=getComputedStyle(this.target);return{width:parseFloat(e)||32,height:parseFloat(t)||32}}resizeTarget=(e)=>{let{target:t}=this;if(!t)return;let{offsetWidth:n,offsetHeight:i}=t;t.style.left=t.offsetLeft+"px",t.style.top=t.offsetTop+"px",t.style.bottom="",t.style.right="";let{minSize:o}=this;Pe(e,(a,s,l)=>{if(t.style.width=Math.max(o.width,n+a)+"px",t.style.height=Math.max(o.height,i+s)+"px",l.type==="mouseup")return!0},"nwse-resize")};connectedCallback(){if(super.connectedCallback(),!this.target)this.target=this.parentElement;let e={passive:!0};this.addEventListener("mousedown",this.resizeTarget,e),this.addEventListener("touchstart",this.resizeTarget,e)}}var $3=ao.elementCreator({tag:"xin-sizer"});/*!
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
*/var{div:wl,input:Ml,span:zl,button:so}=J;class Yt extends U{caption="";removeable=!1;removeCallback=()=>{this.remove()};content=()=>[zl({part:"caption"},this.caption),so(F.x(),{part:"remove",hidden:!this.removeable,onClick:this.removeCallback})];constructor(){super();this.initAttributes("caption","removeable")}}var Sl=Yt.elementCreator({tag:"xin-tag",styleSpec:{":host":{"--tag-close-button-color":"#000c","--tag-close-button-bg":"#fffc","--tag-close-button-border-radius":"99px","--tag-button-opacity":"0.5","--tag-button-hover-opacity":"0.75","--tag-bg":_.brandColor("blue"),"--tag-text-color":_.brandTextColor("white"),display:"inline-flex",borderRadius:T.spacing50,color:T.tagTextColor,background:T.tagBg,padding:`0 ${T.spacing75} 0 ${T.spacing75}`,height:`calc(${T.lineHeight} + ${T.spacing50})`,lineHeight:`calc(${T.lineHeight} + ${T.spacing50})`},':host > [part="caption"]':{position:"relative",whiteSpace:"nowrap",overflow:"hidden",flex:"1 1 auto",fontSize:_.fontSize("16px"),color:T.tagTextColor,textOverflow:"ellipsis"},':host [part="remove"]':{boxShadow:"none",margin:`0 ${T.spacing_50} 0 ${T.spacing25}`,padding:0,display:"inline-flex",alignItems:"center",alignSelf:"center",justifyContent:"center",height:T.spacing150,width:T.spacing150,"--text-color":T.tagCloseButtonColor,background:T.tagCloseButtonBg,borderRadius:T.tagCloseButtonBorderRadius,opacity:T.tagButtonOpacity},':host [part="remove"]:hover':{background:T.tagCloseButtonBg,opacity:T.tagButtonHoverOpacity}}});class lo extends U{name="";availableTags=[];value=[];textEntry=!1;editable=!1;placeholder="enter tags";get tags(){return typeof this.value==="string"?this.value.split(",").map((e)=>e.trim()).filter((e)=>e!==""):this.value}constructor(){super();this.initAttributes("name","value","textEntry","availableTags","editable","placeholder")}addTag=(e)=>{if(e.trim()==="")return;let{tags:t}=this;if(!t.includes(e))t.push(e);this.value=t,this.queueRender(!0)};toggleTag=(e)=>{if(this.tags.includes(e))this.value=this.tags.filter((t)=>t!==e);else this.addTag(e);this.queueRender(!0)};enterTag=(e)=>{let{tagInput:t}=this.parts;switch(e.key){case",":{let n=t.value.split(",")[0];this.addTag(n)}break;case"Enter":{let n=t.value.split(",")[0];this.addTag(n)}e.stopPropagation(),e.preventDefault();break;default:}};popSelectMenu=()=>{let{toggleTag:e}=this,{tagMenu:t}=this.parts,n=typeof this.availableTags==="string"?this.availableTags.split(","):this.availableTags,i=this.tags.filter((a)=>!n.includes(a));if(i.length)n.push(null,...i);let o=n.map((a)=>{if(a===""||a===null)return null;else if(typeof a==="object")return{icon:this.tags.includes(a.value)?F.minus():F.plus(),caption:a.caption,action(){e(a.value)}};else return{icon:this.tags.includes(a)?F.minus():F.plus(),caption:a,action(){e(a)}}});zn({target:t,width:"auto",menuItems:o})};content=()=>[wl({part:"tagContainer",class:"row",onClick(e){e.stopPropagation(),e.preventDefault()}}),Ml({part:"tagInput",class:"elastic",onKeydown:this.enterTag}),so({title:"add tag",part:"tagMenu",onClick:this.popSelectMenu},F.chevronDown())];removeTag=(e)=>{if(this.editable){let t=e.target.closest(Yt.tagName);this.value=this.tags.filter((n)=>n!==t.caption),t.remove(),this.queueRender(!0)}e.stopPropagation(),e.preventDefault()};render(){super.render();let{tagContainer:e,tagMenu:t,tagInput:n}=this.parts;if(n.value="",n.setAttribute("placeholder",this.placeholder),this.editable)t.toggleAttribute("hidden",!1),n.toggleAttribute("hidden",!this.textEntry);else t.toggleAttribute("hidden",!0),n.toggleAttribute("hidden",!0);e.textContent="";let{tags:i}=this;for(let o of i)e.append(Sl({caption:o,removeable:this.editable,removeCallback:this.removeTag}))}}var R3=lo.elementCreator({tag:"xin-tag-list",styleSpec:{":host":{"--tag-list-bg":"#f8f8f8","--touch-size":"44px","--spacing":"16px",display:"grid",gridTemplateColumns:"auto",alignItems:"center",background:T.tagListBg,gap:T.spacing25},":host[editable]":{gridTemplateColumns:`auto ${T.touchSize}`},":host[editable][text-entry]":{gridTemplateColumns:`2fr 1fr ${T.touchSize}`},':host [part="tagContainer"]':{display:"flex",content:'" "',alignItems:"center",background:T.inputBg,borderRadius:T.roundedRadius,boxShadow:T.borderShadow,flexWrap:"nowrap",overflow:"auto hidden",gap:T.spacing25,minHeight:`calc(${T.lineHeight} + ${T.spacing})`,padding:T.spacing25},':host [part="tagMenu"]':{width:T.touchSize,height:T.touchSize,lineHeight:T.touchSize,textAlign:"center",padding:0,margin:0},":host [hidden]":{display:"none !important"}}});/*!
# style

## Convert CSS to Javascript

This is a simple utility for converting CSS into a xinjs `XinStyleSheet` object.
Having all of your CSS start as Javascript (or Typescript) has many
benefits, such as being able to do color math using `xinjs`'s `Color` class,
and use the same values that are in your CSS for inline code when needed.

> ### Caution
>
> - This is not a real parser but regexp hackery!
> - Doesn't handle edge-cases like semicolons inside string values or
>   skipped semicolons for the last property in a rule.
> - Doesn't convert variable references inside style values (e.g. calc(var(--foo) * 0.5))
>   into `vars` values.

```js
const tabs = preview.querySelector('xin-tabs')
const [css, js] = preview.querySelectorAll('xin-code')
const convertButton = preview.querySelector('button')

function quoteTrim(s, symbol = false) {
  s = s.trim()
  if (s.match(/[^\w_]/) || !symbol) {
    s = s.replace(/'/g, "\\'")
    return `'${s}'`
  } else {
    return s
  }
}

function kebabToCamel(s) {
  s = s.replace(/--/, '_')
  return s.replace(/\-(\w)/g, (_, c) => c.toLocaleUpperCase())
}

function css2js () {
  const source = css.value
  const lines = source.split('\n')
  const output = ['{']
  let rule = ''
  for(const line of lines) {
    if (!line.trim()) {
      continue
    }
    try {
      rule = rule ? rule + ' ' + line.trim() : line
      if (rule.match(/@import .*;/)) {
        const [,url] = rule.match(/@import url\(['"](.*)['"]\);/)
        output.push(`'@import': ${quoteTrim(url)},`)
        rule = ''
      } else if (rule.match(/\{\s*$/)) {
        const [,whitespace, selector] = rule.match(/(\s*)([^\s].*)\{/)
        output.push(`${whitespace}${quoteTrim(selector, true)}: {`)
        rule = ''
      } else if (line.match(/[^\s]*\}\s*$/)) {
        output.push(line + ',')
        rule = ''
      } else if (rule.match(/.*:.*;/)) {
        let [,whitespace, prop, value] = rule.match(/(\s*)(.*):(.*);/)
        prop = kebabToCamel(prop)
        output.push(`${whitespace}${quoteTrim(prop, true)}: ${quoteTrim(value)},`)
        rule = ''
      }
    } catch(e) {
      console.error(e, line)
    }
  }
  output.push('}')
  let code = output.join('\n')
  code = code.replace(/'var\(--([^)]*)\)'/g, (_,v) => `vars.${kebabToCamel(v)}`)

  js.value = `import { vars } from 'xinjs'\n\nexport const styleSpec = ${code}`
}

convertButton.addEventListener('click', () => {
  css2js()
  tabs.value = 1
})
```
```html
<xin-tabs>
<button slot="after-tabs">Convert</button>
<xin-code mode="css" name="css">
@import url('https://fonts.googleapis.com/css2?family=Aleo:ital,wght@0,100..900;1,100..900&famiSpline+Sans+Mono:ital,wght@0,300..700;1,300..700&display=swap');

tr:nth-child(2n) {
  background: var(--background-shaded);
}

th,
td {
  padding: calc(var(--spacing) * 0.5) var(--spacing);
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

header xin-locale-picker xin-select button {
  --brand-color: var(--brand-text-color);
  background: transparent;
  gap: 2px;
}

header xin-locale-picker xin-select button svg {
  fill: var(--brand-text-color) !important;
}
</xin-code>
<xin-code mode="javascript" name="js"></xin-code>
</xin-tabs>
```
```css
.preview xin-tabs {
  background: var(--inset-bg);
}
.preview xin-tabs, .preview textarea, .preview xin-code {
  width: 100%;
  height: 100%;
  resize: none;
}
```

## Using the Output

You can turn the output of this utility using `xinjs`'s `StyleSheet` utility function:

```
import { styleSpec } from './my-style'

StyleSheet('base-style', styleSpec) // creates a `<style id="base-style>` element in
  the `<head>` of the page.
```

You can convert the output to Typescript by importing the `XinStyleSheet` from `xinjs`:

```
import { XinStyleSheet, vars } from 'xinjs'

export const styleSpec: XinStyleSheet = ...
```
*/var ro={"@import":"https://fonts.googleapis.com/css2?family=Aleo:ital,wght@0,100..900;1,100..900&famiSpline+Sans+Mono:ital,wght@0,300..700;1,300..700&display=swap",":root":{_fontFamily:"'Aleo', sans-serif",_codeFontFamily:"'Spline Sans Mono', monospace",_fontSize:"16px",_codeFontSize:"14px",_textColor:"#222",_brandColor:"#088358",_linkColor:y.brandColor,_background:"#fafafa",_backgroundShaded:"#f5f5f5",_navBg:"#efefeed2",_barColor:"#dae3df",_focusColor:"#08835880",_brandTextColor:"#ecf3dd",_insetBg:"#eee",_codeBg:"#f8ffe9",_spacing:"10px",_lineHeight:"calc(var(--font-size) * 1.6)",_h1Scale:"2",_h2Scale:"1.5",_h3Scale:"1.25",_xinTabsSelectedColor:y.brandColor,_xinTabsBarColor:y.brandTextColor,_touchSize:"32px",_shadowColor:"#0004",_menuItemIconColor:y.brandColor,_headerHeight:"calc( var(--line-height) * var(--h2-scale) + var(--spacing) * 2 )"},"*":{boxSizing:"border-box"},body:{fontFamily:y.fontFamily,fontSize:y.fontSize,margin:"0",lineHeight:y.lineHeight,background:y.background,color:y.textColor},"input, button, select, textarea":{fontFamily:y.fontFamily,fontSize:y.fontSize},select:{WebkitAppearance:"none",appearance:"none"},header:{background:y.brandColor,color:y.brandTextColor,_textColor:y.brandTextColor,_linkColor:y.transTextColor,display:"flex",alignItems:"center",padding:"0 calc(var(--spacing) * 1.5)",lineHeight:"calc(var(--line-height) * var(--h1-scale))",height:y.headerHeight,whiteSpace:"nowrap"},h1:{_textColor:y.brandColor,fontSize:"calc(var(--font-size) * var(--h1-scale))",lineHeight:"calc(var(--line-height) * var(--h1-scale))",fontWeight:"400",margin:"0",padding:y.spacing,textAlign:"center"},"header h2":{color:y.brandTextColor,whiteSpace:"nowrap"},h2:{color:y.brandColor,fontSize:"calc(var(--font-size) * var(--h2-scale))",lineHeight:"calc(var(--line-height) * var(--h2-scale))",margin:"calc(var(--spacing) * var(--h2-scale)) 0"},h3:{fontSize:"calc(var(--font-size) * var(--h3-scale))",lineHeight:"calc(var(--line-height) * var(--h3-scale))",margin:"calc(var(--spacing) * var(--h3-scale)) 0"},main:{alignItems:"stretch",display:"flex",flexDirection:"column",maxWidth:"100vw",height:"100vh",overflow:"hidden"},"main > xin-sidenav":{height:"calc(100vh - var(--header-height))"},blockquote:{background:y.insetBg,margin:"0",padding:"var(--spacing) calc(var(--spacing) * 2)"},"blockquote > :first-child":{marginTop:"0"},"blockquote > :last-child":{marginBottom:"0"},".bar":{display:"flex",gap:y.spacing,justifyContent:"center",alignItems:"center",padding:y.spacing,flexWrap:"wrap",_textColor:y.brandColor,background:y.barColor},a:{textDecoration:"none",color:y.linkColor,opacity:"0.9",borderBottom:"1px solid var(--brand-color)"},"button, select, .clickable":{transition:"ease-out 0.2s",background:y.brandTextColor,_textColor:y.brandColor,display:"inline-block",textDecoration:"none",padding:"0 calc(var(--spacing) * 1.25)",border:"none",borderRadius:"calc(var(--spacing) * 0.5)"},"button, select, clickable, input":{lineHeight:"calc(var(--line-height) + var(--spacing))"},"select:has(+ .icon-chevron-down)":{paddingRight:"calc(var(--spacing) * 2.7)"},"select + .icon-chevron-down":{marginLeft:"calc(var(--spacing) * -2.7)",width:"calc(var(--spacing) * 2.7)",alignSelf:"center",pointerEvents:"none",objectPosition:"left center",_textColor:y.brandColor},"label > select + .icon-chevron-down":{marginLeft:"calc(var(--spacing) * -3.5)"},"input, textarea":{border:"none",outline:"none",borderRadius:"calc(var(--spacing) * 0.5)"},input:{padding:"0 calc(var(--spacing) * 1.5)"},textarea:{padding:"var(--spacing) calc(var(--spacing) * 1.25)",lineHeight:y.lineHeight,minHeight:"calc(var(--spacing) + var(--line-height) * 4)"},"input[type='number']":{paddingRight:0,width:"6em",textAlign:"right"},"input[type=number]::-webkit-inner-spin-button":{margin:"1px 3px 1px 0.5em",opacity:1,inset:1},"input[type='checkbox'], input[type='radio']":{maxWidth:y.lineHeight},"::placeholder":{color:y.focusColor},img:{verticalAlign:"middle"},"button:hover, button:hover, .clickable:hover":{boxShadow:"inset 0 0 0 2px var(--brand-color)"},"button:active, button:active, .clickable:active":{background:y.brandColor,color:y.brandTextColor},label:{display:"inline-flex",gap:"calc(var(--spacing) * 0.5)",alignItems:"center"},".elastic":{flex:"1 1 auto",overflow:"hidden",position:"relative"},"svg text":{pointerEvents:"none",fontSize:"16px",fontWeight:"bold",fill:"#000",stroke:"#fff8",strokeWidth:"0.5",opacity:"0"},"svg text.hover":{opacity:"1"},".thead":{background:y.brandColor,color:y.brandTextColor},".th + .th":{border:"1px solid #fff4",borderWidth:"0 1px"},".th, .td":{padding:"0 var(--spacing)"},".tr:not([aria-selected]):hover":{background:"#08835810"},"[aria-selected]":{background:"#08835820"},":disabled":{opacity:"0.5",filter:"saturate(0)",pointerEvents:"none"},pre:{background:y.codeBg,padding:y.spacing,borderRadius:"calc(var(--spacing) * 0.25)",overflow:"scroll",fontSize:y.codeFontSize,lineHeight:"calc(var(--font-size) * 1.2)"},"pre, code":{fontFamily:y.codeFontFamily,_textColor:y.brandColor},".-xin-sidenav-visible .close-content":{display:"none"},".transparent, .iconic":{background:"none"},".iconic":{padding:"0",fontSize:"150%",lineHeight:"calc(var(--line-height) + var(--spacing))",width:"calc(var(--line-height) + var(--spacing))",textAlign:"center"},".transparent:hover, .iconic:hover":{background:"#0002",boxShadow:"none",color:y.textColor},".transparent:active, .iconic:active":{background:"#0004",boxShadow:"none",color:y.textColor},"xin-sidenav:not([compact]) .show-within-compact":{display:"none"},".on.on":{background:y.brandColor,_textColor:y.brandTextColor},".current":{background:y.background},".doc-link":{cursor:"pointer",borderBottom:"none",transition:"0.15s ease-out",marginLeft:"20px",padding:"calc(var(--spacing) * 0.5) calc(var(--spacing) * 1.5)"},".doc-link:not(.current):hover":{background:y.background},".doc-link:not(.current)":{opacity:"0.8",marginLeft:0},"xin-example":{margin:"var(--spacing) 0"},"[class*='icon-'], xin-icon":{color:"currentcolor",height:y.fontSize,pointerEvents:"none"},"[class*='icon-']":{verticalAlign:"middle"},".icon-plus":{content:"'+'"},table:{borderCollapse:"collapse"},thead:{background:y.brandColor,color:y.brandTextColor},tbody:{background:y.background},"tr:nth-child(2n)":{background:y.backgroundShaded},"th, td":{padding:"calc(var(--spacing) * 0.5) var(--spacing)"},"header xin-locale-picker xin-select button":{color:"currentcolor",background:"transparent",gap:"2px"},svg:{fill:"currentcolor"},"img.logo":{animation:"2s ease-in-out 0s infinite alternate logo-swing"},"@keyframes logo-swing":{"0%":{transform:"perspective(1000px) rotateY(15deg)"},"100%":{transform:"perspective(1000px) rotateY(-15deg)"}}};var co=`en-US	fr	fi	sv	zh	ja	ko	es	de	it
English	French	Finnish	Swedish	Chinese	Japanese	Korean	Spanish	German	Italian
English	Français	suomi	svenska	中国人	日本語	한국인	Español	Deutsch	Italiano
\uD83C\uDDFA\uD83C\uDDF8	\uD83C\uDDEB\uD83C\uDDF7	\uD83C\uDDEB\uD83C\uDDEE	\uD83C\uDDF8\uD83C\uDDEA	\uD83C\uDDE8\uD83C\uDDF3	\uD83C\uDDEF\uD83C\uDDF5	\uD83C\uDDF0\uD83C\uDDF7	\uD83C\uDDEA\uD83C\uDDF8	\uD83C\uDDE9\uD83C\uDDEA	\uD83C\uDDEE\uD83C\uDDF9
Language	Langue	Kieli	Språk	语言	言語	언어	Idioma	Sprache	Lingua
Icon	Icône	Kuvake	Ikon	图标	アイコン	상	Icono	Symbol	Icona
Okay	D'accord	Kunnossa	Okej	好的	わかった	좋아요	Bueno	Okay	Va bene
Cancel	Annuler	Peruuttaa	Avboka	取消	キャンセル	취소	Cancelar	Stornieren	Cancellare
Delete	Supprimer	Poistaa	Radera	删除	消去	삭제	Borrar	Löschen	Eliminare
Yes	Oui	Kyllä	Ja	是的	はい	예	Sí	Ja	SÌ
No	Non	Ei	Inga	不	いいえ	아니요	No	NEIN	NO
Cut	Couper	Leikata	Skära	切	カット	자르다	Cortar	Schneiden	Taglio
Copy	Copie	Kopioida	Kopiera	复制	コピー	복사	Copiar	Kopie	Copia
Paste	Coller	Liitä	Klistra	粘贴	ペースト	반죽	Pasta	Paste	Impasto
Heading	Titre	Otsikko	Rubrik	标题	見出し	표제	Título	Überschrift	Intestazione
Body	Corps	Runko	Kropp	身体	体	몸	Cuerpo	Körper	Corpo
Left	Gauche	Vasen	Vänster	左边	左	왼쪽	Izquierda	Links	Sinistra
Right	Droite	Oikein	Rätt	正确的	右	오른쪽	Bien	Rechts	Giusto
Center	Centre	Keskusta	Centrum	中心	中心	센터	Centro	Center	Centro
Justify	Justifier	Perustella	Rättfärdiga	证明合法	正当化する	신이 옳다고 하다	Justificar	Rechtfertigen	Giustificare
Bold	Audacieux	Lihavoitu	Djärv	大胆的	大胆な	용감한	Atrevido	Deutlich	Grassetto
Italic	Italique	Kursiivi	Kursiv	斜体	イタリック	이탤릭체	Itálico	Kursiv	Corsivo
Underline	Souligner	Korostaa	Betona	强调	下線	밑줄	Subrayar	Unterstreichen	Sottolineare
Save	Sauvegarder	Tallentaa	Spara	节省	保存	구하다	Ahorrar	Speichern	Salva
Open	Ouvrir	Avata	Öppna	打开	開ける	열려 있는	Abierto	Offen	Aprire
Quit	Quitter	Lopettaa	Sluta	辞职	やめる	그만두다	Abandonar	Aufhören	Esentato
Close	Fermer	Lähellä	Nära	关闭	近い	닫다	Cerca	Schließen	Vicino
Exit	Sortie	Poistu	Utgång	出口	出口	출구	Salida	Ausfahrt	Uscita
File	Déposer	Tiedosto	Fil	文件	ファイル	파일	Archivo	Datei	File
Document	Document	Asiakirja	Dokumentera	文档	書類	문서	Documento	Dokumentieren	Documento
Move	Se déplacer	Liikkua	Flytta	移动	動く	이동하다	Mover	Bewegen	Mossa
Code	Code	Koodi	Koda	代码	コード	암호	Código	Code	Codice
Maximize	Maximiser	Maksimoida	Maximera	最大化	最大化する	최대화	Maximizar	Maximieren	Massimizzare
Minimize	Minimiser	Minimoida	Minimera	最小化	最小化する	최소화	Minimizar	Minimieren	Minimizzare
Library	Bibliothèque	Kirjasto	Bibliotek	图书馆	図書館	도서관	Biblioteca	Bibliothek	Biblioteca
Example	Exemple	Esimerkki	Exempel	例子	例	예	Ejemplo	Beispiel	Esempio
Carousel	Carrousel	Karuselli	Karusell	轮播	カルーセル	회전목마	Carrusel	Karussell	Giostra
Menu	Menu	Valikko	Meny	菜单	メニュー	메뉴	Menú	Speisekarte	Menu
Notifications	Notifications	Ilmoitukset	Aviseringar	通知	通知	알림	Notificaciones	Benachrichtigungen	Notifiche
Float	Flotter	Kellua	Flyta	漂浮	フロート	뜨다	Flotar	Schweben	Galleggiante
Rating	Notation	Luokitus	Gradering	等级	評価	평가	Clasificación	Bewertung	Valutazione
Select	Sélectionner	Valitse	Välja	选择	選択	선택하다	Seleccionar	Wählen	Selezionare
Sidebar	Barre latérale	Sivupalkki	Sidofält	侧边栏	サイドバー	사이드바	Barra lateral	Seitenleiste	Barra laterale
Sizer	Calibreur	Mitoitus	Sizer	尺寸测定器	サイザー	사이저	medidor	Sizer	Misuratore
Table	Tableau	Taulukko	Tabell	桌子	テーブル	테이블	Mesa	Tisch	Tavolo
Forms	Formulaires	Lomakkeet	Blanketter	表格	フォーム	양식	Formularios	Formulare	Forme
Filter	Filtre	Suodattaa	Filtrera	筛选	フィルター	필터	Filtrar	Filter	Filtro
Map	Carte	Kartta	Karta	地图	地図	지도	Mapa	Karte	Mappa
Tabs	Onglets	Välilehdet	Flikar	选项卡	タブ	탭	Cortina a la italiana	Tabs	Schede
Localize	Localiser	Paikallistaa	Lokalisera	本地化	ローカライズ	현지화	Localizar	Lokalisieren	Localizzare`;var Ai={};St(Ai,{xrControllersText:()=>rr,xrControllers:()=>lr,xinTagList:()=>p0,xinTag:()=>pa,xinSizer:()=>r0,xinSelect:()=>An,xinSegmented:()=>a0,xinRating:()=>Gr,xinPasswordStrength:()=>Ur,xinNotification:()=>ea,xinLocalized:()=>zr,xinForm:()=>ar,xinFloat:()=>it,xinField:()=>or,xinCarousel:()=>Fl,updateLocalized:()=>gi,trackDrag:()=>le,tabSelector:()=>ui,svgIcon:()=>El,svg2DataUrl:()=>Jt,styleSheet:()=>et,spacer:()=>dn,sizeBreak:()=>l0,sideNav:()=>s0,scriptTag:()=>re,richTextWidgets:()=>sa,richText:()=>e0,removeLastMenu:()=>Ie,postNotification:()=>$r,positionFloat:()=>bo,popMenu:()=>ve,popFloat:()=>oi,menu:()=>zo,markdownViewer:()=>Nr,mapBox:()=>Cr,makeSorter:()=>gt,makeExamplesLive:()=>fr,localize:()=>mi,localePicker:()=>Mr,liveExample:()=>ut,isBreached:()=>ta,initLocalization:()=>wr,icons:()=>A,i18n:()=>te,gamepadText:()=>sr,gamepadState:()=>qo,findHighestZ:()=>jn,filterPart:()=>rt,filterBuilder:()=>Ql,elastic:()=>Jr,editableRect:()=>Gl,dragAndDrop:()=>st,digest:()=>na,defineIcon:()=>Il,dataTable:()=>Rl,createSubMenu:()=>wo,createMenuItem:()=>Mo,createMenuAction:()=>yo,commandButton:()=>pe,colorInput:()=>ii,codeEditor:()=>Tn,bringToFront:()=>Ce,bodymovinPlayer:()=>Ll,blockStyle:()=>Si,b3d:()=>Al,availableFilters:()=>ci,abTest:()=>Cl,XinTagList:()=>Ei,XinTag:()=>wt,XinSizer:()=>Ii,XinSelect:()=>Re,XinRating:()=>zi,XinPasswordStrength:()=>wi,XinNotification:()=>Ye,XinLocalized:()=>mt,XinForm:()=>En,XinFloat:()=>Te,XinField:()=>ct,XinCarousel:()=>ni,TabSelector:()=>dt,SvgIcon:()=>Qt,SizeBreak:()=>ji,SideNav:()=>Ti,RichText:()=>Ci,MarkdownViewer:()=>vi,MapBox:()=>Ue,MAPSTYLES:()=>Vo,LocalePicker:()=>fi,LiveExample:()=>pt,FilterPart:()=>di,FilterBuilder:()=>hi,EditableRect:()=>he,DataTable:()=>li,CodeEditor:()=>Ne,BodymovinPlayer:()=>ln,B3d:()=>Zt,AbTest:()=>sn});/*!
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
*/var{abTestConditions:Kt}=Oe({abTestConditions:{}});class sn extends H{static set conditions(e){Object.assign(Kt,e);for(let t of[...sn.instances])t.queueRender()}condition="";not=!1;static instances=new Set;constructor(){super();this.initAttributes("condition","not")}connectedCallback(){super.connectedCallback(),sn.instances.add(this)}disconnectedCallback(){super.disconnectedCallback(),sn.instances.delete(this)}render(){if(this.condition!==""&&(this.not?Kt[this.condition]!==!0:Kt[this.condition]===!0))this.toggleAttribute("hidden",!1);else this.toggleAttribute("hidden",!0)}}var Cl=sn.elementCreator({tag:"xin-ab"});/*!
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
*/var Zn={};function re(e,t){if(Zn[e]===void 0){if(t!==void 0){let i=globalThis[t];Zn[e]=Promise.resolve({[t]:i})}let n=P.script({src:e});document.head.append(n),Zn[e]=new Promise((i)=>{n.onload=()=>i(globalThis)})}return Zn[e]}var Xt={};function et(e){if(Xt[e]===void 0){let t=P.link({rel:"stylesheet",type:"text/css",href:e});document.head.append(t),Xt[e]=new Promise((n)=>{t.onload=n})}return Xt[e]}var Cn={xinjsUiColor:{p:["M976 0c4 0 8 2 11 5 4 4 7 7 11 11 0 0 21 21 21 21 3 3 5 7 5 11 0 0 0 928 0 928 0 4-2 8-5 11-4 4-7 7-11 11-5 5-9 9-14 14 0 0-7 7-7 7-3 3-7 5-11 5 0 0-928 0-928 0-4 0-8-2-11-5-4-4-7-7-11-11 0 0-21-21-21-21-3-3-5-7-5-11 0 0 0-928 0-928 0-4 2-8 5-11 4-4 7-7 11-11 5-5 9-9 14-14 0 0 7-7 7-7 3-3 7-5 11-5 0 0 928 0 928 0z","M182 131c13 5 8 2 16 9 0 0 102 102 102 102s91-91 91-91c9-9 9-9 11-11 8-7 13-8 23-9 0 0 4 0 4 0 13 5 8 2 16 9 12 12 12 32 0 44-2 2-2 2-11 11 0 0-91 91-91 91s102 102 102 102c12 12 12 32 0 44-12 12-32 12-44 0 0 0-102-102-102-102s-48 48-48 48c0 0-44 44-44 44-9 9-9 9-11 11-12 12-32 12-44 0-12-12-12-32 0-44 2-2 2-2 11-11 0 0 91-91 91-91s-102-102-102-102c-12-12-12-32 0-44 8-7 13-8 23-9 0 0 4 0 4 0z","M516 131c17 0 31 14 31 31 0 0 0 248 0 248 0 17-14 31-31 31-17 0-31-14-31-31 0 0 0-248 0-248 0-17 14-31 31-31z","M611 131c0 0 4 0 4 0 13 5 8 2 16 9 2 2 2 2 11 11 0 0 226 226 226 226 9 9 9 9 11 11 12 12 12 32 0 44-12 12-32 12-44 0 0 0-248-248-248-248-12-12-12-32 0-44 8-7 13-8 23-9z","M516 131c17 0 31 14 31 31 0 247 0 164 0 248 0 17-14 31-31 31-17 0-31-14-31-31 0 0 0-248 0-248 0-17 14-31 31-31z","M611 131c0 0 4 0 4 0 13 5 8 2 16 9 2 2 2 2 11 11 0 0 226 226 226 226 9 9 9 9 11 11 12 12 12 32 0 44-12 12-32 12-44 0 0 0-248-248-248-248-12-12-12-32 0-44 8-7 13-8 23-9z","M653 498c0 0 0 146 0 146 0 140-114 254-254 254-140 0-254-114-254-254 0 0 0-146 0-146s127 0 127 0c0 0 0 146 0 146 0 70 57 127 127 127 70 0 127-57 127-127 0 0 0-146 0-146s127 0 127 0z","M765 881c0 0 0-384 0-384s127 0 127 0c0 0 0 384 0 384s-127 0-127 0z","M720 995c-24-48-47-96-71-145-27 26-55 53-82 79 0-118 0-237 0-355 93 71 185 142 278 213-37 7-74 13-111 20 24 48 47 96 71 145-28 14-57 29-85 43 0 0 0 0 0 0z","M657 807c25 51 50 102 75 153 13-7 26-13 38-20-25-51-50-102-75-153 29-5 58-10 86-15-63-48-126-96-188-144 0 80 0 160 0 240 21-20 42-41 64-61 0 0 0 0 0 0z"],c:["rgb(64, 64, 64)","rgb(255, 28, 36)","rgb(8, 131, 87)","rgb(8, 131, 87)","rgb(140, 198, 63)","rgb(61, 168, 244)","rgb(255, 147, 29)","rgb(251, 237, 33)","rgb(255, 255, 255)","rgb(0, 0, 0)"]},xinjsUi:{p:["M976 0c4 0 8 2 11 5 4 4 7 7 11 11 0 0 21 21 21 21 3 3 5 7 5 11 0 0 0 928 0 928 0 4-2 8-5 11-4 4-7 7-11 11-5 5-9 9-14 14 0 0-7 7-7 7-3 3-7 5-11 5 0 0-928 0-928 0-4 0-8-2-11-5-4-4-7-7-11-11 0 0-21-21-21-21-3-3-5-7-5-11 0 0 0-928 0-928 0-4 2-8 5-11 4-4 7-7 11-11 5-5 9-9 14-14 0 0 7-7 7-7 3-3 7-5 11-5 0 0 928 0 928 0z","M182 131c13 5 8 2 16 9 0 0 102 102 102 102s91-91 91-91c9-9 9-9 11-11 8-7 13-8 23-9 0 0 4 0 4 0 13 5 8 2 16 9 12 12 12 32 0 44-2 2-2 2-11 11 0 0-91 91-91 91s102 102 102 102c12 12 12 32 0 44-12 12-32 12-44 0 0 0-102-102-102-102s-48 48-48 48c0 0-44 44-44 44-9 9-9 9-11 11-12 12-32 12-44 0-12-12-12-32 0-44 2-2 2-2 11-11 0 0 91-91 91-91s-102-102-102-102c-12-12-12-32 0-44 8-7 13-8 23-9 0 0 4 0 4 0z","M516 131c17 0 31 14 31 31 0 0 0 248 0 248 0 17-14 31-31 31-17 0-31-14-31-31 0 0 0-248 0-248 0-17 14-31 31-31z","M516 131c17 0 31 14 31 31 0 247 0 164 0 248 0 17-14 31-31 31-17 0-31-14-31-31 0 0 0-248 0-248 0-17 14-31 31-31z","M611 131c0 0 4 0 4 0 13 5 8 2 16 9 2 2 2 2 11 11 0 0 226 226 226 226 9 9 9 9 11 11 12 12 12 32 0 44-12 12-32 12-44 0 0 0-248-248-248-248-12-12-12-32 0-44 8-7 13-8 23-9z","M182 131c13 5 8 2 16 9 0 0 102 102 102 102s91-91 91-91c9-9 9-9 11-11 8-7 13-8 23-9 0 0 4 0 4 0 13 5 8 2 16 9 12 12 12 32 0 44-2 2-2 2-11 11 0 0-91 91-91 91s102 102 102 102c12 12 12 32 0 44-12 12-32 12-44 0 0 0-102-102-102-102s-48 48-48 48c0 0-44 44-44 44-9 9-9 9-11 11-12 12-32 12-44 0-12-12-12-32 0-44 2-2 2-2 11-11 0 0 91-91 91-91s-102-102-102-102c-12-12-12-32 0-44 8-7 13-8 23-9 0 0 4 0 4 0zM516 131c17 0 31 14 31 31 0 0 0 248 0 248 0 17-14 31-31 31-17 0-31-14-31-31 0 0 0-248 0-248 0-17 14-31 31-31zM611 131c0 0 4 0 4 0 13 5 8 2 16 9 2 2 2 2 11 11 0 0 226 226 226 226 9 9 9 9 11 11 12 12 12 32 0 44-12 12-32 12-44 0 0 0-248-248-248-248-12-12-12-32 0-44 8-7 13-8 23-9zM516 131c17 0 31 14 31 31 0 247 0 164 0 248 0 17-14 31-31 31-17 0-31-14-31-31 0 0 0-248 0-248 0-17 14-31 31-31zM611 131c0 0 4 0 4 0 13 5 8 2 16 9 2 2 2 2 11 11 0 0 226 226 226 226 9 9 9 9 11 11 12 12 12 32 0 44-12 12-32 12-44 0 0 0-248-248-248-248-12-12-12-32 0-44 8-7 13-8 23-9z","M653 498c0 0 0 146 0 146 0 140-114 254-254 254-140 0-254-114-254-254 0 0 0-146 0-146s127 0 127 0c0 0 0 146 0 146 0 70 57 127 127 127 70 0 127-57 127-127 0 0 0-146 0-146s127 0 127 0z","M765 881c0 0 0-384 0-384s127 0 127 0c0 0 0 384 0 384s-127 0-127 0z","M720 995c-24-48-47-96-71-145-27 26-55 53-82 79 0-118 0-237 0-355 93 71 185 142 278 213-37 7-74 13-111 20 24 48 47 96 71 145-28 14-57 29-85 43 0 0 0 0 0 0z","M657 807c25 51 50 102 75 153 13-7 26-13 38-20-25-51-50-102-75-153 29-5 58-10 86-15-63-48-126-96-188-144 0 80 0 160 0 240 21-20 42-41 64-61 0 0 0 0 0 0z"],c:["rgb(237, 242, 221)","rgb(8, 131, 87)","rgb(8, 131, 87)","rgb(8, 131, 87)","rgb(8, 131, 87)","rgb(8, 131, 87)","rgb(8, 131, 87)","rgb(8, 131, 87)","rgb(236, 243, 221)","rgb(8, 131, 87)"]},cmy:{p:["M302 442c-11-27-17-56-17-86 0-126 103-229 229-229s229 103 229 229c0 31-6 60-17 87-12-2-24-3-37-3-72 0-136 33-178 85-42-52-106-85-178-85-11 0-21 1-32 2z","M478 582c-80-13-146-67-175-140 10-1 21-2 32-2 72 0 136 33 178 85-14 17-26 37-34 58z","M512 813c-42 52-106 85-178 85-126 0-229-103-229-229 0-116 86-211 197-227 30 73 96 127 175 140-11 27-17 56-17 87 0 55 19 105 51 144z","M547 582c-10 1-21 2-32 2-13 0-25-1-37-3 9-21 20-40 34-58 14 18 26 37 35 58 0 0 0 0 0 0z","M478 582c-11 27-17 56-17 87 0 55 19 105 51 144 32-39 51-90 51-144 0-30-6-59-17-86-10 1-21 2-32 2-13 0-25-1-37-3z","M547 582c82-11 150-66 180-140-12-2-24-3-37-3-72 0-136 33-178 85 14 18 26 37 35 58 0 0 0 0 0 0z","M512 813c42 52 106 85 178 85 126 0 229-103 229-229 0-114-83-208-192-226-30 74-98 129-180 140 11 27 17 56 17 86 0 55-19 105-51 144 0 0 0 0 0 0z"],c:["rgb(86, 206, 255)","rgb(20, 248, 0)","rgb(249, 255, 44)","rgb(0, 0, 0)","rgb(252, 0, 0)","rgb(1, 6, 255)","rgb(241, 76, 255)"]},rgb:{p:["M302 442c-11-27-17-56-17-86 0-126 103-229 229-229s229 103 229 229c0 31-6 60-17 87-12-2-24-3-37-3-72 0-136 33-178 85-42-52-106-85-178-85-11 0-21 1-32 2z","M478 582c-80-13-146-67-175-140 10-1 21-2 32-2 72 0 136 33 178 85-14 17-26 37-34 58z","M512 813c-42 52-106 85-178 85-126 0-229-103-229-229 0-116 86-211 197-227 30 73 96 127 175 140-11 27-17 56-17 87 0 55 19 105 51 144z","M547 582c-10 1-21 2-32 2-13 0-25-1-37-3 9-21 20-40 34-58 14 18 26 37 35 58 0 0 0 0 0 0z","M478 582c-11 27-17 56-17 87 0 55 19 105 51 144 32-39 51-90 51-144 0-30-6-59-17-86-10 1-21 2-32 2-13 0-25-1-37-3z","M547 582c82-11 150-66 180-140-12-2-24-3-37-3-72 0-136 33-178 85 14 18 26 37 35 58 0 0 0 0 0 0z","M512 813c42 52 106 85 178 85 126 0 229-103 229-229 0-114-83-208-192-226-30 74-98 129-180 140 11 27 17 56 17 86 0 55-19 105-51 144 0 0 0 0 0 0z"],c:["rgb(248, 14, 0)","rgb(253, 0, 255)","rgb(44, 131, 255)","rgb(255, 255, 255)","rgb(0, 219, 255)","rgb(250, 255, 0)","rgb(0, 204, 3)"]},xinjsColor:{p:["M976 0c4 0 8 2 11 5 4 4 7 7 11 11 0 0 21 21 21 21 3 3 5 7 5 11 0 0 0 928 0 928 0 4-2 8-5 11-4 4-7 7-11 11-5 5-9 9-14 14 0 0-7 7-7 7-3 3-7 5-11 5 0 0-928 0-928 0-4 0-8-2-11-5-4-4-7-7-11-11 0 0-21-21-21-21-3-3-5-7-5-11 0 0 0-928 0-928 0-4 2-8 5-11 4-4 7-7 11-11 5-5 9-9 14-14 0 0 7-7 7-7 3-3 7-5 11-5 0 0 928 0 928 0z","M125 308c8 3 5 1 10 5 0 0 65 65 65 65s58-58 58-58c6-6 6-6 7-7 5-5 8-5 15-5 0 0 3 0 3 0 8 3 5 1 10 5 8 8 8 20 0 28-1 1-1 1-7 7 0 0-58 58-58 58s65 65 65 65c8 8 8 20 0 28-8 8-20 8-28 0 0 0-65-65-65-65s-30 30-30 30c0 0-28 28-28 28-6 6-6 6-7 7-8 8-20 8-28 0-8-8-8-20 0-28 1-1 1-1 7-7 0 0 58-58 58-58s-65-65-65-65c-8-8-8-20 0-28 5-5 8-5 15-5 0 0 3 0 3 0z","M337 307c11 0 20 9 20 20 0 0 0 157 0 157 0 11-9 20-20 20-11 0-20-9-20-20 0 0 0-157 0-157 0-11 9-20 20-20z","M337 307c11 0 20 9 20 20 0 156 0 104 0 157 0 11-9 20-20 20-11 0-20-9-20-20 0 0 0-157 0-157 0-11 9-20 20-20z","M660 464c11 0 20 9 20 20 0 0 0 216 0 216 0 11-9 20-20 20s-20-9-20-20c0 0 0-216 0-216 0-11 9-20 20-20z","M396 308c0 0 3 0 3 0 8 3 5 1 10 5 1 1 1 1 7 7 0 0 143 143 143 143 6 6 6 6 7 7 8 8 8 20 0 28-8 8-20 8-28 0 0 0-157-157-157-157-8-8-8-20 0-28 5-5 8-5 15-5z","M279 523c0 0 3 0 3 0 8 3 5 1 10 5 8 8 8 20 0 28-1 1-2 2-3 3 0 0-38 38-38 38s-1 1-1 1c0 0-21 21-21 21s-2 2-2 2c0 0 65 65 65 65 8 8 8 20 0 28-8 8-20 8-28 0-1-1-1-1-7-7 0 0-58-58-58-58s-26 26-26 26c-3 3-7 7-10 10 0 0-28 28-28 28-8 8-20 8-28 0-8-8-8-20 0-28 0 0 65-65 65-65s-58-58-58-58c-2-2-4-4-6-6 0 0-0-0-0-0-8-8-8-20 0-28 5-5 8-5 15-5 0 0 3 0 3 0 8 3 5 1 10 5 0 0 65 65 65 65 22-22 43-43 65-65 5-5 8-5 15-5z","M337 523c11 0 20 9 20 20 0 0 0 157 0 157 0 11-9 20-20 20-11 0-20-9-20-20 0 0 0-157 0-157 0-11 9-20 20-20z","M553 523c0 0 3 0 3 0 8 3 5 1 10 5 8 8 8 20 0 28-1 1-1 1-7 7-50 50-100 100-150 150-8 8-20 8-28 0-8-8-8-20 0-28 1-1 2-2 3-3 51-52 103-103 154-154 5-5 8-5 15-5z","M337 523c11 0 20 9 20 20 0 0 0 157 0 157 0 11-9 20-20 20-11 0-20-9-20-20 0 0 0-157 0-157 0-11 9-20 20-20z","M553 523c0 0 3 0 3 0 8 3 5 1 10 5 8 8 8 20 0 28-1 1-1 1-7 7-50 50-100 100-150 150-8 8-20 8-28 0-8-8-8-20 0-28 1-1 2-2 3-3 51-52 103-103 154-154 5-5 8-5 15-5z","M689 307c11 0 20 9 20 20 0 0 0 137 0 137 0 5-2 10-6 14 0 0-20 20-20 20-4 4-9 6-14 6 0 0-59 0-59 0-11 0-20-9-20-20 0-11 9-20 20-20 0 0 51 0 51 0s8-8 8-8c0 0 0-129 0-129 0-11 9-20 20-20z","M905 464c11 0 20 9 20 20 0 11-9 20-20 20 0 0-157 0-157 0-11 0-20-9-20-20 0-11 9-20 20-20 0 0 157 0 157 0z","M905 533c11 0 20 9 20 20 0 11-9 20-20 20 0 0-157 0-157 0-11 0-20-9-20-20 0-11 9-20 20-20 0 0 157 0 157 0z","M905 395c11 0 20 9 20 20 0 11-9 20-20 20 0 0-157 0-157 0-11 0-20-9-20-20 0-11 9-20 20-20 0 0 157 0 157 0z","M906 308c0 0 3 0 3 0 8 3 5 1 10 5 8 8 8 20 0 28 0 0-20 20-20 20-4 4-9 6-14 6 0 0-137 0-137 0-11 0-20-9-20-20s9-20 20-20c0 0 129 0 129 0s14-14 14-14c5-5 8-5 15-5z","M905 601c11 0 20 9 20 20 0 0 0 59 0 59 0 5-2 10-6 14 0 0-20 20-20 20-4 4-9 6-14 6 0 0-137 0-137 0-11 0-20-9-20-20 0 0 0-78 0-78 0-11 9-20 20-20 0 0 157 0 157 0zM885 640c0 0-118 0-118 0s0 39 0 39c0 0 109 0 109 0s8-8 8-8c0 0 0-31 0-31z"],c:["rgb(237, 243, 221)","rgb(8, 131, 88)","rgb(8, 131, 88)","rgb(8, 131, 88)","rgb(155, 205, 188)","rgb(8, 131, 88)","rgb(155, 205, 188)","rgb(8, 131, 88)","rgb(8, 131, 88)","rgb(155, 205, 188)","rgb(155, 205, 188)","rgb(8, 131, 88)","rgb(8, 131, 88)","rgb(155, 205, 188)","rgb(8, 131, 88)","rgb(8, 131, 88)","rgb(155, 205, 188)"]},xinColor:{p:["M976 0c4 0 8 2 11 5 4 4 7 7 11 11l21 21c3 3 5 7 5 11v928c0 4-2 8-5 11-4 4-7 7-11 11-5 5-9 9-14 14l-7 7c-3 3-7 5-11 5h-928c-4 0-8-2-11-5-4-4-7-7-11-11l-21-21c-3-3-5-7-5-11v-928c0-4 2-8 5-11 4-4 7-7 11-11 5-5 9-9 14-14l7-7c3-3 7-5 11-5h928z","M589 862c13 13 34 13 48 0l104-104 141-141 17-17 7-7c13-13 13-34-0-48-13-13-34-13-48-0l-269 269c-13 13-13 34 0 48zM600 851c-7-7-7-18-0-25l0-0 269-269c7-7 18-7 25 0 7 7 7 18 0 25l-0 0-11 11-19 19-162 162-53 53-24 24c-7 7-18 7-25-0z","M512 871c19 0 34-15 34-34v-270c0-19-15-34-34-34-19 0-34 15-34 34v270c0 19 15 34 34 34zM512 855c-10 0-17-8-18-17l-0-1v-270c0-10 8-18 18-18 10 0 17 8 18 17l0 1 0 37-0 121-0 111c0 10-8 18-18 18z","M436 862c13-13 13-34 0-48l-112-112 112-112c13-13 13-34 0-48-13-13-34-13-48 0l-112 112-110-110c-13-13-34-13-48 0-13 13-13 34-1 47l1 1 110 110-110 110c-13 13-13 34 0 48 13 13 34 13 48 0l110-110 112 112c13 13 34 13 48 0zM425 851c-7 7-18 7-25 0l-0-0-123-123-121 121c-7 7-18 7-25-0-7-7-7-18-0-25l0-0 121-121-121-121c-7-7-7-18 0-25 7-7 18-7 25-0l0 0 121 121 123-123c7-7 18-7 25 0 7 7 7 18 0 25l-0 0-123 123 123 123c7 7 7 18 0 25l-0 0z","M589 170c13-13 34-13 48-0 190 190 205 205 269 269 13 13 13 34-0 48-13 13-34 13-48 0l-269-269c-13-13-13-34 0-48z","M512 158c19 0 34 15 34 34 0 269 0 179 0 270 0 19-15 34-34 34-19 0-34-15-34-34v-270c0-19 15-34 34-34z","M388 168c13-13 34-13 48 0 13 13 13 34 0 48l-112 112 112 112c13 13 13 34 0 48-13 13-34 13-48 0l-112-112-110 110c-13 13-34 13-48-0-13-13-13-34-1-47l1-1 110-110-110-110c-13-13-13-34 0-48 13-13 34-13 48-0l110 110 112-112z"],c:["rgb(9, 131, 88)","rgb(237, 243, 221)","rgb(237, 243, 221)","rgb(237, 243, 221)","rgb(237, 243, 221)","rgb(237, 243, 221)","rgb(237, 243, 221)"]},sortDescending:"M723 469c-256 0-179 0-435 0-24 0-43 19-43 43s19 43 43 43c256 0 179 0 435 0 24 0 43-19 43-43s-19-43-43-43zM603 725c-256 0 61 0-195 0-24 0-43 19-43 43s19 43 43 43c256 0-61 0 195 0 24 0 43-19 43-43s-19-43-43-43zM856 213c-256 0-432 0-688 0-24 0-43 19-43 43s19 43 43 43c256 0 432 0 688 0 24 0 43-19 43-43s-19-43-43-43z",sortAscending:"M301 555c256 0 179 0 435 0 24 0 43-19 43-43s-19-43-43-43c-256 0-179 0-435 0-24 0-43 19-43 43s19 43 43 43zM421 299c256 0-61 0 195 0 24 0 43-19 43-43s-19-43-43-43c-256 0 61 0-195 0-24 0-43 19-43 43s19 43 43 43zM168 811c256 0 432 0 688 0 24 0 43-19 43-43s-19-43-43-43c-256 0-432 0-688 0-24 0-43 19-43 43s19 43 43 43z",sidebar:"M213 85c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-597c0-35-14-67-38-90s-55-38-90-38zM427 853v-683h384c12 0 22 5 30 13s13 18 13 30v597c0 12-5 22-13 30s-18 13-30 13zM341 171v683h-128c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13z",calendar:"M299 85v43h-85c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-597c0-35-14-67-38-90s-55-38-90-38h-85v-43c0-24-19-43-43-43s-43 19-43 43v43h-256v-43c0-24-19-43-43-43s-43 19-43 43zM853 384h-683v-128c0-12 5-22 13-30s18-13 30-13h85v43c0 24 19 43 43 43s43-19 43-43v-43h256v43c0 24 19 43 43 43s43-19 43-43v-43h85c12 0 22 5 30 13s13 18 13 30zM171 469h683v384c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30z",editDoc:"M469 128h-299c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-299c0-24-19-43-43-43s-43 19-43 43v299c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h299c24 0 43-19 43-43s-19-43-43-43zM759 77l-405 405c-5 5-9 12-11 20l-43 171c-2 6-2 14 0 21 6 23 29 37 52 31l171-43c7-2 14-6 20-11l405-405c26-26 39-60 39-94s-13-68-39-94-60-39-94-39-68 13-94 39zM819 137c9-9 22-14 34-14s24 5 34 14 14 22 14 34-5 24-14 34l-397 397-90 23 23-90z",edit:"M695 98l-576 576c-5 5-9 11-11 19l-64 235c-2 7-2 15 0 22 6 23 30 36 52 30l235-64c7-2 13-6 19-11l576-576c32-32 48-74 48-115s-16-84-48-115-74-48-115-48-84 16-115 48zM755 158c15-15 35-23 55-23s40 8 55 23 23 35 23 55-8 40-23 55l-568 568-152 41 41-152z",web:"M723 469c-9-115-47-228-114-329 67 17 127 53 174 100 60 60 100 140 110 229zM609 884c63-95 104-207 114-329h171c-10 89-50 169-110 229-47 47-107 83-174 100zM301 555c9 115 47 228 114 329-67-17-127-53-174-100-60-60-100-140-110-229zM415 140c-63 95-104 207-114 329h-171c10-89 50-169 110-229 48-47 107-83 174-100zM512 43c0 0 0 0 0 0-130 0-247 53-332 137-85 85-137 202-137 332s53 247 137 332c85 85 202 137 332 137 0 0 0 0 0 0 130-0 247-53 332-137 85-85 137-202 137-332s-53-247-137-332c-85-85-202-137-332-137zM638 555c-11 119-56 229-126 318-74-95-115-206-126-318zM512 151c74 95 115 206 126 318h-251c11-119 56-229 126-318z",info:"M981 512c0-130-53-247-137-332s-202-137-332-137-247 53-332 137-137 202-137 332 53 247 137 332 202 137 332 137 247-53 332-137 137-202 137-332zM896 512c0 106-43 202-112 272s-165 112-272 112-202-43-272-112-112-165-112-272 43-202 112-272 165-112 272-112 202 43 272 112 112 165 112 272zM555 683v-171c0-24-19-43-43-43s-43 19-43 43v171c0 24 19 43 43 43s43-19 43-43zM512 384c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43z",loading:"M469 85v171c0 24 19 43 43 43s43-19 43-43v-171c0-24-19-43-43-43s-43 19-43 43zM469 768v171c0 24 19 43 43 43s43-19 43-43v-171c0-24-19-43-43-43s-43 19-43 43zM180 241l121 121c17 17 44 17 60 0s17-44 0-60l-121-121c-17-17-44-17-60 0s-17 44 0 60zM663 723l121 121c17 17 44 17 60 0s17-44 0-60l-121-121c-17-17-44-17-60 0s-17 44 0 60zM85 555h171c24 0 43-19 43-43s-19-43-43-43h-171c-24 0-43 19-43 43s19 43 43 43zM768 555h171c24 0 43-19 43-43s-19-43-43-43h-171c-24 0-43 19-43 43s19 43 43 43zM241 844l121-121c17-17 17-44 0-60s-44-17-60 0l-121 121c-17 17-17 44 0 60s44 17 60 0zM723 361l121-121c17-17 17-44 0-60s-44-17-60 0l-121 121c-17 17-17 44 0 60s44 17 60 0z",mail:"M128 338l360 252c15 10 34 10 49 0l360-252v430c0 12-5 22-13 30s-18 13-30 13h-683c-12 0-22-5-30-13s-13-18-13-30zM43 255c0 0 0 1 0 1v511c0 35 15 67 38 90s55 38 90 38h683c35 0 67-15 90-38s38-55 38-90v-511c0-0 0-1 0-1-0-35-15-67-38-90-23-23-55-38-90-38h-683c-35 0-67 15-90 38-23 23-37 55-38 90zM891 237l-379 266-379-266c2-4 5-8 8-11 8-8 19-13 30-13h683c12 0 22 5 30 13 3 3 6 7 8 11z",resize:"M175 102l271 271c20 20 20 52 0 72s-52 20-72 0l-271-271v184c0 28-23 51-51 51s-51-23-51-51v-307c0-7 1-14 4-20s6-12 11-17c0-0 0-0 0-0 5-5 10-8 17-11 6-3 13-4 20-4h307c28 0 51 23 51 51s-23 51-51 51h-184zM849 922l-271-271c-20-20-20-52 0-72s52-20 72 0l271 271v-184c0-28 23-51 51-51s51 23 51 51v307c0 28-23 51-51 51h-307c-28 0-51-23-51-51s23-51 51-51h184z",menu:"M128 555h768c24 0 43-19 43-43s-19-43-43-43h-768c-24 0-43 19-43 43s19 43 43 43zM128 299h768c24 0 43-19 43-43s-19-43-43-43h-768c-24 0-43 19-43 43s19 43 43 43zM128 811h768c24 0 43-19 43-43s-19-43-43-43h-768c-24 0-43 19-43 43s19 43 43 43z",message:"M939 640v-427c0-35-14-67-38-90s-55-38-90-38h-597c-35 0-67 14-90 38s-38 55-38 90v683c0 11 4 22 13 30 17 17 44 17 60 0l158-158h494c35 0 67-14 90-38s38-55 38-90zM853 640c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22 5-30 13l-98 98v-580c0-12 5-22 13-30s18-13 30-13h597c12 0 22 5 30 13s13 18 13 30z",blog:{p:["M848 517c0-23 19-42 42-43l1-0c23 0 42 19 43 42l0 1v128c0 35-14 67-37 90l-1 1c-23 23-55 37-89 38l-1 0h-494l-158 158c-17 17-44 17-60 0-8-8-12-19-12-29l-0-1v-683c0-35 14-67 38-90 23-23 55-37 89-38l1-0h299c24 0 43 19 43 43 0 23-19 42-42 43l-1 0h-299c-12 0-22 5-30 12l-0 0c-8 8-12 18-12 29l-0 1v580l98-98c8-8 18-12 29-12l1-0h512c12 0 22-5 30-13 8-8 12-18 12-29l0-1v-128zM797 39l-352 352c-5 5-9 12-11 20l-43 171c-2 6-2 14 0 21 6 23 29 37 52 31l171-43c7-2 14-6 20-11l352-352c26-26 39-60 39-94s-13-68-39-94c-26-26-60-39-94-39s-68 13-94 39zM857 99c9-9 22-14 34-14s24 5 34 14c9 9 14 22 14 34s-5 24-14 34l-344 344-90 23 23-90 344-344z","M292 251h163c24 0 43 19 43 43s-19 43-43 43h-163c-24 0-43-19-43-43s19-43 43-43z","M292 407h67c24 0 43 19 43 43s-19 43-43 43h-67c-24 0-43-19-43-43s19-43 43-43z"]},phone:"M981 722c1-30-10-60-29-83-20-24-48-41-82-46-34-4-72-13-110-28-18-7-38-9-57-7-28 3-56 15-78 36l-31 31c-76-48-143-114-196-196l31-31c14-14 24-31 30-49 9-27 9-57-2-86-12-32-22-70-27-111-4-30-19-57-41-77-23-21-54-33-86-33h-128c-4 0-8 0-12 1-35 3-66 20-87 45s-32 58-29 94c13 131 58 266 137 388 64 103 156 197 269 269 110 72 243 122 388 138 4 0 8 1 12 1 35-0 67-15 90-38s37-55 37-90zM896 722v128c0 12-5 23-12 30s-18 13-30 13c-134-14-254-59-353-124-104-66-186-151-243-243-72-112-113-234-125-351-1-11 3-22 10-31s17-14 29-15l132-0c12-0 22 4 29 11 7 7 12 16 14 26 6 46 17 90 32 129 3 9 3 19 0 28-2 6-6 12-10 17l-54 54c-14 14-16 35-7 51 68 119 164 211 272 272 17 9 38 6 51-7l54-54c7-7 16-11 26-12 6-1 13 0 20 3 44 16 88 27 129 32 10 1 20 7 26 15 6 8 10 18 10 29z",pieChart:"M866 661c-41 98-118 169-209 206s-196 39-294-2-169-118-206-209-39-196 2-294c40-94 113-165 200-202 22-9 31-35 22-56s-35-31-56-22c-106 46-196 132-245 247-50 119-48 248-3 359s133 205 252 256 248 48 359 3 205-133 256-252c9-22-1-47-23-56s-47 1-56 23zM894 469h-339v-339c89 10 169 50 229 110s100 140 110 229zM981 512c0-130-53-247-137-332s-202-137-332-137c-24 0-43 19-43 43v427c0 24 19 43 43 43h427c24 0 43-19 43-43z",search:"M684 677c-1 1-3 2-4 4s-3 3-4 4c-54 52-127 84-207 84-82 0-157-33-211-87s-87-129-87-211 33-157 87-211 129-87 211-87 157 33 211 87 87 129 87 211c0 80-32 153-84 207zM926 866l-157-157c53-66 84-149 84-240 0-106-43-202-112-272s-166-112-272-112-202 43-272 112-112 166-112 272 43 202 112 272 166 112 272 112c91 0 174-31 240-84l157 157c17 17 44 17 60 0s17-44 0-60z",send:"M980 97c2-6 2-13 1-20-1-5-3-10-6-14-3-4-6-8-10-11-5-4-11-6-16-8s-12-1-18-0c-2 0-4 1-5 1l-1 0-852 298c-11 4-20 12-25 23-10 22 0 47 22 56l369 164 164 369c5 10 13 19 25 23 22 8 47-4 54-26l298-852c0-1 1-2 1-3zM460 504l-259-115 575-201zM837 248l-201 575-115-259z",server:"M171 43c-35 0-67 14-90 38s-38 55-38 90v171c0 35 14 67 38 90s55 38 90 38h683c35 0 67-14 90-38s38-55 38-90v-171c0-35-14-67-38-90s-55-38-90-38zM171 128h683c12 0 22 5 30 13s13 18 13 30v171c0 12-5 22-13 30s-18 13-30 13h-683c-12 0-22-5-30-13s-13-18-13-30v-171c0-12 5-22 13-30s18-13 30-13zM171 555c-35 0-67 14-90 38s-38 55-38 90v171c0 35 14 67 38 90s55 38 90 38h683c35 0 67-14 90-38s38-55 38-90v-171c0-35-14-67-38-90s-55-38-90-38zM171 640h683c12 0 22 5 30 13s13 18 13 30v171c0 12-5 22-13 30s-18 13-30 13h-683c-12 0-22-5-30-13s-13-18-13-30v-171c0-12 5-22 13-30s18-13 30-13zM256 299c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43zM256 811c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43z",graphUp:"M725 299h153l-302 302-183-183c-17-17-44-17-60 0l-320 320c-17 17-17 44 0 60s44 17 60 0l290-290 183 183c17 17 44 17 60 0l333-333v153c0 24 19 43 43 43s43-19 43-43v-256c0-6-1-11-3-16s-5-10-9-14c-0-0-0-0-0-0-4-4-9-7-14-9-5-2-11-3-16-3h-256c-24 0-43 19-43 43s19 43 43 43z",copy:"M469 341c-35 0-67 14-90 38s-38 55-38 90v384c0 35 14 67 38 90s55 38 90 38h384c35 0 67-14 90-38s38-55 38-90v-384c0-35-14-67-38-90s-55-38-90-38zM469 427h384c12 0 22 5 30 13s13 18 13 30v384c0 12-5 22-13 30s-18 13-30 13h-384c-12 0-22-5-30-13s-13-18-13-30v-384c0-12 5-22 13-30s18-13 30-13zM213 597h-43c-12 0-22-5-30-13s-13-18-13-30v-384c0-12 5-22 13-30s18-13 30-13h384c12 0 22 5 30 13s13 18 13 30v43c0 24 19 43 43 43s43-19 43-43v-43c0-35-14-67-38-90s-55-38-90-38h-384c-35 0-67 14-90 38s-38 55-38 90v384c0 35 14 67 38 90s55 38 90 38h43c24 0 43-19 43-43s-19-43-43-43z",alignCenter:"M128 128h768v86h-768v-86zM298 298h428v86h-428v-86zM128 554v-84h768v84h-768zM128 896v-86h768v86h-768zM298 640h428v86h-428v-86z",alignLeft:"M128 128h768v86h-768v-86zM128 896v-86h768v86h-768zM128 554v-84h768v84h-768zM640 298v86h-512v-86h512zM640 640v86h-512v-86h512z",alignRight:"M128 128h768v86h-768v-86zM384 384v-86h512v86h-512zM128 554v-84h768v84h-768zM384 726v-86h512v86h-512zM128 896v-86h768v86h-768z",fontBold:"M576 662q28 0 46-19t18-45-18-45-46-19h-150v128h150zM426 278v128h128q26 0 45-19t19-45-19-45-45-19h-128zM666 460q92 42 92 146 0 68-45 115t-113 47h-302v-598h268q72 0 121 50t49 122-70 118z",blockOutdent:"M470 554v-84h426v84h-426zM470 384v-86h426v86h-426zM128 128h768v86h-768v-86zM128 896v-86h768v86h-768zM128 512l170-170v340zM470 726v-86h426v86h-426z",blockIndent:"M470 554v-84h426v84h-426zM470 384v-86h426v86h-426zM128 128h768v86h-768v-86zM470 726v-86h426v86h-426zM128 342l170 170-170 170v-340zM128 896v-86h768v86h-768z",fontItalic:"M426 170h342v128h-120l-144 342h94v128h-342v-128h120l144-342h-94v-128z",listBullet:"M298 214h598v84h-598v-84zM298 554v-84h598v84h-598zM298 810v-84h598v84h-598zM170 704q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zM170 192q26 0 45 18t19 46-19 46-45 18-45-18-19-46 19-46 45-18zM170 448q26 0 45 18t19 46-19 46-45 18-45-18-19-46 19-46 45-18z",listNumber:"M298 554v-84h598v84h-598zM298 810v-84h598v84h-598zM298 214h598v84h-598v-84zM86 470v-44h128v40l-78 88h78v44h-128v-40l76-88h-76zM128 342v-128h-42v-44h84v172h-42zM86 726v-44h128v172h-128v-44h84v-20h-42v-44h42v-20h-84z",fontUnderline:"M214 810h596v86h-596v-86zM512 726q-106 0-181-75t-75-181v-342h106v342q0 62 44 105t106 43 106-43 44-105v-342h106v342q0 106-75 181t-181 75z",airplay:"M213 683h-43c-12 0-22-5-30-13s-13-18-13-30v-427c0-12 5-22 13-30s18-13 30-13h683c12 0 22 5 30 13s13 18 13 30v427c0 12-5 22-13 30s-18 13-30 13h-43c-24 0-43 19-43 43s19 43 43 43h43c35 0 67-14 90-38s38-55 38-90v-427c0-35-14-67-38-90s-55-38-90-38h-683c-35 0-67 14-90 38s-38 55-38 90v427c0 35 14 67 38 90s55 38 90 38h43c24 0 43-19 43-43s-19-43-43-43zM545 613c-1-2-3-4-5-5-18-15-45-13-60 5l-213 256c-6 7-10 17-10 27 0 24 19 43 43 43h427c10 0 19-3 27-10 18-15 21-42 5-60zM512 707l122 147h-244z",bell:"M725 341c0 171 40 278 79 341h-585c39-63 79-170 79-341 0-59 24-112 62-151s92-62 151-62 112 24 151 62 62 92 62 151zM811 341c0-82-33-157-87-211s-129-87-211-87-157 33-211 87-87 129-87 211c0 261-102 343-109 349-19 13-24 39-11 59 8 12 22 19 35 19h768c24 0 43-19 43-43 0-14-7-27-18-35-8-6-110-87-110-349zM549 875c-6 10-15 17-26 20s-22 2-32-4c-7-4-12-9-15-15-12-20-38-28-58-16s-28 38-16 58c11 19 27 35 47 47 31 18 65 21 97 13s60-29 78-59c12-20 5-47-15-58s-47-5-58 15z",bellOff:"M549 875c-6 10-15 17-26 20s-22 2-32-4c-7-4-12-9-15-15-12-20-38-28-58-16s-28 38-16 58c11 19 27 35 47 47 31 18 65 21 97 13s60-29 78-59c12-20 5-47-15-58s-47-5-58 15zM811 340c-0-82-33-156-87-210-54-54-129-88-211-88-62-0-119 19-166 50-19 13-25 40-11 59s40 25 59 11c33-22 73-35 116-36 62 0 115 24 153 63 38 39 62 92 62 150-2 71 7 148 28 225 6 23 30 36 52 30s36-30 30-52c-19-69-27-139-25-201 0-0 0-0 0-1 0-0 0-0 0-0zM298 359l324 324h-403c37-61 76-163 79-324zM13 73l207 207c-5 21-7 42-6 62 0 261-102 343-109 348-19 13-24 39-11 59 8 12 22 19 35 19h580l243 243c17 17 44 17 60 0s17-44 0-60l-939-939c-17-17-44-17-60 0s-17 44 0 60z",bookmark:"M786 931c7 5 15 8 25 8 24 0 43-19 43-43v-683c0-35-14-67-38-90s-55-38-90-38h-427c-35 0-67 14-90 38s-38 55-38 90v683c-0 8 3 17 8 25 14 19 40 24 60 10l274-196zM768 813l-231-165c-15-11-35-10-50 0l-231 165v-600c0-12 5-22 13-30s18-13 30-13h427c12 0 22 5 30 13s13 18 13 30z",camera:"M1024 811v-469c0-35-14-67-38-90s-55-38-90-38h-148l-73-109c-8-12-21-19-35-19h-256c-14 0-27 7-35 19l-73 109h-148c-35 0-67 14-90 38s-38 55-38 90v469c0 35 14 67 38 90s55 38 90 38h768c35 0 67-14 90-38s38-55 38-90zM939 811c0 12-5 22-13 30s-18 13-30 13h-768c-12 0-22-5-30-13s-13-18-13-30v-469c0-12 5-22 13-30s18-13 30-13h171c15 0 28-7 35-19l73-109h210l73 109c8 12 22 19 35 19h171c12 0 22 5 30 13s13 18 13 30zM725 555c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM640 555c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90z",check:"M823 226l-439 439-183-183c-17-17-44-17-60 0s-17 44 0 60l213 213c17 17 44 17 60 0l469-469c17-17 17-44 0-60s-44-17-60 0z",chevronDown:"M226 414l256 256c17 17 44 17 60 0l256-256c17-17 17-44 0-60s-44-17-60 0l-226 226-226-226c-17-17-44-17-60 0s-17 44 0 60z",chevronLeft:"M670 738l-226-226 226-226c17-17 17-44 0-60s-44-17-60 0l-256 256c-17 17-17 44 0 60l256 256c17 17 44 17 60 0s17-44 0-60z",chevronRight:"M414 798l256-256c17-17 17-44 0-60l-256-256c-17-17-44-17-60 0s-17 44 0 60l226 226-226 226c-17 17-17 44 0 60s44 17 60 0z",chevronUp:"M798 610l-256-256c-17-17-44-17-60 0l-256 256c-17 17-17 44 0 60s44 17 60 0l226-226 226 226c17 17 44 17 60 0s17-44 0-60z",code:"M713 798l256-256c17-17 17-44 0-60l-256-256c-17-17-44-17-60 0s-17 44 0 60l226 226-226 226c-17 17-17 44 0 60s44 17 60 0zM311 226l-256 256c-17 17-17 44 0 60l256 256c17 17 44 17 60 0s17-44 0-60l-226-226 226-226c17-17 17-44 0-60s-44-17-60 0z",undo:"M896 853v-299c0-59-24-112-62-151s-92-62-151-62h-409l141-141c17-17 17-44 0-60s-44-17-60 0l-213 213c-4 4-7 9-9 14s-3 11-3 16 1 11 3 16c2 5 5 10 9 14l213 213c17 17 44 17 60 0s17-44 0-60l-141-141h409c35 0 67 14 90 38s38 55 38 90v299c0 24 19 43 43 43s43-19 43-43z",redo:"M213 853v-299c0-35 14-67 38-90s55-38 90-38h409l-141 141c-17 17-17 44 0 60s44 17 60 0l213-213c4-4 7-9 9-14 4-10 4-22 0-33-2-5-5-10-9-14l-213-213c-17-17-44-17-60 0s-17 44 0 60l141 141h-409c-59 0-112 24-151 62s-62 92-62 151v299c0 24 19 43 43 43s43-19 43-43z",crop:"M302 302l381-3c11 0 22 5 30 13s13 18 13 30v384h-384c-12 0-22-5-30-13s-13-18-13-30zM43 304l174-1-3 380c0 36 14 68 38 91s55 38 90 38h384v171c0 24 19 43 43 43s43-19 43-43v-171h171c24 0 43-19 43-43s-19-43-43-43h-171v-384c0-35-14-67-38-90s-55-38-91-38l-380 3 1-174c0-24-19-43-42-43s-43 19-43 42l-2 175-175 2c-24 0-42 19-42 43s19 42 43 42z",database:"M171 213c0 0 0-4 9-12 10-10 29-21 56-31 64-25 163-42 277-42s213 17 277 42c27 11 45 22 56 31 9 8 9 12 9 12 0 0-0 4-9 12-10 10-29 21-56 31-64 25-163 42-277 42s-213-17-277-42c-27-11-45-22-56-31-9-8-9-12-9-12zM853 620v191c-2 4-4 8-9 12-10 10-29 21-56 31-64 25-163 42-276 42s-213-17-276-42c-27-10-45-21-56-31-5-5-8-8-8-10l-0-193c11 5 22 10 33 15 77 30 187 48 307 48s231-18 307-48c12-5 23-10 34-15zM853 321v190c0 0 0 0 0 1-2 4-4 8-9 12-10 10-29 21-56 31-64 25-163 42-276 42s-213-17-276-42c-27-10-45-21-56-31-5-5-8-8-8-10-0-2-0-3-0-5l-0-188c11 5 22 10 34 15 77 30 187 48 308 48s231-18 308-48c12-5 23-10 34-15zM85 213v597c0 2 0 5 0 7 2 28 18 51 37 68 21 19 50 35 82 48 77 30 187 48 307 48s231-18 307-48c32-13 61-28 82-48 18-17 34-40 37-68 0-2 0-5 0-7v-597c0-2-0-5-0-7-2-28-18-51-36-68-21-20-50-35-82-48-77-30-187-48-308-48s-231 18-308 48c-32 13-61 28-82 48-18 17-34 40-36 68-0 2-0 5-0 7z",download:"M853 640v171c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-171c0-24-19-43-43-43s-43 19-43 43v171c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-171c0-24-19-43-43-43s-43 19-43 43zM555 537v-409c0-24-19-43-43-43s-43 19-43 43v409l-141-141c-17-17-44-17-60 0s-17 44 0 60l213 213c4 4 9 7 14 9s11 3 16 3c11 0 22-4 30-13l213-213c17-17 17-44 0-60s-44-17-60 0z",downloadCloud:"M469 512v281l-98-98c-17-17-44-17-60 0s-17 44 0 60l171 171c4 4 9 7 14 9 10 4 22 4 33 0 5-2 10-5 14-9l171-171c17-17 17-44 0-60s-44-17-60 0l-98 98v-281c0-24-19-43-43-43s-43 19-43 43zM915 807c58-41 94-101 105-165s-2-133-43-191c-35-50-85-84-140-99-22-6-46-10-69-10h-22c-31-88-91-158-167-203-85-50-188-68-291-41s-185 92-235 176-68 188-41 291c16 62 46 116 85 159 16 17 43 19 60 3s19-43 3-60c-30-33-53-75-65-123-21-80-7-160 32-226s103-117 183-137 160-7 226 32 117 103 137 183c5 19 22 32 41 32h54c16 0 31 2 47 6 37 10 70 33 93 66 27 39 36 84 29 127s-31 83-70 110c-19 14-24 40-10 59s40 24 59 10z",externalLink:"M725 555v256c0 12-5 22-13 30s-18 13-30 13h-469c-12 0-22-5-30-13s-13-18-13-30v-469c0-12 5-22 13-30s18-13 30-13h256c24 0 43-19 43-43s-19-43-43-43h-256c-35 0-67 14-90 38s-38 55-38 90v469c0 35 14 67 38 90s55 38 90 38h469c35 0 67-14 90-38s38-55 38-90v-256c0-24-19-43-43-43s-43 19-43 43zM457 627l397-397v153c0 24 19 43 43 43s43-19 43-43v-256c0-6-1-11-3-16s-5-10-9-14c-0-0-0-0-0-0-4-4-9-7-14-9-5-2-11-3-16-3h-256c-24 0-43 19-43 43s19 43 43 43h153l-397 397c-17 17-17 44 0 60s44 17 60 0z",eye:"M5 493c-6 12-6 26 0 38 0 0 17 34 48 79 19 28 44 61 75 95 38 42 86 85 142 119 68 42 150 72 243 72s175-30 243-72c56-35 103-78 142-119 31-34 56-67 75-95 31-45 48-79 48-79 6-12 6-26 0-38 0 0-17-34-48-79-19-28-44-61-75-95-38-42-86-85-142-119-68-42-150-72-243-72s-175 30-243 72c-56 35-103 78-142 119-31 34-56 67-75 95-31 45-48 79-48 79zM91 512c7-12 17-29 31-49 17-25 40-55 68-85 34-38 76-75 123-104 58-36 124-59 198-59s141 24 198 59c48 30 89 67 123 104 27 30 50 60 68 85 14 20 24 37 31 49-7 12-17 29-31 49-17 25-40 55-68 85-34 38-76 75-123 104-58 36-124 59-198 59s-141-24-198-59c-48-30-89-67-123-104-27-30-50-60-68-85-14-20-24-37-31-49zM683 512c0-47-19-90-50-121s-74-50-121-50-90 19-121 50-50 74-50 121 19 90 50 121 74 50 121 50 90-19 121-50 50-74 50-121zM597 512c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60 10-45 25-60 37-25 60-25 45 10 60 25 25 37 25 60z",eyeOff:"M432 222c28-6 55-9 79-9 75 0 141 24 199 59 48 30 89 67 123 104 27 30 50 60 68 85 14 20 24 37 31 49-23 41-49 78-76 108-15 18-13 45 5 60s45 13 60-5c35-41 69-90 97-144 6-12 7-26 1-39 0 0-17-34-48-79-19-28-44-61-75-95-38-42-86-85-142-119-68-42-150-72-243-72-31-0-66 3-100 11-23 5-37 28-32 51s28 37 51 32zM428 488l108 108c-8 3-16 4-24 4-22 1-44-7-61-23s-26-38-27-59c-0-10 1-20 4-30zM255 316l109 109c-19 29-27 63-26 97 2 44 20 87 54 119s79 47 122 46c30-1 59-10 85-26l99 99c-59 34-124 51-187 52-74 0-140-24-198-59-48-30-89-67-123-104-27-30-50-60-68-85-14-20-24-37-31-49 45-78 101-144 164-197zM13 73l182 182c-74 63-139 143-190 237-6 12-7 26-1 39 0 0 17 34 48 79 19 28 44 61 75 95 38 42 86 85 142 119 68 42 150 72 244 72 85-1 171-26 248-75l191 191c17 17 44 17 60 0s17-44 0-60l-379-379c-0-0-0-0-0-0l-180-180c-0-0-1-1-1-1l-379-379c-17-17-44-17-60 0s-17 44 0 60z",fastForward:"M597 723v-423l272 211zM128 723v-423l272 211zM112 844l384-299c11-8 16-21 16-33v298c0 24 19 43 43 43 10 0 19-3 26-9l384-299c19-14 22-41 7-60-2-3-5-6-7-7l-384-299c-19-14-45-11-60 7-6 8-9 17-9 26v298c-0-9-3-18-9-26-2-3-5-6-7-7l-384-299c-19-14-45-11-60 7-6 8-9 17-9 26v597c0 24 19 43 43 43 10 0 19-3 26-9z",file:"M750 341h-153v-153zM883 354l-299-299c-4-4-9-7-14-9s-11-3-16-3h-299c-35 0-67 14-90 38s-38 55-38 90v683c0 35 14 67 38 90s55 38 90 38h512c35 0 67-14 90-38s38-55 38-90v-469c0-12-5-22-13-30zM512 128v256c0 24 19 43 43 43h256v427c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22-5-30-13s-13-18-13-30v-683c0-12 5-22 13-30s18-13 30-13z",fileMinus:"M750 299h-110v-110zM883 311l-256-256c-4-4-9-7-14-9s-11-3-16-3h-341c-35 0-67 14-90 38s-38 55-38 90v683c0 35 14 67 38 90s55 38 90 38h512c35 0 67-14 90-38s38-55 38-90v-512c0-12-5-22-13-30zM555 128v213c0 24 19 43 43 43h213v469c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22-5-30-13s-13-18-13-30v-683c0-12 5-22 13-30s18-13 30-13zM384 683h256c24 0 43-19 43-43s-19-43-43-43h-256c-24 0-43 19-43 43s19 43 43 43z",filePlus:"M750 299h-110v-110zM883 311l-256-256c-4-4-9-7-14-9s-11-3-16-3h-341c-35 0-67 14-90 38s-38 55-38 90v683c0 35 14 67 38 90s55 38 90 38h512c35 0 67-14 90-38s38-55 38-90v-512c0-12-5-22-13-30zM555 128v213c0 24 19 43 43 43h213v469c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22-5-30-13s-13-18-13-30v-683c0-12 5-22 13-30s18-13 30-13zM384 683h85v85c0 24 19 43 43 43s43-19 43-43v-85h85c24 0 43-19 43-43s-19-43-43-43h-85v-85c0-24-19-43-43-43s-43 19-43 43v85h-85c-24 0-43 19-43 43s19 43 43 43z",fileText:"M750 299h-110v-110zM883 311l-256-256c-4-4-9-7-14-9s-11-3-16-3h-341c-35 0-67 14-90 38s-38 55-38 90v683c0 35 14 67 38 90s55 38 90 38h512c35 0 67-14 90-38s38-55 38-90v-512c0-12-5-22-13-30zM555 128v213c0 24 19 43 43 43h213v469c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22-5-30-13s-13-18-13-30v-683c0-12 5-22 13-30s18-13 30-13zM683 512h-341c-24 0-43 19-43 43s19 43 43 43h341c24 0 43-19 43-43s-19-43-43-43zM683 683h-341c-24 0-43 19-43 43s19 43 43 43h341c24 0 43-19 43-43s-19-43-43-43zM427 341h-85c-24 0-43 19-43 43s19 43 43 43h85c24 0 43-19 43-43s-19-43-43-43z",filter:"M847 171l-282 333c-6 7-10 17-10 28v295l-85-43v-253c0-10-3-19-10-28l-282-333zM939 85h-853c-24 0-43 19-43 43 0 11 4 20 10 28l331 392v263c0 17 9 31 24 38l171 85c21 11 47 2 57-19 3-6 5-13 4-19v-349l331-392c15-18 13-45-5-60-8-7-18-10-28-10z",flag:"M213 572v-421c19-9 58-23 128-23 55 0 101 18 155 40 53 21 113 46 186 46 55 0 97-7 128-17v421c-19 9-58 23-128 23-55 0-101-18-155-40-53-21-113-46-186-46-55 0-97 7-128 17zM213 939v-276c19-9 58-23 128-23 55 0 101 18 155 40 53 21 113 46 186 46 139 0 192-47 201-55 8-8 13-19 13-30v-512c0-24-19-43-43-43-11 0-22 4-29 12-4 3-42 31-141 31-55 0-101-18-155-40-53-21-113-46-186-46-139 0-192 47-201 55-8 8-13 19-13 30v811c0 24 19 43 43 43s43-19 43-43z",folder:"M981 811v-469c0-35-14-67-38-90s-55-38-90-38h-361l-73-109c-8-12-21-19-35-19h-213c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h683c35 0 67-14 90-38s38-55 38-90zM896 811c0 12-5 22-13 30s-18 13-30 13h-683c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h191l73 109c8 12 22 19 35 19h384c12 0 22 5 30 13s13 18 13 30z",folderMinus:"M981 811v-469c0-35-14-67-38-90s-55-38-90-38h-361l-73-109c-8-12-21-19-35-19h-213c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h683c35 0 67-14 90-38s38-55 38-90zM896 811c0 12-5 22-13 30s-18 13-30 13h-683c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h191l73 109c8 12 22 19 35 19h384c12 0 22 5 30 13s13 18 13 30zM384 640h256c24 0 43-19 43-43s-19-43-43-43h-256c-24 0-43 19-43 43s19 43 43 43z",folderPlus:"M981 811v-469c0-35-14-67-38-90s-55-38-90-38h-361l-73-109c-8-12-21-19-35-19h-213c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h683c35 0 67-14 90-38s38-55 38-90zM896 811c0 12-5 22-13 30s-18 13-30 13h-683c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h191l73 109c8 12 22 19 35 19h384c12 0 22 5 30 13s13 18 13 30zM384 640h85v85c0 24 19 43 43 43s43-19 43-43v-85h85c24 0 43-19 43-43s-19-43-43-43h-85v-85c0-24-19-43-43-43s-43 19-43 43v85h-85c-24 0-43 19-43 43s19 43 43 43z",help:"M981 512c0-130-53-247-137-332s-202-137-332-137-247 53-332 137-137 202-137 332 53 247 137 332 202 137 332 137 247-53 332-137 137-202 137-332zM896 512c0 106-43 202-112 272s-165 112-272 112-202-43-272-112-112-165-112-272 43-202 112-272 165-112 272-112 202 43 272 112 112 165 112 272zM428 398c8-22 24-39 44-49s43-11 65-4c20 7 35 20 45 37 8 13 12 28 12 44 0 7-2 13-5 20-3 7-9 14-16 21-30 30-78 47-78 47-22 7-34 32-27 54s32 34 54 27c0 0 66-22 111-67 12-12 23-26 32-43 9-17 14-37 14-58-0-31-9-61-24-87-20-33-51-60-90-74-44-16-91-12-130 7s-72 53-87 97c-8 22 4 47 26 54s47-4 54-26zM512 768c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43z",home:"M102 350c-10 8-16 20-16 34v469c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-469c-0-13-6-25-16-34l-384-299c-15-12-37-12-52 0zM683 896v-384c0-24-19-43-43-43h-256c-24 0-43 19-43 43v384h-128c-12 0-22-5-30-13s-13-18-13-30v-448l341-265 341 265v448c0 12-5 22-13 30s-18 13-30 13zM427 896v-341h171v341z",image:"M213 85c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-597c0-35-14-67-38-90s-55-38-90-38zM469 363c0-29-12-56-31-75s-46-31-75-31-56 12-75 31-31 46-31 75 12 56 31 75 46 31 75 31 56-12 75-31 31-46 31-75zM384 363c0 6-2 11-6 15s-9 6-15 6-11-2-15-6-6-9-6-15 2-11 6-15 9-6 15-6 11 2 15 6 6 9 6 15zM316 853l366-366 171 171v153c0 12-5 22-13 30s-18 13-30 13zM853 537l-141-141c-17-17-44-17-60 0l-454 454c-6-2-11-6-15-10-8-8-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h597c12 0 22 5 30 13s13 18 13 30z",layers:"M512 133l331 166-331 166-331-166zM493 47l-427 213c-21 11-30 36-19 57 4 9 11 15 19 19l427 213c12 6 26 6 38 0l427-213c21-11 30-36 19-57-4-9-11-15-19-19l-427-213c-12-6-26-6-38 0zM66 763l427 213c12 6 26 6 38 0l427-213c21-11 30-36 19-57s-36-30-57-19l-408 204-408-204c-21-11-47-2-57 19s-2 47 19 57zM66 550l427 213c12 6 26 6 38 0l427-213c21-11 30-36 19-57s-36-30-57-19l-408 204-408-204c-21-11-47-2-57 19s-2 47 19 57z",link:"M392 580c42 57 104 91 168 100s133-6 190-48c10-8 20-16 28-24l128-128c50-51 73-117 72-183s-27-131-78-180c-50-48-115-72-179-72-64 0-127 24-177 72l-74 73c-17 17-17 44-0 60s44 17 60 0l73-72c33-32 75-48 118-48 43-0 86 16 119 48 34 33 51 76 52 120s-15 88-47 121l-128 128c-5 5-11 11-18 16-38 28-83 38-127 32s-84-29-112-67c-14-19-41-23-60-9s-23 41-9 60zM632 444c-42-57-104-91-168-100s-133 6-190 48c-10 8-20 16-28 24l-128 128c-50 51-73 117-72 183s27 131 78 180c50 48 115 72 179 72 64-0 127-24 177-72l74-74c17-17 17-44 0-60s-44-17-60 0l-72 72c-33 32-75 48-118 48-43 0-86-16-119-48-34-33-51-76-52-120s15-88 47-121l128-128c5-5 11-11 18-16 38-28 83-38 127-32s84 29 112 67c14 19 41 23 60 9s23-41 9-60z",lock:"M213 512h597c12 0 22 5 30 13s13 18 13 30v299c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-299c0-12 5-22 13-30s18-13 30-13zM768 427v-128c0-71-29-135-75-181s-110-75-181-75-135 29-181 75-75 110-75 181v128h-43c-35 0-67 14-90 38s-38 55-38 90v299c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-299c0-35-14-67-38-90s-55-38-90-38zM341 427v-128c0-47 19-90 50-121s74-50 121-50 90 19 121 50 50 74 50 121v128z",logIn:"M640 171h171c12 0 22 5 30 13s13 18 13 30v597c0 12-5 22-13 30s-18 13-30 13h-171c-24 0-43 19-43 43s19 43 43 43h171c35 0 67-14 90-38s38-55 38-90v-597c0-35-14-67-38-90s-55-38-90-38h-171c-24 0-43 19-43 43s19 43 43 43zM537 469h-409c-24 0-43 19-43 43s19 43 43 43h409l-141 141c-17 17-17 44 0 60s44 17 60 0l213-213c4-4 7-9 9-14s3-11 3-16c0-6-1-11-3-16-2-5-5-10-9-14l-213-213c-17-17-44-17-60 0s-17 44 0 60z",logOut:"M384 853h-171c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h171c24 0 43-19 43-43s-19-43-43-43h-171c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h171c24 0 43-19 43-43s-19-43-43-43zM793 469h-409c-24 0-43 19-43 43s19 43 43 43h409l-141 141c-17 17-17 44 0 60s44 17 60 0l213-213c4-4 7-9 9-14 6-15 3-34-9-47l-213-213c-17-17-44-17-60 0s-17 44 0 60z",map:"M299 159v584l-213 122v-584zM725 865v-584l213-122v584zM663 976c3 2 7 3 11 4 1 0 3 1 4 1s3 0 4 0c-0 0-0 0-0 0s0 0 0 0c7 0 15-2 21-6l1-0 298-170c14-8 21-22 21-37v-683c0-24-19-43-43-43-8 0-15 2-21 6l-279 159-320-160c-4-2-7-3-11-4-1-0-3-1-4-1s-3-0-4-0c0 0 0 0 0 0s0 0-0 0c-7 0-15 2-21 6l-1 0-298 170c-14 8-21 22-22 37v683c0 24 19 43 43 43 8 0 15-2 21-6l279-159zM640 282v587l-256-128v-587z",mapPin:"M939 427c0-118-48-225-125-302s-184-125-302-125-225 48-302 125-125 184-125 302c0 24 2 48 6 72 12 66 38 128 72 184 117 196 325 334 325 334 14 9 33 10 47 0 0 0 208-138 325-334 33-56 60-118 72-184 4-23 6-47 6-72zM853 427c0 19-2 38-5 57-9 53-31 106-61 156-82 137-215 245-272 288-60-39-196-148-279-288-30-50-52-102-61-156-3-19-5-38-5-57 0-94 38-180 100-241s147-100 241-100 180 38 241 100 100 147 100 241zM683 427c0-47-19-90-50-121s-74-50-121-50-90 19-121 50-50 74-50 121 19 90 50 121 74 50 121 50 90-19 121-50 50-74 50-121zM597 427c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60 10-45 25-60 37-25 60-25 45 10 60 25 25 37 25 60z",maximize:"M341 85h-128c-35 0-67 14-90 38s-38 55-38 90v128c0 24 19 43 43 43s43-19 43-43v-128c0-12 5-22 13-30s18-13 30-13h128c24 0 43-19 43-43s-19-43-43-43zM939 341v-128c0-35-14-67-38-90s-55-38-90-38h-128c-24 0-43 19-43 43s19 43 43 43h128c12 0 22 5 30 13s13 18 13 30v128c0 24 19 43 43 43s43-19 43-43zM683 939h128c35 0 67-14 90-38s38-55 38-90v-128c0-24-19-43-43-43s-43 19-43 43v128c0 12-5 22-13 30s-18 13-30 13h-128c-24 0-43 19-43 43s19 43 43 43zM85 683v128c0 35 14 67 38 90s55 38 90 38h128c24 0 43-19 43-43s-19-43-43-43h-128c-12 0-22-5-30-13s-13-18-13-30v-128c0-24-19-43-43-43s-43 19-43 43z",messageCircle:"M939 491v-21c0-1-0-2-0-2-6-100-47-190-113-258-68-71-163-117-269-123-1-0-2-0-2-0h-21c-60-1-123 13-182 43-52 26-98 63-134 108-56 70-90 158-90 254-1 54 11 111 35 165l-76 227c-3 8-3 18 0 27 7 22 32 34 54 27l227-76c49 22 106 35 165 35 59-0 116-13 168-37 82-37 151-101 194-187 27-53 43-116 43-182zM853 491c0 52-12 101-34 142-34 68-89 119-153 148-41 19-87 29-133 29-52 0-101-12-142-34-11-6-23-6-33-3l-162 54 54-162c4-11 3-23-2-33-24-47-34-96-34-142 0-76 26-146 71-201 29-35 65-65 106-86 47-24 96-34 142-34h19c84 5 158 41 212 97 51 53 84 124 89 203z",mic:"M512 85c24 0 45 10 60 25s25 37 25 60v341c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60v-341c0-24 10-45 25-60s37-25 60-25zM512 0c-47 0-90 19-121 50s-50 74-50 121v341c0 47 19 90 50 121s74 50 121 50 90-19 121-50 50-74 50-121v-341c0-47-19-90-50-121s-74-50-121-50zM341 1024h341c24 0 43-19 43-43s-19-43-43-43h-128v-88c77-10 146-45 199-97 62-62 100-147 100-241v-85c0-24-19-43-43-43s-43 19-43 43v85c0 71-29 135-75 181s-110 75-181 75-135-29-181-75-75-110-75-181v-85c0-24-19-43-43-43s-43 19-43 43v85c0 94 38 180 100 241 52 52 121 88 199 97v88h-128c-24 0-43 19-43 43s19 43 43 43z",micOff:"M534 594c-7 2-14 3-22 3-24-0-45-10-60-25-15-15-25-37-25-60v-25zM683 399v-228c0-47-19-90-50-121s-74-50-121-50c-43-0-83 16-113 43-27 24-47 57-54 94-5 23 10 46 33 50s46-10 50-33c4-19 14-35 27-47 15-13 34-21 56-21 24 0 45 10 61 25 15 16 25 37 25 60v228c0 24 19 43 43 43s43-19 43-43zM768 427v85c0 16-1 32-4 45-4 23 11 45 34 50s45-11 50-34c3-19 5-39 5-60v-85c0-24-19-43-43-43s-43 19-43 43zM341 1024h341c24 0 43-19 43-43s-19-43-43-43h-128v-86c62-8 119-31 168-69l229 229c17 17 44 17 60 0s17-44 0-60l-249-249c-2-3-4-7-7-9-3-3-6-5-9-7l-674-674c-17-17-44-17-60 0s-17 44 0 60l329 329v110c0 47 19 90 50 121s74 50 121 50c32-0 61-9 86-24l63 63c-41 30-89 46-137 48-4-1-8-2-13-2-4 0-9 1-13 2-60-3-120-27-167-73-49-48-75-111-77-175-0-5-0-10-0-10v-86c0-24-19-43-43-43s-43 19-43 43v85c0 6 0 13 0 13 3 85 37 169 102 234 55 54 125 86 196 95v86h-128c-24 0-43 19-43 43s19 43 43 43z",minimize:"M299 128v128c0 12-5 22-13 30s-18 13-30 13h-128c-24 0-43 19-43 43s19 43 43 43h128c35 0 67-14 90-38s38-55 38-90v-128c0-24-19-43-43-43s-43 19-43 43zM896 299h-128c-12 0-22-5-30-13s-13-18-13-30v-128c0-24-19-43-43-43s-43 19-43 43v128c0 35 14 67 38 90s55 38 90 38h128c24 0 43-19 43-43s-19-43-43-43zM725 896v-128c0-12 5-22 13-30s18-13 30-13h128c24 0 43-19 43-43s-19-43-43-43h-128c-35 0-67 14-90 38s-38 55-38 90v128c0 24 19 43 43 43s43-19 43-43zM128 725h128c12 0 22 5 30 13s13 18 13 30v128c0 24 19 43 43 43s43-19 43-43v-128c0-35-14-67-38-90s-55-38-90-38h-128c-24 0-43 19-43 43s19 43 43 43z",minus:"M213 555h597c24 0 43-19 43-43s-19-43-43-43h-597c-24 0-43 19-43 43s19 43 43 43z",moon:"M938 550c1-10-2-20-8-29-14-19-41-23-60-9-41 30-88 46-136 50-58 4-118-12-169-49-57-42-91-103-101-168s5-133 47-190c6-8 9-19 8-29-2-23-23-41-47-38-96 9-184 50-252 113-74 69-124 164-134 272-11 117 27 228 97 312s172 141 289 152 228-27 312-97 141-172 152-289zM835 626c-21 58-57 109-103 147-67 56-156 86-250 77s-175-55-231-122-86-156-77-250c8-87 48-163 107-218 33-31 73-55 117-71-19 54-25 111-16 166 13 86 59 168 135 224 67 50 147 71 225 66 32-2 64-9 94-20z",more:"M597 512c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60zM896 512c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60zM299 512c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60z",moreVertical:"M597 512c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60zM597 213c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60zM597 811c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60z",mousePointer:"M207 207l524 218-208 71c-12 4-22 14-27 27l-71 208zM555 615l225 225c17 17 44 17 60 0s17-44 0-60l-225-225 250-85c22-8 34-32 27-54-4-12-13-21-24-26l-724-302c-22-9-47 1-56 23-5 11-4 23 0 33l302 724c9 22 34 32 56 23 12-5 20-14 24-26z",move:"M469 188v281h-281l55-55c17-17 17-44 0-60s-44-17-60 0l-128 128c-8 8-13 18-13 30 0 6 1 11 3 16s5 10 9 14l128 128c17 17 44 17 60 0s17-44 0-60l-55-55h281v281l-55-55c-17-17-44-17-60 0s-17 44 0 60l128 128c4 4 9 7 14 9s11 3 16 3c6 0 11-1 16-3 5-2 10-5 14-9l128-128c17-17 17-44 0-60s-44-17-60 0l-55 55v-281h281l-55 55c-17 17-17 44 0 60s44 17 60 0l128-128c4-4 7-9 9-14 6-15 3-34-9-47l-128-128c-17-17-44-17-60 0s-17 44 0 60l55 55h-281v-281l55 55c17 17 44 17 60 0s17-44 0-60l-128-128c-4-4-9-7-14-9-10-4-22-4-33 0-5 2-10 5-14 9l-128 128c-17 17-17 44 0 60s44 17 60 0z",music:"M341 768c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60 10-45 25-60 37-25 60-25 45 10 60 25 25 37 25 60zM939 683v-555c0-2-0-5-1-7-4-23-26-39-49-35l-512 85c-20 3-36 21-36 42v407c-25-15-54-23-85-23-47 0-90 19-121 50s-50 74-50 121 19 90 50 121 74 50 121 50 90-19 121-50 50-74 50-121v-519l427-71v356c-25-15-54-23-85-23-47 0-90 19-121 50s-50 74-50 121 19 90 50 121 74 50 121 50 90-19 121-50 50-74 50-121zM853 683c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60 10-45 25-60 37-25 60-25 45 10 60 25 25 37 25 60z",paperclip:"M885 441l-392 392c-42 42-96 63-151 63s-109-21-151-63-63-96-63-151 21-109 63-151l392-392c25-25 58-38 91-38s66 13 91 38 38 58 38 91-13 66-38 91l-393 392c-8 8-19 13-30 13s-22-4-30-13-13-19-13-30 4-22 13-30l362-362c17-17 17-44 0-60s-44-17-60-0l-362 362c-25 25-38 58-38 91s13 66 38 91 58 38 91 38 66-13 91-38l393-392c42-42 63-96 63-151s-21-109-63-151-96-63-151-63-109 21-151 63l-392 392c-58 58-88 135-88 211s29 153 88 211 135 88 211 88 153-29 211-88l392-392c17-17 17-44 0-60s-44-17-60 0z",pause:"M256 128c-24 0-43 19-43 43v683c0 24 19 43 43 43h171c24 0 43-19 43-43v-683c0-24-19-43-43-43zM299 213h85v597h-85zM597 128c-24 0-43 19-43 43v683c0 24 19 43 43 43h171c24 0 43-19 43-43v-683c0-24-19-43-43-43zM640 213h85v597h-85z",play:"M236 92c-7-4-15-7-23-7-24 0-43 19-43 43v768c-0 8 2 16 7 23 13 20 39 26 59 13l597-384c5-3 9-7 13-13 13-20 7-46-13-59zM256 206l476 306-476 306z",plus:"M213 555h256v256c0 24 19 43 43 43s43-19 43-43v-256h256c24 0 43-19 43-43s-19-43-43-43h-256v-256c0-24-19-43-43-43s-43 19-43 43v256h-256c-24 0-43 19-43 43s19 43 43 43z",refresh:"M190 398c31-89 96-157 175-194s172-45 261-14c51 18 94 46 127 80l121 113h-148c-24 0-43 19-43 43s19 43 43 43h256c0 0 0 0 1 0 6-0 11-1 16-3 5-2 10-5 14-10 1-1 1-1 2-2 3-4 6-8 7-12s3-9 3-14c0-1 0-1 0-2v-256c0-24-19-43-43-43s-43 19-43 43v157l-125-117c-42-43-97-79-160-101-111-39-228-30-326 17s-179 132-218 243c-8 22 4 47 26 54s47-4 54-26zM85 696l126 118c82 82 192 124 301 124s218-42 302-125c47-47 81-103 101-160 8-22-4-47-26-54s-47 4-54 26c-15 45-42 89-80 127-67 67-154 100-241 100s-175-33-242-101l-119-112h148c24 0 43-19 43-43s-19-43-43-43h-256c-0 0-0 0-1 0-6 0-11 1-16 3-5 2-10 5-14 10-1 1-1 1-2 2-3 4-6 8-7 12s-3 9-3 14c-0 1-0 1-0 2v256c0 24 19 43 43 43s43-19 43-43z",rewind:"M427 723l-272-211 272-211zM912 844c7 6 16 9 26 9 24 0 43-19 43-43v-597c0-9-3-18-9-26-14-19-41-22-60-7l-384 299c-3 2-5 5-7 7-6 8-9 17-9 26v-298c0-9-3-18-9-26-14-19-41-22-60-7l-384 299c-3 2-5 5-7 7-14 19-11 45 7 60l384 299c7 6 16 9 26 9 24 0 43-19 43-43v-298c0 13 6 25 16 33zM896 723l-272-211 272-211z",settings:"M683 512c0-47-19-90-50-121s-74-50-121-50-90 19-121 50-50 74-50 121 19 90 50 121 74 50 121 50 90-19 121-50 50-74 50-121zM597 512c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60 10-45 25-60 37-25 60-25 45 10 60 25 25 37 25 60zM867 657c2-4 5-8 8-11 5-4 11-6 17-6h4c35 0 67-14 90-38s38-55 38-90-14-67-38-90-55-38-90-38h-7c-5-0-9-1-13-3-5-3-10-7-12-13-0-1-0-3-0-4-1-2-2-5-2-7 1-14 3-19 7-23l3-3c25-25 37-58 37-91s-13-66-38-91c-25-25-58-37-91-37s-66 13-90 38l-2 2c-4 3-8 6-12 7-6 2-12 1-19-1-4-2-8-5-11-8-4-5-6-11-6-17v-4c0-35-14-67-38-90s-55-38-90-38-67 14-90 38-38 55-38 90v7c-0 5-1 9-3 13-3 5-7 10-13 12-1 0-3 0-4 0-2 1-5 2-7 2-14-1-19-3-23-7l-3-3c-25-25-58-37-91-37s-65 13-91 38c-25 25-37 58-37 91s13 66 38 90l2 2c3 4 6 8 7 12 2 6 1 12-1 19-0 1-1 1-1 2-2 5-5 9-8 12-5 4-11 7-16 7h-4c-35 0-67 14-90 38s-38 55-38 91 14 67 38 90 55 38 90 38h7c5 0 9 1 13 3 5 3 10 7 13 14 1 2 2 5 2 7-1 14-3 19-7 23l-3 3c-25 25-37 58-37 91s13 66 38 91c25 25 58 37 91 37s66-13 90-38l2-2c4-3 8-6 12-7 6-2 12-1 19 1 1 0 1 1 2 1 5 2 9 5 12 8 4 5 7 11 7 16v4c0 35 14 67 38 90s55 38 90 38 67-14 90-38 38-55 38-90v-7c0-5 1-9 3-13 3-5 7-10 14-13 2-1 5-2 7-2 14 1 19 3 23 7l3 3c25 25 58 37 91 37s66-13 91-38c25-25 37-58 37-91s-13-66-38-90l-2-2c-3-4-6-8-7-12-2-6-1-12 1-19zM785 397c-1-9-2-13-3-16v3c0 2 0 4 0 5 1 3 2 5 3 8 0 4 0 4 0 4 11 25 29 44 52 56 16 8 33 13 52 13h8c12 0 22 5 30 13s13 18 13 30-5 22-13 30-18 13-30 13h-4c-27 0-52 10-71 26-14 11-25 26-32 42-11 25-12 52-5 76 5 18 15 35 28 48l3 3c8 8 13 19 13 30s-4 22-12 30c-8 8-19 13-30 13s-22-4-30-12l-3-3c-20-19-44-30-70-32-19-2-38 1-55 9-25 11-44 29-55 51-8 16-13 33-13 52v8c0 12-5 22-13 30s-18 12-30 12-22-5-30-13-13-18-13-30v-4c-1-28-11-53-27-72-12-14-28-25-45-32-25-11-51-12-75-5-18 5-35 15-48 28l-3 3c-8 8-19 13-30 13s-22-4-30-12c-8-8-13-19-13-30s4-22 12-30l3-3c19-20 30-44 32-70 2-19-1-38-9-55-11-25-29-44-51-55-16-8-33-13-52-13l-8 0c-12 0-22-5-30-13s-13-18-13-30 5-22 13-30 18-13 30-13h4c28-1 53-11 72-27 14-12 25-28 32-45 11-25 12-51 5-75-5-18-15-35-28-48l-3-3c-8-8-13-19-13-30s4-22 12-30c8-8 19-13 30-13s22 4 30 12l3 3c20 19 44 30 70 32 16 1 32-1 47-6 4-1 8-2 11-3-1 0-3 0-4 0-9 1-13 2-16 3h3c2 0 4-0 5-0 3-1 5-2 8-3 4-0 4-0 4-0 25-11 44-29 56-52 8-16 13-33 13-52v-8c0-12 5-22 13-30s18-13 30-13 22 5 30 13 13 18 13 30v4c0 27 10 52 26 71 11 14 26 25 42 32 25 11 51 12 76 5 18-5 35-15 48-28l3-3c8-8 19-13 30-13s22 4 30 12c8 8 13 19 13 30s-4 22-12 30l-3 3c-19 20-30 44-32 70-1 16 1 32 6 47 1 4 2 8 3 11-0-1-0-3-0-4z",share:"M128 512v341c0 35 14 67 38 90s55 38 90 38h512c35 0 67-14 90-38s38-55 38-90v-341c0-24-19-43-43-43s-43 19-43 43v341c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22-5-30-13s-13-18-13-30v-341c0-24-19-43-43-43s-43 19-43 43zM469 188v452c0 24 19 43 43 43s43-19 43-43v-452l98 98c17 17 44 17 60 0s17-44 0-60l-171-171c-4-4-9-7-14-9-10-4-22-4-33 0-5 2-10 5-14 9l-171 171c-17 17-17 44 0 60s44 17 60 0z",start:"M784 887c7 6 17 9 27 9 24 0 43-19 43-43v-683c0-9-3-19-9-27-15-18-42-21-60-7l-427 341c-2 2-5 4-7 7-15 18-12 45 7 60zM768 765l-316-253 316-253zM256 811v-597c0-24-19-43-43-43s-43 19-43 43v597c0 24 19 43 43 43s43-19 43-43z",end:"M240 137c-7-6-17-9-27-9-24 0-43 19-43 43v683c-0 9 3 19 9 27 15 18 42 21 60 7l427-341c2-2 5-4 7-7 15-18 12-45-7-60zM256 259l316 253-316 253zM768 213v597c0 24 19 43 43 43s43-19 43-43v-597c0-24-19-43-43-43s-43 19-43 43z",forbidden:"M981 512c0-130-53-247-137-332s-202-137-332-137-247 53-332 137-137 202-137 332 53 247 137 332 202 137 332 137 247-53 332-137 137-202 137-332zM812 752l-540-540c66-53 149-84 240-84 106 0 202 43 272 112s112 165 112 272c0 91-31 174-84 240zM212 272l540 540c-66 53-149 84-240 84-106 0-202-43-272-112s-112-165-112-272c0-91 31-174 84-240z",square:"M213 85c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-597c0-35-14-67-38-90s-55-38-90-38zM213 171h597c12 0 22 5 30 13s13 18 13 30v597c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13z",star:"M550 66c-4-8-11-15-19-19-21-10-47-2-57 19l-122 247-273 40c-9 1-18 5-24 12-16 17-16 44 1 60l197 192-47 271c-2 9-0 18 4 27 11 21 37 29 58 18l244-128 244 128c8 4 17 6 27 4 23-4 39-26 35-49l-47-271 197-192c6-6 11-15 12-24 3-23-13-45-36-48l-273-40-122-247z",sun:"M768 512c0-71-29-135-75-181s-110-75-181-75-135 29-181 75-75 110-75 181 29 135 75 181 110 75 181 75 135-29 181-75 75-110 75-181zM683 512c0 47-19 90-50 121s-74 50-121 50-90-19-121-50-50-74-50-121 19-90 50-121 74-50 121-50 90 19 121 50 50 74 50 121zM469 43v85c0 24 19 43 43 43s43-19 43-43v-85c0-24-19-43-43-43s-43 19-43 43zM469 896v85c0 24 19 43 43 43s43-19 43-43v-85c0-24-19-43-43-43s-43 19-43 43zM150 210l61 61c17 17 44 17 60 0s17-44 0-60l-61-61c-17-17-44-17-60 0s-17 44 0 60zM753 814l61 61c17 17 44 17 60 0s17-44 0-60l-61-61c-17-17-44-17-60 0s-17 44 0 60zM43 555h85c24 0 43-19 43-43s-19-43-43-43h-85c-24 0-43 19-43 43s19 43 43 43zM896 555h85c24 0 43-19 43-43s-19-43-43-43h-85c-24 0-43 19-43 43s19 43 43 43zM210 874l61-61c17-17 17-44 0-60s-44-17-60 0l-61 61c-17 17-17 44 0 60s44 17 60 0zM814 271l61-61c17-17 17-44 0-60s-44-17-60 0l-61 61c-17 17-17 44 0 60s44 17 60 0z",tag:"M909 602c25-25 37-58 37-90 0-33-12-65-37-90l-367-367c-8-8-18-12-30-12h-427c-24 0-43 19-43 43v427c0 11 4 22 13 30l367 366c25 25 58 37 91 37s66-13 90-38zM848 542l-306 306c-8 8-19 13-30 13s-22-4-30-12l-354-354v-366h366l354 354c8 8 12 19 12 30 0 11-4 22-12 30zM299 341c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43z",terminal:"M201 755l256-256c17-17 17-44 0-60l-256-256c-17-17-44-17-60 0s-17 44 0 60l226 226-226 226c-17 17-17 44 0 60s44 17 60 0zM512 853h341c24 0 43-19 43-43s-19-43-43-43h-341c-24 0-43 19-43 43s19 43 43 43z",thumbsDown:"M469 640c0-24-19-43-43-43h-242c-3-0-7-0-7-0-12-2-21-8-28-17s-10-20-8-32l59-384c2-10 7-19 14-26 8-7 18-11 29-11h439v418l-154 346c-13-4-25-11-34-21-15-15-25-37-25-60zM384 683v128c0 47 19 90 50 121s74 50 121 50c17 0 32-10 39-25l171-384c3-6 4-12 4-17v-469c0-24-19-43-43-43h-481c-33-0-63 12-86 33-22 19-37 46-41 76l-59 384c-5 35 4 69 23 95s49 45 84 51c7 1 14 2 21 1zM725 128h114c15-0 29 5 39 14 9 8 16 19 18 32v290c-2 15-9 27-19 36-10 8-23 13-37 13l-115 0c-24 0-43 19-43 43s19 43 43 43h113c35 1 67-12 92-32 27-22 45-53 50-90 0-2 0-4 0-6v-299c0-2-0-4-0-6-5-34-22-64-46-86-26-23-60-37-96-36h-114c-24 0-43 19-43 43s19 43 43 43z",thumbsUp:"M555 384c0 24 19 43 43 43h242c3 0 7 0 7 0 12 2 21 8 28 17s10 20 8 32l-59 384c-2 10-7 19-14 26-8 7-18 11-29 11h-439v-418l154-346c13 4 25 11 34 21 15 15 25 37 25 60zM640 341v-128c0-47-19-90-50-121s-74-50-121-50c-17 0-32 10-39 25l-171 384c-3 6-4 12-4 17v469c0 24 19 43 43 43h481c33 0 63-12 86-33 22-19 37-46 41-76l59-384c5-35-4-69-23-95s-49-45-84-51c-7-1-14-2-21-1zM299 896h-128c-12 0-22-5-30-13s-13-18-13-30v-299c0-12 5-22 13-30s18-13 30-13h128c24 0 43-19 43-43s-19-43-43-43h-128c-35 0-67 14-90 38s-38 55-38 90v299c0 35 14 67 38 90s55 38 90 38h128c24 0 43-19 43-43s-19-43-43-43z",trash:"M768 299v555c0 12-5 22-13 30s-18 13-30 13h-427c-12 0-22-5-30-13s-13-18-13-30v-555zM725 213v-43c0-35-14-67-38-90s-55-38-90-38h-171c-35 0-67 14-90 38s-38 55-38 90v43h-171c-24 0-43 19-43 43s19 43 43 43h43v555c0 35 14 67 38 90s55 38 90 38h427c35 0 67-14 90-38s38-55 38-90v-555h43c24 0 43-19 43-43s-19-43-43-43zM384 213v-43c0-12 5-22 13-30s18-13 30-13h171c12 0 22 5 30 13s13 18 13 30v43z",unlock:"M213 512h597c12 0 22 5 30 13s13 18 13 30v299c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-299c0-12 5-22 13-30s18-13 30-13zM341 427v-128c-0-47 19-90 50-121 31-31 73-50 120-50 44 0 83 16 113 43 27 24 47 57 55 94 5 23 27 38 50 33s38-27 33-50c-12-56-41-105-82-141-45-40-105-64-170-64-71 0-135 29-181 75s-75 110-75 181v128h-43c-35 0-67 14-90 38s-38 55-38 90v299c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-299c0-35-14-67-38-90s-55-38-90-38z",upload:"M853 640v171c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-171c0-24-19-43-43-43s-43 19-43 43v171c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-171c0-24-19-43-43-43s-43 19-43 43zM469 231v409c0 24 19 43 43 43s43-19 43-43v-409l141 141c17 17 44 17 60 0s17-44 0-60l-213-213c-4-4-9-7-14-9-10-4-22-4-33 0-5 2-10 5-14 9l-213 213c-17 17-17 44 0 60s44 17 60 0z",uploadCloud:"M469 615v281c0 24 19 43 43 43s43-19 43-43v-281l98 98c17 17 44 17 60 0s17-44 0-60l-171-171c-4-4-9-7-14-9s-11-3-16-3c-11 0-22 4-30 13l-171 171c-17 17-17 44 0 60s44 17 60 0zM890 822c62-34 105-90 123-152s13-133-21-195c-29-53-74-92-126-114-31-13-64-20-98-20h-22c-31-88-91-158-167-203-85-50-188-67-291-41s-185 92-235 177-67 188-41 291c16 61 46 116 84 158 16 18 43 19 60 3s19-43 3-60c-29-33-53-75-65-123-21-80-7-160 32-226s103-117 183-138 160-7 226 32 117 103 138 183c5 19 22 32 41 32h53c23 0 45 5 66 13 35 14 65 40 84 76 23 41 26 88 14 130s-41 79-82 102c-21 11-28 37-17 58s37 28 58 17z",user:"M896 896v-85c0-59-24-112-62-151s-92-62-151-62h-341c-59 0-112 24-151 62s-62 92-62 151v85c0 24 19 43 43 43s43-19 43-43v-85c0-35 14-67 38-90s55-38 90-38h341c35 0 67 14 90 38s38 55 38 90v85c0 24 19 43 43 43s43-19 43-43zM725 299c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM640 299c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90z",userMinus:"M725 896v-85c0-59-24-112-62-151s-92-62-151-62h-299c-59 0-112 24-151 62s-62 92-62 151v85c0 24 19 43 43 43s43-19 43-43v-85c0-35 14-67 38-90s55-38 90-38h299c35 0 67 14 90 38s38 55 38 90v85c0 24 19 43 43 43s43-19 43-43zM576 299c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM491 299c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90zM981 427h-256c-24 0-43 19-43 43s19 43 43 43h256c24 0 43-19 43-43s-19-43-43-43z",userPlus:"M725 896v-85c0-59-24-112-62-151s-92-62-151-62h-299c-59 0-112 24-151 62s-62 92-62 151v85c0 24 19 43 43 43s43-19 43-43v-85c0-35 14-67 38-90s55-38 90-38h299c35 0 67 14 90 38s38 55 38 90v85c0 24 19 43 43 43s43-19 43-43zM576 299c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM491 299c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90zM981 427h-85v-85c0-24-19-43-43-43s-43 19-43 43v85h-85c-24 0-43 19-43 43s19 43 43 43h85v85c0 24 19 43 43 43s43-19 43-43v-85h85c24 0 43-19 43-43s-19-43-43-43z",userX:"M725 896v-85c0-59-24-112-62-151s-92-62-151-62h-299c-59 0-112 24-151 62s-62 92-62 151v85c0 24 19 43 43 43s43-19 43-43v-85c0-35 14-67 38-90s55-38 90-38h299c35 0 67 14 90 38s38 55 38 90v85c0 24 19 43 43 43s43-19 43-43zM576 299c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM491 299c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90zM951 311l-77 77-77-77c-17-17-44-17-60 0s-17 44 0 60l77 77-77 77c-17 17-17 44 0 60s44 17 60 0l77-77 77 77c17 17 44 17 60 0s17-44 0-60l-77-77 77-77c17-17 17-44 0-60s-44-17-60 0z",users:"M768 896v-85c0-59-24-112-62-151s-92-62-151-62h-341c-59 0-112 24-151 62s-62 92-62 151v85c0 24 19 43 43 43s43-19 43-43v-85c0-35 14-67 38-90s55-38 90-38h341c35 0 67 14 90 38s38 55 38 90v85c0 24 19 43 43 43s43-19 43-43zM597 299c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM512 299c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90zM1024 896v-85c-0-53-19-102-52-139-28-32-65-56-108-67-23-6-46 8-52 30s8 46 30 52c26 7 48 21 65 41 19 22 31 51 31 83v85c0 24 19 43 43 43s43-19 43-43zM672 175c34 9 62 31 78 59s23 63 14 97c-8 29-25 54-47 70-13 10-29 17-45 22-23 6-36 29-30 52s29 36 52 30c27-7 53-19 75-36 38-28 66-69 79-118 15-57 5-115-23-162s-74-83-131-98c-23-6-46 8-52 31s8 46 31 52z",video:"M939 382v261l-183-130zM128 171c-35 0-67 14-90 38s-38 55-38 90v427c0 35 14 67 38 90s55 38 90 38h469c35 0 67-14 90-38s38-55 38-90v-130l231 165c19 14 46 9 60-10 5-8 8-16 8-25v-427c0-24-19-43-43-43-9 0-18 3-25 8l-231 165v-130c0-35-14-67-38-90s-55-38-90-38zM128 256h469c12 0 22 5 30 13s13 18 13 30v427c0 12-5 22-13 30s-18 13-30 13h-469c-12 0-22-5-30-13s-13-18-13-30v-427c0-12 5-22 13-30s18-13 30-13z",videoOff:"M455 256h143c12 0 22 5 30 13s13 18 13 30v143c0 12 5 22 13 30l43 43c15 15 38 17 55 4l188-136v343c0 24 19 43 43 43s43-19 43-43v-427c0-9-3-17-8-25-14-19-40-23-60-10l-227 164-4-4v-125c0-35-14-67-38-90s-55-38-90-38h-143c-24 0-43 19-43 43s19 43 43 43zM196 256l444 444v25c0 12-5 22-13 30s-18 13-30 13h-469c-12 0-22-5-30-13s-13-18-13-30v-427c0-12 5-22 13-30s18-13 30-13zM13 73l99 99c-29 4-54 17-74 36-23 23-38 55-38 90v427c0 35 14 67 38 90s55 38 90 38h469c35 0 67-14 90-38 11-11 21-25 27-40l236 236c17 17 44 17 60 0s17-44 0-60l-939-939c-17-17-44-17-60 0s-17 44 0 60z",volume:"M427 302v420l-144-115c-7-6-17-9-27-9h-128v-171h128c9 0 19-3 27-9zM443 180l-202 161h-156c-24 0-43 19-43 43v256c0 24 19 43 43 43h156l202 161c18 15 45 12 60-7 6-8 9-17 9-27v-597c0-24-19-43-43-43-10 0-19 4-27 9z",volumeLow:"M427 302v420l-144-115c-7-6-17-9-27-9h-128v-171h128c9 0 19-3 27-9zM443 180l-202 161h-156c-24 0-43 19-43 43v256c0 24 19 43 43 43h156l202 161c18 15 45 12 60-7 6-8 9-17 9-27v-597c0-24-19-43-43-43-10 0-19 4-27 9zM633 391c33 33 50 77 50 121s-17 87-50 121c-17 17-17 44 0 60s44 17 60 0c50-50 75-116 75-181s-25-131-75-181c-17-17-44-17-60 0s-17 44 0 60z",volumeHigh:"M427 302v420l-144-115c-7-6-17-9-27-9h-128v-171h128c9 0 19-3 27-9zM443 180l-202 161h-156c-24 0-43 19-43 43v256c0 24 19 43 43 43h156l202 161c18 15 45 12 60-7 6-8 9-17 9-27v-597c0-24-19-43-43-43-10 0-19 4-27 9zM783 241c75 75 112 173 112 272 0 98-37 196-112 271-17 17-17 44 0 60s44 17 60 0c92-92 137-212 137-332 0-120-46-240-137-332-17-17-44-17-60 0s-17 44 0 60zM633 391c33 33 50 77 50 121s-17 87-50 121c-17 17-17 44 0 60s44 17 60 0c50-50 75-116 75-181s-25-131-75-181c-17-17-44-17-60 0s-17 44 0 60z",volumeOff:"M427 302v420l-144-115c-7-6-17-9-27-9h-128v-171h128c9 0 19-3 27-9zM443 180l-202 161h-156c-24 0-43 19-43 43v256c0 24 19 43 43 43h156l202 161c18 15 45 12 60-7 6-8 9-17 9-27v-597c0-24-19-43-43-43-10 0-19 4-27 9zM695 414l98 98-98 98c-17 17-17 44 0 60s44 17 60 0l98-98 98 98c17 17 44 17 60 0s17-44 0-60l-98-98 98-98c17-17 17-44 0-60s-44-17-60 0l-98 98-98-98c-17-17-44-17-60 0s-17 44 0 60z",wifi:"M241 568c84-70 186-102 287-98 92 3 184 36 259 98 18 15 45 12 60-6s12-45-6-60c-90-74-199-114-310-118-121-4-245 34-345 118-18 15-21 42-5 60s42 21 60 5zM89 416c125-110 282-163 437-159 147 3 293 57 410 160 18 16 45 14 60-4s14-45-4-60c-133-116-298-177-464-181-176-4-353 56-495 181-18 16-19 43-4 60s43 19 60 4zM389 722c42-30 92-42 140-39 38 3 75 16 108 39 19 14 46 9 59-10s9-46-10-59c-45-31-97-50-150-54-67-5-137 12-196 54-19 14-24 40-10 59s40 24 59 10zM512 896c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43z",wifiOff:"M695 510c34 16 64 37 88 57 18 15 45 13 60-4s13-45-4-60c-30-26-67-50-106-70-21-10-47-2-57 20s-2 47 20 57zM460 258c172-14 333 41 456 142 6 5 12 10 18 16 18 16 45 14 60-4s14-45-4-60c-7-6-14-12-21-18-140-114-323-177-517-161-23 2-41 22-39 46s22 41 46 39zM389 722c42-30 92-42 140-39 38 3 75 16 108 39 10 7 22 9 33 7l282 282c17 17 44 17 60 0s17-44 0-60l-544-544c-2-3-5-5-7-7l-387-387c-17-17-44-17-60 0s-17 44 0 60l174 174c-54 27-106 62-155 105-18 16-19 43-4 60s43 19 60 4c51-45 107-80 162-105l99 99c-58 19-114 50-164 92-18 15-20 42-5 60s42 20 60 5c54-45 116-75 179-88l119 119c-1-0-2-0-3-0-67-5-137 12-196 54-19 14-24 40-10 59s40 24 59 10zM512 896c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43z",x:"M226 286l226 226-226 226c-17 17-17 44 0 60s44 17 60 0l226-226 226 226c17 17 44 17 60 0s17-44 0-60l-226-226 226-226c17-17 17-44 0-60s-44-17-60 0l-226 226-226-226c-17-17-44-17-60 0s-17 44 0 60z",zoomIn:"M684 677c-1 1-3 2-4 4s-3 3-4 4c-54 52-127 84-207 84-82 0-157-33-211-87s-87-129-87-211 33-157 87-211 129-87 211-87 157 33 211 87 87 129 87 211c0 80-32 153-84 207zM926 866l-157-157c53-66 84-149 84-240 0-106-43-202-112-272s-166-112-272-112-202 43-272 112-112 166-112 272 43 202 112 272 166 112 272 112c91 0 174-31 240-84l157 157c17 17 44 17 60 0s17-44 0-60zM341 512h85v85c0 24 19 43 43 43s43-19 43-43v-85h85c24 0 43-19 43-43s-19-43-43-43h-85v-85c0-24-19-43-43-43s-43 19-43 43v85h-85c-24 0-43 19-43 43s19 43 43 43z",zoomOut:"M684 677c-1 1-3 2-4 4s-3 3-4 4c-54 52-127 84-207 84-82 0-157-33-211-87s-87-129-87-211 33-157 87-211 129-87 211-87 157 33 211 87 87 129 87 211c0 80-32 153-84 207zM926 866l-157-157c53-66 84-149 84-240 0-106-43-202-112-272s-166-112-272-112-202 43-272 112-112 166-112 272 43 202 112 272 166 112 272 112c91 0 174-31 240-84l157 157c17 17 44 17 60 0s17-44 0-60zM341 512h256c24 0 43-19 43-43s-19-43-43-43h-256c-24 0-43 19-43 43s19 43 43 43z",discord:{p:["M1145 86c-81-38-174-68-272-85l-7-1c-11 19-23 43-34 68l-2 5c-46-7-100-12-155-12s-108 4-160 12l6-1c-13-29-25-53-38-76l2 4c-105 18-198 48-286 89l7-3c-176 261-224 516-200 766v0c98 73 211 131 334 169l8 2c26-34 50-73 71-113l2-5c-45-17-83-35-119-57l3 2c10-7 19-14 28-21 100 48 218 76 342 76s242-28 347-78l-5 2c9 8 19 15 28 21-33 20-71 38-111 53l-5 2c23 45 47 84 75 120l-2-2c131-40 244-99 345-174l-3 2c28-291-48-543-201-767zM451 698c-67 0-122-60-122-135s53-135 121-135 123 61 122 135-54 135-122 135zM900 698c-67 0-122-60-122-135s53-135 122-135 123 61 121 135-54 135-121 135z"],w:1351},tiktok:"M535 1c56-1 111-0 167-1 3 65 27 132 75 178 48 47 115 69 181 76v172c-61-2-123-15-179-41-24-11-47-25-69-40-0 125 0 249-1 373-3 60-23 119-58 168-56 82-153 135-252 137-61 3-122-13-174-44-86-51-147-144-156-244-1-21-1-43-0-64 8-81 48-159 110-212 71-61 170-91 262-73 1 63-2 126-2 189-42-14-92-10-129 16-27 17-47 44-58 75-9 22-6 46-6 69 10 70 78 129 149 122 48-0 93-28 118-69 8-14 17-29 17-45 4-76 3-152 3-229 0-172-0-343 1-515z",instagram:{p:["M512 92c137 0 153 1 207 3 50 2 77 11 95 18 24 9 41 20 59 38 18 18 29 35 38 59 7 18 15 45 18 95 2 54 3 70 3 207s-1 153-3 207c-2 50-11 77-18 95-9 24-20 41-38 59-18 18-35 29-59 38-18 7-45 15-95 18-54 2-70 3-207 3s-153-1-207-3c-50-2-77-11-95-18-24-9-41-20-59-38-18-18-29-35-38-59-7-18-15-45-18-95-2-54-3-70-3-207s1-153 3-207c2-50 11-77 18-95 9-24 20-41 38-59 18-18 35-29 59-38 18-7 45-15 95-18 54-2 70-3 207-3zM512 0c-139 0-156 1-211 3-54 2-92 11-124 24-34 13-62 31-91 59-29 28-46 57-59 91-13 33-21 70-24 124-2 55-3 72-3 211s1 156 3 211c2 54 11 92 24 124 13 34 31 62 59 91 28 28 57 46 91 59 33 13 70 21 124 24 55 2 72 3 211 3s156-1 211-3c54-2 92-11 124-24 34-13 62-31 91-59s46-57 59-91c13-33 21-70 24-124 2-55 3-72 3-211s-1-156-3-211c-2-54-11-92-24-124-13-34-30-63-59-91-28-28-57-46-91-59-33-13-70-21-124-24-55-3-72-3-211-3v0z","M512 249c-145 0-263 118-263 263s118 263 263 263 263-118 263-263c0-145-118-263-263-263zM512 683c-94 0-171-76-171-171s76-171 171-171c94 0 171 76 171 171s-76 171-171 171z","M847 239c0 34-27 61-61 61s-61-27-61-61c0-34 27-61 61-61s61 27 61 61z"]},linkedin:"M928 0h-832c-53 0-96 43-96 96v832c0 53 43 96 96 96h832c53 0 96-43 96-96v-832c0-53-43-96-96-96zM384 832h-128v-448h128v448zM320 320c-35 0-64-29-64-64s29-64 64-64c35 0 64 29 64 64s-29 64-64 64zM832 832h-128v-256c0-35-29-64-64-64s-64 29-64 64v256h-128v-448h128v79c26-36 67-79 112-79 80 0 144 72 144 160v288z",eyedropper:"M987 37c-50-50-131-50-181 0l-172 172-121-121-136 136 106 106-472 472c-8 8-11 19-10 29h-0v160c0 18 14 32 32 32h160c0 0 3 0 4 0 9 0 18-4 25-11l472-472 106 106 136-136-121-121 172-172c50-50 50-131 0-181zM173 960h-109v-109l470-470 109 109-470 470z",heart:{p:["M1088 358c0 86-37 164-96 218h0l-320 320c-32 32-64 64-96 64s-64-32-96-64l-320-320c-59-54-96-131-96-218 0-162 132-294 294-294 86 0 164 37 218 96 54-59 131-96 218-96 162 0 294 132 294 294z"],w:1152},facebook:"M928 0h-832c-53 0-96 43-96 96v832c0 53 43 96 96 96h416v-448h-128v-128h128v-64c0-106 86-192 192-192h128v128h-128c-35 0-64 29-64 64v64h192l-32 128h-160v448h288c53 0 96-43 96-96v-832c0-53-43-96-96-96z",twitter:"M1024 226c-38 17-78 28-121 33 43-26 77-67 92-116-41 24-86 42-133 51-38-41-93-66-153-66-116 0-210 94-210 210 0 16 2 32 5 48-175-9-329-92-433-220-18 31-28 67-28 106 0 73 37 137 93 175-34-1-67-11-95-26 0 1 0 2 0 3 0 102 72 187 169 206-18 5-36 7-55 7-14 0-27-1-40-4 27 83 104 144 196 146-72 56-162 90-261 90-17 0-34-1-50-3 93 60 204 94 322 94 386 0 598-320 598-598 0-9-0-18-1-27 41-29 77-66 105-109z",youtube:"M1014 307c0 0-10-71-41-102-39-41-83-41-103-43-143-10-358-10-358-10h-0c0 0-215 0-358 10-20 2-64 3-103 43-31 31-41 102-41 102s-10 83-10 166v78c0 83 10 166 10 166s10 71 41 102c39 41 90 39 113 44 82 8 348 10 348 10s215-0 358-11c20-2 64-3 103-43 31-31 41-102 41-102s10-83 10-166v-78c-0-83-10-166-10-166zM406 645v-288l277 144-277 143z",game:{p:["M1056 194v-2h-672c-177 0-320 143-320 320s143 320 320 320c105 0 198-50 256-128h128c58 78 151 128 256 128 177 0 320-143 320-320 0-166-126-302-288-318zM576 576h-128v128h-128v-128h-128v-128h128v-128h128v128h128v128zM960 576c-35 0-64-29-64-64s29-64 64-64 64 29 64 64-29 64-64 64zM1152 576c-35 0-64-29-64-64 0-35 29-64 64-64s64 29 64 64c0 35-29 64-64 64z"],w:1408},google:"M512 0c-283 0-512 229-512 512s229 512 512 512 512-229 512-512-229-512-512-512zM520 896c-212 0-384-172-384-384s172-384 384-384c104 0 190 38 257 100l-104 100c-29-27-78-59-153-59-131 0-238 109-238 242s107 242 238 242c152 0 209-109 218-166h-218v-132h363c3 19 6 38 6 64 0 219-147 375-369 375z",github:"M512 13c-283 0-512 229-512 512 0 226 147 418 350 486 26 5 35-11 35-25 0-12-0-53-1-95-142 31-173-60-173-60-23-59-57-75-57-75-46-32 4-31 4-31 51 4 78 53 78 53 46 78 120 56 149 43 5-33 18-56 33-68-114-13-233-57-233-253 0-56 20-102 53-137-5-13-23-65 5-136 0 0 43-14 141 52 41-11 85-17 128-17 44 0 87 6 128 17 98-66 141-52 141-52 28 71 10 123 5 136 33 36 53 82 53 137 0 197-120 240-234 253 18 16 35 47 35 95 0 69-1 124-1 141 0 14 9 30 35 25 203-68 350-260 350-486 0-283-229-512-512-512z",npm:"M0 0v1024h1024v-1024h-1024zM832 832h-128v-512h-192v512h-320v-640h640v640z",xr:{p:["M801 116c465 0 735 49 735 396 0 279-197 396-342 396-218 0-307-165-393-165-110 0-175 165-393 165-145 0-342-117-342-396 0-347 270-396 735-396zM949 285c-16-16-41-16-57 0-16 16-16 41-0 57v0l322 322c16 16 41 16 57 0 16-16 16-41 0-57-9-9-18-18-26-26l-4-4c-5-5-9-9-14-14l-4-4c-32-32-65-64-132-131l-8-8c-1-1-3-3-4-4l-18-18c-31-31-68-68-113-113zM801 272c-22 0-40 18-40 40v0 322c0 22 18 40 40 40 22 0 40-18 40-40 0-1 0-2 0-3l0-6c0-3 0-6 0-8l0-5c0-1 0-2 0-2l0-6c0-1 0-1 0-2l0-7c0-1 0-1 0-2l0-8c0-0 0-1 0-1l-0-20c-0-0-0-1-0-1l-0-12c-0-1-0-1-0-2l-0-15c-0-1-0-2-0-2l-0-14c-0-1-0-2-0-3l-0-22c-0-1-0-3-0-4l-0-28c-0-2-0-4-0-5l-0-50c-0-2-0-5-0-7l-0-84c0-22-18-40-40-40zM710 282c-16-16-41-16-57 0v0l-134 134-131-131c-16-16-41-16-57 0-16 16-16 41-0 57v0l131 131-132 132c-15 16-15 41 1 56 16 16 41 16 57 0v0l131-131 134 134c16 16 41 16 57 0 16-16 16-41 0-57v0l-134-133 134-133c16-16 16-41 0-57z"],w:1600},xinjs:{p:["M937 548c14 14 14 37 0 51l-113 113-178 178c-14 14-37 14-51-0-14-14-14-37 0-51l290-291c14-14 37-14 51 0zM924 560c-7-7-19-7-27-0l-0 0-290 291c-7 7-7 20 0 27 7 7 19 7 27 0l0-0 12-12 21-21 231-232 26-26c7-7 7-20-0-27z","M512 900c20 0 36-16 36-36v-291c0-20-16-36-36-36-20 0-36 16-36 36v291c0 20 16 36 36 36zM511 882c-10 0-19-8-19-19l-0-1v-292c0-11 9-19 19-19 10 0 19 8 19 19l0 1 0 40-0 131-0 121c0 11-9 19-19 19z","M429 889c14-14 14-37 0-52l-121-121 121-121c14-14 14-37 0-52-14-14-37-14-51 0l-121 121-119-119c-14-14-37-14-51 0-14 14-14 37-1 51l1 1 119 119-119 119c-14 14-14 37 0 52 14 14 37 14 51 0l119-119 121 121c14 14 37 14 51 0zM418 876c-7 7-19 7-27 0l-0-0-133-133-131 130c-7 7-20 7-27-0-7-7-7-19-0-27l0-0 131-130-131-131c-7-7-7-19 0-27 7-7 19-7 27-0l0 0 131 130 133-133c7-7 20-7 27 0 7 7 7 19 0 27l-0 0-134 132 134 132c7 7 7 19 0 27l-0 0z","M594 142c14-14 37-14 51-0 205 205 222 221 291 290 14 14 14 37 0 51-14 14-37 14-51 0l-291-290c-14-14-14-37 0-51z","M511 130c20 0 36 16 36 36 0 290 0 193 0 291 0 20-16 36-36 36-20 0-36-16-36-36v-291c0-20 16-36 36-36z","M378 140c14-14 37-14 51 0 14 14 14 37 0 51l-121 120 121 120c14 14 14 37 0 51-14 14-37 14-51 0l-121-121-119 118c-14 14-37 14-51-0-14-14-14-37-1-51l1-1 119-118-119-118c-14-14-14-37 0-51 14-14 37-14 51-0l119 118 121-121z"]},xinie:"M668 46c10 0 20 4 29 8 23 12 36 33 29 46v0l-25 60c3 8 5 17 6 25 6 41-8 83-32 117-14 19-32 36-53 47 23 16 42 37 57 60 51 23 98 75 99 133 0 16-3 30-9 45-14 33-38 58-72 71-8 19-4 10-13 27-42 78-166 124-167 205-0 66 36 122 105 134-24 0-40 0-53 0l-3 0c-0 0-1 0-1 0l-7 0c-1 0-2 0-2-0l-8-0c-0-0-1-0-1-0l-4-0c-0-0-1-0-1-0l-2-0c-0-0-1-0-1-0l-3-0c-0-0-1-0-1-0l-3-0c-0-0-1-0-1-0l-4-0c-0-0-1-0-1-0l-14 0c-0 0-1 0-1 0l-3 0c-0 0-1 0-2 0l-3 0c-8 0-17 0-28 0-71-21-128-71-169-131-77-115-98-252-62-384-35-38-39-85-17-131 7-13 16-26 27-36 36-35 96-50 143-29 7-4 15-6 23-8 6-2 13-3 20-4-9-22-6-46 1-68 13-37 62-57 62-57 0 0 5-27 32-56 19-19 55-29 82-24v0l27-39c6-9 15-10 25-11zM453 563l0 0c7 11 51 80 131 110 101 39 109-12 109-13-168 9-232-86-239-97zM553 504c-48-2-85 16-152 44-53 22-144-28-144-28s66 46 154 44c20-0 32-3 42-6 7-2 20-32 96-34 6-0 13-0 21-0l3 0c5 0 10 0 14 0l3 0 3 0c38 1 75 3 75 3s-69-20-115-22zM400 320c0 0 0 0 0 1l0 0c2 7 9 35 2 51-9 23-23 36-25 37l-0 0 0 0c4 0 95 8 138 22 52 17 98 51 99 52l0 0c0 0-53-50-98-68-38-15-109-18-109-18s22-26 9-48c-12-22-19-30-19-30zM633 102l0 0c2 1 12 4 36 20 24 17 31 34 31 34 1-2 1-3 2-5l1-1 0-1c0-0 0-1 1-1l0-1c3-8 6-15-4-24-12-11-60-20-66-21l-0-0z",html5:"M61 0l82 922 369 102 370-103 82-921h-903zM785 301h-433l10 116h412l-31 347-232 64-232-64-16-178h113l8 90 126 34 0-0 126-34 13-147h-392l-30-342h566l-10 113z",bug:{p:["M933 549c0 20-17 37-37 37h-128c0 71-15 125-38 166l119 119c14 14 14 37 0 51-7 7-17 11-26 11s-19-3-26-11l-113-113s-75 69-172 69v-512h-73v512c-103 0-179-75-179-75l-105 118c-7 8-17 12-27 12-9 0-17-3-25-9-15-14-16-37-3-52l115-130c-20-39-33-90-33-157h-128c-20 0-37-17-37-37s17-37 37-37h128v-168l-99-99c-14-14-14-37 0-51s37-14 51 0l99 99h482l99-99c14-14 37-14 51 0s14 37 0 51l-99 99v168h128c20 0 37 17 37 37zM658 219h-366c0-101 82-183 183-183s183 82 183 183z"],w:951}};/*!
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
*/var{svg:Tl,path:ho}=Dn;function jl(e){let t=Cn[e];if(t===void 0)console.warn(`icon ${e} not found`),t=Cn.square;return typeof t!=="string"?t:{w:1024,h:1024,p:[t]}}var Il=(e,t)=>{Cn[e]=t},Jt=(e,t,n,i=1)=>{if(t!==void 0){for(let a of[...e.querySelectorAll("path")])if(a.setAttribute("fill",t),n!==void 0)a.setAttribute("stroke",n),a.setAttribute("stroke-width",String(Number(i)*32))}return e.setAttribute("xmlns","http://www.w3.org/2000/svg"),`url(data:image/svg+xml;charset=UTF-8,${encodeURIComponent(e.outerHTML)})`},A=new Proxy(Cn,{get(e,t){let n=jl(t);return n===void 0?void 0:(...i)=>{let{w:o,h:a}=Object.assign({w:1024,h:1024},n);return Tl({viewBox:`0 0 ${o} ${a}`,class:"icon-"+t.replace(/([a-z])([A-Z])/g,(s,l,r)=>l+"-"+r.toLocaleLowerCase())},...i,...n.p.map((s,l)=>{let r=Array.from(new Set(n.c));return n.c?ho({d:s,style:{fill:`var(--icon-fill-${r.indexOf(n.c[l])}, ${n.c[l]})`}}):ho({d:s})}))}}});class Qt extends H{icon="";size=0;color="";stroke="";strokeWidth=1;constructor(){super();this.initAttributes("icon","size","color","stroke","strokeWidth")}render(){this.textContent="";let e={};if(this.size)e.height=this.size;if(this.stroke)e.stroke=this.stroke,e.strokeWidth=this.strokeWidth*32;if(this.color.match(/linear-gradient/)){let t=this.color.split("-")[0],[,n]=this.color.match(/[a-z-]+\((.*)\)/)||[],[,i]=n.match(/(\d+)deg/)||[],a=(n.match(/(#|rgb|hsl).*?%/g)||[]).map((d)=>{let[,p,g]=d.match(/^(.*)\s(\d+%)$/)||["black","100%"];return`<stop offset="${g}" stop-color="${ue.fromCss(p).html}" ></stop>`}).join(""),s="";if(i)s=` gradientTransform="rotate(${parseFloat(i).toFixed(0)})"`;let l=Dn.defs(),r="g-"+Math.floor(Math.random()*Number.MAX_SAFE_INTEGER);l.innerHTML=`<${t}Gradient id="${r}" ${s}>${a}</${t}Gradient>`,e.fill=`url(#${r})`,this.append(A[this.icon]({style:e},l))}else e.fill=this.color,this.append(A[this.icon]({style:e}))}}var El=Qt.elementCreator({tag:"xin-icon",styleSpec:{":host":{verticalAlign:"text-bottom"}}});/*!
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
*/var po=()=>{};class Zt extends H{babylonReady;BABYLON;static styleSpec={":host":{display:"block",position:"relative"},":host canvas":{width:"100%",height:"100%"},":host .babylonVRicon":{height:50,width:80,backgroundColor:"transparent",filter:"drop-shadow(0 0 4px #000c)",backgroundImage:Jt(A.xr(),"#fffd"),backgroundPosition:"center",backgroundRepeat:"no-repeat",border:"none",borderRadius:5,borderStyle:"none",outline:"none",transition:"transform 0.125s ease-out"},":host .babylonVRicon:hover":{transform:"scale(1.1)"}};content=P.canvas({part:"canvas"});constructor(){super();this.babylonReady=(async()=>{let{BABYLON:e}=await re("https://cdn.babylonjs.com/babylon.js","BABYLON");return e})()}scene;engine;sceneCreated=po;update=po;_update=()=>{if(this.scene){if(this.update!==void 0)this.update(this,this.BABYLON);if(this.scene.activeCamera!==void 0)this.scene.render()}};onResize(){if(this.engine)this.engine.resize()}loadScene=async(e,t,n)=>{let{BABYLON:i}=await re("https://cdn.babylonjs.com/loaders/babylonjs.loaders.min.js","BABYLON");i.SceneLoader.Append(e,t,this.scene,n)};loadUI=async(e)=>{let{BABYLON:t}=await re("https://cdn.babylonjs.com/gui/babylon.gui.min.js","BABYLON"),n=t.GUI.AdvancedDynamicTexture.CreateFullscreenUI("GUI",!0,this.scene),{snippetId:i,jsonUrl:o,data:a,size:s}=e;if(s)n.idealWidth=s,n.renderAtIdealSize=!0;let l;if(i)l=await n.parseFromSnippetAsync(i);else if(o)l=await n.parseFromURLAsync(o);else if(a)l=n.parseContent(a);else return null;let r=n.getChildren()[0],d=r.children.reduce((p,g)=>{return p[g.name]=g,p},{});return{advancedTexture:n,gui:l,root:r,widgets:d}};connectedCallback(){super.connectedCallback();let{canvas:e}=this.parts;this.babylonReady.then(async(t)=>{if(this.BABYLON=t,this.engine=new t.Engine(e,!0),this.scene=new t.Scene(this.engine),this.sceneCreated)await this.sceneCreated(this,t);if(this.scene.activeCamera===void 0)new t.ArcRotateCamera("default-camera",-Math.PI/2,Math.PI/2.5,3,new t.Vector3(0,0,0)).attachControl(this.parts.canvas,!0);this.engine.runRenderLoop(this._update)})}}var Al=Zt.elementCreator({tag:"xin-3d"});/*!
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
*/class ln extends H{content=null;src="";json="";config={renderer:"svg",loop:!0,autoplay:!0};static bodymovinAvailable;animation;static styleSpec={":host":{width:400,height:400,display:"inline-block"}};_loading=!1;get loading(){return this._loading}constructor(){super();if(this.initAttributes("src","json"),ln.bodymovinAvailable===void 0)ln.bodymovinAvailable=re("https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js","bodymovin")}doneLoading=()=>{this._loading=!1};load=({bodymovin:e})=>{if(this._loading=!0,this.config.container=this.shadowRoot!==null?this.shadowRoot:void 0,this.json!=="")this.config.animationData=this.json,delete this.config.path;else if(this.src!=="")delete this.config.animationData,this.config.path=this.src;else console.log("%c<xin-lottie>%c expected either %cjson%c (animation data) or %csrc% c(url) but found neither.","color: #44f; background: #fff; padding: 0 5px","color: default","color: #44f; background: #fff; padding: 0 5px","color: default","color: #44f; background: #fff; padding: 0 5px","color: default");if(this.animation){this.animation.destroy();let t=this.shadowRoot;if(t!==null)t.querySelector("svg")?.remove()}this.animation=e.loadAnimation(this.config),this.animation.addEventListener("DOMLoaded",this.doneLoading)};render(){super.render(),ln.bodymovinAvailable.then(this.load).catch((e)=>{console.error(e)})}}var Ll=ln.elementCreator({tag:"xin-lottie"});/*!
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
*/var{button:ei,slot:kl,div:nt}=P;class ni extends H{arrows=!1;dots=!1;loop=!1;maxVisibleItems=1;snapDelay=0.1;snapDuration=0.25;auto=0;timeout;autoAdvance=()=>{if(clearTimeout(this.timeout),this.auto>0)this.timeout=setTimeout(this.forward,this.auto*1000)};_page=0;get page(){return this._page}set page(e){let{scroller:t,back:n,forward:i}=this.parts;if(this.lastPage<=0)i.disabled=n.disabled=!0,e=0;else e=Math.max(0,Math.min(this.lastPage,e)),e=isNaN(e)?0:e;if(this._page!==e)this._page=isNaN(e)?0:e,this.animateScroll(this._page*t.offsetWidth),n.disabled=this.page<=0&&!this.loop,i.disabled=this.page>=this.lastPage&&!this.loop}get visibleItems(){return[...this.children].filter((e)=>getComputedStyle(e).display!=="none")}get lastPage(){return Math.max(Math.ceil(this.visibleItems.length/(this.maxVisibleItems||1))-1,0)}static styleSpec={":host":{display:"flex",flexDirection:"column",position:"relative"},":host svg":{height:y.carouselIconSize},":host button":{outline:"none",border:"none",boxShadow:"none",background:"transparent",fill:y.carouselButtonColor,padding:0},":host::part(back), :host::part(forward)":{position:"absolute",top:0,bottom:0,width:y.carouseButtonWidth,zIndex:2},":host::part(back)":{left:0},":host::part(forward)":{right:0},":host button:disabled":{opacity:0.5,pointerEvents:"none"},":host button:hover":{fill:y.carouselButtonHoverColor},":host button:active":{fill:y.carouselButtonActiveColor},":host::part(pager)":{position:"relative"},":host::part(scroller)":{overflow:"auto hidden",position:"relative"},":host::part(grid)":{display:"grid",justifyItems:"center"},":host *::-webkit-scrollbar, *::-webkit-scrollbar-thumb":{display:"none"},":host .dot":{background:y.carouselButtonColor,borderRadius:y.carouselDotSize,height:y.carouselDotSize,width:y.carouselDotSize,transition:y.carouselDotTransition},":host .dot:not(.current):hover":{background:y.carouselButtonHoverColor,height:y.carouselDotSize150,width:y.carouselDotSize150,margin:y.carouselDotSize_25},":host .dot:not(.current):active":{background:y.carouselButtonActiveColor},":host .dot.current":{background:y.carouselDotCurrentColor},":host::part(progress)":{display:"flex",gap:y.carouselDotSpacing,justifyContent:"center",padding:y.carouselProgressPadding}};easing=(e)=>{return Math.sin(e*Math.PI*0.5)};indicateCurrent=()=>{let{scroller:e,progress:t}=this.parts,n=e.scrollLeft/e.offsetWidth;[...t.children].forEach((i,o)=>{i.classList.toggle("current",Math.floor(o/this.maxVisibleItems-n)===0)}),clearTimeout(this.snapTimer),this.snapTimer=setTimeout(this.snapPosition,this.snapDelay*1000)};snapPosition=()=>{let{scroller:e}=this.parts,t=e.scrollLeft/e.offsetWidth;if(t!==this.page)this.page=t>this.page?Math.ceil(t):Math.floor(t);this.autoAdvance()};back=()=>{this.page=this.page>0?this.page-1:this.lastPage};forward=()=>{this.page=this.page<this.lastPage?this.page+1:0};handleDotClick=(e)=>{let{progress:t}=this.parts,n=[...t.children].indexOf(e.target);if(n>-1)this.page=Math.floor(n/this.maxVisibleItems)};snapTimer;animationFrame;animateScroll(e,t=-1,n=0){cancelAnimationFrame(this.animationFrame);let{scroller:i}=this.parts;if(t===-1){t=i.scrollLeft,n=Date.now(),this.animationFrame=requestAnimationFrame(()=>{this.animateScroll(e,t,n)});return}let o=(Date.now()-n)/1000;if(o>=this.snapDuration||Math.abs(i.scrollLeft-e)<2)i.scrollLeft=e,this.animationFrame=null;else i.scrollLeft=t+this.easing(o/this.snapDuration)*(e-t),this.animationFrame=requestAnimationFrame(()=>{this.animateScroll(e,t,n)})}content=()=>[nt({part:"pager"},ei({title:"previous slide",part:"back"},A.chevronLeft()),nt({title:"slides",role:"group",part:"scroller"},nt({part:"grid"},kl())),ei({title:"next slide",part:"forward"},A.chevronRight())),nt({title:"choose slide to display",role:"group",part:"progress"})];constructor(){super();this.initAttributes("dots","arrows","maxVisibleItems","snapDuration","loop","auto")}connectedCallback(){super.connectedCallback(),this.ariaRoleDescription="carousel",this.ariaOrientation="horizontal",this.ariaReadOnly="true";let{back:e,forward:t,scroller:n,progress:i}=this.parts;e.addEventListener("click",this.back),t.addEventListener("click",this.forward),n.addEventListener("scroll",this.indicateCurrent),i.addEventListener("click",this.handleDotClick),this.autoAdvance()}disconnectedCallback(){clearTimeout(this.timeout)}render(){super.render();let{dots:e,arrows:t,visibleItems:n,lastPage:i}=this,{progress:o,back:a,forward:s,grid:l}=this.parts;n.forEach((r)=>{r.role="group"}),l.style.gridTemplateColumns=`${100/this.maxVisibleItems/(1+this.lastPage)}% `.repeat(n.length).trim(),l.style.width=(1+this.lastPage)*100+"%",o.textContent="",o.append(...n.map((r,d)=>ei({title:`item ${d+1}`,class:"dot"}))),this.indicateCurrent(),o.style.display=e&&i>0?"":"none",a.hidden=s.hidden=!(t&&i>0)}}var Fl=ni.elementCreator({tag:"xin-carousel",styleSpec:{":host":{_carouselIconSize:24,_carouselButtonColor:"#0004",_carouselButtonHoverColor:"#0006",_carouselButtonActiveColor:"#000c",_carouseButtonWidth:48,_carouselDotCurrentColor:"#0008",_carouselDotSize:8,_carouselDotSpacing:y.carouselDotSize,_carouselProgressPadding:12,_carouselDotTransition:"0.125s ease-in-out"},":host:focus":{outline:"none",boxShadow:"none"}}});/*!
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
*/var uo="https://cdnjs.cloudflare.com/ajax/libs/ace/1.23.2/",go="ace/theme/tomorrow",Ol=async(e,t="html",n={},i=go)=>{let{ace:o}=await re(`${uo}ace.min.js`);o.config.set("basePath",uo);let a=o.edit(e,{mode:`ace/mode/${t}`,tabSize:2,useSoftTabs:!0,useWorker:!1,...n});return a.setTheme(i),a};class Ne extends H{source="";get value(){return this.editor===void 0?this.source:this.editor.getValue()}set value(e){if(this.editor===void 0)this.source=e;else this.editor.setValue(e),this.editor.clearSelection(),this.editor.session.getUndoManager().reset()}mode="javascript";disabled=!1;role="code editor";get editor(){return this._editor}_editor;_editorPromise;options={};theme=go;static styleSpec={":host":{display:"block",position:"relative",width:"100%",height:"100%"}};constructor(){super();this.initAttributes("mode","theme","disabled")}onResize(){if(this.editor!==void 0)this.editor.resize(!0)}connectedCallback(){if(super.connectedCallback(),this.source==="")this.value=this.textContent!==null?this.textContent.trim():"";if(this._editorPromise===void 0)this._editorPromise=Ol(this,this.mode,this.options,this.theme),this._editorPromise.then((e)=>{this._editor=e,e.setValue(this.source,1),e.clearSelection(),e.session.getUndoManager().reset()})}render(){if(super.render(),this._editorPromise!==void 0)this._editorPromise.then((e)=>e.setReadOnly(this.disabled))}}var Tn=Ne.elementCreator({tag:"xin-code"});/*!

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
*/var{input:ti}=P,mo=ue.fromCss("#8888");class fo extends H{value=mo.rgba;color=mo;static styleSpec={":host":{_gap:8,_swatchSize:32,_cssWidth:72,_alphaWidth:72,display:"inline-flex",gap:y.gap,alignItems:"center"},':host input[type="color"]':{border:0,width:y.swatchSize,height:y.swatchSize},":host::part(alpha)":{width:y.alphaWidth},":host::part(css)":{width:y.cssWidth,fontFamily:"monospace"}};content=[ti({title:"base color",type:"color",part:"rgb"}),ti({type:"range",title:"opacity",part:"alpha",min:0,max:1,step:0.05}),ti({title:"css color spec",part:"css"})];valueChanged=!1;update=(e)=>{let{rgb:t,alpha:n,css:i}=this.parts;if(e.type==="input")this.color=ue.fromCss(t.value),this.color.a=Number(n.value),i.value=this.color.html;else this.color=ue.fromCss(i.value),t.value=this.color.html.substring(0,7),n.value=String(this.color.a);t.style.opacity=String(this.color.a),this.value=this.color.rgba,this.valueChanged=!0};connectedCallback(){super.connectedCallback();let{rgb:e,alpha:t,css:n}=this.parts;e.addEventListener("input",this.update),t.addEventListener("input",this.update),n.addEventListener("change",this.update)}render(){if(this.valueChanged){this.valueChanted=!1;return}let{rgb:e,alpha:t,css:n}=this.parts;this.color=ue.fromCss(this.value),e.value=this.color.html.substring(0,7),e.style.opacity=String(this.color.a),t.value=String(this.color.a),n.value=this.color.html}}var ii=fo.elementCreator({tag:"xin-color"});/*!
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
*/var Se=P.div({style:{content:" ",position:"fixed",top:0,left:0,right:0,bottom:0}}),tt={passive:!0},le=(e,t,n="move")=>{if(!e.type.startsWith("touch")){let{clientX:o,clientY:a}=e;Se.style.cursor=n,Ce(Se),document.body.append(Se);let s=(l)=>{let r=l.clientX-o,d=l.clientY-a;if(t(r,d,l)===!0)Se.removeEventListener("mousemove",s),Se.removeEventListener("mouseup",s),Se.remove()};Se.addEventListener("mousemove",s,tt),Se.addEventListener("mouseup",s,tt)}else if(e instanceof TouchEvent){let o=e.changedTouches[0],a=o.identifier,s=o.clientX,l=o.clientY,r=e.target,d=0,p=0,g=(f)=>{let z=[...f.touches].find((x)=>x.identifier===a);if(z!==void 0)d=z.clientX-s,p=z.clientY-l;if(f.type==="touchmove")f.stopPropagation(),f.preventDefault();if(t(d,p,f)===!0||z===void 0)r.removeEventListener("touchmove",g),r.removeEventListener("touchend",g),r.removeEventListener("touchcancel",g)};r.addEventListener("touchmove",g),r.addEventListener("touchend",g,tt),r.addEventListener("touchcancel",g,tt)}},jn=(e="body *")=>[...document.querySelectorAll(e)].map((t)=>parseFloat(getComputedStyle(t).zIndex)).reduce((t,n)=>isNaN(t)||Number(t)<n?n:Number(t),0),Ce=(e,t="body *")=>{e.style.zIndex=String(jn(t)+1)};/*!
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
*/var{slot:Dl}=P;class Te extends H{static floats=new Set;drag=!1;remainOnResize="remove";remainOnScroll="remain";content=Dl();static styleSpec={":host":{position:"fixed"}};constructor(){super();this.initAttributes("drag","remainOnResize","remainOnScroll")}reposition=(e)=>{if(e.target?.closest(".no-drag"))return;if(this.drag){Ce(this);let n=this.offsetLeft,i=this.offsetTop;le(e,(o,a,s)=>{if(this.style.left=`${n+o}px`,this.style.top=`${i+a}px`,this.style.right="auto",this.style.bottom="auto",s.type==="mouseup")return!0})}};connectedCallback(){super.connectedCallback(),Te.floats.add(this);let e={passive:!0};this.addEventListener("touchstart",this.reposition,e),this.addEventListener("mousedown",this.reposition,e),Ce(this)}disconnectedCallback(){super.disconnectedCallback(),Te.floats.delete(this)}}var it=Te.elementCreator({tag:"xin-float"});window.addEventListener("resize",()=>{[...Te.floats].forEach((e)=>{if(e.remainOnResize==="hide")e.hidden=!0;else if(e.remainOnResize==="remove")e.remove()})},{passive:!0});document.addEventListener("scroll",(e)=>{if(e.target instanceof HTMLElement&&e.target.closest(Te.tagName))return;[...Te.floats].forEach((t)=>{if(t.remainOnScroll==="hide")t.hidden=!0;else if(t.remainOnScroll==="remove")t.remove()})},{passive:!0,capture:!0});/*!
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

*/var oi=(e)=>{let{content:t,target:n,position:i}=e,o=Array.isArray(t)?it(...t):it(t);return bo(o,n,i),document.body.append(o),o},bo=(e,t,n)=>{{let{position:g}=getComputedStyle(e);if(g!=="fixed")e.style.position="fixed";Ce(e)}let{left:i,top:o,width:a,height:s}=t.getBoundingClientRect(),l=i+a*0.5,r=o+s*0.5,d=window.innerWidth,p=window.innerHeight;if(n==="side")n=(l<d*0.5?"e":"w")+(r<p*0.5?"s":"n");else if(n==="auto"||n===void 0)n=(r<p*0.5?"s":"n")+(l<d*0.5?"e":"w");if(e.style.top=e.style.left=e.style.right=e.style.bottom=e.style.transform="",n.length===2){let[g,f]=n;switch(g){case"n":e.style.bottom=(p-o).toFixed(2)+"px";break;case"e":e.style.left=(i+a).toFixed(2)+"px";break;case"s":e.style.top=(o+s).toFixed(2)+"px";break;case"w":e.style.right=(d-i).toFixed(2)+"px";break}switch(f){case"n":e.style.bottom=(p-o-s).toFixed(2)+"px";break;case"e":e.style.left=i.toFixed(2)+"px";break;case"s":e.style.top=o.toFixed(2)+"px";break;case"w":e.style.right=(d-i-a).toFixed(2)+"px";break}e.style.transform=""}else if(n==="n")e.style.bottom=(p-o).toFixed(2)+"px",e.style.left=l.toFixed(2)+"px",e.style.transform="translateX(-50%)";else if(n==="s")e.style.top=(o+s).toFixed(2)+"px",e.style.left=l.toFixed(2)+"px",e.style.transform="translateX(-50%)";else if(n==="e")e.style.left=(i+a).toFixed(2)+"px",e.style.top=r.toFixed(2)+"px",e.style.transform="translateY(-50%)";else if(n==="w")e.style.right=(d-i).toFixed(2)+"px",e.style.top=r.toFixed(2)+"px",e.style.transform="translateY(-50%)";e.style.setProperty("--max-height",`calc(100vh - ${e.style.top||e.style.bottom})`),e.style.setProperty("--max-width",`calc(100vw - ${e.style.left||e.style.right})`)};/*!
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
*/var{div:vo,button:xo,span:je,a:ql}=P;hn("xin-menu-helper",{".xin-menu":{overflow:"hidden auto",maxHeight:`calc(${y.maxHeight} - ${D.menuInset("8px")})`,borderRadius:y.spacing50,background:D.menuBg("#fafafa"),boxShadow:`${y.spacing13} ${y.spacing50} ${y.spacing} ${y.shadowColor}`},".xin-menu > div":{width:D.menuWidth("auto")},".xin-menu-trigger":{paddingLeft:0,paddingRight:0,minWidth:D.touchSize("48px")},".xin-menu-separator":{display:"inline-block",content:" ",height:"1px",width:"100%",background:D.menuItemColor("#222"),opacity:0.25,margin:D.menuSeparatorMargin("8px 0")},".xin-menu-item":{boxShadow:"none",border:"none !important",display:"grid",alignItems:"center",justifyContent:"flex-start",textDecoration:"none",gridTemplateColumns:"0px 1fr 30px",width:"100%",gap:0,background:"transparent",padding:D.menuItemPadding("0 16px"),height:D.menuItemHeight("48px"),lineHeight:D.menuItemHeight("48px"),textAlign:"left"},".xin-menu-item, .xin-menu-item > span":{color:D.menuItemColor("#222")},".xin-menu-with-icons .xin-menu-item":{gridTemplateColumns:"30px 1fr 30px"},".xin-menu-item svg":{fill:D.menuItemIconColor("#222")},".xin-menu-item.xin-menu-item-checked":{background:D.menuItemHoverBg("#eee")},".xin-menu-item > span:nth-child(2)":{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textAlign:"left"},".xin-menu-item:hover":{boxShadow:"none !important",background:D.menuItemHoverBg("#eee")},".xin-menu-item:active":{boxShadow:"none !important",background:D.menuItemActiveBg("#aaa"),color:D.menuItemActiveColor("#000")},".xin-menu-item:active svg":{fill:D.menuItemIconActiveColor("#000")}});var yo=(e)=>{let t=e.checked&&e.checked()&&"check"||!1,n=e?.icon||t||je(" ");if(typeof n==="string")n=A[n]();let i;if(typeof e?.action==="string")i=ql({class:"xin-menu-item",href:e.action},n,je(e.caption),je(e.shortcut||" "));else i=xo({class:"xin-menu-item",onClick:e.action},n,je(e.caption),je(e.shortcut||" "));if(i.classList.toggle("xin-menu-item-checked",t!==!1),e?.enabled&&!e.enabled())i.setAttribute("disabled","");return i},wo=(e,t)=>{let n=e.checked&&e.checked()&&"check"||!1,i=e?.icon||n||je(" ");if(typeof i==="string")i=A[i]();let o=xo({class:"xin-menu-item",disabled:!(!e.enabled||e.enabled()),onClick(a){ve(Object.assign({},t,{menuItems:e.menuItems,target:o,submenuDepth:(t.submenuDepth||0)+1,position:"side"})),a.stopPropagation(),a.preventDefault()}},i,je(e.caption),A.chevronRight({style:{justifySelf:"flex-end"}}));return o},Mo=(e,t)=>{if(e===null)return je({class:"xin-menu-separator"});else if(e?.action)return yo(e);else return wo(e,t)},zo=(e)=>{let{target:t,width:n,menuItems:i}=e,o=i.find((a)=>a?.icon||a?.checked);return vo({class:o?"xin-menu xin-menu-with-icons":"xin-menu",onClick(){Ie(0)}},vo({style:{minWidth:t.offsetWidth+"px",width:typeof n==="number"?`${n}px`:n},onMousedown(a){a.preventDefault(),a.stopPropagation()}},...i.map((a)=>Mo(a,e))))},rn,ot=[],Ie=(e=0)=>{let t=ot.splice(e);for(let n of t)n.menu.remove();return rn=t[0],e>0?ot[e-1]:void 0};document.body.addEventListener("mousedown",(e)=>{if(e.target&&!ot.find((t)=>t.target.contains(e.target)))Ie(0)});document.body.addEventListener("keydown",(e)=>{if(e.key==="Escape")Ie(0)});var ve=(e)=>{e=Object.assign({submenuDepth:0},e);let{target:t,position:n,submenuDepth:i}=e;if(rn&&!document.body.contains(rn?.menu))rn=void 0;if(i===0&&rn?.target===t)return;let o=Ie(i);if(rn?.target===t)return;if(o&&o.target===t){Ie();return}let a=zo(e),s=oi({content:a,target:t,position:n});s.remainOnScroll="remove",ot.push({target:t,menu:s})};var st={};St(st,{init:()=>si,draggedElement:()=>Nl});/*!
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
*/var Hl=()=>!!document.querySelector(".drag-source"),To=(e,t)=>{if(!e)return!1;for(let n of e)if(n==="special/any")return!0;else if(n.indexOf("*")>-1){let[i,o]=n.split("/"),[a,s]=t.split("/");if((i==="*"||i===a)&&(o==="*"||o===s))return!0}else if(n===t)return!0},at=(e)=>{for(let t of[...document.querySelectorAll(`.${e}`)])t.classList.remove(e)},jo=()=>{at("drag-over"),at("drag-source"),at("drag-target")},ai=(e,t=";")=>{return(e||"").split(t).map((n)=>n.trim()).filter((n)=>n!=="")},Io=(e)=>{if(!e)e=[];let t=[...document.querySelectorAll("[data-drop]")];for(let n of t){let i=ai(n.dataset.drop);if(e.find((o)=>To(i,o)))n.classList.add("drag-target");else n.classList.remove("drag-target")}};function Pl(e){let t=e.target?.closest('[draggable="true"],a[href]');if(!t)return;t.classList.add("drag-source");let n=t.matches('[draggable="true"]')?ai(t.dataset.drag||"text/html"):ai(t.dataset.drag||"url");for(let i of n){let o=t.dataset.dragContent||(i==="text/html"?t.innerHTML:t.textContent);e.dataTransfer?.setData(i,o||"")}Io(e.dataTransfer?.types),e.stopPropagation()}function So(e){if(!Hl())Io(e.dataTransfer?.types);let t=e.target.closest(".drag-target");if(t&&e.dataTransfer)t.classList.add("drag-over"),e.dataTransfer.dropEffect="copy";else e.preventDefault(),e.stopPropagation()}function _l(){at("drag-over")}function Bl(e){let t=e.target.closest(".drag-target");if(t){let n=(t.dataset?.drop||"").split(";");for(let i of n)if(To(e.dataTransfer?.types,i))if(i==="text/html")t.innerHTML=e.dataTransfer?.getData(i)||"";else t.textContent=e.dataTransfer?.getData(i)||""}jo()}var Nl=()=>document.querySelector(".drag-source"),Co=!1,si=()=>{if(Co)return;document.body.addEventListener("dragstart",Pl),document.body.addEventListener("dragenter",So),document.body.addEventListener("dragover",So),document.body.addEventListener("drop",Bl),document.body.addEventListener("dragleave",_l),document.body.addEventListener("dragend",jo),window.addEventListener("dragover",(e)=>e.preventDefault()),window.addEventListener("drop",(e)=>e.preventDefault()),Co=!0};/*!
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
*/function Vl(e,t,n){let i=e.find((o)=>o[t]!==void 0&&o[t]!==null);if(i!==void 0){let o=i[t];switch(typeof o){case"string":if(o.match(/^\d+(\.\d+)?$/))return 6*n;else if(o.includes(" "))return 20*n;else return 12*n;case"number":return 6*n;case"boolean":return 5*n;case"object":return!1;default:return 8*n}}return!1}var{div:cn,span:lt,button:Wl,template:$l}=P,Eo=(e)=>e;class li extends H{select=!1;multiple=!1;nosort=!1;nohide=!1;noreorder=!1;selectionChanged=()=>{};selectedKey=Symbol("selected");selectBinding=(e,t)=>{e.toggleAttribute("aria-selected",t[this.selectedKey]===!0)};pinnedTop=0;pinnedBottom=0;maxVisibleRows=1e4;get value(){return{array:this.array,filter:this.filter,columns:this.columns}}set value(e){let{array:t,columns:n,filter:i}=Fe(e);if(this._array!==t||this._columns!==n||this._filter!==i)this.queueRender();this._array=t||[],this._columns=n||null,this._filter=i||Eo}rowData={visible:[],pinnedTop:[],pinnedBottom:[]};_array=[];_columns=null;_filter=Eo;charWidth=15;rowHeight=30;minColumnWidth=30;get virtual(){return this.rowHeight>0?{height:this.rowHeight}:void 0}constructor(){super();this.rowData=Oe({[this.instanceId]:this.rowData},!0)[this.instanceId],this.initAttributes("rowHeight","charWidth","minColumnWidth","select","multiple","pinnedTop","pinnedBottom","nosort","nohide","noreorder")}get array(){return this._array}set array(e){this._array=Fe(e),this.queueRender()}get filter(){return this._filter}set filter(e){if(this._filter!==e)this._filter=e,this.queueRender()}get sort(){if(this._sort)return this._sort;let e=this._columns?.find((n)=>n.sort==="ascending"||n.sort==="descending");if(!e)return;let{prop:t}=e;return e.sort==="ascending"?(n,i)=>n[t]>i[t]?1:-1:(n,i)=>n[t]>i[t]?-1:1}set sort(e){if(this._sort!==e)this._sort=e,this.queueRender()}get columns(){if(!Array.isArray(this._columns)){let{_array:e}=this;this._columns=Object.keys(e[0]||{}).map((t)=>{let n=Vl(e,t,this.charWidth);return{name:t.replace(/([a-z])([A-Z])/g,"$1 $2").toLocaleLowerCase(),prop:t,align:typeof e[0][t]==="number"||e[0][t]!==""&&!isNaN(e[0][t])?"right":"left",visible:n!==!1,width:n?n:0}})}return this._columns}set columns(e){this._columns=e,this.queueRender()}get visibleColumns(){return this.columns.filter((e)=>e.visible!==!1)}content=null;getColumn(e){let t=(e.touches!==void 0?e.touches[0].clientX:e.clientX)-this.getBoundingClientRect().x,n=e.touches!==void 0?20:5,i=0,o=[];return this.visibleColumns.find((s)=>{if(s.visible!==!1)return i+=s.width,o.push(i),Math.abs(t-i)<n})}setCursor=(e)=>{if(this.getColumn(e)!==void 0)this.style.cursor="col-resize";else this.style.cursor=""};resizeColumn=(e)=>{let t=this.getColumn(e);if(t!==void 0){let n=Number(t.width),i=e.touches!==void 0,o=i?e.touches[0].identifier:void 0;le(e,(a,s,l)=>{if((i?[...l.touches].find((p)=>p.identifier===o):!0)===void 0)return!0;let d=n+a;if(t.width=d>this.minColumnWidth?d:this.minColumnWidth,this.setColumnWidths(),l.type==="mouseup")return!0},"col-resize")}};selectRow(e,t=!0){if(t)e[this.selectedKey]=!0;else delete e[this.selectedKey]}selectRows(e,t=!0){for(let n of e||this.array)this.selectRow(n,t)}deSelect(e){this.selectRows(e,!1)}rangeStart;updateSelection=(e)=>{if(!this.select&&!this.multiple)return;let{target:t}=e;if(!(t instanceof HTMLElement))return;let n=t.closest(".tr");if(!(n instanceof HTMLElement))return;let i=pn(n);if(i===!1)return;let o=e,a=window.getSelection();if(a!==null)a.removeAllRanges();let s=this.visibleRows;if(this.multiple&&o.shiftKey&&s.length>0&&this.rangeStart!==i){let l=this.rangeStart===void 0||this.rangeStart[this.selectedKey]===!0,[r,d]=[this.rangeStart!==void 0?s.indexOf(this.rangeStart):0,s.indexOf(i)].sort((p,g)=>p-g);if(r>-1)for(let p=r;p<=d;p++){let g=s[p];this.selectRow(g,l)}}else if(this.multiple&&o.metaKey){this.selectRow(i,!i[this.selectedKey]);let l=s.indexOf(i),r=s[l+1],d=l>0?s[l-1]:void 0;if(r!==void 0&&r[this.selectedKey]===!0)this.rangeStart=r;else if(d!==void 0&&d[this.selectedKey]===!0)this.rangeStart=d;else this.rangeStart=void 0}else this.rangeStart=i,this.deSelect(),i[this.selectedKey]=!0;this.selectionChanged(this.visibleSelectedRows)};connectedCallback(){super.connectedCallback(),this.addEventListener("mousemove",this.setCursor),this.addEventListener("mousedown",this.resizeColumn),this.addEventListener("touchstart",this.resizeColumn,{passive:!0}),this.addEventListener("mouseup",this.updateSelection),this.addEventListener("touchend",this.updateSelection)}setColumnWidths(){this.style.setProperty("--grid-columns",this.visibleColumns.map((e)=>e.width+"px").join(" ")),this.style.setProperty("--grid-row-width",this.visibleColumns.reduce((e,t)=>e+t.width,0)+"px")}sortByColumn=(e,t="auto")=>{for(let n of this.columns.filter((i)=>Fe(i.sort)!==!1))if(Fe(n)===e){if(t==="auto")n.sort=n.sort==="ascending"?"descending":"ascending";else n.sort=t;this.queueRender()}else delete n.sort};popColumnMenu=(e,t)=>{let{sortByColumn:n}=this,i=this.columns.filter((s)=>s.visible===!1),o=this.queueRender.bind(this),a=[];if(!this.nosort&&t.sort!==!1)a.push({caption:"Sort Ascending",icon:"sortAscending",action(){n(t)}},{caption:"Sort Descending",icon:"sortDescending",action(){n(t,"descending")}});if(!this.nohide){if(a.length)a.push(null);a.push({caption:"Hide Column",icon:"eyeOff",enabled:()=>t.visible!==!0,action(){t.visible=!1,o()}},{caption:"Show Column",icon:"eye",enabled:()=>i.length>0,menuItems:i.map((s)=>{return{caption:s.name||s.prop,action(){delete s.visible,o()}}})})}ve({target:e,menuItems:a})};headerCell=(e)=>{let{popColumnMenu:t}=this,n="none",i;switch(e.sort){case"ascending":i=A.sortAscending(),n="descending";break;case!1:break;default:break;case"descending":n="ascending",i=A.sortDescending()}let o=!(this.nosort&&this.nohide)?Wl({class:"menu-trigger",onClick(a){t(a.target,e),a.stopPropagation()}},i||A.moreVertical()):{};return e.headerCell!==void 0?e.headerCell(e):lt({class:"th",role:"columnheader",ariaSort:n,style:{...this.cellStyle,textAlign:e.align||"left"}},lt(typeof e.name==="string"?e.name:e.prop),lt({style:{flex:"1"}}),o)};dataCell=(e)=>{if(e.dataCell!==void 0)return e.dataCell(e);return lt({class:"td",role:"cell",style:{...this.cellStyle,textAlign:e.align||"left"},bindText:`^.${e.prop}`})};get visibleRows(){return Fe(this.rowData.visible)}get visibleSelectedRows(){return this.visibleRows.filter((e)=>e[this.selectedKey])}get selectedRows(){return this.array.filter((e)=>e[this.selectedKey])}rowTemplate(e){return $l(cn({class:"tr",role:"row",bind:{value:"^",binding:{toDOM:this.selectBinding}}},...e.map(this.dataCell)))}draggedColumn;dropColumn=(e)=>{let t=e.target.closest(".drag-over"),n=Array.from(t.parentElement.children).indexOf(t),i=this.visibleColumns[n],o=this.columns.indexOf(this.draggedColumn),a=this.columns.indexOf(i);this.columns.splice(o,1),this.columns.splice(a,0,this.draggedColumn),console.log({event:e,target:t,targetIndex:n,draggedIndex:o,droppedIndex:a}),this.queueRender(),e.preventDefault(),e.stopPropagation()};render(){super.render(),this.rowData.pinnedTop=this.pinnedTop>0?this._array.slice(0,this.pinnedTop):[],this.rowData.pinnedBottom=this.pinnedBottom>0?this._array.slice(this._array.length-this.pinnedBottom):[],this.rowData.visible=this.filter(this._array.slice(this.pinnedTop,Math.min(this.maxVisibleRows,this._array.length-this.pinnedTop-this.pinnedBottom)));let{sort:e}=this;if(e)this.rowData.visible.sort(e);this.textContent="",this.style.display="flex",this.style.flexDirection="column";let{visibleColumns:t}=this;if(this.style.setProperty("--row-height",`${this.rowHeight}px`),this.setColumnWidths(),!this.noreorder)si();let n=this.instanceId+"-column-header",i=t.map((o)=>{let a=this.headerCell(o);if(!this.noreorder)a.setAttribute("draggable","true"),a.dataset.drag=n,a.dataset.drop=n,a.addEventListener("dragstart",()=>{this.draggedColumn=o}),a.addEventListener("drop",this.dropColumn);return a});if(this.append(cn({class:"thead",role:"rowgroup",style:{touchAction:"none"}},cn({class:"tr",role:"row"},...i))),this.pinnedTop>0)this.append(cn({part:"pinnedTopRows",class:"tbody",role:"rowgroup",style:{flex:"0 0 auto",overflow:"hidden",height:`${this.rowHeight*this.pinnedTop}px`},bindList:{value:this.rowData.pinnedTop,virtual:this.virtual}},this.rowTemplate(t)));if(this.append(cn({part:"visibleRows",class:"tbody",role:"rowgroup",style:{content:" ",minHeight:"100px",flex:"1 1 100px",overflow:"hidden auto"},bindList:{value:this.rowData.visible,virtual:this.virtual}},this.rowTemplate(t))),this.pinnedBottom>0)this.append(cn({part:"pinnedBottomRows",class:"tbody",role:"rowgroup",style:{flex:"0 0 auto",overflow:"hidden",height:`${this.rowHeight*this.pinnedBottom}px`},bindList:{value:this.rowData.pinnedBottom,virtual:this.virtual}},this.rowTemplate(t)))}}var Rl=li.elementCreator({tag:"xin-table",styleSpec:{":host":{overflow:"auto hidden"},":host .thead, :host .tbody":{width:y.gridRowWidth},":host .tr":{display:"grid",gridTemplateColumns:y.gridColumns,height:y.rowHeight,lineHeight:y.rowHeight},":host .td, :host .th":{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",display:"flex",alignItems:"center"},":host .th .menu-trigger":{color:"currentColor",background:"none",padding:0,lineHeight:y.touchSize,height:y.touchSize,width:y.touchSize},':host [draggable="true"]':{cursor:"ew-resize"},':host [draggable="true"]:active':{background:D.draggedHeaderBg("#0004"),color:D.draggedHeaderColor("#fff")},":host .drag-over":{background:D.dropHeaderBg("#fff4")}}});/*!
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
*/var{div:de,slot:Ul}=P;class he extends H{static angleSize=15;static gridSize=8;static snapAngle=!1;static snapToGrid=!1;static styleSpec={":host":{"--handle-bg":"#fff4","--handle-color":"#2228","--handle-hover-bg":"#8ff8","--handle-hover-color":"#222","--handle-size":"20px","--handle-padding":"2px"},":host ::slotted(*)":{position:"absolute"},":host > :not(style,slot)":{boxSizing:"border-box",content:'" "',position:"absolute",display:"flex",height:y.handleSize,width:y.handleSize,padding:y.handlePadding,"--text-color":y.handleColor,background:y.handleBg},":host > .drag-size":{top:0,bottom:0,left:0,right:0,height:"auto",width:"auto",background:"transparent",cursor:"ew-resize"},':host > [part="rotate"]':{transform:`translateY(${y.handleSize_50})`},":host > [locked] > svg:first-child, :host > :not([locked]) > svg+svg":{display:"none"},":host .icon-unlock":{opacity:0.5},":host svg":{pointerEvents:"none"},":host > *:hover":{"--text-color":y.handleHoverColor,background:y.handleHoverBg}};static snappedCoords(e,t){let{gridSize:n}=he;return he.snapToGrid||e.shiftKey?t.map((i)=>Math.round(i/n)*n):t}static snappedAngle(e,t){let{angleSize:n}=he;return he.snapAngle||e.shiftKey?Math.round(t/n)*n:t}get locked(){let e=this.parentElement;if(e.style.inset)return{left:!0,top:!0,bottom:!0,right:!0};let t=e.style.right.match(/\d/)!==null,n=!t||e.style.left.match(/\d/)!==null,i=e.style.bottom.match(/\d/)!==null,o=!i||e.style.top.match(/\d/)!==null;return{left:n,top:o,bottom:i,right:t}}set locked(e){let{bottom:t,right:n}=e,{left:i,top:o}=e,a=this.parentElement,s=a.offsetLeft,l=a.offsetTop,r=a.offsetWidth,d=a.offsetHeight,p=a.offsetParent.offsetWidth-s-r,g=a.offsetParent.offsetHeight-l-d;if(Object.assign(a.style,{left:"",right:"",top:"",bottom:"",width:"",height:""}),!n)i=!0;if(!t)o=!0;if(i)a.style.left=s+"px";if(n)a.style.right=p+"px";if(i&&n)a.style.width="auto";else a.style.width=r+"px";if(o)a.style.top=l+"px";if(t)a.style.bottom=g+"px";if(o&&t)a.style.height="auto";else a.style.height=d+"px";this.queueRender()}get coords(){let{top:e,left:t,right:n,bottom:i}=this.parentElement.style;return{top:parseFloat(e),left:parseFloat(t),right:parseFloat(n),bottom:parseFloat(i)}}get left(){return this.parentElement.offsetLeft}get width(){return this.parentElement.offsetWidth}get right(){return this.parentElement.offsetParent.offsetWidth-(this.left+this.width)}get top(){return this.parentElement.offsetTop}get height(){return this.parentElement.offsetHeight}get bottom(){return this.parentElement.offsetParent.offsetHeight-(this.top+this.height)}triggerChange=()=>{this.parentElement.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))};adjustPosition=(e)=>{let{locked:t}=this;this.locked=t;let n=this.parentElement,{top:i,left:o,bottom:a,right:s}=this.coords;le(e,(l,r,d)=>{if([l,r]=he.snappedCoords(d,[l,r]),!isNaN(i))n.style.top=i+r+"px";if(!isNaN(a))n.style.bottom=a-r+"px";if(!isNaN(o))n.style.left=o+l+"px";if(!isNaN(s))n.style.right=s-l+"px";if(d.type==="mouseup")return this.triggerChange(),!0})};resize=(e)=>{let t=this.parentElement,{locked:n}=this;this.locked=Object.assign({left:!0,top:!0,right:!0,bottom:!0});let[i,o]=[this.right,this.bottom];le(e,(a,s,l)=>{let r=i-a,d=o-s;if([r,d]=he.snappedCoords(l,[r,d]),t.style.right=r+"px",t.style.bottom=d+"px",l.type==="mouseup")return this.locked=n,this.triggerChange(),!0})};adjustSize=(e)=>{let t=this.parentElement,{locked:n}=this,i=e.target.getAttribute("part");this.locked=Object.assign({left:!0,right:!0,top:!0,bottom:!0});let o=this[i];le(e,(a,s,l)=>{let[r]=he.snappedCoords(l,[o+(["left","right"].includes(i)?a:s)*(["right","bottom"].includes(i)?-1:1)]);if(t.style[i]=r+"px",l.type==="mouseup")return this.locked=n,this.triggerChange(),!0})};get rect(){return this.parentElement.getBoundingClientRect()}get center(){let e=this.parentElement.getBoundingClientRect();return{x:e.x+e.width*0.5,y:e.y+e.height*0.5}}get element(){return this.parentElement}adjustRotation=(e)=>{let{center:t}=this,{transformOrigin:n}=this.element.style;if(!n)this.element.style.transformOrigin="50% 50%";le(e,(i,o,a)=>{let{clientX:s,clientY:l}=a,r=s-t.x,d=l-t.y,p=d>0?90:-90;if(r!==0)p=Math.atan2(d,r)*180/Math.PI;if(p=he.snappedAngle(a,p),p===0)this.element.style.transformOrigin="",this.element.style.transform="";else this.element.style.transform=`rotate(${p}deg)`;return this.triggerChange(),a.type==="mouseup"})};toggleLock=(e)=>{let{locked:t}=this,n=e.target.title.split(" ")[1];t[n]=!t[n],this.locked=t,this.queueRender(),e.stopPropagation(),e.preventDefault()};content=()=>[de({part:"move",style:{top:"50%",left:"50%",transform:"translate(-50%,-50%)"}},A.move()),de({part:"left",title:"resize left",class:"drag-size",style:{left:"-6px",width:"8px"}}),de({part:"right",title:"resize right",class:"drag-size",style:{left:"calc(100% - 2px)",width:"8px"}}),de({part:"top",title:"resize top",class:"drag-size",style:{top:"-6px",height:"8px",cursor:"ns-resize"}}),de({part:"bottom",title:"resize bottom",class:"drag-size",style:{top:"calc(100% - 2px)",height:"8px",cursor:"ns-resize"}}),de({part:"resize",style:{top:"100%",left:"100%"}},A.resize()),de({part:"rotate",style:{top:"50%",right:"0"}},A.refresh()),de({part:"lockLeft",title:"lock left",style:{top:"50%",left:0,transform:"translate(-100%, -50%)"}},A.unlock(),A.lock()),de({part:"lockRight",title:"lock right",style:{top:"50%",left:"100%",transform:"translate(0%, -50%)"}},A.unlock(),A.lock()),de({part:"lockTop",title:"lock top",style:{top:0,left:"50%",transform:"translate(-50%, -100%)"}},A.unlock(),A.lock()),de({part:"lockBottom",title:"lock bottom",style:{top:"100%",left:"50%",transform:"translate(-50%, 0%)"}},A.unlock(),A.lock()),Ul()];constructor(){super();this.initAttributes("rotationSnap","positionSnap")}connectedCallback(){super.connectedCallback();let{left:e,right:t,top:n,bottom:i,lockLeft:o,lockRight:a,lockTop:s,lockBottom:l,move:r,resize:d,rotate:p}=this.parts,g={passive:!0};[e,t,n,i].forEach((f)=>{f.addEventListener("mousedown",this.adjustSize,g),f.addEventListener("touchstart",this.adjustSize,g)}),[o,a,s,l].forEach((f)=>{f.addEventListener("click",this.toggleLock)}),d.addEventListener("mousedown",this.resize,g),r.addEventListener("mousedown",this.adjustPosition,g),p.addEventListener("mousedown",this.adjustRotation,g),d.addEventListener("touchstart",this.resize,g),r.addEventListener("touchstart",this.adjustPosition,g),p.addEventListener("touchstart",this.adjustRotation,g)}render(){if(super.render(),!this.parentElement)return;let{lockLeft:e,lockRight:t,lockTop:n,lockBottom:i}=this.parts,{left:o,right:a,top:s,bottom:l}=this.locked;e.toggleAttribute("locked",o),t.toggleAttribute("locked",a),n.toggleAttribute("locked",s),i.toggleAttribute("locked",l)}}var Gl=he.elementCreator({tag:"xin-editable"});/*!
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
*/var{div:Yl,input:Kl,select:Ao,option:In,button:ri,span:Xl}=P,Lo=(e)=>e,ko="null filter, everything matches",ci={contains:{caption:"contains",negative:"does not contain",makeTest:(e)=>{return e=e.toLocaleLowerCase(),(t)=>String(t).toLocaleLowerCase().includes(e)}},hasTags:{caption:"has tags",makeTest:(e)=>{let t=e.split(/[\s,]/).map((n)=>n.trim().toLocaleLowerCase()).filter((n)=>n!=="");return console.log(t),(n)=>Array.isArray(n)&&t.find((i)=>!n.includes(i))===void 0}},doesNotHaveTags:{caption:"does not have tags",makeTest:(e)=>{let t=e.split(/[\s,]/).map((n)=>n.trim().toLocaleLowerCase()).filter((n)=>n!=="");return console.log(t),(n)=>Array.isArray(n)&&t.find((i)=>n.includes(i))===void 0}},equals:{caption:"=",negative:"≠",makeTest:(e)=>{if(isNaN(Number(e)))return e=String(e).toLocaleLowerCase(),(n)=>String(n).toLocaleLowerCase()===e;let t=Number(e);return(n)=>Number(n)===t}},after:{caption:"is after",negative:"is before",makeTest:(e)=>{let t=new Date(e);return(n)=>new Date(n)>t}},greaterThan:{caption:">",negative:"≤",makeTest:(e)=>{if(!isNaN(Number(e))){let t=Number(e);return(n)=>Number(n)>t}return e=e.toLocaleLowerCase(),(t)=>String(t).toLocaleLowerCase()>e}},truthy:{caption:"is true/non-empty/non-zero",negative:"is false/empty/zero",needsValue:!1,makeTest:()=>(e)=>!!e},isTrue:{caption:"= true",needsValue:!1,makeTest:()=>(e)=>e===!0},isFalse:{caption:"= false",needsValue:!1,makeTest:()=>(e)=>e===!1}},Jl={description:"anything",test:()=>!0};function Fo(e){return e.options[e.selectedIndex].text}class di extends H{fields=[];filters=ci;haystack="*";condition="";needle="";content=()=>[Ao({part:"haystack"}),A.chevronDown(),Ao({part:"condition"}),A.chevronDown(),Kl({part:"needle",type:"search"}),Xl({part:"padding"}),ri({part:"remove",title:"delete"},A.trash())];filter=Jl;constructor(){super();this.initAttributes("haystack","condition","needle")}get state(){let{haystack:e,needle:t,condition:n}=this.parts;return{haystack:e.value,needle:t.value,condition:n.value}}set state(e){Object.assign(this,e)}buildFilter=()=>{let{haystack:e,condition:t,needle:n}=this.parts,i=t.value.startsWith("~"),o=i?t.value.slice(1):t.value,a=this.filters[o];n.hidden=a.needsValue===!1;let s=a.needsValue===!1?a.makeTest(void 0):a.makeTest(n.value),l=e.value,r;if(l!=="*")r=i?(g)=>!s(g[l]):(g)=>s(g[l]);else r=i?(g)=>Object.values(g).find((f)=>!s(f))!==void 0:(g)=>Object.values(g).find((f)=>s(f))!==void 0;let d=a.needsValue!==!1?` "${n.value}"`:"",p=`${Fo(e)} ${Fo(t)}${d}`;this.filter={description:p,test:r},this.parentElement?.dispatchEvent(new Event("change"))};connectedCallback(){super.connectedCallback();let{haystack:e,condition:t,needle:n,remove:i}=this.parts;e.addEventListener("change",this.buildFilter),t.addEventListener("change",this.buildFilter),n.addEventListener("input",this.buildFilter),e.value=this.haystack,t.value=this.condition,n.value=this.needle,i.addEventListener("click",()=>{let{parentElement:o}=this;this.remove(),o?.dispatchEvent(new Event("change"))})}render(){super.render();let{haystack:e,condition:t,needle:n}=this.parts;e.textContent="",e.append(In("any field",{value:"*"}),...this.fields.map((o)=>{let a=o.name||o.prop;return In(`${a}`,{value:o.prop})})),t.textContent="";let i=Object.keys(this.filters).map((o)=>{let a=this.filters[o];return a.negative!==void 0?[In(a.caption,{value:o}),In(a.negative,{value:"~"+o})]:In(a.caption,{value:o})}).flat();if(t.append(...i),this.haystack!=="")e.value=this.haystack;if(this.condition!=="")t.value=this.condition;if(this.needle!=="")n.value=this.needle;this.buildFilter()}}var rt=di.elementCreator({tag:"xin-filter-part",styleSpec:{":host":{display:"flex"},':host svg[class^="icon-"]:':{height:"var(--font-size, 16px)",verticalAlign:"middle",fill:"var(--text-color)",pointerEvents:"none"},':host [part="haystack"], :host [part="condition"]':{flex:"1"},':host [part="needle"]':{flex:2},':host [hidden]+[part="padding"]':{display:"block",content:" ",flex:"1 1 auto"}}});class hi extends H{_fields=[];get fields(){return this._fields}set fields(e){this._fields=e,this.queueRender()}get state(){let{filterContainer:e}=this.parts;return[...e.children].map((t)=>t.state)}set state(e){let{fields:t,filters:n}=this,{filterContainer:i}=this.parts;i.textContent="";for(let o of e)i.append(rt({fields:t,filters:n,...o}))}filter=Lo;description=ko;addFilter=()=>{let{fields:e,filters:t}=this,{filterContainer:n}=this.parts;n.append(rt({fields:e,filters:t}))};content=()=>[ri({part:"add",title:"add filter condition",onClick:this.addFilter,class:"round"},A.plus()),Yl({part:"filterContainer"}),ri({part:"reset",title:"reset filter",onClick:this.reset},A.x())];filters=ci;reset=()=>{let{fields:e,filters:t}=this,{filterContainer:n}=this.parts;this.description=ko,this.filter=Lo,n.textContent="",n.append(rt({fields:e,filters:t})),this.dispatchEvent(new Event("change"))};buildFilter=()=>{let{filterContainer:e}=this.parts;if(e.children.length===0){this.reset();return}let t=[...e.children].map((i)=>i.filter),n=t.map((i)=>i.test);this.description=t.map((i)=>i.description).join(", "),this.filter=(i)=>i.filter((o)=>n.find((a)=>a(o)===!1)===void 0),this.dispatchEvent(new Event("change"))};connectedCallback(){super.connectedCallback();let{filterContainer:e}=this.parts;e.addEventListener("change",this.buildFilter),this.reset()}render(){super.render()}}var Ql=hi.elementCreator({tag:"xin-filter",styleSpec:{":host":{height:"auto",display:"grid",gridTemplateColumns:"32px calc(100% - 64px) 32px",alignItems:"center"},':host [part="filterContainer"]':{display:"flex",flexDirection:"column",alignItems:"stretch",flex:"1 1 auto"},':host [part="add"], :host [part="reset"]':{"--button-size":"var(--touch-size, 32px)",borderRadius:"999px",height:"var(--button-size)",lineHeight:"var(--button-size)",margin:"0",padding:"0",textAlign:"center",width:"var(--button-size)",flex:"0 0 var(--button-size)"}}});/*!
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
*/var{form:Zl,slot:pi,xinSlot:Oo,label:er,input:nr,span:tr}=P;function Ve(e,t,n){if(n!==""&&n!==!1)e.setAttribute(t,n);else e.removeAttribute(t)}function ir(e){switch(e.type){case"checkbox":return e.checked;case"radio":{let t=e.parentElement?.querySelector(`input[type="radio"][name="${e.name}"]:checked`);return t?t.value:null}case"range":case"number":return Number(e.value);default:return Array.isArray(e.value)&&e.value.length===0?null:e.value}}function Do(e,t){if(!(e instanceof HTMLElement));else if(e instanceof HTMLInputElement)switch(e.type){case"checkbox":e.checked=t;break;case"radio":e.checked=t===e.value;break;default:e.value=String(t||"")}else if(t!=null||e.value!=null)e.value=String(t||"")}class ct extends H{caption="";key="";type="";optional=!1;pattern="";placeholder="";min="";max="";step="";fixedPrecision=-1;value=null;content=er(Oo({part:"caption"}),tr({part:"field"},Oo({part:"input",name:"input"}),nr({part:"valueHolder"})));constructor(){super();this.initAttributes("caption","key","type","optional","pattern","placeholder","min","max","step","fixedPrecision","prefix","suffix")}valueChanged=!1;handleChange=()=>{let{input:e,valueHolder:t}=this.parts,n=e.children[0]||t;if(n!==t)t.value=n.value;this.value=ir(n),this.valueChanged=!0;let i=this.closest("xin-form");if(i&&this.key!=="")switch(this.type){case"checkbox":i.fields[this.key]=n.checked;break;case"number":case"range":if(this.fixedPrecision>-1)n.value=Number(n.value).toFixed(this.fixedPrecision),i.fields[this.key]=Number(n.value);else i.fields[this.key]=Number(n.value);break;default:i.fields[this.key]=n.value}};initialize(e){let t=e.fields[this.key]!==void 0?e.fields[this.key]:this.value;if(t!=null&&t!==""){if(e.fields[this.key]==null)e.fields[this.key]=t;this.value=t}}connectedCallback(){super.connectedCallback();let{input:e,valueHolder:t}=this.parts,n=this.closest(En.tagName);if(n instanceof En)this.initialize(n);t.addEventListener("change",this.handleChange),e.addEventListener("change",this.handleChange,!0)}render(){if(this.valueChanged){this.valueChanged=!1;return}let{input:e,caption:t,valueHolder:n,field:i}=this.parts;if(t.textContent?.trim()==="")t.append(this.caption!==""?this.caption:this.key);if(this.type==="text"){e.textContent="";let o=P.textarea({value:this.value});if(this.placeholder)o.setAttribute("placeholder",this.placeholder);e.append(o)}else if(this.type==="color")e.textContent="",e.append(ii({value:this.value}));else if(e.children.length===0)Ve(n,"placeholder",this.placeholder),Ve(n,"type",this.type),Ve(n,"pattern",this.pattern),Ve(n,"min",this.min),Ve(n,"max",this.max),Ve(n,"step",this.step);if(Do(n,this.value),Do(e.children[0],this.value),this.prefix?i.setAttribute("prefix",this.prefix):i.removeAttribute("prefix"),this.suffix?i.setAttribute("suffix",this.suffix):i.removeAttribute("suffix"),n.classList.toggle("hidden",e.children.length>0),e.children.length>0)n.setAttribute("tabindex","-1");else n.removeAttribute("tabindex");e.style.display=e.children.length===0?"none":"",Ve(n,"required",!this.optional)}}class En extends H{context={};value={};get isValid(){return[...this.querySelectorAll("*")].filter((t)=>t.required!==void 0).find((t)=>!t.reportValidity())===void 0}static styleSpec={":host":{display:"flex",flexDirection:"column"},":host::part(header), :host::part(footer)":{display:"flex"},":host::part(content)":{display:"flex",flexDirection:"column",overflow:"hidden auto",height:"100%",width:"100%",position:"relative",boxSizing:"border-box"},":host form":{display:"flex",flex:"1 1 auto",position:"relative",overflow:"hidden"}};content=[pi({part:"header",name:"header"}),Zl({part:"form"},pi({part:"content"})),pi({part:"footer",name:"footer"})];getField=(e)=>{return this.querySelector(`xin-field[key="${e}"]`)};get fields(){if(typeof this.value==="string")try{this.value=JSON.parse(this.value)}catch(n){console.log("<xin-form> could not use its value, expects valid JSON"),this.value={}}let{getField:e}=this,t=this.dispatchEvent.bind(this);return new Proxy(this.value,{get(n,i){return n[i]},set(n,i,o){if(n[i]!==o){n[i]=o;let a=e(i);if(a)a.value=o;t(new Event("change"))}return!0}})}set fields(e){let t=[...this.querySelectorAll(ct.tagName)];for(let n of t)n.value=e[n.key]}submit=()=>{this.parts.form.dispatchEvent(new Event("submit"))};handleSubmit=(e)=>{e.preventDefault(),e.stopPropagation(),this.submitCallback(this.value,this.isValid)};submitCallback=(e,t)=>{console.log("override submitCallback to handle this data",{value:e,isValid:t})};connectedCallback(){super.connectedCallback();let{form:e}=this.parts;e.addEventListener("submit",this.handleSubmit)}}var or=ct.elementCreator({tag:"xin-field",styleSpec:{':host [part="field"]':{position:"relative",display:"flex",alignItems:"center",gap:D.prefixSuffixGap("8px")},':host [part="field"][prefix]::before':{content:"attr(prefix)"},':host [part="field"][suffix]::after':{content:"attr(suffix)"},':host [part="field"] > *, :host [part="input"] > *':{width:"100%"},":host textarea":{resize:"none"},':host input[type="checkbox"]':{width:"fit-content"},":host .hidden":{position:"absolute",pointerEvents:"none",opacity:0}}}),ar=En.elementCreator({tag:"xin-form"});/*!
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
*/function qo(){return navigator.getGamepads().filter((t)=>t!==null).map((t)=>{let{id:n,axes:i,buttons:o}=t;return{id:n,axes:i,buttons:o.map((a,s)=>{let{pressed:l,value:r}=a;return{index:s,pressed:l,value:r}}).filter((a)=>a.pressed||a.value!==0).reduce((a,s)=>{return a[s.index]=s.value,a},{})}})}function sr(){let e=qo();return e.length===0?"no active gamepads":e.map(({id:t,axes:n,buttons:i})=>{let o=n.map((s)=>s.toFixed(2)).join(" "),a=Object.keys(i).map((s)=>`[${s}](${i[Number(s)].toFixed(2)})`).join(" ");return`${t}
${o}
${a}`}).join(`
`)}function lr(e){let t={};return e.input.onControllerAddedObservable.add((n)=>{n.onMotionControllerInitObservable.add((i)=>{let o={};i.getComponentIds().forEach((s)=>{let l=i.getComponent(s);if(o[s]={pressed:l.pressed},l.onButtonStateChangedObservable.add(()=>{o[s].pressed=l.pressed}),l.onAxisValueChangedObservable)o[s].axes=[],l.onAxisValueChangedObservable.add((r)=>{o[s].axes=r})}),t[i.handedness]=o})}),t}function rr(e){if(e===void 0||Object.keys(e).length===0)return"no xr inputs";return Object.keys(e).map((t)=>{let n=e[t],i=Object.keys(n).filter((o)=>n[o].pressed).join(" ");return`${t}
${i}`}).join(`
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
*/var{div:We,slot:Ho,span:cr,button:dr}=P;class dt extends H{value=0;static makeTab(e,t,n){let i=t.querySelector('template[role="tab"]')?.content.cloneNode(!0)||cr(t.getAttribute("name"));return We(i,{part:"tab",tabindex:0,role:"tab",ariaControls:n},t.hasAttribute("data-close")?dr({title:"close",class:"close"},A.x()):{})}static styleSpec={":host":{display:"flex",flexDirection:"column",position:"relative",overflow:"hidden",boxShadow:"none !important"},slot:{position:"relative",display:"block",flex:"1",overflow:"hidden",overflowY:"auto"},'slot[name="after-tabs"]':{flex:"0 0 auto"},"::slotted([hidden])":{display:"none !important"},":host::part(tabpanel)":{display:"flex",flexDirection:"column",overflowX:"auto"},":host::part(tabrow)":{display:"flex"},":host .tabs":{display:"flex",userSelect:"none",whiteSpace:"nowrap"},":host .tabs > div":{padding:`${y.spacing50} ${y.spacing}`,cursor:"default",display:"flex",alignItems:"baseline"},':host .tabs > [aria-selected="true"]':{"--text-color":y.xinTabsSelectedColor,color:y.textColor},":host .elastic":{flex:"1"},":host .border":{background:"var(--xin-tabs-bar-color, #ccc)"},":host .border > .selected":{content:" ",width:0,height:"var(--xin-tabs-bar-height, 2px)",background:y.xinTabsSelectedColor,transition:"ease-out 0.2s"},":host button.close":{fill:y.textColor,border:0,background:"transparent",textAlign:"center",marginLeft:y.spacing50,padding:0},":host button.close > svg":{height:"12px"}};onCloseTab=null;content=[We({role:"tabpanel",part:"tabpanel"},We({part:"tabrow"},We({class:"tabs",part:"tabs"}),We({class:"elastic"}),Ho({name:"after-tabs"})),We({class:"border"},We({class:"selected",part:"selected"}))),Ho()];constructor(){super();this.initAttributes("anne","example")}addTabBody(e,t=!1){if(!e.hasAttribute("name"))throw console.error("element has no name attribute",e),new Error("element has no name attribute");if(this.append(e),this.setupTabs(),t)this.value=this.bodies.length-1;this.queueRender()}removeTabBody(e){e.remove(),this.setupTabs(),this.queueRender()}keyTab=(e)=>{let{tabs:t}=this.parts,n=[...t.children].indexOf(e.target);switch(e.key){case"ArrowLeft":this.value=(n+Number(t.children.length)-1)%t.children.length,t.children[this.value].focus(),e.preventDefault();break;case"ArrowRight":this.value=(n+1)%t.children.length,t.children[this.value].focus(),e.preventDefault();break;case" ":this.pickTab(e),e.preventDefault();break;default:}};get bodies(){return[...this.children].filter((e)=>e.hasAttribute("name"))}pickTab=(e)=>{let{tabs:t}=this.parts,n=e.target,i=n.closest("button.close")!==null,o=n.closest(".tabs > div"),a=[...t.children].indexOf(o);if(i){let s=this.bodies[a];if(!this.onCloseTab||this.onCloseTab(s)!==!1)this.removeTabBody(this.bodies[a])}else if(a>-1)this.value=a};setupTabs=()=>{let{tabs:e}=this.parts,t=[...this.children].filter((n)=>!n.hasAttribute("slot")&&n.hasAttribute("name"));if(e.textContent="",this.value>=t.length)this.value=t.length-1;for(let n in t){let i=t[n],o=`${this.instanceId}-${n}`;i.id=o;let a=dt.makeTab(this,i,o);e.append(a)}};connectedCallback(){super.connectedCallback();let{tabs:e}=this.parts;e.addEventListener("click",this.pickTab),e.addEventListener("keydown",this.keyTab),this.setupTabs()}onResize(){this.queueRender()}render(){let{tabs:e,selected:t}=this.parts,n=this.bodies;for(let i=0;i<n.length;i++){let o=n[i],a=e.children[i];if(this.value===Number(i))a.setAttribute("aria-selected","true"),t.style.marginLeft=`${a.offsetLeft-e.offsetLeft}px`,t.style.width=`${a.offsetWidth}px`,o.toggleAttribute("hidden",!1);else a.toggleAttribute("aria-selected",!1),o.toggleAttribute("hidden",!0)}}}var ui=dt.elementCreator({tag:"xin-tabs"});/*!
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
*/var{div:ht,xinSlot:hr,style:pr,button:$e,h4:ur,pre:gr}=P,mr=(async()=>{}).constructor;class pt extends H{persistToDom=!1;prettier=!1;prefix="lx";storageKey="live-example-payload";context={};uuid=crypto.randomUUID();remoteId="";lastUpdate=0;interval;static insertExamples(e,t={}){let n=[...e.querySelectorAll(".language-html,.language-js,.language-css")].filter((i)=>!i.closest(pt.tagName)).map((i)=>({block:i.parentElement,language:i.classList[0].split("-").pop(),code:i.innerText}));for(let i=0;i<n.length;i+=1){let o=[n[i]];while(i<n.length-1&&n[i].block.nextElementSibling===n[i+1].block)o.push(n[i+1]),i+=1;let a=ut({context:t});o[0].block.parentElement.insertBefore(a,o[0].block),o.forEach((s)=>{switch(s.language){case"js":a.js=s.code;break;case"html":a.html=s.code;break;case"css":a.css=s.code;break}s.block.remove()}),a.showDefaultTab()}}constructor(){super();this.initAttributes("persistToDom","prettier")}get activeTab(){let{editors:e}=this.parts;return[...e.children].find((t)=>t.getAttribute("hidden")===null)}getEditorValue(e){return this.parts[e].value}setEditorValue(e,t){let n=this.parts[e];n.value=t}get css(){return this.getEditorValue("css")}set css(e){this.setEditorValue("css",e)}get html(){return this.getEditorValue("html")}set html(e){this.setEditorValue("html",e)}get js(){return this.getEditorValue("js")}set js(e){this.setEditorValue("js",e)}updateUndo=()=>{let{activeTab:e}=this,{undo:t,redo:n}=this.parts;if(e instanceof Ne&&e.editor!==void 0){let i=e.editor.session.getUndoManager();t.disabled=!i.hasUndo(),n.disabled=!i.hasRedo()}else t.disabled=!0,n.disabled=!0};undo=()=>{let{activeTab:e}=this;if(e instanceof Ne)e.editor.undo()};redo=()=>{let{activeTab:e}=this;if(e instanceof Ne)e.editor.redo()};get isMaximized(){return this.classList.contains("-maximize")}flipLayout=()=>{this.classList.toggle("-vertical")};exampleMenu=()=>{ve({target:this.parts.exampleWidgets,width:"auto",menuItems:[{icon:"edit",caption:"view/edit code",action:this.showCode},{icon:"editDoc",caption:"view/edit code in a new window",action:this.openEditorWindow},null,{icon:this.isMaximized?"minimize":"maximize",caption:this.isMaximized?"restore preview":"maximize preview",action:this.toggleMaximize}]})};content=()=>[ht({part:"example"},pr({part:"style"}),$e({title:"example menu",part:"exampleWidgets",onClick:this.exampleMenu},A.code())),ht({class:"code-editors",part:"codeEditors",hidden:!0},ur("Code"),$e({title:"close code",class:"transparent close-button",onClick:this.closeCode},A.x()),ui({part:"editors",onChange:this.updateUndo},Tn({name:"js",mode:"javascript",part:"js"}),Tn({name:"html",mode:"html",part:"html"}),Tn({name:"css",mode:"css",part:"css"}),ht({slot:"after-tabs",class:"row"},$e({title:"undo",part:"undo",class:"transparent",onClick:this.undo},A.undo()),$e({title:"redo",part:"redo",class:"transparent",onClick:this.redo},A.redo()),$e({title:"flip direction",class:"transparent",onClick:this.flipLayout},A.sidebar()),$e({title:"copy as markdown",class:"transparent",onClick:this.copy},A.copy()),$e({title:"reload",class:"transparent",onClick:this.refreshRemote},A.refresh())))),hr({part:"sources",hidden:!0})];connectedCallback(){super.connectedCallback();let{sources:e}=this.parts;this.initFromElements([...e.children]),addEventListener("storage",this.remoteChange),this.interval=setInterval(this.remoteChange,500),this.undoInterval=setInterval(this.updateUndo,250)}disconnectedCallback(){super.disconnectedCallback();let{storageKey:e,remoteKey:t}=this;clearInterval(this.interval),clearInterval(this.undoInterval),localStorage.setItem(e,JSON.stringify({remoteKey:t,sentAt:Date.now(),close:!0}))}copy=()=>{let e=this.js!==""?"```js\n"+this.js.trim()+"\n```\n":"",t=this.html!==""?"```html\n"+this.html.trim()+"\n```\n":"",n=this.css!==""?"```css\n"+this.css.trim()+"\n```\n":"";navigator.clipboard.writeText(e+t+n)};toggleMaximize=()=>{this.classList.toggle("-maximize")};get remoteKey(){return this.remoteId!==""?this.prefix+"-"+this.remoteId:this.prefix+"-"+this.uuid}remoteChange=(e)=>{let t=localStorage.getItem(this.storageKey);if(e instanceof StorageEvent&&e.key!==this.storageKey)return;if(t===null)return;let{remoteKey:n,sentAt:i,css:o,html:a,js:s,close:l}=JSON.parse(t);if(i<=this.lastUpdate)return;if(n!==this.remoteKey)return;if(l===!0)window.close();console.log("received new code",i,this.lastUpdate),this.lastUpdate=i,this.css=o,this.html=a,this.js=s,this.refresh()};showCode=()=>{this.classList.add("-maximize"),this.classList.toggle("-vertical",this.offsetHeight>this.offsetWidth),this.parts.codeEditors.hidden=!1};closeCode=()=>{if(this.remoteId!=="")window.close();else this.classList.remove("-maximize"),this.parts.codeEditors.hidden=!0};openEditorWindow=()=>{let{storageKey:e,remoteKey:t,css:n,html:i,js:o,uuid:a,prefix:s}=this,l=location.href.split("?")[0]+`?${s}=${a}`;localStorage.setItem(e,JSON.stringify({remoteKey:t,sentAt:Date.now(),css:n,html:i,js:o})),window.open(l)};refreshRemote=()=>{let{remoteKey:e,css:t,html:n,js:i}=this;localStorage.setItem(this.storageKey,JSON.stringify({remoteKey:e,sentAt:Date.now(),css:t,html:n,js:i}))};updateSources=()=>{if(this.persistToDom){let{sources:e}=this.parts;e.innerText="";for(let t of["js","css","html"])if(this[t])e.append(gr({class:`language-${t}`,innerHTML:this[t]}))}};refresh=()=>{if(this.remoteId!=="")return;let{example:e,style:t}=this.parts,n=ht({class:"preview"});n.innerHTML=this.html,t.innerText=this.css;let i=e.querySelector(".preview");if(i)i.replaceWith(n);else e.insertBefore(n,this.parts.exampleWidgets);let o={preview:n,...this.context};try{if(new mr(...Object.keys(o),this.js)(...Object.values(o)).catch((s)=>console.error(s)),this.persistToDom)this.updateSources()}catch(a){console.error(a),window.alert(`Error: ${a}, the console may have more information…`)}};initFromElements(e){for(let t of e){t.hidden=!0;let[n,...i]=t.innerHTML.split(`
`);if(["js","html","css"].includes(n)){let o=i.filter((s)=>s.trim()!=="").map((s)=>s.match(/^\s*/)[0].length).sort()[0],a=(o>0?i.map((s)=>s.substring(o)):i).join(`
`);this.parts[n].value=a}else{let o=["js","html","css"].find((a)=>t.matches(`.language-${a}`));if(o)this.parts[o].value=o==="html"?t.innerHTML:t.innerText}}}showDefaultTab(){let{editors:e}=this.parts;if(this.js!=="")e.value=0;else if(this.html!=="")e.value=1;else if(this.css!=="")e.value=2}render(){if(super.render(),this.remoteId!==""){let e=localStorage.getItem(this.storageKey);if(e!==null){let{remoteKey:t,sentAt:n,css:i,html:o,js:a}=JSON.parse(e);if(this.remoteKey!==t)return;this.lastUpdate=n,this.css=i,this.html=o,this.js=a,this.parts.example.hidden=!0,this.parts.codeEditors.hidden=!1,this.classList.add("-maximize"),this.updateUndo()}}else this.refresh()}}var ut=pt.elementCreator({tag:"xin-example",styleSpec:{":host":{"--xin-example-height":"320px","--code-editors-bar-bg":"#777","--code-editors-bar-color":"#fff","--widget-bg":"#fff8","--widget-color":"#000",position:"relative",display:"flex",height:"var(--xin-example-height)",background:"var(--background)",boxSizing:"border-box"},":host.-maximize":{position:"fixed",left:"0",top:"0",height:"100vh",width:"100vw",margin:"0 !important"},".-maximize":{zIndex:101},":host.-vertical":{flexDirection:"column"},":host .icon-sidebar":{transform:"rotateZ(180deg)"},":host.-vertical .icon-sidebar":{transform:"rotateZ(270deg)"},":host.-maximize .hide-if-maximized, :host:not(.-maximize) .show-if-maximized":{display:"none"},':host [part="example"]':{flex:"1 1 50%",height:"100%",position:"relative",overflowX:"auto"},":host .preview":{height:"100%",position:"relative",overflow:"hidden",background:`#f7f7f7 url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 8 8" fill-opacity=".02" ><rect x="4" width="4" height="4" /><rect y="4" width="4" height="4" /></svg>')`},':host [part="editors"]':{flex:"1 1 200px",height:"100%",position:"relative"},':host [part="exampleWidgets"]':{position:"absolute",left:"2px",bottom:"2px","--widget-color":"var(--brand-color)",background:"var(--widget-bg)",borderRadius:"5px",width:"44px",height:"44px",lineHeight:"44px",zIndex:"100"},':host [part="exampleWidgets"] svg':{fill:"var(--widget-color)"},":host .code-editors":{overflow:"hidden",background:"white",position:"relative",top:"0",right:"0",flex:"1 1 50%",height:"100%",flexDirection:"column",zIndex:"10"},":host .code-editors:not([hidden])":{display:"flex"},":host .code-editors > h4":{padding:"5px",margin:"0",textAlign:"center",background:"var(--code-editors-bar-bg)",color:"var(--code-editors-bar-color)",cursor:"move"},":host .close-button":{position:"absolute",top:"0",right:"0",color:"var(--code-editors-bar-color)"},":host button.transparent, :host .sizer":{width:"32px",height:"32px",lineHeight:"32px",textAlign:"center",padding:"0",margin:"0"},":host .sizer":{cursor:"nwse-resize"}}});function fr(e){let t=[...e.querySelectorAll("pre")].filter((n)=>["js","html","css","json"].includes(n.innerText.split(`
`)[0]));for(let n=0;n<t.length;n++){let i=[t[n]];while(t[n].nextElementSibling===t[n+1])i.push(t[n+1]),n+=1;let o=ut();e.insertBefore(o,i[0]),o.initFromElements(i)}}var br=new URL(window.location.href).searchParams,Po=br.get("lx");if(Po)document.title+=" [code editor]",document.body.textContent="",document.body.append(ut({remoteId:Po}));/*!
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
*/function gt(e,t=!0){return(n,i)=>{let o=e(n),a=e(i);for(let s in o)if(o[s]!==a[s])return(Array.isArray(t)?t[s]!==!1:t)?o[s]>a[s]?1:-1:o[s]>a[s]?-1:1;return 0}}/*!
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
*/var{button:vr,span:_o,input:xr}=P,Bo=(e,t)=>{return!!e.find((n)=>{if(n===null||t==null)return!1;else if(Array.isArray(n))return Bo(n,t);else if(n.value===t||n===t)return!0})};class Re extends H{editable=!1;showIcon=!1;hideCaption=!1;options="";value="";placeholder="";setValue=(e,t=!1)=>{if(this.value!==e)this.value=e,this.queueRender(!0);if(t)this.dispatchEvent(new Event("action"))};getValue=()=>this.value;get selectOptions(){return typeof this.options==="string"?this.options.split(",").map((e)=>e.trim()||null):this.options}buildOptionMenuItem=(e)=>{if(e===null)return null;let{setValue:t,getValue:n}=this,i,o,a;if(typeof e==="string")o=a=e;else({icon:i,caption:o,value:a}=e);let{options:s}=e;if(s)return{icon:i,caption:o,checked:()=>Bo(s,n()),menuItems:s.map(this.buildOptionMenuItem)};return{icon:i,caption:o,checked:()=>n()===a,action:typeof a==="function"?async()=>{let l=await a();if(l!==void 0)t(l,!0)}:()=>{if(typeof a==="string")t(a,!0)}}};get optionsMenu(){let e=this.selectOptions.map(this.buildOptionMenuItem);if(this.filter==="")return e;let t=(n)=>{if(n===null)return!0;else if(n.menuItems)return n.menuItems=n.menuItems.filter(t),n.menuItems.length>0;else return n.caption.toLocaleLowerCase().includes(this.filter)};return e.filter(t)}handleChange=(e)=>{let{value:t}=this.parts,n=t.value||"";if(this.value!==String(n))this.value=n,this.dispatchEvent(new Event("change"));this.filter="",e.stopPropagation(),e.preventDefault()};handleKey=(e)=>{if(e.key==="Enter")e.preventDefault()};filterMenu=Tt(()=>{this.filter=this.parts.value.value.toLocaleLowerCase(),Ie(0),this.popOptions()});popOptions=(e)=>{if(e&&e.type==="click")this.filter="";this.poppedOptions=this.optionsMenu,ve({target:this,menuItems:this.poppedOptions})};content=()=>[vr({onClick:this.popOptions},_o(),xr({part:"value",value:this.value,tabindex:0,onKeydown:this.handleKey,onInput:this.filterMenu,onChange:this.handleChange}),A.chevronDown())];constructor(){super();this.initAttributes("options","editable","placeholder","showIcon","hideCaption")}get allOptions(){let e=[];function t(n){for(let i of n)if(typeof i==="string")e.push({caption:i,value:i});else if(i?.value)e.push(i);else if(i?.options)t(i.options)}return t(this.selectOptions),e}findOption(){return this.allOptions.find((t)=>t.value===this.value)||{caption:this.value,value:this.value}}render(){super.render();let{value:e}=this.parts,t=e.previousElementSibling,n=this.findOption(),i=_o();if(e.value=n.caption,n.icon)if(n.icon instanceof HTMLElement)i=n.icon.cloneNode(!0);else i=A[n.icon]();t.replaceWith(i),e.setAttribute("placeholder",this.placeholder),e.style.pointerEvents=this.editable?"":"none",e.readOnly=!this.editable}}var An=Re.elementCreator({tag:"xin-select",styleSpec:{":host":{"--gap":"8px","--touch-size":"44px","--padding":"0 8px","--value-padding":"0 8px","--icon-width":"24px","--fieldWidth":"140px",display:"inline-block",position:"relative"},":host button":{display:"grid",alignItems:"center",gap:y.gap,textAlign:"left",height:y.touchSize,padding:y.padding,gridTemplateColumns:`auto ${y.iconWidth}`,position:"relative"},":host[show-icon] button":{gridTemplateColumns:`${y.iconWidth} auto ${y.iconWidth}`},":host[hide-caption] button":{gridTemplateColumns:`${y.iconWidth} ${y.iconWidth}`},":host:not([show-icon]) button > :first-child":{display:"none"},":host[hide-caption] button > :nth-child(2)":{display:"none"},':host [part="value"]':{width:y.fieldWidth,padding:y.valuePadding,height:y.touchSize,lineHeight:y.touchSize,boxShadow:"none",whiteSpace:"nowrap",outline:"none",background:"transparent"},':host [part="value"]:not(:focus)':{overflow:"hidden",textOverflow:"ellipsis",background:"transparent"}}});/*!
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
*/var{span:No}=P,{i18n:te}=It({i18n:{locale:window.navigator.language,locales:[window.navigator.language],languages:[window.navigator.language],emoji:[""],stringMap:{},localeOptions:[{icon:No(),caption:window.navigator.language,value:window.navigator.language}]}});ke.localeOptions={toDOM(e,t){if(e instanceof Re)e.options=t}};var gi=()=>{let e=[...document.querySelectorAll(mt.tagName)];for(let t of e)t.render()},yr=gt((e)=>[e.caption.toLocaleLowerCase()]);function wr(e){let[t,,n,i,...o]=e.split(`
`).map((a)=>a.split("\t"));if(t&&n&&i&&o){if(te.locales=t,te.languages=n,te.emoji=i,te.stringMap=o.reduce((a,s)=>{return a[s[0].toLocaleLowerCase()]=s,a},{}),te.localeOptions=t.map((a,s)=>({icon:No({title:t[s]},i[s]),caption:n[s],value:a})).sort(yr),!te.locales.includes(te.locale.valueOf())){let a=te.locale.substring(0,2);te.locale=te.locales.find((s)=>s.substring(0,2)===a)||te.locales[0]}gi()}}function mi(e){let t=te.locales.indexOf(te.locale.valueOf());if(t>-1){let n=te.stringMap[e.toLocaleLowerCase()],i=n&&n[t];if(i)e=e.toLocaleLowerCase()===e?i.toLocaleLowerCase():i}return e}class fi extends H{hideCaption=!1;content=()=>{return An({part:"select",showIcon:!0,title:mi("Language"),bindValue:te.locale,bindLocaleOptions:te.localeOptions})};constructor(){super();this.initAttributes("hideCaption")}connectedCallback(){super.connectedCallback(),this.parts.select.value=te.locale,this.parts.select.addEventListener("change",gi)}render(){super.render(),this.parts.select.toggleAttribute("hide-caption",this.hideCaption)}}var Mr=fi.elementCreator({tag:"xin-locale-picker"});class mt extends H{contents=()=>P.xinSlot();refString="";render(){if(super.render(),!this.refString)this.refString=this.textContent||"";this.textContent=mi(this.refString)}}var zr=mt.elementCreator({tag:"xin-localized",styleSpec:{":host":{pointerEvents:"none"}}});/*!
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
*/var Vo=[{name:"streets",url:"mapbox://styles/mapbox/streets-v10"},{name:"outdoors",url:"mapbox://styles/mapbox/outdoors-v10"},{name:"light",url:"mapbox://styles/mapbox/light-v9"},{name:"dark",url:"mapbox://styles/mapbox/dark-v9"},{name:"satellite",url:"mapbox://styles/mapbox/satellite-v9"},{name:"sateliite + streets",url:"mapbox://styles/mapbox/satellite-streets-v10"},{name:"preview day",url:"mapbox://styles/mapbox/navigation-preview-day-v2"},{name:"preview night",url:"mapbox://styles/mapbox/navigation-preview-night-v2"},{name:"guidance day",url:"mapbox://styles/mapbox/navigation-guidance-day-v2"},{name:"guidance night",url:"mapbox://styles/mapbox/navigation-guidance-night-v2"}],{div:Sr}=P;class Ue extends H{coords="65.01715565258993,25.48081004203459,12";content=Sr({style:{width:"100%",height:"100%"}});get map(){return this._map}mapStyle=Vo[0].url;token="";static mapboxCSSAvailable;static mapboxAvailable;_map;static styleSpec={":host":{display:"inline-block",position:"relative",width:"400px",height:"400px",textAlign:"left"}};constructor(){super();if(this.initAttributes("coords","token","mapStyle"),Ue.mapboxCSSAvailable===void 0)Ue.mapboxCSSAvailable=et("https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css").catch((e)=>{console.error("failed to load mapbox-gl.css",e)}),Ue.mapboxAvailable=re("https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.js").catch((e)=>{console.error("failed to load mapbox-gl.js",e)})}connectedCallback(){if(super.connectedCallback(),!this.token)console.error("mapbox requires an access token which you can provide via the token attribute")}render(){if(super.render(),!this.token)return;let{div:e}=this.parts,[t,n,i]=this.coords.split(",").map((o)=>Number(o));if(this.map)this.map.remove();Ue.mapboxAvailable.then(({mapboxgl:o})=>{console.log("%cmapbox may complain about missing css -- don't panic!","background: orange; color: black; padding: 0 5px;"),o.accessToken=this.token,this._map=new o.Map({container:e,style:this.mapStyle,zoom:i,center:[n,t]}),this._map.on("render",()=>this._map.resize())})}}var Cr=Ue.elementCreator({tag:"xin-map"});function bi(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}var Ee=bi();function Yo(e){Ee=e}var Ko=/[&<>"']/,Tr=new RegExp(Ko.source,"g"),Xo=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,jr=new RegExp(Xo.source,"g"),Ir={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Wo=(e)=>Ir[e];function ae(e,t){if(t){if(Ko.test(e))return e.replace(Tr,Wo)}else if(Xo.test(e))return e.replace(jr,Wo);return e}var Er=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Jo(e){return e.replace(Er,(t,n)=>{if(n=n.toLowerCase(),n==="colon")return":";if(n.charAt(0)==="#")return n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1));return""})}var Ar=/(^|[^\[])\^/g;function Y(e,t){e=typeof e==="string"?e:e.source,t=t||"";let n={replace:(i,o)=>{return o=o.source||o,o=o.replace(Ar,"$1"),e=e.replace(i,o),n},getRegex:()=>{return new RegExp(e,t)}};return n}var Lr=/[^\w:]/g,kr=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function $o(e,t,n){if(e){let i;try{i=decodeURIComponent(Jo(n)).replace(Lr,"").toLowerCase()}catch(o){return null}if(i.indexOf("javascript:")===0||i.indexOf("vbscript:")===0||i.indexOf("data:")===0)return null}if(t&&!kr.test(n))n=qr(t,n);try{n=encodeURI(n).replace(/%25/g,"%")}catch(i){return null}return n}var ft={},Fr=/^[^:]+:\/*[^/]*$/,Or=/^([^:]+:)[\s\S]*$/,Dr=/^([^:]+:\/*[^/]*)[\s\S]*$/;function qr(e,t){if(!ft[" "+e])if(Fr.test(e))ft[" "+e]=e+"/";else ft[" "+e]=bt(e,"/",!0);e=ft[" "+e];let n=e.indexOf(":")===-1;if(t.substring(0,2)==="//"){if(n)return t;return e.replace(Or,"$1")+t}else if(t.charAt(0)==="/"){if(n)return t;return e.replace(Dr,"$1")+t}else return e+t}var vt={exec:function e(){}};function Ro(e,t){let n=e.replace(/\|/g,(a,s,l)=>{let r=!1,d=s;while(--d>=0&&l[d]==="\\")r=!r;if(r)return"|";else return" |"}),i=n.split(/ \|/),o=0;if(!i[0].trim())i.shift();if(i.length>0&&!i[i.length-1].trim())i.pop();if(i.length>t)i.splice(t);else while(i.length<t)i.push("");for(;o<i.length;o++)i[o]=i[o].trim().replace(/\\\|/g,"|");return i}function bt(e,t,n){let i=e.length;if(i===0)return"";let o=0;while(o<i){let a=e.charAt(i-o-1);if(a===t&&!n)o++;else if(a!==t&&n)o++;else break}return e.slice(0,i-o)}function Hr(e,t){if(e.indexOf(t[1])===-1)return-1;let n=e.length,i=0,o=0;for(;o<n;o++)if(e[o]==="\\")o++;else if(e[o]===t[0])i++;else if(e[o]===t[1]){if(i--,i<0)return o}return-1}function Pr(e,t){if(!e||e.silent)return;if(t)console.warn("marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async");if(e.sanitize||e.sanitizer)console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");if(e.highlight||e.langPrefix!=="language-")console.warn("marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight.");if(e.mangle)console.warn("marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`.");if(e.baseUrl)console.warn("marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url.");if(e.smartypants)console.warn("marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants.");if(e.xhtml)console.warn("marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml.");if(e.headerIds||e.headerPrefix)console.warn("marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`.")}function Uo(e,t,n,i){let o=t.href,a=t.title?ae(t.title):null,s=e[1].replace(/\\([\[\]])/g,"$1");if(e[0].charAt(0)!=="!"){i.state.inLink=!0;let l={type:"link",raw:n,href:o,title:a,text:s,tokens:i.inlineTokens(s)};return i.state.inLink=!1,l}return{type:"image",raw:n,href:o,title:a,text:ae(s)}}function _r(e,t){let n=e.match(/^(\s+)(?:```)/);if(n===null)return t;let i=n[1];return t.split(`
`).map((o)=>{let a=o.match(/^\s+/);if(a===null)return o;let[s]=a;if(s.length>=i.length)return o.slice(i.length);return o}).join(`
`)}class kn{constructor(e){this.options=e||Ee}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:!this.options.pedantic?bt(n,`
`):n}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let n=t[0],i=_r(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:i}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){let i=bt(n,"#");if(this.options.pedantic)n=i.trim();else if(!i||/ $/.test(i))n=i.trim()}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let n=t[0].replace(/^ *>[ \t]?/gm,""),i=this.lexer.state.top;this.lexer.state.top=!0;let o=this.lexer.blockTokens(n);return this.lexer.state.top=i,{type:"blockquote",raw:t[0],tokens:o,text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n,i,o,a,s,l,r,d,p,g,f,z,x=t[1].trim(),C=x.length>1,c={type:"list",raw:"",ordered:C,start:C?+x.slice(0,-1):"",loose:!1,items:[]};if(x=C?`\\d{1,9}\\${x.slice(-1)}`:`\\${x}`,this.options.pedantic)x=C?x:"[*+-]";let u=new RegExp(`^( {0,3}${x})((?:[	 ][^\\n]*)?(?:\\n|$))`);while(e){if(z=!1,!(t=u.exec(e)))break;if(this.rules.block.hr.test(e))break;if(n=t[0],e=e.substring(n.length),d=t[2].split(`
`,1)[0].replace(/^\t+/,(h)=>" ".repeat(3*h.length)),p=e.split(`
`,1)[0],this.options.pedantic)a=2,f=d.trimLeft();else a=t[2].search(/[^ ]/),a=a>4?1:a,f=d.slice(a),a+=t[1].length;if(l=!1,!d&&/^ *$/.test(p))n+=p+`
`,e=e.substring(p.length+1),z=!0;if(!z){let h=new RegExp(`^ {0,${Math.min(3,a-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),v=new RegExp(`^ {0,${Math.min(3,a-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),b=new RegExp(`^ {0,${Math.min(3,a-1)}}(?:\`\`\`|~~~)`),w=new RegExp(`^ {0,${Math.min(3,a-1)}}#`);while(e){if(g=e.split(`
`,1)[0],p=g,this.options.pedantic)p=p.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ");if(b.test(p))break;if(w.test(p))break;if(h.test(p))break;if(v.test(e))break;if(p.search(/[^ ]/)>=a||!p.trim())f+=`
`+p.slice(a);else{if(l)break;if(d.search(/[^ ]/)>=4)break;if(b.test(d))break;if(w.test(d))break;if(v.test(d))break;f+=`
`+p}if(!l&&!p.trim())l=!0;n+=g+`
`,e=e.substring(g.length+1),d=p.slice(a)}}if(!c.loose){if(r)c.loose=!0;else if(/\n *\n *$/.test(n))r=!0}if(this.options.gfm){if(i=/^\[[ xX]\] /.exec(f),i)o=i[0]!=="[ ] ",f=f.replace(/^\[[ xX]\] +/,"")}c.items.push({type:"list_item",raw:n,task:!!i,checked:o,loose:!1,text:f}),c.raw+=n}c.items[c.items.length-1].raw=n.trimRight(),c.items[c.items.length-1].text=f.trimRight(),c.raw=c.raw.trimRight();let m=c.items.length;for(s=0;s<m;s++)if(this.lexer.state.top=!1,c.items[s].tokens=this.lexer.blockTokens(c.items[s].text,[]),!c.loose){let h=c.items[s].tokens.filter((b)=>b.type==="space"),v=h.length>0&&h.some((b)=>/\n.*\n/.test(b.raw));c.loose=v}if(c.loose)for(s=0;s<m;s++)c.items[s].loose=!0;return c}}html(e){let t=this.rules.block.html.exec(e);if(t){let n={type:"html",block:!0,raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};if(this.options.sanitize){let i=this.options.sanitizer?this.options.sanitizer(t[0]):ae(t[0]);n.type="paragraph",n.text=i,n.tokens=this.lexer.inline(i)}return n}}def(e){let t=this.rules.block.def.exec(e);if(t){let n=t[1].toLowerCase().replace(/\s+/g," "),i=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",o=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:i,title:o}}}table(e){let t=this.rules.block.table.exec(e);if(t){let n={type:"table",header:Ro(t[1]).map((i)=>{return{text:i}}),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(n.header.length===n.align.length){n.raw=t[0];let i=n.align.length,o,a,s,l;for(o=0;o<i;o++)if(/^ *-+: *$/.test(n.align[o]))n.align[o]="right";else if(/^ *:-+: *$/.test(n.align[o]))n.align[o]="center";else if(/^ *:-+ *$/.test(n.align[o]))n.align[o]="left";else n.align[o]=null;i=n.rows.length;for(o=0;o<i;o++)n.rows[o]=Ro(n.rows[o],n.header.length).map((r)=>{return{text:r}});i=n.header.length;for(a=0;a<i;a++)n.header[a].tokens=this.lexer.inline(n.header[a].text);i=n.rows.length;for(a=0;a<i;a++){l=n.rows[a];for(s=0;s<l.length;s++)l[s].tokens=this.lexer.inline(l[s].text)}return n}}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:ae(t[1])}}tag(e){let t=this.rules.inline.tag.exec(e);if(t){if(!this.lexer.state.inLink&&/^<a /i.test(t[0]))this.lexer.state.inLink=!0;else if(this.lexer.state.inLink&&/^<\/a>/i.test(t[0]))this.lexer.state.inLink=!1;if(!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0]))this.lexer.state.inRawBlock=!0;else if(this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]))this.lexer.state.inRawBlock=!1;return{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):ae(t[0]):t[0]}}}link(e){let t=this.rules.inline.link.exec(e);if(t){let n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;let a=bt(n.slice(0,-1),"\\");if((n.length-a.length)%2===0)return}else{let a=Hr(t[2],"()");if(a>-1){let l=(t[0].indexOf("!")===0?5:4)+t[1].length+a;t[2]=t[2].substring(0,a),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let i=t[2],o="";if(this.options.pedantic){let a=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);if(a)i=a[1],o=a[3]}else o=t[3]?t[3].slice(1,-1):"";if(i=i.trim(),/^</.test(i))if(this.options.pedantic&&!/>$/.test(n))i=i.slice(1);else i=i.slice(1,-1);return Uo(t,{href:i?i.replace(this.rules.inline._escapes,"$1"):i,title:o?o.replace(this.rules.inline._escapes,"$1"):o},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let i=(n[2]||n[1]).replace(/\s+/g," ");if(i=t[i.toLowerCase()],!i){let o=n[0].charAt(0);return{type:"text",raw:o,text:o}}return Uo(n,i,n[0],this.lexer)}}emStrong(e,t,n=""){let i=this.rules.inline.emStrong.lDelim.exec(e);if(!i)return;if(i[3]&&n.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2])||!n||this.rules.inline.punctuation.exec(n)){let a=i[0].length-1,s,l,r=a,d=0,p=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;p.lastIndex=0,t=t.slice(-1*e.length+a);while((i=p.exec(t))!=null){if(s=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!s)continue;if(l=s.length,i[3]||i[4]){r+=l;continue}else if(i[5]||i[6]){if(a%3&&!((a+l)%3)){d+=l;continue}}if(r-=l,r>0)continue;l=Math.min(l,l+r+d);let g=e.slice(0,a+i.index+l+1);if(Math.min(a,l)%2){let z=g.slice(1,-1);return{type:"em",raw:g,text:z,tokens:this.lexer.inlineTokens(z)}}let f=g.slice(2,-2);return{type:"strong",raw:g,text:f,tokens:this.lexer.inlineTokens(f)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," "),i=/[^ ]/.test(n),o=/^ /.test(n)&&/ $/.test(n);if(i&&o)n=n.substring(1,n.length-1);return n=ae(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e,t){let n=this.rules.inline.autolink.exec(e);if(n){let i,o;if(n[2]==="@")i=ae(this.options.mangle?t(n[1]):n[1]),o="mailto:"+i;else i=ae(n[1]),o=i;return{type:"link",raw:n[0],text:i,href:o,tokens:[{type:"text",raw:i,text:i}]}}}url(e,t){let n;if(n=this.rules.inline.url.exec(e)){let i,o;if(n[2]==="@")i=ae(this.options.mangle?t(n[0]):n[0]),o="mailto:"+i;else{let a;do a=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0];while(a!==n[0]);if(i=ae(n[0]),n[1]==="www.")o="http://"+n[0];else o=n[0]}return{type:"link",raw:n[0],text:i,href:o,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e,t){let n=this.rules.inline.text.exec(e);if(n){let i;if(this.lexer.state.inRawBlock)i=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):ae(n[0]):n[0];else i=ae(this.options.smartypants?t(n[0]):n[0]);return{type:"text",raw:n[0],text:i}}}}var $={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:vt,lheading:/^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};$._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;$._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;$.def=Y($.def).replace("label",$._label).replace("title",$._title).getRegex();$.bullet=/(?:[*+-]|\d{1,9}[.)])/;$.listItemStart=Y(/^( *)(bull) */).replace("bull",$.bullet).getRegex();$.list=Y($.list).replace(/bull/g,$.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+$.def.source+")").getRegex();$._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";$._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;$.html=Y($.html,"i").replace("comment",$._comment).replace("tag",$._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();$.lheading=Y($.lheading).replace(/bull/g,$.bullet).getRegex();$.paragraph=Y($._paragraph).replace("hr",$.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",$._tag).getRegex();$.blockquote=Y($.blockquote).replace("paragraph",$.paragraph).getRegex();$.normal={...$};$.gfm={...$.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};$.gfm.table=Y($.gfm.table).replace("hr",$.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",$._tag).getRegex();$.gfm.paragraph=Y($._paragraph).replace("hr",$.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",$.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",$._tag).getRegex();$.pedantic={...$.normal,html:Y(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",$._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:vt,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Y($.normal._paragraph).replace("hr",$.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",$.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};var k={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:vt,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,rDelimAst:/^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:vt,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^((?![*_])[\spunctuation])/};k._punctuation="\\p{P}$+<=>`^|~";k.punctuation=Y(k.punctuation,"u").replace(/punctuation/g,k._punctuation).getRegex();k.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;k.anyPunctuation=/\\[punct]/g;k._escapes=/\\([punct])/g;k._comment=Y($._comment).replace("(?:-->|$)","-->").getRegex();k.emStrong.lDelim=Y(k.emStrong.lDelim,"u").replace(/punct/g,k._punctuation).getRegex();k.emStrong.rDelimAst=Y(k.emStrong.rDelimAst,"gu").replace(/punct/g,k._punctuation).getRegex();k.emStrong.rDelimUnd=Y(k.emStrong.rDelimUnd,"gu").replace(/punct/g,k._punctuation).getRegex();k.anyPunctuation=Y(k.anyPunctuation,"gu").replace(/punct/g,k._punctuation).getRegex();k._escapes=Y(k._escapes,"gu").replace(/punct/g,k._punctuation).getRegex();k._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;k._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;k.autolink=Y(k.autolink).replace("scheme",k._scheme).replace("email",k._email).getRegex();k._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;k.tag=Y(k.tag).replace("comment",k._comment).replace("attribute",k._attribute).getRegex();k._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;k._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;k._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;k.link=Y(k.link).replace("label",k._label).replace("href",k._href).replace("title",k._title).getRegex();k.reflink=Y(k.reflink).replace("label",k._label).replace("ref",$._label).getRegex();k.nolink=Y(k.nolink).replace("ref",$._label).getRegex();k.reflinkSearch=Y(k.reflinkSearch,"g").replace("reflink",k.reflink).replace("nolink",k.nolink).getRegex();k.normal={...k};k.pedantic={...k.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:Y(/^!?\[(label)\]\((.*?)\)/).replace("label",k._label).getRegex(),reflink:Y(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",k._label).getRegex()};k.gfm={...k.normal,escape:Y(k.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};k.gfm.url=Y(k.gfm.url,"i").replace("email",k.gfm._extended_email).getRegex();k.breaks={...k.gfm,br:Y(k.br).replace("{2,}","*").getRegex(),text:Y(k.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};function Br(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function Go(e){let t="",n,i,o=e.length;for(n=0;n<o;n++){if(i=e.charCodeAt(n),Math.random()>0.5)i="x"+i.toString(16);t+="&#"+i+";"}return t}class xe{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Ee,this.options.tokenizer=this.options.tokenizer||new kn,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={block:$.normal,inline:k.normal};if(this.options.pedantic)t.block=$.pedantic,t.inline=k.pedantic;else if(this.options.gfm)if(t.block=$.gfm,this.options.breaks)t.inline=k.breaks;else t.inline=k.gfm;this.tokenizer.rules=t}static get rules(){return{block:$,inline:k}}static lex(e,t){return new xe(t).lex(e)}static lexInline(e,t){return new xe(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let t;while(t=this.inlineQueue.shift())this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){if(this.options.pedantic)e=e.replace(/\t/g,"    ").replace(/^ +$/gm,"");else e=e.replace(/^( *)(\t+)/gm,(s,l,r)=>{return l+"    ".repeat(r.length)});let n,i,o,a;while(e){if(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((s)=>{if(n=s.call({lexer:this},e,t))return e=e.substring(n.raw.length),t.push(n),!0;return!1}))continue;if(n=this.tokenizer.space(e)){if(e=e.substring(n.raw.length),n.raw.length===1&&t.length>0)t[t.length-1].raw+=`
`;else t.push(n);continue}if(n=this.tokenizer.code(e)){if(e=e.substring(n.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text"))i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text;else t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){if(e=e.substring(n.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text"))i.raw+=`
`+n.raw,i.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text;else if(!this.tokens.links[n.tag])this.tokens.links[n.tag]={href:n.href,title:n.title};continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(o=e,this.options.extensions&&this.options.extensions.startBlock){let s=1/0,l=e.slice(1),r;if(this.options.extensions.startBlock.forEach(function(d){if(r=d.call({lexer:this},l),typeof r==="number"&&r>=0)s=Math.min(s,r)}),s<1/0&&s>=0)o=e.substring(0,s+1)}if(this.state.top&&(n=this.tokenizer.paragraph(o))){if(i=t[t.length-1],a&&i.type==="paragraph")i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text;else t.push(n);a=o.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){if(e=e.substring(n.raw.length),i=t[t.length-1],i&&i.type==="text")i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text;else t.push(n);continue}if(e){let s="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(s);break}else throw new Error(s)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,i,o,a=e,s,l,r;if(this.tokens.links){let d=Object.keys(this.tokens.links);if(d.length>0){while((s=this.tokenizer.rules.inline.reflinkSearch.exec(a))!=null)if(d.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1)))a=a.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex)}}while((s=this.tokenizer.rules.inline.blockSkip.exec(a))!=null)a=a.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);while((s=this.tokenizer.rules.inline.anyPunctuation.exec(a))!=null)a=a.slice(0,s.index)+"++"+a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);while(e){if(!l)r="";if(l=!1,this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((d)=>{if(n=d.call({lexer:this},e,t))return e=e.substring(n.raw.length),t.push(n),!0;return!1}))continue;if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){if(e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text")i.raw+=n.raw,i.text+=n.text;else t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){if(e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text")i.raw+=n.raw,i.text+=n.text;else t.push(n);continue}if(n=this.tokenizer.emStrong(e,a,r)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e,Go)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e,Go))){e=e.substring(n.raw.length),t.push(n);continue}if(o=e,this.options.extensions&&this.options.extensions.startInline){let d=1/0,p=e.slice(1),g;if(this.options.extensions.startInline.forEach(function(f){if(g=f.call({lexer:this},p),typeof g==="number"&&g>=0)d=Math.min(d,g)}),d<1/0&&d>=0)o=e.substring(0,d+1)}if(n=this.tokenizer.inlineText(o,Br)){if(e=e.substring(n.raw.length),n.raw.slice(-1)!=="_")r=n.raw.slice(-1);if(l=!0,i=t[t.length-1],i&&i.type==="text")i.raw+=n.raw,i.text+=n.text;else t.push(n);continue}if(e){let d="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return t}}class Fn{constructor(e){this.options=e||Ee}code(e,t,n){let i=(t||"").match(/\S*/)[0];if(this.options.highlight){let o=this.options.highlight(e,i);if(o!=null&&o!==e)n=!0,e=o}if(e=e.replace(/\n$/,"")+`
`,!i)return"<pre><code>"+(n?e:ae(e,!0))+`</code></pre>
`;return'<pre><code class="'+this.options.langPrefix+ae(i)+'">'+(n?e:ae(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,t){return e}heading(e,t,n,i){if(this.options.headerIds){let o=this.options.headerPrefix+i.slug(n);return`<h${t} id="${o}">${e}</h${t}>
`}return`<h${t}>${e}</h${t}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,t,n){let i=t?"ol":"ul",o=t&&n!==1?' start="'+n+'"':"";return"<"+i+o+`>
`+e+"</"+i+`>
`}listitem(e){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,t){if(t)t=`<tbody>${t}</tbody>`;return`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){let n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){if(e=$o(this.options.sanitize,this.options.baseUrl,e),e===null)return n;let i='<a href="'+e+'"';if(t)i+=' title="'+t+'"';return i+=">"+n+"</a>",i}image(e,t,n){if(e=$o(this.options.sanitize,this.options.baseUrl,e),e===null)return n;let i=`<img src="${e}" alt="${n}"`;if(t)i+=` title="${t}"`;return i+=this.options.xhtml?"/>":">",i}text(e){return e}}class xt{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class yt{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let n=e,i=0;if(this.seen.hasOwnProperty(n)){i=this.seen[e];do i++,n=e+"-"+i;while(this.seen.hasOwnProperty(n))}if(!t)this.seen[e]=i,this.seen[n]=0;return n}slug(e,t={}){let n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)}}class ye{constructor(e){this.options=e||Ee,this.options.renderer=this.options.renderer||new Fn,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new xt,this.slugger=new yt}static parse(e,t){return new ye(t).parse(e)}static parseInline(e,t){return new ye(t).parseInline(e)}parse(e,t=!0){let n="",i,o,a,s,l,r,d,p,g,f,z,x,C,c,u,m,h,v,b,w=e.length;for(i=0;i<w;i++){if(f=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[f.type]){if(b=this.options.extensions.renderers[f.type].call({parser:this},f),b!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(f.type)){n+=b||"";continue}}switch(f.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{n+=this.renderer.heading(this.parseInline(f.tokens),f.depth,Jo(this.parseInline(f.tokens,this.textRenderer)),this.slugger);continue}case"code":{n+=this.renderer.code(f.text,f.lang,f.escaped);continue}case"table":{p="",d="",s=f.header.length;for(o=0;o<s;o++)d+=this.renderer.tablecell(this.parseInline(f.header[o].tokens),{header:!0,align:f.align[o]});p+=this.renderer.tablerow(d),g="",s=f.rows.length;for(o=0;o<s;o++){r=f.rows[o],d="",l=r.length;for(a=0;a<l;a++)d+=this.renderer.tablecell(this.parseInline(r[a].tokens),{header:!1,align:f.align[a]});g+=this.renderer.tablerow(d)}n+=this.renderer.table(p,g);continue}case"blockquote":{g=this.parse(f.tokens),n+=this.renderer.blockquote(g);continue}case"list":{z=f.ordered,x=f.start,C=f.loose,s=f.items.length,g="";for(o=0;o<s;o++){if(u=f.items[o],m=u.checked,h=u.task,c="",u.task)if(v=this.renderer.checkbox(m),C)if(u.tokens.length>0&&u.tokens[0].type==="paragraph"){if(u.tokens[0].text=v+" "+u.tokens[0].text,u.tokens[0].tokens&&u.tokens[0].tokens.length>0&&u.tokens[0].tokens[0].type==="text")u.tokens[0].tokens[0].text=v+" "+u.tokens[0].tokens[0].text}else u.tokens.unshift({type:"text",text:v});else c+=v;c+=this.parse(u.tokens,C),g+=this.renderer.listitem(c,h,m)}n+=this.renderer.list(g,z,x);continue}case"html":{n+=this.renderer.html(f.text,f.block);continue}case"paragraph":{n+=this.renderer.paragraph(this.parseInline(f.tokens));continue}case"text":{g=f.tokens?this.parseInline(f.tokens):f.text;while(i+1<w&&e[i+1].type==="text")f=e[++i],g+=`
`+(f.tokens?this.parseInline(f.tokens):f.text);n+=t?this.renderer.paragraph(g):g;continue}default:{let S='Token with "'+f.type+'" type was not found.';if(this.options.silent){console.error(S);return}else throw new Error(S)}}}return n}parseInline(e,t){t=t||this.renderer;let n="",i,o,a,s=e.length;for(i=0;i<s;i++){if(o=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){if(a=this.options.extensions.renderers[o.type].call({parser:this},o),a!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){n+=a||"";continue}}switch(o.type){case"escape":{n+=t.text(o.text);break}case"html":{n+=t.html(o.text);break}case"link":{n+=t.link(o.href,o.title,this.parseInline(o.tokens,t));break}case"image":{n+=t.image(o.href,o.title,o.text);break}case"strong":{n+=t.strong(this.parseInline(o.tokens,t));break}case"em":{n+=t.em(this.parseInline(o.tokens,t));break}case"codespan":{n+=t.codespan(o.text);break}case"br":{n+=t.br();break}case"del":{n+=t.del(this.parseInline(o.tokens,t));break}case"text":{n+=t.text(o.text);break}default:{let l='Token with "'+o.type+'" type was not found.';if(this.options.silent){console.error(l);return}else throw new Error(l)}}}return n}}class Ln{constructor(e){this.options=e||Ee}static passThroughHooks=new Set(["preprocess","postprocess"]);preprocess(e){return e}postprocess(e){return e}}class Qo{defaults=bi();options=this.setOptions;parse=this.#e(xe.lex,ye.parse);parseInline=this.#e(xe.lexInline,ye.parseInline);Parser=ye;parser=ye.parse;Renderer=Fn;TextRenderer=xt;Lexer=xe;lexer=xe.lex;Tokenizer=kn;Slugger=yt;Hooks=Ln;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let i of e)switch(n=n.concat(t.call(this,i)),i.type){case"table":{for(let o of i.header)n=n.concat(this.walkTokens(o.tokens,t));for(let o of i.rows)for(let a of o)n=n.concat(this.walkTokens(a.tokens,t));break}case"list":{n=n.concat(this.walkTokens(i.items,t));break}default:if(this.defaults.extensions&&this.defaults.extensions.childTokens&&this.defaults.extensions.childTokens[i.type])this.defaults.extensions.childTokens[i.type].forEach((o)=>{n=n.concat(this.walkTokens(i[o],t))});else if(i.tokens)n=n.concat(this.walkTokens(i.tokens,t))}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach((n)=>{let i={...n};if(i.async=this.defaults.async||i.async||!1,n.extensions)n.extensions.forEach((o)=>{if(!o.name)throw new Error("extension name required");if(o.renderer){let a=t.renderers[o.name];if(a)t.renderers[o.name]=function(...s){let l=o.renderer.apply(this,s);if(l===!1)l=a.apply(this,s);return l};else t.renderers[o.name]=o.renderer}if(o.tokenizer){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");if(t[o.level])t[o.level].unshift(o.tokenizer);else t[o.level]=[o.tokenizer];if(o.start){if(o.level==="block")if(t.startBlock)t.startBlock.push(o.start);else t.startBlock=[o.start];else if(o.level==="inline")if(t.startInline)t.startInline.push(o.start);else t.startInline=[o.start]}}if(o.childTokens)t.childTokens[o.name]=o.childTokens}),i.extensions=t;if(n.renderer){let o=this.defaults.renderer||new Fn(this.defaults);for(let a in n.renderer){let s=o[a];o[a]=(...l)=>{let r=n.renderer[a].apply(o,l);if(r===!1)r=s.apply(o,l);return r}}i.renderer=o}if(n.tokenizer){let o=this.defaults.tokenizer||new kn(this.defaults);for(let a in n.tokenizer){let s=o[a];o[a]=(...l)=>{let r=n.tokenizer[a].apply(o,l);if(r===!1)r=s.apply(o,l);return r}}i.tokenizer=o}if(n.hooks){let o=this.defaults.hooks||new Ln;for(let a in n.hooks){let s=o[a];if(Ln.passThroughHooks.has(a))o[a]=(l)=>{if(this.defaults.async)return Promise.resolve(n.hooks[a].call(o,l)).then((d)=>{return s.call(o,d)});let r=n.hooks[a].call(o,l);return s.call(o,r)};else o[a]=(...l)=>{let r=n.hooks[a].apply(o,l);if(r===!1)r=s.apply(o,l);return r}}i.hooks=o}if(n.walkTokens){let o=this.defaults.walkTokens;i.walkTokens=function(a){let s=[];if(s.push(n.walkTokens.call(this,a)),o)s=s.concat(o.call(this,a));return s}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}#e(e,t){return(n,i,o)=>{if(typeof i==="function")o=i,i=null;let a={...i};i={...this.defaults,...a};let s=this.#n(i.silent,i.async,o);if(typeof n==="undefined"||n===null)return s(new Error("marked(): input parameter is undefined or null"));if(typeof n!=="string")return s(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(Pr(i,o),i.hooks)i.hooks.options=i;if(o){let l=i.highlight,r;try{if(i.hooks)n=i.hooks.preprocess(n);r=e(n,i)}catch(g){return s(g)}let d=(g)=>{let f;if(!g)try{if(i.walkTokens)this.walkTokens(r,i.walkTokens);if(f=t(r,i),i.hooks)f=i.hooks.postprocess(f)}catch(z){g=z}return i.highlight=l,g?s(g):o(null,f)};if(!l||l.length<3)return d();if(delete i.highlight,!r.length)return d();let p=0;if(this.walkTokens(r,(g)=>{if(g.type==="code")p++,setTimeout(()=>{l(g.text,g.lang,(f,z)=>{if(f)return d(f);if(z!=null&&z!==g.text)g.text=z,g.escaped=!0;if(p--,p===0)d()})},0)}),p===0)d();return}if(i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(n):n).then((l)=>e(l,i)).then((l)=>i.walkTokens?Promise.all(this.walkTokens(l,i.walkTokens)).then(()=>l):l).then((l)=>t(l,i)).then((l)=>i.hooks?i.hooks.postprocess(l):l).catch(s);try{if(i.hooks)n=i.hooks.preprocess(n);let l=e(n,i);if(i.walkTokens)this.walkTokens(l,i.walkTokens);let r=t(l,i);if(i.hooks)r=i.hooks.postprocess(r);return r}catch(l){return s(l)}}}#n(e,t,n){return(i)=>{if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let o="<p>An error occurred:</p><pre>"+ae(i.message+"",!0)+"</pre>";if(t)return Promise.resolve(o);if(n){n(null,o);return}return o}if(t)return Promise.reject(i);if(n){n(i);return}throw i}}}var Ge=new Qo(Ee);function R(e,t,n){return Ge.parse(e,t,n)}R.options=R.setOptions=function(e){return Ge.setOptions(e),R.defaults=Ge.defaults,Yo(R.defaults),R};R.getDefaults=bi;R.defaults=Ee;R.use=function(...e){return Ge.use(...e),R.defaults=Ge.defaults,Yo(R.defaults),R};R.walkTokens=function(e,t){return Ge.walkTokens(e,t)};R.parseInline=Ge.parseInline;R.Parser=ye;R.parser=ye.parse;R.Renderer=Fn;R.TextRenderer=xt;R.Lexer=xe;R.lexer=xe.lex;R.Tokenizer=kn;R.Slugger=yt;R.Hooks=Ln;R.parse=R;var{options:_2,setOptions:B2,use:N2,walkTokens:V2,parseInline:W2}=R;var $2=ye.parse,R2=xe.lex;/*!
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
*/function Zo(e,t){if(t==null)t="";else if(typeof t!=="string")t=String(t);return t.replace(/\{\{([^}]+)\}\}/g,(n,i)=>{let o=Je[`${e}${i.startsWith("[")?i:"."+i}`];return o===void 0?n:Zo(e,String(o))})}class vi extends H{src="";value="";content=null;elements=!1;context={};constructor(){super();this.initAttributes("src","elements","context")}connectedCallback(){if(super.connectedCallback(),this.src!=="")(async()=>{let e=await fetch(this.src);this.value=await e.text()})();else if(this.value==="")if(this.elements)this.value=this.innerHTML;else this.value=this.textContent!=null?this.textContent:""}didRender=()=>{};render(){super.render(),Je[this.instanceId]=typeof this.context==="string"?JSON.parse(this.context):this.context;let e=Zo(this.instanceId,this.value);if(this.elements){let t=e.split(`
`).reduce((n,i)=>{if(i.startsWith("<")||n.length===0)n.push(i);else{let o=n[n.length-1];if(!o.startsWith("<")||!o.endsWith(">"))n[n.length-1]+=`
`+i;else n.push(i)}return n},[]);this.innerHTML=t.map((n)=>n.startsWith("<")&&n.endsWith(">")?n:R(n,{mangle:!1,headerIds:!1})).join("")}else this.innerHTML=R(e,{mangle:!1,headerIds:!1});this.didRender()}}var Nr=vi.elementCreator({tag:"xin-md"});/*!

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
*/var{div:xi,button:Vr}=P,Wr={error:"red",warn:"orange",info:"royalblue",log:"gray",success:"green",progress:"royalblue"};class Ye extends H{static singleton;static styleSpec={":host":{_notificationSpacing:8,_notificationWidth:360,_notificationPadding:`${y.notificationSpacing} ${y.notificationSpacing50} ${y.notificationSpacing} ${y.notificationSpacing200}`,_notificationBg:"#fafafa",_notificationAccentColor:"#aaa",_notificationTextColor:"#444",_notificationIconSize:y.notificationSpacing300,_notificationButtonSize:48,_notificationBorderWidth:"3px 0 0",_notificationBorderRadius:y.notificationSpacing50,position:"fixed",left:0,right:0,bottom:0,paddingBottom:y.notificationSpacing,width:y.notificationWidth,display:"flex",flexDirection:"column-reverse",margin:"0 auto",gap:y.notificationSpacing,maxHeight:"50vh",overflow:"hidden auto",boxShadow:"none !important"},":host *":{color:y.notificationTextColor},":host .note":{display:"grid",background:y.notificationBg,padding:y.notificationPadding,gridTemplateColumns:`${y.notificationIconSize} 1fr ${y.notificationButtonSize}`,gap:y.notificationSpacing,alignItems:"center",borderRadius:y.notificationBorderRadius,boxShadow:`0 2px 8px #0006, inset 0 0 0 2px ${y.notificationAccentColor}`,borderColor:y.notificationAccentColor,borderWidth:y.notificationBorderWidth,borderStyle:"solid",transition:"0.5s ease-in",transitionProperty:"margin, opacity",zIndex:1},":host .note .icon":{fill:y.notificationAccentColor},":host .note button":{display:"flex",lineHeight:y.notificationButtonSize,padding:0,margin:0,height:y.notificationButtonSize,width:y.notificationButtonSize,background:"transparent",alignItems:"center",justifyContent:"center",boxShadow:"none",border:"none",position:"relative"},":host .note button:hover svg":{fill:y.notificationAccentColor},":host .note button:active svg":{borderRadius:99,fill:y.notificationBg,background:y.notificationAccentColor,padding:y.spacing50},":host .note svg":{height:y.notificationIconSize,width:y.notificationIconSize,pointerEvents:"none"},":host .message":{display:"flex",flexDirection:"column",alignItems:"center",gap:y.notificationSpacing},":host .note.closing":{opacity:0,zIndex:0}};static removeNote(e){e.classList.add("closing"),e.style.marginBottom=-e.offsetHeight+"px";let t=()=>{e.remove()};e.addEventListener("transitionend",t),setTimeout(t,1000)}static post(e){let{message:t,duration:n,type:i,close:o,progress:a,icon:s}=Object.assign({type:"info",duration:-1},typeof e==="string"?{message:e}:e);if(!this.singleton)this.singleton=ea();let l=this.singleton;document.body.append(l),l.style.zIndex=String(jn()+1);let r=Wr[i],d=a||i==="progress"?P.progress():{},p=()=>{if(o)o();Ye.removeNote(f)},g=s instanceof SVGElement?s:s?A[s]({class:"icon"}):A.info({class:"icon"}),f=xi({class:`note ${i}`,style:{_notificationAccentColor:r}},g,xi({class:"message"},xi(t),d),Vr({class:"close",title:"close",apply(z){z.addEventListener("click",p)}},A.x()));if(l.shadowRoot.append(f),d instanceof HTMLProgressElement&&a instanceof Function){d.setAttribute("max",String(100)),d.value=a();let z=setInterval(()=>{if(!l.shadowRoot.contains(f)){clearInterval(z);return}let x=a();if(d.value=x,x>=100)Ye.removeNote(f)},1000)}if(n>0)setTimeout(()=>{Ye.removeNote(f)},n*1000);return f.scrollIntoView(),p}content=null}var ea=Ye.elementCreator({tag:"xin-notification"});function $r(e){return Ye.post(e)}/*!
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
*/var na=async(e,t="SHA-1")=>{let i=new TextEncoder().encode(e),o=await crypto.subtle.digest(t,i);return Array.from(new Uint8Array(o)).map((l)=>l.toString(16).padStart(2,"0")).join("")},ta=async(e)=>{let t=await na(e),n=await fetch(`https://weakpass.com/api/v1/search/${t}`);if(n.ok){let i=await n.json();console.log("password found in weakpass database",i)}return n.status!==404},{span:yi,xinSlot:Rr}=P;class wi extends H{minLength=8;goodLength=12;indicatorColors="#f00,#f40,#f80,#ef0,#8f0,#0a2";descriptionColors="#000,#000,#000,#000,#000,#fff";issues={tooShort:!0,short:!0,noUpper:!0,noLower:!0,noNumber:!0,noSpecial:!0};issueDescriptions={tooShort:"too short",short:"short",noUpper:"no upper case",noLower:"no lower case",noNumber:"no digits",noSpecial:"no unusual characters"};value=0;strengthDescriptions=["unacceptable","very weak","weak","moderate","strong","very strong"];constructor(){super();this.initAttributes("minLength","goodLength","indicatorColors")}strength(e){return this.issues={tooShort:e.length<this.minLength,short:e.length<this.goodLength,noUpper:!e.match(/[A-Z]/),noLower:!e.match(/[a-z]/),noNumber:!e.match(/[0-9]/),noSpecial:!e.match(/[^a-zA-Z0-9]/)},this.issues.tooShort?0:Object.values(this.issues).filter((t)=>!t).length-1}async isBreached(){let e=this.querySelector("input")?.value;if(!e||typeof e!=="string")return!0;return await ta(e)}updateIndicator=(e)=>{let{level:t,description:n}=this.parts,i=this.indicatorColors.split(","),o=this.descriptionColors.split(","),a=this.strength(e);if(this.value!==a)this.value=a,this.dispatchEvent(new Event("change"));t.style.width=`${(a+1)*16.67}%`,this.style.setProperty("--indicator-color",i[a]),this.style.setProperty("--description-color",o[a]),n.textContent=this.strengthDescriptions[a]};update=(e)=>{let t=e.target.closest("input");this.updateIndicator(t?.value||"")};content=()=>[Rr({onInput:this.update}),yi({part:"meter"},yi({part:"level"}),yi({part:"description"}))];render(){super.render();let e=this.querySelector("input");this.updateIndicator(e?.value)}}var Ur=wi.elementCreator({tag:"xin-password-strength",styleSpec:{":host":{display:"inline-flex",flexDirection:"column",gap:y.spacing50,position:"relative"},":host xin-slot":{display:"flex"},':host [part="meter"]':{display:"block",position:"relative",height:D.meterHeight("24px"),background:D.indicatorBg("white"),borderRadius:D.meterRadius("4px"),boxShadow:D.meterShadow(`inset 0 0 0 2px ${y.indicatorColor}`)},':host [part="level"]':{height:D.levelHeight("20px"),content:'" "',display:"inline-block",width:0,transition:"0.15s ease-out",background:y.indicatorColor,margin:D.levelMargin("2px"),borderRadius:D.levelRadius("2px")},':host [part="description"]':{position:"absolute",inset:"0",color:y.descriptionColor,height:D.meterHeight("24px"),lineHeight:D.meterHeight("24px"),textAlign:"center"}}});/*!
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
*/var{span:Mi}=P;class zi extends H{iconSize=24;min=1;max=5;step=1;value=null;icon="star";color="#f91";emptyColor="#8888";emptyStrokeWidth=2;readonly=!1;hollow=!1;static styleSpec={":host":{display:"inline-block",position:"relative",width:"fit-content"},":host::part(container)":{position:"relative",display:"inline-block"},":host::part(empty), :host::part(filled)":{height:"100%",whiteSpace:"nowrap",overflow:"hidden"},":host::part(empty)":{pointerEvents:"none",_textColor:"transparent"},':host [part="empty"]:not(.hollow)':{fill:y.ratingEmptyColor},":host .hollow":{fill:"none",stroke:y.ratingEmptyColor,strokeWidth:y.ratingEmptyStrokeWidth},":host::part(filled)":{position:"absolute",left:0,fill:y.ratingColor,stroke:y.ratingColor,strokeWidth:y.ratingEmptyStrokeWidth},":host svg":{transform:"scale(0.7)",pointerEvents:"all !important",transition:"0.25s ease-in-out"},":host svg:hover":{transform:"scale(0.9)"},":host svg:active":{transform:"scale(1)"}};constructor(){super();this.initAttributes("max","min","icon","step","color","emptyColor","readonly","iconSize","hollow")}content=()=>Mi({part:"container"},Mi({part:"empty"}),Mi({part:"filled"}));displayValue(e){let{empty:t,filled:n}=this.parts,i=Math.round((e||0)/this.step)*this.step;n.style.width=i/this.max*t.offsetWidth+"px"}update=(e)=>{if(this.readonly)return;let{empty:t}=this.parts,n=e instanceof MouseEvent?e.pageX-t.getBoundingClientRect().x:0,i=Math.min(Math.max(this.min,Math.round(n/t.offsetWidth*this.max/this.step+this.step*0.5)*this.step),this.max);if(e.type==="click")this.value=i;else if(e.type==="mousemove")this.displayValue(i);else this.displayValue(this.value||0)};handleKey=(e)=>{let t=Number(this.value);if(t==null)t=Math.round((this.min+this.max)*0.5*this.step)*this.step;let n=!1;switch(e.key){case"ArrowUp":case"ArrowRight":t+=this.step,n=!0;break;case"ArrowDown":case"ArrowLeft":t-=this.step,n=!0;break}if(this.value=Math.max(Math.min(t,this.max),this.min),n)e.stopPropagation(),e.preventDefault()};connectedCallback(){super.connectedCallback();let{container:e}=this.parts;e.tabIndex=0,e.addEventListener("mousemove",this.update,!0),e.addEventListener("mouseleave",this.update),e.addEventListener("blur",this.update),e.addEventListener("click",this.update),e.addEventListener("keydown",this.handleKey)}_renderedIcon="";render(){if(super.render(),this.style.setProperty("--rating-color",this.color),this.style.setProperty("--rating-empty-color",this.emptyColor),this.style.setProperty("--rating-empty-stroke-width",String(this.emptyStrokeWidth*32)),this.readonly)this.role="image";else this.role="slider";this.ariaLabel=`rating ${this.value} out of ${this.max}`,this.ariaValueMax=String(this.max),this.ariaValueMin=String(this.min),this.ariaValueNow=this.value===null?String(-1):String(this.value);let{empty:e,filled:t}=this.parts,n=this.iconSize+"px";if(e.classList.toggle("hollow",this.hollow),this._renderedIcon!==this.icon){this._renderedIcon=this.icon;for(let i=0;i<this.max;i++)e.append(A[this.icon]({height:n})),t.append(A[this.icon]({height:n}))}this.style.height=n,this.displayValue(this.value)}}var Gr=zi.elementCreator({tag:"xin-rating"});/*!
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
*/var{xinSlot:ia,div:Yr,button:Kr,span:oa}=P,Xr=[{caption:"Title",tagType:"H1"},{caption:"Heading",tagType:"H2"},{caption:"Subheading",tagType:"H3"},{caption:"Minor heading",tagType:"H4"},{caption:"Body",tagType:"P"},{caption:"Code Block",tagType:"PRE"}];function Si(e=Xr){return An({title:"paragraph style",slot:"toolbar",class:"block-style",options:e.map(({caption:t,tagType:n})=>({caption:t,value:`formatBlock,${n}`}))})}function dn(e="10px"){return oa({slot:"toolbar",style:{flex:`0 0 ${e}`,content:" "}})}function Jr(e="10px"){return oa({slot:"toolbar",style:{flex:`0 0 ${e}`,content:" "}})}function pe(e,t,n){return Kr({slot:"toolbar",dataCommand:t,title:e},n)}var Qr=()=>[pe("left-justify","justifyLeft",A.alignLeft()),pe("center","justifyCenter",A.alignCenter()),pe("right-justify","justifyRight",A.alignRight()),dn(),pe("bullet list","insertUnorderedList",A.listBullet()),pe("numbered list","insertOrderedList",A.listNumber()),dn(),pe("indent","indent",A.blockIndent()),pe("indent","outdent",A.blockOutdent())],aa=()=>[pe("bold","bold",A.fontBold()),pe("italic","italic",A.fontItalic()),pe("underline","underline",A.fontUnderline())],Zr=()=>[Si(),dn(),...aa()],sa=()=>[Si(),dn(),...Qr(),dn(),...aa()];class Ci extends H{widgets="default";isInitialized=!1;get value(){return this.isInitialized?this.parts.doc.innerHTML:this.savedValue||this.innerHTML}set value(e){if(this.isInitialized)this.parts.doc.innerHTML=e;else this.innerHTML=e}blockElement(e){let{doc:t}=this.parts;while(e.parentElement!==null&&e.parentElement!==t)e=e.parentElement;return e.parentElement===t?e:void 0}get selectedBlocks(){let{doc:e}=this.parts,t=window.getSelection();if(t===null)return[];let n=[];for(let i=0;i<t.rangeCount;i++){let o=t.getRangeAt(i);if(!e.contains(o.commonAncestorContainer))continue;let a=this.blockElement(o.startContainer),s=this.blockElement(o.endContainer);n.push(a);while(a!==s&&a!==null)a=a.nextElementSibling,n.push(a)}return n}get selectedText(){let e=window.getSelection();if(e===null)return"";return this.selectedBlocks.length?e.toString():""}selectionChange=()=>{};handleSelectChange=(e)=>{let t=e.target.closest(Re.tagName);if(t==null)return;this.doCommand(t.value)};handleButtonClick=(e)=>{let t=e.target.closest("button");if(t==null)return;this.doCommand(t.dataset.command)};content=[ia({name:"toolbar",part:"toolbar",onClick:this.handleButtonClick,onChange:this.handleSelectChange}),Yr({part:"doc",contenteditable:!0,style:{flex:"1 1 auto",outline:"none"}}),ia({part:"content"})];constructor(){super();this.initAttributes("widgets")}doCommand(e){if(e===void 0)return;let t=e.split(",");console.log("execCommand",t[0],!1,...t.slice(1)),document.execCommand(t[0],!1,...t.slice(1))}updateBlockStyle(){let e=this.parts.toolbar.querySelector(".block-style");if(e===null)return;let t=this.selectedBlocks.map((n)=>n.tagName);t=[...new Set(t)],e.value=t.length===1?`formatBlock,${t[0]}`:""}connectedCallback(){super.connectedCallback();let{doc:e,content:t}=this.parts;if(t.innerHTML!==""&&e.innerHTML==="")e.innerHTML=t.innerHTML,t.innerHTML="";this.isInitialized=!0,t.style.display="none",document.addEventListener("selectionchange",(n)=>{this.updateBlockStyle(),this.selectionChange(n,this)})}render(){let{toolbar:e}=this.parts;if(super.render(),e.children.length===0)switch(this.widgets){case"minimal":e.append(...Zr());break;case"default":e.append(...sa());break}}}var e0=Ci.elementCreator({tag:"xin-word",styleSpec:{":host":{display:"flex",flexDirection:"column",height:"100%"},':host [part="toolbar"]':{padding:"4px",display:"flex",gap:"0px",flex:"0 0 auto",flexWrap:"wrap"}}});/*!
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
*/var{div:n0,slot:t0,label:i0,span:o0,input:la}=P;class ra extends H{choices="";other="";multiple=!1;name="";placeholder="Please specify…";value=null;get values(){return(this.value||"").split(",").map((e)=>e.trim()).filter((e)=>e!=="")}content=()=>[t0(),n0({part:"options"},la({part:"custom",hidden:!0}))];static styleSpec={":host":{display:"inline-flex",gap:D.segmentedOptionGap("8px")},":host, :host::part(options)":{flexDirection:D.segmentedDirection("row"),alignItems:D.segmentedAlignItems("center")},":host label":{display:"inline-grid",alignItems:"center",gap:D.segmentedOptionGap("8px"),gridTemplateColumns:D.segmentedOptionGridColumns("0px 24px 1fr"),padding:D.segmentedOptionPadding("4px 12px"),font:D.segmentedOptionFont("16px")},":host label:has(:checked)":{color:D.segmentedOptionCurrentColor("#eee"),background:D.segmentedOptionCurrentBackground("#44a")},":host svg":{height:D.segmentOptionIconSize("16px"),fill:D.segmentedOptionIconColor("currentColor")},":host label.no-icon":{gap:0,gridTemplateColumns:D.segmentedOptionGridColumns("0px 1fr")},':host input[type="radio"], :host input[type="checkbox"]':{visibility:D.segmentedInputVisibility("hidden")},":host::part(options)":{display:"flex",borderRadius:D.segmentedOptionsBorderRadius("8px"),background:D.segmentedOptionsBackground("#fff"),color:D.segmentedOptionColor("#222"),overflow:"hidden"},":host::part(custom)":{padding:D.segmentedOptionPadding("4px 12px"),color:D.segmentedOptionCurrentColor("#eee"),background:D.segmentedOptionCurrentBackground("#44a"),font:D.segmentedOptionFont("16px"),border:"0",outline:"none"},":host::part(custom)::placeholder":{color:D.segmentedOptionCurrentColor("#eee"),opacity:D.segmentedPlaceholderOpacity(0.75)}};constructor(){super();this.initAttributes("direction","choices","other","multiple","name","placeholder")}valueChanged=!1;handleChange=()=>{let{options:e,custom:t}=this.parts;if(this.multiple){let n=[...e.querySelectorAll("input:checked")];this.value=n.map((i)=>i.value).join(",")}else{let n=e.querySelector("input:checked");if(!n)this.value=null;else if(n.value)t.setAttribute("hidden",""),this.value=n.value;else t.removeAttribute("hidden"),t.focus(),t.select(),this.value=t.value}this.valueChanged=!0};handleKey=(e)=>{switch(e.code){case"Space":e.target.click();break}};connectedCallback(){super.connectedCallback();let{options:e}=this.parts;if(this.name==="")this.name=this.instanceId;if(e.addEventListener("change",this.handleChange),e.addEventListener("keydown",this.handleKey),this.other&&this.multiple)console.warn(this,"is set to [other] and [multiple]; [other] will be ignored"),this.other=""}get _choices(){let e=Array.isArray(this.choices)?this.choices:this.choices.split(",").filter((t)=>t.trim()!=="").map((t)=>{let[n,i]=t.split("=").map((r)=>r.trim()),[o,a]=(i||n).split(":").map((r)=>r.trim()),s=a?A[a]():"";return{value:n,icon:s,caption:o}});if(this.other&&!this.multiple){let[t,n]=this.other.split(":");e.push({value:"",caption:t,icon:n})}return e}get isOtherValue(){return Boolean(this.value===""||this.value&&!this._choices.find((e)=>e.value===this.value))}render(){if(super.render(),this.valueChanged){this.valueChanged=!1;return}let{options:e,custom:t}=this.parts;e.textContent="";let n=this.multiple?"checkbox":"radio",{values:i,isOtherValue:o}=this;if(e.append(...this._choices.map((a)=>{return i0({tabindex:0},la({type:n,name:this.name,value:a.value,checked:i.includes(a.value)||a.value===""&&o,tabIndex:-1}),a.icon||{class:"no-icon"},o0(a.caption))})),this.other&&!this.multiple)t.hidden=!o,t.value=o?this.value:"",t.placeholder=this.placeholder,e.append(t)}}var a0=ra.elementCreator({tag:"xin-segmented"});/*!
# sidebar

The default layout for iOS / iPadOS apps is to hide the sidebar when displaying content on small
screens, and display the sidebar when space is available (with the user able to explicitly hide
the sidebar if so desired). `<xin-sidenav>` provides this functionality.

`<xin-sidenav>` is used to handle the layout of the documentation tab panel.

`<xin-sidenav>`'s behavior is controlled by two attributes, `minSize` is the point at which it will toggle between showing the navigation
sidebar and content, while `navSize` is the width of the sidebar. You can interrogate its `compact` property to find out if it's
currently in `compact` form.
*/var{slot:ca}=P;class Ti extends H{minSize=800;navSize=200;compact=!1;content=[ca({name:"nav"}),ca({part:"content"})];_contentVisible=!1;get contentVisible(){return this._contentVisible}set contentVisible(e){this._contentVisible=e,this.queueRender()}static styleSpec={":host":{display:"grid",gridTemplateColumns:`${D.navWidth("50%")} ${D.contentWidth("50%")}`,gridTemplateRows:"100%",position:"relative",margin:D.margin("0 0 0 -100%"),transition:D.sideNavTransition("0.25s ease-out")},":host slot":{position:"relative"},":host slot:not([name])":{display:"block"},':host slot[name="nav"]':{display:"block"}};onResize=()=>{let{content:e}=this.parts,t=this.offsetParent;if(t===null)return;if(this.compact=t.offsetWidth<this.minSize,[...this.childNodes].find((i)=>i instanceof Element?i.getAttribute("slot")!=="nav":!0)===void 0){this.style.setProperty("--nav-width","100%"),this.style.setProperty("--content-width","0%");return}if(!this.compact)e.classList.add("-xin-sidenav-visible"),this.style.setProperty("--nav-width",`${this.navSize}px`),this.style.setProperty("--content-width",`calc(100% - ${this.navSize}px)`),this.style.setProperty("--margin","0");else if(e.classList.remove("-xin-sidenav-visible"),this.style.setProperty("--nav-width","50%"),this.style.setProperty("--content-width","50%"),this.contentVisible)this.style.setProperty("--margin","0 0 0 -100%");else this.style.setProperty("--margin","0 -100% 0 0")};observer;connectedCallback(){super.connectedCallback(),this.contentVisible=this.parts.content.childNodes.length===0,globalThis.addEventListener("resize",this.onResize),this.observer=new MutationObserver(this.onResize),this.observer.observe(this,{childList:!0}),this.style.setProperty("--side-nav-transition","0s"),setTimeout(()=>{this.style.removeProperty("--side-nav-transition")},250)}disconnectedCallback(){super.disconnectedCallback(),this.observer.disconnect()}constructor(){super();this.initAttributes("minSize","navSize","compact")}render(){super.render(),this.onResize()}}var s0=Ti.elementCreator({tag:"xin-sidenav"});var{slot:da}=P;/*!
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
*/class ji extends H{minWidth=0;minHeight=0;value="normal";content=[da({part:"normal"}),da({part:"small",name:"small"})];static styleSpec={":host":{display:"inline-block",position:"relative"}};constructor(){super();this.initAttributes("minWidth","minHeight")}onResize=()=>{let{normal:e,small:t}=this.parts,n=this.offsetParent;if(!(n instanceof HTMLElement))return;else if(n.offsetWidth<this.minWidth||n.offsetHeight<this.minHeight)e.hidden=!0,t.hidden=!1,this.value="small";else e.hidden=!1,t.hidden=!0,this.value="normal"};connectedCallback(){super.connectedCallback(),globalThis.addEventListener("resize",this.onResize)}disconnectedCallback(){super.disconnectedCallback(),globalThis.removeEventListener("resize",this.onResize)}}var l0=ji.elementCreator({tag:"xin-sizebreak"});/*!
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
*/class Ii extends H{target=null;static styleSpec={":host":{_resizeIconFill:"#222",display:"block",position:"absolute",bottom:-7,right:-7,padding:14,width:44,height:44,opacity:0.25,transition:"opacity 0.25s ease-out"},":host(:hover)":{opacity:0.5},":host svg":{width:16,height:16,fill:y.resizeIconFill}};content=A.resize();get minSize(){let{minWidth:e,minHeight:t}=getComputedStyle(this.target);return{width:parseFloat(e)||32,height:parseFloat(t)||32}}resizeTarget=(e)=>{let{target:t}=this;if(!t)return;let{offsetWidth:n,offsetHeight:i}=t;t.style.left=t.offsetLeft+"px",t.style.top=t.offsetTop+"px",t.style.bottom="",t.style.right="";let{minSize:o}=this;le(e,(a,s,l)=>{if(t.style.width=Math.max(o.width,n+a)+"px",t.style.height=Math.max(o.height,i+s)+"px",l.type==="mouseup")return!0},"nwse-resize")};connectedCallback(){if(super.connectedCallback(),!this.target)this.target=this.parentElement;let e={passive:!0};this.addEventListener("mousedown",this.resizeTarget,e),this.addEventListener("touchstart",this.resizeTarget,e)}}var r0=Ii.elementCreator({tag:"xin-sizer"});/*!
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
*/var{div:c0,input:d0,span:h0,button:ha}=P;class wt extends H{caption="";removeable=!1;removeCallback=()=>{this.remove()};content=()=>[h0({part:"caption"},this.caption),ha(A.x(),{part:"remove",hidden:!this.removeable,onClick:this.removeCallback})];constructor(){super();this.initAttributes("caption","removeable")}}var pa=wt.elementCreator({tag:"xin-tag",styleSpec:{":host":{"--tag-close-button-color":"#000c","--tag-close-button-bg":"#fffc","--tag-close-button-border-radius":"99px","--tag-button-opacity":"0.5","--tag-button-hover-opacity":"0.75","--tag-bg":D.brandColor("blue"),"--tag-text-color":D.brandTextColor("white"),display:"inline-flex",borderRadius:y.spacing50,color:y.tagTextColor,background:y.tagBg,padding:`0 ${y.spacing75} 0 ${y.spacing75}`,height:`calc(${y.lineHeight} + ${y.spacing50})`,lineHeight:`calc(${y.lineHeight} + ${y.spacing50})`},':host > [part="caption"]':{position:"relative",whiteSpace:"nowrap",overflow:"hidden",flex:"1 1 auto",fontSize:D.fontSize("16px"),color:y.tagTextColor,textOverflow:"ellipsis"},':host [part="remove"]':{boxShadow:"none",margin:`0 ${y.spacing_50} 0 ${y.spacing25}`,padding:0,display:"inline-flex",alignItems:"center",alignSelf:"center",justifyContent:"center",height:y.spacing150,width:y.spacing150,"--text-color":y.tagCloseButtonColor,background:y.tagCloseButtonBg,borderRadius:y.tagCloseButtonBorderRadius,opacity:y.tagButtonOpacity},':host [part="remove"]:hover':{background:y.tagCloseButtonBg,opacity:y.tagButtonHoverOpacity}}});class Ei extends H{name="";availableTags=[];value=[];textEntry=!1;editable=!1;placeholder="enter tags";get tags(){return typeof this.value==="string"?this.value.split(",").map((e)=>e.trim()).filter((e)=>e!==""):this.value}constructor(){super();this.initAttributes("name","value","textEntry","availableTags","editable","placeholder")}addTag=(e)=>{if(e.trim()==="")return;let{tags:t}=this;if(!t.includes(e))t.push(e);this.value=t,this.queueRender(!0)};toggleTag=(e)=>{if(this.tags.includes(e))this.value=this.tags.filter((t)=>t!==e);else this.addTag(e);this.queueRender(!0)};enterTag=(e)=>{let{tagInput:t}=this.parts;switch(e.key){case",":{let n=t.value.split(",")[0];this.addTag(n)}break;case"Enter":{let n=t.value.split(",")[0];this.addTag(n)}e.stopPropagation(),e.preventDefault();break;default:}};popSelectMenu=()=>{let{toggleTag:e}=this,{tagMenu:t}=this.parts,n=typeof this.availableTags==="string"?this.availableTags.split(","):this.availableTags,i=this.tags.filter((a)=>!n.includes(a));if(i.length)n.push(null,...i);let o=n.map((a)=>{if(a===""||a===null)return null;else if(typeof a==="object")return{icon:this.tags.includes(a.value)?A.minus():A.plus(),caption:a.caption,action(){e(a.value)}};else return{icon:this.tags.includes(a)?A.minus():A.plus(),caption:a,action(){e(a)}}});ve({target:t,width:"auto",menuItems:o})};content=()=>[c0({part:"tagContainer",class:"row",onClick(e){e.stopPropagation(),e.preventDefault()}}),d0({part:"tagInput",class:"elastic",onKeydown:this.enterTag}),ha({title:"add tag",part:"tagMenu",onClick:this.popSelectMenu},A.chevronDown())];removeTag=(e)=>{if(this.editable){let t=e.target.closest(wt.tagName);this.value=this.tags.filter((n)=>n!==t.caption),t.remove(),this.queueRender(!0)}e.stopPropagation(),e.preventDefault()};render(){super.render();let{tagContainer:e,tagMenu:t,tagInput:n}=this.parts;if(n.value="",n.setAttribute("placeholder",this.placeholder),this.editable)t.toggleAttribute("hidden",!1),n.toggleAttribute("hidden",!this.textEntry);else t.toggleAttribute("hidden",!0),n.toggleAttribute("hidden",!0);e.textContent="";let{tags:i}=this;for(let o of i)e.append(pa({caption:o,removeable:this.editable,removeCallback:this.removeTag}))}}var p0=Ei.elementCreator({tag:"xin-tag-list",styleSpec:{":host":{"--tag-list-bg":"#f8f8f8","--touch-size":"44px","--spacing":"16px",display:"grid",gridTemplateColumns:"auto",alignItems:"center",background:y.tagListBg,gap:y.spacing25},":host[editable]":{gridTemplateColumns:`auto ${y.touchSize}`},":host[editable][text-entry]":{gridTemplateColumns:`2fr 1fr ${y.touchSize}`},':host [part="tagContainer"]':{display:"flex",content:'" "',alignItems:"center",background:y.inputBg,borderRadius:y.roundedRadius,boxShadow:y.borderShadow,flexWrap:"nowrap",overflow:"auto hidden",gap:y.spacing25,minHeight:`calc(${y.lineHeight} + ${y.spacing})`,padding:y.spacing25},':host [part="tagMenu"]':{width:y.touchSize,height:y.touchSize,lineHeight:y.touchSize,textAlign:"center",padding:0,margin:0},":host [hidden]":{display:"none !important"}}});var{h2:u0,code:g0}=P;class ua extends H{elementSelector="";targetSelector="";constructor(){super();this.initAttributes("elementSelector","targetSelector")}content=()=>[u0({part:"title"},"CSS variables"),A1({part:"variables",changeCallback:this.update})];loadVars=()=>{let{title:e,variables:t}=this.parts;if(t.textContent="",this.elementSelector){e.textContent=`CSS variables for ${this.elementSelector}`;let n=document.querySelector(this.elementSelector);if(!n){setTimeout(this.loadVars,250);return}let i=n.shadowRoot?n.shadowRoot.querySelector("style"):document.querySelector(`style#${this.elementSelector}-component`),o=getComputedStyle(n);if(i&&i.textContent){let a=[...new Set([...i.textContent.match(/--[\w-]+/g)||[]])];for(let s of a){let l=o.getPropertyValue(s),r=l.match(/^(#|rgb|hsl)[\d()a-fA-F]+$/)?"color":"string";if(r==="color")l=ue.fromCss(l).html;t.append(E1(g0(s),{key:s,value:l,type:r}))}}}};update=()=>{let e=this.targetSelector||this.elementSelector;if(e){let t=[...document.querySelectorAll(e)||[]],{value:n}=this.parts.variables;for(let i of t)for(let o of Object.keys(n))i.style.setProperty(o,n[o])}};connectedCallback(){super.connectedCallback(),this.loadVars(),this.parts.variables.addEventListener("change",this.update)}}var xd=ua.elementCreator({tag:"xin-css-var-editor"});var Mt=[{text:`# xinjs-ui

<!--{ "pin": "top" }-->

[ui.xinjs.net live demo](https://ui.xinjs.net) [xinjs](https://xinjs.net) [discord](https://discord.gg/ramJ9rgky5) [github](https://github.com/tonioloewald/xinjs-ui#readme) [npm](https://www.npmjs.com/package/xinjs-ui)

<img alt="xinjs-ui logo" class="logo" style="display: block; margin: auto; width: 50%" src="https://ui.xinjs.net/xinjs-ui-color.svg">

Copyright ©2023-2025 Tonio Loewald

## the xinjs ui library

In general, \`xinjs\` strives to work _with_ the browser rather than trying to _replace_ it.

In a similar vein, \`xinjs-ui\` comprises a collection of [web-components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)
with the goal of augmenting what _already_ works well, and the components are intended be interoperable as
similar as possible to things that you already use, such as \`<input>\` or \`<select>\` elements.
E.g. where appropriate, the \`value\` of an element is its malleable \`state\`, and when this changes,
the element emits a \`change\` event.

Similarly, the xinjs base \`Component\` class and the components in this collection strive to
be as similar in operation as possible to DOM elements as makes sense. E.g. binary attributes
work as expected. Adding the \`hidden\` attribute makes them disappear. If a component subclass
has a \`value\` property then it will be rendered if the value changes (similarly it will be
rendered if an initialized attribute is changed). Intinsic properties of components will
default to \`null\` rather than \`undefined\`.

Similarly, because web-components are highly interoperable, there's no reason to reinvent
wheels. In particular, this library won't try to replace existing, excellent libraries
such as [shoelace.style](https://shoelace.style/) or wrap perfectly functional HTML
elements, like the venerable \`<input>\` or \`<form>\` elements that are already capable
and accessible.

The goal here is to provide useful components and other utilities that add to what's built
into HTML5 and CSS3 and to make custom-elements work as much as possible like drop-in replacements
for an \`<input>\` or \`<textarea>\` (while mitigating the historical pathologies of things like
\`<select>\` and \`<input type="radio">\`). E.g. the \`<xin-select>\` does not suffer from a
race-condition between having its value set and being given an \`<option>\` with the intended value
and you can differentiate between the user picking a value (\`action\`) and the value changing (\`change\`).

## custom elements

The simplest way to use these elements is to simply import the element and then either
use HTML or the \`ElementCreator\` function exported.

E.g. to use the markdown viewer:

\`\`\`
import { markdownViewer } from 'xinjs-ui'
document.body.append(markdownViewer('# hello world\\nthis is a test'))
\`\`\`

\`\`\`js
const { markdownViewer } = xinjsui

preview.append(
  markdownViewer(\`
## hello world
here is some markdown
\`)
)
\`\`\`

Assuming you import the module somewhere, the HTML will work as well.

\`\`\`
<xin-md>
## hello world
here is some markdown
</xin-md>
\`\`\`

The big difference with using the \`markdownViewer()\` function is that the \`xinjs\` \`Component\`
class will automatically pick a new tag if the expected tag is taken (e.g. by a previously
defined custom-element from another library). \`markdownViewer()\` will create an element of
the correct type.

The other thing is that \`xinjs\` \`ElementCreator\` functions are convenient and composable,
allowing you to build DOM elements with less code than pretty much any other option, including
JSX, TSX, or HTML.
`,title:"xinjs-ui",filename:"README.md",path:"README.md",pin:"top"},{text:`# 3d

A [babylonjs](https://www.babylonjs.com/) wrapper.

A \`<xin-3d>\` element is initialized with an \`engine\`, \`canvas\`, \`scene\`, and an update-loop.

If you view this example with an XR-enabled device, such as the
[Meta Quest 3](https://www.meta.com/quest/quest-3/), then you should be able to view this
as an AR scene.

\`\`\`js
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
        const text = gamepadText() + '\\n' + xrControllersText(controllers)
        const lines = text.split('\\n')
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
\`\`\`
\`\`\`css
.preview xin-3d {
  width: 100%;
  height: 100%;
}
\`\`\`

You can access the \`scene\` and \`engine\` properties. You can also assign \`sceneCreated\`
and \`update\` callbacks that will be executed when the scene is first initialized and
before each update, respectively. (See the example, it does both.)

Both \`sceneCreated\` and \`update\` may be \`async\`. The component will \`await\` \`sceneCreated\`
before starting the renderLoop, but \`update\` is simply passed to babylon, so be careful.

By default, this component loads \`babylon.js\` from the [babylonjs CDN](https://doc.babylonjs.com/setup/frameworkPackages/CDN),
but if \`BABYLON\` is already defined (e.g. if you've bundled it) then it will use that instead.

If you need additional libraries, e.g. \`https://cdn.babylonjs.com/loaders/babylonjs.loaders.min.js\` for loading models such as \`gltf\` and \`glb\` files, you should load those in \`sceneCreated\`.

Here's a simple example of a terrain mesh comprising 125k triangles, 50% of which is being scaled using a \`profileScale\` function that
takes an array of numbers that use a linear profile to change the landform.

\`\`\`js
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
\`\`\`

## loadScene

\`<xin-3d>.loadScene(path: string, file: string, callBack(meshes: any[]): void)\` can
be used to load \`.glb\` files.

## loadUI

\`<xin-3d>.loadUI(options: B3dUIOptions)\` loads babylonjs guis, which you can create programmatically or using the [babylonjs gui tool](https://gui.babylonjs.com/).`,title:"3d",filename:"babylon-3d.ts",path:"src/babylon-3d.ts"},{text:`# ab-test

\`<xin-ab>\` provides a simple method for implementing A|B-testing.

\`\`\`js
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
\`\`\`
\`\`\`html
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
\`\`\`
\`\`\`css
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
\`\`\`

- Set \`AbTest.conditions\` to anything you like.
- Use \`<xin-ab>\` elements to display conditional content.
- \`condition\` attribute determines which value in \`AbTest.conditions\` controls the element
- \`not\` reverses the condition (so \`<xin-ab not condition="foo">\` will be visible if \`conditions.foo\` is \`false\`)`,title:"ab-test",filename:"ab-test.ts",path:"src/ab-test.ts"},{text:'# blueprint loading\n\n`<xin-loader>` and `<xin-blueprint>` are simple elements provided by `xinjs` for the dynamic loading\nof component **blueprints**.\n\n```html\n<xin-loader>\n  <xin-blueprint tag="swiss-clock" src=" https://tonioloewald.github.io/xin-clock/dist/blueprint.js"></xin-blueprint>\n</xin-loader>\n<swiss-clock></swiss-clock>\n```\n\n## Attributes\n\n- `blueprint` is the url of the `blueprint` javascript module (required)\n- `tag` is the tagName you wish to use. If the name of the blueprint is\n  hyphenated, then that will be used by default\n- `property` if the blueprint module exports the blueprint function as\n  a property, you can specify the property here.',title:"blueprint loading",filename:"bp-loader.ts",path:"src/bp-loader.ts"},{text:`# carousel

\`\`\`html
<xin-carousel arrows dots max-visible-items=2 auto=2 loop>
  <div class="thing pink">item 1</div>
  <div class="thing green">item 2</div>
  <div class="thing blue">item 3</div>
  <div class="thing yellow">item 4</div>
  <div class="thing pink">item 5</div>
  <div class="thing green">item 6</div>
  <div class="thing blue">item 7</div>
</xin-carousel>
\`\`\`
\`\`\`css
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
\`\`\`

This is a minimalist carousel component that supports the usual stuff.

## Attributes

- \`arrows\` (boolean, false by default) shows/hides the arrow paging controls
- \`dots\` (boolean, false by default) shows/hides the dot progress indicators
- \`max-visible-items\` (number, 1 by default) determines how many items are shown at once.
- \`snap-duration\` (number, 0.25 [seconds] by default) determines the time taken to scroll / snap scroll.
- \`snap-delay\` (number, 0.1 [seconds] by default)
- \`loop\` (boolean, false by default) causes next/previous buttons to loop
- \`auto\` (number, 0 [seconds] by default) if > 0, automatically advances after that many seconds (always loops!)

<xin-css-var-editor element-selector="xin-carousel"></xin-css-var-editor>`,title:"carousel",filename:"carousel.ts",path:"src/carousel.ts"},{text:`# code

An [ACE Editor](https://ace.c9.io/) wrapper.

Sometimes, it's nice to be able to just toss a code-editor in a web-page.

\`<xin-code>\`'s \`value\` is the code it contains. Its \`mode\` attribute sets the language, and you can further configure
the ACE editor instance via its \`options\` property.

\`\`\`html
<xin-code style="width: 100%; height: 100%" mode="css">
body {
  box-sizing: border-box;
}
</xin-code>
\`\`\``,title:"code",filename:"code-editor.ts",path:"src/code-editor.ts"},{text:`# color input field

This is a color input field that supports opacity

\`\`\`js
const colorInput = preview.querySelector('xin-color')
const circle = preview.querySelector('div')

colorInput.addEventListener('change', () => {
  console.log(colorInput.value)
  circle.style.background = colorInput.value
})
\`\`\`
\`\`\`html
<xin-color value="red"></xin-color>
<div
  style="
    width: 200px;
    height: 200px;
    background: red;
    border-radius: 100px;
  "
></div>
\`\`\`


<xin-css-var-editor element-selector="xin-color"></xin-css-var-editor>`,title:"color input field",filename:"color-input.ts",path:"src/color-input.ts"},{text:`# drag & drop

> **Note** this library is a modernized version of the [b8rjs](https://b8rjs.com) drag-and-drop.js library.
> It removes all usage of b8rjs and has no dependencies.

A lightweight library building on top of HTML5 drag and drop behavior.

To use it, simply call \`dragAndDrop.init()\` (it only needs to be called once,
but calling it again is harmless).

\`\`\`
import { dragAndDrop } from 'xinjs-ui'

dragAndDrop.init()
\`\`\`

The library just sets up some event listeners.

You can use \`dragAndDrop.draggedElement()\` to get the element being dragged (if it's
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

- \`.drag-source\` an element being dragged
- \`.drag-target\` an element on which the dragged object may be dropped
- \`.drag-over\` a \`.drag-target\` which the object is currently over

You may also wish to create style rules for:

- \`[draggable="true"]\` anything other than a \`<a>\` (and perhaps an \`<img>\`) that can be dragged
- \`[data-drag]\` indicates *types* of draggable things that can be dropped on them.
- \`[data-drop]\` indicates potential *drop zones*.

> **Note** \`draggable\` is has to be set to "true", [see documentation on draggable](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/draggable).

## Draggable Objects

To create a draggable element, add \`draggable="true"\`.

    <div draggable="true">Drag Me</div>

To specify the type(s) of content that will be dragged, use the \`data-drag\` attribute:

    <div draggable="true" data-drag="text/plain">Drag Me</div>

To specify the content dragged, use a \`data-drag-content\` attribute.

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

\`\`\`html
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
\`\`\`
\`\`\`css
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
\`\`\`
\`\`\`js
const { dragAndDrop } = xinjsui

dragAndDrop.init()
\`\`\`

> Note that you can drag between two browser tabs containing this
> example (or between two different browsers) and it will work.

### Reorderable List Example

\`\`\`js
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
\`\`\`
\`\`\`css
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
\`\`\`

> To prevent this example from allowing drags between windows (which
> wouldn't make sense) a random dragId is assigned to \`data-drag\` and
> \`data-drop\` in this example.
)`,title:"drag & drop",filename:"drag-and-drop.ts",path:"src/drag-and-drop.ts"},{text:`# editable-rect

\`<xin-editable>\` (\`editableRect\` is the \`ElementCreator\` and \`EditableRect\` is the class) is an element
for allowing the adjustment of another element's position and size. Simply insert it in a \`position: absolute\`
or \`position: fixed\` element and you can directly adjust its CSS positioning, including rotation.

Click on an element to adjust its position, dimensions, and rotation.

\`\`\`js
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
\`\`\`
\`\`\`html
<div class="editable" style="top: 20px; left: 20px; width: auto; height: auto; right: 20px; bottom: 20px;">
  <div class="editable" style="top: 20px; left: 20px; width: 200px; height: 150px;">
  </div>
  <div class="editable" style="bottom: 20px; top: 20px; width: 300px; height: auto; right: 20px;">
  </div>
</div>
\`\`\`
\`\`\`css
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
\`\`\`

## Snapping

When \`EditableRect.snapToGrid === true\` or the shift-key is depresseed, position will snap to \`EditableRect.gridSize\` pixels (default = 8).

Similarly \`EditableRect.snapAngle === true\` or the shift-key will snap rotation to increments of \`EditableRect.angleSize\` degrees (default = 15).

## Events

After an element's position, size, or rotation are adjusted a \`change\` event is triggered on the element.`,title:"editable-rect",filename:"editable-rect.ts",path:"src/editable-rect.ts"},{text:`# example

\`<xin-example>\` makes it easy to insert interactive code examples in a web page. It
started life as a super lightweight, easier-to-embed implementation of
[b8rjs's fiddle component](https://b8rjs.com)—which I dearly missed—but now the student
is, by far, the master. And it's still super lightweight.

*You're probably looking at it right now.*

\`\`\`js
// this code executes in an async function body
// it has xinjs, xinjsui, and preview (the preview div) available as local variables
const { div } = xinjs.elements
preview.append(div({class: 'example'}, 'fiddle de dee!'))
preview.append('Try editing some code and hitting refresh…')
\`\`\`
\`\`\`html
<h2>Example</h2>
\`\`\`
\`\`\`css
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
\`\`\`

You can also create a live-example from HTML. And if you add the \`persist-to-dom\`
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
languages (js, html, css) as annotations or you can directly set the \`js\`, \`html\`,
and \`css\` properties.

## Code-Editor

The **code-editor** is actually the same component spawned in a new window using
a couple of clever tricks, the most important of which is leveraging
[StorageEvent](https://developer.mozilla.org/en-US/docs/Web/API/StorageEvent).

This functionality was originally added to make working in XR easier, but it turned
out that it's just better than the earlier way of doing things.

It actually uses just one \`localStorage\` item to handle any number of code-editors,
and cleans up after itself when you close the example (including closing stray
windows.

> **To Do** a little refactoring and tweaking to split the the editor off as a
completely separate component that can be used for other things, and make the
example itself lighter-weight.

## context

A \`<xin-example>\` can be given a \`context\` object {[key: string]: any}, which is the
set of values available in the javascript's execution context (it is wrapped in an
async function and passed those values). By default, that context comprises \`preview\`
(the \`<div>\` in which the example is rendered), \`xinjs\` (\`* from xinjs\`),
and \`xinjsui\` (\`* from xinjsui\`).

The \`LiveExample\` class provides the static \`insertExamples(element: HTMLElement)\`
function that will replace any sequence of
\`pre code[class="language-html"],pre code[class="language-js"],pre code[class="language-css"]\`
elements with a \`<xin-example>\` instance.`,title:"example",filename:"live-example.ts",path:"src/live-example.ts"},{text:`# filter

Automatically creates \`ArrayFilter\` functions \`(a: any[]) => any[]\` based on the query you build using its
macOS Finder-inspired interface, using an easily customizable / extensible collection of \`Filter\` objects.

\`\`\`js
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
\`\`\`
\`\`\`css
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
\`\`\`

## serialization

The current state of a \`<xin-filter>\` can be serialized as, and restored from, a Javascript object (which itself
can easily be converted into JSON or a URL component) via its \`state\` property. Obviously, a \`<xin-filter>\` can
only restore state if it has the necessary constituent \`filters\`.

## availableFilters

\`<xin-filter>\` has a default set of \`FilterMaker\` objects which it uses to construct filter function.
In the example above, the default collection of filters is reduced to \`contains\`, \`equals\`, \`after\`, and \`isTrue\`.

The full collection includes:

- **contains** * looks for fields containing a string (ignoring case)
- **equals** * looks for fields containing equivalent values (ignoring case)
- **after** * looks for fields with a date after a provided value
- **greaterThan** * looks for fields with a value greater than a provided value
- **truthy** * looks for fields that are true / non-zero / non-empty
- **true** looks for fields that are \`true\`
- **false** looks for fields that are \`false\`
- **hasTags** looks for fields that are arrays containing all the (space/comma) delimited strings
- **doesNotHaveTags** looks for fields that are arrays containing *none* of the strings

**Note**: the filters marked with an * have negative version (e.g. does not contain).

\`\`\`
type ObjectTest (obj: any) => boolean

interface FilterMaker {
  caption: string                                 // describes the test condition
  negative?: string                               // describes the negative test condition
  needsValue?: boolean                            // if false, the filterMaker doesn't need a needle value
  filterMaker(needle: any) => ObjectTest          // builds an ObjectTest
}
\`\`\``,title:"filter",filename:"filter-builder.ts",path:"src/filter-builder.ts"},{text:`# float

A floating, potentially draggable user interface element.

\`\`\`html
<xin-float class="float" remain-on-resize="remain" remain-on-scroll="remain" drag>
  <h4>Drag Me</h4>
  <div class="no-drag balloon">\uD83C\uDF88</div>
  <div class="behavior">I ignore resizing and scrolling</div>
  <footer style="font-size: 75%">neunundneunzig pixel-ballon</footer>
</xin-float>

<xin-float class="float" remain-on-scroll="remain" style="top: 50px; right: 20px;" drag>
  <h4>Drag Me</h4>
  <div class="no-drag balloon">\uD83C\uDF88</div>
  <div class="behavior">I disappear on resize</div>
  <footer style="font-size: 75%">neunundneunzig pixel-ballon</footer>
</xin-float>

<xin-float class="float" remain-on-resize="remain" remain-on-scroll="remove" style="bottom: 20px; left: 50px;" drag>
  <h4>Drag Me</h4>
  <div class="no-drag balloon">\uD83C\uDF88</div>
  <div class="behavior">I disappear on scroll</div>
  <footer style="font-size: 75%">neunundneunzig pixel-ballon</footer>
</xin-float>
\`\`\`
\`\`\`css
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
\`\`\`

## Styling

Note that the \`<xin-float>\` element has absolutely minimal styling. It's up to you to provide a drop
shadow and background and so on.

## Attributes

- \`drag\` false | true — to make a \`<xin-float>\` element draggable, simply set its \`drag\` attribute.
- \`remain-on-resize\` 'remove' | 'hide' | 'remain' — by default, floats will hide if the window is resized
- \`remain-on-scroll\` 'remain' | 'remove' | 'hide' — by default, floats will remain if the document is scrolled

Note that \`remain-on-scroll\` behavior applies to any scrolling in the document (including within the float) so
if you want finer-grained disappearing behavior triggered by scrolling, you might want to implement it yourself.

To prevent dragging for an interior element (e.g. if you want a floating palette with buttons or input fields)
just add the \`no-drag\` class to an element or its container.`,title:"float",filename:"float.ts",path:"src/float.ts"},{text:`# forms

\`<xin-form>\` and \`<xin-field>\` can be used to quickly create forms complete with
[client-side validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#built-in_form_validation_examples).

\`\`\`js
const form = preview.querySelector('xin-form')
preview.querySelector('.submit').addEventListener('click', form.submit)
\`\`\`
\`\`\`html
<xin-form value='{"formInitializer": "initial value from form"}'>
  <h3 slot="header">Example Form Header</h3>
  <xin-field caption="Required field" key="required"></xin-field>
  <xin-field optional key="optional"><i>Optional</i> Field</xin-field>
  <xin-field key="text" type="text" placeholder="type it in here">Tell us a long story</xin-field>
  <xin-field caption="Zip Code" placeholder="12345 or 12345-6789" key="zipcode" pattern="\\d{5}(-\\d{4})?"></xin-field>
  <xin-field caption="Date" key="date" type="date"></xin-field>
  <xin-field caption="Number" key="number" type="number"></xin-field>
  <xin-field caption="Range" key="range" type="range" min="0" max="10"></xin-field>
  <xin-field key="boolean" type="checkbox">\uD83D\uDE03 <b>Agreed?!</b></xin-field>
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
\`\`\`
\`\`\`css
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
\`\`\`

## \`<xin-form>\`

\`<xin-form>\` prevents the default form behavior when a \`submit\` event is triggered and instead validates the
form contents (generating feedback if desired) and calls its \`submitCallback(value: {[key: string]: any}, isValid: boolean): void\`
method.

\`<xin-form>\` offers a \`fields\` proxy that allows values stored in the form to be updated. Any changes will trigger a \`change\`
event on the \`<xin-form>\` (in addition to any events fired by form fields).

\`<xin-form>\` instances have \`value\` and \`isValid\` properties you can access any time. Note that \`isValid\` is computed
and triggers form validation.

\`<xin-form>\` has \`header\` and \`footer\` \`<slot>\`s in addition to default \`<slot>\`, which is tucked inside a \`<form>\` element.

## \`<xin-field>\`

\`<xin-field>\` is a simple web-component with no shadowDOM that combines an \`<input>\` field wrapped with a \`<label>\`. Any
content of the custom-element will become the \`caption\` or you can simply set the \`caption\` attribute.

You can replace the default \`<input>\` field by adding an element to the slot \`input\` (it's a \`xinSlot\`) whereupon
the \`value\` of that element will be used instead of the built-in \`<input>\`. (The \`<input>\` is retained and
is used to drive form-validation.)

\`<xin-field>\` supports the following attributes:

- \`caption\` labels the field
- \`key\` determines the form property the field will populate
- \`type\` determines the data-type: '' | 'checkbox' | 'number' | 'range' | 'date' | 'text' | 'color'
- \`optional\` turns off the \`required\` attribute (fields are required by default)
- \`pattern\` is an (optional) regex pattern
- \`placeholder\` is an (optional) placeholder

The \`text\` type populates the \`input\` slot with a \`<textarea>\` element.

The \`color\` type populates the \`input\` slot with a \`<xin-color>\` element (and thus supports colors with alpha values).

<xin-css-var-editor element-selector="xin-field" target-selector=".preview"></xin-css-var-editor>`,title:"forms",filename:"form.ts",path:"src/form.ts"},{text:`# gamepads

A couple of utility functions for dealing with gamepads and XRInputs.

\`gamepadState()\` gives you a condensed version of active gamepad state

\`gamepadText()\` provides the above in minimal text form for debugging

\`\`\`js
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
\`\`\`

## XRInput Devices

> This is experimental, the API is changing and stuff doesn't work. Hopefully it
> will become a lot more generally useful once Apple's VisionPro comes out.

\`xrControllers(babylonjsXRHelper)\` returns an \`XinXRControllerMap\` structure that tries to
conveniently render the current state of XR controls. (The babylonjs API for this is horrific!)

\`xrControllerText(controllerMap)\` renders the map output by the above in a compact form
which is useful when debugging.`,title:"gamepads",filename:"gamepad.ts",path:"src/gamepad.ts"},{text:`# icons

<center>
  <xin-icon icon="settings" style="--font-size: 128px"></xin-icon>
  <xin-icon icon="xr" style="--font-size: 96px"></xin-icon>
  <xin-icon icon="rgb" style="--font-size: 128px"></xin-icon>
</center>

A library that provides \`ElementCreator\` functions that produce SVG icons. It leverages \`xinjs\`'s
\`svgElements\` proxy and is intended to address all the key use-cases for SVG icons in web
applications along with being very easy to extend and maintain.

> ### Supported Use Cases
> - inline SVGs that can be styled by CSS (for buttons, etc.)
> - No build process magic needed (it's "just javascript")
> - icons can be rendered  as data urls, e.g. to insert into CSS
> - highly optimized and compressible
> - support for color icons (still allowing with CSS styling)

## icons

\`icons\` is a proxy that generates an \`ElementCreator\` for a given icon on demand,
e.g. \`icons.chevronDown()\` produces an \`<svg>\` element containing a downward-pointing chevron
icon with the class \`icon-chevron-down\`.

\`\`\`js
const { icons, svgIcon } = xinjsui
const { div } = xinjs.elements

preview.append(...Object.keys(icons).sort().map(iconName => div(
  { class: 'tile' },
  svgIcon({icon: iconName, size: 16}),
  div(iconName)
)))
\`\`\`
\`\`\`css
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
\`\`\`

These icons are completely unstyled and can be colored using the css \`fill\` property. This will
probably be broken out as a standalone library to allow the use of whatever icons you like
(its source data is currently generated from an [icomoon](https://icomoon.com/app)
\`selection.json\` file, but could just as easily be generated from a directory full of SVGs).

## Adding and redefining icons

\`defineIcon(name: string, icon: IconSpec | string)\` adds or replaces your own icons

\`\`\`
interface IconSpec {
  p: string[]  // paths
  c?: string[] // colors of the paths in p
  w: number    // width of icon
  h: number    // height of icon
}
\`\`\`

The simplest option is simply to pass the \`path\` attribute (if the icon has a single path) while more
complex icons can be provide an \`IconSpec\` structure, specifying multiple paths (and colors if so
desired).

This utility loads SVG files (they should only contain paths with no strokes, transforms, or nesting)
and generates an \`IconSpec\`. It renders the original icon side-by-side with the \`<xin-icon>\` version.
**If the icon on the right appears garbled, it probably needs to be simplified**.

\`\`\`js
const { defineIcon, xinIcon } = xinjsui

const fileInput = preview.querySelector('input')
const icon = preview.querySelector('.icon')
const svgContainer = preview.querySelector('.svg')
const iconSpec = preview.querySelector('textarea')
const simplify = preview.querySelector('.simplify')

function jsObject(o) {
  let json = JSON.stringify(o, null, 2)
  return json.replace(/"(\\w+)":/g, '$1:')
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
          path.p = path.p.replace(/\\d+\\.\\d+/g, x => (Number(x) * scale).toFixed(0))
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
\`\`\`
\`\`\`html
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
\`\`\`
\`\`\`css
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
\`\`\`

## \`<xin-icon>\`

\`<xin-icon>\` is a simple component that lets you embed icons as HTML. Check the CSS tab to see
how it's styled.

\`<xin-icon>\` supports four attributes:

- \`size\` (defaults to 0) if non-zero sets the height of the icon in pixels
- \`icon\` is the name of the icon
- \`color\` is the fill color (if you don't want to style it using CSS)
- \`stroke\` is the stroke color
- \`stroke-width\` (defaults to 1) is the width of the stroke assuming the icon's viewBox is 1024 units tall but the
  icon is rendered at 32px (so it's multiplied by 32).

> **Aside**: the tool used to build the icon library scales up the viewBox to 1024 tall and then rounds
> all coordinates to nearest integer on the assumption that this is plenty precise enough for icons and
> makes everything smaller and easier to compress.

\`\`\`html
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
\`\`\`
\`\`\`css
xin-icon.demo-2 > svg {
  height: 96px;
}
\`\`\`

**CSS-to-SVG Gradient** support is work-in-progress and experimental (there seem to be
…issues… with how SVG  gradients behave). The goal is to be able to use CSS gradients
to generate SVG gradients (which are kind of a pain) on-the-fly. Use at your own risk.

## SVGs as data-urls

\`\`\`js
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
\`\`\`

\`svg2DataUrl(svg: SVGElement, fill?: string, stroke?: string): string\` is provided as a
utility for converting SVG elements into data-urls (e.g. for incorporation into
CSS properties. (It's used by the \`<xin-3d>\` component to render the XR widget.)

If you're using \`SVGElement\`s created using the \`icons\` proxy, you'll want to provide \`fill\` and/or
\`stroke\` values, because images loaded via css properties cannot be styled.

## Color Icons

\`\`\`html
<xin-icon icon="xinjsColor" class="demo-icon"></xin-icon>
<xin-icon icon="xinjsColor" class="demo-icon recolored"></xin-icon>
\`\`\`
\`\`\`css
.demo-icon {
  --font-size: 160px
}

.recolored {
  --icon-fill-0: blue;
  --icon-fill-1: white;
  --icon-fill-2: red;
}
\`\`\`

Each path inside an icon can be individually colored. When the icon is hydrated,
the colors will be assigned to a (minimal) set of CSS-variables (\`--icon-fill-0\`, etc.)
and these can be overridden in the usual way.

## Missing Icons

If you ask for an icon that isn't defined, the \`icons\` proxy will print a warning to console
and render a \`square\` (in fact, \`icons.square()\`) as a fallback.

## Why?

The motivation behind this is to avoid dealing with tooling issues that inevitably result from
integrating custom icon fonts or stylesheets needed by code libraries (and an icon-font also needs
a style-sheet. Importing code is simply easier (and as a bonus, more compact and flexible, and there's
no question as to when the stuff is available).

Until I wrote this library, I had settled on icomoon.io's system for generating and maintaining
custom icon fonts for managing icons within a project, but this makes exporting UI elements
with icons in them fiddly, and I looked at other UI libraries and found similar issues.

Even when just using this approach for projects over which I had full control, there were issues
with syncing icons with CSS (e.g. if you want to attach an element to a pseudo-element). \`icons\`
in combination with \`svg2DataUrl\` solves all these problems.

Basically, I wanted an icon solution that "just works" and this is it.

Internally, icons are stored as javascript path data.

These icons are mainly sourced from [feather](https://github.com/feathericons/feather), but
all the icons have been processed to have integer coordinates in a \`viewBox\` typically scaled to 1024  &times; 1024.`,title:"icons",filename:"icons.ts",path:"src/icons.ts"},{text:`# localize

\`xinjs-ui\` provides support for localization via the \`localize\` method and the \`<xin-locale-picker>\`
and \`<xin-localized>\` custom-elements.

> ### Important Note
> This module deals with the **language** used in the user interface. "locale" is
> *not the same thing*. The (usually) two-letter codes used designate **language**
> and **not locale**.
>
> E.g. the US *locale* includes things like measurement systems
> and date format. Most European locales use commas where we use decimal points in the US.
>
> Similarly, \`ja\` is the code for the Japanese **language** while \`jp\` is the **locale**.

## \`initLocalization(localizationData: string)\`

Enables localization from TSV data.

## XinLocalePicker

A selector that lets the user pick from among supported languages.

\`\`\`html
<h3>Locale Picker</h3>
<xin-locale-picker></xin-locale-picker>

<h3>Locale Picker with <code>hide-captions</code></h3>
<xin-locale-picker hide-caption></xin-locale-picker>
\`\`\`

## XinLocalized

A span-replacement that automatically localizes its text content.
By default the case in the localized data is preserved unless the
reference text is all lowercase, in which case the localized text
is also lowercased.

While viewing this documentation, all \`<xin-localized>\` elements should display a **red
underline**.

\`\`\`html
<h3>Localized Widgets</h3>
<button><xin-localized>Yes</xin-localized></button>
<button><xin-localized>No</xin-localized></button>

<h3>Lowercase is preserved</h3>
<button><xin-localized>yes</xin-localized></button>
<button><xin-localized>no</xin-localized></button>
\`\`\`
\`\`\`css
xin-localized {
  border-bottom: 2px solid red;
}
\`\`\`

## \`i18n\`

All of the data can be bound in the \`i18n\` proxy (\`xin.i18n\`), including the currently selected
locale (which will default to \`navigator.language\`).

You can take a look at \`xin.i18n\` in the console (and use it to set locale directly).

\`\`\`
i18n.locale = 'fr' // set localization to French (if available)
\`\`\`

## Creating Localized String Data

\`localized.tsv\` provides data for localizing strings. It can be created automatically
using something like my [localized](https://docs.google.com/spreadsheets/d/1L0_4g_dDhVCwVVxLzYbMj_H86xSp9lsRCKj7IS9psso/edit?usp=sharing)
Google Sheet which leverages \`googletranslate\` to automatically translate reference strings
(and which you can manually override as you like).

E.g. in this demo I've replaced the incorrect translation of "Finnish"
(\`googletranslate\` used the word for Finnish nationality rather than the language).

The format of the input data is a table in TSV format, that looks like this:

en-US | fr | fi | sv | zh
------|----|----|----|----
English (US) | French | Finnish | Swedish | Chinese (Mandarin)
English (US) | Français | suomi | svenska | 中文（普通话）
\uD83C\uDDFA\uD83C\uDDF8 | \uD83C\uDDEB\uD83C\uDDF7 | \uD83C\uDDEB\uD83C\uDDEE | \uD83C\uDDF8\uD83C\uDDEA | \uD83C\uDDE8\uD83C\uDDF3
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

Finally, create a \`tsv\` file and then turn that into a Typescript file by wrapping
the content thus:

\`\`\`
export default \`( content of tsv file )\`
\`\`\`

## To Do

- support for automated localization of attributes such as \`title\`
- \`data-xin-i18n\` attribute to allow this (if present, text content localized
   actual value of attribute can specify attributes needing localization)
- DOM watcher looks for insertion of marked elements and localizes them
)`,title:"localize",filename:"localize.ts",path:"src/localize.ts"},{text:`# lottie / bodymovin

A [lottie](https://airbnb.io/lottie/#/web) (a.k.a. **bodymovin**) player.

It's designed to work like an \`<img>\` element (just set its \`src\` attribute).

\`\`\`js
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
\`\`\`
\`\`\`html
<xin-lottie
  style="height: 100%; max-width: 100%"
  src="88140-rocket-livetrade.json"
></xin-lottie>
<div class="caption">
  Animation by <a target="_blank" href="https://lottiefiles.com/dvskjbicfc">chiến lê hồng</a>
</div>
\`\`\`
\`\`\`css
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
\`\`\`

You can also directly set its \`json\` property to the content of a \`lottie.json\` file.

And of course just access the element's \`animation\` property to [use the bodymovin API](https://airbnb.io/lottie/#/web).

Also see the [documentation for advanced interactions](https://lottiefiles.github.io/lottie-docs/advanced_interactions/)`,title:"lottie / bodymovin",filename:"bodymovin-player.ts",path:"src/bodymovin-player.ts"},{text:`# makeSorter

I'm always confusing myself when writing sort functions, so I wrote \`makeSorter()\`. It's
insanely simple and just works™. It makes writing an array sort callback for anything
other than an array of numbers or strings easier.

\`\`\`js
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
  return li(\`\${first} \${last}, \${age}\`)
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
\`\`\`
\`\`\`css
.preview {
  padding: var(--spacing);
}

.preview div {
  position: absolute;
  top: var(--spacing);
  right: var(--spacing);
}
\`\`\`

## Details

To create a sort callback that sorts by propA then propB (if propA is tied):

\`\`\`
const sorter = makeSorter(
  obj => [obj.propA, obj.propB]
)
\`\`\`

As above, but sort descending:
\`\`\`
const sorter = makeSorter(
  obj => [obj.propA, obj.propB],
  false
)
\`\`\`

As above but propA is sorted ascending, propB descending
\`\`\`
const sorter = makeSorter(
  obj => [obj.propA, obj.propB],
  [true, false]
)
\`\`\``,title:"makeSorter",filename:"make-sorter.ts",path:"src/make-sorter.ts"},{text:`# map

A [mapboxgl](https://docs.mapbox.com/mapbox-gl-js/api/) wrapper.

\`\`\`html
<!-- please don't abuse my mapbox token -->
<xin-map
  style="width: 100%; height: 100%"
  coords="14.0093606,120.995083,17"
  token="pk.eyJ1IjoicG9kcGVyc29uIiwiYSI6ImNqc2JlbWU0bjA1ZmY0YW5ycHZod3VhbWcifQ.arvqfpOqMgFYkKgQ35UScA"
  map-style="mapbox://styles/mapbox/satellite-v9"
></xin-map>
\`\`\`

There's no need to learn new APIs or write wrappers, just access the element's \`map\` property
and [use the standard mapbox APIs directly](https://docs.mapbox.com/).`,title:"map",filename:"mapbox.ts",path:"src/mapbox.ts"},{text:"# markdown\n\n`<xin-md>` renders markdown using [marked](https://www.npmjs.com/package/marked).\n\n`<xin-md>` renders [markdown](https://www.markdownguide.org/) anywhere, either using the\n`src` attribute to load the file asynchronously, or rendering the text inside it.\n\n```html\n<xin-md>\n## hello\nworld\n</xin-md>\n```\n```css\nxin-md {\n  display: block;\n  padding: var(--spacing);\n}\n```\n\nNote that, by default, `<xin-md>` will use its `textContent` (not its `innerHTML`) as its source.\n\n## rendering markdown from a url\n\nAgain, like an `<img>` tag, you can simply set a `<xin-md>`'s `src` attribute to a URL pointing\nto markdown source and it will load it asynchronously and render it.\n\n```\n<xin-md src=\"/path/to/file.md\">\n```\n\n## setting its `value`\n\nOr, just set the element's `value` and it will render it for you. You can try\nthis in the console, e.g.\n\n```\n$('.preview xin-md').value = 'testing\\n\\n## this is a test'\n```\n\n## elements\n\n`<xin-md>` also (optionally) allows the embedding of inline HTML elements without blocking markdown\nrendering, so that you can embed specific elements while retaining markdown. You need to explicitly set\nthe `elements` property, and for markdown rendering not to be blocked, the html elements need to\nstart on a new line and not be indented. E.g.\n\n```html\n<xin-md elements>\n<form>\n### this is a form\n<label>\nfill in this field.\n**It's important!**\n<input>\n</label>\n</form>\n</xin-md>\n```\n\nIn this case `<xin-md>` uses its `innerHTML` and not its `textContent`.\n\n## context and template variables\n\n`<xin-md>` also supports **template** values. You need to provide data to the element in the form\nof `context` (an arbitrary object, or a JSON string), and then embed the template text using\nhandlebars-style doubled curly braces, e.g. `{{path.to.value}}`.\n\nIf no value is found, the original text is passed through.\n\nFinally, note that template substitution occurs *before* markdown transformation, which means you can\npass context data through to HTML elements.\n\n```html\n<xin-md\n  elements\n  context='{\"title\": \"template example\", \"foo\": {\"bar\": 17}, \"nested\": \"*work*: {{foo.bar}}\"}'\n>\n## {{title}}\n\nThe magic number is <input type=\"number\" value={{foo.bar}}>\n\nOh, and nested templates {{nested}}.\n</xin-md>\n```",title:"markdown",filename:"markdown-viewer.ts",path:"src/markdown-viewer.ts"},{text:`# menu

Being able to pop a menu up anywhere is just so nice, and \`xinjs-ui\` allows menus
to be generated on-the-fly, and even supports hierarchical menus.

\`\`\`js
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
        icon: elements.span('\uD83E\uDD79'),
        caption: 'Also see…',
        menuItems: [
          {
            icon: elements.span('\uD83D\uDE33'),
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
\`\`\`
\`\`\`html
<button title="menu test">
  <xin-icon icon="moreVertical"></xin-icon>
</button>
<button title="menu test from bottom-right" style="position: absolute; bottom: 0; right: 0">
  <xin-icon icon="moreVertical"></xin-icon>
</button>
\`\`\`

## Overflow test

\`\`\`js
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
\`\`\`
\`\`\`html
<button title="big menu test" style="position: absolute; top: 0; left: 0">
  Big Menu Test
</button>
\`\`\`

## popMenu({target, width, menuItems…})

\`popMenu\` will spawn a menu on a target element. A menu is just a \`MenuItem[]\`.

## MenuItem

A \`MenuItem\` can be one of three things:

- \`null\` denotes a separator
- \`MenuAction\` denotes a labeled button or \`<a>\` tag based on whether the \`action\` provided
  is a url (string) or an event handler (function).
- \`SubMenu\` is a submenu.

### MenuAction

Note that popMenu does not implement shortcuts for you (yet!).

\`\`\`
interface MenuAction {
  caption: string
  shortcut?: string
  checked?: () => boolean
  enabled?: () => boolean
  action: ActionCallback | string
  icon?: string | Element
}
\`\`\`

### SubMenu

\`\`\`
interface SubMenu {
  caption: string
  enabled?: () => boolean
  menuItems: MenuItem[]
  icon?: string | Element
}
\`\`\`

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

For this reason, \`xinjs-ui\` has its own menu implementation.`,title:"menu",filename:"menu.ts",path:"src/menu.ts"},{text:`# notifications

\`XinNotification\` provides a singleton custom \`<xin-notification>\` element that manages
a list of notifications.

The notifications are displayed most-recent first. If the notifications would take more than
half the height of the display, they are scrolled.

You can post a notification simply with \`XinNotification.post()\` or \`postNotification()\`.

\`\`\`
interface NotificationSpec {
  message: string
  type?: 'success' | 'info' | 'log' | 'warn' | 'error' | 'progress' // default 'info'
  icon?: SVGElement | string // defaults to an info icon
  duration?: number
  progress?: () => number // return percentage completion
  close?: () => void
}
\`\`\`

If you provide a \`progress\` callback (which is assumed to return a number from \`0-100\`, with
100+ indicating completion) then \`XinNotification\` will poll it every second until the
task completes or the notification is closed. Returning 100 or more will automatically close
the notification.

If you configure a notification's \`type = "progress"\` but don't provide a \`progress\` callback
then an indefinite \`<progress>\` element will be displayed.

If you provide a \`close\` callback, it will be fired if the user closes the notification.

\`postNotification\` returns a callback function that closes the note programmatically (e.g.
when an operation completes). This will *also* call any \`close\` callback function you
provided. (The progress demos in the example exercise this functionality.)

\`\`\`js
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
      close: () => { postNotification(\`\${value.message} cancelled\`) },
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
\`\`\`
\`\`\`html
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
\`\`\`
\`\`\`css
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
\`\`\`

## \`postNotification(spec: NotificationSpec | string)\`

This is simply a wrapper for \`XinNotification.post()\`.`,title:"notifications",filename:"notifications.ts",path:"src/notifications.ts"},{text:`# password strength

Just wrap it a \`<xin-password-strength>\` element around an \`<input>\`
and it will gauge its content strength as a password. It will also
let you **securely verify** that the password hasn't been breached.

\`\`\`js
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
\`\`\`
\`\`\`html
<xin-password-strength>
  <input class="password" type="password">
  <button class="toggle">
    <xin-icon icon="eye"></xin-icon>
  </button>
</xin-password-strength>

<br><br>
<button class="breach">Check if breached</button>
<div class="output"></div>
\`\`\`
\`\`\`css
input.password {
  box-shadow: inset 0 0 0 2px var(--indicator-color);
}

.breached {
  color: white;
  background: red;
}
\`\`\`

## Algorithm

The password is assessed to have a strength based on:

- **length** one point for at least \`goodLength\` characters long.
- **[a-z]** one point for containing a lowercase letter
- **[A-Z]** one point for containing an uppercase letter
- **[0-9]** one point for containing a numeric character
- **^[a-zA-Z0-9]]** one point for containing some other kind of character

A password smaller than \`minLength\` is an automatic \`0\`.

## Attributes

- \`minLength\` defaults to \`8\`
- \`goodLength\` defaults to \`12\`
- \`indicatorColors\` six HTML colors, separated by commas, defaults to \`'#f00,#f40,#f80,#ef0,#8f0,#0d4'\`
- \`descriptionColors\` six HTML colors, sepeated by commans, defaults to \`'#000,#000,#000,#000,#000,#fff'\`

## Properties

- \`value\`, \`strength\` is a number from 0 to 5
- \`issues\` is a structure which you can use to generate feedback

\`\`\`
<xin-password-strength>.issues = {
  tooShort: boolean,
  short: boolean,
  noUpper: boolean,
  noLower: boolean,
  noNumber: boolean,
  noSpecial: boolean,
}
\`\`\`

## \`isBreached()\`

\`<xin-password-meter>\` also provides an \`isBreached(): Promise<boolean>\` method
which uses [weakpass.com's API](https://weakpass.com/) to tell you if the password has been
breached.

> Note that \`isBreached\` does not send the plain-text password anywhere. It uses **SHA-1**
to hash the password and then sends that for lookup.

## Utility Functions

Two functions used internally for querying [Weakpass,com](https://weakpass.com/) are
provided in case they're useful on their own.

\`isBreached(password: striing): Promise<boolean>\` will return \`true\` if the password is
found in Weakpass's database (and spit out extra info to the console).

\`digest(s: string, method="sha-1"): Promise<string>\` is just a nice wrapper for \`crypto.digest\`.`,title:"password strength",filename:"password-strength.ts",path:"src/password-strength.ts"},{text:`# popFloat

There are so many cases in user-interfaces where it's useful to pop-up a floating
user interface element that a simple and reliable way of doing this seems like
a good idea.

The problem with many such approaches is that they assume a highly specific
use-case (e.g. popup menu or combo box) and while meeting the creator's intended
purpose admirably, turn out to have some annoying limitation that prevents them
handling the specific case at hand.

\`\`\`js
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
\`\`\`
\`\`\`html
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
\`\`\`
\`\`\`css
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
\`\`\`

## popFloat

\`\`\`
export interface PopFloatOptions {
  content: HTMLElement | ElementPart[]
  target: HTMLElement
  position?: FloatPosition
}

export const popFloat = (options: PopFloatOptions): XinFloat
\`\`\`

Create a \`<xin-float>\` with the content provided, positioned as specified (or automatically).

## positionFloat

\`\`\`
export const positionFloat = (
  element: HTMLElement,
  target: HTMLElement,
  position?: FloatPosition
  remainOnScroll?: 'hide' | 'remove' | boolean // default is 'remove'
  remainOnResize?: 'hide' | 'remove' | boolean // default is 'remove'
): void
\`\`\`

This allows you to, for example, provide a global menu that can be used on any element
instead of needing to have a whole instance of the menu wrapped around every instance
of the thing you want the menu to affect (a common anti-pattern of front-end frameworks).

### Handling Overflow

\`positionFloat\` automatically sets two css-variables \`--max-height\` and \`--max-width\` on
the floating element to help you deal with overflow (e.g. in menus). E.g. if the float
is positioned with \`top: 125px\` then it will set \`--max-height: calc(100vh - 125px)\`.

## FloatPosition

\`\`\`
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
\`\`\``,title:"popFloat",filename:"pop-float.ts",path:"src/pop-float.ts"},{text:'# rating\n\n`XinRating` / `<xin-rating>` provides a drop-in replacement for an `<input>`\nthat renders a rating using <xin-icon icon="star" color="red"></xin-icon>s.\n\n```html\n<xin-rating value=3.4></xin-rating>\n<xin-rating min=0 value=3.4 step=0.5 hollow></xin-rating>\n<xin-rating value=3.4 color="deepskyblue"></xin-rating>\n<xin-rating value=3.1 max=10 color="hotpink" icon="heart" icon-size=32></xin-rating>\n```\n```css\n.preview {\n  display: flex;\n  flex-direction: column;\n}\n```\n\n## Attributes\n\n- `icon-size` (24 by default) determines the height of the control and along with `max` its width\n- `max` maximum rating\n- `min` (1 by default) can be 0 or 1 (allowing ratings of 0 to max or 1 to max)\n- `step` (0.5 by default) granularity of rating\n- `icon` (\'star\' by default) determines the icon used\n- `fill` (#f91 by default) is the color of rating icons\n- `empty-color` (#ccc by default) is the color of background icons\n- `readonly` (false by default) prevents the user from changing the rating\n- `hollow` (false by default) makes the empty rating icons hollow.\n\n## Keyboard\n\n`<xin-rating>` should be fully keyboard navigable (and, I hope, accessible).\n\nThe up key increases the rating, down descreases it. This is the same\nas the behavior of `<input type="number">`, [Shoelace\'s rating widget](https://shoelace.style/components/rating/),\nand (in my opinion) common sense, but  not like [MUI\'s rating widget](https://mui.com/material-ui/react-rating/).',title:"rating",filename:"rating.ts",path:"src/rating.ts"},{text:`# scriptTag & styleSheet

## scriptTag

If you need to load an old school (cjs) javascript or css library via cdn then use these two functions.

\`xinjs-ui\` uses this library to implement the \`<xin-code>\`, \`<xin-lottie>\`, and \`<xin-map>\`
elements.

\`scriptTag()\` and \`styleSheet()\` return promises that resolve \`globalThis\` when the module in question
has loaded and otherwise behave as much like \`import()\` as possible.

This example uses \`scriptTag\` and \`styleSheet\` to load [quilljs](https://quilljs.com) on-the-fly.

\`\`\`js
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
\`\`\`

Note that \`scriptTag\` will resolve \`globalThis\` so it behaves as much like async \`import()\`
as possible.

As an aside:

\`<xin-lottie>\` is implemented in such a way that if you've preloaded the module
(e.g. via a script tag or packaging) it won't load it again, which affords offline
use.

There's no point for \`<xin-map>\` since it won't work without connectivity anyway.

## styleSheet

styleSheet creates a \`<link>\` tag for a specified css file.

Using \`styleSheet\`:

    styleSheet('../path/to/style.css')

This is awaitable, if you care. The stylesheet \`<link>\` will only be inserted _once_.`,title:"scriptTag & styleSheet",filename:"via-tag.ts",path:"src/via-tag.ts"},{text:`# segmented select

This is a fairly general-purpose segmented select control.

\`\`\`html
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
\`\`\`
\`\`\`css
.preview .grid {
  --segmented-option-current-background: var(--brand-color);
  --segmented-option-current-color: var(--brand-text-color);
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
\`\`\`
\`\`\`js
function logEvent(event) {
  const { target } = event
  if (target.tagName === 'XIN-SEGMENTED') {
    console.log((target.textContent || target.title).trim(), target.value)
  }
}
preview.addEventListener('change', logEvent, true)
\`\`\`

## Properties

- \`values\` is an array of values (only really useful if \`multiple\` is set to true)

You can set \`choices\` programmatically to an array of \`Choice\` objects:

    interface Choice {
      icon?: string | SVGElement
      value: string
      caption: string
    }

## Attributes

- \`choices\` is a string of comma-delimited options of the form \`value=caption:icon\`, 
  where caption and icon are optional
- \`multiple\` allows multiple selection
- \`name\` allows you to set the name of the \`<input>\` elements to a specific value, it will default 
  to the component's \`instanceId\`
- \`other\` (default '', meaning other is not allowed) is the caption for other options, allowing 
  the user to input their choice. It will be reset to '' if \`multiple\` is set.
- \`placeholder\` is the placeholder displayed in the \`<input>\` field for **other** responses

## Styling

The following CSS variables can be used to control customize the \`<xin-segmented>\` component.

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
    --segmented-placeholder-opacity`,title:"segmented select",filename:"segmented.ts",path:"src/segmented.ts"},{text:`# select

\`<xin-select>\` (\`xinSelect\` is the \`ElementCreator\`) is a replacement for the lamentable
built in \`<select>\` element that addresses its various shortcomings.

- since \`<xin-select>\` is powered by \`popMenu\`, and supports separators and submenus.
- options can have icons.
- \`<xin-select>\` will retain and display a value even if the matching option is missing.
- its displayed value can be made \`editable\`, allowing use as a "combo box".
- options can have \`async\` callbacks that return a value.
- picking an item triggers an \`action\` event even if the value hasn't changed.
- available options are set via the \`options\` attribute or the element's \`options\` property (not \`<option>\` elements)

\`\`\`html
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
\`\`\`
\`\`\`js
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
\`\`\`
<xin-css-var-editor element-selector="xin-select"></xin-css-var-editor>

## \`options\`

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

A \`<xin-select>\` can be assigned \`options\` as a string of comma-delimited choices,
or be provided a \`SelectOptions\` array (which allows for submenus, separators, etc.).

## Attributes

\`<xin-select>\` supports several attributes:

- \`editable\` lets the user directly edit the value (like a "combo box").
- \`show-icon\` displays the icon corresponding to the currently selected value.
- \`hide-caption\` hides the caption.
- \`placeholder\` allows you to set a placeholder.
- \`options\` allows you to assign options as a comma-delimited string attribute.

## Events

Picking an option triggers an \`action\` event (whether or not this changes the value).

Changing the value, either by typing in an editable \`<xin-select>\` or picking a new
value triggers a \`change\` event.

You can look at the console to see the events triggered by the second example.`,title:"select",filename:"select.ts",path:"src/select.ts"},{text:"# sidebar\n\nThe default layout for iOS / iPadOS apps is to hide the sidebar when displaying content on small\nscreens, and display the sidebar when space is available (with the user able to explicitly hide\nthe sidebar if so desired). `<xin-sidenav>` provides this functionality.\n\n`<xin-sidenav>` is used to handle the layout of the documentation tab panel.\n\n`<xin-sidenav>`'s behavior is controlled by two attributes, `minSize` is the point at which it will toggle between showing the navigation\nsidebar and content, while `navSize` is the width of the sidebar. You can interrogate its `compact` property to find out if it's\ncurrently in `compact` form.",title:"sidebar",filename:"side-nav.ts",path:"src/side-nav.ts"},{text:`# size-break

While we wait for enough browsers to implement [container-queries](https://www.w3.org/TR/css-contain-3/),
and in any event when you simply want to do different things at different sizes (e.g. in the project I'm
working on right now, a row of buttons turns into a menu at narrow widths) there's \`<xin-sizebreak>\`.

Note that the sizes referred to are of the \`<xin-sizebreak>\`'s \`.offsetParent\`, and it watches for
the window's \`resize\` events and its own (via \`ResizeObserver\`).

\`\`\`html
<div class="container">
  <xin-sizebreak min-width="300" min-height="150">
    <h1>BIG!</h1>
    <i slot="small">little</i>
  </xin-sizebreak>
  <xin-sizer></xin-sizer>
</div>
\`\`\`
\`\`\`css
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
\`\`\`

\`<xin-sizebreak>\` supports both \`min-width\` and/or \`min-height\`, and you can of course target only one
of the slots if you like. The demo site uses them to hide the [bundlejs](https://bundlejs.com/) badge when
space is tight.`,title:"size-break",filename:"size-break.ts",path:"src/size-break.ts"},{text:`# sizer

This is a super-simple component that you can put in a fixed size element allowing it to be resized
from the bottom-right.

\`\`\`html
<div>
  <xin-sizer></xin-sizer>
</div>
\`\`\`
\`\`\`css
.preview div {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 200px;
  height: 100px;
  background: #ff02;
  border: 1px solid #555;
}
\`\`\`

<xin-css-var-editor element-selector="xin-sizer"></xin-css-var-editor>`,title:"sizer",filename:"sizer.ts",path:"src/sizer.ts"},{text:`# style

## Convert CSS to Javascript

This is a simple utility for converting CSS into a xinjs \`XinStyleSheet\` object.
Having all of your CSS start as Javascript (or Typescript) has many
benefits, such as being able to do color math using \`xinjs\`'s \`Color\` class,
and use the same values that are in your CSS for inline code when needed.

> ### Caution
>
> - This is not a real parser but regexp hackery!
> - Doesn't handle edge-cases like semicolons inside string values or
>   skipped semicolons for the last property in a rule.
> - Doesn't convert variable references inside style values (e.g. calc(var(--foo) * 0.5))
>   into \`vars\` values.

\`\`\`js
const tabs = preview.querySelector('xin-tabs')
const [css, js] = preview.querySelectorAll('xin-code')
const convertButton = preview.querySelector('button')

function quoteTrim(s, symbol = false) {
  s = s.trim()
  if (s.match(/[^\\w_]/) || !symbol) {
    s = s.replace(/'/g, "\\\\'")
    return \`'\${s}'\`
  } else {
    return s
  }
}

function kebabToCamel(s) {
  s = s.replace(/--/, '_')
  return s.replace(/\\-(\\w)/g, (_, c) => c.toLocaleUpperCase())
}

function css2js () {
  const source = css.value
  const lines = source.split('\\n')
  const output = ['{']
  let rule = ''
  for(const line of lines) {
    if (!line.trim()) {
      continue
    }
    try {
      rule = rule ? rule + ' ' + line.trim() : line
      if (rule.match(/@import .*;/)) {
        const [,url] = rule.match(/@import url\\(['"](.*)['"]\\);/)
        output.push(\`'@import': \${quoteTrim(url)},\`)
        rule = ''
      } else if (rule.match(/\\{\\s*$/)) {
        const [,whitespace, selector] = rule.match(/(\\s*)([^\\s].*)\\{/)
        output.push(\`\${whitespace}\${quoteTrim(selector, true)}: {\`)
        rule = ''
      } else if (line.match(/[^\\s]*\\}\\s*$/)) {
        output.push(line + ',')
        rule = ''
      } else if (rule.match(/.*:.*;/)) {
        let [,whitespace, prop, value] = rule.match(/(\\s*)(.*):(.*);/)
        prop = kebabToCamel(prop)
        output.push(\`\${whitespace}\${quoteTrim(prop, true)}: \${quoteTrim(value)},\`)
        rule = ''
      }
    } catch(e) {
      console.error(e, line)
    }
  }
  output.push('}')
  let code = output.join('\\n')
  code = code.replace(/'var\\(--([^)]*)\\)'/g, (_,v) => \`vars.\${kebabToCamel(v)}\`)

  js.value = \`import { vars } from 'xinjs'\\n\\nexport const styleSpec = \${code}\`
}

convertButton.addEventListener('click', () => {
  css2js()
  tabs.value = 1
})
\`\`\`
\`\`\`html
<xin-tabs>
<button slot="after-tabs">Convert</button>
<xin-code mode="css" name="css">
@import url('https://fonts.googleapis.com/css2?family=Aleo:ital,wght@0,100..900;1,100..900&famiSpline+Sans+Mono:ital,wght@0,300..700;1,300..700&display=swap');

tr:nth-child(2n) {
  background: var(--background-shaded);
}

th,
td {
  padding: calc(var(--spacing) * 0.5) var(--spacing);
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

header xin-locale-picker xin-select button {
  --brand-color: var(--brand-text-color);
  background: transparent;
  gap: 2px;
}

header xin-locale-picker xin-select button svg {
  fill: var(--brand-text-color) !important;
}
</xin-code>
<xin-code mode="javascript" name="js"></xin-code>
</xin-tabs>
\`\`\`
\`\`\`css
.preview xin-tabs {
  background: var(--inset-bg);
}
.preview xin-tabs, .preview textarea, .preview xin-code {
  width: 100%;
  height: 100%;
  resize: none;
}
\`\`\`

## Using the Output

You can turn the output of this utility using \`xinjs\`'s \`StyleSheet\` utility function:

\`\`\`
import { styleSpec } from './my-style'

StyleSheet('base-style', styleSpec) // creates a \`<style id="base-style>\` element in
  the \`<head>\` of the page.
\`\`\`

You can convert the output to Typescript by importing the \`XinStyleSheet\` from \`xinjs\`:

\`\`\`
import { XinStyleSheet, vars } from 'xinjs'

export const styleSpec: XinStyleSheet = ...
\`\`\``,title:"style",filename:"style.ts",path:"demo/src/style.ts"},{text:`# table

A virtual data-table, configurable via a \`columns\` array (which will automatically be generated if not provided),
that displays gigantic tables with fixed headers (and live column-resizing) using a minimum of resources and cpu.

\`\`\`js
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
\`\`\`
\`\`\`css
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
\`\`\`

> In the preceding example, the \`name\` column is *editable* (and *bound*, try editing something and scrolling
> it out of view and back) and \`multiple\` select is enabled. In the console, you can try \`$('xin-table').visibleRows\`
> and $('xin-table').selectedRows\`.

You can set the \`<xin-table>\`'s \`array\`, \`columns\`, and \`filter\` properties directly, or set its \`value\` to:

\`\`\`
{
  array: any[],
  columns: ColumnOptions[] | null,
  filter?: ArrayFilter
}
\`\`\`

## \`ColumnOptions\`

You can configure the table's columns by providing it an array of \`ColumnOptions\`:

\`\`\`
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
\`\`\`

## Selection

\`<xin-table>\` supports \`select\` and \`multiple\` boolean properties allowing rows to be selectable. Selected rows will
be given the \`[aria-selected]\` attribute, so style them as you wish.

\`multiple\` select supports shift-clicking and command/meta-clicking.

\`<xin-table>\` provides an \`selectionChanged(visibleSelectedRows: any[]): void\` callback property allowing you to respond to changes
in the selection, and also \`selectedRows\` and \`visibleSelectedRows\` properties.

The following methods are also provided:

- \`<xin-table>.selectRow(row: any, select = true)\` (de)selects specified row
- \`<xin-table>.selectRows(rows?: any[], select = true)\` (de)selects specified rows
- \`<xin-table>.deSelect(rows?: any[])\` deselects all or specified rows.

These are rather fine-grained but they're used internally by the selection code so they may as well be documented.

## Sorting

By default, the user can sort the table by any column which doesn't have a \`sort === false\`.

You can set the initial sort by setting the \`sort\` value of a specific column to \`ascending\`
or \`descending\`.

You can override this by setting the table's sort function (it's an \`Array.sort()\` callback)
to whatever you like, and you can replace the \`headerCell\` or set the \`sort\` of each column
to \`false\` if you have some specific sorting in mind.

You can disable sorting controls by adding the \`nosort\` attribute to the \`<xin-table>\`.

## Hiding (and Showing) Columns

By default, the user can show / hide columns by clicking via the column header menu.
You can remove this option by adding the \`nohide\` attribute to the \`<xin-table>\`

## Reordering Columns

By default, the user can reorder columns by dragging them around. You can disable this
by adding the \`noreorder\` attribute to the \`<xin-table>\`.

## Row Height

If you set the \`<xin-table>\`'s \`rowHeight\` to \`0\` it will render all its elements (i.e. not be virtual). This is
useful for smaller tables, or tables with variable row-heights.

## Styling

Aside from row height (see previous) the component doesn't use the shadowDOM, so it's easy to override
its styles.

## Pinned Rows

The table supports two attributes, \`pinnedTop\` and \`pinnedBottom\` that let you pin the specified number
of top and bottom rows.`,title:"table",filename:"data-table.ts",path:"src/data-table.ts"},{text:`# tabs

\`<xin-tabs>\` creates a \`tabpanel\` for its children, creating a \`tab\` for each based on its
\`name\` attribute.

\`\`\`js
[...preview.querySelectorAll('div[name]')].forEach(div => {
  div.style.color = \`hsl(\${(Math.random() * 360).toFixed(0)} 50% 50%)\`
})

const { div, button } = xinjs.elements
const tabSelector = preview.querySelector('xin-tabs')

tabSelector.onCloseTab = body => {
  if (!confirm(\`Are you sure you want to close the \${body.getAttribute('name')} tab?\`)) {
    return false
  }
}

let bodycount = 0
preview.querySelector('.add').addEventListener('click', () => {
  const name = \`new tab \${++bodycount}\`
  const body = div(
    {name, dataClose: true},
    name,
  )
  tabSelector.addTabBody(body, true)
})
\`\`\`
\`\`\`html
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
\`\`\`
\`\`\`css
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
\`\`\`

The \`<xin-tabs>\`s \`value\` is the index of its active body.

A \`<xin-tabs>\` has \`addTabBody(body: HTMLElement, select?: boolean)\` and
\`removeTabBody(body: number | HTMLElement)\` methods for updating its content.

You can also just insert or remove tab bodies directly and call \`setupTabs()\`.

## Closeable Tabs

Adding the \`data-close\` attribute to a tab will make it closeable.

When a tab is closed, the \`<xin-tabs>\` element's \`onCloseTab: (tabBody: Element) => boolean | undefined | void\`
will be called. If you override this method and return \`false\`, the tab will
not be closed (e.g. if you want to implement save/cancel behavior).

## Custom Tab Content

You can specify the exact content of the tab for a given body by
adding a \`<template role="tab">\` to that body. The contents of that
template will be cloned into the tab.`,title:"tabs",filename:"tab-selector.ts",path:"src/tab-selector.ts"},{text:`# tag-list

Building a tag-list from standard HTML elements is a bit of a nightmare.

\`<xin-tag-list>\` allows you to display an editable or read-only tag list (represented either
as a comma-delimited string or an array of strings).

\`\`\`html
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
\`\`\`
\`\`\`css
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
\`\`\`
\`\`\`js
preview.addEventListener('change', (event) => {
  console.log(event.target, event.target.value)
}, true)
\`\`\`

## Properties

### \`value\`: string | string[]

A list of tags

### \`tags\`: string[]

## \`popSelectMenu\`: () => void

This is the method called when the user clicks the menu button. By default is displays a
pick list of tags, but if you wish to customize the behavior, just replace this method.

A read-only property giving the value as an array.

### \`available-tags\`: string | string[]

A list of tags that will be displayed in the popup menu by default. The popup menu
will always display custom tags (allowing their removal).

### \`editable\`: boolean

Allows the tag list to be modified via menu and removing tags.

### \`text-entry\`: boolean

If \`editable\`, an input field is provided for entering tags directly.

### \`placeholder\`: string = 'enter tags'

Placeholder shown on input field.`,title:"tag-list",filename:"tag-list.ts",path:"src/tag-list.ts"},{text:`# trackDrag

Sometimes you want to track a mouse-drag or touch-drag operation without messing around.
This is how the resizeable columns in \`<xin-table>\` work.

Just call \`trackDrag(event, (dx, dy, event) => { ... })\` and you'll get updates on corresponding events until
you return \`true\` from the event-handler (or, in the case of \`touch\` events, the last \`touch\` ends).
For mouse events, a "tracker" element is thrown up in front of everything for the event.

\`\`\`html
<p>
  Try dragging the squares…<br>
  (You can drag them separately with multi-touch!)
</p>
<div class="draggable" style="top: 20px; left: 40px; background: #f008"></div>
<div class="draggable" style="left: 40%; bottom: 30%; background: #0f08"></div>
<div class="draggable" style="bottom: 30px; right: 10px; background: #00f8"></div>
\`\`\`
\`\`\`css
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
\`\`\`
\`\`\`js
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
\`\`\`

For \`touch\` events, \`dx\` and \`dy\` are based on tracking \`event.changedTouches[0]\` which
is almost certainly what you want.

To handle multi-touch gestures you will need to track the touches yourself.

## bringToFront

\`bringToFront(element: HTMLElement, selector = 'body *')\`  gives the element the highest
\`z-index\` of any element matching the selector (which is passed to findHighestZ).

## findHighestZ

\`findHighestZ(selector = 'body *'): number\` returns the the highest \`z-index\` of any element
matching \`selector\`.`,title:"trackDrag",filename:"track-drag.ts",path:"src/track-drag.ts"},{text:`# word (rich text editor)

\`<xin-word>\` is a simple and easily extensible \`document.execCommand\` WYSIWYG editor with some conveniences.

\`\`\`html
<xin-word widgets="minimal">
<h3>Heading</h3>
<p>And some <b>text</b></p>
</xin-word>
\`\`\`
\`\`\`css
xin-word {
  background: white;
}

xin-word [part="toolbar"] {
  background: #f8f8f8;
}

xin-word [part="doc"] {
  padding: 20px;
}
\`\`\`

By default, \`<xin-word>\` treats its initial contents as its document, but you can also set (and get)
its \`value\`.

## toolbar

\`<xin-word>\` elements have a \`toolbar\` slot (actually a xin-slot because it doesn't use
the shadowDOM).

If you set the \`widgets\` attribute to \`default\` or \`minimal\` you will get a toolbar
for free. Or you can add your own custom widgets.

## helper functions

A number of helper functions are available, including:

- \`commandButton(title: string, command: string, iconClass: string)\`
- \`blockStyle(options: Array<{caption: string, tagType: string}>)\`
- \`spacer(width = '10px')\`
- \`elastic(width = '10px')\`

These each create a toolbar widget. A \`blockStyle\`-generated \`<select>\` element will
automatically have its value changed based on the current selection.

## properties

A \`<xin-word>\` element also has \`selectedText\` and \`selectedBlocks\` properties, allowing
you to easily perform operations on text selections, and a \`selectionChange\` callback (which
simply passes through document \`selectionchange\` events, but also passes a reference to
the \`<xin-word>\` component).`,title:"word (rich text editor)",filename:"rich-text.ts",path:"src/rich-text.ts"},{text:`# docs.js

The \`xinjs-ui\` package includes \`docs.js\` which is used to build the documentation
for the [ui.xinjs.net](https://ui.xinjs.net).

This is a simple utility for finding all the markdown files in a directory and also all
multi-line comments in .ts, .js, and .css source files that being with a "!".

These comments are assumed to be in markdown.

It then emits JSON containing all the content.

Comments comprising JSON objects are treated as metadata and added to the
file objects in the JSON data. This includes: \`<!--{ ... }-- >\` and \`/*{...}* /\`
comments (omit the spaces inserted to prevent this text from blowing up docs.js!)

As of now, the only metadata supported by docs.js is \`pin\` which if set to "top"
will force the item to the top of the list, while "bottom" will force it to the
bottom.

This doc is pinned to the bottom. README is pinned to the top.

> **Aside**: the original version of this code was written by ChatGPT.`,title:"docs.js",filename:"docs.js",path:"docs.js",pin:"bottom"},{text:`# Work in Progress

- \`<xin-filter>\`
  - Leverage \`<xin-select>\` for picking fields etc.
  - Leverage \`<xin-tag-list>\` for displaying filters compactly
  - Leverage \`popFloat\` for disclosing filter-editor
- \`<xin-editable>\`
  - Add support for disabling / enabling options
  - Hide lock icons while resizing
  - Maybe show lines under locks indicating the parent
  - Support snapping to sibling boundaries and centers
- builds
  - better leveraging of tree-shacking
  <!--{"pin": "bottom"}-->
`,title:"Work in Progress",filename:"TODO.md",path:"TODO.md",pin:"bottom"}];hn("demo-style",ro);D1(co);setTimeout(()=>{let e=getComputedStyle(document.body).getPropertyValue("--brand-color");console.log("welcome to %cui.xinjs.net",`color: ${e}; padding: 0 5px;`)},100);var Ke="xinjs-ui",f0=document.location.search!==""?document.location.search.substring(1).split("&")[0]:"README.md",b0=Mt.find((e)=>e.filename===f0)||Mt[0],{app:se}=Oe({app:{title:Ke,blogUrl:"https://loewald.com",discordUrl:"https://discord.com/invite/ramJ9rgky5",githubUrl:`https://github.com/tonioloewald/${Ke}#readme`,npmUrl:`https://www.npmjs.com/package/${Ke}`,xinjsUrl:"https://xinjs.net",bundleBadgeUrl:`https://deno.bundlejs.com/?q=${Ke}&badge=`,bundleUrl:`https://bundlejs.com/?q=${Ke}`,cdnBadgeUrl:`https://data.jsdelivr.com/v1/package/npm/${Ke}/badge`,cdnUrl:`https://www.jsdelivr.com/package/npm/${Ke}`,optimizeLottie:!1,lottieFilename:"",lottieData:"",docs:Mt,currentDoc:b0}});ke.docLink={toDOM(e,t){e.setAttribute("href",`?${t}`)}};ke.current={toDOM(e,t){let n=e.getAttribute("href")||"";e.classList.toggle("current",t===n.substring(1))}};setTimeout(()=>{Object.assign(globalThis,{app:se,xin:Je,bindings:ke,elements:P,vars:y,touch:jt})},1000);var ga=document.querySelector("main"),{h2:v0,div:ma,span:Li,a:Ae,img:fa,header:x0,button:y0,template:w0}=P;window.addEventListener("popstate",()=>{let e=window.location.search.substring(1);se.currentDoc=se.docs.find((t)=>t.filename===e)||se.docs[0]});if(ga)ga.append(x0(Ae({href:"/",style:{display:"flex",alignItems:"center",borderBottom:"none"}},F.xinjsUiColor({style:{_fontSize:40,marginRight:10}}),v0({bindText:"app.title"})),Li({class:"elastic"}),oo({minWidth:640},Li({style:{marginRight:y.spacing,display:"flex",alignItems:"center",gap:y.spacing50}},Ae({href:se.bundleUrl},fa({alt:"bundlejs size badge",src:se.bundleBadgeUrl})),Ae({href:se.cdnUrl},fa({alt:"jsdelivr",src:se.cdnBadgeUrl}))),Li({slot:"small"})),Ae({class:"iconic",title:"discord",target:"_blank"},F.discord(),{href:se.discordUrl}),Ae({class:"iconic",title:"blog",target:"_blank"},F.blog(),{href:se.blogUrl}),Ae({class:"iconic",title:"github",target:"_blank"},F.github(),{href:se.githubUrl}),Ae({class:"iconic",title:"npmjs",target:"_blank"},F.npm(),{href:se.npmUrl}),P1({hideCaption:!0})),to({name:"Documentation",navSize:200,minSize:600,style:{flex:"1 1 auto",overflow:"hidden"}},ma({slot:"nav",style:{display:"flex",flexDirection:"column",width:"100%",height:"100%",background:y.navBg,overflowY:"scroll"},bindList:{value:se.docs}},w0(Ae({class:"doc-link",bindCurrent:"app.currentDoc.filename",bindDocLink:"^.filename",onClick(e){let t=e.target,n=pn(e.target),i=e.target.closest("xin-sidenav");i.contentVisible=!0;let{href:o}=t;window.history.pushState({href:o},"",o),se.currentDoc=n,e.preventDefault()}},_1({bindText:"^.title"})))),ma({style:{position:"relative",overflowY:"scroll",height:"100%"}},y0({title:"show navigation",class:"transparent close-nav show-within-compact",style:{marginTop:"2px",position:"fixed"},onClick(e){e.target.closest("xin-sidenav").contentVisible=!1}},F.chevronLeft()),G1({style:{display:"block",maxWidth:"44em",margin:"auto",padding:"0 1em",overflow:"hidden"},bindValue:"app.currentDoc.text",didRender(){Sn.insertExamples(this,{xinjs:Et,xinjsui:Ai})}}))));

//# debugId=82C937B2AE4723D864756E2164756E21
//# sourceMappingURL=index.js.map
