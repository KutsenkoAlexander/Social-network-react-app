import React from 'react';
import Header from "./Header";
import {setAuthUserData, setCurrentUserProfile} from "../../redux/authReducer";
import {connect} from "react-redux";
import {AuthAPI} from "../../api/authApi";
import {ProfileApi} from "../../api/profileApi";

class HeaderContainer extends React.Component {
    componentDidMount() {
        AuthAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    ProfileApi.getProfile(id)
                        .then(data => {
                            if (data) {
                                this.props.setCurrentUserProfile(data)
                                this.props.setAuthUserData(id, email, login);
                            }
                        });
                }
            });
    }

    render() {
        return <Header {...this.props}/>
    };
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    profile: state.auth.profile
})

export default connect(mapStateToProps, {setAuthUserData, setCurrentUserProfile})(HeaderContainer);