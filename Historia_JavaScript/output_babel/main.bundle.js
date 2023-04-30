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

/***/ "./src/end/end.js":
/*!************************!*\
  !*** ./src/end/end.js ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.endPage = void 0;\n\nvar endPage = function endPage() {\n  var container = document.getElementById(\"body-container\");\n  document.body.innerHTML = \"\";\n  var text = document.createElement(\"p\");\n  text.innerHTML = \"Decides no entrar a la propiedad. Parece que no eres lo suficientemente valiente o curioso para esta aventura.....\";\n  document.body.appendChild(text);\n};\n\nexports.endPage = endPage;\n\n//# sourceURL=webpack://lab7/./src/end/end.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar _page1JS = __webpack_require__(/*! ../src/page1/page1JS.js */ \"./src/page1/page1JS.js\");\n\nvar _page1Links = __webpack_require__(/*! ../src/page1/page1Links.js */ \"./src/page1/page1Links.js\");\n\n__webpack_require__(/*! ../assets/bg.jpg */ \"./assets/bg.jpg\");\n\n__webpack_require__(/*! ../assets/bg1.jpg */ \"./assets/bg1.jpg\");\n\n__webpack_require__(/*! ../assets/Font.ttf */ \"./assets/Font.ttf\");\n\n__webpack_require__(/*! ./css/backgrounds.css */ \"./src/css/backgrounds.css\");\n\n__webpack_require__(/*! ./css/progressBar.css */ \"./src/css/progressBar.css\");\n\n__webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n\n__webpack_require__(/*! ./css/text.css */ \"./src/css/text.css\");\n\n//Se importan todos los elementos al bundle\n//Creacion del body\nvar container = document.getElementById(\"body-container\");\ndocument.body.innerHTML = \"\"; //Creacion de variables para los textos\n\nvar titulo = document.createElement(\"h1\");\nvar instrucciones = document.createElement(\"p\");\nvar opcionInicial = document.createElement(\"b\");\nvar bar = document.createElement(\"progress\");\nvar text = document.createTextNode(\"Iniciar historia interactiva\");\nvar link = document.createElement(\"a\"); //link.href = \"../src/page1/page1.html\";\n\nlink.addEventListener(\"click\", page1);\nlink.appendChild(text);\nopcionInicial.appendChild(link);\nvar hr = document.createElement(\"hr\");\nvar hr1 = document.createElement(\"hr\"); //var opcionInicial = document.getElementById(\"startOption\");\n//var text = document.createTextNode(\"Iniciar historia interactiva\");\n//var link = document.createElement(\"a\");\n//link.href = \"page1.html\"\n//link.appendChild(text);\n\ntitulo.innerHTML = \"Laboratorio No.7\";\ninstrucciones.innerHTML = \"Crear una historia interactiva, esta vez implementando lo aprendido en webpack y babel\"; //opcionInicial.appendChild(link);\n\ndocument.body.appendChild(titulo);\ndocument.body.appendChild(instrucciones);\ndocument.body.appendChild(hr1);\ndocument.body.appendChild(opcionInicial);\ndocument.body.appendChild(hr);\ndocument.body.appendChild(bar);\n\nfunction page1() {\n  //alert(\"page1\");\n  (0, _page1JS.page1JS)();\n  (0, _page1Links.page1Links)();\n}\n\n//# sourceURL=webpack://lab7/./src/index.js?");

/***/ }),

/***/ "./src/page1/page1JS.js":
/*!******************************!*\
  !*** ./src/page1/page1JS.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.page1JS = void 0;\n\nvar _page1Links = __webpack_require__(/*! ../page1/page1Links.js */ \"./src/page1/page1Links.js\");\n\n(0, _page1Links.page1Links)();\n\nvar page1JS = function page1JS() {\n  var container = document.getElementById(\"body-container\");\n  document.body.innerHTML = \"\";\n  var start = document.createElement(\"p\");\n  start.innerHTML = \"Te encuentras confundido y desorientado, tu visión poco a poco se va aclarando y notas que te encuentras en un lugar extraño, parece lleno de casa exactamente iguales, pero notas algo, una  de las casas se encuentra notablemente deteriorada. ¿Decides entrar o huir?\";\n  document.body.appendChild(start);\n};\n\nexports.page1JS = page1JS;\n\n//# sourceURL=webpack://lab7/./src/page1/page1JS.js?");

/***/ }),

