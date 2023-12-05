import paintingsMock from "../../../../mocks/paintingsMock";
import { PaintingsStateStructure } from "./types";
import {
  deletePaintingActionCreator,
  loadPaintingsActionCreator,
  paintingsReducer,
} from "./paintingsSlice";

describe("Given a paintingsReducer reducer", () => {
  describe("When it receives a curretState and a list of paintings", () => {
    test("Then it should return the new state with 'Boys who swim', 'Untitled' and 'Stuck on you' in a list", () => {
      const currentListState: PaintingsStateStructure = {
        paintings: [],
      };
      const paintingsList = paintingsMock;

      const newPaintingsState = paintingsReducer(
        currentListState,
        loadPaintingsActionCreator(paintingsList),
      );

      expect(newPaintingsState.paintings).toStrictEqual(paintingsList);
    });
  });

  describe("When it receives a list of paintings, a painting id, and the action deletePainting", () => {
    test("Then it should return the list minus the painting with id '6564d123ab6e912be5400b1e'", () => {
      const initialState: PaintingsStateStructure = {
        paintings: paintingsMock,
      };
      const expectedDeletedPainting = "Sugar Ray Robinson";
      const expectedPaintingId = "6564d129ab6e912be5400b1f";

      const currentPaintingsState = paintingsReducer(
        initialState,
        deletePaintingActionCreator(expectedPaintingId),
      );

      currentPaintingsState.paintings.forEach((painting) =>
        expect(painting).not.toHaveProperty("name", expectedDeletedPainting),
      );
    });
  });
});
