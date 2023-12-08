import { screen } from "@testing-library/react";
import { customRender } from "../../testUtils/customRender";
import PaintingsList from "./PaintingsList";

describe("Given a paintingList component", () => {
  describe("When it recieves a list with 'Dapper Lou' ", () => {
    test("Then it should show a list with 'Dapper Lou' ", () => {
      const expectedPaintier = "Dapper Lou";

      customRender(<PaintingsList />);
      const paintingTitle = screen.getByRole("heading", {
        name: expectedPaintier,
      });

      expect(paintingTitle).toBeInTheDocument();
    });

    test("Then it should show 'Boys who swim'", () => {
      const expectedAltText = "Boys who swim";

      customRender(<PaintingsList />);
      const painting = screen.getByRole("img", { name: expectedAltText });

      expect(painting).toBeInTheDocument();
    });
  });
});
