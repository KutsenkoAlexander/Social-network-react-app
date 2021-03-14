import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {setUserProfile} from '../../redux/profileReducer';
import {withRouter} from 'react-router-dom';
import {ProfileApi} from "../../api/profileApi";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.currentUserProfile ? this.props.currentUserProfile.userId : 15676;
        }
        ProfileApi.getProfile(userId).then(data => {
            this.props.setUserProfile(data)
        });
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    currentUserProfile: state.auth.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);