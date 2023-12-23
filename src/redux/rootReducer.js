import { combineReducers } from "redux";
import { baseApi } from "./axiosBaseQuery";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

export const createNoopStorage = () => ({
  getItem() {
    return Promise.resolve(null);
  },
  setItem(_key, value) {
    return Promise.resolve(value);
  },
  removeItem() {
    return Promise.resolve();
  },
});

export const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

export const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
});

export default rootReducer;
