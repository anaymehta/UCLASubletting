import "./App.css";
import 'semantic-ui-css/semantic.min.css'
import React, { useState } from "react";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import addaproperty from "./components/pages/addaproperty";
import propertyList from "./components/pages/propertyList";
import Signup from "./components/pages/Signup";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/add-a-property" exact component={addaproperty} />
        <Route path="/property-list" exact component={propertyList} />
        <Route path="/sign-up" exact component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
