import { render, screen } from "@testing-library/react";
import Options from "../Options";

describe("Options", () => {
  test("displays image for each scoop from the server", async () => {
    render(<Options optionType="scoops" />);
    const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
    expect(scoopImages).toHaveLength(2);

    //@ts-ignore
    const altText = scoopImages.map((element) => element.alt);
    expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
  });

  test("displays image for each topping from the server", async () => {
    render(<Options optionType="toppings" />);
    const toppingImages = await screen.findAllByRole("img", {
      name: /topping$/i,
    });
    expect(toppingImages).toHaveLength(3);
    //@ts-ignore
    const altText = toppingImages.map((element) => element.alt);
    expect(altText).toEqual([
      "M&Ms topping",
      "Hot fudge topping",
      "Peanut butter cups topping",
    ]);
  });
});
