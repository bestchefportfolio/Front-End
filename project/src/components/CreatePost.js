import React, { useState, useContext } from "react";
// import {axiosWithAuth} from '../utils/axiosWithAuth';
import { Context } from "../context/RecipeContext";
// import { setIn } from 'formik';

const CreateRecipe = props => {
  const state = useContext(Context);
  const [addRecipe, setAddRecipe] = useState({
    // recipe_id: 4,
    title: "",
    servings: 0,
    instructions: "",
    images: []
  });

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
    e.preventDefault();
    if (document.getElementById("title").value !== "") {
      state.dispatch({
        type: "ADD",
        payload: [addRecipe]
      });
      setAddRecipe({
        title: "",
        servings: 0,
        instructions: "",
        images: ""
      });
    }
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
        type="text"
        // recipe_id='title'
        name="title"
        value={addRecipe.title}
        placeholder="Title"
        onChange={handleChange}
        required
      />
      <input
        type="text"
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

      <input
        type="file"
        name="image"
        value={addRecipe.image}
        placeholder="Image"
        onChange={handleChange}
      />

      {/* {addRecipe.ingredients.map((item, index) => (
                    <div key={index}>{item}</div>
                ))} */}
      <input
        type="text"
        name="ingredients"
        value={addRecipe.ingredients}
        placeholder="Ingredients"
        onChange={handleChange}
      />
      <button type="submit" onClick={Ingredient} onSubmit={onSubmit}>
        Add Ingredients
      </button>

      <button type="submit" onClick={onSubmit}>
        Submit Recipe
      </button>
    </form>
  );
};
export default CreateRecipe;
