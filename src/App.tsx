import React, { useState, useEffect } from "react";
import "./App.css";
import firebase from "firebase/app";
import Home from "./Views/Home";
import Signup from "./components/Signup";

const App = () => {
  const [user, setUser] = useState({});

  // const authListener = () => {
  //   firebase.auth().onAuthStateChanged(user => {
  //     console.log(user);
  //     if (user) {
  //       setUser({ user });
  //     } else {
  //       setUser({ user: null });
  //     }
  //   });
  // };

  // useEffect(() => {
  //   authListener();
  // }, []);

return <div className="App"><Signup /></div>;
};

export default App;
