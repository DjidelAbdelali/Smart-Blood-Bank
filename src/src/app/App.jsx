import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Register from "../pages/Register";
import Contact from "../pages/Contact";
import About from "./pages/About";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PartnerHospitals from "./PartnerHospitals";
import GuestMode from "./GuestMode";
import Contact from "./Contact";


const App = () => {
  return (
    <div>
      <nav className="p-4 bg-white shadow-md flex justify-between">
        <Link to="/" className="text-xl font-bold text-red-600">Blood Donation</Link>
        <div>
          <Link to="/About" className="mx-4">About</Link>
          <Link to="/PartnerHospitals " className="mx-4">PartnerHospitals </Link>
          <Link to="/Register" className="mx-4">Register</Link>
          <Link to="/Contact" className="mx-4">Contact</Link>
          <Link to="/GuestMode" className="mx-4">GuestMode</Link>
          <Link to="/Login" className="mx-4">Login</Link>
          <Link to="/SignUp" className="mx-4">SignUp</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/About" element={<About />} />
        <Route path="/PartnerHospitals" element={<PartnerHospitals />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/GuestMode" element={<GuestMode />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />

      </Routes>
    </div>
  );
};

export default App;
