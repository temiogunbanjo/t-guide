import React, { useContext, useEffect } from "react";
import AppContext from "../context/appContext";
import Destination from "../components/DestinationItem";

const DESTINATIONS = require("../db/destinationlist").data;

function DestinationSection(props) {
  let appContext = useContext(AppContext);

  useEffect(() => {
    appContext.setCurrentSection(1);
  }, []);

  console.log(appContext);

  return (
    <AppContext.Consumer>
      {(context) => {
        return (
        <div className="cols center destination-section-inner">
          <h1>Choose A Destination</h1>
          {/* <h4>Your virtual journey starts with just a click</h4> */}
          <div className="rows destination-container">
            {DESTINATIONS.map((aDestination, index) => {
              // console.log(aDestination);
              return (
                <Destination
                  key={index}
                  number={index + 1}
                  handler={context.navigationHandler}
                  details={aDestination}
                />
              );
            })}
          </div>
        </div>
      )}}
    </AppContext.Consumer>
  );
}

export default DestinationSection;
