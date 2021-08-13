import React from 'react';

import './header.css';
import logo from '../../resources/images/DeeplugTEO.png';

import AppContext from '../../context/appContext';

function AppHeader(props){
    return(
        <AppContext.Consumer>
            {(context) => {
                console.log(context)
                return (
                    <header className="rows" style={{ backgroundColor: "var(--primary-color)"}}>
                        <h1>{ context.sections[context.currentSection].name }</h1>
                        <a href=""><img src={ logo } className="logo" alt=""/></a>
                        <i className="icofont-phone hide-on-mobile"></i>
                    </header>
                )
            }}
        </AppContext.Consumer>
    );
}

export default AppHeader;