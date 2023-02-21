import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import favouritesReducer from "../reducer/favouritesReducer";
import searchReducer from "../reducer/searchReducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["hasError"],
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_JOB_SEARCH_PERSIST_KEY,
    }),
  ],
};

const mainReducer = combineReducers({
  query: searchReducer,
  favourites: favouritesReducer,
});

const persistedReducer = persistReducer(persistConfig, mainReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
