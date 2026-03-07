import styles from "./FilterBar.module.css";

export default function FilterBar({ activeFilter, setActiveFilter }) {
  const filters = ["All", "Active", "Completed"];

  return (
    <div className={styles.filterContainer}>
      {filters.map((filter) => (
        <button
          key={filter}
          className={`${styles.filterBtn} ${
            activeFilter === filter ? styles.active : ""
          }`}
          onClick={() => setActiveFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}