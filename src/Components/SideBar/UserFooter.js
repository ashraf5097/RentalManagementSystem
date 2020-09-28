import React, {  Component } from 'react';
import accountIcon from "../../images/account-icon.svg";
import settingIcon from "../../images/settings-icon.svg"

import "./UserOptions.scss"

class UserFooter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="footer full-width">
                <img alt=":)" src={accountIcon} className="pl-1 pt-1 pr-1"/>
                <span className="userText">UserRole</span>
                <img alt=":)" src={settingIcon} className="pl-1 pt-1 pr-1 settingIcon"/>
            </div>
        )
    }
}

export default UserFooter