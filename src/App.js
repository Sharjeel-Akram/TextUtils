import './App.css';
import React, { useState } from 'react';
import Alert from './components/Alert';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light')
  const [alert , setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null)
    }, 1000)
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#2b2f32';
      showAlert("Dark Mode has been Enabled", "success")

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "success")
    }
  }
  return (
  <>
  {/* <Router> */}
    <Navbar title = "TextUtils" aboutText = "About Us" mode={mode} toggleMode = {toggleMode}/>
    <Alert alert = {alert}/>
    <div className="container my-3">
    <TextForm heading = "Enter the Text to analyze." mode={mode} showAlert={showAlert}/>
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About mode ={mode}/>} /> */}
            {/* <Route exact path= "/" element = {<TextForm heading = "Enter the Text to analyze." mode={mode} showAlert={showAlert}/>}/> */}
            
          {/* </Routes> */}
    </div>
    {/* </Router> */}
  </>
  );
}

export default App;