import api from "../../api/axios";
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./userActionTypes";

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUsersSuccess = (data) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: data,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    error: error,
  };
};

const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

const fetchUserSuccess = (data) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: data,
  };
};

const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_SUCCESS,
    error: error,
  };
};

export const fetchUser = (userId) => {
  return async (dispatch) => {
    dispatch(fetchUserRequest());
    try {
      const response = await api.get(`users/${userId}`);
      dispatch(fetchUserSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(fetchUserFailure(error.message));
    }
  };
};

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest());
    try {
      const users = await api.get("users");
      dispatch(fetchUsersSuccess(users.data));
    } catch (error) {
      console.log(error);
      return await dispatch(fetchUsersFailure(error.message));
    }
  };
};
