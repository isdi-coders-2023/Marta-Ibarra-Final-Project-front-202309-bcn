import { screen } from "@testing-library/react";
import { customRender } from "../../testUtils/customRender";
import paintingsMock from "../../mocks/paintingsMock";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it receives the text 'Edit info'", () => {
    test("Then it should the text 'Edit info' inside", () => {
      const text = "Edit info";

      customRender(
        <Button
          text={"Edit info"}
          size={"button__small"}
          type={"button"}
          className={""}
        />,
        paintingsMock,
      );
      const button = screen.getByRole("button", { name: text });

      expect(button).toBeInTheDocument();
    });
  });
});
