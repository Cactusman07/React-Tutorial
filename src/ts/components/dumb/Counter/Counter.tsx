import * as React from "react";
import './Counter.scss';

interface CounterProps{}
interface CounterState{
  count: number;
}

export default class Counter extends React.Component<CounterProps, CounterState>{
  constructor(props: CounterProps){
    super(props);
  }
  state = {
    count: 0
  };

  // We could also define defaultProps by adding a count: number type to the 
  // CounterProps interface, which would then allow us to use:
  // static defaultProps: Props = { count: 10 }; 
  // which would set the default count number to use. The count would then be 
  // called from this.props.count instead of this.state.count

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
      <div className="counterButtons">
        <h5>Simple Counter: {this.state.count}</h5>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }

}