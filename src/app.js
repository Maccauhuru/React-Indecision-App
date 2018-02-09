/*jshint esversion:6 */
console.log("app.js installed");

//JSX - JavaScript XML
const appObj = {
    title : "The last samurai warrior",
    subtitle : "Ronin 47",
    options : []
}

const onFormSubmit =(e)=>{
  e.preventDefault();
  const option = e.target.elements.option.value;
  if(option){
    appObj.options.push(option);
    e.target.elements.option.value='';
    renderIndecisionApp();
  }
}

const removeArray =()=>{
appObj.options=[];
renderIndecisionApp();
}

const numbersArr = [200,500,1000];

const renderIndecisionApp =()=>{
const template = (
  <div>
    <h1>{appObj.title}</h1>
    {appObj.subtitle && <p>{appObj.subtitle}</p>}
    {appObj.options.length > 0 ? (
      <p>Here are your options </p>
    ) : (
      <p>No options</p>
    )}
    <button id="btn-Remove" onClick={removeArray}>
      Remove All
    </button>
    {/*
      numbersArr.map((number)=>{
      return <p key={number}>Number :{number}</p>;
      })
    */}

    <ul>
      {appObj.options.map((text)=>{
       return <li key="text">{text}</li>
      })
    }
    </ul>
    <p>{appObj.options.length}</p>
    <form onSubmit={onFormSubmit}>
      <input type="text" name="option" />
      <button>Add Option</button>
    </form>
  </div>
);
    ReactDOM.render(template, appRoot);
}

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

const appRoot = document.getElementById("app-info");
renderIndecisionApp();


