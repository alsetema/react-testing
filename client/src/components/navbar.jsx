import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {


    state = {
    }
    
    handleNavButtonClick = () => {
        console.log("the button has been pressed");
        console.log("checking for this: " + this);
    }
    render() {
        
      const buttons = ["Register","Login","About Us","Location"];

      return( 
          <div className="container-fluid bg-dark">
     <nav className="navbar nav-pills navbar-dark bg-dark navbar-expand-sm justify-content-end">
          <ul className="navbar-nav">
            {
            buttons.map((value,index) => {
                return (
                    <li className="nav-item pe-4" key={index}>
                        <Link className="nav-link" to={"/"+value.toLowerCase()}>{value}</Link>
                    </li>
                )
            }
                
            )
                
            }

          </ul>
      </nav>
      </div>
      )};
}

export default Navbar;
