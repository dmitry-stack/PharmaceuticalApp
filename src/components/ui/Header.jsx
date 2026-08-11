import * as styles from "./Header.module.css";

export function Header({ header, description }) {
  return (
    <header className={styles.header}>
      <h1>{header}</h1>
      <p>{description}</p>
    </header>
  );
}
