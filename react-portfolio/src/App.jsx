import styles from "./App.module.css"
import { NavBar } from "./components/NavBar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";

function App() {

  return (
    <div className={styles.app}>
      <NavBar />
      <Hero />
      <About />
    </div>
  );
}

export default App
