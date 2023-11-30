import { screen } from "@testing-library/react";
import customRender from "../../../testUtils/customRender";
import Homepage from "./Homepage";

describe("Given a Homepage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Homepage'", () => {
      const expectedTitle = "Homepage";

      customRender(<Homepage />);

      const homepageTitle = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(homepageTitle).toBeInTheDocument;
    });
  });
});
