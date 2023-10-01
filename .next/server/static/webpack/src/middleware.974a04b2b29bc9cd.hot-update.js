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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/navigation */ \"(middleware)/./node_modules/next/navigation.js\");\n\nfunction middleware(request, response) {\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n    const token = request.cookies.get(\"token\");\n    console.log(\"Token:\", token);\n    if (!token) {}\n}\nconst config = {\n    matcher: \"/todo\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQzBDO0FBSW5DLFNBQVNDLFdBQVdDLE9BQW9CLEVBQUVDLFFBQXNCO0lBQ3JFLE1BQU1DLFNBQVNKLDBEQUFTQTtJQUN4QixNQUFNSyxRQUFRSCxRQUFRSSxPQUFPLENBQUNDLEdBQUcsQ0FBQztJQUVsQ0MsUUFBUUMsR0FBRyxDQUFDLFVBQVVKO0lBRXRCLElBQUksQ0FBQ0EsT0FBTyxDQUVaO0FBQ0Y7QUFFTyxNQUFNSyxTQUFTO0lBQ3BCQyxTQUFTO0FBQ1gsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbWlkZGxld2FyZS50cz9kMTk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJ1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuXG4gXG5leHBvcnQgZnVuY3Rpb24gbWlkZGxld2FyZShyZXF1ZXN0OiBOZXh0UmVxdWVzdCwgcmVzcG9uc2U6IE5leHRSZXNwb25zZSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgdG9rZW4gPSByZXF1ZXN0LmNvb2tpZXMuZ2V0KCd0b2tlbicpO1xuXG4gIGNvbnNvbGUubG9nKCdUb2tlbjonLCB0b2tlbik7XG5cbiAgaWYgKCF0b2tlbikge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgbWF0Y2hlcjogJy90b2RvJywgIFxufSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJtaWRkbGV3YXJlIiwicmVxdWVzdCIsInJlc3BvbnNlIiwicm91dGVyIiwidG9rZW4iLCJjb29raWVzIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImNvbmZpZyIsIm1hdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});