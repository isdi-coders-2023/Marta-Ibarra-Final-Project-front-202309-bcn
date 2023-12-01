import paintingsMock from "../../testUtils/paintingsMock";
import { PaintingsStateStructure } from "../types";
import { loadPaintingsActionCreator, paintingsReducer } from "./paintingsSlice";

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
});
