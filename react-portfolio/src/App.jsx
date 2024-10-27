import styles from "./App.module.css"
import { NavBar } from "./components/NavBar/Navbar";
import { Hero } from "./components/Hero/Hero";

function App() {

  return (
    <div className={styles.app}>
      <NavBar />
      <Hero />
    </div>
  );
}

export default App
