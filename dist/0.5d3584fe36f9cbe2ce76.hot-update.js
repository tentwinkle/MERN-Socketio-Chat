webpackHotUpdate(0,{

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(247);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Index = function (_Component) {\n  _inherits(Index, _Component);\n\n  function Index(props) {\n    _classCallCheck(this, Index);\n\n    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));\n\n    _this.state = {\n      userList: [],\n      userid: window.localStorage.getItem('userid')\n    };\n    _this.addFriend = _this.addFriend.bind(_this);\n    return _this;\n  }\n\n  _createClass(Index, [{\n    key: \"addFriend\",\n    value: function addFriend(e, id) {\n      e.target.disabled = true;\n      var obj = { requestedby: this.state.userid, requestedto: id };\n      fetch(\"/api/sendrequest\", {\n        method: 'post',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify(obj)\n      }).then(function (res) {\n        return res.json();\n      }).then(function (json) {});\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      fetch(\"/api/getuserlist/\" + this.state.userid, { method: 'get', headers: { 'Content-Type': 'application/json' } }).then(function (res) {\n        return res.json();\n      }).then(function (json) {\n        if (json.hasOwnProperty('list')) {\n          var tempData = [];\n\n          json.list.forEach(function (val1, k) {\n            if (val1.hasOwnProperty('friends')) {\n              var isExist = false;\n              val1.friends.forEach(function (frnd, k) {\n                if (frnd.userid === _this2.state.userid) {\n                  isExist = true;\n                }\n              });\n              if (!isExist) {\n                tempData.push(val1);\n              }\n            } else {\n              tempData.push(val1);\n            }\n          });\n          _this2.setState({ userList: tempData });\n        }\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var list = this.state.userList;\n      var listItems = null;\n      if (list.length > 0) {\n        listItems = list.map(function (obj) {\n          return _react2.default.createElement(\n            \"div\",\n            { className: \"col-md-4 col-sm-5 col-xs-12\", key: obj._id },\n            _react2.default.createElement(\n              \"div\",\n              { className: \"panel panel-default\" },\n              _react2.default.createElement(\n                \"div\",\n                { className: \"panel-body\" },\n                _react2.default.createElement(\"img\", { src: \"img/avatars/profile.png\", className: \"image\" }),\n                _react2.default.createElement(\n                  \"h4\",\n                  { className: \"text-capitalize\" },\n                  obj.firstName,\n                  \" \",\n                  obj.lastName\n                ),\n                _react2.default.createElement(\n                  \"p\",\n                  null,\n                  \" \",\n                  obj.email\n                ),\n                _react2.default.createElement(\n                  \"button\",\n                  { className: \"btn btn-primary btn-xs\", onClick: function onClick(e) {\n                      _this3.addFriend(e, obj._id);\n                    } },\n                  _react2.default.createElement(\"i\", { className: \"glyphicon glyphicon-plus\" }),\n                  \"\\xA0 Add as friend \"\n                ),\n                \"\\xA0\",\n                _react2.default.createElement(\n                  \"button\",\n                  { className: \"btn btn-success btn-xs\", onClick: function onClick(e) {\n                      _this3.viewProfile(obj._id);\n                    } },\n                  _react2.default.createElement(\"i\", { className: \"glyphicon glyphicon-envelope\" }),\n                  \"\\xA0View Profile\"\n                )\n              )\n            )\n          );\n        });\n      } else {\n        listItems = _react2.default.createElement(\n          \"div\",\n          null,\n          \"No record \"\n        );\n      }\n\n      return _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(\n          \"div\",\n          { className: \"row\" },\n          listItems\n        )\n      );\n    }\n  }]);\n\n  return Index;\n}(_react.Component);\n\nexports.default = Index;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvaG9tZS9pbmRleC5qcz8yNWFmIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJzdGF0ZSIsInVzZXJMaXN0IiwidXNlcmlkIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFkZEZyaWVuZCIsImJpbmQiLCJlIiwiaWQiLCJ0YXJnZXQiLCJkaXNhYmxlZCIsIm9iaiIsInJlcXVlc3RlZGJ5IiwicmVxdWVzdGVkdG8iLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJqc29uIiwiaGFzT3duUHJvcGVydHkiLCJ0ZW1wRGF0YSIsImxpc3QiLCJmb3JFYWNoIiwidmFsMSIsImsiLCJpc0V4aXN0IiwiZnJpZW5kcyIsImZybmQiLCJwdXNoIiwic2V0U3RhdGUiLCJsaXN0SXRlbXMiLCJsZW5ndGgiLCJtYXAiLCJfaWQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwidmlld1Byb2ZpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztJQUNNQSxLOzs7QUFFSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNWQSxLQURVOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZ0JBQVUsRUFEQztBQUVYQyxjQUFTQyxPQUFPQyxZQUFQLENBQW9CQyxPQUFwQixDQUE2QixRQUE3QjtBQUZFLEtBQWI7QUFJQSxVQUFLQyxTQUFMLEdBQWUsTUFBS0EsU0FBTCxDQUFlQyxJQUFmLE9BQWY7QUFOaUI7QUFPbEI7Ozs7OEJBR1VDLEMsRUFBRUMsRSxFQUFHO0FBQ2RELFFBQUVFLE1BQUYsQ0FBU0MsUUFBVCxHQUFrQixJQUFsQjtBQUNBLFVBQUlDLE1BQUksRUFBRUMsYUFBWSxLQUFLYixLQUFMLENBQVdFLE1BQXpCLEVBQWlDWSxhQUFZTCxFQUE3QyxFQUFSO0FB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O0FBQUE7QUFBQTtBQUFBLFNBQWI7QUFDRDs7QUFFRCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsS0FBZjtBQUNHQTtBQURIO0FBREYsT0FERjtBQVdEOzs7Ozs7a0JBSVlyQyxLIiwiZmlsZSI6IjI0Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4uLy4uL3N0eWxlL2Nzcy9ob21lLnNjc3NcIjtcbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyIChwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVzZXJMaXN0OiBbXSxcbiAgICAgIHVzZXJpZCA6IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSAoJ3VzZXJpZCcpXG4gICAgfTtcbiAgICB0aGlzLmFkZEZyaWVuZD10aGlzLmFkZEZyaWVuZC5iaW5kKHRoaXMpO1xuICB9IDtcbiAgXG4gIFxuICAgYWRkRnJpZW5kKGUsaWQpe1xuICAgIGUudGFyZ2V0LmRpc2FibGVkPXRydWU7XG4gICAgbGV0IG9iaj17IHJlcXVlc3RlZGJ5OnRoaXMuc3RhdGUudXNlcmlkLCByZXF1ZXN0ZWR0bzppZCB9O1xuICAgICBmZXRjaCAoYC9hcGkvc2VuZHJlcXVlc3RgLCBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSxcbiAgICAgICAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeSggb2JqKVxuICAgICAgICAgIH1cbiAgICApLnRoZW4gKHJlcyA9PiByZXMuanNvbiAoKSkudGhlbiAoanNvbiA9PiB7XG4gICAgICAgXG4gICAgfSk7XG4gIH1cbiAgXG4gICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBmZXRjaCAoYC9hcGkvZ2V0dXNlcmxpc3QvJHt0aGlzLnN0YXRlLnVzZXJpZH1gLCB7bWV0aG9kOiAnZ2V0JywgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fVxuICAgICkudGhlbiAocmVzID0+IHJlcy5qc29uICgpKS50aGVuIChqc29uID0+IHtcbiAgICAgIGlmIChqc29uLmhhc093blByb3BlcnR5ICgnbGlzdCcpKSB7XG4gICAgICBsZXQgdGVtcERhdGE9W107ICBcbiAgICAgIFxuICAgICAgICBqc29uLmxpc3QuZm9yRWFjaCgodmFsMSxrKT0+e1xuICAgICAgICAgICAgICAgICAgIGlmKHZhbDEuaGFzT3duUHJvcGVydHkoJ2ZyaWVuZHMnKSl7XG4gICAgICAgICAgICAgICAgICAgICBsZXQgaXNFeGlzdD1mYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICB2YWwxLmZyaWVuZHMuZm9yRWFjaCgoZnJuZCxrKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZnJuZC51c2VyaWQ9PT10aGlzLnN0YXRlLnVzZXJpZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzRXhpc3Q9dHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIGlmKCFpc0V4aXN0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wRGF0YS5wdXNoKHZhbDEpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICB0ZW1wRGF0YS5wdXNoKHZhbDEpIFxuICAgICAgICAgICAgICB9XG4gICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSAoe3VzZXJMaXN0OiB0ZW1wRGF0YX0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBsaXN0ID0gdGhpcy5zdGF0ZS51c2VyTGlzdDtcbiAgICBsZXQgbGlzdEl0ZW1zID0gbnVsbDtcbiAgICBpZiAobGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICBsaXN0SXRlbXMgPSBsaXN0Lm1hcCAoKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgY29sLXNtLTUgY29sLXhzLTEyXCIga2V5PXtvYmouX2lkfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj4gXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9hdmF0YXJzL3Byb2ZpbGUucG5nXCIgY2xhc3NOYW1lPVwiaW1hZ2VcIi8+XG4gICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtY2FwaXRhbGl6ZVwiPntvYmouZmlyc3ROYW1lfSB7b2JqLmxhc3ROYW1lfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgPHA+IHtvYmouZW1haWx9PC9wPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi14c1wiICAgb25DbGljaz17KGUpPT57IHRoaXMuYWRkRnJpZW5kKGUsb2JqLl9pZCl9fT5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICZuYnNwOyBBZGQgYXMgZnJpZW5kIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBidG4teHNcIiBvbkNsaWNrPXsoZSk9PnsgdGhpcy52aWV3UHJvZmlsZShvYmouX2lkKX19PlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLWVudmVsb3BlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAmbmJzcDtWaWV3IFByb2ZpbGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICk7XG4gICAgICB9KTtcblxuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0SXRlbXMgPSAoPGRpdj5ObyByZWNvcmQgPC9kaXY+KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICB7bGlzdEl0ZW1zfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICApO1xuXG5cblxuICB9XG4gIDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvaG9tZS9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///246\n");

/***/ })

})