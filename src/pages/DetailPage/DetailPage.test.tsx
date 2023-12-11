import { screen } from "@testing-library/react";
import { customRender } from "../../testUtils/customRender";
import DetailPage from "./DetailPage";

describe("Given a PaintingDetailPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'About the author'", () => {
      const detailTitle = "About the author";

      customRender(<DetailPage />);

      const expectedName = screen.getByText(detailTitle);

      expect(expectedName).toBeInTheDocument();
    });
  });
});
