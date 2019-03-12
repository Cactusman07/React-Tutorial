import * as React from 'react';
import GHForm from './GHForm';
import CardList from './GHProfileCard';

import "./GithubProfileStyles.scss";

export default class GithubProfiles extends React.Component<any, any>{
state = {
    cards: [
      { login: "Cactusman07",
        name:"Sam Muir",
        avatar_url:"https://avatars2.githubusercontent.com/u/5124543?v=4",
        company:"Tower Insurance",
        key: 1
      },
      { login: "Jlord",
        name:"Jessica Lord",
        avatar_url:"https://avatars3.githubusercontent.com/u/1305617?v=4",
        company:"Glitch",
        key: 2
      },
      { login: "VincentGarreau",
        name:"Vincent Garreau",
        avatar_url:"https://avatars3.githubusercontent.com/u/961898?v=4",
        company:"Livestorm",
        key: 3
      }
    ]
  }

  addNewCard = (cardInfo: any) => {
    this.setState((prevState: { cards: { concat: (arg0: any) => void; }; }) => ({
      cards: prevState.cards.concat(cardInfo)
    }));
  }


  public render() {
    return(
      <div className="ghCardSection">
        <h2>Profiles</h2> 
        <GHForm onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards} />
      </div>
    )
  };
}