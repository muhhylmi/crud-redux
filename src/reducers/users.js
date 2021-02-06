import {
  GET_USER_DETAIL,
  GET_USER_LIST,
  POST_DATA_USER,
  PUT_DATA_UPDATE,
} from "../actions/UserAction";

let initialState = {
  title: "Latihan CRUD dengan Redux",
  getUserList: false,
  getErrorList: false,
  getUserDetail: false,
  getDetailError: false,
  postDataUser: false,
  errorPostDataUser: false,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LIST:
      return {
        ...state,
        getUserList: action.payload.data,
        getErrorList: action.payload.errorMessage,
      };

    case GET_USER_DETAIL:
      return {
        ...state,
        getUserDetail: action.payload.data,
        getDetailError: action.payload.errorMessage,
      };

    case POST_DATA_USER:
      return {
        ...state,
        postDataUser: action.payload.data,
        errorPostDataUser: action.payload.errorMessage,
      };

    case PUT_DATA_UPDATE:
      return {
        ...state,
        postDataUser: action.payload.data,
        errorPostDataUser: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default users;
