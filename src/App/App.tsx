import styles from "./App.module.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import AboutUs from "../AboutUs/AboutUs";
import Menu from "../Menu/Menu";

export default function App() {
  return (
    <div className={styles.app}>
      <Header />

      <main className={styles.content}>
        <Hero />
        <AboutUs />
        <Menu/>
      </main>
    </div>
  );
}