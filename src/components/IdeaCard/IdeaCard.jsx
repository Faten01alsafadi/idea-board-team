import styles from "./IdeaCard.module.css";
import { BsCheckLg, BsTrash } from "react-icons/bs";

export default function IdeaCard({
  title,
  category,
  status,
  completed,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={completed ? styles.completedTitle : ""}>
          {title}
        </h3>

        <span className={`${styles.badge} ${styles[category]}`}>
          {category}
        </span>
      </div>

      <div className={styles.footer}>
        <span
          className={`${styles.status} ${
            completed ? styles.completed : styles.active
          }`}
        >
          {status}
        </span>

        <div className={styles.actions}>
          <BsCheckLg className={styles.check} />
          <BsTrash className={styles.delete} />
        </div>
      </div>
    </div>
  );
}
