'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _componentsContainer = require('../components/Container');

var _componentsContainer2 = _interopRequireDefault(_componentsContainer);

var _reactRouterDom = require('react-router-dom');

var Event = function Event() {
    var _useState = (0, _react.useState)([]);

    var _useState2 = _slicedToArray(_useState, 2);

    var data = _useState2[0];
    var setData = _useState2[1];

    var _useParams = (0, _reactRouterDom.useParams)();

    var id = _useParams.id;

    var url = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=8dm6Huu1R3l6vMc5lbGrcS4OR0MT3GgE&id=' + id;

    (0, _react.useEffect)(function () {
        _axios2['default'].get(url).then(function (res) {
            setData(res.data._embedded.events[0]);
        })['catch'](function (err) {
            console.log(err);
        });
    }, [url]);

    // Only return our event page if data is not empty
    if (data.length !== 0) {
        var _name = data.name;
        var info = data.info;
        var link = data.url;
        var pleaseNote = data.pleaseNote;
        var venue = data._embedded.venues[0].name ? data._embedded.venues[0].name : null;
        var time = data.dates.start.localTime;
        var date = data.dates.start.localDate;

        // Here, we return our Event page, passing in our event data
        return _react2['default'].createElement(
            _componentsContainer2['default'],
            null,
            _react2['default'].createElement(
                'div',
                { className: 'text-center', key: data.id },
                _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(
                        'h1',
                        { className: 'text-4xl pb-4 text-center font-bold sm:text-5xl' },
                        _name
                    ),
                    date && time ? _react2['default'].createElement(
                        'p',
                        { className: 'pt-4 font-bold' },
                        date,
                        ' at ',
                        time
                    ) : null,
                    venue ? _react2['default'].createElement(
                        'p',
                        { className: 'pt-2 font-bold' },
                        venue
                    ) : null,
                    info ? _react2['default'].createElement(
                        'p',
                        { className: 'pt-4' },
                        _react2['default'].createElement(
                            'span',
                            { className: 'font-bold' },
                            'Info: '
                        ),
                        info
                    ) : null,
                    pleaseNote ? _react2['default'].createElement(
                        'p',
                        { className: 'pt-10' },
                        _react2['default'].createElement(
                            'span',
                            { className: 'font-bold' },
                            'Please Note: '
                        ),
                        pleaseNote
                    ) : null,
                    _react2['default'].createElement(
                        'p',
                        { className: 'pt-4' },
                        'For more information, visit: ',
                        _react2['default'].createElement(
                            'a',
                            { className: 'text-blue-600 hover:underline', href: link },
                            'Ticketmaster.com'
                        ),
                        '.'
                    )
                )
            )
        );
    } else {
        return;
    }
};

exports['default'] = Event;
module.exports = exports['default'];