'use strict';

/*jshint esversion:6 */

var textObj = {
  text: "here is some text"
};

var visibility = false;

var toggleVisibility = function toggleVisibility() {
  visibility = !visibility;
  renderApp();
};

var renderApp = function renderApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toogle'
    ),
    React.createElement(
      'button',
      { onClick: toggleVisibility },
      visibility ? 'hide details' : 'show details'
    ),
    visibility && React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'Hey there.React is tough in the beginning'
      )
    )
  );

  var appRoot = document.getElementById('app-info');
  ReactDOM.render(template, appRoot);
};

renderApp();
