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

/***/ "./src/store/modules/projectInfo.js":
/*!******************************************!*\
  !*** ./src/store/modules/projectInfo.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getState\": function() { return /* binding */ getState; },\n/* harmony export */   \"setAll\": function() { return /* binding */ setAll; },\n/* harmony export */   \"setColor\": function() { return /* binding */ setColor; },\n/* harmony export */   \"setLogo\": function() { return /* binding */ setLogo; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"../node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"../node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/** @format */ \n\nvar initialState = {\n    color: \"#15803D\",\n    email: \"\",\n    favicon: \"\",\n    logo: \"ForMyTeam\",\n    logo_image: \"\",\n    team_github: \"\",\n    url: \"\"\n};\nvar projectInfo = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"projectInfo\",\n    initialState: initialState,\n    reducers: {\n        setColor: function(state, actions) {\n            // console.log('setColor', actions);\n            state.color = actions.payload;\n        },\n        setLogo: function(state, actions) {\n            // console.log('setLogo', actions);\n            state.logo = actions.payload;\n        },\n        getState: function(state) {\n        // console.log('getState', state);\n        },\n        setAll: function(state, actions) {\n            var ref;\n            console.log(actions.payload);\n            console.log(\"statestatestate\", state);\n            state = (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state, (ref = actions.payload.info) === null || ref === void 0 ? void 0 : ref.project_info);\n        }\n    }\n});\nvar _actions = projectInfo.actions;\nvar setColor = _actions.setColor, setLogo = _actions.setLogo, getState = _actions.getState, setAll = _actions.setAll; // 액션 생성함수\n/* harmony default export */ __webpack_exports__[\"default\"] = (projectInfo.reducer); // 리듀서\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvbW9kdWxlcy9wcm9qZWN0SW5mby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxZQUFZLEdBRVo7QUFBK0M7QUFDL0MsSUFBTUMsWUFBWSxHQUFHO0lBQ3BCQyxLQUFLLEVBQUUsU0FBUztJQUNoQkMsS0FBSyxFQUFFLEVBQUU7SUFDVEMsT0FBTyxFQUFFLEVBQUU7SUFDWEMsSUFBSSxFQUFFLFdBQVc7SUFDakJDLFVBQVUsRUFBRSxFQUFFO0lBQ2RDLFdBQVcsRUFBRSxFQUFFO0lBQ2ZDLEdBQUcsRUFBRSxFQUFFO0NBQ1A7QUFFRCxJQUFNQyxXQUFXLEdBQUdULDZEQUFXLENBQUM7SUFDL0JVLElBQUksRUFBRSxhQUFhO0lBQ25CVCxZQUFZLEVBQVpBLFlBQVk7SUFDWlUsUUFBUSxFQUFFO1FBQ1RDLFFBQVEsRUFBRSxTQUFDQyxLQUFLLEVBQUVDLE9BQU8sRUFBSztZQUM3QixvQ0FBb0M7WUFDcENELEtBQUssQ0FBQ1gsS0FBSyxHQUFHWSxPQUFPLENBQUNDLE9BQU8sQ0FBQztTQUM5QjtRQUNEQyxPQUFPLEVBQUUsU0FBQ0gsS0FBSyxFQUFFQyxPQUFPLEVBQUs7WUFDNUIsbUNBQW1DO1lBQ25DRCxLQUFLLENBQUNSLElBQUksR0FBR1MsT0FBTyxDQUFDQyxPQUFPLENBQUM7U0FDN0I7UUFDREUsUUFBUSxFQUFFLFNBQUNKLEtBQUssRUFBSztRQUNwQixrQ0FBa0M7U0FDbEM7UUFDREssTUFBTSxFQUFFLFNBQUNMLEtBQUssRUFBRUMsT0FBTyxFQUFLO2dCQUdKQSxHQUFvQjtZQUYzQ0ssT0FBTyxDQUFDQyxHQUFHLENBQUNOLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDLENBQUM7WUFDN0JJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixFQUFFUCxLQUFLLENBQUMsQ0FBQztZQUN0Q0EsS0FBSyxHQUFHLG1GQUFLQSxLQUFLLEVBQUtDLENBQUFBLEdBQW9CLEdBQXBCQSxPQUFPLENBQUNDLE9BQU8sQ0FBQ00sSUFBSSxjQUFwQlAsR0FBb0IsV0FBYyxHQUFsQ0EsS0FBQUEsQ0FBa0MsR0FBbENBLEdBQW9CLENBQUVRLFlBQVksQ0FBRSxDQUFDO1NBQzVEO0tBQ0Q7Q0FDRCxDQUFDO0lBRXFEYixRQUFtQixHQUFuQkEsV0FBVyxDQUFDSyxPQUFPO0FBQW5FLElBQVFGLFFBQVEsR0FBZ0NILFFBQW1CLENBQTNERyxRQUFRLEVBQUVJLE9BQU8sR0FBdUJQLFFBQW1CLENBQWpETyxPQUFPLEVBQUVDLFFBQVEsR0FBYVIsUUFBbUIsQ0FBeENRLFFBQVEsRUFBRUMsTUFBTSxHQUFLVCxRQUFtQixDQUE5QlMsTUFBTSxDQUF5QixDQUFDLFVBQVU7QUFDdEYsK0RBQWVULFdBQVcsQ0FBQ2MsT0FBTyxFQUFDLENBQUMsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3RvcmUvbW9kdWxlcy9wcm9qZWN0SW5mby5qcz8wMGYxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAZm9ybWF0ICovXG5cbmltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG5cdGNvbG9yOiAnIzE1ODAzRCcsXG5cdGVtYWlsOiAnJyxcblx0ZmF2aWNvbjogJycsXG5cdGxvZ286ICdGb3JNeVRlYW0nLFxuXHRsb2dvX2ltYWdlOiAnJyxcblx0dGVhbV9naXRodWI6ICcnLFxuXHR1cmw6ICcnLFxufTtcblxuY29uc3QgcHJvamVjdEluZm8gPSBjcmVhdGVTbGljZSh7XG5cdG5hbWU6ICdwcm9qZWN0SW5mbycsXG5cdGluaXRpYWxTdGF0ZSxcblx0cmVkdWNlcnM6IHtcblx0XHRzZXRDb2xvcjogKHN0YXRlLCBhY3Rpb25zKSA9PiB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnc2V0Q29sb3InLCBhY3Rpb25zKTtcblx0XHRcdHN0YXRlLmNvbG9yID0gYWN0aW9ucy5wYXlsb2FkO1xuXHRcdH0sXG5cdFx0c2V0TG9nbzogKHN0YXRlLCBhY3Rpb25zKSA9PiB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnc2V0TG9nbycsIGFjdGlvbnMpO1xuXHRcdFx0c3RhdGUubG9nbyA9IGFjdGlvbnMucGF5bG9hZDtcblx0XHR9LFxuXHRcdGdldFN0YXRlOiAoc3RhdGUpID0+IHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdnZXRTdGF0ZScsIHN0YXRlKTtcblx0XHR9LFxuXHRcdHNldEFsbDogKHN0YXRlLCBhY3Rpb25zKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhhY3Rpb25zLnBheWxvYWQpO1xuXHRcdFx0Y29uc29sZS5sb2coJ3N0YXRlc3RhdGVzdGF0ZScsIHN0YXRlKTtcblx0XHRcdHN0YXRlID0geyAuLi5zdGF0ZSwgLi4uYWN0aW9ucy5wYXlsb2FkLmluZm8/LnByb2plY3RfaW5mbyB9O1xuXHRcdH0sXG5cdH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHsgc2V0Q29sb3IsIHNldExvZ28sIGdldFN0YXRlLCBzZXRBbGwgfSA9IHByb2plY3RJbmZvLmFjdGlvbnM7IC8vIOyVoeyFmCDsg53shLHtlajsiJhcbmV4cG9ydCBkZWZhdWx0IHByb2plY3RJbmZvLnJlZHVjZXI7IC8vIOumrOuTgOyEnFxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwiY29sb3IiLCJlbWFpbCIsImZhdmljb24iLCJsb2dvIiwibG9nb19pbWFnZSIsInRlYW1fZ2l0aHViIiwidXJsIiwicHJvamVjdEluZm8iLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRDb2xvciIsInN0YXRlIiwiYWN0aW9ucyIsInBheWxvYWQiLCJzZXRMb2dvIiwiZ2V0U3RhdGUiLCJzZXRBbGwiLCJjb25zb2xlIiwibG9nIiwiaW5mbyIsInByb2plY3RfaW5mbyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/modules/projectInfo.js\n"));

/***/ })

});