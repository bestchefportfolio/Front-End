import React, { useState, useEffect } from "react";
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

const deleteColor = color => {
    console.log(deleteRecipe);
    axiosWithAuth()
        .delete(`https://chef-portfolio-be.herokuapp.com/chef/${id.chef_id}/recipes/${id.recipe_id}`)
        .then(res => {
            console.log(res);
            updateColors(colors.filter(el => el.id !== color.id));
        })
        .catch(err => console.log(err));
};