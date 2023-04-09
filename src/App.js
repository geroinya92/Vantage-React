import './App.css';
import Main from "./Components/Main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./Components/About/About";
import ContactContainer from "./Components/Contact/ContactContainer";
import React from "react";
import TeamContainer from "./Components/About/Service/Team/TeamContainer";
import DesignerProfileContainer from "./Components/About/Service/Team/DesignerProfile/DesignerProfileContainer";
import MyProfileContainer from "./Components/MyProfile/MyProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#99823D',
        },
    },
});

function App() {

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
                            <Route path='team/profile/:userId' element={<DesignerProfileContainer />} />
                        </Route>
                        <Route path='/profile' element={<MyProfileContainer/>}/>
                        <Route path='/login' element={<Login/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </ThemeProvider>

    );
}

export default App;
