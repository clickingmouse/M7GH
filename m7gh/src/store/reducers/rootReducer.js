import authReducer from "./authReducers";
import guideReducer from "./guideReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  // state of the store will have ---
  // property : corresponding reducer
  // reducer will update property of corresponding state
  authStateOfStore: authReducer,
  guideStateOfStore: guideReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
