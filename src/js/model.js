import {getJSON} from "./helpers";


export let state = {
    recipe: {},
    searchResults: [],
    currentPage: 1,
    bookmarkedRecipes: []
};


/* In caz de succes obtinem in 'state.recipe' informatiile legate de produsul pe care il vom afisa(In parte din dreapta) in momentul in care dam click pe el. */
export let loadRecipe = async function(url) {
    let isOk = false;
    try {
        let object = await getJSON(url);
        isOk = true;
        state.recipe = {id: object.data.recipe.id, title: object.data.recipe.title, publisher: object.data.recipe.publisher, sourceUrl: object.data.recipe.source_url, image: object.data.recipe.image_url, servings: object.data.recipe.servings, cookingTime: object.data.recipe.cooking_time, ingredients: object.data.recipe.ingredients, bookmarked: false};
        state.bookmarkedRecipes.find(bookRec => bookRec.id === state.recipe.id) ? state.recipe.bookmarked = true : state.recipe.bookmarked = false;
    } catch(err) {
        if (isOk) console.log("Error in loadRecipe() function from 'model.js'!");
        throw err;
    }
};


/* In caz de succes obtinem in 'state.results' informatiile legate despre produsele ce trebuiesc afisate(In partea din stanga, unde sunt rezultatele cautarii) in urma cautarii unui produs in bara de sus. */
export let loadSearchResults = async function(url) {
    let isOk = false;
    try {
        let object = await getJSON(url);
        isOk = true;
        state.searchResults = object.data.recipes.map(function(recipe) { return {id: recipe.id, publisher: recipe.publisher, title: recipe.title, image: recipe.image_url} });
    } catch(err) {
        if (isOk) console.log("Error in loadSearchResults() function from 'model.js'!");
        throw err;
    }
};


/* Ne returneaza produsele ce trebuiesc afisate in functie de pagina pe care ne aflam. */
export let getPageResult = function(page) {
    state.currentPage = page;
    return state.searchResults.slice((state.currentPage - 1) * 10, state.currentPage * 10);
};


/* Modifica proprietatile obiectului 'state.recipe' ce vizeaza numarul total de serviri si ingredientele necesare. */
export let changeServings = function(newServings) {
    state.recipe.ingredients = state.recipe.ingredients.map(function(ingr) {
        return {
            quantity: ingr.quantity ? (newServings / state.recipe.servings) * ingr.quantity : "",
            unit: ingr.unit,
            description: ingr.description
        };
    });
    state.recipe.servings = newServings;
};


/* Modifica proprietatea obiectului 'state.recipe' ce vizeaza daca produsul respectiv este rezervat sau nu si il adauga/sau nu in array-ul cu produsele rezervate. */
export let toggleBookmark = function() {
    if (!state.recipe.bookmarked) {
        state.recipe.bookmarked = true;
        state.bookmarkedRecipes.push(state.recipe);
    } else {
        state.bookmarkedRecipes.splice(state.bookmarkedRecipes.findIndex(rec => rec.id === state.recipe.id), 1);
        state.recipe.bookmarked = false;
    }
};