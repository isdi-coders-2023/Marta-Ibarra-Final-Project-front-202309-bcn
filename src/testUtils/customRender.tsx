import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import mainTheme from "../styles/mainTheme";
import { PaintingStructure } from "../store/types";
import { paintingsReducer } from "../store/paintings/paintingsSlice";
import { uiReducer } from "../store/paintings/features/ui/uiSlice";
import paintingsMock from "../mocks/paintingsMock";
import { store } from "../store";

export const customRender = (
  children: React.ReactElement,
  mockData: PaintingStructure[],
) => {
  const mockStore = configureStore({
    reducer: {
      paintingsState: paintingsReducer,
      uiState: uiReducer,
    },
    preloadedState: {
      paintingsState: { paintings: mockData },
      uiState: { isLoading: false },
    },
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

export const providerWrapper = ({ children }: PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>;
};

export const customRenderWithoutRouter = (children: React.ReactElement) => {
  const mockStore = configureStore({
    reducer: { paintingsState: paintingsReducer, uiState: uiReducer },
    preloadedState: {
      paintingsState: { paintings: paintingsMock },
      uiState: { isLoading: false },
    },
  });

  render(
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Provider store={mockStore}>{children}</Provider>
    </ThemeProvider>,
  );
};
