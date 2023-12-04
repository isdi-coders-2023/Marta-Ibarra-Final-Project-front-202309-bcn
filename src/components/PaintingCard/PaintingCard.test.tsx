import { screen } from "@testing-library/react";
import { customRender } from "../../testUtils/customRender";
import paintingsMock from "../../mocks/paintingsMock";
import PaintingCard from "./PaintingCard";

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
  });
});
