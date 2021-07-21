import './main.css';
import React from 'react';
import Navigation from '../navigationBar';
import Destination from './destinationItem';
import MarketItem from './marketItem';
import pic from '../../resources/images/julian-schultz-JP_nc0jEakE-unsplash.jpg';

function AboutSection(props) {
    return (
        <div className="cols center">
            <h1>WELCOME TO TGUIDE</h1>
            <h4>Your virtual journey starts with just a click</h4>
            <button onClick={props.navigationHandler} id="1">Destinations</button>
        </div>
    );
}

function TGuideSection(props) {
    return (
        <div className="cols center">
            <h1>TOUR GUIDE PAGE</h1>
            <h4>Your virtual journey starts with just a click</h4>
            <button onClick={props.navigationHandler} id="3">see guides</button>
        </div>
    );
}

function VTourSection(props) {
    return (
        <div className="cols center">
            <h1>Virtual Tour</h1>
            <h4>Your virtual journey starts with just a click</h4>
            <button>see guides</button>
        </div>
    );
}

function DestinationSection(props) {
    const destinations = [
        {
            image: "https://static.wixstatic.com/media/d0a4b2_9ea4562bbfc94a5c991ec810637f7bb5.png/v1/fill/w_740,h_494,al_c,lg_1,q_95/d0a4b2_9ea4562bbfc94a5c991ec810637f7bb5.webp",
            name: "Vume Pottery",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum assumenda ut, facilis, soluta autem vero earum suscipit consectetur in officiis sint possimus adipisci velit eos. Quis quos eius excepturi eveniet?"
        },
        {
            image: "https://static.wixstatic.com/media/d0a4b2_9ea4562bbfc94a5c991ec810637f7bb5.png/v1/fill/w_740,h_494,al_c,lg_1,q_95/d0a4b2_9ea4562bbfc94a5c991ec810637f7bb5.webp",
            name: "kyabobo",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum assumenda ut, facilis, soluta autem vero earum suscipit consectetur in officiis sint possimus adipisci velit eos. Quis quos eius excepturi eveniet?"
        }, {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Inside_view_of_the_Fort_Prinzenstein_in_Keta%2C_Ghana._9.jpg/320px-Inside_view_of_the_Fort_Prinzenstein_in_Keta%2C_Ghana._9.jpg",
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
        <div className="cols center destination-section-inner">
            <h1>Choose A Destination</h1>
            {/* <h4>Your virtual journey starts with just a click</h4> */}
            <div className="rows destination-container">
                { 
                    destinations.map((aDestination, index) => {
                       return <Destination key={ index } image={ aDestination.image } name={ aDestination.name } description={ aDestination.description} handler={ props.navigationHandler }/>
                    })
                }
            </div>
        </div>
    );
}

function MarketSection(props) {
    const items = [
        {
            image: "https://static.wixstatic.com/media/d0a4b2_9ea4562bbfc94a5c991ec810637f7bb5.png/v1/fill/w_740,h_494,al_c,lg_1,q_95/d0a4b2_9ea4562bbfc94a5c991ec810637f7bb5.webp",
            name: "Vume Pottery",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum assumenda ut, facilis, soluta autem vero earum suscipit consectetur in officiis sint possimus adipisci velit eos. Quis quos eius excepturi eveniet?"
        },
        {
            image: "https://static.wixstatic.com/media/d0a4b2_9ea4562bbfc94a5c991ec810637f7bb5.png/v1/fill/w_740,h_494,al_c,lg_1,q_95/d0a4b2_9ea4562bbfc94a5c991ec810637f7bb5.webp",
            name: "kyabobo",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum assumenda ut, facilis, soluta autem vero earum suscipit consectetur in officiis sint possimus adipisci velit eos. Quis quos eius excepturi eveniet?"
        }, {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Inside_view_of_the_Fort_Prinzenstein_in_Keta%2C_Ghana._9.jpg/320px-Inside_view_of_the_Fort_Prinzenstein_in_Keta%2C_Ghana._9.jpg",
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
        <div className="cols center market-section-inner">
            <h1>Welcome to Marketplace</h1>
            <h4>Take a trip in your favourite market place</h4>
            <div className="rows destination-container">
                {items.map((anItem, index) => <MarketItem key={index} image={anItem.image} name={anItem.name} description={anItem.description}/>)}
            </div>
        </div>
    );
}

function selectSection(state, props) {
    // console.log(props.currentSection, true);
    switch(props.currentSection){
        case 1: 
            return <DestinationSection currentSection={ props.currentSection } navigationHandler={ props.navigationHandler }/>;

        case 2: 
            return <TGuideSection currentSection={ props.currentSection } navigationHandler={ props.navigationHandler } />;

        case 3: 
            return <MarketSection currentSection={ props.currentSection } navigationHandler={ props.navigationHandler } />;

        case 5:
            return <VTourSection currentSection={ props.currentSection } navigationHandler={ props.navigationHandler } />;
        case 0:
        default:
            return <AboutSection currentSection={ props.currentSection } navigationHandler={ props.navigationHandler } />;
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
            <main className={`${(this.props.currentSection === 3)? 'no-video' : ''}`}>
                <Navigation sections={ this.props.sections.filter(aSection => aSection.isInNavigationBar === true) } navigationHandler={ this.props.navigationHandler }/>
                <section className="cols active">
                    { selectSection(this.state, this.props) }
                </section>
                <video autoPlay muted loop id="page-background-video">
                    <source src={this.props.backgroundVideo} type="video/mp4" />
                </video>
            </main>
        );
    }
}

export default MainComponent;