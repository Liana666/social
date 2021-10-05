import React, { createRef } from 'react';
import './MyPost.css';
import Post from './Post/Post';


function MyPost(props) {

    let newsPostElement = React.createRef();
    // const [comment, getComment] = useState([]);
    // const text = React.createRef();

    // function addPost() {
    //     getComment([...comment, text.current.value]);
    //     text.current.value = "";
    // }

    let addPost = () => {
        props.addPost();

    }

    let changeText = () => {
        let text = newsPostElement.current.value;
        props.changeText(text);



    }

    return (
        <div className="post">
            <div className="title-post">My Posts</div>
            <textarea onChange={changeText} value={props.newPostText} className="post-wrapper" ref={newsPostElement} placeholder='news...' />
            <div className="btn-wrapper">
                <button onClick={addPost} type='button' className="button">Add comment</button>
            </div>
            {props.posts.map(item => <Post like={item.like} post={item.post} />)}
        </div>
    )
}

export default MyPost;