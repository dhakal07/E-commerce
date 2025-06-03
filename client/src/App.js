import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Male from "./pages/MaleCategory";
import Female from "./pages/FemaleCategory";
import Kids from "./pages/KidsCategory";
import CheckoutPage from "./pages/CheckoutPage";
import SearchResults from "./pages/SearchResults";
import LoginForm from "./components/LoginForm";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/AdminDashboard";
import "./App.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <CartProvider>
      <AuthProvider>
        <Router>
          <Navbar toggleSidebar={toggleSidebar} onLoginClick={() => setShowLogin(true)} />
          <div className="main-layout">
            <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="content-area" onClick={() => sidebarOpen && setSidebarOpen(false)}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/male" element={<Male />} />
                <Route path="/female" element={<Female />} />
                <Route path="/kids" element={<Kids />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/profile" element={<Profile />} />
                <Route
                  path="/admin-dashboard"
                  element={
                    <RequireAuth>
                      <AdminDashboard />
                    </RequireAuth>
                  }
                />
              </Routes>
            </div>
          </div>

          {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
        </Router>
      </AuthProvider>
    </CartProvider>
  );
}

// Higher-order component for admin authentication
const RequireAuth = ({ children }) => {
  const { user } = useContext(AuthContext);
  console.log("RequireAuth user:", user); // Debug log
  return user && user.role === "admin" ? children : <Navigate to="/" />;
};

export default App;