/***/ "./src/page1/page1Links.js":
/*!*********************************!*\
  !*** ./src/page1/page1Links.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.page1Links = void 0;\n\nvar _page2JS = __webpack_require__(/*! ../page2/page2JS.js */ \"./src/page2/page2JS.js\");\n\nvar _page2Links = __webpack_require__(/*! ../page2/page2Links.js */ \"./src/page2/page2Links.js\");\n\nvar _page3JS = __webpack_require__(/*! ../page3/page3JS.js */ \"./src/page3/page3JS.js\");\n\nvar _page3Links = __webpack_require__(/*! ../page3/page3Links.js */ \"./src/page3/page3Links.js\");\n\nvar _end = __webpack_require__(/*! ../end/end.js */ \"./src/end/end.js\");\n\n__webpack_require__(/*! ../../assets/bg.jpg */ \"./assets/bg.jpg\");\n\n__webpack_require__(/*! ../../assets/bg1.jpg */ \"./assets/bg1.jpg\");\n\n__webpack_require__(/*! ../../assets/Font.ttf */ \"./assets/Font.ttf\");\n\n__webpack_require__(/*! ../css/backgrounds.css */ \"./src/css/backgrounds.css\");\n\n__webpack_require__(/*! ../css/progressBar.css */ \"./src/css/progressBar.css\");\n\n__webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n\n__webpack_require__(/*! ../css/text.css */ \"./src/css/text.css\");\n\n//Se importan todos los elementos al bundle\nvar page1Links = function page1Links() {\n  var container = document.createElement(\"body-container\"); //document.body.innerHTML = \"\";\n\n  var mDoor = document.createElement(\"b\");\n  var hallway = document.createElement(\"b\");\n  var escape = document.createElement(\"b\");\n  var hr = document.createElement(\"hr\");\n  var hr1 = document.createElement(\"hr\");\n  var bar = document.createElement(\"progress\");\n  var space = document.createElement(\"br\");\n  var space1 = document.createElement(\"br\");\n  var linkDoor = document.createElement(\"a\");\n  var linkHall = document.createElement(\"a\");\n  var linkEscape = document.createElement(\"a\");\n  var textDoor = document.createTextNode(\"Ir hacia la puerta principal\");\n  var textHall = document.createTextNode(\"Seguir a un costado de la casa\");\n  var textEsc = document.createTextNode(\"Huir\");\n  bar.max = 4;\n  bar.value = 1; //bar.style = \"max:4\"\n  //linkDoor.href = \"../src/page3/page3.html\";\n  //linkHall.href = \"../src/page2/page2.html\";\n  //linkEscape.href = \"../src/altEnding/quitting.html\"\n\n  linkDoor.appendChild(textDoor);\n  linkHall.appendChild(textHall);\n  linkEscape.appendChild(textEsc);\n  linkDoor.addEventListener(\"click\", page3);\n  linkHall.addEventListener(\"click\", page2);\n  linkEscape.addEventListener(\"click\", end);\n  mDoor.appendChild(linkDoor);\n  hallway.appendChild(linkHall);\n  escape.appendChild(linkEscape);\n  document.body.appendChild(hr);\n  document.body.appendChild(space);\n  document.body.appendChild(mDoor);\n  document.body.appendChild(space);\n  document.body.appendChild(hallway);\n  document.body.appendChild(space1);\n  document.body.appendChild(escape);\n  document.body.appendChild(hr1);\n  document.body.appendChild(bar);\n\n  function page3() {\n    //alert(\"page3\");\n    (0, _page3JS.page3JS)();\n    (0, _page3Links.page3Links)();\n  }\n\n  function page2() {\n    //alert(\"page2\");\n    (0, _page2JS.page2JS)();\n    (0, _page2Links.page2Links)();\n  }\n\n  function end() {\n    //alert(\"quitting\");\n    (0, _end.endPage)();\n  }\n};\n\nexports.page1Links = page1Links;\n\n//# sourceURL=webpack://lab7/./src/page1/page1Links.js?");

/***/ }),

/***/ "./src/page2/page2JS.js":
/*!******************************!*\
  !*** ./src/page2/page2JS.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.page2JS = void 0;\n\nvar page2JS = function page2JS() {\n  var container = document.getElementById(\"body-container\");\n  document.body.innerHTML = \"\"; //let text = document.getElementById(\"texto\");\n\n  var text = document.createElement(\"p\"); //var bWindow = document.getElementById(\"breakWindow\");\n  //var returnTo = document.getElementById(\"back\");\n  //var linkBW = document.createElement(\"a\");\n  //var linkRT = document.createElement(\"a\");\n  //var textBW = document.createTextNode(\"Romper la puerta corrediza y entrar a la casa\");\n  //var textRT = document.createTextNode(\"Volver\");\n  //linkBW.href = \"page3.html\";\n  //linkRT.href = \"page1.html\";\n  //linkBW.appendChild(textBW);\n  //linkRT.appendChild(textRT);\n\n  text.innerHTML = \"Has avanzado por el estrecho pasadizo, avanzas como puedes y llegas a la parte trasera de la casa. ¿Ahora que harás? ¿Intentarás entrar a la casa o regresarás?\"; //bWindow.appendChild(linkBW);\n  //returnTo.appendChild(linkRT);\n  //body.appendChild(bWindow);\n  //body.appendChild(returnTo);\n\n  document.body.appendChild(text);\n};\n\nexports.page2JS = page2JS;\n\n//# sourceURL=webpack://lab7/./src/page2/page2JS.js?");

/***/ }),

