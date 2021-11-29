import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux'
import configureStore from './redux/store/store';

ReactDOM.render(
    <Provider store={configureStore}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

reportWebVitals();