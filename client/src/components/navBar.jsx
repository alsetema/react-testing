import React, { Component } from 'react';

class NavBar extends Component {


    state = {
    }
    
    handleNavButtonClick = () => {
        console.log("the button has been pressed");
        console.log("checking for this: " + this);
    }
    render() {
        
      const buttons = ["Register","Login","About Us","Location", 3];

      return( 
          <div className="container-fluid">
     <nav className="navbar nav-pills navbar-dark bg-dark navbar-expand-sm justify-content-end">
          <ul className="navbar-nav">
            {buttons.map(
                function(name,index){
                    return <li className="nav-item" key={ index }><a href="#" className="nav-link pr-4">{name}</a></li>;
                })
            }

          </ul>
      </nav>
          </div>
      )};
}

export default NavBar;

