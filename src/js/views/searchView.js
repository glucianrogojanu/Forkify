class SearchView {
    parentElement = document.querySelector("form.search");
    aEL1(fct) {  /* Adauga 'addEventListener'. */
        this.parentElement.addEventListener("submit", function(e) {
            e.preventDefault();
            fct();
            document.querySelector("input.search__field").value = ""; document.querySelector("input.search__field").blur();
        });
    }
}
export default new SearchView();