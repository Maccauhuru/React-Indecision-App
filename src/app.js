/*jshint esversion:6*/
class IndecisionApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      options : ['Thing one','Thing two','Thing three','Thing Four']
    };
  }
  render(){
    const title = "My Indecision App";
    const subtitle = "Put Your Hands Where My Eyes Can See";
    return (<div>
      <Header title={title} subtitle={subtitle}/>
      <Action hasOptions={this.state.options.length > 0}/>
      <Options options={this.state.options}/>
      <AddOption />
      </div>);
  }
}
class Header extends React.Component {
render() {
  return (<div>
          <h1>{this.props.title}</h1>
          <h2>{this.props.subtitle}</h2>
          </div>);
    }
}

class Action extends React.Component{
handlePick (){alert("list of TODO")};
render() {
  return (<div>
  <button onClick={this.handlePick} disabled={!this.props.hasOptions}>What Should I Do ?
  </button>
  </div>);
}
}

class Options extends React.Component{
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);

  }
handleRemoveAll (){
console.log(this.props.options);
};
render(){
  return <div>
  <button onClick={this.handleRemoveAll}>Remove All</button>
      {
        this.props.options.map(option =><Option key={option} optionText={option} />)
      }
    </div>;
}
}
class Option extends React.Component{
  render(){
    return (<div>
      {this.props.optionText}
      </div>);
  }
}

class AddOption extends React.Component {
handleAddOption (e){
  e.preventDefault();
  const addOptionInput=e.target.elements.addOptionInput.value.trim();
  if(addOptionInput){
  alert(addOptionInput);
  }
};
  render(){
    return (<div>
    <form onSubmit = {this.handleAddOption}>
    <input type="text" id="addOptionInput"/>
    <button>Submit</button>
    </form>
    </div>);
  }
}
let appRoot = document.getElementById('app-info');
ReactDOM.render(<IndecisionApp />,appRoot);