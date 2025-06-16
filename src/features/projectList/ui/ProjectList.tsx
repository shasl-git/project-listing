import { ProjectCard } from "@/entities/project/ui/ProjectCard";
import { Project } from "@/entities/project/model/types";
import styles from "./ProjectList.module.css";

type Props = {
  projects: Project[];
};

export function ProjectList({ projects }: Props) {
  return (
    <div className={styles.list}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
