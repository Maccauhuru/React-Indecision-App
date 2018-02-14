/*jshint esversuin:6*/
class Header extends React.Component {
render() {
  return (<div>
          <h1>Indecision App</h1>
          <h2>Put Your Hands Where My Eyes Can See </h2>
          </div>);
    }
}

class Action extends React.Component{
render() {
  return <div><button>What Should I Do ?</button></div>;
}
}

class Options extends React.Component{
render(){
  return (<div>
    <p>Options Component Here</p>
    </div>);
}
}

class AddOption extends React.Component {
  render(){
    return (<div>
    <p>Add Options Here</p>
    </div>);
  }
}

const jsx = (
  <div>
  <Header />
  <Action />
  <Options />
  <AddOption />
  </div>
      );
let appRoot = document.getElementById('app-info');
ReactDOM.render(jsx,appRoot);