import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const [mode, setMode] = useState({
    color: 'text-dark',
    background: 'light',
    alert: 'success',
    msg : 'LightMode has been Enabled'
  });

  const handleUpClick = () => {
    if (mode.color === 'text-dark') {
      setMode({
        color: 'text-white',
        background: 'bg-dark',
        alert: 'success',
        msg : 'DarkMode has been Enabled'
      });
      // setInterval(()=>{document.title = 'Textutils is dark'},2000)

    } else {
      setMode({
        color: 'text-dark',
        background: 'light',
        alert: 'success',
        msg : 'LightMode has been Enabled'
      });
      // setInterval(()=>{document.title = 'Textutils is light'},1500)
      
    }
  };

  const capitalize = (alert) => {
    let capital =  ""
    let count = 0
    for(let i = 0; i < alert.length; i++){
      if(count === 0){
        capital += alert[i].toUpperCase()
        count += 1
      } else {
        capital += alert[i]
      }
    }
    return capital
  }

  return (
    <>
    <nav className={`navbar navbar-expand-lg ${mode.background}`}>
      <div className="container-fluid">
        <Link className={`navbar-brand ${mode.color}`} to="#">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link active ${mode.color}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${mode.color}`} to="/about">About</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className={`btn btn-outline-success ${mode.color}`} type="submit">Search</button>
          </form>
          <div className="form-check form-switch mx-3 text-light">
            <input className="form-check-input" type="checkbox" onClick={handleUpClick} role="switch" id="flexSwitchCheckDefault"/>
            <label className={`form-check-label ${mode.color}`} htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
          </div>
        </div>
      </div>
    </nav>
    <div class={`alert alert-${mode.alert} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(mode.alert)}! </strong>{mode.msg}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    </>
  )
}
