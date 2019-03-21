// /src/ts/middleware/middleware.tsx

import { ADD_PROFILE } from "../actions/actionConstants";

const forbiddenWords = ["spam", "Liverpool", "Liverpool FC"];

// The below (originally... forbiddenWordsMiddleware ( {dispatch} )... ) 
// is an example of using object destructuring assignment to extract className
// from the first argument object. See the below article for more information:
// https://medium.com/front-end-weekly/typescript-error-ts7031-makes-me-go-huh-c81cf76c829b
// has been updated to prevent Typescript throwing a "Binding element 'dispatch'
// implicitly has an 'any' type" error. It declares all keys on the first argument object
// as string, and all values on that object as any.
export function forbiddenWordsMiddleware( {dispatch}:{[key:string]:any} ) {
  return function(next: (arg0: any) => void) {
    return function (action: { type: string; payload: { title: { includes: (arg0: string) => void; }; }; }) {

      // When action type = ADD_PROFILE, check if the payload.title contains a "bad word." If it does, then dispatch
      // an action of Type "FOUND_BAD_WORD" - otherwise, let the next action pass. 
      if(action.type === ADD_PROFILE){
        const foundWord = forbiddenWords.filter(
          word => action.payload.title.includes(word)
        );

        if(foundWord.length){
          return dispatch({ type: "FOUND_BAD_WORD" });
          console.log("found bad word");
        }
      }
      return next(action);
    }
  }
}