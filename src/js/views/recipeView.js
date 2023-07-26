import {Fraction} from 'fractional';   import icons from 'url:../../img/icons.svg';     import View from './view';


class RecipeView extends View {
    parentElement = document.querySelector("div.recipe");
    aEL1(fct) {  /* Adauga 'addEventListener'. */
        ['load', 'hashchange'].forEach(function(event) { window.addEventListener(event, fct); });
    }
    aEL2(fct) {  /* Adauga 'addEventListener'. */
        this.parentElement.addEventListener("click", function(e) {
            if (e.target.closest(".btn--change-servings")) {
                if (+e.target.closest(".btn--change-servings").dataset.servings >= 1) fct(+e.target.closest(".btn--change-servings").dataset.servings);
            }
        });
    }
    aEL3(fct) {  /* Adauga 'addEventListener'. */
        this.parentElement.addEventListener("click", function(e) {
            if (e.target.closest(".btn-bookmarked")) {
                fct();
            }
        });
    }
    generateMarkup() {  /* Genereaza cod HTML. */
        return `<figure class="recipe__fig">
                    <img src="${this.data.image}" alt="${this.data.title}" class="recipe__img">
                    <h1 class="recipe__title"><span>${this.data.title}</span></h1>
                </figure>
                <div class="recipe__details">
                    <div class="recipe__info">
                        <svg class="recipe__info-icon"><use href="${icons}#icon-clock"></use></svg>
                        <span class="recipe__info-data recipe__info-data--minutes">${this.data.cookingTime}</span>
                        <span class="recipe__info-text">minutes</span>
                    </div>
                    <div class="recipe__info">
                        <svg class="recipe__info-icon"><use href="${icons}#icon-users"></use></svg>
                        <span class="recipe__info-data recipe__info-data--people">${this.data.servings}</span>
                        <span class="recipe__info-text">servings</span>
                        <div class="recipe__info-buttons">
                            <button class="btn--tiny btn--change-servings" data-servings="${this.data.servings - 1}"><svg><use href="${icons}#icon-minus-circle"></use></svg></button>
                            <button class="btn--tiny btn--change-servings" data-servings="${this.data.servings + 1}"><svg><use href="${icons}#icon-plus-circle"></use></svg></button>
                        </div>
                    </div>
                    <div class="recipe__user-generated"></div>
                    <button class="btn--round btn-bookmarked"><svg class=""><use href="${icons}#icon-bookmark${this.data.bookmarked ? "-fill" : ""}"></use></svg></button>
                </div>
                <div class="recipe__ingredients">
                    <h2 class="heading--2">Recipe ingredients</h2>
                    <ul class="recipe__ingredient-list">
                        ${this.data.ingredients.map(function(ingr) {
                            return `<li class="recipe__ingredient">
                                        <svg class="recipe__icon"><use href="${icons}#icon-check"></use></svg>
                                        <div class="recipe__quantity">${ingr.quantity ? new Fraction(ingr.quantity).toString() : ""}</div>
                                        <div class="recipe__description"><span class="recipe__unit"> ${ingr.unit}</span> ${ingr.description}</div>
                                    </li>`;
                        }).join("")}
                    </ul>
                </div>
                <div class="recipe__directions">
                    <h2 class="heading--2">How to cook it</h2>
                    <p class="recipe__directions-text">This recipe was carefully designed and tested by <span class="recipe__publisher">${this.data.publisher}</span>. Please check out directions at their website.</p>
                    <a class="btn--small recipe__btn" href="${this.data.sourceUrl}" target="_blank">
                        <span>Directions</span><svg class="search__icon"><use href="${icons}#icon-arrow-right"></use></svg>
                    </a>
                </div>`;
    }
}
export default new RecipeView();