import * as React from 'react';

interface CardProps {
  Name: string,
  Url: string, 
  Company: string,
  UserName: string
}

interface CardState {
  Name: "",
  Url: "",
  Company: "",
  UserName: ""
}

export default class GithubProfileCard extends React.Component<CardProps, CardState>{
  constructor(props: CardProps){
    super(props);
  }

  public render() {
    return(
      <div className="ghCard col-xs-1 col-sm-6 col-md-4 col-lg-3">
        <div className="ghProfileWrapper">
          <div className="ghUserName">
            <p>{this.props.UserName}</p>
          </div>
          <div className="ghProfile">
            <img alt="" src={this.props.Url}></img>
          </div>
          <div className="ghUser">
            <h3>{this.props.Name}</h3>
          </div>
          <div className="ghCompany">
            <p>{this.props.Company}</p>
          </div>
        </div>
      </div>
    )
  };
}