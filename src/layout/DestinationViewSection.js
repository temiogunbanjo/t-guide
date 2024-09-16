import React from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/appContext";
import DataRepo from "../db/dataRepos";

class DestinationDetails extends React.Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      image: [],
      location: "",
    };
  }

  componentDidMount() {
    document.querySelector("main").classList.toggle("no-video", true);

    const appData = this.context;
    if (appData) appData.setCurrentSection(4);

    // Get destination details
    const {
      match: { params },
    } = this.props;
    DataRepo.getDestinationDetails(params.destinationId).then((response) => {
      this.setState({ ...response });
      console.log(response);
    });
  }

  render() {
    const appData = this.context;
    return (
      <div className="cols destination-details-section-inner">
        <div
          className="rows"
          style={{
            justifyContent: "space-between",
            width: "100%",
            marginBottom: "1rem",
          }}
        >
          <Link
            to="/destinations"
            className="btn back-button-style"
            onClick={appData.navigationHandler}
            data-id="1"
          >
            <i
              data-id="1"
              className="icofont-simple-left"
              style={{ fontSize: "1.8rem" }}
            ></i>
            <span data-id="1" style={{ marginLeft: "0.3rem" }}>
              Go back
            </span>
          </Link>

          <Link
            to="/guides"
            className="btn back-button-style"
            onClick={appData.navigationHandler}
            data-id="2"
          >
            <span data-id="2" style={{ marginRight: "0.5rem" }}>
              Tour Guides
            </span>
            <i
              data-id="2"
              className="icofont-simple-right"
              style={{ fontSize: "1.8rem" }}
            ></i>
          </Link>
        </div>

        <h1 style={{ width: "100%", textAlign: "left" }}>{this.state.name}</h1>
        <span style={{ width: "100%", textAlign: "left", fontSize: "16px" }}>
          {this.state.description}
        </span>
        <div className="rows center iframe-wrapper">
          {this.state.image.map((imgUrl, index) => {
            return (
              <img
                src={imgUrl}
                alt={this.state.name.toLowerCase()}
                crossOrigin="true"
              />
            );
          })}
        </div>

        <h4 style={{ width: "100%", textAlign: "left", letterSpacing: "0" }}>
          Location:
        </h4>
        <div className="iframe-wrapper">
          <iframe
            src={this.state.location}
            className="virtual-tour-iframe"
            title="location map"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            crossOrigin="true"
          ></iframe>
        </div>

        <Link
          to="/guides"
          className="btn"
          onClick={appData.navigationHandler}
          data-id="2"
        >
          Get A Tour Guide
        </Link>
      </div>
    );
  }
}

export default DestinationDetails;
