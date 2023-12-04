import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { paintingsReducer } from "./paintings/paintingsSlice";
import { uiReducer } from "./paintings/features/ui/uiSlice";

export const store = configureStore({
  reducer: { paintingsState: paintingsReducer, uiState: uiReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
