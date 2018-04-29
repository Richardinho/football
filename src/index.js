import React from 'react';
import ReactDOM from 'react-dom';
import 'reset-css';
import './styles/headers.css';
import './index.module.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
