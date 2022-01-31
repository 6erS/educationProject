import style from './NewPost.module.css';
import React from "react";

const NewPost = () => {

    return (
        <div className={style.newPosts}>
            <div>
                <textarea placeholder='your news...'/>
                <br />
                <input type='button' defaultValue='Send' />
            </div>
        </div>
    );
}

export default NewPost;