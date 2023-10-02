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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\nfunction middleware(request) {\n    const token = request.cookies.get(\"token\")?.value || \"\";\n    const path = request.nextUrl.pathname;\n    const isPublicPath = path === \"/login\" || path === \"/signup\" || path === \"/\";\n    if (isPublicPath && token) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/todo\", request.nextUrl));\n    }\n    if (!isPublicPath && !token) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/login\", request.nextUrl));\n    }\n}\nconst config = {\n    matcher: [\n        \"/\",\n        \"/signup\",\n        \"/login\",\n        \"/todo\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdEO0FBRWpELFNBQVNDLFdBQVdDLE9BQW9CO0lBQzdDLE1BQU1DLFFBQVFELFFBQVFFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFVBQVVDLFNBQVM7SUFDckQsTUFBTUMsT0FBT0wsUUFBUU0sT0FBTyxDQUFDQyxRQUFRO0lBQ3JDLE1BQU1DLGVBQWVILFNBQVMsWUFBWUEsU0FBUyxhQUFhQSxTQUFTO0lBRXpFLElBQUlHLGdCQUFnQlAsT0FBTztRQUN6QixPQUFPSCxrRkFBWUEsQ0FBQ1csUUFBUSxDQUFDLElBQUlDLElBQUksU0FBU1YsUUFBUU0sT0FBTztJQUMvRDtJQUVBLElBQUksQ0FBQ0UsZ0JBQWdCLENBQUNQLE9BQU87UUFDM0IsT0FBT0gsa0ZBQVlBLENBQUNXLFFBQVEsQ0FBQyxJQUFJQyxJQUFJLFVBQVVWLFFBQVFNLE9BQU87SUFDaEU7QUFFRjtBQUVPLE1BQU1LLFNBQVM7SUFDcEJDLFNBQVM7UUFBQztRQUFLO1FBQVc7UUFBVTtLQUFRO0FBQzlDLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21pZGRsZXdhcmUudHM/ZDE5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gbWlkZGxld2FyZShyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuICBjb25zdCB0b2tlbiA9IHJlcXVlc3QuY29va2llcy5nZXQoJ3Rva2VuJyk/LnZhbHVlIHx8ICcnO1xuICBjb25zdCBwYXRoID0gcmVxdWVzdC5uZXh0VXJsLnBhdGhuYW1lO1xuICBjb25zdCBpc1B1YmxpY1BhdGggPSBwYXRoID09PSAnL2xvZ2luJyB8fCBwYXRoID09PSAnL3NpZ251cCcgfHwgcGF0aCA9PT0gJy8nO1xuXG4gIGlmIChpc1B1YmxpY1BhdGggJiYgdG9rZW4pIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy90b2RvJywgcmVxdWVzdC5uZXh0VXJsKSk7XG4gIH1cblxuICBpZiAoIWlzUHVibGljUGF0aCAmJiAhdG9rZW4pIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy9sb2dpbicsIHJlcXVlc3QubmV4dFVybCkpO1xuICB9XG5cbn1cblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgbWF0Y2hlcjogWycvJywgJy9zaWdudXAnLCAnL2xvZ2luJywgJy90b2RvJ10sXG59O1xuXG5cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJtaWRkbGV3YXJlIiwicmVxdWVzdCIsInRva2VuIiwiY29va2llcyIsImdldCIsInZhbHVlIiwicGF0aCIsIm5leHRVcmwiLCJwYXRobmFtZSIsImlzUHVibGljUGF0aCIsInJlZGlyZWN0IiwiVVJMIiwiY29uZmlnIiwibWF0Y2hlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});