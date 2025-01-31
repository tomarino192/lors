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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/auth */ \"./src/utils/auth.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_auth__WEBPACK_IMPORTED_MODULE_3__]);\n_utils_auth__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n// Маршруты, доступные без аутентификации\nconst publicRoutes = [\n    '/auth/signin',\n    '/auth/signup'\n];\n// Маршруты для разных ролей\nconst roleRoutes = {\n    ADMIN: [\n        '/admin',\n        '/dashboard'\n    ],\n    BO: [\n        '/business',\n        '/dashboard'\n    ],\n    BE: [\n        '/employee',\n        '/dashboard'\n    ]\n};\nfunction MyApp({ Component, pageProps }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"MyApp.useEffect\": ()=>{\n            // Проверка авторизации при каждом изменении маршрута\n            const checkAuth = {\n                \"MyApp.useEffect.checkAuth\": ()=>{\n                    // Разрешаем доступ к публичным маршрутам\n                    if (publicRoutes.includes(router.pathname)) {\n                        setIsLoading(false);\n                        return;\n                    }\n                    // Проверяем аутентификацию\n                    if (!(0,_utils_auth__WEBPACK_IMPORTED_MODULE_3__.isAuthenticated)()) {\n                        router.push('/auth/signin');\n                        return;\n                    }\n                    // Проверяем права доступа на основе роли\n                    const userRole = (0,_utils_auth__WEBPACK_IMPORTED_MODULE_3__.getUserRole)();\n                    const allowedRoutes = roleRoutes[userRole] || [];\n                    const hasAccess = allowedRoutes.some({\n                        \"MyApp.useEffect.checkAuth.hasAccess\": (route)=>router.pathname.startsWith(route)\n                    }[\"MyApp.useEffect.checkAuth.hasAccess\"]);\n                    if (!hasAccess) {\n                        router.push('/dashboard');\n                    }\n                    setIsLoading(false);\n                }\n            }[\"MyApp.useEffect.checkAuth\"];\n            checkAuth();\n        }\n    }[\"MyApp.useEffect\"], [\n        router.pathname\n    ]);\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center justify-center min-h-screen\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\grege\\\\Desktop\\\\Panelka\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\grege\\\\Desktop\\\\Panelka\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 54,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\grege\\\\Desktop\\\\Panelka\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 59,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNKO0FBQ29CO0FBQzdCO0FBRS9CLHlDQUF5QztBQUN6QyxNQUFNSyxlQUFlO0lBQUM7SUFBZ0I7Q0FBZTtBQUVyRCw0QkFBNEI7QUFDNUIsTUFBTUMsYUFBYTtJQUNqQkMsT0FBTztRQUFDO1FBQVU7S0FBYTtJQUMvQkMsSUFBSTtRQUFDO1FBQWE7S0FBYTtJQUMvQkMsSUFBSTtRQUFDO1FBQWE7S0FBYTtBQUNqQztBQUVBLFNBQVNDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDckMsTUFBTUMsU0FBU1gsc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ1ksV0FBV0MsYUFBYSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUUzQ0QsZ0RBQVNBOzJCQUFDO1lBQ1IscURBQXFEO1lBQ3JELE1BQU1nQjs2Q0FBWTtvQkFDaEIseUNBQXlDO29CQUN6QyxJQUFJWCxhQUFhWSxRQUFRLENBQUNKLE9BQU9LLFFBQVEsR0FBRzt3QkFDMUNILGFBQWE7d0JBQ2I7b0JBQ0Y7b0JBRUEsMkJBQTJCO29CQUMzQixJQUFJLENBQUNaLDREQUFlQSxJQUFJO3dCQUN0QlUsT0FBT00sSUFBSSxDQUFDO3dCQUNaO29CQUNGO29CQUVBLHlDQUF5QztvQkFDekMsTUFBTUMsV0FBV2hCLHdEQUFXQTtvQkFDNUIsTUFBTWlCLGdCQUFnQmYsVUFBVSxDQUFDYyxTQUFTLElBQUksRUFBRTtvQkFFaEQsTUFBTUUsWUFBWUQsY0FBY0UsSUFBSTsrREFBQ0MsQ0FBQUEsUUFDbkNYLE9BQU9LLFFBQVEsQ0FBQ08sVUFBVSxDQUFDRDs7b0JBRzdCLElBQUksQ0FBQ0YsV0FBVzt3QkFDZFQsT0FBT00sSUFBSSxDQUFDO29CQUNkO29CQUVBSixhQUFhO2dCQUNmOztZQUVBQztRQUNGOzBCQUFHO1FBQUNILE9BQU9LLFFBQVE7S0FBQztJQUVwQixJQUFJSixXQUFXO1FBQ2IscUJBQU8sOERBQUNZO1lBQUlDLFdBQVU7c0JBQ3BCLDRFQUFDRDtnQkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7SUFFbkI7SUFFQSxxQkFBTyw4REFBQ2hCO1FBQVcsR0FBR0MsU0FBUzs7Ozs7O0FBQ2pDO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZ3JlZ2VcXERlc2t0b3BcXFBhbmVsa2FcXHNyY1xccGFnZXNcXF9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBpc0F1dGhlbnRpY2F0ZWQsIGdldFVzZXJSb2xlIH0gZnJvbSAnQC91dGlscy9hdXRoJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xyXG5cclxuLy8g0JzQsNGA0YjRgNGD0YLRiywg0LTQvtGB0YLRg9C/0L3Ri9C1INCx0LXQtyDQsNGD0YLQtdC90YLQuNGE0LjQutCw0YbQuNC4XHJcbmNvbnN0IHB1YmxpY1JvdXRlcyA9IFsnL2F1dGgvc2lnbmluJywgJy9hdXRoL3NpZ251cCddO1xyXG5cclxuLy8g0JzQsNGA0YjRgNGD0YLRiyDQtNC70Y8g0YDQsNC30L3Ri9GFINGA0L7Qu9C10LlcclxuY29uc3Qgcm9sZVJvdXRlcyA9IHtcclxuICBBRE1JTjogWycvYWRtaW4nLCAnL2Rhc2hib2FyZCddLFxyXG4gIEJPOiBbJy9idXNpbmVzcycsICcvZGFzaGJvYXJkJ10sXHJcbiAgQkU6IFsnL2VtcGxveWVlJywgJy9kYXNoYm9hcmQnXVxyXG59O1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8g0J/RgNC+0LLQtdGA0LrQsCDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4INC/0YDQuCDQutCw0LbQtNC+0Lwg0LjQt9C80LXQvdC10L3QuNC4INC80LDRgNGI0YDRg9GC0LBcclxuICAgIGNvbnN0IGNoZWNrQXV0aCA9ICgpID0+IHtcclxuICAgICAgLy8g0KDQsNC30YDQtdGI0LDQtdC8INC00L7RgdGC0YPQvyDQuiDQv9GD0LHQu9C40YfQvdGL0Lwg0LzQsNGA0YjRgNGD0YLQsNC8XHJcbiAgICAgIGlmIChwdWJsaWNSb3V0ZXMuaW5jbHVkZXMocm91dGVyLnBhdGhuYW1lKSkge1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyDQn9GA0L7QstC10YDRj9C10Lwg0LDRg9GC0LXQvdGC0LjRhNC40LrQsNGG0LjRjlxyXG4gICAgICBpZiAoIWlzQXV0aGVudGljYXRlZCgpKSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9hdXRoL3NpZ25pbicpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8g0J/RgNC+0LLQtdGA0Y/QtdC8INC/0YDQsNCy0LAg0LTQvtGB0YLRg9C/0LAg0L3QsCDQvtGB0L3QvtCy0LUg0YDQvtC70LhcclxuICAgICAgY29uc3QgdXNlclJvbGUgPSBnZXRVc2VyUm9sZSgpO1xyXG4gICAgICBjb25zdCBhbGxvd2VkUm91dGVzID0gcm9sZVJvdXRlc1t1c2VyUm9sZV0gfHwgW107XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBoYXNBY2Nlc3MgPSBhbGxvd2VkUm91dGVzLnNvbWUocm91dGUgPT4gXHJcbiAgICAgICAgcm91dGVyLnBhdGhuYW1lLnN0YXJ0c1dpdGgocm91dGUpXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAoIWhhc0FjY2Vzcykge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNoZWNrQXV0aCgpO1xyXG4gIH0sIFtyb3V0ZXIucGF0aG5hbWVdKTtcclxuXHJcbiAgaWYgKGlzTG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZS1zcGluIHJvdW5kZWQtZnVsbCBoLTggdy04IGJvcmRlci1iLTIgYm9yZGVyLWdyYXktOTAwXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiaXNBdXRoZW50aWNhdGVkIiwiZ2V0VXNlclJvbGUiLCJwdWJsaWNSb3V0ZXMiLCJyb2xlUm91dGVzIiwiQURNSU4iLCJCTyIsIkJFIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJjaGVja0F1dGgiLCJpbmNsdWRlcyIsInBhdGhuYW1lIiwicHVzaCIsInVzZXJSb2xlIiwiYWxsb3dlZFJvdXRlcyIsImhhc0FjY2VzcyIsInNvbWUiLCJyb3V0ZSIsInN0YXJ0c1dpdGgiLCJkaXYiLCJjbGFzc05hbWUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/utils/auth.js":
/*!***************************!*\
  !*** ./src/utils/auth.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAuthToken: () => (/* binding */ getAuthToken),\n/* harmony export */   getUserRole: () => (/* binding */ getUserRole),\n/* harmony export */   isAuthenticated: () => (/* binding */ isAuthenticated),\n/* harmony export */   removeAuthToken: () => (/* binding */ removeAuthToken),\n/* harmony export */   setAuthToken: () => (/* binding */ setAuthToken)\n/* harmony export */ });\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jose */ \"jose\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jose__WEBPACK_IMPORTED_MODULE_0__]);\njose__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst setAuthToken = (token)=>{\n    localStorage.setItem('token', token);\n};\nconst getAuthToken = ()=>{\n    return localStorage.getItem('token');\n};\nconst removeAuthToken = ()=>{\n    localStorage.removeItem('token');\n};\nconst isAuthenticated = ()=>{\n    const token = getAuthToken();\n    if (!token) return false;\n    try {\n        const [, payload] = token.split('.');\n        const decodedPayload = JSON.parse(atob(payload));\n        return decodedPayload.exp * 1000 > Date.now();\n    } catch  {\n        return false;\n    }\n};\nconst getUserRole = ()=>{\n    const token = getAuthToken();\n    if (!token) return null;\n    try {\n        const [, payload] = token.split('.');\n        const decodedPayload = JSON.parse(atob(payload));\n        return decodedPayload.role;\n    } catch  {\n        return null;\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBaUM7QUFFMUIsTUFBTUMsZUFBZSxDQUFDQztJQUMzQkMsYUFBYUMsT0FBTyxDQUFDLFNBQVNGO0FBQ2hDLEVBQUU7QUFFSyxNQUFNRyxlQUFlO0lBQzFCLE9BQU9GLGFBQWFHLE9BQU8sQ0FBQztBQUM5QixFQUFFO0FBRUssTUFBTUMsa0JBQWtCO0lBQzdCSixhQUFhSyxVQUFVLENBQUM7QUFDMUIsRUFBRTtBQUVLLE1BQU1DLGtCQUFrQjtJQUM3QixNQUFNUCxRQUFRRztJQUNkLElBQUksQ0FBQ0gsT0FBTyxPQUFPO0lBRW5CLElBQUk7UUFDRixNQUFNLEdBQUdRLFFBQVEsR0FBR1IsTUFBTVMsS0FBSyxDQUFDO1FBQ2hDLE1BQU1DLGlCQUFpQkMsS0FBS0MsS0FBSyxDQUFDQyxLQUFLTDtRQUN2QyxPQUFPRSxlQUFlSSxHQUFHLEdBQUcsT0FBT0MsS0FBS0MsR0FBRztJQUM3QyxFQUFFLE9BQU07UUFDTixPQUFPO0lBQ1Q7QUFDRixFQUFFO0FBRUssTUFBTUMsY0FBYztJQUN6QixNQUFNakIsUUFBUUc7SUFDZCxJQUFJLENBQUNILE9BQU8sT0FBTztJQUVuQixJQUFJO1FBQ0YsTUFBTSxHQUFHUSxRQUFRLEdBQUdSLE1BQU1TLEtBQUssQ0FBQztRQUNoQyxNQUFNQyxpQkFBaUJDLEtBQUtDLEtBQUssQ0FBQ0MsS0FBS0w7UUFDdkMsT0FBT0UsZUFBZVEsSUFBSTtJQUM1QixFQUFFLE9BQU07UUFDTixPQUFPO0lBQ1Q7QUFDRixFQUFFIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGdyZWdlXFxEZXNrdG9wXFxQYW5lbGthXFxzcmNcXHV0aWxzXFxhdXRoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGp3dFZlcmlmeSB9IGZyb20gJ2pvc2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEF1dGhUb2tlbiA9ICh0b2tlbikgPT4ge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBdXRoVG9rZW4gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUF1dGhUb2tlbiA9ICgpID0+IHtcclxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpc0F1dGhlbnRpY2F0ZWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgdG9rZW4gPSBnZXRBdXRoVG9rZW4oKTtcclxuICBpZiAoIXRva2VuKSByZXR1cm4gZmFsc2U7XHJcbiAgXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IFssIHBheWxvYWRdID0gdG9rZW4uc3BsaXQoJy4nKTtcclxuICAgIGNvbnN0IGRlY29kZWRQYXlsb2FkID0gSlNPTi5wYXJzZShhdG9iKHBheWxvYWQpKTtcclxuICAgIHJldHVybiBkZWNvZGVkUGF5bG9hZC5leHAgKiAxMDAwID4gRGF0ZS5ub3coKTtcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlclJvbGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgdG9rZW4gPSBnZXRBdXRoVG9rZW4oKTtcclxuICBpZiAoIXRva2VuKSByZXR1cm4gbnVsbDtcclxuICBcclxuICB0cnkge1xyXG4gICAgY29uc3QgWywgcGF5bG9hZF0gPSB0b2tlbi5zcGxpdCgnLicpO1xyXG4gICAgY29uc3QgZGVjb2RlZFBheWxvYWQgPSBKU09OLnBhcnNlKGF0b2IocGF5bG9hZCkpO1xyXG4gICAgcmV0dXJuIGRlY29kZWRQYXlsb2FkLnJvbGU7XHJcbiAgfSBjYXRjaCB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn07Il0sIm5hbWVzIjpbImp3dFZlcmlmeSIsInNldEF1dGhUb2tlbiIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldEF1dGhUb2tlbiIsImdldEl0ZW0iLCJyZW1vdmVBdXRoVG9rZW4iLCJyZW1vdmVJdGVtIiwiaXNBdXRoZW50aWNhdGVkIiwicGF5bG9hZCIsInNwbGl0IiwiZGVjb2RlZFBheWxvYWQiLCJKU09OIiwicGFyc2UiLCJhdG9iIiwiZXhwIiwiRGF0ZSIsIm5vdyIsImdldFVzZXJSb2xlIiwicm9sZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/auth.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ "jose":
/*!***********************!*\
  !*** external "jose" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = import("jose");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();