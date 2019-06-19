import * as React from 'react';
import store from "@store/store";
import { ADD_PROFILE } from '@actions/actionConstants';
import Axios from "axios";

export default class GHForm extends React.Component<any,any>{
  public constructor(props: any){
    super(props);
    this.state = { userName: ""};
  }

  public handleSubmit = (event: React.FormEvent<EventTarget>): void => {
    event.preventDefault();
    let userName = (document.getElementById("githubUserName")as HTMLInputElement).value;
    
    if (userName !== ""){
      console.log(`Fetching ${userName}`);

      // Use Axios to GET additional profiles
      Axios.get(`https://api.github.com/users/${userName}`)
      .then(function(response){
        console.log(response);
        store.dispatch({ type: ADD_PROFILE, payload: response.data });
        (document.getElementById("githubUserName") as HTMLInputElement).value = "";
      })
      .catch(function(error){
        console.log(error);
        alert("Sorry, that user is not found.");
      })
    } else{
      alert("Please enter a user name to search for.");
    }
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