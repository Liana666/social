import React from "react";
import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAc } from "../../redux/users-reducer";
import Users from "./Users";

const mapStatetoProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
    }

}

const mapDispatchtoProps = (dispatch) => {

    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },

        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },

        setUsers: (users) => {
            dispatch(setUsersAc(users));

        }
    }
}


const UsersContainer = connect(mapStatetoProps, mapDispatchtoProps)(Users);


export default UsersContainer;