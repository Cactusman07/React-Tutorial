// /src/ts/middleware/middleware.tsx

import { ADD_PROFILE, FOUND_BAD_WORD } from "@actions/actionConstants";

const forbiddenWords = ["spam", "Liverpool", "Liverpool FC"];

// The below (originally... forbiddenWordsMiddleware ( {dispatch} )... ) - like below
// is an example of using object destructuring assignment to extract className
// from the first argument object. See the below article for more information:
// https://medium.com/front-end-weekly/typescript-error-ts7031-makes-me-go-huh-c81cf76c829b
// has been updated to prevent Typescript throwing a "Binding element 'dispatch'
// implicitly has an 'any' type" error. It declares all keys on the first argument object
// as string, and all values on that object as any.

export const forbiddenWordsMiddleware = (store: any) => (next: any) => (action: any) => {
  console.log("Middleware entered:", action);
  const returnValue = next(action);
  console.log("Next action:", returnValue);

  // When Action_Type = ADD_PROFILE, then check if the payload title contains a "bad word" - if yes, then dispatch an 
  // action of Type FOUND_BAD_WORD - otherwise, let action pass. 
  if(action.type === ADD_PROFILE){
    //console.log(action.payload.login);
    const foundWord = forbiddenWords.filter(
      word => action.payload.login.includes(word)
    );

    if(foundWord.length){
      console.log("Bad word!");
      return store.dispatch({type: FOUND_BAD_WORD});
    }

  }
  
  return returnValue;
}

/* 
export function forbiddenWordsMiddleware( dispatch:any ) {
  return function(next: (arg0: any) => void) {
    return function (action: any) {
    ... 
  ...
...
*/