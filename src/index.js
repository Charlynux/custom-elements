import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import "./custom-elements/itera-greetings";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
