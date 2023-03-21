import {
  GET_ALL_COUNTRIES,
  CREATE_ACTIVITY,
  GET_BY_NAME,
  GET_BY_ID,
  POST_ACTIVITY,
  SORT_BY_CONTINENT,
  FILTER_BY_ACTIVITY,
  ORDER_ALPHABET,
  DELETE_ACTIVITY,
} from "../actions/index";

const initialState = {
  countries: [],
  filteredCountries: [],
  activities: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        filteredCountries: action.payload,
      };
    case CREATE_ACTIVITY:
      return {
        ...state,
        activities: [...state.activities, action.payload],
      };
    case GET_BY_NAME:
      const filteredByName = state.countries.filter((country) => {
        return country.name
          .toLowerCase()
          .includes(action.payload.toLowerCase());
      });
      return {
        ...state,
        filteredCountries: filteredByName,
      };
    case GET_BY_ID:
      const countryById = state.countries.find((country) => {
        return country.countryId === action.payload;
      });
      return {
        ...state,
        countryDetail: countryById,
      };

    case POST_ACTIVITY:
      return {
        ...state,
        activities: [...state.activities, action.payload],
      };
    case SORT_BY_CONTINENT:
      const sortedByContinent = state.countries.filter((country) => {
        return country.region === action.payload;
      });
      return {
        ...state,
        filteredCountries: sortedByContinent,
      };
    case FILTER_BY_ACTIVITY:
      const filteredByActivity = state.countries.filter((country) => {
        return country.activities.find((activity) => {
          return activity.name === action.payload;
        });
      });
      return {
        ...state,
        filteredCountries: filteredByActivity,
      };
    case ORDER_ALPHABET:
      const orderedCountries = state.filteredCountries.sort((a, b) => {
        if (action.payload === "ASC") {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });
      return {
        ...state,
        filteredCountries: orderedCountries,
      };
    case DELETE_ACTIVITY:
      const activitiesAfterDelete = state.activities.filter((activity) => {
        return activity.id !== action.payload;
      });
      return {
        ...state,
        activities: activitiesAfterDelete,
      };
    default:
      return state;
  }
};

export default rootReducer;
