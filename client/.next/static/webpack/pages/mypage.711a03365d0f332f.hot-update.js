"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/mypage",{

/***/ "./pages/project/ProjectList.js":
/*!**************************************!*\
  !*** ./pages/project/ProjectList.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"../node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/** @format */ \n\n\nfunction ProjectList(param) {\n    var projects = param.projects;\n    var _this = this;\n    console.log(\"projects\", projects);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-7xl\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"sr-only\",\n                        children: \"Products\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                        lineNumber: 12,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8\",\n                        children: projects.map(function(project) {\n                            var id = project.id, _info = project.info, _project_info = _info.project_info, name = _project_info.name, genre = _project_info.genre, logo_image = _project_info.logo_image, teamInfo = project.teamInfo;\n                            // console.log(project_info);\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"group relative\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"absolute font-semibold p-1 right-2 top-2 cursor-pointer text-green-700 rounded-full main-hover z-50\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                            fill: \"none\",\n                                            viewBox: \"0 0 24 24\",\n                                            strokeWidth: 2,\n                                            stroke: \"currentColor\",\n                                            className: \"w-4 h-4\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                strokeLinecap: \"round\",\n                                                strokeLinejoin: \"round\",\n                                                d: \"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                                lineNumber: 34,\n                                                columnNumber: 12\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                            lineNumber: 26,\n                                            columnNumber: 11\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                        lineNumber: 25,\n                                        columnNumber: 10\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/project/[intro]\",\n                                        as: \"/project/\".concat(name),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center justify-center aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8\",\n                                            children: logo_image ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: logo_image,\n                                                alt: logo_image,\n                                                className: \"w-full aspect-video object-cover object-center group-hover:opacity-75\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                                lineNumber: 44,\n                                                columnNumber: 13\n                                            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"font-extrabold w-full aspect-video group-hover:opacity-75\",\n                                                children: name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                                lineNumber: 50,\n                                                columnNumber: 13\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                            lineNumber: 42,\n                                            columnNumber: 11\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 10\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \" mt-4 flex justify-between items-center \",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \" text-lg font-bold text-gray-700\",\n                                                children: name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                                lineNumber: 58,\n                                                columnNumber: 11\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \" text-sm text-gray-900\",\n                                                children: genre\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                                lineNumber: 59,\n                                                columnNumber: 11\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 10\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: teamInfo.intro.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 10\n                                    }, _this)\n                                ]\n                            }, id, true, {\n                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                lineNumber: 24,\n                                columnNumber: 9\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                        lineNumber: 13,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                lineNumber: 11,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n            lineNumber: 10,\n            columnNumber: 4\n        }, this)\n    }, void 0, false);\n}\n_c = ProjectList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectList);\nvar _c;\n$RefreshReg$(_c, \"ProjectList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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anM/NGQ0NyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGZvcm1hdCAqL1xuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5mdW5jdGlvbiBQcm9qZWN0TGlzdCh7IHByb2plY3RzIH0pIHtcblx0Y29uc29sZS5sb2coJ3Byb2plY3RzJywgcHJvamVjdHMpO1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYmctd2hpdGUnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbXgtYXV0byBtYXgtdy0yeGwgcHktMTYgc206cHktMjQgIGxnOm1heC13LTd4bCc+XG5cdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT0nc3Itb25seSc+UHJvZHVjdHM8L2gyPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0xIGdhcC15LTEwIGdhcC14LTYgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTQgeGw6Z2FwLXgtOCc+XG5cdFx0XHRcdFx0XHR7cHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHtcblx0XHRcdFx0XHRcdFx0XHRpZCxcblx0XHRcdFx0XHRcdFx0XHRpbmZvOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwcm9qZWN0X2luZm86IHsgbmFtZSwgZ2VucmUsIGxvZ29faW1hZ2UgfSxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdHRlYW1JbmZvLFxuXHRcdFx0XHRcdFx0XHR9ID0gcHJvamVjdDtcblx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2cocHJvamVjdF9pbmZvKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGtleT17aWR9IGNsYXNzTmFtZT0nZ3JvdXAgcmVsYXRpdmUnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9J2Fic29sdXRlIGZvbnQtc2VtaWJvbGQgcC0xIHJpZ2h0LTIgdG9wLTIgY3Vyc29yLXBvaW50ZXIgdGV4dC1ncmVlbi03MDAgcm91bmRlZC1mdWxsIG1haW4taG92ZXIgei01MCc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzdmdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD0nbm9uZSdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2aWV3Qm94PScwIDAgMjQgMjQnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3Ryb2tlV2lkdGg9ezJ9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3Ryb2tlPSdjdXJyZW50Q29sb3InXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSd3LTQgaC00J1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0cm9rZUxpbmVjYXA9J3JvdW5kJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3Ryb2tlTGluZWpvaW49J3JvdW5kJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZD0nTTE2Ljg2MiA0LjQ4N2wxLjY4Ny0xLjY4OGExLjg3NSAxLjg3NSAwIDExMi42NTIgMi42NTJMNi44MzIgMTkuODJhNC41IDQuNSAwIDAxLTEuODk3IDEuMTNsLTIuNjg1LjguOC0yLjY4NWE0LjUgNC41IDAgMDExLjEzLTEuODk3TDE2Ljg2MyA0LjQ4N3ptMCAwTDE5LjUgNy4xMjUnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9wcm9qZWN0L1tpbnRyb10nIGFzPXtgL3Byb2plY3QvJHtuYW1lfWB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYXNwZWN0LXctMSBhc3BlY3QtaC0xIHctZnVsbCBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1sZyBiZy1ncmF5LTIwMCB4bDphc3BlY3Qtdy03IHhsOmFzcGVjdC1oLTgnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtsb2dvX2ltYWdlID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2xvZ29faW1hZ2V9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD17bG9nb19pbWFnZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSd3LWZ1bGwgYXNwZWN0LXZpZGVvIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIGdyb3VwLWhvdmVyOm9wYWNpdHktNzUnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2ZvbnQtZXh0cmFib2xkICB3LWZ1bGwgYXNwZWN0LXZpZGVvIGdyb3VwLWhvdmVyOm9wYWNpdHktNzUnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7bmFtZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9JyBtdC00IGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclx0Jz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT0nIHRleHQtbGcgZm9udC1ib2xkIHRleHQtZ3JheS03MDAnPntuYW1lfTwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nIHRleHQtc20gIHRleHQtZ3JheS05MDAnPntnZW5yZX08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwPnt0ZWFtSW5mby5pbnRyby5uYW1lfTwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0TGlzdDtcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUm91dGVyIiwiUHJvamVjdExpc3QiLCJwcm9qZWN0cyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsIm1hcCIsInByb2plY3QiLCJpZCIsImluZm8iLCJwcm9qZWN0X2luZm8iLCJuYW1lIiwiZ2VucmUiLCJsb2dvX2ltYWdlIiwidGVhbUluZm8iLCJidXR0b24iLCJzdmciLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94Iiwic3Ryb2tlV2lkdGgiLCJzdHJva2UiLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwiZCIsImhyZWYiLCJhcyIsImltZyIsInNyYyIsImFsdCIsInAiLCJoMyIsImludHJvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/project/ProjectList.js\n"));

/***/ })

});