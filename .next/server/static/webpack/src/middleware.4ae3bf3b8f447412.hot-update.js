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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/navigation */ \"(middleware)/./node_modules/next/navigation.js\");\n\nfunction middleware(request) {\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n    const token = request.cookies.get(\"token\");\n    console.log(\"Token:\", token);\n    if (!token) {\n        console.log(\"Redirecting to /login\");\n        router.push(\"/todo\");\n    }\n}\nconst config = {\n    matcher: \"/todo\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRTBDO0FBSW5DLFNBQVNDLFdBQVdDLE9BQW9CO0lBQzdDLE1BQU1DLFNBQVNILDBEQUFTQTtJQUN4QixNQUFNSSxRQUFRRixRQUFRRyxPQUFPLENBQUNDLEdBQUcsQ0FBQztJQUVsQ0MsUUFBUUMsR0FBRyxDQUFDLFVBQVVKO0lBRXRCLElBQUksQ0FBQ0EsT0FBTztRQUNWRyxRQUFRQyxHQUFHLENBQUM7UUFDWkwsT0FBT00sSUFBSSxDQUFDO0lBQ2Q7QUFDRjtBQUVPLE1BQU1DLFNBQVM7SUFDcEJDLFNBQVM7QUFDWCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9taWRkbGV3YXJlLnRzP2QxOTkiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgdHlwZSB7IE5leHRSZXF1ZXN0IH0gZnJvbSAnbmV4dC9zZXJ2ZXInXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuXG5cbiBcbmV4cG9ydCBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB0b2tlbiA9IHJlcXVlc3QuY29va2llcy5nZXQoJ3Rva2VuJyk7XG5cbiAgY29uc29sZS5sb2coJ1Rva2VuOicsIHRva2VuKTtcblxuICBpZiAoIXRva2VuKSB7XG4gICAgY29uc29sZS5sb2coJ1JlZGlyZWN0aW5nIHRvIC9sb2dpbicpO1xuICAgIHJvdXRlci5wdXNoKFwiL3RvZG9cIik7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgbWF0Y2hlcjogJy90b2RvJywgIFxufSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJtaWRkbGV3YXJlIiwicmVxdWVzdCIsInJvdXRlciIsInRva2VuIiwiY29va2llcyIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiY29uZmlnIiwibWF0Y2hlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});