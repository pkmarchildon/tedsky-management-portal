(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 194:
/***/ ((module) => {

// Exports
module.exports = {
	"actionButton": "action-button_actionButton__MFTxs",
	"deleteButton": "action-button_deleteButton__eRO0m"
};


/***/ }),

/***/ 139:
/***/ ((module) => {

// Exports
module.exports = {
	"createUpdateFormBlur": "createForm_createUpdateFormBlur__9a1Yu",
	"createUpdateFormContainer": "createForm_createUpdateFormContainer__puv0g",
	"updateFormGridContainer": "createForm_updateFormGridContainer__QLGGO",
	"createUpdateFormButtonsContainer": "createForm_createUpdateFormButtonsContainer__7ZGUK",
	"createUpdateFormCancelButton": "createForm_createUpdateFormCancelButton__PTlet",
	"fieldText": "createForm_fieldText__ZsE2_",
	"fieldContaier": "createForm_fieldContaier__a1q86",
	"fieldLabel": "createForm_fieldLabel__jIKWz",
	"fieldInput": "createForm_fieldInput__e_Po0",
	"fill": "createForm_fill__qZP0Y",
	"fieldLabelFloatingLabel": "createForm_fieldLabelFloatingLabel__FPYdM",
	"tagsFieldContainer": "createForm_tagsFieldContainer__CiNMj",
	"tagsContainer": "createForm_tagsContainer__MkLID"
};


/***/ }),

/***/ 150:
/***/ ((module) => {

// Exports
module.exports = {
	"searchBarContainer": "SearchBar_searchBarContainer__ramqb",
	"searchBarIcon": "SearchBar_searchBarIcon__9ZEqH",
	"searchBarInput": "SearchBar_searchBarInput__6_3Jv"
};


/***/ }),

/***/ 661:
/***/ ((module) => {

// Exports
module.exports = {
	"searchItemContainer": "search-item_searchItemContainer__nTqEt",
	"searchItemCategoryMarker": "search-item_searchItemCategoryMarker__fTDlb"
};


/***/ }),

/***/ 650:
/***/ ((module) => {

// Exports
module.exports = {
	"tagContainer": "tag_tagContainer__v4Ehj"
};


/***/ }),

/***/ 918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 882:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./providers/reducers.js
function _removeTag(tagToRemove, tags) {
    const tagToRemoveIndex = tags.findIndex((tag)=>tag === tagToRemove);
    if (tagToRemoveIndex === -1) {
        throw Error("Couldn't find tag: " + tagToRemove);
    } else {
        tags.splice(tagToRemoveIndex, 1);
    }
}
function _addTag(tagToAdd, tags) {
    if (tags) {
        return [
            ...tags,
            tagToAdd
        ];
    } else {
        return [
            tagToAdd
        ];
    }
}
function fieldReducer(initialData, action) {
    switch(action.type){
        case "create":
            {
                const { name , value  } = action.data;
                return {
                    ...initialData,
                    [name]: value
                };
            }
        case "addTag":
            {
                initialData.tags = _addTag(action.data, initialData.tags);
                return {
                    ...initialData
                };
            }
        case "removeTag":
            {
                _removeTag(action.data, initialData.tags);
                return {
                    ...initialData
                };
            }
        default:
            {
                throw Error("Unknown action: " + action.type);
            }
    }
}
function _updateItem(items, updatedItem) {
    const { itemId  } = updatedItem;
    const itemIndex = items.findIndex((item)=>item.itemId === itemId);
    items[itemIndex] = updatedItem;
}
function _deleteItem(items, itemId) {
    const itemIndex = items.findIndex((item)=>item.itemId === itemId);
    items.splice(itemIndex, 1);
}
function itemReducer(initialData, action) {
    switch(action.type){
        case "add":
            {
                const item = action.data;
                return [
                    ...initialData,
                    item
                ];
            }
        case "update":
            {
                const updatedItem = action.data;
                _updateItem(initialData, updatedItem);
                return [
                    ...initialData
                ];
            }
        case "delete":
            {
                const itemId = action.data;
                _deleteItem(initialData, itemId);
                return [
                    ...initialData
                ];
            }
        default:
            {
                throw Error("Unknown action: " + action.type);
            }
    }
}

;// CONCATENATED MODULE: ./providers/formatters.js
function moneyFormatter(amountInCents) {
    const moneyFormatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "CAD",
        minimumFractionDigits: 2
    });
    /*
      Return an array with objects (type, value):
    */ const parts = moneyFormatter.formatToParts(amountInCents / 100);
    let moneyString = "";
    parts.forEach((element)=>{
        if (element.type === "integer" || element.type === "group" || element.type === "decimal" || element.type === "fraction") {
            moneyString = moneyString.concat(element.value);
        }
    });
    moneyString = moneyString.concat("$");
    return moneyString;
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function toStringMonthFrench(numericalMonth) {
    // 0 = janvier
    if (numericalMonth === 0) return "janvier";
    if (numericalMonth === 1) return "f\xe9vrier";
    if (numericalMonth === 2) return "mars";
    if (numericalMonth === 3) return "avril";
    if (numericalMonth === 4) return "mai";
    if (numericalMonth === 5) return "juin";
    if (numericalMonth === 6) return "juillet";
    if (numericalMonth === 7) return "ao\xfbt";
    if (numericalMonth === 8) return "septembre";
    if (numericalMonth === 9) return "octobre";
    if (numericalMonth === 10) return "novembre";
    if (numericalMonth === 11) return "d\xe9cembre";
}
function dateFormatter(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = toStringMonthFrench(date.getMonth());
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
}
function centsToDollars(amountInCents) {
    return amountInCents / 100;
}
function dollarsToCents(amountInDollars) {
    return amountInDollars * 100;
}
function formDataFormating(event) {
    return {
        name: event.target.name,
        value: event.target.value
    };
}
function tagsFormatter(tags) {}
function formatItemData(item) {
    //console.log(item);
    item.price = moneyFormatter(item.price);
    return item;
}
function itemsFormatter(items) {
    items.forEach((item)=>{
        item = formatItemData(item);
    });
    return items;
}
function formatMoneyStringToCents(moneyString) {
    let newStr = moneyString.split(".");
    newStr[newStr.length - 1] = newStr[newStr.length - 1].slice(0, -1);
    let num = parseFloat(newStr[0].concat(".").concat(newStr[1])).toFixed(2);
    return num;
}
function _monthStringNumber(monthNumerical) {
    let increasedMonth = monthNumerical + 1;
    if (increasedMonth < 10) {
        return `0${increasedMonth}`;
    } else {
        return `${increasedMonth}`;
    }
}
function _dateSelectorFormat(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = _monthStringNumber(date.getMonth());
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
}
function formatUpdatingItem(item) {
    item.price = formatMoneyStringToCents(item.price);
    item.lastUpdated = _dateSelectorFormat(item.lastUpdated);
    return item;
}

