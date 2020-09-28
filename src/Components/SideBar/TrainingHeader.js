import React, { Component } from 'react'
import traingingIcon from "../../images/trainging-icon.svg";
import Header from '../CommomCompent/Header';

class TrainingHeader extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <Header
                headerClass="chatBgColor chat-header-msg"
                iconPath={traingingIcon} iconClass="pt-1 pr-1"
                txtHeader="Training"
            />
        )
    }
}

export default TrainingHeader