/*
	export default store,
	There is only one store object in every react application
*/

//import createStore，use to create store object
import { legacy_createStore, applyMiddleware } from "redux";
//import combined reducers
import reducer from "./reducers";
//import redux-thunk，to support async action
import thunk from "redux-thunk";
//import redux-devtools-extension
import { composeWithDevTools } from "redux-devtools-extension";

//export default store
export default legacy_createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
