import './guideitem.css';
import React from 'react';

function GuideItem(props){
    const nameElementStyle = {
        textAlign: "left",
        fontSize: "20px",
        fontWeight: "500",
        textTransform: "capitalize",
        margin: "0 0 0.5rem"
    };
    const buttonStyle = {
        fontSize: "13px",
        padding: "1.2rem 2rem"
    };
    const { details } = props;
    const guideDetails = JSON.stringify(details);

    return(
        <div className="cols market-item">
            <img src={ details.image } alt={ details.name.toLowerCase() } className="rows center"/>
            <div className="cols content">
                <span className="name" style={nameElementStyle}>{ details.name }</span>
                <span className="line-clamp line-clamp-5 description">{ details.description }</span>
                <div className="rows button-container">
                    <button style={ buttonStyle } onClick={ props.handler } data-id="5" data-options={ guideDetails }>Check Out</button>
                </div>
            </div>
        </div>
    );
}

export default GuideItem;