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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"../node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"../node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"../node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ProjectList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectList */ \"./pages/project/ProjectList.js\");\n/* harmony import */ var _SortGenre__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SortGenre */ \"./pages/project/SortGenre.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase */ \"./pages/firebase.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/firestore */ \"../node_modules/firebase/firestore/dist/index.esm.js\");\n/** @format */ // import Main from '../Home/Main';\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Projects() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), projects = ref[0], setProjects = ref[1];\n    var userInfo = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function(param) {\n        var user = param.user;\n        return user;\n    });\n    console.log(\"userInfo\", userInfo);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), genre = ref1[0], setGenre = ref1[1];\n    var fetchGenre = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(Intro) {\n            var genreRef, genreSnap;\n            return _Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        genreRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, \"genre\", \"appStore\");\n                        _ctx.next = 3;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.getDoc)(genreRef);\n                    case 3:\n                        genreSnap = _ctx.sent;\n                        // console.log(Intro);\n                        // const data = projectSnap.data();\n                        if (genreSnap.exists()) {\n                            setGenre(genreSnap.data());\n                        } else {\n                            console.log(\"No such document!\");\n                        }\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchGenre(Intro) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        fetchGenre();\n    }, []);\n    var genre_options = [];\n    var a = Object.entries(genre);\n    for(var i = 0; i < (a === null || a === void 0 ? void 0 : a.length); i++){\n        var op = {};\n        op.value = a[i][0];\n        op.id = a[i][1];\n        op.label = a[i][0];\n        genre_options.push(op);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var fetchUsers = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var projectRef, newData;\n                return _Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, \"project\"));\n                        case 2:\n                            projectRef = _ctx.sent;\n                            newData = projectRef.docs.map(function(doc) {\n                                return (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])({}, doc.data());\n                            });\n                            setProjects(newData);\n                        case 5:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function fetchUsers() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchUsers();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"my-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        className: \"middle-title\",\n                        children: \"Projects\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/index.js\",\n                        lineNumber: 61,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between items-end\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: \"my-3\",\n                                children: [\n                                    \"나의 프로젝트와 다른 프로젝트를 한 공간에.\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/index.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 7\n                                    }, this),\n                                    \" 여러분의 팀과 프로젝트를 소개해보세요.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/index.js\",\n                                lineNumber: 63,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                onClick: function() {\n                                    if (userInfo === null || userInfo === void 0 ? void 0 : userInfo.uid) {\n                                        router.push(\"/introduce\");\n                                    } else {\n                                        if (confirm(\"로그인이 필요한 서비스 입니다. 로그인 하시겠습니까?\")) {\n                                            router.push(\"/login\");\n                                        }\n                                        {\n                                            \"\";\n                                        }\n                                    }\n                                },\n                                className: \"px-4 h-[40px] main-hover main-color font-bold rounded-full border-green-700 border-2\",\n                                children: \"+ 프로젝트 추가하기\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/index.js\",\n                                lineNumber: 67,\n                                columnNumber: 6\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/index.js\",\n                        lineNumber: 62,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/index.js\",\n                lineNumber: 60,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"mb-8 mt-6 sm:mb-12 h-px bg-slate-300\"\n            }, void 0, false, {\n                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/index.js\",\n                lineNumber: 88,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                className: \"small-title\",\n                children: \"보고싶은 장르를 선택하세요.\"\n            }, void 0, false, {\n                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/index.js\",\n                lineNumber: 89,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"overflow-x-scroll w-full flex mt-3 scrollbar-hide\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SortGenre__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    genre: genre_options\n                }, void 0, false, {\n                    fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/index.js\",\n                    lineNumber: 91,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/index.js\",\n                lineNumber: 90,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ProjectList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                projects: projects\n            }, void 0, false, {\n                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/index.js\",\n                lineNumber: 93,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/project/index.js\",\n        lineNumber: 59,\n        columnNumber: 3\n    }, this);\n}\n_s(Projects, \"6WIbt//xyW7661xGBsJITsC9QB8=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0JBQUNDLFNBQVMsRUFBQyxtREFBbUQ7MEJBQ2pFLDRFQUFDekMsa0RBQVM7b0JBQUNnQixLQUFLLEVBQUVRLGFBQWE7Ozs7O3dCQUFJOzs7OztvQkFDOUI7MEJBQ04sOERBQUN6QixvREFBVztnQkFBQ1UsUUFBUSxFQUFFQSxRQUFROzs7OztvQkFBSTs7Ozs7O1lBQzlCLENBQ0w7Q0FDRjtHQXJGUUQsUUFBUTs7UUFFQ04sb0RBQVc7UUFHYk4sa0RBQVM7OztBQUxoQlksS0FBQUEsUUFBUTtBQXVGakIsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9qZWN0L2luZGV4LmpzP2JiYTEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBmb3JtYXQgKi9cbi8vIGltcG9ydCBNYWluIGZyb20gJy4uL0hvbWUvTWFpbic7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb2plY3RMaXN0IGZyb20gJy4vUHJvamVjdExpc3QnO1xuaW1wb3J0IFNvcnRHZW5yZSBmcm9tICcuL1NvcnRHZW5yZSc7XG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uL2ZpcmViYXNlJztcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGdldERvY3MsIGRvYywgZ2V0RG9jIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcblxuZnVuY3Rpb24gUHJvamVjdHMoKSB7XG5cdGNvbnN0IFtwcm9qZWN0cywgc2V0UHJvamVjdHNdID0gdXNlU3RhdGUoW10pO1xuXHRjb25zdCB1c2VySW5mbyA9IHVzZVNlbGVjdG9yKCh7IHVzZXIgfSkgPT4gdXNlcik7XG5cblx0Y29uc29sZS5sb2coJ3VzZXJJbmZvJywgdXNlckluZm8pO1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuXHRjb25zdCBbZ2VucmUsIHNldEdlbnJlXSA9IHVzZVN0YXRlKFtdKTtcblxuXHRjb25zdCBmZXRjaEdlbnJlID0gYXN5bmMgKEludHJvKSA9PiB7XG5cdFx0Y29uc3QgZ2VucmVSZWYgPSBkb2MoZGIsICdnZW5yZScsICdhcHBTdG9yZScpO1xuXHRcdGNvbnN0IGdlbnJlU25hcCA9IGF3YWl0IGdldERvYyhnZW5yZVJlZik7XG5cdFx0Ly8gY29uc29sZS5sb2coSW50cm8pO1xuXHRcdC8vIGNvbnN0IGRhdGEgPSBwcm9qZWN0U25hcC5kYXRhKCk7XG5cdFx0aWYgKGdlbnJlU25hcC5leGlzdHMoKSkge1xuXHRcdFx0c2V0R2VucmUoZ2VucmVTbmFwLmRhdGEoKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCdObyBzdWNoIGRvY3VtZW50IScpO1xuXHRcdH1cblx0fTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGZldGNoR2VucmUoKTtcblx0fSwgW10pO1xuXG5cdGxldCBnZW5yZV9vcHRpb25zID0gW107XG5cdGxldCBhID0gT2JqZWN0LmVudHJpZXMoZ2VucmUpO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgYT8ubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgb3AgPSB7fTtcblx0XHRvcC52YWx1ZSA9IGFbaV1bMF07XG5cdFx0b3AuaWQgPSBhW2ldWzFdO1xuXHRcdG9wLmxhYmVsID0gYVtpXVswXTtcblx0XHRnZW5yZV9vcHRpb25zLnB1c2gob3ApO1xuXHR9XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgZmV0Y2hVc2VycyA9IGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHByb2plY3RSZWYgPSBhd2FpdCBnZXREb2NzKGNvbGxlY3Rpb24oZGIsICdwcm9qZWN0JykpO1xuXHRcdFx0Y29uc3QgbmV3RGF0YSA9IHByb2plY3RSZWYuZG9jcy5tYXAoKGRvYykgPT4gKHtcblx0XHRcdFx0Li4uZG9jLmRhdGEoKSxcblx0XHRcdH0pKTtcblx0XHRcdHNldFByb2plY3RzKG5ld0RhdGEpO1xuXHRcdH07XG5cblx0XHRmZXRjaFVzZXJzKCk7XG5cdH0sIFtdKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPSdteS1jb250YWluZXInPlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGgyIGNsYXNzTmFtZT0nbWlkZGxlLXRpdGxlJz5Qcm9qZWN0czwvaDI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1lbmQnPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nbXktMyc+XG5cdFx0XHRcdFx0XHTrgpjsnZgg7ZSE66Gc7KCd7Yq47JmAIOuLpOuluCDtlITroZzsoJ3tirjrpbwg7ZWcIOqzteqwhOyXkC5cblx0XHRcdFx0XHRcdDxiciAvPiDsl6zrn6zrtoTsnZgg7YyA6rO8IO2UhOuhnOygne2KuOulvCDshozqsJztlbTrs7TshLjsmpQuXG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0aWYgKHVzZXJJbmZvPy51aWQpIHtcblx0XHRcdFx0XHRcdFx0XHRyb3V0ZXIucHVzaCgnL2ludHJvZHVjZScpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdFx0XHRcdGNvbmZpcm0oJ+uhnOq3uOyduOydtCDtlYTsmpTtlZwg7ISc67mE7IqkIOyeheuLiOuLpC4g66Gc6re47J24IO2VmOyLnOqyoOyKteuLiOq5jD8nKVxuXHRcdFx0XHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cm91dGVyLnB1c2goJy9sb2dpbicpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHQoJycpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ncHgtNCBoLVs0MHB4XSBtYWluLWhvdmVyIG1haW4tY29sb3IgZm9udC1ib2xkIHJvdW5kZWQtZnVsbCBib3JkZXItZ3JlZW4tNzAwIGJvcmRlci0yJ1xuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdCsg7ZSE66Gc7KCd7Yq4IOy2lOqwgO2VmOq4sFxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J21iLTggbXQtNiBzbTptYi0xMiBoLXB4IGJnLXNsYXRlLTMwMCc+PC9kaXY+XG5cdFx0XHQ8cCBjbGFzc05hbWU9J3NtYWxsLXRpdGxlJz7rs7Tqs6Dsi7bsnYAg7J6l66W066W8IOyEoO2Dne2VmOyEuOyalC48L3A+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nb3ZlcmZsb3cteC1zY3JvbGwgdy1mdWxsIGZsZXggbXQtMyBzY3JvbGxiYXItaGlkZSc+XG5cdFx0XHRcdDxTb3J0R2VucmUgZ2VucmU9e2dlbnJlX29wdGlvbnN9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxQcm9qZWN0TGlzdCBwcm9qZWN0cz17cHJvamVjdHN9IC8+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUHJvamVjdExpc3QiLCJTb3J0R2VucmUiLCJkYiIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJjb2xsZWN0aW9uIiwiZ2V0RG9jcyIsImRvYyIsImdldERvYyIsIlByb2plY3RzIiwicHJvamVjdHMiLCJzZXRQcm9qZWN0cyIsInVzZXJJbmZvIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXIiLCJnZW5yZSIsInNldEdlbnJlIiwiZmV0Y2hHZW5yZSIsIkludHJvIiwiZ2VucmVSZWYiLCJnZW5yZVNuYXAiLCJleGlzdHMiLCJkYXRhIiwiZ2VucmVfb3B0aW9ucyIsImEiLCJPYmplY3QiLCJlbnRyaWVzIiwiaSIsImxlbmd0aCIsIm9wIiwidmFsdWUiLCJpZCIsImxhYmVsIiwicHVzaCIsImZldGNoVXNlcnMiLCJwcm9qZWN0UmVmIiwibmV3RGF0YSIsImRvY3MiLCJtYXAiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInAiLCJiciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ1aWQiLCJjb25maXJtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/project/index.js\n"));

/***/ })

});