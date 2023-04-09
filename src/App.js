import './App.css';
import Main from "./Components/Main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./Components/About/About";
import ContactContainer from "./Components/Contact/ContactContainer";
import React from "react";
import TeamContainer from "./Components/About/Service/Team/TeamContainer";
import DesignerProfileContainer, {
    withRouter
} from "./Components/About/Service/Team/DesignerProfile/DesignerProfileContainer";
import MyProfileContainer from "./Components/MyProfile/MyProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {createTheme, LinearProgress, ThemeProvider} from "@mui/material";
import {connect} from "react-redux";
import {compose} from "@reduxjs/toolkit";
import {initializeApp} from "./Redux/App-reducer";

const theme = createTheme({
    palette: {
        primary: {
            main: '#99823D',
        },
    },
});

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialized) {
            return <LinearProgress />
        }

        return (
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <div>
                        <HeaderContainer/>
                    </div>
                    <div>
                        <Routes>
                            <Route index element={<Main/>}/>
                            <Route exact path='/home' element={<Main/>}/>
                            <Route path='/contact/*' element={<ContactContainer/>}/>
                            <Route path='about' element={<About/>}>
                                <Route index element={<TeamContainer/>}/>
                                <Route path='design' element={<TeamContainer/>}/>
                                <Route path='advance' element={<TeamContainer/>}/>
                                <Route path='team' element={<TeamContainer/>}/>
                                <Route path='team/profile/:userId' element={<DesignerProfileContainer/>}/>
                            </Route>
                            <Route path='/profile' element={<MyProfileContainer/>}/>
                            <Route path='/login' element={<Login/>}/>
                        </Routes>
                    </div>
                </BrowserRouter>
            </ThemeProvider>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


export default compose (
    withRouter,
    connect(mapStateToProps, {initializeApp})) (App);
