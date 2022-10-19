'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _EventCard = require('./EventCard');

var _EventCard2 = _interopRequireDefault(_EventCard);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reactPaginate = require('react-paginate');

var _reactPaginate2 = _interopRequireDefault(_reactPaginate);

var _fortawesomeReactFontawesome = require('@fortawesome/react-fontawesome');

var _fortawesomeFontawesomeSvgCoreImportMacro = require('@fortawesome/fontawesome-svg-core/import.macro');

// Return our Events page
function Events() {

    // This fetches our events from the Ticketmaster Discovery API
    function GetEvents() {

        var url = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=8dm6Huu1R3l6vMc5lbGrcS4OR0MT3GgE&size=80';

        var _useState = (0, _react.useState)([]);

        var _useState2 = _slicedToArray(_useState, 2);

        var events = _useState2[0];
        var setEvents = _useState2[1];

        (0, _react.useEffect)(function () {
            _axios2['default'].get(url).then(function (res) {
                setEvents(res.data._embedded.events);
            })['catch'](function (err) {
                console.log('error from catch');
                console.log(err);
            });
        }, [url]);

        return events;
    }

    //Setting variables to be used in our page's return statement
    var events = GetEvents();

    var _useState3 = (0, _react.useState)(0);

    var _useState32 = _slicedToArray(_useState3, 2);

    var pageNumber = _useState32[0];
    var setPageNumber = _useState32[1];

    var eventsPerPage = 8;
    var pagesVisited = pageNumber * eventsPerPage;

    // This displays our 8 events per page
    var displayEvents = events.slice(pagesVisited, pagesVisited + eventsPerPage).map(function (event) {
        return _react2['default'].createElement(_EventCard2['default'], {
            name: event.name,
            key: event.id,
            url: event.id
        });
    });

    // Used to determine the total pages used in <ReactPaginate>
    var pageCount = Math.ceil(events.length / eventsPerPage);

    // Used by <ReactPaginate> to do page magic
    var changePage = function changePage(_ref) {
        var selected = _ref.selected;

        setPageNumber(selected);
    };

    // Here, we map our events to the event card once "events" is loaded
    return _react2['default'].createElement(
        'div',
        { className: 'pt-10 flex flex-col justify-center content-center items-stretch md:flex-row md:flex-wrap' },
        displayEvents,
        _react2['default'].createElement(_reactPaginate2['default'], {
            previousLabel: _react2['default'].createElement(_fortawesomeReactFontawesome.FontAwesomeIcon, { icon: (0, _fortawesomeFontawesomeSvgCoreImportMacro.light)('angle-left') }),
            nextLabel: _react2['default'].createElement(_fortawesomeReactFontawesome.FontAwesomeIcon, { icon: (0, _fortawesomeFontawesomeSvgCoreImportMacro.light)('angle-right') }),
            pageCount: pageCount,
            onPageChange: changePage,
            containerClassName: "flex flex-row justify-center items-center",
            previousClassName: "pr-2",
            nextClassName: "pr-2",
            previousLinkClassName: "px-4 py-2 rounded hover:bg-blue-600 hover:text-white",
            nextLinkClassName: "px-4 py-2 rounded hover:bg-blue-600 hover:text-white",
            activeClassName: "font-bold",
            activeLinkClassName: "text-blue-500",
            pageClassName: "px-2 hidden lg:block",
            pageLinkClassName: "px-4 py-2 text-black rounded hover:bg-blue-600 hover:text-white",
            breakClassName: "hidden lg:block",
            disabledClassName: "opacity-50 hover:bg-none cursor-default"
        })
    );
}

exports['default'] = Events;
module.exports = exports['default'];
/* {events ? ( */ /* ) : (
                     // This is shown until 'events' is loaded
                     <p>Loading...</p>
                  )}     */