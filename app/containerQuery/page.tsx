import Link from "next/link";
import styles from "./styles.module.css";

export default function Page() {
  return (
    <div>
      <h1>Container Query</h1>
      <section className={styles.section}>
        <div className={styles.package}>
          <h3>Package</h3>
          <div className={styles.content}>
            <div className={styles.col1}>Col1</div>
            <div className={styles.col2}>Col2</div>
          </div>
        </div>
        <div className={styles.package}>
          <h3>Package</h3>
          <div className={styles.content}>
            <div className={styles.col1}>Col1</div>
            <div className={styles.col2}>Col2</div>
          </div>
        </div>
        <div className={styles.package}>
          <h3>Package</h3>
          <div className={styles.content}>
            <div className={styles.col1}>Col1</div>
            <div className={styles.col2}>Col2</div>
          </div>
        </div>
      </section>
    </div>
  );
}
