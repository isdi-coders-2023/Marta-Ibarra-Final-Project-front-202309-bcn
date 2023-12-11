import { screen } from "@testing-library/react";
import Footer from "./Footer";
import { customRender } from "../../testUtils/customRender";

describe("Given a Footer component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the text `B-art inc, all rights reserved", () => {
      const expectedText = "B-art inc, all rights reserved";

      customRender(<Footer />);

      const footerElement = screen.getByText(expectedText);

      expect(footerElement).toBeInTheDocument();
    });
  });
});
