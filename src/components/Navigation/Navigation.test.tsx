import { screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { customRender } from "../../testUtils/customRender";

describe("Given a Navigation component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Home' link", () => {
      const expectedHomeText = "Home";

      customRender(<Navigation />);

      const expectedHomeLink = screen.getByRole("link", {
        name: expectedHomeText,
      });

      expect(expectedHomeLink).toBeInTheDocument();
    });
  });
});
