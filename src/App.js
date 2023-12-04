// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar.js'
import Form from './Components/Form.js'
import React, {useState} from 'react'
import Alert from './Components/Alert'
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
    const toggleMode = ()=>{
      if(mode === 'light')
      {
        setMode('dark');
        document.body.style.backgroundColor = "#0C2D48";
        showAlert('Dark mode has been enabled','Success');
      }
    
      else{
        document.body.style.backgroundColor = "white";
        setMode('light');        
        showAlert('Light mode has been enabled','Success');
      }
    }
  return (
    <>
      <Navbar title = "TextUtils" mode = {mode} toggle={toggleMode}/>
      <Alert alert={alert} />
      <div className="container">
        <Form mode = {mode} showAlert={showAlert}/>
      </div>
      
    </>
  );
}

export default App;
