import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Home'", () => {
      const expectedHomeText = "Home";

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <Navigation />
          </ThemeProvider>
        </BrowserRouter>,
      );

      const expectedHomeLink = screen.getByRole("link", {
        name: expectedHomeText,
      });

      expect(expectedHomeLink).toBeInTheDocument();
    });
  });
});
