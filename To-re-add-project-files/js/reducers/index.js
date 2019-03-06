// /src/js/reducers/index.js

import { ADD_ARTICLE } from "../constants/action-types";
import { Found_Bad_Word } from "../constants/action-types";

const initialState = {
  articles: [],
  remoteArticles: []
};

// The below rootReducer breaks the main Redux principle - immutability. The State cannot change in place. 

/* function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE){
    state.articles.push(action.payload);
  }
  return state;
}; */

// In the below rootReducer, the initial State is left untouched. 

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE){
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }

  if(action.type === Found_Bad_Word){
    alert("found bad word");
  }

  if(action.type === "DATA_LOADED"){
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    });
  }

  return state;
};

export default rootReducer;