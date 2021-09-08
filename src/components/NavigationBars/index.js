import "./navigation.css";
import React from "react";
import { Link } from "react-router-dom";

import AppContext from '../../context/appContext';

function NavigationButton(props) {
  return (
    <Link
      to={props.url}
      className="rows btn navigationbar-btn"
      data-show={props.show}
      onClick={props.navigationHandler}
    >
      <i className={props.icon} data-show={props.show}></i>
      <span data-show={props.show} className="hide-on-mobile">
        {props.name}
      </span>
    </Link>
  );
}

function Navigation(props) {
  return (
    <AppContext.Consumer>
      {(context) => {
        const navSections = context.sections.filter(
          (aSection) => aSection.isInNavigationBar === true
        );
        return (
          <nav className="rows">
            <button id="navigation-button-left" className="btn scroller">
              <i className="icofont-caret-left"></i>
            </button>

            <div className="rows navigations">
              {navSections.map((aSection, index) => {
                const show = index !== 0 && index !== 1;
                return (
                  <NavigationButton
                    key={index}
                    show={show}
                    name={aSection.name}
                    icon={aSection.icon}
                    url={aSection.url}
                    navigationHandler={context.navigationHandler}
                  />
                );
              })}
            </div>

            <button id="navigation-button-right" className="btn scroller">
              <i className="icofont-caret-right"></i>
            </button>
          </nav>
        );
      }}
    </AppContext.Consumer>
  );
}

export default Navigation;
