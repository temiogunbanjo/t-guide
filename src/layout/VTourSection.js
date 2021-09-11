import React from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/appContext";
import DataRepo from "../db/dataRepos";

class VTourSection extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      description: '',
      image: '',
      location: ''
    }
  }

  componentDidMount(){
    document.querySelector('main').classList.toggle('no-video', true);
    DataRepo.getDestinationDetails('vume-pottery').then(response => {
        this.setState({...response});
    });
  }

  render(){
    return (
      <AppContext.Consumer>
        {(context) => (
          <div className="cols">
            <Link
              to="/destinations"
              style={{ marginRight: "auto" }}
              onClick={context.navigationHandler}
              data-show="false"
              className="btn back-button-style"
            >
              <i
                data-show="false"
                className="icofont-caret-left"
                style={{ fontSize: "1.8rem" }}
              ></i>
              <span data-show="false">Go back</span>
            </Link>
  
            <h1 style={{ width: "100%", textAlign: "left" }}>
              {this.state.name}
            </h1>
            <span
              style={{ width: "100%", textAlign: "left", fontSize: "1.6rem" }}
            >
              {this.state.description}
            </span>
            <div className="iframe-wrapper">
              <iframe
                src={this.state.video}
                className="virtual-tour-iframe"
                title="virtual tour video"
              ></iframe>
            </div>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default VTourSection;
