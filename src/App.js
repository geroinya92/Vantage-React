import './App.css';
import Header from './Components/Header/Header'
import Main from "./Components/Main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./Components/About/About";
import ContactContainer from "./Components/Contact/ContactContainer";

function App(props) {

    return (
        <BrowserRouter>
            <div>
                <Header/>
            </div>
            <div>
                <Routes>
                    <Route exact path='home/' element={<Main
                        state={props.state}
                        dispatch={props.dispatch}
                    />
                    }
                    />
                    <Route path='/contact/*'
                           element={<ContactContainer
                               dispatch={props.dispatch}
                               state={props.state}
                           />
                           }
                    />
                    <Route path='/about' element={<About/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
