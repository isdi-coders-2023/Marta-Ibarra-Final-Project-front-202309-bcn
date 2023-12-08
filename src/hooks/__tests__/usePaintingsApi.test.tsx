import { renderHook } from "@testing-library/react";
import { paintingsMock } from "../../mocks/paintingsMock";
import usePaintingsApi from "../usePaintingsApi";
import { providerWrapper } from "../../testUtils/customRender";

describe("Given a usePaintingsApi custom hook", () => {
  describe("When it receives the  information of 'Boys who swim', 'Untitled', and 'Stuck on you'", () => {
    test("Then it should show 'Boys who swim', 'Untitled', and 'Stuck on you' information", async () => {
      const expectedPaintings = { paintings: paintingsMock };

      const {
        result: {
          current: { getPaintingsApi },
        },
      } = renderHook(() => usePaintingsApi(), { wrapper: providerWrapper });

      const currentPaintings = await getPaintingsApi();

      expect(currentPaintings).toStrictEqual(expectedPaintings);
    });
  });

  describe("When it calls its deletePainting function with a painting id '6564d129ab6e912be5400b1f' ", () => {
    test("Then it should delete the painting 'Boys who swim'", async () => {
      const expectedDeletedPaintingId = paintingsMock[0]._id;
      const expectedResponse = {};

      const {
        result: {
          current: { deletePainting },
        },
      } = renderHook(() => usePaintingsApi(), { wrapper: providerWrapper });

      const response = await deletePainting(expectedDeletedPaintingId);

      expect(response).toStrictEqual(expectedResponse);
    });
  });
});
