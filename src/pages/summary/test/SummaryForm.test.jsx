import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";

describe("SummaryForm", () => {
  test("button is disabled", () => {
    render(<SummaryForm />);
    const button = screen.getByRole("button", { name: "Confirm order" });
    expect(button).toBeDisabled();
  });
  test("button is enabled when the checkbox is clicked", () => {
    render(<SummaryForm />);
    const button = screen.getByRole("button", { name: "Confirm order" });
    const input = screen.getByRole("checkbox", {
      name: "I agree to Terms and Conditions",
    });
    userEvent.click(input);
    expect(button).toBeEnabled();
  });

  test("button is disabled when the checkbox is unchecked", () => {
    render(<SummaryForm />);
    const button = screen.getByRole("button", { name: "Confirm order" });
    const input = screen.getByRole("checkbox", {
      name: "I agree to Terms and Conditions",
    });
    userEvent.click(input);
    expect(button).toBeEnabled();
    userEvent.click(input);
    expect(button).toBeDisabled();
  });
  //No ice creamt will actualy be delivered
  test("popover responds to hover", async () => {
    render(<SummaryForm />);
    const nullPopover = screen.queryByText(
      "No ice cream will actualy be delivered"
    );
    expect(nullPopover).not.toBeInTheDocument();
    const termsAndConditions = screen.getByText(/terms and conditions/i);
    userEvent.hover(termsAndConditions);
    const popover = screen.getByText("No ice cream will actualy be delivered");
    expect(popover).toBeInTheDocument();
    userEvent.unhover(termsAndConditions);
    await waitForElementToBeRemoved(() => screen.queryByText(/no ice cream will actualy be delivered/i));
  });
});
