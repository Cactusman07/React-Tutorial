//src/ts/store/store.tsx

import {createStore, applyMiddleware }from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "@reducers/reducers";
import { forbiddenWordsMiddleware } from "@middleware/middleware";
import thunk from "redux-thunk";

// Either use this below, or use 'redux-devtools-extension' - like above
//const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; --> Using this also means you need to import compose from Redux

const storeEnhancers = composeWithDevTools;

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk))
);

export default store;