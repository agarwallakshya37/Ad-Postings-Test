import React from "react";
import "./App.css";
import Newpost from "./newpost";
import Test from "./Test";
import Map from "./MyMap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <div className="header_logo">
          <h1> LOGO </h1>
        </div>
        <div className="body">
          <Switch>
            <Route path="/post">
              <Newpost />
            </Route>
            <Route path="/test">
              <Test />
            </Route>
            <Route path="/">
              <Map />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
