import React from 'react'
import {connect} from "react-redux";
import Header from "./Header";
import {setAuthUserData} from "../../Redux/Auth-reducer";
import {authApi} from "../../api/api";

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

class HeaderContainer extends React.Component {
    componentDidMount() {
        authApi.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}

export default connect (mapStateToProps, {setAuthUserData})(HeaderContainer)