// src/ts/components/smart/GithubProfiles
// This is a container component for the Github Form & Profile Cards

import * as React from 'react';
import GHForm from './GHForm';
import CardList from './GHProfileCard';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import "./GithubProfileStyles.scss";

interface ProfileProps {
  login: string,
  profileName: string,
  avatarUrl: string | undefined,
  company: string,
  key: string | number
}

class GithubProfiles extends React.Component<ProfileProps, any>{
  static propTypes = {
    login: PropTypes.string.isRequired,
    profileName: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    key: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired,
    ])
  }

  addNewCard = (cardInfo: any) => {
    this.setState((prevState: { cards: { concat: (arg0: any) => void; }; }) => ({
      cards: prevState.cards.concat(cardInfo)
    }));
  }

  public render() {
    const { login, profileName, avatarUrl, company, key } = this.props;
    return(
      <div className="ghCardSection">
        <h2>Profiles</h2> 
        {/* <GHForm onSubmit={this.addNewCard} /> */}
        <CardList cards={this.state.cards} />
      </div>
    )
  };
}

// Uses connect from react-redux to update the Value in the UI every time it changes.
export default connect(state => ({

}))(GithubProfiles);