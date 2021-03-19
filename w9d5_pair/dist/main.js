/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n\n\nclass Clock {\n  constructor() {\n    // 1. Create a Date object.\n    const currentTime = new Date();\n\n    // 2. Store the hour, minute, and second.\n    this.hours = currentTime.getHours();\n    this.minutes = currentTime.getMinutes();\n    this.seconds = currentTime.getSeconds();\n\n    // 3. Call printTime.\n    this.printTime();\n\n    // 4. Schedule the tick at 1 second intervals.\n    setInterval(this._tick.bind(this), 1000);\n  }\n\n  printTime() {\n    // Format the time in HH:MM:SS\n    const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\n\n    // Use console.log to print it.\n    // console.log(timeString);\n    let clockDiv = document.getElementById(\"clock\");\n    (0,_warmup__WEBPACK_IMPORTED_MODULE_0__.htmlGenerator)(timeString, clockDiv);\n  }\n\n  _tick() {\n    // 1. Increment the time by one second.\n    this._incrementSeconds();\n\n    // 2. Call printTime.\n    this.printTime();\n  }\n\n  _incrementSeconds() {\n    // 1. Increment the time by one second.\n    this.seconds += 1;\n    if (this.seconds === 60) {\n      this.seconds = 0;\n      this._incrementMinutes();\n    }\n  }\n\n  _incrementMinutes() {\n    this.minutes += 1;\n    if (this.minutes === 60) {\n      this.minutes = 0;\n      this._incrementHours();\n    }\n  }\n\n  _incrementHours() {\n    this.hours = (this.hours + 1) % 24;\n  }\n}\n\nconst clock = new Clock();\n\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/***/ (() => {

eval("\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\n\nconst dogLinkCreator = (dogs) => {\n  const dogLinks = [];\n  const dogNames = Object.keys(dogs);\n  dogNames.forEach(dog=>{\n    const dogLi = document.createElement(\"li\");\n    const dogA = document.createElement(\"a\");\n    dogA.innerHTML = dog;\n    dogA.href = dogs[dog];\n    dogLi.classList.add(\"dog-link\");\n    dogLi.appendChild(dogA);\n    dogLinks.push(dogLi);\n  })\n  return dogLinks;\n}\n\nconst attachDogLinks = function(){\n  const dogLinks = dogLinkCreator(dogs);\n  const dropDownList = document.querySelector(\".drop-down-dog-list\");\n\n  dogLinks.forEach(li=>{\n    dropDownList.appendChild(li);\n  });\n\n\n\n}\n\n\nconst handleEnter = function(event){\n  // console.log(\"handleenter\")\n  const dogLinks = document.querySelectorAll(\".dog-link\")\n  dogLinks.forEach(link=>{\n    link.classList.remove(\"dog-link\");\n  });\n\n}\n\nconst handleLeave = function(event){\n  // console.log(\"handleenter\")\n  const dogLinks = document.querySelectorAll(\".drop-down-dog-list li\")\n  dogLinks.forEach(link=>{\n    link.classList.add(\"dog-link\");\n  });\n\n}\n\nconst dogHeader = document.querySelector(\".drop-down-dog-nav\");\ndogHeader.addEventListener(\"mouseenter\",handleEnter);\ndogHeader.addEventListener(\"mouseleave\",handleLeave);\n\nattachDogLinks();\n\n\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drop_down__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _todo_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list.js */ \"./src/todo_list.js\");\n/* harmony import */ var _todo_list_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_todo_list_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/***/ (() => {

eval("const populateList = function (toDos) {\n  const todoUl = document.querySelector(\".todos\");\n  let elementChildren = Array.from(todoUl.children);\n  if (elementChildren.length > 0) {\n    elementChildren.forEach(child=>{\n      child.remove();\n    });\n    \n  }\n  toDos.forEach(todo => {\n\n    const todoLabel = document.createElement(\"label\");\n    todoLabel.innerText=todo.text;\n\n    const checkBox = document.createElement(\"input\");\n    checkBox.type = \"checkbox\";\n    checkBox.value = todo.done;\n    const todoLi = document.createElement(\"li\");\n    todoLi.appendChild(todoLabel);\n    todoLi.appendChild(checkBox);\n    todoUl.appendChild(todoLi);\n  })\n}\n\nlet toDos = [];\nif (localStorage.getItem(\"todoArray\")) {\n  toDos = JSON.parse(localStorage.getItem(\"todoArray\"));\n  populateList(toDos);\n}\nconst ulElement = document.querySelector(\"ul .todos\");\n\nconst formElement = document.querySelector(\"form .add-todo-form\");\n\nconst addTodo = function (event) {\n  event.preventDefault();\n\n  const inputBox = document.querySelector(\"[name='add-todo']\");\n  const todo = inputBox.value;\n  const done = false;\n  toDos.push(new Todo(todo, done));\n  localStorage.setItem(\"todoArray\", JSON.stringify(toDos));\n  populateList(toDos);\n}\n\nclass Todo {\n  constructor(text,done) {\n    this.text = text;\n    this.done = done;\n  }\n}\n\n\n\nconst submitButton = document.querySelector(\"input[type='submit']\");\nsubmitButton.addEventListener('click', addTodo);\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"htmlGenerator\": () => (/* binding */ htmlGenerator)\n/* harmony export */ });\n\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n  let newParagraph = document.createElement(\"p\");\n  let elementChildren = Array.from(htmlElement.children);\n  if (elementChildren.length > 0) {\n    elementChildren.forEach(child=>{\n      child.remove();\n    });\n    // htmlElement.removeChild()\n  }\n  newParagraph.append(string);\n  htmlElement.append(newParagraph);\n};\n\nhtmlGenerator('Party Time.', partyHeader);\n\n\n\n//# sourceURL=webpack:///./src/warmup.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;