import React, { useEffect } from "react";

import "./header.css";
import logo from "../../resources/images/DeeplugTEO.png";
import AppContext from "../../context/appContext";

function AppHeader(props) {
  useEffect(() => {
    let dropdowndisplay = null;
    document.querySelectorAll(".dropdown-action-btn").forEach(el => {
      el.addEventListener('click', function(ev) {
        const content = ev.currentTarget.nextSibling;
        content.style.display = 'flex';

        if (dropdowndisplay) clearTimeout(dropdowndisplay);
        dropdowndisplay = setTimeout(() => {
          content.style.display = 'none';
        }, 8000);
        // console.log();
      });
    });
  });

  return (
    <AppContext.Consumer>
      {(context) => {
        console.log(context);
        return (
          <header
            className="rows"
            style={{ backgroundColor: "var(--primary-color)" }}
          >
            <div className="rows">
              <h1>{context.sections[context.currentSection].name}</h1>
              <a href="">
                <img src={logo} className="logo" alt="" />
              </a>
              <i className="hide-on-mobile"></i>
            </div>

            <div className="rows search-bar-body">
              <div className="rows center dropdown-wrapper">
                <button
                  className="dropdown-action-btn"
                  style={{
                    margin: "0 1rem",
                    fontSize: "1.8rem",
                    backgroundColor: "transparent",
                    border: "none",
                    color: "white",
                  }}
                >
                  <i className="icofont-navigation-menu"></i>
                </button>

                <div className="cols dropdown-content">
                  <a href="/team" className="rows">
                    <i className="icon icofont-users-alt-5"></i>
                    <span>Team</span>
                    <i className="icon icofont-thin-right"></i>
                  </a>
                  <a href="/virtual" className="rows">
                    <i className="icon icofont-lens"></i>
                    <span>About Virtual Experience</span>
                    <i className="icon icofont-thin-right"></i>
                  </a>
                </div>
              </div>

              <div className="rows search-wrapper" style={{ color: "white" }}>
                <input type="search" placeholder="search for something" />
                <button>
                  <i className="icofont-search"></i>
                </button>
              </div>
            </div>
          </header>
        );
      }}
    </AppContext.Consumer>
  );
}

export default AppHeader;
