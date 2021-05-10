import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
    // <h1>This is App.jsx which I created.</h1>
  );
};

export default App; 