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
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (CCASForm);

/***/ }),

/***/ "./components/horaire-input.js":
false,

/***/ "./components/horaires-input.js":
/*!**************************************!*\
  !*** ./components/horaires-input.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/home/thomas/repos/ccas/components/horaires-input.js";


function HeureInput(_ref) {
  var value = _ref.value,
      _ref$value = _ref.value,
      de = _ref$value.de,
      a = _ref$value.a,
      onChange = _ref.onChange;
  var handleDeChange = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (event) {
    if (!onChange) {
      return;
    }

    onChange(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, value, {
      de: event.target.value
    }));
  });
  var handleAChange = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (event) {
    if (!onChange) {
      return;
    }

    onChange(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, value, {
      a: event.target.value
    }));
  });
  var options = [];

  for (var h = 7; h <= 20; h++) {
    for (var m = 0; m < 60; m += 15) {
      options.push(h.toString() + 'h' + (m ? m.toString() : ''));
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "de", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("select", {
    onChange: handleDeChange,
    defaultValue: de,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, options.map(function (t, i) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      value: t,
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, t);
  })), "\xE0", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("select", {
    onChange: handleAChange,
    defaultValue: a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, options.map(function (t, i) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      value: t,
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, t);
  })));
}

function HeuresInput(_ref2) {
  var value = _ref2.value,
      onChange = _ref2.onChange;
  var handleAddition = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (!onChange) {
      return;
    }

    var newArray = [].concat(value);
    newArray.push({
      de: '8h',
      a: '17h'
    });
    onChange(newArray);
  });
  var handleChange = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (newValue, index) {
    if (!onChange) {
      return;
    }

    var newArray = [].concat(value);
    newArray[index] = newValue;
    onChange(newArray);
  });
  var handleDeletion = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (index) {
    if (!onChange) {
      return;
    }

    var newArray = [].concat(value);
    newArray.splice(index, 1);
    onChange(newArray);
  });

  function heureKey(h, i) {
    return "".concat(i, "_").concat(h.de, "_").concat(h.a);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      paddingLeft: '2em'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, value.map(function (h, i) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      key: heureKey(h, i),
      style: {
        display: 'flex'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(HeureInput, {
      onChange: function onChange(value) {
        return handleChange(value, i);
      },
      value: h,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }), value.length > 1 && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      onClick: function onClick(e) {
        return handleDeletion(i);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, "Supprimer cette plage horaire"));
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: handleAddition,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Ajouter une plage horaire"));
}

function HoraireInput(_ref3) {
  var value = _ref3.value,
      _ref3$value = _ref3.value,
      du = _ref3$value.du,
      au = _ref3$value.au,
      heures = _ref3$value.heures,
      onChange = _ref3.onChange;
  var handleChange = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (newValue, prop) {
    if (!onChange) {
      return;
    }

    onChange(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, value, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prop, newValue)));
  });
  var days = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "Du", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("select", {
    onChange: function onChange(e) {
      return handleChange(e.target.value, 'du');
    },
    defaultValue: du,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, days.map(function (d, i) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      value: d,
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, d);
  })), "au", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("select", {
    onChange: function onChange(e) {
      return handleChange(e.target.value, 'au');
    },
    defaultValue: au,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, days.map(function (d, i) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      value: d,
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, d);
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(HeuresInput, {
    onChange: function onChange(v) {
      return handleChange(v, 'heures');
    },
    value: heures,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }));
}

function HorairesInput(_ref4) {
  var value = _ref4.value,
      onChange = _ref4.onChange;
  var handleAddition = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (!onChange) {
      return;
    }

    var newArray = [].concat(value);
    newArray.push({
      du: 'lundi',
      au: 'vendredi',
      heures: [{
        de: '8h',
        a: '17h'
      }]
    });
    onChange(newArray);
  });
  var handleChange = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (newValue, index) {
    if (!onChange) {
      return;
    }

    var newArray = [].concat(value);
    newArray[index] = newValue;
    onChange(newArray);
  });
  var handleDeletion = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (index) {
    if (!onChange) {
      return;
    }

    var newArray = [].concat(value);
    newArray.splice(index, 1);
    onChange(newArray);
  });

  function jourKey(h, i) {
    return "".concat(i, "_").concat(h.de, "_").concat(h.a);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      paddingLeft: '2em'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, value.map(function (h, i) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      key: jourKey(h, i),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(HoraireInput, {
      onChange: function onChange(value) {
        return handleChange(value, i);
      },
      value: h,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }), value.length > 1 && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      onClick: function onClick(e) {
        return handleDeletion(i);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, "Supprimer cette plage de jours"));
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: handleAddition,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, "Ajouter une plage de jours"));
}

/* harmony default export */ __webpack_exports__["default"] = (HorairesInput);

/***/ }),

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
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_9__);



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
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "hero",
    role: "banner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "hero__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    className: "hero__white-background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "\uD83C\uDFE1 CCAS"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "hero__white-background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Ajouter en quelques clics les informations de votre centre communal d'action sociale"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("section", {
    className: "section section-white",
    id: "typography",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "\uD83D\uDD0D V\xE9rifier les informations de votre CCAS"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_commune_input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: commune,
    onChange: handleCommuneChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("section", {
    className: "section section-white",
    id: "typography",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, commune && !fetchingCCAS && (ccas && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "\u2B50 La vile de ", commune.nom, " \xE0 un CCAS dans l'annuaire"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_ccas_view__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ccas: ccas,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  })) || react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, commune.nom, " ne semble pas avoir de CCAS dans l'annuaire."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "\uD83D\uDCDD Ajoutez le\xA0!"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_ccas_form__WEBPACK_IMPORTED_MODULE_6__["default"], {
    commune: commune,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  })))));
}

/***/ })

})
//# sourceMappingURL=index.js.c1a2e7dc3c1a60a88823.hot-update.js.map