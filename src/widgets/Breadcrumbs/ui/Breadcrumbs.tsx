import styles from "./Breadcrumbs.module.css";

export function Breadcrumbs() {
  return (
    <div className={styles.breadcrumbs}>
      <a href="#" className={styles.link}>
        Главная
      </a>
      <span className={styles.linkDiz}>/</span>
      <a href="#" className={styles.link}>
        Кейсы
      </a>
    </div>
  );
}
