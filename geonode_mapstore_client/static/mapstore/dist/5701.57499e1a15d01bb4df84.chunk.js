(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[5701],{61444:(t,e,r)=>{"use strict";r.r(e);var i=r(56307),n=r.n(i),o=r(44712),a=r.n(o),s=(r(71851),r(27418)),l=r.n(s);n().BingLayer.prototype.loadMetadata=function(){if(!this.metaRequested){this.metaRequested=!0;var t=this,e="_bing_metadata_"+n().Util.stamp(this);window[e]=function(r){t.meta=r,window[e]=void 0;var i=document.getElementById(e);return i.parentNode.removeChild(i),r.errorDetails?(t.fire("load",{layer:t}),t.onError(r)):(t.initMetadata(r),null)};var r="file:"===document.location.protocol?"https":document.location.protocol.slice(0,-1),i=r+"://dev.virtualearth.net/REST/v1/Imagery/Metadata/"+this.options.type+"?include=ImageryProviders&jsonp="+e+"&key="+this._key+"&UriScheme="+r,o=document.createElement("script");o.type="text/javascript",o.src=i,o.id=e,document.getElementsByTagName("head")[0].appendChild(o)}},n().BingLayer.prototype.onError=function(t){return this.options.onError?this.options.onError(t):null},a().registerType("bing",{create:function(t){var e=t.apiKey,r={subdomains:[0,1,2,3],type:t.name,attribution:"Bing",culture:"",onError:t.onError,maxNativeZoom:t.maxNativeZoom||19,maxZoom:t.maxZoom||23};return t.zoomOffset&&(r=l()({},r,{zoomOffset:t.zoomOffset})),new(n().BingLayer)(e,r)},isValid:function(t){return!t.meta||!t.meta.statusCode||200===t.meta.statusCode}})},51735:(t,e,r)=>{var i=r(56307);t.exports=i.TileLayer.extend({initialize:function(t){i.TileLayer.prototype.initialize.call(this,this.url,t)}})},26696:(t,e,r)=>{"use strict";r.r(e);var i=r(44712),n=r.n(i),o=r(56307),a=r.n(o);r(14767),n().registerType("google",(function(t){return a().gridLayer.googleMutant({type:t.name.toLowerCase(),maxNativeZoom:t.maxNativeZoom||18,maxZoom:t.maxZoom||20})}))},90671:(t,e,r)=>{"use strict";r.r(e);var i=r(44712),n=r.n(i),o=r(71305),a=r.n(o),s=r(27418),l=r.n(s);r(17820),n().registerType("graticule",{create:function(t){var e=l()({interval:20,showOriginLabel:!0,redraw:"move"},t);return a()?new(a())(e):null},isValid:function(){return!!a()}})},52031:(t,e,r)=>{"use strict";r.r(e);var i=r(44712),n=r.n(i),o=r(57167),a=r.n(o);function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}n().registerType("mapquest",{create:function(t){return a()?a().mapLayer(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({maxZoom:23},t)):(t&&t.onError&&t.onError(),!1)},isValid:function(){return!!a()}})},51254:(t,e,r)=>{"use strict";r.r(e);var i=r(44712),n=r.n(i),o=r(56307),a=r.n(o);n().registerType("osm",(function(t){return a().tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',zoomOffset:t.zoomOffset||0,maxNativeZoom:t.maxNativeZoom||19,maxZoom:t.maxZoom||23})}))},35659:(t,e,r)=>{"use strict";r.r(e);var i=r(44712),n=r.n(i),o=r(56307),a=r.n(o);n().registerType("tms",(function(t){return a().tileLayer("".concat(t.tileMapUrl,"/{z}/{x}/{y}.").concat(t.extension),{hideErrors:t.hideErrors||!0,tms:!0})}))},70826:(t,e,r)=>{"use strict";r.r(e);var i=r(44712),n=r.n(i),o=r(56307),a=r.n(o),s=r(45992);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}n().registerType("tileprovider",(function(t){var e,r,i=(e=s.Z.getLayerConfig(t.provider,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({maxZoom:23},t)),r=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],i=!0,n=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done)&&(r.push(a.value),!e||r.length!==e);i=!0);}catch(t){n=!0,o=t}finally{try{i||null==s.return||s.return()}finally{if(n)throw o}}return r}}(e,r)||function(t,e){if(t){if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=i[0],o=i[1];return a().tileLayer(n,o)}))},10733:(t,e,r)=>{"use strict";r.r(e);var i=r(44712),n=r.n(i),o=r(61545),a=r(56307),s=r.n(a),l=function t(e,r){e.eachLayer&&e.eachLayer((function(e){e.setOpacity&&e.setOpacity(r),t(e,r)}))};n().registerType("vector",{create:function(t){var e=function(t){var e=t.hideLoading,r=s().geoJson([],{pointToLayer:"marker"!==t.styleName?function(e,r){return s().circleMarker(r,e.style||t.style)}:null,hideLoading:e});return r.setOpacity=function(t){l(r,t)},r.on("layeradd",(function(e){var i=e.layer;r.setOpacity((0,o.isNil)(r.opacity)?t.opacity:r.opacity,i)})),r}(t);return e.opacity=(0,o.isNil)(t.opacity)?1:t.opacity,e},update:function(t,e,r){e.opacity!==r.opacity&&(t.opacity=e.opacity)},render:function(){return null}})},32755:(t,e,r)=>{"use strict";var i=r(61545),n=r(56307),o=r.n(n),a=r(43143),s=r(90183),l=r(44712),u=r.n(l),c=r(43378),m=r(32420),p=r(38848);function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){d(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var h=function(t,e){t.fireEvent("loading");var r=(0,c.optionsToVendorParams)(e),i=function(){t.fireEvent("loadError")};return(0,m.getFeature)(e.url,e.name,f({outputFormat:"application/json",maxFeatures:1e3,srsname:(0,s.normalizeSRS)("EPSG:4326")},r)).then((function(e){return 200===e.status?(t.clearLayers(),t.addData(e.data),t.fireEvent("load")):(console.error(e),i(new Error("status code of response:"+e.status))),t})).catch((function(t){i()}))},g=function(t){var e=t||{},r=e.color,i=e.fillColor;return f(f({},function(t,e){if(null==t)return{};var r,i,n=function(t,e){if(null==t)return{};var r,i,n={},o=Object.keys(t);for(i=0;i<o.length;i++)r=o[i],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}(e,["color","fillColor"])),{},{color:(0,a.qq)(r,1),fillColor:(0,a.qq)(i,1)})},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.style&&t.style[0]||t.style;return g(e)},S=function(t,e){var r=v(e);t.setStyle(r),t.options.style=r,t.styleName=e.styleName},x=function t(e,r){e.eachLayer&&e.eachLayer((function(e){e.setOpacity&&e.setOpacity(r),t(e,r)}))},O=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=v(t),n=function(e,i){return"marker"===t.styleName?o().marker(i,r):o().circleMarker(i,r)},a=new(o().GeoJSON)(e,{pointToLayer:n,style:r});return a.setOpacity=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=f({},a.options.style||{}),r=e.fillOpacity,i=void 0===r?1:r,n=e.opacity,o=void 0===n?1:n,s=f(f({},e),{},{opacity:o*t,fillOpacity:i*t});a.setStyle(g(s)),x(a,t)},a.on("layeradd",(function(){S(a,t),a.setOpacity((0,i.isNil)(a.opacity)?t.opacity:a.opacity)})),a};u().registerType("wfs",{create:function(t){var e=O(t);return h(e,t),e.opacity=(0,i.isNil)(t.opacity)?1:t.opacity,e},update:function(t,e,r){if(e.opacity!==r.opacity&&(t.opacity=e.opacity),(0,p.needsReload)(r,e)&&h(t,e),(0,i.isEqual)(e.style,r.style)||S(t,e),e.styleName!==r.styleName){var n=t.toGeoJSON().features;return O(e,n)}return null},render:function(){return null}})},36366:(t,e,r)=>{"use strict";r.r(e);var i=r(67294),n=r.n(i),o=r(5346),a=r(44712),s=r.n(a),l=r(43378),u=r(95784),c=r.n(u),m=r(56307),p=r.n(m),y=r(27418),f=r.n(y),d=r(61545),h=r(33044),g=r(3901),v=r(24262),S=r(33358);function x(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r(12787),p().NonTiledLayer.WMSCustom=p().NonTiledLayer.WMS.extend({initialize:function(t,e){this._wmsUrl=t;var r=p().extend({},this.defaultWmsParams);for(var i in e)this.options.hasOwnProperty(i)||"CRS"===i.toUpperCase()||"maxNativeZoom"===i||(r[i]=e[i]);this.wmsParams=r,p().setOptions(this,e)},removeParams:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;return e.forEach((function(e){return delete t.wmsParams[e]})),r||this.redraw(),this}}),p().nonTiledLayer.wmsCustom=function(t,e){return new(p().NonTiledLayer.WMSCustom)(t,e)},p().TileLayer.MultipleUrlWMS=p().TileLayer.WMS.extend({initialize:function(t,e){this._url=t[0],this._urls=t,this._urlsIndex=0;var r=p().extend({},this.defaultWmsParams),i=e.tileSize||this.options.tileSize;for(var n in e.detectRetina&&p().Browser.retina?r.width=r.height=2*i:r.width=r.height=i,e)this.options.hasOwnProperty(n)||"CRS"===n.toUpperCase()||"maxNativeZoom"===n||(r[n]=e[n]);this.wmsParams=r,p().setOptions(this,e)},getTileUrl:function(t){var e=this._map,r=this.options.tileSize,i=t.multiplyBy(r),n=i.add([r,r]),o=this._crs.project(e.unproject(i,t.z)),a=this._crs.project(e.unproject(n,t.z)),s=this._wmsVersion>=1.3&&this._crs===p().CRS.EPSG4326?[a.y,o.x,o.y,a.x].join(","):[o.x,a.y,a.x,o.y].join(",");this._urlsIndex++,this._urlsIndex===this._urls.length&&(this._urlsIndex=0);var l=p().Util.template(this._urls[this._urlsIndex],{s:this._getSubdomain(t)});return l+p().Util.getParamString(this.wmsParams,l,!0)+"&BBOX="+s},removeParams:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;return e.forEach((function(e){return delete t.wmsParams[e]})),r||this.redraw(),this}}),p().tileLayer.multipleUrlWMS=function(t,e){return new(p().TileLayer.MultipleUrlWMS)(t,e)},p().TileLayer.ElevationWMS=p().TileLayer.MultipleUrlWMS.extend({initialize:function(t,e,r){this._tiles={},this._nodata=r,p().TileLayer.MultipleUrlWMS.prototype.initialize.apply(this,arguments)},_addTile:function(t){var e=this.getTileUrl(t);(0,g.qR)(e,t,this._tileCoordsToKey(t))},getElevation:function(t,e){try{var r=this._getTileFromCoords(t),i=(0,g.yQ)(this._tileCoordsToKey(r),this._getTileRelativePixel(r,e),this.getTileSize().x,this._nodata);return i.available?i.value:n().createElement(o.Z,{msgId:i.message})}catch(t){return n().createElement(o.Z,{msgId:"elevationLoadingError"})}},_getTileFromCoords:function(t){var e=this._map.project(t).divideBy(256).floor();return f()(e,{z:this._tileZoom})},_getTileRelativePixel:function(t,e){var r=Math.floor(e.x-this._getTilePos(t).x-this._map._getMapPanePos().x),i=Math.min(this.getTileSize().x-1,Math.floor(e.y-this._getTilePos(t).y-this._map._getMapPanePos().y));return new(p().Point)(r,i)},_removeTile:function(){},_abortLoading:function(){}}),p().tileLayer.elevationWMS=function(t,e,r){return new(p().TileLayer.ElevationWMS)(t,e,r)};var O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(t).reduce((function(e,r){return(0,d.isNil)(t[r])?e:f()(e,x({},r,t[r]))}),{})};function b(t){var e=void 0!==t.opacity?t.opacity:1,r=(0,l.optionsToVendorParams)(t),i=f()({},t.baseParams,{attribution:t.credits&&(0,v.creditsToAttribution)(t.credits),layers:t.name,styles:t.style||"",format:((0,S.isVectorFormat)(t.format)?"image/png":t.format)||"image/png",transparent:void 0===t.transparent||t.transparent,tiled:void 0===t.tiled||t.tiled,opacity:e,zIndex:t.zIndex,version:t.version||"1.3.0",tileSize:t.tileSize||256,maxZoom:t.maxZoom||23,maxNativeZoom:t.maxNativeZoom||18},f()(t._v_?{_v_:t._v_}:{},r||{}));return(0,h.addAuthenticationToSLD)(i,t)}function w(t){return t.map((function(t){return t.split("?")[0]}))}s().registerType("wms",{create:function(t){var e=w((0,d.isArray)(t.url)?t.url:[t.url]),r=O(b(t)||{});return e.forEach((function(e){return(0,h.addAuthenticationParameter)(e,r,t.securityToken)})),t.useForElevation?p().tileLayer.elevationWMS(e,r,t.nodata||-9999):t.singleTile?p().nonTiledLayer.wmsCustom(e[0],r):p().tileLayer.multipleUrlWMS(e,r)},update:function(t,e,r){if(r.singleTile!==e.singleTile||r.tileSize!==e.tileSize||r.securityToken!==e.securityToken&&e.visibility){var i=w((0,d.isArray)(e.url)?e.url:[e.url]),n=b(e)||{};return i.forEach((function(t){return(0,h.addAuthenticationParameter)(t,n,e.securityToken)})),e.singleTile?p().nonTiledLayer.wmsCustom(i[0],n):p().tileLayer.multipleUrlWMS(i,n)}var o=f()({},c().filterWMSParamOptions(b(r)),(0,h.addAuthenticationToSLD)(r.params||{},r)),a=f()({},c().filterWMSParamOptions(b(e)),(0,h.addAuthenticationToSLD)(e.params||{},e)),s=Object.keys(a).filter((function(t){return a[t]!==o[t]})),l=Object.keys(o).filter((function(t){return o[t]!==a[t]})),u={};return l.length>0&&t.removeParams(l,s.length>0),s.length>0&&(u=s.reduce((function(t,e){return f()({},t,x({},e,a[e]))}),u),t.setParams(O(f()(u,u.params,(0,h.addAuthenticationToSLD)(e.params||{},e))))),null}})},49825:(t,e,r)=>{"use strict";r.r(e);var i=r(44712),n=r.n(i),o=r(90183),a=r(56307),s=r.n(a),l=r(27418),u=r.n(l),c=r(33044),m=r(7294),p=r(24961),y=r.n(p),f=r(61545),d=r(33358);s().tileLayer.wmts=function(t,e,r){return new(y())(t,e,r)};var h=function(t){var e=function(t){return t.map((function(t){return t.split("?")[0]}))}((0,f.isArray)(t.url)?t.url:[t.url]),r=function(t){var e=(0,o.normalizeSRS)(t.srs||"EPSG:3857",t.allowedSRS),r=m.getTileMatrixSet(t.tileMatrixSet,e,t.allowedSRS,t.matrixIds);return u()({requestEncoding:t.requestEncoding,layer:t.name,style:t.style||"",format:((0,d.isVectorFormat)(t.format)?"image/png":t.format)||"image/png",tileMatrixSet:r,version:t.version||"1.0.0",tileSize:t.tileSize||256,CRS:(0,o.normalizeSRS)(t.srs||"EPSG:3857",t.allowedSRS),maxZoom:t.maxZoom||23,maxNativeZoom:t.maxNativeZoom||18},t.params||{})}(t)||{};e.forEach((function(e){return(0,c.addAuthenticationParameter)(e,r,t.securityToken)}));var i=(0,o.normalizeSRS)(t.srs||"EPSG:3857",t.allowedSRS),n=m.getTileMatrix(t,i),a=n.tileMatrixSet,l=n.matrixIds;return s().tileLayer.wmts(e,r,{tileMatrixPrefix:t.tileMatrixPrefix||r.tileMatrixSet+":"||i+":",originY:t.originY||20037508.3428,originX:t.originX||-20037508.3428,ignoreErrors:t.ignoreErrors||!1,matrixIds:l,matrixSet:a})};n().registerType("wmts",{create:h,update:function(t,e,r){return r.securityToken!==e.securityToken||r.format!==e.format?h(e):null}})},35701:(t,e,r)=>{t.exports={BingLayer:r(61444),Commons:r(51735),GraticuleLayer:r(90671),GoogleLayer:r(26696),MapQuest:r(52031),OSMLayer:r(51254),TMSLayer:r(35659),TileProviderLayer:r(70826),WFSLayer:r(32755).default,WMSLayer:r(36366),WMTSLayer:r(49825),VectorLayer:r(10733)}},57167:t=>{t.exports=window.MQ},95784:(t,e,r)=>{var i=r(27418),n={PARAM_OPTIONS:["layers","styles","format","transparent","version","tiled","zindex","_v_","cql_filter","sld"],wmsToLeafletOptions:function(t){var e=void 0!==t.opacity?t.opacity:1;return i({layers:t.name,styles:t.style||"",format:t.format||"image/png",transparent:void 0===t.transparent||t.transparent,tiled:void 0===t.tiled||t.tiled,opacity:e},t.params||{})},getWMSURL:function(t){return t.split("?")[0]},filterWMSParamOptions:function(t){var e={};return Object.keys(t).forEach((function(r){r&&r.toLowerCase&&n.PARAM_OPTIONS.indexOf(r.toLowerCase())>=0&&(e[r]=t[r])})),e}};t.exports=n},24961:(t,e,r)=>{function i(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}var o=r(56307),a=r(52259).getScales,s=r(90183).parseString,l=r(61545),u=l.head,c=l.isNumber,m=o.TileLayer.extend({defaultWmtsParams:{service:"WMTS",request:"GetTile",version:"1.3.0",layer:"",style:"",tileMatrixSet:"",format:"image/jpeg"},initialize:function(t,e,r){this._url=t[0],this._urls=t,this._urlsIndex=0;var i=o.extend({},this.defaultWmtsParams),n=e.tileSize||this.options.tileSize;for(var a in e.detectRetina&&o.Browser.retina?i.width=i.height=2*n:i.width=i.height=n,e)this.options.hasOwnProperty(a)||"crs"===a||(i[a]=e[a]);this.wmtsParams=i,this.matrixIds=r.matrixIds&&this.getMatrix(r.matrixIds,r)||this.getDefaultMatrix(r),this.matrixSet=r.matrixSet&&r.matrixSet.TileMatrix||[],this.ignoreErrors=r.ignoreErrors||!1,o.setOptions(this,e)},getWMTSParams:function(t,e,r,i,n){var o=a()[r],l=u(t.map((function(e,r){if(r===t.length-1)return null;var i=parseFloat(e.ScaleDenominator),n=parseFloat(t[r+1].ScaleDenominator);return i>=o&&n<o?o-n>(i-n)/2?{id:r,data:e}:{id:r+1,data:t[r+1]}:null})).filter((function(t){return t}))),m=l&&c(l.id)&&l.id+""||0===t.length&&r||null;if(!e[m])return null;var p=e[m].identifier,y=l.data&&l.data.TopLeftCorner&&s(l.data.TopLeftCorner)||e[m].topLeftCorner,f=y.lng||y.x,d=y.lat||y.y,h=Math.round((i.x-f)/n),g=-Math.round((i.y-d)/n),v=l.data&&l.data.MatrixWidth&&l.data.MatrixHeight&&{cols:{min:0,max:l.data.MatrixWidth-1},rows:{min:0,max:l.data.MatrixHeight-1}},S=e[m].ranges||v;return S&&!function(t,e,r){return!(t<r.cols.min||t>r.cols.max||e<r.rows.min||e>r.rows.max)}(h,g,S)?null:{ident:p,tilecol:h,tilerow:g}},getTileUrl:function(t){var e=this._map,r=e.options.crs,n=this.options.tileSize,a=t.multiplyBy(n);a.x+=1,a.y-=1;var s=a.add([n,n]),l=r.project(e.unproject(a,t.z)),u=r.project(e.unproject(s,t.z)).x-l.x,c=this.getWMTSParams(i(this.matrixSet),i(this.matrixIds),t.z,l,u);if(!c)return"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";this._urlsIndex++,this._urlsIndex===this._urls.length&&(this._urlsIndex=0);var m=o.Util.template(this._urls[this._urlsIndex],{s:this._getSubdomain(t),TileRow:c.tilerow,TileCol:c.tilecol,TileMatrixSet:this.options.tileMatrixSet,TileMatrix:c.ident,Style:this.options.style});return"RESTful"===this.options.requestEncoding?m:m+o.Util.getParamString(this.wmtsParams,m,!0)+"&tilematrix="+c.ident+"&tilerow="+c.tilerow+"&tilecol="+c.tilecol},getMatrix:function(t,e){return t.map((function(t){return{identifier:t.identifier,topLeftCorner:new o.LatLng(e.originY,e.originX),ranges:t.ranges||null}}))},getDefaultMatrix:function(t){for(var e=new Array(22),r=0;r<22;r++)e[r]={identifier:t.tileMatrixPrefix+r,topLeftCorner:new o.LatLng(t.originY,t.originX)};return e},onError:function(){return!this.ignoreErrors}});t.exports=m}}]);