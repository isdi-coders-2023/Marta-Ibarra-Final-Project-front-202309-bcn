import { screen } from "@testing-library/react";
import { customRender } from "../../testUtils/customRender";
import Loading from "./Loading";
import paintingsMock from "../../mocks/paintingsMock";

describe("Given a loading component", () => {
  describe("When it receives an image with the alt property 'loading page'", () => {
    test("Then it should show a loading image", () => {
      customRender(<Loading />, paintingsMock);

      const altText = "loading page";
      const loadingImage = screen.getByAltText(altText);

      expect(loadingImage).toBeInTheDocument();
    });
  });
});
