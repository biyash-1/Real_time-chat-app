"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/chatpage/page",{

/***/ "(app-pages-browser)/./components/ChatContainer.tsx":
/*!**************************************!*\
  !*** ./components/ChatContainer.tsx ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_store_useChatStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/store/useChatStore */ \"(app-pages-browser)/./app/store/useChatStore.ts\");\n/* harmony import */ var _components_ChatHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ChatHeader */ \"(app-pages-browser)/./components/ChatHeader.tsx\");\n/* harmony import */ var _components_MessageInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/MessageInput */ \"(app-pages-browser)/./components/MessageInput.tsx\");\n/* harmony import */ var _MessageSkeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MessageSkeleton */ \"(app-pages-browser)/./components/MessageSkeleton.tsx\");\n/* harmony import */ var _app_store_useAuthStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/store/useAuthStore */ \"(app-pages-browser)/./app/store/useAuthStore.ts\");\n/* harmony import */ var _lib_date__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/date */ \"(app-pages-browser)/./lib/date.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ChatContainer = ()=>{\n    _s();\n    const { messages, getMessages, deleteMessage, isMessagesLoading, selectedUser, subscribeToMessages, unsubscribeFromMessages } = (0,_app_store_useChatStore__WEBPACK_IMPORTED_MODULE_2__.useChatStore)();\n    const { authUser, socket } = (0,_app_store_useAuthStore__WEBPACK_IMPORTED_MODULE_6__.useAuthStore)();\n    console.log(\"auth user in chat container is\", authUser);\n    console.log(\"messages in chat container are\", messages);\n    console.log(\"selected user is\", selectedUser);\n    console.log(\"socket in chat container is\", socket);\n    const [hoveredMessageId, setHoveredMessageId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [showDeleteButton, setShowDeleteButton] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const scrollToBottom = ()=>{\n        const container = document.querySelector(\".messages-container\");\n        if (container) {\n            container.scrollTop = container.scrollHeight;\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"ChatContainer.useEffect\": ()=>{\n            if (selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser._id) {\n                getMessages(selectedUser._id);\n                socket === null || socket === void 0 ? void 0 : socket.connect();\n                subscribeToMessages();\n            }\n            return ({\n                \"ChatContainer.useEffect\": ()=>unsubscribeFromMessages()\n            })[\"ChatContainer.useEffect\"];\n        }\n    }[\"ChatContainer.useEffect\"], [\n        selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser._id,\n        getMessages,\n        subscribeToMessages,\n        unsubscribeFromMessages,\n        socket\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"ChatContainer.useEffect\": ()=>{\n            if (messages && messages.length > 0) {\n                console.log(\"messages are\", messages);\n                scrollToBottom();\n            }\n        }\n    }[\"ChatContainer.useEffect\"], [\n        messages\n    ]);\n    const handleDeleteMessage = (messageId)=>{\n        deleteMessage(messageId);\n    };\n    if (isMessagesLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex-1 flex-col overflow-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ChatHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\realtime_Chatapp\\\\frontend\\\\components\\\\ChatContainer.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MessageSkeleton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\realtime_Chatapp\\\\frontend\\\\components\\\\ChatContainer.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MessageInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\realtime_Chatapp\\\\frontend\\\\components\\\\ChatContainer.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\realtime_Chatapp\\\\frontend\\\\components\\\\ChatContainer.tsx\",\n            lineNumber: 66,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex-1 flex flex-col overflow-hidden mb-6 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ChatHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\realtime_Chatapp\\\\frontend\\\\components\\\\ChatContainer.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"messages-container h-full overflow-y-auto p-2 space-y-2 \",\n                children: authUser && messages && Array.isArray(messages) && messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"chat \".concat(message.sender === authUser.id ? \"chat-end\" : \"chat-start\"),\n                        onMouseEnter: ()=>setHoveredMessageId(message._id),\n                        onMouseLeave: ()=>{\n                            setHoveredMessageId(null);\n                            setShowDeleteButton(null);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"chat-image avatar\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"size-10 rounded-full border\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: message.sender === authUser.id ? (authUser === null || authUser === void 0 ? void 0 : authUser.profilePicture) || \"avatar.png\" : (selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.profilePicture) || \"avatar.png\",\n                                        alt: \"profile picture\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\realtime_Chatapp\\\\frontend\\\\components\\\\ChatContainer.tsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\realtime_Chatapp\\\\frontend\\\\components\\\\ChatContainer.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\realtime_Chatapp\\\\frontend\\\\components\\\\ChatContainer.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"chat-header mb-1\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n                                    className: \"text-sm opacity-50 ml-1\",\n                                    children: (0,_lib_date__WEBPACK_IMPORTED_MODULE_7__.formatMessageTime)(message.createdAt)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\realtime_Chatapp\\\\frontend\\\\components\\\\ChatContainer.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\realtime_Chatapp\\\\frontend\\\\components\\\\ChatContainer.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"chat-bubble flex flex-col relative dark:bg-slate-700  bg-gray-300 border-zinc-400 text-black\",\n                                children: [\n                                    hoveredMessageId === message._id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"absolute left-[-30px] top-0 flex space-x-1\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"dark:text-white \",\n                                                onClick: ()=>setShowDeleteButton(message._id),\n                                                children: \"...\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\realtime_Chatapp\\\\frontend\\\\components\\\\ChatContainer.tsx\",\n                                                lineNumber: 102,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            showDeleteButton === message._id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"text-white bg-red-600 relative bottom-5 right-8 rounded-full p-1\",\n                                                onClick: ()=>handleDeleteMessage(message._id),\n                                                children: \"Delete\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\realtime_Chatapp\\\\frontend\\\\components\\\\ChatContainer.tsx\",\n                                                lineNumber: 104,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\realtime_Chatapp\\\\frontend\\\\components\\\\ChatContainer.tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    (message === null || message === void 0 ? void 0 : message.image) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: message === null || message === void 0 ? void 0 : message.image,\n                                        alt: \"image\",\n                                        className: \"w-[200px] h-auto object-cover\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\realtime_Chatapp\\\\frontend\\\\components\\\\ChatContainer.tsx\",\n                                        lineNumber: 109,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm dark:text-zinc-300\",\n                                        children: (message === null || message === void 0 ? void 0 : message.text) || message.text || \"No content\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\realtime_Chatapp\\\\frontend\\\\components\\\\ChatContainer.tsx\",\n                                        lineNumber: 111,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\realtime_Chatapp\\\\frontend\\\\components\\\\ChatContainer.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, message._id || \"message-\".concat(index), true, {\n                        fileName: \"D:\\\\realtime_Chatapp\\\\frontend\\\\components\\\\ChatContainer.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\realtime_Chatapp\\\\frontend\\\\components\\\\ChatContainer.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MessageInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\realtime_Chatapp\\\\frontend\\\\components\\\\ChatContainer.tsx\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\realtime_Chatapp\\\\frontend\\\\components\\\\ChatContainer.tsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ChatContainer, \"C4YzvjlzSV/2fn5sLV8ZKw0dXQ8=\", false, function() {\n    return [\n        _app_store_useChatStore__WEBPACK_IMPORTED_MODULE_2__.useChatStore,\n        _app_store_useAuthStore__WEBPACK_IMPORTED_MODULE_6__.useAuthStore\n    ];\n});\n_c = ChatContainer;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatContainer);\nvar _c;\n$RefreshReg$(_c, \"ChatContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2hhdENvbnRhaW5lci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ21EO0FBQ007QUFDUjtBQUNJO0FBQ0w7QUFDUztBQUNUO0FBR2hELE1BQU1TLGdCQUFnQjs7SUFDcEIsTUFBTSxFQUNKQyxRQUFRLEVBQ1JDLFdBQVcsRUFFWEMsYUFBYSxFQUNiQyxpQkFBaUIsRUFDakJDLFlBQVksRUFDWkMsbUJBQW1CLEVBQ25CQyx1QkFBdUIsRUFDeEIsR0FBR2IscUVBQVlBO0lBQ2hCLE1BQU0sRUFBRWMsUUFBUSxFQUFDQyxNQUFNLEVBQUUsR0FBR1gscUVBQVlBO0lBQ3hDWSxRQUFRQyxHQUFHLENBQUMsa0NBQWlDSDtJQUM3Q0UsUUFBUUMsR0FBRyxDQUFDLGtDQUFpQ1Y7SUFDL0NTLFFBQVFDLEdBQUcsQ0FBQyxvQkFBbUJOO0lBQzdCSyxRQUFRQyxHQUFHLENBQUMsK0JBQThCRjtJQUcxQyxNQUFNLENBQUNHLGtCQUFrQkMsb0JBQW9CLEdBQUdwQiwrQ0FBUUEsQ0FBZ0I7SUFDeEUsTUFBTSxDQUFDcUIsa0JBQWtCQyxvQkFBb0IsR0FBR3RCLCtDQUFRQSxDQUFnQjtJQUd4RSxNQUFNdUIsaUJBQWlCO1FBQ3JCLE1BQU1DLFlBQVlDLFNBQVNDLGFBQWEsQ0FBQztRQUN6QyxJQUFJRixXQUFXO1lBQ2JBLFVBQVVHLFNBQVMsR0FBR0gsVUFBVUksWUFBWTtRQUM5QztJQUNGO0lBRUE3QixnREFBU0E7bUNBQUM7WUFDUixJQUFJYSx5QkFBQUEsbUNBQUFBLGFBQWNpQixHQUFHLEVBQUU7Z0JBQ3JCcEIsWUFBWUcsYUFBYWlCLEdBQUc7Z0JBQzVCYixtQkFBQUEsNkJBQUFBLE9BQVFjLE9BQU87Z0JBRWZqQjtZQUNGO1lBRUE7MkNBQU8sSUFBTUM7O1FBQ2Y7a0NBQUc7UUFBQ0YseUJBQUFBLG1DQUFBQSxhQUFjaUIsR0FBRztRQUFFcEI7UUFBYUk7UUFBcUJDO1FBQXdCRTtLQUFPO0lBRXhGakIsZ0RBQVNBO21DQUFDO1lBQ1IsSUFBSVMsWUFBWUEsU0FBU3VCLE1BQU0sR0FBRyxHQUFHO2dCQUNuQ2QsUUFBUUMsR0FBRyxDQUFDLGdCQUFlVjtnQkFDM0JlO1lBQ0Y7UUFDRjtrQ0FBRztRQUFDZjtLQUFTO0lBRWIsTUFBTXdCLHNCQUFzQixDQUFDQztRQUUzQnZCLGNBQWN1QjtJQUVoQjtJQUVBLElBQUl0QixtQkFBbUI7UUFDckIscUJBQ0UsOERBQUN1QjtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ2pDLDhEQUFVQTs7Ozs7OEJBQ1gsOERBQUNFLHdEQUFlQTs7Ozs7OEJBQ2hCLDhEQUFDRCxnRUFBWUE7Ozs7Ozs7Ozs7O0lBR25CO0lBRUEscUJBQ0UsOERBQUMrQjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ2pDLDhEQUFVQTs7Ozs7MEJBQ1gsOERBQUNnQztnQkFBSUMsV0FBVTswQkFDWnBCLFlBQVlQLFlBQVk0QixNQUFNQyxPQUFPLENBQUM3QixhQUFhQSxTQUFTOEIsR0FBRyxDQUFDLENBQUNDLFNBQVNDLHNCQUN6RSw4REFBQ047d0JBRUNDLFdBQVcsUUFBbUUsT0FBM0RJLFFBQVFFLE1BQU0sS0FBSzFCLFNBQVMyQixFQUFFLEdBQUcsYUFBYTt3QkFDakVDLGNBQWMsSUFBTXZCLG9CQUFvQm1CLFFBQVFWLEdBQUc7d0JBQ25EZSxjQUFjOzRCQUNaeEIsb0JBQW9COzRCQUNwQkUsb0JBQW9CO3dCQUN0Qjs7MENBRUEsOERBQUNZO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ1U7d0NBQ0NDLEtBQUtQLFFBQVFFLE1BQU0sS0FBSzFCLFNBQVMyQixFQUFFLEdBQUczQixDQUFBQSxxQkFBQUEsK0JBQUFBLFNBQVVnQyxjQUFjLEtBQUksZUFBZW5DLENBQUFBLHlCQUFBQSxtQ0FBQUEsYUFBY21DLGNBQWMsS0FBSTt3Q0FDakhDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7MENBSVYsOERBQUNkO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDYztvQ0FBS2QsV0FBVTs4Q0FBMkI3Qiw0REFBaUJBLENBQUNpQyxRQUFRVyxTQUFTOzs7Ozs7Ozs7OzswQ0FFaEYsOERBQUNoQjtnQ0FBSUMsV0FBVTs7b0NBQ1poQixxQkFBcUJvQixRQUFRVixHQUFHLGtCQUMvQiw4REFBQ0s7d0NBQUlDLFdBQVU7OzBEQUNiLDhEQUFDZ0I7Z0RBQU9oQixXQUFVO2dEQUFtQmlCLFNBQVMsSUFBTTlCLG9CQUFvQmlCLFFBQVFWLEdBQUc7MERBQUc7Ozs7Ozs0Q0FDckZSLHFCQUFxQmtCLFFBQVFWLEdBQUcsa0JBQy9CLDhEQUFDc0I7Z0RBQU9oQixXQUFVO2dEQUFtRWlCLFNBQVMsSUFBTXBCLG9CQUFvQk8sUUFBUVYsR0FBRzswREFBRzs7Ozs7Ozs7Ozs7O29DQUkzSVUsQ0FBQUEsb0JBQUFBLDhCQUFBQSxRQUFTYyxLQUFLLG1CQUNiLDhEQUFDUjt3Q0FBSUMsR0FBRyxFQUFFUCxvQkFBQUEsOEJBQUFBLFFBQVNjLEtBQUs7d0NBQUVMLEtBQUk7d0NBQVFiLFdBQVU7Ozs7OztrREFFbEQsOERBQUNtQjt3Q0FBRW5CLFdBQVU7a0RBQThCSSxDQUFBQSxvQkFBQUEsOEJBQUFBLFFBQVNnQixJQUFJLEtBQUloQixRQUFRZ0IsSUFBSSxJQUFJOzs7Ozs7Ozs7Ozs7O3VCQS9CekVoQixRQUFRVixHQUFHLElBQUksV0FBaUIsT0FBTlc7Ozs7Ozs7Ozs7MEJBb0NyQyw4REFBQ3JDLGdFQUFZQTs7Ozs7Ozs7Ozs7QUFHbkI7R0E1R01JOztRQVVBTixpRUFBWUE7UUFDWUksaUVBQVlBOzs7S0FYcENFO0FBOEdOLGlFQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJEOlxccmVhbHRpbWVfQ2hhdGFwcFxcZnJvbnRlbmRcXGNvbXBvbmVudHNcXENoYXRDb250YWluZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VDaGF0U3RvcmUgfSBmcm9tIFwiLi4vYXBwL3N0b3JlL3VzZUNoYXRTdG9yZVwiO1xyXG5pbXBvcnQgQ2hhdEhlYWRlciBmcm9tIFwiQC9jb21wb25lbnRzL0NoYXRIZWFkZXJcIjtcclxuaW1wb3J0IE1lc3NhZ2VJbnB1dCBmcm9tIFwiQC9jb21wb25lbnRzL01lc3NhZ2VJbnB1dFwiO1xyXG5pbXBvcnQgTWVzc2FnZVNrZWxldG9uIGZyb20gXCIuL01lc3NhZ2VTa2VsZXRvblwiO1xyXG5pbXBvcnQgeyB1c2VBdXRoU3RvcmUgfSBmcm9tIFwiLi4vYXBwL3N0b3JlL3VzZUF1dGhTdG9yZVwiO1xyXG5pbXBvcnQgeyBmb3JtYXRNZXNzYWdlVGltZSB9IGZyb20gXCIuLi9saWIvZGF0ZVwiO1xyXG5cclxuXHJcbmNvbnN0IENoYXRDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgbWVzc2FnZXMsXHJcbiAgICBnZXRNZXNzYWdlcyxcclxuICAgIFxyXG4gICAgZGVsZXRlTWVzc2FnZSxcclxuICAgIGlzTWVzc2FnZXNMb2FkaW5nLFxyXG4gICAgc2VsZWN0ZWRVc2VyLFxyXG4gICAgc3Vic2NyaWJlVG9NZXNzYWdlcyxcclxuICAgIHVuc3Vic2NyaWJlRnJvbU1lc3NhZ2VzLFxyXG4gIH0gPSB1c2VDaGF0U3RvcmUoKTtcclxuICBjb25zdCB7IGF1dGhVc2VyLHNvY2tldCB9ID0gdXNlQXV0aFN0b3JlKCk7XHJcbiAgY29uc29sZS5sb2coXCJhdXRoIHVzZXIgaW4gY2hhdCBjb250YWluZXIgaXNcIixhdXRoVXNlcik7XHJcbiAgY29uc29sZS5sb2coXCJtZXNzYWdlcyBpbiBjaGF0IGNvbnRhaW5lciBhcmVcIixtZXNzYWdlcyk7XHJcbmNvbnNvbGUubG9nKFwic2VsZWN0ZWQgdXNlciBpc1wiLHNlbGVjdGVkVXNlcik7XHJcbiAgY29uc29sZS5sb2coXCJzb2NrZXQgaW4gY2hhdCBjb250YWluZXIgaXNcIixzb2NrZXQpO1xyXG4gIFxyXG4gIFxyXG4gIGNvbnN0IFtob3ZlcmVkTWVzc2FnZUlkLCBzZXRIb3ZlcmVkTWVzc2FnZUlkXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpOyBcclxuICBjb25zdCBbc2hvd0RlbGV0ZUJ1dHRvbiwgc2V0U2hvd0RlbGV0ZUJ1dHRvbl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTsgXHJcblxyXG4gIFxyXG4gIGNvbnN0IHNjcm9sbFRvQm90dG9tID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZXNzYWdlcy1jb250YWluZXJcIik7XHJcbiAgICBpZiAoY29udGFpbmVyKSB7XHJcbiAgICAgIGNvbnRhaW5lci5zY3JvbGxUb3AgPSBjb250YWluZXIuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2VsZWN0ZWRVc2VyPy5faWQpIHtcclxuICAgICAgZ2V0TWVzc2FnZXMoc2VsZWN0ZWRVc2VyLl9pZCk7XHJcbiAgICAgIHNvY2tldD8uY29ubmVjdCgpO1xyXG5cclxuICAgICAgc3Vic2NyaWJlVG9NZXNzYWdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZUZyb21NZXNzYWdlcygpO1xyXG4gIH0sIFtzZWxlY3RlZFVzZXI/Ll9pZCwgZ2V0TWVzc2FnZXMsIHN1YnNjcmliZVRvTWVzc2FnZXMsIHVuc3Vic2NyaWJlRnJvbU1lc3NhZ2VzLHNvY2tldF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKG1lc3NhZ2VzICYmIG1lc3NhZ2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc29sZS5sb2coXCJtZXNzYWdlcyBhcmVcIixtZXNzYWdlcyk7XHJcbiAgICAgIHNjcm9sbFRvQm90dG9tKCk7XHJcbiAgICB9XHJcbiAgfSwgW21lc3NhZ2VzXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZU1lc3NhZ2UgPSAobWVzc2FnZUlkOmFueSkgPT4ge1xyXG4gXHJcbiAgICBkZWxldGVNZXNzYWdlKG1lc3NhZ2VJZCk7XHJcbiAgXHJcbiAgfTtcclxuXHJcbiAgaWYgKGlzTWVzc2FnZXNMb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4LWNvbCBvdmVyZmxvdy1hdXRvXCI+XHJcbiAgICAgICAgPENoYXRIZWFkZXIgLz5cclxuICAgICAgICA8TWVzc2FnZVNrZWxldG9uIC8+XHJcbiAgICAgICAgPE1lc3NhZ2VJbnB1dCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCBmbGV4LWNvbCBvdmVyZmxvdy1oaWRkZW4gbWItNiBcIj5cclxuICAgICAgPENoYXRIZWFkZXIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlcy1jb250YWluZXIgaC1mdWxsIG92ZXJmbG93LXktYXV0byBwLTIgc3BhY2UteS0yIFwiPlxyXG4gICAgICAgIHthdXRoVXNlciAmJiBtZXNzYWdlcyAmJiBBcnJheS5pc0FycmF5KG1lc3NhZ2VzKSAmJiBtZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGtleT17bWVzc2FnZS5faWQgfHwgYG1lc3NhZ2UtJHtpbmRleH1gfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BjaGF0ICR7bWVzc2FnZS5zZW5kZXIgPT09IGF1dGhVc2VyLmlkID8gXCJjaGF0LWVuZFwiIDogXCJjaGF0LXN0YXJ0XCJ9YH1cclxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRIb3ZlcmVkTWVzc2FnZUlkKG1lc3NhZ2UuX2lkKX1cclxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0SG92ZXJlZE1lc3NhZ2VJZChudWxsKTtcclxuICAgICAgICAgICAgICBzZXRTaG93RGVsZXRlQnV0dG9uKG51bGwpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtaW1hZ2UgYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXplLTEwIHJvdW5kZWQtZnVsbCBib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPXttZXNzYWdlLnNlbmRlciA9PT0gYXV0aFVzZXIuaWQgPyBhdXRoVXNlcj8ucHJvZmlsZVBpY3R1cmUgfHwgXCJhdmF0YXIucG5nXCIgOiBzZWxlY3RlZFVzZXI/LnByb2ZpbGVQaWN0dXJlIHx8IFwiYXZhdGFyLnBuZ1wifVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJwcm9maWxlIHBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1oZWFkZXIgbWItMVwiPlxyXG4gICAgICAgICAgICAgIDx0aW1lIGNsYXNzTmFtZT1cInRleHQtc20gb3BhY2l0eS01MCBtbC0xXCI+e2Zvcm1hdE1lc3NhZ2VUaW1lKG1lc3NhZ2UuY3JlYXRlZEF0KX08L3RpbWU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtYnViYmxlIGZsZXggZmxleC1jb2wgcmVsYXRpdmUgZGFyazpiZy1zbGF0ZS03MDAgIGJnLWdyYXktMzAwIGJvcmRlci16aW5jLTQwMCB0ZXh0LWJsYWNrXCI+XHJcbiAgICAgICAgICAgICAge2hvdmVyZWRNZXNzYWdlSWQgPT09IG1lc3NhZ2UuX2lkICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC1bLTMwcHhdIHRvcC0wIGZsZXggc3BhY2UteC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZGFyazp0ZXh0LXdoaXRlIFwiIG9uQ2xpY2s9eygpID0+IHNldFNob3dEZWxldGVCdXR0b24obWVzc2FnZS5faWQpfT4uLi48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAge3Nob3dEZWxldGVCdXR0b24gPT09IG1lc3NhZ2UuX2lkICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctcmVkLTYwMCByZWxhdGl2ZSBib3R0b20tNSByaWdodC04IHJvdW5kZWQtZnVsbCBwLTFcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVNZXNzYWdlKG1lc3NhZ2UuX2lkKX0+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHttZXNzYWdlPy5pbWFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17bWVzc2FnZT8uaW1hZ2V9IGFsdD1cImltYWdlXCIgY2xhc3NOYW1lPVwidy1bMjAwcHhdIGgtYXV0byBvYmplY3QtY292ZXJcIiAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBkYXJrOnRleHQtemluYy0zMDBcIj57bWVzc2FnZT8udGV4dCB8fCBtZXNzYWdlLnRleHQgfHwgXCJObyBjb250ZW50XCJ9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE1lc3NhZ2VJbnB1dCAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRDb250YWluZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQ2hhdFN0b3JlIiwiQ2hhdEhlYWRlciIsIk1lc3NhZ2VJbnB1dCIsIk1lc3NhZ2VTa2VsZXRvbiIsInVzZUF1dGhTdG9yZSIsImZvcm1hdE1lc3NhZ2VUaW1lIiwiQ2hhdENvbnRhaW5lciIsIm1lc3NhZ2VzIiwiZ2V0TWVzc2FnZXMiLCJkZWxldGVNZXNzYWdlIiwiaXNNZXNzYWdlc0xvYWRpbmciLCJzZWxlY3RlZFVzZXIiLCJzdWJzY3JpYmVUb01lc3NhZ2VzIiwidW5zdWJzY3JpYmVGcm9tTWVzc2FnZXMiLCJhdXRoVXNlciIsInNvY2tldCIsImNvbnNvbGUiLCJsb2ciLCJob3ZlcmVkTWVzc2FnZUlkIiwic2V0SG92ZXJlZE1lc3NhZ2VJZCIsInNob3dEZWxldGVCdXR0b24iLCJzZXRTaG93RGVsZXRlQnV0dG9uIiwic2Nyb2xsVG9Cb3R0b20iLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJfaWQiLCJjb25uZWN0IiwibGVuZ3RoIiwiaGFuZGxlRGVsZXRlTWVzc2FnZSIsIm1lc3NhZ2VJZCIsImRpdiIsImNsYXNzTmFtZSIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsIm1lc3NhZ2UiLCJpbmRleCIsInNlbmRlciIsImlkIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiaW1nIiwic3JjIiwicHJvZmlsZVBpY3R1cmUiLCJhbHQiLCJ0aW1lIiwiY3JlYXRlZEF0IiwiYnV0dG9uIiwib25DbGljayIsImltYWdlIiwicCIsInRleHQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ChatContainer.tsx\n"));

/***/ })

});