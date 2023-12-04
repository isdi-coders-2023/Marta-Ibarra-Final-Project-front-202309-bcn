import { screen } from "@testing-library/react";
import Header from "./Header";
import { customRender } from "../../testUtils/customRender";
import paintingsMock from "../../mocks/paintingsMock";

describe("Given a header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with 'La Galerie' written in it", () => {
      const expectedTitle = "La Galerie";
      const mockData = paintingsMock;

      customRender(<Header />, mockData);

      const headerTitle = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(headerTitle).toBeInTheDocument;
    });
  });
});
