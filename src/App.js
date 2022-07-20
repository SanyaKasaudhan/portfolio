import Navbar from "./Components/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Testimonial from "./Components/Testimonials/Testimonials";
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Intro />
    <Services />
    <Experience />
    <Works />
    <Testimonial />
    </div>
  );
}

export default App;
