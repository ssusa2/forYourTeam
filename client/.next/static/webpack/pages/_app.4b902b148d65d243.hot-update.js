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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getState\": function() { return /* binding */ getState; },\n/* harmony export */   \"setColor\": function() { return /* binding */ setColor; },\n/* harmony export */   \"setLogo\": function() { return /* binding */ setLogo; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"../node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/** @format */ \nvar initialState = {\n    color: \"#15803D\",\n    email: \"\",\n    favicon: \"\",\n    logo: \"ForMyTeam\",\n    logo_image: \"\",\n    team_github: \"\",\n    url: \"\"\n};\nvar projectInfo = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"projectInfo\",\n    initialState: initialState,\n    reducers: {\n        setColor: function(state, actions) {\n            console.log(\"setColor\", actions);\n            state.color = actions.payload;\n        },\n        setLogo: function(state, actions) {\n            console.log(\"setLogo\", actions);\n            state.logo = actions.payload;\n        },\n        getState: function(state) {\n            console.log(\"getState\", state);\n        },\n        setAll: function(state, actions) {\n            state = actions.payload;\n        }\n    }\n});\nvar _actions = projectInfo.actions;\nvar setColor = _actions.setColor, setLogo = _actions.setLogo, getState = _actions.getState; // 액션 생성함수\n/* harmony default export */ __webpack_exports__[\"default\"] = (projectInfo.reducer); // 리듀서\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvbW9kdWxlcy9wcm9qZWN0SW5mby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsWUFBWSxHQUVtQztBQUMvQyxJQUFNQyxZQUFZLEdBQUc7SUFDcEJDLEtBQUssRUFBRSxTQUFTO0lBQ2hCQyxLQUFLLEVBQUUsRUFBRTtJQUNUQyxPQUFPLEVBQUUsRUFBRTtJQUNYQyxJQUFJLEVBQUUsV0FBVztJQUNqQkMsVUFBVSxFQUFFLEVBQUU7SUFDZEMsV0FBVyxFQUFFLEVBQUU7SUFDZkMsR0FBRyxFQUFFLEVBQUU7Q0FDUDtBQUVELElBQU1DLFdBQVcsR0FBR1QsNkRBQVcsQ0FBQztJQUMvQlUsSUFBSSxFQUFFLGFBQWE7SUFDbkJULFlBQVksRUFBWkEsWUFBWTtJQUNaVSxRQUFRLEVBQUU7UUFDVEMsUUFBUSxFQUFFLFNBQUNDLEtBQUssRUFBRUMsT0FBTyxFQUFLO1lBQzdCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVLEVBQUVGLE9BQU8sQ0FBQyxDQUFDO1lBQ2pDRCxLQUFLLENBQUNYLEtBQUssR0FBR1ksT0FBTyxDQUFDRyxPQUFPLENBQUM7U0FDOUI7UUFDREMsT0FBTyxFQUFFLFNBQUNMLEtBQUssRUFBRUMsT0FBTyxFQUFLO1lBQzVCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxTQUFTLEVBQUVGLE9BQU8sQ0FBQyxDQUFDO1lBQ2hDRCxLQUFLLENBQUNSLElBQUksR0FBR1MsT0FBTyxDQUFDRyxPQUFPLENBQUM7U0FDN0I7UUFDREUsUUFBUSxFQUFFLFNBQUNOLEtBQUssRUFBSztZQUNwQkUsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxFQUFFSCxLQUFLLENBQUMsQ0FBQztTQUMvQjtRQUNETyxNQUFNLEVBQUUsU0FBQ1AsS0FBSyxFQUFFQyxPQUFPLEVBQUs7WUFDM0JELEtBQUssR0FBR0MsT0FBTyxDQUFDRyxPQUFPLENBQUM7U0FDeEI7S0FDRDtDQUNELENBQUM7SUFFNkNSLFFBQW1CLEdBQW5CQSxXQUFXLENBQUNLLE9BQU87QUFBM0QsSUFBUUYsUUFBUSxHQUF3QkgsUUFBbUIsQ0FBbkRHLFFBQVEsRUFBRU0sT0FBTyxHQUFlVCxRQUFtQixDQUF6Q1MsT0FBTyxFQUFFQyxRQUFRLEdBQUtWLFFBQW1CLENBQWhDVSxRQUFRLENBQXlCLENBQUMsVUFBVTtBQUM5RSwrREFBZVYsV0FBVyxDQUFDWSxPQUFPLEVBQUMsQ0FBQyxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdG9yZS9tb2R1bGVzL3Byb2plY3RJbmZvLmpzPzAwZjEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBmb3JtYXQgKi9cblxuaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcblx0Y29sb3I6ICcjMTU4MDNEJyxcblx0ZW1haWw6ICcnLFxuXHRmYXZpY29uOiAnJyxcblx0bG9nbzogJ0Zvck15VGVhbScsXG5cdGxvZ29faW1hZ2U6ICcnLFxuXHR0ZWFtX2dpdGh1YjogJycsXG5cdHVybDogJycsXG59O1xuXG5jb25zdCBwcm9qZWN0SW5mbyA9IGNyZWF0ZVNsaWNlKHtcblx0bmFtZTogJ3Byb2plY3RJbmZvJyxcblx0aW5pdGlhbFN0YXRlLFxuXHRyZWR1Y2Vyczoge1xuXHRcdHNldENvbG9yOiAoc3RhdGUsIGFjdGlvbnMpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKCdzZXRDb2xvcicsIGFjdGlvbnMpO1xuXHRcdFx0c3RhdGUuY29sb3IgPSBhY3Rpb25zLnBheWxvYWQ7XG5cdFx0fSxcblx0XHRzZXRMb2dvOiAoc3RhdGUsIGFjdGlvbnMpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKCdzZXRMb2dvJywgYWN0aW9ucyk7XG5cdFx0XHRzdGF0ZS5sb2dvID0gYWN0aW9ucy5wYXlsb2FkO1xuXHRcdH0sXG5cdFx0Z2V0U3RhdGU6IChzdGF0ZSkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coJ2dldFN0YXRlJywgc3RhdGUpO1xuXHRcdH0sXG5cdFx0c2V0QWxsOiAoc3RhdGUsIGFjdGlvbnMpID0+IHtcblx0XHRcdHN0YXRlID0gYWN0aW9ucy5wYXlsb2FkO1xuXHRcdH0sXG5cdH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHsgc2V0Q29sb3IsIHNldExvZ28sIGdldFN0YXRlIH0gPSBwcm9qZWN0SW5mby5hY3Rpb25zOyAvLyDslaHshZgg7IOd7ISx7ZWo7IiYXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0SW5mby5yZWR1Y2VyOyAvLyDrpqzrk4DshJxcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsImNvbG9yIiwiZW1haWwiLCJmYXZpY29uIiwibG9nbyIsImxvZ29faW1hZ2UiLCJ0ZWFtX2dpdGh1YiIsInVybCIsInByb2plY3RJbmZvIiwibmFtZSIsInJlZHVjZXJzIiwic2V0Q29sb3IiLCJzdGF0ZSIsImFjdGlvbnMiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsInNldExvZ28iLCJnZXRTdGF0ZSIsInNldEFsbCIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/modules/projectInfo.js\n"));

/***/ })

});