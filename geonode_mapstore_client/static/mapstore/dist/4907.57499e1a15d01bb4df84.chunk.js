(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[4907],{58767:(t,e,n)=>{"use strict";n.d(e,{Eo:()=>O,z4:()=>w,N_:()=>F,_P:()=>G,Tl:()=>j,bh:()=>U,F7:()=>D});var o=n(23570),r=n.n(o),i=n(86638),l=n(33506),a=n(66287),c=n(61868),s=n(61545),u=n(55877),y=n.n(u),d=n(85447),f=n(27418),p=n.n(f);function g(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],o=!0,r=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(o=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{o||null==a.return||a.return()}finally{if(r)throw i}}return n}}(t,e)||function(t,e){if(t){if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){P(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function P(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b={},C={color:"#ffcc33",opacity:1,weight:3,fillColor:"#ffffff",fillOpacity:.2},S={iconGlyph:"comment",iconShape:"square",iconColor:"blue"},O={fontStyle:"normal",fontSize:"14",fontSizeUom:"px",fontFamily:"Arial",fontWeight:"normal",font:"14px Arial",textAlign:"center",color:"#000000",opacity:1,fillColor:"#000000",fillOpacity:1},A={color:"#ffcc33",opacity:1,weight:3,editing:{fill:1}},T={color:"#ffcc33",opacity:1,weight:3,fillColor:"#ffffff",fillOpacity:.2,editing:{fill:1}},w={Text:O,Point:S,Circle:C,MultiPoint:S,LineString:A,MultiLineString:A,Polygon:T,MultiPolygon:T},x="ms2-annotations",F=function(){return[m(m({},w.Point),{},{highlight:!0,iconAnchor:[.5,.5],type:"Point",title:"StartPoint Style",geometry:"startPoint",filtering:!1,id:r()()}),m(m({},w.Point),{},{highlight:!0,iconAnchor:[.5,.5],type:"Point",title:"EndPoint Style",geometry:"endPoint",filtering:!1,id:r()()})]},k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return-1!==t.indexOf("rgba")?"rgb".concat(t.slice(t.indexOf("("),t.lastIndexOf(",")),")"):t},L=function(t){return("start"===t?"lm":"end"===t&&"rm")||"cm"},N=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.type,n=void 0===e?"Point":e,o=t.features,r=void 0===o?[]:o;return"FeatureCollection"===n?r.reduce((function(t,e){return t[e.geometry.type]=w[e.geometry.type],t}),{type:"FeatureCollection"}):m({},w[n])},M=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return m({title:"annotations.defaulttitle"!==(0,i.S$)(e,"annotations.defaulttitle")?(0,i.S$)(e,"annotations.defaulttitle"):"Default title",id:r()()},t)},E=function(t){return(0,s.isString)(t)&&t||(0,s.isArray)(t)&&t.join(" ")},I=function(t){return t.color&&t.opacity&&t.weight},_=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=e&&e[t]?e[t]:e,r=o,i=r.dashArray?E(r.dashArray):"solid";switch(t){case"MultiPolygon":case"Polygon":case"Circle":return{strokeColor:k(r.color),strokeOpacity:r.opacity,strokeWidth:r.weight,fillColor:k(r.fillColor),fillOpacity:r.fillOpacity,strokeDashstyle:i};case"LineString":case"MultiLineString":return{strokeColor:k(r.color),strokeOpacity:r.opacity,strokeWidth:r.weight,strokeDashstyle:i};case"Text":var c=I(r)?{labelOutlineColor:k(r.color),labelOutlineOpacity:r.opacity,labelOutlineWidth:r.weight}:{};return m({fontStyle:r.fontStyle,fontSize:r.fontSize,fontFamily:r.fontFamily,fontWeight:r.fontWeight,labelAlign:L(r.textAlign),fontColor:k(r.fillColor),fontOpacity:r.fillOpacity,label:n,stroke:!0,strokeColor:k(r.color),strokeOpacity:r.opacity,strokeWidth:r.weight,strokeDashstyle:i},c);case"Point":case"MultiPoint":var u=r.symbolUrl&&(0,a.fetchStyle)((0,a.hashAndStringify)(r),"base64")||l.Z.extraMarkers.markerToDataUrl(r),y=-18,d=-46;return r.iconAnchor&&(0,s.isArray)(r.iconAnchor)&&r.size&&(y="pixels"===r.anchorXUnits?-1*r.iconAnchor[0]:-1*r.size*r.iconAnchor[0],d="pixels"===r.anchorYUnits?-1*r.iconAnchor[1]:-1*r.size*r.iconAnchor[1]),u?{graphicWidth:r.size||36,graphicHeight:r.size||46,externalGraphic:u,graphicXOffset:y,graphicYOffset:d,display:!1===r.filtering&&"none"}:{fillColor:"#0000AE",fillOpacity:.5,strokeColor:"#0000FF",pointRadius:10,strokeOpacity:1,strokeWidth:1,display:!1===r.filtering&&"none"};default:return{fillColor:"#FF0000",fillOpacity:0,strokeColor:"#FF0000",pointRadius:5,strokeOpacity:1,strokeDashstyle:i,strokeWidth:1}}},G=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.reduce((function(t,e){return"FeatureCollection"===e.type?t.concat(e.features.map((function(t){return(0,s.castArray)(t.style||e.style||{}).filter((function(t){return!!(0,s.isNil)(t.filtering)||t.filtering})).map((function(e){return b.fromAnnotationToGeoJson(m(m({},t),{},{style:e}))}))})).reduce((function(t,e){return t.concat(e)}),[])):e.geometry&&"GeometryCollection"===e.geometry.type?t.concat(b.flattenGeometryCollection(e)):t.concat({type:"Feature",geometry:e.geometry,properties:m(m({},e.properties),{},{ms_style:_(e.geometry.type,e.style)})})}),[])},j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.lat,n=t.lon;return!isNaN(parseFloat(e))&&!isNaN(parseFloat(n))},U=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[t.lon,t.lat]},D=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[[[]]],e=t[0].filter(b.validateCoordsArray);return e.length>3&&(0,s.head)(e)[0]===(0,s.last)(e)[0]&&(0,s.head)(e)[1]===(0,s.last)(e)[1]};b={ANNOTATION_TYPE:x,convertGeoJSONToInternalModel:function(t){var e=t.type,n=void 0===e?"Point":e,o=t.geometries,r=void 0===o?[]:o,i=t.features,l=void 0===i?[]:i,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];switch(n){case"Point":case"MultiPoint":return{type:1===a.length?"Text":n};case"Polygon":return{type:1===c.length?"Circle":n};case"GeometryCollection":var s=r.filter((function(t){return"Point"===t.type||"MultiPoint"===t.type})),u=r.filter((function(t){return"Polygon"===t.type})),y=0,d=0;return{type:"GeometryCollection",geometries:r.map((function(t){if("Point"===t.type||"MultiPoint"===t.type){if(s.length===a.length)return{type:"Text"};if(0===a.length)return{type:t.type};if(0===y)return y++,{type:"Text"}}if("Polygon"===t.type){if(u.length===c.length)return{type:"Circle"};if(0===c.length)return{type:t.type};if(0===d)return d++,{type:"Circle"}}return{type:t.type}}))};case"FeatureCollection":var f=l.map((function(t){return t.properties&&t.properties.isCircle?{type:"Circle"}:t.properties&&t.properties.isText?{type:"Text"}:{type:t.geometry.type}}));return{type:"FeatureCollection",features:f};default:return{type:n}}},getAvailableStyler:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.type,n=void 0===e?"Point":e,o=t.geometries,r=void 0===o?[]:o,i=t.features,l=void 0===i?[]:i;switch(n){case"Point":case"MultiPoint":case"Symbol":return[b.getRelativeStyler(n)];case"LineString":case"MultiLineString":return[b.getRelativeStyler(n)];case"Polygon":case"MultiPolygon":case"Text":case"Circle":return[b.getRelativeStyler(n)];case"GeometryCollection":return r.reduce((function(t,e){return-1!==t.indexOf(b.getRelativeStyler(e.type))?t:t.concat(b.getAvailableStyler(e))}),[]);case"FeatureCollection":return l.reduce((function(t,e){return-1!==t.indexOf(b.getRelativeStyler(e.type))?t:t.concat(b.getAvailableStyler(e))}),[]);default:return[]}},getRelativeStyler:function(t){switch(t){case"Point":case"MultiPoint":return"marker";case"Symbol":return"symbol";case"Circle":return"circle";case"LineString":case"MultiLineString":return"lineString";case"Polygon":case"MultiPolygon":return"polygon";case"Text":return"text";default:return""}},createFont:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.fontSize,n=void 0===e?"14":e,o=t.fontSizeUom,r=void 0===o?"px":o,i=t.fontFamily,l=void 0===i?"Arial":i,a=t.fontStyle,c=void 0===a?"normal":a,s=t.fontWeight,u=void 0===s?"normal":s;return"".concat(c," ").concat(u," ").concat(n).concat(r," ").concat(l)},DEFAULT_ANNOTATIONS_STYLES:w,STYLE_CIRCLE:C,STYLE_POINT_MARKER:S,STYLE_POINT_SYMBOL:{iconAnchor:[.5,.5],anchorXUnits:"fraction",anchorYUnits:"fraction",color:"#000000",fillColor:"#000000",opacity:1,size:64,fillOpacity:1},STYLE_TEXT:O,STYLE_LINE:A,STYLE_POLYGON:T,getGeometryType:function(t){var e,n,o;return null!=t&&null!==(e=t.properties)&&void 0!==e&&e.isCircle?"Circle":null!=t&&null!==(n=t.properties)&&void 0!==n&&n.isText?"Text":null==t||null===(o=t.geometry)||void 0===o?void 0:o.type},getGeometryGlyphInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Point",e={Point:{glyph:"point",label:"Point"},MultiPoint:{glyph:"point",label:"Point"},LineString:{glyph:"polyline",label:"Line"},MultiLineString:{glyph:"polyline",label:"Line"},Polygon:{glyph:"polygon",label:"Polygon"},MultiPolygon:{glyph:"polygon",label:"Polygon"},Text:{glyph:"font",label:"Text"},Circle:{glyph:"1-circle",label:"Circle"}};return e[t]},normalizeAnnotation:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n="FeatureCollection"===t.type?m({},t):{type:"Feature",geometry:t},o=N(n),r=M(n.properties,e);return m({style:o,properties:r},n)},removeDuplicate:function(t){return(0,s.values)(t.reduce((function(t,e){return m(m({},t),{},P({},e.properties.id,e))}),{}))},circlesToMultiPolygon:function(t,e){var n=t.geometries,o=void 0===n?[]:n,i=e.circles,l=void 0===i?[]:i,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:C,c=l.reduce((function(t,e){return t.concat([o[e].coordinates])}),[]);return{type:"Feature",geometry:{type:"MultiPolygon",coordinates:c},properties:{id:r()(),ms_style:_("Circle",a)}}},fromCircleToPolygon:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:C;return{type:"Feature",geometry:e.polygonGeom||t,properties:{id:e.id||r()(),ms_style:_("Circle",n)}}},fromTextToPoint:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:O;return{type:"Feature",geometry:t,properties:{id:e.id||r()(),ms_style:_("Text",n,e.valueText)}}},fromLineStringToGeodesicLineString:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:A;return{type:"Feature",geometry:t.geometryGeodesic,properties:{id:t.id||r()(),ms_style:_(t.geometryGeodesic.type,e)}}},textToPoint:function(t,e){var n=t.geometries,o=void 0===n?[]:n,i=e.textGeometriesIndexes,l=void 0===i?[]:i,a=e.textValues,c=void 0===a?[]:a,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:O;return l.map((function(t,e){return{type:"Feature",geometry:o[t],properties:{id:r()(),ms_style:_("Text",s,c[e])}}}))},flattenGeometryCollection:function(t){var e=t.geometry,n=t.properties,o=t.style,i=n.circles&&b.circlesToMultiPolygon(e,n,o.Circle)||[],l=n.textGeometriesIndexes&&b.textToPoint(e,n,o.Text)||[],a=(n.circles||[]).concat(n.textGeometriesIndexes||[]);return e.geometries.filter((function(t,e){return-1===a.indexOf(e)})).map((function(t){return{type:"Feature",geometry:t,properties:{id:r()(),ms_style:_(t.type,o[t.type])}}})).concat(i,l)},createGeometryFromGeomFunction:function(t){var e=a.geometryFunctions[t.style.geometry]&&a.geometryFunctions[t.style.geometry].type||t.geometry.type,n=t.geometry.coordinates||[];switch(t.style.geometry){case"startPoint":n=(0,s.head)(n);break;case"endPoint":n=(0,s.last)(n);break;case"centerPoint":n=(0,d.Z)(t).geometry.coordinates}return{type:e,coordinates:n}},fromAnnotationToGeoJson:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.geometry,n=t.properties,o=void 0===n?{}:n,i=t.style,l=void 0===i?{}:i,a=l.geometry?b.createGeometryFromGeomFunction({geometry:e,properties:o,style:l,type:"Feature"}):e;return o.isCircle&&"Polygon"===a.type?b.fromCircleToPolygon(a,o,l):o.isText?b.fromTextToPoint(a,o,l):"LineString"===a.type&&o.useGeodesicLines&&l.filtering?b.fromLineStringToGeodesicLineString(o,l):{type:"Feature",geometry:a,properties:{id:o.id||r()(),ms_style:_(a.type,l)}}},annotationsToPrint:G,formatCoordinates:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[[]];return t.map((function(t){return{lat:t&&t[1],lon:t&&t[0]}}))},getBaseCoord:function(t){switch(t){case"Polygon":case"LineString":case"MultiPoint":return[];default:return[[{lat:"",lon:""}]]}},getComponents:function(t){var e=t.type,n=t.coordinates;switch(e){case"Polygon":return b.isCompletePolygon(n)?b.formatCoordinates((0,s.slice)(n[0],0,n[0].length-1)):b.formatCoordinates(n[0]);case"LineString":case"MultiPoint":return b.formatCoordinates(n);default:return b.formatCoordinates([n])}},addIds:function(t){return t.map((function(t){return t.properties&&t.properties.id?t:(0,c.t8)("properties.id",y().v1(),t)}))},COMPONENTS_VALIDATION:{Point:{min:1,add:!1,remove:!1,validation:"validateCoordinates",notValid:"Add a valid coordinate to complete the Point"},MultiPoint:{min:2,add:!0,remove:!0,validation:"validateCoordinates",notValid:"Add 2 valid coordinates to complete the Polyline"},Polygon:{min:3,add:!0,remove:!0,validation:"validateCoordinates",notValid:"Add 3 valid coordinates to complete the Polygon"},LineString:{min:2,add:!0,remove:!0,validation:"validateCoordinates",notValid:"Add 2 valid coordinates to complete the Polyline"},Circle:{add:!1,remove:!1,validation:"validateCircle",notValid:"Add a valid coordinate and a radius (m) to complete the Circle"},Text:{add:!1,remove:!1,validation:"validateText",notValid:"Add a valid coordinate and a Text value"}},validateCoords:j,validateCoordsArray:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=g(t,2),n=e[0],o=e[1];return!isNaN(parseFloat(o))&&!isNaN(parseFloat(n))},validateCoord:function(t){return!isNaN(parseFloat(t))},coordToArray:U,validateCoordinates:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.components,n=void 0===e?[]:e,o=t.remove,r=void 0!==o&&o,i=t.type;if(n&&n.length){var l=n.filter(b.validateCoords);return r?l.length>b.COMPONENTS_VALIDATION[i].min&&l.length===n.length:l.length>=b.COMPONENTS_VALIDATION[i].min&&l.length===n.length}return!1},validateCircle:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.components,n=void 0===e?[]:e,o=t.properties,r=void 0===o?{radius:0}:o;if(n&&n.length){var i=(0,s.head)(n);return!isNaN(parseFloat(r.radius))&&b.validateCoords(i)}return!1},validateText:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.components,n=void 0===e?[]:e,o=t.properties,r=void 0===o?{valueText:""}:o;if(n&&n.length){var i=(0,s.head)(n);return r&&!!r.valueText&&b.validateCoords(i)}return!1},validateFeature:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.components,n=void 0===e?[[]]:e,o=t.type,r=t.remove,i=void 0!==r&&r,l=t.properties,a=void 0===l?{}:l;return!(0,s.isNil)(o)&&("Text"===o?b.validateText({components:n,properties:a}):"Circle"===o?b.validateCircle({components:n,properties:a}):b.validateCoordinates({components:n,remove:i,type:o}))},updateAllStyles:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.features&&t.features.length?m(m({},t),{},{features:t.features.map((function(t){return p()({},t,{style:(0,s.castArray)(t.style).map((function(t){return p()({},t,e)}))})}))}):t},getStartEndPointsForLinestring:F,DEFAULT_SHAPE:"triangle",DEFAULT_PATH:"product/assets/symbols/",checkSymbolsError:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"loading_symbols_path";return t.length&&-1!==(0,s.findIndex)(t,(function(t){return t===e}))},isAMissingSymbol:function(t){return t.symbolUrlCustomized===n(70898)},isCompletePolygon:D,getDashArrayFromStyle:E,isAnnotation:function(t){return(null==t?void 0:t.type)===x||"Annotations"===(null==t?void 0:t.name)}}},66287:(t,e,n)=>{"use strict";n.r(e),n.d(e,{isAttrPresent:()=>v,isStrokeStyle:()=>h,isFillStyle:()=>m,isTextStyle:()=>P,isCircleStyle:()=>b,isMarkerStyle:()=>C,isSymbolStyle:()=>S,getStylerTitle:()=>O,geometryFunctions:()=>A,getGeometryFunction:()=>T,registerGeometryFunctions:()=>w,addOpacityToColor:()=>x,hashCode:()=>F,registerStyle:()=>L,setSymbolsStyles:()=>N,fetchStyle:()=>M,getSymbolsStyles:()=>E,hashAndStringify:()=>I,domNodeToString:()=>_,createSvgUrl:()=>G,createStylesAsync:()=>j,getStyleParser:()=>U});var o=n(61545),r=n(61868),i=n(43143),l=n(9669),a=n.n(l),c=n(42757),s=n.n(c),u=n(50436),y=n.n(u);function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var g={sld:new(s()),css:new(y())},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return e.filter((function(e){return!(0,o.isNil)(t[e])})).length>0},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["color","opacity","dashArray","dashOffset","lineCap","lineJoin","weight"];return v(t,e)},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["fillColor","fillOpacity"];return v(t,e)},P=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["label","font","fontFamily","fontSize","fontStyle","fontWeight","textAlign","textRotationDeg"];return v(t,e)},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["radius"];return v(t,e)},C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["iconGlyph","iconShape","iconUrl"];return v(t,e)},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["symbolUrl"];return v(t,e)},O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return C(t)?"Marker":S(t)?"Symbol":P(t)?"Text":b(t)||"Circle Style"===t.title?"Circle":m(t)?"Polygon":h(t)?"Polyline":""},A={centerPoint:{type:"Point",func:function(){}},lineToArc:{type:"LineString",func:function(){}},startPoint:{type:"Point",func:function(){}},endPoint:{type:"Point",func:function(){}}},T=function(t,e){return A[t]&&A[t][e]},w=function(t,e,n){if(!(t&&e&&n))throw new Error("specify all the params: functionName, func, type");A[t]={func:e,type:n}},x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFCC33",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.2;return(0,r.t8)("a",e,t)},F=function(t){var e,n=0;if(0===t.length)return n;for(e=0;e<t.length;e++)n=(n<<5)-n+t.charCodeAt(e),n|=0;return n},k={},L=function(t,e){if(!t||!e)throw new Error("specify all the params: sha, style");k[t]=e},N=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};k=t},M=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"style";return k[t]&&k[t][e]},E=function(){return k},I=function(t){if(t)return F(JSON.stringify(t));throw new Error("hashAndStringify: specify mandatory params: style")},_=function(t){var e=document.createElement("div");return e.appendChild(t),e.innerHTML},G=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return S(t)&&t.symbolUrl?a().get(e,{"Content-Type":"image/svg+xml;charset=utf-8"}).then((function(e){var n=window.URL||window.webkitURL||window,r=(new DOMParser).parseFromString(e.data,"image/svg+xml").firstElementChild;r.setAttribute("fill",t.fillColor||"#FFCC33"),r.setAttribute("fill-opacity",(0,o.isNil)(t.fillOpacity)?.2:t.fillOpacity),r.setAttribute("stroke",(0,i.qq)(t.color||"#FFCC33",(0,o.isNil)(t.opacity)?1:t.opacity)),r.setAttribute("stroke-opacity",(0,o.isNil)(t.opacity)?1:t.opacity),r.setAttribute("stroke-width",t.weight||1),r.setAttribute("width",t.size||32),r.setAttribute("height",t.size||32),r.setAttribute("stroke-dasharray",t.dashArray||"none");var l=new Blob([_(r)],{type:"image/svg+xml;charset=utf-8"}),a=n.createObjectURL(l),c=document.createElement("canvas");c.width=t.size,c.height=t.size;var s=c.getContext("2d"),u=new Image;u.src=a;var y="",d=I(t);return u.onload=function(){try{s.drawImage(u,c.width/2-u.width/2,c.height/2-u.height/2),y=c.toDataURL("image/png"),c=null,L(d,{style:f(f({},t),{},{symbolUrlCustomized:a}),base64:y})}catch(t){return}},L(d,{style:f(f({},t),{},{symbolUrlCustomized:a}),svg:r,base64:y}),a})).catch((function(){return n(70898)})):new Promise((function(t){t(null)}))},j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.map((function(t){return S(t)&&!M(I(t))?G(t,t.symbolUrl||t.symbolUrlCustomized).then((function(e){return e?f(f({},t),{},{symbolUrlCustomized:e}):M(I(t))})).catch((function(){return f(f({},t),{},{symbolUrlCustomized:n(70898)})})):new Promise((function(e){e(S(t)?M(I(t)):t)}))}))},U=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"sld";return g[t]}},38946:(t,e,n)=>{"use strict";n.d(e,{y7:()=>P,oU:()=>b,hH:()=>C});var o=n(73800),r=n(45801),i=n(86306),l=n(18369),a=n(78516),c=n(52),s=n(48041),u=n(78653),y=n(97950),d=n(52043),f=n(44538),p=n(52329),g=n(25642),v=n(759),h=n(69669),m=n(40353),P=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.type,o=e.coordinates,r=e.radius,i=e.center;switch(n){case"Point":t=new d.Z(o||[]);break;case"LineString":t=new f.Z(o||[]);break;case"MultiPoint":t=new p.Z(o||[]);break;case"MultiLineString":t=new g.Z(o||[]);break;case"MultiPolygon":t=new v.Z(o||[]);break;default:t=r&&i?(0,m.Bb)(new h.Z([i.x,i.y],r),100):new m.ZP(o||[])}return t},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t&&t.geometry&&"Polygon"===t.geometry.type},C={dragPan:{options:{kinetic:!1},Instance:o.Z},keyboardPan:{options:{kinetic:!1},Instance:r.Z},mouseWheelZoom:{options:{duration:0},Instance:i.Z},doubleClickZoom:{options:{duration:0},Instance:l.Z},shiftDragZoom:{options:{duration:0},Instance:a.Z},keyboardZoom:{options:{},Instance:c.Z},pinchZoom:{options:{duration:0},Instance:s.Z},pinchRotate:{options:{},Instance:u.Z},altShiftDragRotate:{options:{},Instance:y.Z}}}}]);