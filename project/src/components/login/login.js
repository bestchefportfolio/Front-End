import React, {useState} from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';

const Login = props => {

    const [currentUser, setCurrentUser] = useState({
        username: '',
        password: ''
    });

    const handleChange = e => {
      return  setCurrentUser({...currentUser, 
                [e.target.name]: e.target.value});
            };

    const loginPost = e => {
        e.preventDefault();
        console.log(currentUser);
        axiosWithAuth() 
            .post('https://chef-portfolio-be.herokuapp.com/login/', currentUser) // check path 
            .then(res => {
                console.log('success', res);
                localStorage.setItem('token', res.data.token); //retriving token from api
                props.history.push('/portfolio/1');  //add path to portfolio page when it's ready
            })
            .catch(err => {
                console.log('Login Error Detected', err)
            });
        };
    
    return (
        <div>
            <h1>Login</h1>
                <form onSubmit={loginPost}>
                    <input
                        type='text'
                        name='username'
                        placeholder='Username'
                        value={currentUser.username}
                        onChange={handleChange}
                        />
                    <input 
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={currentUser.password}
                        onChange={handleChange}
                        />
                    <button type='submit'>Submit</button>
                </form>
        </div>
    );
};

export default Login;