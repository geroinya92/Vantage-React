import './App.css';
import Header from './Components/Header/Header'
import Main from "./Components/Main/Main";
import Contact from "./Components/Contact/Contact";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./Components/About/About";

function App(props) {

    return (
        <BrowserRouter>
            <div>
                <Header/>
            </div>
            <div>
                <Routes>
                    <Route exact path='/home' element={<Main posts={props.state.Main.newsData}/>}/>
                    <Route path='/contact'
                           element={<Contact Data={props.state.Contacts}/>}/>
                    <Route path='/about' element={<About/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
