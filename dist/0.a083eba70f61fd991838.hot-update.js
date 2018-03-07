webpackHotUpdate(0,{

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(97);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Profilecard = function (_Component) {\n  _inherits(Profilecard, _Component);\n\n  function Profilecard(props) {\n    _classCallCheck(this, Profilecard);\n\n    var _this = _possibleConstructorReturn(this, (Profilecard.__proto__ || Object.getPrototypeOf(Profilecard)).call(this, props));\n\n    _this.state = {\n      name: null,\n      tagline: '',\n      taglineshow: _this.props.hasOwnProperty('tag') ? _this.props.tag : ''\n\n    };\n\n    return _this;\n  }\n\n  _createClass(Profilecard, [{\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      var _this2 = this;\n\n      if (!this.props.hasOwnProperty('servicecall')) {\n        var id = window.localStorage.getItem('userid');\n        fetch(\"/api/getuserdetail/\" + id, { method: 'get', headers: { 'Content-Type': 'application/json' } }).then(function (res) {\n          return res.json();\n        }).then(function (json) {\n          console.log(json);\n          if (json.hasOwnProperty('list')) {\n            var obj = {\n              'name': json.list[0].firstName + \" \" + json.list[0].lastName,\n              'city': json.list[0].city,\n              'country': json.list[0].country\n            };\n            if (json.list[0].hasOwnProperty('userDetail')) {\n              obj.tagline = json.list[0].userDetail.hasOwnProperty('aboutme') ? json.list[0].userDetail.aboutme.tagline : '';\n              if (json.list[0].userDetail.hasOwnProperty('professional')) {\n                obj.professional = json.list[0].userDetail.professional;\n              }\n            }\n\n            _this2.setState(obj);\n          }\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      console.log(this.state);\n      return _react2.default.createElement(\n        \"div\",\n        { className: \"card\" },\n        _react2.default.createElement(\"div\", { className: \"cardheader\" }),\n        _react2.default.createElement(\n          \"h4\",\n          { className: \"text-capitalize\" },\n          this.state.name\n        ),\n        function () {\n          if (_this3.state.hasOwnProperty('professional')) {\n            _this3.state.professional.hasOwnProperty('');\n            return _react2.default.createElement(\n              \"p\",\n              { className: \"title\" },\n              \"CEO & Founder, Example\"\n            );\n          }\n        }(),\n        function () {\n          if (_this3.state.hasOwnProperty('professional')) {\n            _this3.state.professional.hasOwnProperty('');\n            return _react2.default.createElement(\n              \"p\",\n              { className: \"title\" },\n              \"CEO & Founder, Example\"\n            );\n          }\n        }(),\n        _react2.default.createElement(\n          \"p\",\n          null,\n          _react2.default.createElement(\"span\", { className: \"glyphicon glyphicon-map-marker\" }),\n          \":\",\n          this.state.city,\n          \" \",\n          this.state.country\n        ),\n        _react2.default.createElement(\n          \"p\",\n          null,\n          this.state.tagline\n        )\n      );\n    }\n  }]);\n\n  return Profilecard;\n}(_react.Component);\n\nexports.default = Profilecard;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlY2FyZC5qcz81YzI1Il0sIm5hbWVzIjpbIlByb2ZpbGVjYXJkIiwicHJvcHMiLCJzdGF0ZSIsIm5hbWUiLCJ0YWdsaW5lIiwidGFnbGluZXNob3ciLCJoYXNPd25Qcm9wZXJ0eSIsInRhZyIsImlkIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIm9iaiIsImxpc3QiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImNpdHkiLCJjb3VudHJ5IiwidXNlckRldGFpbCIsImFib3V0bWUiLCJwcm9mZXNzaW9uYWwiLCJzZXRTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU1BLFc7OztBQUVKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEhBQ1ZBLEtBRFU7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNLElBREs7QUFFWEMsZUFBUyxFQUZFO0FBR1hDLG1CQUFhLE1BQUtKLEtBQUwsQ0FBV0ssY0FBWCxDQUEyQixLQUEzQixJQUFvQyxNQUFLTCxLQUFMLENBQVdNLEdBQS9DLEdBQXFEOztBQUh2RCxLQUFiOztBQUZpQjtBQVNsQjs7Ozt5Q0FFb0I7QUFBQTs7QUFFbkIsVUFBSSxDQUFDLEtBQUtOLEtBQUwsQ0FBV0ssY0FBWCxDQUEyQixhQUEzQixDQUFMLEVBQWdEO0FBQzlDLFlBQUlFLEtBQUtDLE9BQU9DLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTZCLFFBQTdCLENBQVQ7QUFDQUMsc0NBQTZCSixFQUE3QixFQUFtQyxFQUFDSyxRQUFRLEtBQVQsRUFBZ0JDLFNBQVMsRUFBQyxnQkFBZ0Isa0JBQWpCLEVBQXpCLEVBQW5DLEVBQ0VDLElBREYsQ0FDUTtBQUFBLGlCQUFPQyxJQUFJQyxJQUFKLEVBQVA7QUFBQSxTQURSLEVBRUVGLElBRkYsQ0FFUSxnQkFBUTtBQUNkRyxrQkFBUUMsR0FBUixDQUFZRixJQUFaO0FBQ0EsY0FBSUEsS0FBS1gsY0FBTCxDQUFxQixNQUFyQixDQUFKLEVBQWtDO0FBQ2hDLGdCQUFJYyxNQUFNO0FBQ0Qsc0JBQVFILEtBQUtJLElBQUwsQ0FBVSxDQUFWLEVBQWFDLFNBQWIsR0FBeUIsR0FBekIsR0FBK0JMLEtBQUtJLElBQUwsQ0FBVSxDQUFWLEVBQWFFLFFBRG5EO0FBRUEsc0JBQU9OLEtBQUtJLElBQUwsQ0FBVSxDQUFWLEVBQWFHLElBRnBCO0FBR0EseUJBQVVQLEtBQUtJLElBQUwsQ0FBVSxDQUFWLEVBQWFJO0FBSHZCLGFBQVY7QUFLQSxnQkFBSVIsS0FBS0ksSUFBTCxDQUFVLENBQVYsRUFBYWYsY0FBYixDQUE2QixZQUE3QixDQUFKLEVBQWdEO0FBQzlDYyxrQkFBSWhCLE9BQUosR0FBY2EsS0FBS0ksSUFBTCxDQUFVLENBQVYsRUFBYUssVUFBYixDQUF3QnBCLGNBQXhCLENBQXdDLFNBQXhDLElBQXFEVyxLQUFLSSxJQUFMLENBQVUsQ0FBVixFQUFhSyxVQUFiLENBQXdCQyxPQUF4QixDQUFnQ3ZCLE9BQXJGLEdBQStGLEVBQTdHO0FBQ0Msa0JBQUlhLEtBQUtJLElBQUwsQ0FBVSxDQUFWLEVBQWFLLFVBQWIsQ0FBd0JwQixjQUF4QixDQUF3QyxjQUF4QyxDQUFKLEVBQTZEO0FBQzFEYyxvQkFBSVEsWUFBSixHQUFtQlgsS0FBS0ksSUFBTCxDQUFVLENBQVYsRUFBYUssVUFBYixDQUF3QkUsWUFBM0M7QUFDTDtBQUNBOztBQUdELG1CQUFLQyxRQUFMLENBQWVULEdBQWY7QUFDRDtBQUNGLFNBcEJEO0FBcUJEO0FBQ0Y7Ozs2QkFFUTtBQUFBOztBQUNYRixjQUFRQyxHQUFSLENBQVksS0FBS2pCLEtBQWpCO0FBQ0UsYUFDTTtBQUFBO0FBQUEsVUFBSyxXQUFVLE1BQWY7QUFDRSwrQ0FBSyxXQUFVLFlBQWYsR0FERjtBQUVFO0FBQUE7QUFBQSxZQUFJLFdBQVUsaUJBQWQ7QUFBaUMsZUFBS0EsS0FBTCxDQUFXQztBQUE1QyxTQUZGO0FBSUssb0JBQUk7QUFDRixjQUFJLE9BQUtELEtBQUwsQ0FBV0ksY0FBWCxDQUEwQixjQUExQixDQUFKLEVBQStDO0FBQzVDLG1CQUFLSixLQUFMLENBQVcwQixZQUFYLENBQXdCdEIsY0FBeEIsQ0FBd0MsRUFBeEM7QUFDSyxtQkFBUTtBQUFBO0FBQUEsZ0JBQUcsV0FBVSxPQUFiO0FBQUE7QUFBQSxhQUFSO0FBQ0E7QUFDVCxTQUxGLEVBSko7QUFXSyxvQkFBSTtBQUNGLGNBQUksT0FBS0osS0FBTCxDQUFXSSxjQUFYLENBQTBCLGNBQTFCLENBQUosRUFBK0M7QUFDNUMsbUJBQUtKLEtBQUwsQ0FBVzBCLFlBQVgsQ0FBd0J0QixjQUF4QixDQUF3QyxFQUF4QztBQUNLLG1CQUFRO0FBQUE7QUFBQSxnQkFBRyxXQUFVLE9BQWI7QUFBQTtBQUFBLGFBQVI7QUFDQTtBQUNWLFNBTEQsRUFYSjtBQW1CRTtBQUFBO0FBQUE7QUFBRyxrREFBTSxXQUFVLGdDQUFoQixHQUFIO0FBQUE7QUFBNkQsZUFBS0osS0FBTCxDQUFXc0IsSUFBeEU7QUFBQTtBQUErRSxlQUFLdEIsS0FBTCxDQUFXdUI7QUFBMUYsU0FuQkY7QUFvQkU7QUFBQTtBQUFBO0FBQUksZUFBS3ZCLEtBQUwsQ0FBV0U7QUFBZjtBQXBCRixPQUROO0FBeUJDOzs7Ozs7a0JBSVlKLFciLCJmaWxlIjoiOTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuLi8uLi9zdHlsZS9jc3MvcHJvZmlsZWNhcmQuc2Nzc1wiO1xuXG5jbGFzcyBQcm9maWxlY2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlciAocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiBudWxsLFxuICAgICAgdGFnbGluZTogJycsXG4gICAgICB0YWdsaW5lc2hvdzogdGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSAoJ3RhZycpID8gdGhpcy5wcm9wcy50YWcgOiAnJ1xuICAgICAgXG4gICAgfTtcblxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuXG4gICAgaWYgKCF0aGlzLnByb3BzLmhhc093blByb3BlcnR5ICgnc2VydmljZWNhbGwnKSkge1xuICAgICAgdmFyIGlkID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtICgndXNlcmlkJyk7XG4gICAgICBmZXRjaCAoYC9hcGkvZ2V0dXNlcmRldGFpbC8ke2lkfWAsIHttZXRob2Q6ICdnZXQnLCBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319XG4gICAgICApLnRoZW4gKHJlcyA9PiByZXMuanNvbiAoKVxuICAgICAgKS50aGVuIChqc29uID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coanNvbilcbiAgICAgICAgaWYgKGpzb24uaGFzT3duUHJvcGVydHkgKCdsaXN0JykpIHtcbiAgICAgICAgICB2YXIgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICduYW1lJzoganNvbi5saXN0WzBdLmZpcnN0TmFtZSArIFwiIFwiICsganNvbi5saXN0WzBdLmxhc3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAnY2l0eSc6anNvbi5saXN0WzBdLmNpdHksXG4gICAgICAgICAgICAgICAgICAgICdjb3VudHJ5Jzpqc29uLmxpc3RbMF0uY291bnRyeVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgIGlmIChqc29uLmxpc3RbMF0uaGFzT3duUHJvcGVydHkgKCd1c2VyRGV0YWlsJykpIHtcbiAgICAgICAgICAgIG9iai50YWdsaW5lID0ganNvbi5saXN0WzBdLnVzZXJEZXRhaWwuaGFzT3duUHJvcGVydHkgKCdhYm91dG1lJykgPyBqc29uLmxpc3RbMF0udXNlckRldGFpbC5hYm91dG1lLnRhZ2xpbmUgOiAnJ1xuICAgICAgICAgICAgIGlmIChqc29uLmxpc3RbMF0udXNlckRldGFpbC5oYXNPd25Qcm9wZXJ0eSAoJ3Byb2Zlc3Npb25hbCcpKSB7XG4gICAgICAgICAgICAgICAgb2JqLnByb2Zlc3Npb25hbCA9IGpzb24ubGlzdFswXS51c2VyRGV0YWlsLnByb2Zlc3Npb25hbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgXG4gICAgICAgICBcbiAgICAgICAgICB0aGlzLnNldFN0YXRlIChvYmopO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG5jb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkaGVhZGVyXCI+PC9kaXY+XG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtY2FwaXRhbGl6ZVwiPnt0aGlzLnN0YXRlLm5hbWV9PC9oND5cbiAgICAgICAgIFxuICAgICAgICAgICB7KCgpPT57XG4gICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5oYXNPd25Qcm9wZXJ0eSgncHJvZmVzc2lvbmFsJykpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucHJvZmVzc2lvbmFsLmhhc093blByb3BlcnR5ICgnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPHAgY2xhc3NOYW1lPVwidGl0bGVcIj5DRU8gJiBGb3VuZGVyLCBFeGFtcGxlPC9wPilcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgfSkoKX0gXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgIHsoKCk9PntcbiAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmhhc093blByb3BlcnR5KCdwcm9mZXNzaW9uYWwnKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wcm9mZXNzaW9uYWwuaGFzT3duUHJvcGVydHkgKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPkNFTyAmIEZvdW5kZXIsIEV4YW1wbGU8L3A+KVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKCl9IFxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tbWFwLW1hcmtlclwiPjwvc3Bhbj46e3RoaXMuc3RhdGUuY2l0eX0ge3RoaXMuc3RhdGUuY291bnRyeX08L3A+XG4gICAgICAgICAgPHA+e3RoaXMuc3RhdGUudGFnbGluZX08L3A+XG4gICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICB9XG4gIDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZWNhcmQ7XG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlY2FyZC5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///96\n");

/***/ })

})