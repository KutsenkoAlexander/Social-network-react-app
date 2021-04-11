import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import {
    currentPageSelector,
    isFetchingSelector,
    isFollowingProgressSelector,
    pageSizeSelector,
    totalUsersCountSelector,
    userSelector
} from "../../redux/usersSelector";
import {
    follow,
    getUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow
} from '../../redux/usersReducer';
import {fetchIsAuthSlc} from "../../redux/authSelector";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => this.props.getUsers(pageNumber, this.props.pageSize);

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   isFollowingProgress={this.props.isFollowingProgress}
                   isAuth={this.props.isAuth}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: userSelector(state),
        pageSize: pageSizeSelector(state),
        totalUsersCount: totalUsersCountSelector(state),
        currentPage: currentPageSelector(state),
        isFetching: isFetchingSelector(state),
        isFollowingProgress: isFollowingProgressSelector(state),
        isAuth: fetchIsAuthSlc(state)
    }
};

export default compose(
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers
    })
)(UsersContainer);