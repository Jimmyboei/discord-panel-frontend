import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { beforeEach } from "vitest";
import { describe, it, expect } from "vitest";
import Login from "src/page/login/Login";

describe("Login", () => {
  beforeEach(() => {
    render(<Login />);
  });

  it("Displays the Header component with the title", () => {
    expect(screen.getByRole("heading")).toHaveTextContent("Name.tools");
  });

  it("Have links to github and bot tutorial", () => {
    expect(screen.getByRole("a")).toBeInTheDocument();
  });
});
