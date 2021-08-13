import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/appContext";

function LandingSection(props) {
  let appContext = useContext(AppContext);

  useEffect(() => {
    appContext.setCurrentSection(0);
  });

  return (
    <AppContext.Consumer>
      {(context) => (
        <div className="cols center">
          <h1>WELCOME TO TGUIDE</h1>
          <h4>Connecting you to the best of Ghana</h4>
          <Link
            to="/destinations"
            className="btn"
            onClick={context.navigationHandler}
            data-id="1"
          >
            Destinations
          </Link>
        </div>
      )}
    </AppContext.Consumer>
  );
}

export default LandingSection;
