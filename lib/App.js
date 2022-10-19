'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('./App.css');

var _reactRouterDom = require("react-router-dom");

var _componentsHeader = require('./components/Header');

var _componentsHeader2 = _interopRequireDefault(_componentsHeader);

var _componentsFooter = require('./components/Footer');

var _componentsFooter2 = _interopRequireDefault(_componentsFooter);

var _pagesHome = require('./pages/Home');

var _pagesHome2 = _interopRequireDefault(_pagesHome);

var _pagesEvent = require('./pages/Event');

var _pagesEvent2 = _interopRequireDefault(_pagesEvent);

var _pagesPage404 = require('./pages/Page404');

var _pagesPage4042 = _interopRequireDefault(_pagesPage404);

function App() {
    return React.createElement(
        _reactRouterDom.BrowserRouter,
        { basename: process.env.PUBLIC_URL },
        React.createElement(_componentsHeader2['default'], null),
        React.createElement(
            _reactRouterDom.Routes,
            null,
            React.createElement(_reactRouterDom.Route, { path: '/', element: React.createElement(_pagesHome2['default'], null) }),
            React.createElement(_reactRouterDom.Route, { path: '/event/:id', element: React.createElement(_pagesEvent2['default'], null) }),
            React.createElement(_reactRouterDom.Route, { path: '*', element: React.createElement(_pagesPage4042['default'], null) })
        ),
        React.createElement(_componentsFooter2['default'], null)
    );
}

exports['default'] = App;
module.exports = exports['default'];