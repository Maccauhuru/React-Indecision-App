/*jshint esversion:6 */

const textObj ={
    text:"here is some text"
};

let visibility = false;

const toggleVisibility =()=>{
visibility = !visibility;
renderApp();
};

const renderApp=()=>{
const template = (
  <div>
    <h1>Visibility Toogle</h1>
    <button onClick={toggleVisibility}>{visibility ? 'hide details': 'show details'}</button>
    {visibility && <div><p>Hey there.React is tough in the beginning</p></div>}
  </div>
);

const appRoot = document.getElementById('app-info');
ReactDOM.render(template, appRoot);
}

renderApp();

