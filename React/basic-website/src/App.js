import './App.css'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alerts from './components/Alerts';

function App() 
{
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>
  {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>
    {
      setAlert(null);
    }, 2000);
  } 
  let toggleMode = () =>
  {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert('Dark mode enabled', 'success');
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode enabled', 'success');
    }
  }
  return ( 
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alerts alert={alert}/>
          <div className="container my-3">
            <TextForm heading="Try TextUtils here" mode={mode} showAlert={showAlert}/>
          </div>
        <section id="about">
          <About mode={mode}/>
        </section>
    </>
  );
}

export default App;