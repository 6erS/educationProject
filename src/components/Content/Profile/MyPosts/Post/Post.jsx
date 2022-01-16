import style from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={style.item}>
            <div>{props.massage}</div>
            </div>
        </div>
    );
}

export default Post;