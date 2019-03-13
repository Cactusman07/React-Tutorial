// /src/ts/reducers/reducers.tsx

import { ADD_PROFILE, PROFILE_LOADED } from "../actions/actions";
import { FOUND_BAD_WORD } from "../actions/actions";

const initialState = {
  profiles: [],
  preLoadedProfiles: []
};

const rootReducer = (state = initialState, action: any) => {
  if (action.type === ADD_PROFILE){
    return Object.assign({}, state, {
      profiles: state.profiles.concat(action.payload)
    });
  }

  if(action.type === FOUND_BAD_WORD){
    alert("Sorry, that type of bad language is not allowed here!");
  }

  if(action.type === PROFILE_LOADED){
    return Object.assign({}, state, {
      preLoadedProfiles: state.preLoadedProfiles.concat(action.payload)
    });
  }

  return state;
}

export default rootReducer;