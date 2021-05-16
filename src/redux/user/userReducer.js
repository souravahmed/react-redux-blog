import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./userActionTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        users: action.payload,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        users: [],
      };
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
