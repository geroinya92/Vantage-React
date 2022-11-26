import './App.css';
import Header from './Components/Header/Header'
import Main from "./Components/Main/Main";
import Contact from "./Components/Contact/Contact";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./Components/About/About";
import {updateNewMessageText} from "./Redux/State";

function App(props) {

    return (
        <BrowserRouter>
            <div>
                <Header/>
            </div>
            <div>
                <Routes>
                    <Route exact path='Home/' element={<Main
                        posts={props.state.Main.newsData}
                        newPostText={props.state.Main.newPostText}
                        dispatch={props.dispatch}
                    />
                    }
                    />
                    <Route path='/dialog/*'
                           element={<Contact
                               Data={props.state.Contacts}
                               SendMessage={props.SendMessage}
                               newMessageText={props.state.Contacts.newMessageText}
                               dispatch={props.dispatch}
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
