import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  Navigation from "./Navigation"
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Navigation LogoTitle="miakis nav"/>, document.getElementById('root'));


serviceWorker.unregister();
