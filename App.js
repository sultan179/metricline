import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Clients from "./Components/Clients";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects"
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Clients />
      <Services/>
      <Projects/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
