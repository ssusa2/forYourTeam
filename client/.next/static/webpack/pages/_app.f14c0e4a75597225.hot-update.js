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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"../node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Logout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Logout */ \"./components/Nav/Logout.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var _src_store_modules_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/store/modules/user */ \"./src/store/modules/user.js\");\n/* harmony import */ var _pages_firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/firebase */ \"./pages/firebase.js\");\n/** @format */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Nav() {\n    _s();\n    var pathname = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().pathname;\n    var route = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().route;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var query = router.query;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), init = ref[0], setInit = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isLoggedIn = ref1[0], setIsLoggedIn = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), userObj = ref2[0], setUserObj = ref2[1];\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        project: false,\n        team: false\n    }), projectMenu = ref3[0], setProjectMenu = ref3[1];\n    console.log(\"route\", route == \"/team/[Intro]\" || \"/project/[Intro]\" ? \"1\" : 0);\n    var teamRoute = (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        _pages_firebase__WEBPACK_IMPORTED_MODULE_7__.FirebaseAuth.onAuthStateChanged(function(user) {\n            if (user) {\n                setIsLoggedIn(true);\n                // router.push('/home');\n                dispatch((0,_src_store_modules_user__WEBPACK_IMPORTED_MODULE_6__.setUserName)(user.displayName));\n                dispatch((0,_src_store_modules_user__WEBPACK_IMPORTED_MODULE_6__.setUserId)(user.uid));\n                setUserObj({\n                    displayName: user.displayName,\n                    uid: user.uid,\n                    updateProfile: function(args) {\n                        return user.updateProfile(args);\n                    }\n                });\n            } else {\n                setIsLoggedIn(false);\n                router.push(\"/login\");\n            }\n            setInit(true);\n        });\n    }, []);\n    var refreshUser = function() {\n        var user = authService.currentUser;\n        setUserObj({\n            displayName: user.displayName,\n            uid: user.uid,\n            updateProfile: function(args) {\n                return user.updateProfile(args);\n            }\n        });\n    };\n    var activeStyle = {\n        textDecoration: \"underline green\",\n        color: \"green\"\n    };\n    var activeClassName = \"underline\";\n    var teamNumber = query.Intro;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative z-50 \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" w-full px-16 py-6 bg-white text-black fixed top-0 left-0 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between items-center \",\n                    children: [\n                        pathname == \"/home\" || \"/projects\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            onClick: function() {\n                                return window.scrollTo(0, 0);\n                            },\n                            href: \"/home\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"cursor-pointer font-extrabold text-green-700\",\n                                children: \"ForMyTeam\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                                lineNumber: 73,\n                                columnNumber: 9\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                            lineNumber: 72,\n                            columnNumber: 8\n                        }, this) : /*#__PURE__*/ 0,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center\",\n                            children: [\n                                pathname == \"/home\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/project\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"mr-6 font-bold hover-link \",\n                                        children: \"Projects\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 10\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 9\n                                }, this),\n                                pathname == \"/project\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/project\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"mr-6 font-bold hover-link \",\n                                        children: \"Projects\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                                        lineNumber: 93,\n                                        columnNumber: 10\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 9\n                                }, this),\n                                route == !(\"/project/[Intro]\" || 0) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/project/\".concat(teamNumber),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: route == \"/project/[Intro]\" ? \"\".concat(activeClassName, \" + font-bold hover-link\") : \"font-bold hover-link\",\n                                                children: \"Project\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                                                lineNumber: 102,\n                                                columnNumber: 11\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                                            lineNumber: 101,\n                                            columnNumber: 10\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/team/\".concat(teamNumber),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: route == \"/project/[Intro]\" ? \"\".concat(activeClassName, \" + font-bold hover-link\") : \"font-bold hover-link\",\n                                                children: \"Team\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                                                lineNumber: 113,\n                                                columnNumber: 11\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                                            lineNumber: 112,\n                                            columnNumber: 10\n                                        }, this)\n                                    ]\n                                }, void 0, true) : \"\",\n                                isLoggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                                    lineNumber: 127,\n                                    columnNumber: 22\n                                }, this) : \"\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                            lineNumber: 84,\n                            columnNumber: 7\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                    lineNumber: 70,\n                    columnNumber: 6\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                lineNumber: 69,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n            lineNumber: 68,\n            columnNumber: 4\n        }, this)\n    }, void 0, false);\n}\n_s(Nav, \"0DXSH4jZNF/F/EOUp4oxRipVztE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch\n    ];\n});\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsQ0FBYSxPQUFYUCxVQUFVLENBQUU7c0RBQ25DLDRFQUFDUyxJQUFFO2dEQUNGTixTQUFTLEVBQ1JsQyxLQUFLLElBQUksa0JBQWtCLEdBQ3hCLEVBQUMsQ0FBa0IsTUFBdUIsQ0FBdkM4QixlQUFlLEVBQUMseUJBQXVCLENBQUMsR0FDM0Msc0JBQXNCOzBEQUUxQixTQUVEOzs7OztvREFBSzs7Ozs7Z0RBQ0M7c0RBQ1AsOERBQUN2QyxrREFBSTs0Q0FBQytDLElBQUksRUFBRSxRQUFPLENBQWEsT0FBWFAsVUFBVSxDQUFFO3NEQUNoQyw0RUFBQ1MsSUFBRTtnREFDRk4sU0FBUyxFQUNSbEMsS0FBSyxJQUFJLGtCQUFrQixHQUN4QixFQUFDLENBQWtCLE1BQXVCLENBQXZDOEIsZUFBZSxFQUFDLHlCQUF1QixDQUFDLEdBQzNDLHNCQUFzQjswREFFMUIsTUFFRDs7Ozs7b0RBQUs7Ozs7O2dEQUNDOztnREFDTCxHQUVILEVBQUU7Z0NBRUZ6QixVQUFVLGlCQUFHLDhEQUFDYiwrQ0FBTTs7Ozt3Q0FBRyxHQUFHLEVBQUU7Ozs7OztnQ0FDeEI7Ozs7Ozt3QkFDRDs7Ozs7b0JBQ0Q7Ozs7O2dCQUNEO3FCQUNKLENBQ0Y7Q0FDRjtHQTVIUU0sR0FBRzs7UUFDVVIsa0RBQVM7UUFDWkEsa0RBQVM7UUFDWkEsa0RBQVM7UUFLUEksb0RBQVc7OztBQVJwQkksS0FBQUEsR0FBRztBQThIWiwrREFBZUEsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2L05hdi5qcz8zODBmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAZm9ybWF0ICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgTG9nT3V0IGZyb20gJy4vTG9nb3V0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHNldFVzZXJOYW1lLCBzZXRVc2VySWQgfSBmcm9tICcuLi8uLi9zcmMvc3RvcmUvbW9kdWxlcy91c2VyJztcbmltcG9ydCB7IEZpcmViYXNlQXV0aCB9IGZyb20gJy4uLy4uL3BhZ2VzL2ZpcmViYXNlJztcblxuZnVuY3Rpb24gTmF2KCkge1xuXHRjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VSb3V0ZXIoKTtcblx0Y29uc3QgeyByb3V0ZSB9ID0gdXNlUm91dGVyKCk7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXHRjb25zdCB7IHF1ZXJ5IH0gPSByb3V0ZXI7XG5cdGNvbnN0IFtpbml0LCBzZXRJbml0XSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW2lzTG9nZ2VkSW4sIHNldElzTG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbdXNlck9iaiwgc2V0VXNlck9ial0gPSB1c2VTdGF0ZShudWxsKTtcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXHRjb25zdCBbcHJvamVjdE1lbnUsIHNldFByb2plY3RNZW51XSA9IHVzZVN0YXRlKHtcblx0XHRwcm9qZWN0OiBmYWxzZSxcblx0XHR0ZWFtOiBmYWxzZSxcblx0fSk7XG5cblx0Y29uc29sZS5sb2coXG5cdFx0J3JvdXRlJyxcblx0XHRyb3V0ZSA9PSAnL3RlYW0vW0ludHJvXScgfHwgJy9wcm9qZWN0L1tJbnRyb10nID8gJzEnIDogJzInXG5cdCk7XG5cblx0bGV0IHRlYW1Sb3V0ZSA9IHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0RmlyZWJhc2VBdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xuXHRcdFx0aWYgKHVzZXIpIHtcblx0XHRcdFx0c2V0SXNMb2dnZWRJbih0cnVlKTtcblx0XHRcdFx0Ly8gcm91dGVyLnB1c2goJy9ob21lJyk7XG5cdFx0XHRcdGRpc3BhdGNoKHNldFVzZXJOYW1lKHVzZXIuZGlzcGxheU5hbWUpKTtcblx0XHRcdFx0ZGlzcGF0Y2goc2V0VXNlcklkKHVzZXIudWlkKSk7XG5cdFx0XHRcdHNldFVzZXJPYmooe1xuXHRcdFx0XHRcdGRpc3BsYXlOYW1lOiB1c2VyLmRpc3BsYXlOYW1lLFxuXHRcdFx0XHRcdHVpZDogdXNlci51aWQsXG5cdFx0XHRcdFx0dXBkYXRlUHJvZmlsZTogKGFyZ3MpID0+IHVzZXIudXBkYXRlUHJvZmlsZShhcmdzKSxcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZXRJc0xvZ2dlZEluKGZhbHNlKTtcblx0XHRcdFx0cm91dGVyLnB1c2goJy9sb2dpbicpO1xuXHRcdFx0fVxuXHRcdFx0c2V0SW5pdCh0cnVlKTtcblx0XHR9KTtcblx0fSwgW10pO1xuXG5cdGNvbnN0IHJlZnJlc2hVc2VyID0gKCkgPT4ge1xuXHRcdGNvbnN0IHVzZXIgPSBhdXRoU2VydmljZS5jdXJyZW50VXNlcjtcblx0XHRzZXRVc2VyT2JqKHtcblx0XHRcdGRpc3BsYXlOYW1lOiB1c2VyLmRpc3BsYXlOYW1lLFxuXHRcdFx0dWlkOiB1c2VyLnVpZCxcblx0XHRcdHVwZGF0ZVByb2ZpbGU6IChhcmdzKSA9PiB1c2VyLnVwZGF0ZVByb2ZpbGUoYXJncyksXG5cdFx0fSk7XG5cdH07XG5cblx0bGV0IGFjdGl2ZVN0eWxlID0ge1xuXHRcdHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lIGdyZWVuJyxcblx0XHRjb2xvcjogJ2dyZWVuJyxcblx0fTtcblx0bGV0IGFjdGl2ZUNsYXNzTmFtZSA9ICd1bmRlcmxpbmUnO1xuXG5cdGNvbnN0IHRlYW1OdW1iZXIgPSBxdWVyeS5JbnRybztcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgei01MFx0Jz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9JyB3LWZ1bGwgcHgtMTYgcHktNiBiZy13aGl0ZSB0ZXh0LWJsYWNrIGZpeGVkIHRvcC0wIGxlZnQtMCAnPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcdCc+XG5cdFx0XHRcdFx0XHR7cGF0aG5hbWUgPT0gJy9ob21lJyB8fCAnL3Byb2plY3RzJyA/IChcblx0XHRcdFx0XHRcdFx0PExpbmsgb25DbGljaz17KCkgPT4gd2luZG93LnNjcm9sbFRvKDAsIDApfSBocmVmPScvaG9tZSc+XG5cdFx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT0nY3Vyc29yLXBvaW50ZXIgZm9udC1leHRyYWJvbGQgdGV4dC1ncmVlbi03MDAnPlxuXHRcdFx0XHRcdFx0XHRcdFx0Rm9yTXlUZWFtXG5cdFx0XHRcdFx0XHRcdFx0PC9oMT5cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0PExpbmsgb25DbGljaz17KCkgPT4gd2luZG93LnNjcm9sbFRvKDAsIDApfSBocmVmPScvcHJvamVjdCc+XG5cdFx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT0nY3Vyc29yLXBvaW50ZXIgZm9udC1leHRyYWJvbGQgJz5NeSBMb2dvPC9oMT5cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0KX1cblxuXHRcdFx0XHRcdFx0ey8qIFJpZ2h0IE1lbnUgKi99XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXInPlxuXHRcdFx0XHRcdFx0XHR7LyogcHJvamVjdHMgKi99XG5cdFx0XHRcdFx0XHRcdHtwYXRobmFtZSA9PSAnL2hvbWUnICYmIChcblx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvcHJvamVjdCc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSdtci02IGZvbnQtYm9sZCBob3Zlci1saW5rICc+UHJvamVjdHM8L2gyPlxuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0e3BhdGhuYW1lID09ICcvcHJvamVjdCcgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9wcm9qZWN0Jz5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9J21yLTYgZm9udC1ib2xkIGhvdmVyLWxpbmsgJz5Qcm9qZWN0czwvaDI+XG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHQpfVxuXG5cdFx0XHRcdFx0XHRcdHsvKiDrkZjri6Qg7ZWc67KI7JeQIOy7qO2KuOuhpCDqsIDriqXtlZjqsowg7ZWY6rOgIOyLtuydjCAqL31cblxuXHRcdFx0XHRcdFx0XHR7cm91dGUgPT0gISgnL3Byb2plY3QvW0ludHJvXScgfHwgJy90ZWFtL1tJbnRyb10nKSA/IChcblx0XHRcdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YC9wcm9qZWN0LyR7dGVhbU51bWJlcn1gfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGgyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJvdXRlID09ICcvcHJvamVjdC9bSW50cm9dJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IGAke2FjdGl2ZUNsYXNzTmFtZX0gKyBmb250LWJvbGQgaG92ZXItbGlua2Bcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnZm9udC1ib2xkIGhvdmVyLWxpbmsnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0UHJvamVjdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2gyPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YC90ZWFtLyR7dGVhbU51bWJlcn1gfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGgyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJvdXRlID09ICcvcHJvamVjdC9bSW50cm9dJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IGAke2FjdGl2ZUNsYXNzTmFtZX0gKyBmb250LWJvbGQgaG92ZXItbGlua2Bcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnZm9udC1ib2xkIGhvdmVyLWxpbmsnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0VGVhbVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2gyPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHRcdCcnXG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdHtpc0xvZ2dlZEluID8gPExvZ091dCAvPiA6ICcnfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiTGluayIsIkxvZ091dCIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJzZXRVc2VyTmFtZSIsInNldFVzZXJJZCIsIkZpcmViYXNlQXV0aCIsIk5hdiIsInBhdGhuYW1lIiwicm91dGUiLCJyb3V0ZXIiLCJxdWVyeSIsImluaXQiLCJzZXRJbml0IiwiaXNMb2dnZWRJbiIsInNldElzTG9nZ2VkSW4iLCJ1c2VyT2JqIiwic2V0VXNlck9iaiIsImRpc3BhdGNoIiwicHJvamVjdCIsInRlYW0iLCJwcm9qZWN0TWVudSIsInNldFByb2plY3RNZW51IiwiY29uc29sZSIsImxvZyIsInRlYW1Sb3V0ZSIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVzZXIiLCJkaXNwbGF5TmFtZSIsInVpZCIsInVwZGF0ZVByb2ZpbGUiLCJhcmdzIiwicHVzaCIsInJlZnJlc2hVc2VyIiwiYXV0aFNlcnZpY2UiLCJjdXJyZW50VXNlciIsImFjdGl2ZVN0eWxlIiwidGV4dERlY29yYXRpb24iLCJjb2xvciIsImFjdGl2ZUNsYXNzTmFtZSIsInRlYW1OdW1iZXIiLCJJbnRybyIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJ3aW5kb3ciLCJzY3JvbGxUbyIsImhyZWYiLCJoMSIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Nav/Nav.js\n"));

/***/ })

});