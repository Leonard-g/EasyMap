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
exports.id = "pages/api/products/[id]";
exports.ids = ["pages/api/products/[id]"];
exports.modules = {

/***/ "serverless-mysql":
/*!***********************************!*\
  !*** external "serverless-mysql" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("serverless-mysql");

/***/ }),

/***/ "(api)/./config/db.js":
/*!**********************!*\
  !*** ./config/db.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pool\": () => (/* binding */ pool)\n/* harmony export */ });\n/* harmony import */ var serverless_mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! serverless-mysql */ \"serverless-mysql\");\n/* harmony import */ var serverless_mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(serverless_mysql__WEBPACK_IMPORTED_MODULE_0__);\n\nconst pool = serverless_mysql__WEBPACK_IMPORTED_MODULE_0___default()({\n    config: {\n        host: \"localhost\",\n        user: \"root\",\n        password: \"\",\n        port: 3306,\n        database: \"productsdb\"\n    }\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW9DO0FBRXBDLEtBQUssQ0FBQ0MsSUFBSSxHQUFHRCx1REFBSyxDQUFDLENBQUM7SUFDbEJFLE1BQU0sRUFBRSxDQUFDO1FBQ1BDLElBQUksRUFBRSxDQUFXO1FBQ2pCQyxJQUFJLEVBQUUsQ0FBTTtRQUNaQyxRQUFRLEVBQUUsQ0FBRTtRQUNaQyxJQUFJLEVBQUUsSUFBSTtRQUNWQyxRQUFRLEVBQUUsQ0FBWTtJQUN4QixDQUFDO0FBQ0gsQ0FBQztBQUVlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLW15c3FsLWNydWQtbWFpbi8uL2NvbmZpZy9kYi5qcz9iNDkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBteXNxbCBmcm9tIFwic2VydmVybGVzcy1teXNxbFwiO1xuXG5jb25zdCBwb29sID0gbXlzcWwoe1xuICBjb25maWc6IHtcbiAgICBob3N0OiBcImxvY2FsaG9zdFwiLFxuICAgIHVzZXI6IFwicm9vdFwiLFxuICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgIHBvcnQ6IDMzMDYsXG4gICAgZGF0YWJhc2U6IFwicHJvZHVjdHNkYlwiLFxuICB9LFxufSk7XG5cbmV4cG9ydCB7IHBvb2wgfTtcbiJdLCJuYW1lcyI6WyJteXNxbCIsInBvb2wiLCJjb25maWciLCJob3N0IiwidXNlciIsInBhc3N3b3JkIiwicG9ydCIsImRhdGFiYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./config/db.js\n");

/***/ }),

