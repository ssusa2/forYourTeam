"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/team/[Intro]",{

/***/ "./pages/team/Members.js":
/*!*******************************!*\
  !*** ./pages/team/Members.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"../node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _image_composition_5_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../image/composition 5.png */ \"./image/composition 5.png\");\n/* harmony import */ var _util_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/utils */ \"./util/utils.js\");\n/** @format */ \n\n// import composition from '../../image/composition 1.png';\n\n\nfunction Members(param) {\n    var members = param.members, OneMember = param.OneMember;\n    var github = members.github, name = members.name, image = members.image, description = members.description, role = members.role;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: OneMember == 1 ? \"xl:flex xl:relative\" : \"\",\n                children: [\n                    image ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: image,\n                        className: OneMember == 1 ? \" w-full xl:w-1/2\" : \"object-cover w-full max-h-72\t\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/team/Members.js\",\n                        lineNumber: 14,\n                        columnNumber: 7\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        width: 100,\n                        className: OneMember == 1 ? \" w-full xl:w-1/2\" : \"object-cover w-full max-h-72\t\",\n                        src: _image_composition_5_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n                    }, void 0, false, {\n                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/team/Members.js\",\n                        lineNumber: 23,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: OneMember == 1 ? \"xl:pl-10 pt-2\" : \"base-m\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"w-full\",\n                                dangerouslySetInnerHTML: (0,_util_utils__WEBPACK_IMPORTED_MODULE_3__.replaceBrTag)(description)\n                            }, void 0, false, {\n                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/team/Members.js\",\n                                lineNumber: 36,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: OneMember ? \"xl:absolute  right-0 flex justify-between items-end\" : \"mt-3 mb-10 team-role flex justify-between items-end\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: OneMember ? \"mr-4\" : \"mb-3\t\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/team/Members.js\",\n                                                lineNumber: 48,\n                                                columnNumber: 9\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-semibold text-gray-500 \",\n                                                children: [\n                                                    \" \",\n                                                    role\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/team/Members.js\",\n                                                lineNumber: 49,\n                                                columnNumber: 9\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/team/Members.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 8\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: github,\n                                            target: github,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                xmlns: \"http://www.w3.org/2000/svg\",\n                                                viewBox: \"0 0 496 512\",\n                                                className: \"hover-icon w-5 h-5\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                    d: \"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/team/Members.js\",\n                                                    lineNumber: 59,\n                                                    columnNumber: 11\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/team/Members.js\",\n                                                lineNumber: 54,\n                                                columnNumber: 10\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/team/Members.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 9\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/team/Members.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 8\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/team/Members.js\",\n                                lineNumber: 40,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/team/Members.js\",\n                        lineNumber: 35,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/team/Members.js\",\n                lineNumber: 12,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/team/Members.js\",\n            lineNumber: 11,\n            columnNumber: 4\n        }, this)\n    }, void 0, false);\n}\n_c = Members;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Members);\n{\n/* <Link href='#'>\n\t\t\t\t\t\t\t\t\t<Github className='hover-icon ' />\n\t\t\t\t\t\t\t\t</Link>\n\t\t\t\t\t\t\t\t<Link href='#' className='ml-2'>\n\t\t\t\t\t\t\t\t\t<Blog className='hover-icon ' />\n\t\t\t\t\t\t\t\t</Link> */ }var _c;\n$RefreshReg$(_c, \"Members\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZWFtL01lbWJlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLFlBQVksR0FDWjtBQUErQjtBQUMvQiwyREFBMkQ7QUFDSDtBQUNSO0FBQ2hELFNBQVNHLE9BQU8sQ0FBQyxLQUFzQixFQUFFO1FBQXRCQyxPQUFPLEdBQVQsS0FBc0IsQ0FBcEJBLE9BQU8sRUFBRUMsU0FBUyxHQUFwQixLQUFzQixDQUFYQSxTQUFTO0lBQ3BDLElBQVFDLE1BQU0sR0FBcUNGLE9BQU8sQ0FBbERFLE1BQU0sRUFBRUMsSUFBSSxHQUErQkgsT0FBTyxDQUExQ0csSUFBSSxFQUFFQyxLQUFLLEdBQXdCSixPQUFPLENBQXBDSSxLQUFLLEVBQUVDLFdBQVcsR0FBV0wsT0FBTyxDQUE3QkssV0FBVyxFQUFFQyxJQUFJLEdBQUtOLE9BQU8sQ0FBaEJNLElBQUk7SUFFOUMscUJBQ0M7a0JBQ0MsNEVBQUNDLEtBQUc7c0JBQ0gsNEVBQUNBLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRVAsU0FBUyxJQUFJLENBQUMsR0FBRyxxQkFBcUIsR0FBRyxFQUFFOztvQkFDekRHLEtBQUssaUJBQ0wsOERBQUNLLEtBQUc7d0JBQ0hDLEdBQUcsRUFBRU4sS0FBSzt3QkFDVkksU0FBUyxFQUNSUCxTQUFTLElBQUksQ0FBQyxHQUNYLGtCQUFrQixHQUNsQiwrQkFBK0I7Ozs7OzRCQUVsQyxpQkFFRiw4REFBQ0wsbURBQUs7d0JBQ0xlLEtBQUssRUFBRSxHQUFHO3dCQUNWSCxTQUFTLEVBQ1JQLFNBQVMsSUFBSSxDQUFDLEdBQ1gsa0JBQWtCLEdBQ2xCLCtCQUErQjt3QkFFbkNTLEdBQUcsRUFBRWIsZ0VBQVc7Ozs7OzRCQUNmO2tDQUlILDhEQUFDVSxLQUFHO3dCQUFDQyxTQUFTLEVBQUVQLFNBQVMsSUFBSSxDQUFDLEdBQUcsZUFBZSxHQUFHLFFBQVE7OzBDQUMxRCw4REFBQ1csR0FBQztnQ0FDREosU0FBUyxFQUFDLFFBQVE7Z0NBQ2xCSyx1QkFBdUIsRUFBRWYseURBQVksQ0FBQ08sV0FBVyxDQUFDOzs7OztvQ0FDakQ7MENBQ0YsOERBQUNFLEtBQUc7Z0NBQ0hDLFNBQVMsRUFDUlAsU0FBUyxHQUNOLHFEQUFxRCxHQUNyRCxxREFBcUQ7O2tEQUd6RCw4REFBQ00sS0FBRzt3Q0FBQ0MsU0FBUyxFQUFFUCxTQUFTLEdBQUcsTUFBTSxHQUFHLE9BQU87OzBEQUMzQyw4REFBQ2EsUUFBTTswREFBRVgsSUFBSTs7Ozs7b0RBQVU7MERBQ3ZCLDhEQUFDWSxNQUFJO2dEQUFDUCxTQUFTLEVBQUMsOEJBQThCOztvREFBQyxHQUFDO29EQUFDRixJQUFJOzs7Ozs7b0RBQVE7Ozs7Ozs0Q0FDeEQ7a0RBRU4sOERBQUNDLEtBQUc7d0NBQUNDLFNBQVMsRUFBQyxtQkFBbUI7a0RBQ2pDLDRFQUFDUSxHQUFDOzRDQUFDQyxJQUFJLEVBQUVmLE1BQU07NENBQUVnQixNQUFNLEVBQUVoQixNQUFNO3NEQUM5Qiw0RUFBQ2lCLEtBQUc7Z0RBQ0hDLEtBQUssRUFBQyw0QkFBNEI7Z0RBQ2xDQyxPQUFPLEVBQUMsYUFBYTtnREFDckJiLFNBQVMsRUFBQyxvQkFBb0I7MERBRTlCLDRFQUFDYyxNQUFJO29EQUFDQyxDQUFDLEVBQUMsMHhDQUEweEM7Ozs7O3dEQUFHOzs7OztvREFDaHlDOzs7OztnREFDSDs7Ozs7NENBQ0M7Ozs7OztvQ0FDRDs7Ozs7OzRCQUNEOzs7Ozs7b0JBQ0Q7Ozs7O2dCQUNEO3FCQUNKLENBQ0Y7Q0FDRjtBQS9EUXhCLEtBQUFBLE9BQU87QUFpRWhCLCtEQUFlQSxPQUFPLEVBQUM7QUFDdkI7QUFDQzs7Ozs7Z0JBS2UsSUFDZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90ZWFtL01lbWJlcnMuanM/YTc5MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGZvcm1hdCAqL1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuLy8gaW1wb3J0IGNvbXBvc2l0aW9uIGZyb20gJy4uLy4uL2ltYWdlL2NvbXBvc2l0aW9uIDEucG5nJztcbmltcG9ydCBjb21wb3NpdGlvbiBmcm9tICcuLi8uLi9pbWFnZS9jb21wb3NpdGlvbiA1LnBuZyc7XG5pbXBvcnQgeyByZXBsYWNlQnJUYWcgfSBmcm9tICcuLi8uLi91dGlsL3V0aWxzJztcbmZ1bmN0aW9uIE1lbWJlcnMoeyBtZW1iZXJzLCBPbmVNZW1iZXIgfSkge1xuXHRjb25zdCB7IGdpdGh1YiwgbmFtZSwgaW1hZ2UsIGRlc2NyaXB0aW9uLCByb2xlIH0gPSBtZW1iZXJzO1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtPbmVNZW1iZXIgPT0gMSA/ICd4bDpmbGV4IHhsOnJlbGF0aXZlJyA6ICcnfT5cblx0XHRcdFx0XHR7aW1hZ2UgPyAoXG5cdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdHNyYz17aW1hZ2V9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17XG5cdFx0XHRcdFx0XHRcdFx0T25lTWVtYmVyID09IDFcblx0XHRcdFx0XHRcdFx0XHRcdD8gJyB3LWZ1bGwgeGw6dy0xLzInXG5cdFx0XHRcdFx0XHRcdFx0XHQ6ICdvYmplY3QtY292ZXIgdy1mdWxsIG1heC1oLTcyXHQnXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdDxJbWFnZVxuXHRcdFx0XHRcdFx0XHR3aWR0aD17MTAwfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e1xuXHRcdFx0XHRcdFx0XHRcdE9uZU1lbWJlciA9PSAxXG5cdFx0XHRcdFx0XHRcdFx0XHQ/ICcgdy1mdWxsIHhsOnctMS8yJ1xuXHRcdFx0XHRcdFx0XHRcdFx0OiAnb2JqZWN0LWNvdmVyIHctZnVsbCBtYXgtaC03Mlx0J1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHNyYz17Y29tcG9zaXRpb259XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCl9XG5cblx0XHRcdFx0XHR7LyogPEltYWdlIHNyYz17Y29tcG9zaXRpb259IGFsdD0nUGljdHVyZSBvZiB0aGUgYXV0aG9yJyAvPiAqL31cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17T25lTWVtYmVyID09IDEgPyAneGw6cGwtMTAgcHQtMicgOiAnYmFzZS1tJ30+XG5cdFx0XHRcdFx0XHQ8cFxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3ctZnVsbCdcblx0XHRcdFx0XHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3JlcGxhY2VCclRhZyhkZXNjcmlwdGlvbil9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e1xuXHRcdFx0XHRcdFx0XHRcdE9uZU1lbWJlclxuXHRcdFx0XHRcdFx0XHRcdFx0PyAneGw6YWJzb2x1dGUgIHJpZ2h0LTAgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtZW5kJ1xuXHRcdFx0XHRcdFx0XHRcdFx0OiAnbXQtMyBtYi0xMCB0ZWFtLXJvbGUgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtZW5kJ1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtPbmVNZW1iZXIgPyAnbXItNCcgOiAnbWItM1x0J30+XG5cdFx0XHRcdFx0XHRcdFx0PHN0cm9uZz57bmFtZX08L3N0cm9uZz5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTUwMFx0Jz4ge3JvbGV9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXInPlxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9e2dpdGh1Yn0gdGFyZ2V0PXtnaXRodWJ9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHN2Z1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZpZXdCb3g9JzAgMCA0OTYgNTEyJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2hvdmVyLWljb24gdy01IGgtNSdcblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTE2NS45IDM5Ny40YzAgMi0yLjMgMy42LTUuMiAzLjYtMy4zLjMtNS42LTEuMy01LjYtMy42IDAtMiAyLjMtMy42IDUuMi0zLjYgMy0uMyA1LjYgMS4zIDUuNiAzLjZ6bS0zMS4xLTQuNWMtLjcgMiAxLjMgNC4zIDQuMyA0LjkgMi42IDEgNS42IDAgNi4yLTJzLTEuMy00LjMtNC4zLTUuMmMtMi42LS43LTUuNS4zLTYuMiAyLjN6bTQ0LjItMS43Yy0yLjkuNy00LjkgMi42LTQuNiA0LjkuMyAyIDIuOSAzLjMgNS45IDIuNiAyLjktLjcgNC45LTIuNiA0LjYtNC42LS4zLTEuOS0zLTMuMi01LjktMi45ek0yNDQuOCA4QzEwNi4xIDggMCAxMTMuMyAwIDI1MmMwIDExMC45IDY5LjggMjA1LjggMTY5LjUgMjM5LjIgMTIuOCAyLjMgMTcuMy01LjYgMTcuMy0xMi4xIDAtNi4yLS4zLTQwLjQtLjMtNjEuNCAwIDAtNzAgMTUtODQuNy0yOS44IDAgMC0xMS40LTI5LjEtMjcuOC0zNi42IDAgMC0yMi45LTE1LjcgMS42LTE1LjQgMCAwIDI0LjkgMiAzOC42IDI1LjggMjEuOSAzOC42IDU4LjYgMjcuNSA3Mi45IDIwLjkgMi4zLTE2IDguOC0yNy4xIDE2LTMzLjctNTUuOS02LjItMTEyLjMtMTQuMy0xMTIuMy0xMTAuNSAwLTI3LjUgNy42LTQxLjMgMjMuNi01OC45LTIuNi02LjUtMTEuMS0zMy4zIDIuNi02Ny45IDIwLjktNi41IDY5IDI3IDY5IDI3IDIwLTUuNiA0MS41LTguNSA2Mi44LTguNXM0Mi44IDIuOSA2Mi44IDguNWMwIDAgNDguMS0zMy42IDY5LTI3IDEzLjcgMzQuNyA1LjIgNjEuNCAyLjYgNjcuOSAxNiAxNy43IDI1LjggMzEuNSAyNS44IDU4LjkgMCA5Ni41LTU4LjkgMTA0LjItMTE0LjggMTEwLjUgOS4yIDcuOSAxNyAyMi45IDE3IDQ2LjQgMCAzMy43LS4zIDc1LjQtLjMgODMuNiAwIDYuNSA0LjYgMTQuNCAxNy4zIDEyLjFDNDI4LjIgNDU3LjggNDk2IDM2Mi45IDQ5NiAyNTIgNDk2IDExMy4zIDM4My41IDggMjQ0LjggOHpNOTcuMiAzNTIuOWMtMS4zIDEtMSAzLjMuNyA1LjIgMS42IDEuNiAzLjkgMi4zIDUuMiAxIDEuMy0xIDEtMy4zLS43LTUuMi0xLjYtMS42LTMuOS0yLjMtNS4yLTF6bS0xMC44LTguMWMtLjcgMS4zLjMgMi45IDIuMyAzLjkgMS42IDEgMy42LjcgNC4zLS43LjctMS4zLS4zLTIuOS0yLjMtMy45LTItLjYtMy42LS4zLTQuMy43em0zMi40IDM1LjZjLTEuNiAxLjMtMSA0LjMgMS4zIDYuMiAyLjMgMi4zIDUuMiAyLjYgNi41IDEgMS4zLTEuMy43LTQuMy0xLjMtNi4yLTIuMi0yLjMtNS4yLTIuNi02LjUtMXptLTExLjQtMTQuN2MtMS42IDEtMS42IDMuNiAwIDUuOSAxLjYgMi4zIDQuMyAzLjMgNS42IDIuMyAxLjYtMS4zIDEuNi0zLjkgMC02LjItMS40LTIuMy00LTMuMy01LjYtMnonIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbWJlcnM7XG57XG5cdC8qIDxMaW5rIGhyZWY9JyMnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PEdpdGh1YiBjbGFzc05hbWU9J2hvdmVyLWljb24gJyAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScjJyBjbGFzc05hbWU9J21sLTInPlxuXHRcdFx0XHRcdFx0XHRcdFx0PEJsb2cgY2xhc3NOYW1lPSdob3Zlci1pY29uICcgLz5cblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+ICovXG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJjb21wb3NpdGlvbiIsInJlcGxhY2VCclRhZyIsIk1lbWJlcnMiLCJtZW1iZXJzIiwiT25lTWVtYmVyIiwiZ2l0aHViIiwibmFtZSIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJyb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwid2lkdGgiLCJwIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJzdHJvbmciLCJzcGFuIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJzdmciLCJ4bWxucyIsInZpZXdCb3giLCJwYXRoIiwiZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/team/Members.js\n"));

/***/ })

});