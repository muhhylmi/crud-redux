import { GET_USER_DETAIL, GET_USER_LIST } from "../actions/UserAction";

let initialState = {
  title: "Latihan CRUD dengan Redux",
  getUserList: false,
  getErrorList: false,
  getUserDetail: false,
  getDetailError: false,
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

    default:
      return state;
  }
};

export default users;
