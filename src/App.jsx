import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingularWork from "./pages/SingularWork";
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/portfolio/:id" component={SingularWork} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
