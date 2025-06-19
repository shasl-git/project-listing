import { Project } from "../model/types";
import styles from "./ProjectCard.module.css";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${project.image})` }}
    >
      <div className={styles.cardZone}>
        <h2 className={styles.title}>{project.title}</h2>
        <div className={styles.titleText}>
          Онлайн гипермаркет. Для компании были разработаны сайт и мобильное
          приложение и т.д.
        </div>
      </div>
    </div>
  );
}
