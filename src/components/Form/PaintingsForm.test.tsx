import userEvent from "@testing-library/user-event";
import { screen, waitFor } from "@testing-library/react";
import { paintingsMock } from "../../mocks/paintingsMock";
import { customRender } from "../../testUtils/customRender";
import PaintingsForm from "./PaintingsForm";

describe("Given a PaintingsForm component", () => {
  const actionOnClick = vi.fn();

  describe("When it is rendered", () => {
    test("Then it should show an 'Title' label text", () => {
      const expectedLabel = "Title";

      customRender(
        <PaintingsForm submitAction={actionOnClick} />,
        paintingsMock,
      );

      const labelText = screen.getByLabelText(expectedLabel);

      expect(labelText).toBeInTheDocument();
    });
  });

  describe("When it is renedered and the user types Boys who swim in the Title input field", () => {
    test("Then it should show Boys who swim written inside the input field", async () => {
      const expectedInputText = "Boys who swim";

      customRender(
        <PaintingsForm submitAction={actionOnClick} />,
        paintingsMock,
      );

      const labelText = screen.getByLabelText("Title");

      await userEvent.type(labelText, expectedInputText);

      const inputText = screen.getByDisplayValue(expectedInputText);

      await waitFor(() => expect(inputText));
    });
  });

  describe("When it is rendered then it should show a button with the text 'Add'", () => {
    test("Then it should show a button with the text 'Add'", () => {
      const expectedButtonText = "Add";

      customRender(
        <PaintingsForm submitAction={actionOnClick} />,
        paintingsMock,
      );
      const buttonText = screen.getByText(expectedButtonText);

      expect(buttonText).toBeInTheDocument();
    });
  });
});
