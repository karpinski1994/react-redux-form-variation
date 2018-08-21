import React from 'react';
import '../App.css';

export const AppHeader = () => {

    return (
        <header>
            <div className="header__logo">
                <img src="../logo.png" alt="Logo Unamo" title="Go to homepage"/>
            </div>
            <div className = "header__link" >
                <a href="" title="Go to Unamo's page">www.unamo.com</a>
            </div>
        </header>
    );
};