import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import FormikOnboardForm from "./components/signUp/signUp";

// Component section start

// Component section end

function App() {
  return (
    <div className="App">
      <div className="signUpForm">
        <Route exact path="/signup">
          <FormikOnboardForm />
        </Route>
      </div>
    </div>
  );
}

export default App;
