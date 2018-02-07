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

let count = 0;
const addOne = ()=> console.log(count++);
const minusOne = ()=>console.log("minusOne");
const reset =()=>console.log("reset");
const templateTwo = (
  <div>
    <h1>Count: {count} </h1>
    <button id="add-btn" onClick={addOne}>
      +1
    </button>
    <button id="add-btn" onClick={minusOne}>
      -1
    </button>
    <button id="add-btn" onClick={reset}>
      reset
    </button>
  </div>
);

const appRoot = document.getElementById("app-info");
ReactDOM.render(templateTwo, appRoot);
