(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[1825],{49243:(e,t,n)=>{"use strict";n.d(t,{y:()=>y});var r=n(61545),o=n(89255),i=n(7412),u=n(75875),c=n.n(u),l=n(90183);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var u,c=e[Symbol.iterator]();!(r=(u=c.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(e,t,n){var u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},f=u.attachJSON,s=u.itemId,d=void 0===s?null:s,y=function(t){return o.Observable.defer((function(){return c().get(e,{params:t})}))},h=function(t){return(0,i.pf)(n,e,t)},b=(0,i.pf)(n,e,t)?h:y;return f&&"application/json"!==t.info_format&&"application/json"!==t.outputFormat?o.Observable.forkJoin(b(t),b(p(p({},t),{},{info_format:"application/json"})).map((function(e){return e.data})).catch((function(){return o.Observable.of({})}))).map((function(e){var t=a(e,2),n=t[0],o=t[1];return p(p({},n),{},{features:o&&o.features&&o.features.filter((function(e){return!!(0,r.isNil)(d)||e.id===d})),featuresCrs:o&&o.crs&&(0,l.parseURN)(o.crs)})})):b(t).map((function(e){return e.data})).map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{data:(0,r.isString)(e)?e:p(p({},e),{},{features:e.features&&e.features.filter((function(e){return!d||e.id===d}))}),features:e.features&&e.features.filter((function(e){return!d||e.id===d})),featuresCrs:e&&e.crs&&(0,l.parseURN)(e.crs)}}))}},1262:(e,t,n)=>{"use strict";n.d(t,{Z:()=>j});var r=n(27418),o=n.n(r),i=n(45697),u=n.n(i),c=n(67294),l=n.n(c),a=n(73935),f=n.n(a),s=n(30294),p=n(38560),d=n(5346),y=n(7472);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(c,e);var t,n,r,i,u=(r=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(i){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function c(){var e;b(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return S(O(e=u.call.apply(u,[this].concat(n))),"setConfirmRef",(function(t){return e.confirm=t,e.confirm})),e}return t=c,(n=[{key:"componentDidMount",value:function(){this.props.focusConfirm&&f().findDOMNode(this.confirm).focus()}},{key:"render",value:function(){return l().createElement(y.Z,{draggable:this.props.draggable,onClickOut:this.props.onClose,id:"confirm-dialog",modal:this.props.modal,style:o()({},this.props.style,{display:this.props.show?"block":"none"})},l().createElement("span",{role:"header"},l().createElement("span",{className:"user-panel-title"},this.props.title),l().createElement("button",{onClick:this.props.onClose,className:"login-panel-close close"},this.props.closeGlyph?l().createElement(s.Glyphicon,{glyph:this.props.closeGlyph}):l().createElement("span",null,"×"))),l().createElement("div",{role:"body"},this.props.children),l().createElement("div",{role:"footer"},l().createElement(s.ButtonGroup,null,l().createElement(p.Z,{ref:this.setConfirmRef,onClick:this.props.onConfirm,disabled:this.props.confirmButtonDisabled,bsStyle:this.props.confirmButtonBSStyle},this.props.confirmButtonContent),l().createElement(p.Z,{onClick:this.props.onClose},this.props.closeText))))}}])&&m(t.prototype,n),c}(l().Component);S(w,"propTypes",{show:u().bool,draggable:u().bool,onClose:u().func,onConfirm:u().func,onSave:u().func,modal:u().bool,closeGlyph:u().string,style:u().object,buttonSize:u().string,inputStyle:u().object,title:u().node,confirmButtonContent:u().node,confirmButtonDisabled:u().bool,closeText:u().node,confirmButtonBSStyle:u().string,focusConfirm:u().bool}),S(w,"defaultProps",{onClose:function(){},onChange:function(){},modal:!0,title:l().createElement(d.Z,{msgId:"confirmTitle"}),closeGlyph:"",confirmButtonBSStyle:"danger",confirmButtonDisabled:!1,confirmButtonContent:l().createElement(d.Z,{msgId:"confirm"})||"Confirm",closeText:l().createElement(d.Z,{msgId:"close"}),includeCloseButton:!0,focusConfirm:!1});const j=w},99534:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(61365),o=n(56936);const i=(0,r.Z)(o.h_)},38482:(e,t,n)=>{"use strict";n.d(t,{Z:()=>S});var r=n(67294),o=n.n(r),i=n(61545),u=n(45697),c=n.n(u),l=n(73935),a=n.n(l),f=n(91033);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),e}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.debounceTime,n=e.querySelector,r=e.closest,u=void 0!==r&&r;return function(e){var r,l;return l=r=function(r){h(l,r);var c=m(l);function l(e){var r;return p(this,l),P(g(r=c.call(this,e)),"findDomNode",(function(){if(!r.isMounded)return null;var e=a().findDOMNode(g(r));return e&&u&&n?e.closest(n||"*"):e&&(n?e.querySelector(n):e)})),r.width=void 0,r.height=void 0,r.skipOnMount=e.skipOnMount,r.div=null,r.onResize=(0,i.debounce)((function(){var e;return(e=r.props).onResize.apply(e,arguments)}),void 0!==t?t:e.debounceTime||1e3),r.ro=new f.Z((function(e){e.forEach((function(e){var t=e.contentRect,n=t.width,o=t.height,i=r.props.handleWidth&&r.width!==n,u=r.props.handleHeight&&r.height!==o;r.skipOnMount||!i&&!u||r.onResize({width:n,height:o}),r.width=n,r.height=o,r.skipOnMount=!1}))})),r}return y(l,[{key:"componentDidMount",value:function(){this.isMounded=!0,this.div=this.findDomNode(),this.div&&this.ro.observe(this.div)}},{key:"componentDidUpdate",value:function(){this.div=this.findDomNode(),this.div&&this.ro.observe(this.div)}},{key:"componentWillUnmount",value:function(){var e=this.findDomNode();e&&this.ro&&this.ro.unobserve&&this.ro.unobserve(e)}},{key:"render",value:function(){return o().createElement(e,this.props)}}]),l}(o().Component),P(r,"propTypes",{handleWidth:c().bool,handleHeight:c().bool,onResize:c().func}),P(r,"defaultProps",{onResize:function(){},handleWidth:!0,handleHeight:!0}),l}}},51593:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>R});var r=n(89255),o=n(10206),i=n(79047),u=n(55368),c=n(9825),l=n(83520),a=n(19461),f=n(95605),s=n(9860),p=n(23634),d=n(9842),y=n(68783),h=n(13573),b=n(63277),m=n(57668),v=n(58888),g=n(43526),O=n(59224),P=n(70335),S=n(48401),w=n(65986),j=n(75751),C=n(46618),E=n(77314),_=n(79870),k={plugins:{MapPlugin:u.default,IdentifyPlugin:c.default,ToolbarPlugin:l.default,ZoomAllPlugin:a.default,MapLoadingPlugin:f.default,OmniBarPlugin:s.default,BackgroundSelectorPlugin:p.default,FullScreenPlugin:d.Z,ZoomInPlugin:y.default,ZoomOutPlugin:h.default,ExpanderPlugin:b.default,BurgerMenuPlugin:m.default,ScaleBoxPlugin:v.default,MapFooterPlugin:g.default,PrintPlugin:O.default,TimelinePlugin:P.default,PlaybackPlugin:S.default,AddReducersAndEpics:{reducers:{security:w.Z,maps:j.Z,maplayout:C.Z},epics:{_setThumbnail:o.PD,updateMapLayoutEpic:o.CG,zoomToVisibleAreaEpic:function(){return r.Observable.empty()}}}},requires:{ReactSwipe:E.Z,SwipeHeader:_.Z}};const R=i.A?(0,i.A)(k):k},64317:(e,t,n)=>{"use strict";var r=i(n(1174)),o=i(n(92381));function i(e){return e&&e.__esModule?e:{default:e}}e.exports={TransitionGroup:o.default,CSSTransitionGroup:r.default}}}]);