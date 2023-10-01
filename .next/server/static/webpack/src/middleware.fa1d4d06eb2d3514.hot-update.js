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

/***/ "(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/esm/server/web/exports/next-response.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _spec_extension_response__WEBPACK_IMPORTED_MODULE_0__.NextResponse)\n/* harmony export */ });\n/* harmony import */ var _spec_extension_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../spec-extension/response */ \"(middleware)/./node_modules/next/dist/esm/server/web/spec-extension/response.js\");\n// This file is for modularized imports for next/server to get fully-treeshaking.\n //# sourceMappingURL=next-response.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2VydmVyL3dlYi9leHBvcnRzL25leHQtcmVzcG9uc2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpRkFBaUY7QUFDWixDQUVyRSx5Q0FBeUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2VydmVyL3dlYi9leHBvcnRzL25leHQtcmVzcG9uc2UuanM/NjQxNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgZm9yIG1vZHVsYXJpemVkIGltcG9ydHMgZm9yIG5leHQvc2VydmVyIHRvIGdldCBmdWxseS10cmVlc2hha2luZy5cbmV4cG9ydCB7IE5leHRSZXNwb25zZSBhcyBkZWZhdWx0IH0gZnJvbSBcIi4uL3NwZWMtZXh0ZW5zaW9uL3Jlc3BvbnNlXCI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5leHQtcmVzcG9uc2UuanMubWFwIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\n");

/***/ }),

/***/ "(middleware)/./src/middleware.ts":
/*!***************************!*\
  !*** ./src/middleware.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\nfunction middleware(request) {\n    // Get token from request\n    const token = request.cookies.get(\"token\");\n    // Validate token\n    if (!token) {\n        return new Response(\"Unauthorized\", {\n            status: 401\n        });\n    }\n    // Token is valid, return original response\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next();\n}\nconst config = {\n    matcher: \"/todo\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBDO0FBRW5DLFNBQVNDLFdBQVdDLE9BQU87SUFFaEMseUJBQXlCO0lBQ3pCLE1BQU1DLFFBQVFELFFBQVFFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO0lBRWxDLGlCQUFpQjtJQUNqQixJQUFJLENBQUNGLE9BQU87UUFDVixPQUFPLElBQUlHLFNBQVMsZ0JBQWdCO1lBQUVDLFFBQVE7UUFBSTtJQUNwRDtJQUVBLDJDQUEyQztJQUMzQyxPQUFPUCxrRkFBWUEsQ0FBQ1EsSUFBSTtBQUUxQjtBQUVPLE1BQU1DLFNBQVM7SUFDcEJDLFNBQVM7QUFDWCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9taWRkbGV3YXJlLnRzP2QxOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcXVlc3QpIHtcblxuICAvLyBHZXQgdG9rZW4gZnJvbSByZXF1ZXN0XG4gIGNvbnN0IHRva2VuID0gcmVxdWVzdC5jb29raWVzLmdldCgndG9rZW4nKSBcblxuICAvLyBWYWxpZGF0ZSB0b2tlblxuICBpZiAoIXRva2VuKSB7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZSgnVW5hdXRob3JpemVkJywgeyBzdGF0dXM6IDQwMSB9KVxuICB9XG5cbiAgLy8gVG9rZW4gaXMgdmFsaWQsIHJldHVybiBvcmlnaW5hbCByZXNwb25zZVxuICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKVxuXG59XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIG1hdGNoZXI6ICcvdG9kbycsICBcbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwibWlkZGxld2FyZSIsInJlcXVlc3QiLCJ0b2tlbiIsImNvb2tpZXMiLCJnZXQiLCJSZXNwb25zZSIsInN0YXR1cyIsIm5leHQiLCJjb25maWciLCJtYXRjaGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});