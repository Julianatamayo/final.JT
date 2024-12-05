import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import { useContext } from "react";
import { ContextGlobal } from "./Components/utils/global.context";

function App() {
  const { theme } = useContext(ContextGlobal);

  return (
    <Router>
      <div className={`App ${theme}`}>
        {" "}
        {}
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/dentist/:id" element={<Detail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
