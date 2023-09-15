import './index.css'
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Favs from "./routes/Favs";
import Detail from "./routes/Detail";
import Contact from "./routes/Contact";

function App() {
  return (
      <div className="App">
          <Navbar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="favs" element={<Favs />} />
              <Route path="dentist/:id" element={<Detail />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
          <Footer/>
      </div>
  );
}

export default App;
