import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Sidebar/>
            <div className="wrapperContent">
                <Route path="/profile"
                       render={() => <Profile/>}/>
                <Route path="/dialogs"
                       render={() => <DialogsContainer/>}/>
                <Route path="/news"
                       render={() => <News/>}/>
                <Route path="/music"
                       render={() => <Music/>}/>
                <Route path="/settings"
                       render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;