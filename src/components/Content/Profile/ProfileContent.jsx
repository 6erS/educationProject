import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import style from "./ProfileContent.module.css";

const ProfileContent = (props) => {
    return (
        <div className={style.content}>
            <div className={style.content__background}>
                <img src='https://static.vecteezy.com/system/resources/thumbnails/003/127/955/small/abstract-white-and-grey-background-with-dynamic-waves-shape-free-vector.jpg' alt='' />
            </div>
            <div className={style.whole_profile}>
                <ProfileInfo localState={props.state.ProfilePage.ProfileInfoData}/>
                <MyPosts localPostState={props.state.ProfilePage.PostsData} />
            </div>

        </div>
    );
}

export default ProfileContent;