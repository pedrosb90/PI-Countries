import axios from "axios";
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_BY_ID = "GET_BY_ID";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const SORT_COUNTRIES_BY_CONTINENT = "SORT_COUNTRIES_BY_CONTINENT";
export const SORT_COUNTRIES_BY_ACTIVITY = "SORT_COUNTRIES_BY_ACTIVITY";
export const SORT_COUNTRIES_ALPHABETICALLY = "SORT_COUNTRIES_ALPHABETICALLY";
export const DELETE_ACTIVITY = "DELETE_ACTIVITY";
export const RESET_ACTIVITIES = "RESET_ACTIVITIES";
export const FILTER_COUNTRIES = "FILTER_COUNTRIES";

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
export const filterCountries = (searchInput) => (dispatch, getState) => {
  const allCountries = getState().countries;
  const filteredCountries = allCountries.filter((country) =>
    country.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  dispatch({
    type: FILTER_COUNTRIES,
    payload: filteredCountries,
  });
};

//pendientes

export const sortCountriesByActivity = (activity) => ({
  type: SORT_COUNTRIES_BY_ACTIVITY,
  payload: activity,
});

export const sortCountriesByContinent = (continent) => ({
  type: SORT_COUNTRIES_BY_CONTINENT,
  payload: continent,
});

export const sortCountriesAlphabetically = () => {
  return {
    type: SORT_COUNTRIES_ALPHABETICALLY,
  };
};
export const deleteActivity = (id) => {
  return (dispatch) => {
    dispatch({ type: DELETE_ACTIVITY, payload: id });
  };
};
