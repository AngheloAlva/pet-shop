"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "emails_plaid-verify-identity_tsx";
exports.ids = ["emails_plaid-verify-identity_tsx"];
exports.modules = {

/***/ "./emails/plaid-verify-identity.tsx":
/*!******************************************!*\
  !*** ./emails/plaid-verify-identity.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emails_plaid_verify_identity_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../emails/plaid-verify-identity.tsx */ \"../emails/plaid-verify-identity.tsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_emails_plaid_verify_identity_tsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lbWFpbHMvcGxhaWQtdmVyaWZ5LWlkZW50aXR5LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEwRDtBQUMxRCxpRUFBZUEseUVBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1lbWFpbC1jbGllbnQvLi9lbWFpbHMvcGxhaWQtdmVyaWZ5LWlkZW50aXR5LnRzeD8zYjRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYWlsIGZyb20gJy4uLy4uL2VtYWlscy9wbGFpZC12ZXJpZnktaWRlbnRpdHkudHN4JztcbmV4cG9ydCBkZWZhdWx0IE1haWw7Il0sIm5hbWVzIjpbIk1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./emails/plaid-verify-identity.tsx\n");

/***/ }),

/***/ "../emails/plaid-verify-identity.tsx":
/*!*******************************************!*\
  !*** ../emails/plaid-verify-identity.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PlaidVerifyIdentityEmail\": () => (/* binding */ PlaidVerifyIdentityEmail),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-email/components */ \"@react-email/components\");\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_email_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : \"\";\nconst PlaidVerifyIdentityEmail = ({ validationCode =\"144833\"  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Html, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Head, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ancea\\\\Desktop\\\\pet-shop\\\\react-email-starter\\\\emails\\\\plaid-verify-identity.tsx\",\n                lineNumber: 26,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Body, {\n                style: main,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Container, {\n                        style: container,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Img, {\n                                src: `${baseUrl}/static/plaid-logo.png`,\n                                width: \"212\",\n                                height: \"88\",\n                                alt: \"Plaid\",\n                                style: logo\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ancea\\\\Desktop\\\\pet-shop\\\\react-email-starter\\\\emails\\\\plaid-verify-identity.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                style: tertiary,\n                                children: \"Verify Your Identity\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ancea\\\\Desktop\\\\pet-shop\\\\react-email-starter\\\\emails\\\\plaid-verify-identity.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n                                style: secondary,\n                                children: \"Enter the following code to finish linking Venmo.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ancea\\\\Desktop\\\\pet-shop\\\\react-email-starter\\\\emails\\\\plaid-verify-identity.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Section, {\n                                style: codeContainer,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                    style: code,\n                                    children: validationCode\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ancea\\\\Desktop\\\\pet-shop\\\\react-email-starter\\\\emails\\\\plaid-verify-identity.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 11\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ancea\\\\Desktop\\\\pet-shop\\\\react-email-starter\\\\emails\\\\plaid-verify-identity.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                style: paragraph,\n                                children: \"Not expecting this email?\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ancea\\\\Desktop\\\\pet-shop\\\\react-email-starter\\\\emails\\\\plaid-verify-identity.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                style: paragraph,\n                                children: [\n                                    \"Contact\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                                        href: \"mailto:login@plaid.com\",\n                                        style: link,\n                                        children: \"login@plaid.com\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ancea\\\\Desktop\\\\pet-shop\\\\react-email-starter\\\\emails\\\\plaid-verify-identity.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    \" \",\n                                    \"if you did not request this code.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ancea\\\\Desktop\\\\pet-shop\\\\react-email-starter\\\\emails\\\\plaid-verify-identity.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ancea\\\\Desktop\\\\pet-shop\\\\react-email-starter\\\\emails\\\\plaid-verify-identity.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                        style: footer,\n                        children: \"Securely powered by Plaid.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ancea\\\\Desktop\\\\pet-shop\\\\react-email-starter\\\\emails\\\\plaid-verify-identity.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ancea\\\\Desktop\\\\pet-shop\\\\react-email-starter\\\\emails\\\\plaid-verify-identity.tsx\",\n                lineNumber: 27,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ancea\\\\Desktop\\\\pet-shop\\\\react-email-starter\\\\emails\\\\plaid-verify-identity.tsx\",\n        lineNumber: 25,\n        columnNumber: 3\n    }, undefined);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlaidVerifyIdentityEmail);\nconst main = {\n    backgroundColor: \"#ffffff\",\n    fontFamily: \"HelveticaNeue,Helvetica,Arial,sans-serif\"\n};\nconst container = {\n    backgroundColor: \"#ffffff\",\n    border: \"1px solid #eee\",\n    borderRadius: \"5px\",\n    boxShadow: \"0 5px 10px rgba(20,50,70,.2)\",\n    marginTop: \"20px\",\n    width: \"360px\",\n    margin: \"0 auto\",\n    padding: \"68px 0 130px\"\n};\nconst logo = {\n    margin: \"0 auto\"\n};\nconst tertiary = {\n    color: \"#0a85ea\",\n    fontSize: \"11px\",\n    fontWeight: 700,\n    fontFamily: \"HelveticaNeue,Helvetica,Arial,sans-serif\",\n    height: \"16px\",\n    letterSpacing: \"0\",\n    lineHeight: \"16px\",\n    margin: \"16px 8px 8px 8px\",\n    textTransform: \"uppercase\",\n    textAlign: \"center\"\n};\nconst secondary = {\n    color: \"#000\",\n    display: \"inline-block\",\n    fontFamily: \"HelveticaNeue-Medium,Helvetica,Arial,sans-serif\",\n    fontSize: \"20px\",\n    fontWeight: 500,\n    lineHeight: \"24px\",\n    marginBottom: \"0\",\n    marginTop: \"0\",\n    textAlign: \"center\"\n};\nconst codeContainer = {\n    background: \"rgba(0,0,0,.05)\",\n    borderRadius: \"4px\",\n    margin: \"16px auto 14px\",\n    verticalAlign: \"middle\",\n    width: \"280px\"\n};\nconst code = {\n    color: \"#000\",\n    display: \"inline-block\",\n    fontFamily: \"HelveticaNeue-Bold\",\n    fontSize: \"32px\",\n    fontWeight: 700,\n    letterSpacing: \"6px\",\n    lineHeight: \"40px\",\n    paddingBottom: \"8px\",\n    paddingTop: \"8px\",\n    margin: \"0 auto\",\n    width: \"100%\",\n    textAlign: \"center\"\n};\nconst paragraph = {\n    color: \"#444\",\n    fontSize: \"15px\",\n    fontFamily: \"HelveticaNeue,Helvetica,Arial,sans-serif\",\n    letterSpacing: \"0\",\n    lineHeight: \"23px\",\n    padding: \"0 40px\",\n    margin: \"0\",\n    textAlign: \"center\"\n};\nconst link = {\n    color: \"#444\",\n    textDecoration: \"underline\"\n};\nconst footer = {\n    color: \"#000\",\n    fontSize: \"12px\",\n    fontWeight: 800,\n    letterSpacing: \"0\",\n    lineHeight: \"23px\",\n    margin: \"0\",\n    marginTop: \"20px\",\n    fontFamily: \"HelveticaNeue,Helvetica,Arial,sans-serif\",\n    textAlign: \"center\",\n    textTransform: \"uppercase\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vZW1haWxzL3BsYWlkLXZlcmlmeS1pZGVudGl0eS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBVWlDO0FBQ0Y7QUFNL0IsTUFBTVUsVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxVQUFVLEdBQ2xDLENBQUMsUUFBUSxFQUFFRixRQUFRQyxHQUFHLENBQUNDLFVBQVUsQ0FBQyxDQUFDLEdBQ25DLEVBQUU7QUFFQyxNQUFNQywyQkFBMkIsQ0FBQyxFQUN2Q0MsZ0JBQWlCLFNBQVEsRUFDSyxpQkFDOUIsOERBQUNYLHlEQUFJQTs7MEJBQ0gsOERBQUNGLHlEQUFJQTs7Ozs7MEJBQ0wsOERBQUNGLHlEQUFJQTtnQkFBQ2dCLE9BQU9DOztrQ0FDWCw4REFBQ2hCLDhEQUFTQTt3QkFBQ2UsT0FBT0U7OzBDQUNoQiw4REFBQ2Isd0RBQUdBO2dDQUNGYyxLQUFLLENBQUMsRUFBRVQsUUFBUSxzQkFBc0IsQ0FBQztnQ0FDdkNVLE9BQU07Z0NBQ05DLFFBQU87Z0NBQ1BDLEtBQUk7Z0NBQ0pOLE9BQU9POzs7Ozs7MENBRVQsOERBQUNmLHlEQUFJQTtnQ0FBQ1EsT0FBT1E7MENBQVU7Ozs7OzswQ0FDdkIsOERBQUNyQiw0REFBT0E7Z0NBQUNhLE9BQU9TOzBDQUFXOzs7Ozs7MENBRzNCLDhEQUFDbEIsNERBQU9BO2dDQUFDUyxPQUFPVTswQ0FDZCw0RUFBQ2xCLHlEQUFJQTtvQ0FBQ1EsT0FBT1c7OENBQU9aOzs7Ozs7Ozs7OzswQ0FFdEIsOERBQUNQLHlEQUFJQTtnQ0FBQ1EsT0FBT1k7MENBQVc7Ozs7OzswQ0FDeEIsOERBQUNwQix5REFBSUE7Z0NBQUNRLE9BQU9ZOztvQ0FBVztvQ0FDZDtrREFDUiw4REFBQ3RCLHlEQUFJQTt3Q0FBQ3VCLE1BQUs7d0NBQXlCYixPQUFPYztrREFBTTs7Ozs7O29DQUV6QztvQ0FBSTs7Ozs7Ozs7Ozs7OztrQ0FJaEIsOERBQUN0Qix5REFBSUE7d0JBQUNRLE9BQU9lO2tDQUFROzs7Ozs7Ozs7Ozs7Ozs7OztrQkFHekI7QUFFRixpRUFBZWpCLHdCQUF3QkEsRUFBQztBQUV4QyxNQUFNRyxPQUFPO0lBQ1hlLGlCQUFpQjtJQUNqQkMsWUFBWTtBQUNkO0FBRUEsTUFBTWYsWUFBWTtJQUNoQmMsaUJBQWlCO0lBQ2pCRSxRQUFRO0lBQ1JDLGNBQWM7SUFDZEMsV0FBVztJQUNYQyxXQUFXO0lBQ1hqQixPQUFPO0lBQ1BrQixRQUFRO0lBQ1JDLFNBQVM7QUFDWDtBQUVBLE1BQU1oQixPQUFPO0lBQ1hlLFFBQVE7QUFDVjtBQUVBLE1BQU1kLFdBQVc7SUFDZmdCLE9BQU87SUFDUEMsVUFBVTtJQUNWQyxZQUFZO0lBQ1pULFlBQVk7SUFDWlosUUFBUTtJQUNSc0IsZUFBZTtJQUNmQyxZQUFZO0lBQ1pOLFFBQVE7SUFDUk8sZUFBZTtJQUNmQyxXQUFXO0FBQ2I7QUFFQSxNQUFNckIsWUFBWTtJQUNoQmUsT0FBTztJQUNQTyxTQUFTO0lBQ1RkLFlBQVk7SUFDWlEsVUFBVTtJQUNWQyxZQUFZO0lBQ1pFLFlBQVk7SUFDWkksY0FBYztJQUNkWCxXQUFXO0lBQ1hTLFdBQVc7QUFDYjtBQUVBLE1BQU1wQixnQkFBZ0I7SUFDcEJ1QixZQUFZO0lBQ1pkLGNBQWM7SUFDZEcsUUFBUTtJQUNSWSxlQUFlO0lBQ2Y5QixPQUFPO0FBQ1Q7QUFFQSxNQUFNTyxPQUFPO0lBQ1hhLE9BQU87SUFDUE8sU0FBUztJQUNUZCxZQUFZO0lBQ1pRLFVBQVU7SUFDVkMsWUFBWTtJQUNaQyxlQUFlO0lBQ2ZDLFlBQVk7SUFDWk8sZUFBZTtJQUNmQyxZQUFZO0lBQ1pkLFFBQVE7SUFDUmxCLE9BQU87SUFDUDBCLFdBQVc7QUFDYjtBQUVBLE1BQU1sQixZQUFZO0lBQ2hCWSxPQUFPO0lBQ1BDLFVBQVU7SUFDVlIsWUFBWTtJQUNaVSxlQUFlO0lBQ2ZDLFlBQVk7SUFDWkwsU0FBUztJQUNURCxRQUFRO0lBQ1JRLFdBQVc7QUFDYjtBQUVBLE1BQU1oQixPQUFPO0lBQ1hVLE9BQU87SUFDUGEsZ0JBQWdCO0FBQ2xCO0FBRUEsTUFBTXRCLFNBQVM7SUFDYlMsT0FBTztJQUNQQyxVQUFVO0lBQ1ZDLFlBQVk7SUFDWkMsZUFBZTtJQUNmQyxZQUFZO0lBQ1pOLFFBQVE7SUFDUkQsV0FBVztJQUNYSixZQUFZO0lBQ1phLFdBQVc7SUFDWEQsZUFBZTtBQUNqQiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LWVtYWlsLWNsaWVudC8uLi9lbWFpbHMvcGxhaWQtdmVyaWZ5LWlkZW50aXR5LnRzeD8wODJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJvZHksXG4gIENvbnRhaW5lcixcbiAgSGVhZCxcbiAgSGVhZGluZyxcbiAgSHRtbCxcbiAgSW1nLFxuICBMaW5rLFxuICBTZWN0aW9uLFxuICBUZXh0LFxufSBmcm9tICdAcmVhY3QtZW1haWwvY29tcG9uZW50cyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBQbGFpZFZlcmlmeUlkZW50aXR5RW1haWxQcm9wcyB7XG4gIHZhbGlkYXRpb25Db2RlPzogc3RyaW5nO1xufVxuXG5jb25zdCBiYXNlVXJsID0gcHJvY2Vzcy5lbnYuVkVSQ0VMX1VSTFxuICA/IGBodHRwczovLyR7cHJvY2Vzcy5lbnYuVkVSQ0VMX1VSTH1gXG4gIDogJyc7XG5cbmV4cG9ydCBjb25zdCBQbGFpZFZlcmlmeUlkZW50aXR5RW1haWwgPSAoe1xuICB2YWxpZGF0aW9uQ29kZSA9ICcxNDQ4MzMnLFxufTogUGxhaWRWZXJpZnlJZGVudGl0eUVtYWlsUHJvcHMpID0+IChcbiAgPEh0bWw+XG4gICAgPEhlYWQgLz5cbiAgICA8Qm9keSBzdHlsZT17bWFpbn0+XG4gICAgICA8Q29udGFpbmVyIHN0eWxlPXtjb250YWluZXJ9PlxuICAgICAgICA8SW1nXG4gICAgICAgICAgc3JjPXtgJHtiYXNlVXJsfS9zdGF0aWMvcGxhaWQtbG9nby5wbmdgfVxuICAgICAgICAgIHdpZHRoPVwiMjEyXCJcbiAgICAgICAgICBoZWlnaHQ9XCI4OFwiXG4gICAgICAgICAgYWx0PVwiUGxhaWRcIlxuICAgICAgICAgIHN0eWxlPXtsb2dvfVxuICAgICAgICAvPlxuICAgICAgICA8VGV4dCBzdHlsZT17dGVydGlhcnl9PlZlcmlmeSBZb3VyIElkZW50aXR5PC9UZXh0PlxuICAgICAgICA8SGVhZGluZyBzdHlsZT17c2Vjb25kYXJ5fT5cbiAgICAgICAgICBFbnRlciB0aGUgZm9sbG93aW5nIGNvZGUgdG8gZmluaXNoIGxpbmtpbmcgVmVubW8uXG4gICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgPFNlY3Rpb24gc3R5bGU9e2NvZGVDb250YWluZXJ9PlxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtjb2RlfT57dmFsaWRhdGlvbkNvZGV9PC9UZXh0PlxuICAgICAgICA8L1NlY3Rpb24+XG4gICAgICAgIDxUZXh0IHN0eWxlPXtwYXJhZ3JhcGh9Pk5vdCBleHBlY3RpbmcgdGhpcyBlbWFpbD88L1RleHQ+XG4gICAgICAgIDxUZXh0IHN0eWxlPXtwYXJhZ3JhcGh9PlxuICAgICAgICAgIENvbnRhY3R7JyAnfVxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJtYWlsdG86bG9naW5AcGxhaWQuY29tXCIgc3R5bGU9e2xpbmt9PlxuICAgICAgICAgICAgbG9naW5AcGxhaWQuY29tXG4gICAgICAgICAgPC9MaW5rPnsnICd9XG4gICAgICAgICAgaWYgeW91IGRpZCBub3QgcmVxdWVzdCB0aGlzIGNvZGUuXG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPFRleHQgc3R5bGU9e2Zvb3Rlcn0+U2VjdXJlbHkgcG93ZXJlZCBieSBQbGFpZC48L1RleHQ+XG4gICAgPC9Cb2R5PlxuICA8L0h0bWw+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQbGFpZFZlcmlmeUlkZW50aXR5RW1haWw7XG5cbmNvbnN0IG1haW4gPSB7XG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxuICBmb250RmFtaWx5OiAnSGVsdmV0aWNhTmV1ZSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZicsXG59O1xuXG5jb25zdCBjb250YWluZXIgPSB7XG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxuICBib3JkZXI6ICcxcHggc29saWQgI2VlZScsXG4gIGJvcmRlclJhZGl1czogJzVweCcsXG4gIGJveFNoYWRvdzogJzAgNXB4IDEwcHggcmdiYSgyMCw1MCw3MCwuMiknLFxuICBtYXJnaW5Ub3A6ICcyMHB4JyxcbiAgd2lkdGg6ICczNjBweCcsXG4gIG1hcmdpbjogJzAgYXV0bycsXG4gIHBhZGRpbmc6ICc2OHB4IDAgMTMwcHgnLFxufTtcblxuY29uc3QgbG9nbyA9IHtcbiAgbWFyZ2luOiAnMCBhdXRvJyxcbn07XG5cbmNvbnN0IHRlcnRpYXJ5ID0ge1xuICBjb2xvcjogJyMwYTg1ZWEnLFxuICBmb250U2l6ZTogJzExcHgnLFxuICBmb250V2VpZ2h0OiA3MDAsXG4gIGZvbnRGYW1pbHk6ICdIZWx2ZXRpY2FOZXVlLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmJyxcbiAgaGVpZ2h0OiAnMTZweCcsXG4gIGxldHRlclNwYWNpbmc6ICcwJyxcbiAgbGluZUhlaWdodDogJzE2cHgnLFxuICBtYXJnaW46ICcxNnB4IDhweCA4cHggOHB4JyxcbiAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScgYXMgY29uc3QsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicgYXMgY29uc3QsXG59O1xuXG5jb25zdCBzZWNvbmRhcnkgPSB7XG4gIGNvbG9yOiAnIzAwMCcsXG4gIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICBmb250RmFtaWx5OiAnSGVsdmV0aWNhTmV1ZS1NZWRpdW0sSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYnLFxuICBmb250U2l6ZTogJzIwcHgnLFxuICBmb250V2VpZ2h0OiA1MDAsXG4gIGxpbmVIZWlnaHQ6ICcyNHB4JyxcbiAgbWFyZ2luQm90dG9tOiAnMCcsXG4gIG1hcmdpblRvcDogJzAnLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInIGFzIGNvbnN0LFxufTtcblxuY29uc3QgY29kZUNvbnRhaW5lciA9IHtcbiAgYmFja2dyb3VuZDogJ3JnYmEoMCwwLDAsLjA1KScsXG4gIGJvcmRlclJhZGl1czogJzRweCcsXG4gIG1hcmdpbjogJzE2cHggYXV0byAxNHB4JyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIHdpZHRoOiAnMjgwcHgnLFxufTtcblxuY29uc3QgY29kZSA9IHtcbiAgY29sb3I6ICcjMDAwJyxcbiAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gIGZvbnRGYW1pbHk6ICdIZWx2ZXRpY2FOZXVlLUJvbGQnLFxuICBmb250U2l6ZTogJzMycHgnLFxuICBmb250V2VpZ2h0OiA3MDAsXG4gIGxldHRlclNwYWNpbmc6ICc2cHgnLFxuICBsaW5lSGVpZ2h0OiAnNDBweCcsXG4gIHBhZGRpbmdCb3R0b206ICc4cHgnLFxuICBwYWRkaW5nVG9wOiAnOHB4JyxcbiAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyBhcyBjb25zdCxcbn07XG5cbmNvbnN0IHBhcmFncmFwaCA9IHtcbiAgY29sb3I6ICcjNDQ0JyxcbiAgZm9udFNpemU6ICcxNXB4JyxcbiAgZm9udEZhbWlseTogJ0hlbHZldGljYU5ldWUsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYnLFxuICBsZXR0ZXJTcGFjaW5nOiAnMCcsXG4gIGxpbmVIZWlnaHQ6ICcyM3B4JyxcbiAgcGFkZGluZzogJzAgNDBweCcsXG4gIG1hcmdpbjogJzAnLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInIGFzIGNvbnN0LFxufTtcblxuY29uc3QgbGluayA9IHtcbiAgY29sb3I6ICcjNDQ0JyxcbiAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLFxufTtcblxuY29uc3QgZm9vdGVyID0ge1xuICBjb2xvcjogJyMwMDAnLFxuICBmb250U2l6ZTogJzEycHgnLFxuICBmb250V2VpZ2h0OiA4MDAsXG4gIGxldHRlclNwYWNpbmc6ICcwJyxcbiAgbGluZUhlaWdodDogJzIzcHgnLFxuICBtYXJnaW46ICcwJyxcbiAgbWFyZ2luVG9wOiAnMjBweCcsXG4gIGZvbnRGYW1pbHk6ICdIZWx2ZXRpY2FOZXVlLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmJyxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyBhcyBjb25zdCxcbiAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScgYXMgY29uc3QsXG59O1xuIl0sIm5hbWVzIjpbIkJvZHkiLCJDb250YWluZXIiLCJIZWFkIiwiSGVhZGluZyIsIkh0bWwiLCJJbWciLCJMaW5rIiwiU2VjdGlvbiIsIlRleHQiLCJSZWFjdCIsImJhc2VVcmwiLCJwcm9jZXNzIiwiZW52IiwiVkVSQ0VMX1VSTCIsIlBsYWlkVmVyaWZ5SWRlbnRpdHlFbWFpbCIsInZhbGlkYXRpb25Db2RlIiwic3R5bGUiLCJtYWluIiwiY29udGFpbmVyIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJsb2dvIiwidGVydGlhcnkiLCJzZWNvbmRhcnkiLCJjb2RlQ29udGFpbmVyIiwiY29kZSIsInBhcmFncmFwaCIsImhyZWYiLCJsaW5rIiwiZm9vdGVyIiwiYmFja2dyb3VuZENvbG9yIiwiZm9udEZhbWlseSIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsIm1hcmdpblRvcCIsIm1hcmdpbiIsInBhZGRpbmciLCJjb2xvciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxldHRlclNwYWNpbmciLCJsaW5lSGVpZ2h0IiwidGV4dFRyYW5zZm9ybSIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJtYXJnaW5Cb3R0b20iLCJiYWNrZ3JvdW5kIiwidmVydGljYWxBbGlnbiIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nVG9wIiwidGV4dERlY29yYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../emails/plaid-verify-identity.tsx\n");

/***/ })

};
;