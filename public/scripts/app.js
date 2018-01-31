"use strict";

console.log("app.js installed");

//JSX - JavaScript XML
var appObj = {
    title: "The last samurai warrior",
    subtitle: "Ronin 47"
};
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        appObj.title
    ),
    React.createElement(
        "p",
        null,
        appObj.subtitle
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
    userAge: 42,
    userLocation: "New York City"
};

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.userName
    ),
    React.createElement(
        "p",
        null,
        "Age : ",
        user.userAge
    ),
    getLocation(user.userLocation)
);

var appRoot = document.getElementById("app-info");
ReactDOM.render(templateTwo, appRoot);
