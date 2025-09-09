import React from "react";
import "../components/sidebar.css";
import { FaHome, FaUser, FaTachometerAlt, FaInfoCircle } from 'react-icons/fa';
export default function sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <button><FaHome /> Home</button>
        <button><FaUser /> Profile</button>
        <button><FaTachometerAlt /> Dashboard</button>
        <button><FaInfoCircle /> About Us</button>
      </nav>
    </aside>
  );}
