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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"110fcd56368e\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIkQ6XFxyZWFsdGltZV9DaGF0YXBwXFxmcm9udGVuZFxcYXBwXFxnbG9iYWxzLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjExMGZjZDU2MzY4ZVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/store/useAuthStore.ts":
/*!***********************************!*\
  !*** ./app/store/useAuthStore.ts ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useAuthStore: () => (/* binding */ useAuthStore)\n/* harmony export */ });\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zustand */ \"(app-pages-browser)/./node_modules/zustand/esm/react.mjs\");\n/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! zustand/middleware */ \"(app-pages-browser)/./node_modules/zustand/esm/middleware.mjs\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\n\n\n\n\n\n// Use the BASE_URL to handle different environments (development vs production)\nconst BASE_URL = process.env.MODE === \"development\" ? \"http://localhost:3001\" : \"https://real-time-chat-app-hu1a.onrender.com\";\nconst useAuthStore = (0,zustand__WEBPACK_IMPORTED_MODULE_2__.create)()((0,zustand_middleware__WEBPACK_IMPORTED_MODULE_3__.persist)((set, get)=>({\n        hasHydrated: false,\n        authUser: null,\n        isCheckingAuth: true,\n        onlineUsers: [],\n        isUpdatingProfile: false,\n        socket: null,\n        checkAuth: async ()=>{\n            try {\n                const response = await fetch(\"\".concat(BASE_URL, \"/api/user/checkAuth\"), {\n                    method: \"GET\",\n                    credentials: \"include\"\n                });\n                if (response.ok) {\n                    const data = await response.json();\n                    set({\n                        authUser: data.user,\n                        isCheckingAuth: false\n                    });\n                    get().connectSocket();\n                } else {\n                    set({\n                        authUser: null\n                    });\n                }\n            } catch (err) {\n                console.error(\"Error during authentication check:\", err);\n                set({\n                    authUser: null\n                });\n            }\n        },\n        login: async (data)=>{\n            try {\n                const response = await fetch(\"\".concat(BASE_URL, \"/api/user/login\"), {\n                    method: \"POST\",\n                    credentials: \"include\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify(data)\n                });\n                if (response.ok) {\n                    const responseData = await response.json();\n                    set({\n                        authUser: responseData.user\n                    });\n                    react_hot_toast__WEBPACK_IMPORTED_MODULE_1__.toast.success(\"Login successful\");\n                    get().connectSocket(); // Ensure this function is also safe for client-only\n                    console.log(\"auth user in login function is\", get().authUser);\n                } else {\n                    const errorData = await response.json();\n                    throw new Error(errorData.message || \"Invalid credentials\");\n                }\n            } catch (err) {\n                console.error(\"Error during login:\", err.message);\n                throw err;\n            }\n        },\n        logout: async ()=>{\n            try {\n                await fetch(\"\".concat(BASE_URL, \"/api/user/logout\"), {\n                    method: \"POST\",\n                    credentials: \"include\"\n                });\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_1__.toast.success(\"Logout successful\");\n                set({\n                    authUser: null\n                });\n                get().disconnectSocket();\n            } catch (err) {\n                console.error(\"Error during logout:\", err);\n            }\n        },\n        updateProfile: async (profilepic)=>{\n            set({\n                isUpdatingProfile: true\n            });\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].patch(\"\".concat(BASE_URL, \"/api/user/update-profile\"), {\n                    profilepic\n                }, {\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    withCredentials: true\n                });\n                const updatedUser = response.data;\n                console.log(\"Updated user is\", updatedUser);\n                set({\n                    authUser: updatedUser\n                });\n            } catch (err) {\n                console.error(\"Error updating profile:\", err);\n            } finally{\n                set({\n                    isUpdatingProfile: false\n                });\n            }\n        },\n        connectSocket: ()=>{\n            const { authUser } = get();\n            console.log(\"authUse after login r\", authUser);\n            if (!authUser || !authUser.id) {\n                console.log(\"No auth user\");\n                return;\n            }\n            if (authUser) {\n                const newSocket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_0__.io)(BASE_URL, {\n                    query: {\n                        userId: authUser.id\n                    }\n                });\n                newSocket.connect();\n                set({\n                    socket: newSocket\n                });\n                console.log(\"Socket from connectSocket function is\", newSocket);\n                newSocket.on(\"getOnlineUsers\", (userIds)=>{\n                    console.log(\"Online users received:\", userIds);\n                    set({\n                        onlineUsers: userIds\n                    });\n                });\n                console.log(\"Socket connected\");\n            }\n        },\n        disconnectSocket: ()=>{\n            const socket = get().socket;\n            try {\n                if (socket) {\n                    console.log(\"Socket before disconnecting:\", socket);\n                    if (socket.connected === true) {\n                        socket.off(\"newMessage\");\n                        socket.off(\"getOnlineUsers\");\n                        // Add other events you are listening to here...\n                        socket.disconnect();\n                        console.log(\"Socket disconnected successfully\");\n                    } else {\n                        console.log(\"Socket is already disconnected\");\n                    }\n                } else {\n                    // No need to log an error, simply ignore the situation\n                    console.log(\"Socket is not initialized\");\n                }\n                set({\n                    socket: null\n                }); // Clear socket state after disconnection\n            } catch (error) {\n                // If there's an error (e.g., socket is not initialized), log it but don't let it break the app\n                console.error(\"Error while disconnecting socket:\", error);\n            }\n        }\n    }), {\n    name: \"auth-storage\",\n    storage: (0,zustand_middleware__WEBPACK_IMPORTED_MODULE_3__.createJSONStorage)(()=>localStorage),\n    partialize: (state)=>({\n            authUser: state.authUser,\n            onlineUsers: state.onlineUsers,\n            isCheckingAuth: state.isCheckingAuth,\n            isUpdatingProfile: state.isUpdatingProfile,\n            // Exclude functions and socket state from persistence\n            ...Object.fromEntries(Object.entries(state).filter((param)=>{\n                let [key] = param;\n                return ![\n                    \"socket\",\n                    \"connectSocket\",\n                    \"disconnectSocket\"\n                ].includes(key);\n            }))\n        })\n}));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9zdG9yZS91c2VBdXRoU3RvcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpQztBQUMrQjtBQUNsQjtBQUNwQjtBQUNjO0FBRXhDLGdGQUFnRjtBQUNoRixNQUFNTSxXQUFXQyxPQUFPQSxDQUFDQyxHQUFHLENBQUNDLElBQUksS0FBSyxnQkFBZ0IsMEJBQTBCRiw4Q0FBK0I7QUFpQnhHLE1BQU1JLGVBQWVYLCtDQUFNQSxHQUNoQ0MsMkRBQU9BLENBQ0wsQ0FBQ1csS0FBS0MsTUFBUztRQUNiQyxhQUFhO1FBQ2JDLFVBQVU7UUFDVkMsZ0JBQWdCO1FBQ2hCQyxhQUFhLEVBQUU7UUFDZkMsbUJBQW1CO1FBQ25CQyxRQUFRO1FBRVJDLFdBQVc7WUFDVCxJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxHQUFZLE9BQVRoQixVQUFTLHdCQUFzQjtvQkFDN0RpQixRQUFRO29CQUNSQyxhQUFhO2dCQUNmO2dCQUNBLElBQUlILFNBQVNJLEVBQUUsRUFBRTtvQkFDZixNQUFNQyxPQUFPLE1BQU1MLFNBQVNNLElBQUk7b0JBQ2hDZixJQUFJO3dCQUFFRyxVQUFVVyxLQUFLRSxJQUFJO3dCQUFFWixnQkFBZ0I7b0JBQU07b0JBQ2pESCxNQUFNZ0IsYUFBYTtnQkFDckIsT0FBTztvQkFDTGpCLElBQUk7d0JBQUVHLFVBQVU7b0JBQUs7Z0JBQ3ZCO1lBQ0YsRUFBRSxPQUFPZSxLQUFLO2dCQUNaQyxRQUFRQyxLQUFLLENBQUMsc0NBQXNDRjtnQkFDcERsQixJQUFJO29CQUFFRyxVQUFVO2dCQUFLO1lBQ3ZCO1FBQ0Y7UUFFQWtCLE9BQU8sT0FBT1A7WUFFWixJQUFJO2dCQUNBLE1BQU1MLFdBQVcsTUFBTUMsTUFBTSxHQUFZLE9BQVRoQixVQUFTLG9CQUFrQjtvQkFDdkRpQixRQUFRO29CQUNSQyxhQUFhO29CQUNiVSxTQUFTO3dCQUNMLGdCQUFnQjtvQkFDcEI7b0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FB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Q0FBQztvQkFDZCxPQUFPO3dCQUNMVCxRQUFRUyxHQUFHLENBQUM7b0JBQ2Q7Z0JBQ0YsT0FBTztvQkFDTCx1REFBdUQ7b0JBQ3ZEVCxRQUFRUyxHQUFHLENBQUM7Z0JBQ2Q7Z0JBRUE1QixJQUFJO29CQUFFTyxRQUFRO2dCQUFLLElBQUkseUNBQXlDO1lBQ2xFLEVBQUUsT0FBT2EsT0FBTztnQkFDZCwrRkFBK0Y7Z0JBQy9GRCxRQUFRQyxLQUFLLENBQUMscUNBQXFDQTtZQUNyRDtRQUNGO0lBR0YsSUFDQTtJQUNFNkIsTUFBTTtJQUNOQyxTQUFTNUQscUVBQWlCQSxDQUFDLElBQU02RDtJQUNqQ0MsWUFBWSxDQUFDQyxRQUFXO1lBQ3RCbEQsVUFBVWtELE1BQU1sRCxRQUFRO1lBQ3hCRSxhQUFhZ0QsTUFBTWhELFdBQVc7WUFDOUJELGdCQUFnQmlELE1BQU1qRCxjQUFjO1lBQ3BDRSxtQkFBbUIrQyxNQUFNL0MsaUJBQWlCO1lBQzFDLHNEQUFzRDtZQUN0RCxHQUFHZ0QsT0FBT0MsV0FBVyxDQUNuQkQsT0FBT0UsT0FBTyxDQUFDSCxPQUFPSSxNQUFNLENBQzFCO29CQUFDLENBQUNDLElBQUk7dUJBQ0osQ0FBQztvQkFDQztvQkFDQTtvQkFDQTtpQkFDRCxDQUFDQyxRQUFRLENBQUNEO2VBRWhCO1FBQ0g7QUFDRixJQUVGIiwic291cmNlcyI6WyJEOlxccmVhbHRpbWVfQ2hhdGFwcFxcZnJvbnRlbmRcXGFwcFxcc3RvcmVcXHVzZUF1dGhTdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGUgfSBmcm9tIFwienVzdGFuZFwiO1xyXG5pbXBvcnQgeyBwZXJzaXN0LCBjcmVhdGVKU09OU3RvcmFnZSB9IGZyb20gXCJ6dXN0YW5kL21pZGRsZXdhcmVcIjtcclxuaW1wb3J0IHsgaW8sIFNvY2tldCB9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XHJcblxyXG4vLyBVc2UgdGhlIEJBU0VfVVJMIHRvIGhhbmRsZSBkaWZmZXJlbnQgZW52aXJvbm1lbnRzIChkZXZlbG9wbWVudCB2cyBwcm9kdWN0aW9uKVxyXG5jb25zdCBCQVNFX1VSTCA9IHByb2Nlc3MuZW52Lk1PREUgPT09IFwiZGV2ZWxvcG1lbnRcIiA/IFwiaHR0cDovL2xvY2FsaG9zdDozMDAxXCIgOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMO1xyXG5cclxuXHJcbmludGVyZmFjZSBBdXRoU3RhdGUge1xyXG4gIGF1dGhVc2VyOiBhbnk7XHJcbiAgaXNVcGRhdGluZ1Byb2ZpbGU6IGJvb2xlYW47XHJcbiAgb25saW5lVXNlcnM6IGFueVtdO1xyXG4gIGlzQ2hlY2tpbmdBdXRoOiBib29sZWFuO1xyXG4gIHNvY2tldDogU29ja2V0IHwgbnVsbDtcclxuICBjaGVja0F1dGg6ICgpID0+IFByb21pc2U8dm9pZD47XHJcbiAgbG9naW46IChkYXRhOiB7IGVtYWlsOiBzdHJpbmc7IHBhc3N3b3JkOiBzdHJpbmcgfSkgPT4gUHJvbWlzZTx2b2lkPjtcclxuICBsb2dvdXQ6ICgpID0+IFByb21pc2U8dm9pZD47XHJcbiAgdXBkYXRlUHJvZmlsZTogKGRhdGE6IGFueSkgPT4gUHJvbWlzZTx2b2lkPjtcclxuICBjb25uZWN0U29ja2V0OiAoKSA9PiB2b2lkO1xyXG4gIGRpc2Nvbm5lY3RTb2NrZXQ6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBdXRoU3RvcmUgPSBjcmVhdGU8QXV0aFN0YXRlPigpKFxyXG4gIHBlcnNpc3QoXHJcbiAgICAoc2V0LCBnZXQpID0+ICh7XHJcbiAgICAgIGhhc0h5ZHJhdGVkOiBmYWxzZSxcclxuICAgICAgYXV0aFVzZXI6IG51bGwsXHJcbiAgICAgIGlzQ2hlY2tpbmdBdXRoOiB0cnVlLFxyXG4gICAgICBvbmxpbmVVc2VyczogW10sXHJcbiAgICAgIGlzVXBkYXRpbmdQcm9maWxlOiBmYWxzZSxcclxuICAgICAgc29ja2V0OiBudWxsLFxyXG5cclxuICAgICAgY2hlY2tBdXRoOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QkFTRV9VUkx9L2FwaS91c2VyL2NoZWNrQXV0aGAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICBzZXQoeyBhdXRoVXNlcjogZGF0YS51c2VyLCBpc0NoZWNraW5nQXV0aDogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgIGdldCgpLmNvbm5lY3RTb2NrZXQoKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldCh7IGF1dGhVc2VyOiBudWxsIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGR1cmluZyBhdXRoZW50aWNhdGlvbiBjaGVjazpcIiwgZXJyKTtcclxuICAgICAgICAgIHNldCh7IGF1dGhVc2VyOiBudWxsIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuXHJcbiAgICAgIGxvZ2luOiBhc3luYyAoZGF0YTogeyBlbWFpbDogc3RyaW5nOyBwYXNzd29yZDogc3RyaW5nIH0pID0+IHtcclxuICAgIFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QkFTRV9VUkx9L2FwaS91c2VyL2xvZ2luYCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBzZXQoeyBhdXRoVXNlcjogcmVzcG9uc2VEYXRhLnVzZXIgfSk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdC5zdWNjZXNzKFwiTG9naW4gc3VjY2Vzc2Z1bFwiKTtcclxuICAgICAgICAgICAgICAgIGdldCgpLmNvbm5lY3RTb2NrZXQoKTsgLy8gRW5zdXJlIHRoaXMgZnVuY3Rpb24gaXMgYWxzbyBzYWZlIGZvciBjbGllbnQtb25seVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhdXRoIHVzZXIgaW4gbG9naW4gZnVuY3Rpb24gaXNcIiwgZ2V0KCkuYXV0aFVzZXIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yRGF0YS5tZXNzYWdlIHx8IFwiSW52YWxpZCBjcmVkZW50aWFsc1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkdXJpbmcgbG9naW46XCIsIGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuXHJcbiAgICAgIGxvZ291dDogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBhd2FpdCBmZXRjaChgJHtCQVNFX1VSTH0vYXBpL3VzZXIvbG9nb3V0YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJMb2dvdXQgc3VjY2Vzc2Z1bFwiKTtcclxuICAgICAgICAgIHNldCh7IGF1dGhVc2VyOiBudWxsIH0pO1xyXG4gICAgICAgICAgZ2V0KCkuZGlzY29ubmVjdFNvY2tldCgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGR1cmluZyBsb2dvdXQ6XCIsIGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG5cclxuICAgICAgdXBkYXRlUHJvZmlsZTogYXN5bmMgKHByb2ZpbGVwaWM6IGFueSkgPT4ge1xyXG4gICAgICAgIHNldCh7IGlzVXBkYXRpbmdQcm9maWxlOiB0cnVlIH0pO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBhdGNoKFxyXG4gICAgICAgICAgICBgJHtCQVNFX1VSTH0vYXBpL3VzZXIvdXBkYXRlLXByb2ZpbGVgLFxyXG4gICAgICAgICAgICB7IHByb2ZpbGVwaWMgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgIGNvbnN0IHVwZGF0ZWRVc2VyID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXBkYXRlZCB1c2VyIGlzXCIsIHVwZGF0ZWRVc2VyKTtcclxuICAgICAgICAgIHNldCh7IGF1dGhVc2VyOiB1cGRhdGVkVXNlciB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBwcm9maWxlOlwiLCBlcnIpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICBzZXQoeyBpc1VwZGF0aW5nUHJvZmlsZTogZmFsc2UgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG5cclxuICAgICAgY29ubmVjdFNvY2tldDogKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgYXV0aFVzZXIgfSA9IGdldCgpO1xyXG5cclxuICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXV0aFVzZSBhZnRlciBsb2dpbiByXCIsIGF1dGhVc2VyKTtcclxuXHJcbiAgICAgICAgaWYgKCFhdXRoVXNlciB8fCAhYXV0aFVzZXIuaWQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gYXV0aCB1c2VyXCIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGF1dGhVc2VyKSB7XHJcbiAgICAgICAgICBjb25zdCBuZXdTb2NrZXQgPSBpbyhCQVNFX1VSTCwge1xyXG4gICAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICAgIHVzZXJJZDogYXV0aFVzZXIuaWQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIG5ld1NvY2tldC5jb25uZWN0KCk7XHJcblxyXG4gICAgICAgICAgc2V0KHsgc29ja2V0OiBuZXdTb2NrZXQgfSk7XHJcblxyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJTb2NrZXQgZnJvbSBjb25uZWN0U29ja2V0IGZ1bmN0aW9uIGlzXCIsIG5ld1NvY2tldCk7XHJcbiAgICAgICAgICBuZXdTb2NrZXQub24oXCJnZXRPbmxpbmVVc2Vyc1wiLCAodXNlcklkcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9ubGluZSB1c2VycyByZWNlaXZlZDpcIiwgdXNlcklkcyk7XHJcbiAgICAgICAgICAgIHNldCh7IG9ubGluZVVzZXJzOiB1c2VySWRzIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlNvY2tldCBjb25uZWN0ZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG5cclxuICAgICAgZGlzY29ubmVjdFNvY2tldDogKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNvY2tldCA9IGdldCgpLnNvY2tldDtcclxuICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGlmIChzb2NrZXQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTb2NrZXQgYmVmb3JlIGRpc2Nvbm5lY3Rpbmc6XCIsIHNvY2tldCk7XHJcbiAgICAgIFxyXG4gICAgICAgICAgICBpZiAoc29ja2V0LmNvbm5lY3RlZD09PXRydWUpIHtcclxuICAgICAgICAgICAgICBzb2NrZXQub2ZmKFwibmV3TWVzc2FnZVwiKTtcclxuICAgICAgICAgICAgICBzb2NrZXQub2ZmKFwiZ2V0T25saW5lVXNlcnNcIik7XHJcbiAgICAgICAgICAgICAgLy8gQWRkIG90aGVyIGV2ZW50cyB5b3UgYXJlIGxpc3RlbmluZyB0byBoZXJlLi4uXHJcbiAgICAgICAgICAgICAgc29ja2V0LmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNvY2tldCBkaXNjb25uZWN0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU29ja2V0IGlzIGFscmVhZHkgZGlzY29ubmVjdGVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBObyBuZWVkIHRvIGxvZyBhbiBlcnJvciwgc2ltcGx5IGlnbm9yZSB0aGUgc2l0dWF0aW9uXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU29ja2V0IGlzIG5vdCBpbml0aWFsaXplZFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgICBzZXQoeyBzb2NrZXQ6IG51bGwgfSk7IC8vIENsZWFyIHNvY2tldCBzdGF0ZSBhZnRlciBkaXNjb25uZWN0aW9uXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYW4gZXJyb3IgKGUuZy4sIHNvY2tldCBpcyBub3QgaW5pdGlhbGl6ZWQpLCBsb2cgaXQgYnV0IGRvbid0IGxldCBpdCBicmVhayB0aGUgYXBwXHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igd2hpbGUgZGlzY29ubmVjdGluZyBzb2NrZXQ6XCIsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIFxyXG4gICAgXHJcbiAgICB9KSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJhdXRoLXN0b3JhZ2VcIixcclxuICAgICAgc3RvcmFnZTogY3JlYXRlSlNPTlN0b3JhZ2UoKCkgPT4gbG9jYWxTdG9yYWdlKSxcclxuICAgICAgcGFydGlhbGl6ZTogKHN0YXRlKSA9PiAoe1xyXG4gICAgICAgIGF1dGhVc2VyOiBzdGF0ZS5hdXRoVXNlcixcclxuICAgICAgICBvbmxpbmVVc2Vyczogc3RhdGUub25saW5lVXNlcnMsXHJcbiAgICAgICAgaXNDaGVja2luZ0F1dGg6IHN0YXRlLmlzQ2hlY2tpbmdBdXRoLFxyXG4gICAgICAgIGlzVXBkYXRpbmdQcm9maWxlOiBzdGF0ZS5pc1VwZGF0aW5nUHJvZmlsZSxcclxuICAgICAgICAvLyBFeGNsdWRlIGZ1bmN0aW9ucyBhbmQgc29ja2V0IHN0YXRlIGZyb20gcGVyc2lzdGVuY2VcclxuICAgICAgICAuLi5PYmplY3QuZnJvbUVudHJpZXMoXHJcbiAgICAgICAgICBPYmplY3QuZW50cmllcyhzdGF0ZSkuZmlsdGVyKFxyXG4gICAgICAgICAgICAoW2tleV0pID0+XHJcbiAgICAgICAgICAgICAgIVtcclxuICAgICAgICAgICAgICAgIFwic29ja2V0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbm5lY3RTb2NrZXRcIixcclxuICAgICAgICAgICAgICAgIFwiZGlzY29ubmVjdFNvY2tldFwiLFxyXG4gICAgICAgICAgICAgIF0uaW5jbHVkZXMoa2V5KVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICksXHJcbiAgICAgIH0pLFxyXG4gICAgfVxyXG4gIClcclxuKTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZSIsInBlcnNpc3QiLCJjcmVhdGVKU09OU3RvcmFnZSIsImlvIiwiYXhpb3MiLCJ0b2FzdCIsIkJBU0VfVVJMIiwicHJvY2VzcyIsImVudiIsIk1PREUiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwidXNlQXV0aFN0b3JlIiwic2V0IiwiZ2V0IiwiaGFzSHlkcmF0ZWQiLCJhdXRoVXNlciIsImlzQ2hlY2tpbmdBdXRoIiwib25saW5lVXNlcnMiLCJpc1VwZGF0aW5nUHJvZmlsZSIsInNvY2tldCIsImNoZWNrQXV0aCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJjcmVkZW50aWFscyIsIm9rIiwiZGF0YSIsImpzb24iLCJ1c2VyIiwiY29ubmVjdFNvY2tldCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImxvZ2luIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2VEYXRhIiwic3VjY2VzcyIsImxvZyIsImVycm9yRGF0YSIsIkVycm9yIiwibWVzc2FnZSIsImxvZ291dCIsImRpc2Nvbm5lY3RTb2NrZXQiLCJ1cGRhdGVQcm9maWxlIiwicHJvZmlsZXBpYyIsInBhdGNoIiwid2l0aENyZWRlbnRpYWxzIiwidXBkYXRlZFVzZXIiLCJpZCIsIm5ld1NvY2tldCIsInF1ZXJ5IiwidXNlcklkIiwiY29ubmVjdCIsIm9uIiwidXNlcklkcyIsImNvbm5lY3RlZCIsIm9mZiIsImRpc2Nvbm5lY3QiLCJuYW1lIiwic3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsInBhcnRpYWxpemUiLCJzdGF0ZSIsIk9iamVjdCIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsImZpbHRlciIsImtleSIsImluY2x1ZGVzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/store/useAuthStore.ts\n"));

/***/ })

});