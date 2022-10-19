"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function Container(_ref) {
  var children = _ref.children;

  return _react2["default"].createElement(
    "main",
    { className: "flex-1 mx-auto py-20 px-5" },
    children
  );
}

exports["default"] = Container;
module.exports = exports["default"];