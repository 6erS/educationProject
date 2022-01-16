import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import style from "./ProfileContent.module.css";

const ProfileContent = () => {
    return (
        <div className={style.content}>
            <div className={style.content__background}>
                <img src='https://storge.pic2.me/cm/4096x1536/267/52c1edb5c6bfd.jpg' alt='' />
            </div>
            <div className={style.mini_profile}>
                <img src='https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg' alt='' /> + Discription
            </div>
            <MyPosts />
        </div>
    );
}

export default ProfileContent;