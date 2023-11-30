import paintingsMock from "../../testUtils/paintingsMock";
import { PaintingsStructure } from "../types";
import { loadPaintingsActionCreator, paintingsReducer } from "./paintingsSlice";

describe("Given a paintinsReducer reducer", () => {
  describe("When it receives an empty list and a list of paintings", () => {
    test("Then it should return 'Boys who swim', 'Untitled' and 'Stuck on you' in a list", () => {
      const currentListState: PaintingsStructure = {
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
});
