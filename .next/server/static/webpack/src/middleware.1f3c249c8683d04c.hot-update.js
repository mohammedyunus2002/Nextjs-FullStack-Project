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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/api-utils */ \"(middleware)/./node_modules/next/dist/esm/server/api-utils/index.js\");\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\n\nfunction middleware(request) {\n    // Get token from request\n    const token = request.cookies.get(\"token\");\n    // Validate token\n    if (!token) {\n        (0,next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_0__.redirect)(push, \"/login\");\n        return new Response(\"Unauthorized\", {\n            status: 401\n        });\n    }\n    // Token is valid, return original response\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].next();\n}\nconst config = {\n    matcher: \"/todo\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFxRDtBQUNFO0FBRWhELFNBQVNFLFdBQVdDLE9BQW9CO0lBRTdDLHlCQUF5QjtJQUN6QixNQUFNQyxRQUFRRCxRQUFRRSxPQUFPLENBQUNDLEdBQUcsQ0FBQztJQUVsQyxpQkFBaUI7SUFDakIsSUFBSSxDQUFDRixPQUFPO1FBQ1ZKLG9FQUFRQSxDQUFDTyxNQUFNO1FBQ2YsT0FBTyxJQUFJQyxTQUFTLGdCQUFnQjtZQUFFQyxRQUFRO1FBQUk7SUFDcEQ7SUFFQSwyQ0FBMkM7SUFDM0MsT0FBT1Isa0ZBQVlBLENBQUNTLElBQUk7QUFFMUI7QUFFTyxNQUFNQyxTQUFTO0lBQ3BCQyxTQUFTO0FBQ1gsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbWlkZGxld2FyZS50cz9kMTk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSAnbmV4dC9kaXN0L3NlcnZlci9hcGktdXRpbHMnXG5pbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XG5cbiAgLy8gR2V0IHRva2VuIGZyb20gcmVxdWVzdFxuICBjb25zdCB0b2tlbiA9IHJlcXVlc3QuY29va2llcy5nZXQoJ3Rva2VuJykgXG5cbiAgLy8gVmFsaWRhdGUgdG9rZW5cbiAgaWYgKCF0b2tlbikge1xuICAgIHJlZGlyZWN0KHB1c2gsIFwiL2xvZ2luXCIpXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZSgnVW5hdXRob3JpemVkJywgeyBzdGF0dXM6IDQwMSB9KVxuICB9XG5cbiAgLy8gVG9rZW4gaXMgdmFsaWQsIHJldHVybiBvcmlnaW5hbCByZXNwb25zZVxuICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKVxuXG59XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIG1hdGNoZXI6ICcvdG9kbycsICBcbn0iXSwibmFtZXMiOlsicmVkaXJlY3QiLCJOZXh0UmVzcG9uc2UiLCJtaWRkbGV3YXJlIiwicmVxdWVzdCIsInRva2VuIiwiY29va2llcyIsImdldCIsInB1c2giLCJSZXNwb25zZSIsInN0YXR1cyIsIm5leHQiLCJjb25maWciLCJtYXRjaGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});