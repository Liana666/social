let initialState = {
    posts: [
        { id: 1, post: 'Hi, how are you?', like: 20 },
        { id: 2, post: 'I learning react', like: 2 },
        { id: 3, post: 'Do you like js?', like: 220 },
        { id: 4, post: 'Yo', like: 120 },
        { id: 5, post: 'yo', like: 20 }
    ],
    newPostText: 'Поделитесь новостью'
};

const contentReducer = (state = initialState, action) => {

    if (action.type === 'ADD-POST') {
        let newPost = {
            id: 6,
            post: state.newPostText,
            like: 0
        };

        return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: ""
        }
    }

    else if (action.type === 'GET-NEW-POST') {

        return {
            ...state,
            newPostText: action.newText
        }
    }

    return state;
}

export const addPostCreator = () => {
    return {
        type: 'ADD-POST'
    }

}

export const getNewPostCreator = (text) => {
    return {
        type: 'GET-NEW-POST',
        newText: text
    }
}

export default contentReducer;