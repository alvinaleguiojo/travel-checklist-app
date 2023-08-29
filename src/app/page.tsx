import Checklist from "../../components/Checklist";
import Progress from "../../components/Progress";
import styles from "./page.module.css";
export default function Home() {
  return (
    <main>
      <Progress />
      <Checklist />
    </main>
  );
}
