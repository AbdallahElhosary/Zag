import React from "react";
import NavbarComponent from "./components/Navbar";
import Head from "./components/Head";
import Landing from "./components/Landing";
import Categories from "./components/Categories";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App font-sans">
      <Head />
      <NavbarComponent />
      <Landing />
      <Categories />
      <Features />
      <Footer />
    </div>
  );
}