(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[27419],{801550:(t,e,n)=>{"use strict";n.d(e,{pP:()=>r,TR:()=>o,N7:()=>i,mq:()=>a,uv:()=>u,Qy:()=>c,IL:()=>l,Li:()=>s,OW:()=>f,ZO:()=>p,Um:()=>y,TF:()=>d,Ls:()=>m,Ec:()=>v,Eu:()=>b,JJ:()=>O,nZ:()=>w,YD:()=>x,GI:()=>g,Jb:()=>h,Uh:()=>S,e$:()=>P,eh:()=>A,$j:()=>j,bJ:()=>E,Mk:()=>I,xy:()=>T,o6:()=>k,NH:()=>_,FP:()=>M,Mo:()=>R,sO:()=>D,Px:()=>N,hd:()=>C,y9:()=>L,Ju:()=>F,BV:()=>B,SO:()=>G,H0:()=>z,$X:()=>U,ou:()=>Z,NE:()=>J,Lq:()=>H,aN:()=>$});var r="CHANGE_MAP_VIEW",o="CLICK_ON_MAP",i="CHANGE_MOUSE_POINTER",a="CHANGE_ZOOM_LVL",u="PAN_TO",c="ZOOM_TO_EXTENT",l="ZOOM_TO_POINT",s="CHANGE_MAP_CRS",f="CHANGE_MAP_SCALES",p="CHANGE_MAP_STYLE",y="CHANGE_ROTATION",d="CREATION_ERROR_LAYER",m="UPDATE_VERSION",v="INIT_MAP",b="RESIZE_MAP",O="CHANGE_MAP_LIMITS",w="SET_MAP_RESOLUTIONS",x="REGISTER_EVENT_LISTENER",g="UNREGISTER_EVENT_LISTENER",h="MOUSE_MOVE",S="MOUSE_OUT",P="MAP:MAP_PLUGIN_LOAD",A="MAP:ORIENTATION",j="MAP:UPDATE_MAP_VIEW",E="MAP:UPDATE_MAP_OPTIONS";function I(t,e,n,r){return{type:P,mapType:e,loading:t,loaded:n,error:r}}function T(t,e,n){return{type:l,pos:t,zoom:e,crs:n}}function k(t,e,n,o,i,a,u,c){return{type:r,center:t,zoom:e,bbox:n,size:o,mapStateSource:i,projection:a,viewerOptions:u,resolution:c}}function _(t){return{type:s,crs:t}}function M(t,e){return{type:o,point:t,layer:e}}function R(t){return{type:i,pointer:t}}function D(t,e){return{type:a,zoom:t,mapStateSource:e}}function N(t,e,n,r){return{type:c,extent:t,crs:e,maxZoom:n,options:r}}function C(t,e){return{type:p,style:t,mapStateSource:e}}function L(t){return{type:v,disableFeedbackMask:t}}function F(){return{type:b}}function B(t){var e=t.restrictedExtent,n=t.crs,r=t.minZoom;return{type:O,restrictedExtent:e,crs:n,minZoom:r}}function G(t){return{type:w,resolutions:t}}var z=function(t,e){return{type:x,eventName:t,toolName:e}},U=function(t,e){return{type:g,eventName:t,toolName:e}},Z=function(t){return{type:h,position:t}},J=function(){return{type:S}},H=function(t){return{type:A,orientation:t}},$=function(t){return{type:E,configUpdate:t}}},536030:(t,e,n)=>{"use strict";n.d(e,{Gr:()=>m,wq:()=>O,R8:()=>w,d$:()=>x});var r=n(944908),o=n.n(r),i=n(414293),a=n.n(i),u=n(65792),c=n.n(u),l=n(129389);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){var r,o,i,a;r=t,o=e,i=n[e],a=function(t,e){if("object"!=s(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==s(a)?a:a+"")in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t){return function(t){if(Array.isArray(t))return d(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var m=function(){return n.e(81268).then(n.bind(n,481268)).then((function(t){return t}))},v=function(t){var e=t.ramp,n=t.intervals,r=t.reverse,o=(0,l.G)(e),i=c().scale(o).colors(n);return r?y(i).reverse():i},b={quantile:function(t,e,n){var r=t.quantileSorted,o=e.map((function(t){var e;return null==t||null===(e=t.properties)||void 0===e?void 0:e[n.attribute]})).filter((function(t){return!a()(t)})).sort((function(t,e){return t-e}));if(0===o.length)return[];var i=n.intervals,u=[].concat(y(y(new Array(i).keys()).map((function(t){return t/i}))),[1]).map((function(t){return r(o,t)})),c=v(p(p({},n),{},{intervals:i}));return u.reduce((function(t,e,n){var r=u[n+1];if(void 0!==r){var o=c[n];return[].concat(y(t),[{color:o,min:e,max:r}])}return t}),[])},jenks:function(t,e,n){var r=t.jenks,o=e.map((function(t){var e;return null==t||null===(e=t.properties)||void 0===e?void 0:e[n.attribute]})).filter((function(t){return!a()(t)})).sort((function(t,e){return t-e})),i=n.intervals,u=i>o.length?o.length:i,c=r(o,u),l=v(p(p({},n),{},{intervals:u}));return c.reduce((function(t,e,n){var r=c[n+1];if(void 0!==r){var o=l[n];return[].concat(y(t),[{color:o,min:e,max:r}])}return t}),[])},equalInterval:function(t,e,n){var r=(0,t.equalIntervalBreaks)(e.map((function(t){var e;return null==t||null===(e=t.properties)||void 0===e?void 0:e[n.attribute]})).filter((function(t){return!a()(t)})).sort((function(t,e){return t-e})),n.intervals),o=v(n);return r.reduce((function(t,e,n){var i=r[n+1];if(void 0!==i){var a=o[n];return[].concat(y(t),[{color:a,min:e,max:i}])}return t}),[])},uniqueInterval:function(t,e,n){var r=o()(e.map((function(t){var e;return null==t||null===(e=t.properties)||void 0===e?void 0:e[n.attribute]}))),i=!1===n.sort?r:r.sort((function(t,e){return t>e?1:-1})),a=v(p(p({},n),{},{intervals:i.length}));return i.map((function(t,e){return{color:a[e],unique:t}}))}},O=function(t){return function(e,n){var r="FeatureCollection"===e.type?e.features:[];return b[n.method](t,r,n)}},w=function(t,e){return m().then((function(n){return O(n)(t,e)})).then((function(t){return{data:{classification:t}}}))},x=Object.keys(b)},653391:(t,e,n)=>{"use strict";n.d(e,{ZP:()=>C});var r=n(124852),o=n.n(r),i=n(701469),a=n.n(i),u=n(984596),c=n.n(u),l=n(606162),s=n.n(l),f=n(807654),p=n.n(f),y=n(281763),d=n.n(y),m=n(845220),v=n.n(m),b=n(82110),O=n(12226),w=n(968483),x=n(246781),g=["msMode","msClassification"],h=["series","xAxis","classifications","classificationAttr"],S=["onInitialized","onHover"];function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function A(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function j(t){return function(t){if(Array.isArray(t))return E(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return E(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function I(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function T(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?I(Object(n),!0).forEach((function(e){k(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function k(t,e,n){var r;return r=function(t,e){if("object"!=P(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(e),(e="symbol"==P(r)?r:r+"")in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var _=o().lazy((function(){return Promise.all([n.e(47042),n.e(36111)]).then(n.bind(n,736111))})),M=function(t,e,n){return n.map((function(n){try{return T(T({},n),{},k({},e,(0,O.B)(t,{value:n[e]})))}catch(t){return n}}))},R=function(t,e,n){if(!v()(e)){var r=(e/n*100).toPrecision(3);if(!p()(r))return t+" - "+r+"%"}return t},D={pie:function(t){var e,n,r,o,i,a=t.id,u=t.data,c=t.options,l=t.style,s=t.domain,f=t.name,p=t.classifyGeoJSON,y=t.textinfo,m=t.layout,v=void 0===m?{}:m,b=t.tickPrefix,O=t.format,w=t.tickSuffix,g=t.formula,h=t.sortBy,S=void 0===h?"aggregation":h,P=t.includeLegendPercent,A=null==c?void 0:c.groupByAttributes,E=(0,x.Yj)(c),I=(null==c?void 0:c.classificationAttribute)||A,k=!(I===A||null!=l&&null!==(e=l.msClassification)&&void 0!==e&&null!==(n=e.classes)&&void 0!==n&&n.some((function(t){return(t.title||"").includes("${groupByValue}")}))),_=(0,x.wM)(g?M(g,E,u):u,c),D=P?_.reduce((function(t,e){return t+(0,x.p3)(e[E])}),0):0,N=f||E,C=(0,x.mK)({type:"pie",sortBy:S,data:_,options:c,msClassification:null==l?void 0:l.msClassification,classifyGeoJSON:p}),L=C.sortByKey,F=C.classes,B=C.classifiedData,G=k||null!=l&&null!==(r=l.msClassification)&&void 0!==r&&r.classes?F.reduce((function(t,e,n){var r=B.filter((function(t){return t.index===n})).sort((function(t,e){return L===E?t.properties[L]>e.properties[L]?-1:1:t.properties[L]>e.properties[L]?1:-1})).map((function(t){return k?T(T({},t),{},{label:"".concat(t.index+1,") ").concat(t.label)}):t}));if(k&&P){var o=r.reduce((function(t,e){var n=e.properties;return t+(0,x.p3)(n[E])}),0);return[].concat(j(t),j(r.map((function(t){return T(T({},t),{},{label:R(t.label,o,D)})}))))}return[].concat(j(t),j(r))}),[]):B,z=G.map((function(t){return null==t?void 0:t.color})),U=G.map((function(t){return t.properties[E]})),Z=G.map((function(t){return null==t?void 0:t.label})),J=G.map((function(t){var e=t.properties,n=t.index;return k?"".concat(e[A]," (").concat(n+1,")"):e[A]})),H=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,r=(arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}).includeLegendPercent;return r&&r&&d()(n)&&0!==n?t.map((function(t,r){return R(t,e[r],n)})):t}(k?J:Z,U,D,{includeLegendPercent:P}),$={type:"pie",textposition:"inside",pull:.005,rotation:0,sort:!1,direction:"clockwise",values:U,textinfo:y,texttemplate:"none"===y?null:"%{percent}"};return[].concat(j(k?[T(T({},$),{},{name:I,legendgroup:"".concat(a,"-").concat(I),legendgrouptitle:{text:I===E?I:"".concat(E," | ").concat(I)},hovertemplate:"%{label}<br>".concat(I,"<br>%{value}<br>%{percent}<extra></extra>"),hoverlabel:{font:{color:v.color||x.nb.COLOR,family:v.fontFamily||x.nb.FAMILY,size:v.fontSize||x.nb.SIZE}},domain:{x:[.2,.8],y:[.2,.8]},labels:Z,marker:{colors:z,line:T({},null==l||null===(o=l.marker)||void 0===o?void 0:o.line)}})]:[]),[T(T(T({},$),{},{name:N,legendgroup:a,legendgrouptitle:{text:N},hoverlabel:{font:{color:(null==v?void 0:v.color)||x.nb.COLOR,family:(null==v?void 0:v.fontFamily)||x.nb.FAMILY,size:(null==v?void 0:v.fontSize)||x.nb.SIZE}},hovertemplate:"%{label}<br>".concat(E,"<br>").concat(null!=b?b:"","%{value").concat(O?":".concat(O):"","}").concat(null!=w?w:"","<br>%{percent}<extra></extra>"),domain:s,labels:H},k&&{hole:.65,opacity:.75}),{},{marker:{colors:z,line:T({},null==l||null===(i=l.marker)||void 0===i?void 0:i.line)}})])},bar:function(t){var e=t.id,n=t.data,r=t.options,o=t.formula,i=t.style,a=t.name,u=t.classifyGeoJSON,c=t.yAxisOpts,l=t.xAxisOpts,s=t.sortBy,f=void 0===s?"groupBy":s,p=t.tickPrefix,y=t.format,d=t.tickSuffix,m=p||(null==c?void 0:c.tickPrefix),v=y||(null==c?void 0:c.format),b=d||(null==c?void 0:c.tickSuffix),O=null==r?void 0:r.groupByAttributes,w=(0,x.Yj)(r),h=null==r?void 0:r.classificationAttribute,S=o?M(o,w,n):n,P=i||{},E=P.msMode,I=P.msClassification,k=A(P,g);if("classification"===E){var _=(0,x.mK)({type:"bar",sortBy:f,data:S,options:r,msClassification:I,classifyGeoJSON:u}),R=_.sortByKey,D=_.classifiedData;return _.classes.map((function(t,n){var r,o=t.color,i=t.label,u=D.filter((function(t){return t.index===n})).sort((function(t,e){return t.properties[R]>e.properties[R]?1:-1}));if(0===u.length)return null;var s=a||h;return T(T({type:"bar",legendgroup:"".concat(e,"-").concat(h),x:u.map((function(t){return t.properties[O]})),y:u.map((function(t){return t.properties[w]})),name:i,legendgrouptitle:{text:s},hovertemplate:"".concat(null!=m?m:"","%{y:").concat(null!=v?v:"g","}").concat(null!=b?b:"","<extra>").concat(i,"</extra>"),marker:T({color:o},(null==k||null===(r=k.marker)||void 0===r?void 0:r.line)&&{line:k.marker.line})},l.xaxis&&{xaxis:l.xaxis}),c.yaxis&&{yaxis:c.yaxis})})).filter((function(t){return null!==t}))}var N=j(S).sort((function(t,e){return t[O]>e[O]?1:-1})),C=N.map((function(t){return t[O]})),L=N.map((function(t){return t[w]})),F=a||w;return T(T(T(T({},k),{},{type:"bar",x:C,y:L,name:F},l.xaxis&&{xaxis:l.xaxis}),c.yaxis&&{yaxis:c.yaxis}),{},{hovertemplate:"".concat(null!=m?m:"","%{y:").concat(null!=v?v:"g","}").concat(null!=b?b:"","<extra></extra>")})},line:function(t){var e=t.data,n=t.options,r=t.formula,o=t.style,i=t.name,a=t.yAxisOpts,u=t.xAxisOpts,c=t.tickPrefix,l=t.format,s=t.tickSuffix,f=c||(null==a?void 0:a.tickPrefix),p=l||(null==a?void 0:a.format),y=s||(null==a?void 0:a.tickSuffix),d=null==n?void 0:n.groupByAttributes,m=(0,x.Yj)(n),v=r?M(r,m,e):e,b=i||m,O=j(v).sort((function(t,e){return t[d]>e[d]?1:-1})),w=O.map((function(t){return t[d]})),g=O.map((function(t){return t[m]}));return T(T(T({mode:"lines"},o),{},{name:b,hovertemplate:"".concat(null!=f?f:"","%{y:").concat(null!=p?p:"d","}").concat(null!=y?y:"","<extra></extra>"),x:w,y:g},u.xaxis&&{xaxis:u.xaxis}),a.yaxis&&{yaxis:a.yaxis})}};function N(t){var e=t.cartesian,n=t.xAxisOpts,r=void 0===n?[]:n,o=t.yAxisOpts,i=void 0===o?[]:o,a=t.barChartType,u=t.layout,c=void 0===u?{}:u,l=t.height,f=t.width,p=s()(i.map((function(t){var e=t.anchor,n=t.positionPx,r=t.side;return"free"===e&&"left"===(r||"left")&&void 0!==n?n:0}))),y=s()(i.map((function(t){var e=t.anchor,n=t.positionPx,r=t.side;return"free"===e&&"right"===r&&void 0!==n?n:0}))),d=s()(r.map((function(t){var e=t.anchor,n=t.positionPx,r=t.side;return"free"===e&&"bottom"===(r||"bottom")&&void 0!==n?n:0}))),m=s()(r.map((function(t){var e=t.anchor,n=t.positionPx,r=t.side;return"free"===e&&"top"===r&&void 0!==n?n:0}))),v=0===p?0:p/f,b=0===y?1:1-y/f,O=0===d?0:d/l,w=0===m?1:1-m/l,g=i.reduce((function(t,n,r){var o;return T(T({},t),{},k({},"yaxis".concat(0===r?"":r+1),T(T({automargin:!0,type:null==n?void 0:n.type,tickangle:null!==(o=n.angle)&&void 0!==o?o:"auto",showticklabels:!n.hide,nticks:n.nTicks,showgrid:e,color:n.color||c.color,side:n.side,anchor:n.anchor||"x"},"free"===n.anchor&&{position:"right"===n.side?1-(n.positionPx||0)/f:(n.positionPx||0)/f}),{},{title:{text:n.title,font:{size:n.fontSize||c.fontSize||x.nb.SIZE,family:n.fontFamily||c.fontFamily||x.nb.FAMILY}},tickfont:{size:n.fontSize||c.fontSize||x.nb.SIZE,family:n.fontFamily||c.fontFamily||x.nb.FAMILY},tickformat:null==n?void 0:n.format,tickprefix:null==n?void 0:n.tickPrefix,ticksuffix:null==n?void 0:n.tickSuffix},0!==r?{overlaying:"y"}:{domain:[O,w]})))}),{}),h=r.reduce((function(t,n,r){var o;return T(T({},t),{},k({},"xaxis".concat(0===r?"":r+1),T(T({automargin:!0,type:null==n?void 0:n.type,tickangle:null!==(o=n.angle)&&void 0!==o?o:"auto",showticklabels:!n.hide,nticks:n.nTicks,showgrid:e,color:n.color||c.color,side:n.side,anchor:n.anchor||"y"},"free"===n.anchor&&{position:"top"===n.side?1-(n.positionPx||0)/l:(n.positionPx||0)/l}),{},{title:{text:n.title,font:{size:n.fontSize||c.fontSize||x.nb.SIZE,family:n.fontFamily||c.fontFamily||x.nb.FAMILY}},tickfont:{size:n.fontSize||c.fontSize||x.nb.SIZE,family:n.fontFamily||c.fontFamily||x.nb.FAMILY}},0!==r?{overlaying:"x"}:{domain:[v,b]})))}),{});return T(T(T({},a&&{barmode:a}),g),h)}const C=(0,w.Z)((function(t){var e=t.onInitialized,n=t.onHover,i=function(t){var e,n=function(t){var e=t.series,n=t.xAxis,r=t.classifications,o=t.classificationAttr,i=A(t,h);if(e){var a,u=T({groupByAttributes:null==n?void 0:n.dataKey,aggregationAttribute:null==e||null===(a=e[0])||void 0===a?void 0:a.dataKey},((null==r?void 0:r.dataKey)||o)&&{classificationAttribute:r.dataKey||o});return T(T(T({},i),(0,x.aw)(T(T({},i),{},{options:T(T({},u),i.options)}))),{},{data:[i.data]})}return i}(t),r=n.height,o=n.width,i=n.legend,u=n.classifyGeoJSONSync,l=n.cartesian,s=n.layout,f=o>350,p=n.traces||[],y=n.data||[],d=j(p.map((function(t){return t.type}))),m=d.filter((function(t){return"pie"===t})).length+(d.includes("bar")||d.includes("line")?1:0),v=m>1&&{grid:{rows:Math.ceil(m/2),columns:2}},b=c()(n.xAxisOpts||[{id:0}]).map((function(t,e){return 0===e?t:T(T({},t),{},{xaxis:"x".concat(e+1)})})),O=c()(n.yAxisOpts||[{id:0}]).map((function(t,e){return 0===e?t:T(T({},t),{},{yaxis:"y".concat(e+1)})})),w=(0,x.lF)({traces:p,xAxisOpts:b,yAxisOpts:O}),g=w&&n.barChartType||"group";return{layout:T(T(T({showlegend:null!=i&&i},N({cartesian:l,xAxisOpts:b,yAxisOpts:O,barChartType:g,layout:s,height:r,width:o})),{},{font:{color:(null==s?void 0:s.color)||x.nb.COLOR,size:(null==s?void 0:s.fontSize)||x.nb.SIZE,family:(null==s?void 0:s.fontFamily)||x.nb.FAMILY},margin:(e={isModeBarVisible:f},{t:e.isModeBarVisible?25:8,b:8,l:8,r:8,pad:4,autoexpand:!0}),autosize:!1,height:r,width:o},d.includes("pie")&&f&&{legend:{x:1.05,y:.5}}),{},{hovermode:"x unified",uirevision:!0},v),data:p.filter((function(t,e){return!!y[e]})).reduce((function(t,e,n){var r=e.id,o=e.name,i=e.type,c=e.options,l=e.style,f=e.xaxis,p=void 0===f?0:f,d=e.yaxis,w=void 0===d?0:d,x=e.textinfo,g=e.tickPrefix,h=e.format,S=e.tickSuffix,P=e.formula,A=e.sortBy,E=e.includeLegendPercent,I=y[n],k="pie"===i&&m>1?{domain:{row:Math.floor(n/v.grid.columns),column:n%v.grid.columns}}:{},_=b.find((function(t){return t.id===p}))||b[0]||{},M=function(t){var e=t.id,n=t.type,r=t.options,o=t.classificationDataKey,i=t.data,a=t.yAxisOpts,u=t.xAxisOpts,c=t.style,l=t.domain,s=t.name,f=t.classifyGeoJSONSync,p=t.textinfo,y=t.layout,d=t.tickPrefix,m=t.format,v=t.tickSuffix,b=t.formula,O=t.sortBy,w=t.includeLegendPercent;return f&&D[n||"line"]?D[n||"line"]({id:e,data:i,options:r,style:c,domain:l,name:s,classificationDataKey:o,classifyGeoJSON:f,formula:b,yAxisOpts:a,xAxisOpts:u,textinfo:p,layout:y,tickPrefix:d,format:m,tickSuffix:v,sortBy:O,includeLegendPercent:w}):null}(T({id:r,type:i,options:c,data:I,yAxisOpts:O.find((function(t){return t.id===w}))||O[0]||{},xAxisOpts:_,style:l,name:o,classifyGeoJSONSync:u,textinfo:x,layout:s,tickPrefix:g,format:h,tickSuffix:S,formula:P,sortBy:A,includeLegendPercent:E},k));return[].concat(j(t),j(a()(M)?M:[M]))}),[]).map((function(t,e){return p.length>1&&!w&&"bar"===(null==t?void 0:t.type)?T(T({},t),{},{offsetgroup:e+1}):t})),config:{displayModeBar:f,modeBarButtonsToRemove:["lasso2d","select2d","hoverCompareCartesian","hoverClosestCartesian","hoverClosestPie"],displaylogo:!1}}}(A(t,S)),u=i.data,l=i.layout,s=i.config;return o().createElement(r.Suspense,{fallback:o().createElement(b.Z,null)},o().createElement(_,{onInitialized:e,onHover:n,data:u.flat(),layout:l,config:s}))}))},968483:(t,e,n)=>{"use strict";n.d(e,{Z:()=>l});var r,o=n(124852),i=n.n(o),a=n(536030);function u(){return u=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u.apply(this,arguments)}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const l=function(t){return function(e){var n,l,s=(n=(0,o.useState)(!1),l=2,function(t){if(Array.isArray(t))return t}(n)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,u=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(u.push(r.value),u.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(n,l)||function(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}(n,l)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[1];return(0,o.useEffect)((function(){var t=!1;return r||(0,a.Gr)().then((function(e){r=(0,a.wq)(e),t||s(!0)})),function(){t=!0}}),[]),i().createElement(t,u({},e,{classifyGeoJSONSync:r}))}}},199767:(t,e,n)=>{"use strict";n.d(e,{qP:()=>v,XA:()=>b,fA:()=>O,gN:()=>w,p5:()=>x,Rr:()=>g,DK:()=>h,En:()=>S,Tr:()=>P,t$:()=>A,XJ:()=>j,Dx:()=>E,Jy:()=>T});var r=n(472500),o=n.n(r),i=n(666654),a=n.n(i),u=n(747037),c=n.n(u),l=n(701469),s=n.n(l),f=n(683608),p=n.n(f);function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){var r,o,i,a;r=t,o=e,i=n[e],a=function(t,e){if("object"!=y(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==y(a)?a:a+"")in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var v=function(t,e){return"<wps:Input>"+"<ows:Identifier>".concat(t,"</ows:Identifier>")+e+"</wps:Input>"},b=function(t){return"<wps:Data>".concat(t,"</wps:Data>")},O=function(t,e,n,r){return'<wps:Reference mimeType="'.concat(t,'" xlink:href="').concat(e,'" method="').concat(n,'"').concat("POST"===n?"":"/",">")+("POST"===n?"<wps:Body>".concat(r,"</wps:Body></wps:Reference>"):"")},w=function(t){return"<wps:LiteralData>".concat(t,"</wps:LiteralData>")},x=function(t,e,n){return"<wps:ComplexData".concat(e?' mimeType="'.concat(e,'"'):"").concat(n?' encoding="'.concat(n,'"'):"",">").concat(t,"</wps:ComplexData>")},g=function(t){return/\bCDATA\b/.test(t)?t:"<![CDATA[".concat(t,"]]>")},h=function(t){return"<wps:ResponseForm>".concat(t,"</wps:ResponseForm>")},S=function(t,e){return"<wps:RawDataOutput".concat(e?' mimeType="'.concat(e,'"'):"",">")+"<ows:Identifier>".concat(t,"</ows:Identifier>")+"</wps:RawDataOutput>"},P=function(t,e,n){return"<wps:ResponseDocument".concat(t?' storeExecuteResponse="true"':"").concat(e?' status="true"':"",">")+n+"</wps:ResponseDocument>"},A=function(t,e,n,r,o){return"<wps:Output".concat(t?' mimeType="'.concat(t,'"'):"").concat(e?' asReference="true"':"",">")+"<ows:Identifier>".concat(n,"</ows:Identifier>")+(r?"<ows:Title>".concat(r,"</ows:Title>"):"")+(o?"<ows:Abstract>".concat(o,"</ows:Abstract>"):"")+"</wps:Output>"},j=function(t){return v("writeParameters",b(x("<dwn:Parameters>".concat(t,"</dwn:Parameters>"))))},E=function(t,e){return'<dwn:Parameter key="'.concat(t,'">').concat(e,"</dwn:Parameter>")},I=function(t,e){var n=o().parse(t,!0),r=n.pathname;return(a()(n.pathname,"wfs")||a()(n.pathname,"wms"))&&(r=n.pathname.replace(/(wms|ows|wfs|wps)$/,"wps")),o().format(m(m({},n),{},{search:null,pathname:r,query:m(m({service:"WPS"},e),n.query)}))},T=function(t,e){if(t&&c()(t))return I(t,e);if(s()(t)){var n=p()(0,t.length-1);return I(t[n],e)}return t}},27835:(t,e,n)=>{"use strict";n.d(e,{Uh:()=>g,W5:()=>h,ai:()=>A,RW:()=>j,dr:()=>E,mG:()=>I,ZP:()=>T});var r=n(406557),o=n.n(r),i=n(49977),a=n(505055),u=n(507526),c=n(375875),l=n.n(c),s=n(199767);function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){var r,o,i;r=t,o=e,i=n[e],(o=m(o))in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t){var e=function(t,e){if("object"!=f(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==f(e)?e:e+""}function v(t){var e="function"==typeof Map?new Map:void 0;return v=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return function(t,e,n){if(b())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,e);var o=new(t.bind.apply(t,r));return n&&O(o,n.prototype),o}(t,arguments,w(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),O(n,t)},v(t)}function b(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(b=function(){return!!t})()}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function w(t){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},w(t)}var x=function(t){function e(t,n){var r,o,i,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(o=this,i=e,a=[t],i=w(i),r=function(t,e){if(e&&("object"===f(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(o,b()?Reflect.construct(i,a||[],w(o).constructor):i.apply(o,a))).name="WPSExecuteError",r.code=n||t,r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(e,t),n=e,Object.defineProperty(n,"prototype",{writable:!1}),n;var n}(v(Error)),g=function(t,e,n){return'<?xml version="1.0" encoding="UTF-8"?><wps:Execute version="1.0.0" service="WPS" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.opengis.net/wps/1.0.0" xmlns:wfs="http://www.opengis.net/wfs" xmlns:wps="http://www.opengis.net/wps/1.0.0" xmlns:ows="http://www.opengis.net/ows/1.1" xmlns:gml="http://www.opengis.net/gml" xmlns:ogc="http://www.opengis.net/ogc" xmlns:wcs="http://www.opengis.net/wcs/1.1.1" xmlns:dwn="http://geoserver.org/wps/download" xmlns:xlink="http://www.w3.org/1999/xlink" xsi:schemaLocation="http://www.opengis.net/wps/1.0.0 http://schemas.opengis.net/wps/1.0.0/wpsAll.xsd">'+"<ows:Identifier>".concat(t,"</ows:Identifier>")+"<wps:DataInputs>"+(e||[]).join("")+"</wps:DataInputs>"+(n||"")+"</wps:Execute>"},h=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return i.Observable.defer((function(){return l().get((0,s.Jy)(t,{version:"1.0.0",REQUEST:"GetExecutionStatus",executionId:e}),d({headers:{Accept:"application/xml"}},n))}))},S=function(t,e){var n,r,i=function(t){var e,n,r,i,a,u,c,l,s,f,p,y=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o(),d=null==t||null===(e=t.ExecuteResponse)||void 0===e||null===(n=e.Status)||void 0===n?void 0:n[0];return null!=d&&d.ProcessAccepted?{status:"ProcessAccepted"}:null!=d&&d.ProcessStarted?{status:"ProcessStarted"}:null!=d&&d.ProcessSucceeded?{status:"ProcessSucceeded",data:y(null===(r=t.ExecuteResponse.ProcessOutputs)||void 0===r||null===(i=r[0])||void 0===i?void 0:i.Output)}:null!=d&&d.ProcessFailed?{status:"ProcessFailed",exceptionReport:null==d||null===(a=d.ProcessFailed)||void 0===a||null===(u=a[0])||void 0===u||null===(c=u.ExceptionReport)||void 0===c||null===(l=c[0])||void 0===l||null===(s=l.Exception)||void 0===s||null===(f=s[0])||void 0===f||null===(p=f.ExceptionText)||void 0===p?void 0:p[0]}:null!=d&&d.ProcessPaused?{status:"ProcessPaused"}:{status:"UnexpectedStatus"}}(t,e);if("ProcessFailed"===i.status)throw new x(i.exceptionReport,"ProcessFailed");if("UnexpectedStatus"===i.status)throw new x("UnexpectedProcessStatus");if("ProcessSucceeded"===i.status)return{succeeded:!0,data:i.data};var a=null==t||null===(n=t.ExecuteResponse)||void 0===n||null===(r=n.$)||void 0===r?void 0:r.statusLocation;if(!a)throw new x("NoStatusLocation");var u=a.indexOf("executionId=");if(-1===u)throw new x("NoExecutionId");var c=a.slice(u+12),l=c.indexOf("&");return{succeeded:!1,executionId:-1===l?c:c.slice(0,l)}},P=function(t){var e,n;return null!=t&&null!==(e=t.Identifier)&&void 0!==e&&e[0]?{identifier:null==t||null===(n=t.Identifier)||void 0===n?void 0:n[0]}:null},A=function(t){var e,n,r,o,i;return null!=t&&null!==(e=t.Data)&&void 0!==e&&null!==(n=e[0])&&void 0!==n&&n.LiteralData?{data:null==t||null===(r=t.Data)||void 0===r||null===(o=r[0])||void 0===o||null===(i=o.LiteralData)||void 0===i?void 0:i[0]}:null},j=function(t){var e,n,r,o,i,a;return null!=t&&t.Reference?{href:null==t||null===(e=t.Reference)||void 0===e||null===(n=e[0])||void 0===n||null===(r=n.$)||void 0===r?void 0:r.href,mimeType:null==t||null===(o=t.Reference)||void 0===o||null===(i=o[0])||void 0===i||null===(a=i.$)||void 0===a?void 0:a.mimeType}:null},E=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map((function(t){return[P].concat((n=e||[],function(t){if(Array.isArray(t))return p(t)}(n)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(n)||function(t,e){if(t){if("string"==typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(t,e):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())).map((function(e){return e(t)})).reduce((function(t,e){return e?d(d({},t),e):t}),{});var n}))}},I=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=n.executeStatusUpdateInterval,c=void 0===o?2e3:o,f=n.outputsExtractor,p=function(t){return i.Observable.defer((function(){return new Promise((function(e,n){return(0,a.parseString)(t,{tagNameProcessors:[u.stripPrefix]},(function(t,r){return t?n(t):e(r)}))}))}))};return function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return i.Observable.defer((function(){return l().post((0,s.Jy)(t,{version:"1.0.0",REQUEST:"Execute"}),e,d({headers:{"Content-Type":"application/xml"}},n))}))}(t,e,r).catch((function(t){if(t.__CANCEL__)throw t;throw new x("ExecuteProcessXHRFailed")})).switchMap((function(t){return"application/xml"===t.headers["content-type"]||"text/xml"===t.headers["content-type"]?p(t.data).map((function(e){return{data:e,type:"application/xml",originalData:t.data}})):i.Observable.of({data:t.data,type:t.headers["content-type"]})})).flatMap((function(e){var n=e.data,r=e.type,o=e.originalData;if("application/xml"!==r)return i.Observable.of(n);if(null==n||!n.ExecuteResponse)return i.Observable.of(o);var a=S(n,f),u=a.succeeded,l=a.data,s=a.executionId;if(u)return i.Observable.of(l);var y=i.Observable.interval(c).take(1).flatMap((function(){return h(t,s).catch((function(){throw new x("GetExecutionStatusXHRFailed")})).flatMap((function(t){return p(t.data).flatMap((function(t){var e=S(t,f);return e.succeeded?i.Observable.of(e.data):y}))}))}));return y}))};const T=I},129389:(t,e,n)=>{"use strict";n.d(e,{S:()=>d,G:()=>m});var r=n(944908),o=n.n(r),i=n(65792),a=n.n(i);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){var r,o,i,a;r=t,o=e,i=n[e],a=function(t,e){if("object"!=u(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==u(a)?a:a+"")in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var p={red:["#000","#f00"],green:["#000","#008000","#0f0"],blue:["#000","#00f"],gray:["#333","#eee"],jet:["#00f","#ff0","#f00"],random:["#57663d","#408064","#3d539a","#af36b3","#cdff29"]},y=o()(Object.keys(a().brewer).map((function(t){return t.toLocaleLowerCase()}))).map((function(t){return{name:t,colors:t}})),d=[].concat(s(Object.keys(p).map((function(t){return{name:t,colors:p[t]}}))),s(y)).map((function(t){return l(l({},t),{},{label:"global.colors.".concat(t.name)})})),m=function(t){var e;return null!==(e=p[t])&&void 0!==e?e:t}},12226:(t,e,n)=>{"use strict";n.d(e,{B:()=>o});var r=n(562651);function o(t,e){return(0,r.U)(t)(e)}}}]);