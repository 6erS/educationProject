import style from './NewPost.module.css';

const NewPost = () => {
    return (
        <div className={style.newPosts}>
            <div className={style.item}>
                <textarea placeholder='your news...'>{null}</textarea>
                <br />
                <input className={style.newPostsButton} type='button' value='Send' />
            </div>
        </div>
    );
}

export default NewPost;