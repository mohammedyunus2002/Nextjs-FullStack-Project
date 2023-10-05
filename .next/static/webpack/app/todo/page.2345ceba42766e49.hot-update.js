"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/todo/page",{

/***/ "(app-pages-browser)/./src/app/todo/page.tsx":
/*!*******************************!*\
  !*** ./src/app/todo/page.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ todo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction todo() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const addTitle = (e)=>setTitle(e.target.value);\n    const addDescription = (e)=>setDescription(e.target.value);\n    const addTodo = async ()=>{\n        try {\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/users/todos\", {\n                title,\n                content: description\n            });\n            data.title = title;\n            data.content = description;\n            setTodos(Array.isArray(todos) ? [\n                ...todos,\n                data\n            ] : [\n                data\n            ]);\n            setTitle(\"\");\n            setDescription(\"\");\n        } catch (error) {\n            console.log(error.message);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const getTodos = async ()=>{\n            try {\n                const { data } = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/users/todos\");\n                setTodos(data); // Update todos with the fetched data\n            } catch (error) {\n                console.log(\"Error fetching todos:\", error);\n            }\n        };\n        getTodos(); // Call the function to fetch initial todos\n        setLoading(false);\n    }, []);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/mohammedyunusshaikh/Nextjs-FullStack-Project/src/app/todo/page.tsx\",\n        lineNumber: 57,\n        columnNumber: 25\n    }, this);\n    const logout = async ()=>{\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/users/logout\");\n            router.push(\"/login\");\n        } catch (error) {\n            console.log(error.message);\n        }\n    };\n    console.log(todos);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center my-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"mb-5 text-3xl\",\n                children: \"Todo App\"\n            }, void 0, false, {\n                fileName: \"/Users/mohammedyunusshaikh/Nextjs-FullStack-Project/src/app/todo/page.tsx\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"absolute top-2 right-2 px-4 py-2 text-sm font-bold text-white bg-purple-500 rounded\",\n                onClick: logout,\n                children: \"Logout\"\n            }, void 0, false, {\n                fileName: \"/Users/mohammedyunusshaikh/Nextjs-FullStack-Project/src/app/todo/page.tsx\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-72 flex flex-col items-center justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative h-11 w-full min-w-[200px] mb-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50\",\n                                placeholder: \" \",\n                                name: \"title\",\n                                value: title,\n                                onChange: addTitle\n                            }, void 0, false, {\n                                fileName: \"/Users/mohammedyunusshaikh/Nextjs-FullStack-Project/src/app/todo/page.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500\",\n                                children: \"Title\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mohammedyunusshaikh/Nextjs-FullStack-Project/src/app/todo/page.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mohammedyunusshaikh/Nextjs-FullStack-Project/src/app/todo/page.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative h-11 w-full min-w-[200px] mb-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50\",\n                                placeholder: \" \",\n                                name: \"description\",\n                                value: description,\n                                onChange: addDescription\n                            }, void 0, false, {\n                                fileName: \"/Users/mohammedyunusshaikh/Nextjs-FullStack-Project/src/app/todo/page.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500\",\n                                children: \"Description\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mohammedyunusshaikh/Nextjs-FullStack-Project/src/app/todo/page.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mohammedyunusshaikh/Nextjs-FullStack-Project/src/app/todo/page.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none\",\n                        \"data-ripple-light\": \"true\",\n                        onClick: addTodo,\n                        children: \"Add Todo\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mohammedyunusshaikh/Nextjs-FullStack-Project/src/app/todo/page.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 17\n                    }, this),\n                    Array.isArray(todos) && todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TodoItem, {\n                            todo: todo\n                        }, todo.id, false, {\n                            fileName: \"/Users/mohammedyunusshaikh/Nextjs-FullStack-Project/src/app/todo/page.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 19\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mohammedyunusshaikh/Nextjs-FullStack-Project/src/app/todo/page.tsx\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mohammedyunusshaikh/Nextjs-FullStack-Project/src/app/todo/page.tsx\",\n        lineNumber: 72,\n        columnNumber: 9\n    }, this);\n}\n_s(todo, \"cepeUqjPqcRzqLHWrsFd6YwxZCE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\nconst TodoItem = (param)=>{\n    let { todo } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"todo\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: todo.title\n            }, void 0, false, {\n                fileName: \"/Users/mohammedyunusshaikh/Nextjs-FullStack-Project/src/app/todo/page.tsx\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, undefined),\n            todo.content ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: todo.content\n            }, void 0, false, {\n                fileName: \"/Users/mohammedyunusshaikh/Nextjs-FullStack-Project/src/app/todo/page.tsx\",\n                lineNumber: 127,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"No description provided.\"\n            }, void 0, false, {\n                fileName: \"/Users/mohammedyunusshaikh/Nextjs-FullStack-Project/src/app/todo/page.tsx\",\n                lineNumber: 129,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mohammedyunusshaikh/Nextjs-FullStack-Project/src/app/todo/page.tsx\",\n        lineNumber: 124,\n        columnNumber: 5\n    }, undefined);\n};\n_c = TodoItem;\nvar _c;\n$RefreshReg$(_c, \"TodoItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdG9kby9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFeUI7QUFDa0I7QUFDaUI7QUFVN0MsU0FBU0k7O0lBQ3BCLE1BQU1DLFNBQVNKLDBEQUFTQTtJQUN4QixNQUFNLENBQUNLLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDSyxhQUFhQyxlQUFlLEdBQUdOLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ08sT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBUyxFQUFFO0lBQzdDLE1BQU0sQ0FBQ1MsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBQztJQUd2QyxNQUFNVyxXQUFXLENBQUNDLElBQXVEUixTQUFTUSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDaEcsTUFBTUMsaUJBQWlCLENBQUNILElBQXVETixlQUFlTSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFFNUcsTUFBTUUsVUFBVTtRQUNkLElBQUk7WUFDRixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHLE1BQU1wQiw2Q0FBS0EsQ0FBQ3FCLElBQUksQ0FBQyxvQkFBb0I7Z0JBQ3BEZjtnQkFDQWdCLFNBQVNkO1lBQ1g7WUFDQVksS0FBS2QsS0FBSyxHQUFHQTtZQUNiYyxLQUFLRSxPQUFPLEdBQUdkO1lBQ2ZHLFNBQVNZLE1BQU1DLE9BQU8sQ0FBQ2QsU0FBUzttQkFBSUE7Z0JBQU9VO2FBQUssR0FBRztnQkFBQ0E7YUFBSztZQUN6RGIsU0FBUztZQUNURSxlQUFlO1FBQ2pCLEVBQUUsT0FBT2dCLE9BQVk7WUFDbkJDLFFBQVFDLEdBQUcsQ0FBQ0YsTUFBTUcsT0FBTztRQUMzQjtJQUNGO0lBR0ExQixnREFBU0EsQ0FBQztRQUNSLE1BQU0yQixXQUFXO1lBQ2YsSUFBSTtnQkFDRixNQUFNLEVBQUVULElBQUksRUFBRSxHQUFHLE1BQU1wQiw2Q0FBS0EsQ0FBQzhCLEdBQUcsQ0FBQztnQkFDakNuQixTQUFTUyxPQUFRLHFDQUFxQztZQUN4RCxFQUFFLE9BQU9LLE9BQU87Z0JBQ2RDLFFBQVFDLEdBQUcsQ0FBQyx5QkFBeUJGO1lBQ3ZDO1FBQ0Y7UUFFQUksWUFBYSwyQ0FBMkM7UUFDeERoQixXQUFXO0lBQ2IsR0FBRyxFQUFFO0lBRUwsSUFBSUQsU0FBUyxxQkFBTyw4REFBQ21CO2tCQUFFOzs7Ozs7SUFHdkIsTUFBTUMsU0FBUztRQUNYLElBQUk7WUFDQSxNQUFNaEMsNkNBQUtBLENBQUM4QixHQUFHLENBQUM7WUFDaEJ6QixPQUFPNEIsSUFBSSxDQUFDO1FBQ2hCLEVBQUUsT0FBT1IsT0FBVztZQUNoQkMsUUFBUUMsR0FBRyxDQUFDRixNQUFNRyxPQUFPO1FBQzdCO0lBQ0o7SUFFQUYsUUFBUUMsR0FBRyxDQUFDakI7SUFFWixxQkFDSSw4REFBQ3dCO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBZ0I7Ozs7OzswQkFDOUIsOERBQUNFO2dCQUNERixXQUFVO2dCQUNWRyxTQUFTTjswQkFDUjs7Ozs7OzBCQUdELDhEQUFDRTtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0k7Z0NBQ0RKLFdBQVU7Z0NBQ1ZLLGFBQVk7Z0NBQ1pDLE1BQUs7Z0NBQ0x4QixPQUFPWDtnQ0FDUG9DLFVBQVU1Qjs7Ozs7OzBDQUVWLDhEQUFDNkI7Z0NBQU1SLFdBQVU7MENBQXV1Qzs7Ozs7Ozs7Ozs7O2tDQUk1dkMsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0k7Z0NBQ0RKLFdBQVU7Z0NBQ1ZLLGFBQVk7Z0NBQ1pDLE1BQUs7Z0NBQ0x4QixPQUFPVDtnQ0FDUGtDLFVBQVV4Qjs7Ozs7OzBDQUVWLDhEQUFDeUI7Z0NBQU1SLFdBQVU7MENBQXV1Qzs7Ozs7Ozs7Ozs7O2tDQUk1dkMsOERBQUNFO3dCQUNERixXQUFVO3dCQUNWUyxxQkFBa0I7d0JBQ2xCTixTQUFTbkI7a0NBQ1I7Ozs7OztvQkFJQUksTUFBTUMsT0FBTyxDQUFDZCxVQUNmQSxNQUFNbUMsR0FBRyxDQUFDekMsQ0FBQUEscUJBQ1IsOERBQUMwQzs0QkFBdUIxQyxNQUFNQTsyQkFBZkEsS0FBSzJDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3hDO0dBekd3QjNDOztRQUNMSCxzREFBU0E7OztBQTBHNUIsTUFBTTZDLFdBQVc7UUFBQyxFQUFFMUMsSUFBSSxFQUFrQjtJQUN4QyxxQkFDRSw4REFBQzhCO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDSjswQkFBRzNCLEtBQUtFLEtBQUs7Ozs7OztZQUNiRixLQUFLa0IsT0FBTyxpQkFDWCw4REFBQ1M7MEJBQUczQixLQUFLa0IsT0FBTzs7Ozs7MENBRWhCLDhEQUFDUzswQkFBRTs7Ozs7Ozs7Ozs7O0FBSVg7S0FYTWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC90b2RvL3BhZ2UudHN4PzdkZTciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCJcbmltcG9ydCB7IFNldFN0YXRlQWN0aW9uLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbnR5cGUgVG9kbyA9IHtcbiAgaWQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZzsgXG4gIGNvbnRlbnQ/OiBzdHJpbmc7ICBcbiAgY3JlYXRlZEF0OiBzdHJpbmc7XG4gIHVzZXJJZDogc3RyaW5nOyBcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kbygpIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoXCJcIik7ICBcbiAgICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlPFRvZG9bXT4oW10pO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG5cbiAgICBjb25zdCBhZGRUaXRsZSA9IChlOiB7IHRhcmdldDogeyB2YWx1ZTogU2V0U3RhdGVBY3Rpb248c3RyaW5nPjsgfTsgfSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpO1xuICAgIGNvbnN0IGFkZERlc2NyaXB0aW9uID0gKGU6IHsgdGFyZ2V0OiB7IHZhbHVlOiBTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+OyB9OyB9KSA9PiBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSk7XG5cbiAgICBjb25zdCBhZGRUb2RvID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KFwiL2FwaS91c2Vycy90b2Rvc1wiLCB7XG4gICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgY29udGVudDogZGVzY3JpcHRpb24sXG4gICAgICAgIH0pO1xuICAgICAgICBkYXRhLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIGRhdGEuY29udGVudCA9IGRlc2NyaXB0aW9uO1xuICAgICAgICBzZXRUb2RvcyhBcnJheS5pc0FycmF5KHRvZG9zKSA/IFsuLi50b2RvcywgZGF0YV0gOiBbZGF0YV0pOyAgICAgICAgXG4gICAgICAgIHNldFRpdGxlKFwiXCIpOyAgXG4gICAgICAgIHNldERlc2NyaXB0aW9uKFwiXCIpOyAgIFxuICAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTsgICAgXG4gICAgICB9IFxuICAgIH07XG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBjb25zdCBnZXRUb2RvcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvdXNlcnMvdG9kb3NcIik7XG4gICAgICAgICAgc2V0VG9kb3MoZGF0YSk7ICAvLyBVcGRhdGUgdG9kb3Mgd2l0aCB0aGUgZmV0Y2hlZCBkYXRhXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBmZXRjaGluZyB0b2RvczpcIiwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9O1xuICBcbiAgICAgIGdldFRvZG9zKCk7ICAvLyBDYWxsIHRoZSBmdW5jdGlvbiB0byBmZXRjaCBpbml0aWFsIHRvZG9zXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9LCBbXSk7XG5cbiAgICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuXG5cbiAgICBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBheGlvcy5nZXQoJy9hcGkvdXNlcnMvbG9nb3V0JylcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKVxuICAgICAgICB9IGNhdGNoIChlcnJvcjphbnkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNvbnNvbGUubG9nKHRvZG9zKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBteS0xMFwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTUgdGV4dC0zeGxcIj5Ub2RvIEFwcDwvaDE+XG4gICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTIgcmlnaHQtMiBweC00IHB5LTIgdGV4dC1zbSBmb250LWJvbGQgdGV4dC13aGl0ZSBiZy1wdXJwbGUtNTAwIHJvdW5kZWRcIlxuICAgICAgICAgICAgb25DbGljaz17bG9nb3V0fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy03MiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC0xMSB3LWZ1bGwgbWluLXctWzIwMHB4XSBtYi01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwZWVyIGgtZnVsbCB3LWZ1bGwgcm91bmRlZC1bN3B4XSBib3JkZXIgYm9yZGVyLWJsdWUtZ3JheS0yMDAgYm9yZGVyLXQtdHJhbnNwYXJlbnQgYmctdHJhbnNwYXJlbnQgcHgtMyBweS0yLjUgZm9udC1zYW5zIHRleHQtc20gZm9udC1ub3JtYWwgdGV4dC1ibHVlLWdyYXktNzAwIG91dGxpbmUgb3V0bGluZS0wIHRyYW5zaXRpb24tYWxsIHBsYWNlaG9sZGVyLXNob3duOmJvcmRlciBwbGFjZWhvbGRlci1zaG93bjpib3JkZXItYmx1ZS1ncmF5LTIwMCBwbGFjZWhvbGRlci1zaG93bjpib3JkZXItdC1ibHVlLWdyYXktMjAwIGZvY3VzOmJvcmRlci0yIGZvY3VzOmJvcmRlci1waW5rLTUwMCBmb2N1czpib3JkZXItdC10cmFuc3BhcmVudCBmb2N1czpvdXRsaW5lLTAgZGlzYWJsZWQ6Ym9yZGVyLTAgZGlzYWJsZWQ6YmctYmx1ZS1ncmF5LTUwXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIgXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17YWRkVGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJiZWZvcmU6Y29udGVudFsnICddIGFmdGVyOmNvbnRlbnRbJyAnXSBwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIGxlZnQtMCAtdG9wLTEuNSBmbGV4IGgtZnVsbCB3LWZ1bGwgc2VsZWN0LW5vbmUgdGV4dC1bMTFweF0gZm9udC1ub3JtYWwgbGVhZGluZy10aWdodCB0ZXh0LWJsdWUtZ3JheS00MDAgdHJhbnNpdGlvbi1hbGwgYmVmb3JlOnBvaW50ZXItZXZlbnRzLW5vbmUgYmVmb3JlOm10LVs2LjVweF0gYmVmb3JlOm1yLTEgYmVmb3JlOmJveC1ib3JkZXIgYmVmb3JlOmJsb2NrIGJlZm9yZTpoLTEuNSBiZWZvcmU6dy0yLjUgYmVmb3JlOnJvdW5kZWQtdGwtbWQgYmVmb3JlOmJvcmRlci10IGJlZm9yZTpib3JkZXItbCBiZWZvcmU6Ym9yZGVyLWJsdWUtZ3JheS0yMDAgYmVmb3JlOnRyYW5zaXRpb24tYWxsIGFmdGVyOnBvaW50ZXItZXZlbnRzLW5vbmUgYWZ0ZXI6bXQtWzYuNXB4XSBhZnRlcjptbC0xIGFmdGVyOmJveC1ib3JkZXIgYWZ0ZXI6YmxvY2sgYWZ0ZXI6aC0xLjUgYWZ0ZXI6dy0yLjUgYWZ0ZXI6ZmxleC1ncm93IGFmdGVyOnJvdW5kZWQtdHItbWQgYWZ0ZXI6Ym9yZGVyLXQgYWZ0ZXI6Ym9yZGVyLXIgYWZ0ZXI6Ym9yZGVyLWJsdWUtZ3JheS0yMDAgYWZ0ZXI6dHJhbnNpdGlvbi1hbGwgcGVlci1wbGFjZWhvbGRlci1zaG93bjp0ZXh0LXNtIHBlZXItcGxhY2Vob2xkZXItc2hvd246bGVhZGluZy1bMy43NV0gcGVlci1wbGFjZWhvbGRlci1zaG93bjp0ZXh0LWJsdWUtZ3JheS01MDAgcGVlci1wbGFjZWhvbGRlci1zaG93bjpiZWZvcmU6Ym9yZGVyLXRyYW5zcGFyZW50IHBlZXItcGxhY2Vob2xkZXItc2hvd246YWZ0ZXI6Ym9yZGVyLXRyYW5zcGFyZW50IHBlZXItZm9jdXM6dGV4dC1bMTFweF0gcGVlci1mb2N1czpsZWFkaW5nLXRpZ2h0IHBlZXItZm9jdXM6dGV4dC1waW5rLTUwMCBwZWVyLWZvY3VzOmJlZm9yZTpib3JkZXItdC0yIHBlZXItZm9jdXM6YmVmb3JlOmJvcmRlci1sLTIgcGVlci1mb2N1czpiZWZvcmU6Ym9yZGVyLXBpbmstNTAwIHBlZXItZm9jdXM6YWZ0ZXI6Ym9yZGVyLXQtMiBwZWVyLWZvY3VzOmFmdGVyOmJvcmRlci1yLTIgcGVlci1mb2N1czphZnRlcjpib3JkZXItcGluay01MDAgcGVlci1kaXNhYmxlZDp0ZXh0LXRyYW5zcGFyZW50IHBlZXItZGlzYWJsZWQ6YmVmb3JlOmJvcmRlci10cmFuc3BhcmVudCBwZWVyLWRpc2FibGVkOmFmdGVyOmJvcmRlci10cmFuc3BhcmVudCBwZWVyLWRpc2FibGVkOnBlZXItcGxhY2Vob2xkZXItc2hvd246dGV4dC1ibHVlLWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIFRpdGxlXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTExIHctZnVsbCBtaW4tdy1bMjAwcHhdIG1iLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBlZXIgaC1mdWxsIHctZnVsbCByb3VuZGVkLVs3cHhdIGJvcmRlciBib3JkZXItYmx1ZS1ncmF5LTIwMCBib3JkZXItdC10cmFuc3BhcmVudCBiZy10cmFuc3BhcmVudCBweC0zIHB5LTIuNSBmb250LXNhbnMgdGV4dC1zbSBmb250LW5vcm1hbCB0ZXh0LWJsdWUtZ3JheS03MDAgb3V0bGluZSBvdXRsaW5lLTAgdHJhbnNpdGlvbi1hbGwgcGxhY2Vob2xkZXItc2hvd246Ym9yZGVyIHBsYWNlaG9sZGVyLXNob3duOmJvcmRlci1ibHVlLWdyYXktMjAwIHBsYWNlaG9sZGVyLXNob3duOmJvcmRlci10LWJsdWUtZ3JheS0yMDAgZm9jdXM6Ym9yZGVyLTIgZm9jdXM6Ym9yZGVyLXBpbmstNTAwIGZvY3VzOmJvcmRlci10LXRyYW5zcGFyZW50IGZvY3VzOm91dGxpbmUtMCBkaXNhYmxlZDpib3JkZXItMCBkaXNhYmxlZDpiZy1ibHVlLWdyYXktNTBcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiBcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXthZGREZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJlZm9yZTpjb250ZW50WycgJ10gYWZ0ZXI6Y29udGVudFsnICddIHBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgbGVmdC0wIC10b3AtMS41IGZsZXggaC1mdWxsIHctZnVsbCBzZWxlY3Qtbm9uZSB0ZXh0LVsxMXB4XSBmb250LW5vcm1hbCBsZWFkaW5nLXRpZ2h0IHRleHQtYmx1ZS1ncmF5LTQwMCB0cmFuc2l0aW9uLWFsbCBiZWZvcmU6cG9pbnRlci1ldmVudHMtbm9uZSBiZWZvcmU6bXQtWzYuNXB4XSBiZWZvcmU6bXItMSBiZWZvcmU6Ym94LWJvcmRlciBiZWZvcmU6YmxvY2sgYmVmb3JlOmgtMS41IGJlZm9yZTp3LTIuNSBiZWZvcmU6cm91bmRlZC10bC1tZCBiZWZvcmU6Ym9yZGVyLXQgYmVmb3JlOmJvcmRlci1sIGJlZm9yZTpib3JkZXItYmx1ZS1ncmF5LTIwMCBiZWZvcmU6dHJhbnNpdGlvbi1hbGwgYWZ0ZXI6cG9pbnRlci1ldmVudHMtbm9uZSBhZnRlcjptdC1bNi41cHhdIGFmdGVyOm1sLTEgYWZ0ZXI6Ym94LWJvcmRlciBhZnRlcjpibG9jayBhZnRlcjpoLTEuNSBhZnRlcjp3LTIuNSBhZnRlcjpmbGV4LWdyb3cgYWZ0ZXI6cm91bmRlZC10ci1tZCBhZnRlcjpib3JkZXItdCBhZnRlcjpib3JkZXItciBhZnRlcjpib3JkZXItYmx1ZS1ncmF5LTIwMCBhZnRlcjp0cmFuc2l0aW9uLWFsbCBwZWVyLXBsYWNlaG9sZGVyLXNob3duOnRleHQtc20gcGVlci1wbGFjZWhvbGRlci1zaG93bjpsZWFkaW5nLVszLjc1XSBwZWVyLXBsYWNlaG9sZGVyLXNob3duOnRleHQtYmx1ZS1ncmF5LTUwMCBwZWVyLXBsYWNlaG9sZGVyLXNob3duOmJlZm9yZTpib3JkZXItdHJhbnNwYXJlbnQgcGVlci1wbGFjZWhvbGRlci1zaG93bjphZnRlcjpib3JkZXItdHJhbnNwYXJlbnQgcGVlci1mb2N1czp0ZXh0LVsxMXB4XSBwZWVyLWZvY3VzOmxlYWRpbmctdGlnaHQgcGVlci1mb2N1czp0ZXh0LXBpbmstNTAwIHBlZXItZm9jdXM6YmVmb3JlOmJvcmRlci10LTIgcGVlci1mb2N1czpiZWZvcmU6Ym9yZGVyLWwtMiBwZWVyLWZvY3VzOmJlZm9yZTpib3JkZXItcGluay01MDAgcGVlci1mb2N1czphZnRlcjpib3JkZXItdC0yIHBlZXItZm9jdXM6YWZ0ZXI6Ym9yZGVyLXItMiBwZWVyLWZvY3VzOmFmdGVyOmJvcmRlci1waW5rLTUwMCBwZWVyLWRpc2FibGVkOnRleHQtdHJhbnNwYXJlbnQgcGVlci1kaXNhYmxlZDpiZWZvcmU6Ym9yZGVyLXRyYW5zcGFyZW50IHBlZXItZGlzYWJsZWQ6YWZ0ZXI6Ym9yZGVyLXRyYW5zcGFyZW50IHBlZXItZGlzYWJsZWQ6cGVlci1wbGFjZWhvbGRlci1zaG93bjp0ZXh0LWJsdWUtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWlkZGxlIG5vbmUgY2VudGVyIHJvdW5kZWQtbGcgYmctcGluay01MDAgcHktMyBweC02IGZvbnQtc2FucyB0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC13aGl0ZSBzaGFkb3ctbWQgc2hhZG93LXBpbmstNTAwLzIwIHRyYW5zaXRpb24tYWxsIGhvdmVyOnNoYWRvdy1sZyBob3ZlcjpzaGFkb3ctcGluay01MDAvNDAgZm9jdXM6b3BhY2l0eS1bMC44NV0gZm9jdXM6c2hhZG93LW5vbmUgYWN0aXZlOm9wYWNpdHktWzAuODVdIGFjdGl2ZTpzaGFkb3ctbm9uZSBkaXNhYmxlZDpwb2ludGVyLWV2ZW50cy1ub25lIGRpc2FibGVkOm9wYWNpdHktNTAgZGlzYWJsZWQ6c2hhZG93LW5vbmVcIlxuICAgICAgICAgICAgICAgIGRhdGEtcmlwcGxlLWxpZ2h0PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17YWRkVG9kb31cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQWRkIFRvZG9cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIHtBcnJheS5pc0FycmF5KHRvZG9zKSAmJiAgXG4gICAgICAgICAgICAgICAgdG9kb3MubWFwKHRvZG8gPT4gKCAgICBcbiAgICAgICAgICAgICAgICAgIDxUb2RvSXRlbSBrZXk9e3RvZG8uaWR9IHRvZG89e3RvZG99IC8+ICAgIFxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY29uc3QgVG9kb0l0ZW0gPSAoeyB0b2RvIH06IHsgdG9kbzogVG9kbyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0b2RvXCI+ICAgIFxuICAgICAgPHA+e3RvZG8udGl0bGV9PC9wPiAgICAgICAgXG4gICAgICB7dG9kby5jb250ZW50ID8gKFxuICAgICAgICA8cD57dG9kby5jb250ZW50fTwvcD5cbiAgICAgICkgOiAoXG4gICAgICAgIDxwPk5vIGRlc2NyaXB0aW9uIHByb3ZpZGVkLjwvcD4gICAgICBcbiAgICAgICl9XG4gICAgPC9kaXY+ICAgIFxuICApXG59Il0sIm5hbWVzIjpbImF4aW9zIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ0b2RvIiwicm91dGVyIiwidGl0bGUiLCJzZXRUaXRsZSIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJ0b2RvcyIsInNldFRvZG9zIiwibG9hZGluZyIsInNldExvYWRpbmciLCJhZGRUaXRsZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImFkZERlc2NyaXB0aW9uIiwiYWRkVG9kbyIsImRhdGEiLCJwb3N0IiwiY29udGVudCIsIkFycmF5IiwiaXNBcnJheSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJnZXRUb2RvcyIsImdldCIsInAiLCJsb2dvdXQiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm5hbWUiLCJvbkNoYW5nZSIsImxhYmVsIiwiZGF0YS1yaXBwbGUtbGlnaHQiLCJtYXAiLCJUb2RvSXRlbSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/todo/page.tsx\n"));

/***/ })

});