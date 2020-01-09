import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";
import jwt from "jsonwebtoken";

const id = jwt.decode(localStorage.getItem("token"));
// console.log(id.chef_id);

const CreateRecipe = props => {
  const [addRecipe, setAddRecipe] = useState({
    // recipe_id: 4,
    title: "",
    servings: 0,
    instructions: "",
    images: null
  });

  //   useEffect(() => {
  //
  //   },[])

  const [ingredients, setIngredients] = useState({
    ingredients: ""
  });

  const handleChange = e => {
    e.preventDefault();
    setAddRecipe({
      ...addRecipe,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    // e.preventDefault();
    // if (document.getElementsByClassName("title").value !== "") {
    //     state.dispatch({
    //     type: "ADD",
    //     payload: [addRecipe]
    //   });
    //   setAddRecipe({
    //     title: "",
    //     servings: 0,
    //     instructions: "",
    //     images: ""
    //   });
    // }
    e.preventDefault();
    console.log(addRecipe);
    axiosWithAuth()
      .post(`https://chef-portfolio-be.herokuapp.com/chef/1/recipes`, addRecipe)
      .then(response => {
        console.log("success", response);
        localStorage.setItem("token", response.data.payload);
      })
      .catch(error => console.log(error.response));
  };

  const Ingredient = e => {
    e.preventDefault();
    e.stopPropagation();
    if (ingredients.ingredients !== "") {
      setAddRecipe({
        ...addRecipe,
        ingredients: [...addRecipe.ingredients, ingredients.ingredients]
      });
      setIngredients({
        ingredients: ""
      });
      document.getElementById("recipe_ingredients").value = "";
    }
  };

  return (
    <form
      autoComplete="off"
      className="create-recipe"
      id="form"
      onSubmit={onSubmit}
    >
      <h3>Create New Recipe</h3>
      <input
        className="title"
        type="text"
        // recipe_id='title'
        name="title"
        value={addRecipe.title}
        placeholder="Title"
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="servings"
        value={addRecipe.servings}
        placeholder="Servings"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="instructions"
        value={addRecipe.instructions}
        placeholder="Instructions"
        onChange={handleChange}
        required
      />

      {/* <input
        type="text"
        name="images"
        value={addRecipe.images}
        placeholder="Image URL"
        onChange={handleChange}
      /> */}

      {/* {addRecipe.ingredients.map((item, index) => (
                    <div key={index}>{item}</div>
                ))} */}
      {/* <input
        type="text"
        name="ingredients"
        value={addRecipe.ingredients}
        placeholder="Ingredients"
        onChange={handleChange}
      />
      <button type="submit" onClick={Ingredient} onSubmit={onSubmit}>
        Add Ingredients
      </button> */}

      <button type="submit" onClick={onSubmit}>
        Submit Recipe
      </button>
    </form>
  );
};
export default CreateRecipe;