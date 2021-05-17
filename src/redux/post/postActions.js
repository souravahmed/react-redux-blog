import {
  fetchPostsByUserIdRequest,
  fetchPostsByUserIdSuccess,
  fetchPostsByUserIdFfailure,
  fetchPostRequest,
  fetchPostSuccess,
  fetchPostFailure,
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsFailure,
} from "./postFetchActions";
import api from "../../api/axios";
import {
  createPostFailure,
  createPostRequest,
  createPostSuccess,
} from "./postCreateActions";

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

export const createPost = (data) => {
  return async (dispatch) => {
    dispatch(createPostRequest());
    try {
      const response = await api.post("posts", JSON.stringify(data));
      dispatch(createPostSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(createPostFailure(error));
    }
  };
};
