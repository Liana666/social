import React, { createRef } from 'react';
import './MyPost.css';
import MyPost from './MyPost';
import { addPostCreator, getNewPostCreator } from '../../../redux/content-reducer';
import store from '../../../redux/redux-store';
import { connect } from 'react-redux';


let mapStatetoProps = (state) => {
    return {
        posts: state.ContentPage.posts,
        newPostText: state.ContentPage.newPostText
    }
}

let mapDispatchtoProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostCreator());

        },

        changeText: (text) => {
            let action = getNewPostCreator(text);
            dispatch(action);

        }

    }
}

const MyPostContainer = connect(mapStatetoProps, mapDispatchtoProps)(MyPost);

export default MyPostContainer;