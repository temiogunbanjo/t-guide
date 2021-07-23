// Import styles
import './App.css';
import './resources/styles/clamp.min.css';

// import react components
import React from 'react';
import PointerBox from './components/pointerbox';
import AppHeader from './components/header';
import MainComponent from './components/main';

// import other resources
import backgroundVideo from './resources/videos/Ghana Drone Tour.mp4'

// ALL SECTIONS THAT CAN BE NAVIGATED TO
const NAVIGATIONSECTIONS = [
  {
    name: 'Home',
    icon: 'icofont-home',
    isInNavigationBar: true,
    init: (options) => {
      // Do something when section is selected
      options = (options) ? options : null;
      console.log(0)
      return options;
    }
  },{
    name: "Destinations",
    icon: "icofont-google-map",
    isInNavigationBar: true,
    init: (options) => {
      // Do something when section is selected
      options = (options) ? options : null;
      document.querySelector('body').classList.toggle('fullscreen', true);
      console.log(1);
      return options;
    }
  },{
    name: "Get A Guide",
    icon: "icofont-offside",
    isInNavigationBar: true,
    init: (options) => {
      // Do something when section is selected
      options = (options) ? options : null;
      console.log(2)
      return options;
    }
  },{
    name: "Virtual Experience",
    icon: "icofont-lens",
    isInNavigationBar: true,
    init: (options) => {
      // Do something when section is selected
      options = (options) ? options : null;
      console.log(3);
      return options;
    }
  },{
    name: "About Destination",
    icon: "icofont-food-cart",
    isInNavigationBar: false,
    init: (options) => {
      // Do something when section is selected
      options = (options) ? options : null;
      document.querySelector('body').classList.toggle('fullscreen', true);
      console.log(4);
      return options;
    }
  },{
    name: "About Guide",
    icon: "icofont-power",
    isInNavigationBar: false,
    init: (options) => {
      // Do something when section is selected
      options = (options) ? options : null;
      console.log(5)
      return options;
    }
  }
];

// let colorList = ['#1e1e1e', "rgb(0, 82, 205)", 'orange', 'red', 'purple', 'orangered', 'crimson', 'brown'];

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentSection: 0,
      sectionInit: NAVIGATIONSECTIONS[0].init()
    }

    // Handles navigation on navigation bar
    this.navigationHandler = (ev) => {
      this.setState((prevState) => {
        // console.log(ev.target.id);
        const idOfSection = parseInt(ev.target.getAttribute('data-id'), 10);
        const options = (ev.target.hasAttribute('data-options')) ? ev.target.getAttribute('data-options') : null;
        const changedState = {
          currentSection: idOfSection,
          sectionInit: NAVIGATIONSECTIONS[idOfSection].init(options)
        };
        
        const newState = Object.assign({}, prevState, changedState);
        return newState;
      });
    }

    // Handles automatic fullscreen toggling
    this.fullScreenAfter30seconds = () => {
      const TIMEOUT = 30;
      setTimeout(function(){
        document.querySelector('body').classList.toggle('fullscreen', true);
      }, TIMEOUT * 1000);
    }

    // Handler for toggling fullscreen off
    this.fullscreenToggler = (ev) => {
      document.querySelector('body').classList.toggle('fullscreen', false);
      this.fullScreenAfter30seconds();
    }
  }

  componentDidMount(){
    this.fullScreenAfter30seconds();
  }

  render(){
    return (
      <React.Fragment>
        <PointerBox text='Click here to contact us'/>
        <AppHeader currentSection={ this.state.currentSection } sections={ NAVIGATIONSECTIONS }/>
        <MainComponent currentSection={ this.state.currentSection } sections={ NAVIGATIONSECTIONS } backgroundVideo={ backgroundVideo } navigationHandler={ this.navigationHandler } sectionData={ this.state.sectionInit }/>
        <button title="Toggle fullscreen off" className="rows center fullscreen-toggle-button" onClick={ this.fullscreenToggler }>
          <i className="icofont-close"></i>
        </button>
      </React.Fragment>
    );
  }
}

export default App;
