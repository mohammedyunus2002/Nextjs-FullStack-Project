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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\nfunction middleware(request) {\n    // Get token from request\n    const token = request.cookies.get(\"token\")?.value || \"\";\n    const path = request.nextUrl.pathname;\n    const isPublicPath = path === \"/login\" || path === \"/signup\" || path === \"/verifyemail\";\n    if (isPublicPath && token) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/\", request.nextUrl));\n    }\n    // Validate token\n    if (!isPublicPath && !token) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/login\", request.nextUrl));\n    }\n    if (token && path === \"/login\" || \"/signup\" || 0) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/todo\", request.url));\n    }\n    // Token is valid, return original response\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next();\n}\nconst config = {\n    matcher: \"/todo\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXVEO0FBRWhELFNBQVNDLFdBQVdDLE9BQW9CO0lBRTdDLHlCQUF5QjtJQUN6QixNQUFNQyxRQUFRRCxRQUFRRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVQyxTQUFTO0lBRXJELE1BQU1DLE9BQU9MLFFBQVFNLE9BQU8sQ0FBQ0MsUUFBUTtJQUVyQyxNQUFNQyxlQUFlSCxTQUFTLFlBQVlBLFNBQVMsYUFBYUEsU0FBUztJQUd6RSxJQUFHRyxnQkFBZ0JQLE9BQU87UUFDeEIsT0FBT0gsa0ZBQVlBLENBQUNXLFFBQVEsQ0FBQyxJQUFJQyxJQUFJLEtBQUtWLFFBQVFNLE9BQU87SUFDM0Q7SUFFQSxpQkFBaUI7SUFDakIsSUFBSSxDQUFDRSxnQkFBZ0IsQ0FBQ1AsT0FBTztRQUMzQixPQUFPSCxrRkFBWUEsQ0FBQ1csUUFBUSxDQUFDLElBQUlDLElBQUksVUFBVVYsUUFBUU0sT0FBTztJQUNoRTtJQUVBLElBQUdMLFNBQVNJLFNBQVMsWUFBWSxhQUFhLEdBQUs7UUFDakQsT0FBT1Asa0ZBQVlBLENBQUNXLFFBQVEsQ0FBQyxJQUFJQyxJQUFJLFNBQVNWLFFBQVFXLEdBQUc7SUFDM0Q7SUFFQSwyQ0FBMkM7SUFDM0MsT0FBT2Isa0ZBQVlBLENBQUNjLElBQUk7QUFFMUI7QUFFTyxNQUFNQyxTQUFTO0lBQ3BCQyxTQUFTO0FBQ1gsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbWlkZGxld2FyZS50cz9kMTk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcblxuZXhwb3J0IGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcblxuICAvLyBHZXQgdG9rZW4gZnJvbSByZXF1ZXN0XG4gIGNvbnN0IHRva2VuID0gcmVxdWVzdC5jb29raWVzLmdldCgndG9rZW4nKT8udmFsdWUgfHwgJydcblxuICBjb25zdCBwYXRoID0gcmVxdWVzdC5uZXh0VXJsLnBhdGhuYW1lXG5cbiAgY29uc3QgaXNQdWJsaWNQYXRoID0gcGF0aCA9PT0gJy9sb2dpbicgfHwgcGF0aCA9PT0gJy9zaWdudXAnIHx8IHBhdGggPT09ICcvdmVyaWZ5ZW1haWwnXG5cblxuICBpZihpc1B1YmxpY1BhdGggJiYgdG9rZW4pIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy8nLCByZXF1ZXN0Lm5leHRVcmwpKVxuICB9XG5cbiAgLy8gVmFsaWRhdGUgdG9rZW5cbiAgaWYgKCFpc1B1YmxpY1BhdGggJiYgIXRva2VuKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKCcvbG9naW4nLCByZXF1ZXN0Lm5leHRVcmwpKVxuICB9XG5cbiAgaWYodG9rZW4gJiYgcGF0aCA9PT0gJy9sb2dpbicgfHwgJy9zaWdudXAnIHx8ICcvJykge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnL3RvZG8nLCByZXF1ZXN0LnVybCkpXG4gIH1cblxuICAvLyBUb2tlbiBpcyB2YWxpZCwgcmV0dXJuIG9yaWdpbmFsIHJlc3BvbnNlXG4gIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpXG5cbn1cblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgbWF0Y2hlcjogJy90b2RvJywgIFxufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJtaWRkbGV3YXJlIiwicmVxdWVzdCIsInRva2VuIiwiY29va2llcyIsImdldCIsInZhbHVlIiwicGF0aCIsIm5leHRVcmwiLCJwYXRobmFtZSIsImlzUHVibGljUGF0aCIsInJlZGlyZWN0IiwiVVJMIiwidXJsIiwibmV4dCIsImNvbmZpZyIsIm1hdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});