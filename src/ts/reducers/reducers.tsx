// /src/ts/reducers/reducers.tsx

import { 
  ADD_PROFILE, 
  FOUND_BAD_WORD
} from "../actions/actionConstants";

// Initial State of application
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
  ],
  showIntroButton: true,
  introText: "Enter your name below, and let's continue.",
  value: 0,
  name: ""
};

// In the below rootReducer, the initial State is left untouched. 
// Object.assign is part of ES6 and not supported by older browsers.

const rootReducer = (state: any = initialState, action: any) => {
  if (typeof state === 'undefined') {
    return state;
  }

  switch (action.type){

    case ADD_PROFILE:
      return Object.assign({}, state, {
        profiles: state.profiles.concat(action.payload)
      });

    case FOUND_BAD_WORD:
      return alert("Sorry, that type of bad language is not allowed here!");

    case 'INCREMENT':
      return Object.assign({}, state, {
        value: state.value +1
      });
    
    case 'DECREMENT':
      return Object.assign({}, state, {
        value: state.value -1
      });

    case 'NAME_CHANGE':
      let newName = (document.getElementById("nameInput") as HTMLInputElement).value;
      if (newName.length > 0){
        return Object.assign({}, state, {
          name: state.name = newName,
          showIntroButton: state.showIntroButton = false,
          introText: state.introText = "Welcome " + newName + "! Let's get started."
        });
      } else{
        return state;
      }
    
    default:
      return state;
  }
}

export default rootReducer;