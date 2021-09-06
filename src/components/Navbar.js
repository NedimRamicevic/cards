import React from 'react'
import {NavLink,withRouter} from "react-router-dom";
import auth from '../auth'

const Navbar = (props) => {
  const handler = () =>{
    if (auth.isAuthenticated()) {
       auth.logout(()=>{
        console.log("object")
        props.history.push('/')
    }
      )
    }
    else{
      auth.login(()=>(console.log("logged in")))
    }
  }
  const changeText = auth.isAuthenticated() ? "logout" : "login" 
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="nav nav-tabs">
        <NavLink className="nav-link" aria-current="page" to="/cards">Cards</NavLink>
        <NavLink className="nav-link" to="/about">About</NavLink>
        <NavLink className="nav-link" to="/profile/nedim">Profiles</NavLink>
        <button onClick= {handler}>{changeText}</button>
      </div>

    </div>
  </div>
</nav>
    )
}

export default withRouter(Navbar)
