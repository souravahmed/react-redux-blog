import {
  EDIT_POST_FAILURE,
  EDIT_POST_REQUEST,
  EDIT_POST_SUCCESS,
} from "./postActionTypes";

export const editPostRequest = () => {
  return {
    type: EDIT_POST_REQUEST,
  };
};

export const editPostSuccess = (data) => {
  return {
    type: EDIT_POST_SUCCESS,
    payload: data,
  };
};

export const editPostFailure = (error) => {
  return {
    type: EDIT_POST_FAILURE,
    error: error,
  };
};
