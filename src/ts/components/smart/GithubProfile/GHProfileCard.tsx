import * as React from 'react';
import PropTypes from "prop-types";

interface GithubProfileCardProps{ 
  login: string; 
  avatarUrl: string | undefined; 
  profileName: string; 
  company: string;
}

export default class GithubProfileCard extends React.Component<GithubProfileCardProps, any> {
  static propTypes = {
    login: PropTypes.string.isRequired,
    profileName: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired
  }

  public render() {
    const { login, avatarUrl, profileName, company } = this.props;

    let avatarUrlString = avatarUrl;

    if (avatarUrlString == undefined){
      avatarUrlString = "public/default-user-icon.jpg"
    }

    return(
      <div className="ghCard col-xs-1 col-sm-6 col-md-4 col-lg-3">
        <div className="ghProfileWrapper">
          <div className="ghUserName">
            <p>{login}</p>
          </div>
          <div className="ghProfile">
            <img alt="" src={avatarUrlString}></img>
          </div>
          <div className="ghUser">
            <h3>{profileName}</h3>
          </div>
          <div className="ghCompany">
            <p>{company}</p>
          </div>
        </div>
      </div>
    );
  }
}