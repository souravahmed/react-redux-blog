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

import {
  createPostFailure,
  createPostRequest,
  createPostSuccess,
} from "./postCreateActions";
import {
  updatePostRequest,
  updatePostSuccess,
  updatePostFailure,
} from "./postEditActions";

import {
  deletePostFailure,
  deletePostRequest,
  deletePostSuccess,
} from "./postDeleteActions";
import PostService from "../../services/PostService";

export const fetchPostsByUserId = (query) => {
  return async (dispatch) => {
    dispatch(fetchPostsByUserIdRequest(query));
    try {
      const data =
        query !== ""
          ? await PostService.getAllPostByQuery(query)
          : await PostService.getAllPost();

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
      const data = await PostService.getPost(postId);
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
      const data = await PostService.getAllPost();
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
      const data = await PostService.getUsers();
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
      const data = await PostService.createPost(postData);
      dispatch(createPostSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(createPostFailure(error));
    }
  };
};

export const updatePost = (postId, postData) => {
  return async (dispatch) => {
    dispatch(updatePostRequest());
    try {
      const data = await PostService.updatePost(postId, postData);
      dispatch(updatePostSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(updatePostFailure(error));
    }
  };
};

export const deletePost = (postId) => {
  return async (dispatch) => {
    dispatch(deletePostRequest());
    try {
      await PostService.deletePost(postId); // response data don't have any value
      dispatch(deletePostSuccess());
    } catch (error) {
      console.log(error);
      dispatch(deletePostFailure(error));
    }
  };
};
