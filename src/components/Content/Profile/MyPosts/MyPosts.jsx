import style from './MyPosts.module.css';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';
import myPostsState from "../../../../data/Profile/myPostsState";

const MyPosts = () => {
    let posts = myPostsState
        .map(p => <Post massage={p.text} LikeCount={`${p.count}`} />);

    return (
        <div className={style.wholeModule}>
            <div >
                <h1 className={style.header}>My posts</h1>
                <NewPost />
            </div>
            {posts}
        </div>
    );
}

export default MyPosts;