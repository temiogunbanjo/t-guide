import './navigation.css';
import React from 'react';

function NavigationButton(props) {
    return (
        <button className="rows btn" id={props.id} onClick={props.navigationHandler}>
            <i className={props.icon} id={props.id}></i>
            <span id={props.id} className="hide-on-mobile">{props.name}</span>
        </button>
    );
}

function Navigation(props) {
    return (
        <nav className="rows">
            <button id="navigation-button-left" className="btn scroller">
                <i className="icofont-caret-left"></i>
            </button>
            <div className="rows navigations">
                { 
                    props.sections.map((aSection, index) => {
                        return <NavigationButton key={index} id={index} name={aSection.name} icon={aSection.icon} navigationHandler={props.navigationHandler}/>
                    })
                }
            </div>
            <button id="navigation-button-right" className="btn scroller">
                <i className="icofont-caret-right"></i>
            </button>
        </nav>
    );    
}

export default Navigation;