// /src/ts/actions/actions.tsx

import { ADD_PROFILE } from "./actionConstants";

// Dispatchs a plain action (Action Creator)
export const addProfile = (payload: any) => {
  return {
    type: ADD_PROFILE,
    payload
  };
}


// Action creator to test Async logic, using Redux Thunk. The fetch call gets returned from
// an outer function and the outer function has a dispatch as a parameter. If you want to 
// access the State inside the Action Creator you can add getState in the parameter's list.

// Dispatch is used inside 'then()'
// We need to explicitly call dispatch inside the async function for dispatching the action. 

/* export const getProfile = (userName: string) => {
  return async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    const response = await fetch("https://api.github.com/users/{userName}");
    const json = await response.json();
    dispatch({ type: PROFILE_LOADED, payload: json });
  }
} */