/***/ "./src/page2/page2Links.js":
/*!*********************************!*\
  !*** ./src/page2/page2Links.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.page2Links = void 0;\n\nvar _page3JS = __webpack_require__(/*! ../page3/page3JS.js */ \"./src/page3/page3JS.js\");\n\nvar _page3Links = __webpack_require__(/*! ../page3/page3Links.js */ \"./src/page3/page3Links.js\");\n\nvar _page1JS = __webpack_require__(/*! ../page1/page1JS.js */ \"./src/page1/page1JS.js\");\n\nvar _page1Links = __webpack_require__(/*! ../page1/page1Links.js */ \"./src/page1/page1Links.js\");\n\n__webpack_require__(/*! ../../assets/bg.jpg */ \"./assets/bg.jpg\");\n\n__webpack_require__(/*! ../../assets/bg1.jpg */ \"./assets/bg1.jpg\");\n\n__webpack_require__(/*! ../../assets/Font.ttf */ \"./assets/Font.ttf\");\n\n__webpack_require__(/*! ../css/backgrounds.css */ \"./src/css/backgrounds.css\");\n\n__webpack_require__(/*! ../css/progressBar.css */ \"./src/css/progressBar.css\");\n\n__webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n\n__webpack_require__(/*! ../css/text.css */ \"./src/css/text.css\");\n\nvar page2Links = function page2Links() {\n  var container = document.getElementById(\"body-container\"); //document.body.innerHTML = \"\";\n\n  var bWindow = document.createElement(\"p\");\n  var returnTo = document.createElement(\"p\");\n  var space = document.createElement(\"br\");\n  var space1 = document.createElement(\"br\");\n  var linkBW = document.createElement(\"a\");\n  var linkRT = document.createElement(\"a\");\n  var hr = document.createElement(\"hr\");\n  var hr1 = document.createElement(\"hr\");\n  var bar = document.createElement(\"progress\");\n  var textBW = document.createTextNode(\"Romper la puerta corrediza y entrar a la casa\");\n  var textRT = document.createTextNode(\"Volver\"); //linkBW.href = \"../src/page3/page3.html\";\n  //linkRT.href = \"../src/page1/page1.html\";\n\n  linkBW.addEventListener(\"click\", page3);\n  linkRT.addEventListener(\"click\", page1);\n  linkBW.appendChild(textBW);\n  linkRT.appendChild(textRT);\n  bWindow.appendChild(linkBW);\n  returnTo.appendChild(linkRT);\n  document.body.appendChild(hr);\n  document.body.appendChild(bWindow);\n  document.body.appendChild(returnTo);\n  document.body.appendChild(hr1);\n  document.body.appendChild(bar);\n\n  function page3() {\n    //alert(\"page3\");\n    (0, _page3JS.page3JS)();\n    (0, _page3Links.page3Links)();\n  }\n\n  function page1() {\n    //alert(\"page3\");\n    (0, _page1JS.page1JS)();\n    (0, _page1Links.page1Links)();\n  }\n};\n\nexports.page2Links = page2Links;\n\n//# sourceURL=webpack://lab7/./src/page2/page2Links.js?");

/***/ }),

/***/ "./src/page3/page3JS.js":
/*!******************************!*\
  !*** ./src/page3/page3JS.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.page3JS = void 0;\n\n__webpack_require__(/*! ../../assets/bg.jpg */ \"./assets/bg.jpg\");\n\n__webpack_require__(/*! ../../assets/bg1.jpg */ \"./assets/bg1.jpg\");\n\n__webpack_require__(/*! ../../assets/Font.ttf */ \"./assets/Font.ttf\");\n\n__webpack_require__(/*! ../css/backgrounds.css */ \"./src/css/backgrounds.css\");\n\n__webpack_require__(/*! ../css/progressBar.css */ \"./src/css/progressBar.css\");\n\n__webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n\n__webpack_require__(/*! ../css/text.css */ \"./src/css/text.css\");\n\nvar page3JS = function page3JS() {\n  var container = document.getElementById(\"body-container\");\n  document.body.innerHTML = \"\";\n  var text = document.createElement(\"p\"); //var sFloor = document.getElementById(\"secondFloor\");\n  //var returnTo = document.getElementById(\"back\");\n  //var linkSF = document.createElement(\"a\");\n  //var linkRT = document.createElement(\"a\");\n  //var textSF = document.createTextNode(\"Ir al segundo nivel\");\n  //var textRT = document.createTextNode(\"Volver\");\n  //linkSF.href = \"page4.html\";\n  //linkRT.href = \"page1.html\";\n  //linkSF.appendChild(textSF);\n  //linkRT.appendChild(textRT);\n\n  text.innerHTML = \"Intentas atravesar la puerta principal y no lo logras, lo vuelves a intentar y ves como se va fragmentando. En el tercer intento la puerta cae frente a ti, decides entrar y te encuentras sin aliento por el repentino ejercicio.\"; //sFloor.appendChild(linkSF);\n  //returnTo.appendChild(linkRT);\n  //body.appendChild(sFloor);\n  //body.appendChild(returnTo);\n\n  document.body.appendChild(text);\n};\n\nexports.page3JS = page3JS;\n\n//# sourceURL=webpack://lab7/./src/page3/page3JS.js?");

