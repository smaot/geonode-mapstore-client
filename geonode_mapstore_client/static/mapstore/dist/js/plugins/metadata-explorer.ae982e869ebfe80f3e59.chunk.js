(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[48216],{881808:(t,e,r)=>{"use strict";r.d(e,{eD:()=>n,AM:()=>o,ok:()=>i,Gg:()=>u,nT:()=>c,TL:()=>f,KS:()=>a,EB:()=>l,DZ:()=>s,Aw:()=>p,V_:()=>y,H0:()=>b,jW:()=>m,JZ:()=>v,fQ:()=>d,HK:()=>g,YO:()=>h,I6:()=>O});var n="MAP:LOAD_NEW_MAP",o="MAP_LOAD_MAP_CONFIG",i="MAP_CONFIG_LOADED",u="MAP_CONFIG_LOAD_ERROR",c="MAP_LOAD_INFO",f="MAP_INFO_LOAD_START",a="MAP_INFO_LOADED",l="MAP_INFO_LOAD_ERROR",s="MAP:MAP_SAVE_ERROR",p="MAP:MAP_SAVED",y="MAP:RESET_MAP_SAVE_ERROR";function b(t,e,r){return{type:i,config:t,legacy:!!e,mapId:e,zoomToExtent:r}}function m(t,e){return{type:u,error:t,mapId:e}}function v(t,e,r,n,i){return{type:o,configName:t,mapId:e,config:r,mapInfo:n,overrideConfig:i}}function d(t,e){return{type:a,mapId:e,info:t}}function g(t,e){return{type:l,mapId:t,error:e}}function h(t){return{type:f,mapId:t}}function O(t){return{type:c,mapId:t}}},615402:(t,e,r)=>{"use strict";r.d(e,{Z:()=>d});var n=r(675263),o=r.n(n),i=r(124852),u=r.n(i);function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,b(n.key),n)}}function l(t,e){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},l(t,e)}function s(t,e){if(e&&("object"===c(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function p(t){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},p(t)}function y(t,e,r){return(e=b(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function b(t){var e=function(t,e){if("object"!==c(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===c(e)?e:String(e)}var m=r(868195).FormattedHTMLMessage,v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&l(t,e)}(c,t);var e,r,n,o,i=(n=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=p(n);if(o){var r=p(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return s(this,t)});function c(){return f(this,c),i.apply(this,arguments)}return e=c,(r=[{key:"render",value:function(){return this.context.intl?u().createElement(m,{id:this.props.msgId,values:this.props.msgParams}):u().createElement("span",null,this.props.msgId||"")}}])&&a(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),c}(u().Component);y(v,"propTypes",{msgId:o().string.isRequired,msgParams:o().object}),y(v,"contextTypes",{intl:o().object});const d=v},975480:(t,e,r)=>{"use strict";r.d(e,{Z:()=>i});var n=r(124852),o=r.n(n);const i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.style,r=void 0===e?{display:"inline-block"}:e;return o().createElement("div",{style:r,className:"mapstore-inline-loader"})}},82110:(t,e,r)=>{"use strict";r.d(e,{Z:()=>s});var n=r(124852),o=r.n(n),i=r(496259),u=r(532425);function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==c(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===c(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const s=function(t){var e=t.width,r=t.height,n=t.className,c=void 0===n?"loader-container":n,f=t.contentStyle,l=void 0===f?{}:f;return o().createElement("div",{className:c},o().createElement(i.Z,null,(function(t){var n=t.width,i=void 0===n?200:n,c=t.height,f=void 0===c?200:c,s=e||(f>0?Math.min(i,f):i),p=r||(f>0?Math.min(i,f):i),y=Math.min(s,p);return o().createElement(u.Z,{size:y,style:a({padding:y/10,margin:"auto",display:"flex"},l)})})))}},352595:(t,e,r)=>{"use strict";r.d(e,{Z:()=>n});const n=(0,r(461365).Z)(r(480681).Overlay)},993451:(t,e,r)=>{"use strict";r.d(e,{Z:()=>w});var n=r(86638),o=r(675263),i=r.n(o),u=r(984596),c=r.n(u),f=r(701469),a=r.n(f),l=r(414293),s=r.n(l),p=r(747037),y=r.n(p),b=r(867076),m=["messages"];function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function d(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){O(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function O(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==v(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===v(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var P=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"label";if(a()(e))return e.map((function(o){var i=(0,n.S$)(t,o[r]||y()(o)&&o||"");return h(h({},o),{},O({},r,s()(i)?e:i))}));var o=(0,n.S$)(t,e);return s()(o)?e:o},j=function(t,e,r){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;return h(h({},n),{},O({},o,t[o]&&P(e,t[o],r)))}};const w=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label";return(0,b.compose)((0,b.getContext)({messages:i().object}),(0,b.mapProps)((function(r){var n=r.messages,o=d(r,m);return h(h({},o),c()(t).reduce(j(o,n,e),{}))})))}},218291:(t,e,r)=>{"use strict";r.d(e,{Z:()=>u});var n=r(124852),o=r.n(n);function i(){return i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},i.apply(this,arguments)}const u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.fallback,u=void 0===r?null:r;return function(e){return(0,n.forwardRef)((function(r,c){return void 0===t||t(r)?o().createElement(n.Suspense,{fallback:u},o().createElement(e,i({ref:c},r))):null}))}}},202576:(t,e,r)=>{"use strict";r.d(e,{Z:()=>P});var n=r(124852),o=r.n(n),i=r(180307),u=r.n(i),c=r(675263),f=r.n(c),a=r(480681),l=r(352595),s=r(950966);function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function b(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,h(n.key),n)}}function m(t,e){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},m(t,e)}function v(t,e){if(e&&("object"===p(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}function g(t,e,r){return(e=h(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function h(t){var e=function(t,e){if("object"!==p(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===p(e)?e:String(e)}var O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}(f,t);var e,r,n,i,c=(n=f,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=d(n);if(i){var r=d(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return v(this,t)});function f(){return y(this,f),c.apply(this,arguments)}return e=f,(r=[{key:"renderPopover",value:function(){return o().createElement(a.Popover,{id:this.props.id,placement:this.props.placement,positionLeft:this.props.left,positionTop:this.props.top,title:this.props.title},this.props.text)}},{key:"renderContent",value:function(){var t=this;return o().createElement(a.Glyphicon,{ref:function(e){t.target=e},className:"text-".concat(this.props.bsStyle),glyph:this.props.glyph})}},{key:"render",value:function(){var t=this,e=!0===this.props.trigger?["hover","focus"]:this.props.trigger;return o().createElement("span",{className:"mapstore-info-popover"},this.props.trigger?o().createElement(s.Z,{trigger:e,placement:this.props.placement,overlay:this.renderPopover()},this.renderContent()):[this.renderContent(),o().createElement(l.Z,{placement:this.props.placement,show:!0,target:function(){return u().findDOMNode(t.target)}},this.renderPopover())])}}])&&b(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),f}(o().Component);g(O,"propTypes",{id:f().string,title:f().string,text:f().string,glyph:f().string,bsStyle:f().string,placement:f().string,left:f().number,top:f().number,trigger:f().oneOfType([f().array,f().bool])}),g(O,"defaultProps",{id:"",title:"",text:"",placement:"right",left:200,top:50,glyph:"question-sign",bsStyle:"info",trigger:["hover","focus"]});const P=O},298854:(t,e,r)=>{"use strict";r.d(e,{Z:()=>o});var n=r(124852);const o=(0,r(218291).Z)()((0,n.lazy)((function(){return Promise.all([r.e(39935),r.e(33841)]).then(r.bind(r,233841))})))},23279:(t,e,r)=>{var n=r(513218),o=r(707771),i=r(14841),u=Math.max,c=Math.min;t.exports=function(t,e,r){var f,a,l,s,p,y,b=0,m=!1,v=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var r=f,n=a;return f=a=void 0,b=e,s=t.apply(n,r)}function h(t){return b=t,p=setTimeout(P,e),m?g(t):s}function O(t){var r=t-y;return void 0===y||r>=e||r<0||v&&t-b>=l}function P(){var t=o();if(O(t))return j(t);p=setTimeout(P,function(t){var r=e-(t-y);return v?c(r,l-(t-b)):r}(t))}function j(t){return p=void 0,d&&f?g(t):(f=a=void 0,s)}function w(){var t=o(),r=O(t);if(f=arguments,a=this,y=t,r){if(void 0===p)return h(y);if(v)return clearTimeout(p),p=setTimeout(P,e),g(y)}return void 0===p&&(p=setTimeout(P,e)),s}return e=i(e)||0,n(r)&&(m=!!r.leading,l=(v="maxWait"in r)?u(i(r.maxWait)||0,e):l,d="trailing"in r?!!r.trailing:d),w.cancel=function(){void 0!==p&&clearTimeout(p),b=0,f=y=a=p=void 0},w.flush=function(){return void 0===p?s:j(o())},w}},435161:(t,e,r)=>{var n=r(829932),o=r(267206),i=r(269199),u=r(701469);t.exports=function(t,e){return(u(t)?n:i)(t,o(e,3))}},707771:(t,e,r)=>{var n=r(555639);t.exports=function(){return n.Date.now()}},819081:(t,e,r)=>{"use strict";t.exports=r(1174)}}]);