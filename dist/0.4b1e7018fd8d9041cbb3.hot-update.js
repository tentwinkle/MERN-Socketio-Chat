webpackHotUpdate(0,{

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _profilecard = __webpack_require__(96);\n\nvar _profilecard2 = _interopRequireDefault(_profilecard);\n\nvar _listing = __webpack_require__(74);\n\nvar _listing2 = _interopRequireDefault(_listing);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Landing = function (_Component) {\n  _inherits(Landing, _Component);\n\n  function Landing(props) {\n    _classCallCheck(this, Landing);\n\n    var _this = _possibleConstructorReturn(this, (Landing.__proto__ || Object.getPrototypeOf(Landing)).call(this, props));\n\n    _this.state = {\n      currentuser: window.localStorage.getItem('userid')\n    };\n    return _this;\n  }\n\n  _createClass(Landing, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'main-landing row content' },\n        function () {\n          if (_this2.state.currentuser) {\n            return _react2.default.createElement(\n              'div',\n              null,\n              _react2.default.createElement(\n                'div',\n                { className: 'col-md-3 col-sm-6 proilecard' },\n                _react2.default.createElement(_profilecard2.default, null)\n              ),\n              _react2.default.createElement(\n                'div',\n                { className: 'col-md-7 col-sm-6' },\n                _react2.default.createElement(_listing2.default, { forall: 'true' })\n              ),\n              _react2.default.createElement(\n                'div',\n                { className: 'col-md-3 col-sm-6' },\n                _react2.default.createElement(_profilecard2.default, null)\n              )\n            );\n          } else {\n            return _react2.default.createElement(\n              'div',\n              null,\n              _react2.default.createElement(\n                'div',\n                { className: 'col-md-8 col-sm-8' },\n                '2'\n              ),\n              _react2.default.createElement('div', { className: 'col-md-4 col-sm-4' })\n            );\n          }\n        }()\n      );\n    }\n  }]);\n\n  return Landing;\n}(_react.Component);\n\n;\n\nexports.default = Landing;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL0NvbnRhaW5lcnMvbGFuZGluZy5qcz9kOGEyIl0sIm5hbWVzIjpbIkxhbmRpbmciLCJwcm9wcyIsInN0YXRlIiwiY3VycmVudHVzZXIiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ01BLE87OztBQUVOLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0hBQ1pBLEtBRFk7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNiQyxtQkFBYUMsT0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNkIsUUFBN0I7QUFEQSxLQUFiO0FBRmlCO0FBS2xCOzs7OzZCQUVRO0FBQUE7O0FBQ1QsYUFDQTtBQUFBO0FBQUEsVUFBSyxXQUFVLDBCQUFmO0FBR0csb0JBQU07QUFDUCxjQUFJLE9BQUtKLEtBQUwsQ0FBV0MsV0FBZixFQUE0QjtBQUM1QixtQkFDQTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsa0JBQUssV0FBVSw4QkFBZjtBQUNHO0FBREgsZUFERjtBQUlFO0FBQUE7QUFBQSxrQkFBSyxXQUFVLG1CQUFmO0FBQ0ksbUVBQVMsUUFBTyxNQUFoQjtBQURKLGVBSkY7QUFPRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxtQkFBZjtBQUNJO0FBREo7QUFQRixhQURBO0FBYUMsV0FkRCxNQWNLO0FBQ0gsbUJBQ0Y7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGtCQUFLLFdBQVUsbUJBQWY7QUFBQTtBQUFBLGVBREY7QUFJRSxxREFBSyxXQUFVLG1CQUFmO0FBSkYsYUFERTtBQVVEO0FBRUEsU0E1QkQ7QUFIRixPQURBO0FBc0NDOzs7Ozs7QUFFRDs7a0JBRWVILE8iLCJmaWxlIjoiOTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUHJvZmlsZWNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGVjYXJkJztcbmltcG9ydCBMaXN0aW5nIGZyb20gJy4uL2NvbXBvbmVudHMvbXlwb3N0L2xpc3RpbmcnO1xuY2xhc3MgTGFuZGluZyBleHRlbmRzIENvbXBvbmVudCB7XG5cbmNvbnN0cnVjdG9yKHByb3BzKSB7XG5zdXBlciAocHJvcHMpO1xuICB0aGlzLnN0YXRlID0ge1xuICBjdXJyZW50dXNlcjogd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtICgndXNlcmlkJylcbiAgfTtcbn1cblxucmVuZGVyKCkge1xucmV0dXJuIChcbjxkaXYgY2xhc3NOYW1lPVwibWFpbi1sYW5kaW5nIHJvdyBjb250ZW50XCI+XG5cbiAge1xuICAoKCkgPT4ge1xuICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50dXNlcikge1xuICByZXR1cm4gKFxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTMgY29sLXNtLTYgcHJvaWxlY2FyZFwiPiBcbiAgICAgICA8UHJvZmlsZWNhcmQvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTcgY29sLXNtLTZcIj5cbiAgICAgICAgPExpc3RpbmcgZm9yYWxsPVwidHJ1ZVwiLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zIGNvbC1zbS02XCI+XG4gICAgICAgIDxQcm9maWxlY2FyZC8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICApO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gKFxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTggY29sLXNtLThcIj5cbiAgICAgIDJcbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IGNvbC1zbS00XCI+IFxuXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICAgICAgKTtcbiAgfVxuXG4gIH0pKClcbiAgfVxuPC9kaXY+XG5cblxuICAgICk7XG59XG59XG47XG5cbmV4cG9ydCBkZWZhdWx0IExhbmRpbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL0NvbnRhaW5lcnMvbGFuZGluZy5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///95\n");

/***/ })

})