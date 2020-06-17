import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Project from "./components/project";
import Home from "./components/home.jsx";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/project/:project_name'>
          <Project />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
