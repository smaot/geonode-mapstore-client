(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7236],{1550:(t,e,n)=>{"use strict";n.d(e,{pP:()=>r,TR:()=>i,N7:()=>c,mq:()=>u,uv:()=>a,Qy:()=>p,IL:()=>l,Li:()=>s,OW:()=>f,ZO:()=>m,Um:()=>y,TF:()=>g,Ls:()=>b,Ec:()=>h,Eu:()=>d,JJ:()=>E,nZ:()=>v,YD:()=>O,GI:()=>_,Jb:()=>S,LP:()=>x,xy:()=>C,o6:()=>P,FP:()=>T,Mo:()=>I,sO:()=>j,Px:()=>N,hd:()=>w,BV:()=>R,SO:()=>z,H0:()=>A,$X:()=>M,ou:()=>Z,NE:()=>L});var o=n(97395),r="CHANGE_MAP_VIEW",i="CLICK_ON_MAP",c="CHANGE_MOUSE_POINTER",u="CHANGE_ZOOM_LVL",a="PAN_TO",p="ZOOM_TO_EXTENT",l="ZOOM_TO_POINT",s="CHANGE_MAP_CRS",f="CHANGE_MAP_SCALES",m="CHANGE_MAP_STYLE",y="CHANGE_ROTATION",g="CREATION_ERROR_LAYER",b="UPDATE_VERSION",h="INIT_MAP",d="RESIZE_MAP",E="CHANGE_MAP_LIMITS",v="SET_MAP_RESOLUTIONS",O="REGISTER_EVENT_LISTENER",_="UNREGISTER_EVENT_LISTENER",S="MOUSE_MOVE";function x(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{family:""};return(0,o.vU)({title:"warning",message:"map.errorLoadingFont",values:t,position:"tc",autoDismiss:10})}function C(t,e,n){return{type:l,pos:t,zoom:e,crs:n}}function P(t,e,n,o,i,c,u,a){return{type:r,center:t,zoom:e,bbox:n,size:o,mapStateSource:i,projection:c,viewerOptions:u,resolution:a}}function T(t,e){return{type:i,point:t,layer:e}}function I(t){return{type:c,pointer:t}}function j(t,e){return{type:u,zoom:t,mapStateSource:e}}function N(t,e,n){return{type:p,extent:t,crs:e,maxZoom:n}}function w(t,e){return{type:m,style:t,mapStateSource:e}}function R(t){var e=t.restrictedExtent,n=t.crs,o=t.minZoom;return{type:E,restrictedExtent:e,crs:n,minZoom:o}}function z(t){return{type:v,resolutions:t}}var A=function(t,e){return{type:O,eventName:t,toolName:e}},M=function(t,e){return{type:_,eventName:t,toolName:e}},Z=function(t){return{type:S,position:t}},L=function(){return{type:"MOUSE_OUT"}}},38560:(t,e,n)=>{"use strict";n.d(e,{Z:()=>p});var o=n(30294),r=n(67294),i=n.n(r),c=n(94184),u=n.n(c);function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}const p=(l=o.Button,i().forwardRef((function(t,e){var n=t.disabled,o=t.className,r=t.onClick,c=void 0===r?function(){}:r,p=function(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}(t,["disabled","className","onClick"]);return i().createElement(l,a({ref:e,className:n?u()("disabled",o):o,onClick:function(){n||c.apply(void 0,arguments)}},p),p.children)})));var l},50966:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var o=n(61365),r=n(30294);const i=(0,o.Z)(r.OverlayTrigger)},61365:(t,e,n)=>{"use strict";n.d(e,{Z:()=>u});var o=n(67294),r=n.n(o),i=n(37275);function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}const u=function(t){return function(e){return r().createElement(t,c({},e,{container:document.querySelector("."+(i.ZP.getConfigProp("themePrefix")||"ms2")+" > div")||document.body}))}}},19461:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>G}),n(48966);var o=n(27418),r=n.n(o),i=n(67294),c=n.n(i),u=n(30294),a=n(33664),p=n(22222),l=n(1550),s=n(45697),f=n.n(s),m=n(38560),y=n(50966),g=n(52259),b=n(37275);function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function E(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function O(t,e){return!e||"object"!==h(e)&&"function"!=typeof e?_(t):e}function _(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function S(t){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(o);if(r){var n=S(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return O(this,t)});function a(){var t;d(this,a);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return x(_(t=i.call.apply(i,[this].concat(n))),"addTooltip",(function(e){var n=c().createElement(u.Tooltip,{id:"locate-tooltip"},t.props.tooltip);return c().createElement(y.Z,{placement:t.props.tooltipPlace,key:"overlay-trigger."+t.props.id,overlay:n},e)})),x(_(t),"zoomToMaxExtent",(function(){var e=t.props.mapConfig.maxExtent,n=t.props.mapConfig.size,o=1,r=t.props.mapConfig.center,i=t.props.mapConfig.projection||"EPSG:3857";e&&"[object Array]"===Object.prototype.toString.call(e)&&(o=(0,g.getZoomForExtent)(e,n,0,21),0===(r=(0,g.getCenterForExtent)(e,i)).x&&0===r.y||(r=(0,b.qg)(r,"EPSG:4326")));var c=(0,g.getBbox)(r,o,n);t.props.changeMapView(r,o,c,t.props.mapConfig.size,null,t.props.mapConfig.projection)})),x(_(t),"zoomToInitialExtent",(function(){var e=t.props.mapInitialConfig,n=(0,g.getBbox)(e.center,e.zoom,t.props.mapConfig.size);t.props.changeMapView(e.center,e.zoom,n,t.props.mapConfig.size,null,t.props.mapConfig.projection)})),t}return e=a,(n=[{key:"render",value:function(){var t=this;return this.addTooltip(c().createElement(m.Z,{id:this.props.id,style:this.props.style,bsSize:this.props.btnSize,onClick:function(){return t.props.useInitialExtent?t.zoomToInitialExtent():t.zoomToMaxExtent()},className:this.props.className,bsStyle:this.props.bsStyle},this.props.glyphicon?c().createElement(u.Glyphicon,{glyph:this.props.glyphicon}):null,this.props.glyphicon&&this.props.text?" ":null,this.props.text,this.props.help))}}])&&E(e.prototype,n),a}(c().Component);x(C,"propTypes",{id:f().string,image:f().string,glyphicon:f().string,text:f().string,btnSize:f().oneOf(["large","small","xsmall"]),mapConfig:f().object,mapInitialConfig:f().object,changeMapView:f().func,btnType:f().oneOf(["normal","image"]),help:f().oneOfType([f().string,f().element]),tooltip:f().element,tooltipPlace:f().string,className:f().string,useInitialExtent:f().bool,bsStyle:f().string,style:f().object}),x(C,"defaultProps",{id:"mapstore-zoomtomaxextent",glyphicon:"resize-full",text:void 0,btnSize:"xsmall",btnType:"normal",useInitialExtent:!1,tooltipPlace:"left",bsStyle:"default",className:"square-button"});const P=C;var T=n(5346),I=n(827);function j(t){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function N(){return(N=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function w(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function R(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function z(t,e){return(z=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function A(t,e){return!e||"object"!==j(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function M(t){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var Z=(0,p.P1)([I.Od,function(t){return t.mapInitialConfig}],(function(t,e){return{mapConfig:t,mapInitialConfig:e}})),L=(0,a.connect)(Z,{changeMapView:l.o6})(P),k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&z(t,e)}(u,t);var e,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=M(o);if(r){var n=M(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return A(this,t)});function u(){return w(this,u),i.apply(this,arguments)}return e=u,(n=[{key:"render",value:function(){return c().createElement(L,N({key:"zoomToMaxExtent"},this.props,{useInitialExtent:!0}))}}])&&R(e.prototype,n),u}(c().Component);const G={ZoomAllPlugin:r()(k,{Toolbar:{name:"ZoomAll",position:7,tooltip:"zoombuttons.zoomAllTooltip",icon:c().createElement(u.Glyphicon,{glyph:"resize-full"}),help:c().createElement(T.Z,{msgId:"helptexts.zoomToMaxExtentButton"}),tool:!0,priority:1}}),reducers:{}}},827:(t,e,n)=>{"use strict";n.d(e,{Od:()=>c,uy:()=>u,J9:()=>a,_H:()=>p,HJ:()=>l,pb:()=>s,zj:()=>m,A0:()=>y,S:()=>g,_e:()=>b,up:()=>h,Zs:()=>d,x9:()=>v,zT:()=>O,Mc:()=>_});var o=n(90183),r=n(22222),i=n(61545),c=function(t){return t.map&&t.map.present||t.map||t.config&&t.config.map||null},u=(0,r.P1)([c],(function(t){return t&&t.projection})),a=function(t){return(0,i.get)(t,"mapInitialConfig.mapId")&&parseInt((0,i.get)(t,"mapInitialConfig.mapId"),10)||function(t){return(0,i.get)(c(t),"mapId")&&parseInt((0,i.get)(c(t),"mapId"),10)||null}(t)},p=function(t){return(0,i.get)(c(t),"info")},l=function(t){var e=(0,i.get)(p(t),"canEdit");return void 0===e?(0,i.get)(t,"context.resource.canEdit"):e},s=function(t){return t.localConfig&&t.localConfig.projectionDefs||[]},f=function(t){return t.localConfig&&t.localConfig.mapConstraints||{}},m=function(t){return f(t).restrictedExtent},y=function(t){return f(t).crs},g=function(t){var e=f(t),n=u(t);return n&&(0,i.get)(e,'projectionsConstraints["'.concat(n,'"].minZoom'))||(0,i.get)(e,"minZoom")},b=function(t){return(0,i.get)(function(t){return(0,i.get)(c(t),"limits")}(t),"minZoom")},h=(0,r.P1)([function(t){return(0,i.get)(c(t),"resolutions")},u],(function(t,e){if(t&&e){var n=o.default.getUnits(e);return t.map((function(t){return 3779.527559055118*t*("degrees"===n?111194.87428468118:1)}))}return[]})),d=function(t){return t.map&&t.map.present&&t.map.present.info&&t.map.present.info.name||""},E=function(t){return(0,i.get)(c(t),"eventListeners.mousemove",[])},v=function(t){return!!E(t).length},O=function(t){return E(t).includes("mouseposition")},_=function(t){return E(t).includes("identifyFloatingTool")}},60536:(t,e,n)=>{(t.exports=n(9252)()).push([t.id,".msgapi #mapstore-zoomtomaxextent {\r\n    z-index: 1;\r\n    position: relative;\r\n}\r\n",""])},48966:(t,e,n)=>{var o=n(60536);"string"==typeof o&&(o=[[t.id,o,""]]),n(14246)(o,{}),o.locals&&(t.exports=o.locals)}}]);