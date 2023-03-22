import MyProfile from "./MyProfile";

import React from 'react'
import {connect} from "react-redux";

class MyProfileContainer extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <MyProfile/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {})  (MyProfileContainer)