import 'core-js/stable';   import 'regenerator-runtime/runtime';   import * as model from './model.js';   import recipeView from './views/recipeView.js';   import searchView from './views/searchView.js';   import resultsView from './views/resultsView.js';   import paginationView from './views/paginationView.js';   import bookmarkView from './views/bookmarkView.js';


/*
- In urma afisarii rezultatelor in stanga, odata ce dam click pe un produs, acesta va fi afisat in dreapta(Insotit de mai multe informatii), iar in partea stanga va fi colorat diferit. 
- De asemenea, daca produsul pe care am dat click era deja rezervat, acesta va fi colorat diferit si in lista cu produsele rezervate.(Lista Bookmarks)
*/
let controlRecipe = async function() {
    let id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();
    let isOk = false;
    try {
        await model.loadRecipe(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
        isOk = true;
        recipeView.render(model.state.recipe);
        resultsView.update(model.getPageResult(model.state.currentPage));
        bookmarkView.update(model.state.bookmarkedRecipes);
    } catch(err) {
        if (isOk) console.log("Error in controlRecipe() function from 'controller.js'!");
        recipeView.renderError(err.message);
    }
};
recipeView.aEL1(controlRecipe);


/* Dupa ce am cautat un produs in bara de cautare, in partea stanga ne vor fi afisate primele 10 rezultate. (Pentru ca avem  'controlPagination(1)' )*/
let controlSearchResults = async function() {
    let word = document.querySelector("input.search__field").value;
    if (!word) return;
    resultsView.renderSpinner();
    let isOk = false;
    try {
        await model.loadSearchResults(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${word}`);
        isOk = true;
        controlPagination(1);
    } catch(err) {
        if (isOk) console.log("Error in controlSearchResults() function from 'controller.js'!");
        resultsView.renderError(err.message);
    }
};
searchView.aEL1(controlSearchResults);


/* In functie de butonul apasat(Page 1, Page 2 etc) aflate sub partea de jos a rezultatelor cautarii, ne afiseaza pagina respectiva. */
let controlPagination = function(page) {
    resultsView.render(model.getPageResult(page));
    paginationView.render([model.state.currentPage, Math.ceil(model.state.searchResults.length / 10)]);
};
paginationView.aEL1(controlPagination);


/* In urma apasarii butoanelor de - si + pe un produs afisat(Partea din dreapta), se schimba numarul de portii si necesarul total de ingrediente pentru produsul afisat. */
let controlServings = function(newServings) {
    model.changeServings(newServings);
    recipeView.update(model.state.recipe);
};
recipeView.aEL2(controlServings);


/*
- Daca apasam pe butonul de rezerva in dreptul unui produs afisat(Partea din dreapta), rezerva produsul prin umplerea butonului si il afiseaza pe acesta sus in lista "Bookmarks".
- Daca produsul era deja rezervat, dupa apasare butonului acesta nu va mai fi rezervat si nu il vom mai vedea in lista "Bookmarks".
*/
let controlBookmark = function() {
    model.toggleBookmark();
    recipeView.update(model.state.recipe);
    bookmarkView.render(model.state.bookmarkedRecipes);
};
recipeView.aEL3(controlBookmark);