import React, { Component } from 'react'
import "./SideBar.scss"
import Training from './Training';
import UserBoard from './UserBoard';

class SideBar extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-5 p-0 logoBgColor userHeight">
                    <UserBoard />
                </div>
                <div className="col-md-7 p-0">
                    <Training />
                </div>
            </div>
        )
    }
}

export default SideBar