webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ccas-form.js":
/*!*********************************!*\
  !*** ./components/ccas-form.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _address_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./address-input */ "./components/address-input.js");
/* harmony import */ var _horaires_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./horaires-input */ "./components/horaires-input.js");


var _jsxFileName = "/home/thomas/repos/ccas/components/ccas-form.js";




function CCASForm(_ref) {
  var commune = _ref.commune;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      adresse = _useState2[0],
      setAdresse = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      telephone = _useState4[0],
      setTelephone = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      url = _useState6[0],
      setUrl = _useState6[1];

  var handleAdresseChange = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (value) {
    setAdresse(value);
  });
  var handleTelephoneChange = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (event) {
    setTelephone(event.target.value);
  });
  var handleURLChange = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (event) {
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
  var save = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    var p = {
      nom: "Centre Communal d'Action Sociale de la ville de ".concat(commune.nom),
      pivotLocal: 'ccas',
      id: "ccas_".concat(commune.nom),
      adresses: [{
        lignes: ['OK'],
        codePostal: 29200,
        commune: commune.nom,
        type: 'physique'
      }],
      url: 'URL',
      telephone: '02 98 03 39 52',
      'accueil physique': {
        horaires: [{
          du: 'lundi',
          au: 'vendredi',
          heures: [{
            de: '9h',
            a: '12h'
          }, {
            de: '13h30',
            a: '17h'
          }]
        }]
      },
      zonage: {
        communes: ["".concat(commune.code, " ").concat(commune.nom)]
      }
    };
    setPayload(p);
    console.log(adresse);
    setDestination("/data/".concat(commune.departement.code, "/").concat(p.id, ".yaml"));
  });

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([defaultHoraires]),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      horaires = _useState8[0],
      setHoraires = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
      destination = _useState10[0],
      setDestination = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      _useState12 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState11, 2),
      payload = _useState12[0],
      setPayload = _useState12[1];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form__group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "adresse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "\uD83C\uDFE1 Adresse du CCAS"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_address_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "adresse",
    citycode: commune.code,
    value: adresse,
    onChange: handleAdresseChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form__group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "telephone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "\uD83D\uDCE0 Num\xE9ro de t\xE9l\xE9phone du CCAS"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    id: "telephone",
    placeholder: "02 40 12 23 34",
    type: "tel",
    value: telephone,
    onChange: handleTelephoneChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form__group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "url",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "\uD83C\uDF0D URL vers les informations du CCAS"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    id: "url",
    type: "tel",
    value: url,
    onChange: function onChange(e) {
      return setUrl(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form__group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "horaires",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "\uD83D\uDCC5 Horaires d'ouverture du CCAS"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_horaires_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: horaires,
    onChange: setHoraires,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form__group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "button large",
    onClick: save,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Enregistrer"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(destination, null, 2)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(payload, null, 2))));
}

/* harmony default export */ __webpack_exports__["default"] = (CCASForm);

/***/ })

})
//# sourceMappingURL=index.js.762f70ae5b38633e9ce4.hot-update.js.map