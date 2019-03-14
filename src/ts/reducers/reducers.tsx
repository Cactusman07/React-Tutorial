// /src/ts/reducers/reducers.tsx

import { 
  ADD_PROFILE, 
  FOUND_BAD_WORD 
} from "../actions/actions";

const initialState = {
  profiles: [
    { login: "Jlord",
      name:"Jessica Lord",
      avatar_url:"https://avatars3.githubusercontent.com/u/1305617?v=4",
      company:"Glitch",
      key: 1
    },
    { login: "VincentGarreau",
      name:"Vincent Garreau",
      avatar_url:"https://avatars3.githubusercontent.com/u/961898?v=4",
      company:"Livestorm",
      key: 2
    }
  ]
};

// In the below rootReducer, the initial State is left untouched. 
// Object.assign is part of ES6 and not supported by older browsers.

const rootReducer = (state: any = initialState, action: any) => {
  switch (action.type){
    case ADD_PROFILE:
      return Object.assign({}, state, {
        profiles: state.profiles.concat(action.payload)
      });

    case FOUND_BAD_WORD:
      return alert("Sorry, that type of bad language is not allowed here!");
    
    default:
      return state;
  }
}

export default rootReducer;