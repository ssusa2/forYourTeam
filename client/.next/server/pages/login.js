"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/firebase.js":
/*!***************************!*\
  !*** ./pages/firebase.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FirebaseAuth\": () => (/* binding */ FirebaseAuth),\n/* harmony export */   \"FirebaseInstance\": () => (/* binding */ FirebaseInstance),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"storage\": () => (/* binding */ storage),\n/* harmony export */   \"storageRef\": () => (/* binding */ storageRef)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/analytics */ \"firebase/analytics\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_analytics__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_4__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_analytics__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n/** @format */ \n\n\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyANvf4DRP6pyasxGSwktai7Lff2AmKPXpE\",\n    authDomain: \"formyteam-a5c8b.firebaseapp.com\",\n    projectId: \"formyteam-a5c8b\",\n    storageBucket: \"formyteam-a5c8b.appspot.com\",\n    messagingSenderId: \"530999216857\",\n    appId: \"1:530999216857:web:38bfaae7e5ffc0be3b0cc8\",\n    measurementId: \"G-5T73W9Q1F8\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst FirebaseAuth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(app);\nconst FirebaseInstance = firebase_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getFirestore)(app);\nconst storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(app);\nconst storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(storage);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app); // export default firebase.initializeApp();\n // export const getAuth(firebase);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFlBQVksR0FDd0I7QUFDUztBQUNLO0FBQ3NCO0FBQ3JCO0FBRUQ7QUFFbEQsTUFBTVEsY0FBYyxHQUFHO0lBQ3RCQyxNQUFNLEVBQUUseUNBQXlDO0lBQ2pEQyxVQUFVLEVBQUUsaUNBQWlDO0lBQzdDQyxTQUFTLEVBQUUsaUJBQWlCO0lBQzVCQyxhQUFhLEVBQUUsNkJBQTZCO0lBQzVDQyxpQkFBaUIsRUFBRSxjQUFjO0lBQ2pDQyxLQUFLLEVBQUUsMkNBQTJDO0lBQ2xEQyxhQUFhLEVBQUUsY0FBYztDQUM3QjtBQUVELE1BQU1DLEdBQUcsR0FBR2YsMkRBQWEsQ0FBQ08sY0FBYyxDQUFDO0FBQ2xDLE1BQU1TLFlBQVksR0FBR2Isc0RBQU8sQ0FBQ1ksR0FBRyxDQUFDLENBQUM7QUFDbEMsTUFBTUUsZ0JBQWdCLEdBQUdsQixvREFBUSxDQUFDO0FBQ2xDLE1BQU1tQixFQUFFLEdBQUdaLGdFQUFZLENBQUNTLEdBQUcsQ0FBQyxDQUFDO0FBQzdCLE1BQU1JLE9BQU8sR0FBR2YsNERBQVUsQ0FBQ1csR0FBRyxDQUFDLENBQUM7QUFDaEMsTUFBTUssVUFBVSxHQUFHZixxREFBRyxDQUFDYyxPQUFPLENBQUMsQ0FBQztBQUV2QyxpRUFBZUosR0FBRyxFQUFDLENBRW5CLDJDQUEyQztDQUUzQyxrQ0FBa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9maXJlYmFzZS5qcz8zNGMwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAZm9ybWF0ICovXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJztcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuaW1wb3J0IHsgZ2V0QW5hbHl0aWNzIH0gZnJvbSAnZmlyZWJhc2UvYW5hbHl0aWNzJztcbmltcG9ydCB7IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCwgZ2V0QXV0aCB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xuaW1wb3J0IHsgZ2V0U3RvcmFnZSwgcmVmIH0gZnJvbSAnZmlyZWJhc2Uvc3RvcmFnZSc7XG5cbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XG5cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuXHRhcGlLZXk6ICdBSXphU3lBTnZmNERSUDZweWFzeEdTd2t0YWk3TGZmMkFtS1BYcEUnLFxuXHRhdXRoRG9tYWluOiAnZm9ybXl0ZWFtLWE1YzhiLmZpcmViYXNlYXBwLmNvbScsXG5cdHByb2plY3RJZDogJ2Zvcm15dGVhbS1hNWM4YicsXG5cdHN0b3JhZ2VCdWNrZXQ6ICdmb3JteXRlYW0tYTVjOGIuYXBwc3BvdC5jb20nLFxuXHRtZXNzYWdpbmdTZW5kZXJJZDogJzUzMDk5OTIxNjg1NycsXG5cdGFwcElkOiAnMTo1MzA5OTkyMTY4NTc6d2ViOjM4YmZhYWU3ZTVmZmMwYmUzYjBjYzgnLFxuXHRtZWFzdXJlbWVudElkOiAnRy01VDczVzlRMUY4Jyxcbn07XG5cbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuZXhwb3J0IGNvbnN0IEZpcmViYXNlQXV0aCA9IGdldEF1dGgoYXBwKTtcbmV4cG9ydCBjb25zdCBGaXJlYmFzZUluc3RhbmNlID0gZmlyZWJhc2U7XG5leHBvcnQgY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoYXBwKTtcbmV4cG9ydCBjb25zdCBzdG9yYWdlID0gZ2V0U3RvcmFnZShhcHApO1xuZXhwb3J0IGNvbnN0IHN0b3JhZ2VSZWYgPSByZWYoc3RvcmFnZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDtcblxuLy8gZXhwb3J0IGRlZmF1bHQgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcCgpO1xuXG4vLyBleHBvcnQgY29uc3QgZ2V0QXV0aChmaXJlYmFzZSk7XG4iXSwibmFtZXMiOlsiZmlyZWJhc2UiLCJpbml0aWFsaXplQXBwIiwiZ2V0QW5hbHl0aWNzIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiZ2V0QXV0aCIsImdldFN0b3JhZ2UiLCJyZWYiLCJnZXRGaXJlc3RvcmUiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJhcHAiLCJGaXJlYmFzZUF1dGgiLCJGaXJlYmFzZUluc3RhbmNlIiwiZGIiLCJzdG9yYWdlIiwic3RvcmFnZVJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/firebase.js\n");

