import './index.css';
import React from 'react';

class PointerBox extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            text: props.text,
            visibility: false
        };
    }

    componentDidMount(){
        const timeout = 10;

        const hidePointer = () => {
            this.setState({visibility: false});
        };
        const showPointer = () => {
            this.setState({visibility: true});
            setTimeout(hidePointer, 10000);
        };
        
        setTimeout(showPointer, timeout * 1000);
    }

    render(){
        return(
            <div className={`pointer-box ${(this.state.visibility)? '' : 'off'}`}>
                <div className='rows pointer-box-content'>{ this.state.text }</div>
            </div>
        );
    }
}

export default PointerBox;