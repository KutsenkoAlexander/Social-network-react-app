import React, {useEffect} from 'react';
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
import {getIsAuthSelector} from "../../redux/authSelector";

const UsersContainer = React.memo(({getUsers, ...props}) => {

    useEffect(() => {
        getUsers(props.currentPage, props.pageSize);
    }, [getUsers, props.currentPage, props.pageSize])

    let onPageChanged = (pageNumber) => getUsers(pageNumber, props.pageSize);

    return <>
            {props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={props.totalUsersCount}
                   pageSize={props.pageSize}
                   currentPage={props.currentPage}
                   onPageChanged={onPageChanged}
                   users={props.users}
                   unfollow={props.unfollow}
                   follow={props.follow}
                   isFollowingProgress={props.isFollowingProgress}
                   isAuth={props.isAuth}
            />
        </>
})

const mapStateToProps = (state) => {
    return {
        users: userSelector(state),
        pageSize: pageSizeSelector(state),
        totalUsersCount: totalUsersCountSelector(state),
        currentPage: currentPageSelector(state),
        isFetching: isFetchingSelector(state),
        isFollowingProgress: isFollowingProgressSelector(state),
        isAuth: getIsAuthSelector(state)
    }
};

export default compose(
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers
    })
)(UsersContainer);