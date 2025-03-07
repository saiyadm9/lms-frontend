import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import { persistStore, persistReducer } from "redux-persist";

const storage =
  typeof window !== "undefined"
    ? require("redux-persist/lib/storage/session").default
    : null;

const rootReducer = combineReducers({
  user: userReducer,
});

let persistedReducer;
if (storage !== null) {
  const persistConfig = {
    key: "root",
    storage: storage,
  };
  persistedReducer = persistReducer(persistConfig, rootReducer);
} else {
  persistedReducer = rootReducer;
}

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = storage !== null ? persistStore(store) : null;
