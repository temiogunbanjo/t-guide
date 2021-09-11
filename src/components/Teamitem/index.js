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
    <div className="cols center team-item border">
      <img
        src={details.image}
        alt={details.name.toLowerCase()}
        className="rows center"
      />
      <div className="rows center contacts">
        {/* <a href='#'
          target='_blank'
          className="rows center"
          style={{padding: '0.5rem !important'}}
        >
          <i className='icofont-phone' style={{marginRight: '1rem'}}></i>
          <span>Call</span>
        </a> */}

        <a href={details.contacts['linkedin']}
          target='_blank'
          className="rows center"
          style={{padding: '0.5rem !important'}}
        >
          <i className='icofont-linkedin' style={{marginRight: '1rem'}}></i>
          <span>LinkedIn</span>
        </a>
      </div>
      <div className="cols content">
        <span className="name" style={nameElementStyle}>
          {details.name}
        </span>
        <h5
          className="title"
          style={{
            textAlign: "center",
            fontSize: "15px",
            marginTop: "0.3rem",
          }}
        >
          {details.title}
        </h5>
        <span
          className="nick"
          style={{
            fontWeight: '500',
            textAlign: "center",
            fontSize: "14px",
            marginTop: "0.5rem"
          }}
        >
          {`(${details.nick})`}
        </span>
        <img
          className='emoticon'
          src={details.emoticon}
          alt=""
          onClick={
            ((ev) => {ev.currentTarget.classList.toggle('open')})
          }
        />
      </div>
    </div>
  );
}

export default TeamItem;
