(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7375],{57579:(e,t,r)=>{"use strict";r.d(t,{VR:()=>n,oU:()=>o,A4:()=>c}),r(23570);var n="floating",o=/^widgets\["?([^"\]]*)"?\]\.?(.*)$/,c=function(e){return{type:"WIDGETS:NEW",widget:e}}},93451:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(86638),o=r(45697),c=r.n(o),u=r(61545),a=r(18093);function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"label";if((0,u.isArray)(t))return t.map((function(o){var c=(0,n.S$)(e,o[r]||(0,u.isString)(o)&&o||"");return f(f({},o),{},s({},r,(0,u.isNil)(c)?t:c))}));var o=(0,n.S$)(e,t);return(0,u.isNil)(o)?t:o},b=function(e,t,r){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;return f(f({},n),{},s({},o,e[o]&&g(t,e[o],r)))}};const p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label";return(0,a.compose)((0,a.getContext)({messages:c().object}),(0,a.mapProps)((function(r){var n=r.messages,o=i(r,["messages"]);return f(f({},o),(0,u.castArray)(e).reduce(b(o,n,t),{}))})))}},31935:(e,t,r)=>{"use strict";r.d(t,{YL:()=>a,B0:()=>i,Mz:()=>l,TC:()=>f,qS:()=>s,Pe:()=>g,TP:()=>b});var n=r(22222),o=r(75110),c=r(93152),u=r(24262),a=function(e){return e.backgroundSelector&&e.backgroundSelector.source},i=function(e){return e.backgroundSelector&&e.backgroundSelector.modalParams},l=function(e){return e.backgroundSelector&&e.backgroundSelector.backgrounds||[]},f=function(e){return e.backgroundSelector&&e.backgroundSelector.lastRemovedId},s=function(e){return e.backgroundSelector&&e.backgroundSelector.confirmDeleteBackgroundModal},g=function(e){return e.backgroundSelector&&e.backgroundSelector.allowDeletion},b=(0,n.P1)(o.l2,c.$v,(function(e,t){return e.filter((function(e){return e&&"background"===e.group})).map((function(e){return(0,u.invalidateUnsupportedLayer)(e,t)}))||[]}))},88113:(e,t,r)=>{"use strict";r.d(t,{b6:()=>l,_S:()=>f,R7:()=>s,bA:()=>g,Cb:()=>b,$t:()=>p,kS:()=>d,y:()=>O,l2:()=>y,HN:()=>v});var n=r(22222),o=r(61545),c=r(827);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=function(e){return(0,o.get)(e,"catalog.services")},f=((0,n.P1)((function(e){return(0,o.get)(e,"catalog.default.staticServices")}),l,(function(e,t){return a(a({},t),(0,o.pick)(e,"default_map_backgrounds"))})),function(e){return(0,o.get)(e,"catalog.newService")}),s=function(e){return(0,o.get)(e,'catalog.services["'.concat((0,o.get)(e,"catalog.selectedService"),'"]'))},g=function(e){return(0,o.get)(e,"catalog.searchOptions")},b=function(e){return(0,o.get)(e,"catalog.selectedService")},p=function(e){return"metadataexplorer"===(0,o.get)(e,"controls.toolbar.active")||(0,o.get)(e,"controls.metadataexplorer.enabled")},d=function(e){return((0,o.get)(e,"localConfig.authenticationRules")||[]).filter((function(e){return"authkey"===e.method})).map((function(e){return e.authkeyParamName}))||[]},O=function(e){return(0,o.get)(e,"catalog.pageSize",4)},y=function(e){return(0,o.get)(e,"catalog.delayAutoSearch",1e3)},v=(0,n.zB)({projection:c.uy})}}]);