import React, { Component } from 'react';

class NavBar extends Component {


    state = {}
    
    handleNavButtonClick = () => {
        console.log("the button has been pressed");
        console.log("checking for this: " + this);
    }
    render() {
      return( 
          <nav className="navbar-fixed-top navbar navbar-default">
          <div className="container container-fluid">
            <button onClick={this.handleNavButtonClick} type="button" className="btn btn-default navbar-btn">login</button>
            <button className="btn btn-default navbar-btn"> another button </button>
          </div>
          </nav>
      )};
}

export default NavBar;

