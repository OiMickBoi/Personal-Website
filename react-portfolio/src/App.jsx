import styles from "./App.module.css"
import { NavBar } from "./components/NavBar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";

function App() {

  return (
    <div className={styles.app}>
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default App
