'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var EventCard = function EventCard(props) {
    return _react2['default'].createElement(
        'div',
        { className: 'flex justify-center flex-col mb-10 min-w-full md:min-w-0 md:p-2 md:basis-1/2 2xl:basis-1/4', key: props.url },
        _react2['default'].createElement(
            'div',
            { className: 'flex flex-col items-center justify-center h-full align-center p-6 rounded-lg shadow-lg bg-white' },
            _react2['default'].createElement(
                'h2',
                { className: 'block text-gray-900 text-xl leading-tight font-medium mb-4' },
                props.name
            ),
            _react2['default'].createElement(
                _reactRouterDom.Link,
                { to: '/event/' + props.url, className: 'focus:ring-4 focus:outline-none focus:border-sky-800 focus:bg-blue-700 focus:shadow-lg w-fit inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg  active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out' },
                'Learn more'
            )
        )
    );
};

exports['default'] = EventCard;
module.exports = exports['default'];