/***/ "(api)/./pages/api/products/[id].js":
/*!************************************!*\
  !*** ./pages/api/products/[id].js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var config_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! config/db */ \"(api)/./config/db.js\");\n\nasync function handler(req, res) {\n    switch(req.method){\n        case \"GET\":\n            return await getTask(req, res);\n        case \"DELETE\":\n            return await deleteProduct(req, res);\n        case \"PUT\":\n            return await updateProduct(req, res);\n        default:\n            return res.status(400).json({\n                message: \"bad request\"\n            });\n    }\n};\nconst getTask = async (req, res)=>{\n    try {\n        const result = await config_db__WEBPACK_IMPORTED_MODULE_0__.pool.query(\"SELECT * FROM product WHERE id = ?\", [\n            req.query.id, \n        ]);\n        return res.status(200).json(result[0]);\n    } catch (error) {\n        return res.status(500).json({\n            message: error.message\n        });\n    }\n};\nconst deleteProduct = async (req, res)=>{\n    try {\n        await config_db__WEBPACK_IMPORTED_MODULE_0__.pool.query(\"DELETE FROM product WHERE id = ?\", [\n            req.query.id\n        ]);\n        return res.status(204).json();\n    } catch (error) {\n        return res.status(500).json({\n            message: error.message\n        });\n    }\n};\nconst updateProduct = async (req, res)=>{\n    try {\n        console.log(req.body);\n        await config_db__WEBPACK_IMPORTED_MODULE_0__.pool.query(\"UPDATE product SET ? WHERE id = ?\", [\n            req.body,\n            req.query.id, \n        ]);\n        return res.status(204).json();\n    } catch (error) {\n        return res.status(500).json({\n            message: error.message\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFnQztBQUVqQixlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDL0MsTUFBTSxDQUFFRCxHQUFHLENBQUNFLE1BQU07UUFDaEIsSUFBSSxDQUFDLENBQUs7WUFDUixNQUFNLENBQUMsS0FBSyxDQUFDQyxPQUFPLENBQUNILEdBQUcsRUFBRUMsR0FBRztRQUMvQixJQUFJLENBQUMsQ0FBUTtZQUNYLE1BQU0sQ0FBQyxLQUFLLENBQUNHLGFBQWEsQ0FBQ0osR0FBRyxFQUFFQyxHQUFHO1FBQ3JDLElBQUksQ0FBQyxDQUFLO1lBQ1IsTUFBTSxDQUFDLEtBQUssQ0FBQ0ksYUFBYSxDQUFDTCxHQUFHLEVBQUVDLEdBQUc7O1lBRW5DLE1BQU0sQ0FBQ0EsR0FBRyxDQUFDSyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztnQkFBQ0MsT0FBTyxFQUFFLENBQWE7WUFBQyxDQUFDOztBQUU1RCxDQUFDO0FBRUQsS0FBSyxDQUFDTCxPQUFPLFVBQVVILEdBQUcsRUFBRUMsR0FBRyxHQUFLLENBQUM7SUFDbkMsR0FBRyxDQUFDLENBQUM7UUFDSCxLQUFLLENBQUNRLE1BQU0sR0FBRyxLQUFLLENBQUNYLGlEQUFVLENBQUMsQ0FBb0MscUNBQUUsQ0FBQztZQUNyRUUsR0FBRyxDQUFDVSxLQUFLLENBQUNDLEVBQUU7UUFDZCxDQUFDO1FBQ0QsTUFBTSxDQUFDVixHQUFHLENBQUNLLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQyxDQUFDLEtBQUssRUFBRUcsS0FBSyxFQUFFLENBQUM7UUFDZixNQUFNLENBQUNYLEdBQUcsQ0FBQ0ssTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7WUFBQ0MsT0FBTyxFQUFFSSxLQUFLLENBQUNKLE9BQU87UUFBQyxDQUFDO0lBQ3hELENBQUM7QUFDSCxDQUFDO0FBRUQsS0FBSyxDQUFDSixhQUFhLFVBQVVKLEdBQUcsRUFBRUMsR0FBRyxHQUFLLENBQUM7SUFDekMsR0FBRyxDQUFDLENBQUM7UUFDSCxLQUFLLENBQUNILGlEQUFVLENBQUMsQ0FBa0MsbUNBQUUsQ0FBQ0U7WUFBQUEsR0FBRyxDQUFDVSxLQUFLLENBQUNDLEVBQUU7UUFBQSxDQUFDO1FBQ25FLE1BQU0sQ0FBQ1YsR0FBRyxDQUFDSyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJO0lBQzdCLENBQUMsQ0FBQyxLQUFLLEVBQUVLLEtBQUssRUFBRSxDQUFDO1FBQ2YsTUFBTSxDQUFDWCxHQUFHLENBQUNLLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNDLE9BQU8sRUFBRUksS0FBSyxDQUFDSixPQUFPO1FBQUMsQ0FBQztJQUN4RCxDQUFDO0FBQ0gsQ0FBQztBQUVELEtBQUssQ0FBQ0gsYUFBYSxVQUFVTCxHQUFHLEVBQUVDLEdBQUcsR0FBSyxDQUFDO0lBQ3pDLEdBQUcsQ0FBQyxDQUFDO1FBQ0hZLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZCxHQUFHLENBQUNlLElBQUk7UUFDcEIsS0FBSyxDQUFDakIsaURBQVUsQ0FBQyxDQUFtQyxvQ0FBRSxDQUFDO1lBQ3JERSxHQUFHLENBQUNlLElBQUk7WUFDUmYsR0FBRyxDQUFDVSxLQUFLLENBQUNDLEVBQUU7UUFDZCxDQUFDO1FBQ0QsTUFBTSxDQUFDVixHQUFHLENBQUNLLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUk7SUFDN0IsQ0FBQyxDQUFDLEtBQUssRUFBRUssS0FBSyxFQUFFLENBQUM7UUFDZixNQUFNLENBQUNYLEdBQUcsQ0FBQ0ssTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7WUFBQ0MsT0FBTyxFQUFFSSxLQUFLLENBQUNKLE9BQU87UUFBQyxDQUFDO0lBQ3hELENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLW15c3FsLWNydWQtbWFpbi8uL3BhZ2VzL2FwaS9wcm9kdWN0cy9baWRdLmpzPzgyZTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcG9vbCB9IGZyb20gXCJjb25maWcvZGJcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBzd2l0Y2ggKHJlcS5tZXRob2QpIHtcbiAgICBjYXNlIFwiR0VUXCI6XG4gICAgICByZXR1cm4gYXdhaXQgZ2V0VGFzayhyZXEsIHJlcyk7XG4gICAgY2FzZSBcIkRFTEVURVwiOlxuICAgICAgcmV0dXJuIGF3YWl0IGRlbGV0ZVByb2R1Y3QocmVxLCByZXMpO1xuICAgIGNhc2UgXCJQVVRcIjpcbiAgICAgIHJldHVybiBhd2FpdCB1cGRhdGVQcm9kdWN0KHJlcSwgcmVzKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogXCJiYWQgcmVxdWVzdFwiIH0pO1xuICB9XG59XG5cbmNvbnN0IGdldFRhc2sgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwb29sLnF1ZXJ5KFwiU0VMRUNUICogRlJPTSBwcm9kdWN0IFdIRVJFIGlkID0gP1wiLCBbXG4gICAgICByZXEucXVlcnkuaWQsXG4gICAgXSk7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdFswXSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcbiAgfVxufTtcblxuY29uc3QgZGVsZXRlUHJvZHVjdCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IHBvb2wucXVlcnkoXCJERUxFVEUgRlJPTSBwcm9kdWN0IFdIRVJFIGlkID0gP1wiLCBbcmVxLnF1ZXJ5LmlkXSk7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjA0KS5qc29uKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcbiAgfVxufTtcblxuY29uc3QgdXBkYXRlUHJvZHVjdCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KVxuICAgIGF3YWl0IHBvb2wucXVlcnkoXCJVUERBVEUgcHJvZHVjdCBTRVQgPyBXSEVSRSBpZCA9ID9cIiwgW1xuICAgICAgcmVxLmJvZHksXG4gICAgICByZXEucXVlcnkuaWQsXG4gICAgXSk7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjA0KS5qc29uKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJwb29sIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImdldFRhc2siLCJkZWxldGVQcm9kdWN0IiwidXBkYXRlUHJvZHVjdCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwicmVzdWx0IiwicXVlcnkiLCJpZCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/products/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/products/[id].js"));
module.exports = __webpack_exports__;

})();