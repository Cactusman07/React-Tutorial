import * as React from 'react';
import store from "@store/store";
import { ADD_PROFILE } from '@actions/actionConstants';

export default class GHForm extends React.Component<any,any>{
  constructor(props: any){
    super(props);
    this.state = { userName: ""};
  }

  handleSubmit = (event: React.FormEvent<EventTarget>): void => {
    event.preventDefault();
    store.dispatch({ type: ADD_PROFILE })
  };

  public render() {
    return(
      <div className="ghForm">
        <div className="col-sm-12">
          <form onSubmit={this.handleSubmit}>
            <label>Github username lookup:<br />
              <input id="githubUserName" 
                type="text"
                value = {this.state.userName}
                onChange = {(event) => this.setState({userName: event.target.value})}
                placeholder = "Enter Username..." >
              </input>
            </label>
            <button type="submit">Add user info</button>
            <div id="success" className="hidden">
              <img src="public/borat-great-success.gif"></img>
            </div>
          </form>
          <br />
        </div>
      </div>
    );
  };

}