(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[13581],{45992:(t,e,r)=>{"use strict";r.d(e,{h:()=>f,Z:()=>s});var n=r(535937),o=r.n(n),i=r(836882),a=r(463202);function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var f=function(t,e){var r,n,u,l,f=i.Z;if("custom"===t)r=e;else if(u=(l=t.split("."))[0],n=l[1],!(r=f[u]))throw new Error("No such provider ("+u+")");var s={url:r.url,options:r.options||{}};if(n&&"variants"in r){if(!(n in r.variants))throw new Error("No such variant of "+(u||r.url)+" ("+n+")");var p,y=r.variants[n];p="string"==typeof y?{variant:y}:y.options,s={url:y.url||s.url,options:c(c({},s.options||{}),p)}}else"function"==typeof s.url&&(s.url=s.url(l.splice(1,l.length-1).join(".")));var b="file:"===window.location.protocol||s.options.forceHTTP;0===s.url.indexOf("//")&&b&&(s.url="http:"+s.url),s.options.retina&&(e.detectRetina&&a.ZP.getBrowserProperties().retina?e.detectRetina=!1:s.options.retina=""),s.options.attribution&&(s.options.attribution=function t(e){return-1===e.indexOf("{attribution.")?e:e.replace(/\{attribution.(\w*)\}/,(function(e,r){return t(f[r].options.attribution)}))}(s.options.attribution));var v=c(c({},s.options),o()(e,(function(t){return void 0!==t})));return[s.url,v]};const s={getLayerConfig:f}},218056:(t,e,r)=>{"use strict";r.d(e,{XK:()=>i,Um:()=>a,ut:()=>u});var n=r(701469),o=r.n(n);function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.replace(/(\{(.*?)\})/g,(function(){var t=arguments[0],r=arguments[2]?arguments[2]:arguments[1];if(["x","y","z"].includes(r))return arguments[0];var n=e[r];if(void 0===n)throw new Error("No value provided for variable "+t);return"function"==typeof n&&(n=n(e)),n}))}function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.url||"",r=t.subdomains||"";return r&&("string"==typeof r&&(r=r.split("")),o()(r))?r.map((function(r){return i(e.replace("{s}",r),t)})):["a","b","c"].map((function(r){return i(e.replace("{s}",r),t)}))}var u=function(t){return(t.url.match(/(\{s\})/)?a(t):[i(t.url,t)])[0]}},984023:(t,e,r)=>{"use strict";r.d(e,{bL:()=>P,ZS:()=>L,uI:()=>I,XA:()=>G});var n=r(490173),o=r(986267),i=r(849232),a=r(423923),u=r(8400),c=r.n(u),l=r(875472),f=r.n(l),s=r(552259);function p(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||d(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){v(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function v(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function m(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(t,e)||d(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){if(t){if("string"==typeof t)return h(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(t,e):void 0}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function g(t,e,r){var n=m(t,2),o=n[0],i=n[1],a=m(e,2),u=a[0],c=a[1],l=m(r,2),f=l[0],s=l[1],p=f-u,y=s-c,b=u,v=c;if(0!==p||0!==y){var d=((o-u)*p+(i-c)*y)/(p*p+y*y);d>1?(b=f,v=s):d>0&&(b+=p*d,v+=y*d)}return function(t,e,r,n){return Math.pow(r-t,2)+Math.pow(n-e,2)}(o,i,b,v)}function x(t,e,r){var n=e(t);return{fraction:t,point:n,reprojected:r(n)}}function w(t,e,r,o){var i=(0,n.default)(e,r).forward,a=function(t,e,r){var n=t.map(e);return{fractions:t,line:n,reprojectedLine:n.map(r)}}([0,1],t,i),u=a.fractions,c=a.line,l=a.reprojectedLine,f=[];f=function(t,e){return t.push(e[0]),t.push(e[1]),t}(f,l[0]);for(var s=0;s<1e4&&u.length>0;){var p=u.shift(),y=u.shift(),b=c.shift(),v=c.shift(),m=l.shift(),d=l.shift(),h=x((p+y)/2,t,i),w=h.fraction,O=h.point,j=h.reprojected;g(j,m,d)<o?(f.push(d[0]),f.push(d[1])):(u.unshift(p,w,w,y),c.unshift(b,O,O,v),l.unshift(m,j,j,d)),s++}return f}function O(t,e,r){return Math.min(Math.max(t,e),r)}var j={degrees:[90,45,30,20,10,5,2,1,.5,.2,.1,.05,.01,.005,.002,.001],m:[1e7,5e6,2e6,1e6,5e5,2e5,1e5,5e4,2e4,1e4,5e3,2e3,1e3,500,200,100]};function P(t){var e,r=n.default.defs(t);return j[null!==(e=null==r?void 0:r.units)&&void 0!==e?e:"m"]}function L(t,e,r,n,o){var i=m(e,2),a=i[0],u=i[1],c=Math.pow(r*n,2);return t.reduce((function(t,e){var r=e/2,n=o([a-r,u-r]),i=o([a+r,u+r]);return Math.pow(i[0]-n[0],2)+Math.pow(i[1]-n[1],2)>c?e:t}),-1)}function M(t,e,r,n,o,i){return function(t,e,r,n,o,i){return w((function(n){return[e+(r-e)*n,t]}),n,o,i)}(t,e,r,o,i,n)}function S(t,e,r,n,o,i){return function(t,e,r,n,o,i){return w((function(n){return[t,e+(r-e)*n]}),n,o,i)}(t,e,r,o,i,n)}function E(t,e,r,n,o){return t.map((function(t,i){var a=function(t,e,r){var n=Math.max(e[1],t[1]),o=Math.min(e[3],t[t.length-1]),i=O(e[1]+Math.abs(e[1]-e[3])*r,n,o);return[t[0],i]}(t,e,n);return{geom:a,text:r(t[0],b(b({},o),{},{index:i,extent:e}))}}))}function A(t,e,r,n,o){return t.map((function(t,i){var a=function(t,e,r){var n=Math.max(e[0],t[0]),o=Math.min(e[2],t[t.length-2]);return[O(e[0]+Math.abs(e[0]-e[2])*r,n,o),t[1]]}(t,e,n);return{geom:a,text:r(t[1],b(b({},o),{},{index:i,extent:e}))}}))}function F(t,e,r,n){return p(Array(function(t,e,r){return Math.round((e-t)/r)+1}(r,n,Math.abs(e))-1).keys()).map((function(o){return O(t+(o+1)*e,r,n)}))}function D(t,e){return(0,i.Z)({type:"Feature",geometry:{type:"LineString",coordinates:[[t[0],t[1]],[t[2],t[3]]]}},(0,o.bboxToFeatureGeometry)(e))}function _(t,e){return t.slice(0,e)}function k(t){var e=m(t,4),r=e[0],n=e[1],o=e[2],i=e[3];return[[r,n],[o,n],[o,i],[r,i],[r,n]]}function T(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,r=m(t,4),n=r[0],o=r[1],i=r[2],a=r[3],u=Math.max(i-n,a-o)*e/2,c=[n-u,o-u,i+u,a+u],l=[n+u,o+u,i-u,a-u];return{exterior:k(c),interior:k(l)}}function I(t,e,r,i,a,u,c,l,s,y,b,v,d,h){var g=arguments.length>14&&void 0!==arguments[14]?arguments[14]:{};if(-1===t)return{xLines:[],yLines:[],xLabels:[],yLabels:[],frame:null};var x=(0,n.default)(e,r).forward,w=x(u),j=m(w,2),P=j[0],L=j[1],k=(0,o.reprojectBbox)([Math.max(i[0],a[0]),Math.max(i[1],a[1]),Math.min(i[2],a[2]),Math.min(i[3],a[3])],e,r||"EPSG:4326"),I=m(k,4),C=I[0],G=I[1],R=I[2],Z=I[3],z=(0,o.reprojectBbox)(a,e,r||"EPSG:4326"),B=m(z,4),N=B[0],U=B[1],X=B[2],H=B[3],K=O(Math.floor(P/t)*t,N,X),$=f()(F(K,-t,N,K)),q=f()(F(K,t,K,X)),J=O(Math.floor(L/t)*t,U,H),Q=f()(F(J,-t,U,J)),V=f()(F(J,t,J,H)),W=_([].concat(p($),[K],p(q)).map((function(t){return S(t,G,Z,c,r||"EPSG:4326",e)})).filter((function(t){return D(t,i)})),l),Y=_([].concat(p(Q),[J],p(V)).map((function(t){return M(t,C,R,c,r||"EPSG:4326",e)})).filter((function(t){return D(t,i)})),l),tt=h?T(i,h):null;return{xLines:W,yLines:Y,xLabels:s?E(W,i,y,v,g):[],yLabels:s?A(Y,i,b,d,g):[],frame:tt}}function C(t){return[(t[2]+t[0])/2,(t[3]+t[1])/2]}function G(t){var e=t.mapProjection,r=t.gridProjection,i=t.extent,u=t.center,l=void 0===u?null:u,f=t.zoom,y=t.withLabels,v=void 0!==y&&y,m=t.xLabelFormatter,d=t.yLabelFormatter,h=t.xLabelPosition,g=void 0===h?0:h,x=t.yLabelPosition,w=void 0===x?1:x,O=t.maxLines,j=void 0===O?100:O,M=t.intervals,S=t.targetSize,E=void 0===S?100:S,A=t.resolutions,F=t.xLabelStyle,D=t.yLabelStyle,_=t.pixelRatio,k=void 0===_?devicePixelRatio:_,T=t.frameSize,G=void 0===T?0:T,R=(null!=A?A:(0,s.getResolutions)(e))[f],Z=(0,n.default)(e,r).forward,z=(0,n.default)(r,e).forward,B=Z(C((0,o.getExtentForProjection)(r).extent)),N=L(null!=M?M:P(r),B,E,R,z),U=R*R/(4*k*k),X=I(N,e,r,i,(0,o.getExtentForProjection)(e).extent,null!=l?l:C(i),U,j,v,(0,a.A4)(r,m),(0,a.u3)(r,d),g,w,G,{center:l,resolution:R,interval:N}),H=[].concat(p(X.xLines),p(X.yLines)).map((function(t){return{type:"Feature",properties:{ms_style:"lines"},geometry:{type:"LineString",coordinates:c()(t,2)}}})),K=p(X.xLabels).map((function(t){return{type:"Feature",properties:{ms_style:F?b(b({},F),{},{label:t.text}):"xlabels",valueText:t.text},geometry:{type:"Point",coordinates:t.geom}}})),$=p(X.yLabels).map((function(t){return{type:"Feature",properties:{ms_style:D?b(b({},D),{},{label:t.text}):"ylabels",valueText:t.text},geometry:{type:"Point",coordinates:t.geom}}})),q=X.frame?[X.frame].map((function(t){return{type:"Feature",properties:{ms_style:"frame"},geometry:{type:"Polygon",coordinates:[t.exterior,t.interior]}}})):[];return{type:"FeatureCollection",features:[].concat(p(H),p(q),p(K),p($))}}}}]);