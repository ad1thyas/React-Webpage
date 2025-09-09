import React from "react";
import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import MainContent from "./components/maincontent";
import Footer from "./components/footer";
export default function App() {
  return (
    <div className="app">
      <Header />
      <div className="layout">
        <Sidebar />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

