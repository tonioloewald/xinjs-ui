let e;let t={debug:!1,perf:!1};function i(e){if(null==e||"object"!=typeof e)return e;if(Array.isArray(e))return e.map(i);let t={};for(let l in e){let r=e[l];null!=e&&"object"==typeof e?t[l]=i(r):t[l]=r}return t}let l="-xin-data",r=`.${l}`,n="-xin-event",o=`.${n}`,s=Symbol("xin-path"),a=Symbol("xin-value"),h=e=>e[s];function u(e){return"object"==typeof e&&null!==e&&e[a]||e}let d=new WeakMap,c=new WeakMap,f=e=>{let t=e.cloneNode();if(t instanceof HTMLElement){let l=c.get(e),r=d.get(e);null!=l&&c.set(t,i(l)),null!=r&&d.set(t,i(r))}for(let i of e instanceof HTMLTemplateElement?e.content.childNodes:e.childNodes)i instanceof HTMLElement||i instanceof DocumentFragment?t.appendChild(f(i)):t.appendChild(i.cloneNode());return t},p=new WeakMap,m=e=>{let t=document.body.parentElement;for(;null!=e.parentElement&&e.parentElement!==t;){let t=p.get(e);if(null!=t)return t;e=e.parentElement}return!1},b=Symbol("observer should be removed"),g=[],y=[],v=!1;class x{constructor(e,t){let i;let l="string"==typeof t?`"${t}"`:`function ${t.name}`;if("string"==typeof e)this.test=t=>"string"==typeof t&&""!==t&&(e.startsWith(t)||t.startsWith(e)),i=`test = "${e}"`;else if(e instanceof RegExp)this.test=e.test.bind(e),i=`test = "${e.toString()}"`;else if(e instanceof Function)this.test=e,i=`test = function ${e.name}`;else throw Error("expect listener test to be a string, RegExp, or test function");if(this.description=`${i}, ${l}`,"function"==typeof t)this.callback=t;else throw Error("expect callback to be a path or function");g.push(this)}}let $=()=>{t.perf&&console.time("xin async update");let i=[...y];for(let e of i)g.filter(t=>{let i;try{i=t.test(e)}catch(i){throw Error(`Listener ${t.description} threw "${i}" at "${e}"`)}return i===b?(A(t),!1):i}).forEach(t=>{let i;try{i=t.callback(e)}catch(i){console.error(`Listener ${t.description} threw "${i}" handling "${e}"`)}i===b&&A(t)});y.splice(0),v=!1,"function"==typeof e&&e(),t.perf&&console.timeEnd("xin async update")},w=t=>{let i="string"==typeof t?t:h(t);if(void 0===i)throw console.error("touch was called on an invalid target",t),Error("touch was called on an invalid target");!1===v&&(new Promise(t=>{e=t}),v=setTimeout($)),null==y.find(e=>i.startsWith(e))&&y.push(i)},E=(e,t)=>new x(e,t),A=e=>{let t=g.indexOf(e);if(t>-1)g.splice(t,1);else throw Error("unobserve failed, listener not found")},k=e=>{try{return JSON.stringify(e)}catch(e){return"{has circular references}"}},_=(...e)=>Error(e.map(k).join(" ")),S=()=>new Date(parseInt("1000000000",36)+Date.now()).valueOf().toString(36).slice(1),C=0,L=()=>(parseInt("10000",36)+ ++C).toString(36).slice(-5),T=()=>S()+L(),j={},M={};function O(e){if(""===e)return[];if(Array.isArray(e))return e;{let t=[];for(;e.length>0;){let i=e.search(/\[[^\]]+\]/);if(-1===i){t.push(e.split("."));break}{let l=e.slice(0,i);e=e.slice(i),""!==l&&t.push(l.split(".")),i=e.indexOf("]")+1,t.push(e.slice(1,i-1)),"."===e.slice(i,i+1)&&(i+=1),e=e.slice(i)}}return t}}let D=new WeakMap;function P(e,t){void 0===D.get(e)&&D.set(e,{}),void 0===D.get(e)[t]&&(D.get(e)[t]={});let i=D.get(e)[t];return"_auto_"===t?e.forEach((e,t)=>{void 0===e._auto_&&(e._auto_=T()),i[e._auto_+""]=t}):e.forEach((e,l)=>{i[R(e,t)+""]=l}),i}function N(e,t,i,l){var r;let n;let o=""!==t?(r=i+"",(void 0===(n=(void 0===D.get(e)||void 0===D.get(e)[t]?P(e,t):D.get(e)[t])[r])||R(e[n],t)+""!==r)&&(n=P(e,t)[r]),n):i;if(l===j)return e.splice(o,1),D.delete(e),Symbol("deleted");if(l===M)""===t&&void 0===e[o]&&(e[o]={});else if(void 0!==l){if(void 0!==o)e[o]=l;else if(""!==t&&R(l,t)+""==i+"")e.push(l),o=e.length-1;else throw Error(`byIdPath insert failed at [${t}=${i}]`)}return e[o]}function F(e){if(!Array.isArray(e))throw _("setByPath failed: expected array, found",e)}function q(e){if(null==e||!(e instanceof Object))throw _("setByPath failed: expected Object, found",e)}function R(e,t){let i,l,r,n;let o=O(t),s=e;for(i=0,l=o.length;void 0!==s&&i<l;i++){let e=o[i];if(Array.isArray(e))for(r=0,n=e.length;void 0!==s&&r<n;r++){let t=e[r];s=s[t]}else if(0===s.length){if(s=s[e.slice(1)],"="!==e[0])return}else if(e.includes("=")){let[t,...i]=e.split("=");s=N(s,t,i.join("="))}else s=s[r=parseInt(e,10)]}return s}let W=["sort","splice","copyWithin","fill","pop","push","reverse","shift","unshift"],B={},H=/^\.?([^.[\](),])+(\.[^.[\](),]+|\[\d+\]|\[[^=[\](),]*=[^[\]()]+\])*$/,I=e=>H.test(e),z=(e="",t="")=>""===e?t:null!==t.match(/^\d+$/)||t.includes("=")?`${e}[${t}]`:`${e}.${t}`,Q=(e="")=>({get(t,i){if(i===s)return e;if(i===a)return t;if("symbol"==typeof i)return t[i];let l=i,r=l.match(/^([^.[]+)\.(.+)$/)??l.match(/^([^\]]+)(\[.+)/)??l.match(/^(\[[^\]]+\])\.(.+)$/)??l.match(/^(\[[^\]]+\])\[(.+)$/);if(null!==r){let[,i,l]=r,n=z(e,i),o=R(t,i);return null!==o&&"object"==typeof o?new Proxy(o,Q(n))[l]:o}if(l.startsWith("[")&&l.endsWith("]")&&(l=l.substring(1,l.length-1)),!Array.isArray(t)&&void 0!==t[l]||Array.isArray(t)&&l.includes("=")){let i;if(l.includes("=")){let[e,r]=l.split("=");i=t.find(t=>`${R(t,e)}`===r)}else i=t[l];if(null!==i&&"object"==typeof i){let t=z(e,l);return new Proxy(i,Q(t))}return"function"==typeof i?i.bind(t):i}if(!Array.isArray(t))return t[l];{let i=t[l];return"function"==typeof i?(...i)=>{let r=Array.prototype[l].apply(t,i);return W.includes(l)&&w(e),r}:"object"==typeof i?new Proxy(i,Q(z(e,l))):i}},set(t,i,l){null!=l&&l[s]&&(l=l[a]);let r=z(e,i);if(!I(r))throw Error(`setting invalid path ${r}`);let n=V[r];return null!=n&&null!=n[a]&&(n=n[a]),n!==l&&function(e,t,i){let l=e,r=O(t);for(;null!=l&&r.length>0;){let e=r.shift();if("string"==typeof e){let t=e.indexOf("=");if(t>-1){0===t?q(l):F(l);let n=e.slice(0,t),o=e.slice(t+1);if(l=N(l,n,o,r.length>0?M:i),0===r.length)return!0}else{F(l);let t=parseInt(e,10);if(r.length>0)l=l[t];else{if(i!==j){if(l[t]===i)return!1;l[t]=i}else l.splice(t,1);return!0}}}else if(Array.isArray(e)&&e.length>0)for(q(l);e.length>0;){let t=e.shift();if(e.length>0||r.length>0){var n,o;n=l,o=e.length>0?{}:[],void 0===n[t]&&void 0!==o&&(n[t]=o),l=n[t]}else{if(i!==j){if(l[t]===i)return!1;l[t]=i}else{if(!Object.prototype.hasOwnProperty.call(l,t))return!1;delete l[t]}return!0}}else throw Error(`setByPath failed, bad path ${t}`)}throw Error(`setByPath(${e}, ${t}, ${i}) failed`)}(B,r,l)&&w(r),!0}}),V=new Proxy(B,Q()),{document:Z,MutationObserver:Y}=globalThis,G=(e,t)=>{let i=c.get(e);for(let l of i){let{path:i,binding:r,options:n}=l,{toDOM:o}=r;if(null!=o){if(i.startsWith("^")){let t=m(e);if(null!=t&&null!=t[s])i=l.path=`${t[s]}${i.substring(1)}`;else throw console.error(`Cannot resolve relative binding ${i}`,e,"is not part of a list"),Error(`Cannot resolve relative binding ${i}`)}(null==t||i.startsWith(t))&&o(e,V[i],n)}}};if(null!=Y){let e=new Y(e=>{e.forEach(e=>{[...e.addedNodes].forEach(e=>{e instanceof HTMLElement&&[...e.querySelectorAll(r)].forEach(e=>G(e))})})});e.observe(Z.body,{subtree:!0,childList:!0})}((e,t)=>{let i="function"==typeof t?t:V[t];if("function"!=typeof i)throw Error(`observe expects a function or path to a function, ${t} is neither`);return E(e,i)})(()=>!0,e=>{let t=Z.querySelectorAll(r);for(let i of t)G(i,e)});let U=e=>{let t=e.target.closest(r);for(;null!=t;){let e=c.get(t);for(let i of e){let{binding:e,path:l}=i,{fromDOM:r}=e;if(null!=r){let e;try{e=r(t,i.options)}catch(e){throw console.error("Cannot get value from",t,"via",i),Error("Cannot obtain value fromDOM")}if(null!=e){let t=V[l];if(null==t)V[l]=e;else{let i=null!=t[s]?t[a]:t,r=null!=e[s]?e[a]:e;i!==r&&(V[l]=r)}}}}t=t.parentElement.closest(r)}};null!=globalThis.document&&(Z.body.addEventListener("change",U,!0),Z.body.addEventListener("input",U,!0));let J=new Set,K=e=>{let t=e?.target.closest(o),i=!1,l=new Proxy(e,{get(t,l){if("stopPropagation"===l)return()=>{e.stopPropagation(),i=!0};{let e=t[l];return"function"==typeof e?e.bind(t):e}}});for(;!i&&null!=t;){let r=d.get(t),n=r[e.type]||[];for(let e of n){if("function"==typeof e)e(l);else{let t=V[e];if("function"==typeof t)t(l);else throw Error(`no event handler found at path ${e}`)}if(i)continue}t=null!=t.parentElement?t.parentElement.closest(o):null}},X=(e,t,i)=>{let l=d.get(e);e.classList.add(n),null==l&&(l={},d.set(e,l)),l[t]||(l[t]=[]),l[t].includes(i)||l[t].push(i),J.has(t)||(J.add(t),Z.body.addEventListener(t,K,!0))},ee=(e,t)=>{let i=new Event(t);e.dispatchEvent(i)},et=e=>e instanceof HTMLInputElement?e.type:e instanceof HTMLSelectElement&&e.hasAttribute("multiple")?"multi-select":"other",ei=(e,t)=>{switch(et(e)){case"radio":e.checked=e.value===t;break;case"checkbox":e.checked=t;break;case"date":e.valueAsDate=new Date(t);break;case"multi-select":for(let i of[...e.querySelectorAll("option")])i.selected=t[i.value];break;default:e.value=t}},el=e=>{switch(et(e)){case"radio":{let t=e.parentElement?.querySelector(`[name="${e.name}"]:checked`);return null!=t?t.value:null}case"checkbox":return e.checked;case"date":return e.valueAsDate.toISOString();case"multi-select":return[...e.querySelectorAll("option")].reduce((e,t)=>(e[t.value]=t.selected,e),{});default:return e.value}},{ResizeObserver:er}=globalThis,en=null!=er?new er(e=>{for(let t of e){let e=t.target;ee(e,"resize")}}):{observe(){},unobserve(){}};function eo(e){let t=document.createElement("xin-slot");""!==e.name&&t.setAttribute("name",e.name),e.replaceWith(t)}let es=(e,t)=>{let i=!1;if(null!=e&&null!=t){if("string"==typeof t)e.textContent=t;else if(Array.isArray(t))t.forEach(t=>{e.append(t instanceof Node?f(t):t),t instanceof Node&&null!=t.querySelector("slot")&&(i=!0)});else if(t instanceof HTMLElement||t instanceof DocumentFragment){let l=[...t.querySelectorAll("slot")];l.length>0&&(i=!0,l.forEach(eo)),e.append(f(t))}else throw Error("expect text content or document node")}return i},ea=(e,t=250)=>{let i;let l=Date.now()-t,r=!1;return(...n)=>{if(clearTimeout(i),i=setTimeout(async()=>{e(...n),l=Date.now()},t),!r&&Date.now()-l>=t){r=!0;try{e(...n),l=Date.now()}finally{r=!1}}}},eh=Symbol("list-binding");function eu(e,t){let i=[...e.querySelectorAll(r)];for(let l of(e.matches(r)&&i.unshift(e),i)){let e=c.get(l);for(let i of e)i.path.startsWith("^")&&(i.path=`${t}${i.path.substring(1)}`),null!=i.binding.toDOM&&i.binding.toDOM(l,V[i.path])}}class ed{_array=[];constructor(e,t={}){if(this.boundElement=e,this.itemToElement=new WeakMap,1!==e.children.length)throw Error("ListBinding expects an element with exactly one child element");if(e.children[0]instanceof HTMLTemplateElement){let t=e.children[0];if(1!==t.content.children.length)throw Error("ListBinding expects a template with exactly one child element");this.template=f(t.content.children[0])}else this.template=e.children[0],this.template.remove();this.listTop=document.createElement("div"),this.listBottom=document.createElement("div"),this.boundElement.append(this.listTop),this.boundElement.append(this.listBottom),this.options=t,null!=t.virtual&&(en.observe(this.boundElement),this._update=ea(()=>{this.update(this._array,!0)},16),this.boundElement.addEventListener("scroll",this._update),this.boundElement.addEventListener("resize",this._update))}visibleSlice(){let{virtual:e,hiddenProp:t,visibleProp:i}=this.options,l=this._array;void 0!==t&&(l=l.filter(e=>!0!==e[t])),void 0!==i&&(l=l.filter(e=>!0===e[i]));let r=0,n=l.length-1,o=0,s=0;if(null!=e){let t=this.boundElement.offsetWidth,i=this.boundElement.offsetHeight,a=null!=e.width?Math.max(1,Math.floor(t/e.width)):1,h=Math.ceil(i/e.height)+1,u=Math.ceil(l.length/a),d=Math.floor(this.boundElement.scrollTop/e.height);d>u-h+1&&(d=Math.max(0,u-h+1)),n=(r=d*a)+a*h-1,o=d*e.height,s=Math.max(u*e.height-i-o,0)}return{items:l,firstItem:r,lastItem:n,topBuffer:o,bottomBuffer:s}}update(e,i){null==e&&(e=[]),this._array=e;let{initInstance:l,updateInstance:r,hiddenProp:n,visibleProp:o}=this.options,s=h(e),a=this.visibleSlice();this.boundElement.classList.toggle("-xin-empty-list",0===a.items.length);let d=this._previousSlice,{firstItem:c,lastItem:m,topBuffer:b,bottomBuffer:g}=a;if(void 0===n&&void 0===o&&!0===i&&null!=d&&c===d.firstItem&&m===d.lastItem)return;this._previousSlice=a;let y=0,v=0,x=0;for(let e of[...this.boundElement.children]){if(e===this.listTop||e===this.listBottom)continue;let t=p.get(e);if(null==t)e.remove();else{let i=a.items.indexOf(t);(i<c||i>m)&&(e.remove(),this.itemToElement.delete(t),p.delete(e),y++)}}this.listTop.style.height=String(b)+"px",this.listBottom.style.height=String(g)+"px";let $=[],{idPath:w}=this.options;for(let e=c;e<=m;e++){let t=a.items[e];if(void 0===t)continue;let i=this.itemToElement.get(u(t));if(null==i){if(x++,i=f(this.template),"object"==typeof t&&(this.itemToElement.set(u(t),i),p.set(i,u(t))),this.boundElement.insertBefore(i,this.listBottom),null!=w){let e=t[w],l=`${s}[${w}=${e}]`;eu(i,l)}else{let t=`${s}[${e}]`;eu(i,t)}null!=l&&l(i,t)}null!=r&&r(i,t),$.push(i)}let E=null;for(let e of $)e.previousElementSibling!==E&&(v++,E?.nextElementSibling!=null?this.boundElement.insertBefore(e,E.nextElementSibling):this.boundElement.insertBefore(e,this.listBottom)),E=e;t.perf&&console.log(s,"updated",{removed:y,created:x,moved:v})}}let ec=(e,t)=>{let i=e[eh];return null==i&&(i=new ed(e,t),e[eh]=i),i},ef={value:{toDOM(e,t){ei(e,t)},fromDOM:e=>el(e)},text:{toDOM(e,t){e.textContent=t}},enabled:{toDOM(e,t){e.disabled=!t}},disabled:{toDOM(e,t){e.disabled=!!t}},style:{toDOM(e,t){if("object"==typeof t)for(let i of Object.keys(t))e.style[i]=t[i];else if("string"==typeof t)e.setAttribute("style",t);else throw Error("style binding expects either a string or object")}},list:{toDOM(e,t,i){let l=ec(e,i);l.update(t)}}};function ep(e,t,i){return t<e?e:t>i?i:t}function em(e,t,i){return(i=ep(0,i,1))*(t-e)+e}let eb=e=>("00"+Math.round(Number(e)).toString(16)).slice(-2);class eg{constructor(e,t,i){e/=255,t/=255,i/=255;let l=Math.max(e,t,i),r=l-Math.min(e,t,i),n=0!==r?l===e?(t-i)/r:l===t?2+(i-e)/r:4+(e-t)/r:0;this.h=60*n<0?60*n+360:60*n,this.s=0!==r?l<=.5?r/(2*l-r):r/(2-(2*l-r)):0,this.l=(2*l-r)/2}}let ey=void 0!==globalThis.document?globalThis.document.createElement("span"):void 0;class ev{static fromCss(e){let t=e;ey instanceof HTMLSpanElement&&(ey.style.color=e,document.body.appendChild(ey),t=getComputedStyle(ey).color,ey.remove());let[i,l,r,n]=t.match(/[\d.]+/g);return new ev(Number(i),Number(l),Number(r),null==n?1:Number(n))}static fromHsl(e,t,i,l=1){return ev.fromCss(`hsla(${e.toFixed(0)}, ${(100*t).toFixed(0)}%, ${(100*i).toFixed(0)}%, ${l.toFixed(2)})`)}constructor(e,t,i,l=1){this.r=ep(0,e,255),this.g=ep(0,t,255),this.b=ep(0,i,255),this.a=void 0!==l?ep(0,l,1):l=1}get inverse(){return new ev(255-this.r,255-this.g,255-this.b,this.a)}get inverseLuminance(){let{h:e,s:t,l:i}=this._hsl;return ev.fromHsl(e,t,1-i,this.a)}get rgb(){let{r:e,g:t,b:i}=this;return`rgb(${e.toFixed(0)},${t.toFixed(0)},${i.toFixed(0)})`}get rgba(){let{r:e,g:t,b:i,a:l}=this;return`rgba(${e.toFixed(0)},${t.toFixed(0)},${i.toFixed(0)},${l.toFixed(2)})`}get RGBA(){return[this.r/255,this.g/255,this.b/255,this.a]}get ARGB(){return[this.a,this.r/255,this.g/255,this.b/255]}get _hsl(){return null==this._hslCached&&(this._hslCached=new eg(this.r,this.g,this.b)),this._hslCached}get hsl(){let{h:e,s:t,l:i}=this._hsl;return`hsl(${e.toFixed(0)}, ${(100*t).toFixed(0)}%, ${(100*i).toFixed(0)}%)`}get hsla(){let{h:e,s:t,l:i}=this._hsl;return`hsla(${e.toFixed(0)}, ${(100*t).toFixed(0)}%, ${(100*i).toFixed(0)}%, ${this.a.toFixed(2)})`}get mono(){let e=255*this.brightness;return new ev(e,e,e)}get brightness(){return(.299*this.r+.587*this.g+.114*this.b)/255}get html(){return 1===this.a?"#"+eb(this.r)+eb(this.g)+eb(this.b):"#"+eb(this.r)+eb(this.g)+eb(this.b)+eb(Math.floor(255*this.a))}brighten(e){let{h:t,s:i,l:l}=this._hsl;return l=ep(0,l+e*(1-l),1),ev.fromHsl(t,i,l,this.a)}darken(e){let{h:t,s:i,l:l}=this._hsl;return l=ep(0,l*(1-e),1),ev.fromHsl(t,i,l,this.a)}saturate(e){let{h:t,s:i,l:l}=this._hsl;return i=ep(0,i+e*(1-i),1),ev.fromHsl(t,i,l,this.a)}desaturate(e){let{h:t,s:i,l:l}=this._hsl;return i=ep(0,i*(1-e),1),ev.fromHsl(t,i,l,this.a)}rotate(e){let{h:t,s:i,l:l}=this._hsl;return t=(t+360+e)%360,ev.fromHsl(t,i,l,this.a)}opacity(e){let{h:t,s:i,l:l}=this._hsl;return ev.fromHsl(t,i,l,e)}swatch(){let{r:e,g:t,b:i,a:l}=this;console.log(`%c   %c ${this.html}, rgba(${e}, ${t}, ${i}, ${l}), ${this.hsla}`,`background-color: rgba(${e}, ${t}, ${i}, ${l})`,"background-color: #eee")}blend(e,t){return new ev(em(this.r,e.r,t),em(this.g,e.g,t),em(this.b,e.b,t),em(this.a,e.a,t))}}function ex(e){return e.replace(/[A-Z]/g,e=>`-${e.toLocaleLowerCase()}`)}let e$={},ew=(e,...t)=>{void 0===e$[e]&&(e$[e]=globalThis.document.createElement(e));let i=e$[e].cloneNode(),r={};for(let e of t)e instanceof Element||e instanceof DocumentFragment||"string"==typeof e||"number"==typeof e?i instanceof HTMLTemplateElement?i.content.append(e):i.append(e):Object.assign(r,e);for(let e of Object.keys(r)){let t=r[e];if("apply"===e)t(i);else if("style"===e){if("object"==typeof t)for(let e of Object.keys(t))e.startsWith("--")?i.style.setProperty(e,t[e]):i.style[e]=t[e];else i.setAttribute("style",t)}else if(null!=e.match(/^on[A-Z]/)){let l=e.substring(2).toLowerCase();X(i,l,t)}else if(null!=e.match(/^bind[A-Z]/)){let r=e.substring(4,5).toLowerCase()+e.substring(5),n=ef[r];if(void 0!==n)!function(e,t,i,r){let n;if(e instanceof DocumentFragment)throw Error("bind cannot bind to a DocumentFragment");if("object"==typeof t&&void 0===t[s]&&void 0===r){let{value:e}=t;n="string"==typeof e?e:e[s],r=t,delete r.value}else n="string"==typeof t?t:t[s];if(null==n)throw Error("bind requires a path or object with xin Proxy");let{toDOM:o}=i;e.classList.add(l);let a=c.get(e);null==a&&(a=[],c.set(e,a)),a.push({path:n,binding:i,options:r}),null==o||n.startsWith("^")||w(n)}(i,t,n);else throw Error(`${e} is not allowed, bindings.${r} is not defined`)}else if(void 0!==i[e])i[e]=t;else{let l=ex(e);"class"===l?t.split(" ").forEach(e=>{i.classList.add(e)}):void 0!==i[l]?i[l]=t:"boolean"==typeof t?t?i.setAttribute(l,""):i.removeAttribute(l):i.setAttribute(l,t)}}return i},eE=new Proxy({fragment:(...e)=>{let t=globalThis.document.createDocumentFragment();for(let i of e)t.append(i);return t}},{get(e,t){if(null==(t=t.replace(/[A-Z]/g,e=>`-${e.toLocaleLowerCase()}`)).match(/^\w+(-\w+)*$/))throw Error(`${t} does not appear to be a valid element tagName`);return void 0===e[t]&&(e[t]=(...e)=>ew(t,...e)),e[t]},set(){throw Error("You may not add new properties to elements")}}),eA=["animation-iteration-count","flex","flex-base","flex-grow","flex-shrink","gap","opacity","order","tab-size","widows","z-index","zoom"],ek=(e,t,i)=>void 0===i?"":"string"==typeof i||eA.includes(t)?`${e}  ${t}: ${i};`:`${e}  ${t}: ${i}px;`,e_=(e,t,i="")=>{let l=ex(e);if("object"!=typeof t)return ek(i,l,t);{let l=Object.keys(t).map(e=>e_(e,t[e],`${i}  `)).join("\n");return`${i}  ${e} {
${l}
${i}  }`}},eS=(e,t="")=>{let i=Object.keys(e).map(i=>{let l=e[i];if("string"==typeof l){if("@import"===i)return`@import url('${l}');`;throw Error("top-level string value only allowed for `@import`")}let r=Object.keys(l).map(e=>e_(e,l[e])).join("\n");return`${t}${i} {
${r}
}`});return i.join("\n\n")},eC=new Proxy({},{get(e,t){if(null==e[t]){let[,i,,l,r,n]=(t=t.replace(/[A-Z]/g,e=>`-${e.toLocaleLowerCase()}`)).match(/^([^\d_]*)((_)?(\d+)(\w*))?$/);if(i=`--${i}`,null!=r){let o=null==l?Number(r)/100:-Number(r)/100;switch(n){case"b":{let l=getComputedStyle(document.body).getPropertyValue(i);e[t]=o>0?ev.fromCss(l).brighten(o).rgba:ev.fromCss(l).darken(-o).rgba}break;case"s":{let l=getComputedStyle(document.body).getPropertyValue(i);e[t]=o>0?ev.fromCss(l).saturate(o).rgba:ev.fromCss(l).desaturate(-o).rgba}break;case"h":{let l=getComputedStyle(document.body).getPropertyValue(i);e[t]=ev.fromCss(l).rotate(100*o).rgba,console.log(ev.fromCss(l).hsla,ev.fromCss(l).rotate(o).hsla)}break;case"o":{let l=getComputedStyle(document.body).getPropertyValue(i);e[t]=ev.fromCss(l).opacity(o).rgba}break;case"":e[t]=`calc(var(${i}) * ${o})`;break;default:throw console.error(n),Error(`Unrecognized method ${n} for css variable ${i}`)}}else e[t]=`var(${i})`}return e[t]}}),eL=0;class eT extends HTMLElement{static elements=eE;content=eE.slot();static StyleNode(e){return eE.style(eS(e))}static elementCreator(e){if(null==this._elementCreator){let t=null!=e?e.tag:null;null!=t||((t=ex(this.name)).startsWith("-")&&(t=t.substring(1)),t.includes("-")||(t+="-elt"));let i=0;for(;null==this._elementCreator;){i+=1;let l=1===i?t:`${t}-${i}`;try{window.customElements.define(l,this,e),this._elementCreator=eE[l]}catch(e){throw Error(`could not define ${this.name} as <${l}>: ${String(e)}`)}}}return this._elementCreator}initAttributes(...e){let t={},l={},r=new MutationObserver(t=>{let i=!1;t.forEach(t=>{i=!!(t.attributeName&&e.includes(t.attributeName.replace(/-([a-z])/g,(e,t)=>t.toLocaleUpperCase())))}),i&&void 0!==this.queueRender&&this.queueRender(!1)});r.observe(this,{attributes:!0}),e.forEach(e=>{t[e]=i(this[e]);let r=ex(e);Object.defineProperty(this,e,{enumerable:!1,get(){return"boolean"==typeof t[e]?this.hasAttribute(r):this.hasAttribute(r)?"number"==typeof t[e]?parseFloat(this.getAttribute(r)):this.getAttribute(r):void 0!==l[e]?l[e]:t[e]},set(i){"boolean"==typeof t[e]?i!==this[e]&&(i?this.setAttribute(r,""):this.removeAttribute(r),this.queueRender()):"number"==typeof t[e]?i!==parseFloat(this[e])&&(this.setAttribute(r,i),this.queueRender()):("object"==typeof i||`${i}`!=`${this[e]}`)&&(null==i||"object"==typeof i?this.removeAttribute(r):this.setAttribute(r,i),this.queueRender(),l[e]=i)}})})}initValue(){let e=Object.getOwnPropertyDescriptor(this,"value");if(void 0===e||void 0!==e.get||void 0!==e.set)return;let t=this.hasAttribute("value")?this.getAttribute("value"):i(this.value);delete this.value,Object.defineProperty(this,"value",{enumerable:!1,get:()=>t,set(e){t!==e&&(t=e,this.queueRender(!0))}})}get refs(){let e=null!=this.shadowRoot?this.shadowRoot:this;return null==this._refs&&(this._refs=new Proxy({},{get(t,i){if(void 0===t[i]){let l=e.querySelector(`[data-ref="${i}"]`);if(null==l&&(l=e.querySelector(i)),null==l)throw Error(`elementRef "${i}" does not exist!`);l.removeAttribute("data-ref"),t[i]=l}return t[i]}})),this._refs}constructor(){super(),eL+=1,this.initAttributes("hidden"),this.instanceId=`${this.tagName.toLocaleLowerCase()}-${eL}`,this._value=i(this.defaultValue)}connectedCallback(){this.hydrate(),null!=this.role&&this.setAttribute("role",this.role),void 0!==this.onResize&&(en.observe(this),null==this._onResize&&(this._onResize=this.onResize.bind(this)),this.addEventListener("resize",this._onResize)),null!=this.value&&null!=this.getAttribute("value")&&(this._value=this.getAttribute("value")),this.queueRender()}disconnectedCallback(){en.unobserve(this)}_changeQueued=!1;_renderQueued=!1;queueRender(e=!1){this._hydrated&&(this._changeQueued||(this._changeQueued=e),this._renderQueued||(this._renderQueued=!0,requestAnimationFrame(()=>{this._changeQueued&&ee(this,"change"),this._changeQueued=!1,this._renderQueued=!1,this.render()})))}_hydrated=!1;hydrate(){if(!this._hydrated){this.initValue();let e="function"==typeof this.content?this.content():this.content;if(void 0!==this.styleNode){let t=this.attachShadow({mode:"open"});t.appendChild(this.styleNode),es(t,e)}else{let t=[...this.childNodes];if(es(this,e)&&t.length>0){let e={"":this};[...this.querySelectorAll("xin-slot")].forEach(t=>{e[t.name]=t}),t.forEach(t=>{let i=e[""],l=t instanceof Element?e[t.slot]:i;(void 0!==l?l:i).append(t)})}}this._hydrated=!0}}render(){}}(class extends eT{name="";content=null;constructor(){super(),this.initAttributes("name")}}).elementCreator({tag:"xin-slot"});let ej={};function eM(e){if(void 0===ej[e]){let t=eE.script({src:e});document.head.append(t),ej[e]=new Promise(e=>{t.onload=e})}return ej[e]}let eO={};function eD(e){if(void 0===eO[e]){let t=eE.link({rel:"stylesheet",type:"text/css",href:e});document.head.append(t),ej[e]=new Promise(e=>{t.onload=e})}return eO[e]}let eP=void 0===globalThis.bodymovin?eM("https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js"):Promise.resolve();class eN extends eT{content=null;src="";json="";config={renderer:"svg",loop:!0,autoplay:!0};animation;styleNode=eT.StyleNode({":host":{width:400,height:400,display:"block"}});_loading=!1;get loading(){return this._loading}constructor(){super(),this.initAttributes("src","loading")}doneLoading=()=>{this._loading=!1};load=()=>{this._loading=!0,this.config.container=this.shadowRoot,""!==this.json?(this.config.animationData=this.json,delete this.config.path):""!==this.src?(delete this.config.animationData,this.config.path=this.src):console.log("%c<bodymovin-player>%c expected either %cjson%c (animation data) or %csrc% c(url) but found neither.","color: #44f; background: #fff; padding: 0 5px","color: default","color: #44f; background: #fff; padding: 0 5px","color: default","color: #44f; background: #fff; padding: 0 5px","color: default"),this.animation=globalThis.bodymovin.loadAnimation(this.config),this.animation.addEventListener("DOMLoaded",this.doneLoading)};render(){super.render(),eP.then(this.load).catch(e=>{console.error(e)})}}let eF=eN.elementCreator({tag:"bodymovin-player"});eD("https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css");let eq=eM("https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.js"),eR=[{name:"streets",url:"mapbox://styles/mapbox/streets-v10"},{name:"outdoors",url:"mapbox://styles/mapbox/outdoors-v10"},{name:"light",url:"mapbox://styles/mapbox/light-v9"},{name:"dark",url:"mapbox://styles/mapbox/dark-v9"},{name:"satellite",url:"mapbox://styles/mapbox/satellite-v9"},{name:"sateliite + streets",url:"mapbox://styles/mapbox/satellite-streets-v10"},{name:"preview day",url:"mapbox://styles/mapbox/navigation-preview-day-v2"},{name:"preview night",url:"mapbox://styles/mapbox/navigation-preview-night-v2"},{name:"guidance day",url:"mapbox://styles/mapbox/navigation-guidance-day-v2"},{name:"guidance night",url:"mapbox://styles/mapbox/navigation-guidance-night-v2"}],{div:eW}=eE;class eB extends eT{coords="38.2641789,-120.5922877,5.8";content=eW({style:{width:"100%",height:"100%"}});map;style=eR[0];styleNode=eT.StyleNode({":host":{display:"block",position:"relative",width:"400px",height:"400px"}});constructor(){super(),this.initAttributes("coords")}connectedCallback(){super.connectedCallback()}render(){super.render();let{div:e}=this.refs,[t,i,l]=this.coords.split(",").map(e=>Number(e));eq.then(()=>{globalThis.mapboxgl.accessToken="pk.eyJ1IjoicG9kcGVyc29uIiwiYSI6ImNqc2JlbWU0bjA1ZmY0YW5ycHZod3VhbWcifQ.arvqfpOqMgFYkKgQ35UScA",this.map=new globalThis.mapboxgl.Map({container:e,style:this.style.url,zoom:l,center:[i,t]}),this.map.on("render",()=>this.map.resize())})}}let eH=eB.elementCreator({tag:"map-box"}),{div:eI,slot:ez}=eE;class eQ extends eT{value=0;styleNode=eT.StyleNode({":host":{display:"flex",flexDirection:"column",position:"relative",overflow:"hidden"},slot:{position:"relative",display:"block",flex:"1 1 auto",overflow:"hidden",overflowY:"auto"},":host .tab-holder":{display:"flex",flexDirection:"column"},":host .tabs":{display:"flex",userSelect:"none"},":host .tabs > div":{padding:`${eC.spacing50} ${eC.spacing}`,cursor:"default"},":host .tabs > .selected":{color:eC.tabSelectorSelectedColor},":host .border":{background:"var(--bar-color, #ccc)"},":host .border > .selected":{content:" ",width:0,height:"var(--bar-height, 2px)",background:eC.tabSelectorSelectedColor,transition:"ease-out 0.2s"}});content=[eI({class:"tab-holder"},eI({class:"tabs",dataRef:"tabs"}),eI({class:"border"},eI({class:"selected",dataRef:"selected"}))),ez()];constructor(){super(),this.initAttributes("anne","example")}keyTab=e=>{let{tabs:t}=this.refs,i=[...t.children].indexOf(e.target);switch(e.key){case"ArrowLeft":this.value=(i+Number(t.children.length)-1)%t.children.length,t.children[this.value].focus(),e.preventDefault();break;case"ArrowRight":this.value=(i+1)%t.children.length,t.children[this.value].focus(),e.preventDefault();break;case" ":this.pickTab(e),e.preventDefault()}};pickTab=e=>{let{tabs:t}=this.refs,i=e.target,l=[...t.children].indexOf(i);l>-1&&(this.value=l)};setupTabs=()=>{let{tabs:e}=this.refs,t=[...this.querySelectorAll("[name]")];for(let i of(e.textContent="",t))e.append(eI(i.getAttribute("name"),{tabindex:0}))};connectedCallback(){super.connectedCallback();let{tabs:e}=this.refs;e.addEventListener("click",this.pickTab),e.addEventListener("keydown",this.keyTab),this.setupTabs()}render(){let{tabs:e,selected:t}=this.refs,i=[...this.querySelectorAll("[name]")];for(let l=0;l<i.length;l++){let r=i[l],n=e.children[l];this.value===Number(l)?(n.classList.add("selected"),t.style.marginLeft=`${n.offsetLeft-e.offsetLeft}px`,t.style.width=`${n.offsetWidth}px`,r.removeAttribute("hidden")):(n.classList.remove("selected"),r.setAttribute("hidden",""))}}}let eV=eQ.elementCreator({tag:"tab-selector"});export{eF as bodymovinPlayer,eM as scriptTag,eD as styleSheet,eH as mapBox,eV as tabSelector};
//# sourceMappingURL=index.js.map
