import React from 'react';
import post from './Post.module.css';
import user from './userpng.png'
import { useState, } from 'react';

function Post(props) {
    // const [count, addCount] = useState(0);

    // const addLike = () => {
    //     addCount(count + 1)
    // }

    return (
        <div>
            <div className={post.post}>
                <img src={user} alt="" />
                <p>{props.post}</p>
            </div>
            <div className={post.like}>&#128156;{props.like}</div>
        </div>
    )
}

export default Post;