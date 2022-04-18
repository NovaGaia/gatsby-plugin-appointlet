"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _excluded = ["children", "tag"];

function AppointletButton(_ref) {
  var children = _ref.children,
      tag = _ref.tag,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  var CustomTag = tag || 'button';
  var scheduling_page_URL = process.env.GATSBY_APPOINTLET_URL;

  if (typeof document !== 'undefined') {
    var appointlet = new Appointlet(scheduling_page_URL);

    if (scheduling_page_URL === '' || scheduling_page_URL === undefined) {
      return /*#__PURE__*/_react.default.createElement("span", {
        style: {
          color: 'red'
        }
      }, "Env var `GATSBY_APPOINTLET_URL` is undefined !");
    }

    if (appointlet === null) {
      return /*#__PURE__*/_react.default.createElement("span", {
        style: {
          color: 'red'
        }
      }, "error on Appointlet");
    }

    return /*#__PURE__*/_react.default.createElement(CustomTag, (0, _extends2.default)({}, props, {
      onClick: function onClick() {
        return appointlet.openModal();
      }
    }), children || 'Appointlet rendez-vous');
  }

  return /*#__PURE__*/_react.default.createElement("span", {
    style: {
      color: 'red'
    }
  }, "error on Appointlet");
}

var _default = AppointletButton;
exports.default = _default;