import { Navbar } from "./Navbar";
import { render, screen } from "@testing-library/react";

describe("Navbar component", () => {
  it("should render the Navbar component", () => {
    const { container } = render(<Navbar />);
    const nav = container.querySelector("nav");

    expect(nav).toBeInTheDocument();
  });
});
