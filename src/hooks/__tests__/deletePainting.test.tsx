import { renderHook } from "@testing-library/react";
import { paintingsMock } from "../../mocks/paintingsMock";
import usePaintingsApi from "../usePaintingsApi";
import { providerWrapper } from "../../testUtils/customRender";

describe("Given a usePaintingsApi custom hook", () => {
  describe("When it calls its deletePainting function with a painting id '6564d129ab6e912be5400b1f' ", () => {
    test("Then it should delete the painting 'Boys who swim'", async () => {
      const {
        result: {
          current: { deletePainting },
        },
      } = renderHook(() => usePaintingsApi(), { wrapper: providerWrapper });
      const expectedDeletedPaintingId = paintingsMock[0]._id;
      const expectedResponse = {};

      const response = await deletePainting(expectedDeletedPaintingId);

      expect(response).toStrictEqual(expectedResponse);
    });
  });
});
