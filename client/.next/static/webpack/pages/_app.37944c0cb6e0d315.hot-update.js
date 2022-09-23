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

/***/ "./components/Nav/Nav.js":
/*!*******************************!*\
  !*** ./components/Nav/Nav.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"../node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Logout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Logout */ \"./components/Nav/Logout.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var _src_store_modules_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/store/modules/user */ \"./src/store/modules/user.js\");\n/* harmony import */ var _pages_firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/firebase */ \"./pages/firebase.js\");\n/** @format */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Nav() {\n    _s();\n    var pathname = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().pathname;\n    var route = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().route;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var query = router.query;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), init = ref[0], setInit = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isLoggedIn = ref1[0], setIsLoggedIn = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), userObj = ref2[0], setUserObj = ref2[1];\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        project: false,\n        team: false\n    }), projectMenu = ref3[0], setProjectMenu = ref3[1];\n    var teamRoute = (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        _pages_firebase__WEBPACK_IMPORTED_MODULE_7__.FirebaseAuth.onAuthStateChanged(function(user) {\n            if (user) {\n                setIsLoggedIn(true);\n                // router.push('/home');\n                dispatch((0,_src_store_modules_user__WEBPACK_IMPORTED_MODULE_6__.setUserName)(user.displayName));\n                dispatch((0,_src_store_modules_user__WEBPACK_IMPORTED_MODULE_6__.setUserId)(user.uid));\n                setUserObj({\n                    displayName: user.displayName,\n                    uid: user.uid,\n                    updateProfile: function(args) {\n                        return user.updateProfile(args);\n                    }\n                });\n            } else {\n                setIsLoggedIn(false);\n                router.push(\"/login\");\n            }\n            setInit(true);\n        });\n    }, []);\n    var refreshUser = function() {\n        var user = authService.currentUser;\n        setUserObj({\n            displayName: user.displayName,\n            uid: user.uid,\n            updateProfile: function(args) {\n                return user.updateProfile(args);\n            }\n        });\n    };\n    var activeStyle = {\n        textDecoration: \"underline green\",\n        color: \"green\"\n    };\n    var activeClassName = \"underline\";\n    var teamNumber = query.Intro;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative z-50 \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" w-full px-16 py-6 bg-white text-black fixed top-0 left-0 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between items-center \",\n                    children: [\n                        pathname == \"/home\" || \"/projects\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            onClick: function() {\n                                return window.scrollTo(0, 0);\n                            },\n                            href: \"/home\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"cursor-pointer font-extrabold text-green-700\",\n                                children: \"ForMyTeam\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                                lineNumber: 68,\n                                columnNumber: 9\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                            lineNumber: 67,\n                            columnNumber: 8\n                        }, this) : /*#__PURE__*/ 0,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center\",\n                            children: [\n                                pathname == \"/home\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/project\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"mr-6 font-bold hover-link \",\n                                        children: \"Projects\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 10\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 9\n                                }, this),\n                                pathname == \"/project\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/project\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"mr-6 font-bold hover-link \",\n                                        children: \"Projects\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 10\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 9\n                                }, this),\n                                route == !(\"/project/[Intro]\" || 0) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/project/\".concat(teamNumber),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: route == \"/project/[Intro]\" ? \"\".concat(activeClassName, \" + font-bold hover-link\") : \"font-bold hover-link\",\n                                                children: \"Project\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                                                lineNumber: 97,\n                                                columnNumber: 11\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                                            lineNumber: 96,\n                                            columnNumber: 10\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/team/\".concat(teamNumber),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: route == \"/project/[Intro]\" ? \"\".concat(activeClassName, \" + font-bold hover-link\") : \"font-bold hover-link\",\n                                                children: \"Team\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                                                lineNumber: 108,\n                                                columnNumber: 11\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                                            lineNumber: 107,\n                                            columnNumber: 10\n                                        }, this)\n                                    ]\n                                }, void 0, true) : \"\",\n                                isLoggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                                    lineNumber: 122,\n                                    columnNumber: 22\n                                }, this) : \"\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                            lineNumber: 79,\n                            columnNumber: 7\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                    lineNumber: 65,\n                    columnNumber: 6\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                lineNumber: 64,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n            lineNumber: 63,\n            columnNumber: 4\n        }, this)\n    }, void 0, false);\n}\n_s(Nav, \"0DXSH4jZNF/F/EOUp4oxRipVztE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch\n    ];\n});\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXVCLENBQXZDNEIsZUFBZSxFQUFDLHlCQUF1QixDQUFDLEdBQzNDLHNCQUFzQjswREFFMUIsU0FFRDs7Ozs7b0RBQUs7Ozs7O2dEQUNDO3NEQUNQLDhEQUFDckMsa0RBQUk7NENBQUM2QyxJQUFJLEVBQUUsUUFBTyxDQUFhLE9BQVhQLFVBQVUsQ0FBRTtzREFDaEMsNEVBQUNTLElBQUU7Z0RBQ0ZOLFNBQVMsRUFDUmhDLEtBQUssSUFBSSxrQkFBa0IsR0FDeEIsRUFBQyxDQUFrQixNQUF1QixDQUF2QzRCLGVBQWUsRUFBQyx5QkFBdUIsQ0FBQyxHQUMzQyxzQkFBc0I7MERBRTFCLE1BRUQ7Ozs7O29EQUFLOzs7OztnREFDQzs7Z0RBQ0wsR0FFSCxFQUFFO2dDQUVGdkIsVUFBVSxpQkFBRyw4REFBQ2IsK0NBQU07Ozs7d0NBQUcsR0FBRyxFQUFFOzs7Ozs7Z0NBQ3hCOzs7Ozs7d0JBQ0Q7Ozs7O29CQUNEOzs7OztnQkFDRDtxQkFDSixDQUNGO0NBQ0Y7R0F2SFFNLEdBQUc7O1FBQ1VSLGtEQUFTO1FBQ1pBLGtEQUFTO1FBQ1pBLGtEQUFTO1FBS1BJLG9EQUFXOzs7QUFScEJJLEtBQUFBLEdBQUc7QUF5SFosK0RBQWVBLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdi9OYXYuanM/MzgwZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGZvcm1hdCAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IExvZ091dCBmcm9tICcuL0xvZ291dCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzZXRVc2VyTmFtZSwgc2V0VXNlcklkIH0gZnJvbSAnLi4vLi4vc3JjL3N0b3JlL21vZHVsZXMvdXNlcic7XG5pbXBvcnQgeyBGaXJlYmFzZUF1dGggfSBmcm9tICcuLi8uLi9wYWdlcy9maXJlYmFzZSc7XG5cbmZ1bmN0aW9uIE5hdigpIHtcblx0Y29uc3QgeyBwYXRobmFtZSB9ID0gdXNlUm91dGVyKCk7XG5cdGNvbnN0IHsgcm91dGUgfSA9IHVzZVJvdXRlcigpO1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblx0Y29uc3QgeyBxdWVyeSB9ID0gcm91dGVyO1xuXHRjb25zdCBbaW5pdCwgc2V0SW5pdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtpc0xvZ2dlZEluLCBzZXRJc0xvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW3VzZXJPYmosIHNldFVzZXJPYmpdID0gdXNlU3RhdGUobnVsbCk7XG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblx0Y29uc3QgW3Byb2plY3RNZW51LCBzZXRQcm9qZWN0TWVudV0gPSB1c2VTdGF0ZSh7XG5cdFx0cHJvamVjdDogZmFsc2UsXG5cdFx0dGVhbTogZmFsc2UsXG5cdH0pO1xuXG5cdGxldCB0ZWFtUm91dGUgPSB1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdEZpcmViYXNlQXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcblx0XHRcdGlmICh1c2VyKSB7XG5cdFx0XHRcdHNldElzTG9nZ2VkSW4odHJ1ZSk7XG5cdFx0XHRcdC8vIHJvdXRlci5wdXNoKCcvaG9tZScpO1xuXHRcdFx0XHRkaXNwYXRjaChzZXRVc2VyTmFtZSh1c2VyLmRpc3BsYXlOYW1lKSk7XG5cdFx0XHRcdGRpc3BhdGNoKHNldFVzZXJJZCh1c2VyLnVpZCkpO1xuXHRcdFx0XHRzZXRVc2VyT2JqKHtcblx0XHRcdFx0XHRkaXNwbGF5TmFtZTogdXNlci5kaXNwbGF5TmFtZSxcblx0XHRcdFx0XHR1aWQ6IHVzZXIudWlkLFxuXHRcdFx0XHRcdHVwZGF0ZVByb2ZpbGU6IChhcmdzKSA9PiB1c2VyLnVwZGF0ZVByb2ZpbGUoYXJncyksXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2V0SXNMb2dnZWRJbihmYWxzZSk7XG5cdFx0XHRcdHJvdXRlci5wdXNoKCcvbG9naW4nKTtcblx0XHRcdH1cblx0XHRcdHNldEluaXQodHJ1ZSk7XG5cdFx0fSk7XG5cdH0sIFtdKTtcblxuXHRjb25zdCByZWZyZXNoVXNlciA9ICgpID0+IHtcblx0XHRjb25zdCB1c2VyID0gYXV0aFNlcnZpY2UuY3VycmVudFVzZXI7XG5cdFx0c2V0VXNlck9iaih7XG5cdFx0XHRkaXNwbGF5TmFtZTogdXNlci5kaXNwbGF5TmFtZSxcblx0XHRcdHVpZDogdXNlci51aWQsXG5cdFx0XHR1cGRhdGVQcm9maWxlOiAoYXJncykgPT4gdXNlci51cGRhdGVQcm9maWxlKGFyZ3MpLFxuXHRcdH0pO1xuXHR9O1xuXG5cdGxldCBhY3RpdmVTdHlsZSA9IHtcblx0XHR0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZSBncmVlbicsXG5cdFx0Y29sb3I6ICdncmVlbicsXG5cdH07XG5cdGxldCBhY3RpdmVDbGFzc05hbWUgPSAndW5kZXJsaW5lJztcblxuXHRjb25zdCB0ZWFtTnVtYmVyID0gcXVlcnkuSW50cm87XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIHotNTBcdCc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPScgdy1mdWxsIHB4LTE2IHB5LTYgYmctd2hpdGUgdGV4dC1ibGFjayBmaXhlZCB0b3AtMCBsZWZ0LTAgJz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXHQnPlxuXHRcdFx0XHRcdFx0e3BhdGhuYW1lID09ICcvaG9tZScgfHwgJy9wcm9qZWN0cycgPyAoXG5cdFx0XHRcdFx0XHRcdDxMaW5rIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5zY3JvbGxUbygwLCAwKX0gaHJlZj0nL2hvbWUnPlxuXHRcdFx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9J2N1cnNvci1wb2ludGVyIGZvbnQtZXh0cmFib2xkIHRleHQtZ3JlZW4tNzAwJz5cblx0XHRcdFx0XHRcdFx0XHRcdEZvck15VGVhbVxuXHRcdFx0XHRcdFx0XHRcdDwvaDE+XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdDxMaW5rIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5zY3JvbGxUbygwLCAwKX0gaHJlZj0nL3Byb2plY3QnPlxuXHRcdFx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9J2N1cnNvci1wb2ludGVyIGZvbnQtZXh0cmFib2xkICc+TXkgTG9nbzwvaDE+XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdCl9XG5cblx0XHRcdFx0XHRcdHsvKiBSaWdodCBNZW51ICovfVxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyJz5cblx0XHRcdFx0XHRcdFx0ey8qIHByb2plY3RzICovfVxuXHRcdFx0XHRcdFx0XHR7cGF0aG5hbWUgPT0gJy9ob21lJyAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL3Byb2plY3QnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT0nbXItNiBmb250LWJvbGQgaG92ZXItbGluayAnPlByb2plY3RzPC9oMj5cblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdHtwYXRobmFtZSA9PSAnL3Byb2plY3QnICYmIChcblx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvcHJvamVjdCc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSdtci02IGZvbnQtYm9sZCBob3Zlci1saW5rICc+UHJvamVjdHM8L2gyPlxuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0KX1cblxuXHRcdFx0XHRcdFx0XHR7Lyog65GY64ukIO2VnOuyiOyXkCDsu6jtirjroaQg6rCA64ql7ZWY6rKMIO2VmOqzoCDsi7bsnYwgKi99XG5cblx0XHRcdFx0XHRcdFx0e3JvdXRlID09ICEoJy9wcm9qZWN0L1tJbnRyb10nIHx8ICcvdGVhbS9bSW50cm9dJykgPyAoXG5cdFx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2AvcHJvamVjdC8ke3RlYW1OdW1iZXJ9YH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoMlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyb3V0ZSA9PSAnL3Byb2plY3QvW0ludHJvXSdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyBgJHthY3RpdmVDbGFzc05hbWV9ICsgZm9udC1ib2xkIGhvdmVyLWxpbmtgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogJ2ZvbnQtYm9sZCBob3Zlci1saW5rJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFByb2plY3Rcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9oMj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2AvdGVhbS8ke3RlYW1OdW1iZXJ9YH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoMlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyb3V0ZSA9PSAnL3Byb2plY3QvW0ludHJvXSdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyBgJHthY3RpdmVDbGFzc05hbWV9ICsgZm9udC1ib2xkIGhvdmVyLWxpbmtgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogJ2ZvbnQtYm9sZCBob3Zlci1saW5rJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFRlYW1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9oMj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0XHQnJ1xuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHR7aXNMb2dnZWRJbiA/IDxMb2dPdXQgLz4gOiAnJ31cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOYXY7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkxpbmsiLCJMb2dPdXQiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwic2V0VXNlck5hbWUiLCJzZXRVc2VySWQiLCJGaXJlYmFzZUF1dGgiLCJOYXYiLCJwYXRobmFtZSIsInJvdXRlIiwicm91dGVyIiwicXVlcnkiLCJpbml0Iiwic2V0SW5pdCIsImlzTG9nZ2VkSW4iLCJzZXRJc0xvZ2dlZEluIiwidXNlck9iaiIsInNldFVzZXJPYmoiLCJkaXNwYXRjaCIsInByb2plY3QiLCJ0ZWFtIiwicHJvamVjdE1lbnUiLCJzZXRQcm9qZWN0TWVudSIsInRlYW1Sb3V0ZSIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVzZXIiLCJkaXNwbGF5TmFtZSIsInVpZCIsInVwZGF0ZVByb2ZpbGUiLCJhcmdzIiwicHVzaCIsInJlZnJlc2hVc2VyIiwiYXV0aFNlcnZpY2UiLCJjdXJyZW50VXNlciIsImFjdGl2ZVN0eWxlIiwidGV4dERlY29yYXRpb24iLCJjb2xvciIsImFjdGl2ZUNsYXNzTmFtZSIsInRlYW1OdW1iZXIiLCJJbnRybyIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJ3aW5kb3ciLCJzY3JvbGxUbyIsImhyZWYiLCJoMSIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Nav/Nav.js\n"));

/***/ })

});