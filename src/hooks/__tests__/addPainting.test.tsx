import { screen } from "@testing-library/react";
import { renderHook } from "@testing-library/react";
import {
  louPaintingMockWithoutId,
  paintingsMock,
} from "../../mocks/paintingsMock";
import usePaintingsApi from "../usePaintingsApi";
import {
  customRenderWithoutRouter,
  providerWrapper,
} from "../../testUtils/customRender";
import server from "../../mocks/node";
import { errorHandlers } from "../../mocks/handlers";
import { MemoryRouter } from "react-router-dom";
import App from "../../components/App/App";

describe("Given a usePaintingsApi custom hook", () => {
  const {
    result: {
      current: { addnewPainting },
    },
  } = renderHook(() => usePaintingsApi(), { wrapper: providerWrapper });

  describe("When it calls its addPaintingsApi method with 'Untitled' ", () => {
    test("Then it should return 'Untitled' from the API", async () => {
      const newPainting = paintingsMock[1];

      const response = await addnewPainting(newPainting);

      expect(response).toStrictEqual(newPainting);
    });
  });

  describe("When it is called with its addPainting function with Boys who swim and the response fails", () => {
    test("Then it should show the error message 'An error occurred, please try again'", async () => {
      server.use(...errorHandlers);
      const path = "/add";
      const errorMessage = "An error occurred, please try again";

      customRenderWithoutRouter(
        <MemoryRouter initialEntries={[path]}>
          <App />
        </MemoryRouter>,
      );

      await addnewPainting(louPaintingMockWithoutId);

      const feedback = await screen.findByText(errorMessage);

      expect(feedback).toBeInTheDocument();
    });
  });
});
