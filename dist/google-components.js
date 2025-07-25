const t="brightness",e={type:"custom:google-slider-card",attribute:t,tap_action:{action:"toggle",haptic:"light"},hold_action:{action:"more-info"},hold_time:600,settle_time:3e3,min_slide_time:0,min:0,max:100},i={type:"custom:google-button-card",attribute:t,hold_time:600,settle_time:3e3,min_slide_time:0,min:0,max:100};function n(t,e,i,n){var o,s=arguments.length,a=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(a=(s<3?o(a):s>3?o(e,i,a):o(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o=globalThis,s=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),r=new WeakMap;let l=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}};const c=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new l(i,t,a)},h=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new l("string"==typeof t?t:t+"",void 0,a))(e)})(t):t,{is:d,defineProperty:u,getOwnPropertyDescriptor:p,getOwnPropertyNames:g,getOwnPropertySymbols:f,getPrototypeOf:m}=Object,_=globalThis,b=_.trustedTypes,v=b?b.emptyScript:"",y=_.reactiveElementPolyfillSupport,w=(t,e)=>t,x={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},$=(t,e)=>!d(t,e),k={attribute:!0,type:String,converter:x,reflect:!1,useDefault:!1,hasChanged:$};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=k){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&u(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:o}=p(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){const s=n?.call(this);o?.call(this,e),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??k}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const t=m(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const t=this.properties,e=[...g(t),...f(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(s)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),n=o.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:x).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=i.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:x;this._$Em=n,this[n]=o.fromAttribute(e,t.type)??this._$Ej?.get(n)??null,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const n=this.constructor,o=this[t];if(i??=n.getPropertyOptions(t),!((i.hasChanged??$)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:o},s){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),!0!==o||void 0!==s)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,i,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[w("elementProperties")]=new Map,A[w("finalized")]=new Map,y?.({ReactiveElement:A}),(_.reactiveElementVersions??=[]).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const C=globalThis,E=C.trustedTypes,S=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,O="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,M="?"+T,I=`<${M}>`,j=document,P=()=>j.createComment(""),N=t=>null===t||"object"!=typeof t&&"function"!=typeof t,F=Array.isArray,L="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,z=/>/g,V=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,H=/"/g,Y=/^(?:script|style|textarea|title)$/i,W=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),G=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),q=new WeakMap,X=j.createTreeWalker(j,129);function K(t,e){if(!F(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const Z=(t,e)=>{const i=t.length-1,n=[];let o,s=2===e?"<svg>":3===e?"<math>":"",a=U;for(let e=0;e<i;e++){const i=t[e];let r,l,c=-1,h=0;for(;h<i.length&&(a.lastIndex=h,l=a.exec(i),null!==l);)h=a.lastIndex,a===U?"!--"===l[1]?a=R:void 0!==l[1]?a=z:void 0!==l[2]?(Y.test(l[2])&&(o=RegExp("</"+l[2],"g")),a=V):void 0!==l[3]&&(a=V):a===V?">"===l[0]?(a=o??U,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,r=l[1],a=void 0===l[3]?V:'"'===l[3]?H:D):a===H||a===D?a=V:a===R||a===z?a=U:(a=V,o=void 0);const d=a===V&&t[e+1].startsWith("/>")?" ":"";s+=a===U?i+I:c>=0?(n.push(r),i.slice(0,c)+O+i.slice(c)+T+d):i+T+(-2===c?e:d)}return[K(t,s+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]};class J{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let o=0,s=0;const a=t.length-1,r=this.parts,[l,c]=Z(t,e);if(this.el=J.createElement(l,i),X.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=X.nextNode())&&r.length<a;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(O)){const e=c[s++],i=n.getAttribute(t).split(T),a=/([.?@])?(.*)/.exec(e);r.push({type:1,index:o,name:a[2],strings:i,ctor:"."===a[1]?nt:"?"===a[1]?ot:"@"===a[1]?st:it}),n.removeAttribute(t)}else t.startsWith(T)&&(r.push({type:6,index:o}),n.removeAttribute(t));if(Y.test(n.tagName)){const t=n.textContent.split(T),e=t.length-1;if(e>0){n.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],P()),X.nextNode(),r.push({type:2,index:++o});n.append(t[e],P())}}}else if(8===n.nodeType)if(n.data===M)r.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf(T,t+1));)r.push({type:7,index:o}),t+=T.length-1}o++}}static createElement(t,e){const i=j.createElement("template");return i.innerHTML=t,i}}function Q(t,e,i=t,n){if(e===G)return e;let o=void 0!==n?i._$Co?.[n]:i._$Cl;const s=N(e)?void 0:e._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),void 0===s?o=void 0:(o=new s(t),o._$AT(t,i,n)),void 0!==n?(i._$Co??=[])[n]=o:i._$Cl=o),void 0!==o&&(e=Q(t,o._$AS(t,e.values),o,n)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??j).importNode(e,!0);X.currentNode=n;let o=X.nextNode(),s=0,a=0,r=i[0];for(;void 0!==r;){if(s===r.index){let e;2===r.type?e=new et(o,o.nextSibling,this,t):1===r.type?e=new r.ctor(o,r.name,r.strings,this,t):6===r.type&&(e=new at(o,this,t)),this._$AV.push(e),r=i[++a]}s!==r?.index&&(o=X.nextNode(),s++)}return X.currentNode=j,n}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),N(t)?t===B||null==t||""===t?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==G&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>F(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==B&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(j.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=J.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new tt(n,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new J(t)),e}k(t){F(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const o of t)n===e.length?e.push(i=new et(this.O(P()),this.O(P()),this,this.options)):i=e[n],i._$AI(o),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class it{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,o){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=B}_$AI(t,e=this,i,n){const o=this.strings;let s=!1;if(void 0===o)t=Q(this,t,e,0),s=!N(t)||t!==this._$AH&&t!==G,s&&(this._$AH=t);else{const n=t;let a,r;for(t=o[0],a=0;a<o.length-1;a++)r=Q(this,n[i+a],e,a),r===G&&(r=this._$AH[a]),s||=!N(r)||r!==this._$AH[a],r===B?t=B:t!==B&&(t+=(r??"")+o[a+1]),this._$AH[a]=r}s&&!n&&this.j(t)}j(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class nt extends it{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===B?void 0:t}}class ot extends it{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==B)}}class st extends it{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??B)===G)return;const i=this._$AH,n=t===B&&i!==B||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==B&&(i===B||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class at{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const rt=C.litHtmlPolyfillSupport;rt?.(J,et),(C.litHtmlVersions??=[]).push("3.3.0");const lt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ct=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const n=i?.renderBefore??e;let o=n._$litPart$;if(void 0===o){const t=i?.renderBefore??null;n._$litPart$=o=new et(e.insertBefore(P(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return G}};ct._$litElement$=!0,ct.finalized=!0,lt.litElementHydrateSupport?.({LitElement:ct});const ht=lt.litElementPolyfillSupport;ht?.({LitElement:ct}),(lt.litElementVersions??=[]).push("4.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dt=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ut={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:$},pt=(t=ut,e,i)=>{const{kind:n,metadata:o}=i;let s=globalThis.litPropertyMetadata.get(o);if(void 0===s&&globalThis.litPropertyMetadata.set(o,s=new Map),"setter"===n&&((t=Object.create(t)).wrapped=!0),s.set(i.name,t),"accessor"===n){const{name:n}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(n,o,t)},init(e){return void 0!==e&&this.C(n,void 0,t,e),e}}}if("setter"===n){const{name:n}=i;return function(i){const o=this[n];e.call(this,i),this.requestUpdate(n,o,t)}}throw Error("Unsupported decorator location: "+n)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function gt(t){return(e,i)=>"object"==typeof i?pt(t,e,i):((t,e,i)=>{const n=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),n?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ft(t){return gt({...t,state:!0,attribute:!1})}var mt={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",no_entity_set:"Entity not set",no_entity:"Entity not available",on:"On",off:"Off",offline:"Offline",auto:"Auto",heat:"Heat",cool:"Cool",playing:"Playing",idle:"Cast",presence:"Motion",off_presence:"No motion"},_t={description:"Configure the navigation path when a card is tapped.",cameras:"Cameras path",cameras_name:"Cameras",lighting:"Lighting path",lighting_name:"Lighting",lighting_label:"Lights",wifi:"Wi-Fi path",wifi_name:"Wi-Fi",climate:"Climate path",climate_name:"Climate",device:"Device",devices:"Devices",placeholder:"./path-or-url",default:"Use default configuration on Tap (Single Tap)",tap_type:"Select the type of Tap (Single Tap, Hold Press, Double Tap)",single:"Single Tap",hold:"Hold Press",double:"Double Tap",web:"Use Single Tap on Browser (Selected tap on mobile)"},bt={name:"Entity Name",entity:"Entity",theme:"Use Material Expressive",increase_temp:"Increase Temperature (e.g. 0.5)",decrease_temp:"Decrease Temperature (e.g. 0.5)",dual_icon:{default:"Use Default Icon",options:"Use Dual Icon (On and Off states)."},fix_temperature:"Enable if temperature is not correct"},vt={name:"Entity Name",control_type:"Control Type",type:{generic:"Generic (Switch, Button...)",thermometer:"Thermometer",scene:"Autonomation and scene",media:"Multimedia (Google, Alexa...)"},dual_icon:{default:"Use default icon",options:"Use dual icon (Element On and Element Off)."},dual_text:{default:"Use Default Text",text_on:"Text On",text_off:"Text Off"},toggle:{title:"Enable automatic actions",press:"Action on click",hold:"Action on long press",click:"Single click (On/Off)",info:"Show information"}},yt={common:mt,google_dashboard_card:_t,google_climate_card:bt,google_button_card:vt},wt={version:"Versione",invalid_configuration:"Configurazione non valida",show_warning:"Mostra avviso",no_entity_set:"Entità non impostata",no_entity:"Entità non disponibile",on:"Acceso",off:"Spento",offline:"Offline",auto:"Auto",heat:"Riscalda",cool:"Raffresca",playing:"Riproduzione",idle:"Cast",presence:"Movimento",off_presence:"Nessun movimento"},xt={description:"Configura il percorso di navigazione quando una card viene cliccata.",cameras:"Percorso delle telecamere",cameras_name:"Telecamere",lighting:"Percorso delle luci",lighting_name:"Illuminazione",lighting_label:"Luci",wifi:"Percorso Wi-Fi",wifi_name:"Wi-Fi",climate:"Percorso del clima",climate_name:"Climatizzazione",device:"Dispositivo",devices:"Dispositivi",placeholder:"./percorso-o-url",default:"Usa configurazione di default al Tap(Tap Singolo)",tap_type:"Seleziona il tipo di Tap (Tap Singolo, Hold Press, Double Tap)",single:"Tap Singolo",hold:"Tap a pressione",double:"Doppio Tap",web:"Usa Tap Singolo sul Browser (Su mobile il tap selezionato)"},$t={name:"Nome Entità",entity:"Entità",theme:"Usa Material Expressive",increase_temp:"Aumento Temperatura (e.g. 0.5)",decrease_temp:"Diminuzione Temperatura (e.g. 0.5)",dual_icon:{default:"Usa Icona di default",options:"Usa doppia icona (Elemento acceso e spento)."},fix_temperature:"Abilita se la temperatura non è corretta"},kt={name:"Nome Entità",control_type:"Tipo di controllo",type:{generic:"Generico (Interruttore, Pulsante...)",thermometer:"Termometro",scene:"Autonomazioni e scene",media:"Multimedia (Google, Alexa...)"},dual_icon:{default:"Usa Icona di default",options:"Usa doppia icona (Elemento acceso e spento)."},dual_text:{default:"Usa Testo di Default",text_on:"Testo On",text_off:"Testo Off"},toggle:{title:"Attiva azioni automatiche",press:"Azione al clic",hold:"Azione alla pressione prolungata",click:"Clic singolo (Accensione/Spegnimento)",info:"Visualizza informazioni"}},At={common:wt,google_dashboard_card:xt,google_climate_card:$t,google_button_card:kt};const Ct={en:Object.freeze({__proto__:null,common:mt,default:yt,google_button_card:vt,google_climate_card:bt,google_dashboard_card:_t}),it:Object.freeze({__proto__:null,common:wt,default:At,google_button_card:kt,google_climate_card:$t,google_dashboard_card:xt})};function Et(t,e="",i=""){const n=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let o;try{o=t.split(".").reduce((t,e)=>t[e],Ct[n])}catch(e){o=t.split(".").reduce((t,e)=>t[e],Ct.en)}return void 0===o&&(o=t.split(".").reduce((t,e)=>t[e],Ct.en)),""!==e&&""!==i&&(o=o.replace(e,i)),o}var St,Ot;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(St||(St={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(Ot||(Ot={}));var Tt,Mt,It,jt,Pt,Nt=function(t,e,i,n){n=n||{},i=null==i?{}:i;var o=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return o.detail=i,t.dispatchEvent(o),o};function Ft(t,e){if(!t)return;const i=document.createElement("span");i.classList.add("ripple");const n=t.getBoundingClientRect(),o=Math.max(n.width,n.height);i.style.width=i.style.height=`${o}px`;const s=e.clientX-n.left-o/2,a=e.clientY-n.top-o/2;i.style.left=`${s}px`,i.style.top=`${a}px`,Object.assign(i.style,{position:"absolute",borderRadius:"50%",background:"rgba(255, 255, 255, 0.3)",transform:"scale(0)",animation:"ripple-animation 600ms ease-out",pointerEvents:"none",zIndex:"1"});const r=getComputedStyle(t);"static"===r.position&&(t.style.position="relative"),"hidden"!==r.overflow&&(t.style.overflow="hidden"),t.appendChild(i),i.addEventListener("animationend",()=>i.remove())}function Lt(t){return Object.values(It).includes(t)}function Ut(t){const e=t.device_class,i=t.state_class;return"string"==typeof e&&Lt(e)?e:"string"==typeof i&&Lt(i)?i:void 0}!function(t){t.GENERIC="generic",t.THERMOMETER="thermometer",t.SCENE="scene",t.MEDIA_PLAYER="media_player"}(Tt||(Tt={})),function(t){t.BINARY_SENSOR="binary_sensor",t.SENSOR="sensor",t.SWITCH="switch"}(Mt||(Mt={})),function(t){t.MOTION="motion",t.CONNECTIVITY="connectivity",t.MEASUREMENT="measurement"}(It||(It={})),function(t){t.ON="on",t.AUTO="auto",t.HEAT="heat",t.COOL="cool",t.HEAT_COOL="heat_cool",t.FAN_ONLY="fan_only",t.FAN="fan",t.DRY="dry",t.ECO="eco",t.IDLE="idle",t.PLAYING="playing",t.PAUSE="pause"}(jt||(jt={})),function(t){t.OFF="off"}(Pt||(Pt={}));const Rt=Object.assign(Object.assign({},jt),Pt);function zt(t){const e=Number.parseInt(t);return!(!isNaN(e)&&0!==e)&&Object.values(jt).includes(t)}function Vt(t){return Object.values(jt).includes(t)||Object.values(Pt).includes(t)}function Dt(t,e=""){const i=Number.parseInt(t);return!(!isNaN(i)&&0!==i)&&(("scene"!=e||"unknown"!=t)&&!Vt(t))}var Ht;!function(t){t.CLICK="toggle",t.HOLD="info"}(Ht||(Ht={}));const Yt={dark:{offline:{climate:{title:"#717173",icon:"#717173",background:"#2c2c2e"},button:{title:"#717173",icon:"#717173",percentage:"#717173",background:"#2c2c2e"},light:{title:"#717173",icon:"#717173",percentage:"#717173",slider:"#2c2c2e",background:"#2c2c2e"}},on:{climate:{material:{title:"#fedcca",subtitle:"#e6c0b2",icon:"#fedcca",button:"#4b332b",background:"rgba(92, 64, 53, 0.85)"},default:{title:"#c3c3c5",subtitle:"#c3c3c5",icon:"#c3c3c5",button:"#5c5b60",background:"rgba(65, 66, 70, 0.83)"}},button:{title:"#d8e3f7",icon:"#d8e3f7",percentage:"#d8e3f7",background:"#3e4758"},light:{title:"#ffe083",icon:"#ffe083",percentage:"#ffe083",slider:"#50472a",background:"#333029"}},off:{climate:{default:{title:"#c3c3c5",subtitle:"#c3c3c5",icon:"#c3c3c5",button:"#5c5b60",background:"#414246"}},button:{title:"#e3e3e5",icon:"#e3e3e5",percentage:"#e3e3e5",background:"#292a2e"},light:{title:"#e3e3e5",icon:"#e3e3e5",percentage:"#e3e3e5",slider:"#292a2e",background:"#292a2e"}}},light:{offline:{climate:{title:"#949496",icon:"#949496",background:"rgba(223, 223, 225, 0.85)"},button:{title:"#949496",icon:"#949496",percentage:"#949496",background:"#dfdfe1"},light:{title:"#959597",icon:"#959597",percentage:"#959597",slider:"#dfdfe1",background:"#dfdfe1"}},on:{climate:{material:{title:"#812800",subtitle:"#812800",icon:"#812800",button:"rgba(245, 180, 150, 0.6)",background:"rgba(258, 193.8, 166, 0.3)"},default:{title:"#525252",subtitle:"#525252",icon:"#525252",button:"#c1c1c3",background:"rgba(221, 221, 223, 0.83)"}},button:{title:"#131c2b",icon:"#131c2b",percentage:"#131c2b",background:"#d8e3f7"},light:{title:"#745b00",icon:"#745b00",percentage:"#745b00",slider:"#ffe083",background:"#feefc8"}},off:{climate:{default:{title:"#525252",subtitle:"#525252",icon:"#525252",button:"#c1c1c3",background:"#dddddf"}},button:{title:"#1b1b1d",icon:"#1b1b1d",percentage:"#1b1b1d",background:"#e8e8ea"},light:{title:"#1b1b1d",icon:"#1b1b1d",percentage:"#1b1b1d",slider:"#e8e8ea",background:"#e8e8ea"}}}};var Wt;function Gt(t,e,i){var n,o,s;const a=t.entity_id.split(".")[0],r=t.state,l=null!==(n=e.control_type)&&void 0!==n?n:"generic",c=null===(o=e.use_default_icon)||void 0===o||o,h=zt(r);if(!c)return e.dual_icon?h?e.icon_on||`mdi:${a}`:e.icon_off||`mdi:${a}`:e.icon||`mdi:${a}`;switch(l){case Tt.THERMOMETER:switch(r){case"auto":case"heat_cool":return"mdi:thermostat-auto";case"heat":return"mdi:fire";case"cool":return"mdi:snowflake";case"off":return"mdi:thermometer-off";default:return"mdi:thermometer"}case Tt.SCENE:return"mdi:creation-outline";case Tt.MEDIA_PLAYER:const n=i.entities[e.entity].device_id,o=i.devices[n].model||null;if(o)switch(o){case Wt.NEST_MINI:return h?"m3of:nest-mini":"m3o:nest-mini";case Wt.GOOGLE_HOME:return h?"m3of:home-speaker":"m3o:home-speaker";case Wt.NEST_HUB:return h?"m3of:nest-display":"m3o:nest-display";case Wt.GOOGLE_CAST_GROUP:return h?"m3rf:speaker-group":"m3r:speaker-group";default:return h?"m3rf:tv-gen":"m3r:tv-gen"}break;case Tt.GENERIC:{const e=zt(r);if(a==Mt.BINARY_SENSOR||a==Mt.SENSOR){switch(Ut(t.attributes)){case It.CONNECTIVITY:return e?"m3of:nest-wifi-router":"m3o:nest-wifi-router";case It.MOTION:return e?"m3rf:sensors-krx":"m3r:sensors-krx";case It.MEASUREMENT:return"mdi:scale-bathroom"}}if(a==Mt.SWITCH)return e?"m3rf:switch":"m3r:switch"}}if(null===(s=t.attributes.icon)||void 0===s?void 0:s.trim())return t.attributes.icon;const d=i.entities[e.entity];return d&&d.icon?d.icon:`mdi:${a}`}function Bt(t,e,i,n=!1,o=!1){let s="";if(e!==Tt.THERMOMETER||i||(s=t.attributes.current_temperature?" • "+(n?5*t.attributes.current_temperature:t.attributes.current_temperature)+"°":""),e===Tt.MEDIA_PLAYER&&!i){if(!zt(t.state))return"";const e=(a=t.attributes.app_name,r="",null!=a?a:r);s=e?" • "+e:""}var a,r;return function(t,e="",i=!1){if(!Vt(t))return Et("common.offline");const n={[Rt.ON]:Et(i?"common.presence":"common.on"),[Rt.OFF]:Et(i?"common.off_presence":"common.off"),[Rt.AUTO]:Et("common.auto"),[Rt.HEAT]:Et("common.heat"),[Rt.COOL]:Et("common.cool"),[Rt.HEAT_COOL]:Et("common.auto"),[Rt.IDLE]:Et("common.idle"),[Rt.PAUSE]:Et("common.idle"),[Rt.PLAYING]:Et("common.playing")},o=n[t]||t;return""!=e?o+e:o}(t.state,s,o)}!function(t){t.NEST_MINI="Google Nest Mini",t.GOOGLE_HOME="Google Home",t.NEST_HUB="Google Nest Hub",t.GOOGLE_TV_STREAMER="Google TV Streamer",t.GOOGLE_CAST_GROUP="Google Cast Group"}(Wt||(Wt={}));let qt=class extends ct{constructor(){super(...arguments),this._config=i,this.color=Yt,this._moved=!1}setConfig(t){if(!t||!t.entity)throw new Error(Et("common.invalid_configuration"));this._config=t}static getStubConfig(t,e){const i=e.filter(t=>"switch"===t.split(".")[0]).sort();return{type:"custom:google-button-card",entity:i[Math.floor(Math.random()*i.length)],icon:"mdi:switch",height:97}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("google-button-card-editor")}updated(){requestAnimationFrame(()=>{const t=this.renderRoot.querySelector(".state-wrapper"),e=this.renderRoot.querySelector(".state");if(t&&e){e.scrollWidth>t.clientWidth?e.classList.add("scroll"):e.classList.remove("scroll")}})}_onClick(t){Ft(t.currentTarget,t),this._toggle()}_toggle(){var t,e;if(navigator.vibrate&&navigator.vibrate(50),!this._config||!this.hass)return;const i=this._config.entity;if(!i)return;const n=i.split(".")[0],o=null!==(t=this._config.control_type)&&void 0!==t?t:"generic",s=["light","switch","fan","climate","input_boolean","cover","script"];if(null===(e=this._config.use_default_toggle)||void 0===e||e){return s.includes(n)&&o!=Tt.THERMOMETER&&o!=Tt.MEDIA_PLAYER?this.hass.callService("homeassistant","toggle",{entity_id:i}):Nt(this,"hass-more-info",{entityId:i})}return this._config.tap_action===Ht.CLICK?this.hass.callService("homeassistant","toggle",{entity_id:i}):Nt(this,"hass-more-info",{entityId:i})}_startPress(t){this._cancelPress(),this._moved=!1,t instanceof TouchEvent&&t.touches.length>0?(this._startX=t.touches[0].clientX,this._startY=t.touches[0].clientY):t instanceof MouseEvent&&(this._startX=t.clientX,this._startY=t.clientY),this._pressTimer=window.setTimeout(()=>{this._pressTimer=void 0,this._moved||this._handleHold()},500)}_handleMove(t){if(!this._startX||!this._startY||0===t.touches.length)return;const e=t.touches[0].clientX,i=t.touches[0].clientY,n=Math.abs(e-this._startX),o=Math.abs(i-this._startY);(n>10||o>10)&&(this._moved=!0,this._cancelPress())}_cancelPress(t){this._pressTimer&&(clearTimeout(this._pressTimer),this._pressTimer=void 0,!this._moved&&t instanceof MouseEvent&&this._onClick(t))}_handleHold(){var t,e,i;if(null===(t=navigator.vibrate)||void 0===t||t.call(navigator,50),!this._config||!this.hass)return;const n=this._config.entity,o=null!==(e=this._config.control_type)&&void 0!==e?e:"generic",s=null===(i=this._config.use_default_toggle)||void 0===i||i;if(!n)return;const a=n.split(".")[0],r=["light","switch","fan","climate","input_boolean","cover","script"].includes(a),l=o===Tt.MEDIA_PLAYER;if(s)r||!l?Nt(this,"hass-more-info",{entityId:n}):this.hass.callService("homeassistant","toggle",{entity_id:n});else{this._config.hold_action===Ht.CLICK?this.hass.callService("homeassistant","toggle",{entity_id:n}):Nt(this,"hass-more-info",{entityId:n})}}render(){var t,e,i;if(!this._config||!this.hass)return W``;const n=this.hass.states[this._config.entity];if(!n)return W`<ha-card
        ><div class="warning">${Et("common.no_entity")}</div></ha-card
      >`;const o=zt(n.state),s=this._config.name||n.attributes.friendly_name,a=Gt(n,this._config,this.hass),r=Dt(n.state,this._config.control_type),l=Ut(n.attributes);let c;const h=null===(t=this._config.use_default_text)||void 0===t||t;h?c=Bt(n,this._config.control_type,r,this._config.fix_temperature,l==It.MOTION):(c=o?this._config.text_on:this._config.text_off,Dt(n.state)&&(c=Et("common.offline")));const d=(null===(i=null===(e=this.hass)||void 0===e?void 0:e.themes)||void 0===i?void 0:i.darkMode)?"dark":"light";return this.setColorCard(this._config.control_type,d,r,o),W`
      <ha-card
        class="google-button ${o?"on":"off"}"
        @mousedown=${this._startPress}
        @touchstart=${this._startPress}
        @mouseup=${this._cancelPress}
        @mouseleave=${this._cancelPress}
        @touchend=${this._cancelPress}
        @touchcancel=${this._cancelPress}
        @touchmove=${this._handleMove}
        style="${r||this._config.control_type==Tt.THERMOMETER||this._config.control_type==Tt.MEDIA_PLAYER?"padding: 12px 35px 12px 12px":"padding: 12px 12px"}"
      >
        <div class="content">
          <ha-icon .icon=${a} class="icon"></ha-icon>
          <div class="text">
            <div class="name">${s}</div>
            ${l==It.MEASUREMENT||this._config.control_type==Tt.SCENE&&h||this._config.control_type==Tt.MEDIA_PLAYER&&!o?W``:W`<div class="state-wrapper">
                  <div class="state">${c}</div>
                </div>`}
          </div>
        </div>
        ${r?W`<ha-icon
              id="icon_offline"
              icon="m3rf:warning"
              style="position: absolute; right: 13px; top: 50%; transform: translateY(-50%); color: var(--bsc-icon-color); --mdc-icon-size: 20px;"
              title="Offline"
            ></ha-icon>`:this._config.control_type==Tt.THERMOMETER||this._config.control_type==Tt.MEDIA_PLAYER?W`<ha-icon
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
    `}setColorCard(t,e,i,n){let o="",s="",a="",r="";i?"light"===e?(o=this.color.light.offline.button.title,s=this.color.light.offline.button.icon,a=this.color.light.offline.button.percentage,r=this.color.light.offline.button.background):(o=this.color.dark.offline.button.title,s=this.color.dark.offline.button.icon,a=this.color.dark.offline.button.percentage,r=this.color.dark.offline.button.background):n?"dark"===e?"thermometer"===t&&this._config.use_material_color?(o=this.color.dark.on.climate.material.title,s=this.color.dark.on.climate.material.icon,a=this.color.dark.on.climate.material.subtitle,r=this.color.dark.on.climate.material.background):(o=this.color.dark.on.button.title,s=this.color.dark.on.button.icon,a=this.color.dark.on.button.percentage,r=this.color.dark.on.button.background):"thermometer"===t&&this._config.use_material_color?(o=this.color.light.on.climate.material.title,s=this.color.light.on.climate.material.icon,a=this.color.light.on.climate.material.subtitle,r=this.color.light.on.climate.material.background):(o=this.color.light.on.button.title,s=this.color.light.on.button.icon,a=this.color.light.on.button.percentage,r=this.color.light.on.button.background):"dark"===e?(o=this.color.dark.off.button.title,s=this.color.dark.off.button.icon,a=this.color.dark.off.button.percentage,r=this.color.dark.off.button.background):(o=this.color.light.off.button.title,s=this.color.light.off.button.icon,a=this.color.light.off.button.percentage,r=this.color.light.off.button.background),this._setStyleProperty("--bsc-name-color",o),this._setStyleProperty("--bsc-icon-color",s),this._setStyleProperty("--bsc-percentage-color",a),this._setStyleProperty("--bsc-background",r),this._setStyleProperty("--bsc-height",this._config.height||97,t=>`${t}px`),this._setStyleProperty("--bsc-border-radius",this._config.border_radius)}_setStyleProperty(t,e,i=t=>t){null!=e&&""!==e&&this.style.setProperty(t,i(e))}};
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function Xt(t){return null==t}qt.styles=c`
    :host {
      --bsc-height: var(--ha-card-height, 97px);
      --bsc-border-radius: var(--ha-card-border-radius);
    }

    ha-card.google-button {
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 12px 12px;
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
      width: 34px;
      height: 34px;
      color: var(--bsc-icon-color);
      align-content: center;
    }

    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1; /* Aggiungi questo */
      min-width: 0; /* Necessario per evitare overflow nel flex */
    }

    .name {
      color: var(--bsc-name-color);
      font-size: 15px;
      font-weight: 550;
      line-height: 1.35;
    }

    .state {
      font-size: 13px;
      color: var(--bsc-percentage-color);
      font-weight: 500;
    }

    .state-wrapper {
      overflow: hidden;
      position: relative;
      max-width: 100%; /* Cambia da 170px */
    }

    .state {
      display: inline-block;
      white-space: nowrap;
    }

    .state.scroll {
      animation: scroll-text 8s linear infinite;
    }

    @keyframes scroll-text {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-100%);
      }
    }

    .warning {
      padding: 16px;
      color: red;
      font-weight: bold;
    }

    @media (max-width: 420px) {
      /*.name,
      .state {
        font-size: small;
      }
      .name {
        line-height: 1.4;
      }*/
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
  `,n([gt({attribute:!1})],qt.prototype,"hass",void 0),n([ft()],qt.prototype,"_config",void 0),qt=n([dt("google-button-card")],qt);var Kt={isNothing:Xt,isObject:function(t){return"object"==typeof t&&null!==t},toArray:function(t){return Array.isArray(t)?t:Xt(t)?[]:[t]},repeat:function(t,e){var i,n="";for(i=0;i<e;i+=1)n+=t;return n},isNegativeZero:function(t){return 0===t&&Number.NEGATIVE_INFINITY===1/t},extend:function(t,e){var i,n,o,s;if(e)for(i=0,n=(s=Object.keys(e)).length;i<n;i+=1)t[o=s[i]]=e[o];return t}};function Zt(t,e){var i="",n=t.reason||"(unknown reason)";return t.mark?(t.mark.name&&(i+='in "'+t.mark.name+'" '),i+="("+(t.mark.line+1)+":"+(t.mark.column+1)+")",!e&&t.mark.snippet&&(i+="\n\n"+t.mark.snippet),n+" "+i):n}function Jt(t,e){Error.call(this),this.name="YAMLException",this.reason=t,this.mark=e,this.message=Zt(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack||""}Jt.prototype=Object.create(Error.prototype),Jt.prototype.constructor=Jt,Jt.prototype.toString=function(t){return this.name+": "+Zt(this,t)};var Qt=Jt;function te(t,e,i,n,o){var s="",a="",r=Math.floor(o/2)-1;return n-e>r&&(e=n-r+(s=" ... ").length),i-n>r&&(i=n+r-(a=" ...").length),{str:s+t.slice(e,i).replace(/\t/g,"→")+a,pos:n-e+s.length}}function ee(t,e){return Kt.repeat(" ",e-t.length)+t}var ie=function(t,e){if(e=Object.create(e||null),!t.buffer)return null;e.maxLength||(e.maxLength=79),"number"!=typeof e.indent&&(e.indent=1),"number"!=typeof e.linesBefore&&(e.linesBefore=3),"number"!=typeof e.linesAfter&&(e.linesAfter=2);for(var i,n=/\r?\n|\r|\0/g,o=[0],s=[],a=-1;i=n.exec(t.buffer);)s.push(i.index),o.push(i.index+i[0].length),t.position<=i.index&&a<0&&(a=o.length-2);a<0&&(a=o.length-1);var r,l,c="",h=Math.min(t.line+e.linesAfter,s.length).toString().length,d=e.maxLength-(e.indent+h+3);for(r=1;r<=e.linesBefore&&!(a-r<0);r++)l=te(t.buffer,o[a-r],s[a-r],t.position-(o[a]-o[a-r]),d),c=Kt.repeat(" ",e.indent)+ee((t.line-r+1).toString(),h)+" | "+l.str+"\n"+c;for(l=te(t.buffer,o[a],s[a],t.position,d),c+=Kt.repeat(" ",e.indent)+ee((t.line+1).toString(),h)+" | "+l.str+"\n",c+=Kt.repeat("-",e.indent+h+3+l.pos)+"^\n",r=1;r<=e.linesAfter&&!(a+r>=s.length);r++)l=te(t.buffer,o[a+r],s[a+r],t.position-(o[a]-o[a+r]),d),c+=Kt.repeat(" ",e.indent)+ee((t.line+r+1).toString(),h)+" | "+l.str+"\n";return c.replace(/\n$/,"")},ne=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],oe=["scalar","sequence","mapping"];var se=function(t,e){if(e=e||{},Object.keys(e).forEach(function(e){if(-1===ne.indexOf(e))throw new Qt('Unknown option "'+e+'" is met in definition of "'+t+'" YAML type.')}),this.options=e,this.tag=t,this.kind=e.kind||null,this.resolve=e.resolve||function(){return!0},this.construct=e.construct||function(t){return t},this.instanceOf=e.instanceOf||null,this.predicate=e.predicate||null,this.represent=e.represent||null,this.representName=e.representName||null,this.defaultStyle=e.defaultStyle||null,this.multi=e.multi||!1,this.styleAliases=function(t){var e={};return null!==t&&Object.keys(t).forEach(function(i){t[i].forEach(function(t){e[String(t)]=i})}),e}(e.styleAliases||null),-1===oe.indexOf(this.kind))throw new Qt('Unknown kind "'+this.kind+'" is specified for "'+t+'" YAML type.')};function ae(t,e){var i=[];return t[e].forEach(function(t){var e=i.length;i.forEach(function(i,n){i.tag===t.tag&&i.kind===t.kind&&i.multi===t.multi&&(e=n)}),i[e]=t}),i}function re(t){return this.extend(t)}re.prototype.extend=function(t){var e=[],i=[];if(t instanceof se)i.push(t);else if(Array.isArray(t))i=i.concat(t);else{if(!t||!Array.isArray(t.implicit)&&!Array.isArray(t.explicit))throw new Qt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");t.implicit&&(e=e.concat(t.implicit)),t.explicit&&(i=i.concat(t.explicit))}e.forEach(function(t){if(!(t instanceof se))throw new Qt("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(t.loadKind&&"scalar"!==t.loadKind)throw new Qt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(t.multi)throw new Qt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),i.forEach(function(t){if(!(t instanceof se))throw new Qt("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var n=Object.create(re.prototype);return n.implicit=(this.implicit||[]).concat(e),n.explicit=(this.explicit||[]).concat(i),n.compiledImplicit=ae(n,"implicit"),n.compiledExplicit=ae(n,"explicit"),n.compiledTypeMap=function(){var t,e,i={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function n(t){t.multi?(i.multi[t.kind].push(t),i.multi.fallback.push(t)):i[t.kind][t.tag]=i.fallback[t.tag]=t}for(t=0,e=arguments.length;t<e;t+=1)arguments[t].forEach(n);return i}(n.compiledImplicit,n.compiledExplicit),n};var le=re,ce=new se("tag:yaml.org,2002:str",{kind:"scalar",construct:function(t){return null!==t?t:""}}),he=new se("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(t){return null!==t?t:[]}}),de=new se("tag:yaml.org,2002:map",{kind:"mapping",construct:function(t){return null!==t?t:{}}}),ue=new le({explicit:[ce,he,de]});var pe=new se("tag:yaml.org,2002:null",{kind:"scalar",resolve:function(t){if(null===t)return!0;var e=t.length;return 1===e&&"~"===t||4===e&&("null"===t||"Null"===t||"NULL"===t)},construct:function(){return null},predicate:function(t){return null===t},represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});var ge=new se("tag:yaml.org,2002:bool",{kind:"scalar",resolve:function(t){if(null===t)return!1;var e=t.length;return 4===e&&("true"===t||"True"===t||"TRUE"===t)||5===e&&("false"===t||"False"===t||"FALSE"===t)},construct:function(t){return"true"===t||"True"===t||"TRUE"===t},predicate:function(t){return"[object Boolean]"===Object.prototype.toString.call(t)},represent:{lowercase:function(t){return t?"true":"false"},uppercase:function(t){return t?"TRUE":"FALSE"},camelcase:function(t){return t?"True":"False"}},defaultStyle:"lowercase"});function fe(t){return 48<=t&&t<=57||65<=t&&t<=70||97<=t&&t<=102}function me(t){return 48<=t&&t<=55}function _e(t){return 48<=t&&t<=57}var be=new se("tag:yaml.org,2002:int",{kind:"scalar",resolve:function(t){if(null===t)return!1;var e,i=t.length,n=0,o=!1;if(!i)return!1;if("-"!==(e=t[n])&&"+"!==e||(e=t[++n]),"0"===e){if(n+1===i)return!0;if("b"===(e=t[++n])){for(n++;n<i;n++)if("_"!==(e=t[n])){if("0"!==e&&"1"!==e)return!1;o=!0}return o&&"_"!==e}if("x"===e){for(n++;n<i;n++)if("_"!==(e=t[n])){if(!fe(t.charCodeAt(n)))return!1;o=!0}return o&&"_"!==e}if("o"===e){for(n++;n<i;n++)if("_"!==(e=t[n])){if(!me(t.charCodeAt(n)))return!1;o=!0}return o&&"_"!==e}}if("_"===e)return!1;for(;n<i;n++)if("_"!==(e=t[n])){if(!_e(t.charCodeAt(n)))return!1;o=!0}return!(!o||"_"===e)},construct:function(t){var e,i=t,n=1;if(-1!==i.indexOf("_")&&(i=i.replace(/_/g,"")),"-"!==(e=i[0])&&"+"!==e||("-"===e&&(n=-1),e=(i=i.slice(1))[0]),"0"===i)return 0;if("0"===e){if("b"===i[1])return n*parseInt(i.slice(2),2);if("x"===i[1])return n*parseInt(i.slice(2),16);if("o"===i[1])return n*parseInt(i.slice(2),8)}return n*parseInt(i,10)},predicate:function(t){return"[object Number]"===Object.prototype.toString.call(t)&&t%1==0&&!Kt.isNegativeZero(t)},represent:{binary:function(t){return t>=0?"0b"+t.toString(2):"-0b"+t.toString(2).slice(1)},octal:function(t){return t>=0?"0o"+t.toString(8):"-0o"+t.toString(8).slice(1)},decimal:function(t){return t.toString(10)},hexadecimal:function(t){return t>=0?"0x"+t.toString(16).toUpperCase():"-0x"+t.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),ve=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");var ye=/^[-+]?[0-9]+e/;var we=new se("tag:yaml.org,2002:float",{kind:"scalar",resolve:function(t){return null!==t&&!(!ve.test(t)||"_"===t[t.length-1])},construct:function(t){var e,i;return i="-"===(e=t.replace(/_/g,"").toLowerCase())[0]?-1:1,"+-".indexOf(e[0])>=0&&(e=e.slice(1)),".inf"===e?1===i?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:".nan"===e?NaN:i*parseFloat(e,10)},predicate:function(t){return"[object Number]"===Object.prototype.toString.call(t)&&(t%1!=0||Kt.isNegativeZero(t))},represent:function(t,e){var i;if(isNaN(t))switch(e){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===t)switch(e){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===t)switch(e){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Kt.isNegativeZero(t))return"-0.0";return i=t.toString(10),ye.test(i)?i.replace("e",".e"):i},defaultStyle:"lowercase"}),xe=ue.extend({implicit:[pe,ge,be,we]}),$e=xe,ke=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Ae=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");var Ce=new se("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:function(t){return null!==t&&(null!==ke.exec(t)||null!==Ae.exec(t))},construct:function(t){var e,i,n,o,s,a,r,l,c=0,h=null;if(null===(e=ke.exec(t))&&(e=Ae.exec(t)),null===e)throw new Error("Date resolve error");if(i=+e[1],n=+e[2]-1,o=+e[3],!e[4])return new Date(Date.UTC(i,n,o));if(s=+e[4],a=+e[5],r=+e[6],e[7]){for(c=e[7].slice(0,3);c.length<3;)c+="0";c=+c}return e[9]&&(h=6e4*(60*+e[10]+ +(e[11]||0)),"-"===e[9]&&(h=-h)),l=new Date(Date.UTC(i,n,o,s,a,r,c)),h&&l.setTime(l.getTime()-h),l},instanceOf:Date,represent:function(t){return t.toISOString()}});var Ee=new se("tag:yaml.org,2002:merge",{kind:"scalar",resolve:function(t){return"<<"===t||null===t}}),Se="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";var Oe=new se("tag:yaml.org,2002:binary",{kind:"scalar",resolve:function(t){if(null===t)return!1;var e,i,n=0,o=t.length,s=Se;for(i=0;i<o;i++)if(!((e=s.indexOf(t.charAt(i)))>64)){if(e<0)return!1;n+=6}return n%8==0},construct:function(t){var e,i,n=t.replace(/[\r\n=]/g,""),o=n.length,s=Se,a=0,r=[];for(e=0;e<o;e++)e%4==0&&e&&(r.push(a>>16&255),r.push(a>>8&255),r.push(255&a)),a=a<<6|s.indexOf(n.charAt(e));return 0===(i=o%4*6)?(r.push(a>>16&255),r.push(a>>8&255),r.push(255&a)):18===i?(r.push(a>>10&255),r.push(a>>2&255)):12===i&&r.push(a>>4&255),new Uint8Array(r)},predicate:function(t){return"[object Uint8Array]"===Object.prototype.toString.call(t)},represent:function(t){var e,i,n="",o=0,s=t.length,a=Se;for(e=0;e<s;e++)e%3==0&&e&&(n+=a[o>>18&63],n+=a[o>>12&63],n+=a[o>>6&63],n+=a[63&o]),o=(o<<8)+t[e];return 0===(i=s%3)?(n+=a[o>>18&63],n+=a[o>>12&63],n+=a[o>>6&63],n+=a[63&o]):2===i?(n+=a[o>>10&63],n+=a[o>>4&63],n+=a[o<<2&63],n+=a[64]):1===i&&(n+=a[o>>2&63],n+=a[o<<4&63],n+=a[64],n+=a[64]),n}}),Te=Object.prototype.hasOwnProperty,Me=Object.prototype.toString;var Ie=new se("tag:yaml.org,2002:omap",{kind:"sequence",resolve:function(t){if(null===t)return!0;var e,i,n,o,s,a=[],r=t;for(e=0,i=r.length;e<i;e+=1){if(n=r[e],s=!1,"[object Object]"!==Me.call(n))return!1;for(o in n)if(Te.call(n,o)){if(s)return!1;s=!0}if(!s)return!1;if(-1!==a.indexOf(o))return!1;a.push(o)}return!0},construct:function(t){return null!==t?t:[]}}),je=Object.prototype.toString;var Pe=new se("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:function(t){if(null===t)return!0;var e,i,n,o,s,a=t;for(s=new Array(a.length),e=0,i=a.length;e<i;e+=1){if(n=a[e],"[object Object]"!==je.call(n))return!1;if(1!==(o=Object.keys(n)).length)return!1;s[e]=[o[0],n[o[0]]]}return!0},construct:function(t){if(null===t)return[];var e,i,n,o,s,a=t;for(s=new Array(a.length),e=0,i=a.length;e<i;e+=1)n=a[e],o=Object.keys(n),s[e]=[o[0],n[o[0]]];return s}}),Ne=Object.prototype.hasOwnProperty;var Fe=new se("tag:yaml.org,2002:set",{kind:"mapping",resolve:function(t){if(null===t)return!0;var e,i=t;for(e in i)if(Ne.call(i,e)&&null!==i[e])return!1;return!0},construct:function(t){return null!==t?t:{}}}),Le=$e.extend({implicit:[Ce,Ee],explicit:[Oe,Ie,Pe,Fe]}),Ue=Object.prototype.hasOwnProperty,Re=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,ze=/[\x85\u2028\u2029]/,Ve=/[,\[\]\{\}]/,De=/^(?:!|!!|![a-z\-]+!)$/i,He=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function Ye(t){return Object.prototype.toString.call(t)}function We(t){return 10===t||13===t}function Ge(t){return 9===t||32===t}function Be(t){return 9===t||32===t||10===t||13===t}function qe(t){return 44===t||91===t||93===t||123===t||125===t}function Xe(t){var e;return 48<=t&&t<=57?t-48:97<=(e=32|t)&&e<=102?e-97+10:-1}function Ke(t){return 120===t?2:117===t?4:85===t?8:0}function Ze(t){return 48<=t&&t<=57?t-48:-1}function Je(t){return 48===t?"\0":97===t?"":98===t?"\b":116===t||9===t?"\t":110===t?"\n":118===t?"\v":102===t?"\f":114===t?"\r":101===t?"":32===t?" ":34===t?'"':47===t?"/":92===t?"\\":78===t?"":95===t?" ":76===t?"\u2028":80===t?"\u2029":""}function Qe(t){return t<=65535?String.fromCharCode(t):String.fromCharCode(55296+(t-65536>>10),56320+(t-65536&1023))}for(var ti=new Array(256),ei=new Array(256),ii=0;ii<256;ii++)ti[ii]=Je(ii)?1:0,ei[ii]=Je(ii);function ni(t,e){this.input=t,this.filename=e.filename||null,this.schema=e.schema||Le,this.onWarning=e.onWarning||null,this.legacy=e.legacy||!1,this.json=e.json||!1,this.listener=e.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=t.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function oi(t,e){var i={name:t.filename,buffer:t.input.slice(0,-1),position:t.position,line:t.line,column:t.position-t.lineStart};return i.snippet=ie(i),new Qt(e,i)}function si(t,e){throw oi(t,e)}function ai(t,e){t.onWarning&&t.onWarning.call(null,oi(t,e))}var ri={YAML:function(t,e,i){var n,o,s;null!==t.version&&si(t,"duplication of %YAML directive"),1!==i.length&&si(t,"YAML directive accepts exactly one argument"),null===(n=/^([0-9]+)\.([0-9]+)$/.exec(i[0]))&&si(t,"ill-formed argument of the YAML directive"),o=parseInt(n[1],10),s=parseInt(n[2],10),1!==o&&si(t,"unacceptable YAML version of the document"),t.version=i[0],t.checkLineBreaks=s<2,1!==s&&2!==s&&ai(t,"unsupported YAML version of the document")},TAG:function(t,e,i){var n,o;2!==i.length&&si(t,"TAG directive accepts exactly two arguments"),n=i[0],o=i[1],De.test(n)||si(t,"ill-formed tag handle (first argument) of the TAG directive"),Ue.call(t.tagMap,n)&&si(t,'there is a previously declared suffix for "'+n+'" tag handle'),He.test(o)||si(t,"ill-formed tag prefix (second argument) of the TAG directive");try{o=decodeURIComponent(o)}catch(e){si(t,"tag prefix is malformed: "+o)}t.tagMap[n]=o}};function li(t,e,i,n){var o,s,a,r;if(e<i){if(r=t.input.slice(e,i),n)for(o=0,s=r.length;o<s;o+=1)9===(a=r.charCodeAt(o))||32<=a&&a<=1114111||si(t,"expected valid JSON character");else Re.test(r)&&si(t,"the stream contains non-printable characters");t.result+=r}}function ci(t,e,i,n){var o,s,a,r;for(Kt.isObject(i)||si(t,"cannot merge mappings; the provided source object is unacceptable"),a=0,r=(o=Object.keys(i)).length;a<r;a+=1)s=o[a],Ue.call(e,s)||(e[s]=i[s],n[s]=!0)}function hi(t,e,i,n,o,s,a,r,l){var c,h;if(Array.isArray(o))for(c=0,h=(o=Array.prototype.slice.call(o)).length;c<h;c+=1)Array.isArray(o[c])&&si(t,"nested arrays are not supported inside keys"),"object"==typeof o&&"[object Object]"===Ye(o[c])&&(o[c]="[object Object]");if("object"==typeof o&&"[object Object]"===Ye(o)&&(o="[object Object]"),o=String(o),null===e&&(e={}),"tag:yaml.org,2002:merge"===n)if(Array.isArray(s))for(c=0,h=s.length;c<h;c+=1)ci(t,e,s[c],i);else ci(t,e,s,i);else t.json||Ue.call(i,o)||!Ue.call(e,o)||(t.line=a||t.line,t.lineStart=r||t.lineStart,t.position=l||t.position,si(t,"duplicated mapping key")),"__proto__"===o?Object.defineProperty(e,o,{configurable:!0,enumerable:!0,writable:!0,value:s}):e[o]=s,delete i[o];return e}function di(t){var e;10===(e=t.input.charCodeAt(t.position))?t.position++:13===e?(t.position++,10===t.input.charCodeAt(t.position)&&t.position++):si(t,"a line break is expected"),t.line+=1,t.lineStart=t.position,t.firstTabInLine=-1}function ui(t,e,i){for(var n=0,o=t.input.charCodeAt(t.position);0!==o;){for(;Ge(o);)9===o&&-1===t.firstTabInLine&&(t.firstTabInLine=t.position),o=t.input.charCodeAt(++t.position);if(e&&35===o)do{o=t.input.charCodeAt(++t.position)}while(10!==o&&13!==o&&0!==o);if(!We(o))break;for(di(t),o=t.input.charCodeAt(t.position),n++,t.lineIndent=0;32===o;)t.lineIndent++,o=t.input.charCodeAt(++t.position)}return-1!==i&&0!==n&&t.lineIndent<i&&ai(t,"deficient indentation"),n}function pi(t){var e,i=t.position;return!(45!==(e=t.input.charCodeAt(i))&&46!==e||e!==t.input.charCodeAt(i+1)||e!==t.input.charCodeAt(i+2)||(i+=3,0!==(e=t.input.charCodeAt(i))&&!Be(e)))}function gi(t,e){1===e?t.result+=" ":e>1&&(t.result+=Kt.repeat("\n",e-1))}function fi(t,e){var i,n,o=t.tag,s=t.anchor,a=[],r=!1;if(-1!==t.firstTabInLine)return!1;for(null!==t.anchor&&(t.anchorMap[t.anchor]=a),n=t.input.charCodeAt(t.position);0!==n&&(-1!==t.firstTabInLine&&(t.position=t.firstTabInLine,si(t,"tab characters must not be used in indentation")),45===n)&&Be(t.input.charCodeAt(t.position+1));)if(r=!0,t.position++,ui(t,!0,-1)&&t.lineIndent<=e)a.push(null),n=t.input.charCodeAt(t.position);else if(i=t.line,bi(t,e,3,!1,!0),a.push(t.result),ui(t,!0,-1),n=t.input.charCodeAt(t.position),(t.line===i||t.lineIndent>e)&&0!==n)si(t,"bad indentation of a sequence entry");else if(t.lineIndent<e)break;return!!r&&(t.tag=o,t.anchor=s,t.kind="sequence",t.result=a,!0)}function mi(t){var e,i,n,o,s=!1,a=!1;if(33!==(o=t.input.charCodeAt(t.position)))return!1;if(null!==t.tag&&si(t,"duplication of a tag property"),60===(o=t.input.charCodeAt(++t.position))?(s=!0,o=t.input.charCodeAt(++t.position)):33===o?(a=!0,i="!!",o=t.input.charCodeAt(++t.position)):i="!",e=t.position,s){do{o=t.input.charCodeAt(++t.position)}while(0!==o&&62!==o);t.position<t.length?(n=t.input.slice(e,t.position),o=t.input.charCodeAt(++t.position)):si(t,"unexpected end of the stream within a verbatim tag")}else{for(;0!==o&&!Be(o);)33===o&&(a?si(t,"tag suffix cannot contain exclamation marks"):(i=t.input.slice(e-1,t.position+1),De.test(i)||si(t,"named tag handle cannot contain such characters"),a=!0,e=t.position+1)),o=t.input.charCodeAt(++t.position);n=t.input.slice(e,t.position),Ve.test(n)&&si(t,"tag suffix cannot contain flow indicator characters")}n&&!He.test(n)&&si(t,"tag name cannot contain such characters: "+n);try{n=decodeURIComponent(n)}catch(e){si(t,"tag name is malformed: "+n)}return s?t.tag=n:Ue.call(t.tagMap,i)?t.tag=t.tagMap[i]+n:"!"===i?t.tag="!"+n:"!!"===i?t.tag="tag:yaml.org,2002:"+n:si(t,'undeclared tag handle "'+i+'"'),!0}function _i(t){var e,i;if(38!==(i=t.input.charCodeAt(t.position)))return!1;for(null!==t.anchor&&si(t,"duplication of an anchor property"),i=t.input.charCodeAt(++t.position),e=t.position;0!==i&&!Be(i)&&!qe(i);)i=t.input.charCodeAt(++t.position);return t.position===e&&si(t,"name of an anchor node must contain at least one character"),t.anchor=t.input.slice(e,t.position),!0}function bi(t,e,i,n,o){var s,a,r,l,c,h,d,u,p,g=1,f=!1,m=!1;if(null!==t.listener&&t.listener("open",t),t.tag=null,t.anchor=null,t.kind=null,t.result=null,s=a=r=4===i||3===i,n&&ui(t,!0,-1)&&(f=!0,t.lineIndent>e?g=1:t.lineIndent===e?g=0:t.lineIndent<e&&(g=-1)),1===g)for(;mi(t)||_i(t);)ui(t,!0,-1)?(f=!0,r=s,t.lineIndent>e?g=1:t.lineIndent===e?g=0:t.lineIndent<e&&(g=-1)):r=!1;if(r&&(r=f||o),1!==g&&4!==i||(u=1===i||2===i?e:e+1,p=t.position-t.lineStart,1===g?r&&(fi(t,p)||function(t,e,i){var n,o,s,a,r,l,c,h=t.tag,d=t.anchor,u={},p=Object.create(null),g=null,f=null,m=null,_=!1,b=!1;if(-1!==t.firstTabInLine)return!1;for(null!==t.anchor&&(t.anchorMap[t.anchor]=u),c=t.input.charCodeAt(t.position);0!==c;){if(_||-1===t.firstTabInLine||(t.position=t.firstTabInLine,si(t,"tab characters must not be used in indentation")),n=t.input.charCodeAt(t.position+1),s=t.line,63!==c&&58!==c||!Be(n)){if(a=t.line,r=t.lineStart,l=t.position,!bi(t,i,2,!1,!0))break;if(t.line===s){for(c=t.input.charCodeAt(t.position);Ge(c);)c=t.input.charCodeAt(++t.position);if(58===c)Be(c=t.input.charCodeAt(++t.position))||si(t,"a whitespace character is expected after the key-value separator within a block mapping"),_&&(hi(t,u,p,g,f,null,a,r,l),g=f=m=null),b=!0,_=!1,o=!1,g=t.tag,f=t.result;else{if(!b)return t.tag=h,t.anchor=d,!0;si(t,"can not read an implicit mapping pair; a colon is missed")}}else{if(!b)return t.tag=h,t.anchor=d,!0;si(t,"can not read a block mapping entry; a multiline key may not be an implicit key")}}else 63===c?(_&&(hi(t,u,p,g,f,null,a,r,l),g=f=m=null),b=!0,_=!0,o=!0):_?(_=!1,o=!0):si(t,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),t.position+=1,c=n;if((t.line===s||t.lineIndent>e)&&(_&&(a=t.line,r=t.lineStart,l=t.position),bi(t,e,4,!0,o)&&(_?f=t.result:m=t.result),_||(hi(t,u,p,g,f,m,a,r,l),g=f=m=null),ui(t,!0,-1),c=t.input.charCodeAt(t.position)),(t.line===s||t.lineIndent>e)&&0!==c)si(t,"bad indentation of a mapping entry");else if(t.lineIndent<e)break}return _&&hi(t,u,p,g,f,null,a,r,l),b&&(t.tag=h,t.anchor=d,t.kind="mapping",t.result=u),b}(t,p,u))||function(t,e){var i,n,o,s,a,r,l,c,h,d,u,p,g=!0,f=t.tag,m=t.anchor,_=Object.create(null);if(91===(p=t.input.charCodeAt(t.position)))a=93,c=!1,s=[];else{if(123!==p)return!1;a=125,c=!0,s={}}for(null!==t.anchor&&(t.anchorMap[t.anchor]=s),p=t.input.charCodeAt(++t.position);0!==p;){if(ui(t,!0,e),(p=t.input.charCodeAt(t.position))===a)return t.position++,t.tag=f,t.anchor=m,t.kind=c?"mapping":"sequence",t.result=s,!0;g?44===p&&si(t,"expected the node content, but found ','"):si(t,"missed comma between flow collection entries"),u=null,r=l=!1,63===p&&Be(t.input.charCodeAt(t.position+1))&&(r=l=!0,t.position++,ui(t,!0,e)),i=t.line,n=t.lineStart,o=t.position,bi(t,e,1,!1,!0),d=t.tag,h=t.result,ui(t,!0,e),p=t.input.charCodeAt(t.position),!l&&t.line!==i||58!==p||(r=!0,p=t.input.charCodeAt(++t.position),ui(t,!0,e),bi(t,e,1,!1,!0),u=t.result),c?hi(t,s,_,d,h,u,i,n,o):r?s.push(hi(t,null,_,d,h,u,i,n,o)):s.push(h),ui(t,!0,e),44===(p=t.input.charCodeAt(t.position))?(g=!0,p=t.input.charCodeAt(++t.position)):g=!1}si(t,"unexpected end of the stream within a flow collection")}(t,u)?m=!0:(a&&function(t,e){var i,n,o,s,a=1,r=!1,l=!1,c=e,h=0,d=!1;if(124===(s=t.input.charCodeAt(t.position)))n=!1;else{if(62!==s)return!1;n=!0}for(t.kind="scalar",t.result="";0!==s;)if(43===(s=t.input.charCodeAt(++t.position))||45===s)1===a?a=43===s?3:2:si(t,"repeat of a chomping mode identifier");else{if(!((o=Ze(s))>=0))break;0===o?si(t,"bad explicit indentation width of a block scalar; it cannot be less than one"):l?si(t,"repeat of an indentation width identifier"):(c=e+o-1,l=!0)}if(Ge(s)){do{s=t.input.charCodeAt(++t.position)}while(Ge(s));if(35===s)do{s=t.input.charCodeAt(++t.position)}while(!We(s)&&0!==s)}for(;0!==s;){for(di(t),t.lineIndent=0,s=t.input.charCodeAt(t.position);(!l||t.lineIndent<c)&&32===s;)t.lineIndent++,s=t.input.charCodeAt(++t.position);if(!l&&t.lineIndent>c&&(c=t.lineIndent),We(s))h++;else{if(t.lineIndent<c){3===a?t.result+=Kt.repeat("\n",r?1+h:h):1===a&&r&&(t.result+="\n");break}for(n?Ge(s)?(d=!0,t.result+=Kt.repeat("\n",r?1+h:h)):d?(d=!1,t.result+=Kt.repeat("\n",h+1)):0===h?r&&(t.result+=" "):t.result+=Kt.repeat("\n",h):t.result+=Kt.repeat("\n",r?1+h:h),r=!0,l=!0,h=0,i=t.position;!We(s)&&0!==s;)s=t.input.charCodeAt(++t.position);li(t,i,t.position,!1)}}return!0}(t,u)||function(t,e){var i,n,o;if(39!==(i=t.input.charCodeAt(t.position)))return!1;for(t.kind="scalar",t.result="",t.position++,n=o=t.position;0!==(i=t.input.charCodeAt(t.position));)if(39===i){if(li(t,n,t.position,!0),39!==(i=t.input.charCodeAt(++t.position)))return!0;n=t.position,t.position++,o=t.position}else We(i)?(li(t,n,o,!0),gi(t,ui(t,!1,e)),n=o=t.position):t.position===t.lineStart&&pi(t)?si(t,"unexpected end of the document within a single quoted scalar"):(t.position++,o=t.position);si(t,"unexpected end of the stream within a single quoted scalar")}(t,u)||function(t,e){var i,n,o,s,a,r;if(34!==(r=t.input.charCodeAt(t.position)))return!1;for(t.kind="scalar",t.result="",t.position++,i=n=t.position;0!==(r=t.input.charCodeAt(t.position));){if(34===r)return li(t,i,t.position,!0),t.position++,!0;if(92===r){if(li(t,i,t.position,!0),We(r=t.input.charCodeAt(++t.position)))ui(t,!1,e);else if(r<256&&ti[r])t.result+=ei[r],t.position++;else if((a=Ke(r))>0){for(o=a,s=0;o>0;o--)(a=Xe(r=t.input.charCodeAt(++t.position)))>=0?s=(s<<4)+a:si(t,"expected hexadecimal character");t.result+=Qe(s),t.position++}else si(t,"unknown escape sequence");i=n=t.position}else We(r)?(li(t,i,n,!0),gi(t,ui(t,!1,e)),i=n=t.position):t.position===t.lineStart&&pi(t)?si(t,"unexpected end of the document within a double quoted scalar"):(t.position++,n=t.position)}si(t,"unexpected end of the stream within a double quoted scalar")}(t,u)?m=!0:!function(t){var e,i,n;if(42!==(n=t.input.charCodeAt(t.position)))return!1;for(n=t.input.charCodeAt(++t.position),e=t.position;0!==n&&!Be(n)&&!qe(n);)n=t.input.charCodeAt(++t.position);return t.position===e&&si(t,"name of an alias node must contain at least one character"),i=t.input.slice(e,t.position),Ue.call(t.anchorMap,i)||si(t,'unidentified alias "'+i+'"'),t.result=t.anchorMap[i],ui(t,!0,-1),!0}(t)?function(t,e,i){var n,o,s,a,r,l,c,h,d=t.kind,u=t.result;if(Be(h=t.input.charCodeAt(t.position))||qe(h)||35===h||38===h||42===h||33===h||124===h||62===h||39===h||34===h||37===h||64===h||96===h)return!1;if((63===h||45===h)&&(Be(n=t.input.charCodeAt(t.position+1))||i&&qe(n)))return!1;for(t.kind="scalar",t.result="",o=s=t.position,a=!1;0!==h;){if(58===h){if(Be(n=t.input.charCodeAt(t.position+1))||i&&qe(n))break}else if(35===h){if(Be(t.input.charCodeAt(t.position-1)))break}else{if(t.position===t.lineStart&&pi(t)||i&&qe(h))break;if(We(h)){if(r=t.line,l=t.lineStart,c=t.lineIndent,ui(t,!1,-1),t.lineIndent>=e){a=!0,h=t.input.charCodeAt(t.position);continue}t.position=s,t.line=r,t.lineStart=l,t.lineIndent=c;break}}a&&(li(t,o,s,!1),gi(t,t.line-r),o=s=t.position,a=!1),Ge(h)||(s=t.position+1),h=t.input.charCodeAt(++t.position)}return li(t,o,s,!1),!!t.result||(t.kind=d,t.result=u,!1)}(t,u,1===i)&&(m=!0,null===t.tag&&(t.tag="?")):(m=!0,null===t.tag&&null===t.anchor||si(t,"alias node should not have any properties")),null!==t.anchor&&(t.anchorMap[t.anchor]=t.result)):0===g&&(m=r&&fi(t,p))),null===t.tag)null!==t.anchor&&(t.anchorMap[t.anchor]=t.result);else if("?"===t.tag){for(null!==t.result&&"scalar"!==t.kind&&si(t,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+t.kind+'"'),l=0,c=t.implicitTypes.length;l<c;l+=1)if((d=t.implicitTypes[l]).resolve(t.result)){t.result=d.construct(t.result),t.tag=d.tag,null!==t.anchor&&(t.anchorMap[t.anchor]=t.result);break}}else if("!"!==t.tag){if(Ue.call(t.typeMap[t.kind||"fallback"],t.tag))d=t.typeMap[t.kind||"fallback"][t.tag];else for(d=null,l=0,c=(h=t.typeMap.multi[t.kind||"fallback"]).length;l<c;l+=1)if(t.tag.slice(0,h[l].tag.length)===h[l].tag){d=h[l];break}d||si(t,"unknown tag !<"+t.tag+">"),null!==t.result&&d.kind!==t.kind&&si(t,"unacceptable node kind for !<"+t.tag+'> tag; it should be "'+d.kind+'", not "'+t.kind+'"'),d.resolve(t.result,t.tag)?(t.result=d.construct(t.result,t.tag),null!==t.anchor&&(t.anchorMap[t.anchor]=t.result)):si(t,"cannot resolve a node with !<"+t.tag+"> explicit tag")}return null!==t.listener&&t.listener("close",t),null!==t.tag||null!==t.anchor||m}function vi(t){var e,i,n,o,s=t.position,a=!1;for(t.version=null,t.checkLineBreaks=t.legacy,t.tagMap=Object.create(null),t.anchorMap=Object.create(null);0!==(o=t.input.charCodeAt(t.position))&&(ui(t,!0,-1),o=t.input.charCodeAt(t.position),!(t.lineIndent>0||37!==o));){for(a=!0,o=t.input.charCodeAt(++t.position),e=t.position;0!==o&&!Be(o);)o=t.input.charCodeAt(++t.position);for(n=[],(i=t.input.slice(e,t.position)).length<1&&si(t,"directive name must not be less than one character in length");0!==o;){for(;Ge(o);)o=t.input.charCodeAt(++t.position);if(35===o){do{o=t.input.charCodeAt(++t.position)}while(0!==o&&!We(o));break}if(We(o))break;for(e=t.position;0!==o&&!Be(o);)o=t.input.charCodeAt(++t.position);n.push(t.input.slice(e,t.position))}0!==o&&di(t),Ue.call(ri,i)?ri[i](t,i,n):ai(t,'unknown document directive "'+i+'"')}ui(t,!0,-1),0===t.lineIndent&&45===t.input.charCodeAt(t.position)&&45===t.input.charCodeAt(t.position+1)&&45===t.input.charCodeAt(t.position+2)?(t.position+=3,ui(t,!0,-1)):a&&si(t,"directives end mark is expected"),bi(t,t.lineIndent-1,4,!1,!0),ui(t,!0,-1),t.checkLineBreaks&&ze.test(t.input.slice(s,t.position))&&ai(t,"non-ASCII line breaks are interpreted as content"),t.documents.push(t.result),t.position===t.lineStart&&pi(t)?46===t.input.charCodeAt(t.position)&&(t.position+=3,ui(t,!0,-1)):t.position<t.length-1&&si(t,"end of the stream or a document separator is expected")}function yi(t,e){e=e||{},0!==(t=String(t)).length&&(10!==t.charCodeAt(t.length-1)&&13!==t.charCodeAt(t.length-1)&&(t+="\n"),65279===t.charCodeAt(0)&&(t=t.slice(1)));var i=new ni(t,e),n=t.indexOf("\0");for(-1!==n&&(i.position=n,si(i,"null byte is not allowed in input")),i.input+="\0";32===i.input.charCodeAt(i.position);)i.lineIndent+=1,i.position+=1;for(;i.position<i.length-1;)vi(i);return i.documents}var wi={loadAll:function(t,e,i){null!==e&&"object"==typeof e&&void 0===i&&(i=e,e=null);var n=yi(t,i);if("function"!=typeof e)return n;for(var o=0,s=n.length;o<s;o+=1)e(n[o])},load:function(t,e){var i=yi(t,e);if(0!==i.length){if(1===i.length)return i[0];throw new Qt("expected a single document in the stream, but found more")}}},xi=Object.prototype.toString,$i=Object.prototype.hasOwnProperty,ki=65279,Ai={0:"\\0",7:"\\a",8:"\\b",9:"\\t",10:"\\n",11:"\\v",12:"\\f",13:"\\r",27:"\\e",34:'\\"',92:"\\\\",133:"\\N",160:"\\_",8232:"\\L",8233:"\\P"},Ci=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],Ei=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function Si(t){var e,i,n;if(e=t.toString(16).toUpperCase(),t<=255)i="x",n=2;else if(t<=65535)i="u",n=4;else{if(!(t<=4294967295))throw new Qt("code point within a string may not be greater than 0xFFFFFFFF");i="U",n=8}return"\\"+i+Kt.repeat("0",n-e.length)+e}function Oi(t){this.schema=t.schema||Le,this.indent=Math.max(1,t.indent||2),this.noArrayIndent=t.noArrayIndent||!1,this.skipInvalid=t.skipInvalid||!1,this.flowLevel=Kt.isNothing(t.flowLevel)?-1:t.flowLevel,this.styleMap=function(t,e){var i,n,o,s,a,r,l;if(null===e)return{};for(i={},o=0,s=(n=Object.keys(e)).length;o<s;o+=1)a=n[o],r=String(e[a]),"!!"===a.slice(0,2)&&(a="tag:yaml.org,2002:"+a.slice(2)),(l=t.compiledTypeMap.fallback[a])&&$i.call(l.styleAliases,r)&&(r=l.styleAliases[r]),i[a]=r;return i}(this.schema,t.styles||null),this.sortKeys=t.sortKeys||!1,this.lineWidth=t.lineWidth||80,this.noRefs=t.noRefs||!1,this.noCompatMode=t.noCompatMode||!1,this.condenseFlow=t.condenseFlow||!1,this.quotingType='"'===t.quotingType?2:1,this.forceQuotes=t.forceQuotes||!1,this.replacer="function"==typeof t.replacer?t.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Ti(t,e){for(var i,n=Kt.repeat(" ",e),o=0,s=-1,a="",r=t.length;o<r;)-1===(s=t.indexOf("\n",o))?(i=t.slice(o),o=r):(i=t.slice(o,s+1),o=s+1),i.length&&"\n"!==i&&(a+=n),a+=i;return a}function Mi(t,e){return"\n"+Kt.repeat(" ",t.indent*e)}function Ii(t){return 32===t||9===t}function ji(t){return 32<=t&&t<=126||161<=t&&t<=55295&&8232!==t&&8233!==t||57344<=t&&t<=65533&&t!==ki||65536<=t&&t<=1114111}function Pi(t){return ji(t)&&t!==ki&&13!==t&&10!==t}function Ni(t,e,i){var n=Pi(t),o=n&&!Ii(t);return(i?n:n&&44!==t&&91!==t&&93!==t&&123!==t&&125!==t)&&35!==t&&!(58===e&&!o)||Pi(e)&&!Ii(e)&&35===t||58===e&&o}function Fi(t,e){var i,n=t.charCodeAt(e);return n>=55296&&n<=56319&&e+1<t.length&&(i=t.charCodeAt(e+1))>=56320&&i<=57343?1024*(n-55296)+i-56320+65536:n}function Li(t){return/^\n* /.test(t)}function Ui(t,e,i,n,o,s,a,r){var l,c=0,h=null,d=!1,u=!1,p=-1!==n,g=-1,f=function(t){return ji(t)&&t!==ki&&!Ii(t)&&45!==t&&63!==t&&58!==t&&44!==t&&91!==t&&93!==t&&123!==t&&125!==t&&35!==t&&38!==t&&42!==t&&33!==t&&124!==t&&61!==t&&62!==t&&39!==t&&34!==t&&37!==t&&64!==t&&96!==t}(Fi(t,0))&&function(t){return!Ii(t)&&58!==t}(Fi(t,t.length-1));if(e||a)for(l=0;l<t.length;c>=65536?l+=2:l++){if(!ji(c=Fi(t,l)))return 5;f=f&&Ni(c,h,r),h=c}else{for(l=0;l<t.length;c>=65536?l+=2:l++){if(10===(c=Fi(t,l)))d=!0,p&&(u=u||l-g-1>n&&" "!==t[g+1],g=l);else if(!ji(c))return 5;f=f&&Ni(c,h,r),h=c}u=u||p&&l-g-1>n&&" "!==t[g+1]}return d||u?i>9&&Li(t)?5:a?2===s?5:2:u?4:3:!f||a||o(t)?2===s?5:2:1}function Ri(t,e,i,n,o){t.dump=function(){if(0===e.length)return 2===t.quotingType?'""':"''";if(!t.noCompatMode&&(-1!==Ci.indexOf(e)||Ei.test(e)))return 2===t.quotingType?'"'+e+'"':"'"+e+"'";var s=t.indent*Math.max(1,i),a=-1===t.lineWidth?-1:Math.max(Math.min(t.lineWidth,40),t.lineWidth-s),r=n||t.flowLevel>-1&&i>=t.flowLevel;switch(Ui(e,r,t.indent,a,function(e){return function(t,e){var i,n;for(i=0,n=t.implicitTypes.length;i<n;i+=1)if(t.implicitTypes[i].resolve(e))return!0;return!1}(t,e)},t.quotingType,t.forceQuotes&&!n,o)){case 1:return e;case 2:return"'"+e.replace(/'/g,"''")+"'";case 3:return"|"+zi(e,t.indent)+Vi(Ti(e,s));case 4:return">"+zi(e,t.indent)+Vi(Ti(function(t,e){var i,n,o=/(\n+)([^\n]*)/g,s=(r=t.indexOf("\n"),r=-1!==r?r:t.length,o.lastIndex=r,Di(t.slice(0,r),e)),a="\n"===t[0]||" "===t[0];var r;for(;n=o.exec(t);){var l=n[1],c=n[2];i=" "===c[0],s+=l+(a||i||""===c?"":"\n")+Di(c,e),a=i}return s}(e,a),s));case 5:return'"'+function(t){for(var e,i="",n=0,o=0;o<t.length;n>=65536?o+=2:o++)n=Fi(t,o),!(e=Ai[n])&&ji(n)?(i+=t[o],n>=65536&&(i+=t[o+1])):i+=e||Si(n);return i}(e)+'"';default:throw new Qt("impossible error: invalid scalar style")}}()}function zi(t,e){var i=Li(t)?String(e):"",n="\n"===t[t.length-1];return i+(n&&("\n"===t[t.length-2]||"\n"===t)?"+":n?"":"-")+"\n"}function Vi(t){return"\n"===t[t.length-1]?t.slice(0,-1):t}function Di(t,e){if(""===t||" "===t[0])return t;for(var i,n,o=/ [^ ]/g,s=0,a=0,r=0,l="";i=o.exec(t);)(r=i.index)-s>e&&(n=a>s?a:r,l+="\n"+t.slice(s,n),s=n+1),a=r;return l+="\n",t.length-s>e&&a>s?l+=t.slice(s,a)+"\n"+t.slice(a+1):l+=t.slice(s),l.slice(1)}function Hi(t,e,i,n){var o,s,a,r="",l=t.tag;for(o=0,s=i.length;o<s;o+=1)a=i[o],t.replacer&&(a=t.replacer.call(i,String(o),a)),(Wi(t,e+1,a,!0,!0,!1,!0)||void 0===a&&Wi(t,e+1,null,!0,!0,!1,!0))&&(n&&""===r||(r+=Mi(t,e)),t.dump&&10===t.dump.charCodeAt(0)?r+="-":r+="- ",r+=t.dump);t.tag=l,t.dump=r||"[]"}function Yi(t,e,i){var n,o,s,a,r,l;for(s=0,a=(o=i?t.explicitTypes:t.implicitTypes).length;s<a;s+=1)if(((r=o[s]).instanceOf||r.predicate)&&(!r.instanceOf||"object"==typeof e&&e instanceof r.instanceOf)&&(!r.predicate||r.predicate(e))){if(i?r.multi&&r.representName?t.tag=r.representName(e):t.tag=r.tag:t.tag="?",r.represent){if(l=t.styleMap[r.tag]||r.defaultStyle,"[object Function]"===xi.call(r.represent))n=r.represent(e,l);else{if(!$i.call(r.represent,l))throw new Qt("!<"+r.tag+'> tag resolver accepts not "'+l+'" style');n=r.represent[l](e,l)}t.dump=n}return!0}return!1}function Wi(t,e,i,n,o,s,a){t.tag=null,t.dump=i,Yi(t,i,!1)||Yi(t,i,!0);var r,l=xi.call(t.dump),c=n;n&&(n=t.flowLevel<0||t.flowLevel>e);var h,d,u="[object Object]"===l||"[object Array]"===l;if(u&&(d=-1!==(h=t.duplicates.indexOf(i))),(null!==t.tag&&"?"!==t.tag||d||2!==t.indent&&e>0)&&(o=!1),d&&t.usedDuplicates[h])t.dump="*ref_"+h;else{if(u&&d&&!t.usedDuplicates[h]&&(t.usedDuplicates[h]=!0),"[object Object]"===l)n&&0!==Object.keys(t.dump).length?(!function(t,e,i,n){var o,s,a,r,l,c,h="",d=t.tag,u=Object.keys(i);if(!0===t.sortKeys)u.sort();else if("function"==typeof t.sortKeys)u.sort(t.sortKeys);else if(t.sortKeys)throw new Qt("sortKeys must be a boolean or a function");for(o=0,s=u.length;o<s;o+=1)c="",n&&""===h||(c+=Mi(t,e)),r=i[a=u[o]],t.replacer&&(r=t.replacer.call(i,a,r)),Wi(t,e+1,a,!0,!0,!0)&&((l=null!==t.tag&&"?"!==t.tag||t.dump&&t.dump.length>1024)&&(t.dump&&10===t.dump.charCodeAt(0)?c+="?":c+="? "),c+=t.dump,l&&(c+=Mi(t,e)),Wi(t,e+1,r,!0,l)&&(t.dump&&10===t.dump.charCodeAt(0)?c+=":":c+=": ",h+=c+=t.dump));t.tag=d,t.dump=h||"{}"}(t,e,t.dump,o),d&&(t.dump="&ref_"+h+t.dump)):(!function(t,e,i){var n,o,s,a,r,l="",c=t.tag,h=Object.keys(i);for(n=0,o=h.length;n<o;n+=1)r="",""!==l&&(r+=", "),t.condenseFlow&&(r+='"'),a=i[s=h[n]],t.replacer&&(a=t.replacer.call(i,s,a)),Wi(t,e,s,!1,!1)&&(t.dump.length>1024&&(r+="? "),r+=t.dump+(t.condenseFlow?'"':"")+":"+(t.condenseFlow?"":" "),Wi(t,e,a,!1,!1)&&(l+=r+=t.dump));t.tag=c,t.dump="{"+l+"}"}(t,e,t.dump),d&&(t.dump="&ref_"+h+" "+t.dump));else if("[object Array]"===l)n&&0!==t.dump.length?(t.noArrayIndent&&!a&&e>0?Hi(t,e-1,t.dump,o):Hi(t,e,t.dump,o),d&&(t.dump="&ref_"+h+t.dump)):(!function(t,e,i){var n,o,s,a="",r=t.tag;for(n=0,o=i.length;n<o;n+=1)s=i[n],t.replacer&&(s=t.replacer.call(i,String(n),s)),(Wi(t,e,s,!1,!1)||void 0===s&&Wi(t,e,null,!1,!1))&&(""!==a&&(a+=","+(t.condenseFlow?"":" ")),a+=t.dump);t.tag=r,t.dump="["+a+"]"}(t,e,t.dump),d&&(t.dump="&ref_"+h+" "+t.dump));else{if("[object String]"!==l){if("[object Undefined]"===l)return!1;if(t.skipInvalid)return!1;throw new Qt("unacceptable kind of an object to dump "+l)}"?"!==t.tag&&Ri(t,t.dump,e,s,c)}null!==t.tag&&"?"!==t.tag&&(r=encodeURI("!"===t.tag[0]?t.tag.slice(1):t.tag).replace(/!/g,"%21"),r="!"===t.tag[0]?"!"+r:"tag:yaml.org,2002:"===r.slice(0,18)?"!!"+r.slice(18):"!<"+r+">",t.dump=r+" "+t.dump)}return!0}function Gi(t,e){var i,n,o=[],s=[];for(Bi(t,o,s),i=0,n=s.length;i<n;i+=1)e.duplicates.push(o[s[i]]);e.usedDuplicates=new Array(n)}function Bi(t,e,i){var n,o,s;if(null!==t&&"object"==typeof t)if(-1!==(o=e.indexOf(t)))-1===i.indexOf(o)&&i.push(o);else if(e.push(t),Array.isArray(t))for(o=0,s=t.length;o<s;o+=1)Bi(t[o],e,i);else for(o=0,s=(n=Object.keys(t)).length;o<s;o+=1)Bi(t[n[o]],e,i)}function qi(t,e){return function(){throw new Error("Function yaml."+t+" is removed in js-yaml 4. Use yaml."+e+" instead, which is now safe by default.")}}var Xi={Type:se,Schema:le,FAILSAFE_SCHEMA:ue,JSON_SCHEMA:xe,CORE_SCHEMA:$e,DEFAULT_SCHEMA:Le,load:wi.load,loadAll:wi.loadAll,dump:{dump:function(t,e){var i=new Oi(e=e||{});i.noRefs||Gi(t,i);var n=t;return i.replacer&&(n=i.replacer.call({"":n},"",n)),Wi(i,0,n,!0,!0)?i.dump+"\n":""}}.dump,YAMLException:Qt,types:{binary:Oe,float:we,map:de,null:pe,pairs:Pe,set:Fe,timestamp:Ce,bool:ge,int:be,merge:Ee,omap:Ie,seq:he,str:ce},safeLoad:qi("safeLoad","load"),safeLoadAll:qi("safeLoadAll","loadAll"),safeDump:qi("safeDump","dump")};const Ki={type:"custom:google-dashboard-card"},Zi=t=>{switch(t){case"tap_action":return"hold_action";case"hold_action":case"double_tap_action":return"tap_action"}};let Ji=class extends ct{static getStubConfig(){return{type:"custom:google-dashboard-card"}}async setConfig(t){if(!t)throw new Error("Invalid configuration");this._config=t}async updated(t){if(t.has("hass")){if(this._card)this._card.hass=this.hass;else if(this._config){const t=this.mapTemplate(this._config),e=Xi.load(t),i=await window.loadCardHelpers(),n=await i.createCardElement(e);n.classList.add("ripple-card"),n.hass=this.hass,this._card=n,this.requestUpdate()}console.log("This LOG is for debug purpose, Google Dashboard"),console.log(this.hass)}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("google-dashboard-card-editor")}mapTemplate(t){const e=this.resolveAction({default_action:t.default_action,action_type:t.action_type,single_tap_web:t.single_tap_web}),i=function(t,e,i,n,o){return`type: custom:swipe-card\ncard_width: max-content\nparameters:\n  grabCursor: true\n  centeredSlides: false\n  slidesPerView: auto\n  spaceBetween: 8\n  preventClicksPropagation: true\n  preventClicks: true\n  threshold: 30\ncards:\n  - type: custom:button-card\n    icon: m3r:videocam\n    name: ${Et("google_dashboard_card.cameras_name")}\n    triggers_update: all\n    label: |\n      [[[\n          const devices = Object.keys(hass.states).filter((e) =>\n          e.startsWith("camera.") &&\n          hass.entities[e] &&\n          !hass.entities[e].hidden\n        ).length;\n        return devices > 1 ? devices + " " + "${Et("google_dashboard_card.devices")}" : devices + " " + "${Et("google_dashboard_card.device")}";\n      ]]]\n    show_name: true\n    show_label: true\n    show_icon: true\n    ${Zi(o)}:\n      action: none\n      haptic: medium\n    ${o}:\n      action: ${t?"navigate":"none"}\n      navigation_path: ${t}\n      haptic: medium\n    styles:\n      grid:\n        - grid-template-columns: 2fr 1fr 1fr\n        - grid-template-rows: 2fr 0.1fr 1fr 1fr\n        - grid-template-areas: |\n            "i . ."\n            ". . ."\n            "n n n"\n            "l l l"\n      card:\n        - display: |\n            [[[\n              const lights = Object.keys(hass.states).filter(e => e.startsWith("camera.") && hass.states[e].state !== "unavailable" &&\n                hass.entities[e] &&\n                !hass.entities[e].hidden);\n              return lights.length === 0 ? "none" : "block";\n            ]]]\n        - margin-bottom: 1px\n        - height: 130px\n        - width: 130px\n        - border-radius: 30px\n        - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05),\n            0px 0.5px 1.5px rgba(0, 0, 0, 0.07);\n        - background: |\n            [[[\n              return hass.themes.darkMode ? '#1F1F1F' : '#F8F9FA';\n            ]]]\n      name:\n        - font-size: 1rem\n        - font-weight: bold\n        - justify-self: start\n        - align-self: end\n        - margin: 0px 20px 0px 20px\n        - max-width: -webkit-fill-available;\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#E8EAED' : '#202124';\n            ]]]\n      label:\n        - font-size: 0.85rem\n        - justify-self: start\n        - align-self: start\n        - margin: 2px 0px 0px 20px\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';\n            ]]]\n      icon:\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#8AB4F8' : '#1A73E8';\n            ]]]\n    state:\n      - value: "on"\n        styles:\n          card:\n            - background: |\n                [[[\n                  return hass.themes.darkMode ? '#302f32' : '#E8F0FE';\n                ]]]\n          icon:\n            - color: |\n                [[[\n                  return hass.themes.darkMode ? '#fee183' : '#1A73E8';\n                ]]]\n  - type: custom:button-card\n    icon: m3r:light-group\n    name: ${Et("google_dashboard_card.lighting_name")}\n    triggers_update: all\n    label: |\n      [[[\n        // Conta automaticamente le luci accese\n        const lightEntities = Object.keys(hass.states).filter(\n        (entity) =>\n          entity.startsWith("light.") &&\n          hass.states[entity].state !== "unavailable" &&\n          hass.entities[entity] &&\n          !hass.entities[entity].hidden\n        );\n        const lightsOn = lightEntities.filter(\n          (entity) => hass.states[entity].state === "on"\n        ).length;\n        const totalLights = lightEntities.length;\n        return lightsOn + "/" + totalLights + " ${Et("google_dashboard_card.lighting_label")}";\n      ]]]\n    show_name: true\n    show_label: true\n    show_icon: true\n    ${Zi(o)}:\n      action: none\n      haptic: medium\n    ${o}:\n      action: ${e?"navigate":"none"}\n      navigation_path: ${e}\n      haptic: medium\n    styles:\n      grid:\n        - grid-template-columns: 2fr 1fr 1fr\n        - grid-template-rows: 2fr 0.1fr 1fr 1fr\n        - grid-template-areas: |\n            "i . ."\n            ". . ."\n            "n n n"\n            "l l l"\n      card:\n        - display: |\n            [[[\n              const lights = Object.keys(hass.states).filter(e => e.startsWith("light.") && \n                hass.states[e].state !== "unavailable" &&\n                hass.entities[e] &&\n                !hass.entities[e].hidden);\n              return lights.length === 0 ? "none" : "block";\n            ]]]\n        - margin-left: |\n            [[[\n              const camera = Object.keys(hass.states).filter(e => e.startsWith("camera.") && hass.states[e].state !== "unavailable");\n              return camera.length === 0 ? "5px" : "0px";\n            ]]]\n        - margin-bottom: 1px\n        - height: 130px\n        - width: 130px\n        - border-radius: 30px\n        - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05),\n            0px 0.5px 1.5px rgba(0, 0, 0, 0.07);\n\n\n        - background: |\n            [[[\n              return hass.themes.darkMode ? '#1F1F1F' : '#F8F9FA';\n            ]]]\n      name:\n        - font-size: 1rem\n        - font-weight: bold\n        - justify-self: start\n        - align-self: end\n        - margin: 0px 20px 0px 20px\n        - max-width: -webkit-fill-available;\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#FFFFFF' : '#202124';\n            ]]]\n      label:\n        - font-size: 0.85rem\n        - justify-self: start\n        - align-self: start\n        - margin: 2px 0px 0px 20px\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';\n            ]]]\n      icon:\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#FBBC04' : '#F9AB00';\n            ]]]\n    state:\n      - operator: template\n        value: |\n          [[[\n            return Object.keys(hass.states).some(entity => \n              entity.startsWith('light.') && \n              hass.states[entity].state === 'on'\n            );\n          ]]]\n        styles:\n          card:\n            - background: |\n                [[[\n                  return hass.themes.darkMode ? '#332f2a' : '#FEF7E0';\n                ]]]\n          icon:\n            - color: |\n                [[[\n                  return hass.themes.darkMode ? '#FBBC04' : '#745b00';\n                ]]]\n  - type: custom:button-card\n    icon: m3of:wifi\n    name: ${Et("google_dashboard_card.wifi_name")}\n    triggers_update: all\n    label: |\n      [[[\n        const devices = Object.keys(hass.states).filter(\n          (entity) =>\n            entity.startsWith("device_tracker.") &&\n            hass.states[entity].state === "home" &&\n            hass.entities[entity] &&\n            !hass.entities[entity].hidden\n        ).length;\n        return devices > 1 ? (devices + " " + "${Et("google_dashboard_card.devices")}") : (devices + " " + "${Et("google_dashboard_card.device")}");\n      ]]]\n    show_name: true\n    show_label: true\n    show_icon: true\n    ${Zi(o)}:\n      action: none\n      haptic: medium\n    ${o}:\n      action: ${i?"navigate":"none"}\n      navigation_path: ${i}\n      haptic: medium\n    styles:\n      grid:\n        - grid-template-columns: 2fr 1fr 1fr\n        - grid-template-rows: 2fr 0.1fr 1fr 1fr\n        - grid-template-areas: |\n            "i . ."\n            ". . ."\n            "n n n"\n            "l l l"\n      card:\n        - display: |\n            [[[\n              const deviceEntities = Object.keys(hass.states).filter(entity => \n                entity.startsWith('device_tracker.') && \n                hass.states[entity].state === 'home' &&\n                hass.entities[entity] &&\n                !hass.entities[entity].hidden\n              );\n              return deviceEntities.length === 0 ? "none" : "block";\n            ]]]\n        - margin-left: |\n            [[[\n              const cameras = Object.keys(hass.states).filter(e => e.startsWith("camera.") && hass.states[e].state !== "unavailable");\n              const lights = Object.keys(hass.states).filter(e => \n                e.startsWith("light.") && hass.states[e].state !== "unavailable");\n              return lights.length === 0 ? "-8px" : "0px";\n\n              if (lights.length === 0 && cameras.length === 0) \n                return "5px";\n              else if (lights.length != 0 || cameras.length != 0) \n                return "-8px";\n              else return "0px";\n            ]]]\n        - margin-bottom: 1px\n        - height: 130px\n        - width: 130px\n        - border-radius: 30px\n        - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05),\n            0px 0.5px 1.5px rgba(0, 0, 0, 0.07);\n\n\n        - background: |\n            [[[\n              return hass.themes.darkMode ? '#1F1F1F' : '#F8F9FA';\n            ]]]\n      name:\n        - font-size: 1rem\n        - font-weight: bold\n        - justify-self: start\n        - align-self: end\n        - margin: 0px 20px 0px 20px\n        - max-width: -webkit-fill-available;\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#FFFFFF' : '#202124';\n            ]]]\n      label:\n        - font-size: 0.85rem\n        - justify-self: start\n        - align-self: start\n        - margin: 2px 0px 0px 20px\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';\n            ]]]\n      icon:\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#81C995' : '#137333';\n            ]]]\n    state:\n      - operator: template\n        value: |\n          [[[\n            return Object.keys(hass.states).some(entity => \n              entity.startsWith('device_tracker.') && \n              hass.states[entity].state === 'home'\n            );\n          ]]]\n        styles:\n          card:\n            - background: |\n                [[[\n                  return hass.themes.darkMode ? '#2e312e' : '#E6F4EA';\n                ]]]\n          icon:\n            - color: |\n                [[[\n                  return hass.themes.darkMode ? '#81C995' : '#137333';\n                ]]]\n  - type: custom:button-card\n    entity: light.luce_giovanni\n    icon: m3of:thermostat\n    name: ${Et("google_dashboard_card.climate_name")}\n    triggers_update: all\n    label: |\n      [[[\n        const climateEntities = Object.keys(hass.states).filter(\n            (entity) =>\n              entity.startsWith("climate.") &&\n              hass.states[entity].state !== "unavailable" &&\n              hass.entities[entity] &&\n              !hass.entities[entity].hidden\n          ).length;\n          return climateEntities > 1 ? climateEntities + " " + "${Et("google_dashboard_card.devices")}" : climateEntities + " " + "${Et("google_dashboard_card.device")}";\n      ]]]\n    show_name: true\n    show_label: true\n    show_icon: true\n    ${Zi(o)}:\n      action: none\n      haptic: medium\n    ${o}:\n      action: ${n?"navigate":"none"}\n      navigation_path: ${n}\n      haptic: medium\n    styles:\n      grid:\n        - grid-template-columns: 2fr 1fr 1fr\n        - grid-template-rows: 2fr 0.1fr 1fr 1fr\n        - grid-template-areas: |\n            "i . ."\n            ". . ."\n            "n n n"\n            "l l l"\n      card:\n        - display: |\n            [[[\n              const climateEntities = Object.keys(hass.states).filter(entity => \n                entity.startsWith('climate.') && \n                hass.states[entity].state !== 'unavailable' &&\n                hass.entities[entity] &&\n                !hass.entities[entity].hidden\n              );\n              return climateEntities.length === 0 ? "none" : "block";\n            ]]]\n        - margin-left: |\n            [[[\n              const cameras = Object.keys(hass.states).filter((e) =>\n                e.startsWith("camera.") &&\n                hass.entities[e] &&\n                !hass.entities[e].hidden\n              ).length;\n              const lights = Object.keys(hass.states).filter(e => \n                e.startsWith("light.") && hass.states[e].state !== "unavailable");\n              const deviceEntities = Object.keys(hass.states).filter(entity => \n                entity.startsWith('device_tracker.') && hass.states[entity].state === 'home');\n              if (deviceEntities.length === 0 && lights.length === 0 && cameras.length === 0) \n                return "5px";\n              else if (deviceEntities.length === 0 && lights.length != 0) \n                return "-8px";\n              else return "0px";\n            ]]]\n        - margin-bottom: 1px\n        - height: 130px\n        - width: 130px\n        - border-radius: 30px\n        - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05),\n            0px 0.5px 1.5px rgba(0, 0, 0, 0.07);\n        - background: |\n            [[[\n              return hass.themes.darkMode ? '#1F1F1F' : '#F8F9FA';\n            ]]]\n      name:\n        - font-size: 1rem\n        - font-weight: bold\n        - justify-self: start\n        - align-self: end\n        - margin: 0px 20px 0px 20px\n        - max-width: -webkit-fill-available;\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#FFFFFF' : '#202124';\n            ]]]\n      label:\n        - font-size: 0.85rem\n        - justify-self: start\n        - align-self: start\n        - margin: 2px 0px 0px 20px\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';\n            ]]]\n      icon:\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#ffdbcd' : '#812800';\n            ]]]\n    state:\n      - operator: template\n        value: |\n          [[[\n            return Object.keys(hass.states).some(entity => \n              entity.startsWith('climate.') && \n              (hass.states[entity].state === 'on' || \n                hass.states[entity].state === 'auto' || \n                hass.states[entity].state === 'heat' || \n                hass.states[entity].state === 'cool' || \n                hass.states[entity].state === 'heat_cool')\n            );\n          ]]]\n        styles:\n          card:\n            - background: |\n                [[[\n                  return hass.themes.darkMode ? '#352f2d' : '#FCE8E6';\n                ]]]\n          icon:\n            - color: |\n                [[[\n                  return hass.themes.darkMode ? '#FF8A65' : '#812800';\n                ]]]\n`}(t.cameras,t.lighting,t.wifi,t.climate,e);return i}resolveAction({default_action:t,action_type:e,single_tap_web:i}){const n=navigator.userAgent||"",o=!(n.includes("Android")||n.includes("iPhone")||n.includes("iPad")||n.includes("HomeAssistant"));return t||o&&i?"tap_action":e||"tap_action"}_handleClick(t){const e=t.target.closest(".ripple-card");e&&Ft(e,t)}render(){return this._card?W`
      <div style="margin: 0px -15px;" @mousedown=${this._handleClick}>
        ${this._card}
      </div>
    `:W`<ha-card>Loading…</ha-card>`}createRenderRoot(){return this}};Ji.styles=c`
    .ripple-card {
      position: relative;
      overflow: hidden;
    }
  `,n([gt({attribute:!1})],Ji.prototype,"hass",void 0),n([ft()],Ji.prototype,"_config",void 0),n([ft()],Ji.prototype,"_card",void 0),Ji=n([dt("google-dashboard-card")],Ji);let Qi=class extends ct{constructor(){super(...arguments),this._config=Ki,this._valueChanged=t=>{var e,i;const n=t.target,o=n.getAttribute("configValue"),s=t instanceof CustomEvent&&void 0!==(null===(e=t.detail)||void 0===e?void 0:e.value)?t.detail.value:null!==(i=n.checked)&&void 0!==i?i:n.value;o&&this._config[o]!==s&&(this._config=Object.assign(Object.assign({},this._config),{[o]:s}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}}setConfig(t){this._config=Object.assign({},t)}_entityChanged(t){var e;const i=t.detail.value;(null===(e=this._config)||void 0===e?void 0:e.entity)!==i&&(this._config=Object.assign(Object.assign({},this._config),{entity:i}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}async firstUpdated(){const t=await window.loadCardHelpers(),e=await t.createCardElement({type:"entities",entities:[]});await e.constructor.getConfigElement()}render(){var t,e,i,n;return this._config&&this.hass?(this._config.use_default_icon=null===(t=this._config.use_default_icon)||void 0===t||t,this._config.default_action=null===(e=this._config.default_action)||void 0===e||e,W`
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
            .checked=${null===(i=this._config.default_action)||void 0===i||i}
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
                  .checked=${null!==(n=this._config.single_tap_web)&&void 0!==n&&n}
                  configValue="single_tap_web"
                  @change=${this._valueChanged}
                />
              </div>
            `}
      </div>
    `):W``}};Qi.styles=c`
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
  `,n([gt({attribute:!1})],Qi.prototype,"hass",void 0),n([ft()],Qi.prototype,"_config",void 0),Qi=n([dt("google-dashboard-card-editor")],Qi);class tn{#t;#e;#i=0;#n=0;#o=0;#s=0;#a;#r=!1;#l;#c;#h;constructor(t,e,{touchActions:i,stopScrollDirection:n="both"}={}){this.#t=t,this.#e=i,this.#a=e,this.#l=n,this.#c=this.#d.bind(this),this.#h=this.#u.bind(this),this.addListeners()}addListeners(){this.#t.addEventListener("pointerdown",this.#h),this.#t.addEventListener("pointermove",this.#h),this.#t.addEventListener("pointerup",this.#h),this.#t.addEventListener("pointercancel",this.#h),window.addEventListener("touchmove",this.#c,{passive:!1}),this.#e&&(this.#t.style.touchAction=this.#e)}removeListeners(){this.#t.removeEventListener("pointerdown",this.#h),this.#t.removeEventListener("pointermove",this.#h),this.#t.removeEventListener("pointerup",this.#h),this.#t.removeEventListener("pointercancel",this.#h),window.removeEventListener("touchmove",this.#c),this.#e&&this.#t.style.removeProperty("touch-action")}#p(){this.#r=!0}#g(){this.#r=!1}#d(t){this.#r&&t.preventDefault()}#u(t){if("pointerdown"===t.type&&(this.#t.setPointerCapture(t.pointerId),this.#i=t.pageX,this.#n=t.pageY),this.#t.hasPointerCapture(t.pointerId)&&"pointercancel"!==t.type&&"function"==typeof this.#a){const e=t.pageX-this.#i,i=t.pageY-this.#n,n=Math.abs(e/i)>1,o=Math.abs(e/i)<1;"horizontal"===this.#l&&n&&this.#p(),"vertical"===this.#l&&o&&this.#p(),"both"===this.#l&&this.#p(),this.#a(t,{startX:this.#i,startY:this.#n,relativeX:e,relativeY:i,totalX:e+this.#o,totalY:i+this.#s})}"pointerup"===t.type&&(this.#o=+this.#o+t.pageX-this.#i,this.#s=+this.#s+t.pageY-this.#n,this.#t.releasePointerCapture(t.pointerId),this.#g()),"pointercancel"===t.type&&(this.#a(t,{startX:this.#i,startY:this.#n,relativeX:0,relativeY:0,totalX:this.#o,totalY:this.#s}),this.#t.releasePointerCapture(t.pointerId),this.#g())}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class en extends ct{constructor(){super(...arguments),this._config=e,this._name="",this.mouseStartPos={x:0,y:0},this.mousePos={x:0,y:0},this.containerWidth=0,this.oldValue=0,this.currentValue=0,this.holdTimer=0,this.isHold=!1,this._shouldUpdate=!0,this.updateTimeout=0,this.pressTimeout=0,this.trackingStartTime=0,this.isTap=!1,this.color=Yt,this._handleContextMenu=t=>(t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation(),!1),this._handlePointer=(t,e)=>{this.mousePos={x:t.pageX,y:t.pageY};const i=this._config.min_slide_time;if("pointerdown"===t.type&&(this._press(),this.isTap=!0,this.isHold=!1,this.holdTimer=window.setTimeout(this._setHold,this._config.hold_time),this.trackingStartTime=Date.now(),this._resetTrack()),["pointerdown","pointermove","pointerup"].includes(t.type)&&this._updateValue(),"pointermove"===t.type){if(this.isTap&&Math.abs(e.relativeX)<5&&Math.abs(e.relativeY)<5)return;this.isTap=!1,clearTimeout(this.holdTimer),this._stopUpdates()}if("pointercancel"===t.type&&(clearTimeout(this.holdTimer),this._unpress(),this._startUpdates()),"pointerup"===t.type){if(clearTimeout(this.holdTimer),this._unpress(),this._startUpdates(),this.isTap)return void this._handleTap();Date.now()-this.trackingStartTime>i&&(this._setValue(),this._startUpdates(!0))}},this._setHold=()=>{this.isTap=!1,this.isHold=!0,this._handleAction("hold")},this._handleTap=()=>{var t;clearTimeout(this.holdTimer),(null===(t=this._config)||void 0===t?void 0:t.tap_action)&&(this.isHold||this._handleAction("tap"))}}static getStubConfig(t){const e=Object.keys(t.states).filter(t=>t.startsWith("light.")).sort();return{type:"custom:google-slider-card",entity:e[Math.floor(Math.random()*e.length)],attribute:"brightness",icon:"m3of:lightbulb",show_percentage:!0,bold_text:!1}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("google-slider-card-editor")}setConfig(t){if(!t)throw new Error(Et("common.invalid_configuration"));if(!t.entity)throw new Error(Et("common.no_entity_set"));if(!t.entity||"light"!==t.entity.split(".")[0])throw new Error("Specify an entity from within the light domain");this._config=Object.assign(Object.assign({},e),t),this._entity=this._config.entity,this._config.original_min=this._config.min,this._config.original_max=this._config.max}set hass(t){var e,i,n,o,s,a,r,l;if(!this._entity)return;this._hass=t,this._state=t.states[this._entity],this._status=null===(e=this._state)||void 0===e?void 0:e.state,this._name=null!==(a=null!==(s=null!==(i=this._config.name)&&void 0!==i?i:null===(o=null===(n=this._state)||void 0===n?void 0:n.attributes)||void 0===o?void 0:o.friendly_name)&&void 0!==s?s:this._entity.split(".")[1])&&void 0!==a?a:"";const c=(null===(r=t.themes)||void 0===r?void 0:r.darkMode)?"dark":"light",h=null===(l=t.states[this._entity])||void 0===l?void 0:l.state;this._lastTheme===c&&this._lastEntityState===h||(this._lastTheme=c,this._lastEntityState=h,this.requestUpdate())}connectedCallback(){super.connectedCallback(),this.addEventListener("contextmenu",this._handleContextMenu),this.slideGesture=new tn(this,this._handlePointer.bind(this),{touchActions:"pan-y",stopScrollDirection:"horizontal"})}disconnectedCallback(){this.removeEventListener("contextmenu",this._handleContextMenu),this.slideGesture.removeListeners(),super.disconnectedCallback()}_updateValue(){const t=this.containerWidth,e=this.mousePos.x-this.mouseStartPos.x,i=Math.round(100*e/t);this.currentValue=this.oldValue+i,this._checklimits(),this._updateSlider()}_handleAction(t){const e=new Event("hass-action",{bubbles:!0,cancelable:!1,composed:!0});e.detail={config:this._config,action:t},this.dispatchEvent(e)}_resetTrack(){this.mouseStartPos={x:this.mousePos.x,y:this.mousePos.y},this.oldValue=this.currentValue}_press(){this.pressTimeout&&clearTimeout(this.pressTimeout),this.pressTimeout=window.setTimeout(()=>this.setAttribute("pressed",""),this._config.min_slide_time),this.setAttribute("half-pressed","")}_unpress(){this.pressTimeout&&clearTimeout(this.pressTimeout),this.removeAttribute("pressed"),this.removeAttribute("half-pressed")}_checklimits(){var t,e;const i=null!==(t=this._config.min)&&void 0!==t?t:0,n=null!==(e=this._config.max)&&void 0!==e?e:100;this.currentValue<i&&(this.currentValue=i,this._resetTrack()),this.currentValue>n&&(this.currentValue=n,this._resetTrack())}_updateSlider(){var t;this.style.setProperty("--bsc-percent",this.currentValue+"%");const e=null===(t=null==this?void 0:this.shadowRoot)||void 0===t?void 0:t.getElementById("percentage");e&&(e.innerText=Math.round(this.currentValue)+"%")}_updateColors(){var t,e,i,n,o;let s="var(--bsc-color)",a="0%",r="50%",l=!1;if(this._state)if("on"==this._status){const o=null!==(e=null===(t=this._state.attributes)||void 0===t?void 0:t.rgb_color)&&void 0!==e?e:[255,255,255],c=null!==(n=null===(i=this._state.attributes)||void 0===i?void 0:i.brightness)&&void 0!==n?n:255;l=!0,o&&(s=`rgb(${o.join(",")})`),c&&(a=`${Math.ceil(100*c/255)}%`,r=`${Math.ceil(100*c/510+50)}%`)}else s="var(--bsc-off-color)";const c=null===(o=null==this?void 0:this.shadowRoot)||void 0===o?void 0:o.getElementById("percentage");if(!l){"on"!=this._status&&"off"!=this._status?c&&(c.innerText=Et("common.offline")):c&&(c.innerText=Et("common.off"))}this.style.setProperty("--bsc-entity-color",s),this.style.setProperty("--bsc-brightness",a),this.style.setProperty("--bsc-brightness-ui",r),this._config.icon_color&&l&&this.style.setProperty("--bsc-icon-color",this._config.icon_color),this._config.icon_color&&!l&&this.style.removeProperty("--bsc-icon-color")}_getValue(){var t,e,i,n,o;if(!this._shouldUpdate)return;if(!this._state)return;const s=null===(t=this._config)||void 0===t?void 0:t.attribute;let a=0;if("unavailable"==this._status?(this._config.min=0,this._config.max=0,this.style.setProperty("--bsc-opacity","0.5")):(this._config.min=this._config.original_min,this._config.max=this._config.original_max,this.style.removeProperty("--bsc-opacity")),"on"!=this._status)a=null!==(e=this._config.min)&&void 0!==e?e:0;else switch(s){case"brightness":a=Math.round(100*(null!==(i=this._state.attributes.brightness)&&void 0!==i?i:255)/255);break;case"red":case"green":case"blue":const t=null!==(n=this._state.attributes.rgb_color)&&void 0!==n?n:[255,255,255];"red"===s&&(a=t[0]),"green"===s&&(a=t[1]),"blue"===s&&(a=t[2]),a=Math.ceil(100*a/255);break;case"hue":case"saturation":const e=null!==(o=this._state.attributes.hs_color)&&void 0!==o?o:[100,100];"hue"===s&&(a=e[0]),"saturation"===s&&(a=e[1])}this.currentValue=a,this._updateSlider()}_setValue(){var t,e;if(!this._state)return;let i,n=this.currentValue,o=this._config.attribute,s=!0;switch(o){case"brightness":n=Math.ceil(n/100*255),n||(s=!1);break;case"red":case"green":case"blue":i=null!==(t=this._state.attributes.rgb_color)&&void 0!==t?t:[255,255,255],"red"===o&&(i[0]=n),"green"===o&&(i[1]=n),"blue"===o&&(i[2]=n),n=i,o="rgb_color";break;case"hue":case"saturation":i=null!==(e=this._state.attributes.hs_color)&&void 0!==e?e:[100,100],"hue"===o&&(i[0]=n),"saturation"===o&&(i[1]=n),n=i,o="hs_color"}const a={entity_id:this._state.entity_id};s?(a[o]=n,this._config.transition&&(a.transition=this._config.transition),this._hass.callService("light","turn_on",a)):this._hass.callService("light","turn_off",a)}_stopUpdates(){var t,e,i;this.updateTimeout&&clearTimeout(this.updateTimeout),this._shouldUpdate&&(null===(i=null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("slider"))||void 0===e?void 0:e.classList)||void 0===i||i.remove("animate"),this._shouldUpdate=!1)}_startUpdates(t=!1){this.updateTimeout&&clearTimeout(this.updateTimeout),this.updateTimeout=window.setTimeout(()=>{var t,e,i;this._shouldUpdate=!0,null===(i=null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("slider"))||void 0===e?void 0:e.classList)||void 0===i||i.add("animate"),this.requestUpdate()},t?this._config.settle_time:0)}_onClick(t){Ft(t.currentTarget,t)}updated(){var t,e,i;this.containerWidth=null!==(i=null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("container"))||void 0===e?void 0:e.clientWidth)&&void 0!==i?i:0,this._getValue(),this._updateColors()}render(){var t,e,i,n,o,s,a,r,l;if(!this._entity||!(this._entity in(null!==(e=null===(t=this._hass)||void 0===t?void 0:t.states)&&void 0!==e?e:{})))return this._showError(`${Et("common.no_entity")}: ${this._entity}`);const c=null!==(i=this._config.colorize&&!0)&&void 0!==i&&i,h=null!==(n=this._config.show_percentage&&!0)&&void 0!==n&&n,d=null!==(o=this._config.bold_text&&!0)&&void 0!==o&&o,u=null===(a=null===(s=this._hass)||void 0===s?void 0:s.states)||void 0===a?void 0:a[this._entity],p="on"!=(null==u?void 0:u.state)&&"off"!=(null==u?void 0:u.state),g=(null===(l=null===(r=this._hass)||void 0===r?void 0:r.themes)||void 0===l?void 0:l.darkMode)?"dark":"light",f="on"===(null==u?void 0:u.state);let m="",_="",b="",v="",y="";p?"light"===g?(m=this.color.light.offline.light.title,_=this.color.light.offline.light.icon,b=this.color.light.offline.light.percentage,v=this.color.light.offline.light.slider,y=this.color.light.offline.light.background):(m=this.color.dark.offline.light.title,_=this.color.dark.offline.light.icon,b=this.color.dark.offline.light.percentage,v=this.color.dark.offline.light.slider,y=this.color.dark.offline.light.background):f?"dark"===g?(m=this.color.dark.on.light.title,_=this.color.dark.on.light.icon,b=this.color.dark.on.light.percentage,v=this.color.dark.on.light.slider,y=this.color.dark.on.light.background):(m=this.color.light.on.light.title,_=this.color.light.on.light.icon,b=this.color.light.on.light.percentage,v=this.color.light.on.light.slider,y=this.color.light.on.light.background):"dark"===g?(m=this.color.dark.off.light.title,_=this.color.dark.off.light.icon,b=this.color.dark.off.light.percentage,v=this.color.dark.off.light.slider,y=this.color.dark.off.light.background):(m=this.color.light.off.light.title,_=this.color.light.off.light.icon,b=this.color.light.off.light.percentage,v=this.color.light.off.light.slider,y=this.color.light.off.light.background),this._setStyleProperty("--bsc-name-color",m),this._setStyleProperty("--bsc-icon-color",_),this._setStyleProperty("--bsc-percentage-color",b),this._setStyleProperty("--bsc-slider-color",v),this._setStyleProperty("--bsc-background",y),this._setStyleProperty("--bsc-name-margin","-20px"),this._setStyleProperty("--bsc-icon-margin","-10px"),this._setStyleProperty("--bsc-percentage-margin","-20px"),this._setStyleProperty("--bsc-primary-text-color",this._config.text_color),this._setStyleProperty("--bsc-border-color",this._config.border_color),this._setStyleProperty("--bsc-border-radius",this._config.border_radius),this._setStyleProperty("--bsc-border-style",this._config.border_style),this._setStyleProperty("--bsc-border-width",this._config.border_width),this._setStyleProperty("--bsc-height",this._config.height,t=>`${t}px`);const w=null==this._config.icon||"m3of:lightbulb"===this._config.icon||"m3r:lightbulb"===this._config.icon?f?"m3of:lightbulb":"m3r:lightbulb":this._config.icon;return W`
      <ha-card
        id="container"
        tabindex="0"
        style="position: relative; ${p?"padding: 12px 35px 12px 12px":"padding: 12px 12px"}"
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
            data-state=${(t=>t??B)(this._status)}
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
                icon="m3rf:warning"
                style="position: absolute; right: 13px; top: 50%; transform: translateY(-50%); color: var(--bsc-icon-color); --mdc-icon-size: 20px;"
                title="Offline"
              ></ha-icon>
            `:""}
      </ha-card>
    `}_setStyleProperty(t,e,i=t=>t){null!=e&&""!==e&&this.style.setProperty(t,i(e))}_showWarning(t){return W` <hui-warning>${t}</hui-warning> `}_showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t}),W` ${e} `}static get styles(){return c`
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
        --bsc-height: var(--ha-card-height, 97px);
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
        /* opacity: var(--bsc-opacity);*/
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
        padding: 12px 12px;
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
        /*opacity: 0.3;*/
        z-index: -1;
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
        font-weight: 550;
        line-height: 1.35;
      }

      #name.bold,
      #percentage.bold {
        font-weight: bold !important;
      }

      #percentage {
        color: var(--bsc-percentage-color);
        font-size: 13px;
        margin-top: 1px;
        font-weight: 500;
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
    `}}n([ft()],en.prototype,"_config",void 0),n([ft()],en.prototype,"_entity",void 0),n([ft()],en.prototype,"_state",void 0),n([ft()],en.prototype,"_status",void 0),n([ft()],en.prototype,"_name",void 0);const nn={type:"custom:google-climate-card",entity:"climate.thermo",increase_temp:1,decrease_temp:1,use_material_color:!0,use_default_icon:!0};let on=class extends ct{constructor(){super(...arguments),this._config=nn,this.google_color_scheme=Yt}setConfig(t){if(!t||!t.entity)throw new Error(Et("common.invalid_configuration"));this._config=t}static getStubConfig(t){const e=Object.keys(t.states).filter(t=>t.startsWith("climate.")).sort();return{type:"custom:google-climate-card",entity:e[Math.floor(Math.random()*e.length)],increase_temp:1,decrease_temp:1,use_material_color:!0,use_default_icon:!0}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("google-climate-card-editor")}_onClick(t){if(Ft(t.currentTarget,t),navigator.vibrate&&navigator.vibrate(60),!this._config||!this.hass)return;const e=this._config.entity;Nt(this,"hass-more-info",{entityId:e})}async _adjustTemp(t){var e,i;if(navigator.vibrate&&navigator.vibrate(60),!this.hass||!(null===(e=this._config)||void 0===e?void 0:e.entity))return;const n=this.hass.states[this._config.entity],o=Number(this._config.fix_temperature?5*n.attributes.temperature:null===(i=null==n?void 0:n.attributes)||void 0===i?void 0:i.temperature);if(isNaN(o))return;const s=this._config.fix_temperature?(o+t)/5:o+t;this.hass.states[this._config.entity].attributes.temperature=s,await this.hass.callService("climate","set_temperature",{entity_id:this._config.entity,temperature:s}),setTimeout(()=>{this.requestUpdate()},500)}setColorCard(t,e,i,n){let o="",s="",a="",r="",l="";i?"light"===e?(o=s=this.google_color_scheme.light.offline.climate.title,l=this.google_color_scheme.light.offline.climate.background):(o=s=this.google_color_scheme.dark.offline.climate.title,l=this.google_color_scheme.dark.offline.climate.background):n?"dark"===e?t?(o=s=this.google_color_scheme.dark.on.climate.material.title,a=this.google_color_scheme.dark.on.climate.material.button,r=this.google_color_scheme.dark.on.climate.material.subtitle,l=this.google_color_scheme.dark.on.climate.material.background):(o=s=this.google_color_scheme.dark.on.climate.default.title,a=this.google_color_scheme.dark.on.climate.default.button,r=this.google_color_scheme.dark.on.climate.default.subtitle,l=this.google_color_scheme.dark.on.climate.default.background):t?(o=s=r=this.google_color_scheme.light.on.climate.material.title,a=this.google_color_scheme.light.on.climate.material.button,l=this.google_color_scheme.light.on.climate.material.background):(o=s=r=this.google_color_scheme.light.on.climate.default.title,a=this.google_color_scheme.light.on.climate.default.button,l=this.google_color_scheme.light.on.climate.default.background):"dark"===e?(o=s=r=this.google_color_scheme.dark.off.climate.default.title,a=this.google_color_scheme.dark.off.climate.default.button,l=this.google_color_scheme.dark.off.climate.default.background):(o=s=r=this.google_color_scheme.light.off.climate.default.title,a=this.google_color_scheme.light.off.climate.default.button,l=this.google_color_scheme.light.off.climate.default.background),this._setStyleProperty("--bsc-name-color",o),this._setStyleProperty("--bsc-icon-color",s),this._setStyleProperty("--bsc-adjustTemp-color",a),this._setStyleProperty("--bsc-internalTemp-color",r),this._setStyleProperty("--bsc-background",l)}_setStyleProperty(t,e,i=t=>t){null!=e&&""!==e&&this.style.setProperty(t,i(e))}render(){var t,e;if(!this._config||!this.hass)return W``;const i=this.hass.states[this._config.entity];if(!i)return W`<ha-card
        ><div class="warning">${Et("common.no_entity")}</div></ha-card
      >`;console.log("CLIMATE",i,this.hass);const n=this._config.name||i.attributes.friendly_name,o=Dt(i.state),s=Bt(i,"thermometer",o,this._config.fix_temperature),a=(null===(e=null===(t=this.hass)||void 0===t?void 0:t.themes)||void 0===e?void 0:e.darkMode)?"dark":"light",r=zt(i.state);this.setColorCard(this._config.use_material_color,a,o,r);const l={control_type:"thermometer",icon:this._config.icon,use_default_icon:this._config.use_default_icon,dual_icon:this._config.dual_icon,icon_on:this._config.icon_on,icon_off:this._config.icon_off};return W`
      <div class="temperature-card">
        <div class="header" @click=${this._onClick}>
          <div class="valve-info">
            <ha-icon
              id="icon_offline"
              icon="${Gt(i,l,this.hass)}"
              title="Climate"
              class="chevron"
              style="
                --mdc-icon-size: 20px;
                margin-top: -5px;
              "
            ></ha-icon>

            <span class="valve-name">${n}</span>
          </div>

          ${o?W`<ha-icon
                id="icon_offline"
                icon="m3rf:warning"
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
                  @click=${()=>this._adjustTemp(-this._config.decrease_temp|-nn.decrease_temp)}
                >
                  −
                </button>
                <div class="temperature-display" id="tempDisplay">
                  ${this._config.fix_temperature?5*i.attributes.temperature:i.attributes.temperature}
                </div>
                <button
                  class="control-btn plus-btn"
                  @click=${()=>this._adjustTemp(this._config.decrease_temp|nn.increase_temp)}
                >
                  +
                </button>
              </div>

              <div class="internal-temp">
                <span id="internalTemp">${s}</span>
              </div>
            `}
      </div>
    `}};on.styles=c`
    .temperature-card {
      background: var(--bsc-background);
      border-radius: 28px;
      padding: 10px 15px;
      width: -webkit-fill-available;
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
      color: var(--bsc-name-color);
      font-size: 16px;
      font-weight: 500;
    }

    .chevron {
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
      background: var(--bsc-adjustTemp-color);
      border: none;
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
  `,n([gt({attribute:!1})],on.prototype,"hass",void 0),n([ft()],on.prototype,"_config",void 0),on=n([dt("google-climate-card")],on);let sn=class extends ct{constructor(){super(...arguments),this._config=nn,this._valueChanged=t=>{var e,i;const n=t.target,o=n.getAttribute("configValue"),s=t instanceof CustomEvent&&void 0!==(null===(e=t.detail)||void 0===e?void 0:e.value)?t.detail.value:null!==(i=n.checked)&&void 0!==i?i:n.value;o&&this._config[o]!==s&&(this._config=Object.assign(Object.assign({},this._config),{[o]:s}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}}setConfig(t){this._config=Object.assign({},t)}_entityChanged(t){var e;const i=t.detail.value;(null===(e=this._config)||void 0===e?void 0:e.entity)!==i&&(this._config=Object.assign(Object.assign({},this._config),{entity:i}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}async firstUpdated(){const t=await window.loadCardHelpers(),e=await t.createCardElement({type:"entities",entities:[]});await e.constructor.getConfigElement()}render(){var t,e,i,n,o,s;return this._config&&this.hass?(this._config.use_default_icon=null===(t=this._config.use_default_icon)||void 0===t||t,this._config.use_material_color=null===(e=this._config.use_material_color)||void 0===e||e,W`
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
            .checked=${null===(i=this._config.use_material_color)||void 0===i||i}
            configValue="use_material_color"
            @change=${this._valueChanged}
          />
        </div>

        <div class="switch-row">
          <span class="switch-label"
            >${Et("google_climate_card.dual_icon.default")}</span
          >
          <ha-switch
            .checked=${null===(n=this._config.use_default_icon)||void 0===n||n}
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

        <div class="switch-row">
          <span class="switch-label"
            >${Et("google_climate_card.fix_temperature")}</span
          >
          <ha-switch
            .checked=${null!==(s=this._config.fix_temperature)&&void 0!==s&&s}
            configValue="fix_temperature"
            @change=${this._valueChanged}
          />
        </div>
      </div>
    `):W``}};sn.styles=c`
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
  `,n([gt({attribute:!1})],sn.prototype,"hass",void 0),n([ft()],sn.prototype,"_config",void 0),sn=n([dt("google-climate-card-editor")],sn);const an={type:"custom:google-control-card"};let rn=class extends ct{constructor(){super(...arguments),this._config=an}async setConfig(t){if(!t)throw new Error(Et("common.invalid_configuration"));this._config=t}static getStubConfig(){return{type:"custom:google-control-card",name:"Control Card",icon:"mdi:link"}}async updated(t){if(t.has("hass"))if(this._card)this._card.hass=this.hass;else if(this._config){const t=this.mapTemplate(),e=Xi.load(t),i=await window.loadCardHelpers(),n=await i.createCardElement(e);n.classList.add("ripple-card"),n.hass=this.hass,this._card=n,this.requestUpdate()}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("google-control-card-editor")}mapTemplate(){const t=this.hass.states[this._config.entity],e=function(t,e){return`type: custom:button-card\nname: ${t}\nicon: ${e}\ntap_action:\n  action: url\n  url_path: |\n    [[[\n      const ua = navigator.userAgent || "";\n      if (ua.includes("Android")) {\n        return "app://com.google.android.apps.chromecast.app";\n      } else if (ua.includes("iPhone") || ua.includes("iPad")) {\n        return "googlehome://";\n      } else {\n        return "https://home.google.com/";\n      }\n    ]]]\nstyles:\n  grid:\n    - grid-template-columns: 2fr 1fr 1fr\n    - grid-template-rows: 2fr 0.1fr 2fr\n    - grid-template-areas: |\n        "i . ."\n        ". . ."\n        "n n n"\n  card:\n    - height: 140px\n    - width: 140px\n    - border-radius: 30px\n    - margin-bottom: 1px\n    - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05), 0px 0.5px 1.5px rgba(0, 0, 0, 0.07);\n    - background-color: |\n        [[[\n          return hass.themes.darkMode ? '#1f2022' : '#eeedf2';\n        ]]]\n  name:\n    - font-size: 1rem\n    - font-weight: bold\n    - justify-self: start\n    - align-self: center\n    - margin-left: 20px\n    - width: 100px\n    - text-align: left\n    - white-space: normal\n    - overflow-wrap: break-word\n    - word-break: break-word\n    - color: |\n        [[[\n          return hass.themes.darkMode ? '#e3e3e5' : '#1b1b1d';\n        ]]]\n  icon:\n    - color: |\n        [[[\n          return hass.themes.darkMode ? '#c4c7d0' : '#43484e';\n        ]]]\n`}(this._config.name||t.attributes.friendly_name,this._config.icon);return e}render(){return this._card?W`${this._card}`:W`<ha-card>Loading…</ha-card>`}createRenderRoot(){return this}};rn.styles=c`
    .ripple-card {
      position: relative;
      overflow: hidden;
    }
  `,n([gt({attribute:!1})],rn.prototype,"hass",void 0),n([ft()],rn.prototype,"_config",void 0),n([ft()],rn.prototype,"_card",void 0),rn=n([dt("google-control-card")],rn);let ln=class extends ct{constructor(){super(...arguments),this._config=an,this._valueChanged=t=>{var e,i;const n=t.target,o=n.getAttribute("configValue"),s=t instanceof CustomEvent&&void 0!==(null===(e=t.detail)||void 0===e?void 0:e.value)?t.detail.value:null!==(i=n.checked)&&void 0!==i?i:n.value;o&&this._config[o]!==s&&(this._config=Object.assign(Object.assign({},this._config),{[o]:s}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}}setConfig(t){this._config=Object.assign({},t)}_entityChanged(t){var e;const i=t.detail.value;(null===(e=this._config)||void 0===e?void 0:e.entity)!==i&&(this._config=Object.assign(Object.assign({},this._config),{entity:i}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}async firstUpdated(){const t=await window.loadCardHelpers(),e=await t.createCardElement({type:"entities",entities:[]});await e.constructor.getConfigElement()}render(){var t,e,i,n,o;return this._config&&this.hass?(this._config.use_default_icon=null===(t=this._config.use_default_icon)||void 0===t||t,this._config.use_material_color=null===(e=this._config.use_material_color)||void 0===e||e,W`
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
            .checked=${null===(i=this._config.use_material_color)||void 0===i||i}
            configValue="use_material_color"
            @change=${this._valueChanged}
          />
        </div>

        <div class="switch-row">
          <span class="switch-label"
            >${Et("google_climate_card.dual_icon.default")}</span
          >
          <ha-switch
            .checked=${null===(n=this._config.use_default_icon)||void 0===n||n}
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
    `):W``}};ln.styles=c`
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
  `,n([gt({attribute:!1})],ln.prototype,"hass",void 0),n([ft()],ln.prototype,"_config",void 0),ln=n([dt("google-control-card-editor")],ln);let cn=class extends ct{constructor(){super(...arguments),this._config=i,this._valueChanged=t=>{var e,i;const n=t.target,o=n.getAttribute("configValue"),s=t instanceof CustomEvent&&void 0!==(null===(e=t.detail)||void 0===e?void 0:e.value)?t.detail.value:null!==(i=n.checked)&&void 0!==i?i:n.value;o&&this._config[o]!==s&&(this._config=Object.assign(Object.assign({},this._config),{[o]:s}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}}setConfig(t){this._config=Object.assign({},t)}_entityChanged(t){var e;const i=t.detail.value;(null===(e=this._config)||void 0===e?void 0:e.entity)!==i&&(this._config=Object.assign(Object.assign({},this._config),{entity:i}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}async firstUpdated(){const t=await window.loadCardHelpers(),e=await t.createCardElement({type:"entities",entities:[]});await e.constructor.getConfigElement()}setEntityFilter(){switch(this._config.control_type){case Tt.THERMOMETER:return["climate"];case Tt.SCENE:return["scene","automation"];case Tt.MEDIA_PLAYER:return["media_player"];default:return}}render(){var t,e,i,n,o,s,a,r,l;return this._config&&this.hass?(this._config.use_default_icon=null===(t=this._config.use_default_icon)||void 0===t||t,this._config.use_default_toggle=null===(e=this._config.use_default_toggle)||void 0===e||e,this._config.use_default_text=null===(i=this._config.use_default_text)||void 0===i||i,W`
      <div class="form">
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
          <mwc-list-item value="media_player">
            ${Et("google_button_card.type.media")}
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
            .checked=${null===(n=this._config.use_default_icon)||void 0===n||n}
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

        <div class="switch-row">
          <span class="switch-label"
            >${Et("google_button_card.dual_text.default")}</span
          >
          <ha-switch
            .checked=${null===(s=this._config.use_default_text)||void 0===s||s}
            configValue="use_default_text"
            @change=${this._valueChanged}
          />
        </div>

        ${this._config.use_default_text?W``:W`
              <div class="dual-icons">
                <ha-textfield
                  label="${Et("google_button_card.dual_text.text_on")}"
                  .value=${this._config.text_on||""}
                  configValue="text_on"
                  @input=${this._valueChanged}
                  placeholder="On"
                ></ha-textfield>
                <ha-textfield
                  label="${Et("google_button_card.dual_text.text_off")}"
                  .value=${this._config.text_off||""}
                  configValue="text_off"
                  @input=${this._valueChanged}
                  placeholder="Off"
                ></ha-textfield>
              </div>
            `}
        ${this._config.control_type!=Tt.THERMOMETER?W``:W` <div class="switch-row">
                <span class="switch-label"
                  >${Et("google_climate_card.theme")}</span
                >
                <ha-switch
                  .checked=${null!==(a=this._config.use_material_color)&&void 0!==a&&a}
                  configValue="use_material_color"
                  @change=${this._valueChanged}
                />
              </div>
              <div class="switch-row">
                <span class="switch-label"
                  >${Et("google_climate_card.fix_temperature")}</span
                >
                <ha-switch
                  .checked=${null!==(r=this._config.fix_temperature)&&void 0!==r&&r}
                  configValue="fix_temperature"
                  @change=${this._valueChanged}
                />
              </div>`}

        <div class="switch-row">
          <span class="switch-label"
            >${Et("google_button_card.toggle.title")}</span
          >
          <ha-switch
            .checked=${null===(l=this._config.use_default_toggle)||void 0===l||l}
            configValue="use_default_toggle"
            @change=${this._valueChanged}
          />
        </div>
        ${this._config.use_default_toggle?W``:W`<ha-select
                label="${Et("google_button_card.toggle.press")}"
                .value=${this._config.tap_action||Ht.CLICK}
                configValue="tap_action"
                @selected=${this._valueChanged}
                @closed=${t=>t.stopPropagation()}
              >
                <mwc-list-item value="${Ht.CLICK}">
                  ${Et("google_button_card.toggle.click")}
                </mwc-list-item>
                <mwc-list-item value="${Ht.HOLD}">
                  ${Et("google_button_card.toggle.info")}
                </mwc-list-item>
              </ha-select>

              <ha-select
                label="${Et("google_button_card.toggle.hold")}"
                .value=${this._config.hold_action||Ht.HOLD}
                configValue="hold_action"
                @selected=${this._valueChanged}
                @closed=${t=>t.stopPropagation()}
              >
                <mwc-list-item value="${Ht.CLICK}">
                  ${Et("google_button_card.toggle.click")}
                </mwc-list-item>
                <mwc-list-item value="${Ht.HOLD}">
                  ${Et("google_button_card.toggle.info")}
                </mwc-list-item>
              </ha-select>`}
      </div>
    `):W``}};var hn;cn.styles=c`
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
  `,n([gt({attribute:!1})],cn.prototype,"hass",void 0),n([ft()],cn.prototype,"_config",void 0),cn=n([dt("google-button-card-editor")],cn),console.info(`%c Google Component %c ${Et("common.version")} 1.1.8    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),customElements.define("google-slider-card",en),customElements.get("google-button-card")||customElements.define("google-button-card",qt),customElements.get("google-button-card-editor")||customElements.define("google-button-card-editor",cn),customElements.get("google-dashboard-card")||customElements.define("google-dashboard-card",Ji),customElements.get("google-dashboard-card-editor")||customElements.define("google-dashboard-card-editor",Qi),customElements.get("google-climate-card")||customElements.define("google-climate-card",on),customElements.get("google-climate-card-editor")||customElements.define("google-climate-card-editor",sn),customElements.get("google-control-card")||customElements.define("google-control-card",rn),customElements.get("google-control-card-editor")||customElements.define("google-control-cardeditor",ln),window.customCards=null!==(hn=window.customCards)&&void 0!==hn?hn:[],window.customCards.push({type:"google-slider-card",name:"Google Slider Card (Beta 2)",preview:!0,description:"Google Slider Card for light entities."}),window.customCards.push({type:"google-button-card",name:"Google Button Card",preview:!0,description:"A modern, theme-aware button card inspired by Google’s design. Now stable and production-ready."}),window.customCards.push({type:"google-dashboard-card",name:"Google Dashboard Card",preview:!0,description:"A customizable dashboard card inspired by Google's Material Design. Perfect for building modern, responsive Home Assistant interfaces."}),window.customCards.push({type:"google-climate-card",name:"Google Climate Card",preview:!0,description:"A climate card inspired by Google's design, providing intuitive control and status display for HVAC devices."}),window.customCards.push({type:"google-control-card",name:"Google Control Card (Preview)",preview:!0,description:"Google-style Control card."});
