import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile} from '../../redux/profileReducer';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../Hoc/withAuthRedirect';

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

let withUrlDataContainerComponent = withRouter(ProfileContainer);
let withAuthRedirectContainerComponent = withAuthRedirect(withUrlDataContainerComponent);

export default connect(mapStateToProps, {getUserProfile})(withAuthRedirectContainerComponent);