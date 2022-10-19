'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _componentsContainer = require('../components/Container');

var _componentsContainer2 = _interopRequireDefault(_componentsContainer);

function Page404() {
  return _react2['default'].createElement(
    _componentsContainer2['default'],
    null,
    _react2['default'].createElement(
      'div',
      { className: 'text-center' },
      _react2['default'].createElement(
        'h1',
        { className: 'text-5xl pb-4 font-bold' },
        'Page Not Found'
      ),
      _react2['default'].createElement(
        'p',
        { className: 'text-base' },
        'You look lost... Maybe you could try starting over at the ',
        _react2['default'].createElement(
          _reactRouterDom.Link,
          { className: 'underline text-blue-600 hover:text-blue-700', to: '/' },
          'Home Page'
        ),
        '?'
      )
    )
  );
}

exports['default'] = Page404;
module.exports = exports['default'];