(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[15049],{282385:(e,t,n)=>{"use strict";n.d(t,{nr:()=>r,B8:()=>o,LE:()=>i,$Z:()=>a,Cp:()=>l});var r="MAP_EDITOR:SHOW",o="MAP_EDITOR:HIDE",i="MAP_EDITOR:SAVE",a=function(e,t){return{type:r,owner:e,map:t}},l=function(e){return{type:o,owner:e}}},93848:(e,t,n)=>{"use strict";n.d(t,{Ai:()=>a,AQ:()=>l,Gl:()=>c,wd:()=>u,V9:()=>s,ih:()=>d,B8:()=>m,ww:()=>f,HP:()=>p,ri:()=>y,gd:()=>v,nr:()=>E,ty:()=>b,GZ:()=>g,O6:()=>O,Vt:()=>I,Ug:()=>h,Wp:()=>D,Ke:()=>S,Cp:()=>T,pW:()=>w,Gr:()=>A,gG:()=>P,oo:()=>_,Gh:()=>j,$G:()=>M,I5:()=>C,d8:()=>R,y5:()=>N,Az:()=>k,$Z:()=>z,Ql:()=>G,Ul:()=>x,TU:()=>Z,E0:()=>L,Yt:()=>V,Tk:()=>W});var r=n(513218),o=n.n(r),i=n(727693),a="MEDIA_EDITOR:ADDING_MEDIA",l="MEDIA_EDITOR:CHOOSE_MEDIA",c="MEDIA_EDITOR:EDITING_MEDIA",u="GEOSTORY:EDIT_MEDIA",s="MEDIA_EDITOR:LOAD_MEDIA",d="MEDIA_EDITOR:LOAD_MEDIA_SUCCESS",m="MEDIA_EDITOR:HIDE",f="MEDIA_EDITOR:SAVE_MEDIA",p="MEDIA_EDITOR:SET_MEDIA_TYPE",y="MEDIA_EDITOR:SET_MEDIA_SERVICE",v="MEDIA_EDITOR:SELECT_ITEM",E="MEDIA_EDITOR:SHOW",b="MEDIA_EDITOR:UPDATE_ITEM",g="MEDIA_EDITOR:IMPORT_IN_LOCAL",O="MEDIA_EDITOR:REMOVE_MEDIA",I="MEDIA_EDITOR:LOADING_SELECTED_MEDIA",h="MEDIA_EDITOR:LOADING_MEDIA_LIST",D="MEDIA_EDITOR:MEDIA_TYPE_DISABLE",S=function(e){return{type:l,resource:e}},T=function(){return{type:m}},w=function(e,t,n){return{type:s,params:e,mediaType:t,sourceId:n}},A=function(e){var t=e.mediaType,n=e.sourceId,r=e.params,o=e.resultData;return{type:d,mediaType:t,sourceId:n,params:r,resultData:o}},P=function(e){var t=e.type,n=e.source,r=e.data;return{type:f,mediaType:t,source:n,data:r}},_=function(e){return{type:"MEDIA_EDITOR:SAVE_MEDIA_SUCCESS",mediaType:e.mediaType,source:e.source,data:e.data,id:e.id}},j=function(e){return{type:v,id:e}},M=function(e){return{type:b,item:e,mode:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"merge"}},C=function(e){return{type:a,adding:e}},R=function(e){return{type:y,id:o()(e)?e.value:e}},N=function(e){return{type:p,mediaType:e}},k=function(e){return{type:c,editing:e}},z=function(e,t){return{type:E,owner:e,settings:t}},G=function(e,t){var n=e.path,r=e.owner;return{type:u,path:n,owner:void 0===r?"geostory":r,sectionType:t}},x=function(e){var t=e.resource,n=e.sourceType,r=void 0===n?i.r.GEOSTORY:n,o=e.owner;return{type:g,resource:t,sourceType:r,owner:void 0===o?"geostory":o}},Z=function(e){return{type:O,mediaType:e,owner:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"geostory"}},L=function(e){return{type:I,loading:e}},V=function(){return{type:h}},W=function(){return{type:D,mediaTypes:arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]}}},452826:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var r=n(124852),o=n.n(r),i=n(218291),a=n(532425),l=n(580628),c=n(480681),u=n(192579),s=n(805346);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==d(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===d(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,l=[],c=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var E=(0,i.Z)()((0,r.lazy)((function(){return n.e(70390).then(n.bind(n,970390))}))),b=(0,l.Z)((function(e){var t=e.src,n=e.width,i=e.height,l=e.resolution,u=e.thumbnail,d=e.controls,m=e.play,p=e.onPlay,v=void 0===p?function(){}:p,b=e.onStart,g=void 0===b?function(){}:b,O=e.fit,I=e.loop,h=e.volume,D=void 0===h?1:h,S=e.muted,T=m,w=y((0,r.useState)(T),2),A=w[0],P=w[1],_=y((0,r.useState)(),2),j=_[0],M=_[1],C=y((0,r.useState)(m),2),R=C[0],N=C[1],k="cover"===O,z=y((0,r.useState)(!1),2),G=z[0],x=z[1];(0,r.useEffect)((function(){!A&&T&&(P(!0),N(!0)),A&&g(A)}),[A,T]);var Z,L=(Z=n/i,k?Z<l?[i*l,i]:[n,n/l]:"contain"===O?Z<l?[n,n/l]:[i*l,i]:[n,n/l]),V="contain"===O||k?i:L[1],W=!k&&d,U=!!k||I;return o().createElement("div",{className:"ms-video",style:{position:"relative",width:n,height:V,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}},t&&o().createElement(o().Fragment,null,A&&o().createElement(E,{url:t,width:L[0],height:L[1],playing:T,loop:U,volume:D,muted:S,style:k?{left:"50%",top:"50%",transform:"translate(-50%, -50%)",position:"absolute"}:{},controls:W,pip:!1,fileConfig:{attributes:{controlsList:"nodownload",disablePictureInPicture:!0}},youtubeConfig:{playerVars:{controls:W?2:0,modestbranding:1,rel:0}},onReady:function(){return N(!1)},onError:function(e){M(e),(""+e).includes("NotAllowedError")&&(v(!1),x(!0),N(!1))},onPause:function(){v(!1)},onPlay:function(){v(!0),G&&(M(!1),x(!1))}}),(!A||A&&(R||j))&&o().createElement("div",{className:"ms-video-cover",style:f(f({position:"absolute",width:L[0],height:L[1],display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0, 0, 0, 1.0)"},!(R||j)&&{cursor:"pointer"}),!T&&u&&{backgroundImage:"url(".concat(u,")"),backgroundSize:k?"cover":"640px auto",backgroundPosition:"center",backgroundRepeat:"no-repeat"}),onClick:function(){G?(x(!1),M(!1)):N(!0),P(!0),v(!0)}},R&&o().createElement(a.Z,{size:70}),j&&!G&&o().createElement("div",{className:"text-center"},o().createElement(c.Glyphicon,{glyph:"alert",style:{fontSize:L[1]/4>100?100:L[1]/4,mixBlendMode:"difference",color:"#ffffff"}}),o().createElement("h3",null,o().createElement(s.Z,{msgId:"geostory.errors.loading.video"}))," "),(!(R||j)&&!T||j&&G)&&o().createElement(c.Glyphicon,{glyph:"play",style:{fontSize:L[1]/4>100?100:L[1]/4,mixBlendMode:"difference",color:"#ffffff"}}))),!W&&!G&&o().createElement("div",{className:"ms-video-mask-cover",style:{position:"absolute",width:L[0],height:L[1]}}))}));const g=function(e){var t=e.id,n=e.src,i=e.resolution,a=void 0===i?16/9:i,l=e.autoplay,c=e.inView,s=e.description,d=e.showCaption,m=e.caption,f=void 0===m?s:m,p=e.thumbnail,v=e.credits,E=e.controls,g=void 0===E||E,O=e.fit,I=e.loop,h=e.muted,D=e.onPlay,S=void 0===D?function(){}:D,T=e.mode,w=e.containerInView,A=(void 0===w||w)&&c,P=y((0,r.useState)(!1),2),_=P[0],j=P[1],M=function(e){j(e),S(e)};return(0,r.useEffect)((function(){T===u.nl.EDIT&&M(!1)}),[T]),(0,r.useEffect)((function(){T===u.nl.VIEW&&A&&(l||"cover"===O)&&M(!0)}),[A,l,O,T]),(0,r.useEffect)((function(){T===u.nl.VIEW&&!A&&_&&M(!1)}),[A,_,T]),o().createElement("div",{id:t,key:"".concat(t,"-").concat(O,"-").concat(T),className:"ms-media ms-media-video"},o().createElement(b,{src:n,play:_&&T===u.nl.VIEW,resolution:a,thumbnail:p,controls:g&&T===u.nl.VIEW,onPlay:M,fit:O,loop:I,muted:h}),v&&o().createElement("div",{className:"ms-media-credits"},o().createElement("small",null,v)),d&&f&&o().createElement("div",{className:"ms-media-caption"},o().createElement("small",null,f)))}},507848:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(171703),o=n(22222),i=n(93152);const a=(0,r.connect)((0,o.P1)(i.$v,(function(e){return{mapType:e}})))},819983:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(124852),o=n.n(r),i=n(675263),a=n.n(i),l=n(552259);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===c(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){return function(t){var n,i,a,c,u,d,m,f=(null==t||null===(n=t.map)||void 0===n?void 0:n.projection)||"EPSG:3857",p=(null==t||null===(i=t.map)||void 0===i||null===(a=i.mapOptions)||void 0===a||null===(c=a.view)||void 0===c?void 0:c.DPI)||null,y=null==t||null===(u=t.map)||void 0===u||null===(d=u.mapOptions)||void 0===d||null===(m=d.view)||void 0===m?void 0:m.scales,v=(0,r.useMemo)((function(){return y?(0,l.getResolutionsForScales)(y,f,p):null}),[y,f,p]),E=v?s(s({},t),{},{map:s(s({},t.map),{},{mapOptions:s(s({},t.map.mapOptions),{},{view:s(s({},t.map.mapOptions.view),{},{resolutions:v})})})}):t;return o().createElement(e,E)}};m.propTypes={Component:a().element};const f=m},399534:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(461365),o=n(356936);const i=(0,r.Z)(o.h_)},694745:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r=n(124852),o=n.n(r),i=n(294184),a=n.n(i),l=n(480681),c=n(807472),u=n(80717),s=n(867076),d=n(819081),m=n.n(d),f=n(975480),p={xs:" ms-xs",sm:" ms-sm",md:"",lg:" ms-lg"},y={className:{vertical:" ms-fullscreen-v",horizontal:" ms-fullscreen-h",full:" ms-fullscreen"},glyph:{expanded:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-small"},collapsed:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-full"}}};const v=(0,s.withState)("fullscreenState","onFullscreen",(function(e){var t=e.initialFullscreenState;return void 0===t?"collapsed":t}))((function(e){var t=e.show,n=void 0!==t&&t,r=e.loading,i=e.loadingText,s=e.onClose,d=void 0===s?function(){}:s,v=e.title,E=void 0===v?"":v,b=e.clickOutEnabled,g=void 0===b||b,O=e.showClose,I=void 0===O||O,h=e.disabledClose,D=void 0!==h&&h,S=e.showFullscreen,T=void 0!==S&&S,w=e.fullscreenType,A=void 0===w?"full":w,P=e.buttons,_=void 0===P?[]:P,j=e.size,M=void 0===j?"":j,C=e.bodyClassName,R=void 0===C?"":C,N=e.children,k=e.draggable,z=void 0!==k&&k,G=e.fullscreenState,x=e.onFullscreen,Z=e.fade,L=void 0!==Z&&Z,V=e.fitContent,W=e.modalClassName,U=void 0===W?"":W,F=e.dialogClassName,H=void 0===F?"":F,B=e.enableFooter,Y=void 0===B||B,Q=p[M]||"",$=T&&"expanded"===G&&y.className[A]||"",q=n?o().createElement("div",{className:"modal-fixed ".concat(U," ")+(z?"ms-draggable":"")},o().createElement(c.Z,{id:"ms-resizable-modal",style:{display:"flex"},onClickOut:g?d:function(){},containerClassName:"ms-resizable-modal",draggable:z,modal:!0,className:a()("modal-dialog modal-content",Q,$,H,{"ms-fit-content":V})},o().createElement("span",{role:"header"},o().createElement("h4",{className:"modal-title"},o().createElement("div",{className:"ms-title"},E),T&&y.className[A]&&o().createElement(l.Glyphicon,{className:"ms-header-btn",onClick:function(){return x("expanded"===G?"collapsed":"expanded")},glyph:y.glyph[G][A]}),I&&d&&o().createElement(l.Glyphicon,{glyph:"1-close",className:"ms-header-btn",onClick:d,disabled:D}))),o().createElement("div",{role:"body",className:R},N),Y&&o().createElement("div",{style:{display:"flex"},role:"footer"},o().createElement("div",{className:"ms-resizable-modal-loading-spinner-container"},r?o().createElement(f.Z,null):null),o().createElement("div",{className:"ms-resizable-modal-loading-text"},r?i:null),o().createElement(u.Z,{buttons:_})))):null;return L?o().createElement(m(),{transitionName:"ms-resizable-modal-fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},q):q}))},107501:(e,t,n)=>{"use strict";n.d(t,{hp:()=>f,cM:()=>p,Qi:()=>y,TU:()=>v,IQ:()=>E,hb:()=>b,HL:()=>g,dq:()=>O,Iy:()=>I,Qd:()=>h,ER:()=>D,Gi:()=>S,mA:()=>T,jR:()=>w,mD:()=>A,XG:()=>P,B6:()=>_,f5:()=>j,gW:()=>M});var r=n(227361),o=n.n(r),i=n(313311),a=n.n(i),l=n(22222),c=n(624262);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===u(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(e){return o()(e,"mediaEditor.open")},p=function(e){return o()(e,"mediaEditor.saveState.editing",!1)},y=function(e){return o()(e,"mediaEditor.saveState.addingMedia",!1)},v=function(e){return o()(e,"mediaEditor.saveState")},E=function(e){return o()(e,"mediaEditor.settings.sourceId")},b=function(e){return o()(e,"mediaEditor.settings.mediaType")},g=function(e){return o()(e,"mediaEditor.settings.sources")},O=function(e){return o()(g(e),E(e),{})},I=function(e){return function(e){return o()(function(e){return o()(e,"mediaEditor.settings.mediaTypes")}(e),"".concat(b(e),".sources"),[])}(e).map((function(t){return{id:t,name:(n=t,function(e){return o()(g(e),"".concat(n),{})})(e).name};var n}))},h=function(e){return o()(e,'mediaEditor.data["'.concat(b(e),'"]["').concat(E(e),'"].resultData'))},D=function(e){return o()(e,'mediaEditor.data["'.concat(b(e),'"]["').concat(E(e),'"].params'))},S=function(e){return o()(h(e),"resources")},T=function(e){return o()(h(e),"totalCount")},w=function(e){return o()(e,"mediaEditor.selected")},A=function(e){return o()(e,"mediaEditor.loadingSelected")},P=function(e){return o()(e,"mediaEditor.loadingList")},_=(0,l.P1)(S,w,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=a()(e,{id:t});return n&&"map"===n.type&&n.data.layers?d(d({},n),{},{data:d(d({},n.data),{},{layers:n.data.layers.map((function(e){if(e.tileMatrixSet&&n.data.sources){var t=(0,c.gv)(n.data.sources,e);return d(d({},e),t)}return e}))})}):n})),j=function(e){return o()(e,"mediaEditor.disabledMediaType",[])},M=function(e){return j(e).length&&!_(e)&&"map"===b(e)||A(e)}},727693:(e,t,n)=>{"use strict";n.d(t,{r:()=>r,D:()=>o});var r={GEOSTORY:"geostory",GEOSTORE:"geostore"},o={type:"osm",title:"Open Street Map",name:"mapnik",source:"osm",group:"background",visibility:!0,id:"mapnik__0",loading:!1,loadingError:!1}}}]);