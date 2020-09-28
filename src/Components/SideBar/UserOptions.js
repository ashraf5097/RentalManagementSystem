import React, {  Component } from 'react';
import "./UserOptions.scss";
import UserFooter from './UserFooter';
import entityIcon from "../../images/entity-icon.svg";
import settingIcon from "../../images/settings-icon.svg";
import downArrowIcon from "../../images/down-arrow-icon.svg";
import trainingIcon from "../../images/trainging-icon.svg";
import intentIcon from "../../images/intent-icon.svg";


class UserOptions extends Component {

    render() {
        return (
            <div className="optionsOverAllPadding">
                <div className="user-option user-option-selected full-width pb-1">
                    <img alt=":)" src={entityIcon} className="pl-1 pt-1 pr-1" />
                    <span className="userText">TB5</span>
                    <img alt=":)" src={settingIcon} className="pl-1 pt-1 pr-1 settingIcon" />
                    <img alt=":)" src={downArrowIcon} className=" pt-2 pr-1 settingIcon" />
                </div>
                <div className="user-option full-width pb-1">
                    <img alt=":)" src={intentIcon} className="pl-1 pt-1 pr-1 width11" />
                    <span className="userText">Intents</span>
                    <img alt=":)" src={downArrowIcon} className=" pt-2  pr-3 settingIcon rightArrowIcon" />
                </div>
                <div className="user-option full-width pb-1">
                    <img alt=":)" src={entityIcon} className="pl-1 pt-1 pr-1" />
                    <span className="userText">Entities</span>
                    <img alt=":)" src={downArrowIcon} className=" pt-2 pr-3 settingIcon rightArrowIcon" />
                </div>

                <div className="user-option full-width pb-1">
                    <img alt=":)" src={trainingIcon} className="pt-1 width8" />
                    <span className="userText pl-2">Training</span>
                    <img alt=":)" src={downArrowIcon} className="pl-1 pt-2 pr-3 settingIcon rightArrowIcon" />
                </div>

                <UserFooter />
            </div>
        )
    }
}

export default UserOptions