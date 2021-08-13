import "./guideitem.css";
import React from "react";
import { Link } from "react-router-dom";
import Rating from "../Rating";

function GuideItem(props) {
  const nameElementStyle = {
    textAlign: "left",
    fontSize: "20px",
    fontWeight: "500",
    textTransform: "capitalize",
    margin: "0 0 0.5rem",
  };
  const buttonStyle = {
    fontSize: "13px",
    padding: "1.2rem 2rem",
  };
  const { details } = props;

  return (
    <div className="cols guide-item">
      <img
        src={details.image}
        alt={details.name.toLowerCase()}
        className="rows center"
      />
      <div className="cols content">
        <span className="name" style={nameElementStyle}>
          {details.name}
        </span>
        <span className="line-clamp line-clamp-5 description">
          {details.description}
        </span>
        <Rating rating={details.rating}/>
        <div className="rows button-container">
          <Link
            to={`/guides/${details.uuid}`}
            className="btn more-button"
            style={buttonStyle}
            onClick={props.handler}
            data-show={false}
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GuideItem;
