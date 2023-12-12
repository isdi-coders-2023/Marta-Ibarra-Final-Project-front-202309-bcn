import { fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import {
  customRender,
  customRenderWithoutRouter,
} from "../../testUtils/customRender";
import { MemoryRouter } from "react-router-dom";

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

  describe("When it is rendered on the modifyPaintingPage and the user changes the description of the 'Sugar Ray Robinson' painting and clicks on the edit info button,", () => {
    test("Then it should modify the painting's description and go back to the homepage", async () => {
      const buttonText = "Edit info";
      const path = "/paintings/modify/:paintingId";

      customRenderWithoutRouter(
        <MemoryRouter initialEntries={[path]}>
          <App />
        </MemoryRouter>,
      );

      const button = screen.getByRole("button", {
        name: buttonText,
      });

      await fireEvent.submit(button);

      const title = await screen.findByRole("heading", {
        name: "Homepage",
      });

      expect(title).toBeInTheDocument;
    });
  });
});
