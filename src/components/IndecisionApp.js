import React from "react";
import AddOption from "./AddOption";
import Action from "./Action";
import Header from "./Header";
import Options from "./Options";
import OptionModal from "./OptionModal";
export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption : undefined
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  };

  handlePick = () => {
    const randNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randNum];
    this.setState(()=>({selectedOption:option}));
  //alert(option);
  };
  handleAddOption = option => {
    if (!option) {
      return "Enter a valid value!";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }
    this.setState(prevState => ({
      options: prevState.options.concat([option])
    }));
  };

  handleClearModal = ()=>{
    this.setState(()=>({selectedOption :undefined}));
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      //Do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }
  componentWillUnmount() {
    console.log("componentWillUnmountNow");
  }

  render() {
    const title = "Indecision App";
    const subtitle = "Automate Your Decision Making";
    return <div>
        <OptionModal selectedOption={this.state.selectedOption} handleClearModal={this.handleClearModal} />
        <Header subtitle={subtitle} />
        <div className='container'>
          <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
          <div className="widget">
          <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} />
          <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
      </div>;
  }
}
