import React from "react";
import AppContext from "./appContext";

// ALL SECTIONS THAT CAN BE NAVIGATED TO
const NAVIGATIONSECTIONS = [
  {
    name: "Home",
    icon: "icofont-home",
    url: "/",
    isInNavigationBar: true,
    init: (options) => {
      // Do something when section is selected
      options = options ? options : {};
      console.log(0);
      return options;
    },
  },
  {
    name: "Destinations",
    icon: "icofont-google-map",
    url: "/destinations",
    isInNavigationBar: true,
    init: (options) => {
      // Do something when section is selected
      options = options ? options : {};
      document.querySelector("body").classList.toggle("fullscreen", true);
      console.log(1);
      return options;
    },
  },
  {
    name: "Get A Guide",
    icon: "icofont-offside",
    url: "/guides",
    isInNavigationBar: true,
    init: (options) => {
      // Do something when section is selected
      options = options ? options : {};
      console.log(2);
      return options;
    },
  },
  {
    name: "Virtual Experience",
    icon: "icofont-lens",
    url: "/virtual",
    isInNavigationBar: true,
    init: (options) => {
      // Do something when section is selected
      options = options ? options : {};
      console.log(3);
      return options;
    },
  },
  {
    name: "About Destination",
    icon: "icofont-food-cart",
    url: "/destinations/:destinationId",
    isInNavigationBar: false,
    init: (options) => {
      // Do something when section is selected
      // console.log(4, options);
      options = options ? options : {};
      document.querySelector("body").classList.toggle("fullscreen", true);
      console.log(4);
      return options;
    },
  },
  {
    name: "About Guide",
    icon: "icofont-power",
    url: "/guides/:guideUuid",
    isInNavigationBar: false,
    init: (options) => {
      // Do something when section is selected
      options = options ? options : {};
      return options;
    },
  },
];

class AppContextProvider extends React.Component {
  state = {
    currentSection: 0,
    sectionInit: NAVIGATIONSECTIONS[0].init(),
  };

  render() {
    return (
      <AppContext.Provider value={{
        sections: NAVIGATIONSECTIONS,
        currentSection: this.state.currentSection,
        sectionInit: this.state.sectionInit,
        navigationHandler: (ev) => {
          // Handles navigation on navigation bar
          let dataShow = ev.target.getAttribute("data-show");
          if (
            dataShow !== "true" &&
            dataShow !== "false" &&
            dataShow !== true &&
            dataShow !== false
          )
            dataShow = false;
    
          // eslint-disable-next-line
          const shouldShowVideo = eval(dataShow);
          document
            .querySelector("main")
            .classList.toggle("no-video", shouldShowVideo);
        },
        setCurrentSection: (index) => {
            this.setState({ currentSection: index });
            console.log(this.state);
        }
      }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppContextProvider;
