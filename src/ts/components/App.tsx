// src/ts/components/App.tsx

import * as React from "react";
import * as ReactDOM from "react-dom";

// Component Imports
import NameChange from "./dumb/NameChange/NameChange";
import Counter from "./dumb/Counter/Counter";
import GithubProfiles from "./smart/GithubProfile/GithubProfiles";

class App extends React.Component<any, any>{
  constructor(props: any){
    super(props);
  }

  public render() {
    return(
      <div>
        <div className="row mt-5">
          <div className="col-md-12">
            <NameChange defaultName="User" />
          </div>
          <div className="col-md-10 offset-md-1">
            <br />
            <Counter />
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