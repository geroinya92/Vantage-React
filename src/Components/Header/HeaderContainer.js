import React from 'react'
import {connect} from "react-redux";
import Header from "./Header";
import {logout} from "../../Redux/Auth-reducer";

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props}/>
    }
}

export default connect (mapStateToProps, {logout})(HeaderContainer)