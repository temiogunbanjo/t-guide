import React from 'react';
import './header.css';
import logo from '../../resources/images/DeeplugTEO.png';

class AppHeader extends React.Component {
    // constructor(props){
    //     super(props);
    // }

    componentDidMount(){}

    render(){
        return(
            <header className="rows" style={{ backgroundColor: "var(--primary-color)"}}>
                <h1>{ this.props.sections[this.props.currentSection].name }</h1>
                <a href=""><img src={logo} className="logo" alt=""/></a>
                <i className="icofont-phone hide-on-mobile"></i>
            </header>
        );
    }
}

export default AppHeader;