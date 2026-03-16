import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactPage from "@/app/contact/page";

describe("ContactPage", () => {
  it("renders the contact form fields", () => {
    render(<ContactPage />);

    expect(
      screen.getByRole("heading", {
        name: /let's talk about senior software roles/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send/i })).toBeEnabled();
  });

  it("shows email and message validation errors", async () => {
    const user = userEvent.setup();
    render(<ContactPage />);

    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);

    await user.type(emailInput, "invalid-email");
    await user.tab();

    await user.type(messageInput, "short");
    await user.tab();

    expect(
      screen.getByText(/please enter a valid email address/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/message should be at least 10 characters/i),
    ).toBeInTheDocument();
  });

  it("shows validation errors when clicking send", async () => {
    const user = userEvent.setup();
    render(<ContactPage />);

    await user.click(screen.getByRole("button", { name: /send/i }));

    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/message is required/i)).toBeInTheDocument();
  });
});
