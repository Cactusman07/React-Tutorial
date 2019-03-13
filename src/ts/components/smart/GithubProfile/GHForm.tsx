import * as React from 'react';
import Axios from 'axios';

export default class GHForm extends React.Component<any,any>{
  constructor(props: any){
    super(props);
    this.state = { userName: ""};
  }

  handleSubmit = (event: React.FormEvent<EventTarget>): void => {
    event.preventDefault();

    if (this.state.userName !== ""){
      // use Axios to GET additional Cards
      Axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then(resp => {
        this.props.onSubmit(resp.data);
        console.log(resp.data);
        this.setState({userName: ''});
        const successPopup = (document.getElementById('success') as HTMLDivElement);
        successPopup.className="";
        setTimeout(
          function(){
            successPopup.className="hidden";
          }, 1000
        );
      })
    }
  };

  public render() {
    return(
      <div className="ghForm">
        <div className="col-sm-12">
          <form onSubmit={this.handleSubmit}>
            <label>Github username lookup:<br />
              <input type="text"
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