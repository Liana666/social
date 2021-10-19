let initialState = {
    users: [],
    pageSize: 5,
    totalCount: 20
};
const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, follow: true }
                    }
                    return u;

                })
            }

        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, follow: false }
                    }
                    return u;
                })
            }

        case 'SET_USERS':
            return { ...state, users: action.users }


        default:
            return state;

    }

}


export const followAC = (userId) => ({ type: 'FOLLOW', userId });
export const unfollowAC = (userId) => ({ type: 'UNFOLLOW', userId });
export const setUsersAc = (users) => ({ type: 'SET_USERS', users });



export default usersReducer;