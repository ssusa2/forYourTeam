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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"../node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/** @format */ \n\n\nfunction ProjectList(param) {\n    var projects = param.projects;\n    var _this = this;\n    console.log(\"projects\", projects);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-7xl\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"sr-only\",\n                        children: \"Products\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                        lineNumber: 12,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8\",\n                        children: projects.map(function(project) {\n                            var id = project.id, _info = project.info, _project_info = _info.project_info, name = _project_info.name, genre = _project_info.genre, logo_image = _project_info.logo_image, teamInfo = project.teamInfo;\n                            // console.log(project_info);\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"group relative\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"absolute font-semibold p-1 right-2 top-2 cursor-pointer text-green-700 rounded-full main-hover z-50\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                            fill: \"none\",\n                                            viewBox: \"0 0 24 24\",\n                                            strokeWidth: 1.5,\n                                            stroke: \"currentColor\",\n                                            className: \"w-4 h-4\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                strokeLinecap: \"round\",\n                                                strokeLinejoin: \"round\",\n                                                d: \"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                                lineNumber: 34,\n                                                columnNumber: 12\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                            lineNumber: 26,\n                                            columnNumber: 11\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                        lineNumber: 25,\n                                        columnNumber: 10\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/project/[intro]\",\n                                        as: \"/project/\".concat(name),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \" aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8\",\n                                            children: logo_image ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: logo_image,\n                                                alt: logo_image,\n                                                className: \"w-full aspect-video object-cover object-center group-hover:opacity-75\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                                lineNumber: 44,\n                                                columnNumber: 13\n                                            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"font-extrabold text-center pt-[4.5rem] w-full aspect-video group-hover:opacity-75\",\n                                                children: name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                                lineNumber: 50,\n                                                columnNumber: 13\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                            lineNumber: 42,\n                                            columnNumber: 11\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 10\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \" mt-4 flex justify-between items-center \",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \" text-lg font-bold text-gray-700\",\n                                                children: name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                                lineNumber: 58,\n                                                columnNumber: 11\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \" text-sm text-gray-900\",\n                                                children: genre\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                                lineNumber: 59,\n                                                columnNumber: 11\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 10\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: teamInfo.intro.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 10\n                                    }, _this)\n                                ]\n                            }, id, true, {\n                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                lineNumber: 24,\n                                columnNumber: 9\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                        lineNumber: 13,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                lineNumber: 11,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n            lineNumber: 10,\n            columnNumber: 4\n        }, this)\n    }, void 0, false);\n}\n_c = ProjectList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectList);\nvar _c;\n$RefreshReg$(_c, \"ProjectList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cz80ZDQ3Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAZm9ybWF0ICovXG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmZ1bmN0aW9uIFByb2plY3RMaXN0KHsgcHJvamVjdHMgfSkge1xuXHRjb25zb2xlLmxvZygncHJvamVjdHMnLCBwcm9qZWN0cyk7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdiZy13aGl0ZSc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdteC1hdXRvIG1heC13LTJ4bCBweS0xNiBzbTpweS0yNCAgbGc6bWF4LXctN3hsJz5cblx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSdzci1vbmx5Jz5Qcm9kdWN0czwvaDI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTEgZ2FwLXktMTAgZ2FwLXgtNiBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyB4bDpncmlkLWNvbHMtNCB4bDpnYXAteC04Jz5cblx0XHRcdFx0XHRcdHtwcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IHtcblx0XHRcdFx0XHRcdFx0Y29uc3Qge1xuXHRcdFx0XHRcdFx0XHRcdGlkLFxuXHRcdFx0XHRcdFx0XHRcdGluZm86IHtcblx0XHRcdFx0XHRcdFx0XHRcdHByb2plY3RfaW5mbzogeyBuYW1lLCBnZW5yZSwgbG9nb19pbWFnZSB9LFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0dGVhbUluZm8sXG5cdFx0XHRcdFx0XHRcdH0gPSBwcm9qZWN0O1xuXHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhwcm9qZWN0X2luZm8pO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdDxkaXYga2V5PXtpZH0gY2xhc3NOYW1lPSdncm91cCByZWxhdGl2ZSc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT0nYWJzb2x1dGUgZm9udC1zZW1pYm9sZCBwLTEgcmlnaHQtMiB0b3AtMiBjdXJzb3ItcG9pbnRlciB0ZXh0LWdyZWVuLTcwMCByb3VuZGVkLWZ1bGwgbWFpbi1ob3ZlciB6LTUwJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHN2Z1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsPSdub25lJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZpZXdCb3g9JzAgMCAyNCAyNCdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHJva2VXaWR0aD17MS41fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0cm9rZT0nY3VycmVudENvbG9yJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ndy00IGgtNCdcblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHJva2VMaW5lY2FwPSdyb3VuZCdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0cm9rZUxpbmVqb2luPSdyb3VuZCdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGQ9J00xNi44NjIgNC40ODdsMS42ODctMS42ODhhMS44NzUgMS44NzUgMCAxMTIuNjUyIDIuNjUyTDEwLjU4MiAxNi4wN2E0LjUgNC41IDAgMDEtMS44OTcgMS4xM0w2IDE4bC44LTIuNjg1YTQuNSA0LjUgMCAwMTEuMTMtMS44OTdsOC45MzItOC45MzF6bTAgMEwxOS41IDcuMTI1TTE4IDE0djQuNzVBMi4yNSAyLjI1IDAgMDExNS43NSAyMUg1LjI1QTIuMjUgMi4yNSAwIDAxMyAxOC43NVY4LjI1QTIuMjUgMi4yNSAwIDAxNS4yNSA2SDEwJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvcHJvamVjdC9baW50cm9dJyBhcz17YC9wcm9qZWN0LyR7bmFtZX1gfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9JyBhc3BlY3Qtdy0xIGFzcGVjdC1oLTEgdy1mdWxsIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWxnIGJnLWdyYXktMjAwIHhsOmFzcGVjdC13LTcgeGw6YXNwZWN0LWgtOCc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2xvZ29faW1hZ2UgPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17bG9nb19pbWFnZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PXtsb2dvX2ltYWdlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3ctZnVsbCBhc3BlY3QtdmlkZW8gb2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXIgZ3JvdXAtaG92ZXI6b3BhY2l0eS03NSdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb250LWV4dHJhYm9sZCB0ZXh0LWNlbnRlciBwdC1bNC41cmVtXSB3LWZ1bGwgYXNwZWN0LXZpZGVvIGdyb3VwLWhvdmVyOm9wYWNpdHktNzUnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7bmFtZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nIG10LTQgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXHQnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPScgdGV4dC1sZyBmb250LWJvbGQgdGV4dC1ncmF5LTcwMCc+e25hbWV9PC9oMz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPScgdGV4dC1zbSAgdGV4dC1ncmF5LTkwMCc+e2dlbnJlfTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+e3RlYW1JbmZvLmludHJvLm5hbWV9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RMaXN0O1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJQcm9qZWN0TGlzdCIsInByb2plY3RzIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwibWFwIiwicHJvamVjdCIsImlkIiwiaW5mbyIsInByb2plY3RfaW5mbyIsIm5hbWUiLCJnZW5yZSIsImxvZ29faW1hZ2UiLCJ0ZWFtSW5mbyIsImJ1dHRvbiIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2VXaWR0aCIsInN0cm9rZSIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJkIiwiaHJlZiIsImFzIiwiaW1nIiwic3JjIiwiYWx0IiwiaDMiLCJwIiwiaW50cm8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/project/ProjectList.js\n"));

/***/ })

});