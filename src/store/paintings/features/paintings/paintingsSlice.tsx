import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PaintingStructure, PaintingsStateStructure } from "./types";

const initialPaintingsState: PaintingsStateStructure = {
  paintings: [],
  selectedPainting: {} as PaintingStructure,
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

    loadSelectedPainting: (
      currentState,
      action: PayloadAction<PaintingStructure>,
    ) => ({
      ...currentState,
      selectedPainting: action.payload,
    }),
  },
});

export const {
  loadPaintings: loadPaintingsActionCreator,
  deletePainting: deletePaintingActionCreator,
  addNewPainting: addNewPaintingActionCreator,
  loadSelectedPainting: loadSelectedPaintingActionCreator,
} = paintingsSlice.actions;

export const paintingsReducer = paintingsSlice.reducer;
