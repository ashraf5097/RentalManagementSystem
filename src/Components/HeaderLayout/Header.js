import React, { Component } from 'react'
import DropDown from './DropDown';
import "./Header.scss";

class Header extends Component {

    state = {
        displayDropDown: false
    }

    selectedOption = (id,subId) => {
        this.props.selectedLocaionAndSubLocation(id, subId)
        this.setState({
            displayDropDown: false
        })
    }

    render() {

        const {displayDropDown} = this.state;
        return (
            <div className="headerBgColor">
                <div className="headline headline-color">Rental Management System</div>
                <div className="location">
                    <div className="headline-color cursorPointer" onClick={() => this.setState({displayDropDown: !displayDropDown})}>
                        Select location
                        <span className="pic arrow-down"></span>
                    </div>
                    <div>{displayDropDown && <DropDown selectedOption={(id,subId) => this.selectedOption(id,subId)} />}</div>
                </div>
            </div>
        )
    }
}

export default Header