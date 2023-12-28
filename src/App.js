import {BrowserRouter,Routes,Route} from "react-router-dom" 
import Home from "./Components/home/Home";
import Footer from "./Components/footer/Footer";
import Headers from "./Components/Headers/Headers";
import About from "./Components/About/About";
import Newsletter from "./Newsleter/Newsletter";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";
function App() {
  return (
    <BrowserRouter>
    <Headers/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Newsletter/>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
