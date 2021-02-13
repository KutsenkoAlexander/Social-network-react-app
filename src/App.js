import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Sidebar friends={props.state.sidebar.friends}/>
                <div className="wrapperContent">
                    <Route path="/profile"
                           render={() => <Profile state={props.state.profilePage}/>}/>
                    <Route path="/dialogs"
                           render={() => <Dialogs state={props.state.dialogPage}/>}/>
                    <Route path="/news"
                           render={() => <News/>}/>
                    <Route path="/music"
                           render={() => <Music/>}/>
                    <Route path="/settings"
                           render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;