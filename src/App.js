import React from "react";

// Import styles
import "./App.css";
import "./resources/styles/clamp.min.css";

// import other resources
import backgroundVideo from "./resources/videos/Ghana Drone Tour.mp4";

// import react components
import PointerBox from "./common/PointerBox";
import ToggleFSButton from "./common/Fullscreentogglerbutton";
import AppHeader from "./components/Header";
import MainComponent from "./components/Main";

import ErrorCatcher from "./components/ErrorCatcher";
import AppContextProvider from "./context/ContextProviders";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // Handles automatic fullscreen toggling
    this.fullScreenAfter30seconds = () => {
      const TIMEOUT = 30;
      setTimeout(function () {
        document.querySelector("body").classList.toggle("fullscreen", true);
      }, TIMEOUT * 1000);
    };
  }

  componentDidMount() {
    this.fullScreenAfter30seconds();
  }

  render() {
    return (
      <AppContextProvider>
        <ErrorCatcher>
          <PointerBox text="Search for a destination" />
          <AppHeader />
          <MainComponent
            backgroundVideo={backgroundVideo}
            navigationHandler={this.navigationHandler}
          />
          <ToggleFSButton />
        </ErrorCatcher>
      </AppContextProvider>
    );
  }
}

export default App;
