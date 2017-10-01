// https://reactjs.org/docs/web-components.html
import React from "react";
import ReactDOM from "react-dom";

import Greetings from "../components/Greetings";

const proto = Object.create(HTMLElement.prototype, {
    attachedCallback: {
        value: function() {
            const mountPoint = document.createElement('span');
            this.createShadowRoot().appendChild(mountPoint);

            const name = this.getAttribute('name');
            ReactDOM.render(<Greetings name={name} />, mountPoint);
        }
    }
});
document.registerElement('itera-greetings', {prototype: proto});