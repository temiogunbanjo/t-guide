import './main.css';
import Navigation from '../navigationBar';
import pic from '../../resources/images/julian-schultz-JP_nc0jEakE-unsplash.jpg'
import React from 'react';

function AboutSection(props) {
    return (
        <div className="cols center">
            <h1>WELCOME TO TGUIDE</h1>
            <h4>Your virtual journey starts with just a click</h4>
            <button onClick={props.navigationHandler} id="1">Destinations</button>
        </div>
    );
}

function Destination(props){
    const buttonStyle = {fontSize: "13px", padding: "1.2rem 2rem"};
    return(
        <div className="cols destination">
            <img src={props.image} alt={props.name.toLowerCase()}/>
            <div className="cols content">
                <span className="name" style={{textAlign: "left", fontSize: "18px", fontWeight: "600", textTransform: "capitalize", margin: "0 0 0.5rem"}}>{props.name}</span>
                <span className="line-clamp line-clamp-5 description">{props.description}</span>
                <div className="rows button-container">
                    <button style={buttonStyle}>Explore</button>
                    <button style={buttonStyle}>Virtual Tour</button>
                </div>
            </div>
        </div>
    );
}

function DestinationSection(props) {
    const destinations = [
        {
            image: pic,
            name: "kyabobo",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum assumenda ut, facilis, soluta autem vero earum suscipit consectetur in officiis sint possimus adipisci velit eos. Quis quos eius excepturi eveniet?"
        }, {
            image: pic,
            name: "Fort Prinzenstein",
            description: "Lorem ipsum dolor colr et sor skskkdk sdndjnkdnknkds md nkdknjksdk"
        }, {
            image: pic,
            name: "Volta Lake",
            description: "Lorem ipsum dolor colr et sor skskkdk sdndjnkdnknkds md nkdknjksdk"
        }, {
            image: pic,
            name: "Volta Lake",
            description: "Lorem ipsum dolor colr et sor skskkdk sdndjnkdnknkds md nkdknjksdk"
        }
    ];
    return (
        <div className="cols center">
            <h1>Choose A Destination</h1>
            {/* <h4>Your virtual journey starts with just a click</h4> */}
            <div className="rows destination-container">
                {destinations.map(aDestination => <Destination image={aDestination.image} name={aDestination.name} description={aDestination.description}/>)}
            </div>
        </div>
    );
}

function selectSection(state, props) {
    // console.log(props.currentSection, true);
    switch(props.currentSection){
        case 1: 
            return <DestinationSection />;

        case 0:
        default:
            return <AboutSection currentSection={props.currentSection} navigationHandler={props.navigationHandler}/>;
    }
}

class MainComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentSection: props.currentSection
        }
    }

    componentDidMount(){
    }

    render(){
        return(
            <main>
                <Navigation sections={this.props.sections} navigationHandler={this.props.navigationHandler}/>
                <section className="cols active">
                    {selectSection(this.state, this.props)}
                </section>
                <video autoPlay muted loop id="page-background-video">
                    <source src={this.props.backgroundVideo} type="video/mp4" />
                </video>
            </main>
        );
    }
}

export default MainComponent;