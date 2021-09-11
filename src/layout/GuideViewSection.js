import React from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/appContext";
import DataRepo from "../db/dataRepos";

import Rating from "../common/Rating";

class GuideDetails extends React.Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      title: "",
      nick: "",
      description: "",
      image: "",
      location: "",
      rating: 0,
    };
  }

  componentDidMount() {
    document.querySelector("main").classList.toggle("no-video", true);

    this.context.setCurrentSection(5);

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
            <div className="cols guide-profile">
              <div
                className="rows cover-picture"
                style={{ justifyContent: "space-between" }}
              >
                <img
                  className="profile-picture"
                  src={this.state.image}
                  alt={this.state.name.toLowerCase()}
                  style={{
                    borderRadius: "10px",
                    width: "180px",
                    height: "180px",
                  }}
                  crossOrigin="true"
                />

                <div
                  className="cols profile-summary"
                  style={{ justifyContent: "center" }}
                >
                  <h1 className="profile-name" style={{ marginBottom: "0" }}>
                    {this.state.name}
                  </h1>
                  <span>{this.state.title || this.state.nick}</span>
                </div>

                <div className="cols guide-rating-wrap">
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

              <h4 className="guide-detail-label">About This Guide:</h4>
              <span
                style={{
                  fontSize: "1.6rem",
                  marginTop: "0.5rem",
                  width: "100%",
                }}
              >
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
