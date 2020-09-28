import React, { Component } from 'react';
import "./LandingPage.scss";
import Header from "../HeaderLayout/Header";
import MainPage from '../MainPage/MainPage';

class LandingPage extends Component {

    state = {
        sessionId: null,
        locationId: null,
        sublocationId: null
    }

    selectedLocaionAndSubLocation = (id, subId) => {
        this.setState({
            locationId: id,
            sublocationId: subId
        })
    }
    

    render() {
        const {locationId, sublocationId} = this.state;
        return (
         <div className="">
             <Header  selectedLocaionAndSubLocation = {(id, subId) => this.selectedLocaionAndSubLocation(id, subId)} />
             <MainPage locationId={locationId} sublocationId={sublocationId} />
         </div>
        )
    }
}

export default LandingPage