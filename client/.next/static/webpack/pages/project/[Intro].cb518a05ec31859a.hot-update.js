"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/project/[Intro]",{

/***/ "./util/utils.js":
/*!***********************!*\
  !*** ./util/utils.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkLines\": function() { return /* binding */ checkLines; },\n/* harmony export */   \"replaceBrTag\": function() { return /* binding */ replaceBrTag; }\n/* harmony export */ });\n/** @format */ // \\n을 <br/>로 바꿔주는\nvar replaceBrTag = function(str) {\n    if (str === undefined || str === null) return {\n        __html: \"\"\n    };\n    str = str.replace(/\\r\\n/gi, \"<br>\");\n    str = str.replace(/\\\\n/gi, \"<br>\");\n    str = str.replace(/\\n/gi, \"<br>\");\n    return {\n        __html: str\n    };\n};\nvar checkLines = function(e) {\n    var str = e.target.value;\n    console.log(e.target.value);\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlsL3V0aWxzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsWUFBWSxHQUVaLGtCQUFrQjtBQUNYLElBQU1BLFlBQVksR0FBRyxTQUFDQyxHQUFHLEVBQUs7SUFDcEMsSUFBSUEsR0FBRyxLQUFLQyxTQUFTLElBQUlELEdBQUcsS0FBSyxJQUFJLEVBQUUsT0FBTztRQUFFRSxNQUFNLEVBQUUsRUFBRTtLQUFFLENBQUM7SUFDN0RGLEdBQUcsR0FBR0EsR0FBRyxDQUFDRyxPQUFPLFdBQVcsTUFBTSxDQUFDLENBQUM7SUFDcENILEdBQUcsR0FBR0EsR0FBRyxDQUFDRyxPQUFPLFVBQVUsTUFBTSxDQUFDLENBQUM7SUFDbkNILEdBQUcsR0FBR0EsR0FBRyxDQUFDRyxPQUFPLFNBQVMsTUFBTSxDQUFDLENBQUM7SUFDbEMsT0FBTztRQUFFRCxNQUFNLEVBQUVGLEdBQUc7S0FBRSxDQUFDO0NBQ3ZCLENBQUM7QUFFSyxJQUFNSSxVQUFVLEdBQUcsU0FBQ0MsQ0FBQyxFQUFLO0lBQ2hDLElBQUlMLEdBQUcsR0FBR0ssQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUs7SUFDeEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQUM7Q0FDNUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlsL3V0aWxzLmpzPzQ0MjEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBmb3JtYXQgKi9cblxuLy8gXFxu7J2EIDxici8+66GcIOuwlOq/lOyjvOuKlFxuZXhwb3J0IGNvbnN0IHJlcGxhY2VCclRhZyA9IChzdHIpID0+IHtcblx0aWYgKHN0ciA9PT0gdW5kZWZpbmVkIHx8IHN0ciA9PT0gbnVsbCkgcmV0dXJuIHsgX19odG1sOiAnJyB9O1xuXHRzdHIgPSBzdHIucmVwbGFjZSgvXFxyXFxuL2dpLCAnPGJyPicpO1xuXHRzdHIgPSBzdHIucmVwbGFjZSgvXFxcXG4vZ2ksICc8YnI+Jyk7XG5cdHN0ciA9IHN0ci5yZXBsYWNlKC9cXG4vZ2ksICc8YnI+Jyk7XG5cdHJldHVybiB7IF9faHRtbDogc3RyIH07XG59O1xuXG5leHBvcnQgY29uc3QgY2hlY2tMaW5lcyA9IChlKSA9PiB7XG5cdGxldCBzdHIgPSBlLnRhcmdldC52YWx1ZTtcblx0Y29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xufTtcbiJdLCJuYW1lcyI6WyJyZXBsYWNlQnJUYWciLCJzdHIiLCJ1bmRlZmluZWQiLCJfX2h0bWwiLCJyZXBsYWNlIiwiY2hlY2tMaW5lcyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./util/utils.js\n"));

/***/ })

});