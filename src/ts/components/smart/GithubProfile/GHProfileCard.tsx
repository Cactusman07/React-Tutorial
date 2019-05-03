import * as React from 'react';
import PropTypes from "prop-types";

interface GithubProfileCardProps{ 
  login: string; 
  avatarUrl: string; 
  profileName: string; 
  company: string;
}

export default class GithubProfileCard extends React.Component<GithubProfileCardProps, any> {
  public static propTypes = {
    login: PropTypes.string.isRequired,
    profileName: PropTypes.string,
    avatarUrl: PropTypes.string,
    company: PropTypes.string
  }

  public render() {
    const { login, avatarUrl, profileName, company } = this.props;

    let avatarUrlString = avatarUrl;
    if (!avatarUrlString){
      avatarUrlString = "public/default-user-icon.jpg"
    }

    let profileNameString = profileName;
    if (!profileNameString){
      profileNameString = "*name n/a*";
    }

    let companyString = company;
    if (!companyString){
      companyString = "*no company listed*";
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
            <h3>{profileNameString}</h3>
          </div>
          <div className="ghCompany">
            <p>{companyString}</p>
          </div>
        </div>
      </div>
    );
  }
}