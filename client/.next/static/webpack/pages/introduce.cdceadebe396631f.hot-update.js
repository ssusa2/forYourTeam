"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/introduce",{

/***/ "./pages/introduce/validForm.js":
/*!**************************************!*\
  !*** ./pages/introduce/validForm.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleClick\": function() { return /* binding */ handleClick; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"../node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"../node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/** @format */ \n\nvar handleClick = function(validEmail) {\n    if (!validName) {\n        alert(\"프로젝트 이름을 입력해주세요.\");\n        inutRef.current[0].focus();\n        setInfo(function(prev) {\n            return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, prev), {\n                project_info: (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, info.project_info), {\n                    name: \"\"\n                })\n            });\n        });\n    } else if (!validLogo) {\n        alert(\"프로젝트 이름을 입력해주세요.\");\n        inutRef.current[1].focus();\n        setInfo(function(prev) {\n            return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, prev), {\n                project_info: (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, info.project_info), {\n                    name: \"\"\n                })\n            });\n        });\n    } else if (!validEmail) {\n        alert(\"유효하지 않은 email 입니다.\");\n        inutRef.current[2].focus();\n        setInfo(function(prev) {\n            return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, prev), {\n                project_info: (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, info.project_info), {\n                    email: \"\"\n                })\n            });\n        });\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbnRyb2R1Y2UvdmFsaWRGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLFlBQVksR0FFWjs7QUFBTyxJQUFNQSxXQUFXLEdBQUcsU0FBQ0MsVUFBVSxFQUFLO0lBQzFDLElBQUksQ0FBQ0MsU0FBUyxFQUFFO1FBQ2ZDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzFCQyxPQUFPLENBQUNDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsS0FBSyxFQUFFLENBQUM7UUFDM0JDLE9BQU8sQ0FBQyxTQUFDQyxJQUFJLEVBQUs7WUFDakIsT0FBTyx3S0FDSEEsSUFBSTtnQkFDUEMsWUFBWSxFQUFFLHdLQUNWQyxJQUFJLENBQUNELFlBQVk7b0JBQ3BCRSxJQUFJLEVBQUUsRUFBRTtrQkFDUjtjQUNELENBQUM7U0FDRixDQUFDLENBQUM7S0FDSCxNQUFNLElBQUksQ0FBQ0MsU0FBUyxFQUFFO1FBQ3RCVCxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMxQkMsT0FBTyxDQUFDQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNDLEtBQUssRUFBRSxDQUFDO1FBQzNCQyxPQUFPLENBQUMsU0FBQ0MsSUFBSSxFQUFLO1lBQ2pCLE9BQU8sd0tBQ0hBLElBQUk7Z0JBQ1BDLFlBQVksRUFBRSx3S0FDVkMsSUFBSSxDQUFDRCxZQUFZO29CQUNwQkUsSUFBSSxFQUFFLEVBQUU7a0JBQ1I7Y0FDRCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0tBQ0gsTUFBTSxJQUFJLENBQUNWLFVBQVUsRUFBRTtRQUN2QkUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDNUJDLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxLQUFLLEVBQUUsQ0FBQztRQUMzQkMsT0FBTyxDQUFDLFNBQUNDLElBQUksRUFBSztZQUNqQixPQUFPLHdLQUNIQSxJQUFJO2dCQUNQQyxZQUFZLEVBQUUsd0tBQ1ZDLElBQUksQ0FBQ0QsWUFBWTtvQkFDcEJJLEtBQUssRUFBRSxFQUFFO2tCQUNUO2NBQ0QsQ0FBQztTQUNGLENBQUMsQ0FBQztLQUNIO0NBQ0QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbnRyb2R1Y2UvdmFsaWRGb3JtLmpzPzQyMTIiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBmb3JtYXQgKi9cblxuZXhwb3J0IGNvbnN0IGhhbmRsZUNsaWNrID0gKHZhbGlkRW1haWwpID0+IHtcblx0aWYgKCF2YWxpZE5hbWUpIHtcblx0XHRhbGVydCgn7ZSE66Gc7KCd7Yq4IOydtOumhOydhCDsnoXroKXtlbTso7zshLjsmpQuJyk7XG5cdFx0aW51dFJlZi5jdXJyZW50WzBdLmZvY3VzKCk7XG5cdFx0c2V0SW5mbygocHJldikgPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4ucHJldixcblx0XHRcdFx0cHJvamVjdF9pbmZvOiB7XG5cdFx0XHRcdFx0Li4uaW5mby5wcm9qZWN0X2luZm8sXG5cdFx0XHRcdFx0bmFtZTogJycsXG5cdFx0XHRcdH0sXG5cdFx0XHR9O1xuXHRcdH0pO1xuXHR9IGVsc2UgaWYgKCF2YWxpZExvZ28pIHtcblx0XHRhbGVydCgn7ZSE66Gc7KCd7Yq4IOydtOumhOydhCDsnoXroKXtlbTso7zshLjsmpQuJyk7XG5cdFx0aW51dFJlZi5jdXJyZW50WzFdLmZvY3VzKCk7XG5cdFx0c2V0SW5mbygocHJldikgPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4ucHJldixcblx0XHRcdFx0cHJvamVjdF9pbmZvOiB7XG5cdFx0XHRcdFx0Li4uaW5mby5wcm9qZWN0X2luZm8sXG5cdFx0XHRcdFx0bmFtZTogJycsXG5cdFx0XHRcdH0sXG5cdFx0XHR9O1xuXHRcdH0pO1xuXHR9IGVsc2UgaWYgKCF2YWxpZEVtYWlsKSB7XG5cdFx0YWxlcnQoJ+ycoO2aqO2VmOyngCDslYrsnYAgZW1haWwg7J6F64uI64ukLicpO1xuXHRcdGludXRSZWYuY3VycmVudFsyXS5mb2N1cygpO1xuXHRcdHNldEluZm8oKHByZXYpID0+IHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnByZXYsXG5cdFx0XHRcdHByb2plY3RfaW5mbzoge1xuXHRcdFx0XHRcdC4uLmluZm8ucHJvamVjdF9pbmZvLFxuXHRcdFx0XHRcdGVtYWlsOiAnJyxcblx0XHRcdFx0fSxcblx0XHRcdH07XG5cdFx0fSk7XG5cdH1cbn07XG4iXSwibmFtZXMiOlsiaGFuZGxlQ2xpY2siLCJ2YWxpZEVtYWlsIiwidmFsaWROYW1lIiwiYWxlcnQiLCJpbnV0UmVmIiwiY3VycmVudCIsImZvY3VzIiwic2V0SW5mbyIsInByZXYiLCJwcm9qZWN0X2luZm8iLCJpbmZvIiwibmFtZSIsInZhbGlkTG9nbyIsImVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/introduce/validForm.js\n"));

/***/ })

});