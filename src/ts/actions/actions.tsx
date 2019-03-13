// /src/ts/actions/actions.tsx

export const ADD_PROFILE = "ADD_PROFILE";
export const FOUND_BAD_WORD = "Found_Bad_Word";
export const PROFILE_LOADED = "PROFILE_LOADED";

// Dispatch a plain action
export const addProfile = (payload: any) => {
  return {
    type: "ADD_PROFILE", 
    payload
  };
}

// Dispatch is used inside 'then()'
// We need to explicitly call dispatch inside the async function for dispatching the action. 

export const getProfiles = () => {
  return async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    const response = await fetch("https://api.github.com/users/jlord");
    const json = await response.json();
    dispatch({ type: "PROFILE_LOADED", payload: json });
  }
}