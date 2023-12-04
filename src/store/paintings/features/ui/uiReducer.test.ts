import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given a showLoading minireducer", () => {
  describe("When it receives a currentUiState with the property isLoading false", () => {
    test("Then it should change the property to true", () => {
      const initialMockedUiState = { isLoading: true };
      const isLoadingTrue = uiReducer(
        initialMockedUiState,
        showLoadingActionCreator(),
      );

      expect(isLoadingTrue).toStrictEqual(initialMockedUiState);
    });
  });
});

describe("Givenn a hideLoading minireducer", () => {
  describe("When it receives a currentUiState with the property isLoading true", () => {
    test("Then it should change the property to false", () => {
      const initialMockedUiState = { isLoading: false };
      const isLoadingFalse = uiReducer(
        initialMockedUiState,
        hideLoadingActionCreator(),
      );

      expect(isLoadingFalse).toStrictEqual(initialMockedUiState);
    });
  });
});
