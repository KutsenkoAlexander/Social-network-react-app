import React, {useEffect} from 'react';
import Profile from './Profile';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getStatus, getUserProfile, updateStatus} from '../../redux/profileReducer';

const ProfileContainer = props => {

    useEffect(() => {
        let userId = props.match.params.userId;
        if (!userId) {
            userId = props.authUserId;
            if (!userId) {
                props.history.push("/login");//redirect if user isn't auth bad practise
            }
        }
        if (userId) {
            props.getUserProfile(userId);
            props.getStatus(userId);
        }
    })

    return <Profile {...props}
                        profile={props.profile}
                        status={props.status}
                        updateStatus={props.updateStatus} />
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter
    // withAuthRedirect
)(ProfileContainer);