webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/horaire-input.js":
/*!*************************************!*\
  !*** ./components/horaire-input.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/home/thomas/repos/ccas/components/horaire-input.js";


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
      de: (21 - newArray.length).toString() + 'h',
      a: '17h'
    });
    console.log(newArray);
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
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      paddingLeft: '2em'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, value.map(function (h, i) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      key: i,
      style: {
        display: 'flex'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, i, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(HeureInput, {
      onChange: function onChange(value) {
        return handleChange(value, i);
      },
      value: h,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      onClick: function onClick(e) {
        return handleDeletion(i);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, "Supprimer cette plage horaire"));
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: handleAddition,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
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
      lineNumber: 108
    },
    __self: this
  }, "Du", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("select", {
    onChange: function onChange(e) {
      return handleChange(e.target.value, 'du');
    },
    defaultValue: du,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, days.map(function (d, i) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      value: d,
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
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
      lineNumber: 114
    },
    __self: this
  }, days.map(function (d, i) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      value: d,
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
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
      lineNumber: 117
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (HoraireInput);

/***/ })

})
//# sourceMappingURL=index.js.bf7883676de27d325d84.hot-update.js.map