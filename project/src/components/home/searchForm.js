import React, { useState } from "react";
import RecipeCard from "../../components/RecipeCard";


const SearchForm=(props)=> {
  const [query, setQuery] = useState("");
  
  const recipes = props.data.filter(recipe =>
    recipe.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleInputChange = event => {
    setQuery(event.target.value);
  };
  
  return (
    <div className="Recipes">
      <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="Search by name"
          autoComplete="off"
        />
      </form>
      <div className="Recipe">
        {recipes.map(data => {
          return (
            <RecipeCard
            key={data.id}
            title={data.title}
            servings={data.servings}
            instructions={data.instructions}
            images={data.images}
            // src={data.image} 
            />
            
          );
        })}
      </div>
    </div>
  );
}

export default SearchForm;