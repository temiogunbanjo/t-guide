import './marketitem.css';
import React from 'react';

function MarketItem(props){
    const buttonStyle = {fontSize: "13px", padding: "1.2rem 2rem"};
    return(
        <div className="cols market-item">
            <img src={ props.image } alt={ props.name.toLowerCase() }/>
            <div className="cols content">
                <span className="name" style={{ textAlign: "left", fontSize: "20px", fontWeight: "500", textTransform: "capitalize", margin: "0 0 0.5rem"}}>{props.name}</span>
                <span className="line-clamp line-clamp-5 description">{ props.description }</span>
                <div className="rows button-container">
                    <button style={ buttonStyle }>Explore</button>
                    <button style={ buttonStyle } onClick={ props.handler } id="5">Virtual Tour</button>
                </div>
            </div>
        </div>
    );
}

export default MarketItem;