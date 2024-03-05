import './App.css';
import Navbar from './MyComponents/Navbar';
import Main from './MyComponents/Main';
import About from './MyComponents/About';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Remove Switch


function App() {
  
  return (
    <>
    {/* <Router> */}
      <div className="app-container">
        <Navbar title='HHC'/>
        <Main heading='Enter text for analyze'/>
        {/* <Routes> */}
          {/* <Route path='/' element={<Main heading='Enter text for analyze'/>} /> */}
          {/* <Route path='/About' element={<About/>} /> */}
        {/* </Routes> */}
        </div>
    {/* </Router> */}
    </>
  )
}

export default App;