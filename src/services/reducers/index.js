import { combineReducers } from "redux";
import auth from "./authReducer";
import message from "./messageReducer";
import common from "./commonReducer";
import community from "./communityReducer";
import post from "./postReducer";
import user from "./userReducer";

export default combineReducers({
  auth,
  message,common,community,post,user
});
