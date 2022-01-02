// Challenge 2 of 4: Nested lists in one component
// Make a list of recipes from this array! For each recipe in the array, display its title as an <h2> and list its ingredients in a <ul>.

import { recipes } from "../data/recipeData.js";
import {Fragment} from "react";

export default function RecipeList() {

    const ListOfRecipes = recipes.map(recipe =>
       <>
           <h2>{recipe.name}</h2>
           <ul>
             <li>
               {recipe.ingredients.join(", ")}
             </li>
            </ul>
       </>
    );

    return (
        <div className="recipe-list">
            <h1>Recipes</h1>
            {ListOfRecipes}
        </div>
    );
}
