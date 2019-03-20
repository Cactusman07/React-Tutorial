// src/ts/components/App.tsx
// The "App" here is the container component

import * as React from "react";
// Component Imports
import NameChange from "./dumb/NameChange/NameChange";
import Counter from "./dumb/Counter/Counter";
import GithubProfiles from "./smart/GithubProfile/GithubProfiles";
import store from "../store/store";

// Remove these in production build
// Log initial State
console.log(store.getState());
// Every time state changes, log it.
const unsubscribe = store.subscribe(() => console.log(store.getState()))

class App extends React.Component<any, any>{
  constructor(props: any){
    super(props);
  }

  public render() {
    return(
      <div>
        <div className="row mt-5">
          <div className="col-md-8">
            <NameChange defaultName="User" />
            <br />
          </div>
          <div className="col-md-4">
            <br />
            <Counter 
              value={ (store.getState()).value }
              handleIncrement={ () => store.dispatch({ type: 'INCREMENT' })}
              handleDecrement={ () => store.dispatch({ type: 'DECREMENT' })}
            />
          </div>
        </div>
        <div>
          <GithubProfiles />
        </div>
      </div>
    );
  }
}

export default App;