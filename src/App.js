import React from "react";
import { About, Footer, Header, Skills, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Footer />
    </div>
  );
}
