import LikeCount from './Likes/Like';
import style from './Post.module.css';
import profileInfoState from "../../../../../data/Profile/profileInfoState";

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src={profileInfoState.avaSRC} alt=''/>
            {props.massage} <br/>
            <LikeCount count={props.LikeCount}/>
        </div>
    );
}
//
export default Post;