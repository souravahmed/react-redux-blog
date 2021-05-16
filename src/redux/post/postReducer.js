import {
  FETCH_POSTS_BY_USER_ID_FAILURE,
  FETCH_POSTS_BY_USER_ID_REQUEST,
  FETCH_POSTS_BY_USER_ID_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POST_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
} from "./postActionTypes";

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    // fetch posts
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    // fetch post
    case FETCH_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        post: action.payload,
      };
    case FETCH_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    // fetch posts by userId
    case FETCH_POSTS_BY_USER_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POSTS_BY_USER_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case FETCH_POSTS_BY_USER_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
