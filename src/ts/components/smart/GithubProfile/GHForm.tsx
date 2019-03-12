import * as React from 'react';
import GithubProfileCard from './GHProfileCard';

import Axios from 'axios';

export default class GHForm extends React.Component<any,any>{
  state = { userName: ""}

  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (this.state.userName !== ""){
      // use Axios to get additional Cards
      Axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then(resp => {
        this.props.onSubmit(resp.data);
        this.setState({userName: ''});
      })
    }
  };

  public render() {
    return(
      <div className="ghForm col-sm-12">
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            value = {this.state.userName}
            onChange = {(event) => this.setState({userName: event.target.value})}
            placeholder = "Lookup Github User..." >
          </input>
          <button type="submit">Add user info</button>
        </form>
        <br />
      </div>
    );
  };

}