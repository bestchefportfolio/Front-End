import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import RecipeCard from "../RecipeCard";
import { useParams } from "react-router-dom";
import { Button } from "reactstrap";
import styled from "styled-components";

const Btn = styled(Button)`
  margin-top: 1%;
  margin-bottom: 2%;
`;

export default function PortfolioPage() {
  const [recipes, setRecipes] = useState([]);
  const [chefName, setChefName] = useState();
  const [chefBusiness, setChefBusiness] = useState();
  const { chef_id } = useParams();

  useEffect(() => {
    const id = chef_id;
    axios
      .get(
        `https://chef-portfolio-be.herokuapp.com/chef/${id}/recipes
        `
      )
      .then(response => {
        console.log(response.data.chefRecipes);
        setRecipes(response.data.chefRecipes);
        setChefName(response.data.chef.chef_name);
        setChefBusiness(response.data.chef.business_name);
      })
      .catch(error => {
        console.log("Server error", error);
      });
  }, [chef_id]);

  return (
    <section className="recipe-list">
      <h1>{chefName}'s Portfolio Page</h1>
      <h2>{chefBusiness}</h2>
      <Btn color="primary">Create post</Btn>
      {recipes.map((item, index) => {
        return (
          <RecipeCard
            key={index}
            title={item.title}
            images={item.images}
            randomImage={
              "https://source.unsplash.com/collection/239835/700x500"
            }
            instructions={item.instructions}
          />
        );
      })}
    </section>
  );
}
