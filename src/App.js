import React, { useState } from 'react';
import './App.css';
import Aleart from './components/Aleart';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import About from './components/About';
import Navbar from './components/Navbar'
import Textform from './components/Textform'
function App() {
  const [myStyle, AlterStyle] = useState({
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '10px'
  });
  const [SwitchmyStyle, AlterrStyle] = useState({
    backgroundColor: 'white',
    color: 'black'
  });
  const [mode, AlterMode] = useState('light');
  const [message, AlterMessage] = useState(null);
  const showMessage = (message, type) => {
    AlterMessage({
      type: type,
      message: message,
    });
    setTimeout(() => {
      AlterMessage(null);
    }, 1000)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      AlterMode('dark');
      document.body.style.backgroundColor = '#43464B';
      document.body.style.color = 'white';
      showMessage('Dark mode enabled', 'success');
      ///////
      AlterStyle({
        backgroundColor: '#43464B',
        color: 'white',
        borderRadius: '10px'
      });
      AlterrStyle({
        backgroundColor: 'white',
        color: 'black'
      });
    }
    else {
      AlterMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#43464B';
      showMessage('Dark mode disabled', 'success');
      //////////////
      AlterStyle({
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '10px'
      });
      AlterrStyle({
        backgroundColor: 'black',
        color: 'white'
      });
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" NavItem1="Home" NavItem2="About TextUtils" mode={mode} toggleMode={toggleMode} show={showMessage} />
        <Aleart mess={message} />
        <div className="container my-3">
          <Routes>
            <Route path="#" element={<Textform name="Enter Text: " mode={mode} showMessage={showMessage} />} />
            <Route path="" element={<Textform name="Enter Text: " mode={mode} showMessage={showMessage} />} />
            <Route path="/" element={<Textform name="Enter Text: " mode={mode} showMessage={showMessage} />} />
            <Route path="/about" element={<About myStyle={myStyle} SwitchmyStyle={SwitchmyStyle} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
