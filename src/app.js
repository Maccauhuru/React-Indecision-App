console.log("app.js installed");

//JSX - JavaScript XML
const appObj = {
    title : "The last samurai warrior",
    subtitle : "Ronin 47",
    options : ['One','Two']
}


const template = (
    <div>
        <h1>{appObj.title}</h1>
        {appObj.subtitle && <p>{appObj.subtitle}</p>}
        {appObj.options.length > 0 ? <p>Here are your options </p> : <p>No options</p>}
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
 const user = {
  userName     : 'Keith Murray',
  userAge      : 32,
  userLocation :"New York City"
 }
 
    const templateTwo = (<div>
        <h1>{user.userName ? user.userName : 'Anonymous'}</h1>
         {(user.userAge && user.userAge  > 18) && <p>Age :{user.userAge}</p>}
        {getLocation(user.userLocation)}
      </div>);

const appRoot = document.getElementById("app-info");
ReactDOM.render(template, appRoot);