;// CONCATENATED MODULE: ./providers/itemOperations.js
async function createNewItem(newItem, dispatch) {
    const res = await fetch(`${"http://localhost:4002/"}api/items`, {
        method: "POST",
        body: JSON.stringify(newItem)
    });
    const { returnedCreatedItem  } = await res.json();
    // Update client items list.
    dispatch({
        type: "add",
        data: returnedCreatedItem
    });
}
async function updateItem(updatedItem, dispatch) {
    const res = await fetch(`${"http://localhost:4002/"}api/items`, {
        method: "PUT",
        body: JSON.stringify(updatedItem)
    });
    const { returnedUpdatedItem  } = await res.json();
    // Update client items list.
    dispatch({
        type: "update",
        data: returnedUpdatedItem
    });
}
async function deleteItem(deleteItem, dispatch) {
    const { itemId , category  } = deleteItem;
    const res = await fetch(`${"http://localhost:4002/"}api/items`, {
        method: "DELETE",
        body: JSON.stringify({
            itemId,
            category
        })
    });
    const { deletedId  } = await res.json();
    // Update client items list.
    dispatch({
        type: "delete",
        data: deletedId
    });
}

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.96767237.svg","height":107,"width":108});
;// CONCATENATED MODULE: ./components/Icons.js

function UserCircle({ color  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "w-6 h-6 icon-container-24",
        style: {
            color: `var(${color})`
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
        })
    });
}
function Modify({ color  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "w-6 h-6 icon-container-24 pointer",
        style: {
            color: `var(${color})`
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
        })
    });
}
function Close({ color , closeAction  }) {
    return /*#__PURE__*/ _jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "w-6 h-6 icon-container-24 pointer",
        style: {
            color: `var(${color})`
        },
        onClick: closeAction,
        children: /*#__PURE__*/ _jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        })
    });
}

// EXTERNAL MODULE: ./components/SearchBar/SearchBar.module.css
var SearchBar_module = __webpack_require__(150);
var SearchBar_module_default = /*#__PURE__*/__webpack_require__.n(SearchBar_module);
;// CONCATENATED MODULE: ./components/SearchBar/SearchBar.jsx


