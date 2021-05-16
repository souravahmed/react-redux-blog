import {
  FETCH_COMMENTS_BY_POST_ID_FAILURE,
  FETCH_COMMENTS_BY_POST_ID_REQUEST,
  FETCH_COMMENTS_BY_POST_ID_SUCCESS,
} from "./commentActionTypes";

const initialState = {
  loading: false,
  commentsByPostId: [],
  error: "",
};

export const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_BY_POST_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COMMENTS_BY_POST_ID_SUCCESS:
      return {
        ...state,
        commentsByPostId: action.payload,
        loading: false,
      };
    case FETCH_COMMENTS_BY_POST_ID_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
