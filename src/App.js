import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { counter: 0 } // equivalent to defining a constructor - constructor(props) {super(props)}

  incrementCounter = (incrementValue) => {
    this.setState((prevState) => ({
      counter: prevState.counter + incrementValue
    }));
  };

  render() {
    /* return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    ); */

    return(
      <div>
        <Button incrementValue={1} onClickFunction={this.incrementCounter}/>
        <Button incrementValue={5} onClickFunction={this.incrementCounter}/>
        <Button incrementValue={10} onClickFunction={this.incrementCounter}/>
        <Button incrementValue={100} onClickFunction={this.incrementCounter}/>
        <Result counter={this.state.counter}/>
      </div>
    );
  }
}

class Button extends React.Component {  

  handleClick = () => {
    this.props.onClickFunction(this.props.incrementValue)
  };
  
  render(){
    return(
      <button onClick={this.handleClick}>
        + {this.props.incrementValue}
      </button>
    );
  } 
}

// No state of it's own, so no need for a class
const Result = (props) => {
  return(
    <div>{props.counter}</div>
  );
};

export default App;
