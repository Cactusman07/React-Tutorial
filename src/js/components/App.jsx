// src/js/components/App.jsx
import React from "react";
import List from "./presentational/List";

const App = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
    <h2>Articles</h2>
      <List />
    </div>
  
    <div className="col-md-4 offset-md-1">
      <FormContainer />
    </div>
  </div>
);

export default App;