import template from './custom-element.html'
import css from './custom-element.css'
export class CustomElement extends HTMLElement {

    constructor() {
        super();
        this.innerHTML = template;
    }
}