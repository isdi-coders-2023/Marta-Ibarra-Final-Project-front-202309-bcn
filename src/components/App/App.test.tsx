import { screen } from "@testing-library/react";

import App from "./App";
import customRender from "../../testUtils/customRender";
import paintingsMock from "../../testUtils/paintingsMock";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Homepage'", () => {
      const expectedAddText = "Homepage";
      const mockData = paintingsMock;

      customRender(<App />, mockData);

      const expectedAddLink = screen.getByRole("heading", {
        name: expectedAddText,
      });

      expect(expectedAddLink).toBeInTheDocument();
    });
  });
});
