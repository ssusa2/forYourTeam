"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/introduce/[Intro]",{

/***/ "./pages/introduce/ImageHolder.js":
/*!****************************************!*\
  !*** ./pages/introduce/ImageHolder.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"../node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"../node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"../node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"../node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"../node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore/lite */ \"../node_modules/firebase/firestore/lite/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ \"./pages/firebase.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid */ \"../node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/storage */ \"../node_modules/firebase/storage/dist/index.esm.js\");\n/** @format */ \n\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction ImageHolder(param) {\n    var state = param.state, setState = param.setState, name = param.name, object = param.object, section = param.section, projectName = param.projectName, defaultImg = param.defaultImg;\n    _s();\n    var userID = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function(param) {\n        var user = param.user;\n        return user;\n    });\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), imageSrc = ref1[0], setImageSrc = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), fileUrl = ref2[0], setFileUrl = ref2[1];\n    console.log(defaultImg);\n    var encodeFileToBase64 = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(fileBlob) {\n            var reader;\n            return _Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        reader = new FileReader();\n                        reader.readAsDataURL(fileBlob);\n                        return _ctx.abrupt(\"return\", new Promise(function(resolve) {\n                            reader.onload = function() {\n                                setImageSrc(reader.result);\n                                resolve();\n                            };\n                        }));\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function encodeFileToBase64(fileBlob) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var ConvertUrl = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(fileBlob) {\n            var metadata, fileRef, uploadTask;\n            return _Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        metadata = {\n                            contentType: \"image/jpeg\"\n                        };\n                        if (!(fileBlob != \"\")) {\n                            _ctx.next = 16;\n                            break;\n                        }\n                        _ctx.prev = 2;\n                        fileRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_6__.ref)(_firebase__WEBPACK_IMPORTED_MODULE_4__.storage, \"\".concat(userID.uid, \"/\").concat(projectName, \"/\").concat((0,uuid__WEBPACK_IMPORTED_MODULE_8__.v4)()));\n                        _ctx.next = 6;\n                        return (0,firebase_storage__WEBPACK_IMPORTED_MODULE_6__.uploadBytes)(fileRef, fileBlob).then(function(snapshot) {\n                            console.log(\"updtae\");\n                        });\n                    case 6:\n                        uploadTask = _ctx.sent;\n                        _ctx.next = 9;\n                        return (0,firebase_storage__WEBPACK_IMPORTED_MODULE_6__.getDownloadURL)(fileRef);\n                    case 9:\n                        fileUrl = _ctx.sent;\n                        console.log(fileUrl);\n                        _ctx.next = 16;\n                        break;\n                    case 13:\n                        _ctx.prev = 13;\n                        _ctx.t0 = _ctx[\"catch\"](2);\n                        console.log(_ctx.t0);\n                    case 16:\n                        setState(function(prev) {\n                            return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])({}, prev), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])({}, object, (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])({}, state[object]), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])({}, name, fileUrl))));\n                        });\n                    case 17:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    2,\n                    13\n                ]\n            ]);\n        }));\n        return function ConvertUrl(fileBlob) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \" flex group block mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-green-500 hover:ring-green-500\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"w-4/5 \",\n                    children: imageSrc ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                        className: \"preview\",\n                        src: imageSrc,\n                        alt: \"preview-img\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/introduce/ImageHolder.js\",\n                        lineNumber: 91,\n                        columnNumber: 8\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                className: \"flex items-center space-x-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                    className: \"text-slate-900 group-hover:text-white text-sm font-semibold\",\n                                    children: \"이미지 +\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/introduce/ImageHolder.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 10\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/introduce/ImageHolder.js\",\n                                lineNumber: 94,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: \"text-slate-500 group-hover:text-white text-sm\",\n                                children: section\n                            }, void 0, false, {\n                                fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/introduce/ImageHolder.js\",\n                                lineNumber: 99,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/introduce/ImageHolder.js\",\n                    lineNumber: 86,\n                    columnNumber: 6\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                    // value={}\n                    type: \"file\",\n                    accept: \"image/*\",\n                    className: \"block text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-green-700 hover:file:bg-violet-100\",\n                    onChange: function(e) {\n                        encodeFileToBase64(e.target.files[0]);\n                        ConvertUrl(e.target.files[0]);\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/introduce/ImageHolder.js\",\n                    lineNumber: 106,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/introduce/ImageHolder.js\",\n            lineNumber: 84,\n            columnNumber: 4\n        }, this)\n    }, void 0, false);\n}\n_s(ImageHolder, \"AN6fuXhOaSx5fPgMUGcFG/d4zR4=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector\n    ];\n});\n_c = ImageHolder;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageHolder);\nvar _c;\n$RefreshReg$(_c, \"ImageHolder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBQUEsV0FBVztBQXdHcEIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbnRyb2R1Y2UvSW1hZ2VIb2xkZXIuanM/MTJhNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGZvcm1hdCAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG5cdGNvbGxlY3Rpb24sXG5cdGFkZERvYyxcblx0ZG9jLFxuXHRzZXREb2MsXG5cdHNuYXBzaG90RXF1YWwsXG59IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZS9saXRlJztcbmltcG9ydCB7IGRiLCBzdG9yYWdlLCBzdG9yYWdlUmVmIH0gZnJvbSAnLi4vZmlyZWJhc2UnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge1xuXHRyZWYsXG5cdHVwbG9hZEJ5dGVzLFxuXHR1cGxvYWRCeXRlc1Jlc3VtYWJsZSxcblx0dXBsb2FkU3RyaW5nLFxuXHRnZXREb3dubG9hZFVSTCxcbn0gZnJvbSAnZmlyZWJhc2Uvc3RvcmFnZSc7XG5cbmZ1bmN0aW9uIEltYWdlSG9sZGVyKHtcblx0c3RhdGUsXG5cdHNldFN0YXRlLFxuXHRuYW1lLFxuXHRvYmplY3QsXG5cdHNlY3Rpb24sXG5cdHByb2plY3ROYW1lLFxuXHRkZWZhdWx0SW1nLFxufSkge1xuXHRjb25zdCB1c2VySUQgPSB1c2VTZWxlY3RvcigoeyB1c2VyIH0pID0+IHVzZXIpO1xuXHRjb25zdCBbaW1hZ2VTcmMsIHNldEltYWdlU3JjXSA9IHVzZVN0YXRlKCk7XG5cdGNvbnN0IFtmaWxlVXJsLCBzZXRGaWxlVXJsXSA9IHVzZVN0YXRlKCcnKTtcblxuXHRjb25zb2xlLmxvZyhkZWZhdWx0SW1nKTtcblxuXHRjb25zdCBlbmNvZGVGaWxlVG9CYXNlNjQgPSBhc3luYyAoZmlsZUJsb2IpID0+IHtcblx0XHRjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXHRcdHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGVCbG9iKTtcblxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdFx0cmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcblx0XHRcdFx0c2V0SW1hZ2VTcmMocmVhZGVyLnJlc3VsdCk7XG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdH07XG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgQ29udmVydFVybCA9IGFzeW5jIChmaWxlQmxvYikgPT4ge1xuXHRcdGNvbnN0IG1ldGFkYXRhID0ge1xuXHRcdFx0Y29udGVudFR5cGU6ICdpbWFnZS9qcGVnJyxcblx0XHR9O1xuXG5cdFx0aWYgKGZpbGVCbG9iICE9ICcnKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCBmaWxlUmVmID0gcmVmKFxuXHRcdFx0XHRcdHN0b3JhZ2UsXG5cdFx0XHRcdFx0YCR7dXNlcklELnVpZH0vJHtwcm9qZWN0TmFtZX0vJHt1dWlkdjQoKX1gXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGNvbnN0IHVwbG9hZFRhc2sgPSBhd2FpdCB1cGxvYWRCeXRlcyhmaWxlUmVmLCBmaWxlQmxvYikudGhlbihcblx0XHRcdFx0XHQoc25hcHNob3QpID0+IHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCd1cGR0YWUnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHRcdGZpbGVVcmwgPSBhd2FpdCBnZXREb3dubG9hZFVSTChmaWxlUmVmKTtcblx0XHRcdFx0Y29uc29sZS5sb2coZmlsZVVybCk7XG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0c2V0U3RhdGUoKHByZXYpID0+IHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnByZXYsXG5cdFx0XHRcdFtvYmplY3RdOiB7XG5cdFx0XHRcdFx0Li4uc3RhdGVbb2JqZWN0XSxcblx0XHRcdFx0XHRbbmFtZV06IGZpbGVVcmwsXG5cdFx0XHRcdH0sXG5cdFx0XHR9O1xuXHRcdH0pO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPScgZmxleCBncm91cCBibG9jayBteC1hdXRvIHJvdW5kZWQtbGcgcC02IGJnLXdoaXRlIHJpbmctMSByaW5nLXNsYXRlLTkwMC81IHNoYWRvdy1sZyBzcGFjZS15LTMgaG92ZXI6YmctZ3JlZW4tNTAwIGhvdmVyOnJpbmctZ3JlZW4tNTAwJz5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ndy00LzVcblx0XHRcdFx0XHQnXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e2ltYWdlU3JjID8gKFxuXHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT0ncHJldmlldycgc3JjPXtpbWFnZVNyY30gYWx0PSdwcmV2aWV3LWltZycgLz5cblx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0zJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1zbGF0ZS05MDAgZ3JvdXAtaG92ZXI6dGV4dC13aGl0ZSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHTsnbTrr7jsp4AgK1xuXHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LXNsYXRlLTUwMCBncm91cC1ob3Zlcjp0ZXh0LXdoaXRlIHRleHQtc20nPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3NlY3Rpb259XG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0Ly8gdmFsdWU9e31cblx0XHRcdFx0XHR0eXBlPSdmaWxlJ1xuXHRcdFx0XHRcdGFjY2VwdD0naW1hZ2UvKidcblx0XHRcdFx0XHRjbGFzc05hbWU9J2Jsb2NrIHRleHQtc20gdGV4dC1zbGF0ZS01MDBcbmZpbGU6bXItNCBmaWxlOnB5LTIgZmlsZTpweC00XG5maWxlOnJvdW5kZWQtZnVsbCBmaWxlOmJvcmRlci0wXG5maWxlOnRleHQtc20gZmlsZTpmb250LXNlbWlib2xkXG5maWxlOmJnLXZpb2xldC01MCBmaWxlOnRleHQtZ3JlZW4tNzAwXG5ob3ZlcjpmaWxlOmJnLXZpb2xldC0xMDAnXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRlbmNvZGVGaWxlVG9CYXNlNjQoZS50YXJnZXQuZmlsZXNbMF0pO1xuXHRcdFx0XHRcdFx0Q29udmVydFVybChlLnRhcmdldC5maWxlc1swXSk7XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZUhvbGRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY29sbGVjdGlvbiIsImFkZERvYyIsImRvYyIsInNldERvYyIsInNuYXBzaG90RXF1YWwiLCJkYiIsInN0b3JhZ2UiLCJzdG9yYWdlUmVmIiwidjQiLCJ1dWlkdjQiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwicmVmIiwidXBsb2FkQnl0ZXMiLCJ1cGxvYWRCeXRlc1Jlc3VtYWJsZSIsInVwbG9hZFN0cmluZyIsImdldERvd25sb2FkVVJMIiwiSW1hZ2VIb2xkZXIiLCJzdGF0ZSIsInNldFN0YXRlIiwibmFtZSIsIm9iamVjdCIsInNlY3Rpb24iLCJwcm9qZWN0TmFtZSIsImRlZmF1bHRJbWciLCJ1c2VySUQiLCJ1c2VyIiwiaW1hZ2VTcmMiLCJzZXRJbWFnZVNyYyIsImZpbGVVcmwiLCJzZXRGaWxlVXJsIiwiY29uc29sZSIsImxvZyIsImVuY29kZUZpbGVUb0Jhc2U2NCIsImZpbGVCbG9iIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJQcm9taXNlIiwicmVzb2x2ZSIsIm9ubG9hZCIsInJlc3VsdCIsIkNvbnZlcnRVcmwiLCJtZXRhZGF0YSIsImZpbGVSZWYiLCJ1cGxvYWRUYXNrIiwiY29udGVudFR5cGUiLCJ1aWQiLCJ0aGVuIiwic25hcHNob3QiLCJwcmV2IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwibGFiZWwiLCJzcGFuIiwicCIsImlucHV0IiwidHlwZSIsImFjY2VwdCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImZpbGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/introduce/ImageHolder.js\n"));

/***/ })

});