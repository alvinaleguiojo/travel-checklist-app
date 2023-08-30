import Checklist from "./components/Checklist";
import Progress from "./components/Progress";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/checklist", {
    cache: "no-store",
  });
  const checklist: ChecklistSection[] = await response.json();

  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        paddingTop: 30,
        paddingLeft: 240,
        paddingRight: 240,
        gap: 30,
        backgroundColor: "#ebebeb",
      }}
    >
      <Progress checklist={checklist} />
      <Checklist checklist={checklist} />
    </main>
  );
}
