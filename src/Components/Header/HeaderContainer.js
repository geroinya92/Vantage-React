import React from 'react'
import {connect} from "react-redux";
import Header from "./Header";
import {getAuth, logout} from "../../Redux/Auth-reducer";

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuth()
    }

    render() {
        return <Header {...this.props}/>
    }
}

export default connect (mapStateToProps, {getAuth, logout})(HeaderContainer)