import React, { useState, useEffect } from 'react';
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
import LoadingScreen from './components/LoadingScreen';

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user has already seen the loading screen in this session
    const hasSeenLoading = sessionStorage.getItem('hasSeenLoading');
    if (hasSeenLoading) {
      setLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    sessionStorage.setItem('hasSeenLoading', 'true');
    setLoading(false);
  };

  return (
    <Router>
      <div className="App">
        {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
        <div className={`main-content ${!loading ? 'fade-in' : ''}`}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
          <Chatbot />
        </div>
      </div>
    </Router>
  );
}

export default App;
