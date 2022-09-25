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
exports.id = "pages/mypage";
exports.ids = ["pages/mypage"];
exports.modules = {

/***/ "./pages/firebase.js":
/*!***************************!*\
  !*** ./pages/firebase.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FirebaseAuth\": () => (/* binding */ FirebaseAuth),\n/* harmony export */   \"FirebaseInstance\": () => (/* binding */ FirebaseInstance),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"storage\": () => (/* binding */ storage),\n/* harmony export */   \"storageRef\": () => (/* binding */ storageRef)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/analytics */ \"firebase/analytics\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_analytics__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_4__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_analytics__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n/** @format */ \n\n\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyANvf4DRP6pyasxGSwktai7Lff2AmKPXpE\",\n    authDomain: \"formyteam-a5c8b.firebaseapp.com\",\n    projectId: \"formyteam-a5c8b\",\n    storageBucket: \"formyteam-a5c8b.appspot.com\",\n    messagingSenderId: \"530999216857\",\n    appId: \"1:530999216857:web:38bfaae7e5ffc0be3b0cc8\",\n    measurementId: \"G-5T73W9Q1F8\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst FirebaseAuth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(app);\nconst FirebaseInstance = firebase_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getFirestore)(app);\nconst storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(app);\nconst storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(storage);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app); // export default firebase.initializeApp();\n // export const getAuth(firebase);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFlBQVksR0FDd0I7QUFDUztBQUNLO0FBQ3NCO0FBQ3JCO0FBRUQ7QUFFbEQsTUFBTVEsY0FBYyxHQUFHO0lBQ3RCQyxNQUFNLEVBQUUseUNBQXlDO0lBQ2pEQyxVQUFVLEVBQUUsaUNBQWlDO0lBQzdDQyxTQUFTLEVBQUUsaUJBQWlCO0lBQzVCQyxhQUFhLEVBQUUsNkJBQTZCO0lBQzVDQyxpQkFBaUIsRUFBRSxjQUFjO0lBQ2pDQyxLQUFLLEVBQUUsMkNBQTJDO0lBQ2xEQyxhQUFhLEVBQUUsY0FBYztDQUM3QjtBQUVELE1BQU1DLEdBQUcsR0FBR2YsMkRBQWEsQ0FBQ08sY0FBYyxDQUFDO0FBQ2xDLE1BQU1TLFlBQVksR0FBR2Isc0RBQU8sQ0FBQ1ksR0FBRyxDQUFDLENBQUM7QUFDbEMsTUFBTUUsZ0JBQWdCLEdBQUdsQixvREFBUSxDQUFDO0FBQ2xDLE1BQU1tQixFQUFFLEdBQUdaLGdFQUFZLENBQUNTLEdBQUcsQ0FBQyxDQUFDO0FBQzdCLE1BQU1JLE9BQU8sR0FBR2YsNERBQVUsQ0FBQ1csR0FBRyxDQUFDLENBQUM7QUFDaEMsTUFBTUssVUFBVSxHQUFHZixxREFBRyxDQUFDYyxPQUFPLENBQUMsQ0FBQztBQUV2QyxpRUFBZUosR0FBRyxFQUFDLENBRW5CLDJDQUEyQztDQUUzQyxrQ0FBa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9maXJlYmFzZS5qcz8zNGMwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAZm9ybWF0ICovXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJztcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuaW1wb3J0IHsgZ2V0QW5hbHl0aWNzIH0gZnJvbSAnZmlyZWJhc2UvYW5hbHl0aWNzJztcbmltcG9ydCB7IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCwgZ2V0QXV0aCB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xuaW1wb3J0IHsgZ2V0U3RvcmFnZSwgcmVmIH0gZnJvbSAnZmlyZWJhc2Uvc3RvcmFnZSc7XG5cbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XG5cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuXHRhcGlLZXk6ICdBSXphU3lBTnZmNERSUDZweWFzeEdTd2t0YWk3TGZmMkFtS1BYcEUnLFxuXHRhdXRoRG9tYWluOiAnZm9ybXl0ZWFtLWE1YzhiLmZpcmViYXNlYXBwLmNvbScsXG5cdHByb2plY3RJZDogJ2Zvcm15dGVhbS1hNWM4YicsXG5cdHN0b3JhZ2VCdWNrZXQ6ICdmb3JteXRlYW0tYTVjOGIuYXBwc3BvdC5jb20nLFxuXHRtZXNzYWdpbmdTZW5kZXJJZDogJzUzMDk5OTIxNjg1NycsXG5cdGFwcElkOiAnMTo1MzA5OTkyMTY4NTc6d2ViOjM4YmZhYWU3ZTVmZmMwYmUzYjBjYzgnLFxuXHRtZWFzdXJlbWVudElkOiAnRy01VDczVzlRMUY4Jyxcbn07XG5cbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuZXhwb3J0IGNvbnN0IEZpcmViYXNlQXV0aCA9IGdldEF1dGgoYXBwKTtcbmV4cG9ydCBjb25zdCBGaXJlYmFzZUluc3RhbmNlID0gZmlyZWJhc2U7XG5leHBvcnQgY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoYXBwKTtcbmV4cG9ydCBjb25zdCBzdG9yYWdlID0gZ2V0U3RvcmFnZShhcHApO1xuZXhwb3J0IGNvbnN0IHN0b3JhZ2VSZWYgPSByZWYoc3RvcmFnZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDtcblxuLy8gZXhwb3J0IGRlZmF1bHQgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcCgpO1xuXG4vLyBleHBvcnQgY29uc3QgZ2V0QXV0aChmaXJlYmFzZSk7XG4iXSwibmFtZXMiOlsiZmlyZWJhc2UiLCJpbml0aWFsaXplQXBwIiwiZ2V0QW5hbHl0aWNzIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiZ2V0QXV0aCIsImdldFN0b3JhZ2UiLCJyZWYiLCJnZXRGaXJlc3RvcmUiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJhcHAiLCJGaXJlYmFzZUF1dGgiLCJGaXJlYmFzZUluc3RhbmNlIiwiZGIiLCJzdG9yYWdlIiwic3RvcmFnZVJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/firebase.js\n");

