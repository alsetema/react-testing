import React, { Component } from 'react';
import Welcome from './welcome.jsx';
import Register from './register';

class ContentView extends Component {


    
    render() {
        const toggableComponents = ["Welcome","Register"]
        return (
            <div>
            {
                //iterarte to put whatever is in the array as components here?
            }
            <Welcome></Welcome>
            <Register></Register>
            </div>
        )
    }
}

export default ContentView;
