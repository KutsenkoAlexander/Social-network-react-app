import React, {useState} from 'react';
import styles from './Pagination.module.css'

const Pagination = React.memo(({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize=20}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i=1; i<=pagesCount; i++) {
        pages.push(i);
    }

    let[portionNumber, setPortionNumber] = useState(1);
    let portionCount = Math.ceil(pagesCount / portionSize);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className={styles.pagination}>
        { portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button> }
        { pages
            .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
            .map(pageNumber => {
                return <span
                    key={pageNumber}
                    className={currentPage === pageNumber ? styles.selectedPage : ''}
                    onClick={() => { onPageChanged(pageNumber) }}>
                    {pageNumber}
                </span>;
            })
        }
        { portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button> }
        </div>
})

export default Pagination;