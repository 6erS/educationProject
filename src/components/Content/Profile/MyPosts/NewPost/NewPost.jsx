import style from './NewPost.module.css';
import React from "react";
import {addPost} from "../../../../../data/Profile/myPostsState";

const NewPost = () => {

    let newPostTextRef = React.createRef();

    function newPostCreator() {
        let newPostText = newPostTextRef.current.value;
        debugger;
        addPost(newPostText);
        alert(newPostText)
    }

    return (
        <div className={style.newPosts}>
            <div>
                <textarea ref={newPostTextRef} placeholder='your news...'/>
                <br />
                <input onClick={newPostCreator} className={style.newPostsButton} type='button' defaultValue='Send' />
            </div>
        </div>
    );
}

export default NewPost;