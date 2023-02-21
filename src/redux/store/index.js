import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouritesReducer from "../reducer/favouritesReducer";
import searchReducer from "../reducer/searchReducer";

const mainReducer = combineReducers({
  query: searchReducer,
  favourites: favouritesReducer,
});

const store = configureStore({
  reducer: mainReducer,
});

export default store;
