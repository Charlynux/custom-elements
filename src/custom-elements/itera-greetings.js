import React from "react";
import ReactDOM from "react-dom";

import Greetings from "../components/Greetings";

class IteraGreetings extends HTMLElement {
    connectedCallback() {
        const mountPoint = document.createElement('span');
        this.attachShadow({mode: 'open'}).appendChild(mountPoint);

        const name = this.getAttribute('name');
        ReactDOM.render(<Greetings name={name} />, mountPoint);
    }
}

customElements.define('itera-greetings', IteraGreetings);