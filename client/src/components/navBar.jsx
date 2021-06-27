import React, { Component } from 'react';

class NavBar extends Component {


    state = {}
    
    handleNavButtonClick = () => {
        console.log("the button has been pressed");
        console.log("checking for this: " + this);
    }
    render() {
      return( 
     <nav className=" navbar navbar-dark bg-secondary navbar-expand">
        <div className="container container-fluid">
          <ul className="navbar-nav justify-content-end">
            <li className="nav-item"><a href="/#" className="font-weight-bold nav-link">Register</a></li>
            <li className="nav-item"><a href="/#" className="nav-link">Log In</a></li>
          </ul>
        </div>

      </nav>
      )};
}

export default NavBar;

