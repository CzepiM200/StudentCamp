import "./_navbar.scss";
import React from "react";

const Navbar = (props) => {
  
  return (  
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="#">StudentCamp</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button> 

    <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
            <a class="nav-link" href="#">Pokoje
            <span class="sr-only">(current)</span>
            </a>
        </li> 
        <li class="nav-item">
            <a class="nav-link" href="#">Użytkownicy</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Trasy</a> 
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Finanse</a>
        </li>
        </ul>
    </div>
  </nav>
  );
};

export default Navbar;