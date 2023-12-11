import { renderHook } from "@testing-library/react";
import { paintingsMock } from "../../mocks/paintingsMock";
import usePaintingsApi from "../usePaintingsApi";
import { providerWrapper } from "../../testUtils/customRender";

describe("Given a usePaintingsApi custom hook", () => {
  describe("When it calls its loadedSelectedPainting method with the painting's Stuck on you id", () => {
    test("Then it should return the painting Stuck on you", async () => {
      const expectedPaintingId = paintingsMock[1];

      const {
        result: {
          current: { loadSelectedPainting },
        },
      } = renderHook(() => usePaintingsApi(), { wrapper: providerWrapper });

      const selectedPainting = await loadSelectedPainting(
        expectedPaintingId._id,
      );

      expect(selectedPainting).toStrictEqual(expectedPaintingId);
    });
  });
});
