console.log("app.js installed");

//JSX - JavaScript XML
var template = (
    <div>
        <h1>Indecision App version 1.0</h1>
        <p>This is some info about the app</p>
            <ul>
                <li>item one</li>
                <li>item two</li>
            </ul>
    </div>);

    let templateTwo = (
        <div>
            <h1>Simbarashe Mupfukudzwa</h1>
                <p>Age : 36</p>
                <p>City: Dallas</p>
        </div>
    );

var appRoot = document.getElementById("app-info");
ReactDOM.render(templateTwo, appRoot);
