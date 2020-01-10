import React, { useState, useEffect } from "react";
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useParams } from 'react-router-dom';

export default function DeleteCard() {
    // const [deletedRecipe, setDeletedRecipe] = useState([])
const { recipe_id } = useParams();



const onSubmit = e =>{
    const id = recipe_id;
    // e.preventDefault();
    axiosWithAuth()
    .delete(`https://chef-portfolio-be.herokuapp.com/chef/1/recipes/${id}`)
    .then(response => {
        console.log("Successful delete:", response);
        console.log(response.data.recipe_id);
    })
    .catch(error => console.log(error.response));
    
};

return(
    <button type="submit" onClick={onSubmit}>
        
        Delete Recipe
      </button>
);


};



// export default DeleteCard;