import styles from "./styles.module.scss";

export function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className={styles.footer}>
      © {year} Suno Movies. All rights reserved.
    </footer>
  );
}
