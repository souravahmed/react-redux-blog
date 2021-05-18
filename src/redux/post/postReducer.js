import {
  CREATE_POST_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILURE,
  FETCH_POSTS_BY_USER_ID_FAILURE,
  FETCH_POSTS_BY_USER_ID_REQUEST,
  FETCH_POSTS_BY_USER_ID_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POST_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_USERS_FAILURE,
  FETCH_POST_USERS_REQUEST,
  FETCH_POST_USERS_SUCCESS,
} from "./postActionTypes";

const initialState = {
  loading: false,
  posts: [],
  error: "",
  post: {},
  users: [],
  postCreatedResponse: {},
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
        posts: [],
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
        posts: [],
        postCreatedResponse: {},
      };
    case FETCH_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        post: [],
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
        posts: [],
      };
    // fetch post users
    case FETCH_POST_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POST_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case FETCH_POST_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        users: [],
      };

    // create post
    case CREATE_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        postCreatedResponse: action.payload,
      };
    case CREATE_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        postCreatedResponse: {},
      };

    // edit post
    case UPDATE_POST_REQUEST:
      return {
        ...state,
        loading: true,
        postCreatedResponse: {},
        posts: [],
      };

    case UPDATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        postEditedResponse: action.payload,
      };
    case UPDATE_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    // delete post

    case DELETE_POST_REQUEST:
      return {
        ...state,
        loading: true,
        postCreatedResponse: {},
        post: {},
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
