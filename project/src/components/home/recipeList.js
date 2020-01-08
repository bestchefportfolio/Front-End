import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "./searchForm";
export default function RecipeList() {

  const [data, setData] = useState([]);
  useEffect(() => {

    axios
      .get(`https://chef-portfolio-be.herokuapp.com/recipes/`)
        .then(response =>{
          
          console.log(response);
          setData(response.data.all_recipes);
        })
        .catch(error =>{
          console.log(error);
        });
      }, []);
      console.log(data);
  return( 
    <div><SearchForm data={data}/></div> 
  )
}