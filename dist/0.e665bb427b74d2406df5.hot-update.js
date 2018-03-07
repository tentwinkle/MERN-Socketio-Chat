webpackHotUpdate(0,{

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(97);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Profilecard = function (_Component) {\n  _inherits(Profilecard, _Component);\n\n  function Profilecard(props) {\n    _classCallCheck(this, Profilecard);\n\n    var _this = _possibleConstructorReturn(this, (Profilecard.__proto__ || Object.getPrototypeOf(Profilecard)).call(this, props));\n\n    _this.state = {\n      name: null,\n      tagline: '',\n      taglineshow: _this.props.hasOwnProperty('tag') ? _this.props.tag : ''\n\n    };\n\n    return _this;\n  }\n\n  _createClass(Profilecard, [{\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      var _this2 = this;\n\n      if (!this.props.hasOwnProperty('servicecall')) {\n        var id = window.localStorage.getItem('userid');\n        fetch(\"/api/getuserdetail/\" + id, { method: 'get', headers: { 'Content-Type': 'application/json' } }).then(function (res) {\n          return res.json();\n        }).then(function (json) {\n          console.log(json);\n          if (json.hasOwnProperty('list')) {\n            var obj = {\n              'name': json.list[0].firstName + \" \" + json.list[0].lastName,\n              'city': json.list[0].city,\n              'country': json.list[0].country\n            };\n            if (json.list[0].hasOwnProperty('userDetail')) {\n              obj.tagline = json.list[0].userDetail.hasOwnProperty('aboutme') ? json.list[0].userDetail.aboutme.tagline : '';\n              if (json.list[0].userDetail.hasOwnProperty('professional')) {\n                obj.professional = json.list[0].userDetail.professional;\n              }\n            }\n\n            _this2.setState(obj);\n          }\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      console.log(this.state);\n      return _react2.default.createElement(\n        \"div\",\n        { className: \"card\" },\n        _react2.default.createElement(\"div\", { className: \"cardheader\" }),\n        _react2.default.createElement(\n          \"h4\",\n          { className: \"text-capitalize\" },\n          this.state.name\n        ),\n        function () {\n          if (_this3.state.hasOwnProperty('city') && _this3.state.city !== '') {\n            return _react2.default.createElement(\n              \"p\",\n              null,\n              \" \",\n              _react2.default.createElement(\"span\", { className: \"glyphicon glyphicon-map-marker\" }),\n              \":\",\n              _this3.state.city,\n              \" \",\n              _this3.state.country\n            );\n          }\n        }(),\n        _react2.default.createElement(\"hr\", null),\n        function () {\n          if (_this3.state.hasOwnProperty('professional')) {\n            var str = '';\n            if (_this3.state.professional.hasOwnProperty('occupation')) {\n              str += _this3.state.professional.occupation;\n            };\n\n            if (_this3.state.professional.hasOwnProperty('company')) {\n              str += \", \" + _this3.state.professional.company;\n            };\n            return _react2.default.createElement(\n              \"p\",\n              { className: \"title\" },\n              \"  \",\n              _react2.default.createElement(\"hr\", null),\n              \" \",\n              str\n            );\n          }\n        }(),\n        _react2.default.createElement(\n          \"p\",\n          null,\n          _react2.default.createElement(\"span\", { \"class\": \"glyphicon glyphicon-tags\" }),\n          \"\\xA0\",\n          _react2.default.createElement(\n            \"i\",\n            null,\n            this.state.tagline\n          )\n        ),\n        _react2.default.createElement(\"hr\", null),\n        _react2.default.createElement(\"hr\", null)\n      );\n    }\n  }]);\n\n  return Profilecard;\n}(_react.Component);\n\nexports.default = Profilecard;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlY2FyZC5qcz81YzI1Il0sIm5hbWVzIjpbIlByb2ZpbGVjYXJkIiwicHJvcHMiLCJzdGF0ZSIsIm5hbWUiLCJ0YWdsaW5lIiwidGFnbGluZXNob3ciLCJoYXNPd25Qcm9wZXJ0eSIsInRhZyIsImlkIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIm9iaiIsImxpc3QiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImNpdHkiLCJjb3VudHJ5IiwidXNlckRldGFpbCIsImFib3V0bWUiLCJwcm9mZXNzaW9uYWwiLCJzZXRTdGF0ZSIsInN0ciIsIm9jY3VwYXRpb24iLCJjb21wYW55Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUEsVzs7O0FBRUosdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwSEFDVkEsS0FEVTs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU0sSUFESztBQUVYQyxlQUFTLEVBRkU7QUFHWEMsbUJBQWEsTUFBS0osS0FBTCxDQUFXSyxjQUFYLENBQTJCLEtBQTNCLElBQW9DLE1BQUtMLEtBQUwsQ0FBV00sR0FBL0MsR0FBcUQ7O0FBSHZELEtBQWI7O0FBRmlCO0FBU2xCOzs7O3lDQUVvQjtBQUFBOztBQUVuQixVQUFJLENBQUMsS0FBS04sS0FBTCxDQUFXSyxjQUFYLENBQTJCLGFBQTNCLENBQUwsRUFBZ0Q7QUFDOUMsWUFBSUUsS0FBS0MsT0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNkIsUUFBN0IsQ0FBVDtBQUNBQyxzQ0FBNkJKLEVBQTdCLEVBQW1DLEVBQUNLLFFBQVEsS0FBVCxFQUFnQkMsU0FBUyxFQUFDLGdCQUFnQixrQkFBakIsRUFBekIsRUFBbkMsRUFD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SjtBQStCRSxpREEvQkY7QUFnQ0k7QUFoQ0osT0FETjtBQW9DQzs7Ozs7O2tCQUlZSixXIiwiZmlsZSI6Ijk2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi4vLi4vc3R5bGUvY3NzL3Byb2ZpbGVjYXJkLnNjc3NcIjtcblxuY2xhc3MgUHJvZmlsZWNhcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIgKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmFtZTogbnVsbCxcbiAgICAgIHRhZ2xpbmU6ICcnLFxuICAgICAgdGFnbGluZXNob3c6IHRoaXMucHJvcHMuaGFzT3duUHJvcGVydHkgKCd0YWcnKSA/IHRoaXMucHJvcHMudGFnIDogJydcbiAgICAgIFxuICAgIH07XG5cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblxuICAgIGlmICghdGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSAoJ3NlcnZpY2VjYWxsJykpIHtcbiAgICAgIHZhciBpZCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSAoJ3VzZXJpZCcpO1xuICAgICAgZmV0Y2ggKGAvYXBpL2dldHVzZXJkZXRhaWwvJHtpZH1gLCB7bWV0aG9kOiAnZ2V0JywgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fVxuICAgICAgKS50aGVuIChyZXMgPT4gcmVzLmpzb24gKClcbiAgICAgICkudGhlbiAoanNvbiA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGpzb24pXG4gICAgICAgIGlmIChqc29uLmhhc093blByb3BlcnR5ICgnbGlzdCcpKSB7XG4gICAgICAgICAgdmFyIG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAnbmFtZSc6IGpzb24ubGlzdFswXS5maXJzdE5hbWUgKyBcIiBcIiArIGpzb24ubGlzdFswXS5sYXN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgJ2NpdHknOmpzb24ubGlzdFswXS5jaXR5LFxuICAgICAgICAgICAgICAgICAgICAnY291bnRyeSc6anNvbi5saXN0WzBdLmNvdW50cnlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoanNvbi5saXN0WzBdLmhhc093blByb3BlcnR5ICgndXNlckRldGFpbCcpKSB7XG4gICAgICAgICAgICBvYmoudGFnbGluZSA9IGpzb24ubGlzdFswXS51c2VyRGV0YWlsLmhhc093blByb3BlcnR5ICgnYWJvdXRtZScpID8ganNvbi5saXN0WzBdLnVzZXJEZXRhaWwuYWJvdXRtZS50YWdsaW5lIDogJydcbiAgICAgICAgICAgICBpZiAoanNvbi5saXN0WzBdLnVzZXJEZXRhaWwuaGFzT3duUHJvcGVydHkgKCdwcm9mZXNzaW9uYWwnKSkge1xuICAgICAgICAgICAgICAgIG9iai5wcm9mZXNzaW9uYWwgPSBqc29uLmxpc3RbMF0udXNlckRldGFpbC5wcm9mZXNzaW9uYWw7XG4gICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgICAgXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSAob2JqKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZGhlYWRlclwiPjwvZGl2PlxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWNhcGl0YWxpemVcIj57dGhpcy5zdGF0ZS5uYW1lfTwvaDQ+XG4gICAgICAgICAgIHsoKCk9PntcbiAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmhhc093blByb3BlcnR5KCdjaXR5JykgJiYgdGhpcy5zdGF0ZS5jaXR5ICE9PScnKSB7XG4gICAgICAgICAgICAgICAgICAgcmV0dXJuICggPHA+IDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tbWFwLW1hcmtlclwiPjwvc3Bhbj46e3RoaXMuc3RhdGUuY2l0eX0ge3RoaXMuc3RhdGUuY291bnRyeX08L3A+KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKCl9IFxuICAgICAgICAgIFxuICAgICAgICAgIDxociAvPlxuICAgICAgICAgICB7KCgpPT57XG4gICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5oYXNPd25Qcm9wZXJ0eSgncHJvZmVzc2lvbmFsJykpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBzdHI9Jyc7XG4gICAgICAgICAgICAgICAgICBpZih0aGlzLnN0YXRlLnByb2Zlc3Npb25hbC5oYXNPd25Qcm9wZXJ0eSAoJ29jY3VwYXRpb24nKSl7XG4gICAgICAgICAgICAgICAgICAgICAgc3RyKz10aGlzLnN0YXRlLnByb2Zlc3Npb25hbC5vY2N1cGF0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUucHJvZmVzc2lvbmFsLmhhc093blByb3BlcnR5ICgnY29tcGFueScpKXtcbiAgICAgICAgICAgICAgICAgICAgICBzdHIrPVwiLCBcIiArdGhpcy5zdGF0ZS5wcm9mZXNzaW9uYWwuY29tcGFueTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj4gIDxociAvPiB7c3RyfTwvcD5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgXG4gICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH0pKCl9IFxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRhZ3NcIj48L3NwYW4+Jm5ic3A7PGk+e3RoaXMuc3RhdGUudGFnbGluZX08L2k+PC9wPlxuICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gIH1cbiAgO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlY2FyZDtcblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGVjYXJkLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///96\n");

/***/ })

})