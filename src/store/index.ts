import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { paintingsReducer } from "./paintings/paintingsSlice";

export const store = configureStore({
  reducer: { paintingsState: paintingsReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
