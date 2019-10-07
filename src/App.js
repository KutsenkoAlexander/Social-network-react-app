import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from "./components/dialogs/Dialogs";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import {Route} from "react-router-dom";

function App(props) {
    return (
        <div className="wrapper">
            <Header/>
            <Navbar/>
            <div className="wrapper_content">
                <Route path='/profile'
                       render={() => <Profile state={props.state.profilePage}/>}/>
                <Route path='/dialogs'
                       render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}

export default App;