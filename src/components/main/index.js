import './main.css';
import React from 'react';
import Navigation from '../navigationBar';
import Destination from './destinationItem';
import GuideItem from './guideitem';
import pic from '../../resources/images/julian-schultz-JP_nc0jEakE-unsplash.jpg';
import aVideo from '../../resources/videos/Ghana Drone Tour.mp4'; // Dummy example

// Contains all destinations and their details
const DESTINATIONS = [
    {
        image: "https://static.wixstatic.com/media/d0a4b2_9ea4562bbfc94a5c991ec810637f7bb5.png/v1/fill/w_740,h_494,al_c,lg_1,q_95/d0a4b2_9ea4562bbfc94a5c991ec810637f7bb5.webp",
        video: aVideo,
        name: "Vume Pottery",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum assumenda ut, facilis, soluta autem vero earum suscipit consectetur in officiis sint possimus adipisci velit eos. Quis quos eius excepturi eveniet?"
    },
    {
        image: "https://static.wixstatic.com/media/d0a4b2_9ea4562bbfc94a5c991ec810637f7bb5.png/v1/fill/w_740,h_494,al_c,lg_1,q_95/d0a4b2_9ea4562bbfc94a5c991ec810637f7bb5.webp",
        video: "", // can also be a link to a video
        name: "kyabobo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum assumenda ut, facilis, soluta autem vero earum suscipit consectetur in officiis sint possimus adipisci velit eos. Quis quos eius excepturi eveniet?"
    }, {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Inside_view_of_the_Fort_Prinzenstein_in_Keta%2C_Ghana._9.jpg/320px-Inside_view_of_the_Fort_Prinzenstein_in_Keta%2C_Ghana._9.jpg",
        video: "",
        name: "Fort Prinzenstein",
        description: "Lorem ipsum dolor colr et sor skskkdk sdndjnkdnknkds md nkdknjksdk"
    }, {
        image: pic,
        video: "",
        name: "Volta Lake",
        description: "Cum assumenda ut, facilis, soluta autem vero earum suscipit consectetur in officiis sint possimus adipisci velit eos"
    }, {
        image: pic,
        video: "",
        name: "Wli Waterfall",
        description: "Lorem ipsum dolor colr et sor skskkdk sdndjnkdnknkds md nkdknjksdk"
    },{
        image: pic,
        video: "",
        name: "Tafi Atome Monkey Sanctuary",
        description: "Lorem ipsum dolor colr et sor skskkdk sdndjnkdnknkds md nkdknjksdk"
    },{
        image: pic,
        video: "",
        name: "Tafi Abuipe Cultural Centre",
        description: "Lorem ipsum dolor colr et sor skskkdk sdndjnkdnknkds md nkdknjksdk"
    },{
        image: pic,
        video: "",
        name: "Mountain Afadzato",
        description: "Lorem ipsum dolor colr et sor skskkdk sdndjnkdnknkds md nkdknjksdk"
    },{
        image: pic,
        video: "",
        name: "Volta National Museum",
        description: "Lorem ipsum dolor colr et sor skskkdk sdndjnkdnknkds md nkdknjksdk"
    },{
        image: pic,
        video: "",
        name: "Atorkor Slave Market",
        description: "Lorem ipsum dolor colr et sor skskkdk sdndjnkdnknkds md nkdknjksdk"
    },
];

function AboutSection(props) {
    return (
        <div className="cols center">
            <h1>WELCOME TO TGUIDE</h1>
            <h4>Connecting you to the best of Ghana</h4>
            <button onClick={ props.navigationHandler } data-id="1">Destinations</button>
        </div>
    );
}

function VTourSection(props) {
    const { details } = props;
    const parsedDetails = (JSON.parse(details)) ? JSON.parse(details) : {};

    console.log({parsedDetails});
    return (
        <div className="cols center">
            <h1>{ parsedDetails.name }</h1>
            <video autoPlay loop controls className="virtual-tour-video">
                <source src={ parsedDetails.video } type="video/mp4" />
            </video>
        </div>
    );
}

function DestinationDetails(props) {
    const { details } = props;
    const parsedDetails = (JSON.parse(details)) ? JSON.parse(details) : {};

    return (
        <div className="cols destination-details-section-inner">
            <h1>{ parsedDetails.name }</h1>
            <img src={ parsedDetails.image } alt={ parsedDetails.name.toLowerCase() }/>
            <span style={{fontSize: "18px"}}>{ parsedDetails.description }</span>
            <button data-id="1" onClick={ props.navigationHandler }>Go back</button>
        </div>
    );
}

