import {createSelector} from "reselect";

const fetchUsersSlc = (state) => state.usersPage.users
export const pageSizeSelector = (state) => state.usersPage.pageSize
export const totalUsersCountSelector = (state) => state.usersPage.totalUsersCount
export const currentPageSelector = (state) => state.usersPage.currentPage
export const isFetchingSelector = (state) => state.usersPage.isFetching
export const isFollowingProgressSelector = (state) => state.usersPage.isFollowingProgress
//just to know that you can use and create complex selector which depends on another simple selectors
export const userSelector = createSelector(fetchUsersSlc, (users) => {
    return users.filter(user => true);
})