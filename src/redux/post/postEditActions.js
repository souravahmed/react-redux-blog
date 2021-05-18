import {
  UPDATE_POST_FAILURE,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
} from "./postActionTypes";

export const updatePostRequest = () => {
  return {
    type: UPDATE_POST_REQUEST,
  };
};

export const updatePostSuccess = (data) => {
  return {
    type: UPDATE_POST_SUCCESS,
    payload: data,
  };
};

export const updatePostFailure = (error) => {
  return {
    type: UPDATE_POST_FAILURE,
    error: error,
  };
};
