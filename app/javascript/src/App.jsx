import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { initializeLogger } from "./common/logger";
const logger = require('js-logger');

const App = () => {
  useEffect(() => {
    initializeLogger();
    logger.info("This is logger");
  }, []);
    
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <div>Home</div>} />
        <Route exact path="/about" render={() => <div>About</div>} />
      </Switch>
    </Router>
  );
};

export default App;