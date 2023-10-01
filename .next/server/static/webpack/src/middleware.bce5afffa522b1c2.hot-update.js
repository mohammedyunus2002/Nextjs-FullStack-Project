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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/navigation */ \"(middleware)/./node_modules/next/navigation.js\");\n\"use client\";\n\nfunction middleware(request) {\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n    const token = request.cookies.get(\"token\");\n    console.log(\"Token:\", token);\n    if (!token) {\n        console.log(\"Redirecting to /login\");\n        router.push(\"/todo\");\n    }\n}\nconst config = {\n    matcher: \"/todo\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFMEM7QUFJbkMsU0FBU0MsV0FBV0MsT0FBb0I7SUFDN0MsTUFBTUMsU0FBU0gsMERBQVNBO0lBQ3hCLE1BQU1JLFFBQVFGLFFBQVFHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO0lBRWxDQyxRQUFRQyxHQUFHLENBQUMsVUFBVUo7SUFFdEIsSUFBSSxDQUFDQSxPQUFPO1FBQ1ZHLFFBQVFDLEdBQUcsQ0FBQztRQUNaTCxPQUFPTSxJQUFJLENBQUM7SUFDZDtBQUNGO0FBRU8sTUFBTUMsU0FBUztJQUNwQkMsU0FBUztBQUNYLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21pZGRsZXdhcmUudHM/ZDE5OSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB0eXBlIHsgTmV4dFJlcXVlc3QgfSBmcm9tICduZXh0L3NlcnZlcidcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5cblxuIFxuZXhwb3J0IGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHRva2VuID0gcmVxdWVzdC5jb29raWVzLmdldCgndG9rZW4nKTtcblxuICBjb25zb2xlLmxvZygnVG9rZW46JywgdG9rZW4pO1xuXG4gIGlmICghdG9rZW4pIHtcbiAgICBjb25zb2xlLmxvZygnUmVkaXJlY3RpbmcgdG8gL2xvZ2luJyk7XG4gICAgcm91dGVyLnB1c2goXCIvdG9kb1wiKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBtYXRjaGVyOiAnL3RvZG8nLCAgXG59Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsIm1pZGRsZXdhcmUiLCJyZXF1ZXN0Iiwicm91dGVyIiwidG9rZW4iLCJjb29raWVzIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsInB1c2giLCJjb25maWciLCJtYXRjaGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});