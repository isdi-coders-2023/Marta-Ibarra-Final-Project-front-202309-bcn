import { renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import {
  customRender,
  customRenderWithoutRouter,
  providerWrapper,
} from "../../testUtils/customRender";
import usePaintingsApi from "../../hooks/usePaintingsApi";
import { MemoryRouter } from "react-router-dom";
import { errorHandlers } from "../../mocks/handlers";
import server from "../../mocks/node";
import { jamelPaintingMock } from "../../mocks/paintingsMock";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the title 'Homepage' in a heading", () => {
      const expectedAddText = "Homepage";

      customRender(<App />);

      const expectedAddLink = screen.getByRole("heading", {
        name: expectedAddText,
      });

      expect(expectedAddLink).toBeInTheDocument();
    });
  });

  describe("When it receives a click on the 'Home' link", () => {
    test("Then it should show the title 'Homepage' in a heading", () => {
      const title = "Homepage";
      const link = "Home";
      const user = userEvent.setup();

      customRender(<App />);
      const navLink = screen.getByRole("link", { name: link });
      const homepageTitle = screen.getByRole("heading", { name: title });
      user.click(navLink);

      expect(homepageTitle).toBeInTheDocument();
      expect(navLink).toBeInTheDocument();
    });
  });

  describe("When it tries to call the addPainting method with the new painting 'Untitled' but an error occurs", () => {
    test("Then it should show the error message 'An error occurred, please try again'", async () => {
      server.use(...errorHandlers);
      const errorMessage = "An error occurred, please try again";
      const path = "/add";

      customRenderWithoutRouter(
        <MemoryRouter initialEntries={[path]}>
          <App />
        </MemoryRouter>,
      );

      const {
        result: {
          current: { addnewPainting },
        },
      } = renderHook(() => usePaintingsApi(), { wrapper: providerWrapper });

      await addnewPainting(jamelPaintingMock);
      const feedback = await screen.findByText(errorMessage);

      expect(feedback).toBeInTheDocument();
    });
  });
});
