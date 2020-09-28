import React from 'react';
import LandingPage from "./Components/LandingPage/LandingPage";
import Login from "./Components/Login/Login";

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
          <Route path="/landing-page" component={LandingPage} />
          <Route exact path="/" component={Login} />
        </Router>
      </div>
  );
}

export default App;
