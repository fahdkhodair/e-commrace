import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/navbar/navbar";
import Home from "./pages/Home";
import MenPage from "./pages/Menpage.jsx";
import Womenpage from "./pages/Womenpage";
import Contact from "./pages/contact";
import './App.css';
function App() {
  return (
    <>
    <Router>
      <Nav/>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/men" element={<MenPage/>}/>
        <Route path="/women" element={<Womenpage/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
