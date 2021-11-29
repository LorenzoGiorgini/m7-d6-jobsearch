//REDUX
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

//REDUCERS
import favourites from "../reducers/favourites";
import home from "../reducers/home";

//MAIN STORAGE FOR REDUX STORE
export const initialState = {
  favourites: [],
  home: {
    search: "",
    jobs: [],
    isLoading: false,
    isError: false,
  },
};

//COMBINE MULTIPLE REDUCERS INTO ONE
const mainReducer = combineReducers({
  favourites,
  home,
});

//COMPOSE MULTIPLE MIDDLEWARES
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = createStore(
  mainReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default configureStore;