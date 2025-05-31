// import Image from "next/image";
// import styles from "./page.module.css";
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import React from 'react';

export default function Home() {
    return (
    <main>
      <Hero />
            <Navbar />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />

    </main>
  );
}
