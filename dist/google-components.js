const t={type:"custom:google-button-card"};var e,i,n;function o(t){return Object.values(n).includes(t)}function s(t){const e=t.device_class,i=t.state_class;return"string"==typeof e&&o(e)?e:"string"==typeof i&&o(i)?i:void 0}!function(t){t.GENERIC="generic",t.THERMOMETER="thermometer",t.SCENE="scene",t.MEDIA_PLAYER="media_player",t.STATE="state",t.ACTION="action",t.APP_VERSION="app_version",t.LIGHT="light",t.COVER="cover"}(e||(e={})),function(t){t.BINARY_SENSOR="binary_sensor",t.SENSOR="sensor",t.SWITCH="switch"}(i||(i={})),function(t){t.MOTION="motion",t.DOOR="door",t.CONNECTIVITY="connectivity",t.MEASUREMENT="measurement",t.BATTERY="battery",t.NONE="none"}(n||(n={}));const a="1.9.0",r={type:"custom:google-slider-card",control_type:e.LIGHT,attribute:"brightness",tap_action:{action:"toggle",haptic:"light"},hold_action:{action:"more-info"},hold_time:600,settle_time:3e3,min_slide_time:0,min:0,max:100};function l(t,e,i,n){var o,s=arguments.length,a=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(a=(s<3?o(a):s>3?o(e,i,a):o(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const c=globalThis,d=c.ShadowRoot&&(void 0===c.ShadyCSS||c.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,h=Symbol(),u=new WeakMap;let g=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==h)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(d&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=u.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&u.set(e,t))}return t}toString(){return this.cssText}};const p=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new g(i,t,h)},f=d?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new g("string"==typeof t?t:t+"",void 0,h))(e)})(t):t,{is:m,defineProperty:_,getOwnPropertyDescriptor:v,getOwnPropertyNames:b,getOwnPropertySymbols:y,getPrototypeOf:w}=Object,x=globalThis,k=x.trustedTypes,$=k?k.emptyScript:"",A=x.reactiveElementPolyfillSupport,E=(t,e)=>t,C={toAttribute(t,e){switch(e){case Boolean:t=t?$:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},O=(t,e)=>!m(t,e),T={attribute:!0,type:String,converter:C,reflect:!1,useDefault:!1,hasChanged:O};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),x.litPropertyMetadata??=new WeakMap;let S=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=T){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&_(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:o}=v(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){const s=n?.call(this);o?.call(this,e),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??T}static _$Ei(){if(this.hasOwnProperty(E("elementProperties")))return;const t=w(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(E("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(E("properties"))){const t=this.properties,e=[...b(t),...y(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(f(t))}else void 0!==t&&e.push(f(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(d)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),n=c.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:C).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=i.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:C;this._$Em=n,this[n]=o.fromAttribute(e,t.type)??this._$Ej?.get(n)??null,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const n=this.constructor,o=this[t];if(i??=n.getPropertyOptions(t),!((i.hasChanged??O)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:o},s){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),!0!==o||void 0!==s)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,i,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[E("elementProperties")]=new Map,S[E("finalized")]=new Map,A?.({ReactiveElement:S}),(x.reactiveElementVersions??=[]).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const P=globalThis,I=P.trustedTypes,M=I?I.createPolicy("lit-html",{createHTML:t=>t}):void 0,N="$lit$",j=`lit$${Math.random().toFixed(9).slice(2)}$`,L="?"+j,F=`<${L}>`,R=document,z=()=>R.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,V=Array.isArray,D="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Y=/-->/g,G=/>/g,W=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),q=/'/g,B=/"/g,X=/^(?:script|style|textarea|title)$/i,K=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),Z=Symbol.for("lit-noChange"),J=Symbol.for("lit-nothing"),Q=new WeakMap,tt=R.createTreeWalker(R,129);function et(t,e){if(!V(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==M?M.createHTML(e):e}const it=(t,e)=>{const i=t.length-1,n=[];let o,s=2===e?"<svg>":3===e?"<math>":"",a=H;for(let e=0;e<i;e++){const i=t[e];let r,l,c=-1,d=0;for(;d<i.length&&(a.lastIndex=d,l=a.exec(i),null!==l);)d=a.lastIndex,a===H?"!--"===l[1]?a=Y:void 0!==l[1]?a=G:void 0!==l[2]?(X.test(l[2])&&(o=RegExp("</"+l[2],"g")),a=W):void 0!==l[3]&&(a=W):a===W?">"===l[0]?(a=o??H,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,r=l[1],a=void 0===l[3]?W:'"'===l[3]?B:q):a===B||a===q?a=W:a===Y||a===G?a=H:(a=W,o=void 0);const h=a===W&&t[e+1].startsWith("/>")?" ":"";s+=a===H?i+F:c>=0?(n.push(r),i.slice(0,c)+N+i.slice(c)+j+h):i+j+(-2===c?e:h)}return[et(t,s+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]};class nt{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let o=0,s=0;const a=t.length-1,r=this.parts,[l,c]=it(t,e);if(this.el=nt.createElement(l,i),tt.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=tt.nextNode())&&r.length<a;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(N)){const e=c[s++],i=n.getAttribute(t).split(j),a=/([.?@])?(.*)/.exec(e);r.push({type:1,index:o,name:a[2],strings:i,ctor:"."===a[1]?lt:"?"===a[1]?ct:"@"===a[1]?dt:rt}),n.removeAttribute(t)}else t.startsWith(j)&&(r.push({type:6,index:o}),n.removeAttribute(t));if(X.test(n.tagName)){const t=n.textContent.split(j),e=t.length-1;if(e>0){n.textContent=I?I.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],z()),tt.nextNode(),r.push({type:2,index:++o});n.append(t[e],z())}}}else if(8===n.nodeType)if(n.data===L)r.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf(j,t+1));)r.push({type:7,index:o}),t+=j.length-1}o++}}static createElement(t,e){const i=R.createElement("template");return i.innerHTML=t,i}}function ot(t,e,i=t,n){if(e===Z)return e;let o=void 0!==n?i._$Co?.[n]:i._$Cl;const s=U(e)?void 0:e._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),void 0===s?o=void 0:(o=new s(t),o._$AT(t,i,n)),void 0!==n?(i._$Co??=[])[n]=o:i._$Cl=o),void 0!==o&&(e=ot(t,o._$AS(t,e.values),o,n)),e}class st{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??R).importNode(e,!0);tt.currentNode=n;let o=tt.nextNode(),s=0,a=0,r=i[0];for(;void 0!==r;){if(s===r.index){let e;2===r.type?e=new at(o,o.nextSibling,this,t):1===r.type?e=new r.ctor(o,r.name,r.strings,this,t):6===r.type&&(e=new ht(o,this,t)),this._$AV.push(e),r=i[++a]}s!==r?.index&&(o=tt.nextNode(),s++)}return tt.currentNode=R,n}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class at{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ot(this,t,e),U(t)?t===J||null==t||""===t?(this._$AH!==J&&this._$AR(),this._$AH=J):t!==this._$AH&&t!==Z&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>V(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==J&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(R.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=nt.createElement(et(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new st(n,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=Q.get(t.strings);return void 0===e&&Q.set(t.strings,e=new nt(t)),e}k(t){V(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const o of t)n===e.length?e.push(i=new at(this.O(z()),this.O(z()),this,this.options)):i=e[n],i._$AI(o),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class rt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,o){this.type=1,this._$AH=J,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=J}_$AI(t,e=this,i,n){const o=this.strings;let s=!1;if(void 0===o)t=ot(this,t,e,0),s=!U(t)||t!==this._$AH&&t!==Z,s&&(this._$AH=t);else{const n=t;let a,r;for(t=o[0],a=0;a<o.length-1;a++)r=ot(this,n[i+a],e,a),r===Z&&(r=this._$AH[a]),s||=!U(r)||r!==this._$AH[a],r===J?t=J:t!==J&&(t+=(r??"")+o[a+1]),this._$AH[a]=r}s&&!n&&this.j(t)}j(t){t===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class lt extends rt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===J?void 0:t}}class ct extends rt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==J)}}class dt extends rt{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){if((t=ot(this,t,e,0)??J)===Z)return;const i=this._$AH,n=t===J&&i!==J||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==J&&(i===J||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ht{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){ot(this,t)}}const ut=P.litHtmlPolyfillSupport;ut?.(nt,at),(P.litHtmlVersions??=[]).push("3.3.0");const gt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let pt=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const n=i?.renderBefore??e;let o=n._$litPart$;if(void 0===o){const t=i?.renderBefore??null;n._$litPart$=o=new at(e.insertBefore(z(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Z}};pt._$litElement$=!0,pt.finalized=!0,gt.litElementHydrateSupport?.({LitElement:pt});const ft=gt.litElementPolyfillSupport;ft?.({LitElement:pt}),(gt.litElementVersions??=[]).push("4.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const mt=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},_t={attribute:!0,type:String,converter:C,reflect:!1,hasChanged:O},vt=(t=_t,e,i)=>{const{kind:n,metadata:o}=i;let s=globalThis.litPropertyMetadata.get(o);if(void 0===s&&globalThis.litPropertyMetadata.set(o,s=new Map),"setter"===n&&((t=Object.create(t)).wrapped=!0),s.set(i.name,t),"accessor"===n){const{name:n}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(n,o,t)},init(e){return void 0!==e&&this.C(n,void 0,t,e),e}}}if("setter"===n){const{name:n}=i;return function(i){const o=this[n];e.call(this,i),this.requestUpdate(n,o,t)}}throw Error("Unsupported decorator location: "+n)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function bt(t){return(e,i)=>"object"==typeof i?vt(t,e,i):((t,e,i)=>{const n=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),n?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function yt(t){return bt({...t,state:!0,attribute:!1})}var wt={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",no_entity_set:"Entity not set",no_entity:"Entity not available",indoor:"Indoor",on:"On",off:"Off",offline:"Offline",auto:"Auto",heat:"Heat",cool:"Cool",dry:"Dry",fan:"Fan",playing:"Playing",idle:"Cast",presence:"Motion",off_presence:"No motion"},xt={description:"Configure the navigation path when a card is tapped.",cameras:"Cameras path",cameras_name:"Cameras",lighting:"Lighting path",lighting_name:"Lighting",lighting_label:"Lights",wifi:"Wi-Fi path",wifi_name:"Wi-Fi",climate:"Climate path",climate_name:"Climate",device:"Device",devices:"Devices",placeholder:"./path-or-url",default:"Use default configuration on Tap (Single Tap)",tap_type:"Select the type of Tap (Single Tap, Hold Press, Double Tap)",single:"Single Tap",hold:"Hold Press",double:"Double Tap",web:"Use Single Tap on Browser (Selected tap on mobile)"},kt={name:"Entity Name",entity:"Entity",theme:"Use Material Expressive",increase_temp:"Increase Temperature (e.g. 0.5)",decrease_temp:"Decrease Temperature (e.g. 0.5)",dual_icon:{default:"Use Default Icon",options:"Use Dual Icon (On and Off states)."},fix_temperature:"Enable if temperature is not correct",false:"Not Active",true:"Actve",auto:"Auto"},$t={name:"Entity Name",control_type:"Control Type",type:{generic:"Generic (Switch, Button...)",thermometer:"Thermometer",scene:"Autonomation and scene",media:"Multimedia (Google, Alexa...)",state:"State",action:"Action",app_version:"Google Components Version"},dual_icon:{default:"Use default icon",options:"Use dual icon (Element On and Element Off)."},dual_text:{default:"Use Default Text",text_on:"Text On",text_off:"Text Off"},toggle:{title:"Enable automatic actions",press:"Action on click",hold:"Action on long press",click:"Single click (On/Off)",info:"Show information",navigate:"Navigate",url:"URL",none:"None"}},At={name:"Card Name",entity_card:"Use card as entity",entity:"Entity",dual_icon:{default:"Use Default Icon",options:"Use Dual Icon (On and Off states)."},actions:{press:"Action on click",hold:"Action on long press",more_info:"More Info",toggle:"Toggle",navigate:"Navigate",url:"URL",none:"None",google_home:"Open Google Home",settings:"Open Settings"}},Et={name:"Card Name",control_type:"Control Type",type:{light:"Light",cover:"Cover"},entity:"Entity to control",icon:"Custom icon (if left empty, changes automatically based on On/Off state)",percentage:"Display value as percentage",bold_text:"Bold style for the text"},Ct={on_text:"Text for Lights ON",off_text:"Text for Lights OFF"},Ot={media_card:{no_content:"Nothing is playing",playing:"Now playing"},remote:"Open Remote",cast:"Cast screen",stop_cast:"Stop casting",open:"Open ",open_google:"Open Google Home"},Tt={common:wt,google_dashboard_card:xt,google_climate_card:kt,google_button_card:$t,google_control_card:At,google_slider_card:Et,google_lights_card:Ct,google_media_overlay:Ot},St={version:"Versione",invalid_configuration:"Configurazione non valida",show_warning:"Mostra avviso",no_entity_set:"Entità non impostata",no_entity:"Entità non disponibile",indoor:"Interno",on:"Acceso",off:"Spento",offline:"Offline",auto:"Auto",heat:"Riscalda",dry:"Deumidificatore",cool:"Raffresca",fan:"Ventilazione",playing:"Riproduzione",idle:"Cast",presence:"Movimento",off_presence:"Nessun movimento"},Pt={description:"Configura il percorso di navigazione quando una card viene cliccata.",cameras:"Percorso delle telecamere",cameras_name:"Telecamere",lighting:"Percorso delle luci",lighting_name:"Illuminazione",lighting_label:"Luci",wifi:"Percorso Wi-Fi",wifi_name:"Wi-Fi",climate:"Percorso del clima",climate_name:"Climatizzazione",device:"Dispositivo",devices:"Dispositivi",placeholder:"./percorso-o-url",default:"Usa configurazione di default al Tap(Tap Singolo)",tap_type:"Seleziona il tipo di Tap (Tap Singolo, Hold Press, Double Tap)",single:"Tap Singolo",hold:"Tap a pressione",double:"Doppio Tap",web:"Usa Tap Singolo sul Browser (Su mobile il tap selezionato)"},It={name:"Nome Entità",entity:"Entità",theme:"Usa Material Expressive",increase_temp:"Aumento Temperatura (e.g. 0.5)",decrease_temp:"Diminuzione Temperatura (e.g. 0.5)",dual_icon:{default:"Usa Icona di default",options:"Usa doppia icona (Elemento acceso e spento)."},fix_temperature:"Abilita se la temperatura non è corretta",false:"Non attivo",true:"Attivo",auto:"Automatico"},Mt={name:"Nome Entità",control_type:"Tipo di controllo",type:{generic:"Generico (Interruttore, Pulsante...)",thermometer:"Termometro",scene:"Autonomazioni e scene",media:"Multimedia (Google, Alexa...)",state:"Stato",action:"Azioni",app_version:"Versione Google Components"},dual_icon:{default:"Usa Icona di default",options:"Usa doppia icona (Elemento acceso e spento)."},dual_text:{default:"Usa Testo di Default",text_on:"Testo On",text_off:"Testo Off"},toggle:{title:"Attiva azioni automatiche",press:"Azione al clic",hold:"Azione alla pressione prolungata",click:"Clic singolo (Accensione/Spegnimento)",info:"Visualizza informazioni",navigate:"Naviga",url:"URL",none:"Nessuna azione"}},Nt={name:"Nome della Scheda",entity_card:"Usa la scheda come entità",entity:"Entità",dual_icon:{default:"Usa l'icona predefinita",options:"Usa icona doppia (stati Attivo e Disattivo)."},actions:{hold:"Azione alla pressione prolungata",press:"Azione al clic",more_info:"Più informazioni",toggle:"Attiva/Disattiva",navigate:"Naviga",url:"URL",none:"Nessuna azione",google_home:"Apri Google Home",settings:"Apri Impostazioni"}},jt={name:"Nome della Card",control_type:"Tipo di controllo",type:{light:"Luci",cover:"Tapparelle"},entity:"Entità da controllare",icon:"Icona personalizzata (se vuota, cambia automaticamente in base allo stato On/Off)",percentage:"Mostra la percentuale di valore",bold_text:"Testo con stile in grassetto"},Lt={on_text:"Testo per Luci Accese",off_text:"Testo per Luci Spente"},Ft={media_card:{no_content:"Nessun contenuto in riproduzione",playing:"Ora in riproduzione"},remote:"Apri il telecomando",cast:"Trasmetti schermo",stop_cast:"Interrompi trasmissione",open:"Apri",open_google:"Apri Google Home"},Rt={common:St,google_dashboard_card:Pt,google_climate_card:It,google_button_card:Mt,google_control_card:Nt,google_slider_card:jt,google_lights_card:Lt,google_media_overlay:Ft};const zt={en:Object.freeze({__proto__:null,common:wt,default:Tt,google_button_card:$t,google_climate_card:kt,google_control_card:At,google_dashboard_card:xt,google_lights_card:Ct,google_media_overlay:Ot,google_slider_card:Et}),it:Object.freeze({__proto__:null,common:St,default:Rt,google_button_card:Mt,google_climate_card:It,google_control_card:Nt,google_dashboard_card:Pt,google_lights_card:Lt,google_media_overlay:Ft,google_slider_card:jt})};function Ut(t,e="",i=""){const n=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let o;try{o=t.split(".").reduce((t,e)=>t[e],zt[n])}catch(e){o=t.split(".").reduce((t,e)=>t[e],zt.en)}return void 0===o&&(o=t.split(".").reduce((t,e)=>t[e],zt.en)),""!==e&&""!==i&&(o=o.replace(e,i)),o}var Vt,Dt;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(Vt||(Vt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(Dt||(Dt={}));var Ht,Yt,Gt=["closed","locked","off"],Wt=function(t,e,i,n){n=n||{},i=null==i?{}:i;var o=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return o.detail=i,t.dispatchEvent(o),o},qt=function(t){Wt(window,"haptic",t)},Bt=function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),Wt(window,"location-changed",{replace:i})},Xt=function(t,e,i,n){if(n||(n={action:"more-info"}),!n.confirmation||n.confirmation.exemptions&&n.confirmation.exemptions.some(function(t){return t.user===e.user.id})||(qt("warning"),confirm(n.confirmation.text||"Are you sure you want to "+n.action+"?")))switch(n.action){case"more-info":(i.entity||i.camera_image)&&Wt(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":n.navigation_path&&Bt(0,n.navigation_path);break;case"url":n.url_path&&window.open(n.url_path);break;case"toggle":i.entity&&(function(t,e){(function(t,e,i){void 0===i&&(i=!0);var n,o=function(t){return t.substr(0,t.indexOf("."))}(e),s="group"===o?"homeassistant":o;switch(o){case"lock":n=i?"unlock":"lock";break;case"cover":n=i?"open_cover":"close_cover";break;default:n=i?"turn_on":"turn_off"}t.callService(s,n,{entity_id:e})})(t,e,Gt.includes(t.states[e].state))}(e,i.entity),qt("success"));break;case"call-service":if(!n.service)return void qt("failure");var o=n.service.split(".",2);e.callService(o[0],o[1],n.service_data,n.target),qt("success");break;case"fire-dom-event":Wt(t,"ll-custom",n)}};function Kt(t,e){if(!t)return;const i=document.createElement("span");i.classList.add("ripple");const n=t.getBoundingClientRect(),o=Math.max(n.width,n.height);i.style.width=i.style.height=`${o}px`;const s=e.clientX-n.left-o/2,a=e.clientY-n.top-o/2;i.style.left=`${s}px`,i.style.top=`${a}px`,Object.assign(i.style,{position:"absolute",borderRadius:"50%",background:"rgba(255, 255, 255, 0.3)",transform:"scale(0)",animation:"ripple-animation 600ms ease-out",pointerEvents:"none",zIndex:"1"});const r=getComputedStyle(t);"static"===r.position&&(t.style.position="relative"),"hidden"!==r.overflow&&(t.style.overflow="hidden"),t.appendChild(i),i.addEventListener("animationend",()=>i.remove())}!function(t){t.ON="on",t.AUTO="auto",t.HEAT="heat",t.COOL="cool",t.HEAT_COOL="heat_cool",t.FAN_ONLY="fan_only",t.FAN="fan",t.DRY="dry",t.ECO="eco",t.IDLE="idle",t.PLAYING="playing",t.PAUSED="paused"}(Ht||(Ht={})),function(t){t.OFF="off"}(Yt||(Yt={}));const Zt=Object.assign(Object.assign({},Ht),Yt);function Jt(t){const e=Number.parseInt(t);return!(!isNaN(e)&&0!==e)&&Object.values(Ht).includes(t)}function Qt(t){return Object.values(Ht).includes(t)||Object.values(Yt).includes(t)}function te(t,i=""){const n=Number.parseInt(t);return!(!isNaN(n)&&0!==n)&&((i!=e.SCENE||"unknown"!=t)&&i!=e.STATE&&!Qt(t))}function ee(t,e){return null!=t?t:e}function ie(t){return null==t||("string"==typeof t?0===t.trim().length:"number"==typeof t?0===t||Number.isNaN(t):Array.isArray(t)?0===t.length:"object"==typeof t&&0===Object.keys(t).length)}const ne={dark:{offline:{climate:{title:"var(--md-sys-color-outline, #717173)",icon:"var(--md-sys-color-outline, #717173)",background:"var(--md-sys-color-surface-container-highest, #2c2c2e)"},button:{title:"var(--md-sys-color-outline, #717173)",icon:"var(--md-sys-color-outline, #717173)",percentage:"var(--md-sys-color-outline, #717173)",background:"var(--md-sys-color-surface-container-highest, #2c2c2e)"},light:{title:"var(--md-sys-color-outline, #717173)",icon:"var(--md-sys-color-outline, #717173)",percentage:"var(--md-sys-color-outline, #717173)",slider:"var(--md-sys-color-surface-container-highest, #2c2c2e)",background:"var(--md-sys-color-surface-container-highest, #2c2c2e)"}},on:{climate:{material:{title:"#fedcca",subtitle:"#e6c0b2",icon:"#fedcca",button:"#4b332b",background:"rgba(92, 64, 53, 0.85)"},material_dry:{title:"#cbe5fe",subtitle:"#b3d7f0",icon:"#cbe5fe",button:"#143546",background:"rgba(26, 61, 82, 0.85)"},default:{title:"var(--md-sys-color-on-surface-variant, #c3c3c5)",subtitle:"var(--md-sys-color-on-surface-variant, #c3c3c5)",icon:"var(--md-sys-color-on-surface-variant, #c3c3c5)",button:"var(--md-sys-color-surface-variant, #5c5b60)",background:"var(--md-sys-color-surface-container, rgba(65, 66, 70, 0.83))"}},button:{title:"var(--md-sys-color-on-secondary-container, #d8e3f7)",icon:"var(--md-sys-color-on-secondary-container, #d8e3f7)",percentage:"var(--md-sys-color-on-secondary-container, #d8e3f7)",back_slider_color:"color-mix(in srgb, var(--md-sys-color-secondary-container) 70%, black)",background:"var(--md-sys-color-secondary-container, #3e4758)"},light:{title:"#ffe083",icon:"#ffe083",percentage:"#ffe083",slider:"#50472a",background:"#333029"}},off:{climate:{default:{title:"var(--md-sys-color-on-surface-variant, #c3c3c5)",subtitle:"var(--md-sys-color-on-surface-variant, #c3c3c5)",icon:"var(--md-sys-color-on-surface-variant, #c3c3c5)",button:"var(--md-sys-color-surface-variant, #5c5b60)",background:"var(--md-sys-color-surface-container, #414246)"}},button:{title:"var(--md-sys-color-on-surface-variant, #e3e3e5)",icon:"var(--md-sys-color-on-surface-variant, #e3e3e5)",percentage:"var(--md-sys-color-on-surface-variant, #e3e3e5)",background:"var(--md-sys-color-surface-container, #292a2e)"},light:{title:"var(--md-sys-color-on-surface-variant, #e3e3e5)",icon:"var(--md-sys-color-on-surface-variant, #e3e3e5)",percentage:"var(--md-sys-color-on-surface-variant, #e3e3e5)",slider:"var(--md-sys-color-surface-container, #292a2e)",background:"var(--md-sys-color-surface-container, #292a2e)"}}},light:{offline:{climate:{title:"var(--md-sys-color-outline, #949496)",icon:"var(--md-sys-color-outline, #949496)",background:"var(--md-sys-color-surface-container-highest, rgba(223, 223, 225, 0.85))"},button:{title:"var(--md-sys-color-outline, #949496)",icon:"var(--md-sys-color-outline, #949496)",percentage:"var(--md-sys-color-outline, #949496)",background:"var(--md-sys-color-surface-container-highest, #dfdfe1)"},light:{title:"var(--md-sys-color-outline, #959597)",icon:"var(--md-sys-color-outline, #959597)",percentage:"var(--md-sys-color-outline, #959597)",slider:"var(--md-sys-color-surface-container-highest, #dfdfe1)",background:"var(--md-sys-color-surface-container-highest, #dfdfe1)"}},on:{climate:{material:{title:"#812800",subtitle:"#812800",icon:"#812800",button:"rgba(245, 180, 150, 0.6)",background:"rgba(258, 193.8, 166, 0.3)"},material_dry:{title:"#006b9c",subtitle:"#006b9c",icon:"#006b9c",button:"#cbe5fe",background:"#e8f1ff"},default:{title:"var(--md-sys-color-on-surface-variant, #525252)",subtitle:"var(--md-sys-color-on-surface-variant, #525252)",icon:"var(--md-sys-color-on-surface-variant, #525252)",button:"var(--md-sys-color-surface-variant, #c1c1c3)",background:"var(--md-sys-color-surface-container, rgba(221, 221, 223, 0.83))"}},button:{title:"var(--md-sys-color-on-secondary-container, #131c2b)",icon:"var(--md-sys-color-on-secondary-container, #131c2b)",percentage:"var(--md-sys-color-on-secondary-container, #131c2b)",back_slider_color:"color-mix(in srgb, var(--md-sys-color-secondary-container) 70%, white)",background:"var(--md-sys-color-secondary-container, #d8e3f7)"},light:{title:"#745b00",icon:"#745b00",percentage:"#745b00",slider:"#ffe083",background:"#feefc8"}},off:{climate:{default:{title:"var(--md-sys-color-on-surface-variant, #525252)",subtitle:"var(--md-sys-color-on-surface-variant, #525252)",icon:"var(--md-sys-color-on-surface-variant, #525252)",button:"var(--md-sys-color-surface-variant, #c1c1c3)",background:"var(--md-sys-color-surface-container, #dddddf)"}},button:{title:"var(--md-sys-color-on-surface-variant, #1b1b1d)",icon:"var(--md-sys-color-on-surface-variant, #1b1b1d)",percentage:"var(--md-sys-color-on-surface-variant, #1b1b1d)",background:"var(--md-sys-color-surface-container, #e8e8ea)"},light:{title:"var(--md-sys-color-on-surface-variant, #1b1b1d)",icon:"var(--md-sys-color-on-surface-variant, #1b1b1d)",percentage:"var(--md-sys-color-on-surface-variant, #1b1b1d)",slider:"var(--md-sys-color-surface-container, #e8e8ea)",background:"var(--md-sys-color-surface-container, #e8e8ea)"}}}};function oe(t,e){return ie(e)?e:"true"==t||"auto"==t&&e<7?5*e:e}function se(t){return t&&!t.includes(Ht.HEAT)&&!t.includes(Ht.HEAT_COOL)}var ae;function re(t,o,a){var r,l,c;const d=t.entity_id.split(".")[0],h=t.state,u=null!==(r=o.control_type)&&void 0!==r?r:"generic",g=null===(l=o.use_default_icon)||void 0===l||l,p=Jt(h);if("string"==typeof o.icon&&o.icon.trim().startsWith("[[[")&&o.icon.trim().endsWith("]]]"))try{const e=o.icon.trim().slice(3,-3),i=new Function("entity","state","hass",e)(t,h,a);if(i&&"string"==typeof i)return i}catch(t){return console.warn("Error evaluating icon template:",t),"mdi:alert-circle-outline"}if(!g)return o.dual_icon?p?o.icon_on||`mdi:${d}`:o.icon_off||`mdi:${d}`:o.icon||`mdi:${d}`;switch(u){case e.THERMOMETER:switch(h){case"auto":case"heat_cool":return"mdi:thermostat-auto";case"heat":return"mdi:fire";case"dry":return"m3of:cool-to-dry";case"fan_only":return"m3of:mode-fan";case"cool":return"mdi:snowflake";case"off":case"unavailable":return"m3s:thermometer";default:return"m3of:thermometer"}case e.SCENE:return"mdi:creation-outline";case e.MEDIA_PLAYER:const r=a.entities[o.entity].device_id,l=a.devices[r].model||null;if(l)switch(l){case ae.NEST_MINI:return p?"m3of:nest-mini":"m3o:nest-mini";case ae.GOOGLE_HOME:return p?"m3of:home-speaker":"m3o:home-speaker";case ae.NEST_HUB:return p?"m3of:nest-display":"m3o:nest-display";case ae.GOOGLE_CAST_GROUP:return p?"m3rf:speaker-group":"m3r:speaker-group";default:return p?"m3rf:tv-gen":"m3r:tv-gen"}break;case e.GENERIC:{const e=!te(h,u);if(d==i.BINARY_SENSOR||d==i.SENSOR){switch(s(t.attributes)){case n.CONNECTIVITY:return p?"m3of:nest-wifi-router":"m3o:nest-wifi-router";case n.MOTION:return p?"m3rf:sensors-krx":"m3r:sensors-krx";case n.BATTERY:if(e){const t=Number.parseInt(h);return t>=90&&t<=100?"m3of:battery-android-full":t>=70&&t<90?"m3of:battery-android-5":t>=50&&t<70?"m3of:battery-android-4":t>=30&&t<50?"m3of:battery-android-3":t>=10&&t<30?"m3of:battery-android-2":t>=5&&t<10?"m3of:battery-android-1":t<5?"m3of:battery-android-0":"m3of:battery-android-5"}return"m3r:battery-android-alert";case n.MEASUREMENT:return"mdi:scale-bathroom";case n.DOOR:return p?"m3rf:sensor-door":"m3r:sensor-door"}}if(d==i.SWITCH)return p?"m3rf:switch":"m3r:switch"}}if(null===(c=t.attributes.icon)||void 0===c?void 0:c.trim())return t.attributes.icon;const f=a.entities[o.entity];return f&&f.icon?f.icon:`mdi:${d}`}function le(t,i,o,r="false",l=!1,c=!1){if(i===e.APP_VERSION)return"V".concat(a);let d="";if(i===e.THERMOMETER&&!o){const e=Jt(t.state),i=!e&&!ie(t.attributes.temperature);if(!e&&!i&&c)return Ut("common.indoor")+" • "+oe(r,t.attributes.current_temperature)+"°";d=t.attributes.current_temperature?" • "+oe(r,t.attributes.current_temperature)+"°":""}if(i===e.MEDIA_PLAYER&&!o){if(!Jt(t.state))return"";const e=ee(t.attributes.app_name,"");d=e?" • "+e:""}if(i===e.GENERIC&&!o){if(s(t.attributes)==n.BATTERY){return t.state+"%"}}if(i===e.STATE&&!o)return t.state;return"event"==(ie(t)?"":t.entity_id.split(".")[0])?function(t){const e=new Date(t);return isNaN(e.getTime())?t:new Intl.DateTimeFormat("it-IT",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(e).replace(/([a-zàèéìòù]+)/,t=>t.charAt(0).toUpperCase()+t.slice(1))}(t.state):function(t,e="",i=!1){if(!Qt(t))return Ut("common.offline");const n={[Zt.ON]:Ut(i?"common.presence":"common.on"),[Zt.OFF]:Ut(i?"common.off_presence":"common.off"),[Zt.AUTO]:Ut("common.auto"),[Zt.HEAT]:Ut("common.heat"),[Zt.COOL]:Ut("common.cool"),[Zt.DRY]:Ut("common.dry"),[Zt.FAN]:Ut("common.fan"),[Zt.FAN_ONLY]:Ut("common.fan"),[Zt.HEAT_COOL]:Ut("common.auto"),[Zt.IDLE]:Ut("common.idle"),[Zt.PAUSED]:Ut("common.idle"),[Zt.PLAYING]:Ut("common.playing")},o=n[t]||t;return""!=e?o+e:o}(t.state,d,l)}function ce(t,e){if(t.name)return t.name;const i=e.states[t.entity];if(i&&i.attributes.friendly_name)return i.attributes.friendly_name;if(e&&e.entities&&e.entities[t.entity]){const i=e.entities[t.entity].device_id;return e.devices[i].name}}!function(t){t.NEST_MINI="Google Nest Mini",t.GOOGLE_HOME="Google Home",t.NEST_HUB="Google Nest Hub",t.GOOGLE_TV_STREAMER="Google TV Streamer",t.GOOGLE_CAST_GROUP="Google Cast Group"}(ae||(ae={}));let de=class extends pt{constructor(){super(...arguments),this._config=t,this.color=ne,this._moved=!1}setConfig(t){if(!t)throw new Error(Ut("common.invalid_configuration"));const i=Object.assign({},t);i.control_type!==e.APP_VERSION&&i.control_type!==e.ACTION||delete i.entity,this._config=i}static getStubConfig(t,e){const i=e.filter(t=>"switch"===t.split(".")[0]).sort();return{type:"custom:google-button-card",entity:i[Math.floor(Math.random()*i.length)],icon:"mdi:switch",height:97}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("google-button-card-editor")}updated(){requestAnimationFrame(()=>{const t=this.renderRoot.querySelector(".state-wrapper"),e=this.renderRoot.querySelector(".state");if(t&&e){e.scrollWidth>t.clientWidth?e.classList.add("scroll"):e.classList.remove("scroll")}})}_onClick(t){Kt(t.currentTarget,t),this._toggle()}_toggle(){var t,i;if(navigator.vibrate&&navigator.vibrate(50),!this._config||!this.hass)return;const n=this._config.entity,o=n?n.split(".")[0]:"",s=null!==(t=this._config.control_type)&&void 0!==t?t:"generic",a=["light","switch","fan","climate","input_boolean","cover","script"];if(null===(i=this._config.use_default_toggle)||void 0===i||i){return a.includes(o)&&s!=e.THERMOMETER&&s!=e.MEDIA_PLAYER?this.hass.callService("homeassistant","toggle",{entity_id:n}):"media_player"===o||s==e.MEDIA_PLAYER?void this._openMediaOverlay():Wt(this,"hass-more-info",{entityId:n})}if(this._config.tap_action&&"object"==typeof this._config.tap_action)Xt(this,this.hass,ie(n)?{}:{entity:n},this._config.tap_action);else{if("media_player"!==o&&s!=e.MEDIA_PLAYER)return Wt(this,"hass-more-info",{entityId:n});this._openMediaOverlay()}}_startPress(t){this._cancelPress(),this._moved=!1,"undefined"!=typeof TouchEvent&&t instanceof TouchEvent&&t.touches.length>0?(this._startX=t.touches[0].clientX,this._startY=t.touches[0].clientY):t instanceof MouseEvent&&(this._startX=t.clientX,this._startY=t.clientY),this._pressTimer=window.setTimeout(()=>{this._pressTimer=void 0,this._moved||this._handleHold()},500)}_handleMove(t){if(!this._startX||!this._startY||0===t.touches.length)return;const e=t.touches[0].clientX,i=t.touches[0].clientY,n=Math.abs(e-this._startX),o=Math.abs(i-this._startY);(n>10||o>10)&&(this._moved=!0,this._cancelPress())}_cancelPress(t){this._pressTimer&&(clearTimeout(this._pressTimer),this._pressTimer=void 0,!this._moved&&t instanceof MouseEvent&&this._onClick(t))}_handleHold(){var t,i,n;if(null===(t=navigator.vibrate)||void 0===t||t.call(navigator,50),!this._config||!this.hass)return;const o=this._config.entity,s=null!==(i=this._config.control_type)&&void 0!==i?i:"generic",a=null===(n=this._config.use_default_toggle)||void 0===n||n;if(!o)return;const r=o.split(".")[0],l=["light","switch","fan","climate","input_boolean","cover","script"].includes(r),c=s===e.MEDIA_PLAYER;if(a)l||!c?Wt(this,"hass-more-info",{entityId:o}):this.hass.callService("homeassistant","toggle",{entity_id:o});else if(this._config.hold_action&&"object"==typeof this._config.hold_action)return void Xt(this,this.hass,{entity:o},this._config.hold_action)}_openMediaOverlay(){const t=document.createElement("google-media-overlay");t.hass=this.hass,t.entity=this._config.entity;const e=new MutationObserver(()=>{t&&(t.hass=this.hass,t.requestUpdate())});e.observe(this,{attributes:!0,childList:!1,subtree:!1}),t.addEventListener("close-overlay",()=>{e.disconnect(),t.remove()}),t.style.position="fixed",t.style.inset="0",t.style.zIndex="9999",document.body.appendChild(t)}render(){var t,i,o,a,r;if(!this._config||!this.hass)return K``;const l=this.hass.states[this._config.entity];if(this._config.control_type!=e.APP_VERSION&&this._config.control_type!=e.ACTION&&!l)return K`<ha-card
          ><div class="warning">${Ut("common.no_entity")}</div></ha-card
        >`;let c,d=!1,h=null!==(t=this._config.name)&&void 0!==t?t:"",u=null!==(i=this._config.icon)&&void 0!==i?i:"",g=!1,p=n.NONE;const f=null===(o=this._config.use_default_text)||void 0===o||o;let m=!1;this._config.control_type!=e.APP_VERSION&&this._config.control_type!=e.ACTION&&(d=Jt(l.state),h=ce(this._config,this.hass),u=re(l,this._config,this.hass),g=te(l.state,this._config.control_type),p=s(l.attributes),m=se(l.attributes.hvac_modes));const _=(null===(r=null===(a=this.hass)||void 0===a?void 0:a.themes)||void 0===r?void 0:r.darkMode)?"dark":"light";f?c=this._config.control_type!=e.ACTION?le(l,this._config.control_type,g,this._config.fix_temperature,p==n.MOTION):"":(c=d?this._config.text_on:this._config.text_off,te(l.state)&&(c=Ut("common.offline")));const v=ie(l)?null:l.entity_id.split(".")[0],b=this._config.control_type==e.GENERIC&&"button"==v&&(this._config.use_default_text||ie(this._config.use_default_text));return this.setColorCard(this._config.control_type,_,g,d,m),K`
      <ha-card
        class="google-button ${d?"on":"off"}"
        @mousedown=${this._startPress}
        @touchstart=${this._startPress}
        @mouseup=${this._cancelPress}
        @mouseleave=${this._cancelPress}
        @touchend=${this._cancelPress}
        @touchcancel=${this._cancelPress}
        @touchmove=${this._handleMove}
        style="${g||this._config.control_type==e.THERMOMETER||this._config.control_type==e.MEDIA_PLAYER?"padding: 12px 35px 12px 12px":"padding: 12px 12px"}"
      >
        <div class="content">
          <ha-icon .icon=${u} class="icon"></ha-icon>
          <div class="text">
            <div class="name ellipsis">${h}</div>
            ${p==n.MEASUREMENT||this._config.control_type==e.SCENE&&f||this._config.control_type==e.MEDIA_PLAYER&&!d||this._config.control_type==e.ACTION||b?K``:K`<div class="state-wrapper">
                  <div class="state">${c}</div>
                </div>`}
          </div>
        </div>
        ${g?K`<ha-icon
              id="icon_offline"
              icon="m3rf:warning"
              style="position: absolute; right: 13px; top: 50%; transform: translateY(-50%); color: var(--bsc-icon-color); --mdc-icon-size: 20px;"
              title="Offline"
            ></ha-icon>`:this._config.control_type==e.THERMOMETER||this._config.control_type==e.MEDIA_PLAYER||this._config.control_type==e.ACTION||this._config.control_type==e.STATE?K`<ha-icon
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
              ></ha-icon>`:K``}
      </ha-card>
    `}setColorCard(t,e,i,n,o){let s="",a="",r="",l="";i?"light"===e?(s=this.color.light.offline.button.title,a=this.color.light.offline.button.icon,r=this.color.light.offline.button.percentage,l=this.color.light.offline.button.background):(s=this.color.dark.offline.button.title,a=this.color.dark.offline.button.icon,r=this.color.dark.offline.button.percentage,l=this.color.dark.offline.button.background):n?"dark"===e?"thermometer"===t&&this._config.use_material_color?o?(s=this.color.dark.on.climate.material_dry.title,a=this.color.dark.on.climate.material_dry.icon,r=this.color.dark.on.climate.material_dry.subtitle,l=this.color.dark.on.climate.material_dry.background):(s=this.color.dark.on.climate.material.title,a=this.color.dark.on.climate.material.icon,r=this.color.dark.on.climate.material.subtitle,l=this.color.dark.on.climate.material.background):(s=this.color.dark.on.button.title,a=this.color.dark.on.button.icon,r=this.color.dark.on.button.percentage,l=this.color.dark.on.button.background):"thermometer"===t&&this._config.use_material_color?o?(s=this.color.light.on.climate.material_dry.title,a=this.color.light.on.climate.material_dry.icon,r=this.color.light.on.climate.material_dry.subtitle,l=this.color.light.on.climate.material_dry.background):(s=this.color.light.on.climate.material.title,a=this.color.light.on.climate.material.icon,r=this.color.light.on.climate.material.subtitle,l=this.color.light.on.climate.material.background):(s=this.color.light.on.button.title,a=this.color.light.on.button.icon,r=this.color.light.on.button.percentage,l=this.color.light.on.button.background):"dark"===e?(s=this.color.dark.off.button.title,a=this.color.dark.off.button.icon,r=this.color.dark.off.button.percentage,l=this.color.dark.off.button.background):(s=this.color.light.off.button.title,a=this.color.light.off.button.icon,r=this.color.light.off.button.percentage,l=this.color.light.off.button.background),this._setStyleProperty("--bsc-name-color",s),this._setStyleProperty("--bsc-icon-color",a),this._setStyleProperty("--bsc-percentage-color",r),this._setStyleProperty("--bsc-background",l),this._setStyleProperty("--bsc-height",this._config.height||97,t=>`${t}px`),this._setStyleProperty("--bsc-border-radius",this._config.border_radius)}_setStyleProperty(t,e,i=t=>t){null!=e&&""!==e&&this.style.setProperty(t,i(e))}};
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function he(t){return null==t}de.styles=p`
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

    .ellipsis {
      overflow: hidden;
      text-overflow: ellipsis;
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
  `,l([bt({attribute:!1})],de.prototype,"hass",void 0),l([yt()],de.prototype,"_config",void 0),de=l([mt("google-button-card")],de);var ue={isNothing:he,isObject:function(t){return"object"==typeof t&&null!==t},toArray:function(t){return Array.isArray(t)?t:he(t)?[]:[t]},repeat:function(t,e){var i,n="";for(i=0;i<e;i+=1)n+=t;return n},isNegativeZero:function(t){return 0===t&&Number.NEGATIVE_INFINITY===1/t},extend:function(t,e){var i,n,o,s;if(e)for(i=0,n=(s=Object.keys(e)).length;i<n;i+=1)t[o=s[i]]=e[o];return t}};function ge(t,e){var i="",n=t.reason||"(unknown reason)";return t.mark?(t.mark.name&&(i+='in "'+t.mark.name+'" '),i+="("+(t.mark.line+1)+":"+(t.mark.column+1)+")",!e&&t.mark.snippet&&(i+="\n\n"+t.mark.snippet),n+" "+i):n}function pe(t,e){Error.call(this),this.name="YAMLException",this.reason=t,this.mark=e,this.message=ge(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack||""}pe.prototype=Object.create(Error.prototype),pe.prototype.constructor=pe,pe.prototype.toString=function(t){return this.name+": "+ge(this,t)};var fe=pe;function me(t,e,i,n,o){var s="",a="",r=Math.floor(o/2)-1;return n-e>r&&(e=n-r+(s=" ... ").length),i-n>r&&(i=n+r-(a=" ...").length),{str:s+t.slice(e,i).replace(/\t/g,"→")+a,pos:n-e+s.length}}function _e(t,e){return ue.repeat(" ",e-t.length)+t}var ve=function(t,e){if(e=Object.create(e||null),!t.buffer)return null;e.maxLength||(e.maxLength=79),"number"!=typeof e.indent&&(e.indent=1),"number"!=typeof e.linesBefore&&(e.linesBefore=3),"number"!=typeof e.linesAfter&&(e.linesAfter=2);for(var i,n=/\r?\n|\r|\0/g,o=[0],s=[],a=-1;i=n.exec(t.buffer);)s.push(i.index),o.push(i.index+i[0].length),t.position<=i.index&&a<0&&(a=o.length-2);a<0&&(a=o.length-1);var r,l,c="",d=Math.min(t.line+e.linesAfter,s.length).toString().length,h=e.maxLength-(e.indent+d+3);for(r=1;r<=e.linesBefore&&!(a-r<0);r++)l=me(t.buffer,o[a-r],s[a-r],t.position-(o[a]-o[a-r]),h),c=ue.repeat(" ",e.indent)+_e((t.line-r+1).toString(),d)+" | "+l.str+"\n"+c;for(l=me(t.buffer,o[a],s[a],t.position,h),c+=ue.repeat(" ",e.indent)+_e((t.line+1).toString(),d)+" | "+l.str+"\n",c+=ue.repeat("-",e.indent+d+3+l.pos)+"^\n",r=1;r<=e.linesAfter&&!(a+r>=s.length);r++)l=me(t.buffer,o[a+r],s[a+r],t.position-(o[a]-o[a+r]),h),c+=ue.repeat(" ",e.indent)+_e((t.line+r+1).toString(),d)+" | "+l.str+"\n";return c.replace(/\n$/,"")},be=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],ye=["scalar","sequence","mapping"];var we=function(t,e){if(e=e||{},Object.keys(e).forEach(function(e){if(-1===be.indexOf(e))throw new fe('Unknown option "'+e+'" is met in definition of "'+t+'" YAML type.')}),this.options=e,this.tag=t,this.kind=e.kind||null,this.resolve=e.resolve||function(){return!0},this.construct=e.construct||function(t){return t},this.instanceOf=e.instanceOf||null,this.predicate=e.predicate||null,this.represent=e.represent||null,this.representName=e.representName||null,this.defaultStyle=e.defaultStyle||null,this.multi=e.multi||!1,this.styleAliases=function(t){var e={};return null!==t&&Object.keys(t).forEach(function(i){t[i].forEach(function(t){e[String(t)]=i})}),e}(e.styleAliases||null),-1===ye.indexOf(this.kind))throw new fe('Unknown kind "'+this.kind+'" is specified for "'+t+'" YAML type.')};function xe(t,e){var i=[];return t[e].forEach(function(t){var e=i.length;i.forEach(function(i,n){i.tag===t.tag&&i.kind===t.kind&&i.multi===t.multi&&(e=n)}),i[e]=t}),i}function ke(t){return this.extend(t)}ke.prototype.extend=function(t){var e=[],i=[];if(t instanceof we)i.push(t);else if(Array.isArray(t))i=i.concat(t);else{if(!t||!Array.isArray(t.implicit)&&!Array.isArray(t.explicit))throw new fe("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");t.implicit&&(e=e.concat(t.implicit)),t.explicit&&(i=i.concat(t.explicit))}e.forEach(function(t){if(!(t instanceof we))throw new fe("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(t.loadKind&&"scalar"!==t.loadKind)throw new fe("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(t.multi)throw new fe("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),i.forEach(function(t){if(!(t instanceof we))throw new fe("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var n=Object.create(ke.prototype);return n.implicit=(this.implicit||[]).concat(e),n.explicit=(this.explicit||[]).concat(i),n.compiledImplicit=xe(n,"implicit"),n.compiledExplicit=xe(n,"explicit"),n.compiledTypeMap=function(){var t,e,i={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function n(t){t.multi?(i.multi[t.kind].push(t),i.multi.fallback.push(t)):i[t.kind][t.tag]=i.fallback[t.tag]=t}for(t=0,e=arguments.length;t<e;t+=1)arguments[t].forEach(n);return i}(n.compiledImplicit,n.compiledExplicit),n};var $e=ke,Ae=new we("tag:yaml.org,2002:str",{kind:"scalar",construct:function(t){return null!==t?t:""}}),Ee=new we("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(t){return null!==t?t:[]}}),Ce=new we("tag:yaml.org,2002:map",{kind:"mapping",construct:function(t){return null!==t?t:{}}}),Oe=new $e({explicit:[Ae,Ee,Ce]});var Te=new we("tag:yaml.org,2002:null",{kind:"scalar",resolve:function(t){if(null===t)return!0;var e=t.length;return 1===e&&"~"===t||4===e&&("null"===t||"Null"===t||"NULL"===t)},construct:function(){return null},predicate:function(t){return null===t},represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});var Se=new we("tag:yaml.org,2002:bool",{kind:"scalar",resolve:function(t){if(null===t)return!1;var e=t.length;return 4===e&&("true"===t||"True"===t||"TRUE"===t)||5===e&&("false"===t||"False"===t||"FALSE"===t)},construct:function(t){return"true"===t||"True"===t||"TRUE"===t},predicate:function(t){return"[object Boolean]"===Object.prototype.toString.call(t)},represent:{lowercase:function(t){return t?"true":"false"},uppercase:function(t){return t?"TRUE":"FALSE"},camelcase:function(t){return t?"True":"False"}},defaultStyle:"lowercase"});function Pe(t){return 48<=t&&t<=57||65<=t&&t<=70||97<=t&&t<=102}function Ie(t){return 48<=t&&t<=55}function Me(t){return 48<=t&&t<=57}var Ne=new we("tag:yaml.org,2002:int",{kind:"scalar",resolve:function(t){if(null===t)return!1;var e,i=t.length,n=0,o=!1;if(!i)return!1;if("-"!==(e=t[n])&&"+"!==e||(e=t[++n]),"0"===e){if(n+1===i)return!0;if("b"===(e=t[++n])){for(n++;n<i;n++)if("_"!==(e=t[n])){if("0"!==e&&"1"!==e)return!1;o=!0}return o&&"_"!==e}if("x"===e){for(n++;n<i;n++)if("_"!==(e=t[n])){if(!Pe(t.charCodeAt(n)))return!1;o=!0}return o&&"_"!==e}if("o"===e){for(n++;n<i;n++)if("_"!==(e=t[n])){if(!Ie(t.charCodeAt(n)))return!1;o=!0}return o&&"_"!==e}}if("_"===e)return!1;for(;n<i;n++)if("_"!==(e=t[n])){if(!Me(t.charCodeAt(n)))return!1;o=!0}return!(!o||"_"===e)},construct:function(t){var e,i=t,n=1;if(-1!==i.indexOf("_")&&(i=i.replace(/_/g,"")),"-"!==(e=i[0])&&"+"!==e||("-"===e&&(n=-1),e=(i=i.slice(1))[0]),"0"===i)return 0;if("0"===e){if("b"===i[1])return n*parseInt(i.slice(2),2);if("x"===i[1])return n*parseInt(i.slice(2),16);if("o"===i[1])return n*parseInt(i.slice(2),8)}return n*parseInt(i,10)},predicate:function(t){return"[object Number]"===Object.prototype.toString.call(t)&&t%1==0&&!ue.isNegativeZero(t)},represent:{binary:function(t){return t>=0?"0b"+t.toString(2):"-0b"+t.toString(2).slice(1)},octal:function(t){return t>=0?"0o"+t.toString(8):"-0o"+t.toString(8).slice(1)},decimal:function(t){return t.toString(10)},hexadecimal:function(t){return t>=0?"0x"+t.toString(16).toUpperCase():"-0x"+t.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),je=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");var Le=/^[-+]?[0-9]+e/;var Fe=new we("tag:yaml.org,2002:float",{kind:"scalar",resolve:function(t){return null!==t&&!(!je.test(t)||"_"===t[t.length-1])},construct:function(t){var e,i;return i="-"===(e=t.replace(/_/g,"").toLowerCase())[0]?-1:1,"+-".indexOf(e[0])>=0&&(e=e.slice(1)),".inf"===e?1===i?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:".nan"===e?NaN:i*parseFloat(e,10)},predicate:function(t){return"[object Number]"===Object.prototype.toString.call(t)&&(t%1!=0||ue.isNegativeZero(t))},represent:function(t,e){var i;if(isNaN(t))switch(e){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===t)switch(e){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===t)switch(e){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(ue.isNegativeZero(t))return"-0.0";return i=t.toString(10),Le.test(i)?i.replace("e",".e"):i},defaultStyle:"lowercase"}),Re=Oe.extend({implicit:[Te,Se,Ne,Fe]}),ze=Re,Ue=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Ve=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");var De=new we("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:function(t){return null!==t&&(null!==Ue.exec(t)||null!==Ve.exec(t))},construct:function(t){var e,i,n,o,s,a,r,l,c=0,d=null;if(null===(e=Ue.exec(t))&&(e=Ve.exec(t)),null===e)throw new Error("Date resolve error");if(i=+e[1],n=+e[2]-1,o=+e[3],!e[4])return new Date(Date.UTC(i,n,o));if(s=+e[4],a=+e[5],r=+e[6],e[7]){for(c=e[7].slice(0,3);c.length<3;)c+="0";c=+c}return e[9]&&(d=6e4*(60*+e[10]+ +(e[11]||0)),"-"===e[9]&&(d=-d)),l=new Date(Date.UTC(i,n,o,s,a,r,c)),d&&l.setTime(l.getTime()-d),l},instanceOf:Date,represent:function(t){return t.toISOString()}});var He=new we("tag:yaml.org,2002:merge",{kind:"scalar",resolve:function(t){return"<<"===t||null===t}}),Ye="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";var Ge=new we("tag:yaml.org,2002:binary",{kind:"scalar",resolve:function(t){if(null===t)return!1;var e,i,n=0,o=t.length,s=Ye;for(i=0;i<o;i++)if(!((e=s.indexOf(t.charAt(i)))>64)){if(e<0)return!1;n+=6}return n%8==0},construct:function(t){var e,i,n=t.replace(/[\r\n=]/g,""),o=n.length,s=Ye,a=0,r=[];for(e=0;e<o;e++)e%4==0&&e&&(r.push(a>>16&255),r.push(a>>8&255),r.push(255&a)),a=a<<6|s.indexOf(n.charAt(e));return 0===(i=o%4*6)?(r.push(a>>16&255),r.push(a>>8&255),r.push(255&a)):18===i?(r.push(a>>10&255),r.push(a>>2&255)):12===i&&r.push(a>>4&255),new Uint8Array(r)},predicate:function(t){return"[object Uint8Array]"===Object.prototype.toString.call(t)},represent:function(t){var e,i,n="",o=0,s=t.length,a=Ye;for(e=0;e<s;e++)e%3==0&&e&&(n+=a[o>>18&63],n+=a[o>>12&63],n+=a[o>>6&63],n+=a[63&o]),o=(o<<8)+t[e];return 0===(i=s%3)?(n+=a[o>>18&63],n+=a[o>>12&63],n+=a[o>>6&63],n+=a[63&o]):2===i?(n+=a[o>>10&63],n+=a[o>>4&63],n+=a[o<<2&63],n+=a[64]):1===i&&(n+=a[o>>2&63],n+=a[o<<4&63],n+=a[64],n+=a[64]),n}}),We=Object.prototype.hasOwnProperty,qe=Object.prototype.toString;var Be=new we("tag:yaml.org,2002:omap",{kind:"sequence",resolve:function(t){if(null===t)return!0;var e,i,n,o,s,a=[],r=t;for(e=0,i=r.length;e<i;e+=1){if(n=r[e],s=!1,"[object Object]"!==qe.call(n))return!1;for(o in n)if(We.call(n,o)){if(s)return!1;s=!0}if(!s)return!1;if(-1!==a.indexOf(o))return!1;a.push(o)}return!0},construct:function(t){return null!==t?t:[]}}),Xe=Object.prototype.toString;var Ke=new we("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:function(t){if(null===t)return!0;var e,i,n,o,s,a=t;for(s=new Array(a.length),e=0,i=a.length;e<i;e+=1){if(n=a[e],"[object Object]"!==Xe.call(n))return!1;if(1!==(o=Object.keys(n)).length)return!1;s[e]=[o[0],n[o[0]]]}return!0},construct:function(t){if(null===t)return[];var e,i,n,o,s,a=t;for(s=new Array(a.length),e=0,i=a.length;e<i;e+=1)n=a[e],o=Object.keys(n),s[e]=[o[0],n[o[0]]];return s}}),Ze=Object.prototype.hasOwnProperty;var Je=new we("tag:yaml.org,2002:set",{kind:"mapping",resolve:function(t){if(null===t)return!0;var e,i=t;for(e in i)if(Ze.call(i,e)&&null!==i[e])return!1;return!0},construct:function(t){return null!==t?t:{}}}),Qe=ze.extend({implicit:[De,He],explicit:[Ge,Be,Ke,Je]}),ti=Object.prototype.hasOwnProperty,ei=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,ii=/[\x85\u2028\u2029]/,ni=/[,\[\]\{\}]/,oi=/^(?:!|!!|![a-z\-]+!)$/i,si=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function ai(t){return Object.prototype.toString.call(t)}function ri(t){return 10===t||13===t}function li(t){return 9===t||32===t}function ci(t){return 9===t||32===t||10===t||13===t}function di(t){return 44===t||91===t||93===t||123===t||125===t}function hi(t){var e;return 48<=t&&t<=57?t-48:97<=(e=32|t)&&e<=102?e-97+10:-1}function ui(t){return 120===t?2:117===t?4:85===t?8:0}function gi(t){return 48<=t&&t<=57?t-48:-1}function pi(t){return 48===t?"\0":97===t?"":98===t?"\b":116===t||9===t?"\t":110===t?"\n":118===t?"\v":102===t?"\f":114===t?"\r":101===t?"":32===t?" ":34===t?'"':47===t?"/":92===t?"\\":78===t?"":95===t?" ":76===t?"\u2028":80===t?"\u2029":""}function fi(t){return t<=65535?String.fromCharCode(t):String.fromCharCode(55296+(t-65536>>10),56320+(t-65536&1023))}for(var mi=new Array(256),_i=new Array(256),vi=0;vi<256;vi++)mi[vi]=pi(vi)?1:0,_i[vi]=pi(vi);function bi(t,e){this.input=t,this.filename=e.filename||null,this.schema=e.schema||Qe,this.onWarning=e.onWarning||null,this.legacy=e.legacy||!1,this.json=e.json||!1,this.listener=e.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=t.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function yi(t,e){var i={name:t.filename,buffer:t.input.slice(0,-1),position:t.position,line:t.line,column:t.position-t.lineStart};return i.snippet=ve(i),new fe(e,i)}function wi(t,e){throw yi(t,e)}function xi(t,e){t.onWarning&&t.onWarning.call(null,yi(t,e))}var ki={YAML:function(t,e,i){var n,o,s;null!==t.version&&wi(t,"duplication of %YAML directive"),1!==i.length&&wi(t,"YAML directive accepts exactly one argument"),null===(n=/^([0-9]+)\.([0-9]+)$/.exec(i[0]))&&wi(t,"ill-formed argument of the YAML directive"),o=parseInt(n[1],10),s=parseInt(n[2],10),1!==o&&wi(t,"unacceptable YAML version of the document"),t.version=i[0],t.checkLineBreaks=s<2,1!==s&&2!==s&&xi(t,"unsupported YAML version of the document")},TAG:function(t,e,i){var n,o;2!==i.length&&wi(t,"TAG directive accepts exactly two arguments"),n=i[0],o=i[1],oi.test(n)||wi(t,"ill-formed tag handle (first argument) of the TAG directive"),ti.call(t.tagMap,n)&&wi(t,'there is a previously declared suffix for "'+n+'" tag handle'),si.test(o)||wi(t,"ill-formed tag prefix (second argument) of the TAG directive");try{o=decodeURIComponent(o)}catch(e){wi(t,"tag prefix is malformed: "+o)}t.tagMap[n]=o}};function $i(t,e,i,n){var o,s,a,r;if(e<i){if(r=t.input.slice(e,i),n)for(o=0,s=r.length;o<s;o+=1)9===(a=r.charCodeAt(o))||32<=a&&a<=1114111||wi(t,"expected valid JSON character");else ei.test(r)&&wi(t,"the stream contains non-printable characters");t.result+=r}}function Ai(t,e,i,n){var o,s,a,r;for(ue.isObject(i)||wi(t,"cannot merge mappings; the provided source object is unacceptable"),a=0,r=(o=Object.keys(i)).length;a<r;a+=1)s=o[a],ti.call(e,s)||(e[s]=i[s],n[s]=!0)}function Ei(t,e,i,n,o,s,a,r,l){var c,d;if(Array.isArray(o))for(c=0,d=(o=Array.prototype.slice.call(o)).length;c<d;c+=1)Array.isArray(o[c])&&wi(t,"nested arrays are not supported inside keys"),"object"==typeof o&&"[object Object]"===ai(o[c])&&(o[c]="[object Object]");if("object"==typeof o&&"[object Object]"===ai(o)&&(o="[object Object]"),o=String(o),null===e&&(e={}),"tag:yaml.org,2002:merge"===n)if(Array.isArray(s))for(c=0,d=s.length;c<d;c+=1)Ai(t,e,s[c],i);else Ai(t,e,s,i);else t.json||ti.call(i,o)||!ti.call(e,o)||(t.line=a||t.line,t.lineStart=r||t.lineStart,t.position=l||t.position,wi(t,"duplicated mapping key")),"__proto__"===o?Object.defineProperty(e,o,{configurable:!0,enumerable:!0,writable:!0,value:s}):e[o]=s,delete i[o];return e}function Ci(t){var e;10===(e=t.input.charCodeAt(t.position))?t.position++:13===e?(t.position++,10===t.input.charCodeAt(t.position)&&t.position++):wi(t,"a line break is expected"),t.line+=1,t.lineStart=t.position,t.firstTabInLine=-1}function Oi(t,e,i){for(var n=0,o=t.input.charCodeAt(t.position);0!==o;){for(;li(o);)9===o&&-1===t.firstTabInLine&&(t.firstTabInLine=t.position),o=t.input.charCodeAt(++t.position);if(e&&35===o)do{o=t.input.charCodeAt(++t.position)}while(10!==o&&13!==o&&0!==o);if(!ri(o))break;for(Ci(t),o=t.input.charCodeAt(t.position),n++,t.lineIndent=0;32===o;)t.lineIndent++,o=t.input.charCodeAt(++t.position)}return-1!==i&&0!==n&&t.lineIndent<i&&xi(t,"deficient indentation"),n}function Ti(t){var e,i=t.position;return!(45!==(e=t.input.charCodeAt(i))&&46!==e||e!==t.input.charCodeAt(i+1)||e!==t.input.charCodeAt(i+2)||(i+=3,0!==(e=t.input.charCodeAt(i))&&!ci(e)))}function Si(t,e){1===e?t.result+=" ":e>1&&(t.result+=ue.repeat("\n",e-1))}function Pi(t,e){var i,n,o=t.tag,s=t.anchor,a=[],r=!1;if(-1!==t.firstTabInLine)return!1;for(null!==t.anchor&&(t.anchorMap[t.anchor]=a),n=t.input.charCodeAt(t.position);0!==n&&(-1!==t.firstTabInLine&&(t.position=t.firstTabInLine,wi(t,"tab characters must not be used in indentation")),45===n)&&ci(t.input.charCodeAt(t.position+1));)if(r=!0,t.position++,Oi(t,!0,-1)&&t.lineIndent<=e)a.push(null),n=t.input.charCodeAt(t.position);else if(i=t.line,Ni(t,e,3,!1,!0),a.push(t.result),Oi(t,!0,-1),n=t.input.charCodeAt(t.position),(t.line===i||t.lineIndent>e)&&0!==n)wi(t,"bad indentation of a sequence entry");else if(t.lineIndent<e)break;return!!r&&(t.tag=o,t.anchor=s,t.kind="sequence",t.result=a,!0)}function Ii(t){var e,i,n,o,s=!1,a=!1;if(33!==(o=t.input.charCodeAt(t.position)))return!1;if(null!==t.tag&&wi(t,"duplication of a tag property"),60===(o=t.input.charCodeAt(++t.position))?(s=!0,o=t.input.charCodeAt(++t.position)):33===o?(a=!0,i="!!",o=t.input.charCodeAt(++t.position)):i="!",e=t.position,s){do{o=t.input.charCodeAt(++t.position)}while(0!==o&&62!==o);t.position<t.length?(n=t.input.slice(e,t.position),o=t.input.charCodeAt(++t.position)):wi(t,"unexpected end of the stream within a verbatim tag")}else{for(;0!==o&&!ci(o);)33===o&&(a?wi(t,"tag suffix cannot contain exclamation marks"):(i=t.input.slice(e-1,t.position+1),oi.test(i)||wi(t,"named tag handle cannot contain such characters"),a=!0,e=t.position+1)),o=t.input.charCodeAt(++t.position);n=t.input.slice(e,t.position),ni.test(n)&&wi(t,"tag suffix cannot contain flow indicator characters")}n&&!si.test(n)&&wi(t,"tag name cannot contain such characters: "+n);try{n=decodeURIComponent(n)}catch(e){wi(t,"tag name is malformed: "+n)}return s?t.tag=n:ti.call(t.tagMap,i)?t.tag=t.tagMap[i]+n:"!"===i?t.tag="!"+n:"!!"===i?t.tag="tag:yaml.org,2002:"+n:wi(t,'undeclared tag handle "'+i+'"'),!0}function Mi(t){var e,i;if(38!==(i=t.input.charCodeAt(t.position)))return!1;for(null!==t.anchor&&wi(t,"duplication of an anchor property"),i=t.input.charCodeAt(++t.position),e=t.position;0!==i&&!ci(i)&&!di(i);)i=t.input.charCodeAt(++t.position);return t.position===e&&wi(t,"name of an anchor node must contain at least one character"),t.anchor=t.input.slice(e,t.position),!0}function Ni(t,e,i,n,o){var s,a,r,l,c,d,h,u,g,p=1,f=!1,m=!1;if(null!==t.listener&&t.listener("open",t),t.tag=null,t.anchor=null,t.kind=null,t.result=null,s=a=r=4===i||3===i,n&&Oi(t,!0,-1)&&(f=!0,t.lineIndent>e?p=1:t.lineIndent===e?p=0:t.lineIndent<e&&(p=-1)),1===p)for(;Ii(t)||Mi(t);)Oi(t,!0,-1)?(f=!0,r=s,t.lineIndent>e?p=1:t.lineIndent===e?p=0:t.lineIndent<e&&(p=-1)):r=!1;if(r&&(r=f||o),1!==p&&4!==i||(u=1===i||2===i?e:e+1,g=t.position-t.lineStart,1===p?r&&(Pi(t,g)||function(t,e,i){var n,o,s,a,r,l,c,d=t.tag,h=t.anchor,u={},g=Object.create(null),p=null,f=null,m=null,_=!1,v=!1;if(-1!==t.firstTabInLine)return!1;for(null!==t.anchor&&(t.anchorMap[t.anchor]=u),c=t.input.charCodeAt(t.position);0!==c;){if(_||-1===t.firstTabInLine||(t.position=t.firstTabInLine,wi(t,"tab characters must not be used in indentation")),n=t.input.charCodeAt(t.position+1),s=t.line,63!==c&&58!==c||!ci(n)){if(a=t.line,r=t.lineStart,l=t.position,!Ni(t,i,2,!1,!0))break;if(t.line===s){for(c=t.input.charCodeAt(t.position);li(c);)c=t.input.charCodeAt(++t.position);if(58===c)ci(c=t.input.charCodeAt(++t.position))||wi(t,"a whitespace character is expected after the key-value separator within a block mapping"),_&&(Ei(t,u,g,p,f,null,a,r,l),p=f=m=null),v=!0,_=!1,o=!1,p=t.tag,f=t.result;else{if(!v)return t.tag=d,t.anchor=h,!0;wi(t,"can not read an implicit mapping pair; a colon is missed")}}else{if(!v)return t.tag=d,t.anchor=h,!0;wi(t,"can not read a block mapping entry; a multiline key may not be an implicit key")}}else 63===c?(_&&(Ei(t,u,g,p,f,null,a,r,l),p=f=m=null),v=!0,_=!0,o=!0):_?(_=!1,o=!0):wi(t,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),t.position+=1,c=n;if((t.line===s||t.lineIndent>e)&&(_&&(a=t.line,r=t.lineStart,l=t.position),Ni(t,e,4,!0,o)&&(_?f=t.result:m=t.result),_||(Ei(t,u,g,p,f,m,a,r,l),p=f=m=null),Oi(t,!0,-1),c=t.input.charCodeAt(t.position)),(t.line===s||t.lineIndent>e)&&0!==c)wi(t,"bad indentation of a mapping entry");else if(t.lineIndent<e)break}return _&&Ei(t,u,g,p,f,null,a,r,l),v&&(t.tag=d,t.anchor=h,t.kind="mapping",t.result=u),v}(t,g,u))||function(t,e){var i,n,o,s,a,r,l,c,d,h,u,g,p=!0,f=t.tag,m=t.anchor,_=Object.create(null);if(91===(g=t.input.charCodeAt(t.position)))a=93,c=!1,s=[];else{if(123!==g)return!1;a=125,c=!0,s={}}for(null!==t.anchor&&(t.anchorMap[t.anchor]=s),g=t.input.charCodeAt(++t.position);0!==g;){if(Oi(t,!0,e),(g=t.input.charCodeAt(t.position))===a)return t.position++,t.tag=f,t.anchor=m,t.kind=c?"mapping":"sequence",t.result=s,!0;p?44===g&&wi(t,"expected the node content, but found ','"):wi(t,"missed comma between flow collection entries"),u=null,r=l=!1,63===g&&ci(t.input.charCodeAt(t.position+1))&&(r=l=!0,t.position++,Oi(t,!0,e)),i=t.line,n=t.lineStart,o=t.position,Ni(t,e,1,!1,!0),h=t.tag,d=t.result,Oi(t,!0,e),g=t.input.charCodeAt(t.position),!l&&t.line!==i||58!==g||(r=!0,g=t.input.charCodeAt(++t.position),Oi(t,!0,e),Ni(t,e,1,!1,!0),u=t.result),c?Ei(t,s,_,h,d,u,i,n,o):r?s.push(Ei(t,null,_,h,d,u,i,n,o)):s.push(d),Oi(t,!0,e),44===(g=t.input.charCodeAt(t.position))?(p=!0,g=t.input.charCodeAt(++t.position)):p=!1}wi(t,"unexpected end of the stream within a flow collection")}(t,u)?m=!0:(a&&function(t,e){var i,n,o,s,a=1,r=!1,l=!1,c=e,d=0,h=!1;if(124===(s=t.input.charCodeAt(t.position)))n=!1;else{if(62!==s)return!1;n=!0}for(t.kind="scalar",t.result="";0!==s;)if(43===(s=t.input.charCodeAt(++t.position))||45===s)1===a?a=43===s?3:2:wi(t,"repeat of a chomping mode identifier");else{if(!((o=gi(s))>=0))break;0===o?wi(t,"bad explicit indentation width of a block scalar; it cannot be less than one"):l?wi(t,"repeat of an indentation width identifier"):(c=e+o-1,l=!0)}if(li(s)){do{s=t.input.charCodeAt(++t.position)}while(li(s));if(35===s)do{s=t.input.charCodeAt(++t.position)}while(!ri(s)&&0!==s)}for(;0!==s;){for(Ci(t),t.lineIndent=0,s=t.input.charCodeAt(t.position);(!l||t.lineIndent<c)&&32===s;)t.lineIndent++,s=t.input.charCodeAt(++t.position);if(!l&&t.lineIndent>c&&(c=t.lineIndent),ri(s))d++;else{if(t.lineIndent<c){3===a?t.result+=ue.repeat("\n",r?1+d:d):1===a&&r&&(t.result+="\n");break}for(n?li(s)?(h=!0,t.result+=ue.repeat("\n",r?1+d:d)):h?(h=!1,t.result+=ue.repeat("\n",d+1)):0===d?r&&(t.result+=" "):t.result+=ue.repeat("\n",d):t.result+=ue.repeat("\n",r?1+d:d),r=!0,l=!0,d=0,i=t.position;!ri(s)&&0!==s;)s=t.input.charCodeAt(++t.position);$i(t,i,t.position,!1)}}return!0}(t,u)||function(t,e){var i,n,o;if(39!==(i=t.input.charCodeAt(t.position)))return!1;for(t.kind="scalar",t.result="",t.position++,n=o=t.position;0!==(i=t.input.charCodeAt(t.position));)if(39===i){if($i(t,n,t.position,!0),39!==(i=t.input.charCodeAt(++t.position)))return!0;n=t.position,t.position++,o=t.position}else ri(i)?($i(t,n,o,!0),Si(t,Oi(t,!1,e)),n=o=t.position):t.position===t.lineStart&&Ti(t)?wi(t,"unexpected end of the document within a single quoted scalar"):(t.position++,o=t.position);wi(t,"unexpected end of the stream within a single quoted scalar")}(t,u)||function(t,e){var i,n,o,s,a,r;if(34!==(r=t.input.charCodeAt(t.position)))return!1;for(t.kind="scalar",t.result="",t.position++,i=n=t.position;0!==(r=t.input.charCodeAt(t.position));){if(34===r)return $i(t,i,t.position,!0),t.position++,!0;if(92===r){if($i(t,i,t.position,!0),ri(r=t.input.charCodeAt(++t.position)))Oi(t,!1,e);else if(r<256&&mi[r])t.result+=_i[r],t.position++;else if((a=ui(r))>0){for(o=a,s=0;o>0;o--)(a=hi(r=t.input.charCodeAt(++t.position)))>=0?s=(s<<4)+a:wi(t,"expected hexadecimal character");t.result+=fi(s),t.position++}else wi(t,"unknown escape sequence");i=n=t.position}else ri(r)?($i(t,i,n,!0),Si(t,Oi(t,!1,e)),i=n=t.position):t.position===t.lineStart&&Ti(t)?wi(t,"unexpected end of the document within a double quoted scalar"):(t.position++,n=t.position)}wi(t,"unexpected end of the stream within a double quoted scalar")}(t,u)?m=!0:!function(t){var e,i,n;if(42!==(n=t.input.charCodeAt(t.position)))return!1;for(n=t.input.charCodeAt(++t.position),e=t.position;0!==n&&!ci(n)&&!di(n);)n=t.input.charCodeAt(++t.position);return t.position===e&&wi(t,"name of an alias node must contain at least one character"),i=t.input.slice(e,t.position),ti.call(t.anchorMap,i)||wi(t,'unidentified alias "'+i+'"'),t.result=t.anchorMap[i],Oi(t,!0,-1),!0}(t)?function(t,e,i){var n,o,s,a,r,l,c,d,h=t.kind,u=t.result;if(ci(d=t.input.charCodeAt(t.position))||di(d)||35===d||38===d||42===d||33===d||124===d||62===d||39===d||34===d||37===d||64===d||96===d)return!1;if((63===d||45===d)&&(ci(n=t.input.charCodeAt(t.position+1))||i&&di(n)))return!1;for(t.kind="scalar",t.result="",o=s=t.position,a=!1;0!==d;){if(58===d){if(ci(n=t.input.charCodeAt(t.position+1))||i&&di(n))break}else if(35===d){if(ci(t.input.charCodeAt(t.position-1)))break}else{if(t.position===t.lineStart&&Ti(t)||i&&di(d))break;if(ri(d)){if(r=t.line,l=t.lineStart,c=t.lineIndent,Oi(t,!1,-1),t.lineIndent>=e){a=!0,d=t.input.charCodeAt(t.position);continue}t.position=s,t.line=r,t.lineStart=l,t.lineIndent=c;break}}a&&($i(t,o,s,!1),Si(t,t.line-r),o=s=t.position,a=!1),li(d)||(s=t.position+1),d=t.input.charCodeAt(++t.position)}return $i(t,o,s,!1),!!t.result||(t.kind=h,t.result=u,!1)}(t,u,1===i)&&(m=!0,null===t.tag&&(t.tag="?")):(m=!0,null===t.tag&&null===t.anchor||wi(t,"alias node should not have any properties")),null!==t.anchor&&(t.anchorMap[t.anchor]=t.result)):0===p&&(m=r&&Pi(t,g))),null===t.tag)null!==t.anchor&&(t.anchorMap[t.anchor]=t.result);else if("?"===t.tag){for(null!==t.result&&"scalar"!==t.kind&&wi(t,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+t.kind+'"'),l=0,c=t.implicitTypes.length;l<c;l+=1)if((h=t.implicitTypes[l]).resolve(t.result)){t.result=h.construct(t.result),t.tag=h.tag,null!==t.anchor&&(t.anchorMap[t.anchor]=t.result);break}}else if("!"!==t.tag){if(ti.call(t.typeMap[t.kind||"fallback"],t.tag))h=t.typeMap[t.kind||"fallback"][t.tag];else for(h=null,l=0,c=(d=t.typeMap.multi[t.kind||"fallback"]).length;l<c;l+=1)if(t.tag.slice(0,d[l].tag.length)===d[l].tag){h=d[l];break}h||wi(t,"unknown tag !<"+t.tag+">"),null!==t.result&&h.kind!==t.kind&&wi(t,"unacceptable node kind for !<"+t.tag+'> tag; it should be "'+h.kind+'", not "'+t.kind+'"'),h.resolve(t.result,t.tag)?(t.result=h.construct(t.result,t.tag),null!==t.anchor&&(t.anchorMap[t.anchor]=t.result)):wi(t,"cannot resolve a node with !<"+t.tag+"> explicit tag")}return null!==t.listener&&t.listener("close",t),null!==t.tag||null!==t.anchor||m}function ji(t){var e,i,n,o,s=t.position,a=!1;for(t.version=null,t.checkLineBreaks=t.legacy,t.tagMap=Object.create(null),t.anchorMap=Object.create(null);0!==(o=t.input.charCodeAt(t.position))&&(Oi(t,!0,-1),o=t.input.charCodeAt(t.position),!(t.lineIndent>0||37!==o));){for(a=!0,o=t.input.charCodeAt(++t.position),e=t.position;0!==o&&!ci(o);)o=t.input.charCodeAt(++t.position);for(n=[],(i=t.input.slice(e,t.position)).length<1&&wi(t,"directive name must not be less than one character in length");0!==o;){for(;li(o);)o=t.input.charCodeAt(++t.position);if(35===o){do{o=t.input.charCodeAt(++t.position)}while(0!==o&&!ri(o));break}if(ri(o))break;for(e=t.position;0!==o&&!ci(o);)o=t.input.charCodeAt(++t.position);n.push(t.input.slice(e,t.position))}0!==o&&Ci(t),ti.call(ki,i)?ki[i](t,i,n):xi(t,'unknown document directive "'+i+'"')}Oi(t,!0,-1),0===t.lineIndent&&45===t.input.charCodeAt(t.position)&&45===t.input.charCodeAt(t.position+1)&&45===t.input.charCodeAt(t.position+2)?(t.position+=3,Oi(t,!0,-1)):a&&wi(t,"directives end mark is expected"),Ni(t,t.lineIndent-1,4,!1,!0),Oi(t,!0,-1),t.checkLineBreaks&&ii.test(t.input.slice(s,t.position))&&xi(t,"non-ASCII line breaks are interpreted as content"),t.documents.push(t.result),t.position===t.lineStart&&Ti(t)?46===t.input.charCodeAt(t.position)&&(t.position+=3,Oi(t,!0,-1)):t.position<t.length-1&&wi(t,"end of the stream or a document separator is expected")}function Li(t,e){e=e||{},0!==(t=String(t)).length&&(10!==t.charCodeAt(t.length-1)&&13!==t.charCodeAt(t.length-1)&&(t+="\n"),65279===t.charCodeAt(0)&&(t=t.slice(1)));var i=new bi(t,e),n=t.indexOf("\0");for(-1!==n&&(i.position=n,wi(i,"null byte is not allowed in input")),i.input+="\0";32===i.input.charCodeAt(i.position);)i.lineIndent+=1,i.position+=1;for(;i.position<i.length-1;)ji(i);return i.documents}var Fi={loadAll:function(t,e,i){null!==e&&"object"==typeof e&&void 0===i&&(i=e,e=null);var n=Li(t,i);if("function"!=typeof e)return n;for(var o=0,s=n.length;o<s;o+=1)e(n[o])},load:function(t,e){var i=Li(t,e);if(0!==i.length){if(1===i.length)return i[0];throw new fe("expected a single document in the stream, but found more")}}},Ri=Object.prototype.toString,zi=Object.prototype.hasOwnProperty,Ui=65279,Vi={0:"\\0",7:"\\a",8:"\\b",9:"\\t",10:"\\n",11:"\\v",12:"\\f",13:"\\r",27:"\\e",34:'\\"',92:"\\\\",133:"\\N",160:"\\_",8232:"\\L",8233:"\\P"},Di=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],Hi=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function Yi(t){var e,i,n;if(e=t.toString(16).toUpperCase(),t<=255)i="x",n=2;else if(t<=65535)i="u",n=4;else{if(!(t<=4294967295))throw new fe("code point within a string may not be greater than 0xFFFFFFFF");i="U",n=8}return"\\"+i+ue.repeat("0",n-e.length)+e}function Gi(t){this.schema=t.schema||Qe,this.indent=Math.max(1,t.indent||2),this.noArrayIndent=t.noArrayIndent||!1,this.skipInvalid=t.skipInvalid||!1,this.flowLevel=ue.isNothing(t.flowLevel)?-1:t.flowLevel,this.styleMap=function(t,e){var i,n,o,s,a,r,l;if(null===e)return{};for(i={},o=0,s=(n=Object.keys(e)).length;o<s;o+=1)a=n[o],r=String(e[a]),"!!"===a.slice(0,2)&&(a="tag:yaml.org,2002:"+a.slice(2)),(l=t.compiledTypeMap.fallback[a])&&zi.call(l.styleAliases,r)&&(r=l.styleAliases[r]),i[a]=r;return i}(this.schema,t.styles||null),this.sortKeys=t.sortKeys||!1,this.lineWidth=t.lineWidth||80,this.noRefs=t.noRefs||!1,this.noCompatMode=t.noCompatMode||!1,this.condenseFlow=t.condenseFlow||!1,this.quotingType='"'===t.quotingType?2:1,this.forceQuotes=t.forceQuotes||!1,this.replacer="function"==typeof t.replacer?t.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Wi(t,e){for(var i,n=ue.repeat(" ",e),o=0,s=-1,a="",r=t.length;o<r;)-1===(s=t.indexOf("\n",o))?(i=t.slice(o),o=r):(i=t.slice(o,s+1),o=s+1),i.length&&"\n"!==i&&(a+=n),a+=i;return a}function qi(t,e){return"\n"+ue.repeat(" ",t.indent*e)}function Bi(t){return 32===t||9===t}function Xi(t){return 32<=t&&t<=126||161<=t&&t<=55295&&8232!==t&&8233!==t||57344<=t&&t<=65533&&t!==Ui||65536<=t&&t<=1114111}function Ki(t){return Xi(t)&&t!==Ui&&13!==t&&10!==t}function Zi(t,e,i){var n=Ki(t),o=n&&!Bi(t);return(i?n:n&&44!==t&&91!==t&&93!==t&&123!==t&&125!==t)&&35!==t&&!(58===e&&!o)||Ki(e)&&!Bi(e)&&35===t||58===e&&o}function Ji(t,e){var i,n=t.charCodeAt(e);return n>=55296&&n<=56319&&e+1<t.length&&(i=t.charCodeAt(e+1))>=56320&&i<=57343?1024*(n-55296)+i-56320+65536:n}function Qi(t){return/^\n* /.test(t)}function tn(t,e,i,n,o,s,a,r){var l,c=0,d=null,h=!1,u=!1,g=-1!==n,p=-1,f=function(t){return Xi(t)&&t!==Ui&&!Bi(t)&&45!==t&&63!==t&&58!==t&&44!==t&&91!==t&&93!==t&&123!==t&&125!==t&&35!==t&&38!==t&&42!==t&&33!==t&&124!==t&&61!==t&&62!==t&&39!==t&&34!==t&&37!==t&&64!==t&&96!==t}(Ji(t,0))&&function(t){return!Bi(t)&&58!==t}(Ji(t,t.length-1));if(e||a)for(l=0;l<t.length;c>=65536?l+=2:l++){if(!Xi(c=Ji(t,l)))return 5;f=f&&Zi(c,d,r),d=c}else{for(l=0;l<t.length;c>=65536?l+=2:l++){if(10===(c=Ji(t,l)))h=!0,g&&(u=u||l-p-1>n&&" "!==t[p+1],p=l);else if(!Xi(c))return 5;f=f&&Zi(c,d,r),d=c}u=u||g&&l-p-1>n&&" "!==t[p+1]}return h||u?i>9&&Qi(t)?5:a?2===s?5:2:u?4:3:!f||a||o(t)?2===s?5:2:1}function en(t,e,i,n,o){t.dump=function(){if(0===e.length)return 2===t.quotingType?'""':"''";if(!t.noCompatMode&&(-1!==Di.indexOf(e)||Hi.test(e)))return 2===t.quotingType?'"'+e+'"':"'"+e+"'";var s=t.indent*Math.max(1,i),a=-1===t.lineWidth?-1:Math.max(Math.min(t.lineWidth,40),t.lineWidth-s),r=n||t.flowLevel>-1&&i>=t.flowLevel;switch(tn(e,r,t.indent,a,function(e){return function(t,e){var i,n;for(i=0,n=t.implicitTypes.length;i<n;i+=1)if(t.implicitTypes[i].resolve(e))return!0;return!1}(t,e)},t.quotingType,t.forceQuotes&&!n,o)){case 1:return e;case 2:return"'"+e.replace(/'/g,"''")+"'";case 3:return"|"+nn(e,t.indent)+on(Wi(e,s));case 4:return">"+nn(e,t.indent)+on(Wi(function(t,e){var i,n,o=/(\n+)([^\n]*)/g,s=(r=t.indexOf("\n"),r=-1!==r?r:t.length,o.lastIndex=r,sn(t.slice(0,r),e)),a="\n"===t[0]||" "===t[0];var r;for(;n=o.exec(t);){var l=n[1],c=n[2];i=" "===c[0],s+=l+(a||i||""===c?"":"\n")+sn(c,e),a=i}return s}(e,a),s));case 5:return'"'+function(t){for(var e,i="",n=0,o=0;o<t.length;n>=65536?o+=2:o++)n=Ji(t,o),!(e=Vi[n])&&Xi(n)?(i+=t[o],n>=65536&&(i+=t[o+1])):i+=e||Yi(n);return i}(e)+'"';default:throw new fe("impossible error: invalid scalar style")}}()}function nn(t,e){var i=Qi(t)?String(e):"",n="\n"===t[t.length-1];return i+(n&&("\n"===t[t.length-2]||"\n"===t)?"+":n?"":"-")+"\n"}function on(t){return"\n"===t[t.length-1]?t.slice(0,-1):t}function sn(t,e){if(""===t||" "===t[0])return t;for(var i,n,o=/ [^ ]/g,s=0,a=0,r=0,l="";i=o.exec(t);)(r=i.index)-s>e&&(n=a>s?a:r,l+="\n"+t.slice(s,n),s=n+1),a=r;return l+="\n",t.length-s>e&&a>s?l+=t.slice(s,a)+"\n"+t.slice(a+1):l+=t.slice(s),l.slice(1)}function an(t,e,i,n){var o,s,a,r="",l=t.tag;for(o=0,s=i.length;o<s;o+=1)a=i[o],t.replacer&&(a=t.replacer.call(i,String(o),a)),(ln(t,e+1,a,!0,!0,!1,!0)||void 0===a&&ln(t,e+1,null,!0,!0,!1,!0))&&(n&&""===r||(r+=qi(t,e)),t.dump&&10===t.dump.charCodeAt(0)?r+="-":r+="- ",r+=t.dump);t.tag=l,t.dump=r||"[]"}function rn(t,e,i){var n,o,s,a,r,l;for(s=0,a=(o=i?t.explicitTypes:t.implicitTypes).length;s<a;s+=1)if(((r=o[s]).instanceOf||r.predicate)&&(!r.instanceOf||"object"==typeof e&&e instanceof r.instanceOf)&&(!r.predicate||r.predicate(e))){if(i?r.multi&&r.representName?t.tag=r.representName(e):t.tag=r.tag:t.tag="?",r.represent){if(l=t.styleMap[r.tag]||r.defaultStyle,"[object Function]"===Ri.call(r.represent))n=r.represent(e,l);else{if(!zi.call(r.represent,l))throw new fe("!<"+r.tag+'> tag resolver accepts not "'+l+'" style');n=r.represent[l](e,l)}t.dump=n}return!0}return!1}function ln(t,e,i,n,o,s,a){t.tag=null,t.dump=i,rn(t,i,!1)||rn(t,i,!0);var r,l=Ri.call(t.dump),c=n;n&&(n=t.flowLevel<0||t.flowLevel>e);var d,h,u="[object Object]"===l||"[object Array]"===l;if(u&&(h=-1!==(d=t.duplicates.indexOf(i))),(null!==t.tag&&"?"!==t.tag||h||2!==t.indent&&e>0)&&(o=!1),h&&t.usedDuplicates[d])t.dump="*ref_"+d;else{if(u&&h&&!t.usedDuplicates[d]&&(t.usedDuplicates[d]=!0),"[object Object]"===l)n&&0!==Object.keys(t.dump).length?(!function(t,e,i,n){var o,s,a,r,l,c,d="",h=t.tag,u=Object.keys(i);if(!0===t.sortKeys)u.sort();else if("function"==typeof t.sortKeys)u.sort(t.sortKeys);else if(t.sortKeys)throw new fe("sortKeys must be a boolean or a function");for(o=0,s=u.length;o<s;o+=1)c="",n&&""===d||(c+=qi(t,e)),r=i[a=u[o]],t.replacer&&(r=t.replacer.call(i,a,r)),ln(t,e+1,a,!0,!0,!0)&&((l=null!==t.tag&&"?"!==t.tag||t.dump&&t.dump.length>1024)&&(t.dump&&10===t.dump.charCodeAt(0)?c+="?":c+="? "),c+=t.dump,l&&(c+=qi(t,e)),ln(t,e+1,r,!0,l)&&(t.dump&&10===t.dump.charCodeAt(0)?c+=":":c+=": ",d+=c+=t.dump));t.tag=h,t.dump=d||"{}"}(t,e,t.dump,o),h&&(t.dump="&ref_"+d+t.dump)):(!function(t,e,i){var n,o,s,a,r,l="",c=t.tag,d=Object.keys(i);for(n=0,o=d.length;n<o;n+=1)r="",""!==l&&(r+=", "),t.condenseFlow&&(r+='"'),a=i[s=d[n]],t.replacer&&(a=t.replacer.call(i,s,a)),ln(t,e,s,!1,!1)&&(t.dump.length>1024&&(r+="? "),r+=t.dump+(t.condenseFlow?'"':"")+":"+(t.condenseFlow?"":" "),ln(t,e,a,!1,!1)&&(l+=r+=t.dump));t.tag=c,t.dump="{"+l+"}"}(t,e,t.dump),h&&(t.dump="&ref_"+d+" "+t.dump));else if("[object Array]"===l)n&&0!==t.dump.length?(t.noArrayIndent&&!a&&e>0?an(t,e-1,t.dump,o):an(t,e,t.dump,o),h&&(t.dump="&ref_"+d+t.dump)):(!function(t,e,i){var n,o,s,a="",r=t.tag;for(n=0,o=i.length;n<o;n+=1)s=i[n],t.replacer&&(s=t.replacer.call(i,String(n),s)),(ln(t,e,s,!1,!1)||void 0===s&&ln(t,e,null,!1,!1))&&(""!==a&&(a+=","+(t.condenseFlow?"":" ")),a+=t.dump);t.tag=r,t.dump="["+a+"]"}(t,e,t.dump),h&&(t.dump="&ref_"+d+" "+t.dump));else{if("[object String]"!==l){if("[object Undefined]"===l)return!1;if(t.skipInvalid)return!1;throw new fe("unacceptable kind of an object to dump "+l)}"?"!==t.tag&&en(t,t.dump,e,s,c)}null!==t.tag&&"?"!==t.tag&&(r=encodeURI("!"===t.tag[0]?t.tag.slice(1):t.tag).replace(/!/g,"%21"),r="!"===t.tag[0]?"!"+r:"tag:yaml.org,2002:"===r.slice(0,18)?"!!"+r.slice(18):"!<"+r+">",t.dump=r+" "+t.dump)}return!0}function cn(t,e){var i,n,o=[],s=[];for(dn(t,o,s),i=0,n=s.length;i<n;i+=1)e.duplicates.push(o[s[i]]);e.usedDuplicates=new Array(n)}function dn(t,e,i){var n,o,s;if(null!==t&&"object"==typeof t)if(-1!==(o=e.indexOf(t)))-1===i.indexOf(o)&&i.push(o);else if(e.push(t),Array.isArray(t))for(o=0,s=t.length;o<s;o+=1)dn(t[o],e,i);else for(o=0,s=(n=Object.keys(t)).length;o<s;o+=1)dn(t[n[o]],e,i)}function hn(t,e){return function(){throw new Error("Function yaml."+t+" is removed in js-yaml 4. Use yaml."+e+" instead, which is now safe by default.")}}var un={Type:we,Schema:$e,FAILSAFE_SCHEMA:Oe,JSON_SCHEMA:Re,CORE_SCHEMA:ze,DEFAULT_SCHEMA:Qe,load:Fi.load,loadAll:Fi.loadAll,dump:{dump:function(t,e){var i=new Gi(e=e||{});i.noRefs||cn(t,i);var n=t;return i.replacer&&(n=i.replacer.call({"":n},"",n)),ln(i,0,n,!0,!0)?i.dump+"\n":""}}.dump,YAMLException:fe,types:{binary:Ge,float:Fe,map:Ce,null:Te,pairs:Ke,set:Je,timestamp:De,bool:Se,int:Ne,merge:He,omap:Be,seq:Ee,str:Ae},safeLoad:hn("safeLoad","load"),safeLoadAll:hn("safeLoadAll","loadAll"),safeDump:hn("safeDump","dump")};const gn={type:"custom:google-dashboard-card"},pn=t=>{switch(t){case"tap_action":return"hold_action";case"hold_action":case"double_tap_action":return"tap_action"}};let fn=class extends pt{static getStubConfig(){return{type:"custom:google-dashboard-card"}}async setConfig(t){if(!t)throw new Error("Invalid configuration");this._config=t}async updated(t){if(t.has("hass")){if(this._card)this._card.hass=this.hass;else if(this._config){const t=this.mapTemplate(this._config),e=un.load(t),i=await window.loadCardHelpers(),n=await i.createCardElement(e);n.classList.add("ripple-card"),n.hass=this.hass,this._card=n,this.requestUpdate()}console.log("This LOG is for debug purpose, Google Dashboard"),console.log(this.hass)}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("google-dashboard-card-editor")}mapTemplate(t){const e=this.resolveAction({default_action:t.default_action,action_type:t.action_type,single_tap_web:t.single_tap_web}),i=function(t,e,i,n,o){return`type: custom:swipe-card\ncard_width: max-content\nparameters:\n  grabCursor: true\n  centeredSlides: false\n  slidesPerView: auto\n  spaceBetween: 8\n  preventClicksPropagation: true\n  preventClicks: true\n  threshold: 30\ncards:\n  - type: custom:button-card\n    icon: m3r:videocam\n    name: ${Ut("google_dashboard_card.cameras_name")}\n    triggers_update: all\n    label: |\n      [[[\n          const devices = Object.keys(hass.states).filter((e) =>\n          e.startsWith("camera.") &&\n          hass.entities[e] &&\n          !hass.entities[e].hidden\n        ).length;\n        return devices > 1 ? devices + " " + "${Ut("google_dashboard_card.devices")}" : devices + " " + "${Ut("google_dashboard_card.device")}";\n      ]]]\n    show_name: true\n    show_label: true\n    show_icon: true\n    ${pn(o)}:\n      action: none\n      haptic: medium\n    ${o}:\n      action: ${t?"navigate":"none"}\n      navigation_path: ${t}\n      haptic: medium\n    styles:\n      grid:\n        - grid-template-columns: 2fr 1fr 1fr\n        - grid-template-rows: 2fr 0.1fr 1fr 1fr\n        - grid-template-areas: |\n            "i . ."\n            ". . ."\n            "n n n"\n            "l l l"\n      card:\n        - display: |\n            [[[\n              const lights = Object.keys(hass.states).filter(e => e.startsWith("camera.") && hass.states[e].state !== "unavailable" &&\n                hass.entities[e] &&\n                !hass.entities[e].hidden);\n              return lights.length === 0 ? "none" : "block";\n            ]]]\n        - margin-bottom: 1px\n        - height: 130px\n        - width: 130px\n        - border-radius: 30px\n        - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05),\n            0px 0.5px 1.5px rgba(0, 0, 0, 0.07);\n        #- background: |\n        #    [[[\n        #      return hass.themes.darkMode ? '#1F1F1F' : '#F8F9FA';\n        #    ]]]\n      name:\n        - font-size: 1rem\n        - font-weight: bold\n        - justify-self: start\n        - align-self: end\n        - margin: 0px 20px 0px 20px\n        - max-width: -webkit-fill-available;\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#E8EAED' : '#202124';\n            ]]]\n      label:\n        - font-size: 0.85rem\n        - justify-self: start\n        - align-self: start\n        - margin: 2px 0px 0px 20px\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';\n            ]]]\n      icon:\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#8AB4F8' : '#1A73E8';\n            ]]]\n    state:\n      - value: "on"\n        styles:\n          card:\n            - background: |\n                [[[\n                  return hass.themes.darkMode ? '#302f32' : '#E8F0FE';\n                ]]]\n          icon:\n            - color: |\n                [[[\n                  return hass.themes.darkMode ? '#fee183' : '#1A73E8';\n                ]]]\n  - type: custom:button-card\n    icon: m3r:light-group\n    name: ${Ut("google_dashboard_card.lighting_name")}\n    triggers_update: all\n    label: |\n      [[[\n        // Conta automaticamente le luci accese\n        const lightEntities = Object.keys(hass.states).filter(\n        (entity) =>\n          entity.startsWith("light.") &&\n          hass.states[entity].state !== "unavailable" &&\n          hass.entities[entity] &&\n          !hass.entities[entity].hidden\n        );\n        const lightsOn = lightEntities.filter(\n          (entity) => hass.states[entity].state === "on"\n        ).length;\n        const totalLights = lightEntities.length;\n        return lightsOn + "/" + totalLights + " ${Ut("google_dashboard_card.lighting_label")}";\n      ]]]\n    show_name: true\n    show_label: true\n    show_icon: true\n    ${pn(o)}:\n      action: none\n      haptic: medium\n    ${o}:\n      action: ${e?"navigate":"none"}\n      navigation_path: ${e}\n      haptic: medium\n    styles:\n      grid:\n        - grid-template-columns: 2fr 1fr 1fr\n        - grid-template-rows: 2fr 0.1fr 1fr 1fr\n        - grid-template-areas: |\n            "i . ."\n            ". . ."\n            "n n n"\n            "l l l"\n      card:\n        - display: |\n            [[[\n              const lights = Object.keys(hass.states).filter(e => e.startsWith("light.") && \n                hass.states[e].state !== "unavailable" &&\n                hass.entities[e] &&\n                !hass.entities[e].hidden);\n              return lights.length === 0 ? "none" : "block";\n            ]]]\n        - margin-left: |\n            [[[\n              const camera = Object.keys(hass.states).filter(e => e.startsWith("camera.") && hass.states[e].state !== "unavailable");\n              return camera.length === 0 ? "5px" : "0px";\n            ]]]\n        - margin-bottom: 1px\n        - height: 130px\n        - width: 130px\n        - border-radius: 30px\n        - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05),\n            0px 0.5px 1.5px rgba(0, 0, 0, 0.07);\n        #- background: |\n        #    [[[\n        #      return hass.themes.darkMode ? '#1F1F1F' : '#F8F9FA';\n        #    ]]]\n      name:\n        - font-size: 1rem\n        - font-weight: bold\n        - justify-self: start\n        - align-self: end\n        - margin: 0px 20px 0px 20px\n        - max-width: -webkit-fill-available;\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#FFFFFF' : '#202124';\n            ]]]\n      label:\n        - font-size: 0.85rem\n        - justify-self: start\n        - align-self: start\n        - margin: 2px 0px 0px 20px\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';\n            ]]]\n      icon:\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#FBBC04' : '#F9AB00';\n            ]]]\n    state:\n      - operator: template\n        value: |\n          [[[\n            return Object.keys(hass.states).some(entity => \n              entity.startsWith('light.') && \n              hass.states[entity].state === 'on'\n            );\n          ]]]\n        styles:\n          card:\n            - background: |\n                [[[\n                  return hass.themes.darkMode ? '#332f2a' : '#FEF7E0';\n                ]]]\n          icon:\n            - color: |\n                [[[\n                  return hass.themes.darkMode ? '#FBBC04' : '#745b00';\n                ]]]\n  - type: custom:button-card\n    icon: m3of:wifi\n    name: ${Ut("google_dashboard_card.wifi_name")}\n    triggers_update: all\n    label: |\n      [[[\n        const devices = Object.keys(hass.states).filter(\n          (entity) =>\n            entity.startsWith("device_tracker.") &&\n            hass.states[entity].state === "home" &&\n            hass.entities[entity] &&\n            !hass.entities[entity].hidden\n        ).length;\n        return devices > 1 ? (devices + " " + "${Ut("google_dashboard_card.devices")}") : (devices + " " + "${Ut("google_dashboard_card.device")}");\n      ]]]\n    show_name: true\n    show_label: true\n    show_icon: true\n    ${pn(o)}:\n      action: none\n      haptic: medium\n    ${o}:\n      action: ${i?"navigate":"none"}\n      navigation_path: ${i}\n      haptic: medium\n    styles:\n      grid:\n        - grid-template-columns: 2fr 1fr 1fr\n        - grid-template-rows: 2fr 0.1fr 1fr 1fr\n        - grid-template-areas: |\n            "i . ."\n            ". . ."\n            "n n n"\n            "l l l"\n      card:\n        - display: |\n            [[[\n              const deviceEntities = Object.keys(hass.states).filter(entity => \n                entity.startsWith('device_tracker.') && \n                hass.states[entity].state === 'home' &&\n                hass.entities[entity] &&\n                !hass.entities[entity].hidden\n              );\n              return deviceEntities.length === 0 ? "none" : "block";\n            ]]]\n        - margin-left: |\n            [[[\n              const cameras = Object.keys(hass.states).filter(e => e.startsWith("camera.") && hass.states[e].state !== "unavailable");\n              const lights = Object.keys(hass.states).filter(e => \n                e.startsWith("light.") && hass.states[e].state !== "unavailable");\n              return lights.length === 0 ? "-8px" : "0px";\n\n              if (lights.length === 0 && cameras.length === 0) \n                return "5px";\n              else if (lights.length != 0 || cameras.length != 0) \n                return "-8px";\n              else return "0px";\n            ]]]\n        - margin-bottom: 1px\n        - height: 130px\n        - width: 130px\n        - border-radius: 30px\n        - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05),\n            0px 0.5px 1.5px rgba(0, 0, 0, 0.07);\n        #- background: |\n        #    [[[\n        #      return hass.themes.darkMode ? '#1F1F1F' : '#F8F9FA';\n        #    ]]]\n      name:\n        - font-size: 1rem\n        - font-weight: bold\n        - justify-self: start\n        - align-self: end\n        - margin: 0px 20px 0px 20px\n        - max-width: -webkit-fill-available;\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#FFFFFF' : '#202124';\n            ]]]\n      label:\n        - font-size: 0.85rem\n        - justify-self: start\n        - align-self: start\n        - margin: 2px 0px 0px 20px\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';\n            ]]]\n      icon:\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#81C995' : '#137333';\n            ]]]\n    state:\n      - operator: template\n        value: |\n          [[[\n            return Object.keys(hass.states).some(entity => \n              entity.startsWith('device_tracker.') && \n              hass.states[entity].state === 'home'\n            );\n          ]]]\n        styles:\n          card:\n            - background: |\n                [[[\n                  return hass.themes.darkMode ? '#2e312e' : '#E6F4EA';\n                ]]]\n          icon:\n            - color: |\n                [[[\n                  return hass.themes.darkMode ? '#81C995' : '#137333';\n                ]]]\n  - type: custom:button-card\n    entity: light.luce_giovanni\n    icon: m3of:thermostat\n    name: ${Ut("google_dashboard_card.climate_name")}\n    triggers_update: all\n    label: |\n      [[[\n        const climateEntities = Object.keys(hass.states).filter(\n            (entity) =>\n              entity.startsWith("climate.") &&\n              hass.states[entity].state !== "unavailable" &&\n              hass.entities[entity] &&\n              !hass.entities[entity].hidden\n          ).length;\n          return climateEntities > 1 ? climateEntities + " " + "${Ut("google_dashboard_card.devices")}" : climateEntities + " " + "${Ut("google_dashboard_card.device")}";\n      ]]]\n    show_name: true\n    show_label: true\n    show_icon: true\n    ${pn(o)}:\n      action: none\n      haptic: medium\n    ${o}:\n      action: ${n?"navigate":"none"}\n      navigation_path: ${n}\n      haptic: medium\n    styles:\n      grid:\n        - grid-template-columns: 2fr 1fr 1fr\n        - grid-template-rows: 2fr 0.1fr 1fr 1fr\n        - grid-template-areas: |\n            "i . ."\n            ". . ."\n            "n n n"\n            "l l l"\n      card:\n        - display: |\n            [[[\n              const climateEntities = Object.keys(hass.states).filter(entity => \n                entity.startsWith('climate.') && \n                hass.states[entity].state !== 'unavailable' &&\n                hass.entities[entity] &&\n                !hass.entities[entity].hidden\n              );\n              return climateEntities.length === 0 ? "none" : "block";\n            ]]]\n        - margin-left: |\n            [[[\n              const cameras = Object.keys(hass.states).filter((e) =>\n                e.startsWith("camera.") &&\n                hass.entities[e] &&\n                !hass.entities[e].hidden\n              ).length;\n              const lights = Object.keys(hass.states).filter(e => \n                e.startsWith("light.") && hass.states[e].state !== "unavailable");\n              const deviceEntities = Object.keys(hass.states).filter(entity => \n                entity.startsWith('device_tracker.') && hass.states[entity].state === 'home');\n              if (deviceEntities.length === 0 && lights.length === 0 && cameras.length === 0) \n                return "5px";\n              else if (deviceEntities.length === 0 && lights.length != 0) \n                return "-8px";\n              else return "0px";\n            ]]]\n        - margin-bottom: 1px\n        - height: 130px\n        - width: 130px\n        - border-radius: 30px\n        - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05),\n            0px 0.5px 1.5px rgba(0, 0, 0, 0.07);\n        #- background: |\n        #    [[[\n        #      return hass.themes.darkMode ? '#1F1F1F' : '#F8F9FA';\n        #    ]]]\n      name:\n        - font-size: 1rem\n        - font-weight: bold\n        - justify-self: start\n        - align-self: end\n        - margin: 0px 20px 0px 20px\n        - max-width: -webkit-fill-available;\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#FFFFFF' : '#202124';\n            ]]]\n      label:\n        - font-size: 0.85rem\n        - justify-self: start\n        - align-self: start\n        - margin: 2px 0px 0px 20px\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';\n            ]]]\n      icon:\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#ffdbcd' : '#812800';\n            ]]]\n    state:\n      - operator: template\n        value: |\n          [[[\n            return Object.keys(hass.states).some(entity => \n              entity.startsWith('climate.') && \n              (hass.states[entity].state === 'on' || \n                hass.states[entity].state === 'auto' || \n                hass.states[entity].state === 'heat' || \n                hass.states[entity].state === 'cool' || \n                hass.states[entity].state === 'heat_cool')\n            );\n          ]]]\n        styles:\n          card:\n            - background: |\n                [[[\n                  return hass.themes.darkMode ? '#352f2d' : '#FCE8E6';\n                ]]]\n          icon:\n            - color: |\n                [[[\n                  return hass.themes.darkMode ? '#FF8A65' : '#812800';\n                ]]]\n`}(t.cameras,t.lighting,t.wifi,t.climate,e);return i}resolveAction({default_action:t,action_type:e,single_tap_web:i}){const n=navigator.userAgent||"",o=!(n.includes("Android")||n.includes("iPhone")||n.includes("iPad")||n.includes("HomeAssistant"));return t||o&&i?"tap_action":e||"tap_action"}_handleClick(t){const e=t.target.closest(".ripple-card");e&&Kt(e,t)}render(){return this._card?K`
      <div style="margin: 0px -15px;" @mousedown=${this._handleClick}>
        ${this._card}
      </div>
    `:K`<ha-card>Loading…</ha-card>`}createRenderRoot(){return this}};fn.styles=p`
    .ripple-card {
      position: relative;
      overflow: hidden;
    }
  `,l([bt({attribute:!1})],fn.prototype,"hass",void 0),l([yt()],fn.prototype,"_config",void 0),l([yt()],fn.prototype,"_card",void 0),fn=l([mt("google-dashboard-card")],fn);let mn=class extends pt{constructor(){super(...arguments),this._config=gn,this._valueChanged=t=>{var e,i;const n=t.target,o=n.getAttribute("configValue"),s=t instanceof CustomEvent&&void 0!==(null===(e=t.detail)||void 0===e?void 0:e.value)?t.detail.value:null!==(i=n.checked)&&void 0!==i?i:n.value;o&&this._config[o]!==s&&(this._config=Object.assign(Object.assign({},this._config),{[o]:s}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}}setConfig(t){this._config=Object.assign({},t)}_entityChanged(t){var e;const i=t.detail.value;(null===(e=this._config)||void 0===e?void 0:e.entity)!==i&&(this._config=Object.assign(Object.assign({},this._config),{entity:i}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}async firstUpdated(){const t=await window.loadCardHelpers(),e=await t.createCardElement({type:"entities",entities:[]});await e.constructor.getConfigElement()}render(){var t,e,i,n;return this._config&&this.hass?(this._config.use_default_icon=null===(t=this._config.use_default_icon)||void 0===t||t,this._config.default_action=null===(e=this._config.default_action)||void 0===e||e,K`
      <div class="form">
        <span class="switch-label"
          >${Ut("google_dashboard_card.description")}</span
        >

        <span class="text-label"
          >${Ut("google_dashboard_card.cameras")}</span
        >
        <ha-textfield
          label="${Ut("google_dashboard_card.placeholder")}"
          .value=${this._config.cameras||""}
          configValue="cameras"
          @input=${this._valueChanged}
          placeholder="e.g. ./cameras"
        ></ha-textfield>

        <span class="text-label"
          >${Ut("google_dashboard_card.lighting")}</span
        >
        <ha-textfield
          label="${Ut("google_dashboard_card.placeholder")}"
          .value=${this._config.lighting||""}
          configValue="lighting"
          @input=${this._valueChanged}
          placeholder="e.g. ./lighting"
        ></ha-textfield>

        <span class="text-label"
          >${Ut("google_dashboard_card.wifi")}</span
        >
        <ha-textfield
          label="${Ut("google_dashboard_card.placeholder")}"
          .value=${this._config.wifi||""}
          configValue="wifi"
          @input=${this._valueChanged}
          placeholder="e.g. ./wifi"
        ></ha-textfield>

        <span class="text-label"
          >${Ut("google_dashboard_card.climate")}</span
        >
        <ha-textfield
          label="${Ut("google_dashboard_card.placeholder")}"
          .value=${this._config.climate||""}
          configValue="climate"
          @input=${this._valueChanged}
          placeholder="e.g. ./climate"
        ></ha-textfield>

        <div class="switch-row">
          <span class="switch-label"
            >${Ut("google_dashboard_card.default")}</span
          >
          <ha-switch
            .checked=${null===(i=this._config.default_action)||void 0===i||i}
            configValue="default_action"
            @change=${this._valueChanged}
          />
        </div>

        ${this._config.default_action?K``:K`
              <ha-select
                label="${Ut("google_dashboard_card.tap_type")}"
                .value=${this._config.action_type||"tap_action"}
                configValue="action_type"
                @selected=${this._valueChanged}
                @closed=${t=>t.stopPropagation()}
              >
                <mwc-list-item value="tap_action">
                  ${Ut("google_dashboard_card.single")}
                </mwc-list-item>
                <mwc-list-item value="hold_action">
                  ${Ut("google_dashboard_card.hold")}
                </mwc-list-item>
                <mwc-list-item value="double_tap_action">
                  ${Ut("google_dashboard_card.double")}
                </mwc-list-item>
              </ha-select>

              <div class="switch-row">
                <span class="switch-label"
                  >${Ut("google_dashboard_card.web")}</span
                >
                <ha-switch
                  .checked=${null!==(n=this._config.single_tap_web)&&void 0!==n&&n}
                  configValue="single_tap_web"
                  @change=${this._valueChanged}
                />
              </div>
            `}
      </div>
    `):K``}};mn.styles=p`
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
  `,l([bt({attribute:!1})],mn.prototype,"hass",void 0),l([yt()],mn.prototype,"_config",void 0),mn=l([mt("google-dashboard-card-editor")],mn);class _n{#t;#e;#i=0;#n=0;#o=0;#s=0;#a;#r=!1;#l;#c;#d;constructor(t,e,{touchActions:i,stopScrollDirection:n="both"}={}){this.#t=t,this.#e=i,this.#a=e,this.#l=n,this.#c=this.#h.bind(this),this.#d=this.#u.bind(this),this.addListeners()}addListeners(){this.#t.addEventListener("pointerdown",this.#d),this.#t.addEventListener("pointermove",this.#d),this.#t.addEventListener("pointerup",this.#d),this.#t.addEventListener("pointercancel",this.#d),window.addEventListener("touchmove",this.#c,{passive:!1}),this.#e&&(this.#t.style.touchAction=this.#e)}removeListeners(){this.#t.removeEventListener("pointerdown",this.#d),this.#t.removeEventListener("pointermove",this.#d),this.#t.removeEventListener("pointerup",this.#d),this.#t.removeEventListener("pointercancel",this.#d),window.removeEventListener("touchmove",this.#c),this.#e&&this.#t.style.removeProperty("touch-action")}#g(){this.#r=!0}#p(){this.#r=!1}#h(t){this.#r&&t.preventDefault()}#u(t){if("pointerdown"===t.type&&(this.#t.setPointerCapture(t.pointerId),this.#i=t.pageX,this.#n=t.pageY),this.#t.hasPointerCapture(t.pointerId)&&"pointercancel"!==t.type&&"function"==typeof this.#a){const e=t.pageX-this.#i,i=t.pageY-this.#n,n=Math.abs(e/i)>1,o=Math.abs(e/i)<1;"horizontal"===this.#l&&n&&this.#g(),"vertical"===this.#l&&o&&this.#g(),"both"===this.#l&&this.#g(),this.#a(t,{startX:this.#i,startY:this.#n,relativeX:e,relativeY:i,totalX:e+this.#o,totalY:i+this.#s})}"pointerup"===t.type&&(this.#o=+this.#o+t.pageX-this.#i,this.#s=+this.#s+t.pageY-this.#n,this.#t.releasePointerCapture(t.pointerId),this.#p()),"pointercancel"===t.type&&(this.#a(t,{startX:this.#i,startY:this.#n,relativeX:0,relativeY:0,totalX:this.#o,totalY:this.#s}),this.#t.releasePointerCapture(t.pointerId),this.#p())}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function vn(t,e,i,n=t=>t){null!=e&&""!==e&&i.setProperty(t,n(e))}class bn extends pt{constructor(){super(...arguments),this._config=r,this._name="",this.mouseStartPos={x:0,y:0},this.mousePos={x:0,y:0},this.containerWidth=0,this.oldValue=0,this.currentValue=0,this.holdTimer=0,this.isHold=!1,this._shouldUpdate=!0,this.updateTimeout=0,this.pressTimeout=0,this.trackingStartTime=0,this.isTap=!1,this.color=ne,this._handleContextMenu=t=>(t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation(),!1),this._handlePointer=(t,e)=>{this.mousePos={x:t.pageX,y:t.pageY};const i=this._config.min_slide_time;if("pointerdown"===t.type&&(this._press(),this.isTap=!0,this.isHold=!1,this.holdTimer=window.setTimeout(this._setHold,this._config.hold_time),this.trackingStartTime=Date.now(),this._resetTrack()),["pointerdown","pointermove","pointerup"].includes(t.type)&&this._updateValue(),"pointermove"===t.type){if(this.isTap&&Math.abs(e.relativeX)<5&&Math.abs(e.relativeY)<5)return;this.isTap=!1,clearTimeout(this.holdTimer),this._stopUpdates()}if("pointercancel"===t.type&&(clearTimeout(this.holdTimer),this._unpress(),this._startUpdates()),"pointerup"===t.type){if(clearTimeout(this.holdTimer),this._unpress(),this._startUpdates(),this.isTap)return void this._handleTap();Date.now()-this.trackingStartTime>i&&(this._setValue(),this._startUpdates(!0))}},this._setHold=()=>{this.isTap=!1,this.isHold=!0,this._handleAction("hold")},this._handleTap=()=>{var t;clearTimeout(this.holdTimer),(null===(t=this._config)||void 0===t?void 0:t.tap_action)&&(this.isHold||this._handleAction("tap"))}}static getStubConfig(t){const e=Object.keys(t.states).filter(t=>t.startsWith("light.")).sort();return{type:"custom:google-slider-card",entity:e[Math.floor(Math.random()*e.length)],attribute:"brightness",icon:"m3of:lightbulb",show_percentage:!0,bold_text:!1}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("google-slider-card-editor")}setConfig(t){if(!t)throw new Error(Ut("common.invalid_configuration"));if(!t.entity)throw new Error(Ut("common.no_entity_set"));const i=t.entity.split(".")[0];if(t.control_type===e.LIGHT&&"light"!==i||t.control_type===e.COVER&&"cover"!==i)throw new Error(`Entity must match the selected control type (${t.control_type})`);t.attribute||(t.control_type===e.LIGHT?t.attribute="brightness":t.control_type===e.COVER&&(t.attribute="current_position")),this._config=Object.assign(Object.assign({},r),t),this._entity=this._config.entity,this._config.original_min=this._config.min,this._config.original_max=this._config.max}set hass(t){var i,n,o,s,a,r,l,c,d,h,u,g,p,f;if(!this._entity)return;this._hass=t,this._state=t.states[this._entity],this._status=null===(i=this._state)||void 0===i?void 0:i.state,this._config.control_type===e.LIGHT?this.currentValue=null!==(s=null===(o=null===(n=this._state)||void 0===n?void 0:n.attributes)||void 0===o?void 0:o.brightness)&&void 0!==s?s:0:this._config.control_type===e.COVER&&(this.currentValue=null!==(l=null===(r=null===(a=this._state)||void 0===a?void 0:a.attributes)||void 0===r?void 0:r.current_position)&&void 0!==l?l:0),this._name=null!==(g=null!==(u=null!==(c=this._config.name)&&void 0!==c?c:null===(h=null===(d=this._state)||void 0===d?void 0:d.attributes)||void 0===h?void 0:h.friendly_name)&&void 0!==u?u:this._entity.split(".")[1])&&void 0!==g?g:"";const m=(null===(p=t.themes)||void 0===p?void 0:p.darkMode)?"dark":"light",_=null===(f=t.states[this._entity])||void 0===f?void 0:f.state;this._lastTheme===m&&this._lastEntityState===_||(this._lastTheme=m,this._lastEntityState=_,this.requestUpdate())}connectedCallback(){super.connectedCallback(),this.addEventListener("contextmenu",this._handleContextMenu),this.slideGesture=new _n(this,this._handlePointer.bind(this),{touchActions:"pan-y",stopScrollDirection:"horizontal"})}disconnectedCallback(){this.removeEventListener("contextmenu",this._handleContextMenu),this.slideGesture.removeListeners(),super.disconnectedCallback()}_updateValue(){const t=this.containerWidth,e=this.mousePos.x-this.mouseStartPos.x,i=Math.round(100*e/t);this.currentValue=this.oldValue+i,this._checklimits(),this._updateSlider()}_handleAction(t){const e=new Event("hass-action",{bubbles:!0,cancelable:!1,composed:!0});e.detail={config:this._config,action:t},this.dispatchEvent(e)}_resetTrack(){this.mouseStartPos={x:this.mousePos.x,y:this.mousePos.y},this.oldValue=this.currentValue}_press(){this.pressTimeout&&clearTimeout(this.pressTimeout),this.pressTimeout=window.setTimeout(()=>this.setAttribute("pressed",""),this._config.min_slide_time),this.setAttribute("half-pressed","")}_unpress(){this.pressTimeout&&clearTimeout(this.pressTimeout),this.removeAttribute("pressed"),this.removeAttribute("half-pressed")}_checklimits(){var t,e;const i=null!==(t=this._config.min)&&void 0!==t?t:0,n=null!==(e=this._config.max)&&void 0!==e?e:100;this.currentValue<i&&(this.currentValue=i,this._resetTrack()),this.currentValue>n&&(this.currentValue=n,this._resetTrack())}_updateSlider(){var t;this.style.setProperty("--bsc-percent",this.currentValue+"%");const e=null===(t=null==this?void 0:this.shadowRoot)||void 0===t?void 0:t.getElementById("percentage");this._state&&this._state.attributes.brightness?e&&(e.innerText=Math.round(this.currentValue)+"%"):e&&(e.innerText=Ut("common.on"))}_updateColors(){var t,e,i,n,o;let s="var(--bsc-color)",a="0%",r="50%",l=!1;if(this._state)if("on"==this._status){const o=null!==(e=null===(t=this._state.attributes)||void 0===t?void 0:t.rgb_color)&&void 0!==e?e:[255,255,255],c=null!==(n=null===(i=this._state.attributes)||void 0===i?void 0:i.brightness)&&void 0!==n?n:255;l=!0,o&&(s=`rgb(${o.join(",")})`),c&&(a=`${Math.ceil(100*c/255)}%`,r=`${Math.ceil(100*c/510+50)}%`)}else s="var(--bsc-off-color)";const c=null===(o=null==this?void 0:this.shadowRoot)||void 0===o?void 0:o.getElementById("percentage");if(!l){"on"!=this._status&&"off"!=this._status?c&&(c.innerText=Ut("common.offline")):c&&(c.innerText=Ut("common.off"))}this.style.setProperty("--bsc-entity-color",s),this.style.setProperty("--bsc-brightness",a),this.style.setProperty("--bsc-brightness-ui",r),this._config.icon_color&&l&&this.style.setProperty("--bsc-icon-color",this._config.icon_color),this._config.icon_color&&!l&&this.style.removeProperty("--bsc-icon-color")}_getValue(){var t,i,n,o,s,a;if(!this._shouldUpdate)return;if(!this._state)return;if(this._config.control_type===e.COVER)return this._config.min=0,this._config.max=100,"unavailable"==this._status?(this.currentValue=0,this.style.setProperty("--bsc-opacity","0.5")):(this.style.removeProperty("--bsc-opacity"),this.currentValue=null!==(t=this._state.attributes.current_position)&&void 0!==t?t:0),void this._updateSlider();const r=null===(i=this._config)||void 0===i?void 0:i.attribute;let l=0;if("unavailable"==this._status?(this._config.min=0,this._config.max=0,this.style.setProperty("--bsc-opacity","0.5")):(this._config.min=this._config.original_min,this._config.max=this._config.original_max,this.style.removeProperty("--bsc-opacity")),"on"!=this._status)l=null!==(n=this._config.min)&&void 0!==n?n:0;else switch(r){case"brightness":l=Math.round(100*(null!==(o=this._state.attributes.brightness)&&void 0!==o?o:255)/255);break;case"red":case"green":case"blue":const t=null!==(s=this._state.attributes.rgb_color)&&void 0!==s?s:[255,255,255];"red"===r&&(l=t[0]),"green"===r&&(l=t[1]),"blue"===r&&(l=t[2]),l=Math.ceil(100*l/255);break;case"hue":case"saturation":const e=null!==(a=this._state.attributes.hs_color)&&void 0!==a?a:[100,100];"hue"===r&&(l=e[0]),"saturation"===r&&(l=e[1])}this.currentValue=l,this._updateSlider()}_setValue(){var t,i;if(!this._state)return;if(this._config.control_type===e.COVER)return void this._hass.callService("cover","set_cover_position",{entity_id:this._state.entity_id,position:this.currentValue});let n,o=this.currentValue,s=this._config.attribute,a=!0;switch(s){case"brightness":o=Math.ceil(o/100*255),o||(a=!1);break;case"red":case"green":case"blue":n=null!==(t=this._state.attributes.rgb_color)&&void 0!==t?t:[255,255,255],"red"===s&&(n[0]=o),"green"===s&&(n[1]=o),"blue"===s&&(n[2]=o),o=n,s="rgb_color";break;case"hue":case"saturation":n=null!==(i=this._state.attributes.hs_color)&&void 0!==i?i:[100,100],"hue"===s&&(n[0]=o),"saturation"===s&&(n[1]=o),o=n,s="hs_color"}const r={entity_id:this._state.entity_id};a?(r[s]=o,this._config.transition&&(r.transition=this._config.transition),this._hass.callService("light","turn_on",r)):this._hass.callService("light","turn_off",r)}_stopUpdates(){var t,e,i;this.updateTimeout&&clearTimeout(this.updateTimeout),this._shouldUpdate&&(null===(i=null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("slider"))||void 0===e?void 0:e.classList)||void 0===i||i.remove("animate"),this._shouldUpdate=!1)}_startUpdates(t=!1){this.updateTimeout&&clearTimeout(this.updateTimeout),this.updateTimeout=window.setTimeout(()=>{var t,e,i;this._shouldUpdate=!0,null===(i=null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("slider"))||void 0===e?void 0:e.classList)||void 0===i||i.add("animate"),this.requestUpdate()},t?this._config.settle_time:0)}_onClick(t){Kt(t.currentTarget,t)}updated(){var t,e,i;this.containerWidth=null!==(i=null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("container"))||void 0===e?void 0:e.clientWidth)&&void 0!==i?i:0,this._getValue(),this._updateColors()}render(){var t,i,n,o,s,a,r,l,c;if(!this._entity||!(this._entity in(null!==(i=null===(t=this._hass)||void 0===t?void 0:t.states)&&void 0!==i?i:{})))return this._showError(`${Ut("common.no_entity")}: ${this._entity}`);const d=null!==(n=this._config.colorize&&!0)&&void 0!==n&&n,h=null!==(o=this._config.show_percentage&&!0)&&void 0!==o&&o,u=null!==(s=this._config.bold_text&&!0)&&void 0!==s&&s,g=null===(r=null===(a=this._hass)||void 0===a?void 0:a.states)||void 0===r?void 0:r[this._entity],p="on"!=(null==g?void 0:g.state)&&"off"!=(null==g?void 0:g.state),f=(null===(c=null===(l=this._hass)||void 0===l?void 0:l.themes)||void 0===c?void 0:c.darkMode)?"dark":"light",m="on"===(null==g?void 0:g.state);!function(t,i,n,o,s,a){let r="",l="",c="",d="",h="";i?"light"===n?(r=s.light.offline.light.title,l=s.light.offline.light.icon,c=s.light.offline.light.percentage,d=s.light.offline.light.slider,h=s.light.offline.light.background):(r=s.dark.offline.light.title,l=s.dark.offline.light.icon,c=s.dark.offline.light.percentage,d=s.dark.offline.light.slider,h=s.dark.offline.light.background):o?t.control_type==e.LIGHT?"dark"===n?(r=s.dark.on.light.title,l=s.dark.on.light.icon,c=s.dark.on.light.percentage,d=s.dark.on.light.slider,h=s.dark.on.light.background):(r=s.light.on.light.title,l=s.light.on.light.icon,c=s.light.on.light.percentage,d=s.light.on.light.slider,h=s.light.on.light.background):"dark"===n?(r=s.dark.on.button.title,l=s.dark.on.button.icon,c=s.dark.on.button.percentage,d=s.dark.on.button.background,h=s.dark.on.button.back_slider_color):(r=s.light.on.button.title,l=s.light.on.button.icon,c=s.light.on.button.percentage,d=s.light.on.button.background,h=s.light.on.button.back_slider_color):"dark"===n?(r=s.dark.off.light.title,l=s.dark.off.light.icon,c=s.dark.off.light.percentage,d=s.dark.off.light.slider,h=s.dark.off.light.background):(r=s.light.off.light.title,l=s.light.off.light.icon,c=s.light.off.light.percentage,d=s.light.off.light.slider,h=s.light.off.light.background),vn("--bsc-name-color",r,a),vn("--bsc-icon-color",l,a),vn("--bsc-percentage-color",c,a),vn("--bsc-slider-color",d,a),vn("--bsc-background",h,a),vn("--bsc-name-margin","-20px",a),vn("--bsc-icon-margin","-10px",a),vn("--bsc-percentage-margin","-20px",a),vn("--bsc-primary-text-color",t.text_color,a),vn("--bsc-border-color",t.border_color,a),vn("--bsc-border-radius",t.border_radius,a),vn("--bsc-border-style",t.border_style,a),vn("--bsc-border-width",t.border_width,a),vn("--bsc-height",t.height,a,t=>`${t}px`)}(this._config,p,f,m,this.color,this.style);let _=null==this._config.icon||"m3of:lightbulb"===this._config.icon||"m3r:lightbulb"===this._config.icon?m?"m3of:lightbulb":"m3r:lightbulb":this._config.icon;if("string"==typeof this._config.icon&&this._config.icon.trim().startsWith("[[[")&&this._config.icon.trim().endsWith("]]]"))try{const t=this._config.icon.trim().slice(3,-3),e=new Function("entity","state","hass",t)(g,null==g?void 0:g.state,this.hass);e&&"string"==typeof e&&(_=e)}catch(t){console.warn("Error evaluating icon template:",t),_="mdi:alert-circle-outline"}return K`
      <ha-card
        id="container"
        tabindex="0"
        style="position: relative; ${p?"padding: 12px 35px 12px 12px;":"padding: 12px 12px;"}"
        @mousedown=${this._onClick}
      >
        <div id="slider" class="animate ${d?"colorize":""}"></div>
        <div id="content">
          <ha-state-icon
            id="icon"
            .icon=${_}
            .state=${this._state}
            .hass=${this._hass}
            .stateObj=${this._state}
            data-domain=${this._entity.split(".")[0]}
            data-state=${(t=>t??J)(this._status)}
          ></ha-state-icon>
          <p id="label">
            <span id="name" class="${u?"bold":""}"
              >${this._name}</span
            >
            <span
              id="percentage"
              class="${h?"":"hide"} ${u?"bold":""}"
            ></span>
          </p>
        </div>
        ${p?K`
              <ha-icon
                id="icon_offline"
                icon="m3rf:warning"
                style="position: absolute; right: 13px; top: 50%; transform: translateY(-50%); color: var(--bsc-icon-color); --mdc-icon-size: 20px;"
                title="Offline"
              ></ha-icon>
            `:""}
      </ha-card>
    `}_setStyleProperty(t,e,i=t=>t){null!=e&&""!==e&&this.style.setProperty(t,i(e))}_showWarning(t){return K` <hui-warning>${t}</hui-warning> `}_showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t}),K` ${e} `}static get styles(){return p`
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
    `}}l([yt()],bn.prototype,"_config",void 0),l([yt()],bn.prototype,"_entity",void 0),l([yt()],bn.prototype,"_state",void 0),l([yt()],bn.prototype,"_status",void 0),l([yt()],bn.prototype,"_name",void 0);const yn={type:"custom:google-climate-card",entity:"climate.thermo",increase_temp:1,decrease_temp:1,use_material_color:!0,use_default_icon:!0};let wn=class extends pt{constructor(){super(...arguments),this._config=yn,this.google_color_scheme=ne}setConfig(t){if(!t||!t.entity)throw new Error(Ut("common.invalid_configuration"));this._config=t}static getStubConfig(t){const e=Object.keys(t.states).filter(t=>t.startsWith("climate.")).sort();return{type:"custom:google-climate-card",entity:e[Math.floor(Math.random()*e.length)],increase_temp:1,decrease_temp:1,use_material_color:!0,use_default_icon:!0}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("google-climate-card-editor")}_onClick(t){if(Kt(t.currentTarget,t),navigator.vibrate&&navigator.vibrate(60),!this._config||!this.hass)return;const e=this._config.entity;Wt(this,"hass-more-info",{entityId:e})}async _adjustTemp(t){var e;if(navigator.vibrate&&navigator.vibrate(60),!this.hass||!(null===(e=this._config)||void 0===e?void 0:e.entity))return;const i=this.hass.states[this._config.entity],n=Number(oe(this._config.fix_temperature,i.attributes.temperature));if(isNaN(n))return;const o=(s=this._config.fix_temperature,ie(a=n+t)?a:"true"==s||"auto"==s&&a<7?a/5:a);var s,a;this.hass.states[this._config.entity].attributes.temperature=o,await this.hass.callService("climate","set_temperature",{entity_id:this._config.entity,temperature:o}),setTimeout(()=>{this.requestUpdate()},500)}setColorCard(t,e,i,n,o){let s="",a="",r="",l="",c="";i?"light"===e?(s=a=this.google_color_scheme.light.offline.climate.title,c=this.google_color_scheme.light.offline.climate.background):(s=a=this.google_color_scheme.dark.offline.climate.title,c=this.google_color_scheme.dark.offline.climate.background):n?"dark"===e?t?o?(s=this.google_color_scheme.dark.on.climate.material_dry.title,a=this.google_color_scheme.dark.on.climate.material_dry.icon,r=this.google_color_scheme.dark.on.climate.material_dry.button,l=this.google_color_scheme.dark.on.climate.material_dry.subtitle,c=this.google_color_scheme.dark.on.climate.material_dry.background):(s=this.google_color_scheme.dark.on.climate.material.title,a=this.google_color_scheme.dark.on.climate.material.icon,r=this.google_color_scheme.dark.on.climate.material.button,l=this.google_color_scheme.dark.on.climate.material.subtitle,c=this.google_color_scheme.dark.on.climate.material.background):(s=a=this.google_color_scheme.dark.on.climate.default.title,r=this.google_color_scheme.dark.on.climate.default.button,l=this.google_color_scheme.dark.on.climate.default.subtitle,c=this.google_color_scheme.dark.on.climate.default.background):t?o?(s=this.google_color_scheme.light.on.climate.material_dry.title,a=this.google_color_scheme.light.on.climate.material_dry.icon,l=this.google_color_scheme.light.on.climate.material_dry.subtitle,r=this.google_color_scheme.light.on.climate.material_dry.button,c=this.google_color_scheme.light.on.climate.material_dry.background):(s=this.google_color_scheme.light.on.climate.material.title,a=this.google_color_scheme.light.on.climate.material.icon,l=this.google_color_scheme.light.on.climate.material.subtitle,r=this.google_color_scheme.light.on.climate.material.button,c=this.google_color_scheme.light.on.climate.material.background):(s=a=l=this.google_color_scheme.light.on.climate.default.title,r=this.google_color_scheme.light.on.climate.default.button,c=this.google_color_scheme.light.on.climate.default.background):"dark"===e?(s=a=l=this.google_color_scheme.dark.off.climate.default.title,r=this.google_color_scheme.dark.off.climate.default.button,c=this.google_color_scheme.dark.off.climate.default.background):(s=a=l=this.google_color_scheme.light.off.climate.default.title,r=this.google_color_scheme.light.off.climate.default.button,c=this.google_color_scheme.light.off.climate.default.background),this._setStyleProperty("--bsc-name-color",s),this._setStyleProperty("--bsc-icon-color",a),this._setStyleProperty("--bsc-adjustTemp-color",r),this._setStyleProperty("--bsc-internalTemp-color",l),this._setStyleProperty("--bsc-background",c)}_setStyleProperty(t,e,i=t=>t){null!=e&&""!==e&&this.style.setProperty(t,i(e))}render(){var t,e;if(!this._config||!this.hass)return K``;const i=this.hass.states[this._config.entity];if(!i)return K`<ha-card
        ><div class="warning">${Ut("common.no_entity")}</div></ha-card
      >`;const n=ce(this._config,this.hass),o=te(i.state),s=le(i,"thermometer",o,this._config.fix_temperature,!1,!0),a=(null===(e=null===(t=this.hass)||void 0===t?void 0:t.themes)||void 0===e?void 0:e.darkMode)?"dark":"light",r=Jt(i.state),l=se(i.attributes.hvac_modes),c=!r&&!ie(i.attributes.temperature);this.setColorCard(this._config.use_material_color,a,o,r,l);const d={control_type:"thermometer",icon:this._config.icon,use_default_icon:this._config.use_default_icon,dual_icon:this._config.dual_icon,icon_on:this._config.icon_on,icon_off:this._config.icon_off};return K`
      <div class="temperature-card">
        <div class="header" @click=${this._onClick}>
          <div class="valve-info">
            <ha-icon
              id="icon_offline"
              icon="${re(i,d,this.hass)}"
              title="Climate"
              class="chevron"
              style="
                --mdc-icon-size: 20px;
                margin-top: -5px;
              "
            ></ha-icon>

            <span class="valve-name">${n}</span>
          </div>

          ${o?K`<ha-icon
                id="icon_offline"
                icon="m3rf:warning"
                style="position: absolute; right: 0px; top: 50%; transform: translateY(-50%); color: var(--bsc-icon-color);"
                title="Offline"
              ></ha-icon>`:K`<ha-icon
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
        ${o?K`
              <div class="temperature-control offline-control">
                <div class="temperature-display offline">Offline</div>
              </div>
            `:K`
              <div
                class="temperature-control"
                style="${r||c?"justify-content: space-between;":"justify-content: center;"}"
              >
                ${r||c?K`<button
                      class="control-btn minus-btn"
                      @click=${()=>this._adjustTemp(-this._config.decrease_temp|-yn.decrease_temp)}
                    >
                      −
                    </button>`:K``}

                <div
                  class="temperature-display"
                  id="tempDisplay"
                  style="${r||c?"":"font-size: 65px; margin-bottom: 7px;"}"
                >
                  ${r||c?oe(this._config.fix_temperature,i.attributes.temperature):Ut("common.off")}
                </div>
                ${r||c?K`<button
                      class="control-btn plus-btn"
                      @click=${()=>this._adjustTemp(this._config.decrease_temp|yn.increase_temp)}
                    >
                      +
                    </button>`:K``}
              </div>

              <div class="internal-temp">
                <span id="internalTemp">${s}</span>
              </div>
            `}
      </div>
    `}};wn.styles=p`
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
  `,l([bt({attribute:!1})],wn.prototype,"hass",void 0),l([yt()],wn.prototype,"_config",void 0),wn=l([mt("google-climate-card")],wn);let xn=class extends pt{constructor(){super(...arguments),this._config=yn,this._valueChanged=t=>{var e,i;const n=t.target,o=n.getAttribute("configValue"),s=t instanceof CustomEvent&&void 0!==(null===(e=t.detail)||void 0===e?void 0:e.value)?t.detail.value:null!==(i=n.checked)&&void 0!==i?i:n.value;o&&this._config[o]!==s&&(this._config=Object.assign(Object.assign({},this._config),{[o]:s}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}}setConfig(t){this._config=Object.assign({},t)}_entityChanged(t){var e;const i=t.detail.value;(null===(e=this._config)||void 0===e?void 0:e.entity)!==i&&(this._config=Object.assign(Object.assign({},this._config),{entity:i}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}async firstUpdated(){const t=await window.loadCardHelpers(),e=await t.createCardElement({type:"entities",entities:[]});await e.constructor.getConfigElement()}render(){var t,e,i,n,o,s;return this._config&&this.hass?(this._config.use_default_icon=null===(t=this._config.use_default_icon)||void 0===t||t,this._config.use_material_color=null===(e=this._config.use_material_color)||void 0===e||e,K`
      <div class="form">
        <ha-textfield
          label="${Ut("google_climate_card.name")}"
          .value=${this._config.name||""}
          configValue="name"
          @input=${this._valueChanged}
          placeholder="e.g. Cooler"
        ></ha-textfield>

        <ha-entity-picker
          label="${Ut("google_climate_card.entity")}"
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
            >${Ut("google_climate_card.theme")}</span
          >
          <ha-switch
            .checked=${null===(i=this._config.use_material_color)||void 0===i||i}
            configValue="use_material_color"
            @change=${this._valueChanged}
          />
        </div>

        <div class="switch-row">
          <span class="switch-label"
            >${Ut("google_climate_card.dual_icon.default")}</span
          >
          <ha-switch
            .checked=${null===(n=this._config.use_default_icon)||void 0===n||n}
            configValue="use_default_icon"
            @change=${this._valueChanged}
          />
        </div>

        ${this._config.use_default_icon?K``:K`
              <ha-icon-picker
                label="Icon"
                .value=${this._config.icon||""}
                configValue="icon"
                @value-changed=${this._valueChanged}
                placeholder="mdi:lightbulb"
              />
            `}

        <ha-textfield
          label="${Ut("google_climate_card.increase_temp")}"
          .value=${this._config.increase_temp||1}
          configValue="increase_temp"
          @input=${this._valueChanged}
          placeholder="e.g. 0.5"
        ></ha-textfield>

        <ha-textfield
          label="${Ut("google_climate_card.decrease_temp")}"
          .value=${this._config.decrease_temp||1}
          configValue="decrease_temp"
          @input=${this._valueChanged}
          placeholder="e.g. 0.5"
        ></ha-textfield>

        <!--<div class="switch-row">
          <span class="switch-label"
            >${Ut("google_climate_card.fix_temperature")}</span
          >
          <ha-switch
            .checked=${null!==(o=this._config.fix_temperature)&&void 0!==o&&o}
            configValue="fix_temperature"
            @change=${this._valueChanged}
          />
        </div>-->

        <ha-select
          label="${Ut("google_climate_card.fix_temperature")}"
          .value=${null!==(s=this._config.fix_temperature)&&void 0!==s?s:"false"}
          configValue="fix_temperature"
          @selected=${this._valueChanged}
          @closed=${t=>t.stopPropagation()}
        >
          <mwc-list-item value="false">
            ${Ut("google_climate_card.false")}
          </mwc-list-item>
          <mwc-list-item value="true">
            ${Ut("google_climate_card.true")}
          </mwc-list-item>
          <mwc-list-item value="auto">
            ${Ut("google_climate_card.auto")}
          </mwc-list-item>
        </ha-select>
      </div>
    `):K``}};xn.styles=p`
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
  `,l([bt({attribute:!1})],xn.prototype,"hass",void 0),l([yt()],xn.prototype,"_config",void 0),xn=l([mt("google-climate-card-editor")],xn);const kn={type:"custom:google-control-card",name:"Control Card",icon:"mdi:link",tap_action:{action:"more-info"},hold_action:{action:"more-info"}};function $n(t){const e=t.name;let i=t.icon;if("string"==typeof i&&i.trim().startsWith("[[[")&&i.trim().endsWith("]]]")){const t=i.trim().split("\n").map(t=>"  "+t).join("\n");i=`|\n${t}`}return`type: custom:button-card\nname: ${e}\nicon: ${i}\n${t.use_card_entity&&t.entity?"entity: "+t.entity:""}\n${function(t){return null==t?"tap_action:\n  action: none":"google-home"==t.action?'tap_action:\n  action: url\n  url_path: |\n    [[[\n      const ua = navigator.userAgent || "";\n      if (ua.includes("Android")) {\n        return "app://com.google.android.apps.chromecast.app";\n      } else if (ua.includes("iPhone") || ua.includes("iPad")) {\n        return "googlehome://";\n      } else {\n        return "https://home.google.com/";\n      }\n    ]]]':"settings"==t.action?'tap_action:\n      action: navigate\n      navigation_path: |\n        [[[ \n          const isAdmin = hass.user?.is_admin;\n          if (isAdmin) {\n            return "/config/dashboard";\n          } else {\n            return "/profile";\n          }\n        ]]]':"navigate"==t.action?`tap_action:\n      action: navigate\n      navigation_path: ${t.navigation_path}`:"call-service"==t.action?`tap_action:\n      action: call-service\n      service: ${t.service}\n      service_data: ${t.service_data}`:"more-info"==t.action?"tap_action:\n      action: more-info":"toggle"==t.action?"tap_action:\n      action: toggle":"url"==t.action?`tap_action:\n      action: url\n      url_path: ${t.url_path}`:"tap_action:\n  action: none"}(t.tap_action)}\n${function(t){return null==t?"hold_action:\n  action: none":"google-home"==t.action?'hold_action:\n  action: url\n  url_path: |\n    [[[\n      const ua = navigator.userAgent || "";\n      if (ua.includes("Android")) {\n        return "app://com.google.android.apps.chromecast.app";\n      } else if (ua.includes("iPhone") || ua.includes("iPad")) {\n        return "googlehome://";\n      } else {\n        return "https://home.google.com/";\n      }\n    ]]]':"settings"==t.action?'hold_action:\n      action: navigate\n      navigation_path: |\n        [[[ \n          const isAdmin = hass.user?.is_admin;\n          if (isAdmin) {\n            return "/config/dashboard";\n          } else {\n            return "/profile";\n          }\n        ]]]':"navigate"==t.action?`hold_action:\n      action: navigate\n      navigation_path: ${t.navigation_path}`:"call-service"==t.action?`hold_action:\n      action: call-service\n      service: ${t.service}\n      service_data: ${t.service_data}`:"more-info"==t.action?"hold_action:\n      action: more-info":"toggle"==t.action?"hold_action:\n      action: toggle":"url"==t.action?`hold_action:\n      action: url\n      url_path: ${t.url_path}`:"hold_action:\n  action: none"}(t.hold_action)}\nstyles:\n  grid:\n    - grid-template-columns: 2fr 1fr 1fr\n    - grid-template-rows: 2fr 0.1fr 2fr\n    - grid-template-areas: |\n        "i . ."\n        ". . ."\n        "n n n"\n  card:\n    - height: 140px\n    - width: 140px\n    - border-radius: 30px\n    - margin-bottom: 1px\n    - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05), 0px 0.5px 1.5px rgba(0, 0, 0, 0.07);\n    #- background-color: |\n    #    [[[\n    #      return hass.themes.darkMode ? '#1f2022' : '#eeedf2';\n    #    ]]]\n    - background-color: |\n        [[[\n          return hass.themes.darkMode ? "var(--md-sys-color-surface-container, '#1f2022')" : "var(--md-sys-color-surface-container, '#eeedf2')";\n        ]]]\n  name:\n    - font-size: 1rem\n    - font-weight: bold\n    - justify-self: start\n    - align-self: center\n    - margin-left: 20px\n    - width: 100px\n    - text-align: left\n    - white-space: normal\n    - overflow-wrap: break-word\n    - word-break: break-word\n    - color: |\n        [[[\n          return hass.themes.darkMode ? "var(--md-sys-color-on-surface-variant,'#e3e3e5')" : "var(--md-sys-color-on-surface-variant,'#1b1b1d')";\n        ]]]\n  icon:\n    - color: |\n        [[[\n          return hass.themes.darkMode ? "var(--md-sys-color-on-surface-variant,'#c4c7d0')" : "var(--md-sys-color-on-surface-variant,'#43484e')";\n        ]]]\n`}let An=class extends pt{constructor(){super(...arguments),this._config=kn}async setConfig(t){if(!t)throw new Error(Ut("common.invalid_configuration"));this._config=t}static getStubConfig(){return{type:"custom:google-control-card",name:"Control Card",icon:"mdi:link",tap_action:{action:"more-info"},hold_action:{action:"more-info"}}}async updated(t){if(t.has("hass"))if(this._card)this._card.hass=this.hass;else if(this._config){const t=this.mapTemplate(),e=un.load(t),i=await window.loadCardHelpers(),n=await i.createCardElement(e);n.classList.add("ripple-card"),n.hass=this.hass,this._card=n,this.requestUpdate()}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("google-control-card-editor")}mapAction(t){if(!t||"object"!=typeof t)return t;const e=Object.assign({},t);for(const t of["navigation_path","url_path"])t in e&&"string"==typeof e[t]&&(e[t]=this.evalTripleBrackets(e[t]));return e}mapTemplate(){const t=ce(this._config,this.hass),e=Object.assign(Object.assign({},this._config),{name:t});e.tap_action=this.mapAction(e.tap_action),e.hold_action=this.mapAction(e.hold_action);return $n(e)}evalTripleBrackets(t){const e=t.match(/^\s*\[\[\[\s*([\s\S]*?)\s*\]\]\]\s*$/);if(e)try{return new Function(e[1])()}catch(t){console.error("Eval error:",t)}return t}render(){return this._card?K`${this._card}`:K`<ha-card>Loading…</ha-card>`}createRenderRoot(){return this}};An.styles=p`
    .ripple-card {
      position: relative;
      overflow: hidden;
    }
  `,l([bt({attribute:!1})],An.prototype,"hass",void 0),l([yt()],An.prototype,"_config",void 0),l([yt()],An.prototype,"_card",void 0),An=l([mt("google-control-card")],An);let En=class extends pt{constructor(){super(...arguments),this._config=kn,this._configLoaded=!1,this._valueChanged=t=>{var e,i;const n=t.target,o=n.getAttribute("configValue"),s=t instanceof CustomEvent&&void 0!==(null===(e=t.detail)||void 0===e?void 0:e.value)?t.detail.value:null!==(i=n.checked)&&void 0!==i?i:n.value;o&&this._config[o]!==s&&(this._config=Object.assign(Object.assign({},this._config),{[o]:s}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}}setConfig(t){this._config=Object.assign({},t),this._configLoaded=!0}_entityChanged(t){var e;const i=t.detail.value;(null===(e=this._config)||void 0===e?void 0:e.entity)!==i&&(this._config=Object.assign(Object.assign({},this._config),{entity:i}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}async firstUpdated(){const t=await window.loadCardHelpers(),e=await t.createCardElement({type:"entities",entities:[]});await e.constructor.getConfigElement()}_tapActionChanged(){return(t,e)=>{if(this._configLoaded){if("action"===t&&this._config.tap_action.action!=e){const t={toggle:{action:"toggle"},"more-info":{action:"more-info"},navigate:{action:"navigate",navigation_path:"/"},url:{action:"url",url_path:""},none:{action:"none"},"google-home":{action:"google-home"},settings:{action:"settings"}}[e];this._config.tap_action=t}else"navigation_path"==t&&(this._config.tap_action.navigation_path=e),"url_path"==t&&(this._config.tap_action.url_path=e);this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}}))}}}_holdActionChanged(){return(t,e)=>{if(this._configLoaded){if("action"===t&&this._config.hold_action.action!=e){const t={toggle:{action:"toggle"},"more-info":{action:"more-info"},navigate:{action:"navigate",navigation_path:"/"},url:{action:"url",url_path:""},none:{action:"none"},"google-home":{action:"google-home"},settings:{action:"settings"}}[e];this._config.hold_action=t}else"navigation_path"==t&&(this._config.hold_action.navigation_path=e),"url_path"==t&&(this._config.hold_action.url_path=e);this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}}))}}}render(){var t,e,i;if(!this._configLoaded||!this.hass)return K``;this._config.use_default_icon=null===(t=this._config.use_default_icon)||void 0===t||t,this._config.use_card_entity=null!==(e=this._config.use_card_entity)&&void 0!==e&&e;const n=(t,e)=>{var i;const n=null!==(i=null==t?void 0:t.action)&&void 0!==i?i:"more-info";return K`
        <ha-select
          style="display: block;"
          label="Azione"
          .value=${n}
          @selected=${t=>{const i=t.target.value;e("action",i)}}
          @closed=${t=>t.stopPropagation()}
        >
          <mwc-list-item value="more-info">
            ${Ut("google_control_card.actions.more_info")}
          </mwc-list-item>
          <mwc-list-item value="toggle">
            ${Ut("google_control_card.actions.toggle")}
          </mwc-list-item>
          <mwc-list-item value="navigate">
            ${Ut("google_control_card.actions.navigate")}
          </mwc-list-item>
          <mwc-list-item value="url">
            ${Ut("google_control_card.actions.url")}
          </mwc-list-item>
          <mwc-list-item value="none">
            ${Ut("google_control_card.actions.none")}
          </mwc-list-item>
          <mwc-list-item value="google-home">
            ${Ut("google_control_card.actions.google_home")}
          </mwc-list-item>
          <mwc-list-item value="settings">
            ${Ut("google_control_card.actions.settings")}
          </mwc-list-item>
        </ha-select>

        ${"navigate"===n?K`
              <ha-textfield
                style="display: block; margin-top: 10px;"
                label="Percorso di navigazione"
                .value=${(null==t?void 0:t.navigation_path)||""}
                @input=${t=>e("navigation_path",t.target.value)}
              ></ha-textfield>
            `:""}
        ${"url"===n?K`
              <ha-textfield
                style="display: block; margin-top: 10px;"
                label="URL"
                .value=${null==t?void 0:t.url_path}
                @input=${t=>e("url_path",t.target.value)}
              ></ha-textfield>
            `:""}
        <!-- Aggiungi altri campi dinamici se servono per call-service ecc. -->
      `};return K`
      <div class="form">
        <ha-textfield
          label="${Ut("google_control_card.name")}"
          .value=${this._config.name||""}
          configValue="name"
          @input=${this._valueChanged}
          placeholder="e.g. Cooler"
        ></ha-textfield>

        <div class="switch-row">
          <span class="switch-label"
            >${Ut("google_control_card.entity_card")}</span
          >
          <ha-switch
            .checked=${this._config.use_card_entity}
            configValue="use_card_entity"
            @change=${this._valueChanged}
          />
        </div>

        ${this._config.use_card_entity?K`
              <ha-entity-picker
                label="${Ut("google_control_card.entity")}"
                .value=${this._config.entity||""}
                .hass=${this.hass}
                allow-custom-entity
                configValue="entity"
                @value-changed=${this._entityChanged}
                required
              ></ha-entity-picker>
            `:""}

        <div class="switch-row">
          <span class="switch-label"
            >${Ut("google_control_card.dual_icon.default")}</span
          >
          <ha-switch
            .checked=${this._config.use_default_icon}
            configValue="use_default_icon"
            @change=${this._valueChanged}
          />
        </div>

        ${this._config.use_default_icon?"":K`
              <div class="switch-row">
                <span class="switch-label"
                  >${Ut("google_control_card.dual_icon.options")}</span
                >
                <ha-switch
                  .checked=${null!==(i=this._config.dual_icon)&&void 0!==i&&i}
                  configValue="dual_icon"
                  @change=${this._valueChanged}
                />
              </div>
              ${this._config.dual_icon?K`
                    <div class="dual-icons">
                      <ha-icon-picker
                        label="Icon ON"
                        .value=${this._config.icon_on||""}
                        configValue="icon_on"
                        @value-changed=${this._valueChanged}
                      ></ha-icon-picker>
                      <ha-icon-picker
                        label="Icon OFF"
                        .value=${this._config.icon_off||""}
                        configValue="icon_off"
                        @value-changed=${this._valueChanged}
                      ></ha-icon-picker>
                    </div>
                  `:K`
                    <ha-icon-picker
                      label="Icon"
                      .value=${this._config.icon||""}
                      configValue="icon"
                      @value-changed=${this._valueChanged}
                    ></ha-icon-picker>
                  `}
            `}

        <div>
          <h3>${Ut("google_control_card.actions.press")}</h3>
          ${n(this._config.tap_action,this._tapActionChanged())}
        </div>

        <div>
          <h3>${Ut("google_control_card.actions.hold")}</h3>
          ${n(this._config.hold_action,this._holdActionChanged())}
        </div>
      </div>
    `}};En.styles=p`
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

    .action-editor ha-textarea {
      width: 100%;
      font-family: monospace;
    }
  `,l([bt({attribute:!1})],En.prototype,"hass",void 0),l([yt()],En.prototype,"_config",void 0),l([yt()],En.prototype,"_configLoaded",void 0),En=l([mt("google-control-card-editor")],En);let Cn=class extends pt{constructor(){super(...arguments),this._config=t,this._configLoaded=!1,this._onTapSelected=t=>{var e;const i=t.target.value;i!=(null===(e=this._config.tap_action)||void 0===e?void 0:e.action)&&this._setAction("tap_action",i)},this._onHoldSelected=t=>{var e;const i=t.target.value;i!=(null===(e=this._config.hold_action)||void 0===e?void 0:e.action)&&this._setAction("hold_action",i)}}setConfig(e){this._config=Object.assign(Object.assign(Object.assign({},t),e),{tap_action:e.tap_action,hold_action:e.hold_action}),this._configLoaded=!0}_valueChanged(t){var i;if(!this._config)return;const n=t.target,o=n.getAttribute("configValue"),s=Object.assign(Object.assign({},this._config),{[o]:null!==(i=n.checked)&&void 0!==i?i:n.value});s.control_type!==e.APP_VERSION&&s.control_type!==e.ACTION||delete s.entity,s.use_default_toggle&&(delete s.tap_action,delete s.hold_action),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:s}}))}_entityChanged(t){var e;const i=t.detail.value;(null===(e=this._config)||void 0===e?void 0:e.entity)!==i&&(this._config=Object.assign(Object.assign({},this._config),{entity:i}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}_getActionValue(t){var e;return t?"string"==typeof t?t:null!==(e=t.action)&&void 0!==e?e:"toggle":"toggle"}_setAction(t,e){if(!this._configLoaded)return;const i={toggle:{action:"toggle"},"more-info":{action:"more-info"},navigate:{action:"navigate",navigation_path:"/"},url:{action:"url",url_path:""},none:{action:"none"}}[e]||{action:e};this._config=Object.assign(Object.assign({},this._config),{[t]:i}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}}))}_setActionValue(t,e,i){let n=this._config[t];"string"==typeof n&&(n={action:n});const o=Object.assign(Object.assign({},n),{[e]:i});this._config=Object.assign(Object.assign({},this._config),{[t]:o}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}}))}async firstUpdated(){const t=await window.loadCardHelpers(),e=await t.createCardElement({type:"entities",entities:[]});await e.constructor.getConfigElement()}setEntityFilter(){switch(this._config.control_type){case e.THERMOMETER:return["climate"];case e.SCENE:return["scene","automation"];case e.MEDIA_PLAYER:return["media_player"];default:return}}render(){var t,i,n,o,s,a,r,l,c,d,h;return this._config&&this.hass?(this._config.use_default_icon=null===(t=this._config.use_default_icon)||void 0===t||t,this._config.control_type!=e.APP_VERSION&&this._config.control_type!=e.ACTION||(this._config.use_default_icon=!1),this._config.control_type==e.ACTION&&(this._config.use_default_toggle=!1),this._config.use_default_toggle=null===(i=this._config.use_default_toggle)||void 0===i||i,this._config.use_default_text=null===(n=this._config.use_default_text)||void 0===n||n,K`
      <div class="form">
        <ha-select
          label="${Ut("google_button_card.control_type")}"
          .value=${null!==(o=this._config.control_type)&&void 0!==o?o:"generic"}
          configValue="control_type"
          @selected=${this._valueChanged}
          @closed=${t=>t.stopPropagation()}
        >
          <mwc-list-item value="generic">
            ${Ut("google_button_card.type.generic")}
          </mwc-list-item>
          <mwc-list-item value="thermometer">
            ${Ut("google_button_card.type.thermometer")}
          </mwc-list-item>
          <mwc-list-item value="scene">
            ${Ut("google_button_card.type.scene")}
          </mwc-list-item>
          <mwc-list-item value="media_player">
            ${Ut("google_button_card.type.media")}
          </mwc-list-item>
          <mwc-list-item value="state">
            ${Ut("google_button_card.type.state")}
          </mwc-list-item>
          <mwc-list-item value="action">
            ${Ut("google_button_card.type.action")}
          </mwc-list-item>
          <mwc-list-item value="app_version">
            ${Ut("google_button_card.type.app_version")}
          </mwc-list-item>
        </ha-select>

        <ha-textfield
          label="${Ut("google_button_card.name")}"
          .value=${this._config.name||""}
          configValue="name"
          @input=${this._valueChanged}
          placeholder="e.g. Cooler"
        ></ha-textfield>

        ${this._config.control_type==e.APP_VERSION||this._config.control_type==e.ACTION?K``:K`<ha-entity-picker
              label="Entity"
              .value=${this._config.entity||""}
              .hass=${this.hass}
              .includeDomains=${this.setEntityFilter()}
              allow-custom-entity
              configValue="entity"
              @value-changed=${this._entityChanged}
              required
            ></ha-entity-picker>`}
        ${this._config.control_type==e.APP_VERSION||this._config.control_type==e.ACTION?K``:K`<div class="switch-row">
              <span class="switch-label"
                >${Ut("google_button_card.dual_icon.default")}</span
              >
              <ha-switch
                .checked=${null===(s=this._config.use_default_icon)||void 0===s||s}
                configValue="use_default_icon"
                @change=${this._valueChanged}
              />
            </div>`}
        ${this._config.use_default_icon?K``:K`${this._config.control_type==e.APP_VERSION||this._config.control_type==e.ACTION||this._config.control_type==e.THERMOMETER||this._config.control_type==e.SCENE||this._config.control_type==e.STATE?K``:K`<div class="switch-row">
                  <span class="switch-label"
                    >${Ut("google_button_card.dual_icon.options")}</span
                  >
                  <ha-switch
                    .checked=${null!==(a=this._config.dual_icon)&&void 0!==a&&a}
                    configValue="dual_icon"
                    @change=${this._valueChanged}
                  />
                </div>`}
            ${this._config.dual_icon?K`
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
                `:K`
                  <ha-icon-picker
                    label="Icon"
                    .value=${this._config.icon||""}
                    configValue="icon"
                    @value-changed=${this._valueChanged}
                    placeholder="mdi:lightbulb"
                  />
                `} `}
        ${this._config.control_type==e.APP_VERSION||this._config.control_type==e.ACTION||this._config.control_type==e.THERMOMETER||this._config.control_type==e.SCENE||this._config.control_type==e.MEDIA_PLAYER||this._config.control_type==e.STATE?K``:K`<div class="switch-row">
              <span class="switch-label"
                >${Ut("google_button_card.dual_text.default")}</span
              >
              <ha-switch
                .checked=${null===(r=this._config.use_default_text)||void 0===r||r}
                configValue="use_default_text"
                @change=${this._valueChanged}
              />
            </div>`}
        ${this._config.use_default_text?K``:K`
              <div class="dual-icons">
                <ha-textfield
                  label="${Ut("google_button_card.dual_text.text_on")}"
                  .value=${this._config.text_on||""}
                  configValue="text_on"
                  @input=${this._valueChanged}
                  placeholder="On"
                ></ha-textfield>
                <ha-textfield
                  label="${Ut("google_button_card.dual_text.text_off")}"
                  .value=${this._config.text_off||""}
                  configValue="text_off"
                  @input=${this._valueChanged}
                  placeholder="Off"
                ></ha-textfield>
              </div>
            `}
        ${this._config.control_type!=e.THERMOMETER?K``:K` <div class="switch-row">
                <span class="switch-label"
                  >${Ut("google_climate_card.theme")}</span
                >
                <ha-switch
                  .checked=${null!==(l=this._config.use_material_color)&&void 0!==l&&l}
                  configValue="use_material_color"
                  @change=${this._valueChanged}
                />
              </div>
              <!--<div class="switch-row">
                <span class="switch-label"
                  >${Ut("google_climate_card.fix_temperature")}</span
                >
                <ha-switch
                  .checked=${null!==(c=this._config.fix_temperature)&&void 0!==c&&c}
                  configValue="fix_temperature"
                  @change=${this._valueChanged}
                />
              </div>-->
              <ha-select
                label="${Ut("google_climate_card.fix_temperature")}"
                .value=${null!==(d=this._config.fix_temperature)&&void 0!==d&&d}
                configValue="fix_temperature"
                @selected=${this._valueChanged}
                @closed=${t=>t.stopPropagation()}
              >
                <mwc-list-item value="false">
                  ${Ut("google_climate_card.false")}
                </mwc-list-item>
                <mwc-list-item value="true">
                  ${Ut("google_climate_card.true")}
                </mwc-list-item>
                <mwc-list-item value="auto">
                  ${Ut("google_climate_card.auto")}
                </mwc-list-item>
              </ha-select>`}
        ${this._config.control_type==e.ACTION?K``:K`<div class="switch-row">
              <span class="switch-label"
                >${Ut("google_button_card.toggle.title")}</span
              >
              <ha-switch
                .checked=${null===(h=this._config.use_default_toggle)||void 0===h||h}
                configValue="use_default_toggle"
                @change=${this._valueChanged}
              />
            </div>`}
        ${this._config.use_default_toggle?K``:K`<ha-select
                label="${Ut("google_button_card.toggle.press")}"
                .value=${this._getActionValue(this._config.tap_action)}
                @selected=${this._onTapSelected}
                @closed=${t=>t.stopPropagation()}
              >
                <mwc-list-item value="toggle">
                  ${Ut("google_button_card.toggle.click")}
                </mwc-list-item>
                <mwc-list-item value="more-info">
                  ${Ut("google_button_card.toggle.info")}
                </mwc-list-item>
                <mwc-list-item value="navigate">
                  ${Ut("google_button_card.toggle.navigate")}
                </mwc-list-item>
                <mwc-list-item value="url">
                  ${Ut("google_button_card.toggle.url")}
                </mwc-list-item>
                <mwc-list-item value="none">
                  ${Ut("google_button_card.toggle.none")}
                </mwc-list-item>
              </ha-select>

              ${this._renderExtraField(this._config.tap_action,(t,e)=>this._setActionValue("tap_action",t,e))}

              <ha-select
                label="${Ut("google_button_card.toggle.hold")}"
                .value=${this._getActionValue(this._config.hold_action)}
                @selected=${this._onHoldSelected}
                @closed=${t=>t.stopPropagation()}
              >
                <mwc-list-item value="toggle">
                  ${Ut("google_button_card.toggle.click")}
                </mwc-list-item>
                <mwc-list-item value="more-info">
                  ${Ut("google_button_card.toggle.info")}
                </mwc-list-item>
                <mwc-list-item value="navigate">
                  ${Ut("google_button_card.toggle.navigate")}
                </mwc-list-item>
                <mwc-list-item value="url">
                  ${Ut("google_button_card.toggle.url")}
                </mwc-list-item>
                <mwc-list-item value="none">
                  ${Ut("google_button_card.toggle.none")}
                </mwc-list-item>
              </ha-select>

              ${this._renderExtraField(this._config.hold_action,(t,e)=>this._setActionValue("hold_action",t,e))}`}
      </div>
    `):K``}_renderExtraField(t,e){var i;const n=null!==(i=null==t?void 0:t.action)&&void 0!==i?i:t;return K`
      ${"navigate"===n?K`
            <ha-textfield
              style="display: block; margin-top: 10px;"
              label="Percorso di navigazione"
              .value=${(null==t?void 0:t.navigation_path)||""}
              @input=${t=>e("navigation_path",t.target.value)}
            ></ha-textfield>
          `:""}
      ${"url"===n?K`
            <ha-textfield
              style="display: block; margin-top: 10px;"
              label="URL"
              .value=${(null==t?void 0:t.url_path)||""}
              @input=${t=>e("url_path",t.target.value)}
            ></ha-textfield>
          `:""}
    `}};Cn.styles=p`
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
  `,l([bt({attribute:!1})],Cn.prototype,"hass",void 0),l([yt()],Cn.prototype,"_config",void 0),l([yt()],Cn.prototype,"_configLoaded",void 0),Cn=l([mt("google-button-card-editor")],Cn);let On=class extends pt{constructor(){super(...arguments),this._config=r}setConfig(t){this._config=Object.assign({},t)}_valueChanged(t){var e,i;const n=t.target,o=n.getAttribute("configValue"),s=t instanceof CustomEvent&&void 0!==(null===(e=t.detail)||void 0===e?void 0:e.value)?t.detail.value:null!==(i=n.checked)&&void 0!==i?i:n.value;o&&this._config[o]!==s&&(this._config=Object.assign(Object.assign({},this._config),{[o]:s}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}_entityChanged(t){var e;const i=t.detail.value;(null===(e=this._config)||void 0===e?void 0:e.entity)!==i&&(this._config=Object.assign(Object.assign({},this._config),{entity:i}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}async firstUpdated(){const t=await window.loadCardHelpers(),e=await t.createCardElement({type:"entities",entities:[]});await e.constructor.getConfigElement()}setEntityFilter(){switch(this._config.control_type){case e.LIGHT:return["light"];case e.COVER:return["cover"];default:return}}render(){var t,e,i;return this._config&&this.hass?K`
      <div class="form">
        <ha-select
          label="${Ut("google_slider_card.control_type")}"
          .value=${null!==(t=this._config.control_type)&&void 0!==t?t:"light"}
          configValue="control_type"
          @selected=${this._valueChanged}
          @closed=${t=>t.stopPropagation()}
        >
          <mwc-list-item value="light">
            ${Ut("google_slider_card.type.light")}
          </mwc-list-item>
          <mwc-list-item value="cover">
            ${Ut("google_slider_card.type.cover")}
          </mwc-list-item>
        </ha-select>

        <ha-textfield
          label="${Ut("google_slider_card.name")}"
          .value=${this._config.name||""}
          configValue="name"
          @input=${this._valueChanged}
          placeholder="e.g. Cooler"
        ></ha-textfield>

        <ha-entity-picker
          label="${Ut("google_slider_card.entity")}"
          .value=${this._config.entity||""}
          .hass=${this.hass}
          .includeDomains=${["light"]}
          allow-custom-entity
          configValue="entity"
          @value-changed=${this._entityChanged}
          required
        ></ha-entity-picker>

        <ha-icon-picker
          label="${Ut("google_slider_card.icon")}"
          .value=${this._config.icon||""}
          configValue="icon"
          @value-changed=${this._valueChanged}
          placeholder="mdi:lightbulb"
        ></ha-icon-picker>

        <div class="switch-row">
          <span class="switch-label"
            >${Ut("google_slider_card.percentage")}</span
          >
          <ha-switch
            .checked=${null===(e=this._config.show_percentage)||void 0===e||e}
            configValue="show_percentage"
            @change=${this._valueChanged}
          />
        </div>

        <div class="switch-row">
          <span class="switch-label"
            >${Ut("google_slider_card.bold_text")}</span
          >
          <ha-switch
            .checked=${null!==(i=this._config.bold_text)&&void 0!==i&&i}
            configValue="bold_text"
            @change=${this._valueChanged}
          />
        </div>
      </div>
    `:K``}};On.styles=p`
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
  `,l([bt({attribute:!1})],On.prototype,"hass",void 0),l([yt()],On.prototype,"_config",void 0),On=l([mt("google-slider-card-editor")],On);const Tn={type:"custom:google-control-card",on_text:"Lights on",off_text:"Lights off"};let Sn=class extends pt{static getStubConfig(){return{type:"custom:google-lights-card",on_text:"Lights on",off_text:"Lights off"}}async setConfig(t){if(!t)throw new Error("Invalid configuration");this._config=t}async updated(t){if(t.has("hass")){if(this._card)this._card.hass=this.hass;else if(this._config){const t=this.mapTemplate(this._config),e=un.load(t),i=await window.loadCardHelpers(),n=await i.createCardElement(e);n.classList.add("ripple-card"),n.hass=this.hass,this._card=n,this.requestUpdate()}console.log("This LOG is for debug purpose, Google Lights"),console.log(this.hass)}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("google-lights-card-editor")}mapTemplate(t){const e=function(t){return`type: custom:mod-card\nstyle: |\n  ha-card {\n    margin-bottom: 0px;\n  }\ncard:\n  type: vertical-stack\n  cards:\n    - type: custom:mod-card\n      style:\n        hui-horizontal-stack-card:\n          $: |\n            #root > button-card {\n              margin: 0px;\n            }\n      card:\n        type: horizontal-stack\n        cards:\n          - type: custom:button-card\n            show_icon: false\n            show_label: false\n            show_name: true\n            triggers_update: all\n            name: |\n              [[[\n                return '${t.on_text}'\n              ]]]\n            styles:\n              card:\n                - height: 65px\n                - padding: 0px\n                - margin: 0px\n                - border-top-left-radius: 999vh\n                - border-bottom-left-radius: 999vh\n                - border-top-right-radius: 0vh\n                - border-bottom-right-radius: 0vh\n                - border: 1px solid\n                - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05)\n                - font-size: 15px\n                - font-weight: 600\n                - border-color: |\n                    [[[\n                      const on = Object.values(hass.states)\n                        .filter(e => e.entity_id.startsWith('light.') && e.state === 'on')\n                        .length > 0;\n                      //return on\n                      //  ? (hass.themes.darkMode ? "#fae093": "#745b00")\n                      //  : (hass.themes.darkMode ? "#1f2022": 'var(--md-sys-color-surface-variant)');\n                      return on\n                        ? (hass.themes.darkMode ? "#fae093": "#745b00")\n                        : 'var(--md-sys-color-surface-container)';\n                    ]]]\n                - background-color: |\n                    [[[\n                      const on = Object.values(hass.states)\n                        .filter(e => e.entity_id.startsWith('light.') && e.state === 'on')\n                        .length > 0;\n                      //return on\n                      //  ? (hass.themes.darkMode ? "#50472a": "#ffe083")\n                      //  : (hass.themes.darkMode ? "#1f2022": 'var(--md-sys-color-surface-variant)');\n                      return on\n                        ? (hass.themes.darkMode ? "#50472a": "#ffe083")\n                        : 'var(--md-sys-color-surface-container)';\n                    ]]]\n              name:\n                - color: |\n                    [[[\n                      const on = Object.values(hass.states)\n                        .filter(e => e.entity_id.startsWith('light.') && e.state === 'on')\n                        .length > 0;\n                      //return on\n                      //  ? (hass.themes.darkMode ? "#fce08c" : "#745b00")\n                      //  : (hass.themes.darkMode ? "#e3e3e5" : 'var(--md-sys-color-on-surface-variant)');\n                      return on\n                        ? (hass.themes.darkMode ? "#fce08c" : "#745b00")\n                        : 'var(--md-sys-color-on-surface-variant)';\n                    ]]]\n            tap_action:\n              action: call-service\n              service: light.turn_on\n              data:\n                entity_id: all\n          - type: custom:button-card\n            show_icon: false\n            show_label: false\n            show_name: true\n            triggers_update: all\n            name: |\n              [[[\n                return '${t.off_text}'\n              ]]]\n            styles:\n              card:\n                - height: 65px\n                - padding: 0px\n                - margin: 0px\n                - border-top-right-radius: 999vh\n                - border-bottom-right-radius: 999vh\n                - border-top-left-radius: 0vh\n                - border-bottom-left-radius: 0vh\n                - border: 1px solid\n                - font-size: 15px\n                - font-weight: 600\n                - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05)\n                - border-color: |\n                    [[[\n                      const allOff = Object.values(hass.states)\n                        .filter(e => e.entity_id.startsWith('light.') && e.state === 'on')\n                        .length === 0;\n                      //return allOff\n                      //  ? (hass.themes.darkMode ? "#fae093": "#745b00")\n                      //  : (hass.themes.darkMode ? "#1f2022": 'var(--md-sys-color-surface-variant)');\n                      return allOff\n                        ? (hass.themes.darkMode ? "#fae093": "#745b00")\n                        : 'var(--md-sys-color-surface-container)';\n                    ]]]\n                - background-color: |\n                    [[[\n                      const allOff = Object.values(hass.states)\n                        .filter(e => e.entity_id.startsWith('light.') && e.state === 'on')\n                        .length === 0;\n                      //return allOff\n                      //  ? (hass.themes.darkMode ? "#50472a": "#ffe083")\n                      //  : (hass.themes.darkMode ? "#1f2022": 'var(--md-sys-color-surface-variant)');\n                      return allOff\n                        ? (hass.themes.darkMode ? "#50472a": "#ffe083")\n                        : "var(--md-sys-color-surface-container)";\n                    ]]]\n              name:\n                - color: |\n                    [[[\n                      const allOff = Object.values(hass.states)\n                        .filter(e => e.entity_id.startsWith('light.') && e.state === 'on')\n                        .length === 0;\n                      //return allOff\n                      //  ? (hass.themes.darkMode ? "#fce08c" : "#745b00")\n                      //  : (hass.themes.darkMode ? "#e3e3e5" : 'var(--md-sys-color-on-surface-variant)');\n                      return allOff\n                        ? (hass.themes.darkMode ? "#fce08c" : "#745b00")\n                        : 'var(--md-sys-color-on-surface-variant)';\n                    ]]]\n            tap_action:\n              action: call-service\n              service: light.turn_off\n              data:\n                entity_id: all\n`}(t);return e}_handleClick(t){const e=t.target.closest(".ripple-card");e&&Kt(e,t)}render(){return this._card?K`
      <div style="margin: 0px 0px;" @mousedown=${this._handleClick}>
        ${this._card}
      </div>
    `:K`<ha-card>Loading…</ha-card>`}createRenderRoot(){return this}};Sn.styles=p`
    .ripple-card {
      position: relative;
      overflow: hidden;
    }
  `,l([bt({attribute:!1})],Sn.prototype,"hass",void 0),l([yt()],Sn.prototype,"_config",void 0),l([yt()],Sn.prototype,"_card",void 0),Sn=l([mt("google-lights-card")],Sn);let Pn=class extends pt{constructor(){super(...arguments),this._config=Tn,this._valueChanged=t=>{var e,i;const n=t.target,o=n.getAttribute("configValue"),s=t instanceof CustomEvent&&void 0!==(null===(e=t.detail)||void 0===e?void 0:e.value)?t.detail.value:null!==(i=n.checked)&&void 0!==i?i:n.value;o&&this._config[o]!==s&&(this._config=Object.assign(Object.assign({},this._config),{[o]:s}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}}setConfig(t){this._config=Object.assign({},t)}async firstUpdated(){const t=await window.loadCardHelpers(),e=await t.createCardElement({type:"entities",entities:[]});await e.constructor.getConfigElement()}render(){return this._config&&this.hass?K`
      <div class="form">
        <span class="text-label"
          >${Ut("google_lights_card.on_text")}</span
        >
        <ha-textfield
          label="${Ut("google_lights_card.on_text")}"
          .value=${this._config.on_text||""}
          configValue="on_text"
          @input=${this._valueChanged}
          placeholder="e.g. Lights On"
        ></ha-textfield>

        <span class="text-label"
          >${Ut("google_lights_card.off_text")}</span
        >
        <ha-textfield
          label="${Ut("google_lights_card.off_text")}"
          .value=${this._config.off_text||""}
          configValue="off_text"
          @input=${this._valueChanged}
          placeholder="e.g. Lights Off"
        ></ha-textfield>
      </div>
    `:K``}};Pn.styles=p`
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
  `,l([bt({attribute:!1})],Pn.prototype,"hass",void 0),l([yt()],Pn.prototype,"_config",void 0),Pn=l([mt("google-lights-card-editor")],Pn);let In=class extends pt{constructor(){super(...arguments),this._closing=!1,this._volume=0,this._progress=0,this._isPlaying=!1,this._isPaused=!1,this._isOff=!0,this._isConnected=!1,this._isDragging=!1,this._animationFrameId=null,this._lastPosition=0,this._lastDuration=1,this._lastFrameTime=0,this._dragPositionSeconds=0,this._touchStartX=null,this._touchCurrentX=null,this._swipeThreshold=80,this._swipeEdge=50,this._onTouchStart=t=>{this._touchStartX=t.changedTouches[0].clientX,this._touchCurrentX=this._touchStartX},this._onTouchMove=t=>{this._touchCurrentX=t.changedTouches[0].clientX,null!==this._touchStartX&&this._touchStartX<this._swipeEdge&&t.preventDefault()},this._onTouchEnd=()=>{if(null===this._touchStartX||null===this._touchCurrentX)return;const t=this._touchCurrentX-this._touchStartX;this._touchStartX<this._swipeEdge&&t>this._swipeThreshold&&this._close(),this._touchStartX=null,this._touchCurrentX=null}}_close(){this._closing=!0,setTimeout(()=>{this.dispatchEvent(new CustomEvent("close-overlay",{bubbles:!0,composed:!0}))},200)}_callService(t,e={}){if(this.entity)try{this.hass.callService("media_player",t,Object.assign({entity_id:this.entity},e))}catch(t){console.error("Error calling service:",t)}else console.error("No entity defined for service call")}_computeServerPosition(t){var e,i;const n=Number(null===(e=null==t?void 0:t.attributes)||void 0===e?void 0:e.media_position)||0,o=null===(i=null==t?void 0:t.attributes)||void 0===i?void 0:i.media_position_updated_at;if(!o)return n;const s=Date.parse(o);if(isNaN(s))return n;const a=Date.now();return n+Math.max(0,(a-s)/1e3)}updated(t){var e,i,n;if(super.updated(t),!this.hass||!this.entity)return;const o=null===(i=null===(e=this.hass)||void 0===e?void 0:e.states)||void 0===i?void 0:i[this.entity];if(o&&t.has("hass")){const t=null!==(n=o.attributes.volume_level)&&void 0!==n?n:0;Math.abs(t-this._volume)>.01&&(this._volume=t);const e=Number(o.attributes.media_duration)||1,i=this._computeServerPosition(o);this._lastDuration=Math.max(e,1),this._lastPosition=Math.min(i,this._lastDuration);const s=Math.round(this._lastPosition/this._lastDuration*1e3)/10;Math.abs(s-this._progress)>.1&&(this._progress=s),this.changePlyingState(o),this._isConnected=["playing","paused","idle"].includes(o.state),this._isOff="off"===o.state,this._lastFrameTime=Date.now()}}changePlyingState(t){const e="playing"===t.state&&t.attributes.media_title,i="paused"===t.state,n=this._isPlaying;this._isPaused=i,e!==n&&(this._isPlaying=e,this._isPlaying&&null===this._animationFrameId&&!this._isDragging?this._animateProgress():this._isPlaying||null===this._animationFrameId||(cancelAnimationFrame(this._animationFrameId),this._animationFrameId=null))}_animateProgress(){const t=()=>{if(!this._isPlaying||this._isDragging)return void(this._animationFrameId=null);const e=Date.now(),i=(e-this._lastFrameTime)/1e3;this._lastFrameTime=e,this._lastPosition=Math.min(this._lastPosition+i,this._lastDuration),this._progress=this._lastPosition/Math.max(1,this._lastDuration)*100,this.requestUpdate(),this._animationFrameId=requestAnimationFrame(t)};null===this._animationFrameId&&(this._lastFrameTime=Date.now(),this._animationFrameId=requestAnimationFrame(t))}_startSeek(t){t.preventDefault();const e=this.renderRoot.querySelector(".progress-bar");if(!e)return;this._isDragging=!0;const i=t=>{var i,n,o;const s=e.getBoundingClientRect(),a=(t=>t.touches?t.touches[0].clientX:t.clientX)(t);let r=(a-s.left)/s.width;r=Math.min(Math.max(r,0),1);const l=null===(n=null===(i=this.hass)||void 0===i?void 0:i.states)||void 0===n?void 0:n[this.entity],c=Number(null===(o=null==l?void 0:l.attributes)||void 0===o?void 0:o.media_duration)||1;this._dragPositionSeconds=r*c,this._progress=100*r;const d=e.querySelector(".progress-fill"),h=e.querySelector(".progress-thumb");d&&(d.style.width=`${this._progress}%`),h&&(h.style.left=`calc(${this._progress}% - 6px)`)},n=t=>i(t),o=t=>{var e,s,a;i(t);const r=null===(s=null===(e=this.hass)||void 0===e?void 0:e.states)||void 0===s?void 0:s[this.entity],l=Number(null===(a=null==r?void 0:r.attributes)||void 0===a?void 0:a.media_duration)||1,c=this._dragPositionSeconds;this._callService("media_seek",{seek_position:c}),this._lastPosition=Math.min(c,l),this._lastDuration=Math.max(l,1),this._lastFrameTime=Date.now(),this._progress=this._lastPosition/this._lastDuration*100,this._isDragging=!1,window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",o),window.removeEventListener("touchmove",n),window.removeEventListener("touchend",o)};window.addEventListener("mousemove",n),window.addEventListener("mouseup",o),window.addEventListener("touchmove",n,{passive:!1}),window.addEventListener("touchend",o),i(t)}connectedCallback(){super.connectedCallback(),this.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.addEventListener("touchmove",this._onTouchMove,{passive:!1}),this.addEventListener("touchend",this._onTouchEnd)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("touchstart",this._onTouchStart),this.removeEventListener("touchmove",this._onTouchMove),this.removeEventListener("touchend",this._onTouchEnd),null!==this._animationFrameId&&(cancelAnimationFrame(this._animationFrameId),this._animationFrameId=null)}_startDrag(t){try{t.preventDefault(),t.stopPropagation();const e=this.renderRoot.querySelector(".volume-card");if(!e)return;const i=t=>{const i=e.getBoundingClientRect();let n=((t instanceof TouchEvent?t.touches[0].clientX:t.clientX)-i.left)/i.width;n=Math.min(Math.max(n,0),1),this._volume=n,this._callService("volume_set",{volume_level:n})},n=t=>{t.preventDefault(),i(t)},o=t=>{t.preventDefault(),window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",o),window.removeEventListener("touchmove",n),window.removeEventListener("touchend",o)};window.addEventListener("mousemove",n,{passive:!1}),window.addEventListener("mouseup",o),window.addEventListener("touchmove",n,{passive:!1}),window.addEventListener("touchend",o)}catch(t){console.error("Error updating volume:",t)}}_onClick(t){Kt(t.currentTarget,t)}_onRemoteClick(t){this._onClick(t),this._moreInfo()}_moreInfo(){var t;if(!this.hass||!this.entity)return;this._close();const e=new CustomEvent("hass-more-info",{detail:{entityId:this.entity},bubbles:!0,composed:!0});null===(t=document.querySelector("home-assistant"))||void 0===t||t.dispatchEvent(e)}async _turnOnDevice(t){this._onClick(t),this._callService("turn_on")}_stopCast(t){this._onClick(t);const e=this.hass.states[this.entity];if(!e)return;e.attributes.supported_features&&8192&e.attributes.supported_features?this._callService("media_stop"):this._callService("turn_off")}_togglePlay(t){if(t&&(t.preventDefault(),t.stopPropagation()),!this.hass||!this.entity)return;const e=this._isPlaying?"media_pause":"media_play";this._isPlaying=!this._isPlaying,this._isPaused=!this._isPaused,this.requestUpdate(),this.hass.callService("media_player",e,{entity_id:this.entity}).then(()=>{this._isPlaying?this._animateProgress():cancelAnimationFrame(this._animationFrameId)}).catch(t=>console.error(`Error calling ${e}:`,t))}_settings(){var t;if(!this.hass||!this.entity)return;if(!this.hass.states[this.entity])return;const e=null===(t=this.hass.entities)||void 0===t?void 0:t[this.entity],i=null==e?void 0:e.device_id;this._close(),setTimeout(()=>{i?Bt(0,`/config/devices/device/${i}`):this._moreInfo()},200)}openGoogleHome(t){this._onClick(t);const e=function(){const t=navigator.userAgent||"";return/Android/i.test(t)?"app://com.google.android.apps.chromecast.app":/iPhone|iPad|iPod/i.test(t)?"googlehome://":"https://home.google.com/"}();window.location.href=e}openLinks(t,e){"YouTube"==e&&this.openYouTube(t),"Spotify"==e&&this.openSpotify(t),"Netflix"==e&&this.openNetflix(t)}openYouTube(t){this._onClick(t);const e=function(){const t=navigator.userAgent||"";return/Android/i.test(t)?"app://com.google.android.youtube":/iPhone|iPad|iPod/i.test(t)?"youtube://":"https://www.youtube.com/"}();window.location.href=e}openSpotify(t){this._onClick(t);const e=function(){const t=navigator.userAgent||"";return/Android/i.test(t)?"app://com.spotify.music":/iPhone|iPad|iPod/i.test(t)?"spotify://":"https://open.spotify.com/"}();window.location.href=e}openNetflix(t){this._onClick(t);const e=function(){const t=navigator.userAgent||"";return/Android/i.test(t)?"app://com.netflix.mediaclient":/iPhone|iPad|iPod/i.test(t)?"nflx://":"https://www.netflix.com/"}();window.location.href=e}_renderAppIcon(t,e){switch(t){case"Spotify":return K`<img
          src="https://raw.githubusercontent.com/giovannilamarmora/lovelace-google-components/refs/heads/master/src/shared/assets/logo/Spotify.webp"
          width="24"
          height="24"
          style="border-radius: 50px; object-fit: cover;z-index: 1;"
        />`;case"YouTube":return K`<img
          src="https://raw.githubusercontent.com/giovannilamarmora/lovelace-google-components/refs/heads/master/src/shared/assets/logo/YouTube.png"
          width="24"
          height="24"
          style="border-radius: 50px; object-fit: cover;"
        />`;case"Netflix":return K`<img
          src="https://raw.githubusercontent.com/giovannilamarmora/lovelace-google-components/refs/heads/master/src/shared/assets/logo/Netflix.webp"
          width="24"
          height="24"
          style="border-radius: 50px; object-fit: cover;"
        />`;default:return K`<ha-icon
          icon="m3r:play-circle"
          style="${e?"color: #e3e3e5;":"color: var(--md-sys-color-on-secondary-container)"}"
        ></ha-icon>`}}render(){var t,e,i,n,o;const s=this.hass.states[this.entity];if(!s)return K``;const{attributes:a}=s,r=ee(this._isPlaying,"playing"==s.state),l=ee(this._isPaused,"paused"==s.state),c=(r||l)&&a.media_title,d=Math.round(100*this._volume),h=null!==(t=a.media_title)&&void 0!==t?t:ee(this._isPlaying,"playing"==s.state)?Ut("google_media_overlay.media_card.playing"):Ut("google_media_overlay.media_card.no_content"),u=null!==(e=a.media_artist)&&void 0!==e?e:"",g=null!==(i=a.app_name)&&void 0!==i?i:"",p=a.entity_picture_local,f=p?`background-image: url(${p}); \n     background-size: cover; \n     background-position: center; \n     filter: brightness(0.4);`:"",m=this._isOff,_=(null===(o=null===(n=this.hass)||void 0===n?void 0:n.themes)||void 0===o?void 0:o.darkMode)?"dark":"light";return this._setStyleProperty("--volume-brightness","dark"==_?"brightness(0.7)":"brightness(1.05)"),K`
      <div class="overlay ${this._closing?"closing":""}">
        <div class="header">
          <div class="header-left">
            <ha-icon-button @click=${this._close} class="close-btn">
              <ha-icon
                icon="m3rf:close"
                style="color: var(--bsc-icon-color); justify-content: center; align-items: center; display: flex;"
                title="Close"
              ></ha-icon>
            </ha-icon-button>

            <span class="friendly-name">${a.friendly_name}</span>
          </div>
          <div class="header-right">
            <ha-icon-button @click=${this._settings} class="settings-btn">
              <ha-icon
                icon="m3r:settings"
                style="color: var(--bsc-icon-color); justify-content: center; align-items: center; display: flex;"
                title="Settings"
              ></ha-icon>
            </ha-icon-button>
            <ha-icon-button @click=${this._moreInfo} class="settings-btn">
              <ha-icon
                icon="mdi:dots-vertical"
                style="color: var(--bsc-icon-color); justify-content: center; align-items: center; display: flex;"
                title="Menu"
              ></ha-icon>
            </ha-icon-button>
          </div>
        </div>

        <!-- Video Player Card -->
        <div class="video-card">
          <div class="video-card-bg" style="${f}"></div>
          ${this._renderAppIcon(g,p)}
          
          ${m||!c?K``:K`<ha-icon
                  class="pause-button"
                  icon=${r?"mdi:pause":"mdi:play"}
                  @click=${t=>this._togglePlay(t)}
                  title=${r?"Pause":"Play"}
                  style=${`\n                    ${r?"":"border-radius: 50px;"}\n                    transition: width 1s ease-in-out, background-color 1s ease-in-out;\n                    background-color: ${s.attributes.media_title?"var(--md-sys-color-tertiary-container)":"var(--md-sys-color-secondary-container)"};\n                    color: ${s.attributes.media_title?"var(--md-sys-color-on-tertiary-container)":"var(--md-sys-color-on-secondary-container)"};\n                  `}
                >
                </ha-icon>`}

          <div class="video-info">
            <div
              class="video-title ellipsis"
              style="${p?"color: #e3e3e5;":"color: var(--md-sys-color-on-secondary-container)"}"
            >
              ${h}
            </div>
            <div
              class="video-channel"
              style="${p?"color: #e3e3e5;":"color: var(--md-sys-color-on-secondary-container)"}"
            >
              ${u}
            </div>
          </div>

          <!-- Video Controls -->
          <div class="video-controls">
            <ha-icon
              class="${m||!c?"disabled":""}"
              style="cursor: pointer; ${p?"color: #e3e3e5;":"color: var(--md-sys-color-on-secondary-container)"}"
              icon="m3r:skip-previous"
              @click=${()=>this._callService("media_previous_track")}
            ></ha-icon>
            <div
              class="progress-bar ${m||!c?"disabled":""}"
              @mousedown=${this._startSeek}
              @touchstart=${this._startSeek}
            >
              <div
                class="progress-fill"
                style="width: ${this._progress}%; ${p?"background-color: #fff;":"background-color: var(--md-sys-color-on-secondary-container);"}"
              ></div>
              <div
                class="progress-thumb"
                style="left: calc(${this._progress}% - 6px); ${p?"background-color: #fff; border: 1px solid #fff;":"background-color: var(--md-sys-color-on-secondary-container); border: 1px solid var(--md-sys-color-on-secondary-container);"}""
              ></div>
            </div>
            <ha-icon
              class="${m||!c?"disabled":""}"
              style="cursor: pointer; ${p?"color: #e3e3e5;":"color: var(--md-sys-color-on-secondary-container)"}"
              icon="m3r:skip-next"
              @click=${()=>this._callService("media_next_track")}
            ></ha-icon>
          </div>
        </div>

        ${d?K`<div
                class="volume-card"
                @mousedown=${this._startDrag}
                @touchstart=${this._startDrag}
              >
                <div
                  id="slider"
                  class="animate"
                  style="width: ${100*this._volume}%"
                ></div>
                <ha-icon class="volume-icon" icon="m3rf:volume-up"></ha-icon>
                <span class="volume-text" id="volumeText">${d}%</span>
              </div>`:K``}

        <!-- Menu Cards -->
        <div class="menu-card remote" @click=${this._onRemoteClick}>
          <ha-icon icon="m3o:google-tv-remote"></ha-icon>
          <span class="menu-text"
            >${Ut("google_media_overlay.remote")}</span
          >
        </div>

        ${m||!this._isConnected?K`<div class="menu-card link" @click=${this._turnOnDevice}>
                <ha-icon icon="m3r:cast"></ha-icon>
                <span class="menu-text"
                  >${Ut("google_media_overlay.cast")}</span
                >
              </div>`:K`<div
                class="menu-card cast"
                style="color: var(--md-sys-color-on-secondary-container)"
                @click=${this._stopCast}
              >
                <ha-icon icon="m3rf:cast"></ha-icon>
                <span class="menu-text"
                  >${Ut("google_media_overlay.stop_cast")}</span
                >
              </div>`}
        ${"YouTube"==g||"Spotify"==g||"Netflix"==g?K`<div
                class="menu-card link"
                @click=${t=>this.openLinks(t,g)}
              >
                <ha-icon icon="m3rf:open-in-new"></ha-icon>
                <span class="menu-text"
                  >${Ut("google_media_overlay.open")} ${g}</span
                >
              </div>`:K``}
        <div class="menu-card link" @click=${this.openGoogleHome}>
          <ha-icon icon="m3of:home-app-logo"></ha-icon>
          <span class="menu-text"
            >${Ut("google_media_overlay.open_google")}</span
          >
        </div>
      </div>
    `}_setStyleProperty(t,e,i=t=>t){null!=e&&""!==e&&this.style.setProperty(t,i(e))}};var Mn;In.styles=p`
    :host {
      -webkit-tap-highlight-color: transparent;
    }

    .overlay {
      font-family: "Google Sans", "Roboto", "Inter", sans-serif;
      position: fixed;
      inset: 0;
      /*background: var(--card-background-color, #121212);*/
      background: var(
        --view-background,
        var(--lovelace-background, var(--primary-background-color))
      );
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 14px; /* aggiornato */
      z-index: 9999;
      animation: fadeIn 0.3s ease;
      gap: 18px; /* spazio verticale tra blocchi */
    }

    .overlay.closing {
      animation: fadeOut 0.3s ease forwards;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .header-left .friendly-name {
      color: var(--primary-text-color);
      font-size: 20px;
      font-weight: 450;
    }

    .header-right {
      display: flex;
      gap: 10px;
    }

    .close-btn,
    .setting-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0; /* opzionale, riduce eventuali margini interni */
      width: 40px; /* puoi regolare la dimensione */
      height: 40px; /* così l'icona è perfettamente centrata */
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
        transform: translateY(0);
      }
      to {
        opacity: 0;
        transform: translateY(20px);
      }
    }

    /* Video Player Card */
    .video-card {
      background-color: var(--md-sys-color-surface-container);
      border-radius: 28px;
      padding: 18px;
      position: relative;
      height: 160px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-width: 500px;
      width: -webkit-fill-available;
    }

    .video-card-bg {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      filter: brightness(0.4);
      z-index: 0;
      border-radius: 28px;
    }

    .video-card-content {
      position: relative;
      z-index: 1;
    }

    .play-button {
      position: absolute;
      top: 20px;
      left: 20px;
      width: 48px;
      height: 48px;
      background-color: rgba(29, 27, 32, 0.8);
      border-radius: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      cursor: pointer;
      font-size: 20px;
    }

    .pause-button {
      position: absolute;
      top: calc(50% - 24px);
      right: 20px;
      /*background-color: var(--md-sys-color-secondary-container);
      background-color: var(--md-sys-color-tertiary-container);*/
      border-radius: 12px;
      padding: 12px 12px;
      font-size: 24px;
      /*color: var(--md-sys-color-on-secondary-container)
      color: var(--md-sys-color-on-tertiary-container);*/
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 4px;
      cursor: pointer;
    }

    .video-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1; /* Aggiungi questo */
      min-width: 0; /* Necessario per evitare overflow nel flex */
      margin-top: 30px;
      margin-right: 70px;
      z-index: 1;
    }

    .ellipsis {
      white-space: nowrap; /* forza il testo su una sola riga */
      overflow: hidden; /* nasconde l'eccesso */
      text-overflow: ellipsis; /* mostra i "..." alla fine */
    }

    .video-title {
      font-size: 18px;
      font-weight: 500;
      /*color: #1d1b20;*/
      margin-bottom: 4px;
      line-height: 1.2;
    }

    .video-channel {
      font-size: 14px;
      color: #49454f;
      font-weight: 400;
    }

    .video-controls {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 24px;
    }

    .control-btn {
      font-size: 32px;
      color: #49454f;
      cursor: pointer;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .progress-bar {
      flex: 1;
      height: 2px;
      background-color: #ccc;
      border-radius: 50px;
      position: relative;
      cursor: pointer;
      margin: 0px 30px;
    }

    .progress-fill {
      height: 100%;
      /*background-color: #6750a4;
      background-color: var(--md-sys-color-on-secondary-container);*/
      width: 0%;
      transition: width 0s linear;
      border-radius: 50px 0px 0px 50px;
    }

    .progress-thumb {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: var(--md-sys-color-on-secondary-container);
      border: 1px solid var(--md-sys-color-on-secondary-container);
      pointer-events: none; /* il drag si gestisce sul parent */
    }

    /* Volume Card */
    .volume-card {
      background-color: var(--md-sys-color-secondary-container);
      border-radius: 50px;
      padding: 24px 18px;
      display: flex;
      align-items: center;
      gap: 16px;
      max-width: 500px;
      width: -webkit-fill-available;
      position: relative;
      overflow: hidden; /* importante per contenere l'overlay */
      z-index: 1;
      cursor: pointer; /* Aggiunto per indicare interattività */
    }

    /* overlay che schiarisce solo lo sfondo */
    .volume-card::before {
      content: "";
      position: absolute;
      inset: 0;
      background-color: var(--md-sys-color-secondary-container);
      filter: var(--volume-brightness); /* schiarisce solo il background */
      border-radius: inherit;
      z-index: 0; /* resta dietro */
    }

    /* contenuto sopra */
    .volume-card > * {
      position: relative;
      z-index: 1;
    }

    .volume-icon {
      color: var(--md-sys-color-on-secondary-container);
    }

    .volume-text {
      font-size: 16px;
      font-weight: 500;
      color: var(--md-sys-color-on-secondary-container);
    }

    #slider {
      height: 100%;
      position: absolute;
      background-color: var(--md-sys-color-secondary-container);
      z-index: 1; /* sopra lo sfondo schiarito */
      left: 0;
      top: 0;
      /*right: 50%;*/
      width: 0%;
      border-radius: 50px 0px 0px 50px;
    }

    #slider.animate {
      transition:
        width 0s ease,
        background-color 1s ease,
        filter 1s ease;
    }

    /* Menu Cards */
    .menu-card {
      /*margin-top: -20px;
      margin-bottom: -20px;
      margin: -20px 0px;*/
      border-radius: 14px;
      padding: 24px 18px;
      display: flex;
      align-items: center;
      gap: 16px;
      cursor: pointer;
      transition: all 0.2s ease;
      max-width: 500px;
      width: -webkit-fill-available;
    }

    .menu-card.remote {
      background-color: var(--md-sys-color-surface-container);
    }

    .menu-card.cast {
      background-color: var(--md-sys-color-secondary-container);
      border-radius: 50px;
    }

    .menu-card.link {
      background-color: var(--md-sys-color-surface-container);
    }

    .menu-text {
      font-size: 15px;
      font-weight: 410;
      letter-spacing: 0.1px;
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

    .disabled,
    div.disabled,
    button:disabled,
    input:disabled,
    select:disabled,
    textarea:disabled {
      color: #888888 !important;
      cursor: not-allowed !important;
      opacity: 0.6 !important;
    }
  `,l([bt({attribute:!1})],In.prototype,"hass",void 0),l([bt()],In.prototype,"entity",void 0),l([yt()],In.prototype,"_closing",void 0),l([yt()],In.prototype,"_volume",void 0),l([yt()],In.prototype,"_progress",void 0),l([yt()],In.prototype,"_isPlaying",void 0),l([yt()],In.prototype,"_isPaused",void 0),l([yt()],In.prototype,"_isOff",void 0),l([yt()],In.prototype,"_isConnected",void 0),l([yt()],In.prototype,"_isDragging",void 0),In=l([mt("google-media-overlay")],In),console.info(`%c Google Component %c ${Ut("common.version")} ${a}    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),customElements.define("google-slider-card",bn),customElements.get("google-slider-card-editor")||customElements.define("google-slider-card-editor",On),customElements.get("google-button-card")||customElements.define("google-button-card",de),customElements.get("google-button-card-editor")||customElements.define("google-button-card-editor",Cn),customElements.get("google-dashboard-card")||customElements.define("google-dashboard-card",fn),customElements.get("google-dashboard-card-editor")||customElements.define("google-dashboard-card-editor",mn),customElements.get("google-climate-card")||customElements.define("google-climate-card",wn),customElements.get("google-climate-card-editor")||customElements.define("google-climate-card-editor",xn),customElements.get("google-control-card")||customElements.define("google-control-card",An),customElements.get("google-control-card-editor")||customElements.define("google-control-cardeditor",En),customElements.get("google-lights-card")||customElements.define("google-lights-card",Sn),customElements.get("google-lights-card-editor")||customElements.define("google-lights-cardeditor",Pn),customElements.get("google-media-overlay")||customElements.define("google-media-overlay",In),window.customCards=null!==(Mn=window.customCards)&&void 0!==Mn?Mn:[],window.customCards.push({type:"google-slider-card",name:"Google Slider Card",preview:!0,description:"A custom slider card inspired by Google Home UI, offering smooth control and visual feedback for dimmers, lights, and other numeric entities. Designed with a clean and modern interface to blend into any dashboard."}),window.customCards.push({type:"google-button-card",name:"Google Button Card",preview:!0,description:"A modern, theme-aware button card inspired by Google’s design. Now stable and production-ready."}),window.customCards.push({type:"google-dashboard-card",name:"Google Dashboard Card",preview:!0,description:"A customizable dashboard card inspired by Google's Material Design. Perfect for building modern, responsive Home Assistant interfaces."}),window.customCards.push({type:"google-climate-card",name:"Google Climate Card",preview:!0,description:"A climate card inspired by Google's design, providing intuitive control and status display for HVAC devices."}),window.customCards.push({type:"google-control-card",name:"Google Control Card",preview:!0,description:"A control card inspired by Google's design, offering a sleek interface to interact with entities like switches, lights, and scenes in Home Assistant."}),window.customCards.push({type:"google-lights-card",name:"Google Lights Control",preview:!0,description:"A control card inspired by Google's design, offering a sleek interface to interact with lights in Home Assistant."});
