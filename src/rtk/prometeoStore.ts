import { configureStore } from "@reduxjs/toolkit";
import { backendApi } from "./backendApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const prometeoStore = configureStore({
  reducer: {
    [backendApi.reducerPath]: backendApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(backendApi.middleware),
});

setupListeners(prometeoStore.dispatch);
