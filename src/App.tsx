import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import firebase from "firebase/app";
import Home from "./Views/Home";
import Signup from "./components/Signup";
// import Menu from "./Views/Menu";
import Login from "./components/Login";


const App = () => {
  


  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Home}>
            <Home />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/Signup">
            <Signup />
          </Route>
        </Switch>
    </Router>
  );
};

export default App;
