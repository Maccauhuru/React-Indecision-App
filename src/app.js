console.log("app.js installed");

//JSX - JavaScript XML
let appObj = {
    title : "The last samurai warrior",
    subtitle : "Ronin 47"
}
var template = (
    <div>
        <h1>{appObj.title}</h1>
        <p>{appObj.subtitle}</p>
            <ul>
                <li>item one</li>
                <li>item two</li>
            </ul>
    </div>);

function getLocation(location){
if(location){
    return <p>Location : {location}</p>
}
}
 var user = {
  userName     : 'Keith Murray',
  userAge      : 42,
  userLocation :"New York City"
 }
 
    let templateTwo = (<div>
        <h1>{user.userName}</h1>
        <p>Age : {user.userAge}</p>
        {getLocation(user.userLocation)}
      </div>);

var appRoot = document.getElementById("app-info");
ReactDOM.render(templateTwo, appRoot);
