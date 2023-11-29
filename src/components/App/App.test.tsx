import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import App from "./App";

describe("Given a Navigation component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Add'", () => {
      const expectedAddText = "Add";

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>,
      );

      const expectedAddLink = screen.getByRole("link", {
        name: expectedAddText,
      });

      expect(expectedAddLink).toBeInTheDocument();
    });
  });
});
