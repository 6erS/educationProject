import style from './MyPosts.module.css'
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            <div>
                <p>My posts</p>
                <NewPost />
            </div>
            <div className={style.posts}>
                <Post massage = "Hello world!"/>
                <Post massage = "It's my second post" />
            </div>
        </div>
    );
}

export default MyPosts;