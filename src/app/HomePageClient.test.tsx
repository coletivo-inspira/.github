import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { hubConfig } from "@/data/hub";
import { HomePageClient } from "./HomePageClient";

vi.mock("@/hooks/useGitHubRepos", () => ({
  useGitHubRepos: () => ({
    repos: [],
    metadata: new Map(),
    loading: false,
    error: null,
    rateLimited: false,
  }),
}));

describe("Coletivo Inspira home", () => {
  it("presents the hub and links to the free portfolio builder", () => {
    render(<HomePageClient />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Coletivo Inspira" }),
    ).toBeInTheDocument();
    expect(
      screen
        .getAllByRole("link", { name: /Criar meu portfólio gratuito/ })
        .every((link) => link.getAttribute("href") === hubConfig.hudiPagesUrl),
    ).toBe(true);
    expect(screen.getByRole("heading", { name: "Canto dos Pássaros" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Olhares" })).toBeInTheDocument();
  });

  it("filters projects by the three hub pillars", () => {
    render(<HomePageClient />);

    fireEvent.click(screen.getByRole("button", { name: "Tecnologia" }));

    expect(screen.getByRole("heading", { name: "HUDI Pages" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Olhares" })).not.toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Tecnologia" }),
    ).toHaveAttribute("aria-pressed", "true");
  });
});
