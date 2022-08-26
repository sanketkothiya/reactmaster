import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/About'



function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Router>
        {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
        {/* <Navbar/> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path="/about" element={<About />} />

          <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} />} />


        </Routes>


        {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          <TextForm heading="Enter the text to analyze below" mode={mode} />
        </div> */}
      </Router>
    </>

  );
}

export default App;