import './App.css';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import React, {useEffect} from "react";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initApp} from "./redux/appReducer";
import store from "./redux/redux-store";
import Preloader from "./components/Common/Preloader/Preloader";
import HeaderContainer from './components/Header/HeaderContainer';
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));

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
                               render={withSuspense(ProfileContainer)}/>
                        <Route path='/dialogs'
                               render={withSuspense(DialogsContainer)}/>
                        <Route path='/news'
                               render={() => <News/>}/>
                        <Route path='/music'
                               render={() => <Music/>}/>
                        <Route path='/settings'
                               render={() => <Settings/>}/>
                        <Route path='/users'
                               render={withSuspense(UsersContainer)}/>
                        <Route path='/login'
                               render={withSuspense(Login)}/>
                    </div>
                </div>
        }
    </div>
}

const mapStateToProps = (state) => ({init: state.app.init});

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initApp})
)(App)

const SocialNetworkApp = props => {
    return <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
}

export default SocialNetworkApp;