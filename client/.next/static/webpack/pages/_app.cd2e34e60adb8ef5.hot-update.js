"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Footer/Footer.js":
/*!*************************************!*\
  !*** ./components/Footer/Footer.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"../node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var _src_store_modules_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/store/modules/user */ \"./src/store/modules/user.js\");\n/* harmony import */ var _src_store_modules_projectInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/store/modules/projectInfo */ \"./src/store/modules/projectInfo.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"../node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/** @format */ \nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n\tfont-weight: 800;\\n\tcolor: \",\n        \";\\n\tcursor: pointer;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// import { Github } from '../../src/images/github.svg';\nfunction Footer() {\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), projectObj = ref[0], setProjectObj = ref[1];\n    var projectColor = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function(param) {\n        var projectInfo = param.projectInfo;\n        return projectInfo;\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        dispatch((0,_src_store_modules_projectInfo__WEBPACK_IMPORTED_MODULE_6__.setColor)(projectObj === null || projectObj === void 0 ? void 0 : projectObj.color));\n        dispatch((0,_src_store_modules_projectInfo__WEBPACK_IMPORTED_MODULE_6__.setLogo)(projectObj === null || projectObj === void 0 ? void 0 : projectObj.logo));\n    }, [\n        projectObj\n    ]);\n    console.log(projectObj);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"relative \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"mt-52 px-14 py-10 footer-border w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"flex justify-between \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Logo, {\n                                className: \"font-extrabold text-black\",\n                                children: \"My Logo\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Footer/Footer.js\",\n                                lineNumber: 26,\n                                columnNumber: 7\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Footer/Footer.js\",\n                            lineNumber: 25,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                            className: \"text-gray-400 \",\n                            children: [\n                                \"@ Made by\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                    className: \"font-bold hover:text-green-700\",\n                                    href: \"/home\",\n                                    children: \"ForMyTeam\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Footer/Footer.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Footer/Footer.js\",\n                            lineNumber: 36,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Footer/Footer.js\",\n                    lineNumber: 24,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                    href: \"#\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"svg\", {\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        viewBox: \"0 0 496 512\",\n                        className: \"hover-icon w-8 h-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"path\", {\n                            d: \"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Footer/Footer.js\",\n                            lineNumber: 55,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Footer/Footer.js\",\n                        lineNumber: 50,\n                        columnNumber: 6\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Footer/Footer.js\",\n                    lineNumber: 49,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Footer/Footer.js\",\n            lineNumber: 23,\n            columnNumber: 4\n        }, this)\n    }, void 0, false);\n}\n_s(Footer, \"uHN2O77matpPOQE204v4rf4+MuI=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = Footer;\n// Link 만 쓰면 에러가 남\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\nvar Logo = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].h1(_templateObject(), function(param) {\n    var color = param.color;\n    return color;\n});\n_c1 = Logo;\nvar _c, _c1;\n$RefreshReg$(_c, \"Footer\");\n$RefreshReg$(_c1, \"Logo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsWUFBWSxHQUNaOzs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3BCO0FBQ3dCO0FBQ2U7QUFDRTtBQUNqQztBQUN2Qyx3REFBd0Q7QUFFeEQsU0FBU1csTUFBTSxHQUFHOztJQUNqQixJQUFNQyxRQUFRLEdBQUdQLHdEQUFXLEVBQUU7SUFDOUIsSUFBb0NILEdBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQUF2Q1csVUFBVSxHQUFtQlgsR0FBVSxHQUE3QixFQUFFWSxhQUFhLEdBQUlaLEdBQVUsR0FBZDtJQUNoQyxJQUFNYSxZQUFZLEdBQUdYLHdEQUFXLENBQUM7WUFBR1ksV0FBVyxTQUFYQSxXQUFXO2VBQU9BLFdBQVc7S0FBQSxDQUFDO0lBRWxFZixnREFBUyxDQUFDLFdBQU07UUFDZlcsUUFBUSxDQUFDSix3RUFBUSxDQUFDSyxVQUFVLGFBQVZBLFVBQVUsV0FBTyxHQUFqQkEsS0FBQUEsQ0FBaUIsR0FBakJBLFVBQVUsQ0FBRUksS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN0Q0wsUUFBUSxDQUFDSCx1RUFBTyxDQUFDSSxVQUFVLGFBQVZBLFVBQVUsV0FBTSxHQUFoQkEsS0FBQUEsQ0FBZ0IsR0FBaEJBLFVBQVUsQ0FBRUssSUFBSSxDQUFDLENBQUMsQ0FBQztLQUNwQyxFQUFFO1FBQUNMLFVBQVU7S0FBQyxDQUFDLENBQUM7SUFFakJNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxVQUFVLENBQUMsQ0FBQztJQUN4QixxQkFDQztrQkFDQyw0RUFBQ1EsS0FBRztZQUFDQyxTQUFTLEVBQUMsV0FBVzs7OEJBQ3pCLDhEQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsd0NBQTBDOztzQ0FDeEQsOERBQUNELEtBQUc7NEJBQUNDLFNBQVMsRUFBQyx1QkFBdUI7c0NBQ3JDLDRFQUFDQyxJQUFJO2dDQUFDRCxTQUFTLEVBQUMsMkJBQTJCOzBDQUFDLFNBQU87Ozs7O29DQUFPOzs7OztnQ0FTckQ7c0NBQ04sOERBQUNFLE1BQUk7NEJBQUNGLFNBQVMsRUFBQyxnQkFBZ0I7O2dDQUFDLFdBQ3ZCO2dDQUFDLEdBQUc7OENBQ2IsOERBQUNHLEdBQUM7b0NBQUNILFNBQVMsRUFBQyxnQ0FBZ0M7b0NBQUNJLElBQUksRUFBQyxPQUFPOzhDQUFDLFdBRTNEOzs7Ozt3Q0FBSTs7Ozs7O2dDQU9FOzs7Ozs7d0JBQ0Y7OEJBQ04sOERBQUNELEdBQUM7b0JBQUNDLElBQUksRUFBQyxHQUFHOzhCQUNWLDRFQUFDQyxLQUFHO3dCQUNIQyxLQUFLLEVBQUMsNEJBQTRCO3dCQUNsQ0MsT0FBTyxFQUFDLGFBQWE7d0JBQ3JCUCxTQUFTLEVBQUMsb0JBQW9CO2tDQUU5Qiw0RUFBQ1EsTUFBSTs0QkFBQ0MsQ0FBQyxFQUFDLDB4Q0FBMHhDOzs7OztnQ0FBRzs7Ozs7NEJBQ2h5Qzs7Ozs7d0JBQ0g7Ozs7OztnQkFDQztxQkFDSixDQUNGO0NBQ0Y7R0FuRFFwQixNQUFNOztRQUNHTixvREFBVztRQUVQRCxvREFBVzs7O0FBSHhCTyxLQUFBQSxNQUFNO0FBcURmLGtCQUFrQjtBQUNsQiwrREFBZUEsTUFBTSxFQUFDO0FBRXRCLElBQU1ZLElBQUksR0FBR2IsNERBQVMsb0JBRVo7UUFBR08sS0FBSyxTQUFMQSxLQUFLO1dBQU9BLEtBQUs7Q0FBQSxDQUU3QjtBQUpLTSxNQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcz9lZWEzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAZm9ybWF0ICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHNldFVzZXJOYW1lLCBzZXRVc2VySWQgfSBmcm9tICcuLi8uLi9zcmMvc3RvcmUvbW9kdWxlcy91c2VyJztcbmltcG9ydCB7IHNldENvbG9yLCBzZXRMb2dvIH0gZnJvbSAnLi4vLi4vc3JjL3N0b3JlL21vZHVsZXMvcHJvamVjdEluZm8nO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG4vLyBpbXBvcnQgeyBHaXRodWIgfSBmcm9tICcuLi8uLi9zcmMvaW1hZ2VzL2dpdGh1Yi5zdmcnO1xuXG5mdW5jdGlvbiBGb290ZXIoKSB7XG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblx0Y29uc3QgW3Byb2plY3RPYmosIHNldFByb2plY3RPYmpdID0gdXNlU3RhdGUoKTtcblx0Y29uc3QgcHJvamVjdENvbG9yID0gdXNlU2VsZWN0b3IoKHsgcHJvamVjdEluZm8gfSkgPT4gcHJvamVjdEluZm8pO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0ZGlzcGF0Y2goc2V0Q29sb3IocHJvamVjdE9iaj8uY29sb3IpKTtcblx0XHRkaXNwYXRjaChzZXRMb2dvKHByb2plY3RPYmo/LmxvZ28pKTtcblx0fSwgW3Byb2plY3RPYmpdKTtcblxuXHRjb25zb2xlLmxvZyhwcm9qZWN0T2JqKTtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlICc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtdC01MiBweC0xNCBweS0xMCAgZm9vdGVyLWJvcmRlciAgdy1mdWxsJz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW5cdCc+XG5cdFx0XHRcdFx0XHQ8TG9nbyBjbGFzc05hbWU9J2ZvbnQtZXh0cmFib2xkIHRleHQtYmxhY2snPk15IExvZ288L0xvZ28+XG5cdFx0XHRcdFx0XHR7LyogPExpbmsgb25DbGljaz17KCkgPT4gd2luZG93LnNjcm9sbFRvKDAsIDApfSBocmVmPScvcHJvamVjdCc+XG5cblx0XHRcdFx0XHRcdDwvTGluaz4gKi99XG5cdFx0XHRcdFx0XHR7LyogPExpbmsgaHJlZj0nL2hvbWUnPlxuXHRcdFx0XHRcdFx0XHTquYPtl4jruIxcblx0XHRcdFx0XHRcdFx0PEdpdGh1YiBjbGFzc05hbWU9J1x0ZmlsbC1ibGFjayBob3ZlcjpmaWxsLWdyYXktMzAwXHRcdCBjdXJzb3ItcG9pbnRlclx0dy04JyAvPlxuXHRcdFx0XHRcdFx0PC9MaW5rPiAqL31cblx0XHRcdFx0XHRcdHsvKiA8R2l0aHViIGNsYXNzTmFtZT0nXHRmaWxsLWJsYWNrIGhvdmVyOmZpbGwtZ3JheS0zMDBcdFx0IGN1cnNvci1wb2ludGVyXHR3LTgnIC8+ICovfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTQwMCAnPlxuXHRcdFx0XHRcdFx0QCBNYWRlIGJ5eycgJ31cblx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT0nZm9udC1ib2xkIGhvdmVyOnRleHQtZ3JlZW4tNzAwJyBocmVmPScvaG9tZSc+XG5cdFx0XHRcdFx0XHRcdEZvck15VGVhbVxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0ey8qIDxMaW5rXG5cdFx0XHRcdFx0XHRcdGhyZWY9Jy9ob21lJ1xuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9JyB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBob3Zlcjp0ZXh0LWdyZWVuLTgwMCBmb250LWJvbGRcdCdcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0Zm9yWW91clRlYW1cblx0XHRcdFx0XHRcdDwvTGluaz4gKi99XG5cdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGEgaHJlZj0nIyc+XG5cdFx0XHRcdFx0PHN2Z1xuXHRcdFx0XHRcdFx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuXHRcdFx0XHRcdFx0dmlld0JveD0nMCAwIDQ5NiA1MTInXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2hvdmVyLWljb24gdy04IGgtOCdcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMTY1LjkgMzk3LjRjMCAyLTIuMyAzLjYtNS4yIDMuNi0zLjMuMy01LjYtMS4zLTUuNi0zLjYgMC0yIDIuMy0zLjYgNS4yLTMuNiAzLS4zIDUuNiAxLjMgNS42IDMuNnptLTMxLjEtNC41Yy0uNyAyIDEuMyA0LjMgNC4zIDQuOSAyLjYgMSA1LjYgMCA2LjItMnMtMS4zLTQuMy00LjMtNS4yYy0yLjYtLjctNS41LjMtNi4yIDIuM3ptNDQuMi0xLjdjLTIuOS43LTQuOSAyLjYtNC42IDQuOS4zIDIgMi45IDMuMyA1LjkgMi42IDIuOS0uNyA0LjktMi42IDQuNi00LjYtLjMtMS45LTMtMy4yLTUuOS0yLjl6TTI0NC44IDhDMTA2LjEgOCAwIDExMy4zIDAgMjUyYzAgMTEwLjkgNjkuOCAyMDUuOCAxNjkuNSAyMzkuMiAxMi44IDIuMyAxNy4zLTUuNiAxNy4zLTEyLjEgMC02LjItLjMtNDAuNC0uMy02MS40IDAgMC03MCAxNS04NC43LTI5LjggMCAwLTExLjQtMjkuMS0yNy44LTM2LjYgMCAwLTIyLjktMTUuNyAxLjYtMTUuNCAwIDAgMjQuOSAyIDM4LjYgMjUuOCAyMS45IDM4LjYgNTguNiAyNy41IDcyLjkgMjAuOSAyLjMtMTYgOC44LTI3LjEgMTYtMzMuNy01NS45LTYuMi0xMTIuMy0xNC4zLTExMi4zLTExMC41IDAtMjcuNSA3LjYtNDEuMyAyMy42LTU4LjktMi42LTYuNS0xMS4xLTMzLjMgMi42LTY3LjkgMjAuOS02LjUgNjkgMjcgNjkgMjcgMjAtNS42IDQxLjUtOC41IDYyLjgtOC41czQyLjggMi45IDYyLjggOC41YzAgMCA0OC4xLTMzLjYgNjktMjcgMTMuNyAzNC43IDUuMiA2MS40IDIuNiA2Ny45IDE2IDE3LjcgMjUuOCAzMS41IDI1LjggNTguOSAwIDk2LjUtNTguOSAxMDQuMi0xMTQuOCAxMTAuNSA5LjIgNy45IDE3IDIyLjkgMTcgNDYuNCAwIDMzLjctLjMgNzUuNC0uMyA4My42IDAgNi41IDQuNiAxNC40IDE3LjMgMTIuMUM0MjguMiA0NTcuOCA0OTYgMzYyLjkgNDk2IDI1MiA0OTYgMTEzLjMgMzgzLjUgOCAyNDQuOCA4ek05Ny4yIDM1Mi45Yy0xLjMgMS0xIDMuMy43IDUuMiAxLjYgMS42IDMuOSAyLjMgNS4yIDEgMS4zLTEgMS0zLjMtLjctNS4yLTEuNi0xLjYtMy45LTIuMy01LjItMXptLTEwLjgtOC4xYy0uNyAxLjMuMyAyLjkgMi4zIDMuOSAxLjYgMSAzLjYuNyA0LjMtLjcuNy0xLjMtLjMtMi45LTIuMy0zLjktMi0uNi0zLjYtLjMtNC4zLjd6bTMyLjQgMzUuNmMtMS42IDEuMy0xIDQuMyAxLjMgNi4yIDIuMyAyLjMgNS4yIDIuNiA2LjUgMSAxLjMtMS4zLjctNC4zLTEuMy02LjItMi4yLTIuMy01LjItMi42LTYuNS0xem0tMTEuNC0xNC43Yy0xLjYgMS0xLjYgMy42IDAgNS45IDEuNiAyLjMgNC4zIDMuMyA1LjYgMi4zIDEuNi0xLjMgMS42LTMuOSAwLTYuMi0xLjQtMi4zLTQtMy4zLTUuNi0yeicgLz5cblx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0PC9hPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59XG5cbi8vIExpbmsg66eMIOyTsOuptCDsl5Drn6zqsIAg64KoXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG5cbmNvbnN0IExvZ28gPSBzdHlsZWQuaDFgXG5cdGZvbnQtd2VpZ2h0OiA4MDA7XG5cdGNvbG9yOiAkeyh7IGNvbG9yIH0pID0+IGNvbG9yfTtcblx0Y3Vyc29yOiBwb2ludGVyO1xuYDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJzZXRVc2VyTmFtZSIsInNldFVzZXJJZCIsInNldENvbG9yIiwic2V0TG9nbyIsInN0eWxlZCIsIkZvb3RlciIsImRpc3BhdGNoIiwicHJvamVjdE9iaiIsInNldFByb2plY3RPYmoiLCJwcm9qZWN0Q29sb3IiLCJwcm9qZWN0SW5mbyIsImNvbG9yIiwibG9nbyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJMb2dvIiwic3BhbiIsImEiLCJocmVmIiwic3ZnIiwieG1sbnMiLCJ2aWV3Qm94IiwicGF0aCIsImQiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Footer/Footer.js\n"));

/***/ })

});