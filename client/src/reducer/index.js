import {
  GET_ALL_COUNTRIES,
  GET_ACTIVITIES,
  GET_BY_NAME,
  GET_BY_ID,
  POST_ACTIVITY,
  SORT_COUNTRIES_BY_CONTINENT,
  SORT_COUNTRIES_BY_ACTIVITY,
  SORT_COUNTRIES_ALPHABETICALLY,
  FILTER_COUNTRIES,
  DELETE_ACTIVITY,
  RESET_ACTIVITIES,
} from "../actions/index";

const initialState = {
  countries: [],
  filteredCountries: [],
  activities: [],
  country: null,
  sortedCountries: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: [...state.activities, ...action.payload],
      };
    case RESET_ACTIVITIES:
      return {
        ...state,
        activities: [],
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
      return {
        ...state,
        country: action.payload,
      };

    case POST_ACTIVITY:
      return {
        ...state,
        activities: [...state.activities, action.payload],
      };

    //pendientes

    case SORT_COUNTRIES_BY_CONTINENT:
      const continent = action.payload;
      const ordered = state.countries.filter((c) => c.continent === continent);
      return {
        ...state,
        sortedCountries: ordered,
      };

    case SORT_COUNTRIES_BY_ACTIVITY:
      const activity = action.payload;
      const actsorted = state.countries.filter((c) =>
        c.activities.includes(activity)
      );
      return {
        ...state,
        sortedCountries: actsorted,
      };

    case SORT_COUNTRIES_ALPHABETICALLY:
      const sorted = state.countries.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      return {
        ...state,
        sortedCountries: sorted,
      };
    case FILTER_COUNTRIES: // New action type for filtering countries
      return {
        ...state,
        filteredCountries: action.payload,
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
