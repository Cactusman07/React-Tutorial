import * as React from 'react';
import GHForm from './GHForm';
import GithubProfileCard from './GHProfileCard';

import "./GithubProfileStyles.scss";

export default class GithubProfiles extends React.Component<any, any>{

  public render() {
    return(
      <div className="ghCardSection row mt-4">
        <h2>Profiles</h2> 
        <GHForm />
        <GithubProfileCard 
          Name="Sam Muir"
          Url="https://avatars2.githubusercontent.com/u/5124543?v=4"
          Company="Tower Insurance"
          UserName="Cactusman07" 
        />
      </div>
    )
  };
}