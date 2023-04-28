import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Input, SimpleGrid } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import "../../styles/up.css";

const Diet = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("meal");
  const [reload, setReload] = useState(false);
  function handleChange(e) {
    setQuery(e.target.value);
    console.log(query);
  }
  function handleClick(e) {
    setReload(!reload);
  }
  useEffect(() => {
    fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=4dd26ba3&app_key=edf5fc071c235bd44a45668fabd076f4&calories=100-300`
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.hits);
        console.log(recipes);
      })
      .catch((error) => console.error(error));
  }, [reload]);

  const GetDiet = () => {
    return (
      <SimpleGrid ml="3" mt="10" columns={4} spacing={10}>
        {recipes.map((element, index) => {
          return (
            <Card
              key={index}
              image={element.recipe.images.SMALL.url}
              label={element.recipe.label}
              mealType={element.recipe.mealType}
              cuisineType={element.recipe.cuisineType}
              calories={element.recipe.calories}
            />
          );
        })}
      </SimpleGrid>
    );
  };

  return (
    <>
      <h1>
        <center>Diet Planner</center>
      </h1>
      <div className="cus-inp" onChange={handleChange}>
        <input placeholder="Enter any ingredient" />

        <button className="flex-all" onClick={handleClick}>
          <SearchIcon />
        </button>
      </div>
      <GetDiet />
    </>
  );
};

export default Diet;
