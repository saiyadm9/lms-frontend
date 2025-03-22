import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import courseReducer from "./slices/courseSlice";
import { persistStore, persistReducer } from "redux-persist";

const storage =
  typeof window !== "undefined"
    ? require("redux-persist/lib/storage/session").default
    : null;

const rootReducer = combineReducers({
  user: userReducer,
  courses: courseReducer,
});

let persistedReducer;
if (storage !== null) {
  const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: ["user", "courses"], // Persist both user and courses
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