/***/ }),

/***/ "./src/page3/page3Links.js":
/*!*********************************!*\
  !*** ./src/page3/page3Links.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.page3Links = void 0;\n\nvar _page1JS = __webpack_require__(/*! ../page1/page1JS.js */ \"./src/page1/page1JS.js\");\n\nvar _page1Links = __webpack_require__(/*! ../page1/page1Links.js */ \"./src/page1/page1Links.js\");\n\nvar _end = __webpack_require__(/*! ../end/end.js */ \"./src/end/end.js\");\n\n__webpack_require__(/*! ../../assets/bg.jpg */ \"./assets/bg.jpg\");\n\n__webpack_require__(/*! ../../assets/bg1.jpg */ \"./assets/bg1.jpg\");\n\n__webpack_require__(/*! ../../assets/Font.ttf */ \"./assets/Font.ttf\");\n\n__webpack_require__(/*! ../css/backgrounds.css */ \"./src/css/backgrounds.css\");\n\n__webpack_require__(/*! ../css/progressBar.css */ \"./src/css/progressBar.css\");\n\n__webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n\n__webpack_require__(/*! ../css/text.css */ \"./src/css/text.css\");\n\nvar page3Links = function page3Links() {\n  var container = document.getElementById(\"body-container\"); //document.body.innerHTML = \"\";\n\n  var sFloor = document.createElement(\"b\");\n  var returnTo = document.createElement(\"b\");\n  var linkSF = document.createElement(\"a\");\n  var linkRT = document.createElement(\"a\");\n  var space1 = document.createElement(\"br\");\n  var hr = document.createElement(\"hr\");\n  var hr1 = document.createElement(\"hr\");\n  var bar = document.createElement(\"progress\");\n  var textSF = document.createTextNode(\"Ir al segundo nivel\");\n  var textRT = document.createTextNode(\"Volver\"); //linkSF.href = \"../src/page4/page4.html\";\n  //linkRT.href = \"../src/page1/page1.html\";\n\n  linkSF.addEventListener(\"click\", end);\n  linkRT.addEventListener(\"click\", page1);\n  linkSF.appendChild(textSF);\n  linkRT.appendChild(textRT);\n  sFloor.appendChild(linkSF);\n  returnTo.appendChild(linkRT);\n  document.body.appendChild(hr);\n  document.body.appendChild(sFloor);\n  document.body.appendChild(space1);\n  document.body.appendChild(returnTo);\n  document.body.appendChild(hr1);\n  document.body.appendChild(bar);\n\n  function end() {\n    (0, _end.endPage)();\n  }\n\n  function page1() {\n    (0, _page1JS.page1JS)();\n    (0, _page1Links.page1Links)();\n  }\n};\n\nexports.page3Links = page3Links;\n\n//# sourceURL=webpack://lab7/./src/page3/page3Links.js?");

/***/ }),

/***/ "./assets/bg.jpg":
/*!***********************!*\
  !*** ./assets/bg.jpg ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"bg.jpg\");\n\n//# sourceURL=webpack://lab7/./assets/bg.jpg?");

/***/ }),

/***/ "./assets/bg1.jpg":
/*!************************!*\
  !*** ./assets/bg1.jpg ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"bg1.jpg\");\n\n//# sourceURL=webpack://lab7/./assets/bg1.jpg?");

/***/ }),

/***/ "./assets/Font.ttf":
/*!*************************!*\
  !*** ./assets/Font.ttf ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"Font.ttf\");\n\n//# sourceURL=webpack://lab7/./assets/Font.ttf?");

/***/ }),

/***/ "./src/css/backgrounds.css":
/*!*********************************!*\
  !*** ./src/css/backgrounds.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lab7/./src/css/backgrounds.css?");

/***/ }),

/***/ "./src/css/progressBar.css":
/*!*********************************!*\
  !*** ./src/css/progressBar.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lab7/./src/css/progressBar.css?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lab7/./src/css/style.css?");

/***/ }),

/***/ "./src/css/text.css":
/*!**************************!*\
  !*** ./src/css/text.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lab7/./src/css/text.css?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;