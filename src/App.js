import Home from "./components/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/signup";
import Login from "./components/login";
import Titlebar from "./components/titlebar";
import Navbar from "./components/navbar";
import Footer from "./components/footer/footer";
import Dashboard from "./components/admin/dashboard";
import UserDetails from "./components/admin/users";
import ManageCategory from "./components/admin/manageCategory";
import Manageproducts from "./components/admin/manageproducts";
import Cartpage from "./components/cartpage";
import OrdersPage from "./components/ordersPage";
function App() {
  return (
    <Router>
      <Titlebar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/order" element={<OrdersPage />} />
        <Route path="/admin/manageproduct" element={<Manageproducts />} />
        <Route path="/admin/managecategory" element={<ManageCategory />} />
        <Route path="/admin/users" element={<UserDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
