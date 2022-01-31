import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import style from "./ProfileContent.module.css";

const userAva = 'https://static.vecteezy.com/system/resources/thumbnails/003/127/955/small/abstract-white-and-grey-background-with-dynamic-waves-shape-free-vector.jpg';

const ProfileContent = () => {
    return (
        <div>
            <div className={style.content__background}>
                <img src={userAva} alt=''/>
            </div>
            <div className={style.whole_profile}>
                <ProfileInfo />
                <MyPosts />
            </div>
        </div>
    );
}

//
//<MyPosts/>
export default ProfileContent;