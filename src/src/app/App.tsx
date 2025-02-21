import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./page"; 
import About from "./about/page";
import Register from "./register/page";
import Contact from "./contact/page";
import Login from "./login/page";
import SignUp from "./signup/page";
import PartnerHospitals from "./partner/page";
import GuestMode from "./guestmode/page";

const App: React.FC = () => {
  return (
    <div>
      <nav className="p-4 bg-white shadow-md flex justify-between">
        <Link to="/" className="text-xl font-bold text-red-600">
          Blood Donation
        </Link>
        <div>
          <Link to="/about" className="mx-4">
            About
          </Link>
          <Link to="/PartnerHospitals" className="mx-4">
            PartnerHospitals
          </Link>
          <Link to="/Register" className="mx-4">
            Register
          </Link>
          <Link to="/Contact" className="mx-4">
            Contact
          </Link>
          <Link to="/GuestMode" className="mx-4">
            GuestMode
          </Link>
          <Link to="/Login" className="mx-4">
            Login
          </Link>
          <Link to="/SignUp" className="mx-4">
            SignUp
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
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
