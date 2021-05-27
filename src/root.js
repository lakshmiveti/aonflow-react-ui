import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./components/dashboard";
import MainContent from "./components/dashboard/mainContent";

function Root() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Dashboard />
        </Route>
        {/* <Route path='/newconnector'>
          <p>i am from new connector</p>
        </Route>
        <Route path='/list'>
          <MainContent />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default Root;
