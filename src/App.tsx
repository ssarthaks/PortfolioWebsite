import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { ScrollProgress } from "./components/ScrollProgress";
import { useTheme } from "./hooks/useTheme";
import { Education } from "./components/Education";
import Hero from "./components/Hero";
import { ToastContainer,Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Experience } from "./components/Experience";

export function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={isDark ? "dark" : ""}>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
        transition={Bounce}
      />
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
        <ScrollProgress />
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />

        <main>
          <Hero />
          <Projects />
          <Education />
          <Experience />
          <Contact />
        </main>
      </div>
    </div>
  );
}
