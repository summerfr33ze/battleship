/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Spacec5.ttf */ \"./src/Spacec5.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n    font-family: 'space-cruiser';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n\\n}\\n\\nhtml, body {\\n    height: 100%;\\n\\n}\\n\\nbody {\\n    display:flex;\\n    flex-direction:column;\\n    align-items: center;\\n    background-color: navy;\\n}\\n\\n\\n.heading-container {\\n    display: flex;\\n    justify-content: center;\\n}\\n\\nh1 {\\n    font-size: 3rem;\\n    font-family: 'space-cruiser';\\n    background-color: cyan;\\n    border-radius: 10px;\\n    padding: 10px;\\n}\\n\\n.player-text {\\n    padding: 5px 15px 5px 15px;\\n    font-size: 2rem;\\n    background-color: rgb(247, 46, 46);\\n    border-radius: 15px;\\n    font-weight: bold;\\n    border: 2px solid black;\\n    font-family: 'space-cruiser';\\n    font-weight: lighter;\\n    \\n}\\n\\n.container-container {\\n    display:flex;\\n    justify-content: center;\\n    gap: 10vh;\\n}\\n\\n.container {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    font-size: 2rem;\\n    color: black;\\n   \\n}\\n\\n\\n.grid-container {\\n    display: grid;\\n    box-sizing: border-box;\\n    border: 1px solid black;\\n    border-radius: 10px;\\n    grid-template-rows: repeat(10, 1fr);\\n    grid-template-columns: repeat(10, 1fr);\\n    height: 40vh;\\n    width: 40vh;\\n    background-color: white;\\n    margin-top: 5vh; \\n\\n}\\n\\n.player-cell, .comp-cell {\\n    border: 1px solid black;\\n    box-sizing: border-box;\\n    height: 4vh;\\n    width: 4vh;\\n}\\n\\n.display-winner {\\n    font-size: 2rem;\\n    width: 300px;\\n    height: 3rem;\\n    background-color: black;\\n    color: green;\\n    font-family: 'space-cruiser';\\n    margin-top: 5vh;\\n    border-radius: 5px;\\n}\\n\\n.change-orientation {\\n    font-size: 1.5rem;\\n    border: none;\\n    border-radius: 10px;\\n    background-color: cyan;\\n    margin-top: 1vh;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\n\n\n\nclass Gameboard {\n    constructor(){\n        this.grid = new Array(10)\n        for (let i = 0; i < 10; i++){\n            this.grid[i] = new Array(10)\n            for (let j=0; j <  10; j++){\n                this.grid[i][j] = \"_\"\n            }\n\n        }\n        this.shipArray = []\n    }\n        placeShip(ship){\n            let a = ship.position[0][0]\n            let b = ship.position[0][1]\n            let x = ship.position[1][0]\n            let y = ship.position[1][1]\n\n            \n           \n\n        for(let i = 1; i <= ship.length; i++){\n            if (a === x ){\n            this.grid[a][b] = \"x\"\n            b++\n            }\n\n            else if (b === y){\n            this.grid[a][b] = \"x\"\n            a++\n            }\n\n\n            else return \n        }\n        return this.grid[a][b-1]\n    }\n        \n\n    receiveAttack(x,y){\n        \n        if (this.grid[x][y] !== undefined){\n\n        if (this === _index_js__WEBPACK_IMPORTED_MODULE_0__.computerGameboard)\n            _index_js__WEBPACK_IMPORTED_MODULE_0__.computerShipArray.forEach(ship => {\n                const a = ship.position[0][0]\n                const b = ship.position[0][1]\n                const c = ship.position[1][0]\n                const d = ship.position[1][1]\n                if (a === c){\n                    if (x === a && y >= b && y <= d){\n                        ship.hit()\n                        ship.sink()\n                    \n                    }\n                    else return\n                }\n                else if (b === d){\n                    if (y === b && x >= a && x <= c){\n                        ship.hit()\n                        ship.sink()\n                        \n                    }\n                    else return\n                }\n               \n                \n            })\n            \n            this.grid[x][y] = \"o\"\n        }\n\n        else if (this === _index_js__WEBPACK_IMPORTED_MODULE_0__.humanGameboard) {\n            playerShipArray.forEach(ship => {\n                const a = ship.position[0][0]\n                const b = ship.position[0][1]\n                const c = ship.position[1][0]\n                const d = ship.position[1][1]\n                if (a === c){\n                    if (x === a && y >= b && y <= d){\n                        ship.hit()\n                        ship.sink()\n                    \n                    }\n                    else return\n                }\n                else if (b === d){\n                    if (y === b && x >= a && x <= c){\n                        ship.hit()\n                        ship.sink()\n                        \n                    }\n                    else return\n                }\n               \n                \n            })\n            \n            this.grid[x][y] = \"o\"\n        }\n        \n\n        else return false\n        \n\n    }\n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n\n//# sourceURL=webpack:///./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"computerGameboard\": () => (/* binding */ computerGameboard),\n/* harmony export */   \"computerShipArray\": () => (/* binding */ computerShipArray),\n/* harmony export */   \"humanGameboard\": () => (/* binding */ humanGameboard),\n/* harmony export */   \"placesPlayerShip\": () => (/* binding */ placesPlayerShip)\n/* harmony export */ });\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n \n\n\n// dom methods to refer to html elements like the grids\nconst playerGrid = document.querySelector(\"#player\")\nconst computerGrid = document.querySelector(\"#computer\")\nconst displayWinner = document.querySelector(\".display-winner\")\nconst changeOrientation = document.querySelector(\".change-orientation\")\n\n//ship objects created with imported ship class\n\nlet playerCarrier = new _ship_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](5)\nlet playerBattleship = new _ship_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](4)\nlet playerCruiser = new _ship_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](3)\nlet playerSubmarine = new _ship_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](3)\nlet playerDestroyer = new _ship_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](2)\nlet computerCarrier = new _ship_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](5)\nlet computerBattleship = new _ship_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](4)\nlet computerCruiser = new _ship_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](3)\nlet computerSubmarine = new _ship_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](3)\nlet computerDestroyer = new _ship_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](2)\n\n//arrays to store ships in and various variables to store current state of game\n\nlet playerShipArray = [playerCarrier,playerBattleship,playerCruiser,playerSubmarine,playerDestroyer]\nlet computerShipArray = [computerCarrier,computerBattleship,computerCruiser,computerSubmarine,computerDestroyer]\nlet numberOfShips = 0\nlet currentPlayerShip = playerShipArray[numberOfShips]\nlet currentComputerShip\nlet currentPlayerIndex\nlet currentComputerIndex\nlet yShipRange \nlet humanGameboard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\nlet computerGameboard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\nlet isHorizontal = true\n\n\n\n// make the grid interface and handle drag and drop behavior\n\nfunction createGrids(){\n    for (let i=0; i < 100; i++){\n        const compCell = document.createElement(\"div\");\n        const playerCell = document.createElement(\"div\")\n        playerGrid.appendChild(playerCell)\n        computerGrid.appendChild(compCell)\n        const xUpperBound = i + 10 - (i % 10) - 1\n        const yUpperBound = 100 + (i % 10)\n        compCell.className = \"comp-cell\";\n        playerCell.className = \"player-cell\";\n        compCell.dataset.index = i\n        playerCell.dataset.index = i\n        playerCell.addEventListener(\"mouseover\", () => {\n            const cells = document.querySelectorAll(\".player-cell\")\n            currentPlayerIndex = i\n            yShipRange = (currentPlayerShip.length - 1) * 10\n            if(isHorizontal === true){\n                cells.forEach(cell => {\n                    const currentCell = cell.dataset.index\n                    if (currentPlayerShip && currentCell >= i && currentCell < i + currentPlayerShip.length){\n                        if(i + currentPlayerShip.length - 1  <= xUpperBound){\n                            cell.style.backgroundColor = \"black\"\n                        }\n                        \n                    }\n                    if (currentPlayerShip && !(i + currentPlayerShip.length - 1  <= xUpperBound)){\n                        if (currentCell > xUpperBound - currentPlayerShip.length && currentCell <= xUpperBound){\n                            cell.style.backgroundColor = \"black\"\n    \n                        }\n                }\n    \n                })\n                \n            }\n            else if(isHorizontal === false){\n                cells.forEach(cell => {\n                    const currentCell = cell.dataset.index\n                    if (currentPlayerShip && currentCell % 10 === i % 10 && currentCell >= i && currentCell < i + (currentPlayerShip.length * 10 )){\n                        if(currentPlayerIndex + yShipRange < yUpperBound)\n                        cell.style.backgroundColor = \"black\"\n                    }\n                    if (currentPlayerShip && !(currentPlayerIndex + yShipRange < yUpperBound)){\n                        if(currentCell % 10 === i % 10 && currentCell >= yUpperBound - yShipRange - 10)\n                            cell.style.backgroundColor = \"black\";\n                        }\n                    })\n                }\n            })\n\n\n        \n        playerCell.addEventListener(\"mouseout\", handleMouseOut)\n\n       playerCell.addEventListener(\"click\", () => {\n            let otherShip = false\n            const cells = document.querySelectorAll(\".player-cell\")\n            currentPlayerIndex = i\n            \n            \n            if (isHorizontal === true){\n                if(i > xUpperBound - currentPlayerShip.length){\n                    i = xUpperBound - currentPlayerShip.length + 1\n                 }\n    \n                cells.forEach(cell => {\n                    const currentCell = cell.dataset.index\n                    if (currentCell >= i && currentCell < i + currentPlayerShip.length && cell.dataset.isShip){\n                        otherShip = true\n                    }\n                })\n    \n                if (otherShip === false) {\n\n                placesPlayerShip()\n                cells.forEach(cell => {\n                    const currentCell = cell.dataset.index\n                    if(i > xUpperBound - currentPlayerShip.length){\n                        i = xUpperBound - currentPlayerShip.length + 1\n                     }\n                    if (currentCell >= i && currentCell < i + currentPlayerShip.length){\n                        cell.dataset.isShip = true\n                    }\n                })\n            }\n        }\n            if (isHorizontal === false){\n                yShipRange = (currentPlayerShip.length - 1) * 10\n\n                if(i >= yUpperBound - yShipRange) {\n                    i = yUpperBound - yShipRange - 10\n                }\n\n                cells.forEach(cell => {\n                    const currentCell = cell.dataset.index\n                    if (currentCell % 10 === i % 10 && currentCell >= i && currentCell < i + (currentPlayerShip.length * 10 ) && cell.dataset.isShip){\n                        otherShip = true\n                        console.log(otherShip)\n                    }\n                })\n\n                if (otherShip === false){\n                    \n                    placesPlayerShip()\n                    cells.forEach(cell => {\n                        const currentCell = cell.dataset.index\n                        if(currentCell % 10 === i % 10 && currentCell >= i && currentCell < i + (currentPlayerShip.length * 10 )){\n                        cell.dataset.isShip = true\n                    }\n                    })\n                }\n            }\n        \n\n\n\n            if(currentPlayerShip.length === 2 && otherShip === false){\n                currentPlayerShip = false                        \n            }\n\n            if(numberOfShips < 4 && otherShip === false){\n                numberOfShips += 1\n                }\n            \n            if(currentPlayerShip){\n                currentPlayerShip = playerShipArray[numberOfShips]\n                \n            }\n        \n    \n    })\n\n\n    //handle player moves (computer moves right after player)\n\n    compCell.addEventListener(\"click\", () => {\n      \n        if(compCell.dataset.isShip){\n            compCell.style.backgroundColor = \"red\"\n        }\n\n        else {compCell.style.backgroundColor = \"black\"}\n\n        let x = compCell.dataset.index % 10\n        let y = Math.floor(compCell.dataset.index / 10)\n        computerGameboard.receiveAttack(x,y)\n        \n        endGame()\n        computerMove()\n    })\n}}\n        \n    \n\n\n\nfunction randomizeComputerShips(){\n    for(let i=0;i < computerShipArray.length; i++){\n        currentComputerShip = computerShipArray[i]\n        let shipPosition = positionShip(currentComputerShip)\n        placesComputerShip(shipPosition)\n        const cells = document.querySelectorAll(\".comp-cell\")\n        cells.forEach(cell => {\n            if (cell.dataset.index >= shipPosition && cell.dataset.index < shipPosition + currentComputerShip.length){\n                cell.dataset.isShip = true\n            }\n        })\n    }\n}\n\n// computer keeps choosing random numbers until it can find  a spot where it can place a ship that doesn't overlap other ships or the edge\n\nfunction positionShip (currentComputerShip) {\n    currentComputerIndex = Math.floor(Math.random() * 100)\n    let cellsAreEmpty = true\n    const cells = document.querySelectorAll(\".comp-cell\")\n    cells.forEach(cell => {\n        if (cell.dataset.index >= currentComputerIndex && cell.dataset.index <= currentComputerIndex + currentComputerShip.length && cell.dataset.isShip){\n            cellsAreEmpty = false\n        }\n    })\n\n    if (currentComputerIndex + currentComputerShip.length < (currentComputerIndex + 10) - (currentComputerIndex % 10) && cellsAreEmpty) {\n        return currentComputerIndex\n    }\n    return positionShip(currentComputerShip)\n}\n\n\n\nfunction handleMouseOut() {\n    const cells = document.querySelectorAll(\".player-cell\")\n            cells.forEach(cell => {\n                if (!cell.dataset.isShip){\n                    cell.style.backgroundColor = \"white\"\n                }\n            })\n}\n\nfunction placesPlayerShip(){\n\n\n    if(isHorizontal === true){\n        let a = currentPlayerIndex % 10\n        let b = Math.floor(currentPlayerIndex/10)\n        let x = a + currentPlayerShip.length -1\n        let y = b\n        currentPlayerShip.position = [[a,b],[x,y]]\n    }\n    if(isHorizontal === false){\n        let a = currentPlayerIndex % 10\n        let b = Math.floor(currentPlayerIndex/10)\n        let x = a \n        let y = b + currentPlayerShip.length - 1\n        currentPlayerShip.position = [[a,b],[x,y]]\n    }\n\n    \n    humanGameboard.placeShip(currentPlayerShip)\n\n}\n\nfunction placesComputerShip(shipPosition){\n    let a = shipPosition % 10\n    let b = Math.floor(shipPosition/10)\n    let x = a + currentComputerShip.length\n    let y = b\n\n    currentComputerShip.position = [[a,b],[x,y]]\n    computerGameboard.placeShip(currentComputerShip)\n}\n\nfunction computerMove(){\n    let target = Math.floor(Math.random() * 100)\n    \n    const cells = document.querySelectorAll(\".player-cell\")\n    cells.forEach(cell => {\n        \n        if (cell.dataset.index == target){\n            if (cell.dataset.isShip){\n                cell.style.backgroundColor = \"red\"\n            } \n\n            else {cell.style.backgroundColor = \"gray\"}\n        }\n\n        else return\n    })\n\n    let x = target % 10\n    let y = Math.floor(target / 10)\n    humanGameboard.receiveAttack(x,y)\n    endGame()\n}\n\nfunction endGame(){\n\n    let playerCount = 0\n    let computerCount = 0\n\nplayerShipArray.forEach(ship => {\n    if(ship.isSunk){\n        computerCount++\n    }\n    else return\n})\n\ncomputerShipArray.forEach(ship => {\n    if(ship.isSunk){\n        playerCount++\n    }\n    else return\n})\n\nif (playerCount == 5){\n    console.log(\"winner\")\n    displayWinner.textContent = \"Player Wins\"\n\n}\n\nelse if (computerCount == 5){\n    console.log(\"winner\")\n    displayWinner.textContent = \"Computer Wins\"\n}\n\n\n}\n\nchangeOrientation.addEventListener(\"click\", () => {\n\n    if (isHorizontal === true){\n        isHorizontal = false\n    }\n    else if (isHorizontal === false){\n        isHorizontal = true\n    }\n\n})\n\n\n\ncreateGrids()\nrandomizeComputerShips()\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nclass Ship {\n    constructor(length,position){\n        this.length = length\n        this.position = position\n        this.hits = 0\n        this.isSunk = false\n        \n    }\n\n    hit(){\n        this.hits += 1\n    }\n    \n    sink(){\n        if (this.hits == this.length){\n            this.isSunk = true\n        }\n    }\n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/Spacec5.ttf":
/*!*************************!*\
  !*** ./src/Spacec5.ttf ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cbdef0514278f8240835.ttf\";\n\n//# sourceURL=webpack:///./src/Spacec5.ttf?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;