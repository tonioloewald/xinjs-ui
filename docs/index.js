var ms=Object.defineProperty;var St=(n,t)=>{for(var e in t)ms(n,e,{get:t[e],enumerable:!0,configurable:!0,set:(i)=>t[e]=()=>i})};var jt={};St(jt,{xinValue:()=>Dn,xinProxy:()=>qn,xinPath:()=>Cs,xin:()=>Xn,vars:()=>w,varDefault:()=>q,updates:()=>Ds,unobserve:()=>Fs,touch:()=>At,throttle:()=>Tt,svgElements:()=>qe,settings:()=>Es,on:()=>ys,observerShouldBeRemoved:()=>Is,observe:()=>Ls,mathML:()=>Ss,makeComponent:()=>Ts,invertLuminance:()=>ws,initVars:()=>zs,hotReload:()=>bs,getListItem:()=>ue,elements:()=>$,default:()=>Ps,debounce:()=>js,darkMode:()=>Ms,css:()=>xs,boxedProxy:()=>Et,boxed:()=>Os,blueprintLoader:()=>$s,blueprint:()=>Hs,bindings:()=>In,bind:()=>vs,StyleSheet:()=>de,MoreMath:()=>As,Component:()=>_,Color:()=>gn,BlueprintLoader:()=>_s,Blueprint:()=>qs});function D(n,t,e,i){Object.defineProperty(n,t,{get:e,set:i,enumerable:!0,configurable:!0})}var Fi=globalThis,Ct={},De={},A=Fi.parcelRequire94c2;if(A==null)A=function(n){if(n in Ct)return Ct[n].exports;if(n in De){var t=De[n];delete De[n];var e={id:n,exports:{}};return Ct[n]=e,t.call(e.exports,e,e.exports),e.exports}var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i},A.register=function n(t,e){De[t]=e},Fi.parcelRequire94c2=A;var nn=A.register;nn("3x0mh",function(module,exports){D(module.exports,"Blueprint",()=>Blueprint),D(module.exports,"blueprint",()=>blueprint),D(module.exports,"BlueprintLoader",()=>BlueprintLoader),D(module.exports,"blueprintLoader",()=>blueprintLoader);var $aVpVG=A("aVpVG"),$lGBgM=A("lGBgM");class Blueprint extends $aVpVG.Component{async packaged(){if(!this.loaded){let{tag,src}=this,imported=await eval(`import('${src}')`),blueprint=imported[this.property];this.loaded=$lGBgM.makeComponent(tag,blueprint)}return this.loaded}constructor(){super(),this.tag="anon-elt",this.src="",this.property="default",this.initAttributes("tag","src","property")}}let blueprint=Blueprint.elementCreator({tag:"xin-blueprint",styleSpec:{":host":{display:"none"}}});class BlueprintLoader extends $aVpVG.Component{constructor(){super()}async load(){let t=[...this.querySelectorAll(Blueprint.tagName)].filter((e)=>e.src).map((e)=>e.packaged());await Promise.all(t)}connectedCallback(){super.connectedCallback(),this.load()}}let blueprintLoader=BlueprintLoader.elementCreator({tag:"xin-loader",styleSpec:{":host":{display:"none"}}})});nn("aVpVG",function(n,t){D(n.exports,"Component",()=>z);var e=A("2okor"),i=A("19FSF"),a=A("gbrAN"),s=A("9sLMf"),o=A("5JLBr");let l=0;function r(){return`custom-elt${(l++).toString(36)}`}let h=0,d={};function p(c,g){let f=d[c],u=e.css(g).replace(/:host\b/g,c);d[c]=f?f+`
`+u:u}function m(c){if(d[c])document.head.append(s.elements.style({id:c+"-component"},d[c]));delete d[c]}class z extends HTMLElement{static{this.elements=s.elements}static{this._tagName=null}static get tagName(){return this._tagName}static StyleNode(c){return console.warn("StyleNode is deprecated, just assign static styleSpec: XinStyleSheet to the class directly"),s.elements.style(e.css(c))}static elementCreator(c={}){if(this._elementCreator==null){let{tag:g,styleSpec:f}=c,u=c!=null?g:null;if(u==null)if(typeof this.name==="string"&&this.name!==""){if(u=o.camelToKabob(this.name),u.startsWith("-"))u=u.slice(1)}else u=r();if(customElements.get(u)!=null)console.warn(`${u} is already defined`);if(u.match(/\w+(-\w+)+/)==null)console.warn(`${u} is not a legal tag for a custom-element`),u=r();while(customElements.get(u)!==void 0)u=r();if(this._tagName=u,f!==void 0)p(u,f);window.customElements.define(u,this,c),this._elementCreator=s.elements[u]}return this._elementCreator}initAttributes(...c){let g={},f={};new MutationObserver((b)=>{let v=!1;if(b.forEach((y)=>{v=!!(y.attributeName&&c.includes(o.kabobToCamel(y.attributeName)))}),v&&this.queueRender!==void 0)this.queueRender(!1)}).observe(this,{attributes:!0}),c.forEach((b)=>{g[b]=i.deepClone(this[b]);let v=o.camelToKabob(b);Object.defineProperty(this,b,{enumerable:!1,get(){if(typeof g[b]==="boolean")return this.hasAttribute(v);else if(this.hasAttribute(v))return typeof g[b]==="number"?parseFloat(this.getAttribute(v)):this.getAttribute(v);else if(f[b]!==void 0)return f[b];else return g[b]},set(y){if(typeof g[b]==="boolean"){if(y!==this[b]){if(y)this.setAttribute(v,"");else this.removeAttribute(v);this.queueRender()}}else if(typeof g[b]==="number"){if(y!==parseFloat(this[b]))this.setAttribute(v,y),this.queueRender()}else if(typeof y==="object"||`${y}`!==`${this[b]}`){if(y===null||y===void 0||typeof y==="object")this.removeAttribute(v);else this.setAttribute(v,y);this.queueRender(),f[b]=y}}})})}initValue(){let c=Object.getOwnPropertyDescriptor(this,"value");if(c===void 0||c.get!==void 0||c.set!==void 0)return;let g=this.hasAttribute("value")?this.getAttribute("value"):i.deepClone(this.value);delete this.value,Object.defineProperty(this,"value",{enumerable:!1,get(){return g},set(f){if(g!==f)g=f,this.queueRender(!0)}})}get parts(){let c=this.shadowRoot!=null?this.shadowRoot:this;if(this._parts==null)this._parts=new Proxy({},{get(g,f){if(g[f]===void 0){let u=c.querySelector(`[part="${f}"]`);if(u==null)u=c.querySelector(f);if(u==null)throw new Error(`elementRef "${f}" does not exist!`);u.removeAttribute("data-ref"),g[f]=u}return g[f]}});return this._parts}constructor(){super(),this.content=s.elements.slot(),this._changeQueued=!1,this._renderQueued=!1,this._hydrated=!1,h+=1,this.initAttributes("hidden"),this.instanceId=`${this.tagName.toLocaleLowerCase()}-${h}`,this._value=i.deepClone(this.defaultValue)}connectedCallback(){if(m(this.constructor.tagName),this.hydrate(),this.role!=null)this.setAttribute("role",this.role);if(this.onResize!==void 0){if(a.resizeObserver.observe(this),this._onResize==null)this._onResize=this.onResize.bind(this);this.addEventListener("resize",this._onResize)}if(this.value!=null&&this.getAttribute("value")!=null)this._value=this.getAttribute("value");this.queueRender()}disconnectedCallback(){a.resizeObserver.unobserve(this)}queueRender(c=!1){if(!this._hydrated)return;if(!this._changeQueued)this._changeQueued=c;if(!this._renderQueued)this._renderQueued=!0,requestAnimationFrame(()=>{if(this._changeQueued)a.dispatch(this,"change");this._changeQueued=!1,this._renderQueued=!1,this.render()})}hydrate(){if(!this._hydrated){this.initValue();let c=typeof this.content!=="function",g=typeof this.content==="function"?this.content():this.content,{styleSpec:f}=this.constructor,{styleNode:u}=this.constructor;if(f)u=this.constructor.styleNode=s.elements.style(e.css(f)),delete this.constructor.styleNode;if(this.styleNode)console.warn(this,"styleNode is deprecrated, use static styleNode or statc styleSpec instead"),u=this.styleNode;if(u){let b=this.attachShadow({mode:"open"});b.appendChild(u.cloneNode(!0)),a.appendContentToElement(b,g,c)}else if(g!==null){let b=[...this.childNodes];a.appendContentToElement(this,g,c),this.isSlotted=this.querySelector("slot,xin-slot")!==void 0;let v=[...this.querySelectorAll("slot")];if(v.length>0)v.forEach(x.replaceSlot);if(b.length>0){let y={"":this};[...this.querySelectorAll("xin-slot")].forEach((S)=>{y[S.name]=S}),b.forEach((S)=>{let M=y[""],j=S instanceof Element?y[S.slot]:M;(j!==void 0?j:M).append(S)})}}this._hydrated=!0}}render(){}}class x extends z{static replaceSlot(c){let g=document.createElement("xin-slot");if(c.name!=="")g.setAttribute("name",c.name);c.replaceWith(g)}constructor(){super(),this.name="",this.content=null,this.initAttributes("name")}}let C=x.elementCreator({tag:"xin-slot"})});nn("2okor",function(n,t){D(n.exports,"StyleSheet",()=>s),D(n.exports,"css",()=>d),D(n.exports,"processProp",()=>l),D(n.exports,"initVars",()=>p),D(n.exports,"darkMode",()=>m),D(n.exports,"invertLuminance",()=>z),D(n.exports,"vars",()=>x),D(n.exports,"varDefault",()=>C);var e=A("6Jaab"),i=A("9sLMf"),a=A("5JLBr");function s(c,g){let f=i.elements.style(d(g));f.id=c,document.head.append(f)}let o=["animation-iteration-count","flex","flex-base","flex-grow","flex-shrink","opacity","order","tab-size","widows","z-index","zoom"],l=(c,g)=>{if(typeof g==="number"&&!o.includes(c))g=`${g}px`;if(c.startsWith("_"))if(c.startsWith("__"))c="--"+c.substring(2),g=`var(${c}-default, ${g})`;else c="--"+c.substring(1);return{prop:c,value:String(g)}},r=(c,g,f)=>{if(f===void 0)return"";if(f instanceof e.Color)f=f.html;let u=l(g,f);return`${c}  ${u.prop}: ${u.value};`},h=(c,g,f="")=>{let u=a.camelToKabob(c);if(typeof g==="object"&&!(g instanceof e.Color)){let b=Object.keys(g).map((v)=>h(v,g[v],`${f}  `)).join(`
`);return`${f}  ${c} {
${b}
${f}  }`}else return r(f,u,g)},d=(c,g="")=>{return Object.keys(c).map((u)=>{let b=c[u];if(typeof b==="string"){if(u==="@import")return`@import url('${b}');`;throw new Error("top-level string value only allowed for `@import`")}let v=Object.keys(b).map((y)=>h(y,b[y])).join(`
`);return`${g}${u} {
${v}
}`}).join(`

`)},p=(c)=>{console.warn("initVars is deprecated. Just use _ and __ prefixes instead.");let g={};for(let f of Object.keys(c)){let u=c[f],b=a.camelToKabob(f);g[`--${b}`]=typeof u==="number"&&u!==0?String(u)+"px":u}return g},m=(c)=>{console.warn("darkMode is deprecated. Use inverseLuminance instead.");let g={};for(let f of Object.keys(c)){let u=c[f];if(typeof u==="string"&&u.match(/^(#|rgb[a]?\(|hsl[a]?\()/)!=null)u=e.Color.fromCss(u).inverseLuminance.html,g[`--${a.camelToKabob(f)}`]=u}return g},z=(c)=>{let g={};for(let f of Object.keys(c)){let u=c[f];if(u instanceof e.Color)g[f]=u.inverseLuminance;else if(typeof u==="string"&&u.match(/^(#[0-9a-fA-F]{3}|rgba?\(|hsla?\()/))g[f]=e.Color.fromCss(u).inverseLuminance}return g},x=new Proxy({},{get(c,g){if(c[g]==null){g=g.replace(/[A-Z]/g,(S)=>`-${S.toLocaleLowerCase()}`);let[,f,,u,b,v]=g.match(/^([^\d_]*)((_)?(\d+)(\w*))?$/),y=`--${f}`;if(b!=null){let S=u==null?Number(b)/100:-Number(b)/100;switch(v){case"b":{let M=getComputedStyle(document.body).getPropertyValue(y);c[g]=S>0?e.Color.fromCss(M).brighten(S).rgba:e.Color.fromCss(M).darken(-S).rgba}break;case"s":{let M=getComputedStyle(document.body).getPropertyValue(y);c[g]=S>0?e.Color.fromCss(M).saturate(S).rgba:e.Color.fromCss(M).desaturate(-S).rgba}break;case"h":{let M=getComputedStyle(document.body).getPropertyValue(y);c[g]=e.Color.fromCss(M).rotate(S*100).rgba,console.log(e.Color.fromCss(M).hsla,e.Color.fromCss(M).rotate(S).hsla)}break;case"o":{let M=getComputedStyle(document.body).getPropertyValue(y);c[g]=e.Color.fromCss(M).opacity(S).rgba}break;case"":c[g]=`calc(var(${y}) * ${S})`;break;default:throw console.error(v),new Error(`Unrecognized method ${v} for css variable ${y}`)}}else c[g]=`var(${y})`}return c[g]}}),C=new Proxy({},{get(c,g){if(c[g]===void 0){let f=`--${g.replace(/[A-Z]/g,(u)=>`-${u.toLocaleLowerCase()}`)}`;c[g]=(u)=>`var(${f}, ${u})`}return c[g]}})});nn("6Jaab",function(n,t){D(n.exports,"Color",()=>l);var e=A("drWRQ");let i=(r,h,d)=>{return(0.299*r+0.587*h+0.114*d)/255},a=(r)=>("00"+Math.round(Number(r)).toString(16)).slice(-2);class s{constructor(r,h,d){r/=255,h/=255,d/=255;let p=Math.max(r,h,d),m=p-Math.min(r,h,d),z=m!==0?p===r?(h-d)/m:p===h?2+(d-r)/m:4+(r-h)/m:0;this.h=60*z<0?60*z+360:60*z,this.s=m!==0?p<=0.5?m/(2*p-m):m/(2-(2*p-m)):0,this.l=(2*p-m)/2}}let o=globalThis.document!==void 0?globalThis.document.createElement("span"):void 0;class l{static fromCss(r){let h=r;if(o instanceof HTMLSpanElement)o.style.color=r,document.body.appendChild(o),h=getComputedStyle(o).color,o.remove();let[d,p,m,z]=h.match(/[\d.]+/g);return new l(Number(d),Number(p),Number(m),z==null?1:Number(z))}static fromHsl(r,h,d,p=1){return l.fromCss(`hsla(${r.toFixed(0)}, ${(h*100).toFixed(0)}%, ${(d*100).toFixed(0)}%, ${p.toFixed(2)})`)}constructor(r,h,d,p=1){this.r=e.clamp(0,r,255),this.g=e.clamp(0,h,255),this.b=e.clamp(0,d,255),this.a=p!==void 0?e.clamp(0,p,1):p=1}get inverse(){return new l(255-this.r,255-this.g,255-this.b,this.a)}get inverseLuminance(){let{h:r,s:h,l:d}=this._hsl;return l.fromHsl(r,h,1-d,this.a)}get rgb(){let{r,g:h,b:d}=this;return`rgb(${r.toFixed(0)},${h.toFixed(0)},${d.toFixed(0)})`}get rgba(){let{r,g:h,b:d,a:p}=this;return`rgba(${r.toFixed(0)},${h.toFixed(0)},${d.toFixed(0)},${p.toFixed(2)})`}get RGBA(){return[this.r/255,this.g/255,this.b/255,this.a]}get ARGB(){return[this.a,this.r/255,this.g/255,this.b/255]}get _hsl(){if(this.hslCached==null)this.hslCached=new s(this.r,this.g,this.b);return this.hslCached}get hsl(){let{h:r,s:h,l:d}=this._hsl;return`hsl(${r.toFixed(0)}, ${(h*100).toFixed(0)}%, ${(d*100).toFixed(0)}%)`}get hsla(){let{h:r,s:h,l:d}=this._hsl;return`hsla(${r.toFixed(0)}, ${(h*100).toFixed(0)}%, ${(d*100).toFixed(0)}%, ${this.a.toFixed(2)})`}get mono(){let r=this.brightness*255;return new l(r,r,r)}get brightness(){return i(this.r,this.g,this.b)}get html(){return this.toString()}toString(){return this.a===1?"#"+a(this.r)+a(this.g)+a(this.b):"#"+a(this.r)+a(this.g)+a(this.b)+a(Math.floor(255*this.a))}brighten(r){let{h,s:d,l:p}=this._hsl,m=e.clamp(0,p+r*(1-p),1);return l.fromHsl(h,d,m,this.a)}darken(r){let{h,s:d,l:p}=this._hsl,m=e.clamp(0,p*(1-r),1);return l.fromHsl(h,d,m,this.a)}saturate(r){let{h,s:d,l:p}=this._hsl,m=e.clamp(0,d+r*(1-d),1);return l.fromHsl(h,m,p,this.a)}desaturate(r){let{h,s:d,l:p}=this._hsl,m=e.clamp(0,d*(1-r),1);return l.fromHsl(h,m,p,this.a)}rotate(r){let{h,s:d,l:p}=this._hsl,m=(h+360+r)%360;return l.fromHsl(m,d,p,this.a)}opacity(r){let{h,s:d,l:p}=this._hsl;return l.fromHsl(h,d,p,r)}swatch(){let{r,g:h,b:d,a:p}=this;return console.log(`%c      %c ${this.html}, rgba(${r}, ${h}, ${d}, ${p}), ${this.hsla}`,`background-color: rgba(${r}, ${h}, ${d}, ${p})`,"background-color: transparent"),this}blend(r,h){return new l(e.lerp(this.r,r.r,h),e.lerp(this.g,r.g,h),e.lerp(this.b,r.b,h),e.lerp(this.a,r.a,h))}mix(r,h){let d=this._hsl,p=r._hsl;return l.fromHsl(e.lerp(d.h,p.h,h),e.lerp(d.s,p.s,h),e.lerp(d.l,p.l,h),e.lerp(this.a,r.a,h))}}});nn("drWRQ",function(n,t){D(n.exports,"clamp",()=>a),D(n.exports,"lerp",()=>s),D(n.exports,"MoreMath",()=>o);let e=180/Math.PI,i=Math.PI/180;function a(l,r,h){return r<l?l:r>h?h:r}function s(l,r,h){return h=a(0,h,1),h*(r-l)+l}let o={clamp:a,lerp:s}});nn("9sLMf",function(n,t){D(n.exports,"elements",()=>p),D(n.exports,"svgElements",()=>m),D(n.exports,"mathML",()=>z);var e=A("kCu8Y"),i=A("buKmK"),a=A("5JLBr"),s=A("2okor");let o="http://www.w3.org/1998/Math/MathML",l="http://www.w3.org/2000/svg",r={},h=(x,...C)=>{if(r[x]===void 0){let[f,u]=x.split("|");if(u===void 0)r[x]=globalThis.document.createElement(f);else r[x]=globalThis.document.createElementNS(u,f)}let c=r[x].cloneNode(),g={};for(let f of C)if(f instanceof Element||f instanceof DocumentFragment||typeof f==="string"||typeof f==="number")if(c instanceof HTMLTemplateElement)c.content.append(f);else c.append(f);else Object.assign(g,f);for(let f of Object.keys(g)){let u=g[f];if(f==="apply")u(c);else if(f==="style")if(typeof u==="object")for(let b of Object.keys(u)){let v=s.processProp(a.camelToKabob(b),u[b]);if(v.prop.startsWith("--"))c.style.setProperty(v.prop,v.value);else c.style[b]=v.value}else c.setAttribute("style",u);else if(f.match(/^on[A-Z]/)!=null){let b=f.substring(2).toLowerCase();e.on(c,b,u)}else if(f==="bind")if((typeof u.binding==="string"?i.bindings[u.binding]:u.binding)!==void 0&&u.value!==void 0)e.bind(c,u.value,u.binding instanceof Function?{toDOM:u.binding}:u.binding);else throw new Error("bad binding");else if(f.match(/^bind[A-Z]/)!=null){let b=f.substring(4,5).toLowerCase()+f.substring(5),v=i.bindings[b];if(v!==void 0)e.bind(c,u,v);else throw new Error(`${f} is not allowed, bindings.${b} is not defined`)}else if(c[f]!==void 0){let{MathMLElement:b}=globalThis;if(c instanceof SVGElement||b!==void 0&&c instanceof b)c.setAttribute(f,u);else c[f]=u}else{let b=a.camelToKabob(f);if(b==="class")u.split(" ").forEach((v)=>{c.classList.add(v)});else if(c[b]!==void 0)c[b]=u;else if(typeof u==="boolean")u?c.setAttribute(b,""):c.removeAttribute(b);else c.setAttribute(b,u)}}return c},d=(...x)=>{let C=globalThis.document.createDocumentFragment();for(let c of x)C.append(c);return C},p=new Proxy({fragment:d},{get(x,C){if(C=C.replace(/[A-Z]/g,(c)=>`-${c.toLocaleLowerCase()}`),x[C]===void 0)x[C]=(...c)=>h(C,...c);return x[C]},set(){throw new Error("You may not add new properties to elements")}}),m=new Proxy({fragment:d},{get(x,C){if(x[C]===void 0)x[C]=(...c)=>h(`${C}|${l}`,...c);return x[C]},set(){throw new Error("You may not add new properties to elements")}}),z=new Proxy({fragment:d},{get(x,C){if(x[C]===void 0)x[C]=(...c)=>h(`${C}|${o}`,...c);return x[C]},set(){throw new Error("You may not add new properties to elements")}})});nn("kCu8Y",function(n,t){D(n.exports,"bind",()=>h),D(n.exports,"on",()=>m);var e=A("eppu5"),i=A("5lOGz"),a=A("5hOlm");let{document:s,MutationObserver:o}=globalThis,l=(z,x)=>{let C=a.elementToBindings.get(z);if(C==null)return;for(let c of C){let{binding:g,options:f}=c,{path:u}=c,{toDOM:b}=g;if(b!=null){if(u.startsWith("^")){let v=a.getListItem(z);if(v!=null&&v[a.XIN_PATH]!=null)u=c.path=`${v[a.XIN_PATH]}${u.substring(1)}`;else throw console.error(`Cannot resolve relative binding ${u}`,z,"is not part of a list"),new Error(`Cannot resolve relative binding ${u}`)}if(x==null||u.startsWith(x))b(z,e.xin[u],f)}}};if(o!=null)new o((x)=>{x.forEach((C)=>{[...C.addedNodes].forEach((c)=>{if(c instanceof Element)[...c.querySelectorAll(a.BOUND_SELECTOR)].forEach((g)=>l(g))})})}).observe(s.body,{subtree:!0,childList:!0});e.observe(()=>!0,(z)=>{let x=s.querySelectorAll(a.BOUND_SELECTOR);for(let C of x)l(C,z)});let r=(z)=>{let x=z.target.closest(a.BOUND_SELECTOR);while(x!=null){let C=a.elementToBindings.get(x);for(let c of C){let{binding:g,path:f}=c,{fromDOM:u}=g;if(u!=null){let b;try{b=u(x,c.options)}catch(v){throw console.error("Cannot get value from",x,"via",c),new Error("Cannot obtain value fromDOM")}if(b!=null){let v=e.xin[f];if(v==null)e.xin[f]=b;else{let y=v[a.XIN_PATH]!=null?v[a.XIN_VALUE]:v,S=b[a.XIN_PATH]!=null?b[a.XIN_VALUE]:b;if(y!==S)e.xin[f]=S}}}}x=x.parentElement.closest(a.BOUND_SELECTOR)}};if(globalThis.document!=null)s.body.addEventListener("change",r,!0),s.body.addEventListener("input",r,!0);function h(z,x,C,c){if(z instanceof DocumentFragment)throw new Error("bind cannot bind to a DocumentFragment");let g;if(typeof x==="object"&&x[a.XIN_PATH]===void 0&&c===void 0){let{value:b}=x;g=typeof b==="string"?b:b[a.XIN_PATH],c=x,delete c.value}else g=typeof x==="string"?x:x[a.XIN_PATH];if(g==null)throw new Error("bind requires a path or object with xin Proxy");let{toDOM:f}=C;z.classList?.add(a.BOUND_CLASS);let u=a.elementToBindings.get(z);if(u==null)u=[],a.elementToBindings.set(z,u);if(u.push({path:g,binding:C,options:c}),f!=null&&!g.startsWith("^"))i.touch(g);return z}let d=new Set,p=(z)=>{let x=z?.target.closest(a.EVENT_SELECTOR),C=!1,c=new Proxy(z,{get(g,f){if(f==="stopPropagation")return()=>{z.stopPropagation(),C=!0};else{let u=g[f];return typeof u==="function"?u.bind(g):u}}});while(!C&&x!=null){let f=a.elementToHandlers.get(x)[z.type]||[];for(let u of f){if(typeof u==="function")u(c);else{let b=e.xin[u];if(typeof b==="function")b(c);else throw new Error(`no event handler found at path ${u}`)}if(C)continue}x=x.parentElement!=null?x.parentElement.closest(a.EVENT_SELECTOR):null}},m=(z,x,C)=>{let c=a.elementToHandlers.get(z);if(z.classList.add(a.EVENT_CLASS),c==null)c={},a.elementToHandlers.set(z,c);if(!c[x])c[x]=[];if(!c[x].includes(C))c[x].push(C);if(!d.has(x))d.add(x),s.body.addEventListener(x,p,!0)}});nn("eppu5",function(n,t){D(n.exports,"xin",()=>c),D(n.exports,"observe",()=>C),D(n.exports,"boxed",()=>g),D(n.exports,"updates",()=>A("5lOGz").updates),D(n.exports,"touch",()=>A("5lOGz").touch),D(n.exports,"unobserve",()=>A("5lOGz").unobserve),D(n.exports,"observerShouldBeRemoved",()=>A("5lOGz").observerShouldBeRemoved);var e=A("hv4Z8"),i=A("5lOGz"),a=A("aMI8M"),s=A("5hOlm");let o=["sort","splice","copyWithin","fill","pop","push","reverse","shift","unshift"],l={},r=!0,h=/^\.?([^.[\](),])+(\.[^.[\](),]+|\[\d+\]|\[[^=[\](),]*=[^[\]()]+\])*$/,d=(f)=>h.test(f),p=(f="",u="")=>{if(f==="")return u;else if(u.match(/^\d+$/)!==null||u.includes("="))return`${f}[${u}]`;else return`${f}.${u}`},m={string(f){return new String(f)},boolean(f){return new Boolean(f)},bigint(f){return f},symbol(f){return f},number(f){return new Number(f)}};function z(f,u){let b=typeof f;if(f===void 0||b==="object"||b==="function")return f;else return new Proxy(m[typeof f](f),x(u,!0))}let x=(f,u)=>({get(b,v){switch(v){case s.XIN_PATH:return f;case s.XIN_VALUE:return s.xinValue(b)}if(typeof v==="symbol")return b[v];let y=v,S=y.match(/^([^.[]+)\.(.+)$/)??y.match(/^([^\]]+)(\[.+)/)??y.match(/^(\[[^\]]+\])\.(.+)$/)??y.match(/^(\[[^\]]+\])\[(.+)$/);if(S!==null){let[,M,j]=S,N=p(f,M),V=a.getByPath(b,M);return V!==null&&typeof V==="object"?new Proxy(V,x(N,u))[j]:V}if(y.startsWith("[")&&y.endsWith("]"))y=y.substring(1,y.length-1);if(!Array.isArray(b)&&b[y]!==void 0||Array.isArray(b)&&y.includes("=")){let M;if(y.includes("=")){let[j,N]=y.split("=");M=b.find((V)=>`${a.getByPath(V,j)}`===N)}else M=b[y];if(M!==null&&typeof M==="object"){let j=p(f,y);return new Proxy(M,x(j,u))}else if(typeof M==="function")return M.bind(b);else return u?z(M,p(f,y)):M}else if(Array.isArray(b)){let M=b[y];return typeof M==="function"?(...j)=>{let N=Array.prototype[y].apply(b,j);if(o.includes(y))i.touch(f);return N}:typeof M==="object"?new Proxy(M,x(p(f,y),u)):u?z(M,p(f,y)):M}else return u?z(b[y],p(f,y)):b[y]},set(b,v,y){y=s.xinValue(y);let S=v!==s.XIN_VALUE?p(f,v):f;if(r&&!d(S))throw new Error(`setting invalid path ${S}`);if(s.xinValue(c[S])!==y&&a.setByPath(l,S,y))i.touch(S);return!0}}),C=(f,u)=>{let b=typeof u==="function"?u:c[u];if(typeof b!=="function")throw new Error(`observe expects a function or path to a function, ${u} is neither`);return i.observe(f,b)},c=new Proxy(l,x("",!1)),g=new Proxy(l,x("",!0))});nn("hv4Z8",function(n,t){D(n.exports,"settings",()=>e);let e={debug:!1,perf:!1}});nn("5lOGz",function(n,t){D(n.exports,"observerShouldBeRemoved",()=>a),D(n.exports,"updates",()=>p),D(n.exports,"unobserve",()=>C),D(n.exports,"touch",()=>z),D(n.exports,"observe",()=>x);var e=A("5hOlm"),i=A("hv4Z8");let a=Symbol("observer should be removed"),s=[],o=[],l=!1,r,h;class d{constructor(c,g){let f=typeof g==="string"?`"${g}"`:`function ${g.name}`,u;if(typeof c==="string")this.test=(b)=>typeof b==="string"&&b!==""&&(c.startsWith(b)||b.startsWith(c)),u=`test = "${c}"`;else if(c instanceof RegExp)this.test=c.test.bind(c),u=`test = "${c.toString()}"`;else if(c instanceof Function)this.test=c,u=`test = function ${c.name}`;else throw new Error("expect listener test to be a string, RegExp, or test function");if(this.description=`${u}, ${f}`,typeof g==="function")this.callback=g;else throw new Error("expect callback to be a path or function");s.push(this)}}let p=async()=>{if(r===void 0)return;await r},m=()=>{if(i.settings.perf)console.time("xin async update");let c=[...o];for(let g of c)s.filter((f)=>{let u;try{u=f.test(g)}catch(b){throw new Error(`Listener ${f.description} threw "${b}" at "${g}"`)}if(u===a)return C(f),!1;return u}).forEach((f)=>{let u;try{u=f.callback(g)}catch(b){console.error(`Listener ${f.description} threw "${b}" handling "${g}"`)}if(u===a)C(f)});if(o.splice(0),l=!1,typeof h==="function")h();if(i.settings.perf)console.timeEnd("xin async update")},z=(c)=>{let g=typeof c==="string"?c:e.xinPath(c);if(g===void 0)throw console.error("touch was called on an invalid target",c),new Error("touch was called on an invalid target");if(l===!1)r=new Promise((f)=>{h=f}),l=setTimeout(m);if(o.find((f)=>g.startsWith(f))==null)o.push(g)},x=(c,g)=>{return new d(c,g)},C=(c)=>{let g=s.indexOf(c);if(g>-1)s.splice(g,1);else throw new Error("unobserve failed, listener not found")}});nn("5hOlm",function(n,t){D(n.exports,"BOUND_CLASS",()=>i),D(n.exports,"BOUND_SELECTOR",()=>a),D(n.exports,"EVENT_CLASS",()=>s),D(n.exports,"EVENT_SELECTOR",()=>o),D(n.exports,"XIN_PATH",()=>l),D(n.exports,"XIN_VALUE",()=>r),D(n.exports,"xinPath",()=>h),D(n.exports,"xinValue",()=>d),D(n.exports,"elementToHandlers",()=>p),D(n.exports,"elementToBindings",()=>m),D(n.exports,"cloneWithBindings",()=>x),D(n.exports,"elementToItem",()=>C),D(n.exports,"getListItem",()=>c);var e=A("19FSF");let i="-xin-data",a=`.${i}`,s="-xin-event",o=`.${s}`,l="xinPath",r="xinValue",h=(g)=>{return g[l]};function d(g){return typeof g==="object"&&g!==null?g[r]||g:g}let p=new WeakMap,m=new WeakMap,z=(g)=>{return{eventBindings:p.get(g),dataBindings:m.get(g)}},x=(g)=>{let f=g.cloneNode();if(f instanceof Element){let u=m.get(g),b=p.get(g);if(u!=null)m.set(f,e.deepClone(u));if(b!=null)p.set(f,e.deepClone(b))}for(let u of g instanceof HTMLTemplateElement?g.content.childNodes:g.childNodes)if(u instanceof Element||u instanceof DocumentFragment)f.appendChild(x(u));else f.appendChild(u.cloneNode());return f},C=new WeakMap,c=(g)=>{let f=document.body.parentElement;while(g.parentElement!=null&&g.parentElement!==f){let u=C.get(g);if(u!=null)return u;g=g.parentElement}return!1}});nn("19FSF",function(n,t){D(n.exports,"deepClone",()=>e);function e(i){if(i==null||typeof i!=="object")return i;if(Array.isArray(i))return i.map(e);let a={};for(let s in i){let o=i[s];if(i!=null&&typeof i==="object")a[s]=e(o);else a[s]=o}return a}});nn("aMI8M",function(n,t){D(n.exports,"getByPath",()=>f),D(n.exports,"setByPath",()=>u);var e=A("5lDHe");let i=()=>new Date(parseInt("1000000000",36)+Date.now()).valueOf().toString(36).slice(1),a=0,s=()=>(parseInt("10000",36)+ ++a).toString(36).slice(-5),o=()=>i()+s(),l={},r={};function h(v){if(v==="")return[];if(Array.isArray(v))return v;else{let y=[];while(v.length>0){let S=v.search(/\[[^\]]+\]/);if(S===-1){y.push(v.split("."));break}else{let M=v.slice(0,S);if(v=v.slice(S),M!=="")y.push(M.split("."));if(S=v.indexOf("]")+1,y.push(v.slice(1,S-1)),v.slice(S,S+1)===".")S+=1;v=v.slice(S)}}return y}}let d=new WeakMap;function p(v,y){if(d.get(v)===void 0)d.set(v,{});if(d.get(v)[y]===void 0)d.get(v)[y]={};let S=d.get(v)[y];if(y==="_auto_")v.forEach((M,j)=>{if(M._auto_===void 0)M._auto_=o();S[M._auto_+""]=j});else v.forEach((M,j)=>{S[f(M,y)+""]=j});return S}function m(v,y){if(d.get(v)===void 0||d.get(v)[y]===void 0)return p(v,y);else return d.get(v)[y]}function z(v,y,S){S=S+"";let M=m(v,y)[S];if(M===void 0||f(v[M],y)+""!==S)M=p(v,y)[S];return M}function x(v,y,S){if(v[y]===void 0&&S!==void 0)v[y]=S;return v[y]}function C(v,y,S,M){let j=y!==""?z(v,y,S):S;if(M===l)return v.splice(j,1),d.delete(v),Symbol("deleted");else if(M===r){if(y===""&&v[j]===void 0)v[j]={}}else if(M!==void 0)if(j!==void 0)v[j]=M;else if(y!==""&&f(M,y)+""===S+"")v.push(M),j=v.length-1;else throw new Error(`byIdPath insert failed at [${y}=${S}]`);return v[j]}function c(v){if(!Array.isArray(v))throw e.makeError("setByPath failed: expected array, found",v)}function g(v){if(v==null||!(v instanceof Object))throw e.makeError("setByPath failed: expected Object, found",v)}function f(v,y){let S=h(y),M=v,j,N,V,Q;for(j=0,N=S.length;M!==void 0&&j<N;j++){let W=S[j];if(Array.isArray(W))for(V=0,Q=W.length;M!==void 0&&V<Q;V++){let Z=W[V];M=M[Z]}else if(M.length===0){if(M=M[W.slice(1)],W[0]!=="=")return}else if(W.includes("=")){let[Z,...k]=W.split("=");M=C(M,Z,k.join("="))}else V=parseInt(W,10),M=M[V]}return M}function u(v,y,S){let M=v,j=h(y);while(M!=null&&j.length>0){let N=j.shift();if(typeof N==="string"){let V=N.indexOf("=");if(V>-1){if(V===0)g(M);else c(M);let Q=N.slice(0,V),W=N.slice(V+1);if(M=C(M,Q,W,j.length>0?r:S),j.length===0)return!0}else{c(M);let Q=parseInt(N,10);if(j.length>0)M=M[Q];else{if(S!==l){if(M[Q]===S)return!1;M[Q]=S}else M.splice(Q,1);return!0}}}else if(Array.isArray(N)&&N.length>0){g(M);while(N.length>0){let V=N.shift();if(N.length>0||j.length>0)M=x(M,V,N.length>0?{}:[]);else{if(S!==l){if(M[V]===S)return!1;M[V]=S}else{if(!Object.prototype.hasOwnProperty.call(M,V))return!1;delete M[V]}return!0}}}else throw new Error(`setByPath failed, bad path ${y}`)}throw new Error(`setByPath(${v}, ${y}, ${S}) failed`)}function b(v,y){if(f(v,y)!==null)u(v,y,l)}});nn("5lDHe",function(n,t){D(n.exports,"makeError",()=>i);let e=(a)=>{try{return JSON.stringify(a)}catch(s){return"{has circular references}"}},i=(...a)=>new Error(a.map(e).join(" "))});nn("buKmK",function(n,t){D(n.exports,"bindings",()=>a);var e=A("2dgdI"),i=A("gbrAN");let a={value:{toDOM:i.setValue,fromDOM(s){return i.getValue(s)}},set:{toDOM:i.setValue},text:{toDOM(s,o){s.textContent=o}},enabled:{toDOM(s,o){s.disabled=!o}},disabled:{toDOM(s,o){s.disabled=Boolean(o)}},style:{toDOM(s,o){if(typeof o==="object")for(let l of Object.keys(o))s.style[l]=o[l];else if(typeof o==="string")s.setAttribute("style",o);else throw new Error("style binding expects either a string or object")}},list:{toDOM(s,o,l){e.getListBinding(s,l).update(o)}}}});nn("2dgdI",function(n,t){D(n.exports,"getListBinding",()=>p);var e=A("hv4Z8"),i=A("gbrAN"),a=A("9nL7f"),s=A("eppu5"),o=A("5hOlm");let l=Symbol("list-binding"),r=16;function h(m,z){let x=[...m.querySelectorAll(o.BOUND_SELECTOR)];if(m.matches(o.BOUND_SELECTOR))x.unshift(m);for(let C of x){let c=o.elementToBindings.get(C);for(let g of c){if(g.path.startsWith("^"))g.path=`${z}${g.path.substring(1)}`;if(g.binding.toDOM!=null)g.binding.toDOM(C,s.xin[g.path])}}}class d{constructor(m,z={}){if(this._array=[],this.boundElement=m,this.itemToElement=new WeakMap,m.children.length!==1)throw new Error("ListBinding expects an element with exactly one child element");if(m.children[0]instanceof HTMLTemplateElement){let x=m.children[0];if(x.content.children.length!==1)throw new Error("ListBinding expects a template with exactly one child element");this.template=o.cloneWithBindings(x.content.children[0])}else this.template=m.children[0],this.template.remove();if(this.listTop=document.createElement("div"),this.listBottom=document.createElement("div"),this.boundElement.append(this.listTop),this.boundElement.append(this.listBottom),this.options=z,z.virtual!=null)i.resizeObserver.observe(this.boundElement),this._update=a.throttle(()=>{this.update(this._array,!0)},r),this.boundElement.addEventListener("scroll",this._update),this.boundElement.addEventListener("resize",this._update)}visibleSlice(){let{virtual:m,hiddenProp:z,visibleProp:x}=this.options,C=this._array;if(z!==void 0)C=C.filter((b)=>b[z]!==!0);if(x!==void 0)C=C.filter((b)=>b[x]===!0);let c=0,g=C.length-1,f=0,u=0;if(m!=null&&this.boundElement instanceof HTMLElement){let b=this.boundElement.offsetWidth,v=this.boundElement.offsetHeight,y=m.width!=null?Math.max(1,Math.floor(b/m.width)):1,S=Math.ceil(v/m.height)+1,M=Math.ceil(C.length/y),j=y*S,N=Math.floor(this.boundElement.scrollTop/m.height);if(N>M-S+1)N=Math.max(0,M-S+1);c=N*y,g=c+j-1,f=N*m.height,u=Math.max(M*m.height-v-f,0)}return{items:C,firstItem:c,lastItem:g,topBuffer:f,bottomBuffer:u}}update(m,z){if(m==null)m=[];this._array=m;let{hiddenProp:x,visibleProp:C}=this.options,c=o.xinPath(m),g=this.visibleSlice();this.boundElement.classList.toggle("-xin-empty-list",g.items.length===0);let f=this._previousSlice,{firstItem:u,lastItem:b,topBuffer:v,bottomBuffer:y}=g;if(x===void 0&&C===void 0&&z===!0&&f!=null&&u===f.firstItem&&b===f.lastItem)return;this._previousSlice=g;let S=0,M=0,j=0;for(let W of[...this.boundElement.children]){if(W===this.listTop||W===this.listBottom)continue;let Z=o.elementToItem.get(W);if(Z==null)W.remove();else{let k=g.items.indexOf(Z);if(k<u||k>b)W.remove(),this.itemToElement.delete(Z),o.elementToItem.delete(W),S++}}this.listTop.style.height=String(v)+"px",this.listBottom.style.height=String(y)+"px";let N=[],{idPath:V}=this.options;for(let W=u;W<=b;W++){let Z=g.items[W];if(Z===void 0)continue;let k=this.itemToElement.get(o.xinValue(Z));if(k==null){if(j++,k=o.cloneWithBindings(this.template),typeof Z==="object")this.itemToElement.set(o.xinValue(Z),k),o.elementToItem.set(k,o.xinValue(Z));if(this.boundElement.insertBefore(k,this.listBottom),V!=null){let Fn=Z[V],zt=`${c}[${V}=${Fn}]`;h(k,zt)}else{let Fn=`${c}[${W}]`;h(k,Fn)}}N.push(k)}let Q=null;for(let W of N){if(W.previousElementSibling!==Q)if(M++,Q?.nextElementSibling!=null)this.boundElement.insertBefore(W,Q.nextElementSibling);else this.boundElement.insertBefore(W,this.listBottom);Q=W}if(e.settings.perf)console.log(c,"updated",{removed:S,created:j,moved:M})}}let p=(m,z)=>{let x=m[l];if(x===void 0)x=new d(m,z),m[l]=x;return x}});nn("gbrAN",function(n,t){D(n.exports,"dispatch",()=>i),D(n.exports,"setValue",()=>s),D(n.exports,"getValue",()=>o),D(n.exports,"resizeObserver",()=>r),D(n.exports,"appendContentToElement",()=>h);var e=A("5hOlm");let i=(d,p)=>{let m=new Event(p);d.dispatchEvent(m)},a=(d)=>{if(d instanceof HTMLInputElement)return d.type;else if(d instanceof HTMLSelectElement&&d.hasAttribute("multiple"))return"multi-select";else return"other"},s=(d,p)=>{switch(a(d)){case"radio":d.checked=d.value===p;break;case"checkbox":d.checked=!!p;break;case"date":d.valueAsDate=new Date(p);break;case"multi-select":for(let m of[...d.querySelectorAll("option")])m.selected=p[m.value];break;default:d.value=p}},o=(d)=>{switch(a(d)){case"radio":{let p=d.parentElement?.querySelector(`[name="${d.name}"]:checked`);return p!=null?p.value:null}case"checkbox":return d.checked;case"date":return d.valueAsDate?.toISOString();case"multi-select":return[...d.querySelectorAll("option")].reduce((p,m)=>{return p[m.value]=m.selected,p},{});default:return d.value}},{ResizeObserver:l}=globalThis,r=l!=null?new l((d)=>{for(let p of d){let m=p.target;i(m,"resize")}}):{observe(){},unobserve(){}},h=(d,p,m=!0)=>{if(d!=null&&p!=null)if(typeof p==="string")d.textContent=p;else if(Array.isArray(p))p.forEach((z)=>{d.append(z instanceof Node&&m?e.cloneWithBindings(z):z)});else if(p instanceof Node)d.append(m?e.cloneWithBindings(p):p);else throw new Error("expect text content or document node")}});nn("9nL7f",function(n,t){D(n.exports,"debounce",()=>e),D(n.exports,"throttle",()=>i);let e=(a,s=250)=>{let o;return(...l)=>{if(o!==void 0)clearTimeout(o);o=setTimeout(()=>{a(...l)},s)}},i=(a,s=250)=>{let o,l=Date.now()-s,r=!1;return(...h)=>{if(clearTimeout(o),o=setTimeout(async()=>{a(...h),l=Date.now()},s),!r&&Date.now()-l>=s){r=!0;try{a(...h),l=Date.now()}finally{r=!1}}}}});nn("5JLBr",function(n,t){D(n.exports,"camelToKabob",()=>e),D(n.exports,"kabobToCamel",()=>i);function e(a){return a.replace(/[A-Z]/g,(s)=>{return`-${s.toLocaleLowerCase()}`})}function i(a){return a.replace(/-([a-z])/g,(s,o)=>{return o.toLocaleUpperCase()})}});nn("lGBgM",function(n,t){D(n.exports,"makeComponent",()=>r);var e=A("6Jaab"),i=A("aVpVG"),a=A("2okor"),s=A("9sLMf"),o=A("aNHSH");let l={};function r(h,d){let{type:p,styleSpec:m}=d(h,{Color:e.Color,Component:i.Component,elements:s.elements,svgElements:s.svgElements,mathML:s.mathML,varDefault:a.varDefault,vars:a.vars,xinProxy:o.xinProxy}),z={type:p,creator:p.elementCreator({tag:h,styleSpec:m})};return l[h]=z,z}});nn("aNHSH",function(n,t){D(n.exports,"boxedProxy",()=>i),D(n.exports,"xinProxy",()=>s);var e=A("eppu5");function i(o){return Object.assign(e.boxed,o),e.boxed}let a=!1;function s(o,l=!1){if(l){if(!a)console.warn("xinProxy(..., true) is deprecated; use boxedProxy(...) instead"),a=!0;return i(o)}return Object.keys(o).forEach((r)=>{e.xin[r]=o[r]}),e.xin}});var zl=A("kCu8Y"),Sl=A("buKmK"),Cl=A("2okor"),Tl=A("6Jaab"),Al=A("aVpVG"),El=A("9sLMf"),Zn=A("eppu5"),Ii=A("5hOlm"),Di=A("9nL7f"),bs=(n=()=>!0)=>{let t=localStorage.getItem("xin-state");if(t!=null){let i=JSON.parse(t);for(let a of Object.keys(i).filter(n))if(Zn.xin[a]!==void 0)Object.assign(Zn.xin[a],i[a]);else Zn.xin[a]=i[a]}let e=Di.debounce(()=>{let i={},a=Ii.xinValue(Zn.xin);for(let s of Object.keys(a).filter(n))i[s]=a[s];localStorage.setItem("xin-state",JSON.stringify(i)),console.log("xin state saved to localStorage")},500);Zn.observe(n,e)},Ii=A("5hOlm"),jl=A("lGBgM"),Ol=A("drWRQ"),Ll=A("hv4Z8"),Di=A("9nL7f"),Zn=A("eppu5"),Fl=A("5lOGz");A("3x0mh");var Il={},Dl=A("aNHSH"),vs=A("kCu8Y").bind,ys=A("kCu8Y").on,In=A("buKmK").bindings,xs=A("2okor").css,ws=A("2okor").invertLuminance,Ms=A("2okor").darkMode,zs=A("2okor").initVars,w=A("2okor").vars,q=A("2okor").varDefault,de=A("2okor").StyleSheet,gn=A("6Jaab").Color,_=A("aVpVG").Component,$=A("9sLMf").elements,qe=A("9sLMf").svgElements,Ss=A("9sLMf").mathML,ue=A("5hOlm").getListItem,Cs=A("5hOlm").xinPath,Dn=A("5hOlm").xinValue,Ts=A("lGBgM").makeComponent,As=A("drWRQ").MoreMath,Es=A("hv4Z8").settings,Tt=A("9nL7f").throttle,js=A("9nL7f").debounce,Xn=A("eppu5").xin,Os=A("eppu5").boxed,Ls=A("eppu5").observe,Fs=A("5lOGz").unobserve,At=A("5lOGz").touch,Is=A("5lOGz").observerShouldBeRemoved,Ds=A("5lOGz").updates,qn=A("aNHSH").xinProxy,Et=A("aNHSH").boxedProxy,qs=A("3x0mh").Blueprint,Hs=A("3x0mh").blueprint,_s=A("3x0mh").BlueprintLoader,$s=A("3x0mh").blueprintLoader,Ps=A("3x0mh")["*"];var Ns=Object.defineProperty,Vs=(n,t)=>{for(var e in t)Ns(n,e,{get:t[e],enumerable:!0,configurable:!0,set:(i)=>t[e]=()=>i})};function H(n,t,e,i){Object.defineProperty(n,t,{get:e,set:i,enumerable:!0,configurable:!0})}var r1=globalThis,Ot={},He={},E=r1.parcelRequire94c2;if(E==null)E=function(n){if(n in Ot)return Ot[n].exports;if(n in He){var t=He[n];delete He[n];var e={id:n,exports:{}};return Ot[n]=e,t.call(e.exports,e,e.exports),e.exports}var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i},E.register=function n(t,e){He[t]=e},r1.parcelRequire94c2=E;var en=E.register;en("3x0mh",function(module,exports){H(module.exports,"Blueprint",()=>Blueprint),H(module.exports,"blueprint",()=>blueprint),H(module.exports,"BlueprintLoader",()=>BlueprintLoader),H(module.exports,"blueprintLoader",()=>blueprintLoader);var $aVpVG=E("aVpVG"),$lGBgM=E("lGBgM");class Blueprint extends $aVpVG.Component{async packaged(){if(!this.loaded){let{tag,src}=this,imported=await eval(`import('${src}')`),blueprint=imported[this.property];this.loaded=$lGBgM.makeComponent(tag,blueprint)}return this.loaded}constructor(){super(),this.tag="anon-elt",this.src="",this.property="default",this.initAttributes("tag","src","property")}}let blueprint=Blueprint.elementCreator({tag:"xin-blueprint",styleSpec:{":host":{display:"none"}}});class BlueprintLoader extends $aVpVG.Component{constructor(){super()}async load(){let t=[...this.querySelectorAll(Blueprint.tagName)].filter((e)=>e.src).map((e)=>e.packaged());await Promise.all(t)}connectedCallback(){super.connectedCallback(),this.load()}}let blueprintLoader=BlueprintLoader.elementCreator({tag:"xin-loader",styleSpec:{":host":{display:"none"}}})});en("aVpVG",function(n,t){H(n.exports,"Component",()=>z);var e=E("2okor"),i=E("19FSF"),a=E("gbrAN"),s=E("9sLMf"),o=E("5JLBr");let l=0;function r(){return`custom-elt${(l++).toString(36)}`}let h=0,d={};function p(c,g){let f=d[c],u=e.css(g).replace(/:host\b/g,c);d[c]=f?f+`
`+u:u}function m(c){if(d[c])document.head.append(s.elements.style({id:c+"-component"},d[c]));delete d[c]}class z extends HTMLElement{static{this.elements=s.elements}static{this._tagName=null}static get tagName(){return this._tagName}static StyleNode(c){return console.warn("StyleNode is deprecated, just assign static styleSpec: XinStyleSheet to the class directly"),s.elements.style(e.css(c))}static elementCreator(c={}){if(this._elementCreator==null){let{tag:g,styleSpec:f}=c,u=c!=null?g:null;if(u==null)if(typeof this.name==="string"&&this.name!==""){if(u=o.camelToKabob(this.name),u.startsWith("-"))u=u.slice(1)}else u=r();if(customElements.get(u)!=null)console.warn(`${u} is already defined`);if(u.match(/\w+(-\w+)+/)==null)console.warn(`${u} is not a legal tag for a custom-element`),u=r();while(customElements.get(u)!==void 0)u=r();if(this._tagName=u,f!==void 0)p(u,f);window.customElements.define(u,this,c),this._elementCreator=s.elements[u]}return this._elementCreator}initAttributes(...c){let g={},f={};new MutationObserver((b)=>{let v=!1;if(b.forEach((y)=>{v=!!(y.attributeName&&c.includes(o.kabobToCamel(y.attributeName)))}),v&&this.queueRender!==void 0)this.queueRender(!1)}).observe(this,{attributes:!0}),c.forEach((b)=>{g[b]=i.deepClone(this[b]);let v=o.camelToKabob(b);Object.defineProperty(this,b,{enumerable:!1,get(){if(typeof g[b]==="boolean")return this.hasAttribute(v);else if(this.hasAttribute(v))return typeof g[b]==="number"?parseFloat(this.getAttribute(v)):this.getAttribute(v);else if(f[b]!==void 0)return f[b];else return g[b]},set(y){if(typeof g[b]==="boolean"){if(y!==this[b]){if(y)this.setAttribute(v,"");else this.removeAttribute(v);this.queueRender()}}else if(typeof g[b]==="number"){if(y!==parseFloat(this[b]))this.setAttribute(v,y),this.queueRender()}else if(typeof y==="object"||`${y}`!==`${this[b]}`){if(y===null||y===void 0||typeof y==="object")this.removeAttribute(v);else this.setAttribute(v,y);this.queueRender(),f[b]=y}}})})}initValue(){let c=Object.getOwnPropertyDescriptor(this,"value");if(c===void 0||c.get!==void 0||c.set!==void 0)return;let g=this.hasAttribute("value")?this.getAttribute("value"):i.deepClone(this.value);delete this.value,Object.defineProperty(this,"value",{enumerable:!1,get(){return g},set(f){if(g!==f)g=f,this.queueRender(!0)}})}get parts(){let c=this.shadowRoot!=null?this.shadowRoot:this;if(this._parts==null)this._parts=new Proxy({},{get(g,f){if(g[f]===void 0){let u=c.querySelector(`[part="${f}"]`);if(u==null)u=c.querySelector(f);if(u==null)throw new Error(`elementRef "${f}" does not exist!`);u.removeAttribute("data-ref"),g[f]=u}return g[f]}});return this._parts}constructor(){super(),this.content=s.elements.slot(),this._changeQueued=!1,this._renderQueued=!1,this._hydrated=!1,h+=1,this.initAttributes("hidden"),this.instanceId=`${this.tagName.toLocaleLowerCase()}-${h}`,this._value=i.deepClone(this.defaultValue)}connectedCallback(){if(m(this.constructor.tagName),this.hydrate(),this.role!=null)this.setAttribute("role",this.role);if(this.onResize!==void 0){if(a.resizeObserver.observe(this),this._onResize==null)this._onResize=this.onResize.bind(this);this.addEventListener("resize",this._onResize)}if(this.value!=null&&this.getAttribute("value")!=null)this._value=this.getAttribute("value");this.queueRender()}disconnectedCallback(){a.resizeObserver.unobserve(this)}queueRender(c=!1){if(!this._hydrated)return;if(!this._changeQueued)this._changeQueued=c;if(!this._renderQueued)this._renderQueued=!0,requestAnimationFrame(()=>{if(this._changeQueued)a.dispatch(this,"change");this._changeQueued=!1,this._renderQueued=!1,this.render()})}hydrate(){if(!this._hydrated){this.initValue();let c=typeof this.content!=="function",g=typeof this.content==="function"?this.content():this.content,{styleSpec:f}=this.constructor,{styleNode:u}=this.constructor;if(f)u=this.constructor.styleNode=s.elements.style(e.css(f)),delete this.constructor.styleNode;if(this.styleNode)console.warn(this,"styleNode is deprecrated, use static styleNode or statc styleSpec instead"),u=this.styleNode;if(u){let b=this.attachShadow({mode:"open"});b.appendChild(u.cloneNode(!0)),a.appendContentToElement(b,g,c)}else if(g!==null){let b=[...this.childNodes];a.appendContentToElement(this,g,c),this.isSlotted=this.querySelector("slot,xin-slot")!==void 0;let v=[...this.querySelectorAll("slot")];if(v.length>0)v.forEach(x.replaceSlot);if(b.length>0){let y={"":this};[...this.querySelectorAll("xin-slot")].forEach((S)=>{y[S.name]=S}),b.forEach((S)=>{let M=y[""],j=S instanceof Element?y[S.slot]:M;(j!==void 0?j:M).append(S)})}}this._hydrated=!0}}render(){}}class x extends z{static replaceSlot(c){let g=document.createElement("xin-slot");if(c.name!=="")g.setAttribute("name",c.name);c.replaceWith(g)}constructor(){super(),this.name="",this.content=null,this.initAttributes("name")}}let C=x.elementCreator({tag:"xin-slot"})});en("2okor",function(n,t){H(n.exports,"StyleSheet",()=>s),H(n.exports,"css",()=>d),H(n.exports,"processProp",()=>l),H(n.exports,"initVars",()=>p),H(n.exports,"darkMode",()=>m),H(n.exports,"invertLuminance",()=>z),H(n.exports,"vars",()=>x),H(n.exports,"varDefault",()=>C);var e=E("6Jaab"),i=E("9sLMf"),a=E("5JLBr");function s(c,g){let f=i.elements.style(d(g));f.id=c,document.head.append(f)}let o=["animation-iteration-count","flex","flex-base","flex-grow","flex-shrink","opacity","order","tab-size","widows","z-index","zoom"],l=(c,g)=>{if(typeof g==="number"&&!o.includes(c))g=`${g}px`;if(c.startsWith("_"))if(c.startsWith("__"))c="--"+c.substring(2),g=`var(${c}-default, ${g})`;else c="--"+c.substring(1);return{prop:c,value:String(g)}},r=(c,g,f)=>{if(f===void 0)return"";if(f instanceof e.Color)f=f.html;let u=l(g,f);return`${c}  ${u.prop}: ${u.value};`},h=(c,g,f="")=>{let u=a.camelToKabob(c);if(typeof g==="object"&&!(g instanceof e.Color)){let b=Object.keys(g).map((v)=>h(v,g[v],`${f}  `)).join(`
`);return`${f}  ${c} {
${b}
${f}  }`}else return r(f,u,g)},d=(c,g="")=>{return Object.keys(c).map((u)=>{let b=c[u];if(typeof b==="string"){if(u==="@import")return`@import url('${b}');`;throw new Error("top-level string value only allowed for `@import`")}let v=Object.keys(b).map((y)=>h(y,b[y])).join(`
`);return`${g}${u} {
${v}
}`}).join(`

`)},p=(c)=>{console.warn("initVars is deprecated. Just use _ and __ prefixes instead.");let g={};for(let f of Object.keys(c)){let u=c[f],b=a.camelToKabob(f);g[`--${b}`]=typeof u==="number"&&u!==0?String(u)+"px":u}return g},m=(c)=>{console.warn("darkMode is deprecated. Use inverseLuminance instead.");let g={};for(let f of Object.keys(c)){let u=c[f];if(typeof u==="string"&&u.match(/^(#|rgb[a]?\(|hsl[a]?\()/)!=null)u=e.Color.fromCss(u).inverseLuminance.html,g[`--${a.camelToKabob(f)}`]=u}return g},z=(c)=>{let g={};for(let f of Object.keys(c)){let u=c[f];if(u instanceof e.Color)g[f]=u.inverseLuminance;else if(typeof u==="string"&&u.match(/^(#[0-9a-fA-F]{3}|rgba?\(|hsla?\()/))g[f]=e.Color.fromCss(u).inverseLuminance}return g},x=new Proxy({},{get(c,g){if(c[g]==null){g=g.replace(/[A-Z]/g,(S)=>`-${S.toLocaleLowerCase()}`);let[,f,,u,b,v]=g.match(/^([^\d_]*)((_)?(\d+)(\w*))?$/),y=`--${f}`;if(b!=null){let S=u==null?Number(b)/100:-Number(b)/100;switch(v){case"b":{let M=getComputedStyle(document.body).getPropertyValue(y);c[g]=S>0?e.Color.fromCss(M).brighten(S).rgba:e.Color.fromCss(M).darken(-S).rgba}break;case"s":{let M=getComputedStyle(document.body).getPropertyValue(y);c[g]=S>0?e.Color.fromCss(M).saturate(S).rgba:e.Color.fromCss(M).desaturate(-S).rgba}break;case"h":{let M=getComputedStyle(document.body).getPropertyValue(y);c[g]=e.Color.fromCss(M).rotate(S*100).rgba,console.log(e.Color.fromCss(M).hsla,e.Color.fromCss(M).rotate(S).hsla)}break;case"o":{let M=getComputedStyle(document.body).getPropertyValue(y);c[g]=e.Color.fromCss(M).opacity(S).rgba}break;case"":c[g]=`calc(var(${y}) * ${S})`;break;default:throw console.error(v),new Error(`Unrecognized method ${v} for css variable ${y}`)}}else c[g]=`var(${y})`}return c[g]}}),C=new Proxy({},{get(c,g){if(c[g]===void 0){let f=`--${g.replace(/[A-Z]/g,(u)=>`-${u.toLocaleLowerCase()}`)}`;c[g]=(u)=>`var(${f}, ${u})`}return c[g]}})});en("6Jaab",function(n,t){H(n.exports,"Color",()=>l);var e=E("drWRQ");let i=(r,h,d)=>{return(0.299*r+0.587*h+0.114*d)/255},a=(r)=>("00"+Math.round(Number(r)).toString(16)).slice(-2);class s{constructor(r,h,d){r/=255,h/=255,d/=255;let p=Math.max(r,h,d),m=p-Math.min(r,h,d),z=m!==0?p===r?(h-d)/m:p===h?2+(d-r)/m:4+(r-h)/m:0;this.h=60*z<0?60*z+360:60*z,this.s=m!==0?p<=0.5?m/(2*p-m):m/(2-(2*p-m)):0,this.l=(2*p-m)/2}}let o=globalThis.document!==void 0?globalThis.document.createElement("span"):void 0;class l{static fromCss(r){let h=r;if(o instanceof HTMLSpanElement)o.style.color=r,document.body.appendChild(o),h=getComputedStyle(o).color,o.remove();let[d,p,m,z]=h.match(/[\d.]+/g);return new l(Number(d),Number(p),Number(m),z==null?1:Number(z))}static fromHsl(r,h,d,p=1){return l.fromCss(`hsla(${r.toFixed(0)}, ${(h*100).toFixed(0)}%, ${(d*100).toFixed(0)}%, ${p.toFixed(2)})`)}constructor(r,h,d,p=1){this.r=e.clamp(0,r,255),this.g=e.clamp(0,h,255),this.b=e.clamp(0,d,255),this.a=p!==void 0?e.clamp(0,p,1):p=1}get inverse(){return new l(255-this.r,255-this.g,255-this.b,this.a)}get inverseLuminance(){let{h:r,s:h,l:d}=this._hsl;return l.fromHsl(r,h,1-d,this.a)}get rgb(){let{r,g:h,b:d}=this;return`rgb(${r.toFixed(0)},${h.toFixed(0)},${d.toFixed(0)})`}get rgba(){let{r,g:h,b:d,a:p}=this;return`rgba(${r.toFixed(0)},${h.toFixed(0)},${d.toFixed(0)},${p.toFixed(2)})`}get RGBA(){return[this.r/255,this.g/255,this.b/255,this.a]}get ARGB(){return[this.a,this.r/255,this.g/255,this.b/255]}get _hsl(){if(this.hslCached==null)this.hslCached=new s(this.r,this.g,this.b);return this.hslCached}get hsl(){let{h:r,s:h,l:d}=this._hsl;return`hsl(${r.toFixed(0)}, ${(h*100).toFixed(0)}%, ${(d*100).toFixed(0)}%)`}get hsla(){let{h:r,s:h,l:d}=this._hsl;return`hsla(${r.toFixed(0)}, ${(h*100).toFixed(0)}%, ${(d*100).toFixed(0)}%, ${this.a.toFixed(2)})`}get mono(){let r=this.brightness*255;return new l(r,r,r)}get brightness(){return i(this.r,this.g,this.b)}get html(){return this.toString()}toString(){return this.a===1?"#"+a(this.r)+a(this.g)+a(this.b):"#"+a(this.r)+a(this.g)+a(this.b)+a(Math.floor(255*this.a))}brighten(r){let{h,s:d,l:p}=this._hsl,m=e.clamp(0,p+r*(1-p),1);return l.fromHsl(h,d,m,this.a)}darken(r){let{h,s:d,l:p}=this._hsl,m=e.clamp(0,p*(1-r),1);return l.fromHsl(h,d,m,this.a)}saturate(r){let{h,s:d,l:p}=this._hsl,m=e.clamp(0,d+r*(1-d),1);return l.fromHsl(h,m,p,this.a)}desaturate(r){let{h,s:d,l:p}=this._hsl,m=e.clamp(0,d*(1-r),1);return l.fromHsl(h,m,p,this.a)}rotate(r){let{h,s:d,l:p}=this._hsl,m=(h+360+r)%360;return l.fromHsl(m,d,p,this.a)}opacity(r){let{h,s:d,l:p}=this._hsl;return l.fromHsl(h,d,p,r)}swatch(){let{r,g:h,b:d,a:p}=this;return console.log(`%c      %c ${this.html}, rgba(${r}, ${h}, ${d}, ${p}), ${this.hsla}`,`background-color: rgba(${r}, ${h}, ${d}, ${p})`,"background-color: transparent"),this}blend(r,h){return new l(e.lerp(this.r,r.r,h),e.lerp(this.g,r.g,h),e.lerp(this.b,r.b,h),e.lerp(this.a,r.a,h))}mix(r,h){let d=this._hsl,p=r._hsl;return l.fromHsl(e.lerp(d.h,p.h,h),e.lerp(d.s,p.s,h),e.lerp(d.l,p.l,h),e.lerp(this.a,r.a,h))}}});en("drWRQ",function(n,t){H(n.exports,"clamp",()=>a),H(n.exports,"lerp",()=>s),H(n.exports,"MoreMath",()=>o);let e=180/Math.PI,i=Math.PI/180;function a(l,r,h){return r<l?l:r>h?h:r}function s(l,r,h){return h=a(0,h,1),h*(r-l)+l}let o={clamp:a,lerp:s}});en("9sLMf",function(n,t){H(n.exports,"elements",()=>p),H(n.exports,"svgElements",()=>m),H(n.exports,"mathML",()=>z);var e=E("kCu8Y"),i=E("buKmK"),a=E("5JLBr"),s=E("2okor");let o="http://www.w3.org/1998/Math/MathML",l="http://www.w3.org/2000/svg",r={},h=(x,...C)=>{if(r[x]===void 0){let[f,u]=x.split("|");if(u===void 0)r[x]=globalThis.document.createElement(f);else r[x]=globalThis.document.createElementNS(u,f)}let c=r[x].cloneNode(),g={};for(let f of C)if(f instanceof Element||f instanceof DocumentFragment||typeof f==="string"||typeof f==="number")if(c instanceof HTMLTemplateElement)c.content.append(f);else c.append(f);else Object.assign(g,f);for(let f of Object.keys(g)){let u=g[f];if(f==="apply")u(c);else if(f==="style")if(typeof u==="object")for(let b of Object.keys(u)){let v=s.processProp(a.camelToKabob(b),u[b]);if(v.prop.startsWith("--"))c.style.setProperty(v.prop,v.value);else c.style[b]=v.value}else c.setAttribute("style",u);else if(f.match(/^on[A-Z]/)!=null){let b=f.substring(2).toLowerCase();e.on(c,b,u)}else if(f==="bind")if((typeof u.binding==="string"?i.bindings[u.binding]:u.binding)!==void 0&&u.value!==void 0)e.bind(c,u.value,u.binding instanceof Function?{toDOM:u.binding}:u.binding);else throw new Error("bad binding");else if(f.match(/^bind[A-Z]/)!=null){let b=f.substring(4,5).toLowerCase()+f.substring(5),v=i.bindings[b];if(v!==void 0)e.bind(c,u,v);else throw new Error(`${f} is not allowed, bindings.${b} is not defined`)}else if(c[f]!==void 0){let{MathMLElement:b}=globalThis;if(c instanceof SVGElement||b!==void 0&&c instanceof b)c.setAttribute(f,u);else c[f]=u}else{let b=a.camelToKabob(f);if(b==="class")u.split(" ").forEach((v)=>{c.classList.add(v)});else if(c[b]!==void 0)c[b]=u;else if(typeof u==="boolean")u?c.setAttribute(b,""):c.removeAttribute(b);else c.setAttribute(b,u)}}return c},d=(...x)=>{let C=globalThis.document.createDocumentFragment();for(let c of x)C.append(c);return C},p=new Proxy({fragment:d},{get(x,C){if(C=C.replace(/[A-Z]/g,(c)=>`-${c.toLocaleLowerCase()}`),x[C]===void 0)x[C]=(...c)=>h(C,...c);return x[C]},set(){throw new Error("You may not add new properties to elements")}}),m=new Proxy({fragment:d},{get(x,C){if(x[C]===void 0)x[C]=(...c)=>h(`${C}|${l}`,...c);return x[C]},set(){throw new Error("You may not add new properties to elements")}}),z=new Proxy({fragment:d},{get(x,C){if(x[C]===void 0)x[C]=(...c)=>h(`${C}|${o}`,...c);return x[C]},set(){throw new Error("You may not add new properties to elements")}})});en("kCu8Y",function(n,t){H(n.exports,"bind",()=>h),H(n.exports,"on",()=>m);var e=E("eppu5"),i=E("5lOGz"),a=E("5hOlm");let{document:s,MutationObserver:o}=globalThis,l=(z,x)=>{let C=a.elementToBindings.get(z);if(C==null)return;for(let c of C){let{binding:g,options:f}=c,{path:u}=c,{toDOM:b}=g;if(b!=null){if(u.startsWith("^")){let v=a.getListItem(z);if(v!=null&&v[a.XIN_PATH]!=null)u=c.path=`${v[a.XIN_PATH]}${u.substring(1)}`;else throw console.error(`Cannot resolve relative binding ${u}`,z,"is not part of a list"),new Error(`Cannot resolve relative binding ${u}`)}if(x==null||u.startsWith(x))b(z,e.xin[u],f)}}};if(o!=null)new o((x)=>{x.forEach((C)=>{[...C.addedNodes].forEach((c)=>{if(c instanceof Element)[...c.querySelectorAll(a.BOUND_SELECTOR)].forEach((g)=>l(g))})})}).observe(s.body,{subtree:!0,childList:!0});e.observe(()=>!0,(z)=>{let x=s.querySelectorAll(a.BOUND_SELECTOR);for(let C of x)l(C,z)});let r=(z)=>{let x=z.target.closest(a.BOUND_SELECTOR);while(x!=null){let C=a.elementToBindings.get(x);for(let c of C){let{binding:g,path:f}=c,{fromDOM:u}=g;if(u!=null){let b;try{b=u(x,c.options)}catch(v){throw console.error("Cannot get value from",x,"via",c),new Error("Cannot obtain value fromDOM")}if(b!=null){let v=e.xin[f];if(v==null)e.xin[f]=b;else{let y=v[a.XIN_PATH]!=null?v[a.XIN_VALUE]:v,S=b[a.XIN_PATH]!=null?b[a.XIN_VALUE]:b;if(y!==S)e.xin[f]=S}}}}x=x.parentElement.closest(a.BOUND_SELECTOR)}};if(globalThis.document!=null)s.body.addEventListener("change",r,!0),s.body.addEventListener("input",r,!0);function h(z,x,C,c){if(z instanceof DocumentFragment)throw new Error("bind cannot bind to a DocumentFragment");let g;if(typeof x==="object"&&x[a.XIN_PATH]===void 0&&c===void 0){let{value:b}=x;g=typeof b==="string"?b:b[a.XIN_PATH],c=x,delete c.value}else g=typeof x==="string"?x:x[a.XIN_PATH];if(g==null)throw new Error("bind requires a path or object with xin Proxy");let{toDOM:f}=C;z.classList?.add(a.BOUND_CLASS);let u=a.elementToBindings.get(z);if(u==null)u=[],a.elementToBindings.set(z,u);if(u.push({path:g,binding:C,options:c}),f!=null&&!g.startsWith("^"))i.touch(g);return z}let d=new Set,p=(z)=>{let x=z?.target.closest(a.EVENT_SELECTOR),C=!1,c=new Proxy(z,{get(g,f){if(f==="stopPropagation")return()=>{z.stopPropagation(),C=!0};else{let u=g[f];return typeof u==="function"?u.bind(g):u}}});while(!C&&x!=null){let f=a.elementToHandlers.get(x)[z.type]||[];for(let u of f){if(typeof u==="function")u(c);else{let b=e.xin[u];if(typeof b==="function")b(c);else throw new Error(`no event handler found at path ${u}`)}if(C)continue}x=x.parentElement!=null?x.parentElement.closest(a.EVENT_SELECTOR):null}},m=(z,x,C)=>{let c=a.elementToHandlers.get(z);if(z.classList.add(a.EVENT_CLASS),c==null)c={},a.elementToHandlers.set(z,c);if(!c[x])c[x]=[];if(!c[x].includes(C))c[x].push(C);if(!d.has(x))d.add(x),s.body.addEventListener(x,p,!0)}});en("eppu5",function(n,t){H(n.exports,"xin",()=>c),H(n.exports,"observe",()=>C),H(n.exports,"boxed",()=>g),H(n.exports,"updates",()=>E("5lOGz").updates),H(n.exports,"touch",()=>E("5lOGz").touch),H(n.exports,"unobserve",()=>E("5lOGz").unobserve),H(n.exports,"observerShouldBeRemoved",()=>E("5lOGz").observerShouldBeRemoved);var e=E("hv4Z8"),i=E("5lOGz"),a=E("aMI8M"),s=E("5hOlm");let o=["sort","splice","copyWithin","fill","pop","push","reverse","shift","unshift"],l={},r=!0,h=/^\.?([^.[\](),])+(\.[^.[\](),]+|\[\d+\]|\[[^=[\](),]*=[^[\]()]+\])*$/,d=(f)=>h.test(f),p=(f="",u="")=>{if(f==="")return u;else if(u.match(/^\d+$/)!==null||u.includes("="))return`${f}[${u}]`;else return`${f}.${u}`},m={string(f){return new String(f)},boolean(f){return new Boolean(f)},bigint(f){return f},symbol(f){return f},number(f){return new Number(f)}};function z(f,u){let b=typeof f;if(f===void 0||b==="object"||b==="function")return f;else return new Proxy(m[typeof f](f),x(u,!0))}let x=(f,u)=>({get(b,v){switch(v){case s.XIN_PATH:return f;case s.XIN_VALUE:return s.xinValue(b)}if(typeof v==="symbol")return b[v];let y=v,S=y.match(/^([^.[]+)\.(.+)$/)??y.match(/^([^\]]+)(\[.+)/)??y.match(/^(\[[^\]]+\])\.(.+)$/)??y.match(/^(\[[^\]]+\])\[(.+)$/);if(S!==null){let[,M,j]=S,N=p(f,M),V=a.getByPath(b,M);return V!==null&&typeof V==="object"?new Proxy(V,x(N,u))[j]:V}if(y.startsWith("[")&&y.endsWith("]"))y=y.substring(1,y.length-1);if(!Array.isArray(b)&&b[y]!==void 0||Array.isArray(b)&&y.includes("=")){let M;if(y.includes("=")){let[j,N]=y.split("=");M=b.find((V)=>`${a.getByPath(V,j)}`===N)}else M=b[y];if(M!==null&&typeof M==="object"){let j=p(f,y);return new Proxy(M,x(j,u))}else if(typeof M==="function")return M.bind(b);else return u?z(M,p(f,y)):M}else if(Array.isArray(b)){let M=b[y];return typeof M==="function"?(...j)=>{let N=Array.prototype[y].apply(b,j);if(o.includes(y))i.touch(f);return N}:typeof M==="object"?new Proxy(M,x(p(f,y),u)):u?z(M,p(f,y)):M}else return u?z(b[y],p(f,y)):b[y]},set(b,v,y){y=s.xinValue(y);let S=v!==s.XIN_VALUE?p(f,v):f;if(r&&!d(S))throw new Error(`setting invalid path ${S}`);if(s.xinValue(c[S])!==y&&a.setByPath(l,S,y))i.touch(S);return!0}}),C=(f,u)=>{let b=typeof u==="function"?u:c[u];if(typeof b!=="function")throw new Error(`observe expects a function or path to a function, ${u} is neither`);return i.observe(f,b)},c=new Proxy(l,x("",!1)),g=new Proxy(l,x("",!0))});en("hv4Z8",function(n,t){H(n.exports,"settings",()=>e);let e={debug:!1,perf:!1}});en("5lOGz",function(n,t){H(n.exports,"observerShouldBeRemoved",()=>a),H(n.exports,"updates",()=>p),H(n.exports,"unobserve",()=>C),H(n.exports,"touch",()=>z),H(n.exports,"observe",()=>x);var e=E("5hOlm"),i=E("hv4Z8");let a=Symbol("observer should be removed"),s=[],o=[],l=!1,r,h;class d{constructor(c,g){let f=typeof g==="string"?`"${g}"`:`function ${g.name}`,u;if(typeof c==="string")this.test=(b)=>typeof b==="string"&&b!==""&&(c.startsWith(b)||b.startsWith(c)),u=`test = "${c}"`;else if(c instanceof RegExp)this.test=c.test.bind(c),u=`test = "${c.toString()}"`;else if(c instanceof Function)this.test=c,u=`test = function ${c.name}`;else throw new Error("expect listener test to be a string, RegExp, or test function");if(this.description=`${u}, ${f}`,typeof g==="function")this.callback=g;else throw new Error("expect callback to be a path or function");s.push(this)}}let p=async()=>{if(r===void 0)return;await r},m=()=>{if(i.settings.perf)console.time("xin async update");let c=[...o];for(let g of c)s.filter((f)=>{let u;try{u=f.test(g)}catch(b){throw new Error(`Listener ${f.description} threw "${b}" at "${g}"`)}if(u===a)return C(f),!1;return u}).forEach((f)=>{let u;try{u=f.callback(g)}catch(b){console.error(`Listener ${f.description} threw "${b}" handling "${g}"`)}if(u===a)C(f)});if(o.splice(0),l=!1,typeof h==="function")h();if(i.settings.perf)console.timeEnd("xin async update")},z=(c)=>{let g=typeof c==="string"?c:e.xinPath(c);if(g===void 0)throw console.error("touch was called on an invalid target",c),new Error("touch was called on an invalid target");if(l===!1)r=new Promise((f)=>{h=f}),l=setTimeout(m);if(o.find((f)=>g.startsWith(f))==null)o.push(g)},x=(c,g)=>{return new d(c,g)},C=(c)=>{let g=s.indexOf(c);if(g>-1)s.splice(g,1);else throw new Error("unobserve failed, listener not found")}});en("5hOlm",function(n,t){H(n.exports,"BOUND_CLASS",()=>i),H(n.exports,"BOUND_SELECTOR",()=>a),H(n.exports,"EVENT_CLASS",()=>s),H(n.exports,"EVENT_SELECTOR",()=>o),H(n.exports,"XIN_PATH",()=>l),H(n.exports,"XIN_VALUE",()=>r),H(n.exports,"xinPath",()=>h),H(n.exports,"xinValue",()=>d),H(n.exports,"elementToHandlers",()=>p),H(n.exports,"elementToBindings",()=>m),H(n.exports,"cloneWithBindings",()=>x),H(n.exports,"elementToItem",()=>C),H(n.exports,"getListItem",()=>c);var e=E("19FSF");let i="-xin-data",a=`.${i}`,s="-xin-event",o=`.${s}`,l="xinPath",r="xinValue",h=(g)=>{return g[l]};function d(g){return typeof g==="object"&&g!==null?g[r]||g:g}let p=new WeakMap,m=new WeakMap,z=(g)=>{return{eventBindings:p.get(g),dataBindings:m.get(g)}},x=(g)=>{let f=g.cloneNode();if(f instanceof Element){let u=m.get(g),b=p.get(g);if(u!=null)m.set(f,e.deepClone(u));if(b!=null)p.set(f,e.deepClone(b))}for(let u of g instanceof HTMLTemplateElement?g.content.childNodes:g.childNodes)if(u instanceof Element||u instanceof DocumentFragment)f.appendChild(x(u));else f.appendChild(u.cloneNode());return f},C=new WeakMap,c=(g)=>{let f=document.body.parentElement;while(g.parentElement!=null&&g.parentElement!==f){let u=C.get(g);if(u!=null)return u;g=g.parentElement}return!1}});en("19FSF",function(n,t){H(n.exports,"deepClone",()=>e);function e(i){if(i==null||typeof i!=="object")return i;if(Array.isArray(i))return i.map(e);let a={};for(let s in i){let o=i[s];if(i!=null&&typeof i==="object")a[s]=e(o);else a[s]=o}return a}});en("aMI8M",function(n,t){H(n.exports,"getByPath",()=>f),H(n.exports,"setByPath",()=>u);var e=E("5lDHe");let i=()=>new Date(parseInt("1000000000",36)+Date.now()).valueOf().toString(36).slice(1),a=0,s=()=>(parseInt("10000",36)+ ++a).toString(36).slice(-5),o=()=>i()+s(),l={},r={};function h(v){if(v==="")return[];if(Array.isArray(v))return v;else{let y=[];while(v.length>0){let S=v.search(/\[[^\]]+\]/);if(S===-1){y.push(v.split("."));break}else{let M=v.slice(0,S);if(v=v.slice(S),M!=="")y.push(M.split("."));if(S=v.indexOf("]")+1,y.push(v.slice(1,S-1)),v.slice(S,S+1)===".")S+=1;v=v.slice(S)}}return y}}let d=new WeakMap;function p(v,y){if(d.get(v)===void 0)d.set(v,{});if(d.get(v)[y]===void 0)d.get(v)[y]={};let S=d.get(v)[y];if(y==="_auto_")v.forEach((M,j)=>{if(M._auto_===void 0)M._auto_=o();S[M._auto_+""]=j});else v.forEach((M,j)=>{S[f(M,y)+""]=j});return S}function m(v,y){if(d.get(v)===void 0||d.get(v)[y]===void 0)return p(v,y);else return d.get(v)[y]}function z(v,y,S){S=S+"";let M=m(v,y)[S];if(M===void 0||f(v[M],y)+""!==S)M=p(v,y)[S];return M}function x(v,y,S){if(v[y]===void 0&&S!==void 0)v[y]=S;return v[y]}function C(v,y,S,M){let j=y!==""?z(v,y,S):S;if(M===l)return v.splice(j,1),d.delete(v),Symbol("deleted");else if(M===r){if(y===""&&v[j]===void 0)v[j]={}}else if(M!==void 0)if(j!==void 0)v[j]=M;else if(y!==""&&f(M,y)+""===S+"")v.push(M),j=v.length-1;else throw new Error(`byIdPath insert failed at [${y}=${S}]`);return v[j]}function c(v){if(!Array.isArray(v))throw e.makeError("setByPath failed: expected array, found",v)}function g(v){if(v==null||!(v instanceof Object))throw e.makeError("setByPath failed: expected Object, found",v)}function f(v,y){let S=h(y),M=v,j,N,V,Q;for(j=0,N=S.length;M!==void 0&&j<N;j++){let W=S[j];if(Array.isArray(W))for(V=0,Q=W.length;M!==void 0&&V<Q;V++){let Z=W[V];M=M[Z]}else if(M.length===0){if(M=M[W.slice(1)],W[0]!=="=")return}else if(W.includes("=")){let[Z,...k]=W.split("=");M=C(M,Z,k.join("="))}else V=parseInt(W,10),M=M[V]}return M}function u(v,y,S){let M=v,j=h(y);while(M!=null&&j.length>0){let N=j.shift();if(typeof N==="string"){let V=N.indexOf("=");if(V>-1){if(V===0)g(M);else c(M);let Q=N.slice(0,V),W=N.slice(V+1);if(M=C(M,Q,W,j.length>0?r:S),j.length===0)return!0}else{c(M);let Q=parseInt(N,10);if(j.length>0)M=M[Q];else{if(S!==l){if(M[Q]===S)return!1;M[Q]=S}else M.splice(Q,1);return!0}}}else if(Array.isArray(N)&&N.length>0){g(M);while(N.length>0){let V=N.shift();if(N.length>0||j.length>0)M=x(M,V,N.length>0?{}:[]);else{if(S!==l){if(M[V]===S)return!1;M[V]=S}else{if(!Object.prototype.hasOwnProperty.call(M,V))return!1;delete M[V]}return!0}}}else throw new Error(`setByPath failed, bad path ${y}`)}throw new Error(`setByPath(${v}, ${y}, ${S}) failed`)}function b(v,y){if(f(v,y)!==null)u(v,y,l)}});en("5lDHe",function(n,t){H(n.exports,"makeError",()=>i);let e=(a)=>{try{return JSON.stringify(a)}catch(s){return"{has circular references}"}},i=(...a)=>new Error(a.map(e).join(" "))});en("buKmK",function(n,t){H(n.exports,"bindings",()=>a);var e=E("2dgdI"),i=E("gbrAN");let a={value:{toDOM:i.setValue,fromDOM(s){return i.getValue(s)}},set:{toDOM:i.setValue},text:{toDOM(s,o){s.textContent=o}},enabled:{toDOM(s,o){s.disabled=!o}},disabled:{toDOM(s,o){s.disabled=Boolean(o)}},style:{toDOM(s,o){if(typeof o==="object")for(let l of Object.keys(o))s.style[l]=o[l];else if(typeof o==="string")s.setAttribute("style",o);else throw new Error("style binding expects either a string or object")}},list:{toDOM(s,o,l){e.getListBinding(s,l).update(o)}}}});en("2dgdI",function(n,t){H(n.exports,"getListBinding",()=>p);var e=E("hv4Z8"),i=E("gbrAN"),a=E("9nL7f"),s=E("eppu5"),o=E("5hOlm");let l=Symbol("list-binding"),r=16;function h(m,z){let x=[...m.querySelectorAll(o.BOUND_SELECTOR)];if(m.matches(o.BOUND_SELECTOR))x.unshift(m);for(let C of x){let c=o.elementToBindings.get(C);for(let g of c){if(g.path.startsWith("^"))g.path=`${z}${g.path.substring(1)}`;if(g.binding.toDOM!=null)g.binding.toDOM(C,s.xin[g.path])}}}class d{constructor(m,z={}){if(this._array=[],this.boundElement=m,this.itemToElement=new WeakMap,m.children.length!==1)throw new Error("ListBinding expects an element with exactly one child element");if(m.children[0]instanceof HTMLTemplateElement){let x=m.children[0];if(x.content.children.length!==1)throw new Error("ListBinding expects a template with exactly one child element");this.template=o.cloneWithBindings(x.content.children[0])}else this.template=m.children[0],this.template.remove();if(this.listTop=document.createElement("div"),this.listBottom=document.createElement("div"),this.boundElement.append(this.listTop),this.boundElement.append(this.listBottom),this.options=z,z.virtual!=null)i.resizeObserver.observe(this.boundElement),this._update=a.throttle(()=>{this.update(this._array,!0)},r),this.boundElement.addEventListener("scroll",this._update),this.boundElement.addEventListener("resize",this._update)}visibleSlice(){let{virtual:m,hiddenProp:z,visibleProp:x}=this.options,C=this._array;if(z!==void 0)C=C.filter((b)=>b[z]!==!0);if(x!==void 0)C=C.filter((b)=>b[x]===!0);let c=0,g=C.length-1,f=0,u=0;if(m!=null&&this.boundElement instanceof HTMLElement){let b=this.boundElement.offsetWidth,v=this.boundElement.offsetHeight,y=m.width!=null?Math.max(1,Math.floor(b/m.width)):1,S=Math.ceil(v/m.height)+1,M=Math.ceil(C.length/y),j=y*S,N=Math.floor(this.boundElement.scrollTop/m.height);if(N>M-S+1)N=Math.max(0,M-S+1);c=N*y,g=c+j-1,f=N*m.height,u=Math.max(M*m.height-v-f,0)}return{items:C,firstItem:c,lastItem:g,topBuffer:f,bottomBuffer:u}}update(m,z){if(m==null)m=[];this._array=m;let{hiddenProp:x,visibleProp:C}=this.options,c=o.xinPath(m),g=this.visibleSlice();this.boundElement.classList.toggle("-xin-empty-list",g.items.length===0);let f=this._previousSlice,{firstItem:u,lastItem:b,topBuffer:v,bottomBuffer:y}=g;if(x===void 0&&C===void 0&&z===!0&&f!=null&&u===f.firstItem&&b===f.lastItem)return;this._previousSlice=g;let S=0,M=0,j=0;for(let W of[...this.boundElement.children]){if(W===this.listTop||W===this.listBottom)continue;let Z=o.elementToItem.get(W);if(Z==null)W.remove();else{let k=g.items.indexOf(Z);if(k<u||k>b)W.remove(),this.itemToElement.delete(Z),o.elementToItem.delete(W),S++}}this.listTop.style.height=String(v)+"px",this.listBottom.style.height=String(y)+"px";let N=[],{idPath:V}=this.options;for(let W=u;W<=b;W++){let Z=g.items[W];if(Z===void 0)continue;let k=this.itemToElement.get(o.xinValue(Z));if(k==null){if(j++,k=o.cloneWithBindings(this.template),typeof Z==="object")this.itemToElement.set(o.xinValue(Z),k),o.elementToItem.set(k,o.xinValue(Z));if(this.boundElement.insertBefore(k,this.listBottom),V!=null){let Fn=Z[V],zt=`${c}[${V}=${Fn}]`;h(k,zt)}else{let Fn=`${c}[${W}]`;h(k,Fn)}}N.push(k)}let Q=null;for(let W of N){if(W.previousElementSibling!==Q)if(M++,Q?.nextElementSibling!=null)this.boundElement.insertBefore(W,Q.nextElementSibling);else this.boundElement.insertBefore(W,this.listBottom);Q=W}if(e.settings.perf)console.log(c,"updated",{removed:S,created:j,moved:M})}}let p=(m,z)=>{let x=m[l];if(x===void 0)x=new d(m,z),m[l]=x;return x}});en("gbrAN",function(n,t){H(n.exports,"dispatch",()=>i),H(n.exports,"setValue",()=>s),H(n.exports,"getValue",()=>o),H(n.exports,"resizeObserver",()=>r),H(n.exports,"appendContentToElement",()=>h);var e=E("5hOlm");let i=(d,p)=>{let m=new Event(p);d.dispatchEvent(m)},a=(d)=>{if(d instanceof HTMLInputElement)return d.type;else if(d instanceof HTMLSelectElement&&d.hasAttribute("multiple"))return"multi-select";else return"other"},s=(d,p)=>{switch(a(d)){case"radio":d.checked=d.value===p;break;case"checkbox":d.checked=!!p;break;case"date":d.valueAsDate=new Date(p);break;case"multi-select":for(let m of[...d.querySelectorAll("option")])m.selected=p[m.value];break;default:d.value=p}},o=(d)=>{switch(a(d)){case"radio":{let p=d.parentElement?.querySelector(`[name="${d.name}"]:checked`);return p!=null?p.value:null}case"checkbox":return d.checked;case"date":return d.valueAsDate?.toISOString();case"multi-select":return[...d.querySelectorAll("option")].reduce((p,m)=>{return p[m.value]=m.selected,p},{});default:return d.value}},{ResizeObserver:l}=globalThis,r=l!=null?new l((d)=>{for(let p of d){let m=p.target;i(m,"resize")}}):{observe(){},unobserve(){}},h=(d,p,m=!0)=>{if(d!=null&&p!=null)if(typeof p==="string")d.textContent=p;else if(Array.isArray(p))p.forEach((z)=>{d.append(z instanceof Node&&m?e.cloneWithBindings(z):z)});else if(p instanceof Node)d.append(m?e.cloneWithBindings(p):p);else throw new Error("expect text content or document node")}});en("9nL7f",function(n,t){H(n.exports,"debounce",()=>e),H(n.exports,"throttle",()=>i);let e=(a,s=250)=>{let o;return(...l)=>{if(o!==void 0)clearTimeout(o);o=setTimeout(()=>{a(...l)},s)}},i=(a,s=250)=>{let o,l=Date.now()-s,r=!1;return(...h)=>{if(clearTimeout(o),o=setTimeout(async()=>{a(...h),l=Date.now()},s),!r&&Date.now()-l>=s){r=!0;try{a(...h),l=Date.now()}finally{r=!1}}}}});en("5JLBr",function(n,t){H(n.exports,"camelToKabob",()=>e),H(n.exports,"kabobToCamel",()=>i);function e(a){return a.replace(/[A-Z]/g,(s)=>{return`-${s.toLocaleLowerCase()}`})}function i(a){return a.replace(/-([a-z])/g,(s,o)=>{return o.toLocaleUpperCase()})}});en("lGBgM",function(n,t){H(n.exports,"makeComponent",()=>r);var e=E("6Jaab"),i=E("aVpVG"),a=E("2okor"),s=E("9sLMf"),o=E("aNHSH");let l={};function r(h,d){let{type:p,styleSpec:m}=d(h,{Color:e.Color,Component:i.Component,elements:s.elements,svgElements:s.svgElements,mathML:s.mathML,varDefault:a.varDefault,vars:a.vars,xinProxy:o.xinProxy}),z={type:p,creator:p.elementCreator({tag:h,styleSpec:m})};return l[h]=z,z}});en("aNHSH",function(n,t){H(n.exports,"boxedProxy",()=>i),H(n.exports,"xinProxy",()=>s);var e=E("eppu5");function i(o){return Object.assign(e.boxed,o),e.boxed}let a=!1;function s(o,l=!1){if(l){if(!a)console.warn("xinProxy(..., true) is deprecated; use boxedProxy(...) instead"),a=!0;return i(o)}return Object.keys(o).forEach((r)=>{e.xin[r]=o[r]}),e.xin}});var ql=E("kCu8Y"),Hl=E("buKmK"),_l=E("2okor"),$l=E("6Jaab"),Pl=E("aVpVG"),Nl=E("9sLMf"),ne=E("eppu5"),c1=E("5hOlm"),h1=E("9nL7f"),Vl=(n=()=>!0)=>{let t=localStorage.getItem("xin-state");if(t!=null){let i=JSON.parse(t);for(let a of Object.keys(i).filter(n))if(ne.xin[a]!==void 0)Object.assign(ne.xin[a],i[a]);else ne.xin[a]=i[a]}let e=h1.debounce(()=>{let i={},a=c1.xinValue(ne.xin);for(let s of Object.keys(a).filter(n))i[s]=a[s];localStorage.setItem("xin-state",JSON.stringify(i)),console.log("xin state saved to localStorage")},500);ne.observe(n,e)},c1=E("5hOlm"),Wl=E("lGBgM"),Gl=E("drWRQ"),Ul=E("hv4Z8"),h1=E("9nL7f"),ne=E("eppu5"),Yl=E("5lOGz");E("3x0mh");var Rl={},Jl=E("aNHSH"),Kl=E("kCu8Y").bind,Bl=E("kCu8Y").on,Ws=E("buKmK").bindings,Ql=E("2okor").css,Zl=E("2okor").invertLuminance,Xl=E("2okor").darkMode,kl=E("2okor").initVars,T=E("2okor").vars,P=E("2okor").varDefault,Gs=E("2okor").StyleSheet,fe=E("6Jaab").Color,J=E("aVpVG").Component,X=E("9sLMf").elements,d1=E("9sLMf").svgElements,n3=E("9sLMf").mathML,Us=E("5hOlm").getListItem,e3=E("5hOlm").xinPath,pe=E("5hOlm").xinValue,t3=E("lGBgM").makeComponent,i3=E("drWRQ").MoreMath,a3=E("hv4Z8").settings,Ys=E("9nL7f").throttle,s3=E("9nL7f").debounce,u1=E("eppu5").xin,o3=E("eppu5").boxed,l3=E("eppu5").observe,r3=E("5lOGz").unobserve,c3=E("5lOGz").touch,h3=E("5lOGz").observerShouldBeRemoved,d3=E("5lOGz").updates,p1=E("aNHSH").xinProxy,Rs=E("aNHSH").boxedProxy,u3=E("3x0mh").Blueprint,p3=E("3x0mh").blueprint,g3=E("3x0mh").BlueprintLoader,f3=E("3x0mh").blueprintLoader,m3=E("3x0mh")["*"];/*!
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
*/var{abTestConditions:Lt}=p1({abTestConditions:{}});class me extends J{static set conditions(n){Object.assign(Lt,n);for(let t of[...me.instances])t.queueRender()}condition="";not=!1;static instances=new Set;constructor(){super();this.initAttributes("condition","not")}connectedCallback(){super.connectedCallback(),me.instances.add(this)}disconnectedCallback(){super.disconnectedCallback(),me.instances.delete(this)}render(){if(this.condition!==""&&(this.not?Lt[this.condition]!==!0:Lt[this.condition]===!0))this.toggleAttribute("hidden",!1);else this.toggleAttribute("hidden",!0)}}var b3=me.elementCreator({tag:"xin-ab"});/*!
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
*/var _e={};function ie(n,t){if(_e[n]===void 0){if(t!==void 0){let i=globalThis[t];_e[n]=Promise.resolve({[t]:i})}let e=X.script({src:n});document.head.append(e),_e[n]=new Promise((i)=>{e.onload=()=>i(globalThis)})}return _e[n]}var Ft={};function Js(n){if(Ft[n]===void 0){let t=X.link({rel:"stylesheet",type:"text/css",href:n});document.head.append(t),Ft[n]=new Promise((e)=>{t.onload=e})}return Ft[n]}var Ye={xinjsUiColor:{p:["M976 0c4 0 8 2 11 5 4 4 7 7 11 11 0 0 21 21 21 21 3 3 5 7 5 11 0 0 0 928 0 928 0 4-2 8-5 11-4 4-7 7-11 11-5 5-9 9-14 14 0 0-7 7-7 7-3 3-7 5-11 5 0 0-928 0-928 0-4 0-8-2-11-5-4-4-7-7-11-11 0 0-21-21-21-21-3-3-5-7-5-11 0 0 0-928 0-928 0-4 2-8 5-11 4-4 7-7 11-11 5-5 9-9 14-14 0 0 7-7 7-7 3-3 7-5 11-5 0 0 928 0 928 0z","M182 131c13 5 8 2 16 9 0 0 102 102 102 102s91-91 91-91c9-9 9-9 11-11 8-7 13-8 23-9 0 0 4 0 4 0 13 5 8 2 16 9 12 12 12 32 0 44-2 2-2 2-11 11 0 0-91 91-91 91s102 102 102 102c12 12 12 32 0 44-12 12-32 12-44 0 0 0-102-102-102-102s-48 48-48 48c0 0-44 44-44 44-9 9-9 9-11 11-12 12-32 12-44 0-12-12-12-32 0-44 2-2 2-2 11-11 0 0 91-91 91-91s-102-102-102-102c-12-12-12-32 0-44 8-7 13-8 23-9 0 0 4 0 4 0z","M516 131c17 0 31 14 31 31 0 0 0 248 0 248 0 17-14 31-31 31-17 0-31-14-31-31 0 0 0-248 0-248 0-17 14-31 31-31z","M611 131c0 0 4 0 4 0 13 5 8 2 16 9 2 2 2 2 11 11 0 0 226 226 226 226 9 9 9 9 11 11 12 12 12 32 0 44-12 12-32 12-44 0 0 0-248-248-248-248-12-12-12-32 0-44 8-7 13-8 23-9z","M516 131c17 0 31 14 31 31 0 247 0 164 0 248 0 17-14 31-31 31-17 0-31-14-31-31 0 0 0-248 0-248 0-17 14-31 31-31z","M611 131c0 0 4 0 4 0 13 5 8 2 16 9 2 2 2 2 11 11 0 0 226 226 226 226 9 9 9 9 11 11 12 12 12 32 0 44-12 12-32 12-44 0 0 0-248-248-248-248-12-12-12-32 0-44 8-7 13-8 23-9z","M653 498c0 0 0 146 0 146 0 140-114 254-254 254-140 0-254-114-254-254 0 0 0-146 0-146s127 0 127 0c0 0 0 146 0 146 0 70 57 127 127 127 70 0 127-57 127-127 0 0 0-146 0-146s127 0 127 0z","M765 881c0 0 0-384 0-384s127 0 127 0c0 0 0 384 0 384s-127 0-127 0z","M720 995c-24-48-47-96-71-145-27 26-55 53-82 79 0-118 0-237 0-355 93 71 185 142 278 213-37 7-74 13-111 20 24 48 47 96 71 145-28 14-57 29-85 43 0 0 0 0 0 0z","M657 807c25 51 50 102 75 153 13-7 26-13 38-20-25-51-50-102-75-153 29-5 58-10 86-15-63-48-126-96-188-144 0 80 0 160 0 240 21-20 42-41 64-61 0 0 0 0 0 0z"],c:["rgb(64, 64, 64)","rgb(255, 28, 36)","rgb(8, 131, 87)","rgb(8, 131, 87)","rgb(140, 198, 63)","rgb(61, 168, 244)","rgb(255, 147, 29)","rgb(251, 237, 33)","rgb(255, 255, 255)","rgb(0, 0, 0)"]},xinjsUi:{p:["M976 0c4 0 8 2 11 5 4 4 7 7 11 11 0 0 21 21 21 21 3 3 5 7 5 11 0 0 0 928 0 928 0 4-2 8-5 11-4 4-7 7-11 11-5 5-9 9-14 14 0 0-7 7-7 7-3 3-7 5-11 5 0 0-928 0-928 0-4 0-8-2-11-5-4-4-7-7-11-11 0 0-21-21-21-21-3-3-5-7-5-11 0 0 0-928 0-928 0-4 2-8 5-11 4-4 7-7 11-11 5-5 9-9 14-14 0 0 7-7 7-7 3-3 7-5 11-5 0 0 928 0 928 0z","M182 131c13 5 8 2 16 9 0 0 102 102 102 102s91-91 91-91c9-9 9-9 11-11 8-7 13-8 23-9 0 0 4 0 4 0 13 5 8 2 16 9 12 12 12 32 0 44-2 2-2 2-11 11 0 0-91 91-91 91s102 102 102 102c12 12 12 32 0 44-12 12-32 12-44 0 0 0-102-102-102-102s-48 48-48 48c0 0-44 44-44 44-9 9-9 9-11 11-12 12-32 12-44 0-12-12-12-32 0-44 2-2 2-2 11-11 0 0 91-91 91-91s-102-102-102-102c-12-12-12-32 0-44 8-7 13-8 23-9 0 0 4 0 4 0z","M516 131c17 0 31 14 31 31 0 0 0 248 0 248 0 17-14 31-31 31-17 0-31-14-31-31 0 0 0-248 0-248 0-17 14-31 31-31z","M516 131c17 0 31 14 31 31 0 247 0 164 0 248 0 17-14 31-31 31-17 0-31-14-31-31 0 0 0-248 0-248 0-17 14-31 31-31z","M611 131c0 0 4 0 4 0 13 5 8 2 16 9 2 2 2 2 11 11 0 0 226 226 226 226 9 9 9 9 11 11 12 12 12 32 0 44-12 12-32 12-44 0 0 0-248-248-248-248-12-12-12-32 0-44 8-7 13-8 23-9z","M182 131c13 5 8 2 16 9 0 0 102 102 102 102s91-91 91-91c9-9 9-9 11-11 8-7 13-8 23-9 0 0 4 0 4 0 13 5 8 2 16 9 12 12 12 32 0 44-2 2-2 2-11 11 0 0-91 91-91 91s102 102 102 102c12 12 12 32 0 44-12 12-32 12-44 0 0 0-102-102-102-102s-48 48-48 48c0 0-44 44-44 44-9 9-9 9-11 11-12 12-32 12-44 0-12-12-12-32 0-44 2-2 2-2 11-11 0 0 91-91 91-91s-102-102-102-102c-12-12-12-32 0-44 8-7 13-8 23-9 0 0 4 0 4 0zM516 131c17 0 31 14 31 31 0 0 0 248 0 248 0 17-14 31-31 31-17 0-31-14-31-31 0 0 0-248 0-248 0-17 14-31 31-31zM611 131c0 0 4 0 4 0 13 5 8 2 16 9 2 2 2 2 11 11 0 0 226 226 226 226 9 9 9 9 11 11 12 12 12 32 0 44-12 12-32 12-44 0 0 0-248-248-248-248-12-12-12-32 0-44 8-7 13-8 23-9zM516 131c17 0 31 14 31 31 0 247 0 164 0 248 0 17-14 31-31 31-17 0-31-14-31-31 0 0 0-248 0-248 0-17 14-31 31-31zM611 131c0 0 4 0 4 0 13 5 8 2 16 9 2 2 2 2 11 11 0 0 226 226 226 226 9 9 9 9 11 11 12 12 12 32 0 44-12 12-32 12-44 0 0 0-248-248-248-248-12-12-12-32 0-44 8-7 13-8 23-9z","M653 498c0 0 0 146 0 146 0 140-114 254-254 254-140 0-254-114-254-254 0 0 0-146 0-146s127 0 127 0c0 0 0 146 0 146 0 70 57 127 127 127 70 0 127-57 127-127 0 0 0-146 0-146s127 0 127 0z","M765 881c0 0 0-384 0-384s127 0 127 0c0 0 0 384 0 384s-127 0-127 0z","M720 995c-24-48-47-96-71-145-27 26-55 53-82 79 0-118 0-237 0-355 93 71 185 142 278 213-37 7-74 13-111 20 24 48 47 96 71 145-28 14-57 29-85 43 0 0 0 0 0 0z","M657 807c25 51 50 102 75 153 13-7 26-13 38-20-25-51-50-102-75-153 29-5 58-10 86-15-63-48-126-96-188-144 0 80 0 160 0 240 21-20 42-41 64-61 0 0 0 0 0 0z"],c:["rgb(237, 242, 221)","rgb(8, 131, 87)","rgb(8, 131, 87)","rgb(8, 131, 87)","rgb(8, 131, 87)","rgb(8, 131, 87)","rgb(8, 131, 87)","rgb(8, 131, 87)","rgb(236, 243, 221)","rgb(8, 131, 87)"]},cmy:{p:["M302 442c-11-27-17-56-17-86 0-126 103-229 229-229s229 103 229 229c0 31-6 60-17 87-12-2-24-3-37-3-72 0-136 33-178 85-42-52-106-85-178-85-11 0-21 1-32 2z","M478 582c-80-13-146-67-175-140 10-1 21-2 32-2 72 0 136 33 178 85-14 17-26 37-34 58z","M512 813c-42 52-106 85-178 85-126 0-229-103-229-229 0-116 86-211 197-227 30 73 96 127 175 140-11 27-17 56-17 87 0 55 19 105 51 144z","M547 582c-10 1-21 2-32 2-13 0-25-1-37-3 9-21 20-40 34-58 14 18 26 37 35 58 0 0 0 0 0 0z","M478 582c-11 27-17 56-17 87 0 55 19 105 51 144 32-39 51-90 51-144 0-30-6-59-17-86-10 1-21 2-32 2-13 0-25-1-37-3z","M547 582c82-11 150-66 180-140-12-2-24-3-37-3-72 0-136 33-178 85 14 18 26 37 35 58 0 0 0 0 0 0z","M512 813c42 52 106 85 178 85 126 0 229-103 229-229 0-114-83-208-192-226-30 74-98 129-180 140 11 27 17 56 17 86 0 55-19 105-51 144 0 0 0 0 0 0z"],c:["rgb(86, 206, 255)","rgb(20, 248, 0)","rgb(249, 255, 44)","rgb(0, 0, 0)","rgb(252, 0, 0)","rgb(1, 6, 255)","rgb(241, 76, 255)"]},rgb:{p:["M302 442c-11-27-17-56-17-86 0-126 103-229 229-229s229 103 229 229c0 31-6 60-17 87-12-2-24-3-37-3-72 0-136 33-178 85-42-52-106-85-178-85-11 0-21 1-32 2z","M478 582c-80-13-146-67-175-140 10-1 21-2 32-2 72 0 136 33 178 85-14 17-26 37-34 58z","M512 813c-42 52-106 85-178 85-126 0-229-103-229-229 0-116 86-211 197-227 30 73 96 127 175 140-11 27-17 56-17 87 0 55 19 105 51 144z","M547 582c-10 1-21 2-32 2-13 0-25-1-37-3 9-21 20-40 34-58 14 18 26 37 35 58 0 0 0 0 0 0z","M478 582c-11 27-17 56-17 87 0 55 19 105 51 144 32-39 51-90 51-144 0-30-6-59-17-86-10 1-21 2-32 2-13 0-25-1-37-3z","M547 582c82-11 150-66 180-140-12-2-24-3-37-3-72 0-136 33-178 85 14 18 26 37 35 58 0 0 0 0 0 0z","M512 813c42 52 106 85 178 85 126 0 229-103 229-229 0-114-83-208-192-226-30 74-98 129-180 140 11 27 17 56 17 86 0 55-19 105-51 144 0 0 0 0 0 0z"],c:["rgb(248, 14, 0)","rgb(253, 0, 255)","rgb(44, 131, 255)","rgb(255, 255, 255)","rgb(0, 219, 255)","rgb(250, 255, 0)","rgb(0, 204, 3)"]},xinjsColor:{p:["M976 0c4 0 8 2 11 5 4 4 7 7 11 11 0 0 21 21 21 21 3 3 5 7 5 11 0 0 0 928 0 928 0 4-2 8-5 11-4 4-7 7-11 11-5 5-9 9-14 14 0 0-7 7-7 7-3 3-7 5-11 5 0 0-928 0-928 0-4 0-8-2-11-5-4-4-7-7-11-11 0 0-21-21-21-21-3-3-5-7-5-11 0 0 0-928 0-928 0-4 2-8 5-11 4-4 7-7 11-11 5-5 9-9 14-14 0 0 7-7 7-7 3-3 7-5 11-5 0 0 928 0 928 0z","M125 308c8 3 5 1 10 5 0 0 65 65 65 65s58-58 58-58c6-6 6-6 7-7 5-5 8-5 15-5 0 0 3 0 3 0 8 3 5 1 10 5 8 8 8 20 0 28-1 1-1 1-7 7 0 0-58 58-58 58s65 65 65 65c8 8 8 20 0 28-8 8-20 8-28 0 0 0-65-65-65-65s-30 30-30 30c0 0-28 28-28 28-6 6-6 6-7 7-8 8-20 8-28 0-8-8-8-20 0-28 1-1 1-1 7-7 0 0 58-58 58-58s-65-65-65-65c-8-8-8-20 0-28 5-5 8-5 15-5 0 0 3 0 3 0z","M337 307c11 0 20 9 20 20 0 0 0 157 0 157 0 11-9 20-20 20-11 0-20-9-20-20 0 0 0-157 0-157 0-11 9-20 20-20z","M337 307c11 0 20 9 20 20 0 156 0 104 0 157 0 11-9 20-20 20-11 0-20-9-20-20 0 0 0-157 0-157 0-11 9-20 20-20z","M660 464c11 0 20 9 20 20 0 0 0 216 0 216 0 11-9 20-20 20s-20-9-20-20c0 0 0-216 0-216 0-11 9-20 20-20z","M396 308c0 0 3 0 3 0 8 3 5 1 10 5 1 1 1 1 7 7 0 0 143 143 143 143 6 6 6 6 7 7 8 8 8 20 0 28-8 8-20 8-28 0 0 0-157-157-157-157-8-8-8-20 0-28 5-5 8-5 15-5z","M279 523c0 0 3 0 3 0 8 3 5 1 10 5 8 8 8 20 0 28-1 1-2 2-3 3 0 0-38 38-38 38s-1 1-1 1c0 0-21 21-21 21s-2 2-2 2c0 0 65 65 65 65 8 8 8 20 0 28-8 8-20 8-28 0-1-1-1-1-7-7 0 0-58-58-58-58s-26 26-26 26c-3 3-7 7-10 10 0 0-28 28-28 28-8 8-20 8-28 0-8-8-8-20 0-28 0 0 65-65 65-65s-58-58-58-58c-2-2-4-4-6-6 0 0-0-0-0-0-8-8-8-20 0-28 5-5 8-5 15-5 0 0 3 0 3 0 8 3 5 1 10 5 0 0 65 65 65 65 22-22 43-43 65-65 5-5 8-5 15-5z","M337 523c11 0 20 9 20 20 0 0 0 157 0 157 0 11-9 20-20 20-11 0-20-9-20-20 0 0 0-157 0-157 0-11 9-20 20-20z","M553 523c0 0 3 0 3 0 8 3 5 1 10 5 8 8 8 20 0 28-1 1-1 1-7 7-50 50-100 100-150 150-8 8-20 8-28 0-8-8-8-20 0-28 1-1 2-2 3-3 51-52 103-103 154-154 5-5 8-5 15-5z","M337 523c11 0 20 9 20 20 0 0 0 157 0 157 0 11-9 20-20 20-11 0-20-9-20-20 0 0 0-157 0-157 0-11 9-20 20-20z","M553 523c0 0 3 0 3 0 8 3 5 1 10 5 8 8 8 20 0 28-1 1-1 1-7 7-50 50-100 100-150 150-8 8-20 8-28 0-8-8-8-20 0-28 1-1 2-2 3-3 51-52 103-103 154-154 5-5 8-5 15-5z","M689 307c11 0 20 9 20 20 0 0 0 137 0 137 0 5-2 10-6 14 0 0-20 20-20 20-4 4-9 6-14 6 0 0-59 0-59 0-11 0-20-9-20-20 0-11 9-20 20-20 0 0 51 0 51 0s8-8 8-8c0 0 0-129 0-129 0-11 9-20 20-20z","M905 464c11 0 20 9 20 20 0 11-9 20-20 20 0 0-157 0-157 0-11 0-20-9-20-20 0-11 9-20 20-20 0 0 157 0 157 0z","M905 533c11 0 20 9 20 20 0 11-9 20-20 20 0 0-157 0-157 0-11 0-20-9-20-20 0-11 9-20 20-20 0 0 157 0 157 0z","M905 395c11 0 20 9 20 20 0 11-9 20-20 20 0 0-157 0-157 0-11 0-20-9-20-20 0-11 9-20 20-20 0 0 157 0 157 0z","M906 308c0 0 3 0 3 0 8 3 5 1 10 5 8 8 8 20 0 28 0 0-20 20-20 20-4 4-9 6-14 6 0 0-137 0-137 0-11 0-20-9-20-20s9-20 20-20c0 0 129 0 129 0s14-14 14-14c5-5 8-5 15-5z","M905 601c11 0 20 9 20 20 0 0 0 59 0 59 0 5-2 10-6 14 0 0-20 20-20 20-4 4-9 6-14 6 0 0-137 0-137 0-11 0-20-9-20-20 0 0 0-78 0-78 0-11 9-20 20-20 0 0 157 0 157 0zM885 640c0 0-118 0-118 0s0 39 0 39c0 0 109 0 109 0s8-8 8-8c0 0 0-31 0-31z"],c:["rgb(237, 243, 221)","rgb(8, 131, 88)","rgb(8, 131, 88)","rgb(8, 131, 88)","rgb(155, 205, 188)","rgb(8, 131, 88)","rgb(155, 205, 188)","rgb(8, 131, 88)","rgb(8, 131, 88)","rgb(155, 205, 188)","rgb(155, 205, 188)","rgb(8, 131, 88)","rgb(8, 131, 88)","rgb(155, 205, 188)","rgb(8, 131, 88)","rgb(8, 131, 88)","rgb(155, 205, 188)"]},xinColor:{p:["M976 0c4 0 8 2 11 5 4 4 7 7 11 11l21 21c3 3 5 7 5 11v928c0 4-2 8-5 11-4 4-7 7-11 11-5 5-9 9-14 14l-7 7c-3 3-7 5-11 5h-928c-4 0-8-2-11-5-4-4-7-7-11-11l-21-21c-3-3-5-7-5-11v-928c0-4 2-8 5-11 4-4 7-7 11-11 5-5 9-9 14-14l7-7c3-3 7-5 11-5h928z","M589 862c13 13 34 13 48 0l104-104 141-141 17-17 7-7c13-13 13-34-0-48-13-13-34-13-48-0l-269 269c-13 13-13 34 0 48zM600 851c-7-7-7-18-0-25l0-0 269-269c7-7 18-7 25 0 7 7 7 18 0 25l-0 0-11 11-19 19-162 162-53 53-24 24c-7 7-18 7-25-0z","M512 871c19 0 34-15 34-34v-270c0-19-15-34-34-34-19 0-34 15-34 34v270c0 19 15 34 34 34zM512 855c-10 0-17-8-18-17l-0-1v-270c0-10 8-18 18-18 10 0 17 8 18 17l0 1 0 37-0 121-0 111c0 10-8 18-18 18z","M436 862c13-13 13-34 0-48l-112-112 112-112c13-13 13-34 0-48-13-13-34-13-48 0l-112 112-110-110c-13-13-34-13-48 0-13 13-13 34-1 47l1 1 110 110-110 110c-13 13-13 34 0 48 13 13 34 13 48 0l110-110 112 112c13 13 34 13 48 0zM425 851c-7 7-18 7-25 0l-0-0-123-123-121 121c-7 7-18 7-25-0-7-7-7-18-0-25l0-0 121-121-121-121c-7-7-7-18 0-25 7-7 18-7 25-0l0 0 121 121 123-123c7-7 18-7 25 0 7 7 7 18 0 25l-0 0-123 123 123 123c7 7 7 18 0 25l-0 0z","M589 170c13-13 34-13 48-0 190 190 205 205 269 269 13 13 13 34-0 48-13 13-34 13-48 0l-269-269c-13-13-13-34 0-48z","M512 158c19 0 34 15 34 34 0 269 0 179 0 270 0 19-15 34-34 34-19 0-34-15-34-34v-270c0-19 15-34 34-34z","M388 168c13-13 34-13 48 0 13 13 13 34 0 48l-112 112 112 112c13 13 13 34 0 48-13 13-34 13-48 0l-112-112-110 110c-13 13-34 13-48-0-13-13-13-34-1-47l1-1 110-110-110-110c-13-13-13-34 0-48 13-13 34-13 48-0l110 110 112-112z"],c:["rgb(9, 131, 88)","rgb(237, 243, 221)","rgb(237, 243, 221)","rgb(237, 243, 221)","rgb(237, 243, 221)","rgb(237, 243, 221)","rgb(237, 243, 221)"]},sortDescending:"M723 469c-256 0-179 0-435 0-24 0-43 19-43 43s19 43 43 43c256 0 179 0 435 0 24 0 43-19 43-43s-19-43-43-43zM603 725c-256 0 61 0-195 0-24 0-43 19-43 43s19 43 43 43c256 0-61 0 195 0 24 0 43-19 43-43s-19-43-43-43zM856 213c-256 0-432 0-688 0-24 0-43 19-43 43s19 43 43 43c256 0 432 0 688 0 24 0 43-19 43-43s-19-43-43-43z",sortAscending:"M301 555c256 0 179 0 435 0 24 0 43-19 43-43s-19-43-43-43c-256 0-179 0-435 0-24 0-43 19-43 43s19 43 43 43zM421 299c256 0-61 0 195 0 24 0 43-19 43-43s-19-43-43-43c-256 0 61 0-195 0-24 0-43 19-43 43s19 43 43 43zM168 811c256 0 432 0 688 0 24 0 43-19 43-43s-19-43-43-43c-256 0-432 0-688 0-24 0-43 19-43 43s19 43 43 43z",sidebar:"M213 85c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-597c0-35-14-67-38-90s-55-38-90-38zM427 853v-683h384c12 0 22 5 30 13s13 18 13 30v597c0 12-5 22-13 30s-18 13-30 13zM341 171v683h-128c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13z",calendar:"M299 85v43h-85c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-597c0-35-14-67-38-90s-55-38-90-38h-85v-43c0-24-19-43-43-43s-43 19-43 43v43h-256v-43c0-24-19-43-43-43s-43 19-43 43zM853 384h-683v-128c0-12 5-22 13-30s18-13 30-13h85v43c0 24 19 43 43 43s43-19 43-43v-43h256v43c0 24 19 43 43 43s43-19 43-43v-43h85c12 0 22 5 30 13s13 18 13 30zM171 469h683v384c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30z",editDoc:"M469 128h-299c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-299c0-24-19-43-43-43s-43 19-43 43v299c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h299c24 0 43-19 43-43s-19-43-43-43zM759 77l-405 405c-5 5-9 12-11 20l-43 171c-2 6-2 14 0 21 6 23 29 37 52 31l171-43c7-2 14-6 20-11l405-405c26-26 39-60 39-94s-13-68-39-94-60-39-94-39-68 13-94 39zM819 137c9-9 22-14 34-14s24 5 34 14 14 22 14 34-5 24-14 34l-397 397-90 23 23-90z",edit:"M695 98l-576 576c-5 5-9 11-11 19l-64 235c-2 7-2 15 0 22 6 23 30 36 52 30l235-64c7-2 13-6 19-11l576-576c32-32 48-74 48-115s-16-84-48-115-74-48-115-48-84 16-115 48zM755 158c15-15 35-23 55-23s40 8 55 23 23 35 23 55-8 40-23 55l-568 568-152 41 41-152z",web:"M723 469c-9-115-47-228-114-329 67 17 127 53 174 100 60 60 100 140 110 229zM609 884c63-95 104-207 114-329h171c-10 89-50 169-110 229-47 47-107 83-174 100zM301 555c9 115 47 228 114 329-67-17-127-53-174-100-60-60-100-140-110-229zM415 140c-63 95-104 207-114 329h-171c10-89 50-169 110-229 48-47 107-83 174-100zM512 43c0 0 0 0 0 0-130 0-247 53-332 137-85 85-137 202-137 332s53 247 137 332c85 85 202 137 332 137 0 0 0 0 0 0 130-0 247-53 332-137 85-85 137-202 137-332s-53-247-137-332c-85-85-202-137-332-137zM638 555c-11 119-56 229-126 318-74-95-115-206-126-318zM512 151c74 95 115 206 126 318h-251c11-119 56-229 126-318z",info:"M981 512c0-130-53-247-137-332s-202-137-332-137-247 53-332 137-137 202-137 332 53 247 137 332 202 137 332 137 247-53 332-137 137-202 137-332zM896 512c0 106-43 202-112 272s-165 112-272 112-202-43-272-112-112-165-112-272 43-202 112-272 165-112 272-112 202 43 272 112 112 165 112 272zM555 683v-171c0-24-19-43-43-43s-43 19-43 43v171c0 24 19 43 43 43s43-19 43-43zM512 384c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43z",loading:"M469 85v171c0 24 19 43 43 43s43-19 43-43v-171c0-24-19-43-43-43s-43 19-43 43zM469 768v171c0 24 19 43 43 43s43-19 43-43v-171c0-24-19-43-43-43s-43 19-43 43zM180 241l121 121c17 17 44 17 60 0s17-44 0-60l-121-121c-17-17-44-17-60 0s-17 44 0 60zM663 723l121 121c17 17 44 17 60 0s17-44 0-60l-121-121c-17-17-44-17-60 0s-17 44 0 60zM85 555h171c24 0 43-19 43-43s-19-43-43-43h-171c-24 0-43 19-43 43s19 43 43 43zM768 555h171c24 0 43-19 43-43s-19-43-43-43h-171c-24 0-43 19-43 43s19 43 43 43zM241 844l121-121c17-17 17-44 0-60s-44-17-60 0l-121 121c-17 17-17 44 0 60s44 17 60 0zM723 361l121-121c17-17 17-44 0-60s-44-17-60 0l-121 121c-17 17-17 44 0 60s44 17 60 0z",mail:"M128 338l360 252c15 10 34 10 49 0l360-252v430c0 12-5 22-13 30s-18 13-30 13h-683c-12 0-22-5-30-13s-13-18-13-30zM43 255c0 0 0 1 0 1v511c0 35 15 67 38 90s55 38 90 38h683c35 0 67-15 90-38s38-55 38-90v-511c0-0 0-1 0-1-0-35-15-67-38-90-23-23-55-38-90-38h-683c-35 0-67 15-90 38-23 23-37 55-38 90zM891 237l-379 266-379-266c2-4 5-8 8-11 8-8 19-13 30-13h683c12 0 22 5 30 13 3 3 6 7 8 11z",resize:"M175 102l271 271c20 20 20 52 0 72s-52 20-72 0l-271-271v184c0 28-23 51-51 51s-51-23-51-51v-307c0-7 1-14 4-20s6-12 11-17c0-0 0-0 0-0 5-5 10-8 17-11 6-3 13-4 20-4h307c28 0 51 23 51 51s-23 51-51 51h-184zM849 922l-271-271c-20-20-20-52 0-72s52-20 72 0l271 271v-184c0-28 23-51 51-51s51 23 51 51v307c0 28-23 51-51 51h-307c-28 0-51-23-51-51s23-51 51-51h184z",menu:"M128 555h768c24 0 43-19 43-43s-19-43-43-43h-768c-24 0-43 19-43 43s19 43 43 43zM128 299h768c24 0 43-19 43-43s-19-43-43-43h-768c-24 0-43 19-43 43s19 43 43 43zM128 811h768c24 0 43-19 43-43s-19-43-43-43h-768c-24 0-43 19-43 43s19 43 43 43z",message:"M939 640v-427c0-35-14-67-38-90s-55-38-90-38h-597c-35 0-67 14-90 38s-38 55-38 90v683c0 11 4 22 13 30 17 17 44 17 60 0l158-158h494c35 0 67-14 90-38s38-55 38-90zM853 640c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22 5-30 13l-98 98v-580c0-12 5-22 13-30s18-13 30-13h597c12 0 22 5 30 13s13 18 13 30z",blog:{p:["M848 517c0-23 19-42 42-43l1-0c23 0 42 19 43 42l0 1v128c0 35-14 67-37 90l-1 1c-23 23-55 37-89 38l-1 0h-494l-158 158c-17 17-44 17-60 0-8-8-12-19-12-29l-0-1v-683c0-35 14-67 38-90 23-23 55-37 89-38l1-0h299c24 0 43 19 43 43 0 23-19 42-42 43l-1 0h-299c-12 0-22 5-30 12l-0 0c-8 8-12 18-12 29l-0 1v580l98-98c8-8 18-12 29-12l1-0h512c12 0 22-5 30-13 8-8 12-18 12-29l0-1v-128zM797 39l-352 352c-5 5-9 12-11 20l-43 171c-2 6-2 14 0 21 6 23 29 37 52 31l171-43c7-2 14-6 20-11l352-352c26-26 39-60 39-94s-13-68-39-94c-26-26-60-39-94-39s-68 13-94 39zM857 99c9-9 22-14 34-14s24 5 34 14c9 9 14 22 14 34s-5 24-14 34l-344 344-90 23 23-90 344-344z","M292 251h163c24 0 43 19 43 43s-19 43-43 43h-163c-24 0-43-19-43-43s19-43 43-43z","M292 407h67c24 0 43 19 43 43s-19 43-43 43h-67c-24 0-43-19-43-43s19-43 43-43z"]},phone:"M981 722c1-30-10-60-29-83-20-24-48-41-82-46-34-4-72-13-110-28-18-7-38-9-57-7-28 3-56 15-78 36l-31 31c-76-48-143-114-196-196l31-31c14-14 24-31 30-49 9-27 9-57-2-86-12-32-22-70-27-111-4-30-19-57-41-77-23-21-54-33-86-33h-128c-4 0-8 0-12 1-35 3-66 20-87 45s-32 58-29 94c13 131 58 266 137 388 64 103 156 197 269 269 110 72 243 122 388 138 4 0 8 1 12 1 35-0 67-15 90-38s37-55 37-90zM896 722v128c0 12-5 23-12 30s-18 13-30 13c-134-14-254-59-353-124-104-66-186-151-243-243-72-112-113-234-125-351-1-11 3-22 10-31s17-14 29-15l132-0c12-0 22 4 29 11 7 7 12 16 14 26 6 46 17 90 32 129 3 9 3 19 0 28-2 6-6 12-10 17l-54 54c-14 14-16 35-7 51 68 119 164 211 272 272 17 9 38 6 51-7l54-54c7-7 16-11 26-12 6-1 13 0 20 3 44 16 88 27 129 32 10 1 20 7 26 15 6 8 10 18 10 29z",pieChart:"M866 661c-41 98-118 169-209 206s-196 39-294-2-169-118-206-209-39-196 2-294c40-94 113-165 200-202 22-9 31-35 22-56s-35-31-56-22c-106 46-196 132-245 247-50 119-48 248-3 359s133 205 252 256 248 48 359 3 205-133 256-252c9-22-1-47-23-56s-47 1-56 23zM894 469h-339v-339c89 10 169 50 229 110s100 140 110 229zM981 512c0-130-53-247-137-332s-202-137-332-137c-24 0-43 19-43 43v427c0 24 19 43 43 43h427c24 0 43-19 43-43z",search:"M684 677c-1 1-3 2-4 4s-3 3-4 4c-54 52-127 84-207 84-82 0-157-33-211-87s-87-129-87-211 33-157 87-211 129-87 211-87 157 33 211 87 87 129 87 211c0 80-32 153-84 207zM926 866l-157-157c53-66 84-149 84-240 0-106-43-202-112-272s-166-112-272-112-202 43-272 112-112 166-112 272 43 202 112 272 166 112 272 112c91 0 174-31 240-84l157 157c17 17 44 17 60 0s17-44 0-60z",send:"M980 97c2-6 2-13 1-20-1-5-3-10-6-14-3-4-6-8-10-11-5-4-11-6-16-8s-12-1-18-0c-2 0-4 1-5 1l-1 0-852 298c-11 4-20 12-25 23-10 22 0 47 22 56l369 164 164 369c5 10 13 19 25 23 22 8 47-4 54-26l298-852c0-1 1-2 1-3zM460 504l-259-115 575-201zM837 248l-201 575-115-259z",server:"M171 43c-35 0-67 14-90 38s-38 55-38 90v171c0 35 14 67 38 90s55 38 90 38h683c35 0 67-14 90-38s38-55 38-90v-171c0-35-14-67-38-90s-55-38-90-38zM171 128h683c12 0 22 5 30 13s13 18 13 30v171c0 12-5 22-13 30s-18 13-30 13h-683c-12 0-22-5-30-13s-13-18-13-30v-171c0-12 5-22 13-30s18-13 30-13zM171 555c-35 0-67 14-90 38s-38 55-38 90v171c0 35 14 67 38 90s55 38 90 38h683c35 0 67-14 90-38s38-55 38-90v-171c0-35-14-67-38-90s-55-38-90-38zM171 640h683c12 0 22 5 30 13s13 18 13 30v171c0 12-5 22-13 30s-18 13-30 13h-683c-12 0-22-5-30-13s-13-18-13-30v-171c0-12 5-22 13-30s18-13 30-13zM256 299c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43zM256 811c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43z",graphUp:"M725 299h153l-302 302-183-183c-17-17-44-17-60 0l-320 320c-17 17-17 44 0 60s44 17 60 0l290-290 183 183c17 17 44 17 60 0l333-333v153c0 24 19 43 43 43s43-19 43-43v-256c0-6-1-11-3-16s-5-10-9-14c-0-0-0-0-0-0-4-4-9-7-14-9-5-2-11-3-16-3h-256c-24 0-43 19-43 43s19 43 43 43z",copy:"M469 341c-35 0-67 14-90 38s-38 55-38 90v384c0 35 14 67 38 90s55 38 90 38h384c35 0 67-14 90-38s38-55 38-90v-384c0-35-14-67-38-90s-55-38-90-38zM469 427h384c12 0 22 5 30 13s13 18 13 30v384c0 12-5 22-13 30s-18 13-30 13h-384c-12 0-22-5-30-13s-13-18-13-30v-384c0-12 5-22 13-30s18-13 30-13zM213 597h-43c-12 0-22-5-30-13s-13-18-13-30v-384c0-12 5-22 13-30s18-13 30-13h384c12 0 22 5 30 13s13 18 13 30v43c0 24 19 43 43 43s43-19 43-43v-43c0-35-14-67-38-90s-55-38-90-38h-384c-35 0-67 14-90 38s-38 55-38 90v384c0 35 14 67 38 90s55 38 90 38h43c24 0 43-19 43-43s-19-43-43-43z",alignCenter:"M128 128h768v86h-768v-86zM298 298h428v86h-428v-86zM128 554v-84h768v84h-768zM128 896v-86h768v86h-768zM298 640h428v86h-428v-86z",alignLeft:"M128 128h768v86h-768v-86zM128 896v-86h768v86h-768zM128 554v-84h768v84h-768zM640 298v86h-512v-86h512zM640 640v86h-512v-86h512z",alignRight:"M128 128h768v86h-768v-86zM384 384v-86h512v86h-512zM128 554v-84h768v84h-768zM384 726v-86h512v86h-512zM128 896v-86h768v86h-768z",fontBold:"M576 662q28 0 46-19t18-45-18-45-46-19h-150v128h150zM426 278v128h128q26 0 45-19t19-45-19-45-45-19h-128zM666 460q92 42 92 146 0 68-45 115t-113 47h-302v-598h268q72 0 121 50t49 122-70 118z",blockOutdent:"M470 554v-84h426v84h-426zM470 384v-86h426v86h-426zM128 128h768v86h-768v-86zM128 896v-86h768v86h-768zM128 512l170-170v340zM470 726v-86h426v86h-426z",blockIndent:"M470 554v-84h426v84h-426zM470 384v-86h426v86h-426zM128 128h768v86h-768v-86zM470 726v-86h426v86h-426zM128 342l170 170-170 170v-340zM128 896v-86h768v86h-768z",fontItalic:"M426 170h342v128h-120l-144 342h94v128h-342v-128h120l144-342h-94v-128z",listBullet:"M298 214h598v84h-598v-84zM298 554v-84h598v84h-598zM298 810v-84h598v84h-598zM170 704q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zM170 192q26 0 45 18t19 46-19 46-45 18-45-18-19-46 19-46 45-18zM170 448q26 0 45 18t19 46-19 46-45 18-45-18-19-46 19-46 45-18z",listNumber:"M298 554v-84h598v84h-598zM298 810v-84h598v84h-598zM298 214h598v84h-598v-84zM86 470v-44h128v40l-78 88h78v44h-128v-40l76-88h-76zM128 342v-128h-42v-44h84v172h-42zM86 726v-44h128v172h-128v-44h84v-20h-42v-44h42v-20h-84z",fontUnderline:"M214 810h596v86h-596v-86zM512 726q-106 0-181-75t-75-181v-342h106v342q0 62 44 105t106 43 106-43 44-105v-342h106v342q0 106-75 181t-181 75z",airplay:"M213 683h-43c-12 0-22-5-30-13s-13-18-13-30v-427c0-12 5-22 13-30s18-13 30-13h683c12 0 22 5 30 13s13 18 13 30v427c0 12-5 22-13 30s-18 13-30 13h-43c-24 0-43 19-43 43s19 43 43 43h43c35 0 67-14 90-38s38-55 38-90v-427c0-35-14-67-38-90s-55-38-90-38h-683c-35 0-67 14-90 38s-38 55-38 90v427c0 35 14 67 38 90s55 38 90 38h43c24 0 43-19 43-43s-19-43-43-43zM545 613c-1-2-3-4-5-5-18-15-45-13-60 5l-213 256c-6 7-10 17-10 27 0 24 19 43 43 43h427c10 0 19-3 27-10 18-15 21-42 5-60zM512 707l122 147h-244z",bell:"M725 341c0 171 40 278 79 341h-585c39-63 79-170 79-341 0-59 24-112 62-151s92-62 151-62 112 24 151 62 62 92 62 151zM811 341c0-82-33-157-87-211s-129-87-211-87-157 33-211 87-87 129-87 211c0 261-102 343-109 349-19 13-24 39-11 59 8 12 22 19 35 19h768c24 0 43-19 43-43 0-14-7-27-18-35-8-6-110-87-110-349zM549 875c-6 10-15 17-26 20s-22 2-32-4c-7-4-12-9-15-15-12-20-38-28-58-16s-28 38-16 58c11 19 27 35 47 47 31 18 65 21 97 13s60-29 78-59c12-20 5-47-15-58s-47-5-58 15z",bellOff:"M549 875c-6 10-15 17-26 20s-22 2-32-4c-7-4-12-9-15-15-12-20-38-28-58-16s-28 38-16 58c11 19 27 35 47 47 31 18 65 21 97 13s60-29 78-59c12-20 5-47-15-58s-47-5-58 15zM811 340c-0-82-33-156-87-210-54-54-129-88-211-88-62-0-119 19-166 50-19 13-25 40-11 59s40 25 59 11c33-22 73-35 116-36 62 0 115 24 153 63 38 39 62 92 62 150-2 71 7 148 28 225 6 23 30 36 52 30s36-30 30-52c-19-69-27-139-25-201 0-0 0-0 0-1 0-0 0-0 0-0zM298 359l324 324h-403c37-61 76-163 79-324zM13 73l207 207c-5 21-7 42-6 62 0 261-102 343-109 348-19 13-24 39-11 59 8 12 22 19 35 19h580l243 243c17 17 44 17 60 0s17-44 0-60l-939-939c-17-17-44-17-60 0s-17 44 0 60z",bookmark:"M786 931c7 5 15 8 25 8 24 0 43-19 43-43v-683c0-35-14-67-38-90s-55-38-90-38h-427c-35 0-67 14-90 38s-38 55-38 90v683c-0 8 3 17 8 25 14 19 40 24 60 10l274-196zM768 813l-231-165c-15-11-35-10-50 0l-231 165v-600c0-12 5-22 13-30s18-13 30-13h427c12 0 22 5 30 13s13 18 13 30z",camera:"M1024 811v-469c0-35-14-67-38-90s-55-38-90-38h-148l-73-109c-8-12-21-19-35-19h-256c-14 0-27 7-35 19l-73 109h-148c-35 0-67 14-90 38s-38 55-38 90v469c0 35 14 67 38 90s55 38 90 38h768c35 0 67-14 90-38s38-55 38-90zM939 811c0 12-5 22-13 30s-18 13-30 13h-768c-12 0-22-5-30-13s-13-18-13-30v-469c0-12 5-22 13-30s18-13 30-13h171c15 0 28-7 35-19l73-109h210l73 109c8 12 22 19 35 19h171c12 0 22 5 30 13s13 18 13 30zM725 555c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM640 555c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90z",check:"M823 226l-439 439-183-183c-17-17-44-17-60 0s-17 44 0 60l213 213c17 17 44 17 60 0l469-469c17-17 17-44 0-60s-44-17-60 0z",chevronDown:"M226 414l256 256c17 17 44 17 60 0l256-256c17-17 17-44 0-60s-44-17-60 0l-226 226-226-226c-17-17-44-17-60 0s-17 44 0 60z",chevronLeft:"M670 738l-226-226 226-226c17-17 17-44 0-60s-44-17-60 0l-256 256c-17 17-17 44 0 60l256 256c17 17 44 17 60 0s17-44 0-60z",chevronRight:"M414 798l256-256c17-17 17-44 0-60l-256-256c-17-17-44-17-60 0s-17 44 0 60l226 226-226 226c-17 17-17 44 0 60s44 17 60 0z",chevronUp:"M798 610l-256-256c-17-17-44-17-60 0l-256 256c-17 17-17 44 0 60s44 17 60 0l226-226 226 226c17 17 44 17 60 0s17-44 0-60z",code:"M713 798l256-256c17-17 17-44 0-60l-256-256c-17-17-44-17-60 0s-17 44 0 60l226 226-226 226c-17 17-17 44 0 60s44 17 60 0zM311 226l-256 256c-17 17-17 44 0 60l256 256c17 17 44 17 60 0s17-44 0-60l-226-226 226-226c17-17 17-44 0-60s-44-17-60 0z",undo:"M896 853v-299c0-59-24-112-62-151s-92-62-151-62h-409l141-141c17-17 17-44 0-60s-44-17-60 0l-213 213c-4 4-7 9-9 14s-3 11-3 16 1 11 3 16c2 5 5 10 9 14l213 213c17 17 44 17 60 0s17-44 0-60l-141-141h409c35 0 67 14 90 38s38 55 38 90v299c0 24 19 43 43 43s43-19 43-43z",redo:"M213 853v-299c0-35 14-67 38-90s55-38 90-38h409l-141 141c-17 17-17 44 0 60s44 17 60 0l213-213c4-4 7-9 9-14 4-10 4-22 0-33-2-5-5-10-9-14l-213-213c-17-17-44-17-60 0s-17 44 0 60l141 141h-409c-59 0-112 24-151 62s-62 92-62 151v299c0 24 19 43 43 43s43-19 43-43z",crop:"M302 302l381-3c11 0 22 5 30 13s13 18 13 30v384h-384c-12 0-22-5-30-13s-13-18-13-30zM43 304l174-1-3 380c0 36 14 68 38 91s55 38 90 38h384v171c0 24 19 43 43 43s43-19 43-43v-171h171c24 0 43-19 43-43s-19-43-43-43h-171v-384c0-35-14-67-38-90s-55-38-91-38l-380 3 1-174c0-24-19-43-42-43s-43 19-43 42l-2 175-175 2c-24 0-42 19-42 43s19 42 43 42z",database:"M171 213c0 0 0-4 9-12 10-10 29-21 56-31 64-25 163-42 277-42s213 17 277 42c27 11 45 22 56 31 9 8 9 12 9 12 0 0-0 4-9 12-10 10-29 21-56 31-64 25-163 42-277 42s-213-17-277-42c-27-11-45-22-56-31-9-8-9-12-9-12zM853 620v191c-2 4-4 8-9 12-10 10-29 21-56 31-64 25-163 42-276 42s-213-17-276-42c-27-10-45-21-56-31-5-5-8-8-8-10l-0-193c11 5 22 10 33 15 77 30 187 48 307 48s231-18 307-48c12-5 23-10 34-15zM853 321v190c0 0 0 0 0 1-2 4-4 8-9 12-10 10-29 21-56 31-64 25-163 42-276 42s-213-17-276-42c-27-10-45-21-56-31-5-5-8-8-8-10-0-2-0-3-0-5l-0-188c11 5 22 10 34 15 77 30 187 48 308 48s231-18 308-48c12-5 23-10 34-15zM85 213v597c0 2 0 5 0 7 2 28 18 51 37 68 21 19 50 35 82 48 77 30 187 48 307 48s231-18 307-48c32-13 61-28 82-48 18-17 34-40 37-68 0-2 0-5 0-7v-597c0-2-0-5-0-7-2-28-18-51-36-68-21-20-50-35-82-48-77-30-187-48-308-48s-231 18-308 48c-32 13-61 28-82 48-18 17-34 40-36 68-0 2-0 5-0 7z",download:"M853 640v171c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-171c0-24-19-43-43-43s-43 19-43 43v171c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-171c0-24-19-43-43-43s-43 19-43 43zM555 537v-409c0-24-19-43-43-43s-43 19-43 43v409l-141-141c-17-17-44-17-60 0s-17 44 0 60l213 213c4 4 9 7 14 9s11 3 16 3c11 0 22-4 30-13l213-213c17-17 17-44 0-60s-44-17-60 0z",downloadCloud:"M469 512v281l-98-98c-17-17-44-17-60 0s-17 44 0 60l171 171c4 4 9 7 14 9 10 4 22 4 33 0 5-2 10-5 14-9l171-171c17-17 17-44 0-60s-44-17-60 0l-98 98v-281c0-24-19-43-43-43s-43 19-43 43zM915 807c58-41 94-101 105-165s-2-133-43-191c-35-50-85-84-140-99-22-6-46-10-69-10h-22c-31-88-91-158-167-203-85-50-188-68-291-41s-185 92-235 176-68 188-41 291c16 62 46 116 85 159 16 17 43 19 60 3s19-43 3-60c-30-33-53-75-65-123-21-80-7-160 32-226s103-117 183-137 160-7 226 32 117 103 137 183c5 19 22 32 41 32h54c16 0 31 2 47 6 37 10 70 33 93 66 27 39 36 84 29 127s-31 83-70 110c-19 14-24 40-10 59s40 24 59 10z",externalLink:"M725 555v256c0 12-5 22-13 30s-18 13-30 13h-469c-12 0-22-5-30-13s-13-18-13-30v-469c0-12 5-22 13-30s18-13 30-13h256c24 0 43-19 43-43s-19-43-43-43h-256c-35 0-67 14-90 38s-38 55-38 90v469c0 35 14 67 38 90s55 38 90 38h469c35 0 67-14 90-38s38-55 38-90v-256c0-24-19-43-43-43s-43 19-43 43zM457 627l397-397v153c0 24 19 43 43 43s43-19 43-43v-256c0-6-1-11-3-16s-5-10-9-14c-0-0-0-0-0-0-4-4-9-7-14-9-5-2-11-3-16-3h-256c-24 0-43 19-43 43s19 43 43 43h153l-397 397c-17 17-17 44 0 60s44 17 60 0z",eye:"M5 493c-6 12-6 26 0 38 0 0 17 34 48 79 19 28 44 61 75 95 38 42 86 85 142 119 68 42 150 72 243 72s175-30 243-72c56-35 103-78 142-119 31-34 56-67 75-95 31-45 48-79 48-79 6-12 6-26 0-38 0 0-17-34-48-79-19-28-44-61-75-95-38-42-86-85-142-119-68-42-150-72-243-72s-175 30-243 72c-56 35-103 78-142 119-31 34-56 67-75 95-31 45-48 79-48 79zM91 512c7-12 17-29 31-49 17-25 40-55 68-85 34-38 76-75 123-104 58-36 124-59 198-59s141 24 198 59c48 30 89 67 123 104 27 30 50 60 68 85 14 20 24 37 31 49-7 12-17 29-31 49-17 25-40 55-68 85-34 38-76 75-123 104-58 36-124 59-198 59s-141-24-198-59c-48-30-89-67-123-104-27-30-50-60-68-85-14-20-24-37-31-49zM683 512c0-47-19-90-50-121s-74-50-121-50-90 19-121 50-50 74-50 121 19 90 50 121 74 50 121 50 90-19 121-50 50-74 50-121zM597 512c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60 10-45 25-60 37-25 60-25 45 10 60 25 25 37 25 60z",eyeOff:"M432 222c28-6 55-9 79-9 75 0 141 24 199 59 48 30 89 67 123 104 27 30 50 60 68 85 14 20 24 37 31 49-23 41-49 78-76 108-15 18-13 45 5 60s45 13 60-5c35-41 69-90 97-144 6-12 7-26 1-39 0 0-17-34-48-79-19-28-44-61-75-95-38-42-86-85-142-119-68-42-150-72-243-72-31-0-66 3-100 11-23 5-37 28-32 51s28 37 51 32zM428 488l108 108c-8 3-16 4-24 4-22 1-44-7-61-23s-26-38-27-59c-0-10 1-20 4-30zM255 316l109 109c-19 29-27 63-26 97 2 44 20 87 54 119s79 47 122 46c30-1 59-10 85-26l99 99c-59 34-124 51-187 52-74 0-140-24-198-59-48-30-89-67-123-104-27-30-50-60-68-85-14-20-24-37-31-49 45-78 101-144 164-197zM13 73l182 182c-74 63-139 143-190 237-6 12-7 26-1 39 0 0 17 34 48 79 19 28 44 61 75 95 38 42 86 85 142 119 68 42 150 72 244 72 85-1 171-26 248-75l191 191c17 17 44 17 60 0s17-44 0-60l-379-379c-0-0-0-0-0-0l-180-180c-0-0-1-1-1-1l-379-379c-17-17-44-17-60 0s-17 44 0 60z",fastForward:"M597 723v-423l272 211zM128 723v-423l272 211zM112 844l384-299c11-8 16-21 16-33v298c0 24 19 43 43 43 10 0 19-3 26-9l384-299c19-14 22-41 7-60-2-3-5-6-7-7l-384-299c-19-14-45-11-60 7-6 8-9 17-9 26v298c-0-9-3-18-9-26-2-3-5-6-7-7l-384-299c-19-14-45-11-60 7-6 8-9 17-9 26v597c0 24 19 43 43 43 10 0 19-3 26-9z",file:"M750 341h-153v-153zM883 354l-299-299c-4-4-9-7-14-9s-11-3-16-3h-299c-35 0-67 14-90 38s-38 55-38 90v683c0 35 14 67 38 90s55 38 90 38h512c35 0 67-14 90-38s38-55 38-90v-469c0-12-5-22-13-30zM512 128v256c0 24 19 43 43 43h256v427c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22-5-30-13s-13-18-13-30v-683c0-12 5-22 13-30s18-13 30-13z",fileMinus:"M750 299h-110v-110zM883 311l-256-256c-4-4-9-7-14-9s-11-3-16-3h-341c-35 0-67 14-90 38s-38 55-38 90v683c0 35 14 67 38 90s55 38 90 38h512c35 0 67-14 90-38s38-55 38-90v-512c0-12-5-22-13-30zM555 128v213c0 24 19 43 43 43h213v469c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22-5-30-13s-13-18-13-30v-683c0-12 5-22 13-30s18-13 30-13zM384 683h256c24 0 43-19 43-43s-19-43-43-43h-256c-24 0-43 19-43 43s19 43 43 43z",filePlus:"M750 299h-110v-110zM883 311l-256-256c-4-4-9-7-14-9s-11-3-16-3h-341c-35 0-67 14-90 38s-38 55-38 90v683c0 35 14 67 38 90s55 38 90 38h512c35 0 67-14 90-38s38-55 38-90v-512c0-12-5-22-13-30zM555 128v213c0 24 19 43 43 43h213v469c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22-5-30-13s-13-18-13-30v-683c0-12 5-22 13-30s18-13 30-13zM384 683h85v85c0 24 19 43 43 43s43-19 43-43v-85h85c24 0 43-19 43-43s-19-43-43-43h-85v-85c0-24-19-43-43-43s-43 19-43 43v85h-85c-24 0-43 19-43 43s19 43 43 43z",fileText:"M750 299h-110v-110zM883 311l-256-256c-4-4-9-7-14-9s-11-3-16-3h-341c-35 0-67 14-90 38s-38 55-38 90v683c0 35 14 67 38 90s55 38 90 38h512c35 0 67-14 90-38s38-55 38-90v-512c0-12-5-22-13-30zM555 128v213c0 24 19 43 43 43h213v469c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22-5-30-13s-13-18-13-30v-683c0-12 5-22 13-30s18-13 30-13zM683 512h-341c-24 0-43 19-43 43s19 43 43 43h341c24 0 43-19 43-43s-19-43-43-43zM683 683h-341c-24 0-43 19-43 43s19 43 43 43h341c24 0 43-19 43-43s-19-43-43-43zM427 341h-85c-24 0-43 19-43 43s19 43 43 43h85c24 0 43-19 43-43s-19-43-43-43z",filter:"M847 171l-282 333c-6 7-10 17-10 28v295l-85-43v-253c0-10-3-19-10-28l-282-333zM939 85h-853c-24 0-43 19-43 43 0 11 4 20 10 28l331 392v263c0 17 9 31 24 38l171 85c21 11 47 2 57-19 3-6 5-13 4-19v-349l331-392c15-18 13-45-5-60-8-7-18-10-28-10z",flag:"M213 572v-421c19-9 58-23 128-23 55 0 101 18 155 40 53 21 113 46 186 46 55 0 97-7 128-17v421c-19 9-58 23-128 23-55 0-101-18-155-40-53-21-113-46-186-46-55 0-97 7-128 17zM213 939v-276c19-9 58-23 128-23 55 0 101 18 155 40 53 21 113 46 186 46 139 0 192-47 201-55 8-8 13-19 13-30v-512c0-24-19-43-43-43-11 0-22 4-29 12-4 3-42 31-141 31-55 0-101-18-155-40-53-21-113-46-186-46-139 0-192 47-201 55-8 8-13 19-13 30v811c0 24 19 43 43 43s43-19 43-43z",folder:"M981 811v-469c0-35-14-67-38-90s-55-38-90-38h-361l-73-109c-8-12-21-19-35-19h-213c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h683c35 0 67-14 90-38s38-55 38-90zM896 811c0 12-5 22-13 30s-18 13-30 13h-683c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h191l73 109c8 12 22 19 35 19h384c12 0 22 5 30 13s13 18 13 30z",folderMinus:"M981 811v-469c0-35-14-67-38-90s-55-38-90-38h-361l-73-109c-8-12-21-19-35-19h-213c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h683c35 0 67-14 90-38s38-55 38-90zM896 811c0 12-5 22-13 30s-18 13-30 13h-683c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h191l73 109c8 12 22 19 35 19h384c12 0 22 5 30 13s13 18 13 30zM384 640h256c24 0 43-19 43-43s-19-43-43-43h-256c-24 0-43 19-43 43s19 43 43 43z",folderPlus:"M981 811v-469c0-35-14-67-38-90s-55-38-90-38h-361l-73-109c-8-12-21-19-35-19h-213c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h683c35 0 67-14 90-38s38-55 38-90zM896 811c0 12-5 22-13 30s-18 13-30 13h-683c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h191l73 109c8 12 22 19 35 19h384c12 0 22 5 30 13s13 18 13 30zM384 640h85v85c0 24 19 43 43 43s43-19 43-43v-85h85c24 0 43-19 43-43s-19-43-43-43h-85v-85c0-24-19-43-43-43s-43 19-43 43v85h-85c-24 0-43 19-43 43s19 43 43 43z",help:"M981 512c0-130-53-247-137-332s-202-137-332-137-247 53-332 137-137 202-137 332 53 247 137 332 202 137 332 137 247-53 332-137 137-202 137-332zM896 512c0 106-43 202-112 272s-165 112-272 112-202-43-272-112-112-165-112-272 43-202 112-272 165-112 272-112 202 43 272 112 112 165 112 272zM428 398c8-22 24-39 44-49s43-11 65-4c20 7 35 20 45 37 8 13 12 28 12 44 0 7-2 13-5 20-3 7-9 14-16 21-30 30-78 47-78 47-22 7-34 32-27 54s32 34 54 27c0 0 66-22 111-67 12-12 23-26 32-43 9-17 14-37 14-58-0-31-9-61-24-87-20-33-51-60-90-74-44-16-91-12-130 7s-72 53-87 97c-8 22 4 47 26 54s47-4 54-26zM512 768c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43z",home:"M102 350c-10 8-16 20-16 34v469c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-469c-0-13-6-25-16-34l-384-299c-15-12-37-12-52 0zM683 896v-384c0-24-19-43-43-43h-256c-24 0-43 19-43 43v384h-128c-12 0-22-5-30-13s-13-18-13-30v-448l341-265 341 265v448c0 12-5 22-13 30s-18 13-30 13zM427 896v-341h171v341z",image:"M213 85c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-597c0-35-14-67-38-90s-55-38-90-38zM469 363c0-29-12-56-31-75s-46-31-75-31-56 12-75 31-31 46-31 75 12 56 31 75 46 31 75 31 56-12 75-31 31-46 31-75zM384 363c0 6-2 11-6 15s-9 6-15 6-11-2-15-6-6-9-6-15 2-11 6-15 9-6 15-6 11 2 15 6 6 9 6 15zM316 853l366-366 171 171v153c0 12-5 22-13 30s-18 13-30 13zM853 537l-141-141c-17-17-44-17-60 0l-454 454c-6-2-11-6-15-10-8-8-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h597c12 0 22 5 30 13s13 18 13 30z",layers:"M512 133l331 166-331 166-331-166zM493 47l-427 213c-21 11-30 36-19 57 4 9 11 15 19 19l427 213c12 6 26 6 38 0l427-213c21-11 30-36 19-57-4-9-11-15-19-19l-427-213c-12-6-26-6-38 0zM66 763l427 213c12 6 26 6 38 0l427-213c21-11 30-36 19-57s-36-30-57-19l-408 204-408-204c-21-11-47-2-57 19s-2 47 19 57zM66 550l427 213c12 6 26 6 38 0l427-213c21-11 30-36 19-57s-36-30-57-19l-408 204-408-204c-21-11-47-2-57 19s-2 47 19 57z",link:"M392 580c42 57 104 91 168 100s133-6 190-48c10-8 20-16 28-24l128-128c50-51 73-117 72-183s-27-131-78-180c-50-48-115-72-179-72-64 0-127 24-177 72l-74 73c-17 17-17 44-0 60s44 17 60 0l73-72c33-32 75-48 118-48 43-0 86 16 119 48 34 33 51 76 52 120s-15 88-47 121l-128 128c-5 5-11 11-18 16-38 28-83 38-127 32s-84-29-112-67c-14-19-41-23-60-9s-23 41-9 60zM632 444c-42-57-104-91-168-100s-133 6-190 48c-10 8-20 16-28 24l-128 128c-50 51-73 117-72 183s27 131 78 180c50 48 115 72 179 72 64-0 127-24 177-72l74-74c17-17 17-44 0-60s-44-17-60 0l-72 72c-33 32-75 48-118 48-43 0-86-16-119-48-34-33-51-76-52-120s15-88 47-121l128-128c5-5 11-11 18-16 38-28 83-38 127-32s84 29 112 67c14 19 41 23 60 9s23-41 9-60z",lock:"M213 512h597c12 0 22 5 30 13s13 18 13 30v299c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-299c0-12 5-22 13-30s18-13 30-13zM768 427v-128c0-71-29-135-75-181s-110-75-181-75-135 29-181 75-75 110-75 181v128h-43c-35 0-67 14-90 38s-38 55-38 90v299c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-299c0-35-14-67-38-90s-55-38-90-38zM341 427v-128c0-47 19-90 50-121s74-50 121-50 90 19 121 50 50 74 50 121v128z",logIn:"M640 171h171c12 0 22 5 30 13s13 18 13 30v597c0 12-5 22-13 30s-18 13-30 13h-171c-24 0-43 19-43 43s19 43 43 43h171c35 0 67-14 90-38s38-55 38-90v-597c0-35-14-67-38-90s-55-38-90-38h-171c-24 0-43 19-43 43s19 43 43 43zM537 469h-409c-24 0-43 19-43 43s19 43 43 43h409l-141 141c-17 17-17 44 0 60s44 17 60 0l213-213c4-4 7-9 9-14s3-11 3-16c0-6-1-11-3-16-2-5-5-10-9-14l-213-213c-17-17-44-17-60 0s-17 44 0 60z",logOut:"M384 853h-171c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h171c24 0 43-19 43-43s-19-43-43-43h-171c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h171c24 0 43-19 43-43s-19-43-43-43zM793 469h-409c-24 0-43 19-43 43s19 43 43 43h409l-141 141c-17 17-17 44 0 60s44 17 60 0l213-213c4-4 7-9 9-14 6-15 3-34-9-47l-213-213c-17-17-44-17-60 0s-17 44 0 60z",map:"M299 159v584l-213 122v-584zM725 865v-584l213-122v584zM663 976c3 2 7 3 11 4 1 0 3 1 4 1s3 0 4 0c-0 0-0 0-0 0s0 0 0 0c7 0 15-2 21-6l1-0 298-170c14-8 21-22 21-37v-683c0-24-19-43-43-43-8 0-15 2-21 6l-279 159-320-160c-4-2-7-3-11-4-1-0-3-1-4-1s-3-0-4-0c0 0 0 0 0 0s0 0-0 0c-7 0-15 2-21 6l-1 0-298 170c-14 8-21 22-22 37v683c0 24 19 43 43 43 8 0 15-2 21-6l279-159zM640 282v587l-256-128v-587z",mapPin:"M939 427c0-118-48-225-125-302s-184-125-302-125-225 48-302 125-125 184-125 302c0 24 2 48 6 72 12 66 38 128 72 184 117 196 325 334 325 334 14 9 33 10 47 0 0 0 208-138 325-334 33-56 60-118 72-184 4-23 6-47 6-72zM853 427c0 19-2 38-5 57-9 53-31 106-61 156-82 137-215 245-272 288-60-39-196-148-279-288-30-50-52-102-61-156-3-19-5-38-5-57 0-94 38-180 100-241s147-100 241-100 180 38 241 100 100 147 100 241zM683 427c0-47-19-90-50-121s-74-50-121-50-90 19-121 50-50 74-50 121 19 90 50 121 74 50 121 50 90-19 121-50 50-74 50-121zM597 427c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60 10-45 25-60 37-25 60-25 45 10 60 25 25 37 25 60z",maximize:"M341 85h-128c-35 0-67 14-90 38s-38 55-38 90v128c0 24 19 43 43 43s43-19 43-43v-128c0-12 5-22 13-30s18-13 30-13h128c24 0 43-19 43-43s-19-43-43-43zM939 341v-128c0-35-14-67-38-90s-55-38-90-38h-128c-24 0-43 19-43 43s19 43 43 43h128c12 0 22 5 30 13s13 18 13 30v128c0 24 19 43 43 43s43-19 43-43zM683 939h128c35 0 67-14 90-38s38-55 38-90v-128c0-24-19-43-43-43s-43 19-43 43v128c0 12-5 22-13 30s-18 13-30 13h-128c-24 0-43 19-43 43s19 43 43 43zM85 683v128c0 35 14 67 38 90s55 38 90 38h128c24 0 43-19 43-43s-19-43-43-43h-128c-12 0-22-5-30-13s-13-18-13-30v-128c0-24-19-43-43-43s-43 19-43 43z",messageCircle:"M939 491v-21c0-1-0-2-0-2-6-100-47-190-113-258-68-71-163-117-269-123-1-0-2-0-2-0h-21c-60-1-123 13-182 43-52 26-98 63-134 108-56 70-90 158-90 254-1 54 11 111 35 165l-76 227c-3 8-3 18 0 27 7 22 32 34 54 27l227-76c49 22 106 35 165 35 59-0 116-13 168-37 82-37 151-101 194-187 27-53 43-116 43-182zM853 491c0 52-12 101-34 142-34 68-89 119-153 148-41 19-87 29-133 29-52 0-101-12-142-34-11-6-23-6-33-3l-162 54 54-162c4-11 3-23-2-33-24-47-34-96-34-142 0-76 26-146 71-201 29-35 65-65 106-86 47-24 96-34 142-34h19c84 5 158 41 212 97 51 53 84 124 89 203z",mic:"M512 85c24 0 45 10 60 25s25 37 25 60v341c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60v-341c0-24 10-45 25-60s37-25 60-25zM512 0c-47 0-90 19-121 50s-50 74-50 121v341c0 47 19 90 50 121s74 50 121 50 90-19 121-50 50-74 50-121v-341c0-47-19-90-50-121s-74-50-121-50zM341 1024h341c24 0 43-19 43-43s-19-43-43-43h-128v-88c77-10 146-45 199-97 62-62 100-147 100-241v-85c0-24-19-43-43-43s-43 19-43 43v85c0 71-29 135-75 181s-110 75-181 75-135-29-181-75-75-110-75-181v-85c0-24-19-43-43-43s-43 19-43 43v85c0 94 38 180 100 241 52 52 121 88 199 97v88h-128c-24 0-43 19-43 43s19 43 43 43z",micOff:"M534 594c-7 2-14 3-22 3-24-0-45-10-60-25-15-15-25-37-25-60v-25zM683 399v-228c0-47-19-90-50-121s-74-50-121-50c-43-0-83 16-113 43-27 24-47 57-54 94-5 23 10 46 33 50s46-10 50-33c4-19 14-35 27-47 15-13 34-21 56-21 24 0 45 10 61 25 15 16 25 37 25 60v228c0 24 19 43 43 43s43-19 43-43zM768 427v85c0 16-1 32-4 45-4 23 11 45 34 50s45-11 50-34c3-19 5-39 5-60v-85c0-24-19-43-43-43s-43 19-43 43zM341 1024h341c24 0 43-19 43-43s-19-43-43-43h-128v-86c62-8 119-31 168-69l229 229c17 17 44 17 60 0s17-44 0-60l-249-249c-2-3-4-7-7-9-3-3-6-5-9-7l-674-674c-17-17-44-17-60 0s-17 44 0 60l329 329v110c0 47 19 90 50 121s74 50 121 50c32-0 61-9 86-24l63 63c-41 30-89 46-137 48-4-1-8-2-13-2-4 0-9 1-13 2-60-3-120-27-167-73-49-48-75-111-77-175-0-5-0-10-0-10v-86c0-24-19-43-43-43s-43 19-43 43v85c0 6 0 13 0 13 3 85 37 169 102 234 55 54 125 86 196 95v86h-128c-24 0-43 19-43 43s19 43 43 43z",minimize:"M299 128v128c0 12-5 22-13 30s-18 13-30 13h-128c-24 0-43 19-43 43s19 43 43 43h128c35 0 67-14 90-38s38-55 38-90v-128c0-24-19-43-43-43s-43 19-43 43zM896 299h-128c-12 0-22-5-30-13s-13-18-13-30v-128c0-24-19-43-43-43s-43 19-43 43v128c0 35 14 67 38 90s55 38 90 38h128c24 0 43-19 43-43s-19-43-43-43zM725 896v-128c0-12 5-22 13-30s18-13 30-13h128c24 0 43-19 43-43s-19-43-43-43h-128c-35 0-67 14-90 38s-38 55-38 90v128c0 24 19 43 43 43s43-19 43-43zM128 725h128c12 0 22 5 30 13s13 18 13 30v128c0 24 19 43 43 43s43-19 43-43v-128c0-35-14-67-38-90s-55-38-90-38h-128c-24 0-43 19-43 43s19 43 43 43z",minus:"M213 555h597c24 0 43-19 43-43s-19-43-43-43h-597c-24 0-43 19-43 43s19 43 43 43z",moon:"M938 550c1-10-2-20-8-29-14-19-41-23-60-9-41 30-88 46-136 50-58 4-118-12-169-49-57-42-91-103-101-168s5-133 47-190c6-8 9-19 8-29-2-23-23-41-47-38-96 9-184 50-252 113-74 69-124 164-134 272-11 117 27 228 97 312s172 141 289 152 228-27 312-97 141-172 152-289zM835 626c-21 58-57 109-103 147-67 56-156 86-250 77s-175-55-231-122-86-156-77-250c8-87 48-163 107-218 33-31 73-55 117-71-19 54-25 111-16 166 13 86 59 168 135 224 67 50 147 71 225 66 32-2 64-9 94-20z",more:"M597 512c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60zM896 512c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60zM299 512c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60z",moreVertical:"M597 512c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60zM597 213c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60zM597 811c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60z",mousePointer:"M207 207l524 218-208 71c-12 4-22 14-27 27l-71 208zM555 615l225 225c17 17 44 17 60 0s17-44 0-60l-225-225 250-85c22-8 34-32 27-54-4-12-13-21-24-26l-724-302c-22-9-47 1-56 23-5 11-4 23 0 33l302 724c9 22 34 32 56 23 12-5 20-14 24-26z",move:"M469 188v281h-281l55-55c17-17 17-44 0-60s-44-17-60 0l-128 128c-8 8-13 18-13 30 0 6 1 11 3 16s5 10 9 14l128 128c17 17 44 17 60 0s17-44 0-60l-55-55h281v281l-55-55c-17-17-44-17-60 0s-17 44 0 60l128 128c4 4 9 7 14 9s11 3 16 3c6 0 11-1 16-3 5-2 10-5 14-9l128-128c17-17 17-44 0-60s-44-17-60 0l-55 55v-281h281l-55 55c-17 17-17 44 0 60s44 17 60 0l128-128c4-4 7-9 9-14 6-15 3-34-9-47l-128-128c-17-17-44-17-60 0s-17 44 0 60l55 55h-281v-281l55 55c17 17 44 17 60 0s17-44 0-60l-128-128c-4-4-9-7-14-9-10-4-22-4-33 0-5 2-10 5-14 9l-128 128c-17 17-17 44 0 60s44 17 60 0z",music:"M341 768c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60 10-45 25-60 37-25 60-25 45 10 60 25 25 37 25 60zM939 683v-555c0-2-0-5-1-7-4-23-26-39-49-35l-512 85c-20 3-36 21-36 42v407c-25-15-54-23-85-23-47 0-90 19-121 50s-50 74-50 121 19 90 50 121 74 50 121 50 90-19 121-50 50-74 50-121v-519l427-71v356c-25-15-54-23-85-23-47 0-90 19-121 50s-50 74-50 121 19 90 50 121 74 50 121 50 90-19 121-50 50-74 50-121zM853 683c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60 10-45 25-60 37-25 60-25 45 10 60 25 25 37 25 60z",paperclip:"M885 441l-392 392c-42 42-96 63-151 63s-109-21-151-63-63-96-63-151 21-109 63-151l392-392c25-25 58-38 91-38s66 13 91 38 38 58 38 91-13 66-38 91l-393 392c-8 8-19 13-30 13s-22-4-30-13-13-19-13-30 4-22 13-30l362-362c17-17 17-44 0-60s-44-17-60-0l-362 362c-25 25-38 58-38 91s13 66 38 91 58 38 91 38 66-13 91-38l393-392c42-42 63-96 63-151s-21-109-63-151-96-63-151-63-109 21-151 63l-392 392c-58 58-88 135-88 211s29 153 88 211 135 88 211 88 153-29 211-88l392-392c17-17 17-44 0-60s-44-17-60 0z",pause:"M256 128c-24 0-43 19-43 43v683c0 24 19 43 43 43h171c24 0 43-19 43-43v-683c0-24-19-43-43-43zM299 213h85v597h-85zM597 128c-24 0-43 19-43 43v683c0 24 19 43 43 43h171c24 0 43-19 43-43v-683c0-24-19-43-43-43zM640 213h85v597h-85z",play:"M236 92c-7-4-15-7-23-7-24 0-43 19-43 43v768c-0 8 2 16 7 23 13 20 39 26 59 13l597-384c5-3 9-7 13-13 13-20 7-46-13-59zM256 206l476 306-476 306z",plus:"M213 555h256v256c0 24 19 43 43 43s43-19 43-43v-256h256c24 0 43-19 43-43s-19-43-43-43h-256v-256c0-24-19-43-43-43s-43 19-43 43v256h-256c-24 0-43 19-43 43s19 43 43 43z",refresh:"M190 398c31-89 96-157 175-194s172-45 261-14c51 18 94 46 127 80l121 113h-148c-24 0-43 19-43 43s19 43 43 43h256c0 0 0 0 1 0 6-0 11-1 16-3 5-2 10-5 14-10 1-1 1-1 2-2 3-4 6-8 7-12s3-9 3-14c0-1 0-1 0-2v-256c0-24-19-43-43-43s-43 19-43 43v157l-125-117c-42-43-97-79-160-101-111-39-228-30-326 17s-179 132-218 243c-8 22 4 47 26 54s47-4 54-26zM85 696l126 118c82 82 192 124 301 124s218-42 302-125c47-47 81-103 101-160 8-22-4-47-26-54s-47 4-54 26c-15 45-42 89-80 127-67 67-154 100-241 100s-175-33-242-101l-119-112h148c24 0 43-19 43-43s-19-43-43-43h-256c-0 0-0 0-1 0-6 0-11 1-16 3-5 2-10 5-14 10-1 1-1 1-2 2-3 4-6 8-7 12s-3 9-3 14c-0 1-0 1-0 2v256c0 24 19 43 43 43s43-19 43-43z",rewind:"M427 723l-272-211 272-211zM912 844c7 6 16 9 26 9 24 0 43-19 43-43v-597c0-9-3-18-9-26-14-19-41-22-60-7l-384 299c-3 2-5 5-7 7-6 8-9 17-9 26v-298c0-9-3-18-9-26-14-19-41-22-60-7l-384 299c-3 2-5 5-7 7-14 19-11 45 7 60l384 299c7 6 16 9 26 9 24 0 43-19 43-43v-298c0 13 6 25 16 33zM896 723l-272-211 272-211z",settings:"M683 512c0-47-19-90-50-121s-74-50-121-50-90 19-121 50-50 74-50 121 19 90 50 121 74 50 121 50 90-19 121-50 50-74 50-121zM597 512c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60 10-45 25-60 37-25 60-25 45 10 60 25 25 37 25 60zM867 657c2-4 5-8 8-11 5-4 11-6 17-6h4c35 0 67-14 90-38s38-55 38-90-14-67-38-90-55-38-90-38h-7c-5-0-9-1-13-3-5-3-10-7-12-13-0-1-0-3-0-4-1-2-2-5-2-7 1-14 3-19 7-23l3-3c25-25 37-58 37-91s-13-66-38-91c-25-25-58-37-91-37s-66 13-90 38l-2 2c-4 3-8 6-12 7-6 2-12 1-19-1-4-2-8-5-11-8-4-5-6-11-6-17v-4c0-35-14-67-38-90s-55-38-90-38-67 14-90 38-38 55-38 90v7c-0 5-1 9-3 13-3 5-7 10-13 12-1 0-3 0-4 0-2 1-5 2-7 2-14-1-19-3-23-7l-3-3c-25-25-58-37-91-37s-65 13-91 38c-25 25-37 58-37 91s13 66 38 90l2 2c3 4 6 8 7 12 2 6 1 12-1 19-0 1-1 1-1 2-2 5-5 9-8 12-5 4-11 7-16 7h-4c-35 0-67 14-90 38s-38 55-38 91 14 67 38 90 55 38 90 38h7c5 0 9 1 13 3 5 3 10 7 13 14 1 2 2 5 2 7-1 14-3 19-7 23l-3 3c-25 25-37 58-37 91s13 66 38 91c25 25 58 37 91 37s66-13 90-38l2-2c4-3 8-6 12-7 6-2 12-1 19 1 1 0 1 1 2 1 5 2 9 5 12 8 4 5 7 11 7 16v4c0 35 14 67 38 90s55 38 90 38 67-14 90-38 38-55 38-90v-7c0-5 1-9 3-13 3-5 7-10 14-13 2-1 5-2 7-2 14 1 19 3 23 7l3 3c25 25 58 37 91 37s66-13 91-38c25-25 37-58 37-91s-13-66-38-90l-2-2c-3-4-6-8-7-12-2-6-1-12 1-19zM785 397c-1-9-2-13-3-16v3c0 2 0 4 0 5 1 3 2 5 3 8 0 4 0 4 0 4 11 25 29 44 52 56 16 8 33 13 52 13h8c12 0 22 5 30 13s13 18 13 30-5 22-13 30-18 13-30 13h-4c-27 0-52 10-71 26-14 11-25 26-32 42-11 25-12 52-5 76 5 18 15 35 28 48l3 3c8 8 13 19 13 30s-4 22-12 30c-8 8-19 13-30 13s-22-4-30-12l-3-3c-20-19-44-30-70-32-19-2-38 1-55 9-25 11-44 29-55 51-8 16-13 33-13 52v8c0 12-5 22-13 30s-18 12-30 12-22-5-30-13-13-18-13-30v-4c-1-28-11-53-27-72-12-14-28-25-45-32-25-11-51-12-75-5-18 5-35 15-48 28l-3 3c-8 8-19 13-30 13s-22-4-30-12c-8-8-13-19-13-30s4-22 12-30l3-3c19-20 30-44 32-70 2-19-1-38-9-55-11-25-29-44-51-55-16-8-33-13-52-13l-8 0c-12 0-22-5-30-13s-13-18-13-30 5-22 13-30 18-13 30-13h4c28-1 53-11 72-27 14-12 25-28 32-45 11-25 12-51 5-75-5-18-15-35-28-48l-3-3c-8-8-13-19-13-30s4-22 12-30c8-8 19-13 30-13s22 4 30 12l3 3c20 19 44 30 70 32 16 1 32-1 47-6 4-1 8-2 11-3-1 0-3 0-4 0-9 1-13 2-16 3h3c2 0 4-0 5-0 3-1 5-2 8-3 4-0 4-0 4-0 25-11 44-29 56-52 8-16 13-33 13-52v-8c0-12 5-22 13-30s18-13 30-13 22 5 30 13 13 18 13 30v4c0 27 10 52 26 71 11 14 26 25 42 32 25 11 51 12 76 5 18-5 35-15 48-28l3-3c8-8 19-13 30-13s22 4 30 12c8 8 13 19 13 30s-4 22-12 30l-3 3c-19 20-30 44-32 70-1 16 1 32 6 47 1 4 2 8 3 11-0-1-0-3-0-4z",share:"M128 512v341c0 35 14 67 38 90s55 38 90 38h512c35 0 67-14 90-38s38-55 38-90v-341c0-24-19-43-43-43s-43 19-43 43v341c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22-5-30-13s-13-18-13-30v-341c0-24-19-43-43-43s-43 19-43 43zM469 188v452c0 24 19 43 43 43s43-19 43-43v-452l98 98c17 17 44 17 60 0s17-44 0-60l-171-171c-4-4-9-7-14-9-10-4-22-4-33 0-5 2-10 5-14 9l-171 171c-17 17-17 44 0 60s44 17 60 0z",start:"M784 887c7 6 17 9 27 9 24 0 43-19 43-43v-683c0-9-3-19-9-27-15-18-42-21-60-7l-427 341c-2 2-5 4-7 7-15 18-12 45 7 60zM768 765l-316-253 316-253zM256 811v-597c0-24-19-43-43-43s-43 19-43 43v597c0 24 19 43 43 43s43-19 43-43z",end:"M240 137c-7-6-17-9-27-9-24 0-43 19-43 43v683c-0 9 3 19 9 27 15 18 42 21 60 7l427-341c2-2 5-4 7-7 15-18 12-45-7-60zM256 259l316 253-316 253zM768 213v597c0 24 19 43 43 43s43-19 43-43v-597c0-24-19-43-43-43s-43 19-43 43z",forbidden:"M981 512c0-130-53-247-137-332s-202-137-332-137-247 53-332 137-137 202-137 332 53 247 137 332 202 137 332 137 247-53 332-137 137-202 137-332zM812 752l-540-540c66-53 149-84 240-84 106 0 202 43 272 112s112 165 112 272c0 91-31 174-84 240zM212 272l540 540c-66 53-149 84-240 84-106 0-202-43-272-112s-112-165-112-272c0-91 31-174 84-240z",square:"M213 85c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-597c0-35-14-67-38-90s-55-38-90-38zM213 171h597c12 0 22 5 30 13s13 18 13 30v597c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13z",star:"M550 66c-4-8-11-15-19-19-21-10-47-2-57 19l-122 247-273 40c-9 1-18 5-24 12-16 17-16 44 1 60l197 192-47 271c-2 9-0 18 4 27 11 21 37 29 58 18l244-128 244 128c8 4 17 6 27 4 23-4 39-26 35-49l-47-271 197-192c6-6 11-15 12-24 3-23-13-45-36-48l-273-40-122-247z",sun:"M768 512c0-71-29-135-75-181s-110-75-181-75-135 29-181 75-75 110-75 181 29 135 75 181 110 75 181 75 135-29 181-75 75-110 75-181zM683 512c0 47-19 90-50 121s-74 50-121 50-90-19-121-50-50-74-50-121 19-90 50-121 74-50 121-50 90 19 121 50 50 74 50 121zM469 43v85c0 24 19 43 43 43s43-19 43-43v-85c0-24-19-43-43-43s-43 19-43 43zM469 896v85c0 24 19 43 43 43s43-19 43-43v-85c0-24-19-43-43-43s-43 19-43 43zM150 210l61 61c17 17 44 17 60 0s17-44 0-60l-61-61c-17-17-44-17-60 0s-17 44 0 60zM753 814l61 61c17 17 44 17 60 0s17-44 0-60l-61-61c-17-17-44-17-60 0s-17 44 0 60zM43 555h85c24 0 43-19 43-43s-19-43-43-43h-85c-24 0-43 19-43 43s19 43 43 43zM896 555h85c24 0 43-19 43-43s-19-43-43-43h-85c-24 0-43 19-43 43s19 43 43 43zM210 874l61-61c17-17 17-44 0-60s-44-17-60 0l-61 61c-17 17-17 44 0 60s44 17 60 0zM814 271l61-61c17-17 17-44 0-60s-44-17-60 0l-61 61c-17 17-17 44 0 60s44 17 60 0z",tag:"M909 602c25-25 37-58 37-90 0-33-12-65-37-90l-367-367c-8-8-18-12-30-12h-427c-24 0-43 19-43 43v427c0 11 4 22 13 30l367 366c25 25 58 37 91 37s66-13 90-38zM848 542l-306 306c-8 8-19 13-30 13s-22-4-30-12l-354-354v-366h366l354 354c8 8 12 19 12 30 0 11-4 22-12 30zM299 341c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43z",terminal:"M201 755l256-256c17-17 17-44 0-60l-256-256c-17-17-44-17-60 0s-17 44 0 60l226 226-226 226c-17 17-17 44 0 60s44 17 60 0zM512 853h341c24 0 43-19 43-43s-19-43-43-43h-341c-24 0-43 19-43 43s19 43 43 43z",thumbsDown:"M469 640c0-24-19-43-43-43h-242c-3-0-7-0-7-0-12-2-21-8-28-17s-10-20-8-32l59-384c2-10 7-19 14-26 8-7 18-11 29-11h439v418l-154 346c-13-4-25-11-34-21-15-15-25-37-25-60zM384 683v128c0 47 19 90 50 121s74 50 121 50c17 0 32-10 39-25l171-384c3-6 4-12 4-17v-469c0-24-19-43-43-43h-481c-33-0-63 12-86 33-22 19-37 46-41 76l-59 384c-5 35 4 69 23 95s49 45 84 51c7 1 14 2 21 1zM725 128h114c15-0 29 5 39 14 9 8 16 19 18 32v290c-2 15-9 27-19 36-10 8-23 13-37 13l-115 0c-24 0-43 19-43 43s19 43 43 43h113c35 1 67-12 92-32 27-22 45-53 50-90 0-2 0-4 0-6v-299c0-2-0-4-0-6-5-34-22-64-46-86-26-23-60-37-96-36h-114c-24 0-43 19-43 43s19 43 43 43z",thumbsUp:"M555 384c0 24 19 43 43 43h242c3 0 7 0 7 0 12 2 21 8 28 17s10 20 8 32l-59 384c-2 10-7 19-14 26-8 7-18 11-29 11h-439v-418l154-346c13 4 25 11 34 21 15 15 25 37 25 60zM640 341v-128c0-47-19-90-50-121s-74-50-121-50c-17 0-32 10-39 25l-171 384c-3 6-4 12-4 17v469c0 24 19 43 43 43h481c33 0 63-12 86-33 22-19 37-46 41-76l59-384c5-35-4-69-23-95s-49-45-84-51c-7-1-14-2-21-1zM299 896h-128c-12 0-22-5-30-13s-13-18-13-30v-299c0-12 5-22 13-30s18-13 30-13h128c24 0 43-19 43-43s-19-43-43-43h-128c-35 0-67 14-90 38s-38 55-38 90v299c0 35 14 67 38 90s55 38 90 38h128c24 0 43-19 43-43s-19-43-43-43z",trash:"M768 299v555c0 12-5 22-13 30s-18 13-30 13h-427c-12 0-22-5-30-13s-13-18-13-30v-555zM725 213v-43c0-35-14-67-38-90s-55-38-90-38h-171c-35 0-67 14-90 38s-38 55-38 90v43h-171c-24 0-43 19-43 43s19 43 43 43h43v555c0 35 14 67 38 90s55 38 90 38h427c35 0 67-14 90-38s38-55 38-90v-555h43c24 0 43-19 43-43s-19-43-43-43zM384 213v-43c0-12 5-22 13-30s18-13 30-13h171c12 0 22 5 30 13s13 18 13 30v43z",unlock:"M213 512h597c12 0 22 5 30 13s13 18 13 30v299c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-299c0-12 5-22 13-30s18-13 30-13zM341 427v-128c-0-47 19-90 50-121 31-31 73-50 120-50 44 0 83 16 113 43 27 24 47 57 55 94 5 23 27 38 50 33s38-27 33-50c-12-56-41-105-82-141-45-40-105-64-170-64-71 0-135 29-181 75s-75 110-75 181v128h-43c-35 0-67 14-90 38s-38 55-38 90v299c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-299c0-35-14-67-38-90s-55-38-90-38z",upload:"M853 640v171c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-171c0-24-19-43-43-43s-43 19-43 43v171c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-171c0-24-19-43-43-43s-43 19-43 43zM469 231v409c0 24 19 43 43 43s43-19 43-43v-409l141 141c17 17 44 17 60 0s17-44 0-60l-213-213c-4-4-9-7-14-9-10-4-22-4-33 0-5 2-10 5-14 9l-213 213c-17 17-17 44 0 60s44 17 60 0z",uploadCloud:"M469 615v281c0 24 19 43 43 43s43-19 43-43v-281l98 98c17 17 44 17 60 0s17-44 0-60l-171-171c-4-4-9-7-14-9s-11-3-16-3c-11 0-22 4-30 13l-171 171c-17 17-17 44 0 60s44 17 60 0zM890 822c62-34 105-90 123-152s13-133-21-195c-29-53-74-92-126-114-31-13-64-20-98-20h-22c-31-88-91-158-167-203-85-50-188-67-291-41s-185 92-235 177-67 188-41 291c16 61 46 116 84 158 16 18 43 19 60 3s19-43 3-60c-29-33-53-75-65-123-21-80-7-160 32-226s103-117 183-138 160-7 226 32 117 103 138 183c5 19 22 32 41 32h53c23 0 45 5 66 13 35 14 65 40 84 76 23 41 26 88 14 130s-41 79-82 102c-21 11-28 37-17 58s37 28 58 17z",user:"M896 896v-85c0-59-24-112-62-151s-92-62-151-62h-341c-59 0-112 24-151 62s-62 92-62 151v85c0 24 19 43 43 43s43-19 43-43v-85c0-35 14-67 38-90s55-38 90-38h341c35 0 67 14 90 38s38 55 38 90v85c0 24 19 43 43 43s43-19 43-43zM725 299c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM640 299c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90z",userMinus:"M725 896v-85c0-59-24-112-62-151s-92-62-151-62h-299c-59 0-112 24-151 62s-62 92-62 151v85c0 24 19 43 43 43s43-19 43-43v-85c0-35 14-67 38-90s55-38 90-38h299c35 0 67 14 90 38s38 55 38 90v85c0 24 19 43 43 43s43-19 43-43zM576 299c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM491 299c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90zM981 427h-256c-24 0-43 19-43 43s19 43 43 43h256c24 0 43-19 43-43s-19-43-43-43z",userPlus:"M725 896v-85c0-59-24-112-62-151s-92-62-151-62h-299c-59 0-112 24-151 62s-62 92-62 151v85c0 24 19 43 43 43s43-19 43-43v-85c0-35 14-67 38-90s55-38 90-38h299c35 0 67 14 90 38s38 55 38 90v85c0 24 19 43 43 43s43-19 43-43zM576 299c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM491 299c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90zM981 427h-85v-85c0-24-19-43-43-43s-43 19-43 43v85h-85c-24 0-43 19-43 43s19 43 43 43h85v85c0 24 19 43 43 43s43-19 43-43v-85h85c24 0 43-19 43-43s-19-43-43-43z",userX:"M725 896v-85c0-59-24-112-62-151s-92-62-151-62h-299c-59 0-112 24-151 62s-62 92-62 151v85c0 24 19 43 43 43s43-19 43-43v-85c0-35 14-67 38-90s55-38 90-38h299c35 0 67 14 90 38s38 55 38 90v85c0 24 19 43 43 43s43-19 43-43zM576 299c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM491 299c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90zM951 311l-77 77-77-77c-17-17-44-17-60 0s-17 44 0 60l77 77-77 77c-17 17-17 44 0 60s44 17 60 0l77-77 77 77c17 17 44 17 60 0s17-44 0-60l-77-77 77-77c17-17 17-44 0-60s-44-17-60 0z",users:"M768 896v-85c0-59-24-112-62-151s-92-62-151-62h-341c-59 0-112 24-151 62s-62 92-62 151v85c0 24 19 43 43 43s43-19 43-43v-85c0-35 14-67 38-90s55-38 90-38h341c35 0 67 14 90 38s38 55 38 90v85c0 24 19 43 43 43s43-19 43-43zM597 299c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM512 299c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90zM1024 896v-85c-0-53-19-102-52-139-28-32-65-56-108-67-23-6-46 8-52 30s8 46 30 52c26 7 48 21 65 41 19 22 31 51 31 83v85c0 24 19 43 43 43s43-19 43-43zM672 175c34 9 62 31 78 59s23 63 14 97c-8 29-25 54-47 70-13 10-29 17-45 22-23 6-36 29-30 52s29 36 52 30c27-7 53-19 75-36 38-28 66-69 79-118 15-57 5-115-23-162s-74-83-131-98c-23-6-46 8-52 31s8 46 31 52z",video:"M939 382v261l-183-130zM128 171c-35 0-67 14-90 38s-38 55-38 90v427c0 35 14 67 38 90s55 38 90 38h469c35 0 67-14 90-38s38-55 38-90v-130l231 165c19 14 46 9 60-10 5-8 8-16 8-25v-427c0-24-19-43-43-43-9 0-18 3-25 8l-231 165v-130c0-35-14-67-38-90s-55-38-90-38zM128 256h469c12 0 22 5 30 13s13 18 13 30v427c0 12-5 22-13 30s-18 13-30 13h-469c-12 0-22-5-30-13s-13-18-13-30v-427c0-12 5-22 13-30s18-13 30-13z",videoOff:"M455 256h143c12 0 22 5 30 13s13 18 13 30v143c0 12 5 22 13 30l43 43c15 15 38 17 55 4l188-136v343c0 24 19 43 43 43s43-19 43-43v-427c0-9-3-17-8-25-14-19-40-23-60-10l-227 164-4-4v-125c0-35-14-67-38-90s-55-38-90-38h-143c-24 0-43 19-43 43s19 43 43 43zM196 256l444 444v25c0 12-5 22-13 30s-18 13-30 13h-469c-12 0-22-5-30-13s-13-18-13-30v-427c0-12 5-22 13-30s18-13 30-13zM13 73l99 99c-29 4-54 17-74 36-23 23-38 55-38 90v427c0 35 14 67 38 90s55 38 90 38h469c35 0 67-14 90-38 11-11 21-25 27-40l236 236c17 17 44 17 60 0s17-44 0-60l-939-939c-17-17-44-17-60 0s-17 44 0 60z",volume:"M427 302v420l-144-115c-7-6-17-9-27-9h-128v-171h128c9 0 19-3 27-9zM443 180l-202 161h-156c-24 0-43 19-43 43v256c0 24 19 43 43 43h156l202 161c18 15 45 12 60-7 6-8 9-17 9-27v-597c0-24-19-43-43-43-10 0-19 4-27 9z",volumeLow:"M427 302v420l-144-115c-7-6-17-9-27-9h-128v-171h128c9 0 19-3 27-9zM443 180l-202 161h-156c-24 0-43 19-43 43v256c0 24 19 43 43 43h156l202 161c18 15 45 12 60-7 6-8 9-17 9-27v-597c0-24-19-43-43-43-10 0-19 4-27 9zM633 391c33 33 50 77 50 121s-17 87-50 121c-17 17-17 44 0 60s44 17 60 0c50-50 75-116 75-181s-25-131-75-181c-17-17-44-17-60 0s-17 44 0 60z",volumeHigh:"M427 302v420l-144-115c-7-6-17-9-27-9h-128v-171h128c9 0 19-3 27-9zM443 180l-202 161h-156c-24 0-43 19-43 43v256c0 24 19 43 43 43h156l202 161c18 15 45 12 60-7 6-8 9-17 9-27v-597c0-24-19-43-43-43-10 0-19 4-27 9zM783 241c75 75 112 173 112 272 0 98-37 196-112 271-17 17-17 44 0 60s44 17 60 0c92-92 137-212 137-332 0-120-46-240-137-332-17-17-44-17-60 0s-17 44 0 60zM633 391c33 33 50 77 50 121s-17 87-50 121c-17 17-17 44 0 60s44 17 60 0c50-50 75-116 75-181s-25-131-75-181c-17-17-44-17-60 0s-17 44 0 60z",volumeOff:"M427 302v420l-144-115c-7-6-17-9-27-9h-128v-171h128c9 0 19-3 27-9zM443 180l-202 161h-156c-24 0-43 19-43 43v256c0 24 19 43 43 43h156l202 161c18 15 45 12 60-7 6-8 9-17 9-27v-597c0-24-19-43-43-43-10 0-19 4-27 9zM695 414l98 98-98 98c-17 17-17 44 0 60s44 17 60 0l98-98 98 98c17 17 44 17 60 0s17-44 0-60l-98-98 98-98c17-17 17-44 0-60s-44-17-60 0l-98 98-98-98c-17-17-44-17-60 0s-17 44 0 60z",wifi:"M241 568c84-70 186-102 287-98 92 3 184 36 259 98 18 15 45 12 60-6s12-45-6-60c-90-74-199-114-310-118-121-4-245 34-345 118-18 15-21 42-5 60s42 21 60 5zM89 416c125-110 282-163 437-159 147 3 293 57 410 160 18 16 45 14 60-4s14-45-4-60c-133-116-298-177-464-181-176-4-353 56-495 181-18 16-19 43-4 60s43 19 60 4zM389 722c42-30 92-42 140-39 38 3 75 16 108 39 19 14 46 9 59-10s9-46-10-59c-45-31-97-50-150-54-67-5-137 12-196 54-19 14-24 40-10 59s40 24 59 10zM512 896c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43z",wifiOff:"M695 510c34 16 64 37 88 57 18 15 45 13 60-4s13-45-4-60c-30-26-67-50-106-70-21-10-47-2-57 20s-2 47 20 57zM460 258c172-14 333 41 456 142 6 5 12 10 18 16 18 16 45 14 60-4s14-45-4-60c-7-6-14-12-21-18-140-114-323-177-517-161-23 2-41 22-39 46s22 41 46 39zM389 722c42-30 92-42 140-39 38 3 75 16 108 39 10 7 22 9 33 7l282 282c17 17 44 17 60 0s17-44 0-60l-544-544c-2-3-5-5-7-7l-387-387c-17-17-44-17-60 0s-17 44 0 60l174 174c-54 27-106 62-155 105-18 16-19 43-4 60s43 19 60 4c51-45 107-80 162-105l99 99c-58 19-114 50-164 92-18 15-20 42-5 60s42 20 60 5c54-45 116-75 179-88l119 119c-1-0-2-0-3-0-67-5-137 12-196 54-19 14-24 40-10 59s40 24 59 10zM512 896c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43z",x:"M226 286l226 226-226 226c-17 17-17 44 0 60s44 17 60 0l226-226 226 226c17 17 44 17 60 0s17-44 0-60l-226-226 226-226c17-17 17-44 0-60s-44-17-60 0l-226 226-226-226c-17-17-44-17-60 0s-17 44 0 60z",zoomIn:"M684 677c-1 1-3 2-4 4s-3 3-4 4c-54 52-127 84-207 84-82 0-157-33-211-87s-87-129-87-211 33-157 87-211 129-87 211-87 157 33 211 87 87 129 87 211c0 80-32 153-84 207zM926 866l-157-157c53-66 84-149 84-240 0-106-43-202-112-272s-166-112-272-112-202 43-272 112-112 166-112 272 43 202 112 272 166 112 272 112c91 0 174-31 240-84l157 157c17 17 44 17 60 0s17-44 0-60zM341 512h85v85c0 24 19 43 43 43s43-19 43-43v-85h85c24 0 43-19 43-43s-19-43-43-43h-85v-85c0-24-19-43-43-43s-43 19-43 43v85h-85c-24 0-43 19-43 43s19 43 43 43z",zoomOut:"M684 677c-1 1-3 2-4 4s-3 3-4 4c-54 52-127 84-207 84-82 0-157-33-211-87s-87-129-87-211 33-157 87-211 129-87 211-87 157 33 211 87 87 129 87 211c0 80-32 153-84 207zM926 866l-157-157c53-66 84-149 84-240 0-106-43-202-112-272s-166-112-272-112-202 43-272 112-112 166-112 272 43 202 112 272 166 112 272 112c91 0 174-31 240-84l157 157c17 17 44 17 60 0s17-44 0-60zM341 512h256c24 0 43-19 43-43s-19-43-43-43h-256c-24 0-43 19-43 43s19 43 43 43z",discord:{p:["M1145 86c-81-38-174-68-272-85l-7-1c-11 19-23 43-34 68l-2 5c-46-7-100-12-155-12s-108 4-160 12l6-1c-13-29-25-53-38-76l2 4c-105 18-198 48-286 89l7-3c-176 261-224 516-200 766v0c98 73 211 131 334 169l8 2c26-34 50-73 71-113l2-5c-45-17-83-35-119-57l3 2c10-7 19-14 28-21 100 48 218 76 342 76s242-28 347-78l-5 2c9 8 19 15 28 21-33 20-71 38-111 53l-5 2c23 45 47 84 75 120l-2-2c131-40 244-99 345-174l-3 2c28-291-48-543-201-767zM451 698c-67 0-122-60-122-135s53-135 121-135 123 61 122 135-54 135-122 135zM900 698c-67 0-122-60-122-135s53-135 122-135 123 61 121 135-54 135-121 135z"],w:1351},tiktok:"M535 1c56-1 111-0 167-1 3 65 27 132 75 178 48 47 115 69 181 76v172c-61-2-123-15-179-41-24-11-47-25-69-40-0 125 0 249-1 373-3 60-23 119-58 168-56 82-153 135-252 137-61 3-122-13-174-44-86-51-147-144-156-244-1-21-1-43-0-64 8-81 48-159 110-212 71-61 170-91 262-73 1 63-2 126-2 189-42-14-92-10-129 16-27 17-47 44-58 75-9 22-6 46-6 69 10 70 78 129 149 122 48-0 93-28 118-69 8-14 17-29 17-45 4-76 3-152 3-229 0-172-0-343 1-515z",instagram:{p:["M512 92c137 0 153 1 207 3 50 2 77 11 95 18 24 9 41 20 59 38 18 18 29 35 38 59 7 18 15 45 18 95 2 54 3 70 3 207s-1 153-3 207c-2 50-11 77-18 95-9 24-20 41-38 59-18 18-35 29-59 38-18 7-45 15-95 18-54 2-70 3-207 3s-153-1-207-3c-50-2-77-11-95-18-24-9-41-20-59-38-18-18-29-35-38-59-7-18-15-45-18-95-2-54-3-70-3-207s1-153 3-207c2-50 11-77 18-95 9-24 20-41 38-59 18-18 35-29 59-38 18-7 45-15 95-18 54-2 70-3 207-3zM512 0c-139 0-156 1-211 3-54 2-92 11-124 24-34 13-62 31-91 59-29 28-46 57-59 91-13 33-21 70-24 124-2 55-3 72-3 211s1 156 3 211c2 54 11 92 24 124 13 34 31 62 59 91 28 28 57 46 91 59 33 13 70 21 124 24 55 2 72 3 211 3s156-1 211-3c54-2 92-11 124-24 34-13 62-31 91-59s46-57 59-91c13-33 21-70 24-124 2-55 3-72 3-211s-1-156-3-211c-2-54-11-92-24-124-13-34-30-63-59-91-28-28-57-46-91-59-33-13-70-21-124-24-55-3-72-3-211-3v0z","M512 249c-145 0-263 118-263 263s118 263 263 263 263-118 263-263c0-145-118-263-263-263zM512 683c-94 0-171-76-171-171s76-171 171-171c94 0 171 76 171 171s-76 171-171 171z","M847 239c0 34-27 61-61 61s-61-27-61-61c0-34 27-61 61-61s61 27 61 61z"]},linkedin:"M928 0h-832c-53 0-96 43-96 96v832c0 53 43 96 96 96h832c53 0 96-43 96-96v-832c0-53-43-96-96-96zM384 832h-128v-448h128v448zM320 320c-35 0-64-29-64-64s29-64 64-64c35 0 64 29 64 64s-29 64-64 64zM832 832h-128v-256c0-35-29-64-64-64s-64 29-64 64v256h-128v-448h128v79c26-36 67-79 112-79 80 0 144 72 144 160v288z",eyedropper:"M987 37c-50-50-131-50-181 0l-172 172-121-121-136 136 106 106-472 472c-8 8-11 19-10 29h-0v160c0 18 14 32 32 32h160c0 0 3 0 4 0 9 0 18-4 25-11l472-472 106 106 136-136-121-121 172-172c50-50 50-131 0-181zM173 960h-109v-109l470-470 109 109-470 470z",heart:{p:["M1088 358c0 86-37 164-96 218h0l-320 320c-32 32-64 64-96 64s-64-32-96-64l-320-320c-59-54-96-131-96-218 0-162 132-294 294-294 86 0 164 37 218 96 54-59 131-96 218-96 162 0 294 132 294 294z"],w:1152},facebook:"M928 0h-832c-53 0-96 43-96 96v832c0 53 43 96 96 96h416v-448h-128v-128h128v-64c0-106 86-192 192-192h128v128h-128c-35 0-64 29-64 64v64h192l-32 128h-160v448h288c53 0 96-43 96-96v-832c0-53-43-96-96-96z",twitter:"M1024 226c-38 17-78 28-121 33 43-26 77-67 92-116-41 24-86 42-133 51-38-41-93-66-153-66-116 0-210 94-210 210 0 16 2 32 5 48-175-9-329-92-433-220-18 31-28 67-28 106 0 73 37 137 93 175-34-1-67-11-95-26 0 1 0 2 0 3 0 102 72 187 169 206-18 5-36 7-55 7-14 0-27-1-40-4 27 83 104 144 196 146-72 56-162 90-261 90-17 0-34-1-50-3 93 60 204 94 322 94 386 0 598-320 598-598 0-9-0-18-1-27 41-29 77-66 105-109z",youtube:"M1014 307c0 0-10-71-41-102-39-41-83-41-103-43-143-10-358-10-358-10h-0c0 0-215 0-358 10-20 2-64 3-103 43-31 31-41 102-41 102s-10 83-10 166v78c0 83 10 166 10 166s10 71 41 102c39 41 90 39 113 44 82 8 348 10 348 10s215-0 358-11c20-2 64-3 103-43 31-31 41-102 41-102s10-83 10-166v-78c-0-83-10-166-10-166zM406 645v-288l277 144-277 143z",game:{p:["M1056 194v-2h-672c-177 0-320 143-320 320s143 320 320 320c105 0 198-50 256-128h128c58 78 151 128 256 128 177 0 320-143 320-320 0-166-126-302-288-318zM576 576h-128v128h-128v-128h-128v-128h128v-128h128v128h128v128zM960 576c-35 0-64-29-64-64s29-64 64-64 64 29 64 64-29 64-64 64zM1152 576c-35 0-64-29-64-64 0-35 29-64 64-64s64 29 64 64c0 35-29 64-64 64z"],w:1408},google:"M512 0c-283 0-512 229-512 512s229 512 512 512 512-229 512-512-229-512-512-512zM520 896c-212 0-384-172-384-384s172-384 384-384c104 0 190 38 257 100l-104 100c-29-27-78-59-153-59-131 0-238 109-238 242s107 242 238 242c152 0 209-109 218-166h-218v-132h363c3 19 6 38 6 64 0 219-147 375-369 375z",github:"M512 13c-283 0-512 229-512 512 0 226 147 418 350 486 26 5 35-11 35-25 0-12-0-53-1-95-142 31-173-60-173-60-23-59-57-75-57-75-46-32 4-31 4-31 51 4 78 53 78 53 46 78 120 56 149 43 5-33 18-56 33-68-114-13-233-57-233-253 0-56 20-102 53-137-5-13-23-65 5-136 0 0 43-14 141 52 41-11 85-17 128-17 44 0 87 6 128 17 98-66 141-52 141-52 28 71 10 123 5 136 33 36 53 82 53 137 0 197-120 240-234 253 18 16 35 47 35 95 0 69-1 124-1 141 0 14 9 30 35 25 203-68 350-260 350-486 0-283-229-512-512-512z",npm:"M0 0v1024h1024v-1024h-1024zM832 832h-128v-512h-192v512h-320v-640h640v640z",xr:{p:["M801 116c465 0 735 49 735 396 0 279-197 396-342 396-218 0-307-165-393-165-110 0-175 165-393 165-145 0-342-117-342-396 0-347 270-396 735-396zM949 285c-16-16-41-16-57 0-16 16-16 41-0 57v0l322 322c16 16 41 16 57 0 16-16 16-41 0-57-9-9-18-18-26-26l-4-4c-5-5-9-9-14-14l-4-4c-32-32-65-64-132-131l-8-8c-1-1-3-3-4-4l-18-18c-31-31-68-68-113-113zM801 272c-22 0-40 18-40 40v0 322c0 22 18 40 40 40 22 0 40-18 40-40 0-1 0-2 0-3l0-6c0-3 0-6 0-8l0-5c0-1 0-2 0-2l0-6c0-1 0-1 0-2l0-7c0-1 0-1 0-2l0-8c0-0 0-1 0-1l-0-20c-0-0-0-1-0-1l-0-12c-0-1-0-1-0-2l-0-15c-0-1-0-2-0-2l-0-14c-0-1-0-2-0-3l-0-22c-0-1-0-3-0-4l-0-28c-0-2-0-4-0-5l-0-50c-0-2-0-5-0-7l-0-84c0-22-18-40-40-40zM710 282c-16-16-41-16-57 0v0l-134 134-131-131c-16-16-41-16-57 0-16 16-16 41-0 57v0l131 131-132 132c-15 16-15 41 1 56 16 16 41 16 57 0v0l131-131 134 134c16 16 41 16 57 0 16-16 16-41 0-57v0l-134-133 134-133c16-16 16-41 0-57z"],w:1600},xinjs:{p:["M937 548c14 14 14 37 0 51l-113 113-178 178c-14 14-37 14-51-0-14-14-14-37 0-51l290-291c14-14 37-14 51 0zM924 560c-7-7-19-7-27-0l-0 0-290 291c-7 7-7 20 0 27 7 7 19 7 27 0l0-0 12-12 21-21 231-232 26-26c7-7 7-20-0-27z","M512 900c20 0 36-16 36-36v-291c0-20-16-36-36-36-20 0-36 16-36 36v291c0 20 16 36 36 36zM511 882c-10 0-19-8-19-19l-0-1v-292c0-11 9-19 19-19 10 0 19 8 19 19l0 1 0 40-0 131-0 121c0 11-9 19-19 19z","M429 889c14-14 14-37 0-52l-121-121 121-121c14-14 14-37 0-52-14-14-37-14-51 0l-121 121-119-119c-14-14-37-14-51 0-14 14-14 37-1 51l1 1 119 119-119 119c-14 14-14 37 0 52 14 14 37 14 51 0l119-119 121 121c14 14 37 14 51 0zM418 876c-7 7-19 7-27 0l-0-0-133-133-131 130c-7 7-20 7-27-0-7-7-7-19-0-27l0-0 131-130-131-131c-7-7-7-19 0-27 7-7 19-7 27-0l0 0 131 130 133-133c7-7 20-7 27 0 7 7 7 19 0 27l-0 0-134 132 134 132c7 7 7 19 0 27l-0 0z","M594 142c14-14 37-14 51-0 205 205 222 221 291 290 14 14 14 37 0 51-14 14-37 14-51 0l-291-290c-14-14-14-37 0-51z","M511 130c20 0 36 16 36 36 0 290 0 193 0 291 0 20-16 36-36 36-20 0-36-16-36-36v-291c0-20 16-36 36-36z","M378 140c14-14 37-14 51 0 14 14 14 37 0 51l-121 120 121 120c14 14 14 37 0 51-14 14-37 14-51 0l-121-121-119 118c-14 14-37 14-51-0-14-14-14-37-1-51l1-1 119-118-119-118c-14-14-14-37 0-51 14-14 37-14 51-0l119 118 121-121z"]},xinie:"M668 46c10 0 20 4 29 8 23 12 36 33 29 46v0l-25 60c3 8 5 17 6 25 6 41-8 83-32 117-14 19-32 36-53 47 23 16 42 37 57 60 51 23 98 75 99 133 0 16-3 30-9 45-14 33-38 58-72 71-8 19-4 10-13 27-42 78-166 124-167 205-0 66 36 122 105 134-24 0-40 0-53 0l-3 0c-0 0-1 0-1 0l-7 0c-1 0-2 0-2-0l-8-0c-0-0-1-0-1-0l-4-0c-0-0-1-0-1-0l-2-0c-0-0-1-0-1-0l-3-0c-0-0-1-0-1-0l-3-0c-0-0-1-0-1-0l-4-0c-0-0-1-0-1-0l-14 0c-0 0-1 0-1 0l-3 0c-0 0-1 0-2 0l-3 0c-8 0-17 0-28 0-71-21-128-71-169-131-77-115-98-252-62-384-35-38-39-85-17-131 7-13 16-26 27-36 36-35 96-50 143-29 7-4 15-6 23-8 6-2 13-3 20-4-9-22-6-46 1-68 13-37 62-57 62-57 0 0 5-27 32-56 19-19 55-29 82-24v0l27-39c6-9 15-10 25-11zM453 563l0 0c7 11 51 80 131 110 101 39 109-12 109-13-168 9-232-86-239-97zM553 504c-48-2-85 16-152 44-53 22-144-28-144-28s66 46 154 44c20-0 32-3 42-6 7-2 20-32 96-34 6-0 13-0 21-0l3 0c5 0 10 0 14 0l3 0 3 0c38 1 75 3 75 3s-69-20-115-22zM400 320c0 0 0 0 0 1l0 0c2 7 9 35 2 51-9 23-23 36-25 37l-0 0 0 0c4 0 95 8 138 22 52 17 98 51 99 52l0 0c0 0-53-50-98-68-38-15-109-18-109-18s22-26 9-48c-12-22-19-30-19-30zM633 102l0 0c2 1 12 4 36 20 24 17 31 34 31 34 1-2 1-3 2-5l1-1 0-1c0-0 0-1 1-1l0-1c3-8 6-15-4-24-12-11-60-20-66-21l-0-0z",html5:"M61 0l82 922 369 102 370-103 82-921h-903zM785 301h-433l10 116h412l-31 347-232 64-232-64-16-178h113l8 90 126 34 0-0 126-34 13-147h-392l-30-342h566l-10 113z",bug:{p:["M933 549c0 20-17 37-37 37h-128c0 71-15 125-38 166l119 119c14 14 14 37 0 51-7 7-17 11-26 11s-19-3-26-11l-113-113s-75 69-172 69v-512h-73v512c-103 0-179-75-179-75l-105 118c-7 8-17 12-27 12-9 0-17-3-25-9-15-14-16-37-3-52l115-130c-20-39-33-90-33-157h-128c-20 0-37-17-37-37s17-37 37-37h128v-168l-99-99c-14-14-14-37 0-51s37-14 51 0l99 99h482l99-99c14-14 37-14 51 0s14 37 0 51l-99 99v168h128c20 0 37 17 37 37zM658 219h-366c0-101 82-183 183-183s183 82 183 183z"],w:951}};/*!
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
*/var{svg:Ks,path:qi}=d1;function Bs(n){let t=Ye[n];if(t===void 0)console.warn(`icon ${n} not found`),t=Ye.square;return typeof t!=="string"?t:{w:1024,h:1024,p:[t]}}var v3=(n,t)=>{Ye[n]=t},Qs=(n,t,e,i=1)=>{if(t!==void 0){for(let s of[...n.querySelectorAll("path")])if(s.setAttribute("fill",t),e!==void 0)s.setAttribute("stroke",e),s.setAttribute("stroke-width",String(Number(i)*32))}return n.setAttribute("xmlns","http://www.w3.org/2000/svg"),`url(data:image/svg+xml;charset=UTF-8,${encodeURIComponent(n.outerHTML)})`},I=new Proxy(Ye,{get(n,t){let e=Bs(t);return e===void 0?void 0:(...i)=>{let{w:a,h:s}=Object.assign({w:1024,h:1024},e);return Ks({viewBox:`0 0 ${a} ${s}`,class:"icon-"+t.replace(/([a-z])([A-Z])/g,(o,l,r)=>l+"-"+r.toLocaleLowerCase())},...i,...e.p.map((o,l)=>{let r=Array.from(new Set(e.c));return e.c?qi({d:o,style:{fill:`var(--icon-fill-${r.indexOf(e.c[l])}, ${e.c[l]})`}}):qi({d:o})}))}}});class g1 extends J{icon="";size=0;color="";stroke="";strokeWidth=1;constructor(){super();this.initAttributes("icon","size","color","stroke","strokeWidth")}render(){this.textContent="";let n={};if(this.size)n.height=this.size;if(this.stroke)n.stroke=this.stroke,n.strokeWidth=this.strokeWidth*32;if(this.color.match(/linear-gradient/)){let t=this.color.split("-")[0],[,e]=this.color.match(/[a-z-]+\((.*)\)/)||[],[,i]=e.match(/(\d+)deg/)||[],s=(e.match(/(#|rgb|hsl).*?%/g)||[]).map((h)=>{let[,d,p]=h.match(/^(.*)\s(\d+%)$/)||["black","100%"];return`<stop offset="${p}" stop-color="${fe.fromCss(d).html}" ></stop>`}).join(""),o="";if(i)o=` gradientTransform="rotate(${parseFloat(i).toFixed(0)})"`;let l=d1.defs(),r="g-"+Math.floor(Math.random()*Number.MAX_SAFE_INTEGER);l.innerHTML=`<${t}Gradient id="${r}" ${o}>${s}</${t}Gradient>`,n.fill=`url(#${r})`,this.append(I[this.icon]({style:n},l))}else n.fill=this.color,this.append(I[this.icon]({style:n}))}}var y3=g1.elementCreator({tag:"xin-icon",styleSpec:{":host":{verticalAlign:"text-bottom"}}});/*!
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
*/var Hi=()=>{};class f1 extends J{babylonReady;BABYLON;static styleSpec={":host":{display:"block",position:"relative"},":host canvas":{width:"100%",height:"100%"},":host .babylonVRicon":{height:50,width:80,backgroundColor:"transparent",filter:"drop-shadow(0 0 4px #000c)",backgroundImage:Qs(I.xr(),"#fffd"),backgroundPosition:"center",backgroundRepeat:"no-repeat",border:"none",borderRadius:5,borderStyle:"none",outline:"none",transition:"transform 0.125s ease-out"},":host .babylonVRicon:hover":{transform:"scale(1.1)"}};content=X.canvas({part:"canvas"});constructor(){super();this.babylonReady=(async()=>{let{BABYLON:n}=await ie("https://cdn.babylonjs.com/babylon.js","BABYLON");return n})()}scene;engine;sceneCreated=Hi;update=Hi;_update=()=>{if(this.scene){if(this.update!==void 0)this.update(this,this.BABYLON);if(this.scene.activeCamera!==void 0)this.scene.render()}};onResize(){if(this.engine)this.engine.resize()}loadScene=async(n,t,e)=>{let{BABYLON:i}=await ie("https://cdn.babylonjs.com/loaders/babylonjs.loaders.min.js","BABYLON");i.SceneLoader.Append(n,t,this.scene,e)};loadUI=async(n)=>{let{BABYLON:t}=await ie("https://cdn.babylonjs.com/gui/babylon.gui.min.js","BABYLON"),e=t.GUI.AdvancedDynamicTexture.CreateFullscreenUI("GUI",!0,this.scene),{snippetId:i,jsonUrl:a,data:s,size:o}=n;if(o)e.idealWidth=o,e.renderAtIdealSize=!0;let l;if(i)l=await e.parseFromSnippetAsync(i);else if(a)l=await e.parseFromURLAsync(a);else if(s)l=e.parseContent(s);else return null;let r=e.getChildren()[0],h=r.children.reduce((d,p)=>{return d[p.name]=p,d},{});return{advancedTexture:e,gui:l,root:r,widgets:h}};connectedCallback(){super.connectedCallback();let{canvas:n}=this.parts;this.babylonReady.then(async(t)=>{if(this.BABYLON=t,this.engine=new t.Engine(n,!0),this.scene=new t.Scene(this.engine),this.sceneCreated)await this.sceneCreated(this,t);if(this.scene.activeCamera===void 0)new t.ArcRotateCamera("default-camera",-Math.PI/2,Math.PI/2.5,3,new t.Vector3(0,0,0)).attachControl(this.parts.canvas,!0);this.engine.runRenderLoop(this._update)})}}var x3=f1.elementCreator({tag:"xin-3d"});/*!
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
*/class be extends J{content=null;src="";json="";config={renderer:"svg",loop:!0,autoplay:!0};static bodymovinAvailable;animation;static styleSpec={":host":{width:400,height:400,display:"inline-block"}};_loading=!1;get loading(){return this._loading}constructor(){super();if(this.initAttributes("src","json"),be.bodymovinAvailable===void 0)be.bodymovinAvailable=ie("https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js","bodymovin")}doneLoading=()=>{this._loading=!1};load=({bodymovin:n})=>{if(this._loading=!0,this.config.container=this.shadowRoot!==null?this.shadowRoot:void 0,this.json!=="")this.config.animationData=this.json,delete this.config.path;else if(this.src!=="")delete this.config.animationData,this.config.path=this.src;else console.log("%c<xin-lottie>%c expected either %cjson%c (animation data) or %csrc% c(url) but found neither.","color: #44f; background: #fff; padding: 0 5px","color: default","color: #44f; background: #fff; padding: 0 5px","color: default","color: #44f; background: #fff; padding: 0 5px","color: default");if(this.animation){this.animation.destroy();let t=this.shadowRoot;if(t!==null)t.querySelector("svg")?.remove()}this.animation=n.loadAnimation(this.config),this.animation.addEventListener("DOMLoaded",this.doneLoading)};render(){super.render(),be.bodymovinAvailable.then(this.load).catch((n)=>{console.error(n)})}}var w3=be.elementCreator({tag:"xin-lottie"});/*!
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
*/var{button:It,slot:Zs,div:$e}=X;class m1 extends J{arrows=!1;dots=!1;loop=!1;maxVisibleItems=1;snapDelay=0.1;snapDuration=0.25;auto=0;timeout;autoAdvance=()=>{if(clearTimeout(this.timeout),this.auto>0)this.timeout=setTimeout(this.forward,this.auto*1000)};_page=0;get page(){return this._page}set page(n){let{scroller:t,back:e,forward:i}=this.parts;if(this.lastPage<=0)i.disabled=e.disabled=!0,n=0;else n=Math.max(0,Math.min(this.lastPage,n)),n=isNaN(n)?0:n;if(this._page!==n)this._page=isNaN(n)?0:n,this.animateScroll(this._page*t.offsetWidth),e.disabled=this.page<=0&&!this.loop,i.disabled=this.page>=this.lastPage&&!this.loop}get visibleItems(){return[...this.children].filter((n)=>getComputedStyle(n).display!=="none")}get lastPage(){return Math.max(Math.ceil(this.visibleItems.length/(this.maxVisibleItems||1))-1,0)}static styleSpec={":host":{display:"flex",flexDirection:"column",position:"relative"},":host svg":{height:T.carouselIconSize},":host button":{outline:"none",border:"none",boxShadow:"none",background:"transparent",fill:T.carouselButtonColor,padding:0},":host::part(back), :host::part(forward)":{position:"absolute",top:0,bottom:0,width:T.carouseButtonWidth,zIndex:2},":host::part(back)":{left:0},":host::part(forward)":{right:0},":host button:disabled":{opacity:0.5,pointerEvents:"none"},":host button:hover":{fill:T.carouselButtonHoverColor},":host button:active":{fill:T.carouselButtonActiveColor},":host::part(pager)":{position:"relative"},":host::part(scroller)":{overflow:"auto hidden",position:"relative"},":host::part(grid)":{display:"grid",justifyItems:"center"},":host *::-webkit-scrollbar, *::-webkit-scrollbar-thumb":{display:"none"},":host .dot":{background:T.carouselButtonColor,borderRadius:T.carouselDotSize,height:T.carouselDotSize,width:T.carouselDotSize,transition:T.carouselDotTransition},":host .dot:not(.current):hover":{background:T.carouselButtonHoverColor,height:T.carouselDotSize150,width:T.carouselDotSize150,margin:T.carouselDotSize_25},":host .dot:not(.current):active":{background:T.carouselButtonActiveColor},":host .dot.current":{background:T.carouselDotCurrentColor},":host::part(progress)":{display:"flex",gap:T.carouselDotSpacing,justifyContent:"center",padding:T.carouselProgressPadding}};easing=(n)=>{return Math.sin(n*Math.PI*0.5)};indicateCurrent=()=>{let{scroller:n,progress:t}=this.parts,e=n.scrollLeft/n.offsetWidth;[...t.children].forEach((i,a)=>{i.classList.toggle("current",Math.floor(a/this.maxVisibleItems-e)===0)}),clearTimeout(this.snapTimer),this.snapTimer=setTimeout(this.snapPosition,this.snapDelay*1000)};snapPosition=()=>{let{scroller:n}=this.parts,t=n.scrollLeft/n.offsetWidth;if(t!==this.page)this.page=t>this.page?Math.ceil(t):Math.floor(t);this.autoAdvance()};back=()=>{this.page=this.page>0?this.page-1:this.lastPage};forward=()=>{this.page=this.page<this.lastPage?this.page+1:0};handleDotClick=(n)=>{let{progress:t}=this.parts,e=[...t.children].indexOf(n.target);if(e>-1)this.page=Math.floor(e/this.maxVisibleItems)};snapTimer;animationFrame;animateScroll(n,t=-1,e=0){cancelAnimationFrame(this.animationFrame);let{scroller:i}=this.parts;if(t===-1){t=i.scrollLeft,e=Date.now(),this.animationFrame=requestAnimationFrame(()=>{this.animateScroll(n,t,e)});return}let a=(Date.now()-e)/1000;if(a>=this.snapDuration||Math.abs(i.scrollLeft-n)<2)i.scrollLeft=n,this.animationFrame=null;else i.scrollLeft=t+this.easing(a/this.snapDuration)*(n-t),this.animationFrame=requestAnimationFrame(()=>{this.animateScroll(n,t,e)})}content=()=>[$e({part:"pager"},It({title:"previous slide",part:"back"},I.chevronLeft()),$e({title:"slides",role:"group",part:"scroller"},$e({part:"grid"},Zs())),It({title:"next slide",part:"forward"},I.chevronRight())),$e({title:"choose slide to display",role:"group",part:"progress"})];constructor(){super();this.initAttributes("dots","arrows","maxVisibleItems","snapDuration","loop","auto")}connectedCallback(){super.connectedCallback(),this.ariaRoleDescription="carousel",this.ariaOrientation="horizontal",this.ariaReadOnly="true";let{back:n,forward:t,scroller:e,progress:i}=this.parts;n.addEventListener("click",this.back),t.addEventListener("click",this.forward),e.addEventListener("scroll",this.indicateCurrent),i.addEventListener("click",this.handleDotClick),this.autoAdvance()}disconnectedCallback(){clearTimeout(this.timeout)}render(){super.render();let{dots:n,arrows:t,visibleItems:e,lastPage:i}=this,{progress:a,back:s,forward:o,grid:l}=this.parts;e.forEach((r)=>{r.role="group"}),l.style.gridTemplateColumns=`${100/this.maxVisibleItems/(1+this.lastPage)}% `.repeat(e.length).trim(),l.style.width=(1+this.lastPage)*100+"%",a.textContent="",a.append(...e.map((r,h)=>It({title:`item ${h+1}`,class:"dot"}))),this.indicateCurrent(),a.style.display=n&&i>0?"":"none",s.hidden=o.hidden=!(t&&i>0)}}var M3=m1.elementCreator({tag:"xin-carousel",styleSpec:{":host":{_carouselIconSize:24,_carouselButtonColor:"#0004",_carouselButtonHoverColor:"#0006",_carouselButtonActiveColor:"#000c",_carouseButtonWidth:48,_carouselDotCurrentColor:"#0008",_carouselDotSize:8,_carouselDotSpacing:T.carouselDotSize,_carouselProgressPadding:12,_carouselDotTransition:"0.125s ease-in-out"},":host:focus":{outline:"none",boxShadow:"none"}}});/*!
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
*/var _i="https://cdnjs.cloudflare.com/ajax/libs/ace/1.23.2/",b1="ace/theme/tomorrow",Xs=async(n,t="html",e={},i=b1)=>{let{ace:a}=await ie(`${_i}ace.min.js`);a.config.set("basePath",_i);let s=a.edit(n,{mode:`ace/mode/${t}`,tabSize:2,useSoftTabs:!0,useWorker:!1,...e});return s.setTheme(i),s};class ve extends J{source="";get value(){return this.editor===void 0?this.source:this.editor.getValue()}set value(n){if(this.editor===void 0)this.source=n;else this.editor.setValue(n),this.editor.clearSelection(),this.editor.session.getUndoManager().reset()}mode="javascript";disabled=!1;role="code editor";get editor(){return this._editor}_editor;_editorPromise;options={};theme=b1;static styleSpec={":host":{display:"block",position:"relative",width:"100%",height:"100%"}};constructor(){super();this.initAttributes("mode","theme","disabled")}onResize(){if(this.editor!==void 0)this.editor.resize(!0)}connectedCallback(){if(super.connectedCallback(),this.source==="")this.value=this.textContent!==null?this.textContent.trim():"";if(this._editorPromise===void 0)this._editorPromise=Xs(this,this.mode,this.options,this.theme),this._editorPromise.then((n)=>{this._editor=n,n.setValue(this.source,1),n.clearSelection(),n.session.getUndoManager().reset()})}render(){if(super.render(),this._editorPromise!==void 0)this._editorPromise.then((n)=>n.setReadOnly(this.disabled))}}var Dt=ve.elementCreator({tag:"xin-code"});/*!

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
*/var{input:qt}=X,$i=fe.fromCss("#8888");class v1 extends J{value=$i.rgba;color=$i;static styleSpec={":host":{_gap:8,_swatchSize:32,_cssWidth:72,_alphaWidth:72,display:"inline-flex",gap:T.gap,alignItems:"center"},':host input[type="color"]':{border:0,width:T.swatchSize,height:T.swatchSize},":host::part(alpha)":{width:T.alphaWidth},":host::part(css)":{width:T.cssWidth,fontFamily:"monospace"}};content=[qt({title:"base color",type:"color",part:"rgb"}),qt({type:"range",title:"opacity",part:"alpha",min:0,max:1,step:0.05}),qt({title:"css color spec",part:"css"})];valueChanged=!1;update=(n)=>{let{rgb:t,alpha:e,css:i}=this.parts;if(n.type==="input")this.color=fe.fromCss(t.value),this.color.a=Number(e.value),i.value=this.color.html;else this.color=fe.fromCss(i.value),t.value=this.color.html.substring(0,7),e.value=String(this.color.a);t.style.opacity=String(this.color.a),this.value=this.color.rgba,this.valueChanged=!0};connectedCallback(){super.connectedCallback();let{rgb:n,alpha:t,css:e}=this.parts;n.addEventListener("input",this.update),t.addEventListener("input",this.update),e.addEventListener("change",this.update)}render(){if(this.valueChanged){this.valueChanted=!1;return}let{rgb:n,alpha:t,css:e}=this.parts;this.color=fe.fromCss(this.value),n.value=this.color.html.substring(0,7),n.style.opacity=String(this.color.a),t.value=String(this.color.a),e.value=this.color.html}}var ks=v1.elementCreator({tag:"xin-color"});/*!
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
*/var Mn=X.div({style:{content:" ",position:"fixed",top:0,left:0,right:0,bottom:0}}),Pe={passive:!0},Pn=(n,t,e="move")=>{if(!n.type.startsWith("touch")){let{clientX:a,clientY:s}=n;Mn.style.cursor=e,Re(Mn),document.body.append(Mn);let o=(l)=>{let r=l.clientX-a,h=l.clientY-s;if(t(r,h,l)===!0)Mn.removeEventListener("mousemove",o),Mn.removeEventListener("mouseup",o),Mn.remove()};Mn.addEventListener("mousemove",o,Pe),Mn.addEventListener("mouseup",o,Pe)}else if(n instanceof TouchEvent){let a=n.changedTouches[0],s=a.identifier,o=a.clientX,l=a.clientY,r=n.target,h=0,d=0,p=(m)=>{let z=[...m.touches].find((x)=>x.identifier===s);if(z!==void 0)h=z.clientX-o,d=z.clientY-l;if(m.type==="touchmove")m.stopPropagation(),m.preventDefault();if(t(h,d,m)===!0||z===void 0)r.removeEventListener("touchmove",p),r.removeEventListener("touchend",p),r.removeEventListener("touchcancel",p)};r.addEventListener("touchmove",p),r.addEventListener("touchend",p,Pe),r.addEventListener("touchcancel",p,Pe)}},y1=(n="body *")=>[...document.querySelectorAll(n)].map((t)=>parseFloat(getComputedStyle(t).zIndex)).reduce((t,e)=>isNaN(t)||Number(t)<e?e:Number(t),0),Re=(n,t="body *")=>{n.style.zIndex=String(y1(t)+1)};/*!
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
*/var{slot:no}=X;class Nn extends J{static floats=new Set;drag=!1;remainOnResize="remove";remainOnScroll="remain";content=no();static styleSpec={":host":{position:"fixed"}};constructor(){super();this.initAttributes("drag","remainOnResize","remainOnScroll")}reposition=(n)=>{if(n.target?.closest(".no-drag"))return;if(this.drag){Re(this);let e=this.offsetLeft,i=this.offsetTop;Pn(n,(a,s,o)=>{if(this.style.left=`${e+a}px`,this.style.top=`${i+s}px`,this.style.right="auto",this.style.bottom="auto",o.type==="mouseup")return!0})}};connectedCallback(){super.connectedCallback(),Nn.floats.add(this);let n={passive:!0};this.addEventListener("touchstart",this.reposition,n),this.addEventListener("mousedown",this.reposition,n),Re(this)}disconnectedCallback(){super.disconnectedCallback(),Nn.floats.delete(this)}}var Pi=Nn.elementCreator({tag:"xin-float"});window.addEventListener("resize",()=>{[...Nn.floats].forEach((n)=>{if(n.remainOnResize==="hide")n.hidden=!0;else if(n.remainOnResize==="remove")n.remove()})},{passive:!0});document.addEventListener("scroll",(n)=>{if(n.target instanceof HTMLElement&&n.target.closest(Nn.tagName))return;[...Nn.floats].forEach((t)=>{if(t.remainOnScroll==="hide")t.hidden=!0;else if(t.remainOnScroll==="remove")t.remove()})},{passive:!0,capture:!0});/*!
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

*/var eo=(n)=>{let{content:t,target:e,position:i}=n,a=Array.isArray(t)?Pi(...t):Pi(t);return to(a,e,i),document.body.append(a),a},to=(n,t,e)=>{{let{position:p}=getComputedStyle(n);if(p!=="fixed")n.style.position="fixed";Re(n)}let{left:i,top:a,width:s,height:o}=t.getBoundingClientRect(),l=i+s*0.5,r=a+o*0.5,h=window.innerWidth,d=window.innerHeight;if(e==="side")e=(l<h*0.5?"e":"w")+(r<d*0.5?"s":"n");else if(e==="auto"||e===void 0)e=(r<d*0.5?"s":"n")+(l<h*0.5?"e":"w");if(n.style.top=n.style.left=n.style.right=n.style.bottom=n.style.transform="",e.length===2){let[p,m]=e;switch(p){case"n":n.style.bottom=(d-a).toFixed(2)+"px";break;case"e":n.style.left=(i+s).toFixed(2)+"px";break;case"s":n.style.top=(a+o).toFixed(2)+"px";break;case"w":n.style.right=(h-i).toFixed(2)+"px";break}switch(m){case"n":n.style.bottom=(d-a-o).toFixed(2)+"px";break;case"e":n.style.left=i.toFixed(2)+"px";break;case"s":n.style.top=a.toFixed(2)+"px";break;case"w":n.style.right=(h-i-s).toFixed(2)+"px";break}n.style.transform=""}else if(e==="n")n.style.bottom=(d-a).toFixed(2)+"px",n.style.left=l.toFixed(2)+"px",n.style.transform="translateX(-50%)";else if(e==="s")n.style.top=(a+o).toFixed(2)+"px",n.style.left=l.toFixed(2)+"px",n.style.transform="translateX(-50%)";else if(e==="e")n.style.left=(i+s).toFixed(2)+"px",n.style.top=r.toFixed(2)+"px",n.style.transform="translateY(-50%)";else if(e==="w")n.style.right=(h-i).toFixed(2)+"px",n.style.top=r.toFixed(2)+"px",n.style.transform="translateY(-50%)";n.style.setProperty("--max-height",`calc(100vh - ${n.style.top||n.style.bottom})`),n.style.setProperty("--max-width",`calc(100vw - ${n.style.left||n.style.right})`)};/*!
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
*/var{div:Ni,button:x1,span:zn,a:io}=X;Gs("xin-menu-helper",{".xin-menu":{overflow:"hidden auto",maxHeight:`calc(${T.maxHeight} - ${P.menuInset("8px")})`,borderRadius:T.spacing50,background:P.menuBg("#fafafa"),boxShadow:`${T.spacing13} ${T.spacing50} ${T.spacing} ${T.shadowColor}`},".xin-menu > div":{width:P.menuWidth("auto")},".xin-menu-trigger":{paddingLeft:0,paddingRight:0,minWidth:P.touchSize("48px")},".xin-menu-separator":{display:"inline-block",content:" ",height:"1px",width:"100%",background:P.menuItemColor("#222"),opacity:0.25,margin:P.menuSeparatorMargin("8px 0")},".xin-menu-item":{boxShadow:"none",border:"none !important",display:"grid",alignItems:"center",justifyContent:"flex-start",textDecoration:"none",gridTemplateColumns:"0px 1fr 30px",width:"100%",gap:0,background:"transparent",padding:P.menuItemPadding("0 16px"),height:P.menuItemHeight("48px"),lineHeight:P.menuItemHeight("48px"),textAlign:"left"},".xin-menu-item, .xin-menu-item > span":{color:P.menuItemColor("#222")},".xin-menu-with-icons .xin-menu-item":{gridTemplateColumns:"30px 1fr 30px"},".xin-menu-item svg":{fill:P.menuItemIconColor("#222")},".xin-menu-item.xin-menu-item-checked":{background:P.menuItemHoverBg("#eee")},".xin-menu-item > span:nth-child(2)":{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textAlign:"left"},".xin-menu-item:hover":{boxShadow:"none !important",background:P.menuItemHoverBg("#eee")},".xin-menu-item:active":{boxShadow:"none !important",background:P.menuItemActiveBg("#aaa"),color:P.menuItemActiveColor("#000")},".xin-menu-item:active svg":{fill:P.menuItemIconActiveColor("#000")}});var ao=(n)=>{let t=n.checked&&n.checked()&&"check"||!1,e=n?.icon||t||zn(" ");if(typeof e==="string")e=I[e]();let i;if(typeof n?.action==="string")i=io({class:"xin-menu-item",href:n.action},e,zn(n.caption),zn(n.shortcut||" "));else i=x1({class:"xin-menu-item",onClick:n.action},e,zn(n.caption),zn(n.shortcut||" "));if(i.classList.toggle("xin-menu-item-checked",t!==!1),n?.enabled&&!n.enabled())i.setAttribute("disabled","");return i},so=(n,t)=>{let e=n.checked&&n.checked()&&"check"||!1,i=n?.icon||e||zn(" ");if(typeof i==="string")i=I[i]();let a=x1({class:"xin-menu-item",disabled:!(!n.enabled||n.enabled()),onClick(s){ze(Object.assign({},t,{menuItems:n.menuItems,target:a,submenuDepth:(t.submenuDepth||0)+1,position:"side"})),s.stopPropagation(),s.preventDefault()}},i,zn(n.caption),I.chevronRight({style:{justifySelf:"flex-end"}}));return a},oo=(n,t)=>{if(n===null)return zn({class:"xin-menu-separator"});else if(n?.action)return ao(n);else return so(n,t)},lo=(n)=>{let{target:t,width:e,menuItems:i}=n,a=i.find((s)=>s?.icon||s?.checked);return Ni({class:a?"xin-menu xin-menu-with-icons":"xin-menu",onClick(){se(0)}},Ni({style:{minWidth:t.offsetWidth+"px",width:typeof e==="number"?`${e}px`:e},onMousedown(s){s.preventDefault(),s.stopPropagation()}},...i.map((s)=>oo(s,n))))},ee,Je=[],se=(n=0)=>{let t=Je.splice(n);for(let e of t)e.menu.remove();return ee=t[0],n>0?Je[n-1]:void 0};document.body.addEventListener("mousedown",(n)=>{if(n.target&&!Je.find((t)=>t.target.contains(n.target)))se(0)});document.body.addEventListener("keydown",(n)=>{if(n.key==="Escape")se(0)});var ze=(n)=>{n=Object.assign({submenuDepth:0},n);let{target:t,position:e,submenuDepth:i}=n;if(ee&&!document.body.contains(ee?.menu))ee=void 0;if(i===0&&ee?.target===t)return;let a=se(i);if(ee?.target===t)return;if(a&&a.target===t){se();return}let s=lo(n),o=eo({content:s,target:t,position:e});o.remainOnScroll="remove",Je.push({target:t,menu:o})},ro={};Vs(ro,{init:()=>S1,draggedElement:()=>go});/*!
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
*/var co=()=>!!document.querySelector(".drag-source"),w1=(n,t)=>{if(!n)return!1;for(let e of n)if(e==="special/any")return!0;else if(e.indexOf("*")>-1){let[i,a]=e.split("/"),[s,o]=t.split("/");if((i==="*"||i===s)&&(a==="*"||a===o))return!0}else if(e===t)return!0},Ge=(n)=>{for(let t of[...document.querySelectorAll(`.${n}`)])t.classList.remove(n)},M1=()=>{Ge("drag-over"),Ge("drag-source"),Ge("drag-target")},Vt=(n,t=";")=>{return(n||"").split(t).map((e)=>e.trim()).filter((e)=>e!=="")},z1=(n)=>{if(!n)n=[];let t=[...document.querySelectorAll("[data-drop]")];for(let e of t){let i=Vt(e.dataset.drop);if(n.find((a)=>w1(i,a)))e.classList.add("drag-target");else e.classList.remove("drag-target")}};function ho(n){let t=n.target?.closest('[draggable="true"],a[href]');if(!t)return;t.classList.add("drag-source");let e=t.matches('[draggable="true"]')?Vt(t.dataset.drag||"text/html"):Vt(t.dataset.drag||"url");for(let i of e){let a=t.dataset.dragContent||(i==="text/html"?t.innerHTML:t.textContent);n.dataTransfer?.setData(i,a||"")}z1(n.dataTransfer?.types),n.stopPropagation()}function Vi(n){if(!co())z1(n.dataTransfer?.types);let t=n.target.closest(".drag-target");if(t&&n.dataTransfer)t.classList.add("drag-over"),n.dataTransfer.dropEffect="copy";else n.preventDefault(),n.stopPropagation()}function uo(){Ge("drag-over")}function po(n){let t=n.target.closest(".drag-target");if(t){let e=(t.dataset?.drop||"").split(";");for(let i of e)if(w1(n.dataTransfer?.types,i))if(i==="text/html")t.innerHTML=n.dataTransfer?.getData(i)||"";else t.textContent=n.dataTransfer?.getData(i)||""}M1()}var go=()=>document.querySelector(".drag-source"),Wi=!1,S1=()=>{if(Wi)return;document.body.addEventListener("dragstart",ho),document.body.addEventListener("dragenter",Vi),document.body.addEventListener("dragover",Vi),document.body.addEventListener("drop",po),document.body.addEventListener("dragleave",uo),document.body.addEventListener("dragend",M1),window.addEventListener("dragover",(n)=>n.preventDefault()),window.addEventListener("drop",(n)=>n.preventDefault()),Wi=!0};/*!
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
*/function fo(n,t,e){let i=n.find((a)=>a[t]!==void 0&&a[t]!==null);if(i!==void 0){let a=i[t];switch(typeof a){case"string":if(a.match(/^\d+(\.\d+)?$/))return 6*e;else if(a.includes(" "))return 20*e;else return 12*e;case"number":return 6*e;case"boolean":return 5*e;case"object":return!1;default:return 8*e}}return!1}var{div:kn,span:Ne,button:mo,template:bo}=X,Gi=(n)=>n;class C1 extends J{select=!1;multiple=!1;nosort=!1;nohide=!1;noreorder=!1;selectionChanged=()=>{};selectedKey=Symbol("selected");selectBinding=(n,t)=>{n.toggleAttribute("aria-selected",t[this.selectedKey]===!0)};pinnedTop=0;pinnedBottom=0;maxVisibleRows=1e4;get value(){return{array:this.array,filter:this.filter,columns:this.columns}}set value(n){let{array:t,columns:e,filter:i}=pe(n);if(this._array!==t||this._columns!==e||this._filter!==i)this.queueRender();this._array=t||[],this._columns=e||null,this._filter=i||Gi}rowData={visible:[],pinnedTop:[],pinnedBottom:[]};_array=[];_columns=null;_filter=Gi;charWidth=15;rowHeight=30;minColumnWidth=30;get virtual(){return this.rowHeight>0?{height:this.rowHeight}:void 0}constructor(){super();this.rowData=p1({[this.instanceId]:this.rowData},!0)[this.instanceId],this.initAttributes("rowHeight","charWidth","minColumnWidth","select","multiple","pinnedTop","pinnedBottom","nosort","nohide","noreorder")}get array(){return this._array}set array(n){this._array=pe(n),this.queueRender()}get filter(){return this._filter}set filter(n){if(this._filter!==n)this._filter=n,this.queueRender()}get sort(){if(this._sort)return this._sort;let n=this._columns?.find((e)=>e.sort==="ascending"||e.sort==="descending");if(!n)return;let{prop:t}=n;return n.sort==="ascending"?(e,i)=>e[t]>i[t]?1:-1:(e,i)=>e[t]>i[t]?-1:1}set sort(n){if(this._sort!==n)this._sort=n,this.queueRender()}get columns(){if(!Array.isArray(this._columns)){let{_array:n}=this;this._columns=Object.keys(n[0]||{}).map((t)=>{let e=fo(n,t,this.charWidth);return{name:t.replace(/([a-z])([A-Z])/g,"$1 $2").toLocaleLowerCase(),prop:t,align:typeof n[0][t]==="number"||n[0][t]!==""&&!isNaN(n[0][t])?"right":"left",visible:e!==!1,width:e?e:0}})}return this._columns}set columns(n){this._columns=n,this.queueRender()}get visibleColumns(){return this.columns.filter((n)=>n.visible!==!1)}content=null;getColumn(n){let t=(n.touches!==void 0?n.touches[0].clientX:n.clientX)-this.getBoundingClientRect().x,e=n.touches!==void 0?20:5,i=0,a=[];return this.visibleColumns.find((o)=>{if(o.visible!==!1)return i+=o.width,a.push(i),Math.abs(t-i)<e})}setCursor=(n)=>{if(this.getColumn(n)!==void 0)this.style.cursor="col-resize";else this.style.cursor=""};resizeColumn=(n)=>{let t=this.getColumn(n);if(t!==void 0){let e=Number(t.width),i=n.touches!==void 0,a=i?n.touches[0].identifier:void 0;Pn(n,(s,o,l)=>{if((i?[...l.touches].find((d)=>d.identifier===a):!0)===void 0)return!0;let h=e+s;if(t.width=h>this.minColumnWidth?h:this.minColumnWidth,this.setColumnWidths(),l.type==="mouseup")return!0},"col-resize")}};selectRow(n,t=!0){if(t)n[this.selectedKey]=!0;else delete n[this.selectedKey]}selectRows(n,t=!0){for(let e of n||this.array)this.selectRow(e,t)}deSelect(n){this.selectRows(n,!1)}rangeStart;updateSelection=(n)=>{if(!this.select&&!this.multiple)return;let{target:t}=n;if(!(t instanceof HTMLElement))return;let e=t.closest(".tr");if(!(e instanceof HTMLElement))return;let i=Us(e);if(i===!1)return;let a=n,s=window.getSelection();if(s!==null)s.removeAllRanges();let o=this.visibleRows;if(this.multiple&&a.shiftKey&&o.length>0&&this.rangeStart!==i){let l=this.rangeStart===void 0||this.rangeStart[this.selectedKey]===!0,[r,h]=[this.rangeStart!==void 0?o.indexOf(this.rangeStart):0,o.indexOf(i)].sort((d,p)=>d-p);if(r>-1)for(let d=r;d<=h;d++){let p=o[d];this.selectRow(p,l)}}else if(this.multiple&&a.metaKey){this.selectRow(i,!i[this.selectedKey]);let l=o.indexOf(i),r=o[l+1],h=l>0?o[l-1]:void 0;if(r!==void 0&&r[this.selectedKey]===!0)this.rangeStart=r;else if(h!==void 0&&h[this.selectedKey]===!0)this.rangeStart=h;else this.rangeStart=void 0}else this.rangeStart=i,this.deSelect(),i[this.selectedKey]=!0;this.selectionChanged(this.visibleSelectedRows)};connectedCallback(){super.connectedCallback(),this.addEventListener("mousemove",this.setCursor),this.addEventListener("mousedown",this.resizeColumn),this.addEventListener("touchstart",this.resizeColumn,{passive:!0}),this.addEventListener("mouseup",this.updateSelection),this.addEventListener("touchend",this.updateSelection)}setColumnWidths(){this.style.setProperty("--grid-columns",this.visibleColumns.map((n)=>n.width+"px").join(" ")),this.style.setProperty("--grid-row-width",this.visibleColumns.reduce((n,t)=>n+t.width,0)+"px")}sortByColumn=(n,t="auto")=>{for(let e of this.columns.filter((i)=>pe(i.sort)!==!1))if(pe(e)===n){if(t==="auto")e.sort=e.sort==="ascending"?"descending":"ascending";else e.sort=t;this.queueRender()}else delete e.sort};popColumnMenu=(n,t)=>{let{sortByColumn:e}=this,i=this.columns.filter((o)=>o.visible===!1),a=this.queueRender.bind(this),s=[];if(!this.nosort&&t.sort!==!1)s.push({caption:"Sort Ascending",icon:"sortAscending",action(){e(t)}},{caption:"Sort Descending",icon:"sortDescending",action(){e(t,"descending")}});if(!this.nohide){if(s.length)s.push(null);s.push({caption:"Hide Column",icon:"eyeOff",enabled:()=>t.visible!==!0,action(){t.visible=!1,a()}},{caption:"Show Column",icon:"eye",enabled:()=>i.length>0,menuItems:i.map((o)=>{return{caption:o.name||o.prop,action(){delete o.visible,a()}}})})}ze({target:n,menuItems:s})};headerCell=(n)=>{let{popColumnMenu:t}=this,e="none",i;switch(n.sort){case"ascending":i=I.sortAscending(),e="descending";break;case!1:break;default:break;case"descending":e="ascending",i=I.sortDescending()}let a=!(this.nosort&&this.nohide)?mo({class:"menu-trigger",onClick(s){t(s.target,n),s.stopPropagation()}},i||I.moreVertical()):{};return n.headerCell!==void 0?n.headerCell(n):Ne({class:"th",role:"columnheader",ariaSort:e,style:{...this.cellStyle,textAlign:n.align||"left"}},Ne(typeof n.name==="string"?n.name:n.prop),Ne({style:{flex:"1"}}),a)};dataCell=(n)=>{if(n.dataCell!==void 0)return n.dataCell(n);return Ne({class:"td",role:"cell",style:{...this.cellStyle,textAlign:n.align||"left"},bindText:`^.${n.prop}`})};get visibleRows(){return pe(this.rowData.visible)}get visibleSelectedRows(){return this.visibleRows.filter((n)=>n[this.selectedKey])}get selectedRows(){return this.array.filter((n)=>n[this.selectedKey])}rowTemplate(n){return bo(kn({class:"tr",role:"row",bind:{value:"^",binding:{toDOM:this.selectBinding}}},...n.map(this.dataCell)))}draggedColumn;dropColumn=(n)=>{let t=n.target.closest(".drag-over"),e=Array.from(t.parentElement.children).indexOf(t),i=this.visibleColumns[e],a=this.columns.indexOf(this.draggedColumn),s=this.columns.indexOf(i);this.columns.splice(a,1),this.columns.splice(s,0,this.draggedColumn),console.log({event:n,target:t,targetIndex:e,draggedIndex:a,droppedIndex:s}),this.queueRender(),n.preventDefault(),n.stopPropagation()};render(){super.render(),this.rowData.pinnedTop=this.pinnedTop>0?this._array.slice(0,this.pinnedTop):[],this.rowData.pinnedBottom=this.pinnedBottom>0?this._array.slice(this._array.length-this.pinnedBottom):[],this.rowData.visible=this.filter(this._array.slice(this.pinnedTop,Math.min(this.maxVisibleRows,this._array.length-this.pinnedTop-this.pinnedBottom)));let{sort:n}=this;if(n)this.rowData.visible.sort(n);this.textContent="",this.style.display="flex",this.style.flexDirection="column";let{visibleColumns:t}=this;if(this.style.setProperty("--row-height",`${this.rowHeight}px`),this.setColumnWidths(),!this.noreorder)S1();let e=this.instanceId+"-column-header",i=t.map((a)=>{let s=this.headerCell(a);if(!this.noreorder)s.setAttribute("draggable","true"),s.dataset.drag=e,s.dataset.drop=e,s.addEventListener("dragstart",()=>{this.draggedColumn=a}),s.addEventListener("drop",this.dropColumn);return s});if(this.append(kn({class:"thead",role:"rowgroup",style:{touchAction:"none"}},kn({class:"tr",role:"row"},...i))),this.pinnedTop>0)this.append(kn({part:"pinnedTopRows",class:"tbody",role:"rowgroup",style:{flex:"0 0 auto",overflow:"hidden",height:`${this.rowHeight*this.pinnedTop}px`},bindList:{value:this.rowData.pinnedTop,virtual:this.virtual}},this.rowTemplate(t)));if(this.append(kn({part:"visibleRows",class:"tbody",role:"rowgroup",style:{content:" ",minHeight:"100px",flex:"1 1 100px",overflow:"hidden auto"},bindList:{value:this.rowData.visible,virtual:this.virtual}},this.rowTemplate(t))),this.pinnedBottom>0)this.append(kn({part:"pinnedBottomRows",class:"tbody",role:"rowgroup",style:{flex:"0 0 auto",overflow:"hidden",height:`${this.rowHeight*this.pinnedBottom}px`},bindList:{value:this.rowData.pinnedBottom,virtual:this.virtual}},this.rowTemplate(t)))}}var z3=C1.elementCreator({tag:"xin-table",styleSpec:{":host":{overflow:"auto hidden"},":host .thead, :host .tbody":{width:T.gridRowWidth},":host .tr":{display:"grid",gridTemplateColumns:T.gridColumns,height:T.rowHeight,lineHeight:T.rowHeight},":host .td, :host .th":{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",display:"flex",alignItems:"center"},":host .th .menu-trigger":{color:"currentColor",background:"none",padding:0,lineHeight:T.touchSize,height:T.touchSize,width:T.touchSize},':host [draggable="true"]':{cursor:"ew-resize"},':host [draggable="true"]:active':{background:P.draggedHeaderBg("#0004"),color:P.draggedHeaderColor("#fff")},":host .drag-over":{background:P.dropHeaderBg("#fff4")}}});/*!
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
*/var{div:hn,slot:vo}=X;class fn extends J{static angleSize=15;static gridSize=8;static snapAngle=!1;static snapToGrid=!1;static styleSpec={":host":{"--handle-bg":"#fff4","--handle-color":"#2228","--handle-hover-bg":"#8ff8","--handle-hover-color":"#222","--handle-size":"20px","--handle-padding":"2px"},":host ::slotted(*)":{position:"absolute"},":host > :not(style,slot)":{boxSizing:"border-box",content:'" "',position:"absolute",display:"flex",height:T.handleSize,width:T.handleSize,padding:T.handlePadding,"--text-color":T.handleColor,background:T.handleBg},":host > .drag-size":{top:0,bottom:0,left:0,right:0,height:"auto",width:"auto",background:"transparent",cursor:"ew-resize"},':host > [part="rotate"]':{transform:`translateY(${T.handleSize_50})`},":host > [locked] > svg:first-child, :host > :not([locked]) > svg+svg":{display:"none"},":host .icon-unlock":{opacity:0.5},":host svg":{pointerEvents:"none"},":host > *:hover":{"--text-color":T.handleHoverColor,background:T.handleHoverBg}};static snappedCoords(n,t){let{gridSize:e}=fn;return fn.snapToGrid||n.shiftKey?t.map((i)=>Math.round(i/e)*e):t}static snappedAngle(n,t){let{angleSize:e}=fn;return fn.snapAngle||n.shiftKey?Math.round(t/e)*e:t}get locked(){let n=this.parentElement;if(n.style.inset)return{left:!0,top:!0,bottom:!0,right:!0};let t=n.style.right.match(/\d/)!==null,e=!t||n.style.left.match(/\d/)!==null,i=n.style.bottom.match(/\d/)!==null,a=!i||n.style.top.match(/\d/)!==null;return{left:e,top:a,bottom:i,right:t}}set locked(n){let{bottom:t,right:e}=n,{left:i,top:a}=n,s=this.parentElement,o=s.offsetLeft,l=s.offsetTop,r=s.offsetWidth,h=s.offsetHeight,d=s.offsetParent.offsetWidth-o-r,p=s.offsetParent.offsetHeight-l-h;if(Object.assign(s.style,{left:"",right:"",top:"",bottom:"",width:"",height:""}),!e)i=!0;if(!t)a=!0;if(i)s.style.left=o+"px";if(e)s.style.right=d+"px";if(i&&e)s.style.width="auto";else s.style.width=r+"px";if(a)s.style.top=l+"px";if(t)s.style.bottom=p+"px";if(a&&t)s.style.height="auto";else s.style.height=h+"px";this.queueRender()}get coords(){let{top:n,left:t,right:e,bottom:i}=this.parentElement.style;return{top:parseFloat(n),left:parseFloat(t),right:parseFloat(e),bottom:parseFloat(i)}}get left(){return this.parentElement.offsetLeft}get width(){return this.parentElement.offsetWidth}get right(){return this.parentElement.offsetParent.offsetWidth-(this.left+this.width)}get top(){return this.parentElement.offsetTop}get height(){return this.parentElement.offsetHeight}get bottom(){return this.parentElement.offsetParent.offsetHeight-(this.top+this.height)}triggerChange=()=>{this.parentElement.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))};adjustPosition=(n)=>{let{locked:t}=this;this.locked=t;let e=this.parentElement,{top:i,left:a,bottom:s,right:o}=this.coords;Pn(n,(l,r,h)=>{if([l,r]=fn.snappedCoords(h,[l,r]),!isNaN(i))e.style.top=i+r+"px";if(!isNaN(s))e.style.bottom=s-r+"px";if(!isNaN(a))e.style.left=a+l+"px";if(!isNaN(o))e.style.right=o-l+"px";if(h.type==="mouseup")return this.triggerChange(),!0})};resize=(n)=>{let t=this.parentElement,{locked:e}=this;this.locked=Object.assign({left:!0,top:!0,right:!0,bottom:!0});let[i,a]=[this.right,this.bottom];Pn(n,(s,o,l)=>{let r=i-s,h=a-o;if([r,h]=fn.snappedCoords(l,[r,h]),t.style.right=r+"px",t.style.bottom=h+"px",l.type==="mouseup")return this.locked=e,this.triggerChange(),!0})};adjustSize=(n)=>{let t=this.parentElement,{locked:e}=this,i=n.target.getAttribute("part");this.locked=Object.assign({left:!0,right:!0,top:!0,bottom:!0});let a=this[i];Pn(n,(s,o,l)=>{let[r]=fn.snappedCoords(l,[a+(["left","right"].includes(i)?s:o)*(["right","bottom"].includes(i)?-1:1)]);if(t.style[i]=r+"px",l.type==="mouseup")return this.locked=e,this.triggerChange(),!0})};get rect(){return this.parentElement.getBoundingClientRect()}get center(){let n=this.parentElement.getBoundingClientRect();return{x:n.x+n.width*0.5,y:n.y+n.height*0.5}}get element(){return this.parentElement}adjustRotation=(n)=>{let{center:t}=this,{transformOrigin:e}=this.element.style;if(!e)this.element.style.transformOrigin="50% 50%";Pn(n,(i,a,s)=>{let{clientX:o,clientY:l}=s,r=o-t.x,h=l-t.y,d=h>0?90:-90;if(r!==0)d=Math.atan2(h,r)*180/Math.PI;if(d=fn.snappedAngle(s,d),d===0)this.element.style.transformOrigin="",this.element.style.transform="";else this.element.style.transform=`rotate(${d}deg)`;return this.triggerChange(),s.type==="mouseup"})};toggleLock=(n)=>{let{locked:t}=this,e=n.target.title.split(" ")[1];t[e]=!t[e],this.locked=t,this.queueRender(),n.stopPropagation(),n.preventDefault()};content=()=>[hn({part:"move",style:{top:"50%",left:"50%",transform:"translate(-50%,-50%)"}},I.move()),hn({part:"left",title:"resize left",class:"drag-size",style:{left:"-6px",width:"8px"}}),hn({part:"right",title:"resize right",class:"drag-size",style:{left:"calc(100% - 2px)",width:"8px"}}),hn({part:"top",title:"resize top",class:"drag-size",style:{top:"-6px",height:"8px",cursor:"ns-resize"}}),hn({part:"bottom",title:"resize bottom",class:"drag-size",style:{top:"calc(100% - 2px)",height:"8px",cursor:"ns-resize"}}),hn({part:"resize",style:{top:"100%",left:"100%"}},I.resize()),hn({part:"rotate",style:{top:"50%",right:"0"}},I.refresh()),hn({part:"lockLeft",title:"lock left",style:{top:"50%",left:0,transform:"translate(-100%, -50%)"}},I.unlock(),I.lock()),hn({part:"lockRight",title:"lock right",style:{top:"50%",left:"100%",transform:"translate(0%, -50%)"}},I.unlock(),I.lock()),hn({part:"lockTop",title:"lock top",style:{top:0,left:"50%",transform:"translate(-50%, -100%)"}},I.unlock(),I.lock()),hn({part:"lockBottom",title:"lock bottom",style:{top:"100%",left:"50%",transform:"translate(-50%, 0%)"}},I.unlock(),I.lock()),vo()];constructor(){super();this.initAttributes("rotationSnap","positionSnap")}connectedCallback(){super.connectedCallback();let{left:n,right:t,top:e,bottom:i,lockLeft:a,lockRight:s,lockTop:o,lockBottom:l,move:r,resize:h,rotate:d}=this.parts,p={passive:!0};[n,t,e,i].forEach((m)=>{m.addEventListener("mousedown",this.adjustSize,p),m.addEventListener("touchstart",this.adjustSize,p)}),[a,s,o,l].forEach((m)=>{m.addEventListener("click",this.toggleLock)}),h.addEventListener("mousedown",this.resize,p),r.addEventListener("mousedown",this.adjustPosition,p),d.addEventListener("mousedown",this.adjustRotation,p),h.addEventListener("touchstart",this.resize,p),r.addEventListener("touchstart",this.adjustPosition,p),d.addEventListener("touchstart",this.adjustRotation,p)}render(){if(super.render(),!this.parentElement)return;let{lockLeft:n,lockRight:t,lockTop:e,lockBottom:i}=this.parts,{left:a,right:s,top:o,bottom:l}=this.locked;n.toggleAttribute("locked",a),t.toggleAttribute("locked",s),e.toggleAttribute("locked",o),i.toggleAttribute("locked",l)}}var S3=fn.elementCreator({tag:"xin-editable"});/*!
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
*/var{div:yo,input:xo,select:Ui,option:ge,button:Wt,span:wo}=X,Yi=(n)=>n,Ri="null filter, everything matches",T1={contains:{caption:"contains",negative:"does not contain",makeTest:(n)=>{return n=n.toLocaleLowerCase(),(t)=>String(t).toLocaleLowerCase().includes(n)}},hasTags:{caption:"has tags",makeTest:(n)=>{let t=n.split(/[\s,]/).map((e)=>e.trim().toLocaleLowerCase()).filter((e)=>e!=="");return console.log(t),(e)=>Array.isArray(e)&&t.find((i)=>!e.includes(i))===void 0}},doesNotHaveTags:{caption:"does not have tags",makeTest:(n)=>{let t=n.split(/[\s,]/).map((e)=>e.trim().toLocaleLowerCase()).filter((e)=>e!=="");return console.log(t),(e)=>Array.isArray(e)&&t.find((i)=>e.includes(i))===void 0}},equals:{caption:"=",negative:"≠",makeTest:(n)=>{if(isNaN(Number(n)))return n=String(n).toLocaleLowerCase(),(e)=>String(e).toLocaleLowerCase()===n;let t=Number(n);return(e)=>Number(e)===t}},after:{caption:"is after",negative:"is before",makeTest:(n)=>{let t=new Date(n);return(e)=>new Date(e)>t}},greaterThan:{caption:">",negative:"≤",makeTest:(n)=>{if(!isNaN(Number(n))){let t=Number(n);return(e)=>Number(e)>t}return n=n.toLocaleLowerCase(),(t)=>String(t).toLocaleLowerCase()>n}},truthy:{caption:"is true/non-empty/non-zero",negative:"is false/empty/zero",needsValue:!1,makeTest:()=>(n)=>!!n},isTrue:{caption:"= true",needsValue:!1,makeTest:()=>(n)=>n===!0},isFalse:{caption:"= false",needsValue:!1,makeTest:()=>(n)=>n===!1}},Mo={description:"anything",test:()=>!0};function Ji(n){return n.options[n.selectedIndex].text}class A1 extends J{fields=[];filters=T1;haystack="*";condition="";needle="";content=()=>[Ui({part:"haystack"}),I.chevronDown(),Ui({part:"condition"}),I.chevronDown(),xo({part:"needle",type:"search"}),wo({part:"padding"}),Wt({part:"remove",title:"delete"},I.trash())];filter=Mo;constructor(){super();this.initAttributes("haystack","condition","needle")}get state(){let{haystack:n,needle:t,condition:e}=this.parts;return{haystack:n.value,needle:t.value,condition:e.value}}set state(n){Object.assign(this,n)}buildFilter=()=>{let{haystack:n,condition:t,needle:e}=this.parts,i=t.value.startsWith("~"),a=i?t.value.slice(1):t.value,s=this.filters[a];e.hidden=s.needsValue===!1;let o=s.needsValue===!1?s.makeTest(void 0):s.makeTest(e.value),l=n.value,r;if(l!=="*")r=i?(p)=>!o(p[l]):(p)=>o(p[l]);else r=i?(p)=>Object.values(p).find((m)=>!o(m))!==void 0:(p)=>Object.values(p).find((m)=>o(m))!==void 0;let h=s.needsValue!==!1?` "${e.value}"`:"",d=`${Ji(n)} ${Ji(t)}${h}`;this.filter={description:d,test:r},this.parentElement?.dispatchEvent(new Event("change"))};connectedCallback(){super.connectedCallback();let{haystack:n,condition:t,needle:e,remove:i}=this.parts;n.addEventListener("change",this.buildFilter),t.addEventListener("change",this.buildFilter),e.addEventListener("input",this.buildFilter),n.value=this.haystack,t.value=this.condition,e.value=this.needle,i.addEventListener("click",()=>{let{parentElement:a}=this;this.remove(),a?.dispatchEvent(new Event("change"))})}render(){super.render();let{haystack:n,condition:t,needle:e}=this.parts;n.textContent="",n.append(ge("any field",{value:"*"}),...this.fields.map((a)=>{let s=a.name||a.prop;return ge(`${s}`,{value:a.prop})})),t.textContent="";let i=Object.keys(this.filters).map((a)=>{let s=this.filters[a];return s.negative!==void 0?[ge(s.caption,{value:a}),ge(s.negative,{value:"~"+a})]:ge(s.caption,{value:a})}).flat();if(t.append(...i),this.haystack!=="")n.value=this.haystack;if(this.condition!=="")t.value=this.condition;if(this.needle!=="")e.value=this.needle;this.buildFilter()}}var Ht=A1.elementCreator({tag:"xin-filter-part",styleSpec:{":host":{display:"flex"},':host svg[class^="icon-"]:':{height:"var(--font-size, 16px)",verticalAlign:"middle",fill:"var(--text-color)",pointerEvents:"none"},':host [part="haystack"], :host [part="condition"]':{flex:"1"},':host [part="needle"]':{flex:2},':host [hidden]+[part="padding"]':{display:"block",content:" ",flex:"1 1 auto"}}});class E1 extends J{_fields=[];get fields(){return this._fields}set fields(n){this._fields=n,this.queueRender()}get state(){let{filterContainer:n}=this.parts;return[...n.children].map((t)=>t.state)}set state(n){let{fields:t,filters:e}=this,{filterContainer:i}=this.parts;i.textContent="";for(let a of n)i.append(Ht({fields:t,filters:e,...a}))}filter=Yi;description=Ri;addFilter=()=>{let{fields:n,filters:t}=this,{filterContainer:e}=this.parts;e.append(Ht({fields:n,filters:t}))};content=()=>[Wt({part:"add",title:"add filter condition",onClick:this.addFilter,class:"round"},I.plus()),yo({part:"filterContainer"}),Wt({part:"reset",title:"reset filter",onClick:this.reset},I.x())];filters=T1;reset=()=>{let{fields:n,filters:t}=this,{filterContainer:e}=this.parts;this.description=Ri,this.filter=Yi,e.textContent="",e.append(Ht({fields:n,filters:t})),this.dispatchEvent(new Event("change"))};buildFilter=()=>{let{filterContainer:n}=this.parts;if(n.children.length===0){this.reset();return}let t=[...n.children].map((i)=>i.filter),e=t.map((i)=>i.test);this.description=t.map((i)=>i.description).join(", "),this.filter=(i)=>i.filter((a)=>e.find((s)=>s(a)===!1)===void 0),this.dispatchEvent(new Event("change"))};connectedCallback(){super.connectedCallback();let{filterContainer:n}=this.parts;n.addEventListener("change",this.buildFilter),this.reset()}render(){super.render()}}var C3=E1.elementCreator({tag:"xin-filter",styleSpec:{":host":{height:"auto",display:"grid",gridTemplateColumns:"32px calc(100% - 64px) 32px",alignItems:"center"},':host [part="filterContainer"]':{display:"flex",flexDirection:"column",alignItems:"stretch",flex:"1 1 auto"},':host [part="add"], :host [part="reset"]':{"--button-size":"var(--touch-size, 32px)",borderRadius:"999px",height:"var(--button-size)",lineHeight:"var(--button-size)",margin:"0",padding:"0",textAlign:"center",width:"var(--button-size)",flex:"0 0 var(--button-size)"}}});/*!
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
*/var{form:zo,slot:_t,xinSlot:Ki,label:So,input:Co,span:To}=X;function Hn(n,t,e){if(e!==""&&e!==!1)n.setAttribute(t,e);else n.removeAttribute(t)}function Ao(n){switch(n.type){case"checkbox":return n.checked;case"radio":{let t=n.parentElement?.querySelector(`input[type="radio"][name="${n.name}"]:checked`);return t?t.value:null}case"range":case"number":return Number(n.value);default:return Array.isArray(n.value)&&n.value.length===0?null:n.value}}function Bi(n,t){if(!(n instanceof HTMLElement));else if(n instanceof HTMLInputElement)switch(n.type){case"checkbox":n.checked=t;break;case"radio":n.checked=t===n.value;break;default:n.value=String(t||"")}else if(t!=null||n.value!=null)n.value=String(t||"")}class Gt extends J{caption="";key="";type="";optional=!1;pattern="";placeholder="";min="";max="";step="";fixedPrecision=-1;value=null;content=So(Ki({part:"caption"}),To({part:"field"},Ki({part:"input",name:"input"}),Co({part:"valueHolder"})));constructor(){super();this.initAttributes("caption","key","type","optional","pattern","placeholder","min","max","step","fixedPrecision","prefix","suffix")}valueChanged=!1;handleChange=()=>{let{input:n,valueHolder:t}=this.parts,e=n.children[0]||t;if(e!==t)t.value=e.value;this.value=Ao(e),this.valueChanged=!0;let i=this.closest("xin-form");if(i&&this.key!=="")switch(this.type){case"checkbox":i.fields[this.key]=e.checked;break;case"number":case"range":if(this.fixedPrecision>-1)e.value=Number(e.value).toFixed(this.fixedPrecision),i.fields[this.key]=Number(e.value);else i.fields[this.key]=Number(e.value);break;default:i.fields[this.key]=e.value}};initialize(n){let t=n.fields[this.key]!==void 0?n.fields[this.key]:this.value;if(t!=null&&t!==""){if(n.fields[this.key]==null)n.fields[this.key]=t;this.value=t}}connectedCallback(){super.connectedCallback();let{input:n,valueHolder:t}=this.parts,e=this.closest(Ke.tagName);if(e instanceof Ke)this.initialize(e);t.addEventListener("change",this.handleChange),n.addEventListener("change",this.handleChange,!0)}render(){if(this.valueChanged){this.valueChanged=!1;return}let{input:n,caption:t,valueHolder:e,field:i}=this.parts;if(t.textContent?.trim()==="")t.append(this.caption!==""?this.caption:this.key);if(this.type==="text"){n.textContent="";let a=X.textarea({value:this.value});if(this.placeholder)a.setAttribute("placeholder",this.placeholder);n.append(a)}else if(this.type==="color")n.textContent="",n.append(ks({value:this.value}));else if(n.children.length===0)Hn(e,"placeholder",this.placeholder),Hn(e,"type",this.type),Hn(e,"pattern",this.pattern),Hn(e,"min",this.min),Hn(e,"max",this.max),Hn(e,"step",this.step);if(Bi(e,this.value),Bi(n.children[0],this.value),this.prefix?i.setAttribute("prefix",this.prefix):i.removeAttribute("prefix"),this.suffix?i.setAttribute("suffix",this.suffix):i.removeAttribute("suffix"),e.classList.toggle("hidden",n.children.length>0),n.children.length>0)e.setAttribute("tabindex","-1");else e.removeAttribute("tabindex");n.style.display=n.children.length===0?"none":"",Hn(e,"required",!this.optional)}}class Ke extends J{context={};value={};get isValid(){return[...this.querySelectorAll("*")].filter((t)=>t.required!==void 0).find((t)=>!t.reportValidity())===void 0}static styleSpec={":host":{display:"flex",flexDirection:"column"},":host::part(header), :host::part(footer)":{display:"flex"},":host::part(content)":{display:"flex",flexDirection:"column",overflow:"hidden auto",height:"100%",width:"100%",position:"relative",boxSizing:"border-box"},":host form":{display:"flex",flex:"1 1 auto",position:"relative",overflow:"hidden"}};content=[_t({part:"header",name:"header"}),zo({part:"form"},_t({part:"content"})),_t({part:"footer",name:"footer"})];getField=(n)=>{return this.querySelector(`xin-field[key="${n}"]`)};get fields(){if(typeof this.value==="string")try{this.value=JSON.parse(this.value)}catch(e){console.log("<xin-form> could not use its value, expects valid JSON"),this.value={}}let{getField:n}=this,t=this.dispatchEvent.bind(this);return new Proxy(this.value,{get(e,i){return e[i]},set(e,i,a){if(e[i]!==a){e[i]=a;let s=n(i);if(s)s.value=a;t(new Event("change"))}return!0}})}set fields(n){let t=[...this.querySelectorAll(Gt.tagName)];for(let e of t)e.value=n[e.key]}submit=()=>{this.parts.form.dispatchEvent(new Event("submit"))};handleSubmit=(n)=>{n.preventDefault(),n.stopPropagation(),this.submitCallback(this.value,this.isValid)};submitCallback=(n,t)=>{console.log("override submitCallback to handle this data",{value:n,isValid:t})};connectedCallback(){super.connectedCallback();let{form:n}=this.parts;n.addEventListener("submit",this.handleSubmit)}}var j1=Gt.elementCreator({tag:"xin-field",styleSpec:{':host [part="field"]':{position:"relative",display:"flex",alignItems:"center",gap:P.prefixSuffixGap("8px")},':host [part="field"][prefix]::before':{content:"attr(prefix)"},':host [part="field"][suffix]::after':{content:"attr(suffix)"},':host [part="field"] > *, :host [part="input"] > *':{width:"100%"},":host textarea":{resize:"none"},':host input[type="checkbox"]':{width:"fit-content"},":host .hidden":{position:"absolute",pointerEvents:"none",opacity:0}}}),O1=Ke.elementCreator({tag:"xin-form"});/*!
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
*/function Eo(){return navigator.getGamepads().filter((t)=>t!==null).map((t)=>{let{id:e,axes:i,buttons:a}=t;return{id:e,axes:i,buttons:a.map((s,o)=>{let{pressed:l,value:r}=s;return{index:o,pressed:l,value:r}}).filter((s)=>s.pressed||s.value!==0).reduce((s,o)=>{return s[o.index]=o.value,s},{})}})}function T3(){let n=Eo();return n.length===0?"no active gamepads":n.map(({id:t,axes:e,buttons:i})=>{let a=e.map((o)=>o.toFixed(2)).join(" "),s=Object.keys(i).map((o)=>`[${o}](${i[Number(o)].toFixed(2)})`).join(" ");return`${t}
${a}
${s}`}).join(`
`)}function A3(n){let t={};return n.input.onControllerAddedObservable.add((e)=>{e.onMotionControllerInitObservable.add((i)=>{let a={};i.getComponentIds().forEach((o)=>{let l=i.getComponent(o);if(a[o]={pressed:l.pressed},l.onButtonStateChangedObservable.add(()=>{a[o].pressed=l.pressed}),l.onAxisValueChangedObservable)a[o].axes=[],l.onAxisValueChangedObservable.add((r)=>{a[o].axes=r})}),t[i.handedness]=a})}),t}function E3(n){if(n===void 0||Object.keys(n).length===0)return"no xr inputs";return Object.keys(n).map((t)=>{let e=n[t],i=Object.keys(e).filter((a)=>e[a].pressed).join(" ");return`${t}
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
*/var{div:_n,slot:Qi,span:jo,button:Oo}=X;class Ut extends J{value=0;static makeTab(n,t,e){let i=t.querySelector('template[role="tab"]')?.content.cloneNode(!0)||jo(t.getAttribute("name"));return _n(i,{part:"tab",tabindex:0,role:"tab",ariaControls:e},t.hasAttribute("data-close")?Oo({title:"close",class:"close"},I.x()):{})}static styleSpec={":host":{display:"flex",flexDirection:"column",position:"relative",overflow:"hidden",boxShadow:"none !important"},slot:{position:"relative",display:"block",flex:"1",overflow:"hidden",overflowY:"auto"},'slot[name="after-tabs"]':{flex:"0 0 auto"},"::slotted([hidden])":{display:"none !important"},":host::part(tabpanel)":{display:"flex",flexDirection:"column",overflowX:"auto"},":host::part(tabrow)":{display:"flex"},":host .tabs":{display:"flex",userSelect:"none",whiteSpace:"nowrap"},":host .tabs > div":{padding:`${T.spacing50} ${T.spacing}`,cursor:"default",display:"flex",alignItems:"baseline"},':host .tabs > [aria-selected="true"]':{"--text-color":T.xinTabsSelectedColor,color:T.textColor},":host .elastic":{flex:"1"},":host .border":{background:"var(--xin-tabs-bar-color, #ccc)"},":host .border > .selected":{content:" ",width:0,height:"var(--xin-tabs-bar-height, 2px)",background:T.xinTabsSelectedColor,transition:"ease-out 0.2s"},":host button.close":{fill:T.textColor,border:0,background:"transparent",textAlign:"center",marginLeft:T.spacing50,padding:0},":host button.close > svg":{height:"12px"}};onCloseTab=null;content=[_n({role:"tabpanel",part:"tabpanel"},_n({part:"tabrow"},_n({class:"tabs",part:"tabs"}),_n({class:"elastic"}),Qi({name:"after-tabs"})),_n({class:"border"},_n({class:"selected",part:"selected"}))),Qi()];constructor(){super();this.initAttributes("anne","example")}addTabBody(n,t=!1){if(!n.hasAttribute("name"))throw console.error("element has no name attribute",n),new Error("element has no name attribute");if(this.append(n),this.setupTabs(),t)this.value=this.bodies.length-1;this.queueRender()}removeTabBody(n){n.remove(),this.setupTabs(),this.queueRender()}keyTab=(n)=>{let{tabs:t}=this.parts,e=[...t.children].indexOf(n.target);switch(n.key){case"ArrowLeft":this.value=(e+Number(t.children.length)-1)%t.children.length,t.children[this.value].focus(),n.preventDefault();break;case"ArrowRight":this.value=(e+1)%t.children.length,t.children[this.value].focus(),n.preventDefault();break;case" ":this.pickTab(n),n.preventDefault();break;default:}};get bodies(){return[...this.children].filter((n)=>n.hasAttribute("name"))}pickTab=(n)=>{let{tabs:t}=this.parts,e=n.target,i=e.closest("button.close")!==null,a=e.closest(".tabs > div"),s=[...t.children].indexOf(a);if(i){let o=this.bodies[s];if(!this.onCloseTab||this.onCloseTab(o)!==!1)this.removeTabBody(this.bodies[s])}else if(s>-1)this.value=s};setupTabs=()=>{let{tabs:n}=this.parts,t=[...this.children].filter((e)=>!e.hasAttribute("slot")&&e.hasAttribute("name"));if(n.textContent="",this.value>=t.length)this.value=t.length-1;for(let e in t){let i=t[e],a=`${this.instanceId}-${e}`;i.id=a;let s=Ut.makeTab(this,i,a);n.append(s)}};connectedCallback(){super.connectedCallback();let{tabs:n}=this.parts;n.addEventListener("click",this.pickTab),n.addEventListener("keydown",this.keyTab),this.setupTabs()}onResize(){this.queueRender()}render(){let{tabs:n,selected:t}=this.parts,e=this.bodies;for(let i=0;i<e.length;i++){let a=e[i],s=n.children[i];if(this.value===Number(i))s.setAttribute("aria-selected","true"),t.style.marginLeft=`${s.offsetLeft-n.offsetLeft}px`,t.style.width=`${s.offsetWidth}px`,a.toggleAttribute("hidden",!1);else s.toggleAttribute("aria-selected",!1),a.toggleAttribute("hidden",!0)}}}var Lo=Ut.elementCreator({tag:"xin-tabs"});/*!
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
*/var{div:Ve,xinSlot:Fo,style:Io,button:$n,h4:Do,pre:qo}=X,Ho=(async()=>{}).constructor;class Se extends J{persistToDom=!1;prettier=!1;prefix="lx";storageKey="live-example-payload";context={};uuid=crypto.randomUUID();remoteId="";lastUpdate=0;interval;static insertExamples(n,t={}){let e=[...n.querySelectorAll(".language-html,.language-js,.language-css")].filter((i)=>!i.closest(Se.tagName)).map((i)=>({block:i.parentElement,language:i.classList[0].split("-").pop(),code:i.innerText}));for(let i=0;i<e.length;i+=1){let a=[e[i]];while(i<e.length-1&&e[i].block.nextElementSibling===e[i+1].block)a.push(e[i+1]),i+=1;let s=Yt({context:t});a[0].block.parentElement.insertBefore(s,a[0].block),a.forEach((o)=>{switch(o.language){case"js":s.js=o.code;break;case"html":s.html=o.code;break;case"css":s.css=o.code;break}o.block.remove()}),s.showDefaultTab()}}constructor(){super();this.initAttributes("persistToDom","prettier")}get activeTab(){let{editors:n}=this.parts;return[...n.children].find((t)=>t.getAttribute("hidden")===null)}getEditorValue(n){return this.parts[n].value}setEditorValue(n,t){let e=this.parts[n];e.value=t}get css(){return this.getEditorValue("css")}set css(n){this.setEditorValue("css",n)}get html(){return this.getEditorValue("html")}set html(n){this.setEditorValue("html",n)}get js(){return this.getEditorValue("js")}set js(n){this.setEditorValue("js",n)}updateUndo=()=>{let{activeTab:n}=this,{undo:t,redo:e}=this.parts;if(n instanceof ve&&n.editor!==void 0){let i=n.editor.session.getUndoManager();t.disabled=!i.hasUndo(),e.disabled=!i.hasRedo()}else t.disabled=!0,e.disabled=!0};undo=()=>{let{activeTab:n}=this;if(n instanceof ve)n.editor.undo()};redo=()=>{let{activeTab:n}=this;if(n instanceof ve)n.editor.redo()};get isMaximized(){return this.classList.contains("-maximize")}flipLayout=()=>{this.classList.toggle("-vertical")};exampleMenu=()=>{ze({target:this.parts.exampleWidgets,width:"auto",menuItems:[{icon:"edit",caption:"view/edit code",action:this.showCode},{icon:"editDoc",caption:"view/edit code in a new window",action:this.openEditorWindow},null,{icon:this.isMaximized?"minimize":"maximize",caption:this.isMaximized?"restore preview":"maximize preview",action:this.toggleMaximize}]})};content=()=>[Ve({part:"example"},Io({part:"style"}),$n({title:"example menu",part:"exampleWidgets",onClick:this.exampleMenu},I.code())),Ve({class:"code-editors",part:"codeEditors",hidden:!0},Do("Code"),$n({title:"close code",class:"transparent close-button",onClick:this.closeCode},I.x()),Lo({part:"editors",onChange:this.updateUndo},Dt({name:"js",mode:"javascript",part:"js"}),Dt({name:"html",mode:"html",part:"html"}),Dt({name:"css",mode:"css",part:"css"}),Ve({slot:"after-tabs",class:"row"},$n({title:"undo",part:"undo",class:"transparent",onClick:this.undo},I.undo()),$n({title:"redo",part:"redo",class:"transparent",onClick:this.redo},I.redo()),$n({title:"flip direction",class:"transparent",onClick:this.flipLayout},I.sidebar()),$n({title:"copy as markdown",class:"transparent",onClick:this.copy},I.copy()),$n({title:"reload",class:"transparent",onClick:this.refreshRemote},I.refresh())))),Fo({part:"sources",hidden:!0})];connectedCallback(){super.connectedCallback();let{sources:n}=this.parts;this.initFromElements([...n.children]),addEventListener("storage",this.remoteChange),this.interval=setInterval(this.remoteChange,500),this.undoInterval=setInterval(this.updateUndo,250)}disconnectedCallback(){super.disconnectedCallback();let{storageKey:n,remoteKey:t}=this;clearInterval(this.interval),clearInterval(this.undoInterval),localStorage.setItem(n,JSON.stringify({remoteKey:t,sentAt:Date.now(),close:!0}))}copy=()=>{let n=this.js!==""?"```js\n"+this.js.trim()+"\n```\n":"",t=this.html!==""?"```html\n"+this.html.trim()+"\n```\n":"",e=this.css!==""?"```css\n"+this.css.trim()+"\n```\n":"";navigator.clipboard.writeText(n+t+e)};toggleMaximize=()=>{this.classList.toggle("-maximize")};get remoteKey(){return this.remoteId!==""?this.prefix+"-"+this.remoteId:this.prefix+"-"+this.uuid}remoteChange=(n)=>{let t=localStorage.getItem(this.storageKey);if(n instanceof StorageEvent&&n.key!==this.storageKey)return;if(t===null)return;let{remoteKey:e,sentAt:i,css:a,html:s,js:o,close:l}=JSON.parse(t);if(i<=this.lastUpdate)return;if(e!==this.remoteKey)return;if(l===!0)window.close();console.log("received new code",i,this.lastUpdate),this.lastUpdate=i,this.css=a,this.html=s,this.js=o,this.refresh()};showCode=()=>{this.classList.add("-maximize"),this.classList.toggle("-vertical",this.offsetHeight>this.offsetWidth),this.parts.codeEditors.hidden=!1};closeCode=()=>{if(this.remoteId!=="")window.close();else this.classList.remove("-maximize"),this.parts.codeEditors.hidden=!0};openEditorWindow=()=>{let{storageKey:n,remoteKey:t,css:e,html:i,js:a,uuid:s,prefix:o}=this,l=location.href.split("?")[0]+`?${o}=${s}`;localStorage.setItem(n,JSON.stringify({remoteKey:t,sentAt:Date.now(),css:e,html:i,js:a})),window.open(l)};refreshRemote=()=>{let{remoteKey:n,css:t,html:e,js:i}=this;localStorage.setItem(this.storageKey,JSON.stringify({remoteKey:n,sentAt:Date.now(),css:t,html:e,js:i}))};updateSources=()=>{if(this.persistToDom){let{sources:n}=this.parts;n.innerText="";for(let t of["js","css","html"])if(this[t])n.append(qo({class:`language-${t}`,innerHTML:this[t]}))}};refresh=()=>{if(this.remoteId!=="")return;let{example:n,style:t}=this.parts,e=Ve({class:"preview"});e.innerHTML=this.html,t.innerText=this.css;let i=n.querySelector(".preview");if(i)i.replaceWith(e);else n.insertBefore(e,this.parts.exampleWidgets);let a={preview:e,...this.context};try{if(new Ho(...Object.keys(a),this.js)(...Object.values(a)).catch((o)=>console.error(o)),this.persistToDom)this.updateSources()}catch(s){console.error(s),window.alert(`Error: ${s}, the console may have more information…`)}};initFromElements(n){for(let t of n){t.hidden=!0;let[e,...i]=t.innerHTML.split(`
`);if(["js","html","css"].includes(e)){let a=i.filter((o)=>o.trim()!=="").map((o)=>o.match(/^\s*/)[0].length).sort()[0],s=(a>0?i.map((o)=>o.substring(a)):i).join(`
`);this.parts[e].value=s}else{let a=["js","html","css"].find((s)=>t.matches(`.language-${s}`));if(a)this.parts[a].value=a==="html"?t.innerHTML:t.innerText}}}showDefaultTab(){let{editors:n}=this.parts;if(this.js!=="")n.value=0;else if(this.html!=="")n.value=1;else if(this.css!=="")n.value=2}render(){if(super.render(),this.remoteId!==""){let n=localStorage.getItem(this.storageKey);if(n!==null){let{remoteKey:t,sentAt:e,css:i,html:a,js:s}=JSON.parse(n);if(this.remoteKey!==t)return;this.lastUpdate=e,this.css=i,this.html=a,this.js=s,this.parts.example.hidden=!0,this.parts.codeEditors.hidden=!1,this.classList.add("-maximize"),this.updateUndo()}}else this.refresh()}}var Yt=Se.elementCreator({tag:"xin-example",styleSpec:{":host":{"--xin-example-height":"320px","--code-editors-bar-bg":"#777","--code-editors-bar-color":"#fff","--widget-bg":"#fff8","--widget-color":"#000",position:"relative",display:"flex",height:"var(--xin-example-height)",background:"var(--background)",boxSizing:"border-box"},":host.-maximize":{position:"fixed",left:"0",top:"0",height:"100vh",width:"100vw",margin:"0 !important"},".-maximize":{zIndex:101},":host.-vertical":{flexDirection:"column"},":host .icon-sidebar":{transform:"rotateZ(180deg)"},":host.-vertical .icon-sidebar":{transform:"rotateZ(270deg)"},":host.-maximize .hide-if-maximized, :host:not(.-maximize) .show-if-maximized":{display:"none"},':host [part="example"]':{flex:"1 1 50%",height:"100%",position:"relative",overflowX:"auto"},":host .preview":{height:"100%",position:"relative",overflow:"hidden",background:`#f7f7f7 url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 8 8" fill-opacity=".02" ><rect x="4" width="4" height="4" /><rect y="4" width="4" height="4" /></svg>')`},':host [part="editors"]':{flex:"1 1 200px",height:"100%",position:"relative"},':host [part="exampleWidgets"]':{position:"absolute",left:"2px",bottom:"2px","--widget-color":"var(--brand-color)",background:"var(--widget-bg)",borderRadius:"5px",width:"44px",height:"44px",lineHeight:"44px",zIndex:"100"},':host [part="exampleWidgets"] svg':{fill:"var(--widget-color)"},":host .code-editors":{overflow:"hidden",background:"white",position:"relative",top:"0",right:"0",flex:"1 1 50%",height:"100%",flexDirection:"column",zIndex:"10"},":host .code-editors:not([hidden])":{display:"flex"},":host .code-editors > h4":{padding:"5px",margin:"0",textAlign:"center",background:"var(--code-editors-bar-bg)",color:"var(--code-editors-bar-color)",cursor:"move"},":host .close-button":{position:"absolute",top:"0",right:"0",color:"var(--code-editors-bar-color)"},":host button.transparent, :host .sizer":{width:"32px",height:"32px",lineHeight:"32px",textAlign:"center",padding:"0",margin:"0"},":host .sizer":{cursor:"nwse-resize"}}});function j3(n){let t=[...n.querySelectorAll("pre")].filter((e)=>["js","html","css","json"].includes(e.innerText.split(`
`)[0]));for(let e=0;e<t.length;e++){let i=[t[e]];while(t[e].nextElementSibling===t[e+1])i.push(t[e+1]),e+=1;let a=Yt();n.insertBefore(a,i[0]),a.initFromElements(i)}}var _o=new URL(window.location.href).searchParams,Zi=_o.get("lx");if(Zi)document.title+=" [code editor]",document.body.textContent="",document.body.append(Yt({remoteId:Zi}));/*!
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
*/function $o(n,t=!0){return(e,i)=>{let a=n(e),s=n(i);for(let o in a)if(a[o]!==s[o])return(Array.isArray(t)?t[o]!==!1:t)?a[o]>s[o]?1:-1:a[o]>s[o]?-1:1;return 0}}/*!
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
*/var{button:Po,span:Xi,input:No}=X,L1=(n,t)=>{return!!n.find((e)=>{if(e===null||t==null)return!1;else if(Array.isArray(e))return L1(e,t);else if(e.value===t||e===t)return!0})};class Qe extends J{editable=!1;showIcon=!1;hideCaption=!1;options="";value="";placeholder="";setValue=(n,t=!1)=>{if(this.value!==n)this.value=n,this.queueRender(!0);if(t)this.dispatchEvent(new Event("action"))};getValue=()=>this.value;get selectOptions(){return typeof this.options==="string"?this.options.split(",").map((n)=>n.trim()||null):this.options}buildOptionMenuItem=(n)=>{if(n===null)return null;let{setValue:t,getValue:e}=this,i,a,s;if(typeof n==="string")a=s=n;else({icon:i,caption:a,value:s}=n);let{options:o}=n;if(o)return{icon:i,caption:a,checked:()=>L1(o,e()),menuItems:o.map(this.buildOptionMenuItem)};return{icon:i,caption:a,checked:()=>e()===s,action:typeof s==="function"?async()=>{let l=await s();if(l!==void 0)t(l,!0)}:()=>{if(typeof s==="string")t(s,!0)}}};get optionsMenu(){let n=this.selectOptions.map(this.buildOptionMenuItem);if(this.filter==="")return n;let t=(e)=>{if(e===null)return!0;else if(e.menuItems)return e.menuItems=e.menuItems.filter(t),e.menuItems.length>0;else return e.caption.toLocaleLowerCase().includes(this.filter)};return n.filter(t)}handleChange=(n)=>{let{value:t}=this.parts,e=t.value||"";if(this.value!==String(e))this.value=e,this.dispatchEvent(new Event("change"));this.filter="",n.stopPropagation(),n.preventDefault()};handleKey=(n)=>{if(n.key==="Enter")n.preventDefault()};filterMenu=Ys(()=>{this.filter=this.parts.value.value.toLocaleLowerCase(),se(0),this.popOptions()});popOptions=(n)=>{if(n&&n.type==="click")this.filter="";this.poppedOptions=this.optionsMenu,ze({target:this,menuItems:this.poppedOptions})};content=()=>[Po({onClick:this.popOptions},Xi(),No({part:"value",value:this.value,tabindex:0,onKeydown:this.handleKey,onInput:this.filterMenu,onChange:this.handleChange}),I.chevronDown())];constructor(){super();this.initAttributes("options","editable","placeholder","showIcon","hideCaption")}get allOptions(){let n=[];function t(e){for(let i of e)if(typeof i==="string")n.push({caption:i,value:i});else if(i?.value)n.push(i);else if(i?.options)t(i.options)}return t(this.selectOptions),n}findOption(){return this.allOptions.find((t)=>t.value===this.value)||{caption:this.value,value:this.value}}render(){super.render();let{value:n}=this.parts,t=n.previousElementSibling,e=this.findOption(),i=Xi();if(n.value=e.caption,e.icon)if(e.icon instanceof HTMLElement)i=e.icon.cloneNode(!0);else i=I[e.icon]();t.replaceWith(i),n.setAttribute("placeholder",this.placeholder),n.style.pointerEvents=this.editable?"":"none",n.readOnly=!this.editable}}var F1=Qe.elementCreator({tag:"xin-select",styleSpec:{":host":{"--gap":"8px","--touch-size":"44px","--padding":"0 8px","--value-padding":"0 8px","--icon-width":"24px","--fieldWidth":"140px",display:"inline-block",position:"relative"},":host button":{display:"grid",alignItems:"center",gap:T.gap,textAlign:"left",height:T.touchSize,padding:T.padding,gridTemplateColumns:`auto ${T.iconWidth}`,position:"relative"},":host[show-icon] button":{gridTemplateColumns:`${T.iconWidth} auto ${T.iconWidth}`},":host[hide-caption] button":{gridTemplateColumns:`${T.iconWidth} ${T.iconWidth}`},":host:not([show-icon]) button > :first-child":{display:"none"},":host[hide-caption] button > :nth-child(2)":{display:"none"},':host [part="value"]':{width:T.fieldWidth,padding:T.valuePadding,height:T.touchSize,lineHeight:T.touchSize,boxShadow:"none",whiteSpace:"nowrap",outline:"none",background:"transparent"},':host [part="value"]:not(:focus)':{overflow:"hidden",textOverflow:"ellipsis",background:"transparent"}}});/*!
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
*/var{span:I1}=X,{i18n:an}=Rs({i18n:{locale:window.navigator.language,locales:[window.navigator.language],languages:[window.navigator.language],emoji:[""],stringMap:{},localeOptions:[{icon:I1(),caption:window.navigator.language,value:window.navigator.language}]}});Ws.localeOptions={toDOM(n,t){if(n instanceof Qe)n.options=t}};var D1=()=>{let n=[...document.querySelectorAll(Rt.tagName)];for(let t of n)t.render()},Vo=$o((n)=>[n.caption.toLocaleLowerCase()]);function q1(n){let[t,,e,i,...a]=n.split(`
`).map((s)=>s.split("\t"));if(t&&e&&i&&a){if(an.locales=t,an.languages=e,an.emoji=i,an.stringMap=a.reduce((s,o)=>{return s[o[0].toLocaleLowerCase()]=o,s},{}),an.localeOptions=t.map((s,o)=>({icon:I1({title:t[o]},i[o]),caption:e[o],value:s})).sort(Vo),!an.locales.includes(an.locale.valueOf())){let s=an.locale.substring(0,2);an.locale=an.locales.find((o)=>o.substring(0,2)===s)||an.locales[0]}D1()}}function H1(n){let t=an.locales.indexOf(an.locale.valueOf());if(t>-1){let e=an.stringMap[n.toLocaleLowerCase()],i=e&&e[t];if(i)n=n.toLocaleLowerCase()===n?i.toLocaleLowerCase():i}return n}class _1 extends J{hideCaption=!1;content=()=>{return F1({part:"select",showIcon:!0,title:H1("Language"),bindValue:an.locale,bindLocaleOptions:an.localeOptions})};constructor(){super();this.initAttributes("hideCaption")}connectedCallback(){super.connectedCallback(),this.parts.select.value=an.locale,this.parts.select.addEventListener("change",D1)}render(){super.render(),this.parts.select.toggleAttribute("hide-caption",this.hideCaption)}}var $1=_1.elementCreator({tag:"xin-locale-picker"});class Rt extends J{contents=()=>X.xinSlot();refString="";render(){if(super.render(),!this.refString)this.refString=this.textContent||"";this.textContent=H1(this.refString)}}var P1=Rt.elementCreator({tag:"xin-localized",styleSpec:{":host":{pointerEvents:"none"}}});/*!
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
*/var Wo=[{name:"streets",url:"mapbox://styles/mapbox/streets-v10"},{name:"outdoors",url:"mapbox://styles/mapbox/outdoors-v10"},{name:"light",url:"mapbox://styles/mapbox/light-v9"},{name:"dark",url:"mapbox://styles/mapbox/dark-v9"},{name:"satellite",url:"mapbox://styles/mapbox/satellite-v9"},{name:"sateliite + streets",url:"mapbox://styles/mapbox/satellite-streets-v10"},{name:"preview day",url:"mapbox://styles/mapbox/navigation-preview-day-v2"},{name:"preview night",url:"mapbox://styles/mapbox/navigation-preview-night-v2"},{name:"guidance day",url:"mapbox://styles/mapbox/navigation-guidance-day-v2"},{name:"guidance night",url:"mapbox://styles/mapbox/navigation-guidance-night-v2"}],{div:Go}=X;class te extends J{coords="65.01715565258993,25.48081004203459,12";content=Go({style:{width:"100%",height:"100%"}});get map(){return this._map}mapStyle=Wo[0].url;token="";static mapboxCSSAvailable;static mapboxAvailable;_map;static styleSpec={":host":{display:"inline-block",position:"relative",width:"400px",height:"400px",textAlign:"left"}};constructor(){super();if(this.initAttributes("coords","token","mapStyle"),te.mapboxCSSAvailable===void 0)te.mapboxCSSAvailable=Js("https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css").catch((n)=>{console.error("failed to load mapbox-gl.css",n)}),te.mapboxAvailable=ie("https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.js").catch((n)=>{console.error("failed to load mapbox-gl.js",n)})}connectedCallback(){if(super.connectedCallback(),!this.token)console.error("mapbox requires an access token which you can provide via the token attribute")}render(){if(super.render(),!this.token)return;let{div:n}=this.parts,[t,e,i]=this.coords.split(",").map((a)=>Number(a));if(this.map)this.map.remove();te.mapboxAvailable.then(({mapboxgl:a})=>{console.log("%cmapbox may complain about missing css -- don't panic!","background: orange; color: black; padding: 0 5px;"),a.accessToken=this.token,this._map=new a.Map({container:n,style:this.mapStyle,zoom:i,center:[e,t]}),this._map.on("render",()=>this._map.resize())})}}var O3=te.elementCreator({tag:"xin-map"});function Jt(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}var Sn=Jt();function N1(n){Sn=n}var V1=/[&<>"']/,Uo=new RegExp(V1.source,"g"),W1=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Yo=new RegExp(W1.source,"g"),Ro={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ki=(n)=>Ro[n];function sn(n,t){if(t){if(V1.test(n))return n.replace(Uo,ki)}else if(W1.test(n))return n.replace(Yo,ki);return n}var Jo=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function G1(n){return n.replace(Jo,(t,e)=>{if(e=e.toLowerCase(),e==="colon")return":";if(e.charAt(0)==="#")return e.charAt(1)==="x"?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1));return""})}var Ko=/(^|[^\[])\^/g;function K(n,t){n=typeof n==="string"?n:n.source,t=t||"";let e={replace:(i,a)=>{return a=a.source||a,a=a.replace(Ko,"$1"),n=n.replace(i,a),e},getRegex:()=>{return new RegExp(n,t)}};return e}var Bo=/[^\w:]/g,Qo=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function n1(n,t,e){if(n){let i;try{i=decodeURIComponent(G1(e)).replace(Bo,"").toLowerCase()}catch(a){return null}if(i.indexOf("javascript:")===0||i.indexOf("vbscript:")===0||i.indexOf("data:")===0)return null}if(t&&!Qo.test(e))e=n2(t,e);try{e=encodeURI(e).replace(/%25/g,"%")}catch(i){return null}return e}var We={},Zo=/^[^:]+:\/*[^/]*$/,Xo=/^([^:]+:)[\s\S]*$/,ko=/^([^:]+:\/*[^/]*)[\s\S]*$/;function n2(n,t){if(!We[" "+n])if(Zo.test(n))We[" "+n]=n+"/";else We[" "+n]=Ue(n,"/",!0);n=We[" "+n];let e=n.indexOf(":")===-1;if(t.substring(0,2)==="//"){if(e)return t;return n.replace(Xo,"$1")+t}else if(t.charAt(0)==="/"){if(e)return t;return n.replace(ko,"$1")+t}else return n+t}var Be={exec:function n(){}};function e1(n,t){let e=n.replace(/\|/g,(s,o,l)=>{let r=!1,h=o;while(--h>=0&&l[h]==="\\")r=!r;if(r)return"|";else return" |"}),i=e.split(/ \|/),a=0;if(!i[0].trim())i.shift();if(i.length>0&&!i[i.length-1].trim())i.pop();if(i.length>t)i.splice(t);else while(i.length<t)i.push("");for(;a<i.length;a++)i[a]=i[a].trim().replace(/\\\|/g,"|");return i}function Ue(n,t,e){let i=n.length;if(i===0)return"";let a=0;while(a<i){let s=n.charAt(i-a-1);if(s===t&&!e)a++;else if(s!==t&&e)a++;else break}return n.slice(0,i-a)}function e2(n,t){if(n.indexOf(t[1])===-1)return-1;let e=n.length,i=0,a=0;for(;a<e;a++)if(n[a]==="\\")a++;else if(n[a]===t[0])i++;else if(n[a]===t[1]){if(i--,i<0)return a}return-1}function t2(n,t){if(!n||n.silent)return;if(t)console.warn("marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async");if(n.sanitize||n.sanitizer)console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");if(n.highlight||n.langPrefix!=="language-")console.warn("marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight.");if(n.mangle)console.warn("marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`.");if(n.baseUrl)console.warn("marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url.");if(n.smartypants)console.warn("marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants.");if(n.xhtml)console.warn("marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml.");if(n.headerIds||n.headerPrefix)console.warn("marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`.")}function t1(n,t,e,i){let a=t.href,s=t.title?sn(t.title):null,o=n[1].replace(/\\([\[\]])/g,"$1");if(n[0].charAt(0)!=="!"){i.state.inLink=!0;let l={type:"link",raw:e,href:a,title:s,text:o,tokens:i.inlineTokens(o)};return i.state.inLink=!1,l}return{type:"image",raw:e,href:a,title:s,text:sn(o)}}function i2(n,t){let e=n.match(/^(\s+)(?:```)/);if(e===null)return t;let i=e[1];return t.split(`
`).map((a)=>{let s=a.match(/^\s+/);if(s===null)return a;let[o]=s;if(o.length>=i.length)return a.slice(i.length);return a}).join(`
`)}class xe{constructor(n){this.options=n||Sn}space(n){let t=this.rules.block.newline.exec(n);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(n){let t=this.rules.block.code.exec(n);if(t){let e=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:!this.options.pedantic?Ue(e,`
`):e}}}fences(n){let t=this.rules.block.fences.exec(n);if(t){let e=t[0],i=i2(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:i}}}heading(n){let t=this.rules.block.heading.exec(n);if(t){let e=t[2].trim();if(/#$/.test(e)){let i=Ue(e,"#");if(this.options.pedantic)e=i.trim();else if(!i||/ $/.test(i))e=i.trim()}return{type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(n){let t=this.rules.block.hr.exec(n);if(t)return{type:"hr",raw:t[0]}}blockquote(n){let t=this.rules.block.blockquote.exec(n);if(t){let e=t[0].replace(/^ *>[ \t]?/gm,""),i=this.lexer.state.top;this.lexer.state.top=!0;let a=this.lexer.blockTokens(e);return this.lexer.state.top=i,{type:"blockquote",raw:t[0],tokens:a,text:e}}}list(n){let t=this.rules.block.list.exec(n);if(t){let e,i,a,s,o,l,r,h,d,p,m,z,x=t[1].trim(),C=x.length>1,c={type:"list",raw:"",ordered:C,start:C?+x.slice(0,-1):"",loose:!1,items:[]};if(x=C?`\\d{1,9}\\${x.slice(-1)}`:`\\${x}`,this.options.pedantic)x=C?x:"[*+-]";let g=new RegExp(`^( {0,3}${x})((?:[	 ][^\\n]*)?(?:\\n|$))`);while(n){if(z=!1,!(t=g.exec(n)))break;if(this.rules.block.hr.test(n))break;if(e=t[0],n=n.substring(e.length),h=t[2].split(`
`,1)[0].replace(/^\t+/,(u)=>" ".repeat(3*u.length)),d=n.split(`
`,1)[0],this.options.pedantic)s=2,m=h.trimLeft();else s=t[2].search(/[^ ]/),s=s>4?1:s,m=h.slice(s),s+=t[1].length;if(l=!1,!h&&/^ *$/.test(d))e+=d+`
`,n=n.substring(d.length+1),z=!0;if(!z){let u=new RegExp(`^ {0,${Math.min(3,s-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),b=new RegExp(`^ {0,${Math.min(3,s-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),v=new RegExp(`^ {0,${Math.min(3,s-1)}}(?:\`\`\`|~~~)`),y=new RegExp(`^ {0,${Math.min(3,s-1)}}#`);while(n){if(p=n.split(`
`,1)[0],d=p,this.options.pedantic)d=d.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ");if(v.test(d))break;if(y.test(d))break;if(u.test(d))break;if(b.test(n))break;if(d.search(/[^ ]/)>=s||!d.trim())m+=`
`+d.slice(s);else{if(l)break;if(h.search(/[^ ]/)>=4)break;if(v.test(h))break;if(y.test(h))break;if(b.test(h))break;m+=`
`+d}if(!l&&!d.trim())l=!0;e+=p+`
`,n=n.substring(p.length+1),h=d.slice(s)}}if(!c.loose){if(r)c.loose=!0;else if(/\n *\n *$/.test(e))r=!0}if(this.options.gfm){if(i=/^\[[ xX]\] /.exec(m),i)a=i[0]!=="[ ] ",m=m.replace(/^\[[ xX]\] +/,"")}c.items.push({type:"list_item",raw:e,task:!!i,checked:a,loose:!1,text:m}),c.raw+=e}c.items[c.items.length-1].raw=e.trimRight(),c.items[c.items.length-1].text=m.trimRight(),c.raw=c.raw.trimRight();let f=c.items.length;for(o=0;o<f;o++)if(this.lexer.state.top=!1,c.items[o].tokens=this.lexer.blockTokens(c.items[o].text,[]),!c.loose){let u=c.items[o].tokens.filter((v)=>v.type==="space"),b=u.length>0&&u.some((v)=>/\n.*\n/.test(v.raw));c.loose=b}if(c.loose)for(o=0;o<f;o++)c.items[o].loose=!0;return c}}html(n){let t=this.rules.block.html.exec(n);if(t){let e={type:"html",block:!0,raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};if(this.options.sanitize){let i=this.options.sanitizer?this.options.sanitizer(t[0]):sn(t[0]);e.type="paragraph",e.text=i,e.tokens=this.lexer.inline(i)}return e}}def(n){let t=this.rules.block.def.exec(n);if(t){let e=t[1].toLowerCase().replace(/\s+/g," "),i=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",a=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:e,raw:t[0],href:i,title:a}}}table(n){let t=this.rules.block.table.exec(n);if(t){let e={type:"table",header:e1(t[1]).map((i)=>{return{text:i}}),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(e.header.length===e.align.length){e.raw=t[0];let i=e.align.length,a,s,o,l;for(a=0;a<i;a++)if(/^ *-+: *$/.test(e.align[a]))e.align[a]="right";else if(/^ *:-+: *$/.test(e.align[a]))e.align[a]="center";else if(/^ *:-+ *$/.test(e.align[a]))e.align[a]="left";else e.align[a]=null;i=e.rows.length;for(a=0;a<i;a++)e.rows[a]=e1(e.rows[a],e.header.length).map((r)=>{return{text:r}});i=e.header.length;for(s=0;s<i;s++)e.header[s].tokens=this.lexer.inline(e.header[s].text);i=e.rows.length;for(s=0;s<i;s++){l=e.rows[s];for(o=0;o<l.length;o++)l[o].tokens=this.lexer.inline(l[o].text)}return e}}}lheading(n){let t=this.rules.block.lheading.exec(n);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(n){let t=this.rules.block.paragraph.exec(n);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(n){let t=this.rules.block.text.exec(n);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(n){let t=this.rules.inline.escape.exec(n);if(t)return{type:"escape",raw:t[0],text:sn(t[1])}}tag(n){let t=this.rules.inline.tag.exec(n);if(t){if(!this.lexer.state.inLink&&/^<a /i.test(t[0]))this.lexer.state.inLink=!0;else if(this.lexer.state.inLink&&/^<\/a>/i.test(t[0]))this.lexer.state.inLink=!1;if(!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0]))this.lexer.state.inRawBlock=!0;else if(this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]))this.lexer.state.inRawBlock=!1;return{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):sn(t[0]):t[0]}}}link(n){let t=this.rules.inline.link.exec(n);if(t){let e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;let s=Ue(e.slice(0,-1),"\\");if((e.length-s.length)%2===0)return}else{let s=e2(t[2],"()");if(s>-1){let l=(t[0].indexOf("!")===0?5:4)+t[1].length+s;t[2]=t[2].substring(0,s),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let i=t[2],a="";if(this.options.pedantic){let s=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);if(s)i=s[1],a=s[3]}else a=t[3]?t[3].slice(1,-1):"";if(i=i.trim(),/^</.test(i))if(this.options.pedantic&&!/>$/.test(e))i=i.slice(1);else i=i.slice(1,-1);return t1(t,{href:i?i.replace(this.rules.inline._escapes,"$1"):i,title:a?a.replace(this.rules.inline._escapes,"$1"):a},t[0],this.lexer)}}reflink(n,t){let e;if((e=this.rules.inline.reflink.exec(n))||(e=this.rules.inline.nolink.exec(n))){let i=(e[2]||e[1]).replace(/\s+/g," ");if(i=t[i.toLowerCase()],!i){let a=e[0].charAt(0);return{type:"text",raw:a,text:a}}return t1(e,i,e[0],this.lexer)}}emStrong(n,t,e=""){let i=this.rules.inline.emStrong.lDelim.exec(n);if(!i)return;if(i[3]&&e.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2])||!e||this.rules.inline.punctuation.exec(e)){let s=i[0].length-1,o,l,r=s,h=0,d=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;d.lastIndex=0,t=t.slice(-1*n.length+s);while((i=d.exec(t))!=null){if(o=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!o)continue;if(l=o.length,i[3]||i[4]){r+=l;continue}else if(i[5]||i[6]){if(s%3&&!((s+l)%3)){h+=l;continue}}if(r-=l,r>0)continue;l=Math.min(l,l+r+h);let p=n.slice(0,s+i.index+l+1);if(Math.min(s,l)%2){let z=p.slice(1,-1);return{type:"em",raw:p,text:z,tokens:this.lexer.inlineTokens(z)}}let m=p.slice(2,-2);return{type:"strong",raw:p,text:m,tokens:this.lexer.inlineTokens(m)}}}}codespan(n){let t=this.rules.inline.code.exec(n);if(t){let e=t[2].replace(/\n/g," "),i=/[^ ]/.test(e),a=/^ /.test(e)&&/ $/.test(e);if(i&&a)e=e.substring(1,e.length-1);return e=sn(e,!0),{type:"codespan",raw:t[0],text:e}}}br(n){let t=this.rules.inline.br.exec(n);if(t)return{type:"br",raw:t[0]}}del(n){let t=this.rules.inline.del.exec(n);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(n,t){let e=this.rules.inline.autolink.exec(n);if(e){let i,a;if(e[2]==="@")i=sn(this.options.mangle?t(e[1]):e[1]),a="mailto:"+i;else i=sn(e[1]),a=i;return{type:"link",raw:e[0],text:i,href:a,tokens:[{type:"text",raw:i,text:i}]}}}url(n,t){let e;if(e=this.rules.inline.url.exec(n)){let i,a;if(e[2]==="@")i=sn(this.options.mangle?t(e[0]):e[0]),a="mailto:"+i;else{let s;do s=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])[0];while(s!==e[0]);if(i=sn(e[0]),e[1]==="www.")a="http://"+e[0];else a=e[0]}return{type:"link",raw:e[0],text:i,href:a,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(n,t){let e=this.rules.inline.text.exec(n);if(e){let i;if(this.lexer.state.inRawBlock)i=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):sn(e[0]):e[0];else i=sn(this.options.smartypants?t(e[0]):e[0]);return{type:"text",raw:e[0],text:i}}}}var G={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Be,lheading:/^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};G._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;G._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;G.def=K(G.def).replace("label",G._label).replace("title",G._title).getRegex();G.bullet=/(?:[*+-]|\d{1,9}[.)])/;G.listItemStart=K(/^( *)(bull) */).replace("bull",G.bullet).getRegex();G.list=K(G.list).replace(/bull/g,G.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+G.def.source+")").getRegex();G._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";G._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;G.html=K(G.html,"i").replace("comment",G._comment).replace("tag",G._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();G.lheading=K(G.lheading).replace(/bull/g,G.bullet).getRegex();G.paragraph=K(G._paragraph).replace("hr",G.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",G._tag).getRegex();G.blockquote=K(G.blockquote).replace("paragraph",G.paragraph).getRegex();G.normal={...G};G.gfm={...G.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};G.gfm.table=K(G.gfm.table).replace("hr",G.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",G._tag).getRegex();G.gfm.paragraph=K(G._paragraph).replace("hr",G.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",G.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",G._tag).getRegex();G.pedantic={...G.normal,html:K(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",G._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Be,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:K(G.normal._paragraph).replace("hr",G.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",G.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};var L={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Be,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,rDelimAst:/^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Be,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^((?![*_])[\spunctuation])/};L._punctuation="\\p{P}$+<=>`^|~";L.punctuation=K(L.punctuation,"u").replace(/punctuation/g,L._punctuation).getRegex();L.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;L.anyPunctuation=/\\[punct]/g;L._escapes=/\\([punct])/g;L._comment=K(G._comment).replace("(?:-->|$)","-->").getRegex();L.emStrong.lDelim=K(L.emStrong.lDelim,"u").replace(/punct/g,L._punctuation).getRegex();L.emStrong.rDelimAst=K(L.emStrong.rDelimAst,"gu").replace(/punct/g,L._punctuation).getRegex();L.emStrong.rDelimUnd=K(L.emStrong.rDelimUnd,"gu").replace(/punct/g,L._punctuation).getRegex();L.anyPunctuation=K(L.anyPunctuation,"gu").replace(/punct/g,L._punctuation).getRegex();L._escapes=K(L._escapes,"gu").replace(/punct/g,L._punctuation).getRegex();L._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;L._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;L.autolink=K(L.autolink).replace("scheme",L._scheme).replace("email",L._email).getRegex();L._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;L.tag=K(L.tag).replace("comment",L._comment).replace("attribute",L._attribute).getRegex();L._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;L._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;L._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;L.link=K(L.link).replace("label",L._label).replace("href",L._href).replace("title",L._title).getRegex();L.reflink=K(L.reflink).replace("label",L._label).replace("ref",G._label).getRegex();L.nolink=K(L.nolink).replace("ref",G._label).getRegex();L.reflinkSearch=K(L.reflinkSearch,"g").replace("reflink",L.reflink).replace("nolink",L.nolink).getRegex();L.normal={...L};L.pedantic={...L.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:K(/^!?\[(label)\]\((.*?)\)/).replace("label",L._label).getRegex(),reflink:K(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",L._label).getRegex()};L.gfm={...L.normal,escape:K(L.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};L.gfm.url=K(L.gfm.url,"i").replace("email",L.gfm._extended_email).getRegex();L.breaks={...L.gfm,br:K(L.br).replace("{2,}","*").getRegex(),text:K(L.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};function a2(n){return n.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function i1(n){let t="",e,i,a=n.length;for(e=0;e<a;e++){if(i=n.charCodeAt(e),Math.random()>0.5)i="x"+i.toString(16);t+="&#"+i+";"}return t}class bn{constructor(n){this.tokens=[],this.tokens.links=Object.create(null),this.options=n||Sn,this.options.tokenizer=this.options.tokenizer||new xe,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={block:G.normal,inline:L.normal};if(this.options.pedantic)t.block=G.pedantic,t.inline=L.pedantic;else if(this.options.gfm)if(t.block=G.gfm,this.options.breaks)t.inline=L.breaks;else t.inline=L.gfm;this.tokenizer.rules=t}static get rules(){return{block:G,inline:L}}static lex(n,t){return new bn(t).lex(n)}static lexInline(n,t){return new bn(t).inlineTokens(n)}lex(n){n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);let t;while(t=this.inlineQueue.shift())this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(n,t=[]){if(this.options.pedantic)n=n.replace(/\t/g,"    ").replace(/^ +$/gm,"");else n=n.replace(/^( *)(\t+)/gm,(o,l,r)=>{return l+"    ".repeat(r.length)});let e,i,a,s;while(n){if(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((o)=>{if(e=o.call({lexer:this},n,t))return n=n.substring(e.raw.length),t.push(e),!0;return!1}))continue;if(e=this.tokenizer.space(n)){if(n=n.substring(e.raw.length),e.raw.length===1&&t.length>0)t[t.length-1].raw+=`
`;else t.push(e);continue}if(e=this.tokenizer.code(n)){if(n=n.substring(e.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text"))i.raw+=`
`+e.raw,i.text+=`
`+e.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text;else t.push(e);continue}if(e=this.tokenizer.fences(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.heading(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.hr(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.blockquote(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.list(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.html(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.def(n)){if(n=n.substring(e.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text"))i.raw+=`
`+e.raw,i.text+=`
`+e.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text;else if(!this.tokens.links[e.tag])this.tokens.links[e.tag]={href:e.href,title:e.title};continue}if(e=this.tokenizer.table(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.lheading(n)){n=n.substring(e.raw.length),t.push(e);continue}if(a=n,this.options.extensions&&this.options.extensions.startBlock){let o=1/0,l=n.slice(1),r;if(this.options.extensions.startBlock.forEach(function(h){if(r=h.call({lexer:this},l),typeof r==="number"&&r>=0)o=Math.min(o,r)}),o<1/0&&o>=0)a=n.substring(0,o+1)}if(this.state.top&&(e=this.tokenizer.paragraph(a))){if(i=t[t.length-1],s&&i.type==="paragraph")i.raw+=`
`+e.raw,i.text+=`
`+e.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text;else t.push(e);s=a.length!==n.length,n=n.substring(e.raw.length);continue}if(e=this.tokenizer.text(n)){if(n=n.substring(e.raw.length),i=t[t.length-1],i&&i.type==="text")i.raw+=`
`+e.raw,i.text+=`
`+e.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text;else t.push(e);continue}if(n){let o="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,t}inline(n,t=[]){return this.inlineQueue.push({src:n,tokens:t}),t}inlineTokens(n,t=[]){let e,i,a,s=n,o,l,r;if(this.tokens.links){let h=Object.keys(this.tokens.links);if(h.length>0){while((o=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null)if(h.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1)))s=s.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex)}}while((o=this.tokenizer.rules.inline.blockSkip.exec(s))!=null)s=s.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);while((o=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null)s=s.slice(0,o.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);while(n){if(!l)r="";if(l=!1,this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((h)=>{if(e=h.call({lexer:this},n,t))return n=n.substring(e.raw.length),t.push(e),!0;return!1}))continue;if(e=this.tokenizer.escape(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.tag(n)){if(n=n.substring(e.raw.length),i=t[t.length-1],i&&e.type==="text"&&i.type==="text")i.raw+=e.raw,i.text+=e.text;else t.push(e);continue}if(e=this.tokenizer.link(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.reflink(n,this.tokens.links)){if(n=n.substring(e.raw.length),i=t[t.length-1],i&&e.type==="text"&&i.type==="text")i.raw+=e.raw,i.text+=e.text;else t.push(e);continue}if(e=this.tokenizer.emStrong(n,s,r)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.codespan(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.br(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.del(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.autolink(n,i1)){n=n.substring(e.raw.length),t.push(e);continue}if(!this.state.inLink&&(e=this.tokenizer.url(n,i1))){n=n.substring(e.raw.length),t.push(e);continue}if(a=n,this.options.extensions&&this.options.extensions.startInline){let h=1/0,d=n.slice(1),p;if(this.options.extensions.startInline.forEach(function(m){if(p=m.call({lexer:this},d),typeof p==="number"&&p>=0)h=Math.min(h,p)}),h<1/0&&h>=0)a=n.substring(0,h+1)}if(e=this.tokenizer.inlineText(a,a2)){if(n=n.substring(e.raw.length),e.raw.slice(-1)!=="_")r=e.raw.slice(-1);if(l=!0,i=t[t.length-1],i&&i.type==="text")i.raw+=e.raw,i.text+=e.text;else t.push(e);continue}if(n){let h="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(h);break}else throw new Error(h)}}return t}}class we{constructor(n){this.options=n||Sn}code(n,t,e){let i=(t||"").match(/\S*/)[0];if(this.options.highlight){let a=this.options.highlight(n,i);if(a!=null&&a!==n)e=!0,n=a}if(n=n.replace(/\n$/,"")+`
`,!i)return"<pre><code>"+(e?n:sn(n,!0))+`</code></pre>
`;return'<pre><code class="'+this.options.langPrefix+sn(i)+'">'+(e?n:sn(n,!0))+`</code></pre>
`}blockquote(n){return`<blockquote>
${n}</blockquote>
`}html(n,t){return n}heading(n,t,e,i){if(this.options.headerIds){let a=this.options.headerPrefix+i.slug(e);return`<h${t} id="${a}">${n}</h${t}>
`}return`<h${t}>${n}</h${t}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(n,t,e){let i=t?"ol":"ul",a=t&&e!==1?' start="'+e+'"':"";return"<"+i+a+`>
`+n+"</"+i+`>
`}listitem(n){return`<li>${n}</li>
`}checkbox(n){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(n){return`<p>${n}</p>
`}table(n,t){if(t)t=`<tbody>${t}</tbody>`;return`<table>
<thead>
`+n+`</thead>
`+t+`</table>
`}tablerow(n){return`<tr>
${n}</tr>
`}tablecell(n,t){let e=t.header?"th":"td";return(t.align?`<${e} align="${t.align}">`:`<${e}>`)+n+`</${e}>
`}strong(n){return`<strong>${n}</strong>`}em(n){return`<em>${n}</em>`}codespan(n){return`<code>${n}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(n){return`<del>${n}</del>`}link(n,t,e){if(n=n1(this.options.sanitize,this.options.baseUrl,n),n===null)return e;let i='<a href="'+n+'"';if(t)i+=' title="'+t+'"';return i+=">"+e+"</a>",i}image(n,t,e){if(n=n1(this.options.sanitize,this.options.baseUrl,n),n===null)return e;let i=`<img src="${n}" alt="${e}"`;if(t)i+=` title="${t}"`;return i+=this.options.xhtml?"/>":">",i}text(n){return n}}class Ze{strong(n){return n}em(n){return n}codespan(n){return n}del(n){return n}html(n){return n}text(n){return n}link(n,t,e){return""+e}image(n,t,e){return""+e}br(){return""}}class Xe{constructor(){this.seen={}}serialize(n){return n.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(n,t){let e=n,i=0;if(this.seen.hasOwnProperty(e)){i=this.seen[n];do i++,e=n+"-"+i;while(this.seen.hasOwnProperty(e))}if(!t)this.seen[n]=i,this.seen[e]=0;return e}slug(n,t={}){let e=this.serialize(n);return this.getNextSafeSlug(e,t.dryrun)}}class vn{constructor(n){this.options=n||Sn,this.options.renderer=this.options.renderer||new we,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Ze,this.slugger=new Xe}static parse(n,t){return new vn(t).parse(n)}static parseInline(n,t){return new vn(t).parseInline(n)}parse(n,t=!0){let e="",i,a,s,o,l,r,h,d,p,m,z,x,C,c,g,f,u,b,v,y=n.length;for(i=0;i<y;i++){if(m=n[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[m.type]){if(v=this.options.extensions.renderers[m.type].call({parser:this},m),v!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(m.type)){e+=v||"";continue}}switch(m.type){case"space":continue;case"hr":{e+=this.renderer.hr();continue}case"heading":{e+=this.renderer.heading(this.parseInline(m.tokens),m.depth,G1(this.parseInline(m.tokens,this.textRenderer)),this.slugger);continue}case"code":{e+=this.renderer.code(m.text,m.lang,m.escaped);continue}case"table":{d="",h="",o=m.header.length;for(a=0;a<o;a++)h+=this.renderer.tablecell(this.parseInline(m.header[a].tokens),{header:!0,align:m.align[a]});d+=this.renderer.tablerow(h),p="",o=m.rows.length;for(a=0;a<o;a++){r=m.rows[a],h="",l=r.length;for(s=0;s<l;s++)h+=this.renderer.tablecell(this.parseInline(r[s].tokens),{header:!1,align:m.align[s]});p+=this.renderer.tablerow(h)}e+=this.renderer.table(d,p);continue}case"blockquote":{p=this.parse(m.tokens),e+=this.renderer.blockquote(p);continue}case"list":{z=m.ordered,x=m.start,C=m.loose,o=m.items.length,p="";for(a=0;a<o;a++){if(g=m.items[a],f=g.checked,u=g.task,c="",g.task)if(b=this.renderer.checkbox(f),C)if(g.tokens.length>0&&g.tokens[0].type==="paragraph"){if(g.tokens[0].text=b+" "+g.tokens[0].text,g.tokens[0].tokens&&g.tokens[0].tokens.length>0&&g.tokens[0].tokens[0].type==="text")g.tokens[0].tokens[0].text=b+" "+g.tokens[0].tokens[0].text}else g.tokens.unshift({type:"text",text:b});else c+=b;c+=this.parse(g.tokens,C),p+=this.renderer.listitem(c,u,f)}e+=this.renderer.list(p,z,x);continue}case"html":{e+=this.renderer.html(m.text,m.block);continue}case"paragraph":{e+=this.renderer.paragraph(this.parseInline(m.tokens));continue}case"text":{p=m.tokens?this.parseInline(m.tokens):m.text;while(i+1<y&&n[i+1].type==="text")m=n[++i],p+=`
`+(m.tokens?this.parseInline(m.tokens):m.text);e+=t?this.renderer.paragraph(p):p;continue}default:{let S='Token with "'+m.type+'" type was not found.';if(this.options.silent){console.error(S);return}else throw new Error(S)}}}return e}parseInline(n,t){t=t||this.renderer;let e="",i,a,s,o=n.length;for(i=0;i<o;i++){if(a=n[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){if(s=this.options.extensions.renderers[a.type].call({parser:this},a),s!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){e+=s||"";continue}}switch(a.type){case"escape":{e+=t.text(a.text);break}case"html":{e+=t.html(a.text);break}case"link":{e+=t.link(a.href,a.title,this.parseInline(a.tokens,t));break}case"image":{e+=t.image(a.href,a.title,a.text);break}case"strong":{e+=t.strong(this.parseInline(a.tokens,t));break}case"em":{e+=t.em(this.parseInline(a.tokens,t));break}case"codespan":{e+=t.codespan(a.text);break}case"br":{e+=t.br();break}case"del":{e+=t.del(this.parseInline(a.tokens,t));break}case"text":{e+=t.text(a.text);break}default:{let l='Token with "'+a.type+'" type was not found.';if(this.options.silent){console.error(l);return}else throw new Error(l)}}}return e}}class ye{constructor(n){this.options=n||Sn}static passThroughHooks=new Set(["preprocess","postprocess"]);preprocess(n){return n}postprocess(n){return n}}class U1{defaults=Jt();options=this.setOptions;parse=this.#n(bn.lex,vn.parse);parseInline=this.#n(bn.lexInline,vn.parseInline);Parser=vn;parser=vn.parse;Renderer=we;TextRenderer=Ze;Lexer=bn;lexer=bn.lex;Tokenizer=xe;Slugger=Xe;Hooks=ye;constructor(...n){this.use(...n)}walkTokens(n,t){let e=[];for(let i of n)switch(e=e.concat(t.call(this,i)),i.type){case"table":{for(let a of i.header)e=e.concat(this.walkTokens(a.tokens,t));for(let a of i.rows)for(let s of a)e=e.concat(this.walkTokens(s.tokens,t));break}case"list":{e=e.concat(this.walkTokens(i.items,t));break}default:if(this.defaults.extensions&&this.defaults.extensions.childTokens&&this.defaults.extensions.childTokens[i.type])this.defaults.extensions.childTokens[i.type].forEach((a)=>{e=e.concat(this.walkTokens(i[a],t))});else if(i.tokens)e=e.concat(this.walkTokens(i.tokens,t))}return e}use(...n){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach((e)=>{let i={...e};if(i.async=this.defaults.async||i.async||!1,e.extensions)e.extensions.forEach((a)=>{if(!a.name)throw new Error("extension name required");if(a.renderer){let s=t.renderers[a.name];if(s)t.renderers[a.name]=function(...o){let l=a.renderer.apply(this,o);if(l===!1)l=s.apply(this,o);return l};else t.renderers[a.name]=a.renderer}if(a.tokenizer){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");if(t[a.level])t[a.level].unshift(a.tokenizer);else t[a.level]=[a.tokenizer];if(a.start){if(a.level==="block")if(t.startBlock)t.startBlock.push(a.start);else t.startBlock=[a.start];else if(a.level==="inline")if(t.startInline)t.startInline.push(a.start);else t.startInline=[a.start]}}if(a.childTokens)t.childTokens[a.name]=a.childTokens}),i.extensions=t;if(e.renderer){let a=this.defaults.renderer||new we(this.defaults);for(let s in e.renderer){let o=a[s];a[s]=(...l)=>{let r=e.renderer[s].apply(a,l);if(r===!1)r=o.apply(a,l);return r}}i.renderer=a}if(e.tokenizer){let a=this.defaults.tokenizer||new xe(this.defaults);for(let s in e.tokenizer){let o=a[s];a[s]=(...l)=>{let r=e.tokenizer[s].apply(a,l);if(r===!1)r=o.apply(a,l);return r}}i.tokenizer=a}if(e.hooks){let a=this.defaults.hooks||new ye;for(let s in e.hooks){let o=a[s];if(ye.passThroughHooks.has(s))a[s]=(l)=>{if(this.defaults.async)return Promise.resolve(e.hooks[s].call(a,l)).then((h)=>{return o.call(a,h)});let r=e.hooks[s].call(a,l);return o.call(a,r)};else a[s]=(...l)=>{let r=e.hooks[s].apply(a,l);if(r===!1)r=o.apply(a,l);return r}}i.hooks=a}if(e.walkTokens){let a=this.defaults.walkTokens;i.walkTokens=function(s){let o=[];if(o.push(e.walkTokens.call(this,s)),a)o=o.concat(a.call(this,s));return o}}this.defaults={...this.defaults,...i}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}#n(n,t){return(e,i,a)=>{if(typeof i==="function")a=i,i=null;let s={...i};i={...this.defaults,...s};let o=this.#e(i.silent,i.async,a);if(typeof e==="undefined"||e===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof e!=="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(t2(i,a),i.hooks)i.hooks.options=i;if(a){let l=i.highlight,r;try{if(i.hooks)e=i.hooks.preprocess(e);r=n(e,i)}catch(p){return o(p)}let h=(p)=>{let m;if(!p)try{if(i.walkTokens)this.walkTokens(r,i.walkTokens);if(m=t(r,i),i.hooks)m=i.hooks.postprocess(m)}catch(z){p=z}return i.highlight=l,p?o(p):a(null,m)};if(!l||l.length<3)return h();if(delete i.highlight,!r.length)return h();let d=0;if(this.walkTokens(r,(p)=>{if(p.type==="code")d++,setTimeout(()=>{l(p.text,p.lang,(m,z)=>{if(m)return h(m);if(z!=null&&z!==p.text)p.text=z,p.escaped=!0;if(d--,d===0)h()})},0)}),d===0)h();return}if(i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(e):e).then((l)=>n(l,i)).then((l)=>i.walkTokens?Promise.all(this.walkTokens(l,i.walkTokens)).then(()=>l):l).then((l)=>t(l,i)).then((l)=>i.hooks?i.hooks.postprocess(l):l).catch(o);try{if(i.hooks)e=i.hooks.preprocess(e);let l=n(e,i);if(i.walkTokens)this.walkTokens(l,i.walkTokens);let r=t(l,i);if(i.hooks)r=i.hooks.postprocess(r);return r}catch(l){return o(l)}}}#e(n,t,e){return(i)=>{if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,n){let a="<p>An error occurred:</p><pre>"+sn(i.message+"",!0)+"</pre>";if(t)return Promise.resolve(a);if(e){e(null,a);return}return a}if(t)return Promise.reject(i);if(e){e(i);return}throw i}}}var Vn=new U1(Sn);function R(n,t,e){return Vn.parse(n,t,e)}R.options=R.setOptions=function(n){return Vn.setOptions(n),R.defaults=Vn.defaults,N1(R.defaults),R};R.getDefaults=Jt;R.defaults=Sn;R.use=function(...n){return Vn.use(...n),R.defaults=Vn.defaults,N1(R.defaults),R};R.walkTokens=function(n,t){return Vn.walkTokens(n,t)};R.parseInline=Vn.parseInline;R.Parser=vn;R.parser=vn.parse;R.Renderer=we;R.TextRenderer=Ze;R.Lexer=bn;R.lexer=bn.lex;R.Tokenizer=xe;R.Slugger=Xe;R.Hooks=ye;R.parse=R;var{options:L3,setOptions:F3,use:I3,walkTokens:D3,parseInline:q3}=R,H3=vn.parse,_3=bn.lex;/*!
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
*/function Y1(n,t){if(t==null)t="";else if(typeof t!=="string")t=String(t);return t.replace(/\{\{([^}]+)\}\}/g,(e,i)=>{let a=u1[`${n}${i.startsWith("[")?i:"."+i}`];return a===void 0?e:Y1(n,String(a))})}class R1 extends J{src="";value="";content=null;elements=!1;context={};constructor(){super();this.initAttributes("src","elements","context")}connectedCallback(){if(super.connectedCallback(),this.src!=="")(async()=>{let n=await fetch(this.src);this.value=await n.text()})();else if(this.value==="")if(this.elements)this.value=this.innerHTML;else this.value=this.textContent!=null?this.textContent:""}didRender=()=>{};render(){super.render(),u1[this.instanceId]=typeof this.context==="string"?JSON.parse(this.context):this.context;let n=Y1(this.instanceId,this.value);if(this.elements){let t=n.split(`
`).reduce((e,i)=>{if(i.startsWith("<")||e.length===0)e.push(i);else{let a=e[e.length-1];if(!a.startsWith("<")||!a.endsWith(">"))e[e.length-1]+=`
`+i;else e.push(i)}return e},[]);this.innerHTML=t.map((e)=>e.startsWith("<")&&e.endsWith(">")?e:R(e,{mangle:!1,headerIds:!1})).join("")}else this.innerHTML=R(n,{mangle:!1,headerIds:!1});this.didRender()}}var J1=R1.elementCreator({tag:"xin-md"});/*!

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
*/var{div:$t,button:s2}=X,o2={error:"red",warn:"orange",info:"royalblue",log:"gray",success:"green",progress:"royalblue"};class ae extends J{static singleton;static styleSpec={":host":{_notificationSpacing:8,_notificationWidth:360,_notificationPadding:`${T.notificationSpacing} ${T.notificationSpacing50} ${T.notificationSpacing} ${T.notificationSpacing200}`,_notificationBg:"#fafafa",_notificationAccentColor:"#aaa",_notificationTextColor:"#444",_notificationIconSize:T.notificationSpacing300,_notificationButtonSize:48,_notificationBorderWidth:"3px 0 0",_notificationBorderRadius:T.notificationSpacing50,position:"fixed",left:0,right:0,bottom:0,paddingBottom:T.notificationSpacing,width:T.notificationWidth,display:"flex",flexDirection:"column-reverse",margin:"0 auto",gap:T.notificationSpacing,maxHeight:"50vh",overflow:"hidden auto",boxShadow:"none !important"},":host *":{color:T.notificationTextColor},":host .note":{display:"grid",background:T.notificationBg,padding:T.notificationPadding,gridTemplateColumns:`${T.notificationIconSize} 1fr ${T.notificationButtonSize}`,gap:T.notificationSpacing,alignItems:"center",borderRadius:T.notificationBorderRadius,boxShadow:`0 2px 8px #0006, inset 0 0 0 2px ${T.notificationAccentColor}`,borderColor:T.notificationAccentColor,borderWidth:T.notificationBorderWidth,borderStyle:"solid",transition:"0.5s ease-in",transitionProperty:"margin, opacity",zIndex:1},":host .note .icon":{fill:T.notificationAccentColor},":host .note button":{display:"flex",lineHeight:T.notificationButtonSize,padding:0,margin:0,height:T.notificationButtonSize,width:T.notificationButtonSize,background:"transparent",alignItems:"center",justifyContent:"center",boxShadow:"none",border:"none",position:"relative"},":host .note button:hover svg":{fill:T.notificationAccentColor},":host .note button:active svg":{borderRadius:99,fill:T.notificationBg,background:T.notificationAccentColor,padding:T.spacing50},":host .note svg":{height:T.notificationIconSize,width:T.notificationIconSize,pointerEvents:"none"},":host .message":{display:"flex",flexDirection:"column",alignItems:"center",gap:T.notificationSpacing},":host .note.closing":{opacity:0,zIndex:0}};static removeNote(n){n.classList.add("closing"),n.style.marginBottom=-n.offsetHeight+"px";let t=()=>{n.remove()};n.addEventListener("transitionend",t),setTimeout(t,1000)}static post(n){let{message:t,duration:e,type:i,close:a,progress:s,icon:o}=Object.assign({type:"info",duration:-1},typeof n==="string"?{message:n}:n);if(!this.singleton)this.singleton=l2();let l=this.singleton;document.body.append(l),l.style.zIndex=String(y1()+1);let r=o2[i],h=s||i==="progress"?X.progress():{},d=()=>{if(a)a();ae.removeNote(m)},p=o instanceof SVGElement?o:o?I[o]({class:"icon"}):I.info({class:"icon"}),m=$t({class:`note ${i}`,style:{_notificationAccentColor:r}},p,$t({class:"message"},$t(t),h),s2({class:"close",title:"close",apply(z){z.addEventListener("click",d)}},I.x()));if(l.shadowRoot.append(m),h instanceof HTMLProgressElement&&s instanceof Function){h.setAttribute("max",String(100)),h.value=s();let z=setInterval(()=>{if(!l.shadowRoot.contains(m)){clearInterval(z);return}let x=s();if(h.value=x,x>=100)ae.removeNote(m)},1000)}if(e>0)setTimeout(()=>{ae.removeNote(m)},e*1000);return m.scrollIntoView(),d}content=null}var l2=ae.elementCreator({tag:"xin-notification"});function $3(n){return ae.post(n)}/*!
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
*/var r2=async(n,t="SHA-1")=>{let i=new TextEncoder().encode(n),a=await crypto.subtle.digest(t,i);return Array.from(new Uint8Array(a)).map((l)=>l.toString(16).padStart(2,"0")).join("")},c2=async(n)=>{let t=await r2(n),e=await fetch(`https://weakpass.com/api/v1/search/${t}`);if(e.ok){let i=await e.json();console.log("password found in weakpass database",i)}return e.status!==404},{span:Pt,xinSlot:h2}=X;class K1 extends J{minLength=8;goodLength=12;indicatorColors="#f00,#f40,#f80,#ef0,#8f0,#0a2";descriptionColors="#000,#000,#000,#000,#000,#fff";issues={tooShort:!0,short:!0,noUpper:!0,noLower:!0,noNumber:!0,noSpecial:!0};issueDescriptions={tooShort:"too short",short:"short",noUpper:"no upper case",noLower:"no lower case",noNumber:"no digits",noSpecial:"no unusual characters"};value=0;strengthDescriptions=["unacceptable","very weak","weak","moderate","strong","very strong"];constructor(){super();this.initAttributes("minLength","goodLength","indicatorColors")}strength(n){return this.issues={tooShort:n.length<this.minLength,short:n.length<this.goodLength,noUpper:!n.match(/[A-Z]/),noLower:!n.match(/[a-z]/),noNumber:!n.match(/[0-9]/),noSpecial:!n.match(/[^a-zA-Z0-9]/)},this.issues.tooShort?0:Object.values(this.issues).filter((t)=>!t).length-1}async isBreached(){let n=this.querySelector("input")?.value;if(!n||typeof n!=="string")return!0;return await c2(n)}updateIndicator=(n)=>{let{level:t,description:e}=this.parts,i=this.indicatorColors.split(","),a=this.descriptionColors.split(","),s=this.strength(n);if(this.value!==s)this.value=s,this.dispatchEvent(new Event("change"));t.style.width=`${(s+1)*16.67}%`,this.style.setProperty("--indicator-color",i[s]),this.style.setProperty("--description-color",a[s]),e.textContent=this.strengthDescriptions[s]};update=(n)=>{let t=n.target.closest("input");this.updateIndicator(t?.value||"")};content=()=>[h2({onInput:this.update}),Pt({part:"meter"},Pt({part:"level"}),Pt({part:"description"}))];render(){super.render();let n=this.querySelector("input");this.updateIndicator(n?.value)}}var P3=K1.elementCreator({tag:"xin-password-strength",styleSpec:{":host":{display:"inline-flex",flexDirection:"column",gap:T.spacing50,position:"relative"},":host xin-slot":{display:"flex"},':host [part="meter"]':{display:"block",position:"relative",height:P.meterHeight("24px"),background:P.indicatorBg("white"),borderRadius:P.meterRadius("4px"),boxShadow:P.meterShadow(`inset 0 0 0 2px ${T.indicatorColor}`)},':host [part="level"]':{height:P.levelHeight("20px"),content:'" "',display:"inline-block",width:0,transition:"0.15s ease-out",background:T.indicatorColor,margin:P.levelMargin("2px"),borderRadius:P.levelRadius("2px")},':host [part="description"]':{position:"absolute",inset:"0",color:T.descriptionColor,height:P.meterHeight("24px"),lineHeight:P.meterHeight("24px"),textAlign:"center"}}});/*!
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
*/var{span:Nt}=X;class B1 extends J{iconSize=24;min=1;max=5;step=1;value=null;icon="star";color="#f91";emptyColor="#8888";emptyStrokeWidth=2;readonly=!1;hollow=!1;static styleSpec={":host":{display:"inline-block",position:"relative",width:"fit-content"},":host::part(container)":{position:"relative",display:"inline-block"},":host::part(empty), :host::part(filled)":{height:"100%",whiteSpace:"nowrap",overflow:"hidden"},":host::part(empty)":{pointerEvents:"none",_textColor:"transparent"},':host [part="empty"]:not(.hollow)':{fill:T.ratingEmptyColor},":host .hollow":{fill:"none",stroke:T.ratingEmptyColor,strokeWidth:T.ratingEmptyStrokeWidth},":host::part(filled)":{position:"absolute",left:0,fill:T.ratingColor,stroke:T.ratingColor,strokeWidth:T.ratingEmptyStrokeWidth},":host svg":{transform:"scale(0.7)",pointerEvents:"all !important",transition:"0.25s ease-in-out"},":host svg:hover":{transform:"scale(0.9)"},":host svg:active":{transform:"scale(1)"}};constructor(){super();this.initAttributes("max","min","icon","step","color","emptyColor","readonly","iconSize","hollow")}content=()=>Nt({part:"container"},Nt({part:"empty"}),Nt({part:"filled"}));displayValue(n){let{empty:t,filled:e}=this.parts,i=Math.round((n||0)/this.step)*this.step;e.style.width=i/this.max*t.offsetWidth+"px"}update=(n)=>{if(this.readonly)return;let{empty:t}=this.parts,e=n instanceof MouseEvent?n.pageX-t.getBoundingClientRect().x:0,i=Math.min(Math.max(this.min,Math.round(e/t.offsetWidth*this.max/this.step+this.step*0.5)*this.step),this.max);if(n.type==="click")this.value=i;else if(n.type==="mousemove")this.displayValue(i);else this.displayValue(this.value||0)};handleKey=(n)=>{let t=Number(this.value);if(t==null)t=Math.round((this.min+this.max)*0.5*this.step)*this.step;let e=!1;switch(n.key){case"ArrowUp":case"ArrowRight":t+=this.step,e=!0;break;case"ArrowDown":case"ArrowLeft":t-=this.step,e=!0;break}if(this.value=Math.max(Math.min(t,this.max),this.min),e)n.stopPropagation(),n.preventDefault()};connectedCallback(){super.connectedCallback();let{container:n}=this.parts;n.tabIndex=0,n.addEventListener("mousemove",this.update,!0),n.addEventListener("mouseleave",this.update),n.addEventListener("blur",this.update),n.addEventListener("click",this.update),n.addEventListener("keydown",this.handleKey)}_renderedIcon="";render(){if(super.render(),this.style.setProperty("--rating-color",this.color),this.style.setProperty("--rating-empty-color",this.emptyColor),this.style.setProperty("--rating-empty-stroke-width",String(this.emptyStrokeWidth*32)),this.readonly)this.role="image";else this.role="slider";this.ariaLabel=`rating ${this.value} out of ${this.max}`,this.ariaValueMax=String(this.max),this.ariaValueMin=String(this.min),this.ariaValueNow=this.value===null?String(-1):String(this.value);let{empty:n,filled:t}=this.parts,e=this.iconSize+"px";if(n.classList.toggle("hollow",this.hollow),this._renderedIcon!==this.icon){this._renderedIcon=this.icon;for(let i=0;i<this.max;i++)n.append(I[this.icon]({height:e})),t.append(I[this.icon]({height:e}))}this.style.height=e,this.displayValue(this.value)}}var N3=B1.elementCreator({tag:"xin-rating"});/*!
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
*/var{xinSlot:a1,div:d2,button:u2,span:Q1}=X,p2=[{caption:"Title",tagType:"H1"},{caption:"Heading",tagType:"H2"},{caption:"Subheading",tagType:"H3"},{caption:"Minor heading",tagType:"H4"},{caption:"Body",tagType:"P"},{caption:"Code Block",tagType:"PRE"}];function Z1(n=p2){return F1({title:"paragraph style",slot:"toolbar",class:"block-style",options:n.map(({caption:t,tagType:e})=>({caption:t,value:`formatBlock,${e}`}))})}function Me(n="10px"){return Q1({slot:"toolbar",style:{flex:`0 0 ${n}`,content:" "}})}function V3(n="10px"){return Q1({slot:"toolbar",style:{flex:`0 0 ${n}`,content:" "}})}function mn(n,t,e){return u2({slot:"toolbar",dataCommand:t,title:n},e)}var g2=()=>[mn("left-justify","justifyLeft",I.alignLeft()),mn("center","justifyCenter",I.alignCenter()),mn("right-justify","justifyRight",I.alignRight()),Me(),mn("bullet list","insertUnorderedList",I.listBullet()),mn("numbered list","insertOrderedList",I.listNumber()),Me(),mn("indent","indent",I.blockIndent()),mn("indent","outdent",I.blockOutdent())],X1=()=>[mn("bold","bold",I.fontBold()),mn("italic","italic",I.fontItalic()),mn("underline","underline",I.fontUnderline())],f2=()=>[Z1(),Me(),...X1()],m2=()=>[Z1(),Me(),...g2(),Me(),...X1()];class k1 extends J{widgets="default";isInitialized=!1;get value(){return this.isInitialized?this.parts.doc.innerHTML:this.savedValue||this.innerHTML}set value(n){if(this.isInitialized)this.parts.doc.innerHTML=n;else this.innerHTML=n}blockElement(n){let{doc:t}=this.parts;while(n.parentElement!==null&&n.parentElement!==t)n=n.parentElement;return n.parentElement===t?n:void 0}get selectedBlocks(){let{doc:n}=this.parts,t=window.getSelection();if(t===null)return[];let e=[];for(let i=0;i<t.rangeCount;i++){let a=t.getRangeAt(i);if(!n.contains(a.commonAncestorContainer))continue;let s=this.blockElement(a.startContainer),o=this.blockElement(a.endContainer);e.push(s);while(s!==o&&s!==null)s=s.nextElementSibling,e.push(s)}return e}get selectedText(){let n=window.getSelection();if(n===null)return"";return this.selectedBlocks.length?n.toString():""}selectionChange=()=>{};handleSelectChange=(n)=>{let t=n.target.closest(Qe.tagName);if(t==null)return;this.doCommand(t.value)};handleButtonClick=(n)=>{let t=n.target.closest("button");if(t==null)return;this.doCommand(t.dataset.command)};content=[a1({name:"toolbar",part:"toolbar",onClick:this.handleButtonClick,onChange:this.handleSelectChange}),d2({part:"doc",contenteditable:!0,style:{flex:"1 1 auto",outline:"none"}}),a1({part:"content"})];constructor(){super();this.initAttributes("widgets")}doCommand(n){if(n===void 0)return;let t=n.split(",");console.log("execCommand",t[0],!1,...t.slice(1)),document.execCommand(t[0],!1,...t.slice(1))}updateBlockStyle(){let n=this.parts.toolbar.querySelector(".block-style");if(n===null)return;let t=this.selectedBlocks.map((e)=>e.tagName);t=[...new Set(t)],n.value=t.length===1?`formatBlock,${t[0]}`:""}connectedCallback(){super.connectedCallback();let{doc:n,content:t}=this.parts;if(t.innerHTML!==""&&n.innerHTML==="")n.innerHTML=t.innerHTML,t.innerHTML="";this.isInitialized=!0,t.style.display="none",document.addEventListener("selectionchange",(e)=>{this.updateBlockStyle(),this.selectionChange(e,this)})}render(){let{toolbar:n}=this.parts;if(super.render(),n.children.length===0)switch(this.widgets){case"minimal":n.append(...f2());break;case"default":n.append(...m2());break}}}var W3=k1.elementCreator({tag:"xin-word",styleSpec:{":host":{display:"flex",flexDirection:"column",height:"100%"},':host [part="toolbar"]':{padding:"4px",display:"flex",gap:"0px",flex:"0 0 auto",flexWrap:"wrap"}}});/*!
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
*/var{div:b2,slot:v2,label:y2,span:x2,input:s1}=X;class na extends J{choices="";other="";multiple=!1;name="";placeholder="Please specify…";value=null;get values(){return(this.value||"").split(",").map((n)=>n.trim()).filter((n)=>n!=="")}content=()=>[v2(),b2({part:"options"},s1({part:"custom",hidden:!0}))];static styleSpec={":host":{display:"inline-flex",gap:P.segmentedOptionGap("8px")},":host, :host::part(options)":{flexDirection:P.segmentedDirection("row"),alignItems:P.segmentedAlignItems("center")},":host label":{display:"inline-grid",alignItems:"center",gap:P.segmentedOptionGap("8px"),gridTemplateColumns:P.segmentedOptionGridColumns("0px 24px 1fr"),padding:P.segmentedOptionPadding("4px 12px"),font:P.segmentedOptionFont("16px")},":host label:has(:checked)":{color:P.segmentedOptionCurrentColor("#eee"),background:P.segmentedOptionCurrentBackground("#44a")},":host svg":{height:P.segmentOptionIconSize("16px"),fill:P.segmentedOptionIconColor("currentColor")},":host label.no-icon":{gap:0,gridTemplateColumns:P.segmentedOptionGridColumns("0px 1fr")},':host input[type="radio"], :host input[type="checkbox"]':{visibility:P.segmentedInputVisibility("hidden")},":host::part(options)":{display:"flex",borderRadius:P.segmentedOptionsBorderRadius("8px"),background:P.segmentedOptionsBackground("#fff"),color:P.segmentedOptionColor("#222"),overflow:"hidden"},":host::part(custom)":{padding:P.segmentedOptionPadding("4px 12px"),color:P.segmentedOptionCurrentColor("#eee"),background:P.segmentedOptionCurrentBackground("#44a"),font:P.segmentedOptionFont("16px"),border:"0",outline:"none"},":host::part(custom)::placeholder":{color:P.segmentedOptionCurrentColor("#eee"),opacity:P.segmentedPlaceholderOpacity(0.75)}};constructor(){super();this.initAttributes("direction","choices","other","multiple","name","placeholder")}valueChanged=!1;handleChange=()=>{let{options:n,custom:t}=this.parts;if(this.multiple){let e=[...n.querySelectorAll("input:checked")];this.value=e.map((i)=>i.value).join(",")}else{let e=n.querySelector("input:checked");if(!e)this.value=null;else if(e.value)t.setAttribute("hidden",""),this.value=e.value;else t.removeAttribute("hidden"),t.focus(),t.select(),this.value=t.value}this.valueChanged=!0};handleKey=(n)=>{switch(n.code){case"Space":n.target.click();break}};connectedCallback(){super.connectedCallback();let{options:n}=this.parts;if(this.name==="")this.name=this.instanceId;if(n.addEventListener("change",this.handleChange),n.addEventListener("keydown",this.handleKey),this.other&&this.multiple)console.warn(this,"is set to [other] and [multiple]; [other] will be ignored"),this.other=""}get _choices(){let n=Array.isArray(this.choices)?this.choices:this.choices.split(",").filter((t)=>t.trim()!=="").map((t)=>{let[e,i]=t.split("=").map((r)=>r.trim()),[a,s]=(i||e).split(":").map((r)=>r.trim()),o=s?I[s]():"";return{value:e,icon:o,caption:a}});if(this.other&&!this.multiple){let[t,e]=this.other.split(":");n.push({value:"",caption:t,icon:e})}return n}get isOtherValue(){return Boolean(this.value===""||this.value&&!this._choices.find((n)=>n.value===this.value))}render(){if(super.render(),this.valueChanged){this.valueChanged=!1;return}let{options:n,custom:t}=this.parts;n.textContent="";let e=this.multiple?"checkbox":"radio",{values:i,isOtherValue:a}=this;if(n.append(...this._choices.map((s)=>{return y2({tabindex:0},s1({type:e,name:this.name,value:s.value,checked:i.includes(s.value)||s.value===""&&a,tabIndex:-1}),s.icon||{class:"no-icon"},x2(s.caption))})),this.other&&!this.multiple)t.hidden=!a,t.value=a?this.value:"",t.placeholder=this.placeholder,n.append(t)}}var G3=na.elementCreator({tag:"xin-segmented"});/*!
# sidebar

The default layout for iOS / iPadOS apps is to hide the sidebar when displaying content on small
screens, and display the sidebar when space is available (with the user able to explicitly hide
the sidebar if so desired). `<xin-sidenav>` provides this functionality.

`<xin-sidenav>` is used to handle the layout of the documentation tab panel.

`<xin-sidenav>`'s behavior is controlled by two attributes, `minSize` is the point at which it will toggle between showing the navigation
sidebar and content, while `navSize` is the width of the sidebar. You can interrogate its `compact` property to find out if it's
currently in `compact` form.
*/var{slot:o1}=X;class ea extends J{minSize=800;navSize=200;compact=!1;content=[o1({name:"nav"}),o1({part:"content"})];_contentVisible=!1;get contentVisible(){return this._contentVisible}set contentVisible(n){this._contentVisible=n,this.queueRender()}static styleSpec={":host":{display:"grid",gridTemplateColumns:`${P.navWidth("50%")} ${P.contentWidth("50%")}`,gridTemplateRows:"100%",position:"relative",margin:P.margin("0 0 0 -100%"),transition:P.sideNavTransition("0.25s ease-out")},":host slot":{position:"relative"},":host slot:not([name])":{display:"block"},':host slot[name="nav"]':{display:"block"}};onResize=()=>{let{content:n}=this.parts,t=this.offsetParent;if(t===null)return;if(this.compact=t.offsetWidth<this.minSize,[...this.childNodes].find((i)=>i instanceof Element?i.getAttribute("slot")!=="nav":!0)===void 0){this.style.setProperty("--nav-width","100%"),this.style.setProperty("--content-width","0%");return}if(!this.compact)n.classList.add("-xin-sidenav-visible"),this.style.setProperty("--nav-width",`${this.navSize}px`),this.style.setProperty("--content-width",`calc(100% - ${this.navSize}px)`),this.style.setProperty("--margin","0");else if(n.classList.remove("-xin-sidenav-visible"),this.style.setProperty("--nav-width","50%"),this.style.setProperty("--content-width","50%"),this.contentVisible)this.style.setProperty("--margin","0 0 0 -100%");else this.style.setProperty("--margin","0 -100% 0 0")};observer;connectedCallback(){super.connectedCallback(),this.contentVisible=this.parts.content.childNodes.length===0,globalThis.addEventListener("resize",this.onResize),this.observer=new MutationObserver(this.onResize),this.observer.observe(this,{childList:!0}),this.style.setProperty("--side-nav-transition","0s"),setTimeout(()=>{this.style.removeProperty("--side-nav-transition")},250)}disconnectedCallback(){super.disconnectedCallback(),this.observer.disconnect()}constructor(){super();this.initAttributes("minSize","navSize","compact")}render(){super.render(),this.onResize()}}var ta=ea.elementCreator({tag:"xin-sidenav"}),{slot:l1}=X;/*!
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
*/class ia extends J{minWidth=0;minHeight=0;value="normal";content=[l1({part:"normal"}),l1({part:"small",name:"small"})];static styleSpec={":host":{display:"inline-block",position:"relative"}};constructor(){super();this.initAttributes("minWidth","minHeight")}onResize=()=>{let{normal:n,small:t}=this.parts,e=this.offsetParent;if(!(e instanceof HTMLElement))return;else if(e.offsetWidth<this.minWidth||e.offsetHeight<this.minHeight)n.hidden=!0,t.hidden=!1,this.value="small";else n.hidden=!1,t.hidden=!0,this.value="normal"};connectedCallback(){super.connectedCallback(),globalThis.addEventListener("resize",this.onResize)}disconnectedCallback(){super.disconnectedCallback(),globalThis.removeEventListener("resize",this.onResize)}}var aa=ia.elementCreator({tag:"xin-sizebreak"});/*!
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
*/class sa extends J{target=null;static styleSpec={":host":{_resizeIconFill:"#222",display:"block",position:"absolute",bottom:-7,right:-7,padding:14,width:44,height:44,opacity:0.25,transition:"opacity 0.25s ease-out"},":host(:hover)":{opacity:0.5},":host svg":{width:16,height:16,fill:T.resizeIconFill}};content=I.resize();get minSize(){let{minWidth:n,minHeight:t}=getComputedStyle(this.target);return{width:parseFloat(n)||32,height:parseFloat(t)||32}}resizeTarget=(n)=>{let{target:t}=this;if(!t)return;let{offsetWidth:e,offsetHeight:i}=t;t.style.left=t.offsetLeft+"px",t.style.top=t.offsetTop+"px",t.style.bottom="",t.style.right="";let{minSize:a}=this;Pn(n,(s,o,l)=>{if(t.style.width=Math.max(a.width,e+s)+"px",t.style.height=Math.max(a.height,i+o)+"px",l.type==="mouseup")return!0},"nwse-resize")};connectedCallback(){if(super.connectedCallback(),!this.target)this.target=this.parentElement;let n={passive:!0};this.addEventListener("mousedown",this.resizeTarget,n),this.addEventListener("touchstart",this.resizeTarget,n)}}var U3=sa.elementCreator({tag:"xin-sizer"});/*!
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
*/var{div:w2,input:M2,span:z2,button:oa}=X;class Kt extends J{caption="";removeable=!1;removeCallback=()=>{this.remove()};content=()=>[z2({part:"caption"},this.caption),oa(I.x(),{part:"remove",hidden:!this.removeable,onClick:this.removeCallback})];constructor(){super();this.initAttributes("caption","removeable")}}var S2=Kt.elementCreator({tag:"xin-tag",styleSpec:{":host":{"--tag-close-button-color":"#000c","--tag-close-button-bg":"#fffc","--tag-close-button-border-radius":"99px","--tag-button-opacity":"0.5","--tag-button-hover-opacity":"0.75","--tag-bg":P.brandColor("blue"),"--tag-text-color":P.brandTextColor("white"),display:"inline-flex",borderRadius:T.spacing50,color:T.tagTextColor,background:T.tagBg,padding:`0 ${T.spacing75} 0 ${T.spacing75}`,height:`calc(${T.lineHeight} + ${T.spacing50})`,lineHeight:`calc(${T.lineHeight} + ${T.spacing50})`},':host > [part="caption"]':{position:"relative",whiteSpace:"nowrap",overflow:"hidden",flex:"1 1 auto",fontSize:P.fontSize("16px"),color:T.tagTextColor,textOverflow:"ellipsis"},':host [part="remove"]':{boxShadow:"none",margin:`0 ${T.spacing_50} 0 ${T.spacing25}`,padding:0,display:"inline-flex",alignItems:"center",alignSelf:"center",justifyContent:"center",height:T.spacing150,width:T.spacing150,"--text-color":T.tagCloseButtonColor,background:T.tagCloseButtonBg,borderRadius:T.tagCloseButtonBorderRadius,opacity:T.tagButtonOpacity},':host [part="remove"]:hover':{background:T.tagCloseButtonBg,opacity:T.tagButtonHoverOpacity}}});class la extends J{name="";availableTags=[];value=[];textEntry=!1;editable=!1;placeholder="enter tags";get tags(){return typeof this.value==="string"?this.value.split(",").map((n)=>n.trim()).filter((n)=>n!==""):this.value}constructor(){super();this.initAttributes("name","value","textEntry","availableTags","editable","placeholder")}addTag=(n)=>{if(n.trim()==="")return;let{tags:t}=this;if(!t.includes(n))t.push(n);this.value=t,this.queueRender(!0)};toggleTag=(n)=>{if(this.tags.includes(n))this.value=this.tags.filter((t)=>t!==n);else this.addTag(n);this.queueRender(!0)};enterTag=(n)=>{let{tagInput:t}=this.parts;switch(n.key){case",":{let e=t.value.split(",")[0];this.addTag(e)}break;case"Enter":{let e=t.value.split(",")[0];this.addTag(e)}n.stopPropagation(),n.preventDefault();break;default:}};popSelectMenu=()=>{let{toggleTag:n}=this,{tagMenu:t}=this.parts,e=typeof this.availableTags==="string"?this.availableTags.split(","):this.availableTags,i=this.tags.filter((s)=>!e.includes(s));if(i.length)e.push(null,...i);let a=e.map((s)=>{if(s===""||s===null)return null;else if(typeof s==="object")return{icon:this.tags.includes(s.value)?I.minus():I.plus(),caption:s.caption,action(){n(s.value)}};else return{icon:this.tags.includes(s)?I.minus():I.plus(),caption:s,action(){n(s)}}});ze({target:t,width:"auto",menuItems:a})};content=()=>[w2({part:"tagContainer",class:"row",onClick(n){n.stopPropagation(),n.preventDefault()}}),M2({part:"tagInput",class:"elastic",onKeydown:this.enterTag}),oa({title:"add tag",part:"tagMenu",onClick:this.popSelectMenu},I.chevronDown())];removeTag=(n)=>{if(this.editable){let t=n.target.closest(Kt.tagName);this.value=this.tags.filter((e)=>e!==t.caption),t.remove(),this.queueRender(!0)}n.stopPropagation(),n.preventDefault()};render(){super.render();let{tagContainer:n,tagMenu:t,tagInput:e}=this.parts;if(e.value="",e.setAttribute("placeholder",this.placeholder),this.editable)t.toggleAttribute("hidden",!1),e.toggleAttribute("hidden",!this.textEntry);else t.toggleAttribute("hidden",!0),e.toggleAttribute("hidden",!0);n.textContent="";let{tags:i}=this;for(let a of i)n.append(S2({caption:a,removeable:this.editable,removeCallback:this.removeTag}))}}var Y3=la.elementCreator({tag:"xin-tag-list",styleSpec:{":host":{"--tag-list-bg":"#f8f8f8","--touch-size":"44px","--spacing":"16px",display:"grid",gridTemplateColumns:"auto",alignItems:"center",background:T.tagListBg,gap:T.spacing25},":host[editable]":{gridTemplateColumns:`auto ${T.touchSize}`},":host[editable][text-entry]":{gridTemplateColumns:`2fr 1fr ${T.touchSize}`},':host [part="tagContainer"]':{display:"flex",content:'" "',alignItems:"center",background:T.inputBg,borderRadius:T.roundedRadius,boxShadow:T.borderShadow,flexWrap:"nowrap",overflow:"auto hidden",gap:T.spacing25,minHeight:`calc(${T.lineHeight} + ${T.spacing})`,padding:T.spacing25},':host [part="tagMenu"]':{width:T.touchSize,height:T.touchSize,lineHeight:T.touchSize,textAlign:"center",padding:0,margin:0},":host [hidden]":{display:"none !important"}}});/*!
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
*/var ra={"@import":"https://fonts.googleapis.com/css2?family=Aleo:ital,wght@0,100..900;1,100..900&famiSpline+Sans+Mono:ital,wght@0,300..700;1,300..700&display=swap",":root":{_fontFamily:"'Aleo', sans-serif",_codeFontFamily:"'Spline Sans Mono', monospace",_fontSize:"16px",_codeFontSize:"14px",_textColor:"#222",_brandColor:"#088358",_linkColor:w.brandColor,_background:"#fafafa",_backgroundShaded:"#f5f5f5",_navBg:"#efefeed2",_barColor:"#dae3df",_focusColor:"#08835880",_brandTextColor:"#ecf3dd",_insetBg:"#eee",_codeBg:"#f8ffe9",_spacing:"10px",_lineHeight:"calc(var(--font-size) * 1.6)",_h1Scale:"2",_h2Scale:"1.5",_h3Scale:"1.25",_xinTabsSelectedColor:w.brandColor,_xinTabsBarColor:w.brandTextColor,_touchSize:"32px",_shadowColor:"#0004",_menuItemIconColor:w.brandColor,_headerHeight:"calc( var(--line-height) * var(--h2-scale) + var(--spacing) * 2 )"},"*":{boxSizing:"border-box"},body:{fontFamily:w.fontFamily,fontSize:w.fontSize,margin:"0",lineHeight:w.lineHeight,background:w.background,color:w.textColor},"input, button, select, textarea":{fontFamily:w.fontFamily,fontSize:w.fontSize},select:{WebkitAppearance:"none",appearance:"none"},header:{background:w.brandColor,color:w.brandTextColor,_textColor:w.brandTextColor,_linkColor:w.transTextColor,display:"flex",alignItems:"center",padding:"0 calc(var(--spacing) * 1.5)",lineHeight:"calc(var(--line-height) * var(--h1-scale))",height:w.headerHeight,whiteSpace:"nowrap"},h1:{_textColor:w.brandColor,fontSize:"calc(var(--font-size) * var(--h1-scale))",lineHeight:"calc(var(--line-height) * var(--h1-scale))",fontWeight:"400",margin:"0",padding:w.spacing,textAlign:"center"},"header h2":{color:w.brandTextColor,whiteSpace:"nowrap"},h2:{color:w.brandColor,fontSize:"calc(var(--font-size) * var(--h2-scale))",lineHeight:"calc(var(--line-height) * var(--h2-scale))",margin:"calc(var(--spacing) * var(--h2-scale)) 0"},h3:{fontSize:"calc(var(--font-size) * var(--h3-scale))",lineHeight:"calc(var(--line-height) * var(--h3-scale))",margin:"calc(var(--spacing) * var(--h3-scale)) 0"},main:{alignItems:"stretch",display:"flex",flexDirection:"column",maxWidth:"100vw",height:"100vh",overflow:"hidden"},"main > xin-sidenav":{height:"calc(100vh - var(--header-height))"},blockquote:{background:w.insetBg,margin:"0",padding:"var(--spacing) calc(var(--spacing) * 2)"},"blockquote > :first-child":{marginTop:"0"},"blockquote > :last-child":{marginBottom:"0"},".bar":{display:"flex",gap:w.spacing,justifyContent:"center",alignItems:"center",padding:w.spacing,flexWrap:"wrap",_textColor:w.brandColor,background:w.barColor},a:{textDecoration:"none",color:w.linkColor,opacity:"0.9",borderBottom:"1px solid var(--brand-color)"},"button, select, .clickable":{transition:"ease-out 0.2s",background:w.brandTextColor,_textColor:w.brandColor,display:"inline-block",textDecoration:"none",padding:"0 calc(var(--spacing) * 1.25)",border:"none",borderRadius:"calc(var(--spacing) * 0.5)"},"button, select, clickable, input":{lineHeight:"calc(var(--line-height) + var(--spacing))"},"select:has(+ .icon-chevron-down)":{paddingRight:"calc(var(--spacing) * 2.7)"},"select + .icon-chevron-down":{marginLeft:"calc(var(--spacing) * -2.7)",width:"calc(var(--spacing) * 2.7)",alignSelf:"center",pointerEvents:"none",objectPosition:"left center",_textColor:w.brandColor},"label > select + .icon-chevron-down":{marginLeft:"calc(var(--spacing) * -3.5)"},"input, textarea":{border:"none",outline:"none",borderRadius:"calc(var(--spacing) * 0.5)"},input:{padding:"0 calc(var(--spacing) * 1.5)"},textarea:{padding:"var(--spacing) calc(var(--spacing) * 1.25)",lineHeight:w.lineHeight,minHeight:"calc(var(--spacing) + var(--line-height) * 4)"},"input[type='number']":{paddingRight:0,width:"6em",textAlign:"right"},"input[type=number]::-webkit-inner-spin-button":{margin:"1px 3px 1px 0.5em",opacity:1,inset:1},"input[type='checkbox'], input[type='radio']":{maxWidth:w.lineHeight},"::placeholder":{color:w.focusColor},img:{verticalAlign:"middle"},"button:hover, button:hover, .clickable:hover":{boxShadow:"inset 0 0 0 2px var(--brand-color)"},"button:active, button:active, .clickable:active":{background:w.brandColor,color:w.brandTextColor},label:{display:"inline-flex",gap:"calc(var(--spacing) * 0.5)",alignItems:"center"},".elastic":{flex:"1 1 auto",overflow:"hidden",position:"relative"},"svg text":{pointerEvents:"none",fontSize:"16px",fontWeight:"bold",fill:"#000",stroke:"#fff8",strokeWidth:"0.5",opacity:"0"},"svg text.hover":{opacity:"1"},".thead":{background:w.brandColor,color:w.brandTextColor},".th + .th":{border:"1px solid #fff4",borderWidth:"0 1px"},".th, .td":{padding:"0 var(--spacing)"},".tr:not([aria-selected]):hover":{background:"#08835810"},"[aria-selected]":{background:"#08835820"},":disabled":{opacity:"0.5",filter:"saturate(0)",pointerEvents:"none"},pre:{background:w.codeBg,padding:w.spacing,borderRadius:"calc(var(--spacing) * 0.25)",overflow:"scroll",fontSize:w.codeFontSize,lineHeight:"calc(var(--font-size) * 1.2)"},"pre, code":{fontFamily:w.codeFontFamily,_textColor:w.brandColor},".-xin-sidenav-visible .close-content":{display:"none"},".transparent, .iconic":{background:"none"},".iconic":{padding:"0",fontSize:"150%",lineHeight:"calc(var(--line-height) + var(--spacing))",width:"calc(var(--line-height) + var(--spacing))",textAlign:"center"},".transparent:hover, .iconic:hover":{background:"#0002",boxShadow:"none",color:w.textColor},".transparent:active, .iconic:active":{background:"#0004",boxShadow:"none",color:w.textColor},"xin-sidenav:not([compact]) .show-within-compact":{display:"none"},".on.on":{background:w.brandColor,_textColor:w.brandTextColor},".current":{background:w.background},".doc-link":{cursor:"pointer",borderBottom:"none",transition:"0.15s ease-out",marginLeft:"20px",padding:"calc(var(--spacing) * 0.5) calc(var(--spacing) * 1.5)"},".doc-link:not(.current):hover":{background:w.background},".doc-link:not(.current)":{opacity:"0.8",marginLeft:0},"xin-example":{margin:"var(--spacing) 0"},"[class*='icon-'], xin-icon":{color:"currentcolor",height:w.fontSize,pointerEvents:"none"},"[class*='icon-']":{verticalAlign:"middle"},".icon-plus":{content:"'+'"},table:{borderCollapse:"collapse"},thead:{background:w.brandColor,color:w.brandTextColor},tbody:{background:w.background},"tr:nth-child(2n)":{background:w.backgroundShaded},"th, td":{padding:"calc(var(--spacing) * 0.5) var(--spacing)"},"header xin-locale-picker xin-select button":{color:"currentcolor",background:"transparent",gap:"2px"},svg:{fill:"currentcolor"},"img.logo":{animation:"2s ease-in-out 0s infinite alternate logo-swing"},"@keyframes logo-swing":{"0%":{transform:"perspective(1000px) rotateY(15deg)"},"100%":{transform:"perspective(1000px) rotateY(-15deg)"}}};var ca=`en-US	fr	fi	sv	zh	ja	ko	es	de	it
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
Localize	Localiser	Paikallistaa	Lokalisera	本地化	ローカライズ	현지화	Localizar	Lokalisieren	Localizzare`;var Oi={};St(Oi,{xrControllersText:()=>r0,xrControllers:()=>l0,xinTagList:()=>ul,xinTag:()=>ds,xinSizer:()=>rl,xinSelect:()=>Oe,xinSegmented:()=>sl,xinRating:()=>J0,xinPasswordStrength:()=>R0,xinNotification:()=>ka,xinLocalized:()=>z0,xinForm:()=>s0,xinFloat:()=>it,xinField:()=>a0,xinCarousel:()=>I2,updateLocalized:()=>gi,trackDrag:()=>rn,tabSelector:()=>pi,svgIcon:()=>j2,svg2DataUrl:()=>Zt,styleSheet:()=>nt,spacer:()=>he,sizeBreak:()=>ll,sideNav:()=>ol,scriptTag:()=>cn,richTextWidgets:()=>ss,richText:()=>nl,removeLastMenu:()=>jn,postNotification:()=>U0,positionFloat:()=>ma,popMenu:()=>yn,popFloat:()=>ai,menu:()=>Ma,markdownViewer:()=>V0,mapBox:()=>C0,makeSorter:()=>gt,makeExamplesLive:()=>m0,localize:()=>fi,localePicker:()=>M0,liveExample:()=>pt,isBreached:()=>es,initLocalization:()=>w0,icons:()=>O,i18n:()=>tn,gamepadText:()=>o0,gamepadState:()=>qa,findHighestZ:()=>Ae,filterPart:()=>rt,filterBuilder:()=>X2,elastic:()=>Z0,editableRect:()=>J2,dragAndDrop:()=>ot,digest:()=>ns,defineIcon:()=>E2,dataTable:()=>Y2,createSubMenu:()=>xa,createMenuItem:()=>wa,createMenuAction:()=>ya,commandButton:()=>pn,colorInput:()=>ii,codeEditor:()=>Te,bringToFront:()=>Tn,bodymovinPlayer:()=>L2,blockStyle:()=>Si,b3d:()=>O2,availableFilters:()=>ci,abTest:()=>C2,XinTagList:()=>ji,XinTag:()=>wt,XinSizer:()=>Ei,XinSelect:()=>Rn,XinRating:()=>zi,XinPasswordStrength:()=>wi,XinNotification:()=>Bn,XinLocalized:()=>ft,XinForm:()=>je,XinFloat:()=>An,XinField:()=>ct,XinCarousel:()=>ei,TabSelector:()=>ht,SvgIcon:()=>Xt,SizeBreak:()=>Ai,SideNav:()=>Ti,RichText:()=>Ci,MarkdownViewer:()=>vi,MapBox:()=>Jn,MAPSTYLES:()=>Va,LocalePicker:()=>mi,LiveExample:()=>ut,FilterPart:()=>hi,FilterBuilder:()=>di,EditableRect:()=>un,DataTable:()=>li,CodeEditor:()=>Wn,BodymovinPlayer:()=>le,B3d:()=>kt,AbTest:()=>oe});/*!
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
*/var{abTestConditions:Bt}=qn({abTestConditions:{}});class oe extends _{static set conditions(n){Object.assign(Bt,n);for(let t of[...oe.instances])t.queueRender()}condition="";not=!1;static instances=new Set;constructor(){super();this.initAttributes("condition","not")}connectedCallback(){super.connectedCallback(),oe.instances.add(this)}disconnectedCallback(){super.disconnectedCallback(),oe.instances.delete(this)}render(){if(this.condition!==""&&(this.not?Bt[this.condition]!==!0:Bt[this.condition]===!0))this.toggleAttribute("hidden",!1);else this.toggleAttribute("hidden",!0)}}var C2=oe.elementCreator({tag:"xin-ab"});/*!
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
*/var ke={};function cn(n,t){if(ke[n]===void 0){if(t!==void 0){let i=globalThis[t];ke[n]=Promise.resolve({[t]:i})}let e=$.script({src:n});document.head.append(e),ke[n]=new Promise((i)=>{e.onload=()=>i(globalThis)})}return ke[n]}var Qt={};function nt(n){if(Qt[n]===void 0){let t=$.link({rel:"stylesheet",type:"text/css",href:n});document.head.append(t),Qt[n]=new Promise((e)=>{t.onload=e})}return Qt[n]}var Ce={xinjsUiColor:{p:["M976 0c4 0 8 2 11 5 4 4 7 7 11 11 0 0 21 21 21 21 3 3 5 7 5 11 0 0 0 928 0 928 0 4-2 8-5 11-4 4-7 7-11 11-5 5-9 9-14 14 0 0-7 7-7 7-3 3-7 5-11 5 0 0-928 0-928 0-4 0-8-2-11-5-4-4-7-7-11-11 0 0-21-21-21-21-3-3-5-7-5-11 0 0 0-928 0-928 0-4 2-8 5-11 4-4 7-7 11-11 5-5 9-9 14-14 0 0 7-7 7-7 3-3 7-5 11-5 0 0 928 0 928 0z","M182 131c13 5 8 2 16 9 0 0 102 102 102 102s91-91 91-91c9-9 9-9 11-11 8-7 13-8 23-9 0 0 4 0 4 0 13 5 8 2 16 9 12 12 12 32 0 44-2 2-2 2-11 11 0 0-91 91-91 91s102 102 102 102c12 12 12 32 0 44-12 12-32 12-44 0 0 0-102-102-102-102s-48 48-48 48c0 0-44 44-44 44-9 9-9 9-11 11-12 12-32 12-44 0-12-12-12-32 0-44 2-2 2-2 11-11 0 0 91-91 91-91s-102-102-102-102c-12-12-12-32 0-44 8-7 13-8 23-9 0 0 4 0 4 0z","M516 131c17 0 31 14 31 31 0 0 0 248 0 248 0 17-14 31-31 31-17 0-31-14-31-31 0 0 0-248 0-248 0-17 14-31 31-31z","M611 131c0 0 4 0 4 0 13 5 8 2 16 9 2 2 2 2 11 11 0 0 226 226 226 226 9 9 9 9 11 11 12 12 12 32 0 44-12 12-32 12-44 0 0 0-248-248-248-248-12-12-12-32 0-44 8-7 13-8 23-9z","M516 131c17 0 31 14 31 31 0 247 0 164 0 248 0 17-14 31-31 31-17 0-31-14-31-31 0 0 0-248 0-248 0-17 14-31 31-31z","M611 131c0 0 4 0 4 0 13 5 8 2 16 9 2 2 2 2 11 11 0 0 226 226 226 226 9 9 9 9 11 11 12 12 12 32 0 44-12 12-32 12-44 0 0 0-248-248-248-248-12-12-12-32 0-44 8-7 13-8 23-9z","M653 498c0 0 0 146 0 146 0 140-114 254-254 254-140 0-254-114-254-254 0 0 0-146 0-146s127 0 127 0c0 0 0 146 0 146 0 70 57 127 127 127 70 0 127-57 127-127 0 0 0-146 0-146s127 0 127 0z","M765 881c0 0 0-384 0-384s127 0 127 0c0 0 0 384 0 384s-127 0-127 0z","M720 995c-24-48-47-96-71-145-27 26-55 53-82 79 0-118 0-237 0-355 93 71 185 142 278 213-37 7-74 13-111 20 24 48 47 96 71 145-28 14-57 29-85 43 0 0 0 0 0 0z","M657 807c25 51 50 102 75 153 13-7 26-13 38-20-25-51-50-102-75-153 29-5 58-10 86-15-63-48-126-96-188-144 0 80 0 160 0 240 21-20 42-41 64-61 0 0 0 0 0 0z"],c:["rgb(64, 64, 64)","rgb(255, 28, 36)","rgb(8, 131, 87)","rgb(8, 131, 87)","rgb(140, 198, 63)","rgb(61, 168, 244)","rgb(255, 147, 29)","rgb(251, 237, 33)","rgb(255, 255, 255)","rgb(0, 0, 0)"]},xinjsUi:{p:["M976 0c4 0 8 2 11 5 4 4 7 7 11 11 0 0 21 21 21 21 3 3 5 7 5 11 0 0 0 928 0 928 0 4-2 8-5 11-4 4-7 7-11 11-5 5-9 9-14 14 0 0-7 7-7 7-3 3-7 5-11 5 0 0-928 0-928 0-4 0-8-2-11-5-4-4-7-7-11-11 0 0-21-21-21-21-3-3-5-7-5-11 0 0 0-928 0-928 0-4 2-8 5-11 4-4 7-7 11-11 5-5 9-9 14-14 0 0 7-7 7-7 3-3 7-5 11-5 0 0 928 0 928 0z","M182 131c13 5 8 2 16 9 0 0 102 102 102 102s91-91 91-91c9-9 9-9 11-11 8-7 13-8 23-9 0 0 4 0 4 0 13 5 8 2 16 9 12 12 12 32 0 44-2 2-2 2-11 11 0 0-91 91-91 91s102 102 102 102c12 12 12 32 0 44-12 12-32 12-44 0 0 0-102-102-102-102s-48 48-48 48c0 0-44 44-44 44-9 9-9 9-11 11-12 12-32 12-44 0-12-12-12-32 0-44 2-2 2-2 11-11 0 0 91-91 91-91s-102-102-102-102c-12-12-12-32 0-44 8-7 13-8 23-9 0 0 4 0 4 0z","M516 131c17 0 31 14 31 31 0 0 0 248 0 248 0 17-14 31-31 31-17 0-31-14-31-31 0 0 0-248 0-248 0-17 14-31 31-31z","M516 131c17 0 31 14 31 31 0 247 0 164 0 248 0 17-14 31-31 31-17 0-31-14-31-31 0 0 0-248 0-248 0-17 14-31 31-31z","M611 131c0 0 4 0 4 0 13 5 8 2 16 9 2 2 2 2 11 11 0 0 226 226 226 226 9 9 9 9 11 11 12 12 12 32 0 44-12 12-32 12-44 0 0 0-248-248-248-248-12-12-12-32 0-44 8-7 13-8 23-9z","M182 131c13 5 8 2 16 9 0 0 102 102 102 102s91-91 91-91c9-9 9-9 11-11 8-7 13-8 23-9 0 0 4 0 4 0 13 5 8 2 16 9 12 12 12 32 0 44-2 2-2 2-11 11 0 0-91 91-91 91s102 102 102 102c12 12 12 32 0 44-12 12-32 12-44 0 0 0-102-102-102-102s-48 48-48 48c0 0-44 44-44 44-9 9-9 9-11 11-12 12-32 12-44 0-12-12-12-32 0-44 2-2 2-2 11-11 0 0 91-91 91-91s-102-102-102-102c-12-12-12-32 0-44 8-7 13-8 23-9 0 0 4 0 4 0zM516 131c17 0 31 14 31 31 0 0 0 248 0 248 0 17-14 31-31 31-17 0-31-14-31-31 0 0 0-248 0-248 0-17 14-31 31-31zM611 131c0 0 4 0 4 0 13 5 8 2 16 9 2 2 2 2 11 11 0 0 226 226 226 226 9 9 9 9 11 11 12 12 12 32 0 44-12 12-32 12-44 0 0 0-248-248-248-248-12-12-12-32 0-44 8-7 13-8 23-9zM516 131c17 0 31 14 31 31 0 247 0 164 0 248 0 17-14 31-31 31-17 0-31-14-31-31 0 0 0-248 0-248 0-17 14-31 31-31zM611 131c0 0 4 0 4 0 13 5 8 2 16 9 2 2 2 2 11 11 0 0 226 226 226 226 9 9 9 9 11 11 12 12 12 32 0 44-12 12-32 12-44 0 0 0-248-248-248-248-12-12-12-32 0-44 8-7 13-8 23-9z","M653 498c0 0 0 146 0 146 0 140-114 254-254 254-140 0-254-114-254-254 0 0 0-146 0-146s127 0 127 0c0 0 0 146 0 146 0 70 57 127 127 127 70 0 127-57 127-127 0 0 0-146 0-146s127 0 127 0z","M765 881c0 0 0-384 0-384s127 0 127 0c0 0 0 384 0 384s-127 0-127 0z","M720 995c-24-48-47-96-71-145-27 26-55 53-82 79 0-118 0-237 0-355 93 71 185 142 278 213-37 7-74 13-111 20 24 48 47 96 71 145-28 14-57 29-85 43 0 0 0 0 0 0z","M657 807c25 51 50 102 75 153 13-7 26-13 38-20-25-51-50-102-75-153 29-5 58-10 86-15-63-48-126-96-188-144 0 80 0 160 0 240 21-20 42-41 64-61 0 0 0 0 0 0z"],c:["rgb(237, 242, 221)","rgb(8, 131, 87)","rgb(8, 131, 87)","rgb(8, 131, 87)","rgb(8, 131, 87)","rgb(8, 131, 87)","rgb(8, 131, 87)","rgb(8, 131, 87)","rgb(236, 243, 221)","rgb(8, 131, 87)"]},cmy:{p:["M302 442c-11-27-17-56-17-86 0-126 103-229 229-229s229 103 229 229c0 31-6 60-17 87-12-2-24-3-37-3-72 0-136 33-178 85-42-52-106-85-178-85-11 0-21 1-32 2z","M478 582c-80-13-146-67-175-140 10-1 21-2 32-2 72 0 136 33 178 85-14 17-26 37-34 58z","M512 813c-42 52-106 85-178 85-126 0-229-103-229-229 0-116 86-211 197-227 30 73 96 127 175 140-11 27-17 56-17 87 0 55 19 105 51 144z","M547 582c-10 1-21 2-32 2-13 0-25-1-37-3 9-21 20-40 34-58 14 18 26 37 35 58 0 0 0 0 0 0z","M478 582c-11 27-17 56-17 87 0 55 19 105 51 144 32-39 51-90 51-144 0-30-6-59-17-86-10 1-21 2-32 2-13 0-25-1-37-3z","M547 582c82-11 150-66 180-140-12-2-24-3-37-3-72 0-136 33-178 85 14 18 26 37 35 58 0 0 0 0 0 0z","M512 813c42 52 106 85 178 85 126 0 229-103 229-229 0-114-83-208-192-226-30 74-98 129-180 140 11 27 17 56 17 86 0 55-19 105-51 144 0 0 0 0 0 0z"],c:["rgb(86, 206, 255)","rgb(20, 248, 0)","rgb(249, 255, 44)","rgb(0, 0, 0)","rgb(252, 0, 0)","rgb(1, 6, 255)","rgb(241, 76, 255)"]},rgb:{p:["M302 442c-11-27-17-56-17-86 0-126 103-229 229-229s229 103 229 229c0 31-6 60-17 87-12-2-24-3-37-3-72 0-136 33-178 85-42-52-106-85-178-85-11 0-21 1-32 2z","M478 582c-80-13-146-67-175-140 10-1 21-2 32-2 72 0 136 33 178 85-14 17-26 37-34 58z","M512 813c-42 52-106 85-178 85-126 0-229-103-229-229 0-116 86-211 197-227 30 73 96 127 175 140-11 27-17 56-17 87 0 55 19 105 51 144z","M547 582c-10 1-21 2-32 2-13 0-25-1-37-3 9-21 20-40 34-58 14 18 26 37 35 58 0 0 0 0 0 0z","M478 582c-11 27-17 56-17 87 0 55 19 105 51 144 32-39 51-90 51-144 0-30-6-59-17-86-10 1-21 2-32 2-13 0-25-1-37-3z","M547 582c82-11 150-66 180-140-12-2-24-3-37-3-72 0-136 33-178 85 14 18 26 37 35 58 0 0 0 0 0 0z","M512 813c42 52 106 85 178 85 126 0 229-103 229-229 0-114-83-208-192-226-30 74-98 129-180 140 11 27 17 56 17 86 0 55-19 105-51 144 0 0 0 0 0 0z"],c:["rgb(248, 14, 0)","rgb(253, 0, 255)","rgb(44, 131, 255)","rgb(255, 255, 255)","rgb(0, 219, 255)","rgb(250, 255, 0)","rgb(0, 204, 3)"]},xinjsColor:{p:["M976 0c4 0 8 2 11 5 4 4 7 7 11 11 0 0 21 21 21 21 3 3 5 7 5 11 0 0 0 928 0 928 0 4-2 8-5 11-4 4-7 7-11 11-5 5-9 9-14 14 0 0-7 7-7 7-3 3-7 5-11 5 0 0-928 0-928 0-4 0-8-2-11-5-4-4-7-7-11-11 0 0-21-21-21-21-3-3-5-7-5-11 0 0 0-928 0-928 0-4 2-8 5-11 4-4 7-7 11-11 5-5 9-9 14-14 0 0 7-7 7-7 3-3 7-5 11-5 0 0 928 0 928 0z","M125 308c8 3 5 1 10 5 0 0 65 65 65 65s58-58 58-58c6-6 6-6 7-7 5-5 8-5 15-5 0 0 3 0 3 0 8 3 5 1 10 5 8 8 8 20 0 28-1 1-1 1-7 7 0 0-58 58-58 58s65 65 65 65c8 8 8 20 0 28-8 8-20 8-28 0 0 0-65-65-65-65s-30 30-30 30c0 0-28 28-28 28-6 6-6 6-7 7-8 8-20 8-28 0-8-8-8-20 0-28 1-1 1-1 7-7 0 0 58-58 58-58s-65-65-65-65c-8-8-8-20 0-28 5-5 8-5 15-5 0 0 3 0 3 0z","M337 307c11 0 20 9 20 20 0 0 0 157 0 157 0 11-9 20-20 20-11 0-20-9-20-20 0 0 0-157 0-157 0-11 9-20 20-20z","M337 307c11 0 20 9 20 20 0 156 0 104 0 157 0 11-9 20-20 20-11 0-20-9-20-20 0 0 0-157 0-157 0-11 9-20 20-20z","M660 464c11 0 20 9 20 20 0 0 0 216 0 216 0 11-9 20-20 20s-20-9-20-20c0 0 0-216 0-216 0-11 9-20 20-20z","M396 308c0 0 3 0 3 0 8 3 5 1 10 5 1 1 1 1 7 7 0 0 143 143 143 143 6 6 6 6 7 7 8 8 8 20 0 28-8 8-20 8-28 0 0 0-157-157-157-157-8-8-8-20 0-28 5-5 8-5 15-5z","M279 523c0 0 3 0 3 0 8 3 5 1 10 5 8 8 8 20 0 28-1 1-2 2-3 3 0 0-38 38-38 38s-1 1-1 1c0 0-21 21-21 21s-2 2-2 2c0 0 65 65 65 65 8 8 8 20 0 28-8 8-20 8-28 0-1-1-1-1-7-7 0 0-58-58-58-58s-26 26-26 26c-3 3-7 7-10 10 0 0-28 28-28 28-8 8-20 8-28 0-8-8-8-20 0-28 0 0 65-65 65-65s-58-58-58-58c-2-2-4-4-6-6 0 0-0-0-0-0-8-8-8-20 0-28 5-5 8-5 15-5 0 0 3 0 3 0 8 3 5 1 10 5 0 0 65 65 65 65 22-22 43-43 65-65 5-5 8-5 15-5z","M337 523c11 0 20 9 20 20 0 0 0 157 0 157 0 11-9 20-20 20-11 0-20-9-20-20 0 0 0-157 0-157 0-11 9-20 20-20z","M553 523c0 0 3 0 3 0 8 3 5 1 10 5 8 8 8 20 0 28-1 1-1 1-7 7-50 50-100 100-150 150-8 8-20 8-28 0-8-8-8-20 0-28 1-1 2-2 3-3 51-52 103-103 154-154 5-5 8-5 15-5z","M337 523c11 0 20 9 20 20 0 0 0 157 0 157 0 11-9 20-20 20-11 0-20-9-20-20 0 0 0-157 0-157 0-11 9-20 20-20z","M553 523c0 0 3 0 3 0 8 3 5 1 10 5 8 8 8 20 0 28-1 1-1 1-7 7-50 50-100 100-150 150-8 8-20 8-28 0-8-8-8-20 0-28 1-1 2-2 3-3 51-52 103-103 154-154 5-5 8-5 15-5z","M689 307c11 0 20 9 20 20 0 0 0 137 0 137 0 5-2 10-6 14 0 0-20 20-20 20-4 4-9 6-14 6 0 0-59 0-59 0-11 0-20-9-20-20 0-11 9-20 20-20 0 0 51 0 51 0s8-8 8-8c0 0 0-129 0-129 0-11 9-20 20-20z","M905 464c11 0 20 9 20 20 0 11-9 20-20 20 0 0-157 0-157 0-11 0-20-9-20-20 0-11 9-20 20-20 0 0 157 0 157 0z","M905 533c11 0 20 9 20 20 0 11-9 20-20 20 0 0-157 0-157 0-11 0-20-9-20-20 0-11 9-20 20-20 0 0 157 0 157 0z","M905 395c11 0 20 9 20 20 0 11-9 20-20 20 0 0-157 0-157 0-11 0-20-9-20-20 0-11 9-20 20-20 0 0 157 0 157 0z","M906 308c0 0 3 0 3 0 8 3 5 1 10 5 8 8 8 20 0 28 0 0-20 20-20 20-4 4-9 6-14 6 0 0-137 0-137 0-11 0-20-9-20-20s9-20 20-20c0 0 129 0 129 0s14-14 14-14c5-5 8-5 15-5z","M905 601c11 0 20 9 20 20 0 0 0 59 0 59 0 5-2 10-6 14 0 0-20 20-20 20-4 4-9 6-14 6 0 0-137 0-137 0-11 0-20-9-20-20 0 0 0-78 0-78 0-11 9-20 20-20 0 0 157 0 157 0zM885 640c0 0-118 0-118 0s0 39 0 39c0 0 109 0 109 0s8-8 8-8c0 0 0-31 0-31z"],c:["rgb(237, 243, 221)","rgb(8, 131, 88)","rgb(8, 131, 88)","rgb(8, 131, 88)","rgb(155, 205, 188)","rgb(8, 131, 88)","rgb(155, 205, 188)","rgb(8, 131, 88)","rgb(8, 131, 88)","rgb(155, 205, 188)","rgb(155, 205, 188)","rgb(8, 131, 88)","rgb(8, 131, 88)","rgb(155, 205, 188)","rgb(8, 131, 88)","rgb(8, 131, 88)","rgb(155, 205, 188)"]},xinColor:{p:["M976 0c4 0 8 2 11 5 4 4 7 7 11 11l21 21c3 3 5 7 5 11v928c0 4-2 8-5 11-4 4-7 7-11 11-5 5-9 9-14 14l-7 7c-3 3-7 5-11 5h-928c-4 0-8-2-11-5-4-4-7-7-11-11l-21-21c-3-3-5-7-5-11v-928c0-4 2-8 5-11 4-4 7-7 11-11 5-5 9-9 14-14l7-7c3-3 7-5 11-5h928z","M589 862c13 13 34 13 48 0l104-104 141-141 17-17 7-7c13-13 13-34-0-48-13-13-34-13-48-0l-269 269c-13 13-13 34 0 48zM600 851c-7-7-7-18-0-25l0-0 269-269c7-7 18-7 25 0 7 7 7 18 0 25l-0 0-11 11-19 19-162 162-53 53-24 24c-7 7-18 7-25-0z","M512 871c19 0 34-15 34-34v-270c0-19-15-34-34-34-19 0-34 15-34 34v270c0 19 15 34 34 34zM512 855c-10 0-17-8-18-17l-0-1v-270c0-10 8-18 18-18 10 0 17 8 18 17l0 1 0 37-0 121-0 111c0 10-8 18-18 18z","M436 862c13-13 13-34 0-48l-112-112 112-112c13-13 13-34 0-48-13-13-34-13-48 0l-112 112-110-110c-13-13-34-13-48 0-13 13-13 34-1 47l1 1 110 110-110 110c-13 13-13 34 0 48 13 13 34 13 48 0l110-110 112 112c13 13 34 13 48 0zM425 851c-7 7-18 7-25 0l-0-0-123-123-121 121c-7 7-18 7-25-0-7-7-7-18-0-25l0-0 121-121-121-121c-7-7-7-18 0-25 7-7 18-7 25-0l0 0 121 121 123-123c7-7 18-7 25 0 7 7 7 18 0 25l-0 0-123 123 123 123c7 7 7 18 0 25l-0 0z","M589 170c13-13 34-13 48-0 190 190 205 205 269 269 13 13 13 34-0 48-13 13-34 13-48 0l-269-269c-13-13-13-34 0-48z","M512 158c19 0 34 15 34 34 0 269 0 179 0 270 0 19-15 34-34 34-19 0-34-15-34-34v-270c0-19 15-34 34-34z","M388 168c13-13 34-13 48 0 13 13 13 34 0 48l-112 112 112 112c13 13 13 34 0 48-13 13-34 13-48 0l-112-112-110 110c-13 13-34 13-48-0-13-13-13-34-1-47l1-1 110-110-110-110c-13-13-13-34 0-48 13-13 34-13 48-0l110 110 112-112z"],c:["rgb(9, 131, 88)","rgb(237, 243, 221)","rgb(237, 243, 221)","rgb(237, 243, 221)","rgb(237, 243, 221)","rgb(237, 243, 221)","rgb(237, 243, 221)"]},sortDescending:"M723 469c-256 0-179 0-435 0-24 0-43 19-43 43s19 43 43 43c256 0 179 0 435 0 24 0 43-19 43-43s-19-43-43-43zM603 725c-256 0 61 0-195 0-24 0-43 19-43 43s19 43 43 43c256 0-61 0 195 0 24 0 43-19 43-43s-19-43-43-43zM856 213c-256 0-432 0-688 0-24 0-43 19-43 43s19 43 43 43c256 0 432 0 688 0 24 0 43-19 43-43s-19-43-43-43z",sortAscending:"M301 555c256 0 179 0 435 0 24 0 43-19 43-43s-19-43-43-43c-256 0-179 0-435 0-24 0-43 19-43 43s19 43 43 43zM421 299c256 0-61 0 195 0 24 0 43-19 43-43s-19-43-43-43c-256 0 61 0-195 0-24 0-43 19-43 43s19 43 43 43zM168 811c256 0 432 0 688 0 24 0 43-19 43-43s-19-43-43-43c-256 0-432 0-688 0-24 0-43 19-43 43s19 43 43 43z",sidebar:"M213 85c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-597c0-35-14-67-38-90s-55-38-90-38zM427 853v-683h384c12 0 22 5 30 13s13 18 13 30v597c0 12-5 22-13 30s-18 13-30 13zM341 171v683h-128c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13z",calendar:"M299 85v43h-85c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-597c0-35-14-67-38-90s-55-38-90-38h-85v-43c0-24-19-43-43-43s-43 19-43 43v43h-256v-43c0-24-19-43-43-43s-43 19-43 43zM853 384h-683v-128c0-12 5-22 13-30s18-13 30-13h85v43c0 24 19 43 43 43s43-19 43-43v-43h256v43c0 24 19 43 43 43s43-19 43-43v-43h85c12 0 22 5 30 13s13 18 13 30zM171 469h683v384c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30z",editDoc:"M469 128h-299c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-299c0-24-19-43-43-43s-43 19-43 43v299c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h299c24 0 43-19 43-43s-19-43-43-43zM759 77l-405 405c-5 5-9 12-11 20l-43 171c-2 6-2 14 0 21 6 23 29 37 52 31l171-43c7-2 14-6 20-11l405-405c26-26 39-60 39-94s-13-68-39-94-60-39-94-39-68 13-94 39zM819 137c9-9 22-14 34-14s24 5 34 14 14 22 14 34-5 24-14 34l-397 397-90 23 23-90z",edit:"M695 98l-576 576c-5 5-9 11-11 19l-64 235c-2 7-2 15 0 22 6 23 30 36 52 30l235-64c7-2 13-6 19-11l576-576c32-32 48-74 48-115s-16-84-48-115-74-48-115-48-84 16-115 48zM755 158c15-15 35-23 55-23s40 8 55 23 23 35 23 55-8 40-23 55l-568 568-152 41 41-152z",web:"M723 469c-9-115-47-228-114-329 67 17 127 53 174 100 60 60 100 140 110 229zM609 884c63-95 104-207 114-329h171c-10 89-50 169-110 229-47 47-107 83-174 100zM301 555c9 115 47 228 114 329-67-17-127-53-174-100-60-60-100-140-110-229zM415 140c-63 95-104 207-114 329h-171c10-89 50-169 110-229 48-47 107-83 174-100zM512 43c0 0 0 0 0 0-130 0-247 53-332 137-85 85-137 202-137 332s53 247 137 332c85 85 202 137 332 137 0 0 0 0 0 0 130-0 247-53 332-137 85-85 137-202 137-332s-53-247-137-332c-85-85-202-137-332-137zM638 555c-11 119-56 229-126 318-74-95-115-206-126-318zM512 151c74 95 115 206 126 318h-251c11-119 56-229 126-318z",info:"M981 512c0-130-53-247-137-332s-202-137-332-137-247 53-332 137-137 202-137 332 53 247 137 332 202 137 332 137 247-53 332-137 137-202 137-332zM896 512c0 106-43 202-112 272s-165 112-272 112-202-43-272-112-112-165-112-272 43-202 112-272 165-112 272-112 202 43 272 112 112 165 112 272zM555 683v-171c0-24-19-43-43-43s-43 19-43 43v171c0 24 19 43 43 43s43-19 43-43zM512 384c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43z",loading:"M469 85v171c0 24 19 43 43 43s43-19 43-43v-171c0-24-19-43-43-43s-43 19-43 43zM469 768v171c0 24 19 43 43 43s43-19 43-43v-171c0-24-19-43-43-43s-43 19-43 43zM180 241l121 121c17 17 44 17 60 0s17-44 0-60l-121-121c-17-17-44-17-60 0s-17 44 0 60zM663 723l121 121c17 17 44 17 60 0s17-44 0-60l-121-121c-17-17-44-17-60 0s-17 44 0 60zM85 555h171c24 0 43-19 43-43s-19-43-43-43h-171c-24 0-43 19-43 43s19 43 43 43zM768 555h171c24 0 43-19 43-43s-19-43-43-43h-171c-24 0-43 19-43 43s19 43 43 43zM241 844l121-121c17-17 17-44 0-60s-44-17-60 0l-121 121c-17 17-17 44 0 60s44 17 60 0zM723 361l121-121c17-17 17-44 0-60s-44-17-60 0l-121 121c-17 17-17 44 0 60s44 17 60 0z",mail:"M128 338l360 252c15 10 34 10 49 0l360-252v430c0 12-5 22-13 30s-18 13-30 13h-683c-12 0-22-5-30-13s-13-18-13-30zM43 255c0 0 0 1 0 1v511c0 35 15 67 38 90s55 38 90 38h683c35 0 67-15 90-38s38-55 38-90v-511c0-0 0-1 0-1-0-35-15-67-38-90-23-23-55-38-90-38h-683c-35 0-67 15-90 38-23 23-37 55-38 90zM891 237l-379 266-379-266c2-4 5-8 8-11 8-8 19-13 30-13h683c12 0 22 5 30 13 3 3 6 7 8 11z",resize:"M175 102l271 271c20 20 20 52 0 72s-52 20-72 0l-271-271v184c0 28-23 51-51 51s-51-23-51-51v-307c0-7 1-14 4-20s6-12 11-17c0-0 0-0 0-0 5-5 10-8 17-11 6-3 13-4 20-4h307c28 0 51 23 51 51s-23 51-51 51h-184zM849 922l-271-271c-20-20-20-52 0-72s52-20 72 0l271 271v-184c0-28 23-51 51-51s51 23 51 51v307c0 28-23 51-51 51h-307c-28 0-51-23-51-51s23-51 51-51h184z",menu:"M128 555h768c24 0 43-19 43-43s-19-43-43-43h-768c-24 0-43 19-43 43s19 43 43 43zM128 299h768c24 0 43-19 43-43s-19-43-43-43h-768c-24 0-43 19-43 43s19 43 43 43zM128 811h768c24 0 43-19 43-43s-19-43-43-43h-768c-24 0-43 19-43 43s19 43 43 43z",message:"M939 640v-427c0-35-14-67-38-90s-55-38-90-38h-597c-35 0-67 14-90 38s-38 55-38 90v683c0 11 4 22 13 30 17 17 44 17 60 0l158-158h494c35 0 67-14 90-38s38-55 38-90zM853 640c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22 5-30 13l-98 98v-580c0-12 5-22 13-30s18-13 30-13h597c12 0 22 5 30 13s13 18 13 30z",blog:{p:["M848 517c0-23 19-42 42-43l1-0c23 0 42 19 43 42l0 1v128c0 35-14 67-37 90l-1 1c-23 23-55 37-89 38l-1 0h-494l-158 158c-17 17-44 17-60 0-8-8-12-19-12-29l-0-1v-683c0-35 14-67 38-90 23-23 55-37 89-38l1-0h299c24 0 43 19 43 43 0 23-19 42-42 43l-1 0h-299c-12 0-22 5-30 12l-0 0c-8 8-12 18-12 29l-0 1v580l98-98c8-8 18-12 29-12l1-0h512c12 0 22-5 30-13 8-8 12-18 12-29l0-1v-128zM797 39l-352 352c-5 5-9 12-11 20l-43 171c-2 6-2 14 0 21 6 23 29 37 52 31l171-43c7-2 14-6 20-11l352-352c26-26 39-60 39-94s-13-68-39-94c-26-26-60-39-94-39s-68 13-94 39zM857 99c9-9 22-14 34-14s24 5 34 14c9 9 14 22 14 34s-5 24-14 34l-344 344-90 23 23-90 344-344z","M292 251h163c24 0 43 19 43 43s-19 43-43 43h-163c-24 0-43-19-43-43s19-43 43-43z","M292 407h67c24 0 43 19 43 43s-19 43-43 43h-67c-24 0-43-19-43-43s19-43 43-43z"]},phone:"M981 722c1-30-10-60-29-83-20-24-48-41-82-46-34-4-72-13-110-28-18-7-38-9-57-7-28 3-56 15-78 36l-31 31c-76-48-143-114-196-196l31-31c14-14 24-31 30-49 9-27 9-57-2-86-12-32-22-70-27-111-4-30-19-57-41-77-23-21-54-33-86-33h-128c-4 0-8 0-12 1-35 3-66 20-87 45s-32 58-29 94c13 131 58 266 137 388 64 103 156 197 269 269 110 72 243 122 388 138 4 0 8 1 12 1 35-0 67-15 90-38s37-55 37-90zM896 722v128c0 12-5 23-12 30s-18 13-30 13c-134-14-254-59-353-124-104-66-186-151-243-243-72-112-113-234-125-351-1-11 3-22 10-31s17-14 29-15l132-0c12-0 22 4 29 11 7 7 12 16 14 26 6 46 17 90 32 129 3 9 3 19 0 28-2 6-6 12-10 17l-54 54c-14 14-16 35-7 51 68 119 164 211 272 272 17 9 38 6 51-7l54-54c7-7 16-11 26-12 6-1 13 0 20 3 44 16 88 27 129 32 10 1 20 7 26 15 6 8 10 18 10 29z",pieChart:"M866 661c-41 98-118 169-209 206s-196 39-294-2-169-118-206-209-39-196 2-294c40-94 113-165 200-202 22-9 31-35 22-56s-35-31-56-22c-106 46-196 132-245 247-50 119-48 248-3 359s133 205 252 256 248 48 359 3 205-133 256-252c9-22-1-47-23-56s-47 1-56 23zM894 469h-339v-339c89 10 169 50 229 110s100 140 110 229zM981 512c0-130-53-247-137-332s-202-137-332-137c-24 0-43 19-43 43v427c0 24 19 43 43 43h427c24 0 43-19 43-43z",search:"M684 677c-1 1-3 2-4 4s-3 3-4 4c-54 52-127 84-207 84-82 0-157-33-211-87s-87-129-87-211 33-157 87-211 129-87 211-87 157 33 211 87 87 129 87 211c0 80-32 153-84 207zM926 866l-157-157c53-66 84-149 84-240 0-106-43-202-112-272s-166-112-272-112-202 43-272 112-112 166-112 272 43 202 112 272 166 112 272 112c91 0 174-31 240-84l157 157c17 17 44 17 60 0s17-44 0-60z",send:"M980 97c2-6 2-13 1-20-1-5-3-10-6-14-3-4-6-8-10-11-5-4-11-6-16-8s-12-1-18-0c-2 0-4 1-5 1l-1 0-852 298c-11 4-20 12-25 23-10 22 0 47 22 56l369 164 164 369c5 10 13 19 25 23 22 8 47-4 54-26l298-852c0-1 1-2 1-3zM460 504l-259-115 575-201zM837 248l-201 575-115-259z",server:"M171 43c-35 0-67 14-90 38s-38 55-38 90v171c0 35 14 67 38 90s55 38 90 38h683c35 0 67-14 90-38s38-55 38-90v-171c0-35-14-67-38-90s-55-38-90-38zM171 128h683c12 0 22 5 30 13s13 18 13 30v171c0 12-5 22-13 30s-18 13-30 13h-683c-12 0-22-5-30-13s-13-18-13-30v-171c0-12 5-22 13-30s18-13 30-13zM171 555c-35 0-67 14-90 38s-38 55-38 90v171c0 35 14 67 38 90s55 38 90 38h683c35 0 67-14 90-38s38-55 38-90v-171c0-35-14-67-38-90s-55-38-90-38zM171 640h683c12 0 22 5 30 13s13 18 13 30v171c0 12-5 22-13 30s-18 13-30 13h-683c-12 0-22-5-30-13s-13-18-13-30v-171c0-12 5-22 13-30s18-13 30-13zM256 299c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43zM256 811c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43z",graphUp:"M725 299h153l-302 302-183-183c-17-17-44-17-60 0l-320 320c-17 17-17 44 0 60s44 17 60 0l290-290 183 183c17 17 44 17 60 0l333-333v153c0 24 19 43 43 43s43-19 43-43v-256c0-6-1-11-3-16s-5-10-9-14c-0-0-0-0-0-0-4-4-9-7-14-9-5-2-11-3-16-3h-256c-24 0-43 19-43 43s19 43 43 43z",copy:"M469 341c-35 0-67 14-90 38s-38 55-38 90v384c0 35 14 67 38 90s55 38 90 38h384c35 0 67-14 90-38s38-55 38-90v-384c0-35-14-67-38-90s-55-38-90-38zM469 427h384c12 0 22 5 30 13s13 18 13 30v384c0 12-5 22-13 30s-18 13-30 13h-384c-12 0-22-5-30-13s-13-18-13-30v-384c0-12 5-22 13-30s18-13 30-13zM213 597h-43c-12 0-22-5-30-13s-13-18-13-30v-384c0-12 5-22 13-30s18-13 30-13h384c12 0 22 5 30 13s13 18 13 30v43c0 24 19 43 43 43s43-19 43-43v-43c0-35-14-67-38-90s-55-38-90-38h-384c-35 0-67 14-90 38s-38 55-38 90v384c0 35 14 67 38 90s55 38 90 38h43c24 0 43-19 43-43s-19-43-43-43z",alignCenter:"M128 128h768v86h-768v-86zM298 298h428v86h-428v-86zM128 554v-84h768v84h-768zM128 896v-86h768v86h-768zM298 640h428v86h-428v-86z",alignLeft:"M128 128h768v86h-768v-86zM128 896v-86h768v86h-768zM128 554v-84h768v84h-768zM640 298v86h-512v-86h512zM640 640v86h-512v-86h512z",alignRight:"M128 128h768v86h-768v-86zM384 384v-86h512v86h-512zM128 554v-84h768v84h-768zM384 726v-86h512v86h-512zM128 896v-86h768v86h-768z",fontBold:"M576 662q28 0 46-19t18-45-18-45-46-19h-150v128h150zM426 278v128h128q26 0 45-19t19-45-19-45-45-19h-128zM666 460q92 42 92 146 0 68-45 115t-113 47h-302v-598h268q72 0 121 50t49 122-70 118z",blockOutdent:"M470 554v-84h426v84h-426zM470 384v-86h426v86h-426zM128 128h768v86h-768v-86zM128 896v-86h768v86h-768zM128 512l170-170v340zM470 726v-86h426v86h-426z",blockIndent:"M470 554v-84h426v84h-426zM470 384v-86h426v86h-426zM128 128h768v86h-768v-86zM470 726v-86h426v86h-426zM128 342l170 170-170 170v-340zM128 896v-86h768v86h-768z",fontItalic:"M426 170h342v128h-120l-144 342h94v128h-342v-128h120l144-342h-94v-128z",listBullet:"M298 214h598v84h-598v-84zM298 554v-84h598v84h-598zM298 810v-84h598v84h-598zM170 704q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zM170 192q26 0 45 18t19 46-19 46-45 18-45-18-19-46 19-46 45-18zM170 448q26 0 45 18t19 46-19 46-45 18-45-18-19-46 19-46 45-18z",listNumber:"M298 554v-84h598v84h-598zM298 810v-84h598v84h-598zM298 214h598v84h-598v-84zM86 470v-44h128v40l-78 88h78v44h-128v-40l76-88h-76zM128 342v-128h-42v-44h84v172h-42zM86 726v-44h128v172h-128v-44h84v-20h-42v-44h42v-20h-84z",fontUnderline:"M214 810h596v86h-596v-86zM512 726q-106 0-181-75t-75-181v-342h106v342q0 62 44 105t106 43 106-43 44-105v-342h106v342q0 106-75 181t-181 75z",airplay:"M213 683h-43c-12 0-22-5-30-13s-13-18-13-30v-427c0-12 5-22 13-30s18-13 30-13h683c12 0 22 5 30 13s13 18 13 30v427c0 12-5 22-13 30s-18 13-30 13h-43c-24 0-43 19-43 43s19 43 43 43h43c35 0 67-14 90-38s38-55 38-90v-427c0-35-14-67-38-90s-55-38-90-38h-683c-35 0-67 14-90 38s-38 55-38 90v427c0 35 14 67 38 90s55 38 90 38h43c24 0 43-19 43-43s-19-43-43-43zM545 613c-1-2-3-4-5-5-18-15-45-13-60 5l-213 256c-6 7-10 17-10 27 0 24 19 43 43 43h427c10 0 19-3 27-10 18-15 21-42 5-60zM512 707l122 147h-244z",bell:"M725 341c0 171 40 278 79 341h-585c39-63 79-170 79-341 0-59 24-112 62-151s92-62 151-62 112 24 151 62 62 92 62 151zM811 341c0-82-33-157-87-211s-129-87-211-87-157 33-211 87-87 129-87 211c0 261-102 343-109 349-19 13-24 39-11 59 8 12 22 19 35 19h768c24 0 43-19 43-43 0-14-7-27-18-35-8-6-110-87-110-349zM549 875c-6 10-15 17-26 20s-22 2-32-4c-7-4-12-9-15-15-12-20-38-28-58-16s-28 38-16 58c11 19 27 35 47 47 31 18 65 21 97 13s60-29 78-59c12-20 5-47-15-58s-47-5-58 15z",bellOff:"M549 875c-6 10-15 17-26 20s-22 2-32-4c-7-4-12-9-15-15-12-20-38-28-58-16s-28 38-16 58c11 19 27 35 47 47 31 18 65 21 97 13s60-29 78-59c12-20 5-47-15-58s-47-5-58 15zM811 340c-0-82-33-156-87-210-54-54-129-88-211-88-62-0-119 19-166 50-19 13-25 40-11 59s40 25 59 11c33-22 73-35 116-36 62 0 115 24 153 63 38 39 62 92 62 150-2 71 7 148 28 225 6 23 30 36 52 30s36-30 30-52c-19-69-27-139-25-201 0-0 0-0 0-1 0-0 0-0 0-0zM298 359l324 324h-403c37-61 76-163 79-324zM13 73l207 207c-5 21-7 42-6 62 0 261-102 343-109 348-19 13-24 39-11 59 8 12 22 19 35 19h580l243 243c17 17 44 17 60 0s17-44 0-60l-939-939c-17-17-44-17-60 0s-17 44 0 60z",bookmark:"M786 931c7 5 15 8 25 8 24 0 43-19 43-43v-683c0-35-14-67-38-90s-55-38-90-38h-427c-35 0-67 14-90 38s-38 55-38 90v683c-0 8 3 17 8 25 14 19 40 24 60 10l274-196zM768 813l-231-165c-15-11-35-10-50 0l-231 165v-600c0-12 5-22 13-30s18-13 30-13h427c12 0 22 5 30 13s13 18 13 30z",camera:"M1024 811v-469c0-35-14-67-38-90s-55-38-90-38h-148l-73-109c-8-12-21-19-35-19h-256c-14 0-27 7-35 19l-73 109h-148c-35 0-67 14-90 38s-38 55-38 90v469c0 35 14 67 38 90s55 38 90 38h768c35 0 67-14 90-38s38-55 38-90zM939 811c0 12-5 22-13 30s-18 13-30 13h-768c-12 0-22-5-30-13s-13-18-13-30v-469c0-12 5-22 13-30s18-13 30-13h171c15 0 28-7 35-19l73-109h210l73 109c8 12 22 19 35 19h171c12 0 22 5 30 13s13 18 13 30zM725 555c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM640 555c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90z",check:"M823 226l-439 439-183-183c-17-17-44-17-60 0s-17 44 0 60l213 213c17 17 44 17 60 0l469-469c17-17 17-44 0-60s-44-17-60 0z",chevronDown:"M226 414l256 256c17 17 44 17 60 0l256-256c17-17 17-44 0-60s-44-17-60 0l-226 226-226-226c-17-17-44-17-60 0s-17 44 0 60z",chevronLeft:"M670 738l-226-226 226-226c17-17 17-44 0-60s-44-17-60 0l-256 256c-17 17-17 44 0 60l256 256c17 17 44 17 60 0s17-44 0-60z",chevronRight:"M414 798l256-256c17-17 17-44 0-60l-256-256c-17-17-44-17-60 0s-17 44 0 60l226 226-226 226c-17 17-17 44 0 60s44 17 60 0z",chevronUp:"M798 610l-256-256c-17-17-44-17-60 0l-256 256c-17 17-17 44 0 60s44 17 60 0l226-226 226 226c17 17 44 17 60 0s17-44 0-60z",code:"M713 798l256-256c17-17 17-44 0-60l-256-256c-17-17-44-17-60 0s-17 44 0 60l226 226-226 226c-17 17-17 44 0 60s44 17 60 0zM311 226l-256 256c-17 17-17 44 0 60l256 256c17 17 44 17 60 0s17-44 0-60l-226-226 226-226c17-17 17-44 0-60s-44-17-60 0z",undo:"M896 853v-299c0-59-24-112-62-151s-92-62-151-62h-409l141-141c17-17 17-44 0-60s-44-17-60 0l-213 213c-4 4-7 9-9 14s-3 11-3 16 1 11 3 16c2 5 5 10 9 14l213 213c17 17 44 17 60 0s17-44 0-60l-141-141h409c35 0 67 14 90 38s38 55 38 90v299c0 24 19 43 43 43s43-19 43-43z",redo:"M213 853v-299c0-35 14-67 38-90s55-38 90-38h409l-141 141c-17 17-17 44 0 60s44 17 60 0l213-213c4-4 7-9 9-14 4-10 4-22 0-33-2-5-5-10-9-14l-213-213c-17-17-44-17-60 0s-17 44 0 60l141 141h-409c-59 0-112 24-151 62s-62 92-62 151v299c0 24 19 43 43 43s43-19 43-43z",crop:"M302 302l381-3c11 0 22 5 30 13s13 18 13 30v384h-384c-12 0-22-5-30-13s-13-18-13-30zM43 304l174-1-3 380c0 36 14 68 38 91s55 38 90 38h384v171c0 24 19 43 43 43s43-19 43-43v-171h171c24 0 43-19 43-43s-19-43-43-43h-171v-384c0-35-14-67-38-90s-55-38-91-38l-380 3 1-174c0-24-19-43-42-43s-43 19-43 42l-2 175-175 2c-24 0-42 19-42 43s19 42 43 42z",database:"M171 213c0 0 0-4 9-12 10-10 29-21 56-31 64-25 163-42 277-42s213 17 277 42c27 11 45 22 56 31 9 8 9 12 9 12 0 0-0 4-9 12-10 10-29 21-56 31-64 25-163 42-277 42s-213-17-277-42c-27-11-45-22-56-31-9-8-9-12-9-12zM853 620v191c-2 4-4 8-9 12-10 10-29 21-56 31-64 25-163 42-276 42s-213-17-276-42c-27-10-45-21-56-31-5-5-8-8-8-10l-0-193c11 5 22 10 33 15 77 30 187 48 307 48s231-18 307-48c12-5 23-10 34-15zM853 321v190c0 0 0 0 0 1-2 4-4 8-9 12-10 10-29 21-56 31-64 25-163 42-276 42s-213-17-276-42c-27-10-45-21-56-31-5-5-8-8-8-10-0-2-0-3-0-5l-0-188c11 5 22 10 34 15 77 30 187 48 308 48s231-18 308-48c12-5 23-10 34-15zM85 213v597c0 2 0 5 0 7 2 28 18 51 37 68 21 19 50 35 82 48 77 30 187 48 307 48s231-18 307-48c32-13 61-28 82-48 18-17 34-40 37-68 0-2 0-5 0-7v-597c0-2-0-5-0-7-2-28-18-51-36-68-21-20-50-35-82-48-77-30-187-48-308-48s-231 18-308 48c-32 13-61 28-82 48-18 17-34 40-36 68-0 2-0 5-0 7z",download:"M853 640v171c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-171c0-24-19-43-43-43s-43 19-43 43v171c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-171c0-24-19-43-43-43s-43 19-43 43zM555 537v-409c0-24-19-43-43-43s-43 19-43 43v409l-141-141c-17-17-44-17-60 0s-17 44 0 60l213 213c4 4 9 7 14 9s11 3 16 3c11 0 22-4 30-13l213-213c17-17 17-44 0-60s-44-17-60 0z",downloadCloud:"M469 512v281l-98-98c-17-17-44-17-60 0s-17 44 0 60l171 171c4 4 9 7 14 9 10 4 22 4 33 0 5-2 10-5 14-9l171-171c17-17 17-44 0-60s-44-17-60 0l-98 98v-281c0-24-19-43-43-43s-43 19-43 43zM915 807c58-41 94-101 105-165s-2-133-43-191c-35-50-85-84-140-99-22-6-46-10-69-10h-22c-31-88-91-158-167-203-85-50-188-68-291-41s-185 92-235 176-68 188-41 291c16 62 46 116 85 159 16 17 43 19 60 3s19-43 3-60c-30-33-53-75-65-123-21-80-7-160 32-226s103-117 183-137 160-7 226 32 117 103 137 183c5 19 22 32 41 32h54c16 0 31 2 47 6 37 10 70 33 93 66 27 39 36 84 29 127s-31 83-70 110c-19 14-24 40-10 59s40 24 59 10z",externalLink:"M725 555v256c0 12-5 22-13 30s-18 13-30 13h-469c-12 0-22-5-30-13s-13-18-13-30v-469c0-12 5-22 13-30s18-13 30-13h256c24 0 43-19 43-43s-19-43-43-43h-256c-35 0-67 14-90 38s-38 55-38 90v469c0 35 14 67 38 90s55 38 90 38h469c35 0 67-14 90-38s38-55 38-90v-256c0-24-19-43-43-43s-43 19-43 43zM457 627l397-397v153c0 24 19 43 43 43s43-19 43-43v-256c0-6-1-11-3-16s-5-10-9-14c-0-0-0-0-0-0-4-4-9-7-14-9-5-2-11-3-16-3h-256c-24 0-43 19-43 43s19 43 43 43h153l-397 397c-17 17-17 44 0 60s44 17 60 0z",eye:"M5 493c-6 12-6 26 0 38 0 0 17 34 48 79 19 28 44 61 75 95 38 42 86 85 142 119 68 42 150 72 243 72s175-30 243-72c56-35 103-78 142-119 31-34 56-67 75-95 31-45 48-79 48-79 6-12 6-26 0-38 0 0-17-34-48-79-19-28-44-61-75-95-38-42-86-85-142-119-68-42-150-72-243-72s-175 30-243 72c-56 35-103 78-142 119-31 34-56 67-75 95-31 45-48 79-48 79zM91 512c7-12 17-29 31-49 17-25 40-55 68-85 34-38 76-75 123-104 58-36 124-59 198-59s141 24 198 59c48 30 89 67 123 104 27 30 50 60 68 85 14 20 24 37 31 49-7 12-17 29-31 49-17 25-40 55-68 85-34 38-76 75-123 104-58 36-124 59-198 59s-141-24-198-59c-48-30-89-67-123-104-27-30-50-60-68-85-14-20-24-37-31-49zM683 512c0-47-19-90-50-121s-74-50-121-50-90 19-121 50-50 74-50 121 19 90 50 121 74 50 121 50 90-19 121-50 50-74 50-121zM597 512c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60 10-45 25-60 37-25 60-25 45 10 60 25 25 37 25 60z",eyeOff:"M432 222c28-6 55-9 79-9 75 0 141 24 199 59 48 30 89 67 123 104 27 30 50 60 68 85 14 20 24 37 31 49-23 41-49 78-76 108-15 18-13 45 5 60s45 13 60-5c35-41 69-90 97-144 6-12 7-26 1-39 0 0-17-34-48-79-19-28-44-61-75-95-38-42-86-85-142-119-68-42-150-72-243-72-31-0-66 3-100 11-23 5-37 28-32 51s28 37 51 32zM428 488l108 108c-8 3-16 4-24 4-22 1-44-7-61-23s-26-38-27-59c-0-10 1-20 4-30zM255 316l109 109c-19 29-27 63-26 97 2 44 20 87 54 119s79 47 122 46c30-1 59-10 85-26l99 99c-59 34-124 51-187 52-74 0-140-24-198-59-48-30-89-67-123-104-27-30-50-60-68-85-14-20-24-37-31-49 45-78 101-144 164-197zM13 73l182 182c-74 63-139 143-190 237-6 12-7 26-1 39 0 0 17 34 48 79 19 28 44 61 75 95 38 42 86 85 142 119 68 42 150 72 244 72 85-1 171-26 248-75l191 191c17 17 44 17 60 0s17-44 0-60l-379-379c-0-0-0-0-0-0l-180-180c-0-0-1-1-1-1l-379-379c-17-17-44-17-60 0s-17 44 0 60z",fastForward:"M597 723v-423l272 211zM128 723v-423l272 211zM112 844l384-299c11-8 16-21 16-33v298c0 24 19 43 43 43 10 0 19-3 26-9l384-299c19-14 22-41 7-60-2-3-5-6-7-7l-384-299c-19-14-45-11-60 7-6 8-9 17-9 26v298c-0-9-3-18-9-26-2-3-5-6-7-7l-384-299c-19-14-45-11-60 7-6 8-9 17-9 26v597c0 24 19 43 43 43 10 0 19-3 26-9z",file:"M750 341h-153v-153zM883 354l-299-299c-4-4-9-7-14-9s-11-3-16-3h-299c-35 0-67 14-90 38s-38 55-38 90v683c0 35 14 67 38 90s55 38 90 38h512c35 0 67-14 90-38s38-55 38-90v-469c0-12-5-22-13-30zM512 128v256c0 24 19 43 43 43h256v427c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22-5-30-13s-13-18-13-30v-683c0-12 5-22 13-30s18-13 30-13z",fileMinus:"M750 299h-110v-110zM883 311l-256-256c-4-4-9-7-14-9s-11-3-16-3h-341c-35 0-67 14-90 38s-38 55-38 90v683c0 35 14 67 38 90s55 38 90 38h512c35 0 67-14 90-38s38-55 38-90v-512c0-12-5-22-13-30zM555 128v213c0 24 19 43 43 43h213v469c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22-5-30-13s-13-18-13-30v-683c0-12 5-22 13-30s18-13 30-13zM384 683h256c24 0 43-19 43-43s-19-43-43-43h-256c-24 0-43 19-43 43s19 43 43 43z",filePlus:"M750 299h-110v-110zM883 311l-256-256c-4-4-9-7-14-9s-11-3-16-3h-341c-35 0-67 14-90 38s-38 55-38 90v683c0 35 14 67 38 90s55 38 90 38h512c35 0 67-14 90-38s38-55 38-90v-512c0-12-5-22-13-30zM555 128v213c0 24 19 43 43 43h213v469c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22-5-30-13s-13-18-13-30v-683c0-12 5-22 13-30s18-13 30-13zM384 683h85v85c0 24 19 43 43 43s43-19 43-43v-85h85c24 0 43-19 43-43s-19-43-43-43h-85v-85c0-24-19-43-43-43s-43 19-43 43v85h-85c-24 0-43 19-43 43s19 43 43 43z",fileText:"M750 299h-110v-110zM883 311l-256-256c-4-4-9-7-14-9s-11-3-16-3h-341c-35 0-67 14-90 38s-38 55-38 90v683c0 35 14 67 38 90s55 38 90 38h512c35 0 67-14 90-38s38-55 38-90v-512c0-12-5-22-13-30zM555 128v213c0 24 19 43 43 43h213v469c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22-5-30-13s-13-18-13-30v-683c0-12 5-22 13-30s18-13 30-13zM683 512h-341c-24 0-43 19-43 43s19 43 43 43h341c24 0 43-19 43-43s-19-43-43-43zM683 683h-341c-24 0-43 19-43 43s19 43 43 43h341c24 0 43-19 43-43s-19-43-43-43zM427 341h-85c-24 0-43 19-43 43s19 43 43 43h85c24 0 43-19 43-43s-19-43-43-43z",filter:"M847 171l-282 333c-6 7-10 17-10 28v295l-85-43v-253c0-10-3-19-10-28l-282-333zM939 85h-853c-24 0-43 19-43 43 0 11 4 20 10 28l331 392v263c0 17 9 31 24 38l171 85c21 11 47 2 57-19 3-6 5-13 4-19v-349l331-392c15-18 13-45-5-60-8-7-18-10-28-10z",flag:"M213 572v-421c19-9 58-23 128-23 55 0 101 18 155 40 53 21 113 46 186 46 55 0 97-7 128-17v421c-19 9-58 23-128 23-55 0-101-18-155-40-53-21-113-46-186-46-55 0-97 7-128 17zM213 939v-276c19-9 58-23 128-23 55 0 101 18 155 40 53 21 113 46 186 46 139 0 192-47 201-55 8-8 13-19 13-30v-512c0-24-19-43-43-43-11 0-22 4-29 12-4 3-42 31-141 31-55 0-101-18-155-40-53-21-113-46-186-46-139 0-192 47-201 55-8 8-13 19-13 30v811c0 24 19 43 43 43s43-19 43-43z",folder:"M981 811v-469c0-35-14-67-38-90s-55-38-90-38h-361l-73-109c-8-12-21-19-35-19h-213c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h683c35 0 67-14 90-38s38-55 38-90zM896 811c0 12-5 22-13 30s-18 13-30 13h-683c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h191l73 109c8 12 22 19 35 19h384c12 0 22 5 30 13s13 18 13 30z",folderMinus:"M981 811v-469c0-35-14-67-38-90s-55-38-90-38h-361l-73-109c-8-12-21-19-35-19h-213c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h683c35 0 67-14 90-38s38-55 38-90zM896 811c0 12-5 22-13 30s-18 13-30 13h-683c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h191l73 109c8 12 22 19 35 19h384c12 0 22 5 30 13s13 18 13 30zM384 640h256c24 0 43-19 43-43s-19-43-43-43h-256c-24 0-43 19-43 43s19 43 43 43z",folderPlus:"M981 811v-469c0-35-14-67-38-90s-55-38-90-38h-361l-73-109c-8-12-21-19-35-19h-213c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h683c35 0 67-14 90-38s38-55 38-90zM896 811c0 12-5 22-13 30s-18 13-30 13h-683c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h191l73 109c8 12 22 19 35 19h384c12 0 22 5 30 13s13 18 13 30zM384 640h85v85c0 24 19 43 43 43s43-19 43-43v-85h85c24 0 43-19 43-43s-19-43-43-43h-85v-85c0-24-19-43-43-43s-43 19-43 43v85h-85c-24 0-43 19-43 43s19 43 43 43z",help:"M981 512c0-130-53-247-137-332s-202-137-332-137-247 53-332 137-137 202-137 332 53 247 137 332 202 137 332 137 247-53 332-137 137-202 137-332zM896 512c0 106-43 202-112 272s-165 112-272 112-202-43-272-112-112-165-112-272 43-202 112-272 165-112 272-112 202 43 272 112 112 165 112 272zM428 398c8-22 24-39 44-49s43-11 65-4c20 7 35 20 45 37 8 13 12 28 12 44 0 7-2 13-5 20-3 7-9 14-16 21-30 30-78 47-78 47-22 7-34 32-27 54s32 34 54 27c0 0 66-22 111-67 12-12 23-26 32-43 9-17 14-37 14-58-0-31-9-61-24-87-20-33-51-60-90-74-44-16-91-12-130 7s-72 53-87 97c-8 22 4 47 26 54s47-4 54-26zM512 768c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43z",home:"M102 350c-10 8-16 20-16 34v469c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-469c-0-13-6-25-16-34l-384-299c-15-12-37-12-52 0zM683 896v-384c0-24-19-43-43-43h-256c-24 0-43 19-43 43v384h-128c-12 0-22-5-30-13s-13-18-13-30v-448l341-265 341 265v448c0 12-5 22-13 30s-18 13-30 13zM427 896v-341h171v341z",image:"M213 85c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-597c0-35-14-67-38-90s-55-38-90-38zM469 363c0-29-12-56-31-75s-46-31-75-31-56 12-75 31-31 46-31 75 12 56 31 75 46 31 75 31 56-12 75-31 31-46 31-75zM384 363c0 6-2 11-6 15s-9 6-15 6-11-2-15-6-6-9-6-15 2-11 6-15 9-6 15-6 11 2 15 6 6 9 6 15zM316 853l366-366 171 171v153c0 12-5 22-13 30s-18 13-30 13zM853 537l-141-141c-17-17-44-17-60 0l-454 454c-6-2-11-6-15-10-8-8-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h597c12 0 22 5 30 13s13 18 13 30z",layers:"M512 133l331 166-331 166-331-166zM493 47l-427 213c-21 11-30 36-19 57 4 9 11 15 19 19l427 213c12 6 26 6 38 0l427-213c21-11 30-36 19-57-4-9-11-15-19-19l-427-213c-12-6-26-6-38 0zM66 763l427 213c12 6 26 6 38 0l427-213c21-11 30-36 19-57s-36-30-57-19l-408 204-408-204c-21-11-47-2-57 19s-2 47 19 57zM66 550l427 213c12 6 26 6 38 0l427-213c21-11 30-36 19-57s-36-30-57-19l-408 204-408-204c-21-11-47-2-57 19s-2 47 19 57z",link:"M392 580c42 57 104 91 168 100s133-6 190-48c10-8 20-16 28-24l128-128c50-51 73-117 72-183s-27-131-78-180c-50-48-115-72-179-72-64 0-127 24-177 72l-74 73c-17 17-17 44-0 60s44 17 60 0l73-72c33-32 75-48 118-48 43-0 86 16 119 48 34 33 51 76 52 120s-15 88-47 121l-128 128c-5 5-11 11-18 16-38 28-83 38-127 32s-84-29-112-67c-14-19-41-23-60-9s-23 41-9 60zM632 444c-42-57-104-91-168-100s-133 6-190 48c-10 8-20 16-28 24l-128 128c-50 51-73 117-72 183s27 131 78 180c50 48 115 72 179 72 64-0 127-24 177-72l74-74c17-17 17-44 0-60s-44-17-60 0l-72 72c-33 32-75 48-118 48-43 0-86-16-119-48-34-33-51-76-52-120s15-88 47-121l128-128c5-5 11-11 18-16 38-28 83-38 127-32s84 29 112 67c14 19 41 23 60 9s23-41 9-60z",lock:"M213 512h597c12 0 22 5 30 13s13 18 13 30v299c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-299c0-12 5-22 13-30s18-13 30-13zM768 427v-128c0-71-29-135-75-181s-110-75-181-75-135 29-181 75-75 110-75 181v128h-43c-35 0-67 14-90 38s-38 55-38 90v299c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-299c0-35-14-67-38-90s-55-38-90-38zM341 427v-128c0-47 19-90 50-121s74-50 121-50 90 19 121 50 50 74 50 121v128z",logIn:"M640 171h171c12 0 22 5 30 13s13 18 13 30v597c0 12-5 22-13 30s-18 13-30 13h-171c-24 0-43 19-43 43s19 43 43 43h171c35 0 67-14 90-38s38-55 38-90v-597c0-35-14-67-38-90s-55-38-90-38h-171c-24 0-43 19-43 43s19 43 43 43zM537 469h-409c-24 0-43 19-43 43s19 43 43 43h409l-141 141c-17 17-17 44 0 60s44 17 60 0l213-213c4-4 7-9 9-14s3-11 3-16c0-6-1-11-3-16-2-5-5-10-9-14l-213-213c-17-17-44-17-60 0s-17 44 0 60z",logOut:"M384 853h-171c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h171c24 0 43-19 43-43s-19-43-43-43h-171c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h171c24 0 43-19 43-43s-19-43-43-43zM793 469h-409c-24 0-43 19-43 43s19 43 43 43h409l-141 141c-17 17-17 44 0 60s44 17 60 0l213-213c4-4 7-9 9-14 6-15 3-34-9-47l-213-213c-17-17-44-17-60 0s-17 44 0 60z",map:"M299 159v584l-213 122v-584zM725 865v-584l213-122v584zM663 976c3 2 7 3 11 4 1 0 3 1 4 1s3 0 4 0c-0 0-0 0-0 0s0 0 0 0c7 0 15-2 21-6l1-0 298-170c14-8 21-22 21-37v-683c0-24-19-43-43-43-8 0-15 2-21 6l-279 159-320-160c-4-2-7-3-11-4-1-0-3-1-4-1s-3-0-4-0c0 0 0 0 0 0s0 0-0 0c-7 0-15 2-21 6l-1 0-298 170c-14 8-21 22-22 37v683c0 24 19 43 43 43 8 0 15-2 21-6l279-159zM640 282v587l-256-128v-587z",mapPin:"M939 427c0-118-48-225-125-302s-184-125-302-125-225 48-302 125-125 184-125 302c0 24 2 48 6 72 12 66 38 128 72 184 117 196 325 334 325 334 14 9 33 10 47 0 0 0 208-138 325-334 33-56 60-118 72-184 4-23 6-47 6-72zM853 427c0 19-2 38-5 57-9 53-31 106-61 156-82 137-215 245-272 288-60-39-196-148-279-288-30-50-52-102-61-156-3-19-5-38-5-57 0-94 38-180 100-241s147-100 241-100 180 38 241 100 100 147 100 241zM683 427c0-47-19-90-50-121s-74-50-121-50-90 19-121 50-50 74-50 121 19 90 50 121 74 50 121 50 90-19 121-50 50-74 50-121zM597 427c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60 10-45 25-60 37-25 60-25 45 10 60 25 25 37 25 60z",maximize:"M341 85h-128c-35 0-67 14-90 38s-38 55-38 90v128c0 24 19 43 43 43s43-19 43-43v-128c0-12 5-22 13-30s18-13 30-13h128c24 0 43-19 43-43s-19-43-43-43zM939 341v-128c0-35-14-67-38-90s-55-38-90-38h-128c-24 0-43 19-43 43s19 43 43 43h128c12 0 22 5 30 13s13 18 13 30v128c0 24 19 43 43 43s43-19 43-43zM683 939h128c35 0 67-14 90-38s38-55 38-90v-128c0-24-19-43-43-43s-43 19-43 43v128c0 12-5 22-13 30s-18 13-30 13h-128c-24 0-43 19-43 43s19 43 43 43zM85 683v128c0 35 14 67 38 90s55 38 90 38h128c24 0 43-19 43-43s-19-43-43-43h-128c-12 0-22-5-30-13s-13-18-13-30v-128c0-24-19-43-43-43s-43 19-43 43z",messageCircle:"M939 491v-21c0-1-0-2-0-2-6-100-47-190-113-258-68-71-163-117-269-123-1-0-2-0-2-0h-21c-60-1-123 13-182 43-52 26-98 63-134 108-56 70-90 158-90 254-1 54 11 111 35 165l-76 227c-3 8-3 18 0 27 7 22 32 34 54 27l227-76c49 22 106 35 165 35 59-0 116-13 168-37 82-37 151-101 194-187 27-53 43-116 43-182zM853 491c0 52-12 101-34 142-34 68-89 119-153 148-41 19-87 29-133 29-52 0-101-12-142-34-11-6-23-6-33-3l-162 54 54-162c4-11 3-23-2-33-24-47-34-96-34-142 0-76 26-146 71-201 29-35 65-65 106-86 47-24 96-34 142-34h19c84 5 158 41 212 97 51 53 84 124 89 203z",mic:"M512 85c24 0 45 10 60 25s25 37 25 60v341c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60v-341c0-24 10-45 25-60s37-25 60-25zM512 0c-47 0-90 19-121 50s-50 74-50 121v341c0 47 19 90 50 121s74 50 121 50 90-19 121-50 50-74 50-121v-341c0-47-19-90-50-121s-74-50-121-50zM341 1024h341c24 0 43-19 43-43s-19-43-43-43h-128v-88c77-10 146-45 199-97 62-62 100-147 100-241v-85c0-24-19-43-43-43s-43 19-43 43v85c0 71-29 135-75 181s-110 75-181 75-135-29-181-75-75-110-75-181v-85c0-24-19-43-43-43s-43 19-43 43v85c0 94 38 180 100 241 52 52 121 88 199 97v88h-128c-24 0-43 19-43 43s19 43 43 43z",micOff:"M534 594c-7 2-14 3-22 3-24-0-45-10-60-25-15-15-25-37-25-60v-25zM683 399v-228c0-47-19-90-50-121s-74-50-121-50c-43-0-83 16-113 43-27 24-47 57-54 94-5 23 10 46 33 50s46-10 50-33c4-19 14-35 27-47 15-13 34-21 56-21 24 0 45 10 61 25 15 16 25 37 25 60v228c0 24 19 43 43 43s43-19 43-43zM768 427v85c0 16-1 32-4 45-4 23 11 45 34 50s45-11 50-34c3-19 5-39 5-60v-85c0-24-19-43-43-43s-43 19-43 43zM341 1024h341c24 0 43-19 43-43s-19-43-43-43h-128v-86c62-8 119-31 168-69l229 229c17 17 44 17 60 0s17-44 0-60l-249-249c-2-3-4-7-7-9-3-3-6-5-9-7l-674-674c-17-17-44-17-60 0s-17 44 0 60l329 329v110c0 47 19 90 50 121s74 50 121 50c32-0 61-9 86-24l63 63c-41 30-89 46-137 48-4-1-8-2-13-2-4 0-9 1-13 2-60-3-120-27-167-73-49-48-75-111-77-175-0-5-0-10-0-10v-86c0-24-19-43-43-43s-43 19-43 43v85c0 6 0 13 0 13 3 85 37 169 102 234 55 54 125 86 196 95v86h-128c-24 0-43 19-43 43s19 43 43 43z",minimize:"M299 128v128c0 12-5 22-13 30s-18 13-30 13h-128c-24 0-43 19-43 43s19 43 43 43h128c35 0 67-14 90-38s38-55 38-90v-128c0-24-19-43-43-43s-43 19-43 43zM896 299h-128c-12 0-22-5-30-13s-13-18-13-30v-128c0-24-19-43-43-43s-43 19-43 43v128c0 35 14 67 38 90s55 38 90 38h128c24 0 43-19 43-43s-19-43-43-43zM725 896v-128c0-12 5-22 13-30s18-13 30-13h128c24 0 43-19 43-43s-19-43-43-43h-128c-35 0-67 14-90 38s-38 55-38 90v128c0 24 19 43 43 43s43-19 43-43zM128 725h128c12 0 22 5 30 13s13 18 13 30v128c0 24 19 43 43 43s43-19 43-43v-128c0-35-14-67-38-90s-55-38-90-38h-128c-24 0-43 19-43 43s19 43 43 43z",minus:"M213 555h597c24 0 43-19 43-43s-19-43-43-43h-597c-24 0-43 19-43 43s19 43 43 43z",moon:"M938 550c1-10-2-20-8-29-14-19-41-23-60-9-41 30-88 46-136 50-58 4-118-12-169-49-57-42-91-103-101-168s5-133 47-190c6-8 9-19 8-29-2-23-23-41-47-38-96 9-184 50-252 113-74 69-124 164-134 272-11 117 27 228 97 312s172 141 289 152 228-27 312-97 141-172 152-289zM835 626c-21 58-57 109-103 147-67 56-156 86-250 77s-175-55-231-122-86-156-77-250c8-87 48-163 107-218 33-31 73-55 117-71-19 54-25 111-16 166 13 86 59 168 135 224 67 50 147 71 225 66 32-2 64-9 94-20z",more:"M597 512c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60zM896 512c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60zM299 512c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60z",moreVertical:"M597 512c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60zM597 213c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60zM597 811c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60z",mousePointer:"M207 207l524 218-208 71c-12 4-22 14-27 27l-71 208zM555 615l225 225c17 17 44 17 60 0s17-44 0-60l-225-225 250-85c22-8 34-32 27-54-4-12-13-21-24-26l-724-302c-22-9-47 1-56 23-5 11-4 23 0 33l302 724c9 22 34 32 56 23 12-5 20-14 24-26z",move:"M469 188v281h-281l55-55c17-17 17-44 0-60s-44-17-60 0l-128 128c-8 8-13 18-13 30 0 6 1 11 3 16s5 10 9 14l128 128c17 17 44 17 60 0s17-44 0-60l-55-55h281v281l-55-55c-17-17-44-17-60 0s-17 44 0 60l128 128c4 4 9 7 14 9s11 3 16 3c6 0 11-1 16-3 5-2 10-5 14-9l128-128c17-17 17-44 0-60s-44-17-60 0l-55 55v-281h281l-55 55c-17 17-17 44 0 60s44 17 60 0l128-128c4-4 7-9 9-14 6-15 3-34-9-47l-128-128c-17-17-44-17-60 0s-17 44 0 60l55 55h-281v-281l55 55c17 17 44 17 60 0s17-44 0-60l-128-128c-4-4-9-7-14-9-10-4-22-4-33 0-5 2-10 5-14 9l-128 128c-17 17-17 44 0 60s44 17 60 0z",music:"M341 768c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60 10-45 25-60 37-25 60-25 45 10 60 25 25 37 25 60zM939 683v-555c0-2-0-5-1-7-4-23-26-39-49-35l-512 85c-20 3-36 21-36 42v407c-25-15-54-23-85-23-47 0-90 19-121 50s-50 74-50 121 19 90 50 121 74 50 121 50 90-19 121-50 50-74 50-121v-519l427-71v356c-25-15-54-23-85-23-47 0-90 19-121 50s-50 74-50 121 19 90 50 121 74 50 121 50 90-19 121-50 50-74 50-121zM853 683c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60 10-45 25-60 37-25 60-25 45 10 60 25 25 37 25 60z",paperclip:"M885 441l-392 392c-42 42-96 63-151 63s-109-21-151-63-63-96-63-151 21-109 63-151l392-392c25-25 58-38 91-38s66 13 91 38 38 58 38 91-13 66-38 91l-393 392c-8 8-19 13-30 13s-22-4-30-13-13-19-13-30 4-22 13-30l362-362c17-17 17-44 0-60s-44-17-60-0l-362 362c-25 25-38 58-38 91s13 66 38 91 58 38 91 38 66-13 91-38l393-392c42-42 63-96 63-151s-21-109-63-151-96-63-151-63-109 21-151 63l-392 392c-58 58-88 135-88 211s29 153 88 211 135 88 211 88 153-29 211-88l392-392c17-17 17-44 0-60s-44-17-60 0z",pause:"M256 128c-24 0-43 19-43 43v683c0 24 19 43 43 43h171c24 0 43-19 43-43v-683c0-24-19-43-43-43zM299 213h85v597h-85zM597 128c-24 0-43 19-43 43v683c0 24 19 43 43 43h171c24 0 43-19 43-43v-683c0-24-19-43-43-43zM640 213h85v597h-85z",play:"M236 92c-7-4-15-7-23-7-24 0-43 19-43 43v768c-0 8 2 16 7 23 13 20 39 26 59 13l597-384c5-3 9-7 13-13 13-20 7-46-13-59zM256 206l476 306-476 306z",plus:"M213 555h256v256c0 24 19 43 43 43s43-19 43-43v-256h256c24 0 43-19 43-43s-19-43-43-43h-256v-256c0-24-19-43-43-43s-43 19-43 43v256h-256c-24 0-43 19-43 43s19 43 43 43z",refresh:"M190 398c31-89 96-157 175-194s172-45 261-14c51 18 94 46 127 80l121 113h-148c-24 0-43 19-43 43s19 43 43 43h256c0 0 0 0 1 0 6-0 11-1 16-3 5-2 10-5 14-10 1-1 1-1 2-2 3-4 6-8 7-12s3-9 3-14c0-1 0-1 0-2v-256c0-24-19-43-43-43s-43 19-43 43v157l-125-117c-42-43-97-79-160-101-111-39-228-30-326 17s-179 132-218 243c-8 22 4 47 26 54s47-4 54-26zM85 696l126 118c82 82 192 124 301 124s218-42 302-125c47-47 81-103 101-160 8-22-4-47-26-54s-47 4-54 26c-15 45-42 89-80 127-67 67-154 100-241 100s-175-33-242-101l-119-112h148c24 0 43-19 43-43s-19-43-43-43h-256c-0 0-0 0-1 0-6 0-11 1-16 3-5 2-10 5-14 10-1 1-1 1-2 2-3 4-6 8-7 12s-3 9-3 14c-0 1-0 1-0 2v256c0 24 19 43 43 43s43-19 43-43z",rewind:"M427 723l-272-211 272-211zM912 844c7 6 16 9 26 9 24 0 43-19 43-43v-597c0-9-3-18-9-26-14-19-41-22-60-7l-384 299c-3 2-5 5-7 7-6 8-9 17-9 26v-298c0-9-3-18-9-26-14-19-41-22-60-7l-384 299c-3 2-5 5-7 7-14 19-11 45 7 60l384 299c7 6 16 9 26 9 24 0 43-19 43-43v-298c0 13 6 25 16 33zM896 723l-272-211 272-211z",settings:"M683 512c0-47-19-90-50-121s-74-50-121-50-90 19-121 50-50 74-50 121 19 90 50 121 74 50 121 50 90-19 121-50 50-74 50-121zM597 512c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60 10-45 25-60 37-25 60-25 45 10 60 25 25 37 25 60zM867 657c2-4 5-8 8-11 5-4 11-6 17-6h4c35 0 67-14 90-38s38-55 38-90-14-67-38-90-55-38-90-38h-7c-5-0-9-1-13-3-5-3-10-7-12-13-0-1-0-3-0-4-1-2-2-5-2-7 1-14 3-19 7-23l3-3c25-25 37-58 37-91s-13-66-38-91c-25-25-58-37-91-37s-66 13-90 38l-2 2c-4 3-8 6-12 7-6 2-12 1-19-1-4-2-8-5-11-8-4-5-6-11-6-17v-4c0-35-14-67-38-90s-55-38-90-38-67 14-90 38-38 55-38 90v7c-0 5-1 9-3 13-3 5-7 10-13 12-1 0-3 0-4 0-2 1-5 2-7 2-14-1-19-3-23-7l-3-3c-25-25-58-37-91-37s-65 13-91 38c-25 25-37 58-37 91s13 66 38 90l2 2c3 4 6 8 7 12 2 6 1 12-1 19-0 1-1 1-1 2-2 5-5 9-8 12-5 4-11 7-16 7h-4c-35 0-67 14-90 38s-38 55-38 91 14 67 38 90 55 38 90 38h7c5 0 9 1 13 3 5 3 10 7 13 14 1 2 2 5 2 7-1 14-3 19-7 23l-3 3c-25 25-37 58-37 91s13 66 38 91c25 25 58 37 91 37s66-13 90-38l2-2c4-3 8-6 12-7 6-2 12-1 19 1 1 0 1 1 2 1 5 2 9 5 12 8 4 5 7 11 7 16v4c0 35 14 67 38 90s55 38 90 38 67-14 90-38 38-55 38-90v-7c0-5 1-9 3-13 3-5 7-10 14-13 2-1 5-2 7-2 14 1 19 3 23 7l3 3c25 25 58 37 91 37s66-13 91-38c25-25 37-58 37-91s-13-66-38-90l-2-2c-3-4-6-8-7-12-2-6-1-12 1-19zM785 397c-1-9-2-13-3-16v3c0 2 0 4 0 5 1 3 2 5 3 8 0 4 0 4 0 4 11 25 29 44 52 56 16 8 33 13 52 13h8c12 0 22 5 30 13s13 18 13 30-5 22-13 30-18 13-30 13h-4c-27 0-52 10-71 26-14 11-25 26-32 42-11 25-12 52-5 76 5 18 15 35 28 48l3 3c8 8 13 19 13 30s-4 22-12 30c-8 8-19 13-30 13s-22-4-30-12l-3-3c-20-19-44-30-70-32-19-2-38 1-55 9-25 11-44 29-55 51-8 16-13 33-13 52v8c0 12-5 22-13 30s-18 12-30 12-22-5-30-13-13-18-13-30v-4c-1-28-11-53-27-72-12-14-28-25-45-32-25-11-51-12-75-5-18 5-35 15-48 28l-3 3c-8 8-19 13-30 13s-22-4-30-12c-8-8-13-19-13-30s4-22 12-30l3-3c19-20 30-44 32-70 2-19-1-38-9-55-11-25-29-44-51-55-16-8-33-13-52-13l-8 0c-12 0-22-5-30-13s-13-18-13-30 5-22 13-30 18-13 30-13h4c28-1 53-11 72-27 14-12 25-28 32-45 11-25 12-51 5-75-5-18-15-35-28-48l-3-3c-8-8-13-19-13-30s4-22 12-30c8-8 19-13 30-13s22 4 30 12l3 3c20 19 44 30 70 32 16 1 32-1 47-6 4-1 8-2 11-3-1 0-3 0-4 0-9 1-13 2-16 3h3c2 0 4-0 5-0 3-1 5-2 8-3 4-0 4-0 4-0 25-11 44-29 56-52 8-16 13-33 13-52v-8c0-12 5-22 13-30s18-13 30-13 22 5 30 13 13 18 13 30v4c0 27 10 52 26 71 11 14 26 25 42 32 25 11 51 12 76 5 18-5 35-15 48-28l3-3c8-8 19-13 30-13s22 4 30 12c8 8 13 19 13 30s-4 22-12 30l-3 3c-19 20-30 44-32 70-1 16 1 32 6 47 1 4 2 8 3 11-0-1-0-3-0-4z",share:"M128 512v341c0 35 14 67 38 90s55 38 90 38h512c35 0 67-14 90-38s38-55 38-90v-341c0-24-19-43-43-43s-43 19-43 43v341c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22-5-30-13s-13-18-13-30v-341c0-24-19-43-43-43s-43 19-43 43zM469 188v452c0 24 19 43 43 43s43-19 43-43v-452l98 98c17 17 44 17 60 0s17-44 0-60l-171-171c-4-4-9-7-14-9-10-4-22-4-33 0-5 2-10 5-14 9l-171 171c-17 17-17 44 0 60s44 17 60 0z",start:"M784 887c7 6 17 9 27 9 24 0 43-19 43-43v-683c0-9-3-19-9-27-15-18-42-21-60-7l-427 341c-2 2-5 4-7 7-15 18-12 45 7 60zM768 765l-316-253 316-253zM256 811v-597c0-24-19-43-43-43s-43 19-43 43v597c0 24 19 43 43 43s43-19 43-43z",end:"M240 137c-7-6-17-9-27-9-24 0-43 19-43 43v683c-0 9 3 19 9 27 15 18 42 21 60 7l427-341c2-2 5-4 7-7 15-18 12-45-7-60zM256 259l316 253-316 253zM768 213v597c0 24 19 43 43 43s43-19 43-43v-597c0-24-19-43-43-43s-43 19-43 43z",forbidden:"M981 512c0-130-53-247-137-332s-202-137-332-137-247 53-332 137-137 202-137 332 53 247 137 332 202 137 332 137 247-53 332-137 137-202 137-332zM812 752l-540-540c66-53 149-84 240-84 106 0 202 43 272 112s112 165 112 272c0 91-31 174-84 240zM212 272l540 540c-66 53-149 84-240 84-106 0-202-43-272-112s-112-165-112-272c0-91 31-174 84-240z",square:"M213 85c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-597c0-35-14-67-38-90s-55-38-90-38zM213 171h597c12 0 22 5 30 13s13 18 13 30v597c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13z",star:"M550 66c-4-8-11-15-19-19-21-10-47-2-57 19l-122 247-273 40c-9 1-18 5-24 12-16 17-16 44 1 60l197 192-47 271c-2 9-0 18 4 27 11 21 37 29 58 18l244-128 244 128c8 4 17 6 27 4 23-4 39-26 35-49l-47-271 197-192c6-6 11-15 12-24 3-23-13-45-36-48l-273-40-122-247z",sun:"M768 512c0-71-29-135-75-181s-110-75-181-75-135 29-181 75-75 110-75 181 29 135 75 181 110 75 181 75 135-29 181-75 75-110 75-181zM683 512c0 47-19 90-50 121s-74 50-121 50-90-19-121-50-50-74-50-121 19-90 50-121 74-50 121-50 90 19 121 50 50 74 50 121zM469 43v85c0 24 19 43 43 43s43-19 43-43v-85c0-24-19-43-43-43s-43 19-43 43zM469 896v85c0 24 19 43 43 43s43-19 43-43v-85c0-24-19-43-43-43s-43 19-43 43zM150 210l61 61c17 17 44 17 60 0s17-44 0-60l-61-61c-17-17-44-17-60 0s-17 44 0 60zM753 814l61 61c17 17 44 17 60 0s17-44 0-60l-61-61c-17-17-44-17-60 0s-17 44 0 60zM43 555h85c24 0 43-19 43-43s-19-43-43-43h-85c-24 0-43 19-43 43s19 43 43 43zM896 555h85c24 0 43-19 43-43s-19-43-43-43h-85c-24 0-43 19-43 43s19 43 43 43zM210 874l61-61c17-17 17-44 0-60s-44-17-60 0l-61 61c-17 17-17 44 0 60s44 17 60 0zM814 271l61-61c17-17 17-44 0-60s-44-17-60 0l-61 61c-17 17-17 44 0 60s44 17 60 0z",tag:"M909 602c25-25 37-58 37-90 0-33-12-65-37-90l-367-367c-8-8-18-12-30-12h-427c-24 0-43 19-43 43v427c0 11 4 22 13 30l367 366c25 25 58 37 91 37s66-13 90-38zM848 542l-306 306c-8 8-19 13-30 13s-22-4-30-12l-354-354v-366h366l354 354c8 8 12 19 12 30 0 11-4 22-12 30zM299 341c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43z",terminal:"M201 755l256-256c17-17 17-44 0-60l-256-256c-17-17-44-17-60 0s-17 44 0 60l226 226-226 226c-17 17-17 44 0 60s44 17 60 0zM512 853h341c24 0 43-19 43-43s-19-43-43-43h-341c-24 0-43 19-43 43s19 43 43 43z",thumbsDown:"M469 640c0-24-19-43-43-43h-242c-3-0-7-0-7-0-12-2-21-8-28-17s-10-20-8-32l59-384c2-10 7-19 14-26 8-7 18-11 29-11h439v418l-154 346c-13-4-25-11-34-21-15-15-25-37-25-60zM384 683v128c0 47 19 90 50 121s74 50 121 50c17 0 32-10 39-25l171-384c3-6 4-12 4-17v-469c0-24-19-43-43-43h-481c-33-0-63 12-86 33-22 19-37 46-41 76l-59 384c-5 35 4 69 23 95s49 45 84 51c7 1 14 2 21 1zM725 128h114c15-0 29 5 39 14 9 8 16 19 18 32v290c-2 15-9 27-19 36-10 8-23 13-37 13l-115 0c-24 0-43 19-43 43s19 43 43 43h113c35 1 67-12 92-32 27-22 45-53 50-90 0-2 0-4 0-6v-299c0-2-0-4-0-6-5-34-22-64-46-86-26-23-60-37-96-36h-114c-24 0-43 19-43 43s19 43 43 43z",thumbsUp:"M555 384c0 24 19 43 43 43h242c3 0 7 0 7 0 12 2 21 8 28 17s10 20 8 32l-59 384c-2 10-7 19-14 26-8 7-18 11-29 11h-439v-418l154-346c13 4 25 11 34 21 15 15 25 37 25 60zM640 341v-128c0-47-19-90-50-121s-74-50-121-50c-17 0-32 10-39 25l-171 384c-3 6-4 12-4 17v469c0 24 19 43 43 43h481c33 0 63-12 86-33 22-19 37-46 41-76l59-384c5-35-4-69-23-95s-49-45-84-51c-7-1-14-2-21-1zM299 896h-128c-12 0-22-5-30-13s-13-18-13-30v-299c0-12 5-22 13-30s18-13 30-13h128c24 0 43-19 43-43s-19-43-43-43h-128c-35 0-67 14-90 38s-38 55-38 90v299c0 35 14 67 38 90s55 38 90 38h128c24 0 43-19 43-43s-19-43-43-43z",trash:"M768 299v555c0 12-5 22-13 30s-18 13-30 13h-427c-12 0-22-5-30-13s-13-18-13-30v-555zM725 213v-43c0-35-14-67-38-90s-55-38-90-38h-171c-35 0-67 14-90 38s-38 55-38 90v43h-171c-24 0-43 19-43 43s19 43 43 43h43v555c0 35 14 67 38 90s55 38 90 38h427c35 0 67-14 90-38s38-55 38-90v-555h43c24 0 43-19 43-43s-19-43-43-43zM384 213v-43c0-12 5-22 13-30s18-13 30-13h171c12 0 22 5 30 13s13 18 13 30v43z",unlock:"M213 512h597c12 0 22 5 30 13s13 18 13 30v299c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-299c0-12 5-22 13-30s18-13 30-13zM341 427v-128c-0-47 19-90 50-121 31-31 73-50 120-50 44 0 83 16 113 43 27 24 47 57 55 94 5 23 27 38 50 33s38-27 33-50c-12-56-41-105-82-141-45-40-105-64-170-64-71 0-135 29-181 75s-75 110-75 181v128h-43c-35 0-67 14-90 38s-38 55-38 90v299c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-299c0-35-14-67-38-90s-55-38-90-38z",upload:"M853 640v171c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-171c0-24-19-43-43-43s-43 19-43 43v171c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-171c0-24-19-43-43-43s-43 19-43 43zM469 231v409c0 24 19 43 43 43s43-19 43-43v-409l141 141c17 17 44 17 60 0s17-44 0-60l-213-213c-4-4-9-7-14-9-10-4-22-4-33 0-5 2-10 5-14 9l-213 213c-17 17-17 44 0 60s44 17 60 0z",uploadCloud:"M469 615v281c0 24 19 43 43 43s43-19 43-43v-281l98 98c17 17 44 17 60 0s17-44 0-60l-171-171c-4-4-9-7-14-9s-11-3-16-3c-11 0-22 4-30 13l-171 171c-17 17-17 44 0 60s44 17 60 0zM890 822c62-34 105-90 123-152s13-133-21-195c-29-53-74-92-126-114-31-13-64-20-98-20h-22c-31-88-91-158-167-203-85-50-188-67-291-41s-185 92-235 177-67 188-41 291c16 61 46 116 84 158 16 18 43 19 60 3s19-43 3-60c-29-33-53-75-65-123-21-80-7-160 32-226s103-117 183-138 160-7 226 32 117 103 138 183c5 19 22 32 41 32h53c23 0 45 5 66 13 35 14 65 40 84 76 23 41 26 88 14 130s-41 79-82 102c-21 11-28 37-17 58s37 28 58 17z",user:"M896 896v-85c0-59-24-112-62-151s-92-62-151-62h-341c-59 0-112 24-151 62s-62 92-62 151v85c0 24 19 43 43 43s43-19 43-43v-85c0-35 14-67 38-90s55-38 90-38h341c35 0 67 14 90 38s38 55 38 90v85c0 24 19 43 43 43s43-19 43-43zM725 299c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM640 299c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90z",userMinus:"M725 896v-85c0-59-24-112-62-151s-92-62-151-62h-299c-59 0-112 24-151 62s-62 92-62 151v85c0 24 19 43 43 43s43-19 43-43v-85c0-35 14-67 38-90s55-38 90-38h299c35 0 67 14 90 38s38 55 38 90v85c0 24 19 43 43 43s43-19 43-43zM576 299c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM491 299c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90zM981 427h-256c-24 0-43 19-43 43s19 43 43 43h256c24 0 43-19 43-43s-19-43-43-43z",userPlus:"M725 896v-85c0-59-24-112-62-151s-92-62-151-62h-299c-59 0-112 24-151 62s-62 92-62 151v85c0 24 19 43 43 43s43-19 43-43v-85c0-35 14-67 38-90s55-38 90-38h299c35 0 67 14 90 38s38 55 38 90v85c0 24 19 43 43 43s43-19 43-43zM576 299c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM491 299c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90zM981 427h-85v-85c0-24-19-43-43-43s-43 19-43 43v85h-85c-24 0-43 19-43 43s19 43 43 43h85v85c0 24 19 43 43 43s43-19 43-43v-85h85c24 0 43-19 43-43s-19-43-43-43z",userX:"M725 896v-85c0-59-24-112-62-151s-92-62-151-62h-299c-59 0-112 24-151 62s-62 92-62 151v85c0 24 19 43 43 43s43-19 43-43v-85c0-35 14-67 38-90s55-38 90-38h299c35 0 67 14 90 38s38 55 38 90v85c0 24 19 43 43 43s43-19 43-43zM576 299c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM491 299c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90zM951 311l-77 77-77-77c-17-17-44-17-60 0s-17 44 0 60l77 77-77 77c-17 17-17 44 0 60s44 17 60 0l77-77 77 77c17 17 44 17 60 0s17-44 0-60l-77-77 77-77c17-17 17-44 0-60s-44-17-60 0z",users:"M768 896v-85c0-59-24-112-62-151s-92-62-151-62h-341c-59 0-112 24-151 62s-62 92-62 151v85c0 24 19 43 43 43s43-19 43-43v-85c0-35 14-67 38-90s55-38 90-38h341c35 0 67 14 90 38s38 55 38 90v85c0 24 19 43 43 43s43-19 43-43zM597 299c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM512 299c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90zM1024 896v-85c-0-53-19-102-52-139-28-32-65-56-108-67-23-6-46 8-52 30s8 46 30 52c26 7 48 21 65 41 19 22 31 51 31 83v85c0 24 19 43 43 43s43-19 43-43zM672 175c34 9 62 31 78 59s23 63 14 97c-8 29-25 54-47 70-13 10-29 17-45 22-23 6-36 29-30 52s29 36 52 30c27-7 53-19 75-36 38-28 66-69 79-118 15-57 5-115-23-162s-74-83-131-98c-23-6-46 8-52 31s8 46 31 52z",video:"M939 382v261l-183-130zM128 171c-35 0-67 14-90 38s-38 55-38 90v427c0 35 14 67 38 90s55 38 90 38h469c35 0 67-14 90-38s38-55 38-90v-130l231 165c19 14 46 9 60-10 5-8 8-16 8-25v-427c0-24-19-43-43-43-9 0-18 3-25 8l-231 165v-130c0-35-14-67-38-90s-55-38-90-38zM128 256h469c12 0 22 5 30 13s13 18 13 30v427c0 12-5 22-13 30s-18 13-30 13h-469c-12 0-22-5-30-13s-13-18-13-30v-427c0-12 5-22 13-30s18-13 30-13z",videoOff:"M455 256h143c12 0 22 5 30 13s13 18 13 30v143c0 12 5 22 13 30l43 43c15 15 38 17 55 4l188-136v343c0 24 19 43 43 43s43-19 43-43v-427c0-9-3-17-8-25-14-19-40-23-60-10l-227 164-4-4v-125c0-35-14-67-38-90s-55-38-90-38h-143c-24 0-43 19-43 43s19 43 43 43zM196 256l444 444v25c0 12-5 22-13 30s-18 13-30 13h-469c-12 0-22-5-30-13s-13-18-13-30v-427c0-12 5-22 13-30s18-13 30-13zM13 73l99 99c-29 4-54 17-74 36-23 23-38 55-38 90v427c0 35 14 67 38 90s55 38 90 38h469c35 0 67-14 90-38 11-11 21-25 27-40l236 236c17 17 44 17 60 0s17-44 0-60l-939-939c-17-17-44-17-60 0s-17 44 0 60z",volume:"M427 302v420l-144-115c-7-6-17-9-27-9h-128v-171h128c9 0 19-3 27-9zM443 180l-202 161h-156c-24 0-43 19-43 43v256c0 24 19 43 43 43h156l202 161c18 15 45 12 60-7 6-8 9-17 9-27v-597c0-24-19-43-43-43-10 0-19 4-27 9z",volumeLow:"M427 302v420l-144-115c-7-6-17-9-27-9h-128v-171h128c9 0 19-3 27-9zM443 180l-202 161h-156c-24 0-43 19-43 43v256c0 24 19 43 43 43h156l202 161c18 15 45 12 60-7 6-8 9-17 9-27v-597c0-24-19-43-43-43-10 0-19 4-27 9zM633 391c33 33 50 77 50 121s-17 87-50 121c-17 17-17 44 0 60s44 17 60 0c50-50 75-116 75-181s-25-131-75-181c-17-17-44-17-60 0s-17 44 0 60z",volumeHigh:"M427 302v420l-144-115c-7-6-17-9-27-9h-128v-171h128c9 0 19-3 27-9zM443 180l-202 161h-156c-24 0-43 19-43 43v256c0 24 19 43 43 43h156l202 161c18 15 45 12 60-7 6-8 9-17 9-27v-597c0-24-19-43-43-43-10 0-19 4-27 9zM783 241c75 75 112 173 112 272 0 98-37 196-112 271-17 17-17 44 0 60s44 17 60 0c92-92 137-212 137-332 0-120-46-240-137-332-17-17-44-17-60 0s-17 44 0 60zM633 391c33 33 50 77 50 121s-17 87-50 121c-17 17-17 44 0 60s44 17 60 0c50-50 75-116 75-181s-25-131-75-181c-17-17-44-17-60 0s-17 44 0 60z",volumeOff:"M427 302v420l-144-115c-7-6-17-9-27-9h-128v-171h128c9 0 19-3 27-9zM443 180l-202 161h-156c-24 0-43 19-43 43v256c0 24 19 43 43 43h156l202 161c18 15 45 12 60-7 6-8 9-17 9-27v-597c0-24-19-43-43-43-10 0-19 4-27 9zM695 414l98 98-98 98c-17 17-17 44 0 60s44 17 60 0l98-98 98 98c17 17 44 17 60 0s17-44 0-60l-98-98 98-98c17-17 17-44 0-60s-44-17-60 0l-98 98-98-98c-17-17-44-17-60 0s-17 44 0 60z",wifi:"M241 568c84-70 186-102 287-98 92 3 184 36 259 98 18 15 45 12 60-6s12-45-6-60c-90-74-199-114-310-118-121-4-245 34-345 118-18 15-21 42-5 60s42 21 60 5zM89 416c125-110 282-163 437-159 147 3 293 57 410 160 18 16 45 14 60-4s14-45-4-60c-133-116-298-177-464-181-176-4-353 56-495 181-18 16-19 43-4 60s43 19 60 4zM389 722c42-30 92-42 140-39 38 3 75 16 108 39 19 14 46 9 59-10s9-46-10-59c-45-31-97-50-150-54-67-5-137 12-196 54-19 14-24 40-10 59s40 24 59 10zM512 896c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43z",wifiOff:"M695 510c34 16 64 37 88 57 18 15 45 13 60-4s13-45-4-60c-30-26-67-50-106-70-21-10-47-2-57 20s-2 47 20 57zM460 258c172-14 333 41 456 142 6 5 12 10 18 16 18 16 45 14 60-4s14-45-4-60c-7-6-14-12-21-18-140-114-323-177-517-161-23 2-41 22-39 46s22 41 46 39zM389 722c42-30 92-42 140-39 38 3 75 16 108 39 10 7 22 9 33 7l282 282c17 17 44 17 60 0s17-44 0-60l-544-544c-2-3-5-5-7-7l-387-387c-17-17-44-17-60 0s-17 44 0 60l174 174c-54 27-106 62-155 105-18 16-19 43-4 60s43 19 60 4c51-45 107-80 162-105l99 99c-58 19-114 50-164 92-18 15-20 42-5 60s42 20 60 5c54-45 116-75 179-88l119 119c-1-0-2-0-3-0-67-5-137 12-196 54-19 14-24 40-10 59s40 24 59 10zM512 896c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43z",x:"M226 286l226 226-226 226c-17 17-17 44 0 60s44 17 60 0l226-226 226 226c17 17 44 17 60 0s17-44 0-60l-226-226 226-226c17-17 17-44 0-60s-44-17-60 0l-226 226-226-226c-17-17-44-17-60 0s-17 44 0 60z",zoomIn:"M684 677c-1 1-3 2-4 4s-3 3-4 4c-54 52-127 84-207 84-82 0-157-33-211-87s-87-129-87-211 33-157 87-211 129-87 211-87 157 33 211 87 87 129 87 211c0 80-32 153-84 207zM926 866l-157-157c53-66 84-149 84-240 0-106-43-202-112-272s-166-112-272-112-202 43-272 112-112 166-112 272 43 202 112 272 166 112 272 112c91 0 174-31 240-84l157 157c17 17 44 17 60 0s17-44 0-60zM341 512h85v85c0 24 19 43 43 43s43-19 43-43v-85h85c24 0 43-19 43-43s-19-43-43-43h-85v-85c0-24-19-43-43-43s-43 19-43 43v85h-85c-24 0-43 19-43 43s19 43 43 43z",zoomOut:"M684 677c-1 1-3 2-4 4s-3 3-4 4c-54 52-127 84-207 84-82 0-157-33-211-87s-87-129-87-211 33-157 87-211 129-87 211-87 157 33 211 87 87 129 87 211c0 80-32 153-84 207zM926 866l-157-157c53-66 84-149 84-240 0-106-43-202-112-272s-166-112-272-112-202 43-272 112-112 166-112 272 43 202 112 272 166 112 272 112c91 0 174-31 240-84l157 157c17 17 44 17 60 0s17-44 0-60zM341 512h256c24 0 43-19 43-43s-19-43-43-43h-256c-24 0-43 19-43 43s19 43 43 43z",discord:{p:["M1145 86c-81-38-174-68-272-85l-7-1c-11 19-23 43-34 68l-2 5c-46-7-100-12-155-12s-108 4-160 12l6-1c-13-29-25-53-38-76l2 4c-105 18-198 48-286 89l7-3c-176 261-224 516-200 766v0c98 73 211 131 334 169l8 2c26-34 50-73 71-113l2-5c-45-17-83-35-119-57l3 2c10-7 19-14 28-21 100 48 218 76 342 76s242-28 347-78l-5 2c9 8 19 15 28 21-33 20-71 38-111 53l-5 2c23 45 47 84 75 120l-2-2c131-40 244-99 345-174l-3 2c28-291-48-543-201-767zM451 698c-67 0-122-60-122-135s53-135 121-135 123 61 122 135-54 135-122 135zM900 698c-67 0-122-60-122-135s53-135 122-135 123 61 121 135-54 135-121 135z"],w:1351},tiktok:"M535 1c56-1 111-0 167-1 3 65 27 132 75 178 48 47 115 69 181 76v172c-61-2-123-15-179-41-24-11-47-25-69-40-0 125 0 249-1 373-3 60-23 119-58 168-56 82-153 135-252 137-61 3-122-13-174-44-86-51-147-144-156-244-1-21-1-43-0-64 8-81 48-159 110-212 71-61 170-91 262-73 1 63-2 126-2 189-42-14-92-10-129 16-27 17-47 44-58 75-9 22-6 46-6 69 10 70 78 129 149 122 48-0 93-28 118-69 8-14 17-29 17-45 4-76 3-152 3-229 0-172-0-343 1-515z",instagram:{p:["M512 92c137 0 153 1 207 3 50 2 77 11 95 18 24 9 41 20 59 38 18 18 29 35 38 59 7 18 15 45 18 95 2 54 3 70 3 207s-1 153-3 207c-2 50-11 77-18 95-9 24-20 41-38 59-18 18-35 29-59 38-18 7-45 15-95 18-54 2-70 3-207 3s-153-1-207-3c-50-2-77-11-95-18-24-9-41-20-59-38-18-18-29-35-38-59-7-18-15-45-18-95-2-54-3-70-3-207s1-153 3-207c2-50 11-77 18-95 9-24 20-41 38-59 18-18 35-29 59-38 18-7 45-15 95-18 54-2 70-3 207-3zM512 0c-139 0-156 1-211 3-54 2-92 11-124 24-34 13-62 31-91 59-29 28-46 57-59 91-13 33-21 70-24 124-2 55-3 72-3 211s1 156 3 211c2 54 11 92 24 124 13 34 31 62 59 91 28 28 57 46 91 59 33 13 70 21 124 24 55 2 72 3 211 3s156-1 211-3c54-2 92-11 124-24 34-13 62-31 91-59s46-57 59-91c13-33 21-70 24-124 2-55 3-72 3-211s-1-156-3-211c-2-54-11-92-24-124-13-34-30-63-59-91-28-28-57-46-91-59-33-13-70-21-124-24-55-3-72-3-211-3v0z","M512 249c-145 0-263 118-263 263s118 263 263 263 263-118 263-263c0-145-118-263-263-263zM512 683c-94 0-171-76-171-171s76-171 171-171c94 0 171 76 171 171s-76 171-171 171z","M847 239c0 34-27 61-61 61s-61-27-61-61c0-34 27-61 61-61s61 27 61 61z"]},linkedin:"M928 0h-832c-53 0-96 43-96 96v832c0 53 43 96 96 96h832c53 0 96-43 96-96v-832c0-53-43-96-96-96zM384 832h-128v-448h128v448zM320 320c-35 0-64-29-64-64s29-64 64-64c35 0 64 29 64 64s-29 64-64 64zM832 832h-128v-256c0-35-29-64-64-64s-64 29-64 64v256h-128v-448h128v79c26-36 67-79 112-79 80 0 144 72 144 160v288z",eyedropper:"M987 37c-50-50-131-50-181 0l-172 172-121-121-136 136 106 106-472 472c-8 8-11 19-10 29h-0v160c0 18 14 32 32 32h160c0 0 3 0 4 0 9 0 18-4 25-11l472-472 106 106 136-136-121-121 172-172c50-50 50-131 0-181zM173 960h-109v-109l470-470 109 109-470 470z",heart:{p:["M1088 358c0 86-37 164-96 218h0l-320 320c-32 32-64 64-96 64s-64-32-96-64l-320-320c-59-54-96-131-96-218 0-162 132-294 294-294 86 0 164 37 218 96 54-59 131-96 218-96 162 0 294 132 294 294z"],w:1152},facebook:"M928 0h-832c-53 0-96 43-96 96v832c0 53 43 96 96 96h416v-448h-128v-128h128v-64c0-106 86-192 192-192h128v128h-128c-35 0-64 29-64 64v64h192l-32 128h-160v448h288c53 0 96-43 96-96v-832c0-53-43-96-96-96z",twitter:"M1024 226c-38 17-78 28-121 33 43-26 77-67 92-116-41 24-86 42-133 51-38-41-93-66-153-66-116 0-210 94-210 210 0 16 2 32 5 48-175-9-329-92-433-220-18 31-28 67-28 106 0 73 37 137 93 175-34-1-67-11-95-26 0 1 0 2 0 3 0 102 72 187 169 206-18 5-36 7-55 7-14 0-27-1-40-4 27 83 104 144 196 146-72 56-162 90-261 90-17 0-34-1-50-3 93 60 204 94 322 94 386 0 598-320 598-598 0-9-0-18-1-27 41-29 77-66 105-109z",youtube:"M1014 307c0 0-10-71-41-102-39-41-83-41-103-43-143-10-358-10-358-10h-0c0 0-215 0-358 10-20 2-64 3-103 43-31 31-41 102-41 102s-10 83-10 166v78c0 83 10 166 10 166s10 71 41 102c39 41 90 39 113 44 82 8 348 10 348 10s215-0 358-11c20-2 64-3 103-43 31-31 41-102 41-102s10-83 10-166v-78c-0-83-10-166-10-166zM406 645v-288l277 144-277 143z",game:{p:["M1056 194v-2h-672c-177 0-320 143-320 320s143 320 320 320c105 0 198-50 256-128h128c58 78 151 128 256 128 177 0 320-143 320-320 0-166-126-302-288-318zM576 576h-128v128h-128v-128h-128v-128h128v-128h128v128h128v128zM960 576c-35 0-64-29-64-64s29-64 64-64 64 29 64 64-29 64-64 64zM1152 576c-35 0-64-29-64-64 0-35 29-64 64-64s64 29 64 64c0 35-29 64-64 64z"],w:1408},google:"M512 0c-283 0-512 229-512 512s229 512 512 512 512-229 512-512-229-512-512-512zM520 896c-212 0-384-172-384-384s172-384 384-384c104 0 190 38 257 100l-104 100c-29-27-78-59-153-59-131 0-238 109-238 242s107 242 238 242c152 0 209-109 218-166h-218v-132h363c3 19 6 38 6 64 0 219-147 375-369 375z",github:"M512 13c-283 0-512 229-512 512 0 226 147 418 350 486 26 5 35-11 35-25 0-12-0-53-1-95-142 31-173-60-173-60-23-59-57-75-57-75-46-32 4-31 4-31 51 4 78 53 78 53 46 78 120 56 149 43 5-33 18-56 33-68-114-13-233-57-233-253 0-56 20-102 53-137-5-13-23-65 5-136 0 0 43-14 141 52 41-11 85-17 128-17 44 0 87 6 128 17 98-66 141-52 141-52 28 71 10 123 5 136 33 36 53 82 53 137 0 197-120 240-234 253 18 16 35 47 35 95 0 69-1 124-1 141 0 14 9 30 35 25 203-68 350-260 350-486 0-283-229-512-512-512z",npm:"M0 0v1024h1024v-1024h-1024zM832 832h-128v-512h-192v512h-320v-640h640v640z",xr:{p:["M801 116c465 0 735 49 735 396 0 279-197 396-342 396-218 0-307-165-393-165-110 0-175 165-393 165-145 0-342-117-342-396 0-347 270-396 735-396zM949 285c-16-16-41-16-57 0-16 16-16 41-0 57v0l322 322c16 16 41 16 57 0 16-16 16-41 0-57-9-9-18-18-26-26l-4-4c-5-5-9-9-14-14l-4-4c-32-32-65-64-132-131l-8-8c-1-1-3-3-4-4l-18-18c-31-31-68-68-113-113zM801 272c-22 0-40 18-40 40v0 322c0 22 18 40 40 40 22 0 40-18 40-40 0-1 0-2 0-3l0-6c0-3 0-6 0-8l0-5c0-1 0-2 0-2l0-6c0-1 0-1 0-2l0-7c0-1 0-1 0-2l0-8c0-0 0-1 0-1l-0-20c-0-0-0-1-0-1l-0-12c-0-1-0-1-0-2l-0-15c-0-1-0-2-0-2l-0-14c-0-1-0-2-0-3l-0-22c-0-1-0-3-0-4l-0-28c-0-2-0-4-0-5l-0-50c-0-2-0-5-0-7l-0-84c0-22-18-40-40-40zM710 282c-16-16-41-16-57 0v0l-134 134-131-131c-16-16-41-16-57 0-16 16-16 41-0 57v0l131 131-132 132c-15 16-15 41 1 56 16 16 41 16 57 0v0l131-131 134 134c16 16 41 16 57 0 16-16 16-41 0-57v0l-134-133 134-133c16-16 16-41 0-57z"],w:1600},xinjs:{p:["M937 548c14 14 14 37 0 51l-113 113-178 178c-14 14-37 14-51-0-14-14-14-37 0-51l290-291c14-14 37-14 51 0zM924 560c-7-7-19-7-27-0l-0 0-290 291c-7 7-7 20 0 27 7 7 19 7 27 0l0-0 12-12 21-21 231-232 26-26c7-7 7-20-0-27z","M512 900c20 0 36-16 36-36v-291c0-20-16-36-36-36-20 0-36 16-36 36v291c0 20 16 36 36 36zM511 882c-10 0-19-8-19-19l-0-1v-292c0-11 9-19 19-19 10 0 19 8 19 19l0 1 0 40-0 131-0 121c0 11-9 19-19 19z","M429 889c14-14 14-37 0-52l-121-121 121-121c14-14 14-37 0-52-14-14-37-14-51 0l-121 121-119-119c-14-14-37-14-51 0-14 14-14 37-1 51l1 1 119 119-119 119c-14 14-14 37 0 52 14 14 37 14 51 0l119-119 121 121c14 14 37 14 51 0zM418 876c-7 7-19 7-27 0l-0-0-133-133-131 130c-7 7-20 7-27-0-7-7-7-19-0-27l0-0 131-130-131-131c-7-7-7-19 0-27 7-7 19-7 27-0l0 0 131 130 133-133c7-7 20-7 27 0 7 7 7 19 0 27l-0 0-134 132 134 132c7 7 7 19 0 27l-0 0z","M594 142c14-14 37-14 51-0 205 205 222 221 291 290 14 14 14 37 0 51-14 14-37 14-51 0l-291-290c-14-14-14-37 0-51z","M511 130c20 0 36 16 36 36 0 290 0 193 0 291 0 20-16 36-36 36-20 0-36-16-36-36v-291c0-20 16-36 36-36z","M378 140c14-14 37-14 51 0 14 14 14 37 0 51l-121 120 121 120c14 14 14 37 0 51-14 14-37 14-51 0l-121-121-119 118c-14 14-37 14-51-0-14-14-14-37-1-51l1-1 119-118-119-118c-14-14-14-37 0-51 14-14 37-14 51-0l119 118 121-121z"]},xinie:"M668 46c10 0 20 4 29 8 23 12 36 33 29 46v0l-25 60c3 8 5 17 6 25 6 41-8 83-32 117-14 19-32 36-53 47 23 16 42 37 57 60 51 23 98 75 99 133 0 16-3 30-9 45-14 33-38 58-72 71-8 19-4 10-13 27-42 78-166 124-167 205-0 66 36 122 105 134-24 0-40 0-53 0l-3 0c-0 0-1 0-1 0l-7 0c-1 0-2 0-2-0l-8-0c-0-0-1-0-1-0l-4-0c-0-0-1-0-1-0l-2-0c-0-0-1-0-1-0l-3-0c-0-0-1-0-1-0l-3-0c-0-0-1-0-1-0l-4-0c-0-0-1-0-1-0l-14 0c-0 0-1 0-1 0l-3 0c-0 0-1 0-2 0l-3 0c-8 0-17 0-28 0-71-21-128-71-169-131-77-115-98-252-62-384-35-38-39-85-17-131 7-13 16-26 27-36 36-35 96-50 143-29 7-4 15-6 23-8 6-2 13-3 20-4-9-22-6-46 1-68 13-37 62-57 62-57 0 0 5-27 32-56 19-19 55-29 82-24v0l27-39c6-9 15-10 25-11zM453 563l0 0c7 11 51 80 131 110 101 39 109-12 109-13-168 9-232-86-239-97zM553 504c-48-2-85 16-152 44-53 22-144-28-144-28s66 46 154 44c20-0 32-3 42-6 7-2 20-32 96-34 6-0 13-0 21-0l3 0c5 0 10 0 14 0l3 0 3 0c38 1 75 3 75 3s-69-20-115-22zM400 320c0 0 0 0 0 1l0 0c2 7 9 35 2 51-9 23-23 36-25 37l-0 0 0 0c4 0 95 8 138 22 52 17 98 51 99 52l0 0c0 0-53-50-98-68-38-15-109-18-109-18s22-26 9-48c-12-22-19-30-19-30zM633 102l0 0c2 1 12 4 36 20 24 17 31 34 31 34 1-2 1-3 2-5l1-1 0-1c0-0 0-1 1-1l0-1c3-8 6-15-4-24-12-11-60-20-66-21l-0-0z",html5:"M61 0l82 922 369 102 370-103 82-921h-903zM785 301h-433l10 116h412l-31 347-232 64-232-64-16-178h113l8 90 126 34 0-0 126-34 13-147h-392l-30-342h566l-10 113z",bug:{p:["M933 549c0 20-17 37-37 37h-128c0 71-15 125-38 166l119 119c14 14 14 37 0 51-7 7-17 11-26 11s-19-3-26-11l-113-113s-75 69-172 69v-512h-73v512c-103 0-179-75-179-75l-105 118c-7 8-17 12-27 12-9 0-17-3-25-9-15-14-16-37-3-52l115-130c-20-39-33-90-33-157h-128c-20 0-37-17-37-37s17-37 37-37h128v-168l-99-99c-14-14-14-37 0-51s37-14 51 0l99 99h482l99-99c14-14 37-14 51 0s14 37 0 51l-99 99v168h128c20 0 37 17 37 37zM658 219h-366c0-101 82-183 183-183s183 82 183 183z"],w:951}};/*!
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
*/var{svg:T2,path:ha}=qe;function A2(n){let t=Ce[n];if(t===void 0)console.warn(`icon ${n} not found`),t=Ce.square;return typeof t!=="string"?t:{w:1024,h:1024,p:[t]}}var E2=(n,t)=>{Ce[n]=t},Zt=(n,t,e,i=1)=>{if(t!==void 0){for(let s of[...n.querySelectorAll("path")])if(s.setAttribute("fill",t),e!==void 0)s.setAttribute("stroke",e),s.setAttribute("stroke-width",String(Number(i)*32))}return n.setAttribute("xmlns","http://www.w3.org/2000/svg"),`url(data:image/svg+xml;charset=UTF-8,${encodeURIComponent(n.outerHTML)})`},O=new Proxy(Ce,{get(n,t){let e=A2(t);return e===void 0?void 0:(...i)=>{let{w:a,h:s}=Object.assign({w:1024,h:1024},e);return T2({viewBox:`0 0 ${a} ${s}`,class:"icon-"+t.replace(/([a-z])([A-Z])/g,(o,l,r)=>l+"-"+r.toLocaleLowerCase())},...i,...e.p.map((o,l)=>{let r=Array.from(new Set(e.c));return e.c?ha({d:o,style:{fill:`var(--icon-fill-${r.indexOf(e.c[l])}, ${e.c[l]})`}}):ha({d:o})}))}}});class Xt extends _{icon="";size=0;color="";stroke="";strokeWidth=1;constructor(){super();this.initAttributes("icon","size","color","stroke","strokeWidth")}render(){this.textContent="";let n={};if(this.size)n.height=this.size;if(this.stroke)n.stroke=this.stroke,n.strokeWidth=this.strokeWidth*32;if(this.color.match(/linear-gradient/)){let t=this.color.split("-")[0],[,e]=this.color.match(/[a-z-]+\((.*)\)/)||[],[,i]=e.match(/(\d+)deg/)||[],s=(e.match(/(#|rgb|hsl).*?%/g)||[]).map((h)=>{let[,d,p]=h.match(/^(.*)\s(\d+%)$/)||["black","100%"];return`<stop offset="${p}" stop-color="${gn.fromCss(d).html}" ></stop>`}).join(""),o="";if(i)o=` gradientTransform="rotate(${parseFloat(i).toFixed(0)})"`;let l=qe.defs(),r="g-"+Math.floor(Math.random()*Number.MAX_SAFE_INTEGER);l.innerHTML=`<${t}Gradient id="${r}" ${o}>${s}</${t}Gradient>`,n.fill=`url(#${r})`,this.append(O[this.icon]({style:n},l))}else n.fill=this.color,this.append(O[this.icon]({style:n}))}}var j2=Xt.elementCreator({tag:"xin-icon",styleSpec:{":host":{verticalAlign:"text-bottom"}}});/*!
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
*/var da=()=>{};class kt extends _{babylonReady;BABYLON;static styleSpec={":host":{display:"block",position:"relative"},":host canvas":{width:"100%",height:"100%"},":host .babylonVRicon":{height:50,width:80,backgroundColor:"transparent",filter:"drop-shadow(0 0 4px #000c)",backgroundImage:Zt(O.xr(),"#fffd"),backgroundPosition:"center",backgroundRepeat:"no-repeat",border:"none",borderRadius:5,borderStyle:"none",outline:"none",transition:"transform 0.125s ease-out"},":host .babylonVRicon:hover":{transform:"scale(1.1)"}};content=$.canvas({part:"canvas"});constructor(){super();this.babylonReady=(async()=>{let{BABYLON:n}=await cn("https://cdn.babylonjs.com/babylon.js","BABYLON");return n})()}scene;engine;sceneCreated=da;update=da;_update=()=>{if(this.scene){if(this.update!==void 0)this.update(this,this.BABYLON);if(this.scene.activeCamera!==void 0)this.scene.render()}};onResize(){if(this.engine)this.engine.resize()}loadScene=async(n,t,e)=>{let{BABYLON:i}=await cn("https://cdn.babylonjs.com/loaders/babylonjs.loaders.min.js","BABYLON");i.SceneLoader.Append(n,t,this.scene,e)};loadUI=async(n)=>{let{BABYLON:t}=await cn("https://cdn.babylonjs.com/gui/babylon.gui.min.js","BABYLON"),e=t.GUI.AdvancedDynamicTexture.CreateFullscreenUI("GUI",!0,this.scene),{snippetId:i,jsonUrl:a,data:s,size:o}=n;if(o)e.idealWidth=o,e.renderAtIdealSize=!0;let l;if(i)l=await e.parseFromSnippetAsync(i);else if(a)l=await e.parseFromURLAsync(a);else if(s)l=e.parseContent(s);else return null;let r=e.getChildren()[0],h=r.children.reduce((d,p)=>{return d[p.name]=p,d},{});return{advancedTexture:e,gui:l,root:r,widgets:h}};connectedCallback(){super.connectedCallback();let{canvas:n}=this.parts;this.babylonReady.then(async(t)=>{if(this.BABYLON=t,this.engine=new t.Engine(n,!0),this.scene=new t.Scene(this.engine),this.sceneCreated)await this.sceneCreated(this,t);if(this.scene.activeCamera===void 0)new t.ArcRotateCamera("default-camera",-Math.PI/2,Math.PI/2.5,3,new t.Vector3(0,0,0)).attachControl(this.parts.canvas,!0);this.engine.runRenderLoop(this._update)})}}var O2=kt.elementCreator({tag:"xin-3d"});/*!
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
*/class le extends _{content=null;src="";json="";config={renderer:"svg",loop:!0,autoplay:!0};static bodymovinAvailable;animation;static styleSpec={":host":{width:400,height:400,display:"inline-block"}};_loading=!1;get loading(){return this._loading}constructor(){super();if(this.initAttributes("src","json"),le.bodymovinAvailable===void 0)le.bodymovinAvailable=cn("https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js","bodymovin")}doneLoading=()=>{this._loading=!1};load=({bodymovin:n})=>{if(this._loading=!0,this.config.container=this.shadowRoot!==null?this.shadowRoot:void 0,this.json!=="")this.config.animationData=this.json,delete this.config.path;else if(this.src!=="")delete this.config.animationData,this.config.path=this.src;else console.log("%c<xin-lottie>%c expected either %cjson%c (animation data) or %csrc% c(url) but found neither.","color: #44f; background: #fff; padding: 0 5px","color: default","color: #44f; background: #fff; padding: 0 5px","color: default","color: #44f; background: #fff; padding: 0 5px","color: default");if(this.animation){this.animation.destroy();let t=this.shadowRoot;if(t!==null)t.querySelector("svg")?.remove()}this.animation=n.loadAnimation(this.config),this.animation.addEventListener("DOMLoaded",this.doneLoading)};render(){super.render(),le.bodymovinAvailable.then(this.load).catch((n)=>{console.error(n)})}}var L2=le.elementCreator({tag:"xin-lottie"});/*!
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
*/var{button:ni,slot:F2,div:et}=$;class ei extends _{arrows=!1;dots=!1;loop=!1;maxVisibleItems=1;snapDelay=0.1;snapDuration=0.25;auto=0;timeout;autoAdvance=()=>{if(clearTimeout(this.timeout),this.auto>0)this.timeout=setTimeout(this.forward,this.auto*1000)};_page=0;get page(){return this._page}set page(n){let{scroller:t,back:e,forward:i}=this.parts;if(this.lastPage<=0)i.disabled=e.disabled=!0,n=0;else n=Math.max(0,Math.min(this.lastPage,n)),n=isNaN(n)?0:n;if(this._page!==n)this._page=isNaN(n)?0:n,this.animateScroll(this._page*t.offsetWidth),e.disabled=this.page<=0&&!this.loop,i.disabled=this.page>=this.lastPage&&!this.loop}get visibleItems(){return[...this.children].filter((n)=>getComputedStyle(n).display!=="none")}get lastPage(){return Math.max(Math.ceil(this.visibleItems.length/(this.maxVisibleItems||1))-1,0)}static styleSpec={":host":{display:"flex",flexDirection:"column",position:"relative"},":host svg":{height:w.carouselIconSize},":host button":{outline:"none",border:"none",boxShadow:"none",background:"transparent",fill:w.carouselButtonColor,padding:0},":host::part(back), :host::part(forward)":{position:"absolute",top:0,bottom:0,width:w.carouseButtonWidth,zIndex:2},":host::part(back)":{left:0},":host::part(forward)":{right:0},":host button:disabled":{opacity:0.5,pointerEvents:"none"},":host button:hover":{fill:w.carouselButtonHoverColor},":host button:active":{fill:w.carouselButtonActiveColor},":host::part(pager)":{position:"relative"},":host::part(scroller)":{overflow:"auto hidden",position:"relative"},":host::part(grid)":{display:"grid",justifyItems:"center"},":host *::-webkit-scrollbar, *::-webkit-scrollbar-thumb":{display:"none"},":host .dot":{background:w.carouselButtonColor,borderRadius:w.carouselDotSize,height:w.carouselDotSize,width:w.carouselDotSize,transition:w.carouselDotTransition},":host .dot:not(.current):hover":{background:w.carouselButtonHoverColor,height:w.carouselDotSize150,width:w.carouselDotSize150,margin:w.carouselDotSize_25},":host .dot:not(.current):active":{background:w.carouselButtonActiveColor},":host .dot.current":{background:w.carouselDotCurrentColor},":host::part(progress)":{display:"flex",gap:w.carouselDotSpacing,justifyContent:"center",padding:w.carouselProgressPadding}};easing=(n)=>{return Math.sin(n*Math.PI*0.5)};indicateCurrent=()=>{let{scroller:n,progress:t}=this.parts,e=n.scrollLeft/n.offsetWidth;[...t.children].forEach((i,a)=>{i.classList.toggle("current",Math.floor(a/this.maxVisibleItems-e)===0)}),clearTimeout(this.snapTimer),this.snapTimer=setTimeout(this.snapPosition,this.snapDelay*1000)};snapPosition=()=>{let{scroller:n}=this.parts,t=n.scrollLeft/n.offsetWidth;if(t!==this.page)this.page=t>this.page?Math.ceil(t):Math.floor(t);this.autoAdvance()};back=()=>{this.page=this.page>0?this.page-1:this.lastPage};forward=()=>{this.page=this.page<this.lastPage?this.page+1:0};handleDotClick=(n)=>{let{progress:t}=this.parts,e=[...t.children].indexOf(n.target);if(e>-1)this.page=Math.floor(e/this.maxVisibleItems)};snapTimer;animationFrame;animateScroll(n,t=-1,e=0){cancelAnimationFrame(this.animationFrame);let{scroller:i}=this.parts;if(t===-1){t=i.scrollLeft,e=Date.now(),this.animationFrame=requestAnimationFrame(()=>{this.animateScroll(n,t,e)});return}let a=(Date.now()-e)/1000;if(a>=this.snapDuration||Math.abs(i.scrollLeft-n)<2)i.scrollLeft=n,this.animationFrame=null;else i.scrollLeft=t+this.easing(a/this.snapDuration)*(n-t),this.animationFrame=requestAnimationFrame(()=>{this.animateScroll(n,t,e)})}content=()=>[et({part:"pager"},ni({title:"previous slide",part:"back"},O.chevronLeft()),et({title:"slides",role:"group",part:"scroller"},et({part:"grid"},F2())),ni({title:"next slide",part:"forward"},O.chevronRight())),et({title:"choose slide to display",role:"group",part:"progress"})];constructor(){super();this.initAttributes("dots","arrows","maxVisibleItems","snapDuration","loop","auto")}connectedCallback(){super.connectedCallback(),this.ariaRoleDescription="carousel",this.ariaOrientation="horizontal",this.ariaReadOnly="true";let{back:n,forward:t,scroller:e,progress:i}=this.parts;n.addEventListener("click",this.back),t.addEventListener("click",this.forward),e.addEventListener("scroll",this.indicateCurrent),i.addEventListener("click",this.handleDotClick),this.autoAdvance()}disconnectedCallback(){clearTimeout(this.timeout)}render(){super.render();let{dots:n,arrows:t,visibleItems:e,lastPage:i}=this,{progress:a,back:s,forward:o,grid:l}=this.parts;e.forEach((r)=>{r.role="group"}),l.style.gridTemplateColumns=`${100/this.maxVisibleItems/(1+this.lastPage)}% `.repeat(e.length).trim(),l.style.width=(1+this.lastPage)*100+"%",a.textContent="",a.append(...e.map((r,h)=>ni({title:`item ${h+1}`,class:"dot"}))),this.indicateCurrent(),a.style.display=n&&i>0?"":"none",s.hidden=o.hidden=!(t&&i>0)}}var I2=ei.elementCreator({tag:"xin-carousel",styleSpec:{":host":{_carouselIconSize:24,_carouselButtonColor:"#0004",_carouselButtonHoverColor:"#0006",_carouselButtonActiveColor:"#000c",_carouseButtonWidth:48,_carouselDotCurrentColor:"#0008",_carouselDotSize:8,_carouselDotSpacing:w.carouselDotSize,_carouselProgressPadding:12,_carouselDotTransition:"0.125s ease-in-out"},":host:focus":{outline:"none",boxShadow:"none"}}});/*!
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
*/var ua="https://cdnjs.cloudflare.com/ajax/libs/ace/1.23.2/",pa="ace/theme/tomorrow",D2=async(n,t="html",e={},i=pa)=>{let{ace:a}=await cn(`${ua}ace.min.js`);a.config.set("basePath",ua);let s=a.edit(n,{mode:`ace/mode/${t}`,tabSize:2,useSoftTabs:!0,useWorker:!1,...e});return s.setTheme(i),s};class Wn extends _{source="";get value(){return this.editor===void 0?this.source:this.editor.getValue()}set value(n){if(this.editor===void 0)this.source=n;else this.editor.setValue(n),this.editor.clearSelection(),this.editor.session.getUndoManager().reset()}mode="javascript";disabled=!1;role="code editor";get editor(){return this._editor}_editor;_editorPromise;options={};theme=pa;static styleSpec={":host":{display:"block",position:"relative",width:"100%",height:"100%"}};constructor(){super();this.initAttributes("mode","theme","disabled")}onResize(){if(this.editor!==void 0)this.editor.resize(!0)}connectedCallback(){if(super.connectedCallback(),this.source==="")this.value=this.textContent!==null?this.textContent.trim():"";if(this._editorPromise===void 0)this._editorPromise=D2(this,this.mode,this.options,this.theme),this._editorPromise.then((n)=>{this._editor=n,n.setValue(this.source,1),n.clearSelection(),n.session.getUndoManager().reset()})}render(){if(super.render(),this._editorPromise!==void 0)this._editorPromise.then((n)=>n.setReadOnly(this.disabled))}}var Te=Wn.elementCreator({tag:"xin-code"});/*!

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
*/var{input:ti}=$,ga=gn.fromCss("#8888");class fa extends _{value=ga.rgba;color=ga;static styleSpec={":host":{_gap:8,_swatchSize:32,_cssWidth:72,_alphaWidth:72,display:"inline-flex",gap:w.gap,alignItems:"center"},':host input[type="color"]':{border:0,width:w.swatchSize,height:w.swatchSize},":host::part(alpha)":{width:w.alphaWidth},":host::part(css)":{width:w.cssWidth,fontFamily:"monospace"}};content=[ti({title:"base color",type:"color",part:"rgb"}),ti({type:"range",title:"opacity",part:"alpha",min:0,max:1,step:0.05}),ti({title:"css color spec",part:"css"})];valueChanged=!1;update=(n)=>{let{rgb:t,alpha:e,css:i}=this.parts;if(n.type==="input")this.color=gn.fromCss(t.value),this.color.a=Number(e.value),i.value=this.color.html;else this.color=gn.fromCss(i.value),t.value=this.color.html.substring(0,7),e.value=String(this.color.a);t.style.opacity=String(this.color.a),this.value=this.color.rgba,this.valueChanged=!0};connectedCallback(){super.connectedCallback();let{rgb:n,alpha:t,css:e}=this.parts;n.addEventListener("input",this.update),t.addEventListener("input",this.update),e.addEventListener("change",this.update)}render(){if(this.valueChanged){this.valueChanted=!1;return}let{rgb:n,alpha:t,css:e}=this.parts;this.color=gn.fromCss(this.value),n.value=this.color.html.substring(0,7),n.style.opacity=String(this.color.a),t.value=String(this.color.a),e.value=this.color.html}}var ii=fa.elementCreator({tag:"xin-color"});/*!
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
*/var Cn=$.div({style:{content:" ",position:"fixed",top:0,left:0,right:0,bottom:0}}),tt={passive:!0},rn=(n,t,e="move")=>{if(!n.type.startsWith("touch")){let{clientX:a,clientY:s}=n;Cn.style.cursor=e,Tn(Cn),document.body.append(Cn);let o=(l)=>{let r=l.clientX-a,h=l.clientY-s;if(t(r,h,l)===!0)Cn.removeEventListener("mousemove",o),Cn.removeEventListener("mouseup",o),Cn.remove()};Cn.addEventListener("mousemove",o,tt),Cn.addEventListener("mouseup",o,tt)}else if(n instanceof TouchEvent){let a=n.changedTouches[0],s=a.identifier,o=a.clientX,l=a.clientY,r=n.target,h=0,d=0,p=(m)=>{let z=[...m.touches].find((x)=>x.identifier===s);if(z!==void 0)h=z.clientX-o,d=z.clientY-l;if(m.type==="touchmove")m.stopPropagation(),m.preventDefault();if(t(h,d,m)===!0||z===void 0)r.removeEventListener("touchmove",p),r.removeEventListener("touchend",p),r.removeEventListener("touchcancel",p)};r.addEventListener("touchmove",p),r.addEventListener("touchend",p,tt),r.addEventListener("touchcancel",p,tt)}},Ae=(n="body *")=>[...document.querySelectorAll(n)].map((t)=>parseFloat(getComputedStyle(t).zIndex)).reduce((t,e)=>isNaN(t)||Number(t)<e?e:Number(t),0),Tn=(n,t="body *")=>{n.style.zIndex=String(Ae(t)+1)};/*!
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
*/var{slot:q2}=$;class An extends _{static floats=new Set;drag=!1;remainOnResize="remove";remainOnScroll="remain";content=q2();static styleSpec={":host":{position:"fixed"}};constructor(){super();this.initAttributes("drag","remainOnResize","remainOnScroll")}reposition=(n)=>{if(n.target?.closest(".no-drag"))return;if(this.drag){Tn(this);let e=this.offsetLeft,i=this.offsetTop;rn(n,(a,s,o)=>{if(this.style.left=`${e+a}px`,this.style.top=`${i+s}px`,this.style.right="auto",this.style.bottom="auto",o.type==="mouseup")return!0})}};connectedCallback(){super.connectedCallback(),An.floats.add(this);let n={passive:!0};this.addEventListener("touchstart",this.reposition,n),this.addEventListener("mousedown",this.reposition,n),Tn(this)}disconnectedCallback(){super.disconnectedCallback(),An.floats.delete(this)}}var it=An.elementCreator({tag:"xin-float"});window.addEventListener("resize",()=>{[...An.floats].forEach((n)=>{if(n.remainOnResize==="hide")n.hidden=!0;else if(n.remainOnResize==="remove")n.remove()})},{passive:!0});document.addEventListener("scroll",(n)=>{if(n.target instanceof HTMLElement&&n.target.closest(An.tagName))return;[...An.floats].forEach((t)=>{if(t.remainOnScroll==="hide")t.hidden=!0;else if(t.remainOnScroll==="remove")t.remove()})},{passive:!0,capture:!0});/*!
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

*/var ai=(n)=>{let{content:t,target:e,position:i}=n,a=Array.isArray(t)?it(...t):it(t);return ma(a,e,i),document.body.append(a),a},ma=(n,t,e)=>{{let{position:p}=getComputedStyle(n);if(p!=="fixed")n.style.position="fixed";Tn(n)}let{left:i,top:a,width:s,height:o}=t.getBoundingClientRect(),l=i+s*0.5,r=a+o*0.5,h=window.innerWidth,d=window.innerHeight;if(e==="side")e=(l<h*0.5?"e":"w")+(r<d*0.5?"s":"n");else if(e==="auto"||e===void 0)e=(r<d*0.5?"s":"n")+(l<h*0.5?"e":"w");if(n.style.top=n.style.left=n.style.right=n.style.bottom=n.style.transform="",e.length===2){let[p,m]=e;switch(p){case"n":n.style.bottom=(d-a).toFixed(2)+"px";break;case"e":n.style.left=(i+s).toFixed(2)+"px";break;case"s":n.style.top=(a+o).toFixed(2)+"px";break;case"w":n.style.right=(h-i).toFixed(2)+"px";break}switch(m){case"n":n.style.bottom=(d-a-o).toFixed(2)+"px";break;case"e":n.style.left=i.toFixed(2)+"px";break;case"s":n.style.top=a.toFixed(2)+"px";break;case"w":n.style.right=(h-i-s).toFixed(2)+"px";break}n.style.transform=""}else if(e==="n")n.style.bottom=(d-a).toFixed(2)+"px",n.style.left=l.toFixed(2)+"px",n.style.transform="translateX(-50%)";else if(e==="s")n.style.top=(a+o).toFixed(2)+"px",n.style.left=l.toFixed(2)+"px",n.style.transform="translateX(-50%)";else if(e==="e")n.style.left=(i+s).toFixed(2)+"px",n.style.top=r.toFixed(2)+"px",n.style.transform="translateY(-50%)";else if(e==="w")n.style.right=(h-i).toFixed(2)+"px",n.style.top=r.toFixed(2)+"px",n.style.transform="translateY(-50%)";n.style.setProperty("--max-height",`calc(100vh - ${n.style.top||n.style.bottom})`),n.style.setProperty("--max-width",`calc(100vw - ${n.style.left||n.style.right})`)};/*!
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
*/var{div:ba,button:va,span:En,a:H2}=$;de("xin-menu-helper",{".xin-menu":{overflow:"hidden auto",maxHeight:`calc(${w.maxHeight} - ${q.menuInset("8px")})`,borderRadius:w.spacing50,background:q.menuBg("#fafafa"),boxShadow:`${w.spacing13} ${w.spacing50} ${w.spacing} ${w.shadowColor}`},".xin-menu > div":{width:q.menuWidth("auto")},".xin-menu-trigger":{paddingLeft:0,paddingRight:0,minWidth:q.touchSize("48px")},".xin-menu-separator":{display:"inline-block",content:" ",height:"1px",width:"100%",background:q.menuItemColor("#222"),opacity:0.25,margin:q.menuSeparatorMargin("8px 0")},".xin-menu-item":{boxShadow:"none",border:"none !important",display:"grid",alignItems:"center",justifyContent:"flex-start",textDecoration:"none",gridTemplateColumns:"0px 1fr 30px",width:"100%",gap:0,background:"transparent",padding:q.menuItemPadding("0 16px"),height:q.menuItemHeight("48px"),lineHeight:q.menuItemHeight("48px"),textAlign:"left"},".xin-menu-item, .xin-menu-item > span":{color:q.menuItemColor("#222")},".xin-menu-with-icons .xin-menu-item":{gridTemplateColumns:"30px 1fr 30px"},".xin-menu-item svg":{fill:q.menuItemIconColor("#222")},".xin-menu-item.xin-menu-item-checked":{background:q.menuItemHoverBg("#eee")},".xin-menu-item > span:nth-child(2)":{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textAlign:"left"},".xin-menu-item:hover":{boxShadow:"none !important",background:q.menuItemHoverBg("#eee")},".xin-menu-item:active":{boxShadow:"none !important",background:q.menuItemActiveBg("#aaa"),color:q.menuItemActiveColor("#000")},".xin-menu-item:active svg":{fill:q.menuItemIconActiveColor("#000")}});var ya=(n)=>{let t=n.checked&&n.checked()&&"check"||!1,e=n?.icon||t||En(" ");if(typeof e==="string")e=O[e]();let i;if(typeof n?.action==="string")i=H2({class:"xin-menu-item",href:n.action},e,En(n.caption),En(n.shortcut||" "));else i=va({class:"xin-menu-item",onClick:n.action},e,En(n.caption),En(n.shortcut||" "));if(i.classList.toggle("xin-menu-item-checked",t!==!1),n?.enabled&&!n.enabled())i.setAttribute("disabled","");return i},xa=(n,t)=>{let e=n.checked&&n.checked()&&"check"||!1,i=n?.icon||e||En(" ");if(typeof i==="string")i=O[i]();let a=va({class:"xin-menu-item",disabled:!(!n.enabled||n.enabled()),onClick(s){yn(Object.assign({},t,{menuItems:n.menuItems,target:a,submenuDepth:(t.submenuDepth||0)+1,position:"side"})),s.stopPropagation(),s.preventDefault()}},i,En(n.caption),O.chevronRight({style:{justifySelf:"flex-end"}}));return a},wa=(n,t)=>{if(n===null)return En({class:"xin-menu-separator"});else if(n?.action)return ya(n);else return xa(n,t)},Ma=(n)=>{let{target:t,width:e,menuItems:i}=n,a=i.find((s)=>s?.icon||s?.checked);return ba({class:a?"xin-menu xin-menu-with-icons":"xin-menu",onClick(){jn(0)}},ba({style:{minWidth:t.offsetWidth+"px",width:typeof e==="number"?`${e}px`:e},onMousedown(s){s.preventDefault(),s.stopPropagation()}},...i.map((s)=>wa(s,n))))},re,at=[],jn=(n=0)=>{let t=at.splice(n);for(let e of t)e.menu.remove();return re=t[0],n>0?at[n-1]:void 0};document.body.addEventListener("mousedown",(n)=>{if(n.target&&!at.find((t)=>t.target.contains(n.target)))jn(0)});document.body.addEventListener("keydown",(n)=>{if(n.key==="Escape")jn(0)});var yn=(n)=>{n=Object.assign({submenuDepth:0},n);let{target:t,position:e,submenuDepth:i}=n;if(re&&!document.body.contains(re?.menu))re=void 0;if(i===0&&re?.target===t)return;let a=jn(i);if(re?.target===t)return;if(a&&a.target===t){jn();return}let s=Ma(n),o=ai({content:s,target:t,position:e});o.remainOnScroll="remove",at.push({target:t,menu:o})};var ot={};St(ot,{init:()=>oi,draggedElement:()=>V2});/*!
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
*/var _2=()=>!!document.querySelector(".drag-source"),Ca=(n,t)=>{if(!n)return!1;for(let e of n)if(e==="special/any")return!0;else if(e.indexOf("*")>-1){let[i,a]=e.split("/"),[s,o]=t.split("/");if((i==="*"||i===s)&&(a==="*"||a===o))return!0}else if(e===t)return!0},st=(n)=>{for(let t of[...document.querySelectorAll(`.${n}`)])t.classList.remove(n)},Ta=()=>{st("drag-over"),st("drag-source"),st("drag-target")},si=(n,t=";")=>{return(n||"").split(t).map((e)=>e.trim()).filter((e)=>e!=="")},Aa=(n)=>{if(!n)n=[];let t=[...document.querySelectorAll("[data-drop]")];for(let e of t){let i=si(e.dataset.drop);if(n.find((a)=>Ca(i,a)))e.classList.add("drag-target");else e.classList.remove("drag-target")}};function $2(n){let t=n.target?.closest('[draggable="true"],a[href]');if(!t)return;t.classList.add("drag-source");let e=t.matches('[draggable="true"]')?si(t.dataset.drag||"text/html"):si(t.dataset.drag||"url");for(let i of e){let a=t.dataset.dragContent||(i==="text/html"?t.innerHTML:t.textContent);n.dataTransfer?.setData(i,a||"")}Aa(n.dataTransfer?.types),n.stopPropagation()}function za(n){if(!_2())Aa(n.dataTransfer?.types);let t=n.target.closest(".drag-target");if(t&&n.dataTransfer)t.classList.add("drag-over"),n.dataTransfer.dropEffect="copy";else n.preventDefault(),n.stopPropagation()}function P2(){st("drag-over")}function N2(n){let t=n.target.closest(".drag-target");if(t){let e=(t.dataset?.drop||"").split(";");for(let i of e)if(Ca(n.dataTransfer?.types,i))if(i==="text/html")t.innerHTML=n.dataTransfer?.getData(i)||"";else t.textContent=n.dataTransfer?.getData(i)||""}Ta()}var V2=()=>document.querySelector(".drag-source"),Sa=!1,oi=()=>{if(Sa)return;document.body.addEventListener("dragstart",$2),document.body.addEventListener("dragenter",za),document.body.addEventListener("dragover",za),document.body.addEventListener("drop",N2),document.body.addEventListener("dragleave",P2),document.body.addEventListener("dragend",Ta),window.addEventListener("dragover",(n)=>n.preventDefault()),window.addEventListener("drop",(n)=>n.preventDefault()),Sa=!0};/*!
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
*/function W2(n,t,e){let i=n.find((a)=>a[t]!==void 0&&a[t]!==null);if(i!==void 0){let a=i[t];switch(typeof a){case"string":if(a.match(/^\d+(\.\d+)?$/))return 6*e;else if(a.includes(" "))return 20*e;else return 12*e;case"number":return 6*e;case"boolean":return 5*e;case"object":return!1;default:return 8*e}}return!1}var{div:ce,span:lt,button:G2,template:U2}=$,Ea=(n)=>n;class li extends _{select=!1;multiple=!1;nosort=!1;nohide=!1;noreorder=!1;selectionChanged=()=>{};selectedKey=Symbol("selected");selectBinding=(n,t)=>{n.toggleAttribute("aria-selected",t[this.selectedKey]===!0)};pinnedTop=0;pinnedBottom=0;maxVisibleRows=1e4;get value(){return{array:this.array,filter:this.filter,columns:this.columns}}set value(n){let{array:t,columns:e,filter:i}=Dn(n);if(this._array!==t||this._columns!==e||this._filter!==i)this.queueRender();this._array=t||[],this._columns=e||null,this._filter=i||Ea}rowData={visible:[],pinnedTop:[],pinnedBottom:[]};_array=[];_columns=null;_filter=Ea;charWidth=15;rowHeight=30;minColumnWidth=30;get virtual(){return this.rowHeight>0?{height:this.rowHeight}:void 0}constructor(){super();this.rowData=qn({[this.instanceId]:this.rowData},!0)[this.instanceId],this.initAttributes("rowHeight","charWidth","minColumnWidth","select","multiple","pinnedTop","pinnedBottom","nosort","nohide","noreorder")}get array(){return this._array}set array(n){this._array=Dn(n),this.queueRender()}get filter(){return this._filter}set filter(n){if(this._filter!==n)this._filter=n,this.queueRender()}get sort(){if(this._sort)return this._sort;let n=this._columns?.find((e)=>e.sort==="ascending"||e.sort==="descending");if(!n)return;let{prop:t}=n;return n.sort==="ascending"?(e,i)=>e[t]>i[t]?1:-1:(e,i)=>e[t]>i[t]?-1:1}set sort(n){if(this._sort!==n)this._sort=n,this.queueRender()}get columns(){if(!Array.isArray(this._columns)){let{_array:n}=this;this._columns=Object.keys(n[0]||{}).map((t)=>{let e=W2(n,t,this.charWidth);return{name:t.replace(/([a-z])([A-Z])/g,"$1 $2").toLocaleLowerCase(),prop:t,align:typeof n[0][t]==="number"||n[0][t]!==""&&!isNaN(n[0][t])?"right":"left",visible:e!==!1,width:e?e:0}})}return this._columns}set columns(n){this._columns=n,this.queueRender()}get visibleColumns(){return this.columns.filter((n)=>n.visible!==!1)}content=null;getColumn(n){let t=(n.touches!==void 0?n.touches[0].clientX:n.clientX)-this.getBoundingClientRect().x,e=n.touches!==void 0?20:5,i=0,a=[];return this.visibleColumns.find((o)=>{if(o.visible!==!1)return i+=o.width,a.push(i),Math.abs(t-i)<e})}setCursor=(n)=>{if(this.getColumn(n)!==void 0)this.style.cursor="col-resize";else this.style.cursor=""};resizeColumn=(n)=>{let t=this.getColumn(n);if(t!==void 0){let e=Number(t.width),i=n.touches!==void 0,a=i?n.touches[0].identifier:void 0;rn(n,(s,o,l)=>{if((i?[...l.touches].find((d)=>d.identifier===a):!0)===void 0)return!0;let h=e+s;if(t.width=h>this.minColumnWidth?h:this.minColumnWidth,this.setColumnWidths(),l.type==="mouseup")return!0},"col-resize")}};selectRow(n,t=!0){if(t)n[this.selectedKey]=!0;else delete n[this.selectedKey]}selectRows(n,t=!0){for(let e of n||this.array)this.selectRow(e,t)}deSelect(n){this.selectRows(n,!1)}rangeStart;updateSelection=(n)=>{if(!this.select&&!this.multiple)return;let{target:t}=n;if(!(t instanceof HTMLElement))return;let e=t.closest(".tr");if(!(e instanceof HTMLElement))return;let i=ue(e);if(i===!1)return;let a=n,s=window.getSelection();if(s!==null)s.removeAllRanges();let o=this.visibleRows;if(this.multiple&&a.shiftKey&&o.length>0&&this.rangeStart!==i){let l=this.rangeStart===void 0||this.rangeStart[this.selectedKey]===!0,[r,h]=[this.rangeStart!==void 0?o.indexOf(this.rangeStart):0,o.indexOf(i)].sort((d,p)=>d-p);if(r>-1)for(let d=r;d<=h;d++){let p=o[d];this.selectRow(p,l)}}else if(this.multiple&&a.metaKey){this.selectRow(i,!i[this.selectedKey]);let l=o.indexOf(i),r=o[l+1],h=l>0?o[l-1]:void 0;if(r!==void 0&&r[this.selectedKey]===!0)this.rangeStart=r;else if(h!==void 0&&h[this.selectedKey]===!0)this.rangeStart=h;else this.rangeStart=void 0}else this.rangeStart=i,this.deSelect(),i[this.selectedKey]=!0;this.selectionChanged(this.visibleSelectedRows)};connectedCallback(){super.connectedCallback(),this.addEventListener("mousemove",this.setCursor),this.addEventListener("mousedown",this.resizeColumn),this.addEventListener("touchstart",this.resizeColumn,{passive:!0}),this.addEventListener("mouseup",this.updateSelection),this.addEventListener("touchend",this.updateSelection)}setColumnWidths(){this.style.setProperty("--grid-columns",this.visibleColumns.map((n)=>n.width+"px").join(" ")),this.style.setProperty("--grid-row-width",this.visibleColumns.reduce((n,t)=>n+t.width,0)+"px")}sortByColumn=(n,t="auto")=>{for(let e of this.columns.filter((i)=>Dn(i.sort)!==!1))if(Dn(e)===n){if(t==="auto")e.sort=e.sort==="ascending"?"descending":"ascending";else e.sort=t;this.queueRender()}else delete e.sort};popColumnMenu=(n,t)=>{let{sortByColumn:e}=this,i=this.columns.filter((o)=>o.visible===!1),a=this.queueRender.bind(this),s=[];if(!this.nosort&&t.sort!==!1)s.push({caption:"Sort Ascending",icon:"sortAscending",action(){e(t)}},{caption:"Sort Descending",icon:"sortDescending",action(){e(t,"descending")}});if(!this.nohide){if(s.length)s.push(null);s.push({caption:"Hide Column",icon:"eyeOff",enabled:()=>t.visible!==!0,action(){t.visible=!1,a()}},{caption:"Show Column",icon:"eye",enabled:()=>i.length>0,menuItems:i.map((o)=>{return{caption:o.name||o.prop,action(){delete o.visible,a()}}})})}yn({target:n,menuItems:s})};headerCell=(n)=>{let{popColumnMenu:t}=this,e="none",i;switch(n.sort){case"ascending":i=O.sortAscending(),e="descending";break;case!1:break;default:break;case"descending":e="ascending",i=O.sortDescending()}let a=!(this.nosort&&this.nohide)?G2({class:"menu-trigger",onClick(s){t(s.target,n),s.stopPropagation()}},i||O.moreVertical()):{};return n.headerCell!==void 0?n.headerCell(n):lt({class:"th",role:"columnheader",ariaSort:e,style:{...this.cellStyle,textAlign:n.align||"left"}},lt(typeof n.name==="string"?n.name:n.prop),lt({style:{flex:"1"}}),a)};dataCell=(n)=>{if(n.dataCell!==void 0)return n.dataCell(n);return lt({class:"td",role:"cell",style:{...this.cellStyle,textAlign:n.align||"left"},bindText:`^.${n.prop}`})};get visibleRows(){return Dn(this.rowData.visible)}get visibleSelectedRows(){return this.visibleRows.filter((n)=>n[this.selectedKey])}get selectedRows(){return this.array.filter((n)=>n[this.selectedKey])}rowTemplate(n){return U2(ce({class:"tr",role:"row",bind:{value:"^",binding:{toDOM:this.selectBinding}}},...n.map(this.dataCell)))}draggedColumn;dropColumn=(n)=>{let t=n.target.closest(".drag-over"),e=Array.from(t.parentElement.children).indexOf(t),i=this.visibleColumns[e],a=this.columns.indexOf(this.draggedColumn),s=this.columns.indexOf(i);this.columns.splice(a,1),this.columns.splice(s,0,this.draggedColumn),console.log({event:n,target:t,targetIndex:e,draggedIndex:a,droppedIndex:s}),this.queueRender(),n.preventDefault(),n.stopPropagation()};render(){super.render(),this.rowData.pinnedTop=this.pinnedTop>0?this._array.slice(0,this.pinnedTop):[],this.rowData.pinnedBottom=this.pinnedBottom>0?this._array.slice(this._array.length-this.pinnedBottom):[],this.rowData.visible=this.filter(this._array.slice(this.pinnedTop,Math.min(this.maxVisibleRows,this._array.length-this.pinnedTop-this.pinnedBottom)));let{sort:n}=this;if(n)this.rowData.visible.sort(n);this.textContent="",this.style.display="flex",this.style.flexDirection="column";let{visibleColumns:t}=this;if(this.style.setProperty("--row-height",`${this.rowHeight}px`),this.setColumnWidths(),!this.noreorder)oi();let e=this.instanceId+"-column-header",i=t.map((a)=>{let s=this.headerCell(a);if(!this.noreorder)s.setAttribute("draggable","true"),s.dataset.drag=e,s.dataset.drop=e,s.addEventListener("dragstart",()=>{this.draggedColumn=a}),s.addEventListener("drop",this.dropColumn);return s});if(this.append(ce({class:"thead",role:"rowgroup",style:{touchAction:"none"}},ce({class:"tr",role:"row"},...i))),this.pinnedTop>0)this.append(ce({part:"pinnedTopRows",class:"tbody",role:"rowgroup",style:{flex:"0 0 auto",overflow:"hidden",height:`${this.rowHeight*this.pinnedTop}px`},bindList:{value:this.rowData.pinnedTop,virtual:this.virtual}},this.rowTemplate(t)));if(this.append(ce({part:"visibleRows",class:"tbody",role:"rowgroup",style:{content:" ",minHeight:"100px",flex:"1 1 100px",overflow:"hidden auto"},bindList:{value:this.rowData.visible,virtual:this.virtual}},this.rowTemplate(t))),this.pinnedBottom>0)this.append(ce({part:"pinnedBottomRows",class:"tbody",role:"rowgroup",style:{flex:"0 0 auto",overflow:"hidden",height:`${this.rowHeight*this.pinnedBottom}px`},bindList:{value:this.rowData.pinnedBottom,virtual:this.virtual}},this.rowTemplate(t)))}}var Y2=li.elementCreator({tag:"xin-table",styleSpec:{":host":{overflow:"auto hidden"},":host .thead, :host .tbody":{width:w.gridRowWidth},":host .tr":{display:"grid",gridTemplateColumns:w.gridColumns,height:w.rowHeight,lineHeight:w.rowHeight},":host .td, :host .th":{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",display:"flex",alignItems:"center"},":host .th .menu-trigger":{color:"currentColor",background:"none",padding:0,lineHeight:w.touchSize,height:w.touchSize,width:w.touchSize},':host [draggable="true"]':{cursor:"ew-resize"},':host [draggable="true"]:active':{background:q.draggedHeaderBg("#0004"),color:q.draggedHeaderColor("#fff")},":host .drag-over":{background:q.dropHeaderBg("#fff4")}}});/*!
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
*/var{div:dn,slot:R2}=$;class un extends _{static angleSize=15;static gridSize=8;static snapAngle=!1;static snapToGrid=!1;static styleSpec={":host":{"--handle-bg":"#fff4","--handle-color":"#2228","--handle-hover-bg":"#8ff8","--handle-hover-color":"#222","--handle-size":"20px","--handle-padding":"2px"},":host ::slotted(*)":{position:"absolute"},":host > :not(style,slot)":{boxSizing:"border-box",content:'" "',position:"absolute",display:"flex",height:w.handleSize,width:w.handleSize,padding:w.handlePadding,"--text-color":w.handleColor,background:w.handleBg},":host > .drag-size":{top:0,bottom:0,left:0,right:0,height:"auto",width:"auto",background:"transparent",cursor:"ew-resize"},':host > [part="rotate"]':{transform:`translateY(${w.handleSize_50})`},":host > [locked] > svg:first-child, :host > :not([locked]) > svg+svg":{display:"none"},":host .icon-unlock":{opacity:0.5},":host svg":{pointerEvents:"none"},":host > *:hover":{"--text-color":w.handleHoverColor,background:w.handleHoverBg}};static snappedCoords(n,t){let{gridSize:e}=un;return un.snapToGrid||n.shiftKey?t.map((i)=>Math.round(i/e)*e):t}static snappedAngle(n,t){let{angleSize:e}=un;return un.snapAngle||n.shiftKey?Math.round(t/e)*e:t}get locked(){let n=this.parentElement;if(n.style.inset)return{left:!0,top:!0,bottom:!0,right:!0};let t=n.style.right.match(/\d/)!==null,e=!t||n.style.left.match(/\d/)!==null,i=n.style.bottom.match(/\d/)!==null,a=!i||n.style.top.match(/\d/)!==null;return{left:e,top:a,bottom:i,right:t}}set locked(n){let{bottom:t,right:e}=n,{left:i,top:a}=n,s=this.parentElement,o=s.offsetLeft,l=s.offsetTop,r=s.offsetWidth,h=s.offsetHeight,d=s.offsetParent.offsetWidth-o-r,p=s.offsetParent.offsetHeight-l-h;if(Object.assign(s.style,{left:"",right:"",top:"",bottom:"",width:"",height:""}),!e)i=!0;if(!t)a=!0;if(i)s.style.left=o+"px";if(e)s.style.right=d+"px";if(i&&e)s.style.width="auto";else s.style.width=r+"px";if(a)s.style.top=l+"px";if(t)s.style.bottom=p+"px";if(a&&t)s.style.height="auto";else s.style.height=h+"px";this.queueRender()}get coords(){let{top:n,left:t,right:e,bottom:i}=this.parentElement.style;return{top:parseFloat(n),left:parseFloat(t),right:parseFloat(e),bottom:parseFloat(i)}}get left(){return this.parentElement.offsetLeft}get width(){return this.parentElement.offsetWidth}get right(){return this.parentElement.offsetParent.offsetWidth-(this.left+this.width)}get top(){return this.parentElement.offsetTop}get height(){return this.parentElement.offsetHeight}get bottom(){return this.parentElement.offsetParent.offsetHeight-(this.top+this.height)}triggerChange=()=>{this.parentElement.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))};adjustPosition=(n)=>{let{locked:t}=this;this.locked=t;let e=this.parentElement,{top:i,left:a,bottom:s,right:o}=this.coords;rn(n,(l,r,h)=>{if([l,r]=un.snappedCoords(h,[l,r]),!isNaN(i))e.style.top=i+r+"px";if(!isNaN(s))e.style.bottom=s-r+"px";if(!isNaN(a))e.style.left=a+l+"px";if(!isNaN(o))e.style.right=o-l+"px";if(h.type==="mouseup")return this.triggerChange(),!0})};resize=(n)=>{let t=this.parentElement,{locked:e}=this;this.locked=Object.assign({left:!0,top:!0,right:!0,bottom:!0});let[i,a]=[this.right,this.bottom];rn(n,(s,o,l)=>{let r=i-s,h=a-o;if([r,h]=un.snappedCoords(l,[r,h]),t.style.right=r+"px",t.style.bottom=h+"px",l.type==="mouseup")return this.locked=e,this.triggerChange(),!0})};adjustSize=(n)=>{let t=this.parentElement,{locked:e}=this,i=n.target.getAttribute("part");this.locked=Object.assign({left:!0,right:!0,top:!0,bottom:!0});let a=this[i];rn(n,(s,o,l)=>{let[r]=un.snappedCoords(l,[a+(["left","right"].includes(i)?s:o)*(["right","bottom"].includes(i)?-1:1)]);if(t.style[i]=r+"px",l.type==="mouseup")return this.locked=e,this.triggerChange(),!0})};get rect(){return this.parentElement.getBoundingClientRect()}get center(){let n=this.parentElement.getBoundingClientRect();return{x:n.x+n.width*0.5,y:n.y+n.height*0.5}}get element(){return this.parentElement}adjustRotation=(n)=>{let{center:t}=this,{transformOrigin:e}=this.element.style;if(!e)this.element.style.transformOrigin="50% 50%";rn(n,(i,a,s)=>{let{clientX:o,clientY:l}=s,r=o-t.x,h=l-t.y,d=h>0?90:-90;if(r!==0)d=Math.atan2(h,r)*180/Math.PI;if(d=un.snappedAngle(s,d),d===0)this.element.style.transformOrigin="",this.element.style.transform="";else this.element.style.transform=`rotate(${d}deg)`;return this.triggerChange(),s.type==="mouseup"})};toggleLock=(n)=>{let{locked:t}=this,e=n.target.title.split(" ")[1];t[e]=!t[e],this.locked=t,this.queueRender(),n.stopPropagation(),n.preventDefault()};content=()=>[dn({part:"move",style:{top:"50%",left:"50%",transform:"translate(-50%,-50%)"}},O.move()),dn({part:"left",title:"resize left",class:"drag-size",style:{left:"-6px",width:"8px"}}),dn({part:"right",title:"resize right",class:"drag-size",style:{left:"calc(100% - 2px)",width:"8px"}}),dn({part:"top",title:"resize top",class:"drag-size",style:{top:"-6px",height:"8px",cursor:"ns-resize"}}),dn({part:"bottom",title:"resize bottom",class:"drag-size",style:{top:"calc(100% - 2px)",height:"8px",cursor:"ns-resize"}}),dn({part:"resize",style:{top:"100%",left:"100%"}},O.resize()),dn({part:"rotate",style:{top:"50%",right:"0"}},O.refresh()),dn({part:"lockLeft",title:"lock left",style:{top:"50%",left:0,transform:"translate(-100%, -50%)"}},O.unlock(),O.lock()),dn({part:"lockRight",title:"lock right",style:{top:"50%",left:"100%",transform:"translate(0%, -50%)"}},O.unlock(),O.lock()),dn({part:"lockTop",title:"lock top",style:{top:0,left:"50%",transform:"translate(-50%, -100%)"}},O.unlock(),O.lock()),dn({part:"lockBottom",title:"lock bottom",style:{top:"100%",left:"50%",transform:"translate(-50%, 0%)"}},O.unlock(),O.lock()),R2()];constructor(){super();this.initAttributes("rotationSnap","positionSnap")}connectedCallback(){super.connectedCallback();let{left:n,right:t,top:e,bottom:i,lockLeft:a,lockRight:s,lockTop:o,lockBottom:l,move:r,resize:h,rotate:d}=this.parts,p={passive:!0};[n,t,e,i].forEach((m)=>{m.addEventListener("mousedown",this.adjustSize,p),m.addEventListener("touchstart",this.adjustSize,p)}),[a,s,o,l].forEach((m)=>{m.addEventListener("click",this.toggleLock)}),h.addEventListener("mousedown",this.resize,p),r.addEventListener("mousedown",this.adjustPosition,p),d.addEventListener("mousedown",this.adjustRotation,p),h.addEventListener("touchstart",this.resize,p),r.addEventListener("touchstart",this.adjustPosition,p),d.addEventListener("touchstart",this.adjustRotation,p)}render(){if(super.render(),!this.parentElement)return;let{lockLeft:n,lockRight:t,lockTop:e,lockBottom:i}=this.parts,{left:a,right:s,top:o,bottom:l}=this.locked;n.toggleAttribute("locked",a),t.toggleAttribute("locked",s),e.toggleAttribute("locked",o),i.toggleAttribute("locked",l)}}var J2=un.elementCreator({tag:"xin-editable"});/*!
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
*/var{div:K2,input:B2,select:ja,option:Ee,button:ri,span:Q2}=$,Oa=(n)=>n,La="null filter, everything matches",ci={contains:{caption:"contains",negative:"does not contain",makeTest:(n)=>{return n=n.toLocaleLowerCase(),(t)=>String(t).toLocaleLowerCase().includes(n)}},hasTags:{caption:"has tags",makeTest:(n)=>{let t=n.split(/[\s,]/).map((e)=>e.trim().toLocaleLowerCase()).filter((e)=>e!=="");return console.log(t),(e)=>Array.isArray(e)&&t.find((i)=>!e.includes(i))===void 0}},doesNotHaveTags:{caption:"does not have tags",makeTest:(n)=>{let t=n.split(/[\s,]/).map((e)=>e.trim().toLocaleLowerCase()).filter((e)=>e!=="");return console.log(t),(e)=>Array.isArray(e)&&t.find((i)=>e.includes(i))===void 0}},equals:{caption:"=",negative:"≠",makeTest:(n)=>{if(isNaN(Number(n)))return n=String(n).toLocaleLowerCase(),(e)=>String(e).toLocaleLowerCase()===n;let t=Number(n);return(e)=>Number(e)===t}},after:{caption:"is after",negative:"is before",makeTest:(n)=>{let t=new Date(n);return(e)=>new Date(e)>t}},greaterThan:{caption:">",negative:"≤",makeTest:(n)=>{if(!isNaN(Number(n))){let t=Number(n);return(e)=>Number(e)>t}return n=n.toLocaleLowerCase(),(t)=>String(t).toLocaleLowerCase()>n}},truthy:{caption:"is true/non-empty/non-zero",negative:"is false/empty/zero",needsValue:!1,makeTest:()=>(n)=>!!n},isTrue:{caption:"= true",needsValue:!1,makeTest:()=>(n)=>n===!0},isFalse:{caption:"= false",needsValue:!1,makeTest:()=>(n)=>n===!1}},Z2={description:"anything",test:()=>!0};function Fa(n){return n.options[n.selectedIndex].text}class hi extends _{fields=[];filters=ci;haystack="*";condition="";needle="";content=()=>[ja({part:"haystack"}),O.chevronDown(),ja({part:"condition"}),O.chevronDown(),B2({part:"needle",type:"search"}),Q2({part:"padding"}),ri({part:"remove",title:"delete"},O.trash())];filter=Z2;constructor(){super();this.initAttributes("haystack","condition","needle")}get state(){let{haystack:n,needle:t,condition:e}=this.parts;return{haystack:n.value,needle:t.value,condition:e.value}}set state(n){Object.assign(this,n)}buildFilter=()=>{let{haystack:n,condition:t,needle:e}=this.parts,i=t.value.startsWith("~"),a=i?t.value.slice(1):t.value,s=this.filters[a];e.hidden=s.needsValue===!1;let o=s.needsValue===!1?s.makeTest(void 0):s.makeTest(e.value),l=n.value,r;if(l!=="*")r=i?(p)=>!o(p[l]):(p)=>o(p[l]);else r=i?(p)=>Object.values(p).find((m)=>!o(m))!==void 0:(p)=>Object.values(p).find((m)=>o(m))!==void 0;let h=s.needsValue!==!1?` "${e.value}"`:"",d=`${Fa(n)} ${Fa(t)}${h}`;this.filter={description:d,test:r},this.parentElement?.dispatchEvent(new Event("change"))};connectedCallback(){super.connectedCallback();let{haystack:n,condition:t,needle:e,remove:i}=this.parts;n.addEventListener("change",this.buildFilter),t.addEventListener("change",this.buildFilter),e.addEventListener("input",this.buildFilter),n.value=this.haystack,t.value=this.condition,e.value=this.needle,i.addEventListener("click",()=>{let{parentElement:a}=this;this.remove(),a?.dispatchEvent(new Event("change"))})}render(){super.render();let{haystack:n,condition:t,needle:e}=this.parts;n.textContent="",n.append(Ee("any field",{value:"*"}),...this.fields.map((a)=>{let s=a.name||a.prop;return Ee(`${s}`,{value:a.prop})})),t.textContent="";let i=Object.keys(this.filters).map((a)=>{let s=this.filters[a];return s.negative!==void 0?[Ee(s.caption,{value:a}),Ee(s.negative,{value:"~"+a})]:Ee(s.caption,{value:a})}).flat();if(t.append(...i),this.haystack!=="")n.value=this.haystack;if(this.condition!=="")t.value=this.condition;if(this.needle!=="")e.value=this.needle;this.buildFilter()}}var rt=hi.elementCreator({tag:"xin-filter-part",styleSpec:{":host":{display:"flex"},':host svg[class^="icon-"]:':{height:"var(--font-size, 16px)",verticalAlign:"middle",fill:"var(--text-color)",pointerEvents:"none"},':host [part="haystack"], :host [part="condition"]':{flex:"1"},':host [part="needle"]':{flex:2},':host [hidden]+[part="padding"]':{display:"block",content:" ",flex:"1 1 auto"}}});class di extends _{_fields=[];get fields(){return this._fields}set fields(n){this._fields=n,this.queueRender()}get state(){let{filterContainer:n}=this.parts;return[...n.children].map((t)=>t.state)}set state(n){let{fields:t,filters:e}=this,{filterContainer:i}=this.parts;i.textContent="";for(let a of n)i.append(rt({fields:t,filters:e,...a}))}filter=Oa;description=La;addFilter=()=>{let{fields:n,filters:t}=this,{filterContainer:e}=this.parts;e.append(rt({fields:n,filters:t}))};content=()=>[ri({part:"add",title:"add filter condition",onClick:this.addFilter,class:"round"},O.plus()),K2({part:"filterContainer"}),ri({part:"reset",title:"reset filter",onClick:this.reset},O.x())];filters=ci;reset=()=>{let{fields:n,filters:t}=this,{filterContainer:e}=this.parts;this.description=La,this.filter=Oa,e.textContent="",e.append(rt({fields:n,filters:t})),this.dispatchEvent(new Event("change"))};buildFilter=()=>{let{filterContainer:n}=this.parts;if(n.children.length===0){this.reset();return}let t=[...n.children].map((i)=>i.filter),e=t.map((i)=>i.test);this.description=t.map((i)=>i.description).join(", "),this.filter=(i)=>i.filter((a)=>e.find((s)=>s(a)===!1)===void 0),this.dispatchEvent(new Event("change"))};connectedCallback(){super.connectedCallback();let{filterContainer:n}=this.parts;n.addEventListener("change",this.buildFilter),this.reset()}render(){super.render()}}var X2=di.elementCreator({tag:"xin-filter",styleSpec:{":host":{height:"auto",display:"grid",gridTemplateColumns:"32px calc(100% - 64px) 32px",alignItems:"center"},':host [part="filterContainer"]':{display:"flex",flexDirection:"column",alignItems:"stretch",flex:"1 1 auto"},':host [part="add"], :host [part="reset"]':{"--button-size":"var(--touch-size, 32px)",borderRadius:"999px",height:"var(--button-size)",lineHeight:"var(--button-size)",margin:"0",padding:"0",textAlign:"center",width:"var(--button-size)",flex:"0 0 var(--button-size)"}}});/*!
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
*/var{form:k2,slot:ui,xinSlot:Ia,label:n0,input:e0,span:t0}=$;function Gn(n,t,e){if(e!==""&&e!==!1)n.setAttribute(t,e);else n.removeAttribute(t)}function i0(n){switch(n.type){case"checkbox":return n.checked;case"radio":{let t=n.parentElement?.querySelector(`input[type="radio"][name="${n.name}"]:checked`);return t?t.value:null}case"range":case"number":return Number(n.value);default:return Array.isArray(n.value)&&n.value.length===0?null:n.value}}function Da(n,t){if(!(n instanceof HTMLElement));else if(n instanceof HTMLInputElement)switch(n.type){case"checkbox":n.checked=t;break;case"radio":n.checked=t===n.value;break;default:n.value=String(t||"")}else if(t!=null||n.value!=null)n.value=String(t||"")}class ct extends _{caption="";key="";type="";optional=!1;pattern="";placeholder="";min="";max="";step="";fixedPrecision=-1;value=null;content=n0(Ia({part:"caption"}),t0({part:"field"},Ia({part:"input",name:"input"}),e0({part:"valueHolder"})));constructor(){super();this.initAttributes("caption","key","type","optional","pattern","placeholder","min","max","step","fixedPrecision","prefix","suffix")}valueChanged=!1;handleChange=()=>{let{input:n,valueHolder:t}=this.parts,e=n.children[0]||t;if(e!==t)t.value=e.value;this.value=i0(e),this.valueChanged=!0;let i=this.closest("xin-form");if(i&&this.key!=="")switch(this.type){case"checkbox":i.fields[this.key]=e.checked;break;case"number":case"range":if(this.fixedPrecision>-1)e.value=Number(e.value).toFixed(this.fixedPrecision),i.fields[this.key]=Number(e.value);else i.fields[this.key]=Number(e.value);break;default:i.fields[this.key]=e.value}};initialize(n){let t=n.fields[this.key]!==void 0?n.fields[this.key]:this.value;if(t!=null&&t!==""){if(n.fields[this.key]==null)n.fields[this.key]=t;this.value=t}}connectedCallback(){super.connectedCallback();let{input:n,valueHolder:t}=this.parts,e=this.closest(je.tagName);if(e instanceof je)this.initialize(e);t.addEventListener("change",this.handleChange),n.addEventListener("change",this.handleChange,!0)}render(){if(this.valueChanged){this.valueChanged=!1;return}let{input:n,caption:t,valueHolder:e,field:i}=this.parts;if(t.textContent?.trim()==="")t.append(this.caption!==""?this.caption:this.key);if(this.type==="text"){n.textContent="";let a=$.textarea({value:this.value});if(this.placeholder)a.setAttribute("placeholder",this.placeholder);n.append(a)}else if(this.type==="color")n.textContent="",n.append(ii({value:this.value}));else if(n.children.length===0)Gn(e,"placeholder",this.placeholder),Gn(e,"type",this.type),Gn(e,"pattern",this.pattern),Gn(e,"min",this.min),Gn(e,"max",this.max),Gn(e,"step",this.step);if(Da(e,this.value),Da(n.children[0],this.value),this.prefix?i.setAttribute("prefix",this.prefix):i.removeAttribute("prefix"),this.suffix?i.setAttribute("suffix",this.suffix):i.removeAttribute("suffix"),e.classList.toggle("hidden",n.children.length>0),n.children.length>0)e.setAttribute("tabindex","-1");else e.removeAttribute("tabindex");n.style.display=n.children.length===0?"none":"",Gn(e,"required",!this.optional)}}class je extends _{context={};value={};get isValid(){return[...this.querySelectorAll("*")].filter((t)=>t.required!==void 0).find((t)=>!t.reportValidity())===void 0}static styleSpec={":host":{display:"flex",flexDirection:"column"},":host::part(header), :host::part(footer)":{display:"flex"},":host::part(content)":{display:"flex",flexDirection:"column",overflow:"hidden auto",height:"100%",width:"100%",position:"relative",boxSizing:"border-box"},":host form":{display:"flex",flex:"1 1 auto",position:"relative",overflow:"hidden"}};content=[ui({part:"header",name:"header"}),k2({part:"form"},ui({part:"content"})),ui({part:"footer",name:"footer"})];getField=(n)=>{return this.querySelector(`xin-field[key="${n}"]`)};get fields(){if(typeof this.value==="string")try{this.value=JSON.parse(this.value)}catch(e){console.log("<xin-form> could not use its value, expects valid JSON"),this.value={}}let{getField:n}=this,t=this.dispatchEvent.bind(this);return new Proxy(this.value,{get(e,i){return e[i]},set(e,i,a){if(e[i]!==a){e[i]=a;let s=n(i);if(s)s.value=a;t(new Event("change"))}return!0}})}set fields(n){let t=[...this.querySelectorAll(ct.tagName)];for(let e of t)e.value=n[e.key]}submit=()=>{this.parts.form.dispatchEvent(new Event("submit"))};handleSubmit=(n)=>{n.preventDefault(),n.stopPropagation(),this.submitCallback(this.value,this.isValid)};submitCallback=(n,t)=>{console.log("override submitCallback to handle this data",{value:n,isValid:t})};connectedCallback(){super.connectedCallback();let{form:n}=this.parts;n.addEventListener("submit",this.handleSubmit)}}var a0=ct.elementCreator({tag:"xin-field",styleSpec:{':host [part="field"]':{position:"relative",display:"flex",alignItems:"center",gap:q.prefixSuffixGap("8px")},':host [part="field"][prefix]::before':{content:"attr(prefix)"},':host [part="field"][suffix]::after':{content:"attr(suffix)"},':host [part="field"] > *, :host [part="input"] > *':{width:"100%"},":host textarea":{resize:"none"},':host input[type="checkbox"]':{width:"fit-content"},":host .hidden":{position:"absolute",pointerEvents:"none",opacity:0}}}),s0=je.elementCreator({tag:"xin-form"});/*!
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
*/function qa(){return navigator.getGamepads().filter((t)=>t!==null).map((t)=>{let{id:e,axes:i,buttons:a}=t;return{id:e,axes:i,buttons:a.map((s,o)=>{let{pressed:l,value:r}=s;return{index:o,pressed:l,value:r}}).filter((s)=>s.pressed||s.value!==0).reduce((s,o)=>{return s[o.index]=o.value,s},{})}})}function o0(){let n=qa();return n.length===0?"no active gamepads":n.map(({id:t,axes:e,buttons:i})=>{let a=e.map((o)=>o.toFixed(2)).join(" "),s=Object.keys(i).map((o)=>`[${o}](${i[Number(o)].toFixed(2)})`).join(" ");return`${t}
${a}
${s}`}).join(`
`)}function l0(n){let t={};return n.input.onControllerAddedObservable.add((e)=>{e.onMotionControllerInitObservable.add((i)=>{let a={};i.getComponentIds().forEach((o)=>{let l=i.getComponent(o);if(a[o]={pressed:l.pressed},l.onButtonStateChangedObservable.add(()=>{a[o].pressed=l.pressed}),l.onAxisValueChangedObservable)a[o].axes=[],l.onAxisValueChangedObservable.add((r)=>{a[o].axes=r})}),t[i.handedness]=a})}),t}function r0(n){if(n===void 0||Object.keys(n).length===0)return"no xr inputs";return Object.keys(n).map((t)=>{let e=n[t],i=Object.keys(e).filter((a)=>e[a].pressed).join(" ");return`${t}
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
*/var{div:Un,slot:Ha,span:c0,button:h0}=$;class ht extends _{value=0;static makeTab(n,t,e){let i=t.querySelector('template[role="tab"]')?.content.cloneNode(!0)||c0(t.getAttribute("name"));return Un(i,{part:"tab",tabindex:0,role:"tab",ariaControls:e},t.hasAttribute("data-close")?h0({title:"close",class:"close"},O.x()):{})}static styleSpec={":host":{display:"flex",flexDirection:"column",position:"relative",overflow:"hidden",boxShadow:"none !important"},slot:{position:"relative",display:"block",flex:"1",overflow:"hidden",overflowY:"auto"},'slot[name="after-tabs"]':{flex:"0 0 auto"},"::slotted([hidden])":{display:"none !important"},":host::part(tabpanel)":{display:"flex",flexDirection:"column",overflowX:"auto"},":host::part(tabrow)":{display:"flex"},":host .tabs":{display:"flex",userSelect:"none",whiteSpace:"nowrap"},":host .tabs > div":{padding:`${w.spacing50} ${w.spacing}`,cursor:"default",display:"flex",alignItems:"baseline"},':host .tabs > [aria-selected="true"]':{"--text-color":w.xinTabsSelectedColor,color:w.textColor},":host .elastic":{flex:"1"},":host .border":{background:"var(--xin-tabs-bar-color, #ccc)"},":host .border > .selected":{content:" ",width:0,height:"var(--xin-tabs-bar-height, 2px)",background:w.xinTabsSelectedColor,transition:"ease-out 0.2s"},":host button.close":{fill:w.textColor,border:0,background:"transparent",textAlign:"center",marginLeft:w.spacing50,padding:0},":host button.close > svg":{height:"12px"}};onCloseTab=null;content=[Un({role:"tabpanel",part:"tabpanel"},Un({part:"tabrow"},Un({class:"tabs",part:"tabs"}),Un({class:"elastic"}),Ha({name:"after-tabs"})),Un({class:"border"},Un({class:"selected",part:"selected"}))),Ha()];constructor(){super();this.initAttributes("anne","example")}addTabBody(n,t=!1){if(!n.hasAttribute("name"))throw console.error("element has no name attribute",n),new Error("element has no name attribute");if(this.append(n),this.setupTabs(),t)this.value=this.bodies.length-1;this.queueRender()}removeTabBody(n){n.remove(),this.setupTabs(),this.queueRender()}keyTab=(n)=>{let{tabs:t}=this.parts,e=[...t.children].indexOf(n.target);switch(n.key){case"ArrowLeft":this.value=(e+Number(t.children.length)-1)%t.children.length,t.children[this.value].focus(),n.preventDefault();break;case"ArrowRight":this.value=(e+1)%t.children.length,t.children[this.value].focus(),n.preventDefault();break;case" ":this.pickTab(n),n.preventDefault();break;default:}};get bodies(){return[...this.children].filter((n)=>n.hasAttribute("name"))}pickTab=(n)=>{let{tabs:t}=this.parts,e=n.target,i=e.closest("button.close")!==null,a=e.closest(".tabs > div"),s=[...t.children].indexOf(a);if(i){let o=this.bodies[s];if(!this.onCloseTab||this.onCloseTab(o)!==!1)this.removeTabBody(this.bodies[s])}else if(s>-1)this.value=s};setupTabs=()=>{let{tabs:n}=this.parts,t=[...this.children].filter((e)=>!e.hasAttribute("slot")&&e.hasAttribute("name"));if(n.textContent="",this.value>=t.length)this.value=t.length-1;for(let e in t){let i=t[e],a=`${this.instanceId}-${e}`;i.id=a;let s=ht.makeTab(this,i,a);n.append(s)}};connectedCallback(){super.connectedCallback();let{tabs:n}=this.parts;n.addEventListener("click",this.pickTab),n.addEventListener("keydown",this.keyTab),this.setupTabs()}onResize(){this.queueRender()}render(){let{tabs:n,selected:t}=this.parts,e=this.bodies;for(let i=0;i<e.length;i++){let a=e[i],s=n.children[i];if(this.value===Number(i))s.setAttribute("aria-selected","true"),t.style.marginLeft=`${s.offsetLeft-n.offsetLeft}px`,t.style.width=`${s.offsetWidth}px`,a.toggleAttribute("hidden",!1);else s.toggleAttribute("aria-selected",!1),a.toggleAttribute("hidden",!0)}}}var pi=ht.elementCreator({tag:"xin-tabs"});/*!
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
*/var{div:dt,xinSlot:d0,style:u0,button:Yn,h4:p0,pre:g0}=$,f0=(async()=>{}).constructor;class ut extends _{persistToDom=!1;prettier=!1;prefix="lx";storageKey="live-example-payload";context={};uuid=crypto.randomUUID();remoteId="";lastUpdate=0;interval;static insertExamples(n,t={}){let e=[...n.querySelectorAll(".language-html,.language-js,.language-css")].filter((i)=>!i.closest(ut.tagName)).map((i)=>({block:i.parentElement,language:i.classList[0].split("-").pop(),code:i.innerText}));for(let i=0;i<e.length;i+=1){let a=[e[i]];while(i<e.length-1&&e[i].block.nextElementSibling===e[i+1].block)a.push(e[i+1]),i+=1;let s=pt({context:t});a[0].block.parentElement.insertBefore(s,a[0].block),a.forEach((o)=>{switch(o.language){case"js":s.js=o.code;break;case"html":s.html=o.code;break;case"css":s.css=o.code;break}o.block.remove()}),s.showDefaultTab()}}constructor(){super();this.initAttributes("persistToDom","prettier")}get activeTab(){let{editors:n}=this.parts;return[...n.children].find((t)=>t.getAttribute("hidden")===null)}getEditorValue(n){return this.parts[n].value}setEditorValue(n,t){let e=this.parts[n];e.value=t}get css(){return this.getEditorValue("css")}set css(n){this.setEditorValue("css",n)}get html(){return this.getEditorValue("html")}set html(n){this.setEditorValue("html",n)}get js(){return this.getEditorValue("js")}set js(n){this.setEditorValue("js",n)}updateUndo=()=>{let{activeTab:n}=this,{undo:t,redo:e}=this.parts;if(n instanceof Wn&&n.editor!==void 0){let i=n.editor.session.getUndoManager();t.disabled=!i.hasUndo(),e.disabled=!i.hasRedo()}else t.disabled=!0,e.disabled=!0};undo=()=>{let{activeTab:n}=this;if(n instanceof Wn)n.editor.undo()};redo=()=>{let{activeTab:n}=this;if(n instanceof Wn)n.editor.redo()};get isMaximized(){return this.classList.contains("-maximize")}flipLayout=()=>{this.classList.toggle("-vertical")};exampleMenu=()=>{yn({target:this.parts.exampleWidgets,width:"auto",menuItems:[{icon:"edit",caption:"view/edit code",action:this.showCode},{icon:"editDoc",caption:"view/edit code in a new window",action:this.openEditorWindow},null,{icon:this.isMaximized?"minimize":"maximize",caption:this.isMaximized?"restore preview":"maximize preview",action:this.toggleMaximize}]})};content=()=>[dt({part:"example"},u0({part:"style"}),Yn({title:"example menu",part:"exampleWidgets",onClick:this.exampleMenu},O.code())),dt({class:"code-editors",part:"codeEditors",hidden:!0},p0("Code"),Yn({title:"close code",class:"transparent close-button",onClick:this.closeCode},O.x()),pi({part:"editors",onChange:this.updateUndo},Te({name:"js",mode:"javascript",part:"js"}),Te({name:"html",mode:"html",part:"html"}),Te({name:"css",mode:"css",part:"css"}),dt({slot:"after-tabs",class:"row"},Yn({title:"undo",part:"undo",class:"transparent",onClick:this.undo},O.undo()),Yn({title:"redo",part:"redo",class:"transparent",onClick:this.redo},O.redo()),Yn({title:"flip direction",class:"transparent",onClick:this.flipLayout},O.sidebar()),Yn({title:"copy as markdown",class:"transparent",onClick:this.copy},O.copy()),Yn({title:"reload",class:"transparent",onClick:this.refreshRemote},O.refresh())))),d0({part:"sources",hidden:!0})];connectedCallback(){super.connectedCallback();let{sources:n}=this.parts;this.initFromElements([...n.children]),addEventListener("storage",this.remoteChange),this.interval=setInterval(this.remoteChange,500),this.undoInterval=setInterval(this.updateUndo,250)}disconnectedCallback(){super.disconnectedCallback();let{storageKey:n,remoteKey:t}=this;clearInterval(this.interval),clearInterval(this.undoInterval),localStorage.setItem(n,JSON.stringify({remoteKey:t,sentAt:Date.now(),close:!0}))}copy=()=>{let n=this.js!==""?"```js\n"+this.js.trim()+"\n```\n":"",t=this.html!==""?"```html\n"+this.html.trim()+"\n```\n":"",e=this.css!==""?"```css\n"+this.css.trim()+"\n```\n":"";navigator.clipboard.writeText(n+t+e)};toggleMaximize=()=>{this.classList.toggle("-maximize")};get remoteKey(){return this.remoteId!==""?this.prefix+"-"+this.remoteId:this.prefix+"-"+this.uuid}remoteChange=(n)=>{let t=localStorage.getItem(this.storageKey);if(n instanceof StorageEvent&&n.key!==this.storageKey)return;if(t===null)return;let{remoteKey:e,sentAt:i,css:a,html:s,js:o,close:l}=JSON.parse(t);if(i<=this.lastUpdate)return;if(e!==this.remoteKey)return;if(l===!0)window.close();console.log("received new code",i,this.lastUpdate),this.lastUpdate=i,this.css=a,this.html=s,this.js=o,this.refresh()};showCode=()=>{this.classList.add("-maximize"),this.classList.toggle("-vertical",this.offsetHeight>this.offsetWidth),this.parts.codeEditors.hidden=!1};closeCode=()=>{if(this.remoteId!=="")window.close();else this.classList.remove("-maximize"),this.parts.codeEditors.hidden=!0};openEditorWindow=()=>{let{storageKey:n,remoteKey:t,css:e,html:i,js:a,uuid:s,prefix:o}=this,l=location.href.split("?")[0]+`?${o}=${s}`;localStorage.setItem(n,JSON.stringify({remoteKey:t,sentAt:Date.now(),css:e,html:i,js:a})),window.open(l)};refreshRemote=()=>{let{remoteKey:n,css:t,html:e,js:i}=this;localStorage.setItem(this.storageKey,JSON.stringify({remoteKey:n,sentAt:Date.now(),css:t,html:e,js:i}))};updateSources=()=>{if(this.persistToDom){let{sources:n}=this.parts;n.innerText="";for(let t of["js","css","html"])if(this[t])n.append(g0({class:`language-${t}`,innerHTML:this[t]}))}};refresh=()=>{if(this.remoteId!=="")return;let{example:n,style:t}=this.parts,e=dt({class:"preview"});e.innerHTML=this.html,t.innerText=this.css;let i=n.querySelector(".preview");if(i)i.replaceWith(e);else n.insertBefore(e,this.parts.exampleWidgets);let a={preview:e,...this.context};try{if(new f0(...Object.keys(a),this.js)(...Object.values(a)).catch((o)=>console.error(o)),this.persistToDom)this.updateSources()}catch(s){console.error(s),window.alert(`Error: ${s}, the console may have more information…`)}};initFromElements(n){for(let t of n){t.hidden=!0;let[e,...i]=t.innerHTML.split(`
`);if(["js","html","css"].includes(e)){let a=i.filter((o)=>o.trim()!=="").map((o)=>o.match(/^\s*/)[0].length).sort()[0],s=(a>0?i.map((o)=>o.substring(a)):i).join(`
`);this.parts[e].value=s}else{let a=["js","html","css"].find((s)=>t.matches(`.language-${s}`));if(a)this.parts[a].value=a==="html"?t.innerHTML:t.innerText}}}showDefaultTab(){let{editors:n}=this.parts;if(this.js!=="")n.value=0;else if(this.html!=="")n.value=1;else if(this.css!=="")n.value=2}render(){if(super.render(),this.remoteId!==""){let n=localStorage.getItem(this.storageKey);if(n!==null){let{remoteKey:t,sentAt:e,css:i,html:a,js:s}=JSON.parse(n);if(this.remoteKey!==t)return;this.lastUpdate=e,this.css=i,this.html=a,this.js=s,this.parts.example.hidden=!0,this.parts.codeEditors.hidden=!1,this.classList.add("-maximize"),this.updateUndo()}}else this.refresh()}}var pt=ut.elementCreator({tag:"xin-example",styleSpec:{":host":{"--xin-example-height":"320px","--code-editors-bar-bg":"#777","--code-editors-bar-color":"#fff","--widget-bg":"#fff8","--widget-color":"#000",position:"relative",display:"flex",height:"var(--xin-example-height)",background:"var(--background)",boxSizing:"border-box"},":host.-maximize":{position:"fixed",left:"0",top:"0",height:"100vh",width:"100vw",margin:"0 !important"},".-maximize":{zIndex:101},":host.-vertical":{flexDirection:"column"},":host .icon-sidebar":{transform:"rotateZ(180deg)"},":host.-vertical .icon-sidebar":{transform:"rotateZ(270deg)"},":host.-maximize .hide-if-maximized, :host:not(.-maximize) .show-if-maximized":{display:"none"},':host [part="example"]':{flex:"1 1 50%",height:"100%",position:"relative",overflowX:"auto"},":host .preview":{height:"100%",position:"relative",overflow:"hidden",background:`#f7f7f7 url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 8 8" fill-opacity=".02" ><rect x="4" width="4" height="4" /><rect y="4" width="4" height="4" /></svg>')`},':host [part="editors"]':{flex:"1 1 200px",height:"100%",position:"relative"},':host [part="exampleWidgets"]':{position:"absolute",left:"2px",bottom:"2px","--widget-color":"var(--brand-color)",background:"var(--widget-bg)",borderRadius:"5px",width:"44px",height:"44px",lineHeight:"44px",zIndex:"100"},':host [part="exampleWidgets"] svg':{fill:"var(--widget-color)"},":host .code-editors":{overflow:"hidden",background:"white",position:"relative",top:"0",right:"0",flex:"1 1 50%",height:"100%",flexDirection:"column",zIndex:"10"},":host .code-editors:not([hidden])":{display:"flex"},":host .code-editors > h4":{padding:"5px",margin:"0",textAlign:"center",background:"var(--code-editors-bar-bg)",color:"var(--code-editors-bar-color)",cursor:"move"},":host .close-button":{position:"absolute",top:"0",right:"0",color:"var(--code-editors-bar-color)"},":host button.transparent, :host .sizer":{width:"32px",height:"32px",lineHeight:"32px",textAlign:"center",padding:"0",margin:"0"},":host .sizer":{cursor:"nwse-resize"}}});function m0(n){let t=[...n.querySelectorAll("pre")].filter((e)=>["js","html","css","json"].includes(e.innerText.split(`
`)[0]));for(let e=0;e<t.length;e++){let i=[t[e]];while(t[e].nextElementSibling===t[e+1])i.push(t[e+1]),e+=1;let a=pt();n.insertBefore(a,i[0]),a.initFromElements(i)}}var b0=new URL(window.location.href).searchParams,_a=b0.get("lx");if(_a)document.title+=" [code editor]",document.body.textContent="",document.body.append(pt({remoteId:_a}));/*!
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
*/function gt(n,t=!0){return(e,i)=>{let a=n(e),s=n(i);for(let o in a)if(a[o]!==s[o])return(Array.isArray(t)?t[o]!==!1:t)?a[o]>s[o]?1:-1:a[o]>s[o]?-1:1;return 0}}/*!
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
*/var{button:v0,span:$a,input:y0}=$,Pa=(n,t)=>{return!!n.find((e)=>{if(e===null||t==null)return!1;else if(Array.isArray(e))return Pa(e,t);else if(e.value===t||e===t)return!0})};class Rn extends _{editable=!1;showIcon=!1;hideCaption=!1;options="";value="";placeholder="";setValue=(n,t=!1)=>{if(this.value!==n)this.value=n,this.queueRender(!0);if(t)this.dispatchEvent(new Event("action"))};getValue=()=>this.value;get selectOptions(){return typeof this.options==="string"?this.options.split(",").map((n)=>n.trim()||null):this.options}buildOptionMenuItem=(n)=>{if(n===null)return null;let{setValue:t,getValue:e}=this,i,a,s;if(typeof n==="string")a=s=n;else({icon:i,caption:a,value:s}=n);let{options:o}=n;if(o)return{icon:i,caption:a,checked:()=>Pa(o,e()),menuItems:o.map(this.buildOptionMenuItem)};return{icon:i,caption:a,checked:()=>e()===s,action:typeof s==="function"?async()=>{let l=await s();if(l!==void 0)t(l,!0)}:()=>{if(typeof s==="string")t(s,!0)}}};get optionsMenu(){let n=this.selectOptions.map(this.buildOptionMenuItem);if(this.filter==="")return n;let t=(e)=>{if(e===null)return!0;else if(e.menuItems)return e.menuItems=e.menuItems.filter(t),e.menuItems.length>0;else return e.caption.toLocaleLowerCase().includes(this.filter)};return n.filter(t)}handleChange=(n)=>{let{value:t}=this.parts,e=t.value||"";if(this.value!==String(e))this.value=e,this.dispatchEvent(new Event("change"));this.filter="",n.stopPropagation(),n.preventDefault()};handleKey=(n)=>{if(n.key==="Enter")n.preventDefault()};filterMenu=Tt(()=>{this.filter=this.parts.value.value.toLocaleLowerCase(),jn(0),this.popOptions()});popOptions=(n)=>{if(n&&n.type==="click")this.filter="";this.poppedOptions=this.optionsMenu,yn({target:this,menuItems:this.poppedOptions})};content=()=>[v0({onClick:this.popOptions},$a(),y0({part:"value",value:this.value,tabindex:0,onKeydown:this.handleKey,onInput:this.filterMenu,onChange:this.handleChange}),O.chevronDown())];constructor(){super();this.initAttributes("options","editable","placeholder","showIcon","hideCaption")}get allOptions(){let n=[];function t(e){for(let i of e)if(typeof i==="string")n.push({caption:i,value:i});else if(i?.value)n.push(i);else if(i?.options)t(i.options)}return t(this.selectOptions),n}findOption(){return this.allOptions.find((t)=>t.value===this.value)||{caption:this.value,value:this.value}}render(){super.render();let{value:n}=this.parts,t=n.previousElementSibling,e=this.findOption(),i=$a();if(n.value=e.caption,e.icon)if(e.icon instanceof HTMLElement)i=e.icon.cloneNode(!0);else i=O[e.icon]();t.replaceWith(i),n.setAttribute("placeholder",this.placeholder),n.style.pointerEvents=this.editable?"":"none",n.readOnly=!this.editable}}var Oe=Rn.elementCreator({tag:"xin-select",styleSpec:{":host":{"--gap":"8px","--touch-size":"44px","--padding":"0 8px","--value-padding":"0 8px","--icon-width":"24px","--fieldWidth":"140px",display:"inline-block",position:"relative"},":host button":{display:"grid",alignItems:"center",gap:w.gap,textAlign:"left",height:w.touchSize,padding:w.padding,gridTemplateColumns:`auto ${w.iconWidth}`,position:"relative"},":host[show-icon] button":{gridTemplateColumns:`${w.iconWidth} auto ${w.iconWidth}`},":host[hide-caption] button":{gridTemplateColumns:`${w.iconWidth} ${w.iconWidth}`},":host:not([show-icon]) button > :first-child":{display:"none"},":host[hide-caption] button > :nth-child(2)":{display:"none"},':host [part="value"]':{width:w.fieldWidth,padding:w.valuePadding,height:w.touchSize,lineHeight:w.touchSize,boxShadow:"none",whiteSpace:"nowrap",outline:"none",background:"transparent"},':host [part="value"]:not(:focus)':{overflow:"hidden",textOverflow:"ellipsis",background:"transparent"}}});/*!
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
*/var{span:Na}=$,{i18n:tn}=Et({i18n:{locale:window.navigator.language,locales:[window.navigator.language],languages:[window.navigator.language],emoji:[""],stringMap:{},localeOptions:[{icon:Na(),caption:window.navigator.language,value:window.navigator.language}]}});In.localeOptions={toDOM(n,t){if(n instanceof Rn)n.options=t}};var gi=()=>{let n=[...document.querySelectorAll(ft.tagName)];for(let t of n)t.render()},x0=gt((n)=>[n.caption.toLocaleLowerCase()]);function w0(n){let[t,,e,i,...a]=n.split(`
`).map((s)=>s.split("\t"));if(t&&e&&i&&a){if(tn.locales=t,tn.languages=e,tn.emoji=i,tn.stringMap=a.reduce((s,o)=>{return s[o[0].toLocaleLowerCase()]=o,s},{}),tn.localeOptions=t.map((s,o)=>({icon:Na({title:t[o]},i[o]),caption:e[o],value:s})).sort(x0),!tn.locales.includes(tn.locale.valueOf())){let s=tn.locale.substring(0,2);tn.locale=tn.locales.find((o)=>o.substring(0,2)===s)||tn.locales[0]}gi()}}function fi(n){let t=tn.locales.indexOf(tn.locale.valueOf());if(t>-1){let e=tn.stringMap[n.toLocaleLowerCase()],i=e&&e[t];if(i)n=n.toLocaleLowerCase()===n?i.toLocaleLowerCase():i}return n}class mi extends _{hideCaption=!1;content=()=>{return Oe({part:"select",showIcon:!0,title:fi("Language"),bindValue:tn.locale,bindLocaleOptions:tn.localeOptions})};constructor(){super();this.initAttributes("hideCaption")}connectedCallback(){super.connectedCallback(),this.parts.select.value=tn.locale,this.parts.select.addEventListener("change",gi)}render(){super.render(),this.parts.select.toggleAttribute("hide-caption",this.hideCaption)}}var M0=mi.elementCreator({tag:"xin-locale-picker"});class ft extends _{contents=()=>$.xinSlot();refString="";render(){if(super.render(),!this.refString)this.refString=this.textContent||"";this.textContent=fi(this.refString)}}var z0=ft.elementCreator({tag:"xin-localized",styleSpec:{":host":{pointerEvents:"none"}}});/*!
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
*/var Va=[{name:"streets",url:"mapbox://styles/mapbox/streets-v10"},{name:"outdoors",url:"mapbox://styles/mapbox/outdoors-v10"},{name:"light",url:"mapbox://styles/mapbox/light-v9"},{name:"dark",url:"mapbox://styles/mapbox/dark-v9"},{name:"satellite",url:"mapbox://styles/mapbox/satellite-v9"},{name:"sateliite + streets",url:"mapbox://styles/mapbox/satellite-streets-v10"},{name:"preview day",url:"mapbox://styles/mapbox/navigation-preview-day-v2"},{name:"preview night",url:"mapbox://styles/mapbox/navigation-preview-night-v2"},{name:"guidance day",url:"mapbox://styles/mapbox/navigation-guidance-day-v2"},{name:"guidance night",url:"mapbox://styles/mapbox/navigation-guidance-night-v2"}],{div:S0}=$;class Jn extends _{coords="65.01715565258993,25.48081004203459,12";content=S0({style:{width:"100%",height:"100%"}});get map(){return this._map}mapStyle=Va[0].url;token="";static mapboxCSSAvailable;static mapboxAvailable;_map;static styleSpec={":host":{display:"inline-block",position:"relative",width:"400px",height:"400px",textAlign:"left"}};constructor(){super();if(this.initAttributes("coords","token","mapStyle"),Jn.mapboxCSSAvailable===void 0)Jn.mapboxCSSAvailable=nt("https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css").catch((n)=>{console.error("failed to load mapbox-gl.css",n)}),Jn.mapboxAvailable=cn("https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.js").catch((n)=>{console.error("failed to load mapbox-gl.js",n)})}connectedCallback(){if(super.connectedCallback(),!this.token)console.error("mapbox requires an access token which you can provide via the token attribute")}render(){if(super.render(),!this.token)return;let{div:n}=this.parts,[t,e,i]=this.coords.split(",").map((a)=>Number(a));if(this.map)this.map.remove();Jn.mapboxAvailable.then(({mapboxgl:a})=>{console.log("%cmapbox may complain about missing css -- don't panic!","background: orange; color: black; padding: 0 5px;"),a.accessToken=this.token,this._map=new a.Map({container:n,style:this.mapStyle,zoom:i,center:[e,t]}),this._map.on("render",()=>this._map.resize())})}}var C0=Jn.elementCreator({tag:"xin-map"});function bi(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}var On=bi();function Ja(n){On=n}var Ka=/[&<>"']/,T0=new RegExp(Ka.source,"g"),Ba=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,A0=new RegExp(Ba.source,"g"),E0={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Wa=(n)=>E0[n];function on(n,t){if(t){if(Ka.test(n))return n.replace(T0,Wa)}else if(Ba.test(n))return n.replace(A0,Wa);return n}var j0=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Qa(n){return n.replace(j0,(t,e)=>{if(e=e.toLowerCase(),e==="colon")return":";if(e.charAt(0)==="#")return e.charAt(1)==="x"?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1));return""})}var O0=/(^|[^\[])\^/g;function B(n,t){n=typeof n==="string"?n:n.source,t=t||"";let e={replace:(i,a)=>{return a=a.source||a,a=a.replace(O0,"$1"),n=n.replace(i,a),e},getRegex:()=>{return new RegExp(n,t)}};return e}var L0=/[^\w:]/g,F0=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Ga(n,t,e){if(n){let i;try{i=decodeURIComponent(Qa(e)).replace(L0,"").toLowerCase()}catch(a){return null}if(i.indexOf("javascript:")===0||i.indexOf("vbscript:")===0||i.indexOf("data:")===0)return null}if(t&&!F0.test(e))e=H0(t,e);try{e=encodeURI(e).replace(/%25/g,"%")}catch(i){return null}return e}var mt={},I0=/^[^:]+:\/*[^/]*$/,D0=/^([^:]+:)[\s\S]*$/,q0=/^([^:]+:\/*[^/]*)[\s\S]*$/;function H0(n,t){if(!mt[" "+n])if(I0.test(n))mt[" "+n]=n+"/";else mt[" "+n]=bt(n,"/",!0);n=mt[" "+n];let e=n.indexOf(":")===-1;if(t.substring(0,2)==="//"){if(e)return t;return n.replace(D0,"$1")+t}else if(t.charAt(0)==="/"){if(e)return t;return n.replace(q0,"$1")+t}else return n+t}var vt={exec:function n(){}};function Ua(n,t){let e=n.replace(/\|/g,(s,o,l)=>{let r=!1,h=o;while(--h>=0&&l[h]==="\\")r=!r;if(r)return"|";else return" |"}),i=e.split(/ \|/),a=0;if(!i[0].trim())i.shift();if(i.length>0&&!i[i.length-1].trim())i.pop();if(i.length>t)i.splice(t);else while(i.length<t)i.push("");for(;a<i.length;a++)i[a]=i[a].trim().replace(/\\\|/g,"|");return i}function bt(n,t,e){let i=n.length;if(i===0)return"";let a=0;while(a<i){let s=n.charAt(i-a-1);if(s===t&&!e)a++;else if(s!==t&&e)a++;else break}return n.slice(0,i-a)}function _0(n,t){if(n.indexOf(t[1])===-1)return-1;let e=n.length,i=0,a=0;for(;a<e;a++)if(n[a]==="\\")a++;else if(n[a]===t[0])i++;else if(n[a]===t[1]){if(i--,i<0)return a}return-1}function $0(n,t){if(!n||n.silent)return;if(t)console.warn("marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async");if(n.sanitize||n.sanitizer)console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");if(n.highlight||n.langPrefix!=="language-")console.warn("marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight.");if(n.mangle)console.warn("marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`.");if(n.baseUrl)console.warn("marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url.");if(n.smartypants)console.warn("marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants.");if(n.xhtml)console.warn("marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml.");if(n.headerIds||n.headerPrefix)console.warn("marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`.")}function Ya(n,t,e,i){let a=t.href,s=t.title?on(t.title):null,o=n[1].replace(/\\([\[\]])/g,"$1");if(n[0].charAt(0)!=="!"){i.state.inLink=!0;let l={type:"link",raw:e,href:a,title:s,text:o,tokens:i.inlineTokens(o)};return i.state.inLink=!1,l}return{type:"image",raw:e,href:a,title:s,text:on(o)}}function P0(n,t){let e=n.match(/^(\s+)(?:```)/);if(e===null)return t;let i=e[1];return t.split(`
`).map((a)=>{let s=a.match(/^\s+/);if(s===null)return a;let[o]=s;if(o.length>=i.length)return a.slice(i.length);return a}).join(`
`)}class Fe{constructor(n){this.options=n||On}space(n){let t=this.rules.block.newline.exec(n);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(n){let t=this.rules.block.code.exec(n);if(t){let e=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:!this.options.pedantic?bt(e,`
`):e}}}fences(n){let t=this.rules.block.fences.exec(n);if(t){let e=t[0],i=P0(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:i}}}heading(n){let t=this.rules.block.heading.exec(n);if(t){let e=t[2].trim();if(/#$/.test(e)){let i=bt(e,"#");if(this.options.pedantic)e=i.trim();else if(!i||/ $/.test(i))e=i.trim()}return{type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(n){let t=this.rules.block.hr.exec(n);if(t)return{type:"hr",raw:t[0]}}blockquote(n){let t=this.rules.block.blockquote.exec(n);if(t){let e=t[0].replace(/^ *>[ \t]?/gm,""),i=this.lexer.state.top;this.lexer.state.top=!0;let a=this.lexer.blockTokens(e);return this.lexer.state.top=i,{type:"blockquote",raw:t[0],tokens:a,text:e}}}list(n){let t=this.rules.block.list.exec(n);if(t){let e,i,a,s,o,l,r,h,d,p,m,z,x=t[1].trim(),C=x.length>1,c={type:"list",raw:"",ordered:C,start:C?+x.slice(0,-1):"",loose:!1,items:[]};if(x=C?`\\d{1,9}\\${x.slice(-1)}`:`\\${x}`,this.options.pedantic)x=C?x:"[*+-]";let g=new RegExp(`^( {0,3}${x})((?:[	 ][^\\n]*)?(?:\\n|$))`);while(n){if(z=!1,!(t=g.exec(n)))break;if(this.rules.block.hr.test(n))break;if(e=t[0],n=n.substring(e.length),h=t[2].split(`
`,1)[0].replace(/^\t+/,(u)=>" ".repeat(3*u.length)),d=n.split(`
`,1)[0],this.options.pedantic)s=2,m=h.trimLeft();else s=t[2].search(/[^ ]/),s=s>4?1:s,m=h.slice(s),s+=t[1].length;if(l=!1,!h&&/^ *$/.test(d))e+=d+`
`,n=n.substring(d.length+1),z=!0;if(!z){let u=new RegExp(`^ {0,${Math.min(3,s-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),b=new RegExp(`^ {0,${Math.min(3,s-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),v=new RegExp(`^ {0,${Math.min(3,s-1)}}(?:\`\`\`|~~~)`),y=new RegExp(`^ {0,${Math.min(3,s-1)}}#`);while(n){if(p=n.split(`
`,1)[0],d=p,this.options.pedantic)d=d.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ");if(v.test(d))break;if(y.test(d))break;if(u.test(d))break;if(b.test(n))break;if(d.search(/[^ ]/)>=s||!d.trim())m+=`
`+d.slice(s);else{if(l)break;if(h.search(/[^ ]/)>=4)break;if(v.test(h))break;if(y.test(h))break;if(b.test(h))break;m+=`
`+d}if(!l&&!d.trim())l=!0;e+=p+`
`,n=n.substring(p.length+1),h=d.slice(s)}}if(!c.loose){if(r)c.loose=!0;else if(/\n *\n *$/.test(e))r=!0}if(this.options.gfm){if(i=/^\[[ xX]\] /.exec(m),i)a=i[0]!=="[ ] ",m=m.replace(/^\[[ xX]\] +/,"")}c.items.push({type:"list_item",raw:e,task:!!i,checked:a,loose:!1,text:m}),c.raw+=e}c.items[c.items.length-1].raw=e.trimRight(),c.items[c.items.length-1].text=m.trimRight(),c.raw=c.raw.trimRight();let f=c.items.length;for(o=0;o<f;o++)if(this.lexer.state.top=!1,c.items[o].tokens=this.lexer.blockTokens(c.items[o].text,[]),!c.loose){let u=c.items[o].tokens.filter((v)=>v.type==="space"),b=u.length>0&&u.some((v)=>/\n.*\n/.test(v.raw));c.loose=b}if(c.loose)for(o=0;o<f;o++)c.items[o].loose=!0;return c}}html(n){let t=this.rules.block.html.exec(n);if(t){let e={type:"html",block:!0,raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};if(this.options.sanitize){let i=this.options.sanitizer?this.options.sanitizer(t[0]):on(t[0]);e.type="paragraph",e.text=i,e.tokens=this.lexer.inline(i)}return e}}def(n){let t=this.rules.block.def.exec(n);if(t){let e=t[1].toLowerCase().replace(/\s+/g," "),i=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",a=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:e,raw:t[0],href:i,title:a}}}table(n){let t=this.rules.block.table.exec(n);if(t){let e={type:"table",header:Ua(t[1]).map((i)=>{return{text:i}}),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(e.header.length===e.align.length){e.raw=t[0];let i=e.align.length,a,s,o,l;for(a=0;a<i;a++)if(/^ *-+: *$/.test(e.align[a]))e.align[a]="right";else if(/^ *:-+: *$/.test(e.align[a]))e.align[a]="center";else if(/^ *:-+ *$/.test(e.align[a]))e.align[a]="left";else e.align[a]=null;i=e.rows.length;for(a=0;a<i;a++)e.rows[a]=Ua(e.rows[a],e.header.length).map((r)=>{return{text:r}});i=e.header.length;for(s=0;s<i;s++)e.header[s].tokens=this.lexer.inline(e.header[s].text);i=e.rows.length;for(s=0;s<i;s++){l=e.rows[s];for(o=0;o<l.length;o++)l[o].tokens=this.lexer.inline(l[o].text)}return e}}}lheading(n){let t=this.rules.block.lheading.exec(n);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(n){let t=this.rules.block.paragraph.exec(n);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(n){let t=this.rules.block.text.exec(n);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(n){let t=this.rules.inline.escape.exec(n);if(t)return{type:"escape",raw:t[0],text:on(t[1])}}tag(n){let t=this.rules.inline.tag.exec(n);if(t){if(!this.lexer.state.inLink&&/^<a /i.test(t[0]))this.lexer.state.inLink=!0;else if(this.lexer.state.inLink&&/^<\/a>/i.test(t[0]))this.lexer.state.inLink=!1;if(!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0]))this.lexer.state.inRawBlock=!0;else if(this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]))this.lexer.state.inRawBlock=!1;return{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):on(t[0]):t[0]}}}link(n){let t=this.rules.inline.link.exec(n);if(t){let e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;let s=bt(e.slice(0,-1),"\\");if((e.length-s.length)%2===0)return}else{let s=_0(t[2],"()");if(s>-1){let l=(t[0].indexOf("!")===0?5:4)+t[1].length+s;t[2]=t[2].substring(0,s),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let i=t[2],a="";if(this.options.pedantic){let s=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);if(s)i=s[1],a=s[3]}else a=t[3]?t[3].slice(1,-1):"";if(i=i.trim(),/^</.test(i))if(this.options.pedantic&&!/>$/.test(e))i=i.slice(1);else i=i.slice(1,-1);return Ya(t,{href:i?i.replace(this.rules.inline._escapes,"$1"):i,title:a?a.replace(this.rules.inline._escapes,"$1"):a},t[0],this.lexer)}}reflink(n,t){let e;if((e=this.rules.inline.reflink.exec(n))||(e=this.rules.inline.nolink.exec(n))){let i=(e[2]||e[1]).replace(/\s+/g," ");if(i=t[i.toLowerCase()],!i){let a=e[0].charAt(0);return{type:"text",raw:a,text:a}}return Ya(e,i,e[0],this.lexer)}}emStrong(n,t,e=""){let i=this.rules.inline.emStrong.lDelim.exec(n);if(!i)return;if(i[3]&&e.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2])||!e||this.rules.inline.punctuation.exec(e)){let s=i[0].length-1,o,l,r=s,h=0,d=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;d.lastIndex=0,t=t.slice(-1*n.length+s);while((i=d.exec(t))!=null){if(o=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!o)continue;if(l=o.length,i[3]||i[4]){r+=l;continue}else if(i[5]||i[6]){if(s%3&&!((s+l)%3)){h+=l;continue}}if(r-=l,r>0)continue;l=Math.min(l,l+r+h);let p=n.slice(0,s+i.index+l+1);if(Math.min(s,l)%2){let z=p.slice(1,-1);return{type:"em",raw:p,text:z,tokens:this.lexer.inlineTokens(z)}}let m=p.slice(2,-2);return{type:"strong",raw:p,text:m,tokens:this.lexer.inlineTokens(m)}}}}codespan(n){let t=this.rules.inline.code.exec(n);if(t){let e=t[2].replace(/\n/g," "),i=/[^ ]/.test(e),a=/^ /.test(e)&&/ $/.test(e);if(i&&a)e=e.substring(1,e.length-1);return e=on(e,!0),{type:"codespan",raw:t[0],text:e}}}br(n){let t=this.rules.inline.br.exec(n);if(t)return{type:"br",raw:t[0]}}del(n){let t=this.rules.inline.del.exec(n);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(n,t){let e=this.rules.inline.autolink.exec(n);if(e){let i,a;if(e[2]==="@")i=on(this.options.mangle?t(e[1]):e[1]),a="mailto:"+i;else i=on(e[1]),a=i;return{type:"link",raw:e[0],text:i,href:a,tokens:[{type:"text",raw:i,text:i}]}}}url(n,t){let e;if(e=this.rules.inline.url.exec(n)){let i,a;if(e[2]==="@")i=on(this.options.mangle?t(e[0]):e[0]),a="mailto:"+i;else{let s;do s=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])[0];while(s!==e[0]);if(i=on(e[0]),e[1]==="www.")a="http://"+e[0];else a=e[0]}return{type:"link",raw:e[0],text:i,href:a,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(n,t){let e=this.rules.inline.text.exec(n);if(e){let i;if(this.lexer.state.inRawBlock)i=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):on(e[0]):e[0];else i=on(this.options.smartypants?t(e[0]):e[0]);return{type:"text",raw:e[0],text:i}}}}var U={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:vt,lheading:/^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};U._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;U._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;U.def=B(U.def).replace("label",U._label).replace("title",U._title).getRegex();U.bullet=/(?:[*+-]|\d{1,9}[.)])/;U.listItemStart=B(/^( *)(bull) */).replace("bull",U.bullet).getRegex();U.list=B(U.list).replace(/bull/g,U.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+U.def.source+")").getRegex();U._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";U._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;U.html=B(U.html,"i").replace("comment",U._comment).replace("tag",U._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();U.lheading=B(U.lheading).replace(/bull/g,U.bullet).getRegex();U.paragraph=B(U._paragraph).replace("hr",U.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",U._tag).getRegex();U.blockquote=B(U.blockquote).replace("paragraph",U.paragraph).getRegex();U.normal={...U};U.gfm={...U.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};U.gfm.table=B(U.gfm.table).replace("hr",U.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",U._tag).getRegex();U.gfm.paragraph=B(U._paragraph).replace("hr",U.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",U.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",U._tag).getRegex();U.pedantic={...U.normal,html:B(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",U._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:vt,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:B(U.normal._paragraph).replace("hr",U.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",U.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};var F={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:vt,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,rDelimAst:/^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:vt,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^((?![*_])[\spunctuation])/};F._punctuation="\\p{P}$+<=>`^|~";F.punctuation=B(F.punctuation,"u").replace(/punctuation/g,F._punctuation).getRegex();F.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;F.anyPunctuation=/\\[punct]/g;F._escapes=/\\([punct])/g;F._comment=B(U._comment).replace("(?:-->|$)","-->").getRegex();F.emStrong.lDelim=B(F.emStrong.lDelim,"u").replace(/punct/g,F._punctuation).getRegex();F.emStrong.rDelimAst=B(F.emStrong.rDelimAst,"gu").replace(/punct/g,F._punctuation).getRegex();F.emStrong.rDelimUnd=B(F.emStrong.rDelimUnd,"gu").replace(/punct/g,F._punctuation).getRegex();F.anyPunctuation=B(F.anyPunctuation,"gu").replace(/punct/g,F._punctuation).getRegex();F._escapes=B(F._escapes,"gu").replace(/punct/g,F._punctuation).getRegex();F._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;F._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;F.autolink=B(F.autolink).replace("scheme",F._scheme).replace("email",F._email).getRegex();F._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;F.tag=B(F.tag).replace("comment",F._comment).replace("attribute",F._attribute).getRegex();F._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;F._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;F._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;F.link=B(F.link).replace("label",F._label).replace("href",F._href).replace("title",F._title).getRegex();F.reflink=B(F.reflink).replace("label",F._label).replace("ref",U._label).getRegex();F.nolink=B(F.nolink).replace("ref",U._label).getRegex();F.reflinkSearch=B(F.reflinkSearch,"g").replace("reflink",F.reflink).replace("nolink",F.nolink).getRegex();F.normal={...F};F.pedantic={...F.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:B(/^!?\[(label)\]\((.*?)\)/).replace("label",F._label).getRegex(),reflink:B(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",F._label).getRegex()};F.gfm={...F.normal,escape:B(F.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};F.gfm.url=B(F.gfm.url,"i").replace("email",F.gfm._extended_email).getRegex();F.breaks={...F.gfm,br:B(F.br).replace("{2,}","*").getRegex(),text:B(F.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};function N0(n){return n.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function Ra(n){let t="",e,i,a=n.length;for(e=0;e<a;e++){if(i=n.charCodeAt(e),Math.random()>0.5)i="x"+i.toString(16);t+="&#"+i+";"}return t}class xn{constructor(n){this.tokens=[],this.tokens.links=Object.create(null),this.options=n||On,this.options.tokenizer=this.options.tokenizer||new Fe,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={block:U.normal,inline:F.normal};if(this.options.pedantic)t.block=U.pedantic,t.inline=F.pedantic;else if(this.options.gfm)if(t.block=U.gfm,this.options.breaks)t.inline=F.breaks;else t.inline=F.gfm;this.tokenizer.rules=t}static get rules(){return{block:U,inline:F}}static lex(n,t){return new xn(t).lex(n)}static lexInline(n,t){return new xn(t).inlineTokens(n)}lex(n){n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);let t;while(t=this.inlineQueue.shift())this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(n,t=[]){if(this.options.pedantic)n=n.replace(/\t/g,"    ").replace(/^ +$/gm,"");else n=n.replace(/^( *)(\t+)/gm,(o,l,r)=>{return l+"    ".repeat(r.length)});let e,i,a,s;while(n){if(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((o)=>{if(e=o.call({lexer:this},n,t))return n=n.substring(e.raw.length),t.push(e),!0;return!1}))continue;if(e=this.tokenizer.space(n)){if(n=n.substring(e.raw.length),e.raw.length===1&&t.length>0)t[t.length-1].raw+=`
`;else t.push(e);continue}if(e=this.tokenizer.code(n)){if(n=n.substring(e.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text"))i.raw+=`
`+e.raw,i.text+=`
`+e.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text;else t.push(e);continue}if(e=this.tokenizer.fences(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.heading(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.hr(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.blockquote(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.list(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.html(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.def(n)){if(n=n.substring(e.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text"))i.raw+=`
`+e.raw,i.text+=`
`+e.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text;else if(!this.tokens.links[e.tag])this.tokens.links[e.tag]={href:e.href,title:e.title};continue}if(e=this.tokenizer.table(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.lheading(n)){n=n.substring(e.raw.length),t.push(e);continue}if(a=n,this.options.extensions&&this.options.extensions.startBlock){let o=1/0,l=n.slice(1),r;if(this.options.extensions.startBlock.forEach(function(h){if(r=h.call({lexer:this},l),typeof r==="number"&&r>=0)o=Math.min(o,r)}),o<1/0&&o>=0)a=n.substring(0,o+1)}if(this.state.top&&(e=this.tokenizer.paragraph(a))){if(i=t[t.length-1],s&&i.type==="paragraph")i.raw+=`
`+e.raw,i.text+=`
`+e.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text;else t.push(e);s=a.length!==n.length,n=n.substring(e.raw.length);continue}if(e=this.tokenizer.text(n)){if(n=n.substring(e.raw.length),i=t[t.length-1],i&&i.type==="text")i.raw+=`
`+e.raw,i.text+=`
`+e.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text;else t.push(e);continue}if(n){let o="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,t}inline(n,t=[]){return this.inlineQueue.push({src:n,tokens:t}),t}inlineTokens(n,t=[]){let e,i,a,s=n,o,l,r;if(this.tokens.links){let h=Object.keys(this.tokens.links);if(h.length>0){while((o=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null)if(h.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1)))s=s.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex)}}while((o=this.tokenizer.rules.inline.blockSkip.exec(s))!=null)s=s.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);while((o=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null)s=s.slice(0,o.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);while(n){if(!l)r="";if(l=!1,this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((h)=>{if(e=h.call({lexer:this},n,t))return n=n.substring(e.raw.length),t.push(e),!0;return!1}))continue;if(e=this.tokenizer.escape(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.tag(n)){if(n=n.substring(e.raw.length),i=t[t.length-1],i&&e.type==="text"&&i.type==="text")i.raw+=e.raw,i.text+=e.text;else t.push(e);continue}if(e=this.tokenizer.link(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.reflink(n,this.tokens.links)){if(n=n.substring(e.raw.length),i=t[t.length-1],i&&e.type==="text"&&i.type==="text")i.raw+=e.raw,i.text+=e.text;else t.push(e);continue}if(e=this.tokenizer.emStrong(n,s,r)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.codespan(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.br(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.del(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.autolink(n,Ra)){n=n.substring(e.raw.length),t.push(e);continue}if(!this.state.inLink&&(e=this.tokenizer.url(n,Ra))){n=n.substring(e.raw.length),t.push(e);continue}if(a=n,this.options.extensions&&this.options.extensions.startInline){let h=1/0,d=n.slice(1),p;if(this.options.extensions.startInline.forEach(function(m){if(p=m.call({lexer:this},d),typeof p==="number"&&p>=0)h=Math.min(h,p)}),h<1/0&&h>=0)a=n.substring(0,h+1)}if(e=this.tokenizer.inlineText(a,N0)){if(n=n.substring(e.raw.length),e.raw.slice(-1)!=="_")r=e.raw.slice(-1);if(l=!0,i=t[t.length-1],i&&i.type==="text")i.raw+=e.raw,i.text+=e.text;else t.push(e);continue}if(n){let h="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(h);break}else throw new Error(h)}}return t}}class Ie{constructor(n){this.options=n||On}code(n,t,e){let i=(t||"").match(/\S*/)[0];if(this.options.highlight){let a=this.options.highlight(n,i);if(a!=null&&a!==n)e=!0,n=a}if(n=n.replace(/\n$/,"")+`
`,!i)return"<pre><code>"+(e?n:on(n,!0))+`</code></pre>
`;return'<pre><code class="'+this.options.langPrefix+on(i)+'">'+(e?n:on(n,!0))+`</code></pre>
`}blockquote(n){return`<blockquote>
${n}</blockquote>
`}html(n,t){return n}heading(n,t,e,i){if(this.options.headerIds){let a=this.options.headerPrefix+i.slug(e);return`<h${t} id="${a}">${n}</h${t}>
`}return`<h${t}>${n}</h${t}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(n,t,e){let i=t?"ol":"ul",a=t&&e!==1?' start="'+e+'"':"";return"<"+i+a+`>
`+n+"</"+i+`>
`}listitem(n){return`<li>${n}</li>
`}checkbox(n){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(n){return`<p>${n}</p>
`}table(n,t){if(t)t=`<tbody>${t}</tbody>`;return`<table>
<thead>
`+n+`</thead>
`+t+`</table>
`}tablerow(n){return`<tr>
${n}</tr>
`}tablecell(n,t){let e=t.header?"th":"td";return(t.align?`<${e} align="${t.align}">`:`<${e}>`)+n+`</${e}>
`}strong(n){return`<strong>${n}</strong>`}em(n){return`<em>${n}</em>`}codespan(n){return`<code>${n}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(n){return`<del>${n}</del>`}link(n,t,e){if(n=Ga(this.options.sanitize,this.options.baseUrl,n),n===null)return e;let i='<a href="'+n+'"';if(t)i+=' title="'+t+'"';return i+=">"+e+"</a>",i}image(n,t,e){if(n=Ga(this.options.sanitize,this.options.baseUrl,n),n===null)return e;let i=`<img src="${n}" alt="${e}"`;if(t)i+=` title="${t}"`;return i+=this.options.xhtml?"/>":">",i}text(n){return n}}class yt{strong(n){return n}em(n){return n}codespan(n){return n}del(n){return n}html(n){return n}text(n){return n}link(n,t,e){return""+e}image(n,t,e){return""+e}br(){return""}}class xt{constructor(){this.seen={}}serialize(n){return n.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(n,t){let e=n,i=0;if(this.seen.hasOwnProperty(e)){i=this.seen[n];do i++,e=n+"-"+i;while(this.seen.hasOwnProperty(e))}if(!t)this.seen[n]=i,this.seen[e]=0;return e}slug(n,t={}){let e=this.serialize(n);return this.getNextSafeSlug(e,t.dryrun)}}class wn{constructor(n){this.options=n||On,this.options.renderer=this.options.renderer||new Ie,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new yt,this.slugger=new xt}static parse(n,t){return new wn(t).parse(n)}static parseInline(n,t){return new wn(t).parseInline(n)}parse(n,t=!0){let e="",i,a,s,o,l,r,h,d,p,m,z,x,C,c,g,f,u,b,v,y=n.length;for(i=0;i<y;i++){if(m=n[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[m.type]){if(v=this.options.extensions.renderers[m.type].call({parser:this},m),v!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(m.type)){e+=v||"";continue}}switch(m.type){case"space":continue;case"hr":{e+=this.renderer.hr();continue}case"heading":{e+=this.renderer.heading(this.parseInline(m.tokens),m.depth,Qa(this.parseInline(m.tokens,this.textRenderer)),this.slugger);continue}case"code":{e+=this.renderer.code(m.text,m.lang,m.escaped);continue}case"table":{d="",h="",o=m.header.length;for(a=0;a<o;a++)h+=this.renderer.tablecell(this.parseInline(m.header[a].tokens),{header:!0,align:m.align[a]});d+=this.renderer.tablerow(h),p="",o=m.rows.length;for(a=0;a<o;a++){r=m.rows[a],h="",l=r.length;for(s=0;s<l;s++)h+=this.renderer.tablecell(this.parseInline(r[s].tokens),{header:!1,align:m.align[s]});p+=this.renderer.tablerow(h)}e+=this.renderer.table(d,p);continue}case"blockquote":{p=this.parse(m.tokens),e+=this.renderer.blockquote(p);continue}case"list":{z=m.ordered,x=m.start,C=m.loose,o=m.items.length,p="";for(a=0;a<o;a++){if(g=m.items[a],f=g.checked,u=g.task,c="",g.task)if(b=this.renderer.checkbox(f),C)if(g.tokens.length>0&&g.tokens[0].type==="paragraph"){if(g.tokens[0].text=b+" "+g.tokens[0].text,g.tokens[0].tokens&&g.tokens[0].tokens.length>0&&g.tokens[0].tokens[0].type==="text")g.tokens[0].tokens[0].text=b+" "+g.tokens[0].tokens[0].text}else g.tokens.unshift({type:"text",text:b});else c+=b;c+=this.parse(g.tokens,C),p+=this.renderer.listitem(c,u,f)}e+=this.renderer.list(p,z,x);continue}case"html":{e+=this.renderer.html(m.text,m.block);continue}case"paragraph":{e+=this.renderer.paragraph(this.parseInline(m.tokens));continue}case"text":{p=m.tokens?this.parseInline(m.tokens):m.text;while(i+1<y&&n[i+1].type==="text")m=n[++i],p+=`
`+(m.tokens?this.parseInline(m.tokens):m.text);e+=t?this.renderer.paragraph(p):p;continue}default:{let S='Token with "'+m.type+'" type was not found.';if(this.options.silent){console.error(S);return}else throw new Error(S)}}}return e}parseInline(n,t){t=t||this.renderer;let e="",i,a,s,o=n.length;for(i=0;i<o;i++){if(a=n[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){if(s=this.options.extensions.renderers[a.type].call({parser:this},a),s!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){e+=s||"";continue}}switch(a.type){case"escape":{e+=t.text(a.text);break}case"html":{e+=t.html(a.text);break}case"link":{e+=t.link(a.href,a.title,this.parseInline(a.tokens,t));break}case"image":{e+=t.image(a.href,a.title,a.text);break}case"strong":{e+=t.strong(this.parseInline(a.tokens,t));break}case"em":{e+=t.em(this.parseInline(a.tokens,t));break}case"codespan":{e+=t.codespan(a.text);break}case"br":{e+=t.br();break}case"del":{e+=t.del(this.parseInline(a.tokens,t));break}case"text":{e+=t.text(a.text);break}default:{let l='Token with "'+a.type+'" type was not found.';if(this.options.silent){console.error(l);return}else throw new Error(l)}}}return e}}class Le{constructor(n){this.options=n||On}static passThroughHooks=new Set(["preprocess","postprocess"]);preprocess(n){return n}postprocess(n){return n}}class Za{defaults=bi();options=this.setOptions;parse=this.#n(xn.lex,wn.parse);parseInline=this.#n(xn.lexInline,wn.parseInline);Parser=wn;parser=wn.parse;Renderer=Ie;TextRenderer=yt;Lexer=xn;lexer=xn.lex;Tokenizer=Fe;Slugger=xt;Hooks=Le;constructor(...n){this.use(...n)}walkTokens(n,t){let e=[];for(let i of n)switch(e=e.concat(t.call(this,i)),i.type){case"table":{for(let a of i.header)e=e.concat(this.walkTokens(a.tokens,t));for(let a of i.rows)for(let s of a)e=e.concat(this.walkTokens(s.tokens,t));break}case"list":{e=e.concat(this.walkTokens(i.items,t));break}default:if(this.defaults.extensions&&this.defaults.extensions.childTokens&&this.defaults.extensions.childTokens[i.type])this.defaults.extensions.childTokens[i.type].forEach((a)=>{e=e.concat(this.walkTokens(i[a],t))});else if(i.tokens)e=e.concat(this.walkTokens(i.tokens,t))}return e}use(...n){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach((e)=>{let i={...e};if(i.async=this.defaults.async||i.async||!1,e.extensions)e.extensions.forEach((a)=>{if(!a.name)throw new Error("extension name required");if(a.renderer){let s=t.renderers[a.name];if(s)t.renderers[a.name]=function(...o){let l=a.renderer.apply(this,o);if(l===!1)l=s.apply(this,o);return l};else t.renderers[a.name]=a.renderer}if(a.tokenizer){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");if(t[a.level])t[a.level].unshift(a.tokenizer);else t[a.level]=[a.tokenizer];if(a.start){if(a.level==="block")if(t.startBlock)t.startBlock.push(a.start);else t.startBlock=[a.start];else if(a.level==="inline")if(t.startInline)t.startInline.push(a.start);else t.startInline=[a.start]}}if(a.childTokens)t.childTokens[a.name]=a.childTokens}),i.extensions=t;if(e.renderer){let a=this.defaults.renderer||new Ie(this.defaults);for(let s in e.renderer){let o=a[s];a[s]=(...l)=>{let r=e.renderer[s].apply(a,l);if(r===!1)r=o.apply(a,l);return r}}i.renderer=a}if(e.tokenizer){let a=this.defaults.tokenizer||new Fe(this.defaults);for(let s in e.tokenizer){let o=a[s];a[s]=(...l)=>{let r=e.tokenizer[s].apply(a,l);if(r===!1)r=o.apply(a,l);return r}}i.tokenizer=a}if(e.hooks){let a=this.defaults.hooks||new Le;for(let s in e.hooks){let o=a[s];if(Le.passThroughHooks.has(s))a[s]=(l)=>{if(this.defaults.async)return Promise.resolve(e.hooks[s].call(a,l)).then((h)=>{return o.call(a,h)});let r=e.hooks[s].call(a,l);return o.call(a,r)};else a[s]=(...l)=>{let r=e.hooks[s].apply(a,l);if(r===!1)r=o.apply(a,l);return r}}i.hooks=a}if(e.walkTokens){let a=this.defaults.walkTokens;i.walkTokens=function(s){let o=[];if(o.push(e.walkTokens.call(this,s)),a)o=o.concat(a.call(this,s));return o}}this.defaults={...this.defaults,...i}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}#n(n,t){return(e,i,a)=>{if(typeof i==="function")a=i,i=null;let s={...i};i={...this.defaults,...s};let o=this.#e(i.silent,i.async,a);if(typeof e==="undefined"||e===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof e!=="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if($0(i,a),i.hooks)i.hooks.options=i;if(a){let l=i.highlight,r;try{if(i.hooks)e=i.hooks.preprocess(e);r=n(e,i)}catch(p){return o(p)}let h=(p)=>{let m;if(!p)try{if(i.walkTokens)this.walkTokens(r,i.walkTokens);if(m=t(r,i),i.hooks)m=i.hooks.postprocess(m)}catch(z){p=z}return i.highlight=l,p?o(p):a(null,m)};if(!l||l.length<3)return h();if(delete i.highlight,!r.length)return h();let d=0;if(this.walkTokens(r,(p)=>{if(p.type==="code")d++,setTimeout(()=>{l(p.text,p.lang,(m,z)=>{if(m)return h(m);if(z!=null&&z!==p.text)p.text=z,p.escaped=!0;if(d--,d===0)h()})},0)}),d===0)h();return}if(i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(e):e).then((l)=>n(l,i)).then((l)=>i.walkTokens?Promise.all(this.walkTokens(l,i.walkTokens)).then(()=>l):l).then((l)=>t(l,i)).then((l)=>i.hooks?i.hooks.postprocess(l):l).catch(o);try{if(i.hooks)e=i.hooks.preprocess(e);let l=n(e,i);if(i.walkTokens)this.walkTokens(l,i.walkTokens);let r=t(l,i);if(i.hooks)r=i.hooks.postprocess(r);return r}catch(l){return o(l)}}}#e(n,t,e){return(i)=>{if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,n){let a="<p>An error occurred:</p><pre>"+on(i.message+"",!0)+"</pre>";if(t)return Promise.resolve(a);if(e){e(null,a);return}return a}if(t)return Promise.reject(i);if(e){e(i);return}throw i}}}var Kn=new Za(On);function Y(n,t,e){return Kn.parse(n,t,e)}Y.options=Y.setOptions=function(n){return Kn.setOptions(n),Y.defaults=Kn.defaults,Ja(Y.defaults),Y};Y.getDefaults=bi;Y.defaults=On;Y.use=function(...n){return Kn.use(...n),Y.defaults=Kn.defaults,Ja(Y.defaults),Y};Y.walkTokens=function(n,t){return Kn.walkTokens(n,t)};Y.parseInline=Kn.parseInline;Y.Parser=wn;Y.parser=wn.parse;Y.Renderer=Ie;Y.TextRenderer=yt;Y.Lexer=xn;Y.lexer=xn.lex;Y.Tokenizer=Fe;Y.Slugger=xt;Y.Hooks=Le;Y.parse=Y;var{options:Pr,setOptions:Nr,use:Vr,walkTokens:Wr,parseInline:Gr}=Y;var Ur=wn.parse,Yr=xn.lex;/*!
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
*/function Xa(n,t){if(t==null)t="";else if(typeof t!=="string")t=String(t);return t.replace(/\{\{([^}]+)\}\}/g,(e,i)=>{let a=Xn[`${n}${i.startsWith("[")?i:"."+i}`];return a===void 0?e:Xa(n,String(a))})}class vi extends _{src="";value="";content=null;elements=!1;context={};constructor(){super();this.initAttributes("src","elements","context")}connectedCallback(){if(super.connectedCallback(),this.src!=="")(async()=>{let n=await fetch(this.src);this.value=await n.text()})();else if(this.value==="")if(this.elements)this.value=this.innerHTML;else this.value=this.textContent!=null?this.textContent:""}didRender=()=>{};render(){super.render(),Xn[this.instanceId]=typeof this.context==="string"?JSON.parse(this.context):this.context;let n=Xa(this.instanceId,this.value);if(this.elements){let t=n.split(`
`).reduce((e,i)=>{if(i.startsWith("<")||e.length===0)e.push(i);else{let a=e[e.length-1];if(!a.startsWith("<")||!a.endsWith(">"))e[e.length-1]+=`
`+i;else e.push(i)}return e},[]);this.innerHTML=t.map((e)=>e.startsWith("<")&&e.endsWith(">")?e:Y(e,{mangle:!1,headerIds:!1})).join("")}else this.innerHTML=Y(n,{mangle:!1,headerIds:!1});this.didRender()}}var V0=vi.elementCreator({tag:"xin-md"});/*!

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
*/var{div:yi,button:W0}=$,G0={error:"red",warn:"orange",info:"royalblue",log:"gray",success:"green",progress:"royalblue"};class Bn extends _{static singleton;static styleSpec={":host":{_notificationSpacing:8,_notificationWidth:360,_notificationPadding:`${w.notificationSpacing} ${w.notificationSpacing50} ${w.notificationSpacing} ${w.notificationSpacing200}`,_notificationBg:"#fafafa",_notificationAccentColor:"#aaa",_notificationTextColor:"#444",_notificationIconSize:w.notificationSpacing300,_notificationButtonSize:48,_notificationBorderWidth:"3px 0 0",_notificationBorderRadius:w.notificationSpacing50,position:"fixed",left:0,right:0,bottom:0,paddingBottom:w.notificationSpacing,width:w.notificationWidth,display:"flex",flexDirection:"column-reverse",margin:"0 auto",gap:w.notificationSpacing,maxHeight:"50vh",overflow:"hidden auto",boxShadow:"none !important"},":host *":{color:w.notificationTextColor},":host .note":{display:"grid",background:w.notificationBg,padding:w.notificationPadding,gridTemplateColumns:`${w.notificationIconSize} 1fr ${w.notificationButtonSize}`,gap:w.notificationSpacing,alignItems:"center",borderRadius:w.notificationBorderRadius,boxShadow:`0 2px 8px #0006, inset 0 0 0 2px ${w.notificationAccentColor}`,borderColor:w.notificationAccentColor,borderWidth:w.notificationBorderWidth,borderStyle:"solid",transition:"0.5s ease-in",transitionProperty:"margin, opacity",zIndex:1},":host .note .icon":{fill:w.notificationAccentColor},":host .note button":{display:"flex",lineHeight:w.notificationButtonSize,padding:0,margin:0,height:w.notificationButtonSize,width:w.notificationButtonSize,background:"transparent",alignItems:"center",justifyContent:"center",boxShadow:"none",border:"none",position:"relative"},":host .note button:hover svg":{fill:w.notificationAccentColor},":host .note button:active svg":{borderRadius:99,fill:w.notificationBg,background:w.notificationAccentColor,padding:w.spacing50},":host .note svg":{height:w.notificationIconSize,width:w.notificationIconSize,pointerEvents:"none"},":host .message":{display:"flex",flexDirection:"column",alignItems:"center",gap:w.notificationSpacing},":host .note.closing":{opacity:0,zIndex:0}};static removeNote(n){n.classList.add("closing"),n.style.marginBottom=-n.offsetHeight+"px";let t=()=>{n.remove()};n.addEventListener("transitionend",t),setTimeout(t,1000)}static post(n){let{message:t,duration:e,type:i,close:a,progress:s,icon:o}=Object.assign({type:"info",duration:-1},typeof n==="string"?{message:n}:n);if(!this.singleton)this.singleton=ka();let l=this.singleton;document.body.append(l),l.style.zIndex=String(Ae()+1);let r=G0[i],h=s||i==="progress"?$.progress():{},d=()=>{if(a)a();Bn.removeNote(m)},p=o instanceof SVGElement?o:o?O[o]({class:"icon"}):O.info({class:"icon"}),m=yi({class:`note ${i}`,style:{_notificationAccentColor:r}},p,yi({class:"message"},yi(t),h),W0({class:"close",title:"close",apply(z){z.addEventListener("click",d)}},O.x()));if(l.shadowRoot.append(m),h instanceof HTMLProgressElement&&s instanceof Function){h.setAttribute("max",String(100)),h.value=s();let z=setInterval(()=>{if(!l.shadowRoot.contains(m)){clearInterval(z);return}let x=s();if(h.value=x,x>=100)Bn.removeNote(m)},1000)}if(e>0)setTimeout(()=>{Bn.removeNote(m)},e*1000);return m.scrollIntoView(),d}content=null}var ka=Bn.elementCreator({tag:"xin-notification"});function U0(n){return Bn.post(n)}/*!
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
*/var ns=async(n,t="SHA-1")=>{let i=new TextEncoder().encode(n),a=await crypto.subtle.digest(t,i);return Array.from(new Uint8Array(a)).map((l)=>l.toString(16).padStart(2,"0")).join("")},es=async(n)=>{let t=await ns(n),e=await fetch(`https://weakpass.com/api/v1/search/${t}`);if(e.ok){let i=await e.json();console.log("password found in weakpass database",i)}return e.status!==404},{span:xi,xinSlot:Y0}=$;class wi extends _{minLength=8;goodLength=12;indicatorColors="#f00,#f40,#f80,#ef0,#8f0,#0a2";descriptionColors="#000,#000,#000,#000,#000,#fff";issues={tooShort:!0,short:!0,noUpper:!0,noLower:!0,noNumber:!0,noSpecial:!0};issueDescriptions={tooShort:"too short",short:"short",noUpper:"no upper case",noLower:"no lower case",noNumber:"no digits",noSpecial:"no unusual characters"};value=0;strengthDescriptions=["unacceptable","very weak","weak","moderate","strong","very strong"];constructor(){super();this.initAttributes("minLength","goodLength","indicatorColors")}strength(n){return this.issues={tooShort:n.length<this.minLength,short:n.length<this.goodLength,noUpper:!n.match(/[A-Z]/),noLower:!n.match(/[a-z]/),noNumber:!n.match(/[0-9]/),noSpecial:!n.match(/[^a-zA-Z0-9]/)},this.issues.tooShort?0:Object.values(this.issues).filter((t)=>!t).length-1}async isBreached(){let n=this.querySelector("input")?.value;if(!n||typeof n!=="string")return!0;return await es(n)}updateIndicator=(n)=>{let{level:t,description:e}=this.parts,i=this.indicatorColors.split(","),a=this.descriptionColors.split(","),s=this.strength(n);if(this.value!==s)this.value=s,this.dispatchEvent(new Event("change"));t.style.width=`${(s+1)*16.67}%`,this.style.setProperty("--indicator-color",i[s]),this.style.setProperty("--description-color",a[s]),e.textContent=this.strengthDescriptions[s]};update=(n)=>{let t=n.target.closest("input");this.updateIndicator(t?.value||"")};content=()=>[Y0({onInput:this.update}),xi({part:"meter"},xi({part:"level"}),xi({part:"description"}))];render(){super.render();let n=this.querySelector("input");this.updateIndicator(n?.value)}}var R0=wi.elementCreator({tag:"xin-password-strength",styleSpec:{":host":{display:"inline-flex",flexDirection:"column",gap:w.spacing50,position:"relative"},":host xin-slot":{display:"flex"},':host [part="meter"]':{display:"block",position:"relative",height:q.meterHeight("24px"),background:q.indicatorBg("white"),borderRadius:q.meterRadius("4px"),boxShadow:q.meterShadow(`inset 0 0 0 2px ${w.indicatorColor}`)},':host [part="level"]':{height:q.levelHeight("20px"),content:'" "',display:"inline-block",width:0,transition:"0.15s ease-out",background:w.indicatorColor,margin:q.levelMargin("2px"),borderRadius:q.levelRadius("2px")},':host [part="description"]':{position:"absolute",inset:"0",color:w.descriptionColor,height:q.meterHeight("24px"),lineHeight:q.meterHeight("24px"),textAlign:"center"}}});/*!
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
*/var{span:Mi}=$;class zi extends _{iconSize=24;min=1;max=5;step=1;value=null;icon="star";color="#f91";emptyColor="#8888";emptyStrokeWidth=2;readonly=!1;hollow=!1;static styleSpec={":host":{display:"inline-block",position:"relative",width:"fit-content"},":host::part(container)":{position:"relative",display:"inline-block"},":host::part(empty), :host::part(filled)":{height:"100%",whiteSpace:"nowrap",overflow:"hidden"},":host::part(empty)":{pointerEvents:"none",_textColor:"transparent"},':host [part="empty"]:not(.hollow)':{fill:w.ratingEmptyColor},":host .hollow":{fill:"none",stroke:w.ratingEmptyColor,strokeWidth:w.ratingEmptyStrokeWidth},":host::part(filled)":{position:"absolute",left:0,fill:w.ratingColor,stroke:w.ratingColor,strokeWidth:w.ratingEmptyStrokeWidth},":host svg":{transform:"scale(0.7)",pointerEvents:"all !important",transition:"0.25s ease-in-out"},":host svg:hover":{transform:"scale(0.9)"},":host svg:active":{transform:"scale(1)"}};constructor(){super();this.initAttributes("max","min","icon","step","color","emptyColor","readonly","iconSize","hollow")}content=()=>Mi({part:"container"},Mi({part:"empty"}),Mi({part:"filled"}));displayValue(n){let{empty:t,filled:e}=this.parts,i=Math.round((n||0)/this.step)*this.step;e.style.width=i/this.max*t.offsetWidth+"px"}update=(n)=>{if(this.readonly)return;let{empty:t}=this.parts,e=n instanceof MouseEvent?n.pageX-t.getBoundingClientRect().x:0,i=Math.min(Math.max(this.min,Math.round(e/t.offsetWidth*this.max/this.step+this.step*0.5)*this.step),this.max);if(n.type==="click")this.value=i;else if(n.type==="mousemove")this.displayValue(i);else this.displayValue(this.value||0)};handleKey=(n)=>{let t=Number(this.value);if(t==null)t=Math.round((this.min+this.max)*0.5*this.step)*this.step;let e=!1;switch(n.key){case"ArrowUp":case"ArrowRight":t+=this.step,e=!0;break;case"ArrowDown":case"ArrowLeft":t-=this.step,e=!0;break}if(this.value=Math.max(Math.min(t,this.max),this.min),e)n.stopPropagation(),n.preventDefault()};connectedCallback(){super.connectedCallback();let{container:n}=this.parts;n.tabIndex=0,n.addEventListener("mousemove",this.update,!0),n.addEventListener("mouseleave",this.update),n.addEventListener("blur",this.update),n.addEventListener("click",this.update),n.addEventListener("keydown",this.handleKey)}_renderedIcon="";render(){if(super.render(),this.style.setProperty("--rating-color",this.color),this.style.setProperty("--rating-empty-color",this.emptyColor),this.style.setProperty("--rating-empty-stroke-width",String(this.emptyStrokeWidth*32)),this.readonly)this.role="image";else this.role="slider";this.ariaLabel=`rating ${this.value} out of ${this.max}`,this.ariaValueMax=String(this.max),this.ariaValueMin=String(this.min),this.ariaValueNow=this.value===null?String(-1):String(this.value);let{empty:n,filled:t}=this.parts,e=this.iconSize+"px";if(n.classList.toggle("hollow",this.hollow),this._renderedIcon!==this.icon){this._renderedIcon=this.icon;for(let i=0;i<this.max;i++)n.append(O[this.icon]({height:e})),t.append(O[this.icon]({height:e}))}this.style.height=e,this.displayValue(this.value)}}var J0=zi.elementCreator({tag:"xin-rating"});/*!
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
*/var{xinSlot:ts,div:K0,button:B0,span:is}=$,Q0=[{caption:"Title",tagType:"H1"},{caption:"Heading",tagType:"H2"},{caption:"Subheading",tagType:"H3"},{caption:"Minor heading",tagType:"H4"},{caption:"Body",tagType:"P"},{caption:"Code Block",tagType:"PRE"}];function Si(n=Q0){return Oe({title:"paragraph style",slot:"toolbar",class:"block-style",options:n.map(({caption:t,tagType:e})=>({caption:t,value:`formatBlock,${e}`}))})}function he(n="10px"){return is({slot:"toolbar",style:{flex:`0 0 ${n}`,content:" "}})}function Z0(n="10px"){return is({slot:"toolbar",style:{flex:`0 0 ${n}`,content:" "}})}function pn(n,t,e){return B0({slot:"toolbar",dataCommand:t,title:n},e)}var X0=()=>[pn("left-justify","justifyLeft",O.alignLeft()),pn("center","justifyCenter",O.alignCenter()),pn("right-justify","justifyRight",O.alignRight()),he(),pn("bullet list","insertUnorderedList",O.listBullet()),pn("numbered list","insertOrderedList",O.listNumber()),he(),pn("indent","indent",O.blockIndent()),pn("indent","outdent",O.blockOutdent())],as=()=>[pn("bold","bold",O.fontBold()),pn("italic","italic",O.fontItalic()),pn("underline","underline",O.fontUnderline())],k0=()=>[Si(),he(),...as()],ss=()=>[Si(),he(),...X0(),he(),...as()];class Ci extends _{widgets="default";isInitialized=!1;get value(){return this.isInitialized?this.parts.doc.innerHTML:this.savedValue||this.innerHTML}set value(n){if(this.isInitialized)this.parts.doc.innerHTML=n;else this.innerHTML=n}blockElement(n){let{doc:t}=this.parts;while(n.parentElement!==null&&n.parentElement!==t)n=n.parentElement;return n.parentElement===t?n:void 0}get selectedBlocks(){let{doc:n}=this.parts,t=window.getSelection();if(t===null)return[];let e=[];for(let i=0;i<t.rangeCount;i++){let a=t.getRangeAt(i);if(!n.contains(a.commonAncestorContainer))continue;let s=this.blockElement(a.startContainer),o=this.blockElement(a.endContainer);e.push(s);while(s!==o&&s!==null)s=s.nextElementSibling,e.push(s)}return e}get selectedText(){let n=window.getSelection();if(n===null)return"";return this.selectedBlocks.length?n.toString():""}selectionChange=()=>{};handleSelectChange=(n)=>{let t=n.target.closest(Rn.tagName);if(t==null)return;this.doCommand(t.value)};handleButtonClick=(n)=>{let t=n.target.closest("button");if(t==null)return;this.doCommand(t.dataset.command)};content=[ts({name:"toolbar",part:"toolbar",onClick:this.handleButtonClick,onChange:this.handleSelectChange}),K0({part:"doc",contenteditable:!0,style:{flex:"1 1 auto",outline:"none"}}),ts({part:"content"})];constructor(){super();this.initAttributes("widgets")}doCommand(n){if(n===void 0)return;let t=n.split(",");console.log("execCommand",t[0],!1,...t.slice(1)),document.execCommand(t[0],!1,...t.slice(1))}updateBlockStyle(){let n=this.parts.toolbar.querySelector(".block-style");if(n===null)return;let t=this.selectedBlocks.map((e)=>e.tagName);t=[...new Set(t)],n.value=t.length===1?`formatBlock,${t[0]}`:""}connectedCallback(){super.connectedCallback();let{doc:n,content:t}=this.parts;if(t.innerHTML!==""&&n.innerHTML==="")n.innerHTML=t.innerHTML,t.innerHTML="";this.isInitialized=!0,t.style.display="none",document.addEventListener("selectionchange",(e)=>{this.updateBlockStyle(),this.selectionChange(e,this)})}render(){let{toolbar:n}=this.parts;if(super.render(),n.children.length===0)switch(this.widgets){case"minimal":n.append(...k0());break;case"default":n.append(...ss());break}}}var nl=Ci.elementCreator({tag:"xin-word",styleSpec:{":host":{display:"flex",flexDirection:"column",height:"100%"},':host [part="toolbar"]':{padding:"4px",display:"flex",gap:"0px",flex:"0 0 auto",flexWrap:"wrap"}}});/*!
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
*/var{div:el,slot:tl,label:il,span:al,input:os}=$;class ls extends _{choices="";other="";multiple=!1;name="";placeholder="Please specify…";value=null;get values(){return(this.value||"").split(",").map((n)=>n.trim()).filter((n)=>n!=="")}content=()=>[tl(),el({part:"options"},os({part:"custom",hidden:!0}))];static styleSpec={":host":{display:"inline-flex",gap:q.segmentedOptionGap("8px")},":host, :host::part(options)":{flexDirection:q.segmentedDirection("row"),alignItems:q.segmentedAlignItems("center")},":host label":{display:"inline-grid",alignItems:"center",gap:q.segmentedOptionGap("8px"),gridTemplateColumns:q.segmentedOptionGridColumns("0px 24px 1fr"),padding:q.segmentedOptionPadding("4px 12px"),font:q.segmentedOptionFont("16px")},":host label:has(:checked)":{color:q.segmentedOptionCurrentColor("#eee"),background:q.segmentedOptionCurrentBackground("#44a")},":host svg":{height:q.segmentOptionIconSize("16px"),fill:q.segmentedOptionIconColor("currentColor")},":host label.no-icon":{gap:0,gridTemplateColumns:q.segmentedOptionGridColumns("0px 1fr")},':host input[type="radio"], :host input[type="checkbox"]':{visibility:q.segmentedInputVisibility("hidden")},":host::part(options)":{display:"flex",borderRadius:q.segmentedOptionsBorderRadius("8px"),background:q.segmentedOptionsBackground("#fff"),color:q.segmentedOptionColor("#222"),overflow:"hidden"},":host::part(custom)":{padding:q.segmentedOptionPadding("4px 12px"),color:q.segmentedOptionCurrentColor("#eee"),background:q.segmentedOptionCurrentBackground("#44a"),font:q.segmentedOptionFont("16px"),border:"0",outline:"none"},":host::part(custom)::placeholder":{color:q.segmentedOptionCurrentColor("#eee"),opacity:q.segmentedPlaceholderOpacity(0.75)}};constructor(){super();this.initAttributes("direction","choices","other","multiple","name","placeholder")}valueChanged=!1;handleChange=()=>{let{options:n,custom:t}=this.parts;if(this.multiple){let e=[...n.querySelectorAll("input:checked")];this.value=e.map((i)=>i.value).join(",")}else{let e=n.querySelector("input:checked");if(!e)this.value=null;else if(e.value)t.setAttribute("hidden",""),this.value=e.value;else t.removeAttribute("hidden"),t.focus(),t.select(),this.value=t.value}this.valueChanged=!0};handleKey=(n)=>{switch(n.code){case"Space":n.target.click();break}};connectedCallback(){super.connectedCallback();let{options:n}=this.parts;if(this.name==="")this.name=this.instanceId;if(n.addEventListener("change",this.handleChange),n.addEventListener("keydown",this.handleKey),this.other&&this.multiple)console.warn(this,"is set to [other] and [multiple]; [other] will be ignored"),this.other=""}get _choices(){let n=Array.isArray(this.choices)?this.choices:this.choices.split(",").filter((t)=>t.trim()!=="").map((t)=>{let[e,i]=t.split("=").map((r)=>r.trim()),[a,s]=(i||e).split(":").map((r)=>r.trim()),o=s?O[s]():"";return{value:e,icon:o,caption:a}});if(this.other&&!this.multiple){let[t,e]=this.other.split(":");n.push({value:"",caption:t,icon:e})}return n}get isOtherValue(){return Boolean(this.value===""||this.value&&!this._choices.find((n)=>n.value===this.value))}render(){if(super.render(),this.valueChanged){this.valueChanged=!1;return}let{options:n,custom:t}=this.parts;n.textContent="";let e=this.multiple?"checkbox":"radio",{values:i,isOtherValue:a}=this;if(n.append(...this._choices.map((s)=>{return il({tabindex:0},os({type:e,name:this.name,value:s.value,checked:i.includes(s.value)||s.value===""&&a,tabIndex:-1}),s.icon||{class:"no-icon"},al(s.caption))})),this.other&&!this.multiple)t.hidden=!a,t.value=a?this.value:"",t.placeholder=this.placeholder,n.append(t)}}var sl=ls.elementCreator({tag:"xin-segmented"});/*!
# sidebar

The default layout for iOS / iPadOS apps is to hide the sidebar when displaying content on small
screens, and display the sidebar when space is available (with the user able to explicitly hide
the sidebar if so desired). `<xin-sidenav>` provides this functionality.

`<xin-sidenav>` is used to handle the layout of the documentation tab panel.

`<xin-sidenav>`'s behavior is controlled by two attributes, `minSize` is the point at which it will toggle between showing the navigation
sidebar and content, while `navSize` is the width of the sidebar. You can interrogate its `compact` property to find out if it's
currently in `compact` form.
*/var{slot:rs}=$;class Ti extends _{minSize=800;navSize=200;compact=!1;content=[rs({name:"nav"}),rs({part:"content"})];_contentVisible=!1;get contentVisible(){return this._contentVisible}set contentVisible(n){this._contentVisible=n,this.queueRender()}static styleSpec={":host":{display:"grid",gridTemplateColumns:`${q.navWidth("50%")} ${q.contentWidth("50%")}`,gridTemplateRows:"100%",position:"relative",margin:q.margin("0 0 0 -100%"),transition:q.sideNavTransition("0.25s ease-out")},":host slot":{position:"relative"},":host slot:not([name])":{display:"block"},':host slot[name="nav"]':{display:"block"}};onResize=()=>{let{content:n}=this.parts,t=this.offsetParent;if(t===null)return;if(this.compact=t.offsetWidth<this.minSize,[...this.childNodes].find((i)=>i instanceof Element?i.getAttribute("slot")!=="nav":!0)===void 0){this.style.setProperty("--nav-width","100%"),this.style.setProperty("--content-width","0%");return}if(!this.compact)n.classList.add("-xin-sidenav-visible"),this.style.setProperty("--nav-width",`${this.navSize}px`),this.style.setProperty("--content-width",`calc(100% - ${this.navSize}px)`),this.style.setProperty("--margin","0");else if(n.classList.remove("-xin-sidenav-visible"),this.style.setProperty("--nav-width","50%"),this.style.setProperty("--content-width","50%"),this.contentVisible)this.style.setProperty("--margin","0 0 0 -100%");else this.style.setProperty("--margin","0 -100% 0 0")};observer;connectedCallback(){super.connectedCallback(),this.contentVisible=this.parts.content.childNodes.length===0,globalThis.addEventListener("resize",this.onResize),this.observer=new MutationObserver(this.onResize),this.observer.observe(this,{childList:!0}),this.style.setProperty("--side-nav-transition","0s"),setTimeout(()=>{this.style.removeProperty("--side-nav-transition")},250)}disconnectedCallback(){super.disconnectedCallback(),this.observer.disconnect()}constructor(){super();this.initAttributes("minSize","navSize","compact")}render(){super.render(),this.onResize()}}var ol=Ti.elementCreator({tag:"xin-sidenav"});var{slot:cs}=$;/*!
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
*/class Ai extends _{minWidth=0;minHeight=0;value="normal";content=[cs({part:"normal"}),cs({part:"small",name:"small"})];static styleSpec={":host":{display:"inline-block",position:"relative"}};constructor(){super();this.initAttributes("minWidth","minHeight")}onResize=()=>{let{normal:n,small:t}=this.parts,e=this.offsetParent;if(!(e instanceof HTMLElement))return;else if(e.offsetWidth<this.minWidth||e.offsetHeight<this.minHeight)n.hidden=!0,t.hidden=!1,this.value="small";else n.hidden=!1,t.hidden=!0,this.value="normal"};connectedCallback(){super.connectedCallback(),globalThis.addEventListener("resize",this.onResize)}disconnectedCallback(){super.disconnectedCallback(),globalThis.removeEventListener("resize",this.onResize)}}var ll=Ai.elementCreator({tag:"xin-sizebreak"});/*!
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
*/class Ei extends _{target=null;static styleSpec={":host":{_resizeIconFill:"#222",display:"block",position:"absolute",bottom:-7,right:-7,padding:14,width:44,height:44,opacity:0.25,transition:"opacity 0.25s ease-out"},":host(:hover)":{opacity:0.5},":host svg":{width:16,height:16,fill:w.resizeIconFill}};content=O.resize();get minSize(){let{minWidth:n,minHeight:t}=getComputedStyle(this.target);return{width:parseFloat(n)||32,height:parseFloat(t)||32}}resizeTarget=(n)=>{let{target:t}=this;if(!t)return;let{offsetWidth:e,offsetHeight:i}=t;t.style.left=t.offsetLeft+"px",t.style.top=t.offsetTop+"px",t.style.bottom="",t.style.right="";let{minSize:a}=this;rn(n,(s,o,l)=>{if(t.style.width=Math.max(a.width,e+s)+"px",t.style.height=Math.max(a.height,i+o)+"px",l.type==="mouseup")return!0},"nwse-resize")};connectedCallback(){if(super.connectedCallback(),!this.target)this.target=this.parentElement;let n={passive:!0};this.addEventListener("mousedown",this.resizeTarget,n),this.addEventListener("touchstart",this.resizeTarget,n)}}var rl=Ei.elementCreator({tag:"xin-sizer"});/*!
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
*/var{div:cl,input:hl,span:dl,button:hs}=$;class wt extends _{caption="";removeable=!1;removeCallback=()=>{this.remove()};content=()=>[dl({part:"caption"},this.caption),hs(O.x(),{part:"remove",hidden:!this.removeable,onClick:this.removeCallback})];constructor(){super();this.initAttributes("caption","removeable")}}var ds=wt.elementCreator({tag:"xin-tag",styleSpec:{":host":{"--tag-close-button-color":"#000c","--tag-close-button-bg":"#fffc","--tag-close-button-border-radius":"99px","--tag-button-opacity":"0.5","--tag-button-hover-opacity":"0.75","--tag-bg":q.brandColor("blue"),"--tag-text-color":q.brandTextColor("white"),display:"inline-flex",borderRadius:w.spacing50,color:w.tagTextColor,background:w.tagBg,padding:`0 ${w.spacing75} 0 ${w.spacing75}`,height:`calc(${w.lineHeight} + ${w.spacing50})`,lineHeight:`calc(${w.lineHeight} + ${w.spacing50})`},':host > [part="caption"]':{position:"relative",whiteSpace:"nowrap",overflow:"hidden",flex:"1 1 auto",fontSize:q.fontSize("16px"),color:w.tagTextColor,textOverflow:"ellipsis"},':host [part="remove"]':{boxShadow:"none",margin:`0 ${w.spacing_50} 0 ${w.spacing25}`,padding:0,display:"inline-flex",alignItems:"center",alignSelf:"center",justifyContent:"center",height:w.spacing150,width:w.spacing150,"--text-color":w.tagCloseButtonColor,background:w.tagCloseButtonBg,borderRadius:w.tagCloseButtonBorderRadius,opacity:w.tagButtonOpacity},':host [part="remove"]:hover':{background:w.tagCloseButtonBg,opacity:w.tagButtonHoverOpacity}}});class ji extends _{name="";availableTags=[];value=[];textEntry=!1;editable=!1;placeholder="enter tags";get tags(){return typeof this.value==="string"?this.value.split(",").map((n)=>n.trim()).filter((n)=>n!==""):this.value}constructor(){super();this.initAttributes("name","value","textEntry","availableTags","editable","placeholder")}addTag=(n)=>{if(n.trim()==="")return;let{tags:t}=this;if(!t.includes(n))t.push(n);this.value=t,this.queueRender(!0)};toggleTag=(n)=>{if(this.tags.includes(n))this.value=this.tags.filter((t)=>t!==n);else this.addTag(n);this.queueRender(!0)};enterTag=(n)=>{let{tagInput:t}=this.parts;switch(n.key){case",":{let e=t.value.split(",")[0];this.addTag(e)}break;case"Enter":{let e=t.value.split(",")[0];this.addTag(e)}n.stopPropagation(),n.preventDefault();break;default:}};popSelectMenu=()=>{let{toggleTag:n}=this,{tagMenu:t}=this.parts,e=typeof this.availableTags==="string"?this.availableTags.split(","):this.availableTags,i=this.tags.filter((s)=>!e.includes(s));if(i.length)e.push(null,...i);let a=e.map((s)=>{if(s===""||s===null)return null;else if(typeof s==="object")return{icon:this.tags.includes(s.value)?O.minus():O.plus(),caption:s.caption,action(){n(s.value)}};else return{icon:this.tags.includes(s)?O.minus():O.plus(),caption:s,action(){n(s)}}});yn({target:t,width:"auto",menuItems:a})};content=()=>[cl({part:"tagContainer",class:"row",onClick(n){n.stopPropagation(),n.preventDefault()}}),hl({part:"tagInput",class:"elastic",onKeydown:this.enterTag}),hs({title:"add tag",part:"tagMenu",onClick:this.popSelectMenu},O.chevronDown())];removeTag=(n)=>{if(this.editable){let t=n.target.closest(wt.tagName);this.value=this.tags.filter((e)=>e!==t.caption),t.remove(),this.queueRender(!0)}n.stopPropagation(),n.preventDefault()};render(){super.render();let{tagContainer:n,tagMenu:t,tagInput:e}=this.parts;if(e.value="",e.setAttribute("placeholder",this.placeholder),this.editable)t.toggleAttribute("hidden",!1),e.toggleAttribute("hidden",!this.textEntry);else t.toggleAttribute("hidden",!0),e.toggleAttribute("hidden",!0);n.textContent="";let{tags:i}=this;for(let a of i)n.append(ds({caption:a,removeable:this.editable,removeCallback:this.removeTag}))}}var ul=ji.elementCreator({tag:"xin-tag-list",styleSpec:{":host":{"--tag-list-bg":"#f8f8f8","--touch-size":"44px","--spacing":"16px",display:"grid",gridTemplateColumns:"auto",alignItems:"center",background:w.tagListBg,gap:w.spacing25},":host[editable]":{gridTemplateColumns:`auto ${w.touchSize}`},":host[editable][text-entry]":{gridTemplateColumns:`2fr 1fr ${w.touchSize}`},':host [part="tagContainer"]':{display:"flex",content:'" "',alignItems:"center",background:w.inputBg,borderRadius:w.roundedRadius,boxShadow:w.borderShadow,flexWrap:"nowrap",overflow:"auto hidden",gap:w.spacing25,minHeight:`calc(${w.lineHeight} + ${w.spacing})`,padding:w.spacing25},':host [part="tagMenu"]':{width:w.touchSize,height:w.touchSize,lineHeight:w.touchSize,textAlign:"center",padding:0,margin:0},":host [hidden]":{display:"none !important"}}});var{h2:pl,code:gl}=$;class us extends _{elementSelector="";targetSelector="";constructor(){super();this.initAttributes("elementSelector","targetSelector")}content=()=>[pl({part:"title"},"CSS variables"),O1({part:"variables",changeCallback:this.update})];loadVars=()=>{let{title:n,variables:t}=this.parts;if(t.textContent="",this.elementSelector){n.textContent=`CSS variables for ${this.elementSelector}`;let e=document.querySelector(this.elementSelector);if(!e){setTimeout(this.loadVars,250);return}let i=e.shadowRoot?e.shadowRoot.querySelector("style"):document.querySelector(`style#${this.elementSelector}-component`),a=getComputedStyle(e);if(i&&i.textContent){let s=[...new Set([...i.textContent.match(/--[\w-]+/g)||[]])];for(let o of s){let l=a.getPropertyValue(o),r=l.match(/^(#|rgb|hsl)[\d()a-fA-F]+$/)?"color":"string";if(r==="color")l=gn.fromCss(l).html;t.append(j1(gl(o),{key:o,value:l,type:r}))}}}};update=()=>{let n=this.targetSelector||this.elementSelector;if(n){let t=[...document.querySelectorAll(n)||[]],{value:e}=this.parts.variables;for(let i of t)for(let a of Object.keys(e))i.style.setProperty(a,e[a])}};connectedCallback(){super.connectedCallback(),this.loadVars(),this.parts.variables.addEventListener("change",this.update)}}var y5=us.elementCreator({tag:"xin-css-var-editor"});var Mt=[{text:`# xinjs-ui

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
`,title:"Work in Progress",filename:"TODO.md",path:"TODO.md",pin:"bottom"}];de("demo-style",ra);q1(ca);setTimeout(()=>{let n=getComputedStyle(document.body).getPropertyValue("--brand-color");console.log("welcome to %cui.xinjs.net",`color: ${n}; padding: 0 5px;`)},100);var Qn="xinjs-ui",ml=document.location.search!==""?document.location.search.substring(1).split("&")[0]:"README.md",bl=Mt.find((n)=>n.filename===ml)||Mt[0],{app:ln}=qn({app:{title:Qn,blogUrl:"https://loewald.com",discordUrl:"https://discord.com/invite/ramJ9rgky5",githubUrl:`https://github.com/tonioloewald/${Qn}#readme`,npmUrl:`https://www.npmjs.com/package/${Qn}`,xinjsUrl:"https://xinjs.net",bundleBadgeUrl:`https://deno.bundlejs.com/?q=${Qn}&badge=`,bundleUrl:`https://bundlejs.com/?q=${Qn}`,cdnBadgeUrl:`https://data.jsdelivr.com/v1/package/npm/${Qn}/badge`,cdnUrl:`https://www.jsdelivr.com/package/npm/${Qn}`,optimizeLottie:!1,lottieFilename:"",lottieData:"",docs:Mt,currentDoc:bl}});In.docLink={toDOM(n,t){n.setAttribute("href",`?${t}`)}};In.current={toDOM(n,t){let e=n.getAttribute("href")||"";n.classList.toggle("current",t===e.substring(1))}};setTimeout(()=>{Object.assign(globalThis,{app:ln,xin:Xn,bindings:In,elements:$,vars:w,touch:At})},1000);var ps=document.querySelector("main"),{h2:vl,div:gs,span:Li,a:Ln,img:fs,header:yl,button:xl,template:wl}=$;window.addEventListener("popstate",()=>{let n=window.location.search.substring(1);ln.currentDoc=ln.docs.find((t)=>t.filename===n)||ln.docs[0]});if(ps)ps.append(yl(Ln({href:"/",style:{display:"flex",alignItems:"center",borderBottom:"none"}},I.xinjsUiColor({style:{_fontSize:40,marginRight:10}}),vl({bindText:"app.title"})),Li({class:"elastic"}),aa({minWidth:640},Li({style:{marginRight:w.spacing,display:"flex",alignItems:"center",gap:w.spacing50}},Ln({href:ln.bundleUrl},fs({alt:"bundlejs size badge",src:ln.bundleBadgeUrl})),Ln({href:ln.cdnUrl},fs({alt:"jsdelivr",src:ln.cdnBadgeUrl}))),Li({slot:"small"})),Ln({class:"iconic",title:"discord",target:"_blank"},I.discord(),{href:ln.discordUrl}),Ln({class:"iconic",title:"blog",target:"_blank"},I.blog(),{href:ln.blogUrl}),Ln({class:"iconic",title:"github",target:"_blank"},I.github(),{href:ln.githubUrl}),Ln({class:"iconic",title:"npmjs",target:"_blank"},I.npm(),{href:ln.npmUrl}),$1({hideCaption:!0})),ta({name:"Documentation",navSize:200,minSize:600,style:{flex:"1 1 auto",overflow:"hidden"}},gs({slot:"nav",style:{display:"flex",flexDirection:"column",width:"100%",height:"100%",background:w.navBg,overflowY:"scroll"},bindList:{value:ln.docs}},wl(Ln({class:"doc-link",bindCurrent:"app.currentDoc.filename",bindDocLink:"^.filename",onClick(n){let t=n.target,e=ue(n.target),i=n.target.closest("xin-sidenav");i.contentVisible=!0;let{href:a}=t;window.history.pushState({href:a},"",a),ln.currentDoc=e,n.preventDefault()}},P1({bindText:"^.title"})))),gs({style:{position:"relative",overflowY:"scroll",height:"100%"}},xl({title:"show navigation",class:"transparent close-nav show-within-compact",style:{marginTop:"2px",position:"fixed"},onClick(n){n.target.closest("xin-sidenav").contentVisible=!1}},I.chevronLeft()),J1({style:{display:"block",maxWidth:"44em",margin:"auto",padding:"0 1em",overflow:"hidden"},bindValue:"app.currentDoc.text",didRender(){Se.insertExamples(this,{xinjs:jt,xinjsui:Oi})}}))));

//# debugId=10AFE697373E2DC264756E2164756E21
//# sourceMappingURL=index.js.map
