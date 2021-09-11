import "./destination.css";
import React from "react";
import { Link } from "react-router-dom";

function Destination(props) {
  const buttonStyle = { fontSize: "13px", padding: "1.2rem 2rem" };
  const destinationId = props.details.name.replace(/\s+/g, "-").toLowerCase();

  return (
    <div className="rows destination open">
      <img
        src={props.details.image[0]}
        alt={props.details.name.toLowerCase()}
        crossOrigin="true"
      />
      <div className="cols content">
        <span
          className="name"
          style={{
            textAlign: "left",
            fontSize: "20px",
            fontWeight: "500",
            textTransform: "capitalize",
            margin: "0 0 1.5rem",
          }}
        >
          {`${props.number}. ${props.details.name}`}
        </span>
        <span className="line-clamp line-clamp-5 description">
          {props.details.description}
        </span>
        <div className="rows button-container">
          <Link
            to={`/destinations/${destinationId}`}
            className="rows center btn"
            style={buttonStyle}
          >
            Explore
          </Link>
          <Link
            to={`/virtual/${destinationId}`}
            className="rows center btn"
            style={buttonStyle}
          >
            Virtual Tour
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Destination;
