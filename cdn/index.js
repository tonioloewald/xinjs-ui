import{Component as e,elements as t,xin as i,vars as s,xinValue as a,debounce as o}from"xinjs";import{marked as l}from"marked";let r={};function n(e){if(void 0===r[e]){let i=t.script({src:e});document.head.append(i),r[e]=new Promise(e=>{i.onload=()=>e(globalThis)})}return r[e]}let d={};function h(e){if(void 0===d[e]){let i=t.link({rel:"stylesheet",type:"text/css",href:e});document.head.append(i),d[e]=new Promise(e=>{i.onload=e})}return d[e]}class c extends e{content=null;src="";json="";config={renderer:"svg",loop:!0,autoplay:!0};static bodymovinAvailable;animation;styleNode=e.StyleNode({":host":{width:400,height:400,display:"inline-block"}});_loading=!1;get loading(){return this._loading}constructor(){super(),this.initAttributes("src","json"),void 0===c.bodymovinAvailable&&(c.bodymovinAvailable=void 0===globalThis.bodymovinPlayer?n("https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js"):Promise.resolve())}doneLoading=()=>{this._loading=!1};load=()=>{this._loading=!0,this.config.container=this.shadowRoot,""!==this.json?(this.config.animationData=this.json,delete this.config.path):""!==this.src?(delete this.config.animationData,this.config.path=this.src):console.log("%c<bodymovin-player>%c expected either %cjson%c (animation data) or %csrc% c(url) but found neither.","color: #44f; background: #fff; padding: 0 5px","color: default","color: #44f; background: #fff; padding: 0 5px","color: default","color: #44f; background: #fff; padding: 0 5px","color: default"),this.animation&&(this.animation.destroy(),this.shadowRoot.querySelector("svg").remove()),this.animation=globalThis.bodymovin.loadAnimation(this.config),this.animation.addEventListener("DOMLoaded",this.doneLoading)};render(){super.render(),c.bodymovinAvailable.then(this.load).catch(e=>{console.error(e)})}}let u=c.elementCreator({tag:"bodymovin-player"}),m="https://cdnjs.cloudflare.com/ajax/libs/ace/1.23.2/",p="ace/theme/monokai",b=async(e,t="html",i={},s=p)=>{let{ace:a}=await n(`${m}ace.min.js`);a.config.set("basePath",m);let o=a.edit(e,{mode:`ace/mode/${t}`,tabSize:2,useSoftTabs:!0,useWorker:!1,...i});return o.setTheme(s),o};class f extends e{value="";mode="javascript";disabled=!1;role="code editor";get editor(){return this._editor}_editor;_editorPromise;options={};theme=p;styleNode=e.StyleNode({":host":{display:"block",position:"relative"}});constructor(){super(),this.initAttributes("mode","theme","disabled")}onResize(){void 0!==this.editor&&this.editor.resize(!0)}updateValue=async e=>{e.target!==this&&this.editor&&(this.value=this.editor.getValue())};connectedCallback(){super.connectedCallback(),""===this.value&&(this.value=this.textContent.trim("\n")),void 0===this._editorPromise&&(this._editorPromise=b(this,this.mode,this.options,this.theme),this._editorPromise.then(e=>{this._editor=e,e.setValue(this.value,1)})),this.addEventListener("change",this.updateValue)}render(){super.render(),void 0!==this.editor&&this.editor.getValue()!==this.value&&this.editor.setValue(this.value),void 0!==this._editorPromise&&this._editorPromise.then(e=>e.setReadOnly(this.disabled))}}let v=f.elementCreator({tag:"code-editor"}),g=(e,i)=>{let s=t.div({style:{content:" ",position:"fixed",top:0,left:0,right:0,bottom:0,cursor:i}});document.body.append(s),s.addEventListener("mousemove",t=>{!0===e(t)&&s.remove()}),s.addEventListener("mouseup",t=>{e(t),s.remove()})},{div:y,span:x,template:w}=t,k=e=>e,C=(class extends e{value={array:[]};charWidth=15;rowHeight=30;minColumnWidth=30;constructor(){super(),this.initAttributes("rowHeight","charWidth","minColumnWidth")}get filter(){return"function"==typeof this.value.filter?this.value.filter:k}get columns(){if(!Array.isArray(this.value.columns)){let{array:e}=this.value;this.value.columns=Object.keys(e[0]||{}).map(t=>{let i=function(e,t,i){let s=e.find(e=>void 0!==e[t]&&null!==e[t]);if(void 0!==s){let e=s[t];switch(typeof e){case"string":if(e.match(/^\d+(\.\d+)?$/))return 6*i;if(e.includes(" "))return 20*i;return 12*i;case"number":return 6*i;case"boolean":return 5*i;case"object":break;default:return 8*i}}return!1}(e,t,this.charWidth);return{name:t.replace(/([a-z])([A-Z])/g,"$1 $2").toLocaleLowerCase(),prop:t,align:"number"!=typeof e[0][t]&&(""===e[0][t]||isNaN(e[0][t]))?"left":"right",visible:!1!==i,width:i||0}})}return this.value.columns}get visibleColumns(){return this.columns.filter(e=>!1!==e.visible)}get visibleRecords(){return i[this.instanceId]}content=null;getColumn(e){let t=e.clientX-this.getBoundingClientRect().x,i=0,s=[],a=this.visibleColumns.find(e=>{if(!1!==e.visible)return i+=e.width,s.push(i),5>Math.abs(t-i)});return a}trackMouse=e=>{let t=this.getColumn(e);void 0!==t?this.style.cursor="col-resize":this.style.cursor=""};resizeColumn=e=>{let t=this.getColumn(e);if(void 0!==t){let i=t.width,s=e.clientX;g(e=>{let a=e.clientX-s+i;t.width=a>this.minColumnWidth?a:this.minColumnWidth,this.setColumnWidths()},"col-resize")}};connectedCallback(){super.connectedCallback(),this.addEventListener("mousemove",this.trackMouse),this.addEventListener("mousedown",this.resizeColumn)}setColumnWidths(){this.style.setProperty("--grid-columns",this.visibleColumns.map(e=>e.width+"px").join(" "))}get rowStyle(){return{display:"grid",gridTemplateColumns:s.gridColumns,height:this.rowHeight+"px",lineHeight:this.rowHeight+"px"}}get cellStyle(){return{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}headerCell=e=>void 0!==e.headerCell?e.headerCell():x({class:"th",role:"columnheader",ariaSort:"none",style:{...this.cellStyle,textAlign:e.align||"left"}},"string"==typeof e.name?e.name:e.prop);dataCell=e=>void 0!==e.dataCell?e.dataCell():x({class:"td",role:"cell",style:{...this.cellStyle,textAlign:e.align||"left"},bindText:`^.${e.prop}`});render(){super.render(),i[this.instanceId]=this.filter(a(this.value.array)),this.textContent="",this.style.display="flex",this.style.flexDirection="column";let{visibleColumns:e}=this;this.setColumnWidths(),this.append(y({class:"thead",role:"rowgroup"},y({class:"tr",role:"row",style:this.rowStyle},...e.map(this.headerCell))),y({class:"tbody",role:"rowgroup",style:{content:" ",minHeight:"200px",flex:"1 1 100px",overflow:"hidden",overflowY:"scroll"},bindList:{value:this.instanceId,virtual:{height:this.rowHeight}}},w(y({class:"tr",role:"row",style:this.rowStyle},...e.map(this.dataCell)))))}}).elementCreator({tag:"data-table"}),{input:$}=t,L=e=>e,S="null filter, everything matches",N=[{hint:"field=value",description:(e,t)=>isNaN(Number(t))?""!==e?`${e} is "${t}"`:`any field is "${t}"`:""!==e?`${e} == ${t}`:`any field == ${t}`,token:/^([\w-_]*)=(.+)$/,makeFilter:(e,t)=>{if(isNaN(Number(t)))return(t=String(t).toLocaleLowerCase(),""!==e)?i=>String(i[e]).toLocaleLowerCase()==t:e=>void 0!==Object.values(e).find(e=>String(e).toLocaleLowerCase()==t);let i=Number(t);return""!==e?t=>Number(t[e])==i:e=>Object.values(e).find(e=>Number(e)==i)}},{hint:"field!=value",description:(e,t)=>`${e} ≠ ${t}`,token:/^([\w-_]+)!=(.+)$/,makeFilter:(e,t)=>(t=t.toLocaleLowerCase(),i=>String(i[e]).toLocaleLowerCase()!=t)},{hint:"field>value",description:(e,t)=>isNaN(Number(t))?`${e} > ${t} (A-Z)`:`${e} > ${t}`,token:/^([\w-_]+)>(.+)$/,makeFilter:(e,t)=>{if(!isNaN(Number(t))){let i=Number(t);return t=>Number(t[e])>i}return t=t.toLocaleLowerCase(),i=>String(i[e]).toLocaleLowerCase()>t}},{hint:"field<value",description:(e,t)=>isNaN(Number(t))?`${e} < ${t} (A-Z)`:`${e} < ${t}`,token:/^([\w-_]+)<(.+)$/,makeFilter:(e,t)=>{if(!isNaN(Number(t))){let i=Number(t);return t=>Number(t[e])<i}return t=t.toLocaleLowerCase(),i=>String(i[e]).toLocaleLowerCase()<t}},{hint:"field:value",description:(e,t)=>`${e} contains ${t}`,token:/^([\w-_]+):(.+)$/,makeFilter:(e,t)=>(t=t.toLocaleLowerCase(),i=>i[e].toLocaleLowerCase().includes(t))},{hint:"!!field",description:e=>`${e} is truthy`,token:/^!!([\w-_]+)$/,makeFilter:e=>t=>!!t[e]},{hint:"!field",description:e=>`${e} is falsy`,token:/^!([\w-_]+)$/,makeFilter:e=>t=>!t[e]},{hint:"value",description:e=>`"${e}" in any property`,token:/^(.+)$/,makeFilter:e=>t=>void 0!==Object.values(t).find(t=>String(t).toLocaleLowerCase().includes(e))}];class A extends e{value="";filter=L;title=S;content=$({style:{width:"100%",height:"auto"}});placeholder="";filters=N;constructor(){super(),this.initAttributes("title","placeholder")}buildFilter=o(e=>{let t=e.split(/\s+/).filter(e=>""!==e).map(e=>(function(e,t=N){let i=t.find(t=>t.token.test(e));if(void 0!==i){let[,...t]=e.match(i.token);return{description:i.description(...t),test:i.makeFilter(...t)}}})(e,this.filters)).filter(e=>void 0!==e);0===t.length?(this.title=S,this.filter!==L&&(this.filter=L,this.dispatchEvent(new Event("change")))):(this.filter=t.reduce((e,t)=>!1===e?e=>e.filter(t.test):i=>e(i.filter(t.test)),!1),this.title=t.map(e=>e.description).join(", and "),this.dispatchEvent(new Event("change")))},500);reset(){this.filter!==L&&(this.title=S,this.filter=L,this.dispatchEvent(new Event("change")))}handleInput=e=>{let{input:t}=this.refs;this.buildFilter(t.value),this.value=t.value,e.stopPropagation(),e.preventDefault()};connectedCallback(){super.connectedCallback(),this.setAttribute("title",this.title);let{input:e}=this.refs;e.value=this.value,e.addEventListener("input",this.handleInput),e.addEventListener("change",this.handleInput),this.style.position="relative"}render(){super.render();let{input:e}=this.refs;e.placeholder=""!==this.placeholder?this.placeholder:this.filters.map(e=>e.hint).join(" "),e.value=this.value}}let j=A.elementCreator({tag:"filter-builder"}),_=[{name:"streets",url:"mapbox://styles/mapbox/streets-v10"},{name:"outdoors",url:"mapbox://styles/mapbox/outdoors-v10"},{name:"light",url:"mapbox://styles/mapbox/light-v9"},{name:"dark",url:"mapbox://styles/mapbox/dark-v9"},{name:"satellite",url:"mapbox://styles/mapbox/satellite-v9"},{name:"sateliite + streets",url:"mapbox://styles/mapbox/satellite-streets-v10"},{name:"preview day",url:"mapbox://styles/mapbox/navigation-preview-day-v2"},{name:"preview night",url:"mapbox://styles/mapbox/navigation-preview-night-v2"},{name:"guidance day",url:"mapbox://styles/mapbox/navigation-guidance-day-v2"},{name:"guidance night",url:"mapbox://styles/mapbox/navigation-guidance-night-v2"}],{div:T}=t;class E extends e{coords="65.01715565258993,25.48081004203459,12";content=T({style:{width:"100%",height:"100%"}});get map(){return this._map}mapStyle=_[0];token="";static mapboxCSSAvailable;static mapboxAvailable;_map;styleNode=e.StyleNode({":host":{display:"inline-block",position:"relative",width:"400px",height:"400px",textAlign:"left"}});constructor(){super(),this.initAttributes("coords","token","mapStyle"),void 0===E.mapboxCSSAvailable&&(E.mapboxCSSAvailable=h("https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css").catch(e=>{console.error("failed to load mapbox-gl.css",e)}),E.mapboxAvailable=n("https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.js").catch(e=>{console.error("failed to load mapbox-gl.js",e)}))}connectedCallback(){super.connectedCallback(),this.token||console.error("mapbox requires an access token which you can provide via the token attribute")}render(){if(super.render(),!this.token)return;let{div:e}=this.refs,[t,i,s]=this.coords.split(",").map(e=>Number(e));this.map&&this.map.remove(),E.mapboxAvailable.then(({mapboxgl:a})=>{console.log("%cmapbox may complain about missing css because it is loaded async on demand","background: orange; color: black; padding: 0 5px;"),a.accessToken=this.token,this._map=new a.Map({container:e,style:this.mapStyle.url,zoom:s,center:[i,t]}),this._map.on("render",()=>this._map.resize())})}}let z=E.elementCreator({tag:"map-box"}),P=(class extends e{src="";value="";constructor(){super(),this.initAttributes("src")}connectedCallback(){super.connectedCallback(),""!==this.src?(async()=>{let e=await fetch(this.src);this.value=await e.text()})():""===this.value&&(this.value=null!=this.textContent?this.textContent:"")}render(){super.render(),this.innerHTML=l(this.value,{mangle:!1,headerIds:!1})}}).elementCreator(),{slot:R}=t;class W extends e{minWidth=0;minHeight=0;value="normal";content=[R({dataRef:"normal"}),R({dataRef:"small",name:"small"})];styleNode=e.StyleNode({":host":{position:"relative"}});constructor(){super(),this.initAttributes("minWidth","minHeight")}onResize=()=>{let{normal:e,small:t}=this.refs;this.offsetParent.offsetWidth<this.minWidth||this.offsetParent.offsetHeight<this.minHeight?(e.hidden=!0,t.hidden=!1,this.value="small"):(e.hidden=!1,t.hidden=!0,this.value="normal")};connectedCallback(){super.connectedCallback(),globalThis.addEventListener("resize",this.onResize)}disconnectedCallback(){super.disconnectedCallback(),globalThis.removeEventListener("resize",this.onResize)}}let H=W.elementCreator({tag:"size-break"}),{div:F,slot:D}=t;class O extends e{value=0;role="tabpanel";styleNode=e.StyleNode({":host":{display:"flex",flexDirection:"column",position:"relative",overflow:"hidden"},slot:{position:"relative",display:"block",flex:"1 1 auto",overflow:"hidden",overflowY:"auto"},"::slotted([hidden])":{display:"none !important"},":host .tab-holder":{display:"flex",flexDirection:"column"},":host .tabs":{display:"flex",userSelect:"none",whiteSpace:"nowrap"},":host .tabs > div":{padding:`${s.spacing50} ${s.spacing}`,cursor:"default"},':host .tabs > [aria-selected="true"]':{color:s.tabSelectorSelectedColor},":host .border":{background:"var(--tab-selector-bar-color, #ccc)"},":host .border > .selected":{content:" ",width:0,height:"var(--tab-selector-bar-height, 2px)",background:s.tabSelectorSelectedColor,transition:"ease-out 0.2s"}});content=[F({class:"tab-holder"},F({class:"tabs",dataRef:"tabs"}),F({class:"border"},F({class:"selected",dataRef:"selected"}))),D()];constructor(){super(),this.initAttributes("anne","example")}addTabBody(e,t=!1){if(!e.hasAttribute("name"))throw Error("element has no name attribute",e);this.shadowRoot.append(e),this.setupTabs(),t&&(this.value=this.bodies.length-1),this.queueRender()}keyTab=e=>{let{tabs:t}=this.refs,i=[...t.children].indexOf(e.target);switch(e.key){case"ArrowLeft":this.value=(i+Number(t.children.length)-1)%t.children.length,t.children[this.value].focus(),e.preventDefault();break;case"ArrowRight":this.value=(i+1)%t.children.length,t.children[this.value].focus(),e.preventDefault();break;case" ":this.pickTab(e),e.preventDefault()}};get bodies(){return[...this.children].filter(e=>e.hasAttribute("name"))}pickTab=e=>{let{tabs:t}=this.refs,i=e.target,s=[...t.children].indexOf(i);s>-1&&(this.value=s)};setupTabs=()=>{let{tabs:e}=this.refs,t=[...this.querySelectorAll("[name]")];for(let i in e.textContent="",t){let s=t[i],a=s.getAttribute("name"),o=`${this.instanceId}-${i}`;s.id=o,e.append(F(a,{tabindex:0,role:"tab",ariaControls:o}))}};connectedCallback(){super.connectedCallback();let{tabs:e}=this.refs;e.addEventListener("click",this.pickTab),e.addEventListener("keydown",this.keyTab),this.setupTabs()}render(){let{tabs:e,selected:t}=this.refs,i=this.bodies;for(let s=0;s<i.length;s++){let a=i[s],o=e.children[s];this.value===Number(s)?(o.setAttribute("aria-selected",!0),t.style.marginLeft=`${o.offsetLeft-e.offsetLeft}px`,t.style.width=`${o.offsetWidth}px`,a.removeAttribute("hidden")):(o.removeAttribute("aria-selected"),a.setAttribute("hidden",""))}}}let I=O.elementCreator({tag:"tab-selector"});export{u as bodymovinPlayer,v as codeEditor,C as dataTable,j as filterBuilder,z as mapBox,P as markdownViewer,H as sizeBreak,I as tabSelector,g as trackMouse,n as scriptTag,h as styleSheet};
//# sourceMappingURL=index.js.map
