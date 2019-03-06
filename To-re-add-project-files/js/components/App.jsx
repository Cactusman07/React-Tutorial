// src/js/components/App.jsx
import React from "react";
import List from "./presentational/List.jsx";
import Form from "./container/FormContainer.jsx";
import Post from "./presentational/Posts.jsx";

const App = () => (
    <div className="row mt-5">
      <div className="col-md-4 offset-md-1">
      <h2>Articles</h2>
        <List />
      </div>
      <div className="col-md-4 offset-md-1">
        <Form />
      </div>
      <div className="col-md-4 offset-md-1">
      <h2>API posts</h2>
      <Post />
    </div>
  </div>
);

export default App;