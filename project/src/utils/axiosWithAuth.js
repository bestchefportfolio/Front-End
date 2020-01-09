import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
        return axios.create({
            baseURL: 'https://chef-portfolio-be.herokuapp.com/api',
            headers: {
                authorization: token
            }
        });
    };
export default axiosWithAuth;