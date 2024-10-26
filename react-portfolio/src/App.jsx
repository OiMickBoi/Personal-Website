import styles from "./App.module.css"
import { NavBar } from "./components/NavBar/Navbar";

function App() {

  return (
    <div className={styles.app}>
      <NavBar />
    </div>
  );
}

export default App
