import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/index';
import { Provider } from 'react-redux';
import './config'; //axios拦截器
import Router from './router'

ReactDOM.render(<Provider store={store}><Router /></Provider>, document.getElementById('root'));
