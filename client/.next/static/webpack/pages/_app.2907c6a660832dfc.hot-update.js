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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"../node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var _src_store_modules_projectInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/store/modules/projectInfo */ \"./src/store/modules/projectInfo.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"../node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Icon/Icon */ \"./components/Icon/Icon.js\");\n/** @format */ \nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n\tfont-weight: 800;\\n\tcolor: \",\n        \";\\n\tcursor: pointer;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Footer(param) {\n    var Preview = param.Preview;\n    _s();\n    var route = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)().route;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), projectObj = ref[0], setProjectObj = ref[1];\n    var projectColor = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function(param) {\n        var projectInfo = param.projectInfo;\n        return projectInfo;\n    });\n    // const [color, setColor] = useState();\n    // const [logo, setLogo] = useState();\n    var color = projectColor.color, logo = projectColor.logo;\n    console.log(logo);\n    var projectMenu = \"\";\n    if (route == \"/project/[Intro]\") {\n        projectMenu = true;\n    } else if (route == \"/team/[Intro]\") {\n        projectMenu = true;\n    } else {\n        projectMenu = false;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"relative \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"mt-52 px-14 pt-10 footer-border w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between \",\n                        children: [\n                            !projectMenu ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Logo, {\n                                children: \"ForMyTeam\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Footer/Footer.js\",\n                                lineNumber: 42,\n                                columnNumber: 8\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Logo, {\n                                color: color,\n                                children: logo\n                            }, void 0, false, {\n                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Footer/Footer.js\",\n                                lineNumber: 44,\n                                columnNumber: 8\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__.Github, {}, void 0, false, {\n                                    fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Footer/Footer.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 8\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Footer/Footer.js\",\n                                lineNumber: 46,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Footer/Footer.js\",\n                        lineNumber: 40,\n                        columnNumber: 6\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Footer/Footer.js\",\n                    lineNumber: 39,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center pb-8\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        className: \"text-gray-400 \",\n                        children: [\n                            \"@ Made by\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                className: \"font-bold hover:text-green-700\",\n                                href: \"/home\",\n                                children: \"ForMyTeam\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Footer/Footer.js\",\n                                lineNumber: 54,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Footer/Footer.js\",\n                        lineNumber: 52,\n                        columnNumber: 6\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Footer/Footer.js\",\n                    lineNumber: 51,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Footer/Footer.js\",\n            lineNumber: 38,\n            columnNumber: 4\n        }, this)\n    }, void 0, false);\n}\n_s(Footer, \"APKb0zS2W5QibmuNDQ2vtUczpk0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = Footer;\n// Link 만 쓰면 에러가 남\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\nvar Logo = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].h1(_templateObject(), function(param) {\n    var color = param.color;\n    return color || \"#15803D\";\n});\n_c1 = Logo;\nvar _c, _c1;\n$RefreshReg$(_c, \"Footer\");\n$RefreshReg$(_c1, \"Logo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsWUFBWSxHQUNaOzs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1g7QUFDVDtBQUN3QjtBQUtWO0FBQ047QUFDRDtBQUV0QyxTQUFTWSxNQUFNLENBQUMsS0FBVyxFQUFFO1FBQWIsT0FBUyxHQUFULEtBQVcsQ0FBVEMsT0FBTzs7SUFDeEIsSUFBTSxLQUFPLEdBQUtWLHNEQUFTLEVBQUUsQ0FBckJXLEtBQUs7SUFDYixJQUFNQyxNQUFNLEdBQUdaLHNEQUFTLEVBQUU7SUFDMUIsSUFBTWEsUUFBUSxHQUFHVix3REFBVyxFQUFFO0lBQzlCLElBQW9DSixHQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFBdkNlLFVBQVUsR0FBbUJmLEdBQVUsR0FBN0IsRUFBRWdCLGFBQWEsR0FBSWhCLEdBQVUsR0FBZDtJQUNoQyxJQUFNaUIsWUFBWSxHQUFHZCx3REFBVyxDQUFDO1lBQUdlLFdBQVcsU0FBWEEsV0FBVztlQUFPQSxXQUFXO0tBQUEsQ0FBQztJQUNsRSx3Q0FBd0M7SUFDeEMsc0NBQXNDO0lBRXRDLElBQVFDLEtBQUssR0FBV0YsWUFBWSxDQUE1QkUsS0FBSyxFQUFFQyxJQUFJLEdBQUtILFlBQVksQ0FBckJHLElBQUk7SUFFbkJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUMsQ0FBQztJQUVsQixJQUFJRyxXQUFXLEdBQUcsRUFBRTtJQUNwQixJQUFJWCxLQUFLLElBQUksa0JBQWtCLEVBQUU7UUFDaENXLFdBQVcsR0FBRyxJQUFJLENBQUM7S0FDbkIsTUFBTSxJQUFJWCxLQUFLLElBQUksZUFBZSxFQUFFO1FBQ3BDVyxXQUFXLEdBQUcsSUFBSSxDQUFDO0tBQ25CLE1BQU07UUFDTkEsV0FBVyxHQUFHLEtBQUssQ0FBQztLQUNwQjtJQUVELHFCQUNDO2tCQUNDLDRFQUFDQyxLQUFHO1lBQUNDLFNBQVMsRUFBQyxXQUFXOzs4QkFDekIsOERBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyx3Q0FBMEM7OEJBQ3hELDRFQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsdUJBQXVCOzs0QkFDcEMsQ0FBQ0YsV0FBVyxpQkFDWiw4REFBQ0csSUFBSTswQ0FBQyxXQUFTOzs7OztvQ0FBTyxpQkFFdEIsOERBQUNBLElBQUk7Z0NBQUNQLEtBQUssRUFBRUEsS0FBSzswQ0FBR0MsSUFBSTs7Ozs7b0NBQVE7MENBRWxDLDhEQUFDTyxHQUFDO2dDQUFDQyxJQUFJLEVBQUMsR0FBRzswQ0FDViw0RUFBQ25CLDhDQUFNOzs7O3dDQUFHOzs7OztvQ0FDUDs7Ozs7OzRCQUNDOzs7Ozt3QkFDRDs4QkFDTiw4REFBQ2UsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLDBCQUEwQjs4QkFDeEMsNEVBQUNJLE1BQUk7d0JBQUNKLFNBQVMsRUFBQyxnQkFBZ0I7OzRCQUFDLFdBQ3ZCOzRCQUFDLEdBQUc7MENBQ2IsOERBQUNFLEdBQUM7Z0NBQUNGLFNBQVMsRUFBQyxnQ0FBZ0M7Z0NBQUNHLElBQUksRUFBQyxPQUFPOzBDQUFDLFdBRTNEOzs7OztvQ0FBSTs7Ozs7OzRCQUNFOzs7Ozt3QkFDRjs7Ozs7O2dCQUNEO3FCQUNKLENBQ0Y7Q0FDRjtHQWhEUWxCLE1BQU07O1FBQ0lULGtEQUFTO1FBQ1pBLGtEQUFTO1FBQ1BHLG9EQUFXO1FBRVBELG9EQUFXOzs7QUFMeEJPLEtBQUFBLE1BQU07QUFrRGYsa0JBQWtCO0FBQ2xCLCtEQUFlQSxNQUFNLEVBQUM7QUFFdEIsSUFBTWdCLElBQUksR0FBR2xCLDREQUFTLG9CQUVaO1FBQUdXLEtBQUssU0FBTEEsS0FBSztXQUFPQSxLQUFLLElBQUksU0FBUztDQUFBLENBRTFDO0FBSktPLE1BQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzP2VlYTMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBmb3JtYXQgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtcblx0c2V0Q29sb3IsXG5cdHNldExvZ28sXG5cdGdldFN0YXRlLFxufSBmcm9tICcuLi8uLi9zcmMvc3RvcmUvbW9kdWxlcy9wcm9qZWN0SW5mbyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IEdpdGh1YiB9IGZyb20gJy4uL0ljb24vSWNvbic7XG5cbmZ1bmN0aW9uIEZvb3Rlcih7IFByZXZpZXcgfSkge1xuXHRjb25zdCB7IHJvdXRlIH0gPSB1c2VSb3V0ZXIoKTtcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblx0Y29uc3QgW3Byb2plY3RPYmosIHNldFByb2plY3RPYmpdID0gdXNlU3RhdGUoKTtcblx0Y29uc3QgcHJvamVjdENvbG9yID0gdXNlU2VsZWN0b3IoKHsgcHJvamVjdEluZm8gfSkgPT4gcHJvamVjdEluZm8pO1xuXHQvLyBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKCk7XG5cdC8vIGNvbnN0IFtsb2dvLCBzZXRMb2dvXSA9IHVzZVN0YXRlKCk7XG5cblx0Y29uc3QgeyBjb2xvciwgbG9nbyB9ID0gcHJvamVjdENvbG9yO1xuXG5cdGNvbnNvbGUubG9nKGxvZ28pO1xuXG5cdGxldCBwcm9qZWN0TWVudSA9ICcnO1xuXHRpZiAocm91dGUgPT0gJy9wcm9qZWN0L1tJbnRyb10nKSB7XG5cdFx0cHJvamVjdE1lbnUgPSB0cnVlO1xuXHR9IGVsc2UgaWYgKHJvdXRlID09ICcvdGVhbS9bSW50cm9dJykge1xuXHRcdHByb2plY3RNZW51ID0gdHJ1ZTtcblx0fSBlbHNlIHtcblx0XHRwcm9qZWN0TWVudSA9IGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlICc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtdC01MiBweC0xNCBwdC0xMCAgZm9vdGVyLWJvcmRlciAgdy1mdWxsJz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW5cdCc+XG5cdFx0XHRcdFx0XHR7IXByb2plY3RNZW51ID8gKFxuXHRcdFx0XHRcdFx0XHQ8TG9nbz5Gb3JNeVRlYW08L0xvZ28+XG5cdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHQ8TG9nbyBjb2xvcj17Y29sb3J9Pntsb2dvfTwvTG9nbz5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHQ8YSBocmVmPScjJz5cblx0XHRcdFx0XHRcdFx0PEdpdGh1YiAvPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgcGItOCc+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWdyYXktNDAwICc+XG5cdFx0XHRcdFx0XHRAIE1hZGUgYnl7JyAnfVxuXHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPSdmb250LWJvbGQgaG92ZXI6dGV4dC1ncmVlbi03MDAnIGhyZWY9Jy9ob21lJz5cblx0XHRcdFx0XHRcdFx0Rm9yTXlUZWFtXG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufVxuXG4vLyBMaW5rIOunjCDsk7DrqbQg7JeQ65+s6rCAIOuCqFxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuXG5jb25zdCBMb2dvID0gc3R5bGVkLmgxYFxuXHRmb250LXdlaWdodDogODAwO1xuXHRjb2xvcjogJHsoeyBjb2xvciB9KSA9PiBjb2xvciB8fCAnIzE1ODAzRCd9O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5gO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsInNldENvbG9yIiwic2V0TG9nbyIsImdldFN0YXRlIiwic3R5bGVkIiwiR2l0aHViIiwiRm9vdGVyIiwiUHJldmlldyIsInJvdXRlIiwicm91dGVyIiwiZGlzcGF0Y2giLCJwcm9qZWN0T2JqIiwic2V0UHJvamVjdE9iaiIsInByb2plY3RDb2xvciIsInByb2plY3RJbmZvIiwiY29sb3IiLCJsb2dvIiwiY29uc29sZSIsImxvZyIsInByb2plY3RNZW51IiwiZGl2IiwiY2xhc3NOYW1lIiwiTG9nbyIsImEiLCJocmVmIiwic3BhbiIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Footer/Footer.js\n"));

/***/ })

});