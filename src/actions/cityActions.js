export const WASHERS_SELECT_CITY = 'WASHERS_SELECT_CITY';
export const selectCity = (city) => ({
  type: WASHERS_SELECT_CITY,
  payload: { city },
});

export const WASHERS_FETCH_LIST = 'WASHERS_FETCH_LIST';
export const fetchWashersList = (city) => ({
  type: WASHERS_FETCH_LIST,
  payload: { city },
});

export const WASHERS_FETCHING_SUCCESS = 'WASHERS_FETCHING_SUCCESS';
export const saveWashersList = (washers) => ({
  type: WASHERS_FETCHING_SUCCESS,
  payload: { washers },
});

export const WASHERS_FETCHING_ERROR = 'WASHERS_FETCHING_ERROR';
export const washerFetchingFailed = () => ({
  type: WASHERS_FETCHING_ERROR,
  payload: {},
});
