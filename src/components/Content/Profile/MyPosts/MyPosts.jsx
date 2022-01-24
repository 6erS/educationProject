import style from './MyPosts.module.css'
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';

const MyPosts = (props) => {
    let posts = props.state.ProfilePage.PostsData
        .map(p => <Post massage={p.text} LikeCount={`Like: ${p.count}`} />);

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