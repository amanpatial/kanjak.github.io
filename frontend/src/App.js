import React from "react";
import "./App.css";
import { Toaster } from "./components/ui/sonner";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Reality from "./components/Reality";
import Eligibility from "./components/Eligibility";
import Services from "./components/Services";
import Vision from "./components/Vision";
import Articles from "./components/Articles";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Toaster position="top-right" richColors />
      <Header />
      <main>
        <Hero />
        <About />
        <Reality />
        <Eligibility />
        <Services />
        <Vision />
        <Articles />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
