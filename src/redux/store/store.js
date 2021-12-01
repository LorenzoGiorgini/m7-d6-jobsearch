//REDUX
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

//REDUX PERSISTOR
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

//Encryption
import { encryptTransform } from 'redux-persist-transform-encrypt'

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
  home: home,
});

//PERSIST THE STORAGE
const persistConfig = {
  key: 'root',
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_KEY_DECRYPT,
    })
  ]
}

//PERSIST THE REDUCERS
const persistedReducer = persistReducer(persistConfig, mainReducer)

//COMPOSE MULTIPLE MIDDLEWARES
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = createStore(
  persistedReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(configureStore)


export default configureStore