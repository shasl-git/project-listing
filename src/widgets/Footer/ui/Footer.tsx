import Image from "next/image";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer_left}>
          <Image
            src="/logo.svg"
            alt="Cyberia logo"
            width={196}
            height={42}
            priority
          />
          <div>Веб-разработка и усиление IT-команд</div>
        </div>

        <div className={styles.footer_right}>
          <a href="#" className={styles.link}>
            +7 999 123 45 67
          </a>
          <a href="#" className={styles.link}>
            Агентство
          </a>
          <a href="#" className={styles.link}>
            Блог
          </a>
          <a href="#" className={styles.link}>
            hello@cyberia.studio
          </a>
          <a href="#" className={styles.link}>
            Услуги
          </a>
          <a href="#" className={styles.link}>
            Контакты
          </a>
          <a href="#" className={styles.link}>
            ул.Ярных, д.35, оф.10
          </a>
          <a href="#" className={styles.link}>
            Кейсы
          </a>
        </div>
      </div>
    </footer>
  );
}
