/*jshint esversion:6*/
let appRoot = document.getElementById('app-info');
class Counter extends React.Component {
constructor(props){
super(props);
this.handleAddOne = this.handleAddOne.bind(this);
this.handleSubtractOne = this.handleSubtractOne.bind(this);
this.handleReset = this.handleReset.bind(this);
this.state = {
count : 0
};
}

//on component mount set the state to count from localStorage
componentDidMount(){
try{
const strCount = localStorage.getItem("count");
const count = parseInt(strCount,10);

 if (!isNaN(count)) {
        this.setState(() => ({ count }));
      }
}
 catch(e){
   //Do nothing on Error
 }
}
//if value of count changes update it in localStorage
componentDidUpdate (prevProps,prevState){
if(prevState.count !== this.state.count){
  const json = this.state.count;
  localStorage.setItem('count',json);
}
}




handleAddOne (){
 this.setState((prevState)=>{
   return {
  count : prevState.count+1
   };
 });
}
handleSubtractOne (){
  this.setState((prevState)=>{
    return {
    count : prevState.count-1
    };
  });
}
handleReset(){
  this.setState(()=>{
    return {
      count : 0
    };
  });
}
render() {
  return (<div>
    <h1>Count : {this.state.count && this.state.count}</h1>
    <button onClick={this.handleAddOne}>+1</button>
    <button onClick={this.handleSubtractOne}>-1</button>
    <button onClick={this.handleReset}>Reset</button>
    </div>);
}
}

ReactDOM.render(<Counter />,appRoot);






// let count = 0;
//             const addOne = ()=>{ 
//             count++;
//             renderCounterApp();
// };
//             const minusOne = ()=>{
//             count--;
//             renderCounterApp();
// };
//             const reset =()=>{
//             count = 0;
//             renderCounterApp();
// };


// const renderCounterApp = ()=>{
// const templateTwo = (<div>
//   <h1>Count: {count}</h1> 
//           <button id = "add-btn" onClick = {addOne}> +1 </button> 
//           <button id = "minus-btn" onClick = {minusOne}>-1 </button> 
//           <button id = "reset-btn" onClick = {reset}>reset </button>
//           </div>);
// let appRoot = document.getElementById('app-info');
// ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp();