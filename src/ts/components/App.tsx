// src/ts/components/App.tsx

import * as React from "react";

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
          <div className="col-md-8">
            <NameChange defaultName="User" />
            <br />
          </div>
          <div className="col-md-4">
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