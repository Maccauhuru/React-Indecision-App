"use strict";

console.log("app.js installed");

//JSX - JavaScript XML
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Indecision App version 1.0"
    ),
    React.createElement(
        "p",
        null,
        "This is some info about the app"
    ),
    React.createElement(
        "ul",
        null,
        React.createElement(
            "li",
            null,
            "item one"
        ),
        React.createElement(
            "li",
            null,
            "item two"
        )
    )
);

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Simbarashe Mupfukudzwa"
    ),
    React.createElement(
        "p",
        null,
        "Age : 36"
    ),
    React.createElement(
        "p",
        null,
        "City: Dallas"
    )
);

var appRoot = document.getElementById("app-info");
ReactDOM.render(templateTwo, appRoot);
