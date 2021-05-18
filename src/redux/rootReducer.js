import { combineReducers } from "redux";
import { userReducer } from "./user/userReducer";
import { postReducer } from "./post/postReducer";
import { commentReducer } from "./comment/commentReducer";

const rootReducer = combineReducers({
  post: postReducer,
  user: userReducer,
  comment: commentReducer,
});

export default rootReducer;
