import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { customRender } from "../../testUtils/customRender";
import PaintingsForm from "./PaintingsForm";

describe("Given a PaintingsForm component", () => {
  const actionOnClick = vi.fn();

  describe("When it is rendered", () => {
    test("Then it should show an 'Title' label text", () => {
      const expectedLabel = "Title";

      customRender(<PaintingsForm submitAction={actionOnClick} />);

      const labelText = screen.getByLabelText(expectedLabel);

      expect(labelText).toBeInTheDocument();
    });
  });

  describe("When it is renedered and the user types Boys who swim in the Title input field", () => {
    test("Then it should show Boys who swim written inside the input field", async () => {
      const expectedInputText = "Boys who swim";

      customRender(<PaintingsForm submitAction={actionOnClick} />);

      const labelText = screen.getByLabelText("Title");

      await userEvent.type(labelText, expectedInputText);

      const inputText = screen.getByDisplayValue(expectedInputText);

      expect(inputText).toBeInTheDocument();
    });
  });

  describe("When it is rendered then it should show a button with the text 'Add'", () => {
    test("Then it should show a button with the text 'Add'", () => {
      const expectedButtonText = "Add";

      customRender(<PaintingsForm submitAction={actionOnClick} />);
      const buttonText = screen.getByText(expectedButtonText);

      expect(buttonText).toBeInTheDocument();
    });
  });

  describe("When the user types in the inputs and clicks on the Add button", () => {
    test("Then it should call its actionOnClick function", async () => {
      const stringLabelText = [
        "Title",
        "Image URL",
        "Image description",
        "About the author",
      ];

      const stringInput = "https://i.ibb.co/VmNHd2K/sugar-ray-robinson-1.webp";
      const numberLabelText = ["Year", "Price in €"];
      const expectedButtonText = "Add";
      const expectedInputNumber = 2000;

      customRender(<PaintingsForm submitAction={actionOnClick} />);

      for (const labelText of stringLabelText) {
        const inputElement = screen.getByLabelText(labelText);
        await userEvent.type(inputElement, stringInput);
      }

      for (const labelText of numberLabelText) {
        const inputElement = screen.getByLabelText(labelText);
        await userEvent.type(inputElement, expectedInputNumber.toString());
      }

      const addButton = screen.getByRole("button", {
        name: expectedButtonText,
      });
      await userEvent.click(addButton);

      await expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
