"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/project/[Intro]",{

/***/ "./util/utils.js":
/*!***********************!*\
  !*** ./util/utils.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkLines\": function() { return /* binding */ checkLines; },\n/* harmony export */   \"handleFormChange\": function() { return /* binding */ handleFormChange; },\n/* harmony export */   \"replaceBrTag\": function() { return /* binding */ replaceBrTag; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"../node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"../node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var _Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"../node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"../node_modules/firebase/firestore/dist/index.esm.js\");\n/** @format */ \n\n\n\n// \\n을 <br/>로 바꿔주는\nvar replaceBrTag = function(str) {\n    if (str === undefined || str === null) return {\n        __html: \"\"\n    };\n    str = str.replace(/\\r\\n/gi, \"<br>\");\n    str = str.replace(/\\\\n/gi, \"<br>\");\n    str = str.replace(/\\n/gi, \"<br>\");\n    return {\n        __html: str\n    };\n};\n// 라인 수 제한\nvar checkLines = function(e, line) {\n    var str = e.target.value;\n    var str_arr = str.split(\"\\n\");\n    var row = str_arr.length;\n    if (row > line) {\n        alert(\"\".concat(line, \"줄 이상 입력할 수 없습니다.\"));\n        var lastChar = str.slice(0, -1);\n        console.log(\"lastChar\", lastChar);\n        e.target.value = lastChar;\n    }\n};\n// 폼 입력\nvar handleFormChange = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(index, event, state, setState, folder, projectName, userID) {\n        var data, fileUrl, fileRef, uploadTask;\n        return _Users_jeongsuin_Desktop_Project_intro_my_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    data = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(state);\n                    _ctx.prev = 1;\n                    fileUrl = \"\";\n                    if (!(event.target.type == \"file\")) {\n                        _ctx.next = 15;\n                        break;\n                    }\n                    if (!(event.target.value != \"\")) {\n                        _ctx.next = 12;\n                        break;\n                    }\n                    fileRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.ref)(storage, \"\".concat(userID, \"/\").concat(projectName, \"/\").concat(folder, \"/\").concat(index));\n                    _ctx.next = 8;\n                    return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.uploadBytes)(fileRef, event.target.files[0]).then(function(snapshot) {});\n                case 8:\n                    uploadTask = _ctx.sent;\n                    _ctx.next = 11;\n                    return getDownloadURL(fileRef);\n                case 11:\n                    fileUrl = _ctx.sent;\n                case 12:\n                    data[index][event.target.name] = fileUrl;\n                    _ctx.next = 16;\n                    break;\n                case 15:\n                    {\n                        data[index][event.target.name] = event.target.value;\n                    }\n                case 16:\n                    setState(data);\n                    _ctx.next = 22;\n                    break;\n                case 19:\n                    _ctx.prev = 19;\n                    _ctx.t0 = _ctx[\"catch\"](1);\n                    console.error(_ctx.t0);\n                case 22:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                1,\n                19\n            ]\n        ]);\n    }));\n    return function handleFormChange(index, event, state, setState, folder, projectName, userID) {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0MsS0FBSyxDQUFDYixNQUFNLENBQUM2QixJQUFJLENBQUMsR0FBR2hCLEtBQUssQ0FBQ2IsTUFBTSxDQUFDQyxLQUFLLENBQUM7cUJBQ3BEOztvQkFDRGMsUUFBUSxDQUFDSSxJQUFJLENBQUMsQ0FBQzs7Ozs7O29CQUVmVixPQUFPLENBQUNxQixLQUFLLFNBQUssQ0FBQzs7Ozs7Ozs7Ozs7S0FFcEI7b0JBakNZbkIsZ0JBQWdCLENBQzVCQyxLQUFLLEVBQ0xDLEtBQUssRUFDTEMsS0FBSyxFQUNMQyxRQUFRLEVBQ1JDLE1BQU0sRUFDTkMsV0FBVyxFQUNYQyxNQUFNOzs7R0EwQk4sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlsL3V0aWxzLmpzPzQ0MjEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBmb3JtYXQgKi9cbmltcG9ydCB7IHJlZiwgdXBsb2FkQnl0ZXMgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuXG4vLyBcXG7snYQgPGJyLz7roZwg67CU6r+U7KO864qUXG5leHBvcnQgY29uc3QgcmVwbGFjZUJyVGFnID0gKHN0cikgPT4ge1xuXHRpZiAoc3RyID09PSB1bmRlZmluZWQgfHwgc3RyID09PSBudWxsKSByZXR1cm4geyBfX2h0bWw6ICcnIH07XG5cdHN0ciA9IHN0ci5yZXBsYWNlKC9cXHJcXG4vZ2ksICc8YnI+Jyk7XG5cdHN0ciA9IHN0ci5yZXBsYWNlKC9cXFxcbi9naSwgJzxicj4nKTtcblx0c3RyID0gc3RyLnJlcGxhY2UoL1xcbi9naSwgJzxicj4nKTtcblx0cmV0dXJuIHsgX19odG1sOiBzdHIgfTtcbn07XG5cbi8vIOudvOyduCDsiJgg7KCc7ZWcXG5leHBvcnQgY29uc3QgY2hlY2tMaW5lcyA9IChlLCBsaW5lKSA9PiB7XG5cdGxldCBzdHIgPSBlLnRhcmdldC52YWx1ZTtcblx0bGV0IHN0cl9hcnIgPSBzdHIuc3BsaXQoJ1xcbicpO1xuXHRsZXQgcm93ID0gc3RyX2Fyci5sZW5ndGg7XG5cdGlmIChyb3cgPiBsaW5lKSB7XG5cdFx0YWxlcnQoYCR7bGluZX3spIQg7J207IOBIOyeheugpe2VoCDsiJgg7JeG7Iq164uI64ukLmApO1xuXG5cdFx0bGV0IGxhc3RDaGFyID0gc3RyLnNsaWNlKDAsIC0xKTtcblx0XHRjb25zb2xlLmxvZygnbGFzdENoYXInLCBsYXN0Q2hhcik7XG5cdFx0ZS50YXJnZXQudmFsdWUgPSBsYXN0Q2hhcjtcblx0fVxufTtcblxuLy8g7Y+8IOyeheugpVxuZXhwb3J0IGNvbnN0IGhhbmRsZUZvcm1DaGFuZ2UgPSBhc3luYyAoXG5cdGluZGV4LFxuXHRldmVudCxcblx0c3RhdGUsXG5cdHNldFN0YXRlLFxuXHRmb2xkZXIsXG5cdHByb2plY3ROYW1lLFxuXHR1c2VySURcbikgPT4ge1xuXHRsZXQgZGF0YSA9IFsuLi5zdGF0ZV07XG5cdHRyeSB7XG5cdFx0bGV0IGZpbGVVcmwgPSAnJztcblx0XHRpZiAoZXZlbnQudGFyZ2V0LnR5cGUgPT0gJ2ZpbGUnKSB7XG5cdFx0XHRpZiAoZXZlbnQudGFyZ2V0LnZhbHVlICE9ICcnKSB7XG5cdFx0XHRcdGNvbnN0IGZpbGVSZWYgPSByZWYoXG5cdFx0XHRcdFx0c3RvcmFnZSxcblx0XHRcdFx0XHRgJHt1c2VySUR9LyR7cHJvamVjdE5hbWV9LyR7Zm9sZGVyfS8ke2luZGV4fWBcblx0XHRcdFx0KTtcblx0XHRcdFx0Y29uc3QgdXBsb2FkVGFzayA9IGF3YWl0IHVwbG9hZEJ5dGVzKFxuXHRcdFx0XHRcdGZpbGVSZWYsXG5cdFx0XHRcdFx0ZXZlbnQudGFyZ2V0LmZpbGVzWzBdXG5cdFx0XHRcdCkudGhlbigoc25hcHNob3QpID0+IHt9KTtcblxuXHRcdFx0XHRmaWxlVXJsID0gYXdhaXQgZ2V0RG93bmxvYWRVUkwoZmlsZVJlZik7XG5cdFx0XHR9XG5cdFx0XHRkYXRhW2luZGV4XVtldmVudC50YXJnZXQubmFtZV0gPSBmaWxlVXJsO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkYXRhW2luZGV4XVtldmVudC50YXJnZXQubmFtZV0gPSBldmVudC50YXJnZXQudmFsdWU7XG5cdFx0fVxuXHRcdHNldFN0YXRlKGRhdGEpO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHRjb25zb2xlLmVycm9yKGVycik7XG5cdH1cbn07XG4iXSwibmFtZXMiOlsicmVmIiwidXBsb2FkQnl0ZXMiLCJyZXBsYWNlQnJUYWciLCJzdHIiLCJ1bmRlZmluZWQiLCJfX2h0bWwiLCJyZXBsYWNlIiwiY2hlY2tMaW5lcyIsImUiLCJsaW5lIiwidGFyZ2V0IiwidmFsdWUiLCJzdHJfYXJyIiwic3BsaXQiLCJyb3ciLCJsZW5ndGgiLCJhbGVydCIsImxhc3RDaGFyIiwic2xpY2UiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRm9ybUNoYW5nZSIsImluZGV4IiwiZXZlbnQiLCJzdGF0ZSIsInNldFN0YXRlIiwiZm9sZGVyIiwicHJvamVjdE5hbWUiLCJ1c2VySUQiLCJkYXRhIiwiZmlsZVVybCIsImZpbGVSZWYiLCJ1cGxvYWRUYXNrIiwidHlwZSIsInN0b3JhZ2UiLCJmaWxlcyIsInRoZW4iLCJzbmFwc2hvdCIsImdldERvd25sb2FkVVJMIiwibmFtZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./util/utils.js\n"));

/***/ })

});