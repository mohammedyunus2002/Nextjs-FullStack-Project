"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/middleware.ts":
/*!***************************!*\
  !*** ./src/middleware.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"(middleware)/./node_modules/next/router.js\");\n\nfunction middleware(request) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n    const token = request.cookies.get(\"token\");\n    console.log(\"Token:\", token);\n    if (!token) {\n        console.log(\"Redirecting to /login\");\n        router.push(\"/login\");\n    }\n}\nconst config = {\n    matcher: \"/todo\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ3VDO0FBSWhDLFNBQVNDLFdBQVdDLE9BQW9CO0lBQzdDLE1BQU1DLFNBQVNILHNEQUFTQTtJQUN4QixNQUFNSSxRQUFRRixRQUFRRyxPQUFPLENBQUNDLEdBQUcsQ0FBQztJQUVsQ0MsUUFBUUMsR0FBRyxDQUFDLFVBQVVKO0lBRXRCLElBQUksQ0FBQ0EsT0FBTztRQUNWRyxRQUFRQyxHQUFHLENBQUM7UUFDWkwsT0FBT00sSUFBSSxDQUFDO0lBQ2Q7QUFDRjtBQUVPLE1BQU1DLFNBQVM7SUFDcEJDLFNBQVM7QUFDWCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9taWRkbGV3YXJlLnRzP2QxOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UmVxdWVzdCB9IGZyb20gJ25leHQvc2VydmVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cblxuIFxuZXhwb3J0IGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgdG9rZW4gPSByZXF1ZXN0LmNvb2tpZXMuZ2V0KCd0b2tlbicpO1xuXG4gIGNvbnNvbGUubG9nKCdUb2tlbjonLCB0b2tlbik7XG5cbiAgaWYgKCF0b2tlbikge1xuICAgIGNvbnNvbGUubG9nKCdSZWRpcmVjdGluZyB0byAvbG9naW4nKTtcbiAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIG1hdGNoZXI6ICcvdG9kbycsICBcbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwibWlkZGxld2FyZSIsInJlcXVlc3QiLCJyb3V0ZXIiLCJ0b2tlbiIsImNvb2tpZXMiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImNvbmZpZyIsIm1hdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});