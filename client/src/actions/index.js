import axios from "axios";
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_BY_ID = "GET_BY_ID";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const SORT_BY_CONTINENT = "SORT_BY_CONTINENT";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const ORDER_ALPHABET = "ORDER_ALPHABET";
export const DELETE_ACTIVITY = "DELETE_ACTIVITY";

export const getAllCountries = () => {
  return async function (dispatch) {
    const countries = await axios.get(`http://localhost:3001/countries`);
    dispatch({ type: GET_ALL_COUNTRIES, payload: countries.data });
  };
};

export const createActivity = (activity) => {
  return (dispatch) => {
    dispatch({ type: CREATE_ACTIVITY, payload: activity });
  };
};

export const getByName = (name) => {
  return (dispatch) => {
    dispatch({ type: GET_BY_NAME, payload: name });
  };
};

export const getById = (countryId) => {
  return async function (dispatch) {
    const detail = await axios.get(
      `http://localhost:3001/countries/${countryId}`
    );

    dispatch({ type: GET_BY_ID, payload: detail.data });
  };
};

export const postActivity = (activity) => {
  return (dispatch) => {
    dispatch({ type: POST_ACTIVITY, payload: activity });
  };
};

export const sortByContinent = (continent) => {
  return (dispatch) => {
    dispatch({ type: SORT_BY_CONTINENT, payload: continent });
  };
};

export const filterByActivity = (activity) => {
  return (dispatch) => {
    dispatch({ type: FILTER_BY_ACTIVITY, payload: activity });
  };
};

export const orderAlphabet = (order) => {
  return (dispatch) => {
    dispatch({ type: ORDER_ALPHABET, payload: order });
  };
};

export const deleteActivity = (id) => {
  return (dispatch) => {
    dispatch({ type: DELETE_ACTIVITY, payload: id });
  };
};
