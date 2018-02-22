"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*jshint esversion:6 */
var appRoot = document.getElementById("app-info");

var VisibilityToggle = function (_React$Component) {
  _inherits(VisibilityToggle, _React$Component);

  function VisibilityToggle() {
    _classCallCheck(this, VisibilityToggle);

    return _possibleConstructorReturn(this, (VisibilityToggle.__proto__ || Object.getPrototypeOf(VisibilityToggle)).apply(this, arguments));
  }

  _createClass(VisibilityToggle, [{
    key: "render",
    value: function render() {
      var title = "Visibility Toggle";
      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: title }),
        React.createElement(Action, null)
      );
    }
  }]);

  return VisibilityToggle;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          this.props.title
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action(props) {
    _classCallCheck(this, Action);

    var _this3 = _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, props));

    _this3.state = { visibility: false };
    _this3.handleToggleVisibility = _this3.handleToggleVisibility.bind(_this3);
    return _this3;
  }

  _createClass(Action, [{
    key: "handleToggleVisibility",
    value: function handleToggleVisibility() {
      this.setState(function (prevState) {
        return {
          visibility: !prevState.visibility
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { onClick: this.handleToggleVisibility },
          this.state.visibility ? 'Show Details' : 'Hide Details'
        ),
        this.state.visibility && React.createElement(
          "div",
          null,
          "Hi there,React can be very challenging"
        )
      );
    }
  }]);

  return Action;
}(React.Component);

ReactDOM.render(React.createElement(VisibilityToggle, null), appRoot);

// const textObj ={
//     text:"here is some text"
// };

// let visibility = false;

// const toggleVisibility =()=>{
// visibility = !visibility;
// renderApp();
// };

// const renderApp=()=>{
// const template = (
//   <div>
//     <h1>Visibility Toogle</h1>
//     <button onClick={toggleVisibility}>{visibility ? 'hide details': 'show details'}</button>
//     {visibility && <div><p>Hey there.React is tough in the beginning</p></div>}
//   </div>
// );

// const appRoot = document.getElementById('app-info');
// ReactDOM.render(template, appRoot);
// }

// renderApp();
