"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"14e7959cc075\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIkQ6XFxyZWFsdGltZV9DaGF0YXBwXFxmcm9udGVuZFxcYXBwXFxnbG9iYWxzLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjE0ZTc5NTljYzA3NVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/store/useAuthStore.ts":
/*!***********************************!*\
  !*** ./app/store/useAuthStore.ts ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useAuthStore: () => (/* binding */ useAuthStore)\n/* harmony export */ });\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zustand */ \"(app-pages-browser)/./node_modules/zustand/esm/react.mjs\");\n/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! zustand/middleware */ \"(app-pages-browser)/./node_modules/zustand/esm/middleware.mjs\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n\n\n\n\n\n// Use the BASE_URL to handle different environments (development vs production)\nconst BASE_URL = \"localhost:3001\";\nconst useAuthStore = (0,zustand__WEBPACK_IMPORTED_MODULE_2__.create)()((0,zustand_middleware__WEBPACK_IMPORTED_MODULE_3__.persist)((set, get)=>({\n        hasHydrated: false,\n        authUser: null,\n        isCheckingAuth: true,\n        onlineUsers: [],\n        isUpdatingProfile: false,\n        socket: null,\n        checkAuth: async ()=>{\n            try {\n                const response = await fetch(\"\".concat(BASE_URL, \"/api/user/checkAuth\"), {\n                    method: \"GET\",\n                    credentials: \"include\"\n                });\n                if (response.ok) {\n                    const data = await response.json();\n                    set({\n                        authUser: data.user,\n                        isCheckingAuth: false\n                    });\n                    get().connectSocket();\n                } else {\n                    set({\n                        authUser: null\n                    });\n                }\n            } catch (err) {\n                console.error(\"Error during authentication check:\", err);\n                set({\n                    authUser: null\n                });\n            }\n        },\n        login: async (data)=>{\n            try {\n                const response = await fetch(\"\".concat(BASE_URL, \"/api/user/login\"), {\n                    method: \"POST\",\n                    credentials: \"include\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify(data)\n                });\n                if (response.ok) {\n                    const responseData = await response.json();\n                    set({\n                        authUser: responseData.user\n                    });\n                    react_hot_toast__WEBPACK_IMPORTED_MODULE_1__.toast.success(\"Login successful\");\n                    get().connectSocket(); // Ensure this function is also safe for client-only\n                    console.log(\"auth user in login function is\", get().authUser);\n                } else {\n                    const errorData = await response.json();\n                    throw new Error(errorData.message || \"Invalid credentials\");\n                }\n            } catch (err) {\n                console.error(\"Error during login:\", err.message);\n                throw err;\n            }\n        },\n        logout: async ()=>{\n            try {\n                await fetch(\"\".concat(BASE_URL, \"/api/user/logout\"), {\n                    method: \"POST\",\n                    credentials: \"include\"\n                });\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_1__.toast.success(\"Logout successful\");\n                set({\n                    authUser: null\n                });\n                get().disconnectSocket();\n            } catch (err) {\n                console.error(\"Error during logout:\", err);\n            }\n        },\n        updateProfile: async (profilepic)=>{\n            set({\n                isUpdatingProfile: true\n            });\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].patch(\"\".concat(BASE_URL, \"/api/user/update-profile\"), {\n                    profilepic\n                }, {\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    withCredentials: true\n                });\n                const updatedUser = response.data;\n                console.log(\"Updated user is\", updatedUser);\n                set({\n                    authUser: updatedUser\n                });\n            } catch (err) {\n                console.error(\"Error updating profile:\", err);\n            } finally{\n                set({\n                    isUpdatingProfile: false\n                });\n            }\n        },\n        connectSocket: ()=>{\n            const { authUser, socket } = get();\n            console.log(\"authUser\", authUser);\n            if (!authUser || !authUser._id) {\n                console.log(\"No auth user\");\n                return;\n            }\n            if (authUser && !socket) {\n                const newSocket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_0__.io)(BASE_URL, {\n                    query: {\n                        userId: authUser._id\n                    }\n                });\n                newSocket.connect();\n                set({\n                    socket: newSocket\n                });\n                console.log(\"Socket from connectSocket function is\", socket);\n                newSocket.on(\"getOnlineUsers\", (userIds)=>{\n                    console.log(\"Online users received:\", userIds);\n                    set({\n                        onlineUsers: userIds\n                    });\n                });\n                console.log(\"Socket connected\");\n            }\n        },\n        disconnectSocket: ()=>{\n            const socket = get().socket;\n            if (socket && socket.connected) {\n                socket.disconnect();\n            }\n            set({\n                socket: null\n            });\n        }\n    }), {\n    name: \"auth-storage\",\n    storage: (0,zustand_middleware__WEBPACK_IMPORTED_MODULE_3__.createJSONStorage)(()=>localStorage),\n    partialize: (state)=>({\n            authUser: state.authUser,\n            onlineUsers: state.onlineUsers,\n            isCheckingAuth: state.isCheckingAuth,\n            isUpdatingProfile: state.isUpdatingProfile,\n            // Exclude functions and socket state from persistence\n            ...Object.fromEntries(Object.entries(state).filter((param)=>{\n                let [key] = param;\n                return ![\n                    \"socket\",\n                    \"connectSocket\",\n                    \"disconnectSocket\"\n                ].includes(key);\n            }))\n        })\n}));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9zdG9yZS91c2VBdXRoU3RvcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWlDO0FBQytCO0FBQ2xCO0FBQ3BCO0FBQ2M7QUFFeEMsZ0ZBQWdGO0FBQ2hGLE1BQU1NLFdBQVc7QUFnQlYsTUFBTUMsZUFBZVAsK0NBQU1BLEdBQ2hDQywyREFBT0EsQ0FDTCxDQUFDTyxLQUFLQyxNQUFTO1FBQ2JDLGFBQWE7UUFDYkMsVUFBVTtRQUNWQyxnQkFBZ0I7UUFDaEJDLGFBQWEsRUFBRTtRQUNmQyxtQkFBbUI7UUFDbkJDLFFBQVE7UUFFUkMsV0FBVztZQUNULElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLEdBQVksT0FBVFosVUFBUyx3QkFBc0I7b0JBQzdEYSxRQUFRO29CQUNSQyxhQUFhO2dCQUNmO2dCQUNBLElBQUlILFNBQVNJLEVBQUUsRUFBRTtvQkFDZixNQUFNQyxPQUFPLE1BQU1MLFNBQVNNLElBQUk7b0JBQ2hDZixJQUFJO3dCQUFFRyxVQUFVVyxLQUFLRSxJQUFJO3dCQUFFWixnQkFBZ0I7b0JBQU07b0JBQ2pESCxNQUFNZ0IsYUFBYTtnQkFDckIsT0FBTztvQkFDTGpCLElBQUk7d0JBQUVHLFVBQVU7b0JBQUs7Z0JBQ3ZCO1lBQ0YsRUFBRSxPQUFPZSxLQUFLO2dCQUNaQyxRQUFRQyxLQUFLLENBQUMsc0NBQXNDRjtnQkFDcERsQixJQUFJO29CQUFFRyxVQUFVO2dCQUFLO1lBQ3ZCO1FBQ0Y7UUFFQWtCLE9BQU8sT0FBT1A7WUFFWixJQUFJO2dCQUNBLE1BQU1MLFdBQVcsTUFBTUMsTUFBTSxHQUFZLE9BQVRaLFVBQVMsb0JBQWtCO29CQUN2RGEsUUFBUTtvQkFDUkMsYUFBYTtvQkFDYlUsU0FBUzt3QkFDTCxnQkFBZ0I7b0JBQ3BCO29CQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNYO2dCQUN6QjtnQkFFQSxJQUFJTCxTQUFTSSxFQUFFLEVBQUU7b0JBQ2IsTUFBTWEsZUFBZSxNQUFNakIs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LE1BQU1oRCxjQUFjO1lBQ3BDRSxtQkFBbUI4QyxNQUFNOUMsaUJBQWlCO1lBQzFDLHNEQUFzRDtZQUN0RCxHQUFHK0MsT0FBT0MsV0FBVyxDQUNuQkQsT0FBT0UsT0FBTyxDQUFDSCxPQUFPSSxNQUFNLENBQzFCO29CQUFDLENBQUNDLElBQUk7dUJBQ0osQ0FBQztvQkFDQztvQkFDQTtvQkFDQTtpQkFDRCxDQUFDQyxRQUFRLENBQUNEO2VBRWhCO1FBQ0g7QUFDRixJQUVGIiwic291cmNlcyI6WyJEOlxccmVhbHRpbWVfQ2hhdGFwcFxcZnJvbnRlbmRcXGFwcFxcc3RvcmVcXHVzZUF1dGhTdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGUgfSBmcm9tIFwienVzdGFuZFwiO1xyXG5pbXBvcnQgeyBwZXJzaXN0LCBjcmVhdGVKU09OU3RvcmFnZSB9IGZyb20gXCJ6dXN0YW5kL21pZGRsZXdhcmVcIjtcclxuaW1wb3J0IHsgaW8sIFNvY2tldCB9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XHJcblxyXG4vLyBVc2UgdGhlIEJBU0VfVVJMIHRvIGhhbmRsZSBkaWZmZXJlbnQgZW52aXJvbm1lbnRzIChkZXZlbG9wbWVudCB2cyBwcm9kdWN0aW9uKVxyXG5jb25zdCBCQVNFX1VSTCA9IFwibG9jYWxob3N0OjMwMDFcIjtcclxuXHJcbmludGVyZmFjZSBBdXRoU3RhdGUge1xyXG4gIGF1dGhVc2VyOiBhbnk7XHJcbiAgaXNVcGRhdGluZ1Byb2ZpbGU6IGJvb2xlYW47XHJcbiAgb25saW5lVXNlcnM6IGFueVtdO1xyXG4gIGlzQ2hlY2tpbmdBdXRoOiBib29sZWFuO1xyXG4gIHNvY2tldDogU29ja2V0IHwgbnVsbDtcclxuICBjaGVja0F1dGg6ICgpID0+IFByb21pc2U8dm9pZD47XHJcbiAgbG9naW46IChkYXRhOiB7IGVtYWlsOiBzdHJpbmc7IHBhc3N3b3JkOiBzdHJpbmcgfSkgPT4gUHJvbWlzZTx2b2lkPjtcclxuICBsb2dvdXQ6ICgpID0+IFByb21pc2U8dm9pZD47XHJcbiAgdXBkYXRlUHJvZmlsZTogKGRhdGE6IGFueSkgPT4gUHJvbWlzZTx2b2lkPjtcclxuICBjb25uZWN0U29ja2V0OiAoKSA9PiB2b2lkO1xyXG4gIGRpc2Nvbm5lY3RTb2NrZXQ6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBdXRoU3RvcmUgPSBjcmVhdGU8QXV0aFN0YXRlPigpKFxyXG4gIHBlcnNpc3QoXHJcbiAgICAoc2V0LCBnZXQpID0+ICh7XHJcbiAgICAgIGhhc0h5ZHJhdGVkOiBmYWxzZSxcclxuICAgICAgYXV0aFVzZXI6IG51bGwsXHJcbiAgICAgIGlzQ2hlY2tpbmdBdXRoOiB0cnVlLFxyXG4gICAgICBvbmxpbmVVc2VyczogW10sXHJcbiAgICAgIGlzVXBkYXRpbmdQcm9maWxlOiBmYWxzZSxcclxuICAgICAgc29ja2V0OiBudWxsLFxyXG5cclxuICAgICAgY2hlY2tBdXRoOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QkFTRV9VUkx9L2FwaS91c2VyL2NoZWNrQXV0aGAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICBzZXQoeyBhdXRoVXNlcjogZGF0YS51c2VyLCBpc0NoZWNraW5nQXV0aDogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgIGdldCgpLmNvbm5lY3RTb2NrZXQoKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldCh7IGF1dGhVc2VyOiBudWxsIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGR1cmluZyBhdXRoZW50aWNhdGlvbiBjaGVjazpcIiwgZXJyKTtcclxuICAgICAgICAgIHNldCh7IGF1dGhVc2VyOiBudWxsIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuXHJcbiAgICAgIGxvZ2luOiBhc3luYyAoZGF0YTogeyBlbWFpbDogc3RyaW5nOyBwYXNzd29yZDogc3RyaW5nIH0pID0+IHtcclxuICAgIFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QkFTRV9VUkx9L2FwaS91c2VyL2xvZ2luYCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBzZXQoeyBhdXRoVXNlcjogcmVzcG9uc2VEYXRhLnVzZXIgfSk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdC5zdWNjZXNzKFwiTG9naW4gc3VjY2Vzc2Z1bFwiKTtcclxuICAgICAgICAgICAgICAgIGdldCgpLmNvbm5lY3RTb2NrZXQoKTsgLy8gRW5zdXJlIHRoaXMgZnVuY3Rpb24gaXMgYWxzbyBzYWZlIGZvciBjbGllbnQtb25seVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhdXRoIHVzZXIgaW4gbG9naW4gZnVuY3Rpb24gaXNcIiwgZ2V0KCkuYXV0aFVzZXIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yRGF0YS5tZXNzYWdlIHx8IFwiSW52YWxpZCBjcmVkZW50aWFsc1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkdXJpbmcgbG9naW46XCIsIGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuXHJcbiAgICAgIGxvZ291dDogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBhd2FpdCBmZXRjaChgJHtCQVNFX1VSTH0vYXBpL3VzZXIvbG9nb3V0YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJMb2dvdXQgc3VjY2Vzc2Z1bFwiKTtcclxuICAgICAgICAgIHNldCh7IGF1dGhVc2VyOiBudWxsIH0pO1xyXG4gICAgICAgICAgZ2V0KCkuZGlzY29ubmVjdFNvY2tldCgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGR1cmluZyBsb2dvdXQ6XCIsIGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG5cclxuICAgICAgdXBkYXRlUHJvZmlsZTogYXN5bmMgKHByb2ZpbGVwaWM6IGFueSkgPT4ge1xyXG4gICAgICAgIHNldCh7IGlzVXBkYXRpbmdQcm9maWxlOiB0cnVlIH0pO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBhdGNoKFxyXG4gICAgICAgICAgICBgJHtCQVNFX1VSTH0vYXBpL3VzZXIvdXBkYXRlLXByb2ZpbGVgLFxyXG4gICAgICAgICAgICB7IHByb2ZpbGVwaWMgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgIGNvbnN0IHVwZGF0ZWRVc2VyID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXBkYXRlZCB1c2VyIGlzXCIsIHVwZGF0ZWRVc2VyKTtcclxuICAgICAgICAgIHNldCh7IGF1dGhVc2VyOiB1cGRhdGVkVXNlciB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBwcm9maWxlOlwiLCBlcnIpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICBzZXQoeyBpc1VwZGF0aW5nUHJvZmlsZTogZmFsc2UgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG5cclxuICAgICAgY29ubmVjdFNvY2tldDogKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgYXV0aFVzZXIsIHNvY2tldCB9ID0gZ2V0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhdXRoVXNlclwiLCBhdXRoVXNlcik7XHJcblxyXG4gICAgICAgIGlmICghYXV0aFVzZXIgfHwgIWF1dGhVc2VyLl9pZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJObyBhdXRoIHVzZXJcIik7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYXV0aFVzZXIgJiYgIXNvY2tldCkge1xyXG4gICAgICAgICAgY29uc3QgbmV3U29ja2V0ID0gaW8oQkFTRV9VUkwsIHtcclxuICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICB1c2VySWQ6IGF1dGhVc2VyLl9pZCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgbmV3U29ja2V0LmNvbm5lY3QoKTtcclxuXHJcbiAgICAgICAgICBzZXQoeyBzb2NrZXQ6IG5ld1NvY2tldCB9KTtcclxuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlNvY2tldCBmcm9tIGNvbm5lY3RTb2NrZXQgZnVuY3Rpb24gaXNcIiwgc29ja2V0KTtcclxuICAgICAgICAgIG5ld1NvY2tldC5vbihcImdldE9ubGluZVVzZXJzXCIsICh1c2VySWRzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiT25saW5lIHVzZXJzIHJlY2VpdmVkOlwiLCB1c2VySWRzKTtcclxuICAgICAgICAgICAgc2V0KHsgb25saW5lVXNlcnM6IHVzZXJJZHMgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiU29ja2V0IGNvbm5lY3RlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBkaXNjb25uZWN0U29ja2V0OiAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc29ja2V0ID0gZ2V0KCkuc29ja2V0O1xyXG4gICAgICAgIGlmIChzb2NrZXQgJiYgc29ja2V0LmNvbm5lY3RlZCkge1xyXG4gICAgICAgICAgc29ja2V0LmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0KHsgc29ja2V0OiBudWxsIH0pO1xyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiYXV0aC1zdG9yYWdlXCIsXHJcbiAgICAgIHN0b3JhZ2U6IGNyZWF0ZUpTT05TdG9yYWdlKCgpID0+IGxvY2FsU3RvcmFnZSksXHJcbiAgICAgIHBhcnRpYWxpemU6IChzdGF0ZSkgPT4gKHtcclxuICAgICAgICBhdXRoVXNlcjogc3RhdGUuYXV0aFVzZXIsXHJcbiAgICAgICAgb25saW5lVXNlcnM6IHN0YXRlLm9ubGluZVVzZXJzLFxyXG4gICAgICAgIGlzQ2hlY2tpbmdBdXRoOiBzdGF0ZS5pc0NoZWNraW5nQXV0aCxcclxuICAgICAgICBpc1VwZGF0aW5nUHJvZmlsZTogc3RhdGUuaXNVcGRhdGluZ1Byb2ZpbGUsXHJcbiAgICAgICAgLy8gRXhjbHVkZSBmdW5jdGlvbnMgYW5kIHNvY2tldCBzdGF0ZSBmcm9tIHBlcnNpc3RlbmNlXHJcbiAgICAgICAgLi4uT2JqZWN0LmZyb21FbnRyaWVzKFxyXG4gICAgICAgICAgT2JqZWN0LmVudHJpZXMoc3RhdGUpLmZpbHRlcihcclxuICAgICAgICAgICAgKFtrZXldKSA9PlxyXG4gICAgICAgICAgICAgICFbXHJcbiAgICAgICAgICAgICAgICBcInNvY2tldFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb25uZWN0U29ja2V0XCIsXHJcbiAgICAgICAgICAgICAgICBcImRpc2Nvbm5lY3RTb2NrZXRcIixcclxuICAgICAgICAgICAgICBdLmluY2x1ZGVzKGtleSlcclxuICAgICAgICAgIClcclxuICAgICAgICApLFxyXG4gICAgICB9KSxcclxuICAgIH1cclxuICApXHJcbik7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGUiLCJwZXJzaXN0IiwiY3JlYXRlSlNPTlN0b3JhZ2UiLCJpbyIsImF4aW9zIiwidG9hc3QiLCJCQVNFX1VSTCIsInVzZUF1dGhTdG9yZSIsInNldCIsImdldCIsImhhc0h5ZHJhdGVkIiwiYXV0aFVzZXIiLCJpc0NoZWNraW5nQXV0aCIsIm9ubGluZVVzZXJzIiwiaXNVcGRhdGluZ1Byb2ZpbGUiLCJzb2NrZXQiLCJjaGVja0F1dGgiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiY3JlZGVudGlhbHMiLCJvayIsImRhdGEiLCJqc29uIiwidXNlciIsImNvbm5lY3RTb2NrZXQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJsb2dpbiIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlRGF0YSIsInN1Y2Nlc3MiLCJsb2ciLCJlcnJvckRhdGEiLCJFcnJvciIsIm1lc3NhZ2UiLCJsb2dvdXQiLCJkaXNjb25uZWN0U29ja2V0IiwidXBkYXRlUHJvZmlsZSIsInByb2ZpbGVwaWMiLCJwYXRjaCIsIndpdGhDcmVkZW50aWFscyIsInVwZGF0ZWRVc2VyIiwiX2lkIiwibmV3U29ja2V0IiwicXVlcnkiLCJ1c2VySWQiLCJjb25uZWN0Iiwib24iLCJ1c2VySWRzIiwiY29ubmVjdGVkIiwiZGlzY29ubmVjdCIsIm5hbWUiLCJzdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwicGFydGlhbGl6ZSIsInN0YXRlIiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwiZmlsdGVyIiwia2V5IiwiaW5jbHVkZXMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/store/useAuthStore.ts\n"));

/***/ })

});