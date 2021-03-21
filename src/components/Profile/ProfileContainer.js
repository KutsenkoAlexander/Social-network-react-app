import React from 'react';
import Profile from './Profile';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getUserProfile} from '../../redux/profileReducer';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.currentUserProfile ? this.props.currentUserProfile.userId : 15676;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    currentUserProfile: state.auth.profile
});

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter
    // withAuthRedirect
)(ProfileContainer);