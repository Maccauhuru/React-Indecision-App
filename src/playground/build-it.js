/*jshint esversion:6 */
let appRoot = document.getElementById("app-info");
class VisibilityToggle extends React.Component{
render(){
  const title = "Visibility Toggle";
  return (<div>
    <Header title={title}/>
    <Action />
    </div>);
}
}

class Header extends React.Component{
  render(){
    return (<div>
      <h1>{this.props.title}</h1>
      </div>);
  }
}

class Action extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
      visibility: false
     };
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
  }
  handleToggleVisibility(){
    this.setState((prevState)=>{
    return {
      visibility : !prevState.visibility
    }
    });
  }
  render(){
    return(<div>
<button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Show Details' : 'Hide Details'}</button>
{this.state.visibility && <div>Hi there,React can be very challenging</div>}
   </div>);
  }
}

ReactDOM.render(<VisibilityToggle />,appRoot);

































// const textObj ={
//     text:"here is some text"
// };

// let visibility = false;

// const toggleVisibility =()=>{
// visibility = !visibility;
// renderApp();
// };

// const renderApp=()=>{
// const template = (
//   <div>
//     <h1>Visibility Toogle</h1>
//     <button onClick={toggleVisibility}>{visibility ? 'hide details': 'show details'}</button>
//     {visibility && <div><p>Hey there.React is tough in the beginning</p></div>}
//   </div>
// );

// const appRoot = document.getElementById('app-info');
// ReactDOM.render(template, appRoot);
// }

// renderApp();

