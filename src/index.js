import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store/index';
import { Provider } from 'react-redux';
import './axios';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
