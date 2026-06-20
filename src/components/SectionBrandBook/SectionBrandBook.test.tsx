import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SectionBrandBook } from "./SectionBrandBook";

describe("SectionBrandBook", () => {
  it("renders the brand book section title and core guidelines", () => {
    render(<SectionBrandBook />);

    expect(screen.getByRole("heading", { name: "Brand Book" })).toBeInTheDocument();
    expect(
      screen.getByText("Elementos visuais e componentes devem seguir o mesmo padrão em todas as páginas."),
    ).toBeInTheDocument();
  });
});
