import { renderHook } from "@testing-library/react";
import { paintingsMock } from "../../mocks/paintingsMock";
import usePaintingsApi from "../usePaintingsApi";
import { providerWrapper } from "../../testUtils/customRender";

describe("Given a usePaintingsApi custom hook", () => {
  const expectedPaintings = { paintings: paintingsMock };

  const {
    result: {
      current: { getPaintingsApi, addnewPainting, deletePainting },
    },
  } = renderHook(() => usePaintingsApi(), { wrapper: providerWrapper });

  describe("When it receives the  information of 'Boys who swim', 'Untitled', and 'Stuck on you'", () => {
    test("Then it should show 'Boys who swim', 'Untitled', and 'Stuck on you' information", async () => {
      const currentPaintings = await getPaintingsApi();

      expect(currentPaintings).toStrictEqual(expectedPaintings);
    });
  });

  describe("When it calls its deletePainting function with a painting id '6564d129ab6e912be5400b1f' ", () => {
    test("Then it should delete the painting 'Boys who swim'", async () => {
      const expectedDeletedPaintingId = paintingsMock[0]._id;
      const expectedResponse = {};

      const response = await deletePainting(expectedDeletedPaintingId);

      expect(response).toStrictEqual(expectedResponse);
    });
  });

  describe("When it calls its addPaintingsApi method with 'Untitled' ", () => {
    test("Then it should return 'Untitled' from the API", async () => {
      const newPainting = paintingsMock[1];

      const response = await addnewPainting(newPainting);

      expect(response).toStrictEqual(newPainting);
    });
  });
});
