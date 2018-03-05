webpackHotUpdate(0,{

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(8);\n\n__webpack_require__(4);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Signin = function (_Component) {\n  _inherits(Signin, _Component);\n\n  function Signin(props) {\n    _classCallCheck(this, Signin);\n\n    var _this = _possibleConstructorReturn(this, (Signin.__proto__ || Object.getPrototypeOf(Signin)).call(this, props));\n\n    _this.state = {\n      firstName: '',\n      lastName: '',\n      email: '',\n      password: '',\n      /*   username: 'anurag@gmail.com',\n        loginpass: '11111111',*/\n      username: '',\n      loginpass: '',\n      loginError: '',\n      signupError: ''\n    };\n\n    _this.handleSignIn = _this.handleSignIn.bind(_this);\n    return _this;\n  }\n\n  _createClass(Signin, [{\n    key: \"handleSignIn\",\n    value: function handleSignIn() {\n\n      if (this.state.username !== '' && this.state.loginpass !== '') {\n        this.callSignInApi(this.state);\n      } else {\n        alert(\"Please Enter Login Information \");\n      }\n    }\n  }, {\n    key: \"callSignInApi\",\n    value: function callSignInApi(data) {\n      var _this2 = this;\n\n      fetch('/api/singin', {\n        method: 'post',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify(data)\n      }).then(function (res) {\n        return res.json();\n      }).then(function (json) {\n        _this2.serviceSignInHandler(json);\n      });\n    }\n  }, {\n    key: \"serviceSignInHandler\",\n    value: function serviceSignInHandler(data) {\n      var _this3 = this;\n\n      if (data.status === 'success') {\n        PubSub.publish('IS_LOGIN', { status: true, token: data.accesstoken, userid: data.userid, callback: function callback() {\n            _this3.props.history.push(\"/home\");\n          } });\n      } else {\n        alert(data.message);\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this4 = this;\n\n      return _react2.default.createElement(\n        \"div\",\n        { className: \"col-md-12\" },\n        _react2.default.createElement(\n          \"div\",\n          { className: \"form-top-left\" },\n          _react2.default.createElement(\n            \"h3\",\n            null,\n            \"Login \"\n          ),\n          _react2.default.createElement(\n            \"p\",\n            null,\n            \"Enter username and password to log on:\"\n          )\n        ),\n        _react2.default.createElement(\n          \"div\",\n          { className: \"form-group\" },\n          _react2.default.createElement(\"input\", { type: \"text\", name: \"form-username\", value: this.state.username, placeholder: \"Email...\",\n            className: \"form-control\", onChange: function onChange(event) {\n              _this4.setState({ username: event.target.value });\n            } })\n        ),\n        _react2.default.createElement(\n          \"div\",\n          { className: \"form-group\" },\n          _react2.default.createElement(\"input\", { type: \"password\", name: \"form-password\",\n            value: this.state.loginpass,\n            onChange: function onChange(event) {\n              _this4.setState({ loginpass: event.target.value });\n            },\n            placeholder: \"Password...\", className: \"form-control\", id: \"form-password\" })\n        ),\n        _react2.default.createElement(\n          \"div\",\n          null,\n          _react2.default.createElement(\"input\", { onClick: this.handleSignIn, className: \"btn  btn-transparent\", value: \"Sign in!\", type: \"button\" })\n        ),\n        _react2.default.createElement(\n          \"div\",\n          { className: \"new-acount\" },\n          _react2.default.createElement(\n            \"p\",\n            null,\n            \"Don't Have an account? \\xA0 \\xA0 \",\n            _react2.default.createElement(\n              \"a\",\n              { href: \"jascsript:void(0)\", onClick: function onClick() {\n                  return _this4.props.statechange('signin');\n                } },\n              \" SIGN UP\"\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Signin;\n}(_react.Component);\n\nexports.default = (0, _reactRouterDom.withRouter)(Signin);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvbG9naW4vU2lnbmluLmpzPzc5ZTEiXSwibmFtZXMiOlsiU2lnbmluIiwicHJvcHMiLCJzdGF0ZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInVzZXJuYW1lIiwibG9naW5wYXNzIiwibG9naW5FcnJvciIsInNpZ251cEVycm9yIiwiaGFuZGxlU2lnbkluIiwiYmluZCIsImNhbGxTaWduSW5BcGkiLCJhbGVydCIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJqc29uIiwic2VydmljZVNpZ25JbkhhbmRsZXIiLCJzdGF0dXMiLCJQdWJTdWIiLCJwdWJsaXNoIiwidG9rZW4iLCJhY2Nlc3N0b2tlbiIsInVzZXJpZCIsImNhbGxiYWNrIiwiaGlzdG9yeSIsInB1c2giLCJtZXNzYWdlIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwic3RhdGVjaGFuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVNQSxNOzs7QUFFSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNWQSxLQURVOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsaUJBQVcsRUFEQTtBQUVYQyxnQkFBVSxFQUZDO0FBR1hDLGFBQU8sRUFISTtBQUlYQyxnQkFBVSxFQUpDO0FBS2I7O0FBRUVDLGdCQUFVLEVBUEM7QUFRWEMsaUJBQVcsRUFSQTtBQVNYQyxrQkFBWSxFQVREO0FBVVhDLG1CQUFhO0FBVkYsS0FBYjs7QUFhQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBZmlCO0FBZ0JsQjs7OzttQ0FFYzs7QUFFYixVQUFJLEtBQUtWLEtBQUwsQ0FBV0ssUUFBWCxLQUF3QixFQUF4QixJQUE4QixLQUFLTCxLQUFMLENBQVdNLFNBQVgsS0FBeUIsRUFBM0QsRUFBK0Q7QUFDNUQsYUFBS0ssYUFBTCxDQUFvQixLQUFLWCxLQUF6QjtBQUVGLE9BSEQsTUFHTztBQUNMWSxjQUFPLGlDQUFQO0FBRUQ7QUFDRjs7O2tDQUVhQyxJLEVBQU07QUFBQTs7QUFFbEJDLFlBQU8sYUFBUCxFQUFzQjtBQUNwQkMsZ0JBQVEsTUFEWTtBQUVwQkMsaUJBQVMsRUFBQyxnQkFBZ0Isa0JBQWpCLEVBRlc7QUFHcEJDLGNBQU1DLEtBQUtDLFNBQUwsQ0FBZ0JOLElBQWhCO0FBSGMsT0FBdEIsRUFLRU8sSUFMRixDQUtRO0FBQUEsZUFBT0MsSUFBSUMsSUFBSixFQUFQO0FBQUEsT0FMUixFQUs0QkYsSUFMNUIsQ0FLa0MsZ0JBQVE7QUFDeEMsZUFBS0csb0JBQUwsQ0FBMkJELElBQTNCO0FBRUQsT0FSRDtBQVdEOzs7eUNBRW9CVCxJLEVBQU07QUFBQTs7QUFFekIsVUFBSUEsS0FBS1csTUFBTCxLQUFnQixTQUFwQixFQUErQjtBQUM3QkMsZUFBT0MsT0FBUCxDQUFnQixVQUFoQixFQUE0QixFQUFDRixRQUFRLElBQVQsRUFBZUcsT0FBT2QsS0FBS2UsV0FBM0IsRUFBd0NDLFFBQVFoQixLQUFLZ0IsTUFBckQsRUFBNERDLFVBQVMsb0JBQUk7QUFDaEcsbUJBQUsvQixLQUFMLENBQVdnQyxPQUFYLENBQW1CQyxJQUFuQixDQUF5QixPQUF6QjtBQUNKLFdBRjJCLEVBQTVCO0FBSUQsT0FMRCxNQUtPO0FBQ0xwQixjQUFPQyxLQUFLb0IsT0FBWjtBQUNEO0FBRUY7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxXQUFmO0FBRUk7QUFBQTtBQUFBLFlBQUssV0FBVSxlQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLFNBRko7QUFPSTtBQUFBO0FBQUEsWUFBSyxXQUFVLFlBQWY7QUFDRSxtREFBUSxNQUFLLE1BQWIsRUFBb0IsTUFBSyxlQUF6QixFQUF5QyxPQUFRLEtBQUtqQyxLQUFMLENBQVdLLFFBQTVELEVBQXNFLGFBQVksVUFBbEY7QUFDUSx1QkFBVSxjQURsQixFQUNpQyxVQUFVLGtCQUFDNkIsS0FBRCxFQUFXO0FBQ3hELHFCQUFLQyxRQUFMLENBQWUsRUFBQzlCLFVBQVU2QixNQUFNRSxNQUFOLENBQWFDLEtBQXhCLEVBQWY7QUFBK0MsYUFGN0M7QUFERixTQVBKO0FBWUk7QUFBQTtBQUFBLFlBQUssV0FBVSxZQUFmO0FBQ0UsbURBQU8sTUFBSyxVQUFaLEVBQXVCLE1BQUssZUFBNUI7QUFDTyxtQkFDUCxLQUFLckMsS0FBTCxDQUFXTSxTQUZYO0FBR08sc0JBQVUsa0JBQUM0QixLQUFELEVBQVc7QUFDMUIscUJBQUtDLFFBQUwsQ0FBZSxFQUFDN0IsV0FBVzRCLE1BQU1FLE1BQU4sQ0FBYUMsS0FBekIsRUFBZjtBQUFnRCxhQUpsRDtBQUtPLHlCQUFZLGFBTG5CLEVBS2lDLFdBQVUsY0FMM0MsRUFLMEQsSUFBRyxlQUw3RDtBQURGLFNBWko7QUFvQkk7QUFBQTtBQUFBO0FBQ0UsbURBQU8sU0FDSCxLQUFLNUIsWUFEVCxFQUN1QixXQUFVLHNCQURqQyxFQUN3RCxPQUFNLFVBRDlELEVBQ3lFLE1BQUssUUFEOUU7QUFERixTQXBCSjtBQXdCSTtBQUFBO0FBQUEsWUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUF3QztBQUFBO0FBQUEsZ0JBQUcsTUFBSyxtQkFBUixFQUE0QixTQUFTO0FBQUEseUJBQUksT0FBS1YsS0FBTCxDQUFXdUMsV0FBWCxDQUF1QixRQUF2QixDQUFKO0FBQUEsaUJBQXJDO0FBQUE7QUFBQTtBQUF4QztBQURGO0FBeEJKLE9BREY7QUFnQ0c7Ozs7OztrQkFJWSxnQ0FBV3hDLE1BQVgsQyIsImZpbGUiOiI5MS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0ICd3aGF0d2ctZmV0Y2gnO1xuXG5jbGFzcyBTaWduaW4gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIgKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZmlyc3ROYW1lOiAnJyxcbiAgICAgIGxhc3ROYW1lOiAnJyxcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAvKiAgIHVzZXJuYW1lOiAnYW51cmFnQGdtYWlsLmNvbScsXG4gICAgICBsb2dpbnBhc3M6ICcxMTExMTExMScsKi9cbiAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgIGxvZ2lucGFzczogJycsIFxuICAgICAgbG9naW5FcnJvcjogJycsXG4gICAgICBzaWdudXBFcnJvcjogJydcbiAgICB9O1xuXG4gICAgdGhpcy5oYW5kbGVTaWduSW4gPSB0aGlzLmhhbmRsZVNpZ25Jbi5iaW5kICh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZVNpZ25JbigpIHtcblxuICAgIGlmICh0aGlzLnN0YXRlLnVzZXJuYW1lICE9PSAnJyAmJiB0aGlzLnN0YXRlLmxvZ2lucGFzcyAhPT0gJycpIHtcbiAgICAgICB0aGlzLmNhbGxTaWduSW5BcGkgKHRoaXMuc3RhdGUpO1xuICAgICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydCAoXCJQbGVhc2UgRW50ZXIgTG9naW4gSW5mb3JtYXRpb24gXCIpO1xuXG4gICAgfVxuICB9XG5cbiAgY2FsbFNpZ25JbkFwaShkYXRhKSB7XG5cbiAgICBmZXRjaCAoJy9hcGkvc2luZ2luJywge1xuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSAoZGF0YSlcbiAgICB9XG4gICAgKS50aGVuIChyZXMgPT4gcmVzLmpzb24gKCkpLnRoZW4gKGpzb24gPT4ge1xuICAgICAgdGhpcy5zZXJ2aWNlU2lnbkluSGFuZGxlciAoanNvbilcbiAgICBcbiAgICB9KTtcblxuXG4gIH1cblxuICBzZXJ2aWNlU2lnbkluSGFuZGxlcihkYXRhKSB7XG5cbiAgICBpZiAoZGF0YS5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgUHViU3ViLnB1Ymxpc2ggKCdJU19MT0dJTicsIHtzdGF0dXM6IHRydWUsIHRva2VuOiBkYXRhLmFjY2Vzc3Rva2VuLCB1c2VyaWQ6IGRhdGEudXNlcmlkLGNhbGxiYWNrOigpPT57XG4gICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoIChcIi9ob21lXCIpO1xuICAgICAgfX0pO1xuICAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQgKGRhdGEubWVzc2FnZSk7XG4gICAgfVxuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XG4gICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS10b3AtbGVmdFwiPlxuICAgICAgICAgICAgPGgzPkxvZ2luIDwvaDM+XG4gICAgICAgICAgICA8cD5FbnRlciB1c2VybmFtZSBhbmQgcGFzc3dvcmQgdG8gbG9nIG9uOjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGlucHV0ICB0eXBlPVwidGV4dFwiIG5hbWU9XCJmb3JtLXVzZXJuYW1lXCIgdmFsdWUgPXt0aGlzLnN0YXRlLnVzZXJuYW1lfSBwbGFjZWhvbGRlcj1cIkVtYWlsLi4uXCIgIFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSAoe3VzZXJuYW1lOiBldmVudC50YXJnZXQudmFsdWV9KX19IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cImZvcm0tcGFzc3dvcmRcIiAgIFxuICAgICAgICAgICAgICAgICAgIHZhbHVlID17XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmxvZ2lucGFzc30gICBcbiAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUgKHtsb2dpbnBhc3M6IGV2ZW50LnRhcmdldC52YWx1ZX0pfX1cbiAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkLi4uXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJmb3JtLXBhc3N3b3JkXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW5wdXQgb25DbGljaz17XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTaWduSW59IGNsYXNzTmFtZT1cImJ0biAgYnRuLXRyYW5zcGFyZW50XCIgdmFsdWU9XCJTaWduIGluIVwiIHR5cGU9XCJidXR0b25cIi8+XG4gICAgICAgICAgPC9kaXY+XHRcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldy1hY291bnRcIj5cbiAgICAgICAgICAgIDxwPkRvbid0IEhhdmUgYW4gYWNjb3VudD8gJm5ic3A7ICZuYnNwOyA8YSBocmVmPVwiamFzY3NyaXB0OnZvaWQoMClcIiBvbkNsaWNrPXsoKT0+dGhpcy5wcm9wcy5zdGF0ZWNoYW5nZSgnc2lnbmluJyl9PiBTSUdOIFVQPC9hPjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICBcbiAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICk7XG4gICAgICB9XG4gICAgICA7XG4gICAgfVxuXG4gICAgZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihTaWduaW4pIDtcblxuXG5cbiAgICAgICAgICAgICAgICBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvbG9naW4vU2lnbmluLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///91\n");

/***/ })

})