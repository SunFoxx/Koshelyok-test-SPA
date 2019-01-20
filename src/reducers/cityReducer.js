import {
  WASHERS_FETCH_LIST,
  WASHERS_FETCHING_SUCCESS,
  WASHERS_FETCHING_ERROR,
  WASHERS_SELECT_CITY,
} from '../actions';

const defaultState = {
  selectedCity: 0,
  carWashMap: {},
};

const carWashDefault = {
  fetching: false,
  error: false,
  data: undefined,
};

export default (state = defaultState, action) => {
  const { type, payload } = action;
  const selectedCityState = state.carWashMap[state.selectedCity];

  switch (type) {
    case WASHERS_SELECT_CITY: {
      const { city } = payload;
      return {
        ...state,
        selectedCity: city,
      };
    }
    case WASHERS_FETCH_LIST:
      const { city } = payload;
      return {
        ...state,
        selectedCity: city,
        carWashMap: {
          [city]: {
            ...carWashDefault,
            fetching: true,
          },
        }
      };
    case WASHERS_FETCHING_SUCCESS:
      const { washers } = payload;
      return {
        ...state,
        carWashMap: {
          [state.selectedCity]: {
            fetching: false,
            error: false,
            data: washers,
          }
        }
      };
    case WASHERS_FETCHING_ERROR:
      return {
        ...state,
        carWashMap: {
          [state.selectedCity]: {
            ...selectedCityState,
            fetching: false,
            error: true,
          }
        }
      };
    default:
      return state;
  }
};
