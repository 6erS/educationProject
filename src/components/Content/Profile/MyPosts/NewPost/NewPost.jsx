import style from './NewPost.module.css';

const NewPost = () => {
    return (
        <div>
            <div className={style.item}>
                <input></input>
                <button>Send</button>
            </div>
        </div>
    );
}

export default NewPost;