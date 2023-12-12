import { screen } from "@testing-library/react";
import { customRender } from "../../testUtils/customRender";
import ModifyPage from "./ModifyPage";

describe("Given a ModifyPainting page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text Modify Form", () => {
      const modifyPaintingPageTitle = "Modify Form";

      customRender(<ModifyPage />);

      const modifyPaintingPageHeading = screen.getByRole("heading", {
        name: modifyPaintingPageTitle,
      });

      expect(modifyPaintingPageHeading).toBeInTheDocument();
    });

    test("Then it should show a form with a 'Title' label text", () => {
      const expectedLabelText = "Title";

      customRender(<ModifyPage />);

      const labelText = screen.getByLabelText(expectedLabelText);

      expect(labelText).toBeInTheDocument();
    });
  });
});
