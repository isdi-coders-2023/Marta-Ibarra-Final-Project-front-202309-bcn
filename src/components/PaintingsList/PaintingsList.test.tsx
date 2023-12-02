import { screen } from "@testing-library/react";
import customRender from "../../testUtils/customRender";
import paintingsMock from "../../mocks/paintingsMock";
import PaintingsList from "./PaintingsList";

describe("Given a paintingList component", () => {
  describe("When it recieves a list with 'Dapper Lou' ", () => {
    test("Then it should show a list with 'Dapper Lou' ", () => {
      const expectedPaintier = "Dapper Lou";

      customRender(<PaintingsList />, paintingsMock);
      const paintingTitle = screen.getByRole("heading", {
        name: expectedPaintier,
      });

      expect(paintingTitle).toBeInTheDocument();
    });

    test("Then it should show 'Boys who swim'", () => {
      const expectedAltText = "Boys who swim";

      customRender(<PaintingsList />, paintingsMock);
      const painting = screen.getByRole("img", { name: expectedAltText });

      expect(painting).toBeInTheDocument();
    });
  });
});
