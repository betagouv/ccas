webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/commune-input.js":
/*!*************************************!*\
  !*** ./components/commune-input.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select/async */ "./node_modules/react-select/async/dist/react-select.browser.esm.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/thomas/repos/ccas/components/commune-input.js";




function CommuneInput(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange;
  var submitOnChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (value) {
    return onChange(value);
  });

  var getOptions = function getOptions(input) {
    if (input.length < 2) {
      return [];
    }

    return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()("https://geo.api.gouv.fr/communes?nom=".concat(input, "&fields=nom,code,departement,region&boost=population")).then(function (response) {
      return response.json();
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form__group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "commune",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Nom de la commune"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select_async__WEBPACK_IMPORTED_MODULE_1__["default"], {
    defaultValue: value,
    onChange: submitOnChange,
    placeholder: "B\xE9aupr\xE9au-en-Mauges",
    getOptionLabel: function getOptionLabel(_ref2) {
      var nom = _ref2.nom,
          departement = _ref2.departement;
      return nom + " (".concat(departement && departement.nom, ")");
    },
    loadOptions: getOptions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CommuneInput);

/***/ })

})
//# sourceMappingURL=index.js.8fc9e4291bff283a0174.hot-update.js.map