/***/ }),

/***/ "./pages/mypage/index.js":
/*!*******************************!*\
  !*** ./pages/mypage/index.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase */ \"./pages/firebase.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _src_store_modules_projectInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/store/modules/projectInfo */ \"./src/store/modules/projectInfo.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_6__]);\n([_firebase__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n/** @format */ \n\n\n\n\n\n\n\n\n\nfunction Mypage() {\n    const userInfo = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(({ user  })=>user);\n    const route = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchUsers = async ()=>{\n            const projectRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_2__.db, \"project\"));\n            const newData = projectRef.docs.map((doc)=>({\n                    ...doc.data()\n                }));\n            // const q = query(projectRef, where('uid', '==', `${userInfo.uid}`));\n            console.log(newData);\n        // \tconst projectSnap = await getDoc(projectRef);\n        // \t// console.log(Intro);\n        // \t// const data = projectSnap.data();\n        // \tif (projectSnap.exists()) {\n        // \t\t// console.log('Document data:', projectSnap.data());\n        // \t\tsetProjects(projectSnap.data());\n        // \t\tsetProjectInfo(projectSnap.data().info.project_info);\n        // \t} else {\n        // \t\tconsole.log('No such document!');\n        // \t}\n        };\n        fetchUsers();\n        console.log(\"q\");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"my-container mx-auto\"\n        }, void 0, false, {\n            fileName: \"/Users/jeongsuin/Desktop/Project-intro/my-project/client/pages/mypage/index.js\",\n            lineNumber: 47,\n            columnNumber: 4\n        }, this)\n    }, void 0, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mypage);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9teXBhZ2UvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsWUFBWSxHQUNaO0FBQTRDO0FBQ2lCO0FBT3RDO0FBQ2dCO0FBQ0M7QUFDUDtBQUNzQztBQUNoQjtBQUN5QjtBQUVoRixTQUFTcUIsTUFBTSxHQUFHO0lBQ2pCLE1BQU1DLFFBQVEsR0FBR04sd0RBQVcsQ0FBQyxDQUFDLEVBQUVPLElBQUksR0FBRSxHQUFLQSxJQUFJLENBQUM7SUFDaEQsTUFBTUMsS0FBSyxHQUFHZCxzREFBUyxFQUFFO0lBRXpCVCxnREFBUyxDQUFDLElBQU07UUFDZixNQUFNd0IsVUFBVSxHQUFHLFVBQVk7WUFDOUIsTUFBTUMsVUFBVSxHQUFHLE1BQU1iLDJEQUFPLENBQUNELDhEQUFVLENBQUNELHlDQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDM0QsTUFBTWdCLE9BQU8sR0FBR0QsVUFBVSxDQUFDRSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLEdBQUssQ0FBQztvQkFDN0MsR0FBR0EsR0FBRyxDQUFDQyxJQUFJLEVBQUU7aUJBQ2IsQ0FBQyxDQUFDO1lBQ0gsc0VBQXNFO1lBQ3RFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sT0FBTyxDQUFDLENBQUM7UUFDckIsaURBQWlEO1FBQ2pELDBCQUEwQjtRQUMxQix1Q0FBdUM7UUFDdkMsK0JBQStCO1FBQy9CLDBEQUEwRDtRQUMxRCxxQ0FBcUM7UUFDckMsMERBQTBEO1FBQzFELFlBQVk7UUFDWixzQ0FBc0M7UUFDdEMsS0FBSztTQUNMO1FBQ0RGLFVBQVUsRUFBRSxDQUFDO1FBQ2JPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2pCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDQztrQkFDQyw0RUFBQ0MsS0FBRztZQUFDQyxTQUFTLEVBQUMsc0JBQXNCOzs7OztnQkFBTztxQkFDMUMsQ0FDRjtDQUNGO0FBRUQsaUVBQWVkLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL215cGFnZS9pbmRleC5qcz9jMTJjIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAZm9ybWF0ICovXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmlyZWJhc2VBdXRoLCBGaXJlYmFzZUluc3RhbmNlIH0gZnJvbSAnLi4vZmlyZWJhc2UnO1xuaW1wb3J0IHtcblx0Y3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkLFxuXHRzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCxcblx0R2l0aHViQXV0aFByb3ZpZGVyLFxuXHRHb29nbGVBdXRoUHJvdmlkZXIsXG5cdHNpZ25JbldpdGhQb3B1cCxcbn0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vZmlyZWJhc2UnO1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgZ2V0RG9jcywgcXVlcnksIHdoZXJlIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHNldENvbG9yLCBzZXRMb2dvLCBzZXRBbGwgfSBmcm9tICcuLi8uLi9zcmMvc3RvcmUvbW9kdWxlcy9wcm9qZWN0SW5mbyc7XG5cbmZ1bmN0aW9uIE15cGFnZSgpIHtcblx0Y29uc3QgdXNlckluZm8gPSB1c2VTZWxlY3RvcigoeyB1c2VyIH0pID0+IHVzZXIpO1xuXHRjb25zdCByb3V0ZSA9IHVzZVJvdXRlcigpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgZmV0Y2hVc2VycyA9IGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHByb2plY3RSZWYgPSBhd2FpdCBnZXREb2NzKGNvbGxlY3Rpb24oZGIsICdwcm9qZWN0JykpO1xuXHRcdFx0Y29uc3QgbmV3RGF0YSA9IHByb2plY3RSZWYuZG9jcy5tYXAoKGRvYykgPT4gKHtcblx0XHRcdFx0Li4uZG9jLmRhdGEoKSxcblx0XHRcdH0pKTtcblx0XHRcdC8vIGNvbnN0IHEgPSBxdWVyeShwcm9qZWN0UmVmLCB3aGVyZSgndWlkJywgJz09JywgYCR7dXNlckluZm8udWlkfWApKTtcblx0XHRcdGNvbnNvbGUubG9nKG5ld0RhdGEpO1xuXHRcdFx0Ly8gXHRjb25zdCBwcm9qZWN0U25hcCA9IGF3YWl0IGdldERvYyhwcm9qZWN0UmVmKTtcblx0XHRcdC8vIFx0Ly8gY29uc29sZS5sb2coSW50cm8pO1xuXHRcdFx0Ly8gXHQvLyBjb25zdCBkYXRhID0gcHJvamVjdFNuYXAuZGF0YSgpO1xuXHRcdFx0Ly8gXHRpZiAocHJvamVjdFNuYXAuZXhpc3RzKCkpIHtcblx0XHRcdC8vIFx0XHQvLyBjb25zb2xlLmxvZygnRG9jdW1lbnQgZGF0YTonLCBwcm9qZWN0U25hcC5kYXRhKCkpO1xuXHRcdFx0Ly8gXHRcdHNldFByb2plY3RzKHByb2plY3RTbmFwLmRhdGEoKSk7XG5cdFx0XHQvLyBcdFx0c2V0UHJvamVjdEluZm8ocHJvamVjdFNuYXAuZGF0YSgpLmluZm8ucHJvamVjdF9pbmZvKTtcblx0XHRcdC8vIFx0fSBlbHNlIHtcblx0XHRcdC8vIFx0XHRjb25zb2xlLmxvZygnTm8gc3VjaCBkb2N1bWVudCEnKTtcblx0XHRcdC8vIFx0fVxuXHRcdH07XG5cdFx0ZmV0Y2hVc2VycygpO1xuXHRcdGNvbnNvbGUubG9nKCdxJyk7XG5cdH0sIFtdKTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbXktY29udGFpbmVyIG14LWF1dG8nPjwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeXBhZ2U7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJGaXJlYmFzZUF1dGgiLCJGaXJlYmFzZUluc3RhbmNlIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJHaXRodWJBdXRoUHJvdmlkZXIiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJzaWduSW5XaXRoUG9wdXAiLCJzdHlsZWQiLCJ1c2VSb3V0ZXIiLCJkYiIsImNvbGxlY3Rpb24iLCJnZXREb2NzIiwicXVlcnkiLCJ3aGVyZSIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJzZXRDb2xvciIsInNldExvZ28iLCJzZXRBbGwiLCJNeXBhZ2UiLCJ1c2VySW5mbyIsInVzZXIiLCJyb3V0ZSIsImZldGNoVXNlcnMiLCJwcm9qZWN0UmVmIiwibmV3RGF0YSIsImRvY3MiLCJtYXAiLCJkb2MiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/mypage/index.js\n");

