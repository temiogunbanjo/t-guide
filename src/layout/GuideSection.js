import React from "react";
import AppContext from '../context/appContext';

import GuideItem from "../components/Guideitem";
const GUIDES = require("../db/guideslist").data;

class GuideSection extends React.Component{
  static contextType = AppContext;

  componentDidMount(){
    this.context.setCurrentSection(2);
    document.querySelector('main').classList.toggle('no-video', true);
  }

  render(){
    return (
      <div className="cols center market-section-inner">
        <h1 style={{letterSpacing: "0 !important"}}>Choose A Guide</h1>
        <div className="rows market-container">
          {GUIDES.map((anItem, index) => {
            return (
              <GuideItem
                key={index}
                details={anItem}
                handler={this.context.navigationHandler}
              />
            );
          })}
        </div>
      </div>
    )
  }
}

export default GuideSection;
