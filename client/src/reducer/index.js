import {
  GET_ALL_COUNTRIES,
  GET_ACTIVITIES,
  GET_BY_NAME,
  GET_BY_ID,
  POST_ACTIVITY,
  GET_COUNTRY_ACTIVITIES,
  FILTER_COUNTRIES_BY_CONTINENT,
  SORT_COUNTRIES_BY_POPULATION,
  FILTER_COUNTRIES_BY_ACTIVITY,
  SORT_COUNTRIES_AZ,
  FILTER_COUNTRIES,
  DELETE_ACTIVITY,
  RESET_ACTIVITIES,
} from "../actions/index";

const initialState = {
  countryActivities: [],
  countries: [],
  filteredCountries: [],
  activities: [],
  country: null,
  //
  //   sortOrder: "asc",
  //   totalPages: 0,
  //   currentPage: 1,
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
    case GET_COUNTRY_ACTIVITIES:
      const { countryId, activities } = action.payload;
      return {
        ...state,
        countryActivities: {
          ...state.countryActivities,
          [countryId]: activities,
        },
      };

    case GET_BY_NAME:
      return {
        ...state,
        filteredCountries: action.payload,
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

    case FILTER_COUNTRIES_BY_ACTIVITY:
      const { activity } = action.payload;
      const paises = state.countries;
      const filtrados = paises.filter((country) => {
        return country.activities.some(
          (act) => act.name.toLowerCase() === activity.toLowerCase()
        );
      });
      return {
        ...state,
        filtrados,
      };
    case FILTER_COUNTRIES_BY_CONTINENT:
      return {
        ...state,
        filteredCountries: action.payload,
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
      const srtdcountries = state.countries.slice().sort((a, b) => {
        if (state.sortOrder === "asc") {
          return a.population - b.population;
        } else {
          return b.population - a.population;
        }
      });
      return {
        ...state,
        countries: srtdcountries,
        sortOrder: state.sortOrder === "asc" ? "desc" : "asc",
      };

    default:
      return state;
  }
};

export default rootReducer;
