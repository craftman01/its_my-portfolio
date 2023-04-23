// import About from "./component/About";
// import Contact from "./component/Contact";
// import Experince from "./component/Experince";
// import Home from "./component/Home";
import NavBar from "./component/NavBar";
import Gallary from "./component/Gallary.jsx";
import Social from "./component/Social";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from "./pages/Hero";


function App() {
  return (
    <Router>
      <NavBar />
      <Social/>
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route exact path="/gallary" element={<Gallary/>} />
      </Routes>
    </Router>
  );
}



export default App;
