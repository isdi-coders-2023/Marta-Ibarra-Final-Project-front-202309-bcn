import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PaintingStructure, PaintingsStateStructure } from "../types";

const initialPaintingsState: PaintingsStateStructure = {
  paintings: [],
};

const paintingsSlice = createSlice({
  name: "paintings",
  initialState: initialPaintingsState,
  reducers: {
    loadPaintings: (
      currentState,
      action: PayloadAction<PaintingStructure[]>,
    ): PaintingsStateStructure => ({
      ...currentState,
      paintings: action.payload,
    }),
  },
});

export const { loadPaintings: loadPaintingsActionCreator } =
  paintingsSlice.actions;

export const paintingsReducer = paintingsSlice.reducer;
