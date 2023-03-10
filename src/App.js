import './App.css';
import Header from './Components/Header/Header'
import Main from "./Components/Main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./Components/About/About";
import ContactContainer from "./Components/Contact/ContactContainer";
import React from "react";
import TeamContainer from "./Components/About/Service/Team/TeamContainer";

function App() {

    return (
        <BrowserRouter>
            <div>
                <Header/>
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
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
