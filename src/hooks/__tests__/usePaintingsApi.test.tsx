import { renderHook } from "@testing-library/react";
import paintingsMock from "../../mocks/paintingsMock";
import usePaintingsApi from "../usePaintingsApi";

describe("Given a usePaintingsApi custom hook", () => {
  describe("When it receives the  information of 'Boys who swim', 'Untitled', and 'Stuck on you'", () => {
    test("Then it should show 'Boys who swim', 'Untitled', and 'Stuck on you' information", async () => {
      const expectedPaintings = { paintings: paintingsMock };

      const {
        result: {
          current: { getPaintingsApi },
        },
      } = renderHook(() => usePaintingsApi());

      const currentPaintings = await getPaintingsApi();

      expect(currentPaintings).toStrictEqual(expectedPaintings);
    });
  });
});
