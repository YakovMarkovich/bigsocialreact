import React from 'react';
import styles from "../../common/Paginator/Paginator.module.css";


const Paginator = ({totalUsersCount,pageSize, currentPage, onPageChanged, ...props} ) => {
    let pageCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return<div>
            {pages.map(p => {
                return <span className={currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 onPageChanged(p);
                             }}>{p}</span>
            })}
        </div>

};

export default Paginator;