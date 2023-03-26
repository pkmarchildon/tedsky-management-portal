"use strict";
(() => {
var exports = {};
exports.id = 180;
exports.ids = [180];
exports.modules = {

/***/ 713:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 892:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(713);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

async function handler(req, res) {
    const { method  } = req;
    switch(method){
        case "GET":
            const items = await getAllItems();
            return res.status(200).json({
                items
            });
        case "POST":
            let newItem = JSON.parse(req.body);
            const returnedCreatedItem = await createItem(newItem);
            return res.status(200).json({
                returnedCreatedItem
            });
        case "PUT":
            let updatedItem = JSON.parse(req.body);
            const returnedUpdatedItem = await updateItem(updatedItem);
            return res.status(200).json({
                returnedUpdatedItem
            });
        case "DELETE":
            let { itemId , category  } = JSON.parse(req.body);
            await deleteItem(itemId, category);
            return res.status(200).json({
                deletedId: itemId
            });
        default:
            throw new Error("Unknown method : " + method);
    }
}
async function getAllItems() {
    const axiosConfig = {
        method: "GET",
        headers: {},
        url: "http://localhost:4001/"
    };
    const res = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])(axiosConfig);
    return res.data;
}
async function createItem(newItem) {
    let { category , ...body } = newItem;
    const axiosConfig = {
        method: "post",
        url: `http://localhost:4001?category=${newItem.category}`,
        data: body
    };
    const res = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])(axiosConfig);
    return res.data;
}
async function updateItem(updatedItem) {
    let { category , ...body } = updatedItem;
    const axiosConfig = {
        method: "put",
        url: `http://localhost:4001?category=${updatedItem.category}`,
        data: body
    };
    const res = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])(axiosConfig);
    return res.data;
}
async function deleteItem(itemId, category) {
    const axiosConfig = {
        method: "delete",
        url: `http://localhost:4001?itemId=${itemId}&category=${category}`
    };
    const res = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])(axiosConfig);
    return res.data;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(892));
module.exports = __webpack_exports__;

})();