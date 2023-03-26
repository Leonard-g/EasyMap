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
exports.id = "pages/api/products";
exports.ids = ["pages/api/products"];
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

/***/ "(api)/./pages/api/products/index.js":
/*!*************************************!*\
  !*** ./pages/api/products/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var config_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! config/db */ \"(api)/./config/db.js\");\n\nasync function handler(req, res) {\n    switch(req.method){\n        case \"GET\":\n            return await getProducts(req, res);\n        case \"POST\":\n            return await saveProduct(req, res);\n        default:\n            return res.status(400).send(\"Method not allowed\");\n    }\n};\nconst getProducts = async (req, res)=>{\n    try {\n        const results = await config_db__WEBPACK_IMPORTED_MODULE_0__.pool.query(\"SELECT * FROM product\");\n        return res.status(200).json(results);\n    } catch (error) {\n        return res.status(500).json({\n            error\n        });\n    }\n};\nconst saveProduct = async (req, res)=>{\n    try {\n        const { name , description , price  } = req.body;\n        const result = await config_db__WEBPACK_IMPORTED_MODULE_0__.pool.query(\"INSERT INTO product SET ?\", {\n            name,\n            description,\n            price\n        });\n        return res.status(200).json({\n            ...req.body,\n            id: result.insertId\n        });\n    } catch (error) {\n        return res.status(500).json({\n            message: error.message\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBZ0M7QUFFakIsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQy9DLE1BQU0sQ0FBRUQsR0FBRyxDQUFDRSxNQUFNO1FBQ2hCLElBQUksQ0FBQyxDQUFLO1lBQ1IsTUFBTSxDQUFDLEtBQUssQ0FBQ0MsV0FBVyxDQUFDSCxHQUFHLEVBQUVDLEdBQUc7UUFDbkMsSUFBSSxDQUFDLENBQU07WUFDVCxNQUFNLENBQUMsS0FBSyxDQUFDRyxXQUFXLENBQUNKLEdBQUcsRUFBRUMsR0FBRzs7WUFFakMsTUFBTSxDQUFDQSxHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFvQjs7QUFFdEQsQ0FBQztBQUVELEtBQUssQ0FBQ0gsV0FBVyxVQUFVSCxHQUFHLEVBQUVDLEdBQUcsR0FBSyxDQUFDO0lBQ3ZDLEdBQUcsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDTSxPQUFPLEdBQUcsS0FBSyxDQUFDVCxpREFBVSxDQUFDLENBQXVCO1FBQ3hELE1BQU0sQ0FBQ0csR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxFQUFFSSxJQUFJLENBQUNGLE9BQU87SUFDckMsQ0FBQyxDQUFDLEtBQUssRUFBRUcsS0FBSyxFQUFFLENBQUM7UUFDZixNQUFNLENBQUNULEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsRUFBRUksSUFBSSxDQUFDLENBQUM7WUFBQ0MsS0FBSztRQUFDLENBQUM7SUFDdkMsQ0FBQztBQUNILENBQUM7QUFFRCxLQUFLLENBQUNOLFdBQVcsVUFBVUosR0FBRyxFQUFFQyxHQUFHLEdBQUssQ0FBQztJQUN2QyxHQUFHLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxDQUFDLENBQUNVLElBQUksR0FBRUMsV0FBVyxHQUFFQyxLQUFLLEVBQUMsQ0FBQyxHQUFHYixHQUFHLENBQUNjLElBQUk7UUFFN0MsS0FBSyxDQUFDQyxNQUFNLEdBQUcsS0FBSyxDQUFDakIsaURBQVUsQ0FBQyxDQUEyQiw0QkFBRSxDQUFDO1lBQzVEYSxJQUFJO1lBQ0pDLFdBQVc7WUFDWEMsS0FBSztRQUNQLENBQUM7UUFFRCxNQUFNLENBQUNaLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsRUFBRUksSUFBSSxDQUFDLENBQUM7ZUFBSVQsR0FBRyxDQUFDYyxJQUFJO1lBQUVFLEVBQUUsRUFBRUQsTUFBTSxDQUFDRSxRQUFRO1FBQUMsQ0FBQztJQUNsRSxDQUFDLENBQUMsS0FBSyxFQUFFUCxLQUFLLEVBQUUsQ0FBQztRQUNmLE1BQU0sQ0FBQ1QsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxFQUFFSSxJQUFJLENBQUMsQ0FBQztZQUFDUyxPQUFPLEVBQUVSLEtBQUssQ0FBQ1EsT0FBTztRQUFDLENBQUM7SUFDeEQsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtbXlzcWwtY3J1ZC1tYWluLy4vcGFnZXMvYXBpL3Byb2R1Y3RzL2luZGV4LmpzPzU5NzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcG9vbCB9IGZyb20gXCJjb25maWcvZGJcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBzd2l0Y2ggKHJlcS5tZXRob2QpIHtcbiAgICBjYXNlIFwiR0VUXCI6XG4gICAgICByZXR1cm4gYXdhaXQgZ2V0UHJvZHVjdHMocmVxLCByZXMpO1xuICAgIGNhc2UgXCJQT1NUXCI6XG4gICAgICByZXR1cm4gYXdhaXQgc2F2ZVByb2R1Y3QocmVxLCByZXMpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoXCJNZXRob2Qgbm90IGFsbG93ZWRcIik7XG4gIH1cbn1cblxuY29uc3QgZ2V0UHJvZHVjdHMgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgcG9vbC5xdWVyeShcIlNFTEVDVCAqIEZST00gcHJvZHVjdFwiKTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0cyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3IgfSk7XG4gIH1cbn07XG5cbmNvbnN0IHNhdmVQcm9kdWN0ID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UgfSA9IHJlcS5ib2R5O1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcG9vbC5xdWVyeShcIklOU0VSVCBJTlRPIHByb2R1Y3QgU0VUID9cIiwge1xuICAgICAgbmFtZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgcHJpY2UsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyAuLi5yZXEuYm9keSwgaWQ6IHJlc3VsdC5pbnNlcnRJZCB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbInBvb2wiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZ2V0UHJvZHVjdHMiLCJzYXZlUHJvZHVjdCIsInN0YXR1cyIsInNlbmQiLCJyZXN1bHRzIiwicXVlcnkiLCJqc29uIiwiZXJyb3IiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImJvZHkiLCJyZXN1bHQiLCJpZCIsImluc2VydElkIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/products/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/products/index.js"));
module.exports = __webpack_exports__;

})();