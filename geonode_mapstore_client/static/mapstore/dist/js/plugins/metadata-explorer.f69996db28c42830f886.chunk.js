(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[48216],{881808:(e,t,r)=>{"use strict";r.d(t,{eD:()=>n,AM:()=>o,ok:()=>i,Gg:()=>l,nT:()=>c,TL:()=>a,KS:()=>u,EB:()=>s,DZ:()=>f,Aw:()=>p,V_:()=>m,H0:()=>y,jW:()=>d,JZ:()=>b,fQ:()=>v,HK:()=>h,YO:()=>g,I6:()=>O});var n="MAP:LOAD_NEW_MAP",o="MAP_LOAD_MAP_CONFIG",i="MAP_CONFIG_LOADED",l="MAP_CONFIG_LOAD_ERROR",c="MAP_LOAD_INFO",a="MAP_INFO_LOAD_START",u="MAP_INFO_LOADED",s="MAP_INFO_LOAD_ERROR",f="MAP:MAP_SAVE_ERROR",p="MAP:MAP_SAVED",m="MAP:RESET_MAP_SAVE_ERROR";function y(e,t,r){return{type:i,config:e,legacy:!!t,mapId:t,zoomToExtent:r}}function d(e,t){return{type:l,error:e,mapId:t}}function b(e,t,r,n,i){return{type:o,configName:e,mapId:t,config:r,mapInfo:n,overrideConfig:i}}function v(e,t){return{type:u,mapId:t,info:e}}function h(e,t){return{type:s,mapId:e,error:t}}function g(e){return{type:a,mapId:e}}function O(e){return{type:c,mapId:e}}},615402:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(675263),o=r.n(n),i=r(124852),l=r.n(i);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,p(n.key),n)}}function u(e,t){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},u(e,t)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function f(e,t,r){return(t=p(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===c(t)?t:String(t)}var m=r(868195).FormattedHTMLMessage,y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(f,e);var t,r,n,o,i=(n=f,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=s(n);if(o){var r=s(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function f(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),i.apply(this,arguments)}return t=f,(r=[{key:"render",value:function(){return this.context.intl?l().createElement(m,{id:this.props.msgId,values:this.props.msgParams}):l().createElement("span",null,this.props.msgId||"")}}])&&a(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),f}(l().Component);f(y,"propTypes",{msgId:o().string.isRequired,msgParams:o().object}),f(y,"contextTypes",{intl:o().object});const d=y},975480:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(124852),o=r.n(n);const i=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).style,t=void 0===e?{display:"inline-block"}:e;return o().createElement("div",{style:t,className:"mapstore-inline-loader"})}},82110:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(124852),o=r.n(n),i=r(496259),l=r(532425);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===c(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const f=function(e){var t=e.width,r=e.height,n=e.className,c=void 0===n?"loader-container":n,a=e.contentStyle,s=void 0===a?{}:a;return o().createElement("div",{className:c},o().createElement(i.Z,null,(function(e){var n=e.width,i=void 0===n?200:n,c=e.height,a=void 0===c?200:c,f=t||(a>0?Math.min(i,a):i),p=r||(a>0?Math.min(i,a):i),m=Math.min(f,p);return o().createElement(l.Z,{size:m,style:u({padding:m/10,margin:"auto",display:"flex"},s)})})))}},352595:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=(0,r(461365).Z)(r(480681).Overlay)},694745:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var n=r(124852),o=r.n(n),i=r(294184),l=r.n(i),c=r(480681),a=r(807472),u=r(80717),s=r(867076),f=r(819081),p=r.n(f),m=r(975480),y={xs:" ms-xs",sm:" ms-sm",md:"",lg:" ms-lg"},d={className:{vertical:" ms-fullscreen-v",horizontal:" ms-fullscreen-h",full:" ms-fullscreen"},glyph:{expanded:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-small"},collapsed:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-full"}}};const b=(0,s.withState)("fullscreenState","onFullscreen",(function(e){var t=e.initialFullscreenState;return void 0===t?"collapsed":t}))((function(e){var t=e.show,r=void 0!==t&&t,n=e.loading,i=e.loadingText,s=e.onClose,f=void 0===s?function(){}:s,b=e.title,v=void 0===b?"":b,h=e.clickOutEnabled,g=void 0===h||h,O=e.showClose,P=void 0===O||O,j=e.disabledClose,w=void 0!==j&&j,E=e.showFullscreen,S=void 0!==E&&E,_=e.fullscreenType,x=void 0===_?"full":_,T=e.buttons,N=void 0===T?[]:T,A=e.size,R=void 0===A?"":A,C=e.bodyClassName,D=void 0===C?"":C,M=e.children,k=e.draggable,z=void 0!==k&&k,I=e.fullscreenState,Z=e.onFullscreen,F=e.fade,L=void 0!==F&&F,G=e.fitContent,B=e.modalClassName,V=void 0===B?"":B,W=e.dialogClassName,H=void 0===W?"":W,q=e.enableFooter,K=void 0===q||q,$=y[R]||"",J=S&&"expanded"===I&&d.className[x]||"",Q=r?o().createElement("div",{className:"modal-fixed ".concat(V," ")+(z?"ms-draggable":"")},o().createElement(a.Z,{id:"ms-resizable-modal",style:{display:"flex"},onClickOut:g?f:function(){},containerClassName:"ms-resizable-modal",draggable:z,modal:!0,className:l()("modal-dialog modal-content",$,J,H,{"ms-fit-content":G})},o().createElement("span",{role:"header"},o().createElement("h4",{className:"modal-title"},o().createElement("div",{className:"ms-title"},v),S&&d.className[x]&&o().createElement(c.Glyphicon,{className:"ms-header-btn",onClick:function(){return Z("expanded"===I?"collapsed":"expanded")},glyph:d.glyph[I][x]}),P&&f&&o().createElement(c.Glyphicon,{glyph:"1-close",className:"ms-header-btn",onClick:f,disabled:w}))),o().createElement("div",{role:"body",className:D},M),K&&o().createElement("div",{style:{display:"flex"},role:"footer"},o().createElement("div",{className:"ms-resizable-modal-loading-spinner-container"},n?o().createElement(m.Z,null):null),o().createElement("div",{className:"ms-resizable-modal-loading-text"},n?i:null),o().createElement(u.Z,{buttons:N})))):null;return L?o().createElement(p(),{transitionName:"ms-resizable-modal-fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},Q):Q}))},993451:(e,t,r)=>{"use strict";r.d(t,{Z:()=>O});var n=r(86638),o=r(675263),i=r.n(o),l=r(984596),c=r.n(l),a=r(701469),u=r.n(a),s=r(414293),f=r.n(s),p=r(747037),m=r.n(p),y=r(867076),d=["messages"];function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==b(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===b(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label";return(0,y.compose)((0,y.getContext)({messages:i().object}),(0,y.mapProps)((function(r){var o=r.messages,i=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(r,d);return h(h({},i),c()(e).reduce(function(e,t,r){return function(){var o=arguments.length>1?arguments[1]:void 0;return h(h({},arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),{},g({},o,e[o]&&function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"label";if(u()(t))return t.map((function(o){var i=(0,n.S$)(e,o[r]||m()(o)&&o||"");return h(h({},o),{},g({},r,f()(i)?t:i))}));var o=(0,n.S$)(e,t);return f()(o)?t:o}(t,e[o],r)))}}(i,o,t),{}))})))}},218291:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(124852),o=r.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}const l=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).fallback,r=void 0===t?null:t;return function(t){return(0,n.forwardRef)((function(l,c){return void 0===e||e(l)?o().createElement(n.Suspense,{fallback:r},o().createElement(t,i({ref:c},l))):null}))}}},202576:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var n=r(124852),o=r.n(n),i=r(180307),l=r.n(i),c=r(675263),a=r.n(c),u=r(480681),s=r(352595),f=r(950966);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,v(n.key),n)}}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function b(e,t,r){return(t=v(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===p(t)?t:String(t)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(a,e);var t,r,n,i,c=(n=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(n);if(i){var r=d(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function a(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),c.apply(this,arguments)}return t=a,(r=[{key:"renderPopover",value:function(){return o().createElement(u.Popover,{id:this.props.id,placement:this.props.placement,positionLeft:this.props.left,positionTop:this.props.top,title:this.props.title},this.props.text)}},{key:"renderContent",value:function(){var e=this;return o().createElement(u.Glyphicon,{ref:function(t){e.target=t},className:"text-".concat(this.props.bsStyle),glyph:this.props.glyph})}},{key:"render",value:function(){var e=this,t=!0===this.props.trigger?["hover","focus"]:this.props.trigger;return o().createElement("span",{className:"mapstore-info-popover"},this.props.trigger?o().createElement(f.Z,{trigger:t,placement:this.props.placement,overlay:this.renderPopover()},this.renderContent()):[this.renderContent(),o().createElement(s.Z,{placement:this.props.placement,show:!0,target:function(){return l().findDOMNode(e.target)}},this.renderPopover())])}}])&&m(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(o().Component);b(h,"propTypes",{id:a().string,title:a().string,text:a().string,glyph:a().string,bsStyle:a().string,placement:a().string,left:a().number,top:a().number,trigger:a().oneOfType([a().array,a().bool])}),b(h,"defaultProps",{id:"",title:"",text:"",placement:"right",left:200,top:50,glyph:"question-sign",bsStyle:"info",trigger:["hover","focus"]});const g=h},298854:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(124852);const o=(0,r(218291).Z)()((0,n.lazy)((function(){return Promise.all([r.e(39935),r.e(33841)]).then(r.bind(r,233841))})))},23279:(e,t,r)=>{var n=r(513218),o=r(707771),i=r(14841),l=Math.max,c=Math.min;e.exports=function(e,t,r){var a,u,s,f,p,m,y=0,d=!1,b=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=a,n=u;return a=u=void 0,y=t,f=e.apply(n,r)}function g(e){var r=e-m;return void 0===m||r>=t||r<0||b&&e-y>=s}function O(){var e=o();if(g(e))return P(e);p=setTimeout(O,function(e){var r=t-(e-m);return b?c(r,s-(e-y)):r}(e))}function P(e){return p=void 0,v&&a?h(e):(a=u=void 0,f)}function j(){var e=o(),r=g(e);if(a=arguments,u=this,m=e,r){if(void 0===p)return function(e){return y=e,p=setTimeout(O,t),d?h(e):f}(m);if(b)return clearTimeout(p),p=setTimeout(O,t),h(m)}return void 0===p&&(p=setTimeout(O,t)),f}return t=i(t)||0,n(r)&&(d=!!r.leading,s=(b="maxWait"in r)?l(i(r.maxWait)||0,t):s,v="trailing"in r?!!r.trailing:v),j.cancel=function(){void 0!==p&&clearTimeout(p),y=0,a=m=u=p=void 0},j.flush=function(){return void 0===p?f:P(o())},j}},435161:(e,t,r)=>{var n=r(829932),o=r(267206),i=r(269199),l=r(701469);e.exports=function(e,t){return(l(e)?n:i)(e,o(t,3))}},707771:(e,t,r)=>{var n=r(555639);e.exports=function(){return n.Date.now()}},819081:(e,t,r)=>{"use strict";e.exports=r(1174)}}]);