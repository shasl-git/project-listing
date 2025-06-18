"use client";

import { useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${isOpen ? styles.menuOpen : ""}`}>
        <a href="#" className={styles.logo}>
          <Image
            src="/logo.svg"
            alt="Cyberia logo"
            width={130}
            height={28}
            priority
          />
        </a>

        <nav className={styles.nav}>
          <a href="#" className={styles.link}>
            Агентство
          </a>
          <a href="#" className={styles.link}>
            Услуги
          </a>
          <a href="#" className={styles.link}>
            Кейсы
          </a>
          <a href="#" className={styles.link}>
            Блог
          </a>
          <a href="#" className={styles.link}>
            Контакты
          </a>
        </nav>

        {!isOpen && (
          <button className={styles.burger} onClick={() => setIsOpen(true)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}

        {isOpen && (
          <div className={styles.mobileMenu}>
            <button className={styles.close} onClick={handleClose}>
              ×
            </button>

            <nav className={styles.mobileNav}>
              <a href="#" className={styles.mobileLink} onClick={handleClose}>
                Агентство
              </a>
              <a href="#" className={styles.mobileLink} onClick={handleClose}>
                Услуги
              </a>
              <a href="#" className={styles.mobileLink} onClick={handleClose}>
                Кейсы
              </a>
              <a href="#" className={styles.mobileLink} onClick={handleClose}>
                Блог
              </a>
              <a href="#" className={styles.mobileLink} onClick={handleClose}>
                Контакты
              </a>
            </nav>

            <div className={styles.contacts}>
              <span>Контакты:</span>
              <span>+7 999 123 45 67</span>
              <span>hello@cyberia.studio</span>
              <span>ул.Ярных, д.35, оф.10</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
