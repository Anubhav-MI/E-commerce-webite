import Home from "./components/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Addproduct from "./components/addproduct";
import Signup from "./components/signup";
import Login from "./components/login";
import Titlebar from "./components/titlebar";
import Navbar from "./components/navbar";
import Footer from "./components/footer/footer";
function App() {
  return (
    <Router>
      <Titlebar />
      <Navbar />
      <Routes>
        <Route path="/addproduct" element={<Addproduct />} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
