(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[4276],{57604:(t,e,n)=>{"use strict";n.d(e,{XV:()=>r,mE:()=>o,at:()=>i,mD:()=>a,jw:()=>c,yR:()=>u,pF:()=>s,PZ:()=>l});var r="DIMENSION:UPDATE_LAYER_DIMENSION_DATA",o="TIME_MANAGER:SET_CURRENT_TIME",i="TIME_MANAGER:SET_OFFSET_TIME",a="TIME_MANAGER:MOVE_TIME",c=function(t,e,n){return{type:r,dimension:e,layerId:t,data:n}},u=function(t){return{type:o,time:t}},s=function(t){return{type:i,offsetTime:t}},l=function(t){return{type:a,time:t}}},80416:(t,e,n)=>{"use strict";n.d(e,{yS:()=>r,Zz:()=>o,ms:()=>i,ih:()=>a,OX:()=>c,sb:()=>u,K$:()=>s,k7:()=>l,cX:()=>f,x9:()=>p,vs:()=>d,oE:()=>y,Po:()=>m,qv:()=>b,cI:()=>v,g6:()=>h,I4:()=>E,l$:()=>g,Xv:()=>O,k3:()=>S,CQ:()=>A,sH:()=>T,c7:()=>P,_7:()=>_,eF:()=>R,O6:()=>w,ED:()=>N,RP:()=>L,sF:()=>I,VP:()=>j,He:()=>D,vO:()=>M,WO:()=>C,bh:()=>k,pV:()=>x,ZF:()=>Y,tV:()=>G,Dv:()=>Z,Yz:()=>U,kI:()=>F,XG:()=>V,A4:()=>B,ct:()=>H,oh:()=>W,$h:()=>z,ud:()=>K,Qr:()=>q,LR:()=>X,nN:()=>Q,UG:()=>$,F5:()=>J,c9:()=>tt,Jh:()=>et});var r="CHANGE_LAYER_PROPERTIES",o="LAYERS:CHANGE_LAYER_PARAMS",i="CHANGE_GROUP_PROPERTIES",a="TOGGLE_NODE",c="SORT_NODE",u="REMOVE_NODE",s="UPDATE_NODE",l="MOVE_NODE",f="LAYER_LOADING",p="LAYER_LOAD",d="LAYER_ERROR",y="ADD_LAYER",m="ADD_GROUP",b="REMOVE_LAYER",v="SHOW_SETTINGS",h="HIDE_SETTINGS",E="UPDATE_SETTINGS",g="REFRESH_LAYERS",O="LAYERS:UPDATE_LAYERS_DIMENSION",S="LAYERS_REFRESHED",A="LAYERS_REFRESH_ERROR",T="LAYERS:CLEAR_LAYERS",P="LAYERS:SELECT_NODE",_="LAYERS:FILTER_LAYERS",R="LAYERS:SHOW_LAYER_METADATA",w="LAYERS:HIDE_LAYER_METADATA",N="LAYERS:UPDATE_SETTINGS_PARAMS";function L(t,e,n){return{type:v,node:t,nodeType:e,options:n}}function I(){return{type:h}}function j(t){return{type:E,options:t}}function D(t,e){return{type:r,newProperties:e,layer:t}}function M(t,e){return{type:o,layer:t,params:e}}function C(t,e){return{type:i,newProperties:e,group:t}}function k(t,e,n){return{type:a,node:t,nodeType:e,status:!n}}function x(t){return{type:"CONTEXT_NODE",node:t}}function Y(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return{type:u,node:t,nodeType:e,removeEmpty:n}}function G(t,e,n){return{type:s,node:t,nodeType:e,options:n}}function Z(t,e,n){return{type:l,node:t,groupId:e,index:n}}function U(t){return{type:f,layerId:t}}function F(t,e){return{type:p,layerId:t,error:e}}function V(t,e,n){return{type:d,layerId:t,tilesCount:e,tilesErrorCount:n}}function B(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return{type:y,layer:t,foreground:e}}function H(t,e){return{type:r,layer:t,newProperties:{_v_:e||(new Date).getTime()}}}function W(t){return{type:S,layers:t}}function z(t,e){return{type:A,layers:t,error:e}}function K(t,e,n,r){return{type:O,dimension:t,value:e,options:n,layers:r}}function q(t){return{type:"LAYERS:BROWSE_DATA",layer:t}}function X(t){return{type:"LAYERS:DOWNLOAD",layer:t}}function Q(){return{type:T}}function $(t,e,n){return{type:P,id:t,nodeType:e,ctrlKey:n}}function J(t){return{type:_,text:t}}function tt(t,e){return{type:R,metadataRecord:t,maskLoading:e}}function et(){return{type:w}}},1550:(t,e,n)=>{"use strict";n.d(e,{pP:()=>o,TR:()=>i,N7:()=>a,mq:()=>c,uv:()=>u,Qy:()=>s,IL:()=>l,Li:()=>f,OW:()=>p,ZO:()=>d,Um:()=>y,TF:()=>m,Ls:()=>b,Ec:()=>v,Eu:()=>h,JJ:()=>E,nZ:()=>g,YD:()=>O,GI:()=>S,Jb:()=>A,LP:()=>T,xy:()=>P,o6:()=>_,FP:()=>R,Mo:()=>w,sO:()=>N,Px:()=>L,hd:()=>I,BV:()=>j,SO:()=>D,H0:()=>M,$X:()=>C,ou:()=>k,NE:()=>x});var r=n(97395),o="CHANGE_MAP_VIEW",i="CLICK_ON_MAP",a="CHANGE_MOUSE_POINTER",c="CHANGE_ZOOM_LVL",u="PAN_TO",s="ZOOM_TO_EXTENT",l="ZOOM_TO_POINT",f="CHANGE_MAP_CRS",p="CHANGE_MAP_SCALES",d="CHANGE_MAP_STYLE",y="CHANGE_ROTATION",m="CREATION_ERROR_LAYER",b="UPDATE_VERSION",v="INIT_MAP",h="RESIZE_MAP",E="CHANGE_MAP_LIMITS",g="SET_MAP_RESOLUTIONS",O="REGISTER_EVENT_LISTENER",S="UNREGISTER_EVENT_LISTENER",A="MOUSE_MOVE";function T(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{family:""};return(0,r.vU)({title:"warning",message:"map.errorLoadingFont",values:t,position:"tc",autoDismiss:10})}function P(t,e,n){return{type:l,pos:t,zoom:e,crs:n}}function _(t,e,n,r,i,a,c,u){return{type:o,center:t,zoom:e,bbox:n,size:r,mapStateSource:i,projection:a,viewerOptions:c,resolution:u}}function R(t,e){return{type:i,point:t,layer:e}}function w(t){return{type:a,pointer:t}}function N(t,e){return{type:c,zoom:t,mapStateSource:e}}function L(t,e,n){return{type:s,extent:t,crs:e,maxZoom:n}}function I(t,e){return{type:d,style:t,mapStateSource:e}}function j(t){var e=t.restrictedExtent,n=t.crs,r=t.minZoom;return{type:E,restrictedExtent:e,crs:n,minZoom:r}}function D(t){return{type:g,resolutions:t}}var M=function(t,e){return{type:O,eventName:t,toolName:e}},C=function(t,e){return{type:S,eventName:t,toolName:e}},k=function(t){return{type:A,position:t}},x=function(){return{type:"MOUSE_OUT"}}},62187:(t,e,n)=>{"use strict";n.d(e,{NH:()=>r,E7:()=>o,N7:()=>i,L9:()=>a,hQ:()=>c,NC:()=>u,c9:()=>s,up:()=>l,FZ:()=>f,Fi:()=>p,KB:()=>d,E0:()=>y,Q_:()=>m,hY:()=>b,wO:()=>v,sT:()=>h,wR:()=>E,h1:()=>g,hS:()=>O,zK:()=>S,VS:()=>A,oz:()=>T,FH:()=>P,XN:()=>_,Ym:()=>R});var r="PLAYBACK:START",o="PLAYBACK:PAUSE",i="PLAYBACK:STOP",a="PLAYBACK:SET_FRAMES",c="PLAYBACK:APPEND_FRAMES",u="PLAYBACK:FRAMES_LOADING",s="PLAYBACK:SET_CURRENT_FRAME",l="PLAYBACK:SELECT_PLAYBACK_RANGE",f="PLAYBACK:SETTINGS_CHANGE",p="PLAYBACK:TOGGLE_ANIMATION_MODE",d="PLAYBACK:ANIMATION_STEP_MOVE",y="PLAYBACK:UPDATE_METADATA",m={PLAY:"PLAY",STOP:"STOP",PAUSE:"PAUSE"},b=function(){return{type:r}},v=function(){return{type:o}},h=function(){return{type:i}},E=function(t){return{type:a,frames:t}},g=function(t){return{type:s,frame:t}},O=function(t){return{type:c,frames:t}},S=function(t){return{type:u,loading:t}},A=function(t){return{type:l,range:t}},T=function(t,e){return{type:f,name:t,value:e}},P=function(){return{type:p}},_=function(t){return{type:d,direction:t}},R=function(t){var e=t.next,n=t.previous,r=t.forTime;return{type:y,forTime:r,next:e,previous:n}}},57676:(t,e,n)=>{"use strict";n.d(e,{qx:()=>r,HM:()=>o,Lv:()=>i,y3:()=>a,iv:()=>c,cO:()=>u,br:()=>s,aA:()=>l,_V:()=>f,kq:()=>p,JU:()=>d,PQ:()=>y,cb:()=>m,KI:()=>b,M5:()=>v,w2:()=>h,w:()=>E,Z7:()=>g});var r="TIMELINE:SELECT_TIME",o=function(t,e,n,o){return{type:r,time:t,group:e,what:n,item:o}},i="TIMELINE:RANGE_CHANGE",a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.start,n=t.end;return{type:i,start:e,end:n}},c="TIMELINE:RANGE_DATA_LOADED",u=function(t,e,n,r){return{type:c,layerId:t,range:e,histogram:n,domain:r}},s="TIMELINE:LOADING",l=function(t,e){return{type:s,layerId:t,loading:e}},f="TIMELINE:SELECT_LAYER",p=function(t){return{type:f,layerId:t}},d="TIMELINE:ENABLE_OFFSET",y=function(t){return{type:d,enabled:t}},m="TIMELINE:AUTOSELECT",b=function(){return{type:m}},v="TIMELINE:SET_COLLAPSED",h=function(t){return{type:v,collapsed:t}},E="TIMELINE:SET_MAP_SYNC",g=function(t){return{type:E,mapSync:t}}},96361:(t,e,n)=>{"use strict";n.d(e,{i8:()=>p,ot:()=>d,Ci:()=>y,CX:()=>m});var r=n(61545),o=n(89255),i=n(75875),a=n.n(i),c=n(10284);function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=function(t){return Object.keys(t).reduce((function(e,n){return void 0!==t[n]&&null!==t[n]?s(s({},e),{},l({},n,t[n])):e}),{})},p=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=r.service,u=void 0===i?"WMTS":i,l=r.version,p=void 0===l?"1.0.0":l,d=r.tileMatrixSet,y=void 0===d?"EPSG:4326":d,m=r.bbox,b=r.domains,v=r.expandLimit;return o.Observable.defer((function(){return a().get(t,{params:f(s({service:u,REQUEST:"DescribeDomains",version:p,layer:e,tileMatrixSet:y,bbox:m,domains:b,expandLimit:v},n))})})).let(c.oB).switchMap((function(t){return(0,c.sw)(t.data)}))},d=function(t,e,n,r,i){var u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},l=u.service,p=void 0===l?"WMTS":l,d=u.version,y=void 0===d?"1.1.0":d,m=u.tileMatrixSet,b=void 0===m?"EPSG:4326":m,v=u.bbox;return o.Observable.defer((function(){return a().get(t,{params:f(s({service:p,REQUEST:"GetHistogram",resolution:i,histogram:n,version:y,layer:e,tileMatrixSet:b,bbox:v},r))})})).let(c.oB).switchMap((function(t){return(0,c.sw)(t.data)}))},y=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=r.time,u=r.fromValue,s=r.sort,l=void 0===s?"asc":s,p=r.limit,d=void 0===p?20:p,y=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},m=y.bbox,b=y.tileMatrixSet,v=void 0===b?"EPSG:4326":b,h=y.service,E=void 0===h?"WMTS":h,g=y.version,O=void 0===g?"1.0.0":g;return o.Observable.defer((function(){return a().get(t,{params:f({service:E,version:O,request:"GetDomainValues",tileMatrixSet:v,bbox:m,layer:e,domain:n,fromValue:u,sort:l,limit:d,time:i})})})).let(c.oB).switchMap((function(t){return(0,c.sw)(t.data)}))},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.url;return(0,r.endsWith)(e,"/wms")?(0,r.replace)(e,/\/wms$/,"/gwc/service/wmts"):(0,r.endsWith)(e,"/ows")?(0,r.replace)(e,/\/ows$/,"/gwc/service/wmts"):e}},75480:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var r=n(67294),o=n.n(r);const i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.style,n=void 0===e?{display:"inline-block"}:e;return o().createElement("div",{style:n,className:"mapstore-inline-loader"})}},52595:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});const r=(0,n(61365).Z)(n(30294).Overlay)},38482:(t,e,n)=>{"use strict";n.d(e,{Z:()=>S});var r=n(67294),o=n.n(r),i=n(61545),a=n(45697),c=n.n(a),u=n(73935),s=n.n(u),l=n(91033);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function y(t,e,n){return e&&d(t.prototype,e),n&&d(t,n),t}function m(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=g(t);if(e){var o=g(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?E(t):e}function E(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.debounceTime,n=t.querySelector,r=t.closest,a=void 0!==r&&r;return function(t){var r,u;return u=r=function(r){m(u,r);var c=v(u);function u(t){var r;return p(this,u),O(E(r=c.call(this,t)),"findDomNode",(function(){if(!r.isMounded)return null;var t=s().findDOMNode(E(r));return t&&a&&n?t.closest(n||"*"):t&&(n?t.querySelector(n):t)})),r.width=void 0,r.height=void 0,r.skipOnMount=t.skipOnMount,r.div=null,r.onResize=(0,i.debounce)((function(){var t;return(t=r.props).onResize.apply(t,arguments)}),void 0!==e?e:t.debounceTime||1e3),r.ro=new l.Z((function(t){t.forEach((function(t){var e=t.contentRect,n=e.width,o=e.height,i=r.props.handleWidth&&r.width!==n,a=r.props.handleHeight&&r.height!==o;r.skipOnMount||!i&&!a||r.onResize({width:n,height:o}),r.width=n,r.height=o,r.skipOnMount=!1}))})),r}return y(u,[{key:"componentDidMount",value:function(){this.isMounded=!0,this.div=this.findDomNode(),this.div&&this.ro.observe(this.div)}},{key:"componentDidUpdate",value:function(){this.div=this.findDomNode(),this.div&&this.ro.observe(this.div)}},{key:"componentWillUnmount",value:function(){var t=this.findDomNode();t&&this.ro&&this.ro.unobserve&&this.ro.unobserve(t)}},{key:"render",value:function(){return o().createElement(t,this.props)}}]),u}(o().Component),O(r,"propTypes",{handleWidth:c().bool,handleHeight:c().bool,onResize:c().func}),O(r,"defaultProps",{onResize:function(){},handleWidth:!0,handleHeight:!0}),u}}},65295:(t,e,n)=>{"use strict";n.d(e,{Z:()=>A});var r=n(67294),o=n.n(r),i=n(61545),a=n(45697),c=n.n(a),u=n(30381),s=n.n(u),l=n(30294),f=n(15135),p=n(38560);function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t,e){return!e||"object"!==d(e)&&"function"!=typeof e?h(t):e}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function E(t){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var O=(0,f.Z)(l.Glyphicon),S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(u,t);var e,n,r,a,c=(r=u,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=E(r);if(a){var n=E(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return v(this,t)});function u(){var t;y(this,u);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return g(h(t=c.call.apply(c,[this].concat(n))),"onUpdate",(function(e,n){var r=s()(t.props.date).utc(),o=n?s()(r).add(1,e):s()(r).subtract(1,e);o.isValid()&&!isNaN(o.toDate().getTime())&&t.props.onUpdate(o.toISOString())})),g(h(t),"onChange",(function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return t};if(""!==n){var o=s()(t.props.date).utc(),i=o["day"===e?"date":e]&&s()(o)["day"===e?"date":e](r(n));i.isValid()&&!isNaN(i.toDate().getTime())&&t.props.onUpdate(i.toISOString())}})),g(h(t),"getForm",(function(){var e=t.props.date&&s()(t.props.date).utc();return[{name:"icon",value:"calendar",type:"icon"},{name:"day",placeholder:"DD",value:e&&e.date()},{name:"month",placeholder:"MM",readOnly:!0,value:e&&e.month(),format:function(t){return!(0,i.isNil)(t)&&""!==t&&s().monthsShort(t)},parseValue:function(t){return t-1}},{name:"year",placeholder:"YYYY",value:e&&e.year()},{name:"icon",value:"time",type:"icon"},{name:"hours",placeholder:"hh",value:e&&e.hours()},{name:"separator",value:":",type:"separator"},{name:"minutes",placeholder:"mm",value:e&&e.minutes()},{name:"separator",value:":",type:"separator"},{name:"seconds",placeholder:"ss",value:e&&e.seconds()},{name:"separator",value:e&&e.utcOffset(),type:"separator",format:function(t){return"UTC "+(t>=0?"+":"-")+(0,i.padStart)(t/60,2,0)}}]})),t}return e=u,(n=[{key:"render",value:function(){var t=this,e=this.getForm();return o().createElement(l.Form,{className:"ms-inline-datetime ".concat(this.props.className),style:this.props.style},o().createElement(l.FormGroup,{controlId:"inlineDateTime"},this.props.glyph&&o().createElement("div",{style:this.props.clickable?{cursor:"pointer"}:{},onClick:function(){return t.props.clickable&&t.props.onIconClick(t.props.date,t.props.glyph)}},o().createElement(O,{tooltip:this.props.clickable?this.props.tooltip:void 0,tooltipId:this.props.clickable?this.props.tooltipId:void 0,className:"ms-inline-datetime-icon",glyph:this.props.glyph})),e.map((function(e){return"icon"===e.type&&o().createElement("div",{className:"ms-inline-datetime-input ms-dt-".concat(e.name)},o().createElement(O,{glyph:e.value}))||"separator"===e.type&&o().createElement("div",{className:"ms-inline-datetime-input ms-dt-".concat(e.name)},e.format&&e.format(e.value)||e.value)||o().createElement("div",{className:"ms-inline-datetime-input ms-dt-".concat(e.name)},t.props.showButtons&&o().createElement(p.Z,{bsSize:"xs",disabled:!t.props.date,onClick:function(){return t.onUpdate(e.name,!0)}},o().createElement(O,{glyph:"chevron-up"})),o().createElement(l.FormControl,{type:"text",readOnly:e.readOnly,placeholder:e.placeholder||e.name,disabled:!t.props.date,value:e.format&&e.format(e.value)||e.value,onChange:function(n){return t.onChange(e.name,n.target.value,e.parseValue)}}),t.props.showButtons&&o().createElement(p.Z,{bsSize:"xs",disabled:!t.props.date,onClick:function(){return t.onUpdate(e.name)}},o().createElement(O,{glyph:"chevron-down"})))}))))}}])&&m(e.prototype,n),u}(o().Component);g(S,"propTypes",{date:c().string,clickable:c().bool,onUpdate:c().func,onIconClick:c().func,glyph:c().string,style:c().object,className:c().string,tooltip:c().string,tooltipId:c().string,showButtons:c().bool}),g(S,"defaultProps",{date:"",onIconClick:function(){},clickable:!1,onUpdate:function(){},glyph:"time",style:{},className:"",tooltip:""});const A=S},89919:(t,e,n)=>{"use strict";n.d(e,{hP:()=>u});var r=n(61545),o=n(89255);function i(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.startWith.apply(t,i(e))},u=function(t,e,n){return function(i){return(n?c(i,(0,r.castArray)(t)).catch(n):c(i,(0,r.castArray)(t))).concat(o.Observable.from((0,r.castArray)(e)))}}},70335:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>Y});var r=n(61545),o=n(30381),i=n.n(o),a=n(27418),c=n.n(a),u=n(67294),s=n.n(u),l=n(30294),f=n(33664),p=n(18093),d=n(22222),y=n(57604),m=n(62187),b=n(57676),v=n(5346),h=n(15135),E=n(38482),g=n(80717),O=n(65295),S=n(85148),A=n(55105),T=n(76843),P=n(97291),_=n(42850),R=n(89168),w=n(38560);function N(){return(N=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function L(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function I(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?L(Object(n),!0).forEach((function(e){j(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function j(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var D=(0,h.Z)(w.Z),M=function(t){return(0,r.isString)(t)&&-1!==t.indexOf("%")},C=function(t){return parseInt(t,10)/100},k=function(t,e){return i()(e).diff(t)>0},x=(0,p.compose)((0,f.connect)((0,d.P1)(P.pn,P.rV,S.WT,P.m_,S.RP,T.KC,T.dS,P.YK,(function(t,e,n,r,o,i,a,c){return{visible:t,layers:e,currentTime:n,currentTimeRange:r,offsetEnabled:o,playbackRange:i,status:a,viewRange:c}})),{setCurrentTime:b.HM,onOffsetEnabled:b.PQ,setOffset:y.pF,setPlaybackRange:m.VS,moveRangeTo:b.y3}),(0,p.branch)((function(t){var e=t.visible,n=void 0===e||e,r=t.layers,o=void 0===r?[]:r;return!n||0===Object.keys(o).length}),p.renderNothing),(0,p.withState)("options","setOptions",{collapsed:!0}),(0,f.connect)((0,d.P1)(P.cX,(function(t){return{mapSync:t}})),{toggleMapSync:b.Z7}),(0,p.compose)((0,p.compose)((0,p.withStateHandlers)((function(){return{}}),{onResize:function(){return function(t){return{containerWidth:t.width}}}}),(0,E.Z)({querySelector:".ms2",closest:!0,debounceTime:100})),(0,p.defaultProps)({style:{marginBottom:35,marginLeft:100,marginRight:80}}),(0,f.connect)((0,d.P1)((function(t){return(0,A.ic)(t,{right:!0,bottom:!0,left:!0})}),(function(t){return{mapLayoutStyle:t}}))),(0,p.withProps)((function(t){var e=t.containerWidth,n=t.style,r=t.mapLayoutStyle,o=n||{},i=o.marginLeft,a=o.marginRight,c=r.left,u=void 0===c?0:c,s=r.right,l=void 0===s?0:s;if(l=M(l)&&C(l)*e||l,u=M(u)&&C(u)*e||u,e){var f=e-l-u-i-a;return{hide:f<410,compactToolbar:f<880,style:I(I(I({},n),r),{},{minWidth:410})}}return{style:I(I(I({},n),r),{},{minWidth:410})}})),(0,p.branch)((function(t){return t.hide}),p.renderNothing),(0,p.setDisplayName)("TimelinePlugin")))((function(t){var e=t.items,n=t.options,o=t.setOptions,a=t.mapSync,c=t.toggleMapSync,u=void 0===c?function(){}:c,f=t.currentTime,p=t.setCurrentTime,d=t.offsetEnabled,y=t.onOffsetEnabled,m=t.currentTimeRange,b=t.setOffset,h=t.style,E=t.status,S=t.viewRange,A=t.moveRangeTo,T=t.compactToolbar,P=n.hideLayersName,R=n.collapsed,w=(0,r.head)(e&&e.filter((function(t){return"playback"===t.name}))),L=w&&w.plugin,j=function(t,e,n,r){var o=i()(n.end).diff(n.start)/2;if("time-current"===e&&n&&n.start.toString()!==i()(t).add(-1*o).toString()&&n.end.toString()!==i()(t).add(o).toString()&&A({start:i()(t).add(-1*o),end:i()(t).add(o)}),"range-start"===e||"range-end"===e){var a=i()(r.end).diff(r.start),c=i()(r.start).add(a/2);A(a/2<=o?{start:i()(c).add(-1*o),end:i()(c).add(o)}:{start:i()(c).add(-1*a*5/2),end:i()(c).add(5*a/2)})}};return s().createElement("div",{style:I(I({position:"absolute",marginBottom:35,marginLeft:100,background:"transparent"},h),{},{right:R?"auto":h.right||0}),className:"timeline-plugin".concat(P?" hide-layers-name":"").concat(d?" with-time-offset":"")},d&&s().createElement(O.Z,{clickable:!R,glyph:"range-start",onIconClick:function(t,e){return"PLAY"!==E&&j(t,e,S,m)},tooltip:s().createElement(v.Z,{msgId:"timeline.rangeStart"}),showButtons:!0,date:f||m&&m.start,onUpdate:function(t){return(m&&k(t,m.end)||!m)&&"PLAY"!==E&&p(t)},className:"shadow-soft",style:{position:"absolute",top:-5,left:2,transform:"translateY(-100%)"}}),s().createElement("div",{className:"timeline-plugin-toolbar".concat(T?" ms-collapsed":"")},d&&m?s().createElement(O.Z,{clickable:!R,glyph:"range-end",onIconClick:function(t,e){return"PLAY"!==E&&j(t,e,S,m)},tooltip:s().createElement(v.Z,{msgId:"timeline.rangeEnd"}),date:m.end,showButtons:!0,onUpdate:function(t){return"PLAY"!==E&&k(f,t)&&b(t)}}):s().createElement(O.Z,{clickable:!R,glyph:"time-current",showButtons:!0,onIconClick:function(t,e){return"PLAY"!==E&&j(t,e,S)},tooltip:s().createElement(v.Z,{msgId:"timeline.currentTime"}),date:f||m&&m.start,onUpdate:function(t){return(m&&k(t,m.end)||!m)&&"PLAY"!==E&&p(t)}}),s().createElement("div",{className:"timeline-plugin-btn-group"},s().createElement(g.Z,{btnDefaultProps:{className:"square-button-md",bsStyle:"primary"},buttons:[{glyph:"list",tooltip:s().createElement(v.Z,{msgId:P?"timeline.showLayerName":"timeline.hideLayerName"}),bsStyle:P?"primary":"success",visible:!R,active:!P,onClick:function(){return o(I(I({},n),{},{hideLayersName:!P}))}},{glyph:"time-offset",bsStyle:d?"success":"primary",active:d,disabled:"PLAY"===E,tooltip:s().createElement(v.Z,{msgId:d?"timeline.disableRange":"timeline.enableRange"}),onClick:function(){"PLAY"!==E&&y(!d)}},{glyph:"map-synch",tooltip:s().createElement(v.Z,{msgId:a?"timeline.mapSyncOn":"timeline.mapSyncOff"}),bsStyle:a?"success":"primary",active:a,onClick:function(){return u(!a)}}]}),L&&s().createElement(L,N({},w,{settingsStyle:{right:R||T?40:"unset"}}))),s().createElement(D,{onClick:function(){return o(I(I({},n),{},{collapsed:!R}))},className:"square-button-sm ms-timeline-expand",bsStyle:"primary",tooltip:s().createElement(v.Z,{msgId:R?"timeline.expand":"timeline.collapse"})},s().createElement(l.Glyphicon,{glyph:R?"chevron-up":"chevron-down"}))),!R&&s().createElement(_.Z,{offsetEnabled:d,playbackEnabled:!0,hideLayersName:P}))}));const Y={TimelinePlugin:c()(x,{disablePluginIf:"{state('mapType') === 'cesium'}",WidgetsTray:{tool:s().createElement(R.Z,null),position:0}}),reducers:{dimension:n(37307).Z,timeline:n(55545).Z},epics:n(26325).ZP}},37307:(t,e,n)=>{"use strict";n.d(e,{Z:()=>l});var r=n(57604),o=n(80416),i=n(82904),a=n(61868),c=n(30381),u=n.n(c),s=n(61545);const l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case r.XV:return(0,a.t8)("data[".concat(e.dimension,"][").concat(e.layerId,"]"),e.data,t);case r.mE:return(0,a.t8)("currentTime",e.time,t);case r.at:return(0,a.t8)("offsetTime",e.offsetTime,t);case r.mD:if(t.offsetTime&&t.currentTime){var n=u()(t.offsetTime).diff(t.currentTime),c=u()(e.time).add(n);return(0,a.t8)("currentTime",e.time,(0,a.t8)("offsetTime",c.toISOString(),t))}return(0,a.t8)("currentTime",e.time,t);case o.sb:var l=(0,s.mapValues)(t.data,(function(t){return(0,s.pickBy)(t,(function(t,n){return n!==e.node}))}));return(0,a.t8)("data",l,t);case i.l:return(0,a.t8)("data",void 0,(0,a.t8)("currentTime",void 0,(0,a.t8)("offsetTime",void 0,t)));default:return t}}},55105:(t,e,n)=>{"use strict";n.d(e,{Nr:()=>s,ic:()=>l,CF:()=>f}),n(61545);var r=n(827),o=n(52259);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=function(t){return t.maplayout&&t.maplayout.layout||{}},s=function(t){return t.maplayout&&t.maplayout.boundingMapRect||{}},l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=u(t);return n&&Object.keys(n).filter((function(t){return e[t]})).reduce((function(t,e){return a(a({},t),{},c({},e,n[e]))}),{})||{}},f=function(t){var e=(0,r.Od)(t),n=s(t);return n&&e&&e.size&&{left:(0,o.parseLayoutValue)(n.left,e.size.width),bottom:(0,o.parseLayoutValue)(n.bottom,e.size.height),right:(0,o.parseLayoutValue)(n.right,e.size.width),top:(0,o.parseLayoutValue)(n.top,e.size.height)}}},76843:(t,e,n)=>{"use strict";n.d(e,{z2:()=>o,V3:()=>i,dS:()=>a,yt:()=>u,E2:()=>s,Np:()=>l,KC:()=>f,Wq:()=>p,rp:()=>d,PF:()=>y});var r=n(22222),o=function(t){return t&&t.playback&&t.playback.settings},i=function(t){return(o(t)||{}).frameDuration||5},a=function(t){return t&&t.playback&&t.playback.status},c=function(t){return t&&t.playback&&t.playback.frames},u=function(t){var e=c(t)||[];return e[e.length-1]},s=function(t){return t&&t.playback&&t.playback.framesLoading},l=function(t){return t&&t.playback&&t.playback.currentFrame},f=function(t){return function(t){return t&&t.playback&&t.playback.playbackRange}(t)},p=function(t){return(c(t)||[])[l(t)]},d=function(t){return t&&t.playback&&t.playback.metadata},y=(0,r.P1)(c,l,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return{hasNext:t[e+1],hasPrevious:t[e-1]}}))},97291:(t,e,n)=>{"use strict";n.d(e,{YK:()=>h,zb:()=>E,en:()=>g,cX:()=>O,__:()=>P,E2:()=>_,Li:()=>R,fP:()=>w,uy:()=>N,gB:()=>L,Ry:()=>I,m_:()=>j,dJ:()=>D,rV:()=>M,qJ:()=>C,pn:()=>k,F3:()=>x});var r=n(61545),o=n(22222),i=n(84715),a=n(90183),c=n(55237),u=n(85148),s=n(827),l=n(75110);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function y(t){return function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||b(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(t,e)||b(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){if(t){if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(t,e):void 0}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var h=function(t){return(0,r.get)(t,"timeline.range")},E=function(t){return(0,r.get)(t,"timeline.settings.collapsed")},g=function(t){return(0,r.get)(t,"timeline.settings.autoSelect")},O=function(t){return(0,r.get)(t,"timeline.settings.mapSync")},S=function(t,e){return(t||[]).reduce((function(t,n){return[].concat(y(t),y(function(t,e){var n=m(t.split("/"),3),r=n[0],o=n[1],i=n[2];if(i&&"0"!==i){var a=(0,c.Xu)({start:r,end:o,duration:i},e),u=a.count,s=a.start,l=a.end;return u>50?[{start:r,end:o,duration:i,type:"range",content:"".concat(u," items")}]:(0,c.tr)({start:s,end:l,duration:i}).map((function(t){return{start:new Date(t),end:new Date(t),type:"point"}}))}return isNaN(new Date(r).getTime())?null:[{start:new Date(r),end:new Date(o||r),type:o?"range":"point"}]}(n,e)))}),[]).filter((function(t){return t&&t.start}))},A=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;if(t.domain&&t.domain.values)return S(t.domain.values,e);if(t.histogram&&t.histogram.domain&&t.histogram.values){var n=t.histogram.domain.split("/"),r=m(n,3),o=r[0],i=r[1],a=r[2],u=Math.max.apply(Math,y(t.histogram.values)),s=(0,c.jb)({start:o,end:i,duration:a});return t.histogram.values.map((function(t,e){return p(p({},s[e]),{},{type:"range",itemType:"histogram",count:t,className:"histogram-item",content:'<div><div class="histogram-box" style="height: '.concat(100*t/u,'%"></div> <span class="histogram-count">').concat(t,"</span></div>")})}))}return[]},T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;return t&&t.values||t&&t.domain&&!(0,c._q)(t.domain)?S(t.values||t.domain.split(","),e):n&&n.histogram?A(n,e):[]},P=(0,i.y)(u.m$,h,(function(t){return(0,r.get)(t,"timeline.rangeData")}),(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return y(Object.keys(t).map((function(r){return T(t[r],e,n[r]).map((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return p(p({content:" "},t),{},{group:r})}))})).reduce((function(t,e){return[].concat(y(t),y(e))}),[]))})),_=function(t){return(0,r.get)(t,"timeline.loading")},R=function(t){return(0,r.get)(t,"timeline.selectedLayer")},w=function(t){return(0,l.CA)(t,R(t))},N=function(t){return w(t)&&w(t).name},L=function(t){return w(t)&&w(t).dimensions&&(0,r.head)(w(t).dimensions.filter((function(t){return"time"===t.name})))},I=function(t){return(0,r.get)(L(t),"source.url")},j=(0,o.P1)(u.WT,u.ns,(function(t,e){return{start:t,end:e}})),D=function(t){return(0,u.oP)(t,R(t))},M=u.AF,C=(0,o.P1)(M,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.length>0})),k=function(t){return!E(t)&&C(t)},x=function(t){return function(e){var n=((0,s.Od)(e)||{}).bbox;if(!n)return{};var o=(0,u.Qw)(t,"time")(e),i=(0,r.get)(o,"source.version"),c=Object.keys(n.bounds).reduce((function(t,e){return p(p({},t),{},d({},e,parseFloat(n.bounds[e])))}),{});if(!c||!O(e))return{};if("1.1"!==i){var l=(0,u.Qw)(t,"space")(e),f=(0,r.get)(l,"domain.CRS");if(!f||!c||!O(e))return{};var y=m((0,a.reprojectBbox)(c,(0,s.uy)(e),f),4),b=y[0],v=y[1],h=y[2],E=y[3];return h<b&&"EPSG:4326"===f&&(h+=360),{bbox:"".concat(b,",").concat(v,",").concat(h,",").concat(E),crs:f}}var g=c.minx,S=c.miny,A=c.maxx,T=c.maxy,P=n.crs;return{bbox:"".concat(g,",").concat(S,",").concat(A,",").concat(T,",").concat(P)}}}},10284:(t,e,n)=>{"use strict";n.d(e,{sw:()=>b,oB:()=>v,X0:()=>h});var r=n(89255),o=n(61545),i=n(5055),a=n(7526),c=n(24384);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){var e="function"==typeof Map?new Map:void 0;return(l=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return f(t,arguments,y(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),d(r,t)})(t)}function f(t,e,n){return(f=p()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&d(o,n.prototype),o}).apply(null,arguments)}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(o,t);var e,n,r=(e=o,n=p(),function(){var t,r=y(e);if(n){var o=y(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return s(this,t)});function o(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(n=r.call(this,t)).name="OGCError",n.code=e,n}return o}(l(Error)),b=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{tagNameProcessors:[a.stripPrefix],explicitArray:!1,mergeAttrs:!0};return r.Observable.bindNodeCallback((function(t,n){return(0,i.parseString)(t,e,n)}))(t)},v=function(t){return t.switchMap((function(t){return"string"==typeof t.data&&t.data.indexOf("ExceptionReport")>0?r.Observable.bindNodeCallback((function(t,e){return(0,i.parseString)(t,{tagNameProcessors:[a.stripPrefix],explicitArray:!1,mergeAttrs:!0},e)}))(t.data).map((function(t){var e=(0,o.get)(t,"ExceptionReport.Exception.ExceptionText");throw new m(e||"Undefined OGC Service Error",(0,o.get)(t,"ExceptionReport.Exception.exceptionCode"))})):r.Observable.of(t)}))},h=function(t,e){return t?c.Z.deleteResource(t,e).then((function(t){return{data:t.data,resType:"success",error:null}})).catch((function(t){return{error:t,resType:"error"}})):r.Observable.of({resType:"success"})}},84715:(t,e,n)=>{"use strict";n.d(e,{y:()=>c,o:()=>u});var r=n(61545),o=n(22222),i=function(t,e){return t===e},a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;return function(e,n){return Array.isArray(e)&&Array.isArray(n)?e===n||e.length===n.length&&e.reduce((function(e,r,o){return e&&t(r,n[o])}),!0):(0,r.isObject)(e)&&(0,r.isObject)(n)?e===n||Object.keys(e).length===Object.keys(n).length&&Object.keys(e).reduce((function(r,o){return r&&t(e[o],n[o])}),!0):e===n}},c=(0,o.wN)(o.PW,(function(t,e){return(0,r.isEqualWith)(t,e,a())})),u=function(t){return(0,o.wN)(o.PW,(function(e,n){return(0,r.isEqualWith)(e,n,a(t))}))}},19081:(t,e,n)=>{"use strict";t.exports=n(1174)}}]);