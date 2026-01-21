import { FaCheck } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import styles from './IdeaCard.module.css';

export default function IdeaCard( { title, tag, status }) {
    return (
        <div className={styles.container}>
           <div className={styles.top}>
        <h3>{title}</h3>
        <span className={`${styles.tag} ${styles[tag]}`}>
          {tag}
        </span>
      </div>

      <div className={styles.bottom}>
        <span
          className={`${styles.status} ${
            status === "Completed" ? styles.completed : styles.active
          }`}
        >
          {status}
        </span>

        <div className={styles.actions}>
          <FaCheck className={styles.check} />
          <FiTrash2 className={styles.delete} />
        </div>
      </div>
        </div>
    );
}
