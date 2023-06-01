"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/projects";
exports.ids = ["pages/api/projects"];
exports.modules = {

/***/ "(api)/./data/projects.js":
/*!**************************!*\
  !*** ./data/projects.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projects\": () => (/* binding */ projects)\n/* harmony export */ });\nconst projects = [\n    {\n        id: 1,\n        name: \"ZambianExperts\",\n        link: \"https://www.zambianexperts.com\",\n        image: \"zambianexperts.png\"\n    },\n    {\n        id: 2,\n        name: \"ZbeckStore\",\n        link: \"https://www.zbeckstore.com\",\n        image: \"zbeckstore.png\"\n    },\n    {\n        id: 3,\n        name: \"Walks of Love foundation\",\n        link: \"https://www.walksoflove.org\",\n        image: \"walkoflove.png\"\n    },\n    {\n        id: 4,\n        name: \"Zbecks\",\n        link: \"https//:www.zbecks.net\",\n        image: \"zbeck.png\"\n    }\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYXRhL3Byb2plY3RzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxXQUFXO0lBQ3RCO1FBQ0VDLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE9BQU87SUFDVDtJQUNBO1FBQ0VILElBQUk7UUFDSkMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE9BQU87SUFDVDtJQUNBO1FBQ0VILElBQUk7UUFDSkMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE9BQU87SUFDVDtJQUNBO1FBQ0VILElBQUk7UUFDSkMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE9BQU87SUFDVDtDQUNELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uYW15Ly4vZGF0YS9wcm9qZWN0cy5qcz9lOWY0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIG5hbWU6IFwiWmFtYmlhbkV4cGVydHNcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuemFtYmlhbmV4cGVydHMuY29tXCIsXHJcbiAgICBpbWFnZTogXCJ6YW1iaWFuZXhwZXJ0cy5wbmdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgbmFtZTogXCJaYmVja1N0b3JlXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vd3d3LnpiZWNrc3RvcmUuY29tXCIsXHJcbiAgICBpbWFnZTogXCJ6YmVja3N0b3JlLnBuZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBuYW1lOiBcIldhbGtzIG9mIExvdmUgZm91bmRhdGlvblwiLFxyXG4gICAgbGluazogXCJodHRwczovL3d3dy53YWxrc29mbG92ZS5vcmdcIixcclxuICAgIGltYWdlOiBcIndhbGtvZmxvdmUucG5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIG5hbWU6IFwiWmJlY2tzXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzLy86d3d3LnpiZWNrcy5uZXRcIixcclxuICAgIGltYWdlOiBcInpiZWNrLnBuZ1wiLFxyXG4gIH0sXHJcbl07Il0sIm5hbWVzIjpbInByb2plY3RzIiwiaWQiLCJuYW1lIiwibGluayIsImltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./data/projects.js\n");

/***/ }),

/***/ "(api)/./pages/api/projects/index.js":
/*!*************************************!*\
  !*** ./pages/api/projects/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var components_data_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/data/projects */ \"(api)/./data/projects.js\");\n\nfunction handler(req, res) {\n    if (req.method === \"GET\") {\n        res.status(200).json(components_data_projects__WEBPACK_IMPORTED_MODULE_0__.projects);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvamVjdHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBb0Q7QUFFckMsU0FBU0MsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDdEMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLE9BQU87UUFDdEJELElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNOLDhEQUFRQTtJQUNqQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25hbXkvLi9wYWdlcy9hcGkvcHJvamVjdHMvaW5kZXguanM/MTNhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCJjb21wb25lbnRzL2RhdGEvcHJvamVjdHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHByb2plY3RzKVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbInByb2plY3RzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/projects/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/projects/index.js"));
module.exports = __webpack_exports__;

})();