(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 853:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Open_Sans_d8c39e', '__Open_Sans_Fallback_d8c39e'","fontStyle":"normal"},
	"className": "__className_d8c39e"
};


/***/ }),

/***/ 37:
/***/ (() => {



/***/ }),

/***/ 764:
/***/ (() => {



/***/ }),

/***/ 924:
/***/ (() => {



/***/ }),

/***/ 698:
/***/ (() => {



/***/ }),

/***/ 364:
/***/ (() => {



/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 668:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"pages/_app.js","import":"Open_Sans","arguments":[{"subsets":["latin"]}],"variableName":"openSans"}
var _app_js_import_Open_Sans_arguments_subsets_latin_variableName_openSans_ = __webpack_require__(853);
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(764);
// EXTERNAL MODULE: ./styles/nav-bar.css
var nav_bar = __webpack_require__(364);
// EXTERNAL MODULE: ./styles/items-table.css
var items_table = __webpack_require__(924);
// EXTERNAL MODULE: ./styles/main-page.css
var main_page = __webpack_require__(698);
// EXTERNAL MODULE: ./styles/action-button.css
var action_button = __webpack_require__(37);
;// CONCATENATED MODULE: ./pages/_app.js








function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            jsx_runtime_.jsx(style_namespaceObject, {
                id: "92c177270705ff9c",
                dynamic: [
                    _app_js_import_Open_Sans_arguments_subsets_latin_variableName_openSans_.style.fontFamily
                ],
                children: `html{font-family:${_app_js_import_Open_Sans_arguments_subsets_latin_variableName_openSans_.style.fontFamily}}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps,
                className: style_namespaceObject.dynamic([
                    [
                        "92c177270705ff9c",
                        [
                            _app_js_import_Open_Sans_arguments_subsets_latin_variableName_openSans_.style.fontFamily
                        ]
                    ]
                ]) + " " + (pageProps && pageProps.className != null && pageProps.className || "")
            })
        ]
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(668));
module.exports = __webpack_exports__;

})();