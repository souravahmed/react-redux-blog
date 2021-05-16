import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POST_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
} from "./postActionTypes";
import api from "../../api/axios";

const fetchPostsRequest = () => {
  return { type: FETCH_POSTS_REQUEST };
};

const fetchPostsSuccess = (data) => {
  return { type: FETCH_POSTS_SUCCESS, payload: data };
};

const fetchPostsFailure = (error) => {
  return { type: FETCH_POSTS_FAILURE, error: error };
};

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
