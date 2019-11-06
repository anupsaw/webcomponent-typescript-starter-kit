import template from './shadow-root-element.html'
export class ShadowRootElement extends HTMLElement {

    constructor() {
        super();
        const root = this.attachShadow({ mode: 'open' });
        root.innerHTML = template;

    }
}