import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import FormikOnboardForm from "./components/signUp/signUp";
import Login from "./components/login/login";
import PortfolioPage from "./components/Portfolio/portfolioPage";
// Component section start

import MyContext from "./context/myContext";
import Home from "./components/home/home";

// Component section end

function App() {
  return (
    <div className="App">
      <div className="signUpForm">
        <Route exact path="/signup">
          <FormikOnboardForm />
        </Route>
      </div>

      <div className="login">
        <Route exact path="/login">
          <Login />
        </Route>
      </div>

      <Route exact path="/" component={Home} />

      <div className="portfolio">
        <Route exact path="/portfolio/:chef_id">
          <PortfolioPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
