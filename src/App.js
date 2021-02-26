import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import addaproperty from "./components/pages/addaproperty";
import Signup from "./components/pages/Signup";
import SignIn from "./components/pages/SignIn";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/add-a-property" exact component={addaproperty} />
        <Route path="/sign-up" exact component={Signup} />
        <Route path="/sign-in" exact component={SignIn} />
      </Switch>
    </Router>
  );
}

export default App;
