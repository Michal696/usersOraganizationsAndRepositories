import React from 'react';
import logo from './logo.svg';
import './App.css';
import {getRepos, getUserData} from "./github-api";
import NavMenu from './components/NavMenu';

import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {


  var repos = getRepos("Michal696").then(r => {
    debugger;
    return r});

  // getUserData()
  return (
      <Router>
        <Route path='/' component={NavMenu} />
        {/*<Route exact path='/' component={Home} />*/}
        {/*<Route path='/counter' component={Counter} />*/}
        {/*<Route path='/fetch-data/:startDateIndex?' component={FetchData} />*/}
      </Router>
  );
}

export default App;