function DestinationSection(props) {

    return (
        <div className="cols center destination-section-inner">
            <h1>Choose A Destination</h1>
            {/* <h4>Your virtual journey starts with just a click</h4> */}
            <div className="rows destination-container">
                { 
                    DESTINATIONS.map((aDestination, index) => {
                       return <Destination key={ index } handler={ props.navigationHandler } details={ aDestination }/>
                    })
                }
            </div>
        </div>
    );
}

function GuideDetails(props) {
    const { details } = props;
    const parsedDetails = (JSON.parse(details)) ? JSON.parse(details) : {};
    return (
        <div className="cols center">
            <h1>{ parsedDetails.name }</h1>
            <h4>{ parsedDetails.description }</h4>
            <button data-id="2" onClick={ props.navigationHandler }>Go back</button>
        </div>
    );
}


function GuideSection(props) {
    const items = [
        {
            image: "https://static.wixstatic.com/media/d0a4b2_9ea4562bbfc94a5c991ec810637f7bb5.png/v1/fill/w_740,h_494,al_c,lg_1,q_95/d0a4b2_9ea4562bbfc94a5c991ec810637f7bb5.webp",
            name: "Mr Person 1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum assumenda ut, facilis, soluta autem vero earum suscipit consectetur in officiis sint possimus adipisci velit eos. Quis quos eius excepturi eveniet?"
        },
        {
            image: "https://static.wixstatic.com/media/d0a4b2_9ea4562bbfc94a5c991ec810637f7bb5.png/v1/fill/w_740,h_494,al_c,lg_1,q_95/d0a4b2_9ea4562bbfc94a5c991ec810637f7bb5.webp",
            name: "Mr Person 2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum assumenda ut, facilis, soluta autem vero earum suscipit consectetur in officiis sint possimus adipisci velit eos. Quis quos eius excepturi eveniet?"
        }, {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Inside_view_of_the_Fort_Prinzenstein_in_Keta%2C_Ghana._9.jpg/320px-Inside_view_of_the_Fort_Prinzenstein_in_Keta%2C_Ghana._9.jpg",
            name: "Mr Person 3",
            description: "Lorem ipsum dolor colr et sor skskkdk sdndjnkdnknkds md nkdknjksdk"
        }, {
            image: pic,
            name: "Mr Person 4",
            description: "Lorem ipsum dolor colr et sor skskkdk sdndjnkdnknkds md nkdknjksdk"
        }, {
            image: pic,
            name: "Mr Person 5",
            description: "Lorem ipsum dolor colr et sor skskkdk sdndjnkdnknkds md nkdknjksdk"
        }
    ];
    return (
        <div className="cols center market-section-inner">
            <h1>Choose A Guide</h1>
            {/* <h4>Take a trip in your favourite market place</h4> */}
            <div className="rows market-container">
                { 
                    items.map((anItem, index) => {
                        return <GuideItem key={ index } details={ anItem } handler={ props.navigationHandler }/>
                    })
                }
            </div>
        </div>
    );
}

function selectSection(state, props) {
    switch(props.currentSection){
        case 1: 
            return <DestinationSection currentSection={ props.currentSection } navigationHandler={ props.navigationHandler }/>;

        case 4: // Explore button
            return <DestinationDetails details={ props.sectionData } currentSection={ props.currentSection } navigationHandler={ props.navigationHandler } />;

        case 3: // Virtual Tour button
            return <VTourSection details={ props.sectionData } currentSection={ props.currentSection } navigationHandler={ props.navigationHandler } />;

        case 2: 
            return <GuideSection currentSection={ props.currentSection } navigationHandler={ props.navigationHandler } />;

        case 5: // Check out button
            return <GuideDetails details={ props.sectionData } currentSection={ props.currentSection } navigationHandler={ props.navigationHandler } />;

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
        const isPageWithoutVideo = this.props.currentSection === 2
            || this.props.currentSection === 3
            || this.props.currentSection === 4
            || this.props.currentSection === 5;
        
        return(
            <main className={ `${(isPageWithoutVideo)? 'no-video' : ''}` }>
                <Navigation sections={ this.props.sections.filter(aSection => aSection.isInNavigationBar === true) } navigationHandler={ this.props.navigationHandler }/>
                <section className="cols active">
                    { selectSection(this.state, this.props) }
                </section>
                <video autoPlay muted loop id="page-background-video">
                    <source src={ this.props.backgroundVideo } type="video/mp4" />
                </video>
            </main>
        );
    }
}

export default MainComponent;