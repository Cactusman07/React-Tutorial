import * as React from "react";
import PropTypes from 'prop-types';
import './Counter.scss';
import { connect } from "react-redux";
import { getValueState } from "@selectors/selectors";

interface CounterProps {
  value: number,
  handleIncrement: () => void ,
  handleDecrement: () => void 
}

class Counter extends React.Component<CounterProps>{
  public static propTypes = {
    value: PropTypes.number.isRequired,
    handleIncrement: PropTypes.func.isRequired,
    handleDecrement: PropTypes.func.isRequired
  }

  public render(){
    const { value, handleIncrement, handleDecrement } = this.props;
    return(
      <div className="counterButtons">
        <h5>Simple Counter: { value }</h5>
        <button onClick={ handleDecrement }>Decrement</button>
        <button onClick={ handleIncrement }>Increment</button>
      </div>
    )
  }
}

// Uses connect from react-redux to update the Value in the UI every time it changes.
export default connect(state => ({
  value: getValueState(state)
}))(Counter);