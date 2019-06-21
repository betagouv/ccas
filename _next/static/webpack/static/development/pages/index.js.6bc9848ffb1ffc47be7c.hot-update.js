webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ccas-form.js":
/*!*********************************!*\
  !*** ./components/ccas-form.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _address_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./address-input */ "./components/address-input.js");
/* harmony import */ var _horaires_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./horaires-input */ "./components/horaires-input.js");

var _jsxFileName = "/home/thomas/repos/ccas/components/ccas-form.js";




function CCASForm(_ref) {
  var commune = _ref.commune;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      adresse = _useState2[0],
      setAdresse = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      telephone = _useState4[0],
      setTelephone = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      url = _useState6[0],
      setUrl = _useState6[1];

  var handleAdresseChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (value) {
    setAdresse(value);
  });
  var handleTelephoneChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (event) {
    setTelephone(event.target.value);
  });
  var handleURLChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (event) {
    setUrl(event.target.value);
  });
  var defaultHoraires = {
    du: 'lundi',
    au: 'vendredi',
    heures: [{
      de: '8h',
      a: '12h'
    }, {
      de: '14h',
      a: '17h'
    }]
  };

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([defaultHoraires]),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
      horaires = _useState8[0],
      setHoraires = _useState8[1];

  var save = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {});
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form__group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "adresse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Adresse du CCAS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_address_input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "adresse",
    citycode: commune.code,
    value: adresse,
    onChange: handleAdresseChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form__group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "telephone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Num\xE9ro de t\xE9l\xE9phone du CCAS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    id: "telephone",
    placeholder: "02 40 12 23 34",
    type: "tel",
    value: telephone,
    onChange: handleTelephoneChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form__group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "url",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "URL vers les informations du CCAS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    id: "url",
    type: "tel",
    value: url,
    onChange: handleURLChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form__group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "horaires",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Horaires d'ouverture du CCAS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_horaires_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: horaires,
    onChange: setHoraires,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "button large",
    onClick: save,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Enregistrer"));
}

/* harmony default export */ __webpack_exports__["default"] = (CCASForm);

/***/ })

})
//# sourceMappingURL=index.js.6bc9848ffb1ffc47be7c.hot-update.js.map