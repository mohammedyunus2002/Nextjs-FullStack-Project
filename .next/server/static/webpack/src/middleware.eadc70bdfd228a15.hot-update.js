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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\nfunction middleware(request) {\n    // Get token from request\n    const token = request.cookies.get(\"token\")?.value || \"\";\n    const path = request.nextUrl.pathname;\n    const isPublicPath = path === \"/login\" || path === \"/signup\" || path === \"/verifyemail\";\n    if (isPublicPath && token) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/todo\", request.nextUrl));\n    }\n    // Validate token\n    if (!isPublicPath && !token) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/login\", request.nextUrl));\n    }\n}\nconst config = {\n    matcher: [\n        \"/\",\n        \"/signup\",\n        \"/login\",\n        \"/todo\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXVEO0FBRWhELFNBQVNDLFdBQVdDLE9BQW9CO0lBRTdDLHlCQUF5QjtJQUN6QixNQUFNQyxRQUFRRCxRQUFRRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVQyxTQUFTO0lBRXJELE1BQU1DLE9BQU9MLFFBQVFNLE9BQU8sQ0FBQ0MsUUFBUTtJQUVyQyxNQUFNQyxlQUFlSCxTQUFTLFlBQVlBLFNBQVMsYUFBYUEsU0FBUztJQUd6RSxJQUFHRyxnQkFBZ0JQLE9BQU87UUFDeEIsT0FBT0gsa0ZBQVlBLENBQUNXLFFBQVEsQ0FBQyxJQUFJQyxJQUFJLFNBQVNWLFFBQVFNLE9BQU87SUFDL0Q7SUFFQSxpQkFBaUI7SUFDakIsSUFBSSxDQUFDRSxnQkFBZ0IsQ0FBQ1AsT0FBTztRQUMzQixPQUFPSCxrRkFBWUEsQ0FBQ1csUUFBUSxDQUFDLElBQUlDLElBQUksVUFBVVYsUUFBUU0sT0FBTztJQUNoRTtBQUVGO0FBRU8sTUFBTUssU0FBUztJQUNwQkMsU0FBUztRQUNQO1FBQ0E7UUFDQTtRQUNBO0tBQ0Q7QUFFSCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9taWRkbGV3YXJlLnRzP2QxOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWlkZGxld2FyZShyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuXG4gIC8vIEdldCB0b2tlbiBmcm9tIHJlcXVlc3RcbiAgY29uc3QgdG9rZW4gPSByZXF1ZXN0LmNvb2tpZXMuZ2V0KCd0b2tlbicpPy52YWx1ZSB8fCAnJ1xuXG4gIGNvbnN0IHBhdGggPSByZXF1ZXN0Lm5leHRVcmwucGF0aG5hbWVcblxuICBjb25zdCBpc1B1YmxpY1BhdGggPSBwYXRoID09PSAnL2xvZ2luJyB8fCBwYXRoID09PSAnL3NpZ251cCcgfHwgcGF0aCA9PT0gJy92ZXJpZnllbWFpbCdcblxuXG4gIGlmKGlzUHVibGljUGF0aCAmJiB0b2tlbikge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnL3RvZG8nLCByZXF1ZXN0Lm5leHRVcmwpKVxuICB9XG5cbiAgLy8gVmFsaWRhdGUgdG9rZW5cbiAgaWYgKCFpc1B1YmxpY1BhdGggJiYgIXRva2VuKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKCcvbG9naW4nLCByZXF1ZXN0Lm5leHRVcmwpKVxuICB9XG5cbn1cblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgbWF0Y2hlcjogW1xuICAgICcvJyxcbiAgICAnL3NpZ251cCcsXG4gICAgJy9sb2dpbicsXG4gICAgJy90b2RvJ1xuICBdLCAgXG4gIFxufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJtaWRkbGV3YXJlIiwicmVxdWVzdCIsInRva2VuIiwiY29va2llcyIsImdldCIsInZhbHVlIiwicGF0aCIsIm5leHRVcmwiLCJwYXRobmFtZSIsImlzUHVibGljUGF0aCIsInJlZGlyZWN0IiwiVVJMIiwiY29uZmlnIiwibWF0Y2hlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});