"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/project",{

/***/ "./pages/project/ProjectList.js":
/*!**************************************!*\
  !*** ./pages/project/ProjectList.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"../node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Icon/Icon */ \"./components/Icon/Icon.js\");\n/** @format */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ProjectList(param) {\n    var projects = param.projects;\n    var _this = this;\n    _s();\n    var userInfo = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(param) {\n        var user = param.user;\n        return user.uid;\n    });\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(projects);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto max-w-2xl py-16 sm:py-16 lg:max-w-7xl\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"sr-only\",\n                        children: \"Products\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                        lineNumber: 18,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8\",\n                        children: projects.map(function(project) {\n                            var uid = project.uid, id = project.id, info = project.info, teamInfo = project.teamInfo;\n                            // console.log(project_info);\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                uid: uid,\n                                className: \"group relative\",\n                                children: [\n                                    userInfo == uid && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: function() {\n                                            return router.push(\"/introduce/\".concat(info === null || info === void 0 ? void 0 : info.project_info.name));\n                                        },\n                                        className: \"absolute font-semibold p-1 right-2 top-2 cursor-pointer text-green-700 rounded-full main-hover z-20\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__.Edit, {}, void 0, false, {\n                                            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                            lineNumber: 32,\n                                            columnNumber: 12\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                        lineNumber: 26,\n                                        columnNumber: 11\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/project/[intro]\",\n                                        as: \"/project/\".concat(info === null || info === void 0 ? void 0 : info.project_info.name),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            target: \"/project/\".concat(info === null || info === void 0 ? void 0 : info.project_info.name),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \" aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8\",\n                                                children: (info === null || info === void 0 ? void 0 : info.project_info.logo_image) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: info === null || info === void 0 ? void 0 : info.project_info.logo_image,\n                                                    alt: info === null || info === void 0 ? void 0 : info.project_info.logo_image,\n                                                    className: \"w-full aspect-video object-cover object-center group-hover:opacity-75\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                                    lineNumber: 42,\n                                                    columnNumber: 14\n                                                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \" flex justify-center items-center w-full aspect-video object-cover object-center group-hover:opacity-75\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \" h-4 inline-block font-extrabold group-hover:opacity-75\",\n                                                        children: info === null || info === void 0 ? void 0 : info.project_info.name\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                                        lineNumber: 49,\n                                                        columnNumber: 15\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                                    lineNumber: 48,\n                                                    columnNumber: 14\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                                lineNumber: 40,\n                                                columnNumber: 12\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                            lineNumber: 39,\n                                            columnNumber: 11\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 10\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \" mt-4 flex justify-between items-center \",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \" text-lg font-bold text-gray-700\",\n                                                children: info === null || info === void 0 ? void 0 : info.project_info.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                                lineNumber: 59,\n                                                columnNumber: 11\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \" text-sm text-gray-900 font-medium border-2 border-green-700\",\n                                                children: info === null || info === void 0 ? void 0 : info.project_info.genre\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                                lineNumber: 62,\n                                                columnNumber: 11\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 10\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: teamInfo === null || teamInfo === void 0 ? void 0 : teamInfo.intro.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 10\n                                    }, _this)\n                                ]\n                            }, id, true, {\n                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                lineNumber: 24,\n                                columnNumber: 9\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                        lineNumber: 19,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                lineNumber: 17,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n            lineNumber: 16,\n            columnNumber: 4\n        }, this)\n    }, void 0, false);\n}\n_s(ProjectList, \"C3iBBRj7YqDBS/avt21dojdBZ74=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ProjectList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectList);\nvar _c;\n$RefreshReg$(_c, \"ProjectList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFDdkgsNEVBQUNvQixHQUFDO3dEQUFDcEIsU0FBUyxFQUFDLHlEQUF5RDtrRUFDcEVLLElBQUksYUFBSkEsSUFBSSxXQUFjLEdBQWxCQSxLQUFBQSxDQUFrQixHQUFsQkEsSUFBSSxDQUFFSyxZQUFZLENBQUNDLElBQUk7Ozs7OzZEQUNyQjs7Ozs7eURBQ0M7Ozs7O3FEQUVGOzs7OztpREFDSDs7Ozs7NkNBQ0U7a0RBRVAsOERBQUNaLEtBQUc7d0NBQUNDLFNBQVMsRUFBQywwQ0FBMEM7OzBEQUN4RCw4REFBQ3FCLElBQUU7Z0RBQUNyQixTQUFTLEVBQUMsa0NBQWtDOzBEQUM5Q0ssSUFBSSxhQUFKQSxJQUFJLFdBQWMsR0FBbEJBLEtBQUFBLENBQWtCLEdBQWxCQSxJQUFJLENBQUVLLFlBQVksQ0FBQ0MsSUFBSTs7Ozs7cURBQ3BCOzBEQUNMLDhEQUFDWixLQUFHO2dEQUFDQyxTQUFTLEVBQUMsOERBQStEOzBEQUM1RUssSUFBSSxhQUFKQSxJQUFJLFdBQWMsR0FBbEJBLEtBQUFBLENBQWtCLEdBQWxCQSxJQUFJLENBQUVLLFlBQVksQ0FBQ1ksS0FBSzs7Ozs7cURBQ3BCOzs7Ozs7NkNBQ0Q7a0RBQ04sOERBQUNGLEdBQUM7a0RBQUVkLFFBQVEsYUFBUkEsUUFBUSxXQUFPLEdBQWZBLEtBQUFBLENBQWUsR0FBZkEsUUFBUSxDQUFFaUIsS0FBSyxDQUFDWixJQUFJOzs7Ozs2Q0FBSzs7K0JBMUNwQlAsRUFBRTs7OztxQ0EyQ04sQ0FDTDt5QkFDRixDQUFDOzs7Ozs0QkFDRzs7Ozs7O29CQUNEOzs7OztnQkFDRDtxQkFDSixDQUNGO0NBQ0Y7R0FsRVFiLFdBQVc7O1FBQ0ZKLG9EQUFXO1FBQ2JELGtEQUFTOzs7QUFGaEJLLEtBQUFBLFdBQVc7QUFvRXBCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdC9Qcm9qZWN0TGlzdC5qcz80ZDQ3Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAZm9ybWF0ICovXG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IEVkaXQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ljb24vSWNvbic7XG5cbmZ1bmN0aW9uIFByb2plY3RMaXN0KHsgcHJvamVjdHMgfSkge1xuXHRjb25zdCB1c2VySW5mbyA9IHVzZVNlbGVjdG9yKCh7IHVzZXIgfSkgPT4gdXNlci51aWQpO1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuXHRjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdiZy13aGl0ZSc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdteC1hdXRvIG1heC13LTJ4bCBweS0xNiBzbTpweS0xNiAgbGc6bWF4LXctN3hsJz5cblx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSdzci1vbmx5Jz5Qcm9kdWN0czwvaDI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTEgZ2FwLXktMTAgZ2FwLXgtNiBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyB4bDpncmlkLWNvbHMtNCB4bDpnYXAteC04Jz5cblx0XHRcdFx0XHRcdHtwcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgeyB1aWQsIGlkLCBpbmZvLCB0ZWFtSW5mbyB9ID0gcHJvamVjdDtcblx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2cocHJvamVjdF9pbmZvKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGtleT17aWR9IHVpZD17dWlkfSBjbGFzc05hbWU9J2dyb3VwIHJlbGF0aXZlJz5cblx0XHRcdFx0XHRcdFx0XHRcdHt1c2VySW5mbyA9PSB1aWQgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJvdXRlci5wdXNoKGAvaW50cm9kdWNlLyR7aW5mbz8ucHJvamVjdF9pbmZvLm5hbWV9YClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdhYnNvbHV0ZSBmb250LXNlbWlib2xkIHAtMSByaWdodC0yIHRvcC0yIGN1cnNvci1wb2ludGVyIHRleHQtZ3JlZW4tNzAwIHJvdW5kZWQtZnVsbCBtYWluLWhvdmVyIHotMjAnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8RWRpdCAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRocmVmPScvcHJvamVjdC9baW50cm9dJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRhcz17YC9wcm9qZWN0LyR7aW5mbz8ucHJvamVjdF9pbmZvLm5hbWV9YH1cblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgdGFyZ2V0PXtgL3Byb2plY3QvJHtpbmZvPy5wcm9qZWN0X2luZm8ubmFtZX1gfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nIGFzcGVjdC13LTEgYXNwZWN0LWgtMSB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGcgYmctZ3JheS0yMDAgeGw6YXNwZWN0LXctNyB4bDphc3BlY3QtaC04Jz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtpbmZvPy5wcm9qZWN0X2luZm8ubG9nb19pbWFnZSA/IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17aW5mbz8ucHJvamVjdF9pbmZvLmxvZ29faW1hZ2V9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PXtpbmZvPy5wcm9qZWN0X2luZm8ubG9nb19pbWFnZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3ctZnVsbCBhc3BlY3QtdmlkZW8gb2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXIgZ3JvdXAtaG92ZXI6b3BhY2l0eS03NSdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPScgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsIGFzcGVjdC12aWRlbyBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlciBncm91cC1ob3ZlcjpvcGFjaXR5LTc1Jz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9JyBoLTQgaW5saW5lLWJsb2NrIGZvbnQtZXh0cmFib2xkIGdyb3VwLWhvdmVyOm9wYWNpdHktNzUnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2luZm8/LnByb2plY3RfaW5mby5uYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPScgbXQtNCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcdCc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9JyB0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7aW5mbz8ucHJvamVjdF9pbmZvLm5hbWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPScgdGV4dC1zbSAgdGV4dC1ncmF5LTkwMCBmb250LW1lZGl1bSBib3JkZXItMiBib3JkZXItZ3JlZW4tNzAwJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7aW5mbz8ucHJvamVjdF9pbmZvLmdlbnJlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+e3RlYW1JbmZvPy5pbnRyby5uYW1lfTwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0TGlzdDtcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUm91dGVyIiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsInN0eWxlZCIsIkVkaXQiLCJQcm9qZWN0TGlzdCIsInByb2plY3RzIiwidXNlckluZm8iLCJ1c2VyIiwidWlkIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwibWFwIiwicHJvamVjdCIsImlkIiwiaW5mbyIsInRlYW1JbmZvIiwiYnV0dG9uIiwib25DbGljayIsInB1c2giLCJwcm9qZWN0X2luZm8iLCJuYW1lIiwiaHJlZiIsImFzIiwiYSIsInRhcmdldCIsImxvZ29faW1hZ2UiLCJpbWciLCJzcmMiLCJhbHQiLCJwIiwiaDMiLCJnZW5yZSIsImludHJvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/project/ProjectList.js\n"));

/***/ })

});