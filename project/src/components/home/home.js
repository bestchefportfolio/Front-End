import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './searchForm';

const Home = () =>{
    return(
        <div className="nav">
        <div>
            <Link className="signUp" to="/signUp">Sign Up</Link>
        </div>

        <div>
            <Link className="login" to="/login">Login</Link>
        </div>
        <div className="searchForm">
            <SearchForm/>
        </div>
        </div>

    );

};

export default Home;