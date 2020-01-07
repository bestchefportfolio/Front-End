import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
    return(
        <div className="nav">
        <div>
        <Link className="signUp" to="/signUp">Sign Up</Link>
        </div>

        <div>
            <Link className="login" to="/login">Login</Link>
        </div>
        </div>

    );

};

export default Home;