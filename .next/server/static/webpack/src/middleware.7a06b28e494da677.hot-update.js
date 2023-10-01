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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\nfunction middleware(req) {\n    // Get token from request\n    const token = req.cookies.get(\"token\");\n    // Validate token\n    if (!token) {\n        next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/home\", req.url));\n        return new Response(\"Unauthorized\", {\n            status: 401\n        });\n    }\n    // Token is valid, return original response\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next();\n}\nconst config = {\n    matcher: \"/todo\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ3VEO0FBRWhELFNBQVNDLFdBQVdDLEdBQWdCO0lBRXpDLHlCQUF5QjtJQUN6QixNQUFNQyxRQUFRRCxJQUFJRSxPQUFPLENBQUNDLEdBQUcsQ0FBQztJQUU5QixpQkFBaUI7SUFDakIsSUFBSSxDQUFDRixPQUFPO1FBQ1ZILGtGQUFZQSxDQUFDTSxRQUFRLENBQUMsSUFBSUMsSUFBSSxTQUFTTCxJQUFJTSxHQUFHO1FBQzlDLE9BQU8sSUFBSUMsU0FBUyxnQkFBZ0I7WUFBRUMsUUFBUTtRQUFJO0lBQ3BEO0lBRUEsMkNBQTJDO0lBQzNDLE9BQU9WLGtGQUFZQSxDQUFDVyxJQUFJO0FBRTFCO0FBRU8sTUFBTUMsU0FBUztJQUNwQkMsU0FBUztBQUNYLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21pZGRsZXdhcmUudHM/ZDE5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcbmltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcblxuZXhwb3J0IGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxOiBOZXh0UmVxdWVzdCkge1xuXG4gIC8vIEdldCB0b2tlbiBmcm9tIHJlcXVlc3RcbiAgY29uc3QgdG9rZW4gPSByZXEuY29va2llcy5nZXQoJ3Rva2VuJykgXG5cbiAgLy8gVmFsaWRhdGUgdG9rZW5cbiAgaWYgKCF0b2tlbikge1xuICAgIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKCcvaG9tZScsIHJlcS51cmwpKTtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKCdVbmF1dGhvcml6ZWQnLCB7IHN0YXR1czogNDAxIH0pXG4gIH1cblxuICAvLyBUb2tlbiBpcyB2YWxpZCwgcmV0dXJuIG9yaWdpbmFsIHJlc3BvbnNlXG4gIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpXG5cbn1cblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgbWF0Y2hlcjogJy90b2RvJywgIFxufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJtaWRkbGV3YXJlIiwicmVxIiwidG9rZW4iLCJjb29raWVzIiwiZ2V0IiwicmVkaXJlY3QiLCJVUkwiLCJ1cmwiLCJSZXNwb25zZSIsInN0YXR1cyIsIm5leHQiLCJjb25maWciLCJtYXRjaGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});