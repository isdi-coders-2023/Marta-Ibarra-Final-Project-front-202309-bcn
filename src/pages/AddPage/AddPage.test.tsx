import { screen } from "@testing-library/react";
import { customRender } from "../../testUtils/customRender";
import AddPage from "./AddPage";

describe("Given an AddPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show Add a new Artwork in a heading");

    const expectedTitle = "Add a new Artwork";

    customRender(<AddPage />);

    const addPagetitle = screen.getByRole("heading", { name: expectedTitle });

    expect(addPagetitle).toBeInTheDocument();
  });
});
