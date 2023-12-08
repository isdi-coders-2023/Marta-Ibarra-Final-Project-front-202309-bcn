import newPaintingMock from "../../../../../mocks/newPaintingMock";
import paintingsMock from "../../../../../mocks/paintingsMock";
import {
  addNewPaintingActionCreator,
  paintingsReducer,
} from "../paintingsSlice";
import { PaintingStructure, PaintingsStateStructure } from "../types";

describe("Given an addPainting minireducer", () => {
  describe("When it receives the new painting 'Sugar Ray Robinson' without id", () => {
    test("Then it should return 'Sugar RayRobinson' with an id in a list", () => {
      const initialState: PaintingsStateStructure = {
        paintings: paintingsMock,
      };
      const newPainting: PaintingStructure = newPaintingMock[3];

      const currentPaintingState = paintingsReducer(
        initialState,
        addNewPaintingActionCreator(newPainting),
      );

      expect(currentPaintingState.paintings).toStrictEqual(newPaintingMock);
    });
  });
});
