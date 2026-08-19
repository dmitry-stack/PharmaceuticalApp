import * as styles from "./AboutCard.module.css";

export function AboutCard({ description }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>About this event</h2>
      <p className={styles.description}>{description}</p>
    </section>
  );
}
