import * as React from 'react';

interface GithubProfileCardProps{ 
  login: string; 
  avatar_url: string | undefined; 
  name: string; 
  company: string;
}

const GithubProfileCard = (props: GithubProfileCardProps) => {
  let avatarUrl = props.avatar_url;

  if (avatarUrl == undefined){
    avatarUrl = "public/default-user-icon.jpg"
  }

  return(
    <div className="ghCard col-xs-1 col-sm-6 col-md-4 col-lg-3">
      <div className="ghProfileWrapper">
        <div className="ghUserName">
          <p>{props.login}</p>
        </div>
        <div className="ghProfile">
          <img alt="" src={avatarUrl}></img>
        </div>
        <div className="ghUser">
          <h3>{props.name}</h3>
        </div>
        <div className="ghCompany">
          <p>{props.company}</p>
        </div>
      </div>
    </div>
  )
}

const CardList = (props: { cards: { map: (arg0: (card: any) => JSX.Element) => React.ReactNode; }; }) => {
    return(
      <div className="row">
        {props.cards.map((card) => <GithubProfileCard key={card.id} {...card} />)}
      </div>
    )
}

export default CardList;