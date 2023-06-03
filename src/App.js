// import About from "./component/About";
// import Contact from "./component/Contact";
// import Experince from "./component/Experince";
// import Home from "./component/Home";
import NavBar from "./component/NavBar";
import Gallary from "./component/Gallary.jsx";
import Social from "./component/Social";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from "./pages/Hero";
// import Event from "./pages/Event/Event";
import AllEvents from "./pages/Event/AllEvents";


function App() {
  return (
    <Router >
      <NavBar />
      <Social/>
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route exact path="/gallary" element={<Gallary/>} />
        <Route exact path="/events" element={<AllEvents/>} />

      </Routes>
    </Router>
  );
}



export default App;
