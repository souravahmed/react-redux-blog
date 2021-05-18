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

import {
  deletePostFailure,
  deletePostRequest,
  deletePostSuccess,
} from "./postDeleteActions";

export const fetchPostsByUserId = (query) => {
  return async (dispatch) => {
    dispatch(fetchPostsByUserIdRequest(query));
    try {
      const { data } = await api.get(query);
      dispatch(fetchPostsByUserIdSuccess(data));
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
      const { data } = await api.get(`posts/${postId}`);
      dispatch(fetchPostSuccess(data));
      return data;
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
      const { data } = await api.get("posts");
      dispatch(fetchPostsSuccess(data));
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
      const { data } = await api.get("users");
      dispatch(fetchPostUsersSuccess(data));
      return data;
    } catch (error) {
      console.log(error);
      dispatch(fetchPostUsersFailure(error));
    }
  };
};

export const createPost = (postData) => {
  return async (dispatch) => {
    dispatch(createPostRequest());
    try {
      const { data } = await api.post("posts", JSON.stringify(postData));
      dispatch(createPostSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(createPostFailure(error));
    }
  };
};

export const editPost = (postId, postData) => {
  return async (dispatch) => {
    dispatch(editPostRequest());
    try {
      const { data } = await api.put(
        `posts/${postId}`,
        JSON.stringify(postData)
      );
      dispatch(editPostSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(editPostFailure(error));
    }
  };
};

export const deletePost = (postId) => {
  return async (dispatch) => {
    dispatch(deletePostRequest());
    try {
      await api.delete(`posts/${postId}`); // response data don't have any value
      dispatch(deletePostSuccess());
    } catch (error) {
      console.log(error);
      dispatch(deletePostFailure(error));
    }
  };
};
