import View from './view';


class ResultsView extends View {
    parentElement = document.querySelector("ul.results");
    generateMarkup() {  /* Genereaza cod HTML. */
        return this.data.map(function(result) {
            return `<li class="preview">
                        <a class="preview__link ${result.id === window.location.hash.slice(1) ? "preview__link--active" : ""}" href="#${result.id}">
                            <figure class="preview__fig"><img src="${result.image}" alt="${result.title}"></figure>
                            <div class="preview__data">
                                <h4 class="preview__title">${result.title}</h4>
                                <p class="preview__publisher">${result.publisher}</p>
                            </div>
                        </a>
                    </li>`;
        }).join("");
    }
}
export default new ResultsView();