import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PaintingStructure, PaintingsStructure } from "../types";

const initialPaintings: PaintingsStructure = {
  paintings: [],
};

const paintingSlice = createSlice({
  name: "paintings",
  initialState: initialPaintings,
  reducers: {
    loadPaintings: (
      currentState,
      action: PayloadAction<PaintingStructure[]>,
    ): PaintingsStructure => {
      return {
        ...currentState,
        paintings: action.payload,
      };
    },
  },
});

export const { loadPaintings: loadPaintingsActionCreator } =
  paintingSlice.actions;

export const paintingsReducer = paintingSlice.reducer;
