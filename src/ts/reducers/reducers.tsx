// /src/ts/reducers/reducers.tsx
import Axios from 'axios';

import { 
  ADD_PROFILE, 
  FOUND_BAD_WORD
} from "@actions/actionConstants";

// Initial State of application
const initialState = {
  profiles: [
    { login: "Jlord",
      name:"Jessica Lord",
      avatar_url:"https://avatars3.githubusercontent.com/u/1305617?v=4",
      company:"Glitch",
      id:"1"
    },
    { login: "VincentGarreau",
      name:"Vincent Garreau",
      avatar_url:"https://avatars3.githubusercontent.com/u/961898?v=4",
      company:"Livestorm",
      id:"2"
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
      let newProfile = getUserProfile();
/*       if(newProfile !== null){ */
        return Object.assign({}, state, {
          profiles: state.profiles.concat(newProfile)
        });
/*       } else{
        return state;
      } */

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

// Adding async & await as "syntactic sugar" over Promises
const getUserProfile = () => {
  let userName = (document.getElementById("githubUserName")as HTMLInputElement).value;

  if (userName !== ""){
    console.log(`Fetching ${userName}`);
    // use Axios to GET additional Cards

    Axios.get(`https://api.github.com/users/${userName}`)
      .then(async function(response){
        console.log(response.data);
        await successPopupFunc();
      });    
    
    // Display success popup & resets input field value to ""
    const successPopupFunc = () => {
      const successPopup = (document.getElementById('success') as HTMLDivElement);
      successPopup.className="";
      setTimeout(
        function(){
          successPopup.className="hidden";
        }, 600
      );
      (document.getElementById("githubUserName")as HTMLInputElement).value = "";
    }
    

    // Log data & return data Profile json 
    
    
  }
}

export default rootReducer;