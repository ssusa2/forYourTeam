"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/introduce/[Intro]",{

/***/ "./pages/introduce/SeletGenre.js":
/*!***************************************!*\
  !*** ./pages/introduce/SeletGenre.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"../node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"../node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"../node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"../node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-select */ \"../node_modules/react-select/dist/react-select.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./pages/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"../node_modules/firebase/firestore/dist/index.esm.js\");\n/** @format */ \n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction SelectGenre(param) {\n    var setInfo = param.setInfo, info = param.info, genreRef = param.genreRef;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), genre = ref[0], setGenre = ref[1];\n    var fetchGenre = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(Intro) {\n            var genreRef, genreSnap;\n            return _Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        genreRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"genre\", \"appStore\");\n                        _ctx.next = 3;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(genreRef);\n                    case 3:\n                        genreSnap = _ctx.sent;\n                        // console.log(Intro);\n                        // const data = projectSnap.data();\n                        if (genreSnap.exists()) {\n                            // console.log('Document data:', projectSnap.data());\n                            setGenre(genreSnap.data());\n                        } else {\n                            console.log(\"No such document!\");\n                        }\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchGenre(Intro) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetchGenre();\n    }, []);\n    var genre_options = [];\n    var a = Object.entries(genre);\n    for(var i = 0; i < (a === null || a === void 0 ? void 0 : a.length); i++){\n        // for (let j = 0; j < a?.length; j++) {\n        var op = {};\n        op.value = a[i][0];\n        op.id = a[i][1];\n        op.label = a[i][0];\n        genre_options.push(op);\n    }\n    console.log(\"gggggg\", info.project_info.genre);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_select__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            value: info.project_info.genre || \"\",\n            // ref={(el) => (genreRef.current[2] = el)}\n            className: \"mt-1\",\n            placeholder: \"장르를 선택하세요\",\n            onChange: function(e) {\n                setInfo(function(prev) {\n                    return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, prev), {\n                        project_info: (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, info.project_info), {\n                            genre: e.value\n                        })\n                    });\n                });\n            },\n            options: genre_options\n        }, void 0, false, {\n            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/introduce/SeletGenre.js\",\n            lineNumber: 41,\n            columnNumber: 4\n        }, this)\n    }, void 0, false);\n}\n_s(SelectGenre, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = SelectGenre;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SelectGenre);\nvar _c;\n$RefreshReg$(_c, \"SelectGenre\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0g7WUFDRFUsT0FBTyxFQUFFakIsYUFBYTs7Ozs7Z0JBQ3JCO3FCQUNBLENBQ0Y7Q0FDRjtHQXREUWIsV0FBVztBQUFYQSxLQUFBQSxXQUFXO0FBd0RwQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2ludHJvZHVjZS9TZWxldEdlbnJlLmpzP2U2MDgiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBmb3JtYXQgKi9cbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0JztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vZmlyZWJhc2UnO1xuaW1wb3J0IHsgZ2V0RG9jLCBkb2MgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuXG5mdW5jdGlvbiBTZWxlY3RHZW5yZSh7IHNldEluZm8sIGluZm8sIGdlbnJlUmVmIH0pIHtcblx0Y29uc3QgW2dlbnJlLCBzZXRHZW5yZV0gPSB1c2VTdGF0ZShbXSk7XG5cblx0Y29uc3QgZmV0Y2hHZW5yZSA9IGFzeW5jIChJbnRybykgPT4ge1xuXHRcdGNvbnN0IGdlbnJlUmVmID0gZG9jKGRiLCAnZ2VucmUnLCAnYXBwU3RvcmUnKTtcblx0XHRjb25zdCBnZW5yZVNuYXAgPSBhd2FpdCBnZXREb2MoZ2VucmVSZWYpO1xuXHRcdC8vIGNvbnNvbGUubG9nKEludHJvKTtcblx0XHQvLyBjb25zdCBkYXRhID0gcHJvamVjdFNuYXAuZGF0YSgpO1xuXHRcdGlmIChnZW5yZVNuYXAuZXhpc3RzKCkpIHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdEb2N1bWVudCBkYXRhOicsIHByb2plY3RTbmFwLmRhdGEoKSk7XG5cdFx0XHRzZXRHZW5yZShnZW5yZVNuYXAuZGF0YSgpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ05vIHN1Y2ggZG9jdW1lbnQhJyk7XG5cdFx0fVxuXHR9O1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0ZmV0Y2hHZW5yZSgpO1xuXHR9LCBbXSk7XG5cblx0bGV0IGdlbnJlX29wdGlvbnMgPSBbXTtcblx0bGV0IGEgPSBPYmplY3QuZW50cmllcyhnZW5yZSk7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhPy5sZW5ndGg7IGkrKykge1xuXHRcdC8vIGZvciAobGV0IGogPSAwOyBqIDwgYT8ubGVuZ3RoOyBqKyspIHtcblx0XHRsZXQgb3AgPSB7fTtcblx0XHRvcC52YWx1ZSA9IGFbaV1bMF07XG5cdFx0b3AuaWQgPSBhW2ldWzFdO1xuXHRcdG9wLmxhYmVsID0gYVtpXVswXTtcblx0XHRnZW5yZV9vcHRpb25zLnB1c2gob3ApO1xuXHR9XG5cdGNvbnNvbGUubG9nKCdnZ2dnZ2cnLCBpbmZvLnByb2plY3RfaW5mby5nZW5yZSk7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxTZWxlY3Rcblx0XHRcdFx0dmFsdWU9e2luZm8ucHJvamVjdF9pbmZvLmdlbnJlIHx8ICcnfVxuXHRcdFx0XHQvLyByZWY9eyhlbCkgPT4gKGdlbnJlUmVmLmN1cnJlbnRbMl0gPSBlbCl9XG5cdFx0XHRcdGNsYXNzTmFtZT0nbXQtMSdcblx0XHRcdFx0cGxhY2Vob2xkZXI9J+yepeultOulvCDshKDtg53tlZjshLjsmpQnXG5cdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xuXHRcdFx0XHRcdHNldEluZm8oKHByZXYpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdC4uLnByZXYsXG5cdFx0XHRcdFx0XHRcdHByb2plY3RfaW5mbzoge1xuXHRcdFx0XHRcdFx0XHRcdC4uLmluZm8ucHJvamVjdF9pbmZvLFxuXHRcdFx0XHRcdFx0XHRcdGdlbnJlOiBlLnZhbHVlLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fX1cblx0XHRcdFx0b3B0aW9ucz17Z2VucmVfb3B0aW9uc31cblx0XHRcdC8+XG5cdFx0PC8+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdEdlbnJlO1xuIl0sIm5hbWVzIjpbIlNlbGVjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiZGIiLCJnZXREb2MiLCJkb2MiLCJTZWxlY3RHZW5yZSIsInNldEluZm8iLCJpbmZvIiwiZ2VucmVSZWYiLCJnZW5yZSIsInNldEdlbnJlIiwiZmV0Y2hHZW5yZSIsIkludHJvIiwiZ2VucmVTbmFwIiwiZXhpc3RzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJnZW5yZV9vcHRpb25zIiwiYSIsIk9iamVjdCIsImVudHJpZXMiLCJpIiwibGVuZ3RoIiwib3AiLCJ2YWx1ZSIsImlkIiwibGFiZWwiLCJwdXNoIiwicHJvamVjdF9pbmZvIiwiY2xhc3NOYW1lIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJwcmV2Iiwib3B0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/introduce/SeletGenre.js\n"));

/***/ })

});