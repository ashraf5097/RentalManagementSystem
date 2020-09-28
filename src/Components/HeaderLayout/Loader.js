import React, { Component } from 'react';
import './Loader.scss'
class Loader extends Component {
    render() {
        return (
            <div>
                <div className="overlay-dashboard display-block"></div>
                <div  className={`snackbar show}`}>Loading ...</div>
            </div>
            
        );
    }
}

export default Loader;