/***/ }),

/***/ "./pages/login/index.js":
/*!******************************!*\
  !*** ./pages/login/index.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase */ \"./pages/firebase.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__]);\n([_firebase__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n/** @format */ \n\n\n\nfunction Login() {\n    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: newAccount , 1: setNewAccount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const onChange = (event)=>{\n        const { target: { name , value  } ,  } = event;\n        if (name === \"email\") {\n            setEmail(value);\n        } else if (name === \"password\") {\n            setPassword(value);\n        }\n    };\n    const onSubmit = async (event)=>{\n        event.preventDefault();\n        try {\n            let data;\n            if (newAccount) {\n                const { user  } = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.createUserWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_2__.FirebaseAuth, email, password);\n            } else {\n                const { user: user1  } = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_2__.FirebaseAuth, email, password);\n            }\n            console.log(data);\n        } catch (error) {\n            setError(error.message);\n        }\n    };\n    const toggleAccount = ()=>{\n        setNewAccount((prev)=>!prev);\n    };\n    const onSocialClick = async (event)=>{\n        const { target: { name  } ,  } = event;\n        let provider;\n        if (name === \"google\") {\n            provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider();\n        } else if (name === \"github\") {\n            provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_3__.GithubAuthProvider();\n        }\n        const data = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithPopup)(_firebase__WEBPACK_IMPORTED_MODULE_2__.FirebaseAuth, provider);\n        console.log(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"my-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-1/3\",\n                    children: [\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: onSubmit,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"small-title \",\n                                    children: \"아이디\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/login/index.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    multiple: \"multiple\",\n                                    className: \" base-form\",\n                                    value: email,\n                                    name: \"email\",\n                                    type: \"text\",\n                                    placeholder: \"Email\",\n                                    onChange: onChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/login/index.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"small-title \",\n                                    children: \"비밀번호\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/login/index.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    name: \"password\",\n                                    value: password,\n                                    type: \"password\",\n                                    placeholder: \"Password\",\n                                    className: \" base-form\",\n                                    onChange: onChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/login/index.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"round-button\",\n                                    type: \"submit\",\n                                    value: newAccount ? \"Create Account\" : \"Sign In\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/login/index.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"round-button\",\n                                    onClick: toggleAccount,\n                                    children: newAccount ? \"Sign In\" : \"Create Account\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/login/index.js\",\n                                    lineNumber: 101,\n                                    columnNumber: 7\n                                }, this),\n                                error\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/login/index.js\",\n                            lineNumber: 73,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/login/index.js\",\n                    lineNumber: 71,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"round-button\",\n                            onClick: onSocialClick,\n                            name: \"google\",\n                            children: \"Continue with Google\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/login/index.js\",\n                            lineNumber: 108,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"round-button\",\n                            onClick: onSocialClick,\n                            name: \"github\",\n                            children: \"Continue with Github\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/login/index.js\",\n                            lineNumber: 115,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/login/index.js\",\n                    lineNumber: 107,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/login/index.js\",\n            lineNumber: 70,\n            columnNumber: 4\n        }, this)\n    }, void 0, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0Y7Q0FDRjtBQUVELGlFQUFlWixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9sb2dpbi9pbmRleC5qcz85MWZhIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAZm9ybWF0ICovXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZpcmViYXNlQXV0aCwgRmlyZWJhc2VJbnN0YW5jZSB9IGZyb20gJy4uL2ZpcmViYXNlJztcbmltcG9ydCB7XG5cdGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCxcblx0c2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQsXG5cdEdpdGh1YkF1dGhQcm92aWRlcixcblx0R29vZ2xlQXV0aFByb3ZpZGVyLFxuXHRzaWduSW5XaXRoUG9wdXAsXG59IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xuXG5mdW5jdGlvbiBMb2dpbigpIHtcblx0Y29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbbmV3QWNjb3VudCwgc2V0TmV3QWNjb3VudF0gPSB1c2VTdGF0ZSh0cnVlKTtcblx0Y29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG5cblx0Y29uc3Qgb25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcblx0XHRjb25zdCB7XG5cdFx0XHR0YXJnZXQ6IHsgbmFtZSwgdmFsdWUgfSxcblx0XHR9ID0gZXZlbnQ7XG5cdFx0aWYgKG5hbWUgPT09ICdlbWFpbCcpIHtcblx0XHRcdHNldEVtYWlsKHZhbHVlKTtcblx0XHR9IGVsc2UgaWYgKG5hbWUgPT09ICdwYXNzd29yZCcpIHtcblx0XHRcdHNldFBhc3N3b3JkKHZhbHVlKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR0cnkge1xuXHRcdFx0bGV0IGRhdGE7XG5cdFx0XHRpZiAobmV3QWNjb3VudCkge1xuXHRcdFx0XHRjb25zdCB7IHVzZXIgfSA9IGF3YWl0IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChcblx0XHRcdFx0XHRGaXJlYmFzZUF1dGgsXG5cdFx0XHRcdFx0ZW1haWwsXG5cdFx0XHRcdFx0cGFzc3dvcmRcblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHsgdXNlciB9ID0gYXdhaXQgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoXG5cdFx0XHRcdFx0RmlyZWJhc2VBdXRoLFxuXHRcdFx0XHRcdGVtYWlsLFxuXHRcdFx0XHRcdHBhc3N3b3JkXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0c2V0RXJyb3IoZXJyb3IubWVzc2FnZSk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IHRvZ2dsZUFjY291bnQgPSAoKSA9PiB7XG5cdFx0c2V0TmV3QWNjb3VudCgocHJldikgPT4gIXByZXYpO1xuXHR9O1xuXG5cdGNvbnN0IG9uU29jaWFsQ2xpY2sgPSBhc3luYyAoZXZlbnQpID0+IHtcblx0XHRjb25zdCB7XG5cdFx0XHR0YXJnZXQ6IHsgbmFtZSB9LFxuXHRcdH0gPSBldmVudDtcblx0XHRsZXQgcHJvdmlkZXI7XG5cdFx0aWYgKG5hbWUgPT09ICdnb29nbGUnKSB7XG5cdFx0XHRwcm92aWRlciA9IG5ldyBHb29nbGVBdXRoUHJvdmlkZXIoKTtcblx0XHR9IGVsc2UgaWYgKG5hbWUgPT09ICdnaXRodWInKSB7XG5cdFx0XHRwcm92aWRlciA9IG5ldyBHaXRodWJBdXRoUHJvdmlkZXIoKTtcblx0XHR9XG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHNpZ25JbldpdGhQb3B1cChGaXJlYmFzZUF1dGgsIHByb3ZpZGVyKTtcblx0XHRjb25zb2xlLmxvZyhkYXRhKTtcblx0fTtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J215LWNvbnRhaW5lcic+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LTEvMyc+XG5cdFx0XHRcdFx0eycgJ31cblx0XHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxuXHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nc21hbGwtdGl0bGUgJz7slYTsnbTrlJQ8L2xhYmVsPlxuXG5cdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0bXVsdGlwbGU9J211bHRpcGxlJ1xuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9JyBiYXNlLWZvcm0nXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtlbWFpbH1cblx0XHRcdFx0XHRcdFx0bmFtZT0nZW1haWwnXG5cdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdFbWFpbCdcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e29uQ2hhbmdlfVxuXHRcdFx0XHRcdFx0XHQvLyByZXF1aXJlZFxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3NtYWxsLXRpdGxlICc+67mE67CA67KI7Zi4PC9sYWJlbD5cblx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRuYW1lPSdwYXNzd29yZCdcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3Bhc3N3b3JkfVxuXHRcdFx0XHRcdFx0XHR0eXBlPSdwYXNzd29yZCdcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J1Bhc3N3b3JkJ1xuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9JyBiYXNlLWZvcm0nXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtvbkNoYW5nZX1cblx0XHRcdFx0XHRcdFx0Ly8gcmVxdWlyZWRcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdyb3VuZC1idXR0b24nXG5cdFx0XHRcdFx0XHRcdHR5cGU9J3N1Ym1pdCdcblx0XHRcdFx0XHRcdFx0dmFsdWU9e25ld0FjY291bnQgPyAnQ3JlYXRlIEFjY291bnQnIDogJ1NpZ24gSW4nfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ncm91bmQtYnV0dG9uJyBvbkNsaWNrPXt0b2dnbGVBY2NvdW50fT5cblx0XHRcdFx0XHRcdFx0e25ld0FjY291bnQgPyAnU2lnbiBJbicgOiAnQ3JlYXRlIEFjY291bnQnfVxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0e2Vycm9yfVxuXHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdyb3VuZC1idXR0b24nXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXtvblNvY2lhbENsaWNrfVxuXHRcdFx0XHRcdFx0bmFtZT0nZ29vZ2xlJ1xuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdENvbnRpbnVlIHdpdGggR29vZ2xlXG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdyb3VuZC1idXR0b24nXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXtvblNvY2lhbENsaWNrfVxuXHRcdFx0XHRcdFx0bmFtZT0nZ2l0aHViJ1xuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdENvbnRpbnVlIHdpdGggR2l0aHViXG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRmlyZWJhc2VBdXRoIiwiRmlyZWJhc2VJbnN0YW5jZSIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiR2l0aHViQXV0aFByb3ZpZGVyIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwic2lnbkluV2l0aFBvcHVwIiwiTG9naW4iLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsIm5ld0FjY291bnQiLCJzZXROZXdBY2NvdW50IiwiZXJyb3IiLCJzZXRFcnJvciIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsInRvZ2dsZUFjY291bnQiLCJwcmV2Iiwib25Tb2NpYWxDbGljayIsInByb3ZpZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsImxhYmVsIiwiaW5wdXQiLCJtdWx0aXBsZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsInNwYW4iLCJvbkNsaWNrIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/analytics":
/*!*************************************!*\
  !*** external "firebase/analytics" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase/analytics");;

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("firebase/storage");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login/index.js"));
module.exports = __webpack_exports__;

})();