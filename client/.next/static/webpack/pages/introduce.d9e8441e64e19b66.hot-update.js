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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleClick\": function() { return /* binding */ handleClick; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"../node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"../node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/** @format */ \n\nvar handleClick = function(setInfo, info, inutRef, validEmail, validGenre, validName, validLogo, validColor) {\n    if (validName) {\n        var // alert('프로젝트 이름을 입력해주세요.');\n        ref, ref1;\n        if (true) {\n            alert(\"프로젝트 이름을 입력해주세요.\");\n        }\n        (ref = inutRef.current) === null || ref === void 0 ? void 0 : (ref1 = ref[0]) === null || ref1 === void 0 ? void 0 : ref1.focus();\n        setInfo(function(prev) {\n            return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, prev), {\n                project_info: (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, info.project_info), {\n                    name: \"\"\n                })\n            });\n        });\n    } else if (validLogo) {\n        var ref2, ref3;\n        if (true) {\n            alert(\"프로젝트 로고를 입력해주세요.\");\n        }\n        (ref2 = inutRef.current) === null || ref2 === void 0 ? void 0 : (ref3 = ref2[1]) === null || ref3 === void 0 ? void 0 : ref3.focus();\n        setInfo(function(prev) {\n            return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, prev), {\n                project_info: (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, info.project_info), {\n                    logo: \"\"\n                })\n            });\n        });\n    } else if (validGenre) {\n        var ref4, ref5;\n        if (true) {\n            alert(\"프로젝트 장르를 입력해주세요.\");\n        }\n        (ref4 = inutRef.current) === null || ref4 === void 0 ? void 0 : (ref5 = ref4[2]) === null || ref5 === void 0 ? void 0 : ref5.focus();\n        setInfo(function(prev) {\n            return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, prev), {\n                project_info: (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, info.project_info), {\n                    genre: \"\"\n                })\n            });\n        });\n    } else if (validColor) {\n        var ref6, ref7;\n        if (true) {\n            alert(\"프로젝트 색상을 선택해주세요.\");\n        }\n        (ref6 = inutRef.current) === null || ref6 === void 0 ? void 0 : (ref7 = ref6[3]) === null || ref7 === void 0 ? void 0 : ref7.focus();\n        setInfo(function(prev) {\n            return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, prev), {\n                project_info: (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, info.project_info), {\n                    color: \"\"\n                })\n            });\n        });\n    } else if (!validEmail) {\n        var ref8, ref9;\n        if (true) {\n            alert(\"유효하지 않은 email 입니다.\");\n        }\n        (ref8 = inutRef.current) === null || ref8 === void 0 ? void 0 : (ref9 = ref8[4]) === null || ref9 === void 0 ? void 0 : ref9.focus();\n        setInfo(function(prev) {\n            return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, prev), {\n                project_info: (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, info.project_info), {\n                    email: \"\"\n                })\n            });\n        });\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2tCQUNUO2NBQ0QsQ0FBQztTQUNGLENBQUMsQ0FBQztLQUNILE1BQU0sSUFBSSxDQUFDYixVQUFVLEVBQUU7WUFJdkJELElBQWU7UUFIZixJQUFJLElBQTZCLEVBQUU7WUFDbENNLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1NBQzVCO1FBQ0ROLENBQUFBLElBQWUsR0FBZkEsT0FBTyxDQUFDTyxPQUFPLGNBQWZQLElBQWUsV0FBSyxHQUFwQkEsS0FBQUEsQ0FBb0IsR0FBcEJBLFFBQUFBLElBQWUsQ0FBRyxDQUFDLENBQUMsZ0NBQXBCQSxLQUFBQSxDQUFvQixHQUFwQkEsS0FBc0JRLEtBQUssRUFBRSxDQUFDO1FBQzlCVixPQUFPLENBQUMsU0FBQ1csSUFBSSxFQUFLO1lBQ2pCLE9BQU8sd0tBQ0hBLElBQUk7Z0JBQ1BDLFlBQVksRUFBRSx3S0FDVlgsSUFBSSxDQUFDVyxZQUFZO29CQUNwQkssS0FBSyxFQUFFLEVBQUU7a0JBQ1Q7Y0FDRCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0tBQ0g7Q0FDRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2ludHJvZHVjZS92YWxpZEZvcm0uanM/NDIxMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGZvcm1hdCAqL1xuXG5leHBvcnQgY29uc3QgaGFuZGxlQ2xpY2sgPSAoXG5cdHNldEluZm8sXG5cdGluZm8sXG5cdGludXRSZWYsXG5cdHZhbGlkRW1haWwsXG5cdHZhbGlkR2VucmUsXG5cdHZhbGlkTmFtZSxcblx0dmFsaWRMb2dvLFxuXHR2YWxpZENvbG9yXG4pID0+IHtcblx0aWYgKHZhbGlkTmFtZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0YWxlcnQoJ+2UhOuhnOygne2KuCDsnbTrpoTsnYQg7J6F66Cl7ZW07KO87IS47JqULicpO1xuXHRcdH1cblx0XHQvLyBhbGVydCgn7ZSE66Gc7KCd7Yq4IOydtOumhOydhCDsnoXroKXtlbTso7zshLjsmpQuJyk7XG5cdFx0aW51dFJlZi5jdXJyZW50Py5bMF0/LmZvY3VzKCk7XG5cdFx0c2V0SW5mbygocHJldikgPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4ucHJldixcblx0XHRcdFx0cHJvamVjdF9pbmZvOiB7XG5cdFx0XHRcdFx0Li4uaW5mby5wcm9qZWN0X2luZm8sXG5cdFx0XHRcdFx0bmFtZTogJycsXG5cdFx0XHRcdH0sXG5cdFx0XHR9O1xuXHRcdH0pO1xuXHR9IGVsc2UgaWYgKHZhbGlkTG9nbykge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0YWxlcnQoJ+2UhOuhnOygne2KuCDroZzqs6Drpbwg7J6F66Cl7ZW07KO87IS47JqULicpO1xuXHRcdH1cblx0XHRpbnV0UmVmLmN1cnJlbnQ/LlsxXT8uZm9jdXMoKTtcblx0XHRzZXRJbmZvKChwcmV2KSA9PiB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5wcmV2LFxuXHRcdFx0XHRwcm9qZWN0X2luZm86IHtcblx0XHRcdFx0XHQuLi5pbmZvLnByb2plY3RfaW5mbyxcblx0XHRcdFx0XHRsb2dvOiAnJyxcblx0XHRcdFx0fSxcblx0XHRcdH07XG5cdFx0fSk7XG5cdH0gZWxzZSBpZiAodmFsaWRHZW5yZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0YWxlcnQoJ+2UhOuhnOygne2KuCDsnqXrpbTrpbwg7J6F66Cl7ZW07KO87IS47JqULicpO1xuXHRcdH1cblx0XHRpbnV0UmVmLmN1cnJlbnQ/LlsyXT8uZm9jdXMoKTtcblx0XHRzZXRJbmZvKChwcmV2KSA9PiB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5wcmV2LFxuXHRcdFx0XHRwcm9qZWN0X2luZm86IHtcblx0XHRcdFx0XHQuLi5pbmZvLnByb2plY3RfaW5mbyxcblx0XHRcdFx0XHRnZW5yZTogJycsXG5cdFx0XHRcdH0sXG5cdFx0XHR9O1xuXHRcdH0pO1xuXHR9IGVsc2UgaWYgKHZhbGlkQ29sb3IpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdGFsZXJ0KCftlITroZzsoJ3tirgg7IOJ7IOB7J2EIOyEoO2Dne2VtOyjvOyEuOyalC4nKTtcblx0XHR9XG5cdFx0aW51dFJlZi5jdXJyZW50Py5bM10/LmZvY3VzKCk7XG5cdFx0c2V0SW5mbygocHJldikgPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4ucHJldixcblx0XHRcdFx0cHJvamVjdF9pbmZvOiB7XG5cdFx0XHRcdFx0Li4uaW5mby5wcm9qZWN0X2luZm8sXG5cdFx0XHRcdFx0Y29sb3I6ICcnLFxuXHRcdFx0XHR9LFxuXHRcdFx0fTtcblx0XHR9KTtcblx0fSBlbHNlIGlmICghdmFsaWRFbWFpbCkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0YWxlcnQoJ+ycoO2aqO2VmOyngCDslYrsnYAgZW1haWwg7J6F64uI64ukLicpO1xuXHRcdH1cblx0XHRpbnV0UmVmLmN1cnJlbnQ/Lls0XT8uZm9jdXMoKTtcblx0XHRzZXRJbmZvKChwcmV2KSA9PiB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5wcmV2LFxuXHRcdFx0XHRwcm9qZWN0X2luZm86IHtcblx0XHRcdFx0XHQuLi5pbmZvLnByb2plY3RfaW5mbyxcblx0XHRcdFx0XHRlbWFpbDogJycsXG5cdFx0XHRcdH0sXG5cdFx0XHR9O1xuXHRcdH0pO1xuXHR9XG59O1xuIl0sIm5hbWVzIjpbImhhbmRsZUNsaWNrIiwic2V0SW5mbyIsImluZm8iLCJpbnV0UmVmIiwidmFsaWRFbWFpbCIsInZhbGlkR2VucmUiLCJ2YWxpZE5hbWUiLCJ2YWxpZExvZ28iLCJ2YWxpZENvbG9yIiwiYWxlcnQiLCJjdXJyZW50IiwiZm9jdXMiLCJwcmV2IiwicHJvamVjdF9pbmZvIiwibmFtZSIsImxvZ28iLCJnZW5yZSIsImNvbG9yIiwiZW1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/introduce/validForm.js\n"));

/***/ })

});