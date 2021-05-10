import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import CreateTask from "./components/Tasks/CreateTask";
import PageLoader from "./components/PageLoader";
import { initializeLogger } from "./common/logger";
import { registerIntercepts, setAuthHeaders } from "./apis/axios";
import { ToastContainer } from "react-toastify";
import ShowTask from "./components/Tasks/ShowTask";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initializeLogger();
    registerIntercepts();
    setAuthHeaders(setLoading);
  }, []);

  if (loading) {
    return (
      <div className="h-screen">
        <PageLoader />
      </div>
    );
  }

  return (
    <Router>
      <ToastContainer />
      <Switch>
        <Route exact path="/tasks/:slug/show" component={ShowTask} />
        <Route exact path="/tasks/create" component={CreateTask} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
    // <h1>This is App.jsx which I created.</h1>
  );
};

export default App; 