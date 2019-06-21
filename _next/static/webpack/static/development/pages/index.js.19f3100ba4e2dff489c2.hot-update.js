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
/* harmony import */ var _components_ccas_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ccas-form */ "./components/ccas-form.js");
/* harmony import */ var _components_ccas_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ccas-view */ "./components/ccas-view.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);



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
              return _context.abrupt("return", isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()("https://etablissements-publics.api.gouv.fr/v3/communes/".concat(commune.code, "/ccas")).then(function (response) {
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
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "hero",
    role: "banner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "hero__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    className: "hero__white-background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "\uD83C\uDFE1 CCAS"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "hero__white-background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Ajouter en quelques clics les informations de votre centre communal d'action sociale"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("section", {
    className: "section section-white",
    id: "typography",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "\uD83D\uDD0D V\xE9rifier les informations de votre CCAS"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_commune_input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: commune,
    onChange: handleCommuneChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    className: "button large ".concat(fetchingCCAS ? 'secondary' : ''),
    disabled: fetchingCCAS,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Enregistrer"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    className: "button large",
    onClick: function onClick(e) {
      return setFetchingCCAS(!fetchingCCAS);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Toggle")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("section", {
    className: "section section-white",
    id: "typography",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, commune && !fetchingCCAS && (ccas && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "\u2B50 La vile de ", commune.nom, " \xE0 un CCAS dans l'annuaire"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_ccas_view__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ccas: ccas,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })) || react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "\uD83D\uDE1F ", commune.nom, " ne semble pas avoir de CCAS dans l'annuaire."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "\uD83D\uDCDD Ajoutez le\xA0!"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_ccas_form__WEBPACK_IMPORTED_MODULE_6__["default"], {
    commune: commune,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })))));
}

/***/ })

})
//# sourceMappingURL=index.js.19f3100ba4e2dff489c2.hot-update.js.map