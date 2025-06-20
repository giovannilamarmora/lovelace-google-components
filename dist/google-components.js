const t="brightness",e={type:"custom:google-slider-card",attribute:t,tap_action:{action:"toggle",haptic:"light"},hold_action:{action:"more-info"},hold_time:600,settle_time:3e3,min_slide_time:0,min:0,max:100},i={type:"custom:google-button-card",attribute:t,tap_action:{action:"toggle",haptic:"light"},hold_action:{action:"more-info"},hold_time:600,settle_time:3e3,min_slide_time:0,min:0,max:100};function s(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o=globalThis,r=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),a=new WeakMap;let c=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(r&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=a.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&a.set(e,t))}return t}toString(){return this.cssText}};const l=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new c(i,t,n)},h=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new c("string"==typeof t?t:t+"",void 0,n))(e)})(t):t,{is:d,defineProperty:u,getOwnPropertyDescriptor:p,getOwnPropertyNames:g,getOwnPropertySymbols:_,getPrototypeOf:m}=Object,f=globalThis,b=f.trustedTypes,v=b?b.emptyScript:"",y=f.reactiveElementPolyfillSupport,$=(t,e)=>t,A={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},w=(t,e)=>!d(t,e),E={attribute:!0,type:String,converter:A,reflect:!1,useDefault:!1,hasChanged:w};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=E){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&u(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=p(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const r=s?.call(this);o?.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??E}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=m(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...g(t),..._(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(r)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),s=o.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:A).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:A;this._$Em=s,this[s]=o.fromAttribute(e,t.type)??this._$Ej?.get(s)??null,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const s=this.constructor,o=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??w)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==o||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[$("elementProperties")]=new Map,x[$("finalized")]=new Map,y?.({ReactiveElement:x}),(f.reactiveElementVersions??=[]).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const S=globalThis,C=S.trustedTypes,P=C?C.createPolicy("lit-html",{createHTML:t=>t}):void 0,T="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+k,U=`<${O}>`,M=document,H=()=>M.createComment(""),R=t=>null===t||"object"!=typeof t&&"function"!=typeof t,L=Array.isArray,z="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,D=/>/g,F=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,V=/"/g,B=/^(?:script|style|textarea|title)$/i,W=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),G=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),X=new WeakMap,q=M.createTreeWalker(M,129);function J(t,e){if(!L(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==P?P.createHTML(e):e}const K=(t,e)=>{const i=t.length-1,s=[];let o,r=2===e?"<svg>":3===e?"<math>":"",n=N;for(let e=0;e<i;e++){const i=t[e];let a,c,l=-1,h=0;for(;h<i.length&&(n.lastIndex=h,c=n.exec(i),null!==c);)h=n.lastIndex,n===N?"!--"===c[1]?n=j:void 0!==c[1]?n=D:void 0!==c[2]?(B.test(c[2])&&(o=RegExp("</"+c[2],"g")),n=F):void 0!==c[3]&&(n=F):n===F?">"===c[0]?(n=o??N,l=-1):void 0===c[1]?l=-2:(l=n.lastIndex-c[2].length,a=c[1],n=void 0===c[3]?F:'"'===c[3]?V:I):n===V||n===I?n=F:n===j||n===D?n=N:(n=F,o=void 0);const d=n===F&&t[e+1].startsWith("/>")?" ":"";r+=n===N?i+U:l>=0?(s.push(a),i.slice(0,l)+T+i.slice(l)+k+d):i+k+(-2===l?e:d)}return[J(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class Z{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const n=t.length-1,a=this.parts,[c,l]=K(t,e);if(this.el=Z.createElement(c,i),q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=q.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(T)){const e=l[r++],i=s.getAttribute(t).split(k),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:n[2],strings:i,ctor:"."===n[1]?st:"?"===n[1]?ot:"@"===n[1]?rt:it}),s.removeAttribute(t)}else t.startsWith(k)&&(a.push({type:6,index:o}),s.removeAttribute(t));if(B.test(s.tagName)){const t=s.textContent.split(k),e=t.length-1;if(e>0){s.textContent=C?C.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],H()),q.nextNode(),a.push({type:2,index:++o});s.append(t[e],H())}}}else if(8===s.nodeType)if(s.data===O)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(k,t+1));)a.push({type:7,index:o}),t+=k.length-1}o++}}static createElement(t,e){const i=M.createElement("template");return i.innerHTML=t,i}}function Q(t,e,i=t,s){if(e===G)return e;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const r=R(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(e=Q(t,o._$AS(t,e.values),o,s)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??M).importNode(e,!0);q.currentNode=s;let o=q.nextNode(),r=0,n=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new et(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new nt(o,this,t)),this._$AV.push(e),a=i[++n]}r!==a?.index&&(o=q.nextNode(),r++)}return q.currentNode=M,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),R(t)?t===Y||null==t||""===t?(this._$AH!==Y&&this._$AR(),this._$AH=Y):t!==this._$AH&&t!==G&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>L(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Y&&R(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Z.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new tt(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=X.get(t.strings);return void 0===e&&X.set(t.strings,e=new Z(t)),e}k(t){L(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new et(this.O(H()),this.O(H()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class it{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Y}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(void 0===o)t=Q(this,t,e,0),r=!R(t)||t!==this._$AH&&t!==G,r&&(this._$AH=t);else{const s=t;let n,a;for(t=o[0],n=0;n<o.length-1;n++)a=Q(this,s[i+n],e,n),a===G&&(a=this._$AH[n]),r||=!R(a)||a!==this._$AH[n],a===Y?t=Y:t!==Y&&(t+=(a??"")+o[n+1]),this._$AH[n]=a}r&&!s&&this.j(t)}j(t){t===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class st extends it{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Y?void 0:t}}class ot extends it{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Y)}}class rt extends it{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??Y)===G)return;const i=this._$AH,s=t===Y&&i!==Y||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==Y&&(i===Y||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const at=S.litHtmlPolyfillSupport;at?.(Z,et),(S.litHtmlVersions??=[]).push("3.3.0");const ct=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class lt extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new et(e.insertBefore(H(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return G}}lt._$litElement$=!0,lt.finalized=!0,ct.litElementHydrateSupport?.({LitElement:lt});const ht=ct.litElementPolyfillSupport;ht?.({LitElement:lt}),(ct.litElementVersions??=[]).push("4.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dt=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ut={attribute:!0,type:String,converter:A,reflect:!1,hasChanged:w},pt=(t=ut,e,i)=>{const{kind:s,metadata:o}=i;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,o,t)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const o=this[s];e.call(this,i),this.requestUpdate(s,o,t)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function gt(t){return(e,i)=>"object"==typeof i?pt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _t(t){return gt({...t,state:!0,attribute:!1})}var mt={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",no_entity_set:"Entity not set",no_entity:"Entity not available",on:"On",off:"Off",offline:"Offline",auto:"Auto",heat:"Heat",cool:"Cool"},ft={control_type:"Control Type",type:{generic:"Generic (Switch, Button...)",thermometer:"Thermometer"},dual_icon:{default:"Use default icon",options:"Use dual icon (Element On and Element Off)."}},bt={common:mt,google_button_card:ft},vt={version:"Versione",invalid_configuration:"Configurazione non valida",show_warning:"Mostra avviso",no_entity_set:"Entità non impostata",no_entity:"Entità non disponibile",on:"Acceso",off:"Spento",offline:"Offline",auto:"Auto",heat:"Riscalda",cool:"Raffresca"},yt={control_type:"Tipo di controllo",type:{generic:"Generico (Interruttore, Pulsante...)",thermometer:"Termometro"},dual_icon:{options:"Usa doppia icona (Elemento acceso e spento)."}},$t={common:vt,google_button_card:yt};const At={en:Object.freeze({__proto__:null,common:mt,default:bt,google_button_card:ft}),it:Object.freeze({__proto__:null,common:vt,default:$t,google_button_card:yt})};function wt(t,e="",i=""){const s=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let o;try{o=t.split(".").reduce((t,e)=>t[e],At[s])}catch(e){o=t.split(".").reduce((t,e)=>t[e],At.en)}return void 0===o&&(o=t.split(".").reduce((t,e)=>t[e],At.en)),""!==e&&""!==i&&(o=o.replace(e,i)),o}var Et,xt;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(Et||(Et={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(xt||(xt={}));var St,Ct=function(t,e,i,s){s=s||{},i=null==i?{}:i;var o=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return o.detail=i,t.dispatchEvent(o),o};function Pt(t,e,i){let s="";return"thermometer"!==e||i||(s=" • "+t.attributes.current_temperature+"°"),function(t,e=""){if(!Object.values(St).includes(t))return wt("common.offline");const i={[St.ON]:wt("common.on"),[St.OFF]:wt("common.off"),[St.AUTO]:wt("common.auto"),[St.HEAT]:wt("common.heat"),[St.COOL]:wt("common.cool")}[t]||t;return""!=e?i+e:i}(t.state,s)}!function(t){t.ON="on",t.OFF="off",t.AUTO="auto",t.HEAT="heat",t.COOL="cool"}(St||(St={}));let Tt=class extends lt{constructor(){super(...arguments),this._config=i}setConfig(t){if(!t||!t.entity)throw new Error(wt("common.invalid_configuration"));this._config=t}static getStubConfig(t,e){const i=e.filter(t=>"switch"===t.split(".")[0]).sort();return{type:"custom:google-button-card",entity:i[Math.floor(Math.random()*i.length)],icon:"mdi:switch",height:95}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("google-button-card-editor")}_toggle(){if(navigator.vibrate&&navigator.vibrate(50),!this._config||!this.hass)return;const t=this._config.entity;"thermometer"===(this._config.control_type||"generic")?Ct(this,"hass-more-info",{entityId:t}):this.hass.callService("homeassistant","toggle",{entity_id:t})}render(){var t,e;if(!this._config||!this.hass)return W``;const i=this.hass.states[this._config.entity];if(!i)return W`<ha-card
        ><div class="warning">${wt("common.no_entity")}</div></ha-card
      >`;const s="on"===i.state||"auto"===i.state||"heat"===i.state||"cool"===i.state,o=this._config.name||i.attributes.friendly_name,r=function(t,e){var i,s,o;const r=t.entity_id.split(".")[0],n=t.state,a=null!==(i=e.control_type)&&void 0!==i?i:"generic";if(null!==(s=e.use_default_icon)&&void 0!==s&&!s)return e.dual_icon?"on"===n||"auto"===n||"heat"===n||"cool"===n?e.icon_on||`mdi:${r}`:e.icon_off||`mdi:${r}`:e.icon||`mdi:${r}`;if(null===(o=t.attributes.icon)||void 0===o?void 0:o.trim())return t.attributes.icon;if("thermometer"===a)switch(n){case"auto":return"mdi:thermostat-auto";case"heat":return"mdi:fire";case"cool":return"mdi:snowflake";default:return"mdi:thermometer"}return`mdi:${r}`}(i,this._config),n=(a=i.state,!Object.values(St).includes(a));var a;const c=Pt(i,this._config.control_type,n),l=(null===(e=null===(t=this.hass)||void 0===t?void 0:t.themes)||void 0===e?void 0:e.darkMode)?"dark":"light";return console.log(this._config),this.setColorCard(this._config.control_type,l,n,s),W`
      <ha-card
        class="google-button ${s?"on":"off"}"
        @click=${this._toggle}
      >
        <div class="content">
          <ha-icon .icon=${r} class="icon"></ha-icon>
          <div class="text">
            <div class="name">${o}</div>
            <div class="state">${c}</div>
          </div>
        </div>
        ${n?W`
              <ha-icon
                id="icon_offline"
                icon="mdi:alert"
                style="position: absolute; right: 20px; top: 50%; transform: translateY(-50%); color: var(--bsc-icon-color);"
                title="Offline"
              ></ha-icon>
            `:""}
      </ha-card>
    `}setColorCard(t,e,i,s){console.log(t,e,i,s);let o="",r="",n="",a="";i?"light"===e?(o=r=n="#949496",a="#dfdfe1"):(o=r=n="#717173",a="#2c2c2e"):s?"dark"===e?"thermometer"===t?(o=r=n="#fedcca",a="#5c4035"):(o=r=n="#d8e3f7",a="#3e4758"):"thermometer"===t?(o=r=n="#812800",a="#ffd5c4"):(o=r=n="#131c2b",a="#d8e3f7"):"dark"===e?(o=r=n="#e3e3e5",a="#292a2e"):(o=r=n="#1b1b1d",a="#e8e8ea"),this._setStyleProperty("--bsc-name-color",o),this._setStyleProperty("--bsc-icon-color",r),this._setStyleProperty("--bsc-percentage-color",n),this._setStyleProperty("--bsc-background",a),this._setStyleProperty("--bsc-height",this._config.height||95,t=>`${t}px`),this._setStyleProperty("--bsc-border-radius",this._config.border_radius)}_setStyleProperty(t,e,i=t=>t){null!=e&&""!==e&&this.style.setProperty(t,i(e))}};Tt.styles=l`
    :host {
      --bsc-height: var(--ha-card-height, 95px);
      --bsc-border-radius: var(--ha-card-border-radius);
    }

    ha-card.google-button {
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 12px 16px;
      border-radius: var(--bsc-border-radius, 28px);
      background: var(--bsc-background);
      transition:
        background-color 0.3s ease,
        color 0.3s ease;
      height: var(--bsc-height);
    }

    .content {
      display: flex;
      align-items: center;
      width: 100%;
    }

    .icon {
      width: 32px;
      height: 32px;
      margin-right: 5px;
      color: var(--bsc-icon-color);
      align-content: center;
    }

    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .name {
      color: var(--bsc-name-color);
      font-size: 16px;
      font-weight: 500;
    }

    .state {
      font-size: 13px;
      color: var(--bsc-percentage-color);
    }

    .warning {
      padding: 16px;
      color: red;
      font-weight: bold;
    }
  `,s([gt({attribute:!1})],Tt.prototype,"hass",void 0),s([_t()],Tt.prototype,"_config",void 0),Tt=s([dt("google-button-card")],Tt);let kt=class extends lt{static getStubConfig(){return{type:"custom:google-dashboard-card"}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("google-dashboard-card-editor")}setConfig(t){if(!t)throw new Error(wt("common.invalid_configuration"));this._config=t}render(){return this._config?W`
      <div class="horizontal-scroll">
        ${this._renderButtonCard("Cameras","m3r:videocam","camera.","#E8EAED","#9AA0A6","#8AB4F8","#302f32",6)}
        ${this._renderButtonCard("Lighting","m3r:light-group","light.","#FFFFFF","#9AA0A6","#FBBC04","#332f2a")}
        ${this._renderButtonCard("Wi-Fi","m3of:wifi","device_tracker.","#FFFFFF","#9AA0A6","#81C995","#2e312e")}
        ${this._renderButtonCard("Climate","m3of:thermostat","climate.","#FFFFFF","#9AA0A6","#FF8A65","#352f2d")}
      </div>
    `:W`<ha-card><div>Missing config</div></ha-card>`}_renderButtonCard(t,e,i,s,o,r,n,a){const c=Object.keys(this.hass.states).filter(t=>t.startsWith(i)),l=c.filter(t=>"on"===this.hass.states[t].state),h=null!=a?a:c.length,d=`${l.length}/${h} ${t.toLowerCase()}`;return 0===c.length?W``:W`
      <button
        class="button-card"
        @click=${Ct(this,"navigate",{navigation_path:`./${t.toLowerCase()}`})}
      >
        <ha-icon class="icon" .icon=${e}></ha-icon>
        <div class="name" style="color: ${s}">${t}</div>
        <div class="label" style="color: ${o}">${d}</div>
      </button>
    `}};kt.styles=l`
    .horizontal-scroll {
      display: flex;
      overflow-x: auto;
      gap: 8px;
      padding: 8px;
    }
    .button-card {
      background-color: var(--bg-on, #eee);
      border-radius: 30px;
      padding: 16px;
      min-width: 120px;
      cursor: pointer;
      border: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      height: 130px;
      width: 130px;
      flex-shrink: 0;
      user-select: none;
      transition: background-color 0.3s ease;
    }
    .button-card:hover {
      filter: brightness(0.9);
    }
    .icon {
      font-size: 36px;
      color: var(--icon-color, #000);
    }
    .name {
      font-weight: bold;
      font-size: 1rem;
    }
    .label {
      font-size: 0.8rem;
      opacity: 0.7;
    }
  `,s([gt({attribute:!1})],kt.prototype,"hass",void 0),s([_t()],kt.prototype,"_config",void 0),kt=s([dt("google-dashboard-card")],kt);class Ot{#t;#e;#i=0;#s=0;#o=0;#r=0;#n;#a=!1;#c;#l;#h;constructor(t,e,{touchActions:i,stopScrollDirection:s="both"}={}){this.#t=t,this.#e=i,this.#n=e,this.#c=s,this.#l=this.#d.bind(this),this.#h=this.#u.bind(this),this.addListeners()}addListeners(){this.#t.addEventListener("pointerdown",this.#h),this.#t.addEventListener("pointermove",this.#h),this.#t.addEventListener("pointerup",this.#h),this.#t.addEventListener("pointercancel",this.#h),window.addEventListener("touchmove",this.#l,{passive:!1}),this.#e&&(this.#t.style.touchAction=this.#e)}removeListeners(){this.#t.removeEventListener("pointerdown",this.#h),this.#t.removeEventListener("pointermove",this.#h),this.#t.removeEventListener("pointerup",this.#h),this.#t.removeEventListener("pointercancel",this.#h),window.removeEventListener("touchmove",this.#l),this.#e&&this.#t.style.removeProperty("touch-action")}#p(){this.#a=!0}#g(){this.#a=!1}#d(t){this.#a&&t.preventDefault()}#u(t){if("pointerdown"===t.type&&(this.#t.setPointerCapture(t.pointerId),this.#i=t.pageX,this.#s=t.pageY),this.#t.hasPointerCapture(t.pointerId)&&"pointercancel"!==t.type&&"function"==typeof this.#n){const e=t.pageX-this.#i,i=t.pageY-this.#s,s=Math.abs(e/i)>1,o=Math.abs(e/i)<1;"horizontal"===this.#c&&s&&this.#p(),"vertical"===this.#c&&o&&this.#p(),"both"===this.#c&&this.#p(),this.#n(t,{startX:this.#i,startY:this.#s,relativeX:e,relativeY:i,totalX:e+this.#o,totalY:i+this.#r})}"pointerup"===t.type&&(this.#o=+this.#o+t.pageX-this.#i,this.#r=+this.#r+t.pageY-this.#s,this.#t.releasePointerCapture(t.pointerId),this.#g()),"pointercancel"===t.type&&(this.#n(t,{startX:this.#i,startY:this.#s,relativeX:0,relativeY:0,totalX:this.#o,totalY:this.#r}),this.#t.releasePointerCapture(t.pointerId),this.#g())}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ut extends lt{constructor(){super(...arguments),this._config=e,this._name="",this.mouseStartPos={x:0,y:0},this.mousePos={x:0,y:0},this.containerWidth=0,this.oldValue=0,this.currentValue=0,this.holdTimer=0,this.isHold=!1,this._shouldUpdate=!0,this.updateTimeout=0,this.pressTimeout=0,this.trackingStartTime=0,this.isTap=!1,this._handleContextMenu=t=>(t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation(),!1),this._handlePointer=(t,e)=>{this.mousePos={x:t.pageX,y:t.pageY};const i=this._config.min_slide_time;if("pointerdown"===t.type&&(this._press(),this.isTap=!0,this.isHold=!1,this.holdTimer=window.setTimeout(this._setHold,this._config.hold_time),this.trackingStartTime=Date.now(),this._resetTrack()),["pointerdown","pointermove","pointerup"].includes(t.type)&&this._updateValue(),"pointermove"===t.type){if(this.isTap&&Math.abs(e.relativeX)<5&&Math.abs(e.relativeY)<5)return;this.isTap=!1,clearTimeout(this.holdTimer),this._stopUpdates()}if("pointercancel"===t.type&&(clearTimeout(this.holdTimer),this._unpress(),this._startUpdates()),"pointerup"===t.type){if(clearTimeout(this.holdTimer),this._unpress(),this._startUpdates(),this.isTap)return void this._handleTap();Date.now()-this.trackingStartTime>i&&(this._setValue(),this._startUpdates(!0))}},this._setHold=()=>{this.isTap=!1,this.isHold=!0,this._handleAction("hold")},this._handleTap=()=>{var t;clearTimeout(this.holdTimer),(null===(t=this._config)||void 0===t?void 0:t.tap_action)&&(this.isHold||this._handleAction("tap"))}}static getStubConfig(t,e){const i=e.filter(t=>"light"===t.split(".")[0]).sort();return{type:"custom:google-slider-card",entity:i[Math.floor(Math.random()*i.length)],attribute:"brightness",icon:"m3of:lightbulb",show_percentage:!0,bold_text:!0,height:95}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("google-slider-card-editor")}setConfig(t){if(!t)throw new Error(wt("common.invalid_configuration"));if(!t.entity)throw new Error(wt("common.no_entity_set"));if(!t.entity||"light"!==t.entity.split(".")[0])throw new Error("Specify an entity from within the light domain");this._config=Object.assign(Object.assign({},e),t),this._entity=this._config.entity,this._config.original_min=this._config.min,this._config.original_max=this._config.max}set hass(t){var e,i,s,o,r,n,a,c;if(!this._entity)return;this._hass=t,this._state=t.states[this._entity],this._status=null===(e=this._state)||void 0===e?void 0:e.state,this._name=null!==(n=null!==(r=null!==(i=this._config.name)&&void 0!==i?i:null===(o=null===(s=this._state)||void 0===s?void 0:s.attributes)||void 0===o?void 0:o.friendly_name)&&void 0!==r?r:this._entity.split(".")[1])&&void 0!==n?n:"";const l=(null===(a=t.themes)||void 0===a?void 0:a.darkMode)?"dark":"light",h=null===(c=t.states[this._entity])||void 0===c?void 0:c.state;this._lastTheme===l&&this._lastEntityState===h||(this._lastTheme=l,this._lastEntityState=h,this.requestUpdate())}_log(t){console.log(`%c GOOGLE-SLIDER-CARD ${this._name} %c ${t} `,"color: orange; font-weight: bold; background: black","")}connectedCallback(){super.connectedCallback(),this.addEventListener("contextmenu",this._handleContextMenu),this.slideGesture=new Ot(this,this._handlePointer.bind(this),{touchActions:"pan-y",stopScrollDirection:"horizontal"})}disconnectedCallback(){this.removeEventListener("contextmenu",this._handleContextMenu),this.slideGesture.removeListeners(),super.disconnectedCallback()}_updateValue(){const t=this.containerWidth,e=this.mousePos.x-this.mouseStartPos.x,i=Math.round(100*e/t);this.currentValue=this.oldValue+i,this._checklimits(),this._updateSlider()}_handleAction(t){const e=new Event("hass-action",{bubbles:!0,cancelable:!1,composed:!0});e.detail={config:this._config,action:t},this.dispatchEvent(e)}_resetTrack(){this.mouseStartPos={x:this.mousePos.x,y:this.mousePos.y},this.oldValue=this.currentValue}_press(){this.pressTimeout&&clearTimeout(this.pressTimeout),this.pressTimeout=window.setTimeout(()=>this.setAttribute("pressed",""),this._config.min_slide_time),this.setAttribute("half-pressed","")}_unpress(){this.pressTimeout&&clearTimeout(this.pressTimeout),this.removeAttribute("pressed"),this.removeAttribute("half-pressed")}_checklimits(){var t,e;const i=null!==(t=this._config.min)&&void 0!==t?t:0,s=null!==(e=this._config.max)&&void 0!==e?e:100;this.currentValue<i&&(this.currentValue=i,this._resetTrack()),this.currentValue>s&&(this.currentValue=s,this._resetTrack())}_updateSlider(){var t;this.style.setProperty("--bsc-percent",this.currentValue+"%");const e=null===(t=null==this?void 0:this.shadowRoot)||void 0===t?void 0:t.getElementById("percentage");e&&(e.innerText=Math.round(this.currentValue)+"%")}_updateColors(){var t,e,i,s,o;let r="var(--bsc-color)",n="0%",a="50%",c=!1;if(this._state)if("on"==this._status){const o=null!==(e=null===(t=this._state.attributes)||void 0===t?void 0:t.rgb_color)&&void 0!==e?e:[255,255,255],l=null!==(s=null===(i=this._state.attributes)||void 0===i?void 0:i.brightness)&&void 0!==s?s:255;c=!0,o&&(r=`rgb(${o.join(",")})`),l&&(n=`${Math.ceil(100*l/255)}%`,a=`${Math.ceil(100*l/510+50)}%`)}else r="var(--bsc-off-color)";const l=null===(o=null==this?void 0:this.shadowRoot)||void 0===o?void 0:o.getElementById("percentage");if(!c){"on"!=this._status&&"off"!=this._status?l&&(l.innerText=wt("common.offline")):l&&(l.innerText=wt("common.off"))}this.style.setProperty("--bsc-entity-color",r),this.style.setProperty("--bsc-brightness",n),this.style.setProperty("--bsc-brightness-ui",a),this._config.icon_color&&c&&this.style.setProperty("--bsc-icon-color",this._config.icon_color),this._config.icon_color&&!c&&this.style.removeProperty("--bsc-icon-color")}_getValue(){var t,e,i,s,o;if(!this._shouldUpdate)return;if(!this._state)return;const r=null===(t=this._config)||void 0===t?void 0:t.attribute;let n=0;if("unavailable"==this._status?(this._config.min=0,this._config.max=0,this.style.setProperty("--bsc-opacity","0.5")):(this._config.min=this._config.original_min,this._config.max=this._config.original_max,this.style.removeProperty("--bsc-opacity")),"on"!=this._status)n=null!==(e=this._config.min)&&void 0!==e?e:0;else switch(r){case"brightness":n=Math.round(100*(null!==(i=this._state.attributes.brightness)&&void 0!==i?i:255)/255);break;case"red":case"green":case"blue":const t=null!==(s=this._state.attributes.rgb_color)&&void 0!==s?s:[255,255,255];"red"===r&&(n=t[0]),"green"===r&&(n=t[1]),"blue"===r&&(n=t[2]),n=Math.ceil(100*n/255);break;case"hue":case"saturation":const e=null!==(o=this._state.attributes.hs_color)&&void 0!==o?o:[100,100];"hue"===r&&(n=e[0]),"saturation"===r&&(n=e[1])}this.currentValue=n,this._updateSlider()}_setValue(){var t,e;if(!this._state)return;let i,s=this.currentValue,o=this._config.attribute,r=!0;switch(o){case"brightness":s=Math.ceil(s/100*255),s||(r=!1);break;case"red":case"green":case"blue":i=null!==(t=this._state.attributes.rgb_color)&&void 0!==t?t:[255,255,255],"red"===o&&(i[0]=s),"green"===o&&(i[1]=s),"blue"===o&&(i[2]=s),s=i,o="rgb_color";break;case"hue":case"saturation":i=null!==(e=this._state.attributes.hs_color)&&void 0!==e?e:[100,100],"hue"===o&&(i[0]=s),"saturation"===o&&(i[1]=s),s=i,o="hs_color"}const n={entity_id:this._state.entity_id};r?(n[o]=s,this._config.transition&&(n.transition=this._config.transition),this._hass.callService("light","turn_on",n)):this._hass.callService("light","turn_off",n)}_stopUpdates(){var t,e,i;this.updateTimeout&&clearTimeout(this.updateTimeout),this._shouldUpdate&&(null===(i=null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("slider"))||void 0===e?void 0:e.classList)||void 0===i||i.remove("animate"),this._shouldUpdate=!1)}_startUpdates(t=!1){this.updateTimeout&&clearTimeout(this.updateTimeout),this.updateTimeout=window.setTimeout(()=>{var t,e,i;this._shouldUpdate=!0,null===(i=null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("slider"))||void 0===e?void 0:e.classList)||void 0===i||i.add("animate"),this.requestUpdate()},t?this._config.settle_time:0)}updated(){var t,e,i;this.containerWidth=null!==(i=null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("container"))||void 0===e?void 0:e.clientWidth)&&void 0!==i?i:0,this._getValue(),this._updateColors()}render(){var t,e,i,s,o,r,n,a,c;if(!this._entity||!(this._entity in(null!==(e=null===(t=this._hass)||void 0===t?void 0:t.states)&&void 0!==e?e:{})))return this._showError(`${wt("common.no_entity")}: ${this._entity}`);const l=null!==(i=this._config.colorize&&!0)&&void 0!==i&&i,h=null!==(s=this._config.show_percentage&&!0)&&void 0!==s&&s,d=null!==(o=this._config.bold_text&&!0)&&void 0!==o&&o,u=null===(n=null===(r=this._hass)||void 0===r?void 0:r.states)||void 0===n?void 0:n[this._entity],p="on"!=(null==u?void 0:u.state)&&"off"!=(null==u?void 0:u.state),g=(null===(c=null===(a=this._hass)||void 0===a?void 0:a.themes)||void 0===c?void 0:c.darkMode)?"dark":"light",_="on"===(null==u?void 0:u.state);let m="",f="",b="",v="",y="";_&&"dark"===g?(m=f=b="#ffe083",v="#6d5300",y="#333029"):_?(m=f=b="#745b01",v="#ffbf00",y="#feefc8"):"dark"===g?(m=f=b="#e3e3e5",v="#cccccc",y="#292a2e"):(m=f=b="#1b1b1d",y="#e8e8ea"),this._setStyleProperty("--bsc-name-color",m),this._setStyleProperty("--bsc-icon-color",f),this._setStyleProperty("--bsc-percentage-color",b),this._setStyleProperty("--bsc-slider-color",v),this._setStyleProperty("--bsc-background",y),this._setStyleProperty("--bsc-name-margin","-20px"),this._setStyleProperty("--bsc-icon-margin","-10px"),this._setStyleProperty("--bsc-percentage-margin","-20px"),this._setStyleProperty("--bsc-primary-text-color",this._config.text_color),this._setStyleProperty("--bsc-border-color",this._config.border_color),this._setStyleProperty("--bsc-border-radius",this._config.border_radius),this._setStyleProperty("--bsc-border-style",this._config.border_style),this._setStyleProperty("--bsc-border-width",this._config.border_width),this._setStyleProperty("--bsc-height",this._config.height,t=>`${t}px`);const $=null==this._config.icon||"m3of:lightbulb"===this._config.icon||"m3r:lightbulb"===this._config.icon?_?"m3of:lightbulb":"m3r:lightbulb":this._config.icon;return W`
      <ha-card id="container" tabindex="0" style="position: relative;">
        <div id="slider" class="animate ${l?"colorize":""}"></div>
        <ha-state-icon
          id="icon"
          .icon=${$}
          .state=${this._state}
          .hass=${this._hass}
          .stateObj=${this._state}
          data-domain=${this._entity.split(".")[0]}
          data-state=${(t=>t??Y)(this._status)}
        ></ha-state-icon>
        <div id="content">
          <p id="label" class="${d?"bold":""}">
            <span id="name">${this._name}</span>
            <span
              id="percentage"
              class="${h?"":"hide"}"
            ></span>
          </p>
        </div>
        ${p?W`
              <ha-icon
                id="icon_offline"
                icon="mdi:alert"
                style="position: absolute; right: 20px; top: 50%; transform: translateY(-50%); color: var(--bsc-icon-color);"
                title="Offline"
              ></ha-icon>
            `:""}
      </ha-card>
    `}_setStyleProperty(t,e,i=t=>t){null!=e&&""!==e&&this.style.setProperty(t,i(e))}_showWarning(t){return W` <hui-warning>${t}</hui-warning> `}_showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t}),W` ${e} `}static get styles(){return l`
      :host {
        --bsc-background: var(--card-background-color, #aaaaaa);
        --bsc-slider-color: var(--paper-slider-active-color, #f9d2b0);
        --bsc-percent: 0%;
        --bsc-brightness: 50%;
        --bsc-brightness-ui: 50%;
        --bsc-color: var(--paper-item-icon-color);
        --bsc-off-color: var(--paper-item-icon-color);
        --bsc-entity-color: var(--bsc-color);
        --bsc-primary-text-color: var(--primary-text-color);
        --bsc-secondary-text-color: var(--secondary-text-color);
        --bsc-border-color: var(--ha-card-border-color);
        --bsc-border-radius: var(--ha-card-border-radius);
        --bsc-border-style: var(--ha-card-border-style);
        --bsc-border-width: var(--ha-card-border-width);
        --bsc-height: var(--ha-card-height, 60px);
        --bsc-opacity: 1;

        display: flex;
        transition: transform 0.1s ease-out;
        user-select: none;
      }

      :host([half-pressed]) {
        transform: scale(0.99);
      }

      :host([pressed]) {
        transform: scale(0.98);
      }

      #container {
        height: var(--bsc-height);
        width: 100%;
        position: relative;
        overflow: hidden;
        opacity: var(--bsc-opacity);
        background: var(--bsc-background);
        border-color: var(--bsc-border-color, rgba(0 0 0 / 14%));
        border-radius: var(--bsc-border-radius, 4px);
        border-style: var(--bsc-border-style, solid);
        border-width: var(--bsc-border-width, 1px);
        z-index: 1; //fix safari bug with filter transition https://stackoverflow.com/a/27935035
        pointer-events: visible;
        cursor: pointer;
        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
      }

      .hide {
        display: none;
      }

      #container:focus {
        outline: 0;
      }

      #slider {
        height: 100%;
        position: absolute;
        background-color: var(--bsc-slider-color);
        opacity: 0.3;
        left: 0;
        top: 0;
        right: calc(100% - var(--bsc-percent));
      }

      #slider.colorize {
        background-color: var(--bsc-entity-color);
        filter: brightness(var(--bsc-brightness-ui));
        transition:
          background-color 1s ease,
          filter 1s ease;
      }

      #slider.animate {
        transition:
          right 1s ease,
          background-color 1s ease,
          filter 1s ease;
      }

      #icon {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--bsc-icon-color, var(--bsc-entity-color));
        filter: brightness(var(--bsc-brightness-ui));
        transition: color 0.3s ease-out;
      }

      #content {
        height: 100%;
        width: 100%;
        position: absolute;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0 24px 0 72px;
        box-sizing: border-box;
      }

      #label {
        display: flex;
        flex-direction: column;
      }

      #label.bold {
        font-weight: bold;
      }

      #name {
        color: var(--bsc-primary-text-color);
      }

      #percentage {
        color: var(--bsc-secondary-text-color);
      }

      #name {
        color: var(--bsc-name-color);
        margin-left: var(--bsc-name-margin);
      }

      #icon {
        color: var(--bsc-icon-color);
        margin-left: var(--bsc-icon-margin);
      }

      #percentage {
        color: var(--bsc-percentage-color);
        margin-left: var(--bsc-percentage-margin);
      }
      @media (max-width: 420px) {
        #name,
        #percentage {
          font-size: small;
        }
        #name {
          line-height: 1.4;
        }
        #icon_offline {
          right: 15px;
        }
      }
    `}}var Mt;s([_t()],Ut.prototype,"_config",void 0),s([_t()],Ut.prototype,"_entity",void 0),s([_t()],Ut.prototype,"_state",void 0),s([_t()],Ut.prototype,"_status",void 0),s([_t()],Ut.prototype,"_name",void 0),console.info(`%c  GOOGLE-SLIDER-CARD \n%c  ${wt("common.version")} 1.2.0    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),customElements.define("google-slider-card",Ut),customElements.get("google-button-card")||customElements.define("google-button-card",Tt),customElements.get("google-button-card")||customElements.define("google-button-card",kt),customElements.get("google-dashboard-card")||customElements.define("google-dashboard-card",kt),window.customCards=null!==(Mt=window.customCards)&&void 0!==Mt?Mt:[],window.customCards.push({type:"google-slider-card",name:"Google Slider Card",preview:!0,description:"Google Slider Card for light entities."}),window.customCards.push({type:"google-button-card",name:"Google Button Card",preview:!0,description:"Google-style button card."}),window.customCards.push({type:"google-dashboard-card",name:"Google Dashboard Card",preview:!0,description:"Google-style Dashboard card."});
