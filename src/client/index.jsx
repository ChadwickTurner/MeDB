import React from 'react';
import ReactDOM from 'react-dom';
import HomePanel from './MovieInput.jsx';

window.onload = () => {
    ReactDOM.render(
        <HomePanel />,
        document.getElementById('app')
    );
};