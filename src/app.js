/*jshint esversion:6*/
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options: ["Thing one", "Thing two", "Thing three", "Thing Four"]
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
    // this.setState(() => {
    const randNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randNum];
    //   return {
    //     options: [option]
    //   };
    // });
    alert(option);
  }

  render() {
    const title = "My Indecision App";
    const subtitle = "Put Your Hands Where My Eyes Can See";
    return (<div>
        <Header title={title} subtitle={subtitle} />
        <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
        <Options options={this.state.options} handleOption={this.handleDeleteOptions} handleDeleteOptions={this.handleDeleteOptions} />
        <AddOption />
      </div>);
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What Should I Do ?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {this.props.options.map(option => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    );
  }
}
class Option extends React.Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    const addOptionInput = e.target.elements.addOptionInput.value.trim();
    if (addOptionInput) {
      alert(addOptionInput);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" id="addOptionInput" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
let appRoot = document.getElementById("app-info");
ReactDOM.render(<IndecisionApp />, appRoot);
