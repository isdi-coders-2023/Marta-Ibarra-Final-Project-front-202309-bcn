import { fireEvent, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { customRender } from "../../testUtils/customRender";
import { paintingsMock } from "../../mocks/paintingsMock";
import PaintingCard from "./PaintingCard";
import { errorHandlers } from "../../mocks/handlers";
import server from "../../mocks/node";

describe("Given a PaintingCard component", () => {
  describe("When it receives Lou Dapper's information", () => {
    test("Then it should show 'Lou Dapper' in a heading", () => {
      const expectedName = paintingsMock[0];

      customRender(<PaintingCard painting={expectedName} />, paintingsMock);
      const painterInfo = screen.getByRole("heading", {
        name: expectedName.name,
      });

      expect(painterInfo).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'delete'", () => {
      const expectedButtonText = "Delete";

      customRender(<PaintingCard painting={paintingsMock[1]} />, paintingsMock);
      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'edit info'", () => {
      const expectedButtonText = "Edit info";

      customRender(<PaintingCard painting={paintingsMock[1]} />, paintingsMock);
      const button = screen.getByText(expectedButtonText);

      expect(button).toBeInTheDocument();
    });

    describe("When it receives a click on the delete button of 'Lou Dapper' card", () => {
      const expectedPainting = "Dapper Lou";
      const expectedButtonText = "Delete";

      test("Then it should delete 'Dapper Lou' card", async () => {
        customRender(
          <PaintingCard painting={paintingsMock[0]} />,
          paintingsMock,
        );

        const button = screen.getByRole("button", { name: expectedButtonText });
        const heading = screen.getByRole("heading", { name: expectedPainting });

        await userEvent.click(button);

        waitFor(() => {
          expect(heading).not.toBeInTheDocument();
        });
      });

      test("Then it should show the message 'The painting was deleted successfully", async () => {
        customRender(
          <PaintingCard painting={paintingsMock[0]} />,
          paintingsMock,
        );

        const deleteButton = screen.getByRole("button", {
          name: expectedButtonText,
        });

        await fireEvent.click(deleteButton);

        waitFor(async () =>
          expect(
            screen.getByText("The painting was deleted successfully"),
          ).toBeInTheDocument(),
        );
      });

      test("Then it should show the message 'Something went wrong, please try again'", async () => {
        server.use(...errorHandlers);
        customRender(
          <PaintingCard painting={paintingsMock[1]} />,
          paintingsMock,
        );

        const deleteButton = screen.getByRole("button", {
          name: expectedButtonText,
        });

        await fireEvent.click(deleteButton);

        waitFor(async () =>
          expect(
            screen.getByText("Something went wrong, please try again"),
          ).toBeInTheDocument(),
        );
      });
    });
  });
});
