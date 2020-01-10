import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Recipe() {
  const [recipeData, setRecipeData] = useState([]);
  const { recipe_id } = useParams();

  useEffect(() => {
    const id = recipe_id;
    axios
      .get(`https://chef-portfolio-be.herokuapp.com/recipes/${id}`)
      .then(res => {
        setRecipeData(res.data.recipe);
        console.log("Return Recipe Data", res.data.recipe);
      })
      .catch(error => {
        console.log("error", error.res);
      });
  }, [recipe_id]);

  return (
    <div>
      <div>
        <strong>{recipeData.title}</strong>
      </div>
      <img src={recipeData.images} width="40%"></img>
      <div>servings: {recipeData.servings}</div>
      <div>instructions: {recipeData.instructions}</div>
    </div>
  );
}
