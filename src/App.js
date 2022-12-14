import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');// whether dark mode enabled or not
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#214e78';
      showAlert("Dark mode has been enabled", "success");
      setInterval(() => {
        document.title = 'TextUtils-Dark Mode';
      }, 2000);
      setInterval(() => {
        document.title = 'Install TextUtils Now';
      }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils-Light Mode';
    }

  }
  return (
    <>
     {/* <Router> */}
      <Navbar title="Textutils" aboutText="About us" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar /> */}
      <Alert alert={alert} />
      <div className="container my-3">
      {/* <Switch> */}
        {/* /user---> component 1
        /user/Home--->component 2 */}
          {/* <Route exact path="/about">
            <About />
          </Route> */}
          {/* <Route exact path="/"> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
           {/* </Route> */}
      {/* </Switch> */}
       
        {/* <About/> */}
      </div>
      {/* </Router> */}
    </>

  );
}

export default App;