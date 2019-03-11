// src/ts/components/App.tsx

import * as React from "react";
import * as ReactDOM from "react-dom";

// Component Imports
import NameChange from "./dumb/NameChange/NameChange";
import Counter from "./dumb/Counter/Counter";
/* import Result from "./dumb/Counter/Result"; */

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
          <div className="col-md-12">
            <br />
            <Counter />

          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4 offset-md-1">
            <h2>Articles</h2>  
          </div>
        </div>
      </div>
    );
  }
}

export default App;