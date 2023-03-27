import {
  GET_ALL_COUNTRIES,
  GET_ACTIVITIES,
  GET_BY_NAME,
  GET_BY_ID,
  POST_ACTIVITY,
  SORT_COUNTRIES_BY_CONTINENT,
  SORT_COUNTRIES_BY_POPULATION,
  SORT_COUNTRIES_BY_ACTIVITY,
  SORT_COUNTRIES_AZ,
  FILTER_COUNTRIES,
  DELETE_ACTIVITY,
  RESET_ACTIVITIES,
} from "../actions/index";

const initialState = {
  countries: [],
  filteredCountries: [],
  activities: [],
  country: null,
  sortOrder: "asc",
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

    case SORT_COUNTRIES_BY_ACTIVITY:
      const activity = action.payload;
      const actsorted = state.countries.filter((c) =>
        c.activities.includes(activity)
      );
      return {
        ...state,
        sortedCountries: actsorted,
      };

    case FILTER_COUNTRIES:
      return {
        ...state,
        filteredCountries: action.payload,
      };
    case SORT_COUNTRIES_AZ:
      const order = action.payload === "asc" ? 1 : -1;
      const sortedCountries = [...state.countries].sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1 * order;
        }
        if (nameA > nameB) {
          return 1 * order;
        }
        return 0;
      });
      return {
        ...state,
        countries: sortedCountries,
        sortOrder: action.payload,
      };
    case SORT_COUNTRIES_BY_POPULATION:
      const sortedPop = [...state.filteredCountries].sort((a, b) => {
        return action.payload === "asc"
          ? a.population - b.population
          : b.population - a.population;
      });
      return {
        ...state,
        filteredCountries: sortedPop,
        sortOrder: action.payload,
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
