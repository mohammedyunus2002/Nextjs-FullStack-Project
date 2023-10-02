"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/users/login/route";
exports.ids = ["app/api/users/login/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Flogin%2Froute&page=%2Fapi%2Fusers%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Flogin%2Froute.ts&appDir=%2FUsers%2Fmohammedyunusshaikh%2FNextjs-FullStack-Project%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmohammedyunusshaikh%2FNextjs-FullStack-Project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Flogin%2Froute&page=%2Fapi%2Fusers%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Flogin%2Froute.ts&appDir=%2FUsers%2Fmohammedyunusshaikh%2FNextjs-FullStack-Project%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmohammedyunusshaikh%2FNextjs-FullStack-Project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/./node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var _Users_mohammedyunusshaikh_Nextjs_FullStack_Project_src_app_api_users_login_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/users/login/route.ts */ \"(rsc)/./src/app/api/users/login/route.ts\");\n\n// @ts-ignore this need to be imported from next/dist to be external\n\n\n// @ts-expect-error - replaced by webpack/turbopack loader\n\nconst AppRouteRouteModule = next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule;\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/api/users/login/route\",\n        pathname: \"/api/users/login\",\n        filename: \"route\",\n        bundlePath: \"app/api/users/login/route\"\n    },\n    resolvedPagePath: \"/Users/mohammedyunusshaikh/Nextjs-FullStack-Project/src/app/api/users/login/route.ts\",\n    nextConfigOutput,\n    userland: _Users_mohammedyunusshaikh_Nextjs_FullStack_Project_src_app_api_users_login_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/users/login/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VycyUyRmxvZ2luJTJGcm91dGUmcGFnZT0lMkZhcGklMkZ1c2VycyUyRmxvZ2luJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGdXNlcnMlMkZsb2dpbiUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRm1vaGFtbWVkeXVudXNzaGFpa2glMkZOZXh0anMtRnVsbFN0YWNrLVByb2plY3QlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGbW9oYW1tZWR5dW51c3NoYWlraCUyRk5leHRqcy1GdWxsU3RhY2stUHJvamVjdCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNoRDtBQUMwRjtBQUMzQjtBQUMvRDtBQUNpSDtBQUNqSCw0QkFBNEIsZ0hBQTBCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ2lKOztBQUVqSiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy10b2RvLWFwcC8/YjVhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJuZXh0L2Rpc3Qvc2VydmVyL25vZGUtcG9seWZpbGwtaGVhZGVyc1wiO1xuLy8gQHRzLWlnbm9yZSB0aGlzIG5lZWQgdG8gYmUgaW1wb3J0ZWQgZnJvbSBuZXh0L2Rpc3QgdG8gYmUgZXh0ZXJuYWxcbmltcG9ydCAqIGFzIG1vZHVsZSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuLy8gQHRzLWV4cGVjdC1lcnJvciAtIHJlcGxhY2VkIGJ5IHdlYnBhY2svdHVyYm9wYWNrIGxvYWRlclxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9tb2hhbW1lZHl1bnVzc2hhaWtoL05leHRqcy1GdWxsU3RhY2stUHJvamVjdC9zcmMvYXBwL2FwaS91c2Vycy9sb2dpbi9yb3V0ZS50c1wiO1xuY29uc3QgQXBwUm91dGVSb3V0ZU1vZHVsZSA9IG1vZHVsZS5BcHBSb3V0ZVJvdXRlTW9kdWxlO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdXNlcnMvbG9naW4vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS91c2Vycy9sb2dpblwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvdXNlcnMvbG9naW4vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvbW9oYW1tZWR5dW51c3NoYWlraC9OZXh0anMtRnVsbFN0YWNrLVByb2plY3Qvc3JjL2FwcC9hcGkvdXNlcnMvbG9naW4vcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvdXNlcnMvbG9naW4vcm91dGVcIjtcbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Flogin%2Froute&page=%2Fapi%2Fusers%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Flogin%2Froute.ts&appDir=%2FUsers%2Fmohammedyunusshaikh%2FNextjs-FullStack-Project%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmohammedyunusshaikh%2FNextjs-FullStack-Project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/users/login/route.ts":
/*!******************************************!*\
  !*** ./src/app/api/users/login/route.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/headers.js\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_headers__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();\nasync function POST(req) {\n    try {\n        const { username, password } = await req.json();\n        const existingUser = await prisma.user.findFirst({\n            where: {\n                username: username // Match based on the username\n            }\n        });\n        if (!existingUser) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"User does not exists\"\n            }, {\n                status: 404\n            });\n        }\n        const hashedPassword = existingUser.password;\n        const passwordMatch = bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().compare(password, hashedPassword);\n        if (!passwordMatch) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Invalid Password\"\n            }, {\n                status: 401\n            });\n        }\n        const tokenData = {\n            id: existingUser.id,\n            username: existingUser.username,\n            email: existingUser.email\n        };\n        //create token\n        const token = await jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().sign(tokenData, process.env.TOKEN_SECRET, {\n            expiresIn: \"1h\"\n        });\n        (0,next_headers__WEBPACK_IMPORTED_MODULE_4__.cookies)().set(\"ID\", existingUser.id);\n        const response = next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            message: \"Login successful\",\n            success: true\n        });\n        response.cookies.set(\"token\", token, {\n            httpOnly: true\n        });\n        return response;\n    } catch (error) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS91c2Vycy9sb2dpbi9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXdEO0FBQ1Y7QUFDaEI7QUFDQztBQUNPO0FBR3RDLE1BQU1LLFNBQVMsSUFBSUosd0RBQVlBO0FBRXhCLGVBQWdCSyxLQUFLQyxHQUFnQjtJQUN4QyxJQUFJO1FBQ0EsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRSxHQUFHLE1BQU1GLElBQUlHLElBQUk7UUFFN0MsTUFBTUMsZUFBZSxNQUFNTixPQUFPTyxJQUFJLENBQUNDLFNBQVMsQ0FBQztZQUM3Q0MsT0FBTztnQkFDUE4sVUFBVUEsU0FBUyw4QkFBOEI7WUFDakQ7UUFDSjtRQUVBLElBQUcsQ0FBQ0csY0FBYztZQUNkLE9BQU9YLGtGQUFZQSxDQUFDVSxJQUFJLENBQUM7Z0JBQUNLLE9BQU87WUFBc0IsR0FBRztnQkFBQ0MsUUFBUTtZQUFHO1FBQzFFO1FBRUEsTUFBTUMsaUJBQWlCTixhQUFhRixRQUFRO1FBRTVDLE1BQU1TLGdCQUFnQmhCLHVEQUFjLENBQUNPLFVBQVVRO1FBRS9DLElBQUcsQ0FBQ0MsZUFBZTtZQUNmLE9BQU9sQixrRkFBWUEsQ0FBQ1UsSUFBSSxDQUFDO2dCQUFDSyxPQUFPO1lBQWtCLEdBQUc7Z0JBQUNDLFFBQVE7WUFBRztRQUN0RTtRQUVBLE1BQU1JLFlBQVk7WUFDZEMsSUFBSVYsYUFBYVUsRUFBRTtZQUNuQmIsVUFBVUcsYUFBYUgsUUFBUTtZQUMvQmMsT0FBT1gsYUFBYVcsS0FBSztRQUM3QjtRQUNBLGNBQWM7UUFDZCxNQUFNQyxRQUFRLE1BQU1wQix3REFBUSxDQUFDaUIsV0FBV0ssUUFBUUMsR0FBRyxDQUFDQyxZQUFZLEVBQUc7WUFBQ0MsV0FBVztRQUFJO1FBRW5GeEIscURBQU9BLEdBQUd5QixHQUFHLENBQUMsTUFBTWxCLGFBQWFVLEVBQUU7UUFHbkMsTUFBTVMsV0FBVzlCLGtGQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFDL0JxQixTQUFTO1lBQ1RDLFNBQVM7UUFDYjtRQUdBRixTQUFTMUIsT0FBTyxDQUFDeUIsR0FBRyxDQUFDLFNBQVNOLE9BQU87WUFDakNVLFVBQVU7UUFDWjtRQUVGLE9BQU9IO0lBQ1gsRUFBRSxPQUFPZixPQUFZO1FBQ2IsT0FBT2Ysa0ZBQVlBLENBQUNVLElBQUksQ0FBQztZQUFDSyxPQUFPQSxNQUFNZ0IsT0FBTztRQUFBLEdBQUc7WUFBQ2YsUUFBUTtRQUFHO0lBQ3JFO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtdG9kby1hcHAvLi9zcmMvYXBwL2FwaS91c2Vycy9sb2dpbi9yb3V0ZS50cz82NmM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JzsgXG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XG5pbXBvcnQgeyBjb29raWVzIH0gZnJvbSAnbmV4dC9oZWFkZXJzJ1xuXG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uICBQT1NUKHJlcTogTmV4dFJlcXVlc3QpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gYXdhaXQgcmVxLmpzb24oKTtcblxuICAgICAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kRmlyc3Qoe1xuICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSAvLyBNYXRjaCBiYXNlZCBvbiB0aGUgdXNlcm5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBpZighZXhpc3RpbmdVc2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe2Vycm9yOiBcIlVzZXIgZG9lcyBub3QgZXhpc3RzXCJ9LCB7c3RhdHVzOiA0MDR9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gZXhpc3RpbmdVc2VyLnBhc3N3b3JkO1xuXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkTWF0Y2ggPSBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgaGFzaGVkUGFzc3dvcmQpO1xuXG4gICAgICAgIGlmKCFwYXNzd29yZE1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe2Vycm9yOiBcIkludmFsaWQgUGFzc3dvcmRcIn0sIHtzdGF0dXM6IDQwMX0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdG9rZW5EYXRhID0ge1xuICAgICAgICAgICAgaWQ6IGV4aXN0aW5nVXNlci5pZCxcbiAgICAgICAgICAgIHVzZXJuYW1lOiBleGlzdGluZ1VzZXIudXNlcm5hbWUsXG4gICAgICAgICAgICBlbWFpbDogZXhpc3RpbmdVc2VyLmVtYWlsXG4gICAgICAgIH1cbiAgICAgICAgLy9jcmVhdGUgdG9rZW5cbiAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBqd3Quc2lnbih0b2tlbkRhdGEsIHByb2Nlc3MuZW52LlRPS0VOX1NFQ1JFVCEsIHtleHBpcmVzSW46IFwiMWhcIn0pXG5cbiAgICAgICAgY29va2llcygpLnNldCgnSUQnLCBleGlzdGluZ1VzZXIuaWQpXG5cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgICAgICAgICAgbWVzc2FnZTogXCJMb2dpbiBzdWNjZXNzZnVsXCIsXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICB9KVxuICAgICAgICBcblxuICAgICAgICByZXNwb25zZS5jb29raWVzLnNldChcInRva2VuXCIsIHRva2VuLCB7XG4gICAgICAgICAgICBodHRwT25seTogdHJ1ZSwgXG4gICAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtlcnJvcjogZXJyb3IubWVzc2FnZX0sIHtzdGF0dXM6IDUwMH0pXG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIlByaXNtYUNsaWVudCIsImJjcnlwdCIsImp3dCIsImNvb2tpZXMiLCJwcmlzbWEiLCJQT1NUIiwicmVxIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImpzb24iLCJleGlzdGluZ1VzZXIiLCJ1c2VyIiwiZmluZEZpcnN0Iiwid2hlcmUiLCJlcnJvciIsInN0YXR1cyIsImhhc2hlZFBhc3N3b3JkIiwicGFzc3dvcmRNYXRjaCIsImNvbXBhcmUiLCJ0b2tlbkRhdGEiLCJpZCIsImVtYWlsIiwidG9rZW4iLCJzaWduIiwicHJvY2VzcyIsImVudiIsIlRPS0VOX1NFQ1JFVCIsImV4cGlyZXNJbiIsInNldCIsInJlc3BvbnNlIiwibWVzc2FnZSIsInN1Y2Nlc3MiLCJodHRwT25seSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/users/login/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/ms","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/jws","vendor-chunks/yallist","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/bcryptjs","vendor-chunks/safe-buffer","vendor-chunks/lru-cache","vendor-chunks/lodash.once","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isinteger","vendor-chunks/lodash.isboolean","vendor-chunks/lodash.includes","vendor-chunks/jwa","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Flogin%2Froute&page=%2Fapi%2Fusers%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Flogin%2Froute.ts&appDir=%2FUsers%2Fmohammedyunusshaikh%2FNextjs-FullStack-Project%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmohammedyunusshaikh%2FNextjs-FullStack-Project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();