// /src/js/middleware/index.js

// setup function that prevents certain words from being entered into the article list. 
// Notice dispatch is the first parameter

import { ADD_ARTICLE } from "../constants/action-types";

const forbiddenWords = ["spam", "Liverpool FC", "poos"];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next){
    return function(action){

      // When action type = ADD_ARTICLE, check if the payload.title contains a "bad word." If it does, then dispatch
      // an action of Type "Found_Bad_word" - otherwise, let the next action pass. 
      if(action.type === ADD_ARTICLE){

        const foundWord = forbiddenWords.filter(word => 
          action.payload.title.includes(word)
        );

        if (foundWord.length) {
          return dispatch({ type: "Found_Bad_Word" });
        }
      }
      return next(action);
    };
  };
}