/***/ }),

/***/ "./src/store/modules/projectInfo.js":
/*!******************************************!*\
  !*** ./src/store/modules/projectInfo.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getState\": () => (/* binding */ getState),\n/* harmony export */   \"setAll\": () => (/* binding */ setAll),\n/* harmony export */   \"setColor\": () => (/* binding */ setColor),\n/* harmony export */   \"setLogo\": () => (/* binding */ setLogo)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/** @format */ \nconst initialState = {};\nconst projectInfo = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"projectInfo\",\n    initialState,\n    reducers: {\n        setColor: (state, actions)=>{\n            // console.log('setColor', actions);\n            state.color = actions.payload;\n        },\n        setLogo: (state, actions)=>{\n            // console.log('setLogo', actions);\n            state.logo = actions.payload;\n        },\n        getState: (state)=>{\n        // console.log('getState', state);\n        },\n        setAll: (state, actions)=>{\n            console.log(actions.payload);\n            console.log(\"statestatestate\", state);\n            return actions.payload;\n        // state = { ...state, ...actions.payload };\n        }\n    }\n});\nconst { setColor , setLogo , getState , setAll  } = projectInfo.actions; // 액션 생성함수\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectInfo.reducer); // 리듀서\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvbW9kdWxlcy9wcm9qZWN0SW5mby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsWUFBWSxHQUVtQztBQUMvQyxNQUFNQyxZQUFZLEdBQUcsRUFBRTtBQUV2QixNQUFNQyxXQUFXLEdBQUdGLDZEQUFXLENBQUM7SUFDL0JHLElBQUksRUFBRSxhQUFhO0lBQ25CRixZQUFZO0lBQ1pHLFFBQVEsRUFBRTtRQUNUQyxRQUFRLEVBQUUsQ0FBQ0MsS0FBSyxFQUFFQyxPQUFPLEdBQUs7WUFDN0Isb0NBQW9DO1lBQ3BDRCxLQUFLLENBQUNFLEtBQUssR0FBR0QsT0FBTyxDQUFDRSxPQUFPLENBQUM7U0FDOUI7UUFDREMsT0FBTyxFQUFFLENBQUNKLEtBQUssRUFBRUMsT0FBTyxHQUFLO1lBQzVCLG1DQUFtQztZQUNuQ0QsS0FBSyxDQUFDSyxJQUFJLEdBQUdKLE9BQU8sQ0FBQ0UsT0FBTyxDQUFDO1NBQzdCO1FBQ0RHLFFBQVEsRUFBRSxDQUFDTixLQUFLLEdBQUs7UUFDcEIsa0NBQWtDO1NBQ2xDO1FBQ0RPLE1BQU0sRUFBRSxDQUFDUCxLQUFLLEVBQUVDLE9BQU8sR0FBSztZQUMzQk8sT0FBTyxDQUFDQyxHQUFHLENBQUNSLE9BQU8sQ0FBQ0UsT0FBTyxDQUFDLENBQUM7WUFDN0JLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixFQUFFVCxLQUFLLENBQUMsQ0FBQztZQUN0QyxPQUFPQyxPQUFPLENBQUNFLE9BQU8sQ0FBQztRQUN2Qiw0Q0FBNEM7U0FDNUM7S0FDRDtDQUNELENBQUM7QUFFSyxNQUFNLEVBQUVKLFFBQVEsR0FBRUssT0FBTyxHQUFFRSxRQUFRLEdBQUVDLE1BQU0sR0FBRSxHQUFHWCxXQUFXLENBQUNLLE9BQU8sQ0FBQyxDQUFDLFVBQVU7QUFDdEYsaUVBQWVMLFdBQVcsQ0FBQ2MsT0FBTyxFQUFDLENBQUMsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3NyYy9zdG9yZS9tb2R1bGVzL3Byb2plY3RJbmZvLmpzPzAwZjEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBmb3JtYXQgKi9cblxuaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xuXG5jb25zdCBwcm9qZWN0SW5mbyA9IGNyZWF0ZVNsaWNlKHtcblx0bmFtZTogJ3Byb2plY3RJbmZvJyxcblx0aW5pdGlhbFN0YXRlLFxuXHRyZWR1Y2Vyczoge1xuXHRcdHNldENvbG9yOiAoc3RhdGUsIGFjdGlvbnMpID0+IHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdzZXRDb2xvcicsIGFjdGlvbnMpO1xuXHRcdFx0c3RhdGUuY29sb3IgPSBhY3Rpb25zLnBheWxvYWQ7XG5cdFx0fSxcblx0XHRzZXRMb2dvOiAoc3RhdGUsIGFjdGlvbnMpID0+IHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdzZXRMb2dvJywgYWN0aW9ucyk7XG5cdFx0XHRzdGF0ZS5sb2dvID0gYWN0aW9ucy5wYXlsb2FkO1xuXHRcdH0sXG5cdFx0Z2V0U3RhdGU6IChzdGF0ZSkgPT4ge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ2dldFN0YXRlJywgc3RhdGUpO1xuXHRcdH0sXG5cdFx0c2V0QWxsOiAoc3RhdGUsIGFjdGlvbnMpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKGFjdGlvbnMucGF5bG9hZCk7XG5cdFx0XHRjb25zb2xlLmxvZygnc3RhdGVzdGF0ZXN0YXRlJywgc3RhdGUpO1xuXHRcdFx0cmV0dXJuIGFjdGlvbnMucGF5bG9hZDtcblx0XHRcdC8vIHN0YXRlID0geyAuLi5zdGF0ZSwgLi4uYWN0aW9ucy5wYXlsb2FkIH07XG5cdFx0fSxcblx0fSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyBzZXRDb2xvciwgc2V0TG9nbywgZ2V0U3RhdGUsIHNldEFsbCB9ID0gcHJvamVjdEluZm8uYWN0aW9uczsgLy8g7JWh7IWYIOyDneyEse2VqOyImFxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdEluZm8ucmVkdWNlcjsgLy8g66as65OA7IScXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJwcm9qZWN0SW5mbyIsIm5hbWUiLCJyZWR1Y2VycyIsInNldENvbG9yIiwic3RhdGUiLCJhY3Rpb25zIiwiY29sb3IiLCJwYXlsb2FkIiwic2V0TG9nbyIsImxvZ28iLCJnZXRTdGF0ZSIsInNldEFsbCIsImNvbnNvbGUiLCJsb2ciLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/modules/projectInfo.js\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

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
var __webpack_exports__ = (__webpack_exec__("./pages/mypage/index.js"));
module.exports = __webpack_exports__;

})();