import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HelloWorldApp } from './HelloWorldApp';
import { CounterApp } from './CounterApp';
// import App from './HelloWorldApp'


import './styles.css';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        
       <CounterApp value={123} > </CounterApp>
    </React.StrictMode>
)