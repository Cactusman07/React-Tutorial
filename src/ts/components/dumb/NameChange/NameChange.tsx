// src/ts/components/dumb/Name/NameChange.tsx

import * as React from "react";
import * as ReactDOM from "react-dom";

interface NameChangeProps {
  defaultName: string;
}

// this.props.defaultName is an object literal being used to initialize this.state (which sets the initial state for the component)
// this.props should not be changes and they are passed in by parent containers.
export default class NameChange extends React.Component<NameChangeProps, any> {
  constructor(props: NameChangeProps){
    super(props);
    this.state = { name: this.props.defaultName };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  public handleOnClick(event: any) : void{
    let newName = (document.getElementById("nameInput") as HTMLInputElement).value;
    if (newName.length > 0){
      this.setState({ name: newName });
      const introText = (document.getElementById("intro") as HTMLParagraphElement);
      const updateButton = (document.getElementById("update") as HTMLButtonElement);
      const nameInput = (document.getElementById("nameInput") as HTMLInputElement);
      introText.remove();
      updateButton.remove();
      nameInput.remove();
    }
  }

  // We are using this.state.name to set the name displayed in the UI. Notice in the event onClick we use arrow syntax and the 'this' keyword. Without this we would use JavaScript's 'bind' method to achieve the same effect. 
  public render() {
    return (
      <div>
        <p id="nameShown" className="hidden">Hi, {this.state.name}!</p>
        <p id="intro">Enter your name below, and let's continue.</p> 
        <input 
          type="text"
          id="nameInput"
          name="nameInput"
        />
        <button
          id="update"
          name="Update"
          onClick= {e => this.handleOnClick(e)}
        >Update name</button> 
      </div>
    );
  }
}