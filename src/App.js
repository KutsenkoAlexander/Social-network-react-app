import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";

const App = (props) => {
    return (
        <div className="App">
            <Header/>
            <Sidebar sidebar={props.store.state.sidebar}/>
            <div className="wrapperContent">
                <Route path="/profile"
                       render={() => <Profile store={props.store}/>}/>
                <Route path="/dialogs"
                       render={() => <Dialogs store={props.store}/>}/>
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