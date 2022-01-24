import LikeCount from './Likes/Like';
import style from './Post.module.css';

const Post = (props) => {
    debugger;
    return (
        <div>
            <div className={style.item}>
                <img src='https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg' alt='' />
                {props.massage} <br />
                <LikeCount count={props.LikeCount} />
            </div>
        </div>
    );
}

export default Post;