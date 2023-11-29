import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import Header from "./Header";

describe("Give a header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'La Galerie'", () => {
      const expectedTitle = "La Galerie";

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <Header />
          </ThemeProvider>
        </BrowserRouter>,
      );
      const headerTitle = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(headerTitle).toBeInTheDocument;
    });
  });
});
