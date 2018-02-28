/*jshint esversion:6*/
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    };
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }
  handlePick() {
    const randNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randNum];
    alert(option);
  }
  handleAddOption(option){
    if(!option){
      return 'Enter a valid value!';
    }else if(this.state.options.indexOf(option) > -1){
      return 'This option already exists';
    }
    this.setState((prevState)=>{
      return {
      options : prevState.options.concat([option])
      };
    });
  }

  render() {
    const title = "My Indecision App";
    const subtitle = "Put Your Hands Where My Eyes Can See";
    return (<div>
        <Header subtitle={subtitle} />
        <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} />
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>);
  }
}


const Header =(props)=>{
  return (<div>
      <h1>{props.title}</h1>
      {props.subtitle &&<h2>{props.subtitle}</h2>}
    </div>);
};

Header.defaultProps = {
  title: "Indecision App"
};


const Action =(props)=>{
  return(<div>
        <button onClick={props.handlePick} disabled={!props.hasOptions}>
          What Should I Do ?
        </button>
      </div>);
};

const Options=(props)=>{
  return(<div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.map(option => (
        <Option key={option} optionText={option} />
      ))}
    </div>);
};

const Option=(props)=>{
  return (<div>
    {props.optionText}
    </div>);
};


class AddOption extends React.Component {
  constructor (props) {
  super(props);
  this.handleAddOption = this.handleAddOption.bind(this);
  this.state = {
    error : undefined
  }
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(()=>{
      return { error }
    });
  }
  render() {
    return (
      <div>
        {this.state.error &&<p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
let appRoot = document.getElementById("app-info");
ReactDOM.render(<IndecisionApp />, appRoot);
