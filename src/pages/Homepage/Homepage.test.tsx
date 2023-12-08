import { screen, waitFor } from "@testing-library/react";
import { customRender } from "../../testUtils/customRender";
import Homepage from "./Homepage";
import { errorHandlers } from "../../mocks/handlers";
import server from "../../mocks/node";

describe("Given a Homepage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Homepage'", () => {
      const expectedTitle = "Homepage";

      customRender(<Homepage />);

      const homepageTitle = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(homepageTitle).toBeInTheDocument();
    });
  });

  describe("When an error occurs and the page cannot load", () => {
    test("Then it should show the error message 'Something went wrong, please try again'", async () => {
      const errorMessage = "Something went wrong, please try again";

      server.use(...errorHandlers);
      customRender(<Homepage />);

      await waitFor(() => {
        expect(screen.getByText(errorMessage)).toBeInTheDocument();
      });
    });
  });
});
