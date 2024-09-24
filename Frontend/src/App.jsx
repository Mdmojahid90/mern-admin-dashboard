import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AdminLayout from "./components/Layout/Admin-Layout";
import AllUsers from "./pages/Admin-Users";
import AllContacts from "./pages/Admin-Contacts";
import AdminUpdate from "./pages/Admin-Updates";
import Service from "./pages/Service";
import Footer from "./components/Footer";
import AdminContactUpdate from "./pages/Admin-Contact-Update";
import LoginAsAdmin from "./pages/LoginAsAdmin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginasadmin" element={<LoginAsAdmin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AllUsers />} />
            <Route path="contacts" element={<AllContacts />} />
            <Route path="user/:id/edit" element={<AdminUpdate />} />
            <Route path="contact/:id/edit" element={<AdminContactUpdate />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
