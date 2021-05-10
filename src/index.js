import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import { BrowserRouter as Router } from "react-router-dom";





ReactDOM.render(
    <ErrorBoundry>
        <Router>
            <App />
        </Router>
    </ErrorBoundry>,
    document.querySelector('#root')
)



