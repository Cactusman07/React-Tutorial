import * as React from "react";

export default class Counter extends React.Component{
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: (this.state.count += 1)
    });
  };

  decrement = () => {
    this.setState({
      count: (this.state.count -=1)
    });
  };

  render() {
    return(
      <div>
        <h5>Simple Counter: {this.state.count}</h5>
      </div>
    );
  }

}