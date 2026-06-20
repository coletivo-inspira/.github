"use client";

import { useState } from "react";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { ProjectsSection } from "@/components/Projects/ProjectsSection";
import { SectionHistory } from "@/components/SectionHistory/SectionHistory";
import { SectionCommunity } from "@/components/SectionCommunity/SectionCommunity";
import { Footer } from "@/components/Footer/Footer";
import type { ProjectFilter } from "@/types/project";

export function HomePageClient() {
  const [selectedProjectFilter, setSelectedProjectFilter] = useState<ProjectFilter>("Todos");

  return (
    <>
      <Header onProjectFilter={setSelectedProjectFilter} />
      <main>
        <Hero />
        <SectionHistory />
        <ProjectsSection
          selectedFilter={selectedProjectFilter}
          onFilterChange={setSelectedProjectFilter}
        />
        <SectionCommunity />
      </main>
      <Footer />
    </>
  );
}
