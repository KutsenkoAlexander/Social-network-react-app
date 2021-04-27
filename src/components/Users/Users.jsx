import React from 'react';
import Pagination from '../Common/Pagination/Pagination';
import UserItem from "./UserItem";

const Users = React.memo(({
                              totalUsersCount,
                              pageSize,
                              currentPage,
                              onPageChanged,
                              users,
                              isAuth,
                              isFollowingProgress,
                              unfollow,
                              follow,
                              portionSize
}) => (
    <div>
        <Pagination totalItemsCount={totalUsersCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChanged={onPageChanged}
                    portionSize={portionSize}/>
        {
            users.map(user => <UserItem key={user.id}
                                        user={user}
                                        isAuth={isAuth}
                                        isFollowingProgress={isFollowingProgress}
                                        unfollow={unfollow}
                                        follow={follow}/>)
        }
    </div>
))

export default Users;