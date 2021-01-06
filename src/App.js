import React from "react";
// eslint-disable-next-line no-unused-vars
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
