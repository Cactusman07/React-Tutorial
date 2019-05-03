// /src/ts/reducers/reducers.tsx
import { 
  ADD_PROFILE, 
  FOUND_BAD_WORD
} from "@actions/actionConstants";
import { initialState } from "@store/initialState";
import { isNullOrUndefined } from "util";


// In the below rootReducer, the initial State is left untouched. 
// Object.assign is part of ES6 and not supported by older browsers.

const rootReducer = (state: any = initialState, action: any) => {
  if (typeof state === 'undefined') {
    return state;
  }

  // Display success popup & resets input field value to ""
  const successPopupFunc = () => {
    const formValue = (document.getElementById("githubUserName") as HTMLInputElement);
    formValue.value = "";

    const successPopup = (document.getElementById('success') as HTMLDivElement);
    successPopup.className = "";
    setTimeout(
      function () {
        successPopup.className = "hidden";
      }, 600
    );
  } 

  switch (action.type){
    
    case ADD_PROFILE:
      console.log("Adding profile...");  
      if(isNullOrUndefined(action.payload)){
        console.log("null or undefined " + action.payload);
        return state;
      } 
      else{
        console.log(action.payload);
        successPopupFunc();
        return Object.assign({}, state, {
          profiles: state.profiles.concat(action.payload)
        });
      }

    case FOUND_BAD_WORD:
      alert("Sorry, that type of foul language is not allowed here! Please try again");
      return state;

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