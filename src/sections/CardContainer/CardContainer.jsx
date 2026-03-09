import { useEffect, useState } from "react";
import styles from "./CardContainer.module.css";
import IdeaCard from "../../components/IdeaCard/IdeaCard";
import FilterBar from "../FilterBar/FilterBar"; 

export default function CardContainer() {
  const [showMore, setShowMore] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const [ideas, setIdeas] = useState
  ([]);

useEffect(() => {

  const refreshIdeas = () => {
    fetch("http://localhost:3000/ideas")
      .then(res => res.json())
      .then(data => setIdeas(data));
  };

  window.addEventListener("ideaAdded", refreshIdeas);

  return () => {
    window.removeEventListener("ideaAdded", refreshIdeas);
  };

}, []);

  const filteredIdeas = ideas.filter((idea) => {
    if (activeFilter === "All") return true;
  
return idea.status.toLowerCase() === activeFilter.toLowerCase();
  });


  const visibleIdeas = showMore ? filteredIdeas : filteredIdeas.slice(0, 6);
const toggleComplete = (id, currentStatus) => {

  const newStatus =
    currentStatus.toLowerCase() === "active"
      ? "completed"
      : "active";

  fetch(`http://localhost:3000/ideas/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      status: newStatus
    })
  })
    .then(() => {
      setIdeas(prev =>
        prev.map(idea =>
          idea.id === id
            ? { ...idea, status: newStatus }
            : idea
        )
      );
    });
};
  return (
    <section className={styles.container}>
      <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      <div className={styles.grid}>
        {visibleIdeas.map((idea, index) => (
            <IdeaCard
    key={idea.id}
   id={idea.id}  
  title={idea.title}
  category={idea.type.toLowerCase()}
  status={idea.status}
  onToggleComplete={toggleComplete}
  />
        ))}
      </div>

      {filteredIdeas.length > 6 && (
        <div className={styles.buttonWrapper}>
          <button
            className={styles.showButton}
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : `Show More (${filteredIdeas.length - 6} more)`}
          </button>
        </div>
      )}
    </section>
  );
}