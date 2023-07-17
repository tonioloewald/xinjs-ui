import{Component as e,elements as t,xinValue as i,xin as s,vars as n,debounce as o,varDefault as a}from"xinjs";import{marked as r}from"marked";const l={};function c(e,i){if(void 0===l[e]){if(void 0!==i){const t=globalThis[i];l[e]=Promise.resolve({[i]:t})}const s=t.script({src:e});document.head.append(s),l[e]=new Promise((e=>{s.onload=()=>e(globalThis)}))}return l[e]}const h={};function d(e){if(void 0===h[e]){const i=t.link({rel:"stylesheet",type:"text/css",href:e});document.head.append(i),h[e]=new Promise((e=>{i.onload=e}))}return h[e]}class u extends e{content=null;src="";json="";config={renderer:"svg",loop:!0,autoplay:!0};styleNode=e.StyleNode({":host":{width:400,height:400,display:"inline-block"}});_loading=!1;get loading(){return this._loading}constructor(){super(),this.initAttributes("src","json"),void 0===u.bodymovinAvailable&&(u.bodymovinAvailable=c("https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js","bodymovin"))}doneLoading=()=>{this._loading=!1};load=({bodymovin:e})=>{this._loading=!0,this.config.container=this.shadowRoot,""!==this.json?(this.config.animationData=this.json,delete this.config.path):""!==this.src?(delete this.config.animationData,this.config.path=this.src):console.log("%c<bodymovin-player>%c expected either %cjson%c (animation data) or %csrc% c(url) but found neither.","color: #44f; background: #fff; padding: 0 5px","color: default","color: #44f; background: #fff; padding: 0 5px","color: default","color: #44f; background: #fff; padding: 0 5px","color: default"),this.animation&&(this.animation.destroy(),this.shadowRoot.querySelector("svg").remove()),this.animation=e.loadAnimation(this.config),this.animation.addEventListener("DOMLoaded",this.doneLoading)};render(){super.render(),u.bodymovinAvailable.then(this.load).catch((e=>{console.error(e)}))}}const p=u.elementCreator({tag:"bodymovin-player"}),m="https://cdnjs.cloudflare.com/ajax/libs/ace/1.23.2/",v="ace/theme/monokai";const b=class extends e{value="";mode="javascript";disabled=!1;role="code editor";get editor(){return this._editor}options={};theme=v;styleNode=e.StyleNode({":host":{display:"block",position:"relative"}});constructor(){super(),this.initAttributes("mode","theme","disabled")}onResize(){void 0!==this.editor&&this.editor.resize(!0)}updateValue=async e=>{e.target!==this&&this.editor&&(this.value=this.editor.getValue())};connectedCallback(){super.connectedCallback(),""===this.value&&(this.value=this.textContent.trim("\n")),void 0===this._editorPromise&&(this._editorPromise=(async(e,t="html",i={},s=v)=>{const{ace:n}=await c(`${m}ace.min.js`);n.config.set("basePath",m);const o=n.edit(e,{mode:`ace/mode/${t}`,tabSize:2,useSoftTabs:!0,useWorker:!1,...i});return o.setTheme(s),o})(this,this.mode,this.options,this.theme),this._editorPromise.then((e=>{this._editor=e,e.setValue(this.value,1)}))),this.addEventListener("change",this.updateValue)}render(){super.render(),void 0!==this.editor&&this.editor.getValue()!==this.value&&this.editor.setValue(this.value),void 0!==this._editorPromise&&this._editorPromise.then((e=>e.setReadOnly(this.disabled)))}}.elementCreator({tag:"code-editor"}),f=(e,i,s="default")=>{if(e.type.startsWith("touch")){if(e.type.startsWith("touch")){const t=e.touches[0].clientX,s=e.touches[0].clientY,n=e.target;let o=0,a=0;const r=e=>{e.touches.length>0&&(o=e.touches[0].clientX-t,a=e.touches[0].clientY-s),!0!==i(o,a,e)&&0!==e.touches.length||(n.removeEventListener("touchmove",r),n.removeEventListener("touchend",r),n.removeEventListener("touchcancel",r))};n.addEventListener("touchmove",r,{passive:!0}),n.addEventListener("touchend",r,{passive:!0}),n.addEventListener("touchcancel",r,{passive:!0})}}else{const n=e.clientX,o=e.clientY,a=t.div({style:{content:" ",position:"fixed",top:0,left:0,right:0,bottom:0,cursor:s}});document.body.append(a);const r=e=>{const t=e.clientX-n,s=e.clientY-o;!0===i(t,s,e)&&a.remove()};a.addEventListener("mousemove",r,{passive:!0}),a.addEventListener("mouseup",r,{passive:!0})}};const{div:g,span:y,template:x}=t,w=e=>e;const C=class extends e{get value(){return{array:this.array,filter:this.filter,columns:this.columns}}set value(e){const{array:t,columns:s,filter:n}=i(e);this._array===t&&this._columns===s&&this._filter===n||this.queueRender(),this._array=t||[],this._columns=s||null,this._filter=n||w}_array=[];_columns=null;_filter=w;charWidth=15;rowHeight=30;minColumnWidth=30;get virtual(){return this.rowHeight>0?{height:this.rowHeight}:void 0}constructor(){super(),this.initAttributes("rowHeight","charWidth","minColumnWidth")}get array(){return this._array}set array(e){this._array=i(e),this.queueRender()}get filter(){return this._filter}set filter(e){this._filter!==e&&(this._filter=e,this.queueRender())}get columns(){if(!Array.isArray(this._columns)){const{_array:e}=this;this._columns=Object.keys(e[0]||{}).map((t=>{const i=function(e,t,i){const s=e.find((e=>void 0!==e[t]&&null!==e[t]));if(void 0!==s){const e=s[t];switch(typeof e){case"string":return e.match(/^\d+(\.\d+)?$/)?6*i:e.includes(" ")?20*i:12*i;case"number":return 6*i;case"boolean":return 5*i;case"object":return!1;default:return 8*i}}return!1}(e,t,this.charWidth);return{name:t.replace(/([a-z])([A-Z])/g,"$1 $2").toLocaleLowerCase(),prop:t,align:"number"==typeof e[0][t]||""!==e[0][t]&&!isNaN(e[0][t])?"right":"left",visible:!1!==i,width:i||0}}))}return this._columns}set columns(e){this._columns=e,this.queueRender()}get visibleColumns(){return this.columns.filter((e=>!1!==e.visible))}get visibleRecords(){return s[this.instanceId]}content=null;getColumn(e){const t=(void 0!==e.touches?e.touches[0].clientX:e.clientX)-this.getBoundingClientRect().x,i=void 0!==e.touches?20:5;let s=0;const n=[];return this.visibleColumns.find((e=>{if(!1!==e.visible)return s+=e.width,n.push(s),Math.abs(t-s)<i}))}setCursor=e=>{const t=this.getColumn(e);this.style.cursor=void 0!==t?"col-resize":""};resizeColumn=e=>{const t=this.getColumn(e);if(void 0!==t){const i=t.width,s=void 0!==e.touches,n=s?e.touches[0].identifier:void 0;f(e,((e,o,a)=>{if(void 0===(!s||[...a.touches].find((e=>e.identifier===n))))return!0;const r=i+e;return t.width=r>this.minColumnWidth?r:this.minColumnWidth,this.setColumnWidths(),"mouseup"===a.type||void 0}),"col-resize")}};connectedCallback(){super.connectedCallback(),this.addEventListener("mousemove",this.setCursor),this.addEventListener("mousedown",this.resizeColumn),this.addEventListener("touchstart",this.resizeColumn,{passive:!0})}setColumnWidths(){this.style.setProperty("--grid-columns",this.visibleColumns.map((e=>e.width+"px")).join(" "))}get rowStyle(){return{display:"grid",gridTemplateColumns:n.gridColumns,height:this.rowHeight+"px",lineHeight:this.rowHeight+"px"}}get cellStyle(){return{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}headerCell=e=>void 0!==e.headerCell?e.headerCell():y({class:"th",role:"columnheader",ariaSort:"none",style:{...this.cellStyle,textAlign:e.align||"left"}},"string"==typeof e.name?e.name:e.prop);dataCell=e=>void 0!==e.dataCell?e.dataCell():y({class:"td",role:"cell",style:{...this.cellStyle,textAlign:e.align||"left"},bindText:`^.${e.prop}`});get visibleRows(){return i(s[this.instanceId])}render(){super.render(),s[this.instanceId]=this.filter(this._array),this.textContent="",this.style.display="flex",this.style.flexDirection="column";const{visibleColumns:e}=this;this.setColumnWidths(),this.append(g({class:"thead",role:"rowgroup"},g({class:"tr",role:"row",style:this.rowStyle},...e.map(this.headerCell))),g({class:"tbody",role:"rowgroup",style:{content:" ",minHeight:"200px",flex:"1 1 100px",overflow:"hidden",overflowY:"scroll"},bindList:{value:this.instanceId,virtual:this.virtual}},x(g({class:"tr",role:"row",style:this.rowStyle},...e.map(this.dataCell)))))}}.elementCreator({tag:"data-table"}),{input:k}=t,L=e=>e,N="null filter, everything matches",S=[{hint:"field=value",explanation:"field is value, ignoring case",description:(e,t)=>isNaN(Number(t))?""!==e?`${e} is "${t}"`:`any field is "${t}"`:""!==e?`${e} == ${t}`:`any field == ${t}`,token:/^([\w-_]*)=(.+)$/,makeFilter:(e,t)=>{if(isNaN(Number(t)))return t=String(t).toLocaleLowerCase(),""!==e?i=>String(i[e]).toLocaleLowerCase()==t:e=>void 0!==Object.values(e).find((e=>String(e).toLocaleLowerCase()==t));const i=Number(t);return""!==e?t=>Number(t[e])==i:e=>void 0!==Object.values(e).find((e=>Number(e)==i))}},{hint:"field!=value",explanation:"field is not value, ignoring case",description:(e,t)=>`${e} ≠ ${t}`,token:/^([\w-_]+)!=(.+)$/,makeFilter:(e,t)=>(t=t.toLocaleLowerCase(),i=>String(i[e]).toLocaleLowerCase()!=t)},{hint:"field>value",explanation:"field > value (numeric / A-Z)",description:(e,t)=>isNaN(Number(t))?`${e} > ${t} (A-Z)`:`${e} > ${t}`,token:/^([\w-_]+)>(.+)$/,makeFilter:(e,t)=>{if(!isNaN(Number(t))){const i=Number(t);return t=>Number(t[e])>i}return t=t.toLocaleLowerCase(),i=>String(i[e]).toLocaleLowerCase()>t}},{hint:"field<value",explanation:"field < value (numeric / A-Z)",description:(e,t)=>isNaN(Number(t))?`${e} < ${t} (A-Z)`:`${e} < ${t}`,token:/^([\w-_]+)<(.+)$/,makeFilter:(e,t)=>{if(!isNaN(Number(t))){const i=Number(t);return t=>Number(t[e])<i}return t=t.toLocaleLowerCase(),i=>String(i[e]).toLocaleLowerCase()<t}},{hint:"field:value",explanation:"field contains value, ignoring case",description:(e,t)=>`${e} contains "${t}"`,token:/^([\w-_]+):(.+)$/,makeFilter:(e,t)=>(t=t.toLocaleLowerCase(),i=>String(i[e]).toLocaleLowerCase().includes(t))},{hint:"!!field",explanation:"field is true, non-empty, non-zero",description:e=>`${e} is truthy`,token:/^!!([\w-_]+)$/,makeFilter:e=>t=>!!t[e]},{hint:"!field",explanation:"field is false, empty, zero",description:e=>`${e} is falsy`,token:/^!([\w-_]+)$/,makeFilter:e=>t=>!t[e]},{hint:"value",explanation:"any field contains value",description:e=>`"${e}" in any property`,token:/^(.+)$/,makeFilter:e=>(e=e.toLocaleLowerCase(),t=>void 0!==Object.values(t).find((t=>String(t).toLocaleLowerCase().includes(e))))}];const $=class extends e{value="";filter=L;title=N;content=k({type:"search",part:"input",style:{width:"100%",height:"auto"}});placeholder="";help="";filters=S;constructor(){super(),this.initAttributes("title","placeholder","help")}buildFilter=o((e=>{const t=e.split(/\s+/).filter((e=>""!==e)).map((e=>function(e,t=S){const i=t.find((t=>t.token.test(e)));if(void 0!==i){const[,...t]=e.match(i.token);return{description:i.description(...t),test:i.makeFilter(...t)}}}(e,this.filters))).filter((e=>void 0!==e));0===t.length?(this.title=N,this.filter!==L&&(this.filter=L,this.dispatchEvent(new Event("change")))):(this.filter=t.reduce(((e,t)=>{let i;return i=!1===e?e=>e.filter(t.test):i=>e(i.filter(t.test)),i}),!1),this.title=t.map((e=>e.description)).join(", and "),this.dispatchEvent(new Event("change")))}),500);reset(){this.filter!==L&&(this.title=N,this.filter=L,this.dispatchEvent(new Event("change")))}handleInput=e=>{const{input:t}=this.parts;this.buildFilter(t.value),this.value=t.value,e.stopPropagation(),e.preventDefault()};connectedCallback(){super.connectedCallback(),this.setAttribute("title",this.title),this.help=this.filters.map((e=>void 0!==e.explanation?`${e.hint}: ${e.explanation}`:e.hint)).join("\n");const{input:e}=this.parts;e.value=this.value,e.addEventListener("input",this.handleInput),e.addEventListener("change",this.handleInput),this.style.position="relative"}render(){super.render();const{input:e}=this.parts;e.placeholder=""!==this.placeholder?this.placeholder:this.filters.map((e=>e.hint)).join(" "),e.value=this.value}}.elementCreator({tag:"filter-builder"}),_=[{name:"streets",url:"mapbox://styles/mapbox/streets-v10"},{name:"outdoors",url:"mapbox://styles/mapbox/outdoors-v10"},{name:"light",url:"mapbox://styles/mapbox/light-v9"},{name:"dark",url:"mapbox://styles/mapbox/dark-v9"},{name:"satellite",url:"mapbox://styles/mapbox/satellite-v9"},{name:"sateliite + streets",url:"mapbox://styles/mapbox/satellite-streets-v10"},{name:"preview day",url:"mapbox://styles/mapbox/navigation-preview-day-v2"},{name:"preview night",url:"mapbox://styles/mapbox/navigation-preview-night-v2"},{name:"guidance day",url:"mapbox://styles/mapbox/navigation-guidance-day-v2"},{name:"guidance night",url:"mapbox://styles/mapbox/navigation-guidance-night-v2"}],{div:A}=t;class z extends e{coords="65.01715565258993,25.48081004203459,12";content=A({style:{width:"100%",height:"100%"}});get map(){return this._map}mapStyle=_[0];token="";styleNode=e.StyleNode({":host":{display:"inline-block",position:"relative",width:"400px",height:"400px",textAlign:"left"}});constructor(){super(),this.initAttributes("coords","token","mapStyle"),void 0===z.mapboxCSSAvailable&&(z.mapboxCSSAvailable=d("https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css").catch((e=>{console.error("failed to load mapbox-gl.css",e)})),z.mapboxAvailable=c("https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.js").catch((e=>{console.error("failed to load mapbox-gl.js",e)})))}connectedCallback(){super.connectedCallback(),this.token||console.error("mapbox requires an access token which you can provide via the token attribute")}render(){if(super.render(),!this.token)return;const{div:e}=this.parts,[t,i,s]=this.coords.split(",").map((e=>Number(e)));this.map&&this.map.remove(),z.mapboxAvailable.then((({mapboxgl:n})=>{console.log("%cmapbox may complain about missing css because it is loaded async on demand","background: orange; color: black; padding: 0 5px;"),n.accessToken=this.token,this._map=new n.Map({container:e,style:this.mapStyle.url,zoom:s,center:[i,t]}),this._map.on("render",(()=>this._map.resize()))}))}}const E=z.elementCreator({tag:"map-box"});const P=class extends e{src="";value="";content=null;constructor(){super(),this.initAttributes("src")}connectedCallback(){super.connectedCallback(),""!==this.src?(async()=>{const e=await fetch(this.src);this.value=await e.text()})():""===this.value&&(this.value=null!=this.textContent?this.textContent:"")}render(){super.render(),this.innerHTML=r(this.value,{mangle:!1,headerIds:!1})}}.elementCreator({tag:"markdown-viewer"}),{slot:j}=t,T={left:"row",right:"row-reverse",top:"column",bottom:"column-reverse"},R={left:["marginLeft","marginRight"],right:["marginRight","marginLeft"],top:["marginTop","marginBottom"],bottom:["marginBottom","marginTop"]};const W=class extends e{panelPosition="left";minSize=600;navSize=200;compact=!1;content=[j({name:"nav"}),j({part:"content"})];_contentVisible=!1;get contentVisible(){return this._contentVisible}set contentVisible(e){this._contentVisible=e,this.queueRender()}styleNode=e.StyleNode({":host":{display:"flex",flexDirection:n.flexDirection,transition:a.sideNavTransition("0.25s ease-out")},":host slot":{position:"relative"},":host slot:not([name])":{display:"block",flex:`0 0 ${n.contentWidth}`,width:n.contentWidth},':host slot[name="nav"]':{display:"block",flex:`0 0 ${n.navWidth}`,width:n.navWidth}});onResize=()=>{const{content:e}=this.parts;if(null===this.offsetParent)return;this.style.marginLeft=0,this.style.marginRight=0,this.style.marginTop=0,this.style.marginBottom=0;if(void 0===[...this.childNodes].find((e=>!(e instanceof Element)||"nav"!==e.getAttribute("slot"))))return this.style.setProperty("--nav-width","100%"),void this.style.setProperty("--content-width","0%");const t=this.offsetParent,i=(this.panelPosition.match(/left|right/),t.offsetWidth);if(this.compact=i<this.minSize,this.compact){e.classList.remove("-side-nav-visible"),this.style.setProperty("--nav-width","50%"),this.style.setProperty("--content-width","50%");const t=R[this.panelPosition];this.contentVisible?this.style[t[0]]="-100%":this.style[t[1]]="-100%"}else e.classList.add("-side-nav-visible"),this.style.setProperty("--nav-width",`${this.navSize}px`),this.style.setProperty("--content-width",`calc(100% - ${this.navSize}px)`)};connectedCallback(){super.connectedCallback(),this.contentVisible=0===this.parts.content.childNodes.length,globalThis.addEventListener("resize",this.onResize),this.observer=new MutationObserver(this.onResize),this.observer.observe(this,{childList:!0})}disconnectedCallback(){super.disconnectedCallback(),this.observer.disconnect()}constructor(){super(),this.initAttributes("panelPosition","minSize","navSize","compact")}render(){super.render(),this.style.setProperty("--flex-direction",T[this.panelPosition]),this.onResize()}}.elementCreator({tag:"side-nav"}),{slot:V}=t;const D=class extends e{minWidth=0;minHeight=0;value="normal";content=[V({part:"normal"}),V({part:"small",name:"small"})];styleNode=e.StyleNode({":host":{position:"relative"}});constructor(){super(),this.initAttributes("minWidth","minHeight")}onResize=()=>{const{normal:e,small:t}=this.parts;null!==this.offsetParent&&(this.offsetParent.offsetWidth<this.minWidth||this.offsetParent.offsetHeight<this.minHeight?(e.hidden=!0,t.hidden=!1,this.value="small"):(e.hidden=!1,t.hidden=!0,this.value="normal"))};connectedCallback(){super.connectedCallback(),globalThis.addEventListener("resize",this.onResize)}disconnectedCallback(){super.disconnectedCallback(),globalThis.removeEventListener("resize",this.onResize)}}.elementCreator({tag:"size-break"}),{div:H,slot:F}=t;const O=class extends e{value=0;role="tabpanel";styleNode=e.StyleNode({":host":{display:"flex",flexDirection:"column",position:"relative",overflow:"hidden"},slot:{position:"relative",display:"block",flex:"1 1 auto",overflow:"hidden",overflowY:"auto"},"::slotted([hidden])":{display:"none !important"},":host .tab-holder":{display:"flex",flexDirection:"column"},":host .tabs":{display:"flex",userSelect:"none",whiteSpace:"nowrap"},":host .tabs > div":{padding:`${n.spacing50} ${n.spacing}`,cursor:"default"},':host .tabs > [aria-selected="true"]':{color:n.tabSelectorSelectedColor},":host .border":{background:"var(--tab-selector-bar-color, #ccc)"},":host .border > .selected":{content:" ",width:0,height:"var(--tab-selector-bar-height, 2px)",background:n.tabSelectorSelectedColor,transition:"ease-out 0.2s"}});content=[H({class:"tab-holder"},H({class:"tabs",part:"tabs"}),H({class:"border"},H({class:"selected",part:"selected"}))),F()];constructor(){super(),this.initAttributes("anne","example")}addTabBody(e,t=!1){if(!e.hasAttribute("name"))throw new Error("element has no name attribute",e);this.shadowRoot.append(e),this.setupTabs(),t&&(this.value=this.bodies.length-1),this.queueRender()}keyTab=e=>{const{tabs:t}=this.parts,i=[...t.children].indexOf(e.target);switch(e.key){case"ArrowLeft":this.value=(i+Number(t.children.length)-1)%t.children.length,t.children[this.value].focus(),e.preventDefault();break;case"ArrowRight":this.value=(i+1)%t.children.length,t.children[this.value].focus(),e.preventDefault();break;case" ":this.pickTab(e),e.preventDefault()}};get bodies(){return[...this.children].filter((e=>e.hasAttribute("name")))}pickTab=e=>{const{tabs:t}=this.parts,i=e.target,s=[...t.children].indexOf(i);s>-1&&(this.value=s)};setupTabs=()=>{const{tabs:e}=this.parts,t=[...this.childNodes].filter((e=>e.hasAttribute("name")));e.textContent="";for(const i in t){const s=t[i],n=s.getAttribute("name"),o=`${this.instanceId}-${i}`;s.id=o,e.append(H(n,{tabindex:0,role:"tab",ariaControls:o}))}};connectedCallback(){super.connectedCallback();const{tabs:e}=this.parts;e.addEventListener("click",this.pickTab),e.addEventListener("keydown",this.keyTab),this.setupTabs()}render(){const{tabs:e,selected:t}=this.parts,i=this.bodies;for(let s=0;s<i.length;s++){const n=i[s],o=e.children[s];this.value===Number(s)?(o.setAttribute("aria-selected",!0),t.style.marginLeft=o.offsetLeft-e.offsetLeft+"px",t.style.width=`${o.offsetWidth}px`,n.removeAttribute("hidden")):(o.removeAttribute("aria-selected"),n.setAttribute("hidden",""))}}}.elementCreator({tag:"tab-selector"});export{p as bodymovinPlayer,b as codeEditor,C as dataTable,$ as filterBuilder,E as mapBox,P as markdownViewer,W as sideNav,D as sizeBreak,O as tabSelector,f as trackDrag,c as scriptTag,d as styleSheet};
//# sourceMappingURL=index.js.map
