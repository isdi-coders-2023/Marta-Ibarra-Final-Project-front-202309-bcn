import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import mainTheme from "../styles/mainTheme";

const customRender = (children: React.ReactElement) => {
  render(
    <MemoryRouter>
      <ThemeProvider theme={mainTheme}>
        {children}
        <GlobalStyle />
      </ThemeProvider>
    </MemoryRouter>,
  );
};

export default customRender;
