import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import CreatePost from './components/CreatePost';
import MyContext from './context/myContext';
import Home from './components/home/home';
import PrivateRoute from './components/login/privateRoute';
import FormikOnboardForm from "./components/signUp/signUp";
import Login from "./components/login/login";
import PortfolioPage from "./components/Portfolio/portfolioPage";
// Component section end

function App() {
  return (
    <div className="App">
      <div className="signUpForm">
        <Route exact path="/signup">
          <FormikOnboardForm />
        </Route>
      </div>
    
      <Route exact path='/login' component={Login} />
      <Route exact path='/create-recipe' component={CreatePost} />
      <Route exact path="/" component={Home} />

      
      <div className="login" >
        <PrivateRoute exact path="/portfolio/:chef_id" component={PortfolioPage}/>
      </div>
      

      {/* <div className="portfolio">
        <Route exact path="/portfolio/:chef_id" component={PortfolioPage}>
          <PortfolioPage />
        </Route>
      </div> */}
    </div>
  );
}

export default App;
