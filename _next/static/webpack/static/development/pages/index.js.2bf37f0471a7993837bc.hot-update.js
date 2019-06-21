webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_commune_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/commune-input */ "./components/commune-input.js");
/* harmony import */ var _components_horaire_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/horaire-input */ "./components/horaire-input.js");
/* harmony import */ var _components_ccas_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ccas-form */ "./components/ccas-form.js");
/* harmony import */ var _components_ccas_view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ccas-view */ "./components/ccas-view.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_10__);



var _jsxFileName = "/home/thomas/repos/ccas/pages/index.js";









function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      commune = _useState2[0],
      setCommune = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      ccas = _useState4[0],
      setCCAS = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      fetchingCCAS = _useState6[0],
      setFetchingCCAS = _useState6[1];

  var handleCommuneChange = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(commune) {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setCommune(commune);
              setFetchingCCAS(true);
              return _context.abrupt("return", isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default()("https://etablissements-publics.api.gouv.fr/v3/communes/".concat(commune.code, "/ccas")).then(function (response) {
                return response.json();
              }).then(function (response) {
                return response.features.length && response.features[0];
              }).catch(function () {
                return null;
              }).then(function (data) {
                return setCCAS(data);
              }).finally(function () {
                setFetchingCCAS(false);
              }));

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  var handleSendPayload = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    var payload = {
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
  });
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "hero",
    role: "banner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "hero__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    className: "hero__white-background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "CCAS"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "hero__white-background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Ajouter en quelques clics les informations de votre CCAS"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("section", {
    className: "section section-white",
    id: "typography",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "V\xE9rifier les informations de votre CCAS"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_commune_input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: commune,
    onChange: handleCommuneChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }))), commune && !fetchingCCAS && (ccas && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("section", {
    className: "section section-white",
    id: "typography",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "La vile de ", commune.nom, " \xE0 un CCAS dans l'annuaire"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_ccas_view__WEBPACK_IMPORTED_MODULE_8__["default"], {
    ccas: ccas,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }))) || react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("section", {
    className: "section section-white",
    id: "typography",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, commune.nom, " ne semble pas avoir de CCAS dans l'annuaire."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Ajoutez le\xA0!"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_ccas_form__WEBPACK_IMPORTED_MODULE_7__["default"], {
    commune: commune,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }))))));
}

/***/ })

})
//# sourceMappingURL=index.js.2bf37f0471a7993837bc.hot-update.js.map