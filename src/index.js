import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './js/App';
import { unregister } from './js/registerServiceWorker';
unregister();

ReactDOM.render(<App />, document.getElementById('root'));
