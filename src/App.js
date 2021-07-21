// Import styles
import './App.css';
import './resources/styles/clamp.min.css';

// import react components
import React from 'react';
import PointerBox from './components/pointerbox';
import AppHeader from './components/header';
import MainComponent from './components/main';

// import other resources
import backgroundVideo from './resources/videos/clip.mp4'
const navigationSections = [
  {
    name: 'Home',
    icon: 'icofont-home',
    isInNavigationBar: true,
    init: () => {
      // Do something when section is selected
      console.log(0)
      return 0;
    }
  },{
    name: "Destinations",
    icon: "icofont-google-map",
    isInNavigationBar: true,
    init: () => {
      // Do something when section is selected
      document.querySelector('body').classList.toggle('fullscreen', true);
      console.log(1);
      return 1;
    }
  },{
    name: "Tour Guides",
    icon: "icofont-map",
    isInNavigationBar: true,
    init: () => {
      // Do something when section is selected
      console.log(2)
      return 2;
    }
  },{
    name: "Marketplace",
    icon: "icofont-food-cart",
    isInNavigationBar: true,
    init: () => {
      // Do something when section is selected
      document.querySelector('body').classList.toggle('fullscreen', true);
      console.log(3);
      return 3;
    }
  },{
    name: "Register",
    icon: "icofont-power",
    isInNavigationBar: true,
    init: () => {
      // Do something when section is selected
      console.log(4)
      return 4;
    }
  }, {
    name: "Hate",
    icon: "icofont-power",
    isInNavigationBar: false,
    init: () => {
      // Do something when section is selected
      console.log(5)
      return 5;
    }
  }
];

// let colorList = ['#1e1e1e', "rgb(0, 82, 205)", 'orange', 'red', 'purple', 'orangered', 'crimson', 'brown'];

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentSection: 0,
      sectionInit: navigationSections[0].init()
    }
    this.navigationHandler = (ev) => {
      this.setState((prevState) => {
        // console.log(ev.target.id);
        const changedState = {
          currentSection: parseInt(ev.target.id, 10),
          sectionInit: navigationSections[parseInt(ev.target.id, 10)].init()
        };
        
        const newState = Object.assign({}, prevState, changedState);
        return newState;
      });
    }
  }

  componentDidUpdate(){
    // console.log(this.state);
  }

  componentDidMount(){
    setTimeout(function(){
      document.querySelector('body').classList.toggle('fullscreen', true);
    }, 20000);
  }

  render(){
    return (
      <React.Fragment>
        <PointerBox text='Click here to contact us'/>
        <AppHeader currentSection={this.state.currentSection} sections={navigationSections}/>
        <MainComponent currentSection={this.state.currentSection} sections={navigationSections} backgroundVideo={backgroundVideo} navigationHandler={this.navigationHandler}/>
        <button title="Toggle fullscreen off" className="rows center fullscreen-toggle-button" onClick={function(e){document.querySelector('body').classList.toggle('fullscreen', false)}}>
          <i className="icofont-close"></i>
        </button>
      </React.Fragment>
    );
  }
}

export default App;
