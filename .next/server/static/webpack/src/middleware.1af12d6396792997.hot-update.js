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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\nfunction middleware(request) {\n    // Get token from request\n    const token = request.cookies.get(\"token\")?.value || \"\";\n    const path = request.nextUrl.pathname;\n    const isPublicPath = path === \"/login\" || path === \"/signup\" || path === \"/verifyemail\";\n    if (isPublicPath && token) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/\", request.nextUrl));\n    }\n    // Validate token\n    if (!token && path !== \"/login\") {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/login\", request.url));\n    }\n    if (token && path === \"/login\" || \"/signup\" || 0) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/todo\", request.url));\n    }\n    // Token is valid, return original response\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next();\n}\nconst config = {\n    matcher: \"/todo\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXVEO0FBRWhELFNBQVNDLFdBQVdDLE9BQW9CO0lBRTdDLHlCQUF5QjtJQUN6QixNQUFNQyxRQUFRRCxRQUFRRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVQyxTQUFTO0lBRXJELE1BQU1DLE9BQU9MLFFBQVFNLE9BQU8sQ0FBQ0MsUUFBUTtJQUVyQyxNQUFNQyxlQUFlSCxTQUFTLFlBQVlBLFNBQVMsYUFBYUEsU0FBUztJQUd6RSxJQUFHRyxnQkFBZ0JQLE9BQU87UUFDeEIsT0FBT0gsa0ZBQVlBLENBQUNXLFFBQVEsQ0FBQyxJQUFJQyxJQUFJLEtBQUtWLFFBQVFNLE9BQU87SUFDM0Q7SUFDQSxpQkFBaUI7SUFDakIsSUFBSSxDQUFDTCxTQUFTSSxTQUFTLFVBQVU7UUFDL0IsT0FBT1Asa0ZBQVlBLENBQUNXLFFBQVEsQ0FBQyxJQUFJQyxJQUFJLFVBQVVWLFFBQVFXLEdBQUc7SUFDNUQ7SUFFQSxJQUFHVixTQUFTSSxTQUFTLFlBQVksYUFBYSxHQUFLO1FBQ2pELE9BQU9QLGtGQUFZQSxDQUFDVyxRQUFRLENBQUMsSUFBSUMsSUFBSSxTQUFTVixRQUFRVyxHQUFHO0lBQzNEO0lBRUEsMkNBQTJDO0lBQzNDLE9BQU9iLGtGQUFZQSxDQUFDYyxJQUFJO0FBRTFCO0FBRU8sTUFBTUMsU0FBUztJQUNwQkMsU0FBUztBQUNYLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21pZGRsZXdhcmUudHM/ZDE5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XG5cbiAgLy8gR2V0IHRva2VuIGZyb20gcmVxdWVzdFxuICBjb25zdCB0b2tlbiA9IHJlcXVlc3QuY29va2llcy5nZXQoJ3Rva2VuJyk/LnZhbHVlIHx8ICcnXG5cbiAgY29uc3QgcGF0aCA9IHJlcXVlc3QubmV4dFVybC5wYXRobmFtZVxuXG4gIGNvbnN0IGlzUHVibGljUGF0aCA9IHBhdGggPT09ICcvbG9naW4nIHx8IHBhdGggPT09ICcvc2lnbnVwJyB8fCBwYXRoID09PSAnL3ZlcmlmeWVtYWlsJ1xuXG5cbiAgaWYoaXNQdWJsaWNQYXRoICYmIHRva2VuKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKCcvJywgcmVxdWVzdC5uZXh0VXJsKSlcbiAgfVxuICAvLyBWYWxpZGF0ZSB0b2tlblxuICBpZiAoIXRva2VuICYmIHBhdGggIT09ICcvbG9naW4nKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKCcvbG9naW4nLCByZXF1ZXN0LnVybCkpO1xuICB9XG5cbiAgaWYodG9rZW4gJiYgcGF0aCA9PT0gJy9sb2dpbicgfHwgJy9zaWdudXAnIHx8ICcvJykge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnL3RvZG8nLCByZXF1ZXN0LnVybCkpXG4gIH1cblxuICAvLyBUb2tlbiBpcyB2YWxpZCwgcmV0dXJuIG9yaWdpbmFsIHJlc3BvbnNlXG4gIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpXG5cbn1cblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgbWF0Y2hlcjogJy90b2RvJywgIFxufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJtaWRkbGV3YXJlIiwicmVxdWVzdCIsInRva2VuIiwiY29va2llcyIsImdldCIsInZhbHVlIiwicGF0aCIsIm5leHRVcmwiLCJwYXRobmFtZSIsImlzUHVibGljUGF0aCIsInJlZGlyZWN0IiwiVVJMIiwidXJsIiwibmV4dCIsImNvbmZpZyIsIm1hdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});