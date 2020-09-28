import React, { Component } from 'react'
import "./TrainingReport.scss";
import { connect } from 'react-redux';
import * as actions from '../../store/action/actionCreator';
import downArrowIcon from "../../images/down-arrow-black-icon.svg";

const mapStateToProps = state => {
    return {
        trainingList: state.trainingList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTrainingList: () => dispatch(actions.fetchTrainingList()),
        setSessionId: (sessionId) => dispatch(actions.setSessionID(sessionId))
    }
}


class TrainingReport extends Component {
   
    componentDidMount() {
        this.props.getTrainingList();
    }

    componentDidUpdate(prevProps) {
        const { trainingList } = this.props
        if(prevProps.trainingList !== trainingList && trainingList.length) {
            const firstSessionId = trainingList[0].id;
            this.props.setSessionId(firstSessionId)
        }
    }

    render() {
        const { trainingList } = this.props;
        return (
            <div className="reportBorder">
                <table className="p-0 m-0" border='0'>
                    <thead>
                        <tr>
                            <th>Sessions</th>
                            <th>User</th>
                            <th>Match/Fail</th>
                            <th>Date</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            trainingList && trainingList.map((list, listIndex) => {

                                return (
                                    <tr key={listIndex} onClick={() => {this.props.setSessionId(list.id)}}>
                                        <td>{list.sessionId}</td>
                                        <td>{list.userSays}</td>
                                        <td>{list.count && list.count.hit}/{list.count && list.count.miss}</td>
                                        <td>{list.createdOn}</td>
                                        <td><img src={downArrowIcon} className=" rightArrowIcon" alt=":)" /></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainingReport);
