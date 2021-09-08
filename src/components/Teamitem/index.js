import "./teamitem.css";
import React from "react";

function TeamItem(props) {
  const nameElementStyle = {
    textAlign: "left",
    fontSize: "22px",
    fontWeight: "500",
    textTransform: "capitalize",
    margin: "0",
  };

  const { details } = props;

  return (
    <div className="cols team-item">
      <img
        src={details.image}
        alt={details.name.toLowerCase()}
        className="rows center"
      />
      <div className="cols content">
        <span className="name" style={nameElementStyle}>
          {details.name}
        </span>
        <span
          className="title"
          style={{
            textAlign: "left",
            fontSize: "14px",
            marginTop: "0.5rem",
            marginBottom: "1.5rem",
          }}
        >
          {details.title}
        </span>
        <span className="line-clamp line-clamp-5 description">
          {details.description}
        </span>
      </div>
    </div>
  );
}

export default TeamItem;
