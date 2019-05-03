// src/ts/components/dumb/Name/NameChange.tsx

import * as React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { getNameState, getIntroTextState, getIntroButtonState } from "../../../selectors/selectors";

interface NameChangeProps {
  introText: string,
  showIntroButton: boolean,
  handleNameChange: () => void
}

// this.props.defaultName is an object literal being used to initialize this.state 
// (which sets the initial state for the component)
// this.props should not be changes and they are passed in by parent containers.
// Component updated to initialize static propTypes & get Name from application State. 

class NameChange extends React.Component<NameChangeProps> {
  public static propTypes = {
    introText: PropTypes.string.isRequired,
    showIntroButton: PropTypes.bool.isRequired,
    handleNameChange: PropTypes.func.isRequired
  }

  // We are using this.state.name to set the name displayed in the UI. 
  // Notice in the event onClick we use arrow syntax and the 'this' keyword. 
  // Without this we would use JavaScript's 'bind' method to achieve the same effect. 
  // Updated to use this.props, and then refer to the props when rendering the component. 

  public render() {
    const { handleNameChange, introText, showIntroButton } = this.props;
    return (
      <div>
        <p id="intro">{ introText }</p>
        <div className={showIntroButton ? '' : 'hidden'}>
          <input 
            type="text"
            id="nameInput"
            name="nameInput"
          />
          <button
            id="update"
            name="Update"
            onClick= { handleNameChange }
          >Update name</button> 
        </div>
      </div>
    );
  }
}

// Uses connect from react-redux to update the Value in the UI every time it changes.
export default connect(state => ({
  name: getNameState(state),
  introText: getIntroTextState(state),
  showIntroButton: getIntroButtonState(state)
}))(NameChange);