import React from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/appContext";
import DataRepo from "../db/DataRepo";

import Rating from "../components/Rating";

class GuideDetails extends React.Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      image: "",
      location: "",
      rating: 0,
    };
  }

  componentDidMount() {
    document.querySelector("main").classList.toggle("no-video", true);

    this.context.setCurrentSection(4);

    const {
      match: { params },
    } = this.props;

    DataRepo.getGuideDetails(params.guideUuid).then((response) => {
      this.setState({ ...response });
    });
  }

  render() {
    return (
      <AppContext.Consumer>
        {(context) => {
          const isRated = this.state.rating > 0;
          return (
            <div className="cols center guide-profile">
              <div
                className="cols cover-picture"
                style={{ justifyContent: "space-between" }}
              >
                <img
                  className="profile-picture"
                  src={this.state.image}
                  alt={this.state.name.toLowerCase()}
                  style={{
                    borderRadius: "50%",
                    width: "250px",
                    height: "250px",
                  }}
                  crossOrigin="true"
                />
                <div></div>
                <div
                  className="cols"
                  style={{
                    marginLeft: "auto",
                    marginRight: "5rem",
                    // border: "1px solid red",
                    alignItems: "center",
                    color: "white",
                    fontSize: "1.6rem",
                    fontWeight: "400",
                  }}
                >
                  <span
                    style={{
                      fontSize: isRated ? "2.4rem" : "1.1rem",
                      fontWeight: "300",
                      letterSpacing: "1px",
                    }}
                  >{`${isRated ? this.state.rating : "No review yet"}`}</span>
                  <span style={{ fontSize: "1.1rem" }}>
                    {isRated ? "Average Rating:" : ""}
                  </span>
                  <Rating
                    rating={this.state.rating}
                    styles={{
                      margin: "3px 0 2rem 0",
                    }}
                  />
                </div>
              </div>

              <h1 style={{ marginBottom: "0" }}>{this.state.name}</h1>
              <span style={{ fontSize: "1.2rem", marginTop: "0.5rem" }}>About This Guide:</span>
              <span style={{ fontSize: "1.6rem", marginTop: "0.5rem" }}>
                {this.state.description}
              </span>
              <Link
                to="/guides"
                className="rows center btn"
                data-id="2"
                onClick={context.navigationHandler}
              >
                Go back
              </Link>
            </div>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

export default GuideDetails;
