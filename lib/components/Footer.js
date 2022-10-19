"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function Footer() {
  return _react2["default"].createElement(
    "footer",
    { className: "bg-sky-200 text-center w-full" },
    _react2["default"].createElement(
      "div",
      { className: "text-gray-700 text-center p-4" },
      "Copyright © 2022 Ryan McDermott"
    )
  );
}

exports["default"] = Footer;
module.exports = exports["default"];