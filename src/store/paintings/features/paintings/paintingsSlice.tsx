import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PaintingStructure, PaintingsStateStructure } from "./types";

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

    deletePainting: (currentstate, action: PayloadAction<string>) => ({
      ...currentstate,
      paintings: currentstate.paintings.filter(
        (painting) => painting._id !== action.payload,
      ),
    }),

    addNewPainting: (
      currentState,
      action: PayloadAction<PaintingStructure>,
    ): PaintingsStateStructure => ({
      ...currentState,
      paintings: [...currentState.paintings, action.payload],
    }),
  },
});

export const {
  loadPaintings: loadPaintingsActionCreator,
  deletePainting: deletePaintingActionCreator,
  addNewPainting: addNewPaintingActionCreator,
} = paintingsSlice.actions;

export const paintingsReducer = paintingsSlice.reducer;
