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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\nfunction middleware(request) {\n    // Get token from request\n    const token = request.cookies.get(\"token\")?.value || \"\";\n    const path = request.nextUrl.pathname;\n    const isPublicPath = path === \"/login\" || path === \"/signup\" || path === \"/\";\n    if (isPublicPath && token) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/todo\", request.nextUrl));\n    }\n    // Validate token\n    if (isPublicPath && !token) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/login\", request.nextUrl));\n    }\n}\nconst config = {\n    matcher: [\n        \"/\",\n        \"/signup\",\n        \"/login\",\n        \"/todo\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXVEO0FBRWhELFNBQVNDLFdBQVdDLE9BQW9CO0lBRTdDLHlCQUF5QjtJQUN6QixNQUFNQyxRQUFRRCxRQUFRRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVQyxTQUFTO0lBRXJELE1BQU1DLE9BQU9MLFFBQVFNLE9BQU8sQ0FBQ0MsUUFBUTtJQUVyQyxNQUFNQyxlQUFlSCxTQUFTLFlBQVlBLFNBQVMsYUFBYUEsU0FBUztJQUV6RSxJQUFHRyxnQkFBZ0JQLE9BQU87UUFDeEIsT0FBT0gsa0ZBQVlBLENBQUNXLFFBQVEsQ0FBQyxJQUFJQyxJQUFJLFNBQVNWLFFBQVFNLE9BQU87SUFDL0Q7SUFFQSxpQkFBaUI7SUFDakIsSUFBSUUsZ0JBQWdCLENBQUNQLE9BQU87UUFDMUIsT0FBT0gsa0ZBQVlBLENBQUNXLFFBQVEsQ0FBQyxJQUFJQyxJQUFJLFVBQVVWLFFBQVFNLE9BQU87SUFDaEU7QUFFRjtBQUVPLE1BQU1LLFNBQVM7SUFDcEJDLFNBQVM7UUFDUDtRQUNBO1FBQ0E7UUFDQTtLQUNEO0FBQ0gsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbWlkZGxld2FyZS50cz9kMTk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcblxuZXhwb3J0IGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcblxuICAvLyBHZXQgdG9rZW4gZnJvbSByZXF1ZXN0XG4gIGNvbnN0IHRva2VuID0gcmVxdWVzdC5jb29raWVzLmdldCgndG9rZW4nKT8udmFsdWUgfHwgJydcblxuICBjb25zdCBwYXRoID0gcmVxdWVzdC5uZXh0VXJsLnBhdGhuYW1lXG5cbiAgY29uc3QgaXNQdWJsaWNQYXRoID0gcGF0aCA9PT0gJy9sb2dpbicgfHwgcGF0aCA9PT0gJy9zaWdudXAnIHx8IHBhdGggPT09ICcvJ1xuXG4gIGlmKGlzUHVibGljUGF0aCAmJiB0b2tlbikge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnL3RvZG8nLCByZXF1ZXN0Lm5leHRVcmwpKVxuICB9XG5cbiAgLy8gVmFsaWRhdGUgdG9rZW5cbiAgaWYgKGlzUHVibGljUGF0aCAmJiAhdG9rZW4pIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy9sb2dpbicsIHJlcXVlc3QubmV4dFVybCkpXG4gIH1cblxufVxuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBtYXRjaGVyOiBbXG4gICAgJy8nLFxuICAgICcvc2lnbnVwJyxcbiAgICAnL2xvZ2luJyxcbiAgICAnL3RvZG8nXG4gIF0gXG59Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIm1pZGRsZXdhcmUiLCJyZXF1ZXN0IiwidG9rZW4iLCJjb29raWVzIiwiZ2V0IiwidmFsdWUiLCJwYXRoIiwibmV4dFVybCIsInBhdGhuYW1lIiwiaXNQdWJsaWNQYXRoIiwicmVkaXJlY3QiLCJVUkwiLCJjb25maWciLCJtYXRjaGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});