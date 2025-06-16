"use client";

import { useState } from "react";
import { Project } from "@/entities/project/model/types";
import { ProjectList } from "@/features/projectList/ui/ProjectList";
import styles from "./ProjectSectionClient.module.css";

type Props = {
  projects: Project[];
};

const categories = [
  "Продвижение",
  "Разработка",
  "Мобильные приложения",
  "Юзабилити-аудит",
];

export function ProjectSectionClient({ projects }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  function handleCategoryClick(category: string) {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  }

  let filteredProjects: Project[] = [];

  if (selectedCategory === null) {
    filteredProjects = projects;
  } else {
    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];

      for (let j = 0; j < project.categories.length; j++) {
        const category = project.categories[j];

        if (category.name === selectedCategory) {
          filteredProjects.push(project);
          break;
        }
      }
    }
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Кейсы</h2>

      <div className={styles.categoryList}>
        {categories.map(function (category) {
          let buttonClass = styles.button;

          if (selectedCategory === category) {
            buttonClass = `${styles.button} ${styles.active}`;
          }

          return (
            <button
              key={category}
              onClick={function () {
                handleCategoryClick(category);
              }}
              className={buttonClass}
            >
              {category}
            </button>
          );
        })}
      </div>

      <ProjectList projects={filteredProjects} />
    </section>
  );
}
