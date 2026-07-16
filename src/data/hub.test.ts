import { describe, expect, it } from "vitest";
import { hubConfig, pillars, projects } from "./hub";

describe("hub content registry", () => {
  it("keeps the three approved pillars", () => {
    expect(pillars.map((pillar) => pillar.id)).toEqual([
      "Social",
      "Tecnologia",
      "Cultura",
    ]);
  });

  it("keeps the approved hub highlights and HUDI destination", () => {
    const highlights = projects.filter((project) => project.featured);

    expect(highlights.map((project) => project.id)).toEqual([
      "canto-dos-passaros",
      "olhares",
      "hudi-pages",
    ]);
    expect(projects.find((project) => project.id === "hudi-pages")?.href).toBe(
      hubConfig.hudiPagesUrl,
    );
  });
});

