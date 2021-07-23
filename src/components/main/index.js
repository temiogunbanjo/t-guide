import './main.css';
import React from 'react';
import Navigation from '../navigationBar';
import Destination from './destinationItem';
import GuideItem from './guideitem';
import pic from '../../resources/images/julian-schultz-JP_nc0jEakE-unsplash.jpg';
import profilePic from '../../resources/images/random picture for all.jpg';

// Contains all destinations and their details
const DESTINATIONS = [
    {
        image: "https://static.wixstatic.com/media/d0a4b2_9ea4562bbfc94a5c991ec810637f7bb5.png/v1/fill/w_740,h_494,al_c,lg_1,q_95/d0a4b2_9ea4562bbfc94a5c991ec810637f7bb5.webp",
        video: "https://www.youtube.com/embed/CmeqLpbj0I4",
        name: "Vume Pottery",
        description: "Vume is a small town in the South Tongu District of the Volta Region near Sogakope. The residents of Vume are well noted for the art of pottery."
    },
    {
        image: "https://static.wixstatic.com/media/d0a4b2_9ea4562bbfc94a5c991ec810637f7bb5.png/v1/fill/w_740,h_494,al_c,lg_1,q_95/d0a4b2_9ea4562bbfc94a5c991ec810637f7bb5.webp",
        video: "", // can also be a link to a video
        name: "Kyabobo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum assumenda ut, facilis, soluta autem vero earum suscipit consectetur in officiis sint possimus adipisci velit eos. Quis quos eius excepturi eveniet?",
        location: ""
    }, {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Inside_view_of_the_Fort_Prinzenstein_in_Keta%2C_Ghana._9.jpg/320px-Inside_view_of_the_Fort_Prinzenstein_in_Keta%2C_Ghana._9.jpg",
        video: "",
        name: "Fort Prinzenstein",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum assumenda ut, facilis, soluta autem vero earum suscipit consectetur in officiis sint possimus adipisci velit eos. Quis quos eius excepturi eveniet?",
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7941.2907345136855!2d-0.2279730982244871!3d5.6192666896778185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf99519d280a59%3A0xd2c0850c11243fa4!2sGH%20Schools!5e0!3m2!1sen!2sgh!4v1616658821973!5m2!1sen!2sgh"
    }, {
        image: pic,
        video: "",
        name: "Volta Lake",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum assumenda ut, facilis, soluta autem vero earum suscipit consectetur in officiis sint possimus adipisci velit eos. Quis quos eius excepturi eveniet?",
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7941.2907345136855!2d-0.2279730982244871!3d5.6192666896778185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf99519d280a59%3A0xd2c0850c11243fa4!2sGH%20Schools!5e0!3m2!1sen!2sgh!4v1616658821973!5m2!1sen!2sgh"
    }, {
        image: pic,
        video: "",
        name: "Wli Waterfall",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum assumenda ut, facilis, soluta autem vero earum suscipit consectetur in officiis sint possimus adipisci velit eos. Quis quos eius excepturi eveniet?",
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7941.2907345136855!2d-0.2279730982244871!3d5.6192666896778185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf99519d280a59%3A0xd2c0850c11243fa4!2sGH%20Schools!5e0!3m2!1sen!2sgh!4v1616658821973!5m2!1sen!2sgh"
    },{
        image: pic,
        video: "",
        name: "Tafi Atome Monkey Sanctuary",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum assumenda ut, facilis, soluta autem vero earum suscipit consectetur in officiis sint possimus adipisci velit eos. Quis quos eius excepturi eveniet?",
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7941.2907345136855!2d-0.2279730982244871!3d5.6192666896778185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf99519d280a59%3A0xd2c0850c11243fa4!2sGH%20Schools!5e0!3m2!1sen!2sgh!4v1616658821973!5m2!1sen!2sgh"
    },{
        image: pic,
        video: "",
        name: "Tafi Abuipe Cultural Centre",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum assumenda ut, facilis, soluta autem vero earum suscipit consectetur in officiis sint possimus adipisci velit eos. Quis quos eius excepturi eveniet?",
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7941.2907345136855!2d-0.2279730982244871!3d5.6192666896778185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf99519d280a59%3A0xd2c0850c11243fa4!2sGH%20Schools!5e0!3m2!1sen!2sgh!4v1616658821973!5m2!1sen!2sgh"
    },{
        image: pic,
        video: "",
        name: "Mountain Afadzato",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum assumenda ut, facilis, soluta autem vero earum suscipit consectetur in officiis sint possimus adipisci velit eos. Quis quos eius excepturi eveniet?",
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7941.2907345136855!2d-0.2279730982244871!3d5.6192666896778185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf99519d280a59%3A0xd2c0850c11243fa4!2sGH%20Schools!5e0!3m2!1sen!2sgh!4v1616658821973!5m2!1sen!2sgh"
    },{
        image: pic,
        video: "",
        name: "Volta National Museum",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum assumenda ut, facilis, soluta autem vero earum suscipit consectetur in officiis sint possimus adipisci velit eos. Quis quos eius excepturi eveniet?",
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7941.2907345136855!2d-0.2279730982244871!3d5.6192666896778185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf99519d280a59%3A0xd2c0850c11243fa4!2sGH%20Schools!5e0!3m2!1sen!2sgh!4v1616658821973!5m2!1sen!2sgh"
    },{
        image: pic,
        video: "",
        name: "Atorkor Slave Market",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum assumenda ut, facilis, soluta autem vero earum suscipit consectetur in officiis sint possimus adipisci velit eos. Quis quos eius excepturi eveniet?",
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7941.2907345136855!2d-0.2279730982244871!3d5.6192666896778185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf99519d280a59%3A0xd2c0850c11243fa4!2sGH%20Schools!5e0!3m2!1sen!2sgh!4v1616658821973!5m2!1sen!2sgh"
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
        <div className="cols">
            <button style={{marginRight: "auto"}} onClick={ props.navigationHandler } data-id="1" className="back-button-style">
                <i data-id="1" className="icofont-caret-left" style={{fontSize: "1.8rem"}}></i>
                <span data-id="1">Go back</span>
            </button>
            <h1 style={{ width: "100%", textAlign: "left" }}>{ parsedDetails.name }</h1>
            <span style={{ width: "100%", textAlign: "left", fontSize: "1.6rem" }}>{ parsedDetails.description }</span>
            <div className="iframe-wrapper">
                <iframe src={ parsedDetails.video } className="virtual-tour-iframe"></iframe>
            </div>
            {/* <video autoPlay loop controls className="virtual-tour-video">
                <source src={ parsedDetails.video } type="video/mp4" />
            </video> */}
        </div>
    );
}

