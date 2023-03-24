import axios from "axios";
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_BY_ID = "GET_BY_ID";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const SORT_BY_CONTINENT = "SORT_BY_CONTINENT";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const ORDER_ALPHABET = "ORDER_ALPHABET";
export const DELETE_ACTIVITY = "DELETE_ACTIVITY";
export const RESET_ACTIVITIES = "RESET_ACTIVITIES";

export const getAllCountries = () => {
  return async function (dispatch) {
    const countries = await axios.get(`http://localhost:3001/countries`);
    dispatch({ type: GET_ALL_COUNTRIES, payload: countries.data });
  };
};

export const getActivities = (activity) => {
  return async function (dispatch) {
    const activities = await axios.get(`http://localhost:3001/activities`);
    dispatch({ type: GET_ACTIVITIES, payload: activities.data });
  };
};

export const getByName = (name) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001?name=${name}`);
      const data = response.data;
      dispatch({ type: GET_BY_NAME, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getById = (countryId) => {
  return function (dispatch, getState) {
    const { countries } = getState();
    const country = countries.find((c) => c.countryId === countryId);
    dispatch({ type: GET_BY_ID, payload: country });
  };
};

export const postActivity = (activity) => {
  return async (dispatch) => {
    console.log("Activity before POST request:", activity);

    try {
      const response = await axios.post(
        "http://localhost:3001/activities",
        activity
      );
      dispatch({ type: POST_ACTIVITY, payload: response.data });
    } catch (error) {
      console.error("Error posting activity: ", error);
    }
  };
};
export const resetActivities = () => {
  return {
    type: RESET_ACTIVITIES,
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
