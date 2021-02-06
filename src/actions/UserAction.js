import axios from "axios";

export const GET_USER_LIST = "GET_USER_LIST";
export const GET_USER_DETAIL = "GET_USER_DETAIL";
export const POST_DATA_USER = "POST_DATA_USER";
export const PUT_DATA_UPDATE = "PUT_DATA_UPDATE";

const API_URL =
  "https://my-json-server.typicode.com/muhhylmi/data-crud-redux/users";

export const getUserList = () => {
  return (dispatch) => {
    axios
      .get(API_URL)
      .then(function (response) {
        dispatch({
          type: GET_USER_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_USER_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getUserDetail = (id) => {
  return (dispatch) => {
    axios
      .get(API_URL + "/" + id)
      .then(function (response) {
        dispatch({
          type: GET_USER_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_USER_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const postDataUser = (data) => {
  return (dispatch) => {
    axios
      .post(API_URL, data)
      .then(function (response) {
        console.log(response);
        dispatch({
          type: POST_DATA_USER,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: POST_DATA_USER,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const userUpdate = (data, id) => {
  return (dispatch) => {
    axios
      .put(API_URL + "/" + id, data)
      .then(function (response) {
        console.log(response);
        dispatch({
          type: PUT_DATA_UPDATE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: PUT_DATA_UPDATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const clearData = () => {
  return (dispatch) => {
    dispatch({
      type: GET_USER_DETAIL,
      payload: {
        data: false,
        errorMessage: false,
      },
    });

    dispatch({
      type: POST_DATA_USER,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};
