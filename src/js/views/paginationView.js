import View from './view';   import icons from 'url:../../img/icons.svg';  


class PaginationView extends View {
    parentElement = document.querySelector("div.pagination");
    aEL1(fct) {  /* Adauga 'addEventListener'. */
        this.parentElement.addEventListener("click", function(e) {
            if (e.target.closest("button")) fct(+e.target.closest("button").dataset.goto);
        });
    }
    generateMarkup() {  /* Genereaza cod HTML. */
        let currentPage = this.data[0];
        let totalPages = this.data[1];
        /* Avem pagina doar inainte. */
        if (currentPage === 1 && totalPages > currentPage) {
            return `<button data-goto="${currentPage + 1}" class="btn--inline pagination__btn--next">
                        <span>Page ${currentPage + 1}</span><svg class="search__icon"><use href="${icons}#icon-arrow-right"></use></svg>
                    </button>`;
        }
        /* Avem pagina doar inapoi. */
        if (currentPage === totalPages && currentPage > 1) {
            return `<button data-goto="${currentPage - 1}" class="btn--inline pagination__btn--prev">
                        <svg class="search__icon"><use href="${icons}#icon-arrow-left"></use></svg><span>Page ${currentPage - 1}</span>
                    </button>`;
        }
        /* Avem pagina si inainte si inapoi. */
        if (currentPage > 1 && currentPage < totalPages) {
            return `<button data-goto="${currentPage - 1}" class="btn--inline pagination__btn--prev">
                        <svg class="search__icon"><use href="${icons}#icon-arrow-left"></use></svg><span>Page ${currentPage - 1}</span>
                    </button>
                    <button data-goto="${currentPage + 1}" class="btn--inline pagination__btn--next">
                        <span>Page ${currentPage + 1}</span><svg class="search__icon"><use href="${icons}#icon-arrow-right"></use></svg>
                    </button>
                    `;
        }
        return "";
    }
}
export default new PaginationView();