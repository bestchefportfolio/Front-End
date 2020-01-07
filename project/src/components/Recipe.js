import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const Recipe = () => {
    const [recipeData, setRecipeData] = useState([]);

    // useEffect(() => {
    //     axiosWithAuth()
    //         .get('https://chef-portfolio-be.herokuapp.com/recipes/')
    //         .then(res => {
    //             setRecipeData(res.data)
    //             console.log('Return Recipe Data', res.data)
    //         })
    //         .catch(error => {
    //             console.log(error.response)
    //         })
    // }, [])

    return (
        <>
            
        </>
    )
};

export default Recipe;