import React, { Component } from 'react';

class Welcome extends Component {

    render() {
        return (
            <div className="container text-light mt-5 p-4 bg-dark">
               <h1 className="display-2"> Welcome to this react testing website!</h1> 
            <h3> Use the navigation bar to get to different places</h3>
            </div>
        )
    }
}

export default Welcome;
