import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  const [mode, setmode] = useState('light')
  const toggleMode = () => {
    if (mode === 'dark') {
      setmode("light")
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode enabled.", "success")
      document.title = 'Textutils-home'
    }
    else {
      setmode('dark')
      document.body.style.backgroundColor = '#414141'
      showAlert("Dark mode enabled.", "success")
      document.title = 'Textutils-Darkmode'
    }
  }

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert} />} />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
