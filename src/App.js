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
            <Sidebar navigation={props.state.sidebar.navigation}
                     friends={props.state.sidebar.friends}/>
            <div className="wrapperContent">
                <Route path="/profile"
                       render={() => <Profile profilePage={props.state.profilePage}
                                              addPost={props.addPost}
                                              updateNewPostText={props.updateNewPostText}/>}/>
                <Route path="/dialogs"
                       render={() => <Dialogs dialogPage={props.state.dialogPage}
                                              sendMessage={props.sendMessage}
                                              updateNewMessageText={props.updateNewMessageText}/>}/>
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