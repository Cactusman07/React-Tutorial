// src/ts/components/App.tsx
// The "App" here is the container component

import * as React from "react";
// Component Imports
import NameChange from "./dumb/NameChange/NameChange";
import Counter from "./dumb/Counter/Counter";
import GithubProfiles from "./smart/GithubProfile/GithubProfiles";
import store from "@store/store";

// Every time state changes, log it.
const unsubscribe = store.subscribe(() => console.log(store.getState()))

class App extends React.Component<any, any>{
  public constructor(props: any){
    super(props);
  }

  public render() {
    return(
      <div>
        <div className="row mt-5">
          <div className="col-md-8">
            <NameChange 
              introText = { (store.getState()).introText }
              showIntroButton = { (store.getState()).showIntroButton}
              handleNameChange={ () => {
                if (((document.getElementById("nameInput") as HTMLInputElement).value).length > 0){
                  store.dispatch({ type: 'NAME_CHANGE' })
                }
              }}
            />
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
          <GithubProfiles profileArray= { (store.getState()).profileArray } />
        </div>
      </div>
    );
  }
}

export default App;