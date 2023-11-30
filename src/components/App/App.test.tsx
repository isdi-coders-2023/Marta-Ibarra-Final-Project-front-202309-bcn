import { screen } from "@testing-library/react";

import App from "./App";
import customRender from "../../testUtils/customRender";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Homepage'", () => {
      const expectedAddText = "Homepage";

      customRender(<App />);

      const expectedAddLink = screen.getByRole("heading", {
        name: expectedAddText,
      });

      expect(expectedAddLink).toBeInTheDocument();
    });
  });
});
