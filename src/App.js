import './App.css';
import Navbar from './Components/Navbar.js'
import About from './Components/About.js'
import Contact from './Components/Contact.js'
import Form from './Components/Form.js'
import React, {useState} from 'react'
import Alert from './Components/Alert.js'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
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
    const router = createBrowserRouter([
      {
        path: "/",
        element: <>
          <Navbar title = "TextUtils" mode = {mode} toggle={toggleMode}/>
          <Alert alert={alert} />
          <div className="container">
            <Form mode = {mode} showAlert={showAlert}/>
          </div>
        </>
      },
      {
        path: "/about",
        element: <><Navbar title = "TextUtils" mode = {mode} toggle={toggleMode}/><About mode = {mode}/></>
      },
      {
        path: "/contact",
        element: <><Navbar title = "TextUtils" mode = {mode} toggle={toggleMode}/><Alert alert={alert} /><Contact mode = {mode} showAlert={showAlert}/></>
      }
    ])
    return (
      <>
      <RouterProvider router = {router}/>
    </>
  );
}

export default App;
