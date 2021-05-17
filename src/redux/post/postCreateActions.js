import {
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
} from "./postActionTypes";

// create post

export const createPostRequest = () => {
  return {
    type: CREATE_POST_REQUEST,
  };
};

export const createPostSuccess = (data) => {
  return {
    type: CREATE_POST_SUCCESS,
    payload: data,
  };
};

export const createPostFailure = (error) => {
  return {
    type: CREATE_POST_FAILURE,
    error: error,
  };
};
