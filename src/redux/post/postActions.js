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
  fetchPostUsersRequest,
  fetchPostUsersSuccess,
  fetchPostUsersFailure,
} from "./postFetchActions";
import api from "../../api/axios";
import {
  createPostFailure,
  createPostRequest,
  createPostSuccess,
} from "./postCreateActions";
import {
  editPostFailure,
  editPostRequest,
  editPostSuccess,
} from "./postEditActions";

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
      return response.data;
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

export const fetchPostUsers = () => {
  return async (dispatch) => {
    dispatch(fetchPostUsersRequest());
    try {
      const response = await api.get("users");
      dispatch(fetchPostUsersSuccess(response.data));
      return response.data;
    } catch (error) {
      console.log(error);
      dispatch(fetchPostUsersFailure(error));
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

export const editPost = (postId, data) => {
  return async (dispatch) => {
    dispatch(editPostRequest());
    try {
      const response = await api.put(`posts/${postId}`, JSON.stringify(data));
      dispatch(editPostSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(editPostFailure(error));
    }
  };
};
