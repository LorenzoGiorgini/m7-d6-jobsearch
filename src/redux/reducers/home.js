import {
  GET_JOBS,
  TOGGLE_LOADER,
  SET_SEARCH,
  IS_ERROR,
} from "../actions/actions";

const homeReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_JOBS:
      return {
        ...state,
        jobs: payload,
      };
    case TOGGLE_LOADER:
      return {
        ...state,
        isLoading: payload,
      };
    case SET_SEARCH:
      return {
        ...state,
        search: payload,
      };
    case IS_ERROR:
      return {
        ...state,
        isError: payload,
      };
    default:
      return state;
  }
};

export const fetchJobs = (search) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: TOGGLE_LOADER,
        payload: true,
      });
      const response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?search=${search}&limit=10`
      );
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_JOBS,
          payload: data,
        });
        dispatch({
          type: TOGGLE_LOADER,
          payload: false,
        });
      } else {
        dispatch({
          type: TOGGLE_LOADER,
          payload: false,
        });
        dispatch({
          type: IS_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      dispatch({
        type: TOGGLE_LOADER,
        payload: false,
      });
      dispatch({
        type: IS_ERROR,
        payload: true,
      });
    }
  };
};

export default homeReducer;