function DestinationDetails(props) {
    const { details } = props;
    const parsedDetails = (JSON.parse(details)) ? JSON.parse(details) : {};

    return (
        <div className="cols destination-details-section-inner">
            <div className="rows" style={{justifyContent: "space-between", width: "100%", marginBottom: "1rem"}}>
                <button onClick={ props.navigationHandler } data-id="1" className="back-button-style">
                    <i data-id="1" className="icofont-arrow-left" style={{fontSize: "1.8rem"}}></i>
                    <span data-id="1" style={{marginLeft: "0.5rem"}}>Go back</span>
                </button>
                <button onClick={ props.navigationHandler } data-id="2" className="back-button-style">
                    <span data-id="2" style={{marginRight: "0.5rem"}}>Tour Guides</span>
                    <i data-id="2" className="icofont-arrow-right" style={{fontSize: "1.8rem"}}></i>
                </button>
            </div>

            <h1 style={{ width: "100%", textAlign: "left" }}>{ parsedDetails.name }</h1>
            <span style={{width: "100%", textAlign: "left", fontSize: "16px"}}>{ parsedDetails.description }</span>
            <div className="iframe-wrapper">
                <img src={ parsedDetails.image } alt={ parsedDetails.name.toLowerCase() }/>
            </div>

            <h4 style={{ width: "100%", textAlign: "left", letterSpacing: "0" }}>Location:</h4>
            <div className="iframe-wrapper">
                <iframe src={ parsedDetails.location } className="virtual-tour-iframe" width="600" height="450" style={{border: "0"}} allowFullScreen="" loading="lazy"></iframe>
            </div>
            
            <button onClick={ props.navigationHandler } data-id="2">Get A Tour Guide</button>
            {/* <video autoPlay loop controls className="virtual-tour-video">
                <source src={ parsedDetails.video } type="video/mp4" />
            </video> */}
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
            <img src={ parsedDetails.image } alt={ parsedDetails.name.toLowerCase() } style={{borderRadius: "50%", width: "250px", height: "250px"}}/>
            <h1 style={{marginBottom: "0"}}>{ parsedDetails.name }</h1>
            <span style={{fontSize: "1.3rem", marginBottom: "1rem"}}>4.2 / 5.0 Star Rating</span>
            <span style={{fontSize: "1.6rem"}}>{ parsedDetails.description }</span>
            <button data-id="2" onClick={ props.navigationHandler }>Go back</button>
        </div>
    );
}


function GuideSection(props) {
    const items = [
        {
            image: profilePic,
            name: "Mr Person 1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum assumenda ut, facilis, soluta autem vero earum suscipit consectetur in officiis sint possimus adipisci velit eos. Quis quos eius excepturi eveniet?"
        },
        {
            image: profilePic,
            name: "Mr Person 2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum assumenda ut, facilis, soluta autem vero earum suscipit consectetur in officiis sint possimus adipisci velit eos. Quis quos eius excepturi eveniet?"
        }, {
            image: profilePic,
            name: "Mr Person 3",
            description: "Lorem ipsum dolor colr et sor skskkdk sdndjnkdnknkds md nkdknjksdk"
        }, {
            image: profilePic,
            name: "Mr Person 4",
            description: "Lorem ipsum dolor colr et sor skskkdk sdndjnkdnknkds md nkdknjksdk"
        }, {
            image: profilePic,
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