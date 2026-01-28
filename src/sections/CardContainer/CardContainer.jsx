import { useState } from "react";
import styles from "./CardContainer.module.css";
import IdeaCard from "../../components/IdeaCard/IdeaCard";
import { Button } from "react-bootstrap";

export default function CardContainer() {
  const [showMore, setShowMore] = useState(false);

  const ideas = [
    {
      title: "Build a personal portfolio website",
      category: "work",
      status: "Active",
    },
    {
      title: "Learn TypeScript fundamentals",
      category: "learning",
      status: "Completed",
      completed: true,
    },
    {
      title: "Create a morning routine tracker",
      category: "personal",
      status: "Active",
    },
    {
      title: "Start a side project in React",
      category: "work",
      status: "Active",
    },
    {
      title: "Read 'Clean Code' by Robert Martin",
      category: "learning",
      status: "Active",
    },
    {
      title: "Build a habit tracking app",
      category: "personal",
      status: "Active",
    },
    {
      title: "Contribute to open source projects",
      category: "work",
      status: "Active",
    },
    {
      title: "Master CSS Grid and Flexbox",
      category: "learning",
      status: "Completed",
      completed: true,
    },
  ];

  const visibleIdeas = showMore ? ideas : ideas.slice(0, 6);

  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        {visibleIdeas.map((idea, index) => (
          <IdeaCard key={index} {...idea} />
        ))}
      </div>
      <div className={styles.buttonWrapper}>
        <button
          className={styles.showButton}
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : `Show More (${ideas.length - 6} more)`}
        </button>
      </div>
    </section>
  );
}
