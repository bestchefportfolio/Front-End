import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import FormikOnboardForm from "./components/signUp/signUp";

// Component section start


import MyContext from './context/myContext';
import Home from './components/home/home';
import SearchForm from "./components/home/searchForm";

// Component section end

function App() {
  return (
    <div className="App">

      <div className="signUpForm">
        <Route exact path="/signup">
          <FormikOnboardForm />
        </Route>
      </div>




      <Route exact path="/" component={Home} />

    </div>
  );
}

export default App;
