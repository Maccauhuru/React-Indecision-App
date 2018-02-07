"use strict";

console.log("app.js installed");

//JSX - JavaScript XML
var appObj = {
    title: "The last samurai warrior",
    subtitle: "Ronin 47",
    options: ['One', 'Two']
};

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

var count = 0;
var addOne = function addOne() {
    return console.log(count++);
};
var minusOne = function minusOne() {
    return console.log("minusOne");
};
var reset = function reset() {
    return console.log("reset");
};
var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Count: ",
        count,
        " "
    ),
    React.createElement(
        "button",
        { id: "add-btn", onClick: addOne },
        "+1"
    ),
    React.createElement(
        "button",
        { id: "add-btn", onClick: minusOne },
        "-1"
    ),
    React.createElement(
        "button",
        { id: "add-btn", onClick: reset },
        "reset"
    )
);

var appRoot = document.getElementById("app-info");
ReactDOM.render(templateTwo, appRoot);
