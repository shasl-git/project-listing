import { fetchProjects } from "@/shared/api/fetchProjects";
import { ProjectSectionClient } from "./ProjectSectionClient";
import { Project } from "@/entities/project/model/types";

export default async function ProjectSection() {
  const projects: Project[] = await fetchProjects();

  return <ProjectSectionClient projects={projects} />;
}
