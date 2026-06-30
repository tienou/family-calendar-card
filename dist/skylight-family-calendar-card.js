let e;function t(e){return e&&e.__esModule?e.default:e}let i=globalThis,a=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap;class o{constructor(e,t,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(a&&void 0===e){let i=void 0!==t&&1===t.length;i&&(e=r.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(t,e))}return e}toString(){return this.cssText}}let s=(e,...t)=>new o(1===e.length?e[0]:t.reduce((t,i,a)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[a+1],e[0]),e,n),l=a?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t,i="";for(let t of e.cssRules)i+=t.cssText;return new o("string"==typeof(t=i)?t:t+"",void 0,n)})(e):e,{is:c,defineProperty:d,getOwnPropertyDescriptor:h,getOwnPropertyNames:u,getOwnPropertySymbols:m,getPrototypeOf:f}=Object,p=globalThis,v=p.trustedTypes,y=v?v.emptyScript:"",g=p.reactiveElementPolyfillSupport,w={toAttribute(e,t){switch(t){case Boolean:e=e?y:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},b=(e,t)=>!c(e,t),_={attribute:!0,type:String,converter:w,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;class k extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),a=this.getPropertyDescriptor(e,i,t);void 0!==a&&d(this.prototype,e,a)}}static getPropertyDescriptor(e,t,i){let{get:a,set:n}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:a,set(t){let r=a?.call(this);n?.call(this,t),this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;let e=f(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){let e=this.properties;for(let t of[...u(e),...m(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,i]of t)this.elementProperties.set(e,i)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let i of new Set(e.flat(1/0).reverse()))t.unshift(l(i));else void 0!==e&&t.push(l(e));return t}static _$Eu(e,t){let i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(a)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let a of t){let t=document.createElement("style"),n=i.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=a.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){let i=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,i);if(void 0!==a&&!0===i.reflect){let n=(void 0!==i.converter?.toAttribute?i.converter:w).toAttribute(t,i.type);this._$Em=e,null==n?this.removeAttribute(a):this.setAttribute(a,n),this._$Em=null}}_$AK(e,t){let i=this.constructor,a=i._$Eh.get(e);if(void 0!==a&&this._$Em!==a){let e=i.getPropertyOptions(a),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:w;this._$Em=a;let r=n.fromAttribute(t,e.type);this[a]=r??this._$Ej?.get(a)??r,this._$Em=null}}requestUpdate(e,t,i,a=!1,n){if(void 0!==e){let r=this.constructor;if(!1===a&&(n=this[e]),!(((i??=r.getPropertyOptions(e)).hasChanged??b)(n,t)||i.useDefault&&i.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:a,wrapped:n},r){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),!0!==n||void 0!==r)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===a&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,i]of e){let{wrapped:e}=i,a=this[t];!0!==e||this._$AL.has(t)||void 0===a||this.C(t,void 0,i,a)}}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}}k.elementStyles=[],k.shadowRootOptions={mode:"open"},k.elementProperties=new Map,k.finalized=new Map,g?.({ReactiveElement:k}),(p.reactiveElementVersions??=[]).push("2.1.2");let x=globalThis,A=e=>e,D=x.trustedTypes,E=D?D.createPolicy("lit-html",{createHTML:e=>e}):void 0,F="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+T,S=`<${C}>`,M=document,O=()=>M.createComment(""),B=e=>null===e||"object"!=typeof e&&"function"!=typeof e,I=Array.isArray,N="[ 	\n\f\r]",$=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,L=/>/g,H=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,j=/"/g,V=/^(?:script|style|textarea|title)$/i,W=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),P=W(1),U=(W(2),W(3),Symbol.for("lit-noChange")),Q=Symbol.for("lit-nothing"),q=new WeakMap,Y=M.createTreeWalker(M,129);function J(e,t){if(!I(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(t):t}class Z{constructor({strings:e,_$litType$:t},i){let a;this.parts=[];let n=0,r=0,o=e.length-1,s=this.parts,[l,c]=((e,t)=>{let i=e.length-1,a=[],n,r=2===t?"<svg>":3===t?"<math>":"",o=$;for(let t=0;t<i;t++){let i=e[t],s,l,c=-1,d=0;for(;d<i.length&&(o.lastIndex=d,null!==(l=o.exec(i)));)d=o.lastIndex,o===$?"!--"===l[1]?o=z:void 0!==l[1]?o=L:void 0!==l[2]?(V.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=H):void 0!==l[3]&&(o=H):o===H?">"===l[0]?(o=n??$,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,s=l[1],o=void 0===l[3]?H:'"'===l[3]?j:R):o===j||o===R?o=H:o===z||o===L?o=$:(o=H,n=void 0);let h=o===H&&e[t+1].startsWith("/>")?" ":"";r+=o===$?i+S:c>=0?(a.push(s),i.slice(0,c)+F+i.slice(c)+T+h):i+T+(-2===c?t:h)}return[J(e,r+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),a]})(e,t);if(this.el=Z.createElement(l,i),Y.currentNode=this.el.content,2===t||3===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(a=Y.nextNode())&&s.length<o;){if(1===a.nodeType){if(a.hasAttributes())for(let e of a.getAttributeNames())if(e.endsWith(F)){let t=c[r++],i=a.getAttribute(e).split(T),o=/([.?@])?(.*)/.exec(t);s.push({type:1,index:n,name:o[2],strings:i,ctor:"."===o[1]?et:"?"===o[1]?ei:"@"===o[1]?ea:ee}),a.removeAttribute(e)}else e.startsWith(T)&&(s.push({type:6,index:n}),a.removeAttribute(e));if(V.test(a.tagName)){let e=a.textContent.split(T),t=e.length-1;if(t>0){a.textContent=D?D.emptyScript:"";for(let i=0;i<t;i++)a.append(e[i],O()),Y.nextNode(),s.push({type:2,index:++n});a.append(e[t],O())}}}else if(8===a.nodeType)if(a.data===C)s.push({type:2,index:n});else{let e=-1;for(;-1!==(e=a.data.indexOf(T,e+1));)s.push({type:7,index:n}),e+=T.length-1}n++}}static createElement(e,t){let i=M.createElement("template");return i.innerHTML=e,i}}function K(e,t,i=e,a){if(t===U)return t;let n=void 0!==a?i._$Co?.[a]:i._$Cl,r=B(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(e))._$AT(e,i,a),void 0!==a?(i._$Co??=[])[a]=n:i._$Cl=n),void 0!==n&&(t=K(e,n._$AS(e,t.values),n,a)),t}class G{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,a=(e?.creationScope??M).importNode(t,!0);Y.currentNode=a;let n=Y.nextNode(),r=0,o=0,s=i[0];for(;void 0!==s;){if(r===s.index){let t;2===s.type?t=new X(n,n.nextSibling,this,e):1===s.type?t=new s.ctor(n,s.name,s.strings,this,e):6===s.type&&(t=new en(n,this,e)),this._$AV.push(t),s=i[++o]}r!==s?.index&&(n=Y.nextNode(),r++)}return Y.currentNode=M,a}p(e){let t=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,a){this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){let i;B(e=K(this,e,t))?e===Q||null==e||""===e?(this._$AH!==Q&&this._$AR(),this._$AH=Q):e!==this._$AH&&e!==U&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):I(i=e)||"function"==typeof i?.[Symbol.iterator]?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Q&&B(this._$AH)?this._$AA.nextSibling.data=e:this.T(M.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,a="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Z.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===a)this._$AH.p(t);else{let e=new G(a,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=q.get(e.strings);return void 0===t&&q.set(e.strings,t=new Z(e)),t}k(e){I(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,a=0;for(let n of e)a===t.length?t.push(i=new X(this.O(O()),this.O(O()),this,this.options)):i=t[a],i._$AI(n),a++;a<t.length&&(this._$AR(i&&i._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=A(e).nextSibling;A(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,a,n){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Q}_$AI(e,t=this,i,a){let n=this.strings,r=!1;if(void 0===n)(r=!B(e=K(this,e,t,0))||e!==this._$AH&&e!==U)&&(this._$AH=e);else{let a,o,s=e;for(e=n[0],a=0;a<n.length-1;a++)(o=K(this,s[i+a],t,a))===U&&(o=this._$AH[a]),r||=!B(o)||o!==this._$AH[a],o===Q?e=Q:e!==Q&&(e+=(o??"")+n[a+1]),this._$AH[a]=o}r&&!a&&this.j(e)}j(e){e===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class et extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Q?void 0:e}}class ei extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Q)}}class ea extends ee{constructor(e,t,i,a,n){super(e,t,i,a,n),this.type=5}_$AI(e,t=this){if((e=K(this,e,t,0)??Q)===U)return;let i=this._$AH,a=e===Q&&i!==Q||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==Q&&(i===Q||a);a&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class en{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){K(this,e)}}let er=x.litHtmlPolyfillSupport;er?.(Z,X),(x.litHtmlVersions??=[]).push("3.3.2");let eo=globalThis;class es extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{let a=i?.renderBefore??t,n=a._$litPart$;if(void 0===n){let e=i?.renderBefore??null;a._$litPart$=n=new X(t.insertBefore(O(),e),e,void 0,i??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return U}}es._$litElement$=!0,es.finalized=!0,eo.litElementHydrateSupport?.({LitElement:es});let el=eo.litElementPolyfillSupport;el?.({LitElement:es}),(eo.litElementVersions??=[]).push("4.2.2");class ec{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}let ed={},eh=(e=class extends ec{constructor(){super(...arguments),this.ot=ed}render(e,t){return t()}update(e,[t,i]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((e,t)=>e===this.ot[t]))return U}else if(this.ot===t)return U;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,i)}},(...t)=>({_$litDirective$:e,values:t}));var eu,em={};em=JSON.parse('{"name":"family-calendar-card","version":"2.1.0","description":"A family calendar card for Home Assistant with weather, event management, and touchscreen-friendly UI.","source":"src/index.js","module":"dist/skylight-family-calendar-card.js","targets":{"module":{"includeNodeModules":true,"optimize":true}},"scripts":{"watch":"parcel watch","build":"parcel build"},"repository":{"type":"git","url":"git+https://github.com/tienou/family-calendar-card.git"},"keywords":["lovelace","home-assistant","calendar","skylight","family"],"author":"Etienne Gaillard","license":"MIT","bugs":{"url":"https://github.com/tienou/family-calendar-card/issues"},"homepage":"https://github.com/tienou/family-calendar-card","devDependencies":{"@parcel/optimizer-data-url":"^2.12.0","@parcel/transformer-inline-string":"^2.11.0","parcel":"^2.16.3","svgo":"^3.3.2"},"dependencies":{"lit":"^3.1.2","luxon":"^3.4.4"}}');var ef={};function ep(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var a=i.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(a.key),a)}}function ev(e,t,i){return t&&ep(e.prototype,t),i&&ep(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function ey(){return(ey=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}function eg(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,eb(e,t)}function ew(e){return(ew=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function eb(e,t){return(eb=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function e_(e,t,i){return(e_=!function(){if("u"<typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}()?function(e,t,i){var a=[null];a.push.apply(a,t);var n=new(Function.bind.apply(e,a));return i&&eb(n,i.prototype),n}:Reflect.construct.bind()).apply(null,arguments)}function ek(e){var t="function"==typeof Map?new Map:void 0;return(ek=function(e){if(null===e||-1===Function.toString.call(e).indexOf("[native code]"))return e;if("function"!=typeof e)throw TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,i)}function i(){return e_(e,arguments,ew(this).constructor)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),eb(i,e)})(e)}function ex(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}function eA(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}function eD(e,t){var i="u">typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(i)return(i=i.call(e)).next.bind(i);if(Array.isArray(e)||(i=function(e){if(e){if("string"==typeof e)return eA(e,void 0);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return eA(e,void 0)}}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(ef,"__esModule",{value:!0});var eE=function(e){function t(){return e.apply(this,arguments)||this}return eg(t,e),t}(ek(Error)),eF=function(e){function t(t){return e.call(this,"Invalid DateTime: "+t.toMessage())||this}return eg(t,e),t}(eE),eT=function(e){function t(t){return e.call(this,"Invalid Interval: "+t.toMessage())||this}return eg(t,e),t}(eE),eC=function(e){function t(t){return e.call(this,"Invalid Duration: "+t.toMessage())||this}return eg(t,e),t}(eE),eS=function(e){function t(){return e.apply(this,arguments)||this}return eg(t,e),t}(eE),eM=function(e){function t(t){return e.call(this,"Invalid unit "+t)||this}return eg(t,e),t}(eE),eO=function(e){function t(){return e.apply(this,arguments)||this}return eg(t,e),t}(eE),eB=function(e){function t(){return e.call(this,"Zone is an abstract class")||this}return eg(t,e),t}(eE),eI="numeric",eN="short",e$="long",ez={year:eI,month:eI,day:eI},eL={year:eI,month:eN,day:eI},eH={year:eI,month:eN,day:eI,weekday:eN},eR={year:eI,month:e$,day:eI},ej={year:eI,month:e$,day:eI,weekday:e$},eV={hour:eI,minute:eI},eW={hour:eI,minute:eI,second:eI},eP={hour:eI,minute:eI,second:eI,timeZoneName:eN},eU={hour:eI,minute:eI,second:eI,timeZoneName:e$},eQ={hour:eI,minute:eI,hourCycle:"h23"},eq={hour:eI,minute:eI,second:eI,hourCycle:"h23"},eY={hour:eI,minute:eI,second:eI,hourCycle:"h23",timeZoneName:eN},eJ={hour:eI,minute:eI,second:eI,hourCycle:"h23",timeZoneName:e$},eZ={year:eI,month:eI,day:eI,hour:eI,minute:eI},eK={year:eI,month:eI,day:eI,hour:eI,minute:eI,second:eI},eG={year:eI,month:eN,day:eI,hour:eI,minute:eI},eX={year:eI,month:eN,day:eI,hour:eI,minute:eI,second:eI},e0={year:eI,month:eN,day:eI,weekday:eN,hour:eI,minute:eI},e2={year:eI,month:e$,day:eI,hour:eI,minute:eI,timeZoneName:eN},e1={year:eI,month:e$,day:eI,hour:eI,minute:eI,second:eI,timeZoneName:eN},e3={year:eI,month:e$,day:eI,weekday:e$,hour:eI,minute:eI,timeZoneName:e$},e6={year:eI,month:e$,day:eI,weekday:e$,hour:eI,minute:eI,second:eI,timeZoneName:e$},e4=function(){function e(){}var t=e.prototype;return t.offsetName=function(e,t){throw new eB},t.formatOffset=function(e,t){throw new eB},t.offset=function(e){throw new eB},t.equals=function(e){throw new eB},ev(e,[{key:"type",get:function(){throw new eB}},{key:"name",get:function(){throw new eB}},{key:"ianaName",get:function(){return this.name}},{key:"isUniversal",get:function(){throw new eB}},{key:"isValid",get:function(){throw new eB}}]),e}(),e8=null,e5=function(e){function t(){return e.apply(this,arguments)||this}eg(t,e);var i=t.prototype;return i.offsetName=function(e,t){return ic(e,t.format,t.locale)},i.formatOffset=function(e,t){return im(this.offset(e),t)},i.offset=function(e){return-new Date(e).getTimezoneOffset()},i.equals=function(e){return"system"===e.type},ev(t,[{key:"type",get:function(){return"system"}},{key:"name",get:function(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}},{key:"isUniversal",get:function(){return!1}},{key:"isValid",get:function(){return!0}}],[{key:"instance",get:function(){return null===e8&&(e8=new t),e8}}]),t}(e4),e9=new Map,e7={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6},te=new Map,tt=function(e){function t(i){var a;return(a=e.call(this)||this).zoneName=i,a.valid=t.isValidZone(i),a}eg(t,e),t.create=function(e){var i=te.get(e);return void 0===i&&te.set(e,i=new t(e)),i},t.resetCache=function(){te.clear(),e9.clear()},t.isValidSpecifier=function(e){return this.isValidZone(e)},t.isValidZone=function(e){if(!e)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:e}).format(),!0}catch(e){return!1}};var i=t.prototype;return i.offsetName=function(e,t){return ic(e,t.format,t.locale,this.name)},i.formatOffset=function(e,t){return im(this.offset(e),t)},i.offset=function(e){if(!this.valid)return NaN;var t,i,a,n,r,o,s=new Date(e);if(isNaN(s))return NaN;var l=(t=this.name,void 0===(i=e9.get(t))&&(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),e9.set(t,i)),i),c=l.formatToParts?function(e,t){for(var i=e.formatToParts(t),a=[],n=0;n<i.length;n++){var r=i[n],o=r.type,s=r.value,l=e7[o];"era"===o?a[l]=s:tK(l)||(a[l]=parseInt(s,10))}return a}(l,s):(a=l.format(s).replace(/\u200E/g,""),r=(n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(a))[1],o=n[2],[n[3],r,o,n[4],n[5],n[6],n[7]]),d=c[0],h=c[1],u=c[2],m=c[3],f=c[4],p=c[5],v=c[6];"BC"===m&&(d=-Math.abs(d)+1);var y=ir({year:d,month:h,day:u,hour:24===f?0:f,minute:p,second:v,millisecond:0}),g=+s,w=g%1e3;return(y-(g-=w>=0?w:1e3+w))/6e4},i.equals=function(e){return"iana"===e.type&&e.name===this.name},ev(t,[{key:"type",get:function(){return"iana"}},{key:"name",get:function(){return this.zoneName}},{key:"isUniversal",get:function(){return!1}},{key:"isValid",get:function(){return this.valid}}]),t}(e4),ti=["base"],ta=["padTo","floor"],tn={},tr=new Map;function to(e,t){void 0===t&&(t={});var i=JSON.stringify([e,t]),a=tr.get(i);return void 0===a&&(a=new Intl.DateTimeFormat(e,t),tr.set(i,a)),a}var ts=new Map,tl=new Map,tc=null,td=new Map;function th(e){var t=td.get(e);return void 0===t&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),td.set(e,t)),t}var tu=new Map;function tm(e,t,i,a){var n=e.listingMode();return"error"===n?null:"en"===n?i(t):a(t)}var tf=function(){function e(e,t,i){this.padTo=i.padTo||0,this.floor=i.floor||!1,i.padTo,i.floor;var a=ex(i,ta);if(!t||Object.keys(a).length>0){var n,r,o,s=ey({useGrouping:!1},i);i.padTo>0&&(s.minimumIntegerDigits=i.padTo),this.inf=(void 0===(n=s)&&(n={}),r=JSON.stringify([e,n]),void 0===(o=ts.get(r))&&(o=new Intl.NumberFormat(e,n),ts.set(r,o)),o)}}return e.prototype.format=function(e){if(!this.inf)return t8(this.floor?Math.floor(e):ie(e,3),this.padTo);var t=this.floor?Math.floor(e):e;return this.inf.format(t)},e}(),tp=function(){function e(e,t,i){this.opts=i,this.originalZone=void 0;var a=void 0;if(this.opts.timeZone)this.dt=e;else if("fixed"===e.zone.type){var n=-1*(e.offset/60),r=n>=0?"Etc/GMT+"+n:"Etc/GMT"+n;0!==e.offset&&tt.create(r).valid?(a=r,this.dt=e):(a="UTC",this.dt=0===e.offset?e:e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone)}else"system"===e.zone.type?this.dt=e:"iana"===e.zone.type?(this.dt=e,a=e.zone.name):(a="UTC",this.dt=e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone);var o=ey({},this.opts);o.timeZone=o.timeZone||a,this.dtf=to(t,o)}var t=e.prototype;return t.format=function(){return this.originalZone?this.formatToParts().map(function(e){return e.value}).join(""):this.dtf.format(this.dt.toJSDate())},t.formatToParts=function(){var e=this,t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(function(t){if("timeZoneName"!==t.type)return t;var i=e.originalZone.offsetName(e.dt.ts,{locale:e.dt.locale,format:e.opts.timeZoneName});return ey({},t,{value:i})}):t},t.resolvedOptions=function(){return this.dtf.resolvedOptions()},e}(),tv=function(){function e(e,t,i){var a,n,r,o;this.opts=ey({style:"long"},i),!t&&t0()&&(this.rtf=(void 0===(a=i)&&(a={}),(n=a).base,r=JSON.stringify([e,ex(n,ti)]),void 0===(o=tl.get(r))&&(o=new Intl.RelativeTimeFormat(e,a),tl.set(r,o)),o))}var t=e.prototype;return t.format=function(e,t){return this.rtf?this.rtf.format(e,t):function(e,t,i,a){void 0===i&&(i="always"),void 0===a&&(a=!1);var n={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},r=-1===["hours","minutes","seconds"].indexOf(e);if("auto"===i&&r){var o="days"===e;switch(t){case 1:return o?"tomorrow":"next "+n[e][0];case -1:return o?"yesterday":"last "+n[e][0];case 0:return o?"today":"this "+n[e][0]}}var s=Object.is(t,-0)||t<0,l=Math.abs(t),c=1===l,d=n[e],h=a?c?d[1]:d[2]||d[1]:c?n[e][0]:e;return s?l+" "+h+" ago":"in "+l+" "+h}(t,e,this.opts.numeric,"long"!==this.opts.style)},t.formatToParts=function(e,t){return this.rtf?this.rtf.formatToParts(e,t):[]},e}(),ty={firstDay:1,minimalDays:4,weekend:[6,7]},tg=function(){function e(e,t,i,a,n){var r,o,s,l=function(e){var t=e.indexOf("-x-");-1!==t&&(e=e.substring(0,t));var i=e.indexOf("-u-");if(-1===i)return[e];try{a=to(e).resolvedOptions(),n=e}catch(t){var a,n,r=e.substring(0,i);a=to(r).resolvedOptions(),n=r}var o=a;return[n,o.numberingSystem,o.calendar]}(e),c=l[0],d=l[1],h=l[2];this.locale=c,this.numberingSystem=t||d||null,this.outputCalendar=i||h||null,this.weekSettings=a,this.intl=(r=this.locale,o=this.numberingSystem,((s=this.outputCalendar)||o)&&(r.includes("-u-")||(r+="-u"),s&&(r+="-ca-"+s),o&&(r+="-nu-"+o)),r),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=n,this.fastNumbersCached=null}e.fromOpts=function(t){return e.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)},e.create=function(t,i,a,n,r){void 0===r&&(r=!1);var o=t||t$.defaultLocale;return new e(o||(r?"en-US":tc||(tc=new Intl.DateTimeFormat().resolvedOptions().locale)),i||t$.defaultNumberingSystem,a||t$.defaultOutputCalendar,t6(n)||t$.defaultWeekSettings,o)},e.resetCache=function(){tc=null,tr.clear(),ts.clear(),tl.clear(),td.clear(),tu.clear()},e.fromObject=function(t){var i=void 0===t?{}:t,a=i.locale,n=i.numberingSystem,r=i.outputCalendar,o=i.weekSettings;return e.create(a,n,r,o)};var t=e.prototype;return t.listingMode=function(){var e=this.isEnglish(),t=(null===this.numberingSystem||"latn"===this.numberingSystem)&&(null===this.outputCalendar||"gregory"===this.outputCalendar);return e&&t?"en":"intl"},t.clone=function(t){return t&&0!==Object.getOwnPropertyNames(t).length?e.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,t6(t.weekSettings)||this.weekSettings,t.defaultToEN||!1):this},t.redefaultToEN=function(e){return void 0===e&&(e={}),this.clone(ey({},e,{defaultToEN:!0}))},t.redefaultToSystem=function(e){return void 0===e&&(e={}),this.clone(ey({},e,{defaultToEN:!1}))},t.months=function(e,t){var i=this;return void 0===t&&(t=!1),tm(this,e,iw,function(){var a="ja"===i.intl||i.intl.startsWith("ja-"),n=(t&=!a)?{month:e,day:"numeric"}:{month:e},r=t?"format":"standalone";if(!i.monthsCache[r][e]){var o=a?function(e){return i.dtFormatter(e,n).format()}:function(e){return i.extract(e,n,"month")};i.monthsCache[r][e]=function(e){for(var t=[],i=1;i<=12;i++){var a=a9.utc(2009,i,1);t.push(e(a))}return t}(o)}return i.monthsCache[r][e]})},t.weekdays=function(e,t){var i=this;return void 0===t&&(t=!1),tm(this,e,ix,function(){var a=t?{weekday:e,year:"numeric",month:"long",day:"numeric"}:{weekday:e},n=t?"format":"standalone";return i.weekdaysCache[n][e]||(i.weekdaysCache[n][e]=function(e){for(var t=[],i=1;i<=7;i++){var a=a9.utc(2016,11,13+i);t.push(e(a))}return t}(function(e){return i.extract(e,a,"weekday")})),i.weekdaysCache[n][e]})},t.meridiems=function(){var e=this;return tm(this,void 0,function(){return iA},function(){if(!e.meridiemCache){var t={hour:"numeric",hourCycle:"h12"};e.meridiemCache=[a9.utc(2016,11,13,9),a9.utc(2016,11,13,19)].map(function(i){return e.extract(i,t,"dayperiod")})}return e.meridiemCache})},t.eras=function(e){var t=this;return tm(this,e,iT,function(){var i={era:e};return t.eraCache[e]||(t.eraCache[e]=[a9.utc(-40,1,1),a9.utc(2017,1,1)].map(function(e){return t.extract(e,i,"era")})),t.eraCache[e]})},t.extract=function(e,t,i){var a=this.dtFormatter(e,t).formatToParts().find(function(e){return e.type.toLowerCase()===i});return a?a.value:null},t.numberFormatter=function(e){return void 0===e&&(e={}),new tf(this.intl,e.forceSimple||this.fastNumbers,e)},t.dtFormatter=function(e,t){return void 0===t&&(t={}),new tp(e,this.intl,t)},t.relFormatter=function(e){return void 0===e&&(e={}),new tv(this.intl,this.isEnglish(),e)},t.listFormatter=function(e){var t,i,a,n;return void 0===e&&(e={}),t=this.intl,void 0===(i=e)&&(i={}),(n=tn[a=JSON.stringify([t,i])])||(n=new Intl.ListFormat(t,i),tn[a]=n),n},t.isEnglish=function(){return"en"===this.locale||"en-us"===this.locale.toLowerCase()||th(this.intl).locale.startsWith("en-us")},t.getWeekSettings=function(){if(this.weekSettings)return this.weekSettings;if(!t2())return ty;var e=this.locale,t=tu.get(e);if(!t){var i=new Intl.Locale(e);"minimalDays"in(t="getWeekInfo"in i?i.getWeekInfo():i.weekInfo)||(t=ey({},ty,t)),tu.set(e,t)}return t},t.getStartOfWeek=function(){return this.getWeekSettings().firstDay},t.getMinDaysInFirstWeek=function(){return this.getWeekSettings().minimalDays},t.getWeekendDays=function(){return this.getWeekSettings().weekend},t.equals=function(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar},t.toString=function(){return"Locale("+this.locale+", "+this.numberingSystem+", "+this.outputCalendar+")"},ev(e,[{key:"fastNumbers",get:function(){return null==this.fastNumbersCached&&(this.fastNumbersCached=(!this.numberingSystem||"latn"===this.numberingSystem)&&("latn"===this.numberingSystem||!this.locale||this.locale.startsWith("en")||"latn"===th(this.locale).numberingSystem)),this.fastNumbersCached}}]),e}(),tw=null,tb=function(e){function t(t){var i;return(i=e.call(this)||this).fixed=t,i}eg(t,e),t.instance=function(e){return 0===e?t.utcInstance:new t(e)},t.parseSpecifier=function(e){if(e){var i=e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(i)return new t(id(i[1],i[2]))}return null};var i=t.prototype;return i.offsetName=function(){return this.name},i.formatOffset=function(e,t){return im(this.fixed,t)},i.offset=function(){return this.fixed},i.equals=function(e){return"fixed"===e.type&&e.fixed===this.fixed},ev(t,[{key:"type",get:function(){return"fixed"}},{key:"name",get:function(){return 0===this.fixed?"UTC":"UTC"+im(this.fixed,"narrow")}},{key:"ianaName",get:function(){return 0===this.fixed?"Etc/UTC":"Etc/GMT"+im(-this.fixed,"narrow")}},{key:"isUniversal",get:function(){return!0}},{key:"isValid",get:function(){return!0}}],[{key:"utcInstance",get:function(){return null===tw&&(tw=new t(0)),tw}}]),t}(e4),t_=function(e){function t(t){var i;return(i=e.call(this)||this).zoneName=t,i}eg(t,e);var i=t.prototype;return i.offsetName=function(){return null},i.formatOffset=function(){return""},i.offset=function(){return NaN},i.equals=function(){return!1},ev(t,[{key:"type",get:function(){return"invalid"}},{key:"name",get:function(){return this.zoneName}},{key:"isUniversal",get:function(){return!1}},{key:"isValid",get:function(){return!1}}]),t}(e4);function tk(e,t){if(tK(e)||null===e)return t;if(e instanceof e4)return e;if("string"==typeof e){var i=e.toLowerCase();return"default"===i?t:"local"===i||"system"===i?e5.instance:"utc"===i||"gmt"===i?tb.utcInstance:tb.parseSpecifier(i)||tt.create(e)}if(tG(e))return tb.instance(e);if("object"==typeof e&&"offset"in e&&"function"==typeof e.offset)return e;else return new t_(e)}var tx={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},tA={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},tD=tx.hanidec.replace(/[\[|\]]/g,"").split(""),tE=new Map;function tF(e,t){var i=e.numberingSystem;void 0===t&&(t="");var a=i||"latn",n=tE.get(a);void 0===n&&(n=new Map,tE.set(a,n));var r=n.get(t);return void 0===r&&(r=RegExp(""+tx[a]+t),n.set(t,r)),r}var tT,tC=function(){return Date.now()},tS="system",tM=null,tO=null,tB=null,tI=60,tN=null,t$=function(){function e(){}return e.resetCaches=function(){tg.resetCache(),tt.resetCache(),a9.resetCache(),tE.clear()},ev(e,null,[{key:"now",get:function(){return tC},set:function(e){tC=e}},{key:"defaultZone",get:function(){return tk(tS,e5.instance)},set:function(e){tS=e}},{key:"defaultLocale",get:function(){return tM},set:function(e){tM=e}},{key:"defaultNumberingSystem",get:function(){return tO},set:function(e){tO=e}},{key:"defaultOutputCalendar",get:function(){return tB},set:function(e){tB=e}},{key:"defaultWeekSettings",get:function(){return tN},set:function(e){tN=t6(e)}},{key:"twoDigitCutoffYear",get:function(){return tI},set:function(e){tI=e%100}},{key:"throwOnInvalid",get:function(){return tT},set:function(e){tT=e}}]),e}(),tz=function(){function e(e,t){this.reason=e,this.explanation=t}return e.prototype.toMessage=function(){return this.explanation?this.reason+": "+this.explanation:this.reason},e}(),tL=[0,31,59,90,120,151,181,212,243,273,304,334],tH=[0,31,60,91,121,152,182,213,244,274,305,335];function tR(e,t){return new tz("unit out of range","you specified "+t+" (of type "+typeof t+") as a "+e+", which is invalid")}function tj(e,t,i){var a=new Date(Date.UTC(e,t-1,i));e<100&&e>=0&&a.setUTCFullYear(a.getUTCFullYear()-1900);var n=a.getUTCDay();return 0===n?7:n}function tV(e,t){var i=it(e)?tH:tL,a=i.findIndex(function(e){return e<t}),n=t-i[a];return{month:a+1,day:n}}function tW(e,t){return(e-t+7)%7+1}function tP(e,t,i){void 0===t&&(t=4),void 0===i&&(i=1);var a,n=e.year,r=e.month,o=e.day,s=o+(it(n)?tH:tL)[r-1],l=tW(tj(n,r,o),i),c=Math.floor((s-l+14-t)/7);return c<1?c=is(a=n-1,t,i):c>is(n,t,i)?(a=n+1,c=1):a=n,ey({weekYear:a,weekNumber:c,weekday:l},ip(e))}function tU(e,t,i){void 0===t&&(t=4),void 0===i&&(i=1);var a,n=e.weekYear,r=e.weekNumber,o=e.weekday,s=tW(tj(n,1,t),i),l=ii(n),c=7*r+o-s-7+t;c<1?c+=ii(a=n-1):c>l?(a=n+1,c-=ii(n)):a=n;var d=tV(a,c),h=d.month,u=d.day;return ey({year:a,month:h,day:u},ip(e))}function tQ(e){var t=e.year,i=e.month,a=e.day+(it(t)?tH:tL)[i-1];return ey({year:t,ordinal:a},ip(e))}function tq(e){var t=e.year,i=tV(t,e.ordinal),a=i.month,n=i.day;return ey({year:t,month:a,day:n},ip(e))}function tY(e,t){if(!(!tK(e.localWeekday)||!tK(e.localWeekNumber)||!tK(e.localWeekYear)))return{minDaysInFirstWeek:4,startOfWeek:1};if(!tK(e.weekday)||!tK(e.weekNumber)||!tK(e.weekYear))throw new eS("Cannot mix locale-based week fields with ISO-based week fields");return tK(e.localWeekday)||(e.weekday=e.localWeekday),tK(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),tK(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}function tJ(e){var t=tX(e.year),i=t4(e.month,1,12),a=t4(e.day,1,ia(e.year,e.month));return t?i?!a&&tR("day",e.day):tR("month",e.month):tR("year",e.year)}function tZ(e){var t=e.hour,i=e.minute,a=e.second,n=e.millisecond,r=t4(t,0,23)||24===t&&0===i&&0===a&&0===n,o=t4(i,0,59),s=t4(a,0,59),l=t4(n,0,999);return r?o?s?!l&&tR("millisecond",n):tR("second",a):tR("minute",i):tR("hour",t)}function tK(e){return void 0===e}function tG(e){return"number"==typeof e}function tX(e){return"number"==typeof e&&e%1==0}function t0(){try{return"u">typeof Intl&&!!Intl.RelativeTimeFormat}catch(e){return!1}}function t2(){try{return"u">typeof Intl&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch(e){return!1}}function t1(e,t,i){if(0!==e.length)return e.reduce(function(e,a){var n=[t(a),a];return e&&i(e[0],n[0])===e[0]?e:n},null)[1]}function t3(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function t6(e){if(null==e)return null;if("object"!=typeof e)throw new eO("Week settings must be an object");if(!t4(e.firstDay,1,7)||!t4(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(function(e){return!t4(e,1,7)}))throw new eO("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function t4(e,t,i){return tX(e)&&e>=t&&e<=i}function t8(e,t){return void 0===t&&(t=2),e<0?"-"+(""+-e).padStart(t,"0"):(""+e).padStart(t,"0")}function t5(e){if(!tK(e)&&null!==e&&""!==e)return parseInt(e,10)}function t9(e){if(!tK(e)&&null!==e&&""!==e)return parseFloat(e)}function t7(e){if(!tK(e)&&null!==e&&""!==e)return Math.floor(1e3*parseFloat("0."+e))}function ie(e,t,i){void 0===i&&(i="round");var a=Math.pow(10,t);switch(i){case"expand":return e>0?Math.ceil(e*a)/a:Math.floor(e*a)/a;case"trunc":return Math.trunc(e*a)/a;case"round":return Math.round(e*a)/a;case"floor":return Math.floor(e*a)/a;case"ceil":return Math.ceil(e*a)/a;default:throw RangeError("Value rounding "+i+" is out of range")}}function it(e){return e%4==0&&(e%100!=0||e%400==0)}function ii(e){return it(e)?366:365}function ia(e,t){var i,a=(i=t-1)-12*Math.floor(i/12)+1;return 2===a?it(e+(t-a)/12)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][a-1]}function ir(e){var t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t)).setUTCFullYear(e.year,e.month-1,e.day),+t}function io(e,t,i){return-tW(tj(e,1,t),i)+t-1}function is(e,t,i){void 0===t&&(t=4),void 0===i&&(i=1);var a=io(e,t,i),n=io(e+1,t,i);return(ii(e)-a+n)/7}function il(e){return e>99?e:e>t$.twoDigitCutoffYear?1900+e:2e3+e}function ic(e,t,i,a){void 0===a&&(a=null);var n=new Date(e),r={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};a&&(r.timeZone=a);var o=ey({timeZoneName:t},r),s=new Intl.DateTimeFormat(i,o).formatToParts(n).find(function(e){return"timezonename"===e.type.toLowerCase()});return s?s.value:null}function id(e,t){var i=parseInt(e,10);Number.isNaN(i)&&(i=0);var a=parseInt(t,10)||0,n=i<0||Object.is(i,-0)?-a:a;return 60*i+n}function ih(e){var t=Number(e);if("boolean"==typeof e||""===e||!Number.isFinite(t))throw new eO("Invalid unit value "+e);return t}function iu(e,t){var i={};for(var a in e)if(t3(e,a)){var n=e[a];if(null==n)continue;i[t(a)]=ih(n)}return i}function im(e,t){var i=Math.trunc(Math.abs(e/60)),a=Math.trunc(Math.abs(e%60)),n=e>=0?"+":"-";switch(t){case"short":return""+n+t8(i,2)+":"+t8(a,2);case"narrow":return""+n+i+(a>0?":"+a:"");case"techie":return""+n+t8(i,2)+t8(a,2);default:throw RangeError("Value format "+t+" is out of range for property format")}}function ip(e){return["hour","minute","second","millisecond"].reduce(function(t,i){return t[i]=e[i],t},{})}var iv=["January","February","March","April","May","June","July","August","September","October","November","December"],iy=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ig=["J","F","M","A","M","J","J","A","S","O","N","D"];function iw(e){switch(e){case"narrow":return[].concat(ig);case"short":return[].concat(iy);case"long":return[].concat(iv);case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}var ib=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],i_=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],ik=["M","T","W","T","F","S","S"];function ix(e){switch(e){case"narrow":return[].concat(ik);case"short":return[].concat(i_);case"long":return[].concat(ib);case"numeric":return["1","2","3","4","5","6","7"];default:return null}}var iA=["AM","PM"],iD=["Before Christ","Anno Domini"],iE=["BC","AD"],iF=["B","A"];function iT(e){switch(e){case"narrow":return[].concat(iF);case"short":return[].concat(iE);case"long":return[].concat(iD);default:return null}}function iC(e,t){for(var i,a="",n=eD(e);!(i=n()).done;){var r=i.value;r.literal?a+=r.val:a+=t(r.val)}return a}var iS={D:ez,DD:eL,DDD:eR,DDDD:ej,t:eV,tt:eW,ttt:eP,tttt:eU,T:eQ,TT:eq,TTT:eY,TTTT:eJ,f:eZ,ff:eG,fff:e2,ffff:e3,F:eK,FF:eX,FFF:e1,FFFF:e6},iM=function(){function e(e,t){this.opts=t,this.loc=e,this.systemLoc=null}e.create=function(t,i){return void 0===i&&(i={}),new e(t,i)},e.parseFormat=function(e){for(var t=null,i="",a=!1,n=[],r=0;r<e.length;r++){var o=e.charAt(r);"'"===o?((i.length>0||a)&&n.push({literal:a||/^\s+$/.test(i),val:""===i?"'":i}),t=null,i="",a=!a):a||o===t?i+=o:(i.length>0&&n.push({literal:/^\s+$/.test(i),val:i}),i=o,t=o)}return i.length>0&&n.push({literal:a||/^\s+$/.test(i),val:i}),n},e.macroTokenToFormatOpts=function(e){return iS[e]};var t=e.prototype;return t.formatWithSystemDefault=function(e,t){return null===this.systemLoc&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,ey({},this.opts,t)).format()},t.dtFormatter=function(e,t){return void 0===t&&(t={}),this.loc.dtFormatter(e,ey({},this.opts,t))},t.formatDateTime=function(e,t){return this.dtFormatter(e,t).format()},t.formatDateTimeParts=function(e,t){return this.dtFormatter(e,t).formatToParts()},t.formatInterval=function(e,t){return this.dtFormatter(e.start,t).dtf.formatRange(e.start.toJSDate(),e.end.toJSDate())},t.resolvedOptions=function(e,t){return this.dtFormatter(e,t).resolvedOptions()},t.num=function(e,t,i){if(void 0===t&&(t=0),void 0===i&&(i=void 0),this.opts.forceSimple)return t8(e,t);var a=ey({},this.opts);return t>0&&(a.padTo=t),i&&(a.signDisplay=i),this.loc.numberFormatter(a).format(e)},t.formatDateTimeFromString=function(t,i){var a=this,n="en"===this.loc.listingMode(),r=this.loc.outputCalendar&&"gregory"!==this.loc.outputCalendar,o=function(e,i){return a.loc.extract(t,e,i)},s=function(e){return t.isOffsetFixed&&0===t.offset&&e.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,e.format):""},l=function(e,i){return n?iw(e)[t.month-1]:o(i?{month:e}:{month:e,day:"numeric"},"month")},c=function(e,i){return n?ix(e)[t.weekday-1]:o(i?{weekday:e}:{weekday:e,month:"long",day:"numeric"},"weekday")},d=function(i){var n=e.macroTokenToFormatOpts(i);return n?a.formatWithSystemDefault(t,n):i},h=function(e){return n?iT(e)[t.year<0?0:1]:o({era:e},"era")};return iC(e.parseFormat(i),function(e){switch(e){case"S":return a.num(t.millisecond);case"u":case"SSS":return a.num(t.millisecond,3);case"s":return a.num(t.second);case"ss":return a.num(t.second,2);case"uu":return a.num(Math.floor(t.millisecond/10),2);case"uuu":return a.num(Math.floor(t.millisecond/100));case"m":return a.num(t.minute);case"mm":return a.num(t.minute,2);case"h":return a.num(t.hour%12==0?12:t.hour%12);case"hh":return a.num(t.hour%12==0?12:t.hour%12,2);case"H":return a.num(t.hour);case"HH":return a.num(t.hour,2);case"Z":return s({format:"narrow",allowZ:a.opts.allowZ});case"ZZ":return s({format:"short",allowZ:a.opts.allowZ});case"ZZZ":return s({format:"techie",allowZ:a.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:a.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:a.loc.locale});case"z":return t.zoneName;case"a":return n?iA[t.hour<12?0:1]:o({hour:"numeric",hourCycle:"h12"},"dayperiod");case"d":return r?o({day:"numeric"},"day"):a.num(t.day);case"dd":return r?o({day:"2-digit"},"day"):a.num(t.day,2);case"c":case"E":return a.num(t.weekday);case"ccc":return c("short",!0);case"cccc":return c("long",!0);case"ccccc":return c("narrow",!0);case"EEE":return c("short",!1);case"EEEE":return c("long",!1);case"EEEEE":return c("narrow",!1);case"L":return r?o({month:"numeric",day:"numeric"},"month"):a.num(t.month);case"LL":return r?o({month:"2-digit",day:"numeric"},"month"):a.num(t.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return r?o({month:"numeric"},"month"):a.num(t.month);case"MM":return r?o({month:"2-digit"},"month"):a.num(t.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return r?o({year:"numeric"},"year"):a.num(t.year);case"yy":return r?o({year:"2-digit"},"year"):a.num(t.year.toString().slice(-2),2);case"yyyy":return r?o({year:"numeric"},"year"):a.num(t.year,4);case"yyyyyy":return r?o({year:"numeric"},"year"):a.num(t.year,6);case"G":return h("short");case"GG":return h("long");case"GGGGG":return h("narrow");case"kk":return a.num(t.weekYear.toString().slice(-2),2);case"kkkk":return a.num(t.weekYear,4);case"W":return a.num(t.weekNumber);case"WW":return a.num(t.weekNumber,2);case"n":return a.num(t.localWeekNumber);case"nn":return a.num(t.localWeekNumber,2);case"ii":return a.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return a.num(t.localWeekYear,4);case"o":return a.num(t.ordinal);case"ooo":return a.num(t.ordinal,3);case"q":return a.num(t.quarter);case"qq":return a.num(t.quarter,2);case"X":return a.num(Math.floor(t.ts/1e3));case"x":return a.num(t.ts);default:return d(e)}})},t.formatDurationFromString=function(t,i){var a=this,n="negativeLargestOnly"===this.opts.signMode?-1:1,r=function(e){switch(e[0]){case"S":return"milliseconds";case"s":return"seconds";case"m":return"minutes";case"h":return"hours";case"d":return"days";case"w":return"weeks";case"M":return"months";case"y":return"years";default:return null}},o=e.parseFormat(i),s=o.reduce(function(e,t){var i=t.literal,a=t.val;return i?e:e.concat(a)},[]),l=t.shiftTo.apply(t,s.map(r).filter(function(e){return e})),c={isNegativeDuration:l<0,largestUnit:Object.keys(l.values)[0]};return iC(o,function(e){var t=r(e);if(!t)return e;var i,o=c.isNegativeDuration&&t!==c.largestUnit?n:1;return i="negativeLargestOnly"===a.opts.signMode&&t!==c.largestUnit?"never":"all"===a.opts.signMode?"always":"auto",a.num(l.get(t)*o,e.length,i)})},e}(),iO=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function iB(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return RegExp("^"+t.reduce(function(e,t){return e+t.source},"")+"$")}function iI(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(e){return t.reduce(function(t,i){var a=t[0],n=t[1],r=i(e,t[2]),o=r[0],s=r[1],l=r[2];return[ey({},a,o),s||n,l]},[{},null,1]).slice(0,2)}}function iN(e){if(null==e)return[null,null];for(var t=arguments.length,i=Array(t>1?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];for(var n=0;n<i.length;n++){var r=i[n],o=r[0],s=r[1],l=o.exec(e);if(l)return s(l)}return[null,null]}function i$(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(e,i){var a,n={};for(a=0;a<t.length;a++)n[t[a]]=t5(e[i+a]);return[n,null,i+a]}}var iz=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,iL=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,iH=RegExp(""+iL.source+("(?:"+iz.source+"?(?:\\[("+iO.source)+")\\])?)?"),iR=RegExp("(?:[Tt]"+iH.source+")?"),ij=i$("weekYear","weekNumber","weekDay"),iV=i$("year","ordinal"),iW=RegExp(iL.source+" ?(?:"+iz.source+"|("+iO.source+"))?"),iP=RegExp("(?: "+iW.source+")?");function iU(e,t,i){var a=e[t];return tK(a)?i:t5(a)}function iQ(e,t){return[{hours:iU(e,t,0),minutes:iU(e,t+1,0),seconds:iU(e,t+2,0),milliseconds:t7(e[t+3])},null,t+4]}function iq(e,t){var i=!e[t]&&!e[t+1],a=id(e[t+1],e[t+2]);return[{},i?null:tb.instance(a),t+3]}function iY(e,t){return[{},e[t]?tt.create(e[t]):null,t+1]}var iJ=RegExp("^T?"+iL.source+"$"),iZ=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function iK(e){var t=e[0],i=e[1],a=e[2],n=e[3],r=e[4],o=e[5],s=e[6],l=e[7],c=e[8],d="-"===t[0],h=l&&"-"===l[0],u=function(e,t){return void 0===t&&(t=!1),void 0!==e&&(t||e&&d)?-e:e};return[{years:u(t9(i)),months:u(t9(a)),weeks:u(t9(n)),days:u(t9(r)),hours:u(t9(o)),minutes:u(t9(s)),seconds:u(t9(l),"-0"===l),milliseconds:u(t7(c),h)}]}var iG={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function iX(e,t,i,a,n,r,o){var s={year:2===t.length?il(t5(t)):t5(t),month:iy.indexOf(i)+1,day:t5(a),hour:t5(n),minute:t5(r)};return o&&(s.second=t5(o)),e&&(s.weekday=e.length>3?ib.indexOf(e)+1:i_.indexOf(e)+1),s}var i0=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function i2(e){var t=e[1],i=e[2],a=e[3],n=e[4],r=e[5],o=e[6],s=e[7],l=e[8],c=e[9],d=e[10],h=e[11];return[iX(t,n,a,i,r,o,s),new tb(l?iG[l]:c?0:id(d,h))]}var i1=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,i3=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,i6=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function i4(e){var t=e[1],i=e[2],a=e[3];return[iX(t,e[4],a,i,e[5],e[6],e[7]),tb.utcInstance]}function i8(e){var t=e[1],i=e[2],a=e[3],n=e[4],r=e[5],o=e[6];return[iX(t,e[7],i,a,n,r,o),tb.utcInstance]}var i5=iB(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,iR),i9=iB(/(\d{4})-?W(\d\d)(?:-?(\d))?/,iR),i7=iB(/(\d{4})-?(\d{3})/,iR),ae=iB(iH),at=iI(function(e,t){return[{year:iU(e,t),month:iU(e,t+1,1),day:iU(e,t+2,1)},null,t+3]},iQ,iq,iY),ai=iI(ij,iQ,iq,iY),aa=iI(iV,iQ,iq,iY),an=iI(iQ,iq,iY),ar=iI(iQ),ao=iB(/(\d{4})-(\d\d)-(\d\d)/,iP),as=iB(iW),al=iI(iQ,iq,iY),ac="Invalid Duration",ad={weeks:{days:7,hours:168,minutes:10080,seconds:604800,milliseconds:6048e5},days:{hours:24,minutes:1440,seconds:86400,milliseconds:864e5},hours:{minutes:60,seconds:3600,milliseconds:36e5},minutes:{seconds:60,milliseconds:6e4},seconds:{milliseconds:1e3}},ah=ey({years:{quarters:4,months:12,weeks:52,days:365,hours:8760,minutes:525600,seconds:31536e3,milliseconds:31536e6},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:131040,seconds:7862400,milliseconds:78624e5},months:{weeks:4,days:30,hours:720,minutes:43200,seconds:2592e3,milliseconds:2592e6}},ad),au=ey({years:{quarters:4,months:12,weeks:52.1775,days:365.2425,hours:8765.82,minutes:525949.2,seconds:0x1e18558,milliseconds:31556952e3},quarters:{months:3,weeks:13.044375,days:91.310625,hours:2191.455,minutes:131487.3,seconds:7889238,milliseconds:7889238e3},months:{weeks:30.436875/7,days:30.436875,hours:730.485,minutes:43829.1,seconds:2629746,milliseconds:2629746e3}},ad),am=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],af=am.slice(0).reverse();function ap(e,t,i){return void 0===i&&(i=!1),new aw({values:i?t.values:ey({},e.values,t.values||{}),loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix})}function av(e,t){for(var i,a,n=null!=(i=t.milliseconds)?i:0,r=eD(af.slice(1));!(a=r()).done;){var o=a.value;t[o]&&(n+=t[o]*e[o].milliseconds)}return n}function ay(e,t){var i=0>av(e,t)?-1:1;am.reduceRight(function(a,n){if(tK(t[n]))return a;if(a){var r=t[a]*i,o=e[n][a],s=Math.floor(r/o);t[n]+=s*i,t[a]-=s*o*i}return n},null),am.reduce(function(i,a){if(tK(t[a]))return i;if(i){var n=t[i]%1;t[i]-=n,t[a]+=n*e[i][a]}return a},null)}function ag(e){for(var t={},i=0,a=Object.entries(e);i<a.length;i++){var n=a[i],r=n[0],o=n[1];0!==o&&(t[r]=o)}return t}var aw=function(e){function t(e){var t="longterm"===e.conversionAccuracy,i=t?au:ah;e.matrix&&(i=e.matrix),this.values=e.values,this.loc=e.loc||tg.create(),this.conversionAccuracy=t?"longterm":"casual",this.invalid=e.invalid||null,this.matrix=i,this.isLuxonDuration=!0}t.fromMillis=function(e,i){return t.fromObject({milliseconds:e},i)},t.fromObject=function(e,i){if(void 0===i&&(i={}),null==e||"object"!=typeof e)throw new eO("Duration.fromObject: argument expected to be an object, got "+(null===e?"null":typeof e));return new t({values:iu(e,t.normalizeUnit),loc:tg.fromObject(i),conversionAccuracy:i.conversionAccuracy,matrix:i.matrix})},t.fromDurationLike=function(e){if(tG(e))return t.fromMillis(e);if(t.isDuration(e))return e;if("object"==typeof e)return t.fromObject(e);throw new eO("Unknown duration argument "+e+" of type "+typeof e)},t.fromISO=function(e,i){var a=iN(e,[iZ,iK])[0];return a?t.fromObject(a,i):t.invalid("unparsable",'the input "'+e+"\" can't be parsed as ISO 8601")},t.fromISOTime=function(e,i){var a=iN(e,[iJ,ar])[0];return a?t.fromObject(a,i):t.invalid("unparsable",'the input "'+e+"\" can't be parsed as ISO 8601")},t.invalid=function(e,i){if(void 0===i&&(i=null),!e)throw new eO("need to specify a reason the Duration is invalid");var a=e instanceof tz?e:new tz(e,i);if(!t$.throwOnInvalid)return new t({invalid:a});throw new eC(a)},t.normalizeUnit=function(e){var t={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[e?e.toLowerCase():e];if(!t)throw new eM(e);return t},t.isDuration=function(e){return e&&e.isLuxonDuration||!1};var i=t.prototype;return i.toFormat=function(e,t){void 0===t&&(t={});var i=ey({},t,{floor:!1!==t.round&&!1!==t.floor});return this.isValid?iM.create(this.loc,i).formatDurationFromString(this,e):ac},i.toHuman=function(e){var t=this;if(void 0===e&&(e={}),!this.isValid)return ac;var i=!1!==e.showZeros,a=am.map(function(a){var n=t.values[a];return tK(n)||0===n&&!i?null:t.loc.numberFormatter(ey({style:"unit",unitDisplay:"long"},e,{unit:a.slice(0,-1)})).format(n)}).filter(function(e){return e});return this.loc.listFormatter(ey({type:"conjunction",style:e.listStyle||"narrow"},e)).format(a)},i.toObject=function(){return this.isValid?ey({},this.values):{}},i.toISO=function(){if(!this.isValid)return null;var e="P";return 0!==this.years&&(e+=this.years+"Y"),(0!==this.months||0!==this.quarters)&&(e+=this.months+3*this.quarters+"M"),0!==this.weeks&&(e+=this.weeks+"W"),0!==this.days&&(e+=this.days+"D"),(0!==this.hours||0!==this.minutes||0!==this.seconds||0!==this.milliseconds)&&(e+="T"),0!==this.hours&&(e+=this.hours+"H"),0!==this.minutes&&(e+=this.minutes+"M"),(0!==this.seconds||0!==this.milliseconds)&&(e+=ie(this.seconds+this.milliseconds/1e3,3)+"S"),"P"===e&&(e+="T0S"),e},i.toISOTime=function(e){if(void 0===e&&(e={}),!this.isValid)return null;var t=this.toMillis();return t<0||t>=864e5?null:(e=ey({suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended"},e,{includeOffset:!1}),a9.fromMillis(t,{zone:"UTC"}).toISOTime(e))},i.toJSON=function(){return this.toISO()},i.toString=function(){return this.toISO()},i[e]=function(){return this.isValid?"Duration { values: "+JSON.stringify(this.values)+" }":"Duration { Invalid, reason: "+this.invalidReason+" }"},i.toMillis=function(){return this.isValid?av(this.matrix,this.values):NaN},i.valueOf=function(){return this.toMillis()},i.plus=function(e){if(!this.isValid)return this;for(var i=t.fromDurationLike(e),a={},n=0;n<am.length;n++){var r=am[n];(t3(i.values,r)||t3(this.values,r))&&(a[r]=i.get(r)+this.get(r))}return ap(this,{values:a},!0)},i.minus=function(e){if(!this.isValid)return this;var i=t.fromDurationLike(e);return this.plus(i.negate())},i.mapUnits=function(e){if(!this.isValid)return this;for(var t={},i=0,a=Object.keys(this.values);i<a.length;i++){var n=a[i];t[n]=ih(e(this.values[n],n))}return ap(this,{values:t},!0)},i.get=function(e){return this[t.normalizeUnit(e)]},i.set=function(e){return this.isValid?ap(this,{values:ey({},this.values,iu(e,t.normalizeUnit))}):this},i.reconfigure=function(e){var t=void 0===e?{}:e,i=t.locale,a=t.numberingSystem,n=t.conversionAccuracy,r=t.matrix;return ap(this,{loc:this.loc.clone({locale:i,numberingSystem:a}),matrix:r,conversionAccuracy:n})},i.as=function(e){return this.isValid?this.shiftTo(e).get(e):NaN},i.normalize=function(){if(!this.isValid)return this;var e=this.toObject();return ay(this.matrix,e),ap(this,{values:e},!0)},i.rescale=function(){return this.isValid?ap(this,{values:ag(this.normalize().shiftToAll().toObject())},!0):this},i.shiftTo=function(){for(var e,i=arguments.length,a=Array(i),n=0;n<i;n++)a[n]=arguments[n];if(!this.isValid||0===a.length)return this;a=a.map(function(e){return t.normalizeUnit(e)});for(var r={},o={},s=this.toObject(),l=0;l<am.length;l++){var c=am[l];if(a.indexOf(c)>=0){e=c;var d=0;for(var h in o)d+=this.matrix[h][c]*o[h],o[h]=0;tG(s[c])&&(d+=s[c]);var u=Math.trunc(d);r[c]=u,o[c]=(1e3*d-1e3*u)/1e3}else tG(s[c])&&(o[c]=s[c])}for(var m in o)0!==o[m]&&(r[e]+=m===e?o[m]:o[m]/this.matrix[e][m]);return ay(this.matrix,r),ap(this,{values:r},!0)},i.shiftToAll=function(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this},i.negate=function(){if(!this.isValid)return this;for(var e={},t=0,i=Object.keys(this.values);t<i.length;t++){var a=i[t];e[a]=0===this.values[a]?0:-this.values[a]}return ap(this,{values:e},!0)},i.removeZeros=function(){return this.isValid?ap(this,{values:ag(this.values)},!0):this},i.equals=function(e){if(!this.isValid||!e.isValid||!this.loc.equals(e.loc))return!1;for(var t=0;t<am.length;t++){var i,a,n=am[t];if(i=this.values[n],a=e.values[n],void 0===i||0===i?void 0!==a&&0!==a:i!==a)return!1}return!0},ev(t,[{key:"locale",get:function(){return this.isValid?this.loc.locale:null}},{key:"numberingSystem",get:function(){return this.isValid?this.loc.numberingSystem:null}},{key:"years",get:function(){return this.isValid?this.values.years||0:NaN}},{key:"quarters",get:function(){return this.isValid?this.values.quarters||0:NaN}},{key:"months",get:function(){return this.isValid?this.values.months||0:NaN}},{key:"weeks",get:function(){return this.isValid?this.values.weeks||0:NaN}},{key:"days",get:function(){return this.isValid?this.values.days||0:NaN}},{key:"hours",get:function(){return this.isValid?this.values.hours||0:NaN}},{key:"minutes",get:function(){return this.isValid?this.values.minutes||0:NaN}},{key:"seconds",get:function(){return this.isValid?this.values.seconds||0:NaN}},{key:"milliseconds",get:function(){return this.isValid?this.values.milliseconds||0:NaN}},{key:"isValid",get:function(){return null===this.invalid}},{key:"invalidReason",get:function(){return this.invalid?this.invalid.reason:null}},{key:"invalidExplanation",get:function(){return this.invalid?this.invalid.explanation:null}}]),t}(Symbol.for("nodejs.util.inspect.custom")),ab="Invalid Interval",a_=function(e){function t(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}t.invalid=function(e,i){if(void 0===i&&(i=null),!e)throw new eO("need to specify a reason the Interval is invalid");var a=e instanceof tz?e:new tz(e,i);if(!t$.throwOnInvalid)return new t({invalid:a});throw new eT(a)},t.fromDateTimes=function(e,i){var a,n,r=a7(e),o=a7(i),s=(a=r,n=o,a&&a.isValid?n&&n.isValid?n<a?a_.invalid("end before start","The end of an interval must be after its start, but you had start="+a.toISO()+" and end="+n.toISO()):null:a_.invalid("missing or invalid end"):a_.invalid("missing or invalid start"));return null==s?new t({start:r,end:o}):s},t.after=function(e,i){var a=aw.fromDurationLike(i),n=a7(e);return t.fromDateTimes(n,n.plus(a))},t.before=function(e,i){var a=aw.fromDurationLike(i),n=a7(e);return t.fromDateTimes(n.minus(a),n)},t.fromISO=function(e,i){var a=(e||"").split("/",2),n=a[0],r=a[1];if(n&&r){try{s=(o=a9.fromISO(n,i)).isValid}catch(e){s=!1}try{c=(l=a9.fromISO(r,i)).isValid}catch(e){c=!1}if(s&&c)return t.fromDateTimes(o,l);if(s){var o,s,l,c,d=aw.fromISO(r,i);if(d.isValid)return t.after(o,d)}else if(c){var h=aw.fromISO(n,i);if(h.isValid)return t.before(l,h)}}return t.invalid("unparsable",'the input "'+e+"\" can't be parsed as ISO 8601")},t.isInterval=function(e){return e&&e.isLuxonInterval||!1};var i=t.prototype;return i.length=function(e){return void 0===e&&(e="milliseconds"),this.isValid?this.toDuration.apply(this,[e]).get(e):NaN},i.count=function(e,t){if(void 0===e&&(e="milliseconds"),!this.isValid)return NaN;var i,a=this.start.startOf(e,t);return Math.floor((i=(i=null!=t&&t.useLocaleWeeks?this.end.reconfigure({locale:a.locale}):this.end).startOf(e,t)).diff(a,e).get(e))+(i.valueOf()!==this.end.valueOf())},i.hasSame=function(e){return!!this.isValid&&(this.isEmpty()||this.e.minus(1).hasSame(this.s,e))},i.isEmpty=function(){return this.s.valueOf()===this.e.valueOf()},i.isAfter=function(e){return!!this.isValid&&this.s>e},i.isBefore=function(e){return!!this.isValid&&this.e<=e},i.contains=function(e){return!!this.isValid&&this.s<=e&&this.e>e},i.set=function(e){var i=void 0===e?{}:e,a=i.start,n=i.end;return this.isValid?t.fromDateTimes(a||this.s,n||this.e):this},i.splitAt=function(){var e=this;if(!this.isValid)return[];for(var i=arguments.length,a=Array(i),n=0;n<i;n++)a[n]=arguments[n];for(var r=a.map(a7).filter(function(t){return e.contains(t)}).sort(function(e,t){return e.toMillis()-t.toMillis()}),o=[],s=this.s,l=0;s<this.e;){var c=r[l]||this.e,d=+c>+this.e?this.e:c;o.push(t.fromDateTimes(s,d)),s=d,l+=1}return o},i.splitBy=function(e){var i=aw.fromDurationLike(e);if(!this.isValid||!i.isValid||0===i.as("milliseconds"))return[];for(var a,n=this.s,r=1,o=[];n<this.e;){var s=this.start.plus(i.mapUnits(function(e){return e*r}));a=+s>+this.e?this.e:s,o.push(t.fromDateTimes(n,a)),n=a,r+=1}return o},i.divideEqually=function(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]},i.overlaps=function(e){return this.e>e.s&&this.s<e.e},i.abutsStart=function(e){return!!this.isValid&&+this.e==+e.s},i.abutsEnd=function(e){return!!this.isValid&&+e.e==+this.s},i.engulfs=function(e){return!!this.isValid&&this.s<=e.s&&this.e>=e.e},i.equals=function(e){return!!this.isValid&&!!e.isValid&&this.s.equals(e.s)&&this.e.equals(e.e)},i.intersection=function(e){if(!this.isValid)return this;var i=this.s>e.s?this.s:e.s,a=this.e<e.e?this.e:e.e;return i>=a?null:t.fromDateTimes(i,a)},i.union=function(e){if(!this.isValid)return this;var i=this.s<e.s?this.s:e.s,a=this.e>e.e?this.e:e.e;return t.fromDateTimes(i,a)},t.merge=function(e){var t=e.sort(function(e,t){return e.s-t.s}).reduce(function(e,t){var i=e[0],a=e[1];return a?a.overlaps(t)||a.abutsStart(t)?[i,a.union(t)]:[i.concat([a]),t]:[i,t]},[[],null]),i=t[0],a=t[1];return a&&i.push(a),i},t.xor=function(e){for(var i,a,n=null,r=0,o=[],s=e.map(function(e){return[{time:e.s,type:"s"},{time:e.e,type:"e"}]}),l=(i=Array.prototype).concat.apply(i,s).sort(function(e,t){return e.time-t.time}),c=eD(l);!(a=c()).done;){var d=a.value;1===(r+="s"===d.type?1:-1)?n=d.time:(n&&+n!=+d.time&&o.push(t.fromDateTimes(n,d.time)),n=null)}return t.merge(o)},i.difference=function(){for(var e=this,i=arguments.length,a=Array(i),n=0;n<i;n++)a[n]=arguments[n];return t.xor([this].concat(a)).map(function(t){return e.intersection(t)}).filter(function(e){return e&&!e.isEmpty()})},i.toString=function(){return this.isValid?"["+this.s.toISO()+" – "+this.e.toISO()+")":ab},i[e]=function(){return this.isValid?"Interval { start: "+this.s.toISO()+", end: "+this.e.toISO()+" }":"Interval { Invalid, reason: "+this.invalidReason+" }"},i.toLocaleString=function(e,t){return void 0===e&&(e=ez),void 0===t&&(t={}),this.isValid?iM.create(this.s.loc.clone(t),e).formatInterval(this):ab},i.toISO=function(e){return this.isValid?this.s.toISO(e)+"/"+this.e.toISO(e):ab},i.toISODate=function(){return this.isValid?this.s.toISODate()+"/"+this.e.toISODate():ab},i.toISOTime=function(e){return this.isValid?this.s.toISOTime(e)+"/"+this.e.toISOTime(e):ab},i.toFormat=function(e,t){var i=(void 0===t?{}:t).separator;return this.isValid?""+this.s.toFormat(e)+(void 0===i?" – ":i)+this.e.toFormat(e):ab},i.toDuration=function(e,t){return this.isValid?this.e.diff(this.s,e,t):aw.invalid(this.invalidReason)},i.mapEndpoints=function(e){return t.fromDateTimes(e(this.s),e(this.e))},ev(t,[{key:"start",get:function(){return this.isValid?this.s:null}},{key:"end",get:function(){return this.isValid?this.e:null}},{key:"lastDateTime",get:function(){return this.isValid&&this.e?this.e.minus(1):null}},{key:"isValid",get:function(){return null===this.invalidReason}},{key:"invalidReason",get:function(){return this.invalid?this.invalid.reason:null}},{key:"invalidExplanation",get:function(){return this.invalid?this.invalid.explanation:null}}]),t}(Symbol.for("nodejs.util.inspect.custom")),ak=function(){function e(){}return e.hasDST=function(e){void 0===e&&(e=t$.defaultZone);var t=a9.now().setZone(e).set({month:12});return!e.isUniversal&&t.offset!==t.set({month:6}).offset},e.isValidIANAZone=function(e){return tt.isValidZone(e)},e.normalizeZone=function(e){return tk(e,t$.defaultZone)},e.getStartOfWeek=function(e){var t=void 0===e?{}:e,i=t.locale,a=t.locObj;return((void 0===a?null:a)||tg.create(void 0===i?null:i)).getStartOfWeek()},e.getMinimumDaysInFirstWeek=function(e){var t=void 0===e?{}:e,i=t.locale,a=t.locObj;return((void 0===a?null:a)||tg.create(void 0===i?null:i)).getMinDaysInFirstWeek()},e.getWeekendWeekdays=function(e){var t=void 0===e?{}:e,i=t.locale,a=t.locObj;return((void 0===a?null:a)||tg.create(void 0===i?null:i)).getWeekendDays().slice()},e.months=function(e,t){void 0===e&&(e="long");var i=void 0===t?{}:t,a=i.locale,n=i.numberingSystem,r=i.locObj,o=i.outputCalendar;return((void 0===r?null:r)||tg.create(void 0===a?null:a,void 0===n?null:n,void 0===o?"gregory":o)).months(e)},e.monthsFormat=function(e,t){void 0===e&&(e="long");var i=void 0===t?{}:t,a=i.locale,n=i.numberingSystem,r=i.locObj,o=i.outputCalendar;return((void 0===r?null:r)||tg.create(void 0===a?null:a,void 0===n?null:n,void 0===o?"gregory":o)).months(e,!0)},e.weekdays=function(e,t){void 0===e&&(e="long");var i=void 0===t?{}:t,a=i.locale,n=i.numberingSystem,r=i.locObj;return((void 0===r?null:r)||tg.create(void 0===a?null:a,void 0===n?null:n,null)).weekdays(e)},e.weekdaysFormat=function(e,t){void 0===e&&(e="long");var i=void 0===t?{}:t,a=i.locale,n=i.numberingSystem,r=i.locObj;return((void 0===r?null:r)||tg.create(void 0===a?null:a,void 0===n?null:n,null)).weekdays(e,!0)},e.meridiems=function(e){var t=(void 0===e?{}:e).locale;return tg.create(void 0===t?null:t).meridiems()},e.eras=function(e,t){void 0===e&&(e="short");var i=(void 0===t?{}:t).locale;return tg.create(void 0===i?null:i,null,"gregory").eras(e)},e.features=function(){return{relative:t0(),localeWeek:t2()}},e}();function ax(e,t){var i=function(e){return e.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf()},a=i(t)-i(e);return Math.floor(aw.fromMillis(a).as("days"))}function aA(e,t){return void 0===t&&(t=function(e){return e}),{regex:e,deser:function(e){var i=e[0];return t(function(e){var t=parseInt(e,10);if(!isNaN(t))return t;t="";for(var i=0;i<e.length;i++){var a=e.charCodeAt(i);if(-1!==e[i].search(tx.hanidec))t+=tD.indexOf(e[i]);else for(var n in tA){var r=tA[n],o=r[0],s=r[1];a>=o&&a<=s&&(t+=a-o)}}return parseInt(t,10)}(i))}}}var aD="[ "+String.fromCharCode(160)+"]",aE=RegExp(aD,"g");function aF(e){return e.replace(/\./g,"\\.?").replace(aE,aD)}function aT(e){return e.replace(/\./g,"").replace(aE," ").toLowerCase()}function aC(e,t){return null===e?null:{regex:RegExp(e.map(aF).join("|")),deser:function(i){var a=i[0];return e.findIndex(function(e){return aT(a)===aT(e)})+t}}}function aS(e,t){return{regex:e,deser:function(e){return id(e[1],e[2])},groups:t}}function aM(e){return{regex:e,deser:function(e){return e[0]}}}var aO={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}},aB=null;function aI(e,t){var i;return(i=Array.prototype).concat.apply(i,e.map(function(e){if(e.literal)return e;var i=az(iM.macroTokenToFormatOpts(e.val),t);return null==i||i.includes(void 0)?e:i}))}var aN=function(){function e(e,t){if(this.locale=e,this.format=t,this.tokens=aI(iM.parseFormat(t),e),this.units=this.tokens.map(function(t){var i,a,n,r,o,s,l,c,d,h,u,m,f;return i=tF(e),a=tF(e,"{2}"),n=tF(e,"{3}"),r=tF(e,"{4}"),o=tF(e,"{6}"),s=tF(e,"{1,2}"),l=tF(e,"{1,3}"),c=tF(e,"{1,6}"),d=tF(e,"{1,9}"),h=tF(e,"{2,4}"),u=tF(e,"{4,6}"),m=function(e){return{regex:RegExp(e.val.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")),deser:function(e){return e[0]},literal:!0}},(f=function(f){if(t.literal)return m(f);switch(f.val){case"G":return aC(e.eras("short"),0);case"GG":return aC(e.eras("long"),0);case"y":return aA(c);case"yy":case"kk":return aA(h,il);case"yyyy":case"kkkk":return aA(r);case"yyyyy":return aA(u);case"yyyyyy":return aA(o);case"M":case"L":case"d":case"H":case"h":case"m":case"q":case"s":case"W":return aA(s);case"MM":case"LL":case"dd":case"HH":case"hh":case"mm":case"qq":case"ss":case"WW":return aA(a);case"MMM":return aC(e.months("short",!0),1);case"MMMM":return aC(e.months("long",!0),1);case"LLL":return aC(e.months("short",!1),1);case"LLLL":return aC(e.months("long",!1),1);case"o":case"S":return aA(l);case"ooo":case"SSS":return aA(n);case"u":return aM(d);case"uu":return aM(s);case"uuu":case"E":case"c":return aA(i);case"a":return aC(e.meridiems(),0);case"EEE":return aC(e.weekdays("short",!1),1);case"EEEE":return aC(e.weekdays("long",!1),1);case"ccc":return aC(e.weekdays("short",!0),1);case"cccc":return aC(e.weekdays("long",!0),1);case"Z":case"ZZ":return aS(RegExp("([+-]"+s.source+")(?::("+a.source+"))?"),2);case"ZZZ":return aS(RegExp("([+-]"+s.source+")("+a.source+")?"),2);case"z":return aM(/[a-z_+-/]{1,256}?/i);case" ":return aM(/[^\S\n\r]/);default:return m(f)}}(t)||{invalidReason:"missing Intl.DateTimeFormat.formatToParts support"}).token=t,f}),this.disqualifyingUnit=this.units.find(function(e){return e.invalidReason}),!this.disqualifyingUnit){var i,a=["^"+(i=this.units).map(function(e){return e.regex}).reduce(function(e,t){return e+"("+t.source+")"},"")+"$",i],n=a[0],r=a[1];this.regex=RegExp(n,"i"),this.handlers=r}}return e.prototype.explainFromTokens=function(e){if(!this.isValid)return{input:e,tokens:this.tokens,invalidReason:this.invalidReason};var t,i,a,n=function(e,t,i){var a=e.match(t);if(!a)return[a,{}];var n={},r=1;for(var o in i)if(t3(i,o)){var s=i[o],l=s.groups?s.groups+1:1;!s.literal&&s.token&&(n[s.token.val[0]]=s.deser(a.slice(r,r+l))),r+=l}return[a,n]}(e,this.regex,this.handlers),r=n[0],o=n[1],s=o?(i=function(e){switch(e){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}},a=null,tK(o.z)||(a=tt.create(o.z)),tK(o.Z)||(a||(a=new tb(o.Z)),t=o.Z),tK(o.q)||(o.M=(o.q-1)*3+1),tK(o.h)||(o.h<12&&1===o.a?o.h+=12:12===o.h&&0===o.a&&(o.h=0)),0===o.G&&o.y&&(o.y=-o.y),tK(o.u)||(o.S=t7(o.u)),[Object.keys(o).reduce(function(e,t){var a=i(t);return a&&(e[a]=o[t]),e},{}),a,t]):[null,null,void 0],l=s[0],c=s[1],d=s[2];if(t3(o,"a")&&t3(o,"H"))throw new eS("Can't include meridiem when specifying 24-hour format");return{input:e,tokens:this.tokens,regex:this.regex,rawMatches:r,matches:o,result:l,zone:c,specificOffset:d}},ev(e,[{key:"isValid",get:function(){return!this.disqualifyingUnit}},{key:"invalidReason",get:function(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}]),e}();function a$(e,t,i){return new aN(e,i).explainFromTokens(t)}function az(e,t){if(!e)return null;var i=iM.create(t,e).dtFormatter((aB||(aB=a9.fromMillis(0x16a2e5618e3)),aB)),a=i.formatToParts(),n=i.resolvedOptions();return a.map(function(t){return function(e,t,i){var a=e.type,n=e.value;if("literal"===a){var r=/^\s+$/.test(n);return{literal:!r,val:r?" ":n}}var o=t[a],s=a;"hour"===a&&(s=null!=t.hour12?t.hour12?"hour12":"hour24":null!=t.hourCycle?"h11"===t.hourCycle||"h12"===t.hourCycle?"hour12":"hour24":i.hour12?"hour12":"hour24");var l=aO[s];if("object"==typeof l&&(l=l[o]),l)return{literal:!1,val:l}}(t,e,n)})}var aL="Invalid DateTime";function aH(e){return new tz("unsupported zone",'the zone "'+e.name+'" is not supported')}function aR(e){return null===e.weekData&&(e.weekData=tP(e.c)),e.weekData}function aj(e){return null===e.localWeekData&&(e.localWeekData=tP(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function aV(e,t){var i={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new a9(ey({},i,t,{old:i}))}function aW(e,t,i){var a=e-6e4*t,n=i.offset(a);if(t===n)return[a,t];a-=(n-t)*6e4;var r=i.offset(a);return n===r?[a,n]:[e-6e4*Math.min(n,r),Math.max(n,r)]}function aP(e,t){var i=new Date(e+=6e4*t);return{year:i.getUTCFullYear(),month:i.getUTCMonth()+1,day:i.getUTCDate(),hour:i.getUTCHours(),minute:i.getUTCMinutes(),second:i.getUTCSeconds(),millisecond:i.getUTCMilliseconds()}}function aU(e,t){var i=e.o,a=e.c.year+Math.trunc(t.years),n=e.c.month+Math.trunc(t.months)+3*Math.trunc(t.quarters),r=ey({},e.c,{year:a,month:n,day:Math.min(e.c.day,ia(a,n))+Math.trunc(t.days)+7*Math.trunc(t.weeks)}),o=aw.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),s=aW(ir(r),i,e.zone),l=s[0],c=s[1];return 0!==o&&(l+=o,c=e.zone.offset(l)),{ts:l,o:c}}function aQ(e,t,i,a,n,r){var o=i.setZone,s=i.zone;if((!e||0===Object.keys(e).length)&&!t)return a9.invalid(new tz("unparsable",'the input "'+n+"\" can't be parsed as "+a));var l=a9.fromObject(e,ey({},i,{zone:t||s,specificOffset:r}));return o?l:l.setZone(s)}function aq(e,t,i){return void 0===i&&(i=!0),e.isValid?iM.create(tg.create("en-US"),{allowZ:i,forceSimple:!0}).formatDateTimeFromString(e,t):null}function aY(e,t,i){var a=e.c.year>9999||e.c.year<0,n="";if(a&&e.c.year>=0&&(n+="+"),n+=t8(e.c.year,a?6:4),"year"===i)return n;if(t){if(n+="-",n+=t8(e.c.month),"month"===i)return n;n+="-"}else if(n+=t8(e.c.month),"month"===i)return n;return n+t8(e.c.day)}function aJ(e,t,i,a,n,r,o){var s=!i||0!==e.c.millisecond||0!==e.c.second,l="";switch(o){case"day":case"month":case"year":break;default:if(l+=t8(e.c.hour),"hour"===o)break;if(t){if(l+=":",l+=t8(e.c.minute),"minute"===o)break;s&&(l+=":",l+=t8(e.c.second))}else{if(l+=t8(e.c.minute),"minute"===o)break;s&&(l+=t8(e.c.second))}if("second"===o)break;s&&(!a||0!==e.c.millisecond)&&(l+=".",l+=t8(e.c.millisecond,3))}return n&&(e.isOffsetFixed&&0===e.offset&&!r?l+="Z":e.o<0?(l+="-",l+=t8(Math.trunc(-e.o/60)),l+=":",l+=t8(Math.trunc(-e.o%60))):(l+="+",l+=t8(Math.trunc(e.o/60)),l+=":",l+=t8(Math.trunc(e.o%60)))),r&&(l+="["+e.zone.ianaName+"]"),l}var aZ={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},aK={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},aG={ordinal:1,hour:0,minute:0,second:0,millisecond:0},aX=["year","month","day","hour","minute","second","millisecond"],a0=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],a2=["year","ordinal","hour","minute","second","millisecond"];function a1(e){var t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new eM(e);return t}function a3(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return a1(e)}}function a6(e,t){var i,a,n=tk(t.zone,t$.defaultZone);if(!n.isValid)return a9.invalid(aH(n));var r=tg.fromObject(t);if(tK(e.year))i=t$.now();else{for(var o=0;o<aX.length;o++){var s=aX[o];tK(e[s])&&(e[s]=aZ[s])}var l=tJ(e)||tZ(e);if(l)return a9.invalid(l);var c=function(e){if(void 0===eu&&(eu=t$.now()),"iana"!==e.type)return e.offset(eu);var t=e.name,i=a5.get(t);return void 0===i&&(i=e.offset(eu),a5.set(t,i)),i}(n),d=aW(ir(e),c,n);i=d[0],a=d[1]}return new a9({ts:i,zone:n,loc:r,o:a})}function a4(e,t,i){var a=!!tK(i.round)||i.round,n=tK(i.rounding)?"trunc":i.rounding,r=function(e,r){return e=ie(e,a||i.calendary?0:2,i.calendary?"round":n),t.loc.clone(i).relFormatter(i).format(e,r)},o=function(a){return i.calendary?t.hasSame(e,a)?0:t.startOf(a).diff(e.startOf(a),a).get(a):t.diff(e,a).get(a)};if(i.unit)return r(o(i.unit),i.unit);for(var s,l=eD(i.units);!(s=l()).done;){var c=s.value,d=o(c);if(Math.abs(d)>=1)return r(d,c)}return r(e>t?-0:0,i.units[i.units.length-1])}function a8(e){var t,i={};return e.length>0&&"object"==typeof e[e.length-1]?(i=e[e.length-1],t=Array.from(e).slice(0,e.length-1)):t=Array.from(e),[i,t]}var a5=new Map,a9=function(e){function t(e){var t=e.zone||t$.defaultZone,i=e.invalid||(Number.isNaN(e.ts)?new tz("invalid input"):null)||(t.isValid?null:aH(t));this.ts=tK(e.ts)?t$.now():e.ts;var a=null,n=null;if(!i)if(e.old&&e.old.ts===this.ts&&e.old.zone.equals(t)){var r=[e.old.c,e.old.o];a=r[0],n=r[1]}else{var o=tG(e.o)&&!e.old?e.o:t.offset(this.ts);a=(i=Number.isNaN((a=aP(this.ts,o)).year)?new tz("invalid input"):null)?null:a,n=i?null:o}this._zone=t,this.loc=e.loc||tg.create(),this.invalid=i,this.weekData=null,this.localWeekData=null,this.c=a,this.o=n,this.isLuxonDateTime=!0}t.now=function(){return new t({})},t.local=function(){var e=a8(arguments),t=e[0],i=e[1];return a6({year:i[0],month:i[1],day:i[2],hour:i[3],minute:i[4],second:i[5],millisecond:i[6]},t)},t.utc=function(){var e=a8(arguments),t=e[0],i=e[1],a=i[0],n=i[1],r=i[2],o=i[3],s=i[4],l=i[5],c=i[6];return t.zone=tb.utcInstance,a6({year:a,month:n,day:r,hour:o,minute:s,second:l,millisecond:c},t)},t.fromJSDate=function(e,i){void 0===i&&(i={});var a="[object Date]"===Object.prototype.toString.call(e)?e.valueOf():NaN;if(Number.isNaN(a))return t.invalid("invalid input");var n=tk(i.zone,t$.defaultZone);return n.isValid?new t({ts:a,zone:n,loc:tg.fromObject(i)}):t.invalid(aH(n))},t.fromMillis=function(e,i){if(void 0===i&&(i={}),tG(e))if(e<-864e13||e>864e13)return t.invalid("Timestamp out of range");else return new t({ts:e,zone:tk(i.zone,t$.defaultZone),loc:tg.fromObject(i)});throw new eO("fromMillis requires a numerical input, but received a "+typeof e+" with value "+e)},t.fromSeconds=function(e,i){if(void 0===i&&(i={}),tG(e))return new t({ts:1e3*e,zone:tk(i.zone,t$.defaultZone),loc:tg.fromObject(i)});throw new eO("fromSeconds requires a numerical input")},t.fromObject=function(e,i){void 0===i&&(i={}),e=e||{};var a,n,r,o,s,l,c,d,h,u=tk(i.zone,t$.defaultZone);if(!u.isValid)return t.invalid(aH(u));var m=tg.fromObject(i),f=iu(e,a3),p=tY(f,m),v=p.minDaysInFirstWeek,y=p.startOfWeek,g=t$.now(),w=tK(i.specificOffset)?u.offset(g):i.specificOffset,b=!tK(f.ordinal),_=!tK(f.year),k=!tK(f.month)||!tK(f.day),x=_||k,A=f.weekYear||f.weekNumber;if((x||b)&&A)throw new eS("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(k&&b)throw new eS("Can't mix ordinal dates with month/day");var D,E,F=A||f.weekday&&!x,T=aP(g,w);F?(D=a0,E=aK,T=tP(T,v,y)):b?(D=a2,E=aG,T=tQ(T)):(D=aX,E=aZ);for(var C,S=!1,M=eD(D);!(C=M()).done;){var O=C.value;tK(f[O])?S?f[O]=E[O]:f[O]=T[O]:S=!0}var B=(F?(a=f,void 0===(n=v)&&(n=4),void 0===(r=y)&&(r=1),o=tX(a.weekYear),s=t4(a.weekNumber,1,is(a.weekYear,n,r)),l=t4(a.weekday,1,7),o?s?!l&&tR("weekday",a.weekday):tR("week",a.weekNumber):tR("weekYear",a.weekYear)):b?(c=tX(f.year),d=t4(f.ordinal,1,ii(f.year)),c?!d&&tR("ordinal",f.ordinal):tR("year",f.year)):tJ(f))||tZ(f);if(B)return t.invalid(B);var I=(h=F?tU(f,v,y):b?tq(f):f,aW(ir(h),w,u)),N=new t({ts:I[0],zone:u,o:I[1],loc:m});return f.weekday&&x&&e.weekday!==N.weekday?t.invalid("mismatched weekday","you can't specify both a weekday of "+f.weekday+" and a date of "+N.toISO()):N.isValid?N:t.invalid(N.invalid)},t.fromISO=function(e,t){void 0===t&&(t={});var i=iN(e,[i5,at],[i9,ai],[i7,aa],[ae,an]);return aQ(i[0],i[1],t,"ISO 8601",e)},t.fromRFC2822=function(e,t){void 0===t&&(t={});var i=iN(e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim(),[i0,i2]);return aQ(i[0],i[1],t,"RFC 2822",e)},t.fromHTTP=function(e,t){void 0===t&&(t={});var i=iN(e,[i1,i4],[i3,i4],[i6,i8]);return aQ(i[0],i[1],t,"HTTP",t)},t.fromFormat=function(e,i,a){if(void 0===a&&(a={}),tK(e)||tK(i))throw new eO("fromFormat requires an input string and a format");var n,r=a,o=r.locale,s=r.numberingSystem,l=[(n=a$(tg.fromOpts({locale:void 0===o?null:o,numberingSystem:void 0===s?null:s,defaultToEN:!0}),e,i)).result,n.zone,n.specificOffset,n.invalidReason],c=l[0],d=l[1],h=l[2],u=l[3];return u?t.invalid(u):aQ(c,d,a,"format "+i,e,h)},t.fromString=function(e,i,a){return void 0===a&&(a={}),t.fromFormat(e,i,a)},t.fromSQL=function(e,t){void 0===t&&(t={});var i=iN(e,[ao,at],[as,al]);return aQ(i[0],i[1],t,"SQL",e)},t.invalid=function(e,i){if(void 0===i&&(i=null),!e)throw new eO("need to specify a reason the DateTime is invalid");var a=e instanceof tz?e:new tz(e,i);if(!t$.throwOnInvalid)return new t({invalid:a});throw new eF(a)},t.isDateTime=function(e){return e&&e.isLuxonDateTime||!1},t.parseFormatForOpts=function(e,t){void 0===t&&(t={});var i=az(e,tg.fromObject(t));return i?i.map(function(e){return e?e.val:null}).join(""):null},t.expandFormat=function(e,t){return void 0===t&&(t={}),aI(iM.parseFormat(e),tg.fromObject(t)).map(function(e){return e.val}).join("")},t.resetCache=function(){eu=void 0,a5.clear()};var i=t.prototype;return i.get=function(e){return this[e]},i.getPossibleOffsets=function(){if(!this.isValid||this.isOffsetFixed)return[this];var e=ir(this.c),t=this.zone.offset(e-864e5),i=this.zone.offset(e+864e5),a=this.zone.offset(e-6e4*t),n=this.zone.offset(e-6e4*i);if(a===n)return[this];var r=e-6e4*a,o=e-6e4*n,s=aP(r,a),l=aP(o,n);return s.hour===l.hour&&s.minute===l.minute&&s.second===l.second&&s.millisecond===l.millisecond?[aV(this,{ts:r}),aV(this,{ts:o})]:[this]},i.resolvedLocaleOptions=function(e){void 0===e&&(e={});var t=iM.create(this.loc.clone(e),e).resolvedOptions(this);return{locale:t.locale,numberingSystem:t.numberingSystem,outputCalendar:t.calendar}},i.toUTC=function(e,t){return void 0===e&&(e=0),void 0===t&&(t={}),this.setZone(tb.instance(e),t)},i.toLocal=function(){return this.setZone(t$.defaultZone)},i.setZone=function(e,i){var a=void 0===i?{}:i,n=a.keepLocalTime,r=a.keepCalendarTime;if((e=tk(e,t$.defaultZone)).equals(this.zone))return this;if(!e.isValid)return t.invalid(aH(e));var o=this.ts;if(void 0!==n&&n||void 0!==r&&r){var s,l,c=e.offset(this.ts);o=(s=this.toObject(),l=e,aW(ir(s),c,l))[0]}return aV(this,{ts:o,zone:e})},i.reconfigure=function(e){var t=void 0===e?{}:e,i=t.locale,a=t.numberingSystem,n=t.outputCalendar;return aV(this,{loc:this.loc.clone({locale:i,numberingSystem:a,outputCalendar:n})})},i.setLocale=function(e){return this.reconfigure({locale:e})},i.set=function(e){if(!this.isValid)return this;var t,i,a,n,r=iu(e,a3),o=tY(r,this.loc),s=o.minDaysInFirstWeek,l=o.startOfWeek,c=!tK(r.weekYear)||!tK(r.weekNumber)||!tK(r.weekday),d=!tK(r.ordinal),h=!tK(r.year),u=!tK(r.month)||!tK(r.day),m=r.weekYear||r.weekNumber;if((h||u||d)&&m)throw new eS("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&d)throw new eS("Can't mix ordinal dates with month/day");c?n=tU(ey({},tP(this.c,s,l),r),s,l):tK(r.ordinal)?(n=ey({},this.toObject(),r),tK(r.day)&&(n.day=Math.min(ia(n.year,n.month),n.day))):n=tq(ey({},tQ(this.c),r));var f=(t=n,i=this.o,a=this.zone,aW(ir(t),i,a));return aV(this,{ts:f[0],o:f[1]})},i.plus=function(e){return this.isValid?aV(this,aU(this,aw.fromDurationLike(e))):this},i.minus=function(e){return this.isValid?aV(this,aU(this,aw.fromDurationLike(e).negate())):this},i.startOf=function(e,t){var i=(void 0===t?{}:t).useLocaleWeeks;if(!this.isValid)return this;var a={},n=aw.normalizeUnit(e);switch(n){case"years":a.month=1;case"quarters":case"months":a.day=1;case"weeks":case"days":a.hour=0;case"hours":a.minute=0;case"minutes":a.second=0;case"seconds":a.millisecond=0}if("weeks"===n)if(void 0!==i&&i){var r=this.loc.getStartOfWeek();this.weekday<r&&(a.weekNumber=this.weekNumber-1),a.weekday=r}else a.weekday=1;return"quarters"===n&&(a.month=(Math.ceil(this.month/3)-1)*3+1),this.set(a)},i.endOf=function(e,t){var i;return this.isValid?this.plus(((i={})[e]=1,i)).startOf(e,t).minus(1):this},i.toFormat=function(e,t){return void 0===t&&(t={}),this.isValid?iM.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this,e):aL},i.toLocaleString=function(e,t){return void 0===e&&(e=ez),void 0===t&&(t={}),this.isValid?iM.create(this.loc.clone(t),e).formatDateTime(this):aL},i.toLocaleParts=function(e){return void 0===e&&(e={}),this.isValid?iM.create(this.loc.clone(e),e).formatDateTimeParts(this):[]},i.toISO=function(e){var t=void 0===e?{}:e,i=t.format,a=t.suppressSeconds,n=t.suppressMilliseconds,r=t.includeOffset,o=t.extendedZone,s=t.precision,l=void 0===s?"milliseconds":s;if(!this.isValid)return null;l=a1(l);var c="extended"===(void 0===i?"extended":i),d=aY(this,c,l);return aX.indexOf(l)>=3&&(d+="T"),d+=aJ(this,c,void 0!==a&&a,void 0!==n&&n,void 0===r||r,void 0!==o&&o,l)},i.toISODate=function(e){var t=void 0===e?{}:e,i=t.format,a=t.precision;return this.isValid?aY(this,"extended"===(void 0===i?"extended":i),a1(void 0===a?"day":a)):null},i.toISOWeekDate=function(){return aq(this,"kkkk-'W'WW-c")},i.toISOTime=function(e){var t=void 0===e?{}:e,i=t.suppressMilliseconds,a=t.suppressSeconds,n=t.includeOffset,r=t.includePrefix,o=t.extendedZone,s=t.format,l=t.precision,c=void 0===l?"milliseconds":l;return this.isValid?(c=a1(c),(void 0!==r&&r&&aX.indexOf(c)>=3?"T":"")+aJ(this,"extended"===(void 0===s?"extended":s),void 0!==a&&a,void 0!==i&&i,void 0===n||n,void 0!==o&&o,c)):null},i.toRFC2822=function(){return aq(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)},i.toHTTP=function(){return aq(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")},i.toSQLDate=function(){return this.isValid?aY(this,!0):null},i.toSQLTime=function(e){var t=void 0===e?{}:e,i=t.includeOffset,a=void 0===i||i,n=t.includeZone,r=void 0!==n&&n,o=t.includeOffsetSpace,s="HH:mm:ss.SSS";return(r||a)&&((void 0===o||o)&&(s+=" "),r?s+="z":a&&(s+="ZZ")),aq(this,s,!0)},i.toSQL=function(e){return(void 0===e&&(e={}),this.isValid)?this.toSQLDate()+" "+this.toSQLTime(e):null},i.toString=function(){return this.isValid?this.toISO():aL},i[e]=function(){return this.isValid?"DateTime { ts: "+this.toISO()+", zone: "+this.zone.name+", locale: "+this.locale+" }":"DateTime { Invalid, reason: "+this.invalidReason+" }"},i.valueOf=function(){return this.toMillis()},i.toMillis=function(){return this.isValid?this.ts:NaN},i.toSeconds=function(){return this.isValid?this.ts/1e3:NaN},i.toUnixInteger=function(){return this.isValid?Math.floor(this.ts/1e3):NaN},i.toJSON=function(){return this.toISO()},i.toBSON=function(){return this.toJSDate()},i.toObject=function(e){if(void 0===e&&(e={}),!this.isValid)return{};var t=ey({},this.c);return e.includeConfig&&(t.outputCalendar=this.outputCalendar,t.numberingSystem=this.loc.numberingSystem,t.locale=this.loc.locale),t},i.toJSDate=function(){return new Date(this.isValid?this.ts:NaN)},i.diff=function(e,t,i){if(void 0===t&&(t="milliseconds"),void 0===i&&(i={}),!this.isValid||!e.isValid)return aw.invalid("created by diffing an invalid DateTime");var a,n,r,o,s,l,c,d,h,u,m,f=ey({locale:this.locale,numberingSystem:this.numberingSystem},i),p=(Array.isArray(a=t)?a:[a]).map(aw.normalizeUnit),v=e.valueOf()>this.valueOf(),y=v?this:e,g=v?e:this,w=(s=(o=function(e,t,i){for(var a,n,r=[["years",function(e,t){return t.year-e.year}],["quarters",function(e,t){return t.quarter-e.quarter+(t.year-e.year)*4}],["months",function(e,t){return t.month-e.month+(t.year-e.year)*12}],["weeks",function(e,t){var i=ax(e,t);return(i-i%7)/7}],["days",ax]],o={},s=e,l=0;l<r.length;l++){var c=r[l],d=c[0],h=c[1];i.indexOf(d)>=0&&(a=d,o[d]=h(e,t),(n=s.plus(o))>t?(o[d]--,(e=s.plus(o))>t&&(n=e,o[d]--,e=s.plus(o))):e=n)}return[e,o,n,a]}(y,g,p))[0],l=o[1],c=o[2],d=o[3],h=g-s,0===(u=p.filter(function(e){return["hours","minutes","seconds","milliseconds"].indexOf(e)>=0})).length&&(c<g&&(c=s.plus(((n={})[d]=1,n))),c!==s&&(l[d]=(l[d]||0)+h/(c-s))),m=aw.fromObject(l,f),u.length>0?(r=aw.fromMillis(h,f)).shiftTo.apply(r,u).plus(m):m);return v?w.negate():w},i.diffNow=function(e,i){return void 0===e&&(e="milliseconds"),void 0===i&&(i={}),this.diff(t.now(),e,i)},i.until=function(e){return this.isValid?a_.fromDateTimes(this,e):this},i.hasSame=function(e,t,i){if(!this.isValid)return!1;var a=e.valueOf(),n=this.setZone(e.zone,{keepLocalTime:!0});return n.startOf(t,i)<=a&&a<=n.endOf(t,i)},i.equals=function(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)},i.toRelative=function(e){if(void 0===e&&(e={}),!this.isValid)return null;var i=e.base||t.fromObject({},{zone:this.zone}),a=e.padding?this<i?-e.padding:e.padding:0,n=["years","months","days","hours","minutes","seconds"],r=e.unit;return Array.isArray(e.unit)&&(n=e.unit,r=void 0),a4(i,this.plus(a),ey({},e,{numeric:"always",units:n,unit:r}))},i.toRelativeCalendar=function(e){return(void 0===e&&(e={}),this.isValid)?a4(e.base||t.fromObject({},{zone:this.zone}),this,ey({},e,{numeric:"auto",units:["years","months","days"],calendary:!0})):null},t.min=function(){for(var e=arguments.length,i=Array(e),a=0;a<e;a++)i[a]=arguments[a];if(!i.every(t.isDateTime))throw new eO("min requires all arguments be DateTimes");return t1(i,function(e){return e.valueOf()},Math.min)},t.max=function(){for(var e=arguments.length,i=Array(e),a=0;a<e;a++)i[a]=arguments[a];if(!i.every(t.isDateTime))throw new eO("max requires all arguments be DateTimes");return t1(i,function(e){return e.valueOf()},Math.max)},t.fromFormatExplain=function(e,t,i){void 0===i&&(i={});var a=i,n=a.locale,r=a.numberingSystem;return a$(tg.fromOpts({locale:void 0===n?null:n,numberingSystem:void 0===r?null:r,defaultToEN:!0}),e,t)},t.fromStringExplain=function(e,i,a){return void 0===a&&(a={}),t.fromFormatExplain(e,i,a)},t.buildFormatParser=function(e,t){void 0===t&&(t={});var i=t,a=i.locale,n=i.numberingSystem;return new aN(tg.fromOpts({locale:void 0===a?null:a,numberingSystem:void 0===n?null:n,defaultToEN:!0}),e)},t.fromFormatParser=function(e,i,a){if(void 0===a&&(a={}),tK(e)||tK(i))throw new eO("fromFormatParser requires an input string and a format parser");var n=a,r=n.locale,o=n.numberingSystem,s=tg.fromOpts({locale:void 0===r?null:r,numberingSystem:void 0===o?null:o,defaultToEN:!0});if(!s.equals(i.locale))throw new eO("fromFormatParser called with a locale of "+s+", but the format parser was created for "+i.locale);var l=i.explainFromTokens(e),c=l.result,d=l.zone,h=l.specificOffset,u=l.invalidReason;return u?t.invalid(u):aQ(c,d,a,"format "+i.format,e,h)},ev(t,[{key:"isValid",get:function(){return null===this.invalid}},{key:"invalidReason",get:function(){return this.invalid?this.invalid.reason:null}},{key:"invalidExplanation",get:function(){return this.invalid?this.invalid.explanation:null}},{key:"locale",get:function(){return this.isValid?this.loc.locale:null}},{key:"numberingSystem",get:function(){return this.isValid?this.loc.numberingSystem:null}},{key:"outputCalendar",get:function(){return this.isValid?this.loc.outputCalendar:null}},{key:"zone",get:function(){return this._zone}},{key:"zoneName",get:function(){return this.isValid?this.zone.name:null}},{key:"year",get:function(){return this.isValid?this.c.year:NaN}},{key:"quarter",get:function(){return this.isValid?Math.ceil(this.c.month/3):NaN}},{key:"month",get:function(){return this.isValid?this.c.month:NaN}},{key:"day",get:function(){return this.isValid?this.c.day:NaN}},{key:"hour",get:function(){return this.isValid?this.c.hour:NaN}},{key:"minute",get:function(){return this.isValid?this.c.minute:NaN}},{key:"second",get:function(){return this.isValid?this.c.second:NaN}},{key:"millisecond",get:function(){return this.isValid?this.c.millisecond:NaN}},{key:"weekYear",get:function(){return this.isValid?aR(this).weekYear:NaN}},{key:"weekNumber",get:function(){return this.isValid?aR(this).weekNumber:NaN}},{key:"weekday",get:function(){return this.isValid?aR(this).weekday:NaN}},{key:"isWeekend",get:function(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}},{key:"localWeekday",get:function(){return this.isValid?aj(this).weekday:NaN}},{key:"localWeekNumber",get:function(){return this.isValid?aj(this).weekNumber:NaN}},{key:"localWeekYear",get:function(){return this.isValid?aj(this).weekYear:NaN}},{key:"ordinal",get:function(){return this.isValid?tQ(this.c).ordinal:NaN}},{key:"monthShort",get:function(){return this.isValid?ak.months("short",{locObj:this.loc})[this.month-1]:null}},{key:"monthLong",get:function(){return this.isValid?ak.months("long",{locObj:this.loc})[this.month-1]:null}},{key:"weekdayShort",get:function(){return this.isValid?ak.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}},{key:"weekdayLong",get:function(){return this.isValid?ak.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}},{key:"offset",get:function(){return this.isValid?+this.o:NaN}},{key:"offsetNameShort",get:function(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}},{key:"offsetNameLong",get:function(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}},{key:"isOffsetFixed",get:function(){return this.isValid?this.zone.isUniversal:null}},{key:"isInDST",get:function(){return!this.isOffsetFixed&&(this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset)}},{key:"isInLeapYear",get:function(){return it(this.year)}},{key:"daysInMonth",get:function(){return ia(this.year,this.month)}},{key:"daysInYear",get:function(){return this.isValid?ii(this.year):NaN}},{key:"weeksInWeekYear",get:function(){return this.isValid?is(this.weekYear):NaN}},{key:"weeksInLocalWeekYear",get:function(){return this.isValid?is(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}}],[{key:"DATE_SHORT",get:function(){return ez}},{key:"DATE_MED",get:function(){return eL}},{key:"DATE_MED_WITH_WEEKDAY",get:function(){return eH}},{key:"DATE_FULL",get:function(){return eR}},{key:"DATE_HUGE",get:function(){return ej}},{key:"TIME_SIMPLE",get:function(){return eV}},{key:"TIME_WITH_SECONDS",get:function(){return eW}},{key:"TIME_WITH_SHORT_OFFSET",get:function(){return eP}},{key:"TIME_WITH_LONG_OFFSET",get:function(){return eU}},{key:"TIME_24_SIMPLE",get:function(){return eQ}},{key:"TIME_24_WITH_SECONDS",get:function(){return eq}},{key:"TIME_24_WITH_SHORT_OFFSET",get:function(){return eY}},{key:"TIME_24_WITH_LONG_OFFSET",get:function(){return eJ}},{key:"DATETIME_SHORT",get:function(){return eZ}},{key:"DATETIME_SHORT_WITH_SECONDS",get:function(){return eK}},{key:"DATETIME_MED",get:function(){return eG}},{key:"DATETIME_MED_WITH_SECONDS",get:function(){return eX}},{key:"DATETIME_MED_WITH_WEEKDAY",get:function(){return e0}},{key:"DATETIME_FULL",get:function(){return e2}},{key:"DATETIME_FULL_WITH_SECONDS",get:function(){return e1}},{key:"DATETIME_HUGE",get:function(){return e3}},{key:"DATETIME_HUGE_WITH_SECONDS",get:function(){return e6}}]),t}(Symbol.for("nodejs.util.inspect.custom"));function a7(e){if(a9.isDateTime(e))return e;if(e&&e.valueOf&&tG(e.valueOf()))return a9.fromJSDate(e);if(e&&"object"==typeof e)return a9.fromObject(e);throw new eO("Unknown datetime argument: "+e+", of type "+typeof e)}ef.DateTime=a9,ef.Duration=aw,ef.FixedOffsetZone=tb,ef.IANAZone=tt,ef.Info=ak,ef.Interval=a_,ef.InvalidZone=t_,ef.Settings=t$,ef.SystemZone=e5,ef.VERSION="3.7.2",ef.Zone=e4;var ne=s`
    @font-face {
        font-family: 'Ovo';
        src: url('data:font/woff2;base64,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') format('woff2');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    :host {
        --skylight-font: 'Ovo', serif;
        --skylight-bg: rgba(255, 255, 255, 0.6);
        --skylight-radius: 24px;
        --skylight-btn-radius: 20px;
        --skylight-accent: #03a9f4;
    }

    ha-card {
        --header-spacing: 15px;
        --legend-spacing: 15px;
        --legend-dot-size: 10px;
        --navigation-spacing: 5px;
        --navigation-month-font-size: 2em;
        --days-columns: 7;
        --days-spacing: 15px;
        --day-date-number-font-size: 3.5em;
        --day-date-number-line-height: 1.2em;
        --day-date-text-font-size: 1.25em;
        --events-margin-top: 10px;
        --event-spacing: 5px;
        --event-padding: 6px 8px;
        --event-border-width: 3px;
        --event-border-radius: 7px;
        --event-font-size: 1em;
        --event-line-height: 1.2em;
        --event-icon-size: 18px;
        --weather-icon-size: 30px;
        --weather-temperature-separator: ' / ';
        --weather-temperature-font-size: 1em;
        background: var(--skylight-bg) !important;
        border-radius: var(--skylight-radius) !important;
        box-shadow: none !important;
        border: none !important;
        overflow: hidden;
        font-family: var(--skylight-font);
    }

    ha-card.nobackground {
        border: none !important;
        background-color: transparent !important;
        box-shadow: none !important;
    }

    ha-card.compact {
        --days-spacing: 5px;
        --day-date-number-font-size: 1.5em;
        --day-date-text-font-size: 1em;
        --events-margin-top: 5px;
        --event-spacing: 2px;
        --event-padding: 2px 5px;
        --event-border-width: 3px;
        --event-border-radius: 7px;
        --event-font-size: .9em;
        --event-line-height: 1.1em;
        --weather-icon-size: 20px;
        --weather-temperature-font-size: 0.8em;
    }

    /* ── Skylight Shell ───────────────── */

    .skylight-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 24px 8px;
    }

    .date-section {
        display: flex;
        flex-direction: column;
    }

    .day-name {
        font-size: 1.1em;
        text-transform: capitalize;
        color: var(--primary-text-color, #333);
    }

    .full-date {
        font-size: 1.4em;
        text-transform: capitalize;
        color: var(--primary-text-color, #333);
    }

    .clock {
        font-size: 3.5em;
        font-weight: 400;
        color: var(--primary-text-color, #333);
        line-height: 1.1;
        margin-top: 4px;
    }

    .weather-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        cursor: pointer;
    }

    .weather-section ha-icon {
        --mdc-icon-size: 48px;
        color: var(--primary-text-color, #333);
    }

    .weather-temp {
        font-size: 1.5em;
        color: var(--primary-text-color, #333);
    }

    .controls {
        padding: 8px 24px 12px;
    }

    .title-row {
        margin-bottom: 8px;
    }

    .calendar-title {
        font-size: 1.6em;
        color: var(--primary-text-color, #333);
    }

    .buttons-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;
    }

    /* Left cluster of the controls row. Transparent to layout by default
       (display:contents) so non-familial themes are unaffected — its children
       act as direct flex items of .buttons-row exactly as before. The familial
       theme turns it into a flex row to group the hoisted month/navigation with
       the calendar filters. */
    .controls-left {
        display: contents;
    }

    /* Optional floating action button (opt-in via the floatingButton config).
       Overlaid at the bottom-right of the card, anchored to .card-content so it
       takes no layout space and, on a full-screen card, sits at the corner of
       the screen. */
    .card-content.skylight { position: relative; }
    .fab-button {
        position: absolute; right: 16px; bottom: 16px; z-index: 6;
        width: 44px; height: 44px; padding: 0;
        border: none; border-radius: 50%; cursor: pointer;
        display: inline-flex; align-items: center; justify-content: center;
        background: var(--primary-color, #4A90E2); color: #fff;
        --mdc-icon-size: 24px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .3);
        opacity: .9; transition: opacity .15s, transform .1s;
    }
    .fab-button:hover { opacity: 1; }
    .fab-button:active { transform: scale(.92); }
    .fab-button ha-icon { display: inline-flex; }

    .calendar-filters {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
    }

    /* Two labelled filter groups (Members / Categories) — base layout for every
       theme; the familial theme refines these below. */
    .filter-groups {
        display: flex;
        flex-wrap: wrap;
        gap: 22px;
        align-items: flex-start;
    }
    .filter-group {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .filter-group-label {
        font-size: .7em;
        font-weight: 700;
        letter-spacing: .08em;
        text-transform: uppercase;
        opacity: .55;
    }

    .view-selector {
        display: flex;
        gap: 4px;
        flex-wrap: wrap;
    }

    .filter-btn {
        display: flex;
        align-items: center;
        gap: 7px;
        padding: 6px 14px;
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.15));
        border-radius: var(--skylight-btn-radius);
        background: transparent;
        color: var(--secondary-text-color, #666);
        cursor: pointer;
        font-family: var(--skylight-font);
        font-size: 0.9em;
        transition: background 0.2s, color 0.2s, border-color 0.2s;
        white-space: nowrap;
    }

    /* Colour marker: outline when off, filled when on. Round = member,
       square = category (the .member/.category class comes from _calendarGroup). */
    .filter-btn .cal-dot {
        width: 9px;
        height: 9px;
        border-radius: 50%;
        box-sizing: border-box;
        border: 2px solid var(--cal-color, #888);
        background: transparent;
        flex: 0 0 auto;
    }
    .filter-btn.category .cal-dot {
        border-radius: 3px;
    }
    .filter-btn.active .cal-dot {
        background: var(--cal-color, #888);
    }

    .filter-btn:hover {
        background: color-mix(in srgb, var(--cal-color, #888) 20%, transparent);
    }

    .filter-btn.active {
        background: color-mix(in srgb, var(--cal-color, #888) 14%, var(--card-background-color));
        color: var(--primary-text-color);
        border-color: color-mix(in srgb, var(--cal-color, #888) 45%, transparent);
    }

    .filter-btn ha-icon {
        --mdc-icon-size: 18px;
    }

    .view-btn {
        padding: 5px 12px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 16px;
        background: rgba(255, 255, 255, 0.5);
        color: var(--primary-text-color, #333);
        cursor: pointer;
        font-family: var(--skylight-font);
        font-size: 0.85em;
        transition: background 0.2s, color 0.2s, border-color 0.2s;
        white-space: nowrap;
    }

    .view-btn:hover {
        background: rgba(255, 255, 255, 0.8);
    }

    .view-btn.active {
        background: var(--skylight-accent);
        color: white;
        border-color: var(--skylight-accent);
    }

    /* Hide icons in Skylight theme (text only) */
    .view-btn .view-icon {
        display: none;
    }

    .calendar-container {
        padding: 0 8px 8px;
        min-height: 300px;
    }

    .calendar-container > * {
        width: 100%;
    }

    /* Fill the available height (e.g. a wall-mounted tablet): each day cell is
       sized (height computed in JS from the viewport) so the week rows fill down
       to the bottom of the screen. Only the day cells are sized — the weekday /
       navigation rows keep their natural size. Works in any view type. */
    ha-card.fill-height .container .day:not(.header) {
        /* Fixed height (not min-height): caps the cell so a day with many events
           can't push the grid taller than the screen — the whole month stays on
           one page. Overflowing events are clipped inside the cell below. */
        height: var(--day-fill-height, auto);
        /* Override any theme min-height (e.g. familial's 126px) so the cell can
           actually shrink to the computed fill height — otherwise the month
           overflows the screen and scrolls. */
        min-height: 0;
        /* Clip VERTICALLY only: events that don't fit are clipped at the cell's
           top/bottom, but the horizontal axis is left UNclipped so a multi-day
           banner slice can bleed across the cell borders and form ONE seamless
           band. overflow:hidden would clip both axes — then the grid lines cut
           through the band (verified) / it breaks into per-cell pills. */
        clip-path: inset(0 -9999px 0 -9999px);
    }
    ha-card.fill-height .container .day:not(.header) .events {
        flex: 1 1 auto;
        min-height: 0;
        overflow: visible;
    }

    /* ── Calendar Card Content ────────── */

    .card-header-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }

    .card-header-row .card-title {
        margin: 0;
    }

    .current-weather {
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        font-size: var(--weather-temperature-font-size);
    }

    .current-weather .icon {
        display: inline-block;
        vertical-align: middle;
        background-size: cover;
        width: var(--weather-icon-size);
        height: var(--weather-icon-size);
    }

    .current-weather .icon img {
        max-width: var(--weather-icon-size);
        max-height: var(--weather-icon-size);
    }

    .errors {
        white-space: pre-line;
    }

    .container {
        container-name: weekplanner;
        container-type: inline-size;
        display: flex;
        flex-wrap: wrap;
        /* No horizontal gap: day cells touch (separated by their 1px border),
           so multi-day banners are visually continuous across columns. Vertical
           spacing between week rows is kept. */
        row-gap: var(--days-spacing);
        column-gap: 0;
        /* Let vertical scrolling through but keep horizontal gestures
           (swipe navigation) for the card — required on Windows touch
           devices where the browser would otherwise consume them */
        touch-action: pan-y;
        -webkit-user-select: none;
        user-select: none;
    }

    .container.hasActions {
        cursor: pointer;
    }

    .container .header {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: var(--header-spacing);
    }

    .container .legend {
        display: flex;
        align-items: center;
    }

    .container .legend ul {
        display: flex;
        flex-wrap: wrap;
        gap: var(--legend-spacing);
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .container .legend ul li {
        display: block;
        --mdc-icon-size: 16px;
    }

    .container .legend ul li.hasToggle {
        cursor: pointer;
    }

    .container .legend ul li.hidden {
        opacity: .5;
    }

    .container .legend ul li ha-icon {
        color: var(--legend-calendar-color, var(--divider-color, #ffffff));
    }

    .container .legend ul li.hidden ha-icon {
        color: var(--divider-color, #ffffff);
    }

    .container .legend ul li.noIcon:before {
        content: '';
        display: inline-block;
        width: var(--legend-dot-size);
        height: var(--legend-dot-size);
        background-color: var(--legend-calendar-color, var(--divider-color, #ffffff));
        border-radius: 50%;
        margin: 0 5px 0 0;
        vertical-align: middle;
    }

    .container .legend ul li.hidden.noIcon:before {
        background-color: var(--divider-color, #ffffff);
    }

    .container .navigation {
        display: flex;
        gap: var(--navigation-spacing);
        align-items: center;
    }

    .container .navigation .month {
        font-size: var(--navigation-month-font-size);
    }

    .container .navigation ul {
        display: flex;
        flex-wrap: wrap;
        gap: var(--navigation-spacing);
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .container .navigation ul li {
        display: block;
        cursor: pointer;
    }

    .container .day {
        position: relative;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        /* No horizontal gap between cells: full column width so adjacent
           cells touch and multi-day banners run continuously across them. */
        width: calc(100% / var(--days-columns));
        margin: 0 0 var(--days-spacing) 0;
        border-right: 1px solid var(--divider-color, rgba(0,0,0,0.08));
        border-bottom: 1px solid var(--divider-color, rgba(0,0,0,0.08));
    }

    /* Weekend (Sat/Sun) tint. The card background is semi-transparent (it can sit
       over a dashboard photo), so a mid-grey blends in and washes out once the
       image loads. A darkening overlay instead darkens the weekend column
       consistently whatever is behind it. Override via the weekendColor option. */
    .container .day.weekend:not(.header) {
        background-color: var(--weekend-color, rgba(0, 0, 0, 0.18));
    }

    .container .day.today .date .number {
        background-color: var(--today-accent, #EC6B4E);
        color: #fff;
        font-weight: bold;
        border-radius: 8px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 1.4em;
        padding: 2px 6px;
    }

    .container .day .day-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .container .day .date {
        position: relative;
        z-index: 1;
        min-width: 0;
    }

    .container .day .date .number {
        font-size: var(--day-date-number-font-size);
        line-height: var(--day-date-number-line-height);
    }

    .container .day .date .text {
        font-size: var(--day-date-text-font-size);
    }

    .container .day .date .text.mobile-only {
        display: none;
    }

    .container .day.header .date .text {
        font-size: var(--day-header-font-size, var(--day-date-text-font-size));
        color: var(--day-header-color, var(--primary-text-color));
        text-transform: uppercase;
        letter-spacing: .06em;
        font-weight: 700;
        opacity: .72;
    }

    .container .day.header .date .text-short {
        display: none;
    }

    .container .day .add-event {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0.3;
        transition: opacity 0.2s;
        color: var(--primary-text-color);
        --mdc-icon-size: 18px;
        flex-shrink: 0;
        margin: 0;
        padding: 0;
    }

    .container .day .add-event:hover {
        opacity: 0.8;
    }

    /* Event dots (visible only in mobile month view) */
    .container .day .event-dots {
        display: none;
    }

    /* Selected day events panel (visible only in mobile month view) */
    .selected-day-events {
        display: none;
    }

    .container .day .weather {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2px;
        flex: 1;
        font-size: var(--weather-temperature-font-size);
        cursor: pointer;
        white-space: nowrap;
    }

    .container .day .weather .icon {
        display: inline-block;
        vertical-align: middle;
        background-size: cover;
        width: var(--weather-icon-size);
        height: var(--weather-icon-size);
    }

    .container .day .weather .icon img {
        max-width: var(--weather-icon-size);
        max-height: var(--weather-icon-size);
    }

    .container .day .weather div.temperature {
        display: inline-block;
        margin: 0 5px 0 0;
        vertical-align: middle;
    }

    .container .day .weather .temperature:has(.high) .low:before {
        content: var(--weather-temperature-separator);
    }

    .container .day .events {
        margin-top: var(--events-margin-top);
    }

    .container .day .events .none,
    .container .day .events .more,
    .container .day .events .event {
        margin-bottom: var(--event-spacing);
        background-color: var(--event-background-color);
        border-radius: var(--event-border-radius);
        font-size: var(--event-font-size);
        line-height: var(--event-line-height);
    }

    .container .day .events .none,
    .container .day .events .more {
        padding: var(--event-padding);
        border-radius: var(--event-border-radius);
    }

    /* "+N" chip shown when a cell's events were clipped to fit (fill height).
       Tappable to open the full day. Compact and visible (not the card-bg box). */
    .container .day .events .more {
        background: var(--divider-color, rgba(0, 0, 0, 0.18));
        color: var(--primary-text-color);
        align-self: flex-start;
        padding: 0 7px;
        margin-top: 2px;
        border-radius: 10px;
        font-size: 0.78em;
        font-weight: 700;
        line-height: 1.5;
        cursor: pointer;
        opacity: 0.85;
    }
    .container .day .events .more:hover {
        opacity: 1;
    }

    .container .day .events .event {
        display: flex;
        border-left: var(--event-border-width) solid var(--border-color, var(--divider-color, #ffffff));
        cursor: pointer;
    }

    /* ── Multi-day banner events: continuous strip across day columns ──
       Day cells now touch horizontally (container has column-gap:0), so a
       banner slice only has to bleed a couple of px over the 1px cell border
       to meet its neighbour seamlessly (same colour = no visible seam). ── */
    .container .day .events .event.banner {
        position: relative;
        z-index: 1;
        /* Uniform band thickness along the whole strip: every slice is as tall
           as one line of text (its .inner), and the icon is vertically centred
           without adding height — so the titled+icon slice matches the empty
           continuation slices instead of bulging. */
        align-items: center;
    }

    /* Joins to the slice on its left: square the edge and bleed left far enough
       to swallow whatever insets the band inside the cell — the row-gap in the
       skylight theme (--days-spacing) OR the day cell's inner horizontal padding
       (8px in the HA theme, 9px in the familial theme) PLUS the 1px cell border.
       The bleed must over-reach so adjacent slices OVERLAP across the grid line
       (a 12px constant covers the largest padding + border + a few px of overlap);
       over-bleed is invisible because neighbouring slices share the same colour.
       At -8px the familial slices stopped ~2px short of the line → visible gaps
       ("la fusion a sauté"). */
    .container .day .events .event.banner.ljoin {
        margin-left: calc(-1 * var(--days-spacing) - 12px);
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-left-width: 0 !important;
    }

    /* Continues to the right: square the edge and bleed right the same amount */
    .container .day .events .event.banner.rjoin {
        margin-right: calc(-1 * var(--days-spacing) - 12px);
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .container .day .events .event.banner .inner {
        overflow: hidden;
        min-width: 0;
    }

    .container .day .events .event.banner .title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    /* The banner icon must not make its slice taller than the others */
    .container .day .events .event.banner .icon {
        padding-top: 0;
        padding-bottom: 0;
        --mdc-icon-size: var(--event-icon-size, 18px);
        display: flex;
        align-items: center;
    }

    .container .day .events .event .additionalColor {
        width: var(--event-border-width);
        background-color: var(--event-additional-color);
    }

    .container .day .events .event .icon {
        padding: var(--event-padding);
        /* Icon renders first (before the time); keep it vertically CENTRED on the
           whole event, including multi-line (detailed) events. (The 🔔 reminder is
           part of the title text, not this icon, so it's unaffected.) */
        align-self: center;
        display: flex;
        align-items: center;
    }

    .container .day .events .event .icon .event-emoji {
        font-size: var(--event-icon-size, 18px);
        line-height: 1;
        display: flex;
        align-items: center;
    }

    .container .day .events .event .inner {
        flex-grow: 1;
        padding: var(--event-padding);
    }

    /* Single-line month event (".compact-line"): start time + truncated title on
       ONE row, category icon at the right, vertically centred (~21px tall). The
       full range + location live in the event's hover tooltip (title attr). */
    .container .day .events .event.compact-line {
        align-items: center;
    }
    .container .day .events .event.compact-line .inner.inner-compact {
        display: flex;
        flex-direction: row;
        align-items: baseline;
        gap: 5px;
        min-width: 0;
    }
    .container .day .events .event.compact-line .time {
        flex: 0 0 auto;
        margin: 0;
        font-size: 0.92em;
    }
    .container .day .events .event.compact-line .title {
        flex: 1 1 auto;
        min-width: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .container .day .events .event.compact-line .icon {
        padding: 0 5px 0 0;
        --mdc-icon-size: 15px;
        display: flex;
        align-items: center;
        align-self: center;
        flex: 0 0 auto;
    }

    .container .day .events .event .time {
        color: var(--primary-text-color, #333);
        margin: 0 0 3px 0;
        font-weight: bold;
    }

    .container .day .events .event .location {
        margin: 3px 0 0 0;
        --mdc-icon-size: var(--event-icon-size);
        color: var(--primary-text-color, #333);
    }

    .loader {
        position: absolute;
        top: 16px;
        right: 16px;
        width: 40px;
        height: 40px;
    }

    .loader:after {
        content: " ";
        display: block;
        width: 24px;
        height: 24px;
        margin: 4px;
        border-radius: 50%;
        border: 3px solid var(--primary-text-color);
        border-color: var(--primary-text-color) transparent var(--primary-text-color) transparent;
        animation: loader 1.2s linear infinite;
    }

    ha-dialog .calendar,
    ha-dialog .datetime,
    ha-dialog .location {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
    }

    ha-dialog .calendar ha-icon,
    ha-dialog .datetime ha-icon,
    ha-dialog .location ha-icon {
        margin-right: 8px;
    }

    ha-dialog .location .info a {
        color: var(--primary-text-color);
    }

    ha-dialog .description {
        border-top: 1px solid var(--primary-text-color);
        margin-top: 16px;
        padding-top: 16px;
        /* Descriptions render as plain text (not HTML) for safety — keep author
           line breaks and avoid overflow from long unbroken strings. */
        white-space: pre-wrap;
        overflow-wrap: anywhere;
    }

    ha-dialog .event-actions {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        margin-top: 16px;
        padding-top: 16px;
        border-top: 1px solid var(--divider-color, #e0e0e0);
    }

    ha-dialog .event-actions .btn {
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 0.9em;
        --mdc-icon-size: 16px;
    }

    ha-dialog .event-actions .btn-edit {
        background-color: var(--primary-color, #03a9f4);
        color: var(--text-primary-color, #fff);
    }

    ha-dialog .event-actions .btn-delete {
        background-color: var(--error-color, #db4437);
        color: #fff;
    }

    ha-dialog .event-actions .btn:hover {
        opacity: 0.9;
    }

    .create-event-form {
        padding: 8px 0;
    }

    .create-event-form .form-row {
        margin-bottom: 12px;
    }

    .create-event-form .form-row label {
        display: block;
        margin-bottom: 4px;
        font-size: 0.9em;
        color: var(--secondary-text-color, #aaaaaa);
    }

    .create-event-form .form-input {
        width: 100%;
        padding: 8px;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 4px;
        background-color: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        font-size: 1em;
        box-sizing: border-box;
    }

    .create-event-form .form-input:focus {
        outline: none;
        border-color: var(--primary-color, #03a9f4);
    }

    .create-event-form .location-row {
        position: relative;
    }

    .create-event-form .advanced-toggle {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        width: 100%;
        margin: 4px 0 12px;
        padding: 8px 0;
        background: none;
        border: none;
        border-top: 1px solid var(--divider-color, #e0e0e0);
        color: var(--secondary-text-color, #aaaaaa);
        font-size: 0.9em;
        cursor: pointer;
    }

    .create-event-form .advanced-toggle ha-icon {
        --mdc-icon-size: 18px;
    }

    .create-event-form .advanced-toggle:hover {
        color: var(--primary-color, #03a9f4);
    }

    /* Native <details> disclosure: expands instantly with no card re-render.
       Hide the default marker and rotate our own chevron when open. */
    .create-event-form .advanced-details {
        width: 100%;
    }
    .create-event-form summary.advanced-toggle {
        list-style: none;
        user-select: none;
        -webkit-user-select: none;
    }
    .create-event-form summary.advanced-toggle::-webkit-details-marker,
    .create-event-form summary.advanced-toggle::marker {
        display: none;
    }
    .create-event-form .adv-chevron {
        transition: transform 0.15s ease;
    }
    .create-event-form .advanced-details[open] .adv-chevron {
        transform: rotate(180deg);
    }

    .create-event-form .notify-row .notify-label {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 0;
        cursor: pointer;
        font-size: 1em;
        color: var(--primary-text-color);
    }

    .create-event-form .notify-row input[type="checkbox"] {
        width: 18px;
        height: 18px;
        margin: 0;
        accent-color: var(--primary-color, #03a9f4);
        cursor: pointer;
    }

    .create-event-form .location-suggestions {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        z-index: 10;
        list-style: none;
        margin: 0;
        padding: 0;
        background: var(--card-background-color, #fff);
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 4px;
        max-height: 200px;
        overflow-y: auto;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    }

    .create-event-form .location-suggestions li {
        padding: 8px 12px;
        cursor: pointer;
        font-size: 0.85em;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
        color: var(--primary-text-color);
    }

    .create-event-form .location-suggestions li:last-child {
        border-bottom: none;
    }

    .create-event-form .location-suggestions li:hover {
        background-color: var(--primary-color, #03a9f4);
        color: #fff;
    }

    .create-event-form .location-input-wrapper {
        position: relative;
        display: flex;
        align-items: center;
    }

    .create-event-form .location-input-wrapper .form-input {
        flex: 1;
        padding-right: 44px;
    }
    /* When the Maps shortcut is present, leave room for both it and ✕ */
    .create-event-form .location-input-wrapper.has-maps .form-input {
        padding-right: 80px;
    }
    .create-event-form .location-input-wrapper.has-maps .location-maps-icon {
        right: 44px;
    }

    .create-event-form .location-maps-icon {
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        color: var(--primary-color, #03a9f4);
        text-decoration: none;
        cursor: pointer;
        border-radius: 4px;
    }

    .create-event-form .location-maps-icon:hover {
        background: rgba(3, 169, 244, 0.1);
    }

    .create-event-form .location-maps-icon ha-icon {
        --mdc-icon-size: 20px;
    }

    .create-event-form .form-actions {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        margin-top: 16px;
    }

    .create-event-form .btn {
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 0.9em;
    }

    .create-event-form .btn-delete {
        display: flex;
        align-items: center;
        gap: 4px;
        background-color: var(--error-color, #db4437);
        color: #fff;
        margin-right: auto;
        --mdc-icon-size: 16px;
    }

    .create-event-form .btn-delete:hover {
        opacity: 0.9;
    }

    .create-event-form .btn-cancel {
        background-color: transparent;
        color: var(--primary-text-color);
    }

    .create-event-form .btn-submit {
        background-color: var(--primary-color, #03a9f4);
        color: var(--text-primary-color, #fff);
    }

    .create-event-form .btn-submit:hover {
        opacity: 0.9;
    }

    @keyframes loader {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @container weekplanner (width <= 1920px) {
        ha-card .container .day {
            --days-columns: var(--days-columns-lg, 7);
        }
        ha-card.compact .container .day {
            --days-columns: var(--days-columns-lg, 7);
        }
    }

    @container weekplanner (width <= 1280px) {
        ha-card .container .day {
            --days-columns: var(--days-columns-md, 5);
        }
        ha-card.compact .container .day {
            --days-columns: var(--days-columns-md, 7);
        }
    }

    @container weekplanner (width <= 1024px) {
        ha-card .container .header .legend,
        ha-card .container .header .navigation {
            width: 100%;
        }
        ha-card .container .day {
            --days-columns: var(--days-columns-sm, 3);
        }
        ha-card.compact .container .day {
            --days-columns: var(--days-columns-sm, 4);
        }
        /* Hide weekday headers when columns < 7 (makes no sense) */
        ha-card .container .day.header {
            display: none;
        }
        /* Show inline day name as fallback */
        ha-card .container .day .date .text.mobile-only {
            display: inline;
        }
    }

    @container weekplanner (width <= 640px) {
        ha-card .container .day {
            --days-columns: var(--days-columns-xs, 1);
        }
        ha-card.compact .container .day {
            --days-columns: var(--days-columns-xs, 2);
        }

        /* Hide weather on small screens */
        ha-card .container .day .weather {
            display: none;
        }

        /* ── Month view: mini-calendar with 7 columns ── */
        ha-card .container.month-view .day {
            --days-columns: 7;
            --days-spacing: 2px;
            min-height: auto;
            padding: 4px 2px;
            align-items: center;
            justify-content: center;
        }
        ha-card .container.month-view .day .events,
        ha-card .container.month-view .day .weather,
        ha-card .container.month-view .day .add-event,
        ha-card .container.month-view .day .day-header .add-event {
            display: none;
        }
        ha-card .container.month-view .day .day-header {
            justify-content: center;
        }
        ha-card .container.month-view .day .date .number {
            font-size: 0.9em;
            line-height: 1.1em;
            text-align: center;
        }
        ha-card .container.month-view .day .date .text {
            display: none;
        }
        /* Re-show weekday headers in month view (7 cols restored) */
        ha-card .container.month-view .day.header {
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }
        ha-card .container.month-view .day.header .date .text {
            display: none;
        }
        ha-card .container.month-view .day.header .date .text-short {
            display: block;
            font-size: 0.7em;
            font-weight: bold;
            text-align: center;
            color: var(--day-header-color, var(--primary-text-color));
        }

        /* ── Event dots in month view ── */
        ha-card .container.month-view .day .event-dots {
            display: flex;
            justify-content: center;
            gap: 2px;
            margin-top: 2px;
        }
        ha-card .container.month-view .day .event-dots .dot {
            width: 5px;
            height: 5px;
            border-radius: 50%;
            flex-shrink: 0;
        }

        /* ── Day clickable in month view ── */
        ha-card .container.month-view .day:not(.header):not(.outside) {
            cursor: pointer;
        }

        /* ── Selected day highlight ── */
        ha-card .container.month-view .day.selected .date .number {
            background-color: var(--primary-color, #03a9f4);
            color: var(--text-primary-color, #fff);
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: 1.6em;
            height: 1.6em;
        }

        /* ── Selected day events panel ── */
        .selected-day-events {
            display: block;
            width: 100%;
            padding: 12px 16px;
            box-sizing: border-box;
            border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        }
        .selected-day-header {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            margin-bottom: 8px;
        }
        .selected-day-heading {
            display: flex;
            flex-direction: column;
            gap: 1px;
        }
        .selected-day-date {
            font-size: 1.1em;
            font-weight: bold;
            color: var(--primary-text-color);
            text-transform: capitalize;
        }
        .selected-day-count {
            font-size: 0.8em;
            color: var(--secondary-text-color);
            font-weight: 500;
        }
        .selected-day-events .add-event {
            opacity: 0.5;
        }
        .selected-day-list {
            display: flex;
            flex-direction: column;
            gap: 9px;
        }
        /* The day-panel reuses the same .event markup as the grid, but the grid's
           card styling is scoped to ".container .day .events" — so it never reaches
           ".selected-day-list .event" and the cards render bare. Restyle them here:
           tinted fill + coloured left bar + flex layout (icon beside the text). */
        .selected-day-list .event {
            display: flex;
            cursor: pointer;
            padding: 12px 13px;
            border-radius: 12px;
            border-left: 3px solid var(--border-color, var(--divider-color, #888));
            background-color: color-mix(in srgb, var(--card-background-color, #fff) 85%, var(--border-color, #888));
            color: var(--primary-text-color);
        }
        .selected-day-list .event .inner { flex: 1 1 auto; min-width: 0; }
        .selected-day-list .event .icon {
            display: flex;
            align-items: flex-start;
            padding-left: 10px;
            --mdc-icon-size: var(--event-icon-size, 18px);
        }
        .selected-day-list .event .icon .event-emoji { font-size: var(--event-icon-size, 18px); line-height: 1; }
        .selected-day-list .event .time { font-weight: 700; font-size: 11px; margin: 0 0 2px; }
        .selected-day-list .event .title { font-weight: 600; }
        .selected-day-list .event .event-meta {
            display: flex;
            align-items: center;
            gap: 5px;
            font-size: 11px;
            margin-top: 2px;
            color: var(--secondary-text-color);
        }
        .selected-day-list .event .event-meta .meta-dot {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            flex: 0 0 auto;
        }
        .selected-day-list .event .location {
            margin-top: 3px;
            font-size: 11px;
            color: var(--secondary-text-color);
            --mdc-icon-size: 16px;
        }
        ha-card.theme-familial .selected-day-list .event {
            background-color: color-mix(in srgb, var(--fam-cell), var(--border-color, #888) var(--fam-event-mix));
            border-left-color: var(--border-color, #888);
            color: var(--fam-ink);
        }
        .selected-day-list .none {
            color: var(--secondary-text-color, rgba(0, 0, 0, 0.5));
            font-style: italic;
        }
    }

    /* ── Skylight Responsive ──────────── */

    @media (max-width: 768px) {
        .skylight-header {
            padding: 12px 16px 4px;
        }
        .clock {
            font-size: 2.5em;
        }
        .full-date {
            font-size: 1.1em;
        }
        .controls {
            padding: 6px 16px 8px;
        }
        .calendar-title {
            font-size: 1.3em;
        }
        .filter-btn {
            padding: 4px 10px;
            font-size: 0.8em;
        }
        .view-btn {
            padding: 4px 8px;
            font-size: 0.75em;
        }
        .weather-section ha-icon {
            --mdc-icon-size: 36px;
        }
        .weather-temp {
            font-size: 1.2em;
        }
    }

    @media (max-width: 480px) {
        .skylight-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
        }
        .weather-section {
            flex-direction: row;
            gap: 8px;
        }
        .buttons-row {
            flex-direction: column;
            align-items: flex-start;
        }
        .clock {
            font-size: 2em;
        }

        /* ── Hide Month & Biweek views on mobile ── */
        .view-btn[data-view="month"],
        .view-btn[data-view="biweek"] {
            display: none;
        }

        /* ── Mobile spacing & typography ── */
        ha-card {
            --days-spacing: 6px;
            --day-date-number-font-size: 2em;
            --day-date-number-line-height: 1.1em;
            --day-date-text-font-size: 0.9em;
            --navigation-month-font-size: 1.5em;
            --event-font-size: 0.85em;
            --event-line-height: 1.1em;
            --event-padding: 6px 8px;
            --weather-icon-size: 22px;
            --weather-temperature-font-size: 0.85em;
        }
        ha-card.compact {
            --days-spacing: 3px;
            --day-date-number-font-size: 1.3em;
        }

        /* ── Touch-friendly targets ── */
        .container .navigation ul li {
            padding: 8px;
            --mdc-icon-size: 24px;
        }
        .container .day .add-event {
            width: 36px;
            height: 36px;
            opacity: 0.5;
            --mdc-icon-size: 22px;
        }
        .filter-btn {
            min-height: 36px;
        }
        .view-btn {
            min-height: 36px;
        }

        /* ── Horizontal scroll for filter buttons ── */
        .calendar-filters {
            overflow-x: auto;
            flex-wrap: nowrap;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
        }
        .calendar-filters::-webkit-scrollbar {
            display: none;
        }
    }

    @media (max-width: 360px) {
        ha-card {
            --skylight-radius: 16px;
            --days-spacing: 4px;
            --day-date-number-font-size: 1.8em;
            --navigation-month-font-size: 1.3em;
        }
        .skylight-header {
            padding: 8px 12px 4px;
        }
        .controls {
            padding: 4px 12px 6px;
        }
        .clock {
            font-size: 1.8em;
        }
    }

    /* ── HA theme-adaptive overrides ──────────────── */
    /* Uses HA CSS variables so card adapts to any theme (light or dark) */

    :host {
        --skylight-bg: var(--card-background-color, rgba(255, 255, 255, 0.6));
    }

    .view-btn {
        border-color: var(--divider-color, rgba(0, 0, 0, 0.15));
        color: var(--primary-text-color, #333);
    }

    .filter-btn {
        color: var(--primary-text-color, #333);
    }

    .container .day .events .none,
    .container .day .events .more {
        color: var(--secondary-text-color, rgba(0, 0, 0, 0.5));
    }

    .container .day .events .event .time {
        color: var(--primary-text-color, #333);
        font-weight: bold;
    }

    .container .day .events .event .title {
        color: var(--primary-text-color, #333);
        font-size: 1.15em;
        font-weight: 600;
    }

    .container .day .add-event {
        color: var(--secondary-text-color, rgba(0, 0, 0, 0.3));
    }

    .create-event-form .form-input {
        background-color: var(--primary-background-color, #fff);
        border-color: var(--divider-color, rgba(0, 0, 0, 0.12));
        color: var(--primary-text-color, #333);
    }
    .create-event-form .form-input:focus {
        border-color: var(--skylight-accent);
    }

    .create-event-form .location-suggestions {
        background: var(--card-background-color, #fff);
        border-color: var(--divider-color, rgba(0, 0, 0, 0.12));
    }
    .create-event-form .location-suggestions li {
        border-bottom-color: var(--divider-color, rgba(0, 0, 0, 0.06));
        color: var(--primary-text-color, #333);
    }
    .create-event-form .location-suggestions li:hover {
        background-color: var(--skylight-accent);
        color: #fff;
    }

    ha-dialog .description {
        border-top-color: var(--divider-color, rgba(0, 0, 0, 0.12));
    }
    ha-dialog .event-actions {
        border-top-color: var(--divider-color, rgba(0, 0, 0, 0.12));
    }

    .datetime-row {
        display: flex;
        gap: 8px;
    }
    .datetime-row .form-input {
        flex: 1;
        min-width: 0;
    }

    .recurrence-inline {
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .recurrence-number {
        width: 70px !important;
        text-align: center;
    }
    .recurrence-unit {
        font-size: 0.9em;
        color: var(--secondary-text-color, #666);
        white-space: nowrap;
    }
    .day-picker,
    .duration-picker {
        display: flex;
        gap: 4px;
        flex-wrap: wrap;
    }
    .day-btn,
    .duration-btn,
    .slot-btn {
        padding: 6px 10px;
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.15));
        border-radius: 4px;
        background: transparent;
        color: var(--primary-text-color, #333);
        cursor: pointer;
        font-size: 0.85em;
        font-family: var(--skylight-font);
    }
    .day-btn.active,
    .duration-btn.active,
    .slot-btn.active {
        background-color: var(--primary-color, #03a9f4);
        color: var(--text-primary-color, #fff);
        border-color: var(--primary-color, #03a9f4);
    }
    .duration-btn {
        flex: 1;
        min-height: 36px;
        white-space: nowrap;
    }

    /* ── Event category picker (emoji + label toggle buttons) ── */
    .category-picker {
        display: flex;
        gap: 4px;
        flex-wrap: wrap;
        flex: 1;
    }
    .category-btn {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        padding: 6px 10px;
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.15));
        border-radius: 4px;
        background: transparent;
        color: var(--primary-text-color, #333);
        cursor: pointer;
        font-size: 0.85em;
        font-family: var(--skylight-font);
        min-height: 36px;
        white-space: nowrap;
    }
    .category-btn .category-emoji {
        font-size: 1.15em;
        line-height: 1;
    }
    .category-btn .category-ms-icon {
        --mdc-icon-size: 18px;
        width: 18px;
        height: 18px;
    }
    .category-btn.active {
        background-color: var(--primary-color, #03a9f4);
        color: var(--text-primary-color, #fff);
        border-color: var(--primary-color, #03a9f4);
    }

    /* ── Tap-only time picker (hour grid + minutes) ── */
    .create-event-form .field-row-icon.slots {
        align-items: flex-start;
    }
    .create-event-form .field-row-icon.slots > .field-icon {
        margin-top: 8px;
    }
    /* Hour : minute dropdowns (desktop / phone) */
    .create-event-form .time-dropdowns {
        flex: 1;
        display: flex;
        align-items: center;
        gap: 8px;
        min-width: 0;
    }
    .create-event-form .time-select {
        width: auto;
        min-width: 76px;
        cursor: pointer;
    }
    .create-event-form .time-sep {
        font-weight: 600;
        color: var(--secondary-text-color, #888);
    }
    /* Calendar picker promoted to the main form area (next to its icon) */
    .create-event-form .cal-select {
        flex: 1;
        min-width: 0;
        cursor: pointer;
    }
    .create-event-form .time-slot-picker {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 6px;
        min-width: 0;
    }
    .create-event-form .slot-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
    }
    .create-event-form .slot-grid.minutes {
        padding-top: 4px;
        border-top: 1px dashed var(--divider-color, rgba(0, 0, 0, 0.15));
    }
    .create-event-form .slot-btn {
        min-width: 46px;
        text-align: center;
    }

    /* ══════════════════════════════════════════════════════
       HOME ASSISTANT THEME
       Applied when config.theme === 'homeassistant'.
       Changes: card shell, font, grid layout, buttons, today.
       Does NOT change: skylight header, event cards, dialogs.
       ══════════════════════════════════════════════════════ */

    /* ── Card Shell ── */
    ha-card.theme-homeassistant {
        font-family: var(--ha-card-header-font-family, inherit);
        background: var(--ha-card-background, var(--card-background-color, #fff)) !important;
        border-radius: var(--ha-card-border-radius, 12px) !important;
        box-shadow: var(--ha-card-box-shadow, 0 2px 6px rgba(0, 0, 0, 0.1)) !important;
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12)) !important;
    }

    ha-card.theme-homeassistant.nobackground {
        background: transparent !important;
        box-shadow: none !important;
        border: none !important;
    }

    /* ── Skylight Header keeps Ovo font ── */
    ha-card.theme-homeassistant .skylight-header {
        font-family: var(--skylight-font);
    }
    ha-card.theme-homeassistant .clock {
        font-family: var(--skylight-font);
    }

    /* ── Calendar Title ── */
    ha-card.theme-homeassistant .calendar-title {
        font-family: var(--ha-card-header-font-family, inherit);
    }

    /* ── Filter Buttons ── */
    ha-card.theme-homeassistant .filter-btn {
        font-family: var(--ha-card-header-font-family, inherit);
        border-radius: 8px;
        padding: 6px 12px;
        border-width: 1px;
        font-size: 0.85em;
    }

    /* ── View Selector: Segmented Icon Buttons ── */
    ha-card.theme-homeassistant .view-selector {
        display: flex;
        gap: 0;
        background: var(--primary-background-color, #f0f0f0);
        border-radius: 10px;
        padding: 3px;
    }
    ha-card.theme-homeassistant .view-btn {
        font-family: var(--ha-card-header-font-family, inherit);
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 8px;
        background: transparent;
        color: var(--primary-text-color, #333);
        padding: 6px 10px;
        cursor: pointer;
        transition: background 0.2s, color 0.2s;
    }
    ha-card.theme-homeassistant .view-btn:hover {
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.05));
    }
    ha-card.theme-homeassistant .view-btn.active {
        background: var(--primary-color, #03a9f4);
        color: var(--text-primary-color, #fff);
    }
    /* Show icons, hide text labels */
    ha-card.theme-homeassistant .view-btn .view-icon {
        display: inline-flex;
        --mdc-icon-size: 20px;
    }
    ha-card.theme-homeassistant .view-btn .view-label {
        display: none;
    }

    /* ── Calendar Grid: Table Style with full grid lines ── */
    ha-card.theme-homeassistant .container {
        --days-spacing: 0px;
        gap: 0;
        border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        border-left: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
    }
    ha-card.theme-homeassistant .container .day {
        border-right: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        border-left: none;
        border-top: none;
        padding: 4px 6px;
        margin: 0;
        min-height: 80px;
    }

    /* ── Day Header Row (Mon, Tue...) ── */
    ha-card.theme-homeassistant .container .day.header {
        background: var(--primary-background-color, #f5f5f5);
        border-bottom: 2px solid var(--divider-color, rgba(0, 0, 0, 0.15));
        padding: 6px 4px;
        min-height: auto;
    }
    ha-card.theme-homeassistant .container .day.header .date .text {
        font-family: var(--ha-card-header-font-family, inherit);
        font-size: var(--day-header-font-size, 0.85em);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.03em;
    }

    /* ── Day Number ── */
    ha-card.theme-homeassistant .container .day .date .number {
        font-family: var(--ha-card-header-font-family, inherit);
    }

    /* ── Today Highlight: use HA primary color ── */
    ha-card.theme-homeassistant .container .day.today .date .number {
        background-color: var(--primary-color, #03a9f4);
        border-radius: 6px;
    }

    /* ── Navigation ── */
    ha-card.theme-homeassistant .container .navigation .month {
        font-family: var(--ha-card-header-font-family, inherit);
    }

    /* ── Day Picker / Duration Buttons ── */
    ha-card.theme-homeassistant .day-btn,
    ha-card.theme-homeassistant .duration-btn {
        font-family: var(--ha-card-header-font-family, inherit);
        border-radius: 4px;
    }

    /* ── Responsive: hide day headers at small widths (HA theme) ── */
    @container weekplanner (width <= 1024px) {
        ha-card.theme-homeassistant .container .day.header {
            display: none;
        }
    }
    @container weekplanner (width <= 640px) {
        ha-card.theme-homeassistant .container.month-view .day.header {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    /* ── Clearable text input (tap the ✕ to empty the field) ── */
    .create-event-form .input-clear-wrapper {
        position: relative;
        display: flex;
        align-items: center;
    }
    .create-event-form .input-clear-wrapper .form-input {
        flex: 1;
        padding-right: 44px;
    }
    .create-event-form .input-clear {
        position: absolute;
        right: 4px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        padding: 0;
        border: none;
        background: none;
        color: var(--secondary-text-color, #888);
        cursor: pointer;
        border-radius: 50%;
        --mdc-icon-size: 22px;
    }
    .create-event-form .input-clear:hover {
        background: var(--divider-color, rgba(0,0,0,0.08));
        color: var(--primary-text-color);
    }

    /* ── Quick-add field (write time + title in one go) ── */
    .create-event-form .quick-add-row .form-input {
        border-color: var(--primary-color, #03a9f4);
        border-width: 2px;
    }
    .create-event-form .quick-add-row > .field-icon {
        color: var(--primary-color, #03a9f4);
    }
    /* ── Full-screen handwriting overlay (tablet) — own modal, not ha-dialog ── */
    .hw-overlay {
        position: fixed;
        inset: 0;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.55);
    }
    .hw-overlay .hw-modal {
        display: flex;
        flex-direction: column;
        width: 98vw;
        height: 94vh;
        box-sizing: border-box;
        padding: 12px 14px;
        gap: 10px;
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        border-radius: 12px;
        box-shadow: 0 8px 40px rgba(0, 0, 0, 0.4);
    }
    /* Day-events popup reuses the overlay/modal shell but is a compact centred
       box (not the full-screen handwriting modal). */
    .hw-overlay .hw-modal.day-events-modal {
        width: min(520px, 92vw);
        height: auto;
        max-height: 82vh;
    }
    .hw-overlay .hw-modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 1.15em;
        font-weight: 600;
        text-transform: capitalize;
    }
    .hw-overlay .hw-cal-picker {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
    }
    .hw-overlay .hw-cal-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 8px 14px;
        min-height: 40px;
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.2));
        border-radius: 20px;
        background: transparent;
        color: var(--primary-text-color);
        font-size: 0.95em;
        font-family: var(--skylight-font);
        cursor: pointer;
    }
    .hw-overlay .hw-cal-btn.active {
        background: var(--cal-color, var(--primary-color, #03a9f4));
        border-color: var(--cal-color, var(--primary-color, #03a9f4));
        color: #fff;
    }
    .hw-overlay .hw-cal-dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        flex-shrink: 0;
    }
    .hw-overlay .hw-cal-btn.active .hw-cal-dot {
        display: none;
    }
    .hw-overlay .hw-close {
        border: none;
        background: none;
        color: var(--secondary-text-color, #888);
        cursor: pointer;
        padding: 4px;
        --mdc-icon-size: 26px;
    }
    .hw-overlay .hw-modal .hw-zone {
        flex: 1;
        min-height: 0;
        position: relative;
        width: 100%;
    }
    /* High specificity so it beats .create-event-form .hw-canvas (incl. the
       touch media rule that otherwise caps the height) */
    .hw-overlay .hw-modal .hw-zone .hw-canvas {
        display: block;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        background: #ffffff;
        border: 2px solid var(--primary-color, #03a9f4);
        border-radius: 8px;
        touch-action: none;
        cursor: crosshair;
    }
    .hw-overlay .hw-modal-actions {
        display: flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;
    }
    /* Edit overlay: middle section scrolls; header + bottom actions stay put */
    .hw-overlay .hw-edit-scroll {
        flex: 1;
        min-height: 0;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .hw-overlay .hw-zone-edit {
        flex: none;
        height: 26vh;
    }
    .hw-overlay .hw-current-title {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 1.1em;
        font-weight: 600;
        color: var(--primary-text-color);
        --mdc-icon-size: 20px;
    }
    .hw-eraser.active,
    .hw-pen.active {
        background: var(--primary-color, #03a9f4);
        color: var(--text-primary-color, #fff);
        border-color: var(--primary-color, #03a9f4);
    }

    /* ── Handwriting canvas (Gemini Vision quick add) ── */
    .create-event-form .hw-zone {
        position: relative;
        width: 100%;
    }
    .create-event-form .hw-canvas {
        display: block;
        width: 100%;
        height: 200px;
        box-sizing: border-box;
        background: #ffffff;
        border: 2px solid var(--primary-color, #03a9f4);
        border-radius: 6px;
        touch-action: none;
        cursor: crosshair;
    }
    .create-event-form .hw-hint {
        position: absolute;
        top: 12px;
        left: 14px;
        color: #9e9e9e;
        font-size: 0.95em;
        pointer-events: none;
    }
    .create-event-form .hw-actions {
        display: flex;
        gap: 8px;
        margin-top: 8px;
    }
    .create-event-form .hw-error {
        margin-top: 8px;
        padding: 8px 10px;
        border-radius: 4px;
        background: var(--error-color, #db4437);
        color: #fff;
        font-size: 0.85em;
        word-break: break-word;
    }
    .create-event-form .hw-result {
        margin-top: 8px;
        padding: 8px 10px;
        border-radius: 4px;
        background: var(--success-color, #43a047);
        color: #fff;
        font-size: 0.9em;
        word-break: break-word;
    }
    .create-event-form .hw-actions .ai-analyze-btn {
        flex: 1;
        margin-top: 0;
    }
    .create-event-form .hw-clear {
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 10px 14px;
        border: 1px solid var(--divider-color, rgba(0,0,0,0.15));
        border-radius: 4px;
        background: transparent;
        color: var(--primary-text-color);
        cursor: pointer;
        font-family: var(--skylight-font);
        font-size: 0.95em;
    }

    .create-event-form .ai-analyze-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        width: 100%;
        margin-top: 8px;
        padding: 10px;
        border: none;
        border-radius: 4px;
        background-color: var(--primary-color, #03a9f4);
        color: var(--text-primary-color, #fff);
        font-size: 0.95em;
        font-family: var(--skylight-font);
        cursor: pointer;
    }
    .create-event-form .ai-analyze-btn[disabled] {
        opacity: 0.6;
        cursor: default;
    }
    .create-event-form .ai-analyze-btn ha-icon.spin {
        animation: skylight-spin 1s linear infinite;
    }
    @keyframes skylight-spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }

    /* ── Leading field icon (replaces the text label on the main fields) ── */
    .create-event-form .field-icon {
        color: var(--secondary-text-color, #888);
        --mdc-icon-size: 22px;
        flex-shrink: 0;
    }
    .create-event-form .with-icon {
        position: relative;
    }
    .create-event-form .with-icon > .field-icon {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        pointer-events: none;
    }
    .create-event-form .with-icon .form-input {
        padding-left: 40px;
    }
    .create-event-form .field-row-icon {
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .create-event-form .field-row-icon .duration-picker {
        flex: 1;
    }

    /* ── Touch devices: taller form inputs for comfortable pen
       handwriting directly in the fields (Windows Ink) ── */
    @media (any-pointer: coarse) {
        .create-event-form .form-input {
            min-height: 44px;
            font-size: 1em;
        }
        .create-event-form .field-icon {
            --mdc-icon-size: 26px;
        }
        .create-event-form .with-icon .form-input {
            padding-left: 46px;
        }
        .create-event-form .with-icon > .field-icon {
            left: 12px;
        }
        .create-event-form .input-clear {
            width: 44px;
            height: 44px;
            --mdc-icon-size: 26px;
        }
        .create-event-form .input-clear-wrapper .form-input {
            padding-right: 52px;
        }
        .create-event-form .duration-btn {
            min-height: 48px;
        }
        .create-event-form .slot-btn {
            min-height: 48px;
            min-width: 56px;
            font-size: 1em;
        }
        .create-event-form .hw-canvas {
            height: 240px;
        }
        .create-event-form .hw-clear {
            min-height: 48px;
        }
    }

    /* ── Touch devices (phones AND wall-mounted tablets): hide the prev/next
       navigation arrows — swipe (finger or pen) replaces them. The "•" jump-to-
       today button stays. Mouse-only desktops keep the arrows (no swipe there). ── */
    @media (any-pointer: coarse) {
        .container .navigation ul li:first-child,
        .container .navigation ul li:last-child {
            display: none;
        }
    }

    /* ════════════════════════════════════════════════════════════════════
       "familial" theme — design handoff. Light by default, dark via the
       .dark class (driven by the active HA theme's dark mode). Calendar
       colours are preserved (per-event --border-color / filter --cal-color).
       ════════════════════════════════════════════════════════════════════ */
    ha-card.theme-familial {
        --fam-panel: #f4f5f7;
        --fam-cell: #f4f5f7;
        --fam-weekend: #e9ebf0;
        --fam-trail: #e3e6ec;
        --fam-border: #d5dae1;
        --fam-line: #d8dce4;
        --fam-ink: #1d2230;
        --fam-sub: #5b6470;
        --fam-muted: #9aa2b1;
        --fam-head: #7a828f;
        --fam-accent: #EC6B4E;
        --fam-event-mix: 12%;
        background: var(--fam-panel) !important;
        border: 1px solid var(--fam-border) !important;
        border-radius: 14px !important;
        box-shadow: 0 1px 2px rgba(16, 24, 40, .06) !important;
        color: var(--fam-ink);
        font-family: 'Manrope', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    }
    ha-card.theme-familial.dark {
        --fam-panel: #191c22;
        --fam-cell: #191c22;
        --fam-weekend: #15181d;
        --fam-trail: #131519;
        --fam-border: #2a2f38;
        --fam-line: #23272f;
        --fam-ink: #e9ecf1;
        --fam-sub: #aab2bf;
        --fam-muted: #6b7480;
        --fam-head: #8b94a2;
        --fam-event-mix: 22%;
        box-shadow: 0 1px 2px rgba(0, 0, 0, .4) !important;
    }

    /* Filters: two labelled groups (round dots = members, square = categories) */
    ha-card.theme-familial .controls { padding: 0 18px 14px; }
    /* Everything on ONE line: month/nav + filters (left) and the view-selector
       (right). nowrap keeps the view icons from dropping to a second row; the
       left cluster shrinks (and its filter pills wrap internally) under pressure
       while the view-selector keeps its natural width. */
    ha-card.theme-familial .buttons-row {
        display: flex; align-items: center; justify-content: space-between;
        gap: 16px; flex-wrap: nowrap;
    }
    /* Left cluster: the month/navigation (hoisted from the grid header) sits on
       the same line as the filter groups, at the top-left of the card. */
    ha-card.theme-familial .controls-left {
        display: flex; align-items: center; flex-wrap: wrap;
        gap: 10px 16px; flex: 1 1 auto; min-width: 0;
    }
    /* Month + prev/today/next arrows. The month label is ordered first so
       "juin 2026" sits at the very top-left. */
    ha-card.theme-familial .buttons-row .navigation {
        display: inline-flex; align-items: center; gap: 8px;
    }
    ha-card.theme-familial .buttons-row .navigation .month {
        order: -1; font-size: 18px; font-weight: 800;
        color: var(--fam-ink); text-transform: capitalize; white-space: nowrap;
    }
    ha-card.theme-familial .buttons-row .navigation ul {
        display: inline-flex; align-items: center; gap: 2px;
        margin: 0; padding: 0; list-style: none;
    }
    ha-card.theme-familial .buttons-row .navigation ul li {
        display: inline-flex; align-items: center; justify-content: center;
        cursor: pointer; color: var(--fam-muted); border-radius: 7px; padding: 2px;
    }
    ha-card.theme-familial .buttons-row .navigation ul li:hover {
        color: var(--fam-ink); background: var(--fam-trail);
    }
    ha-card.theme-familial .buttons-row .navigation ul li ha-icon { --mdc-icon-size: 20px; }
    /* Keep "Membres" and "Catégories" side by side on ONE line each, AND on the
       SAME row as the (icon-only) view selector. flex:0 1 auto = the groups take
       their natural width without growing to push the view selector onto its own
       row, so filters (left) and view icons (right) share one line. */
    ha-card.theme-familial .filter-groups { display: flex; flex-direction: row; flex-wrap: wrap; gap: 10px 20px; flex: 0 1 auto; min-width: 0; align-items: center; }
    /* Labels "Membres"/"Catégories" masqués : les pastilles rondes (membres) vs
       carrées (catégories) distinguent déjà les deux groupes. */
    ha-card.theme-familial .filter-group-label { display: none; }
    ha-card.theme-familial .calendar-filters { display: flex; flex-wrap: wrap; gap: 6px; }
    ha-card.theme-familial .filter-btn {
        display: inline-flex; align-items: center; gap: 6px;
        padding: 4px 10px; border-radius: 999px;
        border: 1px solid var(--fam-border); background: transparent;
        color: var(--fam-muted); font-size: 12.5px; font-weight: 600;
        cursor: pointer; transition: all .15s;
    }
    ha-card.theme-familial .filter-btn .cal-dot {
        width: 8px; height: 8px; border-radius: 50%; box-sizing: border-box;
        border: 2px solid var(--cal-color, #888); background: transparent; flex: 0 0 auto;
    }
    ha-card.theme-familial .filter-btn.category .cal-dot { border-radius: 3px; }
    ha-card.theme-familial .filter-btn.active {
        color: var(--fam-ink);
        background: color-mix(in srgb, var(--fam-panel), var(--cal-color, #888) 12%);
        border-color: color-mix(in srgb, var(--fam-panel), var(--cal-color, #888) 50%);
    }
    ha-card.theme-familial.dark .filter-btn.active {
        background: color-mix(in srgb, var(--fam-panel), var(--cal-color, #888) 20%);
        border-color: color-mix(in srgb, var(--fam-panel), var(--cal-color, #888) 42%);
    }
    ha-card.theme-familial .filter-btn.active .cal-dot { background: var(--cal-color, #888); }

    /* Segmented control (view buttons). flex:0 0 auto + nowrap = it keeps its
       natural width and never drops to a second row; the left cluster shrinks
       instead. */
    ha-card.theme-familial .view-selector {
        display: inline-flex; flex-wrap: nowrap; flex: 0 0 auto;
        gap: 2px; padding: 3px; align-self: center;
        background: var(--fam-trail); border: 1px solid var(--fam-border); border-radius: 10px;
    }
    ha-card.theme-familial .view-btn {
        background: transparent; border: none; cursor: pointer;
        padding: 6px 10px; border-radius: 7px;
        color: var(--fam-muted); font-size: 13px; font-weight: 600;
        display: inline-flex; align-items: center;
    }
    ha-card.theme-familial .view-btn .view-icon { display: inline-flex; --mdc-icon-size: 20px; color: inherit; }
    ha-card.theme-familial .view-btn .view-label { display: none; }
    ha-card.theme-familial .view-btn.active {
        background: #ffffff; color: var(--fam-ink); font-weight: 700;
        border: 1px solid var(--fam-border); box-shadow: 0 1px 3px rgba(0, 0, 0, .22);
    }
    ha-card.theme-familial.dark .view-btn.active {
        background: var(--fam-panel);
        border-color: color-mix(in srgb, var(--fam-border), #fff 12%);
        box-shadow: 0 1px 4px rgba(0, 0, 0, .5);
    }
    /* Narrow screens: the labelled segmented control would overflow and clip the
       last view button (e.g. "Mois"). Fall back to compact icon buttons (and let
       it wrap as a safety net) so every view stays reachable. */
    @media (max-width: 640px) {
        /* Samsung-style compact month on mobile: hide the Members/Categories
           filter groups from the header (the calendar colour identifies the
           member/category in the grid, and the event details name it). */
        ha-card.theme-familial .filter-groups { display: none; }
        /* Stack the controls so the view selector gets a full-width row of its
           own — otherwise it is squeezed to the right and the last button (Month)
           overflows the card (which has overflow:hidden) and gets clipped. */
        ha-card.theme-familial .buttons-row { flex-direction: column; align-items: stretch; gap: 12px; }
        /* Hoisted month/nav on its own full-width row: "juin 2026" left, arrows right. */
        ha-card.theme-familial .controls-left { width: 100%; }
        ha-card.theme-familial .buttons-row .navigation { width: 100%; justify-content: space-between; }
        ha-card.theme-familial .view-selector {
            display: flex; flex-wrap: wrap; justify-content: center;
            align-self: stretch; width: 100%; box-sizing: border-box;
        }
        ha-card.theme-familial .view-btn { padding: 6px 9px; flex: 0 0 auto; }
        ha-card.theme-familial .view-btn .view-icon { display: inline-flex; --mdc-icon-size: 20px; color: inherit; }
        ha-card.theme-familial .view-btn .view-label { display: none; }
        /* The base styles hide Month & Biweek view buttons below 480px; the
           familial theme keeps them so the month view stays reachable on mobile. */
        ha-card.theme-familial .view-btn[data-view="month"],
        ha-card.theme-familial .view-btn[data-view="biweek"] { display: inline-flex; }
        /* Compact day cells on phones for a denser, Samsung-calendar-like month.
           (The fillHeight row-stretch is disabled on narrow cards in JS, so cells
           keep this natural height and the grid scrolls.) */
        ha-card.theme-familial .container .day { padding: 5px 6px 7px; }
        /* Bulletproof: force a FIXED compact cell height in month view on mobile,
           regardless of fillHeight (its computed --day-fill-height would otherwise
           stretch the rows to fill the screen). Plain @media + !important so it
           does not depend on the .fill-height class, container queries, or JS. */
        ha-card.theme-familial .container.month-view .day:not(.header) {
            height: 50px !important; min-height: 50px !important; max-height: 50px !important;
        }
        ha-card.theme-familial .container.month-view .day:not(.header) .events { overflow: hidden; }
    }
    /* Belt-and-suspenders via the real card width too. */
    @container weekplanner (width <= 640px) {
        ha-card.theme-familial .container.month-view .day:not(.header) {
            height: 50px !important; min-height: 50px !important; max-height: 50px !important;
        }
    }

    /* Navigation month title */
    ha-card.theme-familial .container .navigation .month {
        font-size: 18px; font-weight: 800; color: var(--fam-ink); text-transform: capitalize;
    }

    /* Grid + day cells.
       NOTE: --days-spacing MUST keep a unit (0px, not 0). The banner bleed margin
       is calc(-1 * var(--days-spacing) - 12px); a UNITLESS 0 makes that
       calc(<number> - <length>) which is INVALID CSS → the whole margin is
       dropped → multi-day banners stop bleeding (the band breaks into pills). */
    ha-card.theme-familial .container { --days-spacing: 0px; gap: 0; }
    /* A month is always a 7-column grid — keep 7 columns even on narrow phones.
       The base responsive rules collapse columns (~3) on small widths, which
       turned the month into a tall multi-row list ("étiré"). Forcing 7 keeps a
       compact Samsung-calendar-style month; cells just get narrower. */
    ha-card.theme-familial .container.month-view .day { --days-columns: 7 !important; }
    ha-card.theme-familial .container .day {
        background: var(--fam-cell);
        border-right: 1px solid var(--fam-line);
        border-bottom: 1px solid var(--fam-line);
        border-left: none; border-top: none;
        padding: 8px 9px 10px; min-height: 126px; margin: 0;
        color: var(--fam-ink);
    }
    ha-card.theme-familial .container .day.weekend:not(.header) { background: var(--fam-weekend); }
    ha-card.theme-familial .container .day.outside { background: var(--fam-trail); }
    ha-card.theme-familial .container .day.today:not(.header) {
        background: color-mix(in srgb, var(--fam-cell), var(--fam-accent) 8%);
    }
    ha-card.theme-familial.dark .container .day.today:not(.header) {
        background: color-mix(in srgb, var(--fam-cell), var(--fam-accent) 16%);
    }

    /* Day header row (LUNDI … DIMANCHE) */
    ha-card.theme-familial .container .day.header {
        background: transparent; min-height: auto; padding: 10px 9px;
        border-bottom: 1px solid var(--fam-line);
    }
    ha-card.theme-familial .container .day.header .date .text,
    ha-card.theme-familial .container .day.header .date .text-short {
        color: var(--fam-head); font-size: 11px; font-weight: 700;
        letter-spacing: .06em; text-transform: uppercase;
    }

    /* Day number + today pill (accent, distinct from birthdays) */
    ha-card.theme-familial .container .day .date .number {
        font-size: 15px; font-weight: 700; line-height: 1; color: var(--fam-ink); background: none;
    }
    ha-card.theme-familial .container .day.today .date .number {
        background-color: var(--fam-accent); color: #fff;
        border-radius: 999px; min-width: 25px; height: 25px; padding: 0 7px;
        display: inline-flex; align-items: center; justify-content: center; font-size: 13px;
    }

    /* Event cards: light tinted fill + coloured left bar + dark contrasted text */
    ha-card.theme-familial .container .day .events .event {
        background-color: color-mix(in srgb, var(--fam-cell), var(--border-color, #888) var(--fam-event-mix));
        border-left: 3px solid var(--border-color, #888);
        border-radius: 7px; padding: 5px 8px 6px; margin-bottom: 5px; color: var(--fam-ink);
    }
    ha-card.theme-familial .container .day .events .event.banner {
        background-color: color-mix(in srgb, var(--fam-cell), var(--border-color, #888) var(--fam-event-mix));
        color: var(--fam-ink);
    }
    /* Month view, TIGHT cells only (single-line ".compact-line" chips): squeeze
       padding + bar so more events fit before the "+N". Roomy cells keep the full
       comfortable card (base familial .event padding). */
    ha-card.theme-familial .container.month-view .day .events .event.compact-line {
        padding: 2px 7px;
        margin-bottom: 2px;
        border-left-width: 2.5px;
    }
    /* Detailed (roomy) month event: icon top-left, small right gap before the text. */
    ha-card.theme-familial .container.month-view .day .events .event:not(.compact-line) .icon {
        padding: 0 6px 0 0;
        --mdc-icon-size: 16px;
    }
    ha-card.theme-familial .container .day .events .event .inner { padding: 0; }
    /* Compact the month-cell header (date + weather) so it steals less vertical
       room from the events — a smaller weather glyph/temps frees ~one extra event
       row per cell. Weather stays legible on a wall display. */
    ha-card.theme-familial .container.month-view .day {
        --weather-icon-size: 17px;
        --weather-temperature-font-size: 0.68em;
    }
    ha-card.theme-familial .container.month-view .day .date .number {
        font-size: 13px;
    }
    ha-card.theme-familial .container.month-view .day .weather { gap: 3px; }
    /* "+N more" chip: a clear, tappable accent pill (not a vague grey box) so it
       reads as "there are N more events here — tap to see them". */
    ha-card.theme-familial .container .day .events .more {
        background: color-mix(in srgb, var(--fam-cell), var(--fam-accent) 16%);
        color: color-mix(in srgb, var(--fam-accent), #000 28%);
        border: 1px solid color-mix(in srgb, var(--fam-cell), var(--fam-accent) 42%);
        border-radius: 999px;
        font-size: 0.72em;
        font-weight: 700;
        line-height: 1.6;
        padding: 0 8px;
        opacity: 1;
    }
    ha-card.theme-familial.dark .container .day .events .more {
        color: color-mix(in srgb, var(--fam-accent), #fff 38%);
        border-color: color-mix(in srgb, var(--fam-cell), var(--fam-accent) 50%);
    }
    ha-card.theme-familial .container .day .events .event .title {
        font-size: 12.5px; font-weight: 600; color: var(--fam-ink);
    }
    /* Long titles stay on ONE line (ellipsis) in the month grid so nothing —
       especially a leading 🔔 marker — wraps onto a 2nd line. min-width:0 lets the
       title shrink inside the flex event so text-overflow can kick in. */
    ha-card.theme-familial .container.month-view .day .events .event:not(.banner) .inner { min-width: 0; }
    ha-card.theme-familial .container.month-view .day .events .event:not(.banner) .title {
        white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }
    /* "Member · Category" meta line (day-events panel / popup). */
    .container .day .events .event .event-meta {
        font-size: 11px;
        color: var(--secondary-text-color, #888);
        margin-top: 1px;
        display: flex;
        align-items: center;
        gap: 5px;
    }
    /* Coloured marker (member/calendar colour) before the "Member · Category". */
    .container .day .events .event .event-meta .meta-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        flex: 0 0 auto;
    }
    /* In the familial theme the colour is set inline (computed in JS from the
       calendar colour) — no color-mix() here, since some kiosk WebViews drop
       the whole declaration and the text falls back to the dark default. */
    ha-card.theme-familial .container .day .events .event .event-meta {
        font-weight: 600;
    }
    ha-card.theme-familial .container .day .events .event .time {
        font-size: 11px; font-weight: 700;
        color: color-mix(in srgb, var(--border-color, #888), #000 32%);
    }
    ha-card.theme-familial.dark .container .day .events .event .time {
        color: color-mix(in srgb, var(--border-color, #888), #fff 45%);
    }
    ha-card.theme-familial .container .day .events .event .location { font-size: 10.5px; color: var(--fam-muted); }
    ha-card.theme-familial .container .day .events .event .icon { color: var(--fam-sub); --mdc-icon-size: 14px; }

    /* Weather temps */
    ha-card.theme-familial .container .day .weather .temperature .high { color: var(--fam-sub); font-weight: 700; }
    ha-card.theme-familial .container .day .weather .temperature .low { color: var(--fam-muted); }
`,nt={};nt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAHlBMVEUAAADL2%2FvK2%2FrH2fnI2vrG2PrJ2%2FvL3fzI3PzG2vz01DCXAAAAB3RSTlMAFzNfjrze%2FOgtNAAAAZBJREFUeNrt2UtuwzAMBFBR%2FN%2F%2Fwm2KFkSbOlJMz84PWQ8tUowDZNxut300WdQIFM7qXwSTbv4tx%2FWmemFQPOwApF4ABxD%2FLWhcicz%2F0HEl9icT0B7YiNWfCSAfdYfMSyHs83tg5lsUcD8hIyA%2FMDEDLoQZQAE0CFFAwQWmgwsYuMB0cAEFFyAHF2B%2FhTAjLhPcIWdwh1wwd6jY6PIF8Aj6U56%2BIP0ZY4cgDu6R%2BkIItEB8Qn5RxAOPjlzmh6EKxA%2BGtCiKjQaNw%2FQirQKf%2Fg8vndeOxA4dp3Fs6GzbjC0%2Bx0kUm2iclLHHqHGNthhoysWwQ8jTXbLYloTpUXEG9ago6B6VnKBlLkrII%2BTjIwQ8Qj6ETtQR8lsY09hGuZ9f3HhevAv5V7gJT7pqnfNAhLv1m5Qv0Vjg7MQnjyXp5Evv90WuaGsbckkb%2B5bZyF92KUsvv0gehDfnWzgj38LjTWT5BqPxPgY9fiHNLUrjrKm5pHN0TAXFF2LLA%2FUyayKWfKJM1%2F%2Fdq2amKsKTxu122%2FYBlItVl6a3MA0AAAAASUVORK5CYII%3D";var ni={};ni="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAHlBMVEUAAADr6%2Bvk5OTn5%2Bfo6Ojo6Ojq6urp6enm5ubf3991rVFGAAAABnRSTlMAIj93rtiU3SZWAAAB6UlEQVR42u2Y247CMBBDc5ux8%2F8%2FvFrQ0otpSdIi7UNOJNQnH5yJQkWYTCaTyWTy74m5GN0dtJJjuJlsvsNyuI1o%2FpYSvxrvgNsNiuJHAICXcI3kx%2BBJuvfrq8EvTNu8QQDYl%2FIdFw3mrQK3r%2BQ7Fsqt89V893z5fCrYGFLow%2FsEAO%2FYIBWMjiF6vwAxtGMjAru7gBBvLzA8BR8TeGgkj%2BUDrCT8F1rJ6foOqaCSeOHlwDGaDzwEayxdOkPaQAywODQC4NiAHVKi3CcgCCD3zxiHAq1AMbArXwWVmwa6SxgX4JH%2FMiyS2HVKcd6AJHcNYD0CnFDXhkVCpPYtAj41WAwEoRXYl6%2BCJ9sG6wrWE6%2BCxfBcepeXnnwV8MWmAVquCnziNYFVB70xYk%2B8CtYsDYj84RihhW0BctVgLbDmdB0BdywNyuEQ0AwrhbdvNRikUvkrsBEUCM0FFOhLTcQQq7hdB%2FlRsOEdgq6HdCeIvLGAXEaDUyCJExi2cECAF5SFshMk9uefksKOfCGfuiwI1ieQRykwbNBQyrLwDhvLJwTGcMnA3TP3K4UDMhvzTxswh0NS7d9%2BaZDDGYUQ%2BgqlcE60dgWlAS2Gj8RSOdaAlkIb2SqbC%2Fx91pJ6%2F1qurVjJOYXJZDKZTN7zA3Auaa9qRnCHAAAAAElFTkSuQmCC";var na={};na="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAOVBMVEUAAADHx8fKysrJycnIyMjHx8fGxsbDw8PBwcG%2Fv7%2FCwsLCwsK%2Bvr67u7u4uLi3t7e4uLi5ubm4uLhyXqCUAAAAE3RSTlMAFkaMtND6%2F%2F%2F%2FCGT%2F%2F7BAhezMkbzxVAAAAi9JREFUeAHtloeS2zAMRF0JrA60yv9%2FbBQagS2YpOj05PiS6zvYURk8Hv5vOp1Op9M5ns6XawjXy%2Fl0bM80c7oGIr5D4XrKZ4ihgCzTwPARKMFsHR%2FDS4axxWdKHM%2BBFNZ%2FqeN83GTwFdZ%2FimWKDMfTJZDBilZcTsfhniFmgPEKp0yREHS6vwK7jLCivQDbv2eYqFjgxkNiFHAevQKJKyJ4RpoKcNMbMt5yHWm83MZ0Q9ZMfLNANo90EvYAiNMmE9sLeH59KWdfkMtISwFjGQ8ZxkXACqSUiVItmJfbNJYXwzjdlrmeGVLmoHS6D1gh%2BgU%2BMNn8Gh%2Bkmelf2QdeB%2B0%2BSOPcFbD3AfCdPiAd76%2FA1JkiNl4voN0HOl0%2FIa6g6AIGqw%2Bi4IGI1ApsfMUHOt77oKGADZkqPgBQ9kFLQdYHcDeo5APZLZA9HwA1H1QLWnZ9uw863QfExq%2FwATt%2BgQ88OR94uN0HRskHWUT2fcBFsEKkPsgiiZoPeIOe%2FfFYcYaJRmJCtEBpKpDb%2BM0Hog5g%2B6fEjQ%2FknYLMrvdXAJ9pL0DWB%2B4Ykcs0FVR2PYz4q30wdB98Gh8M4w%2F5AErFB7aEwO%2F6AHf0a9YHbsk1%2BcCf%2Fe0L4HxAMMRo9AFW%2FBWkTw8fMPx8BTs%2BsLO%2FvwLWDiKvA%2FGAyz6whfa07AUVzAdbagWMxObsn%2B9wPmgqKO96ZCj4IO4VFM%2F%2BG%2BS7fLC366FIOROrBaVd333Q6XQ6nc4Xua9QVFRZEEsAAAAASUVORK5CYII%3D";var nn={};nn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAIaklEQVR42u2dW2wUVRjHjxpjfPDFENEnE33wwRhfvQBt99qWmyCJkSC%2BmCCJ%2BGQkBmI0GhMTwqXljkChpSDdmeVWKxEtl4hxW6E7bdnS0hvdbbcXLi30Qrvs53x0D9My7U7nnG07szMn%2BWWTdnfo%2FH%2FnO%2BfM2dmF2M1udrOb3exmN7vZbbpbd3f3ax0dHeuj0agoU9fe3g5dXV2P6ezsBPwZ%2Fk5GxOfia4jd2Fsi8DoMmAc8Bh6L2G1qPV0jdF4Zol0ZMx68MkwhtCpsEYmGvZIhUFYBT4oQiVVbOBzOYAmSX4Aa%2FFuIlZqq18%2ByBPydZSZqOtYbR4AC%2Fm0knRsN36gC0loCDd%2FoAuTnpZ8EGr4ZBCRInxUSnojZwpefnx4TM11qmk3AGAnmXqLiCZhVAEI3%2BYgZGw496SDAlPMB7rPgSaeLAMRUe0e46kk3AaZZmqZj7zdVFaRj7zfVXIAnnK4C5GMZe0WEFy7pGv7YZWlzczM%2BIlTMk6jeo8brCXv4SZ0AlQQd%2B0wiyrDE8KMRCCsqAayrKhRhr34YK4BfgiICs0u78Z8hDB4J3MfEarC3HmZGAH2%2B6nXYidNiAmYIlUUAjwS1EF4J8kEsEb5KgEoCUwXwD0fyCy0jAJkgfA0J%2BoTgxGy6JShXqPxD0Fg4KkBZHZlKANcWQ7gRblWfZqgABgmaQpRHHIpMMQTx9uj%2BwHboDezmrQANCXoqQKkCw0%2FC3FvMrTUAghPuVB7kFTAZrBWgrwrQlpmCR6LRDhgqXw9QMh9uVxawC9CWoBU0%2FxY4PtFM4SN3rpUBiG6sAFYBSvDaMFUAMuWtCDOF3xlpgYelKwH8OXoFaI39eiohddsUuG41RfAJ7gV2AAgugBOLAEQn3KpgFqAX7QpQHvVdHctPNnzwSE9LEMCfLYe%2FkEUAW%2B9X0FMB%2BgTgRGzU0B8TbYcHf6wDED0Y%2FiiiAwWwvCHDw1QqQN9EjKaMfhV7t8aPY74SPlaBmCULOMjwliQ3qb8lBl9gWMJNED%2B9AifeRPi5iB4BrOGzLFHZBGC5GFXAwD%2BbAEQXDV4lgLn388NzLaBeDRkx%2FJ7GAIAfx%2F0cVgF6guOpBP73CLBkDCWgIwLDZ9cA%2BN0YOKsA7P0agXE9IqyrIHUV0IMZgb6qYgDBgWFrCJi13j%2Fl%2FSDTzQVdbfUQP7UM1%2F2sAlQhMTA7n08wQhUM%2Fv2jauJVIcgCApoC9ITG%2B5ia%2B1GxdGZTwq36S8nD9yOKAP7wUw9myH2%2F0Kz88e1tECv7VD3x%2BikqAbzhp3pSTrr%2BN%2FyqqO%2FKIQxWFfrkAg6ow2QYdqaj95tOQvfNUCLcbI3wc0YRMqG78gh7oKmvgHG931wSolEYPL8R93u0wlcQXXDv4g9wJ1QGfTUC3K0Woa%2FWPzk1fuitPckhTFsivS3FdBJu151LhJ%2BjCjw5Hhkvbs6pUMkTPfDg1EoaVqorgGHoYZiYp2VlEWmFeOnHGBCGqoPsBN7xiBTPeEoyoCt0QR08f8%2BfuU%2Fno2W8tE%2BlgHsVuwB8WTpCT4LonRhfBtwv34hBqXovY4%2FnDp%2F7rupU9J5oQwVuMWN4GoEzBo8IbogLHog0h1K1CuIZdlL%2FpX3snzbpgIGytZOEn80bvgIOPZVHIRKhvZarAhADfYGgIkLUe5NrV5Uf4JQSNkPo2vgcMPTbZ9AeiXBfB9DgDf1FIPSLWzVltDVA7OQHOGnyhK6NLxOidZeS7dto%2FhzPBTuYoYPX%2BupiKoXSczkfQHRyhq0d%2Fp2%2Fvoempib672ox7iOqyLSHDgAzRnivl4T3ecmtgmxPXPTG6JJxWvB74KHP3dF06dA7wWv1pLa2hjKT52wsAcHNuaTlwLLn46cWXwHRM33h47GPz4fo71%2BvrWqsJVLD1bFYV0Co8HPSU7hkPZyYntAp2Pv7D2Vcrite%2B2zwUjGRzh8Yi3UFhAP73wTBMTAakncK6AleCT%2Fucw437fC%2Be3XrEiJt9j6JdQX0Cit%2FjhVnNsSOukJajBx1Ig1yyHFV4Mnwu%2BD%2BwffzbubPJy3bM0mrGusKGDyc9fRIkYMMF06N2DHnHPB7BjFYbdwAggOGxcU3b5Tnz6kv304ayvMnwroCBorc5JGApNDwXUQO%2FyUQUYBW8C4AUaYkAzqLlq%2B6WldJgvVXZP6bCFuAZvhHXUQOF5mrCFCHTqECeguc56T8pU9Je1cRae8nk2ELSB6%2Bk8gBJwS458oMqgNXEz%2BeMdS%2Bc8Hb1%2FKySd02dzJsAUnDF1xjmSszKAPJccLdko9%2BailaTdqOrNLCFjBR%2BCM0fL0CRBeMFM%2B7fu3qmReqWq4TqVHSwhag6vnFifAZBMR9Lojsca2oFr8lUtkWIpVu0sIWMK7nFzswaCYB2PvvH8o6IW1bTIJbckn1Zo%2BMNzlWvhCjAlThswgQ3RA%2FntXXuXvBGzd3ZpK2nVlTxRaAAmj4rAJws63r7Fcbair8pO7fY3qwtoBH4dMxn1WA6IIHh98LXj%2Fz3fNVoQAJVl%2FQg4UFFLppz2cWgOHHSxyx5p3ZOVX5y4m0XTfWFTB4xE1AcHIIQBwwUDCvqCkvizTku0lDnksv1hUQ99FgdQrwOWEUB8TERT2t%2Fi9fbfZ9QVoFJqwrQA5RL3NlFAHyxNstrF53pfUGCbaEWLEFMAkQHNBf6AiEdn%2F4nFSygUgl37BiC2ASIE%2B8nfuyFgS3LSU1W7wcWPhCjFmA4IT%2BIte%2B8B433lkh4%2BHBFqBLgOAYiR13dl6v%2BPWVGulPUhs8y4stQAcvy0DXL841wYuFJFhZSqTASV4sLKDEqQcU8PpQUWaplLfkmeDWhUTakkukrdxYV8Dtg259FLhf7N7vfKtpVy5p3LUwVczgORv7f06xm93sZrn2P%2BHsOlkQh9N3AAAAAElFTkSuQmCC";var nr={};nr="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAyVBMVEUAAADCyKx%2FxLnk1s3ut00P3%2Fni19Mc6P%2Fvs0jk2tYq6P8n6P8n6P%2Fk29j71Uvs4%2BH0o0Po4tgC2%2Fv92kXl4d8E4f3%2BslD1pEL92T%2Fn5eT920b6p0Pr6uj9sE8P5%2F8F5v%2Fp6Ojh4OD%2B2kIL4f3r6uoH5f%2F9qkXq6urp6enr6OHo6Ojn5%2Bfm5ubk5OTr49Pj4uLh4eHd3d3r28Da2trz1pbW1dT32Gn92j792Tv81jv60z33v3jiwZr8tl7%2Fsk%2F%2FsEr%2Fr0f%2FrUUA5f%2BMUhpmAAAAJ3RSTlMABREdHyg1PElPT05PX19mhpOTm6SkrK29vs3P0dHX3uPl7O7x%2BPprAiJZAAAD3klEQVR42u2WbXuiOBSGk%2Foyurvasdrd2nZn1KLYEKtYHbFuZez%2F%2F1GbgM4jQkwA%2BdDrmvs7z03OyeFAfvNpKTfb94PBXbtZJgVAm4PVHm81aFJyYWqDFfA8b1C77Ou3V8d4glU74yFK153HnmU9djuNEj3k369OBJL79AZabVn2MZ0qRT7wMhrqlh3DalDSXicLvDZJQ7VnJzHutd7e3tar9alAkqLTtGsnMx7bLz9giAoG1Li1PVslEDzDAEFA07Q8lq0WSBbSkCAYGObbtkZgRwweKBvVx9IKxkxWCYJUNaI9Wy%2BQfVivIUhzU7u2ViCZy9saE9zlaAAEaLQHgXGXe6aCZyEQBs9LJ6jr8sEiMAjW4C5HhyHAEYQiSjtPByDAEUBo017TVhqBHeH5Zb74oR00S5Ovwbau6fkhPhsNgRLGrPo5QUOZzgRjLUzSpWlbIB6cTzl3mJmAPV4pBV1F%2FvO7Kwyc6QWhgaYa4zFzFlvXdSfcYcxIwDpGlwj58%2B329fXV1VaJ%2FaKeSjDZCIFgZi6wqLZEyOeLbShwpzoBuNY2GQV6eQ8FrjubMMN81jO8puIpvhH5vhTMZlOuEYCS2aCJ%2FLnM95dSMJ1OuKmgcf5TgQJN30V8IJhJwRkDA8qbSq2EDvuhwA0EOING0NU0ASPgHwmEQXkGJtB3uRobAT8imEi4kUC%2FMsfyG%2BGfCJQGdkJXtfTHR4gRiAskjl7QUgho%2F%2BgZLgsEgWyBysBOaSjXPt7fmfsxAQwaQYmo6OyfkCMQFUiDokoMoMfni8QcvvBPBIozmFUIlKwwf76NCKRBKkJgSD4AJWeocimQIwC2YDOdzmCI5GsWDgwzkb%2FwT%2FkZ4C9%2FzbSjEnSIhlKfv2yT83f%2FBZthJgWcJed3KdFBO5tYfMj7qyAUcM5ZQv5Y5Ospx%2BND5svDCbiExfJ5hxID%2Fo3Eg80yEMge8ACHRXD6dWJCM5IOtkspwAEkDEz6DUpMuIqFHzq8DAj6cEK%2F22qUiCF%2F%2F0zmK7kMNT85f0TJRaCj5PxdjVyGryNwLPhH%2BUY5Tob43Uj12195eqrkFux2ygL9Mfz4GP6ZS7CTPJBkvnwEfMks2O0pK0ZmGAqGV9kEuwOqEfj2sedbPsGInikQipRVoO7wLQS3eQTKEfgOwffsAoxAjCEEw0wCFKjIEj0QJRUIKtkFZaLm5pB%2FQzKBEVBA94Ybmlmg2wKV26en2wrJCDpcEBiBgsAIFCWoafZXXh40%2Bys3sRH4C%2FurCLC%2FclPM%2FgIF7S9QxP4CRX2cQWH7C%2Bj31%2BcsUa79BYrZX6C4%2FQX0%2B%2Bs3n4v%2FAbjVlbDYgcSfAAAAAElFTkSuQmCC";var no={};no="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAllBMVEUAAAC5usK8y84R4PrU2OUi6P%2FX3Onqokjd3eL0o0TY3%2BwC2%2FsJ5v%2FW3%2B4A4v0C2fn3p0bj5ObN3%2F3l5ef6qkcK5v%2Fl5ebO3ffp6er9rEYL4f0H5f%2Fq6urp6eno6Ojn5%2Bfk5OTh4eHp3c7U3vLb29vJ3PzH2vvt0rDF2PnW1tbC1Pfxw4n7uWf%2Fsk%2F%2FsEr%2Fr0f%2FrEQA5f%2F%2FZTw0AAAAHHRSTlMABxcqL0RLTGGGjpOeo6aprLW%2BxtDb3%2Bjq6%2B75KExeYQAAA41JREFUeNrtmNtS2zAQhleOcVJTt4SAMcSWHIjJiZjk%2FV%2BuYkm8BlsHLHTRab9huGH4P7S%2FxA7AP00QxSH4I7yuqioAX7CkeoN5m85dhXjLX1deBeyuQpxHFE6SWSZEOosnH9pMKsStZBbGWd5CJGHjfW4EEQwlatKJ7BR3XTWGZGh8mvdRpBE2%2FCwNLiWwad5PUeQJg2jdMsRD7mCaqwSSNIi3aBhccyhynaDgd9u24frL%2BbmaAsmf2obnL%2FYcCL0AWaPhuRpgYGluIeBrFJyOUF0HYM00NwkQsW0MSMycCyAB8l4DUSVRYCNJbQX8LCBsnl1kl09HaDnWElPdLDMKiK1kjWzfPpDQ2IC9gD9tO8RgIDbnE5%2B%2FKJ7ujC2bJmQgzyZ6RaiNJoESzrMINEyU6VxSGOFvTJltBZTPV6UQgpsFSKo2zBT55ctyYWPgJkPaK%2BBit18uF6U0cKMAmYIC0Z%2F%2FuJcCizPwBlXTZa%2BgfJECNFgLMmYeER1gtT8JFiYBMbEomQYk2aCg5Pp8IrO8pgU2vN%2FXJ4EwCIjA4qHRgOqzQGvg3DijsJtfvsh4FCykQGfgH0igD1b2PIG6JSCDSTAzlEAN1yQoEaHON7ccdp5A3RGUwkEA2ccbtKo7AoWBE9rfFlHRohkQCchgEMQKAUuLBtlw3REoDPwzE1AQ0s%2BPA%2BodERr0ggBUJOfvEE3DdE0Joc9PAdEMiYtmQCToTsl%2BQkSwwPxzwyQgyKDIz0BHKIoCB9RiT%2BxQ0TbwDhHoDQuZv6o%2F84rUjwsyKASJ%2BY9AGlArH9kt6dcS78%2BfgRGW7PrjDy%2BbpQQFuKP78hmYCXvikdWmWQ1v8E6%2BSMCGm%2F74w26zwQuFAuRTfBqBDeNuOrLftA7QNZTpBKxg3XQ6ALJswPPIz%2BmU%2FuNj5AqTu%2FyA72GsyL9n8C2w%2B9d%2BxvA9%2FDgQ7fwrUMAcTtZuWBUzengYOQiMA7qYH4%2FzC3fBjSr%2FiFy4Cg6KOx7Mj8g8cBMcVE%2Fg9nji1kEgb9M90wzIZUgyHVE1%2FJMEP2EIh3euQDsh5NZFwEDBnARzB8EYVPwiwa%2FhghtQMiLBaLggADWX5%2FxLGCzQb4FLl3wUmLbA6PfDw%2B8RDAQb9gk%2BAb8C5lkw1u4vd270%2B8udQLG%2FfEH7yxk%2F%2B4vwtL8IP%2FuL8LO%2FCE%2F7i%2FCzvwg%2F%2B4vwtL8Il%2F3lbvCbT%2FvrP38XfwAyJMdyHNNMWAAAAABJRU5ErkJggg%3D%3D";var ns={};ns="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAsVBMVEUAAAD5zEP0z2L81EPcxLb70z%2Fm29X93U%2F0wjH92kP2xjD93lLp4t%2F93Ej4yjPq5OL93Ev81D%2FkxIDt7Ov93Ef4zTPp49z%2B2Tv4yjL%2B3Uzs6%2Bv70jf72k7x8fHv7%2B%2Fu7u7x7uTx6c3m5eT15af44Yvo3L%2F43G393Ej920X920P920Lq05f92kH92j%2F92j392Tv92Tn92D7810L92Df71Dz70jX5zzTvyWD4yzP2xjPyvzPo8pfJAAAAHXRSTlMACRckL0dJVVdwdXmGl5yjo7zHy9PT2%2BLj5ejy%2Bq6%2BcVQAAAPvSURBVHja7ZnbdqpIEEALlOAlcmQO3hlo4gWNGo0KAf%2F%2Fw4bujmmHUho6PrrXinnb26oirqwEnjx5UhrdbHdtZ%2BRmjBy72zZ1eBya2XHCcLlavb%2B%2Fb75ZhU7H1OARGF03XHFEYEtZuV0DfonWHoXLDFEQAdYYNbVf6wsClFFbOWEyPQft6MLHx3Zkggo1O6R%2BaSBjY9cU3r4bhqwg2dEHw606hNYJwyqB3bZT6RK6E4oARxLYfTp6hfU7YZUAL%2BycWmn%2FKFQJ7Aa10n6FACpI9l%2F1Bpwyd9CEv8pTdCloIKMTKgY4HZBg5vxoQ5LAzpQc2JUFNsWB%2FaT40DbySzaEAnu7woKUAkVL0kbILz0BCuwHGtyjvVwiPRpAGtg37w%2BwRJTckAgUjdC8594csi%2FulwaKRhADhLNpQIjnkSCYztxDBhfLN8QYwE2MJcedBcS7JmCNjWArCewNuEWX6cMp8RBkyhPyDXG6N0%2FsUv%2BM6TFkdlkU9uPARAOMSbcTeHcJFrRwkG2IYwKmszwsiFcAWZzYFFvJhigdwDirme8VMzvRhGRDDAcQ%2BnJGHfLC56dkQ5SjjgLGwvfkLE6nz6yA%2FChgoECbeCUgvCALHI9NFOh7pQhOJ5qQDXBEV64Lh%2FQMfIaPwoANOf6WDRCXFSQDHJ2c%2F8UrzZQGOMKPAoNcYFw%2BQA6XAh5ABCYqFxBXYAmmpd%2FRABT4H69eFf6lEBJMF3SY%2FR4NQFHcEP4YZ4ncAGhFuqeMPz2xRH6AAXqGlAncKEschZ%2FhoBOoQ7JCxAsiYMM1f34V8IkbR1Em5X6OhX6MlfF9P0hY4TrQRA%2BRKj5lnUTRic1w%2FMZ4VMBnkEnCl3S8oD9oRf430zMtCHrwmCP7F8g5ja8DHXjIY%2BoLvrLCUSQa6MNa1S92lCbCn%2F%2FFS1f1C%2BZpmoiCBTnGin5BkAVEwYAcr4p%2BAUmzQhzzwgDy1BX8KJBkAV5oAaKv4McrinlhoAHiRUGPj0z9USQGUB3Bv8FaBIYa3KDuq%2BgFX%2FTGLBA34CavCnrB288JIhvu8FdRLzaUxFEc3f9jiD5W1vvkTAO5BSHqb0p6PsAlYEEB9bGCnTL%2FGaCnQRF6v4QdE5zZANSvQzHaHx%2FLpf6vi39YAyn1vo%2FM0v3wBXG%2FnJe%2BX4G39Y%2B%2FJ%2FwS6q%2Fjknaqp34aQPsvbvyznr8VM5%2Bvv4Q%2BsTSoRuMsIWXyNGH%2BSUPlXyznFJMg6Nu3a6BCY%2Fjt5C%2FJLTll2ABFtNYwvbYlMSKKhy22ffVEcmVjL1cgvQqGlSZMHuWJJ5YBj0BrWD32USAq2WF7VkODx6EbLcvuDSdJMhn2bKtl6PDkyZOy%2FAdXbwfjjFzP2wAAAABJRU5ErkJggg%3D%3D";var nl={};nl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAS1BMVEUAAADO1fHO1ejZ4fLR2ezd5vbB0vXDzufS4vzP4PzN3vvV3fDk5%2B%2FAyerc5vfu7u7v7%2B%2Ft7e7k5eavwOrT2OO4y%2FDAzOi2ye%2B%2F0vYf7YBFAAAAGHRSTlMAByNNhqbMO%2F%2F%2F%2F2bRFP%2F%2F%2F%2Bv%2F%2F%2F%2F%2F9qxLSnpnAAACKklEQVR4Ae3U2YKzKgzA8QRBXECgdTnv%2F6RH%2B2V2LWLgzl%2Fn%2Bh8NOHDe7XZDUUlVY6G4Vk276voi9cps9U2HkJ1QW51UpfKkg8ws5Uu9QP%2BZL3IC1rS%2FKMhJN%2B1vAjKS1C91xKr5O0BCNqianQE65%2FPvDcC8%2FabcEcjmpdglrf72s37Gdk1TvcxXYNoDFrLo2yOYa0FHIAvVlh0g%2FmS7f3INqFuyMyPnC3R7cp0A5YfB%2BY1zw9C9ILAhxVuKf3JDngFV220TBr9j6CywmW43T3rgst3K%2BUMKgUd3XePfCQJY1PF6iNPAEe2vOBOw8XGOsSXt%2FAkB4SrjT1FwkfYnVSVfgLGkyvuyrxD8aQEuED6BhnTSJwtG9YK%2FoYjQ8zcUEap8d4jxb1x6DhOfoDyDc%2FEJhjfAKYgIrP6qKjfAvQQstSJH%2BkKH7D6EMtfUfbElPjRH4juyzH78pgZu35nsh%2BDIuVMWvH58ABhWP74i0Ix85JCJ4fVdDxHaMfIrATGSk%2FePZy0rYRHhEJpLeTI%2BN9NqPpxhw6U8vcDnAAuHxCM9T%2BaP%2FKThDREu1GlBNEHCW9ak1cnjcz8LRKB0iXHqr2J9oo07Wybjn%2BePj0jwmFOen2gZ0vLTpocUQo7j471xpPr6o%2FuZBJdnFMVXtYV0ejqtgktwmU5ZEK6yy%2FTfron%2B1t8igGQdQabFAhfq%2Bihfa4QsUMvp77NTPRe0ul%2BWep7rRfbaJsRvt9v%2Fh4jJKdZPEXkAAAAASUVORK5CYII%3D";var nc={};nc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAATlBMVEUAAADj4%2BPp6enn5%2Bfp6enp6enp6enq6urm5ubm5ubg4ODg4ODm5ubo6Ojc3Nww6v8Y6P8T5%2F8m6P8H5v8A5f8L5v8N4PoF4f0C4P0D2%2FuDNJb%2FAAAAGnRSTlMAE2SS0e7%2F%2F7smT%2F%2F%2F%2F%2F0a6ehI%2F%2F%2FbMaX0k6g43vIAAAKLSURBVHgB7JjpmuQgCEVjiBdTgu%2F%2FtrMPX5uuoLSzT5%2F6f09xyb6984eTdjoymBm57OmHpxO4A%2BVHOs6DXwHOjx%2F17ws%2FA%2BD8Q6Ygfg4%2BwWU9%2F2BHAOTVejL7AvC5tF2%2BBz%2FAkNgBxtsNeU7AaXG%2FjmBp08SzAqYfvgDLXyipjAVLJZ0cEeCMbzgmyD94A4wrtYooM%2BdC%2B8w4FBXIF4PiM6w0dOSogJsJPsOUflBDRm0iYgJV7J7gERdIq51AlX7AWdwLai%2FQsngZ6tH2ydALnBlyXIBPAjPoN273oMF8E0gvQLoRhPNNIJ1AKS7AQCCdQM9oRRgKxPKdEXI8X7%2Fni7wUSOwwxT3SqhlURx1ROB9i8b1hn79UwKW%2BFMhoCQnBeMDyL4YytWUM0YvADPm5gBAItxtOhy9ICFJNYLgVbQeM6ACGe7FIigBcvwf2Bu%2BCWhDA4lRE7SfSn2g9STCN2u1Yr%2BTtFtLQADcC2u45fkC%2BpM0hBwpSyx8NEF%2BDky9pczklkv9aII9tQGqT%2FYQLMg55e37ZZqDq1uP0Q9MfQ8T5%2Fzrfv6M4quKCheJpvlAKfpDK1VvGJb1ZfMTxoNJaHdEmX6He%2BdheXR04DAQxGO7ANFrqv9DD1eyBSWH6Hv9wDLpB%2FTD0m2UcWWSTfZi2CsCimuzLtF4AgEXTW9WvFXxhkQSrwp8CtIKKRRDNxZ8Fn1hALIJkLrWCbywgFkEwF1hALCAWQTaXa4GbL0f%2FRXDz5eiDDDdfRMW%2BoXhBNV9kBcbXesFmUcSUc4pqebkfXCuxCLhWWhHMrNWEL%2FNF1tZKKYK2VkIRRLi4vwgSXNpfBAEu7C%2BCDJf3lNv7i85%2BkH2tzrloeC3ayx7vgDWcARqOBsEAAAAASUVORK5CYII%3D";var nd={};nd="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAARVBMVEUAAACy6fHl5eXq6uro6Ojm5ubp6enq6urm5ubi4uLj4%2BPf39%2Fo6Ojh4eES3%2FkP5%2F8k6f8M5%2F8G5v8A5f8G4f0C4P0E2%2FuRTESCAAAAF3RSTlMAEFuV5P%2F%2F%2F8EbLv%2F%2FjCngQ%2Fz%2F%2F6X0kyzJZw0AAAJ0SURBVHgB7NYHlqQ6DIVhOejKLsv7X27ndj0KrELAm%2FzNSZPuTz5Nv7h%2FQkyZISLIJQa6WE2QBZR65XyWFUi%2B0TVCkS2A5EoXSLINAKTQaVmMAMCBTqksdgByoxNuMocLClUMGCodxfsCEs7fXzMAPv982gEkOiDs34dU8iuOAPL5J8gO4EZe2RfIl5%2FAo9aYVURySX3P6SRvgD8KineiqdIT7A3ICHyQFMgSXPvjGvEIqCKSIfoD3NoioJpOvsXrQFsGtBx9y7BFVwHrHPhYYBT0S6QJde8D7R0vAwi07cA%2Bf%2BwzLwKa%2FAHMfAV4EdDqvUSY4XYv6F068sPK%2FCn6BL1j32MK7DgDZv2Pm%2BdFgx3gQe%2Fi%2Fk8FTK2tCsZNCHDOA2P%2BoVB2vcp4StukkGlTx2rcxo0f2IEKH2lfBeXBvERU4LKaf2d%2BLKrCQcfgqhDpilMYc8qs49fHH1WaCOw7AcU7fcQ01RV78TzQaa5csM%2BVDNlxgXS1bz5Drttg7HMg0409%2B%2BsAR3oitP3XB%2Bq5w0Ph4%2FuF9uhWgY197rRPKGwcv%2Fqv%2F1otrJv777C5zz2QR%2BiNGXMP661Xcguxl9yeyqXH%2BtpeXWQxDMNAAG0OYBL4%2Fjct%2BikrOS%2BacvvXEzDO4SP95VIynvHVRtTqVoa51fj7t75Qic8o9IWl0VVbZhm%2BsswehYYyyfBQAhNEproZNvsnSciIm2EjgRkyZTJD8TlSMupm2Oj7TVEmk90MGzfj6zT0SYaHkYl8gfs0Y%2B%2BPyKIqGc%2F8fV%2FHIay%2FYEB%2FAaD%2BWoH9BYD6ywNczsAM4XOE99d7ThHWXyu4vwDWX4Av7K%2B%2FE4vvci3LGOUMAAAAAElFTkSuQmCC";var nh={};nh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAPFBMVEUAAADZ2dnl5eXn5%2Bfo6Ojm5ubp6enq6urg4ODm5ubQ0NDBwcHo6OjExMS9vb2%2Fv7%2FAwMC8vLy9vb23t7ftsDFCAAAAFHRSTlMAEVuR2P%2F%2F%2F%2F67J0z%2F%2F%2F%2Bq%2B4HR%2BIsFiaoAAAJsSURBVHgB7ZWHYusgDEUlY4lhsv%2F%2FXx%2BNGtrEhliJ3vbpXvdUAwwbfzg4uJHYe88hDmie7tjfwdHSkUa%2FQJjABox%2BCWY%2FmlTh%2FDJc8BHeZvRtQYHeLAKz7wvYp7em69uwgQF9B668bqB1Ao%2Bm850LmGz3cy5gZzyAKnhr0HFdvjDabmgVvLNJo04Q9BPQCTgEouy9D9G5NeU4ZT7T1ZBl5vm5I2sF%2FiYQvEODHZ31iKqgqAboMOgF0qMqKDiDU3wvCPeCHPVL2hHkmaBXA2nzRVAN%2BZPhpSXiZcIHdC9gbAheyKdrPlEVdJukz5cKKIghV5K2Rcz9CgqS3y8hKPPrkK%2BK7wLSrSm3oWu8kIVOj5w6Xw4azQ3D%2BquCu9zyhWdDQFbFi4AWDXHVUeanZKlgZmg9rh3z2nCBJH5uaAiQldwalKnSbRGMrOIhXuheFolYQa6BM8MADSIrIApEWQT59iKGBA2QdAVk%2BewRgiYuKwpoChy0GQ3yCaFDUDQoS76mgNVj6OQTQpdEmvy5gAZ4Aob1%2FVE3SBjp9fwIa3A9A%2FX642AdGKnz%2F2d9%2F%2BfgSJnnSCgv5pND0IAuEHGbh%2FQg8TpwcjE8Z4xuSLCx8YewK8DPZF%2FYBL9DgGlJkBCsOBwP%2BCjA8k0wIpXU3elecDqWzxLYcN5%2FcJy%2BBFOJL5zBiJMYzkkE6Sz5J8MpH0Rx%2FXCQeBmLGUn6VCnVWDNdpIp94TKBPTKK2vy%2FTlBXs66s8LcMGQ%2Bfmy%2FvZGXRsPkS%2F3XQRGE2Csm7fL8qLqZXRaqbI4K6UWZzOOyXruv94U984Pz5z%2BRNcCnAxsYv5gcBJmV5WFk6DwAAAABJRU5ErkJggg%3D%3D";var nu={};nu="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAYFBMVEUAAADT3t%2Fh4eHq6urp6enn5%2Bfp6enq6urm5ubG0NLLy8uds7bo6Ojj4%2BPn5%2Bfh4eHe3t4U5%2F8Y5P0B5f%2FExMS%2Bvr4K5v8D3vy%2Bvr4A3%2F28vLy9vb29vb29vb3BwcG4uLjMVSTuAAAAH3RSTlMAD1uV0e7%2F%2F7ohOgX%2F%2F%2F%2BM%2F%2Bg6%2F%2F3%2F252t9H3R8%2F%2BTcABA0AAAAzBJREFUeAHsmAe6rCAMhUWGBO8kwf1v9jbsSonM6%2B9fwPm%2Fk1jpfnP%2BY3r7cICI4HxvXp0%2BWMAd4IdXxj%2FwBKB7e9VsPF4BgO4lLSxeA5%2Bgb45%2FPjAjAHDPxvEQ5gWATWN6wzQwGxp2bbAgiNzu8HR1AjQ3BQ%2BsE4Brvz7zArCtC0jnN1xKvihoG9KAGgG86TesE7gfXACAmYUQ0XkbaupYrUDGLwPFnZMtbl20AlwEEWtarlGEM%2BPIIouACPqcoNcLeGTeCD6xrXfxcQnjQUC%2B%2BTG0hcZPw1aQ7eBuCmYDTST3QOp8gPHbsBeASQhu5Mt3PssiyA5JnR8b8GSglUF7nwFkG0QDUamCU%2BcDzfksW4HoLlOAXIMpn4WKM7LaeACO%2BZGNoK9%2FVECVIDpKSzCgio8X0VyAZTslX7VlKELzBqJjNbhrQYDq8AgvG5gleYEBJXP%2BxpEdUfcAFbLJXzaRfVgMoi0QA2VL9oHqlQViHMnRMKQERlGBlrclHeEuSSBFAYkCOhFiWNueRZIFZMj%2BgCgGlChguxyG6wqk89kUfgK5LV%2F6roBxUIBivn7Dy4%2B4lOefyvddDYGz148k8yVUH4Zwej5CqXzuNcc5TJf5X8BlPgfTaTDBsUCaQ%2FoYhjtHasG7sYjz4aO9OtlyEASiMHwrO6xNBolYiL7%2FWzYcbKtP5tBmzpdxVb8zC4Ovh2HGTZnVyuB2eL2J1vinOsJBcf4cBRvhENqM6EaB7W9ge5vAejNZ3yTQaKDB9cgcChjaOULlx8jVjnYD5KzDpNVAi6tVcWot%2FDfAUsd%2F1UyHyNukqzRQdTbxM51klpDnmRwwuRiED5zlBiXI5USfv5LgCAo8FhpGGeNjQgVvsGPdtG2zRiE97no%2BZsdiR8K4Be7tqL9JYFHrGagXmFvlp%2BmJ9QfOAhFKkcuz%2BxD1OeF2xxFzYYFlujRDlC7ZZOdcSxcJSuR56dLMgXTJhsRD9TZHUcCEEAZhaAAsQ%2FxnMJE4v7zgBkeABhJywWFCXRh1VL7gaGB3wSHWABOKaWAHQwPgGwTAGmDcIgAJI8FtApBZ5mOIoEputHKc3jfFjOf29QPQe5BuJum%2B4AAAAABJRU5ErkJggg%3D%3D";var nm={},nf={};nf="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2219%22%20height%3D%2220%22%20viewBox%3D%220%200%2019%2020%22%3E%3Cpath%20fill%3D%22%23d8d8d8%22%20d%3D%22M1%208a1%201%200%200%201%200-2h8a2%202%200%201%200-1.414-3.414%201%201%200%200%201-1.414-1.414A4%204%200%201%201%209%208Zm15%202a1%201%200%201%200-.707-1.707%201%201%200%200%201-1.414-1.414A3%203%200%201%201%2016%2012H2a1%201%200%200%201%200-2Zm-1%206H1a1%201%200%200%201%200-2h14a3%203%200%201%201-2.121%205.121%201%201%200%201%201%201.414-1.414A1%201%200%201%200%2015%2016%22%2F%3E%3C%2Fsvg%3E";let np={"clear-day":t(nm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAKlBMVEUAAAD4yz%2F81kP71UL71kD81kD81z%2F91z793Eb920L92kD92j792Tv92TexM71sAAAACHRSTlMACx9Qc5vL5%2BHfWOMAAAKCSURBVHja7ZkxFuMwCAUlSwIki%2Ftfdzcvu6YQzjdxSk%2F6GQN5KeL08PBwma3URsQswkzUatnS78ilkYj0f4y%2F9C7USk6%2FoDRzW2GMfe%2FSSrpJriwvvMCLzjXf1Z8G3owbicJysAbGfiS%2BW9RGYrgjHAzaUpgiAgNGeIjcJBSYo%2BXgehY%2BB%2BZO200%2FCMx5vbCxfBOYvMX9RhcUsALeT3yCN5QTJJs%2FMsH1QhMjNMGblgAF%2BFFgFnAAuRXAhybfvpxgCRgEFhQewAJ4SZl9u3QJBDinM6rvD06gNTbAsX9wAgucjlBP7LEBpp6OwOLTQydQVb7%2BFerrBAMHtCSPdn4BCW1Itbkndt3edxQH9uxt6C0Ukx%2BNaMDfUTuMR6h%2F6fd3RN3M5nYXhAPk%2FY72l%2B5wW8MbAAV0W0%2FwNkg%2FvDf83hFq77J8DPNfC9T1xv8nkG52Cfot0JwbL0g%2F8eMBlPyAzbDogR8H2J7aZYQGUD4L3PCDANBf9BuRwHD88QADfcAPboD0vh8HaIyx2n0%2FHkDJCXxmB34YaL%2Fz%2Bz8VFet9vx%2BoS6AAfcDv%2F1xvwB7z65YWaAf2iJ%2FSStuvM1GgpZVy1%2B%2BfwMgjoAf%2BmZNDu%2BPHG8I7wn5%2FQwbH9b6fk0%2BFete%2FJmryyRzWT3XgnOAIWG%2FPP%2FEAeITpo2CAhTKRHT%2B%2FlvQBwnJDXQj822VqgPrPj%2F71KhNi6%2FEoCdCu%2Bn1aQmS6qHcblNMPCmbHfv%2FQge2jA8cLb9UEflQgsHwXMj8kE7CD%2FWNyC%2Bq15RSj8DQU2JVLCrORTpObHqw%2FNoSCRwePD8mVsf72mzSsv0lpfGpv5WcvS3Uh8LI08rpX9Xjd%2B%2FDwcJU%2FkH3TfyEXazkAAAAASUVORK5CYII%3D"),"clear-night":t(nt),cloudy:t(ni),overcast:t(ni),fog:t(na),hail:t(nu),lightning:t(nn),"lightning-rainy":t(nr),"partly-cloudy-day":t(ns),"partly-cloudy-night":t(nl),partlycloudy:t(ns),pouring:t(nc),rain:t(nd),rainy:t(nd),sleet:t(nu),snow:t(nh),snowy:t(nh),"snowy-rainy":t(nu),sunny:t(nm),wind:t(nf),windy:t(nf),"windy-variant":t(nf)},nv={...np,sunny:t(nt),partlycloudy:t(nl),"lightning-rainy":t(no)};class ny extends es{static styles=ne;_initialized=!1;_loading=0;_events={};_calendarEvents={};_calendars;_numberOfDays;_numberOfDaysIsMonth;_updateInterval;_noCardBackground;_eventBackground;_compact;_theme;_language;_weather;_dateFormat;_timeFormat;_multiDayTimeFormat;_multiDayMode;_locationLink;_startDate;_hideWeekend;_startingDay;_startingDayOffset;_weatherForecast=null;_weatherUnsub=null;_showLocation;_hidePastEvents;_hideAllDayEvents;_hideDaysWithoutEvents;_hideTodayWithoutEvents;_filter;_filterText;_replaceTitleText;_combineSimilarEvents;_showLegend;_legendToggle;_actions;_columns;_loader;_showNavigation;_navigationOffset=0;_updateEventsTimeouts=[];_calendarErrors=[];_createEndTouched=!1;_drawing=!1;_hasDrawing=!1;_canvasReady=!1;_createCalendar=null;_selectedDay=null;_clockInterval=null;_views;_showHeader;constructor(){super(),this._calendarVisibility={},this._currentView="Week",this._createDuration="60",this._createShowAdvanced=!1,this._createTitle=null,this._createStartTime=null,this._aiLoading=!1,this._aiError=null,this._aiResult=null,this._eraserMode=!1,this._createCategory=""}set hass(e){let t=this._hass;if(this._hass=e,!t)return void this.requestUpdate();let i=this._weather&&this._weather.entity,a=(e.themes&&e.themes.darkMode)!==(t.themes&&t.themes.darkMode),n=i&&e.states[i]!==t.states[i],r=e.states["sun.sun"]!==t.states["sun.sun"];(a||n||r)&&this.requestUpdate()}get hass(){return this._hass}static get DEFAULT_CATEGORIES(){return[{emoji:"🏃",fr:"Sport",en:"Sport",icon:"m3rf:directions-run"},{emoji:"🩺",fr:"Médical",en:"Medical",icon:"m3rf:stethoscope"},{emoji:"🎓",fr:"École",en:"School",icon:"m3rf:school"},{emoji:"💼",fr:"Travail",en:"Work",icon:"m3rf:work"},{emoji:"🍽️",fr:"Repas",en:"Meal",icon:"m3rf:restaurant"},{emoji:"🚐",fr:"Vacances",en:"Holidays",icon:"m3rf:luggage"},{emoji:"🎉",fr:"Fête",en:"Party",icon:"m3rf:celebration"},{emoji:"🛒",fr:"Courses",en:"Shopping",icon:"m3rf:shopping-cart"}]}static getConfigElement(){return document.createElement("family-calendar-card-editor")}static getStubConfig(){return{title:"Family Calendar",locale:"en",defaultView:"Week",startingDay:"monday",showHeader:!0,views:["Today","Tomorrow","Week","Biweek","Month"],calendars:[{entity:"calendar.family",name:"Family",icon:"mdi:calendar",color:"#4A90E2"}],weather:{entity:"weather.home",showCondition:!0,showTemperature:!0,showLowTemperature:!0}}}static get properties(){return{_days:{state:!0},_config:{state:!0},_error:{state:!0},_currentEventDetails:{state:!0},_hideCalendars:{state:!0},_showCreateEventDialog:{state:!0},_showEditEventDialog:{state:!0},_editFormData:{state:!0},_currentView:{state:!0},_calendarVisibility:{state:!0},_showRecurringConfirmDialog:{state:!0},_showDeleteRecurringDialog:{state:!0},_createRecurrenceType:{state:!0},_createRecurrenceEndType:{state:!0},_createDuration:{state:!0},_createShowAdvanced:{state:!0},_createTitle:{state:!0},_createStartTime:{state:!0},_aiLoading:{state:!0},_aiError:{state:!0},_aiResult:{state:!0},_eraserMode:{state:!0},_createCategory:{state:!0},_dayEventsPopup:{state:!0}}}setConfig(e){if(this._config=e,!e.calendars)throw Error("No calendars are configured");for(let t of(this._configRev=(this._configRev||0)+1,this._numberOfDaysIsMonth=this._isNumberOfDaysMonth(e.days??7),this._locale=e.locale??"en",this._title=e.title??null,this._calendars=this._applyDefaultColors(e.calendars),this._categories=this._buildCategories(e.eventCategories),this._materialSymbols=e.materialSymbols??!1,this._calByEntity={},this._calendars))this._calByEntity[t.entity]=t;this._categoryEmojiList=[...this._categories.map(e=>e.emoji)].sort((e,t)=>t.length-e.length),this._categoryCandidates=this._categories.map(e=>({emoji:e.emoji,icon:e.icon})).filter(e=>e.emoji).sort((e,t)=>t.emoji.length-e.emoji.length),this._regexCache=new Map,this._defaultCalendar=e.defaultCalendar??null,this._weather=this._getWeatherConfig(e.weather),this._numberOfDays=this._getNumberOfDays(e.days??7),this._hideWeekend=e.hideWeekend??!1,this._highlightWeekend=e.highlightWeekend??!1,this._weekendColor=e.weekendColor||null,this._weekendDays=Array.isArray(e.weekendDays)&&e.weekendDays.length?e.weekendDays.map(e=>parseInt(e)).filter(e=>e>=1&&e<=7):[6,7],this._showNavigation=e.showNavigation??!0,this._swipeNavigation=e.swipeNavigation??!0,this._startingDay=e.startingDay??"today",this._startingDayOffset=e.startingDayOffset??0,this._showWeekDayText=e.showWeekDayText??!0,this._startDate=this._getStartDate(),this._updateInterval=e.updateInterval??60,this._slotStartHour=parseInt(e.slotStartHour)||7,this._slotEndHour=parseInt(e.slotEndHour)||22,this._aiTaskEntity=e.aiTaskEntity??null,this._aiQuickAdd=e.aiQuickAdd??null,this._handwriting=e.handwriting??!0,this._geminiApiKey=e.geminiApiKey??"",this._geminiModel=e.geminiModel??"gemini-2.5-flash",this._claudeApiKey=e.claudeApiKey??"",this._claudeModel=e.claudeModel??"claude-opus-4-8",this._aiProvider=e.aiProvider??null,this._noCardBackground=e.noCardBackground??!1,this._eventBackground=e.eventBackground??"var(--card-background-color, inherit)",this._compact=e.compact??!0,this._theme=e.theme??"skylight",this._floatingButton=e.floatingButton&&"object"==typeof e.floatingButton?e.floatingButton:null,this._dayFormat=e.dayFormat??null,this._dateFormat=e.dateFormat??"cccc d LLLL yyyy",this._timeFormat=e.timeFormat??"HH:mm",this._multiDayTimeFormat=e.multiDayTimeFormat??"d LLL HH:mm",this._multiDayMode=e.multiDayMode??"banner";let t=e.locationLink??"https://www.google.com/maps/search/?api=1&query=";this._locationLink=/^https?:\/\//i.test(t)?t:"https://www.google.com/maps/search/?api=1&query=",this._showTitle=e.showTitle??!0,this._showEventTitle=e.showEventTitle??!0,this._showHeaderDate=e.showHeaderDate??!0,this._showHeaderClock=e.showHeaderClock??!0,this._colorFullEvent=e.colorFullEvent??!0,this._showDescription=e.showDescription??!1,this._showLocation=e.showLocation??!0,this._showLocationInForm=e.showLocationInForm??!0,this._googleApiKey=e.googleApiKey??"",this._showTime=e.showTime??!1,this._showDayName=e.showDayName??!1,this._dayHeaderFontSize=e.dayHeaderFontSize??null,this._dayHeaderColor=e.dayHeaderColor??null,this._showDate=e.showDate??!1,this._showCalendarName=e.showCalendarName??!1,this._showWeather=e.showWeather??!0,this._showCurrentWeather=e.showCurrentWeather??!1,this._hidePastEvents=e.hidePastEvents??!1,this._hideAllDayEvents=e.hideAllDayEvents??!1,this._hideDaysWithoutEvents=e.hideDaysWithoutEvents??!1,this._hideTodayWithoutEvents=e.hideTodayWithoutEvents??!1,this._filter=e.filter??!1,this._filterText=e.filterText??!1,this._replaceTitleText=e.replaceTitleText??!1,this._stripTitlePrefixes=Array.isArray(e.stripTitlePrefixes)?e.stripTitlePrefixes:[],this._stripTitleRegexes=this._buildStripTitleRegexes(this._stripTitlePrefixes),this._combineSimilarEvents=e.combineSimilarEvents??!1,this._showLegend=e.showLegend??!1,this._legendToggle=e.legendToggle??!1,this._actions=e.actions??!1,this._columns=e.columns??{},this._maxEvents=e.maxEvents??!1,this._maxDayEvents=e.maxDayEvents??!1,this._hideCalendars=(e.calendars||[]).reduce((e,t)=>(t.initiallyHidden&&t.entity&&e.push(t.entity),e),[]),e.locale&&(ef.Settings.defaultLocale=e.locale);let i=this.constructor.LOCALE_TEXTS[e.locale]??{};this._language=Object.assign({},{fullDay:"Entire day",noEvents:"No events",moreEvents:"More events",today:"Today",tomorrow:"Tomorrow",yesterday:"Yesterday",sunday:ef.Info.weekdays("long")[6],monday:ef.Info.weekdays("long")[0],tuesday:ef.Info.weekdays("long")[1],wednesday:ef.Info.weekdays("long")[2],thursday:ef.Info.weekdays("long")[3],friday:ef.Info.weekdays("long")[4],saturday:ef.Info.weekdays("long")[5],editEvent:"Edit",deleteEvent:"Delete",eventTitle:"Title",eventCalendar:"Calendar",eventStart:"Start",eventEnd:"End",eventLocation:"Location",cancel:"Cancel",create:"Create",newEvent:"New event",save:"Save",editEventTitle:"Edit event",titleRequired:"Title is required",week:"Week",biweek:"Biweek",month:"Month",eventRecurrence:"Repeat",recurrenceNone:"No repeat",recurrenceDaily:"Daily",recurrenceWeekly:"Weekly",recurrenceMonthly:"Monthly",recurrenceYearly:"Yearly",editThisEvent:"This event only",editAllEvents:"All events",editRecurringTitle:"Edit recurring event",deleteThisEvent:"This event only",deleteAllEvents:"All events",deleteRecurringTitle:"Delete recurring event",recurrenceInterval:"Repeat interval",recurrenceEnds:"Ends",recurrenceEndsNever:"Never",recurrenceEndsOnDate:"On date",recurrenceEndsAfter:"After",recurrenceOccurrences:"occurrences",recurrenceDays:"days",recurrenceWeeks:"weeks",recurrenceMonths:"months",recurrenceMonthlyOn:"Monthly on day",eventNotify:"Notification",eventDuration:"Duration",eventDate:"Date",advancedOptions:"Advanced options",quickAdd:"e.g. 9am dentist",aiAnalyze:"Analyze with AI",handwriteHint:"Write the event here (e.g. 9am dentist)",clearDrawing:"Clear",eraser:"Eraser",pen:"Pen"},i,e.texts??{}),this._showHeader=e.showHeader??!0,this._fillHeight=e.fillHeight??!1,this._views="string"==typeof e.views?e.views.split(",").map(e=>e.trim()).filter(Boolean):e.views??["Today","Tomorrow","Week","Biweek","Month"];let a=(()=>{try{return localStorage.getItem("skylight-calendar-view")}catch(e){return null}})(),n=e.defaultView??"Week";this._currentView=a&&this._views.includes(a)?a:n;let r={};(e.calendars||[]).forEach(e=>{r[e.entity]=!this._calendarVisibility?.hasOwnProperty(e.entity)||this._calendarVisibility[e.entity]}),this._calendarVisibility=r,this._applyViewSettings(),this.isConnected&&this._startClock()}getCardSize(){if(this._numberOfDaysIsMonth)return 10;let e=this._numberOfDays||7;return e>=14?9:e>=7?7:e>1?5:4}getGridOptions(){let e={columns:12,min_columns:6};if(this._numberOfDaysIsMonth)return{...e,rows:8,min_rows:4};let t=this._numberOfDays||7;return t>=14?{...e,rows:7,min_rows:4}:t>=7?{...e,rows:6,min_rows:3}:t>1?{...e,rows:5,min_rows:3}:{...e,rows:4,min_rows:2}}_isNumberOfDaysMonth(e){return"month"===String(e).toLowerCase().trim()}static LOCALE_TEXTS={fr:{fullDay:"Toute la journée",noEvents:"Aucun événement",moreEvents:"Plus d'événements",today:"Aujourd'hui",tomorrow:"Demain",yesterday:"Hier",editEvent:"Modifier",deleteEvent:"Supprimer",eventTitle:"Titre",eventCalendar:"Calendrier",eventStart:"Début",eventEnd:"Fin",eventLocation:"Lieu",cancel:"Annuler",create:"Créer",newEvent:"Nouvel événement",save:"Enregistrer",editEventTitle:"Modifier l'événement",titleRequired:"Le titre est requis",week:"Semaine",biweek:"2 Semaines",month:"Mois",eventRecurrence:"Répétition",recurrenceNone:"Pas de répétition",recurrenceDaily:"Journalier",recurrenceWeekly:"Hebdomadaire",recurrenceMonthly:"Mensuelle",recurrenceYearly:"Annuelle",editThisEvent:"Cet événement uniquement",editAllEvents:"Tous les événements",editRecurringTitle:"Modifier l'événement récurrent",deleteThisEvent:"Cet événement uniquement",deleteAllEvents:"Tous les événements",deleteRecurringTitle:"Supprimer l'événement récurrent",recurrenceInterval:"Intervalle de répétition",recurrenceEnds:"Se termine",recurrenceEndsNever:"Jamais",recurrenceEndsOnDate:"À une date",recurrenceEndsAfter:"Après",recurrenceOccurrences:"occurrences",recurrenceDays:"jours",recurrenceWeeks:"semaines",recurrenceMonths:"mois",recurrenceMonthlyOn:"Chaque mois le",eventNotify:"Notification",eventDuration:"Durée",eventDate:"Date",advancedOptions:"Options avancées",quickAdd:"ex : 9h dentiste",aiAnalyze:"Analyser avec l’IA",handwriteHint:"Écrivez l’événement ici (ex : 9h dentiste)",clearDrawing:"Effacer",eraser:"Gomme",pen:"Stylo"},de:{fullDay:"Ganztägig",noEvents:"Keine Termine",moreEvents:"Mehr Termine",today:"Heute",tomorrow:"Morgen",yesterday:"Gestern",editEvent:"Bearbeiten",deleteEvent:"Löschen",eventTitle:"Titel",eventCalendar:"Kalender",eventStart:"Beginn",eventEnd:"Ende",eventLocation:"Ort",cancel:"Abbrechen",create:"Erstellen",newEvent:"Neuer Termin",save:"Speichern",editEventTitle:"Termin bearbeiten",titleRequired:"Titel ist erforderlich",week:"Woche",biweek:"2 Wochen",month:"Monat",eventRecurrence:"Wiederholung",recurrenceNone:"Keine Wiederholung",recurrenceDaily:"Täglich",recurrenceWeekly:"Wöchentlich",recurrenceMonthly:"Monatlich",recurrenceYearly:"Jährlich",editThisEvent:"Nur dieses Ereignis",editAllEvents:"Alle Ereignisse",editRecurringTitle:"Wiederkehrendes Ereignis bearbeiten",deleteThisEvent:"Nur dieses Ereignis",deleteAllEvents:"Alle Ereignisse",deleteRecurringTitle:"Wiederkehrendes Ereignis löschen",recurrenceInterval:"Wiederholungsintervall",recurrenceEnds:"Endet",recurrenceEndsNever:"Nie",recurrenceEndsOnDate:"Am Datum",recurrenceEndsAfter:"Nach",recurrenceOccurrences:"Wiederholungen",recurrenceDays:"Tagen",recurrenceWeeks:"Wochen",recurrenceMonths:"Monaten",recurrenceMonthlyOn:"Monatlich am",eventNotify:"Benachrichtigung",eventDuration:"Dauer",eventDate:"Datum",advancedOptions:"Erweiterte Optionen",quickAdd:"z. B. 9 Uhr Zahnarzt",aiAnalyze:"Mit KI analysieren",handwriteHint:"Termin hier schreiben (z. B. 9 Uhr Zahnarzt)",clearDrawing:"Löschen",eraser:"Radierer",pen:"Stift"},es:{fullDay:"Todo el día",noEvents:"Sin eventos",moreEvents:"Más eventos",today:"Hoy",tomorrow:"Mañana",yesterday:"Ayer",editEvent:"Editar",deleteEvent:"Eliminar",eventTitle:"Título",eventCalendar:"Calendario",eventStart:"Inicio",eventEnd:"Fin",eventLocation:"Ubicación",cancel:"Cancelar",create:"Crear",newEvent:"Nuevo evento",save:"Guardar",editEventTitle:"Editar evento",titleRequired:"El título es obligatorio",week:"Semana",biweek:"2 Semanas",month:"Mes",eventRecurrence:"Repetición",recurrenceNone:"Sin repetición",recurrenceDaily:"Diario",recurrenceWeekly:"Semanal",recurrenceMonthly:"Mensual",recurrenceYearly:"Anual",editThisEvent:"Solo este evento",editAllEvents:"Todos los eventos",editRecurringTitle:"Editar evento recurrente",deleteThisEvent:"Solo este evento",deleteAllEvents:"Todos los eventos",deleteRecurringTitle:"Eliminar evento recurrente",recurrenceInterval:"Intervalo de repetición",recurrenceEnds:"Termina",recurrenceEndsNever:"Nunca",recurrenceEndsOnDate:"En una fecha",recurrenceEndsAfter:"Después de",recurrenceOccurrences:"ocurrencias",recurrenceDays:"días",recurrenceWeeks:"semanas",recurrenceMonths:"meses",recurrenceMonthlyOn:"Cada mes el",eventNotify:"Notificación",eventDuration:"Duración",eventDate:"Fecha",advancedOptions:"Opciones avanzadas",quickAdd:"ej.: 9h dentista",aiAnalyze:"Analizar con IA",handwriteHint:"Escribe el evento aquí (ej.: 9h dentista)",clearDrawing:"Borrar",eraser:"Goma",pen:"Lápiz"},it:{fullDay:"Tutto il giorno",noEvents:"Nessun evento",moreEvents:"Più eventi",today:"Oggi",tomorrow:"Domani",yesterday:"Ieri",editEvent:"Modifica",deleteEvent:"Elimina",eventTitle:"Titolo",eventCalendar:"Calendario",eventStart:"Inizio",eventEnd:"Fine",eventLocation:"Luogo",cancel:"Annulla",create:"Crea",newEvent:"Nuovo evento",save:"Salva",editEventTitle:"Modifica evento",titleRequired:"Il titolo è obbligatorio",week:"Settimana",biweek:"2 Settimane",month:"Mese",eventRecurrence:"Ripetizione",recurrenceNone:"Nessuna ripetizione",recurrenceDaily:"Giornaliero",recurrenceWeekly:"Settimanale",recurrenceMonthly:"Mensile",recurrenceYearly:"Annuale",editThisEvent:"Solo questo evento",editAllEvents:"Tutti gli eventi",editRecurringTitle:"Modifica evento ricorrente",deleteThisEvent:"Solo questo evento",deleteAllEvents:"Tutti gli eventi",deleteRecurringTitle:"Elimina evento ricorrente",recurrenceInterval:"Intervallo di ripetizione",recurrenceEnds:"Termina",recurrenceEndsNever:"Mai",recurrenceEndsOnDate:"In una data",recurrenceEndsAfter:"Dopo",recurrenceOccurrences:"occorrenze",recurrenceDays:"giorni",recurrenceWeeks:"settimane",recurrenceMonths:"mesi",recurrenceMonthlyOn:"Ogni mese il",eventNotify:"Notifica",eventDuration:"Durata",eventDate:"Data",advancedOptions:"Opzioni avanzate",quickAdd:"es.: 9 dentista",aiAnalyze:"Analizza con IA",handwriteHint:"Scrivi qui l’evento (es.: 9 dentista)",clearDrawing:"Cancella",eraser:"Gomma",pen:"Penna"},nl:{fullDay:"Hele dag",noEvents:"Geen evenementen",moreEvents:"Meer evenementen",today:"Vandaag",tomorrow:"Morgen",yesterday:"Gisteren",editEvent:"Bewerken",deleteEvent:"Verwijderen",eventTitle:"Titel",eventCalendar:"Agenda",eventStart:"Begin",eventEnd:"Einde",eventLocation:"Locatie",cancel:"Annuleren",create:"Aanmaken",newEvent:"Nieuw evenement",save:"Opslaan",editEventTitle:"Evenement bewerken",titleRequired:"Titel is verplicht",week:"Week",biweek:"2 Weken",month:"Maand",eventRecurrence:"Herhaling",recurrenceNone:"Geen herhaling",recurrenceDaily:"Dagelijks",recurrenceWeekly:"Wekelijks",recurrenceMonthly:"Maandelijks",recurrenceYearly:"Jaarlijks",editThisEvent:"Alleen dit evenement",editAllEvents:"Alle evenementen",editRecurringTitle:"Terugkerend evenement bewerken",deleteThisEvent:"Alleen dit evenement",deleteAllEvents:"Alle evenementen",deleteRecurringTitle:"Terugkerend evenement verwijderen",recurrenceInterval:"Herhalingsinterval",recurrenceEnds:"Eindigt",recurrenceEndsNever:"Nooit",recurrenceEndsOnDate:"Op datum",recurrenceEndsAfter:"Na",recurrenceOccurrences:"herhalingen",recurrenceDays:"dagen",recurrenceWeeks:"weken",recurrenceMonths:"maanden",recurrenceMonthlyOn:"Maandelijks op",eventNotify:"Melding",eventDuration:"Duur",eventDate:"Datum",advancedOptions:"Geavanceerde opties",quickAdd:"bijv.: 9u tandarts",aiAnalyze:"Analyseren met AI",handwriteHint:"Schrijf hier het evenement (bijv.: 9u tandarts)",clearDrawing:"Wissen",eraser:"Gum",pen:"Pen"},pt:{fullDay:"Dia inteiro",noEvents:"Sem eventos",moreEvents:"Mais eventos",today:"Hoje",tomorrow:"Amanhã",yesterday:"Ontem",editEvent:"Editar",deleteEvent:"Excluir",eventTitle:"Título",eventCalendar:"Calendário",eventStart:"Início",eventEnd:"Fim",eventLocation:"Local",cancel:"Cancelar",create:"Criar",newEvent:"Novo evento",save:"Salvar",editEventTitle:"Editar evento",titleRequired:"O título é obrigatório",week:"Semana",biweek:"2 Semanas",month:"Mês",eventRecurrence:"Repetição",recurrenceNone:"Sem repetição",recurrenceDaily:"Diário",recurrenceWeekly:"Semanal",recurrenceMonthly:"Mensal",recurrenceYearly:"Anual",editThisEvent:"Apenas este evento",editAllEvents:"Todos os eventos",editRecurringTitle:"Editar evento recorrente",deleteThisEvent:"Apenas este evento",deleteAllEvents:"Todos os eventos",deleteRecurringTitle:"Excluir evento recorrente",recurrenceInterval:"Intervalo de repetição",recurrenceEnds:"Termina",recurrenceEndsNever:"Nunca",recurrenceEndsOnDate:"Em uma data",recurrenceEndsAfter:"Após",recurrenceOccurrences:"ocorrências",recurrenceDays:"dias",recurrenceWeeks:"semanas",recurrenceMonths:"meses",recurrenceMonthlyOn:"Todo mês no dia",eventNotify:"Notificação",eventDuration:"Duração",eventDate:"Data",advancedOptions:"Opções avançadas",quickAdd:"ex.: 9h dentista",aiAnalyze:"Analisar com IA",handwriteHint:"Escreva o evento aqui (ex.: 9h dentista)",clearDrawing:"Limpar",eraser:"Borracha",pen:"Caneta"}};static DURATION_PRESETS=[30,60,90,120];static PASTEL_COLORS=["#7FC8F8","#FFB5A7","#B8E0D2","#E4C1F9","#FFD6A5","#CAFFBF","#FFC6FF","#A0C4FF","#FDFFB6","#BDB2FF"];_applyDefaultColors(e){return e.map((e,t)=>e.color?e:{...e,color:this.constructor.PASTEL_COLORS[t%this.constructor.PASTEL_COLORS.length]})}_calendarColor(e){if(e&&e.color)return e.color;let t=(this._calendars||[]).findIndex(t=>t.entity===(e&&e.entity)),i=this.constructor.PASTEL_COLORS;return i[(t>=0?t:0)%i.length]}_isWritable(e){return(1&(this.hass?.states?.[e]?.attributes?.supported_features||0))==1}_eventIsReadOnly(e){let t=e?.calendars||[];return t.length>0&&t.every(e=>!this._isWritable(e))}_onCreateCalendarChange(e){this._createCalendar=e.target.value,this.requestUpdate()}_buildCategories(e){let t=this._locale||"en";return(Array.isArray(e)?e:this.constructor.DEFAULT_CATEGORIES).map(e=>({emoji:e.emoji,label:e.label??e[t]??e.en??e.fr??"",icon:e.icon??""})).filter(e=>e.emoji)}_resolveCalendarIcon(e){return e?this._materialSymbols&&e.iconMaterial?e.iconMaterial:e.icon||null:null}_calendarGroup(e){return"member"===e.group||"category"===e.group?e.group:e.allDayOnly||!this._isWritable(e.entity)?"category":"member"}_filterGroupLabel(e){let t=(this._locale||"en").startsWith("fr");return"category"===e?t?"Catégories":"Categories":t?"Membres":"Members"}_renderCalendarFilters(){let e=e=>P`
            <button
                class="filter-btn ${!1!==this._calendarVisibility[e.entity]?"active":""} ${this._calendarGroup(e)}"
                style="--cal-color: ${e.color||"#888"}"
                @click="${()=>this._toggleCalendarVisibility(e.entity)}"
            >
                <span class="cal-dot"></span>
                <span>${this._getCalendarDisplayName(e)}</span>
            </button>`,t=this._calendars.filter(e=>"member"===this._calendarGroup(e)),i=this._calendars.filter(e=>"category"===this._calendarGroup(e));return i.length?P`
            <div class="filter-groups">
                ${t.length?P`
                    <div class="filter-group">
                        <div class="filter-group-label">${this._filterGroupLabel("member")}</div>
                        <div class="calendar-filters">${t.map(e)}</div>
                    </div>`:""}
                ${i.length?P`
                    <div class="filter-group">
                        <div class="filter-group-label">${this._filterGroupLabel("category")}</div>
                        <div class="calendar-filters">${i.map(e)}</div>
                    </div>`:""}
            </div>`:P`<div class="calendar-filters">${t.map(e)}</div>`}_categoryEmojis(){return this._categoryEmojiList||[]}_safeRegex(e){if(!e)return null;if(this._regexCache&&this._regexCache.has(e))return this._regexCache.get(e);let t=null;try{t=new RegExp(e)}catch(e){t=null}return this._regexCache&&this._regexCache.set(e,t),t}_splitCategory(e){let t=e??"";for(let e of this._categoryEmojis())if(t.startsWith(e))return{emoji:e,title:t.slice(e.length).replace(/^\s+/,"")};return{emoji:"",title:t}}_reminderDelayOptions(){let e=(this._locale||"en").startsWith("fr");return[{v:"20m",label:e?"20 min avant":"20 min before"},{v:"1h",label:e?"1 h avant":"1 h before"},{v:"1d",label:e?"La veille":"Day before"}]}_cleanDescription(e){return(e||"").replace(/\s*\[r:(?:20m|1h|1d)\]\s*/g," ").trim()}_parseReminderDelay(e){let t=e||"";return t.includes("[r:1h]")?"1h":t.includes("[r:1d]")?"1d":"20m"}_composeSummary(e,t,i){let a=[t?"🔔":"",i||""].filter(Boolean).join(" ");return a?a+" "+e:e}_eventMarker(e){let t=e.calendars&&e.calendars[0]||"";if(e._markerCache&&e._markerCacheKey===t&&e._markerCacheRev===this._configRev)return e._markerCache;let i=this._computeEventMarker(e);return i.title&&(i.title=i.title.replace(/^(\u{1F514})\s+/u,"$1 ")),e._markerCache=i,e._markerCacheKey=t,e._markerCacheRev=this._configRev,i}_computeEventMarker(e){let t=e.summary||"",i=this._calByEntity[e.calendars&&e.calendars[0]],a=this._materialSymbols,n="🔔 ",r=[];for(let e of(i&&i.titleEmoji&&r.push({emoji:i.titleEmoji,icon:i.iconMaterial||i.icon}),r.push(...this._categoryCandidates||[]),r)){let i=e.emoji;if(!i)continue;let r=a&&e.icon?e.icon:"";if(t.startsWith(i)){let e=this._applyTitleStrip(t.slice(i.length).replace(/^\s+/,""));return r?{icon:r,title:e}:{emoji:i,title:e}}if(t.startsWith(n+i)){let e=this._applyTitleStrip(n+t.slice((n+i).length).replace(/^\s+/,""));return r?{icon:r,title:e}:{emoji:i,title:e}}}return{emoji:"",icon:"",title:this._applyTitleStrip(t)}}_eventFmt(e){if(e._fmtCache&&e._fmtCacheRev===this._configRev)return e._fmtCache;let t=this._timeFormat,i=e.start,a=e.end,n={sh:i?i.toFormat("H"):"",sm:i?i.toFormat("mm"):"",eh:a?a.toFormat("H"):"",em:a?a.toFormat("mm"):"",startText:!e.fullDay&&i?i.toFormat(t):"",rangeText:e.fullDay?"":(i?i.toFormat(t):"")+(a?" - "+a.toFormat(t):"")};return e._fmtCache=n,e._fmtCacheRev=this._configRev,n}_eventMeta(e){let t=this._calByEntity[e.calendars&&e.calendars[0]],i=t?this._getCalendarDisplayName(t):"",a="",n=e.summary||"";for(let e of this._categories||[])if(e.emoji&&n.includes(e.emoji)){a=e.label;break}return[i,a].filter(Boolean).join(" · ")}_mixHex(e,t,i){let a=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec((e||"").trim());if(!a)return e;let n=a[1];3===n.length&&(n=n.split("").map(e=>e+e).join(""));let r=parseInt(n.slice(0,2),16),o=parseInt(n.slice(2,4),16),s=parseInt(n.slice(4,6),16),l=(e,t)=>Math.round(e+(t-e)*i);return`rgb(${l(r,t.r)}, ${l(o,t.g)}, ${l(s,t.b)})`}_metaColor(e){let t=e.colors&&e.colors[0]||"";return this.hass&&this.hass.themes&&this.hass.themes.darkMode?this._mixHex(t,{r:255,g:255,b:255},.42):this._mixHex(t,{r:0,g:0,b:0},.22)}_onCreateCategoryClick(e){let t=e.currentTarget?.dataset?.category??"";this._createCategory=this._createCategory===t?"":t,this.requestUpdate()}_onEditCategoryClick(e){let t=e.currentTarget?.dataset?.category??"",i=this._editFormData?.category||"";this._editFormData={...this._editFormData,category:i===t?"":t}}_renderCategoryPicker(e,t){return this._categories&&this._categories.length?P`
            <div class="form-row">
                <div class="field-row-icon">
                    <ha-icon class="field-icon" icon="mdi:tag-outline"></ha-icon>
                    <div class="category-picker">
                        ${this._categories.map(i=>P`
                            <button type="button"
                                class="category-btn ${e===i.emoji?"active":""}"
                                data-category="${i.emoji}" title="${i.label}"
                                @click="${t}">
                                ${this._materialSymbols&&i.icon?P`<ha-icon class="category-ms-icon" icon="${i.icon}"></ha-icon>`:P`<span class="category-emoji">${i.emoji}</span>`}
                                <span class="category-label">${i.label}</span>
                            </button>
                        `)}
                    </div>
                </div>
            </div>
        `:""}_getWeatherConfig(e){if(!e||"string"!=typeof e&&"object"!=typeof e)return null;let t={entity:null,showCondition:!0,showTemperature:!1,showLowTemperature:!1,roundTemperature:!1};if("string"==typeof e?t.entity=e:Object.assign(t,e),!t.entity||this.hass&&!this.hass.states[t.entity]){if(this.hass){let e=Object.keys(this.hass.states).find(e=>e.startsWith("weather."));if(!e)return null;t.entity=e}else if(!t.entity)return null}return t}_applyViewSettings(){let e=this._config.startingDay??"monday";switch(this._currentView){case"Today":this._startingDay="today",this._numberOfDays=1,this._numberOfDaysIsMonth=!1;break;case"Tomorrow":this._startingDay="tomorrow",this._numberOfDays=1,this._numberOfDaysIsMonth=!1;break;case"Week":default:this._startingDay=e,this._numberOfDays=7,this._numberOfDaysIsMonth=!1;break;case"Biweek":this._startingDay=e,this._numberOfDays=14,this._numberOfDaysIsMonth=!1;break;case"Month":this._startingDay=e,this._numberOfDaysIsMonth=!0,this._numberOfDays=this._getNumberOfDays("month")}this._startDate=this._getStartDate()}_setView(e){this._currentView=e,this._navigationOffset=0;try{localStorage.setItem("skylight-calendar-view",e)}catch(e){}this._applyViewSettings(),this._updateEvents()}_toggleCalendarVisibility(e){this._calendarVisibility={...this._calendarVisibility,[e]:!this._calendarVisibility[e]};let t=[];for(let[e,i]of Object.entries(this._calendarVisibility))i||t.push(e);this._hideCalendars=t}connectedCallback(){super.connectedCallback(),this._startClock(),this._onResize||(this._onResize=()=>{clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(()=>this._applyFillHeight(),150)}),window.addEventListener("resize",this._onResize),this._initialized&&this._waitForHassAndConfig()}disconnectedCallback(){super.disconnectedCallback(),this._stopClock(),this._clearUpdateEventsTimeouts(),clearTimeout(this._locationSearchTimeout),clearTimeout(this._resizeTimer),this._onResize&&window.removeEventListener("resize",this._onResize),this._weatherUnsub&&(this._weatherUnsub.then(e=>e()).catch(()=>{}),this._weatherUnsub=null,this._weatherForecast=null)}updated(){this._showCreateEventDialog&&this._showHandwritingCanvas()?!this._canvasReady&&this.shadowRoot?.querySelector("#quick-canvas")&&(this._canvasReady=!0,requestAnimationFrame(()=>this._initCanvas())):this._canvasReady&&(this._canvasReady=!1),this._applyFillHeight()}_applyFillHeight(){let e=this.shadowRoot?.querySelector(".container");if(!e)return;if(!this._fillHeight){e.style.removeProperty("--day-fill-height"),this._fillSig=null,this._fillEventCap=0;return}let t=this.shadowRoot?.querySelector(".calendar-container"),i=e?[...e.querySelectorAll(".day:not(.header)")]:[];if(!t||0===i.length)return;let a=this._calendarEvents?Object.keys(this._calendarEvents).length:0,n=window.innerHeight+":"+i.length+":"+this._currentView+":"+(this._startDate?this._startDate.toISODate():"")+":"+a;n!==this._fillSig&&(this._fillSig=n,requestAnimationFrame(()=>{let a=t.getBoundingClientRect();if(a.width>0&&a.width<=500){e.style.removeProperty("--day-fill-height"),0!==this._fillEventCap&&(this._fillEventCap=0,this.requestUpdate());return}let n=i.map(e=>Math.round(e.getBoundingClientRect().top-a.top)),r=new Set(n).size||1,o=Math.min(...n),s=parseFloat(getComputedStyle(e).rowGap)||0,l=a.top+o,c=Math.floor((window.innerHeight-l-12-s*(r-1))/r);if(c>40){e.style.setProperty("--day-fill-height",c+"px");let t=[...e.querySelectorAll(".day:not(.header) .day-header")],i=t.length?Math.max(...t.map(e=>e.offsetHeight)):36,a=[...e.querySelectorAll(".day:not(.header) .events .event")],n=28;a.length&&(n=Math.min(...a.map(e=>e.offsetHeight+(parseFloat(getComputedStyle(e).marginBottom)||0))));let r=Math.max(1,Math.floor((c-i)/(n=Math.max(18,n)))),o=Math.max(0,c-i);(r!==this._fillEventCap||o!==this._fillUsable)&&(this._fillEventCap=r,this._fillUsable=o,this.requestUpdate())}else e.style.removeProperty("--day-fill-height"),(0!==this._fillEventCap||0!==this._fillUsable)&&(this._fillEventCap=0,this._fillUsable=0,this.requestUpdate())}))}_startClock(){this._stopClock(),this._showHeader&&(this._showHeaderClock?this._clockInterval=setInterval(()=>this.requestUpdate(),6e4):this._showHeaderDate&&this._scheduleMidnightTick())}_scheduleMidnightTick(){let e=ef.DateTime.now(),t=e.plus({days:1}).startOf("day").diff(e).toMillis();this._clockInterval=setTimeout(()=>{this.requestUpdate(),this._scheduleMidnightTick()},t+1e3)}_stopClock(){this._clockInterval&&(clearInterval(this._clockInterval),clearTimeout(this._clockInterval),this._clockInterval=null)}render(){this._loader||(this._loader=this._getLoader()),this._initialized||(this._initialized=!0,this._waitForHassAndConfig());let e=[];this._noCardBackground&&e.push("nobackground"),this._compact&&e.push("compact"),this._fillHeight&&e.push("fill-height"),e.push("theme-"+this._theme),this.hass?.themes?.darkMode&&e.push("dark");let t=["--event-background-color: "+this._eventBackground+";"];this._weekendColor&&t.push("--weekend-color: "+this._weekendColor+";"),this._columns.extraLarge&&t.push("--days-columns: "+this._columns.extraLarge+";"),this._columns.large&&t.push("--days-columns-lg: "+this._columns.large+";"),this._columns.medium&&t.push("--days-columns-md: "+this._columns.medium+";"),this._columns.small&&t.push("--days-columns-sm: "+this._columns.small+";"),this._columns.extraSmall&&t.push("--days-columns-xs: "+this._columns.extraSmall+";");let i=this._config?.locale||"en",a=new Date;return P`
            <ha-card class="${e.join(" ")}" style="${t.join(" ")}">
                <div class="card-content skylight">
                    ${this._error?P`<div class="errors"><ha-alert alert-type="error">${this._error}</ha-alert></div>`:""}
                    ${this._showHeader?P`
                        <div class="skylight-header">
                            <div class="date-section">
                                ${this._showHeaderDate?P`
                                    <div class="day-name">${a.toLocaleDateString(i,{weekday:"long"})}</div>
                                    <div class="full-date">${a.toLocaleDateString(i,{day:"numeric",month:"long",year:"numeric"})}</div>
                                `:""}
                                ${this._showHeaderClock?P`
                                    <div class="clock">${a.toLocaleTimeString(i,{hour:"2-digit",minute:"2-digit"})}</div>
                                `:""}
                            </div>
                            ${this._showCurrentWeather?this._renderHeaderWeather():""}
                        </div>
                    `:""}
                    <div class="controls">
                        ${this._title&&this._showTitle?P`
                            <div class="title-row">
                                <span class="calendar-title">${this._title}</span>
                            </div>
                        `:""}
                        <div class="buttons-row">
                            <div class="controls-left">
                                ${"familial"===this._theme?this._renderNavigation():""}
                                ${this._renderCalendarFilters()}
                            </div>
                            <div class="view-selector">
                                ${this._views.map(e=>P`
                                    <button
                                        class="view-btn ${e===this._currentView?"active":""}"
                                        data-view="${e.toLowerCase()}"
                                        @click="${()=>this._setView(e)}"
                                        title="${this._getViewLabel(e)}"
                                    >
                                        <ha-icon class="view-icon" icon="${this._getViewIcon(e)}"></ha-icon>
                                        <span class="view-label">${this._getViewLabel(e)}</span>
                                    </button>
                                `)}
                            </div>
                        </div>
                    </div>
                    <div class="calendar-container">
                        <div class="container${this._actions?" hasActions":""}${this._numberOfDaysIsMonth?" month-view":""}" style="${this._dayHeaderFontSize?"--day-header-font-size: "+this._dayHeaderFontSize+";":""}${this._dayHeaderColor?"--day-header-color: "+this._dayHeaderColor+";":""}" @click="${this._handleContainerClick}" @pointerdown="${this._handlePointerDown}" @pointerup="${this._handlePointerUp}" @pointercancel="${this._handlePointerCancel}">
                            ${this._fullscreenOverlayOpen()?"":P`
                                ${this._renderHeader()}
                                ${this._renderWeekDays()}
                                ${this._renderDays()}
                                ${this._numberOfDaysIsMonth&&this._selectedDay?this._renderSelectedDayEvents():""}
                            `}
                        </div>
                    </div>
                    ${this._renderEventDetailsDialog()}
                    ${this._renderCreateEventDialog()}
                    ${this._renderEditEventDialog()}
                    ${this._renderRecurringConfirmDialog()}
                    ${this._renderDeleteRecurringDialog()}
                    ${this._dayEventsPopup?this._renderDayEventsPopup():""}
                    ${this._loader}
                    ${this._floatingButton?P`
                        <button
                            class="fab-button"
                            title="${this._floatingButton.label??""}"
                            aria-label="${this._floatingButton.label??"action"}"
                            @click="${this._handleFloatingButtonClick}"
                        >
                            <ha-icon icon="${this._floatingButton.icon??"mdi:music"}"></ha-icon>
                        </button>
                    `:""}
                </div>
            </ha-card>
        `}_handleFloatingButtonClick(e){e?.stopPropagation();let t=this._floatingButton;if(t){if(t.service&&"string"==typeof t.service&&t.service.includes(".")&&this.hass){let[e,i]=t.service.split(".");this.hass.callService(e,i,t.serviceData??{});return}if("string"==typeof t.navigationPath&&t.navigationPath.startsWith("/")){history.pushState(null,"",t.navigationPath),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}));return}t.entity&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t.entity},bubbles:!0,composed:!0}))}}_renderHeaderWeather(){if(!this._weather||!this.hass)return P``;let e=this.hass.states[this._weather.entity];if(!e)return P``;let t=e.state,i=this._weather.roundTemperature?Math.round(e.attributes.temperature):e.attributes.temperature,a=e.attributes.temperature_unit||"°C",n=this.hass.states["sun.sun"]?.state==="below_horizon";return P`
            <div class="weather-section" @click="${this._handleWeatherClick}">
                ${this._getWeatherIcon(t,this.hass.formatEntityState(e),n)}
                <div class="weather-temp">${isNaN(i)?"":Math.round(i)+a}</div>
            </div>
        `}_renderHeader(){let e="familial"!==this._theme;return this._showLegend||this._showNavigation&&e?P`
            <div class="header">
                ${e?this._renderNavigation():""}
                ${this._renderLegend()}
            </div>
        `:P``}_renderLegend(){return this._showLegend?P`
            <div class="legend">
                <ul>
                    ${this._calendars.map(e=>{if(!e.hideInLegend)return P`
                                <li class="${this._resolveCalendarIcon(e)?"icon":"noIcon"}${this._legendToggle?" hasToggle":""}${-1===this._hideCalendars.indexOf(e.entity)?"":" hidden"}" style="--legend-calendar-color: ${e.color??"inherit"}" @click="${()=>{this._handleLegendClick(e)}}">
                                    ${this._resolveCalendarIcon(e)?P`<ha-icon icon="${this._resolveCalendarIcon(e)}"></ha-icon>`:""}
                                    ${this._getCalendarDisplayName(e)}
                                </li>
                            `})}
                </ul>
            </div>
        `:P``}_renderNavigation(){return this._showNavigation?P`
            <div class="navigation">
                <ul>
                    <li @click="${this._handleNavigationPreviousClick}"><ha-icon icon="mdi:arrow-left"></ha-icon></li>
                    <li @click="${this._handleNavigationOriginalClick}"><ha-icon icon="mdi:circle-medium"></ha-icon></li>
                    <li @click="${this._handleNavigationNextClick}"><ha-icon icon="mdi:arrow-right"></ha-icon></li>
                </ul>
                <div class="month">${this._startDate.toFormat("MMMM yyyy")}</div>
            </div>
        `:P``}_renderWeekDays(){if(!this._showWeekDayText||!this._days||!this._numberOfDaysIsMonth&&this._numberOfDays<7)return P``;let e=this._days.slice(0,7),t=[this._language.sunday,this._language.monday,this._language.tuesday,this._language.wednesday,this._language.thursday,this._language.friday,this._language.saturday,this._language.sunday];return P`
            ${e.map(e=>{let i=t[e.date.weekday],a=i?.substring(0,3).toUpperCase()??"";return P`
                    <div class="day header">
                        <div class="date">
                            <span class="text">${i}</span>
                            <span class="text-short">${a}</span>
                        </div>
                    </div>
                `})}
        `}_renderDays(){return this._days?P`
            ${this._days.map(e=>{if(e.isOutsideMonth)return P`<div class="day ${e.class}"></div>`;if(this._hideDaysWithoutEvents&&0===e.events.length&&(this._hideTodayWithoutEvents||!this._isToday(e.date)))return P``;let t=this._selectedDay&&this._selectedDay.date.day===e.date.day&&this._selectedDay.date.month===e.date.month&&this._selectedDay.date.year===e.date.year;return P`
                    <div class="day ${e.class}${t?" selected":""}${this._highlightWeekend&&this._weekendDays.includes(e.date.weekday)?" weekend":""}" data-date="${e.date.day}" data-weekday="${e.date.weekday}" data-month="${e.date.month}" data-year="${e.date.year}" data-week="${e.date.weekNumber}" @click="${t=>{this._numberOfDaysIsMonth&&(t.stopPropagation(),this._selectDay(e))}}">
                        <div class="day-header">
                            <div class="date">
                                ${this._dayFormat?P`${e.date.toFormat(this._dayFormat)}`:P`
                                        <span class="number">${e.date.day}</span>
                                        ${this._showDayName||this._showWeekDayText&&!this._numberOfDaysIsMonth&&this._numberOfDays<7?P`<span class="text">${this._getWeekDayText(e.date)}</span>`:P`<span class="text mobile-only">${this._getWeekDayText(e.date)}</span>`}
                                    `}
                            </div>
                            ${this._showWeather&&e.weather?P`
                                    <div class="weather" @click="${this._handleWeatherClick}">
                                        ${this._weather?.showTemperature||this._weather?.showLowTemperature?P`
                                                <div class="temperature">
                                                    ${this._weather?.showTemperature?P`
                                                            <span class="high">${e.weather.temperature}</span>
                                                        `:""}
                                                    ${this._weather?.showLowTemperature?P`
                                                                <span class="low">${e.weather.templow}</span>
                                                        `:""}
                                                </div>
                                            `:""}
                                        ${this._weather?.showCondition?this._getWeatherIcon(e.weather.state,e.weather.condition):""}
                                    </div>
                                `:""}
                            <div class="add-event" @click="${t=>{t.stopPropagation(),this._handleAddEventClick(t,e)}}">
                                <ha-icon icon="mdi:plus"></ha-icon>
                            </div>
                        </div>
                        <div class="event-dots">
                            ${e.events.map(e=>this._calendarEvents?.[e]).filter(e=>e&&!e.calendars.every(e=>this._hideCalendars.indexOf(e)>-1)).slice(0,4).map(e=>{let t=e.calendars.findIndex(e=>-1===this._hideCalendars.indexOf(e));return P`<span class="dot" style="background:${e.colors[t]??e.colors[0]}"></span>`})}
                        </div>
                        <div class="events">
                            ${this._renderEvents(e)}
                        </div>
                    </div>
                `})}
        `:P``}_renderSelectedDayEvents(){if(!this._selectedDay)return P``;let e=(this._selectedDay.events||[]).map(e=>this._calendarEvents?.[e]).filter(e=>e&&!e.calendars.every(e=>this._hideCalendars.indexOf(e)>-1)).length,t=(this._locale||"en").startsWith("fr");return P`
            <div class="selected-day-events">
                <div class="selected-day-header">
                    <div class="selected-day-heading">
                        <span class="selected-day-date">${this._selectedDay.date.toFormat("cccc d MMMM")}</span>
                        ${e?P`<span class="selected-day-count">${e} ${t?e>1?"événements":"événement":e>1?"events":"event"}</span>`:""}
                    </div>
                    <div class="add-event" @click="${e=>this._handleAddEventClick(e,this._selectedDay)}">
                        <ha-icon icon="mdi:plus"></ha-icon>
                    </div>
                </div>
                <div class="selected-day-list">
                    ${this._renderEvents(this._selectedDay,!0)}
                </div>
            </div>
        `}_renderDayEventsPopup(){let e=this._dayEventsPopup;return e?P`
            <div class="hw-overlay" @click="${e=>{e.target===e.currentTarget&&(this._dayEventsPopup=null)}}">
                <div class="hw-modal day-events-modal">
                    <div class="hw-modal-header">
                        <span>${e.date.toFormat("cccc d LLLL")}</span>
                        <button type="button" class="hw-close" @click="${()=>{this._dayEventsPopup=null}}">
                            <ha-icon icon="mdi:close"></ha-icon>
                        </button>
                    </div>
                    <div class="hw-edit-scroll">
                        ${this._renderEvents(e,!0)}
                    </div>
                </div>
            </div>
        `:P``}_renderEvents(e,t=!1){let i=[],a=this._hideCalendars&&this._hideCalendars.length>0;if(e.events.map(e=>{let t=this._calendarEvents[e];if(!t)return;if(!a)return void i.push(t);let n=Object.assign({},t),r=[...n.calendars],o=[...n.colors],s=0;for(;s<r.length;)this._hideCalendars.indexOf(r[s])>-1?(r.splice(s,1),o.splice(s,1)):s++;0!==r.length&&(n.calendars=r,n.colors=o,i.push(n))}),0===i.length)return this._numberOfDays>1?P``:this._renderNoEvents();let n=0,r=!t&&this._numberOfDaysIsMonth,o=!1,s=0;if(!t)if(r&&this._fillHeight&&this._fillUsable>0){let e=Math.max(1,Math.floor(this._fillUsable/46)),t=Math.max(1,Math.floor(this._fillUsable/22));i.length>e&&(o=!0,s=t)}else s=this._fillHeight&&this._fillEventCap?this._fillEventCap:this._maxDayEvents||0;if(s>0&&i.length>s){let e=Math.max(1,s-1);n=i.length-e,i.splice(e)}let l=this._days&&this._days[0]?this._days[0].date.weekday:this._startDate?this._startDate.weekday:1,c=e.date.weekday===l,d=e.date.weekday===(l+5)%7+1;return P`
            ${i.map(e=>{let i=[e.colors[0]],a=!t&&"banner"===this._multiDayMode&&e.multiDay,n=e.multiDayPosition??"middle",s=a?" banner"+(a&&"start"!==n&&!c?" ljoin":"")+(a&&"end"!==n&&!d?" rjoin":""):"",l=!a||"start"===n||c,h=this._eventMarker(e),u=this._resolveCalendarIcon(this._calByEntity[e.calendars&&e.calendars[0]]),m=o&&!a,f=r&&!o&&!a,p=this._eventFmt(e),v=p.startText,y=p.rangeText,g=m?[y,e.location].filter(Boolean).join(" · "):"",w=!a||l?h.icon?P`<div class="icon"><ha-icon icon="${h.icon}"></ha-icon></div>`:h.emoji?P`<div class="icon"><span class="event-emoji">${h.emoji}</span></div>`:u?P`<div class="icon"><ha-icon icon="${u}"></ha-icon></div>`:"":"";return P`
                    <div
                        class="event ${e.class}${s}${m?" compact-line":""}"
                        title="${g}"
                        data-entity="${e.calendars[0]}"
                        data-additional-entities="${e.calendars.join(",")}"
                        data-summary="${e.summary}"
                        data-location="${e.location??""}"
                        data-start-hour="${p.sh}"
                        data-start-minute="${p.sm}"
                        data-end-hour="${p.eh}"
                        data-end-minute="${p.em}"
                        style="--border-color: ${e.colors[0]}${this._colorFullEvent&&"familial"!==this._theme?"; background-color: color-mix(in srgb, "+e.colors[0]+" 15%, var(--card-background-color))":""}"
                        @click="${()=>{this._handleEventClick(e)}}"
                    >
                        ${e.colors.map(e=>i.indexOf(e)>-1?"":(i.push(e),P`
                                <div
                                    class="additionalColor"
                                    style="--event-additional-color: ${e}"
                                ></div>
                            `))}
                        ${w}
                        ${a?P`
                            <div class="inner">
                                <div class="title">${l&&this._showEventTitle?h.title:P` `}</div>
                            </div>
                        `:m?P`
                        <div class="inner inner-compact">
                            ${this._showTime&&!e.fullDay&&v?P`<span class="time">${v}</span>`:""}
                            ${this._showEventTitle?P`<span class="title">${h.title}</span>`:""}
                        </div>
                        `:P`
                        <div class="inner">
                            ${this._showTime&&!e.fullDay?P`<div class="time">
                                    ${this._renderEventTime(e)}
                                </div>`:""}
                            ${this._showEventTitle?P`<div class="title">
                                ${h.title}
                            </div>`:""}
                            ${t&&this._eventMeta(e)?P`<div class="event-meta" style="${"familial"===this._theme?"color: "+this._metaColor(e):""}"><span class="meta-dot" style="background: ${e.colors[0]}"></span>${this._eventMeta(e)}</div>`:""}
                            ${this._showDescription?P`
                                    <div class="description">
                                        ${this._cleanDescription(e.description)}
                                    </div>
                                `:""}
                            ${(this._showLocation||f)&&e.location?P`
                                    <div class="location">
                                        <ha-icon icon="mdi:map-marker"></ha-icon>
                                        ${e.location}
                                    </div>
                                `:""}
                        </div>
                        `}
                    </div>
                `})}
            ${n>0?P`
                    <div class="more" @click="${t=>{t.stopPropagation(),this._dayEventsPopup=e}}"
                        title="${this._language.moreEvents}">
                        +${n}
                    </div>
                `:""}
        `}_renderEventTime(e){return e.fullDay&&this._isFullDay(e.originalStart,e.originalEnd,!0)?P`${this._language.fullDay}`:e.multiDay&&"default"!==this._multiDayMode?P`
                ${e.originalStart?e.originalStart.toFormat(this._multiDayTimeFormat):""}
                ${e.originalEnd?" - "+e.originalEnd.toFormat(this._multiDayTimeFormat):""}
            `:e.fullDay?P`${this._language.fullDay}`:P`
                ${e.start.toFormat(this._timeFormat)}
                ${e.end?" - "+e.end.toFormat(this._timeFormat):""}
            `}_renderNoEvents(){return P`
            <div class="none">
                ${this._language.noEvents}
            </div>
        `}_renderEventDetailsDialog(){return this._currentEventDetails?P`
            <ha-dialog
                open
                @closed="${this._closeDialog}"
                .heading="${this._renderEventDetailsDialogHeading()}"
            >
                <div class="content">
                    ${this._showCalendarName?P`<div class="calendar">
                            <ha-icon icon="mdi:calendar-account"></ha-icon>
                            <div class="info">
                                ${this._currentEventDetails.calendarNames.join(", ")}
                            </div>
                        </div>`:""}
                    ${this._showDate?P`<div class="datetime">
                            <ha-icon icon="mdi:calendar-clock"></ha-icon>
                            <div class="info">
                                ${this._renderEventDetailsDate()}
                            </div>
                        </div>`:""}
                    ${this._currentEventDetails.location?P`
                            <div class="location">
                                <ha-icon icon="mdi:map-marker"></ha-icon>
                                <div class="info">
                                    <a href="${this._locationLink}${encodeURIComponent(this._currentEventDetails.location)}" target="_blank" rel="noopener noreferrer">${this._currentEventDetails.location}</a>
                                </div>
                            </div>
                        `:""}
                    ${this._cleanDescription(this._currentEventDetails.description)?P`
                            <div class="description">
                                ${this._cleanDescription(this._currentEventDetails.description)}
                            </div>
                        `:""}
                    ${this._currentEventDetails.uid&&!this._eventIsReadOnly(this._currentEventDetails)?P`
                            <div class="event-actions">
                                <button class="btn btn-edit" @click="${this._handleEditEventClick}">
                                    <ha-icon icon="mdi:pencil"></ha-icon> ${this._language.editEvent}
                                </button>
                                <button class="btn btn-delete" @click="${this._handleDeleteEvent}">
                                    <ha-icon icon="mdi:delete"></ha-icon> ${this._language.deleteEvent}
                                </button>
                            </div>
                        `:""}
                </div>
            </ha-dialog>
        `:P``}_renderEventDetailsDialogHeading(){return P`
            <div class="header_title">
                <span>${this._currentEventDetails.summary}</span>
                <ha-icon-button
                    .label="${this.hass?.localize("ui.dialogs.generic.close")??"Close"}"
                    dialogAction="close"
                    class="header_button"
                ><ha-icon icon="mdi:close"></ha-icon></ha-icon-button>
            </div>
        `}_renderEventDetailsDate(){let e=this._currentEventDetails.originalStart,t=this._currentEventDetails.originalEnd??null;if(null===t)return P`
                ${e.toFormat(this._dateFormat+" "+this._timeFormat)}
            `;if(this._isFullDay(e,t,!0))if(24>=Math.abs(e.diff(t,"hours").toObject().hours))return P`
                    ${e.toFormat(this._dateFormat)}
                `;else{let i=t.minus({seconds:1});return P`
                    ${e.toFormat(this._dateFormat)} - ${i.toFormat(this._dateFormat)}
                `}return this._isSameDay(e,t)?P`
                ${e.toFormat(this._dateFormat+" "+this._timeFormat)+" - "+t.toFormat(this._timeFormat)}
            `:P`
            ${e.toFormat(this._dateFormat+" "+this._timeFormat)} - ${t.toFormat(this._dateFormat+" "+this._timeFormat)}
        `}_renderCreateEventDialog(){if(!this._showCreateEventDialog)return P``;if(this._showHandwritingCanvas())return this._renderHandwritingCreateDialog();let e=this._showCreateEventDialog.date,t=ef.DateTime.now(),i=e.set({hour:Math.min(t.hour+1,23),minute:0,second:0,millisecond:0}),a="allday"===this._createDuration,n=a?0:parseInt(this._createDuration)||60,r=i.toFormat("yyyy-MM-dd"),o=i.toFormat("HH:mm"),s=(this._createStartTime||o).split(":"),l=i.set({hour:parseInt(s[0])||0,minute:parseInt(s[1])||0}).plus({minutes:n}),c=l.toFormat("yyyy-MM-dd"),d=l.toFormat("HH:mm"),h=this._calendars.filter(e=>this._isWritable(e.entity)),u=this._calendars.find(e=>e.entity===this._createCalendar),m=!!(u&&u.allDayOnly);return P`
            <ha-dialog
                open
                @closed="${this._closeCreateEventDialog}"
                .heading="${this._renderCreateEventDialogHeading()}"
            >
                <div class="create-event-form">
                    <div class="form-row">
                        <div class="input-clear-wrapper with-icon">
                            <ha-icon class="field-icon" icon="mdi:format-title"></ha-icon>
                            <input type="text" id="event-title" class="form-input" required placeholder="${this._language.eventTitle}"
                                .value="${this._createTitle??""}"
                                @input="${e=>{this._createTitle=e.target.value}}" />
                            <button type="button" class="input-clear" @click="${()=>{this._createTitle="",this._clearInput("event-title")}}" title="${this._language.cancel}">
                                <ha-icon icon="mdi:close-circle"></ha-icon>
                            </button>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="field-row-icon">
                            <ha-icon class="field-icon" icon="mdi:calendar"></ha-icon>
                            <select id="event-calendar" class="form-input cal-select" @change="${this._onCreateCalendarChange}">
                                ${h.map(e=>P`
                                    <option value="${e.entity}" ?selected="${e.entity===this._createCalendar}">${this._getCalendarDisplayName(e)}</option>
                                `)}
                            </select>
                        </div>
                    </div>
                    <div class="form-row" style="${a||m?"display: none":""}">
                        <div class="field-row-icon">
                            <ha-icon class="field-icon" icon="mdi:clock-outline"></ha-icon>
                            ${this._renderTimeDropdowns(this._createStartTime??o,!1)}
                        </div>
                    </div>
                    ${m?"":P`
                    <div class="form-row">
                        <div class="field-row-icon">
                            <ha-icon class="field-icon" icon="mdi:timer-outline"></ha-icon>
                            <div class="duration-picker">
                                ${this.constructor.DURATION_PRESETS.map(e=>P`
                                    <button type="button" class="duration-btn ${String(e)===this._createDuration?"active":""}"
                                        data-duration="${e}" @click="${this._onCreateDurationClick}">${this._formatDuration(e)}</button>
                                `)}
                                <button type="button" class="duration-btn ${a?"active":""}"
                                    data-duration="allday" @click="${this._onCreateDurationClick}">${this._language.fullDay}</button>
                            </div>
                        </div>
                    </div>
                    `}
                    ${m?"":this._renderCategoryPicker(this._createCategory,this._onCreateCategoryClick)}
                    ${this._showLocationInForm?P`
                    <div class="form-row location-row">
                        <div class="input-clear-wrapper with-icon">
                            <ha-icon class="field-icon" icon="mdi:map-marker"></ha-icon>
                            <input type="text" id="event-location" class="form-input" placeholder="${this._language.eventLocation??"Location"}"
                                @input="${this._handleLocationInput}" autocomplete="off" />
                            <button type="button" class="input-clear" @click="${()=>this._clearInput("event-location")}" title="${this._language.cancel}">
                                <ha-icon icon="mdi:close-circle"></ha-icon>
                            </button>
                        </div>
                        <ul class="location-suggestions" id="event-location-suggestions"></ul>
                    </div>
                    `:""}
                    <details class="advanced-details">
                    <summary class="advanced-toggle">
                        <ha-icon class="adv-chevron" icon="mdi:chevron-down"></ha-icon>
                        <span>${this._language.advancedOptions}</span>
                    </summary>
                    <div class="advanced-section">
                    <div class="form-row">
                        <label for="event-start-date">${this._language.eventDate}</label>
                        <input type="date" id="event-start-date" class="form-input" .value="${r}" required />
                    </div>
                    <div class="form-row">
                        <label for="event-end-date">${this._language.eventEnd}</label>
                        <div class="datetime-row">
                            <input type="date" id="event-end-date" class="form-input" .value="${c}"
                                @input="${()=>{this._createEndTouched=!0}}" />
                            <input type="time" id="event-end-time" class="form-input" style="${a?"display: none":""}" .value="${d}"
                                @input="${()=>{this._createEndTouched=!0}}" />
                        </div>
                    </div>
                    <div class="form-row">
                        <label for="event-recurrence">${this._language.eventRecurrence}</label>
                        <select id="event-recurrence" class="form-input"
                            @change="${e=>{this._createRecurrenceType=e.target.value||null,this._createRecurrenceEndType="never"}}">
                            <option value="">${this._language.recurrenceNone}</option>
                            <option value="FREQ=DAILY">${this._language.recurrenceDaily}</option>
                            <option value="FREQ=WEEKLY">${this._language.recurrenceWeekly}</option>
                            <option value="FREQ=MONTHLY">${this._language.recurrenceMonthly}</option>
                            <option value="FREQ=YEARLY">${this._language.recurrenceYearly}</option>
                        </select>
                    </div>
                    ${this._createRecurrenceType?P`
                        ${"FREQ=YEARLY"!==this._createRecurrenceType?P`
                        <div class="form-row recurrence-inline">
                            <label>${this._language.recurrenceInterval}</label>
                            <input type="number" id="event-recurrence-interval" class="form-input recurrence-number" min="1" value="1" />
                            <span class="recurrence-unit">${"FREQ=DAILY"===this._createRecurrenceType?this._language.recurrenceDays:"FREQ=WEEKLY"===this._createRecurrenceType?this._language.recurrenceWeeks:this._language.recurrenceMonths}</span>
                        </div>
                        `:""}
                        ${"FREQ=WEEKLY"===this._createRecurrenceType?P`
                        <div class="form-row">
                            <div class="day-picker" id="event-day-picker">
                                ${["MO","TU","WE","TH","FR","SA","SU"].map(e=>P`
                                    <button type="button" class="day-btn" data-day="${e}"
                                        @click="${this._toggleDayBtn}">${this._dayLabel(e)}</button>
                                `)}
                            </div>
                        </div>
                        `:""}
                        ${"FREQ=MONTHLY"===this._createRecurrenceType?P`
                        <div class="form-row recurrence-inline">
                            <label>${this._language.recurrenceMonthlyOn}</label>
                            <input type="number" id="event-recurrence-monthday" class="form-input recurrence-number"
                                min="1" max="31" value="${this._getDefaultMonthDay()}" />
                        </div>
                        `:""}
                        <div class="form-row">
                            <label>${this._language.recurrenceEnds}</label>
                            <select id="event-recurrence-end" class="form-input"
                                @change="${e=>{this._createRecurrenceEndType=e.target.value}}">
                                <option value="never">${this._language.recurrenceEndsNever}</option>
                                <option value="date">${this._language.recurrenceEndsOnDate}</option>
                                <option value="count">${this._language.recurrenceEndsAfter}</option>
                            </select>
                        </div>
                        ${"date"===this._createRecurrenceEndType?P`
                        <div class="form-row">
                            <input type="date" id="event-recurrence-end-date" class="form-input" />
                        </div>
                        `:""}
                        ${"count"===this._createRecurrenceEndType?P`
                        <div class="form-row recurrence-inline">
                            <input type="number" id="event-recurrence-end-count" class="form-input recurrence-number"
                                min="1" value="10" />
                            <span class="recurrence-unit">${this._language.recurrenceOccurrences}</span>
                        </div>
                        `:""}
                    `:""}
                    <div class="form-row notify-row">
                        <label class="notify-label" for="event-notify">
                            <input type="checkbox" id="event-notify" />
                            <span>\u{1F514} ${this._language.eventNotify}</span>
                        </label>
                    </div>
                    <div class="form-row">
                        <div class="field-row-icon">
                            <ha-icon class="field-icon" icon="mdi:bell-ring-outline"></ha-icon>
                            <select id="event-reminder-delay" class="form-input">
                                ${this._reminderDelayOptions().map(e=>P`
                                    <option value="${e.v}">${e.label}</option>
                                `)}
                            </select>
                        </div>
                    </div>
                    </div>
                    </details>
                    <div class="form-actions">
                        <button class="btn btn-cancel" @click="${this._closeCreateEventDialog}">${this._language.cancel}</button>
                        <button class="btn btn-submit" @click="${this._handleCreateEvent}">${this._language.create}</button>
                    </div>
                </div>
            </ha-dialog>
        `}_renderHandwritingCreateDialog(){let e=this._showCreateEventDialog?.date,t=this._calendars.find(e=>e.entity===this._createCalendar),i=!!(t&&t.allDayOnly);return P`
            <div class="hw-overlay" @click="${e=>{e.target===e.currentTarget&&this._closeCreateEventDialog()}}">
                <div class="hw-modal create-event-form">
                    <div class="hw-modal-header">
                        <span>${this._language.newEvent}${e?" — "+e.toFormat("cccc d LLLL"):""}</span>
                        <button type="button" class="hw-close" @click="${this._closeCreateEventDialog}">
                            <ha-icon icon="mdi:close"></ha-icon>
                        </button>
                    </div>
                    ${this._calendars&&this._calendars.length>1?P`
                    <div class="hw-cal-picker">
                        ${this._calendars.map(e=>P`
                            <button type="button" class="hw-cal-btn ${this._createCalendar===e.entity?"active":""}"
                                style="--cal-color: ${e.color||"#888"}"
                                @click="${t=>this._selectCreateCalendar(t,e.entity)}">
                                <span class="hw-cal-dot" style="background: ${e.color||"#888"}"></span>
                                ${this._getCalendarDisplayName(e)}
                            </button>
                        `)}
                    </div>
                    `:""}
                    ${i?"":this._renderCategoryPicker(this._createCategory,this._onCreateCategoryClick)}
                    <div class="hw-zone">
                        ${eh([],()=>P`<canvas id="quick-canvas" class="hw-canvas" width="640" height="200"
                            @pointerdown="${this._canvasPointerDown}"
                            @pointermove="${this._canvasPointerMove}"
                            @pointerup="${this._canvasPointerUp}"
                            @pointerleave="${this._canvasPointerUp}"></canvas>`)}
                        <div class="hw-hint">${this._language.handwriteHint}</div>
                    </div>
                    ${this._aiError?P`<div class="hw-error">${this._aiError}</div>`:""}
                    <div class="hw-modal-actions">
                        <button type="button" class="hw-clear hw-pen ${!this._eraserMode?"active":""}" @click="${this._usePen}">
                            <ha-icon icon="mdi:pencil"></ha-icon> ${this._language.pen}
                        </button>
                        <button type="button" class="hw-clear hw-eraser ${this._eraserMode?"active":""}" @click="${this._useEraser}">
                            <ha-icon icon="mdi:eraser"></ha-icon> ${this._language.eraser}
                        </button>
                        <button type="button" class="hw-clear" @click="${this._clearCanvas}">
                            <ha-icon icon="mdi:delete-outline"></ha-icon> ${this._language.clearDrawing}
                        </button>
                        <span style="flex:1"></span>
                        <button class="btn btn-cancel" @click="${this._closeCreateEventDialog}">${this._language.cancel}</button>
                        <button class="btn btn-submit" @click="${this._handleHandwritingCreate}">${this._language.create}</button>
                    </div>
                </div>
            </div>
        `}_renderCreateEventDialogHeading(){let e=this._showCreateEventDialog?.date;return P`
            <div class="header_title">
                <span>${this._language.newEvent}${e?" — "+e.toFormat("cccc d LLLL"):""} <small style="opacity:0.45;font-weight:400;font-size:0.65em;">v${em.version}</small></span>
                <ha-icon-button
                    .label="${this.hass?.localize("ui.dialogs.generic.close")??"Close"}"
                    dialogAction="close"
                    class="header_button"
                ><ha-icon icon="mdi:close"></ha-icon></ha-icon-button>
            </div>
        `}_renderEditEventDialog(){if(!this._showEditEventDialog||!this._editFormData)return P``;if(this._showHandwritingCanvas())return this._renderEditOverlay();let e=this._editFormData,t=this._getFormDuration(e),i=this._calendars.find(t=>t.entity===e.calendar),a=!!(i&&i.allDayOnly);return P`
            <ha-dialog
                open
                @closed="${this._closeEditEventDialog}"
                .heading="${this._renderEditEventDialogHeading()}"
            >
                <div class="create-event-form">
                    <div class="form-row">
                        <div class="input-clear-wrapper with-icon">
                            <ha-icon class="field-icon" icon="mdi:format-title"></ha-icon>
                            <input type="text" id="edit-event-title" class="form-input" required
                                .value="${e.title}"
                                @input="${e=>{this._editFormData={...this._editFormData,title:e.target.value}}}" />
                            <button type="button" class="input-clear" @click="${()=>{this._editFormData={...this._editFormData,title:""},this._clearInput("edit-event-title")}}" title="${this._language.cancel}">
                                <ha-icon icon="mdi:close-circle"></ha-icon>
                            </button>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="field-row-icon">
                            <ha-icon class="field-icon" icon="mdi:calendar"></ha-icon>
                            <select id="edit-event-calendar" class="form-input cal-select"
                                @change="${e=>{this._editFormData={...this._editFormData,calendar:e.target.value}}}">
                                ${this._calendars.map(t=>P`
                                    <option value="${t.entity}" ?selected="${t.entity===e.calendar}">${this._getCalendarDisplayName(t)}</option>
                                `)}
                            </select>
                        </div>
                    </div>
                    <div class="form-row" style="${e.allDay?"display: none":""}">
                        <div class="field-row-icon">
                            <ha-icon class="field-icon" icon="mdi:clock-outline"></ha-icon>
                            ${this._renderTimeDropdowns(e.startTime,!0)}
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="field-row-icon">
                            <ha-icon class="field-icon" icon="mdi:timer-outline"></ha-icon>
                            <div class="duration-picker">
                                ${this.constructor.DURATION_PRESETS.map(e=>P`
                                    <button type="button" class="duration-btn ${String(e)===t?"active":""}"
                                        @click="${()=>this._setEditDuration(String(e))}">${this._formatDuration(e)}</button>
                                `)}
                                <button type="button" class="duration-btn ${"allday"===t?"active":""}"
                                    @click="${()=>this._setEditDuration("allday")}">${this._language.fullDay}</button>
                            </div>
                        </div>
                    </div>
                    ${a?"":this._renderCategoryPicker(e.category,this._onEditCategoryClick)}
                    ${this._showLocationInForm?P`
                    <div class="form-row location-row">
                        <div class="location-input-wrapper with-icon${e.location?" has-maps":""}">
                            <ha-icon class="field-icon" icon="mdi:map-marker"></ha-icon>
                            <input type="text" id="edit-event-location" class="form-input" placeholder="${this._language.eventLocation??"Location"}"
                                .value="${e.location??""}"
                                @input="${e=>{this._editFormData={...this._editFormData,location:e.target.value},this._handleLocationInput(e)}}"
                                autocomplete="off" />
                            ${e.location?P`
                            <a class="location-maps-icon" href="${this._locationLink}${encodeURIComponent(e.location)}" target="_blank" rel="noopener noreferrer" title="${this._language.openInMaps??"Google Maps"}">
                                <ha-icon icon="mdi:open-in-new"></ha-icon>
                            </a>
                            `:""}
                            <button type="button" class="input-clear" @click="${()=>{this._editFormData={...this._editFormData,location:""},this._clearInput("edit-event-location")}}" title="${this._language.cancel}">
                                <ha-icon icon="mdi:close-circle"></ha-icon>
                            </button>
                        </div>
                        <ul class="location-suggestions" id="edit-event-location-suggestions"></ul>
                    </div>
                    `:""}
                    ${this._renderEditAdvanced(e,!0)}
                    <div class="form-actions">
                        <button class="btn btn-delete" @click="${this._handleDeleteEventFromEdit}">
                            <ha-icon icon="mdi:delete"></ha-icon> ${this._language.deleteEvent}
                        </button>
                        <button class="btn btn-cancel" @click="${this._closeEditEventDialog}">${this._language.cancel}</button>
                        <button class="btn btn-submit" @click="${this._handleUpdateEvent}">${this._language.save}</button>
                    </div>
                </div>
            </ha-dialog>
        `}_renderEditAdvanced(e,t){return P`
            <details class="advanced-details">
            <summary class="advanced-toggle">
                <ha-icon class="adv-chevron" icon="mdi:chevron-down"></ha-icon>
                <span>${this._language.advancedOptions}</span>
            </summary>
            <div class="advanced-section">
                <div class="form-row">
                    <label for="edit-event-start-date">${this._language.eventDate}</label>
                    <input type="date" id="edit-event-start-date" class="form-input" required
                        .value="${e.startDate}"
                        @input="${e=>this._updateEditStart({startDate:e.target.value})}" />
                </div>
                <div class="form-row">
                    <label for="edit-event-end-date">${this._language.eventEnd}</label>
                    <div class="datetime-row">
                        <input type="date" id="edit-event-end-date" class="form-input"
                            .value="${e.endDate}"
                            @input="${e=>{this._editFormData={...this._editFormData,endDate:e.target.value}}}" />
                        <input type="time" id="edit-event-end-time" class="form-input" style="${e.allDay?"display: none":""}"
                            .value="${e.endTime}"
                            @input="${e=>{this._editFormData={...this._editFormData,endTime:e.target.value}}}" />
                    </div>
                </div>
                <div class="form-row">
                    <label for="edit-event-recurrence">${this._language.eventRecurrence}</label>
                    <select id="edit-event-recurrence" class="form-input"
                        .value="${e.recurrence||""}"
                        @change="${e=>{this._editFormData={...this._editFormData,recurrence:e.target.value,recurrenceByDay:[],recurrenceEndType:"never"}}}">
                        <option value="" ?selected="${!e.recurrence}">${this._language.recurrenceNone}</option>
                        <option value="FREQ=DAILY" ?selected="${"FREQ=DAILY"===e.recurrence}">${this._language.recurrenceDaily}</option>
                        <option value="FREQ=WEEKLY" ?selected="${"FREQ=WEEKLY"===e.recurrence}">${this._language.recurrenceWeekly}</option>
                        <option value="FREQ=MONTHLY" ?selected="${"FREQ=MONTHLY"===e.recurrence}">${this._language.recurrenceMonthly}</option>
                        <option value="FREQ=YEARLY" ?selected="${"FREQ=YEARLY"===e.recurrence}">${this._language.recurrenceYearly}</option>
                    </select>
                </div>
                ${e.recurrence?P`
                    ${"FREQ=YEARLY"!==e.recurrence?P`
                    <div class="form-row recurrence-inline">
                        <label>${this._language.recurrenceInterval}</label>
                        <input type="number" id="edit-event-recurrence-interval" class="form-input recurrence-number" min="1"
                            .value="${String(e.recurrenceInterval||1)}"
                            @input="${e=>{this._editFormData={...this._editFormData,recurrenceInterval:parseInt(e.target.value)||1}}}" />
                        <span class="recurrence-unit">${"FREQ=DAILY"===e.recurrence?this._language.recurrenceDays:"FREQ=WEEKLY"===e.recurrence?this._language.recurrenceWeeks:this._language.recurrenceMonths}</span>
                    </div>
                    `:""}
                    ${"FREQ=WEEKLY"===e.recurrence?P`
                    <div class="form-row">
                        <div class="day-picker" id="edit-event-day-picker">
                            ${["MO","TU","WE","TH","FR","SA","SU"].map(t=>P`
                                <button type="button" class="day-btn ${(e.recurrenceByDay||[]).includes(t)?"active":""}" data-day="${t}"
                                    @click="${e=>this._toggleEditDayBtn(e,t)}">${this._dayLabel(t)}</button>
                            `)}
                        </div>
                    </div>
                    `:""}
                    ${"FREQ=MONTHLY"===e.recurrence?P`
                    <div class="form-row recurrence-inline">
                        <label>${this._language.recurrenceMonthlyOn}</label>
                        <input type="number" id="edit-event-recurrence-monthday" class="form-input recurrence-number"
                            min="1" max="31" .value="${String(e.recurrenceByMonthDay||1)}"
                            @input="${e=>{this._editFormData={...this._editFormData,recurrenceByMonthDay:parseInt(e.target.value)||1}}}" />
                    </div>
                    `:""}
                    <div class="form-row">
                        <label>${this._language.recurrenceEnds}</label>
                        <select id="edit-event-recurrence-end" class="form-input"
                            @change="${e=>{this._editFormData={...this._editFormData,recurrenceEndType:e.target.value}}}">
                            <option value="never" ?selected="${"never"===e.recurrenceEndType}">${this._language.recurrenceEndsNever}</option>
                            <option value="date" ?selected="${"date"===e.recurrenceEndType}">${this._language.recurrenceEndsOnDate}</option>
                            <option value="count" ?selected="${"count"===e.recurrenceEndType}">${this._language.recurrenceEndsAfter}</option>
                        </select>
                    </div>
                    ${"date"===e.recurrenceEndType?P`
                    <div class="form-row">
                        <input type="date" id="edit-event-recurrence-end-date" class="form-input"
                            .value="${e.recurrenceEndDate||""}"
                            @input="${e=>{this._editFormData={...this._editFormData,recurrenceEndDate:e.target.value}}}" />
                    </div>
                    `:""}
                    ${"count"===e.recurrenceEndType?P`
                    <div class="form-row recurrence-inline">
                        <input type="number" id="edit-event-recurrence-end-count" class="form-input recurrence-number"
                            min="1" .value="${String(e.recurrenceEndCount||10)}"
                            @input="${e=>{this._editFormData={...this._editFormData,recurrenceEndCount:parseInt(e.target.value)||10}}}" />
                        <span class="recurrence-unit">${this._language.recurrenceOccurrences}</span>
                    </div>
                    `:""}
                `:""}
                <div class="form-row notify-row">
                    <label class="notify-label" for="edit-event-notify">
                        <input type="checkbox" id="edit-event-notify" .checked="${e.notify??!1}"
                            @change="${e=>{this._editFormData={...this._editFormData,notify:e.target.checked}}}" />
                        <span>\u{1F514} ${this._language.eventNotify}</span>
                    </label>
                </div>
                <div class="form-row">
                    <div class="field-row-icon">
                        <ha-icon class="field-icon" icon="mdi:bell-ring-outline"></ha-icon>
                        <select class="form-input"
                            @change="${e=>{this._editFormData={...this._editFormData,reminderDelay:e.target.value}}}">
                            ${this._reminderDelayOptions().map(t=>P`
                                <option value="${t.v}" ?selected="${(e.reminderDelay||"20m")===t.v}">${t.label}</option>
                            `)}
                        </select>
                    </div>
                </div>
            </div>
            </details>
        `}_renderEditOverlay(){let e=this._editFormData,t=this._getFormDuration(e),i=e.startDate?ef.DateTime.fromISO(e.startDate):null,a=this._calendars.find(t=>t.entity===e.calendar),n=!!(a&&a.allDayOnly);return P`
            <div class="hw-overlay" @click="${e=>{e.target===e.currentTarget&&this._closeEditEventDialog()}}">
                <div class="hw-modal create-event-form">
                    <div class="hw-modal-header">
                        <span>${this._language.editEventTitle}${i&&i.isValid?" — "+i.toFormat("cccc d LLLL"):""}</span>
                        <button type="button" class="hw-close" @click="${this._closeEditEventDialog}">
                            <ha-icon icon="mdi:close"></ha-icon>
                        </button>
                    </div>
                    <div class="hw-edit-scroll">
                        ${this._calendars&&this._calendars.length>1?P`
                        <div class="hw-cal-picker">
                            ${this._calendars.map(t=>P`
                                <button type="button" class="hw-cal-btn ${e.calendar===t.entity?"active":""}"
                                    style="--cal-color: ${t.color||"#888"}"
                                    @click="${()=>{this._editFormData={...this._editFormData,calendar:t.entity}}}">
                                    <span class="hw-cal-dot" style="background: ${t.color||"#888"}"></span>
                                    ${this._getCalendarDisplayName(t)}
                                </button>
                            `)}
                        </div>
                        `:""}
                        <div class="form-row" style="${e.allDay?"display: none":""}">
                            <div class="field-row-icon slots">
                                <ha-icon class="field-icon" icon="mdi:clock-outline"></ha-icon>
                                ${this._renderTimeSlots(e.startTime,!0)}
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="field-row-icon">
                                <ha-icon class="field-icon" icon="mdi:timer-outline"></ha-icon>
                                <div class="duration-picker">
                                    ${this.constructor.DURATION_PRESETS.map(e=>P`
                                        <button type="button" class="duration-btn ${String(e)===t?"active":""}"
                                            @click="${()=>this._setEditDuration(String(e))}">${this._formatDuration(e)}</button>
                                    `)}
                                    <button type="button" class="duration-btn ${"allday"===t?"active":""}"
                                        @click="${()=>this._setEditDuration("allday")}">${this._language.fullDay}</button>
                                </div>
                            </div>
                        </div>
                        ${n?"":this._renderCategoryPicker(e.category,this._onEditCategoryClick)}
                        <div class="hw-current-title">
                            <ha-icon icon="mdi:format-title"></ha-icon>
                            <span>${e.title||"—"}</span>
                        </div>
                        ${this._renderEditAdvanced(e,!1)}
                    </div>
                    <div class="hw-modal-actions">
                        <button class="btn btn-delete" @click="${this._handleDeleteEventFromEdit}">
                            <ha-icon icon="mdi:delete"></ha-icon> ${this._language.deleteEvent}
                        </button>
                        <span style="flex:1"></span>
                        <button class="btn btn-cancel" @click="${this._closeEditEventDialog}">${this._language.cancel}</button>
                        <button class="btn btn-submit" ?disabled="${this._aiLoading}" @click="${this._handleEditOverlaySave}">
                            ${this._aiLoading?P`<ha-icon class="spin" icon="mdi:loading"></ha-icon> `:""}${this._language.save}
                        </button>
                    </div>
                </div>
            </div>
        `}_handleEditOverlaySave(){this._handleUpdateEvent()}_renderEditEventDialogHeading(){let e=this._editFormData?.startDate?ef.DateTime.fromISO(this._editFormData.startDate):null;return P`
            <div class="header_title">
                <span>${this._language.editEventTitle}${e?.isValid?" — "+e.toFormat("cccc d LLLL"):""}</span>
                <ha-icon-button
                    .label="${this.hass?.localize("ui.dialogs.generic.close")??"Close"}"
                    dialogAction="close"
                    class="header_button"
                ><ha-icon icon="mdi:close"></ha-icon></ha-icon-button>
            </div>
        `}_renderRecurringConfirmDialog(){return this._showRecurringConfirmDialog?P`
            <ha-dialog open @closed="${()=>{this._showRecurringConfirmDialog=null}}">
                <div class="create-event-form">
                    <h3 style="margin: 0 0 16px 0; font-size: 1.1em;">${this._language.editRecurringTitle}</h3>
                    <div class="form-actions" style="justify-content: center; gap: 8px;">
                        <button class="btn btn-cancel" @click="${this._handleUpdateThisEvent}">${this._language.editThisEvent}</button>
                        <button class="btn btn-submit" @click="${this._handleUpdateAllEvents}">${this._language.editAllEvents}</button>
                    </div>
                </div>
            </ha-dialog>
        `:P``}_renderDeleteRecurringDialog(){return this._showDeleteRecurringDialog?P`
            <ha-dialog open @closed="${()=>{this._showDeleteRecurringDialog=null}}">
                <div class="create-event-form">
                    <h3 style="margin: 0 0 16px 0; font-size: 1.1em;">${this._language.deleteRecurringTitle}</h3>
                    <div class="form-actions" style="justify-content: center; gap: 8px;">
                        <button class="btn btn-cancel" @click="${this._handleDeleteThisEvent}">${this._language.deleteThisEvent}</button>
                        <button class="btn btn-delete" @click="${this._handleDeleteAllEvents}">
                            <ha-icon icon="mdi:delete"></ha-icon> ${this._language.deleteAllEvents}
                        </button>
                    </div>
                </div>
            </ha-dialog>
        `:P``}_getLoader(){let e=document.createElement("div");return e.className="loader",e.style.display="none",e}_updateLoader(){this._loading>0?this._loader.style.display="inherit":this._loader.style.display="none"}_getWeatherIcon(e,t,i=!1){if(!e)return null;this._weatherIconCache??={};let a=this._weatherIconCache[e];if(void 0===a&&(a=getComputedStyle(this).getPropertyValue("--weather-icon-"+e).trim(),this._weatherIconCache[e]=a),null!==a&&-1===["","none","inherit"].indexOf(a))return P`<div class="icon" style="background-image: var(--weather-icon-${e})"></div>`;let n=(i?nv[e]:np[e])??np[e];return n?P`
                <div class="icon">
                    <img src="${n}" alt="${t}">
                </div>
            `:null}_waitForHassAndConfig(){if(this.isConnected){if(!this.hass||!this._calendars)return void window.setTimeout(()=>{this._waitForHassAndConfig()},50);this._updateEvents(!1)}}_subscribeToWeatherForecast(){if(!this._weather?.entity||!this.hass.states[this._weather.entity]){this._weatherForecast=[];return}if(this._weatherUnsub)return;this._loading++,this._updateLoader();let e=!0;this._weatherUnsub=this.hass.connection.subscribeMessage(t=>{this._weatherForecast=t.forecast??[],e&&(this._loading--,e=!1),this._days&&this._updateCard()},{type:"weather/subscribe_forecast",forecast_type:this._weather.useTwiceDaily?"twice_daily":"daily",entity_id:this._weather.entity}),this._weatherUnsub.catch(()=>{this._weatherUnsub=null,this._weatherForecast=[],e&&(this._loading--,e=!1)})}async _updateEvents(e=!0){if(this._eventsLoading){e&&(this._refreshAgain=!0);return}this._eventsLoading=!0,this._loading++,this._updateLoader(),this._clearUpdateEventsTimeouts(),this._events={},this._calendarEvents={},this._startDate=this._getStartDate(),this._numberOfDaysIsMonth&&(this._numberOfDays=this._startDate.daysInMonth);let t=this._startDate,i=this._startDate.plus({days:this._numberOfDays}),a=ef.DateTime.now(),n=this._startDate.toISO();this._weather&&null===this._weatherForecast&&this._subscribeToWeatherForecast();let r=[],o=0;this._calendars.forEach(e=>{if(!e.entity||!this.hass.states[e.entity])return;let s=e;s.name||(s={...s,name:this.hass.formatEntityAttributeValue(this.hass.states[s.entity],"friendly_name")}),s.sorting||(s={...s,sorting:o});let l=o;r.push(this.hass.callApi("get","calendars/"+s.entity+"?start="+encodeURIComponent(t.toISO())+"&end="+encodeURIComponent(i.toISO())).then(e=>{this._startDate.toISO()===n&&(this._calendarErrors[l]="",e.forEach(e=>{if(this._isFilterEvent(e,s.filter??""))return;let t=this._convertApiDate(e.start),i=this._convertApiDate(e.end);if(this._hidePastEvents&&i<a)return;let n=this._isFullDay(t,i);n||this._isSameDay(t,i)?this._addEvent(e,t,i,n,s):this._handleMultiDayEvent(e,t,i,s)}))}).catch(e=>{this._calendarErrors[l]='Error while fetching calendar "'+s.entity+'": '+(e.error??"Unknown error")})),o++});try{await Promise.allSettled(r),this._startDate.toISO()===n&&this._updateCard()}finally{this._loading=Math.max(0,this._loading-1),this._updateLoader(),this._eventsLoading=!1}if(this._refreshAgain){this._refreshAgain=!1,this._updateEvents(!0);return}this.isConnected&&this._updateEventsTimeouts.push(window.setTimeout(()=>this._updateEvents(!1),1e3*this._updateInterval))}_clearUpdateEventsTimeouts(){this._updateEventsTimeouts.forEach(e=>{clearTimeout(e)}),this._updateEventsTimeouts=[]}_isFilterEvent(e,t){let i=e.summary??"",a=this._safeRegex(this._filter||""),n=this._safeRegex(t||"");return!!(a&&i.match(a)||n&&i.match(n))}_addEvent(e,t,i,a,n,r,o){if(r=r??!1,this._hideWeekend&&t.weekday>=6||a&&this._hideAllDayEvents)return;let s=t.toISODate();this._events.hasOwnProperty(s)||(this._events[s]=[]);let l=this._filterEventSummary(e,n),c=t.toISO()+"-"+i.toISO()+"-"+l;this._combineSimilarEvents||(c=t.toISO()+"-"+i.toISO()+"-"+l+"-"+n.entity),this._calendarEvents.hasOwnProperty(c)?(this._calendarEvents[c].calendars.push(n.entity),this._calendarEvents[c].colors.push(this._calendarColor(n)),n.name&&-1===this._calendarEvents[c].calendarNames.indexOf(n.name)&&this._calendarEvents[c].calendarNames.push(n.name),n.sorting<this._calendarEvents[c].calendarSorting&&(this._calendarEvents[c].calendarSorting=n.sorting)):(this._calendarEvents[c]={summary:l,description:e.description??null,location:e.location??null,start:t,originalStart:this._convertApiDate(e.start),end:i,originalEnd:this._convertApiDate(e.end),fullDay:a,multiDay:r,multiDayPosition:o??null,colors:[this._calendarColor(n)],icon:n.icon??null,calendars:[n.entity],calendarSorting:n.sorting,calendarNames:[n.name],class:this._getEventClass(t,i,a,r),uid:e.uid??null,recurrence_id:e.recurrence_id??null,rrule:e.rrule??null},this._events[s].push(c))}_buildStripTitleRegexes(e){let t=[];for(let i of e||[]){let e=String(i||"").trim();if(!e)continue;let a=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/[\s-]+/g,"[\\s-]*");try{t.push(RegExp("^\\s*"+a+"\\b(?:\\s+(?:chez|au|aux|à|a|avec|pour|en)\\b)?\\s*[:–-]?\\s*","i"))}catch(e){}}return t}_applyTitleStrip(e){if(!this._stripTitleRegexes||!this._stripTitleRegexes.length||!e)return e;let t="🔔 ",i="",a=e;a.startsWith(t)&&(i=t,a=a.slice(t.length));let n=a.trimStart();for(let e of this._stripTitleRegexes){let t=n.replace(e,"");if(t&&t!==n){let[e,...a]=[...t];return i+(e?e.toUpperCase():"")+a.join("")}}return e}_filterEventSummary(e,t){let i=t.eventTitleField?e[t.eventTitleField]:e.summary;if(!i)return"";let a=this._safeRegex(t.filterText);a&&(i=i.replace(a,""));let n=this._safeRegex(this._filterText);if(n&&(i=i.replace(n,"")),t.replaceTitleText)for(let e in t.replaceTitleText){let a=t.replaceTitleText[e];i=i.replace(e,a)}if(this._replaceTitleText)for(let e in this._replaceTitleText){let t=this._replaceTitleText[e];i=i.replace(e,t)}return t.titleEmoji&&!i.startsWith(t.titleEmoji)&&(i=t.titleEmoji+" "+i),i}_getEventClass(e,t,i,a){let n=[],r=ef.DateTime.now();return i&&n.push("fullday"),a&&n.push("multiday"),t<r?n.push("past"):e<=r&&t>r?n.push("ongoing"):n.push("future"),n.join(" ")}_getDayClass(e){let t=[];return this._isToday(e)?t.push("today"):this._isTomorrow(e)?(t.push("tomorrow"),t.push("future")):this._isYesterday(e)?(t.push("yesterday"),t.push("past")):e>ef.DateTime.now()?t.push("future"):t.push("past"),t.push(["sunday","monday","tuesday","wednesday","thursday","friday","saturday","sunday"][e.weekday]),t.join(" ")}_handleMultiDayEvent(e,t,i,a){let n=t;for(;t<i;){let r=t,o=(t=t.plus({days:1}).startOf("day"))<i?t:i,s="middle";if(r.toMillis()===n.toMillis()?s="start":o.toMillis()===i.toMillis()&&(s="end"),this._addEvent(e,r,o,this._isFullDay(r,o),a,!0,s),"single"===this._multiDayMode&&r>=this._startDate)break}}_updateCard(){this._error=this._calendarErrors.join("\n").trim();let e=[],t=this._weather?this.hass.states[this._weather.entity]:null,i={};this._weatherForecast?.forEach(e=>{if(e.hasOwnProperty("is_daytime")&&!1===e.is_daytime)return;let a=ef.DateTime.fromISO(e.datetime).toISODate(),n=this._weather.roundTemperature?Math.round(e.temperature):e.temperature,r=this._weather.roundTemperature?Math.round(e.templow):e.templow;i[a]={state:e.condition,condition:this.hass.formatEntityState(t,e.condition),temperature:this.hass.formatEntityAttributeValue(t,"temperature",n),templow:this.hass.formatEntityAttributeValue(t,"templow",r)}});let a=this._startDate,n=this._startDate.plus({days:this._numberOfDays}),r=null,o=String(this._startingDay).toLowerCase().trim();if(this._numberOfDaysIsMonth&&["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].includes(o)){r=a.plus({days:7}).month;let e=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"].indexOf(o)+1;a=this._getWeekDayDate(a,e);let t=this._startDate.endOf("month");for(n=a;n<=t;)n=n.plus({days:7})}let s=0;for(;a<n;){if(!this._hideWeekend||a.weekday<6){let t=[],n=null!==r&&a.month!==r,o=a.toISODate();if(this._events.hasOwnProperty(o)&&!n){t=this._events[o].sort((e,t)=>{let i=this._calendarEvents[e],a=this._calendarEvents[t];if(!i||!a)return 0;if("banner"===this._multiDayMode&&i.multiDay!==a.multiDay)return i.multiDay?-1:1;if("banner"===this._multiDayMode&&i.multiDay&&a.multiDay){let e=i.originalStart?.toISO()??"",t=a.originalStart?.toISO()??"";return e!==t?e>t?1:-1:i.summary>a.summary?1:i.summary<a.summary?-1:0}return i.start.toMillis()===a.start.toMillis()?i.calendarSorting<a.calendarSorting?1:i.calendarSorting>a.calendarSorting?-1:0:i.start>a.start?1:-1});let e=s;s+=t.length,this._maxEvents>0&&s>this._maxEvents&&(t=t.slice(0,Math.max(0,this._maxEvents-e)))}if(e.push({date:a,events:t,weather:n?null:i[o]??null,class:this._getDayClass(a)+(n?" outside-month":""),isOutsideMonth:n}),this._maxEvents>0&&s>=this._maxEvents)break}a=a.plus({days:1})}if(this._days=e,this._numberOfDaysIsMonth){let t=ef.DateTime.now(),i=e.find(e=>!e.isOutsideMonth);if(this._selectedDay&&this._selectedDay.date.month===i?.date.month&&this._selectedDay.date.year===i?.date.year){let t=e.find(e=>!e.isOutsideMonth&&e.date.day===this._selectedDay.date.day&&e.date.month===this._selectedDay.date.month);t&&(this._selectedDay=t)}else{let a=e.find(e=>!e.isOutsideMonth&&e.date.day===t.day&&e.date.month===t.month&&e.date.year===t.year);this._selectedDay=a??i??null}}}_getWeekDayText(e){return this._language.today&&this._isToday(e)?this._language.today:this._language.tomorrow&&this._isTomorrow(e)?this._language.tomorrow:this._language.yesterday&&this._isYesterday(e)?this._language.yesterday:[this._language.sunday,this._language.monday,this._language.tuesday,this._language.wednesday,this._language.thursday,this._language.friday,this._language.saturday,this._language.sunday][e.weekday]}_handleContainerClick(e){if(!this._actions)return;let t=new Event("hass-action",{bubbles:!0,composed:!0});t.detail={config:this._actions,action:"tap"},this.dispatchEvent(t),e.stopImmediatePropagation()}_handleEventClick(e){this._actions||(e.uid&&!this._eventIsReadOnly(e)?this._openEditEventDialog(e):this._currentEventDetails=e)}_closeDialog(){this._currentEventDetails=null}_handleAddEventClick(e,t){e.stopImmediatePropagation(),this._createDuration="60",this._createShowAdvanced=!1,this._createEndTouched=!1,this._createTitle=null,this._createCategory="",this._aiLoading=!1,this._aiError=null,this._aiResult=null,this._drawing=!1,this._hasDrawing=!1,this._canvasReady=!1,this._eraserMode=!1;let i=(this._calendars||[]).filter(e=>this._isWritable(e.entity));this._createCalendar=this._defaultCalendar&&i.some(e=>e.entity===this._defaultCalendar)?this._defaultCalendar:i[0]&&i[0].entity||this._calendars&&this._calendars[0]&&this._calendars[0].entity||null;let a=ef.DateTime.now();this._createStartTime=String(Math.min(a.hour+1,23)).padStart(2,"0")+":00",this._showCreateEventDialog={date:t.date}}_closeCreateEventDialog(){this._showCreateEventDialog=null,this._createRecurrenceType=null,this._createRecurrenceEndType="never",this._createDuration="60",this._createShowAdvanced=!1,this._createEndTouched=!1,this._createTitle=null,this._createCategory="",this._createStartTime=null,this._aiLoading=!1,this._aiError=null,this._aiResult=null,this._drawing=!1,this._hasDrawing=!1,this._canvasReady=!1,this._eraserMode=!1}_renderQuickAdd(){return P`
            <div class="form-row">
                <div class="input-clear-wrapper with-icon quick-add-row">
                    <ha-icon class="field-icon" icon="mdi:flash-outline"></ha-icon>
                    <input type="text" id="event-quick" class="form-input" placeholder="${this._language.quickAdd}"
                        @change="${e=>this._handleQuickAdd(e.target.value)}" />
                    <button type="button" class="input-clear" @click="${()=>this._clearInput("event-quick")}" title="${this._language.cancel}">
                        <ha-icon icon="mdi:close-circle"></ha-icon>
                    </button>
                </div>
                ${this._isAiQuickAddAvailable()?P`
                <button type="button" class="ai-analyze-btn" ?disabled="${this._aiLoading}" @click="${this._runAiQuickAdd}">
                    <ha-icon class="${this._aiLoading?"spin":""}" icon="${this._aiLoading?"mdi:loading":"mdi:auto-fix"}"></ha-icon>
                    <span>${this._language.aiAnalyze}</span>
                </button>
                `:""}
            </div>
        `}_initCanvas(){let e=this.shadowRoot?.querySelector("#quick-canvas");if(!e)return;this._canvasScale=2.5,e.width=Math.round(2.5*(e.clientWidth||640)),e.height=Math.round(2.5*(e.clientHeight||200));let t=e.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,e.width,e.height),this._hasDrawing=!1}_clearCanvas(){this._initCanvas(),this._aiError=null,this._aiResult=null;let e=this.shadowRoot?.querySelector(".hw-hint");e&&(e.style.display="")}_canvasCoords(e,t){let i=t.getBoundingClientRect();return{x:(e.clientX-i.left)*(t.width/i.width),y:(e.clientY-i.top)*(t.height/i.height)}}_canvasPointerDown(e){if(!e.isPrimary)return;e.preventDefault();let t=e.currentTarget,i=this._canvasCoords(e,t);this._drawing=!0,this._hasDrawing=!0,this._lastX=i.x,this._lastY=i.y;let a=this.shadowRoot?.querySelector(".hw-hint");a&&(a.style.display="none");try{t.setPointerCapture(e.pointerId)}catch(e){}}_canvasPointerMove(e){if(!this._drawing||!e.isPrimary)return;e.preventDefault();let t=e.currentTarget,i=this._canvasCoords(e,t),a=t.getContext("2d"),n=this._canvasScale||1;a.strokeStyle=this._eraserMode?"#ffffff":"#111111",a.lineWidth=(this._eraserMode?24:2.5)*n,a.lineCap="round",a.lineJoin="round",a.beginPath(),a.moveTo(this._lastX,this._lastY),a.lineTo(i.x,i.y),a.stroke(),this._lastX=i.x,this._lastY=i.y}_canvasPointerUp(e){this._drawing=!1}_usePen(){this._eraserMode=!1}_useEraser(){this._eraserMode=!0}_handwritingEnabled(){return this._handwriting&&!!(this._geminiApiKey||this._claudeApiKey)}_isHandwritingDevice(){try{return window.matchMedia("(any-pointer: coarse)").matches&&window.innerWidth>=768}catch(e){return!1}}_showHandwritingCanvas(){return this._handwritingEnabled()&&this._isHandwritingDevice()}_fullscreenOverlayOpen(){return(this._showCreateEventDialog||this._showEditEventDialog)&&this._showHandwritingCanvas()}_selectCreateCalendar(e,t){this._createCalendar=t;let i=e.currentTarget,a=i.closest(".hw-cal-picker");a&&a.querySelectorAll(".hw-cal-btn").forEach(e=>e.classList.toggle("active",e===i))}_onCreateDurationClick(e){let t=e.currentTarget?.dataset?.duration;t&&(this._createDuration=t,this._createEndTouched=!1,this.requestUpdate())}_resolveAiProvider(){return"claude"===this._aiProvider&&this._claudeApiKey?"claude":"gemini"===this._aiProvider&&this._geminiApiKey?"gemini":this._claudeApiKey?"claude":this._geminiApiKey?"gemini":null}_handwritingPrompt(){return'This image is a short handwritten calendar note: usually a title plus a start time. Times are written like "9h", "9 h", "14h30", "9:00" or "20h". Read the digits very carefully — handwritten 9 can look like "g", 1 like "l" or "I", 0 like "o", 7 like "/", 4 like "y". A token that is a number (optionally followed by "h" or ":" and minutes) is the START TIME, not part of the title. Extract a JSON object with: raw (the verbatim text you read, exactly as written, including the time token), title (the subject only, without the time or date), time (start time as HH:MM in 24-hour format if a time is present, otherwise an empty string), duration_minutes (integer; default 60 if unspecified, 0 for an all-day event). Keep the title in its original language.'}_extractJson(e){if(!e)return null;let t=String(e).trim(),i=t.match(/```(?:json)?\s*([\s\S]*?)```/i);i&&(t=i[1].trim());try{return JSON.parse(t)}catch(e){}let a=t.match(/\{[\s\S]*\}/);if(a)try{return JSON.parse(a[0])}catch(e){}return null}_handleHandwritingCreate(){let e=this.shadowRoot?.querySelector("#quick-canvas");if(!e||!this._hasDrawing){this._aiError=this._language.handwriteHint??"Write something first";return}let t=this._resolveAiProvider();if(!t){this._aiError="No AI key configured";return}let i=e.toDataURL("image/png").split(",")[1],a=this._showCreateEventDialog?.date,n=this._createCalendar||this._defaultCalendar||this._calendars&&this._calendars[0]&&this._calendars[0].entity,r=this._createCategory;this._closeCreateEventDialog(),this._backgroundCreateFromImage(t,i,a,n,r)}async _backgroundCreateFromImage(e,t,i,a,n){try{let r;if(!i||!a)throw Error("No date or calendar");let o="claude"===e?await this._analyzeWithClaude(t):await this._analyzeWithGemini(t),{title:s,time:l,durationMin:c}=this._parseAiResult(o);if(!s)return void this._notify(this._language.aiAnalyze+" — "+(this._language.titleRequired??"nothing read"));let d=this._calendars.find(e=>e.entity===a),h=!!(d&&d.allDayOnly),u=this._composeSummary(s,!1,h?"":n||"");if(l&&!h){let[e,t]=l.split(":").map(Number),a=i.set({hour:e,minute:t,second:0,millisecond:0}),n=a.plus({minutes:c&&c>0?c:60});r={summary:u,dtstart:a.toFormat("yyyy-MM-dd'T'HH:mm:ss"),dtend:n.toFormat("yyyy-MM-dd'T'HH:mm:ss")}}else r={summary:u,dtstart:i.toISODate(),dtend:i.plus({days:1}).toISODate()};await this.hass.callWS({type:"calendar/event/create",entity_id:a,event:r}),this._updateEvents()}catch(e){console.error("Family Calendar: background create failed",e),this._notify("⚠️ "+(e&&e.message?e.message:String(e)))}}_parseAiResult(e){let t=e&&e.title&&String(e.title).trim()?String(e.title).trim():null,i=e&&e.time?this._parseTime(String(e.time)):null,a=e&&e.raw?String(e.raw):"";if(!i&&a){let e=a.match(/(\d{1,2})\s*[hH:]\s*(\d{2})?/);e?(i=this._parseTime(e[0]),t||(t=(a.slice(0,e.index)+a.slice(e.index+e[0].length)).replace(/\s{2,}/g," ").replace(/^[-–,:\s]+|[-–,:\s]+$/g,"").trim())):t||(t=a.trim())}let n=parseInt(e&&e.duration_minutes);return isNaN(n)&&(n=null),{title:t,time:i,durationMin:n}}_notify(e){this.dispatchEvent(new CustomEvent("hass-notification",{detail:{message:e},bubbles:!0,composed:!0}))}async _analyzeWithGemini(e){let t=this._geminiModel||"gemini-2.5-flash",i=`https://generativelanguage.googleapis.com/v1beta/models/${t}:generateContent?key=${encodeURIComponent(this._geminiApiKey)}`,a=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:this._handwritingPrompt()},{inlineData:{mimeType:"image/png",data:e}}]}],generationConfig:{responseMimeType:"application/json",responseSchema:{type:"OBJECT",properties:{raw:{type:"STRING"},title:{type:"STRING"},time:{type:"STRING"},duration_minutes:{type:"INTEGER"}},required:["title"]}}})}),n=await a.json();if(!a.ok)throw Error(n?.error?.message||"HTTP "+a.status);return this._extractJson(n.candidates?.[0]?.content?.parts?.[0]?.text)}async _analyzeWithClaude(e){let t=this._claudeModel||"claude-opus-4-8",i=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"content-type":"application/json","x-api-key":this._claudeApiKey,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:t,max_tokens:256,messages:[{role:"user",content:[{type:"image",source:{type:"base64",media_type:"image/png",data:e}},{type:"text",text:this._handwritingPrompt()+" Respond with only the JSON object."}]}],output_config:{format:{type:"json_schema",schema:{type:"object",properties:{raw:{type:"string"},title:{type:"string"},time:{type:"string"},duration_minutes:{type:"integer"}},required:["raw","title","time","duration_minutes"],additionalProperties:!1}}}})}),a=await i.json();if(!i.ok)throw Error(a?.error?.message||"HTTP "+i.status);let n=(a.content||[]).find(e=>"text"===e.type);return this._extractJson(n?.text)}_getAiTaskEntity(){return this._aiTaskEntity?this._aiTaskEntity:this.hass?Object.keys(this.hass.states).find(e=>e.startsWith("ai_task."))??null:null}_isAiQuickAddAvailable(){return!1!==this._aiQuickAdd&&!!this._getAiTaskEntity()}async _runAiQuickAdd(){let e=this.shadowRoot.querySelector("#event-quick")?.value?.trim();if(!e||this._aiLoading)return;let t=this._getAiTaskEntity();if(!t)return void this._handleQuickAdd(e);this._aiLoading=!0;try{let i=await this.hass.callWS({type:"call_service",domain:"ai_task",service:"generate_data",service_data:{task_name:"quick_add_calendar_event",entity_id:t,instructions:`Extract a single calendar event from this text written by a user: "${e}".
- title: the subject only, without any time or date words.
- time: the start time in 24-hour HH:MM format if a clock time is mentioned, otherwise an empty string.
- duration_minutes: the duration in minutes (default 60 when unspecified; use 0 for an all-day event).
Keep the title in the same language as the input. Do not invent a time that is not present.`,structure:{title:{selector:{text:{}},description:"Event title, without the time",required:!0},time:{selector:{text:{}},description:"Start time HH:MM (24h), or empty if none"},duration_minutes:{selector:{number:{}},description:"Duration in minutes, 0 means all-day"}}},return_response:!0}),a=i?.response?.data??i?.response??{};this._applyAiQuickAdd(a)}catch(t){console.error("Family Calendar: AI quick-add failed, using local parser",t),this._handleQuickAdd(e)}finally{this._aiLoading=!1}}_applyAiQuickAdd(e){let{title:t,time:i,durationMin:a}=this._parseAiResult(e);return t&&(this._createTitle=t),i?(this._createStartTime=i,a&&a>0?this._createDuration=String(a):"allday"===this._createDuration&&(this._createDuration="60")):this._createDuration="allday",{title:this._createTitle,time:i}}_handleQuickAdd(e){if(!e||!e.trim())return;let t=e.trim(),i=t.match(/(\d{1,2})\s*[hH:]\s*(\d{2})?/),a=t,n=null;i&&(n=this._parseTime(i[0]))&&(a=t.slice(0,i.index)+t.slice(i.index+i[0].length)),a=a.replace(/\s{2,}/g," ").replace(/^[-–,:\s]+|[-–,:\s]+$/g,"").trim(),this._createTitle=a,n?(this._createStartTime=n,"allday"===this._createDuration&&(this._createDuration="60")):this._createDuration="allday"}_clearInput(e){let t=this.shadowRoot?.querySelector("#"+e);t&&(t.value="",e.endsWith("location")&&this._clearLocationSuggestions(t),t.focus())}_handleLocationInput(e){if(!this._googleApiKey)return;if(this._locationSelected){this._locationSelected=!1;return}let t=e.target.value?.trim(),i=e.target;(clearTimeout(this._locationSearchTimeout),!t||t.length<3)?this._clearLocationSuggestions(i):this._locationSearchTimeout=setTimeout(()=>this._searchLocation(t,i),400)}async _searchLocation(e,t){try{let i=await fetch("https://places.googleapis.com/v1/places:autocomplete",{method:"POST",headers:{"Content-Type":"application/json","X-Goog-Api-Key":this._googleApiKey},body:JSON.stringify({input:e,languageCode:this._config?.locale||"en"})}),a=((await i.json()).suggestions||[]).filter(e=>e.placePrediction).map(e=>({name:e.placePrediction.structuredFormat?.mainText?.text||"",address:e.placePrediction.structuredFormat?.secondaryText?.text||"",fullText:e.placePrediction.text?.text||""}));this._showLocationSuggestions(a,t)}catch(e){console.error("Location search failed:",e)}}_showLocationSuggestions(e,t){let i=t.closest(".location-row").querySelector(".location-suggestions");if(i){if(i.innerHTML="",0===e.length){i.style.display="none";return}e.forEach(e=>{let a=document.createElement("li"),n=document.createElement("strong");n.textContent=e.name;let r=document.createElement("span");r.style.cssText="color: var(--secondary-text-color); font-size: 0.85em;",r.textContent=e.address,a.appendChild(n),a.appendChild(document.createTextNode(" ")),a.appendChild(r),a.addEventListener("click",()=>{this._locationSelected=!0,t.value=e.fullText,t.dispatchEvent(new Event("input",{bubbles:!0})),this._editFormData&&(this._editFormData={...this._editFormData,location:e.fullText}),i.style.display="none"}),i.appendChild(a)}),i.style.display="block"}}_clearLocationSuggestions(e){let t=e.closest(".location-row").querySelector(".location-suggestions");t&&(t.innerHTML="",t.style.display="none")}async _handleCreateEvent(){let e,t,i=(this._createTitle??this.shadowRoot.querySelector("#event-title")?.value??"").trim(),a=this._createCalendar||this.shadowRoot.querySelector("#event-calendar")?.value,n=this.shadowRoot.querySelector("#event-start-date")?.value,r=this._parseTime(this._createStartTime??"09:00"),o=this.shadowRoot.querySelector("#event-end-date")?.value,s=this.shadowRoot.querySelector("#event-end-time")?.value,l=n&&r?`${n}T${r}`:"",c=o&&s?`${o}T${s}`:"",d=this.shadowRoot.querySelector("#event-location")?.value?.trim(),h=this.shadowRoot.querySelector("#event-recurrence")?.value,u=this.shadowRoot.querySelector("#event-notify")?.checked??!1,m=this._createDuration||"60",f=this._calendars.find(e=>e.entity===a),p=f&&f.allDayOnly||"allday"===m;if(!i||!n||!p&&!l)return;if(p){let i=ef.DateTime.fromISO(n);if(!i.isValid)return;let a=this._createEndTouched&&o?ef.DateTime.fromISO(o):i;(!a.isValid||a<i)&&(a=i),e=i.toISODate(),t=a.plus({days:1}).toISODate()}else{let i=ef.DateTime.fromISO(l);if(!i.isValid)return;let a=this._createEndTouched&&c?ef.DateTime.fromISO(c):i.plus({minutes:parseInt(m)||60});(!a.isValid||a<=i)&&(a=i.plus({hours:1})),e=i.toFormat("yyyy-MM-dd'T'HH:mm:ss"),t=a.toFormat("yyyy-MM-dd'T'HH:mm:ss")}let v="";if(h){let e=parseInt(this.shadowRoot.querySelector("#event-recurrence-interval")?.value)||1,t=[];"FREQ=WEEKLY"===h&&(t=[...this.shadowRoot.querySelectorAll("#event-day-picker .day-btn.active")].map(e=>e.dataset.day));let i="FREQ=MONTHLY"===h?parseInt(this.shadowRoot.querySelector("#event-recurrence-monthday")?.value):null,a=this.shadowRoot.querySelector("#event-recurrence-end")?.value||"never",n=this.shadowRoot.querySelector("#event-recurrence-end-date")?.value||"",r=parseInt(this.shadowRoot.querySelector("#event-recurrence-end-count")?.value)||10;v=this._buildRrule(h,e,t,i,a,n,r)}let y=f&&f.allDayOnly?"":this._createCategory,g={summary:this._composeSummary(i,u,y),dtstart:e,dtend:t};d&&(g.location=d),v&&(g.rrule=v);let w=this.shadowRoot.querySelector("#event-reminder-delay")?.value||"20m";u&&"20m"!==w&&(g.description=`[r:${w}]`);try{await this.hass.callWS({type:"calendar/event/create",entity_id:a,event:g}),this._closeCreateEventDialog(),this._updateEvents()}catch(e){console.error("Failed to create event:",e),this._notify("⚠️ "+(e?.message||e?.code||this._language.create))}}async _handleDeleteEvent(){let e=this._currentEventDetails;if(e&&e.uid){if(e.recurrence_id){this._showDeleteRecurringDialog={event:e,source:"details"};return}try{let t={type:"calendar/event/delete",entity_id:e.calendars[0],uid:e.uid};await this.hass.callWS(t),this._currentEventDetails=null,this._updateEvents()}catch(e){console.error("Failed to delete event:",e),this._notify("⚠️ "+(e?.message||e?.code||this._language.deleteEvent))}}}_handleEditEventClick(){let e=this._currentEventDetails;this._currentEventDetails=null,this._openEditEventDialog(e)}_openEditEventDialog(e){this._aiError=null,this._aiLoading=!1,this._drawing=!1,this._hasDrawing=!1,this._canvasReady=!1,this._eraserMode=!1;let t="";e.rrule?t=e.rrule:e.recurrence_rule&&(t=e.recurrence_rule);let i=this._parseRrule(t),a=e.summary||"",n=this._calByEntity[e.calendars[0]||""];n&&n.titleEmoji&&a.startsWith(n.titleEmoji)&&(a=a.slice(n.titleEmoji.length).replace(/^\s+/,""));let r=a.startsWith("🔔"),o=r?a.replace(/^\u{1F514}\s*/u,""):a,s=this._splitCategory(o),l=this._parseReminderDelay(e.description),c=this._cleanDescription(e.description),d=this._isFullDay(e.originalStart,e.originalEnd,!0),h=e.originalEnd?d?e.originalEnd.minus({days:1}):e.originalEnd:null;this._editFormData={title:s.title,notify:r,category:s.emoji,reminderDelay:l,description:c,allDay:d,showAdvanced:!!i.freq,calendar:e.calendars[0]||"",startDate:e.originalStart?e.originalStart.toFormat("yyyy-MM-dd"):"",startTime:e.originalStart?e.originalStart.toFormat("HH:mm"):"",endDate:h?h.toFormat("yyyy-MM-dd"):"",endTime:h?h.toFormat("HH:mm"):"",location:e.location||"",recurrence:i.freq,recurrenceInterval:i.interval,recurrenceByDay:i.byDay,recurrenceByMonthDay:i.byMonthDay??(e.originalStart?e.originalStart.day:ef.DateTime.now().day),recurrenceEndType:i.endType,recurrenceEndDate:i.endDate,recurrenceEndCount:i.endCount},this._showEditEventDialog=e}_closeEditEventDialog(){this._showEditEventDialog=null,this._editFormData=null,this._aiError=null,this._aiLoading=!1,this._drawing=!1,this._hasDrawing=!1,this._canvasReady=!1,this._eraserMode=!1}async _handleDeleteEventFromEdit(){let e=this._showEditEventDialog;if(e&&e.uid){if(e.recurrence_id){this._showDeleteRecurringDialog={event:e,source:"edit"};return}try{let t={type:"calendar/event/delete",entity_id:e.calendars[0],uid:e.uid};await this.hass.callWS(t),this._showEditEventDialog=null,this._editFormData=null,this._updateEvents()}catch(e){console.error("Family Calendar: Failed to delete event:",e)}}}async _handleDeleteThisEvent(){let e=this._showDeleteRecurringDialog;if(!e)return;let t=e.event;this._showDeleteRecurringDialog=null;try{let i={type:"calendar/event/delete",entity_id:t.calendars[0],uid:t.uid,recurrence_id:t.recurrence_id};await this.hass.callWS(i),"edit"===e.source?(this._showEditEventDialog=null,this._editFormData=null):this._currentEventDetails=null,this._updateEvents()}catch(e){console.error("Family Calendar: Failed to delete single event:",e)}}async _handleDeleteAllEvents(){let e=this._showDeleteRecurringDialog;if(!e)return;let t=e.event;this._showDeleteRecurringDialog=null;try{let i={type:"calendar/event/delete",entity_id:t.calendars[0],uid:t.uid};await this.hass.callWS(i),"edit"===e.source?(this._showEditEventDialog=null,this._editFormData=null):this._currentEventDetails=null,this._updateEvents()}catch(e){console.error("Family Calendar: Failed to delete all events:",e)}}async _handleUpdateEvent(){let e=this._showEditEventDialog,t=this._editFormData;if(!e||!t)return void console.error("Family Calendar: No event or form data for update");if(e.recurrence_id){this._showRecurringConfirmDialog={event:e,form:{...t}};return}await this._performUpdateEvent(e,t,null)}async _handleUpdateThisEvent(){let e=this._showRecurringConfirmDialog;e&&(this._showRecurringConfirmDialog=null,await this._performUpdateEvent(e.event,e.form,"this"))}async _handleUpdateAllEvents(){let e=this._showRecurringConfirmDialog;e&&(this._showRecurringConfirmDialog=null,await this._performUpdateEvent(e.event,e.form,"all"))}async _performUpdateEvent(e,t,i){let a,n,r=t.title?.trim(),o=t.calendar,s=t.startDate&&t.startTime?`${t.startDate}T${t.startTime}`:"",l=t.endDate&&t.endTime?`${t.endDate}T${t.endTime}`:"",c=t.location?.trim()??"",d=this._buildRrule(t.recurrence,t.recurrenceInterval,t.recurrenceByDay,t.recurrenceByMonthDay,t.recurrenceEndType,t.recurrenceEndDate,t.recurrenceEndCount);if(!r||!s)return void console.error("Family Calendar: Missing required fields",{title:r,startInput:s});let h=this._composeSummary(r,t.notify,t.category);if(t.allDay){let e=ef.DateTime.fromISO(t.startDate);if(!e.isValid)return void console.error("Family Calendar: Invalid start date",{startDate:t.startDate});let i=t.endDate?ef.DateTime.fromISO(t.endDate):e;(!i.isValid||i<e)&&(i=e),a=e.toISODate(),n=i.plus({days:1}).toISODate()}else{let e=ef.DateTime.fromISO(s);if(!e.isValid)return void console.error("Family Calendar: Invalid start date",{startInput:s});let t=l?ef.DateTime.fromISO(l):e.plus({hours:1});(!t.isValid||t<=e)&&(t=e.plus({hours:1})),a=e.toFormat("yyyy-MM-dd'T'HH:mm:ss"),n=t.toFormat("yyyy-MM-dd'T'HH:mm:ss")}let u=e.calendars[0],m=o||u,f=!!e.uid&&m!==u,p=t.notify&&t.reminderDelay&&"20m"!==t.reminderDelay?`[r:${t.reminderDelay}]`:"",v=[(t.description||"").trim(),p].filter(Boolean).join("\n"),y=()=>{let e={summary:h,dtstart:a,dtend:n};return c&&(e.location=c),d&&(e.rrule=d),v&&(e.description=v),e},g=async()=>{let t={type:"calendar/event/delete",entity_id:u,uid:e.uid};"this"===i?t.recurrence_id=e.recurrence_id:"all"===i||e.recurrence_id&&(t.recurrence_id=e.recurrence_id,t.recurrence_range="THISANDFUTURE"),await this.hass.callWS(t)};try{if(f)await g(),await this.hass.callWS({type:"calendar/event/create",entity_id:m,event:y()});else if(e.uid){let t={type:"calendar/event/update",entity_id:u,uid:e.uid,event:y()};"this"===i?t.recurrence_id=e.recurrence_id:"all"===i||e.recurrence_id&&(t.recurrence_id=e.recurrence_id,t.recurrence_range="THISANDFUTURE"),await this.hass.callWS(t)}this._showEditEventDialog=null,this._editFormData=null,this._updateEvents()}catch(t){if("not_supported"===t.code&&e.uid&&!f)try{await g(),await this.hass.callWS({type:"calendar/event/create",entity_id:u,event:y()}),this._showEditEventDialog=null,this._editFormData=null,this._updateEvents()}catch(e){console.error("Family Calendar: Failed to update event (fallback):",e)}else console.error("Family Calendar: Failed to update event:",t),this._notify("⚠️ "+(t?.message||t?.code||this._language.save))}}_toggleDayBtn(e){e.target.classList.toggle("active")}_toggleEditDayBtn(e,t){let i=[...this._editFormData.recurrenceByDay||[]],a=i.indexOf(t);a>=0?i.splice(a,1):i.push(t),this._editFormData={...this._editFormData,recurrenceByDay:i}}_dayLabel(e){return ef.Info.weekdays("short")[({MO:0,TU:1,WE:2,TH:3,FR:4,SA:5,SU:6})[e]]??e}_getDefaultMonthDay(){let e=this.shadowRoot?.querySelector("#event-start-date")?.value;return e?ef.DateTime.fromISO(e).day:ef.DateTime.now().day}_renderTimeDropdowns(e,t){let i=String(e||"09:00").split(":"),a=parseInt(i[0]),n=parseInt(i[1]),r=[];for(let e=this._slotStartHour;e<=this._slotEndHour;e++)r.push(e);r.includes(a)||(r.push(a),r.sort((e,t)=>e-t));let o=[0,15,30,45];o.includes(n)||(o.push(n),o.sort((e,t)=>e-t));let s=e=>{let i=parseInt(e.target.value);t?this._setEditTime(i,null):this._setCreateTime(i,null)},l=e=>{let i=parseInt(e.target.value);t?this._setEditTime(null,i):this._setCreateTime(null,i)};return P`
            <div class="time-dropdowns">
                <select class="form-input time-select" @change="${s}">
                    ${r.map(e=>P`<option value="${e}" ?selected="${e===a}">${String(e).padStart(2,"0")} h</option>`)}
                </select>
                <span class="time-sep">:</span>
                <select class="form-input time-select" @change="${l}">
                    ${o.map(e=>P`<option value="${e}" ?selected="${e===n}">${String(e).padStart(2,"0")}</option>`)}
                </select>
            </div>
        `}_renderTimeSlots(e,t){let i=String(e||"09:00").split(":"),a=parseInt(i[0]),n=parseInt(i[1]),r=[];for(let e=this._slotStartHour;e<=this._slotEndHour;e++)r.push(e);let o=e=>t?this._setEditTime(e,null):this._setCreateTime(e,null),s=e=>t?this._setEditTime(null,e):this._setCreateTime(null,e);return P`
            <div class="time-slot-picker">
                <div class="slot-grid">
                    ${r.map(e=>P`
                        <button type="button" class="slot-btn ${e===a?"active":""}"
                            @click="${()=>o(e)}">${e}h</button>
                    `)}
                </div>
                <div class="slot-grid minutes">
                    ${[0,15,30,45].map(e=>P`
                        <button type="button" class="slot-btn ${e===n?"active":""}"
                            @click="${()=>s(e)}">${String(e).padStart(2,"0")}</button>
                    `)}
                </div>
            </div>
        `}_setCreateTime(e,t){let i=String(this._createStartTime||"09:00").split(":").map(Number),a=e??i[0],n=t??i[1];this._createStartTime=String(a).padStart(2,"0")+":"+String(n).padStart(2,"0"),"allday"===this._createDuration&&(this._createDuration="60")}_setEditTime(e,t){let i=this._editFormData,a=String(i.startTime||"09:00").split(":").map(Number),n=e??a[0],r=t??a[1],o=String(n).padStart(2,"0")+":"+String(r).padStart(2,"0");if(i.allDay){let e=ef.DateTime.fromISO(`${i.startDate}T${o}`).plus({minutes:60});this._editFormData={...i,allDay:!1,startTime:o,endDate:e.toFormat("yyyy-MM-dd"),endTime:e.toFormat("HH:mm")}}else this._updateEditStart({startTime:o})}_parseTime(e){let t,i;if(!e)return null;let a=String(e).trim().toLowerCase().replace(/\s+/g,""),n=a.match(/^(\d{1,2})[h:.,](\d{0,2})$/);if(n)t=parseInt(n[1]),i=""===n[2]?0:parseInt(n[2]);else if(/^\d{3,4}$/.test(a)){let e=a.padStart(4,"0");t=parseInt(e.slice(0,2)),i=parseInt(e.slice(2))}else{if(!/^\d{1,2}$/.test(a))return null;t=parseInt(a),i=0}return isNaN(t)||isNaN(i)||t>23||i>59?null:String(t).padStart(2,"0")+":"+String(i).padStart(2,"0")}_formatDuration(e){if((e=parseInt(e))<60)return e+" min";let t=Math.floor(e/60),i=e%60;return 0===i?t+" h":t+" h "+String(i).padStart(2,"0")}_getFormDuration(e){if(e.allDay)return"allday";let t=ef.DateTime.fromISO(`${e.startDate}T${e.startTime||"00:00"}`),i=ef.DateTime.fromISO(`${e.endDate}T${e.endTime||"00:00"}`);if(!t.isValid||!i.isValid)return"60";let a=Math.round(i.diff(t,"minutes").minutes);return a>0?String(a):"60"}_updateEditStart(e){let t=this._editFormData,i={...t,...e},a=ef.DateTime.fromISO(`${t.startDate}T${t.startTime||"00:00"}`),n=ef.DateTime.fromISO(`${t.endDate}T${t.endTime||"00:00"}`),r=ef.DateTime.fromISO(`${i.startDate}T${i.startTime||"00:00"}`);if(a.isValid&&n.isValid&&r.isValid&&n>=a){let e=Math.round(n.diff(a,"minutes").minutes),t=r.plus({minutes:e});i.endDate=t.toFormat("yyyy-MM-dd"),i.endTime=t.toFormat("HH:mm")}this._editFormData=i}_setEditDuration(e){let t=this._editFormData;if("allday"===e){this._editFormData={...t,allDay:!0,startTime:"00:00",endTime:"00:00",endDate:t.startDate};return}let i=t.allDay?"09:00":t.startTime||"09:00",a=ef.DateTime.fromISO(`${t.startDate}T${i}`);if(!a.isValid){this._editFormData={...t,allDay:!1,startTime:i};return}let n=a.plus({minutes:parseInt(e)||60});this._editFormData={...t,allDay:!1,startTime:i,endDate:n.toFormat("yyyy-MM-dd"),endTime:n.toFormat("HH:mm")}}_buildRrule(e,t,i,a,n,r,o){if(!e)return"";let s=e;return t&&t>1&&(s+=";INTERVAL="+t),"FREQ=WEEKLY"===e&&i&&i.length>0&&(s+=";BYDAY="+i.join(",")),"FREQ=MONTHLY"===e&&a&&(s+=";BYMONTHDAY="+a),"date"===n&&r?s+=";UNTIL="+ef.DateTime.fromISO(r).endOf("day").toUTC().toFormat("yyyyMMdd'T'HHmmss'Z'"):"count"===n&&o>0&&(s+=";COUNT="+o),s}_parseRrule(e){let t={freq:"",interval:1,byDay:[],byMonthDay:null,endType:"never",endDate:"",endCount:10};if(!e)return t;for(let i of e.split(";")){let[e,a]=i.split("="),n=(e||"").toUpperCase(),r=a||"";switch(n){case"FREQ":t.freq="FREQ="+r.toUpperCase();break;case"INTERVAL":t.interval=parseInt(r)||1;break;case"BYDAY":t.byDay=r.toUpperCase().split(",");break;case"BYMONTHDAY":t.byMonthDay=parseInt(r);break;case"UNTIL":{t.endType="date";let e=/z$/i.test(r),i=r.replace(/[zZ]$/,""),a=ef.DateTime.fromFormat(i,"yyyyMMdd'T'HHmmss",e?{zone:"utc"}:{});t.endDate=(a.isValid?a:ef.DateTime.fromISO(r)).toLocal().toFormat("yyyy-MM-dd");break}case"COUNT":t.endType="count",t.endCount=parseInt(r)||10}}return t}_getViewLabel(e){let t=e.toLowerCase();return this._language[t]??e}_getViewIcon(e){return({Today:"mdi:calendar-today",Tomorrow:"mdi:calendar-arrow-right",Week:"mdi:calendar-week",Biweek:"mdi:calendar-range",Month:"mdi:calendar-month"})[e]??"mdi:calendar"}_getCalendarDisplayName(e){if(e.name)return e.name;if(this.hass&&e.entity&&this.hass.states[e.entity]){let t=this.hass.states[e.entity].attributes?.friendly_name;if(t)return t}return e.entity?.replace("calendar.","")??""}_handleLegendClick(e){if(!this._legendToggle)return;let t=this._hideCalendars.indexOf(e.entity),i=[...this._hideCalendars];t>-1?i.splice(t,1):i.push(e.entity),this._hideCalendars=i}_handleNavigationOriginalClick(){this._navigationOffset=0,this._updateEvents()}_handleNavigationNextClick(e){this._navigationOffset++,this._updateEvents()}_handleNavigationPreviousClick(e){this._navigationOffset--,this._updateEvents()}_selectDay(e){(this._selectedDay?.date?.day!==e.date.day||this._selectedDay?.date?.month!==e.date.month||this._selectedDay?.date?.year!==e.date.year)&&(this._selectedDay=e,this.requestUpdate())}_handlePointerDown(e){e.isPrimary&&(this._touchStartX=e.clientX,this._touchStartY=e.clientY,this._touchPointerType=e.pointerType)}_handlePointerCancel(){this._touchStartX=void 0,this._touchStartY=void 0}_handlePointerUp(e){if(!e.isPrimary||void 0===this._touchStartX)return;let t=e.clientX-this._touchStartX,i=e.clientY-this._touchStartY,a=this._touchPointerType;if(this._touchStartX=void 0,this._touchStartY=void 0,this._swipeNavigation&&"mouse"!==a&&Math.abs(t)>=50&&Math.abs(t)>Math.abs(i)){t<0?this._navigationOffset++:this._navigationOffset--,this._updateEvents();return}if(this._numberOfDaysIsMonth&&"mouse"!==a){let t=e.target.closest?.(".day");if(t&&!t.classList.contains("header")&&!t.classList.contains("outside-month")){let e=parseInt(t.dataset.date),i=parseInt(t.dataset.month),a=parseInt(t.dataset.year);if(e&&this._days){let t=this._days.find(t=>!t.isOutsideMonth&&t.date.day===e&&t.date.month===i&&t.date.year===a);t&&this._selectDay(t)}}}}_handleWeatherClick(e){let t=new Event("hass-more-info",{bubbles:!0,composed:!0});t.detail={entityId:this._weather.entity},this.dispatchEvent(t),e.stopImmediatePropagation()}_getNumberOfDays(e){return this._numberOfDaysIsMonth&&(e=ef.DateTime.now().daysInMonth),e}_getStartDate(e){let t=ef.DateTime.now();0!==this._navigationOffset&&(t=this._numberOfDaysIsMonth?t.plus({months:this._navigationOffset}):t.plus({days:this._numberOfDays*this._navigationOffset}));let i=String(e??this._startingDay).toLowerCase().trim(),a=this._numberOfDaysIsMonth&&["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].includes(i);switch(a&&(t=t.startOf("month")),i){case"yesterday":t=t.minus({days:1});break;case"tomorrow":t=t.plus({days:1});break;case"sunday":a||(t=this._getWeekDayDate(t,7));break;case"monday":a||(t=this._getWeekDayDate(t,1));break;case"tuesday":a||(t=this._getWeekDayDate(t,2));break;case"wednesday":a||(t=this._getWeekDayDate(t,3));break;case"thursday":a||(t=this._getWeekDayDate(t,4));break;case"friday":a||(t=this._getWeekDayDate(t,5));break;case"saturday":a||(t=this._getWeekDayDate(t,6));break;case"month":t=t.startOf("month")}return 0===this._startingDayOffset||a||(t=t.plus({days:this._startingDayOffset})),this._hideWeekend&&t.weekday>=6&&(t=this._getStartDate("monday")),t.startOf("day")}_getWeekDayDate(e,t){let i=e.weekday;return i>t?e.minus({days:i-t}):i<t?e.minus({days:7-t+i}):e}_convertApiDate(e){let t=null;return e&&(e.dateTime?t=ef.DateTime.fromISO(e.dateTime):e.date&&(t=ef.DateTime.fromISO(e.date))),t}_isFullDay(e,t,i){return null!==e&&null!==t&&!(e.hour>0)&&!(e.minute>0)&&!(e.second>0)&&!(t.hour>0)&&!(t.minute>0)&&!(t.second>0)&&(i||1===Math.round(t.startOf("day").diff(e.startOf("day"),"days").days))}_isSameDay(e,t){return null===e&&null===t||null!==e&&null!==t&&e.day===t.day&&e.month===t.month&&e.year===t.year}_isToday(e){let t=ef.DateTime.now().startOf("day");return this._isSameDay(e,t)}_isTomorrow(e){let t=ef.DateTime.now().startOf("day").plus({days:1});return this._isSameDay(e,t)}_isYesterday(e){let t=ef.DateTime.now().startOf("day").minus({days:1});return this._isSameDay(e,t)}}var ng=s`
    ha-textfield,
    ha-select,
    ha-formfield,
    ha-expansion-panel,
    ha-button,
    ha-entity-picker,
    ha-icon-picker {
      margin: 8px 0;
    }

    .sk-field {
      display: flex;
      flex-direction: column;
      margin: 8px 0;
    }
    .sk-label {
      font-size: 0.8em;
      color: var(--secondary-text-color, #888);
      margin-bottom: 4px;
    }
    .sk-input {
      width: 100%;
      box-sizing: border-box;
      min-height: 42px;
      padding: 8px 10px;
      border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.2));
      border-radius: 6px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color, #212121);
      font-size: 1em;
      font-family: inherit;
    }
    .sk-input:focus {
      outline: none;
      border-color: var(--primary-color, #03a9f4);
    }

    .sk-swatches {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .sk-swatch {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      border: 2px solid transparent;
      padding: 0;
      cursor: pointer;
      box-shadow: 0 0 0 1px var(--divider-color, rgba(0, 0, 0, 0.2));
      transition: transform 0.1s ease;
    }
    .sk-swatch:hover {
      transform: scale(1.12);
    }
    .sk-swatch.selected {
      box-shadow: 0 0 0 2px var(--card-background-color, #fff),
        0 0 0 4px var(--primary-color, #03a9f4);
    }
    .sk-swatch-auto {
      background: var(--card-background-color, #fff);
      color: var(--secondary-text-color, #888);
      font-size: 0.8em;
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .sk-emoji-swatch {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      background: var(--card-background-color, #fff);
      font-size: 1.25em;
      line-height: 1;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .sk-day-picker {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
    }
    .sk-day-btn {
      min-width: 40px;
      padding: 6px 8px;
      border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.2));
      border-radius: 6px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color, #333);
      cursor: pointer;
      font-size: 0.85em;
    }
    .sk-day-btn.selected {
      background: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff);
      border-color: var(--primary-color, #03a9f4);
    }
`;class nw extends es{static styles=ng;connectedCallback(){super.connectedCallback(),this.loadCustomElements()}async loadCustomElements(){if(!(customElements.get("ha-textfield")&&customElements.get("ha-select")&&customElements.get("ha-list-item")&&customElements.get("ha-entity-picker"))){try{let e=window.loadCardHelpers?await window.loadCardHelpers():null;if(e){let t=await e.createCardElement({type:"entities",entities:[]});await t.constructor.getConfigElement()}else customElements.get("hui-entities-card")&&await customElements.get("hui-entities-card").getConfigElement()}catch(e){console.warn("Family Calendar: editor component preload failed",e)}this.requestUpdate()}}static get properties(){return{hass:{},_config:{state:!0}}}setConfig(e){this._config=e}render(){return this.hass&&this._config?P`
            <div style="display: flex; flex-direction: column">
                ${this.addExpansionPanel("General",P`
                        ${this.addSelectField("theme","Theme",[{value:"skylight",label:"Skylight"},{value:"homeassistant",label:"Home Assistant"},{value:"familial",label:"Familial"}],!0,"skylight")}
                        ${this.addHint("Visual style of the calendar card")}
                        ${this.addBooleanField("materialSymbols","Use Material Symbols icons")}
                        ${this.addHint('Requires the "Material Symbols" integration. When on, calendars use their Material Symbols icon and categories show their icon instead of the emoji (the emoji is still saved in the event title).')}
                        ${this.addTextField("title","Title")}
                        ${this.addHint("Card title displayed above the calendar")}
                        ${this.addBooleanField("showTitle","Show title",!0)}
                        ${this.addSelectField("locale","Locale",[{value:"en",label:"English"},{value:"fr",label:"Français"},{value:"de",label:"Deutsch"},{value:"es",label:"Español"},{value:"it",label:"Italiano"},{value:"nl",label:"Nederlands"},{value:"pt",label:"Português"}],!0)}
                        ${this.addHint("Language for dates, buttons and UI texts")}
                        ${this.addSelectField("defaultView","Default view",[{value:"Today",label:"Today"},{value:"Tomorrow",label:"Tomorrow"},{value:"Week",label:"Week"},{value:"Biweek",label:"Biweek"},{value:"Month",label:"Month"}],!0)}
                        ${this.addHint("View shown when the card loads")}
                        ${this.addSelectField("startingDay","Starting day",[{value:"today",label:"Today"},{value:"tomorrow",label:"Tomorrow"},{value:"yesterday",label:"Yesterday"},{value:"sunday",label:"Sunday"},{value:"monday",label:"Monday"},{value:"tuesday",label:"Tuesday"},{value:"wednesday",label:"Wednesday"},{value:"thursday",label:"Thursday"},{value:"friday",label:"Friday"},{value:"saturday",label:"Saturday"},{value:"month",label:"Month"}],!0)}
                        ${this.addHint("First day shown in the calendar")}
                        ${this.addBooleanField("showHeader","Show header",!0)}
                        ${this.addHint("Show the date/time/weather header at the top")}
                        ${this.addBooleanField("showHeaderDate","Show date in header",!0)}
                        ${this.addBooleanField("showHeaderClock","Show clock in header",!0)}
                        ${this.addEntityPickerField("defaultCalendar","Default calendar for event creation",["calendar"])}
                        ${this.addHint("Pre-selected calendar when creating a new event")}
                    `,!0)}
                ${this.addExpansionPanel("Calendars",P`
                        ${this.getConfigValue("calendars").map((e,t)=>P`
                                ${this.addExpansionPanel(`Calendar: ${e.name??e.entity}`,P`
                                        ${this.addEntityPickerField("calendars."+t+".entity","Entity",["calendar"])}
                                        ${this.addTextField("calendars."+t+".name","Name")}
                                        ${this.addHint("Custom display name (uses HA friendly name if empty)")}
                                        ${this.addColorField("calendars."+t+".color","Color")}
                                        ${this.addHint('Pick a colour, or "A" (Auto) to let the card assign one')}
                                        ${this.addIconPickerField("calendars."+t+".icon","Icon")}
                                        ${this.addIconPickerField("calendars."+t+".iconMaterial","Material Symbols icon")}
                                        ${this.addHint('Used instead of the icon above when "Use Material Symbols icons" is on (e.g. m3rf:home)')}
                                        ${this.addBooleanField("calendars."+t+".initiallyHidden","Initially hide calendar events")}
                                        ${this.addHint("Events hidden by default, toggle via filter buttons")}
                                        ${this.addBooleanField("calendars."+t+".allDayOnly","Info calendar (all-day only)")}
                                        ${this.addHint("Creates title-only all-day events (no time/duration), e.g. birthdays")}
                                        ${this.addEmojiField("calendars."+t+".titleEmoji","Title emoji")}
                                        ${this.addHint('Shown before every event title of this calendar (display only), e.g. 🎂. With "Use Material Symbols icons" on, the calendar\'s Material Symbols icon above is shown instead.')}
                                        ${t>0?this.addButton("Move up","mdi:arrow-up",()=>this._moveCalendar(t,-1)):""}
                                        ${t<this.getConfigValue("calendars").length-1?this.addButton("Move down","mdi:arrow-down",()=>this._moveCalendar(t,1)):""}
                                        ${t>0||t<this.getConfigValue("calendars").length-1?this.addHint("Reorder this calendar (affects the legend / filter buttons / event order)"):""}
                                        ${this.addButton("Remove calendar","mdi:trash-can",()=>{let e=JSON.parse(JSON.stringify(this._config));1===e.calendars.length?e.calendars=[]:(delete e.calendars[t],e.calendars=e.calendars.filter(Boolean)),this._config=e,this.dispatchConfigChangedEvent()})}
                                    `)}
                            `)}
                        ${this.addButton("Add calendar","mdi:plus",()=>{let e=this.getConfigValue("calendars").length;this.setConfigValue("calendars."+e,{})})}
                    `)}
                ${this.addExpansionPanel("Event categories",P`
                        ${this.addHint("Picking a category in the event form prepends its emoji to the event title. Expand a row below to change its icon or name, remove it, or add your own.")}
                        ${this._effectiveCategories().map((e,t)=>P`
                            ${this.addExpansionPanel(`${e&&e.emoji||""} ${e&&e.label||"Category "+(t+1)}`,P`
                                    ${this._renderEmojiPicker(e&&e.emoji,e=>this._writeCategories(i=>{i[t]||(i[t]={emoji:"",label:""}),i[t].emoji=e}),"Emoji (saved in the event title)")}
                                    <div class="sk-field">
                                        <label class="sk-label">Label</label>
                                        <input class="sk-input" type="text"
                                            .value="${e&&e.label||""}"
                                            @change="${e=>this._writeCategories(i=>{i[t]||(i[t]={emoji:"",label:""}),i[t].label=e.target.value})}" />
                                    </div>
                                    <ha-icon-picker
                                        .hass="${this.hass}"
                                        label="Material Symbols icon"
                                        .value="${e&&e.icon||""}"
                                        @value-changed="${e=>this._writeCategories(i=>{i[t]||(i[t]={emoji:"",label:""}),i[t].icon=e.detail.value})}"
                                    ></ha-icon-picker>
                                    ${this.addHint('Shown instead of the emoji when "Use Material Symbols icons" is on, e.g. m3rf:directions-run')}
                                    ${this.addButton("Remove category","mdi:trash-can",()=>this._writeCategories(e=>{e.splice(t,1)}))}
                                `)}
                        `)}
                        ${this.addButton("Add category","mdi:plus",()=>this._writeCategories(e=>{e.push({emoji:"",label:""})}))}
                        ${this.addButton("Reset to default categories","mdi:restore",()=>{let e=JSON.parse(JSON.stringify(this._config));e.eventCategories=this._defaultCategories(),this._config=e,this.dispatchConfigChangedEvent()})}
                    `)}
                ${this.addExpansionPanel("Days",P`
                        ${this.addBooleanField("showWeekDayText","Show week day text",!0)}
                        ${this.addHint("Display day names (Mon, Tue...) above columns")}
                        ${this.addBooleanField("hideWeekend","Hide weekend")}
                        ${this.addBooleanField("highlightWeekend","Highlight weekend")}
                        ${this.addHint("Tints the weekend day cells")}
                        ${this._renderWeekendDayPicker()}
                        ${this.addHint("Which days count as weekend (default Sat + Sun)")}
                        ${this.addColorField("weekendColor","Weekend color")}
                        ${this.addHint('Leave on "A" (Auto) for a shade that adapts to light/dark')}
                        ${this.addBooleanField("hideDaysWithoutEvents","Hide days without events except for today")}
                        ${this.addBooleanField("hideTodayWithoutEvents","Also hide today without events")}
                        ${this.addTextField("maxDayEvents","Maximum number of events per day (0 is no maximum)","number",0)}
                        ${this.addHint('Limit events per day, extra shown as "+X more"')}
                        ${this.addBooleanField("showNavigation","Show navigation")}
                        ${this.addHint("Show arrows to navigate between weeks/months")}
                        ${this.addBooleanField("swipeNavigation","Swipe to navigate (touch)",!0)}
                        ${this.addHint("On a touchscreen, swipe left/right to change period. Turn off to disable swiping.")}
                        ${this.addBooleanField("showLegend","Show calendar legend")}
                        ${this.addHint("Show the list of calendars with their colors")}
                        ${this.addBooleanField("legendToggle","Legend toggles calendar visibility")}
                        ${this.addHint("Click a legend entry to show/hide that calendar")}
                    `)}
                ${this.addExpansionPanel("Events",P`
                        ${this.addTextField("maxEvents","Maximum number of events (0 is no maximum)","number",0)}
                        ${this.addHint("Total event limit across all days")}
                        ${this.addBooleanField("hidePastEvents","Hide past events")}
                        ${this.addBooleanField("hideAllDayEvents","Hide all day events")}
                        ${this.addSelectField("multiDayMode","Multi day mode",[{value:"banner",label:"Banner (merged)"},{value:"default",label:"Default"},{value:"multiple",label:"Multiple"},{value:"single",label:"Single"}],!0,"banner")}
                        ${this.addHint("Banner: continuous strip across days (default). Others: repeated blocks or first day only")}
                        ${this.addBooleanField("showTime","Show time")}
                        ${this.addHint("Show start/end time in each event")}
                        ${this.addBooleanField("showEventTitle","Show title in overview",!0)}
                        ${this.addHint("Show event title in the calendar view")}
                        ${this.addBooleanField("showLocation","Show location in calendar",!0)}
                        ${this.addHint("Display event location in the calendar day view")}
                        ${this.addBooleanField("showLocationInForm","Show location in event forms",!0)}
                        ${this.addHint("Show location field with autocomplete in create/edit forms")}
                        ${this.addBooleanField("showDescription","Show description")}
                        ${this.addHint("Show the event description in the calendar view")}
                        ${this.addBooleanField("showDate","Show date in event details")}
                        ${this.addBooleanField("showCalendarName","Show calendar name in event details")}
                        ${this.addTextField("slotStartHour","Time picker — first hour","number",7)}
                        ${this.addTextField("slotEndHour","Time picker — last hour","number",22)}
                        ${this.addHint("Range of hours offered in the event time-slot picker (create/edit forms)")}
                    `)}
                ${this.addExpansionPanel("Weather",P`
                        ${this.addEntityPickerField("weather.entity","Weather entity",["weather"])}
                        ${this.addHint("Weather entity to use (auto-detected if empty)")}
                        ${this.addBooleanField("showCurrentWeather","Show current weather in header")}
                        ${this.addHint("Display current temperature and icon in the header")}
                        ${this.addBooleanField("showWeather","Show weather in calendar",!0)}
                        ${this.addHint("Display weather forecast in day columns")}
                        ${this.addBooleanField("weather.showCondition","Show condition icon")}
                        ${this.addBooleanField("weather.showTemperature","Show temperature")}
                        ${this.addBooleanField("weather.showLowTemperature","Show low temperature")}
                        ${this.addBooleanField("weather.roundTemperature","Round temperatures to nearest integer")}
                        ${this.addBooleanField("weather.useTwiceDaily","Use twice daily if entity does not support daily")}
                        ${this.addHint("Fallback for weather entities without daily forecast")}
                    `)}
                ${this.addExpansionPanel("Appearance",P`
                        ${this.addBooleanField("colorFullEvent","Color full event background",!0)}
                        ${this.addHint("Color entire event block with calendar color instead of left border only")}
                        ${this.addBooleanField("noCardBackground","No card background")}
                        ${this.addHint("Make the card background transparent")}
                        ${this.addBooleanField("compact","Compact mode")}
                        ${this.addHint("Reduce spacing and padding for smaller displays")}
                        ${this.addBooleanField("fillHeight","Fill available height")}
                        ${this.addHint("Stretch the day rows so the calendar fills the screen height (best in a panel / full-height view, e.g. a wall tablet)")}
                    `)}
                ${this.addExpansionPanel("Views",P`
                        <p>Select which view buttons are displayed. Leave empty for all views.</p>
                        ${this.addTextField("views","Views (comma separated: Today,Tomorrow,Week,Biweek,Month)")}
                        ${this.addHint('e.g. "Week,Month" to show only these two views')}
                    `)}
                ${this.addExpansionPanel("AI & Handwriting",P`
                        <p style="margin: 0 0 8px 0; font-weight: 500;">✍️ Handwriting recognition</p>
                        ${this.addBooleanField("handwriting","Enable handwriting input",!0)}
                        ${this.addHint("On a tablet, the create/edit dialog uses a handwriting canvas. Turn off to always use the typed (keyboard) dialog instead — useful without a stylus or to type entries.")}
                        ${this.addTextField("geminiApiKey","Google Gemini API key","password")}
                        ${this.addHint("Paste your key here to enable stylus handwriting in the quick-add area. Free key at aistudio.google.com/apikey")}
                        ${this.addTextField("geminiModel","Gemini model","text","gemini-2.5-flash")}
                        ${this.addTextField("claudeApiKey","Anthropic Claude API key (alternative)","password")}
                        ${this.addHint("Use Claude instead of Gemini. Key from console.anthropic.com")}
                        ${this.addTextField("claudeModel","Claude model","text","claude-opus-4-8")}
                        ${this.addHint("e.g. claude-haiku-4-5 for lower cost/latency")}
                        ${this.addSelectField("aiProvider","Handwriting provider",[{value:"gemini",label:"Google Gemini"},{value:"claude",label:"Anthropic Claude"}],!0)}
                        ${this.addHint("Which model reads the handwriting (auto when only one key is set; Claude preferred if both)")}
                        <p style="margin: 16px 0 8px 0; font-weight: 500;">⚡ Text quick add (optional)</p>
                        ${this.addBooleanField("aiQuickAdd","Enable AI quick add")}
                        ${this.addHint('Adds an "Analyze with AI" button that turns a typed sentence into title + time via a Home Assistant ai_task entity. Not needed for handwriting — leave off and the entity below empty if you only want the pen.')}
                        ${this.addEntityPickerField("aiTaskEntity","AI Task entity",["ai_task"])}
                        ${this.addHint("ai_task entity for the text quick add (auto-detected if empty)")}
                    `)}
                ${this.addExpansionPanel("Location autocomplete",P`
                        ${this.addTextField("googleApiKey","Google Places API key","password")}
                        ${this.addHint("Enable location autocomplete in event forms. Without key, location is a simple text field.")}
                    `)}
            </div>
        `:P``}addHint(e){return P`<p style="color: var(--secondary-text-color); font-size: 0.8em; margin: -4px 0 8px 0; padding: 0;">${e}</p>`}addTextField(e,t,i,a){return P`
            <div class="sk-field">
                <label class="sk-label">${t??e}</label>
                <input
                    class="sk-input"
                    name="${e}"
                    type="${i??"text"}"
                    .value="${String(this.getConfigValue(e,a)??"")}"
                    @change="${this._valueChanged}"
                />
            </div>
        `}addEntityPickerField(e,t,i,a){return P`
            <ha-entity-picker
                .hass="${this.hass}"
                name="${e}"
                label="${t??e}"
                .value="${this.getConfigValue(e,a)}"
                .includeDomains="${i}"
                allow-custom-entity
                @value-changed="${this._valueChanged}"
            ></ha-entity-picker>
        `}addIconPickerField(e,t,i){return P`
            <ha-icon-picker
                .hass="${this.hass}"
                name="${e}"
                label="${t??e}"
                .value="${this.getConfigValue(e,i)}"
                @value-changed="${this._valueChanged}"
            ></ha-icon-picker>
        `}addSelectField(e,t,i,a,n){return P`
            <ha-select
                naturalMenuWidth
                name="${e}"
                label="${t??e}"
                .value="${this.getConfigValue(e,n)}"
                .clearable="${a??!1}"
                @selected="${this._valueChanged}"
                @closed="${e=>e.stopPropagation()}"
            >
                ${(i??[]).map(e=>P`
                    <ha-list-item value="${e.value}">${e.label}</ha-list-item>
                `)}
            </ha-select>
        `}addBooleanField(e,t,i){return P`
            <ha-formfield label="${t??e}">
                <ha-switch
                    name="${e}"
                    .checked="${!!this.getConfigValue(e,i)}"
                    @change="${this._valueChanged}"
                ></ha-switch>
            </ha-formfield>
        `}addColorField(e,t,i){let a=["#D50000","#E67C73","#F4511E","#F6BF26","#33B679","#0B8043","#039BE5","#3F51B5","#7986CB","#8E24AA","#E91E63","#616161"],n=String(this.getConfigValue(e,i)??"").trim(),r=n.toLowerCase(),o=a.some(e=>e.toLowerCase()===r);return P`
            <div class="sk-field">
                <label class="sk-label">${t??e}</label>
                <div class="sk-swatches">
                    <button type="button" class="sk-swatch sk-swatch-auto ${""===n?"selected":""}"
                        title="Auto" @click="${()=>this.setConfigValue(e,"")}">A</button>
                    ${a.map(t=>P`
                        <button type="button"
                            class="sk-swatch ${r===t.toLowerCase()?"selected":""}"
                            style="background:${t}" title="${t}"
                            @click="${()=>this.setConfigValue(e,t)}"></button>
                    `)}
                    ${""!==n&&!o?P`
                        <button type="button" class="sk-swatch selected"
                            style="background:${n}" title="${n}"></button>
                    `:""}
                </div>
            </div>
        `}_emojiPalette(){return["🏃","⚽","🏀","🎾","🏊","🚴","⛷️","🏋️","🩺","💊","🦷","🏥","🧠","🩹","🎓","📚","✏️","🎒","🔬","💼","🖥️","📞","📅","⏰","✉️","🍽️","🍕","☕","🍷","🎂","🍔","🚐","✈️","🏖️","🏕️","🚗","🚂","⛵","🎉","🎁","🎵","🎬","🎨","🎮","🎤","🛒","🧹","🧺","🔧","🏠","🐶","🐱","🌳","❤️","⭐","👶","💆","💇","🙏","🎯","📷"]}_renderEmojiPicker(e,t,i){let a=this._emojiPalette(),n=String(e??"").trim(),r=a.includes(n);return P`
            <div class="sk-field">
                ${i?P`<label class="sk-label">${i}</label>`:""}
                <div class="sk-swatches">
                    ${a.map(e=>P`
                        <button type="button"
                            class="sk-swatch sk-emoji-swatch ${n===e?"selected":""}"
                            title="${e}" @click="${()=>t(e)}">${e}</button>
                    `)}
                    ${""!==n&&!r?P`
                        <button type="button" class="sk-swatch sk-emoji-swatch selected" title="${n}">${n}</button>
                    `:""}
                </div>
                <input class="sk-input" type="text" placeholder="Custom emoji"
                    .value="${n}"
                    @change="${e=>t(e.target.value)}" />
            </div>
        `}addEmojiField(e,t,i){let a=this.getConfigValue(e,i);return this._renderEmojiPicker(a,t=>this.setConfigValue(e,t),t??e)}_defaultCategories(){return[{emoji:"🏃",label:"Sport",icon:"m3rf:directions-run"},{emoji:"🩺",label:"Médical",icon:"m3rf:stethoscope"},{emoji:"🎓",label:"École",icon:"m3rf:school"},{emoji:"💼",label:"Travail",icon:"m3rf:work"},{emoji:"🍽️",label:"Repas",icon:"m3rf:restaurant"},{emoji:"🚐",label:"Vacances",icon:"m3rf:luggage"},{emoji:"🎉",label:"Fête",icon:"m3rf:celebration"},{emoji:"🛒",label:"Courses",icon:"m3rf:shopping-cart"}]}_effectiveCategories(){let e=this._config&&this._config.eventCategories;return Array.isArray(e)?e:this._defaultCategories()}_writeCategories(e){let t=JSON.parse(JSON.stringify(this._config)),i=Array.isArray(t.eventCategories)?t.eventCategories:JSON.parse(JSON.stringify(this._defaultCategories()));e(i),t.eventCategories=i,this._config=t,this.dispatchConfigChangedEvent()}addExpansionPanel(e,t,i){return P`
            <ha-expansion-panel
                header="${e}"
                .expanded="${i??!1}"
                outlined="true"
            >
                <div style="display: flex; flex-direction: column">
                    ${t}
                </div>
            </ha-expansion-panel>
        `}addButton(e,t,i){return P`
            <ha-button
                @click="${i}"
            >
                <ha-icon icon="${t}"></ha-icon>
                ${e}
            </ha-button>
        `}_valueChanged(e){let t,i=e.target;if(!i||!i.attributes.name)return;let a=i.attributes.name.value;if(t="HA-SWITCH"===i.tagName?i.checked:e.detail&&void 0!==e.detail.value?e.detail.value:i.value??"",("HA-TEXTFIELD"===i.tagName||"INPUT"===i.tagName)&&"number"===i.getAttribute("type")&&""!==t&&null!=t){let e=Number(t);Number.isNaN(e)||(t=e)}this.getConfigValue(a)!==t&&this.setConfigValue(a,t)}getConfigValue(e,t){return this._config?(t=t??"",e.split(".").reduce((e,i)=>e[i]??t,this._config)??t):""}_renderWeekendDayPicker(){let e=this._config&&this._config.locale||"en",t=this._config&&this._config.weekendDays,i=Array.isArray(t)&&t.length?t.map(e=>parseInt(e)):[6,7],a=new Intl.DateTimeFormat(e,{weekday:"short",timeZone:"UTC"}),n=[1,2,3,4,5,6,7].map(e=>({wd:e,label:a.format(new Date(Date.UTC(2024,0,e)))}));return P`
            <div class="sk-field">
                <label class="sk-label">Weekend days</label>
                <div class="sk-day-picker">
                    ${n.map(e=>P`
                        <button type="button"
                            class="sk-day-btn ${i.includes(e.wd)?"selected":""}"
                            @click="${()=>this._toggleWeekendDay(e.wd)}">${e.label}</button>
                    `)}
                </div>
            </div>
        `}_toggleWeekendDay(e){let t=JSON.parse(JSON.stringify(this._config)),i=Array.isArray(t.weekendDays)&&t.weekendDays.length?t.weekendDays.map(e=>parseInt(e)):[6,7];t.weekendDays=(i.includes(e)?i.filter(t=>t!==e):[...i,e]).sort((e,t)=>e-t),this._config=t,this.dispatchConfigChangedEvent()}_moveCalendar(e,t){let i=JSON.parse(JSON.stringify(this._config)),a=i.calendars,n=e+t;if(!Array.isArray(a)||n<0||n>=a.length)return;let r=a[e];a[e]=a[n],a[n]=r,this._config=i,this.dispatchConfigChangedEvent()}setConfigValue(e,t){let i=JSON.parse(JSON.stringify(this._config)),a=e.split("."),n=a.pop(),r=a.reduce((e,t)=>(e[t]||(e[t]={}),e[t]),i);""===t?delete r[n]:r[n]=t,this._config=i,this.dispatchConfigChangedEvent()}dispatchConfigChangedEvent(){let e=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(e)}}(customElements.get("family-calendar-card")||customElements.get("skylight-family-calendar-card"))&&console.warn(`[Family Calendar Card] A duplicate/older copy of this card is already loaded \u2014 you likely have a leftover "ha-skylight-family-calendar-card" resource from before the repo rename. Remove it in Settings \u2192 Dashboards \u2192 (\u22EE) Resources, then reload. (this build: v${em.version})`),customElements.get("family-calendar-card")||customElements.define("family-calendar-card",ny),customElements.get("family-calendar-card-editor")||customElements.define("family-calendar-card-editor",nw),customElements.get("skylight-family-calendar-card")||customElements.define("skylight-family-calendar-card",class extends ny{}),customElements.get("skylight-family-calendar-card-editor")||customElements.define("skylight-family-calendar-card-editor",class extends nw{}),window.customCards=window.customCards||[],window.customCards.push({type:"family-calendar-card",name:"Family Calendar Card",description:"A family calendar card with weather, event management, and touchscreen-friendly UI.",documentationURL:"https://github.com/tienou/family-calendar-card",getEntitySuggestion:(e,t)=>"calendar"!==t.split(".")[0]?null:{config:{type:"custom:family-calendar-card",calendars:[{entity:t}]}}}),console.info(`%c FAMILY-CALENDAR %c v${em.version} `,"color: white; background: #4A90E2; font-weight: 700;","color: #4A90E2; background: white; font-weight: 700;");
//# sourceMappingURL=skylight-family-calendar-card.js.map
