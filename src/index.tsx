import React from 'react';
import ReactDOM from 'react-dom/client';
import './globals.st.css';
import { App } from './app';

ReactDOM.createRoot(document.body.appendChild(document.createElement('div'))).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
