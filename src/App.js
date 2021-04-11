import './App.css';
import {Route, withRouter} from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {useEffect} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {initApp} from "./redux/appReducer";
import Preloader from "./components/Common/Preloader/Preloader";

const App = props => {

    useEffect(() => {props.initApp()})

    return <div>
        {
            !props.init
                ? <Preloader/>
                : <div className='App'>
                    <HeaderContainer/>
                    <Sidebar/>
                    <div className='wrapperContent'>
                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs'
                               render={() => <DialogsContainer/>}/>
                        <Route path='/news'
                               render={() => <News/>}/>
                        <Route path='/music'
                               render={() => <Music/>}/>
                        <Route path='/settings'
                               render={() => <Settings/>}/>
                        <Route path='/users'
                               render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </div>
                </div>
        }
    </div>
}

const mapStateToProps = (state) => ({init: state.app.init});

export default compose(
    withRouter,
    connect(mapStateToProps, {initApp})
)(App);