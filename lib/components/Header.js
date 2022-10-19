"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

function Header() {
  return _react2["default"].createElement(
    "header",
    { className: "relative flex items-center justify-between py-3 px-5 lg:px-8 mb-5" },
    _react2["default"].createElement(
      "div",
      { className: "flex-1 flex items-center" },
      _react2["default"].createElement(
        _reactRouterDom.Link,
        { className: "inline-block px-5 w-max border-4 border-blue-900 focus:ring-4 focus:outline-none focus:border-sky-800 focus:bg-blue-700 focus:shadow-lg py-2 bg-blue-600 text-white font-medium text-base leading-normal uppercase shadow-md hover:bg-blue-700 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center", to: "/" },
        "Home"
      )
    )
  );
}
exports["default"] = Header;
module.exports = exports["default"];