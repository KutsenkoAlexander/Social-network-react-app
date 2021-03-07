import React from "react";
import styles from "./Users.module.css";
import * as axios from "axios";
import userAvatar from "./../../assets/img/avatar.jfif";

class Users extends React.Component{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged(pageNumber) {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i=1; i<=pagesCount; i++) {
            pages.push(i);
        }

        return <div>
            <div className={styles.pagination}>
                {
                    pages.map(pageNumber => {
                        return <span
                            className={this.props.currentPage === pageNumber && styles.selectedPage}
                            onClick={(e) => { this.onPageChanged(pageNumber) }}>
                            {pageNumber}
                        </span>;
                    })
                }
            </div>
            {
                this.props.users.map(user =>
                    <div key={user.id} className={styles.userItem}>
                        <div className={styles.avatar}>
                            <img alt={'avatar'} src={user.photos.small !== null ? user.photos.small : userAvatar}/>
                            {
                                user.followed
                                    ? <button onClick={() => { this.props.unfollow(user.id) }}>Unfollow</button>
                                    : <button onClick={() => { this.props.follow(user.id) }}>Follow</button>
                            }
                        </div>
                        <div>
                            <h3>{user.name}</h3>
                            <p>{user.status}</p>
                        </div>
                        <div className={styles.location}>
                            <p>{"user.location.country"}</p>
                            <p>{"user.location.city"}</p>
                        </div>
                    </div>
                )
            }
        </div>
    }
}

export default Users;