import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

class App extends Component {
  state = { // equivalent to defining a constructor - constructor(props) {super(props)}
    counter: 0, 
    cards: [
      /* { name:"Sam Muir",
        avatar_url:"https://avatars2.githubusercontent.com/u/5124543?v=4",
        company:"Tower Insurance"
      },
      { name:"Jessica Lord",
        avatar_url:"https://avatars3.githubusercontent.com/u/1305617?v=4",
        company:"Splice"
      },
      { name:"Vincent Garreau",
        avatar_url:"https://avatars3.githubusercontent.com/u/961898?v=4",
        company:"Livestorm"
      }, */
    ]
  } 

  addNewCard = (cardInfo) => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }));
  };

  incrementCounter = (incrementValue) => {
    this.setState((prevState) => ({
      counter: prevState.counter + incrementValue
    }));
  };

  render() {
    return(
      <div>
        <div>
          <Button incrementValue={1} onClickFunction={this.incrementCounter}/>
          <Button incrementValue={5} onClickFunction={this.incrementCounter}/>
          <Button incrementValue={10} onClickFunction={this.incrementCounter}/>
          <Button incrementValue={100} onClickFunction={this.incrementCounter}/>
          <Result counter={this.state.counter}/>
        </div>
        <br />
        <br />
        <div>
          <p>Get User Profile Photo, Name & Company name from Github. Enter & submit a username to test.</p>
          <Form onSubmit={this.addNewCard}/>
        </div>
        <div>
          <CardList cards={this.state.cards} />
        </div>
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

// No state of it's own, so no need for a class. Only use class level components when you need personalised event handlers, or need to manage state.
const Result = (props) => {
  return(
    <div>{props.counter}</div>
  );
};

const Card = (props) => {
  return(
    <div style={{margin: '1em'}}>
      <img width="75" src={props.avatar_url} />
      <div style={{display: 'inline-block', marginLeft: 10}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>{props.name}</div>
        <div>{props.company}</div>
      </div>
    </div>
  );
};

const CardList = (props) => {
  return(
    <div>
      {props.cards.map(card => <Card key={card.id} {...card} />) }
    </div>
  );
};

class Form extends React.Component {
  state = { userName: ''}

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Event: Form Submit', this.state.userName);

    // ajax... (fetch or use a npm package like axios. Let's use Axios.)
    Axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then(resp => {
        this.props.onSubmit(resp.data);
        this.setState({ userName: ''});
      })
  };

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" 
          value = {this.state.userName}
          onChange={(event) => this.setState ({ userName: event.target.value })}
          //ref={(input) => this.userNameInput = input} // --> Similar to using getElementById()...
          placeholder="Github username" />
        <button type="submit">Add card</button>
      </form>
    );
  }
}

export default App;
