import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';

import NavbarComponent from "./components/navbar/NavbarComponent";
import HomepageComponent from "./components/homepage/HomepageComponent";
import UsersComponent from "./components/users/UsersComponent";

class App extends Component {
  render() {
    return (
        <Router>
            <div className="page-container">
                <NavbarComponent />
                <div className="container-fluid p-3 my-3 h100">
                    <Switch>
                        <Route exact={true} path={"/"} render={() => <HomepageComponent />} />
                        <Route path={"/users"} render={() => <UsersComponent />} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
  }
}

export default App;
