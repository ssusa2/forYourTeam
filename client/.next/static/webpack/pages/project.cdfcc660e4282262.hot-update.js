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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"../node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"../node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"../node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ProjectList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectList */ \"./pages/project/ProjectList.js\");\n/* harmony import */ var _SortGenre__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SortGenre */ \"./pages/project/SortGenre.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase */ \"./pages/firebase.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/firestore */ \"../node_modules/firebase/firestore/dist/index.esm.js\");\n/** @format */ // import Main from '../Home/Main';\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Projects() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), projects = ref[0], setProjects = ref[1];\n    var userInfo = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function(param) {\n        var user = param.user;\n        return user;\n    });\n    console.log(\"userInfo\", userInfo);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), genre = ref1[0], setGenre = ref1[1];\n    var fetchGenre = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(Intro) {\n            var genreRef, genreSnap;\n            return _Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        genreRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, \"genre\", \"appStore\");\n                        _ctx.next = 3;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.getDoc)(genreRef);\n                    case 3:\n                        genreSnap = _ctx.sent;\n                        if (genreSnap.exists()) {\n                            setGenre(genreSnap.data());\n                        } else {\n                            console.log(\"No such document!\");\n                        }\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchGenre(Intro) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        fetchGenre();\n    }, []);\n    var queryGerne = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(value) {\n            var genreQuery, querySnapshot, newData;\n            return _Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        genreQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, \"project\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.where)(\"genre\", \"==\", \"\".concat(value)));\n                        _ctx.next = 3;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.getDocs)(genreQuery);\n                    case 3:\n                        querySnapshot = _ctx.sent;\n                        console.log(\"querySnapshot\", querySnapshot);\n                        newData = querySnapshot.docs.map(function(doc) {\n                            return (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])({}, doc.data());\n                        });\n                        console.log(\"newData\", querySnapshot);\n                        setProjects(newData);\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function queryGerne(value) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var genre_options = [];\n    var a = Object.entries(genre);\n    for(var i = 0; i < (a === null || a === void 0 ? void 0 : a.length); i++){\n        var op = {};\n        op.value = a[i][0];\n        op.id = a[i][1];\n        op.label = a[i][0];\n        genre_options.push(op);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var fetchProject = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var projectRef, newData;\n                return _Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, \"project\"));\n                        case 2:\n                            projectRef = _ctx.sent;\n                            newData = projectRef.docs.map(function(doc) {\n                                return (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])({}, doc.data());\n                            });\n                            setProjects(newData);\n                        case 5:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function fetchProject() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchProject();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"my-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        className: \"middle-title\",\n                        children: \"Projects\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/index.js\",\n                        lineNumber: 81,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between items-end\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: \"my-3\",\n                                children: [\n                                    \"나의 프로젝트와 다른 프로젝트를 한 공간에.\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/index.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 7\n                                    }, this),\n                                    \" 여러분의 팀과 프로젝트를 소개해보세요.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/index.js\",\n                                lineNumber: 83,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                onClick: function() {\n                                    if (userInfo === null || userInfo === void 0 ? void 0 : userInfo.uid) {\n                                        router.push(\"/introduce\");\n                                    } else {\n                                        if (confirm(\"로그인이 필요한 서비스 입니다. 로그인 하시겠습니까?\")) {\n                                            router.push(\"/login\");\n                                        }\n                                        {\n                                            \"\";\n                                        }\n                                    }\n                                },\n                                className: \"px-4 h-[40px] main-hover main-color font-bold rounded-full border-green-700 border-2\",\n                                children: \"+ 프로젝트 추가하기\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/index.js\",\n                                lineNumber: 87,\n                                columnNumber: 6\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/index.js\",\n                        lineNumber: 82,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/index.js\",\n                lineNumber: 80,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"mb-8 mt-6 sm:mb-12 h-px bg-slate-300\"\n            }, void 0, false, {\n                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/index.js\",\n                lineNumber: 108,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                className: \"small-title\",\n                children: \"보고싶은 장르를 선택하세요.\"\n            }, void 0, false, {\n                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/index.js\",\n                lineNumber: 109,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"overflow-x-scroll w-full flex mt-3 scrollbar-hide\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SortGenre__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    genre: genre_options,\n                    queryGerne: queryGerne\n                }, void 0, false, {\n                    fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/index.js\",\n                    lineNumber: 111,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/index.js\",\n                lineNumber: 110,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ProjectList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                projects: projects\n            }, void 0, false, {\n                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/index.js\",\n                lineNumber: 113,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/index.js\",\n        lineNumber: 79,\n        columnNumber: 3\n    }, this);\n}\n_s(Projects, \"6WIbt//xyW7661xGBsJITsC9QB8=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0RBQUEsOERBQUNHLElBQUU7Ozs7NENBQUc7b0NBQUEsd0JBQ1A7Ozs7OztvQ0FBSTswQ0FDSiw4REFBQ0MsUUFBTTtnQ0FDTkMsT0FBTyxFQUFFLFdBQU07b0NBQ2QsSUFBSXRDLFFBQVEsYUFBUkEsUUFBUSxXQUFLLEdBQWJBLEtBQUFBLENBQWEsR0FBYkEsUUFBUSxDQUFFdUMsR0FBRyxFQUFFO3dDQUNsQm5DLE1BQU0sQ0FBQ3lCLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztxQ0FDMUIsTUFBTTt3Q0FDTixJQUNDVyxPQUFPLENBQUMsK0JBQStCLENBQUMsRUFDdkM7NENBQ0RwQyxNQUFNLENBQUN5QixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7eUNBQ3RCO3dDQUNEOzRDQUNFLEVBQUUsQ0FBRTt5Q0FDTDtxQ0FDRDtpQ0FDRDtnQ0FDREksU0FBUyxFQUFDLHNGQUFzRjswQ0FDaEcsYUFFRDs7Ozs7b0NBQVM7Ozs7Ozs0QkFDSjs7Ozs7O29CQUNEOzBCQUNOLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsc0NBQXNDOzs7OztvQkFBTzswQkFDNUQsOERBQUNFLEdBQUM7Z0JBQUNGLFNBQVMsRUFBQyxhQUFhOzBCQUFDLGlCQUFlOzs7OztvQkFBSTswQkFDOUMsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxtREFBbUQ7MEJBQ2pFLDRFQUFDOUMsa0RBQVM7b0JBQUNrQixLQUFLLEVBQUVlLGFBQWE7b0JBQUVQLFVBQVUsRUFBRUEsVUFBVTs7Ozs7d0JBQUk7Ozs7O29CQUN0RDswQkFDTiw4REFBQzNCLG9EQUFXO2dCQUFDWSxRQUFRLEVBQUVBLFFBQVE7Ozs7O29CQUFJOzs7Ozs7WUFDOUIsQ0FDTDtDQUNGO0dBbEdRRCxRQUFROztRQUVDUixvREFBVztRQUdiTixrREFBUzs7O0FBTGhCYyxLQUFBQSxRQUFRO0FBb0dqQiwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2plY3QvaW5kZXguanM/YmJhMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGZvcm1hdCAqL1xuLy8gaW1wb3J0IE1haW4gZnJvbSAnLi4vSG9tZS9NYWluJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvamVjdExpc3QgZnJvbSAnLi9Qcm9qZWN0TGlzdCc7XG5pbXBvcnQgU29ydEdlbnJlIGZyb20gJy4vU29ydEdlbnJlJztcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vZmlyZWJhc2UnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtcblx0Y29sbGVjdGlvbixcblx0Z2V0RG9jcyxcblx0ZG9jLFxuXHRnZXREb2MsXG5cdHF1ZXJ5LFxuXHR3aGVyZSxcbn0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcblxuZnVuY3Rpb24gUHJvamVjdHMoKSB7XG5cdGNvbnN0IFtwcm9qZWN0cywgc2V0UHJvamVjdHNdID0gdXNlU3RhdGUoW10pO1xuXHRjb25zdCB1c2VySW5mbyA9IHVzZVNlbGVjdG9yKCh7IHVzZXIgfSkgPT4gdXNlcik7XG5cblx0Y29uc29sZS5sb2coJ3VzZXJJbmZvJywgdXNlckluZm8pO1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuXHRjb25zdCBbZ2VucmUsIHNldEdlbnJlXSA9IHVzZVN0YXRlKFtdKTtcblxuXHRjb25zdCBmZXRjaEdlbnJlID0gYXN5bmMgKEludHJvKSA9PiB7XG5cdFx0Y29uc3QgZ2VucmVSZWYgPSBkb2MoZGIsICdnZW5yZScsICdhcHBTdG9yZScpO1xuXHRcdGNvbnN0IGdlbnJlU25hcCA9IGF3YWl0IGdldERvYyhnZW5yZVJlZik7XG5cdFx0aWYgKGdlbnJlU25hcC5leGlzdHMoKSkge1xuXHRcdFx0c2V0R2VucmUoZ2VucmVTbmFwLmRhdGEoKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCdObyBzdWNoIGRvY3VtZW50IScpO1xuXHRcdH1cblx0fTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGZldGNoR2VucmUoKTtcblx0fSwgW10pO1xuXG5cdGNvbnN0IHF1ZXJ5R2VybmUgPSBhc3luYyAodmFsdWUpID0+IHtcblx0XHRjb25zdCBnZW5yZVF1ZXJ5ID0gcXVlcnkoXG5cdFx0XHRjb2xsZWN0aW9uKGRiLCAncHJvamVjdCcpLFxuXHRcdFx0d2hlcmUoJ2dlbnJlJywgJz09JywgYCR7dmFsdWV9YClcblx0XHQpO1xuXG5cdFx0Y29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MoZ2VucmVRdWVyeSk7XG5cdFx0Y29uc29sZS5sb2coJ3F1ZXJ5U25hcHNob3QnLCBxdWVyeVNuYXBzaG90KTtcblx0XHRjb25zdCBuZXdEYXRhID0gcXVlcnlTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoe1xuXHRcdFx0Li4uZG9jLmRhdGEoKSxcblx0XHR9KSk7XG5cdFx0Y29uc29sZS5sb2coJ25ld0RhdGEnLCBxdWVyeVNuYXBzaG90KTtcblx0XHRzZXRQcm9qZWN0cyhuZXdEYXRhKTtcblx0fTtcblxuXHRsZXQgZ2VucmVfb3B0aW9ucyA9IFtdO1xuXHRsZXQgYSA9IE9iamVjdC5lbnRyaWVzKGdlbnJlKTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGE/Lmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IG9wID0ge307XG5cdFx0b3AudmFsdWUgPSBhW2ldWzBdO1xuXHRcdG9wLmlkID0gYVtpXVsxXTtcblx0XHRvcC5sYWJlbCA9IGFbaV1bMF07XG5cdFx0Z2VucmVfb3B0aW9ucy5wdXNoKG9wKTtcblx0fVxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IGZldGNoUHJvamVjdCA9IGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHByb2plY3RSZWYgPSBhd2FpdCBnZXREb2NzKGNvbGxlY3Rpb24oZGIsICdwcm9qZWN0JykpO1xuXHRcdFx0Y29uc3QgbmV3RGF0YSA9IHByb2plY3RSZWYuZG9jcy5tYXAoKGRvYykgPT4gKHtcblx0XHRcdFx0Li4uZG9jLmRhdGEoKSxcblx0XHRcdH0pKTtcblx0XHRcdHNldFByb2plY3RzKG5ld0RhdGEpO1xuXHRcdH07XG5cblx0XHRmZXRjaFByb2plY3QoKTtcblx0fSwgW10pO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J215LWNvbnRhaW5lcic+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSdtaWRkbGUtdGl0bGUnPlByb2plY3RzPC9oMj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWVuZCc+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdteS0zJz5cblx0XHRcdFx0XHRcdOuCmOydmCDtlITroZzsoJ3tirjsmYAg64uk66W4IO2UhOuhnOygne2KuOulvCDtlZwg6rO16rCE7JeQLlxuXHRcdFx0XHRcdFx0PGJyIC8+IOyXrOufrOu2hOydmCDtjIDqs7wg7ZSE66Gc7KCd7Yq466W8IOyGjOqwnO2VtOuztOyEuOyalC5cblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiAodXNlckluZm8/LnVpZCkge1xuXHRcdFx0XHRcdFx0XHRcdHJvdXRlci5wdXNoKCcvaW50cm9kdWNlJyk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0XHRcdFx0Y29uZmlybSgn66Gc6re47J247J20IO2VhOyalO2VnCDshJzruYTsiqQg7J6F64uI64ukLiDroZzqt7jsnbgg7ZWY7Iuc6rKg7Iq164uI6rmMPycpXG5cdFx0XHRcdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyb3V0ZXIucHVzaCgnL2xvZ2luJyk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdCgnJyk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdweC00IGgtWzQwcHhdIG1haW4taG92ZXIgbWFpbi1jb2xvciBmb250LWJvbGQgcm91bmRlZC1mdWxsIGJvcmRlci1ncmVlbi03MDAgYm9yZGVyLTInXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0KyDtlITroZzsoJ3tirgg7LaU6rCA7ZWY6riwXG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWItOCBtdC02IHNtOm1iLTEyIGgtcHggYmctc2xhdGUtMzAwJz48L2Rpdj5cblx0XHRcdDxwIGNsYXNzTmFtZT0nc21hbGwtdGl0bGUnPuuztOqzoOyLtuydgCDsnqXrpbTrpbwg7ISg7YOd7ZWY7IS47JqULjwvcD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdvdmVyZmxvdy14LXNjcm9sbCB3LWZ1bGwgZmxleCBtdC0zIHNjcm9sbGJhci1oaWRlJz5cblx0XHRcdFx0PFNvcnRHZW5yZSBnZW5yZT17Z2VucmVfb3B0aW9uc30gcXVlcnlHZXJuZT17cXVlcnlHZXJuZX0gLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PFByb2plY3RMaXN0IHByb2plY3RzPXtwcm9qZWN0c30gLz5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQcm9qZWN0TGlzdCIsIlNvcnRHZW5yZSIsImRiIiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsImNvbGxlY3Rpb24iLCJnZXREb2NzIiwiZG9jIiwiZ2V0RG9jIiwicXVlcnkiLCJ3aGVyZSIsIlByb2plY3RzIiwicHJvamVjdHMiLCJzZXRQcm9qZWN0cyIsInVzZXJJbmZvIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXIiLCJnZW5yZSIsInNldEdlbnJlIiwiZmV0Y2hHZW5yZSIsIkludHJvIiwiZ2VucmVSZWYiLCJnZW5yZVNuYXAiLCJleGlzdHMiLCJkYXRhIiwicXVlcnlHZXJuZSIsInZhbHVlIiwiZ2VucmVRdWVyeSIsInF1ZXJ5U25hcHNob3QiLCJuZXdEYXRhIiwiZG9jcyIsIm1hcCIsImdlbnJlX29wdGlvbnMiLCJhIiwiT2JqZWN0IiwiZW50cmllcyIsImkiLCJsZW5ndGgiLCJvcCIsImlkIiwibGFiZWwiLCJwdXNoIiwiZmV0Y2hQcm9qZWN0IiwicHJvamVjdFJlZiIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwicCIsImJyIiwiYnV0dG9uIiwib25DbGljayIsInVpZCIsImNvbmZpcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/project/index.js\n"));

/***/ })

});