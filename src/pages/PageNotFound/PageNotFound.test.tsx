import { screen } from "@testing-library/react";
import { customRender } from "../../testUtils/customRender";
import PageNotFound from "./PageNotFound";

describe("Given a NotFoundPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a Page not found logo", () => {
      const expectedAltText = "page not found";

      customRender(<PageNotFound />);
      const pageNotFoundImage = screen.getByAltText(expectedAltText);

      expect(pageNotFoundImage).toBeInTheDocument();
    });
  });
});
