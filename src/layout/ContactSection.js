import React from "react";
import AppContext from '../context/appContext';

class ContactSection extends React.Component{
  static contextType = AppContext;

  componentDidMount(){
    this.context.setCurrentSection(3);
    document.querySelector('main').classList.toggle('no-video', true);
  }

  render(){
    return (
      <div className="cols center market-section-inner">
        <h1>Reach Out To Us</h1>
        <h5>To communicate with us, you use any of the channels listed below:</h5>
        <div className="rows center contact-container" style={{marginTop: "2rem", fontWeight: "400"}}>
          <a href="https://www.facebook.com/TGuide-110534837995395/" className="rows center" style={{fontSize: "1.5rem", margin: "0 1rem"}}>
            <i className="icon icofont-facebook" style={{fontSize: "2rem", color: "#bbb", marginRight: "1rem"}}></i>
            <span>Facebook</span>
          </a>

          <a href="https://twitter.com/Tguide_exp?t=1gLna9Cqzz_49BJO9CT5NA&s=09" className="rows center" style={{fontSize: "1.5rem", margin: "0 1rem"}}>
            <i className="icon icofont-twitter" style={{fontSize: "2rem", color: "#bbb", marginRight: "1rem"}}></i>
            <span>Twitter</span>
          </a>

          <a href="https://www.instagram.com/tguideexp/" className="rows center" style={{fontSize: "1.5rem", margin: "0 1rem"}}>
            <i className="icon icofont-twitter" style={{fontSize: "2rem", color: "#bbb", marginRight: "1rem"}}></i>
            <span>Instagram</span>
          </a>

          
        </div>  
      </div>
    )
  }
}

export default ContactSection;
