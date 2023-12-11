import {
  addedPaintingMock,
  modifiedPaintingsMock,
  paintingsMock,
} from "../../../../../mocks/paintingsMock";
import { PaintingStructure, PaintingsStateStructure } from "../types";
import {
  addNewPaintingActionCreator,
  deletePaintingActionCreator,
  loadPaintingsActionCreator,
  modifyPaintingActionCreator,
  paintingsReducer,
} from "../paintingsSlice";

describe("Given a paintingsReducer reducer", () => {
  describe("When it receives a currentState and a list of paintings", () => {
    test("Then it should return the new state with 'Boys who swim', 'Untitled' and 'Stuck on you' in a list", () => {
      const currentListState: PaintingsStateStructure = {
        paintings: [],
        selectedPainting: {} as PaintingStructure,
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
        selectedPainting: {} as PaintingStructure,
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
        selectedPainting: {} as PaintingStructure,
      };
      const newPainting = mockAddedList[2];

      const currentPaintingState = paintingsReducer(
        initialState,
        addNewPaintingActionCreator(newPainting),
      );

      expect(currentPaintingState.paintings).toStrictEqual(mockAddedList);
    });
  });

  describe("When it receives a paintings list, the painting Sugar Ray Robinson and the action modifyPaniting", () => {
    test("Then it should return the list of paintings with the Sugar Ray Robinson painting modified", () => {
      const modifiedPaintings = modifiedPaintingsMock;
      const modifiedPainting = {
        ...modifiedPaintings[0],
      };

      const initialState: PaintingsStateStructure = {
        paintings: modifiedPaintings,
        selectedPainting: {} as PaintingStructure,
      };

      const currentPaintingState = paintingsReducer(
        initialState,
        modifyPaintingActionCreator(modifiedPainting),
      );

      expect(currentPaintingState.paintings).toStrictEqual(modifiedPaintings);
    });
  });
});
