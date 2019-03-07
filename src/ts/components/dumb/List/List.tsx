// src/js/components/dumb/List

// The List component receives the prop articles which is a copy of the articles array in Redux State.

import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect } from "react-redux";

const mapStateToProps = (state: any) => {
  return { articles: state.articles };
};

class List extends React.Component<any, any> {

  public render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}

export default List;