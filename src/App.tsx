import React from 'react';
import './App.css';
import NavbarComponent from './components/navbar.component';
import InputPageComponent from './components/inputpage.component';
import RepositoriesComponent from './components/repositories.component';
import OrganizationsComponent from './components/organizations.component';

import {BrowserRouter as Router, Route} from "react-router-dom";
import {getUserData} from "./github-api";

function App() {

  getUserData("Michal696").then(r => {
    debugger;
  });
  return (
      <Router>
        <Route path='/' component={NavbarComponent} />
        <Route path='/' component={InputPageComponent} />
        <Route path='/:userId' component={RepositoriesComponent} />
        <Route path='/:userId' component={OrganizationsComponent} />
      </Router>
  );
}

export default App;
