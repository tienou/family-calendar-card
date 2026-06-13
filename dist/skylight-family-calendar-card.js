function e(e){return e&&e.__esModule?e.default:e}let t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),a=new WeakMap;class r{constructor(e,t,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(i&&void 0===e){let i=void 0!==t&&1===t.length;i&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&a.set(t,e))}return e}toString(){return this.cssText}}let o=(e,...t)=>new r(1===e.length?e[0]:t.reduce((t,i,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[n+1],e[0]),e,n),s=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t,i="";for(let t of e.cssRules)i+=t.cssText;return new r("string"==typeof(t=i)?t:t+"",void 0,n)})(e):e,{is:l,defineProperty:d,getOwnPropertyDescriptor:c,getOwnPropertyNames:u,getOwnPropertySymbols:h,getPrototypeOf:m}=Object,f=globalThis,v=f.trustedTypes,y=v?v.emptyScript:"",p=f.reactiveElementPolyfillSupport,g={toAttribute(e,t){switch(t){case Boolean:e=e?y:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},w=(e,t)=>!l(e,t),b={attribute:!0,type:String,converter:g,reflect:!1,useDefault:!1,hasChanged:w};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class A extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=b){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),n=this.getPropertyDescriptor(e,i,t);void 0!==n&&d(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){let{get:n,set:a}=c(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:n,set(t){let r=n?.call(this);a?.call(this,t),this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??b}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;let e=m(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){let e=this.properties;for(let t of[...u(e),...h(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,i]of t)this.elementProperties.set(e,i)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let i of new Set(e.flat(1/0).reverse()))t.unshift(s(i));else void 0!==e&&t.push(s(e));return t}static _$Eu(e,t){let i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,n)=>{if(i)e.adoptedStyleSheets=n.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let i of n){let n=document.createElement("style"),a=t.litNonce;void 0!==a&&n.setAttribute("nonce",a),n.textContent=i.cssText,e.appendChild(n)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){let i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(void 0!==n&&!0===i.reflect){let a=(void 0!==i.converter?.toAttribute?i.converter:g).toAttribute(t,i.type);this._$Em=e,null==a?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}_$AK(e,t){let i=this.constructor,n=i._$Eh.get(e);if(void 0!==n&&this._$Em!==n){let e=i.getPropertyOptions(n),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:g;this._$Em=n;let r=a.fromAttribute(t,e.type);this[n]=r??this._$Ej?.get(n)??r,this._$Em=null}}requestUpdate(e,t,i,n=!1,a){if(void 0!==e){let r=this.constructor;if(!1===n&&(a=this[e]),!(((i??=r.getPropertyOptions(e)).hasChanged??w)(a,t)||i.useDefault&&i.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:n,wrapped:a},r){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),!0!==a||void 0!==r)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===n&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,i]of e){let{wrapped:e}=i,n=this[t];!0!==e||this._$AL.has(t)||void 0===n||this.C(t,void 0,i,n)}}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A.elementProperties=new Map,A.finalized=new Map,p?.({ReactiveElement:A}),(f.reactiveElementVersions??=[]).push("2.1.2");let k=globalThis,D=e=>e,F=k.trustedTypes,E=F?F.createPolicy("lit-html",{createHTML:e=>e}):void 0,_="$lit$",x=`lit$${Math.random().toFixed(9).slice(2)}$`,T="?"+x,S=`<${T}>`,C=document,M=()=>C.createComment(""),O=e=>null===e||"object"!=typeof e&&"function"!=typeof e,B=Array.isArray,N="[ 	\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,H=/>/g,z=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,$=/"/g,V=/^(?:script|style|textarea|title)$/i,W=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),P=W(1),U=(W(2),W(3),Symbol.for("lit-noChange")),j=Symbol.for("lit-nothing"),Q=new WeakMap,Y=C.createTreeWalker(C,129);function J(e,t){if(!B(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(t):t}class q{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let a=0,r=0,o=e.length-1,s=this.parts,[l,d]=((e,t)=>{let i=e.length-1,n=[],a,r=2===t?"<svg>":3===t?"<math>":"",o=I;for(let t=0;t<i;t++){let i=e[t],s,l,d=-1,c=0;for(;c<i.length&&(o.lastIndex=c,null!==(l=o.exec(i)));)c=o.lastIndex,o===I?"!--"===l[1]?o=L:void 0!==l[1]?o=H:void 0!==l[2]?(V.test(l[2])&&(a=RegExp("</"+l[2],"g")),o=z):void 0!==l[3]&&(o=z):o===z?">"===l[0]?(o=a??I,d=-1):void 0===l[1]?d=-2:(d=o.lastIndex-l[2].length,s=l[1],o=void 0===l[3]?z:'"'===l[3]?$:R):o===$||o===R?o=z:o===L||o===H?o=I:(o=z,a=void 0);let u=o===z&&e[t+1].startsWith("/>")?" ":"";r+=o===I?i+S:d>=0?(n.push(s),i.slice(0,d)+_+i.slice(d)+x+u):i+x+(-2===d?t:u)}return[J(e,r+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),n]})(e,t);if(this.el=q.createElement(l,i),Y.currentNode=this.el.content,2===t||3===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=Y.nextNode())&&s.length<o;){if(1===n.nodeType){if(n.hasAttributes())for(let e of n.getAttributeNames())if(e.endsWith(_)){let t=d[r++],i=n.getAttribute(e).split(x),o=/([.?@])?(.*)/.exec(t);s.push({type:1,index:a,name:o[2],strings:i,ctor:"."===o[1]?ee:"?"===o[1]?et:"@"===o[1]?ei:X}),n.removeAttribute(e)}else e.startsWith(x)&&(s.push({type:6,index:a}),n.removeAttribute(e));if(V.test(n.tagName)){let e=n.textContent.split(x),t=e.length-1;if(t>0){n.textContent=F?F.emptyScript:"";for(let i=0;i<t;i++)n.append(e[i],M()),Y.nextNode(),s.push({type:2,index:++a});n.append(e[t],M())}}}else if(8===n.nodeType)if(n.data===T)s.push({type:2,index:a});else{let e=-1;for(;-1!==(e=n.data.indexOf(x,e+1));)s.push({type:7,index:a}),e+=x.length-1}a++}}static createElement(e,t){let i=C.createElement("template");return i.innerHTML=e,i}}function Z(e,t,i=e,n){if(t===U)return t;let a=void 0!==n?i._$Co?.[n]:i._$Cl,r=O(t)?void 0:t._$litDirective$;return a?.constructor!==r&&(a?._$AO?.(!1),void 0===r?a=void 0:(a=new r(e))._$AT(e,i,n),void 0!==n?(i._$Co??=[])[n]=a:i._$Cl=a),void 0!==a&&(t=Z(e,a._$AS(e,t.values),a,n)),t}class K{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,n=(e?.creationScope??C).importNode(t,!0);Y.currentNode=n;let a=Y.nextNode(),r=0,o=0,s=i[0];for(;void 0!==s;){if(r===s.index){let t;2===s.type?t=new G(a,a.nextSibling,this,e):1===s.type?t=new s.ctor(a,s.name,s.strings,this,e):6===s.type&&(t=new en(a,this,e)),this._$AV.push(t),s=i[++o]}r!==s?.index&&(a=Y.nextNode(),r++)}return Y.currentNode=C,n}p(e){let t=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class G{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,n){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){let i;O(e=Z(this,e,t))?e===j||null==e||""===e?(this._$AH!==j&&this._$AR(),this._$AH=j):e!==this._$AH&&e!==U&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):B(i=e)||"function"==typeof i?.[Symbol.iterator]?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==j&&O(this._$AH)?this._$AA.nextSibling.data=e:this.T(C.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,n="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=q.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(t);else{let e=new K(n,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=Q.get(e.strings);return void 0===t&&Q.set(e.strings,t=new q(e)),t}k(e){B(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,n=0;for(let a of e)n===t.length?t.push(i=new G(this.O(M()),this.O(M()),this,this.options)):i=t[n],i._$AI(a),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=D(e).nextSibling;D(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,a){this.type=1,this._$AH=j,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}_$AI(e,t=this,i,n){let a=this.strings,r=!1;if(void 0===a)(r=!O(e=Z(this,e,t,0))||e!==this._$AH&&e!==U)&&(this._$AH=e);else{let n,o,s=e;for(e=a[0],n=0;n<a.length-1;n++)(o=Z(this,s[i+n],t,n))===U&&(o=this._$AH[n]),r||=!O(o)||o!==this._$AH[n],o===j?e=j:e!==j&&(e+=(o??"")+a[n+1]),this._$AH[n]=o}r&&!n&&this.j(e)}j(e){e===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ee extends X{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===j?void 0:e}}class et extends X{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==j)}}class ei extends X{constructor(e,t,i,n,a){super(e,t,i,n,a),this.type=5}_$AI(e,t=this){if((e=Z(this,e,t,0)??j)===U)return;let i=this._$AH,n=e===j&&i!==j||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,a=e!==j&&(i===j||n);n&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class en{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}}let ea=k.litHtmlPolyfillSupport;ea?.(q,G),(k.litHtmlVersions??=[]).push("3.3.2");let er=globalThis;class eo extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{let n=i?.renderBefore??t,a=n._$litPart$;if(void 0===a){let e=i?.renderBefore??null;n._$litPart$=a=new G(t.insertBefore(M(),e),e,void 0,i??{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return U}}eo._$litElement$=!0,eo.finalized=!0,er.litElementHydrateSupport?.({LitElement:eo});let es=er.litElementPolyfillSupport;es?.({LitElement:eo}),(er.litElementVersions??=[]).push("4.2.2");class el{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}class ed extends el{constructor(e){if(super(e),this.it=j,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===j||null==e)return this._t=void 0,this.it=e;if(e===U)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}ed.directiveName="unsafeHTML",ed.resultType=1;let ec=(...e)=>({_$litDirective$:ed,values:e});var eu,eh={};function em(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(n.key),n)}}function ef(e,t,i){return t&&em(e.prototype,t),i&&em(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function ev(){return(ev=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}function ey(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,eg(e,t)}function ep(e){return(ep=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function eg(e,t){return(eg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function ew(e,t,i){return(ew=!function(){if("u"<typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}()?function(e,t,i){var n=[null];n.push.apply(n,t);var a=new(Function.bind.apply(e,n));return i&&eg(a,i.prototype),a}:Reflect.construct.bind()).apply(null,arguments)}function eb(e){var t="function"==typeof Map?new Map:void 0;return(eb=function(e){if(null===e||-1===Function.toString.call(e).indexOf("[native code]"))return e;if("function"!=typeof e)throw TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,i)}function i(){return ew(e,arguments,ep(this).constructor)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),eg(i,e)})(e)}function eA(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}function ek(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=Array(t);i<t;i++)n[i]=e[i];return n}function eD(e,t){var i="u">typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(i)return(i=i.call(e)).next.bind(i);if(Array.isArray(e)||(i=function(e){if(e){if("string"==typeof e)return ek(e,void 0);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ek(e,void 0)}}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(eh,"__esModule",{value:!0});var eF=function(e){function t(){return e.apply(this,arguments)||this}return ey(t,e),t}(eb(Error)),eE=function(e){function t(t){return e.call(this,"Invalid DateTime: "+t.toMessage())||this}return ey(t,e),t}(eF),e_=function(e){function t(t){return e.call(this,"Invalid Interval: "+t.toMessage())||this}return ey(t,e),t}(eF),ex=function(e){function t(t){return e.call(this,"Invalid Duration: "+t.toMessage())||this}return ey(t,e),t}(eF),eT=function(e){function t(){return e.apply(this,arguments)||this}return ey(t,e),t}(eF),eS=function(e){function t(t){return e.call(this,"Invalid unit "+t)||this}return ey(t,e),t}(eF),eC=function(e){function t(){return e.apply(this,arguments)||this}return ey(t,e),t}(eF),eM=function(e){function t(){return e.call(this,"Zone is an abstract class")||this}return ey(t,e),t}(eF),eO="numeric",eB="short",eN="long",eI={year:eO,month:eO,day:eO},eL={year:eO,month:eB,day:eO},eH={year:eO,month:eB,day:eO,weekday:eB},ez={year:eO,month:eN,day:eO},eR={year:eO,month:eN,day:eO,weekday:eN},e$={hour:eO,minute:eO},eV={hour:eO,minute:eO,second:eO},eW={hour:eO,minute:eO,second:eO,timeZoneName:eB},eP={hour:eO,minute:eO,second:eO,timeZoneName:eN},eU={hour:eO,minute:eO,hourCycle:"h23"},ej={hour:eO,minute:eO,second:eO,hourCycle:"h23"},eQ={hour:eO,minute:eO,second:eO,hourCycle:"h23",timeZoneName:eB},eY={hour:eO,minute:eO,second:eO,hourCycle:"h23",timeZoneName:eN},eJ={year:eO,month:eO,day:eO,hour:eO,minute:eO},eq={year:eO,month:eO,day:eO,hour:eO,minute:eO,second:eO},eZ={year:eO,month:eB,day:eO,hour:eO,minute:eO},eK={year:eO,month:eB,day:eO,hour:eO,minute:eO,second:eO},eG={year:eO,month:eB,day:eO,weekday:eB,hour:eO,minute:eO},eX={year:eO,month:eN,day:eO,hour:eO,minute:eO,timeZoneName:eB},e0={year:eO,month:eN,day:eO,hour:eO,minute:eO,second:eO,timeZoneName:eB},e2={year:eO,month:eN,day:eO,weekday:eN,hour:eO,minute:eO,timeZoneName:eN},e1={year:eO,month:eN,day:eO,weekday:eN,hour:eO,minute:eO,second:eO,timeZoneName:eN},e3=function(){function e(){}var t=e.prototype;return t.offsetName=function(e,t){throw new eM},t.formatOffset=function(e,t){throw new eM},t.offset=function(e){throw new eM},t.equals=function(e){throw new eM},ef(e,[{key:"type",get:function(){throw new eM}},{key:"name",get:function(){throw new eM}},{key:"ianaName",get:function(){return this.name}},{key:"isUniversal",get:function(){throw new eM}},{key:"isValid",get:function(){throw new eM}}]),e}(),e6=null,e4=function(e){function t(){return e.apply(this,arguments)||this}ey(t,e);var i=t.prototype;return i.offsetName=function(e,t){return is(e,t.format,t.locale)},i.formatOffset=function(e,t){return iu(this.offset(e),t)},i.offset=function(e){return-new Date(e).getTimezoneOffset()},i.equals=function(e){return"system"===e.type},ef(t,[{key:"type",get:function(){return"system"}},{key:"name",get:function(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}},{key:"isUniversal",get:function(){return!1}},{key:"isValid",get:function(){return!0}}],[{key:"instance",get:function(){return null===e6&&(e6=new t),e6}}]),t}(e3),e8=new Map,e5={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6},e9=new Map,e7=function(e){function t(i){var n;return(n=e.call(this)||this).zoneName=i,n.valid=t.isValidZone(i),n}ey(t,e),t.create=function(e){var i=e9.get(e);return void 0===i&&e9.set(e,i=new t(e)),i},t.resetCache=function(){e9.clear(),e8.clear()},t.isValidSpecifier=function(e){return this.isValidZone(e)},t.isValidZone=function(e){if(!e)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:e}).format(),!0}catch(e){return!1}};var i=t.prototype;return i.offsetName=function(e,t){return is(e,t.format,t.locale,this.name)},i.formatOffset=function(e,t){return iu(this.offset(e),t)},i.offset=function(e){if(!this.valid)return NaN;var t,i,n,a,r,o,s=new Date(e);if(isNaN(s))return NaN;var l=(t=this.name,void 0===(i=e8.get(t))&&(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),e8.set(t,i)),i),d=l.formatToParts?function(e,t){for(var i=e.formatToParts(t),n=[],a=0;a<i.length;a++){var r=i[a],o=r.type,s=r.value,l=e5[o];"era"===o?n[l]=s:tq(l)||(n[l]=parseInt(s,10))}return n}(l,s):(n=l.format(s).replace(/\u200E/g,""),r=(a=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n))[1],o=a[2],[a[3],r,o,a[4],a[5],a[6],a[7]]),c=d[0],u=d[1],h=d[2],m=d[3],f=d[4],v=d[5],y=d[6];"BC"===m&&(c=-Math.abs(c)+1);var p=ii({year:c,month:u,day:h,hour:24===f?0:f,minute:v,second:y,millisecond:0}),g=+s,w=g%1e3;return(p-(g-=w>=0?w:1e3+w))/6e4},i.equals=function(e){return"iana"===e.type&&e.name===this.name},ef(t,[{key:"type",get:function(){return"iana"}},{key:"name",get:function(){return this.zoneName}},{key:"isUniversal",get:function(){return!1}},{key:"isValid",get:function(){return this.valid}}]),t}(e3),te=["base"],tt=["padTo","floor"],ti={},tn=new Map;function ta(e,t){void 0===t&&(t={});var i=JSON.stringify([e,t]),n=tn.get(i);return void 0===n&&(n=new Intl.DateTimeFormat(e,t),tn.set(i,n)),n}var tr=new Map,to=new Map,ts=null,tl=new Map;function td(e){var t=tl.get(e);return void 0===t&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),tl.set(e,t)),t}var tc=new Map;function tu(e,t,i,n){var a=e.listingMode();return"error"===a?null:"en"===a?i(t):n(t)}var th=function(){function e(e,t,i){this.padTo=i.padTo||0,this.floor=i.floor||!1,i.padTo,i.floor;var n=eA(i,tt);if(!t||Object.keys(n).length>0){var a,r,o,s=ev({useGrouping:!1},i);i.padTo>0&&(s.minimumIntegerDigits=i.padTo),this.inf=(void 0===(a=s)&&(a={}),r=JSON.stringify([e,a]),void 0===(o=tr.get(r))&&(o=new Intl.NumberFormat(e,a),tr.set(r,o)),o)}}return e.prototype.format=function(e){if(!this.inf)return t6(this.floor?Math.floor(e):t9(e,3),this.padTo);var t=this.floor?Math.floor(e):e;return this.inf.format(t)},e}(),tm=function(){function e(e,t,i){this.opts=i,this.originalZone=void 0;var n=void 0;if(this.opts.timeZone)this.dt=e;else if("fixed"===e.zone.type){var a=-1*(e.offset/60),r=a>=0?"Etc/GMT+"+a:"Etc/GMT"+a;0!==e.offset&&e7.create(r).valid?(n=r,this.dt=e):(n="UTC",this.dt=0===e.offset?e:e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone)}else"system"===e.zone.type?this.dt=e:"iana"===e.zone.type?(this.dt=e,n=e.zone.name):(n="UTC",this.dt=e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone);var o=ev({},this.opts);o.timeZone=o.timeZone||n,this.dtf=ta(t,o)}var t=e.prototype;return t.format=function(){return this.originalZone?this.formatToParts().map(function(e){return e.value}).join(""):this.dtf.format(this.dt.toJSDate())},t.formatToParts=function(){var e=this,t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(function(t){if("timeZoneName"!==t.type)return t;var i=e.originalZone.offsetName(e.dt.ts,{locale:e.dt.locale,format:e.opts.timeZoneName});return ev({},t,{value:i})}):t},t.resolvedOptions=function(){return this.dtf.resolvedOptions()},e}(),tf=function(){function e(e,t,i){var n,a,r,o;this.opts=ev({style:"long"},i),!t&&tG()&&(this.rtf=(void 0===(n=i)&&(n={}),(a=n).base,r=JSON.stringify([e,eA(a,te)]),void 0===(o=to.get(r))&&(o=new Intl.RelativeTimeFormat(e,n),to.set(r,o)),o))}var t=e.prototype;return t.format=function(e,t){return this.rtf?this.rtf.format(e,t):function(e,t,i,n){void 0===i&&(i="always"),void 0===n&&(n=!1);var a={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},r=-1===["hours","minutes","seconds"].indexOf(e);if("auto"===i&&r){var o="days"===e;switch(t){case 1:return o?"tomorrow":"next "+a[e][0];case -1:return o?"yesterday":"last "+a[e][0];case 0:return o?"today":"this "+a[e][0]}}var s=Object.is(t,-0)||t<0,l=Math.abs(t),d=1===l,c=a[e],u=n?d?c[1]:c[2]||c[1]:d?a[e][0]:e;return s?l+" "+u+" ago":"in "+l+" "+u}(t,e,this.opts.numeric,"long"!==this.opts.style)},t.formatToParts=function(e,t){return this.rtf?this.rtf.formatToParts(e,t):[]},e}(),tv={firstDay:1,minimalDays:4,weekend:[6,7]},ty=function(){function e(e,t,i,n,a){var r,o,s,l=function(e){var t=e.indexOf("-x-");-1!==t&&(e=e.substring(0,t));var i=e.indexOf("-u-");if(-1===i)return[e];try{n=ta(e).resolvedOptions(),a=e}catch(t){var n,a,r=e.substring(0,i);n=ta(r).resolvedOptions(),a=r}var o=n;return[a,o.numberingSystem,o.calendar]}(e),d=l[0],c=l[1],u=l[2];this.locale=d,this.numberingSystem=t||c||null,this.outputCalendar=i||u||null,this.weekSettings=n,this.intl=(r=this.locale,o=this.numberingSystem,((s=this.outputCalendar)||o)&&(r.includes("-u-")||(r+="-u"),s&&(r+="-ca-"+s),o&&(r+="-nu-"+o)),r),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=a,this.fastNumbersCached=null}e.fromOpts=function(t){return e.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)},e.create=function(t,i,n,a,r){void 0===r&&(r=!1);var o=t||tN.defaultLocale;return new e(o||(r?"en-US":ts||(ts=new Intl.DateTimeFormat().resolvedOptions().locale)),i||tN.defaultNumberingSystem,n||tN.defaultOutputCalendar,t1(a)||tN.defaultWeekSettings,o)},e.resetCache=function(){ts=null,tn.clear(),tr.clear(),to.clear(),tl.clear(),tc.clear()},e.fromObject=function(t){var i=void 0===t?{}:t,n=i.locale,a=i.numberingSystem,r=i.outputCalendar,o=i.weekSettings;return e.create(n,a,r,o)};var t=e.prototype;return t.listingMode=function(){var e=this.isEnglish(),t=(null===this.numberingSystem||"latn"===this.numberingSystem)&&(null===this.outputCalendar||"gregory"===this.outputCalendar);return e&&t?"en":"intl"},t.clone=function(t){return t&&0!==Object.getOwnPropertyNames(t).length?e.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,t1(t.weekSettings)||this.weekSettings,t.defaultToEN||!1):this},t.redefaultToEN=function(e){return void 0===e&&(e={}),this.clone(ev({},e,{defaultToEN:!0}))},t.redefaultToSystem=function(e){return void 0===e&&(e={}),this.clone(ev({},e,{defaultToEN:!1}))},t.months=function(e,t){var i=this;return void 0===t&&(t=!1),tu(this,e,ip,function(){var n="ja"===i.intl||i.intl.startsWith("ja-"),a=(t&=!n)?{month:e,day:"numeric"}:{month:e},r=t?"format":"standalone";if(!i.monthsCache[r][e]){var o=n?function(e){return i.dtFormatter(e,a).format()}:function(e){return i.extract(e,a,"month")};i.monthsCache[r][e]=function(e){for(var t=[],i=1;i<=12;i++){var n=n8.utc(2009,i,1);t.push(e(n))}return t}(o)}return i.monthsCache[r][e]})},t.weekdays=function(e,t){var i=this;return void 0===t&&(t=!1),tu(this,e,iA,function(){var n=t?{weekday:e,year:"numeric",month:"long",day:"numeric"}:{weekday:e},a=t?"format":"standalone";return i.weekdaysCache[a][e]||(i.weekdaysCache[a][e]=function(e){for(var t=[],i=1;i<=7;i++){var n=n8.utc(2016,11,13+i);t.push(e(n))}return t}(function(e){return i.extract(e,n,"weekday")})),i.weekdaysCache[a][e]})},t.meridiems=function(){var e=this;return tu(this,void 0,function(){return ik},function(){if(!e.meridiemCache){var t={hour:"numeric",hourCycle:"h12"};e.meridiemCache=[n8.utc(2016,11,13,9),n8.utc(2016,11,13,19)].map(function(i){return e.extract(i,t,"dayperiod")})}return e.meridiemCache})},t.eras=function(e){var t=this;return tu(this,e,i_,function(){var i={era:e};return t.eraCache[e]||(t.eraCache[e]=[n8.utc(-40,1,1),n8.utc(2017,1,1)].map(function(e){return t.extract(e,i,"era")})),t.eraCache[e]})},t.extract=function(e,t,i){var n=this.dtFormatter(e,t).formatToParts().find(function(e){return e.type.toLowerCase()===i});return n?n.value:null},t.numberFormatter=function(e){return void 0===e&&(e={}),new th(this.intl,e.forceSimple||this.fastNumbers,e)},t.dtFormatter=function(e,t){return void 0===t&&(t={}),new tm(e,this.intl,t)},t.relFormatter=function(e){return void 0===e&&(e={}),new tf(this.intl,this.isEnglish(),e)},t.listFormatter=function(e){var t,i,n,a;return void 0===e&&(e={}),t=this.intl,void 0===(i=e)&&(i={}),(a=ti[n=JSON.stringify([t,i])])||(a=new Intl.ListFormat(t,i),ti[n]=a),a},t.isEnglish=function(){return"en"===this.locale||"en-us"===this.locale.toLowerCase()||td(this.intl).locale.startsWith("en-us")},t.getWeekSettings=function(){if(this.weekSettings)return this.weekSettings;if(!tX())return tv;var e=this.locale,t=tc.get(e);if(!t){var i=new Intl.Locale(e);"minimalDays"in(t="getWeekInfo"in i?i.getWeekInfo():i.weekInfo)||(t=ev({},tv,t)),tc.set(e,t)}return t},t.getStartOfWeek=function(){return this.getWeekSettings().firstDay},t.getMinDaysInFirstWeek=function(){return this.getWeekSettings().minimalDays},t.getWeekendDays=function(){return this.getWeekSettings().weekend},t.equals=function(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar},t.toString=function(){return"Locale("+this.locale+", "+this.numberingSystem+", "+this.outputCalendar+")"},ef(e,[{key:"fastNumbers",get:function(){return null==this.fastNumbersCached&&(this.fastNumbersCached=(!this.numberingSystem||"latn"===this.numberingSystem)&&("latn"===this.numberingSystem||!this.locale||this.locale.startsWith("en")||"latn"===td(this.locale).numberingSystem)),this.fastNumbersCached}}]),e}(),tp=null,tg=function(e){function t(t){var i;return(i=e.call(this)||this).fixed=t,i}ey(t,e),t.instance=function(e){return 0===e?t.utcInstance:new t(e)},t.parseSpecifier=function(e){if(e){var i=e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(i)return new t(il(i[1],i[2]))}return null};var i=t.prototype;return i.offsetName=function(){return this.name},i.formatOffset=function(e,t){return iu(this.fixed,t)},i.offset=function(){return this.fixed},i.equals=function(e){return"fixed"===e.type&&e.fixed===this.fixed},ef(t,[{key:"type",get:function(){return"fixed"}},{key:"name",get:function(){return 0===this.fixed?"UTC":"UTC"+iu(this.fixed,"narrow")}},{key:"ianaName",get:function(){return 0===this.fixed?"Etc/UTC":"Etc/GMT"+iu(-this.fixed,"narrow")}},{key:"isUniversal",get:function(){return!0}},{key:"isValid",get:function(){return!0}}],[{key:"utcInstance",get:function(){return null===tp&&(tp=new t(0)),tp}}]),t}(e3),tw=function(e){function t(t){var i;return(i=e.call(this)||this).zoneName=t,i}ey(t,e);var i=t.prototype;return i.offsetName=function(){return null},i.formatOffset=function(){return""},i.offset=function(){return NaN},i.equals=function(){return!1},ef(t,[{key:"type",get:function(){return"invalid"}},{key:"name",get:function(){return this.zoneName}},{key:"isUniversal",get:function(){return!1}},{key:"isValid",get:function(){return!1}}]),t}(e3);function tb(e,t){if(tq(e)||null===e)return t;if(e instanceof e3)return e;if("string"==typeof e){var i=e.toLowerCase();return"default"===i?t:"local"===i||"system"===i?e4.instance:"utc"===i||"gmt"===i?tg.utcInstance:tg.parseSpecifier(i)||e7.create(e)}if(tZ(e))return tg.instance(e);if("object"==typeof e&&"offset"in e&&"function"==typeof e.offset)return e;else return new tw(e)}var tA={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},tk={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},tD=tA.hanidec.replace(/[\[|\]]/g,"").split(""),tF=new Map;function tE(e,t){var i=e.numberingSystem;void 0===t&&(t="");var n=i||"latn",a=tF.get(n);void 0===a&&(a=new Map,tF.set(n,a));var r=a.get(t);return void 0===r&&(r=RegExp(""+tA[n]+t),a.set(t,r)),r}var t_,tx=function(){return Date.now()},tT="system",tS=null,tC=null,tM=null,tO=60,tB=null,tN=function(){function e(){}return e.resetCaches=function(){ty.resetCache(),e7.resetCache(),n8.resetCache(),tF.clear()},ef(e,null,[{key:"now",get:function(){return tx},set:function(e){tx=e}},{key:"defaultZone",get:function(){return tb(tT,e4.instance)},set:function(e){tT=e}},{key:"defaultLocale",get:function(){return tS},set:function(e){tS=e}},{key:"defaultNumberingSystem",get:function(){return tC},set:function(e){tC=e}},{key:"defaultOutputCalendar",get:function(){return tM},set:function(e){tM=e}},{key:"defaultWeekSettings",get:function(){return tB},set:function(e){tB=t1(e)}},{key:"twoDigitCutoffYear",get:function(){return tO},set:function(e){tO=e%100}},{key:"throwOnInvalid",get:function(){return t_},set:function(e){t_=e}}]),e}(),tI=function(){function e(e,t){this.reason=e,this.explanation=t}return e.prototype.toMessage=function(){return this.explanation?this.reason+": "+this.explanation:this.reason},e}(),tL=[0,31,59,90,120,151,181,212,243,273,304,334],tH=[0,31,60,91,121,152,182,213,244,274,305,335];function tz(e,t){return new tI("unit out of range","you specified "+t+" (of type "+typeof t+") as a "+e+", which is invalid")}function tR(e,t,i){var n=new Date(Date.UTC(e,t-1,i));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);var a=n.getUTCDay();return 0===a?7:a}function t$(e,t){var i=t7(e)?tH:tL,n=i.findIndex(function(e){return e<t}),a=t-i[n];return{month:n+1,day:a}}function tV(e,t){return(e-t+7)%7+1}function tW(e,t,i){void 0===t&&(t=4),void 0===i&&(i=1);var n,a=e.year,r=e.month,o=e.day,s=o+(t7(a)?tH:tL)[r-1],l=tV(tR(a,r,o),i),d=Math.floor((s-l+14-t)/7);return d<1?d=ir(n=a-1,t,i):d>ir(a,t,i)?(n=a+1,d=1):n=a,ev({weekYear:n,weekNumber:d,weekday:l},ih(e))}function tP(e,t,i){void 0===t&&(t=4),void 0===i&&(i=1);var n,a=e.weekYear,r=e.weekNumber,o=e.weekday,s=tV(tR(a,1,t),i),l=ie(a),d=7*r+o-s-7+t;d<1?d+=ie(n=a-1):d>l?(n=a+1,d-=ie(a)):n=a;var c=t$(n,d),u=c.month,h=c.day;return ev({year:n,month:u,day:h},ih(e))}function tU(e){var t=e.year,i=e.month,n=e.day+(t7(t)?tH:tL)[i-1];return ev({year:t,ordinal:n},ih(e))}function tj(e){var t=e.year,i=t$(t,e.ordinal),n=i.month,a=i.day;return ev({year:t,month:n,day:a},ih(e))}function tQ(e,t){if(!(!tq(e.localWeekday)||!tq(e.localWeekNumber)||!tq(e.localWeekYear)))return{minDaysInFirstWeek:4,startOfWeek:1};if(!tq(e.weekday)||!tq(e.weekNumber)||!tq(e.weekYear))throw new eT("Cannot mix locale-based week fields with ISO-based week fields");return tq(e.localWeekday)||(e.weekday=e.localWeekday),tq(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),tq(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}function tY(e){var t=tK(e.year),i=t3(e.month,1,12),n=t3(e.day,1,it(e.year,e.month));return t?i?!n&&tz("day",e.day):tz("month",e.month):tz("year",e.year)}function tJ(e){var t=e.hour,i=e.minute,n=e.second,a=e.millisecond,r=t3(t,0,23)||24===t&&0===i&&0===n&&0===a,o=t3(i,0,59),s=t3(n,0,59),l=t3(a,0,999);return r?o?s?!l&&tz("millisecond",a):tz("second",n):tz("minute",i):tz("hour",t)}function tq(e){return void 0===e}function tZ(e){return"number"==typeof e}function tK(e){return"number"==typeof e&&e%1==0}function tG(){try{return"u">typeof Intl&&!!Intl.RelativeTimeFormat}catch(e){return!1}}function tX(){try{return"u">typeof Intl&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch(e){return!1}}function t0(e,t,i){if(0!==e.length)return e.reduce(function(e,n){var a=[t(n),n];return e&&i(e[0],a[0])===e[0]?e:a},null)[1]}function t2(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function t1(e){if(null==e)return null;if("object"!=typeof e)throw new eC("Week settings must be an object");if(!t3(e.firstDay,1,7)||!t3(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(function(e){return!t3(e,1,7)}))throw new eC("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function t3(e,t,i){return tK(e)&&e>=t&&e<=i}function t6(e,t){return void 0===t&&(t=2),e<0?"-"+(""+-e).padStart(t,"0"):(""+e).padStart(t,"0")}function t4(e){if(!tq(e)&&null!==e&&""!==e)return parseInt(e,10)}function t8(e){if(!tq(e)&&null!==e&&""!==e)return parseFloat(e)}function t5(e){if(!tq(e)&&null!==e&&""!==e)return Math.floor(1e3*parseFloat("0."+e))}function t9(e,t,i){void 0===i&&(i="round");var n=Math.pow(10,t);switch(i){case"expand":return e>0?Math.ceil(e*n)/n:Math.floor(e*n)/n;case"trunc":return Math.trunc(e*n)/n;case"round":return Math.round(e*n)/n;case"floor":return Math.floor(e*n)/n;case"ceil":return Math.ceil(e*n)/n;default:throw RangeError("Value rounding "+i+" is out of range")}}function t7(e){return e%4==0&&(e%100!=0||e%400==0)}function ie(e){return t7(e)?366:365}function it(e,t){var i,n=(i=t-1)-12*Math.floor(i/12)+1;return 2===n?t7(e+(t-n)/12)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}function ii(e){var t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t)).setUTCFullYear(e.year,e.month-1,e.day),+t}function ia(e,t,i){return-tV(tR(e,1,t),i)+t-1}function ir(e,t,i){void 0===t&&(t=4),void 0===i&&(i=1);var n=ia(e,t,i),a=ia(e+1,t,i);return(ie(e)-n+a)/7}function io(e){return e>99?e:e>tN.twoDigitCutoffYear?1900+e:2e3+e}function is(e,t,i,n){void 0===n&&(n=null);var a=new Date(e),r={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(r.timeZone=n);var o=ev({timeZoneName:t},r),s=new Intl.DateTimeFormat(i,o).formatToParts(a).find(function(e){return"timezonename"===e.type.toLowerCase()});return s?s.value:null}function il(e,t){var i=parseInt(e,10);Number.isNaN(i)&&(i=0);var n=parseInt(t,10)||0,a=i<0||Object.is(i,-0)?-n:n;return 60*i+a}function id(e){var t=Number(e);if("boolean"==typeof e||""===e||!Number.isFinite(t))throw new eC("Invalid unit value "+e);return t}function ic(e,t){var i={};for(var n in e)if(t2(e,n)){var a=e[n];if(null==a)continue;i[t(n)]=id(a)}return i}function iu(e,t){var i=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),a=e>=0?"+":"-";switch(t){case"short":return""+a+t6(i,2)+":"+t6(n,2);case"narrow":return""+a+i+(n>0?":"+n:"");case"techie":return""+a+t6(i,2)+t6(n,2);default:throw RangeError("Value format "+t+" is out of range for property format")}}function ih(e){return["hour","minute","second","millisecond"].reduce(function(t,i){return t[i]=e[i],t},{})}var im=["January","February","March","April","May","June","July","August","September","October","November","December"],iv=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],iy=["J","F","M","A","M","J","J","A","S","O","N","D"];function ip(e){switch(e){case"narrow":return[].concat(iy);case"short":return[].concat(iv);case"long":return[].concat(im);case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}var ig=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],iw=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],ib=["M","T","W","T","F","S","S"];function iA(e){switch(e){case"narrow":return[].concat(ib);case"short":return[].concat(iw);case"long":return[].concat(ig);case"numeric":return["1","2","3","4","5","6","7"];default:return null}}var ik=["AM","PM"],iD=["Before Christ","Anno Domini"],iF=["BC","AD"],iE=["B","A"];function i_(e){switch(e){case"narrow":return[].concat(iE);case"short":return[].concat(iF);case"long":return[].concat(iD);default:return null}}function ix(e,t){for(var i,n="",a=eD(e);!(i=a()).done;){var r=i.value;r.literal?n+=r.val:n+=t(r.val)}return n}var iT={D:eI,DD:eL,DDD:ez,DDDD:eR,t:e$,tt:eV,ttt:eW,tttt:eP,T:eU,TT:ej,TTT:eQ,TTTT:eY,f:eJ,ff:eZ,fff:eX,ffff:e2,F:eq,FF:eK,FFF:e0,FFFF:e1},iS=function(){function e(e,t){this.opts=t,this.loc=e,this.systemLoc=null}e.create=function(t,i){return void 0===i&&(i={}),new e(t,i)},e.parseFormat=function(e){for(var t=null,i="",n=!1,a=[],r=0;r<e.length;r++){var o=e.charAt(r);"'"===o?((i.length>0||n)&&a.push({literal:n||/^\s+$/.test(i),val:""===i?"'":i}),t=null,i="",n=!n):n||o===t?i+=o:(i.length>0&&a.push({literal:/^\s+$/.test(i),val:i}),i=o,t=o)}return i.length>0&&a.push({literal:n||/^\s+$/.test(i),val:i}),a},e.macroTokenToFormatOpts=function(e){return iT[e]};var t=e.prototype;return t.formatWithSystemDefault=function(e,t){return null===this.systemLoc&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,ev({},this.opts,t)).format()},t.dtFormatter=function(e,t){return void 0===t&&(t={}),this.loc.dtFormatter(e,ev({},this.opts,t))},t.formatDateTime=function(e,t){return this.dtFormatter(e,t).format()},t.formatDateTimeParts=function(e,t){return this.dtFormatter(e,t).formatToParts()},t.formatInterval=function(e,t){return this.dtFormatter(e.start,t).dtf.formatRange(e.start.toJSDate(),e.end.toJSDate())},t.resolvedOptions=function(e,t){return this.dtFormatter(e,t).resolvedOptions()},t.num=function(e,t,i){if(void 0===t&&(t=0),void 0===i&&(i=void 0),this.opts.forceSimple)return t6(e,t);var n=ev({},this.opts);return t>0&&(n.padTo=t),i&&(n.signDisplay=i),this.loc.numberFormatter(n).format(e)},t.formatDateTimeFromString=function(t,i){var n=this,a="en"===this.loc.listingMode(),r=this.loc.outputCalendar&&"gregory"!==this.loc.outputCalendar,o=function(e,i){return n.loc.extract(t,e,i)},s=function(e){return t.isOffsetFixed&&0===t.offset&&e.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,e.format):""},l=function(e,i){return a?ip(e)[t.month-1]:o(i?{month:e}:{month:e,day:"numeric"},"month")},d=function(e,i){return a?iA(e)[t.weekday-1]:o(i?{weekday:e}:{weekday:e,month:"long",day:"numeric"},"weekday")},c=function(i){var a=e.macroTokenToFormatOpts(i);return a?n.formatWithSystemDefault(t,a):i},u=function(e){return a?i_(e)[t.year<0?0:1]:o({era:e},"era")};return ix(e.parseFormat(i),function(e){switch(e){case"S":return n.num(t.millisecond);case"u":case"SSS":return n.num(t.millisecond,3);case"s":return n.num(t.second);case"ss":return n.num(t.second,2);case"uu":return n.num(Math.floor(t.millisecond/10),2);case"uuu":return n.num(Math.floor(t.millisecond/100));case"m":return n.num(t.minute);case"mm":return n.num(t.minute,2);case"h":return n.num(t.hour%12==0?12:t.hour%12);case"hh":return n.num(t.hour%12==0?12:t.hour%12,2);case"H":return n.num(t.hour);case"HH":return n.num(t.hour,2);case"Z":return s({format:"narrow",allowZ:n.opts.allowZ});case"ZZ":return s({format:"short",allowZ:n.opts.allowZ});case"ZZZ":return s({format:"techie",allowZ:n.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:n.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:n.loc.locale});case"z":return t.zoneName;case"a":return a?ik[t.hour<12?0:1]:o({hour:"numeric",hourCycle:"h12"},"dayperiod");case"d":return r?o({day:"numeric"},"day"):n.num(t.day);case"dd":return r?o({day:"2-digit"},"day"):n.num(t.day,2);case"c":case"E":return n.num(t.weekday);case"ccc":return d("short",!0);case"cccc":return d("long",!0);case"ccccc":return d("narrow",!0);case"EEE":return d("short",!1);case"EEEE":return d("long",!1);case"EEEEE":return d("narrow",!1);case"L":return r?o({month:"numeric",day:"numeric"},"month"):n.num(t.month);case"LL":return r?o({month:"2-digit",day:"numeric"},"month"):n.num(t.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return r?o({month:"numeric"},"month"):n.num(t.month);case"MM":return r?o({month:"2-digit"},"month"):n.num(t.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return r?o({year:"numeric"},"year"):n.num(t.year);case"yy":return r?o({year:"2-digit"},"year"):n.num(t.year.toString().slice(-2),2);case"yyyy":return r?o({year:"numeric"},"year"):n.num(t.year,4);case"yyyyyy":return r?o({year:"numeric"},"year"):n.num(t.year,6);case"G":return u("short");case"GG":return u("long");case"GGGGG":return u("narrow");case"kk":return n.num(t.weekYear.toString().slice(-2),2);case"kkkk":return n.num(t.weekYear,4);case"W":return n.num(t.weekNumber);case"WW":return n.num(t.weekNumber,2);case"n":return n.num(t.localWeekNumber);case"nn":return n.num(t.localWeekNumber,2);case"ii":return n.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return n.num(t.localWeekYear,4);case"o":return n.num(t.ordinal);case"ooo":return n.num(t.ordinal,3);case"q":return n.num(t.quarter);case"qq":return n.num(t.quarter,2);case"X":return n.num(Math.floor(t.ts/1e3));case"x":return n.num(t.ts);default:return c(e)}})},t.formatDurationFromString=function(t,i){var n=this,a="negativeLargestOnly"===this.opts.signMode?-1:1,r=function(e){switch(e[0]){case"S":return"milliseconds";case"s":return"seconds";case"m":return"minutes";case"h":return"hours";case"d":return"days";case"w":return"weeks";case"M":return"months";case"y":return"years";default:return null}},o=e.parseFormat(i),s=o.reduce(function(e,t){var i=t.literal,n=t.val;return i?e:e.concat(n)},[]),l=t.shiftTo.apply(t,s.map(r).filter(function(e){return e})),d={isNegativeDuration:l<0,largestUnit:Object.keys(l.values)[0]};return ix(o,function(e){var t=r(e);if(!t)return e;var i,o=d.isNegativeDuration&&t!==d.largestUnit?a:1;return i="negativeLargestOnly"===n.opts.signMode&&t!==d.largestUnit?"never":"all"===n.opts.signMode?"always":"auto",n.num(l.get(t)*o,e.length,i)})},e}(),iC=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function iM(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return RegExp("^"+t.reduce(function(e,t){return e+t.source},"")+"$")}function iO(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(e){return t.reduce(function(t,i){var n=t[0],a=t[1],r=i(e,t[2]),o=r[0],s=r[1],l=r[2];return[ev({},n,o),s||a,l]},[{},null,1]).slice(0,2)}}function iB(e){if(null==e)return[null,null];for(var t=arguments.length,i=Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];for(var a=0;a<i.length;a++){var r=i[a],o=r[0],s=r[1],l=o.exec(e);if(l)return s(l)}return[null,null]}function iN(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(e,i){var n,a={};for(n=0;n<t.length;n++)a[t[n]]=t4(e[i+n]);return[a,null,i+n]}}var iI=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,iL=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,iH=RegExp(""+iL.source+("(?:"+iI.source+"?(?:\\[("+iC.source)+")\\])?)?"),iz=RegExp("(?:[Tt]"+iH.source+")?"),iR=iN("weekYear","weekNumber","weekDay"),i$=iN("year","ordinal"),iV=RegExp(iL.source+" ?(?:"+iI.source+"|("+iC.source+"))?"),iW=RegExp("(?: "+iV.source+")?");function iP(e,t,i){var n=e[t];return tq(n)?i:t4(n)}function iU(e,t){return[{hours:iP(e,t,0),minutes:iP(e,t+1,0),seconds:iP(e,t+2,0),milliseconds:t5(e[t+3])},null,t+4]}function ij(e,t){var i=!e[t]&&!e[t+1],n=il(e[t+1],e[t+2]);return[{},i?null:tg.instance(n),t+3]}function iQ(e,t){return[{},e[t]?e7.create(e[t]):null,t+1]}var iY=RegExp("^T?"+iL.source+"$"),iJ=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function iq(e){var t=e[0],i=e[1],n=e[2],a=e[3],r=e[4],o=e[5],s=e[6],l=e[7],d=e[8],c="-"===t[0],u=l&&"-"===l[0],h=function(e,t){return void 0===t&&(t=!1),void 0!==e&&(t||e&&c)?-e:e};return[{years:h(t8(i)),months:h(t8(n)),weeks:h(t8(a)),days:h(t8(r)),hours:h(t8(o)),minutes:h(t8(s)),seconds:h(t8(l),"-0"===l),milliseconds:h(t5(d),u)}]}var iZ={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function iK(e,t,i,n,a,r,o){var s={year:2===t.length?io(t4(t)):t4(t),month:iv.indexOf(i)+1,day:t4(n),hour:t4(a),minute:t4(r)};return o&&(s.second=t4(o)),e&&(s.weekday=e.length>3?ig.indexOf(e)+1:iw.indexOf(e)+1),s}var iG=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function iX(e){var t=e[1],i=e[2],n=e[3],a=e[4],r=e[5],o=e[6],s=e[7],l=e[8],d=e[9],c=e[10],u=e[11];return[iK(t,a,n,i,r,o,s),new tg(l?iZ[l]:d?0:il(c,u))]}var i0=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,i2=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,i1=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function i3(e){var t=e[1],i=e[2],n=e[3];return[iK(t,e[4],n,i,e[5],e[6],e[7]),tg.utcInstance]}function i6(e){var t=e[1],i=e[2],n=e[3],a=e[4],r=e[5],o=e[6];return[iK(t,e[7],i,n,a,r,o),tg.utcInstance]}var i4=iM(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,iz),i8=iM(/(\d{4})-?W(\d\d)(?:-?(\d))?/,iz),i5=iM(/(\d{4})-?(\d{3})/,iz),i9=iM(iH),i7=iO(function(e,t){return[{year:iP(e,t),month:iP(e,t+1,1),day:iP(e,t+2,1)},null,t+3]},iU,ij,iQ),ne=iO(iR,iU,ij,iQ),nt=iO(i$,iU,ij,iQ),ni=iO(iU,ij,iQ),nn=iO(iU),na=iM(/(\d{4})-(\d\d)-(\d\d)/,iW),nr=iM(iV),no=iO(iU,ij,iQ),ns="Invalid Duration",nl={weeks:{days:7,hours:168,minutes:10080,seconds:604800,milliseconds:6048e5},days:{hours:24,minutes:1440,seconds:86400,milliseconds:864e5},hours:{minutes:60,seconds:3600,milliseconds:36e5},minutes:{seconds:60,milliseconds:6e4},seconds:{milliseconds:1e3}},nd=ev({years:{quarters:4,months:12,weeks:52,days:365,hours:8760,minutes:525600,seconds:31536e3,milliseconds:31536e6},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:131040,seconds:7862400,milliseconds:78624e5},months:{weeks:4,days:30,hours:720,minutes:43200,seconds:2592e3,milliseconds:2592e6}},nl),nc=ev({years:{quarters:4,months:12,weeks:52.1775,days:365.2425,hours:8765.82,minutes:525949.2,seconds:0x1e18558,milliseconds:31556952e3},quarters:{months:3,weeks:13.044375,days:91.310625,hours:2191.455,minutes:131487.3,seconds:7889238,milliseconds:7889238e3},months:{weeks:30.436875/7,days:30.436875,hours:730.485,minutes:43829.1,seconds:2629746,milliseconds:2629746e3}},nl),nu=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],nh=nu.slice(0).reverse();function nm(e,t,i){return void 0===i&&(i=!1),new np({values:i?t.values:ev({},e.values,t.values||{}),loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix})}function nf(e,t){for(var i,n,a=null!=(i=t.milliseconds)?i:0,r=eD(nh.slice(1));!(n=r()).done;){var o=n.value;t[o]&&(a+=t[o]*e[o].milliseconds)}return a}function nv(e,t){var i=0>nf(e,t)?-1:1;nu.reduceRight(function(n,a){if(tq(t[a]))return n;if(n){var r=t[n]*i,o=e[a][n],s=Math.floor(r/o);t[a]+=s*i,t[n]-=s*o*i}return a},null),nu.reduce(function(i,n){if(tq(t[n]))return i;if(i){var a=t[i]%1;t[i]-=a,t[n]+=a*e[i][n]}return n},null)}function ny(e){for(var t={},i=0,n=Object.entries(e);i<n.length;i++){var a=n[i],r=a[0],o=a[1];0!==o&&(t[r]=o)}return t}var np=function(e){function t(e){var t="longterm"===e.conversionAccuracy,i=t?nc:nd;e.matrix&&(i=e.matrix),this.values=e.values,this.loc=e.loc||ty.create(),this.conversionAccuracy=t?"longterm":"casual",this.invalid=e.invalid||null,this.matrix=i,this.isLuxonDuration=!0}t.fromMillis=function(e,i){return t.fromObject({milliseconds:e},i)},t.fromObject=function(e,i){if(void 0===i&&(i={}),null==e||"object"!=typeof e)throw new eC("Duration.fromObject: argument expected to be an object, got "+(null===e?"null":typeof e));return new t({values:ic(e,t.normalizeUnit),loc:ty.fromObject(i),conversionAccuracy:i.conversionAccuracy,matrix:i.matrix})},t.fromDurationLike=function(e){if(tZ(e))return t.fromMillis(e);if(t.isDuration(e))return e;if("object"==typeof e)return t.fromObject(e);throw new eC("Unknown duration argument "+e+" of type "+typeof e)},t.fromISO=function(e,i){var n=iB(e,[iJ,iq])[0];return n?t.fromObject(n,i):t.invalid("unparsable",'the input "'+e+"\" can't be parsed as ISO 8601")},t.fromISOTime=function(e,i){var n=iB(e,[iY,nn])[0];return n?t.fromObject(n,i):t.invalid("unparsable",'the input "'+e+"\" can't be parsed as ISO 8601")},t.invalid=function(e,i){if(void 0===i&&(i=null),!e)throw new eC("need to specify a reason the Duration is invalid");var n=e instanceof tI?e:new tI(e,i);if(!tN.throwOnInvalid)return new t({invalid:n});throw new ex(n)},t.normalizeUnit=function(e){var t={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[e?e.toLowerCase():e];if(!t)throw new eS(e);return t},t.isDuration=function(e){return e&&e.isLuxonDuration||!1};var i=t.prototype;return i.toFormat=function(e,t){void 0===t&&(t={});var i=ev({},t,{floor:!1!==t.round&&!1!==t.floor});return this.isValid?iS.create(this.loc,i).formatDurationFromString(this,e):ns},i.toHuman=function(e){var t=this;if(void 0===e&&(e={}),!this.isValid)return ns;var i=!1!==e.showZeros,n=nu.map(function(n){var a=t.values[n];return tq(a)||0===a&&!i?null:t.loc.numberFormatter(ev({style:"unit",unitDisplay:"long"},e,{unit:n.slice(0,-1)})).format(a)}).filter(function(e){return e});return this.loc.listFormatter(ev({type:"conjunction",style:e.listStyle||"narrow"},e)).format(n)},i.toObject=function(){return this.isValid?ev({},this.values):{}},i.toISO=function(){if(!this.isValid)return null;var e="P";return 0!==this.years&&(e+=this.years+"Y"),(0!==this.months||0!==this.quarters)&&(e+=this.months+3*this.quarters+"M"),0!==this.weeks&&(e+=this.weeks+"W"),0!==this.days&&(e+=this.days+"D"),(0!==this.hours||0!==this.minutes||0!==this.seconds||0!==this.milliseconds)&&(e+="T"),0!==this.hours&&(e+=this.hours+"H"),0!==this.minutes&&(e+=this.minutes+"M"),(0!==this.seconds||0!==this.milliseconds)&&(e+=t9(this.seconds+this.milliseconds/1e3,3)+"S"),"P"===e&&(e+="T0S"),e},i.toISOTime=function(e){if(void 0===e&&(e={}),!this.isValid)return null;var t=this.toMillis();return t<0||t>=864e5?null:(e=ev({suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended"},e,{includeOffset:!1}),n8.fromMillis(t,{zone:"UTC"}).toISOTime(e))},i.toJSON=function(){return this.toISO()},i.toString=function(){return this.toISO()},i[e]=function(){return this.isValid?"Duration { values: "+JSON.stringify(this.values)+" }":"Duration { Invalid, reason: "+this.invalidReason+" }"},i.toMillis=function(){return this.isValid?nf(this.matrix,this.values):NaN},i.valueOf=function(){return this.toMillis()},i.plus=function(e){if(!this.isValid)return this;for(var i=t.fromDurationLike(e),n={},a=0;a<nu.length;a++){var r=nu[a];(t2(i.values,r)||t2(this.values,r))&&(n[r]=i.get(r)+this.get(r))}return nm(this,{values:n},!0)},i.minus=function(e){if(!this.isValid)return this;var i=t.fromDurationLike(e);return this.plus(i.negate())},i.mapUnits=function(e){if(!this.isValid)return this;for(var t={},i=0,n=Object.keys(this.values);i<n.length;i++){var a=n[i];t[a]=id(e(this.values[a],a))}return nm(this,{values:t},!0)},i.get=function(e){return this[t.normalizeUnit(e)]},i.set=function(e){return this.isValid?nm(this,{values:ev({},this.values,ic(e,t.normalizeUnit))}):this},i.reconfigure=function(e){var t=void 0===e?{}:e,i=t.locale,n=t.numberingSystem,a=t.conversionAccuracy,r=t.matrix;return nm(this,{loc:this.loc.clone({locale:i,numberingSystem:n}),matrix:r,conversionAccuracy:a})},i.as=function(e){return this.isValid?this.shiftTo(e).get(e):NaN},i.normalize=function(){if(!this.isValid)return this;var e=this.toObject();return nv(this.matrix,e),nm(this,{values:e},!0)},i.rescale=function(){return this.isValid?nm(this,{values:ny(this.normalize().shiftToAll().toObject())},!0):this},i.shiftTo=function(){for(var e,i=arguments.length,n=Array(i),a=0;a<i;a++)n[a]=arguments[a];if(!this.isValid||0===n.length)return this;n=n.map(function(e){return t.normalizeUnit(e)});for(var r={},o={},s=this.toObject(),l=0;l<nu.length;l++){var d=nu[l];if(n.indexOf(d)>=0){e=d;var c=0;for(var u in o)c+=this.matrix[u][d]*o[u],o[u]=0;tZ(s[d])&&(c+=s[d]);var h=Math.trunc(c);r[d]=h,o[d]=(1e3*c-1e3*h)/1e3}else tZ(s[d])&&(o[d]=s[d])}for(var m in o)0!==o[m]&&(r[e]+=m===e?o[m]:o[m]/this.matrix[e][m]);return nv(this.matrix,r),nm(this,{values:r},!0)},i.shiftToAll=function(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this},i.negate=function(){if(!this.isValid)return this;for(var e={},t=0,i=Object.keys(this.values);t<i.length;t++){var n=i[t];e[n]=0===this.values[n]?0:-this.values[n]}return nm(this,{values:e},!0)},i.removeZeros=function(){return this.isValid?nm(this,{values:ny(this.values)},!0):this},i.equals=function(e){if(!this.isValid||!e.isValid||!this.loc.equals(e.loc))return!1;for(var t=0;t<nu.length;t++){var i,n,a=nu[t];if(i=this.values[a],n=e.values[a],void 0===i||0===i?void 0!==n&&0!==n:i!==n)return!1}return!0},ef(t,[{key:"locale",get:function(){return this.isValid?this.loc.locale:null}},{key:"numberingSystem",get:function(){return this.isValid?this.loc.numberingSystem:null}},{key:"years",get:function(){return this.isValid?this.values.years||0:NaN}},{key:"quarters",get:function(){return this.isValid?this.values.quarters||0:NaN}},{key:"months",get:function(){return this.isValid?this.values.months||0:NaN}},{key:"weeks",get:function(){return this.isValid?this.values.weeks||0:NaN}},{key:"days",get:function(){return this.isValid?this.values.days||0:NaN}},{key:"hours",get:function(){return this.isValid?this.values.hours||0:NaN}},{key:"minutes",get:function(){return this.isValid?this.values.minutes||0:NaN}},{key:"seconds",get:function(){return this.isValid?this.values.seconds||0:NaN}},{key:"milliseconds",get:function(){return this.isValid?this.values.milliseconds||0:NaN}},{key:"isValid",get:function(){return null===this.invalid}},{key:"invalidReason",get:function(){return this.invalid?this.invalid.reason:null}},{key:"invalidExplanation",get:function(){return this.invalid?this.invalid.explanation:null}}]),t}(Symbol.for("nodejs.util.inspect.custom")),ng="Invalid Interval",nw=function(e){function t(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}t.invalid=function(e,i){if(void 0===i&&(i=null),!e)throw new eC("need to specify a reason the Interval is invalid");var n=e instanceof tI?e:new tI(e,i);if(!tN.throwOnInvalid)return new t({invalid:n});throw new e_(n)},t.fromDateTimes=function(e,i){var n,a,r=n5(e),o=n5(i),s=(n=r,a=o,n&&n.isValid?a&&a.isValid?a<n?nw.invalid("end before start","The end of an interval must be after its start, but you had start="+n.toISO()+" and end="+a.toISO()):null:nw.invalid("missing or invalid end"):nw.invalid("missing or invalid start"));return null==s?new t({start:r,end:o}):s},t.after=function(e,i){var n=np.fromDurationLike(i),a=n5(e);return t.fromDateTimes(a,a.plus(n))},t.before=function(e,i){var n=np.fromDurationLike(i),a=n5(e);return t.fromDateTimes(a.minus(n),a)},t.fromISO=function(e,i){var n=(e||"").split("/",2),a=n[0],r=n[1];if(a&&r){try{s=(o=n8.fromISO(a,i)).isValid}catch(e){s=!1}try{d=(l=n8.fromISO(r,i)).isValid}catch(e){d=!1}if(s&&d)return t.fromDateTimes(o,l);if(s){var o,s,l,d,c=np.fromISO(r,i);if(c.isValid)return t.after(o,c)}else if(d){var u=np.fromISO(a,i);if(u.isValid)return t.before(l,u)}}return t.invalid("unparsable",'the input "'+e+"\" can't be parsed as ISO 8601")},t.isInterval=function(e){return e&&e.isLuxonInterval||!1};var i=t.prototype;return i.length=function(e){return void 0===e&&(e="milliseconds"),this.isValid?this.toDuration.apply(this,[e]).get(e):NaN},i.count=function(e,t){if(void 0===e&&(e="milliseconds"),!this.isValid)return NaN;var i,n=this.start.startOf(e,t);return Math.floor((i=(i=null!=t&&t.useLocaleWeeks?this.end.reconfigure({locale:n.locale}):this.end).startOf(e,t)).diff(n,e).get(e))+(i.valueOf()!==this.end.valueOf())},i.hasSame=function(e){return!!this.isValid&&(this.isEmpty()||this.e.minus(1).hasSame(this.s,e))},i.isEmpty=function(){return this.s.valueOf()===this.e.valueOf()},i.isAfter=function(e){return!!this.isValid&&this.s>e},i.isBefore=function(e){return!!this.isValid&&this.e<=e},i.contains=function(e){return!!this.isValid&&this.s<=e&&this.e>e},i.set=function(e){var i=void 0===e?{}:e,n=i.start,a=i.end;return this.isValid?t.fromDateTimes(n||this.s,a||this.e):this},i.splitAt=function(){var e=this;if(!this.isValid)return[];for(var i=arguments.length,n=Array(i),a=0;a<i;a++)n[a]=arguments[a];for(var r=n.map(n5).filter(function(t){return e.contains(t)}).sort(function(e,t){return e.toMillis()-t.toMillis()}),o=[],s=this.s,l=0;s<this.e;){var d=r[l]||this.e,c=+d>+this.e?this.e:d;o.push(t.fromDateTimes(s,c)),s=c,l+=1}return o},i.splitBy=function(e){var i=np.fromDurationLike(e);if(!this.isValid||!i.isValid||0===i.as("milliseconds"))return[];for(var n,a=this.s,r=1,o=[];a<this.e;){var s=this.start.plus(i.mapUnits(function(e){return e*r}));n=+s>+this.e?this.e:s,o.push(t.fromDateTimes(a,n)),a=n,r+=1}return o},i.divideEqually=function(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]},i.overlaps=function(e){return this.e>e.s&&this.s<e.e},i.abutsStart=function(e){return!!this.isValid&&+this.e==+e.s},i.abutsEnd=function(e){return!!this.isValid&&+e.e==+this.s},i.engulfs=function(e){return!!this.isValid&&this.s<=e.s&&this.e>=e.e},i.equals=function(e){return!!this.isValid&&!!e.isValid&&this.s.equals(e.s)&&this.e.equals(e.e)},i.intersection=function(e){if(!this.isValid)return this;var i=this.s>e.s?this.s:e.s,n=this.e<e.e?this.e:e.e;return i>=n?null:t.fromDateTimes(i,n)},i.union=function(e){if(!this.isValid)return this;var i=this.s<e.s?this.s:e.s,n=this.e>e.e?this.e:e.e;return t.fromDateTimes(i,n)},t.merge=function(e){var t=e.sort(function(e,t){return e.s-t.s}).reduce(function(e,t){var i=e[0],n=e[1];return n?n.overlaps(t)||n.abutsStart(t)?[i,n.union(t)]:[i.concat([n]),t]:[i,t]},[[],null]),i=t[0],n=t[1];return n&&i.push(n),i},t.xor=function(e){for(var i,n,a=null,r=0,o=[],s=e.map(function(e){return[{time:e.s,type:"s"},{time:e.e,type:"e"}]}),l=(i=Array.prototype).concat.apply(i,s).sort(function(e,t){return e.time-t.time}),d=eD(l);!(n=d()).done;){var c=n.value;1===(r+="s"===c.type?1:-1)?a=c.time:(a&&+a!=+c.time&&o.push(t.fromDateTimes(a,c.time)),a=null)}return t.merge(o)},i.difference=function(){for(var e=this,i=arguments.length,n=Array(i),a=0;a<i;a++)n[a]=arguments[a];return t.xor([this].concat(n)).map(function(t){return e.intersection(t)}).filter(function(e){return e&&!e.isEmpty()})},i.toString=function(){return this.isValid?"["+this.s.toISO()+" – "+this.e.toISO()+")":ng},i[e]=function(){return this.isValid?"Interval { start: "+this.s.toISO()+", end: "+this.e.toISO()+" }":"Interval { Invalid, reason: "+this.invalidReason+" }"},i.toLocaleString=function(e,t){return void 0===e&&(e=eI),void 0===t&&(t={}),this.isValid?iS.create(this.s.loc.clone(t),e).formatInterval(this):ng},i.toISO=function(e){return this.isValid?this.s.toISO(e)+"/"+this.e.toISO(e):ng},i.toISODate=function(){return this.isValid?this.s.toISODate()+"/"+this.e.toISODate():ng},i.toISOTime=function(e){return this.isValid?this.s.toISOTime(e)+"/"+this.e.toISOTime(e):ng},i.toFormat=function(e,t){var i=(void 0===t?{}:t).separator;return this.isValid?""+this.s.toFormat(e)+(void 0===i?" – ":i)+this.e.toFormat(e):ng},i.toDuration=function(e,t){return this.isValid?this.e.diff(this.s,e,t):np.invalid(this.invalidReason)},i.mapEndpoints=function(e){return t.fromDateTimes(e(this.s),e(this.e))},ef(t,[{key:"start",get:function(){return this.isValid?this.s:null}},{key:"end",get:function(){return this.isValid?this.e:null}},{key:"lastDateTime",get:function(){return this.isValid&&this.e?this.e.minus(1):null}},{key:"isValid",get:function(){return null===this.invalidReason}},{key:"invalidReason",get:function(){return this.invalid?this.invalid.reason:null}},{key:"invalidExplanation",get:function(){return this.invalid?this.invalid.explanation:null}}]),t}(Symbol.for("nodejs.util.inspect.custom")),nb=function(){function e(){}return e.hasDST=function(e){void 0===e&&(e=tN.defaultZone);var t=n8.now().setZone(e).set({month:12});return!e.isUniversal&&t.offset!==t.set({month:6}).offset},e.isValidIANAZone=function(e){return e7.isValidZone(e)},e.normalizeZone=function(e){return tb(e,tN.defaultZone)},e.getStartOfWeek=function(e){var t=void 0===e?{}:e,i=t.locale,n=t.locObj;return((void 0===n?null:n)||ty.create(void 0===i?null:i)).getStartOfWeek()},e.getMinimumDaysInFirstWeek=function(e){var t=void 0===e?{}:e,i=t.locale,n=t.locObj;return((void 0===n?null:n)||ty.create(void 0===i?null:i)).getMinDaysInFirstWeek()},e.getWeekendWeekdays=function(e){var t=void 0===e?{}:e,i=t.locale,n=t.locObj;return((void 0===n?null:n)||ty.create(void 0===i?null:i)).getWeekendDays().slice()},e.months=function(e,t){void 0===e&&(e="long");var i=void 0===t?{}:t,n=i.locale,a=i.numberingSystem,r=i.locObj,o=i.outputCalendar;return((void 0===r?null:r)||ty.create(void 0===n?null:n,void 0===a?null:a,void 0===o?"gregory":o)).months(e)},e.monthsFormat=function(e,t){void 0===e&&(e="long");var i=void 0===t?{}:t,n=i.locale,a=i.numberingSystem,r=i.locObj,o=i.outputCalendar;return((void 0===r?null:r)||ty.create(void 0===n?null:n,void 0===a?null:a,void 0===o?"gregory":o)).months(e,!0)},e.weekdays=function(e,t){void 0===e&&(e="long");var i=void 0===t?{}:t,n=i.locale,a=i.numberingSystem,r=i.locObj;return((void 0===r?null:r)||ty.create(void 0===n?null:n,void 0===a?null:a,null)).weekdays(e)},e.weekdaysFormat=function(e,t){void 0===e&&(e="long");var i=void 0===t?{}:t,n=i.locale,a=i.numberingSystem,r=i.locObj;return((void 0===r?null:r)||ty.create(void 0===n?null:n,void 0===a?null:a,null)).weekdays(e,!0)},e.meridiems=function(e){var t=(void 0===e?{}:e).locale;return ty.create(void 0===t?null:t).meridiems()},e.eras=function(e,t){void 0===e&&(e="short");var i=(void 0===t?{}:t).locale;return ty.create(void 0===i?null:i,null,"gregory").eras(e)},e.features=function(){return{relative:tG(),localeWeek:tX()}},e}();function nA(e,t){var i=function(e){return e.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf()},n=i(t)-i(e);return Math.floor(np.fromMillis(n).as("days"))}function nk(e,t){return void 0===t&&(t=function(e){return e}),{regex:e,deser:function(e){var i=e[0];return t(function(e){var t=parseInt(e,10);if(!isNaN(t))return t;t="";for(var i=0;i<e.length;i++){var n=e.charCodeAt(i);if(-1!==e[i].search(tA.hanidec))t+=tD.indexOf(e[i]);else for(var a in tk){var r=tk[a],o=r[0],s=r[1];n>=o&&n<=s&&(t+=n-o)}}return parseInt(t,10)}(i))}}}var nD="[ "+String.fromCharCode(160)+"]",nF=RegExp(nD,"g");function nE(e){return e.replace(/\./g,"\\.?").replace(nF,nD)}function n_(e){return e.replace(/\./g,"").replace(nF," ").toLowerCase()}function nx(e,t){return null===e?null:{regex:RegExp(e.map(nE).join("|")),deser:function(i){var n=i[0];return e.findIndex(function(e){return n_(n)===n_(e)})+t}}}function nT(e,t){return{regex:e,deser:function(e){return il(e[1],e[2])},groups:t}}function nS(e){return{regex:e,deser:function(e){return e[0]}}}var nC={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}},nM=null;function nO(e,t){var i;return(i=Array.prototype).concat.apply(i,e.map(function(e){if(e.literal)return e;var i=nI(iS.macroTokenToFormatOpts(e.val),t);return null==i||i.includes(void 0)?e:i}))}var nB=function(){function e(e,t){if(this.locale=e,this.format=t,this.tokens=nO(iS.parseFormat(t),e),this.units=this.tokens.map(function(t){var i,n,a,r,o,s,l,d,c,u,h,m,f;return i=tE(e),n=tE(e,"{2}"),a=tE(e,"{3}"),r=tE(e,"{4}"),o=tE(e,"{6}"),s=tE(e,"{1,2}"),l=tE(e,"{1,3}"),d=tE(e,"{1,6}"),c=tE(e,"{1,9}"),u=tE(e,"{2,4}"),h=tE(e,"{4,6}"),m=function(e){return{regex:RegExp(e.val.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")),deser:function(e){return e[0]},literal:!0}},(f=function(f){if(t.literal)return m(f);switch(f.val){case"G":return nx(e.eras("short"),0);case"GG":return nx(e.eras("long"),0);case"y":return nk(d);case"yy":case"kk":return nk(u,io);case"yyyy":case"kkkk":return nk(r);case"yyyyy":return nk(h);case"yyyyyy":return nk(o);case"M":case"L":case"d":case"H":case"h":case"m":case"q":case"s":case"W":return nk(s);case"MM":case"LL":case"dd":case"HH":case"hh":case"mm":case"qq":case"ss":case"WW":return nk(n);case"MMM":return nx(e.months("short",!0),1);case"MMMM":return nx(e.months("long",!0),1);case"LLL":return nx(e.months("short",!1),1);case"LLLL":return nx(e.months("long",!1),1);case"o":case"S":return nk(l);case"ooo":case"SSS":return nk(a);case"u":return nS(c);case"uu":return nS(s);case"uuu":case"E":case"c":return nk(i);case"a":return nx(e.meridiems(),0);case"EEE":return nx(e.weekdays("short",!1),1);case"EEEE":return nx(e.weekdays("long",!1),1);case"ccc":return nx(e.weekdays("short",!0),1);case"cccc":return nx(e.weekdays("long",!0),1);case"Z":case"ZZ":return nT(RegExp("([+-]"+s.source+")(?::("+n.source+"))?"),2);case"ZZZ":return nT(RegExp("([+-]"+s.source+")("+n.source+")?"),2);case"z":return nS(/[a-z_+-/]{1,256}?/i);case" ":return nS(/[^\S\n\r]/);default:return m(f)}}(t)||{invalidReason:"missing Intl.DateTimeFormat.formatToParts support"}).token=t,f}),this.disqualifyingUnit=this.units.find(function(e){return e.invalidReason}),!this.disqualifyingUnit){var i,n=["^"+(i=this.units).map(function(e){return e.regex}).reduce(function(e,t){return e+"("+t.source+")"},"")+"$",i],a=n[0],r=n[1];this.regex=RegExp(a,"i"),this.handlers=r}}return e.prototype.explainFromTokens=function(e){if(!this.isValid)return{input:e,tokens:this.tokens,invalidReason:this.invalidReason};var t,i,n,a=function(e,t,i){var n=e.match(t);if(!n)return[n,{}];var a={},r=1;for(var o in i)if(t2(i,o)){var s=i[o],l=s.groups?s.groups+1:1;!s.literal&&s.token&&(a[s.token.val[0]]=s.deser(n.slice(r,r+l))),r+=l}return[n,a]}(e,this.regex,this.handlers),r=a[0],o=a[1],s=o?(i=function(e){switch(e){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}},n=null,tq(o.z)||(n=e7.create(o.z)),tq(o.Z)||(n||(n=new tg(o.Z)),t=o.Z),tq(o.q)||(o.M=(o.q-1)*3+1),tq(o.h)||(o.h<12&&1===o.a?o.h+=12:12===o.h&&0===o.a&&(o.h=0)),0===o.G&&o.y&&(o.y=-o.y),tq(o.u)||(o.S=t5(o.u)),[Object.keys(o).reduce(function(e,t){var n=i(t);return n&&(e[n]=o[t]),e},{}),n,t]):[null,null,void 0],l=s[0],d=s[1],c=s[2];if(t2(o,"a")&&t2(o,"H"))throw new eT("Can't include meridiem when specifying 24-hour format");return{input:e,tokens:this.tokens,regex:this.regex,rawMatches:r,matches:o,result:l,zone:d,specificOffset:c}},ef(e,[{key:"isValid",get:function(){return!this.disqualifyingUnit}},{key:"invalidReason",get:function(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}]),e}();function nN(e,t,i){return new nB(e,i).explainFromTokens(t)}function nI(e,t){if(!e)return null;var i=iS.create(t,e).dtFormatter((nM||(nM=n8.fromMillis(0x16a2e5618e3)),nM)),n=i.formatToParts(),a=i.resolvedOptions();return n.map(function(t){return function(e,t,i){var n=e.type,a=e.value;if("literal"===n){var r=/^\s+$/.test(a);return{literal:!r,val:r?" ":a}}var o=t[n],s=n;"hour"===n&&(s=null!=t.hour12?t.hour12?"hour12":"hour24":null!=t.hourCycle?"h11"===t.hourCycle||"h12"===t.hourCycle?"hour12":"hour24":i.hour12?"hour12":"hour24");var l=nC[s];if("object"==typeof l&&(l=l[o]),l)return{literal:!1,val:l}}(t,e,a)})}var nL="Invalid DateTime";function nH(e){return new tI("unsupported zone",'the zone "'+e.name+'" is not supported')}function nz(e){return null===e.weekData&&(e.weekData=tW(e.c)),e.weekData}function nR(e){return null===e.localWeekData&&(e.localWeekData=tW(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function n$(e,t){var i={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new n8(ev({},i,t,{old:i}))}function nV(e,t,i){var n=e-6e4*t,a=i.offset(n);if(t===a)return[n,t];n-=(a-t)*6e4;var r=i.offset(n);return a===r?[n,a]:[e-6e4*Math.min(a,r),Math.max(a,r)]}function nW(e,t){var i=new Date(e+=6e4*t);return{year:i.getUTCFullYear(),month:i.getUTCMonth()+1,day:i.getUTCDate(),hour:i.getUTCHours(),minute:i.getUTCMinutes(),second:i.getUTCSeconds(),millisecond:i.getUTCMilliseconds()}}function nP(e,t){var i=e.o,n=e.c.year+Math.trunc(t.years),a=e.c.month+Math.trunc(t.months)+3*Math.trunc(t.quarters),r=ev({},e.c,{year:n,month:a,day:Math.min(e.c.day,it(n,a))+Math.trunc(t.days)+7*Math.trunc(t.weeks)}),o=np.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),s=nV(ii(r),i,e.zone),l=s[0],d=s[1];return 0!==o&&(l+=o,d=e.zone.offset(l)),{ts:l,o:d}}function nU(e,t,i,n,a,r){var o=i.setZone,s=i.zone;if((!e||0===Object.keys(e).length)&&!t)return n8.invalid(new tI("unparsable",'the input "'+a+"\" can't be parsed as "+n));var l=n8.fromObject(e,ev({},i,{zone:t||s,specificOffset:r}));return o?l:l.setZone(s)}function nj(e,t,i){return void 0===i&&(i=!0),e.isValid?iS.create(ty.create("en-US"),{allowZ:i,forceSimple:!0}).formatDateTimeFromString(e,t):null}function nQ(e,t,i){var n=e.c.year>9999||e.c.year<0,a="";if(n&&e.c.year>=0&&(a+="+"),a+=t6(e.c.year,n?6:4),"year"===i)return a;if(t){if(a+="-",a+=t6(e.c.month),"month"===i)return a;a+="-"}else if(a+=t6(e.c.month),"month"===i)return a;return a+t6(e.c.day)}function nY(e,t,i,n,a,r,o){var s=!i||0!==e.c.millisecond||0!==e.c.second,l="";switch(o){case"day":case"month":case"year":break;default:if(l+=t6(e.c.hour),"hour"===o)break;if(t){if(l+=":",l+=t6(e.c.minute),"minute"===o)break;s&&(l+=":",l+=t6(e.c.second))}else{if(l+=t6(e.c.minute),"minute"===o)break;s&&(l+=t6(e.c.second))}if("second"===o)break;s&&(!n||0!==e.c.millisecond)&&(l+=".",l+=t6(e.c.millisecond,3))}return a&&(e.isOffsetFixed&&0===e.offset&&!r?l+="Z":e.o<0?(l+="-",l+=t6(Math.trunc(-e.o/60)),l+=":",l+=t6(Math.trunc(-e.o%60))):(l+="+",l+=t6(Math.trunc(e.o/60)),l+=":",l+=t6(Math.trunc(e.o%60)))),r&&(l+="["+e.zone.ianaName+"]"),l}var nJ={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},nq={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},nZ={ordinal:1,hour:0,minute:0,second:0,millisecond:0},nK=["year","month","day","hour","minute","second","millisecond"],nG=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],nX=["year","ordinal","hour","minute","second","millisecond"];function n0(e){var t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new eS(e);return t}function n2(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return n0(e)}}function n1(e,t){var i,n,a=tb(t.zone,tN.defaultZone);if(!a.isValid)return n8.invalid(nH(a));var r=ty.fromObject(t);if(tq(e.year))i=tN.now();else{for(var o=0;o<nK.length;o++){var s=nK[o];tq(e[s])&&(e[s]=nJ[s])}var l=tY(e)||tJ(e);if(l)return n8.invalid(l);var d=function(e){if(void 0===eu&&(eu=tN.now()),"iana"!==e.type)return e.offset(eu);var t=e.name,i=n4.get(t);return void 0===i&&(i=e.offset(eu),n4.set(t,i)),i}(a),c=nV(ii(e),d,a);i=c[0],n=c[1]}return new n8({ts:i,zone:a,loc:r,o:n})}function n3(e,t,i){var n=!!tq(i.round)||i.round,a=tq(i.rounding)?"trunc":i.rounding,r=function(e,r){return e=t9(e,n||i.calendary?0:2,i.calendary?"round":a),t.loc.clone(i).relFormatter(i).format(e,r)},o=function(n){return i.calendary?t.hasSame(e,n)?0:t.startOf(n).diff(e.startOf(n),n).get(n):t.diff(e,n).get(n)};if(i.unit)return r(o(i.unit),i.unit);for(var s,l=eD(i.units);!(s=l()).done;){var d=s.value,c=o(d);if(Math.abs(c)>=1)return r(c,d)}return r(e>t?-0:0,i.units[i.units.length-1])}function n6(e){var t,i={};return e.length>0&&"object"==typeof e[e.length-1]?(i=e[e.length-1],t=Array.from(e).slice(0,e.length-1)):t=Array.from(e),[i,t]}var n4=new Map,n8=function(e){function t(e){var t=e.zone||tN.defaultZone,i=e.invalid||(Number.isNaN(e.ts)?new tI("invalid input"):null)||(t.isValid?null:nH(t));this.ts=tq(e.ts)?tN.now():e.ts;var n=null,a=null;if(!i)if(e.old&&e.old.ts===this.ts&&e.old.zone.equals(t)){var r=[e.old.c,e.old.o];n=r[0],a=r[1]}else{var o=tZ(e.o)&&!e.old?e.o:t.offset(this.ts);n=(i=Number.isNaN((n=nW(this.ts,o)).year)?new tI("invalid input"):null)?null:n,a=i?null:o}this._zone=t,this.loc=e.loc||ty.create(),this.invalid=i,this.weekData=null,this.localWeekData=null,this.c=n,this.o=a,this.isLuxonDateTime=!0}t.now=function(){return new t({})},t.local=function(){var e=n6(arguments),t=e[0],i=e[1];return n1({year:i[0],month:i[1],day:i[2],hour:i[3],minute:i[4],second:i[5],millisecond:i[6]},t)},t.utc=function(){var e=n6(arguments),t=e[0],i=e[1],n=i[0],a=i[1],r=i[2],o=i[3],s=i[4],l=i[5],d=i[6];return t.zone=tg.utcInstance,n1({year:n,month:a,day:r,hour:o,minute:s,second:l,millisecond:d},t)},t.fromJSDate=function(e,i){void 0===i&&(i={});var n="[object Date]"===Object.prototype.toString.call(e)?e.valueOf():NaN;if(Number.isNaN(n))return t.invalid("invalid input");var a=tb(i.zone,tN.defaultZone);return a.isValid?new t({ts:n,zone:a,loc:ty.fromObject(i)}):t.invalid(nH(a))},t.fromMillis=function(e,i){if(void 0===i&&(i={}),tZ(e))if(e<-864e13||e>864e13)return t.invalid("Timestamp out of range");else return new t({ts:e,zone:tb(i.zone,tN.defaultZone),loc:ty.fromObject(i)});throw new eC("fromMillis requires a numerical input, but received a "+typeof e+" with value "+e)},t.fromSeconds=function(e,i){if(void 0===i&&(i={}),tZ(e))return new t({ts:1e3*e,zone:tb(i.zone,tN.defaultZone),loc:ty.fromObject(i)});throw new eC("fromSeconds requires a numerical input")},t.fromObject=function(e,i){void 0===i&&(i={}),e=e||{};var n,a,r,o,s,l,d,c,u,h=tb(i.zone,tN.defaultZone);if(!h.isValid)return t.invalid(nH(h));var m=ty.fromObject(i),f=ic(e,n2),v=tQ(f,m),y=v.minDaysInFirstWeek,p=v.startOfWeek,g=tN.now(),w=tq(i.specificOffset)?h.offset(g):i.specificOffset,b=!tq(f.ordinal),A=!tq(f.year),k=!tq(f.month)||!tq(f.day),D=A||k,F=f.weekYear||f.weekNumber;if((D||b)&&F)throw new eT("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(k&&b)throw new eT("Can't mix ordinal dates with month/day");var E,_,x=F||f.weekday&&!D,T=nW(g,w);x?(E=nG,_=nq,T=tW(T,y,p)):b?(E=nX,_=nZ,T=tU(T)):(E=nK,_=nJ);for(var S,C=!1,M=eD(E);!(S=M()).done;){var O=S.value;tq(f[O])?C?f[O]=_[O]:f[O]=T[O]:C=!0}var B=(x?(n=f,void 0===(a=y)&&(a=4),void 0===(r=p)&&(r=1),o=tK(n.weekYear),s=t3(n.weekNumber,1,ir(n.weekYear,a,r)),l=t3(n.weekday,1,7),o?s?!l&&tz("weekday",n.weekday):tz("week",n.weekNumber):tz("weekYear",n.weekYear)):b?(d=tK(f.year),c=t3(f.ordinal,1,ie(f.year)),d?!c&&tz("ordinal",f.ordinal):tz("year",f.year)):tY(f))||tJ(f);if(B)return t.invalid(B);var N=(u=x?tP(f,y,p):b?tj(f):f,nV(ii(u),w,h)),I=new t({ts:N[0],zone:h,o:N[1],loc:m});return f.weekday&&D&&e.weekday!==I.weekday?t.invalid("mismatched weekday","you can't specify both a weekday of "+f.weekday+" and a date of "+I.toISO()):I.isValid?I:t.invalid(I.invalid)},t.fromISO=function(e,t){void 0===t&&(t={});var i=iB(e,[i4,i7],[i8,ne],[i5,nt],[i9,ni]);return nU(i[0],i[1],t,"ISO 8601",e)},t.fromRFC2822=function(e,t){void 0===t&&(t={});var i=iB(e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim(),[iG,iX]);return nU(i[0],i[1],t,"RFC 2822",e)},t.fromHTTP=function(e,t){void 0===t&&(t={});var i=iB(e,[i0,i3],[i2,i3],[i1,i6]);return nU(i[0],i[1],t,"HTTP",t)},t.fromFormat=function(e,i,n){if(void 0===n&&(n={}),tq(e)||tq(i))throw new eC("fromFormat requires an input string and a format");var a,r=n,o=r.locale,s=r.numberingSystem,l=[(a=nN(ty.fromOpts({locale:void 0===o?null:o,numberingSystem:void 0===s?null:s,defaultToEN:!0}),e,i)).result,a.zone,a.specificOffset,a.invalidReason],d=l[0],c=l[1],u=l[2],h=l[3];return h?t.invalid(h):nU(d,c,n,"format "+i,e,u)},t.fromString=function(e,i,n){return void 0===n&&(n={}),t.fromFormat(e,i,n)},t.fromSQL=function(e,t){void 0===t&&(t={});var i=iB(e,[na,i7],[nr,no]);return nU(i[0],i[1],t,"SQL",e)},t.invalid=function(e,i){if(void 0===i&&(i=null),!e)throw new eC("need to specify a reason the DateTime is invalid");var n=e instanceof tI?e:new tI(e,i);if(!tN.throwOnInvalid)return new t({invalid:n});throw new eE(n)},t.isDateTime=function(e){return e&&e.isLuxonDateTime||!1},t.parseFormatForOpts=function(e,t){void 0===t&&(t={});var i=nI(e,ty.fromObject(t));return i?i.map(function(e){return e?e.val:null}).join(""):null},t.expandFormat=function(e,t){return void 0===t&&(t={}),nO(iS.parseFormat(e),ty.fromObject(t)).map(function(e){return e.val}).join("")},t.resetCache=function(){eu=void 0,n4.clear()};var i=t.prototype;return i.get=function(e){return this[e]},i.getPossibleOffsets=function(){if(!this.isValid||this.isOffsetFixed)return[this];var e=ii(this.c),t=this.zone.offset(e-864e5),i=this.zone.offset(e+864e5),n=this.zone.offset(e-6e4*t),a=this.zone.offset(e-6e4*i);if(n===a)return[this];var r=e-6e4*n,o=e-6e4*a,s=nW(r,n),l=nW(o,a);return s.hour===l.hour&&s.minute===l.minute&&s.second===l.second&&s.millisecond===l.millisecond?[n$(this,{ts:r}),n$(this,{ts:o})]:[this]},i.resolvedLocaleOptions=function(e){void 0===e&&(e={});var t=iS.create(this.loc.clone(e),e).resolvedOptions(this);return{locale:t.locale,numberingSystem:t.numberingSystem,outputCalendar:t.calendar}},i.toUTC=function(e,t){return void 0===e&&(e=0),void 0===t&&(t={}),this.setZone(tg.instance(e),t)},i.toLocal=function(){return this.setZone(tN.defaultZone)},i.setZone=function(e,i){var n=void 0===i?{}:i,a=n.keepLocalTime,r=n.keepCalendarTime;if((e=tb(e,tN.defaultZone)).equals(this.zone))return this;if(!e.isValid)return t.invalid(nH(e));var o=this.ts;if(void 0!==a&&a||void 0!==r&&r){var s,l,d=e.offset(this.ts);o=(s=this.toObject(),l=e,nV(ii(s),d,l))[0]}return n$(this,{ts:o,zone:e})},i.reconfigure=function(e){var t=void 0===e?{}:e,i=t.locale,n=t.numberingSystem,a=t.outputCalendar;return n$(this,{loc:this.loc.clone({locale:i,numberingSystem:n,outputCalendar:a})})},i.setLocale=function(e){return this.reconfigure({locale:e})},i.set=function(e){if(!this.isValid)return this;var t,i,n,a,r=ic(e,n2),o=tQ(r,this.loc),s=o.minDaysInFirstWeek,l=o.startOfWeek,d=!tq(r.weekYear)||!tq(r.weekNumber)||!tq(r.weekday),c=!tq(r.ordinal),u=!tq(r.year),h=!tq(r.month)||!tq(r.day),m=r.weekYear||r.weekNumber;if((u||h||c)&&m)throw new eT("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(h&&c)throw new eT("Can't mix ordinal dates with month/day");d?a=tP(ev({},tW(this.c,s,l),r),s,l):tq(r.ordinal)?(a=ev({},this.toObject(),r),tq(r.day)&&(a.day=Math.min(it(a.year,a.month),a.day))):a=tj(ev({},tU(this.c),r));var f=(t=a,i=this.o,n=this.zone,nV(ii(t),i,n));return n$(this,{ts:f[0],o:f[1]})},i.plus=function(e){return this.isValid?n$(this,nP(this,np.fromDurationLike(e))):this},i.minus=function(e){return this.isValid?n$(this,nP(this,np.fromDurationLike(e).negate())):this},i.startOf=function(e,t){var i=(void 0===t?{}:t).useLocaleWeeks;if(!this.isValid)return this;var n={},a=np.normalizeUnit(e);switch(a){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0}if("weeks"===a)if(void 0!==i&&i){var r=this.loc.getStartOfWeek();this.weekday<r&&(n.weekNumber=this.weekNumber-1),n.weekday=r}else n.weekday=1;return"quarters"===a&&(n.month=(Math.ceil(this.month/3)-1)*3+1),this.set(n)},i.endOf=function(e,t){var i;return this.isValid?this.plus(((i={})[e]=1,i)).startOf(e,t).minus(1):this},i.toFormat=function(e,t){return void 0===t&&(t={}),this.isValid?iS.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this,e):nL},i.toLocaleString=function(e,t){return void 0===e&&(e=eI),void 0===t&&(t={}),this.isValid?iS.create(this.loc.clone(t),e).formatDateTime(this):nL},i.toLocaleParts=function(e){return void 0===e&&(e={}),this.isValid?iS.create(this.loc.clone(e),e).formatDateTimeParts(this):[]},i.toISO=function(e){var t=void 0===e?{}:e,i=t.format,n=t.suppressSeconds,a=t.suppressMilliseconds,r=t.includeOffset,o=t.extendedZone,s=t.precision,l=void 0===s?"milliseconds":s;if(!this.isValid)return null;l=n0(l);var d="extended"===(void 0===i?"extended":i),c=nQ(this,d,l);return nK.indexOf(l)>=3&&(c+="T"),c+=nY(this,d,void 0!==n&&n,void 0!==a&&a,void 0===r||r,void 0!==o&&o,l)},i.toISODate=function(e){var t=void 0===e?{}:e,i=t.format,n=t.precision;return this.isValid?nQ(this,"extended"===(void 0===i?"extended":i),n0(void 0===n?"day":n)):null},i.toISOWeekDate=function(){return nj(this,"kkkk-'W'WW-c")},i.toISOTime=function(e){var t=void 0===e?{}:e,i=t.suppressMilliseconds,n=t.suppressSeconds,a=t.includeOffset,r=t.includePrefix,o=t.extendedZone,s=t.format,l=t.precision,d=void 0===l?"milliseconds":l;return this.isValid?(d=n0(d),(void 0!==r&&r&&nK.indexOf(d)>=3?"T":"")+nY(this,"extended"===(void 0===s?"extended":s),void 0!==n&&n,void 0!==i&&i,void 0===a||a,void 0!==o&&o,d)):null},i.toRFC2822=function(){return nj(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)},i.toHTTP=function(){return nj(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")},i.toSQLDate=function(){return this.isValid?nQ(this,!0):null},i.toSQLTime=function(e){var t=void 0===e?{}:e,i=t.includeOffset,n=void 0===i||i,a=t.includeZone,r=void 0!==a&&a,o=t.includeOffsetSpace,s="HH:mm:ss.SSS";return(r||n)&&((void 0===o||o)&&(s+=" "),r?s+="z":n&&(s+="ZZ")),nj(this,s,!0)},i.toSQL=function(e){return(void 0===e&&(e={}),this.isValid)?this.toSQLDate()+" "+this.toSQLTime(e):null},i.toString=function(){return this.isValid?this.toISO():nL},i[e]=function(){return this.isValid?"DateTime { ts: "+this.toISO()+", zone: "+this.zone.name+", locale: "+this.locale+" }":"DateTime { Invalid, reason: "+this.invalidReason+" }"},i.valueOf=function(){return this.toMillis()},i.toMillis=function(){return this.isValid?this.ts:NaN},i.toSeconds=function(){return this.isValid?this.ts/1e3:NaN},i.toUnixInteger=function(){return this.isValid?Math.floor(this.ts/1e3):NaN},i.toJSON=function(){return this.toISO()},i.toBSON=function(){return this.toJSDate()},i.toObject=function(e){if(void 0===e&&(e={}),!this.isValid)return{};var t=ev({},this.c);return e.includeConfig&&(t.outputCalendar=this.outputCalendar,t.numberingSystem=this.loc.numberingSystem,t.locale=this.loc.locale),t},i.toJSDate=function(){return new Date(this.isValid?this.ts:NaN)},i.diff=function(e,t,i){if(void 0===t&&(t="milliseconds"),void 0===i&&(i={}),!this.isValid||!e.isValid)return np.invalid("created by diffing an invalid DateTime");var n,a,r,o,s,l,d,c,u,h,m,f=ev({locale:this.locale,numberingSystem:this.numberingSystem},i),v=(Array.isArray(n=t)?n:[n]).map(np.normalizeUnit),y=e.valueOf()>this.valueOf(),p=y?this:e,g=y?e:this,w=(s=(o=function(e,t,i){for(var n,a,r=[["years",function(e,t){return t.year-e.year}],["quarters",function(e,t){return t.quarter-e.quarter+(t.year-e.year)*4}],["months",function(e,t){return t.month-e.month+(t.year-e.year)*12}],["weeks",function(e,t){var i=nA(e,t);return(i-i%7)/7}],["days",nA]],o={},s=e,l=0;l<r.length;l++){var d=r[l],c=d[0],u=d[1];i.indexOf(c)>=0&&(n=c,o[c]=u(e,t),(a=s.plus(o))>t?(o[c]--,(e=s.plus(o))>t&&(a=e,o[c]--,e=s.plus(o))):e=a)}return[e,o,a,n]}(p,g,v))[0],l=o[1],d=o[2],c=o[3],u=g-s,0===(h=v.filter(function(e){return["hours","minutes","seconds","milliseconds"].indexOf(e)>=0})).length&&(d<g&&(d=s.plus(((a={})[c]=1,a))),d!==s&&(l[c]=(l[c]||0)+u/(d-s))),m=np.fromObject(l,f),h.length>0?(r=np.fromMillis(u,f)).shiftTo.apply(r,h).plus(m):m);return y?w.negate():w},i.diffNow=function(e,i){return void 0===e&&(e="milliseconds"),void 0===i&&(i={}),this.diff(t.now(),e,i)},i.until=function(e){return this.isValid?nw.fromDateTimes(this,e):this},i.hasSame=function(e,t,i){if(!this.isValid)return!1;var n=e.valueOf(),a=this.setZone(e.zone,{keepLocalTime:!0});return a.startOf(t,i)<=n&&n<=a.endOf(t,i)},i.equals=function(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)},i.toRelative=function(e){if(void 0===e&&(e={}),!this.isValid)return null;var i=e.base||t.fromObject({},{zone:this.zone}),n=e.padding?this<i?-e.padding:e.padding:0,a=["years","months","days","hours","minutes","seconds"],r=e.unit;return Array.isArray(e.unit)&&(a=e.unit,r=void 0),n3(i,this.plus(n),ev({},e,{numeric:"always",units:a,unit:r}))},i.toRelativeCalendar=function(e){return(void 0===e&&(e={}),this.isValid)?n3(e.base||t.fromObject({},{zone:this.zone}),this,ev({},e,{numeric:"auto",units:["years","months","days"],calendary:!0})):null},t.min=function(){for(var e=arguments.length,i=Array(e),n=0;n<e;n++)i[n]=arguments[n];if(!i.every(t.isDateTime))throw new eC("min requires all arguments be DateTimes");return t0(i,function(e){return e.valueOf()},Math.min)},t.max=function(){for(var e=arguments.length,i=Array(e),n=0;n<e;n++)i[n]=arguments[n];if(!i.every(t.isDateTime))throw new eC("max requires all arguments be DateTimes");return t0(i,function(e){return e.valueOf()},Math.max)},t.fromFormatExplain=function(e,t,i){void 0===i&&(i={});var n=i,a=n.locale,r=n.numberingSystem;return nN(ty.fromOpts({locale:void 0===a?null:a,numberingSystem:void 0===r?null:r,defaultToEN:!0}),e,t)},t.fromStringExplain=function(e,i,n){return void 0===n&&(n={}),t.fromFormatExplain(e,i,n)},t.buildFormatParser=function(e,t){void 0===t&&(t={});var i=t,n=i.locale,a=i.numberingSystem;return new nB(ty.fromOpts({locale:void 0===n?null:n,numberingSystem:void 0===a?null:a,defaultToEN:!0}),e)},t.fromFormatParser=function(e,i,n){if(void 0===n&&(n={}),tq(e)||tq(i))throw new eC("fromFormatParser requires an input string and a format parser");var a=n,r=a.locale,o=a.numberingSystem,s=ty.fromOpts({locale:void 0===r?null:r,numberingSystem:void 0===o?null:o,defaultToEN:!0});if(!s.equals(i.locale))throw new eC("fromFormatParser called with a locale of "+s+", but the format parser was created for "+i.locale);var l=i.explainFromTokens(e),d=l.result,c=l.zone,u=l.specificOffset,h=l.invalidReason;return h?t.invalid(h):nU(d,c,n,"format "+i.format,e,u)},ef(t,[{key:"isValid",get:function(){return null===this.invalid}},{key:"invalidReason",get:function(){return this.invalid?this.invalid.reason:null}},{key:"invalidExplanation",get:function(){return this.invalid?this.invalid.explanation:null}},{key:"locale",get:function(){return this.isValid?this.loc.locale:null}},{key:"numberingSystem",get:function(){return this.isValid?this.loc.numberingSystem:null}},{key:"outputCalendar",get:function(){return this.isValid?this.loc.outputCalendar:null}},{key:"zone",get:function(){return this._zone}},{key:"zoneName",get:function(){return this.isValid?this.zone.name:null}},{key:"year",get:function(){return this.isValid?this.c.year:NaN}},{key:"quarter",get:function(){return this.isValid?Math.ceil(this.c.month/3):NaN}},{key:"month",get:function(){return this.isValid?this.c.month:NaN}},{key:"day",get:function(){return this.isValid?this.c.day:NaN}},{key:"hour",get:function(){return this.isValid?this.c.hour:NaN}},{key:"minute",get:function(){return this.isValid?this.c.minute:NaN}},{key:"second",get:function(){return this.isValid?this.c.second:NaN}},{key:"millisecond",get:function(){return this.isValid?this.c.millisecond:NaN}},{key:"weekYear",get:function(){return this.isValid?nz(this).weekYear:NaN}},{key:"weekNumber",get:function(){return this.isValid?nz(this).weekNumber:NaN}},{key:"weekday",get:function(){return this.isValid?nz(this).weekday:NaN}},{key:"isWeekend",get:function(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}},{key:"localWeekday",get:function(){return this.isValid?nR(this).weekday:NaN}},{key:"localWeekNumber",get:function(){return this.isValid?nR(this).weekNumber:NaN}},{key:"localWeekYear",get:function(){return this.isValid?nR(this).weekYear:NaN}},{key:"ordinal",get:function(){return this.isValid?tU(this.c).ordinal:NaN}},{key:"monthShort",get:function(){return this.isValid?nb.months("short",{locObj:this.loc})[this.month-1]:null}},{key:"monthLong",get:function(){return this.isValid?nb.months("long",{locObj:this.loc})[this.month-1]:null}},{key:"weekdayShort",get:function(){return this.isValid?nb.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}},{key:"weekdayLong",get:function(){return this.isValid?nb.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}},{key:"offset",get:function(){return this.isValid?+this.o:NaN}},{key:"offsetNameShort",get:function(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}},{key:"offsetNameLong",get:function(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}},{key:"isOffsetFixed",get:function(){return this.isValid?this.zone.isUniversal:null}},{key:"isInDST",get:function(){return!this.isOffsetFixed&&(this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset)}},{key:"isInLeapYear",get:function(){return t7(this.year)}},{key:"daysInMonth",get:function(){return it(this.year,this.month)}},{key:"daysInYear",get:function(){return this.isValid?ie(this.year):NaN}},{key:"weeksInWeekYear",get:function(){return this.isValid?ir(this.weekYear):NaN}},{key:"weeksInLocalWeekYear",get:function(){return this.isValid?ir(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}}],[{key:"DATE_SHORT",get:function(){return eI}},{key:"DATE_MED",get:function(){return eL}},{key:"DATE_MED_WITH_WEEKDAY",get:function(){return eH}},{key:"DATE_FULL",get:function(){return ez}},{key:"DATE_HUGE",get:function(){return eR}},{key:"TIME_SIMPLE",get:function(){return e$}},{key:"TIME_WITH_SECONDS",get:function(){return eV}},{key:"TIME_WITH_SHORT_OFFSET",get:function(){return eW}},{key:"TIME_WITH_LONG_OFFSET",get:function(){return eP}},{key:"TIME_24_SIMPLE",get:function(){return eU}},{key:"TIME_24_WITH_SECONDS",get:function(){return ej}},{key:"TIME_24_WITH_SHORT_OFFSET",get:function(){return eQ}},{key:"TIME_24_WITH_LONG_OFFSET",get:function(){return eY}},{key:"DATETIME_SHORT",get:function(){return eJ}},{key:"DATETIME_SHORT_WITH_SECONDS",get:function(){return eq}},{key:"DATETIME_MED",get:function(){return eZ}},{key:"DATETIME_MED_WITH_SECONDS",get:function(){return eK}},{key:"DATETIME_MED_WITH_WEEKDAY",get:function(){return eG}},{key:"DATETIME_FULL",get:function(){return eX}},{key:"DATETIME_FULL_WITH_SECONDS",get:function(){return e0}},{key:"DATETIME_HUGE",get:function(){return e2}},{key:"DATETIME_HUGE_WITH_SECONDS",get:function(){return e1}}]),t}(Symbol.for("nodejs.util.inspect.custom"));function n5(e){if(n8.isDateTime(e))return e;if(e&&e.valueOf&&tZ(e.valueOf()))return n8.fromJSDate(e);if(e&&"object"==typeof e)return n8.fromObject(e);throw new eC("Unknown datetime argument: "+e+", of type "+typeof e)}eh.DateTime=n8,eh.Duration=np,eh.FixedOffsetZone=tg,eh.IANAZone=e7,eh.Info=nb,eh.Interval=nw,eh.InvalidZone=tw,eh.Settings=tN,eh.SystemZone=e4,eh.VERSION="3.7.2",eh.Zone=e3;var n9=o`
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
        --event-padding: 10px;
        --event-border-width: 5px;
        --event-border-radius: 5px;
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
        --event-border-width: 2px;
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

    .calendar-filters {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
    }

    .view-selector {
        display: flex;
        gap: 4px;
        flex-wrap: wrap;
    }

    .filter-btn {
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 6px 14px;
        border: 2px solid var(--cal-color, #888);
        border-radius: var(--skylight-btn-radius);
        background: transparent;
        color: var(--primary-text-color, #333);
        cursor: pointer;
        font-family: var(--skylight-font);
        font-size: 0.9em;
        transition: background 0.2s, color 0.2s;
        white-space: nowrap;
    }

    .filter-btn:hover {
        background: color-mix(in srgb, var(--cal-color, #888) 20%, transparent);
    }

    .filter-btn.active {
        background: var(--cal-color, #888);
        color: white;
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
        gap: var(--days-spacing);
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
        width: calc((100% - (var(--days-columns) - 1) * var(--days-spacing)) / var(--days-columns));
        margin: 0 0 var(--days-spacing) 0;
        border-right: 1px solid var(--divider-color, rgba(0,0,0,0.08));
        border-bottom: 1px solid var(--divider-color, rgba(0,0,0,0.08));
    }

    .container .day.today .date .number {
        background-color: #f0a030;
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
        font-weight: bold;
        text-transform: capitalize;
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

    .container .day .events .event {
        display: flex;
        border-left: var(--event-border-width) solid var(--border-color, var(--divider-color, #ffffff));
        cursor: pointer;
    }

    /* ── Multi-day banner events: continuous strip across day columns ── */
    .container .day .events .event.banner {
        position: relative;
        z-index: 1;
    }

    /* Bleed over the column gap and the day border to join the next slice */
    .container .day .events .event.banner-start,
    .container .day .events .event.banner-middle {
        margin-right: calc(-1 * var(--days-spacing) - 1px);
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .container .day .events .event.banner-middle,
    .container .day .events .event.banner-end {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-left-width: 0 !important;
    }

    /* Slices carrying the label paint above the following empty slices so
       the text can overflow across the band */
    .container .day .events .event.banner-start,
    .container .day .events .event.banner-rowstart {
        z-index: 2;
    }

    .container .day .events .event.banner .inner {
        overflow: visible;
        min-width: 0;
    }

    .container .day .events .event.banner .title {
        white-space: nowrap;
        overflow: visible;
    }

    .container .day .events .event .additionalColor {
        width: var(--event-border-width);
        background-color: var(--event-additional-color);
    }

    .container .day .events .event .icon {
        padding: var(--event-padding);
    }

    .container .day .events .event .inner {
        flex-grow: 1;
        padding: var(--event-padding);
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
            align-items: center;
            justify-content: space-between;
            margin-bottom: 8px;
        }
        .selected-day-date {
            font-size: 1.1em;
            font-weight: bold;
            color: var(--primary-text-color);
            text-transform: capitalize;
        }
        .selected-day-events .add-event {
            opacity: 0.5;
        }
        .selected-day-list {
            display: flex;
            flex-direction: column;
            gap: 6px;
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

    /* ── Tap-only time picker (hour grid + minutes) ── */
    .create-event-form .field-row-icon.slots {
        align-items: flex-start;
    }
    .create-event-form .field-row-icon.slots > .field-icon {
        margin-top: 8px;
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
            min-height: 52px;
            font-size: 1.05em;
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
        /* Text fields you handwrite into need a tall ink area (Windows Ink) */
        .create-event-form input[type="text"].form-input {
            min-height: 200px;
            font-size: 1.3em;
        }
        /* Keep the leading icon and clear button at the top of the tall field */
        .create-event-form .with-icon > .field-icon,
        .create-event-form .input-clear,
        .create-event-form .location-maps-icon {
            top: 26px;
            transform: none;
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

    /* ── Small touch screens (phones): hide navigation arrows, swipe
       replaces them. Larger touch devices (Windows tablets, wall-mounted
       displays) keep the arrows alongside swipe/pen navigation. ── */
    @media (any-pointer: coarse) and (max-width: 768px) {
        .container .navigation ul li:first-child,
        .container .navigation ul li:last-child {
            display: none;
        }
    }
`,n7={};n7="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAHlBMVEUAAADL2%2FvK2%2FrH2fnI2vrG2PrJ2%2FvL3fzI3PzG2vz01DCXAAAAB3RSTlMAFzNfjrze%2FOgtNAAAAZBJREFUeNrt2UtuwzAMBFBR%2FN%2F%2Fwm2KFkSbOlJMz84PWQ8tUowDZNxut300WdQIFM7qXwSTbv4tx%2FWmemFQPOwApF4ABxD%2FLWhcicz%2F0HEl9icT0B7YiNWfCSAfdYfMSyHs83tg5lsUcD8hIyA%2FMDEDLoQZQAE0CFFAwQWmgwsYuMB0cAEFFyAHF2B%2FhTAjLhPcIWdwh1wwd6jY6PIF8Aj6U56%2BIP0ZY4cgDu6R%2BkIItEB8Qn5RxAOPjlzmh6EKxA%2BGtCiKjQaNw%2FQirQKf%2Fg8vndeOxA4dp3Fs6GzbjC0%2Bx0kUm2iclLHHqHGNthhoysWwQ8jTXbLYloTpUXEG9ago6B6VnKBlLkrII%2BTjIwQ8Qj6ETtQR8lsY09hGuZ9f3HhevAv5V7gJT7pqnfNAhLv1m5Qv0Vjg7MQnjyXp5Evv90WuaGsbckkb%2B5bZyF92KUsvv0gehDfnWzgj38LjTWT5BqPxPgY9fiHNLUrjrKm5pHN0TAXFF2LLA%2FUyayKWfKJM1%2F%2Fdq2amKsKTxu122%2FYBlItVl6a3MA0AAAAASUVORK5CYII%3D";var ae={};ae="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAHlBMVEUAAADr6%2Bvk5OTn5%2Bfo6Ojo6Ojq6urp6enm5ubf3991rVFGAAAABnRSTlMAIj93rtiU3SZWAAAB6UlEQVR42u2Y247CMBBDc5ux8%2F8%2FvFrQ0otpSdIi7UNOJNQnH5yJQkWYTCaTyWTy74m5GN0dtJJjuJlsvsNyuI1o%2FpYSvxrvgNsNiuJHAICXcI3kx%2BBJuvfrq8EvTNu8QQDYl%2FIdFw3mrQK3r%2BQ7Fsqt89V893z5fCrYGFLow%2FsEAO%2FYIBWMjiF6vwAxtGMjAru7gBBvLzA8BR8TeGgkj%2BUDrCT8F1rJ6foOqaCSeOHlwDGaDzwEayxdOkPaQAywODQC4NiAHVKi3CcgCCD3zxiHAq1AMbArXwWVmwa6SxgX4JH%2FMiyS2HVKcd6AJHcNYD0CnFDXhkVCpPYtAj41WAwEoRXYl6%2BCJ9sG6wrWE6%2BCxfBcepeXnnwV8MWmAVquCnziNYFVB70xYk%2B8CtYsDYj84RihhW0BctVgLbDmdB0BdywNyuEQ0AwrhbdvNRikUvkrsBEUCM0FFOhLTcQQq7hdB%2FlRsOEdgq6HdCeIvLGAXEaDUyCJExi2cECAF5SFshMk9uefksKOfCGfuiwI1ieQRykwbNBQyrLwDhvLJwTGcMnA3TP3K4UDMhvzTxswh0NS7d9%2BaZDDGYUQ%2BgqlcE60dgWlAS2Gj8RSOdaAlkIb2SqbC%2Fx91pJ6%2F1qurVjJOYXJZDKZTN7zA3Auaa9qRnCHAAAAAElFTkSuQmCC";var at={};at="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAOVBMVEUAAADHx8fKysrJycnIyMjHx8fGxsbDw8PBwcG%2Fv7%2FCwsLCwsK%2Bvr67u7u4uLi3t7e4uLi5ubm4uLhyXqCUAAAAE3RSTlMAFkaMtND6%2F%2F%2F%2FCGT%2F%2F7BAhezMkbzxVAAAAi9JREFUeAHtloeS2zAMRF0JrA60yv9%2FbBQagS2YpOj05PiS6zvYURk8Hv5vOp1Op9M5ns6XawjXy%2Fl0bM80c7oGIr5D4XrKZ4ihgCzTwPARKMFsHR%2FDS4axxWdKHM%2BBFNZ%2FqeN83GTwFdZ%2FimWKDMfTJZDBilZcTsfhniFmgPEKp0yREHS6vwK7jLCivQDbv2eYqFjgxkNiFHAevQKJKyJ4RpoKcNMbMt5yHWm83MZ0Q9ZMfLNANo90EvYAiNMmE9sLeH59KWdfkMtISwFjGQ8ZxkXACqSUiVItmJfbNJYXwzjdlrmeGVLmoHS6D1gh%2BgU%2BMNn8Gh%2Bkmelf2QdeB%2B0%2BSOPcFbD3AfCdPiAd76%2FA1JkiNl4voN0HOl0%2FIa6g6AIGqw%2Bi4IGI1ApsfMUHOt77oKGADZkqPgBQ9kFLQdYHcDeo5APZLZA9HwA1H1QLWnZ9uw863QfExq%2FwATt%2BgQ88OR94uN0HRskHWUT2fcBFsEKkPsgiiZoPeIOe%2FfFYcYaJRmJCtEBpKpDb%2BM0Hog5g%2B6fEjQ%2FknYLMrvdXAJ9pL0DWB%2B4Ykcs0FVR2PYz4q30wdB98Gh8M4w%2F5AErFB7aEwO%2F6AHf0a9YHbsk1%2BcCf%2Fe0L4HxAMMRo9AFW%2FBWkTw8fMPx8BTs%2BsLO%2FvwLWDiKvA%2FGAyz6whfa07AUVzAdbagWMxObsn%2B9wPmgqKO96ZCj4IO4VFM%2F%2BG%2BS7fLC366FIOROrBaVd333Q6XQ6nc4Xua9QVFRZEEsAAAAASUVORK5CYII%3D";var ai={};ai="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAIaklEQVR42u2dW2wUVRjHjxpjfPDFENEnE33wwRhfvQBt99qWmyCJkSC%2BmCCJ%2BGQkBmI0GhMTwqXljkChpSDdmeVWKxEtl4hxW6E7bdnS0hvdbbcXLi30Qrvs53x0D9My7U7nnG07szMn%2BWWTdnfo%2FH%2FnO%2BfM2dmF2M1udrOb3exmN7vZbbpbd3f3ax0dHeuj0agoU9fe3g5dXV2P6ezsBPwZ%2Fk5GxOfia4jd2Fsi8DoMmAc8Bh6L2G1qPV0jdF4Zol0ZMx68MkwhtCpsEYmGvZIhUFYBT4oQiVVbOBzOYAmSX4Aa%2FFuIlZqq18%2ByBPydZSZqOtYbR4AC%2Fm0knRsN36gC0loCDd%2FoAuTnpZ8EGr4ZBCRInxUSnojZwpefnx4TM11qmk3AGAnmXqLiCZhVAEI3%2BYgZGw496SDAlPMB7rPgSaeLAMRUe0e46kk3AaZZmqZj7zdVFaRj7zfVXIAnnK4C5GMZe0WEFy7pGv7YZWlzczM%2BIlTMk6jeo8brCXv4SZ0AlQQd%2B0wiyrDE8KMRCCsqAayrKhRhr34YK4BfgiICs0u78Z8hDB4J3MfEarC3HmZGAH2%2B6nXYidNiAmYIlUUAjwS1EF4J8kEsEb5KgEoCUwXwD0fyCy0jAJkgfA0J%2BoTgxGy6JShXqPxD0Fg4KkBZHZlKANcWQ7gRblWfZqgABgmaQpRHHIpMMQTx9uj%2BwHboDezmrQANCXoqQKkCw0%2FC3FvMrTUAghPuVB7kFTAZrBWgrwrQlpmCR6LRDhgqXw9QMh9uVxawC9CWoBU0%2FxY4PtFM4SN3rpUBiG6sAFYBSvDaMFUAMuWtCDOF3xlpgYelKwH8OXoFaI39eiohddsUuG41RfAJ7gV2AAgugBOLAEQn3KpgFqAX7QpQHvVdHctPNnzwSE9LEMCfLYe%2FkEUAW%2B9X0FMB%2BgTgRGzU0B8TbYcHf6wDED0Y%2FiiiAwWwvCHDw1QqQN9EjKaMfhV7t8aPY74SPlaBmCULOMjwliQ3qb8lBl9gWMJNED%2B9AifeRPi5iB4BrOGzLFHZBGC5GFXAwD%2BbAEQXDV4lgLn388NzLaBeDRkx%2FJ7GAIAfx%2F0cVgF6guOpBP73CLBkDCWgIwLDZ9cA%2BN0YOKsA7P0agXE9IqyrIHUV0IMZgb6qYgDBgWFrCJi13j%2Fl%2FSDTzQVdbfUQP7UM1%2F2sAlQhMTA7n08wQhUM%2Fv2jauJVIcgCApoC9ITG%2B5ia%2B1GxdGZTwq36S8nD9yOKAP7wUw9myH2%2F0Kz88e1tECv7VD3x%2BikqAbzhp3pSTrr%2BN%2FyqqO%2FKIQxWFfrkAg6ow2QYdqaj95tOQvfNUCLcbI3wc0YRMqG78gh7oKmvgHG931wSolEYPL8R93u0wlcQXXDv4g9wJ1QGfTUC3K0Woa%2FWPzk1fuitPckhTFsivS3FdBJu151LhJ%2BjCjw5Hhkvbs6pUMkTPfDg1EoaVqorgGHoYZiYp2VlEWmFeOnHGBCGqoPsBN7xiBTPeEoyoCt0QR08f8%2BfuU%2Fno2W8tE%2BlgHsVuwB8WTpCT4LonRhfBtwv34hBqXovY4%2FnDp%2F7rupU9J5oQwVuMWN4GoEzBo8IbogLHog0h1K1CuIZdlL%2FpX3snzbpgIGytZOEn80bvgIOPZVHIRKhvZarAhADfYGgIkLUe5NrV5Uf4JQSNkPo2vgcMPTbZ9AeiXBfB9DgDf1FIPSLWzVltDVA7OQHOGnyhK6NLxOidZeS7dto%2FhzPBTuYoYPX%2BupiKoXSczkfQHRyhq0d%2Fp2%2Fvoempib672ox7iOqyLSHDgAzRnivl4T3ecmtgmxPXPTG6JJxWvB74KHP3dF06dA7wWv1pLa2hjKT52wsAcHNuaTlwLLn46cWXwHRM33h47GPz4fo71%2BvrWqsJVLD1bFYV0Co8HPSU7hkPZyYntAp2Pv7D2Vcrite%2B2zwUjGRzh8Yi3UFhAP73wTBMTAakncK6AleCT%2Fucw437fC%2Be3XrEiJt9j6JdQX0Cit%2FjhVnNsSOukJajBx1Ig1yyHFV4Mnwu%2BD%2BwffzbubPJy3bM0mrGusKGDyc9fRIkYMMF06N2DHnHPB7BjFYbdwAggOGxcU3b5Tnz6kv304ayvMnwroCBorc5JGApNDwXUQO%2FyUQUYBW8C4AUaYkAzqLlq%2B6WldJgvVXZP6bCFuAZvhHXUQOF5mrCFCHTqECeguc56T8pU9Je1cRae8nk2ELSB6%2Bk8gBJwS458oMqgNXEz%2BeMdS%2Bc8Hb1%2FKySd02dzJsAUnDF1xjmSszKAPJccLdko9%2BailaTdqOrNLCFjBR%2BCM0fL0CRBeMFM%2B7fu3qmReqWq4TqVHSwhag6vnFifAZBMR9Lojsca2oFr8lUtkWIpVu0sIWMK7nFzswaCYB2PvvH8o6IW1bTIJbckn1Zo%2BMNzlWvhCjAlThswgQ3RA%2FntXXuXvBGzd3ZpK2nVlTxRaAAmj4rAJws63r7Fcbair8pO7fY3qwtoBH4dMxn1WA6IIHh98LXj%2Fz3fNVoQAJVl%2FQg4UFFLppz2cWgOHHSxyx5p3ZOVX5y4m0XTfWFTB4xE1AcHIIQBwwUDCvqCkvizTku0lDnksv1hUQ99FgdQrwOWEUB8TERT2t%2Fi9fbfZ9QVoFJqwrQA5RL3NlFAHyxNstrF53pfUGCbaEWLEFMAkQHNBf6AiEdn%2F4nFSygUgl37BiC2ASIE%2B8nfuyFgS3LSU1W7wcWPhCjFmA4IT%2BIte%2B8B433lkh4%2BHBFqBLgOAYiR13dl6v%2BPWVGulPUhs8y4stQAcvy0DXL841wYuFJFhZSqTASV4sLKDEqQcU8PpQUWaplLfkmeDWhUTakkukrdxYV8Dtg259FLhf7N7vfKtpVy5p3LUwVczgORv7f06xm93sZrn2P%2BHsOlkQh9N3AAAAAElFTkSuQmCC";var an={};an="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAyVBMVEUAAADCyKx%2FxLnk1s3ut00P3%2Fni19Mc6P%2Fvs0jk2tYq6P8n6P8n6P%2Fk29j71Uvs4%2BH0o0Po4tgC2%2Fv92kXl4d8E4f3%2BslD1pEL92T%2Fn5eT920b6p0Pr6uj9sE8P5%2F8F5v%2Fp6Ojh4OD%2B2kIL4f3r6uoH5f%2F9qkXq6urp6enr6OHo6Ojn5%2Bfm5ubk5OTr49Pj4uLh4eHd3d3r28Da2trz1pbW1dT32Gn92j792Tv81jv60z33v3jiwZr8tl7%2Fsk%2F%2FsEr%2Fr0f%2FrUUA5f%2BMUhpmAAAAJ3RSTlMABREdHyg1PElPT05PX19mhpOTm6SkrK29vs3P0dHX3uPl7O7x%2BPprAiJZAAAD3klEQVR42u2WbXuiOBSGk%2Foyurvasdrd2nZn1KLYEKtYHbFuZez%2F%2F1GbgM4jQkwA%2BdDrmvs7z03OyeFAfvNpKTfb94PBXbtZJgVAm4PVHm81aFJyYWqDFfA8b1C77Ou3V8d4glU74yFK153HnmU9djuNEj3k369OBJL79AZabVn2MZ0qRT7wMhrqlh3DalDSXicLvDZJQ7VnJzHutd7e3tar9alAkqLTtGsnMx7bLz9giAoG1Li1PVslEDzDAEFA07Q8lq0WSBbSkCAYGObbtkZgRwweKBvVx9IKxkxWCYJUNaI9Wy%2BQfVivIUhzU7u2ViCZy9saE9zlaAAEaLQHgXGXe6aCZyEQBs9LJ6jr8sEiMAjW4C5HhyHAEYQiSjtPByDAEUBo017TVhqBHeH5Zb74oR00S5Ovwbau6fkhPhsNgRLGrPo5QUOZzgRjLUzSpWlbIB6cTzl3mJmAPV4pBV1F%2FvO7Kwyc6QWhgaYa4zFzFlvXdSfcYcxIwDpGlwj58%2B329fXV1VaJ%2FaKeSjDZCIFgZi6wqLZEyOeLbShwpzoBuNY2GQV6eQ8FrjubMMN81jO8puIpvhH5vhTMZlOuEYCS2aCJ%2FLnM95dSMJ1OuKmgcf5TgQJN30V8IJhJwRkDA8qbSq2EDvuhwA0EOING0NU0ASPgHwmEQXkGJtB3uRobAT8imEi4kUC%2FMsfyG%2BGfCJQGdkJXtfTHR4gRiAskjl7QUgho%2F%2BgZLgsEgWyBysBOaSjXPt7fmfsxAQwaQYmo6OyfkCMQFUiDokoMoMfni8QcvvBPBIozmFUIlKwwf76NCKRBKkJgSD4AJWeocimQIwC2YDOdzmCI5GsWDgwzkb%2FwT%2FkZ4C9%2FzbSjEnSIhlKfv2yT83f%2FBZthJgWcJed3KdFBO5tYfMj7qyAUcM5ZQv5Y5Ospx%2BND5svDCbiExfJ5hxID%2Fo3Eg80yEMge8ACHRXD6dWJCM5IOtkspwAEkDEz6DUpMuIqFHzq8DAj6cEK%2F22qUiCF%2F%2F0zmK7kMNT85f0TJRaCj5PxdjVyGryNwLPhH%2BUY5Tob43Uj12195eqrkFux2ygL9Mfz4GP6ZS7CTPJBkvnwEfMks2O0pK0ZmGAqGV9kEuwOqEfj2sedbPsGInikQipRVoO7wLQS3eQTKEfgOwffsAoxAjCEEw0wCFKjIEj0QJRUIKtkFZaLm5pB%2FQzKBEVBA94Ybmlmg2wKV26en2wrJCDpcEBiBgsAIFCWoafZXXh40%2Bys3sRH4C%2FurCLC%2FclPM%2FgIF7S9QxP4CRX2cQWH7C%2Bj31%2BcsUa79BYrZX6C4%2FQX0%2B%2Bs3n4v%2FAbjVlbDYgcSfAAAAAElFTkSuQmCC";var aa={};aa="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAllBMVEUAAAC5usK8y84R4PrU2OUi6P%2FX3Onqokjd3eL0o0TY3%2BwC2%2FsJ5v%2FW3%2B4A4v0C2fn3p0bj5ObN3%2F3l5ef6qkcK5v%2Fl5ebO3ffp6er9rEYL4f0H5f%2Fq6urp6eno6Ojn5%2Bfk5OTh4eHp3c7U3vLb29vJ3PzH2vvt0rDF2PnW1tbC1Pfxw4n7uWf%2Fsk%2F%2FsEr%2Fr0f%2FrEQA5f%2F%2FZTw0AAAAHHRSTlMABxcqL0RLTGGGjpOeo6aprLW%2BxtDb3%2Bjq6%2B75KExeYQAAA41JREFUeNrtmNtS2zAQhleOcVJTt4SAMcSWHIjJiZjk%2FV%2BuYkm8BlsHLHTRab9huGH4P7S%2FxA7AP00QxSH4I7yuqioAX7CkeoN5m85dhXjLX1deBeyuQpxHFE6SWSZEOosnH9pMKsStZBbGWd5CJGHjfW4EEQwlatKJ7BR3XTWGZGh8mvdRpBE2%2FCwNLiWwad5PUeQJg2jdMsRD7mCaqwSSNIi3aBhccyhynaDgd9u24frL%2BbmaAsmf2obnL%2FYcCL0AWaPhuRpgYGluIeBrFJyOUF0HYM00NwkQsW0MSMycCyAB8l4DUSVRYCNJbQX8LCBsnl1kl09HaDnWElPdLDMKiK1kjWzfPpDQ2IC9gD9tO8RgIDbnE5%2B%2FKJ7ujC2bJmQgzyZ6RaiNJoESzrMINEyU6VxSGOFvTJltBZTPV6UQgpsFSKo2zBT55ctyYWPgJkPaK%2BBit18uF6U0cKMAmYIC0Z%2F%2FuJcCizPwBlXTZa%2BgfJECNFgLMmYeER1gtT8JFiYBMbEomQYk2aCg5Pp8IrO8pgU2vN%2FXJ4EwCIjA4qHRgOqzQGvg3DijsJtfvsh4FCykQGfgH0igD1b2PIG6JSCDSTAzlEAN1yQoEaHON7ccdp5A3RGUwkEA2ccbtKo7AoWBE9rfFlHRohkQCchgEMQKAUuLBtlw3REoDPwzE1AQ0s%2BPA%2BodERr0ggBUJOfvEE3DdE0Joc9PAdEMiYtmQCToTsl%2BQkSwwPxzwyQgyKDIz0BHKIoCB9RiT%2BxQ0TbwDhHoDQuZv6o%2F84rUjwsyKASJ%2BY9AGlArH9kt6dcS78%2BfgRGW7PrjDy%2BbpQQFuKP78hmYCXvikdWmWQ1v8E6%2BSMCGm%2F74w26zwQuFAuRTfBqBDeNuOrLftA7QNZTpBKxg3XQ6ALJswPPIz%2BmU%2FuNj5AqTu%2FyA72GsyL9n8C2w%2B9d%2BxvA9%2FDgQ7fwrUMAcTtZuWBUzengYOQiMA7qYH4%2FzC3fBjSr%2FiFy4Cg6KOx7Mj8g8cBMcVE%2Fg9nji1kEgb9M90wzIZUgyHVE1%2FJMEP2EIh3euQDsh5NZFwEDBnARzB8EYVPwiwa%2FhghtQMiLBaLggADWX5%2FxLGCzQb4FLl3wUmLbA6PfDw%2B8RDAQb9gk%2BAb8C5lkw1u4vd270%2B8udQLG%2FfEH7yxk%2F%2B4vwtL8IP%2FuL8LO%2FCE%2F7i%2FCzvwg%2F%2B4vwtL8Il%2F3lbvCbT%2FvrP38XfwAyJMdyHNNMWAAAAABJRU5ErkJggg%3D%3D";var ar={};ar="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAsVBMVEUAAAD5zEP0z2L81EPcxLb70z%2Fm29X93U%2F0wjH92kP2xjD93lLp4t%2F93Ej4yjPq5OL93Ev81D%2FkxIDt7Ov93Ef4zTPp49z%2B2Tv4yjL%2B3Uzs6%2Bv70jf72k7x8fHv7%2B%2Fu7u7x7uTx6c3m5eT15af44Yvo3L%2F43G393Ej920X920P920Lq05f92kH92j%2F92j392Tv92Tn92D7810L92Df71Dz70jX5zzTvyWD4yzP2xjPyvzPo8pfJAAAAHXRSTlMACRckL0dJVVdwdXmGl5yjo7zHy9PT2%2BLj5ejy%2Bq6%2BcVQAAAPvSURBVHja7ZnbdqpIEEALlOAlcmQO3hlo4gWNGo0KAf%2F%2Fw4bujmmHUho6PrrXinnb26oirqwEnjx5UhrdbHdtZ%2BRmjBy72zZ1eBya2XHCcLlavb%2B%2Fb75ZhU7H1OARGF03XHFEYEtZuV0DfonWHoXLDFEQAdYYNbVf6wsClFFbOWEyPQft6MLHx3Zkggo1O6R%2BaSBjY9cU3r4bhqwg2dEHw606hNYJwyqB3bZT6RK6E4oARxLYfTp6hfU7YZUAL%2BycWmn%2FKFQJ7Aa10n6FACpI9l%2F1Bpwyd9CEv8pTdCloIKMTKgY4HZBg5vxoQ5LAzpQc2JUFNsWB%2FaT40DbySzaEAnu7woKUAkVL0kbILz0BCuwHGtyjvVwiPRpAGtg37w%2BwRJTckAgUjdC8594csi%2FulwaKRhADhLNpQIjnkSCYztxDBhfLN8QYwE2MJcedBcS7JmCNjWArCewNuEWX6cMp8RBkyhPyDXG6N0%2FsUv%2BM6TFkdlkU9uPARAOMSbcTeHcJFrRwkG2IYwKmszwsiFcAWZzYFFvJhigdwDirme8VMzvRhGRDDAcQ%2BnJGHfLC56dkQ5SjjgLGwvfkLE6nz6yA%2FChgoECbeCUgvCALHI9NFOh7pQhOJ5qQDXBEV64Lh%2FQMfIaPwoANOf6WDRCXFSQDHJ2c%2F8UrzZQGOMKPAoNcYFw%2BQA6XAh5ABCYqFxBXYAmmpd%2FRABT4H69eFf6lEBJMF3SY%2FR4NQFHcEP4YZ4ncAGhFuqeMPz2xRH6AAXqGlAncKEschZ%2FhoBOoQ7JCxAsiYMM1f34V8IkbR1Em5X6OhX6MlfF9P0hY4TrQRA%2BRKj5lnUTRic1w%2FMZ4VMBnkEnCl3S8oD9oRf430zMtCHrwmCP7F8g5ja8DHXjIY%2BoLvrLCUSQa6MNa1S92lCbCn%2F%2FFS1f1C%2BZpmoiCBTnGin5BkAVEwYAcr4p%2BAUmzQhzzwgDy1BX8KJBkAV5oAaKv4McrinlhoAHiRUGPj0z9USQGUB3Bv8FaBIYa3KDuq%2BgFX%2FTGLBA34CavCnrB288JIhvu8FdRLzaUxFEc3f9jiD5W1vvkTAO5BSHqb0p6PsAlYEEB9bGCnTL%2FGaCnQRF6v4QdE5zZANSvQzHaHx%2FLpf6vi39YAyn1vo%2FM0v3wBXG%2FnJe%2BX4G39Y%2B%2FJ%2FwS6q%2Fjknaqp34aQPsvbvyznr8VM5%2Bvv4Q%2BsTSoRuMsIWXyNGH%2BSUPlXyznFJMg6Nu3a6BCY%2Fjt5C%2FJLTll2ABFtNYwvbYlMSKKhy22ffVEcmVjL1cgvQqGlSZMHuWJJ5YBj0BrWD32USAq2WF7VkODx6EbLcvuDSdJMhn2bKtl6PDkyZOy%2FAdXbwfjjFzP2wAAAABJRU5ErkJggg%3D%3D";var ao={};ao="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAS1BMVEUAAADO1fHO1ejZ4fLR2ezd5vbB0vXDzufS4vzP4PzN3vvV3fDk5%2B%2FAyerc5vfu7u7v7%2B%2Ft7e7k5eavwOrT2OO4y%2FDAzOi2ye%2B%2F0vYf7YBFAAAAGHRSTlMAByNNhqbMO%2F%2F%2F%2F2bRFP%2F%2F%2F%2Bv%2F%2F%2F%2F%2F9qxLSnpnAAACKklEQVR4Ae3U2YKzKgzA8QRBXECgdTnv%2F6RH%2B2V2LWLgzl%2Fn%2Bh8NOHDe7XZDUUlVY6G4Vk276voi9cps9U2HkJ1QW51UpfKkg8ws5Uu9QP%2BZL3IC1rS%2FKMhJN%2B1vAjKS1C91xKr5O0BCNqianQE65%2FPvDcC8%2FabcEcjmpdglrf72s37Gdk1TvcxXYNoDFrLo2yOYa0FHIAvVlh0g%2FmS7f3INqFuyMyPnC3R7cp0A5YfB%2BY1zw9C9ILAhxVuKf3JDngFV220TBr9j6CywmW43T3rgst3K%2BUMKgUd3XePfCQJY1PF6iNPAEe2vOBOw8XGOsSXt%2FAkB4SrjT1FwkfYnVSVfgLGkyvuyrxD8aQEuED6BhnTSJwtG9YK%2FoYjQ8zcUEap8d4jxb1x6DhOfoDyDc%2FEJhjfAKYgIrP6qKjfAvQQstSJH%2BkKH7D6EMtfUfbElPjRH4juyzH78pgZu35nsh%2BDIuVMWvH58ABhWP74i0Ix85JCJ4fVdDxHaMfIrATGSk%2FePZy0rYRHhEJpLeTI%2BN9NqPpxhw6U8vcDnAAuHxCM9T%2BaP%2FKThDREu1GlBNEHCW9ak1cnjcz8LRKB0iXHqr2J9oo07Wybjn%2BePj0jwmFOen2gZ0vLTpocUQo7j471xpPr6o%2FuZBJdnFMVXtYV0ejqtgktwmU5ZEK6yy%2FTfron%2B1t8igGQdQabFAhfq%2Bihfa4QsUMvp77NTPRe0ul%2BWep7rRfbaJsRvt9v%2Fh4jJKdZPEXkAAAAASUVORK5CYII%3D";var as={};as="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAATlBMVEUAAADj4%2BPp6enn5%2Bfp6enp6enp6enq6urm5ubm5ubg4ODg4ODm5ubo6Ojc3Nww6v8Y6P8T5%2F8m6P8H5v8A5f8L5v8N4PoF4f0C4P0D2%2FuDNJb%2FAAAAGnRSTlMAE2SS0e7%2F%2F7smT%2F%2F%2F%2F%2F0a6ehI%2F%2F%2FbMaX0k6g43vIAAAKLSURBVHgB7JjpmuQgCEVjiBdTgu%2F%2FtrMPX5uuoLSzT5%2F6f09xyb6984eTdjoymBm57OmHpxO4A%2BVHOs6DXwHOjx%2F17ws%2FA%2BD8Q6Ygfg4%2BwWU9%2F2BHAOTVejL7AvC5tF2%2BBz%2FAkNgBxtsNeU7AaXG%2FjmBp08SzAqYfvgDLXyipjAVLJZ0cEeCMbzgmyD94A4wrtYooM%2BdC%2B8w4FBXIF4PiM6w0dOSogJsJPsOUflBDRm0iYgJV7J7gERdIq51AlX7AWdwLai%2FQsngZ6tH2ydALnBlyXIBPAjPoN273oMF8E0gvQLoRhPNNIJ1AKS7AQCCdQM9oRRgKxPKdEXI8X7%2Fni7wUSOwwxT3SqhlURx1ROB9i8b1hn79UwKW%2BFMhoCQnBeMDyL4YytWUM0YvADPm5gBAItxtOhy9ICFJNYLgVbQeM6ACGe7FIigBcvwf2Bu%2BCWhDA4lRE7SfSn2g9STCN2u1Yr%2BTtFtLQADcC2u45fkC%2BpM0hBwpSyx8NEF%2BDky9pczklkv9aII9tQGqT%2FYQLMg55e37ZZqDq1uP0Q9MfQ8T5%2Fzrfv6M4quKCheJpvlAKfpDK1VvGJb1ZfMTxoNJaHdEmX6He%2BdheXR04DAQxGO7ANFrqv9DD1eyBSWH6Hv9wDLpB%2FTD0m2UcWWSTfZi2CsCimuzLtF4AgEXTW9WvFXxhkQSrwp8CtIKKRRDNxZ8Fn1hALIJkLrWCbywgFkEwF1hALCAWQTaXa4GbL0f%2FRXDz5eiDDDdfRMW%2BoXhBNV9kBcbXesFmUcSUc4pqebkfXCuxCLhWWhHMrNWEL%2FNF1tZKKYK2VkIRRLi4vwgSXNpfBAEu7C%2BCDJf3lNv7i85%2BkH2tzrloeC3ayx7vgDWcARqOBsEAAAAASUVORK5CYII%3D";var al={};al="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAARVBMVEUAAACy6fHl5eXq6uro6Ojm5ubp6enq6urm5ubi4uLj4%2BPf39%2Fo6Ojh4eES3%2FkP5%2F8k6f8M5%2F8G5v8A5f8G4f0C4P0E2%2FuRTESCAAAAF3RSTlMAEFuV5P%2F%2F%2F8EbLv%2F%2FjCngQ%2Fz%2F%2F6X0kyzJZw0AAAJ0SURBVHgB7NYHlqQ6DIVhOejKLsv7X27ndj0KrELAm%2FzNSZPuTz5Nv7h%2FQkyZISLIJQa6WE2QBZR65XyWFUi%2B0TVCkS2A5EoXSLINAKTQaVmMAMCBTqksdgByoxNuMocLClUMGCodxfsCEs7fXzMAPv982gEkOiDs34dU8iuOAPL5J8gO4EZe2RfIl5%2FAo9aYVURySX3P6SRvgD8KineiqdIT7A3ICHyQFMgSXPvjGvEIqCKSIfoD3NoioJpOvsXrQFsGtBx9y7BFVwHrHPhYYBT0S6QJde8D7R0vAwi07cA%2Bf%2BwzLwKa%2FAHMfAV4EdDqvUSY4XYv6F068sPK%2FCn6BL1j32MK7DgDZv2Pm%2BdFgx3gQe%2Fi%2Fk8FTK2tCsZNCHDOA2P%2BoVB2vcp4StukkGlTx2rcxo0f2IEKH2lfBeXBvERU4LKaf2d%2BLKrCQcfgqhDpilMYc8qs49fHH1WaCOw7AcU7fcQ01RV78TzQaa5csM%2BVDNlxgXS1bz5Drttg7HMg0409%2B%2BsAR3oitP3XB%2Bq5w0Ph4%2FuF9uhWgY197rRPKGwcv%2Fqv%2F1otrJv777C5zz2QR%2BiNGXMP661Xcguxl9yeyqXH%2BtpeXWQxDMNAAG0OYBL4%2Fjct%2BikrOS%2BacvvXEzDO4SP95VIynvHVRtTqVoa51fj7t75Qic8o9IWl0VVbZhm%2BsswehYYyyfBQAhNEproZNvsnSciIm2EjgRkyZTJD8TlSMupm2Oj7TVEmk90MGzfj6zT0SYaHkYl8gfs0Y%2B%2BPyKIqGc%2F8fV%2FHIay%2FYEB%2FAaD%2BWoH9BYD6ywNczsAM4XOE99d7ThHWXyu4vwDWX4Av7K%2B%2FE4vvci3LGOUMAAAAAElFTkSuQmCC";var ad={};ad="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAPFBMVEUAAADZ2dnl5eXn5%2Bfo6Ojm5ubp6enq6urg4ODm5ubQ0NDBwcHo6OjExMS9vb2%2Fv7%2FAwMC8vLy9vb23t7ftsDFCAAAAFHRSTlMAEVuR2P%2F%2F%2F%2F67J0z%2F%2F%2F%2Bq%2B4HR%2BIsFiaoAAAJsSURBVHgB7ZWHYusgDEUlY4lhsv%2F%2FXx%2BNGtrEhliJ3vbpXvdUAwwbfzg4uJHYe88hDmie7tjfwdHSkUa%2FQJjABox%2BCWY%2FmlTh%2FDJc8BHeZvRtQYHeLAKz7wvYp7em69uwgQF9B668bqB1Ao%2Bm850LmGz3cy5gZzyAKnhr0HFdvjDabmgVvLNJo04Q9BPQCTgEouy9D9G5NeU4ZT7T1ZBl5vm5I2sF%2FiYQvEODHZ31iKqgqAboMOgF0qMqKDiDU3wvCPeCHPVL2hHkmaBXA2nzRVAN%2BZPhpSXiZcIHdC9gbAheyKdrPlEVdJukz5cKKIghV5K2Rcz9CgqS3y8hKPPrkK%2BK7wLSrSm3oWu8kIVOj5w6Xw4azQ3D%2BquCu9zyhWdDQFbFi4AWDXHVUeanZKlgZmg9rh3z2nCBJH5uaAiQldwalKnSbRGMrOIhXuheFolYQa6BM8MADSIrIApEWQT59iKGBA2QdAVk%2BewRgiYuKwpoChy0GQ3yCaFDUDQoS76mgNVj6OQTQpdEmvy5gAZ4Aob1%2FVE3SBjp9fwIa3A9A%2FX642AdGKnz%2F2d9%2F%2BfgSJnnSCgv5pND0IAuEHGbh%2FQg8TpwcjE8Z4xuSLCx8YewK8DPZF%2FYBL9DgGlJkBCsOBwP%2BCjA8k0wIpXU3elecDqWzxLYcN5%2FcJy%2BBFOJL5zBiJMYzkkE6Sz5J8MpH0Rx%2FXCQeBmLGUn6VCnVWDNdpIp94TKBPTKK2vy%2FTlBXs66s8LcMGQ%2Bfmy%2FvZGXRsPkS%2F3XQRGE2Csm7fL8qLqZXRaqbI4K6UWZzOOyXruv94U984Pz5z%2BRNcCnAxsYv5gcBJmV5WFk6DwAAAABJRU5ErkJggg%3D%3D";var ac={};ac="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAYFBMVEUAAADT3t%2Fh4eHq6urp6enn5%2Bfp6enq6urm5ubG0NLLy8uds7bo6Ojj4%2BPn5%2Bfh4eHe3t4U5%2F8Y5P0B5f%2FExMS%2Bvr4K5v8D3vy%2Bvr4A3%2F28vLy9vb29vb29vb3BwcG4uLjMVSTuAAAAH3RSTlMAD1uV0e7%2F%2F7ohOgX%2F%2F%2F%2BM%2F%2Bg6%2F%2F3%2F252t9H3R8%2F%2BTcABA0AAAAzBJREFUeAHsmAe6rCAMhUWGBO8kwf1v9jbsSonM6%2B9fwPm%2Fk1jpfnP%2BY3r7cICI4HxvXp0%2BWMAd4IdXxj%2FwBKB7e9VsPF4BgO4lLSxeA5%2Bgb45%2FPjAjAHDPxvEQ5gWATWN6wzQwGxp2bbAgiNzu8HR1AjQ3BQ%2BsE4Brvz7zArCtC0jnN1xKvihoG9KAGgG86TesE7gfXACAmYUQ0XkbaupYrUDGLwPFnZMtbl20AlwEEWtarlGEM%2BPIIouACPqcoNcLeGTeCD6xrXfxcQnjQUC%2B%2BTG0hcZPw1aQ7eBuCmYDTST3QOp8gPHbsBeASQhu5Mt3PssiyA5JnR8b8GSglUF7nwFkG0QDUamCU%2BcDzfksW4HoLlOAXIMpn4WKM7LaeACO%2BZGNoK9%2FVECVIDpKSzCgio8X0VyAZTslX7VlKELzBqJjNbhrQYDq8AgvG5gleYEBJXP%2BxpEdUfcAFbLJXzaRfVgMoi0QA2VL9oHqlQViHMnRMKQERlGBlrclHeEuSSBFAYkCOhFiWNueRZIFZMj%2BgCgGlChguxyG6wqk89kUfgK5LV%2F6roBxUIBivn7Dy4%2B4lOefyvddDYGz148k8yVUH4Zwej5CqXzuNcc5TJf5X8BlPgfTaTDBsUCaQ%2FoYhjtHasG7sYjz4aO9OtlyEASiMHwrO6xNBolYiL7%2FWzYcbKtP5tBmzpdxVb8zC4Ovh2HGTZnVyuB2eL2J1vinOsJBcf4cBRvhENqM6EaB7W9ge5vAejNZ3yTQaKDB9cgcChjaOULlx8jVjnYD5KzDpNVAi6tVcWot%2FDfAUsd%2F1UyHyNukqzRQdTbxM51klpDnmRwwuRiED5zlBiXI5USfv5LgCAo8FhpGGeNjQgVvsGPdtG2zRiE97no%2BZsdiR8K4Be7tqL9JYFHrGagXmFvlp%2BmJ9QfOAhFKkcuz%2BxD1OeF2xxFzYYFlujRDlC7ZZOdcSxcJSuR56dLMgXTJhsRD9TZHUcCEEAZhaAAsQ%2FxnMJE4v7zgBkeABhJywWFCXRh1VL7gaGB3wSHWABOKaWAHQwPgGwTAGmDcIgAJI8FtApBZ5mOIoEputHKc3jfFjOf29QPQe5BuJum%2B4AAAAABJRU5ErkJggg%3D%3D";var au={},ah={};ah="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2219%22%20height%3D%2220%22%20viewBox%3D%220%200%2019%2020%22%3E%3Cpath%20fill%3D%22%23d8d8d8%22%20d%3D%22M1%208a1%201%200%200%201%200-2h8a2%202%200%201%200-1.414-3.414%201%201%200%200%201-1.414-1.414A4%204%200%201%201%209%208Zm15%202a1%201%200%201%200-.707-1.707%201%201%200%200%201-1.414-1.414A3%203%200%201%201%2016%2012H2a1%201%200%200%201%200-2Zm-1%206H1a1%201%200%200%201%200-2h14a3%203%200%201%201-2.121%205.121%201%201%200%201%201%201.414-1.414A1%201%200%201%200%2015%2016%22%2F%3E%3C%2Fsvg%3E";let am={"clear-day":e(au="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAKlBMVEUAAAD4yz%2F81kP71UL71kD81kD81z%2F91z793Eb920L92kD92j792Tv92TexM71sAAAACHRSTlMACx9Qc5vL5%2BHfWOMAAAKCSURBVHja7ZkxFuMwCAUlSwIki%2Ftfdzcvu6YQzjdxSk%2F6GQN5KeL08PBwma3URsQswkzUatnS78ilkYj0f4y%2F9C7USk6%2FoDRzW2GMfe%2FSSrpJriwvvMCLzjXf1Z8G3owbicJysAbGfiS%2BW9RGYrgjHAzaUpgiAgNGeIjcJBSYo%2BXgehY%2BB%2BZO200%2FCMx5vbCxfBOYvMX9RhcUsALeT3yCN5QTJJs%2FMsH1QhMjNMGblgAF%2BFFgFnAAuRXAhybfvpxgCRgEFhQewAJ4SZl9u3QJBDinM6rvD06gNTbAsX9wAgucjlBP7LEBpp6OwOLTQydQVb7%2BFerrBAMHtCSPdn4BCW1Itbkndt3edxQH9uxt6C0Ukx%2BNaMDfUTuMR6h%2F6fd3RN3M5nYXhAPk%2FY72l%2B5wW8MbAAV0W0%2FwNkg%2FvDf83hFq77J8DPNfC9T1xv8nkG52Cfot0JwbL0g%2F8eMBlPyAzbDogR8H2J7aZYQGUD4L3PCDANBf9BuRwHD88QADfcAPboD0vh8HaIyx2n0%2FHkDJCXxmB34YaL%2Fz%2Bz8VFet9vx%2BoS6AAfcDv%2F1xvwB7z65YWaAf2iJ%2FSStuvM1GgpZVy1%2B%2BfwMgjoAf%2BmZNDu%2BPHG8I7wn5%2FQwbH9b6fk0%2BFete%2FJmryyRzWT3XgnOAIWG%2FPP%2FEAeITpo2CAhTKRHT%2B%2FlvQBwnJDXQj822VqgPrPj%2F71KhNi6%2FEoCdCu%2Bn1aQmS6qHcblNMPCmbHfv%2FQge2jA8cLb9UEflQgsHwXMj8kE7CD%2FWNyC%2Bq15RSj8DQU2JVLCrORTpObHqw%2FNoSCRwePD8mVsf72mzSsv0lpfGpv5WcvS3Uh8LI08rpX9Xjd%2B%2FDwcJU%2FkH3TfyEXazkAAAAASUVORK5CYII%3D"),"clear-night":e(n7),cloudy:e(ae),overcast:e(ae),fog:e(at),hail:e(ac),lightning:e(ai),"lightning-rainy":e(an),"partly-cloudy-day":e(ar),"partly-cloudy-night":e(ao),partlycloudy:e(ar),pouring:e(as),rain:e(al),rainy:e(al),sleet:e(ac),snow:e(ad),snowy:e(ad),"snowy-rainy":e(ac),sunny:e(au),wind:e(ah),windy:e(ah),"windy-variant":e(ah)},af={...am,sunny:e(n7),partlycloudy:e(ao),"lightning-rainy":e(aa)};var av=o`
    ha-textfield,
    ha-select,
    ha-formfield,
    ha-expansion-panel,
    ha-button,
    ha-entity-picker,
    ha-icon-picker {
      margin: 8px 0;
    }
`,ay={};ay=JSON.parse('{"name":"ha-skylight-family-calendar-card","version":"1.0.69","description":"A Skylight-inspired family calendar card for Home Assistant with weather, event management, and touchscreen-friendly UI.","source":"src/index.js","module":"dist/skylight-family-calendar-card.js","targets":{"module":{"includeNodeModules":true,"optimize":true}},"scripts":{"watch":"parcel watch","build":"parcel build"},"repository":{"type":"git","url":"git+https://github.com/tienou/ha-skylight-family-calendar-card.git"},"keywords":["lovelace","home-assistant","calendar","skylight","family"],"author":"Etienne Gaillard","license":"MIT","bugs":{"url":"https://github.com/tienou/ha-skylight-family-calendar-card/issues"},"homepage":"https://github.com/tienou/ha-skylight-family-calendar-card","devDependencies":{"@parcel/optimizer-data-url":"^2.12.0","@parcel/transformer-inline-string":"^2.11.0","parcel":"^2.16.3","svgo":"^3.3.2"},"dependencies":{"lit":"^3.1.2","luxon":"^3.4.4"}}'),customElements.define("skylight-family-calendar-card",class extends eo{static styles=n9;_initialized=!1;_loading=0;_events={};_calendarEvents={};_calendars;_numberOfDays;_numberOfDaysIsMonth;_updateInterval;_noCardBackground;_eventBackground;_compact;_theme;_language;_weather;_dateFormat;_timeFormat;_multiDayTimeFormat;_multiDayMode;_locationLink;_startDate;_hideWeekend;_startingDay;_startingDayOffset;_weatherForecast=null;_weatherUnsub=null;_showLocation;_hidePastEvents;_hideAllDayEvents;_hideDaysWithoutEvents;_hideTodayWithoutEvents;_filter;_filterText;_replaceTitleText;_combineSimilarEvents;_showLegend;_legendToggle;_actions;_columns;_loader;_showNavigation;_navigationOffset=0;_updateEventsTimeouts=[];_calendarErrors=[];_calendarVisibility={};_currentView="Week";_createDuration="60";_createShowAdvanced=!1;_createEndTouched=!1;_createTitle=null;_createStartTime=null;_aiLoading=!1;_drawing=!1;_hasDrawing=!1;_canvasReady=!1;_selectedDay=null;_clockInterval=null;_views;_showHeader;static getConfigElement(){return document.createElement("skylight-family-calendar-card-editor")}static getStubConfig(){return{title:"Family Calendar",locale:"en",defaultView:"Week",startingDay:"monday",showHeader:!0,views:["Today","Tomorrow","Week","Biweek","Month"],calendars:[{entity:"calendar.family",name:"Family",icon:"mdi:calendar",color:"#4A90E2"}],weather:{entity:"weather.home",showCondition:!0,showTemperature:!0,showLowTemperature:!0}}}static get properties(){return{_days:{type:Array},_config:{type:Object},_error:{type:String},_currentEventDetails:{type:Object},_hideCalendars:{type:Array},_showCreateEventDialog:{type:Object},_showEditEventDialog:{type:Object},_editFormData:{type:Object},_currentView:{type:String},_calendarVisibility:{type:Object},_showRecurringConfirmDialog:{type:Object},_showDeleteRecurringDialog:{type:Object},_createRecurrenceType:{type:String},_createRecurrenceEndType:{type:String},_createDuration:{type:String},_createShowAdvanced:{type:Boolean},_createTitle:{type:String},_createStartTime:{type:String},_aiLoading:{type:Boolean}}}setConfig(e){if(this._config=e,!e.calendars)throw Error("No calendars are configured");this._numberOfDaysIsMonth=this._isNumberOfDaysMonth(e.days??7),this._title=e.title??null,this._calendars=this._applyDefaultColors(e.calendars),this._defaultCalendar=e.defaultCalendar??null,this._weather=this._getWeatherConfig(e.weather),this._numberOfDays=this._getNumberOfDays(e.days??7),this._hideWeekend=e.hideWeekend??!1,this._showNavigation=e.showNavigation??!0,this._startingDay=e.startingDay??"today",this._startingDayOffset=e.startingDayOffset??0,this._showWeekDayText=e.showWeekDayText??!0,this._startDate=this._getStartDate(),this._updateInterval=e.updateInterval??60,this._slotStartHour=parseInt(e.slotStartHour)||7,this._slotEndHour=parseInt(e.slotEndHour)||22,this._aiTaskEntity=e.aiTaskEntity??null,this._aiQuickAdd=e.aiQuickAdd??null,this._geminiApiKey=e.geminiApiKey??"",this._geminiModel=e.geminiModel??"gemini-2.0-flash",this._claudeApiKey=e.claudeApiKey??"",this._claudeModel=e.claudeModel??"claude-opus-4-8",this._aiProvider=e.aiProvider??null,this._noCardBackground=e.noCardBackground??!1,this._eventBackground=e.eventBackground??"var(--card-background-color, inherit)",this._compact=e.compact??!0,this._theme=e.theme??"skylight",this._dayFormat=e.dayFormat??null,this._dateFormat=e.dateFormat??"cccc d LLLL yyyy",this._timeFormat=e.timeFormat??"HH:mm",this._multiDayTimeFormat=e.multiDayTimeFormat??"d LLL HH:mm",this._multiDayMode=e.multiDayMode??"banner",this._locationLink=e.locationLink??"https://www.google.com/maps/search/?api=1&query=",this._showTitle=e.showTitle??!0,this._showEventTitle=e.showEventTitle??!0,this._showHeaderDate=e.showHeaderDate??!0,this._showHeaderClock=e.showHeaderClock??!0,this._colorFullEvent=e.colorFullEvent??!0,this._showDescription=e.showDescription??!1,this._showLocation=e.showLocation??!0,this._showLocationInForm=e.showLocationInForm??!0,this._googleApiKey=e.googleApiKey??"",this._showTime=e.showTime??!1,this._showDayName=e.showDayName??!1,this._dayHeaderFontSize=e.dayHeaderFontSize??null,this._dayHeaderColor=e.dayHeaderColor??null,this._showDate=e.showDate??!1,this._showCalendarName=e.showCalendarName??!1,this._showWeather=e.showWeather??!0,this._showCurrentWeather=e.showCurrentWeather??!1,this._hidePastEvents=e.hidePastEvents??!1,this._hideAllDayEvents=e.hideAllDayEvents??!1,this._hideDaysWithoutEvents=e.hideDaysWithoutEvents??!1,this._hideTodayWithoutEvents=e.hideTodayWithoutEvents??!1,this._filter=e.filter??!1,this._filterText=e.filterText??!1,this._replaceTitleText=e.replaceTitleText??!1,this._combineSimilarEvents=e.combineSimilarEvents??!1,this._showLegend=e.showLegend??!1,this._legendToggle=e.legendToggle??!1,this._actions=e.actions??!1,this._columns=e.columns??{},this._maxEvents=e.maxEvents??!1,this._maxDayEvents=e.maxDayEvents??!1,this._hideCalendars=(e.calendars||[]).reduce((e,t)=>(t.initiallyHidden&&t.entity&&e.push(t.entity),e),[]),e.locale&&(eh.Settings.defaultLocale=e.locale);let t=this.constructor.LOCALE_TEXTS[e.locale]??{};this._language=Object.assign({},{fullDay:"Entire day",noEvents:"No events",moreEvents:"More events",today:"Today",tomorrow:"Tomorrow",yesterday:"Yesterday",sunday:eh.Info.weekdays("long")[6],monday:eh.Info.weekdays("long")[0],tuesday:eh.Info.weekdays("long")[1],wednesday:eh.Info.weekdays("long")[2],thursday:eh.Info.weekdays("long")[3],friday:eh.Info.weekdays("long")[4],saturday:eh.Info.weekdays("long")[5],editEvent:"Edit",deleteEvent:"Delete",eventTitle:"Title",eventCalendar:"Calendar",eventStart:"Start",eventEnd:"End",eventLocation:"Location",cancel:"Cancel",create:"Create",newEvent:"New event",save:"Save",editEventTitle:"Edit event",titleRequired:"Title is required",week:"Week",biweek:"Biweek",month:"Month",eventRecurrence:"Repeat",recurrenceNone:"No repeat",recurrenceDaily:"Daily",recurrenceWeekly:"Weekly",recurrenceMonthly:"Monthly",recurrenceYearly:"Yearly",editThisEvent:"This event only",editAllEvents:"All events",editRecurringTitle:"Edit recurring event",deleteThisEvent:"This event only",deleteAllEvents:"All events",deleteRecurringTitle:"Delete recurring event",recurrenceInterval:"Repeat interval",recurrenceEnds:"Ends",recurrenceEndsNever:"Never",recurrenceEndsOnDate:"On date",recurrenceEndsAfter:"After",recurrenceOccurrences:"occurrences",recurrenceDays:"days",recurrenceWeeks:"weeks",recurrenceMonths:"months",recurrenceMonthlyOn:"Monthly on day",eventNotify:"Notification",eventDuration:"Duration",eventDate:"Date",advancedOptions:"Advanced options",quickAdd:"e.g. 9am dentist",aiAnalyze:"Analyze with AI",handwriteHint:"Write the event here (e.g. 9am dentist)",clearDrawing:"Clear"},t,e.texts??{}),this._showHeader=e.showHeader??!0,this._views="string"==typeof e.views?e.views.split(",").map(e=>e.trim()).filter(Boolean):e.views??["Today","Tomorrow","Week","Biweek","Month"];let i=(()=>{try{return localStorage.getItem("skylight-calendar-view")}catch(e){return null}})(),n=e.defaultView??"Week";this._currentView=i&&this._views.includes(i)?i:n;let a={};(e.calendars||[]).forEach(e=>{a[e.entity]=!this._calendarVisibility?.hasOwnProperty(e.entity)||this._calendarVisibility[e.entity]}),this._calendarVisibility=a,this._applyViewSettings()}_isNumberOfDaysMonth(e){return"month"===String(e).toLowerCase().trim()}static LOCALE_TEXTS={fr:{fullDay:"Toute la journée",noEvents:"Aucun événement",moreEvents:"Plus d'événements",today:"Aujourd'hui",tomorrow:"Demain",yesterday:"Hier",editEvent:"Modifier",deleteEvent:"Supprimer",eventTitle:"Titre",eventCalendar:"Calendrier",eventStart:"Début",eventEnd:"Fin",eventLocation:"Lieu",cancel:"Annuler",create:"Créer",newEvent:"Nouvel événement",save:"Enregistrer",editEventTitle:"Modifier l'événement",titleRequired:"Le titre est requis",week:"Semaine",biweek:"2 Semaines",month:"Mois",eventRecurrence:"Répétition",recurrenceNone:"Pas de répétition",recurrenceDaily:"Journalier",recurrenceWeekly:"Hebdomadaire",recurrenceMonthly:"Mensuelle",recurrenceYearly:"Annuelle",editThisEvent:"Cet événement uniquement",editAllEvents:"Tous les événements",editRecurringTitle:"Modifier l'événement récurrent",deleteThisEvent:"Cet événement uniquement",deleteAllEvents:"Tous les événements",deleteRecurringTitle:"Supprimer l'événement récurrent",recurrenceInterval:"Intervalle de répétition",recurrenceEnds:"Se termine",recurrenceEndsNever:"Jamais",recurrenceEndsOnDate:"À une date",recurrenceEndsAfter:"Après",recurrenceOccurrences:"occurrences",recurrenceDays:"jours",recurrenceWeeks:"semaines",recurrenceMonths:"mois",recurrenceMonthlyOn:"Chaque mois le",eventNotify:"Notification",eventDuration:"Durée",eventDate:"Date",advancedOptions:"Options avancées",quickAdd:"ex : 9h dentiste",aiAnalyze:"Analyser avec l’IA",handwriteHint:"Écrivez l’événement ici (ex : 9h dentiste)",clearDrawing:"Effacer"},de:{fullDay:"Ganztägig",noEvents:"Keine Termine",moreEvents:"Mehr Termine",today:"Heute",tomorrow:"Morgen",yesterday:"Gestern",editEvent:"Bearbeiten",deleteEvent:"Löschen",eventTitle:"Titel",eventCalendar:"Kalender",eventStart:"Beginn",eventEnd:"Ende",eventLocation:"Ort",cancel:"Abbrechen",create:"Erstellen",newEvent:"Neuer Termin",save:"Speichern",editEventTitle:"Termin bearbeiten",titleRequired:"Titel ist erforderlich",week:"Woche",biweek:"2 Wochen",month:"Monat",eventRecurrence:"Wiederholung",recurrenceNone:"Keine Wiederholung",recurrenceDaily:"Täglich",recurrenceWeekly:"Wöchentlich",recurrenceMonthly:"Monatlich",recurrenceYearly:"Jährlich",editThisEvent:"Nur dieses Ereignis",editAllEvents:"Alle Ereignisse",editRecurringTitle:"Wiederkehrendes Ereignis bearbeiten",deleteThisEvent:"Nur dieses Ereignis",deleteAllEvents:"Alle Ereignisse",deleteRecurringTitle:"Wiederkehrendes Ereignis löschen",recurrenceInterval:"Wiederholungsintervall",recurrenceEnds:"Endet",recurrenceEndsNever:"Nie",recurrenceEndsOnDate:"Am Datum",recurrenceEndsAfter:"Nach",recurrenceOccurrences:"Wiederholungen",recurrenceDays:"Tagen",recurrenceWeeks:"Wochen",recurrenceMonths:"Monaten",recurrenceMonthlyOn:"Monatlich am",eventNotify:"Benachrichtigung",eventDuration:"Dauer",eventDate:"Datum",advancedOptions:"Erweiterte Optionen",quickAdd:"z. B. 9 Uhr Zahnarzt",aiAnalyze:"Mit KI analysieren",handwriteHint:"Termin hier schreiben (z. B. 9 Uhr Zahnarzt)",clearDrawing:"Löschen"},es:{fullDay:"Todo el día",noEvents:"Sin eventos",moreEvents:"Más eventos",today:"Hoy",tomorrow:"Mañana",yesterday:"Ayer",editEvent:"Editar",deleteEvent:"Eliminar",eventTitle:"Título",eventCalendar:"Calendario",eventStart:"Inicio",eventEnd:"Fin",eventLocation:"Ubicación",cancel:"Cancelar",create:"Crear",newEvent:"Nuevo evento",save:"Guardar",editEventTitle:"Editar evento",titleRequired:"El título es obligatorio",week:"Semana",biweek:"2 Semanas",month:"Mes",eventRecurrence:"Repetición",recurrenceNone:"Sin repetición",recurrenceDaily:"Diario",recurrenceWeekly:"Semanal",recurrenceMonthly:"Mensual",recurrenceYearly:"Anual",editThisEvent:"Solo este evento",editAllEvents:"Todos los eventos",editRecurringTitle:"Editar evento recurrente",deleteThisEvent:"Solo este evento",deleteAllEvents:"Todos los eventos",deleteRecurringTitle:"Eliminar evento recurrente",recurrenceInterval:"Intervalo de repetición",recurrenceEnds:"Termina",recurrenceEndsNever:"Nunca",recurrenceEndsOnDate:"En una fecha",recurrenceEndsAfter:"Después de",recurrenceOccurrences:"ocurrencias",recurrenceDays:"días",recurrenceWeeks:"semanas",recurrenceMonths:"meses",recurrenceMonthlyOn:"Cada mes el",eventNotify:"Notificación",eventDuration:"Duración",eventDate:"Fecha",advancedOptions:"Opciones avanzadas",quickAdd:"ej.: 9h dentista",aiAnalyze:"Analizar con IA",handwriteHint:"Escribe el evento aquí (ej.: 9h dentista)",clearDrawing:"Borrar"},it:{fullDay:"Tutto il giorno",noEvents:"Nessun evento",moreEvents:"Più eventi",today:"Oggi",tomorrow:"Domani",yesterday:"Ieri",editEvent:"Modifica",deleteEvent:"Elimina",eventTitle:"Titolo",eventCalendar:"Calendario",eventStart:"Inizio",eventEnd:"Fine",eventLocation:"Luogo",cancel:"Annulla",create:"Crea",newEvent:"Nuovo evento",save:"Salva",editEventTitle:"Modifica evento",titleRequired:"Il titolo è obbligatorio",week:"Settimana",biweek:"2 Settimane",month:"Mese",eventRecurrence:"Ripetizione",recurrenceNone:"Nessuna ripetizione",recurrenceDaily:"Giornaliero",recurrenceWeekly:"Settimanale",recurrenceMonthly:"Mensile",recurrenceYearly:"Annuale",editThisEvent:"Solo questo evento",editAllEvents:"Tutti gli eventi",editRecurringTitle:"Modifica evento ricorrente",deleteThisEvent:"Solo questo evento",deleteAllEvents:"Tutti gli eventi",deleteRecurringTitle:"Elimina evento ricorrente",recurrenceInterval:"Intervallo di ripetizione",recurrenceEnds:"Termina",recurrenceEndsNever:"Mai",recurrenceEndsOnDate:"In una data",recurrenceEndsAfter:"Dopo",recurrenceOccurrences:"occorrenze",recurrenceDays:"giorni",recurrenceWeeks:"settimane",recurrenceMonths:"mesi",recurrenceMonthlyOn:"Ogni mese il",eventNotify:"Notifica",eventDuration:"Durata",eventDate:"Data",advancedOptions:"Opzioni avanzate",quickAdd:"es.: 9 dentista",aiAnalyze:"Analizza con IA",handwriteHint:"Scrivi qui l’evento (es.: 9 dentista)",clearDrawing:"Cancella"},nl:{fullDay:"Hele dag",noEvents:"Geen evenementen",moreEvents:"Meer evenementen",today:"Vandaag",tomorrow:"Morgen",yesterday:"Gisteren",editEvent:"Bewerken",deleteEvent:"Verwijderen",eventTitle:"Titel",eventCalendar:"Agenda",eventStart:"Begin",eventEnd:"Einde",eventLocation:"Locatie",cancel:"Annuleren",create:"Aanmaken",newEvent:"Nieuw evenement",save:"Opslaan",editEventTitle:"Evenement bewerken",titleRequired:"Titel is verplicht",week:"Week",biweek:"2 Weken",month:"Maand",eventRecurrence:"Herhaling",recurrenceNone:"Geen herhaling",recurrenceDaily:"Dagelijks",recurrenceWeekly:"Wekelijks",recurrenceMonthly:"Maandelijks",recurrenceYearly:"Jaarlijks",editThisEvent:"Alleen dit evenement",editAllEvents:"Alle evenementen",editRecurringTitle:"Terugkerend evenement bewerken",deleteThisEvent:"Alleen dit evenement",deleteAllEvents:"Alle evenementen",deleteRecurringTitle:"Terugkerend evenement verwijderen",recurrenceInterval:"Herhalingsinterval",recurrenceEnds:"Eindigt",recurrenceEndsNever:"Nooit",recurrenceEndsOnDate:"Op datum",recurrenceEndsAfter:"Na",recurrenceOccurrences:"herhalingen",recurrenceDays:"dagen",recurrenceWeeks:"weken",recurrenceMonths:"maanden",recurrenceMonthlyOn:"Maandelijks op",eventNotify:"Melding",eventDuration:"Duur",eventDate:"Datum",advancedOptions:"Geavanceerde opties",quickAdd:"bijv.: 9u tandarts",aiAnalyze:"Analyseren met AI",handwriteHint:"Schrijf hier het evenement (bijv.: 9u tandarts)",clearDrawing:"Wissen"},pt:{fullDay:"Dia inteiro",noEvents:"Sem eventos",moreEvents:"Mais eventos",today:"Hoje",tomorrow:"Amanhã",yesterday:"Ontem",editEvent:"Editar",deleteEvent:"Excluir",eventTitle:"Título",eventCalendar:"Calendário",eventStart:"Início",eventEnd:"Fim",eventLocation:"Local",cancel:"Cancelar",create:"Criar",newEvent:"Novo evento",save:"Salvar",editEventTitle:"Editar evento",titleRequired:"O título é obrigatório",week:"Semana",biweek:"2 Semanas",month:"Mês",eventRecurrence:"Repetição",recurrenceNone:"Sem repetição",recurrenceDaily:"Diário",recurrenceWeekly:"Semanal",recurrenceMonthly:"Mensal",recurrenceYearly:"Anual",editThisEvent:"Apenas este evento",editAllEvents:"Todos os eventos",editRecurringTitle:"Editar evento recorrente",deleteThisEvent:"Apenas este evento",deleteAllEvents:"Todos os eventos",deleteRecurringTitle:"Excluir evento recorrente",recurrenceInterval:"Intervalo de repetição",recurrenceEnds:"Termina",recurrenceEndsNever:"Nunca",recurrenceEndsOnDate:"Em uma data",recurrenceEndsAfter:"Após",recurrenceOccurrences:"ocorrências",recurrenceDays:"dias",recurrenceWeeks:"semanas",recurrenceMonths:"meses",recurrenceMonthlyOn:"Todo mês no dia",eventNotify:"Notificação",eventDuration:"Duração",eventDate:"Data",advancedOptions:"Opções avançadas",quickAdd:"ex.: 9h dentista",aiAnalyze:"Analisar com IA",handwriteHint:"Escreva o evento aqui (ex.: 9h dentista)",clearDrawing:"Limpar"}};static DURATION_PRESETS=[30,60,90,120];static PASTEL_COLORS=["#7FC8F8","#FFB5A7","#B8E0D2","#E4C1F9","#FFD6A5","#CAFFBF","#FFC6FF","#A0C4FF","#FDFFB6","#BDB2FF"];_applyDefaultColors(e){return e.map((e,t)=>e.color?e:{...e,color:this.constructor.PASTEL_COLORS[t%this.constructor.PASTEL_COLORS.length]})}_getWeatherConfig(e){if(!e||"string"!=typeof e&&"object"!=typeof e)return null;let t={entity:null,showCondition:!0,showTemperature:!1,showLowTemperature:!1,roundTemperature:!1};if("string"==typeof e?t.entity=e:Object.assign(t,e),!t.entity||this.hass&&!this.hass.states[t.entity]){if(this.hass){let e=Object.keys(this.hass.states).find(e=>e.startsWith("weather."));if(!e)return null;t.entity=e}else if(!t.entity)return null}return t}_applyViewSettings(){let e=this._config.startingDay??"monday";switch(this._currentView){case"Today":this._startingDay="today",this._numberOfDays=1,this._numberOfDaysIsMonth=!1;break;case"Tomorrow":this._startingDay="tomorrow",this._numberOfDays=1,this._numberOfDaysIsMonth=!1;break;case"Week":default:this._startingDay=e,this._numberOfDays=7,this._numberOfDaysIsMonth=!1;break;case"Biweek":this._startingDay=e,this._numberOfDays=14,this._numberOfDaysIsMonth=!1;break;case"Month":this._startingDay=e,this._numberOfDaysIsMonth=!0,this._numberOfDays=this._getNumberOfDays("month")}this._startDate=this._getStartDate()}_setView(e){this._currentView=e,this._navigationOffset=0;try{localStorage.setItem("skylight-calendar-view",e)}catch(e){}this._applyViewSettings(),this._updateEvents()}_toggleCalendarVisibility(e){this._calendarVisibility={...this._calendarVisibility,[e]:!this._calendarVisibility[e]};let t=[];for(let[e,i]of Object.entries(this._calendarVisibility))i||t.push(e);this._hideCalendars=t}connectedCallback(){super.connectedCallback(),this._startClock(),this._initialized&&this._waitForHassAndConfig()}disconnectedCallback(){super.disconnectedCallback(),this._stopClock(),this._clearUpdateEventsTimeouts(),clearTimeout(this._locationSearchTimeout),this._weatherUnsub&&(this._weatherUnsub.then(e=>e()).catch(()=>{}),this._weatherUnsub=null,this._weatherForecast=null)}updated(){this._showCreateEventDialog&&this._handwritingEnabled()&&!this._canvasReady?this.shadowRoot?.querySelector("#quick-canvas")&&(this._initCanvas(),this._canvasReady=!0):!this._showCreateEventDialog&&this._canvasReady&&(this._canvasReady=!1)}_startClock(){this._stopClock(),this._clockInterval=setInterval(()=>this.requestUpdate(),3e4)}_stopClock(){this._clockInterval&&(clearInterval(this._clockInterval),this._clockInterval=null)}render(){this._loader||(this._loader=this._getLoader()),this._initialized||(this._initialized=!0,this._waitForHassAndConfig());let e=[];this._noCardBackground&&e.push("nobackground"),this._compact&&e.push("compact"),e.push("theme-"+this._theme);let t=["--event-background-color: "+this._eventBackground+";"];this._columns.extraLarge&&t.push("--days-columns: "+this._columns.extraLarge+";"),this._columns.large&&t.push("--days-columns-lg: "+this._columns.large+";"),this._columns.medium&&t.push("--days-columns-md: "+this._columns.medium+";"),this._columns.small&&t.push("--days-columns-sm: "+this._columns.small+";"),this._columns.extraSmall&&t.push("--days-columns-xs: "+this._columns.extraSmall+";");let i=this._config?.locale||"en",n=new Date;return P`
            <ha-card class="${e.join(" ")}" style="${t.join(" ")}">
                <div class="card-content skylight">
                    ${this._error?P`<div class="errors"><ha-alert alert-type="error">${this._error}</ha-alert></div>`:""}
                    ${this._showHeader?P`
                        <div class="skylight-header">
                            <div class="date-section">
                                ${this._showHeaderDate?P`
                                    <div class="day-name">${n.toLocaleDateString(i,{weekday:"long"})}</div>
                                    <div class="full-date">${n.toLocaleDateString(i,{day:"numeric",month:"long",year:"numeric"})}</div>
                                `:""}
                                ${this._showHeaderClock?P`
                                    <div class="clock">${n.toLocaleTimeString(i,{hour:"2-digit",minute:"2-digit"})}</div>
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
                            <div class="calendar-filters">
                                ${this._calendars.map(e=>P`
                                    <button
                                        class="filter-btn ${!1!==this._calendarVisibility[e.entity]?"active":""}"
                                        style="--cal-color: ${e.color||"#888"}"
                                        @click="${()=>this._toggleCalendarVisibility(e.entity)}"
                                    >
                                        ${e.icon?P`<ha-icon icon="${e.icon}"></ha-icon>`:""}
                                        <span>${this._getCalendarDisplayName(e)}</span>
                                    </button>
                                `)}
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
                            ${this._renderHeader()}
                            ${this._renderWeekDays()}
                            ${this._renderDays()}
                            ${this._numberOfDaysIsMonth&&this._selectedDay?this._renderSelectedDayEvents():""}
                        </div>
                    </div>
                    ${this._renderEventDetailsDialog()}
                    ${this._renderCreateEventDialog()}
                    ${this._renderEditEventDialog()}
                    ${this._renderRecurringConfirmDialog()}
                    ${this._renderDeleteRecurringDialog()}
                    ${this._loader}
                </div>
            </ha-card>
        `}_renderHeaderWeather(){if(!this._weather||!this.hass)return P``;let e=this.hass.states[this._weather.entity];if(!e)return P``;let t=e.state,i=this._weather.roundTemperature?Math.round(e.attributes.temperature):e.attributes.temperature,n=e.attributes.temperature_unit||"°C",a=this.hass.states["sun.sun"]?.state==="below_horizon";return P`
            <div class="weather-section" @click="${this._handleWeatherClick}">
                ${this._getWeatherIcon(t,this.hass.formatEntityState(e),a)}
                <div class="weather-temp">${isNaN(i)?"":Math.round(i)+n}</div>
            </div>
        `}_renderHeader(){return this._showLegend||this._showNavigation?P`
            <div class="header">
                ${this._renderNavigation()}
                ${this._renderLegend()}
            </div>
        `:P``}_renderLegend(){return this._showLegend?P`
            <div class="legend">
                <ul>
                    ${this._calendars.map(e=>{if(!e.hideInLegend)return P`
                                <li class="${e.icon?"icon":"noIcon"}${this._legendToggle?" hasToggle":""}${-1===this._hideCalendars.indexOf(e.entity)?"":" hidden"}" style="--legend-calendar-color: ${e.color??"inherit"}" @click="${()=>{this._handleLegendClick(e)}}">
                                    ${e.icon?P`<ha-icon icon="${e.icon}"></ha-icon>`:""}
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
            ${e.map(e=>{let i=t[e.date.weekday],n=i?.substring(0,3).toUpperCase()??"";return P`
                    <div class="day header">
                        <div class="date">
                            <span class="text">${i}</span>
                            <span class="text-short">${n}</span>
                        </div>
                    </div>
                `})}
        `}_renderDays(){return this._days?P`
            ${this._days.map(e=>{if(e.isOutsideMonth)return P`<div class="day ${e.class}"></div>`;if(this._hideDaysWithoutEvents&&0===e.events.length&&(this._hideTodayWithoutEvents||!this._isToday(e.date)))return P``;let t=this._selectedDay&&this._selectedDay.date.day===e.date.day&&this._selectedDay.date.month===e.date.month&&this._selectedDay.date.year===e.date.year;return P`
                    <div class="day ${e.class}${t?" selected":""}" data-date="${e.date.day}" data-weekday="${e.date.weekday}" data-month="${e.date.month}" data-year="${e.date.year}" data-week="${e.date.weekNumber}" @click="${t=>{this._numberOfDaysIsMonth&&(t.stopPropagation(),this._selectDay(e))}}">
                        <div class="day-header">
                            <div class="date">
                                ${this._dayFormat?ec(e.date.toFormat(this._dayFormat)):P`
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
        `:P``}_renderSelectedDayEvents(){return this._selectedDay?P`
            <div class="selected-day-events">
                <div class="selected-day-header">
                    <span class="selected-day-date">${this._selectedDay.date.toFormat("d MMMM")}</span>
                    <div class="add-event" @click="${e=>this._handleAddEventClick(e,this._selectedDay)}">
                        <ha-icon icon="mdi:plus"></ha-icon>
                    </div>
                </div>
                <div class="selected-day-list">
                    ${this._renderEvents(this._selectedDay,!0)}
                </div>
            </div>
        `:P``}_renderEvents(e,t=!1){let i=[];if(e.events.map(e=>{if(!this._calendarEvents[e])return;let t=Object.assign({},this._calendarEvents[e]),n=[...t.calendars],a=[...t.colors],r=0;for(;r<n.length;)this._hideCalendars.indexOf(n[r])>-1?(n.splice(r,1),a.splice(r,1)):r++;0!==n.length&&(t.calendars=n,t.colors=a,i.push(t))}),0===i.length)return this._renderNoEvents();let n=!1;this._maxDayEvents>0&&i.length>this._maxDayEvents&&(i.splice(this._maxDayEvents),n=!0);let a=e.date.weekday===this._startDate?.weekday;return P`
            ${i.map(e=>{let i=[e.colors[0]],n=!t&&"banner"===this._multiDayMode&&e.multiDay,r=n?" banner banner-"+(e.multiDayPosition??"middle")+(a?" banner-rowstart":""):"",o=!n||"start"===e.multiDayPosition||a;return P`
                    <div
                        class="event ${e.class}${r}"
                        data-entity="${e.calendars[0]}"
                        data-additional-entities="${e.calendars.join(",")}"
                        data-summary="${e.summary}"
                        data-location="${e.location??""}"
                        data-start-hour="${e.start.toFormat("H")}"
                        data-start-minute="${e.start.toFormat("mm")}"
                        data-end-hour="${e.end.toFormat("H")}"
                        data-end-minute="${e.end.toFormat("mm")}"
                        style="--border-color: ${e.colors[0]}${this._colorFullEvent?"; background-color: "+e.colors[0]+"; color: #fff; border-left-width: 0":""}"
                        @click="${()=>{this._handleEventClick(e)}}"
                    >
                        ${e.colors.map(e=>i.indexOf(e)>-1?"":(i.push(e),P`
                                <div
                                    class="additionalColor"
                                    style="--event-additional-color: ${e}"
                                ></div>
                            `))}
                        ${n?P`
                            <div class="inner">
                                <div class="title">${o&&this._showEventTitle?e.summary:P` `}</div>
                            </div>
                        `:P`
                        <div class="inner">
                            ${this._showTime?P`<div class="time">
                                    ${this._renderEventTime(e)}
                                </div>`:""}
                            ${this._showEventTitle?P`<div class="title">
                                ${e.summary}
                            </div>`:""}
                            ${this._showDescription?P`
                                    <div class="description">
                                        ${ec(e.description)}
                                    </div>
                                `:""}
                            ${this._showLocation&&e.location?P`
                                    <div class="location">
                                        <ha-icon icon="mdi:map-marker"></ha-icon>
                                        ${e.location}
                                    </div>
                                `:""}
                        </div>
                        `}
                        ${e.icon?P`
                                <div class="icon">
                                    <ha-icon icon="${e.icon}"></ha-icon>
                                </div>
                            `:""}
                    </div>
                `})}
            ${n?P`
                    <div class="more">
                        ${this._language.moreEvents}
                    </div>
                `:""}
        `}_renderEventTime(e){return e.fullDay&&this._isFullDay(e.originalStart,e.originalEnd,!0)?P`${this._language.fullDay}`:e.multiDay&&"default"!==this._multiDayMode?P`
                ${e.originalStart.toFormat(this._multiDayTimeFormat)}
                ${" - "+e.originalEnd.toFormat(this._multiDayTimeFormat)}
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
                                    <a href="${this._locationLink}${encodeURIComponent(this._currentEventDetails.location)}" target="_blank">${this._currentEventDetails.location}</a>
                                </div>
                            </div>
                        `:""}
                    ${this._currentEventDetails.description?P`
                            <div class="description">
                                ${ec(this._currentEventDetails.description)}
                            </div>
                        `:""}
                    ${this._currentEventDetails.uid?P`
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
        `}_renderCreateEventDialog(){if(!this._showCreateEventDialog)return P``;let e=this._showCreateEventDialog.date,t=eh.DateTime.now(),i=e.set({hour:Math.min(t.hour+1,23),minute:0,second:0,millisecond:0}),n="allday"===this._createDuration,a=n?0:parseInt(this._createDuration)||60,r=i.plus({minutes:a}),o=i.toFormat("yyyy-MM-dd"),s=i.toFormat("HH:mm"),l=r.toFormat("yyyy-MM-dd"),d=r.toFormat("HH:mm");return P`
            <ha-dialog
                open
                @closed="${this._closeCreateEventDialog}"
                .heading="${this._renderCreateEventDialogHeading()}"
            >
                <div class="create-event-form">
                    ${this._renderQuickAdd()}
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
                    <div class="form-row" style="${n?"display: none":""}">
                        <div class="field-row-icon slots">
                            <ha-icon class="field-icon" icon="mdi:clock-outline"></ha-icon>
                            ${this._renderTimeSlots(this._createStartTime??s,!1)}
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="field-row-icon">
                            <ha-icon class="field-icon" icon="mdi:timer-outline"></ha-icon>
                            <div class="duration-picker">
                                ${this.constructor.DURATION_PRESETS.map(e=>P`
                                    <button type="button" class="duration-btn ${String(e)===this._createDuration?"active":""}"
                                        @click="${()=>{this._createDuration=String(e),this._createEndTouched=!1}}">${this._formatDuration(e)}</button>
                                `)}
                                <button type="button" class="duration-btn ${n?"active":""}"
                                    @click="${()=>{this._createDuration="allday",this._createEndTouched=!1}}">${this._language.fullDay}</button>
                            </div>
                        </div>
                    </div>
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
                    <button type="button" class="advanced-toggle" @click="${()=>{this._createShowAdvanced=!this._createShowAdvanced}}">
                        <ha-icon icon="${this._createShowAdvanced?"mdi:chevron-up":"mdi:chevron-down"}"></ha-icon>
                        <span>${this._language.advancedOptions}</span>
                    </button>
                    <div class="advanced-section" style="${this._createShowAdvanced?"":"display: none"}">
                    <div class="form-row">
                        <label for="event-start-date">${this._language.eventDate}</label>
                        <input type="date" id="event-start-date" class="form-input" .value="${o}" required />
                    </div>
                    <div class="form-row">
                        <label for="event-calendar">${this._language.eventCalendar}</label>
                        <select id="event-calendar" class="form-input">
                            ${this._calendars.map(e=>P`
                                <option value="${e.entity}" ?selected="${e.entity===this._defaultCalendar}">${this._getCalendarDisplayName(e)}</option>
                            `)}
                        </select>
                    </div>
                    <div class="form-row">
                        <label for="event-end-date">${this._language.eventEnd}</label>
                        <div class="datetime-row">
                            <input type="date" id="event-end-date" class="form-input" .value="${l}"
                                @input="${()=>{this._createEndTouched=!0}}" />
                            <input type="time" id="event-end-time" class="form-input" style="${n?"display: none":""}" .value="${d}"
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
                    </div>
                    <div class="form-actions">
                        <button class="btn btn-cancel" @click="${this._closeCreateEventDialog}">${this._language.cancel}</button>
                        <button class="btn btn-submit" @click="${this._handleCreateEvent}">${this._language.create}</button>
                    </div>
                </div>
            </ha-dialog>
        `}_renderCreateEventDialogHeading(){let e=this._showCreateEventDialog?.date;return P`
            <div class="header_title">
                <span>${this._language.newEvent}${e?" — "+e.toFormat("cccc d LLLL"):""}</span>
                <ha-icon-button
                    .label="${this.hass?.localize("ui.dialogs.generic.close")??"Close"}"
                    dialogAction="close"
                    class="header_button"
                ><ha-icon icon="mdi:close"></ha-icon></ha-icon-button>
            </div>
        `}_renderEditEventDialog(){if(!this._showEditEventDialog||!this._editFormData)return P``;this._showEditEventDialog;let e=this._editFormData,t=this._getFormDuration(e);return P`
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
                    ${this._showLocationInForm?P`
                    <div class="form-row location-row">
                        <div class="location-input-wrapper with-icon${e.location?" has-maps":""}">
                            <ha-icon class="field-icon" icon="mdi:map-marker"></ha-icon>
                            <input type="text" id="edit-event-location" class="form-input" placeholder="${this._language.eventLocation??"Location"}"
                                .value="${e.location??""}"
                                @input="${e=>{this._editFormData={...this._editFormData,location:e.target.value},this._handleLocationInput(e)}}"
                                autocomplete="off" />
                            ${e.location?P`
                            <a class="location-maps-icon" href="${this._locationLink}${encodeURIComponent(e.location)}" target="_blank" title="${this._language.openInMaps??"Google Maps"}">
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
                    <button type="button" class="advanced-toggle" @click="${()=>{this._editFormData={...this._editFormData,showAdvanced:!e.showAdvanced}}}">
                        <ha-icon icon="${e.showAdvanced?"mdi:chevron-up":"mdi:chevron-down"}"></ha-icon>
                        <span>${this._language.advancedOptions}</span>
                    </button>
                    <div class="advanced-section" style="${e.showAdvanced?"":"display: none"}">
                    <div class="form-row">
                        <label for="edit-event-start-date">${this._language.eventDate}</label>
                        <input type="date" id="edit-event-start-date" class="form-input" required
                            .value="${e.startDate}"
                            @input="${e=>this._updateEditStart({startDate:e.target.value})}" />
                    </div>
                    <div class="form-row">
                        <label for="edit-event-calendar">${this._language.eventCalendar}</label>
                        <select id="edit-event-calendar" class="form-input"
                            @change="${e=>{this._editFormData={...this._editFormData,calendar:e.target.value}}}">
                            ${this._calendars.map(t=>P`
                                <option value="${t.entity}" ?selected="${t.entity===e.calendar}">${this._getCalendarDisplayName(t)}</option>
                            `)}
                        </select>
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
                    </div>
                    <div class="form-actions">
                        <button class="btn btn-delete" @click="${this._handleDeleteEventFromEdit}">
                            <ha-icon icon="mdi:delete"></ha-icon> ${this._language.deleteEvent}
                        </button>
                        <button class="btn btn-cancel" @click="${this._closeEditEventDialog}">${this._language.cancel}</button>
                        <button class="btn btn-submit" @click="${this._handleUpdateEvent}">${this._language.save}</button>
                    </div>
                </div>
            </ha-dialog>
        `}_renderEditEventDialogHeading(){let e=this._editFormData?.startDate?eh.DateTime.fromISO(this._editFormData.startDate):null;return P`
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
        `:P``}_getLoader(){let e=document.createElement("div");return e.className="loader",e.style.display="none",e}_updateLoader(){this._loading>0?this._loader.style.display="inherit":this._loader.style.display="none"}_getWeatherIcon(e,t,i=!1){if(!e)return null;let n=getComputedStyle(this).getPropertyValue("--weather-icon-"+e).trim();if(null!==n&&-1===["","none","inherit"].indexOf(n))return P`<div class="icon" style="background-image: var(--weather-icon-${e})"></div>`;let a=(i?af[e]:am[e])??am[e];return a?P`
                <div class="icon">
                    <img src="${a}" alt="${t}">
                </div>
            `:null}_waitForHassAndConfig(){if(this.isConnected){if(!this.hass||!this._calendars)return void window.setTimeout(()=>{this._waitForHassAndConfig()},50);this._updateEvents()}}_subscribeToWeatherForecast(){if(!this._weather?.entity||!this.hass.states[this._weather.entity]){this._weatherForecast=[];return}this._loading++,this._updateLoader();let e=!0;this._weatherUnsub=this.hass.connection.subscribeMessage(t=>{this._weatherForecast=t.forecast??[],e&&(this._loading--,e=!1)},{type:"weather/subscribe_forecast",forecast_type:this._weather.useTwiceDaily?"twice_daily":"daily",entity_id:this._weather.entity}),this._weatherUnsub.catch(()=>{this._weatherUnsub=null,this._weatherForecast=[],e&&(this._loading--,e=!1)})}_updateEvents(){if(this._loading>0)return;this._loading++,this._updateLoader(),this._clearUpdateEventsTimeouts(),this._events={},this._calendarEvents={},this._startDate=this._getStartDate(),this._numberOfDaysIsMonth&&(this._numberOfDays=this._startDate.daysInMonth);let e=this._startDate,t=this._startDate.plus({days:this._numberOfDays}),i=eh.DateTime.now(),n=this._startDate.toISO();this._weather&&null===this._weatherForecast&&this._subscribeToWeatherForecast();let a=0;this._calendars.forEach(r=>{if(!r.entity||!this.hass.states[r.entity])return;r.name||(r={...r,name:this.hass.formatEntityAttributeValue(this.hass.states[r.entity],"friendly_name")}),r.sorting||(r={...r,sorting:a});let o=a;this._loading++,this.hass.callApi("get","calendars/"+r.entity+"?start="+encodeURIComponent(e.toISO())+"&end="+encodeURIComponent(t.toISO())).then(e=>{this._startDate.toISO()!==n||(this._calendarErrors[o]="",e.forEach(e=>{if(this._isFilterEvent(e,r.filter??""))return;let t=this._convertApiDate(e.start),n=this._convertApiDate(e.end);if(this._hidePastEvents&&n<i)return;let a=this._isFullDay(t,n);a||this._isSameDay(t,n)?this._addEvent(e,t,n,a,r):this._handleMultiDayEvent(e,t,n,r)})),this._loading--}).catch(e=>{this._calendarErrors[o]='Error while fetching calendar "'+r.entity+'": '+(e.error??"Unknown error"),this._loading--}),a++});let r=window.setInterval(()=>{0===this._loading&&(clearInterval(r),this._updateCard(),this._updateLoader(),this.isConnected&&this._updateEventsTimeouts.push(window.setTimeout(()=>{this._updateEvents()},1e3*this._updateInterval)))},50);this._loading--}_clearUpdateEventsTimeouts(){this._updateEventsTimeouts.forEach(e=>{clearTimeout(e)}),this._updateEventsTimeouts=[]}_isFilterEvent(e,t){let i=e.summary??"";return this._filter&&i.match(this._filter)||t&&i.match(t)}_addEvent(e,t,i,n,a,r,o){if(r=r??!1,this._hideWeekend&&t.weekday>=6||n&&this._hideAllDayEvents)return;let s=t.toISODate();this._events.hasOwnProperty(s)||(this._events[s]=[]);let l=this._filterEventSummary(e,a),d=t.toISO()+"-"+i.toISO()+"-"+l;this._combineSimilarEvents||(d=t.toISO()+"-"+i.toISO()+"-"+l+"-"+a.entity),this._calendarEvents.hasOwnProperty(d)?(this._calendarEvents[d].calendars.push(a.entity),this._calendarEvents[d].colors.push(a.color??"inherit"),a.name&&-1===this._calendarEvents[d].calendarNames.indexOf(a.name)&&this._calendarEvents[d].calendarNames.push(a.name),a.sorting<this._calendarEvents[d].calendarSorting&&(this._calendarEvents[d].calendarSorting=a.sorting)):(this._calendarEvents[d]={summary:l,description:e.description??null,location:e.location??null,start:t,originalStart:this._convertApiDate(e.start),end:i,originalEnd:this._convertApiDate(e.end),fullDay:n,multiDay:r,multiDayPosition:o??null,colors:[a.color??"inherit"],icon:a.icon??null,calendars:[a.entity],calendarSorting:a.sorting,calendarNames:[a.name],class:this._getEventClass(t,i,n,r),uid:e.uid??null,recurrence_id:e.recurrence_id??null,rrule:e.rrule??null},this._events[s].push(d))}_filterEventSummary(e,t){let i=t.eventTitleField?e[t.eventTitleField]:e.summary;if(!i)return"";if(t.filterText&&(i=i.replace(new RegExp(t.filterText),"")),this._filterText&&(i=i.replace(new RegExp(this._filterText),"")),t.replaceTitleText)for(let e in t.replaceTitleText){let n=t.replaceTitleText[e];i=i.replace(e,n)}if(this._replaceTitleText)for(let e in this._replaceTitleText){let t=this._replaceTitleText[e];i=i.replace(e,t)}return i}_getEventClass(e,t,i,n){let a=[],r=eh.DateTime.now();return i&&a.push("fullday"),n&&a.push("multiday"),t<r?a.push("past"):e<=r&&t>r?a.push("ongoing"):a.push("future"),a.join(" ")}_getDayClass(e){let t=[];return this._isToday(e)?t.push("today"):this._isTomorrow(e)?(t.push("tomorrow"),t.push("future")):this._isYesterday(e)?(t.push("yesterday"),t.push("past")):e>eh.DateTime.now()?t.push("future"):t.push("past"),t.push(["sunday","monday","tuesday","wednesday","thursday","friday","saturday","sunday"][e.weekday]),t.join(" ")}_handleMultiDayEvent(e,t,i,n){let a=t;for(;t<i;){let r=t,o=(t=t.plus({days:1}).startOf("day"))<i?t:i,s="middle";if(r.toMillis()===a.toMillis()?s="start":o.toMillis()===i.toMillis()&&(s="end"),this._addEvent(e,r,o,this._isFullDay(r,o),n,!0,s),"single"===this._multiDayMode&&r>=this._startDate)break}}_updateCard(){this._error=this._calendarErrors.join("\n").trim();let e=[],t=this._weather?this.hass.states[this._weather.entity]:null,i={};this._weatherForecast?.forEach(e=>{if(e.hasOwnProperty("is_daytime")&&!1===e.is_daytime)return;let n=eh.DateTime.fromISO(e.datetime).toISODate(),a=this._weather.roundTemperature?Math.round(e.temperature):e.temperature,r=this._weather.roundTemperature?Math.round(e.templow):e.templow;i[n]={state:e.condition,condition:this.hass.formatEntityState(t,e.condition),temperature:this.hass.formatEntityAttributeValue(t,"temperature",a),templow:this.hass.formatEntityAttributeValue(t,"templow",r)}});let n=this._startDate,a=this._startDate.plus({days:this._numberOfDays}),r=null,o=String(this._startingDay).toLowerCase().trim();if(this._numberOfDaysIsMonth&&["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].includes(o)){r=n.plus({days:7}).month;let e=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"].indexOf(o)+1;n=this._getWeekDayDate(n,e);let t=this._startDate.endOf("month");for(a=n;a<=t;)a=a.plus({days:7})}let s=0;for(;n<a;){if(!this._hideWeekend||n.weekday<6){let t=[],a=null!==r&&n.month!==r,o=n.toISODate();if(this._events.hasOwnProperty(o)&&!a&&(s+=(t=this._events[o].sort((e,t)=>{let i=this._calendarEvents[e],n=this._calendarEvents[t];if("banner"===this._multiDayMode&&i.multiDay!==n.multiDay)return i.multiDay?-1:1;if("banner"===this._multiDayMode&&i.multiDay&&n.multiDay){let e=i.originalStart?.toISO()??"",t=n.originalStart?.toISO()??"";return e!==t?e>t?1:-1:i.summary>n.summary?1:i.summary<n.summary?-1:0}return i.start.toISO()===n.start.toISO()?i.calendarSorting<n.calendarSorting?1:i.calendarSorting>n.calendarSorting?-1:0:i.start>n.start?1:-1})).length,this._maxEvents>0&&s>this._maxEvents&&t.splice(this._maxEvents-s)),e.push({date:n,events:t,weather:a?null:i[o]??null,class:this._getDayClass(n)+(a?" outside-month":""),isOutsideMonth:a}),this._maxEvents>0&&s>=this._maxEvents)break}n=n.plus({days:1})}if(this._days=e,this._numberOfDaysIsMonth){let t=eh.DateTime.now(),i=e.find(e=>!e.isOutsideMonth);if(this._selectedDay&&this._selectedDay.date.month===i?.date.month&&this._selectedDay.date.year===i?.date.year){let t=e.find(e=>!e.isOutsideMonth&&e.date.day===this._selectedDay.date.day&&e.date.month===this._selectedDay.date.month);t&&(this._selectedDay=t)}else{let n=e.find(e=>!e.isOutsideMonth&&e.date.day===t.day&&e.date.month===t.month&&e.date.year===t.year);this._selectedDay=n??i??null}}}_getWeekDayText(e){return this._language.today&&this._isToday(e)?this._language.today:this._language.tomorrow&&this._isTomorrow(e)?this._language.tomorrow:this._language.yesterday&&this._isYesterday(e)?this._language.yesterday:[this._language.sunday,this._language.monday,this._language.tuesday,this._language.wednesday,this._language.thursday,this._language.friday,this._language.saturday,this._language.sunday][e.weekday]}_handleContainerClick(e){if(!this._actions)return;let t=new Event("hass-action",{bubbles:!0,composed:!0});t.detail={config:this._actions,action:"tap"},this.dispatchEvent(t),e.stopImmediatePropagation()}_handleEventClick(e){this._actions||(e.uid?this._openEditEventDialog(e):this._currentEventDetails=e)}_closeDialog(){this._currentEventDetails=null}_handleAddEventClick(e,t){e.stopImmediatePropagation(),this._createDuration="60",this._createShowAdvanced=!1,this._createEndTouched=!1,this._createTitle=null,this._aiLoading=!1,this._drawing=!1,this._hasDrawing=!1,this._canvasReady=!1;let i=eh.DateTime.now();this._createStartTime=String(Math.min(i.hour+1,23)).padStart(2,"0")+":00",this._showCreateEventDialog={date:t.date}}_closeCreateEventDialog(){this._showCreateEventDialog=null,this._createRecurrenceType=null,this._createRecurrenceEndType="never",this._createDuration="60",this._createShowAdvanced=!1,this._createEndTouched=!1,this._createTitle=null,this._createStartTime=null,this._aiLoading=!1,this._drawing=!1,this._hasDrawing=!1,this._canvasReady=!1}_renderQuickAdd(){return this._handwritingEnabled()?P`
                <div class="form-row">
                    <div class="hw-zone">
                        <canvas id="quick-canvas" class="hw-canvas" width="640" height="200"
                            @pointerdown="${this._canvasPointerDown}"
                            @pointermove="${this._canvasPointerMove}"
                            @pointerup="${this._canvasPointerUp}"
                            @pointerleave="${this._canvasPointerUp}"></canvas>
                        <div class="hw-hint">${this._language.handwriteHint}</div>
                        <div class="hw-actions">
                            <button type="button" class="hw-clear" @click="${this._clearCanvas}">
                                <ha-icon icon="mdi:eraser"></ha-icon> ${this._language.clearDrawing}
                            </button>
                            <button type="button" class="ai-analyze-btn" ?disabled="${this._aiLoading}" @click="${this._analyzeHandwriting}">
                                <ha-icon class="${this._aiLoading?"spin":""}" icon="${this._aiLoading?"mdi:loading":"mdi:auto-fix"}"></ha-icon>
                                <span>${this._language.aiAnalyze}</span>
                            </button>
                        </div>
                    </div>
                </div>
            `:P`
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
        `}_initCanvas(){let e=this.shadowRoot?.querySelector("#quick-canvas");if(!e)return;e.width=e.clientWidth||640,e.height=e.clientHeight||200;let t=e.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,e.width,e.height),this._hasDrawing=!1}_clearCanvas(){this._initCanvas();let e=this.shadowRoot?.querySelector(".hw-hint");e&&(e.style.display="")}_canvasCoords(e,t){let i=t.getBoundingClientRect();return{x:(e.clientX-i.left)*(t.width/i.width),y:(e.clientY-i.top)*(t.height/i.height)}}_canvasPointerDown(e){if(!e.isPrimary)return;e.preventDefault();let t=e.currentTarget,i=this._canvasCoords(e,t);this._drawing=!0,this._hasDrawing=!0,this._lastX=i.x,this._lastY=i.y;let n=this.shadowRoot?.querySelector(".hw-hint");n&&(n.style.display="none");try{t.setPointerCapture(e.pointerId)}catch(e){}}_canvasPointerMove(e){if(!this._drawing||!e.isPrimary)return;e.preventDefault();let t=e.currentTarget,i=this._canvasCoords(e,t),n=t.getContext("2d");n.strokeStyle="#111111",n.lineWidth=3,n.lineCap="round",n.lineJoin="round",n.beginPath(),n.moveTo(this._lastX,this._lastY),n.lineTo(i.x,i.y),n.stroke(),this._lastX=i.x,this._lastY=i.y}_canvasPointerUp(e){this._drawing=!1}_handwritingEnabled(){return!!(this._geminiApiKey||this._claudeApiKey)}_resolveAiProvider(){return"claude"===this._aiProvider&&this._claudeApiKey?"claude":"gemini"===this._aiProvider&&this._geminiApiKey?"gemini":this._claudeApiKey?"claude":this._geminiApiKey?"gemini":null}_handwritingPrompt(){return"This image shows a handwritten calendar event. Read the handwriting and extract a JSON object with: title (the subject only, without time or date words), time (start time as HH:MM in 24-hour format if a clock time is written, otherwise an empty string), duration_minutes (integer; default 60 if unspecified, 0 for an all-day event). Keep the title in its original language."}_extractJson(e){if(!e)return null;let t=String(e).trim(),i=t.match(/```(?:json)?\s*([\s\S]*?)```/i);i&&(t=i[1].trim());try{return JSON.parse(t)}catch(e){}let n=t.match(/\{[\s\S]*\}/);if(n)try{return JSON.parse(n[0])}catch(e){}return null}async _analyzeHandwriting(){if(this._aiLoading)return;let e=this.shadowRoot?.querySelector("#quick-canvas");if(!e||!this._hasDrawing)return;let t=this._resolveAiProvider();if(!t)return;let i=e.toDataURL("image/png").split(",")[1];this._aiLoading=!0;try{let e="claude"===t?await this._analyzeWithClaude(i):await this._analyzeWithGemini(i);e&&this._applyAiQuickAdd(e.title,e.time,e.duration_minutes)}catch(e){console.error("Skylight Family Calendar: handwriting analysis failed",e)}finally{this._aiLoading=!1}}async _analyzeWithGemini(e){let t=this._geminiModel||"gemini-2.0-flash",i=`https://generativelanguage.googleapis.com/v1beta/models/${t}:generateContent?key=${encodeURIComponent(this._geminiApiKey)}`,n=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:this._handwritingPrompt()},{inlineData:{mimeType:"image/png",data:e}}]}],generationConfig:{responseMimeType:"application/json",responseSchema:{type:"OBJECT",properties:{title:{type:"STRING"},time:{type:"STRING"},duration_minutes:{type:"INTEGER"}},required:["title"]}}})}),a=await n.json();if(!n.ok)throw Error(a?.error?.message||"HTTP "+n.status);return this._extractJson(a.candidates?.[0]?.content?.parts?.[0]?.text)}async _analyzeWithClaude(e){let t=this._claudeModel||"claude-opus-4-8",i=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"content-type":"application/json","x-api-key":this._claudeApiKey,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:t,max_tokens:256,messages:[{role:"user",content:[{type:"image",source:{type:"base64",media_type:"image/png",data:e}},{type:"text",text:this._handwritingPrompt()+" Respond with only the JSON object."}]}],output_config:{format:{type:"json_schema",schema:{type:"object",properties:{title:{type:"string"},time:{type:"string"},duration_minutes:{type:"integer"}},required:["title","time","duration_minutes"],additionalProperties:!1}}}})}),n=await i.json();if(!i.ok)throw Error(n?.error?.message||"HTTP "+i.status);let a=(n.content||[]).find(e=>"text"===e.type);return this._extractJson(a?.text)}_getAiTaskEntity(){return this._aiTaskEntity?this._aiTaskEntity:this.hass?Object.keys(this.hass.states).find(e=>e.startsWith("ai_task."))??null:null}_isAiQuickAddAvailable(){return!1!==this._aiQuickAdd&&!!this._getAiTaskEntity()}async _runAiQuickAdd(){let e=this.shadowRoot.querySelector("#event-quick")?.value?.trim();if(!e||this._aiLoading)return;let t=this._getAiTaskEntity();if(!t)return void this._handleQuickAdd(e);this._aiLoading=!0;try{let i=await this.hass.callWS({type:"call_service",domain:"ai_task",service:"generate_data",service_data:{task_name:"quick_add_calendar_event",entity_id:t,instructions:`Extract a single calendar event from this text written by a user: "${e}".
- title: the subject only, without any time or date words.
- time: the start time in 24-hour HH:MM format if a clock time is mentioned, otherwise an empty string.
- duration_minutes: the duration in minutes (default 60 when unspecified; use 0 for an all-day event).
Keep the title in the same language as the input. Do not invent a time that is not present.`,structure:{title:{selector:{text:{}},description:"Event title, without the time",required:!0},time:{selector:{text:{}},description:"Start time HH:MM (24h), or empty if none"},duration_minutes:{selector:{number:{}},description:"Duration in minutes, 0 means all-day"}}},return_response:!0}),n=i?.response?.data??i?.response??{};this._applyAiQuickAdd(n.title,n.time,n.duration_minutes)}catch(t){console.error("Skylight Family Calendar: AI quick-add failed, using local parser",t),this._handleQuickAdd(e)}finally{this._aiLoading=!1}}_applyAiQuickAdd(e,t,i){e&&String(e).trim()&&(this._createTitle=String(e).trim());let n=t?this._parseTime(String(t)):null,a=parseInt(i);n?(this._createStartTime=n,!isNaN(a)&&a>0?this._createDuration=String(a):"allday"===this._createDuration&&(this._createDuration="60")):this._createDuration="allday"}_handleQuickAdd(e){if(!e||!e.trim())return;let t=e.trim(),i=t.match(/(\d{1,2})\s*[hH:]\s*(\d{2})?/),n=t,a=null;i&&(a=this._parseTime(i[0]))&&(n=t.slice(0,i.index)+t.slice(i.index+i[0].length)),n=n.replace(/\s{2,}/g," ").replace(/^[-–,:\s]+|[-–,:\s]+$/g,"").trim(),this._createTitle=n,a?(this._createStartTime=a,"allday"===this._createDuration&&(this._createDuration="60")):this._createDuration="allday"}_clearInput(e){let t=this.shadowRoot?.querySelector("#"+e);t&&(t.value="",e.endsWith("location")&&this._clearLocationSuggestions(t),t.focus())}_handleLocationInput(e){if(!this._googleApiKey)return;if(this._locationSelected){this._locationSelected=!1;return}let t=e.target.value?.trim(),i=e.target;(clearTimeout(this._locationSearchTimeout),!t||t.length<3)?this._clearLocationSuggestions(i):this._locationSearchTimeout=setTimeout(()=>this._searchLocation(t,i),400)}async _searchLocation(e,t){try{let i=await fetch("https://places.googleapis.com/v1/places:autocomplete",{method:"POST",headers:{"Content-Type":"application/json","X-Goog-Api-Key":this._googleApiKey},body:JSON.stringify({input:e,languageCode:this._config?.locale||"en"})}),n=((await i.json()).suggestions||[]).filter(e=>e.placePrediction).map(e=>({name:e.placePrediction.structuredFormat?.mainText?.text||"",address:e.placePrediction.structuredFormat?.secondaryText?.text||"",fullText:e.placePrediction.text?.text||""}));this._showLocationSuggestions(n,t)}catch(e){console.error("Location search failed:",e)}}_showLocationSuggestions(e,t){let i=t.closest(".location-row").querySelector(".location-suggestions");if(i){if(i.innerHTML="",0===e.length){i.style.display="none";return}e.forEach(e=>{let n=document.createElement("li"),a=document.createElement("strong");a.textContent=e.name;let r=document.createElement("span");r.style.cssText="color: var(--secondary-text-color); font-size: 0.85em;",r.textContent=e.address,n.appendChild(a),n.appendChild(document.createTextNode(" ")),n.appendChild(r),n.addEventListener("click",()=>{this._locationSelected=!0,t.value=e.fullText,t.dispatchEvent(new Event("input",{bubbles:!0})),this._editFormData&&(this._editFormData={...this._editFormData,location:e.fullText}),i.style.display="none"}),i.appendChild(n)}),i.style.display="block"}}_clearLocationSuggestions(e){let t=e.closest(".location-row").querySelector(".location-suggestions");t&&(t.innerHTML="",t.style.display="none")}async _handleCreateEvent(){let e,t,i=(this._createTitle??this.shadowRoot.querySelector("#event-title")?.value??"").trim(),n=this.shadowRoot.querySelector("#event-calendar")?.value,a=this.shadowRoot.querySelector("#event-start-date")?.value,r=this._parseTime(this._createStartTime??this.shadowRoot.querySelector("#event-start-time")?.value),o=this.shadowRoot.querySelector("#event-end-date")?.value,s=this.shadowRoot.querySelector("#event-end-time")?.value,l=a&&r?`${a}T${r}`:"",d=o&&s?`${o}T${s}`:"",c=this.shadowRoot.querySelector("#event-location")?.value?.trim(),u=this.shadowRoot.querySelector("#event-recurrence")?.value,h=this.shadowRoot.querySelector("#event-notify")?.checked??!1,m=this._createDuration||"60",f="allday"===m;if(!i||!a||!f&&!l)return;if(f){let i=eh.DateTime.fromISO(a);if(!i.isValid)return;let n=this._createEndTouched&&o?eh.DateTime.fromISO(o):i;(!n.isValid||n<i)&&(n=i),e=i.toISODate(),t=n.plus({days:1}).toISODate()}else{let i=eh.DateTime.fromISO(l);if(!i.isValid)return;let n=this._createEndTouched&&d?eh.DateTime.fromISO(d):i.plus({minutes:parseInt(m)||60});(!n.isValid||n<=i)&&(n=i.plus({hours:1})),e=i.toFormat("yyyy-MM-dd'T'HH:mm:ss"),t=n.toFormat("yyyy-MM-dd'T'HH:mm:ss")}let v="";if(u){let e=parseInt(this.shadowRoot.querySelector("#event-recurrence-interval")?.value)||1,t=[];"FREQ=WEEKLY"===u&&(t=[...this.shadowRoot.querySelectorAll("#event-day-picker .day-btn.active")].map(e=>e.dataset.day));let i="FREQ=MONTHLY"===u?parseInt(this.shadowRoot.querySelector("#event-recurrence-monthday")?.value):null,n=this.shadowRoot.querySelector("#event-recurrence-end")?.value||"never",a=this.shadowRoot.querySelector("#event-recurrence-end-date")?.value||"",r=parseInt(this.shadowRoot.querySelector("#event-recurrence-end-count")?.value)||10;v=this._buildRrule(u,e,t,i,n,a,r)}let y={summary:h?"🔔 "+i:i,dtstart:e,dtend:t};c&&(y.location=c),v&&(y.rrule=v);try{await this.hass.callWS({type:"calendar/event/create",entity_id:n,event:y}),this._closeCreateEventDialog(),this._updateEvents()}catch(e){console.error("Failed to create event:",e)}}async _handleDeleteEvent(){let e=this._currentEventDetails;if(e&&e.uid){if(e.recurrence_id){this._showDeleteRecurringDialog={event:e,source:"details"};return}try{let t={type:"calendar/event/delete",entity_id:e.calendars[0],uid:e.uid};await this.hass.callWS(t),this._currentEventDetails=null,this._updateEvents()}catch(e){console.error("Failed to delete event:",e)}}}_handleEditEventClick(){let e=this._currentEventDetails;this._currentEventDetails=null,this._openEditEventDialog(e)}_openEditEventDialog(e){let t="";e.rrule?t=e.rrule:e.recurrence_rule&&(t=e.recurrence_rule);let i=this._parseRrule(t),n=e.summary||"",a=n.startsWith("🔔"),r=this._isFullDay(e.originalStart,e.originalEnd,!0),o=e.originalEnd?r?e.originalEnd.minus({days:1}):e.originalEnd:null;this._editFormData={title:a?n.replace(/^\u{1F514}\s*/u,""):n,notify:a,allDay:r,showAdvanced:!!i.freq,calendar:e.calendars[0]||"",startDate:e.originalStart?e.originalStart.toFormat("yyyy-MM-dd"):"",startTime:e.originalStart?e.originalStart.toFormat("HH:mm"):"",endDate:o?o.toFormat("yyyy-MM-dd"):"",endTime:o?o.toFormat("HH:mm"):"",location:e.location||"",recurrence:i.freq,recurrenceInterval:i.interval,recurrenceByDay:i.byDay,recurrenceByMonthDay:i.byMonthDay??(e.originalStart?e.originalStart.day:eh.DateTime.now().day),recurrenceEndType:i.endType,recurrenceEndDate:i.endDate,recurrenceEndCount:i.endCount},this._showEditEventDialog=e}_closeEditEventDialog(){this._showEditEventDialog=null,this._editFormData=null}async _handleDeleteEventFromEdit(){let e=this._showEditEventDialog;if(e&&e.uid){if(e.recurrence_id){this._showDeleteRecurringDialog={event:e,source:"edit"};return}try{let t={type:"calendar/event/delete",entity_id:e.calendars[0],uid:e.uid};await this.hass.callWS(t),this._showEditEventDialog=null,this._editFormData=null,this._updateEvents()}catch(e){console.error("Skylight Family Calendar: Failed to delete event:",e)}}}async _handleDeleteThisEvent(){let e=this._showDeleteRecurringDialog;if(!e)return;let t=e.event;this._showDeleteRecurringDialog=null;try{let i={type:"calendar/event/delete",entity_id:t.calendars[0],uid:t.uid,recurrence_id:t.recurrence_id};await this.hass.callWS(i),"edit"===e.source?(this._showEditEventDialog=null,this._editFormData=null):this._currentEventDetails=null,this._updateEvents()}catch(e){console.error("Skylight Family Calendar: Failed to delete single event:",e)}}async _handleDeleteAllEvents(){let e=this._showDeleteRecurringDialog;if(!e)return;let t=e.event;this._showDeleteRecurringDialog=null;try{let i={type:"calendar/event/delete",entity_id:t.calendars[0],uid:t.uid};await this.hass.callWS(i),"edit"===e.source?(this._showEditEventDialog=null,this._editFormData=null):this._currentEventDetails=null,this._updateEvents()}catch(e){console.error("Skylight Family Calendar: Failed to delete all events:",e)}}async _handleUpdateEvent(){let e=this._showEditEventDialog,t=this._editFormData;if(!e||!t)return void console.error("Skylight Family Calendar: No event or form data for update");if(e.recurrence_id){this._showRecurringConfirmDialog={event:e,form:{...t}};return}await this._performUpdateEvent(e,t,null)}async _handleUpdateThisEvent(){let e=this._showRecurringConfirmDialog;e&&(this._showRecurringConfirmDialog=null,await this._performUpdateEvent(e.event,e.form,"this"))}async _handleUpdateAllEvents(){let e=this._showRecurringConfirmDialog;e&&(this._showRecurringConfirmDialog=null,await this._performUpdateEvent(e.event,e.form,"all"))}async _performUpdateEvent(e,t,i){let n,a,r=t.title?.trim(),o=t.calendar,s=t.startDate&&t.startTime?`${t.startDate}T${t.startTime}`:"",l=t.endDate&&t.endTime?`${t.endDate}T${t.endTime}`:"",d=t.location?.trim()??"",c=this._buildRrule(t.recurrence,t.recurrenceInterval,t.recurrenceByDay,t.recurrenceByMonthDay,t.recurrenceEndType,t.recurrenceEndDate,t.recurrenceEndCount);if(!r||!s)return void console.error("Skylight Family Calendar: Missing required fields",{title:r,startInput:s});let u=t.notify?"🔔 "+r:r;if(t.allDay){let e=eh.DateTime.fromISO(t.startDate);if(!e.isValid)return void console.error("Skylight Family Calendar: Invalid start date",{startDate:t.startDate});let i=t.endDate?eh.DateTime.fromISO(t.endDate):e;(!i.isValid||i<e)&&(i=e),n=e.toISODate(),a=i.plus({days:1}).toISODate()}else{let e=eh.DateTime.fromISO(s);if(!e.isValid)return void console.error("Skylight Family Calendar: Invalid start date",{startInput:s});let t=l?eh.DateTime.fromISO(l):e.plus({hours:1});(!t.isValid||t<=e)&&(t=e.plus({hours:1})),n=e.toFormat("yyyy-MM-dd'T'HH:mm:ss"),a=t.toFormat("yyyy-MM-dd'T'HH:mm:ss")}let h=o||e.calendars[0];try{if(e.uid){let t={summary:u,dtstart:n,dtend:a};d&&(t.location=d),c&&(t.rrule=c);let r={type:"calendar/event/update",entity_id:h,uid:e.uid,event:t};"this"===i?r.recurrence_id=e.recurrence_id:"all"===i||e.recurrence_id&&(r.recurrence_id=e.recurrence_id,r.recurrence_range="THISANDFUTURE"),await this.hass.callWS(r)}this._showEditEventDialog=null,this._editFormData=null,this._updateEvents()}catch(t){if("not_supported"===t.code&&e.uid)try{let t={type:"calendar/event/delete",entity_id:h,uid:e.uid};"this"===i?t.recurrence_id=e.recurrence_id:"all"===i||e.recurrence_id&&(t.recurrence_id=e.recurrence_id,t.recurrence_range="THISANDFUTURE"),await this.hass.callWS(t);let r={summary:u,dtstart:n,dtend:a};d&&(r.location=d),c&&(r.rrule=c),await this.hass.callWS({type:"calendar/event/create",entity_id:h,event:r}),this._showEditEventDialog=null,this._editFormData=null,this._updateEvents()}catch(e){console.error("Skylight Family Calendar: Failed to update event (fallback):",e)}else console.error("Skylight Family Calendar: Failed to update event:",t)}}_toggleDayBtn(e){e.target.classList.toggle("active")}_toggleEditDayBtn(e,t){let i=[...this._editFormData.recurrenceByDay||[]],n=i.indexOf(t);n>=0?i.splice(n,1):i.push(t),this._editFormData={...this._editFormData,recurrenceByDay:i}}_dayLabel(e){return eh.Info.weekdays("short")[({MO:0,TU:1,WE:2,TH:3,FR:4,SA:5,SU:6})[e]]??e}_getDefaultMonthDay(){let e=this.shadowRoot?.querySelector("#event-start-date")?.value;return e?eh.DateTime.fromISO(e).day:eh.DateTime.now().day}_renderTimeSlots(e,t){let i=String(e||"09:00").split(":"),n=parseInt(i[0]),a=parseInt(i[1]),r=[];for(let e=this._slotStartHour;e<=this._slotEndHour;e++)r.push(e);let o=e=>t?this._setEditTime(e,null):this._setCreateTime(e,null),s=e=>t?this._setEditTime(null,e):this._setCreateTime(null,e);return P`
            <div class="time-slot-picker">
                <div class="slot-grid">
                    ${r.map(e=>P`
                        <button type="button" class="slot-btn ${e===n?"active":""}"
                            @click="${()=>o(e)}">${e}h</button>
                    `)}
                </div>
                <div class="slot-grid minutes">
                    ${[0,15,30,45].map(e=>P`
                        <button type="button" class="slot-btn ${e===a?"active":""}"
                            @click="${()=>s(e)}">${String(e).padStart(2,"0")}</button>
                    `)}
                </div>
            </div>
        `}_setCreateTime(e,t){let i=String(this._createStartTime||"09:00").split(":").map(Number),n=e??i[0],a=t??i[1];this._createStartTime=String(n).padStart(2,"0")+":"+String(a).padStart(2,"0"),"allday"===this._createDuration&&(this._createDuration="60")}_setEditTime(e,t){let i=this._editFormData,n=String(i.startTime||"09:00").split(":").map(Number),a=e??n[0],r=t??n[1],o=String(a).padStart(2,"0")+":"+String(r).padStart(2,"0");if(i.allDay){let e=eh.DateTime.fromISO(`${i.startDate}T${o}`).plus({minutes:60});this._editFormData={...i,allDay:!1,startTime:o,endDate:e.toFormat("yyyy-MM-dd"),endTime:e.toFormat("HH:mm")}}else this._updateEditStart({startTime:o})}_parseTime(e){let t,i;if(!e)return null;let n=String(e).trim().toLowerCase().replace(/\s+/g,""),a=n.match(/^(\d{1,2})[h:.,](\d{0,2})$/);if(a)t=parseInt(a[1]),i=""===a[2]?0:parseInt(a[2]);else if(/^\d{3,4}$/.test(n)){let e=n.padStart(4,"0");t=parseInt(e.slice(0,2)),i=parseInt(e.slice(2))}else{if(!/^\d{1,2}$/.test(n))return null;t=parseInt(n),i=0}return isNaN(t)||isNaN(i)||t>23||i>59?null:String(t).padStart(2,"0")+":"+String(i).padStart(2,"0")}_formatDuration(e){if((e=parseInt(e))<60)return e+" min";let t=Math.floor(e/60),i=e%60;return 0===i?t+" h":t+" h "+String(i).padStart(2,"0")}_getFormDuration(e){if(e.allDay)return"allday";let t=eh.DateTime.fromISO(`${e.startDate}T${e.startTime||"00:00"}`),i=eh.DateTime.fromISO(`${e.endDate}T${e.endTime||"00:00"}`);if(!t.isValid||!i.isValid)return"60";let n=Math.round(i.diff(t,"minutes").minutes);return n>0?String(n):"60"}_updateEditStart(e){let t=this._editFormData,i={...t,...e},n=eh.DateTime.fromISO(`${t.startDate}T${t.startTime||"00:00"}`),a=eh.DateTime.fromISO(`${t.endDate}T${t.endTime||"00:00"}`),r=eh.DateTime.fromISO(`${i.startDate}T${i.startTime||"00:00"}`);if(n.isValid&&a.isValid&&r.isValid&&a>=n){let e=Math.round(a.diff(n,"minutes").minutes),t=r.plus({minutes:e});i.endDate=t.toFormat("yyyy-MM-dd"),i.endTime=t.toFormat("HH:mm")}this._editFormData=i}_setEditDuration(e){let t=this._editFormData;if("allday"===e){this._editFormData={...t,allDay:!0,startTime:"00:00",endTime:"00:00",endDate:t.startDate};return}let i=t.allDay?"09:00":t.startTime||"09:00",n=eh.DateTime.fromISO(`${t.startDate}T${i}`);if(!n.isValid){this._editFormData={...t,allDay:!1,startTime:i};return}let a=n.plus({minutes:parseInt(e)||60});this._editFormData={...t,allDay:!1,startTime:i,endDate:a.toFormat("yyyy-MM-dd"),endTime:a.toFormat("HH:mm")}}_buildRrule(e,t,i,n,a,r,o){if(!e)return"";let s=e;return t&&t>1&&(s+=";INTERVAL="+t),"FREQ=WEEKLY"===e&&i&&i.length>0&&(s+=";BYDAY="+i.join(",")),"FREQ=MONTHLY"===e&&n&&(s+=";BYMONTHDAY="+n),"date"===a&&r?s+=";UNTIL="+eh.DateTime.fromISO(r).endOf("day").toFormat("yyyyMMdd'T'HHmmss"):"count"===a&&o>0&&(s+=";COUNT="+o),s}_parseRrule(e){let t={freq:"",interval:1,byDay:[],byMonthDay:null,endType:"never",endDate:"",endCount:10};if(!e)return t;for(let i of e.split(";")){let[e,n]=i.split("=");switch(e){case"FREQ":t.freq="FREQ="+n;break;case"INTERVAL":t.interval=parseInt(n)||1;break;case"BYDAY":t.byDay=n.split(",");break;case"BYMONTHDAY":t.byMonthDay=parseInt(n);break;case"UNTIL":t.endType="date",t.endDate=eh.DateTime.fromFormat(n,"yyyyMMdd'T'HHmmss").toFormat("yyyy-MM-dd");break;case"COUNT":t.endType="count",t.endCount=parseInt(n)||10}}return t}_getViewLabel(e){let t=e.toLowerCase();return this._language[t]??e}_getViewIcon(e){return({Today:"mdi:calendar-today",Tomorrow:"mdi:calendar-arrow-right",Week:"mdi:view-week",Biweek:"mdi:view-sequential",Month:"mdi:view-grid"})[e]??"mdi:calendar"}_getCalendarDisplayName(e){if(e.name)return e.name;if(this.hass&&e.entity&&this.hass.states[e.entity]){let t=this.hass.states[e.entity].attributes?.friendly_name;if(t)return t}return e.entity?.replace("calendar.","")??""}_handleLegendClick(e){if(!this._legendToggle)return;let t=this._hideCalendars.indexOf(e.entity),i=[...this._hideCalendars];t>-1?i.splice(t,1):i.push(e.entity),this._hideCalendars=i}_handleNavigationOriginalClick(){this._navigationOffset=0,this._updateEvents()}_handleNavigationNextClick(e){this._navigationOffset++,this._updateEvents()}_handleNavigationPreviousClick(e){this._navigationOffset--,this._updateEvents()}_selectDay(e){(this._selectedDay?.date?.day!==e.date.day||this._selectedDay?.date?.month!==e.date.month)&&(this._selectedDay=e,this.requestUpdate())}_handlePointerDown(e){e.isPrimary&&(this._touchStartX=e.clientX,this._touchStartY=e.clientY,this._touchPointerType=e.pointerType)}_handlePointerCancel(){this._touchStartX=void 0,this._touchStartY=void 0}_handlePointerUp(e){if(!e.isPrimary||void 0===this._touchStartX)return;let t=e.clientX-this._touchStartX,i=e.clientY-this._touchStartY,n=this._touchPointerType;if(this._touchStartX=void 0,this._touchStartY=void 0,"mouse"!==n&&Math.abs(t)>=50&&Math.abs(t)>Math.abs(i)){t<0?this._navigationOffset++:this._navigationOffset--,this._updateEvents();return}if(this._numberOfDaysIsMonth&&"mouse"!==n){let t=e.target.closest?.(".day");if(t&&!t.classList.contains("header")&&!t.classList.contains("outside")){let e=parseInt(t.dataset.date),i=parseInt(t.dataset.month),n=parseInt(t.dataset.year);if(e&&this._days){let t=this._days.find(t=>!t.isOutsideMonth&&t.date.day===e&&t.date.month===i&&t.date.year===n);t&&this._selectDay(t)}}}}_handleWeatherClick(e){let t=new Event("hass-more-info",{bubbles:!0,composed:!0});t.detail={entityId:this._weather.entity},this.dispatchEvent(t),e.stopImmediatePropagation()}_getNumberOfDays(e){return this._numberOfDaysIsMonth&&(e=eh.DateTime.now().daysInMonth),e}_getStartDate(e){let t=eh.DateTime.now();0!==this._navigationOffset&&(t=this._numberOfDaysIsMonth?t.plus({months:this._navigationOffset}):t.plus({days:this._numberOfDays*this._navigationOffset}));let i=String(e??this._startingDay).toLowerCase().trim(),n=this._numberOfDaysIsMonth&&["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].includes(i);switch(n&&(t=t.startOf("month")),i){case"yesterday":t=t.minus({days:1});break;case"tomorrow":t=t.plus({days:1});break;case"sunday":n||(t=this._getWeekDayDate(t,7));break;case"monday":n||(t=this._getWeekDayDate(t,1));break;case"tuesday":n||(t=this._getWeekDayDate(t,2));break;case"wednesday":n||(t=this._getWeekDayDate(t,3));break;case"thursday":n||(t=this._getWeekDayDate(t,4));break;case"friday":n||(t=this._getWeekDayDate(t,5));break;case"saturday":n||(t=this._getWeekDayDate(t,6));break;case"month":t=t.startOf("month")}return 0===this._startingDayOffset||n||(t=t.plus({days:this._startingDayOffset})),this._hideWeekend&&t.weekday>=6&&(t=this._getStartDate("monday")),t.startOf("day")}_getWeekDayDate(e,t){let i=e.weekday;return i>t?e.minus({days:i-t}):i<t?e.minus({days:7-t+i}):e}_convertApiDate(e){let t=null;return e&&(e.dateTime?t=eh.DateTime.fromISO(e.dateTime):e.date&&(t=eh.DateTime.fromISO(e.date))),t}_isFullDay(e,t,i){return null!==e&&null!==t&&!(e.hour>0)&&!(e.minute>0)&&!(e.second>0)&&!(t.hour>0)&&!(t.minute>0)&&!(t.second>0)&&(i||1===Math.abs(e.diff(t,"days").toObject().days))}_isSameDay(e,t){return null===e&&null===t||null!==e&&null!==t&&e.day===t.day&&e.month===t.month&&e.year===t.year}_isToday(e){let t=eh.DateTime.now().startOf("day");return this._isSameDay(e,t)}_isTomorrow(e){let t=eh.DateTime.now().startOf("day").plus({days:1});return this._isSameDay(e,t)}_isYesterday(e){let t=eh.DateTime.now().startOf("day").minus({days:1});return this._isSameDay(e,t)}}),window.customCards=window.customCards||[],window.customCards.push({type:"skylight-family-calendar-card",name:"Skylight Family Calendar Card",description:"A Skylight-inspired family calendar card with weather, event management, and touchscreen-friendly UI."}),customElements.define("skylight-family-calendar-card-editor",class extends eo{static styles=av;connectedCallback(){super.connectedCallback(),this.loadCustomElements()}async loadCustomElements(){if(!(customElements.get("ha-textfield")&&customElements.get("ha-select")&&customElements.get("ha-list-item")&&customElements.get("ha-entity-picker"))){try{let e=window.loadCardHelpers?await window.loadCardHelpers():null;if(e){let t=await e.createCardElement({type:"entities",entities:[]});await t.constructor.getConfigElement()}else customElements.get("hui-entities-card")&&await customElements.get("hui-entities-card").getConfigElement()}catch(e){console.warn("Skylight Family Calendar: editor component preload failed",e)}this.requestUpdate()}}static get properties(){return{hass:{},_config:{}}}setConfig(e){this._config=e}render(){return this.hass&&this._config?P`
            <div style="display: flex; flex-direction: column">
                ${this.addExpansionPanel("General",P`
                        ${this.addSelectField("theme","Theme",[{value:"skylight",label:"Skylight"},{value:"homeassistant",label:"Home Assistant"}],!0,"skylight")}
                        ${this.addHint("Visual style of the calendar card")}
                        ${this.addTextField("title","Title")}
                        ${this.addHint("Card title displayed above the calendar")}
                        ${this.addBooleanField("showTitle","Show title",!0)}
                        ${this.addSelectField("locale","Locale",[{value:"en",label:"English"},{value:"fr",label:"Français"},{value:"de",label:"Deutsch"},{value:"es",label:"Español"},{value:"it",label:"Italiano"},{value:"nl",label:"Nederlands"},{value:"pt",label:"Português"}],!0)}
                        ${this.addHint("Language for dates, buttons and UI texts")}
                        ${this.addSelectField("defaultView","Default view",[{value:"Today",label:"Today"},{value:"Tomorrow",label:"Tomorrow"},{value:"Week",label:"Week"},{value:"Biweek",label:"Biweek"},{value:"Month",label:"Month"}],!0)}
                        ${this.addHint("View shown when the card loads")}
                        ${this.addSelectField("startingDay","Starting day",[{value:"today",label:"Today"},{value:"tomorrow",label:"Tomorrow"},{value:"yesterday",label:"Yesterday"},{value:"sunday",label:"Sunday"},{value:"monday",label:"Monday"},{value:"tuesday",label:"Tuesday"},{value:"wednesday",label:"Wednesday"},{value:"thursday",label:"Thursday"},{value:"friday",label:"Friday"},{value:"saturday",label:"Saturday"},{value:"month",label:"Month"}],!0)}
                        ${this.addHint("First day shown in the calendar")}
                        ${this.addBooleanField("showHeader","Show Skylight header",!0)}
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
                                        ${this.addTextField("calendars."+t+".color","Color")}
                                        ${this.addHint("Hex color code (e.g. #FF5733). Auto-assigned if empty")}
                                        ${this.addIconPickerField("calendars."+t+".icon","Icon")}
                                        ${this.addTextField("calendars."+t+".eventTitleField","Event title field","text","summary")}
                                        ${this.addHint("Event attribute to use as title (default: summary)")}
                                        ${this.addTextField("calendars."+t+".filter","Filter events (regex)")}
                                        ${this.addHint("Only show events matching this pattern")}
                                        ${this.addTextField("calendars."+t+".filterText","Filter event text (regex)")}
                                        ${this.addHint("Replace event text matching this pattern")}
                                        ${this.addBooleanField("calendars."+t+".initiallyHidden","Initially hide calendar events")}
                                        ${this.addHint("Events hidden by default, toggle via filter buttons")}
                                        ${this.addButton("Remove calendar","mdi:trash-can",()=>{let e=JSON.parse(JSON.stringify(this._config));1===e.calendars.length?e.calendars=[]:(delete e.calendars[t],e.calendars=e.calendars.filter(Boolean)),this._config=e,this.dispatchConfigChangedEvent()})}
                                    `)}
                            `)}
                        ${this.addButton("Add calendar","mdi:plus",()=>{let e=this.getConfigValue("calendars").length;this.setConfigValue("calendars."+e,{})})}
                    `)}
                ${this.addExpansionPanel("Days",P`
                        ${this.addBooleanField("showWeekDayText","Show week day text",!0)}
                        ${this.addHint("Display day names (Mon, Tue...) above columns")}
                        ${this.addBooleanField("hideWeekend","Hide weekend")}
                        ${this.addBooleanField("hideDaysWithoutEvents","Hide days without events except for today")}
                        ${this.addBooleanField("hideTodayWithoutEvents","Also hide today without events")}
                        ${this.addTextField("maxDayEvents","Maximum number of events per day (0 is no maximum)","number",0)}
                        ${this.addHint('Limit events per day, extra shown as "+X more"')}
                        ${this.addBooleanField("showNavigation","Show navigation")}
                        ${this.addHint("Show arrows to navigate between weeks/months")}
                        ${this.addBooleanField("showLegend","Show calendar legend")}
                        ${this.addHint("Show the list of calendars with their colors")}
                        ${this.addBooleanField("legendToggle","Legend toggles calendar visibility")}
                        ${this.addHint("Click a legend entry to show/hide that calendar")}
                        ${this.addTextField("startingDayOffset","Starting day offset","number")}
                        ${this.addHint("Shift the first day by N days")}
                    `)}
                ${this.addExpansionPanel("Events",P`
                        ${this.addTextField("maxEvents","Maximum number of events (0 is no maximum)","number",0)}
                        ${this.addHint("Total event limit across all days")}
                        ${this.addBooleanField("hidePastEvents","Hide past events")}
                        ${this.addBooleanField("hideAllDayEvents","Hide all day events")}
                        ${this.addSelectField("multiDayMode","Multi day mode",[{value:"banner",label:"Banner (merged)"},{value:"default",label:"Default"},{value:"multiple",label:"Multiple"},{value:"single",label:"Single"}],!0,"banner")}
                        ${this.addHint("Banner: continuous strip across days (default). Others: repeated blocks or first day only")}
                        ${this.addTextField("filter","Filter events (regex)")}
                        ${this.addHint("Only show events whose title matches this pattern")}
                        ${this.addTextField("filterText","Filter event text (regex)")}
                        ${this.addHint("Replace displayed event text matching this pattern")}
                        ${this.addBooleanField("combineSimilarEvents","Combine similar events")}
                        ${this.addHint("Merge identical events from multiple calendars")}
                        ${this.addBooleanField("showDayName","Show day name")}
                        ${this.addHint("Show day name (Mon, Tue...) in each event")}
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
                ${this.addExpansionPanel("Date/time formats",P`
                        <p>These formats use <a href="https://moment.github.io/luxon/#/formatting?id=table-of-tokens" target="_blank">Luxon format tokens</a></p>
                        ${this.addTextField("dateFormat","Date format")}
                        ${this.addHint('e.g. dd/MM for "07/03", d MMM for "7 mars"')}
                        ${this.addTextField("timeFormat","Time format")}
                        ${this.addHint('e.g. HH:mm for "15:00", h:mm a for "3:00 PM"')}
                        ${this.addTextField("multiDayTimeFormat","Multi day time format")}
                        ${this.addHint("Format for multi-day events (default: d LLL HH:mm)")}
                        ${this.addTextField("dayFormat","Override day number")}
                        ${this.addHint("Custom format for the day number in column headers")}
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
                ${this.addExpansionPanel("Override columns",P`
                        <p>The number of columns is based on the size of the card.</p>
                        ${this.addTextField("columns.extraLarge","Extra large (>= 1920px)","number")}
                        ${this.addTextField("columns.large","Large (>= 1280px)","number")}
                        ${this.addTextField("columns.medium","Medium (>= 1024px)","number")}
                        ${this.addTextField("columns.small","Small (>= 640px)","number")}
                        ${this.addTextField("columns.extraSmall","Extra small (< 640px)","number")}
                    `)}
                ${this.addExpansionPanel("Appearance",P`
                        ${this.addBooleanField("colorFullEvent","Color full event background",!0)}
                        ${this.addHint("Color entire event block with calendar color instead of left border only")}
                        ${this.addBooleanField("noCardBackground","No card background")}
                        ${this.addHint("Make the card background transparent")}
                        ${this.addTextField("eventBackground","Override events background color")}
                        ${this.addHint("Custom background color for all events (hex or CSS color)")}
                        ${this.addBooleanField("compact","Compact mode")}
                        ${this.addHint("Reduce spacing and padding for smaller displays")}
                        ${this.addTextField("dayHeaderFontSize","Day header font size")}
                        ${this.addHint("e.g. 1.2em or 18px for the weekday header text")}
                        ${this.addTextField("dayHeaderColor","Day header color")}
                        ${this.addHint("CSS color for the weekday header text")}
                    `)}
                ${this.addExpansionPanel("Views",P`
                        <p>Select which view buttons are displayed. Leave empty for all views.</p>
                        ${this.addTextField("views","Views (comma separated: Today,Tomorrow,Week,Biweek,Month)")}
                        ${this.addHint('e.g. "Week,Month" to show only these two views')}
                    `)}
                ${this.addExpansionPanel("Texts",P`
                        <p style="color: var(--secondary-text-color); font-size: 0.85em; margin: 0 0 8px 0">Override auto-translated UI texts. Leave empty to use locale defaults.</p>
                        ${this.addTextField("texts.fullDay","Entire day")}
                        ${this.addTextField("texts.noEvents","No events")}
                        ${this.addTextField("texts.moreEvents","More events")}
                        ${this.addTextField("texts.today","Today")}
                        ${this.addTextField("texts.tomorrow","Tomorrow")}
                        ${this.addTextField("texts.yesterday","Yesterday")}
                        ${this.addTextField("texts.sunday","Sunday")}
                        ${this.addTextField("texts.monday","Monday")}
                        ${this.addTextField("texts.tuesday","Tuesday")}
                        ${this.addTextField("texts.wednesday","Wednesday")}
                        ${this.addTextField("texts.thursday","Thursday")}
                        ${this.addTextField("texts.friday","Friday")}
                        ${this.addTextField("texts.saturday","Saturday")}
                        ${this.addTextField("texts.editEvent","Edit event button")}
                        ${this.addTextField("texts.deleteEvent","Delete event button")}
                        ${this.addTextField("texts.eventTitle","Event title label")}
                        ${this.addTextField("texts.eventCalendar","Event calendar label")}
                        ${this.addTextField("texts.eventStart","Event start label")}
                        ${this.addTextField("texts.eventEnd","Event end label")}
                        ${this.addTextField("texts.cancel","Cancel button")}
                        ${this.addTextField("texts.create","Create button")}
                        ${this.addTextField("texts.save","Save button")}
                        ${this.addTextField("texts.newEvent","New event title")}
                        ${this.addTextField("texts.editEventTitle","Edit event title")}
                    `)}
                ${this.addExpansionPanel("AI & Handwriting",P`
                        <p style="margin: 0 0 8px 0; font-weight: 500;">✍️ Handwriting recognition</p>
                        ${this.addTextField("geminiApiKey","Google Gemini API key")}
                        ${this.addHint("Paste your key here to enable stylus handwriting in the quick-add area. Free key at aistudio.google.com/apikey")}
                        ${this.addTextField("geminiModel","Gemini model","text","gemini-2.0-flash")}
                        ${this.addTextField("claudeApiKey","Anthropic Claude API key (alternative)")}
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
                ${this.addExpansionPanel("Miscellaneous",P`
                        ${this.addTextField("googleApiKey","Google Places API key")}
                        ${this.addHint("Enable location autocomplete in event forms. Without key, location is a simple text field.")}
                        ${this.addTextField("locationLink","Location link base URL")}
                        ${this.addHint("Base URL for the location map link (default: Google Maps search)")}
                        ${this.addTextField("updateInterval","Override update interval","number")}
                        ${this.addHint("Auto-refresh interval in seconds (default: 60)")}
                    `)}
            </div>
        `:P``}addHint(e){return P`<p style="color: var(--secondary-text-color); font-size: 0.8em; margin: -4px 0 8px 0; padding: 0;">${e}</p>`}addTextField(e,t,i,n){return P`
            <ha-textfield
                name="${e}"
                label="${t??e}"
                type="${i??"text"}"
                .value="${String(this.getConfigValue(e,n)??"")}"
                @change="${this._valueChanged}"
            ></ha-textfield>
        `}addEntityPickerField(e,t,i,n){return P`
            <ha-entity-picker
                .hass="${this.hass}"
                name="${e}"
                label="${t??e}"
                .value="${this.getConfigValue(e,n)}"
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
        `}addSelectField(e,t,i,n,a){return P`
            <ha-select
                naturalMenuWidth
                name="${e}"
                label="${t??e}"
                .value="${this.getConfigValue(e,a)}"
                .clearable="${n??!1}"
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
        `}addExpansionPanel(e,t,i){return P`
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
        `}_valueChanged(e){let t,i=e.target;if(!i||!i.attributes.name)return;let n=i.attributes.name.value;if(t="HA-SWITCH"===i.tagName?i.checked:e.detail&&void 0!==e.detail.value?e.detail.value:i.value??"","HA-TEXTFIELD"===i.tagName&&"number"===i.getAttribute("type")&&""!==t&&null!=t){let e=Number(t);Number.isNaN(e)||(t=e)}this.getConfigValue(n)!==t&&this.setConfigValue(n,t)}getConfigValue(e,t){return this._config?(t=t??"",e.split(".").reduce((e,i)=>e[i]??t,this._config)??t):""}setConfigValue(e,t){let i=JSON.parse(JSON.stringify(this._config)),n=e.split("."),a=n.pop(),r=n.reduce((e,t)=>(e[t]||(e[t]={}),e[t]),i);""===t?delete r[a]:r[a]=t,this._config=i,this.dispatchConfigChangedEvent()}dispatchConfigChangedEvent(){let e=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(e)}}),console.info(`%c SKYLIGHT-FAMILY-CALENDAR %c v${ay.version} `,"color: white; background: #4A90E2; font-weight: 700;","color: #4A90E2; background: white; font-weight: 700;");
//# sourceMappingURL=skylight-family-calendar-card.js.map
