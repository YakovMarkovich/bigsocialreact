import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, ...props}) => {
    //debugger

    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalUsersCount={totalUsersCount} pageSize={pageSize}/>
        {/* <button onClick={this.getUsers}>Get Users</button>*/}
        {props.users.map(u => <User user={u}
                                    key={u.id}
        followingInProgress={props.followingInProgress}
        follow={props.follow}
        unfollow={props.unfollow}/>)}
    </div>;
};

export default Users;