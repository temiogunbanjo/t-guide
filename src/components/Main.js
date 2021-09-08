import "./main.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppContext from "../context/appContext";

import Navigation from "./NavigationBar";
import LandingSection from "../layout/LandingSection";
import DestinationSection from "../layout/DestinationSection";
import DestinationDetails from "../layout/DestinationViewSection";
import GuideSection from "../layout/GuideSection";
import GuideDetails from "../layout/GuideViewSection";
import VTourSection from "../layout/VTourSection";
import VTourIntro from "../layout/VTourIntro";
import TeamSection from "../layout/TeamSection";
import ContactSection from "../layout/ContactSection";

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: props.currentSection,
    };
  }

  render() {
    return (
      <AppContext.Consumer>
        {(context) => {
          // console.log({ contextMain: context });
          const isPageWithoutVideo =
            context.currentSection === 2 ||
            context.currentSection === 3 ||
            context.currentSection === 4 ||
            context.currentSection === 5;

          return (
            <main className={`${isPageWithoutVideo ? "no-video" : ""}`}>
              <Router>
                <Navigation />
                <section className="cols active">
                  <Switch>
                    <Route exact path="/">
                      <LandingSection />
                    </Route>

                    <Route exact path="/destinations">
                      <DestinationSection />
                    </Route>

                    <Route
                      path="/destinations/:destinationId"
                      component={DestinationDetails}
                    />

                    <Route exact path="/guides">
                      <GuideSection />
                    </Route>

                    <Route path="/guides/:guideUuid" component={GuideDetails} />

                    <Route exact path="/virtual">
                      <VTourIntro />
                    </Route>

                    <Route
                      path="/virtual/:destinationId"
                      component={VTourSection}
                    />

                    <Route
                      path="/team"
                      component={TeamSection}
                    />

                    <Route
                      path="/contact"
                      component={ContactSection}
                    />
                  </Switch>
                </section>
              </Router>

              <video autoPlay muted loop id="page-background-video">
                <source src={this.props.backgroundVideo} type="video/mp4" />
              </video>
            </main>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

export default MainComponent;

// function selectSection(state, props) {
//     switch(props.currentSection){
//         case 1:
//             return <DestinationSection currentSection={ props.currentSection } navigationHandler={ props.navigationHandler }/>;

//         case 4: // Explore button
//             return <DestinationDetails details={ props.sectionData } currentSection={ props.currentSection } navigationHandler={ props.navigationHandler } />;

//         case 3: // Virtual Tour button
//             return <VTourSection details={ props.sectionData } currentSection={ props.currentSection } navigationHandler={ props.navigationHandler } />;

//         case 2:
//             return <GuideSection currentSection={ props.currentSection } navigationHandler={ props.navigationHandler } />;

//         case 5: // Check out button
//             return <GuideDetails details={ props.sectionData } currentSection={ props.currentSection } navigationHandler={ props.navigationHandler } />;

//         case 0:
//         default:
//             return <AboutSection currentSection={ props.currentSection } navigationHandler={ props.navigationHandler } />;
//     }
// }
