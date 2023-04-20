import About from "./component/About";
import Contact from "./component/Contact";
import Experince from "./component/Experince";
import Home from "./component/Home";
import NavBar from "./component/NavBar";
import Portfolio from "./component/Portfolio";
import Social from "./component/Social";


 
function App() {
  return (
   <div>
    
    <NavBar />
    <Home />
    <About />
    <Portfolio />
    <Social />      
    <Experince />
    <Contact />
   </div>
  );
}

export default App;
