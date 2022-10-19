'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentsEvents = require('../components/Events');

var _componentsEvents2 = _interopRequireDefault(_componentsEvents);

var _componentsContainer = require('../components/Container');

var _componentsContainer2 = _interopRequireDefault(_componentsContainer);

function Home() {
  return _react2['default'].createElement(
    _componentsContainer2['default'],
    null,
    _react2['default'].createElement(
      'div',
      { className: 'text-center' },
      _react2['default'].createElement(
        'h1',
        { className: 'text-4xl pb-4 font-bold sm:text-5xl' },
        'Event Finder'
      ),
      _react2['default'].createElement(
        'p',
        { className: 'text-base' },
        'Browse events using the ',
        _react2['default'].createElement(
          'span',
          { className: 'font-semibold' },
          'Ticketmaster Discovery API'
        ),
        '.'
      ),
      _react2['default'].createElement(_componentsEvents2['default'], null)
    )
  );
}

exports['default'] = Home;
module.exports = exports['default'];