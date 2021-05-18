import {
  DELETE_POST_FAILURE,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
} from "./postActionTypes";

export const deletePostRequest = () => {
  return {
    type: DELETE_POST_REQUEST,
  };
};

export const deletePostSuccess = () => {
  return {
    type: DELETE_POST_SUCCESS,
  };
};

export const deletePostFailure = (error) => {
  return {
    type: DELETE_POST_FAILURE,
    error: error,
  };
};
