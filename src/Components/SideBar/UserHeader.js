import React, { Component } from 'react'
// import "../ChatBoard/ChatHeader.scss";
import headerIcon from "../../images/header-logo.png";
import Header from '../CommomCompent/Header';

class UserHeader extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (

            <Header
                headerClass="logoBgColor logoPadding"
                iconPath={headerIcon} iconClass="pt-1 pr-1 pb-1 logo"
            />
        )
    }
}

export default UserHeader