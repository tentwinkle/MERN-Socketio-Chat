webpackHotUpdate(0,{

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(97);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Profilecard = function (_Component) {\n  _inherits(Profilecard, _Component);\n\n  function Profilecard(props) {\n    _classCallCheck(this, Profilecard);\n\n    var _this = _possibleConstructorReturn(this, (Profilecard.__proto__ || Object.getPrototypeOf(Profilecard)).call(this, props));\n\n    _this.state = {\n      name: null,\n      tagline: '',\n      taglineshow: _this.props.hasOwnProperty('tag') ? _this.props.tag : ''\n\n    };\n\n    return _this;\n  }\n\n  _createClass(Profilecard, [{\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      var _this2 = this;\n\n      if (!this.props.hasOwnProperty('servicecall')) {\n        var id = window.localStorage.getItem('userid');\n        fetch(\"/api/getuserdetail/\" + id, { method: 'get', headers: { 'Content-Type': 'application/json' } }).then(function (res) {\n          return res.json();\n        }).then(function (json) {\n          console.log(json);\n          if (json.hasOwnProperty('list')) {\n            var obj = {\n              'name': json.list[0].firstName + \" \" + json.list[0].lastName,\n              'city': json.list[0].city,\n              'country': json.list[0].country\n            };\n            if (json.list[0].hasOwnProperty('userDetail')) {\n              obj.tagline = json.list[0].userDetail.hasOwnProperty('aboutme') ? json.list[0].userDetail.aboutme.tagline : '';\n              if (json.list[0].userDetail.hasOwnProperty('professional')) {\n                obj.professional = json.list[0].userDetail.professional;\n              }\n            }\n\n            _this2.setState(obj);\n          }\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      console.log(this.state);\n      return _react2.default.createElement(\n        \"div\",\n        { className: \"card\" },\n        _react2.default.createElement(\"div\", { className: \"cardheader\" }),\n        _react2.default.createElement(\n          \"h4\",\n          { className: \"text-capitalize\" },\n          this.state.name\n        ),\n        function () {\n          if (_this3.state.hasOwnProperty('professional')) {\n            var str = '';\n            if (_this3.state.professional.hasOwnProperty('occupation')) {\n              str += _this3.state.professional.occupation;\n            };\n\n            if (_this3.state.professional.hasOwnProperty('company')) {\n              str += \", \" + _this3.state.professional.company;\n            };\n            return _react2.default.createElement(\n              \"p\",\n              { className: \"title\" },\n              str\n            );\n          }\n        }(),\n        _react2.default.createElement(\"hr\", null),\n        function () {\n          if (_this3.state.hasOwnProperty('city') && _this3.state.city !== '') {\n            return _react2.default.createElement(\n              \"p\",\n              null,\n              _react2.default.createElement(\"span\", { className: \"glyphicon glyphicon-map-marker\" }),\n              \":\",\n              _this3.state.city,\n              \" \",\n              _this3.state.country\n            );\n          }\n        }(),\n        _react2.default.createElement(\n          \"p\",\n          null,\n          _react2.default.createElement(\"span\", { \"class\": \"glyphicon glyphicon-tags\" }),\n          \"\\xA0\",\n          _react2.default.createElement(\n            \"i\",\n            null,\n            this.state.tagline\n          )\n        ),\n        _react2.default.createElement(\"hr\", null)\n      );\n    }\n  }]);\n\n  return Profilecard;\n}(_react.Component);\n\nexports.default = Profilecard;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlY2FyZC5qcz81YzI1Il0sIm5hbWVzIjpbIlByb2ZpbGVjYXJkIiwicHJvcHMiLCJzdGF0ZSIsIm5hbWUiLCJ0YWdsaW5lIiwidGFnbGluZXNob3ciLCJoYXNPd25Qcm9wZXJ0eSIsInRhZyIsImlkIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIm9iaiIsImxpc3QiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImNpdHkiLCJjb3VudHJ5IiwidXNlckRldGFpbCIsImFib3V0bWUiLCJwcm9mZXNzaW9uYWwiLCJzZXRTdGF0ZSIsInN0ciIsIm9jY3VwYXRpb24iLCJjb21wYW55Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUEsVzs7O0FBRUosdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwSEFDVkEsS0FEVTs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU0sSUFESztBQUVYQyxlQUFTLEVBRkU7QUFHWEMsbUJBQWEsTUFBS0osS0FBTCxDQUFXSyxjQUFYLENBQTJCLEtBQTNCLElBQW9DLE1BQUtMLEtBQUwsQ0FBV00sR0FBL0MsR0FBcUQ7O0FBSHZELEtBQWI7O0FBRmlCO0FBU2xCOzs7O3lDQUVvQjtBQUFBOztBQUVuQixVQUFJLENBQUMsS0FBS04sS0FBTCxDQUFXSyxjQUFYLENBQTJCLGFBQTNCLENBQUwsRUFBZ0Q7QUFDOUMsWUFBSUUsS0FBS0MsT0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNkIsUUFBN0IsQ0FBVDtBQUNBQyxzQ0FBNkJKLEVBQTdCLEVBQW1DLEVBQUNLLFFBQVEsS0FBVCxFQUFnQkMsU0FBUyxFQUFDLGdCQUFnQixrQkFBakIsRUFBekIsRUFBbkMsRUFD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Ozs7OztrQkFJWUosVyIsImZpbGUiOiI5Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4uLy4uL3N0eWxlL2Nzcy9wcm9maWxlY2FyZC5zY3NzXCI7XG5cbmNsYXNzIFByb2ZpbGVjYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyIChwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hbWU6IG51bGwsXG4gICAgICB0YWdsaW5lOiAnJyxcbiAgICAgIHRhZ2xpbmVzaG93OiB0aGlzLnByb3BzLmhhc093blByb3BlcnR5ICgndGFnJykgPyB0aGlzLnByb3BzLnRhZyA6ICcnXG4gICAgICBcbiAgICB9O1xuXG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cbiAgICBpZiAoIXRoaXMucHJvcHMuaGFzT3duUHJvcGVydHkgKCdzZXJ2aWNlY2FsbCcpKSB7XG4gICAgICB2YXIgaWQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0gKCd1c2VyaWQnKTtcbiAgICAgIGZldGNoIChgL2FwaS9nZXR1c2VyZGV0YWlsLyR7aWR9YCwge21ldGhvZDogJ2dldCcsIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfX1cbiAgICAgICkudGhlbiAocmVzID0+IHJlcy5qc29uICgpXG4gICAgICApLnRoZW4gKGpzb24gPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhqc29uKVxuICAgICAgICBpZiAoanNvbi5oYXNPd25Qcm9wZXJ0eSAoJ2xpc3QnKSkge1xuICAgICAgICAgIHZhciBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgJ25hbWUnOiBqc29uLmxpc3RbMF0uZmlyc3ROYW1lICsgXCIgXCIgKyBqc29uLmxpc3RbMF0ubGFzdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICdjaXR5Jzpqc29uLmxpc3RbMF0uY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgJ2NvdW50cnknOmpzb24ubGlzdFswXS5jb3VudHJ5XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGpzb24ubGlzdFswXS5oYXNPd25Qcm9wZXJ0eSAoJ3VzZXJEZXRhaWwnKSkge1xuICAgICAgICAgICAgb2JqLnRhZ2xpbmUgPSBqc29uLmxpc3RbMF0udXNlckRldGFpbC5oYXNPd25Qcm9wZXJ0eSAoJ2Fib3V0bWUnKSA/IGpzb24ubGlzdFswXS51c2VyRGV0YWlsLmFib3V0bWUudGFnbGluZSA6ICcnXG4gICAgICAgICAgICAgaWYgKGpzb24ubGlzdFswXS51c2VyRGV0YWlsLmhhc093blByb3BlcnR5ICgncHJvZmVzc2lvbmFsJykpIHtcbiAgICAgICAgICAgICAgICBvYmoucHJvZmVzc2lvbmFsID0ganNvbi5saXN0WzBdLnVzZXJEZXRhaWwucHJvZmVzc2lvbmFsO1xuICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICBcbiAgICAgICAgIFxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUgKG9iaik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbmNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRoZWFkZXJcIj48L2Rpdj5cbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1jYXBpdGFsaXplXCI+e3RoaXMuc3RhdGUubmFtZX08L2g0PlxuICAgICAgICAgXG4gICAgICAgICAgIHsoKCk9PntcbiAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmhhc093blByb3BlcnR5KCdwcm9mZXNzaW9uYWwnKSkge1xuICAgICAgICAgICAgICAgICAgdmFyIHN0cj0nJztcbiAgICAgICAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUucHJvZmVzc2lvbmFsLmhhc093blByb3BlcnR5ICgnb2NjdXBhdGlvbicpKXtcbiAgICAgICAgICAgICAgICAgICAgICBzdHIrPXRoaXMuc3RhdGUucHJvZmVzc2lvbmFsLm9jY3VwYXRpb247XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5wcm9mZXNzaW9uYWwuaGFzT3duUHJvcGVydHkgKCdjb21wYW55Jykpe1xuICAgICAgICAgICAgICAgICAgICAgIHN0cis9XCIsIFwiICt0aGlzLnN0YXRlLnByb2Zlc3Npb25hbC5jb21wYW55O1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPHAgY2xhc3NOYW1lPVwidGl0bGVcIj57c3RyfTwvcD4pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgfSkoKX0gXG4gICAgICAgICAgICAgPGhyIC8+ICAgICBcbiAgICAgICAgICAgeygoKT0+e1xuICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuaGFzT3duUHJvcGVydHkoJ2NpdHknKSAmJiB0aGlzLnN0YXRlLmNpdHkgIT09JycpIHtcbiAgICAgICAgICAgICAgICAgICByZXR1cm4gKCA8cD48c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLW1hcC1tYXJrZXJcIj48L3NwYW4+Ont0aGlzLnN0YXRlLmNpdHl9IHt0aGlzLnN0YXRlLmNvdW50cnl9PC9wPik7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSgpfSBcbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgIFxuICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdGFnc1wiPjwvc3Bhbj4mbmJzcDs8aT57dGhpcy5zdGF0ZS50YWdsaW5lfTwvaT48L3A+XG4gICAgICAgICAgPGhyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gIH1cbiAgO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlY2FyZDtcblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGVjYXJkLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///96\n");

/***/ })

})