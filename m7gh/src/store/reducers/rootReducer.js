import authReducer from "./authReducers";
import guideReducer from "./guideReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  // state of the store will have ---
  // property : corresponding reducer
  // reducer will update property of corresponding state
  authStateOfStore: authReducer,
  guideStateOfStore: guideReducer
});

export default rootReducer;
