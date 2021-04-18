import React from 'react';
import styles from './Pagination.module.css'

const Pagination = React.memo(({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pagesCount = Math.ceil(100 / pageSize);

    let pages = [];
    for (let i=1; i<=pagesCount; i++) {
        pages.push(i);
    }

    return <div className={styles.pagination}>
            {
                pages.map(pageNumber => {
                    return <span
                        key={pageNumber}
                        className={currentPage === pageNumber ? styles.selectedPage : ''}
                        onClick={() => { onPageChanged(pageNumber) }}>
                            {pageNumber}
                        </span>;
                })
            }
        </div>
})

export default Pagination;