import IdeaCard from "./sections/IdeaCard/IdeaCard"



function App() {


  return (
    <>
  <div style={{ background: "#000", minHeight: "100vh", padding: "40px" }}>
      <div style={{ display: "flex", gap: "20px" }}>
        <IdeaCard
          title="Build a personal portfolio website"
          tag="work"
          status="Active"
        />

        <IdeaCard
          title="Learn TypeScript fundamentals"
          tag="learning"
          status="Completed"
        />

        <IdeaCard
          title="Create a morning routine tracker"
          tag="personal"
          status="Active"
        />
      </div>
    </div>
    </>
  )
}

export default App
