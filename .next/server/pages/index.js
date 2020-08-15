module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/admin/Documents/GitHub/ethprice/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst Homepage = theProps => __jsx(\"div\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }\n}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 7\n  }\n}, __jsx(\"title\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 9\n  }\n}, \"Ethereum Price\"), __jsx(\"link\", {\n  rel: \"icon\",\n  href: \"/favicon.ico\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }\n}), __jsx(\"script\", {\n  type: \"text/javascript\",\n  src: \"/jquery-3.5.1.slim.min.js\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 11\n  }\n}), __jsx(\"script\", {\n  type: \"text/javascript\",\n  src: \"/popper.min.js\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 11\n  }\n}), __jsx(\"script\", {\n  type: \"text/javascript\",\n  src: \"/bootstrap.min.js\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 11\n  }\n}), __jsx(\"script\", {\n  type: \"text/javascript\",\n  src: \"/testing.js\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 11\n  }\n})), __jsx(\"nav\", {\n  className: \"navbar navbar-expand-lg navbar-light bg-light\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 9\n  }\n}, __jsx(\"a\", {\n  className: \"navbar-brand\",\n  href: \"#\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 13\n  }\n}, \"Ethereum Price\"), __jsx(\"button\", {\n  className: \"navbar-toggler\",\n  type: \"button\",\n  \"data-toggle\": \"collapse\",\n  \"data-target\": \"#navbarNavAltMarkup\",\n  \"aria-controls\": \"navbarNavAltMarkup\",\n  \"aria-expanded\": \"false\",\n  \"aria-label\": \"Toggle navigation\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 13\n  }\n}, __jsx(\"span\", {\n  className: \"navbar-toggler-icon\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 17\n  }\n})), __jsx(\"div\", {\n  className: \"collapse navbar-collapse\",\n  id: \"navbarNavAltMarkup\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 13\n  }\n}, __jsx(\"div\", {\n  className: \"navbar-nav\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 17\n  }\n}, __jsx(\"a\", {\n  className: \"nav-item nav-link active\",\n  href: \"/\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 21\n  }\n}, \"Home\", __jsx(\"span\", {\n  className: \"sr-only\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 74\n  }\n}, \"(current)\")), __jsx(\"a\", {\n  className: \"nav-item nav-link\",\n  href: \"/about\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 21\n  }\n}, \"About\"), __jsx(\"a\", {\n  className: \"nav-item nav-link\",\n  href: \"/contact\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 21\n  }\n}, \"Contact\")))), __jsx(\"h1\", {\n  style: {\n    alignItems: \"center\",\n    display: \"flex\",\n    justifyContent: \"center\"\n  },\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 9\n  }\n}, \"Price:\"), __jsx(\"p\", {\n  style: {\n    alignItems: \"center\",\n    display: \"flex\",\n    justifyContent: \"center\"\n  },\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 9\n  }\n}, theProps.thePassed.symbol, \" : $\", theProps.thePassed.price), __jsx(\"p\", {\n  style: {\n    alignItems: \"center\",\n    display: \"flex\",\n    justifyContent: \"center\"\n  },\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 9\n  }\n}, \"Updated on: \", theProps.thePassed2.time.updated), __jsx(\"p\", {\n  style: {\n    alignItems: \"center\",\n    display: \"flex\",\n    justifyContent: \"center\"\n  },\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 9\n  }\n}, \"Data fetched from Binance/Coindesk..\"));\n\nHomepage.getInitialProps = async function () {\n  const myRES = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('https://api.binance.us/api/v3/ticker/price?symbol=ETHUSD');\n  const myDATA = await myRES.json();\n  const myRES2 = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('https://api.coindesk.com/v1/bpi/currentprice.json');\n  const myDATA2 = await myRES2.json();\n  return {\n    thePassed: myDATA,\n    thePassed2: myDATA2\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Homepage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWVwYWdlIiwidGhlUHJvcHMiLCJhbGlnbkl0ZW1zIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwidGhlUGFzc2VkIiwic3ltYm9sIiwicHJpY2UiLCJ0aGVQYXNzZWQyIiwidGltZSIsInVwZGF0ZWQiLCJnZXRJbml0aWFsUHJvcHMiLCJteVJFUyIsImZldGNoIiwibXlEQVRBIiwianNvbiIsIm15UkVTMiIsIm15REFUQTIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUlDLFFBQUQsSUFDYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFO0FBQU0sS0FBRyxFQUFDLE1BQVY7QUFBaUIsTUFBSSxFQUFDLGNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFGRixFQUdJO0FBQVEsTUFBSSxFQUFHLGlCQUFmO0FBQWlDLEtBQUcsRUFBRSwyQkFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUhKLEVBSUk7QUFBUSxNQUFJLEVBQUcsaUJBQWY7QUFBaUMsS0FBRyxFQUFFLGdCQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSkosRUFLSTtBQUFRLE1BQUksRUFBRyxpQkFBZjtBQUFpQyxLQUFHLEVBQUUsbUJBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFMSixFQU1JO0FBQVEsTUFBSSxFQUFHLGlCQUFmO0FBQWlDLEtBQUcsRUFBRSxhQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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dEI7QUFDQSxTQUFPO0FBQ0hWLGFBQVMsRUFBRVMsTUFEUjtBQUVITixjQUFVLEVBQUVTO0FBRlQsR0FBUDtBQUlILENBVEQ7O0FBV2VqQix1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcblxuY29uc3QgSG9tZXBhZ2UgPSAodGhlUHJvcHMpID0+KFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkV0aGVyZXVtIFByaWNlPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgIDxzY3JpcHQgdHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPSBcIi9qcXVlcnktMy41LjEuc2xpbS5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgICA8c2NyaXB0IHR5cGUgPSBcInRleHQvamF2YXNjcmlwdFwiIHNyYz0gXCIvcG9wcGVyLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgICAgIDxzY3JpcHQgdHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPSBcIi9ib290c3RyYXAubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgPHNjcmlwdCB0eXBlID0gXCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9IFwiL3Rlc3RpbmcuanNcIj48L3NjcmlwdD5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1saWdodCBiZy1saWdodFwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj5FdGhlcmV1bSBQcmljZTwvYT5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI25hdmJhck5hdkFsdE1hcmt1cFwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJuYXZiYXJOYXZBbHRNYXJrdXBcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyTmF2QWx0TWFya3VwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItbmF2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG5hdi1saW5rIGFjdGl2ZVwiIGhyZWY9XCIvXCI+SG9tZTxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj4oY3VycmVudCk8L3NwYW4+PC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtaXRlbSBuYXYtbGlua1wiIGhyZWY9XCIvYWJvdXRcIj5BYm91dDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbmF2LWxpbmtcIiBocmVmPVwiL2NvbnRhY3RcIj5Db250YWN0PC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuXG5cbiAgICAgICAgPGgxIHN0eWxlPXt7YWxpZ25JdGVtczogXCJjZW50ZXJcIiwgZGlzcGxheTogXCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsfX0+UHJpY2U6PC9oMT5cbiAgICAgICAgPHAgc3R5bGU9e3thbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBkaXNwbGF5OiBcImZsZXhcIixqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIix9fT57dGhlUHJvcHMudGhlUGFzc2VkLnN5bWJvbH0gOiAke3RoZVByb3BzLnRoZVBhc3NlZC5wcmljZX08L3A+XG5cbiAgICAgICAgPHAgc3R5bGU9e3thbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBkaXNwbGF5OiBcImZsZXhcIixqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIix9fT5VcGRhdGVkIG9uOiB7dGhlUHJvcHMudGhlUGFzc2VkMi50aW1lLnVwZGF0ZWR9PC9wPlxuXG4gICAgICAgIDxwIHN0eWxlPXt7YWxpZ25JdGVtczogXCJjZW50ZXJcIiwgZGlzcGxheTogXCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsfX0+RGF0YSBmZXRjaGVkIGZyb20gQmluYW5jZS9Db2luZGVzay4uPC9wPlxuICAgICAgICA8L2Rpdj5cblxuKTtcblxuSG9tZXBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbXlSRVMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuYmluYW5jZS51cy9hcGkvdjMvdGlja2VyL3ByaWNlP3N5bWJvbD1FVEhVU0QnKTtcbiAgICBjb25zdCBteURBVEEgPSBhd2FpdCBteVJFUy5qc29uKCk7XG4gICAgY29uc3QgbXlSRVMyID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmNvaW5kZXNrLmNvbS92MS9icGkvY3VycmVudHByaWNlLmpzb24nKTtcbiAgICBjb25zdCBteURBVEEyID0gYXdhaXQgbXlSRVMyLmpzb24oKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB0aGVQYXNzZWQ6IG15REFUQSxcbiAgICAgICAgdGhlUGFzc2VkMjogbXlEQVRBMlxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVwYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__1EcsU\",\n\t\"main\": \"Home_main__1x8gC\",\n\t\"footer\": \"Home_footer__1WdhD\",\n\t\"title\": \"Home_title__3DjR7\",\n\t\"description\": \"Home_description__17Z4F\",\n\t\"code\": \"Home_code__axx2Y\",\n\t\"grid\": \"Home_grid__2Ei2F\",\n\t\"card\": \"Home_card__2SdtB\",\n\t\"logo\": \"Home_logo__1YbrH\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzPzRmYmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX18xRWNzVVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fXzF4OGdDXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfXzFXZGhEXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX18zRGpSN1wiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fMTdaNEZcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19heHgyWVwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfXzJFaTJGXCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fMlNkdEJcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18xWWJySFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-unfetch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIj9lYmI2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Imlzb21vcnBoaWMtdW5mZXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///isomorphic-unfetch\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });