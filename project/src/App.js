import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";


// Component section start
import PrivateRoute from './components/login/privateRoute';
import FormikOnboardForm from "./components/signUp/signUp";
import Login from "./components/login/login";
import PortfolioPage from "./components/Portfolio/portfolioPage";
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

      
      <div className="login" >
        <Route exact path="/login" component={Login}/>
        <PrivateRoute exact path="/portfolio/:chef_id" component={PortfolioPage}/>
      </div>
      

      <Route exact path="/" component={Home} />

      {/* <div className="portfolio">
        <Route exact path="/portfolio/:chef_id" component={PortfolioPage}>
          <PortfolioPage />
        </Route>
      </div> */}
    </div>
  );
}

export default App;
