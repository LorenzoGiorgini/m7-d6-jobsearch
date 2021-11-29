import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "../actions/actions";

import { initialState } from "../store/store";

const favouritesReducer = (state = initialState.favourites, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_FAVOURITES:
      return [...state, payload];
    case REMOVE_FROM_FAVOURITES:
      return [...state.filter((item, i) => i !== payload)];
    default:
      return state;
  }
};



/* {
  ...state,
  favourites: state.filter((item, i) => i !== payload),
}; */

export default favouritesReducer;