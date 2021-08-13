import React from "react";

// Import styles
import "./App.css";
import "./resources/styles/clamp.min.css";

// import other resources
import backgroundVideo from "./resources/videos/Ghana Drone Tour.mp4";

// import react components
import PointerBox from "./components/pointerbox";
import ToggleFSButton from "./components/fullscreentogglerbutton";
import AppHeader from "./components/header";
import MainComponent from "./components/main";

import ErrorCatcher from "./errorBoundaries/errorCatcher";
import AppContextProvider from "./context/contextProvider";

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
          <PointerBox text="Click here to contact us" />
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
