import styles from "./App.module.css";
import Header from "../Header/Header";

export default function App() {
  return (
    <div className={styles.app}>
      <Header />

      <main className={styles.content}>
        {/* Page sections go here */}
      </main>
    </div>
  );
}