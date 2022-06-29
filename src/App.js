
import './App1.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm  from './Components/TextForm';
import React,{useState} from 'react'
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {

  const[mode,setMode] = useState("light");
const[btn,setBtn]=useState("Enable Dark Mode");

const[alert,setAlert]=useState(null);

const showAlert=(message,type)=>
{
  setAlert({
    msz: message,
    type:type
  })
 setTimeout(() => {
  setAlert(null);
 }, 1800);
}
  const rakesh=()=>{

    if(mode==='light'){
      setMode("dark");
      setBtn("Enable Light Mode");
      document.body.style.backgroundColor="#042743";
      showAlert("Dark mode has been enabled","Success")

    } 
    else{
      setMode("light");
      setBtn("Enable Dark Mode");
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled","Success")
    }
  }
  return (
    
<>
<Router>
<Navbar title="RAKESH" mode={mode} rakesh={rakesh} btn={btn} about="About"/>
<Alert alert={alert}  showAlert={showAlert} />
<div className="container">


<Routes>
             
              <Route exact path="/about" element={<About/>} />
              <Route exact path="/" element={<TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode}/>} />
              
</Routes>
          


</div>
</Router>
</>
  );
}

export default App;
