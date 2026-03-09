import styles from "./IdeaCard.module.css";
import { BsCheckLg, BsTrash } from "react-icons/bs";

export default function IdeaCard({
  title,
    id,     
  category,
  status,
    onToggleComplete
}) {
  return (
    <div className={` ${styles.card}   ${
            status.toLowerCase() === "completed" ? styles.completedCard :''
          }`}>
      <div className={styles.header}>
        <h3 className={status.toLowerCase() === "completed" ? styles.completedTitle : ""}>
          {title}
        </h3>

        <span className={`${styles.badge} ${styles[category]}`}>
          {category}
        </span>
      </div>

      <div className={styles.footer}>
        <span
          className={`${styles.status} ${
            status.toLowerCase() === "completed" ? styles.completed : styles.active
          }`}
        >
          {status}
        </span>

        <div className={styles.actions}>
          <BsCheckLg       onClick={() => onToggleComplete(id, status)}
          style={{ cursor: "pointer" }} className={styles.check} />
          <BsTrash className={styles.delete} />
        </div>
      </div>
    </div>
  );
}
