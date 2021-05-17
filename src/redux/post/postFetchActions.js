import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POST_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POSTS_BY_USER_ID_REQUEST,
  FETCH_POSTS_BY_USER_ID_SUCCESS,
  FETCH_POSTS_BY_USER_ID_FAILURE,
} from "./postActionTypes";

// fetch posts
export const fetchPostsRequest = () => {
  return { type: FETCH_POSTS_REQUEST };
};

export const fetchPostsSuccess = (data) => {
  return { type: FETCH_POSTS_SUCCESS, payload: data };
};

export const fetchPostsFailure = (error) => {
  return { type: FETCH_POSTS_FAILURE, error: error };
};

// fetch post
export const fetchPostRequest = () => {
  return {
    type: FETCH_POST_REQUEST,
  };
};

export const fetchPostSuccess = (data) => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: data,
  };
};

export const fetchPostFailure = (error) => {
  return {
    type: FETCH_POST_FAILURE,
    error: error,
  };
};

// fetch posts by user id

export const fetchPostsByUserIdRequest = () => {
  return {
    type: FETCH_POSTS_BY_USER_ID_REQUEST,
  };
};

export const fetchPostsByUserIdSuccess = (data) => {
  return {
    type: FETCH_POSTS_BY_USER_ID_SUCCESS,
    payload: data,
  };
};

export const fetchPostsByUserIdFfailure = (error) => {
  return {
    type: FETCH_POSTS_BY_USER_ID_FAILURE,
    error: error,
  };
};
