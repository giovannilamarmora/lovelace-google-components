const t="brightness",e={type:"custom:google-slider-card",attribute:t,tap_action:{action:"toggle",haptic:"light"},hold_action:{action:"more-info"},hold_time:600,settle_time:3e3,min_slide_time:0,min:0,max:100},n={type:"custom:google-button-card",attribute:t,tap_action:{action:"toggle",haptic:"light"},hold_action:{action:"more-info"},hold_time:600,settle_time:3e3,min_slide_time:0,min:0,max:100};function i(t,e,n,i){var o,s=arguments.length,r=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(s<3?o(r):s>3?o(e,n,r):o(e,n))||r);return s>3&&r&&Object.defineProperty(e,n,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o=globalThis,s=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),a=new WeakMap;let l=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const n=void 0!==e&&1===e.length;n&&(t=a.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&a.set(e,t))}return t}toString(){return this.cssText}};const c=(t,...e)=>{const n=1===t.length?t[0]:e.reduce((e,n,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[i+1],t[0]);return new l(n,t,r)},h=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return(t=>new l("string"==typeof t?t:t+"",void 0,r))(e)})(t):t,{is:d,defineProperty:u,getOwnPropertyDescriptor:p,getOwnPropertyNames:f,getOwnPropertySymbols:g,getPrototypeOf:m}=Object,_=globalThis,b=_.trustedTypes,v=b?b.emptyScript:"",y=_.reactiveElementPolyfillSupport,w=(t,e)=>t,x={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch(t){n=null}}return n}},$=(t,e)=>!d(t,e),A={attribute:!0,type:String,converter:x,reflect:!1,useDefault:!1,hasChanged:$};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let C=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=A){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(t,n,e);void 0!==i&&u(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){const{get:i,set:o}=p(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const s=i?.call(this);o?.call(this,e),this.requestUpdate(t,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??A}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const t=m(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const t=this.properties,e=[...f(t),...g(t)];for(const n of e)this.createProperty(n,t[n])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,n]of e)this.elementProperties.set(t,n)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const n=this._$Eu(t,e);void 0!==n&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const t of n)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Eu(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(s)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const n of e){const e=document.createElement("style"),i=o.litNonce;void 0!==i&&e.setAttribute("nonce",i),e.textContent=n.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){const n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(void 0!==i&&!0===n.reflect){const o=(void 0!==n.converter?.toAttribute?n.converter:x).toAttribute(e,n.type);this._$Em=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const n=this.constructor,i=n._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=n.getPropertyOptions(i),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:x;this._$Em=i,this[i]=o.fromAttribute(e,t.type)??this._$Ej?.get(i)??null,this._$Em=null}}requestUpdate(t,e,n){if(void 0!==t){const i=this.constructor,o=this[t];if(n??=i.getPropertyOptions(t),!((n.hasChanged??$)(o,e)||n.useDefault&&n.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,n))))return;this.C(t,e,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:i,wrapped:o},s){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),!0!==o||void 0!==s)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,n]of t){const{wrapped:t}=n,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,n,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[w("elementProperties")]=new Map,C[w("finalized")]=new Map,y?.({ReactiveElement:C}),(_.reactiveElementVersions??=[]).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const k=globalThis,E=k.trustedTypes,S=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,T="$lit$",O=`lit$${Math.random().toFixed(9).slice(2)}$`,j="?"+O,M=`<${j}>`,P=document,I=()=>P.createComment(""),F=t=>null===t||"object"!=typeof t&&"function"!=typeof t,L=Array.isArray,U="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,D=/>/g,R=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,H=/"/g,Y=/^(?:script|style|textarea|title)$/i,W=(t=>(e,...n)=>({_$litType$:t,strings:e,values:n}))(1),B=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),G=new WeakMap,X=P.createTreeWalker(P,129);function K(t,e){if(!L(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const Z=(t,e)=>{const n=t.length-1,i=[];let o,s=2===e?"<svg>":3===e?"<math>":"",r=N;for(let e=0;e<n;e++){const n=t[e];let a,l,c=-1,h=0;for(;h<n.length&&(r.lastIndex=h,l=r.exec(n),null!==l);)h=r.lastIndex,r===N?"!--"===l[1]?r=z:void 0!==l[1]?r=D:void 0!==l[2]?(Y.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=R):void 0!==l[3]&&(r=R):r===R?">"===l[0]?(r=o??N,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?R:'"'===l[3]?H:V):r===H||r===V?r=R:r===z||r===D?r=N:(r=R,o=void 0);const d=r===R&&t[e+1].startsWith("/>")?" ":"";s+=r===N?n+M:c>=0?(i.push(a),n.slice(0,c)+T+n.slice(c)+O+d):n+O+(-2===c?e:d)}return[K(t,s+(t[n]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class J{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let o=0,s=0;const r=t.length-1,a=this.parts,[l,c]=Z(t,e);if(this.el=J.createElement(l,n),X.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=X.nextNode())&&a.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(T)){const e=c[s++],n=i.getAttribute(t).split(O),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:r[2],strings:n,ctor:"."===r[1]?it:"?"===r[1]?ot:"@"===r[1]?st:nt}),i.removeAttribute(t)}else t.startsWith(O)&&(a.push({type:6,index:o}),i.removeAttribute(t));if(Y.test(i.tagName)){const t=i.textContent.split(O),e=t.length-1;if(e>0){i.textContent=E?E.emptyScript:"";for(let n=0;n<e;n++)i.append(t[n],I()),X.nextNode(),a.push({type:2,index:++o});i.append(t[e],I())}}}else if(8===i.nodeType)if(i.data===j)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(O,t+1));)a.push({type:7,index:o}),t+=O.length-1}o++}}static createElement(t,e){const n=P.createElement("template");return n.innerHTML=t,n}}function Q(t,e,n=t,i){if(e===B)return e;let o=void 0!==i?n._$Co?.[i]:n._$Cl;const s=F(e)?void 0:e._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),void 0===s?o=void 0:(o=new s(t),o._$AT(t,n,i)),void 0!==i?(n._$Co??=[])[i]=o:n._$Cl=o),void 0!==o&&(e=Q(t,o._$AS(t,e.values),o,i)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:n}=this._$AD,i=(t?.creationScope??P).importNode(e,!0);X.currentNode=i;let o=X.nextNode(),s=0,r=0,a=n[0];for(;void 0!==a;){if(s===a.index){let e;2===a.type?e=new et(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new rt(o,this,t)),this._$AV.push(e),a=n[++r]}s!==a?.index&&(o=X.nextNode(),s++)}return X.currentNode=P,i}p(t){let e=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,i){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),F(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>L(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&F(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:n}=t,i="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=J.createElement(K(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new tt(i,this),n=t.u(this.options);t.p(e),this.T(n),this._$AH=t}}_$AC(t){let e=G.get(t.strings);return void 0===e&&G.set(t.strings,e=new J(t)),e}k(t){L(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,i=0;for(const o of t)i===e.length?e.push(n=new et(this.O(I()),this.O(I()),this,this.options)):n=e[i],n._$AI(o),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class nt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,i,o){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=q}_$AI(t,e=this,n,i){const o=this.strings;let s=!1;if(void 0===o)t=Q(this,t,e,0),s=!F(t)||t!==this._$AH&&t!==B,s&&(this._$AH=t);else{const i=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=Q(this,i[n+r],e,r),a===B&&(a=this._$AH[r]),s||=!F(a)||a!==this._$AH[r],a===q?t=q:t!==q&&(t+=(a??"")+o[r+1]),this._$AH[r]=a}s&&!i&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class it extends nt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class ot extends nt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class st extends nt{constructor(t,e,n,i,o){super(t,e,n,i,o),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??q)===B)return;const n=this._$AH,i=t===q&&n!==q||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==q&&(n===q||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const at=k.litHtmlPolyfillSupport;at?.(J,et),(k.litHtmlVersions??=[]).push("3.3.0");const lt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ct=class extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,n)=>{const i=n?.renderBefore??e;let o=i._$litPart$;if(void 0===o){const t=n?.renderBefore??null;i._$litPart$=o=new et(e.insertBefore(I(),t),t,void 0,n??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}};ct._$litElement$=!0,ct.finalized=!0,lt.litElementHydrateSupport?.({LitElement:ct});const ht=lt.litElementPolyfillSupport;ht?.({LitElement:ct}),(lt.litElementVersions??=[]).push("4.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dt=t=>(e,n)=>{void 0!==n?n.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ut={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:$},pt=(t=ut,e,n)=>{const{kind:i,metadata:o}=n;let s=globalThis.litPropertyMetadata.get(o);if(void 0===s&&globalThis.litPropertyMetadata.set(o,s=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),s.set(n.name,t),"accessor"===i){const{name:i}=n;return{set(n){const o=e.get.call(this);e.set.call(this,n),this.requestUpdate(i,o,t)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=n;return function(n){const o=this[i];e.call(this,n),this.requestUpdate(i,o,t)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ft(t){return(e,n)=>"object"==typeof n?pt(t,e,n):((t,e,n)=>{const i=e.hasOwnProperty(n);return e.constructor.createProperty(n,t),i?Object.getOwnPropertyDescriptor(e,n):void 0})(t,e,n)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function gt(t){return ft({...t,state:!0,attribute:!1})}var mt={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",no_entity_set:"Entity not set",no_entity:"Entity not available",on:"On",off:"Off",offline:"Offline",auto:"Auto",heat:"Heat",cool:"Cool"},_t={description:"Configure the navigation path when a card is tapped.",cameras:"Cameras path",cameras_name:"Cameras",lighting:"Lighting path",lighting_name:"Lighting",lighting_label:"Lights",wifi:"Wi-Fi path",wifi_name:"Wi-Fi",climate:"Climate path",climate_name:"Climate",device:"Device",devices:"Devices",placeholder:"./path-or-url",default:"Use default configuration on Tap (Single Tap)",tap_type:"Select the type of Tap (Single Tap, Hold Press, Double Tap)",single:"Single Tap",hold:"Hold Press",double:"Double Tap",web:"Use Single Tap on Browser (Selected tap on mobile)"},bt={name:"Entity Name",entity:"Entity",theme:"Use Material Expressive",increase_temp:"Increase Temperature (e.g. 0.5)",decrease_temp:"Decrease Temperature (e.g. 0.5)",dual_icon:{default:"Use Default Icon",options:"Use Dual Icon (On and Off states)."}},vt={name:"Entity Name",control_type:"Control Type",type:{generic:"Generic (Switch, Button...)",thermometer:"Thermometer",scene:"Autonomation and scene"},dual_icon:{default:"Use default icon",options:"Use dual icon (Element On and Element Off)."}},yt={common:mt,google_dashboard_card:_t,google_climate_card:bt,google_button_card:vt},wt={version:"Versione",invalid_configuration:"Configurazione non valida",show_warning:"Mostra avviso",no_entity_set:"Entità non impostata",no_entity:"Entità non disponibile",on:"Acceso",off:"Spento",offline:"Offline",auto:"Auto",heat:"Riscalda",cool:"Raffresca"},xt={description:"Configura il percorso di navigazione quando una card viene cliccata.",cameras:"Percorso delle telecamere",cameras_name:"Telecamere",lighting:"Percorso delle luci",lighting_name:"Illuminazione",lighting_label:"Luci",wifi:"Percorso Wi-Fi",wifi_name:"Wi-Fi",climate:"Percorso del clima",climate_name:"Climatizzazione",device:"Dispositivo",devices:"Dispositivi",placeholder:"./percorso-o-url",default:"Usa configurazione di default al Tap(Tap Singolo)",tap_type:"Seleziona il tipo di Tap (Tap Singolo, Hold Press, Double Tap)",single:"Tap Singolo",hold:"Tap a pressione",double:"Doppio Tap",web:"Usa Tap Singolo sul Browser (Su mobile il tap selezionato)"},$t={name:"Nome Entità",entity:"Entità",theme:"Usa Material Expressive",increase_temp:"Aumento Temperatura (e.g. 0.5)",decrease_temp:"Diminuzione Temperatura (e.g. 0.5)",dual_icon:{default:"Usa Icona di default",options:"Usa doppia icona (Elemento acceso e spento)."}},At={name:"Nome Entità",control_type:"Tipo di controllo",type:{generic:"Generico (Interruttore, Pulsante...)",thermometer:"Termometro",scene:"Autonomazioni e scene"},dual_icon:{default:"Usa Icona di default",options:"Usa doppia icona (Elemento acceso e spento)."}},Ct={common:wt,google_dashboard_card:xt,google_climate_card:$t,google_button_card:At};const kt={en:Object.freeze({__proto__:null,common:mt,default:yt,google_button_card:vt,google_climate_card:bt,google_dashboard_card:_t}),it:Object.freeze({__proto__:null,common:wt,default:Ct,google_button_card:At,google_climate_card:$t,google_dashboard_card:xt})};function Et(t,e="",n=""){const i=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let o;try{o=t.split(".").reduce((t,e)=>t[e],kt[i])}catch(e){o=t.split(".").reduce((t,e)=>t[e],kt.en)}return void 0===o&&(o=t.split(".").reduce((t,e)=>t[e],kt.en)),""!==e&&""!==n&&(o=o.replace(e,n)),o}var St,Tt;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(St||(St={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(Tt||(Tt={}));var Ot,jt=function(t,e,n,i){i=i||{},n=null==n?{}:n;var o=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return o.detail=n,t.dispatchEvent(o),o};function Mt(t,e){var n,i,o;const s=t.entity_id.split(".")[0],r=t.state,a=null!==(n=e.control_type)&&void 0!==n?n:"generic";if(!(null===(i=e.use_default_icon)||void 0===i||i))return e.dual_icon?"on"===r||"auto"===r||"heat"===r||"cool"===r?e.icon_on||`mdi:${s}`:e.icon_off||`mdi:${s}`:e.icon||`mdi:${s}`;if(null===(o=t.attributes.icon)||void 0===o?void 0:o.trim())return t.attributes.icon;if("thermometer"===a)switch(r){case"auto":return"mdi:thermostat-auto";case"heat":return"mdi:fire";case"cool":return"mdi:snowflake";default:return"mdi:thermometer"}return"scene"===a?"mdi:creation-outline":`mdi:${s}`}function Pt(t,e,n){let i="";return"thermometer"!==e||n||(i=" • "+t.attributes.current_temperature+"°"),function(t,e=""){if(!Object.values(Ot).includes(t))return Et("common.offline");const n={[Ot.ON]:Et("common.on"),[Ot.OFF]:Et("common.off"),[Ot.AUTO]:Et("common.auto"),[Ot.HEAT]:Et("common.heat"),[Ot.COOL]:Et("common.cool")}[t]||t;return""!=e?n+e:n}(t.state,i)}function It(t,e=""){return("scene"!=e||"unknown"!=t)&&!Object.values(Ot).includes(t)}function Ft(t,e){if(!t)return;const n=document.createElement("span");n.classList.add("ripple");const i=t.getBoundingClientRect(),o=Math.max(i.width,i.height);n.style.width=n.style.height=`${o}px`;const s=e.clientX-i.left-o/2,r=e.clientY-i.top-o/2;n.style.left=`${s}px`,n.style.top=`${r}px`,Object.assign(n.style,{position:"absolute",borderRadius:"50%",background:"rgba(255, 255, 255, 0.3)",transform:"scale(0)",animation:"ripple-animation 600ms ease-out",pointerEvents:"none",zIndex:"1"});const a=getComputedStyle(t);"static"===a.position&&(t.style.position="relative"),"hidden"!==a.overflow&&(t.style.overflow="hidden"),t.appendChild(n),n.addEventListener("animationend",()=>n.remove())}!function(t){t.ON="on",t.OFF="off",t.AUTO="auto",t.HEAT="heat",t.COOL="cool"}(Ot||(Ot={}));let Lt=class extends ct{constructor(){super(...arguments),this._config=n,this._moved=!1}setConfig(t){if(!t||!t.entity)throw new Error(Et("common.invalid_configuration"));this._config=t}static getStubConfig(t,e){const n=e.filter(t=>"switch"===t.split(".")[0]).sort();return{type:"custom:google-button-card",entity:n[Math.floor(Math.random()*n.length)],icon:"mdi:switch",height:95}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("google-button-card-editor")}_onClick(t){Ft(t.currentTarget,t),this._toggle()}_toggle(){if(navigator.vibrate&&navigator.vibrate(50),!this._config||!this.hass)return;const t=this._config.entity;"thermometer"===(this._config.control_type||"generic")?jt(this,"hass-more-info",{entityId:t}):this.hass.callService("homeassistant","toggle",{entity_id:t})}_startPress(t){this._cancelPress(),this._moved=!1,t instanceof TouchEvent&&t.touches.length>0?(this._startX=t.touches[0].clientX,this._startY=t.touches[0].clientY):t instanceof MouseEvent&&(this._startX=t.clientX,this._startY=t.clientY),this._pressTimer=window.setTimeout(()=>{this._pressTimer=void 0,this._moved||this._handleHold()},500)}_handleMove(t){if(!this._startX||!this._startY||0===t.touches.length)return;const e=t.touches[0].clientX,n=t.touches[0].clientY,i=Math.abs(e-this._startX),o=Math.abs(n-this._startY);(i>10||o>10)&&(this._moved=!0,this._cancelPress())}_cancelPress(t){this._pressTimer&&(clearTimeout(this._pressTimer),this._pressTimer=void 0,!this._moved&&t instanceof MouseEvent&&this._onClick(t))}_handleHold(){this._config&&this.hass&&jt(this,"hass-more-info",{entityId:this._config.entity})}render(){var t,e;if(!this._config||!this.hass)return W``;const n=this.hass.states[this._config.entity];if(!n)return W`<ha-card
        ><div class="warning">${Et("common.no_entity")}</div></ha-card
      >`;const i="on"===n.state||"auto"===n.state||"heat"===n.state||"cool"===n.state,o=this._config.name||n.attributes.friendly_name,s=Mt(n,this._config),r=It(n.state,this._config.control_type),a=Pt(n,this._config.control_type,r),l=(null===(e=null===(t=this.hass)||void 0===t?void 0:t.themes)||void 0===e?void 0:e.darkMode)?"dark":"light";return this.setColorCard(this._config.control_type,l,r,i),W`
      <ha-card
        class="google-button ${i?"on":"off"}"
        @mousedown=${this._startPress}
        @touchstart=${this._startPress}
        @mouseup=${this._cancelPress}
        @mouseleave=${this._cancelPress}
        @touchend=${this._cancelPress}
        @touchcancel=${this._cancelPress}
        @touchmove=${this._handleMove}
      >
        <div class="content">
          <ha-icon .icon=${s} class="icon"></ha-icon>
          <div class="text">
            <div class="name">${o}</div>
            ${"scene"==this._config.control_type?W``:W`<div class="state">${a}</div>`}
          </div>
        </div>
        ${r?W`<ha-icon
              id="icon_offline"
              icon="mdi:alert"
              style="position: absolute; right: 20px; top: 50%; transform: translateY(-50%); color: var(--bsc-icon-color);"
              title="Offline"
            ></ha-icon>`:"thermometer"==this._config.control_type?W`<ha-icon
                icon="m3rf:arrow-forward-ios"
                style="
                  position: absolute;
                  right: 5%;
                  top: 50%;
                  transform: translateY(-50%);
                  color: var(--bsc-icon-color);
                  --mdc-icon-size: 15px;
                "
                title="Enter"
                class="chevron"
              ></ha-icon>`:W``}
      </ha-card>
    `}setColorCard(t,e,n,i){let o="",s="",r="",a="";n?"light"===e?(o=s=r="#949496",a="#dfdfe1"):(o=s=r="#717173",a="#2c2c2e"):i?"dark"===e?"thermometer"===t?(o=s=r="#fedcca",a="#5c4035"):(o=s=r="#d8e3f7",a="#3e4758"):"thermometer"===t?(o=s=r="#812800",a="rgba(258, 193.8, 166, 0.4)",a="#ffd5c4"):(o=s=r="#131c2b",a="#d8e3f7"):"dark"===e?(o=s=r="#e3e3e5",a="#292a2e"):(o=s=r="#1b1b1d",a="#e8e8ea"),this._setStyleProperty("--bsc-name-color",o),this._setStyleProperty("--bsc-icon-color",s),this._setStyleProperty("--bsc-percentage-color",r),this._setStyleProperty("--bsc-background",a),this._setStyleProperty("--bsc-height",this._config.height||95,t=>`${t}px`),this._setStyleProperty("--bsc-border-radius",this._config.border_radius)}_setStyleProperty(t,e,n=t=>t){null!=e&&""!==e&&this.style.setProperty(t,n(e))}};Lt.styles=c`
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
      box-shadow:
        0px 0.5px 1px rgba(0, 0, 0, 0.05),
        0px 0.5px 1.5px rgba(0, 0, 0, 0.07);
      -webkit-tap-highlight-color: transparent;
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
  `,i([ft({attribute:!1})],Lt.prototype,"hass",void 0),i([gt()],Lt.prototype,"_config",void 0),Lt=i([dt("google-button-card")],Lt);let Ut=class extends ct{constructor(){super(...arguments),this._config=n,this._valueChanged=t=>{var e,n;const i=t.target,o=i.getAttribute("configValue"),s=t instanceof CustomEvent&&void 0!==(null===(e=t.detail)||void 0===e?void 0:e.value)?t.detail.value:null!==(n=i.checked)&&void 0!==n?n:i.value;o&&this._config[o]!==s&&(this._config=Object.assign(Object.assign({},this._config),{[o]:s}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}}setConfig(t){this._config=Object.assign({},t)}_entityChanged(t){var e;const n=t.detail.value;(null===(e=this._config)||void 0===e?void 0:e.entity)!==n&&(this._config=Object.assign(Object.assign({},this._config),{entity:n}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}async firstUpdated(){const t=await window.loadCardHelpers(),e=await t.createCardElement({type:"entities",entities:[]});await e.constructor.getConfigElement()}setEntityFilter(){switch(this._config.control_type){case"thermometer":return["climate"];case"scene":return["scene"];default:return}}render(){var t,e,n;return this._config&&this.hass?(this._config.use_default_icon=null===(t=this._config.use_default_icon)||void 0===t||t,W`
      <div class="form">
        <span class="switch-label"
          >${Et("google_button_card.dual_icon.options")}</span
        >
        <ha-select
          label="${Et("google_button_card.control_type")}"
          .value=${this._config.control_type||"generic"}
          configValue="control_type"
          @selected=${this._valueChanged}
          @closed=${t=>t.stopPropagation()}
        >
          <mwc-list-item value="generic">
            ${Et("google_button_card.type.generic")}
          </mwc-list-item>
          <mwc-list-item value="thermometer">
            ${Et("google_button_card.type.thermometer")}
          </mwc-list-item>
          <mwc-list-item value="scene">
            ${Et("google_button_card.type.scene")}
          </mwc-list-item>
        </ha-select>

        <ha-textfield
          label="${Et("google_button_card.name")}"
          .value=${this._config.name||""}
          configValue="name"
          @input=${this._valueChanged}
          placeholder="e.g. Cooler"
        ></ha-textfield>

        <ha-entity-picker
          label="Entity"
          .value=${this._config.entity||""}
          .hass=${this.hass}
          .includeDomains=${this.setEntityFilter()}
          allow-custom-entity
          configValue="entity"
          @value-changed=${this._entityChanged}
          required
        ></ha-entity-picker>

        <div class="switch-row">
          <span class="switch-label"
            >${Et("google_button_card.dual_icon.default")}</span
          >
          <ha-switch
            .checked=${null===(e=this._config.use_default_icon)||void 0===e||e}
            configValue="use_default_icon"
            @change=${this._valueChanged}
          />
        </div>

        ${this._config.use_default_icon?W``:W`
              <div class="switch-row">
                <span class="switch-label"
                  >${Et("google_button_card.dual_icon.options")}</span
                >
                <ha-switch
                  .checked=${null!==(n=this._config.dual_icon)&&void 0!==n&&n}
                  configValue="dual_icon"
                  @change=${this._valueChanged}
                />
              </div>

              ${this._config.dual_icon?W`
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
                  `:W`
                    <ha-icon-picker
                      label="Icon"
                      .value=${this._config.icon||""}
                      configValue="icon"
                      @value-changed=${this._valueChanged}
                      placeholder="mdi:lightbulb"
                    />
                  `}
            `}
      </div>
    `):W``}};
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function Nt(t){return null==t}Ut.styles=c`
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
  `,i([ft({attribute:!1})],Ut.prototype,"hass",void 0),i([gt()],Ut.prototype,"_config",void 0),Ut=i([dt("google-button-card-editor")],Ut);var zt={isNothing:Nt,isObject:function(t){return"object"==typeof t&&null!==t},toArray:function(t){return Array.isArray(t)?t:Nt(t)?[]:[t]},repeat:function(t,e){var n,i="";for(n=0;n<e;n+=1)i+=t;return i},isNegativeZero:function(t){return 0===t&&Number.NEGATIVE_INFINITY===1/t},extend:function(t,e){var n,i,o,s;if(e)for(n=0,i=(s=Object.keys(e)).length;n<i;n+=1)t[o=s[n]]=e[o];return t}};function Dt(t,e){var n="",i=t.reason||"(unknown reason)";return t.mark?(t.mark.name&&(n+='in "'+t.mark.name+'" '),n+="("+(t.mark.line+1)+":"+(t.mark.column+1)+")",!e&&t.mark.snippet&&(n+="\n\n"+t.mark.snippet),i+" "+n):i}function Rt(t,e){Error.call(this),this.name="YAMLException",this.reason=t,this.mark=e,this.message=Dt(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack||""}Rt.prototype=Object.create(Error.prototype),Rt.prototype.constructor=Rt,Rt.prototype.toString=function(t){return this.name+": "+Dt(this,t)};var Vt=Rt;function Ht(t,e,n,i,o){var s="",r="",a=Math.floor(o/2)-1;return i-e>a&&(e=i-a+(s=" ... ").length),n-i>a&&(n=i+a-(r=" ...").length),{str:s+t.slice(e,n).replace(/\t/g,"→")+r,pos:i-e+s.length}}function Yt(t,e){return zt.repeat(" ",e-t.length)+t}var Wt=function(t,e){if(e=Object.create(e||null),!t.buffer)return null;e.maxLength||(e.maxLength=79),"number"!=typeof e.indent&&(e.indent=1),"number"!=typeof e.linesBefore&&(e.linesBefore=3),"number"!=typeof e.linesAfter&&(e.linesAfter=2);for(var n,i=/\r?\n|\r|\0/g,o=[0],s=[],r=-1;n=i.exec(t.buffer);)s.push(n.index),o.push(n.index+n[0].length),t.position<=n.index&&r<0&&(r=o.length-2);r<0&&(r=o.length-1);var a,l,c="",h=Math.min(t.line+e.linesAfter,s.length).toString().length,d=e.maxLength-(e.indent+h+3);for(a=1;a<=e.linesBefore&&!(r-a<0);a++)l=Ht(t.buffer,o[r-a],s[r-a],t.position-(o[r]-o[r-a]),d),c=zt.repeat(" ",e.indent)+Yt((t.line-a+1).toString(),h)+" | "+l.str+"\n"+c;for(l=Ht(t.buffer,o[r],s[r],t.position,d),c+=zt.repeat(" ",e.indent)+Yt((t.line+1).toString(),h)+" | "+l.str+"\n",c+=zt.repeat("-",e.indent+h+3+l.pos)+"^\n",a=1;a<=e.linesAfter&&!(r+a>=s.length);a++)l=Ht(t.buffer,o[r+a],s[r+a],t.position-(o[r]-o[r+a]),d),c+=zt.repeat(" ",e.indent)+Yt((t.line+a+1).toString(),h)+" | "+l.str+"\n";return c.replace(/\n$/,"")},Bt=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],qt=["scalar","sequence","mapping"];var Gt=function(t,e){if(e=e||{},Object.keys(e).forEach(function(e){if(-1===Bt.indexOf(e))throw new Vt('Unknown option "'+e+'" is met in definition of "'+t+'" YAML type.')}),this.options=e,this.tag=t,this.kind=e.kind||null,this.resolve=e.resolve||function(){return!0},this.construct=e.construct||function(t){return t},this.instanceOf=e.instanceOf||null,this.predicate=e.predicate||null,this.represent=e.represent||null,this.representName=e.representName||null,this.defaultStyle=e.defaultStyle||null,this.multi=e.multi||!1,this.styleAliases=function(t){var e={};return null!==t&&Object.keys(t).forEach(function(n){t[n].forEach(function(t){e[String(t)]=n})}),e}(e.styleAliases||null),-1===qt.indexOf(this.kind))throw new Vt('Unknown kind "'+this.kind+'" is specified for "'+t+'" YAML type.')};function Xt(t,e){var n=[];return t[e].forEach(function(t){var e=n.length;n.forEach(function(n,i){n.tag===t.tag&&n.kind===t.kind&&n.multi===t.multi&&(e=i)}),n[e]=t}),n}function Kt(t){return this.extend(t)}Kt.prototype.extend=function(t){var e=[],n=[];if(t instanceof Gt)n.push(t);else if(Array.isArray(t))n=n.concat(t);else{if(!t||!Array.isArray(t.implicit)&&!Array.isArray(t.explicit))throw new Vt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");t.implicit&&(e=e.concat(t.implicit)),t.explicit&&(n=n.concat(t.explicit))}e.forEach(function(t){if(!(t instanceof Gt))throw new Vt("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(t.loadKind&&"scalar"!==t.loadKind)throw new Vt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(t.multi)throw new Vt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),n.forEach(function(t){if(!(t instanceof Gt))throw new Vt("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var i=Object.create(Kt.prototype);return i.implicit=(this.implicit||[]).concat(e),i.explicit=(this.explicit||[]).concat(n),i.compiledImplicit=Xt(i,"implicit"),i.compiledExplicit=Xt(i,"explicit"),i.compiledTypeMap=function(){var t,e,n={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function i(t){t.multi?(n.multi[t.kind].push(t),n.multi.fallback.push(t)):n[t.kind][t.tag]=n.fallback[t.tag]=t}for(t=0,e=arguments.length;t<e;t+=1)arguments[t].forEach(i);return n}(i.compiledImplicit,i.compiledExplicit),i};var Zt=Kt,Jt=new Gt("tag:yaml.org,2002:str",{kind:"scalar",construct:function(t){return null!==t?t:""}}),Qt=new Gt("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(t){return null!==t?t:[]}}),te=new Gt("tag:yaml.org,2002:map",{kind:"mapping",construct:function(t){return null!==t?t:{}}}),ee=new Zt({explicit:[Jt,Qt,te]});var ne=new Gt("tag:yaml.org,2002:null",{kind:"scalar",resolve:function(t){if(null===t)return!0;var e=t.length;return 1===e&&"~"===t||4===e&&("null"===t||"Null"===t||"NULL"===t)},construct:function(){return null},predicate:function(t){return null===t},represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});var ie=new Gt("tag:yaml.org,2002:bool",{kind:"scalar",resolve:function(t){if(null===t)return!1;var e=t.length;return 4===e&&("true"===t||"True"===t||"TRUE"===t)||5===e&&("false"===t||"False"===t||"FALSE"===t)},construct:function(t){return"true"===t||"True"===t||"TRUE"===t},predicate:function(t){return"[object Boolean]"===Object.prototype.toString.call(t)},represent:{lowercase:function(t){return t?"true":"false"},uppercase:function(t){return t?"TRUE":"FALSE"},camelcase:function(t){return t?"True":"False"}},defaultStyle:"lowercase"});function oe(t){return 48<=t&&t<=57||65<=t&&t<=70||97<=t&&t<=102}function se(t){return 48<=t&&t<=55}function re(t){return 48<=t&&t<=57}var ae=new Gt("tag:yaml.org,2002:int",{kind:"scalar",resolve:function(t){if(null===t)return!1;var e,n=t.length,i=0,o=!1;if(!n)return!1;if("-"!==(e=t[i])&&"+"!==e||(e=t[++i]),"0"===e){if(i+1===n)return!0;if("b"===(e=t[++i])){for(i++;i<n;i++)if("_"!==(e=t[i])){if("0"!==e&&"1"!==e)return!1;o=!0}return o&&"_"!==e}if("x"===e){for(i++;i<n;i++)if("_"!==(e=t[i])){if(!oe(t.charCodeAt(i)))return!1;o=!0}return o&&"_"!==e}if("o"===e){for(i++;i<n;i++)if("_"!==(e=t[i])){if(!se(t.charCodeAt(i)))return!1;o=!0}return o&&"_"!==e}}if("_"===e)return!1;for(;i<n;i++)if("_"!==(e=t[i])){if(!re(t.charCodeAt(i)))return!1;o=!0}return!(!o||"_"===e)},construct:function(t){var e,n=t,i=1;if(-1!==n.indexOf("_")&&(n=n.replace(/_/g,"")),"-"!==(e=n[0])&&"+"!==e||("-"===e&&(i=-1),e=(n=n.slice(1))[0]),"0"===n)return 0;if("0"===e){if("b"===n[1])return i*parseInt(n.slice(2),2);if("x"===n[1])return i*parseInt(n.slice(2),16);if("o"===n[1])return i*parseInt(n.slice(2),8)}return i*parseInt(n,10)},predicate:function(t){return"[object Number]"===Object.prototype.toString.call(t)&&t%1==0&&!zt.isNegativeZero(t)},represent:{binary:function(t){return t>=0?"0b"+t.toString(2):"-0b"+t.toString(2).slice(1)},octal:function(t){return t>=0?"0o"+t.toString(8):"-0o"+t.toString(8).slice(1)},decimal:function(t){return t.toString(10)},hexadecimal:function(t){return t>=0?"0x"+t.toString(16).toUpperCase():"-0x"+t.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),le=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");var ce=/^[-+]?[0-9]+e/;var he=new Gt("tag:yaml.org,2002:float",{kind:"scalar",resolve:function(t){return null!==t&&!(!le.test(t)||"_"===t[t.length-1])},construct:function(t){var e,n;return n="-"===(e=t.replace(/_/g,"").toLowerCase())[0]?-1:1,"+-".indexOf(e[0])>=0&&(e=e.slice(1)),".inf"===e?1===n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:".nan"===e?NaN:n*parseFloat(e,10)},predicate:function(t){return"[object Number]"===Object.prototype.toString.call(t)&&(t%1!=0||zt.isNegativeZero(t))},represent:function(t,e){var n;if(isNaN(t))switch(e){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===t)switch(e){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===t)switch(e){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(zt.isNegativeZero(t))return"-0.0";return n=t.toString(10),ce.test(n)?n.replace("e",".e"):n},defaultStyle:"lowercase"}),de=ee.extend({implicit:[ne,ie,ae,he]}),ue=de,pe=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),fe=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");var ge=new Gt("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:function(t){return null!==t&&(null!==pe.exec(t)||null!==fe.exec(t))},construct:function(t){var e,n,i,o,s,r,a,l,c=0,h=null;if(null===(e=pe.exec(t))&&(e=fe.exec(t)),null===e)throw new Error("Date resolve error");if(n=+e[1],i=+e[2]-1,o=+e[3],!e[4])return new Date(Date.UTC(n,i,o));if(s=+e[4],r=+e[5],a=+e[6],e[7]){for(c=e[7].slice(0,3);c.length<3;)c+="0";c=+c}return e[9]&&(h=6e4*(60*+e[10]+ +(e[11]||0)),"-"===e[9]&&(h=-h)),l=new Date(Date.UTC(n,i,o,s,r,a,c)),h&&l.setTime(l.getTime()-h),l},instanceOf:Date,represent:function(t){return t.toISOString()}});var me=new Gt("tag:yaml.org,2002:merge",{kind:"scalar",resolve:function(t){return"<<"===t||null===t}}),_e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";var be=new Gt("tag:yaml.org,2002:binary",{kind:"scalar",resolve:function(t){if(null===t)return!1;var e,n,i=0,o=t.length,s=_e;for(n=0;n<o;n++)if(!((e=s.indexOf(t.charAt(n)))>64)){if(e<0)return!1;i+=6}return i%8==0},construct:function(t){var e,n,i=t.replace(/[\r\n=]/g,""),o=i.length,s=_e,r=0,a=[];for(e=0;e<o;e++)e%4==0&&e&&(a.push(r>>16&255),a.push(r>>8&255),a.push(255&r)),r=r<<6|s.indexOf(i.charAt(e));return 0===(n=o%4*6)?(a.push(r>>16&255),a.push(r>>8&255),a.push(255&r)):18===n?(a.push(r>>10&255),a.push(r>>2&255)):12===n&&a.push(r>>4&255),new Uint8Array(a)},predicate:function(t){return"[object Uint8Array]"===Object.prototype.toString.call(t)},represent:function(t){var e,n,i="",o=0,s=t.length,r=_e;for(e=0;e<s;e++)e%3==0&&e&&(i+=r[o>>18&63],i+=r[o>>12&63],i+=r[o>>6&63],i+=r[63&o]),o=(o<<8)+t[e];return 0===(n=s%3)?(i+=r[o>>18&63],i+=r[o>>12&63],i+=r[o>>6&63],i+=r[63&o]):2===n?(i+=r[o>>10&63],i+=r[o>>4&63],i+=r[o<<2&63],i+=r[64]):1===n&&(i+=r[o>>2&63],i+=r[o<<4&63],i+=r[64],i+=r[64]),i}}),ve=Object.prototype.hasOwnProperty,ye=Object.prototype.toString;var we=new Gt("tag:yaml.org,2002:omap",{kind:"sequence",resolve:function(t){if(null===t)return!0;var e,n,i,o,s,r=[],a=t;for(e=0,n=a.length;e<n;e+=1){if(i=a[e],s=!1,"[object Object]"!==ye.call(i))return!1;for(o in i)if(ve.call(i,o)){if(s)return!1;s=!0}if(!s)return!1;if(-1!==r.indexOf(o))return!1;r.push(o)}return!0},construct:function(t){return null!==t?t:[]}}),xe=Object.prototype.toString;var $e=new Gt("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:function(t){if(null===t)return!0;var e,n,i,o,s,r=t;for(s=new Array(r.length),e=0,n=r.length;e<n;e+=1){if(i=r[e],"[object Object]"!==xe.call(i))return!1;if(1!==(o=Object.keys(i)).length)return!1;s[e]=[o[0],i[o[0]]]}return!0},construct:function(t){if(null===t)return[];var e,n,i,o,s,r=t;for(s=new Array(r.length),e=0,n=r.length;e<n;e+=1)i=r[e],o=Object.keys(i),s[e]=[o[0],i[o[0]]];return s}}),Ae=Object.prototype.hasOwnProperty;var Ce=new Gt("tag:yaml.org,2002:set",{kind:"mapping",resolve:function(t){if(null===t)return!0;var e,n=t;for(e in n)if(Ae.call(n,e)&&null!==n[e])return!1;return!0},construct:function(t){return null!==t?t:{}}}),ke=ue.extend({implicit:[ge,me],explicit:[be,we,$e,Ce]}),Ee=Object.prototype.hasOwnProperty,Se=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Te=/[\x85\u2028\u2029]/,Oe=/[,\[\]\{\}]/,je=/^(?:!|!!|![a-z\-]+!)$/i,Me=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function Pe(t){return Object.prototype.toString.call(t)}function Ie(t){return 10===t||13===t}function Fe(t){return 9===t||32===t}function Le(t){return 9===t||32===t||10===t||13===t}function Ue(t){return 44===t||91===t||93===t||123===t||125===t}function Ne(t){var e;return 48<=t&&t<=57?t-48:97<=(e=32|t)&&e<=102?e-97+10:-1}function ze(t){return 120===t?2:117===t?4:85===t?8:0}function De(t){return 48<=t&&t<=57?t-48:-1}function Re(t){return 48===t?"\0":97===t?"":98===t?"\b":116===t||9===t?"\t":110===t?"\n":118===t?"\v":102===t?"\f":114===t?"\r":101===t?"":32===t?" ":34===t?'"':47===t?"/":92===t?"\\":78===t?"":95===t?" ":76===t?"\u2028":80===t?"\u2029":""}function Ve(t){return t<=65535?String.fromCharCode(t):String.fromCharCode(55296+(t-65536>>10),56320+(t-65536&1023))}for(var He=new Array(256),Ye=new Array(256),We=0;We<256;We++)He[We]=Re(We)?1:0,Ye[We]=Re(We);function Be(t,e){this.input=t,this.filename=e.filename||null,this.schema=e.schema||ke,this.onWarning=e.onWarning||null,this.legacy=e.legacy||!1,this.json=e.json||!1,this.listener=e.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=t.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function qe(t,e){var n={name:t.filename,buffer:t.input.slice(0,-1),position:t.position,line:t.line,column:t.position-t.lineStart};return n.snippet=Wt(n),new Vt(e,n)}function Ge(t,e){throw qe(t,e)}function Xe(t,e){t.onWarning&&t.onWarning.call(null,qe(t,e))}var Ke={YAML:function(t,e,n){var i,o,s;null!==t.version&&Ge(t,"duplication of %YAML directive"),1!==n.length&&Ge(t,"YAML directive accepts exactly one argument"),null===(i=/^([0-9]+)\.([0-9]+)$/.exec(n[0]))&&Ge(t,"ill-formed argument of the YAML directive"),o=parseInt(i[1],10),s=parseInt(i[2],10),1!==o&&Ge(t,"unacceptable YAML version of the document"),t.version=n[0],t.checkLineBreaks=s<2,1!==s&&2!==s&&Xe(t,"unsupported YAML version of the document")},TAG:function(t,e,n){var i,o;2!==n.length&&Ge(t,"TAG directive accepts exactly two arguments"),i=n[0],o=n[1],je.test(i)||Ge(t,"ill-formed tag handle (first argument) of the TAG directive"),Ee.call(t.tagMap,i)&&Ge(t,'there is a previously declared suffix for "'+i+'" tag handle'),Me.test(o)||Ge(t,"ill-formed tag prefix (second argument) of the TAG directive");try{o=decodeURIComponent(o)}catch(e){Ge(t,"tag prefix is malformed: "+o)}t.tagMap[i]=o}};function Ze(t,e,n,i){var o,s,r,a;if(e<n){if(a=t.input.slice(e,n),i)for(o=0,s=a.length;o<s;o+=1)9===(r=a.charCodeAt(o))||32<=r&&r<=1114111||Ge(t,"expected valid JSON character");else Se.test(a)&&Ge(t,"the stream contains non-printable characters");t.result+=a}}function Je(t,e,n,i){var o,s,r,a;for(zt.isObject(n)||Ge(t,"cannot merge mappings; the provided source object is unacceptable"),r=0,a=(o=Object.keys(n)).length;r<a;r+=1)s=o[r],Ee.call(e,s)||(e[s]=n[s],i[s]=!0)}function Qe(t,e,n,i,o,s,r,a,l){var c,h;if(Array.isArray(o))for(c=0,h=(o=Array.prototype.slice.call(o)).length;c<h;c+=1)Array.isArray(o[c])&&Ge(t,"nested arrays are not supported inside keys"),"object"==typeof o&&"[object Object]"===Pe(o[c])&&(o[c]="[object Object]");if("object"==typeof o&&"[object Object]"===Pe(o)&&(o="[object Object]"),o=String(o),null===e&&(e={}),"tag:yaml.org,2002:merge"===i)if(Array.isArray(s))for(c=0,h=s.length;c<h;c+=1)Je(t,e,s[c],n);else Je(t,e,s,n);else t.json||Ee.call(n,o)||!Ee.call(e,o)||(t.line=r||t.line,t.lineStart=a||t.lineStart,t.position=l||t.position,Ge(t,"duplicated mapping key")),"__proto__"===o?Object.defineProperty(e,o,{configurable:!0,enumerable:!0,writable:!0,value:s}):e[o]=s,delete n[o];return e}function tn(t){var e;10===(e=t.input.charCodeAt(t.position))?t.position++:13===e?(t.position++,10===t.input.charCodeAt(t.position)&&t.position++):Ge(t,"a line break is expected"),t.line+=1,t.lineStart=t.position,t.firstTabInLine=-1}function en(t,e,n){for(var i=0,o=t.input.charCodeAt(t.position);0!==o;){for(;Fe(o);)9===o&&-1===t.firstTabInLine&&(t.firstTabInLine=t.position),o=t.input.charCodeAt(++t.position);if(e&&35===o)do{o=t.input.charCodeAt(++t.position)}while(10!==o&&13!==o&&0!==o);if(!Ie(o))break;for(tn(t),o=t.input.charCodeAt(t.position),i++,t.lineIndent=0;32===o;)t.lineIndent++,o=t.input.charCodeAt(++t.position)}return-1!==n&&0!==i&&t.lineIndent<n&&Xe(t,"deficient indentation"),i}function nn(t){var e,n=t.position;return!(45!==(e=t.input.charCodeAt(n))&&46!==e||e!==t.input.charCodeAt(n+1)||e!==t.input.charCodeAt(n+2)||(n+=3,0!==(e=t.input.charCodeAt(n))&&!Le(e)))}function on(t,e){1===e?t.result+=" ":e>1&&(t.result+=zt.repeat("\n",e-1))}function sn(t,e){var n,i,o=t.tag,s=t.anchor,r=[],a=!1;if(-1!==t.firstTabInLine)return!1;for(null!==t.anchor&&(t.anchorMap[t.anchor]=r),i=t.input.charCodeAt(t.position);0!==i&&(-1!==t.firstTabInLine&&(t.position=t.firstTabInLine,Ge(t,"tab characters must not be used in indentation")),45===i)&&Le(t.input.charCodeAt(t.position+1));)if(a=!0,t.position++,en(t,!0,-1)&&t.lineIndent<=e)r.push(null),i=t.input.charCodeAt(t.position);else if(n=t.line,ln(t,e,3,!1,!0),r.push(t.result),en(t,!0,-1),i=t.input.charCodeAt(t.position),(t.line===n||t.lineIndent>e)&&0!==i)Ge(t,"bad indentation of a sequence entry");else if(t.lineIndent<e)break;return!!a&&(t.tag=o,t.anchor=s,t.kind="sequence",t.result=r,!0)}function rn(t){var e,n,i,o,s=!1,r=!1;if(33!==(o=t.input.charCodeAt(t.position)))return!1;if(null!==t.tag&&Ge(t,"duplication of a tag property"),60===(o=t.input.charCodeAt(++t.position))?(s=!0,o=t.input.charCodeAt(++t.position)):33===o?(r=!0,n="!!",o=t.input.charCodeAt(++t.position)):n="!",e=t.position,s){do{o=t.input.charCodeAt(++t.position)}while(0!==o&&62!==o);t.position<t.length?(i=t.input.slice(e,t.position),o=t.input.charCodeAt(++t.position)):Ge(t,"unexpected end of the stream within a verbatim tag")}else{for(;0!==o&&!Le(o);)33===o&&(r?Ge(t,"tag suffix cannot contain exclamation marks"):(n=t.input.slice(e-1,t.position+1),je.test(n)||Ge(t,"named tag handle cannot contain such characters"),r=!0,e=t.position+1)),o=t.input.charCodeAt(++t.position);i=t.input.slice(e,t.position),Oe.test(i)&&Ge(t,"tag suffix cannot contain flow indicator characters")}i&&!Me.test(i)&&Ge(t,"tag name cannot contain such characters: "+i);try{i=decodeURIComponent(i)}catch(e){Ge(t,"tag name is malformed: "+i)}return s?t.tag=i:Ee.call(t.tagMap,n)?t.tag=t.tagMap[n]+i:"!"===n?t.tag="!"+i:"!!"===n?t.tag="tag:yaml.org,2002:"+i:Ge(t,'undeclared tag handle "'+n+'"'),!0}function an(t){var e,n;if(38!==(n=t.input.charCodeAt(t.position)))return!1;for(null!==t.anchor&&Ge(t,"duplication of an anchor property"),n=t.input.charCodeAt(++t.position),e=t.position;0!==n&&!Le(n)&&!Ue(n);)n=t.input.charCodeAt(++t.position);return t.position===e&&Ge(t,"name of an anchor node must contain at least one character"),t.anchor=t.input.slice(e,t.position),!0}function ln(t,e,n,i,o){var s,r,a,l,c,h,d,u,p,f=1,g=!1,m=!1;if(null!==t.listener&&t.listener("open",t),t.tag=null,t.anchor=null,t.kind=null,t.result=null,s=r=a=4===n||3===n,i&&en(t,!0,-1)&&(g=!0,t.lineIndent>e?f=1:t.lineIndent===e?f=0:t.lineIndent<e&&(f=-1)),1===f)for(;rn(t)||an(t);)en(t,!0,-1)?(g=!0,a=s,t.lineIndent>e?f=1:t.lineIndent===e?f=0:t.lineIndent<e&&(f=-1)):a=!1;if(a&&(a=g||o),1!==f&&4!==n||(u=1===n||2===n?e:e+1,p=t.position-t.lineStart,1===f?a&&(sn(t,p)||function(t,e,n){var i,o,s,r,a,l,c,h=t.tag,d=t.anchor,u={},p=Object.create(null),f=null,g=null,m=null,_=!1,b=!1;if(-1!==t.firstTabInLine)return!1;for(null!==t.anchor&&(t.anchorMap[t.anchor]=u),c=t.input.charCodeAt(t.position);0!==c;){if(_||-1===t.firstTabInLine||(t.position=t.firstTabInLine,Ge(t,"tab characters must not be used in indentation")),i=t.input.charCodeAt(t.position+1),s=t.line,63!==c&&58!==c||!Le(i)){if(r=t.line,a=t.lineStart,l=t.position,!ln(t,n,2,!1,!0))break;if(t.line===s){for(c=t.input.charCodeAt(t.position);Fe(c);)c=t.input.charCodeAt(++t.position);if(58===c)Le(c=t.input.charCodeAt(++t.position))||Ge(t,"a whitespace character is expected after the key-value separator within a block mapping"),_&&(Qe(t,u,p,f,g,null,r,a,l),f=g=m=null),b=!0,_=!1,o=!1,f=t.tag,g=t.result;else{if(!b)return t.tag=h,t.anchor=d,!0;Ge(t,"can not read an implicit mapping pair; a colon is missed")}}else{if(!b)return t.tag=h,t.anchor=d,!0;Ge(t,"can not read a block mapping entry; a multiline key may not be an implicit key")}}else 63===c?(_&&(Qe(t,u,p,f,g,null,r,a,l),f=g=m=null),b=!0,_=!0,o=!0):_?(_=!1,o=!0):Ge(t,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),t.position+=1,c=i;if((t.line===s||t.lineIndent>e)&&(_&&(r=t.line,a=t.lineStart,l=t.position),ln(t,e,4,!0,o)&&(_?g=t.result:m=t.result),_||(Qe(t,u,p,f,g,m,r,a,l),f=g=m=null),en(t,!0,-1),c=t.input.charCodeAt(t.position)),(t.line===s||t.lineIndent>e)&&0!==c)Ge(t,"bad indentation of a mapping entry");else if(t.lineIndent<e)break}return _&&Qe(t,u,p,f,g,null,r,a,l),b&&(t.tag=h,t.anchor=d,t.kind="mapping",t.result=u),b}(t,p,u))||function(t,e){var n,i,o,s,r,a,l,c,h,d,u,p,f=!0,g=t.tag,m=t.anchor,_=Object.create(null);if(91===(p=t.input.charCodeAt(t.position)))r=93,c=!1,s=[];else{if(123!==p)return!1;r=125,c=!0,s={}}for(null!==t.anchor&&(t.anchorMap[t.anchor]=s),p=t.input.charCodeAt(++t.position);0!==p;){if(en(t,!0,e),(p=t.input.charCodeAt(t.position))===r)return t.position++,t.tag=g,t.anchor=m,t.kind=c?"mapping":"sequence",t.result=s,!0;f?44===p&&Ge(t,"expected the node content, but found ','"):Ge(t,"missed comma between flow collection entries"),u=null,a=l=!1,63===p&&Le(t.input.charCodeAt(t.position+1))&&(a=l=!0,t.position++,en(t,!0,e)),n=t.line,i=t.lineStart,o=t.position,ln(t,e,1,!1,!0),d=t.tag,h=t.result,en(t,!0,e),p=t.input.charCodeAt(t.position),!l&&t.line!==n||58!==p||(a=!0,p=t.input.charCodeAt(++t.position),en(t,!0,e),ln(t,e,1,!1,!0),u=t.result),c?Qe(t,s,_,d,h,u,n,i,o):a?s.push(Qe(t,null,_,d,h,u,n,i,o)):s.push(h),en(t,!0,e),44===(p=t.input.charCodeAt(t.position))?(f=!0,p=t.input.charCodeAt(++t.position)):f=!1}Ge(t,"unexpected end of the stream within a flow collection")}(t,u)?m=!0:(r&&function(t,e){var n,i,o,s,r=1,a=!1,l=!1,c=e,h=0,d=!1;if(124===(s=t.input.charCodeAt(t.position)))i=!1;else{if(62!==s)return!1;i=!0}for(t.kind="scalar",t.result="";0!==s;)if(43===(s=t.input.charCodeAt(++t.position))||45===s)1===r?r=43===s?3:2:Ge(t,"repeat of a chomping mode identifier");else{if(!((o=De(s))>=0))break;0===o?Ge(t,"bad explicit indentation width of a block scalar; it cannot be less than one"):l?Ge(t,"repeat of an indentation width identifier"):(c=e+o-1,l=!0)}if(Fe(s)){do{s=t.input.charCodeAt(++t.position)}while(Fe(s));if(35===s)do{s=t.input.charCodeAt(++t.position)}while(!Ie(s)&&0!==s)}for(;0!==s;){for(tn(t),t.lineIndent=0,s=t.input.charCodeAt(t.position);(!l||t.lineIndent<c)&&32===s;)t.lineIndent++,s=t.input.charCodeAt(++t.position);if(!l&&t.lineIndent>c&&(c=t.lineIndent),Ie(s))h++;else{if(t.lineIndent<c){3===r?t.result+=zt.repeat("\n",a?1+h:h):1===r&&a&&(t.result+="\n");break}for(i?Fe(s)?(d=!0,t.result+=zt.repeat("\n",a?1+h:h)):d?(d=!1,t.result+=zt.repeat("\n",h+1)):0===h?a&&(t.result+=" "):t.result+=zt.repeat("\n",h):t.result+=zt.repeat("\n",a?1+h:h),a=!0,l=!0,h=0,n=t.position;!Ie(s)&&0!==s;)s=t.input.charCodeAt(++t.position);Ze(t,n,t.position,!1)}}return!0}(t,u)||function(t,e){var n,i,o;if(39!==(n=t.input.charCodeAt(t.position)))return!1;for(t.kind="scalar",t.result="",t.position++,i=o=t.position;0!==(n=t.input.charCodeAt(t.position));)if(39===n){if(Ze(t,i,t.position,!0),39!==(n=t.input.charCodeAt(++t.position)))return!0;i=t.position,t.position++,o=t.position}else Ie(n)?(Ze(t,i,o,!0),on(t,en(t,!1,e)),i=o=t.position):t.position===t.lineStart&&nn(t)?Ge(t,"unexpected end of the document within a single quoted scalar"):(t.position++,o=t.position);Ge(t,"unexpected end of the stream within a single quoted scalar")}(t,u)||function(t,e){var n,i,o,s,r,a;if(34!==(a=t.input.charCodeAt(t.position)))return!1;for(t.kind="scalar",t.result="",t.position++,n=i=t.position;0!==(a=t.input.charCodeAt(t.position));){if(34===a)return Ze(t,n,t.position,!0),t.position++,!0;if(92===a){if(Ze(t,n,t.position,!0),Ie(a=t.input.charCodeAt(++t.position)))en(t,!1,e);else if(a<256&&He[a])t.result+=Ye[a],t.position++;else if((r=ze(a))>0){for(o=r,s=0;o>0;o--)(r=Ne(a=t.input.charCodeAt(++t.position)))>=0?s=(s<<4)+r:Ge(t,"expected hexadecimal character");t.result+=Ve(s),t.position++}else Ge(t,"unknown escape sequence");n=i=t.position}else Ie(a)?(Ze(t,n,i,!0),on(t,en(t,!1,e)),n=i=t.position):t.position===t.lineStart&&nn(t)?Ge(t,"unexpected end of the document within a double quoted scalar"):(t.position++,i=t.position)}Ge(t,"unexpected end of the stream within a double quoted scalar")}(t,u)?m=!0:!function(t){var e,n,i;if(42!==(i=t.input.charCodeAt(t.position)))return!1;for(i=t.input.charCodeAt(++t.position),e=t.position;0!==i&&!Le(i)&&!Ue(i);)i=t.input.charCodeAt(++t.position);return t.position===e&&Ge(t,"name of an alias node must contain at least one character"),n=t.input.slice(e,t.position),Ee.call(t.anchorMap,n)||Ge(t,'unidentified alias "'+n+'"'),t.result=t.anchorMap[n],en(t,!0,-1),!0}(t)?function(t,e,n){var i,o,s,r,a,l,c,h,d=t.kind,u=t.result;if(Le(h=t.input.charCodeAt(t.position))||Ue(h)||35===h||38===h||42===h||33===h||124===h||62===h||39===h||34===h||37===h||64===h||96===h)return!1;if((63===h||45===h)&&(Le(i=t.input.charCodeAt(t.position+1))||n&&Ue(i)))return!1;for(t.kind="scalar",t.result="",o=s=t.position,r=!1;0!==h;){if(58===h){if(Le(i=t.input.charCodeAt(t.position+1))||n&&Ue(i))break}else if(35===h){if(Le(t.input.charCodeAt(t.position-1)))break}else{if(t.position===t.lineStart&&nn(t)||n&&Ue(h))break;if(Ie(h)){if(a=t.line,l=t.lineStart,c=t.lineIndent,en(t,!1,-1),t.lineIndent>=e){r=!0,h=t.input.charCodeAt(t.position);continue}t.position=s,t.line=a,t.lineStart=l,t.lineIndent=c;break}}r&&(Ze(t,o,s,!1),on(t,t.line-a),o=s=t.position,r=!1),Fe(h)||(s=t.position+1),h=t.input.charCodeAt(++t.position)}return Ze(t,o,s,!1),!!t.result||(t.kind=d,t.result=u,!1)}(t,u,1===n)&&(m=!0,null===t.tag&&(t.tag="?")):(m=!0,null===t.tag&&null===t.anchor||Ge(t,"alias node should not have any properties")),null!==t.anchor&&(t.anchorMap[t.anchor]=t.result)):0===f&&(m=a&&sn(t,p))),null===t.tag)null!==t.anchor&&(t.anchorMap[t.anchor]=t.result);else if("?"===t.tag){for(null!==t.result&&"scalar"!==t.kind&&Ge(t,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+t.kind+'"'),l=0,c=t.implicitTypes.length;l<c;l+=1)if((d=t.implicitTypes[l]).resolve(t.result)){t.result=d.construct(t.result),t.tag=d.tag,null!==t.anchor&&(t.anchorMap[t.anchor]=t.result);break}}else if("!"!==t.tag){if(Ee.call(t.typeMap[t.kind||"fallback"],t.tag))d=t.typeMap[t.kind||"fallback"][t.tag];else for(d=null,l=0,c=(h=t.typeMap.multi[t.kind||"fallback"]).length;l<c;l+=1)if(t.tag.slice(0,h[l].tag.length)===h[l].tag){d=h[l];break}d||Ge(t,"unknown tag !<"+t.tag+">"),null!==t.result&&d.kind!==t.kind&&Ge(t,"unacceptable node kind for !<"+t.tag+'> tag; it should be "'+d.kind+'", not "'+t.kind+'"'),d.resolve(t.result,t.tag)?(t.result=d.construct(t.result,t.tag),null!==t.anchor&&(t.anchorMap[t.anchor]=t.result)):Ge(t,"cannot resolve a node with !<"+t.tag+"> explicit tag")}return null!==t.listener&&t.listener("close",t),null!==t.tag||null!==t.anchor||m}function cn(t){var e,n,i,o,s=t.position,r=!1;for(t.version=null,t.checkLineBreaks=t.legacy,t.tagMap=Object.create(null),t.anchorMap=Object.create(null);0!==(o=t.input.charCodeAt(t.position))&&(en(t,!0,-1),o=t.input.charCodeAt(t.position),!(t.lineIndent>0||37!==o));){for(r=!0,o=t.input.charCodeAt(++t.position),e=t.position;0!==o&&!Le(o);)o=t.input.charCodeAt(++t.position);for(i=[],(n=t.input.slice(e,t.position)).length<1&&Ge(t,"directive name must not be less than one character in length");0!==o;){for(;Fe(o);)o=t.input.charCodeAt(++t.position);if(35===o){do{o=t.input.charCodeAt(++t.position)}while(0!==o&&!Ie(o));break}if(Ie(o))break;for(e=t.position;0!==o&&!Le(o);)o=t.input.charCodeAt(++t.position);i.push(t.input.slice(e,t.position))}0!==o&&tn(t),Ee.call(Ke,n)?Ke[n](t,n,i):Xe(t,'unknown document directive "'+n+'"')}en(t,!0,-1),0===t.lineIndent&&45===t.input.charCodeAt(t.position)&&45===t.input.charCodeAt(t.position+1)&&45===t.input.charCodeAt(t.position+2)?(t.position+=3,en(t,!0,-1)):r&&Ge(t,"directives end mark is expected"),ln(t,t.lineIndent-1,4,!1,!0),en(t,!0,-1),t.checkLineBreaks&&Te.test(t.input.slice(s,t.position))&&Xe(t,"non-ASCII line breaks are interpreted as content"),t.documents.push(t.result),t.position===t.lineStart&&nn(t)?46===t.input.charCodeAt(t.position)&&(t.position+=3,en(t,!0,-1)):t.position<t.length-1&&Ge(t,"end of the stream or a document separator is expected")}function hn(t,e){e=e||{},0!==(t=String(t)).length&&(10!==t.charCodeAt(t.length-1)&&13!==t.charCodeAt(t.length-1)&&(t+="\n"),65279===t.charCodeAt(0)&&(t=t.slice(1)));var n=new Be(t,e),i=t.indexOf("\0");for(-1!==i&&(n.position=i,Ge(n,"null byte is not allowed in input")),n.input+="\0";32===n.input.charCodeAt(n.position);)n.lineIndent+=1,n.position+=1;for(;n.position<n.length-1;)cn(n);return n.documents}var dn={loadAll:function(t,e,n){null!==e&&"object"==typeof e&&void 0===n&&(n=e,e=null);var i=hn(t,n);if("function"!=typeof e)return i;for(var o=0,s=i.length;o<s;o+=1)e(i[o])},load:function(t,e){var n=hn(t,e);if(0!==n.length){if(1===n.length)return n[0];throw new Vt("expected a single document in the stream, but found more")}}},un=Object.prototype.toString,pn=Object.prototype.hasOwnProperty,fn=65279,gn={0:"\\0",7:"\\a",8:"\\b",9:"\\t",10:"\\n",11:"\\v",12:"\\f",13:"\\r",27:"\\e",34:'\\"',92:"\\\\",133:"\\N",160:"\\_",8232:"\\L",8233:"\\P"},mn=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],_n=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function bn(t){var e,n,i;if(e=t.toString(16).toUpperCase(),t<=255)n="x",i=2;else if(t<=65535)n="u",i=4;else{if(!(t<=4294967295))throw new Vt("code point within a string may not be greater than 0xFFFFFFFF");n="U",i=8}return"\\"+n+zt.repeat("0",i-e.length)+e}function vn(t){this.schema=t.schema||ke,this.indent=Math.max(1,t.indent||2),this.noArrayIndent=t.noArrayIndent||!1,this.skipInvalid=t.skipInvalid||!1,this.flowLevel=zt.isNothing(t.flowLevel)?-1:t.flowLevel,this.styleMap=function(t,e){var n,i,o,s,r,a,l;if(null===e)return{};for(n={},o=0,s=(i=Object.keys(e)).length;o<s;o+=1)r=i[o],a=String(e[r]),"!!"===r.slice(0,2)&&(r="tag:yaml.org,2002:"+r.slice(2)),(l=t.compiledTypeMap.fallback[r])&&pn.call(l.styleAliases,a)&&(a=l.styleAliases[a]),n[r]=a;return n}(this.schema,t.styles||null),this.sortKeys=t.sortKeys||!1,this.lineWidth=t.lineWidth||80,this.noRefs=t.noRefs||!1,this.noCompatMode=t.noCompatMode||!1,this.condenseFlow=t.condenseFlow||!1,this.quotingType='"'===t.quotingType?2:1,this.forceQuotes=t.forceQuotes||!1,this.replacer="function"==typeof t.replacer?t.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function yn(t,e){for(var n,i=zt.repeat(" ",e),o=0,s=-1,r="",a=t.length;o<a;)-1===(s=t.indexOf("\n",o))?(n=t.slice(o),o=a):(n=t.slice(o,s+1),o=s+1),n.length&&"\n"!==n&&(r+=i),r+=n;return r}function wn(t,e){return"\n"+zt.repeat(" ",t.indent*e)}function xn(t){return 32===t||9===t}function $n(t){return 32<=t&&t<=126||161<=t&&t<=55295&&8232!==t&&8233!==t||57344<=t&&t<=65533&&t!==fn||65536<=t&&t<=1114111}function An(t){return $n(t)&&t!==fn&&13!==t&&10!==t}function Cn(t,e,n){var i=An(t),o=i&&!xn(t);return(n?i:i&&44!==t&&91!==t&&93!==t&&123!==t&&125!==t)&&35!==t&&!(58===e&&!o)||An(e)&&!xn(e)&&35===t||58===e&&o}function kn(t,e){var n,i=t.charCodeAt(e);return i>=55296&&i<=56319&&e+1<t.length&&(n=t.charCodeAt(e+1))>=56320&&n<=57343?1024*(i-55296)+n-56320+65536:i}function En(t){return/^\n* /.test(t)}function Sn(t,e,n,i,o,s,r,a){var l,c=0,h=null,d=!1,u=!1,p=-1!==i,f=-1,g=function(t){return $n(t)&&t!==fn&&!xn(t)&&45!==t&&63!==t&&58!==t&&44!==t&&91!==t&&93!==t&&123!==t&&125!==t&&35!==t&&38!==t&&42!==t&&33!==t&&124!==t&&61!==t&&62!==t&&39!==t&&34!==t&&37!==t&&64!==t&&96!==t}(kn(t,0))&&function(t){return!xn(t)&&58!==t}(kn(t,t.length-1));if(e||r)for(l=0;l<t.length;c>=65536?l+=2:l++){if(!$n(c=kn(t,l)))return 5;g=g&&Cn(c,h,a),h=c}else{for(l=0;l<t.length;c>=65536?l+=2:l++){if(10===(c=kn(t,l)))d=!0,p&&(u=u||l-f-1>i&&" "!==t[f+1],f=l);else if(!$n(c))return 5;g=g&&Cn(c,h,a),h=c}u=u||p&&l-f-1>i&&" "!==t[f+1]}return d||u?n>9&&En(t)?5:r?2===s?5:2:u?4:3:!g||r||o(t)?2===s?5:2:1}function Tn(t,e,n,i,o){t.dump=function(){if(0===e.length)return 2===t.quotingType?'""':"''";if(!t.noCompatMode&&(-1!==mn.indexOf(e)||_n.test(e)))return 2===t.quotingType?'"'+e+'"':"'"+e+"'";var s=t.indent*Math.max(1,n),r=-1===t.lineWidth?-1:Math.max(Math.min(t.lineWidth,40),t.lineWidth-s),a=i||t.flowLevel>-1&&n>=t.flowLevel;switch(Sn(e,a,t.indent,r,function(e){return function(t,e){var n,i;for(n=0,i=t.implicitTypes.length;n<i;n+=1)if(t.implicitTypes[n].resolve(e))return!0;return!1}(t,e)},t.quotingType,t.forceQuotes&&!i,o)){case 1:return e;case 2:return"'"+e.replace(/'/g,"''")+"'";case 3:return"|"+On(e,t.indent)+jn(yn(e,s));case 4:return">"+On(e,t.indent)+jn(yn(function(t,e){var n,i,o=/(\n+)([^\n]*)/g,s=(a=t.indexOf("\n"),a=-1!==a?a:t.length,o.lastIndex=a,Mn(t.slice(0,a),e)),r="\n"===t[0]||" "===t[0];var a;for(;i=o.exec(t);){var l=i[1],c=i[2];n=" "===c[0],s+=l+(r||n||""===c?"":"\n")+Mn(c,e),r=n}return s}(e,r),s));case 5:return'"'+function(t){for(var e,n="",i=0,o=0;o<t.length;i>=65536?o+=2:o++)i=kn(t,o),!(e=gn[i])&&$n(i)?(n+=t[o],i>=65536&&(n+=t[o+1])):n+=e||bn(i);return n}(e)+'"';default:throw new Vt("impossible error: invalid scalar style")}}()}function On(t,e){var n=En(t)?String(e):"",i="\n"===t[t.length-1];return n+(i&&("\n"===t[t.length-2]||"\n"===t)?"+":i?"":"-")+"\n"}function jn(t){return"\n"===t[t.length-1]?t.slice(0,-1):t}function Mn(t,e){if(""===t||" "===t[0])return t;for(var n,i,o=/ [^ ]/g,s=0,r=0,a=0,l="";n=o.exec(t);)(a=n.index)-s>e&&(i=r>s?r:a,l+="\n"+t.slice(s,i),s=i+1),r=a;return l+="\n",t.length-s>e&&r>s?l+=t.slice(s,r)+"\n"+t.slice(r+1):l+=t.slice(s),l.slice(1)}function Pn(t,e,n,i){var o,s,r,a="",l=t.tag;for(o=0,s=n.length;o<s;o+=1)r=n[o],t.replacer&&(r=t.replacer.call(n,String(o),r)),(Fn(t,e+1,r,!0,!0,!1,!0)||void 0===r&&Fn(t,e+1,null,!0,!0,!1,!0))&&(i&&""===a||(a+=wn(t,e)),t.dump&&10===t.dump.charCodeAt(0)?a+="-":a+="- ",a+=t.dump);t.tag=l,t.dump=a||"[]"}function In(t,e,n){var i,o,s,r,a,l;for(s=0,r=(o=n?t.explicitTypes:t.implicitTypes).length;s<r;s+=1)if(((a=o[s]).instanceOf||a.predicate)&&(!a.instanceOf||"object"==typeof e&&e instanceof a.instanceOf)&&(!a.predicate||a.predicate(e))){if(n?a.multi&&a.representName?t.tag=a.representName(e):t.tag=a.tag:t.tag="?",a.represent){if(l=t.styleMap[a.tag]||a.defaultStyle,"[object Function]"===un.call(a.represent))i=a.represent(e,l);else{if(!pn.call(a.represent,l))throw new Vt("!<"+a.tag+'> tag resolver accepts not "'+l+'" style');i=a.represent[l](e,l)}t.dump=i}return!0}return!1}function Fn(t,e,n,i,o,s,r){t.tag=null,t.dump=n,In(t,n,!1)||In(t,n,!0);var a,l=un.call(t.dump),c=i;i&&(i=t.flowLevel<0||t.flowLevel>e);var h,d,u="[object Object]"===l||"[object Array]"===l;if(u&&(d=-1!==(h=t.duplicates.indexOf(n))),(null!==t.tag&&"?"!==t.tag||d||2!==t.indent&&e>0)&&(o=!1),d&&t.usedDuplicates[h])t.dump="*ref_"+h;else{if(u&&d&&!t.usedDuplicates[h]&&(t.usedDuplicates[h]=!0),"[object Object]"===l)i&&0!==Object.keys(t.dump).length?(!function(t,e,n,i){var o,s,r,a,l,c,h="",d=t.tag,u=Object.keys(n);if(!0===t.sortKeys)u.sort();else if("function"==typeof t.sortKeys)u.sort(t.sortKeys);else if(t.sortKeys)throw new Vt("sortKeys must be a boolean or a function");for(o=0,s=u.length;o<s;o+=1)c="",i&&""===h||(c+=wn(t,e)),a=n[r=u[o]],t.replacer&&(a=t.replacer.call(n,r,a)),Fn(t,e+1,r,!0,!0,!0)&&((l=null!==t.tag&&"?"!==t.tag||t.dump&&t.dump.length>1024)&&(t.dump&&10===t.dump.charCodeAt(0)?c+="?":c+="? "),c+=t.dump,l&&(c+=wn(t,e)),Fn(t,e+1,a,!0,l)&&(t.dump&&10===t.dump.charCodeAt(0)?c+=":":c+=": ",h+=c+=t.dump));t.tag=d,t.dump=h||"{}"}(t,e,t.dump,o),d&&(t.dump="&ref_"+h+t.dump)):(!function(t,e,n){var i,o,s,r,a,l="",c=t.tag,h=Object.keys(n);for(i=0,o=h.length;i<o;i+=1)a="",""!==l&&(a+=", "),t.condenseFlow&&(a+='"'),r=n[s=h[i]],t.replacer&&(r=t.replacer.call(n,s,r)),Fn(t,e,s,!1,!1)&&(t.dump.length>1024&&(a+="? "),a+=t.dump+(t.condenseFlow?'"':"")+":"+(t.condenseFlow?"":" "),Fn(t,e,r,!1,!1)&&(l+=a+=t.dump));t.tag=c,t.dump="{"+l+"}"}(t,e,t.dump),d&&(t.dump="&ref_"+h+" "+t.dump));else if("[object Array]"===l)i&&0!==t.dump.length?(t.noArrayIndent&&!r&&e>0?Pn(t,e-1,t.dump,o):Pn(t,e,t.dump,o),d&&(t.dump="&ref_"+h+t.dump)):(!function(t,e,n){var i,o,s,r="",a=t.tag;for(i=0,o=n.length;i<o;i+=1)s=n[i],t.replacer&&(s=t.replacer.call(n,String(i),s)),(Fn(t,e,s,!1,!1)||void 0===s&&Fn(t,e,null,!1,!1))&&(""!==r&&(r+=","+(t.condenseFlow?"":" ")),r+=t.dump);t.tag=a,t.dump="["+r+"]"}(t,e,t.dump),d&&(t.dump="&ref_"+h+" "+t.dump));else{if("[object String]"!==l){if("[object Undefined]"===l)return!1;if(t.skipInvalid)return!1;throw new Vt("unacceptable kind of an object to dump "+l)}"?"!==t.tag&&Tn(t,t.dump,e,s,c)}null!==t.tag&&"?"!==t.tag&&(a=encodeURI("!"===t.tag[0]?t.tag.slice(1):t.tag).replace(/!/g,"%21"),a="!"===t.tag[0]?"!"+a:"tag:yaml.org,2002:"===a.slice(0,18)?"!!"+a.slice(18):"!<"+a+">",t.dump=a+" "+t.dump)}return!0}function Ln(t,e){var n,i,o=[],s=[];for(Un(t,o,s),n=0,i=s.length;n<i;n+=1)e.duplicates.push(o[s[n]]);e.usedDuplicates=new Array(i)}function Un(t,e,n){var i,o,s;if(null!==t&&"object"==typeof t)if(-1!==(o=e.indexOf(t)))-1===n.indexOf(o)&&n.push(o);else if(e.push(t),Array.isArray(t))for(o=0,s=t.length;o<s;o+=1)Un(t[o],e,n);else for(o=0,s=(i=Object.keys(t)).length;o<s;o+=1)Un(t[i[o]],e,n)}function Nn(t,e){return function(){throw new Error("Function yaml."+t+" is removed in js-yaml 4. Use yaml."+e+" instead, which is now safe by default.")}}var zn={Type:Gt,Schema:Zt,FAILSAFE_SCHEMA:ee,JSON_SCHEMA:de,CORE_SCHEMA:ue,DEFAULT_SCHEMA:ke,load:dn.load,loadAll:dn.loadAll,dump:{dump:function(t,e){var n=new vn(e=e||{});n.noRefs||Ln(t,n);var i=t;return n.replacer&&(i=n.replacer.call({"":i},"",i)),Fn(n,0,i,!0,!0)?n.dump+"\n":""}}.dump,YAMLException:Vt,types:{binary:be,float:he,map:te,null:ne,pairs:$e,set:Ce,timestamp:ge,bool:ie,int:ae,merge:me,omap:we,seq:Qt,str:Jt},safeLoad:Nn("safeLoad","load"),safeLoadAll:Nn("safeLoadAll","loadAll"),safeDump:Nn("safeDump","dump")};const Dn={type:"custom:google-dashboard-card"},Rn=t=>{switch(t){case"tap_action":return"hold_action";case"hold_action":case"double_tap_action":return"tap_action"}};let Vn=class extends ct{static getStubConfig(){return{type:"custom:google-dashboard-card"}}async setConfig(t){if(!t)throw new Error("Invalid configuration");this._config=t}async updated(t){if(t.has("hass"))if(this._card)this._card.hass=this.hass;else if(this._config){const t=this.mapTemplate(this._config),e=zn.load(t),n=await window.loadCardHelpers(),i=await n.createCardElement(e);i.classList.add("ripple-card"),i.hass=this.hass,this._card=i,this.requestUpdate()}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("google-dashboard-card-editor")}mapTemplate(t){const e=this.resolveAction({default_action:t.default_action,action_type:t.action_type,single_tap_web:t.single_tap_web}),n=function(t,e,n,i,o){return`type: custom:swipe-card\ncard_width: max-content\nparameters:\n  grabCursor: true\n  centeredSlides: false\n  slidesPerView: auto\n  spaceBetween: 8\n  preventClicksPropagation: true\n  preventClicks: true\n  threshold: 30\ncards:\n  - type: custom:button-card\n    icon: m3r:videocam\n    name: ${Et("google_dashboard_card.cameras_name")}\n    triggers_update: all\n    label: |\n      [[[\n          const devices = Object.keys(hass.states).filter((e) =>\n          e.startsWith("camera.")\n        ).length;\n        return devices > 1 ? devices + " " + "${Et("google_dashboard_card.devices")}" : devices + " " + "${Et("google_dashboard_card.device")}";\n      ]]]\n    show_name: true\n    show_label: true\n    show_icon: true\n    ${Rn(o)}:\n      action: none\n      haptic: medium\n    ${o}:\n      action: ${t?"navigate":"none"}\n      navigation_path: ${t}\n      haptic: medium\n    styles:\n      grid:\n        - grid-template-columns: 2fr 1fr 1fr\n        - grid-template-rows: 2fr 0.1fr 1fr 1fr\n        - grid-template-areas: |\n            "i . ."\n            ". . ."\n            "n n n"\n            "l l l"\n      card:\n        - display: |\n            [[[\n              const lights = Object.keys(hass.states).filter(e => e.startsWith("camera.") && hass.states[e].state !== "unavailable");\n              return lights.length === 0 ? "none" : "block";\n            ]]]\n        - margin-bottom: 1px\n        - height: 130px\n        - width: 130px\n        - border-radius: 30px\n        - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05),\n            0px 0.5px 1.5px rgba(0, 0, 0, 0.07);\n\n\n        - background: |\n            [[[\n              return hass.themes.darkMode ? '#1F1F1F' : '#F8F9FA';\n            ]]]\n      name:\n        - font-size: 1rem\n        - font-weight: bold\n        - justify-self: start\n        - align-self: end\n        - margin: 0px 20px 0px 20px\n        - max-width: -webkit-fill-available;\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#E8EAED' : '#202124';\n            ]]]\n      label:\n        - font-size: 0.85rem\n        - justify-self: start\n        - align-self: start\n        - margin: 2px 0px 0px 20px\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';\n            ]]]\n      icon:\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#8AB4F8' : '#1A73E8';\n            ]]]\n    state:\n      - value: "on"\n        styles:\n          card:\n            - background: |\n                [[[\n                  return hass.themes.darkMode ? '#302f32' : '#E8F0FE';\n                ]]]\n          icon:\n            - color: |\n                [[[\n                  return hass.themes.darkMode ? '#fee183' : '#1A73E8';\n                ]]]\n  - type: custom:button-card\n    icon: m3r:light-group\n    name: ${Et("google_dashboard_card.lighting_name")}\n    triggers_update: all\n    label: |\n      [[[\n        // Conta automaticamente le luci accese\n        const lightEntities = Object.keys(hass.states).filter(\n        (entity) =>\n          entity.startsWith("light.") &&\n          hass.states[entity].state !== "unavailable"\n        );\n        const lightsOn = lightEntities.filter(\n          (entity) => hass.states[entity].state === "on"\n        ).length;\n        const totalLights = lightEntities.length;\n        return lightsOn + "/" + totalLights + " ${Et("google_dashboard_card.lighting_label")}";\n      ]]]\n    show_name: true\n    show_label: true\n    show_icon: true\n    ${Rn(o)}:\n      action: none\n      haptic: medium\n    ${o}:\n      action: ${e?"navigate":"none"}\n      navigation_path: ${e}\n      haptic: medium\n    styles:\n      grid:\n        - grid-template-columns: 2fr 1fr 1fr\n        - grid-template-rows: 2fr 0.1fr 1fr 1fr\n        - grid-template-areas: |\n            "i . ."\n            ". . ."\n            "n n n"\n            "l l l"\n      card:\n        - display: |\n            [[[\n              const lights = Object.keys(hass.states).filter(e => e.startsWith("light.") && hass.states[e].state !== "unavailable");\n              return lights.length === 0 ? "none" : "block";\n            ]]]\n        - margin-left: |\n            [[[\n              const camera = Object.keys(hass.states).filter(e => e.startsWith("camera.") && hass.states[e].state !== "unavailable");\n              return camera.length === 0 ? "5px" : "0px";\n            ]]]\n        - margin-bottom: 1px\n        - height: 130px\n        - width: 130px\n        - border-radius: 30px\n        - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05),\n            0px 0.5px 1.5px rgba(0, 0, 0, 0.07);\n\n\n        - background: |\n            [[[\n              return hass.themes.darkMode ? '#1F1F1F' : '#F8F9FA';\n            ]]]\n      name:\n        - font-size: 1rem\n        - font-weight: bold\n        - justify-self: start\n        - align-self: end\n        - margin: 0px 20px 0px 20px\n        - max-width: -webkit-fill-available;\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#FFFFFF' : '#202124';\n            ]]]\n      label:\n        - font-size: 0.85rem\n        - justify-self: start\n        - align-self: start\n        - margin: 2px 0px 0px 20px\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';\n            ]]]\n      icon:\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#FBBC04' : '#F9AB00';\n            ]]]\n    state:\n      - operator: template\n        value: |\n          [[[\n            return Object.keys(hass.states).some(entity => \n              entity.startsWith('light.') && \n              hass.states[entity].state === 'on'\n            );\n          ]]]\n        styles:\n          card:\n            - background: |\n                [[[\n                  return hass.themes.darkMode ? '#332f2a' : '#FEF7E0';\n                ]]]\n          icon:\n            - color: |\n                [[[\n                  return hass.themes.darkMode ? '#FBBC04' : '#745b00';\n                ]]]\n  - type: custom:button-card\n    icon: m3of:wifi\n    name: ${Et("google_dashboard_card.wifi_name")}\n    triggers_update: all\n    label: |\n      [[[\n        const devices = Object.keys(hass.states).filter(\n          (entity) =>\n            entity.startsWith("device_tracker.") &&\n            hass.states[entity].state === "home"\n        ).length;\n        return devices > 1 ? (devices + " " + "${Et("google_dashboard_card.devices")}") : (devices + " " + "${Et("google_dashboard_card.device")}");\n      ]]]\n    show_name: true\n    show_label: true\n    show_icon: true\n    ${Rn(o)}:\n      action: none\n      haptic: medium\n    ${o}:\n      action: ${n?"navigate":"none"}\n      navigation_path: ${n}\n      haptic: medium\n    styles:\n      grid:\n        - grid-template-columns: 2fr 1fr 1fr\n        - grid-template-rows: 2fr 0.1fr 1fr 1fr\n        - grid-template-areas: |\n            "i . ."\n            ". . ."\n            "n n n"\n            "l l l"\n      card:\n        - display: |\n            [[[\n              const deviceEntities = Object.keys(hass.states).filter(entity => \n              entity.startsWith('device_tracker.') && \n              hass.states[entity].state === 'home'\n              );\n              return deviceEntities.length === 0 ? "none" : "block";\n            ]]]\n        - margin-left: |\n            [[[\n              const lights = Object.keys(hass.states).filter(e => e.startsWith("light.") && hass.states[e].state !== "unavailable");\n              return lights.length === 0 ? "5px" : "0px";\n            ]]]\n        - margin-bottom: 1px\n        - height: 130px\n        - width: 130px\n        - border-radius: 30px\n        - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05),\n            0px 0.5px 1.5px rgba(0, 0, 0, 0.07);\n\n\n        - background: |\n            [[[\n              return hass.themes.darkMode ? '#1F1F1F' : '#F8F9FA';\n            ]]]\n      name:\n        - font-size: 1rem\n        - font-weight: bold\n        - justify-self: start\n        - align-self: end\n        - margin: 0px 20px 0px 20px\n        - max-width: -webkit-fill-available;\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#FFFFFF' : '#202124';\n            ]]]\n      label:\n        - font-size: 0.85rem\n        - justify-self: start\n        - align-self: start\n        - margin: 2px 0px 0px 20px\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';\n            ]]]\n      icon:\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#81C995' : '#137333';\n            ]]]\n    state:\n      - operator: template\n        value: |\n          [[[\n            return Object.keys(hass.states).some(entity => \n              entity.startsWith('device_tracker.') && \n              hass.states[entity].state === 'home'\n            );\n          ]]]\n        styles:\n          card:\n            - background: |\n                [[[\n                  return hass.themes.darkMode ? '#2e312e' : '#E6F4EA';\n                ]]]\n          icon:\n            - color: |\n                [[[\n                  return hass.themes.darkMode ? '#81C995' : '#137333';\n                ]]]\n  - type: custom:button-card\n    entity: light.luce_giovanni\n    icon: m3of:thermostat\n    name: ${Et("google_dashboard_card.climate_name")}\n    triggers_update: all\n    label: |\n      [[[\n        const climateEntities = Object.keys(hass.states).filter(\n            (entity) =>\n              entity.startsWith("climate.") &&\n              hass.states[entity].state !== "unavailable"\n          ).length;\n          return climateEntities > 1 ? climateEntities + " " + "${Et("google_dashboard_card.devices")}" : climateEntities + " " + "${Et("google_dashboard_card.device")}";\n      ]]]\n    show_name: true\n    show_label: true\n    show_icon: true\n    ${Rn(o)}:\n      action: none\n      haptic: medium\n    ${o}:\n      action: ${i?"navigate":"none"}\n      navigation_path: ${i}\n      haptic: medium\n    styles:\n      grid:\n        - grid-template-columns: 2fr 1fr 1fr\n        - grid-template-rows: 2fr 0.1fr 1fr 1fr\n        - grid-template-areas: |\n            "i . ."\n            ". . ."\n            "n n n"\n            "l l l"\n      card:\n        - display: |\n            [[[\n              const climateEntities = Object.keys(hass.states).filter(entity => \n              entity.startsWith('climate.') && \n              hass.states[entity].state !== 'unavailable'\n              );\n              return climateEntities.length === 0 ? "none" : "block";\n            ]]]\n        - margin-left: |\n            [[[\n              const deviceEntities = Object.keys(hass.states).filter(entity => \n              entity.startsWith('device_tracker.') && \n              hass.states[entity].state === 'home'\n              );\n              return deviceEntities.length === 0 ? "5px" : "0px";\n            ]]]\n        - margin-bottom: 1px\n        - height: 130px\n        - width: 130px\n        - border-radius: 30px\n        - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05),\n            0px 0.5px 1.5px rgba(0, 0, 0, 0.07);\n        - background: |\n            [[[\n              return hass.themes.darkMode ? '#1F1F1F' : '#F8F9FA';\n            ]]]\n      name:\n        - font-size: 1rem\n        - font-weight: bold\n        - justify-self: start\n        - align-self: end\n        - margin: 0px 20px 0px 20px\n        - max-width: -webkit-fill-available;\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#FFFFFF' : '#202124';\n            ]]]\n      label:\n        - font-size: 0.85rem\n        - justify-self: start\n        - align-self: start\n        - margin: 2px 0px 0px 20px\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';\n            ]]]\n      icon:\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#ffdbcd' : '#812800';\n            ]]]\n    state:\n      - operator: template\n        value: |\n          [[[\n            return Object.keys(hass.states).some(entity => \n              entity.startsWith('climate.') && \n              (hass.states[entity].state === 'on' || hass.states[entity].state === 'auto' || hass.states[entity].state === 'heat' || hass.states[entity].state === 'cool')\n            );\n          ]]]\n        styles:\n          card:\n            - background: |\n                [[[\n                  return hass.themes.darkMode ? '#352f2d' : '#FCE8E6';\n                ]]]\n          icon:\n            - color: |\n                [[[\n                  return hass.themes.darkMode ? '#FF8A65' : '#812800';\n                ]]]\n`}(t.cameras,t.lighting,t.wifi,t.climate,e);return n}resolveAction({default_action:t,action_type:e,single_tap_web:n}){const i=navigator.userAgent||"",o=!(i.includes("Android")||i.includes("iPhone")||i.includes("iPad")||i.includes("HomeAssistant"));return t||o&&n?"tap_action":e||"tap_action"}_handleClick(t){const e=t.target.closest(".ripple-card");e&&Ft(e,t)}render(){return this._card?W`
      <div style="margin: 0px -15px;" @mousedown=${this._handleClick}>
        ${this._card}
      </div>
    `:W`<ha-card>Loading…</ha-card>`}createRenderRoot(){return this}};Vn.styles=c`
    .ripple-card {
      position: relative;
      overflow: hidden;
    }
  `,i([ft({attribute:!1})],Vn.prototype,"hass",void 0),i([gt()],Vn.prototype,"_config",void 0),i([gt()],Vn.prototype,"_card",void 0),Vn=i([dt("google-dashboard-card")],Vn);let Hn=class extends ct{constructor(){super(...arguments),this._config=Dn,this._valueChanged=t=>{var e,n;const i=t.target,o=i.getAttribute("configValue"),s=t instanceof CustomEvent&&void 0!==(null===(e=t.detail)||void 0===e?void 0:e.value)?t.detail.value:null!==(n=i.checked)&&void 0!==n?n:i.value;o&&this._config[o]!==s&&(this._config=Object.assign(Object.assign({},this._config),{[o]:s}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}}setConfig(t){this._config=Object.assign({},t)}_entityChanged(t){var e;const n=t.detail.value;(null===(e=this._config)||void 0===e?void 0:e.entity)!==n&&(this._config=Object.assign(Object.assign({},this._config),{entity:n}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}async firstUpdated(){const t=await window.loadCardHelpers(),e=await t.createCardElement({type:"entities",entities:[]});await e.constructor.getConfigElement()}render(){var t,e,n,i;return this._config&&this.hass?(this._config.use_default_icon=null===(t=this._config.use_default_icon)||void 0===t||t,this._config.default_action=null===(e=this._config.default_action)||void 0===e||e,W`
      <div class="form">
        <span class="switch-label"
          >${Et("google_dashboard_card.description")}</span
        >

        <span class="text-label"
          >${Et("google_dashboard_card.cameras")}</span
        >
        <ha-textfield
          label="${Et("google_dashboard_card.placeholder")}"
          .value=${this._config.cameras||""}
          configValue="cameras"
          @input=${this._valueChanged}
          placeholder="e.g. ./cameras"
        ></ha-textfield>

        <span class="text-label"
          >${Et("google_dashboard_card.lighting")}</span
        >
        <ha-textfield
          label="${Et("google_dashboard_card.placeholder")}"
          .value=${this._config.lighting||""}
          configValue="lighting"
          @input=${this._valueChanged}
          placeholder="e.g. ./lighting"
        ></ha-textfield>

        <span class="text-label"
          >${Et("google_dashboard_card.wifi")}</span
        >
        <ha-textfield
          label="${Et("google_dashboard_card.placeholder")}"
          .value=${this._config.wifi||""}
          configValue="wifi"
          @input=${this._valueChanged}
          placeholder="e.g. ./wifi"
        ></ha-textfield>

        <span class="text-label"
          >${Et("google_dashboard_card.climate")}</span
        >
        <ha-textfield
          label="${Et("google_dashboard_card.placeholder")}"
          .value=${this._config.climate||""}
          configValue="climate"
          @input=${this._valueChanged}
          placeholder="e.g. ./climate"
        ></ha-textfield>

        <div class="switch-row">
          <span class="switch-label"
            >${Et("google_dashboard_card.default")}</span
          >
          <ha-switch
            .checked=${null===(n=this._config.default_action)||void 0===n||n}
            configValue="default_action"
            @change=${this._valueChanged}
          />
        </div>

        ${this._config.default_action?W``:W`
              <ha-select
                label="${Et("google_dashboard_card.tap_type")}"
                .value=${this._config.action_type||"tap_action"}
                configValue="action_type"
                @selected=${this._valueChanged}
                @closed=${t=>t.stopPropagation()}
              >
                <mwc-list-item value="tap_action">
                  ${Et("google_dashboard_card.single")}
                </mwc-list-item>
                <mwc-list-item value="hold_action">
                  ${Et("google_dashboard_card.hold")}
                </mwc-list-item>
                <mwc-list-item value="double_tap_action">
                  ${Et("google_dashboard_card.double")}
                </mwc-list-item>
              </ha-select>

              <div class="switch-row">
                <span class="switch-label"
                  >${Et("google_dashboard_card.web")}</span
                >
                <ha-switch
                  .checked=${null!==(i=this._config.single_tap_web)&&void 0!==i&&i}
                  configValue="single_tap_web"
                  @change=${this._valueChanged}
                />
              </div>
            `}
      </div>
    `):W``}};Hn.styles=c`
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

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .switch-label {
      font-size: 16px;
      font-weight: 500;
    }
  `,i([ft({attribute:!1})],Hn.prototype,"hass",void 0),i([gt()],Hn.prototype,"_config",void 0),Hn=i([dt("google-dashboard-card-editor")],Hn);class Yn{#t;#e;#n=0;#i=0;#o=0;#s=0;#r;#a=!1;#l;#c;#h;constructor(t,e,{touchActions:n,stopScrollDirection:i="both"}={}){this.#t=t,this.#e=n,this.#r=e,this.#l=i,this.#c=this.#d.bind(this),this.#h=this.#u.bind(this),this.addListeners()}addListeners(){this.#t.addEventListener("pointerdown",this.#h),this.#t.addEventListener("pointermove",this.#h),this.#t.addEventListener("pointerup",this.#h),this.#t.addEventListener("pointercancel",this.#h),window.addEventListener("touchmove",this.#c,{passive:!1}),this.#e&&(this.#t.style.touchAction=this.#e)}removeListeners(){this.#t.removeEventListener("pointerdown",this.#h),this.#t.removeEventListener("pointermove",this.#h),this.#t.removeEventListener("pointerup",this.#h),this.#t.removeEventListener("pointercancel",this.#h),window.removeEventListener("touchmove",this.#c),this.#e&&this.#t.style.removeProperty("touch-action")}#p(){this.#a=!0}#f(){this.#a=!1}#d(t){this.#a&&t.preventDefault()}#u(t){if("pointerdown"===t.type&&(this.#t.setPointerCapture(t.pointerId),this.#n=t.pageX,this.#i=t.pageY),this.#t.hasPointerCapture(t.pointerId)&&"pointercancel"!==t.type&&"function"==typeof this.#r){const e=t.pageX-this.#n,n=t.pageY-this.#i,i=Math.abs(e/n)>1,o=Math.abs(e/n)<1;"horizontal"===this.#l&&i&&this.#p(),"vertical"===this.#l&&o&&this.#p(),"both"===this.#l&&this.#p(),this.#r(t,{startX:this.#n,startY:this.#i,relativeX:e,relativeY:n,totalX:e+this.#o,totalY:n+this.#s})}"pointerup"===t.type&&(this.#o=+this.#o+t.pageX-this.#n,this.#s=+this.#s+t.pageY-this.#i,this.#t.releasePointerCapture(t.pointerId),this.#f()),"pointercancel"===t.type&&(this.#r(t,{startX:this.#n,startY:this.#i,relativeX:0,relativeY:0,totalX:this.#o,totalY:this.#s}),this.#t.releasePointerCapture(t.pointerId),this.#f())}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Wn extends ct{constructor(){super(...arguments),this._config=e,this._name="",this.mouseStartPos={x:0,y:0},this.mousePos={x:0,y:0},this.containerWidth=0,this.oldValue=0,this.currentValue=0,this.holdTimer=0,this.isHold=!1,this._shouldUpdate=!0,this.updateTimeout=0,this.pressTimeout=0,this.trackingStartTime=0,this.isTap=!1,this._handleContextMenu=t=>(t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation(),!1),this._handlePointer=(t,e)=>{this.mousePos={x:t.pageX,y:t.pageY};const n=this._config.min_slide_time;if("pointerdown"===t.type&&(this._press(),this.isTap=!0,this.isHold=!1,this.holdTimer=window.setTimeout(this._setHold,this._config.hold_time),this.trackingStartTime=Date.now(),this._resetTrack()),["pointerdown","pointermove","pointerup"].includes(t.type)&&this._updateValue(),"pointermove"===t.type){if(this.isTap&&Math.abs(e.relativeX)<5&&Math.abs(e.relativeY)<5)return;this.isTap=!1,clearTimeout(this.holdTimer),this._stopUpdates()}if("pointercancel"===t.type&&(clearTimeout(this.holdTimer),this._unpress(),this._startUpdates()),"pointerup"===t.type){if(clearTimeout(this.holdTimer),this._unpress(),this._startUpdates(),this.isTap)return void this._handleTap();Date.now()-this.trackingStartTime>n&&(this._setValue(),this._startUpdates(!0))}},this._setHold=()=>{this.isTap=!1,this.isHold=!0,this._handleAction("hold")},this._handleTap=()=>{var t;clearTimeout(this.holdTimer),(null===(t=this._config)||void 0===t?void 0:t.tap_action)&&(this.isHold||this._handleAction("tap"))}}static getStubConfig(t,e){const n=e.filter(t=>"light"===t.split(".")[0]).sort();return{type:"custom:google-slider-card",entity:n[Math.floor(Math.random()*n.length)],attribute:"brightness",icon:"m3of:lightbulb",show_percentage:!0,bold_text:!1,height:95}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("google-slider-card-editor")}setConfig(t){if(!t)throw new Error(Et("common.invalid_configuration"));if(!t.entity)throw new Error(Et("common.no_entity_set"));if(!t.entity||"light"!==t.entity.split(".")[0])throw new Error("Specify an entity from within the light domain");this._config=Object.assign(Object.assign({},e),t),this._entity=this._config.entity,this._config.original_min=this._config.min,this._config.original_max=this._config.max}set hass(t){var e,n,i,o,s,r,a,l;if(!this._entity)return;this._hass=t,this._state=t.states[this._entity],this._status=null===(e=this._state)||void 0===e?void 0:e.state,this._name=null!==(r=null!==(s=null!==(n=this._config.name)&&void 0!==n?n:null===(o=null===(i=this._state)||void 0===i?void 0:i.attributes)||void 0===o?void 0:o.friendly_name)&&void 0!==s?s:this._entity.split(".")[1])&&void 0!==r?r:"";const c=(null===(a=t.themes)||void 0===a?void 0:a.darkMode)?"dark":"light",h=null===(l=t.states[this._entity])||void 0===l?void 0:l.state;this._lastTheme===c&&this._lastEntityState===h||(this._lastTheme=c,this._lastEntityState=h,this.requestUpdate())}_log(t){console.log(`%c GOOGLE-SLIDER-CARD ${this._name} %c ${t} `,"color: orange; font-weight: bold; background: black","")}connectedCallback(){super.connectedCallback(),this.addEventListener("contextmenu",this._handleContextMenu),this.slideGesture=new Yn(this,this._handlePointer.bind(this),{touchActions:"pan-y",stopScrollDirection:"horizontal"})}disconnectedCallback(){this.removeEventListener("contextmenu",this._handleContextMenu),this.slideGesture.removeListeners(),super.disconnectedCallback()}_updateValue(){const t=this.containerWidth,e=this.mousePos.x-this.mouseStartPos.x,n=Math.round(100*e/t);this.currentValue=this.oldValue+n,this._checklimits(),this._updateSlider()}_handleAction(t){const e=new Event("hass-action",{bubbles:!0,cancelable:!1,composed:!0});e.detail={config:this._config,action:t},this.dispatchEvent(e)}_resetTrack(){this.mouseStartPos={x:this.mousePos.x,y:this.mousePos.y},this.oldValue=this.currentValue}_press(){this.pressTimeout&&clearTimeout(this.pressTimeout),this.pressTimeout=window.setTimeout(()=>this.setAttribute("pressed",""),this._config.min_slide_time),this.setAttribute("half-pressed","")}_unpress(){this.pressTimeout&&clearTimeout(this.pressTimeout),this.removeAttribute("pressed"),this.removeAttribute("half-pressed")}_checklimits(){var t,e;const n=null!==(t=this._config.min)&&void 0!==t?t:0,i=null!==(e=this._config.max)&&void 0!==e?e:100;this.currentValue<n&&(this.currentValue=n,this._resetTrack()),this.currentValue>i&&(this.currentValue=i,this._resetTrack())}_updateSlider(){var t;this.style.setProperty("--bsc-percent",this.currentValue+"%");const e=null===(t=null==this?void 0:this.shadowRoot)||void 0===t?void 0:t.getElementById("percentage");e&&(e.innerText=Math.round(this.currentValue)+"%")}_updateColors(){var t,e,n,i,o;let s="var(--bsc-color)",r="0%",a="50%",l=!1;if(this._state)if("on"==this._status){const o=null!==(e=null===(t=this._state.attributes)||void 0===t?void 0:t.rgb_color)&&void 0!==e?e:[255,255,255],c=null!==(i=null===(n=this._state.attributes)||void 0===n?void 0:n.brightness)&&void 0!==i?i:255;l=!0,o&&(s=`rgb(${o.join(",")})`),c&&(r=`${Math.ceil(100*c/255)}%`,a=`${Math.ceil(100*c/510+50)}%`)}else s="var(--bsc-off-color)";const c=null===(o=null==this?void 0:this.shadowRoot)||void 0===o?void 0:o.getElementById("percentage");if(!l){"on"!=this._status&&"off"!=this._status?c&&(c.innerText=Et("common.offline")):c&&(c.innerText=Et("common.off"))}this.style.setProperty("--bsc-entity-color",s),this.style.setProperty("--bsc-brightness",r),this.style.setProperty("--bsc-brightness-ui",a),this._config.icon_color&&l&&this.style.setProperty("--bsc-icon-color",this._config.icon_color),this._config.icon_color&&!l&&this.style.removeProperty("--bsc-icon-color")}_getValue(){var t,e,n,i,o;if(!this._shouldUpdate)return;if(!this._state)return;const s=null===(t=this._config)||void 0===t?void 0:t.attribute;let r=0;if("unavailable"==this._status?(this._config.min=0,this._config.max=0,this.style.setProperty("--bsc-opacity","0.5")):(this._config.min=this._config.original_min,this._config.max=this._config.original_max,this.style.removeProperty("--bsc-opacity")),"on"!=this._status)r=null!==(e=this._config.min)&&void 0!==e?e:0;else switch(s){case"brightness":r=Math.round(100*(null!==(n=this._state.attributes.brightness)&&void 0!==n?n:255)/255);break;case"red":case"green":case"blue":const t=null!==(i=this._state.attributes.rgb_color)&&void 0!==i?i:[255,255,255];"red"===s&&(r=t[0]),"green"===s&&(r=t[1]),"blue"===s&&(r=t[2]),r=Math.ceil(100*r/255);break;case"hue":case"saturation":const e=null!==(o=this._state.attributes.hs_color)&&void 0!==o?o:[100,100];"hue"===s&&(r=e[0]),"saturation"===s&&(r=e[1])}this.currentValue=r,this._updateSlider()}_setValue(){var t,e;if(!this._state)return;let n,i=this.currentValue,o=this._config.attribute,s=!0;switch(o){case"brightness":i=Math.ceil(i/100*255),i||(s=!1);break;case"red":case"green":case"blue":n=null!==(t=this._state.attributes.rgb_color)&&void 0!==t?t:[255,255,255],"red"===o&&(n[0]=i),"green"===o&&(n[1]=i),"blue"===o&&(n[2]=i),i=n,o="rgb_color";break;case"hue":case"saturation":n=null!==(e=this._state.attributes.hs_color)&&void 0!==e?e:[100,100],"hue"===o&&(n[0]=i),"saturation"===o&&(n[1]=i),i=n,o="hs_color"}const r={entity_id:this._state.entity_id};s?(r[o]=i,this._config.transition&&(r.transition=this._config.transition),this._hass.callService("light","turn_on",r)):this._hass.callService("light","turn_off",r)}_stopUpdates(){var t,e,n;this.updateTimeout&&clearTimeout(this.updateTimeout),this._shouldUpdate&&(null===(n=null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("slider"))||void 0===e?void 0:e.classList)||void 0===n||n.remove("animate"),this._shouldUpdate=!1)}_startUpdates(t=!1){this.updateTimeout&&clearTimeout(this.updateTimeout),this.updateTimeout=window.setTimeout(()=>{var t,e,n;this._shouldUpdate=!0,null===(n=null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("slider"))||void 0===e?void 0:e.classList)||void 0===n||n.add("animate"),this.requestUpdate()},t?this._config.settle_time:0)}_onClick(t){Ft(t.currentTarget,t)}updated(){var t,e,n;this.containerWidth=null!==(n=null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("container"))||void 0===e?void 0:e.clientWidth)&&void 0!==n?n:0,this._getValue(),this._updateColors()}render(){var t,e,n,i,o,s,r,a,l;if(!this._entity||!(this._entity in(null!==(e=null===(t=this._hass)||void 0===t?void 0:t.states)&&void 0!==e?e:{})))return this._showError(`${Et("common.no_entity")}: ${this._entity}`);const c=null!==(n=this._config.colorize&&!0)&&void 0!==n&&n,h=null!==(i=this._config.show_percentage&&!0)&&void 0!==i&&i,d=null!==(o=this._config.bold_text&&!0)&&void 0!==o&&o,u=null===(r=null===(s=this._hass)||void 0===s?void 0:s.states)||void 0===r?void 0:r[this._entity],p="on"!=(null==u?void 0:u.state)&&"off"!=(null==u?void 0:u.state),f=(null===(l=null===(a=this._hass)||void 0===a?void 0:a.themes)||void 0===l?void 0:l.darkMode)?"dark":"light",g="on"===(null==u?void 0:u.state);let m="",_="",b="",v="",y="";g&&"dark"===f?(m=_=b="#ffe083",v="#6d5300",y="#333029"):g?(m=_=b="#745b01",v="#ffbf00",y="#feefc8"):"dark"===f?(m=_=b="#e3e3e5",v="#cccccc",y="#292a2e"):(m=_=b="#1b1b1d",y="#e8e8ea"),this._setStyleProperty("--bsc-name-color",m),this._setStyleProperty("--bsc-icon-color",_),this._setStyleProperty("--bsc-percentage-color",b),this._setStyleProperty("--bsc-slider-color",v),this._setStyleProperty("--bsc-background",y),this._setStyleProperty("--bsc-name-margin","-20px"),this._setStyleProperty("--bsc-icon-margin","-10px"),this._setStyleProperty("--bsc-percentage-margin","-20px"),this._setStyleProperty("--bsc-primary-text-color",this._config.text_color),this._setStyleProperty("--bsc-border-color",this._config.border_color),this._setStyleProperty("--bsc-border-radius",this._config.border_radius),this._setStyleProperty("--bsc-border-style",this._config.border_style),this._setStyleProperty("--bsc-border-width",this._config.border_width),this._setStyleProperty("--bsc-height",this._config.height,t=>`${t}px`);const w=null==this._config.icon||"m3of:lightbulb"===this._config.icon||"m3r:lightbulb"===this._config.icon?g?"m3of:lightbulb":"m3r:lightbulb":this._config.icon;return W`
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
        ${p?W`
              <ha-icon
                id="icon_offline"
                icon="mdi:alert"
                style="position: absolute; right: 20px; top: 50%; transform: translateY(-50%); color: var(--bsc-icon-color);"
                title="Offline"
              ></ha-icon>
            `:""}
      </ha-card>
    `}_setStyleProperty(t,e,n=t=>t){null!=e&&""!==e&&this.style.setProperty(t,n(e))}_showWarning(t){return W` <hui-warning>${t}</hui-warning> `}_showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t}),W` ${e} `}static get styles(){return c`
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
        box-shadow:
          0px 0.5px 1px rgba(0, 0, 0, 0.05),
          0px 0.5px 1.5px rgba(0, 0, 0, 0.07);
        -webkit-tap-highlight-color: transparent;
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
    `}}i([gt()],Wn.prototype,"_config",void 0),i([gt()],Wn.prototype,"_entity",void 0),i([gt()],Wn.prototype,"_state",void 0),i([gt()],Wn.prototype,"_status",void 0),i([gt()],Wn.prototype,"_name",void 0);const Bn={type:"custom:google-climate-card",entity:"climate.thermo",increase_temp:1,decrease_temp:1,use_material_color:!0,use_default_icon:!0};let qn=class extends ct{constructor(){super(...arguments),this._config=Bn}setConfig(t){if(!t||!t.entity)throw new Error(Et("common.invalid_configuration"));this._config=t}static getStubConfig(t,e){const n=e.filter(t=>"climate"===t.split(".")[0]).sort();return{type:"custom:google-climate-card",entity:n[Math.floor(Math.random()*n.length)],increase_temp:1,decrease_temp:1,use_material_color:!0,use_default_icon:!0}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("google-climate-card-editor")}_onClick(t){if(Ft(t.currentTarget,t),navigator.vibrate&&navigator.vibrate(60),!this._config||!this.hass)return;const e=this._config.entity;jt(this,"hass-more-info",{entityId:e})}async _adjustTemp(t){var e,n;if(navigator.vibrate&&navigator.vibrate(60),!this.hass||!(null===(e=this._config)||void 0===e?void 0:e.entity))return;const i=this.hass.states[this._config.entity],o=Number(null===(n=null==i?void 0:i.attributes)||void 0===n?void 0:n.temperature);if(isNaN(o))return;const s=o+t;this.hass.states[this._config.entity].attributes.temperature=s,await this.hass.callService("climate","set_temperature",{entity_id:this._config.entity,temperature:s}),setTimeout(()=>{this.requestUpdate()},500)}setColorCard(t,e,n,i){let o="",s="",r="",a="",l="";n?"light"===e?(o=s="#949496",l="rgba(223, 223, 225, 0.85)"):(o=s="#717173",l="#2c2c2e"):i?"dark"===e?t?(o=s="#fedcca",r="#4b332b",a="#e6c0b2",l="rgba(92, 64, 53, 0.85)"):(o=s="#c3c3c3",r="#5c5b60",a="#c1c2c6",l="rgba(65, 66, 70, 0.83)"):t?(o=s=a="#812800",r="rgba(245, 180, 150, 0.6)",l="rgba(258, 193.8, 166, 0.3)"):(o=s=a="#525252",r="#c1c1c3",l="rgba(221, 221, 223, 0.83)"):"dark"===e?(o=s="#e3e3e5",l="#292a2e"):(o=s="#1b1b1d",l="#e8e8ea"),this._setStyleProperty("--bsc-name-color",o),this._setStyleProperty("--bsc-icon-color",s),this._setStyleProperty("--bsc-adjustTemp-color",r),this._setStyleProperty("--bsc-internalTemp-color",a),this._setStyleProperty("--bsc-background",l)}_setStyleProperty(t,e,n=t=>t){null!=e&&""!==e&&this.style.setProperty(t,n(e))}render(){var t,e;if(!this._config||!this.hass)return W``;const n=this.hass.states[this._config.entity];if(!n)return W`<ha-card
        ><div class="warning">${Et("common.no_entity")}</div></ha-card
      >`;const i=this._config.name||n.attributes.friendly_name,o=It(n.state),s=Pt(n,"thermometer",o),r=(null===(e=null===(t=this.hass)||void 0===t?void 0:t.themes)||void 0===e?void 0:e.darkMode)?"dark":"light",a="on"===n.state||"auto"===n.state||"heat"===n.state||"cool"===n.state;this.setColorCard(this._config.use_material_color,r,o,a);const l={control_type:"thermometer",icon:this._config.icon,use_default_icon:this._config.use_default_icon,dual_icon:this._config.dual_icon,icon_on:this._config.icon_on,icon_off:this._config.icon_off};return W`
      <div class="temperature-card">
        <div class="header" @click=${this._onClick}>
          <div class="valve-info">
            <ha-icon
              id="icon_offline"
              icon="${Mt(n,l)}"
              title="Climate"
              class="chevron"
              style="
                --mdc-icon-size: 20px;
                margin-top: -5px;
              "
            ></ha-icon>

            <span class="valve-name">${i}</span>
          </div>

          ${o?W`<ha-icon
                id="icon_offline"
                icon="mdi:alert"
                style="position: absolute; right: 0px; top: 50%; transform: translateY(-50%); color: var(--bsc-icon-color);"
                title="Offline"
              ></ha-icon>`:W`<ha-icon
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
        ${o?W`
              <div class="temperature-control offline-control">
                <div class="temperature-display offline">Offline</div>
              </div>
            `:W`
              <div class="temperature-control">
                <button
                  class="control-btn minus-btn"
                  @click=${()=>this._adjustTemp(-this._config.decrease_temp|-Bn.decrease_temp)}
                >
                  −
                </button>
                <div class="temperature-display" id="tempDisplay">
                  ${n.attributes.temperature}
                </div>
                <button
                  class="control-btn plus-btn"
                  @click=${()=>this._adjustTemp(this._config.decrease_temp|Bn.increase_temp)}
                >
                  +
                </button>
              </div>

              <div class="internal-temp">
                <span id="internalTemp">${s}</span>
              </div>
            `}
      </div>
    `}};qn.styles=c`
    .temperature-card {
      /* background: #414246;*/
      background: var(--bsc-background);
      border-radius: 28px;
      padding: 10px 15px;
      width: -webkit-fill-available;
      /* box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3); */
      box-shadow: none;
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
      /* background: #414246;*/
      background: var(--bsc-background);
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
      margin-top: 2px;
    }

    .steam-icon {
      color: #888;
      font-size: 20px;
    }

    .valve-name {
      /* color: #c3c3c3; */
      color: var(--bsc-name-color);
      font-size: 16px;
      font-weight: 500;
    }

    .chevron {
      /* color: #c3c3c3; */
      color: var(--bsc-icon-color);
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
      /* background: #5c5b60; */
      background: var(--bsc-adjustTemp-color);
      border: none;
      /* color: #c3c3c3; */
      color: var(--bsc-name-color);
      font-size: 32px;
      font-weight: 300;
      cursor: pointer;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(10px);
      -webkit-tap-highlight-color: transparent;
    }

    .control-btn:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: scale(1.05);
    }

    .control-btn:active {
      transform: scale(0.98);
    }

    .temperature-display {
      /* color: #c3c3c3; */
      color: var(--bsc-name-color);
      font-size: 72px;
      font-weight: 450;
      text-align: center;
      line-height: 1;
    }

    .internal-temp {
      text-align: center;
      /* color: #c1c2c6; */
      color: var(--bsc-internalTemp-color);
      font-size: 15px;
      font-weight: 400;
      position: relative;
      z-index: 2;
      margin-bottom: 20px;
    }

    .offline {
      font-size: 65px;
    }

    .offline-control {
      justify-content: center;
      margin-bottom: 61px;
      margin-top: 30px;
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
      }

      .temperature-display {
        font-size: 60px;
      }

      .control-btn {
        width: 65px;
        height: 45px;
        font-size: 28px;
      }

      .offline {
        font-size: 55px;
      }

      .offline-control {
        margin-bottom: 59px;
      }
    }
  `,i([ft({attribute:!1})],qn.prototype,"hass",void 0),i([gt()],qn.prototype,"_config",void 0),qn=i([dt("google-climate-card")],qn);let Gn=class extends ct{constructor(){super(...arguments),this._config=Bn,this._valueChanged=t=>{var e,n;const i=t.target,o=i.getAttribute("configValue"),s=t instanceof CustomEvent&&void 0!==(null===(e=t.detail)||void 0===e?void 0:e.value)?t.detail.value:null!==(n=i.checked)&&void 0!==n?n:i.value;o&&this._config[o]!==s&&(this._config=Object.assign(Object.assign({},this._config),{[o]:s}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}}setConfig(t){this._config=Object.assign({},t)}_entityChanged(t){var e;const n=t.detail.value;(null===(e=this._config)||void 0===e?void 0:e.entity)!==n&&(this._config=Object.assign(Object.assign({},this._config),{entity:n}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}async firstUpdated(){const t=await window.loadCardHelpers(),e=await t.createCardElement({type:"entities",entities:[]});await e.constructor.getConfigElement()}render(){var t,e,n,i,o;return this._config&&this.hass?(this._config.use_default_icon=null===(t=this._config.use_default_icon)||void 0===t||t,this._config.use_material_color=null===(e=this._config.use_material_color)||void 0===e||e,W`
      <div class="form">
        <ha-textfield
          label="${Et("google_climate_card.name")}"
          .value=${this._config.name||""}
          configValue="name"
          @input=${this._valueChanged}
          placeholder="e.g. Cooler"
        ></ha-textfield>

        <ha-entity-picker
          label="${Et("google_climate_card.entity")}"
          .value=${this._config.entity||""}
          .hass=${this.hass}
          .includeDomains=${["climate"]}
          allow-custom-entity
          configValue="entity"
          @value-changed=${this._entityChanged}
          required
        ></ha-entity-picker>

        <div class="switch-row">
          <span class="switch-label"
            >${Et("google_climate_card.theme")}</span
          >
          <ha-switch
            .checked=${null===(n=this._config.use_material_color)||void 0===n||n}
            configValue="use_material_color"
            @change=${this._valueChanged}
          />
        </div>

        <div class="switch-row">
          <span class="switch-label"
            >${Et("google_climate_card.dual_icon.default")}</span
          >
          <ha-switch
            .checked=${null===(i=this._config.use_default_icon)||void 0===i||i}
            configValue="use_default_icon"
            @change=${this._valueChanged}
          />
        </div>

        ${this._config.use_default_icon?W``:W`
              <div class="switch-row">
                <span class="switch-label"
                  >${Et("google_climate_card.dual_icon.options")}</span
                >
                <ha-switch
                  .checked=${null!==(o=this._config.dual_icon)&&void 0!==o&&o}
                  configValue="dual_icon"
                  @change=${this._valueChanged}
                />
              </div>

              ${this._config.dual_icon?W`
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
                  `:W`
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
          label="${Et("google_climate_card.increase_temp")}"
          .value=${this._config.increase_temp||1}
          configValue="increase_temp"
          @input=${this._valueChanged}
          placeholder="e.g. 0.5"
        ></ha-textfield>

        <ha-textfield
          label="${Et("google_climate_card.decrease_temp")}"
          .value=${this._config.decrease_temp||1}
          configValue="decrease_temp"
          @input=${this._valueChanged}
          placeholder="e.g. 0.5"
        ></ha-textfield>
      </div>
    `):W``}};Gn.styles=c`
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
  `,i([ft({attribute:!1})],Gn.prototype,"hass",void 0),i([gt()],Gn.prototype,"_config",void 0),Gn=i([dt("google-climate-card-editor")],Gn);const Xn={type:"custom:google-control-card"};let Kn=class extends ct{constructor(){super(...arguments),this._config=Xn}async setConfig(t){if(!t)throw new Error(Et("common.invalid_configuration"));this._config=t}static getStubConfig(){return{type:"custom:google-control-card",name:"Control Card",icon:"mdi:link"}}async updated(t){if(t.has("hass"))if(this._card)this._card.hass=this.hass;else if(this._config){const t=this.mapTemplate(),e=zn.load(t),n=await window.loadCardHelpers(),i=await n.createCardElement(e);i.classList.add("ripple-card"),i.hass=this.hass,this._card=i,this.requestUpdate()}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("google-control-card-editor")}mapTemplate(){const t=this.hass.states[this._config.entity],e=function(t,e){return`type: custom:button-card\nname: ${t}\nicon: ${e}\ntap_action:\n  action: url\n  url_path: |\n    [[[\n      const ua = navigator.userAgent || "";\n      if (ua.includes("Android")) {\n        return "app://com.google.android.apps.chromecast.app";\n      } else if (ua.includes("iPhone") || ua.includes("iPad")) {\n        return "https://apps.apple.com/app/google-home/id680819774";\n      } else {\n        return "https://home.google.com/";\n      }\n    ]]]\nstyles:\n  grid:\n    - grid-template-columns: 2fr 1fr 1fr\n    - grid-template-rows: 2fr 0.1fr 2fr\n    - grid-template-areas: |\n        "i . ."\n        ". . ."\n        "n n n"\n  card:\n    - height: 140px\n    - width: 140px\n    - border-radius: 30px\n    - margin-bottom: 1px\n    - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05), 0px 0.5px 1.5px rgba(0, 0, 0, 0.07);\n    - background-color: |\n        [[[\n          return hass.themes.darkMode ? '#1f2022' : '#eeedf2';\n        ]]]\n  name:\n    - font-size: 1rem\n    - font-weight: bold\n    - justify-self: start\n    - align-self: center\n    - margin-left: 20px\n    - width: 100px\n    - text-align: left\n    - white-space: normal\n    - overflow-wrap: break-word\n    - word-break: break-word\n    - color: |\n        [[[\n          return hass.themes.darkMode ? '#e3e3e5' : '#1b1b1d';\n        ]]]\n  icon:\n    - color: |\n        [[[\n          return hass.themes.darkMode ? '#c4c7d0' : '#43484e';\n        ]]]\n`}(this._config.name||t.attributes.friendly_name,this._config.icon);return e}render(){return this._card?W`${this._card}`:W`<ha-card>Loading…</ha-card>`}createRenderRoot(){return this}};var Zn;Kn.styles=c`
    .ripple-card {
      position: relative;
      overflow: hidden;
    }
  `,i([ft({attribute:!1})],Kn.prototype,"hass",void 0),i([gt()],Kn.prototype,"_config",void 0),i([gt()],Kn.prototype,"_card",void 0),Kn=i([dt("google-control-card")],Kn),console.info(`%c  GOOGLE-SLIDER-CARD \n%c  ${Et("common.version")} 1.2.0    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),customElements.define("google-slider-card",Wn),customElements.get("google-button-card")||customElements.define("google-button-card",Lt),customElements.get("google-button-card-editor")||customElements.define("google-button-card-editor",Ut),customElements.get("google-dashboard-card")||customElements.define("google-dashboard-card",Vn),customElements.get("google-dashboard-card-editor")||customElements.define("google-dashboard-card-editor",Hn),customElements.get("google-climate-card")||customElements.define("google-climate-card",qn),customElements.get("google-climate-card-editor")||customElements.define("google-climate-card-editor",Gn),customElements.get("google-control-card")||customElements.define("google-control-card",Kn),window.customCards=null!==(Zn=window.customCards)&&void 0!==Zn?Zn:[],window.customCards.push({type:"google-slider-card",name:"Google Slider Card",preview:!0,description:"Google Slider Card for light entities."}),window.customCards.push({type:"google-button-card",name:"Google Button Card",preview:!0,description:"Google-style button card."}),window.customCards.push({type:"google-dashboard-card",name:"Google Dashboard Card",preview:!0,description:"Google-style Dashboard card."}),window.customCards.push({type:"google-climate-card",name:"Google Climate Card",preview:!0,description:"Google-style Climate card."}),window.customCards.push({type:"google-control-card",name:"Google Control Card",preview:!0,description:"Google-style Control card."});