function SearchBar({ idLabel , searchInput , handleLostFocusSearchBar , handleFocusSearchBar  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        className: (SearchBar_module_default()).searchBarContainer,
        action: null,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                className: `w-6 h-6 icon-container-24 ${(SearchBar_module_default()).searchBarIcon}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                id: `searchBar-${idLabel}`,
                className: (SearchBar_module_default()).searchBarInput,
                type: "search",
                placeholder: "Search",
                autoComplete: "off",
                onChange: (e)=>searchInput(e.target.value),
                onBlur: ()=>handleLostFocusSearchBar(`searchBar-${idLabel}`),
                onFocus: handleFocusSearchBar
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/ActionButton/action-button.module.css
var action_button_module = __webpack_require__(194);
var action_button_module_default = /*#__PURE__*/__webpack_require__.n(action_button_module);
;// CONCATENATED MODULE: ./components/ActionButton/ActionButton.jsx


function ActionButton({ text , action  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: `${(action_button_module_default()).actionButton} ${text === "Delete" && (action_button_module_default()).deleteButton}`,
        onClick: action,
        children: text
    });
}

// EXTERNAL MODULE: ./components/SearchItem/search-item.module.css
var search_item_module = __webpack_require__(661);
var search_item_module_default = /*#__PURE__*/__webpack_require__.n(search_item_module);
;// CONCATENATED MODULE: ./components/SearchItem/SearchItem.jsx



function _getMarkerColor(category) {
    switch(category){
        case "meat":
            return "meat-backgroundColor";
        case "vegetables":
            return "vegetables-backgroundColor";
        case "fruits":
            return "fruits-backgroundColor";
        case "condiments":
            return "condiments-backgroundColor";
        case "products":
            return "products-backgroundColor";
        default:
            throw Error("Unknown category: ", category);
    }
}
function SearchItem({ item , selectSearchItem  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `pointer ${(search_item_module_default()).searchItemContainer}`,
        onClick: ()=>selectSearchItem(item),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: `${(search_item_module_default()).searchItemCategoryMarker} ${_getMarkerColor(item.category)}`
            }),
            capitalizeFirstLetter(item.name)
        ]
    });
}

;// CONCATENATED MODULE: ./components/NavBar.jsx




/* Components */ 



function _populateSearchResults(results, selectSearchItem) {
    let returningResults = [];
    results.forEach((result)=>{
        returningResults.push(/*#__PURE__*/ jsx_runtime_.jsx(SearchItem, {
            item: result,
            selectSearchItem: selectSearchItem
        }, result.itemId));
    });
    return returningResults;
}
function NavBar({ handleCreateItem , items , handleSelectedSearchItem  }) {
    const [isSearching, setIsSearching] = (0,external_react_.useState)(false);
    const [filteredItems, setFilteredItems] = (0,external_react_.useState)(items);
    const [isSelectingSearchItem, setIsSelectingSearchItem] = (0,external_react_.useState)(false);
    function _clearSearchBar() {
        let searchBarDOMElement = document.getElementById("searchBar-items");
        searchBarDOMElement.value = "";
        setFilteredItems(items);
    }
    function searchInput(input) {
        let returnedItems = items.filter((item)=>{
            return item.name.toLowerCase().includes(input.toLowerCase());
        });
        setFilteredItems(returnedItems);
    }
    function selectSearchItem(item) {
        setIsSelectingSearchItem(true);
        handleSelectedSearchItem(item);
        setIsSearching(false);
        setIsSelectingSearchItem(false);
        _clearSearchBar();
    }
    function _handleOverSearchItem() {
        setIsSelectingSearchItem(true);
    }
    function _handleOutSearchItem() {
        setIsSelectingSearchItem(false);
    }
    function handleLostFocusSearchBar() {
        if (!isSelectingSearchItem) {
            setIsSearching(false);
            _clearSearchBar();
        }
    }
    function handleFocusSearchBar() {
        setIsSearching(true);
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "navBar-container",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: logo,
                alt: "Tedski",
                priority: "true"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "navBar-itemsContainer",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: " navBar-stackedContainer",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "navBar-title",
                            children: "MANAGEMENT DASHBOARD"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "navBar-legendContainer",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "category-container meat-backgroundColor",
                                    children: "Meat"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "category-container vegetables-backgroundColor",
                                    children: "Vegetables"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "category-container fruits-backgroundColor",
                                    children: "Fruits"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "category-container condiments-backgroundColor",
                                    children: "Condiments"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "category-container products-backgroundColor",
                                    children: "Products"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "navBar-bottomRow-container",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(SearchBar, {
                                    idLabel: "items",
                                    searchInput: searchInput,
                                    handleLostFocusSearchBar: handleLostFocusSearchBar,
                                    handleFocusSearchBar: handleFocusSearchBar
                                }),
                                isSearching && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "navBar-searchResults-divider"
                                }),
                                isSearching && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "items-searchResults-container",
                                    className: "navBar-searchResults-container",
                                    onMouseEnter: _handleOverSearchItem,
                                    onMouseLeave: _handleOutSearchItem,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "navBar-searchResults-gridContainer",
                                        children: _populateSearchResults(filteredItems, selectSearchItem)
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "navBar-itemsContainer",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "navBar-stackedContainer",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "navBar-userContainer",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(UserCircle, {
                                    color: "--neutral-shade-3"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "navBar-userName",
                                    children: "Pierre-Karl"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ActionButton, {
                            text: "CREATE ITEM",
                            action: handleCreateItem
                        })
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"components/CreateUpdateForm/CreateUpdateForm.jsx","import":"Open_Sans","arguments":[{"style":["normal"],"weight":"400","subsets":["latin"],"fallback":["Helvetica Neue","Helvetica","system-ui","Arial"]}],"variableName":"openSans"}
var CreateUpdateForm_jsx_import_Open_Sans_arguments_style_normal_weight_400_subsets_latin_fallback_Helvetica_Neue_Helvetica_system_ui_Arial_variableName_openSans_ = __webpack_require__(459);
var CreateUpdateForm_jsx_import_Open_Sans_arguments_style_normal_weight_400_subsets_latin_fallback_Helvetica_Neue_Helvetica_system_ui_Arial_variableName_openSans_default = /*#__PURE__*/__webpack_require__.n(CreateUpdateForm_jsx_import_Open_Sans_arguments_style_normal_weight_400_subsets_latin_fallback_Helvetica_Neue_Helvetica_system_ui_Arial_variableName_openSans_);
;// CONCATENATED MODULE: ../server/variables.json
const variables_namespaceObject = JSON.parse('{"Dl":[{"value":"kg","label":"kg"},{"value":"lb","label":"lb"},{"value":"g","label":"g"},{"value":"ml","label":"ml"},{"value":"L","label":"L"},{"value":"100g","label":"100g"},{"value":"other","label":"Autre"}],"gg":[{"value":"Adonis","label":"Adonis"},{"value":"Maxi","label":"Maxi"},{"value":"Walmart","label":"Walmart"},{"value":"Super C","label":"Super C"},{"value":"Provigo","label":"Provigo"},{"value":"Metro","label":"Metro"},{"value":"IGA","label":"IGA"},{"value":"Autre","label":"Autre"}],"bd":[{"value":"meat","label":"Meat"},{"value":"vegetables","label":"Vegetables"},{"value":"fruits","label":"Fruits"},{"value":"condiments","label":"Condiments"},{"value":"products","label":"Products"}]}');
// EXTERNAL MODULE: ./components/CreateUpdateForm/createForm.module.css
var createForm_module = __webpack_require__(139);
var createForm_module_default = /*#__PURE__*/__webpack_require__.n(createForm_module);
// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"components/CreateUpdateForm/TextField.jsx","import":"Open_Sans","arguments":[{"style":["normal"],"weight":"400","subsets":["latin"],"fallback":["Helvetica Neue","Helvetica","system-ui","Arial"]}],"variableName":"openSans"}
var TextField_jsx_import_Open_Sans_arguments_style_normal_weight_400_subsets_latin_fallback_Helvetica_Neue_Helvetica_system_ui_Arial_variableName_openSans_ = __webpack_require__(272);
var TextField_jsx_import_Open_Sans_arguments_style_normal_weight_400_subsets_latin_fallback_Helvetica_Neue_Helvetica_system_ui_Arial_variableName_openSans_default = /*#__PURE__*/__webpack_require__.n(TextField_jsx_import_Open_Sans_arguments_style_normal_weight_400_subsets_latin_fallback_Helvetica_Neue_Helvetica_system_ui_Arial_variableName_openSans_);
;// CONCATENATED MODULE: ./components/CreateUpdateForm/TextField.jsx




function floatingLabel(domElement) {
    domElement.style.top = "-18px";
    domElement.style.color = "var(--neutral-shade-5)";
    domElement.style.fontSize = "0.8em";
    domElement.style.left = "10px";
}
function fieldInputTransparent(domElement) {
    domElement.style.backgroundColor = "transparent";
    domElement.style.borderColor = "var(--neutral-shade-2)";
}
function isFieldEmpty(content, labelElement, inputElement) {
    if (content) {
        floatingLabel(labelElement);
        fieldInputTransparent(inputElement);
    } else {
        inputElement.style.backgroundColor = "var(--neutral-shade-2)";
    }
}
function addEventListeners(id) {
    const inputId = `${id}-input`;
    const labelId = `${id}-label`;
    const inputDOMElement = document.getElementById(inputId);
    const labelDOMElement = document.getElementById(labelId);
    inputDOMElement.addEventListener("focus", ()=>{
        labelDOMElement.style.top = "-18px";
        labelDOMElement.style.left = "10px";
        labelDOMElement.style.color = "var(--primary-shade-3)";
        labelDOMElement.style.fontSize = "0.8em";
        labelDOMElement.style.transition = "all ease-in-out 150ms";
        inputDOMElement.style.backgroundColor = "transparent";
    });
    inputDOMElement.addEventListener("blur", (event)=>{
        labelDOMElement.style.top = "25%";
        labelDOMElement.style.left = "20px";
        labelDOMElement.style.color = "var(--neutral-shade-6)";
        labelDOMElement.style.fontSize = "16px";
        isFieldEmpty(event.target.value, labelDOMElement, inputDOMElement);
    });
}
function TextField({ id , label , type , onChange , fieldData , disabled , required  }) {
    const inputId = `${id}-input`;
    const labelId = `${id}-label`;
    (0,external_react_.useEffect)(()=>{
        addEventListeners(id);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("fieldset", {
        className: (createForm_module_default()).fieldContaier,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                id: labelId,
                htmlFor: inputId,
                className: fieldData ? `${(createForm_module_default()).fieldLabel} ${(createForm_module_default()).fill} ${(createForm_module_default()).fieldText}` : `${(createForm_module_default()).fieldLabel} ${(createForm_module_default()).fieldText}`,
                children: label
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                id: inputId,
                name: id,
                type: type,
                className: fieldData ? `${(createForm_module_default()).fieldInput} ${(createForm_module_default()).fill} ${(createForm_module_default()).fieldText}` : `${(createForm_module_default()).fieldInput} ${(createForm_module_default()).fieldText}`,
                onChange: onChange,
                style: {
                    fontFamily: `${(TextField_jsx_import_Open_Sans_arguments_style_normal_weight_400_subsets_latin_fallback_Helvetica_Neue_Helvetica_system_ui_Arial_variableName_openSans_default()).style.fontFamily}`
                },
                required: required,
                value: fieldData || "",
                disabled: disabled || false
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"components/CreateUpdateForm/OptionsField.jsx","import":"Open_Sans","arguments":[{"style":["normal"],"weight":"400","subsets":["latin"],"fallback":["Helvetica Neue","Helvetica","system-ui","Arial"]}],"variableName":"openSans"}
var OptionsField_jsx_import_Open_Sans_arguments_style_normal_weight_400_subsets_latin_fallback_Helvetica_Neue_Helvetica_system_ui_Arial_variableName_openSans_ = __webpack_require__(680);
var OptionsField_jsx_import_Open_Sans_arguments_style_normal_weight_400_subsets_latin_fallback_Helvetica_Neue_Helvetica_system_ui_Arial_variableName_openSans_default = /*#__PURE__*/__webpack_require__.n(OptionsField_jsx_import_Open_Sans_arguments_style_normal_weight_400_subsets_latin_fallback_Helvetica_Neue_Helvetica_system_ui_Arial_variableName_openSans_);
;// CONCATENATED MODULE: ./components/CreateUpdateForm/OptionsField.jsx




function createOptions(options) {
    let fields = [];
    for(let option in options){
        let value = options[option].value;
        fields.push(/*#__PURE__*/ jsx_runtime_.jsx("option", {
            id: value,
            value: value,
            children: options[option].label
        }, value));
    }
    return fields;
}
function OptionsField_fieldInputTransparent(domElement) {
    domElement.style.backgroundColor = "transparent";
    domElement.style.borderColor = "var(--neutral-shade-2)";
}
function OptionsField_addEventListeners(id) {
    const inputId = `${id}-input`;
    const labelId = `${id}-label`;
    const inputDOMElement = document.getElementById(inputId);
    const labelDOMElement = document.getElementById(labelId);
    inputDOMElement.addEventListener("change", ()=>{
        OptionsField_fieldInputTransparent(inputDOMElement);
    });
    inputDOMElement.addEventListener("focus", ()=>{
        labelDOMElement.style.color = "var(--primary-shade-3)";
        labelDOMElement.style.transition = "all ease-in-out 150ms";
    });
    inputDOMElement.addEventListener("blur", ()=>{
        labelDOMElement.style.color = "var(--neutral-shade-6)";
    });
}
function OptionsField({ id , label , options , handleChange , fieldData  }) {
    const inputId = `${id}-input`;
    const labelId = `${id}-label`;
    (0,external_react_.useEffect)(()=>{
        OptionsField_addEventListeners(id);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("fieldset", {
        className: (createForm_module_default()).fieldContaier,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                id: labelId,
                className: (createForm_module_default()).fieldLabelFloatingLabel,
                children: fieldData && label
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                name: id,
                id: inputId,
                onChange: handleChange,
                className: fieldData ? `${(createForm_module_default()).fieldInput} ${(createForm_module_default()).fill} ${(createForm_module_default()).fieldText}` : `${(createForm_module_default()).fieldInput} ${(createForm_module_default()).fieldText}`,
                style: {
                    fontFamily: `${(OptionsField_jsx_import_Open_Sans_arguments_style_normal_weight_400_subsets_latin_fallback_Helvetica_Neue_Helvetica_system_ui_Arial_variableName_openSans_default()).style.fontFamily}`,
                    cursor: "pointer"
                },
                required: true,
                children: [
                    !fieldData ? /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        id: `${id}-emptyOption`,
                        name: `${id}-emptyOption`,
                        value: "",
                        className: (createForm_module_default()).fieldText,
                        children: label
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        id: `${id}-emptyOption`,
                        name: `${id}-emptyOption`,
                        value: fieldData,
                        className: (createForm_module_default()).fieldText,
                        children: fieldData
                    }),
                    createOptions(options)
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/CreateUpdateForm/DateSelector.jsx



function DateSelector_addEventListeners(id) {
    const inputId = `${id}-input`;
    const labelId = `${id}-label`;
    const inputDOMElement = document.getElementById(inputId);
    const labelDOMElement = document.getElementById(labelId);
    inputDOMElement.addEventListener("focus", ()=>{
        labelDOMElement.style.color = "var(--primary-shade-3)";
        labelDOMElement.style.transition = "all ease-in-out 150ms";
    });
    inputDOMElement.addEventListener("blur", ()=>{
        labelDOMElement.style.color = "var(--neutral-shade-6)";
    });
}
function DateSelector({ id , label , handleChange , fieldData  }) {
    const inputId = `${id}-input`;
    const labelId = `${id}-label`;
    (0,external_react_.useEffect)(()=>{
        DateSelector_addEventListeners(id);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("fieldset", {
        className: (createForm_module_default()).fieldContaier,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                id: labelId,
                className: (createForm_module_default()).fieldLabelFloatingLabel,
                children: label
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                id: inputId,
                type: "date",
                className: `${(createForm_module_default()).fieldInput} ${(createForm_module_default()).fill} ${(createForm_module_default()).fieldText} ${(createForm_module_default()).pointer}`,
                value: fieldData || "",
                onChange: handleChange
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/TagField/TagField.jsx



function _floatingLabel(domElement) {
    domElement.style.top = "-18px";
    domElement.style.color = "var(--neutral-shade-5)";
    domElement.style.fontSize = "0.8em";
    domElement.style.left = "10px";
}
function _fieldInputTransparent(domElement) {
    domElement.style.backgroundColor = "transparent";
    domElement.style.borderColor = "var(--neutral-shade-2)";
}
function _isFieldEmpty(content, labelElement, inputElement) {
    if (content) {
        _floatingLabel(labelElement);
        _fieldInputTransparent(inputElement);
    } else {
        inputElement.style.backgroundColor = "var(--neutral-shade-2)";
    }
}
function _addEventListeners() {
    const inputId = "tags-input";
    const labelId = "tags-label";
    const inputDOMElement = document.getElementById(inputId);
    const labelDOMElement = document.getElementById(labelId);
    inputDOMElement.addEventListener("focus", ()=>{
        labelDOMElement.style.top = "-18px";
        labelDOMElement.style.left = "10px";
        labelDOMElement.style.color = "var(--primary-shade-3)";
        labelDOMElement.style.fontSize = "0.8em";
        labelDOMElement.style.transition = "all ease-in-out 150ms";
        inputDOMElement.style.backgroundColor = "transparent";
    });
    inputDOMElement.addEventListener("blur", (event)=>{
        labelDOMElement.style.top = "25%";
        labelDOMElement.style.left = "20px";
        labelDOMElement.style.color = "var(--neutral-shade-6)";
        labelDOMElement.style.fontSize = "16px";
        _isFieldEmpty(event.target.value, labelDOMElement, inputDOMElement);
    });
}
function inputKeyUp(event, handleEnter) {
    event.which = event.which || event.keyCode;
    if (event.which == 13) {
        const newTag = event.target.value;
        handleEnter({
            type: "addTag",
            data: newTag
        });
        event.target.value = "";
    }
}
function TagField({ handleEnter  }) {
    (0,external_react_.useEffect)(()=>{
        _addEventListeners();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("fieldset", {
        className: (createForm_module_default()).fieldContaier,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                id: "tags-label",
                className: `${(createForm_module_default()).fieldLabel} ${(createForm_module_default()).fieldText}`,
                children: "Tags"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                id: "tags-input",
                type: "text",
                className: `${(createForm_module_default()).fieldInput} ${(createForm_module_default()).fieldText}`,
                onKeyUp: (event)=>inputKeyUp(event, handleEnter)
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/Tag/tag.module.css
var tag_module = __webpack_require__(650);
var tag_module_default = /*#__PURE__*/__webpack_require__.n(tag_module);
;// CONCATENATED MODULE: ./components/Tag/Tag.jsx


function Tag({ text , handleDelete  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (tag_module_default()).tagContainer,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                className: "w-6 h-6 icon-container-16 pointer",
                style: {
                    color: "var(--neutral-shade-6)"
                },
                onClick: ()=>handleDelete(text),
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                })
            }),
            text
        ]
    });
}

;// CONCATENATED MODULE: ./components/CreateUpdateForm/CreateUpdateForm.jsx








/* Components */ 





const fieldsValues = {
    itemId: {
        id: "itemId",
        label: "Item ID",
        type: "textField",
        value: "",
        inputType: "text",
        disabled: true
    },
    category: {
        id: "category",
        label: "Category",
        value: "",
        type: "optionField",
        options: variables_namespaceObject.bd
    },
    name: {
        id: "name",
        label: "Name",
        type: "textField",
        value: "",
        inputType: "text"
    },
    brand: {
        id: "brand",
        label: "Brand",
        type: "textField",
        value: "",
        inputType: "text"
    },
    store: {
        id: "store",
        label: "Store",
        value: "",
        type: "optionField",
        options: variables_namespaceObject.gg
    },
    price: {
        id: "price",
        label: "Price",
        type: "textField",
        value: "",
        inputType: "number"
    },
    units: {
        id: "units",
        label: "Units",
        value: "",
        type: "optionField",
        options: variables_namespaceObject.Dl
    }
};
let initialFields = {
    itemId: "",
    name: "",
    category: "",
    price: 0,
    units: "",
    store: "",
    brand: "",
    history: []
};
function _createTags(tags, removeTag) {
    let tagComponents = [];
    if (tags) {
        tags.forEach((tag)=>{
            tagComponents.push(/*#__PURE__*/ jsx_runtime_.jsx(Tag, {
                text: tag,
                handleDelete: removeTag
            }, tag));
        });
    }
    return tagComponents;
}
function _createFields(handleChangeTextInput, handleChangeOptionInput, formData, isCreatingItem, _removeTag, dispatch) {
    var fields = [];
    const keys = Object.keys(fieldsValues);
    keys.forEach((key)=>{
        if (key === "itemId") {
            if (!isCreatingItem) {
                fields.push(/*#__PURE__*/ jsx_runtime_.jsx(TextField, {
                    id: fieldsValues[key].id,
                    label: fieldsValues[key].label,
                    type: fieldsValues[key].inputType,
                    onChange: handleChangeTextInput,
                    fieldData: formData[key],
                    disabled: fieldsValues[key].disabled ? true : false
                }, fieldsValues[key].id));
            }
        } else {
            switch(fieldsValues[key].type){
                case "textField":
                    fields.push(/*#__PURE__*/ jsx_runtime_.jsx(TextField, {
                        id: fieldsValues[key].id,
                        label: fieldsValues[key].label,
                        type: fieldsValues[key].inputType,
                        onChange: handleChangeTextInput,
                        fieldData: formData[key],
                        disabled: fieldsValues[key].disabled ? true : false
                    }, fieldsValues[key].id));
                    break;
                case "optionField":
                    fields.push(/*#__PURE__*/ jsx_runtime_.jsx(OptionsField, {
                        id: fieldsValues[key].id,
                        label: fieldsValues[key].label,
                        options: fieldsValues[key].options,
                        handleChange: handleChangeOptionInput,
                        fieldData: formData[key]
                    }, fieldsValues[key].id));
                    break;
                case "dateField":
                    fields.push(/*#__PURE__*/ jsx_runtime_.jsx(DateSelector, {
                        id: fieldsValues[key].id,
                        label: fieldsValues[key].label,
                        handleChange: handleChangeOptionInput,
                        fieldData: formData[key]
                    }, fieldsValues[key].id));
                    break;
                case "tagField":
                    const tags = _createTags(formData.tags, _removeTag);
                    fields.push(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (createForm_module_default()).tagsFieldContainer,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(TagField, {
                                id: "tags",
                                handleEnter: dispatch
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (createForm_module_default()).tagsContainer,
                                children: tags
                            })
                        ]
                    }, "tags"));
                    break;
                default:
                    throw new Error("Invalid type of field: " + fieldsValues[key].type);
            }
        }
    });
    fields.push();
    return fields;
}
function _setInitialFields(itemData) {
    initialFields.itemId = itemData.itemId;
    initialFields.name = itemData.name;
    initialFields.category = itemData.category;
    initialFields.price = itemData.price;
    initialFields.units = itemData.units;
    initialFields.lastUpdated = itemData.lastUpdated;
    initialFields.store = itemData.store;
    initialFields.tags = itemData.tags;
    initialFields.brand = itemData.brand;
}
function CreateUpdateForm({ isCreatingItem , itemData , closeForm , itemsDispatch , deleteItem  }) {
    const [formData, dispatch] = (0,external_react_.useReducer)(fieldReducer, initialFields);
    const [submitting, setSubmitting] = (0,external_react_.useState)(false);
    _setInitialFields(itemData);
    const handleSubmit = async (event)=>{
        event.preventDefault();
        if (isCreatingItem) {
            createNewItem(formData, itemsDispatch);
        } else {
            updateItem(formData, itemsDispatch);
        }
        setSubmitting(true);
        setTimeout(()=>{
            setSubmitting(false);
        }, 3000);
        closeForm();
    };
    const handleDelete = ()=>{
        deleteItem(formData, itemsDispatch);
        closeForm();
    };
    const handleChangeTextInput = (event)=>{
        const formatedData = formDataFormating(event);
        dispatch({
            type: "create",
            data: formatedData
        });
    };
    const handleChangeOptionInput = (event)=>{
        if (event.target.value === "other") {}
        const formatedData = formDataFormating(event);
        dispatch({
            type: "create",
            data: formatedData
        });
    };
    function _removeTag(text) {
        dispatch({
            type: "removeTag",
            data: text
        });
    }
    const fields = _createFields(handleChangeTextInput, handleChangeOptionInput, formData, isCreatingItem, _removeTag, dispatch);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        className: (createForm_module_default()).createUpdateFormContainer,
        onKeyDown: (e)=>{
            e.key === "Enter" && e.preventDefault();
        },
        onSubmit: handleSubmit,
        method: "post",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (createForm_module_default()).updateFormGridContainer,
                children: fields
            }),
            !isCreatingItem && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (createForm_module_default()).createUpdateFormButtonsContainer,
                children: /*#__PURE__*/ jsx_runtime_.jsx(ActionButton, {
                    text: "Delete",
                    action: handleDelete
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (createForm_module_default()).createUpdateFormButtonsContainer,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        className: (createForm_module_default()).createUpdateFormCancelButton,
                        style: {
                            fontFamily: `${(CreateUpdateForm_jsx_import_Open_Sans_arguments_style_normal_weight_400_subsets_latin_fallback_Helvetica_Neue_Helvetica_system_ui_Arial_variableName_openSans_default()).style.fontFamily}`
                        },
                        onClick: closeForm,
                        children: "Cancel"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "submit",
                        className: "actionButton",
                        style: {
                            fontFamily: `${(CreateUpdateForm_jsx_import_Open_Sans_arguments_style_normal_weight_400_subsets_latin_fallback_Helvetica_Neue_Helvetica_system_ui_Arial_variableName_openSans_default()).style.fontFamily}`,
                            fontSize: "16px"
                        },
                        children: "Submit"
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"components/ItemsTable.jsx","import":"Open_Sans","arguments":[{"style":["normal"],"weight":"400","subsets":["latin"],"fallback":["Helvetica Neue","Helvetica","system-ui","Arial"]}],"variableName":"openSans"}
var ItemsTable_jsx_import_Open_Sans_arguments_style_normal_weight_400_subsets_latin_fallback_Helvetica_Neue_Helvetica_system_ui_Arial_variableName_openSans_ = __webpack_require__(856);
var ItemsTable_jsx_import_Open_Sans_arguments_style_normal_weight_400_subsets_latin_fallback_Helvetica_Neue_Helvetica_system_ui_Arial_variableName_openSans_default = /*#__PURE__*/__webpack_require__.n(ItemsTable_jsx_import_Open_Sans_arguments_style_normal_weight_400_subsets_latin_fallback_Helvetica_Neue_Helvetica_system_ui_Arial_variableName_openSans_);
;// CONCATENATED MODULE: ./components/ItemRow.jsx



function makeTagsCell(tags) {
    if (tags.length === 0) {
        return /*#__PURE__*/ _jsx("td", {
            children: "S/O"
        }, "tags");
    } else if (tags.length > 1) {
        return /*#__PURE__*/ _jsx("td", {
            children: "[...]"
        }, "tags");
    } else {
        return /*#__PURE__*/ _jsx("td", {
            children: tags[0]
        }, "tags");
    }
}
function makeHistoryCell(history) {
    if (history.length === 0) {
        return /*#__PURE__*/ jsx_runtime_.jsx("td", {
            children: "S/O"
        }, "history");
    } else {
        return /*#__PURE__*/ jsx_runtime_.jsx("td", {
            children: "[...]"
        }, "history");
    }
}
function getCategoryColor(category) {
    let color = category.toLowerCase();
    color = color.concat("-backgroundColor");
    return color;
}
function makeCategoryCell(category) {
    let color = getCategoryColor(category);
    return /*#__PURE__*/ jsx_runtime_.jsx("td", {
        className: `category-container ${color}`,
        children: capitalizeFirstLetter(category)
    }, "category");
}
function _isSearchedElement(selectedSearchItemId, itemId) {
    if (itemId === selectedSearchItemId) {
        return "itemsTable-searchedRow";
    } else {
        return "";
    }
}
function makeLastUpdatedCell(date) {
    return /*#__PURE__*/ jsx_runtime_.jsx("td", {
        children: dateFormatter(date)
    }, "lastUpdated");
}
function ItemRow({ item , handleModifyItem , selectedSearchItemId , handledSelectedRow  }) {
    let cells = [];
    // ID
    cells.push(/*#__PURE__*/ jsx_runtime_.jsx("td", {
        children: item.itemId
    }, `${item.itemId}`));
    // NAME
    cells.push(/*#__PURE__*/ jsx_runtime_.jsx("td", {
        children: capitalizeFirstLetter(item.name)
    }, `${item.name}`));
    // CATEGORY
    cells.push(makeCategoryCell(item.category));
    // PRICE
    cells.push(/*#__PURE__*/ jsx_runtime_.jsx("td", {
        children: item.price
    }, `${item.price}`));
    // UNITS
    cells.push(/*#__PURE__*/ jsx_runtime_.jsx("td", {
        children: item.units
    }, `${item.units}`));
    // LAST UPDATED
    cells.push(makeLastUpdatedCell(item.lastUpdated));
    // STORE
    cells.push(/*#__PURE__*/ jsx_runtime_.jsx("td", {
        children: item.store
    }, `${item.store}`));
    // BRAND
    cells.push(/*#__PURE__*/ jsx_runtime_.jsx("td", {
        children: item.brand
    }, `${item.brand}`));
    // TAGS
    //cells.push(makeTagsCell(item.tags));
    // HISTORY
    cells.push(makeHistoryCell(item.history));
    // MODIFY
    cells.push(/*#__PURE__*/ jsx_runtime_.jsx("td", {
        onClick: ()=>handleModifyItem(item),
        children: /*#__PURE__*/ jsx_runtime_.jsx(Modify, {
            color: "--accent-shade-green-3"
        })
    }, "modify"));
    return /*#__PURE__*/ jsx_runtime_.jsx("tr", {
        id: `tr-${item.itemId}`,
        className: `itemsTable-gridRowLayout ${_isSearchedElement(selectedSearchItemId, item.itemId)} pointer`,
        onClick: ()=>handledSelectedRow(item),
        children: cells
    });
}

;// CONCATENATED MODULE: ./components/ItemsTable.jsx



/* Components */ 
function makeTable(items, handleModifyItem, selectedSearchItemId, handledSelectedRow) {
    let rows = [];
    for(let item in items){
        rows.push(/*#__PURE__*/ jsx_runtime_.jsx(ItemRow, {
            item: items[item],
            handleModifyItem: handleModifyItem,
            selectedSearchItemId: selectedSearchItemId,
            handledSelectedRow: handledSelectedRow
        }, items[item].itemId));
    }
    return rows;
}
function ItemsTable({ items , handleModifyItem , selectedSearchItemId , handledSelectedRow  }) {
    const itemsData = structuredClone(items);
    let formattedItems = itemsFormatter(itemsData);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
        className: "itemsTable-mainContainer",
        style: {
            fontFamily: `${(ItemsTable_jsx_import_Open_Sans_arguments_style_normal_weight_400_subsets_latin_fallback_Helvetica_Neue_Helvetica_system_ui_Arial_variableName_openSans_default()).style.fontFamily}`,
            fontSize: "16px"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                className: "itemsTable-headerContainer",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                    className: "itemsTable-header itemsTable-gridRowLayout",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                            children: "ID"
                        }, "headID"),
                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                            children: "NAME"
                        }, "headName"),
                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                            children: "CATEGORY"
                        }, "headCategory"),
                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                            children: "PRICE"
                        }, "headPrice"),
                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                            children: "UNITS"
                        }, "headUnits"),
                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                            children: "LAST UPDATED"
                        }, "headLastUpdated"),
                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                            children: "STORE"
                        }, "headStore"),
                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                            children: "BRAND"
                        }, "headBrand"),
                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                            children: "HISTORY"
                        }, "headHistory")
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                children: makeTable(formattedItems, handleModifyItem, selectedSearchItemId, handledSelectedRow)
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/MainPage.jsx





/* Components */ 


function MainPage({ initialItems  }) {
    const [modifyItem, setModifyItem] = (0,external_react_.useState)(false);
    const [createItem, setCreateItem] = (0,external_react_.useState)(false);
    const [itemData, setItemData] = (0,external_react_.useState)({});
    const [selectedSearchItemId, setSelectedSearchItemId] = (0,external_react_.useState)("");
    const [items, dispatch] = (0,external_react_.useReducer)(itemReducer, initialItems);
    function handleModifyItem(item) {
        let formatedItem = formatUpdatingItem(item);
        setItemData(formatedItem);
        setModifyItem(true);
    }
    function handleCreateItem() {
        setCreateItem(true);
    }
    function handleClose() {
        setModifyItem(false);
        setCreateItem(false);
        setItemData({});
    }
    function _removePreviouslySelectedItem(itemId) {
        if (selectedSearchItemId) {
            let previouslySelectedDOMItem = document.getElementById(`tr-${selectedSearchItemId}`);
            previouslySelectedDOMItem.classList.remove("itemsTable-searchedRow");
        }
        setSelectedSearchItemId(itemId);
    }
    function handleSelectedSearchItem(item) {
        _removePreviouslySelectedItem(item.itemId);
        let selectedDOMItem = document.getElementById(`tr-${item.itemId}`);
        selectedDOMItem.scrollIntoView();
    }
    function handledSelectedRow(item) {
        _removePreviouslySelectedItem(item.itemId);
        let selectedDOMItem = document.getElementById(`tr-${item.itemId}`);
        selectedDOMItem.classList.add("itemsTable-searchedRow");
    }
    function handleDelete(formData, itemsDispatch) {
        deleteItem(formData, itemsDispatch);
        setSelectedSearchItemId("");
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(NavBar, {
                handleCreateItem: handleCreateItem,
                items: items,
                handleSelectedSearchItem: handleSelectedSearchItem
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ItemsTable, {
                items: items,
                handleModifyItem: handleModifyItem,
                selectedSearchItemId: selectedSearchItemId,
                handledSelectedRow: handledSelectedRow
            }),
            createItem ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "modifyItem-container",
                children: /*#__PURE__*/ jsx_runtime_.jsx(CreateUpdateForm, {
                    isCreatingItem: true,
                    itemData: itemData,
                    closeForm: handleClose,
                    itemsDispatch: dispatch,
                    deleteItem: handleDelete
                })
            }) : modifyItem ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "modifyItem-container",
                children: /*#__PURE__*/ jsx_runtime_.jsx(CreateUpdateForm, {
                    isCreatingItem: false,
                    itemData: itemData,
                    closeForm: handleClose,
                    itemsDispatch: dispatch,
                    deleteItem: handleDelete
                })
            }) : null
        ]
    });
}

;// CONCATENATED MODULE: ./pages/index.js



function Home({ items  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(head_namespaceObject, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Tedski | Management"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "="
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.svg"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MainPage, {
                initialItems: items
            })
        ]
    });
}
Home.getInitialProps = async (ctx)=>{
    const res = await fetch(`${process.env.CLIENT_URL}api/items`, {
        method: "GET"
    });
    const { items  } = await res.json();
    return {
        items
    };
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,488], () => (__webpack_exec__(882)));
module.exports = __webpack_exports__;

})();