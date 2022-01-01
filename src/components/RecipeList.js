import { recipes } from "../data/recipeData.js";

export default function RecipeList() {

    const ListOfRecipes = recipes.map(recipe =>
        <li>
            <b>{recipe.name}</b>
        </li>
    );

    return (
        <div>
            <h1>Recipes</h1>
            <ul>{ListOfRecipes}</ul>
        </div>
    );
}
