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

const UsersContainer = React.memo(({
                                       getUsers,
                                       currentPage,
                                       pageSize,
                                       totalUsersCount,
                                       users,
                                       unfollow,
                                       follow,
                                       isFollowingProgress,
                                       isAuth,
                                       isFetching
}) => {
    useEffect(() => {
        getUsers(currentPage, pageSize);
    }, [getUsers, currentPage, pageSize])

    let onPageChanged = (pageNumber) => getUsers(pageNumber, pageSize);

    return <>
        {isFetching ? <Preloader/> : null}
        <Users totalUsersCount={totalUsersCount}
               pageSize={pageSize}
               currentPage={currentPage}
               onPageChanged={onPageChanged}
               users={users}
               unfollow={unfollow}
               follow={follow}
               isFollowingProgress={isFollowingProgress}
               isAuth={isAuth}
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