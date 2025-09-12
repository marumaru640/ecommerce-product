import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

function Hello({ name }: { name: string }) {
  return <h1>こんにちは、{name}</h1>;
}

describe("Hello component", () => {
  it("renders greeting", () => {
    render(<Hello name="田中" />);
    expect(screen.getByRole("heading", { name: "こんにちは、田中" })).toBeInTheDocument();
  });
});
