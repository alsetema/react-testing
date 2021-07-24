import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Welcome from './components/welcome';
import Navbar from './components/navbar';
import Register from './components/register';
import Login from './components/login';

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" component={Welcome} exact />
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} /> 
                </Switch>
            </Router>
        </div>
  );
}

export default App;
