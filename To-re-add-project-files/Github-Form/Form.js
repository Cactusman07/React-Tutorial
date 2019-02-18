import React from 'react';
import Axios from 'axios';

class Form extends React.Component {
  state = { userName: ''}

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Event: Form Submit', this.state.userName);

    // ajax... (fetch or use a npm package like axios. Let's use Axios.)
    Axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then(resp => {
        this.props.onSubmit(resp.data);
        this.setState({ userName: ''});
      })
  };

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" 
          value = {this.state.userName}
          onChange={(event) => this.setState ({ userName: event.target.value })}
          //ref={(input) => this.userNameInput = input} // --> Similar to using getElementById()...
          placeholder="Github username" />
        <button type="submit">Add card</button>
      </form>
    );
  }
}

export default Form;