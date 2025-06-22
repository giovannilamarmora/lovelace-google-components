const t="brightness",e={type:"custom:google-slider-card",attribute:t,tap_action:{action:"toggle",haptic:"light"},hold_action:{action:"more-info"},hold_time:600,settle_time:3e3,min_slide_time:0,min:0,max:100},n={type:"custom:google-button-card",attribute:t,tap_action:{action:"toggle",haptic:"light"},hold_action:{action:"more-info"},hold_time:600,settle_time:3e3,min_slide_time:0,min:0,max:100};function i(t,e,n,i){var o,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,n,s):o(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o=globalThis,r=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),a=new WeakMap;let l=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(r&&void 0===t){const n=void 0!==e&&1===e.length;n&&(t=a.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&a.set(e,t))}return t}toString(){return this.cssText}};const c=(t,...e)=>{const n=1===t.length?t[0]:e.reduce((e,n,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[i+1],t[0]);return new l(n,t,s)},h=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return(t=>new l("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:d,defineProperty:u,getOwnPropertyDescriptor:p,getOwnPropertyNames:f,getOwnPropertySymbols:g,getPrototypeOf:m}=Object,b=globalThis,_=b.trustedTypes,v=_?_.emptyScript:"",y=b.reactiveElementPolyfillSupport,w=(t,e)=>t,x={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch(t){n=null}}return n}},A=(t,e)=>!d(t,e),$={attribute:!0,type:String,converter:x,reflect:!1,useDefault:!1,hasChanged:A};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),b.litPropertyMetadata??=new WeakMap;let k=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(t,n,e);void 0!==i&&u(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){const{get:i,set:o}=p(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const r=i?.call(this);o?.call(this,e),this.requestUpdate(t,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const t=m(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const t=this.properties,e=[...f(t),...g(t)];for(const n of e)this.createProperty(n,t[n])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,n]of e)this.elementProperties.set(t,n)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const n=this._$Eu(t,e);void 0!==n&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const t of n)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Eu(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(r)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const n of e){const e=document.createElement("style"),i=o.litNonce;void 0!==i&&e.setAttribute("nonce",i),e.textContent=n.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){const n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(void 0!==i&&!0===n.reflect){const o=(void 0!==n.converter?.toAttribute?n.converter:x).toAttribute(e,n.type);this._$Em=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const n=this.constructor,i=n._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=n.getPropertyOptions(i),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:x;this._$Em=i,this[i]=o.fromAttribute(e,t.type)??this._$Ej?.get(i)??null,this._$Em=null}}requestUpdate(t,e,n){if(void 0!==t){const i=this.constructor,o=this[t];if(n??=i.getPropertyOptions(t),!((n.hasChanged??A)(o,e)||n.useDefault&&n.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,n))))return;this.C(t,e,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:i,wrapped:o},r){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==o||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,n]of t){const{wrapped:t}=n,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,n,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[w("elementProperties")]=new Map,k[w("finalized")]=new Map,y?.({ReactiveElement:k}),(b.reactiveElementVersions??=[]).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const C=globalThis,E=C.trustedTypes,S=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,O="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,j="?"+T,M=`<${j}>`,I=document,F=()=>I.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,L=Array.isArray,N="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,R=/>/g,D=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,V=/"/g,W=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...n)=>({_$litType$:t,strings:e,values:n}))(1),Y=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),G=new WeakMap,X=I.createTreeWalker(I,129);function K(t,e){if(!L(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const Z=(t,e)=>{const n=t.length-1,i=[];let o,r=2===e?"<svg>":3===e?"<math>":"",s=U;for(let e=0;e<n;e++){const n=t[e];let a,l,c=-1,h=0;for(;h<n.length&&(s.lastIndex=h,l=s.exec(n),null!==l);)h=s.lastIndex,s===U?"!--"===l[1]?s=z:void 0!==l[1]?s=R:void 0!==l[2]?(W.test(l[2])&&(o=RegExp("</"+l[2],"g")),s=D):void 0!==l[3]&&(s=D):s===D?">"===l[0]?(s=o??U,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?D:'"'===l[3]?V:H):s===V||s===H?s=D:s===z||s===R?s=U:(s=D,o=void 0);const d=s===D&&t[e+1].startsWith("/>")?" ":"";r+=s===U?n+M:c>=0?(i.push(a),n.slice(0,c)+O+n.slice(c)+T+d):n+T+(-2===c?e:d)}return[K(t,r+(t[n]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class J{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let o=0,r=0;const s=t.length-1,a=this.parts,[l,c]=Z(t,e);if(this.el=J.createElement(l,n),X.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=X.nextNode())&&a.length<s;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(O)){const e=c[r++],n=i.getAttribute(t).split(T),s=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:s[2],strings:n,ctor:"."===s[1]?it:"?"===s[1]?ot:"@"===s[1]?rt:nt}),i.removeAttribute(t)}else t.startsWith(T)&&(a.push({type:6,index:o}),i.removeAttribute(t));if(W.test(i.tagName)){const t=i.textContent.split(T),e=t.length-1;if(e>0){i.textContent=E?E.emptyScript:"";for(let n=0;n<e;n++)i.append(t[n],F()),X.nextNode(),a.push({type:2,index:++o});i.append(t[e],F())}}}else if(8===i.nodeType)if(i.data===j)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(T,t+1));)a.push({type:7,index:o}),t+=T.length-1}o++}}static createElement(t,e){const n=I.createElement("template");return n.innerHTML=t,n}}function Q(t,e,n=t,i){if(e===Y)return e;let o=void 0!==i?n._$Co?.[i]:n._$Cl;const r=P(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t),o._$AT(t,n,i)),void 0!==i?(n._$Co??=[])[i]=o:n._$Cl=o),void 0!==o&&(e=Q(t,o._$AS(t,e.values),o,i)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:n}=this._$AD,i=(t?.creationScope??I).importNode(e,!0);X.currentNode=i;let o=X.nextNode(),r=0,s=0,a=n[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new et(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new st(o,this,t)),this._$AV.push(e),a=n[++s]}r!==a?.index&&(o=X.nextNode(),r++)}return X.currentNode=I,i}p(t){let e=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,i){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),P(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==Y&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>L(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(I.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:n}=t,i="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=J.createElement(K(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new tt(i,this),n=t.u(this.options);t.p(e),this.T(n),this._$AH=t}}_$AC(t){let e=G.get(t.strings);return void 0===e&&G.set(t.strings,e=new J(t)),e}k(t){L(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,i=0;for(const o of t)i===e.length?e.push(n=new et(this.O(F()),this.O(F()),this,this.options)):n=e[i],n._$AI(o),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class nt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,i,o){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=q}_$AI(t,e=this,n,i){const o=this.strings;let r=!1;if(void 0===o)t=Q(this,t,e,0),r=!P(t)||t!==this._$AH&&t!==Y,r&&(this._$AH=t);else{const i=t;let s,a;for(t=o[0],s=0;s<o.length-1;s++)a=Q(this,i[n+s],e,s),a===Y&&(a=this._$AH[s]),r||=!P(a)||a!==this._$AH[s],a===q?t=q:t!==q&&(t+=(a??"")+o[s+1]),this._$AH[s]=a}r&&!i&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class it extends nt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class ot extends nt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class rt extends nt{constructor(t,e,n,i,o){super(t,e,n,i,o),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??q)===Y)return;const n=this._$AH,i=t===q&&n!==q||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==q&&(n===q||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const at=C.litHtmlPolyfillSupport;at?.(J,et),(C.litHtmlVersions??=[]).push("3.3.0");const lt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ct=class extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,n)=>{const i=n?.renderBefore??e;let o=i._$litPart$;if(void 0===o){const t=n?.renderBefore??null;i._$litPart$=o=new et(e.insertBefore(F(),t),t,void 0,n??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Y}};ct._$litElement$=!0,ct.finalized=!0,lt.litElementHydrateSupport?.({LitElement:ct});const ht=lt.litElementPolyfillSupport;ht?.({LitElement:ct}),(lt.litElementVersions??=[]).push("4.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dt=t=>(e,n)=>{void 0!==n?n.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ut={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:A},pt=(t=ut,e,n)=>{const{kind:i,metadata:o}=n;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),r.set(n.name,t),"accessor"===i){const{name:i}=n;return{set(n){const o=e.get.call(this);e.set.call(this,n),this.requestUpdate(i,o,t)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=n;return function(n){const o=this[i];e.call(this,n),this.requestUpdate(i,o,t)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ft(t){return(e,n)=>"object"==typeof n?pt(t,e,n):((t,e,n)=>{const i=e.hasOwnProperty(n);return e.constructor.createProperty(n,t),i?Object.getOwnPropertyDescriptor(e,n):void 0})(t,e,n)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function gt(t){return ft({...t,state:!0,attribute:!1})}var mt={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",no_entity_set:"Entity not set",no_entity:"Entity not available",on:"On",off:"Off",offline:"Offline",auto:"Auto",heat:"Heat",cool:"Cool"},bt={description:"Configure the navigation path when a card is tapped.",cameras:"Cameras path",cameras_name:"Cameras",lighting:"Lighting path",lighting_name:"Lighting",lighting_label:"Lights",wifi:"Wi-Fi path",wifi_name:"Wi-Fi",climate:"Climate path",climate_name:"Climate",device:"Device",devices:"Devices",placeholder:"./path-or-url"},_t={control_type:"Control Type",type:{generic:"Generic (Switch, Button...)",thermometer:"Thermometer"},dual_icon:{default:"Use default icon",options:"Use dual icon (Element On and Element Off)."}},vt={common:mt,google_dashboard_card:bt,google_button_card:_t},yt={version:"Versione",invalid_configuration:"Configurazione non valida",show_warning:"Mostra avviso",no_entity_set:"Entità non impostata",no_entity:"Entità non disponibile",on:"Acceso",off:"Spento",offline:"Offline",auto:"Auto",heat:"Riscalda",cool:"Raffresca"},wt={description:"Configura il percorso di navigazione quando una card viene cliccata.",cameras:"Percorso delle telecamere",cameras_name:"Telecamere",lighting:"Percorso delle luci",lighting_name:"Illuminazione",lighting_label:"Luci",wifi:"Percorso Wi-Fi",wifi_name:"Wi-Fi",climate:"Percorso del clima",climate_name:"Climatizzazione",device:"Dispositivo",devices:"Dispositivi",placeholder:"./percorso-o-url"},xt={control_type:"Tipo di controllo",type:{generic:"Generico (Interruttore, Pulsante...)",thermometer:"Termometro"},dual_icon:{options:"Usa doppia icona (Elemento acceso e spento)."}},At={common:yt,google_dashboard_card:wt,google_button_card:xt};const $t={en:Object.freeze({__proto__:null,common:mt,default:vt,google_button_card:_t,google_dashboard_card:bt}),it:Object.freeze({__proto__:null,common:yt,default:At,google_button_card:xt,google_dashboard_card:wt})};function kt(t,e="",n=""){const i=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let o;try{o=t.split(".").reduce((t,e)=>t[e],$t[i])}catch(e){o=t.split(".").reduce((t,e)=>t[e],$t.en)}return void 0===o&&(o=t.split(".").reduce((t,e)=>t[e],$t.en)),""!==e&&""!==n&&(o=o.replace(e,n)),o}var Ct,Et;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(Ct||(Ct={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(Et||(Et={}));var St,Ot=function(t,e,n,i){i=i||{},n=null==n?{}:n;var o=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return o.detail=n,t.dispatchEvent(o),o};function Tt(t,e){var n,i,o;const r=t.entity_id.split(".")[0],s=t.state,a=null!==(n=e.control_type)&&void 0!==n?n:"generic";if(!(null===(i=e.use_default_icon)||void 0===i||i))return e.dual_icon?"on"===s||"auto"===s||"heat"===s||"cool"===s?e.icon_on||`mdi:${r}`:e.icon_off||`mdi:${r}`:e.icon||`mdi:${r}`;if(null===(o=t.attributes.icon)||void 0===o?void 0:o.trim())return t.attributes.icon;if("thermometer"===a)switch(s){case"auto":return"mdi:thermostat-auto";case"heat":return"mdi:fire";case"cool":return"mdi:snowflake";default:return"mdi:thermometer"}return`mdi:${r}`}function jt(t,e,n){let i="";return"thermometer"!==e||n||(i=" • "+t.attributes.current_temperature+"°"),function(t,e=""){if(!Object.values(St).includes(t))return kt("common.offline");const n={[St.ON]:kt("common.on"),[St.OFF]:kt("common.off"),[St.AUTO]:kt("common.auto"),[St.HEAT]:kt("common.heat"),[St.COOL]:kt("common.cool")}[t]||t;return""!=e?n+e:n}(t.state,i)}function Mt(t){return!Object.values(St).includes(t)}function It(t,e){if(!t)return;const n=document.createElement("span");n.classList.add("ripple");const i=t.getBoundingClientRect(),o=Math.max(i.width,i.height);n.style.width=n.style.height=`${o}px`;const r=e.clientX-i.left-o/2,s=e.clientY-i.top-o/2;n.style.left=`${r}px`,n.style.top=`${s}px`,Object.assign(n.style,{position:"absolute",borderRadius:"50%",background:"rgba(255, 255, 255, 0.3)",transform:"scale(0)",animation:"ripple-animation 600ms ease-out",pointerEvents:"none",zIndex:"1"});const a=getComputedStyle(t);"static"===a.position&&(t.style.position="relative"),"hidden"!==a.overflow&&(t.style.overflow="hidden"),t.appendChild(n),n.addEventListener("animationend",()=>n.remove())}!function(t){t.ON="on",t.OFF="off",t.AUTO="auto",t.HEAT="heat",t.COOL="cool"}(St||(St={}));let Ft=class extends ct{constructor(){super(...arguments),this._config=n}setConfig(t){if(!t||!t.entity)throw new Error(kt("common.invalid_configuration"));this._config=t}static getStubConfig(t,e){const n=e.filter(t=>"switch"===t.split(".")[0]).sort();return{type:"custom:google-button-card",entity:n[Math.floor(Math.random()*n.length)],icon:"mdi:switch",height:95}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("google-button-card-editor")}_onClick(t){It(t.currentTarget,t),this._toggle()}_toggle(){if(navigator.vibrate&&navigator.vibrate(50),!this._config||!this.hass)return;const t=this._config.entity;"thermometer"===(this._config.control_type||"generic")?Ot(this,"hass-more-info",{entityId:t}):this.hass.callService("homeassistant","toggle",{entity_id:t})}render(){var t,e;if(!this._config||!this.hass)return B``;const n=this.hass.states[this._config.entity];if(!n)return B`<ha-card
        ><div class="warning">${kt("common.no_entity")}</div></ha-card
      >`;const i="on"===n.state||"auto"===n.state||"heat"===n.state||"cool"===n.state,o=this._config.name||n.attributes.friendly_name,r=Tt(n,this._config),s=Mt(n.state),a=jt(n,this._config.control_type,s),l=(null===(e=null===(t=this.hass)||void 0===t?void 0:t.themes)||void 0===e?void 0:e.darkMode)?"dark":"light";return this.setColorCard(this._config.control_type,l,s,i),B`
      <ha-card
        class="google-button ${i?"on":"off"}"
        @click=${this._onClick}
      >
        <div class="content">
          <ha-icon .icon=${r} class="icon"></ha-icon>
          <div class="text">
            <div class="name">${o}</div>
            <div class="state">${a}</div>
          </div>
        </div>
        ${s?B`
              <ha-icon
                id="icon_offline"
                icon="mdi:alert"
                style="position: absolute; right: 20px; top: 50%; transform: translateY(-50%); color: var(--bsc-icon-color);"
                title="Offline"
              ></ha-icon>
            `:""}
      </ha-card>
    `}setColorCard(t,e,n,i){let o="",r="",s="",a="";n?"light"===e?(o=r=s="#949496",a="#dfdfe1"):(o=r=s="#717173",a="#2c2c2e"):i?"dark"===e?"thermometer"===t?(o=r=s="#fedcca",a="#5c4035"):(o=r=s="#d8e3f7",a="#3e4758"):"thermometer"===t?(o=r=s="#812800",a="#ffd5c4"):(o=r=s="#131c2b",a="#d8e3f7"):"dark"===e?(o=r=s="#e3e3e5",a="#292a2e"):(o=r=s="#1b1b1d",a="#e8e8ea"),this._setStyleProperty("--bsc-name-color",o),this._setStyleProperty("--bsc-icon-color",r),this._setStyleProperty("--bsc-percentage-color",s),this._setStyleProperty("--bsc-background",a),this._setStyleProperty("--bsc-height",this._config.height||95,t=>`${t}px`),this._setStyleProperty("--bsc-border-radius",this._config.border_radius)}_setStyleProperty(t,e,n=t=>t){null!=e&&""!==e&&this.style.setProperty(t,n(e))}};Ft.styles=c`
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
      overflow: hidden; /* fondamentale per contenere il ripple */
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
      font-size: 15px;
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

    @media (max-width: 420px) {
      .name,
      .state {
        font-size: small;
      }
      .name {
        line-height: 1.4;
      }
      #icon_offline {
        right: 15px;
      }
    }

    .ripple {
      position: absolute;
      border-radius: 50%;
      transform: scale(0);
      animation: ripple-animation 600ms ease-out;
      background-color: rgba(255, 255, 255, 0.3);
      pointer-events: none;
    }

    @keyframes ripple-animation {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `,i([ft({attribute:!1})],Ft.prototype,"hass",void 0),i([gt()],Ft.prototype,"_config",void 0),Ft=i([dt("google-button-card")],Ft);let Pt=class extends ct{constructor(){super(...arguments),this._config=n,this._valueChanged=t=>{var e,n;const i=t.target,o=i.getAttribute("configValue"),r=t instanceof CustomEvent&&void 0!==(null===(e=t.detail)||void 0===e?void 0:e.value)?t.detail.value:null!==(n=i.checked)&&void 0!==n?n:i.value;o&&this._config[o]!==r&&(this._config=Object.assign(Object.assign({},this._config),{[o]:r}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}}setConfig(t){this._config=Object.assign({},t)}_entityChanged(t){var e;const n=t.detail.value;(null===(e=this._config)||void 0===e?void 0:e.entity)!==n&&(this._config=Object.assign(Object.assign({},this._config),{entity:n}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}async firstUpdated(){const t=await window.loadCardHelpers(),e=await t.createCardElement({type:"entities",entities:[]});await e.constructor.getConfigElement()}render(){var t,e,n;return this._config&&this.hass?(this._config.use_default_icon=null===(t=this._config.use_default_icon)||void 0===t||t,B`
      <div class="form">
        <span class="switch-label"
          >${kt("google_button_card.dual_icon.options")}</span
        >
        <ha-select
          label="${kt("google_button_card.control_type")}"
          .value=${this._config.control_type||"generic"}
          configValue="control_type"
          @selected=${this._valueChanged}
          @closed=${t=>t.stopPropagation()}
        >
          <mwc-list-item value="generic">
            ${kt("google_button_card.type.generic")}
          </mwc-list-item>
          <mwc-list-item value="thermometer">
            ${kt("google_button_card.type.thermometer")}
          </mwc-list-item>
        </ha-select>

        <ha-entity-picker
          label="Entity"
          .value=${this._config.entity||""}
          .hass=${this.hass}
          allow-custom-entity
          configValue="entity"
          @value-changed=${this._entityChanged}
          required
        ></ha-entity-picker>

        <div class="switch-row">
          <span class="switch-label"
            >${kt("google_button_card.dual_icon.default")}</span
          >
          <ha-switch
            .checked=${null===(e=this._config.use_default_icon)||void 0===e||e}
            configValue="use_default_icon"
            @change=${this._valueChanged}
          />
        </div>

        ${this._config.use_default_icon?B``:B`
              <div class="switch-row">
                <span class="switch-label"
                  >${kt("google_button_card.dual_icon.options")}</span
                >
                <ha-switch
                  .checked=${null!==(n=this._config.dual_icon)&&void 0!==n&&n}
                  configValue="dual_icon"
                  @change=${this._valueChanged}
                />
              </div>

              ${this._config.dual_icon?B`
                    <div class="dual-icons">
                      <ha-icon-picker
                        label="Icon ON"
                        .value=${this._config.icon_on||""}
                        configValue="icon_on"
                        @value-changed=${this._valueChanged}
                        placeholder="mdi:lightbulb-on"
                      ></ha-icon-picker>
                      <ha-icon-picker
                        label="Icon OFF"
                        .value=${this._config.icon_off||""}
                        configValue="icon_off"
                        @value-changed=${this._valueChanged}
                        placeholder="mdi:lightbulb-off"
                      ></ha-icon-picker>
                    </div>
                  `:B`
                    <ha-icon-picker
                      label="Icon"
                      .value=${this._config.icon||""}
                      configValue="icon"
                      @value-changed=${this._valueChanged}
                      placeholder="mdi:lightbulb"
                    />
                  `}
            `}

        <ha-textfield
          label="Attribute"
          .value=${this._config.attribute||""}
          configValue="attribute"
          @input=${this._valueChanged}
          placeholder="e.g. brightness"
        ></ha-textfield>

        <ha-textfield
          label="Height (px)"
          .value=${this._config.height||""}
          configValue="height"
          type="number"
          min="0"
          @input=${this._valueChanged}
        ></ha-textfield>
      </div>
    `):B``}};
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function Lt(t){return null==t}Pt.styles=c`
    .form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
    }

    .dual-icons {
      display: flex;
      gap: 16px;
    }

    .dual-icons ha-icon-input {
      flex: 1;
    }

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .switch-label {
      font-size: 16px;
      font-weight: 500;
    }
  `,i([ft({attribute:!1})],Pt.prototype,"hass",void 0),i([gt()],Pt.prototype,"_config",void 0),Pt=i([dt("google-button-card-editor")],Pt);var Nt={isNothing:Lt,isObject:function(t){return"object"==typeof t&&null!==t},toArray:function(t){return Array.isArray(t)?t:Lt(t)?[]:[t]},repeat:function(t,e){var n,i="";for(n=0;n<e;n+=1)i+=t;return i},isNegativeZero:function(t){return 0===t&&Number.NEGATIVE_INFINITY===1/t},extend:function(t,e){var n,i,o,r;if(e)for(n=0,i=(r=Object.keys(e)).length;n<i;n+=1)t[o=r[n]]=e[o];return t}};function Ut(t,e){var n="",i=t.reason||"(unknown reason)";return t.mark?(t.mark.name&&(n+='in "'+t.mark.name+'" '),n+="("+(t.mark.line+1)+":"+(t.mark.column+1)+")",!e&&t.mark.snippet&&(n+="\n\n"+t.mark.snippet),i+" "+n):i}function zt(t,e){Error.call(this),this.name="YAMLException",this.reason=t,this.mark=e,this.message=Ut(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack||""}zt.prototype=Object.create(Error.prototype),zt.prototype.constructor=zt,zt.prototype.toString=function(t){return this.name+": "+Ut(this,t)};var Rt=zt;function Dt(t,e,n,i,o){var r="",s="",a=Math.floor(o/2)-1;return i-e>a&&(e=i-a+(r=" ... ").length),n-i>a&&(n=i+a-(s=" ...").length),{str:r+t.slice(e,n).replace(/\t/g,"→")+s,pos:i-e+r.length}}function Ht(t,e){return Nt.repeat(" ",e-t.length)+t}var Vt=function(t,e){if(e=Object.create(e||null),!t.buffer)return null;e.maxLength||(e.maxLength=79),"number"!=typeof e.indent&&(e.indent=1),"number"!=typeof e.linesBefore&&(e.linesBefore=3),"number"!=typeof e.linesAfter&&(e.linesAfter=2);for(var n,i=/\r?\n|\r|\0/g,o=[0],r=[],s=-1;n=i.exec(t.buffer);)r.push(n.index),o.push(n.index+n[0].length),t.position<=n.index&&s<0&&(s=o.length-2);s<0&&(s=o.length-1);var a,l,c="",h=Math.min(t.line+e.linesAfter,r.length).toString().length,d=e.maxLength-(e.indent+h+3);for(a=1;a<=e.linesBefore&&!(s-a<0);a++)l=Dt(t.buffer,o[s-a],r[s-a],t.position-(o[s]-o[s-a]),d),c=Nt.repeat(" ",e.indent)+Ht((t.line-a+1).toString(),h)+" | "+l.str+"\n"+c;for(l=Dt(t.buffer,o[s],r[s],t.position,d),c+=Nt.repeat(" ",e.indent)+Ht((t.line+1).toString(),h)+" | "+l.str+"\n",c+=Nt.repeat("-",e.indent+h+3+l.pos)+"^\n",a=1;a<=e.linesAfter&&!(s+a>=r.length);a++)l=Dt(t.buffer,o[s+a],r[s+a],t.position-(o[s]-o[s+a]),d),c+=Nt.repeat(" ",e.indent)+Ht((t.line+a+1).toString(),h)+" | "+l.str+"\n";return c.replace(/\n$/,"")},Wt=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Bt=["scalar","sequence","mapping"];var Yt=function(t,e){if(e=e||{},Object.keys(e).forEach(function(e){if(-1===Wt.indexOf(e))throw new Rt('Unknown option "'+e+'" is met in definition of "'+t+'" YAML type.')}),this.options=e,this.tag=t,this.kind=e.kind||null,this.resolve=e.resolve||function(){return!0},this.construct=e.construct||function(t){return t},this.instanceOf=e.instanceOf||null,this.predicate=e.predicate||null,this.represent=e.represent||null,this.representName=e.representName||null,this.defaultStyle=e.defaultStyle||null,this.multi=e.multi||!1,this.styleAliases=function(t){var e={};return null!==t&&Object.keys(t).forEach(function(n){t[n].forEach(function(t){e[String(t)]=n})}),e}(e.styleAliases||null),-1===Bt.indexOf(this.kind))throw new Rt('Unknown kind "'+this.kind+'" is specified for "'+t+'" YAML type.')};function qt(t,e){var n=[];return t[e].forEach(function(t){var e=n.length;n.forEach(function(n,i){n.tag===t.tag&&n.kind===t.kind&&n.multi===t.multi&&(e=i)}),n[e]=t}),n}function Gt(t){return this.extend(t)}Gt.prototype.extend=function(t){var e=[],n=[];if(t instanceof Yt)n.push(t);else if(Array.isArray(t))n=n.concat(t);else{if(!t||!Array.isArray(t.implicit)&&!Array.isArray(t.explicit))throw new Rt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");t.implicit&&(e=e.concat(t.implicit)),t.explicit&&(n=n.concat(t.explicit))}e.forEach(function(t){if(!(t instanceof Yt))throw new Rt("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(t.loadKind&&"scalar"!==t.loadKind)throw new Rt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(t.multi)throw new Rt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),n.forEach(function(t){if(!(t instanceof Yt))throw new Rt("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var i=Object.create(Gt.prototype);return i.implicit=(this.implicit||[]).concat(e),i.explicit=(this.explicit||[]).concat(n),i.compiledImplicit=qt(i,"implicit"),i.compiledExplicit=qt(i,"explicit"),i.compiledTypeMap=function(){var t,e,n={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function i(t){t.multi?(n.multi[t.kind].push(t),n.multi.fallback.push(t)):n[t.kind][t.tag]=n.fallback[t.tag]=t}for(t=0,e=arguments.length;t<e;t+=1)arguments[t].forEach(i);return n}(i.compiledImplicit,i.compiledExplicit),i};var Xt=Gt,Kt=new Yt("tag:yaml.org,2002:str",{kind:"scalar",construct:function(t){return null!==t?t:""}}),Zt=new Yt("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(t){return null!==t?t:[]}}),Jt=new Yt("tag:yaml.org,2002:map",{kind:"mapping",construct:function(t){return null!==t?t:{}}}),Qt=new Xt({explicit:[Kt,Zt,Jt]});var te=new Yt("tag:yaml.org,2002:null",{kind:"scalar",resolve:function(t){if(null===t)return!0;var e=t.length;return 1===e&&"~"===t||4===e&&("null"===t||"Null"===t||"NULL"===t)},construct:function(){return null},predicate:function(t){return null===t},represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});var ee=new Yt("tag:yaml.org,2002:bool",{kind:"scalar",resolve:function(t){if(null===t)return!1;var e=t.length;return 4===e&&("true"===t||"True"===t||"TRUE"===t)||5===e&&("false"===t||"False"===t||"FALSE"===t)},construct:function(t){return"true"===t||"True"===t||"TRUE"===t},predicate:function(t){return"[object Boolean]"===Object.prototype.toString.call(t)},represent:{lowercase:function(t){return t?"true":"false"},uppercase:function(t){return t?"TRUE":"FALSE"},camelcase:function(t){return t?"True":"False"}},defaultStyle:"lowercase"});function ne(t){return 48<=t&&t<=57||65<=t&&t<=70||97<=t&&t<=102}function ie(t){return 48<=t&&t<=55}function oe(t){return 48<=t&&t<=57}var re=new Yt("tag:yaml.org,2002:int",{kind:"scalar",resolve:function(t){if(null===t)return!1;var e,n=t.length,i=0,o=!1;if(!n)return!1;if("-"!==(e=t[i])&&"+"!==e||(e=t[++i]),"0"===e){if(i+1===n)return!0;if("b"===(e=t[++i])){for(i++;i<n;i++)if("_"!==(e=t[i])){if("0"!==e&&"1"!==e)return!1;o=!0}return o&&"_"!==e}if("x"===e){for(i++;i<n;i++)if("_"!==(e=t[i])){if(!ne(t.charCodeAt(i)))return!1;o=!0}return o&&"_"!==e}if("o"===e){for(i++;i<n;i++)if("_"!==(e=t[i])){if(!ie(t.charCodeAt(i)))return!1;o=!0}return o&&"_"!==e}}if("_"===e)return!1;for(;i<n;i++)if("_"!==(e=t[i])){if(!oe(t.charCodeAt(i)))return!1;o=!0}return!(!o||"_"===e)},construct:function(t){var e,n=t,i=1;if(-1!==n.indexOf("_")&&(n=n.replace(/_/g,"")),"-"!==(e=n[0])&&"+"!==e||("-"===e&&(i=-1),e=(n=n.slice(1))[0]),"0"===n)return 0;if("0"===e){if("b"===n[1])return i*parseInt(n.slice(2),2);if("x"===n[1])return i*parseInt(n.slice(2),16);if("o"===n[1])return i*parseInt(n.slice(2),8)}return i*parseInt(n,10)},predicate:function(t){return"[object Number]"===Object.prototype.toString.call(t)&&t%1==0&&!Nt.isNegativeZero(t)},represent:{binary:function(t){return t>=0?"0b"+t.toString(2):"-0b"+t.toString(2).slice(1)},octal:function(t){return t>=0?"0o"+t.toString(8):"-0o"+t.toString(8).slice(1)},decimal:function(t){return t.toString(10)},hexadecimal:function(t){return t>=0?"0x"+t.toString(16).toUpperCase():"-0x"+t.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),se=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");var ae=/^[-+]?[0-9]+e/;var le=new Yt("tag:yaml.org,2002:float",{kind:"scalar",resolve:function(t){return null!==t&&!(!se.test(t)||"_"===t[t.length-1])},construct:function(t){var e,n;return n="-"===(e=t.replace(/_/g,"").toLowerCase())[0]?-1:1,"+-".indexOf(e[0])>=0&&(e=e.slice(1)),".inf"===e?1===n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:".nan"===e?NaN:n*parseFloat(e,10)},predicate:function(t){return"[object Number]"===Object.prototype.toString.call(t)&&(t%1!=0||Nt.isNegativeZero(t))},represent:function(t,e){var n;if(isNaN(t))switch(e){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===t)switch(e){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===t)switch(e){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Nt.isNegativeZero(t))return"-0.0";return n=t.toString(10),ae.test(n)?n.replace("e",".e"):n},defaultStyle:"lowercase"}),ce=Qt.extend({implicit:[te,ee,re,le]}),he=ce,de=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),ue=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");var pe=new Yt("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:function(t){return null!==t&&(null!==de.exec(t)||null!==ue.exec(t))},construct:function(t){var e,n,i,o,r,s,a,l,c=0,h=null;if(null===(e=de.exec(t))&&(e=ue.exec(t)),null===e)throw new Error("Date resolve error");if(n=+e[1],i=+e[2]-1,o=+e[3],!e[4])return new Date(Date.UTC(n,i,o));if(r=+e[4],s=+e[5],a=+e[6],e[7]){for(c=e[7].slice(0,3);c.length<3;)c+="0";c=+c}return e[9]&&(h=6e4*(60*+e[10]+ +(e[11]||0)),"-"===e[9]&&(h=-h)),l=new Date(Date.UTC(n,i,o,r,s,a,c)),h&&l.setTime(l.getTime()-h),l},instanceOf:Date,represent:function(t){return t.toISOString()}});var fe=new Yt("tag:yaml.org,2002:merge",{kind:"scalar",resolve:function(t){return"<<"===t||null===t}}),ge="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";var me=new Yt("tag:yaml.org,2002:binary",{kind:"scalar",resolve:function(t){if(null===t)return!1;var e,n,i=0,o=t.length,r=ge;for(n=0;n<o;n++)if(!((e=r.indexOf(t.charAt(n)))>64)){if(e<0)return!1;i+=6}return i%8==0},construct:function(t){var e,n,i=t.replace(/[\r\n=]/g,""),o=i.length,r=ge,s=0,a=[];for(e=0;e<o;e++)e%4==0&&e&&(a.push(s>>16&255),a.push(s>>8&255),a.push(255&s)),s=s<<6|r.indexOf(i.charAt(e));return 0===(n=o%4*6)?(a.push(s>>16&255),a.push(s>>8&255),a.push(255&s)):18===n?(a.push(s>>10&255),a.push(s>>2&255)):12===n&&a.push(s>>4&255),new Uint8Array(a)},predicate:function(t){return"[object Uint8Array]"===Object.prototype.toString.call(t)},represent:function(t){var e,n,i="",o=0,r=t.length,s=ge;for(e=0;e<r;e++)e%3==0&&e&&(i+=s[o>>18&63],i+=s[o>>12&63],i+=s[o>>6&63],i+=s[63&o]),o=(o<<8)+t[e];return 0===(n=r%3)?(i+=s[o>>18&63],i+=s[o>>12&63],i+=s[o>>6&63],i+=s[63&o]):2===n?(i+=s[o>>10&63],i+=s[o>>4&63],i+=s[o<<2&63],i+=s[64]):1===n&&(i+=s[o>>2&63],i+=s[o<<4&63],i+=s[64],i+=s[64]),i}}),be=Object.prototype.hasOwnProperty,_e=Object.prototype.toString;var ve=new Yt("tag:yaml.org,2002:omap",{kind:"sequence",resolve:function(t){if(null===t)return!0;var e,n,i,o,r,s=[],a=t;for(e=0,n=a.length;e<n;e+=1){if(i=a[e],r=!1,"[object Object]"!==_e.call(i))return!1;for(o in i)if(be.call(i,o)){if(r)return!1;r=!0}if(!r)return!1;if(-1!==s.indexOf(o))return!1;s.push(o)}return!0},construct:function(t){return null!==t?t:[]}}),ye=Object.prototype.toString;var we=new Yt("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:function(t){if(null===t)return!0;var e,n,i,o,r,s=t;for(r=new Array(s.length),e=0,n=s.length;e<n;e+=1){if(i=s[e],"[object Object]"!==ye.call(i))return!1;if(1!==(o=Object.keys(i)).length)return!1;r[e]=[o[0],i[o[0]]]}return!0},construct:function(t){if(null===t)return[];var e,n,i,o,r,s=t;for(r=new Array(s.length),e=0,n=s.length;e<n;e+=1)i=s[e],o=Object.keys(i),r[e]=[o[0],i[o[0]]];return r}}),xe=Object.prototype.hasOwnProperty;var Ae=new Yt("tag:yaml.org,2002:set",{kind:"mapping",resolve:function(t){if(null===t)return!0;var e,n=t;for(e in n)if(xe.call(n,e)&&null!==n[e])return!1;return!0},construct:function(t){return null!==t?t:{}}}),$e=he.extend({implicit:[pe,fe],explicit:[me,ve,we,Ae]}),ke=Object.prototype.hasOwnProperty,Ce=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Ee=/[\x85\u2028\u2029]/,Se=/[,\[\]\{\}]/,Oe=/^(?:!|!!|![a-z\-]+!)$/i,Te=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function je(t){return Object.prototype.toString.call(t)}function Me(t){return 10===t||13===t}function Ie(t){return 9===t||32===t}function Fe(t){return 9===t||32===t||10===t||13===t}function Pe(t){return 44===t||91===t||93===t||123===t||125===t}function Le(t){var e;return 48<=t&&t<=57?t-48:97<=(e=32|t)&&e<=102?e-97+10:-1}function Ne(t){return 120===t?2:117===t?4:85===t?8:0}function Ue(t){return 48<=t&&t<=57?t-48:-1}function ze(t){return 48===t?"\0":97===t?"":98===t?"\b":116===t||9===t?"\t":110===t?"\n":118===t?"\v":102===t?"\f":114===t?"\r":101===t?"":32===t?" ":34===t?'"':47===t?"/":92===t?"\\":78===t?"":95===t?" ":76===t?"\u2028":80===t?"\u2029":""}function Re(t){return t<=65535?String.fromCharCode(t):String.fromCharCode(55296+(t-65536>>10),56320+(t-65536&1023))}for(var De=new Array(256),He=new Array(256),Ve=0;Ve<256;Ve++)De[Ve]=ze(Ve)?1:0,He[Ve]=ze(Ve);function We(t,e){this.input=t,this.filename=e.filename||null,this.schema=e.schema||$e,this.onWarning=e.onWarning||null,this.legacy=e.legacy||!1,this.json=e.json||!1,this.listener=e.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=t.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function Be(t,e){var n={name:t.filename,buffer:t.input.slice(0,-1),position:t.position,line:t.line,column:t.position-t.lineStart};return n.snippet=Vt(n),new Rt(e,n)}function Ye(t,e){throw Be(t,e)}function qe(t,e){t.onWarning&&t.onWarning.call(null,Be(t,e))}var Ge={YAML:function(t,e,n){var i,o,r;null!==t.version&&Ye(t,"duplication of %YAML directive"),1!==n.length&&Ye(t,"YAML directive accepts exactly one argument"),null===(i=/^([0-9]+)\.([0-9]+)$/.exec(n[0]))&&Ye(t,"ill-formed argument of the YAML directive"),o=parseInt(i[1],10),r=parseInt(i[2],10),1!==o&&Ye(t,"unacceptable YAML version of the document"),t.version=n[0],t.checkLineBreaks=r<2,1!==r&&2!==r&&qe(t,"unsupported YAML version of the document")},TAG:function(t,e,n){var i,o;2!==n.length&&Ye(t,"TAG directive accepts exactly two arguments"),i=n[0],o=n[1],Oe.test(i)||Ye(t,"ill-formed tag handle (first argument) of the TAG directive"),ke.call(t.tagMap,i)&&Ye(t,'there is a previously declared suffix for "'+i+'" tag handle'),Te.test(o)||Ye(t,"ill-formed tag prefix (second argument) of the TAG directive");try{o=decodeURIComponent(o)}catch(e){Ye(t,"tag prefix is malformed: "+o)}t.tagMap[i]=o}};function Xe(t,e,n,i){var o,r,s,a;if(e<n){if(a=t.input.slice(e,n),i)for(o=0,r=a.length;o<r;o+=1)9===(s=a.charCodeAt(o))||32<=s&&s<=1114111||Ye(t,"expected valid JSON character");else Ce.test(a)&&Ye(t,"the stream contains non-printable characters");t.result+=a}}function Ke(t,e,n,i){var o,r,s,a;for(Nt.isObject(n)||Ye(t,"cannot merge mappings; the provided source object is unacceptable"),s=0,a=(o=Object.keys(n)).length;s<a;s+=1)r=o[s],ke.call(e,r)||(e[r]=n[r],i[r]=!0)}function Ze(t,e,n,i,o,r,s,a,l){var c,h;if(Array.isArray(o))for(c=0,h=(o=Array.prototype.slice.call(o)).length;c<h;c+=1)Array.isArray(o[c])&&Ye(t,"nested arrays are not supported inside keys"),"object"==typeof o&&"[object Object]"===je(o[c])&&(o[c]="[object Object]");if("object"==typeof o&&"[object Object]"===je(o)&&(o="[object Object]"),o=String(o),null===e&&(e={}),"tag:yaml.org,2002:merge"===i)if(Array.isArray(r))for(c=0,h=r.length;c<h;c+=1)Ke(t,e,r[c],n);else Ke(t,e,r,n);else t.json||ke.call(n,o)||!ke.call(e,o)||(t.line=s||t.line,t.lineStart=a||t.lineStart,t.position=l||t.position,Ye(t,"duplicated mapping key")),"__proto__"===o?Object.defineProperty(e,o,{configurable:!0,enumerable:!0,writable:!0,value:r}):e[o]=r,delete n[o];return e}function Je(t){var e;10===(e=t.input.charCodeAt(t.position))?t.position++:13===e?(t.position++,10===t.input.charCodeAt(t.position)&&t.position++):Ye(t,"a line break is expected"),t.line+=1,t.lineStart=t.position,t.firstTabInLine=-1}function Qe(t,e,n){for(var i=0,o=t.input.charCodeAt(t.position);0!==o;){for(;Ie(o);)9===o&&-1===t.firstTabInLine&&(t.firstTabInLine=t.position),o=t.input.charCodeAt(++t.position);if(e&&35===o)do{o=t.input.charCodeAt(++t.position)}while(10!==o&&13!==o&&0!==o);if(!Me(o))break;for(Je(t),o=t.input.charCodeAt(t.position),i++,t.lineIndent=0;32===o;)t.lineIndent++,o=t.input.charCodeAt(++t.position)}return-1!==n&&0!==i&&t.lineIndent<n&&qe(t,"deficient indentation"),i}function tn(t){var e,n=t.position;return!(45!==(e=t.input.charCodeAt(n))&&46!==e||e!==t.input.charCodeAt(n+1)||e!==t.input.charCodeAt(n+2)||(n+=3,0!==(e=t.input.charCodeAt(n))&&!Fe(e)))}function en(t,e){1===e?t.result+=" ":e>1&&(t.result+=Nt.repeat("\n",e-1))}function nn(t,e){var n,i,o=t.tag,r=t.anchor,s=[],a=!1;if(-1!==t.firstTabInLine)return!1;for(null!==t.anchor&&(t.anchorMap[t.anchor]=s),i=t.input.charCodeAt(t.position);0!==i&&(-1!==t.firstTabInLine&&(t.position=t.firstTabInLine,Ye(t,"tab characters must not be used in indentation")),45===i)&&Fe(t.input.charCodeAt(t.position+1));)if(a=!0,t.position++,Qe(t,!0,-1)&&t.lineIndent<=e)s.push(null),i=t.input.charCodeAt(t.position);else if(n=t.line,sn(t,e,3,!1,!0),s.push(t.result),Qe(t,!0,-1),i=t.input.charCodeAt(t.position),(t.line===n||t.lineIndent>e)&&0!==i)Ye(t,"bad indentation of a sequence entry");else if(t.lineIndent<e)break;return!!a&&(t.tag=o,t.anchor=r,t.kind="sequence",t.result=s,!0)}function on(t){var e,n,i,o,r=!1,s=!1;if(33!==(o=t.input.charCodeAt(t.position)))return!1;if(null!==t.tag&&Ye(t,"duplication of a tag property"),60===(o=t.input.charCodeAt(++t.position))?(r=!0,o=t.input.charCodeAt(++t.position)):33===o?(s=!0,n="!!",o=t.input.charCodeAt(++t.position)):n="!",e=t.position,r){do{o=t.input.charCodeAt(++t.position)}while(0!==o&&62!==o);t.position<t.length?(i=t.input.slice(e,t.position),o=t.input.charCodeAt(++t.position)):Ye(t,"unexpected end of the stream within a verbatim tag")}else{for(;0!==o&&!Fe(o);)33===o&&(s?Ye(t,"tag suffix cannot contain exclamation marks"):(n=t.input.slice(e-1,t.position+1),Oe.test(n)||Ye(t,"named tag handle cannot contain such characters"),s=!0,e=t.position+1)),o=t.input.charCodeAt(++t.position);i=t.input.slice(e,t.position),Se.test(i)&&Ye(t,"tag suffix cannot contain flow indicator characters")}i&&!Te.test(i)&&Ye(t,"tag name cannot contain such characters: "+i);try{i=decodeURIComponent(i)}catch(e){Ye(t,"tag name is malformed: "+i)}return r?t.tag=i:ke.call(t.tagMap,n)?t.tag=t.tagMap[n]+i:"!"===n?t.tag="!"+i:"!!"===n?t.tag="tag:yaml.org,2002:"+i:Ye(t,'undeclared tag handle "'+n+'"'),!0}function rn(t){var e,n;if(38!==(n=t.input.charCodeAt(t.position)))return!1;for(null!==t.anchor&&Ye(t,"duplication of an anchor property"),n=t.input.charCodeAt(++t.position),e=t.position;0!==n&&!Fe(n)&&!Pe(n);)n=t.input.charCodeAt(++t.position);return t.position===e&&Ye(t,"name of an anchor node must contain at least one character"),t.anchor=t.input.slice(e,t.position),!0}function sn(t,e,n,i,o){var r,s,a,l,c,h,d,u,p,f=1,g=!1,m=!1;if(null!==t.listener&&t.listener("open",t),t.tag=null,t.anchor=null,t.kind=null,t.result=null,r=s=a=4===n||3===n,i&&Qe(t,!0,-1)&&(g=!0,t.lineIndent>e?f=1:t.lineIndent===e?f=0:t.lineIndent<e&&(f=-1)),1===f)for(;on(t)||rn(t);)Qe(t,!0,-1)?(g=!0,a=r,t.lineIndent>e?f=1:t.lineIndent===e?f=0:t.lineIndent<e&&(f=-1)):a=!1;if(a&&(a=g||o),1!==f&&4!==n||(u=1===n||2===n?e:e+1,p=t.position-t.lineStart,1===f?a&&(nn(t,p)||function(t,e,n){var i,o,r,s,a,l,c,h=t.tag,d=t.anchor,u={},p=Object.create(null),f=null,g=null,m=null,b=!1,_=!1;if(-1!==t.firstTabInLine)return!1;for(null!==t.anchor&&(t.anchorMap[t.anchor]=u),c=t.input.charCodeAt(t.position);0!==c;){if(b||-1===t.firstTabInLine||(t.position=t.firstTabInLine,Ye(t,"tab characters must not be used in indentation")),i=t.input.charCodeAt(t.position+1),r=t.line,63!==c&&58!==c||!Fe(i)){if(s=t.line,a=t.lineStart,l=t.position,!sn(t,n,2,!1,!0))break;if(t.line===r){for(c=t.input.charCodeAt(t.position);Ie(c);)c=t.input.charCodeAt(++t.position);if(58===c)Fe(c=t.input.charCodeAt(++t.position))||Ye(t,"a whitespace character is expected after the key-value separator within a block mapping"),b&&(Ze(t,u,p,f,g,null,s,a,l),f=g=m=null),_=!0,b=!1,o=!1,f=t.tag,g=t.result;else{if(!_)return t.tag=h,t.anchor=d,!0;Ye(t,"can not read an implicit mapping pair; a colon is missed")}}else{if(!_)return t.tag=h,t.anchor=d,!0;Ye(t,"can not read a block mapping entry; a multiline key may not be an implicit key")}}else 63===c?(b&&(Ze(t,u,p,f,g,null,s,a,l),f=g=m=null),_=!0,b=!0,o=!0):b?(b=!1,o=!0):Ye(t,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),t.position+=1,c=i;if((t.line===r||t.lineIndent>e)&&(b&&(s=t.line,a=t.lineStart,l=t.position),sn(t,e,4,!0,o)&&(b?g=t.result:m=t.result),b||(Ze(t,u,p,f,g,m,s,a,l),f=g=m=null),Qe(t,!0,-1),c=t.input.charCodeAt(t.position)),(t.line===r||t.lineIndent>e)&&0!==c)Ye(t,"bad indentation of a mapping entry");else if(t.lineIndent<e)break}return b&&Ze(t,u,p,f,g,null,s,a,l),_&&(t.tag=h,t.anchor=d,t.kind="mapping",t.result=u),_}(t,p,u))||function(t,e){var n,i,o,r,s,a,l,c,h,d,u,p,f=!0,g=t.tag,m=t.anchor,b=Object.create(null);if(91===(p=t.input.charCodeAt(t.position)))s=93,c=!1,r=[];else{if(123!==p)return!1;s=125,c=!0,r={}}for(null!==t.anchor&&(t.anchorMap[t.anchor]=r),p=t.input.charCodeAt(++t.position);0!==p;){if(Qe(t,!0,e),(p=t.input.charCodeAt(t.position))===s)return t.position++,t.tag=g,t.anchor=m,t.kind=c?"mapping":"sequence",t.result=r,!0;f?44===p&&Ye(t,"expected the node content, but found ','"):Ye(t,"missed comma between flow collection entries"),u=null,a=l=!1,63===p&&Fe(t.input.charCodeAt(t.position+1))&&(a=l=!0,t.position++,Qe(t,!0,e)),n=t.line,i=t.lineStart,o=t.position,sn(t,e,1,!1,!0),d=t.tag,h=t.result,Qe(t,!0,e),p=t.input.charCodeAt(t.position),!l&&t.line!==n||58!==p||(a=!0,p=t.input.charCodeAt(++t.position),Qe(t,!0,e),sn(t,e,1,!1,!0),u=t.result),c?Ze(t,r,b,d,h,u,n,i,o):a?r.push(Ze(t,null,b,d,h,u,n,i,o)):r.push(h),Qe(t,!0,e),44===(p=t.input.charCodeAt(t.position))?(f=!0,p=t.input.charCodeAt(++t.position)):f=!1}Ye(t,"unexpected end of the stream within a flow collection")}(t,u)?m=!0:(s&&function(t,e){var n,i,o,r,s=1,a=!1,l=!1,c=e,h=0,d=!1;if(124===(r=t.input.charCodeAt(t.position)))i=!1;else{if(62!==r)return!1;i=!0}for(t.kind="scalar",t.result="";0!==r;)if(43===(r=t.input.charCodeAt(++t.position))||45===r)1===s?s=43===r?3:2:Ye(t,"repeat of a chomping mode identifier");else{if(!((o=Ue(r))>=0))break;0===o?Ye(t,"bad explicit indentation width of a block scalar; it cannot be less than one"):l?Ye(t,"repeat of an indentation width identifier"):(c=e+o-1,l=!0)}if(Ie(r)){do{r=t.input.charCodeAt(++t.position)}while(Ie(r));if(35===r)do{r=t.input.charCodeAt(++t.position)}while(!Me(r)&&0!==r)}for(;0!==r;){for(Je(t),t.lineIndent=0,r=t.input.charCodeAt(t.position);(!l||t.lineIndent<c)&&32===r;)t.lineIndent++,r=t.input.charCodeAt(++t.position);if(!l&&t.lineIndent>c&&(c=t.lineIndent),Me(r))h++;else{if(t.lineIndent<c){3===s?t.result+=Nt.repeat("\n",a?1+h:h):1===s&&a&&(t.result+="\n");break}for(i?Ie(r)?(d=!0,t.result+=Nt.repeat("\n",a?1+h:h)):d?(d=!1,t.result+=Nt.repeat("\n",h+1)):0===h?a&&(t.result+=" "):t.result+=Nt.repeat("\n",h):t.result+=Nt.repeat("\n",a?1+h:h),a=!0,l=!0,h=0,n=t.position;!Me(r)&&0!==r;)r=t.input.charCodeAt(++t.position);Xe(t,n,t.position,!1)}}return!0}(t,u)||function(t,e){var n,i,o;if(39!==(n=t.input.charCodeAt(t.position)))return!1;for(t.kind="scalar",t.result="",t.position++,i=o=t.position;0!==(n=t.input.charCodeAt(t.position));)if(39===n){if(Xe(t,i,t.position,!0),39!==(n=t.input.charCodeAt(++t.position)))return!0;i=t.position,t.position++,o=t.position}else Me(n)?(Xe(t,i,o,!0),en(t,Qe(t,!1,e)),i=o=t.position):t.position===t.lineStart&&tn(t)?Ye(t,"unexpected end of the document within a single quoted scalar"):(t.position++,o=t.position);Ye(t,"unexpected end of the stream within a single quoted scalar")}(t,u)||function(t,e){var n,i,o,r,s,a;if(34!==(a=t.input.charCodeAt(t.position)))return!1;for(t.kind="scalar",t.result="",t.position++,n=i=t.position;0!==(a=t.input.charCodeAt(t.position));){if(34===a)return Xe(t,n,t.position,!0),t.position++,!0;if(92===a){if(Xe(t,n,t.position,!0),Me(a=t.input.charCodeAt(++t.position)))Qe(t,!1,e);else if(a<256&&De[a])t.result+=He[a],t.position++;else if((s=Ne(a))>0){for(o=s,r=0;o>0;o--)(s=Le(a=t.input.charCodeAt(++t.position)))>=0?r=(r<<4)+s:Ye(t,"expected hexadecimal character");t.result+=Re(r),t.position++}else Ye(t,"unknown escape sequence");n=i=t.position}else Me(a)?(Xe(t,n,i,!0),en(t,Qe(t,!1,e)),n=i=t.position):t.position===t.lineStart&&tn(t)?Ye(t,"unexpected end of the document within a double quoted scalar"):(t.position++,i=t.position)}Ye(t,"unexpected end of the stream within a double quoted scalar")}(t,u)?m=!0:!function(t){var e,n,i;if(42!==(i=t.input.charCodeAt(t.position)))return!1;for(i=t.input.charCodeAt(++t.position),e=t.position;0!==i&&!Fe(i)&&!Pe(i);)i=t.input.charCodeAt(++t.position);return t.position===e&&Ye(t,"name of an alias node must contain at least one character"),n=t.input.slice(e,t.position),ke.call(t.anchorMap,n)||Ye(t,'unidentified alias "'+n+'"'),t.result=t.anchorMap[n],Qe(t,!0,-1),!0}(t)?function(t,e,n){var i,o,r,s,a,l,c,h,d=t.kind,u=t.result;if(Fe(h=t.input.charCodeAt(t.position))||Pe(h)||35===h||38===h||42===h||33===h||124===h||62===h||39===h||34===h||37===h||64===h||96===h)return!1;if((63===h||45===h)&&(Fe(i=t.input.charCodeAt(t.position+1))||n&&Pe(i)))return!1;for(t.kind="scalar",t.result="",o=r=t.position,s=!1;0!==h;){if(58===h){if(Fe(i=t.input.charCodeAt(t.position+1))||n&&Pe(i))break}else if(35===h){if(Fe(t.input.charCodeAt(t.position-1)))break}else{if(t.position===t.lineStart&&tn(t)||n&&Pe(h))break;if(Me(h)){if(a=t.line,l=t.lineStart,c=t.lineIndent,Qe(t,!1,-1),t.lineIndent>=e){s=!0,h=t.input.charCodeAt(t.position);continue}t.position=r,t.line=a,t.lineStart=l,t.lineIndent=c;break}}s&&(Xe(t,o,r,!1),en(t,t.line-a),o=r=t.position,s=!1),Ie(h)||(r=t.position+1),h=t.input.charCodeAt(++t.position)}return Xe(t,o,r,!1),!!t.result||(t.kind=d,t.result=u,!1)}(t,u,1===n)&&(m=!0,null===t.tag&&(t.tag="?")):(m=!0,null===t.tag&&null===t.anchor||Ye(t,"alias node should not have any properties")),null!==t.anchor&&(t.anchorMap[t.anchor]=t.result)):0===f&&(m=a&&nn(t,p))),null===t.tag)null!==t.anchor&&(t.anchorMap[t.anchor]=t.result);else if("?"===t.tag){for(null!==t.result&&"scalar"!==t.kind&&Ye(t,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+t.kind+'"'),l=0,c=t.implicitTypes.length;l<c;l+=1)if((d=t.implicitTypes[l]).resolve(t.result)){t.result=d.construct(t.result),t.tag=d.tag,null!==t.anchor&&(t.anchorMap[t.anchor]=t.result);break}}else if("!"!==t.tag){if(ke.call(t.typeMap[t.kind||"fallback"],t.tag))d=t.typeMap[t.kind||"fallback"][t.tag];else for(d=null,l=0,c=(h=t.typeMap.multi[t.kind||"fallback"]).length;l<c;l+=1)if(t.tag.slice(0,h[l].tag.length)===h[l].tag){d=h[l];break}d||Ye(t,"unknown tag !<"+t.tag+">"),null!==t.result&&d.kind!==t.kind&&Ye(t,"unacceptable node kind for !<"+t.tag+'> tag; it should be "'+d.kind+'", not "'+t.kind+'"'),d.resolve(t.result,t.tag)?(t.result=d.construct(t.result,t.tag),null!==t.anchor&&(t.anchorMap[t.anchor]=t.result)):Ye(t,"cannot resolve a node with !<"+t.tag+"> explicit tag")}return null!==t.listener&&t.listener("close",t),null!==t.tag||null!==t.anchor||m}function an(t){var e,n,i,o,r=t.position,s=!1;for(t.version=null,t.checkLineBreaks=t.legacy,t.tagMap=Object.create(null),t.anchorMap=Object.create(null);0!==(o=t.input.charCodeAt(t.position))&&(Qe(t,!0,-1),o=t.input.charCodeAt(t.position),!(t.lineIndent>0||37!==o));){for(s=!0,o=t.input.charCodeAt(++t.position),e=t.position;0!==o&&!Fe(o);)o=t.input.charCodeAt(++t.position);for(i=[],(n=t.input.slice(e,t.position)).length<1&&Ye(t,"directive name must not be less than one character in length");0!==o;){for(;Ie(o);)o=t.input.charCodeAt(++t.position);if(35===o){do{o=t.input.charCodeAt(++t.position)}while(0!==o&&!Me(o));break}if(Me(o))break;for(e=t.position;0!==o&&!Fe(o);)o=t.input.charCodeAt(++t.position);i.push(t.input.slice(e,t.position))}0!==o&&Je(t),ke.call(Ge,n)?Ge[n](t,n,i):qe(t,'unknown document directive "'+n+'"')}Qe(t,!0,-1),0===t.lineIndent&&45===t.input.charCodeAt(t.position)&&45===t.input.charCodeAt(t.position+1)&&45===t.input.charCodeAt(t.position+2)?(t.position+=3,Qe(t,!0,-1)):s&&Ye(t,"directives end mark is expected"),sn(t,t.lineIndent-1,4,!1,!0),Qe(t,!0,-1),t.checkLineBreaks&&Ee.test(t.input.slice(r,t.position))&&qe(t,"non-ASCII line breaks are interpreted as content"),t.documents.push(t.result),t.position===t.lineStart&&tn(t)?46===t.input.charCodeAt(t.position)&&(t.position+=3,Qe(t,!0,-1)):t.position<t.length-1&&Ye(t,"end of the stream or a document separator is expected")}function ln(t,e){e=e||{},0!==(t=String(t)).length&&(10!==t.charCodeAt(t.length-1)&&13!==t.charCodeAt(t.length-1)&&(t+="\n"),65279===t.charCodeAt(0)&&(t=t.slice(1)));var n=new We(t,e),i=t.indexOf("\0");for(-1!==i&&(n.position=i,Ye(n,"null byte is not allowed in input")),n.input+="\0";32===n.input.charCodeAt(n.position);)n.lineIndent+=1,n.position+=1;for(;n.position<n.length-1;)an(n);return n.documents}var cn={loadAll:function(t,e,n){null!==e&&"object"==typeof e&&void 0===n&&(n=e,e=null);var i=ln(t,n);if("function"!=typeof e)return i;for(var o=0,r=i.length;o<r;o+=1)e(i[o])},load:function(t,e){var n=ln(t,e);if(0!==n.length){if(1===n.length)return n[0];throw new Rt("expected a single document in the stream, but found more")}}},hn=Object.prototype.toString,dn=Object.prototype.hasOwnProperty,un=65279,pn={0:"\\0",7:"\\a",8:"\\b",9:"\\t",10:"\\n",11:"\\v",12:"\\f",13:"\\r",27:"\\e",34:'\\"',92:"\\\\",133:"\\N",160:"\\_",8232:"\\L",8233:"\\P"},fn=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],gn=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function mn(t){var e,n,i;if(e=t.toString(16).toUpperCase(),t<=255)n="x",i=2;else if(t<=65535)n="u",i=4;else{if(!(t<=4294967295))throw new Rt("code point within a string may not be greater than 0xFFFFFFFF");n="U",i=8}return"\\"+n+Nt.repeat("0",i-e.length)+e}function bn(t){this.schema=t.schema||$e,this.indent=Math.max(1,t.indent||2),this.noArrayIndent=t.noArrayIndent||!1,this.skipInvalid=t.skipInvalid||!1,this.flowLevel=Nt.isNothing(t.flowLevel)?-1:t.flowLevel,this.styleMap=function(t,e){var n,i,o,r,s,a,l;if(null===e)return{};for(n={},o=0,r=(i=Object.keys(e)).length;o<r;o+=1)s=i[o],a=String(e[s]),"!!"===s.slice(0,2)&&(s="tag:yaml.org,2002:"+s.slice(2)),(l=t.compiledTypeMap.fallback[s])&&dn.call(l.styleAliases,a)&&(a=l.styleAliases[a]),n[s]=a;return n}(this.schema,t.styles||null),this.sortKeys=t.sortKeys||!1,this.lineWidth=t.lineWidth||80,this.noRefs=t.noRefs||!1,this.noCompatMode=t.noCompatMode||!1,this.condenseFlow=t.condenseFlow||!1,this.quotingType='"'===t.quotingType?2:1,this.forceQuotes=t.forceQuotes||!1,this.replacer="function"==typeof t.replacer?t.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function _n(t,e){for(var n,i=Nt.repeat(" ",e),o=0,r=-1,s="",a=t.length;o<a;)-1===(r=t.indexOf("\n",o))?(n=t.slice(o),o=a):(n=t.slice(o,r+1),o=r+1),n.length&&"\n"!==n&&(s+=i),s+=n;return s}function vn(t,e){return"\n"+Nt.repeat(" ",t.indent*e)}function yn(t){return 32===t||9===t}function wn(t){return 32<=t&&t<=126||161<=t&&t<=55295&&8232!==t&&8233!==t||57344<=t&&t<=65533&&t!==un||65536<=t&&t<=1114111}function xn(t){return wn(t)&&t!==un&&13!==t&&10!==t}function An(t,e,n){var i=xn(t),o=i&&!yn(t);return(n?i:i&&44!==t&&91!==t&&93!==t&&123!==t&&125!==t)&&35!==t&&!(58===e&&!o)||xn(e)&&!yn(e)&&35===t||58===e&&o}function $n(t,e){var n,i=t.charCodeAt(e);return i>=55296&&i<=56319&&e+1<t.length&&(n=t.charCodeAt(e+1))>=56320&&n<=57343?1024*(i-55296)+n-56320+65536:i}function kn(t){return/^\n* /.test(t)}function Cn(t,e,n,i,o,r,s,a){var l,c=0,h=null,d=!1,u=!1,p=-1!==i,f=-1,g=function(t){return wn(t)&&t!==un&&!yn(t)&&45!==t&&63!==t&&58!==t&&44!==t&&91!==t&&93!==t&&123!==t&&125!==t&&35!==t&&38!==t&&42!==t&&33!==t&&124!==t&&61!==t&&62!==t&&39!==t&&34!==t&&37!==t&&64!==t&&96!==t}($n(t,0))&&function(t){return!yn(t)&&58!==t}($n(t,t.length-1));if(e||s)for(l=0;l<t.length;c>=65536?l+=2:l++){if(!wn(c=$n(t,l)))return 5;g=g&&An(c,h,a),h=c}else{for(l=0;l<t.length;c>=65536?l+=2:l++){if(10===(c=$n(t,l)))d=!0,p&&(u=u||l-f-1>i&&" "!==t[f+1],f=l);else if(!wn(c))return 5;g=g&&An(c,h,a),h=c}u=u||p&&l-f-1>i&&" "!==t[f+1]}return d||u?n>9&&kn(t)?5:s?2===r?5:2:u?4:3:!g||s||o(t)?2===r?5:2:1}function En(t,e,n,i,o){t.dump=function(){if(0===e.length)return 2===t.quotingType?'""':"''";if(!t.noCompatMode&&(-1!==fn.indexOf(e)||gn.test(e)))return 2===t.quotingType?'"'+e+'"':"'"+e+"'";var r=t.indent*Math.max(1,n),s=-1===t.lineWidth?-1:Math.max(Math.min(t.lineWidth,40),t.lineWidth-r),a=i||t.flowLevel>-1&&n>=t.flowLevel;switch(Cn(e,a,t.indent,s,function(e){return function(t,e){var n,i;for(n=0,i=t.implicitTypes.length;n<i;n+=1)if(t.implicitTypes[n].resolve(e))return!0;return!1}(t,e)},t.quotingType,t.forceQuotes&&!i,o)){case 1:return e;case 2:return"'"+e.replace(/'/g,"''")+"'";case 3:return"|"+Sn(e,t.indent)+On(_n(e,r));case 4:return">"+Sn(e,t.indent)+On(_n(function(t,e){var n,i,o=/(\n+)([^\n]*)/g,r=(a=t.indexOf("\n"),a=-1!==a?a:t.length,o.lastIndex=a,Tn(t.slice(0,a),e)),s="\n"===t[0]||" "===t[0];var a;for(;i=o.exec(t);){var l=i[1],c=i[2];n=" "===c[0],r+=l+(s||n||""===c?"":"\n")+Tn(c,e),s=n}return r}(e,s),r));case 5:return'"'+function(t){for(var e,n="",i=0,o=0;o<t.length;i>=65536?o+=2:o++)i=$n(t,o),!(e=pn[i])&&wn(i)?(n+=t[o],i>=65536&&(n+=t[o+1])):n+=e||mn(i);return n}(e)+'"';default:throw new Rt("impossible error: invalid scalar style")}}()}function Sn(t,e){var n=kn(t)?String(e):"",i="\n"===t[t.length-1];return n+(i&&("\n"===t[t.length-2]||"\n"===t)?"+":i?"":"-")+"\n"}function On(t){return"\n"===t[t.length-1]?t.slice(0,-1):t}function Tn(t,e){if(""===t||" "===t[0])return t;for(var n,i,o=/ [^ ]/g,r=0,s=0,a=0,l="";n=o.exec(t);)(a=n.index)-r>e&&(i=s>r?s:a,l+="\n"+t.slice(r,i),r=i+1),s=a;return l+="\n",t.length-r>e&&s>r?l+=t.slice(r,s)+"\n"+t.slice(s+1):l+=t.slice(r),l.slice(1)}function jn(t,e,n,i){var o,r,s,a="",l=t.tag;for(o=0,r=n.length;o<r;o+=1)s=n[o],t.replacer&&(s=t.replacer.call(n,String(o),s)),(In(t,e+1,s,!0,!0,!1,!0)||void 0===s&&In(t,e+1,null,!0,!0,!1,!0))&&(i&&""===a||(a+=vn(t,e)),t.dump&&10===t.dump.charCodeAt(0)?a+="-":a+="- ",a+=t.dump);t.tag=l,t.dump=a||"[]"}function Mn(t,e,n){var i,o,r,s,a,l;for(r=0,s=(o=n?t.explicitTypes:t.implicitTypes).length;r<s;r+=1)if(((a=o[r]).instanceOf||a.predicate)&&(!a.instanceOf||"object"==typeof e&&e instanceof a.instanceOf)&&(!a.predicate||a.predicate(e))){if(n?a.multi&&a.representName?t.tag=a.representName(e):t.tag=a.tag:t.tag="?",a.represent){if(l=t.styleMap[a.tag]||a.defaultStyle,"[object Function]"===hn.call(a.represent))i=a.represent(e,l);else{if(!dn.call(a.represent,l))throw new Rt("!<"+a.tag+'> tag resolver accepts not "'+l+'" style');i=a.represent[l](e,l)}t.dump=i}return!0}return!1}function In(t,e,n,i,o,r,s){t.tag=null,t.dump=n,Mn(t,n,!1)||Mn(t,n,!0);var a,l=hn.call(t.dump),c=i;i&&(i=t.flowLevel<0||t.flowLevel>e);var h,d,u="[object Object]"===l||"[object Array]"===l;if(u&&(d=-1!==(h=t.duplicates.indexOf(n))),(null!==t.tag&&"?"!==t.tag||d||2!==t.indent&&e>0)&&(o=!1),d&&t.usedDuplicates[h])t.dump="*ref_"+h;else{if(u&&d&&!t.usedDuplicates[h]&&(t.usedDuplicates[h]=!0),"[object Object]"===l)i&&0!==Object.keys(t.dump).length?(!function(t,e,n,i){var o,r,s,a,l,c,h="",d=t.tag,u=Object.keys(n);if(!0===t.sortKeys)u.sort();else if("function"==typeof t.sortKeys)u.sort(t.sortKeys);else if(t.sortKeys)throw new Rt("sortKeys must be a boolean or a function");for(o=0,r=u.length;o<r;o+=1)c="",i&&""===h||(c+=vn(t,e)),a=n[s=u[o]],t.replacer&&(a=t.replacer.call(n,s,a)),In(t,e+1,s,!0,!0,!0)&&((l=null!==t.tag&&"?"!==t.tag||t.dump&&t.dump.length>1024)&&(t.dump&&10===t.dump.charCodeAt(0)?c+="?":c+="? "),c+=t.dump,l&&(c+=vn(t,e)),In(t,e+1,a,!0,l)&&(t.dump&&10===t.dump.charCodeAt(0)?c+=":":c+=": ",h+=c+=t.dump));t.tag=d,t.dump=h||"{}"}(t,e,t.dump,o),d&&(t.dump="&ref_"+h+t.dump)):(!function(t,e,n){var i,o,r,s,a,l="",c=t.tag,h=Object.keys(n);for(i=0,o=h.length;i<o;i+=1)a="",""!==l&&(a+=", "),t.condenseFlow&&(a+='"'),s=n[r=h[i]],t.replacer&&(s=t.replacer.call(n,r,s)),In(t,e,r,!1,!1)&&(t.dump.length>1024&&(a+="? "),a+=t.dump+(t.condenseFlow?'"':"")+":"+(t.condenseFlow?"":" "),In(t,e,s,!1,!1)&&(l+=a+=t.dump));t.tag=c,t.dump="{"+l+"}"}(t,e,t.dump),d&&(t.dump="&ref_"+h+" "+t.dump));else if("[object Array]"===l)i&&0!==t.dump.length?(t.noArrayIndent&&!s&&e>0?jn(t,e-1,t.dump,o):jn(t,e,t.dump,o),d&&(t.dump="&ref_"+h+t.dump)):(!function(t,e,n){var i,o,r,s="",a=t.tag;for(i=0,o=n.length;i<o;i+=1)r=n[i],t.replacer&&(r=t.replacer.call(n,String(i),r)),(In(t,e,r,!1,!1)||void 0===r&&In(t,e,null,!1,!1))&&(""!==s&&(s+=","+(t.condenseFlow?"":" ")),s+=t.dump);t.tag=a,t.dump="["+s+"]"}(t,e,t.dump),d&&(t.dump="&ref_"+h+" "+t.dump));else{if("[object String]"!==l){if("[object Undefined]"===l)return!1;if(t.skipInvalid)return!1;throw new Rt("unacceptable kind of an object to dump "+l)}"?"!==t.tag&&En(t,t.dump,e,r,c)}null!==t.tag&&"?"!==t.tag&&(a=encodeURI("!"===t.tag[0]?t.tag.slice(1):t.tag).replace(/!/g,"%21"),a="!"===t.tag[0]?"!"+a:"tag:yaml.org,2002:"===a.slice(0,18)?"!!"+a.slice(18):"!<"+a+">",t.dump=a+" "+t.dump)}return!0}function Fn(t,e){var n,i,o=[],r=[];for(Pn(t,o,r),n=0,i=r.length;n<i;n+=1)e.duplicates.push(o[r[n]]);e.usedDuplicates=new Array(i)}function Pn(t,e,n){var i,o,r;if(null!==t&&"object"==typeof t)if(-1!==(o=e.indexOf(t)))-1===n.indexOf(o)&&n.push(o);else if(e.push(t),Array.isArray(t))for(o=0,r=t.length;o<r;o+=1)Pn(t[o],e,n);else for(o=0,r=(i=Object.keys(t)).length;o<r;o+=1)Pn(t[i[o]],e,n)}function Ln(t,e){return function(){throw new Error("Function yaml."+t+" is removed in js-yaml 4. Use yaml."+e+" instead, which is now safe by default.")}}var Nn={Type:Yt,Schema:Xt,FAILSAFE_SCHEMA:Qt,JSON_SCHEMA:ce,CORE_SCHEMA:he,DEFAULT_SCHEMA:$e,load:cn.load,loadAll:cn.loadAll,dump:{dump:function(t,e){var n=new bn(e=e||{});n.noRefs||Fn(t,n);var i=t;return n.replacer&&(i=n.replacer.call({"":i},"",i)),In(n,0,i,!0,!0)?n.dump+"\n":""}}.dump,YAMLException:Rt,types:{binary:me,float:le,map:Jt,null:te,pairs:we,set:Ae,timestamp:pe,bool:ee,int:re,merge:fe,omap:ve,seq:Zt,str:Kt},safeLoad:Ln("safeLoad","load"),safeLoadAll:Ln("safeLoadAll","loadAll"),safeDump:Ln("safeDump","dump")};const Un={type:"custom:google-dashboard-card"};let zn=class extends ct{static getStubConfig(){return{type:"custom:google-dashboard-card"}}async setConfig(t){if(!t)throw new Error("Invalid configuration");this._config=t}async updated(t){if(t.has("hass"))if(this._card)this._card.hass=this.hass;else if(this._config){const t=this.mapTemplate(this._config),e=Nn.load(t),n=await window.loadCardHelpers(),i=await n.createCardElement(e);i.classList.add("ripple-card"),i.hass=this.hass,this._card=i,this.requestUpdate()}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("google-dashboard-card-editor")}mapTemplate(t){var e,n,i,o;return e=t.cameras,n=t.lighting,i=t.wifi,o=t.climate,`type: custom:swipe-card\ncard_width: max-content\nparameters:\n  grabCursor: true\n  centeredSlides: false\n  slidesPerView: auto\n  spaceBetween: 8\ncards:\n  - type: custom:button-card\n    icon: m3r:videocam\n    name: ${kt("google_dashboard_card.cameras_name")}\n    triggers_update: all\n    label: |\n      [[[\n          const devices = Object.keys(hass.states).filter((e) =>\n          e.startsWith("camera.")\n        ).length;\n        return devices > 1 ? devices + " " + "${kt("google_dashboard_card.devices")}" : devices + " " + "${kt("google_dashboard_card.device")}";\n      ]]]\n    show_name: true\n    show_label: true\n    show_icon: true\n    tap_action:\n      action: ${e?"navigate":"none"}\n      navigation_path: ${e}\n      haptic: medium\n    styles:\n      grid:\n        - grid-template-columns: 2fr 1fr 1fr\n        - grid-template-rows: 2fr 0.1fr 1fr 1fr\n        - grid-template-areas: |\n            "i . ."\n            ". . ."\n            "n n n"\n            "l l l"\n      card:\n        - display: |\n            [[[\n              const lights = Object.keys(hass.states).filter(e => e.startsWith("camera.") && hass.states[e].state !== "unavailable");\n              return lights.length === 0 ? "none" : "block";\n            ]]]\n        - margin-bottom: 1px\n        - height: 130px\n        - width: 130px\n        - border-radius: 30px\n        - background: |\n            [[[\n              return hass.themes.darkMode ? '#1F1F1F' : '#F8F9FA';\n            ]]]\n      name:\n        - font-size: 1rem\n        - font-weight: bold\n        - justify-self: start\n        - align-self: end\n        - margin: 0px 20px 0px 20px\n        - max-width: -webkit-fill-available;\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#E8EAED' : '#202124';\n            ]]]\n      label:\n        - font-size: 0.85rem\n        - justify-self: start\n        - align-self: start\n        - margin: 2px 0px 0px 20px\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';\n            ]]]\n      icon:\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#8AB4F8' : '#1A73E8';\n            ]]]\n    state:\n      - value: "on"\n        styles:\n          card:\n            - background: |\n                [[[\n                  return hass.themes.darkMode ? '#302f32' : '#E8F0FE';\n                ]]]\n          icon:\n            - color: |\n                [[[\n                  return hass.themes.darkMode ? '#fee183' : '#1A73E8';\n                ]]]\n  - type: custom:button-card\n    icon: m3r:light-group\n    name: ${kt("google_dashboard_card.lighting_name")}\n    triggers_update: all\n    label: |\n      [[[\n        // Conta automaticamente le luci accese\n        const lightEntities = Object.keys(hass.states).filter(\n        (entity) =>\n          entity.startsWith("light.") &&\n          hass.states[entity].state !== "unavailable"\n        );\n        const lightsOn = lightEntities.filter(\n          (entity) => hass.states[entity].state === "on"\n        ).length;\n        const totalLights = lightEntities.length;\n        return lightsOn + "/" + totalLights + " ${kt("google_dashboard_card.lighting_label")}";\n      ]]]\n    show_name: true\n    show_label: true\n    show_icon: true\n    tap_action:\n      action: ${n?"navigate":"none"}\n      navigation_path: ${n}\n      haptic: medium\n    styles:\n      grid:\n        - grid-template-columns: 2fr 1fr 1fr\n        - grid-template-rows: 2fr 0.1fr 1fr 1fr\n        - grid-template-areas: |\n            "i . ."\n            ". . ."\n            "n n n"\n            "l l l"\n      card:\n        - display: |\n            [[[\n              const lights = Object.keys(hass.states).filter(e => e.startsWith("light.") && hass.states[e].state !== "unavailable");\n              return lights.length === 0 ? "none" : "block";\n            ]]]\n        - margin-left: |\n            [[[\n              const camera = Object.keys(hass.states).filter(e => e.startsWith("camera.") && hass.states[e].state !== "unavailable");\n              return camera.length === 0 ? "-7px" : "0px";\n            ]]]\n        - margin-bottom: 1px\n        - height: 130px\n        - width: 130px\n        - border-radius: 30px\n        - background: |\n            [[[\n              return hass.themes.darkMode ? '#1F1F1F' : '#F8F9FA';\n            ]]]\n      name:\n        - font-size: 1rem\n        - font-weight: bold\n        - justify-self: start\n        - align-self: end\n        - margin: 0px 20px 0px 20px\n        - max-width: -webkit-fill-available;\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#FFFFFF' : '#202124';\n            ]]]\n      label:\n        - font-size: 0.85rem\n        - justify-self: start\n        - align-self: start\n        - margin: 2px 0px 0px 20px\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';\n            ]]]\n      icon:\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#FBBC04' : '#F9AB00';\n            ]]]\n    state:\n      - operator: template\n        value: |\n          [[[\n            return Object.keys(hass.states).some(entity => \n              entity.startsWith('light.') && \n              hass.states[entity].state === 'on'\n            );\n          ]]]\n        styles:\n          card:\n            - background: |\n                [[[\n                  return hass.themes.darkMode ? '#332f2a' : '#FEF7E0';\n                ]]]\n          icon:\n            - color: |\n                [[[\n                  return hass.themes.darkMode ? '#FBBC04' : '#745b00';\n                ]]]\n  - type: custom:button-card\n    icon: m3of:wifi\n    name: ${kt("google_dashboard_card.wifi_name")}\n    triggers_update: all\n    label: |\n      [[[\n        const devices = Object.keys(hass.states).filter(\n          (entity) =>\n            entity.startsWith("device_tracker.") &&\n            hass.states[entity].state === "home"\n        ).length;\n        return devices > 1 ? (devices + " " + "${kt("google_dashboard_card.devices")}") : (devices + " " + "${kt("google_dashboard_card.device")}");\n      ]]]\n    show_name: true\n    show_label: true\n    show_icon: true\n    tap_action:\n      action: ${i?"navigate":"none"}\n      navigation_path: ${i}\n      haptic: medium\n    styles:\n      grid:\n        - grid-template-columns: 2fr 1fr 1fr\n        - grid-template-rows: 2fr 0.1fr 1fr 1fr\n        - grid-template-areas: |\n            "i . ."\n            ". . ."\n            "n n n"\n            "l l l"\n      card:\n        - display: |\n            [[[\n              const deviceEntities = Object.keys(hass.states).filter(entity => \n              entity.startsWith('device_tracker.') && \n              hass.states[entity].state === 'home'\n              );\n              return deviceEntities.length === 0 ? "none" : "block";\n            ]]]\n        - margin-left: |\n            [[[\n              const lights = Object.keys(hass.states).filter(e => e.startsWith("light.") && hass.states[e].state !== "unavailable");\n              return lights.length === 0 ? "-7px" : "0px";\n            ]]]\n        - margin-bottom: 1px\n        - height: 130px\n        - width: 130px\n        - border-radius: 30px\n        - background: |\n            [[[\n              return hass.themes.darkMode ? '#1F1F1F' : '#F8F9FA';\n            ]]]\n      name:\n        - font-size: 1rem\n        - font-weight: bold\n        - justify-self: start\n        - align-self: end\n        - margin: 0px 20px 0px 20px\n        - max-width: -webkit-fill-available;\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#FFFFFF' : '#202124';\n            ]]]\n      label:\n        - font-size: 0.85rem\n        - justify-self: start\n        - align-self: start\n        - margin: 2px 0px 0px 20px\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';\n            ]]]\n      icon:\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#81C995' : '#137333';\n            ]]]\n    state:\n      - operator: template\n        value: |\n          [[[\n            return Object.keys(hass.states).some(entity => \n              entity.startsWith('device_tracker.') && \n              hass.states[entity].state === 'home'\n            );\n          ]]]\n        styles:\n          card:\n            - background: |\n                [[[\n                  return hass.themes.darkMode ? '#2e312e' : '#E6F4EA';\n                ]]]\n          icon:\n            - color: |\n                [[[\n                  return hass.themes.darkMode ? '#81C995' : '#137333';\n                ]]]\n  - type: custom:button-card\n    entity: light.luce_giovanni\n    icon: m3of:thermostat\n    name: ${kt("google_dashboard_card.climate_name")}\n    triggers_update: all\n    label: |\n      [[[\n        const climateEntities = Object.keys(hass.states).filter(\n            (entity) =>\n              entity.startsWith("climate.") &&\n              hass.states[entity].state !== "unavailable"\n          ).length;\n          return climateEntities > 1 ? climateEntities + " " + "${kt("google_dashboard_card.devices")}" : climateEntities + " " + "${kt("google_dashboard_card.device")}";\n      ]]]\n    show_name: true\n    show_label: true\n    show_icon: true\n    tap_action:\n      action: ${o?"navigate":"none"}\n      navigation_path: ${o}\n      haptic: medium\n    styles:\n      grid:\n        - grid-template-columns: 2fr 1fr 1fr\n        - grid-template-rows: 2fr 0.1fr 1fr 1fr\n        - grid-template-areas: |\n            "i . ."\n            ". . ."\n            "n n n"\n            "l l l"\n      card:\n        - display: |\n            [[[\n              const climateEntities = Object.keys(hass.states).filter(entity => \n              entity.startsWith('climate.') && \n              hass.states[entity].state !== 'unavailable'\n              );\n              return climateEntities.length === 0 ? "none" : "block";\n            ]]]\n        - margin-left: |\n            [[[\n              const deviceEntities = Object.keys(hass.states).filter(entity => \n              entity.startsWith('device_tracker.') && \n              hass.states[entity].state === 'home'\n              );\n              return deviceEntities.length === 0 ? "-7px" : "0px";\n            ]]]\n        - margin-bottom: 1px\n        - height: 130px\n        - width: 130px\n        - border-radius: 30px\n        - background: |\n            [[[\n              return hass.themes.darkMode ? '#1F1F1F' : '#F8F9FA';\n            ]]]\n      name:\n        - font-size: 1rem\n        - font-weight: bold\n        - justify-self: start\n        - align-self: end\n        - margin: 0px 20px 0px 20px\n        - max-width: -webkit-fill-available;\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#FFFFFF' : '#202124';\n            ]]]\n      label:\n        - font-size: 0.85rem\n        - justify-self: start\n        - align-self: start\n        - margin: 2px 0px 0px 20px\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';\n            ]]]\n      icon:\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#ffdbcd' : '#812800';\n            ]]]\n    state:\n      - operator: template\n        value: |\n          [[[\n            return Object.keys(hass.states).some(entity => \n              entity.startsWith('climate.') && \n              (hass.states[entity].state === 'on' || hass.states[entity].state === 'auto' || hass.states[entity].state === 'heat' || hass.states[entity].state === 'cool')\n            );\n          ]]]\n        styles:\n          card:\n            - background: |\n                [[[\n                  return hass.themes.darkMode ? '#352f2d' : '#FCE8E6';\n                ]]]\n          icon:\n            - color: |\n                [[[\n                  return hass.themes.darkMode ? '#FF8A65' : '#812800';\n                ]]]\n`}_handleClick(t){const e=t.target.closest(".ripple-card");e&&It(e,t)}render(){return this._card?B` <div @mousedown=${this._handleClick}>${this._card}</div> `:B`<ha-card>Loading…</ha-card>`}createRenderRoot(){return this}};zn.styles=c`
    .ripple-card {
      position: relative;
      overflow: hidden;
    }
  `,i([ft({attribute:!1})],zn.prototype,"hass",void 0),i([gt()],zn.prototype,"_config",void 0),i([gt()],zn.prototype,"_card",void 0),zn=i([dt("google-dashboard-card")],zn);let Rn=class extends ct{constructor(){super(...arguments),this._config=Un,this._valueChanged=t=>{var e,n;const i=t.target,o=i.getAttribute("configValue"),r=t instanceof CustomEvent&&void 0!==(null===(e=t.detail)||void 0===e?void 0:e.value)?t.detail.value:null!==(n=i.checked)&&void 0!==n?n:i.value;o&&this._config[o]!==r&&(this._config=Object.assign(Object.assign({},this._config),{[o]:r}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}}setConfig(t){this._config=Object.assign({},t)}_entityChanged(t){var e;const n=t.detail.value;(null===(e=this._config)||void 0===e?void 0:e.entity)!==n&&(this._config=Object.assign(Object.assign({},this._config),{entity:n}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}async firstUpdated(){const t=await window.loadCardHelpers(),e=await t.createCardElement({type:"entities",entities:[]});await e.constructor.getConfigElement()}render(){var t;return this._config&&this.hass?(this._config.use_default_icon=null===(t=this._config.use_default_icon)||void 0===t||t,B`
      <div class="form">
        <span class="switch-label"
          >${kt("google_dashboard_card.description")}</span
        >

        <span class="text-label"
          >${kt("google_dashboard_card.cameras")}</span
        >
        <ha-textfield
          label="${kt("google_dashboard_card.placeholder")}"
          .value=${this._config.cameras||""}
          configValue="cameras"
          @input=${this._valueChanged}
          placeholder="e.g. ./cameras"
        ></ha-textfield>

        <span class="text-label"
          >${kt("google_dashboard_card.lighting")}</span
        >
        <ha-textfield
          label="${kt("google_dashboard_card.placeholder")}"
          .value=${this._config.lighting||""}
          configValue="lighting"
          @input=${this._valueChanged}
          placeholder="e.g. ./lighting"
        ></ha-textfield>

        <span class="text-label"
          >${kt("google_dashboard_card.wifi")}</span
        >
        <ha-textfield
          label="${kt("google_dashboard_card.placeholder")}"
          .value=${this._config.wifi||""}
          configValue="wifi"
          @input=${this._valueChanged}
          placeholder="e.g. ./wifi"
        ></ha-textfield>

        <span class="text-label"
          >${kt("google_dashboard_card.climate")}</span
        >
        <ha-textfield
          label="${kt("google_dashboard_card.placeholder")}"
          .value=${this._config.climate||""}
          configValue="climate"
          @input=${this._valueChanged}
          placeholder="e.g. ./climate"
        ></ha-textfield>
      </div>
    `):B``}};Rn.styles=c`
    .form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
    }

    .switch-label {
      font-size: 16px;
      font-weight: 500;
    }

    .text-label {
      font-size: 14px;
      font-weight: 500;
    }
  `,i([ft({attribute:!1})],Rn.prototype,"hass",void 0),i([gt()],Rn.prototype,"_config",void 0),Rn=i([dt("google-dashboard-card-editor")],Rn);class Dn{#t;#e;#n=0;#i=0;#o=0;#r=0;#s;#a=!1;#l;#c;#h;constructor(t,e,{touchActions:n,stopScrollDirection:i="both"}={}){this.#t=t,this.#e=n,this.#s=e,this.#l=i,this.#c=this.#d.bind(this),this.#h=this.#u.bind(this),this.addListeners()}addListeners(){this.#t.addEventListener("pointerdown",this.#h),this.#t.addEventListener("pointermove",this.#h),this.#t.addEventListener("pointerup",this.#h),this.#t.addEventListener("pointercancel",this.#h),window.addEventListener("touchmove",this.#c,{passive:!1}),this.#e&&(this.#t.style.touchAction=this.#e)}removeListeners(){this.#t.removeEventListener("pointerdown",this.#h),this.#t.removeEventListener("pointermove",this.#h),this.#t.removeEventListener("pointerup",this.#h),this.#t.removeEventListener("pointercancel",this.#h),window.removeEventListener("touchmove",this.#c),this.#e&&this.#t.style.removeProperty("touch-action")}#p(){this.#a=!0}#f(){this.#a=!1}#d(t){this.#a&&t.preventDefault()}#u(t){if("pointerdown"===t.type&&(this.#t.setPointerCapture(t.pointerId),this.#n=t.pageX,this.#i=t.pageY),this.#t.hasPointerCapture(t.pointerId)&&"pointercancel"!==t.type&&"function"==typeof this.#s){const e=t.pageX-this.#n,n=t.pageY-this.#i,i=Math.abs(e/n)>1,o=Math.abs(e/n)<1;"horizontal"===this.#l&&i&&this.#p(),"vertical"===this.#l&&o&&this.#p(),"both"===this.#l&&this.#p(),this.#s(t,{startX:this.#n,startY:this.#i,relativeX:e,relativeY:n,totalX:e+this.#o,totalY:n+this.#r})}"pointerup"===t.type&&(this.#o=+this.#o+t.pageX-this.#n,this.#r=+this.#r+t.pageY-this.#i,this.#t.releasePointerCapture(t.pointerId),this.#f()),"pointercancel"===t.type&&(this.#s(t,{startX:this.#n,startY:this.#i,relativeX:0,relativeY:0,totalX:this.#o,totalY:this.#r}),this.#t.releasePointerCapture(t.pointerId),this.#f())}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Hn extends ct{constructor(){super(...arguments),this._config=e,this._name="",this.mouseStartPos={x:0,y:0},this.mousePos={x:0,y:0},this.containerWidth=0,this.oldValue=0,this.currentValue=0,this.holdTimer=0,this.isHold=!1,this._shouldUpdate=!0,this.updateTimeout=0,this.pressTimeout=0,this.trackingStartTime=0,this.isTap=!1,this._handleContextMenu=t=>(t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation(),!1),this._handlePointer=(t,e)=>{this.mousePos={x:t.pageX,y:t.pageY};const n=this._config.min_slide_time;if("pointerdown"===t.type&&(this._press(),this.isTap=!0,this.isHold=!1,this.holdTimer=window.setTimeout(this._setHold,this._config.hold_time),this.trackingStartTime=Date.now(),this._resetTrack()),["pointerdown","pointermove","pointerup"].includes(t.type)&&this._updateValue(),"pointermove"===t.type){if(this.isTap&&Math.abs(e.relativeX)<5&&Math.abs(e.relativeY)<5)return;this.isTap=!1,clearTimeout(this.holdTimer),this._stopUpdates()}if("pointercancel"===t.type&&(clearTimeout(this.holdTimer),this._unpress(),this._startUpdates()),"pointerup"===t.type){if(clearTimeout(this.holdTimer),this._unpress(),this._startUpdates(),this.isTap)return void this._handleTap();Date.now()-this.trackingStartTime>n&&(this._setValue(),this._startUpdates(!0))}},this._setHold=()=>{this.isTap=!1,this.isHold=!0,this._handleAction("hold")},this._handleTap=()=>{var t;clearTimeout(this.holdTimer),(null===(t=this._config)||void 0===t?void 0:t.tap_action)&&(this.isHold||this._handleAction("tap"))}}static getStubConfig(t,e){const n=e.filter(t=>"light"===t.split(".")[0]).sort();return{type:"custom:google-slider-card",entity:n[Math.floor(Math.random()*n.length)],attribute:"brightness",icon:"m3of:lightbulb",show_percentage:!0,bold_text:!1,height:95}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("google-slider-card-editor")}setConfig(t){if(!t)throw new Error(kt("common.invalid_configuration"));if(!t.entity)throw new Error(kt("common.no_entity_set"));if(!t.entity||"light"!==t.entity.split(".")[0])throw new Error("Specify an entity from within the light domain");this._config=Object.assign(Object.assign({},e),t),this._entity=this._config.entity,this._config.original_min=this._config.min,this._config.original_max=this._config.max}set hass(t){var e,n,i,o,r,s,a,l;if(!this._entity)return;this._hass=t,this._state=t.states[this._entity],this._status=null===(e=this._state)||void 0===e?void 0:e.state,this._name=null!==(s=null!==(r=null!==(n=this._config.name)&&void 0!==n?n:null===(o=null===(i=this._state)||void 0===i?void 0:i.attributes)||void 0===o?void 0:o.friendly_name)&&void 0!==r?r:this._entity.split(".")[1])&&void 0!==s?s:"";const c=(null===(a=t.themes)||void 0===a?void 0:a.darkMode)?"dark":"light",h=null===(l=t.states[this._entity])||void 0===l?void 0:l.state;this._lastTheme===c&&this._lastEntityState===h||(this._lastTheme=c,this._lastEntityState=h,this.requestUpdate())}_log(t){console.log(`%c GOOGLE-SLIDER-CARD ${this._name} %c ${t} `,"color: orange; font-weight: bold; background: black","")}connectedCallback(){super.connectedCallback(),this.addEventListener("contextmenu",this._handleContextMenu),this.slideGesture=new Dn(this,this._handlePointer.bind(this),{touchActions:"pan-y",stopScrollDirection:"horizontal"})}disconnectedCallback(){this.removeEventListener("contextmenu",this._handleContextMenu),this.slideGesture.removeListeners(),super.disconnectedCallback()}_updateValue(){const t=this.containerWidth,e=this.mousePos.x-this.mouseStartPos.x,n=Math.round(100*e/t);this.currentValue=this.oldValue+n,this._checklimits(),this._updateSlider()}_handleAction(t){const e=new Event("hass-action",{bubbles:!0,cancelable:!1,composed:!0});e.detail={config:this._config,action:t},this.dispatchEvent(e)}_resetTrack(){this.mouseStartPos={x:this.mousePos.x,y:this.mousePos.y},this.oldValue=this.currentValue}_press(){this.pressTimeout&&clearTimeout(this.pressTimeout),this.pressTimeout=window.setTimeout(()=>this.setAttribute("pressed",""),this._config.min_slide_time),this.setAttribute("half-pressed","")}_unpress(){this.pressTimeout&&clearTimeout(this.pressTimeout),this.removeAttribute("pressed"),this.removeAttribute("half-pressed")}_checklimits(){var t,e;const n=null!==(t=this._config.min)&&void 0!==t?t:0,i=null!==(e=this._config.max)&&void 0!==e?e:100;this.currentValue<n&&(this.currentValue=n,this._resetTrack()),this.currentValue>i&&(this.currentValue=i,this._resetTrack())}_updateSlider(){var t;this.style.setProperty("--bsc-percent",this.currentValue+"%");const e=null===(t=null==this?void 0:this.shadowRoot)||void 0===t?void 0:t.getElementById("percentage");e&&(e.innerText=Math.round(this.currentValue)+"%")}_updateColors(){var t,e,n,i,o;let r="var(--bsc-color)",s="0%",a="50%",l=!1;if(this._state)if("on"==this._status){const o=null!==(e=null===(t=this._state.attributes)||void 0===t?void 0:t.rgb_color)&&void 0!==e?e:[255,255,255],c=null!==(i=null===(n=this._state.attributes)||void 0===n?void 0:n.brightness)&&void 0!==i?i:255;l=!0,o&&(r=`rgb(${o.join(",")})`),c&&(s=`${Math.ceil(100*c/255)}%`,a=`${Math.ceil(100*c/510+50)}%`)}else r="var(--bsc-off-color)";const c=null===(o=null==this?void 0:this.shadowRoot)||void 0===o?void 0:o.getElementById("percentage");if(!l){"on"!=this._status&&"off"!=this._status?c&&(c.innerText=kt("common.offline")):c&&(c.innerText=kt("common.off"))}this.style.setProperty("--bsc-entity-color",r),this.style.setProperty("--bsc-brightness",s),this.style.setProperty("--bsc-brightness-ui",a),this._config.icon_color&&l&&this.style.setProperty("--bsc-icon-color",this._config.icon_color),this._config.icon_color&&!l&&this.style.removeProperty("--bsc-icon-color")}_getValue(){var t,e,n,i,o;if(!this._shouldUpdate)return;if(!this._state)return;const r=null===(t=this._config)||void 0===t?void 0:t.attribute;let s=0;if("unavailable"==this._status?(this._config.min=0,this._config.max=0,this.style.setProperty("--bsc-opacity","0.5")):(this._config.min=this._config.original_min,this._config.max=this._config.original_max,this.style.removeProperty("--bsc-opacity")),"on"!=this._status)s=null!==(e=this._config.min)&&void 0!==e?e:0;else switch(r){case"brightness":s=Math.round(100*(null!==(n=this._state.attributes.brightness)&&void 0!==n?n:255)/255);break;case"red":case"green":case"blue":const t=null!==(i=this._state.attributes.rgb_color)&&void 0!==i?i:[255,255,255];"red"===r&&(s=t[0]),"green"===r&&(s=t[1]),"blue"===r&&(s=t[2]),s=Math.ceil(100*s/255);break;case"hue":case"saturation":const e=null!==(o=this._state.attributes.hs_color)&&void 0!==o?o:[100,100];"hue"===r&&(s=e[0]),"saturation"===r&&(s=e[1])}this.currentValue=s,this._updateSlider()}_setValue(){var t,e;if(!this._state)return;let n,i=this.currentValue,o=this._config.attribute,r=!0;switch(o){case"brightness":i=Math.ceil(i/100*255),i||(r=!1);break;case"red":case"green":case"blue":n=null!==(t=this._state.attributes.rgb_color)&&void 0!==t?t:[255,255,255],"red"===o&&(n[0]=i),"green"===o&&(n[1]=i),"blue"===o&&(n[2]=i),i=n,o="rgb_color";break;case"hue":case"saturation":n=null!==(e=this._state.attributes.hs_color)&&void 0!==e?e:[100,100],"hue"===o&&(n[0]=i),"saturation"===o&&(n[1]=i),i=n,o="hs_color"}const s={entity_id:this._state.entity_id};r?(s[o]=i,this._config.transition&&(s.transition=this._config.transition),this._hass.callService("light","turn_on",s)):this._hass.callService("light","turn_off",s)}_stopUpdates(){var t,e,n;this.updateTimeout&&clearTimeout(this.updateTimeout),this._shouldUpdate&&(null===(n=null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("slider"))||void 0===e?void 0:e.classList)||void 0===n||n.remove("animate"),this._shouldUpdate=!1)}_startUpdates(t=!1){this.updateTimeout&&clearTimeout(this.updateTimeout),this.updateTimeout=window.setTimeout(()=>{var t,e,n;this._shouldUpdate=!0,null===(n=null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("slider"))||void 0===e?void 0:e.classList)||void 0===n||n.add("animate"),this.requestUpdate()},t?this._config.settle_time:0)}_onClick(t){It(t.currentTarget,t)}updated(){var t,e,n;this.containerWidth=null!==(n=null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("container"))||void 0===e?void 0:e.clientWidth)&&void 0!==n?n:0,this._getValue(),this._updateColors()}render(){var t,e,n,i,o,r,s,a,l;if(!this._entity||!(this._entity in(null!==(e=null===(t=this._hass)||void 0===t?void 0:t.states)&&void 0!==e?e:{})))return this._showError(`${kt("common.no_entity")}: ${this._entity}`);const c=null!==(n=this._config.colorize&&!0)&&void 0!==n&&n,h=null!==(i=this._config.show_percentage&&!0)&&void 0!==i&&i,d=null!==(o=this._config.bold_text&&!0)&&void 0!==o&&o,u=null===(s=null===(r=this._hass)||void 0===r?void 0:r.states)||void 0===s?void 0:s[this._entity],p="on"!=(null==u?void 0:u.state)&&"off"!=(null==u?void 0:u.state),f=(null===(l=null===(a=this._hass)||void 0===a?void 0:a.themes)||void 0===l?void 0:l.darkMode)?"dark":"light",g="on"===(null==u?void 0:u.state);let m="",b="",_="",v="",y="";g&&"dark"===f?(m=b=_="#ffe083",v="#6d5300",y="#333029"):g?(m=b=_="#745b01",v="#ffbf00",y="#feefc8"):"dark"===f?(m=b=_="#e3e3e5",v="#cccccc",y="#292a2e"):(m=b=_="#1b1b1d",y="#e8e8ea"),this._setStyleProperty("--bsc-name-color",m),this._setStyleProperty("--bsc-icon-color",b),this._setStyleProperty("--bsc-percentage-color",_),this._setStyleProperty("--bsc-slider-color",v),this._setStyleProperty("--bsc-background",y),this._setStyleProperty("--bsc-name-margin","-20px"),this._setStyleProperty("--bsc-icon-margin","-10px"),this._setStyleProperty("--bsc-percentage-margin","-20px"),this._setStyleProperty("--bsc-primary-text-color",this._config.text_color),this._setStyleProperty("--bsc-border-color",this._config.border_color),this._setStyleProperty("--bsc-border-radius",this._config.border_radius),this._setStyleProperty("--bsc-border-style",this._config.border_style),this._setStyleProperty("--bsc-border-width",this._config.border_width),this._setStyleProperty("--bsc-height",this._config.height,t=>`${t}px`);const w=null==this._config.icon||"m3of:lightbulb"===this._config.icon||"m3r:lightbulb"===this._config.icon?g?"m3of:lightbulb":"m3r:lightbulb":this._config.icon;return B`
      <ha-card
        id="container"
        tabindex="0"
        style="position: relative;"
        @mousedown=${this._onClick}
      >
        <div id="slider" class="animate ${c?"colorize":""}"></div>
        <div id="content">
          <ha-state-icon
            id="icon"
            .icon=${w}
            .state=${this._state}
            .hass=${this._hass}
            .stateObj=${this._state}
            data-domain=${this._entity.split(".")[0]}
            data-state=${(t=>t??q)(this._status)}
          ></ha-state-icon>
          <p id="label">
            <span id="name" class="${d?"bold":""}"
              >${this._name}</span
            >
            <span
              id="percentage"
              class="${h?"":"hide"} ${d?"bold":""}"
            ></span>
          </p>
        </div>
        ${p?B`
              <ha-icon
                id="icon_offline"
                icon="mdi:alert"
                style="position: absolute; right: 20px; top: 50%; transform: translateY(-50%); color: var(--bsc-icon-color);"
                title="Offline"
              ></ha-icon>
            `:""}
      </ha-card>
    `}_setStyleProperty(t,e,n=t=>t){null!=e&&""!==e&&this.style.setProperty(t,n(e))}_showWarning(t){return B` <hui-warning>${t}</hui-warning> `}_showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t}),B` ${e} `}static get styles(){return c`
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
        /*transform: scale(0.99);*/
      }

      :host([pressed]) {
        /*transform: scale(0.98);*/
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
        padding: 12px 16px;
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

      #content {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
      }

      #label {
        display: flex;
        flex-direction: column;
        width: -webkit-fill-available;
      }

      #name {
        color: var(--bsc-name-color);
        font-size: 15px;
        font-weight: 500;
      }

      #name.bold,
      #percentage.bold {
        font-weight: bold !important;
      }

      #percentage {
        color: var(--bsc-percentage-color);
        font-size: 13px;
      }

      #icon {
        width: 32px;
        height: 32px;
        color: var(--bsc-icon-color);
        align-content: center;
        margin-right: 5px;
        transition: color 0.3s ease-out;
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

      .ripple {
        position: absolute;
        border-radius: 50%;
        transform: scale(0);
        animation: ripple-animation 600ms ease-out;
        background-color: rgba(255, 255, 255, 0.3);
        pointer-events: none;
      }

      @keyframes ripple-animation {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `}}i([gt()],Hn.prototype,"_config",void 0),i([gt()],Hn.prototype,"_entity",void 0),i([gt()],Hn.prototype,"_state",void 0),i([gt()],Hn.prototype,"_status",void 0),i([gt()],Hn.prototype,"_name",void 0);const Vn={type:"custom:google-dashboard-card",entity:"climate.thermo",increase_temp:1,decrease_temp:1};let Wn=class extends ct{constructor(){super(...arguments),this._config=Vn}setConfig(t){if(!t||!t.entity)throw new Error(kt("common.invalid_configuration"));this._config=t}static getStubConfig(t,e){const n=e.filter(t=>"climate"===t.split(".")[0]).sort();return{type:"custom:google-climate-card",entity:n[Math.floor(Math.random()*n.length)],increase_temp:1,decrease_temp:1}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("google-climate-card-editor")}_onClick(t){if(It(t.currentTarget,t),navigator.vibrate&&navigator.vibrate(50),!this._config||!this.hass)return;const e=this._config.entity;Ot(this,"hass-more-info",{entityId:e})}async _adjustTemp(t){var e,n;if(console.log(t),!this.hass||!(null===(e=this._config)||void 0===e?void 0:e.entity))return;const i=this.hass.states[this._config.entity],o=Number(null===(n=null==i?void 0:i.attributes)||void 0===n?void 0:n.temperature);if(isNaN(o))return;const r=o+t;this.hass.states[this._config.entity].attributes.temperature=r,await this.hass.callService("climate","set_temperature",{entity_id:this._config.entity,temperature:r}),setTimeout(()=>{this.requestUpdate()},500)}render(){if(!this._config||!this.hass)return B``;const t=this.hass.states[this._config.entity];if(!t)return B`<ha-card
        ><div class="warning">${kt("common.no_entity")}</div></ha-card
      >`;const e=this._config.name||t.attributes.friendly_name,n=Mt(t.state);console.log(t,this._config.entity,n);const i=jt(t,"thermometer",n);return B`
      <div class="temperature-card">
        <div class="header" @click=${this._onClick}>
          <div class="valve-info">
            <ha-icon
              id="icon_offline"
              icon="${Tt(t,{control_type:"thermometer"})}"
              title="Climate"
              style="
                  --mdc-icon-size: 20px;
                  margin-bottom: 3px;
                "
            ></ha-icon>
            <span class="valve-name">${e}</span>
          </div>

          ${n?B`<ha-icon
                id="icon_offline"
                icon="mdi:alert"
                style="position: absolute; right: 0px; top: 50%; transform: translateY(-50%); color: var(--bsc-icon-color);"
                title="Offline"
              ></ha-icon>`:B`<ha-icon
                icon="m3rf:arrow-forward-ios"
                style="
                  position: absolute;
                  right: 0px;
                  top: 50%;
                  transform: translateY(-50%);
                  color: var(--bsc-icon-color);
                  --mdc-icon-size: 15px;
                "
                title="Enter"
                class="chevron"
              ></ha-icon> `}
        </div>
        ${n?B`
              <div
                class="temperature-control"
                style="justify-content: center; margin-bottom: 45px;"
              >
                <div class="temperature-display">Offline</div>
              </div>
            `:B`
              <div class="temperature-control">
                <button
                  class="control-btn minus-btn"
                  @click=${()=>this._adjustTemp(-this._config.decrease_temp|-Vn.decrease_temp)}
                >
                  −
                </button>
                <div class="temperature-display" id="tempDisplay">
                  ${t.attributes.temperature}
                </div>
                <button
                  class="control-btn plus-btn"
                  @click=${()=>this._adjustTemp(this._config.decrease_temp|Vn.increase_temp)}
                >
                  +
                </button>
              </div>

              <div class="internal-temp">
                <span id="internalTemp">${i}</span>
              </div>
            `}
      </div>
    `}};var Bn;Wn.styles=c`
    .temperature-card {
      background: linear-gradient(135deg, #4a4a4a 0%, #3a3a3a 100%);
      border-radius: 28px;
      padding: 10px 15px;
      width: -webkit-fill-available;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      position: relative;
      overflow: hidden;
    }

    .temperature-card::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #414246;
      border-radius: 24px;
      pointer-events: none;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 25px;
      position: relative;
      z-index: 2;
      pointer-events: visible;
      cursor: pointer;
      -webkit-user-select: none; /* Safari */
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* IE10+/Edge */
      user-select: none; /* Standard */
    }

    .valve-info {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-top: 5px;
    }

    .steam-icon {
      color: #888;
      font-size: 20px;
    }

    .valve-name {
      color: #c3c3c3;
      font-size: 16px;
      font-weight: 500;
    }

    .chevron {
      color: #c3c3c3;
      font-size: 20px;
      cursor: pointer;
      transition: color 0.2s ease;
    }

    .chevron:hover {
      color: #ccc;
    }

    .temperature-control {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 15px;
      position: relative;
      z-index: 2;
    }

    .control-btn {
      width: 80px;
      height: 55px;
      border-radius: 30px;
      background: #5c5b60;
      border: none;
      color: #c3c3c3;
      font-size: 32px;
      font-weight: 300;
      cursor: pointer;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(10px);
    }

    .control-btn:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: scale(1.05);
    }

    .control-btn:active {
      transform: scale(0.98);
    }

    .temperature-display {
      color: #c3c3c3;
      font-size: 72px;
      font-weight: 450;
      text-align: center;
      line-height: 1;
    }

    .internal-temp {
      text-align: center;
      color: #c1c2c6;
      font-size: 15px;
      font-weight: 400;
      position: relative;
      z-index: 2;
      margin-bottom: 20px;
    }

    .ripple {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
    }

    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }

    @media (max-width: 420px) {
      .valve-name,
      .state {
        font-size: 15px;
      }
      .valve-name {
        line-height: 1.4;
        margin-bottom: 2px;
      }

      #icon_offline {
        margin-bottom: 5px;
      }

      .temperature-display {
        font-size: 60px;
      }

      .control-btn {
        width: 65px;
        height: 45px;
        font-size: 28px;
      }
    }
  `,i([ft({attribute:!1})],Wn.prototype,"hass",void 0),i([gt()],Wn.prototype,"_config",void 0),Wn=i([dt("google-climate-card")],Wn),console.info(`%c  GOOGLE-SLIDER-CARD \n%c  ${kt("common.version")} 1.2.0    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),customElements.define("google-slider-card",Hn),customElements.get("google-button-card")||customElements.define("google-button-card",Ft),customElements.get("google-button-card-editor")||customElements.define("google-button-card-editor",Pt),customElements.get("google-dashboard-card")||customElements.define("google-dashboard-card",zn),customElements.get("google-dashboard-card-editor")||customElements.define("google-dashboard-card-editor",Rn),customElements.get("google-climate-card")||customElements.define("google-climate-card",Wn),window.customCards=null!==(Bn=window.customCards)&&void 0!==Bn?Bn:[],window.customCards.push({type:"google-slider-card",name:"Google Slider Card",preview:!0,description:"Google Slider Card for light entities."}),window.customCards.push({type:"google-button-card",name:"Google Button Card",preview:!0,description:"Google-style button card."}),window.customCards.push({type:"google-dashboard-card",name:"Google Dashboard Card",preview:!0,description:"Google-style Dashboard card."}),window.customCards.push({type:"google-climate-card",name:"Google Climate Card",preview:!0,description:"Google-style Climate card."});
