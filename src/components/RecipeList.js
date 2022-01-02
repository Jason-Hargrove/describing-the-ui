// Nested lists in one component
// Make a list of recipes from this array! For each recipe in the array, display its title as an <h2> and list its ingredients in a <ul>.

import { recipes } from "../data/recipeData.js";

export default function RecipeList() {
    return (
        <div className="recipe-list">
            <h1>Recipes</h1>
            {recipes.map(recipe =>
                <div key={recipe.id}>
                    <h2>{recipe.name}</h2>
                    <ul>
                        {recipe.ingredients.map(ingredient =>
                            <li key={ingredient}>
                                {ingredient}
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
}
