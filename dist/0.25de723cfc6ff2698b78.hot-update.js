webpackHotUpdate(0,{144:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(145);\n\nvar _pubsubJs = __webpack_require__(11);\n\nvar _pubsubJs2 = _interopRequireDefault(_pubsubJs);\n\nvar _profilecard = __webpack_require__(146);\n\nvar _profilecard2 = _interopRequireDefault(_profilecard);\n\nvar _suggestlist = __webpack_require__(147);\n\nvar _suggestlist2 = _interopRequireDefault(_suggestlist);\n\nvar _userlist = __webpack_require__(65);\n\nvar _userlist2 = _interopRequireDefault(_userlist);\n\nvar _myposts = __webpack_require__(52);\n\nvar _myposts2 = _interopRequireDefault(_myposts);\n\nvar _chatwindow = __webpack_require__(53);\n\nvar _chatwindow2 = _interopRequireDefault(_chatwindow);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Landing = function (_Component) {\n  _inherits(Landing, _Component);\n\n  function Landing(props) {\n    _classCallCheck(this, Landing);\n\n    var _this = _possibleConstructorReturn(this, (Landing.__proto__ || Object.getPrototypeOf(Landing)).call(this, props));\n\n    _this.state = {\n      currentuser: window.localStorage.getItem('userid'),\n      isnotify: 'dn'\n    };\n    _pubsubJs2.default.subscribe('LANDING_MESSGAE', function (type, obj) {\n      _this.setState({ \"alertmessage\": obj.message, isnotify: 'bd' });\n    });\n    return _this;\n  }\n\n  _createClass(Landing, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'main-landing row content' },\n        function () {\n          if (_this2.state.currentuser) {\n            return _react2.default.createElement(\n              'div',\n              { className: 'landing-page' },\n              _react2.default.createElement(\n                'div',\n                { className: 'col-md-3 col-sm-6 proilecard' },\n                _react2.default.createElement(_profilecard2.default, null),\n                _react2.default.createElement(\n                  'div',\n                  { className: 'panel panel-default' },\n                  _react2.default.createElement(\n                    'div',\n                    { className: 'panel-heading' },\n                    _react2.default.createElement(\n                      'h5',\n                      null,\n                      _react2.default.createElement(\n                        'b',\n                        null,\n                        'Conversation '\n                      ),\n                      ' '\n                    )\n                  ),\n                  _react2.default.createElement(_userlist2.default, null)\n                )\n              ),\n              _react2.default.createElement(\n                'div',\n                { className: 'col-md-6 col-sm-6' },\n                _react2.default.createElement(\n                  'div',\n                  { className: 'alert alert-success ' + _this2.state.isnotify + ' ' },\n                  _react2.default.createElement(\n                    'strong',\n                    null,\n                    'Add user in you Conversation list.'\n                  )\n                ),\n                _react2.default.createElement(_myposts2.default, { forall: 'true' })\n              ),\n              _react2.default.createElement(\n                'div',\n                { className: 'col-md-3 col-sm-6 proilecard' },\n                _react2.default.createElement(_suggestlist2.default, null)\n              ),\n              _react2.default.createElement(_chatwindow2.default, null)\n            );\n          } else {\n            return _react2.default.createElement(\n              'div',\n              null,\n              _react2.default.createElement(\n                'div',\n                { className: 'col-md-8 col-sm-8' },\n                _react2.default.createElement(_myposts2.default, { forall: 'true' })\n              ),\n              _react2.default.createElement('div', { className: 'col-md-4 col-sm-4' })\n            );\n          }\n        }()\n      );\n    }\n  }]);\n\n  return Landing;\n}(_react.Component);\n\n;\n\nexports.default = Landing;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbnRhaW5lcnMvbGFuZGluZy5qcz8xZTI5Il0sIm5hbWVzIjpbIkxhbmRpbmciLCJwcm9wcyIsInN0YXRlIiwiY3VycmVudHVzZXIiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaXNub3RpZnkiLCJzdWJzY3JpYmUiLCJ0eXBlIiwib2JqIiwic2V0U3RhdGUiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDTUEsTzs7O0FBRUosbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxrSEFDVkEsS0FEVTs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLG1CQUFhQyxPQUFPQyxZQUFQLENBQW9CQyxPQUFwQixDQUE2QixRQUE3QixDQURGO0FBRVhDLGdCQUFVO0FBRkMsS0FBYjtBQUlDLHVCQUFPQyxTQUFQLENBQWtCLGlCQUFsQixFQUFxQyxVQUFDQyxJQUFELEVBQU1DLEdBQU4sRUFBWTtBQUMvQyxZQUFLQyxRQUFMLENBQWMsRUFBQyxnQkFBZUQsSUFBSUUsT0FBcEIsRUFBNEJMLFVBQVMsSUFBckMsRUFBZDtBQUNELEtBRkQ7QUFOZ0I7QUFTbEI7Ozs7NkJBRVE7QUFBQTs7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsMEJBQWY7QUFHSyxvQkFBTTtBQUNMLGNBQUksT0FBS0wsS0FBTCxDQUFXQyxXQUFmLEVBQTRCO0FBQ3hCLG1CQUNJO0FBQUE7QUFBQSxnQkFBSyxXQUFVLGNBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQUssV0FBVSw4QkFBZjtBQUNFLDBFQURGO0FBRUU7QUFBQTtBQUFBLG9CQUFLLFdBQVUscUJBQWY7QUFDRTtBQUFBO0FBQUEsc0JBQUssV0FBVSxlQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBSjtBQUFBO0FBQUE7QUFERixtQkFERjtBQUlFO0FBSkY7QUFGRixlQURGO0FBV0U7QUFBQTtBQUFBLGtCQUFLLFdBQVUsbUJBQWY7QUFDRTtBQUFBO0FBQUEsb0JBQUssb0NBQWtDLE9BQUtELEtBQUwsQ0FBV0ssUUFBN0MsTUFBTDtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixpQkFERjtBQUlFLG1FQUFTLFFBQU8sTUFBaEI7QUFKRixlQVhGO0FBaUJFO0FBQUE7QUFBQSxrQkFBSyxXQUFVLDhCQUFmO0FBQ0U7QUFERixlQWpCRjtBQW9CRTtBQXBCRixhQURKO0FBd0JQLFdBekJHLE1BeUJDO0FBQ0ssbUJBQ0k7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGtCQUFLLFdBQVUsbUJBQWY7QUFDRSxtRUFBUyxRQUFPLE1BQWhCO0FBREYsZUFERjtBQUlFLHFEQUFLLFdBQVUsbUJBQWY7QUFKRixhQURKO0FBV1Q7QUFFQSxTQXhDQztBQUhKLE9BREY7QUFtREQ7Ozs7OztBQUVIOztrQkFFZVAsTyIsImZpbGUiOiIxNDQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFwiLi4vc3R5bGUvY3NzL21haW5wYWdlLnNjc3NcIjtcbmltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJztcbmltcG9ydCBQcm9maWxlY2FyZCBmcm9tICcuLi9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZWNhcmQnO1xuaW1wb3J0IE5ld2ZyaWVuZCBmcm9tICcuLi9jb21wb25lbnRzL21haW4vc3VnZ2VzdGxpc3QnO1xuaW1wb3J0IFVzZXJMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvdXNlcnMvdXNlcmxpc3QnO1xuaW1wb3J0IE15UG9zdHMgZnJvbSAnLi4vY29tcG9uZW50cy9teXBvc3QvbXlwb3N0cyc7XG5pbXBvcnQgQ2hhdHdpbmRvdyBmcm9tICcuLi9jb21wb25lbnRzL2NoYXR3aW5kb3cvY2hhdHdpbmRvdyc7XG5jbGFzcyBMYW5kaW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyIChwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGN1cnJlbnR1c2VyOiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0gKCd1c2VyaWQnKSxcbiAgICAgIGlzbm90aWZ5OiAnZG4nXG4gICAgfTtcbiAgICAgUHViU3ViLnN1YnNjcmliZSAoJ0xBTkRJTkdfTUVTU0dBRScsICh0eXBlLG9iaik9PntcbiAgICAgICB0aGlzLnNldFN0YXRlKHtcImFsZXJ0bWVzc2FnZVwiOm9iai5tZXNzYWdlLGlzbm90aWZ5OidiZCd9KVxuICAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWxhbmRpbmcgcm93IGNvbnRlbnRcIj5cbiAgICAgIFxuICAgICAgICB7XG4gICAgICAgICAgKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnR1c2VyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5kaW5nLXBhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zIGNvbC1zbS02IHByb2lsZWNhcmRcIj4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZWNhcmQvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT48Yj5Db252ZXJzYXRpb24gPC9iPiA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFVzZXJMaXN0Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BhbGVydCBhbGVydC1zdWNjZXNzICR7dGhpcy5zdGF0ZS5pc25vdGlmeX0gYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+QWRkIHVzZXIgaW4geW91IENvbnZlcnNhdGlvbiBsaXN0Ljwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TXlQb3N0cyBmb3JhbGw9XCJ0cnVlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTMgY29sLXNtLTYgcHJvaWxlY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5ld2ZyaWVuZC8+ICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPENoYXR3aW5kb3cvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOCBjb2wtc20tOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TXlQb3N0cyBmb3JhbGw9XCJ0cnVlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IGNvbC1zbS00XCI+IFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICB9KSgpXG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICk7XG4gIH1cbn1cbjtcblxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvY29udGFpbmVycy9sYW5kaW5nLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///144\n")}});