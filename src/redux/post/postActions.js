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
import api from "../../api/axios";

// fetch posts
const fetchPostsRequest = () => {
  return { type: FETCH_POSTS_REQUEST };
};

const fetchPostsSuccess = (data) => {
  return { type: FETCH_POSTS_SUCCESS, payload: data };
};

const fetchPostsFailure = (error) => {
  return { type: FETCH_POSTS_FAILURE, error: error };
};

// fetch post
const fetchPostRequest = () => {
  return {
    type: FETCH_POST_REQUEST,
  };
};
const fetchPostSuccess = (data) => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: data,
  };
};
const fetchPostFailure = (error) => {
  return {
    type: FETCH_POST_FAILURE,
    error: error,
  };
};

// fetch posts by user id

const fetchPostsByUserIdRequest = () => {
  return {
    type: FETCH_POSTS_BY_USER_ID_REQUEST,
  };
};

const fetchPostsByUserIdSuccess = (data) => {
  return {
    type: FETCH_POSTS_BY_USER_ID_SUCCESS,
    payload: data,
  };
};

const fetchPostsByUserIdFfailure = (error) => {
  return {
    type: FETCH_POSTS_BY_USER_ID_FAILURE,
    error: error,
  };
};

export const fetchPostsByUserId = (query) => {
  return async (dispatch) => {
    dispatch(fetchPostsByUserIdRequest(query));
    try {
      const response = await api.get(query);
      dispatch(fetchPostsByUserIdSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(fetchPostsByUserIdFfailure(error.message));
    }
  };
};

export const fetchPost = (postId) => {
  return async (dispatch) => {
    dispatch(fetchPostRequest());
    try {
      const response = await api.get(`posts/${postId}`);
      dispatch(fetchPostSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(fetchPostFailure(error));
    }
  };
};

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(fetchPostsRequest());
    try {
      const response = await api.get("posts");
      dispatch(fetchPostsSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(fetchPostsFailure(error));
    }
  };
};
