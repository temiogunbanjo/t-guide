import './destination.css';
import React from 'react';

function Destination(props){

    const buttonStyle = {fontSize: "13px", padding: "1.2rem 2rem"};
    const destinationDetails = JSON.stringify(props.details);
    return(
        <div className="cols destination">
            <img src={ props.details.image } alt={ props.details.name.toLowerCase() }/>
            <div className="cols content">
                <span className="name" style={{ textAlign: "left", fontSize: "20px", fontWeight: "500", textTransform: "capitalize", margin: "0 0 0.5rem"}}>{props.name}</span>
                <span className="line-clamp line-clamp-5 description">{ props.details.description }</span>
                <div className="rows button-container">
                    <button style={ buttonStyle } onClick={ props.handler } data-id="4" data-options={ destinationDetails }>Explore</button>
                    <button style={ buttonStyle } onClick={ props.handler } data-id="3" data-options={ destinationDetails }>Virtual Tour</button>
                </div>
            </div>
        </div>
    );
}

export default Destination;