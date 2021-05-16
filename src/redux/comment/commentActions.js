import api from "../../api/axios";
import {
  FETCH_COMMENTS_BY_POST_ID_REQUEST,
  FETCH_COMMENTS_BY_POST_ID_SUCCESS,
  FETCH_COMMENTS_BY_POST_ID_FAILURE,
} from "./commentActionTypes";

const fetchCommentsByPostIdRequest = () => {
  return {
    type: FETCH_COMMENTS_BY_POST_ID_REQUEST,
  };
};

const fetchCommentsByPostIdSuccess = (data) => {
  return {
    type: FETCH_COMMENTS_BY_POST_ID_SUCCESS,
    payload: data,
  };
};

const fetchCommentsByPostIdFailure = (error) => {
  return {
    type: FETCH_COMMENTS_BY_POST_ID_FAILURE,
    error: error,
  };
};

export const fetchCommentsByPostId = (postId) => {
  return async (dispatch) => {
    dispatch(fetchCommentsByPostIdRequest());
    try {
      const response = await api.get(`/comments?postId=${postId}`);
      dispatch(fetchCommentsByPostIdSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(fetchCommentsByPostIdFailure(error));
    }
  };
};
