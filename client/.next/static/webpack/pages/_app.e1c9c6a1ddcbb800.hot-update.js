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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"../node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Logout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Logout */ \"./components/Nav/Logout.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var _src_store_modules_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/store/modules/user */ \"./src/store/modules/user.js\");\n/* harmony import */ var _pages_firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/firebase */ \"./pages/firebase.js\");\n/** @format */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Nav() {\n    _s();\n    var pathname = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().pathname;\n    var route = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().route;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var query = router.query;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), init = ref[0], setInit = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isLoggedIn = ref1[0], setIsLoggedIn = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), userObj = ref2[0], setUserObj = ref2[1];\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n    console.log(\"route\", route == \"/team/[Intro]\" || \"/project/[Intro]\" ? \"\" : 0);\n    if (route == \"/team/[Intro]\") {}\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        _pages_firebase__WEBPACK_IMPORTED_MODULE_7__.FirebaseAuth.onAuthStateChanged(function(user) {\n            if (user) {\n                setIsLoggedIn(true);\n                // router.push('/home');\n                dispatch((0,_src_store_modules_user__WEBPACK_IMPORTED_MODULE_6__.setUserName)(user.displayName));\n                dispatch((0,_src_store_modules_user__WEBPACK_IMPORTED_MODULE_6__.setUserId)(user.uid));\n                setUserObj({\n                    displayName: user.displayName,\n                    uid: user.uid,\n                    updateProfile: function(args) {\n                        return user.updateProfile(args);\n                    }\n                });\n            } else {\n                setIsLoggedIn(false);\n                router.push(\"/login\");\n            }\n            setInit(true);\n        });\n    }, []);\n    var refreshUser = function() {\n        var user = authService.currentUser;\n        setUserObj({\n            displayName: user.displayName,\n            uid: user.uid,\n            updateProfile: function(args) {\n                return user.updateProfile(args);\n            }\n        });\n    };\n    var activeStyle = {\n        textDecoration: \"underline green\",\n        color: \"green\"\n    };\n    var activeClassName = \"underline\";\n    var teamNumber = query.Intro;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative z-50 \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" w-full px-16 py-6 bg-white text-black fixed top-0 left-0 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between items-center \",\n                    children: [\n                        pathname == \"/home\" || \"/projects\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            onClick: function() {\n                                return window.scrollTo(0, 0);\n                            },\n                            href: \"/home\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"cursor-pointer font-extrabold text-green-700\",\n                                children: \"ForMyTeam\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                                lineNumber: 72,\n                                columnNumber: 9\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                            lineNumber: 71,\n                            columnNumber: 8\n                        }, this) : /*#__PURE__*/ 0,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center\",\n                            children: [\n                                pathname == \"/home\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/project\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"mr-6 font-bold hover-link \",\n                                        children: \"Projects\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                                        lineNumber: 87,\n                                        columnNumber: 10\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 9\n                                }, this),\n                                pathname == \"/project\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/project\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"mr-6 font-bold hover-link \",\n                                        children: \"Projects\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                                        lineNumber: 92,\n                                        columnNumber: 10\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 9\n                                }, this),\n                                route == \"/project/[Intro]\" || \"/team/[Intro]\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/project/\".concat(teamNumber),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: route == \"/project/[Intro]\" ? \"\".concat(activeClassName, \" + font-bold hover-link\") : \"font-bold hover-link\",\n                                                children: \"Project\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                                                lineNumber: 100,\n                                                columnNumber: 11\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                                            lineNumber: 99,\n                                            columnNumber: 10\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/team/\".concat(teamNumber),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: route == \"/project/[Intro]\" ? \"\".concat(activeClassName, \" + font-bold hover-link\") : \"font-bold hover-link\",\n                                                children: \"Team\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                                                lineNumber: 111,\n                                                columnNumber: 11\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                                            lineNumber: 110,\n                                            columnNumber: 10\n                                        }, this)\n                                    ]\n                                }, void 0, true) : 0,\n                                isLoggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                                    lineNumber: 125,\n                                    columnNumber: 22\n                                }, this) : \"\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                            lineNumber: 83,\n                            columnNumber: 7\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                    lineNumber: 69,\n                    columnNumber: 6\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n                lineNumber: 68,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/components/Nav/Nav.js\",\n            lineNumber: 67,\n            columnNumber: 4\n        }, this)\n    }, void 0, false);\n}\n_s(Nav, \"RMZFeWtK9DS3qwdVEucaoD8ARjE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch\n    ];\n});\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MUIsU0FFRDs7Ozs7b0RBQUs7Ozs7O2dEQUNDO3NEQUNQLDhEQUFDbEMsa0RBQUk7NENBQUMwQyxJQUFJLEVBQUUsUUFBTyxDQUFhLE9BQVhQLFVBQVUsQ0FBRTtzREFDaEMsNEVBQUNTLElBQUU7Z0RBQ0ZOLFNBQVMsRUFDUjdCLEtBQUssSUFBSSxrQkFBa0IsR0FDeEIsRUFBQyxDQUFrQixNQUF1QixDQUF2Q3lCLGVBQWUsRUFBQyx5QkFBdUIsQ0FBQyxHQUMzQyxzQkFBc0I7MERBRTFCLE1BRUQ7Ozs7O29EQUFLOzs7OztnREFDQzs7Z0RBQ0wsR0FFSCxDQUFFO2dDQUVGcEIsVUFBVSxpQkFBRyw4REFBQ2IsK0NBQU07Ozs7d0NBQUcsR0FBRyxFQUFFOzs7Ozs7Z0NBQ3hCOzs7Ozs7d0JBQ0Q7Ozs7O29CQUNEOzs7OztnQkFDRDtxQkFDSixDQUNGO0NBQ0Y7R0ExSFFNLEdBQUc7O1FBQ1VSLGtEQUFTO1FBQ1pBLGtEQUFTO1FBQ1pBLGtEQUFTO1FBS1BJLG9EQUFXOzs7QUFScEJJLEtBQUFBLEdBQUc7QUE0SFosK0RBQWVBLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdi9OYXYuanM/MzgwZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGZvcm1hdCAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IExvZ091dCBmcm9tICcuL0xvZ291dCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzZXRVc2VyTmFtZSwgc2V0VXNlcklkIH0gZnJvbSAnLi4vLi4vc3JjL3N0b3JlL21vZHVsZXMvdXNlcic7XG5pbXBvcnQgeyBGaXJlYmFzZUF1dGggfSBmcm9tICcuLi8uLi9wYWdlcy9maXJlYmFzZSc7XG5cbmZ1bmN0aW9uIE5hdigpIHtcblx0Y29uc3QgeyBwYXRobmFtZSB9ID0gdXNlUm91dGVyKCk7XG5cdGNvbnN0IHsgcm91dGUgfSA9IHVzZVJvdXRlcigpO1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblx0Y29uc3QgeyBxdWVyeSB9ID0gcm91dGVyO1xuXHRjb25zdCBbaW5pdCwgc2V0SW5pdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtpc0xvZ2dlZEluLCBzZXRJc0xvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW3VzZXJPYmosIHNldFVzZXJPYmpdID0gdXNlU3RhdGUobnVsbCk7XG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuXHRjb25zb2xlLmxvZyhcblx0XHQncm91dGUnLFxuXHRcdHJvdXRlID09ICcvdGVhbS9bSW50cm9dJyB8fCAnL3Byb2plY3QvW0ludHJvXScgPyAnJyA6ICcnXG5cdCk7XG5cblx0aWYgKHJvdXRlID09ICcvdGVhbS9bSW50cm9dJykge1xuXHR9XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRGaXJlYmFzZUF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB7XG5cdFx0XHRpZiAodXNlcikge1xuXHRcdFx0XHRzZXRJc0xvZ2dlZEluKHRydWUpO1xuXHRcdFx0XHQvLyByb3V0ZXIucHVzaCgnL2hvbWUnKTtcblx0XHRcdFx0ZGlzcGF0Y2goc2V0VXNlck5hbWUodXNlci5kaXNwbGF5TmFtZSkpO1xuXHRcdFx0XHRkaXNwYXRjaChzZXRVc2VySWQodXNlci51aWQpKTtcblx0XHRcdFx0c2V0VXNlck9iaih7XG5cdFx0XHRcdFx0ZGlzcGxheU5hbWU6IHVzZXIuZGlzcGxheU5hbWUsXG5cdFx0XHRcdFx0dWlkOiB1c2VyLnVpZCxcblx0XHRcdFx0XHR1cGRhdGVQcm9maWxlOiAoYXJncykgPT4gdXNlci51cGRhdGVQcm9maWxlKGFyZ3MpLFxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNldElzTG9nZ2VkSW4oZmFsc2UpO1xuXHRcdFx0XHRyb3V0ZXIucHVzaCgnL2xvZ2luJyk7XG5cdFx0XHR9XG5cdFx0XHRzZXRJbml0KHRydWUpO1xuXHRcdH0pO1xuXHR9LCBbXSk7XG5cblx0Y29uc3QgcmVmcmVzaFVzZXIgPSAoKSA9PiB7XG5cdFx0Y29uc3QgdXNlciA9IGF1dGhTZXJ2aWNlLmN1cnJlbnRVc2VyO1xuXHRcdHNldFVzZXJPYmooe1xuXHRcdFx0ZGlzcGxheU5hbWU6IHVzZXIuZGlzcGxheU5hbWUsXG5cdFx0XHR1aWQ6IHVzZXIudWlkLFxuXHRcdFx0dXBkYXRlUHJvZmlsZTogKGFyZ3MpID0+IHVzZXIudXBkYXRlUHJvZmlsZShhcmdzKSxcblx0XHR9KTtcblx0fTtcblxuXHRsZXQgYWN0aXZlU3R5bGUgPSB7XG5cdFx0dGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUgZ3JlZW4nLFxuXHRcdGNvbG9yOiAnZ3JlZW4nLFxuXHR9O1xuXHRsZXQgYWN0aXZlQ2xhc3NOYW1lID0gJ3VuZGVybGluZSc7XG5cblx0Y29uc3QgdGVhbU51bWJlciA9IHF1ZXJ5LkludHJvO1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSB6LTUwXHQnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nIHctZnVsbCBweC0xNiBweS02IGJnLXdoaXRlIHRleHQtYmxhY2sgZml4ZWQgdG9wLTAgbGVmdC0wICc+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclx0Jz5cblx0XHRcdFx0XHRcdHtwYXRobmFtZSA9PSAnL2hvbWUnIHx8ICcvcHJvamVjdHMnID8gKFxuXHRcdFx0XHRcdFx0XHQ8TGluayBvbkNsaWNrPXsoKSA9PiB3aW5kb3cuc2Nyb2xsVG8oMCwgMCl9IGhyZWY9Jy9ob21lJz5cblx0XHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPSdjdXJzb3ItcG9pbnRlciBmb250LWV4dHJhYm9sZCB0ZXh0LWdyZWVuLTcwMCc+XG5cdFx0XHRcdFx0XHRcdFx0XHRGb3JNeVRlYW1cblx0XHRcdFx0XHRcdFx0XHQ8L2gxPlxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHQ8TGluayBvbkNsaWNrPXsoKSA9PiB3aW5kb3cuc2Nyb2xsVG8oMCwgMCl9IGhyZWY9Jy9wcm9qZWN0Jz5cblx0XHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPSdjdXJzb3ItcG9pbnRlciBmb250LWV4dHJhYm9sZCAnPk15IExvZ288L2gxPlxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQpfVxuXG5cdFx0XHRcdFx0XHR7LyogUmlnaHQgTWVudSAqL31cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlcic+XG5cdFx0XHRcdFx0XHRcdHsvKiBwcm9qZWN0cyAqL31cblx0XHRcdFx0XHRcdFx0e3BhdGhuYW1lID09ICcvaG9tZScgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9wcm9qZWN0Jz5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9J21yLTYgZm9udC1ib2xkIGhvdmVyLWxpbmsgJz5Qcm9qZWN0czwvaDI+XG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHR7cGF0aG5hbWUgPT0gJy9wcm9qZWN0JyAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL3Byb2plY3QnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT0nbXItNiBmb250LWJvbGQgaG92ZXItbGluayAnPlByb2plY3RzPC9oMj5cblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdCl9XG5cblx0XHRcdFx0XHRcdFx0ey8qIOuRmOuLpCDtlZzrsojsl5Ag7Luo7Yq466GkIOqwgOuKpe2VmOqyjCDtlZjqs6Ag7Iu27J2MICovfVxuXHRcdFx0XHRcdFx0XHR7cm91dGUgPT0gJy9wcm9qZWN0L1tJbnRyb10nIHx8ICcvdGVhbS9bSW50cm9dJyA/IChcblx0XHRcdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YC9wcm9qZWN0LyR7dGVhbU51bWJlcn1gfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGgyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJvdXRlID09ICcvcHJvamVjdC9bSW50cm9dJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IGAke2FjdGl2ZUNsYXNzTmFtZX0gKyBmb250LWJvbGQgaG92ZXItbGlua2Bcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnZm9udC1ib2xkIGhvdmVyLWxpbmsnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0UHJvamVjdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2gyPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YC90ZWFtLyR7dGVhbU51bWJlcn1gfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGgyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJvdXRlID09ICcvcHJvamVjdC9bSW50cm9dJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IGAke2FjdGl2ZUNsYXNzTmFtZX0gKyBmb250LWJvbGQgaG92ZXItbGlua2Bcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnZm9udC1ib2xkIGhvdmVyLWxpbmsnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0VGVhbVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2gyPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHRcdCcnXG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdHtpc0xvZ2dlZEluID8gPExvZ091dCAvPiA6ICcnfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiTGluayIsIkxvZ091dCIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJzZXRVc2VyTmFtZSIsInNldFVzZXJJZCIsIkZpcmViYXNlQXV0aCIsIk5hdiIsInBhdGhuYW1lIiwicm91dGUiLCJyb3V0ZXIiLCJxdWVyeSIsImluaXQiLCJzZXRJbml0IiwiaXNMb2dnZWRJbiIsInNldElzTG9nZ2VkSW4iLCJ1c2VyT2JqIiwic2V0VXNlck9iaiIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVzZXIiLCJkaXNwbGF5TmFtZSIsInVpZCIsInVwZGF0ZVByb2ZpbGUiLCJhcmdzIiwicHVzaCIsInJlZnJlc2hVc2VyIiwiYXV0aFNlcnZpY2UiLCJjdXJyZW50VXNlciIsImFjdGl2ZVN0eWxlIiwidGV4dERlY29yYXRpb24iLCJjb2xvciIsImFjdGl2ZUNsYXNzTmFtZSIsInRlYW1OdW1iZXIiLCJJbnRybyIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJ3aW5kb3ciLCJzY3JvbGxUbyIsImhyZWYiLCJoMSIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Nav/Nav.js\n"));

/***/ })

});