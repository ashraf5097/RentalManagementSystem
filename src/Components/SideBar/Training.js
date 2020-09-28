import React, { Component } from 'react'
import TrainingHeader from './TrainingHeader'
import TrainingReport from './TrainingReport'

class Training extends Component {

    render() {
        return (
            <>
                <TrainingHeader />
                <TrainingReport />
            </>
        )
    }
}

export default Training