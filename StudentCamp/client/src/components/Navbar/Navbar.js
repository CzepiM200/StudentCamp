import "./_navbar.scss";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  
  return (  
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <Link to="/" className="navbar-brand">
        StudentCamp 
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button> 

    <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
            <Link to="/rooms" className="nav-link">
                Rooms
            </Link>
        </li> 
        <li className="nav-item">
            <Link to="/users" className="nav-link">
                Użytkownicy
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/routes" className="nav-link">
                Trasy
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/finances" className="nav-link">
                Finanse
            </Link>
        </li>
        </ul>
    </div>
  </nav>
  );
};

export default Navbar;