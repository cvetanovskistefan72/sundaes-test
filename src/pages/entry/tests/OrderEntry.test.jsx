import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { server } from "../../../mocks/server";
import OrderEntry from "../OrderEntry";

describe("OrderEntry", () => {
  test("displays alerts if there are errors", async () => {
    server.resetHandlers(
      rest.get("http://localhost:3030/scoops", (req, res, ctx) =>
      res(ctx.status(500))
      ),
      rest.get("http://localhost:3030/toppings", (req, res, ctx) =>
      res(ctx.status(500))
      )
    );
    render(<OrderEntry/>);
    await waitFor(()=>{
      const alerts = screen.getAllByRole('alert')
      expect(alerts).toHaveLength(2)
    })
  });
});
