import {
  addedPaintingMock,
  paintingsMock,
} from "../../../../mocks/paintingsMock";
import { PaintingsStateStructure } from "./types";
import {
  addNewPaintingActionCreator,
  deletePaintingActionCreator,
  loadPaintingsActionCreator,
  paintingsReducer,
} from "./paintingsSlice";

describe("Given a paintingsReducer reducer", () => {
  describe("When it receives a currentState and a list of paintings", () => {
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

  describe("When it receives a paintings list, the new painting 'Stuck on you' and the action addPainting", () => {
    test("Then it should return the list of paintings with 'Stuck on you' in it", () => {
      const mockList = paintingsMock;
      const mockAddedList = addedPaintingMock;
      const initialState: PaintingsStateStructure = {
        paintings: mockList,
      };
      const newPainting = mockAddedList[2];

      const currentPaintingState = paintingsReducer(
        initialState,
        addNewPaintingActionCreator(newPainting),
      );

      expect(currentPaintingState.paintings).toStrictEqual(mockAddedList);
    });
  });
});
