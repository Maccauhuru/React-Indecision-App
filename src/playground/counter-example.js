/*jshint esversion:6*/
let count = 0;
            const addOne = ()=>{ 
            count++;
            renderCounterApp();
};
            const minusOne = ()=>{
            count--;
            renderCounterApp();
};
            const reset =()=>{
            count = 0;
            renderCounterApp();
};


const renderCounterApp = ()=>{
const templateTwo = (<div>
  <h1>Count: {count}</h1> 
          <button id = "add-btn" onClick = {addOne}> +1 </button> 
          <button id = "minus-btn" onClick = {minusOne}>-1 </button> 
          <button id = "reset-btn" onClick = {reset}>reset </button>
          </div>);
ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();