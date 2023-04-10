import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

import Home from "./Pages/Home/Home";
import Images from "./Pages/Images/Images";
import Videos from "./Pages/Videos/Videos";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <div className="bg-hero-bg h-screen bg-no-repeat bg:cover">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/images" exact component={Images} />
          <Route path="/videos" exact component={Videos} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
