import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Testimony from "./components/Testimony";
import Blog from "./components/Blog";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Services />
      <About />
      <Gallery />
      <Testimony />
      <Blog />
    </div>
  );
}

export default App;
