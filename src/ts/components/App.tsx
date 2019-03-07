import * as React from "react";
import * as ReactDom from "react-dom";

import List from "./dumb/List/List";

const App = () => (
  <div className="row mt-5">
      <div className="col-md-4 offset-md-1">
      <h2>Articles</h2>
        <List />
      </div>
  </div>
);

export default App;