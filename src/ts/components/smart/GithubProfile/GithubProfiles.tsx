// src/ts/components/smart/GithubProfiles
// This is a container component for the Github Form & Profile Cards

import * as React from 'react';
import GHForm from './GHForm';
import GithubProfileCard from './GHProfileCard';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { getProfiles } from "@selectors/selectors";
import { ADD_PROFILE } from "@actions/actionConstants";

import "./GithubProfileStyles.scss";
import store from '@store/store';

interface profileProps{
  profileArray: string[];
}

class GithubProfiles extends React.Component<profileProps>{
  static propTypes = {
    profileArray: PropTypes.array.isRequired
  }

  public render() {
    const { profileArray } = this.props;
    return(
      <div className="ghCardSection">
        <h2>Profiles</h2> 
        <GHForm />
        
        <div className="row">
          {this.props.profileArray.map((profile: any) =>
            <GithubProfileCard
              login={ profile.login }
              profileName={ profile.name }
              avatarUrl=  { profile.avatar_url }
              company={ profile.company }
              key={ profile.id }
            />
          )}
        </div>  
      </div>
    )
  };
}

// Uses connect from react-redux to update the Cards in the UI every time it changes.
export default connect(state => ({
  profileArray: getProfiles(state)
}))(GithubProfiles);