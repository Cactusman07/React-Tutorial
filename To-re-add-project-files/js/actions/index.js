// src/js/actions/index.js

// Dispatch/return a plain action. 
export function addArticle(payload) {
  return { type: "ADD_ARTICLE", payload }
};

// Action creator to test Async logic, using Redux Thunk. The fetch call gets returned from
// an outer function and the outer function has a dispatch as a parameter. If you want to 
// access the State inside the Action Creator you can add getState in the parameter's list.

// Dispatch is used inside 'then()' - We need to explicitly call dispatch inside the async
// function for dispatching the action. 

export function getData(){
  return function(dispatch){
    return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json => {
      dispatch( {type: "DATA_LOADED", payload: json} );
    })
  }
}