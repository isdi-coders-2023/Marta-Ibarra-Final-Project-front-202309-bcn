import { renderHook } from "@testing-library/react";
import { screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import {
  customRenderWithoutRouter,
  providerWrapper,
} from "../../testUtils/customRender";
import App from "../../components/App/App";
import usePaintingsApi from "../usePaintingsApi";
import {
  addedPaintingMockToModify,
  modifiedPaintingsMock,
} from "../../mocks/paintingsMock";
import { errorHandlers } from "../../mocks/handlers";
import server from "../../mocks/node";

describe("Given a usePaintingsApi custom hook", () => {
  const {
    result: {
      current: { modifyPainting },
    },
  } = renderHook(() => usePaintingsApi(), { wrapper: providerWrapper });

  const paintingToBeModified = addedPaintingMockToModify[0]._id;
  const modifiedPaintings = modifiedPaintingsMock;

  describe("When it is called with its modifyPainting function with a Sugar Ray Robinson", () => {
    test("Then it should show the modified painting", async () => {
      const response = await modifyPainting(
        paintingToBeModified,
        modifiedPaintings[0],
      );

      expect(response).toStrictEqual(modifiedPaintings);
    });
  });

  describe("When it is called with its modifyPainting function with the painting Sugar Ray Robinson, and the response fails", () => {
    test("Then it should show the feedback message, 'An error occurred, please try again'", async () => {
      server.use(...errorHandlers);

      const feedbackMessage = "An error occurred, please try again";
      const path = "/paintings/6564d129ab6e912be5400b1f/modify";

      customRenderWithoutRouter(
        <MemoryRouter initialEntries={[path]}>
          <App />
        </MemoryRouter>,
      );

      const {
        result: {
          current: { modifyPainting },
        },
      } = renderHook(() => usePaintingsApi(), { wrapper: providerWrapper });

      await modifyPainting(paintingToBeModified, modifiedPaintings[0]);
      const feedback = await screen.findByText(feedbackMessage);

      expect(feedback).toBeInTheDocument();
    });
  });
});
