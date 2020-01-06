import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
        return axios.create({
            baseURL: 'https://chef-portfolio-be.herokuapp.com/login',
            headers: {
                Authorization: token
            }
        });
    };