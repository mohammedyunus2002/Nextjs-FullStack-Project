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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\nfunction middleware(request) {\n    // Get token from request\n    const token = request.cookies.get(\"token\");\n    // Validate token\n    if (!token) {\n        next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/home\", req.url));\n        return new Response(\"Unauthorized\", {\n            status: 401\n        });\n    }\n    // Token is valid, return original response\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next();\n}\nconst config = {\n    matcher: \"/todo\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ3VEO0FBRWhELFNBQVNDLFdBQVdDLE9BQW9CO0lBRTdDLHlCQUF5QjtJQUN6QixNQUFNQyxRQUFRRCxRQUFRRSxPQUFPLENBQUNDLEdBQUcsQ0FBQztJQUVsQyxpQkFBaUI7SUFDakIsSUFBSSxDQUFDRixPQUFPO1FBQ1ZILGtGQUFZQSxDQUFDTSxRQUFRLENBQUMsSUFBSUMsSUFBSSxTQUFTQyxJQUFJQyxHQUFHO1FBQzlDLE9BQU8sSUFBSUMsU0FBUyxnQkFBZ0I7WUFBRUMsUUFBUTtRQUFJO0lBQ3BEO0lBRUEsMkNBQTJDO0lBQzNDLE9BQU9YLGtGQUFZQSxDQUFDWSxJQUFJO0FBRTFCO0FBRU8sTUFBTUMsU0FBUztJQUNwQkMsU0FBUztBQUNYLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21pZGRsZXdhcmUudHM/ZDE5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcbmltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcblxuZXhwb3J0IGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcblxuICAvLyBHZXQgdG9rZW4gZnJvbSByZXF1ZXN0XG4gIGNvbnN0IHRva2VuID0gcmVxdWVzdC5jb29raWVzLmdldCgndG9rZW4nKSBcblxuICAvLyBWYWxpZGF0ZSB0b2tlblxuICBpZiAoIXRva2VuKSB7XG4gICAgTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy9ob21lJywgcmVxLnVybCkpO1xuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoJ1VuYXV0aG9yaXplZCcsIHsgc3RhdHVzOiA0MDEgfSlcbiAgfVxuXG4gIC8vIFRva2VuIGlzIHZhbGlkLCByZXR1cm4gb3JpZ2luYWwgcmVzcG9uc2VcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KClcblxufVxuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBtYXRjaGVyOiAnL3RvZG8nLCAgXG59Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIm1pZGRsZXdhcmUiLCJyZXF1ZXN0IiwidG9rZW4iLCJjb29raWVzIiwiZ2V0IiwicmVkaXJlY3QiLCJVUkwiLCJyZXEiLCJ1cmwiLCJSZXNwb25zZSIsInN0YXR1cyIsIm5leHQiLCJjb25maWciLCJtYXRjaGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});