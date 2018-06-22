import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


let appRoot = document.getElementById("app-info");
ReactDOM.render(<IndecisionApp />,appRoot);

