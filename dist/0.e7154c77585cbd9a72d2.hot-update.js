webpackHotUpdate(0,{99:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),c=r(l),s=n(19),f=r(s);n(5);var p=n(100),d=r(p),h=function(e){function t(e){o(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={renderActual:!1},n.mountedorNot=n.mountedorNot.bind(n),n}return a(t,e),i(t,[{key:"mountedorNot",value:function(){this.setState({renderActual:!0})}},{key:"componentWillMount",value:function(){var e=this,t=window.localStorage.getItem("userid");fetch("/api/getuserdetail/"+t,{method:"get",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){if(t.hasOwnProperty("list")){var n={user:t.list[0]};t.list[0].hasOwnProperty("userDetail")&&(n.userDetail=t.list[0].userDetail),e.setState(n)}})}},{key:"render",value:function(){var e=this;return c.default.createElement("div",null,c.default.createElement(f.default,{props:this.mountedorNot}),function(){if(e.state.renderActual)return c.default.createElement(d.default,{userdata:e.state})}())}}]),t}(l.Component);t.default=h}});