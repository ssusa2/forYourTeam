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

/***/ "./pages/project/index.js":
/*!********************************!*\
  !*** ./pages/project/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"../node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"../node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"../node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ProjectList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectList */ \"./pages/project/ProjectList.js\");\n/* harmony import */ var _SortGenre__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SortGenre */ \"./pages/project/SortGenre.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase */ \"./pages/firebase.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/firestore */ \"../node_modules/firebase/firestore/dist/index.esm.js\");\n/** @format */ // import Main from '../Home/Main';\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Projects() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), projects = ref[0], setProjects = ref[1];\n    var userInfo = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function(param) {\n        var user = param.user;\n        return user;\n    });\n    console.log(\"userInfo\", userInfo);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), genre = ref1[0], setGenre = ref1[1];\n    var fetchGenre = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(Intro) {\n            var genreRef, genreSnap;\n            return _Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        genreRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, \"genre\", \"appStore\");\n                        _ctx.next = 3;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.getDoc)(genreRef);\n                    case 3:\n                        genreSnap = _ctx.sent;\n                        if (genreSnap.exists()) {\n                            setGenre(genreSnap.data());\n                        } else {\n                            console.log(\"No such document!\");\n                        }\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchGenre(Intro) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        fetchGenre();\n    }, []);\n    var queryGerne = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(value) {\n            var genreQuery, querySnapshot, newData;\n            return _Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        genreQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, \"project\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.where)(\"genre\", \"==\", \"\".concat(value)));\n                        console.log(\"genreQuery\", genreQuery);\n                        _ctx.next = 4;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.getDocs)(genreQuery);\n                    case 4:\n                        querySnapshot = _ctx.sent;\n                        newData = querySnapshot.docs.map(function(doc) {\n                            return (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])({}, doc.data());\n                        });\n                        console.log(\"newData\", querySnapshot);\n                        setProjects(newData);\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function queryGerne(value) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var genre_options = [];\n    var a = Object.entries(genre);\n    for(var i = 0; i < (a === null || a === void 0 ? void 0 : a.length); i++){\n        var op = {};\n        op.value = a[i][0];\n        op.id = a[i][1];\n        op.label = a[i][0];\n        genre_options.push(op);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var fetchProject = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var projectRef, newData;\n                return _Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, \"project\"));\n                        case 2:\n                            projectRef = _ctx.sent;\n                            newData = projectRef.docs.map(function(doc) {\n                                return (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])({}, doc.data());\n                            });\n                            setProjects(newData);\n                        case 5:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function fetchProject() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchProject();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"my-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        className: \"middle-title\",\n                        children: \"Projects\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/index.js\",\n                        lineNumber: 80,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between items-end\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: \"my-3\",\n                                children: [\n                                    \"나의 프로젝트와 다른 프로젝트를 한 공간에.\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/index.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 7\n                                    }, this),\n                                    \" 여러분의 팀과 프로젝트를 소개해보세요.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/index.js\",\n                                lineNumber: 82,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                onClick: function() {\n                                    if (userInfo === null || userInfo === void 0 ? void 0 : userInfo.uid) {\n                                        router.push(\"/introduce\");\n                                    } else {\n                                        if (confirm(\"로그인이 필요한 서비스 입니다. 로그인 하시겠습니까?\")) {\n                                            router.push(\"/login\");\n                                        }\n                                        {\n                                            \"\";\n                                        }\n                                    }\n                                },\n                                className: \"px-4 h-[40px] main-hover main-color font-bold rounded-full border-green-700 border-2\",\n                                children: \"+ 프로젝트 추가하기\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/index.js\",\n                                lineNumber: 86,\n                                columnNumber: 6\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/index.js\",\n                        lineNumber: 81,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/index.js\",\n                lineNumber: 79,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"mb-8 mt-6 sm:mb-12 h-px bg-slate-300\"\n            }, void 0, false, {\n                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/index.js\",\n                lineNumber: 107,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                className: \"small-title\",\n                children: \"보고싶은 장르를 선택하세요.\"\n            }, void 0, false, {\n                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/index.js\",\n                lineNumber: 108,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"overflow-x-scroll w-full flex mt-3 scrollbar-hide\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SortGenre__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    genre: genre_options,\n                    queryGerne: queryGerne\n                }, void 0, false, {\n                    fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/index.js\",\n                    lineNumber: 110,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/index.js\",\n                lineNumber: 109,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ProjectList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                projects: projects\n            }, void 0, false, {\n                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/index.js\",\n                lineNumber: 112,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/index.js\",\n        lineNumber: 78,\n        columnNumber: 3\n    }, this);\n}\n_s(Projects, \"6WIbt//xyW7661xGBsJITsC9QB8=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLDhEQUFDRyxJQUFFOzs7OzRDQUFHO29DQUFBLHdCQUNQOzs7Ozs7b0NBQUk7MENBQ0osOERBQUNDLFFBQU07Z0NBQ05DLE9BQU8sRUFBRSxXQUFNO29DQUNkLElBQUl0QyxRQUFRLGFBQVJBLFFBQVEsV0FBSyxHQUFiQSxLQUFBQSxDQUFhLEdBQWJBLFFBQVEsQ0FBRXVDLEdBQUcsRUFBRTt3Q0FDbEJuQyxNQUFNLENBQUN5QixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7cUNBQzFCLE1BQU07d0NBQ04sSUFDQ1csT0FBTyxDQUFDLCtCQUErQixDQUFDLEVBQ3ZDOzRDQUNEcEMsTUFBTSxDQUFDeUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3lDQUN0Qjt3Q0FDRDs0Q0FDRSxFQUFFLENBQUU7eUNBQ0w7cUNBQ0Q7aUNBQ0Q7Z0NBQ0RJLFNBQVMsRUFBQyxzRkFBc0Y7MENBQ2hHLGFBRUQ7Ozs7O29DQUFTOzs7Ozs7NEJBQ0o7Ozs7OztvQkFDRDswQkFDTiw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHNDQUFzQzs7Ozs7b0JBQU87MEJBQzVELDhEQUFDRSxHQUFDO2dCQUFDRixTQUFTLEVBQUMsYUFBYTswQkFBQyxpQkFBZTs7Ozs7b0JBQUk7MEJBQzlDLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsbURBQW1EOzBCQUNqRSw0RUFBQzlDLGtEQUFTO29CQUFDa0IsS0FBSyxFQUFFZSxhQUFhO29CQUFFUCxVQUFVLEVBQUVBLFVBQVU7Ozs7O3dCQUFJOzs7OztvQkFDdEQ7MEJBQ04sOERBQUMzQixvREFBVztnQkFBQ1ksUUFBUSxFQUFFQSxRQUFROzs7OztvQkFBSTs7Ozs7O1lBQzlCLENBQ0w7Q0FDRjtHQWpHUUQsUUFBUTs7UUFFQ1Isb0RBQVc7UUFHYk4sa0RBQVM7OztBQUxoQmMsS0FBQUEsUUFBUTtBQW1HakIsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9qZWN0L2luZGV4LmpzP2JiYTEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBmb3JtYXQgKi9cbi8vIGltcG9ydCBNYWluIGZyb20gJy4uL0hvbWUvTWFpbic7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb2plY3RMaXN0IGZyb20gJy4vUHJvamVjdExpc3QnO1xuaW1wb3J0IFNvcnRHZW5yZSBmcm9tICcuL1NvcnRHZW5yZSc7XG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uL2ZpcmViYXNlJztcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7XG5cdGNvbGxlY3Rpb24sXG5cdGdldERvY3MsXG5cdGRvYyxcblx0Z2V0RG9jLFxuXHRxdWVyeSxcblx0d2hlcmUsXG59IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XG5cbmZ1bmN0aW9uIFByb2plY3RzKCkge1xuXHRjb25zdCBbcHJvamVjdHMsIHNldFByb2plY3RzXSA9IHVzZVN0YXRlKFtdKTtcblx0Y29uc3QgdXNlckluZm8gPSB1c2VTZWxlY3RvcigoeyB1c2VyIH0pID0+IHVzZXIpO1xuXG5cdGNvbnNvbGUubG9nKCd1c2VySW5mbycsIHVzZXJJbmZvKTtcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cblx0Y29uc3QgW2dlbnJlLCBzZXRHZW5yZV0gPSB1c2VTdGF0ZShbXSk7XG5cblx0Y29uc3QgZmV0Y2hHZW5yZSA9IGFzeW5jIChJbnRybykgPT4ge1xuXHRcdGNvbnN0IGdlbnJlUmVmID0gZG9jKGRiLCAnZ2VucmUnLCAnYXBwU3RvcmUnKTtcblx0XHRjb25zdCBnZW5yZVNuYXAgPSBhd2FpdCBnZXREb2MoZ2VucmVSZWYpO1xuXHRcdGlmIChnZW5yZVNuYXAuZXhpc3RzKCkpIHtcblx0XHRcdHNldEdlbnJlKGdlbnJlU25hcC5kYXRhKCkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnTm8gc3VjaCBkb2N1bWVudCEnKTtcblx0XHR9XG5cdH07XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRmZXRjaEdlbnJlKCk7XG5cdH0sIFtdKTtcblxuXHRjb25zdCBxdWVyeUdlcm5lID0gYXN5bmMgKHZhbHVlKSA9PiB7XG5cdFx0Y29uc3QgZ2VucmVRdWVyeSA9IHF1ZXJ5KFxuXHRcdFx0Y29sbGVjdGlvbihkYiwgJ3Byb2plY3QnKSxcblx0XHRcdHdoZXJlKCdnZW5yZScsICc9PScsIGAke3ZhbHVlfWApXG5cdFx0KTtcblx0XHRjb25zb2xlLmxvZygnZ2VucmVRdWVyeScsIGdlbnJlUXVlcnkpO1xuXHRcdGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKGdlbnJlUXVlcnkpO1xuXHRcdGNvbnN0IG5ld0RhdGEgPSBxdWVyeVNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+ICh7XG5cdFx0XHQuLi5kb2MuZGF0YSgpLFxuXHRcdH0pKTtcblx0XHRjb25zb2xlLmxvZygnbmV3RGF0YScsIHF1ZXJ5U25hcHNob3QpO1xuXHRcdHNldFByb2plY3RzKG5ld0RhdGEpO1xuXHR9O1xuXG5cdGxldCBnZW5yZV9vcHRpb25zID0gW107XG5cdGxldCBhID0gT2JqZWN0LmVudHJpZXMoZ2VucmUpO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgYT8ubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgb3AgPSB7fTtcblx0XHRvcC52YWx1ZSA9IGFbaV1bMF07XG5cdFx0b3AuaWQgPSBhW2ldWzFdO1xuXHRcdG9wLmxhYmVsID0gYVtpXVswXTtcblx0XHRnZW5yZV9vcHRpb25zLnB1c2gob3ApO1xuXHR9XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgZmV0Y2hQcm9qZWN0ID0gYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgcHJvamVjdFJlZiA9IGF3YWl0IGdldERvY3MoY29sbGVjdGlvbihkYiwgJ3Byb2plY3QnKSk7XG5cdFx0XHRjb25zdCBuZXdEYXRhID0gcHJvamVjdFJlZi5kb2NzLm1hcCgoZG9jKSA9PiAoe1xuXHRcdFx0XHQuLi5kb2MuZGF0YSgpLFxuXHRcdFx0fSkpO1xuXHRcdFx0c2V0UHJvamVjdHMobmV3RGF0YSk7XG5cdFx0fTtcblxuXHRcdGZldGNoUHJvamVjdCgpO1xuXHR9LCBbXSk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nbXktY29udGFpbmVyJz5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxoMiBjbGFzc05hbWU9J21pZGRsZS10aXRsZSc+UHJvamVjdHM8L2gyPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtZW5kJz5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J215LTMnPlxuXHRcdFx0XHRcdFx064KY7J2YIO2UhOuhnOygne2KuOyZgCDri6Trpbgg7ZSE66Gc7KCd7Yq466W8IO2VnCDqs7XqsITsl5AuXG5cdFx0XHRcdFx0XHQ8YnIgLz4g7Jes65+s67aE7J2YIO2MgOqzvCDtlITroZzsoJ3tirjrpbwg7IaM6rCc7ZW067O07IS47JqULlxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmICh1c2VySW5mbz8udWlkKSB7XG5cdFx0XHRcdFx0XHRcdFx0cm91dGVyLnB1c2goJy9pbnRyb2R1Y2UnKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRjb25maXJtKCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWcIOyEnOu5hOyKpCDsnoXri4jri6QuIOuhnOq3uOyduCDtlZjsi5zqsqDsirXri4jquYw/Jylcblx0XHRcdFx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJvdXRlci5wdXNoKCcvbG9naW4nKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0KCcnKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J3B4LTQgaC1bNDBweF0gbWFpbi1ob3ZlciBtYWluLWNvbG9yIGZvbnQtYm9sZCByb3VuZGVkLWZ1bGwgYm9yZGVyLWdyZWVuLTcwMCBib3JkZXItMidcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQrIO2UhOuhnOygne2KuCDstpTqsIDtlZjquLBcblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtYi04IG10LTYgc206bWItMTIgaC1weCBiZy1zbGF0ZS0zMDAnPjwvZGl2PlxuXHRcdFx0PHAgY2xhc3NOYW1lPSdzbWFsbC10aXRsZSc+67O06rOg7Iu27J2AIOyepeultOulvCDshKDtg53tlZjshLjsmpQuPC9wPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J292ZXJmbG93LXgtc2Nyb2xsIHctZnVsbCBmbGV4IG10LTMgc2Nyb2xsYmFyLWhpZGUnPlxuXHRcdFx0XHQ8U29ydEdlbnJlIGdlbnJlPXtnZW5yZV9vcHRpb25zfSBxdWVyeUdlcm5lPXtxdWVyeUdlcm5lfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8UHJvamVjdExpc3QgcHJvamVjdHM9e3Byb2plY3RzfSAvPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlByb2plY3RMaXN0IiwiU29ydEdlbnJlIiwiZGIiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwiY29sbGVjdGlvbiIsImdldERvY3MiLCJkb2MiLCJnZXREb2MiLCJxdWVyeSIsIndoZXJlIiwiUHJvamVjdHMiLCJwcm9qZWN0cyIsInNldFByb2plY3RzIiwidXNlckluZm8iLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsInJvdXRlciIsImdlbnJlIiwic2V0R2VucmUiLCJmZXRjaEdlbnJlIiwiSW50cm8iLCJnZW5yZVJlZiIsImdlbnJlU25hcCIsImV4aXN0cyIsImRhdGEiLCJxdWVyeUdlcm5lIiwidmFsdWUiLCJnZW5yZVF1ZXJ5IiwicXVlcnlTbmFwc2hvdCIsIm5ld0RhdGEiLCJkb2NzIiwibWFwIiwiZ2VucmVfb3B0aW9ucyIsImEiLCJPYmplY3QiLCJlbnRyaWVzIiwiaSIsImxlbmd0aCIsIm9wIiwiaWQiLCJsYWJlbCIsInB1c2giLCJmZXRjaFByb2plY3QiLCJwcm9qZWN0UmVmIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJwIiwiYnIiLCJidXR0b24iLCJvbkNsaWNrIiwidWlkIiwiY29uZmlybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/project/index.js\n"));

/***/ })

});