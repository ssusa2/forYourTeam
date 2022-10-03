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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"../node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Icon/Icon */ \"./components/Icon/Icon.js\");\n/** @format */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ProjectList(param) {\n    var projects = param.projects;\n    var _this = this;\n    _s();\n    var userInfo = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(param) {\n        var user = param.user;\n        return user.uid;\n    });\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(projects);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-7xl\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"sr-only\",\n                        children: \"Products\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                        lineNumber: 18,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8\",\n                        children: projects.map(function(project) {\n                            var uid = project.uid, id = project.id, info = project.info, teamInfo = project.teamInfo;\n                            // console.log(project_info);\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                uid: uid,\n                                className: \"group relative\",\n                                children: [\n                                    userInfo == uid && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: function() {\n                                            return router.push(\"/introduce/\".concat(info === null || info === void 0 ? void 0 : info.project_info.name));\n                                        },\n                                        className: \"absolute font-semibold p-1 right-2 top-2 cursor-pointer text-green-700 rounded-full main-hover z-20\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__.Edit, {}, void 0, false, {\n                                            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                            lineNumber: 32,\n                                            columnNumber: 12\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                        lineNumber: 26,\n                                        columnNumber: 11\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/project/[intro]\",\n                                        as: \"/project/\".concat(info === null || info === void 0 ? void 0 : info.project_info.name),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            target: \"/project/\".concat(info === null || info === void 0 ? void 0 : info.project_info.name),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \" aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8\",\n                                                children: (info === null || info === void 0 ? void 0 : info.project_info.logo_image) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: info === null || info === void 0 ? void 0 : info.project_info.logo_image,\n                                                    alt: info === null || info === void 0 ? void 0 : info.project_info.logo_image,\n                                                    className: \"w-full aspect-video object-cover object-center group-hover:opacity-75\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                                    lineNumber: 42,\n                                                    columnNumber: 14\n                                                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \" flex justify-center items-center w-full aspect-video object-cover object-center group-hover:opacity-75\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \" h-4 inline-block font-extrabold group-hover:opacity-75\",\n                                                        children: info === null || info === void 0 ? void 0 : info.project_info.name\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                                        lineNumber: 49,\n                                                        columnNumber: 15\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                                    lineNumber: 48,\n                                                    columnNumber: 14\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                                lineNumber: 40,\n                                                columnNumber: 12\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                            lineNumber: 39,\n                                            columnNumber: 11\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 10\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \" mt-4 flex justify-between items-center \",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \" text-lg font-bold text-gray-700\",\n                                                children: info === null || info === void 0 ? void 0 : info.project_info.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                                lineNumber: 59,\n                                                columnNumber: 11\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \" text-sm text-gray-900 font-medium border-2 border-green-500\",\n                                                children: info === null || info === void 0 ? void 0 : info.project_info.genre\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                                lineNumber: 62,\n                                                columnNumber: 11\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 10\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: teamInfo === null || teamInfo === void 0 ? void 0 : teamInfo.intro.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 10\n                                    }, _this)\n                                ]\n                            }, id, true, {\n                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                                lineNumber: 24,\n                                columnNumber: 9\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                        lineNumber: 19,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n                lineNumber: 17,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/ProjectList.js\",\n            lineNumber: 16,\n            columnNumber: 4\n        }, this)\n    }, void 0, false);\n}\n_s(ProjectList, \"C3iBBRj7YqDBS/avt21dojdBZ74=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ProjectList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectList);\nvar _c;\n$RefreshReg$(_c, \"ProjectList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFDdkgsNEVBQUNvQixHQUFDO3dEQUFDcEIsU0FBUyxFQUFDLHlEQUF5RDtrRUFDcEVLLElBQUksYUFBSkEsSUFBSSxXQUFjLEdBQWxCQSxLQUFBQSxDQUFrQixHQUFsQkEsSUFBSSxDQUFFSyxZQUFZLENBQUNDLElBQUk7Ozs7OzZEQUNyQjs7Ozs7eURBQ0M7Ozs7O3FEQUVGOzs7OztpREFDSDs7Ozs7NkNBQ0U7a0RBRVAsOERBQUNaLEtBQUc7d0NBQUNDLFNBQVMsRUFBQywwQ0FBMEM7OzBEQUN4RCw4REFBQ3FCLElBQUU7Z0RBQUNyQixTQUFTLEVBQUMsa0NBQWtDOzBEQUM5Q0ssSUFBSSxhQUFKQSxJQUFJLFdBQWMsR0FBbEJBLEtBQUFBLENBQWtCLEdBQWxCQSxJQUFJLENBQUVLLFlBQVksQ0FBQ0MsSUFBSTs7Ozs7cURBQ3BCOzBEQUNMLDhEQUFDUyxHQUFDO2dEQUFDcEIsU0FBUyxFQUFDLDhEQUErRDswREFDMUVLLElBQUksYUFBSkEsSUFBSSxXQUFjLEdBQWxCQSxLQUFBQSxDQUFrQixHQUFsQkEsSUFBSSxDQUFFSyxZQUFZLENBQUNZLEtBQUs7Ozs7O3FEQUN0Qjs7Ozs7OzZDQUNDO2tEQUNOLDhEQUFDRixHQUFDO2tEQUFFZCxRQUFRLGFBQVJBLFFBQVEsV0FBTyxHQUFmQSxLQUFBQSxDQUFlLEdBQWZBLFFBQVEsQ0FBRWlCLEtBQUssQ0FBQ1osSUFBSTs7Ozs7NkNBQUs7OytCQTFDcEJQLEVBQUU7Ozs7cUNBMkNOLENBQ0w7eUJBQ0YsQ0FBQzs7Ozs7NEJBQ0c7Ozs7OztvQkFDRDs7Ozs7Z0JBQ0Q7cUJBQ0osQ0FDRjtDQUNGO0dBbEVRYixXQUFXOztRQUNGSixvREFBVztRQUNiRCxrREFBUzs7O0FBRmhCSyxLQUFBQSxXQUFXO0FBb0VwQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2plY3QvUHJvamVjdExpc3QuanM/NGQ0NyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGZvcm1hdCAqL1xuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBFZGl0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9JY29uL0ljb24nO1xuXG5mdW5jdGlvbiBQcm9qZWN0TGlzdCh7IHByb2plY3RzIH0pIHtcblx0Y29uc3QgdXNlckluZm8gPSB1c2VTZWxlY3RvcigoeyB1c2VyIH0pID0+IHVzZXIudWlkKTtcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cblx0Y29uc29sZS5sb2cocHJvamVjdHMpO1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYmctd2hpdGUnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbXgtYXV0byBtYXgtdy0yeGwgcHktMTYgc206cHktMjQgIGxnOm1heC13LTd4bCc+XG5cdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT0nc3Itb25seSc+UHJvZHVjdHM8L2gyPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0xIGdhcC15LTEwIGdhcC14LTYgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTQgeGw6Z2FwLXgtOCc+XG5cdFx0XHRcdFx0XHR7cHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHsgdWlkLCBpZCwgaW5mbywgdGVhbUluZm8gfSA9IHByb2plY3Q7XG5cdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHByb2plY3RfaW5mbyk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBrZXk9e2lkfSB1aWQ9e3VpZH0gY2xhc3NOYW1lPSdncm91cCByZWxhdGl2ZSc+XG5cdFx0XHRcdFx0XHRcdFx0XHR7dXNlckluZm8gPT0gdWlkICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyb3V0ZXIucHVzaChgL2ludHJvZHVjZS8ke2luZm8/LnByb2plY3RfaW5mby5uYW1lfWApXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nYWJzb2x1dGUgZm9udC1zZW1pYm9sZCBwLTEgcmlnaHQtMiB0b3AtMiBjdXJzb3ItcG9pbnRlciB0ZXh0LWdyZWVuLTcwMCByb3VuZGVkLWZ1bGwgbWFpbi1ob3ZlciB6LTIwJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEVkaXQgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aHJlZj0nL3Byb2plY3QvW2ludHJvXSdcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXM9e2AvcHJvamVjdC8ke2luZm8/LnByb2plY3RfaW5mby5uYW1lfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIHRhcmdldD17YC9wcm9qZWN0LyR7aW5mbz8ucHJvamVjdF9pbmZvLm5hbWV9YH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9JyBhc3BlY3Qtdy0xIGFzcGVjdC1oLTEgdy1mdWxsIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWxnIGJnLWdyYXktMjAwIHhsOmFzcGVjdC13LTcgeGw6YXNwZWN0LWgtOCc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7aW5mbz8ucHJvamVjdF9pbmZvLmxvZ29faW1hZ2UgPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2luZm8/LnByb2plY3RfaW5mby5sb2dvX2ltYWdlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD17aW5mbz8ucHJvamVjdF9pbmZvLmxvZ29faW1hZ2V9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSd3LWZ1bGwgYXNwZWN0LXZpZGVvIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIGdyb3VwLWhvdmVyOm9wYWNpdHktNzUnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbCBhc3BlY3QtdmlkZW8gb2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXIgZ3JvdXAtaG92ZXI6b3BhY2l0eS03NSc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPScgaC00IGlubGluZS1ibG9jayBmb250LWV4dHJhYm9sZCBncm91cC1ob3ZlcjpvcGFjaXR5LTc1Jz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtpbmZvPy5wcm9qZWN0X2luZm8ubmFtZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nIG10LTQgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXHQnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPScgdGV4dC1sZyBmb250LWJvbGQgdGV4dC1ncmF5LTcwMCc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2luZm8/LnByb2plY3RfaW5mby5uYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2gzPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9JyB0ZXh0LXNtICB0ZXh0LWdyYXktOTAwIGZvbnQtbWVkaXVtIGJvcmRlci0yIGJvcmRlci1ncmVlbi01MDAnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtpbmZvPy5wcm9qZWN0X2luZm8uZ2VucmV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+e3RlYW1JbmZvPy5pbnRyby5uYW1lfTwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0TGlzdDtcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUm91dGVyIiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsInN0eWxlZCIsIkVkaXQiLCJQcm9qZWN0TGlzdCIsInByb2plY3RzIiwidXNlckluZm8iLCJ1c2VyIiwidWlkIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwibWFwIiwicHJvamVjdCIsImlkIiwiaW5mbyIsInRlYW1JbmZvIiwiYnV0dG9uIiwib25DbGljayIsInB1c2giLCJwcm9qZWN0X2luZm8iLCJuYW1lIiwiaHJlZiIsImFzIiwiYSIsInRhcmdldCIsImxvZ29faW1hZ2UiLCJpbWciLCJzcmMiLCJhbHQiLCJwIiwiaDMiLCJnZW5yZSIsImludHJvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/project/ProjectList.js\n"));

/***/ })

});