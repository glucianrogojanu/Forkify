import icons from 'url:../../img/icons.svg';  


export default class View {
    renderSpinner() {  /* Introduce cod HTML. */
        this.parentElement.innerHTML = "";
        this.parentElement.insertAdjacentHTML("afterbegin", `<div class="spinner"><svg><use href="${icons}#icon-loader"></use></svg></div>`);
    }
    renderError(err) {  /* Introduce cod HTML. */
        this.parentElement.innerHTML = "";
        this.parentElement.insertAdjacentHTML("afterbegin", `<div class="error">
                                                                <div><svg><use href="${icons}#icon-alert-triangle"></use></svg></div>
                                                                <p>${err}</p>
                                                            </div>`);
    }
    render(data) {  /* Introduce cod HTML. */
        this.data = data;
        this.parentElement.innerHTML = "";
        this.parentElement.insertAdjacentHTML("afterbegin", this.generateMarkup());
    } 
    update(data) {  /* Modifica diferentele dintre vechiul si noul cod HTML, fara sa fim nevoiti sa il stergem pe cel vechi ca sa-l adaugam pe cel nou. */
        this.data = data;
        let curElements = Array.from(this.parentElement.querySelectorAll("*"));
        let newElements = Array.from(document.createRange().createContextualFragment(this.generateMarkup()).querySelectorAll("*"));
        newElements.forEach((newEl, i) => {
            let curEl = curElements[i];
            if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue && newEl.firstChild?.nodeValue.trim() !== "") curEl.textContent = newEl.textContent;  /* Schimba textul. */
            if (!newEl.isEqualNode(curEl)) Array.from(newEl.attributes).forEach(attr => curEl.setAttribute(attr.name, attr.value));  /* Schimba atributele. */
        });
    }
}