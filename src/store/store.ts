import { configureStore } from '@reduxjs/toolkit';
import {productApi} from "../apis/product-api";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productApi.middleware),
});

export type AppDispatch = typeof store.dispatch;

// @ts-ignore
window.dispatch=store.dispatch
export type RootState = ReturnType<typeof store.getState>;

