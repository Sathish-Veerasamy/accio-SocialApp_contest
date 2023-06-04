import * as types from "./actionTypes";
import axios from "axios";

export const fetchDataStart = () => ({
  type: types.FETCH_REQUEST_START,
});

export const fetchDataSuccess = (data) => ({
  type: types.FETCH_REQUEST_SUCCESS,
  payload: data,
});

export const fetchDataFail = (error) => ({
  type: types.FETCH_REQUEST_FAIL,
  payload: error,
});

export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataStart());
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        dispatch(fetchDataSuccess(res.data))
    console.log(res.data)})
      .catch((error) => dispatch(fetchDataFail(error)));
  };
};
