//src/index.tsx

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from "./ts/components/App";

const rootElement = document.getElementById("app");

// React.Component<any, any> is a part of the TypeScript typing definition for React. 
// This is saying that the React.Component will allow the type 'any' to be used for the components state and props objects. This is similar to generics in C#
class Main extends React.Component<any, any> {

  // The constructor method is used to initialize the class. Here, super(props) is called which calls the constructor method on the parent class 'React.Component' - this passes any props that were passed into our constructor. 
  constructor(props: any){
    super(props);
  }

  // The render method is where the DOM for our component is defined. Your JSX is added inside the return() statement.
  public render() {
    return(
      <div>
        <App />
      </div>
    )
  }
}

// Passes Main component to the defined Root Element variable that we output the component to.
ReactDOM.render(<Main />, rootElement);
