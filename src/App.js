import React, { Component } from 'react';
import './App.css';
import Game from './Game/Game';
import Button from './Counter/Buttons';
import Result from './Counter/Result';
import Form from './Github-Form/Form';
import CardList from './Github-Form/CardList';

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
          <Game />
        </div>
        <br /><br />
        <div>
          <p>Get User Profile Photo, Name & Company name from Github. Enter & submit a username to test.</p>
          <Form onSubmit={this.addNewCard}/>
          <CardList cards={this.state.cards} />
        </div>
        <div>
          
        </div>
      </div>
    );
  }
}

export default App;
