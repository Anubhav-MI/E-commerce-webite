import Titlebar from "./components/titlebar";
import axios from "axios";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get("http://localhost:3001/data");
      console.log("Data received", data);
    };
    fetchdata();
  }, []);
  return (
    <Router>
      <div className="App">
        <Titlebar />
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
