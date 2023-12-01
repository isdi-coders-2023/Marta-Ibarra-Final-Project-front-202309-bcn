import { screen } from "@testing-library/react";

import App from "./App";
import customRender from "../../testUtils/customRender";
import paintingsMock from "../../testUtils/paintingsMock";
import userEvent from "@testing-library/user-event";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the title 'Homepage' in a heading", () => {
      const expectedAddText = "Homepage";
      const mockData = paintingsMock;

      customRender(<App />, mockData);

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

      customRender(<App />, paintingsMock);
      const navLink = screen.getByRole("link", { name: link });
      const homepageTitle = screen.getByRole("headin", { name: title });
      user.click(navLink);

      expect(homepageTitle).toBeInTheDocument();
      expect(navLink).toBeInTheDocument();
    });
  });
});
