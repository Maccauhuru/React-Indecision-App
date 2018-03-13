/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*jshint esversion:6*/\r\n// import React from 'react';\r\n// import ReactDOM from 'react-dom';\r\n\r\nconst template = React.createElement('p', {} ,\"Welcome to React!\");\r\n\r\nReactDOM.render(template,document.getElementById('app-info'));\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// import saySomething, { square ,add } from \"./utils\";\r\n// console.log(\"app.js is running\");\r\n// console.log(square(7));\r\n// console.log(add(5667,15));\r\n// console.log(saySomething(100,25));\r\n\r\n\r\n// import { isAdult, canDrink } from \"./person\";\r\n// console.log(isAdult(18));\r\n// console.log(canDrink(18));\r\n\r\n// import isSenior from './person';\r\n// console.log(isSenior(60));\r\n\r\n//  import validator from 'validator';\r\n//  console.log(validator.isEmail('Simba@gmail.com'));\r\n//  console.log(validator.isDivisibleBy(\"1000\",\"51\"));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbIi8qanNoaW50IGVzdmVyc2lvbjo2Ki9cclxuLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcblxyXG5jb25zdCB0ZW1wbGF0ZSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3AnLCB7fSAsXCJXZWxjb21lIHRvIFJlYWN0IVwiKTtcclxuXHJcblJlYWN0RE9NLnJlbmRlcih0ZW1wbGF0ZSxkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwLWluZm8nKSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBpbXBvcnQgc2F5U29tZXRoaW5nLCB7IHNxdWFyZSAsYWRkIH0gZnJvbSBcIi4vdXRpbHNcIjtcclxuLy8gY29uc29sZS5sb2coXCJhcHAuanMgaXMgcnVubmluZ1wiKTtcclxuLy8gY29uc29sZS5sb2coc3F1YXJlKDcpKTtcclxuLy8gY29uc29sZS5sb2coYWRkKDU2NjcsMTUpKTtcclxuLy8gY29uc29sZS5sb2coc2F5U29tZXRoaW5nKDEwMCwyNSkpO1xyXG5cclxuXHJcbi8vIGltcG9ydCB7IGlzQWR1bHQsIGNhbkRyaW5rIH0gZnJvbSBcIi4vcGVyc29uXCI7XHJcbi8vIGNvbnNvbGUubG9nKGlzQWR1bHQoMTgpKTtcclxuLy8gY29uc29sZS5sb2coY2FuRHJpbmsoMTgpKTtcclxuXHJcbi8vIGltcG9ydCBpc1NlbmlvciBmcm9tICcuL3BlcnNvbic7XHJcbi8vIGNvbnNvbGUubG9nKGlzU2VuaW9yKDYwKSk7XHJcblxyXG4vLyAgaW1wb3J0IHZhbGlkYXRvciBmcm9tICd2YWxpZGF0b3InO1xyXG4vLyAgY29uc29sZS5sb2codmFsaWRhdG9yLmlzRW1haWwoJ1NpbWJhQGdtYWlsLmNvbScpKTtcclxuLy8gIGNvbnNvbGUubG9nKHZhbGlkYXRvci5pc0RpdmlzaWJsZUJ5KFwiMTAwMFwiLFwiNTFcIikpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ })

/******/ });