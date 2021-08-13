import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from '../context/appContext';

function VTourIntro(props) {
  const appContext = useContext(AppContext);

  useEffect(() => {
    document.querySelector('main').classList.toggle('no-video', true);
    appContext.setCurrentSection(3);
  });
  
  return (
    <AppContext.Consumer>
      {(context) => (
        <div className="cols">
          <Link
            to="/destinations"
            style={{ marginRight: "auto" }}
            onClick={context.navigationHandler}
            data-id="1"
            className="btn back-button-style"
          >
            <i
              data-id="1"
              className="icofont-caret-left"
              style={{ fontSize: "1.8rem" }}
            ></i>
            <span data-id="1">Go back</span>
          </Link>

          <div className="cols center iframe-wrapper" style={{minHeight: "300px"}}>
            <h4 style={{ width: "100%", textAlign: "center" }}>Coming soon...</h4>
          </div>
        </div>
      )}
    </AppContext.Consumer>
  );
}

export default VTourIntro;
