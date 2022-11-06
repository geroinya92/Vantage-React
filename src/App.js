import './App.css';
import Header from './Components/Header/Header'
import Main from "./Components/Main/Main";
import Contact from "./Components/Contact/Contact";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div>
                <Header/>
            </div>
            <div>
                <Routes>
                    <Route exact path='/home' element={<Main />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>

            </div>
        </BrowserRouter>


    );
}

export default App;
