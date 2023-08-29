import Checklist from "../../components/Checklist";
import Progress from "../../components/Progress";
export default function Home() {
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
      <Progress />
      <Checklist />
    </main>
  );
}
