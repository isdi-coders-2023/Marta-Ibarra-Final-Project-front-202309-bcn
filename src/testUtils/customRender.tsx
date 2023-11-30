import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import mainTheme from "../styles/mainTheme";
import { PaintingStructure } from "../store/types";
import { paintingsReducer } from "../store/paintings/paintingsSlice";

const customRender = (
  children: React.ReactElement,
  mockData: PaintingStructure[],
) => {
  const mockStore = configureStore({
    reducer: {
      paintingsState: paintingsReducer,
    },
    preloadedState: { paintingsState: { paintings: mockData } },
  });

  render(
    <MemoryRouter>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyle />
        <Provider store={mockStore}>{children}</Provider>
      </ThemeProvider>
    </MemoryRouter>,
  );
};

export default customRender;
