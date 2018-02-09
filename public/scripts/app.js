"use strict";

/*jshint esversion:6 */
console.log("app.js installed");

//JSX - JavaScript XML
var appObj = {
  title: "The last samurai warrior",
  subtitle: "Ronin 47",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    appObj.options.push(option);
    e.target.elements.option.value = '';
    renderIndecisionApp();
  }
};

var removeArray = function removeArray() {
  appObj.options = [];
  renderIndecisionApp();
};

var numbersArr = [200, 500, 1000];

var renderIndecisionApp = function renderIndecisionApp() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      appObj.title
    ),
    appObj.subtitle && React.createElement(
      "p",
      null,
      appObj.subtitle
    ),
    appObj.options.length > 0 ? React.createElement(
      "p",
      null,
      "Here are your options "
    ) : React.createElement(
      "p",
      null,
      "No options"
    ),
    React.createElement(
      "button",
      { id: "btn-Remove", onClick: removeArray },
      "Remove All"
    ),
    React.createElement(
      "ul",
      null,
      appObj.options.map(function (text) {
        return React.createElement(
          "li",
          { key: "text" },
          text
        );
      })
    ),
    React.createElement(
      "p",
      null,
      appObj.options.length
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location : ",
      location
    );
  }
}
var user = {
  userName: 'Keith Murray',
  userAge: 32,
  userLocation: "New York City"
};

var appRoot = document.getElementById("app-info");
renderIndecisionApp();
