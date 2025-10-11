import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Chatbot from "./components/Chatbot";

function Home() {
  return (
    <>
      <Header />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Chatbot /> {}
      </div>
    </Router>
  );
}

export default App;
