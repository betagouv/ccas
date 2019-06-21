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
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/home/thomas/repos/ccas/components/ccas-form.js";





function CCASForm(_ref) {
  var commune = _ref.commune,
      onReset = _ref.onReset;

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

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([defaultHoraires]),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      horaires = _useState8[0],
      setHoraires = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
      helpMessage = _useState10[0],
      setHelpMessage = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    status: "o",
    payload: {
      data: {
        html_url: 'ok'
      }
    }
  }),
      _useState12 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState11, 2),
      result = _useState12[0],
      setResult = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      _useState14 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState13, 2),
      sending = _useState14[0],
      setSending = _useState14[1];

  var save = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    setHelpMessage('');

    if (!commune) {
      setHelpMessage('Vous devez sélectionner une commune.');
      return;
    }

    if (!adresse) {
      setHelpMessage('Vous devez indiquer une adresse pour le CCAS.');
      return;
    }

    if (!telephone) {
      setHelpMessage('Vous devez indiquer un numéro de téléphone pour le CCAS.');
      return;
    }

    var data = {
      nom: "Centre Communal d'Action Sociale de la ville de ".concat(commune.nom),
      pivotLocal: 'ccas',
      id: "ccas_".concat(commune.nom),
      adresses: [{
        id: adresse.properties.id,
        lignes: [adresse.properties.name],
        codePostal: adresse.properties.postcode,
        commune: commune.nom,
        type: 'physique'
      }],
      telephone: telephone,
      'accueil physique': {
        horaires: horaires
      },
      zonage: {
        communes: ["".concat(commune.code, " ").concat(commune.nom)]
      }
    };

    if (url) {
      data.url = url;
    }

    var body = {
      title: "Ajout des informations du CCAS de ".concat(commune.nom),
      body: "Fichier généré à partir de l'outil de contribution simplifiée",
      content: js_yaml__WEBPACK_IMPORTED_MODULE_5___default.a.safeDump(data),
      path: "data/".concat(commune.departement.code, "/").concat(data.id, ".yaml"),
      branch: "mon_ccas_".concat(commune.code)
    };
    setSending(true);
    fetch('https://ludwig.incubateur.net/api/repository/github/betagouv/annuaire-api/suggest', {
      method: 'POST',
      body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (payload) {
      return setResult({
        status: 'ok',
        payload: payload
      });
    }).catch(function (error) {
      return setResult({
        status: 'ko',
        error: error
      });
    }).finally(function () {
      setSending(false);
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form__group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "adresse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "\uD83C\uDFE1 Adresse du CCAS"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_address_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "adresse",
    citycode: commune.code,
    value: adresse,
    onChange: setAdresse,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form__group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "telephone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "\uD83D\uDCE0 Num\xE9ro de t\xE9l\xE9phone du CCAS"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    id: "telephone",
    placeholder: "02 40 12 23 34",
    type: "tel",
    value: telephone,
    onChange: function onChange(event) {
      return setTelephone(event.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form__group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "url",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "\uD83C\uDF0D Page internet avec les informations du CCAS"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    id: "url",
    type: "tel",
    value: url,
    onChange: function onChange(event) {
      return setUrl(event.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form__group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "horaires",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "\uD83D\uDCC5 Horaires d'ouverture du CCAS"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_horaires_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: horaires,
    onChange: setHoraires,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form__group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, helpMessage && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    class: "notification error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "\uD83D\uDEA7 ", helpMessage), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "button large ".concat(sending ? 'secondary' : ''),
    disabled: sending,
    onClick: save,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, sending ? 'Enregistrement en cours…' : 'Enregistrer')), result && result.status && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form__group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, result.status === 'ok' && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "notification success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "Merci beaucoup ! Votre contribution est accessible \xE0 la ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: result.payload.data.html_url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "page suivante"), ". Vous pouvez v\xE9rifier les informations d'un CCAS d'une ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    onClick: onReset,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "autre commune"), ".") || react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "notification error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "Une erreur a eu lieu. Merci de nous contacter par email \xE0 ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "mailto:bonjour@mes-aides.gouv.fr?subject=Ajout de CCAS impossible",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "bonjour@mes-aides.gouv.fr"), ".")));
}

/* harmony default export */ __webpack_exports__["default"] = (CCASForm);

/***/ })

})
//# sourceMappingURL=index.js.3c1a22816bb7df12e2d0.hot-update.js.map