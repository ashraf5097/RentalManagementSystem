import React, { Component } from 'react';
import UserHeader from './UserHeader';
import UserOptions from './UserOptions';


class UserBoard extends Component {

    render() {
        return (
            <>
                <UserHeader />
                <UserOptions />
            </>
        )
    }
}

export default UserBoard