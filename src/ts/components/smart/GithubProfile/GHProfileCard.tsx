import * as React from 'react';
import PropTypes from "prop-types";

interface GithubProfileCardProps{ 
  login: string; 
  avatar_url: string | undefined; 
  name: string; 
  company: string;
  key: string | number;
}

class GithubProfileCard extends React.Component<GithubProfileCardProps, any> {
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

  public render() {
    const { login, avatar_url, name, company, key } = this.props;

    let avatarUrl = avatar_url;

    if (avatarUrl == undefined){
      avatarUrl = "public/default-user-icon.jpg"
    }

    return(
      <div className="ghCard col-xs-1 col-sm-6 col-md-4 col-lg-3">
        <div className="ghProfileWrapper">
          <div className="ghUserName">
            <p>{login}</p>
          </div>
          <div className="ghProfile">
            <img alt="" src={avatarUrl}></img>
          </div>
          <div className="ghUser">
            <h3>{name}</h3>
          </div>
          <div className="ghCompany">
            <p>{company}</p>
          </div>
        </div>
      </div>
    );
  }
}

const CardList = (props: { cards: { map: (arg0: (card: any) => JSX.Element) => React.ReactNode; }; }) => {
    return(
      <div className="row">
        {props.cards.map((card) => <GithubProfileCard key={card.id} {...card} />)}
      </div>
    )
}

export default CardList;